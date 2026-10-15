import{a as e,n as t,t as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-BZJXY1be.js";import{n as i,t as a}from"./useTranslation-B0Jg814S.js";import{a as o,i as s,n as c,r as l,t as u}from"./emotion-css.esm-DsoSFdsS.js";import{A as d,B as f,C as p,Dt as m,E as h,Et as g,G as _,H as v,J as y,K as b,L as x,N as S,O as C,Ot as w,P as T,R as E,S as D,T as O,Tt as k,V as A,Y as j,_ as M,_t as N,a as P,at as F,b as I,bt as L,d as R,dt as z,et as B,f as V,gt as ee,h as te,ht as ne,i as H,it as re,j as ie,k as U,kt as ae,m as oe,mt as se,n as ce,nt as le,o as ue,p as de,pt as fe,q as pe,r as me,rt as he,t as ge,tt as _e,ut as ve,vt as ye,w as W,wt as be,x as xe,yt as Se,z as Ce}from"./VisuallyHidden-qGzbw7Kb.js";import{t as we}from"./react-dom-BzEl8usk.js";import{A as Te,B as Ee,C as De,D as Oe,E as ke,F as Ae,I as je,L as Me,M as Ne,N as Pe,O as Fe,P as Ie,R as Le,S as Re,T as ze,V as Be,_ as Ve,a as He,b as Ue,c as We,f as Ge,g as Ke,i as qe,j as Je,k as Ye,l as Xe,n as Ze,o as Qe,p as $e,r as et,s as tt,t as nt,u as rt,v as it,x as at,y as ot,z as st}from"./useOverlayTriggerState-BXBHmCFe.js";import{_ as ct,c as lt,d as ut,f as dt,g as ft,h as pt,i as mt,m as ht,o as gt,p as _t,u as vt,v as yt}from"./ErrorNotice-Dg84DmiP.js";import{t as G}from"./jsx-runtime-DeHZSEgm.js";import{a as bt,c as xt,i as St,m as Ct,n as wt,o as Tt,p as Et,r as Dt,s as Ot,u as kt}from"./atlas-icons-react-CQxarVg9.js";function At(e){let t=(0,jt.useRef)(null),n=(0,jt.useRef)(void 0),r=(0,jt.useCallback)(t=>{if(typeof e==`function`){let n=e,r=n(t);return()=>{typeof r==`function`?r():n(null)}}if(e)return e.current=t,()=>{e.current=null}},[e]);return(0,jt.useMemo)(()=>({get current(){return t.current},set current(e){t.current=e,n.current&&=(n.current(),void 0),e!=null&&(n.current=r(e))}}),[r])}var jt;function Mt(){return(Mt=t((()=>{jt=r()})))()}var Nt,Pt;function Ft(){return(Ft=t((()=>{Nt=`react-aria-clear-focus`,Pt=`react-aria-focus`})))()}function It(e){let t=zt(be(e));t!==e&&(t&&Lt(t,e),e&&Rt(e,t))}function Lt(e,t){e.dispatchEvent(new FocusEvent(`blur`,{relatedTarget:t})),e.dispatchEvent(new FocusEvent(`focusout`,{bubbles:!0,relatedTarget:t}))}function Rt(e,t){e.dispatchEvent(new FocusEvent(`focus`,{relatedTarget:t})),e.dispatchEvent(new FocusEvent(`focusin`,{bubbles:!0,relatedTarget:t}))}function zt(e){let t=N(e),n=t?.getAttribute(`aria-activedescendant`);return n&&e.getElementById(n)||t}function Bt(){return(Bt=t((()=>{L(),m()})))()}var Vt;function Ht(){return(Ht=t((()=>{Vt={},Vt={collectionLabel:`مقترحات`}})))()}var Ut;function Wt(){return(Wt=t((()=>{Ut={},Ut={collectionLabel:`Предложения`}})))()}var Gt;function Kt(){return(Kt=t((()=>{Gt={},Gt={collectionLabel:`Návrhy`}})))()}var qt;function Jt(){return(Jt=t((()=>{qt={},qt={collectionLabel:`Forslag`}})))()}var Yt;function Xt(){return(Xt=t((()=>{Yt={},Yt={collectionLabel:`Empfehlungen`}})))()}var Zt;function Qt(){return(Qt=t((()=>{Zt={},Zt={collectionLabel:`Προτάσεις`}})))()}var $t;function en(){return(en=t((()=>{$t={},$t={collectionLabel:`Suggestions`}})))()}var tn;function nn(){return(nn=t((()=>{tn={},tn={collectionLabel:`Sugerencias`}})))()}var rn;function an(){return(an=t((()=>{rn={},rn={collectionLabel:`Soovitused`}})))()}var on;function sn(){return(sn=t((()=>{on={},on={collectionLabel:`Ehdotukset`}})))()}var cn;function ln(){return(ln=t((()=>{cn={},cn={collectionLabel:`Suggestions`}})))()}var un;function dn(){return(dn=t((()=>{un={},un={collectionLabel:`הצעות`}})))()}var fn;function pn(){return(pn=t((()=>{fn={},fn={collectionLabel:`Prijedlozi`}})))()}var mn;function hn(){return(hn=t((()=>{mn={},mn={collectionLabel:`Javaslatok`}})))()}var gn;function _n(){return(_n=t((()=>{gn={},gn={collectionLabel:`Suggerimenti`}})))()}var vn;function yn(){return(yn=t((()=>{vn={},vn={collectionLabel:`候補`}})))()}var bn;function xn(){return(xn=t((()=>{bn={},bn={collectionLabel:`제안`}})))()}var Sn;function Cn(){return(Cn=t((()=>{Sn={},Sn={collectionLabel:`Pasiūlymai`}})))()}var wn;function Tn(){return(Tn=t((()=>{wn={},wn={collectionLabel:`Ieteikumi`}})))()}var En;function Dn(){return(Dn=t((()=>{En={},En={collectionLabel:`Forslag`}})))()}var On;function kn(){return(kn=t((()=>{On={},On={collectionLabel:`Suggesties`}})))()}var An;function jn(){return(jn=t((()=>{An={},An={collectionLabel:`Sugestie`}})))()}var Mn;function Nn(){return(Nn=t((()=>{Mn={},Mn={collectionLabel:`Sugestões`}})))()}var Pn;function Fn(){return(Fn=t((()=>{Pn={},Pn={collectionLabel:`Sugestões`}})))()}var In;function Ln(){return(Ln=t((()=>{In={},In={collectionLabel:`Sugestii`}})))()}var Rn;function zn(){return(zn=t((()=>{Rn={},Rn={collectionLabel:`Предложения`}})))()}var Bn;function Vn(){return(Vn=t((()=>{Bn={},Bn={collectionLabel:`Návrhy`}})))()}var Hn;function Un(){return(Un=t((()=>{Hn={},Hn={collectionLabel:`Predlogi`}})))()}var Wn;function Gn(){return(Gn=t((()=>{Wn={},Wn={collectionLabel:`Predlozi`}})))()}var Kn;function qn(){return(qn=t((()=>{Kn={},Kn={collectionLabel:`Förslag`}})))()}var Jn;function Yn(){return(Yn=t((()=>{Jn={},Jn={collectionLabel:`Öneriler`}})))()}var Xn;function Zn(){return(Zn=t((()=>{Xn={},Xn={collectionLabel:`Пропозиції`}})))()}var Qn;function $n(){return($n=t((()=>{Qn={},Qn={collectionLabel:`建议`}})))()}var er;function tr(){return(tr=t((()=>{er={},er={collectionLabel:`建議`}})))()}var nr;function rr(){return(rr=t((()=>{Ht(),Wt(),Kt(),Jt(),Xt(),Qt(),en(),nn(),an(),sn(),ln(),dn(),pn(),hn(),_n(),yn(),xn(),Cn(),Tn(),Dn(),kn(),jn(),Nn(),Fn(),Ln(),zn(),Vn(),Un(),Gn(),qn(),Yn(),Zn(),$n(),tr(),nr={},nr={"ar-AE":Vt,"bg-BG":Ut,"cs-CZ":Gt,"da-DK":qt,"de-DE":Yt,"el-GR":Zt,"en-US":$t,"es-ES":tn,"et-EE":rn,"fi-FI":on,"fr-FR":cn,"he-IL":un,"hr-HR":fn,"hu-HU":mn,"it-IT":gn,"ja-JP":vn,"ko-KR":bn,"lt-LT":Sn,"lv-LV":wn,"nb-NO":En,"nl-NL":On,"pl-PL":An,"pt-BR":Mn,"pt-PT":Pn,"ro-RO":In,"ru-RU":Rn,"sk-SK":Bn,"sl-SI":Hn,"sr-SP":Wn,"sv-SE":Kn,"tr-TR":Jn,"uk-UA":Xn,"zh-CN":Qn,"zh-TW":er}})))()}function ir(e,t,n,r){let i=de(n),a=n==null;(0,ar.useEffect)(()=>{if(a||!e.current)return;let n=e.current;return n.addEventListener(t,i,r),()=>{n.removeEventListener(t,i,r)}},[e,t,r,a])}var ar;function or(){return(or=t((()=>{oe(),ar=r()})))()}function sr(e){return e&&e.__esModule?e.default:e}function cr(e,t){let{inputRef:n,collectionRef:r,filter:i,disableAutoFocusFirst:a=!1,disableVirtualFocus:o=!1}=e,s=U(),c=(0,lr.useRef)(void 0),l=(0,lr.useRef)(!1),u=(0,lr.useRef)(null),d=x()===`virtual`&&(re()||le()),[f,p]=(0,lr.useState)(!d&&!o),[m,g]=(0,lr.useState)(!1),[_,v]=(0,lr.useState)(!1);(0,lr.useEffect)(()=>()=>clearTimeout(c.current),[]);let y=de(e=>{!e.isTrusted&&f&&n.current&&N(be(n.current))!==n.current&&Ce()!==`touch`&&n.current.focus();let i=Se(e);e.isTrusted||!i||u.current===i.id||(clearTimeout(c.current),i===r.current?u.current&&!document.getElementById(u.current)&&(u.current=null,t.setFocusedNodeId(null)):l.current?(u.current=i.id,c.current=setTimeout(()=>{t.setFocusedNodeId(i.id)},500)):(u.current=i.id,t.setFocusedNodeId(i.id)),l.current=!1)}),[b,S]=(0,lr.useState)(null),C=(0,lr.useCallback)(e=>{S(e),e==null?g(!1):(e.getAttribute(`tabindex`)!=null&&p(!1),g(!0))},[]);ve(()=>(b?.addEventListener(`focusin`,y),()=>{b?.removeEventListener(`focusin`,y)}),[b]);let w=At((0,lr.useMemo)(()=>h(r,C),[r,C])),T=(0,lr.useCallback)(()=>{if(!r.current){v(!0);return}l.current=!0,r.current?.dispatchEvent(new CustomEvent(Pt,{cancelable:!0,bubbles:!0,detail:{focusStrategy:`first`}}))},[r]),E=(0,lr.useCallback)(e=>{v(!1),It(N()),u.current=null,t.setFocusedNodeId(null);let n=new CustomEvent(Nt,{cancelable:!0,bubbles:!0,detail:{clearFocusKey:e}});clearTimeout(c.current),l.current=!1,r.current?.dispatchEvent(n)},[r,t]),D=(0,lr.useRef)(``);ir(n,`beforeinput`,e=>{let{inputType:t}=e;D.current=t});let O=e=>{(D.current===`insertText`||D.current===`insertCompositionText`||D.current===`insertFromComposition`)&&!a?T():D.current&&(D.current.includes(`insert`)||D.current.includes(`delete`)||D.current.includes(`history`))&&(E(!0),zt(document)===n.current&&Rt(n.current,null)),t.setInputValue(e)},k=(0,lr.useRef)(null),A=e=>{if(k.current=Se(e),e.nativeEvent.isComposing)return;let t=u.current;switch(t!==null&&be(n.current).getElementById(t)==null&&(u.current=null,t=null),e.key){case`a`:if(Ee(e))return;break;case`Escape`:if(e.isDefaultPrevented())return;break;case` `:return;case`Tab`:`continuePropagation`in e&&e.continuePropagation();return;case`Home`:case`End`:case`PageDown`:case`PageUp`:case`ArrowUp`:case`ArrowDown`:case`ArrowRight`:case`ArrowLeft`:{if((e.key===`Home`||e.key===`End`)&&t==null&&e.shiftKey)return;if(e.key===`ArrowRight`||e.key===`ArrowLeft`){if(t==null){e.isPropagationStopped()||e.stopPropagation();return}break}e.preventDefault();let n=new CustomEvent(Pt,{cancelable:!0,bubbles:!0});r.current?.dispatchEvent(n);break}}e.isPropagationStopped()||e.stopPropagation();let i=!0;if(r.current!==null){if(t==null)i=r.current?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type,e.nativeEvent))||!1;else{let n=document.getElementById(t);n&&(i=n?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type,e.nativeEvent))||!1)}}if(i)switch(e.key){case`ArrowLeft`:case`ArrowRight`:E();break;case`Enter`:t!=null&&document.getElementById(t)?.dispatchEvent(new PointerEvent(`click`,e.nativeEvent));break}else e.preventDefault()},j=de(e=>{if(Se(e)===k.current){e.stopImmediatePropagation();let t=u.current;t==null?r.current?.dispatchEvent(new KeyboardEvent(e.type,e)):document.getElementById(t)?.dispatchEvent(new KeyboardEvent(e.type,e))}});(0,lr.useEffect)(()=>(document.addEventListener(`keyup`,j,!0),()=>{document.removeEventListener(`keyup`,j,!0)}),[]);let M=Te(sr(nr),`@react-aria/autocomplete`),P=Le({id:s,"aria-label":M.format(`collectionLabel`)}),F=(0,lr.useCallback)((e,n)=>!i||i(e,t.inputValue,n),[t.inputValue,i]),I=e=>{if(!e.isTrusted)return;let t=u.current?document.getElementById(u.current):null;t&&Lt(t,e.relatedTarget)},L=e=>{if(e.isTrusted&&u.current&&document.getElementById(u.current)){let t=Se(e);queueMicrotask(()=>{Lt(t,r.current),Rt(r.current,t)})}},R=e=>{e.button===0&&e.pointerType!==`touch`&&u.current!=null&&n.current!=null&&Se(e)===n.current&&E()},z={value:t.inputValue,onChange:O},B={onKeyDown:A,"aria-activedescendant":t.focusedNodeId??void 0,onBlur:I,onFocus:L,onPointerDown:R};return z={...z,...f&&m&&B,enterKeyHint:`go`,"aria-controls":m?s:void 0,"aria-autocomplete":`list`,autoCorrect:`off`,spellCheck:`false`,autoComplete:`off`},{inputProps:z,collectionProps:W(P,{shouldUseVirtualFocus:f,disallowTypeAhead:f,autoFocus:_?`first`:!1}),collectionRef:w,filter:i==null?void 0:F}}var lr;function ur(){return(ur=t((()=>{Ft(),Bt(),L(),v(),m(),rr(),F(),Be(),O(),oe(),or(),d(),st(),z(),Je(),Mt(),lr=r()})))()}function dr(e,t){let{elementType:n=`a`,onPress:r,onPressStart:i,onPressEnd:a,onPressChange:o,onClick:s,isDisabled:c,...l}=e,u={};n!==`a`&&(u={role:`link`,tabIndex:c?void 0:0});let{focusableProps:d}=te(e,t),{pressProps:f,isPressed:p}=ct({onPress:r,onPressStart:i,onPressEnd:a,onPressChange:o,onClick:s,isDisabled:c,ref:t}),m=R(l,{labelable:!0}),h=W(d,f),g=y(),v=b(e);return{isPressed:p,linkProps:W(m,v,{...h,...u,"aria-disabled":c||void 0,"aria-current":e[`aria-current`],onClick:t=>{f.onClick?.(t),_(t,g,e.href,e.routerOptions)}})}}function fr(){return(fr=t((()=>{V(),j(),O(),M(),yt()})))()}function K(e,t=`assertive`,n=mr){hr?hr.announce(e,t,n):(hr=new gr,(typeof IS_REACT_ACT_ENVIRONMENT==`boolean`?IS_REACT_ACT_ENVIRONMENT:typeof jest<`u`)?hr.announce(e,t,n):setTimeout(()=>{hr?.isAttached()&&hr?.announce(e,t,n)},100))}function pr(e){hr&&hr.clear(e)}var mr,hr,gr;function _r(){return(_r=t((()=>{mr=7e3,hr=null,gr=class{constructor(){this.node=null,this.assertiveLog=null,this.politeLog=null,typeof document<`u`&&(this.node=document.createElement(`div`),this.node.dataset.liveAnnouncer=`true`,Object.assign(this.node.style,{border:0,clip:`rect(0 0 0 0)`,clipPath:`inset(50%)`,height:`1px`,margin:`-1px`,overflow:`hidden`,padding:0,position:`absolute`,width:`1px`,whiteSpace:`nowrap`}),this.assertiveLog=this.createLog(`assertive`),this.node.appendChild(this.assertiveLog),this.politeLog=this.createLog(`polite`),this.node.appendChild(this.politeLog),document.body.prepend(this.node))}isAttached(){return this.node?.isConnected}createLog(e){let t=document.createElement(`div`);return t.setAttribute(`role`,`log`),t.setAttribute(`aria-live`,e),t.setAttribute(`aria-relevant`,`additions`),t}destroy(){this.node&&=(document.body.removeChild(this.node),null)}announce(e,t=`assertive`,n=mr){if(!this.node)return;let r=document.createElement(`div`);typeof e==`object`?(r.setAttribute(`role`,`img`),r.setAttribute(`aria-labelledby`,e[`aria-labelledby`])):r.textContent=e,t===`assertive`?this.assertiveLog?.appendChild(r):this.politeLog?.appendChild(r),e!==``&&setTimeout(()=>{r.remove()},n)}clear(e){this.node&&((!e||e===`assertive`)&&this.assertiveLog&&(this.assertiveLog.innerHTML=``),(!e||e===`polite`)&&this.politeLog&&(this.politeLog.innerHTML=``))}}})))()}var vr;function yr(){return(yr=t((()=>{vr={},vr={dateRange:e=>`${e.startDate} \u{625}\u{644}\u{649} ${e.endDate}`,dateSelected:e=>`${e.date} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,finishRangeSelectionPrompt:`انقر لإنهاء عملية تحديد نطاق التاريخ`,maximumDate:`آخر تاريخ متاح`,minimumDate:`أول تاريخ متاح`,next:`التالي`,previous:`السابق`,selectedDateDescription:e=>`\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${e.date}`,selectedRangeDescription:e=>`\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.dateRange}`,startRangeSelectionPrompt:`انقر لبدء عملية تحديد نطاق التاريخ`,todayDate:e=>`\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${e.date}`,todayDateSelected:e=>`\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${e.date} \u{645}\u{62D}\u{62F}\u{62F}`}})))()}var br;function xr(){return(xr=t((()=>{br={},br={dateRange:e=>`${e.startDate} \u{434}\u{43E} ${e.endDate}`,dateSelected:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{435} ${e.date}`,finishRangeSelectionPrompt:`Натиснете, за да довършите избора на времеви интервал`,maximumDate:`Последна налична дата`,minimumDate:`Първа налична дата`,next:`Напред`,previous:`Назад`,selectedDateDescription:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,startRangeSelectionPrompt:`Натиснете, за да пристъпите към избора на времеви интервал`,todayDate:e=>`\u{414}\u{43D}\u{435}\u{441}, ${e.date}`,todayDateSelected:e=>`\u{414}\u{43D}\u{435}\u{441}, ${e.date} \u{441}\u{430} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`}})))()}var Sr;function Cr(){return(Cr=t((()=>{Sr={},Sr={dateRange:e=>`${e.startDate} a\u{17E} ${e.endDate}`,dateSelected:e=>`Vybr\xe1no ${e.date}`,finishRangeSelectionPrompt:`Kliknutím dokončíte výběr rozsahu dat`,maximumDate:`Poslední dostupné datum`,minimumDate:`První dostupné datum`,next:`Další`,previous:`Předchozí`,selectedDateDescription:e=>`Vybran\xe9 datum: ${e.date}`,selectedRangeDescription:e=>`Vybran\xe9 obdob\xed: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknutím zahájíte výběr rozsahu dat`,todayDate:e=>`Dnes, ${e.date}`,todayDateSelected:e=>`Dnes, vybr\xe1no ${e.date}`}})))()}var wr;function Tr(){return(Tr=t((()=>{wr={},wr={dateRange:e=>`${e.startDate} til ${e.endDate}`,dateSelected:e=>`${e.date} valgt`,finishRangeSelectionPrompt:`Klik for at fuldføre valg af datoområde`,maximumDate:`Sidste ledige dato`,minimumDate:`Første ledige dato`,next:`Næste`,previous:`Forrige`,selectedDateDescription:e=>`Valgt dato: ${e.date}`,selectedRangeDescription:e=>`Valgt interval: ${e.dateRange}`,startRangeSelectionPrompt:`Klik for at starte valg af datoområde`,todayDate:e=>`I dag, ${e.date}`,todayDateSelected:e=>`I dag, ${e.date} valgt`}})))()}var Er;function Dr(){return(Dr=t((()=>{Er={},Er={dateRange:e=>`${e.startDate} bis ${e.endDate}`,dateSelected:e=>`${e.date} ausgew\xe4hlt`,finishRangeSelectionPrompt:`Klicken, um die Auswahl des Datumsbereichs zu beenden`,maximumDate:`Letztes verfügbares Datum`,minimumDate:`Erstes verfügbares Datum`,next:`Weiter`,previous:`Zurück`,selectedDateDescription:e=>`Ausgew\xe4hltes Datum: ${e.date}`,selectedRangeDescription:e=>`Ausgew\xe4hlter Bereich: ${e.dateRange}`,startRangeSelectionPrompt:`Klicken, um die Auswahl des Datumsbereichs zu beginnen`,todayDate:e=>`Heute, ${e.date}`,todayDateSelected:e=>`Heute, ${e.date} ausgew\xe4hlt`}})))()}var Or;function kr(){return(kr=t((()=>{Or={},Or={dateRange:e=>`${e.startDate} \u{3AD}\u{3C9}\u{3C2} ${e.endDate}`,dateSelected:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} ${e.date}`,finishRangeSelectionPrompt:`Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών`,maximumDate:`Τελευταία διαθέσιμη ημερομηνία`,minimumDate:`Πρώτη διαθέσιμη ημερομηνία`,next:`Επόμενο`,previous:`Προηγούμενο`,selectedDateDescription:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${e.date}`,selectedRangeDescription:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${e.dateRange}`,startRangeSelectionPrompt:`Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών`,todayDate:e=>`\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, ${e.date}`,todayDateSelected:e=>`\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3C4}\u{3B7}\u{3BA}\u{3B5} ${e.date}`}})))()}var Ar;function jr(){return(jr=t((()=>{Ar={},Ar={previous:`Previous`,next:`Next`,selectedDateDescription:e=>`Selected Date: ${e.date}`,selectedRangeDescription:e=>`Selected Range: ${e.dateRange}`,todayDate:e=>`Today, ${e.date}`,todayDateSelected:e=>`Today, ${e.date} selected`,dateSelected:e=>`${e.date} selected`,startRangeSelectionPrompt:`Click to start selecting date range`,finishRangeSelectionPrompt:`Click to finish selecting date range`,minimumDate:`First available date`,maximumDate:`Last available date`,dateRange:e=>`${e.startDate} to ${e.endDate}`}})))()}var Mr;function Nr(){return(Nr=t((()=>{Mr={},Mr={dateRange:e=>`${e.startDate} a ${e.endDate}`,dateSelected:e=>`${e.date} seleccionado`,finishRangeSelectionPrompt:`Haga clic para terminar de seleccionar rango de fechas`,maximumDate:`Última fecha disponible`,minimumDate:`Primera fecha disponible`,next:`Siguiente`,previous:`Anterior`,selectedDateDescription:e=>`Fecha seleccionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo seleccionado: ${e.dateRange}`,startRangeSelectionPrompt:`Haga clic para comenzar a seleccionar un rango de fechas`,todayDate:e=>`Hoy, ${e.date}`,todayDateSelected:e=>`Hoy, ${e.date} seleccionado`}})))()}var Pr;function Fr(){return(Fr=t((()=>{Pr={},Pr={dateRange:e=>`${e.startDate} kuni ${e.endDate}`,dateSelected:e=>`${e.date} valitud`,finishRangeSelectionPrompt:`Klõpsake kuupäevavahemiku valimise lõpetamiseks`,maximumDate:`Viimane saadaolev kuupäev`,minimumDate:`Esimene saadaolev kuupäev`,next:`Järgmine`,previous:`Eelmine`,selectedDateDescription:e=>`Valitud kuup\xe4ev: ${e.date}`,selectedRangeDescription:e=>`Valitud vahemik: ${e.dateRange}`,startRangeSelectionPrompt:`Klõpsake kuupäevavahemiku valimiseks`,todayDate:e=>`T\xe4na, ${e.date}`,todayDateSelected:e=>`T\xe4na, ${e.date} valitud`}})))()}var Ir;function Lr(){return(Lr=t((()=>{Ir={},Ir={dateRange:e=>`${e.startDate} \u{2013} ${e.endDate}`,dateSelected:e=>`${e.date} valittu`,finishRangeSelectionPrompt:`Lopeta päivämääräalueen valinta napsauttamalla tätä.`,maximumDate:`Viimeinen varattavissa oleva päivämäärä`,minimumDate:`Ensimmäinen varattavissa oleva päivämäärä`,next:`Seuraava`,previous:`Edellinen`,selectedDateDescription:e=>`Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,selectedRangeDescription:e=>`Valittu aikav\xe4li: ${e.dateRange}`,startRangeSelectionPrompt:`Aloita päivämääräalueen valinta napsauttamalla tätä.`,todayDate:e=>`T\xe4n\xe4\xe4n, ${e.date}`,todayDateSelected:e=>`T\xe4n\xe4\xe4n, ${e.date} valittu`}})))()}var Rr;function zr(){return(zr=t((()=>{Rr={},Rr={dateRange:e=>`${e.startDate} \xe0 ${e.endDate}`,dateSelected:e=>`${e.date} s\xe9lectionn\xe9`,finishRangeSelectionPrompt:`Cliquer pour finir de sélectionner la plage de dates`,maximumDate:`Dernière date disponible`,minimumDate:`Première date disponible`,next:`Suivant`,previous:`Précédent`,selectedDateDescription:e=>`Date s\xe9lectionn\xe9e\xa0: ${e.date}`,selectedRangeDescription:e=>`Plage s\xe9lectionn\xe9e\xa0: ${e.dateRange}`,startRangeSelectionPrompt:`Cliquer pour commencer à sélectionner la plage de dates`,todayDate:e=>`Aujourd'hui, ${e.date}`,todayDateSelected:e=>`Aujourd\u{2019}hui, ${e.date} s\xe9lectionn\xe9`}})))()}var Br;function Vr(){return(Vr=t((()=>{Br={},Br={dateRange:e=>`${e.startDate} \u{5E2}\u{5D3} ${e.endDate}`,dateSelected:e=>`${e.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,finishRangeSelectionPrompt:`חץ כדי לסיים את בחירת טווח התאריכים`,maximumDate:`תאריך פנוי אחרון`,minimumDate:`תאריך פנוי ראשון`,next:`הבא`,previous:`הקודם`,selectedDateDescription:e=>`\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.date}`,selectedRangeDescription:e=>`\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.dateRange}`,startRangeSelectionPrompt:`לחץ כדי להתחיל בבחירת טווח התאריכים`,todayDate:e=>`\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${e.date}`,todayDateSelected:e=>`\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${e.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`}})))()}var Hr;function Ur(){return(Ur=t((()=>{Hr={},Hr={dateRange:e=>`${e.startDate} do ${e.endDate}`,dateSelected:e=>`${e.date} odabran`,finishRangeSelectionPrompt:`Kliknite da dovršite raspon odabranih datuma`,maximumDate:`Posljednji raspoloživi datum`,minimumDate:`Prvi raspoloživi datum`,next:`Sljedeći`,previous:`Prethodni`,selectedDateDescription:e=>`Odabrani datum: ${e.date}`,selectedRangeDescription:e=>`Odabrani raspon: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknite da započnete raspon odabranih datuma`,todayDate:e=>`Danas, ${e.date}`,todayDateSelected:e=>`Danas, odabran ${e.date}`}})))()}var Wr;function Gr(){return(Gr=t((()=>{Wr={},Wr={dateRange:e=>`${e.startDate}\u{2013}${e.endDate}`,dateSelected:e=>`${e.date} kiv\xe1lasztva`,finishRangeSelectionPrompt:`Kattintson a dátumtartomány kijelölésének befejezéséhez`,maximumDate:`Utolsó elérhető dátum`,minimumDate:`Az első elérhető dátum`,next:`Következő`,previous:`Előző`,selectedDateDescription:e=>`Kijel\xf6lt d\xe1tum: ${e.date}`,selectedRangeDescription:e=>`Kijel\xf6lt tartom\xe1ny: ${e.dateRange}`,startRangeSelectionPrompt:`Kattintson a dátumtartomány kijelölésének indításához`,todayDate:e=>`Ma, ${e.date}`,todayDateSelected:e=>`Ma, ${e.date} kijel\xf6lve`}})))()}var Kr;function qr(){return(qr=t((()=>{Kr={},Kr={dateRange:e=>`Da ${e.startDate} a ${e.endDate}`,dateSelected:e=>`${e.date} selezionata`,finishRangeSelectionPrompt:`Fai clic per completare la selezione dell’intervallo di date`,maximumDate:`Ultima data disponibile`,minimumDate:`Prima data disponibile`,next:`Successivo`,previous:`Precedente`,selectedDateDescription:e=>`Data selezionata: ${e.date}`,selectedRangeDescription:e=>`Intervallo selezionato: ${e.dateRange}`,startRangeSelectionPrompt:`Fai clic per selezionare l’intervallo di date`,todayDate:e=>`Oggi, ${e.date}`,todayDateSelected:e=>`Oggi, ${e.date} selezionata`}})))()}var Jr;function Yr(){return(Yr=t((()=>{Jr={},Jr={dateRange:e=>`${e.startDate} \u{304B}\u{3089} ${e.endDate}`,dateSelected:e=>`${e.date} \u{3092}\u{9078}\u{629E}`,finishRangeSelectionPrompt:`クリックして日付範囲の選択を終了`,maximumDate:`最終利用可能日`,minimumDate:`最初の利用可能日`,next:`次へ`,previous:`前へ`,selectedDateDescription:e=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${e.date}`,selectedRangeDescription:e=>`\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${e.dateRange}`,startRangeSelectionPrompt:`クリックして日付範囲の選択を開始`,todayDate:e=>`\u{672C}\u{65E5}\u{3001}${e.date}`,todayDateSelected:e=>`\u{672C}\u{65E5}\u{3001}${e.date} \u{3092}\u{9078}\u{629E}`}})))()}var Xr;function Zr(){return(Zr=t((()=>{Xr={},Xr={dateRange:e=>`${e.startDate} ~ ${e.endDate}`,dateSelected:e=>`${e.date} \u{C120}\u{D0DD}\u{B428}`,finishRangeSelectionPrompt:`날짜 범위 선택을 완료하려면 클릭하십시오.`,maximumDate:`마지막으로 사용 가능한 일자`,minimumDate:`처음으로 사용 가능한 일자`,next:`다음`,previous:`이전`,selectedDateDescription:e=>`\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${e.date}`,selectedRangeDescription:e=>`\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${e.dateRange}`,startRangeSelectionPrompt:`날짜 범위 선택을 시작하려면 클릭하십시오.`,todayDate:e=>`\u{C624}\u{B298}, ${e.date}`,todayDateSelected:e=>`\u{C624}\u{B298}, ${e.date} \u{C120}\u{D0DD}\u{B428}`}})))()}var Qr;function $r(){return($r=t((()=>{Qr={},Qr={dateRange:e=>`Nuo ${e.startDate} iki ${e.endDate}`,dateSelected:e=>`Pasirinkta ${e.date}`,finishRangeSelectionPrompt:`Spustelėkite, kad baigtumėte pasirinkti datų intervalą`,maximumDate:`Paskutinė galima data`,minimumDate:`Pirmoji galima data`,next:`Paskesnis`,previous:`Ankstesnis`,selectedDateDescription:e=>`Pasirinkta data: ${e.date}`,selectedRangeDescription:e=>`Pasirinktas intervalas: ${e.dateRange}`,startRangeSelectionPrompt:`Spustelėkite, kad pradėtumėte pasirinkti datų intervalą`,todayDate:e=>`\u{160}iandien, ${e.date}`,todayDateSelected:e=>`\u{160}iandien, pasirinkta ${e.date}`}})))()}var ei;function ti(){return(ti=t((()=>{ei={},ei={dateRange:e=>`No ${e.startDate} l\u{12B}dz ${e.endDate}`,dateSelected:e=>`Atlas\u{12B}ts: ${e.date}`,finishRangeSelectionPrompt:`Noklikšķiniet, lai pabeigtu datumu diapazona atlasi`,maximumDate:`Pēdējais pieejamais datums`,minimumDate:`Pirmais pieejamais datums`,next:`Tālāk`,previous:`Atpakaļ`,selectedDateDescription:e=>`Atlas\u{12B}tais datums: ${e.date}`,selectedRangeDescription:e=>`Atlas\u{12B}tais diapazons: ${e.dateRange}`,startRangeSelectionPrompt:`Noklikšķiniet, lai sāktu datumu diapazona atlasi`,todayDate:e=>`\u{160}odien, ${e.date}`,todayDateSelected:e=>`Atlas\u{12B}ta \u{161}odiena, ${e.date}`}})))()}var ni;function ri(){return(ri=t((()=>{ni={},ni={dateRange:e=>`${e.startDate} til ${e.endDate}`,dateSelected:e=>`${e.date} valgt`,finishRangeSelectionPrompt:`Klikk for å fullføre valg av datoområde`,maximumDate:`Siste tilgjengelige dato`,minimumDate:`Første tilgjengelige dato`,next:`Neste`,previous:`Forrige`,selectedDateDescription:e=>`Valgt dato: ${e.date}`,selectedRangeDescription:e=>`Valgt omr\xe5de: ${e.dateRange}`,startRangeSelectionPrompt:`Klikk for å starte valg av datoområde`,todayDate:e=>`I dag, ${e.date}`,todayDateSelected:e=>`I dag, ${e.date} valgt`}})))()}var ii;function ai(){return(ai=t((()=>{ii={},ii={dateRange:e=>`${e.startDate} tot ${e.endDate}`,dateSelected:e=>`${e.date} geselecteerd`,finishRangeSelectionPrompt:`Klik om de selectie van het datumbereik te voltooien`,maximumDate:`Laatste beschikbare datum`,minimumDate:`Eerste beschikbare datum`,next:`Volgende`,previous:`Vorige`,selectedDateDescription:e=>`Geselecteerde datum: ${e.date}`,selectedRangeDescription:e=>`Geselecteerd bereik: ${e.dateRange}`,startRangeSelectionPrompt:`Klik om het datumbereik te selecteren`,todayDate:e=>`Vandaag, ${e.date}`,todayDateSelected:e=>`Vandaag, ${e.date} geselecteerd`}})))()}var oi;function si(){return(si=t((()=>{oi={},oi={dateRange:e=>`${e.startDate} do ${e.endDate}`,dateSelected:e=>`Wybrano ${e.date}`,finishRangeSelectionPrompt:`Kliknij, aby zakończyć wybór zakresu dat`,maximumDate:`Ostatnia dostępna data`,minimumDate:`Pierwsza dostępna data`,next:`Dalej`,previous:`Wstecz`,selectedDateDescription:e=>`Wybrana data: ${e.date}`,selectedRangeDescription:e=>`Wybrany zakres: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknij, aby rozpocząć wybór zakresu dat`,todayDate:e=>`Dzisiaj, ${e.date}`,todayDateSelected:e=>`Dzisiaj wybrano ${e.date}`}})))()}var ci;function li(){return(li=t((()=>{ci={},ci={dateRange:e=>`${e.startDate} a ${e.endDate}`,dateSelected:e=>`${e.date} selecionado`,finishRangeSelectionPrompt:`Clique para concluir a seleção do intervalo de datas`,maximumDate:`Última data disponível`,minimumDate:`Primeira data disponível`,next:`Próximo`,previous:`Anterior`,selectedDateDescription:e=>`Data selecionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo selecionado: ${e.dateRange}`,startRangeSelectionPrompt:`Clique para iniciar a seleção do intervalo de datas`,todayDate:e=>`Hoje, ${e.date}`,todayDateSelected:e=>`Hoje, ${e.date} selecionado`}})))()}var ui;function di(){return(di=t((()=>{ui={},ui={dateRange:e=>`${e.startDate} a ${e.endDate}`,dateSelected:e=>`${e.date} selecionado`,finishRangeSelectionPrompt:`Clique para terminar de selecionar o intervalo de datas`,maximumDate:`Última data disponível`,minimumDate:`Primeira data disponível`,next:`Próximo`,previous:`Anterior`,selectedDateDescription:e=>`Data selecionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo selecionado: ${e.dateRange}`,startRangeSelectionPrompt:`Clique para começar a selecionar o intervalo de datas`,todayDate:e=>`Hoje, ${e.date}`,todayDateSelected:e=>`Hoje, ${e.date} selecionado`}})))()}var fi;function pi(){return(pi=t((()=>{fi={},fi={dateRange:e=>`De la ${e.startDate} p\xe2n\u{103} la ${e.endDate}`,dateSelected:e=>`${e.date} selectat\u{103}`,finishRangeSelectionPrompt:`Apăsaţi pentru a finaliza selecţia razei pentru dată`,maximumDate:`Ultima dată disponibilă`,minimumDate:`Prima dată disponibilă`,next:`Următorul`,previous:`Înainte`,selectedDateDescription:e=>`Dat\u{103} selectat\u{103}: ${e.date}`,selectedRangeDescription:e=>`Interval selectat: ${e.dateRange}`,startRangeSelectionPrompt:`Apăsaţi pentru a începe selecţia razei pentru dată`,todayDate:e=>`Ast\u{103}zi, ${e.date}`,todayDateSelected:e=>`Azi, ${e.date} selectat\u{103}`}})))()}var mi;function hi(){return(hi=t((()=>{mi={},mi={dateRange:e=>`\u{421} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,dateSelected:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,finishRangeSelectionPrompt:`Щелкните, чтобы завершить выбор диапазона дат`,maximumDate:`Последняя доступная дата`,minimumDate:`Первая доступная дата`,next:`Далее`,previous:`Назад`,selectedDateDescription:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,startRangeSelectionPrompt:`Щелкните, чтобы начать выбор диапазона дат`,todayDate:e=>`\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, ${e.date}`,todayDateSelected:e=>`\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`}})))()}var gi;function _i(){return(_i=t((()=>{gi={},gi={dateRange:e=>`Od ${e.startDate} do ${e.endDate}`,dateSelected:e=>`Vybrat\xfd d\xe1tum ${e.date}`,finishRangeSelectionPrompt:`Kliknutím dokončíte výber rozsahu dátumov`,maximumDate:`Posledný dostupný dátum`,minimumDate:`Prvý dostupný dátum`,next:`Nasledujúce`,previous:`Predchádzajúce`,selectedDateDescription:e=>`Vybrat\xfd d\xe1tum: ${e.date}`,selectedRangeDescription:e=>`Vybrat\xfd rozsah: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknutím spustíte výber rozsahu dátumov`,todayDate:e=>`Dnes ${e.date}`,todayDateSelected:e=>`Vybrat\xfd dne\u{161}n\xfd d\xe1tum ${e.date}`}})))()}var vi;function yi(){return(yi=t((()=>{vi={},vi={dateRange:e=>`${e.startDate} do ${e.endDate}`,dateSelected:e=>`${e.date} izbrano`,finishRangeSelectionPrompt:`Kliknite za dokončanje izbire datumskega obsega`,maximumDate:`Zadnji razpoložljivi datum`,minimumDate:`Prvi razpoložljivi datum`,next:`Naprej`,previous:`Nazaj`,selectedDateDescription:e=>`Izbrani datum: ${e.date}`,selectedRangeDescription:e=>`Izbrano obmo\u{10D}je: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknite za začetek izbire datumskega obsega`,todayDate:e=>`Danes, ${e.date}`,todayDateSelected:e=>`Danes, ${e.date} izbrano`}})))()}var bi;function xi(){return(xi=t((()=>{bi={},bi={dateRange:e=>`${e.startDate} do ${e.endDate}`,dateSelected:e=>`${e.date} izabran`,finishRangeSelectionPrompt:`Kliknite da dovršite opseg izabranih datuma`,maximumDate:`Zadnji raspoloživi datum`,minimumDate:`Prvi raspoloživi datum`,next:`Sledeći`,previous:`Prethodni`,selectedDateDescription:e=>`Izabrani datum: ${e.date}`,selectedRangeDescription:e=>`Izabrani period: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknite da započnete opseg izabranih datuma`,todayDate:e=>`Danas, ${e.date}`,todayDateSelected:e=>`Danas, izabran ${e.date}`}})))()}var Si;function Ci(){return(Ci=t((()=>{Si={},Si={dateRange:e=>`${e.startDate} till ${e.endDate}`,dateSelected:e=>`${e.date} har valts`,finishRangeSelectionPrompt:`Klicka för att avsluta val av datumintervall`,maximumDate:`Sista tillgängliga datum`,minimumDate:`Första tillgängliga datum`,next:`Nästa`,previous:`Föregående`,selectedDateDescription:e=>`Valt datum: ${e.date}`,selectedRangeDescription:e=>`Valt intervall: ${e.dateRange}`,startRangeSelectionPrompt:`Klicka för att välja datumintervall`,todayDate:e=>`Idag, ${e.date}`,todayDateSelected:e=>`Idag, ${e.date} har valts`}})))()}var wi;function Ti(){return(Ti=t((()=>{wi={},wi={dateRange:e=>`${e.startDate} - ${e.endDate}`,dateSelected:e=>`${e.date} se\xe7ildi`,finishRangeSelectionPrompt:`Tarih aralığı seçimini tamamlamak için tıklayın`,maximumDate:`Son müsait tarih`,minimumDate:`İlk müsait tarih`,next:`Sonraki`,previous:`Önceki`,selectedDateDescription:e=>`Se\xe7ilen Tarih: ${e.date}`,selectedRangeDescription:e=>`Se\xe7ilen Aral\u{131}k: ${e.dateRange}`,startRangeSelectionPrompt:`Tarih aralığı seçimini başlatmak için tıklayın`,todayDate:e=>`Bug\xfcn, ${e.date}`,todayDateSelected:e=>`Bug\xfcn, ${e.date} se\xe7ildi`}})))()}var Ei;function Di(){return(Di=t((()=>{Ei={},Ei={dateRange:e=>`${e.startDate} \u{2014} ${e.endDate}`,dateSelected:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,finishRangeSelectionPrompt:`Натисніть, щоб завершити вибір діапазону дат`,maximumDate:`Остання доступна дата`,minimumDate:`Перша доступна дата`,next:`Наступний`,previous:`Попередній`,selectedDateDescription:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,startRangeSelectionPrompt:`Натисніть, щоб почати вибір діапазону дат`,todayDate:e=>`\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, ${e.date}`,todayDateSelected:e=>`\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`}})))()}var Oi;function ki(){return(ki=t((()=>{Oi={},Oi={dateRange:e=>`${e.startDate} \u{81F3} ${e.endDate}`,dateSelected:e=>`\u{5DF2}\u{9009}\u{62E9} ${e.date}`,finishRangeSelectionPrompt:`单击以完成选择日期范围`,maximumDate:`最后一个可用日期`,minimumDate:`第一个可用日期`,next:`下一页`,previous:`上一页`,selectedDateDescription:e=>`\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,selectedRangeDescription:e=>`\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.dateRange}`,startRangeSelectionPrompt:`单击以开始选择日期范围`,todayDate:e=>`\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`,todayDateSelected:e=>`\u{5DF2}\u{9009}\u{62E9}\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`}})))()}var Ai;function ji(){return(ji=t((()=>{Ai={},Ai={dateRange:e=>`${e.startDate} \u{81F3} ${e.endDate}`,dateSelected:e=>`\u{5DF2}\u{9078}\u{53D6} ${e.date}`,finishRangeSelectionPrompt:`按一下以完成選取日期範圍`,maximumDate:`最後一個可用日期`,minimumDate:`第一個可用日期`,next:`下一頁`,previous:`上一頁`,selectedDateDescription:e=>`\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,selectedRangeDescription:e=>`\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${e.dateRange}`,startRangeSelectionPrompt:`按一下以開始選取日期範圍`,todayDate:e=>`\u{4ECA}\u{5929}\u{FF0C}${e.date}`,todayDateSelected:e=>`\u{5DF2}\u{9078}\u{53D6}\u{4ECA}\u{5929}\u{FF0C}${e.date}`}})))()}var Mi;function Ni(){return(Ni=t((()=>{yr(),xr(),Cr(),Tr(),Dr(),kr(),jr(),Nr(),Fr(),Lr(),zr(),Vr(),Ur(),Gr(),qr(),Yr(),Zr(),$r(),ti(),ri(),ai(),si(),li(),di(),pi(),hi(),_i(),yi(),xi(),Ci(),Ti(),Di(),ki(),ji(),Mi={},Mi={"ar-AE":vr,"bg-BG":br,"cs-CZ":Sr,"da-DK":wr,"de-DE":Er,"el-GR":Or,"en-US":Ar,"es-ES":Mr,"et-EE":Pr,"fi-FI":Ir,"fr-FR":Rr,"he-IL":Br,"hr-HR":Hr,"hu-HU":Wr,"it-IT":Kr,"ja-JP":Jr,"ko-KR":Xr,"lt-LT":Qr,"lv-LV":ei,"nb-NO":ni,"nl-NL":ii,"pl-PL":oi,"pt-BR":ci,"pt-PT":ui,"ro-RO":fi,"ru-RU":mi,"sk-SK":gi,"sl-SI":vi,"sr-SP":bi,"sv-SE":Si,"tr-TR":wi,"uk-UA":Ei,"zh-CN":Oi,"zh-TW":Ai}})))()}function Pi(e,t){let n=(0,Fi.useRef)(null);return e&&n.current&&t(e,n.current)&&(e=n.current),n.current=e,e}var Fi;function Ii(){return(Ii=t((()=>{Fi=r()})))()}function Li(e,t){return e-t*Math.floor(e/t)}function Ri(e,t,n,r){t=Bi(e,t);let i=t-1,a=-2;return n<=2?a=0:zi(t)&&(a=-1),1721425+365*i+Math.floor(i/4)-Math.floor(i/100)+Math.floor(i/400)+Math.floor((367*n-362)/12+a+r)}function zi(e){return e%4==0&&(e%100!=0||e%400==0)}function Bi(e,t){return e===`BC`?1-t:t}function Vi(e){let t=`AD`;return e<=0&&(t=`BC`,e=1-e),[t,e]}var Hi,Ui,Wi;function Gi(){return(Gi=t((()=>{No(),Hi=1721426,Ui={standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]},Wi=class{fromJulianDay(e){let t=e,n=t-Hi,r=Math.floor(n/146097),i=Li(n,146097),a=Math.floor(i/36524),o=Li(i,36524),s=Math.floor(o/1461),c=Li(o,1461),l=Math.floor(c/365),[u,d]=Vi(r*400+a*100+s*4+l+ +(a!==4&&l!==4)),f=t-Ri(u,d,1,1),p=2;t<Ri(u,d,3,1)?p=0:zi(d)&&(p=1);let m=Math.floor(((f+p)*12+373)/367),h=t-Ri(u,d,m,1)+1;return new Ao(u,d,m,h)}toJulianDay(e){return Ri(e.era,e.year,e.month,e.day)}getDaysInMonth(e){return Ui[zi(e.year)?`leapyear`:`standard`][e.month-1]}getMonthsInYear(e){return 12}getDaysInYear(e){return zi(e.year)?366:365}getMaximumMonthsInYear(){return 12}getMaximumDaysInMonth(){return 31}getYearsInEra(e){return 9999}getEras(){return[`BC`,`AD`]}isInverseEra(e){return e.era===`BC`}balanceDate(e){e.year<=0&&(e.era=e.era===`BC`?`AD`:`BC`,e.year=1-e.year)}constructor(){this.identifier=`gregory`}}})))()}var Ki;function qi(){return(qi=t((()=>{Ki={"001":1,AD:1,AE:6,AF:6,AI:1,AL:1,AM:1,AN:1,AR:1,AT:1,AU:1,AX:1,AZ:1,BA:1,BE:1,BG:1,BH:6,BM:1,BN:1,BY:1,CH:1,CL:1,CM:1,CN:1,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DZ:6,EC:1,EE:1,EG:6,ES:1,FI:1,FJ:1,FO:1,FR:1,GB:1,GE:1,GF:1,GP:1,GR:1,HR:1,HU:1,IE:1,IQ:6,IR:6,IS:1,IT:1,JO:6,KG:1,KW:6,KZ:1,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MK:1,MN:1,MQ:1,MV:5,MY:1,NL:1,NO:1,NZ:1,OM:6,PL:1,QA:6,RE:1,RO:1,RS:1,RU:1,SD:6,SE:1,SI:1,SK:1,SM:1,SY:6,TJ:1,TM:1,TR:1,UA:1,UY:1,UZ:1,VA:1,VN:1,XK:1}})))()}function Ji(e,t){return t=Fa(t,e.calendar),e.era===t.era&&e.year===t.year&&e.month===t.month&&e.day===t.day}function Yi(e,t){return t=Fa(t,e.calendar),e=sa(e),t=sa(t),e.era===t.era&&e.year===t.year&&e.month===t.month}function Xi(e,t){return Zi(e.calendar,t.calendar)&&Ji(e,t)}function Zi(e,t){return e.isEqual?.(t)??t.isEqual?.(e)??e.identifier===t.identifier}function Qi(e,t){return Ji(e,ta(t))}function $i(e,t,n){let r=e.calendar.toJulianDay(e),i=n?_a[n]:pa(t),a=Math.ceil(r+1-i)%7;return a<0&&(a+=7),a}function ea(e){return ja(Date.now(),e)}function ta(e){return Ma(ea(e))}function na(e,t){return e.calendar.toJulianDay(e)-t.calendar.toJulianDay(t)}function ra(e,t){return ia(e)-ia(t)}function ia(e){return e.hour*36e5+e.minute*6e4+e.second*1e3+e.millisecond}function aa(){return va??=new Intl.DateTimeFormat().resolvedOptions().timeZone,va}function oa(){return ya}function sa(e){return e.subtract({days:e.day-1})}function ca(e){return e.add({days:e.calendar.getDaysInMonth(e)-e.day})}function la(e){return sa(e.subtract({months:e.month-1}))}function ua(e,t,n){let r=$i(e,t,n);return e.subtract({days:r})}function da(e,t,n){return ua(e,t,n).add({days:6})}function fa(e){if(Intl.Locale){let t=ba.get(e);return t||(t=new Intl.Locale(e).maximize().region,t&&ba.set(e,t)),t}let t=e.split(`-`)[1];return t===`u`?void 0:t}function pa(e){let t=xa.get(e);if(!t){if(Intl.Locale){let n=new Intl.Locale(e);if(`getWeekInfo`in n&&(t=n.getWeekInfo(),t))return xa.set(e,t),t.firstDay}let n=fa(e);if(e.includes(`-fw-`)){let n=e.split(`-fw-`)[1].split(`-`)[0];t=n===`mon`?{firstDay:1}:n===`tue`?{firstDay:2}:n===`wed`?{firstDay:3}:n===`thu`?{firstDay:4}:n===`fri`?{firstDay:5}:n===`sat`?{firstDay:6}:{firstDay:0}}else t=e.includes(`-ca-iso8601`)?{firstDay:1}:{firstDay:n&&Ki[n]||0};xa.set(e,t)}return t.firstDay}function ma(e,t,n){let r=e.calendar.getDaysInMonth(e);return Math.ceil(($i(sa(e),t,n)+r)/7)}function ha(e,t){return e&&t?e.compare(t)<=0?e:t:e||t}function ga(e,t){return e&&t?e.compare(t)>=0?e:t:e||t}var _a,va,ya,ba,xa;function Sa(){return(Sa=t((()=>{Va(),qi(),_a={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6},va=null,ya=!1,ba=new Map,xa=new Map})))()}function Ca(e){return e=Fa(e,new Wi),wa(Bi(e.era,e.year),e.month,e.day,e.hour,e.minute,e.second,e.millisecond)}function wa(e,t,n,r,i,a,o){let s=new Date;return s.setUTCHours(r,i,a,o),s.setUTCFullYear(e,t-1,n),s.getTime()}function Ta(e,t){if(t===`UTC`)return 0;if(e>0&&t===aa()&&!oa())return new Date(e).getTimezoneOffset()*-6e4;let{year:n,month:r,day:i,hour:a,minute:o,second:s}=Ea(e,t);return wa(n,r,i,a,o,s,0)-Math.floor(e/1e3)*1e3}function Ea(e,t){let n=za.get(t);n||(n=new Intl.DateTimeFormat(`en-US`,{timeZone:t,hour12:!1,era:`short`,year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`,second:`numeric`}),za.set(t,n));let r=n.formatToParts(new Date(e)),i={};for(let e of r)e.type!==`literal`&&(i[e.type]=e.value);return{year:i.era===`BC`||i.era===`B`?-i.year+1:+i.year,month:+i.month,day:+i.day,hour:i.hour===`24`?0:+i.hour,minute:+i.minute,second:+i.second}}function Da(e,t,n,r){return(n===r?[n]:[n,r]).filter(n=>Oa(e,t,n))}function Oa(e,t,n){let r=Ea(n,t);return e.year===r.year&&e.month===r.month&&e.day===r.day&&e.hour===r.hour&&e.minute===r.minute&&e.second===r.second}function ka(e,t,n=`compatible`){let r=Na(e);if(t===`UTC`)return Ca(r);if(t===aa()&&n===`compatible`&&!oa()){r=Fa(r,new Wi);let e=new Date,t=Bi(r.era,r.year);return e.setFullYear(t,r.month-1,r.day),e.setHours(r.hour,r.minute,r.second,r.millisecond),e.getTime()}let i=Ca(r),a=Ta(i-Ba,t),o=Ta(i+Ba,t),s=Da(r,t,i-a,i-o);if(s.length===1)return s[0];if(s.length>1)switch(n){case`compatible`:case`earlier`:return s[0];case`later`:return s[s.length-1];case`reject`:throw RangeError(`Multiple possible absolute times found`)}switch(n){case`earlier`:return Math.min(i-a,i-o);case`compatible`:case`later`:return Math.max(i-a,i-o);case`reject`:throw RangeError(`No such absolute time found`)}}function Aa(e,t,n=`compatible`){return new Date(ka(e,t,n))}function ja(e,t){let n=Ta(e,t),r=new Date(e+n),i=r.getUTCFullYear(),a=r.getUTCMonth()+1,o=r.getUTCDate(),s=r.getUTCHours(),c=r.getUTCMinutes(),l=r.getUTCSeconds(),u=r.getUTCMilliseconds();return new q(i<1?`BC`:`AD`,i<1?-i+1:i,a,o,t,n,s,c,l,u)}function Ma(e){return new Ao(e.calendar,e.era,e.year,e.month,e.day)}function Na(e,t){let n=0,r=0,i=0,a=0;if(`timeZone`in e)({hour:n,minute:r,second:i,millisecond:a}=e);else if(`hour`in e&&!t)return e;return t&&({hour:n,minute:r,second:i,millisecond:a}=t),new Mo(e.calendar,e.era,e.year,e.month,e.day,n,r,i,a)}function Pa(e){return new jo(e.hour,e.minute,e.second,e.millisecond)}function Fa(e,t){if(Zi(e.calendar,t))return e;let n=t.fromJulianDay(e.calendar.toJulianDay(e)),r=e.copy();return r.calendar=t,r.era=n.era,r.year=n.year,r.month=n.month,r.day=n.day,qa(r),r}function Ia(e,t,n){return e instanceof q?e.timeZone===t?e:Ra(e,t):ja(ka(e,t,n),t)}function La(e){let t=Ca(e)-e.offset;return new Date(t)}function Ra(e,t){return Fa(ja(Ca(e)-e.offset,t),e.calendar)}var za,Ba;function Va(){return(Va=t((()=>{No(),po(),Gi(),Sa(),za=new Map,Ba=864e5})))()}function Ha(e,t){let n=e.copy(),r=`hour`in n?to(n,t):0;Ua(n,t.years||0),n.calendar.balanceYearMonth&&n.calendar.balanceYearMonth(n,e),n.month+=t.months||0,Wa(n),Ka(n),n.day+=(t.weeks||0)*7,n.day+=t.days||0,n.day+=r,Ga(n),n.calendar.balanceDate&&n.calendar.balanceDate(n),n.year<1&&(n.year=1,n.month=1,n.day=1);let i=n.calendar.getYearsInEra(n);if(n.year>i){let e=n.calendar.isInverseEra?.(n);n.year=i,n.month=e?1:n.calendar.getMonthsInYear(n),n.day=e?1:n.calendar.getDaysInMonth(n)}n.month<1&&(n.month=1,n.day=1);let a=n.calendar.getMonthsInYear(n);return n.month>a&&(n.month=a,n.day=n.calendar.getDaysInMonth(n)),n.day=Math.max(1,Math.min(n.calendar.getDaysInMonth(n),n.day)),n}function Ua(e,t){e.calendar.isInverseEra?.(e)&&(t=-t),e.year+=t}function Wa(e){for(;e.month<1;)Ua(e,-1),e.month+=e.calendar.getMonthsInYear(e);let t=0;for(;e.month>(t=e.calendar.getMonthsInYear(e));)e.month-=t,Ua(e,1)}function Ga(e){for(;e.day<1;)e.month--,Wa(e),e.day+=e.calendar.getDaysInMonth(e);for(;e.day>e.calendar.getDaysInMonth(e);)e.day-=e.calendar.getDaysInMonth(e),e.month++,Wa(e)}function Ka(e){e.month=Math.max(1,Math.min(e.calendar.getMonthsInYear(e),e.month)),e.day=Math.max(1,Math.min(e.calendar.getDaysInMonth(e),e.day))}function qa(e){e.calendar.constrainDate&&e.calendar.constrainDate(e),e.year=Math.max(1,Math.min(e.calendar.getYearsInEra(e),e.year)),Ka(e)}function Ja(e){let t={};for(let n in e)typeof e[n]==`number`&&(t[n]=-e[n]);return t}function Ya(e,t){return Ha(e,Ja(t))}function Xa(e,t){let n=e.copy();return t.era!=null&&(n.era=t.era),t.year!=null&&(n.year=t.year),t.month!=null&&(n.month=t.month),t.day!=null&&(n.day=t.day),qa(n),n}function Za(e,t){let n=e.copy();return t.hour!=null&&(n.hour=t.hour),t.minute!=null&&(n.minute=t.minute),t.second!=null&&(n.second=t.second),t.millisecond!=null&&(n.millisecond=t.millisecond),$a(n),n}function Qa(e){e.second+=Math.floor(e.millisecond/1e3),e.millisecond=eo(e.millisecond,1e3),e.minute+=Math.floor(e.second/60),e.second=eo(e.second,60),e.hour+=Math.floor(e.minute/60),e.minute=eo(e.minute,60);let t=Math.floor(e.hour/24);return e.hour=eo(e.hour,24),t}function $a(e){e.millisecond=Math.max(0,Math.min(e.millisecond,999)),e.second=Math.max(0,Math.min(e.second,59)),e.minute=Math.max(0,Math.min(e.minute,59)),e.hour=Math.max(0,Math.min(e.hour,23))}function eo(e,t){let n=e%t;return n<0&&(n+=t),n}function to(e,t){return e.hour+=t.hours||0,e.minute+=t.minutes||0,e.second+=t.seconds||0,e.millisecond+=t.milliseconds||0,Qa(e)}function no(e,t){let n=e.copy();return to(n,t),n}function ro(e,t){return no(e,Ja(t))}function io(e,t,n,r){let i=e.copy();switch(t){case`era`:{let t=e.calendar.getEras(),a=t.indexOf(e.era);if(a<0)throw Error(`Invalid era: `+e.era);a=oo(a,n,0,t.length-1,r?.round),i.era=t[a],qa(i);break}case`year`:i.calendar.isInverseEra?.(i)&&(n=-n),i.year=oo(e.year,n,-1/0,9999,r?.round),i.year===-1/0&&(i.year=1),i.calendar.balanceYearMonth&&i.calendar.balanceYearMonth(i,e);break;case`month`:i.month=oo(e.month,n,1,e.calendar.getMonthsInYear(e),r?.round);break;case`day`:i.day=oo(e.day,n,1,e.calendar.getDaysInMonth(e),r?.round);break;default:throw Error(`Unsupported field `+t)}return e.calendar.balanceDate&&e.calendar.balanceDate(i),qa(i),i}function ao(e,t,n,r){let i=e.copy();switch(t){case`hour`:{let t=e.hour,a=0,o=23;if(r?.hourCycle===12){let e=t>=12;a=e?12:0,o=e?23:11}i.hour=oo(t,n,a,o,r?.round);break}case`minute`:i.minute=oo(e.minute,n,0,59,r?.round);break;case`second`:i.second=oo(e.second,n,0,59,r?.round);break;case`millisecond`:i.millisecond=oo(e.millisecond,n,0,999,r?.round);break;default:throw Error(`Unsupported field `+t)}return i}function oo(e,t,n,r,i=!1){if(i){e+=Math.sign(t),e<n&&(e=r);let i=Math.abs(t);e=t>0?Math.ceil(e/i)*i:Math.floor(e/i)*i,e>r&&(e=n)}else e+=t,e<n?e=r-(n-e-1):e>r&&(e=n+(e-r-1));return e}function so(e,t){let n;return n=t.years!=null&&t.years!==0||t.months!=null&&t.months!==0||t.weeks!=null&&t.weeks!==0||t.days!=null&&t.days!==0?ka(Ha(Na(e),{years:t.years,months:t.months,weeks:t.weeks,days:t.days}),e.timeZone):Ca(e)-e.offset,n+=t.milliseconds||0,n+=(t.seconds||0)*1e3,n+=(t.minutes||0)*6e4,n+=(t.hours||0)*36e5,Fa(ja(n,e.timeZone),e.calendar)}function co(e,t){return so(e,Ja(t))}function lo(e,t,n,r){switch(t){case`hour`:{let t=0,i=23;if(r?.hourCycle===12){let n=e.hour>=12;t=n?12:0,i=n?23:11}let a=Na(e),o=Fa(Za(a,{hour:t}),new Wi),s=[ka(o,e.timeZone,`earlier`),ka(o,e.timeZone,`later`)].filter(t=>ja(t,e.timeZone).day===o.day)[0],c=Fa(Za(a,{hour:i}),new Wi),l=[ka(c,e.timeZone,`earlier`),ka(c,e.timeZone,`later`)].filter(t=>ja(t,e.timeZone).day===c.day).pop(),u=Ca(e)-e.offset,d=Math.floor(u/fo),f=u%fo;return u=oo(d,n,Math.floor(s/fo),Math.floor(l/fo),r?.round)*fo+f,Fa(ja(u,e.timeZone),e.calendar)}case`minute`:case`second`:case`millisecond`:return ao(e,t,n,r);case`era`:case`year`:case`month`:case`day`:return Fa(ja(ka(io(Na(e),t,n,r),e.timeZone),e.timeZone),e.calendar);default:throw Error(`Unsupported field `+t)}}function uo(e,t,n){let r=Na(e),i=Za(Xa(r,t),t);return i.compare(r)===0?e:Fa(ja(ka(i,e.timeZone,n),e.timeZone),e.calendar)}var fo;function po(){return(po=t((()=>{Va(),Gi(),fo=36e5})))()}function mo(e){let t=e.match(Co);if(!t)throw Error(`Invalid ISO 8601 time string: `+e);return new jo(_o(t[1],0,23),t[2]?_o(t[2],0,59):0,t[3]?_o(t[3],0,59):0,t[4]?_o(t[4],0,1/0)*1e3:0)}function ho(e){let t=e.match(wo);if(!t)throw Eo.test(e)?Error(`Invalid ISO 8601 date string: ${e}. Use parseAbsolute() instead.`):Error(`Invalid ISO 8601 date string: `+e);let n=new Ao(_o(t[1],0,9999),_o(t[2],1,12),1);return n.day=_o(t[3],1,n.calendar.getDaysInMonth(n)),n}function go(e){let t=e.match(To);if(!t)throw Eo.test(e)?Error(`Invalid ISO 8601 date time string: ${e}. Use parseAbsolute() instead.`):Error(`Invalid ISO 8601 date time string: `+e);let n=_o(t[1],-9999,9999),r=new Mo(n<1?`BC`:`AD`,n<1?-n+1:n,_o(t[2],1,12),1,t[4]?_o(t[4],0,23):0,t[5]?_o(t[5],0,59):0,t[6]?_o(t[6],0,59):0,t[7]?_o(t[7],0,1/0)*1e3:0);return r.day=_o(t[3],0,r.calendar.getDaysInMonth(r)),r}function _o(e,t,n){let r=Number(e);if(r<t||r>n)throw RangeError(`Value out of range: ${t} <= ${r} <= ${n}`);return r}function vo(e){return`${String(e.hour).padStart(2,`0`)}:${String(e.minute).padStart(2,`0`)}:${String(e.second).padStart(2,`0`)}${e.millisecond?String(e.millisecond/1e3).slice(1):``}`}function yo(e){let t=Fa(e,new Wi),n;return n=t.era===`BC`?t.year===1?`0000`:`-`+String(Math.abs(1-t.year)).padStart(6,`00`):String(t.year).padStart(4,`0`),`${n}-${String(t.month).padStart(2,`0`)}-${String(t.day).padStart(2,`0`)}`}function bo(e){return`${yo(e)}T${vo(e)}`}function xo(e){let t=Math.sign(e)<0?`-`:`+`;e=Math.abs(e);let n=Math.floor(e/36e5),r=Math.floor(e%36e5/6e4),i=Math.floor(e%36e5%6e4/1e3),a=`${t}${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`;return i!==0&&(a+=`:${String(i).padStart(2,`0`)}`),a}function So(e){return`${bo(e)}${xo(e.offset)}[${e.timeZone}]`}var Co,wo,To,Eo,Do;function Oo(){return(Oo=t((()=>{No(),Va(),Gi(),Co=/^(\d{2})(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,wo=/^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/,To=/^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,Eo=/^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/,Do=[`hours`,`minutes`,`seconds`],[...Do]})))()}function ko(e){let t=typeof e[0]==`object`?e.shift():new Wi,n;if(typeof e[0]==`string`)n=e.shift();else{let e=t.getEras();n=e[e.length-1]}let r=e.shift(),i=e.shift(),a=e.shift();return[t,n,r,i,a]}var Ao,jo,Mo,q;function No(){return(No=t((()=>{po(),Sa(),Oo(),Gi(),Va(),Ao=class e{constructor(...e){let[t,n,r,i,a]=ko(e);this.calendar=t,this.era=n,this.year=r,this.month=i,this.day=a,qa(this)}copy(){return this.era?new e(this.calendar,this.era,this.year,this.month,this.day):new e(this.calendar,this.year,this.month,this.day)}add(e){return Ha(this,e)}subtract(e){return Ya(this,e)}set(e){return Xa(this,e)}cycle(e,t,n){return io(this,e,t,n)}toDate(e){return Aa(this,e)}toString(){return yo(this)}compare(e){return na(this,e)}},jo=class e{constructor(e=0,t=0,n=0,r=0){this.hour=e,this.minute=t,this.second=n,this.millisecond=r,$a(this)}copy(){return new e(this.hour,this.minute,this.second,this.millisecond)}add(e){return no(this,e)}subtract(e){return ro(this,e)}set(e){return Za(this,e)}cycle(e,t,n){return ao(this,e,t,n)}toString(){return vo(this)}compare(e){return ra(this,e)}},Mo=class e{constructor(...e){let[t,n,r,i,a]=ko(e);this.calendar=t,this.era=n,this.year=r,this.month=i,this.day=a,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,qa(this)}copy(){return this.era?new e(this.calendar,this.era,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond):new e(this.calendar,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond)}add(e){return Ha(this,e)}subtract(e){return Ya(this,e)}set(e){return Xa(Za(this,e),e)}cycle(e,t,n){switch(e){case`era`:case`year`:case`month`:case`day`:return io(this,e,t,n);default:return ao(this,e,t,n)}}toDate(e,t){return Aa(this,e,t)}toString(){return bo(this)}compare(e){let t=na(this,e);return t===0?ra(this,Na(e)):t}},q=class e{constructor(...e){let[t,n,r,i,a]=ko(e),o=e.shift(),s=e.shift();this.calendar=t,this.era=n,this.year=r,this.month=i,this.day=a,this.timeZone=o,this.offset=s,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,qa(this)}copy(){return this.era?new e(this.calendar,this.era,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond):new e(this.calendar,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond)}add(e){return so(this,e)}subtract(e){return co(this,e)}set(e,t){return uo(this,e,t)}cycle(e,t,n){return lo(this,e,t,n)}toDate(){return La(this)}toString(){return So(this)}toAbsoluteString(){return this.toDate().toISOString()}compare(e){return this.toDate().getTime()-Ia(e,this.timeZone).toDate().getTime()}}})))()}function Po(e){let t=Lo.findIndex(([t,n,r])=>e.year<t||e.year===t&&e.month<n||e.year===t&&e.month===n&&e.day<r);return t===-1?Lo.length-1:t===0?0:t-1}function Fo(e){let t=zo[Bo.indexOf(e.era)];if(!t)throw Error(`Unknown era: `+e.era);return new Ao(e.year+t,e.month,e.day)}function Io(e){if(e.year===1){let t=Bo.indexOf(e.era);return Lo[t]}}var Lo,Ro,zo,Bo,Vo;function Ho(){return(Ho=t((()=>{No(),Gi(),Lo=[[1868,9,8],[1912,7,30],[1926,12,25],[1989,1,8],[2019,5,1]],Ro=[[1912,7,29],[1926,12,24],[1989,1,7],[2019,4,30]],zo=[1867,1911,1925,1988,2018],Bo=[`meiji`,`taisho`,`showa`,`heisei`,`reiwa`],Vo=class extends Wi{fromJulianDay(e){let t=super.fromJulianDay(e),n=Po(t);return new Ao(this,Bo[n],t.year-zo[n],t.month,t.day)}toJulianDay(e){return super.toJulianDay(Fo(e))}balanceDate(e){let t=Fo(e),n=Po(t);Bo[n]!==e.era&&(e.era=Bo[n],e.year=t.year-zo[n]),this.constrainDate(e)}constrainDate(e){let t=Bo.indexOf(e.era),n=Ro[t];if(n!=null){let[r,i,a]=n,o=r-zo[t];e.year=Math.max(1,Math.min(o,e.year)),e.year===o&&(e.month=Math.min(i,e.month),e.month===i&&(e.day=Math.min(a,e.day)))}if(e.year===1&&t>=0){let[,n,r]=Lo[t];e.month=Math.max(n,e.month),e.month===n&&(e.day=Math.max(r,e.day))}}getEras(){return Bo}getYearsInEra(e){let t=Bo.indexOf(e.era),n=Lo[t],r=Lo[t+1];if(r==null)return 9999-n[0]+1;let i=r[0]-n[0];return(e.month<r[1]||e.month===r[1]&&e.day<r[2])&&i++,i}getDaysInMonth(e){return super.getDaysInMonth(Fo(e))}getMinimumMonthInYear(e){let t=Io(e);return t?t[1]:1}getMinimumDayInMonth(e){let t=Io(e);return t&&e.month===t[1]?t[2]:1}constructor(...e){super(...e),this.identifier=`japanese`}}})))()}function Uo(e){let[t,n]=Vi(e.year+Wo);return new Ao(t,n,e.month,e.day)}var Wo,Go;function Ko(){return(Ko=t((()=>{No(),Gi(),Wo=-543,Go=class extends Wi{fromJulianDay(e){let t=super.fromJulianDay(e),n=Bi(t.era,t.year);return new Ao(this,n-Wo,t.month,t.day)}toJulianDay(e){return super.toJulianDay(Uo(e))}getEras(){return[`BE`]}getDaysInMonth(e){return super.getDaysInMonth(Uo(e))}balanceDate(){}constructor(...e){super(...e),this.identifier=`buddhist`}}})))()}function qo(e){return e.era===`minguo`?e.year+Xo:1-e.year+Xo}function Jo(e){let t=e-Xo;return t>0?[`minguo`,t]:[`before_minguo`,1-t]}function Yo(e){let[t,n]=Vi(qo(e));return new Ao(t,n,e.month,e.day)}var Xo,Zo;function Qo(){return(Qo=t((()=>{No(),Gi(),Xo=1911,Zo=class extends Wi{fromJulianDay(e){let t=super.fromJulianDay(e),[n,r]=Jo(Bi(t.era,t.year));return new Ao(this,n,r,t.month,t.day)}toJulianDay(e){return super.toJulianDay(Yo(e))}getEras(){return[`before_minguo`,`minguo`]}balanceDate(e){let[t,n]=Jo(qo(e));e.era=t,e.year=n}isInverseEra(e){return e.era===`before_minguo`}getDaysInMonth(e){return super.getDaysInMonth(Yo(e))}getYearsInEra(e){return e.era===`before_minguo`?9999:8088}constructor(...e){super(...e),this.identifier=`roc`}}})))()}var $o,es,ts;function ns(){return(ns=t((()=>{No(),$o=1948320,es=[0,31,62,93,124,155,186,216,246,276,306,336],ts=class{fromJulianDay(e){let t=e-$o,n=1+Math.floor((33*t+3)/12053),r=t-(365*(n-1)+Math.floor((8*n+21)/33)),i=Math.floor(r<216?r/31:(r-6)/30),a=r-es[i]+1;return new Ao(this,n,i+1,a)}toJulianDay(e){let t=1948319+365*(e.year-1)+Math.floor((8*e.year+21)/33);return t+=es[e.month-1],t+=e.day,t}getMonthsInYear(){return 12}getDaysInMonth(e){return e.month<=6?31:e.month<=11||Li(25*e.year+11,33)<8?30:29}getMaximumMonthsInYear(){return 12}getMaximumDaysInMonth(){return 31}getEras(){return[`AP`]}getYearsInEra(){return 9377}constructor(){this.identifier=`persian`}}})))()}var rs,is,as;function os(){return(os=t((()=>{No(),Gi(),rs=78,is=80,as=class extends Wi{fromJulianDay(e){let t=super.fromJulianDay(e),n=t.year-rs,r=e-Ri(t.era,t.year,1,1),i;r<is?(n--,i=zi(t.year-1)?31:30,r+=i+155+90+10):(i=zi(t.year)?31:30,r-=is);let a,o;if(r<i)a=1,o=r+1;else{let e=r-i;e<155?(a=Math.floor(e/31)+2,o=e%31+1):(e-=155,a=Math.floor(e/30)+7,o=e%30+1)}return new Ao(this,n,a,o)}toJulianDay(e){let[t,n]=Vi(e.year+rs),r,i;return zi(n)?(r=31,i=Ri(t,n,3,21)):(r=30,i=Ri(t,n,3,22)),e.month===1?i+e.day-1:(i+=r+Math.min(e.month-2,5)*31,e.month>=8&&(i+=(e.month-7)*30),i+=e.day-1,i)}getDaysInMonth(e){return e.month===1&&zi(e.year+rs)||e.month>=2&&e.month<=6?31:30}getYearsInEra(){return 9919}getEras(){return[`saka`]}balanceDate(){}constructor(...e){super(...e),this.identifier=`indian`}}})))()}function ss(e,t,n,r){return r+Math.ceil(29.5*(n-1))+(t-1)*354+Math.floor((3+11*t)/30)+e-1}function cs(e,t,n){let r=Math.floor((30*(n-t)+10646)/10631),i=Math.min(12,Math.ceil((n-(29+ss(t,r,1,1)))/29.5)+1),a=n-ss(t,r,i,1)+1;return new Ao(e,r,i,a)}function ls(e){return(14+11*e)%30<11}function us(e){return vs+Cs[e-gs]}function ds(e,t){let n=e-gs,r=1<<11-(t-1);return(Ss[n]&r)===0?29:30}function fs(e,t){let n=us(e);for(let r=1;r<t;r++)n+=ds(e,r);return n}function ps(e){return Cs[e+1-gs]-Cs[e-gs]}var ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws;function Ts(){return(Ts=t((()=>{No(),ms=1948440,hs=1948439,gs=1300,_s=1600,vs=460322,ys=class{fromJulianDay(e){return cs(this,ms,e)}toJulianDay(e){return ss(ms,e.year,e.month,e.day)}getDaysInMonth(e){let t=29+e.month%2;return e.month===12&&ls(e.year)&&t++,t}getMonthsInYear(){return 12}getDaysInYear(e){return ls(e.year)?355:354}getMaximumMonthsInYear(){return 12}getMaximumDaysInMonth(){return 30}getYearsInEra(){return 9665}getEras(){return[`AH`]}constructor(){this.identifier=`islamic-civil`}},bs=class extends ys{fromJulianDay(e){return cs(this,hs,e)}toJulianDay(e){return ss(hs,e.year,e.month,e.day)}constructor(...e){super(...e),this.identifier=`islamic-tbla`}},xs=`qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=`,ws=class extends ys{constructor(){if(super(),this.identifier=`islamic-umalqura`,Ss||=new Uint16Array(Uint8Array.from(atob(xs),e=>e.charCodeAt(0)).buffer),!Cs){Cs=new Uint32Array(301);let e=0;for(let t=gs;t<=_s;t++){Cs[t-gs]=e;for(let n=1;n<=12;n++)e+=ds(t,n)}}}fromJulianDay(e){let t=e-ms,n=us(gs),r=us(_s);if(t<n||t>r)return super.fromJulianDay(e);{let e=1299,n=1,r=1;for(;r>0;){e++,r=t-us(e)+1;let i=ps(e);if(r===i){n=12;break}if(r<i){let t=ds(e,n);for(n=1;r>t;)r-=t,n++,t=ds(e,n);break}}return new Ao(this,e,n,t-fs(e,n)+1)}}toJulianDay(e){return e.year<gs||e.year>_s?super.toJulianDay(e):ms+fs(e.year,e.month)+(e.day-1)}getDaysInMonth(e){return e.year<gs||e.year>_s?super.getDaysInMonth(e):ds(e.year,e.month)}getDaysInYear(e){return e.year<gs||e.year>_s?super.getDaysInYear(e):ps(e.year)}}})))()}function Es(e){return Li(e*7+1,19)<7}function Ds(e){let t=Math.floor((235*e-234)/19),n=12084+13753*t,r=t*29+Math.floor(n/25920);return Li(3*(r+1),7)<3&&(r+=1),r}function Os(e){let t=Ds(e-1),n=Ds(e);return Ds(e+1)-n===356?2:+(n-t===382)}function ks(e){return Ds(e)+Os(e)}function As(e){return ks(e+1)-ks(e)}function js(e){let t=As(e);switch(t>380&&(t-=30),t){case 353:return 0;case 354:return 1;case 355:return 2}}function Ms(e,t){if(t>=6&&!Es(e)&&t++,t===4||t===7||t===9||t===11||t===13)return 29;let n=js(e);return t===2?n===2?30:29:t===3?n===0?29:30:t===6?Es(e)?30:0:30}var Ns,Ps,Fs,Is;function Ls(){return(Ls=t((()=>{No(),Ns=347997,Ps=25920,Fs=765433,Is=class{fromJulianDay(e){let t=e-Ns,n=t*Ps/Fs,r=Math.floor((19*n+234)/235)+1,i=ks(r),a=Math.floor(t-i);for(;a<1;)r--,i=ks(r),a=Math.floor(t-i);let o=1,s=0;for(;s<a;)s+=Ms(r,o),o++;o--,s-=Ms(r,o);let c=a-s;return new Ao(this,r,o,c)}toJulianDay(e){let t=ks(e.year);for(let n=1;n<e.month;n++)t+=Ms(e.year,n);return t+e.day+Ns}getDaysInMonth(e){return Ms(e.year,e.month)}getMonthsInYear(e){return Es(e.year)?13:12}getDaysInYear(e){return As(e.year)}getMaximumMonthsInYear(){return 13}getMaximumDaysInMonth(){return 30}getYearsInEra(){return 9999}getEras(){return[`AM`]}balanceYearMonth(e,t){t.year!==e.year&&(Es(t.year)&&!Es(e.year)&&t.month>6?e.month--:!Es(t.year)&&Es(e.year)&&t.month>6&&e.month++)}constructor(){this.identifier=`hebrew`}}})))()}function Rs(e,t,n,r){return e+365*t+Math.floor(t/4)+30*(n-1)+r-1}function zs(e,t){let n=Math.floor(4*(t-e)/1461),r=1+Math.floor((t-Rs(e,n,1,1))/30);return[n,r,t+1-Rs(e,n,r,1)]}function Bs(e){return Math.floor(e%4/3)}function Vs(e,t){return t%13==0?Bs(e)+5:30}var Hs,Us,Ws,Gs,Ks,qs;function Js(){return(Js=t((()=>{No(),Hs=1723856,Us=1824665,Ws=5500,Gs=class{fromJulianDay(e){let[t,n,r]=zs(Hs,e),i=`AM`;return t<=0&&(i=`AA`,t+=Ws),new Ao(this,i,t,n,r)}toJulianDay(e){let t=e.year;return e.era===`AA`&&(t-=Ws),Rs(Hs,t,e.month,e.day)}getDaysInMonth(e){return Vs(e.year,e.month)}getMonthsInYear(){return 13}getDaysInYear(e){return 365+Bs(e.year)}getMaximumMonthsInYear(){return 13}getMaximumDaysInMonth(){return 30}getYearsInEra(e){return e.era===`AA`?9999:9991}getEras(){return[`AA`,`AM`]}constructor(){this.identifier=`ethiopic`}},Ks=class extends Gs{fromJulianDay(e){let[t,n,r]=zs(Hs,e);return t+=Ws,new Ao(this,`AA`,t,n,r)}getEras(){return[`AA`]}getYearsInEra(){return 9999}constructor(...e){super(...e),this.identifier=`ethioaa`}},qs=class extends Gs{fromJulianDay(e){let[t,n,r]=zs(Us,e),i=`CE`;return t<=0&&(i=`BCE`,t=1-t),new Ao(this,i,t,n,r)}toJulianDay(e){let t=e.year;return e.era===`BCE`&&(t=1-t),Rs(Us,t,e.month,e.day)}getDaysInMonth(e){let t=e.year;return e.era===`BCE`&&(t=1-t),Vs(t,e.month)}isInverseEra(e){return e.era===`BCE`}balanceDate(e){e.year<=0&&(e.era=e.era===`BCE`?`CE`:`BCE`,e.year=1-e.year)}getEras(){return[`BCE`,`CE`]}getYearsInEra(e){return e.era===`BCE`?9999:9715}constructor(...e){super(...e),this.identifier=`coptic`}}})))()}function Ys(e){switch(e){case`buddhist`:return new Go;case`ethiopic`:return new Gs;case`ethioaa`:return new Ks;case`coptic`:return new qs;case`hebrew`:return new Is;case`indian`:return new as;case`islamic-civil`:return new ys;case`islamic-tbla`:return new bs;case`islamic-umalqura`:return new ws;case`japanese`:return new Vo;case`persian`:return new ts;case`roc`:return new Zo;default:return new Wi}}function Xs(){return(Xs=t((()=>{Ko(),Js(),Gi(),Ls(),os(),Ts(),Ho(),ns(),Qo()})))()}function Zs(e,t={}){if(typeof t.hour12==`boolean`&&Qs()){t={...t};let n=rc[String(t.hour12)][e.split(`-`)[0]],r=t.hour12?`h12`:`h23`;t.hourCycle=n??r,delete t.hour12}let n=e+(t?Object.entries(t).sort((e,t)=>e[0]<t[0]?-1:1).join():``);if(tc.has(n))return tc.get(n);let r=new Intl.DateTimeFormat(e,t);return tc.set(n,r),r}function Qs(){return ic??=new Intl.DateTimeFormat(`en-US`,{hour:`numeric`,hour12:!1}).format(new Date(2020,2,3,0))===`24`,ic}function $s(){return ac??=new Intl.DateTimeFormat(`fr`,{hour:`numeric`,hour12:!1}).resolvedOptions().hourCycle===`h12`,ac}function ec(e,t){if(!t.timeStyle&&!t.hour)return;e=e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/,``),e+=(e.includes(`-u-`)?``:`-u`)+`-nu-latn`;let n=Zs(e,{...t,timeZone:void 0}),r=parseInt(n.formatToParts(new Date(2020,2,3,0)).find(e=>e.type===`hour`).value,10),i=parseInt(n.formatToParts(new Date(2020,2,3,23)).find(e=>e.type===`hour`).value,10);if(r===0&&i===23)return`h23`;if(r===24&&i===23)return`h24`;if(r===0&&i===11)return`h11`;if(r===12&&i===11)return`h12`;throw Error(`Unexpected hour cycle result`)}var tc,nc,rc,ic,ac;function oc(){return(oc=t((()=>{tc=new Map,nc=class{constructor(e,t={}){this.formatter=Zs(e,t),this.options=t}format(e){return this.formatter.format(e)}formatToParts(e){return this.formatter.formatToParts(e)}formatRange(e,t){if(typeof this.formatter.formatRange==`function`)return this.formatter.formatRange(e,t);if(t<e)throw RangeError(`End date must be >= start date`);return`${this.formatter.format(e)} \u{2013} ${this.formatter.format(t)}`}formatRangeToParts(e,t){if(typeof this.formatter.formatRangeToParts==`function`)return this.formatter.formatRangeToParts(e,t);if(t<e)throw RangeError(`End date must be >= start date`);let n=this.formatter.formatToParts(e),r=this.formatter.formatToParts(t);return[...n.map(e=>({...e,source:`startRange`})),{type:`literal`,value:` – `,source:`shared`},...r.map(e=>({...e,source:`endRange`}))]}resolvedOptions(){let e=this.formatter.resolvedOptions();return $s()&&(this.resolvedHourCycle||=ec(e.locale,this.options),e.hourCycle=this.resolvedHourCycle,e.hour12=this.resolvedHourCycle===`h11`||this.resolvedHourCycle===`h12`),e.calendar===`ethiopic-amete-alem`&&(e.calendar=`ethioaa`),e}},rc={true:{ja:`h11`},false:{}},ic=null,ac=null})))()}function sc(e){e=Pi(e??{},cc);let{locale:t}=je();return(0,lc.useMemo)(()=>new nc(t,e),[t,e])}function cc(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r of n)if(t[r]!==e[r])return!1;return!0}var lc;function uc(){return(uc=t((()=>{Ii(),Me(),oc(),lc=r()})))()}function dc(e){return e&&e.__esModule?e.default:e}function fc(e){return e?.calendar.identifier===`gregory`&&e.era===`BC`?`short`:void 0}function pc(e){let t=Te(dc(Mi),`@react-aria/calendar`),n,r;`highlightedRange`in e?{start:n,end:r}=e.highlightedRange||{}:(n=Array.isArray(e.value)?e.value[0]:e.value??void 0,r=Array.isArray(e.value)?e.value.at(-1):e.value??void 0);let i=sc({weekday:`long`,month:`long`,year:`numeric`,day:`numeric`,era:fc(n)||fc(r),timeZone:e.timeZone}),{locale:a}=je(),o=(0,gc.useMemo)(()=>new Intl.ListFormat(a),[a]),s=`anchorDate`in e?e.anchorDate:null;return(0,gc.useMemo)(()=>{if(!s&&n&&r){if(Ji(n,r)){let r=i.format(n.toDate(e.timeZone));return t.format(`selectedDateDescription`,{date:r})}if(`highlightedRange`in e){let a=hc(i,t,n,r,e.timeZone);return t.format(`selectedRangeDescription`,{dateRange:a})}if(Array.isArray(e.value)){let n=e.value.map(t=>i.format(t.toDate(e.timeZone))),r=o.format(n);return t.format(`selectedDateDescription`,{date:r})}}return``},[n,r,s,e,t,i,o])}function mc(e,t,n,r){let i=Te(dc(Mi),`@react-aria/calendar`),a=fc(e)||fc(t),o=sc({month:`long`,year:`numeric`,era:a,calendar:e.calendar.identifier,timeZone:n}),s=sc({month:`long`,year:`numeric`,day:`numeric`,era:a,calendar:e.calendar.identifier,timeZone:n});return(0,gc.useMemo)(()=>{if(Ji(e,sa(e))){let a=e,s=t;if(e.calendar.getFormattableMonth&&(a=e.calendar.getFormattableMonth(e)),t.calendar.getFormattableMonth&&(s=t.calendar.getFormattableMonth(t)),Ji(t,ca(e)))return o.format(a.toDate(n));if(Ji(t,ca(t)))return r?hc(o,i,a,s,n):o.formatRange(a.toDate(n),s.toDate(n))}return r?hc(s,i,e,t,n):s.formatRange(e.toDate(n),t.toDate(n))},[e,t,o,s,i,n,r])}function hc(e,t,n,r,i){let a=e.formatRangeToParts(n.toDate(i),r.toDate(i)),o=-1;for(let e=0;e<a.length;e++){let t=a[e];if(t.source===`shared`&&t.type===`literal`)o=e;else if(t.source===`endRange`)break}let s=``,c=``;for(let e=0;e<a.length;e++)e<o?s+=a[e].value:e>o&&(c+=a[e].value);return t.format(`dateRange`,{startDate:s,endDate:c})}var gc,_c;function vc(){return(vc=t((()=>{Ni(),uc(),Me(),Je(),Sa(),gc=r(),_c=new WeakMap})))()}function yc(e,t){let n=(0,bc.useRef)(!0),r=(0,bc.useRef)(null),i=de(e);(0,bc.useEffect)(()=>(n.current=!0,()=>{n.current=!1}),[]),(0,bc.useEffect)(()=>{let e=r.current;n.current?n.current=!1:(!e||t.some((t,n)=>!Object.is(t,e[n])))&&i(),r.current=t},t)}var bc;function xc(){return(xc=t((()=>{oe(),bc=r()})))()}function Sc(e){return e&&e.__esModule?e.default:e}function Cc(e,t){let n=Te(Sc(Mi),`@react-aria/calendar`),r=R(e),i=mc(t.visibleRange.start,t.visibleRange.end,t.timeZone,!1),a=mc(t.visibleRange.start,t.visibleRange.end,t.timeZone,!0);yc(()=>{t.isFocused||K(a)},[a]);let o=pc(t);yc(()=>{o&&K(o,`polite`,4e3)},[o]);let s=C([!!e.errorMessage,e.isInvalid,e.validationState]);_c.set(t,{ariaLabel:e[`aria-label`],ariaLabelledBy:e[`aria-labelledby`],errorMessageId:s,selectedDateDescription:o});let[c,l]=(0,wc.useState)(!1),u=e.isDisabled||t.isNextVisibleRangeInvalid();u&&c&&(l(!1),t.setFocused(!0));let[d,f]=(0,wc.useState)(!1),p=e.isDisabled||t.isPreviousVisibleRangeInvalid();p&&d&&(f(!1),t.setFocused(!0));let m=Le({id:e.id,"aria-label":[e[`aria-label`],a].filter(Boolean).join(`, `),"aria-labelledby":e[`aria-labelledby`]});return{calendarProps:W(r,m,{role:`application`,"aria-details":e[`aria-details`]||void 0,"aria-describedby":e[`aria-describedby`]||void 0}),nextButtonProps:{onPress:()=>t.focusNextPage(),"aria-label":n.format(`next`),isDisabled:u,onFocusChange:l},prevButtonProps:{onPress:()=>t.focusPreviousPage(),"aria-label":n.format(`previous`),isDisabled:p,onFocusChange:f},errorMessageProps:{id:s},title:i}}var wc;function Tc(){return(Tc=t((()=>{_r(),V(),vc(),Ni(),O(),st(),Je(),d(),xc(),wc=r()})))()}function Ec(e,t){return Cc(e,t)}function Dc(){return(Dc=t((()=>{Tc()})))()}function Oc(e,t){let n=[],r=document.scrollingElement||document.documentElement;for(;e&&(De(e,t)&&n.push(e),e!==r);)e=e.parentElement;return n}function kc(){return(kc=t((()=>{})))()}function Ac(e,t,n={}){let{block:r=`nearest`,inline:i=`nearest`}=n;if(e===t)return;let a=e.scrollTop,o=e.scrollLeft,s=t.getBoundingClientRect(),c=e.getBoundingClientRect(),l=window.getComputedStyle(t),u=window.getComputedStyle(e),d=document.scrollingElement||document.documentElement,f=e===d,p=e===d?0:c.top,m=e===d?e.clientHeight:c.bottom,h=e===d?0:c.left,g=e===d?e.clientWidth:c.right,_=parseFloat(l.scrollMarginTop)||0,v=parseFloat(l.scrollMarginBottom)||0,y=parseFloat(l.scrollMarginLeft)||0,b=parseFloat(l.scrollMarginRight)||0,x=parseFloat(u.scrollPaddingTop)||0,S=parseFloat(u.scrollPaddingBottom)||0,C=parseFloat(u.scrollPaddingLeft)||0,w=parseFloat(u.scrollPaddingRight)||0,T=parseFloat(u.borderTopWidth)||0,E=parseFloat(u.borderBottomWidth)||0,D=parseFloat(u.borderLeftWidth)||0,O=parseFloat(u.borderRightWidth)||0,k=s.top-_,A=s.bottom+v,j=s.left-y,M=s.right+b,N=e===d?0:D+O,P=e===d?0:T+E,F=e===d?0:e.offsetWidth-e.clientWidth-N,I=e===d?0:e.offsetHeight-e.clientHeight-P,L=p+(f?0:T)+x,R=m-(f?0:E)-S-I,z=h+(f?0:D)+C,V=g-(f?0:O)-w;re()&&B()||u.direction===`ltr`?V-=F:u.direction===`rtl`&&(z+=F);let ee=k<L||A>R,te=j<z||M>V;if(ee&&r===`start`)a+=k-L;else if(ee&&r===`center`)a+=(k+A)/2-(L+R)/2;else if(ee&&r===`end`)a+=A-R;else if(ee&&r===`nearest`){let e=k-L,t=A-R;a+=Math.abs(e)<=Math.abs(t)?e:t}if(te&&i===`start`)o+=j-z;else if(te&&i===`center`)o+=(j+M)/2-(z+V)/2;else if(te&&i===`end`)o+=M-V;else if(te&&i===`nearest`){let e=j-z,t=M-V;o+=Math.abs(e)<=Math.abs(t)?e:t}e.scrollTo({left:o,top:a})}function jc(e,t={}){let{containingElement:n}=t;if(e&&e.isConnected){let t=document.scrollingElement||document.documentElement;if(window.getComputedStyle(t).overflow!==`hidden`){let{left:t,top:r}=e.getBoundingClientRect();e?.scrollIntoView?.({block:`nearest`});let{left:i,top:a}=e.getBoundingClientRect();(Math.abs(t-i)>1||Math.abs(r-a)>1)&&(n?.scrollIntoView?.({block:`center`,inline:`center`}),e.scrollIntoView?.({block:`nearest`}))}else{let{left:t,top:r}=e.getBoundingClientRect(),i=Oc(e,!0);for(let t of i)Ac(t,e);let{left:a,top:o}=e.getBoundingClientRect();if(Math.abs(t-a)>1||Math.abs(r-o)>1){i=n?Oc(n,!0):[];for(let e of i)Ac(e,n,{block:`center`,inline:`center`});for(let t of Oc(e,!0))Ac(t,e)}}}}function Mc(){return(Mc=t((()=>{kc(),F()})))()}function Nc(e){let[t,n]=(0,Pc.useState)();return ve(()=>{if(!e)return;let t=Ic.get(e);if(t)n(t.element.id);else{let r=`react-aria-description-${Fc++}`;n(r);let i=document.createElement(`div`);i.id=r,i.style.display=`none`,i.textContent=e,document.body.appendChild(i),t={refCount:0,element:i},Ic.set(e,t)}return t.refCount++,()=>{t&&--t.refCount===0&&(t.element.remove(),Ic.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}var Pc,Fc,Ic;function Lc(){return(Lc=t((()=>{z(),Pc=r(),Fc=0,Ic=new Map})))()}function Rc(e){return e&&e.__esModule?e.default:e}function zc(e,t,n){let{date:r,isDisabled:i}=e,{errorMessageId:a,selectedDateDescription:o}=_c.get(t),s=Te(Rc(Mi),`@react-aria/calendar`),c=sc({weekday:`long`,day:`numeric`,month:`long`,year:`numeric`,era:fc(r),timeZone:t.timeZone}),l=t.isCellFocused(r)&&!e.isOutsideMonth;i=i||t.isCellDisabled(r)||!!e.isOutsideMonth;let u=t.isCellUnavailable(r),d=!i&&!u,f=t.isSelected(r)&&d,p=!1;t.isValueInvalid&&(`highlightedRange`in t?p=!t.anchorDate&&t.highlightedRange!=null&&r.compare(t.highlightedRange.start)>=0&&r.compare(t.highlightedRange.end)<=0:Array.isArray(t.value)?p=t.value.some(e=>Ji(e,r)):t.value&&(p=Ji(t.value,r))),p&&!i&&(f=!0),r=Pi(r,Xi);let m=(0,Bc.useMemo)(()=>r.toDate(t.timeZone),[r,t.timeZone]),h=Qi(r,t.timeZone),g=(0,Bc.useMemo)(()=>{let e=``;return`highlightedRange`in t&&t.value&&!t.anchorDate&&(Ji(r,t.value.start)||Ji(r,t.value.end))&&(e=o+`, `),e+=c.format(m),h?e=s.format(f?`todayDateSelected`:`todayDate`,{date:e}):f&&(e=s.format(`dateSelected`,{date:e})),t.minValue&&Ji(r,t.minValue)?e+=`, `+s.format(`minimumDate`):t.maxValue&&Ji(r,t.maxValue)&&(e+=`, `+s.format(`maximumDate`)),e},[c,m,s,f,h,r,t,o]),_=``;`anchorDate`in t&&l&&!t.isReadOnly&&d&&(_=t.anchorDate?s.format(`finishRangeSelectionPrompt`):s.format(`startRangeSelectionPrompt`));let v=Nc(_),y=(0,Bc.useRef)(!1),b=(0,Bc.useRef)(!1),S=(0,Bc.useRef)(void 0),{pressProps:C,isPressed:T}=ct({shouldCancelOnPointerExit:`anchorDate`in t&&!!t.anchorDate,preventFocusOnPress:!0,isDisabled:!d||t.isReadOnly,onPressStart(e){if(t.isReadOnly){t.setFocusedDate(r),t.setFocused(!0);return}if(`highlightedRange`in t&&!t.anchorDate&&(e.pointerType===`mouse`||e.pointerType===`touch`)){if(t.highlightedRange&&!p){if(Ji(r,t.highlightedRange.start)){t.setAnchorDate(t.highlightedRange.end),t.setFocusedDate(r),t.setFocused(!0),t.setDragging(!0),b.current=!0;return}if(Ji(r,t.highlightedRange.end)){t.setAnchorDate(t.highlightedRange.start),t.setFocusedDate(r),t.setFocused(!0),t.setDragging(!0),b.current=!0;return}}let n=()=>{t.setDragging(!0),S.current=void 0,t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0),y.current=!0};e.pointerType===`touch`?S.current=setTimeout(n,200):n()}},onPressEnd(){b.current=!1,y.current=!1,clearTimeout(S.current),S.current=void 0},onPress(){!(`anchorDate`in t)&&!t.isReadOnly&&(t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0))},onPressUp(e){t.isReadOnly||(`anchorDate`in t&&S.current&&(t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0)),`anchorDate`in t&&(b.current?t.setAnchorDate(r):t.anchorDate&&!y.current?(t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0)):e.pointerType===`keyboard`&&!t.anchorDate?(t.selectDate(r),t.focusNearestAvailableDate(r)):e.pointerType===`virtual`&&(t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0))))}}),E;i||(E=Ji(r,t.focusedDate)?0:-1),(0,Bc.useEffect)(()=>{l&&n.current&&(w(n.current),x()!==`pointer`&&N()===n.current&&jc(n.current,{containingElement:at(n.current)}))},[l,n]);let D=sc({day:`numeric`,timeZone:t.timeZone,calendar:r.calendar.identifier}),O=(0,Bc.useMemo)(()=>D.formatToParts(m).find(e=>e.type===`day`).value,[D,m]);return{cellProps:{role:`gridcell`,"aria-disabled":!d||void 0,"aria-selected":f||void 0,"aria-invalid":p||void 0},buttonProps:W(C,{onFocus(){i||(t.setFocusedDate(r),t.setFocused(!0))},tabIndex:E,role:`button`,"aria-disabled":!d||void 0,"aria-label":g,"aria-invalid":p||void 0,"aria-describedby":[p?a:void 0,v[`aria-describedby`]].filter(Boolean).join(` `)||void 0,onPointerEnter(e){`highlightDate`in t&&(e.pointerType!==`touch`||t.isDragging)&&d&&t.highlightDate(r)},onPointerDown(e){let t=Se(e);t instanceof HTMLElement&&`releasePointerCapture`in t&&(`hasPointerCapture`in t?t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId):t.releasePointerCapture(e.pointerId))},onContextMenu(e){e.preventDefault()}}),isPressed:T,isFocused:l,isSelected:f,isDisabled:i,isUnavailable:u,isOutsideVisibleRange:r.compare(t.visibleRange.start)<0||r.compare(t.visibleRange.end)>0,isInvalid:p,formattedDate:O}}var Bc;function Vc(){return(Vc=t((()=>{ae(),L(),vc(),v(),Re(),Ni(),O(),Mc(),uc(),Ii(),Lc(),Je(),yt(),Sa(),Bc=r()})))()}function Hc(e,t){let{startDate:n=t.visibleRange.start,endDate:r=t.visibleRange.end,firstDayOfWeek:i}=e,{direction:a}=je(),{keyboardProps:o}=I({shortcuts:{End:()=>{t.focusSectionEnd()},Home:()=>{t.focusSectionStart()},Escape:()=>(`setAnchorDate`in t&&t.setAnchorDate(null),!1)}}),{keyboardProps:s}=I({shortcuts:{Enter:()=>{t.selectFocusedDate()}," ":()=>{t.selectFocusedDate()},PageUp:()=>{t.focusPreviousSection()},"Shift+PageUp":()=>{t.focusPreviousSection(!0)},PageDown:()=>{t.focusNextSection()},"Shift+PageDown":()=>{t.focusNextSection(!0)},ArrowLeft:()=>{a===`rtl`?t.focusNextDay():t.focusPreviousDay()},ArrowUp:()=>{t.focusPreviousRow()},ArrowRight:()=>{a===`rtl`?t.focusPreviousDay():t.focusNextDay()},ArrowDown:()=>{t.focusNextRow()}},allowRepeats:!0}),c=mc(n,r,t.timeZone,!0),{ariaLabel:l,ariaLabelledBy:u}=_c.get(t),d=Le({"aria-label":[l,c].filter(Boolean).join(`, `),"aria-labelledby":u}),f=sc({weekday:e.weekdayStyle||`narrow`,timeZone:t.timeZone}),{locale:p}=je(),m=(0,Uc.useMemo)(()=>{let e=t.visibleDuration.days&&t.visibleDuration.days<7,r=e?n:ua(ta(t.timeZone),p,i),a=e?t.visibleDuration.days:7;return[...Array(a).keys()].map(e=>{let n=r.add({days:e}).toDate(t.timeZone);return f.format(n)})},[p,t.timeZone,f,i,n,t.visibleDuration.days]),h=t.getWeeksInMonth(n);return{gridProps:W(d,{role:`grid`,"aria-readonly":t.isReadOnly||void 0,"aria-disabled":t.isDisabled||void 0,"aria-multiselectable":`highlightedRange`in t||t.selectionMode===`multiple`||void 0,onFocus:()=>t.setFocused(!0),onBlur:()=>t.setFocused(!1)},o,s),headerProps:{"aria-hidden":!0},weekDays:m,weeksInMonth:h}}var Uc;function Wc(){return(Wc=t((()=>{vc(),O(),uc(),xe(),st(),Me(),Sa(),Uc=r()})))()}function Gc(e,t,n){let r=de(e=>{n&&!e.defaultPrevented&&n(t)});(0,Kc.useEffect)(()=>{let t=e?.current?.form;return t?.addEventListener(`reset`,r),()=>{t?.removeEventListener(`reset`,r)}},[e])}var Kc;function qc(){return(qc=t((()=>{oe(),Kc=r()})))()}function Jc(e,t,n){let{validationBehavior:r,focus:i}=e;ve(()=>{if(r===`native`&&n?.current&&`setCustomValidity`in n.current&&!n.current.disabled){let e=t.realtimeValidation.isInvalid?t.realtimeValidation.validationErrors.join(` `)||`Invalid value.`:``;n.current.setCustomValidity(e),n.current.hasAttribute(`title`)||(n.current.title=``),t.realtimeValidation.isInvalid||t.updateValidation(Xc(n.current))}});let a=(0,Qc.useRef)(!1),o=de(()=>{a.current||t.resetValidation()}),s=de(e=>{t.displayValidation.isInvalid||t.commitValidation();let r=n?.current?.form;!e.defaultPrevented&&n&&r&&Zc(r)===n.current&&(i?i():n.current?.focus(),E(`keyboard`)),e.preventDefault()}),c=de(()=>{t.commitValidation()});(0,Qc.useEffect)(()=>{let e=n?.current;if(!e)return;let t=e.form,r=t?.reset;return t&&(t.reset=()=>{a.current=!window.event||window.event.type===`message`&&Se(window.event)instanceof MessagePort,r?.call(t),a.current=!1}),e.addEventListener(`invalid`,s),e.addEventListener(`change`,c),t?.addEventListener(`reset`,o),()=>{e.removeEventListener(`invalid`,s),e.removeEventListener(`change`,c),t?.removeEventListener(`reset`,o),t&&(t.reset=r)}},[n,r])}function Yc(e){let t=e.validity;return{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing,valid:t.valid}}function Xc(e){return{isInvalid:!e.validity.valid,validationDetails:Yc(e),validationErrors:e.validationMessage?[e.validationMessage]:[]}}function Zc(e){for(let t=0;t<e.elements.length;t++){let n=e.elements[t];if(n.validity?.valid===!1)return n}return null}var Qc;function $c(){return($c=t((()=>{L(),v(),oe(),z(),Qc=r()})))()}function el(e=!0){let[t,n]=(0,nl.useState)(e),r=(0,nl.useRef)(!1),i=(0,nl.useCallback)(e=>{r.current=!0,n(!!e)},[]);return ve(()=>{r.current||n(!1)},[]),[i,t]}function tl(e=!0){let t=U(),[n,r]=el(e);return{id:r?t:void 0,ref:n}}var nl;function rl(){return(rl=t((()=>{d(),z(),nl=r()})))()}function il(e){if(e.__reactAriaFormValidationState){let{realtimeValidation:t,displayValidation:n,updateValidation:r,resetValidation:i,commitValidation:a}=e[hl];return{realtimeValidation:t,displayValidation:n,updateValidation:r,resetValidation:i,commitValidation:a}}return al(e)}function al(e){let{isInvalid:t,validationState:n,name:r,value:i,builtinValidation:a,validate:o,validationBehavior:s=`aria`}=e;n&&(t||=n===`invalid`);let c=t===void 0?null:{isInvalid:t,validationErrors:[],validationDetails:fl},l=(0,ul.useMemo)(()=>!o||i==null?null:cl(sl(o,i)),[o,i]);a?.validationDetails.valid&&(a=void 0);let u=(0,ul.useContext)(ml),d=(0,ul.useMemo)(()=>r?Array.isArray(r)?r.flatMap(e=>ol(u[e])):ol(u[r]):[],[u,r]),[f,p]=(0,ul.useState)(u),[m,h]=(0,ul.useState)(!1);u!==f&&(p(u),h(!1));let g=(0,ul.useMemo)(()=>cl(m?[]:d),[m,d]),_=(0,ul.useRef)(pl),[v,y]=(0,ul.useState)(pl),b=(0,ul.useRef)(pl),x=()=>{if(!S)return;C(!1);let e=l||a||_.current;ll(e,b.current)||(b.current=e,y(e))},[S,C]=(0,ul.useState)(!1);return(0,ul.useEffect)(x),{realtimeValidation:c||g||l||a||pl,displayValidation:s===`native`?c||g||v:c||g||l||a||v,updateValidation(e){s===`aria`&&!ll(v,e)?y(e):_.current=e},resetValidation(){let e=pl;ll(e,b.current)||(b.current=e,y(e)),s===`native`&&C(!1),h(!0)},commitValidation(){s===`native`&&C(!0),h(!0)}}}function ol(e){return e?Array.isArray(e)?e:[e]:[]}function sl(e,t){if(typeof e==`function`){let n=e(t);if(n&&typeof n!=`boolean`)return ol(n)}return[]}function cl(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:fl}:null}function ll(e,t){return e===t||!!e&&!!t&&e.isInvalid===t.isInvalid&&e.validationErrors.length===t.validationErrors.length&&e.validationErrors.every((e,n)=>e===t.validationErrors[n])&&Object.entries(e.validationDetails).every(([e,n])=>t.validationDetails[e]===n)}var ul,dl,fl,pl,ml,hl;function gl(){return(gl=t((()=>{ul=r(),dl={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},fl={...dl,customError:!0,valid:!1},pl={isInvalid:!1,validationDetails:dl,validationErrors:[]},ml=(0,ul.createContext)({}),hl=`__reactAriaFormValidationState`})))()}function _l(e,t,n){let{isDisabled:r=!1,isReadOnly:i=!1,value:a,name:o,form:s,children:c,isRequired:l,validationBehavior:u=`aria`,"aria-label":d,"aria-labelledby":f,"aria-describedby":p,onPressStart:m,onPressEnd:h,onPressChange:g,onPress:_,onPressUp:v,onClick:y}=e,b=il({...e,value:t.isSelected}),{isInvalid:x,validationErrors:S,validationDetails:C}=b.displayValidation;Jc(e,b,n);let w=e=>{e.stopPropagation(),t.setSelected(Se(e).checked)},{pressProps:T,isPressed:E}=ct({onPressStart:m,onPressEnd:h,onPressChange:g,onPress:_,onPressUp:v,onClick:y,isDisabled:r}),[D,O]=(0,vl.useState)(!1),{pressProps:k}=ct({onPressStart(e){if(e.pointerType===`keyboard`||e.pointerType===`virtual`){e.continuePropagation();return}m?.(e),g?.(!0),O(!0)},onPressEnd(e){if(e.pointerType===`keyboard`||e.pointerType===`virtual`){e.continuePropagation();return}h?.(e),g?.(!1),O(!1)},onPressUp(e){if(e.pointerType===`keyboard`||e.pointerType===`virtual`){e.continuePropagation();return}v?.(e)},onClick:y,onPress(r){if(r.pointerType===`keyboard`||r.pointerType===`virtual`){r.continuePropagation();return}_?.(r),t.toggle(),n.current?.focus();let{[hl]:i}=e,{commitValidation:a}=i||b;a()},isDisabled:r||i}),{focusableProps:A}=te(e,n),j=W(T,A),M=R(e,{labelable:!0});Gc(n,t.defaultSelected,t.setSelected);let N=tl(),P=tl();return{labelProps:W(k,{onClick:e=>e.preventDefault()}),inputProps:W(M,{checked:t.isSelected,"aria-required":l&&u===`aria`||void 0,required:l&&u===`native`,"aria-invalid":x||e.validationState===`invalid`||void 0,"aria-errormessage":e[`aria-errormessage`],"aria-controls":e[`aria-controls`],"aria-readonly":i||void 0,"aria-describedby":[N.id,P.id,p].filter(Boolean).join(` `)||void 0,onChange:w,disabled:r,...a==null?{}:{value:a},name:o,form:s,type:`checkbox`,...j}),descriptionProps:N,errorMessageProps:P,isSelected:t.isSelected,isPressed:E||D,isDisabled:r,isReadOnly:i,isInvalid:x||e.validationState===`invalid`,validationErrors:S,validationDetails:C}}var vl;function yl(){return(yl=t((()=>{V(),L(),O(),M(),qc(),$c(),yt(),rl(),vl=r(),gl()})))()}function bl(e,t,n){let{labelProps:r,inputProps:i,descriptionProps:a,errorMessageProps:o,isSelected:s,isPressed:c,isDisabled:l,isReadOnly:u,isInvalid:d,validationErrors:f,validationDetails:p}=_l(e,t,n),{isIndeterminate:m}=e;return(0,xl.useEffect)(()=>{n.current&&(n.current.indeterminate=!!m)}),{labelProps:W(r,(0,xl.useMemo)(()=>({onMouseDown:e=>e.preventDefault()}),[])),inputProps:i,descriptionProps:a,errorMessageProps:o,isSelected:s,isPressed:c,isDisabled:l,isReadOnly:u,isInvalid:d,validationErrors:f,validationDetails:p}}var xl;function Sl(){return(Sl=t((()=>{yl(),O(),xl=r()})))()}function Cl(e){let{id:t,label:n,"aria-labelledby":r,"aria-label":i,labelElementType:a=`label`}=e;t=U(t);let o=U(),s={};n&&(r=r?`${o} ${r}`:o,s={id:o,htmlFor:a===`label`?t:void 0});let c=Le({id:t,"aria-label":i,"aria-labelledby":r});return{labelProps:s,fieldProps:c}}function wl(){return(wl=t((()=>{d(),st()})))()}function Tl(e){let{description:t,errorMessage:n,isInvalid:r,validationState:i}=e,{labelProps:a,fieldProps:o}=Cl(e),s=C([!!t,!!n,r,i]),c=C([!!t,!!n,r,i]);return o=W(o,{"aria-describedby":[s,c,e[`aria-describedby`]].filter(Boolean).join(` `)||void 0}),{labelProps:a,fieldProps:o,descriptionProps:{id:s},errorMessageProps:{id:c}}}function El(){return(El=t((()=>{wl(),O(),d()})))()}function Dl(e={}){let{isReadOnly:t}=e,[n,r]=ot(e.isSelected,e.defaultSelected||!1,e.onChange),[i]=(0,Ol.useState)(n);function a(e){t||r(e)}function o(){t||r(!n)}return{isSelected:n,defaultSelected:e.defaultSelected??i,setSelected:a,toggle:o}}var Ol;function kl(){return(kl=t((()=>{Ue(),Ol=r()})))()}function Al(e,t=-1/0,n=1/0){return Math.min(Math.max(e,t),n)}function jl(e,t={}){let{numberingSystem:n}=t;if(n&&e.includes(`-nu-`)&&(e.includes(`-u-`)||(e+=`-u-`),e+=`-nu-${n}`),t.style===`unit`&&!Fl){let{unit:e,unitDisplay:n=`short`}=t;if(!e)throw Error(`unit option must be provided with style: "unit"`);if(!Il[e]?.[n])throw Error(`Unsupported unit ${e} with unitDisplay = ${n}`);t={...t,style:`decimal`}}let r=e+(t?Object.entries(t).sort((e,t)=>e[0]<t[0]?-1:1).join():``);if(Nl.has(r))return Nl.get(r);let i=new Intl.NumberFormat(e,t);return Nl.set(r,i),i}function Ml(e,t,n){if(t===`auto`)return e.format(n);if(t===`never`)return e.format(Math.abs(n));{let r=!1;if(t===`always`?r=n>0||Object.is(n,0):t===`exceptZero`&&(Object.is(n,-0)||Object.is(n,0)?n=Math.abs(n):r=n>0),r){let t=e.format(-n),r=e.format(n),i=t.replace(r,``).replace(/\u200e|\u061C/,``);return[...i].length!==1&&console.warn(`@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case`),t.replace(r,`!!!`).replace(i,`+`).replace(`!!!`,r)}return e.format(n)}}var Nl,Pl,Fl,Il,Ll;function Rl(){return(Rl=t((()=>{Nl=new Map,Pl=!1;try{Pl=new Intl.NumberFormat(`de-DE`,{signDisplay:`exceptZero`}).resolvedOptions().signDisplay===`exceptZero`}catch{}Fl=!1;try{Fl=new Intl.NumberFormat(`de-DE`,{style:`unit`,unit:`degree`}).resolvedOptions().style===`unit`}catch{}Il={degree:{narrow:{default:`°`,"ja-JP":` 度`,"zh-TW":`度`,"sl-SI":` °`}}},Ll=class{constructor(e,t={}){this.numberFormatter=jl(e,t),this.options=t}format(e){let t=``;if(t=!Pl&&this.options.signDisplay!=null?Ml(this.numberFormatter,this.options.signDisplay,e):this.numberFormatter.format(e),this.options.style===`unit`&&!Fl){let{unit:e,unitDisplay:n=`short`,locale:r}=this.resolvedOptions();if(!e)return t;let i=Il[e]?.[n];t+=i[r]||i.default}return t}formatToParts(e){return this.numberFormatter.formatToParts(e)}formatRange(e,t){if(typeof this.numberFormatter.formatRange==`function`)return this.numberFormatter.formatRange(e,t);if(t<e)throw RangeError(`End date must be >= start date`);return`${this.format(e)} \u{2013} ${this.format(t)}`}formatRangeToParts(e,t){if(typeof this.numberFormatter.formatRangeToParts==`function`)return this.numberFormatter.formatRangeToParts(e,t);if(t<e)throw RangeError(`End date must be >= start date`);let n=this.numberFormatter.formatToParts(e),r=this.numberFormatter.formatToParts(t);return[...n.map(e=>({...e,source:`startRange`})),{type:`literal`,value:` – `,source:`shared`},...r.map(e=>({...e,source:`endRange`}))]}resolvedOptions(){let e=this.numberFormatter.resolvedOptions();return!Pl&&this.options.signDisplay!=null&&(e={...e,signDisplay:this.options.signDisplay}),!Fl&&this.options.style===`unit`&&(e={...e,style:`unit`,unit:this.options.unit,unitDisplay:this.options.unitDisplay}),e}}})))()}function zl(e,t,n){let r=Bl(e,t);if(!e.includes(`-nu-`)&&!r.isValidPartialNumber(n)){for(let i of Gl)if(i!==r.options.numberingSystem){let r=Bl(e+(e.includes(`-u-`)?`-nu-`:`-u-nu-`)+i,t);if(r.isValidPartialNumber(n))return r}}return r}function Bl(e,t){let n=e+(t?Object.entries(t).sort((e,t)=>e[0]<t[0]?-1:1).join():``),r=ql.get(n);return r||(r=new Jl(e,t),ql.set(n,r)),r}function Vl(e,t,n,r){let i=new Intl.NumberFormat(e,{...n,minimumSignificantDigits:1,maximumSignificantDigits:21,roundingIncrement:1,roundingPriority:`auto`,roundingMode:`halfExpand`,useGrouping:!0}),a=i.formatToParts(-10000.111),o=i.formatToParts(10000.111),s=J.map(e=>i.formatToParts(e)),c=s.map((e,t)=>{let n=e.find(e=>e.type===`unit`);return n&&!e.some(e=>e.type===`integer`||e.type===`fraction`)?{unit:n.value,value:J[t]}:null}).filter(e=>!!e),l=a.find(e=>e.type===`minusSign`)?.value??`-`,u=o.find(e=>e.type===`plusSign`)?.value;!u&&(r?.signDisplay===`exceptZero`||r?.signDisplay===`always`)&&(u=`+`);let d=new Intl.NumberFormat(e,{...n,minimumFractionDigits:2,maximumFractionDigits:2}).formatToParts(.001).find(e=>e.type===`decimal`)?.value,f=a.find(e=>e.type===`group`)?.value,p=a.filter(e=>!Yl.has(e.type)).map(e=>Ul(e.value)),m=s.flatMap(e=>e.filter(e=>!Yl.has(e.type)).map(e=>Ul(e.value))),h=[...new Set([...p,...m])].sort((e,t)=>t.length-e.length),g=h.length===0?RegExp(`\\p{White_Space}|\\p{Cf}`,`gu`):RegExp(`${h.join(`|`)}|\\p{White_Space}|\\p{Cf}`,`gu`),_=[...new Intl.NumberFormat(n.locale,{useGrouping:!1}).format(9876543210)].reverse(),v=new Map(_.map((e,t)=>[e,t])),y=RegExp(`[${_.join(``)}]`,`g`);return{minusSign:l,plusSign:u,decimal:d,group:f,literals:g,numeral:y,numerals:_,index:e=>String(v.get(e)),noNumeralUnits:c}}function Hl(e,t,n){return e.replaceAll?e.replaceAll(t,n):e.split(t).join(n)}function Ul(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}var Wl,Gl,Kl,ql,Jl,Yl,J;function Xl(){return(Xl=t((()=>{Rl(),Wl=RegExp(`^.*\\(.*\\).*$`),Gl=[`latn`,`arab`,`hanidec`,`deva`,`beng`,`fullwide`],Kl=class{constructor(e,t={}){this.locale=e,this.options=t}parse(e){return zl(this.locale,this.options,e).parse(e)}isValidPartialNumber(e,t,n){return zl(this.locale,this.options,e).isValidPartialNumber(e,t,n)}getNumberingSystem(e){return zl(this.locale,this.options,e).options.numberingSystem}},ql=new Map,Jl=class{constructor(e,t={}){this.locale=e,t.roundingIncrement!==1&&t.roundingIncrement!=null&&(t.maximumFractionDigits==null&&t.minimumFractionDigits==null?(t.maximumFractionDigits=0,t.minimumFractionDigits=0):t.maximumFractionDigits==null?t.maximumFractionDigits=t.minimumFractionDigits:t.minimumFractionDigits??=t.maximumFractionDigits),this.formatter=new Intl.NumberFormat(e,t),this.options=this.formatter.resolvedOptions(),this.symbols=Vl(e,this.formatter,this.options,t),this.options.style===`percent`&&((this.options.minimumFractionDigits??0)>18||(this.options.maximumFractionDigits??0)>18)&&console.warn(`NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.`)}parse(e){let t=this.formatter.resolvedOptions().useGrouping,n=this.sanitize(e);if(!t&&this.symbols.group&&n.includes(this.symbols.group))return NaN;if(this.symbols.group&&(n=n.replaceAll(this.symbols.group,``)),this.symbols.decimal&&(n=n.replace(this.symbols.decimal,`.`)),this.symbols.minusSign&&(n=n.replace(this.symbols.minusSign,`-`)),n=n.replace(this.symbols.numeral,this.symbols.index),this.options.style===`percent`){let e=n.indexOf(`-`);n=n.replace(`-`,``),n=n.replace(`+`,``);let t=n.indexOf(`.`);t===-1&&(t=n.length),n=n.replace(`.`,``),n=t-2==0?`0.${n}`:t-2==-1?`0.0${n}`:t-2==-2?`0.00`:`${n.slice(0,t-2)}.${n.slice(t-2)}`,e>-1&&(n=`-${n}`)}let r=n?+n:NaN;if(isNaN(r))return NaN;if(this.options.style===`percent`){let e={...this.options,style:`decimal`,minimumFractionDigits:Math.min((this.options.minimumFractionDigits??0)+2,20),maximumFractionDigits:Math.min((this.options.maximumFractionDigits??0)+2,20)};return new Kl(this.locale,e).parse(new Ll(this.locale,e).format(r))}return this.options.currencySign===`accounting`&&Wl.test(e)&&(r=-1*r),r}sanitize(e){let t=this.formatter.resolvedOptions().useGrouping;return this.symbols.noNumeralUnits.length>0&&this.symbols.noNumeralUnits.find(t=>t.unit===e)?this.symbols.noNumeralUnits.find(t=>t.unit===e).value.toString():(e=e.replace(this.symbols.literals,``),this.symbols.minusSign&&(e=e.replace(`-`,this.symbols.minusSign)),this.options.numberingSystem===`arab`&&(this.symbols.decimal&&(e=Hl(e,`,`,this.symbols.decimal),e=Hl(e,`،`,this.symbols.decimal)),this.symbols.group&&t&&(e=Hl(e,`.`,this.symbols.group))),this.symbols.group===`’`&&e.includes(`'`)&&t&&(e=Hl(e,`'`,this.symbols.group)),this.symbols.group===`'`&&e.includes(`’`)&&t&&(e=Hl(e,`’`,this.symbols.group)),this.options.locale===`fr-FR`&&this.symbols.group&&t&&(e=Hl(e,` `,this.symbols.group),e=Hl(e,/\u00A0/g,this.symbols.group)),e)}isValidPartialNumber(e,t=-1/0,n=1/0){let r=this.formatter.resolvedOptions().useGrouping;return e=this.sanitize(e),this.symbols.minusSign&&e.startsWith(this.symbols.minusSign)&&t<0?e=e.slice(this.symbols.minusSign.length):this.symbols.plusSign&&e.startsWith(this.symbols.plusSign)&&n>0&&(e=e.slice(this.symbols.plusSign.length)),this.symbols.decimal&&e.indexOf(this.symbols.decimal)>-1&&this.options.maximumFractionDigits===0?!1:(this.symbols.group&&r&&(e=Hl(e,this.symbols.group,``)),e=e.replace(this.symbols.numeral,``),this.symbols.decimal&&(e=e.replace(this.symbols.decimal,``)),e.length===0)}},Yl=new Set([`decimal`,`fraction`,`integer`,`minusSign`,`plusSign`,`group`]),J=[0,4,2,1,11,20,3,7,100,21,.1,1.1]})))()}function Zl(e,t){let{inputElementType:n=`input`,isDisabled:r=!1,isRequired:i=!1,isReadOnly:a=!1,type:o=`text`,validationBehavior:s=`aria`}=e,[c,l]=ot(e.value,e.defaultValue||``,e.onChange),{focusableProps:u}=te(e,t),d=il({...e,value:c}),{isInvalid:f,validationErrors:p,validationDetails:m}=d.displayValidation,{labelProps:h,fieldProps:g,descriptionProps:_,errorMessageProps:v}=Tl({...e,isInvalid:f,errorMessage:e.errorMessage||p}),y=R(e,{labelable:!0}),b={type:o,pattern:e.pattern},[x]=(0,Ql.useState)(c);return Gc(t,e.defaultValue??x,l),Jc(e,d,t),{labelProps:h,inputProps:W(y,n===`input`?b:void 0,{disabled:r,readOnly:a,required:i&&s===`native`,"aria-required":i&&s===`aria`||void 0,"aria-invalid":f||void 0,"aria-errormessage":e[`aria-errormessage`],"aria-activedescendant":e[`aria-activedescendant`],"aria-autocomplete":e[`aria-autocomplete`],"aria-haspopup":e[`aria-haspopup`],"aria-controls":e[`aria-controls`],value:c,onChange:e=>l(Se(e).value),autoComplete:e.autoComplete,autoCapitalize:e.autoCapitalize,maxLength:e.maxLength,minLength:e.minLength,name:e.name,form:e.form,placeholder:e.placeholder,inputMode:e.inputMode,autoCorrect:e.autoCorrect,spellCheck:e.spellCheck,enterKeyHint:e.enterKeyHint,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...u,...g}),descriptionProps:_,errorMessageProps:v,isInvalid:f,validationErrors:p,validationDetails:m}}var Ql;function $l(){return($l=t((()=>{V(),L(),O(),El(),M(),qc(),$c(),Ql=e(r(),1),Ue(),gl()})))()}function eu(e={}){let{locale:t}=je();return(0,tu.useMemo)(()=>new Ll(t,e),[t,e])}var tu;function nu(){return(nu=t((()=>{Me(),Rl(),tu=r()})))()}var ru;function iu(){return(iu=t((()=>{ru={},ru={Empty:`فارغ`}})))()}var au;function ou(){return(ou=t((()=>{au={},au={Empty:`Изпразни`}})))()}var su;function cu(){return(cu=t((()=>{su={},su={Empty:`Prázdné`}})))()}var lu;function uu(){return(uu=t((()=>{lu={},lu={Empty:`Tom`}})))()}var du;function fu(){return(fu=t((()=>{du={},du={Empty:`Leer`}})))()}var pu;function mu(){return(mu=t((()=>{pu={},pu={Empty:`Άδειο`}})))()}var hu;function gu(){return(gu=t((()=>{hu={},hu={Empty:`Empty`}})))()}var _u;function vu(){return(vu=t((()=>{_u={},_u={Empty:`Vacío`}})))()}var yu;function bu(){return(bu=t((()=>{yu={},yu={Empty:`Tühjenda`}})))()}var xu;function Su(){return(Su=t((()=>{xu={},xu={Empty:`Tyhjä`}})))()}var Cu;function wu(){return(wu=t((()=>{Cu={},Cu={Empty:`Vide`}})))()}var Tu;function Eu(){return(Eu=t((()=>{Tu={},Tu={Empty:`ריק`}})))()}var Du;function Ou(){return(Ou=t((()=>{Du={},Du={Empty:`Prazno`}})))()}var ku;function Au(){return(Au=t((()=>{ku={},ku={Empty:`Üres`}})))()}var ju;function Mu(){return(Mu=t((()=>{ju={},ju={Empty:`Vuoto`}})))()}var Nu;function Pu(){return(Pu=t((()=>{Nu={},Nu={Empty:`空`}})))()}var Fu;function Iu(){return(Iu=t((()=>{Fu={},Fu={Empty:`비어 있음`}})))()}var Lu;function Ru(){return(Ru=t((()=>{Lu={},Lu={Empty:`Tuščias`}})))()}var zu;function Bu(){return(Bu=t((()=>{zu={},zu={Empty:`Tukšs`}})))()}var Vu;function Hu(){return(Hu=t((()=>{Vu={},Vu={Empty:`Tom`}})))()}var Uu;function Wu(){return(Wu=t((()=>{Uu={},Uu={Empty:`Leeg`}})))()}var Gu;function Ku(){return(Ku=t((()=>{Gu={},Gu={Empty:`Pusty`}})))()}var qu;function Ju(){return(Ju=t((()=>{qu={},qu={Empty:`Vazio`}})))()}var Yu;function Xu(){return(Xu=t((()=>{Yu={},Yu={Empty:`Vazio`}})))()}var Zu;function Qu(){return(Qu=t((()=>{Zu={},Zu={Empty:`Gol`}})))()}var $u;function ed(){return(ed=t((()=>{$u={},$u={Empty:`Не заполнено`}})))()}var td;function nd(){return(nd=t((()=>{td={},td={Empty:`Prázdne`}})))()}var rd;function id(){return(id=t((()=>{rd={},rd={Empty:`Prazen`}})))()}var ad;function od(){return(od=t((()=>{ad={},ad={Empty:`Prazno`}})))()}var sd;function cd(){return(cd=t((()=>{sd={},sd={Empty:`Tomt`}})))()}var ld;function ud(){return(ud=t((()=>{ld={},ld={Empty:`Boş`}})))()}var dd;function fd(){return(fd=t((()=>{dd={},dd={Empty:`Пусто`}})))()}var pd;function md(){return(md=t((()=>{pd={},pd={Empty:`空`}})))()}var hd;function gd(){return(gd=t((()=>{hd={},hd={Empty:`空白`}})))()}var _d;function vd(){return(vd=t((()=>{iu(),ou(),cu(),uu(),fu(),mu(),gu(),vu(),bu(),Su(),wu(),Eu(),Ou(),Au(),Mu(),Pu(),Iu(),Ru(),Bu(),Hu(),Wu(),Ku(),Ju(),Xu(),Qu(),ed(),nd(),id(),od(),cd(),ud(),fd(),md(),gd(),_d={},_d={"ar-AE":ru,"bg-BG":au,"cs-CZ":su,"da-DK":lu,"de-DE":du,"el-GR":pu,"en-US":hu,"es-ES":_u,"et-EE":yu,"fi-FI":xu,"fr-FR":Cu,"he-IL":Tu,"hr-HR":Du,"hu-HU":ku,"it-IT":ju,"ja-JP":Nu,"ko-KR":Fu,"lt-LT":Lu,"lv-LV":zu,"nb-NO":Vu,"nl-NL":Uu,"pl-PL":Gu,"pt-BR":qu,"pt-PT":Yu,"ro-RO":Zu,"ru-RU":$u,"sk-SK":td,"sl-SI":rd,"sr-SP":ad,"sv-SE":sd,"tr-TR":ld,"uk-UA":dd,"zh-CN":pd,"zh-TW":hd}})))()}function yd(e){return e&&e.__esModule?e.default:e}function bd(e){let t=(0,xd.useRef)(void 0),{value:n,textValue:r,minValue:i,maxValue:a,isDisabled:o,isReadOnly:s,isRequired:c,onIncrement:l,onIncrementPage:u,onDecrement:d,onDecrementPage:f,onDecrementToMin:p,onIncrementToMax:m}=e,h=Te(yd(_d),`@react-aria/spinbutton`),g=(0,xd.useRef)(!1),_=(0,xd.useCallback)(()=>{clearTimeout(t.current),g.current=!1},[]),v=de(()=>{_()});(0,xd.useEffect)(()=>()=>v(),[]);let{keyboardProps:y}=I({isDisabled:o||s,shortcuts:{PageUp:()=>{if(u){u();return}if(l){l();return}return!1},ArrowUp:()=>{if(l){l();return}return!1},PageDown:()=>{if(f){f();return}if(d){d();return}return!1},ArrowDown:()=>{if(d){d();return}return!1},Home:()=>{if(p){p();return}return!1},End:()=>{if(m){m();return}return!1}},allowRepeats:!0}),b=(0,xd.useRef)(!1),x=()=>{b.current=!0},S=()=>{b.current=!1},C=r===``?h.format(`Empty`):(r||`${n}`).replace(`-`,`−`);(0,xd.useEffect)(()=>{b.current&&(pr(`assertive`),K(C,`assertive`))},[C]);let w=(0,xd.useCallback)(()=>{_()},[_]),T=de(l??Sd),E=de(d??Sd),D=de(()=>{(a===void 0||isNaN(a)||n===void 0||isNaN(n)||n<a)&&(T(),O(60))}),O=de(e=>{v(),g.current=!0,t.current=window.setTimeout(D,e)}),k=de(()=>{(i===void 0||isNaN(i)||n===void 0||isNaN(n)||n>i)&&(E(),A(60))}),A=de(e=>{v(),g.current=!0,t.current=window.setTimeout(k,e)}),j=e=>{e.preventDefault()},{addGlobalListener:M,removeAllGlobalListeners:N}=P(),F=(0,xd.useRef)(!1),[L,R]=(0,xd.useState)(null);(0,xd.useEffect)(()=>{L===`touch`?O(600):L?O(400):L||v()},[L]);let[z,B]=(0,xd.useState)(null);return(0,xd.useEffect)(()=>{z===`touch`?A(600):z?A(400):z||v()},[z]),{spinButtonProps:{role:`spinbutton`,"aria-valuenow":n!==void 0&&!isNaN(n)?n:void 0,"aria-valuetext":C,"aria-valuemin":i,"aria-valuemax":a,"aria-disabled":o||void 0,"aria-readonly":s||void 0,"aria-required":c||void 0,...y,onFocus:x,onBlur:S},incrementButtonProps:{onPressStart:e=>{_(),e.pointerType===`touch`?(M(window,`pointercancel`,w,{capture:!0}),F.current=!1,R(`touch`)):(l?.(),R(`mouse`)),M(window,`contextmenu`,j)},onPressUp:e=>{_(),e.pointerType===`touch`&&(F.current=!0),N(),R(null)},onPressEnd:e=>{_(),e.pointerType===`touch`&&!g.current&&F.current&&l?.(),F.current=!1,R(null)},onFocus:x,onBlur:S},decrementButtonProps:{onPressStart:e=>{_(),e.pointerType===`touch`?(M(window,`pointercancel`,w,{capture:!0}),F.current=!1,B(`touch`)):(d?.(),B(`mouse`))},onPressUp:e=>{_(),e.pointerType===`touch`&&(F.current=!0),N(),B(null)},onPressEnd:e=>{_(),e.pointerType===`touch`&&!g.current&&F.current&&d?.(),F.current=!1,B(null)},onFocus:x,onBlur:S}}}var xd,Sd;function Cd(){return(Cd=t((()=>{_r(),vd(),oe(),ue(),xe(),Je(),xd=r(),Sd=()=>{}})))()}function wd(e){return typeof e==`string`?e.replace(/\s*/g,``):``+e}function Td(e,t){let n=Ed.get(e);if(!n)throw Error(`Unknown list`);return`${n.id}-option-${wd(t)}`}var Ed;function Dd(){return(Dd=t((()=>{Ed=new WeakMap})))()}var Od;function kd(){return(kd=t((()=>{Od={},Od={buttonLabel:`عرض المقترحات`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}`,other:()=>`${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`})} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{627}\u{644}\u{645}\u{62C}\u{645}\u{648}\u{639}\u{629} \u{627}\u{644}\u{645}\u{62F}\u{62E}\u{644}\u{629} ${e.groupTitle}, \u{645}\u{639} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}`,other:()=>`${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, محدد`,other:``},e.isSelected)}`,listboxLabel:`مقترحات`,selectedAnnouncement:e=>`${e.optionText}\u{60C} \u{645}\u{62D}\u{62F}\u{62F}`}})))()}var Ad;function jd(){return(jd=t((()=>{Ad={},Ad={buttonLabel:`Покажи предложения`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,other:()=>`${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`})} \u{43D}\u{430} \u{440}\u{430}\u{437}\u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{435}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{412}\u{44A}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,other:()=>`${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, избрани`,other:``},e.isSelected)}`,listboxLabel:`Предложения`,selectedAnnouncement:e=>`${e.optionText}, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`}})))()}var Md;function Nd(){return(Nd=t((()=>{Md={},Md={buttonLabel:`Zobrazit doporučení`,countAnnouncement:(e,t)=>`K dispozici ${t.plural(e.optionCount,{one:()=>`je ${t.number(e.optionCount)} mo\u{17E}nost`,other:()=>`jsou/je ${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Zadan\xe1 skupina \u{201E}${e.groupTitle}\u{201C} ${t.plural(e.groupCount,{one:()=>`s ${t.number(e.groupCount)} mo\u{17E}nost\xed`,other:()=>`se ${t.number(e.groupCount)} mo\u{17E}nostmi`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:` (vybráno)`,other:``},e.isSelected)}`,listboxLabel:`Návrhy`,selectedAnnouncement:e=>`${e.optionText}, vybr\xe1no`}})))()}var Pd;function Fd(){return(Fd=t((()=>{Pd={},Pd={buttonLabel:`Vis forslag`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} mulighed tilg\xe6ngelig`,other:()=>`${t.number(e.optionCount)} muligheder tilg\xe6ngelige`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Angivet gruppe ${e.groupTitle}, med ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} mulighed`,other:()=>`${t.number(e.groupCount)} muligheder`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, valgt`,other:``},e.isSelected)}`,listboxLabel:`Forslag`,selectedAnnouncement:e=>`${e.optionText}, valgt`}})))()}var Id;function Ld(){return(Ld=t((()=>{Id={},Id={buttonLabel:`Empfehlungen anzeigen`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} Option`,other:()=>`${t.number(e.optionCount)} Optionen`})} verf\xfcgbar.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Eingetretene Gruppe ${e.groupTitle}, mit ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} Option`,other:()=>`${t.number(e.groupCount)} Optionen`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, ausgewählt`,other:``},e.isSelected)}`,listboxLabel:`Empfehlungen`,selectedAnnouncement:e=>`${e.optionText}, ausgew\xe4hlt`}})))()}var Rd;function zd(){return(zd=t((()=>{Rd={},Rd={buttonLabel:`Προβολή προτάσεων`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,other:()=>`${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2} `})} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B5}\u{3C2}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3BF}\u{3BC}\u{3AC}\u{3B4}\u{3B1} ${e.groupTitle}, \u{3BC}\u{3B5} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,other:()=>`${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, επιλεγμένο`,other:``},e.isSelected)}`,listboxLabel:`Προτάσεις`,selectedAnnouncement:e=>`${e.optionText}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5}`}})))()}var Bd;function Vd(){return(Vd=t((()=>{Bd={},Bd={focusAnnouncement:(e,t)=>`${t.select({true:()=>`Entered group ${e.groupTitle}, with ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} option`,other:()=>`${t.number(e.groupCount)} options`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, selected`,other:``},e.isSelected)}`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} option`,other:()=>`${t.number(e.optionCount)} options`})} available.`,selectedAnnouncement:e=>`${e.optionText}, selected`,buttonLabel:`Show suggestions`,listboxLabel:`Suggestions`}})))()}var Hd;function Ud(){return(Ud=t((()=>{Hd={},Hd={buttonLabel:`Mostrar sugerencias`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opci\xf3n`,other:()=>`${t.number(e.optionCount)} opciones`})} disponible(s).`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Se ha unido al grupo ${e.groupTitle}, con ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opci\xf3n`,other:()=>`${t.number(e.groupCount)} opciones`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, seleccionado`,other:``},e.isSelected)}`,listboxLabel:`Sugerencias`,selectedAnnouncement:e=>`${e.optionText}, seleccionado`}})))()}var Wd;function Gd(){return(Gd=t((()=>{Wd={},Wd={buttonLabel:`Kuva soovitused`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} valik`,other:()=>`${t.number(e.optionCount)} valikud`})} saadaval.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Sisestatud r\xfchm ${e.groupTitle}, valikuga ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} valik`,other:()=>`${t.number(e.groupCount)} valikud`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, valitud`,other:``},e.isSelected)}`,listboxLabel:`Soovitused`,selectedAnnouncement:e=>`${e.optionText}, valitud`}})))()}var Kd;function qd(){return(qd=t((()=>{Kd={},Kd={buttonLabel:`Näytä ehdotukset`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} vaihtoehto`,other:()=>`${t.number(e.optionCount)} vaihtoehtoa`})} saatavilla.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Siirtyi ryhm\xe4\xe4n ${e.groupTitle}, jossa ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} vaihtoehto`,other:()=>`${t.number(e.groupCount)} vaihtoehtoa`})}.`,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, valittu`,other:``},e.isSelected)}`,listboxLabel:`Ehdotukset`,selectedAnnouncement:e=>`${e.optionText}, valittu`}})))()}var Jd;function Yd(){return(Yd=t((()=>{Jd={},Jd={buttonLabel:`Afficher les suggestions`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} option`,other:()=>`${t.number(e.optionCount)} options`})} disponible(s).`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Groupe ${e.groupTitle} rejoint, avec ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} option`,other:()=>`${t.number(e.groupCount)} options`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, sélectionné(s)`,other:``},e.isSelected)}`,listboxLabel:`Suggestions`,selectedAnnouncement:e=>`${e.optionText}, s\xe9lectionn\xe9`}})))()}var Xd;function Zd(){return(Zd=t((()=>{Xd={},Xd={buttonLabel:`הצג הצעות`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.optionCount)}`,other:()=>`${t.number(e.optionCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`})} \u{5D1}\u{5DE}\u{5E6}\u{5D1} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{5E0}\u{5DB}\u{5E0}\u{5E1} \u{5DC}\u{5E7}\u{5D1}\u{5D5}\u{5E6}\u{5D4} ${e.groupTitle}, \u{5E2}\u{5DD} ${t.plural(e.groupCount,{one:()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.groupCount)}`,other:()=>`${t.number(e.groupCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, נבחר`,other:``},e.isSelected)}`,listboxLabel:`הצעות`,selectedAnnouncement:e=>`${e.optionText}, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`}})))()}var Qd;function $d(){return($d=t((()=>{Qd={},Qd={buttonLabel:`Prikaži prijedloge`,countAnnouncement:(e,t)=>`Dostupno jo\u{161}: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije/a`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Unesena skupina ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcijom`,other:()=>`${t.number(e.groupCount)} opcije/a`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, odabranih`,other:``},e.isSelected)}`,listboxLabel:`Prijedlozi`,selectedAnnouncement:e=>`${e.optionText}, odabrano`}})))()}var ef;function tf(){return(tf=t((()=>{ef={},ef={buttonLabel:`Javaslatok megjelenítése`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} lehet\u{151}s\xe9g`,other:()=>`${t.number(e.optionCount)} lehet\u{151}s\xe9g`})} \xe1ll rendelkez\xe9sre.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Bel\xe9pett a(z) ${e.groupTitle} csoportba, amely ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} lehet\u{151}s\xe9get`,other:()=>`${t.number(e.groupCount)} lehet\u{151}s\xe9get`})} tartalmaz. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, kijelölve`,other:``},e.isSelected)}`,listboxLabel:`Javaslatok`,selectedAnnouncement:e=>`${e.optionText}, kijel\xf6lve`}})))()}var nf;function rf(){return(rf=t((()=>{nf={},nf={buttonLabel:`Mostra suggerimenti`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opzione disponibile`,other:()=>`${t.number(e.optionCount)} opzioni disponibili`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Ingresso nel gruppo ${e.groupTitle}, con ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opzione`,other:()=>`${t.number(e.groupCount)} opzioni`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, selezionato`,other:``},e.isSelected)}`,listboxLabel:`Suggerimenti`,selectedAnnouncement:e=>`${e.optionText}, selezionato`}})))()}var af;function of(){return(of=t((()=>{af={},af={buttonLabel:`候補を表示`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,other:()=>`${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`})}\u{3092}\u{5229}\u{7528}\u{3067}\u{304D}\u{307E}\u{3059}\u{3002}`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{5165}\u{529B}\u{3055}\u{308C}\u{305F}\u{30B0}\u{30EB}\u{30FC}\u{30D7} ${e.groupTitle}\u{3001}${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,other:()=>`${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`})}\u{3092}\u{542B}\u{3080}\u{3002}`,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`、選択済み`,other:``},e.isSelected)}`,listboxLabel:`候補`,selectedAnnouncement:e=>`${e.optionText}\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`}})))()}var sf;function cf(){return(cf=t((()=>{sf={},sf={buttonLabel:`제안 사항 표시`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`,other:()=>`${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`})}\u{C744} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{C785}\u{B825}\u{D55C} \u{ADF8}\u{B8F9} ${e.groupTitle}, ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`,other:()=>`${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, 선택됨`,other:``},e.isSelected)}`,listboxLabel:`제안`,selectedAnnouncement:e=>`${e.optionText}, \u{C120}\u{D0DD}\u{B428}`}})))()}var lf;function uf(){return(uf=t((()=>{lf={},lf={buttonLabel:`Rodyti pasiūlymus`,countAnnouncement:(e,t)=>`Yra ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} parinktis`,other:()=>`${t.number(e.optionCount)} parinktys (-i\u{173})`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{12E}vesta grup\u{117} ${e.groupTitle}, su ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} parinktimi`,other:()=>`${t.number(e.groupCount)} parinktimis (-i\u{173})`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, pasirinkta`,other:``},e.isSelected)}`,listboxLabel:`Pasiūlymai`,selectedAnnouncement:e=>`${e.optionText}, pasirinkta`}})))()}var df;function ff(){return(ff=t((()=>{df={},df={buttonLabel:`Rādīt ieteikumus`,countAnnouncement:(e,t)=>`Pieejamo opciju skaits: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcijas`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Ievad\u{12B}ta grupa ${e.groupTitle}, ar ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opciju`,other:()=>`${t.number(e.groupCount)} opcij\u{101}m`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, atlasīta`,other:``},e.isSelected)}`,listboxLabel:`Ieteikumi`,selectedAnnouncement:e=>`${e.optionText}, atlas\u{12B}ta`}})))()}var pf;function mf(){return(mf=t((()=>{pf={},pf={buttonLabel:`Vis forslag`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} alternativ`,other:()=>`${t.number(e.optionCount)} alternativer`})} finnes.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Angitt gruppe ${e.groupTitle}, med ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} alternativ`,other:()=>`${t.number(e.groupCount)} alternativer`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, valgt`,other:``},e.isSelected)}`,listboxLabel:`Forslag`,selectedAnnouncement:e=>`${e.optionText}, valgt`}})))()}var hf;function gf(){return(gf=t((()=>{hf={},hf={buttonLabel:`Suggesties weergeven`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} optie`,other:()=>`${t.number(e.optionCount)} opties`})} beschikbaar.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Groep ${e.groupTitle} ingevoerd met ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} optie`,other:()=>`${t.number(e.groupCount)} opties`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, geselecteerd`,other:``},e.isSelected)}`,listboxLabel:`Suggesties`,selectedAnnouncement:e=>`${e.optionText}, geselecteerd`}})))()}var _f;function vf(){return(vf=t((()=>{_f={},_f={buttonLabel:`Wyświetlaj sugestie`,countAnnouncement:(e,t)=>`dost\u{119}pna/dost\u{119}pne(-nych) ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcja`,other:()=>`${t.number(e.optionCount)} opcje(-i)`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Do\u{142}\u{105}czono do grupy ${e.groupTitle}, z ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcj\u{105}`,other:()=>`${t.number(e.groupCount)} opcjami`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, wybrano`,other:``},e.isSelected)}`,listboxLabel:`Sugestie`,selectedAnnouncement:e=>`${e.optionText}, wybrano`}})))()}var yf;function bf(){return(bf=t((()=>{yf={},yf={buttonLabel:`Mostrar sugestões`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\xe7\xe3o`,other:()=>`${t.number(e.optionCount)} op\xe7\xf5es`})} dispon\xedvel.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Grupo inserido ${e.groupTitle}, com ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\xe7\xe3o`,other:()=>`${t.number(e.groupCount)} op\xe7\xf5es`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, selecionado`,other:``},e.isSelected)}`,listboxLabel:`Sugestões`,selectedAnnouncement:e=>`${e.optionText}, selecionado`}})))()}var xf;function Sf(){return(Sf=t((()=>{xf={},xf={buttonLabel:`Apresentar sugestões`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\xe7\xe3o`,other:()=>`${t.number(e.optionCount)} op\xe7\xf5es`})} dispon\xedvel.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Grupo introduzido ${e.groupTitle}, com ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\xe7\xe3o`,other:()=>`${t.number(e.groupCount)} op\xe7\xf5es`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, selecionado`,other:``},e.isSelected)}`,listboxLabel:`Sugestões`,selectedAnnouncement:e=>`${e.optionText}, selecionado`}})))()}var Cf;function wf(){return(wf=t((()=>{Cf={},Cf={buttonLabel:`Afișare sugestii`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\u{21B}iune`,other:()=>`${t.number(e.optionCount)} op\u{21B}iuni`})} disponibile.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Grup ${e.groupTitle} introdus, cu ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\u{21B}iune`,other:()=>`${t.number(e.groupCount)} op\u{21B}iuni`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, selectat`,other:``},e.isSelected)}`,listboxLabel:`Sugestii`,selectedAnnouncement:e=>`${e.optionText}, selectat`}})))()}var Tf;function Ef(){return(Ef=t((()=>{Tf={},Tf={buttonLabel:`Показать предложения`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{432}`})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{43D}\u{430}\u{44F} \u{433}\u{440}\u{443}\u{43F}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{43C}`,other:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{430}\u{43C}\u{438}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, выбранными`,other:``},e.isSelected)}`,listboxLabel:`Предложения`,selectedAnnouncement:e=>`${e.optionText}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}`}})))()}var Df;function Of(){return(Of=t((()=>{Df={},Df={buttonLabel:`Zobraziť návrhy`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} mo\u{17E}nos\u{165}`,other:()=>`${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`})} k dispoz\xedcii.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Zadan\xe1 skupina ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} mo\u{17E}nos\u{165}ou`,other:()=>`${t.number(e.groupCount)} mo\u{17E}nos\u{165}ami`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, vybraté`,other:``},e.isSelected)}`,listboxLabel:`Návrhy`,selectedAnnouncement:e=>`${e.optionText}, vybrat\xe9`}})))()}var kf;function Af(){return(Af=t((()=>{kf={},kf={buttonLabel:`Prikaži predloge`,countAnnouncement:(e,t)=>`Na voljo je ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Vnesena skupina ${e.groupTitle}, z ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcija`,other:()=>`${t.number(e.groupCount)} opcije`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, izbrano`,other:``},e.isSelected)}`,listboxLabel:`Predlogi`,selectedAnnouncement:e=>`${e.optionText}, izbrano`}})))()}var jf;function Mf(){return(Mf=t((()=>{jf={},jf={buttonLabel:`Prikaži predloge`,countAnnouncement:(e,t)=>`Dostupno jo\u{161}: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije/a`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Unesena grupa ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcijom`,other:()=>`${t.number(e.groupCount)} optione/a`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, izabranih`,other:``},e.isSelected)}`,listboxLabel:`Predlozi`,selectedAnnouncement:e=>`${e.optionText}, izabrano`}})))()}var Nf;function Pf(){return(Pf=t((()=>{Nf={},Nf={buttonLabel:`Visa förslag`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} alternativ`,other:()=>`${t.number(e.optionCount)} alternativ`})} tillg\xe4ngliga.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Ingick i gruppen ${e.groupTitle} med ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} alternativ`,other:()=>`${t.number(e.groupCount)} alternativ`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, valda`,other:``},e.isSelected)}`,listboxLabel:`Förslag`,selectedAnnouncement:e=>`${e.optionText}, valda`}})))()}var Ff;function If(){return(If=t((()=>{Ff={},Ff={buttonLabel:`Önerileri göster`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} se\xe7enek`,other:()=>`${t.number(e.optionCount)} se\xe7enekler`})} kullan\u{131}labilir.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Girilen grup ${e.groupTitle}, ile ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} se\xe7enek`,other:()=>`${t.number(e.groupCount)} se\xe7enekler`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, seçildi`,other:``},e.isSelected)}`,listboxLabel:`Öneriler`,selectedAnnouncement:e=>`${e.optionText}, se\xe7ildi`}})))()}var Lf;function Rf(){return(Rf=t((()=>{Lf={},Lf={buttonLabel:`Показати пропозиції`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{437} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, вибрано`,other:``},e.isSelected)}`,listboxLabel:`Пропозиції`,selectedAnnouncement:e=>`${e.optionText}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`}})))()}var zf;function Bf(){return(Bf=t((()=>{zf={},zf={buttonLabel:`显示建议`,countAnnouncement:(e,t)=>`\u{6709} ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`,other:()=>`${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`})}\u{53EF}\u{7528}\u{3002}`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{8FDB}\u{5165}\u{4E86} ${e.groupTitle} \u{7EC4}\u{FF0C}\u{5176}\u{4E2D}\u{6709} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`,other:()=>`${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, 已选择`,other:``},e.isSelected)}`,listboxLabel:`建议`,selectedAnnouncement:e=>`${e.optionText}, \u{5DF2}\u{9009}\u{62E9}`}})))()}var Vf;function Hf(){return(Hf=t((()=>{Vf={},Vf={buttonLabel:`顯示建議`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{9078}\u{9805}`,other:()=>`${t.number(e.optionCount)} \u{9078}\u{9805}`})} \u{53EF}\u{7528}\u{3002}`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{8F38}\u{5165}\u{7684}\u{7FA4}\u{7D44} ${e.groupTitle}, \u{6709} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{9078}\u{9805}`,other:()=>`${t.number(e.groupCount)} \u{9078}\u{9805}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, 已選取`,other:``},e.isSelected)}`,listboxLabel:`建議`,selectedAnnouncement:e=>`${e.optionText}, \u{5DF2}\u{9078}\u{53D6}`}})))()}var Uf;function Wf(){return(Wf=t((()=>{kd(),jd(),Nd(),Fd(),Ld(),zd(),Vd(),Ud(),Gd(),qd(),Yd(),Zd(),$d(),tf(),rf(),of(),cf(),uf(),ff(),mf(),gf(),vf(),bf(),Sf(),wf(),Ef(),Of(),Af(),Mf(),Pf(),If(),Rf(),Bf(),Hf(),Uf={},Uf={"ar-AE":Od,"bg-BG":Ad,"cs-CZ":Md,"da-DK":Pd,"de-DE":Id,"el-GR":Rd,"en-US":Bd,"es-ES":Hd,"et-EE":Wd,"fi-FI":Kd,"fr-FR":Jd,"he-IL":Xd,"hr-HR":Qd,"hu-HU":ef,"it-IT":nf,"ja-JP":af,"ko-KR":sf,"lt-LT":lf,"lv-LV":df,"nb-NO":pf,"nl-NL":hf,"pl-PL":_f,"pt-BR":yf,"pt-PT":xf,"ro-RO":Cf,"ru-RU":Tf,"sk-SK":Df,"sl-SI":kf,"sr-SP":jf,"sv-SE":Nf,"tr-TR":Ff,"uk-UA":Lf,"zh-CN":zf,"zh-TW":Vf}})))()}function Gf(e){return he()?e.altKey:e.ctrlKey}function Kf(e,t){let n=`[data-key="${CSS.escape(String(t))}"]`,r=e.current?.dataset.collection;return r&&(n=`[data-collection="${CSS.escape(r)}"]${n}`),e.current?.querySelector(n)}function qf(e){let t=U();return Yf.set(e,t),t}function Jf(e){return Yf.get(e)}var Yf;function Xf(){return(Xf=t((()=>{F(),d(),Yf=new WeakMap})))()}var Zf;function Qf(){return(Qf=t((()=>{Xf(),Zf=class{constructor(e){this.ref=e}getItemRect(e){let t=this.ref.current;if(!t)return null;let n=e==null?null:Kf(this.ref,e);if(!n)return null;let r=t.getBoundingClientRect(),i=n.getBoundingClientRect();return{x:i.left-r.left-t.clientLeft+t.scrollLeft,y:i.top-r.top-t.clientTop+t.scrollTop,width:i.width,height:i.height}}getContentSize(){let e=this.ref.current;return{width:e?.scrollWidth??0,height:e?.scrollHeight??0}}getVisibleRect(){let e=this.ref.current;return{x:e?.scrollLeft??0,y:e?.scrollTop??0,width:e?.clientWidth??0,height:e?.clientHeight??0}}}})))()}var $f;function ep(){return(ep=t((()=>{Qf(),Xf(),$f=class{constructor(...e){if(e.length===1){let t=e[0];this.collection=t.collection,this.ref=t.ref,this.collator=t.collator,this.disabledKeys=t.disabledKeys||new Set,this.disabledBehavior=t.disabledBehavior||`all`,this.orientation=t.orientation||`vertical`,this.direction=t.direction,this.layout=t.layout||`stack`,this.layoutDelegate=t.layoutDelegate||new Zf(t.ref)}else this.collection=e[0],this.disabledKeys=e[1],this.ref=e[2],this.collator=e[3],this.layout=`stack`,this.orientation=`vertical`,this.disabledBehavior=`all`,this.layoutDelegate=new Zf(this.ref);this.layout===`stack`&&this.orientation===`vertical`&&(this.getKeyLeftOf=void 0,this.getKeyRightOf=void 0)}isDisabled(e){return this.disabledBehavior===`all`&&(e.props?.isDisabled||this.disabledKeys.has(e.key))&&e.props?.disabledBehavior!==`selection`}findNextNonDisabled(e,t,n=!1){let r=e;for(;r!=null;){let e=this.collection.getItem(r);if(e?.type===`item`&&(n||!this.isDisabled(e)))return r;r=t(r)}return null}getNextKey(e,t){let n=e;return n=this.collection.getKeyAfter(n),this.findNextNonDisabled(n,e=>this.collection.getKeyAfter(e),t?.includeDisabled)}getPreviousKey(e,t){let n=e;return n=this.collection.getKeyBefore(n),this.findNextNonDisabled(n,e=>this.collection.getKeyBefore(e),t?.includeDisabled)}findKey(e,t,n){let r=e,i=this.layoutDelegate.getItemRect(r);if(!i||r==null)return null;let a=i;do{if(r=t(r),r==null)break;i=this.layoutDelegate.getItemRect(r)}while(i&&n(a,i)&&r!=null);return r}isSameRow(e,t){return e.y===t.y||e.x!==t.x}isSameColumn(e,t){return e.x===t.x||e.y!==t.y}isReversed(e){let t=this.getNextKey(e),n=Kf(this.ref,e);if(t!=null){let e=Kf(this.ref,t);return!n||!e?!1:n.getBoundingClientRect().top>e.getBoundingClientRect().top}let r=this.getPreviousKey(e);if(r!=null){let e=Kf(this.ref,r);return!n||!e?!1:e.getBoundingClientRect().top>n.getBoundingClientRect().top}return!1}getKeyBelow(e,t){return this.layout===`grid`&&this.orientation===`vertical`?this.findKey(e,e=>this.getNextKey(e,t),this.isSameRow):this.orientation===`vertical`&&this.isReversed(e)?this.getPreviousKey(e,t):this.getNextKey(e,t)}getKeyAbove(e,t){return this.layout===`grid`&&this.orientation===`vertical`?this.findKey(e,e=>this.getPreviousKey(e,t),this.isSameRow):this.orientation===`vertical`&&this.isReversed(e)?this.getNextKey(e,t):this.getPreviousKey(e,t)}getNextColumn(e,t,n){return t?this.getPreviousKey(e,n):this.getNextKey(e,n)}getKeyRightOf(e,t){let n=this.direction===`ltr`?`getKeyRightOf`:`getKeyLeftOf`;return this.layoutDelegate[n]?(e=this.layoutDelegate[n](e),this.findNextNonDisabled(e,e=>this.layoutDelegate[n](e),t?.includeDisabled)):this.layout===`grid`?this.orientation===`vertical`?this.getNextColumn(e,this.direction===`rtl`,t):this.findKey(e,e=>this.getNextColumn(e,this.direction===`rtl`,t),this.isSameColumn):this.orientation===`horizontal`?this.getNextColumn(e,this.direction===`rtl`,t):null}getKeyLeftOf(e,t){let n=this.direction===`ltr`?`getKeyLeftOf`:`getKeyRightOf`;return this.layoutDelegate[n]?(e=this.layoutDelegate[n](e),this.findNextNonDisabled(e,e=>this.layoutDelegate[n](e),t?.includeDisabled)):this.layout===`grid`?this.orientation===`vertical`?this.getNextColumn(e,this.direction===`ltr`,t):this.findKey(e,e=>this.getNextColumn(e,this.direction===`ltr`,t),this.isSameColumn):this.orientation===`horizontal`?this.getNextColumn(e,this.direction===`ltr`,t):null}getFirstKey(){let e=this.collection.getFirstKey();return this.findNextNonDisabled(e,e=>this.collection.getKeyAfter(e))}getLastKey(){let e=this.collection.getLastKey();return this.findNextNonDisabled(e,e=>this.collection.getKeyBefore(e))}getKeyPageAbove(e){let t=this.ref.current,n=this.layoutDelegate.getItemRect(e);if(!n)return null;let r=this.isReversed(e);if(t&&!De(t))return this.getFirstKey();let i=e;if(this.orientation===`horizontal`){let e=Math.max(0,n.x+n.width-this.layoutDelegate.getVisibleRect().width);for(;n&&n.x>e&&i!=null;)i=this.getKeyAbove(i),n=i==null?null:this.layoutDelegate.getItemRect(i)}else{let e=this.layoutDelegate.getVisibleRect(),t=r?n.y-e.height:Math.max(0,n.y+n.height-e.height);for(;n&&n.y>t&&i!=null;)i=this.getKeyAbove(i),n=i==null?null:this.layoutDelegate.getItemRect(i)}return i??(r?this.getLastKey():this.getFirstKey())}getKeyPageBelow(e){let t=this.ref.current,n=this.layoutDelegate.getItemRect(e);if(!n)return null;let r=this.isReversed(e);if(t&&!De(t))return this.getLastKey();let i=e;if(this.orientation===`horizontal`){let e=Math.min(this.layoutDelegate.getContentSize().width,n.x-n.width+this.layoutDelegate.getVisibleRect().width);for(;n&&n.x<e&&i!=null;)i=this.getKeyBelow(i),n=i==null?null:this.layoutDelegate.getItemRect(i)}else{let e=Math.min(this.layoutDelegate.getContentSize().height,n.y-n.height+this.layoutDelegate.getVisibleRect().height);for(;n&&n.y<e&&i!=null;)i=this.getKeyBelow(i),n=i==null?null:this.layoutDelegate.getItemRect(i)}return i??(r?this.getFirstKey():this.getLastKey())}getKeyForSearch(e,t){if(!this.collator)return null;let n=this.collection,r=t||this.getFirstKey();for(;r!=null;){let t=n.getItem(r);if(!t)return null;let i=t.textValue.slice(0,e.length);if(t.textValue&&this.collator.compare(i,e)===0)return r;r=this.getNextKey(r)}return null}}})))()}var tp;function np(){return(np=t((()=>{tp={},tp={longPressMessage:`اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة`}})))()}var rp;function ip(){return(ip=t((()=>{rp={},rp={longPressMessage:`Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто`}})))()}var ap;function op(){return(op=t((()=>{ap={},ap={longPressMessage:`Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku`}})))()}var sp;function cp(){return(cp=t((()=>{sp={},sp={longPressMessage:`Langt tryk eller tryk på Alt + pil ned for at åbne menuen`}})))()}var lp;function up(){return(up=t((()=>{lp={},lp={longPressMessage:`Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen`}})))()}var dp;function fp(){return(fp=t((()=>{dp={},dp={longPressMessage:`Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού`}})))()}var pp;function mp(){return(mp=t((()=>{pp={},pp={longPressMessage:`Long press or press Alt + ArrowDown to open menu`}})))()}var hp;function gp(){return(gp=t((()=>{hp={},hp={longPressMessage:`Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú`}})))()}var _p;function vp(){return(vp=t((()=>{_p={},_p={longPressMessage:`Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool`}})))()}var yp;function bp(){return(bp=t((()=>{yp={},yp={longPressMessage:`Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli`}})))()}var xp;function Sp(){return(Sp=t((()=>{xp={},xp={longPressMessage:`Appuyez de manière prolongée ou appuyez sur Alt\xA0+\xA0Flèche vers le bas pour ouvrir le menu.`}})))()}var Cp;function wp(){return(wp=t((()=>{Cp={},Cp={longPressMessage:`לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט`}})))()}var Tp;function Ep(){return(Ep=t((()=>{Tp={},Tp={longPressMessage:`Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika`}})))()}var Dp;function Op(){return(Op=t((()=>{Dp={},Dp={longPressMessage:`Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához`}})))()}var kp;function Ap(){return(Ap=t((()=>{kp={},kp={longPressMessage:`Premi a lungo o premi Alt + Freccia giù per aprire il menu`}})))()}var jp;function Mp(){return(Mp=t((()=>{jp={},jp={longPressMessage:`長押しまたは Alt+下矢印キーでメニューを開く`}})))()}var Np;function Pp(){return(Pp=t((()=>{Np={},Np={longPressMessage:`길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기`}})))()}var Fp;function Ip(){return(Ip=t((()=>{Fp={},Fp={longPressMessage:`Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“.`}})))()}var Lp;function Rp(){return(Rp=t((()=>{Lp={},Lp={longPressMessage:`Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa`}})))()}var zp;function Bp(){return(Bp=t((()=>{zp={},zp={longPressMessage:`Langt trykk eller trykk Alt + PilNed for å åpne menyen`}})))()}var Vp;function Hp(){return(Hp=t((()=>{Vp={},Vp={longPressMessage:`Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen`}})))()}var Up;function Wp(){return(Wp=t((()=>{Up={},Up={longPressMessage:`Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu`}})))()}var Gp;function Kp(){return(Kp=t((()=>{Gp={},Gp={longPressMessage:`Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu`}})))()}var qp;function Jp(){return(Jp=t((()=>{qp={},qp={longPressMessage:`Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu`}})))()}var Yp;function Xp(){return(Xp=t((()=>{Yp={},Yp={longPressMessage:`Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul`}})))()}var Zp;function Qp(){return(Qp=t((()=>{Zp={},Zp={longPressMessage:`Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню`}})))()}var $p;function em(){return(em=t((()=>{$p={},$p={longPressMessage:`Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol`}})))()}var tm;function nm(){return(nm=t((()=>{tm={},tm={longPressMessage:`Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol`}})))()}var rm;function im(){return(im=t((()=>{rm={},rm={longPressMessage:`Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni`}})))()}var am;function om(){return(om=t((()=>{am={},am={longPressMessage:`Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn`}})))()}var sm;function cm(){return(cm=t((()=>{sm={},sm={longPressMessage:`Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın`}})))()}var lm;function um(){return(um=t((()=>{lm={},lm={longPressMessage:`Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню`}})))()}var dm;function fm(){return(fm=t((()=>{dm={},dm={longPressMessage:`长按或按 Alt + 向下方向键以打开菜单`}})))()}var pm;function mm(){return(mm=t((()=>{pm={},pm={longPressMessage:`長按或按 Alt+向下鍵以開啟功能表`}})))()}var hm;function gm(){return(gm=t((()=>{np(),ip(),op(),cp(),up(),fp(),mp(),gp(),vp(),bp(),Sp(),wp(),Ep(),Op(),Ap(),Mp(),Pp(),Ip(),Rp(),Bp(),Hp(),Wp(),Kp(),Jp(),Xp(),Qp(),em(),nm(),im(),om(),cm(),um(),fm(),mm(),hm={},hm={"ar-AE":tp,"bg-BG":rp,"cs-CZ":ap,"da-DK":sp,"de-DE":lp,"el-GR":dp,"en-US":pp,"es-ES":hp,"et-EE":_p,"fi-FI":yp,"fr-FR":xp,"he-IL":Cp,"hr-HR":Tp,"hu-HU":Dp,"it-IT":kp,"ja-JP":jp,"ko-KR":Np,"lt-LT":Fp,"lv-LV":Lp,"nb-NO":zp,"nl-NL":Vp,"pl-PL":Up,"pt-BR":Gp,"pt-PT":qp,"ro-RO":Yp,"ru-RU":Zp,"sk-SK":$p,"sl-SI":tm,"sr-SP":rm,"sv-SE":am,"tr-TR":sm,"uk-UA":lm,"zh-CN":dm,"zh-TW":pm}})))()}function _m(e){let{isDisabled:t,pointerType:n,onLongPressStart:r,onLongPressEnd:i,onLongPress:a,threshold:o=ym,accessibilityDescription:s}=e,c=(0,vm.useRef)(void 0),{addGlobalListener:l,removeAllGlobalListeners:u}=P(),d=e=>n?e.pointerType===n:e.pointerType===`mouse`||e.pointerType===`touch`,{pressProps:f}=ct({isDisabled:t,onPressStart(e){if(e.continuePropagation(),d(e)){r&&r({...e,type:`longpressstart`}),c.current=setTimeout(()=>{e.target.dispatchEvent(new PointerEvent(`pointercancel`,{bubbles:!0})),l(e.target,`click`,e=>e.preventDefault(),{once:!0}),be(e.target).activeElement!==e.target&&w(e.target),a&&a({...e,type:`longpress`}),c.current=void 0},o),e.pointerType===`touch`&&l(e.target,`contextmenu`,e=>e.preventDefault(),{once:!0});let t=k(e.target);l(t,`pointerup`,()=>{setTimeout(()=>{u()},100)},{once:!0})}},onPressEnd(e){c.current&&clearTimeout(c.current),i&&d(e)&&i({...e,type:`longpressend`})}}),p=Nc(a&&!t?s:void 0);return{longPressProps:W(f,p)}}var vm,ym;function bm(){return(bm=t((()=>{ae(),m(),O(),Lc(),ue(),yt(),vm=r(),ym=500})))()}function xm(e){let{onContextMenu:t}=e,n=(0,Sm.useRef)(!1),{longPressProps:r}=_m({onLongPressStart(){n.current=!1},onLongPress(e){n.current?n.current=!1:t?.({target:e.target,x:e.x,y:e.y})}});return t?{contextMenuProps:W(re()?r:{},{onContextMenu(e){e.stopPropagation(),e.preventDefault(),n.current=!0;let r=e.currentTarget.getBoundingClientRect();t({target:e.currentTarget,x:e.clientX-r.x,y:e.clientY-r.y})},onKeyDown(e){if(_e()&&e.ctrlKey&&e.key===`Enter`){n.current=!1;let r=e.currentTarget;e.stopPropagation(),setTimeout(()=>{if(n.current)n.current=!1;else{let e=r.getBoundingClientRect();t({target:r,x:e.width/2,y:e.height/2})}},10)}}})}:{contextMenuProps:{}}}var Sm;function Cm(){return(Cm=t((()=>{F(),O(),bm(),Sm=r()})))()}function wm(e){let{triggerRef:t,isOpen:n,onClose:r}=e;(0,Tm.useEffect)(()=>!n||r===null?void 0:g(ye(t.current),`scroll`,e=>{let n=Se(e);if(!t.current||n instanceof Node&&!ne(n,t.current)||n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement)return;let i=r||Em.get(t.current);i&&i()},!0),[n,r,t])}var Tm,Em;function Dm(){return(Dm=t((()=>{m(),L(),Tm=r(),Em=new WeakMap})))()}function Om(e,t,n){let{type:r}=e,{isOpen:i}=t;(0,km.useEffect)(()=>{n&&n.current&&Em.set(n.current,t.close)});let a;r===`menu`?a=!0:r===`listbox`&&(a=`listbox`);let o=U();return{triggerProps:{"aria-haspopup":a,"aria-expanded":i,"aria-controls":i?o:void 0,onPress:t.toggle},overlayProps:{id:o}}}var km;function Am(){return(Am=t((()=>{Dm(),d(),km=r()})))()}function jm(e){return e&&e.__esModule?e.default:e}function Mm(e,t,n){let{type:r=`menu`,isDisabled:i,trigger:a=`press`}=e,o=U(),{triggerProps:s,overlayProps:c}=Om({type:r},t,n),l=(e,n,r=`first`)=>{if(!e||n.isDefaultPrevented())return!1;t.toggle(r)},{keyboardProps:u}=I({isDisabled:i,shortcuts:{Enter:e=>l(a!==`longPress`,e,`first`)," ":e=>l(a!==`longPress`,e,`first`),ArrowDown:e=>l(a!==`longPress`,e,`first`),ArrowUp:e=>l(a!==`longPress`,e,`last`),"Alt+Enter":e=>l(a===`longPress`,e,`first`),"Alt+ ":e=>l(a===`longPress`,e,`first`),"Alt+ArrowDown":e=>l(!0,e,`first`),"Alt+ArrowUp":e=>l(!0,e,`last`)}}),d=Te(jm(hm),`@react-aria/menu`),{longPressProps:f}=_m({isDisabled:i||a!==`longPress`,accessibilityDescription:d.format(`longPressMessage`),onLongPressStart(){t.close()},onLongPress(){t.open(`first`)}}),p={preventFocusOnPress:!0,onPressStart(e){e.pointerType!==`touch`&&e.pointerType!==`keyboard`&&!i&&(w(e.target),t.open(e.pointerType===`virtual`?`first`:null))},onPress(e){e.pointerType===`touch`&&!i&&(w(e.target),t.toggle())}};delete s.onPress;let{contextMenuProps:m}=xm({onContextMenu(e){let n=e.target.getBoundingClientRect();t.setPoint({x:n.x+e.x,y:n.y+e.y}),t.open()}});(0,Nm.useEffect)(()=>{if(t.isOpen&&a===`contextMenu`){let e=e=>{(e.button===2||e.button===0&&e.ctrlKey===!0)&&Se(e)===document.body&&t.close()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)}},[t,a]);let h;if(a===`press`)h={...p,...u};else if(a===`longPress`)h={...f,...u};else if(a===`contextMenu`){h=m;let{"aria-haspopup":e,"aria-expanded":t,"aria-controls":n,...r}=s;s=r}return{menuTriggerProps:{...s,...h,id:o},menuProps:{...c,"aria-labelledby":o,autoFocus:t.focusStrategy||!0,onClose:t.close}}}var Nm;function Pm(){return(Pm=t((()=>{ae(),L(),gm(),Cm(),d(),xe(),Je(),bm(),Am(),Nm=r()})))()}function Fm(e){let{keyboardDelegate:t,selectionManager:n,onTypeSelect:r}=e,i=(0,Lm.useRef)({search:``,timeout:void 0});return(0,Lm.useEffect)(()=>{let e=i.current.timeout;return()=>{clearTimeout(e)}},[i]),{typeSelectProps:{onKeyDownCapture:t.getKeyForSearch?e=>{if(i.current.search.length>0&&e.key===` `){if(e.preventDefault(),(!(`continuePropagation`in e)||`continuePropagation`in e&&!e.isPropagationStopped())&&e.stopPropagation(),i.current.search+=` `,t.getKeyForSearch!=null){let e=t.getKeyForSearch(i.current.search,n.focusedKey);e??=t.getKeyForSearch(i.current.search),e!=null&&(n.setFocusedKey(e),r&&r(e))}clearTimeout(i.current.timeout),i.current.timeout=setTimeout(()=>{i.current.search=``},Rm)}}:void 0,onKeyDown:t.getKeyForSearch?e=>{let a=Im(e.key);if(!(!a||e.ctrlKey||e.metaKey||e.altKey||!ne(e.currentTarget,Se(e))||i.current.search.length===0&&a===` `)){if(i.current.search+=a,t.getKeyForSearch!=null){let a=t.getKeyForSearch(i.current.search,n.focusedKey);if(a??=t.getKeyForSearch(i.current.search),a!=null)n.setFocusedKey(a),r&&r(a),e.preventDefault(),`continuePropagation`in e||e.stopPropagation();else{i.current.search=``,clearTimeout(i.current.timeout),i.current.timeout=void 0;return}}clearTimeout(i.current.timeout),i.current.timeout=setTimeout(()=>{i.current.search=``},Rm)}}:void 0}}}function Im(e){return e.length===1||!/^[A-Z]/i.test(e)?e:``}var Lm,Rm;function zm(){return(zm=t((()=>{L(),Lm=r(),Rm=1e3})))()}function Bm(e,t){let n=(0,Vm.useRef)(!0),r=(0,Vm.useRef)(null);ve(()=>(n.current=!0,()=>{n.current=!1}),[]),ve(()=>{n.current?n.current=!1:(!r.current||t.some((e,t)=>!Object.is(e,r[t])))&&e(),r.current=t},t)}var Vm;function Hm(){return(Hm=t((()=>{z(),Vm=r()})))()}function Um(e){let{selectionManager:t,keyboardDelegate:n,ref:r,autoFocus:i=!1,shouldFocusWrap:a=!1,disallowEmptySelection:o=!1,disallowSelectAll:s=!1,escapeKeyBehavior:c=`clearSelection`,selectOnFocus:l=t.selectionBehavior===`replace`,disallowTypeAhead:u=!1,shouldUseVirtualFocus:d,allowsTabNavigation:f=!1,scrollRef:p=r,linkBehavior:m=`action`,UNSTABLE_focusOnEntry:h}=e,{direction:g}=je(),_=y(),v=(e,n,i)=>{if(n!=null){if(t.isLink(n)&&m===`selection`&&l&&!Gf(e)){(0,Wm.flushSync)(()=>{t.setFocusedKey(n,i)});let a=Kf(r,n),o=t.getItemProps(n);if(a){_.open(a,e,o.href,o.routerOptions);return}return!1}if(t.setFocusedKey(n,i),t.isLink(n)&&m===`override`)return!1;if(e.shiftKey&&t.selectionMode===`multiple`){t.extendSelection(n);return}if(l&&!Gf(e)){t.replaceSelection(n);return}}return!1},b=e=>{if(n.getKeyBelow){let r=t.focusedKey==null?n.getFirstKey?.():n.getKeyBelow?.(t.focusedKey);if(r==null&&a&&(r=n.getFirstKey?.(t.focusedKey)),r!=null){v(e,r);return}}return!1},C=e=>{if(n.getKeyAbove){let r=t.focusedKey==null?n.getLastKey?.():n.getKeyAbove?.(t.focusedKey);if(r==null&&a&&(r=n.getLastKey?.(t.focusedKey)),r!=null){v(e,r);return}}return!1},T=e=>{if(n.getFirstKey){if(t.focusedKey===null&&e.shiftKey)return!1;let r=n.getFirstKey(t.focusedKey,Ee(e));if(t.setFocusedKey(r),r!=null){if(Ee(e)&&e.shiftKey&&t.selectionMode===`multiple`){t.extendSelection(r);return}if(l){t.replaceSelection(r);return}}}return!1},E=e=>{if(n.getKeyLeftOf){let r=t.focusedKey==null?n.getFirstKey?.():n.getKeyLeftOf?.(t.focusedKey);if(r==null&&a&&(r=g===`rtl`?n.getFirstKey?.(t.focusedKey):n.getLastKey?.(t.focusedKey)),r!=null){v(e,r,g===`rtl`?`first`:`last`);return}}return!1},D=e=>{if(n.getKeyRightOf){let r=t.focusedKey==null?n.getFirstKey?.():n.getKeyRightOf?.(t.focusedKey);if(r==null&&a&&(r=g===`rtl`?n.getLastKey?.(t.focusedKey):n.getFirstKey?.(t.focusedKey)),r!=null){v(e,r,g===`rtl`?`last`:`first`);return}}return!1},O=e=>{if(n.getLastKey){if(t.focusedKey===null&&e.shiftKey)return!1;let r=n.getLastKey(t.focusedKey,Ee(e));if(t.setFocusedKey(r),r!=null){if(Ee(e)&&e.shiftKey&&t.selectionMode===`multiple`){t.extendSelection(r);return}if(l){t.replaceSelection(r);return}}}return!1},k=e=>{if(n.getKeyPageBelow&&t.focusedKey!=null){let r=n.getKeyPageBelow(t.focusedKey);if(r!=null)return v(e,r)}return!1},A=e=>{if(n.getKeyPageAbove&&t.focusedKey!=null){let r=n.getKeyPageAbove(t.focusedKey);if(r!=null)return v(e,r)}return!1},j=()=>{if(t.selectionMode===`multiple`&&s!==!0){t.selectAll();return}return!1},M=()=>{if(c===`clearSelection`&&!o&&t.selectedKeys.size!==0){t.clearSelection();return}return!1},P=()=>{if(!f&&r.current){let e=ke(r.current,{tabbable:!0}),t,n;do n=e.lastChild(),n&&(t=n);while(n);let i=N();t&&(!ee(t)||i&&!fe(i))&&w(t)}return{shouldContinuePropagation:!0,shouldPreventDefault:!1}},F=()=>(!f&&r.current&&r.current.focus(),{shouldContinuePropagation:!0,shouldPreventDefault:!1}),L=(e,t)=>({[_e()?e+`+Shift+Alt`:e+`+Shift+Control`]:t,[e+`+Shift`]:t,[_e()?e+`+Alt`:e+`+Control`]:t,[e]:t}),{keyboardProps:R}=I({shortcuts:{...L(`ArrowDown`,b),...L(`ArrowUp`,C),...L(`ArrowLeft`,E),...L(`ArrowRight`,D),...L(`PageDown`,k),...L(`PageUp`,A)},allowRepeats:!0}),{keyboardProps:z}=I({shortcuts:{...L(`Home`,T),...L(`End`,O),"Mod+A":j,Escape:M,Tab:P,"Tab+Shift":F}}),B=(0,Gm.useRef)({top:0,left:0});ir(p,`scroll`,()=>{B.current={top:p.current?.scrollTop??0,left:p.current?.scrollLeft??0}});let V=e=>{if(t.isFocused){ne(e.currentTarget,Se(e))||t.setFocused(!1);return}if(!ne(e.currentTarget,Se(e)))return;let i=x();t.setFocused(!0);let a=e=>{e!=null&&(t.setFocusedKey(e),l&&!t.isSelected(e)&&t.replaceSelection(e))};if(h&&(i===`keyboard`||i===`virtual`))a(h===`first`?n.getFirstKey?.():n.getLastKey?.());else if(t.focusedKey==null){let r=e.relatedTarget;r&&e.currentTarget.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_FOLLOWING?a(t.lastSelectedKey??n.getLastKey?.()):a(t.firstSelectedKey??n.getFirstKey?.())}else p.current&&(p.current.scrollTop=B.current.top,p.current.scrollLeft=B.current.left);if(t.focusedKey!=null&&p.current){let e=Kf(r,t.focusedKey);e instanceof HTMLElement&&(!ee(e)&&!d&&w(e),(i===`keyboard`||h&&i===`virtual`)&&jc(e,{containingElement:r.current}))}},te=e=>{ne(e.currentTarget,e.relatedTarget)||t.setFocused(!1)},H=(0,Gm.useRef)(!1);ir(r,Pt,d?e=>{let{detail:n}=e;e.stopPropagation(),t.setFocused(!0),n?.focusStrategy===`first`&&(H.current=!0)}:void 0);let re=n.getFirstKey?.()??null;Bm(()=>{if(H.current){if(re==null){let e=N();It(r.current),Rt(e,null),t.collection.size>0&&(H.current=!1)}else t.setFocusedKey(re),H.current=!1}},[re,t.collection.size]),Bm(()=>{t.collection.size>0&&(H.current=!1)},[t.focusedKey]),ir(r,Nt,d?e=>{e.stopPropagation(),t.setFocused(!1),e.detail?.clearFocusKey&&t.setFocusedKey(null)}:void 0);let ie=(0,Gm.useRef)(i),U=(0,Gm.useRef)(!1);(0,Gm.useEffect)(()=>{if(ie.current){let e=null;i===`first`&&(e=n.getFirstKey?.()??null),i===`last`&&(e=n.getLastKey?.()??null);let a=t.selectedKeys;if(a.size){for(let n of a)if(t.canSelectItem(n)){e=n;break}}t.setFocused(!0),t.setFocusedKey(e),e==null&&!d&&r.current&&S(r.current),t.collection.size>0&&(ie.current=!1,U.current=!0)}});let ae=(0,Gm.useRef)(t.focusedKey),oe=(0,Gm.useRef)(null);(0,Gm.useEffect)(()=>{if(t.isFocused&&t.focusedKey!=null&&(t.focusedKey!==ae.current||U.current)&&p.current&&r.current){let e=x(),n=Kf(r,t.focusedKey);if(!(n instanceof HTMLElement))return;(e===`keyboard`||U.current)&&(oe.current&&cancelAnimationFrame(oe.current),oe.current=requestAnimationFrame(()=>{p.current&&(Ac(p.current,n),e!==`virtual`&&jc(n,{containingElement:r.current}))}))}!d&&t.isFocused&&t.focusedKey==null&&ae.current!=null&&r.current&&S(r.current),ae.current=t.focusedKey,U.current=!1}),(0,Gm.useEffect)(()=>()=>{oe.current&&cancelAnimationFrame(oe.current)},[]),ir(r,`react-aria-focus-scope-restore`,e=>{e.preventDefault(),t.setFocused(!0)});let se={...W(z,R),onFocus:V,onBlur:te,onMouseDown(e){p.current===Se(e)&&e.preventDefault()}},{typeSelectProps:ce}=Fm({keyboardDelegate:n,selectionManager:t});u||(se=W(ce,se));let le;d||(le=t.focusedKey==null?0:-1);let ue=qf(t.collection);return{collectionProps:W(se,{tabIndex:le,"data-collection":ue})}}var Wm,Gm;function Km(){return(Km=t((()=>{Ft(),Bt(),T(),ae(),L(),Fe(),v(),Xf(),Be(),F(),se(),O(),Mc(),or(),xe(),Me(),j(),zm(),Hm(),Wm=we(),Gm=r()})))()}function qm(e,t){return typeof t.getChildren==`function`?t.getChildren(e.key):e.childNodes}function Jm(e){return Ym(e,0)}function Ym(e,t){if(t<0)return;let n=0;for(let r of e){if(n===t)return r;n++}}function Xm(e,t,n){if(t.parentKey===n.parentKey)return t.index-n.index;let r=[...Zm(e,t),t],i=[...Zm(e,n),n],a=r.slice(0,i.length).findIndex((e,t)=>e!==i[t]);return a===-1?r.findIndex(e=>e===n)>=0?1:(i.findIndex(e=>e===t),-1):(t=r[a],n=i[a],t.index-n.index)}function Zm(e,t){let n=[],r=t;for(;r?.parentKey!=null;)r=e.getItem(r.parentKey),r&&n.unshift(r);return n}function Qm(e){let t=$m.get(e);if(t!=null)return t;let n=0,r=t=>{for(let i of t)i.type===`section`?r(qm(i,e)):i.type===`item`&&n++};return r(e),$m.set(e,n),n}var $m;function eh(){return(eh=t((()=>{$m=new WeakMap})))()}function th(e){return e&&e.__esModule?e.default:e}function nh(e,t){let{buttonRef:n,popoverRef:r,inputRef:i,listBoxRef:a,keyboardDelegate:o,layoutDelegate:s,shouldFocusWrap:c,isReadOnly:l,isDisabled:u}=e,d=(0,ih.useRef)(null);n??=d;let f=Te(th(Uf),`@react-aria/combobox`),{menuTriggerProps:p,menuProps:m}=Mm({type:`listbox`,isDisabled:u||l},t,n);Ed.set(t,{id:m.id});let{collection:h}=t,{disabledKeys:g}=t.selectionManager,_=(0,ih.useMemo)(()=>o||new $f({collection:h,disabledKeys:g,ref:a,layoutDelegate:s}),[o,s,h,g,a]),{collectionProps:v}=Um({selectionManager:t.selectionManager,keyboardDelegate:_,disallowTypeAhead:!0,disallowEmptySelection:!0,shouldFocusWrap:c,ref:i,isVirtualized:!0}),b=y(),{keyboardProps:x}=I({shortcuts:{Enter:e=>{let n=t.isOpen;if(t.isOpen&&a.current&&t.selectionManager.focusedKey!=null){let r=t.collection.getItem(t.selectionManager.focusedKey);if(r?.props.href){let i=a.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);return i instanceof HTMLAnchorElement&&b.open(i,e,r.props.href,r.props.routerOptions),t.close(),{shouldPreventDefault:n}}if(r?.props.onAction)return r.props.onAction(),t.close(),{shouldPreventDefault:n}}return t.commit(),{shouldPreventDefault:n}},Tab:()=>{if(t.isOpen&&a.current&&t.selectionManager.focusedKey!=null){let e=t.collection.getItem(t.selectionManager.focusedKey);if(e?.props.href)return t.close(),{shouldPreventDefault:!1};if(e?.props.onAction)return e.props.onAction(),t.close(),{shouldPreventDefault:!1,shouldContinuePropagation:!0}}return t.isOpen&&t.commit(),{shouldPreventDefault:!1,shouldContinuePropagation:!0}},Escape:()=>{let n=!1;return(!t.selectionManager.isEmpty||t.inputValue===``||e.allowsCustomValue)&&(n=!0),t.revert(),{shouldContinuePropagation:n}}}}),{keyboardProps:S}=I({shortcuts:{ArrowDown:()=>(t.open(`first`,`manual`),{shouldPreventDefault:!1}),ArrowUp:()=>(t.open(`last`,`manual`),{shouldPreventDefault:!1}),ArrowLeft:()=>(t.selectionManager.setFocusedKey(null),{shouldPreventDefault:!1}),ArrowRight:()=>(t.selectionManager.setFocusedKey(null),{shouldPreventDefault:!1})},allowRepeats:!0}),C=i=>{let a=n?.current&&n.current===i.relatedTarget,o=ne(r.current,i.relatedTarget);a||o||(e.onBlur&&e.onBlur(i),t.setFocused(!1))},w=n=>{t.isFocused||(e.onFocus&&e.onFocus(n),t.setFocused(!0))},T=rh([t.selectionManager.selectedKeys,t.selectionManager.selectionMode]),{isInvalid:D,validationErrors:O,validationDetails:k}=t.displayValidation,{labelProps:A,inputProps:j,descriptionProps:M,errorMessageProps:P}=Zl({...e,isRequired:e.selectionMode===`multiple`?e.isRequired&&t.selectionManager.isEmpty:e.isRequired,onChange:t.setInputValue,onKeyDown:l?e.onKeyDown:ie(t.isOpen&&v.onKeyDown,x.onKeyDown,S.onKeyDown,e.onKeyDown),onBlur:C,value:t.inputValue,defaultValue:t.defaultInputValue,onFocus:w,autoComplete:`off`,validate:void 0,[hl]:t,"aria-describedby":[T,e[`aria-describedby`]].filter(Boolean).join(` `)||void 0},i);Gc(i,t.defaultValue,t.setValue);let F=e=>{e.pointerType===`touch`&&(i.current?.focus(),t.toggle(null,`manual`))},L=e=>{e.pointerType!==`touch`&&(i.current?.focus(),t.toggle(e.pointerType===`keyboard`||e.pointerType===`virtual`?`first`:null,`manual`))},R=Le({id:p.id,"aria-label":f.format(`buttonLabel`),"aria-labelledby":e[`aria-labelledby`]||A.id}),z=Le({id:m.id,"aria-label":f.format(`listboxLabel`),"aria-labelledby":e[`aria-labelledby`]||A.id}),B=(0,ih.useRef)(0),V=e=>{if(u||l)return;if(e.timeStamp-B.current<500){e.preventDefault(),i.current?.focus();return}let n=Se(e).getBoundingClientRect(),r=e.changedTouches[0],a=Math.ceil(n.left+.5*n.width),o=Math.ceil(n.top+.5*n.height);r.clientX===a&&r.clientY===o&&(e.preventDefault(),i.current?.focus(),t.toggle(null,`manual`),B.current=e.timeStamp)},ee=t.selectionManager.focusedKey!=null&&t.isOpen?t.collection.getItem(t.selectionManager.focusedKey):void 0,te=ee?.parentKey??null,H=t.selectionManager.focusedKey??null,re=(0,ih.useRef)(te),U=(0,ih.useRef)(H);(0,ih.useEffect)(()=>{if(he()&&ee!=null&&H!=null&&H!==U.current){let e=t.selectionManager.isSelected(H),n=te==null?null:t.collection.getItem(te),r=n?.[`aria-label`]||(typeof n?.rendered==`string`?n.rendered:``)||``;K(f.format(`focusAnnouncement`,{isGroupChange:(n&&te!==re.current)??!1,groupTitle:r,groupCount:n?[...qm(n,t.collection)].length:0,optionText:ee[`aria-label`]||ee.textValue||``,isSelected:e}))}re.current=te,U.current=H});let ae=Qm(t.collection),oe=(0,ih.useRef)(ae),se=(0,ih.useRef)(t.isOpen);(0,ih.useEffect)(()=>{let e=t.isOpen!==se.current&&(t.selectionManager.focusedKey==null||he());t.isOpen&&(e||ae!==oe.current)&&K(f.format(`countAnnouncement`,{optionCount:ae})),oe.current=ae,se.current=t.isOpen});let ce=(0,ih.useRef)(t.selectedKey);return(0,ih.useEffect)(()=>{if(he()&&t.isFocused&&t.selectedItem&&t.selectedKey!==ce.current){let e=t.selectedItem[`aria-label`]||t.selectedItem.textValue||``;K(f.format(`selectedAnnouncement`,{optionText:e}))}ce.current=t.selectedKey}),(0,ih.useEffect)(()=>{if(t.isOpen)return Ve([i.current,r.current].filter(e=>e!=null))},[t.isOpen,i,r]),yc(()=>{!ee&&i.current&&N(be(i.current))===i.current&&Rt(i.current,null)},[ee]),ir(a,`react-aria-item-action`,t.isOpen?()=>{t.close()}:void 0),{labelProps:{...A,onClick:`htmlFor`in A&&A.htmlFor||e.isDisabled?void 0:()=>{i.current?.focus(),E(`keyboard`)}},buttonProps:{...p,...R,excludeFromTabOrder:!0,preventFocusOnPress:!0,onPress:F,onPressStart:L,isDisabled:u||l},inputProps:W(j,{role:`combobox`,"aria-expanded":p[`aria-expanded`],"aria-controls":t.isOpen?m.id:void 0,"aria-autocomplete":`list`,"aria-activedescendant":ee?Td(t,ee.key):void 0,onTouchEnd:V,autoCorrect:`off`,spellCheck:`false`}),listBoxProps:W(m,z,{onAction:void 0,autoFocus:t.focusStrategy||!0,shouldUseVirtualFocus:!0,shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,linkBehavior:`selection`,UNSTABLE_itemBehavior:`action`}),valueProps:{id:T},descriptionProps:M,errorMessageProps:P,isInvalid:D,validationErrors:O,validationDetails:k}}function rh(e=[]){let t=U(),[n,r]=(0,ih.useState)(!0),[i,a]=(0,ih.useState)(e);return i.some((t,n)=>!Object.is(t,e[n]))&&(r(!0),a(e)),(0,ih.useEffect)(()=>{n&&!document.getElementById(t)&&r(!1)},[t,n,i]),n?t:void 0}var ih;function ah(){return(ah=t((()=>{_r(),it(),Bt(),L(),Dd(),m(),Wf(),F(),ep(),O(),v(),or(),qc(),d(),xe(),st(),Je(),Pm(),j(),Km(),$l(),xc(),ih=r(),eh(),gl()})))()}var oh;function sh(){return(sh=t((()=>{oh={},oh={calendar:`التقويم`,day:`يوم`,dayPeriod:`ص/م`,endDate:`تاريخ الانتهاء`,era:`العصر`,hour:`الساعات`,minute:`الدقائق`,month:`الشهر`,second:`الثواني`,selectedDateDescription:e=>`\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${e.date}`,selectedRangeDescription:e=>`\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.startDate} \u{625}\u{644}\u{649} ${e.endDate}`,selectedTimeDescription:e=>`\u{627}\u{644}\u{648}\u{642}\u{62A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.time}`,startDate:`تاريخ البدء`,timeZoneName:`التوقيت`,weekday:`اليوم`,year:`السنة`}})))()}var ch;function lh(){return(lh=t((()=>{ch={},ch={calendar:`Календар`,day:`ден`,dayPeriod:`пр.об./сл.об.`,endDate:`Крайна дата`,era:`ера`,hour:`час`,minute:`минута`,month:`месец`,second:`секунда`,selectedDateDescription:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.startDate} \u{434}\u{43E} ${e.endDate}`,selectedTimeDescription:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{432}\u{440}\u{435}\u{43C}\u{435}: ${e.time}`,startDate:`Начална дата`,timeZoneName:`часова зона`,weekday:`ден от седмицата`,year:`година`}})))()}var uh;function dh(){return(dh=t((()=>{uh={},uh={calendar:`Kalendář`,day:`den`,dayPeriod:`část dne`,endDate:`Konečné datum`,era:`letopočet`,hour:`hodina`,minute:`minuta`,month:`měsíc`,second:`sekunda`,selectedDateDescription:e=>`Vybran\xe9 datum: ${e.date}`,selectedRangeDescription:e=>`Vybran\xe9 obdob\xed: ${e.startDate} a\u{17E} ${e.endDate}`,selectedTimeDescription:e=>`Vybran\xfd \u{10D}as: ${e.time}`,startDate:`Počáteční datum`,timeZoneName:`časové pásmo`,weekday:`den v týdnu`,year:`rok`}})))()}var fh;function ph(){return(ph=t((()=>{fh={},fh={calendar:`Kalender`,day:`dag`,dayPeriod:`AM/PM`,endDate:`Slutdato`,era:`æra`,hour:`time`,minute:`minut`,month:`måned`,second:`sekund`,selectedDateDescription:e=>`Valgt dato: ${e.date}`,selectedRangeDescription:e=>`Valgt interval: ${e.startDate} til ${e.endDate}`,selectedTimeDescription:e=>`Valgt tidspunkt: ${e.time}`,startDate:`Startdato`,timeZoneName:`tidszone`,weekday:`ugedag`,year:`år`}})))()}var mh;function hh(){return(hh=t((()=>{mh={},mh={calendar:`Kalender`,day:`Tag`,dayPeriod:`Tageshälfte`,endDate:`Enddatum`,era:`Epoche`,hour:`Stunde`,minute:`Minute`,month:`Monat`,second:`Sekunde`,selectedDateDescription:e=>`Ausgew\xe4hltes Datum: ${e.date}`,selectedRangeDescription:e=>`Ausgew\xe4hlter Bereich: ${e.startDate} bis ${e.endDate}`,selectedTimeDescription:e=>`Ausgew\xe4hlte Zeit: ${e.time}`,startDate:`Startdatum`,timeZoneName:`Zeitzone`,weekday:`Wochentag`,year:`Jahr`}})))()}var gh;function _h(){return(_h=t((()=>{gh={},gh={calendar:`Ημερολόγιο`,day:`ημέρα`,dayPeriod:`π.μ./μ.μ.`,endDate:`Ημερομηνία λήξης`,era:`περίοδος`,hour:`ώρα`,minute:`λεπτό`,month:`μήνας`,second:`δευτερόλεπτο`,selectedDateDescription:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${e.date}`,selectedRangeDescription:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${e.startDate} \u{3AD}\u{3C9}\u{3C2} ${e.endDate}`,selectedTimeDescription:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3CE}\u{3C1}\u{3B1}: ${e.time}`,startDate:`Ημερομηνία έναρξης`,timeZoneName:`ζώνη ώρας`,weekday:`καθημερινή`,year:`έτος`}})))()}var vh;function yh(){return(yh=t((()=>{vh={},vh={era:`era`,year:`year`,month:`month`,day:`day`,hour:`hour`,minute:`minute`,second:`second`,dayPeriod:`AM/PM`,calendar:`Calendar`,startDate:`Start Date`,endDate:`End Date`,weekday:`day of the week`,timeZoneName:`time zone`,selectedDateDescription:e=>`Selected Date: ${e.date}`,selectedRangeDescription:e=>`Selected Range: ${e.startDate} to ${e.endDate}`,selectedTimeDescription:e=>`Selected Time: ${e.time}`}})))()}var bh;function xh(){return(xh=t((()=>{bh={},bh={calendar:`Calendario`,day:`día`,dayPeriod:`a.\xA0m./p.\xA0m.`,endDate:`Fecha final`,era:`era`,hour:`hora`,minute:`minuto`,month:`mes`,second:`segundo`,selectedDateDescription:e=>`Fecha seleccionada: ${e.date}`,selectedRangeDescription:e=>`Rango seleccionado: ${e.startDate} a ${e.endDate}`,selectedTimeDescription:e=>`Hora seleccionada: ${e.time}`,startDate:`Fecha de inicio`,timeZoneName:`zona horaria`,weekday:`día de la semana`,year:`año`}})))()}var Sh;function Ch(){return(Ch=t((()=>{Sh={},Sh={calendar:`Kalender`,day:`päev`,dayPeriod:`enne/pärast lõunat`,endDate:`Lõppkuupäev`,era:`ajastu`,hour:`tund`,minute:`minut`,month:`kuu`,second:`sekund`,selectedDateDescription:e=>`Valitud kuup\xe4ev: ${e.date}`,selectedRangeDescription:e=>`Valitud vahemik: ${e.startDate} kuni ${e.endDate}`,selectedTimeDescription:e=>`Valitud aeg: ${e.time}`,startDate:`Alguskuupäev`,timeZoneName:`ajavöönd`,weekday:`nädalapäev`,year:`aasta`}})))()}var wh;function Th(){return(Th=t((()=>{wh={},wh={calendar:`Kalenteri`,day:`päivä`,dayPeriod:`vuorokaudenaika`,endDate:`Päättymispäivä`,era:`aikakausi`,hour:`tunti`,minute:`minuutti`,month:`kuukausi`,second:`sekunti`,selectedDateDescription:e=>`Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,selectedRangeDescription:e=>`Valittu aikav\xe4li: ${e.startDate} \u{2013} ${e.endDate}`,selectedTimeDescription:e=>`Valittu aika: ${e.time}`,startDate:`Alkamispäivä`,timeZoneName:`aikavyöhyke`,weekday:`viikonpäivä`,year:`vuosi`}})))()}var Eh;function Dh(){return(Dh=t((()=>{Eh={},Eh={calendar:`Calendrier`,day:`jour`,dayPeriod:`cadran`,endDate:`Date de fin`,era:`ère`,hour:`heure`,minute:`minute`,month:`mois`,second:`seconde`,selectedDateDescription:e=>`Date s\xe9lectionn\xe9e\xa0: ${e.date}`,selectedRangeDescription:e=>`Plage s\xe9lectionn\xe9e\xa0: ${e.startDate} au ${e.endDate}`,selectedTimeDescription:e=>`Heure choisie\xa0: ${e.time}`,startDate:`Date de début`,timeZoneName:`fuseau horaire`,weekday:`jour de la semaine`,year:`année`}})))()}var Oh;function kh(){return(kh=t((()=>{Oh={},Oh={calendar:`לוח שנה`,day:`יום`,dayPeriod:`לפנה״צ/אחה״צ`,endDate:`תאריך סיום`,era:`תקופה`,hour:`שעה`,minute:`דקה`,month:`חודש`,second:`שנייה`,selectedDateDescription:e=>`\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.date}`,selectedRangeDescription:e=>`\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.startDate} \u{5E2}\u{5D3} ${e.endDate}`,selectedTimeDescription:e=>`\u{5D6}\u{5DE}\u{5DF} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.time}`,startDate:`תאריך התחלה`,timeZoneName:`אזור זמן`,weekday:`יום בשבוע`,year:`שנה`}})))()}var Ah;function jh(){return(jh=t((()=>{Ah={},Ah={calendar:`Kalendar`,day:`dan`,dayPeriod:`AM/PM`,endDate:`Datum završetka`,era:`era`,hour:`sat`,minute:`minuta`,month:`mjesec`,second:`sekunda`,selectedDateDescription:e=>`Odabrani datum: ${e.date}`,selectedRangeDescription:e=>`Odabrani raspon: ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Odabrano vrijeme: ${e.time}`,startDate:`Datum početka`,timeZoneName:`vremenska zona`,weekday:`dan u tjednu`,year:`godina`}})))()}var Mh;function Nh(){return(Nh=t((()=>{Mh={},Mh={calendar:`Naptár`,day:`nap`,dayPeriod:`napszak`,endDate:`Befejező dátum`,era:`éra`,hour:`óra`,minute:`perc`,month:`hónap`,second:`másodperc`,selectedDateDescription:e=>`Kijel\xf6lt d\xe1tum: ${e.date}`,selectedRangeDescription:e=>`Kijel\xf6lt tartom\xe1ny: ${e.startDate}\u{2013}${e.endDate}`,selectedTimeDescription:e=>`Kijel\xf6lt id\u{151}: ${e.time}`,startDate:`Kezdő dátum`,timeZoneName:`időzóna`,weekday:`hét napja`,year:`év`}})))()}var Ph;function Fh(){return(Fh=t((()=>{Ph={},Ph={calendar:`Calendario`,day:`giorno`,dayPeriod:`AM/PM`,endDate:`Data finale`,era:`era`,hour:`ora`,minute:`minuto`,month:`mese`,second:`secondo`,selectedDateDescription:e=>`Data selezionata: ${e.date}`,selectedRangeDescription:e=>`Intervallo selezionato: da ${e.startDate} a ${e.endDate}`,selectedTimeDescription:e=>`Ora selezionata: ${e.time}`,startDate:`Data iniziale`,timeZoneName:`fuso orario`,weekday:`giorno della settimana`,year:`anno`}})))()}var Ih;function Lh(){return(Lh=t((()=>{Ih={},Ih={calendar:`カレンダー`,day:`日`,dayPeriod:`午前/午後`,endDate:`終了日`,era:`時代`,hour:`時`,minute:`分`,month:`月`,second:`秒`,selectedDateDescription:e=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${e.date}`,selectedRangeDescription:e=>`\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${e.startDate} \u{304B}\u{3089} ${e.endDate}`,selectedTimeDescription:e=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{6642}\u{9593} : ${e.time}`,startDate:`開始日`,timeZoneName:`タイムゾーン`,weekday:`曜日`,year:`年`}})))()}var Rh;function zh(){return(zh=t((()=>{Rh={},Rh={calendar:`달력`,day:`일`,dayPeriod:`오전/오후`,endDate:`종료일`,era:`연호`,hour:`시`,minute:`분`,month:`월`,second:`초`,selectedDateDescription:e=>`\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${e.date}`,selectedRangeDescription:e=>`\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${e.startDate} ~ ${e.endDate}`,selectedTimeDescription:e=>`\u{C120}\u{D0DD} \u{C2DC}\u{AC04}: ${e.time}`,startDate:`시작일`,timeZoneName:`시간대`,weekday:`요일`,year:`년`}})))()}var Bh;function Vh(){return(Vh=t((()=>{Bh={},Bh={calendar:`Kalendorius`,day:`diena`,dayPeriod:`iki pietų / po pietų`,endDate:`Pabaigos data`,era:`era`,hour:`valanda`,minute:`minutė`,month:`mėnuo`,second:`sekundė`,selectedDateDescription:e=>`Pasirinkta data: ${e.date}`,selectedRangeDescription:e=>`Pasirinktas intervalas: nuo ${e.startDate} iki ${e.endDate}`,selectedTimeDescription:e=>`Pasirinktas laikas: ${e.time}`,startDate:`Pradžios data`,timeZoneName:`laiko juosta`,weekday:`savaitės diena`,year:`metai`}})))()}var Hh;function Uh(){return(Uh=t((()=>{Hh={},Hh={calendar:`Kalendārs`,day:`diena`,dayPeriod:`priekšpusdienā/pēcpusdienā`,endDate:`Beigu datums`,era:`ēra`,hour:`stundas`,minute:`minūtes`,month:`mēnesis`,second:`sekundes`,selectedDateDescription:e=>`Atlas\u{12B}tais datums: ${e.date}`,selectedRangeDescription:e=>`Atlas\u{12B}tais diapazons: no ${e.startDate} l\u{12B}dz ${e.endDate}`,selectedTimeDescription:e=>`Atlas\u{12B}tais laiks: ${e.time}`,startDate:`Sākuma datums`,timeZoneName:`laika josla`,weekday:`nedēļas diena`,year:`gads`}})))()}var Wh;function Gh(){return(Gh=t((()=>{Wh={},Wh={calendar:`Kalender`,day:`dag`,dayPeriod:`a.m./p.m.`,endDate:`Sluttdato`,era:`tidsalder`,hour:`time`,minute:`minutt`,month:`måned`,second:`sekund`,selectedDateDescription:e=>`Valgt dato: ${e.date}`,selectedRangeDescription:e=>`Valgt omr\xe5de: ${e.startDate} til ${e.endDate}`,selectedTimeDescription:e=>`Valgt tid: ${e.time}`,startDate:`Startdato`,timeZoneName:`tidssone`,weekday:`ukedag`,year:`år`}})))()}var Kh;function qh(){return(qh=t((()=>{Kh={},Kh={calendar:`Kalender`,day:`dag`,dayPeriod:`a.m./p.m.`,endDate:`Einddatum`,era:`tijdperk`,hour:`uur`,minute:`minuut`,month:`maand`,second:`seconde`,selectedDateDescription:e=>`Geselecteerde datum: ${e.date}`,selectedRangeDescription:e=>`Geselecteerd bereik: ${e.startDate} tot ${e.endDate}`,selectedTimeDescription:e=>`Geselecteerde tijd: ${e.time}`,startDate:`Startdatum`,timeZoneName:`tijdzone`,weekday:`dag van de week`,year:`jaar`}})))()}var Jh;function Yh(){return(Yh=t((()=>{Jh={},Jh={calendar:`Kalendarz`,day:`dzień`,dayPeriod:`rano / po południu / wieczorem`,endDate:`Data końcowa`,era:`era`,hour:`godzina`,minute:`minuta`,month:`miesiąc`,second:`sekunda`,selectedDateDescription:e=>`Wybrana data: ${e.date}`,selectedRangeDescription:e=>`Wybrany zakres: ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Wybrany czas: ${e.time}`,startDate:`Data początkowa`,timeZoneName:`strefa czasowa`,weekday:`dzień tygodnia`,year:`rok`}})))()}var Xh;function Zh(){return(Zh=t((()=>{Xh={},Xh={calendar:`Calendário`,day:`dia`,dayPeriod:`AM/PM`,endDate:`Data final`,era:`era`,hour:`hora`,minute:`minuto`,month:`mês`,second:`segundo`,selectedDateDescription:e=>`Data selecionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo selecionado: ${e.startDate} a ${e.endDate}`,selectedTimeDescription:e=>`Hora selecionada: ${e.time}`,startDate:`Data inicial`,timeZoneName:`fuso horário`,weekday:`dia da semana`,year:`ano`}})))()}var Qh;function $h(){return($h=t((()=>{Qh={},Qh={calendar:`Calendário`,day:`dia`,dayPeriod:`am/pm`,endDate:`Data de Término`,era:`era`,hour:`hora`,minute:`minuto`,month:`mês`,second:`segundo`,selectedDateDescription:e=>`Data selecionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo selecionado: ${e.startDate} a ${e.endDate}`,selectedTimeDescription:e=>`Hora selecionada: ${e.time}`,startDate:`Data de Início`,timeZoneName:`fuso horário`,weekday:`dia da semana`,year:`ano`}})))()}var eg;function tg(){return(tg=t((()=>{eg={},eg={calendar:`Calendar`,day:`zi`,dayPeriod:`a.m/p.m.`,endDate:`Dată final`,era:`eră`,hour:`oră`,minute:`minut`,month:`lună`,second:`secundă`,selectedDateDescription:e=>`Dat\u{103} selectat\u{103}: ${e.date}`,selectedRangeDescription:e=>`Interval selectat: de la ${e.startDate} p\xe2n\u{103} la ${e.endDate}`,selectedTimeDescription:e=>`Ora selectat\u{103}: ${e.time}`,startDate:`Dată început`,timeZoneName:`fus orar`,weekday:`ziua din săptămână`,year:`an`}})))()}var ng;function rg(){return(rg=t((()=>{ng={},ng={calendar:`Календарь`,day:`день`,dayPeriod:`AM/PM`,endDate:`Дата окончания`,era:`эра`,hour:`час`,minute:`минута`,month:`месяц`,second:`секунда`,selectedDateDescription:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: \u{441} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,selectedTimeDescription:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{435} \u{432}\u{440}\u{435}\u{43C}\u{44F}: ${e.time}`,startDate:`Дата начала`,timeZoneName:`часовой пояс`,weekday:`день недели`,year:`год`}})))()}var ig;function ag(){return(ag=t((()=>{ig={},ig={calendar:`Kalendár`,day:`deň`,dayPeriod:`AM/PM`,endDate:`Dátum ukončenia`,era:`letopočet`,hour:`hodina`,minute:`minúta`,month:`mesiac`,second:`sekunda`,selectedDateDescription:e=>`Vybrat\xfd d\xe1tum: ${e.date}`,selectedRangeDescription:e=>`Vybrat\xfd rozsah: od ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Vybrat\xfd \u{10D}as: ${e.time}`,startDate:`Dátum začatia`,timeZoneName:`časové pásmo`,weekday:`deň týždňa`,year:`rok`}})))()}var og;function sg(){return(sg=t((()=>{og={},og={calendar:`Koledar`,day:`dan`,dayPeriod:`dop/pop`,endDate:`Datum konca`,era:`doba`,hour:`ura`,minute:`minuta`,month:`mesec`,second:`sekunda`,selectedDateDescription:e=>`Izbrani datum: ${e.date}`,selectedRangeDescription:e=>`Izbrano obmo\u{10D}je: ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Izbrani \u{10D}as: ${e.time}`,startDate:`Datum začetka`,timeZoneName:`časovni pas`,weekday:`dan v tednu`,year:`leto`}})))()}var cg;function lg(){return(lg=t((()=>{cg={},cg={calendar:`Kalendar`,day:`дан`,dayPeriod:`пре подне/по подне`,endDate:`Datum završetka`,era:`ера`,hour:`сат`,minute:`минут`,month:`месец`,second:`секунд`,selectedDateDescription:e=>`Izabrani datum: ${e.date}`,selectedRangeDescription:e=>`Izabrani opseg: od ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Izabrano vreme: ${e.time}`,startDate:`Datum početka`,timeZoneName:`временска зона`,weekday:`дан у недељи`,year:`година`}})))()}var ug;function dg(){return(dg=t((()=>{ug={},ug={calendar:`Kalender`,day:`dag`,dayPeriod:`fm/em`,endDate:`Slutdatum`,era:`era`,hour:`timme`,minute:`minut`,month:`månad`,second:`sekund`,selectedDateDescription:e=>`Valt datum: ${e.date}`,selectedRangeDescription:e=>`Valt intervall: ${e.startDate} till ${e.endDate}`,selectedTimeDescription:e=>`Vald tid: ${e.time}`,startDate:`Startdatum`,timeZoneName:`tidszon`,weekday:`veckodag`,year:`år`}})))()}var fg;function pg(){return(pg=t((()=>{fg={},fg={calendar:`Takvim`,day:`gün`,dayPeriod:`ÖÖ/ÖS`,endDate:`Bitiş Tarihi`,era:`çağ`,hour:`saat`,minute:`dakika`,month:`ay`,second:`saniye`,selectedDateDescription:e=>`Se\xe7ilen Tarih: ${e.date}`,selectedRangeDescription:e=>`Se\xe7ilen Aral\u{131}k: ${e.startDate} - ${e.endDate}`,selectedTimeDescription:e=>`Se\xe7ilen Zaman: ${e.time}`,startDate:`Başlangıç Tarihi`,timeZoneName:`saat dilimi`,weekday:`haftanın günü`,year:`yıl`}})))()}var mg;function hg(){return(hg=t((()=>{mg={},mg={calendar:`Календар`,day:`день`,dayPeriod:`дп/пп`,endDate:`Дата завершення`,era:`ера`,hour:`година`,minute:`хвилина`,month:`місяць`,second:`секунда`,selectedDateDescription:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.startDate} \u{2014} ${e.endDate}`,selectedTimeDescription:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{447}\u{430}\u{441}: ${e.time}`,startDate:`Дата початку`,timeZoneName:`часовий пояс`,weekday:`день тижня`,year:`рік`}})))()}var gg;function _g(){return(_g=t((()=>{gg={},gg={calendar:`日历`,day:`日`,dayPeriod:`上午/下午`,endDate:`结束日期`,era:`纪元`,hour:`小时`,minute:`分钟`,month:`月`,second:`秒`,selectedDateDescription:e=>`\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,selectedRangeDescription:e=>`\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.startDate} \u{81F3} ${e.endDate}`,selectedTimeDescription:e=>`\u{9009}\u{5B9A}\u{7684}\u{65F6}\u{95F4}\u{FF1A}${e.time}`,startDate:`开始日期`,timeZoneName:`时区`,weekday:`工作日`,year:`年`}})))()}var vg;function yg(){return(yg=t((()=>{vg={},vg={calendar:`日曆`,day:`日`,dayPeriod:`上午/下午`,endDate:`結束日期`,era:`纪元`,hour:`小时`,minute:`分钟`,month:`月`,second:`秒`,selectedDateDescription:e=>`\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,selectedRangeDescription:e=>`\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${e.startDate} \u{81F3} ${e.endDate}`,selectedTimeDescription:e=>`\u{9078}\u{5B9A}\u{7684}\u{6642}\u{9593}\u{FF1A}${e.time}`,startDate:`開始日期`,timeZoneName:`时区`,weekday:`工作日`,year:`年`}})))()}var bg;function xg(){return(xg=t((()=>{sh(),lh(),dh(),ph(),hh(),_h(),yh(),xh(),Ch(),Th(),Dh(),kh(),jh(),Nh(),Fh(),Lh(),zh(),Vh(),Uh(),Gh(),qh(),Yh(),Zh(),$h(),tg(),rg(),ag(),sg(),lg(),dg(),pg(),hg(),_g(),yg(),bg={},bg={"ar-AE":oh,"bg-BG":ch,"cs-CZ":uh,"da-DK":fh,"de-DE":mh,"el-GR":gh,"en-US":vh,"es-ES":bh,"et-EE":Sh,"fi-FI":wh,"fr-FR":Eh,"he-IL":Oh,"hr-HR":Ah,"hu-HU":Mh,"it-IT":Ph,"ja-JP":Ih,"ko-KR":Rh,"lt-LT":Bh,"lv-LV":Hh,"nb-NO":Wh,"nl-NL":Kh,"pl-PL":Jh,"pt-BR":Xh,"pt-PT":Qh,"ro-RO":eg,"ru-RU":ng,"sk-SK":ig,"sl-SI":og,"sr-SP":cg,"sv-SE":ug,"tr-TR":fg,"uk-UA":mg,"zh-CN":gg,"zh-TW":vg}})))()}function Sg(e,t,n){let{direction:r}=je(),i=(0,wg.useMemo)(()=>Oe(t),[t]),{keyboardProps:a}=I({shortcuts:{"Alt+ArrowDown":()=>{if(`setOpen`in e){e.setOpen(!0);return}return!1},"Alt+ArrowUp":()=>{if(`setOpen`in e){e.setOpen(!0);return}return!1},ArrowLeft:e=>{if(n)return!1;if(r===`rtl`){if(t.current){let n=Se(e),r=Cg(t.current,n.getBoundingClientRect().left,-1);if(r){r.focus();return}}}else{i.focusPrevious();return}return!1},ArrowRight:e=>{if(n)return!1;if(r===`rtl`){if(t.current){let n=Se(e),r=Cg(t.current,n.getBoundingClientRect().left,1);if(r){r.focus();return}}}else{i.focusNext();return}return!1}},allowRepeats:!0}),o=()=>{if(!t.current)return;let e=window.event?Se(window.event):null,n=ke(t.current,{tabbable:!0});if(e&&=(n.currentNode=e,n.previousNode()),!e){let t;do t=n.lastChild(),t&&(e=t);while(t)}for(;e?.hasAttribute(`data-placeholder`);){let t=n.previousNode();if(t&&t.hasAttribute(`data-placeholder`))e=t;else break}e&&e.focus()},{pressProps:s}=ct({preventFocusOnPress:!0,allowTextSelectionOnPress:!0,onPressStart(e){e.pointerType===`mouse`&&o()},onPress(e){(e.pointerType===`touch`||e.pointerType===`pen`)&&o()}});return W(s,a)}function Cg(e,t,n){let r=ke(e,{tabbable:!0}),i=r.nextNode(),a=null,o=1/0;for(;i;){let e=i.getBoundingClientRect().left-t,s=Math.abs(e);Math.sign(e)===n&&s<o&&(a=i,o=s),i=r.nextNode()}return a}var wg;function Tg(){return(Tg=t((()=>{Fe(),L(),O(),xe(),Me(),yt(),wg=r()})))()}function Eg(e){return e&&e.__esModule?e.default:e}function Dg(e,t,n){let{isInvalid:r,validationErrors:i,validationDetails:a}=t.displayValidation,{labelProps:o,fieldProps:s,descriptionProps:c,errorMessageProps:l}=Tl({...e,labelElementType:`span`,isInvalid:r,errorMessage:e.errorMessage||i}),u=(0,kg.useRef)(null),{focusWithinProps:d}=me({...e,onFocusWithin(n){u.current=t.value,e.onFocus?.(n)},onBlurWithin:n=>{t.confirmPlaceholder(),t.value!==u.current&&t.commitValidation(),e.onBlur?.(n)},onFocusWithinChange:e.onFocusChange}),f=Te(Eg(bg),`@react-aria/datepicker`),p=t.maxGranularity===`hour`?`selectedTimeDescription`:`selectedDateDescription`,m=t.maxGranularity===`hour`?`time`:`date`,h=Nc(t.value?f.format(p,{[m]:t.formatValue({month:`long`})}):``),g=e.__reactAriaDateFieldRole===`presentation`?s[`aria-describedby`]:[h[`aria-describedby`],s[`aria-describedby`]].filter(Boolean).join(` `)||void 0,_=e[Mg],v=(0,kg.useMemo)(()=>_||Oe(n),[_,n]),y=Sg(t,n,e[jg]===`presentation`);Ag.set(t,{ariaLabel:e[`aria-label`],ariaLabelledBy:[o.id,e[`aria-labelledby`]].filter(Boolean).join(` `)||void 0,ariaDescribedBy:g,focusManager:v});let b=(0,kg.useRef)(e.autoFocus),x;x=e.__reactAriaDateFieldRole===`presentation`?{role:`presentation`}:W(s,{role:`group`,"aria-disabled":e.isDisabled||void 0,"aria-describedby":g}),(0,kg.useEffect)(()=>{b.current&&v.focusFirst(),b.current=!1},[v]),Gc(e.inputRef,t.defaultValue,t.setValue),Jc({...e,focus(){v.focusFirst()}},t,e.inputRef);let S={type:`hidden`,name:e.name,form:e.form,value:t.value?.toString()||``,disabled:e.isDisabled};e.validationBehavior===`native`&&(S.type=`text`,S.hidden=!0,S.required=e.isRequired,S.onChange=()=>{});let C=R(e);return{labelProps:{...o,onClick:()=>{v.focusFirst()}},fieldProps:W(C,x,y,d,{onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp,style:{unicodeBidi:`isolate`}}),inputProps:S,descriptionProps:c,errorMessageProps:l,isInvalid:r,validationErrors:i,validationDetails:a}}function Og(e,t,n){let r=Dg(e,t,n);return r.inputProps.value=t.timeValue?.toString()||``,r}var kg,Ag,jg,Mg;function Ng(){return(Ng=t((()=>{Fe(),V(),xg(),O(),Tg(),Lc(),El(),H(),qc(),$c(),Je(),kg=r(),Ag=new WeakMap,jg=`__reactAriaDateFieldRole`,Mg=`__reactAriaDateFieldFocusManager`})))()}function Pg(e){return e&&e.__esModule?e.default:e}function Fg(e,t,n){let r=U(),i=U(),a=U(),o=Te(Pg(bg),`@react-aria/datepicker`),{isInvalid:s,validationErrors:c,validationDetails:l}=t.displayValidation,{labelProps:u,fieldProps:d,descriptionProps:f,errorMessageProps:p}=Tl({...e,labelElementType:`span`,isInvalid:s,errorMessage:e.errorMessage||c}),m=Sg(t,n),h=d[`aria-labelledby`]||d.id,{locale:g}=je(),_=t.formatValue(g,{month:`long`}),v=Nc(_?o.format(`selectedDateDescription`,{date:_}):``),y=[v[`aria-describedby`],d[`aria-describedby`]].filter(Boolean).join(` `)||void 0,b=R(e),x=(0,Ig.useMemo)(()=>Oe(n),[n]),S=(0,Ig.useRef)(!1),{focusWithinProps:C}=me({...e,isDisabled:t.isOpen,onBlurWithin:t=>{let n=document.getElementById(i);ne(n,t.relatedTarget)||(S.current=!1,e.onBlur?.(t),e.onFocusChange?.(!1))},onFocusWithin:t=>{S.current||(S.current=!0,e.onFocus?.(t),e.onFocusChange?.(!0))}});return{groupProps:W(b,m,d,v,C,{role:`group`,"aria-disabled":e.isDisabled||null,"aria-labelledby":h,"aria-describedby":y,onKeyDown(n){t.isOpen||e.onKeyDown&&e.onKeyDown(n)},onKeyUp(n){t.isOpen||e.onKeyUp&&e.onKeyUp(n)}}),labelProps:{...u,onClick:()=>{x.focusFirst()}},fieldProps:{...d,id:a,[jg]:`presentation`,"aria-describedby":y,value:t.value,defaultValue:t.defaultValue,onChange:t.setValue,placeholderValue:e.placeholderValue,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,shouldForceLeadingZeros:e.shouldForceLeadingZeros,granularity:e.granularity,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isRequired:e.isRequired,validationBehavior:e.validationBehavior,[hl]:t,autoFocus:e.autoFocus,name:e.name,form:e.form},descriptionProps:f,errorMessageProps:p,buttonProps:{...v,id:r,"aria-haspopup":`dialog`,"aria-label":o.format(`calendar`),"aria-labelledby":`${r} ${h}`,"aria-describedby":y,"aria-expanded":t.isOpen,isDisabled:e.isDisabled||e.isReadOnly,onPress:()=>t.setOpen(!0)},dialogProps:{id:i,"aria-labelledby":`${r} ${h}`},calendarProps:{autoFocus:!0,value:t.dateValue,onChange:t.setDateValue,minValue:e.minValue,maxValue:e.maxValue,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isDateUnavailable:e.isDateUnavailable,defaultFocusedValue:t.dateValue?void 0:e.placeholderValue,isInvalid:t.isInvalid,errorMessage:typeof e.errorMessage==`function`?e.errorMessage(t.displayValidation):e.errorMessage||t.displayValidation.validationErrors.join(` `),firstDayOfWeek:e.firstDayOfWeek,pageBehavior:e.pageBehavior},isInvalid:s,validationErrors:c,validationDetails:l}}var Ig;function Lg(){return(Lg=t((()=>{Fe(),V(),xg(),O(),L(),Ng(),Tg(),Lc(),El(),H(),d(),Me(),Je(),gl(),Ig=r()})))()}function Rg(e){return e&&e.__esModule?e.default:e}function zg(){let{locale:e}=je(),t=Ye(Rg(bg),`@react-aria/datepicker`);return(0,Bg.useMemo)(()=>{try{return new Intl.DisplayNames(e,{type:`dateTimeField`})}catch{return new Vg(e,t)}},[e,t])}var Bg,Vg;function Hg(){return(Hg=t((()=>{xg(),Me(),Je(),Bg=r(),Vg=class{constructor(e,t){this.locale=e,this.dictionary=t}of(e){return this.dictionary.getStringForLocale(e,this.locale)}}})))()}function Ug(e){let{locale:t}=je(),n=t+(e?Object.entries(e).sort((e,t)=>e[0]<t[0]?-1:1).join():``);if(Wg.has(n))return Wg.get(n);let r=new Intl.Collator(t,e);return Wg.set(n,r),r}var Wg;function Gg(){return(Gg=t((()=>{Me(),Wg=new Map})))()}function Kg(e){let t=Ug({usage:`search`,...e}),n=(0,qg.useCallback)((e,n)=>n.length===0||(e=e.normalize(`NFC`),n=n.normalize(`NFC`),t.compare(e.slice(0,n.length),n)===0),[t]),r=(0,qg.useCallback)((e,n)=>n.length===0||(e=e.normalize(`NFC`),n=n.normalize(`NFC`),t.compare(e.slice(-n.length),n)===0),[t]),i=(0,qg.useCallback)((e,n)=>{if(n.length===0)return!0;e=e.normalize(`NFC`),n=n.normalize(`NFC`);let r=0,i=n.length;for(;r+i<=e.length;r++){let a=e.slice(r,r+i);if(t.compare(n,a)===0)return!0}return!1},[t]);return(0,qg.useMemo)(()=>({startsWith:n,endsWith:r,contains:i}),[n,r,i])}var qg;function Jg(){return(Jg=t((()=>{Gg(),qg=r()})))()}function Yg(e,t,n){let r=(0,Zg.useRef)(``),{locale:i,direction:a}=je(),o=zg(),{ariaLabel:s,ariaLabelledBy:c,ariaDescribedBy:l,focusManager:u}=Ag.get(t),d=e.isPlaceholder?``:e.text,f=(0,Zg.useMemo)(()=>t.dateFormatter.resolvedOptions(),[t.dateFormatter]),p=sc({month:`long`,timeZone:f.timeZone}),m=sc({hour:`numeric`,hour12:f.hour12,timeZone:f.timeZone});if(e.type===`month`&&!e.isPlaceholder){let e=p.format(t.dateValue);d=e===d?e:`${d} \u{2013} ${e}`}else e.type===`hour`&&!e.isPlaceholder&&(d=m.format(t.dateValue));let{spinButtonProps:h}=bd({value:e.value??void 0,textValue:d,minValue:e.minValue,maxValue:e.maxValue,isDisabled:t.isDisabled,isReadOnly:t.isReadOnly||!e.isEditable,isRequired:t.isRequired,onIncrement:()=>{r.current=``,t.increment(e.type)},onDecrement:()=>{r.current=``,t.decrement(e.type)},onIncrementPage:()=>{r.current=``,t.incrementPage(e.type)},onDecrementPage:()=>{r.current=``,t.decrementPage(e.type)},onIncrementToMax:()=>{r.current=``,t.incrementToMax(e.type)},onDecrementToMin:()=>{r.current=``,t.decrementToMin(e.type)}}),g=(0,Zg.useMemo)(()=>new Kl(i,{maximumFractionDigits:0}),[i]),_=()=>{if(e.text===e.placeholder&&u.focusPrevious(),g.isValidPartialNumber(e.text)&&!t.isReadOnly&&!e.isPlaceholder){let n=e.text.slice(0,-1),i=g.parse(n);n=i===0?``:n,n.length===0||i===0?t.clearSegment(e.type):t.setSegment(e.type,i),r.current=n}else(e.type===`dayPeriod`||e.type===`era`)&&t.clearSegment(e.type)},{keyboardProps:v}=I({shortcuts:{Backspace:()=>{_()},Delete:()=>{_()},"Mod+a":()=>{}},allowRepeats:!0}),{startsWith:y}=Kg({sensitivity:`base`}),b=sc({hour:`numeric`,hour12:!0}),x=(0,Zg.useMemo)(()=>{let e=new Date;return e.setHours(0),b.formatToParts(e).find(e=>e.type===`dayPeriod`).value},[b]),S=(0,Zg.useMemo)(()=>{let e=new Date;return e.setHours(12),b.formatToParts(e).find(e=>e.type===`dayPeriod`).value},[b]),C=sc({year:`numeric`,era:`narrow`,timeZone:`UTC`}),w=(0,Zg.useMemo)(()=>{if(e.type!==`era`)return[];let n=Fa(new Ao(1,1,1),t.calendar),r=t.calendar.getEras().map(e=>{let t=n.set({year:1,month:1,day:1,era:e}).toDate(`UTC`);return{era:e,formatted:C.formatToParts(t).find(e=>e.type===`era`).value}}),i=Xg(r.map(e=>e.formatted));if(i)for(let e of r)e.formatted=e.formatted.slice(i);return r},[C,t.calendar,e.type]),T=n=>{if(t.isDisabled||t.isReadOnly)return;let i=r.current+n;switch(e.type){case`dayPeriod`:if(y(x,n))t.setSegment(`dayPeriod`,0);else if(y(S,n))t.setSegment(`dayPeriod`,1);else break;u.focusNext();break;case`era`:{let e=w.find(e=>y(e.formatted,n));e&&(t.setSegment(`era`,e.era),u.focusNext());break}case`day`:case`hour`:case`minute`:case`second`:case`month`:case`year`:{if(!g.isValidPartialNumber(i))return;let a=g.parse(i),o=a;if(e.maxValue!==void 0&&a>e.maxValue&&(o=g.parse(n)),isNaN(a))return;t.setSegment(e.type,o),e.maxValue!==void 0&&(Number(a+`0`)>e.maxValue||i.length>=String(e.maxValue).length)?(r.current=``,u.focusNext()):r.current=i;break}}},E=()=>{r.current=``,n.current&&jc(n.current,{containingElement:at(n.current)}),window.getSelection()?.collapse(n.current)};ir((0,Zg.useRef)(typeof document<`u`?document:null),`selectionchange`,()=>{let e=window.getSelection();e?.anchorNode&&ne(n.current,e?.anchorNode)&&N()===n.current&&e.collapse(n.current)});let D=(0,Zg.useRef)(``);ir(n,`beforeinput`,r=>{if(n.current)switch(r.preventDefault(),r.inputType){case`deleteContentBackward`:case`deleteContentForward`:g.isValidPartialNumber(e.text)&&!t.isReadOnly&&_();break;case`insertCompositionText`:D.current=n.current.textContent,n.current.textContent=n.current.textContent;break;default:r.data!=null&&T(r.data)}}),ir(n,`input`,e=>{let{inputType:t,data:r}=e;t===`insertCompositionText`&&(n.current&&(n.current.textContent=D.current),r!=null&&(y(x,r)||y(S,r))&&T(r))}),ve(()=>{let e=n.current;return()=>{N()===e&&(u.focusPrevious()||u.focusNext())}},[n,u]);let O=re()||e.type===`timeZoneName`?{role:`textbox`,"aria-valuemax":null,"aria-valuemin":null,"aria-valuetext":null,"aria-valuenow":null}:{};e!==(0,Zg.useMemo)(()=>t.segments.find(e=>e.isEditable),[t.segments])&&!t.isInvalid&&(l=void 0);let k=U(),A=!t.isDisabled&&!t.isReadOnly&&e.isEditable,j=e.type===`literal`?``:o.of(e.type),M=Le({"aria-label":`${j}${s?`, ${s}`:``}${c?`, `:``}`,"aria-labelledby":c});if(e.type===`literal`)return{segmentProps:{"aria-hidden":!0}};let P={caretColor:`transparent`};if(a===`rtl`){P.unicodeBidi=`embed`;let t=f[e.type];(t===`numeric`||t===`2-digit`)&&(P.direction=`ltr`)}return{segmentProps:W(h,M,{id:k,...O,...v,"aria-invalid":t.isInvalid?`true`:void 0,"aria-describedby":l,"aria-readonly":t.isReadOnly||!e.isEditable?`true`:void 0,"data-placeholder":e.isPlaceholder||void 0,contentEditable:A,suppressContentEditableWarning:A,spellCheck:A?`false`:void 0,autoCorrect:A?`off`:void 0,enterKeyHint:A?`next`:void 0,inputMode:t.isDisabled||e.type===`dayPeriod`||e.type===`era`||!A?void 0:`numeric`,tabIndex:t.isDisabled?void 0:0,onFocus:E,style:P,onPointerDown(e){e.stopPropagation()},onMouseDown(e){e.stopPropagation()}})}}function Xg(e){e.sort();let t=e[0],n=e[e.length-1];for(let e=0;e<t.length;e++)if(t[e]!==n[e])return e;return 0}var Zg;function Qg(){return(Qg=t((()=>{L(),Re(),Ng(),F(),O(),Mc(),uc(),Hg(),or(),Jg(),d(),xe(),st(),z(),Me(),Cd(),Va(),No(),Xl(),Zg=e(r(),1)})))()}function $g(e={}){let{autoFocus:t=!1,isTextInput:n,within:r}=e,i=(0,e_.useRef)({isFocused:!1,isFocusVisible:t||f()}),[a,o]=(0,e_.useState)(!1),[s,c]=(0,e_.useState)(()=>i.current.isFocused&&i.current.isFocusVisible),l=(0,e_.useCallback)(()=>c(i.current.isFocused&&i.current.isFocusVisible),[]),u=(0,e_.useCallback)(e=>{i.current.isFocused=e,i.current.isFocusVisible=f(),o(e),l()},[l]);A(e=>{i.current.isFocusVisible=e,l()},[n,a],{enabled:a,isTextInput:n});let{focusProps:d}=D({isDisabled:r,onFocusChange:u}),{focusWithinProps:p}=me({isDisabled:!r,onFocusWithinChange:u});return{isFocused:a,isFocusVisible:s,focusProps:r?p:d}}var e_;function t_(){return(t_=t((()=>{v(),p(),H(),e_=r()})))()}function n_(e){let{selectionManager:t,collection:n,disabledKeys:r,ref:i,keyboardDelegate:a,layoutDelegate:o,orientation:s}=e,c=Ug({usage:`search`,sensitivity:`base`}),l=t.disabledBehavior,u=(0,r_.useMemo)(()=>a||new $f({collection:n,disabledKeys:r,disabledBehavior:l,ref:i,collator:c,layoutDelegate:o,orientation:s}),[a,o,n,r,i,c,l,s]),{collectionProps:d}=Um({...e,ref:i,selectionManager:t,keyboardDelegate:u});return{listProps:d}}var r_;function i_(){return(i_=t((()=>{Km(),ep(),Gg(),r_=r()})))()}function a_(e){let{id:t,selectionManager:n,key:r,ref:i,shouldSelectOnPressUp:a,shouldUseVirtualFocus:o,focus:s,isDisabled:c,onAction:l,allowsDifferentPressOrigin:u,linkBehavior:d=`action`}=e,f=y();t=U(t);let p=e=>{if(e.pointerType===`keyboard`&&Gf(e))n.toggleSelection(r);else{if(n.selectionMode===`none`)return;if(n.isLink(r)){if(d===`selection`&&i.current){let t=n.getItemProps(r);f.open(i.current,e,t.href,t.routerOptions),n.setSelectedKeys(n.selectedKeys);return}if(d===`override`||d===`none`)return}n.selectionMode===`single`?n.isSelected(r)&&!n.disallowEmptySelection?n.toggleSelection(r):n.replaceSelection(r):e&&e.shiftKey?n.extendSelection(r):n.selectionBehavior===`toggle`||e&&(Ee(e)||e.pointerType===`touch`||e.pointerType===`virtual`)?n.toggleSelection(r):n.replaceSelection(r)}};(0,c_.useEffect)(()=>{r===n.focusedKey&&n.isFocused&&(o?It(i.current):s?s():N()!==i.current&&i.current&&S(i.current))},[i,r,n.focusedKey,n.childFocusStrategy,n.isFocused,o]),c||=n.isDisabled(r);let m={};!o&&!c?m={tabIndex:r===n.focusedKey?0:-1,onFocus(e){Se(e)===i.current&&n.setFocusedKey(r)}}:c&&(m.onMouseDown=e=>{e.preventDefault()}),(0,c_.useEffect)(()=>{c&&n.focusedKey===r&&n.setFocusedKey(null)},[n,c,r]);let h=n.isLink(r)&&d===`override`,g=l&&e.UNSTABLE_itemBehavior===`action`,_=n.isLink(r)&&d!==`selection`&&d!==`none`,v=!c&&n.canSelectItem(r)&&!h&&!g,b=(l||_)&&!c,x=b&&(n.selectionBehavior===`replace`?!v:!v||n.isEmpty),C=b&&v&&n.selectionBehavior===`replace`,w=x||C,T=(0,c_.useRef)(null),E=w&&v,D=(0,c_.useRef)(!1),O=(0,c_.useRef)(!1),k=n.getItemProps(r),A=e=>{l&&(l(),i.current?.dispatchEvent(new CustomEvent(`react-aria-item-action`,{bubbles:!0}))),_&&i.current&&f.open(i.current,e,k.href,k.routerOptions)},j={ref:i};a?(j.onPressStart=e=>{T.current=e.pointerType,D.current=E,e.pointerType===`keyboard`&&(!w||s_(e.key))&&p(e)},u?(j.onPressUp=x?void 0:e=>{e.pointerType===`mouse`&&v&&p(e)},j.onPress=x?A:e=>{e.pointerType!==`keyboard`&&e.pointerType!==`mouse`&&v&&p(e)}):j.onPress=e=>{if(x||C&&e.pointerType!==`mouse`){if(e.pointerType===`keyboard`&&!o_(e.key))return;A(e)}else e.pointerType!==`keyboard`&&v&&p(e)}):(j.onPressStart=e=>{T.current=e.pointerType,D.current=E,O.current=x,v&&(e.pointerType===`mouse`&&!x||e.pointerType===`keyboard`&&(!b||s_(e.key)))&&p(e)},j.onPress=e=>{(e.pointerType===`touch`||e.pointerType===`pen`||e.pointerType===`virtual`||e.pointerType===`keyboard`&&w&&o_(e.key)||e.pointerType===`mouse`&&O.current)&&(w?A(e):v&&p(e))});let M=Jf(n.collection);if(m[`data-collection`]=M,m[`data-key`]=r,j.preventFocusOnPress=o,o&&(j=W(j,{onPressStart(e){e.pointerType!==`touch`&&(n.setFocused(!0),n.setFocusedKey(r))},onPress(e){e.pointerType===`touch`&&(n.setFocused(!0),n.setFocusedKey(r))}})),k)for(let e of[`onPressStart`,`onPressEnd`,`onPressChange`,`onPress`,`onPressUp`,`onClick`])k[e]&&(j[e]=ie(j[e],k[e]));let{pressProps:P,isPressed:F}=ct(j),I=C?e=>{T.current===`mouse`&&(e.stopPropagation(),e.preventDefault(),A(e))}:void 0,{longPressProps:L}=_m({isDisabled:!E,onLongPress(e){e.pointerType===`touch`&&(p(e),n.setSelectionBehavior(`toggle`))}}),R=e=>{T.current===`touch`&&D.current&&e.preventDefault()},z=d!==`none`&&n.isLink(r)?e=>{pe.isOpening||e.preventDefault()}:void 0,B=W(m,v||x||o&&!c?P:{},E?L:{},{onDoubleClick:I,onDragStartCapture:R,onClick:z,id:t},o?{onMouseDown:e=>e.preventDefault()}:void 0),V=e=>{let t=e;for(;t&&t!==i.current;){let e=t.getAttribute(`data-collection`);if(e!=null)return e!==M;t=t.parentElement}return fe(e)},ee=B.onPointerDown;B.onPointerDown=e=>{let t=Se(e);if(t&&t!==i.current&&V(t)){e.stopPropagation();return}ee?.(e)};let te=B.onMouseDown;return B.onMouseDown=e=>{let t=Se(e);if(t&&t!==i.current&&V(t)){e.stopPropagation();return}te?.(e)},{itemProps:B,isPressed:F,isSelected:n.isSelected(r),isFocused:n.isFocused&&n.focusedKey===r,isDisabled:c,allowsSelection:v,hasAction:w}}function o_(e){return e===`Enter`}function s_(e){return e===` `}var c_;function l_(){return(l_=t((()=>{T(),L(),Xf(),Be(),se(),O(),Bt(),j(),yt(),d(),bm(),c_=r()})))()}function u_(e,t,n){let r=R(e,{labelable:!0}),i=e.selectionBehavior||`toggle`,a=e.orientation||`vertical`,o=e.linkBehavior||(i===`replace`?`action`:`override`);i===`toggle`&&o===`action`&&(o=`override`);let{listProps:s}=n_({...e,ref:n,selectionManager:t.selectionManager,collection:t.collection,disabledKeys:t.disabledKeys,linkBehavior:o}),{focusWithinProps:c}=me({onFocusWithin:e.onFocus,onBlurWithin:e.onBlur,onFocusWithinChange:e.onFocusChange}),l=U(e.id);Ed.set(t,{id:l,shouldUseVirtualFocus:e.shouldUseVirtualFocus,shouldSelectOnPressUp:e.shouldSelectOnPressUp,shouldFocusOnHover:e.shouldFocusOnHover,isVirtualized:e.isVirtualized,onAction:e.onAction,linkBehavior:o,UNSTABLE_itemBehavior:e.UNSTABLE_itemBehavior});let{labelProps:u,fieldProps:d}=Cl({...e,id:l,labelElementType:`span`});return{labelProps:u,listBoxProps:W(r,c,t.selectionManager.selectionMode===`multiple`?{"aria-multiselectable":`true`}:{},{role:`listbox`,"aria-orientation":a,...W(d,s)})}}function d_(){return(d_=t((()=>{V(),Dd(),O(),H(),d(),wl(),i_()})))()}function f_(e){let{heading:t,"aria-label":n}=e,r=U();return{itemProps:{role:`presentation`},headingProps:t?{id:r,role:`presentation`,onMouseDown:e=>{e.preventDefault()}}:{},groupProps:{role:`group`,"aria-label":n,"aria-labelledby":t?r:void 0}}}function p_(){return(p_=t((()=>{d()})))()}function m_(e,t,n){let{key:r}=e,i=Ed.get(t),a=e.isDisabled??t.selectionManager.isDisabled(r),o=e.isSelected??t.selectionManager.isSelected(r),s=e.shouldSelectOnPressUp??i?.shouldSelectOnPressUp,c=e.shouldFocusOnHover??i?.shouldFocusOnHover,l=e.shouldUseVirtualFocus??i?.shouldUseVirtualFocus,u=e.isVirtualized??i?.isVirtualized,d=C(),p=C(),m={role:`option`,"aria-disabled":a||void 0,"aria-selected":t.selectionManager.selectionMode===`none`?void 0:o,"aria-label":e[`aria-label`],"aria-labelledby":d,"aria-describedby":p},h=t.collection.getItem(r);if(u){let e=Number(h?.index);m[`aria-posinset`]=Number.isNaN(e)?void 0:e+1,m[`aria-setsize`]=Qm(t.collection)}let g=i?.onAction?()=>i?.onAction?.(r):void 0,_=Td(t,r),{itemProps:v,isPressed:y,isFocused:x,hasAction:S,allowsSelection:w}=a_({selectionManager:t.selectionManager,key:r,ref:n,shouldSelectOnPressUp:s,allowsDifferentPressOrigin:s&&c,isVirtualized:u,shouldUseVirtualFocus:l,isDisabled:a,onAction:g||h?.props?.onAction?ie(h?.props?.onAction,g):void 0,linkBehavior:i?.linkBehavior,UNSTABLE_itemBehavior:i?.UNSTABLE_itemBehavior,id:_}),{hoverProps:T}=_t({isDisabled:a||!c,onHoverStart(){f()||(t.selectionManager.setFocused(!0),t.selectionManager.setFocusedKey(r))}}),E=R(h?.props);delete E.id;let D=b(h?.props);return{optionProps:{...m,...W(E,v,T,D),id:_},labelProps:{id:d},descriptionProps:{id:p},isFocused:x,isFocusVisible:x&&t.selectionManager.isFocused&&f(),isSelected:o,isDisabled:a,isPressed:y,allowsSelection:w,hasAction:S}}function h_(){return(h_=t((()=>{V(),Dd(),v(),O(),l_(),ht(),j(),d(),eh()})))()}function g_(){return window.ResizeObserver!==void 0}function __(e){let{ref:t,box:n,onResize:r}=e,i=de(r);(0,v_.useEffect)(()=>{let e=t?.current;if(e){if(g_()){let t=new window.ResizeObserver(e=>{e.length&&i()});return t.observe(e,{box:n}),()=>{e&&t.unobserve(e)}}return window.addEventListener(`resize`,i,!1),()=>{window.removeEventListener(`resize`,i,!1)}}},[t,n])}var v_;function y_(){return(y_=t((()=>{oe(),v_=r()})))()}function b_(e){let{value:t=0,minValue:n=0,maxValue:r=100,valueLabel:i,isIndeterminate:a,formatOptions:o={style:`percent`}}=e,s=R(e,{labelable:!0}),{labelProps:c,fieldProps:l}=Cl({...e,labelElementType:`span`});t=Al(t,n,r);let u=r-n,d=u===0?0:(t-n)/u,f=eu(o);if(!a&&!i){let e=o.style===`percent`?d:t;i=f.format(e)}return{progressBarProps:W(s,{...l,"aria-valuenow":a?void 0:t,"aria-valuemin":n,"aria-valuemax":r,"aria-valuetext":a?void 0:i,role:`progressbar`}),labelProps:c}}function x_(){return(x_=t((()=>{V(),O(),wl(),nu()})))()}function S_(e,t){let n=0,r=0,i=0,a=0,o=0,s=0,c={},l=(t?.scale??1)>1;if(e.tagName===`BODY`||e.tagName===`HTML`){let l=document.documentElement;i=l.clientWidth,a=l.clientHeight,n=t?.width??i,r=t?.height??a,c.top=l.scrollTop||e.scrollTop,c.left=l.scrollLeft||e.scrollLeft,t&&(o=t.offsetTop,s=t.offsetLeft)}else({width:n,height:r,top:o,left:s}=N_(e,!1)),c.top=e.scrollTop,c.left=e.scrollLeft,i=n,a=r;return B()&&(e.tagName===`BODY`||e.tagName===`HTML`)&&l&&(c.top=0,c.left=0,o=t?.pageTop??0,s=t?.pageLeft??0),{width:n,height:r,totalWidth:i,totalHeight:a,scroll:c,top:o,left:s}}function C_(e){return{top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}}function w_(e,t,n,r,i,a,o){let s=i.scroll[e]??0,c=r[B_[e]],l=o[e]+r.scroll[L_[e]]+a,u=o[e]+r.scroll[L_[e]]+c-a,d=t-s+r.scroll[L_[e]]+o[e]-r[L_[e]],f=t-s+n+r.scroll[L_[e]]+o[e]-r[L_[e]];return d<l?l-d:f>u?Math.max(u-f,l-d):0}function T_(e){let t=window.getComputedStyle(e);return{top:parseInt(t.marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0}}function E_(e){if(H_[e])return H_[e];let[t,n]=e.split(` `),r=L_[t]||`right`,i=z_[r];L_[n]||(n=`center`);let a=B_[r],o=B_[i];return H_[e]={placement:t,crossPlacement:n,axis:r,crossAxis:i,size:a,crossSize:o},H_[e]}function D_(e,t,n,r,i,a,o,s,c,l,u){let{placement:d,crossPlacement:f,axis:p,crossAxis:m,size:h,crossSize:g}=r,_={};_[m]=e[m]??0,f===`center`?_[m]+=((e[g]??0)-(n[g]??0))/2:f!==m&&(_[m]+=(e[g]??0)-(n[g]??0)),_[m]+=a;let v=e[m]-n[g]+c+l,y=e[m]+e[g]-c-l;if(_[m]=Al(_[m],v,y),d===p){let t=s?u[h]:u[V_[h]];_[R_[p]]=Math.floor(t-e[p]+i)}else _[p]=Math.floor(e[p]+e[h]+i);return _}function O_(e,t,n,r,i,a,o,s,c,l,u){let d=(e.top==null?c[V_.height]-(e.bottom??0)-o:e.top)-(c.scroll.top??0),f=l?n.top:0,p={top:Math.max(t.top+f,(u?.offsetTop??t.top)+f),bottom:Math.min(t.top+t.height+f,(u?.offsetTop??0)+(u?.height??0))};return s===`top`?Math.max(0,d+o-p.top-((i.top??0)+(i.bottom??0)+a)):Math.max(0,p.bottom-d-((i.top??0)+(i.bottom??0)+a))}function k_(e,t,n,r,i,a,o,s){let{placement:c,axis:l,size:u}=a;return c===l?Math.max(0,n[l]-(o.scroll[l]??0)-(e[l]+(s?t[l]:0))-(r[l]??0)-r[R_[l]]-i):Math.max(0,e[u]+e[l]+(s?t[l]:0)-n[l]-n[u]+(o.scroll[l]??0)-(r[l]??0)-r[R_[l]]-i)}function A_(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_){let v=E_(e),{size:y,crossAxis:b,crossSize:x,placement:S,crossPlacement:C}=v,w=D_(t,s,n,v,u,d,l,f,m,h,c),T=u,E=k_(s,l,t,i,a+u,v,c,g);if(o&&n[y]>E){let e=E_(`${R_[S]} ${C}`),r=D_(t,s,n,e,u,d,l,f,m,h,c);k_(s,l,t,i,a+u,e,c,g)>E&&(v=e,w=r,T=u)}let D=`bottom`;v.axis===`top`?v.placement===`top`?D=`top`:v.placement===`bottom`&&(D=`bottom`):v.crossAxis===`top`&&(v.crossPlacement===`top`?D=`bottom`:v.crossPlacement===`bottom`&&(D=`top`));let O=w_(b,w[b],n[x],s,c,a,l);w[b]+=O;let k=O_(w,s,l,f,i,a,n.height,D,c,g,_);p&&p<k&&(k=p),n.height=Math.min(n.height,k),w=D_(t,s,n,v,T,d,l,f,m,h,c),O=w_(b,w[b],n[x],s,c,a,l),w[b]+=O;let A={},j=t[b]-w[b]-i[L_[b]],M=j+.5*t[x],N=m/2+h,P=L_[b]===`left`?(i.left??0)+(i.right??0):(i.top??0)+(i.bottom??0),F=n[x]-P-m/2-h;A[b]=Al(Al(M,t[b]+m/2-(w[b]+i[L_[b]]),t[b]+t[x]-m/2-(w[b]+i[L_[b]])),N,F),{placement:S,crossPlacement:C}=v,m?j=A[b]:C===`right`?j+=t[x]:C===`center`&&(j+=t[x]/2);let I=S===`left`||S===`top`?n[y]:0,L={x:S===`top`||S===`bottom`?j:I,y:S===`left`||S===`right`?j:I};return{position:w,maxHeight:k,arrowOffsetLeft:A.left,arrowOffsetTop:A.top,placement:S,triggerAnchorPoint:L}}function j_(e){let{placement:t,targetNode:n,overlayNode:r,scrollNode:i,padding:a,shouldFlip:o,boundaryElement:s,offset:c,crossOffset:l,maxHeight:u,arrowSize:d=0,arrowBoundaryOffset:f=0,targetRect:p}=e,m=U_(),h=r instanceof HTMLElement?F_(r):document.documentElement,g=h===document.documentElement,_=window.getComputedStyle(h).position,v=!!_&&_!==`static`,y=g?N_(n,!1,p):P_(n,h,!1,p);if(!g){let{marginTop:e,marginLeft:t}=window.getComputedStyle(n);y.top+=parseInt(e,10)||0,y.left+=parseInt(t,10)||0}let b=N_(r,!0),x=T_(r);b.width+=(x.left??0)+(x.right??0),b.height+=(x.top??0)+(x.bottom??0);let S=C_(i),C=S_(s,m),w=S_(h,m),T;if((s.tagName===`BODY`||s.tagName===`HTML`)&&!g){let e=M_(h,!1);T={top:-(e.top-C.top),left:-(e.left-C.left),width:0,height:0}}else T=(s.tagName===`BODY`||s.tagName===`HTML`)&&g?{top:0,left:0,width:0,height:0}:P_(s,h,!1);let E=ne(s,h);return A_(t,y,b,S,x,a,o,C,w,T,c,l,v,u,d,f,E,m)}function M_(e,t){let{top:n,left:r,width:i,height:a}=e.getBoundingClientRect();return t&&e instanceof e.ownerDocument.defaultView.HTMLElement&&(i=e.offsetWidth,a=e.offsetHeight),{top:n,left:r,width:i,height:a}}function N_(e,t,n){let{top:r,left:i,width:a,height:o}=n||M_(e,t),{scrollTop:s,scrollLeft:c,clientTop:l,clientLeft:u}=document.documentElement;return{top:r+s-l,left:i+c-u,width:a,height:o}}function P_(e,t,n,r){let i=window.getComputedStyle(e),a;if(i.position===`fixed`)a=r||M_(e,n);else{a=N_(e,n,r);let i=N_(t,n),o=window.getComputedStyle(t);i.top+=(parseInt(o.borderTopWidth,10)||0)-t.scrollTop,i.left+=(parseInt(o.borderLeftWidth,10)||0)-t.scrollLeft,a.top-=i.top,a.left-=i.left}return a.top-=parseInt(i.marginTop,10)||0,a.left-=parseInt(i.marginLeft,10)||0,a}function F_(e){let t=e.offsetParent;if(t&&t===document.body&&window.getComputedStyle(t).position===`static`&&!I_(t)&&(t=document.documentElement),t==null)for(t=e.parentElement;t&&!I_(t);)t=t.parentElement;return t||document.documentElement}function I_(e){let t=window.getComputedStyle(e);return t.transform!==`none`||/transform|perspective/.test(t.willChange)||t.filter!==`none`||t.contain===`paint`||`backdropFilter`in t&&t.backdropFilter!==`none`||`WebkitBackdropFilter`in t&&t.WebkitBackdropFilter!==`none`}var L_,R_,z_,B_,V_,H_,U_;function W_(){return(W_=t((()=>{F(),L(),L_={top:`top`,bottom:`top`,left:`left`,right:`left`},R_={top:`bottom`,bottom:`top`,left:`right`,right:`left`},z_={top:`left`,left:`top`},B_={top:`height`,left:`width`},V_={width:`totalWidth`,height:`totalHeight`},H_={},U_=()=>typeof document<`u`?window.visualViewport:null})))()}function G_(e){let{direction:t}=je(),{arrowSize:n,targetRef:r,overlayRef:i,arrowRef:a,scrollRef:o=i,placement:s=`bottom`,containerPadding:c=12,shouldFlip:l=!0,boundaryElement:u=typeof document<`u`?document.body:null,offset:d=0,crossOffset:f=0,shouldUpdatePosition:p=!0,isOpen:m=!0,onClose:h,maxHeight:g,arrowBoundaryOffset:_=0,getTargetRect:v}=e,[y,b]=(0,J_.useState)(null),x=[p,s,i.current,r.current,a?.current,o.current,c,l,u,d,f,m,t,g,_,n],S=(0,J_.useRef)(Y_?.scale);(0,J_.useEffect)(()=>{m&&(S.current=Y_?.scale)},[m]);let C=(0,J_.useCallback)(()=>{if(p===!1||!m||!i.current||!r.current||!u||Y_?.scale!==S.current)return;let e=null;if(o.current&&ee(o.current)){let t=N()?.getBoundingClientRect(),n=o.current.getBoundingClientRect();e={type:`top`,offset:(t?.top??0)-n.top},e.offset>n.height/2&&(e.type=`bottom`,e.offset=(t?.bottom??0)-n.bottom)}let h=i.current;!g&&i.current&&(h.style.top=`0px`,h.style.bottom=``,h.style.maxHeight=(window.visualViewport?.height??window.innerHeight)+`px`);let y=j_({placement:q_(s,t),overlayNode:i.current,targetNode:r.current,scrollNode:o.current||i.current,padding:c,shouldFlip:l,boundaryElement:u,offset:d,crossOffset:f,maxHeight:g,arrowSize:n??(a?.current?M_(a.current,!0).width:0),arrowBoundaryOffset:_,targetRect:v?.(r.current)});if(!y.position)return;h.style.top=``,h.style.bottom=``,h.style.left=``,h.style.right=``,Object.keys(y.position).forEach(e=>h.style[e]=y.position[e]+`px`),h.style.maxHeight=y.maxHeight==null?``:y.maxHeight+`px`;let x=N();if(e&&x&&o.current){let t=x.getBoundingClientRect(),n=o.current.getBoundingClientRect(),r=t[e.type]-n[e.type];o.current.scrollTop+=r-e.offset}b(y)},x);ve(C,x),K_(C),__({ref:i,onResize:C}),__({ref:r,onResize:C});let w=(0,J_.useRef)(!1);ve(()=>{let e,t=()=>{w.current=!0,clearTimeout(e),e=setTimeout(()=>{w.current=!1},500),C()},n=()=>{w.current&&t()};return Y_?.addEventListener(`resize`,t),Y_?.addEventListener(`scroll`,n),()=>{Y_?.removeEventListener(`resize`,t),Y_?.removeEventListener(`scroll`,n)}},[C]);let T=(0,J_.useCallback)(()=>{w.current||h?.()},[h,w]);return wm({triggerRef:r,isOpen:m,onClose:h&&T}),{overlayProps:{style:{position:y?`absolute`:`fixed`,top:y?void 0:0,left:y?void 0:0,zIndex:1e5,...y?.position,maxHeight:y?.maxHeight??`100vh`}},placement:y?.placement??null,triggerAnchorPoint:y?.triggerAnchorPoint??null,arrowProps:{"aria-hidden":`true`,role:`presentation`,style:{left:y?.arrowOffsetLeft,top:y?.arrowOffsetTop}},updatePosition:C}}function K_(e){ve(()=>(window.addEventListener(`resize`,e,!1),()=>{window.removeEventListener(`resize`,e,!1)}),[e])}function q_(e,t){return t===`rtl`?e.replace(`start`,`right`).replace(`end`,`left`):e.replace(`start`,`left`).replace(`end`,`right`)}var J_,Y_;function X_(){return(X_=t((()=>{W_(),L(),Dm(),z(),Me(),y_(),J_=r(),Y_=typeof document<`u`?window.visualViewport:null})))()}function Z_(e,t){let{triggerRef:n,popoverRef:r,groupRef:i,isNonModal:a,isKeyboardDismissDisabled:o,shouldCloseOnInteractOutside:s,...c}=e,l=c.trigger===`SubmenuTrigger`,{overlayProps:u,underlayProps:d}=He({isOpen:t.isOpen,onClose:t.close,shouldCloseOnBlur:!0,isDismissable:!a||l,isKeyboardDismissDisabled:o,shouldCloseOnInteractOutside:s},i??r),{overlayProps:f,arrowProps:p,placement:m,triggerAnchorPoint:h}=G_({...c,targetRef:n,overlayRef:r,isOpen:t.isOpen,onClose:a&&!l?t.close:null,getTargetRect:c.getTargetRect??(t.point?()=>new DOMRect(t.point.x,t.point.y,0,0):void 0)});et({isDisabled:a||!t.isOpen}),(0,Q_.useEffect)(()=>{if(t.isOpen&&r.current)return a?Ke(i?.current??r.current):Ve([i?.current??r.current],{shouldUseInert:!0})},[a,t.isOpen,r,i]);let{focusWithinProps:g}=me(e);return{popoverProps:W(u,f,g),arrowProps:p,underlayProps:d,placement:m,triggerAnchorPoint:h}}var Q_;function $_(){return($_=t((()=>{it(),X_(),H(),O(),Qe(),qe(),Q_=r()})))()}var ev;function tv(){return(tv=t((()=>{ev=new WeakMap})))()}function nv(e,t,n){let{value:r,children:i,"aria-label":a,"aria-labelledby":o,onPressStart:s,onPressEnd:c,onPressChange:l,onPress:u,onPressUp:d,onClick:f}=e,p=e.isDisabled||t.isDisabled,m=t.selectedValue===r,h=e=>{e.stopPropagation(),t.setSelectedValue(r)},{pressProps:g,isPressed:_}=ct({onPressStart:s,onPressEnd:c,onPressChange:l,onPress:u,onPressUp:d,onClick:f,isDisabled:p}),{pressProps:v,isPressed:y}=ct({onPressStart:s,onPressEnd:c,onPressChange:l,onPressUp:d,onClick:f,isDisabled:p,onPress(e){u?.(e),t.setSelectedValue(r),n.current?.focus()}}),{focusableProps:b}=te(W(e,{onFocus:()=>t.setLastFocusedValue(r)}),n),x=W(g,b),S=R(e,{labelable:!0}),C=-1;t.selectedValue==null?(t.lastFocusedValue===r||t.lastFocusedValue==null)&&(C=0):t.selectedValue===r&&(C=0),p&&(C=void 0);let{name:w,form:T,descriptionId:E,errorMessageId:D,validationBehavior:O}=ev.get(t);Gc(n,t.defaultSelectedValue,t.setSelectedValue),Jc({validationBehavior:O},t,n);let k=tl();return{labelProps:W(v,(0,rv.useMemo)(()=>({onClick:e=>e.preventDefault(),onMouseDown:e=>e.preventDefault()}),[])),inputProps:W(S,{...x,type:`radio`,name:w,form:T,tabIndex:C,disabled:p,required:t.isRequired&&O===`native`,checked:m,value:r,onChange:h,"aria-describedby":[e[`aria-describedby`],k.id,t.isInvalid?D:null,E].filter(Boolean).join(` `)||void 0}),descriptionProps:k,isDisabled:p,isSelected:m,isPressed:_||y}}var rv;function iv(){return(iv=t((()=>{V(),O(),tv(),M(),qc(),$c(),yt(),rl(),rv=r()})))()}function av(e,t){let{name:n,form:r,isReadOnly:i,isRequired:a,isDisabled:o,orientation:s=`vertical`,validationBehavior:c=`aria`}=e,{direction:l}=je(),{isInvalid:u,validationErrors:d,validationDetails:f}=t.displayValidation,{labelProps:p,fieldProps:m,descriptionProps:h,errorMessageProps:g}=Tl({...e,labelElementType:`span`,isInvalid:t.isInvalid,errorMessage:e.errorMessage||d}),_=R(e,{labelable:!0}),{focusWithinProps:v}=me({onBlurWithin(n){e.onBlur?.(n),t.selectedValue||t.setLastFocusedValue(null)},onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange});function y(e,n){let r=ke(n.currentTarget,{from:Se(n),accept:e=>e instanceof k(e).HTMLInputElement&&e.type===`radio`}),i;return e===`next`?(i=r.nextNode(),i||=(r.currentNode=n.currentTarget,r.firstChild())):(i=r.previousNode(),i||=(r.currentNode=n.currentTarget,r.lastChild())),i?(i.focus(),t.setSelectedValue(i.value),!0):!1}let{keyboardProps:b}=I({shortcuts:{ArrowRight:e=>y(l===`rtl`&&s!==`vertical`?`prev`:`next`,e),ArrowLeft:e=>y(l===`rtl`&&s!==`vertical`?`next`:`prev`,e),ArrowDown:e=>y(`next`,e),ArrowUp:e=>y(`prev`,e)},allowRepeats:!0}),x=U(n);return ev.set(t,{name:x,form:r,descriptionId:h.id,errorMessageId:g.id,validationBehavior:c}),{radioGroupProps:W(_,{role:`radiogroup`,...b,"aria-invalid":t.isInvalid||void 0,"aria-errormessage":e[`aria-errormessage`],"aria-readonly":i||void 0,"aria-required":a||void 0,"aria-disabled":o||void 0,"aria-orientation":s,...m,...v}),labelProps:p,descriptionProps:h,errorMessageProps:g,isInvalid:u,validationErrors:d,validationDetails:f}}function ov(){return(ov=t((()=>{V(),L(),Fe(),m(),O(),tv(),El(),H(),d(),xe(),Me()})))()}var sv;function cv(){return(cv=t((()=>{sv={},sv={"Clear search":`مسح البحث`}})))()}var lv;function uv(){return(uv=t((()=>{lv={},lv={"Clear search":`Изчистване на търсене`}})))()}var dv;function fv(){return(fv=t((()=>{dv={},dv={"Clear search":`Vymazat hledání`}})))()}var pv;function mv(){return(mv=t((()=>{pv={},pv={"Clear search":`Ryd søgning`}})))()}var hv;function gv(){return(gv=t((()=>{hv={},hv={"Clear search":`Suche zurücksetzen`}})))()}var _v;function vv(){return(vv=t((()=>{_v={},_v={"Clear search":`Απαλοιφή αναζήτησης`}})))()}var yv;function bv(){return(bv=t((()=>{yv={},yv={"Clear search":`Clear search`}})))()}var xv;function Sv(){return(Sv=t((()=>{xv={},xv={"Clear search":`Borrar búsqueda`}})))()}var Cv;function wv(){return(wv=t((()=>{Cv={},Cv={"Clear search":`Tühjenda otsing`}})))()}var Tv;function Ev(){return(Ev=t((()=>{Tv={},Tv={"Clear search":`Tyhjennä haku`}})))()}var Dv;function Ov(){return(Ov=t((()=>{Dv={},Dv={"Clear search":`Effacer la recherche`}})))()}var kv;function Av(){return(Av=t((()=>{kv={},kv={"Clear search":`נקה חיפוש`}})))()}var jv;function Mv(){return(Mv=t((()=>{jv={},jv={"Clear search":`Obriši pretragu`}})))()}var Nv;function Pv(){return(Pv=t((()=>{Nv={},Nv={"Clear search":`Keresés törlése`}})))()}var Fv;function Iv(){return(Iv=t((()=>{Fv={},Fv={"Clear search":`Cancella ricerca`}})))()}var Lv;function Rv(){return(Rv=t((()=>{Lv={},Lv={"Clear search":`検索をクリア`}})))()}var zv;function Bv(){return(Bv=t((()=>{zv={},zv={"Clear search":`검색 지우기`}})))()}var Vv;function Hv(){return(Hv=t((()=>{Vv={},Vv={"Clear search":`Išvalyti iešką`}})))()}var Uv;function Wv(){return(Wv=t((()=>{Uv={},Uv={"Clear search":`Notīrīt meklēšanu`}})))()}var Gv;function Kv(){return(Kv=t((()=>{Gv={},Gv={"Clear search":`Tøm søk`}})))()}var qv;function Jv(){return(Jv=t((()=>{qv={},qv={"Clear search":`Zoekactie wissen`}})))()}var Yv;function Xv(){return(Xv=t((()=>{Yv={},Yv={"Clear search":`Wyczyść zawartość wyszukiwania`}})))()}var Zv;function Qv(){return(Qv=t((()=>{Zv={},Zv={"Clear search":`Limpar pesquisa`}})))()}var $v;function ey(){return(ey=t((()=>{$v={},$v={"Clear search":`Limpar pesquisa`}})))()}var ty;function ny(){return(ny=t((()=>{ty={},ty={"Clear search":`Ştergeţi căutarea`}})))()}var ry;function iy(){return(iy=t((()=>{ry={},ry={"Clear search":`Очистить поиск`}})))()}var ay;function oy(){return(oy=t((()=>{ay={},ay={"Clear search":`Vymazať vyhľadávanie`}})))()}var sy;function cy(){return(cy=t((()=>{sy={},sy={"Clear search":`Počisti iskanje`}})))()}var ly;function uy(){return(uy=t((()=>{ly={},ly={"Clear search":`Obriši pretragu`}})))()}var dy;function fy(){return(fy=t((()=>{dy={},dy={"Clear search":`Rensa sökning`}})))()}var py;function my(){return(my=t((()=>{py={},py={"Clear search":`Aramayı temizle`}})))()}var hy;function gy(){return(gy=t((()=>{hy={},hy={"Clear search":`Очистити пошук`}})))()}var _y;function vy(){return(vy=t((()=>{_y={},_y={"Clear search":`清除搜索`}})))()}var yy;function by(){return(by=t((()=>{yy={},yy={"Clear search":`清除搜尋條件`}})))()}var xy;function Sy(){return(Sy=t((()=>{cv(),uv(),fv(),mv(),gv(),vv(),bv(),Sv(),wv(),Ev(),Ov(),Av(),Mv(),Pv(),Iv(),Rv(),Bv(),Hv(),Wv(),Kv(),Jv(),Xv(),Qv(),ey(),ny(),iy(),oy(),cy(),uy(),fy(),my(),gy(),vy(),by(),xy={},xy={"ar-AE":sv,"bg-BG":lv,"cs-CZ":dv,"da-DK":pv,"de-DE":hv,"el-GR":_v,"en-US":yv,"es-ES":xv,"et-EE":Cv,"fi-FI":Tv,"fr-FR":Dv,"he-IL":kv,"hr-HR":jv,"hu-HU":Nv,"it-IT":Fv,"ja-JP":Lv,"ko-KR":zv,"lt-LT":Vv,"lv-LV":Uv,"nb-NO":Gv,"nl-NL":qv,"pl-PL":Yv,"pt-BR":Zv,"pt-PT":$v,"ro-RO":ty,"ru-RU":ry,"sk-SK":ay,"sl-SI":sy,"sr-SP":ly,"sv-SE":dy,"tr-TR":py,"uk-UA":hy,"zh-CN":_y,"zh-TW":yy}})))()}function Cy(e){return e&&e.__esModule?e.default:e}function wy(e,t,n){let r=Te(Cy(xy),`@react-aria/searchfield`),{isDisabled:i,isReadOnly:a,onSubmit:o,onClear:s,type:c=`search`}=e,{keyboardProps:l}=I({isDisabled:i||a,shortcuts:{Enter:()=>{if(o){o(t.value);return}return!1},Escape:()=>{if(t.value===``&&(!n.current||n.current.value===``))return!1;t.setValue(``),s?.()}}}),u=()=>{t.setValue(``),s&&s()},d=()=>{n.current?.focus()},{labelProps:f,inputProps:p,descriptionProps:m,errorMessageProps:h,...g}=Zl({...e,value:t.value,onChange:t.setValue,onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp,type:c},n);return{labelProps:f,inputProps:W(l,{...p,defaultValue:void 0}),clearButtonProps:{"aria-label":r.format(`Clear search`),excludeFromTabOrder:!0,preventFocusOnPress:!0,isDisabled:i||a,onPress:u,onPressStart:d},descriptionProps:m,errorMessageProps:h,...g}}function Ty(){return(Ty=t((()=>{$l(),Sy(),O(),xe(),Je()})))()}function Ey(e,t,n){let{keyboardDelegate:r,isDisabled:i,isRequired:a,name:o,form:s,validationBehavior:c=`aria`}=e,l=Ug({usage:`search`,sensitivity:`base`}),u=(0,Dy.useMemo)(()=>r||new $f(t.collection,t.disabledKeys,n,l),[r,t.collection,t.disabledKeys,l,n]),{menuTriggerProps:d,menuProps:f}=Mm({isDisabled:i,type:`listbox`},t,n),{keyboardProps:p}=I({shortcuts:{ArrowLeft:()=>{if(t.selectionManager.selectionMode===`multiple`)return!1;let e=t.selectedKey==null?u.getFirstKey?.():u.getKeyAbove?.(t.selectedKey);e!=null&&t.setSelectedKey(e)},ArrowRight:()=>{if(t.selectionManager.selectionMode===`multiple`)return!1;let e=t.selectedKey==null?u.getFirstKey?.():u.getKeyBelow?.(t.selectedKey);e!=null&&t.setSelectedKey(e)}},allowRepeats:!0,onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp}),{typeSelectProps:m}=Fm({keyboardDelegate:u,selectionManager:t.selectionManager,onTypeSelect(e){t.setSelectedKey(e)}}),{isInvalid:h,validationErrors:g,validationDetails:_}=t.displayValidation,{labelProps:v,fieldProps:y,descriptionProps:b,errorMessageProps:x}=Tl({...e,labelElementType:`span`,isInvalid:h,errorMessage:e.errorMessage||g});t.selectionManager.selectionMode===`multiple`&&(m={});let S=R(e,{labelable:!0}),C=W(m,d,y),w=U();return Oy.set(t,{isDisabled:i,isRequired:a,name:o,form:s,validationBehavior:c}),{labelProps:{...v,onClick:()=>{e.isDisabled||(n.current?.focus(),E(`keyboard`))}},triggerProps:W(S,{...C,isDisabled:i,onKeyDown:ie(C.onKeyDown,p.onKeyDown),onKeyUp:p.onKeyUp,"aria-labelledby":[w,C[`aria-labelledby`],C[`aria-label`]&&!C[`aria-labelledby`]?C.id:null].filter(Boolean).join(` `),onFocus(n){t.isFocused||(e.onFocus&&e.onFocus(n),e.onFocusChange&&e.onFocusChange(!0),t.setFocused(!0))},onBlur(n){t.isOpen||(e.onBlur&&e.onBlur(n),e.onFocusChange&&e.onFocusChange(!1),t.setFocused(!1))}}),valueProps:{id:w},menuProps:{...f,onAction:void 0,autoFocus:t.focusStrategy||!0,shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,disallowEmptySelection:!0,linkBehavior:`selection`,onBlur:n=>{ne(n.currentTarget,n.relatedTarget)||(e.onBlur&&e.onBlur(n),e.onFocusChange&&e.onFocusChange(!1),t.setFocused(!1))},"aria-labelledby":[y[`aria-labelledby`],C[`aria-label`]&&!y[`aria-labelledby`]?C.id:null].filter(Boolean).join(` `)},descriptionProps:b,errorMessageProps:x,isInvalid:h,validationErrors:g,validationDetails:_,hiddenSelectProps:{isDisabled:i,name:o,label:e.label,state:t,triggerRef:n,form:s}}}var Dy,Oy;function ky(){return(ky=t((()=>{V(),ep(),O(),L(),v(),Gg(),El(),d(),xe(),Pm(),zm(),Dy=r(),Oy=new WeakMap})))()}function Ay(e,t,n){let{labelProps:r,inputProps:i,isSelected:a,...o}=_l(e,t,n);return{labelProps:r,inputProps:{...i,role:`switch`,checked:a},isSelected:a,...o}}function jy(){return(jy=t((()=>{yl()})))()}function My(...e){let t=e.filter(e=>typeof e==`string`&&e.length>0).join(` `);return t.length>0?t:void 0}function Y(e){let t={};for(let[n,r]of Object.entries(e))r!==void 0&&(t[n]=r);return t}function Ny(e,t){return e?t:{}}function Py(e){return rb[e]}function Fy(e){return c(Ry,nb[e.size],Py(e.variant),e.variant===`icon`?ib[e.size]:void 0)}var Iy,Ly,Ry,zy,By,Vy,Hy,Uy,Wy,Gy,Ky,qy,Jy,Yy,Xy,Zy,Qy,$y,eb,tb,nb,rb,ib;function ab(){return(ab=t((()=>{l(),u`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`,Iy=`
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
`,Ly=u`
  ${Iy}

  &[aria-disabled="true"] {
    text-decoration: none;
  }
`,Ry=u`
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

  ${Iy}

  /* Pressed state (hook-driven) */
  &[data-pressed="true"] {
    transform: translateY(var(--btn-pressed-offset)) scale(0.98);
    transition: var(--btn-press-transition);
  }

  /* Subtle loading hint */
  &[aria-busy="true"] {
    opacity: var(--btn-loading-opacity);
  }
`,zy=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--control-gap);
`,By=u`
  opacity: 0;
`,Vy=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`,Hy=u`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
`,Uy=u`
  height: var(--control-height-sm);
  padding: 0 var(--control-padding-x-sm);
  font-size: var(--font-size-sm);
`,Wy=u`
  height: var(--control-height-md);
  padding: 0 var(--control-padding-x-md);
  font-size: var(--font-size-md);
`,Gy=u`
  height: var(--control-height-lg);
  padding: 0 var(--control-padding-x-lg);
  font-size: var(--font-size-lg);
`,Ky=u`
  padding-inline: var(--btn-icon-padding-x-sm);
`,qy=u`
  padding-inline: var(--btn-icon-padding-x-md);
`,Jy=u`
  padding-inline: var(--btn-icon-padding-x-lg);
`,Yy=(e,t,n=`hover`)=>{let r=n===`hover`?`-hover`:``;return u`
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
  `},Xy=Yy(`primary`,`var(--btn-primary-bg)`),Zy=Yy(`secondary`,`var(--btn-secondary-bg)`),Qy=Yy(`tertiary`,`var(--btn-tertiary-bg-hover)`),$y=u`
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
`,eb=Yy(`primary`,`var(--btn-primary-bg)`,`resting`),tb=u`
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
`,nb={small:Uy,medium:Wy,large:Gy},rb={primary:Xy,secondary:Zy,tertiary:Qy,icon:tb,danger:$y,selected:eb},ib={small:Ky,medium:qy,large:Jy}})))()}function ob(e,t){let n=sb[e],r=cb[e],i=lb[t];return u`
    display: inline-block;
    width: ${n}px;
    height: ${n}px;
    border-radius: var(--radius-full);
    border: ${r}px solid ${i};
    border-right-color: transparent;
    animation: ${ub} var(--duration-spin) var(--ease-linear) infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: ${db} var(--duration-slow) steps(2, jump-none) infinite;
    }

    @media (forced-colors: active) {
      border-color: CanvasText;
      border-right-color: transparent;
    }
  `}var sb,cb,lb,ub,db;function fb(){return(fb=t((()=>{l(),sb={sm:16,md:20,lg:24},cb={sm:2,md:2,lg:3},lb={accent:`var(--color-green-600)`,current:`currentColor`,inverse:`var(--color-clear-50)`},ub=o`
  to {
    transform: rotate(360deg);
  }
`,db=o`
  0%, 49.99% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0.45;
  }
`})))()}var pb,mb,hb;function gb(){return(gb=t((()=>{l(),pb=e(r()),O(),ft(),Mt(),ce(),a(),ab(),fb(),mb=G(),hb=pb.forwardRef(function(e,t){let{variant:n=`primary`,size:r=`medium`,icon:a,iconPosition:o=`start`,isLoading:s=!1,loadingLabel:l,disabled:u=!1,children:d,onPress:f,onPressStart:p,onPressEnd:m,onPressChange:h,onPressUp:g,"aria-describedby":_,"aria-labelledby":v,"aria-label":y,formAction:b,onClick:x,onPointerDown:S,onPointerUp:C,onPointerCancel:w,onKeyDown:T,onKeyUp:E,onFocus:D,onBlur:O,className:k,domProps:A,name:j,"data-testid":M}=e,{t:N}=i(`shared-module`),P=l??N(`button.loading`),F=u||s,I=pb.useId(),L=pb.useId(),R=My(_,s?I:void 0),z=y,B=z?void 0:v??L,V=At(t),ee={isDisabled:F,...Y({onPress:f,onClick:x,onPressStart:p,onPressEnd:m,onPressChange:h,onPressUp:g,"aria-label":z,"aria-describedby":R,"aria-labelledby":B})},{buttonProps:te,isPressed:ne}=pt(ee,V),H=c(Fy({size:r,variant:n}),k),re=W(te,A??{},{onPointerDown:S,onPointerUp:C,onPointerCancel:w,onKeyDown:T,onKeyUp:E,onFocus:D,onBlur:O});return(0,mb.jsxs)(`button`,{...re,ref:V,className:H,"data-pressed":ne?`true`:`false`,"data-disabled-reason":s?`loading`:F?`disabled`:void 0,"data-testid":M,"aria-busy":s?`true`:void 0,formAction:b,disabled:F,type:e.type??`button`,name:j,children:[(0,mb.jsxs)(`span`,{className:c(zy,s?By:void 0),children:[a&&o===`start`?(0,mb.jsx)(`span`,{className:Vy,children:a}):null,(0,mb.jsx)(`span`,{id:B===L?L:void 0,children:d}),a&&o===`end`?(0,mb.jsx)(`span`,{className:Vy,children:a}):null]}),s?(0,mb.jsxs)(mb.Fragment,{children:[(0,mb.jsx)(`span`,{className:Hy,"aria-hidden":`true`,children:(0,mb.jsx)(`span`,{className:ob(`sm`,`current`)})}),(0,mb.jsx)(ge,{id:I,children:P})]}):null]})})})))()}function _b(e){if(typeof e!=`object`||!e)return e;if(e instanceof Date)return new Date(e);let t=typeof FileList<`u`&&e instanceof FileList;if(Jb&&(e instanceof Blob||t))return e;let n=Array.isArray(e);if(!n&&e.constructor!==Object)return e;let r=n?[]:Object.create(Object.getPrototypeOf(e));for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=_b(e[t]));return r}function vb(e,t,n=new WeakMap){if(e===t)return!0;if(px(e)||px(t))return Object.is(e,t);if(Hb(e)&&Hb(t))return Object.is(e.getTime(),t.getTime());let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;if(mx(e,r)||mx(t,i))return Object.is(e,t);if(!r.length&&Array.isArray(e)!==Array.isArray(t))return!1;let a=n.get(e);if(a&&a.has(t))return!0;if(a)a.add(t);else{let r=new WeakSet;r.add(t),n.set(e,r)}for(let i of r){let r=e[i];if(!(i in t))return!1;if(i!==`ref`){let e=t[i];if(Hb(r)&&Hb(e)||(Gb(r)||Array.isArray(r))&&(Gb(e)||Array.isArray(e))?!vb(r,e,n):!Object.is(r,e))return!1}}return!0}function yb(){let e=X.useRef(!1),t=X.useRef(void 0);return{resyncIfNeeded:X.useCallback((n,r,i)=>{if(n&&e.current){let e=r();vb(t.current,e)||i(e)}e.current=!0},[]),snapshot:X.useCallback((e,n)=>{e&&(t.current=_b(n()))},[])}}function bb(e){let t=lx(),{control:n=t,disabled:r,name:i,exact:a}=e||{},[o,s]=X.useState(()=>({...n._formState,defaultValues:n._defaultValues})),c=X.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),{resyncIfNeeded:l,snapshot:u}=yb();return dx(()=>{let e=()=>({...n._formState,defaultValues:n._defaultValues});l(!r,e,s);let t=n._subscribe({name:i,formState:c.current,exact:a,callback:e=>{!r&&s({...n._formState,...e,defaultValues:n._defaultValues})}});return()=>{t(),u(!r,e)}},[i,r,a,l,u]),X.useEffect(()=>{c.current.isValid&&n._setValid(!0)},[n]),X.useMemo(()=>ux(o,n,c.current,!1),[o,n])}function xb(e){let t=lx(),{control:n=t,name:r,defaultValue:i,disabled:a,exact:o,compute:s}=e||{},c=X.useRef(i),l=X.useRef(s),u=X.useRef(void 0),d=X.useRef(n),f=X.useRef(r);l.current=s;let[p,m]=X.useState(()=>{let e=n._getWatch(r,c.current);return l.current?l.current(e):e}),h=X.useCallback(e=>{let t=gx(r,n._names,e||n._formValues,!1,c.current);return l.current?l.current(t):t},[n._formValues,n._names,r]),g=X.useCallback(e=>{if(!a){let t=gx(r,n._names,e||n._formValues,!1,c.current);if(l.current){let e=l.current(t);vb(e,u.current)||(m(e),u.current=e)}else m(t)}},[n._formValues,n._names,a,r]),{resyncIfNeeded:_,snapshot:v}=yb(),y=X.useRef(g);y.current=g;let b=X.useRef(h);b.current=h,dx(()=>{d.current!==n||!vb(f.current,r)?(d.current=n,f.current=r,y.current()):_(!a,()=>b.current(),e=>{m(e),u.current=e});let e=n._subscribe({name:r,formState:{values:!0},exact:o,callback:e=>{y.current(e.values)}});return()=>{e(),v(!a,()=>b.current())}},[n,o,r,a,_,v]),X.useEffect(()=>n._removeUnmounted());let x=d.current!==n,S=f.current;return X.useMemo(()=>{if(a)return!1;let e=!x&&!vb(S,r);return x||e},[a,x,r,S])?h():p}function Sb(e){let t=lx(),{name:n,disabled:r,control:i=t,shouldUnregister:a,defaultValue:o,exact:s=!0}=e,c=qb(i._names.array,n),l=xb({control:i,name:n,defaultValue:X.useMemo(()=>Z(i._formValues,n,Z(i._defaultValues,n,o)),[i,n,o]),exact:s}),u=bb({control:i,name:n,exact:s}),d=X.useRef(e),f=X.useRef(null),p=X.useRef(i.register(n,{...e.rules,value:l,...ax(e.disabled)?{disabled:e.disabled}:{}}));d.current=e;let m=X.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!Z(u.errors,n)},isDirty:{enumerable:!0,get:()=>!!Z(u.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!Z(u.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!Z(u.validatingFields,n)},error:{enumerable:!0,get:()=>Z(u.errors,n)}}),[u,n]),h=X.useCallback(e=>{let t=Kb(e);return Z(i._fields,n)||(p.current=i.register(n,{...d.current.rules,value:t})),p.current.onChange({target:{value:Kb(e),name:n},type:Yb.CHANGE})},[n,i]),g=X.useCallback(()=>p.current.onBlur({target:{value:Z(i._formValues,n),name:n},type:Yb.BLUR}),[n,i._formValues]),_=X.useCallback(e=>{e&&(f.current={focus:()=>ox(e.focus)&&e.focus(),select:()=>ox(e.select)&&e.select(),setCustomValidity:t=>ox(e.setCustomValidity)&&e.setCustomValidity(t),reportValidity:()=>ox(e.reportValidity)&&e.reportValidity()});let t=Z(i._fields,n);t&&t._f&&e&&(t._f.ref=f.current)},[i._fields,n]),v=X.useMemo(()=>({name:n,value:l,...ax(r)||u.disabled?{disabled:u.disabled||r}:{},onChange:h,onBlur:g,ref:_}),[n,r,u.disabled,h,g,_,l]);return X.useEffect(()=>{let e=i._options.shouldUnregister||a;p.current=i.register(n,{...d.current.rules,...ax(d.current.disabled)?{disabled:d.current.disabled}:{}});let t=(e,t)=>{let n=Z(i._fields,e);n&&n._f&&(n._f.mount=t)};if(t(n,!0),e){let e=_b(Z(a?i._defaultValues:i._options.values||i._defaultValues,n,Z(i._options.defaultValues,n,d.current.defaultValue)));sx(i._defaultValues,n,e),nx(Z(i._formValues,n))&&sx(i._formValues,n,e)}if(!c&&i.register(n),f.current){let e=Z(i._fields,n);e&&e._f&&(e._f.ref=f.current)}return()=>{(c?e&&!i._state.action:e)?i.unregister(n):t(n,!1)}},[n,i,c,a]),X.useEffect(()=>{i._setDisabledField({disabled:r,name:n})},[r,n,i]),X.useMemo(()=>({field:v,formState:u,fieldState:m}),[v,u,m])}function Cb(e,t,n=`validate`){if(hx(e)||Array.isArray(e)&&e.every(hx)||ax(e)&&!e)return{type:n,message:hx(e)?e:``,ref:t}}function wb(e,t){let n=t.length-1,r=0;for(;r<n;){if(Ub(e)){e=void 0;break}e=e[t[r]],r++}return e}function Tb(e){for(let t in e)if(e.hasOwnProperty(t)&&!nx(e[t]))return!1;return!0}function Eb(e,t){if(hx(t)&&Object.prototype.hasOwnProperty.call(e,t))return delete e[t],e;let n=Array.isArray(t)?t:tx(t)?[t]:ix(t);if(n.some(e=>$b.includes(String(e))))return e;let r=n.length===1?e:wb(e,n),i=n.length-1,a=n[i];return r&&delete r[a],i!==0&&(Gb(r)&&xx(r)||Array.isArray(r)&&Tb(r))&&Eb(e,n.slice(0,-1)),e}function Db(e,t){let n={};for(let r in e)if(e.hasOwnProperty(r)){let i=e[r],a=t[r];if(i&&Gb(i)&&a){let e=Db(i,a);Gb(e)&&(n[r]=e)}else e[r]&&(n[r]=a)}return n}function Ob(e){return Array.isArray(e)||Gb(e)}function kb(e,t,n=``,r=[]){for(let i in e){let a=n?`${n}.${i}`:i,o=e[i];Ob(o)&&Ob(Z(t,a))?kb(o,t,a,r):r.push(a)}return r}function Ab(e){return Array.isArray(e)||Gb(e)&&!Hx(e)}function jb(e){return!!(e&&`_f`in e)}function Mb(e){return Array.isArray(e)?!e.some(e=>!nx(e)):!Object.keys(e).length}function Nb(e,t){Array.isArray(e)?e[t]=void 0:delete e[t]}function Pb(e,t={},n){for(let r in e){let i=e[r],a=n&&n[r];Ab(i)&&(!Array.isArray(i)||!jb(a))?(t[r]=Array.isArray(i)?[]:{},Pb(i,t[r],a),Mb(t[r])&&Nb(t,r)):nx(i)||(t[r]=!0)}return t}function Fb(e,t,n,r){n||=Pb(t,{},r);for(let i in e){let a=e[i],o=r&&r[i];Ab(a)&&(!Array.isArray(a)||!jb(o))?(nx(t)||px(n[i])?n[i]=Pb(a,Array.isArray(a)?[]:{},o):Fb(a,Ub(t)?{}:t[i],n[i],o),Mb(n[i])&&Nb(n,i)):vb(a,t[i])?Nb(n,i):n[i]=!0}return n}function Ib(e){let t=e.ref;return Vb(t)?t.files:Cx(t)?Ax(e.refs).value:zx(t)?[...t.selectedOptions].map(({value:e})=>e):Bb(t)?Ox(e.refs).value:Wx(t.value,e)}function Lb(e,t,n){let r=Z(e,n);if(r||tx(n))return{error:r,name:n};let i=n.split(`.`);for(;i.length;){let r=i.join(`.`),a=Z(t,r),o=Z(e,r);if(a&&!Array.isArray(a)&&n!==r)return{name:n};if(o&&o.type)return{name:r,error:o};if(o&&o.root&&o.root.type)return{name:`${r}.root`,error:o.root};i.pop()}return{name:n}}function Rb(e={}){let t={...eS,...e},n={..._b(rS),isLoading:ox(t.defaultValues),errors:t.errors||{},disabled:t.disabled||!1},r={},i=(Gb(t.defaultValues)||Gb(t.values))&&_b(t.defaultValues||t.values)||{},a=t.shouldUnregister?{}:_b(i),o={action:!1,actionArrayLengths:new Map,mount:!1,watch:!1,keepIsValid:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set,registerName:new Set},c={},l={},u=0,d=_x(t.mode),f=_x(t.reValidateMode),p={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={...p},h={...m},g={array:Ix(),state:Ix()},_=0,v=t.criteriaMode===Xb.all,y=(e,t)=>n=>{clearTimeout(l[e]),l[e]=setTimeout(t,n)},b=async e=>{if(!o.keepIsValid&&!t.disabled&&(m.isValid||h.isValid||e)){let e=++_,i;t.resolver?(i=xx((await j()).errors),e===_&&x()):i=await P({fields:r,onlyCheckValid:!0,eventType:Yb.VALID}),e===_&&i!==n.isValid&&g.state.next({isValid:i})}},x=(e,r)=>{!t.disabled&&(m.isValidating||m.validatingFields||h.isValidating||h.validatingFields)&&((e||s.mount).forEach(e=>{e&&(r?sx(n.validatingFields,e,r):Eb(n.validatingFields,e))}),g.state.next({validatingFields:n.validatingFields,isValidating:!xx(n.validatingFields)}))},S=()=>{n.dirtyFields=Fb(i,a,void 0,r)},C=(e,i=[],s,c,l=!0,u=!0)=>{if(c&&s&&!t.disabled){o.action=!0;let t=Z(r,e);if(o.actionArrayLengths.has(e)||o.actionArrayLengths.set(e,Array.isArray(t)?t.length:0),u&&Array.isArray(t)){let n=s(t,c.argA,c.argB);l&&sx(r,e,n)}let a=Z(n.errors,e);if(u&&Array.isArray(a)){let t=a.root,r=s(a,c.argA,c.argB)||a;t&&(r.root=t),l&&sx(n.errors,e,r),$x(n.errors,e)}let d=Z(n.touchedFields,e);if((m.touchedFields||h.touchedFields)&&u&&Array.isArray(d)){let t=s(d,c.argA,c.argB);l&&sx(n.touchedFields,e,t)}(m.dirtyFields||h.dirtyFields)&&S(),g.state.next({name:e,isDirty:I(e,i),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else sx(a,e,i)},w=(e,t)=>{sx(n.errors,e,t),n.errors={...n.errors},g.state.next({errors:n.errors})},T=e=>{n.errors=e,g.state.next({errors:n.errors,isValid:!1})},E=e=>{let t=tx(e)?[e]:ix(e),n=a,r=i;for(let e=0;e<t.length-1;e++){let i=t[e];if(n=Ub(n)?n:n[i],r=Ub(r)?r:r[i],n===null&&r!==null)return!0}return!1},D=e=>{if(!o.actionArrayLengths.size)return!1;let t=tx(e)?[e]:ix(e),n=a,r=``,i=-1,s=0;for(let e=0;e<t.length;e++){if(Ub(n))return!1;let a=t[e];if(r=r?`${r}.${a}`:a,Array.isArray(n)&&+a>=n.length)return i===-1?!1:e!==i||+a<s;o.actionArrayLengths.has(r)&&(i=e+1,s=o.actionArrayLengths.get(r)),n=n[a]}return!1},O=(t,c,l,u)=>{let d=Z(r,t);if(d){if(E(t)||D(t))return;let r=nx(Z(a,t)),f=Z(a,t,nx(l)?Z(i,t):l);nx(f)||u&&u.defaultChecked||c?sx(a,t,c?f:Ib(d._f)):z(t,f),o.mount&&!o.action&&(b(),r&&n.isDirty&&(m.isDirty||h.isDirty)&&(I()||(n.isDirty=!1,g.state.next({...n}))),e.shouldUnregister&&r&&!nx(Z(a,t))&&vx(t,s)&&(o.watch=!0))}},k=(e,o,s,c,l)=>{let u=!1,d=!1,f={name:e};if(!t.disabled||c===!0){if(!s||c){let t=vb(Z(i,e),o);(m.isDirty||h.isDirty)&&(d=n.isDirty,n.isDirty=f.isDirty=!t||I(),u=d!==f.isDirty),d=!!Z(n.dirtyFields,e),t===n.isDirty?t?Eb(n.dirtyFields,e):sx(n.dirtyFields,e,!0):nS(n.dirtyFields,Fb(i,a,void 0,r)),f.dirtyFields=n.dirtyFields,u||=(m.dirtyFields||h.dirtyFields)&&d!==!t}if(s){let t=Z(n.touchedFields,e);t||(sx(n.touchedFields,e,s),f.touchedFields=n.touchedFields,u||=(m.touchedFields||h.touchedFields)&&t!==s)}u&&l&&g.state.next(f)}return u?f:{}},A=(e,r,i,a)=>{let o=Z(n.errors,e),s=(m.isValid||h.isValid)&&ax(r)&&n.isValid!==r;if(t.delayError&&i?(c[e]=y(e,()=>w(e,i)),c[e](t.delayError)):(clearTimeout(l[e]),delete c[e],i?sx(n.errors,e,i):Eb(n.errors,e),n.errors={...n.errors}),(i?!vb(o,i):o)||!xx(a)||s){let t={...a,...s&&ax(r)?{isValid:r}:{},errors:n.errors,name:e};g.state.next(t)}},j=async e=>(x(e,!0),await t.resolver(a,t.context,Gx(e||s.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),M=async e=>{let{errors:t}=await j(e);if(x(e),e){for(let r of e){let e=Z(t,r);e?s.array.has(r)&&Gb(e)&&!Object.keys(e).some(e=>!Number.isNaN(Number(e)))?bx(n.errors,{[r]:e},r):sx(n.errors,r,e):Eb(n.errors,r)}n.errors={...n.errors}}else n.errors=t;return t},N=async({name:t,eventType:r})=>{if(e.validate){let i=await e.validate({formValues:a,formState:n,name:t,eventType:r});if(Gb(i))for(let e in i){let t=i[e];t&&se(`${tS}.${e}`,{message:hx(t.message)?t.message:``,type:t.type||Zb.validate})}else hx(i)||!i?se(tS,{message:i||``,type:Zb.validate}):oe(tS);return i}return!0},P=async({fields:r,onlyCheckValid:i,name:o,eventType:c,context:l={valid:!0,runRootValidation:!1}})=>{if(e.validate&&(l.runRootValidation=!0,!await N({name:o,eventType:c})&&(l.valid=!1,i)))return l.valid;for(let o in r){let u=r[o];if(u){let{_f:r,...d}=u;if(r){let o=s.array.has(r.name),c=u._f&&Jx(u._f),d=m.validatingFields||m.isValidating||h.validatingFields||h.isValidating;c&&d&&x([r.name],!0);let f=await Mx(u,s.disabled,a,v,t.shouldUseNativeValidation&&!i,o);if(c&&d&&x([r.name]),f[r.name]&&(l.valid=!1,i)||(!i&&(Z(f,r.name)?o?bx(n.errors,f,r.name):sx(n.errors,r.name,f[r.name]):Eb(n.errors,r.name)),e.shouldUseNativeValidation&&f[r.name]))break}!xx(d)&&await P({context:l,onlyCheckValid:i,fields:d,name:o,eventType:c})}}return l.valid},F=()=>{for(let e of s.unMount){let t=Z(r,e);t&&(t._f.refs?t._f.refs.every(e=>!Vx(e)):!Vx(t._f.ref))&&de(e)}s.unMount=new Set},I=(e,t)=>(e&&t&&sx(a,e,t),!vb(o.mount?a:i,i)),L=(e,t,n)=>gx(e,s,{...o.mount?a:nx(t)||hx(e)?i:t},n,t),R=e=>Px(Z(o.mount?a:i,e,t.shouldUnregister?Z(i,e,[]):[])),z=(e,t,n={},i=!1,o=!1,s=!1)=>{let c=Z(r,e),l=t;if(c){let n=c._f;n&&(!n.disabled&&sx(a,e,Wx(t,n)),l=Sx(n.ref)&&Ub(t)?``:t,zx(n.ref)?[...n.ref.options].forEach(e=>e.selected=l.includes(e.value)):n.refs?Bb(n.ref)?n.refs.forEach(e=>{(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(l)?!!l.find(t=>t===e.value):l===e.value||!!l)}):n.refs.forEach(e=>e.checked=e.value===l):Vb(n.ref)?n.ref.value=``:(n.ref.value=l,!n.ref.type&&!o&&!s&&g.state.next({name:e,values:i?a:_b(a)})))}(n.shouldDirty||n.shouldTouch)&&k(e,l,n.shouldTouch,n.shouldDirty,!o),n.shouldValidate&&re(e,{delayError:n.delayError})},B=(e,t,n,i=!1,o=!1,c=!1)=>{s.array.has(e)&&g.array.next({name:e,values:i?a:_b(a)});for(let a in t){if(!t.hasOwnProperty(a))return;let l=t[a],u=e+`.`+a,d=Z(r,u);(s.array.has(e)||Gb(l)||d&&!d._f)&&!Hb(l)?B(u,l,n,i,o,c):z(u,l,n,i,o,c)}},V=(e,t,i,c,l=!1)=>{let u=Z(r,e),d=s.array.has(e),f=c?t:_b(t),p=vb(Z(a,e),f);if(p||sx(a,e,f),d)g.array.next({name:e,values:c?a:_b(a)}),(m.isDirty||m.dirtyFields||h.isDirty||h.dirtyFields)&&i.shouldDirty&&(S(),l||g.state.next({name:e,dirtyFields:n.dirtyFields,isDirty:I(e,f)}));else{let t=Array.isArray(f)&&!f.length||xx(f),n=!p&&!l;!u||u._f||Ub(f)||t?z(e,f,i,c,l,n):B(e,f,i,c,l,n)}if(!p&&!l){let t=vx(e,s),r=c?a:_b(a);if(g.state.next({...t&&n,name:o.mount||t?e:void 0,values:r}),!d)for(let t of Ux(s.array,e))g.state.next({name:t,values:r})}},ee=(e,t,n={})=>V(e,t,n,!1),te=(e,t={})=>{let r=ox(e)?e(a):e;if(!vb(a,r)){a={...a,...r};for(let e of s.mount)Rx(r,e)&&V(e,Z(r,e),t,!0,!0);g.state.next({...n,name:void 0,type:void 0,...u?{values:a}:{}}),t.shouldValidate&&b()}},ne=async i=>{o.mount=!0;let l=i.target,p=l.name,_=!0,y=Z(r,p),S=e=>{_=Number.isNaN(e)||Hb(e)&&isNaN(e.getTime())||vb(e,Z(a,p,e))};if(y){let o,C,w=l.type?Ib(y._f):Kb(i),T=i.type===Yb.BLUR||i.type===Yb.FOCUS_OUT,E=!Yx(y._f)&&!e.validate&&!t.resolver&&!Z(n.errors,p)&&!y._f.deps,D=E||Qx(T,Z(n.touchedFields,p),n.isSubmitted,f,d),O=vx(p,s,T);if(sx(a,p,w),T){if(!l||!l.readOnly){y._f.onBlur&&y._f.onBlur(i);let e=c[p];e&&e(0)}}else y._f.onChange&&y._f.onChange(i);let M=k(p,w,T),F=!xx(M)||O;if(!T&&g.state.next({name:p,type:i.type,...u?{values:_b(a)}:{}}),D)return(!E||!n.isValid)&&(m.isValid||h.isValid)&&(t.mode===`onBlur`?T&&b():T||b()),F&&g.state.next({name:p,...O?{}:M});if(!t.resolver&&e.validate&&await N({name:p,eventType:i.type}),!T&&O&&g.state.next({...n}),t.resolver){let{errors:e}=await j([p]);if(x([p]),S(w),!_){!xx(M)&&g.state.next(M);return}let t=Lb(n.errors,r,p),i=Lb(e,r,t.name||p);o=i.error,p=i.name,C=xx(e)}else x([p],!0),o=(await Mx(y,s.disabled,a,v,t.shouldUseNativeValidation))[p],x([p]),S(w),_&&(o?C=!1:(m.isValid||h.isValid)&&(C=await P({fields:r,onlyCheckValid:!0,name:p,eventType:i.type})));_&&(y._f.deps&&(!Array.isArray(y._f.deps)||y._f.deps.length>0)&&re(y._f.deps),A(p,C,o,M))}},H=(e,t)=>{if(Z(n.errors,t)&&e.focus)return e.focus(),1},re=async(e,i={})=>{let a,o,u=Nx(e);if(t.resolver){let t=await M(nx(e)?e:u);a=xx(t),o=e?!u.some(e=>Z(t,e)):a}else e?(o=(await Promise.all(u.map(async e=>{let t=Z(r,e);return await P({fields:t&&t._f?{[e]:t}:t,eventType:Yb.TRIGGER})}))).every(Boolean),!(!o&&!n.isValid)&&b()):o=a=await P({fields:r,name:e,eventType:Yb.TRIGGER});if(i.delayError&&t.delayError&&hx(e)){let r=Z(n.errors,e);r?(Eb(n.errors,e),c[e]=y(e,()=>w(e,r)),c[e](t.delayError)):(clearTimeout(l[e]),delete c[e])}return g.state.next({...!hx(e)||(m.isValid||h.isValid)&&a!==n.isValid?{}:{name:e},...t.resolver||!e?{isValid:a}:{},errors:n.errors}),i.shouldFocus&&!o&&yx(r,H,e?u:s.mount),o},ie=(e,t)=>{let r={...o.mount?a:i};return t&&(r=Db(t.dirtyFields?n.dirtyFields:n.touchedFields,r)),nx(e)?r:hx(e)?Z(r,e):e.map(e=>Z(r,e))},U=e=>nx(e)?{...n.errors}:hx(e)?Z(n.errors,e):e.map(e=>Z(n.errors,e)),ae=(e,t)=>{let r=t||n,i=Z(r.errors,e);return{invalid:!!i,isDirty:!!Z(r.dirtyFields,e),error:i,isValidating:!!Z(n.validatingFields,e),isTouched:!!Z(r.touchedFields,e)}},oe=e=>{let t=e?Nx(e):void 0;t?.forEach(e=>Eb(n.errors,e)),t?t.forEach(e=>{g.state.next({name:e,errors:n.errors})}):(n.errors={},g.state.next({errors:n.errors}))},se=(e,t,i)=>{let a=(Z(r,e,{_f:{}})._f||{}).ref,{ref:o,message:s,type:c,...l}=Z(n.errors,e)||{};sx(n.errors,e,{...l,...t,ref:a}),g.state.next({name:e,errors:n.errors,isValid:!1}),i&&i.shouldFocus&&a&&a.focus&&a.focus()},ce=(e,t)=>{if(ox(e)){u++;let{unsubscribe:n}=g.state.subscribe({next:n=>`values`in n&&e(n.values||L(void 0,t),n)}),r=!1;return{unsubscribe:()=>{r||(r=!0,u--,n())}}}return L(e,t,!0)},le=e=>{let t=!!e.formState?.values;t&&u++;let{unsubscribe:r}=g.state.subscribe({next:t=>{if(Zx(e.name,t.name,e.exact)&&Xx(t,e.formState||m,be,e.reRenderRoot)){let r={...a};e.callback({values:r,...n,...t,defaultValues:i})}}});if(!t)return r;let o=!1;return()=>{o||(o=!0,u--,r())}},ue=e=>(o.mount=!0,h={...h,...e.formState},le({...e,formState:{...p,...e.formState}})),de=(e,o={})=>{for(let c of e?Nx(e):s.mount)s.mount.delete(c),s.array.delete(c),o.keepValue||(Eb(r,c),Eb(a,c)),!o.keepError&&Eb(n.errors,c),!o.keepDirty&&Eb(n.dirtyFields,c),!o.keepTouched&&Eb(n.touchedFields,c),!o.keepIsValidating&&Eb(n.validatingFields,c),!t.shouldUnregister&&!o.keepDefaultValue&&Eb(i,c);u&&g.state.next({values:_b(a)}),g.state.next({...n,...o.keepDirty?{}:{isDirty:I()}}),!o.keepIsValid&&b()},fe=({disabled:e,name:t})=>{if(ax(e)&&o.mount||e||s.disabled.has(t)){let n=s.disabled.has(t)!==!!e;e?s.disabled.add(t):s.disabled.delete(t),n&&o.mount&&!o.action&&b()}},pe=(e,n={})=>{let a=Z(r,e),c=ax(n.disabled)||ax(t.disabled),l=!s.registerName.has(e)&&a&&a._f&&!a._f.mount;return sx(r,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:!0,...n}}),s.mount.add(e),a&&!l?fe({disabled:ax(n.disabled)?n.disabled:t.disabled,name:e}):O(e,!0,n.value),{...c?{disabled:n.disabled||t.disabled}:{},...t.progressive?{required:!!n.required,min:Kx(n.min),max:Kx(n.max),minLength:Kx(n.minLength),maxLength:Kx(n.maxLength),pattern:Kx(n.pattern)}:{},name:e,onChange:ne,onBlur:ne,ref:c=>{if(c){s.registerName.add(e),pe(e,n),s.registerName.delete(e),a=Z(r,e);let t=nx(c.value)&&c.querySelectorAll&&c.querySelectorAll(`input,select,textarea`)[0]||c,o=Bx(t),l=a._f.refs||[];if(o?l.find(e=>e===t):t===a._f.ref)return;let u={...a._f};o?(u.refs=[...l.filter(Vx),t,...Array.isArray(Z(i,e))?[{}]:[]],u.ref={type:t.type,name:e}):(u.ref=t,delete u.refs),sx(r,e,{_f:u}),O(e,!1,void 0,t)}else a=Z(r,e,{}),a._f&&(a._f.mount=!1),(t.shouldUnregister||n.shouldUnregister)&&!(qb(s.array,e)&&o.action)&&s.unMount.add(e)}}},me=()=>t.shouldFocusError&&!t.shouldUseNativeValidation&&yx(r,H,s.mount),he=e=>{ax(e)&&(g.state.next({disabled:e}),yx(r,(t,n)=>{let i=Z(r,n);i&&(t.disabled=i._f.disabled||e,Array.isArray(i._f.refs)&&i._f.refs.forEach(t=>{t.disabled=i._f.disabled||e}))},0,!1))},ge=(e,i)=>async o=>{let c,l;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let u=_b(a);if(g.state.next({isSubmitting:!0}),t.resolver){let{errors:e,values:t}=await j();x(),n.errors=e,u=_b(t)}else await P({fields:r,eventType:Yb.SUBMIT});if(s.disabled.size)for(let e of s.disabled)Eb(u,e);if(Eb(n.errors,Qb),xx(n.errors)){g.state.next({errors:{}});try{c=await e(u,o)}catch(e){l=e}}else i&&await i({...n.errors},o),me(),setTimeout(me);if(g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:xx(n.errors)&&!l,submitCount:n.submitCount+1,errors:n.errors}),l)throw l;return c},_e=(e,t={})=>{Z(r,e)&&(nx(t.defaultValue)?ee(e,_b(Z(i,e))):(ee(e,t.defaultValue),sx(i,e,_b(t.defaultValue))),t.keepTouched||Eb(n.touchedFields,e),t.keepDirty||(Eb(n.dirtyFields,e),n.isDirty=t.defaultValue?I(e,_b(Z(i,e))):I()),t.keepError||(Eb(n.errors,e),m.isValid&&b()),g.state.next({...n}))},ve=(e,c={})=>{let l=e?_b(e):i,u=_b(l),d=xx(e),f=u,p=r;if(c.keepDefaultValues||(i=l),!c.keepValues){if(c.keepDirtyValues){let e=new Set([...s.mount,...kb(Fb(i,a,void 0,p),n.dirtyFields)]);for(let t of e){let e=Z(n.dirtyFields,t),r=Z(a,t),i=Z(f,t);e&&!nx(r)?sx(f,t,r):!e&&!nx(i)&&ee(t,i)}}else{if(Jb&&nx(e))for(let e of s.mount){let t=Z(r,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(Sx(e)){let t=e.closest(`form`);if(t){t.reset();break}}}}if(c.keepFieldsRef)for(let e of s.mount)ee(e,Z(f,e));else r={}}if(t.shouldUnregister){if(a=c.keepDefaultValues?_b(i):{},c.keepFieldsRef)for(let e of s.mount)sx(a,e,Z(f,e))}else a=_b(f);g.array.next({values:{...f}}),g.state.next({name:void 0,type:void 0,values:{...f}})}s={mount:c.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,registerName:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:``},o.mount=!m.isValid||!!c.keepIsValid||!!c.keepDirtyValues||!t.shouldUnregister&&!xx(f),o.watch=!!t.shouldUnregister,o.keepIsValid=!!c.keepIsValid,o.action=!1,o.actionArrayLengths.clear(),c.keepErrors||(n.errors={}),g.state.next({submitCount:c.keepSubmitCount?n.submitCount:0,isDirty:d?!1:c.keepDirty?n.isDirty:c.keepValues?I():!!(c.keepDefaultValues&&!vb(e,i)),isSubmitted:c.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:d?{}:c.keepDirtyValues?c.keepDefaultValues&&a?Fb(i,a,void 0,p):n.dirtyFields:c.keepDefaultValues&&e?Fb(i,e,void 0,p):c.keepDirty?n.dirtyFields:{},touchedFields:c.keepTouched?n.touchedFields:{},errors:c.keepErrors?n.errors:{},isSubmitSuccessful:c.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:i})},ye=(e,n)=>ve(ox(e)?e(a):e,{...t.resetOptions,...n}),W=(e,t={})=>{let n=Z(r,e),i=n&&n._f;if(i){let e=i.refs?i.refs[0]:i.ref;e.focus&&setTimeout(()=>{e.focus(),t.shouldSelect&&ox(e.select)&&e.select()})}},be=e=>{let{name:t,type:r,values:i,...a}=e;n={...n,...a}};g.state.subscribe({next:be});let xe={control:{register:pe,unregister:de,getFieldState:ae,handleSubmit:ge,setError:se,_subscribe:le,_runSchema:j,_updateIsValidating:x,_focusError:me,_getWatch:L,_getDirty:I,_setValid:b,_setFieldArray:C,_setDisabledField:fe,_setErrors:T,_getFieldArray:R,_reset:ve,_resetDefaultValues:()=>ox(t.defaultValues)&&t.defaultValues().then(e=>{ye(e,t.resetOptions),g.state.next({isLoading:!1})}),_removeUnmounted:F,_disableForm:he,_subjects:g,_proxyFormState:m,get _fields(){return r},get _formValues(){return a},get _state(){return o},set _state(e){o=e},get _defaultValues(){return i},get _names(){return s},set _names(e){s=e},get _formState(){return n},get _options(){return t},set _options(e){t={...t,...e},d=_x(t.mode),f=_x(t.reValidateMode)}},subscribe:ue,trigger:re,register:pe,handleSubmit:ge,watch:ce,setValue:ee,setValues:te,getValues:ie,getErrors:U,reset:ye,resetField:_e,resetDefaultValues:(e,t={})=>{if(i=_b(e),!t.keepDirty){let e=Fb(i,a,void 0,r);n.dirtyFields=e,n.isDirty=!xx(e)}t.keepIsValid||b(),g.state.next({...n,defaultValues:i})},clearErrors:oe,unregister:de,setError:se,setFocus:W,getFieldState:ae};return{...xe,formControl:xe}}function zb(e={}){let t=X.useRef(void 0),n=X.useRef(void 0),r=X.useRef(e.formControl),[i,a]=X.useState(()=>({..._b(rS),isLoading:ox(e.defaultValues),errors:e.errors||{},disabled:e.disabled||!1,defaultValues:ox(e.defaultValues)?void 0:e.defaultValues}));if(!t.current||e.formControl&&r.current!==e.formControl){if(r.current=e.formControl,e.formControl)t.current={...e.formControl,formState:i},e.defaultValues&&!ox(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{let{formControl:n,...r}=Rb(e);t.current={...r,formState:i}}}let o=t.current.control;o._options=e;let{resyncIfNeeded:s,snapshot:c}=yb();return dx(()=>{let e=()=>({...o._formState,defaultValues:o._defaultValues});s(!0,e,a);let t=o._subscribe({formState:o._proxyFormState,callback:()=>a({...o._formState,defaultValues:o._defaultValues}),reRenderRoot:!0});return a(e=>({...e,isReady:!0})),o._formState.isReady=!0,()=>{t(),c(!0,e)}},[o,s,c]),X.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),X.useEffect(()=>{e.mode&&(o._options.mode=e.mode),e.reValidateMode&&(o._options.reValidateMode=e.reValidateMode)},[o,e.mode,e.reValidateMode]),X.useEffect(()=>{e.errors&&(o._setErrors(e.errors),o._focusError())},[o,e.errors]),X.useEffect(()=>{e.shouldUnregister&&o._subjects.state.next({values:o._getWatch()})},[o,e.shouldUnregister]),X.useEffect(()=>{if(o._proxyFormState.isDirty){let e=o._getDirty();e!==i.isDirty&&o._subjects.state.next({isDirty:e})}},[o,i.isDirty]),X.useEffect(()=>{e.values&&!vb(e.values,n.current)?(o._reset(e.values,{keepFieldsRef:!0,...o._options.resetOptions}),o._options.resetOptions?.keepIsValid||o._setValid(),n.current=e.values,a(e=>({...e}))):o._resetDefaultValues()},[o,e.values]),X.useEffect(()=>{o._state.mount||(o._setValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=X.useMemo(()=>ux(i,o),[o,i]),t.current}var X,Bb,Vb,Hb,Ub,Wb,Gb,Kb,qb,Jb,Yb,Xb,Zb,Qb,$b,ex,tx,nx,rx,ix,Z,ax,ox,sx,cx,lx,ux,dx,fx,px,mx,hx,gx,_x,vx,yx,bx,xx,Sx,Cx,wx,Tx,Ex,Dx,Ox,kx,Ax,jx,Mx,Nx,Px,Fx,Ix,Lx,Rx,zx,Bx,Vx,Hx,Ux,Wx,Gx,Kx,qx,Jx,Yx,Xx,Zx,Qx,$x,eS,tS,nS,rS;function iS(){return(iS=t((()=>{X=e(r(),1),Bb=e=>e.type===`checkbox`,Vb=e=>e.type===`file`,Hb=e=>e instanceof Date,Ub=e=>e==null,Wb=e=>typeof e==`object`,Gb=e=>!Ub(e)&&!Array.isArray(e)&&Wb(e)&&!Hb(e),Kb=e=>Gb(e)&&e.target?Bb(e.target)?e.target.checked:Vb(e.target)?e.target.files:e.target.value:e,qb=(e,t)=>t.split(`.`).some((t,n,r)=>!isNaN(Number(t))&&e.has(r.slice(0,n).join(`.`))),Jb=typeof window<`u`&&window.HTMLElement!==void 0&&typeof document<`u`,Yb={BLUR:`blur`,FOCUS_OUT:`focusout`,CHANGE:`change`,SUBMIT:`submit`,TRIGGER:`trigger`,VALID:`valid`},Xb={onBlur:`onBlur`,onChange:`onChange`,onSubmit:`onSubmit`,onTouched:`onTouched`,all:`all`},Zb={max:`max`,min:`min`,maxLength:`maxLength`,minLength:`minLength`,pattern:`pattern`,required:`required`,validate:`validate`},Qb=`root`,$b=[`__proto__`,`constructor`,`prototype`],ex=/^\w*$/,tx=e=>ex.test(e),nx=e=>e===void 0,rx=/[.[\]'"]/,ix=e=>e.split(rx).filter(Boolean),Z=(e,t,n)=>{if(!t||!Gb(e))return n;let r=tx(t)?[t]:ix(t);if(r.some(e=>$b.includes(e)))return n;let i=r.reduce((e,t)=>Ub(e)?void 0:e[t],e);return nx(i)||i===e?nx(e[t])?n:e[t]:i},ax=e=>typeof e==`boolean`,ox=e=>typeof e==`function`,sx=(e,t,n)=>{let r=-1,i=tx(t)?[t]:ix(t),a=i.length,o=a-1;for(;++r<a;){let t=i[r],a=n;if(r!==o){let n=e[t];a=Gb(n)||Array.isArray(n)?n:isNaN(+i[r+1])?{}:[]}if($b.includes(t))return;e[t]=a,e=e[t]}},cx=X.createContext(null),cx.displayName=`HookFormControlContext`,lx=()=>X.useContext(cx),ux=(e,t,n,r=!0)=>{let i={};for(let a in e)Object.defineProperty(i,a,{get:()=>{let i=a;return t._proxyFormState[i]!==Xb.all&&(t._proxyFormState[i]=!r||Xb.all),n&&(n[i]=!0),e[i]}});return i},dx=Jb?X.useLayoutEffect:X.useEffect,fx=e=>{let t=e.constructor&&e.constructor.prototype;return Gb(t)&&t.hasOwnProperty(`isPrototypeOf`)},px=e=>Ub(e)||!Wb(e),mx=(e,t)=>t.length===0&&!Array.isArray(e)&&!fx(e),hx=e=>typeof e==`string`,gx=(e,t,n,r,i)=>hx(e)?(r&&t.watch.add(e),Z(n,e,i)):Array.isArray(e)?e.map(e=>(r&&t.watch.add(e),Z(n,e))):(r&&(t.watchAll=!0),n),_x=e=>({isOnSubmit:!e||e===Xb.onSubmit,isOnBlur:e===Xb.onBlur,isOnChange:e===Xb.onChange,isOnAll:e===Xb.all,isOnTouch:e===Xb.onTouched}),vx=(e,t,n)=>{if(n)return!1;if(t.watchAll||t.watch.has(e))return!0;for(let n of t.watch)if(e.startsWith(n)&&e.charAt(n.length)===`.`)return!0;return!1},yx=(e,t,n,r)=>{for(let i of n||Object.keys(e)){if(i===`_f`)continue;let a=n?Z(e,i):e[i];if(a){let{_f:e}=a;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],i)&&!r||e.ref&&t(e.ref,e.name)&&!r)return!0;if(yx(a,t))break}else if((Gb(a)||Array.isArray(a))&&yx(a,t))break}}},bx=(e,t,n)=>{let r=Z(e,n),i=Array.isArray(r)?r:[];return sx(i,Qb,t[n]),sx(e,n,i),e},xx=e=>Gb(e)&&!Object.keys(e).length,Sx=e=>{if(!Jb)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Cx=e=>e.type===`radio`,wx=e=>e instanceof RegExp,Tx=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Ex={value:!1,isValid:!1},Dx={value:!0,isValid:!0},Ox=e=>{if(!Array.isArray(e))return Ex;if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}let t=e[0];return!t||!t.checked||t.disabled?Ex:!t.attributes||!(`value`in t.attributes)||nx(t.value)||t.value===``?Dx:{value:t.value,isValid:!0}},kx={isValid:!1,value:null},Ax=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,kx):kx,jx=e=>Gb(e)&&!wx(e)?e:{value:e,message:``},Mx=async(e,t,n,r,i,a)=>{let{ref:o,refs:s,required:c,maxLength:l,minLength:u,min:d,max:f,pattern:p,validate:m,name:h,valueAsNumber:g,mount:_}=e._f,v=Z(n,h);if(!_||t.has(h))return{};let y=s?s[0]:o,b=e=>{if(i&&y.reportValidity){let t=ax(e)?``:e||``;s?s.forEach(e=>e.setCustomValidity(t)):y.setCustomValidity(t),y.reportValidity()}},x={},S=Cx(o),C=Bb(o),w=S||C,T=(g||Vb(o))&&nx(o.value)&&nx(v)||Sx(o)&&o.value===``||v===``||Array.isArray(v)&&!v.length,E=Tx.bind(null,h,r,x),D=(e,t,n,r=Zb.maxLength,i=Zb.minLength)=>{let a=e?t:n;x[h]={type:e?r:i,message:a,ref:o,...E(e?r:i,a)}};if(a?!Array.isArray(v)||!v.length:c&&(!w&&(T||Ub(v))||ax(v)&&!v||C&&!Ox(s).isValid||S&&!Ax(s).isValid)){let{value:e,message:t}=hx(c)?{value:!!c,message:c}:jx(c);if(e&&(x[h]={type:Zb.required,message:t,ref:y,...E(Zb.required,t)},!r))return b(t),x}if(!T&&(!Ub(d)||!Ub(f))){let e,t,n=jx(f),i=jx(d);if(!Ub(v)&&!Hb(v)&&!isNaN(v)){let r=o.valueAsNumber||v&&+v;Ub(n.value)||(e=r>n.value),Ub(i.value)||(t=r<i.value)}else{let r=o.valueAsDate||new Date(v),a=e=>new Date(new Date().toDateString()+` `+e),s=o.type==`time`,c=o.type==`week`;hx(n.value)&&v&&(e=s?a(v)>a(n.value):c?v>n.value:r>new Date(n.value)),hx(i.value)&&v&&(t=s?a(v)<a(i.value):c?v<i.value:r<new Date(i.value))}if((e||t)&&(D(!!e,n.message,i.message,Zb.max,Zb.min),!r))return b(x[h].message),x}if((l||u)&&!T&&(hx(v)||a&&Array.isArray(v))){let e=jx(l),t=jx(u),n=!Ub(e.value)&&v.length>+e.value,i=!Ub(t.value)&&v.length<+t.value;if((n||i)&&(D(n,e.message,t.message),!r))return b(x[h].message),x}if(p&&!T&&hx(v)){let{value:e,message:t}=jx(p);if(wx(e)&&!v.match(e)&&(x[h]={type:Zb.pattern,message:t,ref:o,...E(Zb.pattern,t)},!r))return b(t),x}if(m){if(ox(m)){let e=Cb(await m(v,n),y);if(e&&(x[h]={...e,...E(Zb.validate,e.message)},!r))return b(e.message),x}else if(Gb(m)){let e={};for(let t in m){if(!xx(e)&&!r)break;let i=Cb(await m[t](v,n),y,t);i&&(e={...i,...E(t,i.message)},b(i.message),r&&(x[h]=e))}if(!xx(e)&&(x[h]={ref:y,...e},!r))return x}}let O=x[h];return b(!O||O.message),x},Nx=e=>Array.isArray(e)?e:[e],Px=e=>Array.isArray(e)?e.filter(Boolean):[],Fx=X.createContext(null),Fx.displayName=`HookFormContext`,Ix=()=>{let e=[];return{get observers(){return e},next:t=>{for(let n of e)n.next&&n.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}},Lx=(e,t)=>e!==null&&Wb(e)&&Object.prototype.hasOwnProperty.call(e,t),Rx=(e,t)=>{if(!t)return!1;let n=e;for(let r of tx(t)?[t]:ix(t)){if(!Lx(n,r))return Lx(e,t);n=n[r]}return!0},zx=e=>e.type===`select-multiple`,Bx=e=>Cx(e)||Bb(e),Vx=e=>Sx(e)&&e.isConnected,Hx=e=>{for(let t in e)if(ox(e[t]))return!0;return!1},Ux=(e,t)=>{let n=t.split(`.`),r=[],i=n[0];for(let t=1;t<n.length;i+=`.`+n[t++])!isNaN(+n[t])&&e.has(i)&&r.push(`${i}.${n[t]}`);return r},Wx=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>nx(e)?e:t?e===``?NaN:e&&+e:n&&hx(e)?new Date(e):r?r(e):e,Gx=(e,t,n,r)=>{let i={};for(let n of e){let e=Z(t,n);e&&sx(i,n,e._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Kx=e=>nx(e)?e:wx(e)?e.source:Gb(e)?wx(e.value)?e.value.source:e.value:e,qx=`AsyncFunction`,Jx=e=>{if(!e||!e.validate)return!1;if(ox(e.validate))return e.validate.constructor.name===qx;if(Gb(e.validate)){for(let t in e.validate)if(e.validate[t].constructor.name===qx)return!0}return!1},Yx=e=>e.mount&&(e.required||!nx(e.required)&&e.required!==!1||!nx(e.min)||!nx(e.max)||!nx(e.maxLength)||!nx(e.minLength)||e.pattern||e.validate),Xx=(e,t,n,r)=>{n(e);let i=Object.keys(e).filter(e=>e!==`name`);return!i.length||r&&i.length>=Object.keys(t).length||i.find(e=>t[e]===(!r||Xb.all))},Zx=(e,t,n)=>!e||!t||e===t||Nx(e).some(e=>e&&(n?e===t||e.startsWith(t+`.`):e.startsWith(t)||t.startsWith(e))),Qx=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:!(n?r.isOnChange:i.isOnChange)||e,$x=(e,t)=>{let n=Z(e,t);!Px(n).length&&!(n!=null&&n.root)&&Eb(e,t)},eS={mode:Xb.onSubmit,reValidateMode:Xb.onChange,shouldFocusError:!0},tS=`form`,nS=(e,t)=>{for(let n in e)n in t||delete e[n];Object.assign(e,t)},rS={submitCount:0,isDirty:!1,isReady:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{}}})))()}function aS(e){let{name:t,control:n,rules:r,errorMessage:i}=e,{field:a,fieldState:o}=Sb({name:t,control:n,...Y({rules:r})}),s=i??o.error?.message;return{field:a,fieldState:o,resolvedError:s,isInvalid:o.invalid||!!s}}function oS(){return(oS=t((()=>{iS()})))()}function sS(e,t){if(e){if(typeof e==`function`){e(t);return}e.current=t}}function cS(...e){return t=>{e.forEach(e=>{sS(e,t)})}}function lS(e,t){return e?e.querySelector(t):null}function uS({disabled:e,readOnly:t,required:n,isDisabled:r,isReadOnly:i,isRequired:a,isInvalid:o,ariaInvalid:s,errorMessage:c}){return{isDisabled:r??e??!1,isReadOnly:i??t??!1,isRequired:a??n??!1,isInvalid:o??(s===void 0?void 0:s===!0||s===`true`||s===`grammar`||s===`spelling`)??!!c}}function dS({ariaDescribedBy:e,descriptionId:t,noticeId:n,errorMessageId:r,hasDescription:i,hasNotice:a,hasErrorMessage:o}){return My(e,i?t:void 0,a?n:void 0,o?r:void 0)}function fS(e){return e==null?``:typeof e==`string`?e:String(e)}function pS(){return(pS=t((()=>{})))()}function mS(e){switch(e){case`sm`:return u`
        font-size: var(--font-size-sm);
      `;case`lg`:return u`
        font-size: var(--font-size-lg);
      `;default:return u`
        font-size: var(--font-size-md);
      `}}function hS(e,t){return c(TS,t===`radio`?DS:ES,mS(e))}var gS,_S,vS,yS,bS,xS,SS,CS,wS,TS,ES,DS,OS,kS,AS,jS,MS,NS;function PS(){return(PS=t((()=>{l(),gS=u`
  display: grid;
  gap: var(--space-2);
`,_S=u`
  display: inline-grid;
  width: auto;
`,vS=u`
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
`,yS=u`
  align-items: center;
`,bS=u`
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: inherit;
`,xS=u`
  display: grid;
  gap: var(--space-1);
`,SS=u`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.35;
  min-width: 0;
  overflow-wrap: anywhere;
`,CS=u`
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
`,wS=u`
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
`,TS=u`
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
`,ES=u`
  border-radius: 6px;
`,DS=u`
  border-radius: 999px;
`,OS=u`
  input:checked + & {
    background: var(--switch-track-on);
    border-color: var(--switch-track-on);
  }

  input:checked + & > span {
    opacity: 1;
  }
`,kS=u`
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0;
  transition: opacity 0.18s ease;
`,AS=u`
  opacity: 1;
`,jS=u`
  width: 11px;
  height: 6px;
  border-left: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: translate(-50%, -70%) rotate(-45deg);
`,MS=u`
  width: 10px;
  height: 2px;
  border-radius: 999px;
  background: currentColor;
  transform: translate(-50%, -50%);
`,NS=u`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: currentColor;
  transform: translate(-50%, -50%);
`})))()}var FS,IS,LS,RS,zS,BS,VS,HS,US;function WS(){return(WS=t((()=>{l(),FS=u`
  display: grid;
  gap: var(--space-2);
  width: 100%;
  min-width: 0;
`,IS=u`
  color: var(--field-label);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.35;
`,LS=u`
  color: var(--field-error);
  margin-left: var(--space-1);
`,RS=u`
  position: relative;
`,zS=u`
  position: relative;
`,BS=u`
  display: grid;
  gap: var(--space-1);
  min-width: 0;
`,VS=u`
  color: var(--field-description);
  font-size: 0.875rem;
  line-height: 1.45;
  max-width: 100%;
  overflow-wrap: anywhere;
`,HS=u`
  color: var(--field-notice);
  font-size: 0.875rem;
  line-height: 1.45;
  max-width: 100%;
  overflow-wrap: anywhere;
`,US=u`
  color: var(--field-error);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.45;
  max-width: 100%;
  overflow-wrap: anywhere;
`})))()}function GS(e){return`@media (max-width: ${KS[e]-.02}px)`}var KS;function qS(){return(qS=t((()=>{KS={xs:480,sm:576,md:768,lg:992,xl:1200}})))()}function JS(e){return u`
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
  `}function YS(e){return`${hC} ${gC[e]}`}function XS(e){return u`
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
  `}function ZS(e){return`${hC} ${_C[e]}`}function QS(e){return u`
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
  `}function $S(e){return`${yC} ${bC[e]}`}function eC(e){return u`
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
  `}function tC(e){return`${xC} ${SC[e]}`}function nC(e){return`${xC} ${SC[e]} ${CC}`}function rC(e){return u`
    font-size: ${e.messageFontSize};
  `}function iC(e,t){return`${jC} ${PC[e]} ${t?NC:MC}`}function aC(e){return u`
    min-height: ${e.controlHeight};
    padding-top: ${e.inputPaddingYRest};
    padding-bottom: ${e.inputPaddingYRest};
    transition:
      padding-top ${uC} ${dC},
      padding-bottom ${uC} ${dC};

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }

    [data-field-control][data-floated="true"] & {
      padding-top: ${e.inputPaddingTopFloated};
      padding-bottom: ${e.inputPaddingBottomFloated};
    }
  `}function oC(e){let t=fC[e],n=e===`md`?`1.55rem`:t.inputPaddingTopFloated,r=e===`md`?`0.45rem`:t.inputPaddingBottomFloated;return c(hC,u`
      min-height: ${t.controlHeight};
      border-radius: ${t.borderRadius};
      padding: ${t.inputPaddingYRest} calc(${t.inputPaddingX} + ${`2.5rem`})
        ${t.inputPaddingYRest} ${t.inputPaddingX};

      [data-field-control][data-floated="true"] & {
        padding-top: ${n};
        padding-bottom: ${r};
      }
    `)}function sC(e){return aC(fC[e])}function cC(e,t){return u`
    min-height: var(--control-height-${e});
    padding: ${t} var(--control-padding-x-${e});
    font-size: var(--font-size-${e});
  `}function lC(e,t=!1,n=!0){return c(FC,n?zC[e]:BC[e],t?IC:void 0)}var uC,dC,fC,pC,mC,hC,gC,_C,vC,yC,bC,xC,SC,CC,wC,TC,EC,DC,OC,kC,AC,jC,MC,NC,PC,FC,IC,LC,RC,zC,BC;function VC(){return(VC=t((()=>{l(),qS(),uC=`200ms`,dC=`cubic-bezier(0.2, 0, 0, 1)`,fC={sm:{inputPaddingYRest:`0.875rem`,inputPaddingTopFloated:`1.25rem`,inputPaddingBottomFloated:`0.5rem`,inputPaddingX:`0.75rem`,controlHeight:`var(--control-height-sm)`,labelLeft:`0.625rem`,labelFloatTop:`0.45rem`,labelRestFontSize:`1rem`,labelFloatFontSize:`0.6875rem`,messageFontSize:`0.8125rem`,borderRadius:`0.375rem`},md:{inputPaddingYRest:`1rem`,inputPaddingTopFloated:`1.45rem`,inputPaddingBottomFloated:`0.55rem`,inputPaddingX:`0.875rem`,controlHeight:`var(--control-height-md)`,labelLeft:`0.75rem`,labelFloatTop:`0.5rem`,labelRestFontSize:`1.0625rem`,labelFloatFontSize:`0.75rem`,messageFontSize:`0.875rem`,borderRadius:`0.4375rem`},lg:{inputPaddingYRest:`1.125rem`,inputPaddingTopFloated:`1.55rem`,inputPaddingBottomFloated:`0.7rem`,inputPaddingX:`1rem`,controlHeight:`var(--control-height-lg)`,labelLeft:`0.875rem`,labelFloatTop:`0.55rem`,labelRestFontSize:`1.125rem`,labelFloatFontSize:`0.8125rem`,messageFontSize:`0.9375rem`,borderRadius:`0.5rem`}},pC=u`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,mC=u`
  position: relative;
  width: 100%;
`,hC=u`
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
    padding-top ${uC} ${dC},
    padding-bottom ${uC} ${dC},
    box-shadow ${uC} ${dC},
    background-color ${uC} ${dC};

  &::placeholder {
    color: transparent;
    user-select: none;
  }

  [data-field-control][data-label-hidden="true"] &::placeholder {
    color: var(--field-placeholder);
    user-select: auto;
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
`,gC={sm:JS(fC.sm),md:JS(fC.md),lg:JS(fC.lg)},_C={sm:XS(fC.sm),md:XS(fC.md),lg:XS(fC.lg)},vC=u`
  color: var(--field-placeholder);
`,yC=u`
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
    padding-top ${uC} ${dC},
    padding-bottom ${uC} ${dC},
    box-shadow ${uC} ${dC};

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
`,bC={sm:QS(fC.sm),md:QS(fC.md),lg:QS(fC.lg)},xC=u`
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
    transform ${uC} ${dC},
    top ${uC} ${dC},
    left ${uC} ${dC},
    font-size ${uC} ${dC},
    color ${uC} ${dC},
    opacity ${uC} ${dC};

  /* The flat 1rem margin eats a much bigger share of the label box on narrow
     phones, where long labels already truncate hard; claw some of it back. */
  ${GS(`xs`)} {
    max-width: calc(100% - 0.25rem);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,SC={sm:eC(fC.sm),md:eC(fC.md),lg:eC(fC.lg)},CC=u`
  [data-field-control][data-floated="false"] & {
    max-width: calc(100% - 2.75rem);
  }

  [data-field-control][data-floated="true"] & {
    max-width: calc(100% - 2.5rem);
  }

  ${GS(`xs`)} {
    [data-field-control][data-floated="false"] & {
      max-width: calc(100% - 2.25rem);
    }

    [data-field-control][data-floated="true"] & {
      max-width: calc(100% - 2rem);
    }
  }
`,wC=u`
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
`,TC=c(wC,u`
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  `),EC=c(wC,u`
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  `),DC=c(wC,u`
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  `),OC={sm:DC,md:DC,lg:DC},kC=c(wC,u`
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  `),AC={sm:kC,md:kC,lg:kC},jC=u`
  margin: 0.375rem 0 0;
  max-width: 100%;
  min-width: 0;
  overflow-wrap: anywhere;
`,MC=u`
  color: var(--field-message-color);
`,NC=u`
  color: var(--field-message-color-invalid);
`,PC={sm:rC(fC.sm),md:rC(fC.md),lg:rC(fC.lg)},FC=u`
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
    box-shadow ${uC} ${dC},
    padding-top ${uC} ${dC},
    padding-bottom ${uC} ${dC},
    background-color ${uC} ${dC},
    color ${uC} ${dC};

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
`,IC=u`
  &[data-floated="true"] {
    align-items: stretch;
  }
`,LC=u`
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
  ${LC}
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
`,RC=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  color: var(--field-chrome);

  & > svg {
    width: 1em;
    height: 1em;
  }
`,zC={sm:cC(`sm`,`calc(var(--control-padding-x-sm) - 2px)`),md:cC(`md`,`calc(var(--control-padding-x-md) - 2px)`),lg:cC(`lg`,`calc(var(--control-padding-x-lg) - 2px)`)},BC={sm:cC(`sm`,`0`),md:cC(`md`,`0`),lg:cC(`lg`,`0`)}})))()}function HC({children:e,className:t,controlClassName:n,controlProps:r,label:i,labelProps:a,inputId:o,description:s,descriptionId:l,descriptionProps:u,errorMessage:d,errorMessageId:f,errorMessageProps:p,notice:m,noticeId:h,isDisabled:g=!1,isRequired:_=!1,layout:v=`stacked`,isFloatingRaised:y=!1,isFloatingFocused:b=!1,isInvalid:x=!1,fieldSize:S=`md`}){let C=c(RS,v===`floating`?zS:void 0,v===`floating`?mC:void 0,n,r?.className),w=()=>i?a&&`htmlFor`in a&&typeof a.htmlFor==`string`?(0,UC.jsxs)(`label`,{...a,className:c(IS,a.className),children:[i,_?(0,UC.jsx)(`span`,{className:LS,children:`*`}):null]}):a?(0,UC.jsxs)(`span`,{...a,className:c(IS,a.className),children:[i,_?(0,UC.jsx)(`span`,{className:LS,children:`*`}):null]}):(0,UC.jsxs)(`label`,{className:IS,htmlFor:o,children:[i,_?(0,UC.jsx)(`span`,{className:LS,children:`*`}):null]}):null,T=()=>{if(!i)return null;let e=c(tC(S),a?.className);return a&&`htmlFor`in a&&typeof a.htmlFor==`string`?(0,UC.jsxs)(`label`,{...a,className:e,children:[i,_?(0,UC.jsx)(`span`,{className:LS,children:`*`}):null]}):a?(0,UC.jsxs)(`span`,{...a,className:e,children:[i,_?(0,UC.jsx)(`span`,{className:LS,children:`*`}):null]}):(0,UC.jsxs)(`label`,{className:e,htmlFor:o,children:[i,_?(0,UC.jsx)(`span`,{className:LS,children:`*`}):null]})};return(0,UC.jsxs)(`div`,{className:c(FS,t),children:[v===`stacked`?w():null,(0,UC.jsxs)(`div`,{...r,className:C,"data-field-control":v===`floating`?`true`:void 0,"data-floated":v===`floating`?y?`true`:`false`:void 0,"data-focused":v===`floating`?b?`true`:`false`:void 0,"data-invalid":v===`floating`?x?`true`:`false`:void 0,"data-disabled":v===`floating`?g?`true`:`false`:void 0,children:[v===`floating`?T():null,e]}),s||m||d?(0,UC.jsxs)(`div`,{className:BS,children:[s?(0,UC.jsx)(`div`,{...u,className:c(VS,u?.className),id:l??u?.id,children:s}):null,m?(0,UC.jsx)(`div`,{className:HS,id:h,children:m}):null,d?(0,UC.jsx)(`div`,{...p,className:c(US,p?.className),id:f??p?.id,role:p?.role??`alert`,children:d}):null]}):null]})}var UC;function WC(){return(WC=t((()=>{l(),r(),WS(),VC(),UC=G()})))()}function GC(e){let{name:t,control:n,rules:r,id:i,label:a,description:o,errorMessage:s,fieldSize:l=`md`,isDisabled:u=!1,isReadOnly:d=!1,isRequired:f=!1,isIndeterminate:p=!1,isInline:m=!1,className:h,checkboxValue:g,onKeyDown:_,onKeyUp:v,"aria-label":y,"data-testid":b}=e,{field:x,resolvedError:S,isInvalid:C}=aS({name:t,control:n,...Y({rules:r}),errorMessage:s}),w=!!x.value,T=(0,KC.useId)(),E=i??T,D=(0,KC.useId)(),O=(0,KC.useId)(),k=dS({descriptionId:D,errorMessageId:O,hasDescription:!!o,hasErrorMessage:!!S}),A=(0,KC.useRef)(null),j=Dl({isDisabled:u,isReadOnly:d,isSelected:w,onChange:x.onChange}),M=g===void 0?void 0:Array.isArray(g)?g.join(`,`):String(g),{inputProps:N,isSelected:P,labelProps:F}=bl({children:a,id:E,name:x.name,isDisabled:u,isReadOnly:d,isRequired:f,isInvalid:C,isIndeterminate:p,...Y({value:M,"aria-label":y,"aria-describedby":k})},j,A),{focusProps:I,isFocusVisible:L}=$g();(0,KC.useEffect)(()=>{A.current&&(A.current.indeterminate=p)},[p]);let R=W(N,I,{onKeyDown:_,onKeyUp:v,onBlur:e=>{N.onBlur?.(e),x.onBlur()}});return(0,qC.jsx)(HC,{className:c(gS,m&&_S,h),description:o,...Ny(o,{descriptionId:D}),errorMessage:S,...Ny(S,{errorMessageId:O}),layout:JC,children:(0,qC.jsxs)(`label`,{...F,className:c(vS,mS(l)),"data-disabled":u?`true`:`false`,children:[(0,qC.jsx)(`input`,{...R,ref:cS(A,x.ref),className:bS,type:`checkbox`,"data-testid":b}),(0,qC.jsxs)(`span`,{className:hS(l,`checkbox`),"aria-hidden":`true`,"data-disabled":u?`true`:`false`,"data-focus-visible":L?`true`:`false`,"data-indeterminate":p?`true`:`false`,"data-invalid":C?`true`:`false`,"data-selected":P?`true`:`false`,children:[(0,qC.jsx)(`span`,{className:c(kS,jS,P&&!p&&AS)}),(0,qC.jsx)(`span`,{className:c(kS,MS,p&&AS)})]}),(0,qC.jsx)(`span`,{className:xS,children:(0,qC.jsx)(`span`,{className:SS,children:a})})]})})}var KC,qC,JC;function YC(){return(YC=t((()=>{l(),kl(),KC=e(r()),O(),Sl(),t_(),oS(),pS(),PS(),WC(),qC=G(),JC=`stacked`})))()}function XC(e){return null}function ZC(e){return e.hasChildItems==null?!!(e.childItems||e.title&&QC.Children.count(e.children)>0):e.hasChildItems}var QC,$C;function ew(){return(ew=t((()=>{QC=e(r(),1),XC.getCollectionNode=function*(e,t){let{childItems:n,title:r,children:i}=e,a=e.title||e.children,o=e.textValue||(typeof a==`string`?a:``)||e[`aria-label`]||``;!o&&t?.suppressTextValueWarning,yield{type:`item`,props:e,rendered:a,textValue:o,"aria-label":e[`aria-label`],hasChildNodes:ZC(e),*childNodes(){if(n)for(let e of n)yield{type:`item`,value:e};else if(r){let e=[];QC.Children.forEach(i,t=>{e.push({type:`item`,element:t})}),yield*e}}}},$C=XC})))()}function tw(e){return null}var nw,rw;function iw(){return(iw=t((()=>{nw=e(r(),1),tw.getCollectionNode=function*(e){let{children:t,title:n,items:r}=e;yield{type:`section`,props:e,hasChildNodes:!0,rendered:n,"aria-label":e[`aria-label`],*childNodes(){if(typeof t==`function`){if(!r)throw Error(`props.children was a function but props.items is missing`);for(let e of r)yield{type:`item`,value:e,renderer:t}}else{let e=[];nw.Children.forEach(t,t=>{e.push({type:`item`,element:t})}),yield*e}}}},rw=tw})))()}function aw(e){let t=[],n=null;return{*[Symbol.iterator](){for(let e of t)yield e;n||=e();for(let e of n)t.push(e),yield e}}}function ow(e,t){if(e&&t)return n=>e(t(n));if(e)return e;if(t)return t}function sw(e){return e[0].toUpperCase()+e.slice(1)}var cw,lw;function uw(){return(uw=t((()=>{cw=e(r(),1),lw=class{build(e,t){return this.context=t,aw(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:n}=e;if(cw.isValidElement(t)&&t.type===cw.Fragment)yield*this.iterateCollection({children:t.props.children,items:n});else if(typeof t==`function`){if(!n)throw Error(`props.children was a function but props.items is missing`);let e=0;for(let r of n)yield*this.getFullNode({value:r,index:e},{renderer:t}),e++}else{let e=[];cw.Children.forEach(t,t=>{t&&e.push(t)});let n=0;for(let t of e){let e=this.getFullNode({element:t,index:n},{});for(let t of e)n++,yield t}}}getKey(e,t,n,r){if(e.key!=null)return e.key;if(t.type===`cell`&&t.key!=null)return`${r}${t.key}`;let i=t.value;if(i!=null){let e=i.key??i.id;if(e==null)throw Error(`No key found for item`);return e}return r?`${r}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,n,r){if(cw.isValidElement(e.element)&&e.element.type===cw.Fragment){let i=[];cw.Children.forEach(e.element.props.children,e=>{i.push(e)});let a=e.index??0;for(let e of i)yield*this.getFullNode({element:e,index:a++},t,n,r);return}let i=e.element;if(!i&&e.value&&t&&t.renderer){let n=this.cache.get(e.value);if(n&&(!n.shouldInvalidate||!n.shouldInvalidate(this.context))){n.index=e.index,n.parentKey=r?r.key:null,yield n;return}i=t.renderer(e.value)}if(cw.isValidElement(i)){let a=i.type;if(typeof a!=`function`&&typeof a.getCollectionNode!=`function`){let e=i.type;throw Error(`Unknown element <${e}> in collection.`)}let o=a.getCollectionNode(i.props,this.context),s=e.index??0,c=o.next();for(;!c.done&&c.value;){let a=c.value;e.index=s;let l=a.key??null;l??=a.element?null:this.getKey(i,e,t,n);let u=[...this.getFullNode({...a,key:l,index:s,wrapper:ow(e.wrapper,a.wrapper)},this.getChildState(t,a),n?`${n}${i.key}`:i.key,r)];for(let t of u){if(t.value=a.value??e.value??null,t.value&&this.cache.set(t.value,t),e.type&&t.type!==e.type)throw Error(`Unsupported type <${sw(t.type)}> in <${sw(r?.type??`unknown parent type`)}>. Only <${sw(e.type)}> is supported.`);s++,yield t}c=o.next(u)}return}if(e.key==null||e.type==null)return;let a=this,o={type:e.type,props:e.props,key:e.key,parentKey:r?r.key:null,value:e.value??null,level:(r?.level??0)+ +(r?.type===`item`),index:e.index,rendered:e.rendered,textValue:e.textValue??``,"aria-label":e[`aria-label`],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes||!1,childNodes:aw(function*(){if(!e.hasChildNodes||!e.childNodes)return;let n=0;for(let r of e.childNodes()){r.key!=null&&(r.key=`${o.key}${r.key}`);let e=a.getFullNode({...r,index:n},a.getChildState(t,r),o.key,o);for(let t of e)n++,yield t}})};yield o}constructor(){this.cache=new WeakMap}}})))()}function dw(e,t,n){let r=(0,fw.useMemo)(()=>new lw,[]),{children:i,items:a,collection:o}=e;return(0,fw.useMemo)(()=>o||t(r.build({children:i,items:a},n)),[r,i,a,o,n,t])}var fw;function pw(){return(pw=t((()=>{uw(),fw=r()})))()}var mw;function hw(){return(hw=t((()=>{mw=class{constructor(e){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=e;let t=e=>{if(this.keyMap.set(e.key,e),e.childNodes&&e.type===`section`)for(let n of e.childNodes)t(n)};for(let n of e)t(n);let n=null,r=0,i=0;for(let[e,t]of this.keyMap)n?(n.nextKey=e,t.prevKey=n.key):(this.firstKey=e,t.prevKey=void 0),t.type===`item`&&(t.index=r++),(t.type===`section`||t.type===`item`)&&i++,n=t,n.nextKey=void 0;this._size=i,this.lastKey=n?.key??null}*[Symbol.iterator](){yield*this.iterable}get size(){return this._size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey??null:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey??null:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)??null}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){return this.keyMap.get(e)?.childNodes||[]}}})))()}var gw;function _w(){return(_w=t((()=>{gw=class e extends Set{constructor(t,n,r){super(t),t instanceof e?(this.anchorKey=n??t.anchorKey,this.currentKey=r??t.currentKey):(this.anchorKey=n??null,this.currentKey=r??null)}}})))()}function vw(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function yw(e){let{selectionMode:t=`none`,disallowEmptySelection:n=!1,allowDuplicateSelectionEvents:r,selectionBehavior:i=`toggle`,disabledBehavior:a=`all`}=e,o=(0,xw.useRef)(!1),[,s]=(0,xw.useState)(!1),c=(0,xw.useRef)(null),l=(0,xw.useRef)(null),[,u]=(0,xw.useState)(null),d=(0,xw.useMemo)(()=>bw(e.selectedKeys),[e.selectedKeys]),f=(0,xw.useMemo)(()=>bw(e.defaultSelectedKeys,new gw),[e.defaultSelectedKeys]),[p,m]=ot(d,f,e.onSelectionChange),h=(0,xw.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),[g,_]=(0,xw.useState)(i);i===`replace`&&g===`toggle`&&typeof p==`object`&&p.size===0&&_(`replace`);let v=(0,xw.useRef)(i);return(0,xw.useEffect)(()=>{i!==v.current&&(_(i),v.current=i)},[i]),{selectionMode:t,disallowEmptySelection:n,selectionBehavior:g,setSelectionBehavior:_,get isFocused(){return o.current},setFocused(e){o.current=e,s(e)},get focusedKey(){return c.current},get childFocusStrategy(){return l.current},setFocusedKey(e,t=`first`){c.current=e,l.current=t,u(e)},selectedKeys:p,setSelectedKeys(e){(r||!vw(e,p))&&m(e)},disabledKeys:h,disabledBehavior:a}}function bw(e,t){return e?e===`all`?`all`:new gw(e):t}var xw;function Sw(){return(Sw=t((()=>{_w(),Ue(),xw=r()})))()}var Cw;function ww(){return(ww=t((()=>{_w(),Cw=class e{constructor(e,t,n){this.collection=e,this.state=t,this.allowsCellSelection=n?.allowsCellSelection??!1,this._isSelectAll=null,this.layoutDelegate=n?.layoutDelegate||null,this.fullCollection=n?.fullCollection||null}get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(e==null||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return this.state.selectedKeys===`all`?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){if(this.state.selectionMode===`none`)return!1;let t=this.getKey(e);return t==null?!1:this.state.selectedKeys===`all`?this.canSelectItem(t):this.state.selectedKeys.has(t)}get isEmpty(){return this.state.selectedKeys!==`all`&&this.state.selectedKeys.size===0}get isSelectAll(){if(this.isEmpty)return!1;if(this.state.selectedKeys===`all`)return!0;if(this._isSelectAll!=null)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(e=>t.has(e)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let n=this.collection.getItem(t);(!e||n&&Xm(this.collection,n,e)<0)&&(e=n)}return e?.key??null}get lastSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let n=this.collection.getItem(t);(!e||n&&Xm(this.collection,n,e)>0)&&(e=n)}return e?.key??null}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){if(this.selectionMode===`none`)return;if(this.selectionMode===`single`){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n;if(this.state.selectedKeys===`all`)n=new gw([t],t,t);else{let e=this.state.selectedKeys,r=e.anchorKey??t;n=new gw(e,r,t);for(let i of this.getKeyRange(r,e.currentKey??t))n.delete(i);for(let e of this.getKeyRange(t,r))this.canSelectItem(e)&&n.add(e)}this.state.setSelectedKeys(n)}getKeyRange(e,t){let n=this.collection.getItem(e),r=this.collection.getItem(t);return n&&r?Xm(this.collection,n,r)<=0?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){if(this.layoutDelegate?.getKeyRange)return this.layoutDelegate.getKeyRange(e,t);let n=[],r=e;for(;r!=null;){let e=this.collection.getItem(r);if(e&&(e.type===`item`||e.type===`cell`&&this.allowsCellSelection)&&n.push(r),r===t)return n;r=this.collection.getKeyAfter(r)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||t.type===`cell`&&this.allowsCellSelection)return e;for(;t&&t.type!==`item`&&t.parentKey!=null;)t=this.collection.getItem(t.parentKey);return!t||t.type!==`item`?null:t.key}toggleSelection(e){if(this.selectionMode===`none`)return;if(this.selectionMode===`single`&&!this.isSelected(e)){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n=new gw(this.state.selectedKeys===`all`?this.getSelectAllKeys():this.state.selectedKeys);n.has(t)?n.delete(t):this.canSelectItem(t)&&(n.add(t),n.anchorKey=t,n.currentKey=t),!(this.disallowEmptySelection&&n.size===0)&&this.state.setSelectedKeys(n)}replaceSelection(e){if(this.selectionMode===`none`)return;let t=this.getKey(e);if(t==null)return;let n=this.canSelectItem(t)?new gw([t],t,t):new gw;this.state.setSelectedKeys(n)}setSelectedKeys(e){if(this.selectionMode===`none`)return;let t=new gw;for(let n of e){let e=this.getKey(n);if(e!=null&&(t.add(e),this.selectionMode===`single`))break}this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=this.fullCollection??this.collection,t=[],n=r=>{for(;r!=null;){if(this.canSelectItemIn(r,e)){let i=e.getItem(r);i?.type===`item`&&t.push(r),i?.hasChildNodes&&(this.allowsCellSelection||i.type!==`item`)&&n(Jm(qm(i,e))?.key??null)}r=e.getKeyAfter(r)}};return n(e.getFirstKey()),t}selectAll(){!this.isSelectAll&&this.selectionMode===`multiple`&&this.state.setSelectedKeys(`all`)}clearSelection(){!this.disallowEmptySelection&&(this.state.selectedKeys===`all`||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new gw)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode!==`none`&&(this.selectionMode===`single`?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior===`toggle`||t&&(t.pointerType===`touch`||t.pointerType===`virtual`)?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;for(let n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){return this.canSelectItemIn(e,this.collection)}canSelectItemIn(e,t){if(this.state.selectionMode===`none`||this.state.disabledKeys.has(e))return!1;let n=t.getItem(e);return!(!n||n?.props?.isDisabled||n.type===`cell`&&!this.allowsCellSelection)}isDisabled(e){let t=this.collection.getItem(e);return this.state.disabledBehavior===`all`&&(this.state.disabledKeys.has(e)||!!t?.props?.isDisabled)&&t?.props?.disabledBehavior!==`selection`}isLink(e){return!!this.collection.getItem(e)?.props?.href}getItemProps(e){return this.collection.getItem(e)?.props}withCollection(t){return new e(t,this.state,{allowsCellSelection:this.allowsCellSelection,layoutDelegate:this.layoutDelegate||void 0,fullCollection:this.fullCollection??this.collection})}}})))()}function Tw(e){let{filter:t,layoutDelegate:n}=e,r=yw(e),i=(0,Dw.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),a=dw(e,(0,Dw.useCallback)(e=>t?new mw(t(e)):new mw(e),[t]),(0,Dw.useMemo)(()=>({suppressTextValueWarning:e.suppressTextValueWarning}),[e.suppressTextValueWarning])),o=(0,Dw.useMemo)(()=>new Cw(a,r,{layoutDelegate:n}),[a,r,n]);return Ew(a,o),{collection:a,disabledKeys:i,selectionManager:o}}function Ew(e,t){let n=(0,Dw.useRef)(null);(0,Dw.useEffect)(()=>{if(t.focusedKey!=null&&!e.getItem(t.focusedKey)&&n.current){let r=n.current.getKeyAfter(t.focusedKey),i=null;for(;r!=null;){let a=e.getItem(r);if(a&&a.type===`item`&&!t.isDisabled(r)){i=r;break}r=n.current.getKeyAfter(r)}if(i==null)for(r=n.current.getKeyBefore(t.focusedKey);r!=null;){let a=e.getItem(r);if(a&&a.type===`item`&&!t.isDisabled(r)){i=r;break}r=n.current.getKeyBefore(r)}t.setFocusedKey(i)}n.current=e},[e,t])}var Dw;function Ow(){return(Ow=t((()=>{hw(),Sw(),ww(),pw(),Dw=r()})))()}function kw(e){let{defaultFilter:t,menuTrigger:n=`input`,allowsEmptyCollection:r=!1,allowsCustomValue:i,shouldCloseOnBlur:a=!0,selectionMode:o=`single`}=e,[s,c]=(0,Pw.useState)(!1),[l,u]=(0,Pw.useState)(!1),[d,f]=(0,Pw.useState)(null),p=(0,Pw.useMemo)(()=>e.defaultValue===void 0?o===`single`?e.defaultSelectedKey??null:[]:e.defaultValue,[e.defaultValue,e.defaultSelectedKey,o]),m=(0,Pw.useMemo)(()=>e.value===void 0?o===`single`?e.selectedKey:void 0:e.value,[e.value,e.selectedKey,o]),[h,g]=ot(m,p,e.onChange),_=o===`single`&&Array.isArray(h)?h[0]:h,v=t=>{if(o===`single`){let n=Array.isArray(t)?t[0]??null:t;g(n),n!==_&&e.onSelectionChange?.(n)}else{let e=[];Array.isArray(t)?e=t:t!=null&&(e=[t]),g(e)}},{collection:y,selectionManager:b,disabledKeys:x}=Tw({...e,items:e.items??e.defaultItems,selectionMode:o,disallowEmptySelection:o===`single`,allowDuplicateSelectionEvents:!0,selectedKeys:(0,Pw.useMemo)(()=>Nw(_),[_]),onSelectionChange:t=>{if(t!==`all`){if(o===`single`){let n=t.values().next().value??null;n===_?(e.onSelectionChange?.(n),ee(),z()):v(n)}else v([...t])}}}),S=o===`single`?b.firstSelectedKey:null,C=(0,Pw.useMemo)(()=>[...b.selectedKeys].map(e=>y.getItem(e)).filter(e=>e!=null),[b.selectedKeys,y]),[w,T]=ot(e.inputValue,Mw(e.defaultInputValue,S,y)||``,e.onInputChange),[E]=(0,Pw.useState)(_),[D]=(0,Pw.useState)(w),O=y,k=(0,Pw.useMemo)(()=>e.items!=null||!t?y:Aw(y,w,t),[y,w,t,e.items]),[A,j]=(0,Pw.useState)(k),M=(0,Pw.useRef)(`focus`),N=t=>{e.onOpenChange&&e.onOpenChange(t,t?M.current:void 0),b.setFocused(t),t||b.setFocusedKey(null)},P=nt({...e,onOpenChange:N,isOpen:void 0,defaultOpen:void 0}),F=(t=null,i)=>{let a=i===`manual`||i===`focus`&&n===`focus`;(r||k.size>0||a&&O.size>0||e.items)&&(a&&!P.isOpen&&e.items===void 0&&c(!0),M.current=i,f(t),P.open())},I=(t=null,i)=>{let a=i===`manual`||i===`focus`&&n===`focus`;!(r||k.size>0||a&&O.size>0||e.items)&&!P.isOpen||(a&&!P.isOpen&&e.items===void 0&&c(!0),P.isOpen||(M.current=i),R(t))},L=(0,Pw.useCallback)(()=>{j(s?O:k)},[s,O,k]),R=(0,Pw.useCallback)((e=null)=>{P.isOpen&&L(),f(e),P.toggle()},[P,L]),z=(0,Pw.useCallback)(()=>{P.isOpen&&(L(),P.close())},[P,L]),[B,V]=(0,Pw.useState)(w),ee=()=>{let e=S==null?``:y.getItem(S)?.textValue??``;V(e),T(e)},te=(0,Pw.useRef)(_),ne=(0,Pw.useRef)(S==null?``:y.getItem(S)?.textValue??``);(0,Pw.useEffect)(()=>{l&&(k.size>0||r)&&!P.isOpen&&w!==B&&n!==`manual`&&F(null,`input`),!s&&!r&&P.isOpen&&k.size===0&&z(),_!=null&&_!==te.current&&o===`single`&&z(),w!==B&&(b.setFocusedKey(null),c(!1),o===`single`&&w===``&&(e.inputValue===void 0||m===void 0)&&v(null)),_!==te.current&&(e.inputValue===void 0||m===void 0)?ee():B!==w&&V(w);let t=S==null?``:y.getItem(S)?.textValue??``;!l&&S!=null&&e.inputValue===void 0&&S===te.current&&ne.current!==t&&(V(t),T(t)),te.current=_,ne.current=t});let H=il({...e,value:(0,Pw.useMemo)(()=>Array.isArray(_)&&_.length===0?null:{inputValue:w,value:_,selectedKey:S},[w,S,_])}),re=()=>{i&&S==null?ie():U()},ie=()=>{if(o===`multiple`){V(w),z();return}te.current=null,v(null),z()},U=(t=!1)=>{if(m!==void 0&&e.inputValue!==void 0){let n=S==null?``:y.getItem(S)?.textValue??``;(t||o===`multiple`||w!==n)&&(e.onSelectionChange?.(S),e.onChange?.(_)),V(n),z()}else ee(),z()},ae=()=>{if(i){let e=S==null?``:y.getItem(S)?.textValue??``;w===e?U():ie()}else U()},oe=()=>{P.isOpen&&b.focusedKey!=null?b.isSelected(b.focusedKey)&&o===`single`?U(!0):b.select(b.focusedKey):ae()},se=(0,Pw.useRef)([w,_]),ce=t=>{t?(se.current=[w,_],n===`focus`&&!e.isReadOnly&&F(null,`focus`)):(a&&ae(),(w!==se.current[0]||_!==se.current[1])&&H.commitValidation()),u(t)},le=(0,Pw.useMemo)(()=>P.isOpen?s?O:k:A,[P.isOpen,O,k,s,A]),ue=e.defaultSelectedKey??(o===`single`?E:null);return{...H,...P,focusStrategy:d,toggle:I,open:F,close:ae,selectionManager:b,value:_,defaultValue:p??E,setValue:v,selectedKey:S,selectedItems:C,defaultSelectedKey:ue,setSelectedKey:v,disabledKeys:x,isFocused:l,setFocused:ce,selectedItem:C[0]??null,collection:le,inputValue:w,defaultInputValue:Mw(e.defaultInputValue,ue,y)??D,setInputValue:T,commit:oe,revert:re}}function Aw(e,t,n){return new mw(jw(e,e,t,n))}function jw(e,t,n,r){let i=[];for(let a of t)if(a.type===`section`&&a.hasChildNodes){let t=jw(e,qm(a,e),n,r);[...t].some(e=>e.type===`item`)&&i.push({...a,childNodes:t})}else(a.type===`item`&&r(a.textValue,n)||a.type!==`item`)&&i.push({...a});return i}function Mw(e,t,n){return e==null&&t!=null?n.getItem(t)?.textValue??``:e}function Nw(e){if(e!==void 0)return e===null?[]:Array.isArray(e)?e:[e]}var Pw;function Fw(){return(Fw=t((()=>{gl(),hw(),Ow(),Ze(),Ue(),Pw=r()})))()}function Iw(e,t){if(e==null)return t;if(typeof e==`string`||typeof e==`number`)return e;if(typeof e==`object`){if(`key`in e&&e.key!==null&&e.key!==void 0)return e.key;if(`id`in e&&e.id!==null&&e.id!==void 0)return e.id;if(`value`in e&&e.value!==null&&e.value!==void 0)return e.value}return t}function Lw(e){if(e==null)return``;if(typeof e==`string`||typeof e==`number`)return String(e);if(typeof e==`object`){if(`textValue`in e&&typeof e.textValue==`string`)return e.textValue;if(`label`in e&&typeof e.label==`string`)return e.label;if(`name`in e&&typeof e.name==`string`)return e.name;if(`title`in e&&typeof e.title==`string`)return e.title;if(`value`in e&&e.value!==null&&e.value!==void 0)return String(e.value)}return String(e)}function Rw(e,t={}){return Array.from(e).map((e,n)=>{let r=t.getItemTextValue?.(e)??Lw(e);return{item:e,key:t.getItemKey?.(e)??Iw(e,n),rendered:t.renderItem?t.renderItem(e):r,textValue:r,isDisabled:t.getItemDisabled?.(e)??(typeof e==`object`&&e&&e!==void 0&&`disabled`in e?!!e.disabled:!1)}})}function zw({selectedItem:e,inputValue:t}){return e!=null||typeof t==`string`&&t.trim().length>0}var Bw,Vw,Hw,Uw,Ww,Gw,Kw,qw,Jw;function Yw(){return(Yw=t((()=>{l(),u`
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
`,Bw=u`
  position: absolute;
  min-width: var(--popover-trigger-width, 0);
  max-width: min(100vw - 24px, 560px);
  box-sizing: border-box;
  border: 1px solid var(--field-border);
  border-radius: calc(var(--control-radius) + 4px);
  background: var(--field-bg);
  box-shadow: 0 14px 32px rgba(10, 15, 23, 0.18);
`,Vw=u`
  margin: 0;
  padding: var(--space-2);
  list-style: none;
  max-height: 240px;
  overflow: auto;
  display: grid;
  gap: var(--space-2);
`,Hw=u`
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
`,Uw=u`
  padding: var(--space-3);
  color: var(--field-description);
  font-size: 0.9375rem;
`,Ww=u`
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
`,Gw=u`
  width: 10px;
  height: 10px;
  border-right: 1.8px solid currentColor;
  border-bottom: 1.8px solid currentColor;
  transform: rotate(45deg);
`,Kw=u`
  width: 10px;
  height: 6px;
  border-left: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(-45deg) translateY(-1px);
`,qw=u`
  display: grid;
  gap: var(--space-2);
`,Jw=u`
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
`})))()}function Xw({item:e,state:t}){let n=Zw.useRef(null),{optionProps:r,isDisabled:i,isFocused:a,isFocusVisible:o,isSelected:s}=m_({key:e.key},t,n);return(0,Qw.jsxs)(`li`,{...r,ref:n,className:Hw,"data-disabled":i?`true`:`false`,"data-focus-visible":o?`true`:`false`,"data-highlighted":a?`true`:`false`,"data-key":String(e.key),"data-selected":s?`true`:`false`,children:[(0,Qw.jsx)(`span`,{children:e.rendered}),s?(0,Qw.jsx)(`span`,{className:Kw,"aria-hidden":`true`}):null]})}var Zw,Qw;function $w(){return($w=t((()=>{Zw=e(r()),h_(),Yw(),Qw=G()})))()}function eT({section:e,state:t}){let n=e[`aria-label`],{itemProps:r,headingProps:i,groupProps:a}=f_({heading:e.rendered,...Y({"aria-label":n})});return(0,tT.jsxs)(`li`,{...r,className:nT,children:[e.rendered?(0,tT.jsx)(`span`,{...i,className:rT,children:e.rendered}):null,(0,tT.jsx)(`ul`,{...a,className:iT,children:Array.from(t.collection.getChildren?.(e.key)??[]).map(e=>(0,tT.jsx)(Xw,{item:e,state:t},e.key))})]})}var tT,nT,rT,iT;function aT(){return(aT=t((()=>{l(),p_(),$w(),tT=G(),nT=u`
  display: grid;
  gap: var(--space-1);
`,rT=u`
  padding: var(--space-2) var(--space-3) 0;
  color: var(--field-label-color);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.35;
`,iT=u`
  margin: 0;
  padding: 0;
  list-style: none;
`})))()}function oT({state:e,listBoxRef:t,className:n,emptyState:r,...a}){let{t:o}=i(`shared-module`),s=sT.useRef(null),l=t??s,{listBoxProps:u}=u_(a,e,l),d=Array.from(e.collection);return d.length===0?(0,cT.jsx)(`div`,{className:Uw,id:u.id,role:`presentation`,children:r??o(`listBox.noResults`)}):(0,cT.jsx)(`ul`,{...u,ref:l,className:c(Vw,n),children:d.map(t=>t.type===`section`?(0,cT.jsx)(eT,{section:t,state:e},t.key):(0,cT.jsx)(Xw,{item:t,state:e},t.key))})}var sT,cT;function lT(){return(lT=t((()=>{l(),sT=e(r()),d_(),a(),Yw(),$w(),aT(),cT=G()})))()}function uT({children:e,className:t,state:n,triggerRef:r,popoverRef:i,surfaceProps:a,placement:o=`bottom start`,offset:s=8,isNonModal:l=!1}){let d=dT.useRef(null),f=i??d,{popoverProps:p,underlayProps:m,placement:h}=Z_({popoverRef:f,triggerRef:r,placement:o,offset:s,isNonModal:l},n),g=h!==null,_=r.current instanceof HTMLElement?r.current.offsetWidth:void 0,v=_===void 0?void 0:u`
          --popover-trigger-width: ${_}px;
        `;return(0,fT.jsx)(Ge,{disableFocusManagement:l,children:(0,fT.jsx)(`div`,{...m,className:pT,children:(0,fT.jsxs)(`div`,{...W(p,a),style:{...p.style,...a?.style,...g?null:{pointerEvents:`none`}},ref:f,className:c(Bw,mT,v,t,a?.className),children:[(0,fT.jsx)(tt,{onDismiss:n.close}),e,(0,fT.jsx)(tt,{onDismiss:n.close})]})})})}var dT,fT,pT,mT;function hT(){return(hT=t((()=>{l(),dT=e(r()),We(),O(),$e(),$_(),Yw(),fT=G(),pT=u`
  position: fixed;
  inset: 0;
  z-index: var(--layer-overlay);
  pointer-events: none;
`,mT=u`
  pointer-events: auto;
`})))()}function gT(e){let{name:t,control:n,rules:r,id:a,label:o,description:s,errorMessage:l,fieldSize:u=`md`,items:d,children:f,getItemKey:p,getItemTextValue:m,getItemDisabled:h,inputValue:g,onInputChange:_,allowsCustomValue:v=!1,isEditable:y=!0,emptyState:b,className:x,isDisabled:S=!1,isReadOnly:C=!1,isRequired:w=!1,onFocus:T,onBlur:E,onKeyDown:D,onKeyUp:O,placeholder:k,"aria-label":A,"data-testid":j}=e,{field:M,resolvedError:N,isInvalid:P}=aS({name:t,control:n,...Y({rules:r}),errorMessage:l}),{t:F}=i(`shared-module`),I=F(`comboBox.toggleOptions`),L=(0,_T.useRef)(null),R=(0,_T.useRef)(null),z=(0,_T.useRef)(null),B=(0,_T.useRef)(null),V=_T.useId(),ee=a??V,te=(0,_T.useMemo)(()=>({getItemKey:p,getItemTextValue:m,...Y({getItemDisabled:h,renderItem:f})}),[f,h,p,m]),ne=(0,_T.useMemo)(()=>Rw(d,te),[te,d]),H=(0,_T.useMemo)(()=>ne.filter(e=>e.isDisabled).map(e=>e.key),[ne]),{contains:re}=Kg({sensitivity:xT}),ie=M.value===null||M.value===void 0?null:M.value,U=kw({items:ne,children:e=>(0,vT.jsx)($C,{textValue:e.textValue,children:e.rendered},e.key),disabledKeys:H,defaultFilter:re,selectedKey:ie,onSelectionChange:e=>{M.onChange(e)},allowsCustomValue:v,isDisabled:S,isReadOnly:C,isRequired:w,isInvalid:P,label:o,description:s,errorMessage:N,placeholder:k??` `,...Y({inputValue:g,onInputChange:_})}),{buttonProps:ae,inputProps:oe,listBoxProps:se,labelProps:ce,descriptionProps:le,errorMessageProps:ue,isInvalid:de,validationErrors:fe}=nh({id:ee,items:ne,disabledKeys:H,inputRef:L,buttonRef:R,listBoxRef:z,popoverRef:B,selectedKey:ie,allowsCustomValue:v,isDisabled:S,isReadOnly:C,isRequired:w,isInvalid:P,label:o,description:s,errorMessage:N,placeholder:k??` `,name:M.name,...Y({inputValue:g,onInputChange:_,"aria-label":A})},U),{buttonProps:pe}=pt(ae,R),[me,he]=(0,_T.useState)(!1),ge=zw({inputValue:U.inputValue,selectedItem:U.selectedItem}),_e=me||ge,ve=W(oe,{onMouseDown:e=>{!U.isOpen&&!S&&!C&&(e.preventDefault(),L.current?.focus(),U.open()),oe.onMouseDown?.(e)},onBeforeInput:e=>{y||e.preventDefault()},onFocus:e=>{he(!0),oe.onFocus?.(e),T?.(e)},onBlur:e=>{he(!1),oe.onBlur?.(e),E?.(e),M.onBlur()},onKeyDown:e=>{let t=e.key.length===1||e.key===`Backspace`||e.key===`Delete`;if(!y&&t){e.preventDefault();return}D?.(e)},onKeyUp:O}),ye=N??(de&&fe.length>0?fe.join(` `):null);return(0,vT.jsxs)(`div`,{className:c(pC,x),children:[(0,vT.jsxs)(`div`,{className:c(mC,yT),"data-field-control":`true`,"data-open":U.isOpen?`true`:`false`,"data-disabled":S?`true`:`false`,"data-invalid":de?`true`:`false`,"data-readonly":C?`true`:`false`,"data-focused":me?`true`:`false`,"data-floated":_e?`true`:`false`,"data-filled":ge?`true`:`false`,children:[(0,vT.jsx)(`input`,{...ve,ref:cS(L,M.ref),className:c(oC(u),!y&&bT),"data-testid":j}),(0,vT.jsx)(`label`,{...ce,className:tC(u),children:o}),(0,vT.jsx)(`button`,{...pe,ref:R,className:Ww,"aria-label":I,type:`button`,children:(0,vT.jsx)(`span`,{className:Gw,"aria-hidden":`true`})}),U.isOpen?(0,vT.jsx)(uT,{isNonModal:!0,popoverRef:B,state:U,triggerRef:L,children:(0,vT.jsx)(oT,{...se,emptyState:b,listBoxRef:z,state:U})}):null]}),ye?(0,vT.jsx)(`p`,{...ue,role:`alert`,className:iC(u,!0),children:ye}):s?(0,vT.jsx)(`p`,{...le,className:iC(u,!1),children:s}):null]})}var _T,vT,yT,bT,xT;function ST(){return(ST=t((()=>{l(),ew(),Fw(),_T=e(r()),O(),ft(),ah(),Jg(),a(),oS(),VC(),lT(),hT(),Yw(),vT=G(),yT=u`
  position: relative;

  &[data-open="false"] {
    cursor: pointer;
  }

  &[data-open="false"] input,
  &[data-open="false"] button {
    cursor: pointer;
  }
`,bT=u`
  caret-color: transparent;
  user-select: none;
  cursor: pointer;
`,xT=`base`})))()}var CT;function wT(){return(wT=t((()=>{CT={},CT={rangeOverflow:e=>`\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.maxValue} \u{623}\u{648} \u{642}\u{628}\u{644} \u{630}\u{644}\u{643}.`,rangeReversed:`تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.`,rangeUnderflow:e=>`\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.minValue} \u{623}\u{648} \u{628}\u{639}\u{62F} \u{630}\u{644}\u{643}.`,unavailableDate:`البيانات المحددة غير متاحة.`}})))()}var TT;function ET(){return(ET=t((()=>{TT={},TT={rangeOverflow:e=>`\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.maxValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{440}\u{430}\u{43D}\u{43D}\u{430}.`,rangeReversed:`Началната дата трябва да е преди крайната.`,rangeUnderflow:e=>`\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.minValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{43A}\u{44A}\u{441}\u{43D}\u{43E}.`,unavailableDate:`Избраната дата не е налична.`}})))()}var DT;function OT(){return(OT=t((()=>{DT={},DT={rangeOverflow:e=>`Hodnota mus\xed b\xfdt ${e.maxValue} nebo d\u{159}\xedv\u{11B}j\u{161}\xed.`,rangeReversed:`Datum zahájení musí předcházet datu ukončení.`,rangeUnderflow:e=>`Hodnota mus\xed b\xfdt ${e.minValue} nebo pozd\u{11B}j\u{161}\xed.`,unavailableDate:`Vybrané datum není k dispozici.`}})))()}var kT;function AT(){return(AT=t((()=>{kT={},kT={rangeOverflow:e=>`V\xe6rdien skal v\xe6re ${e.maxValue} eller tidligere.`,rangeReversed:`Startdatoen skal være før slutdatoen.`,rangeUnderflow:e=>`V\xe6rdien skal v\xe6re ${e.minValue} eller nyere.`,unavailableDate:`Den valgte dato er ikke tilgængelig.`}})))()}var jT;function MT(){return(MT=t((()=>{jT={},jT={rangeOverflow:e=>`Der Wert muss ${e.maxValue} oder fr\xfcher sein.`,rangeReversed:`Das Startdatum muss vor dem Enddatum liegen.`,rangeUnderflow:e=>`Der Wert muss ${e.minValue} oder sp\xe4ter sein.`,unavailableDate:`Das ausgewählte Datum ist nicht verfügbar.`}})))()}var NT;function PT(){return(PT=t((()=>{NT={},NT={rangeOverflow:e=>`\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.maxValue} \u{3AE} \u{3C0}\u{3B1}\u{3BB}\u{3B1}\u{3B9}\u{3CC}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,rangeReversed:`Η ημερομηνία έναρξης πρέπει να είναι πριν από την ημερομηνία λήξης.`,rangeUnderflow:e=>`\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.minValue} \u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3B3}\u{3B5}\u{3BD}\u{3AD}\u{3C3}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,unavailableDate:`Η επιλεγμένη ημερομηνία δεν είναι διαθέσιμη.`}})))()}var FT;function IT(){return(IT=t((()=>{FT={},FT={rangeUnderflow:e=>`Value must be ${e.minValue} or later.`,rangeOverflow:e=>`Value must be ${e.maxValue} or earlier.`,rangeReversed:`Start date must be before end date.`,unavailableDate:`Selected date unavailable.`}})))()}var LT;function RT(){return(RT=t((()=>{LT={},LT={rangeOverflow:e=>`El valor debe ser ${e.maxValue} o anterior.`,rangeReversed:`La fecha de inicio debe ser anterior a la fecha de finalización.`,rangeUnderflow:e=>`El valor debe ser ${e.minValue} o posterior.`,unavailableDate:`Fecha seleccionada no disponible.`}})))()}var zT;function BT(){return(BT=t((()=>{zT={},zT={rangeOverflow:e=>`V\xe4\xe4rtus peab olema ${e.maxValue} v\xf5i varasem.`,rangeReversed:`Alguskuupäev peab olema enne lõppkuupäeva.`,rangeUnderflow:e=>`V\xe4\xe4rtus peab olema ${e.minValue} v\xf5i hilisem.`,unavailableDate:`Valitud kuupäev pole saadaval.`}})))()}var VT;function HT(){return(HT=t((()=>{VT={},VT={rangeOverflow:e=>`Arvon on oltava ${e.maxValue} tai sit\xe4 aikaisempi.`,rangeReversed:`Aloituspäivän on oltava ennen lopetuspäivää.`,rangeUnderflow:e=>`Arvon on oltava ${e.minValue} tai sit\xe4 my\xf6h\xe4isempi.`,unavailableDate:`Valittu päivämäärä ei ole käytettävissä.`}})))()}var UT;function WT(){return(WT=t((()=>{UT={},UT={rangeOverflow:e=>`La valeur doit \xeatre ${e.maxValue} ou ant\xe9rieure.`,rangeReversed:`La date de début doit être antérieure à la date de fin.`,rangeUnderflow:e=>`La valeur doit \xeatre ${e.minValue} ou ult\xe9rieure.`,unavailableDate:`La date sélectionnée n’est pas disponible.`}})))()}var GT;function KT(){return(KT=t((()=>{GT={},GT={rangeOverflow:e=>`\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.maxValue} \u{5D0}\u{5D5} \u{5DE}\u{5D5}\u{5E7}\u{5D3}\u{5DD} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,rangeReversed:`תאריך ההתחלה חייב להיות לפני תאריך הסיום.`,rangeUnderflow:e=>`\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.minValue} \u{5D0}\u{5D5} \u{5DE}\u{5D0}\u{5D5}\u{5D7}\u{5E8} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,unavailableDate:`התאריך הנבחר אינו זמין.`}})))()}var qT;function JT(){return(JT=t((()=>{qT={},qT={rangeOverflow:e=>`Vrijednost mora biti ${e.maxValue} ili ranije.`,rangeReversed:`Datum početka mora biti prije datuma završetka.`,rangeUnderflow:e=>`Vrijednost mora biti ${e.minValue} ili kasnije.`,unavailableDate:`Odabrani datum nije dostupan.`}})))()}var YT;function XT(){return(XT=t((()=>{YT={},YT={rangeOverflow:e=>`Az \xe9rt\xe9knek ${e.maxValue} vagy kor\xe1bbinak kell lennie.`,rangeReversed:`A kezdő dátumnak a befejező dátumnál korábbinak kell lennie.`,rangeUnderflow:e=>`Az \xe9rt\xe9knek ${e.minValue} vagy k\xe9s\u{151}bbinek kell lennie.`,unavailableDate:`A kiválasztott dátum nem érhető el.`}})))()}var ZT;function QT(){return(QT=t((()=>{ZT={},ZT={rangeOverflow:e=>`Il valore deve essere ${e.maxValue} o precedente.`,rangeReversed:`La data di inizio deve essere antecedente alla data di fine.`,rangeUnderflow:e=>`Il valore deve essere ${e.minValue} o successivo.`,unavailableDate:`Data selezionata non disponibile.`}})))()}var $T;function eE(){return(eE=t((()=>{$T={},$T={rangeOverflow:e=>`\u{5024}\u{306F} ${e.maxValue} \u{4EE5}\u{4E0B}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,rangeReversed:`開始日は終了日より前にする必要があります。`,rangeUnderflow:e=>`\u{5024}\u{306F} ${e.minValue} \u{4EE5}\u{4E0A}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,unavailableDate:`選択した日付は使用できません。`}})))()}var tE;function nE(){return(nE=t((()=>{tE={},tE={rangeOverflow:e=>`\u{AC12}\u{C740} ${e.maxValue} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,rangeReversed:`시작일은 종료일 이전이어야 합니다.`,rangeUnderflow:e=>`\u{AC12}\u{C740} ${e.minValue} \u{C774}\u{D6C4}\u{C5EC}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,unavailableDate:`선택한 날짜를 사용할 수 없습니다.`}})))()}var rE;function iE(){return(iE=t((()=>{rE={},rE={rangeOverflow:e=>`Reik\u{161}m\u{117} turi b\u{16B}ti ${e.maxValue} arba ankstesn\u{117}.`,rangeReversed:`Pradžios data turi būti ankstesnė nei pabaigos data.`,rangeUnderflow:e=>`Reik\u{161}m\u{117} turi b\u{16B}ti ${e.minValue} arba naujesn\u{117}.`,unavailableDate:`Pasirinkta data nepasiekiama.`}})))()}var aE;function oE(){return(oE=t((()=>{aE={},aE={rangeOverflow:e=>`V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.maxValue} vai agr\u{101}kai.`,rangeReversed:`Sākuma datumam ir jābūt pirms beigu datuma.`,rangeUnderflow:e=>`V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.minValue} vai v\u{113}l\u{101}kai.`,unavailableDate:`Atlasītais datums nav pieejams.`}})))()}var sE;function cE(){return(cE=t((()=>{sE={},sE={rangeOverflow:e=>`Verdien m\xe5 v\xe6re ${e.maxValue} eller tidligere.`,rangeReversed:`Startdatoen må være før sluttdatoen.`,rangeUnderflow:e=>`Verdien m\xe5 v\xe6re ${e.minValue} eller senere.`,unavailableDate:`Valgt dato utilgjengelig.`}})))()}var lE;function uE(){return(uE=t((()=>{lE={},lE={rangeOverflow:e=>`Waarde moet ${e.maxValue} of eerder zijn.`,rangeReversed:`De startdatum moet voor de einddatum liggen.`,rangeUnderflow:e=>`Waarde moet ${e.minValue} of later zijn.`,unavailableDate:`Geselecteerde datum niet beschikbaar.`}})))()}var dE;function fE(){return(fE=t((()=>{dE={},dE={rangeOverflow:e=>`Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.maxValue} lub wcze\u{15B}niejsz\u{105}.`,rangeReversed:`Data rozpoczęcia musi być wcześniejsza niż data zakończenia.`,rangeUnderflow:e=>`Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.minValue} lub p\xf3\u{17A}niejsz\u{105}.`,unavailableDate:`Wybrana data jest niedostępna.`}})))()}var pE;function mE(){return(mE=t((()=>{pE={},pE={rangeOverflow:e=>`O valor deve ser ${e.maxValue} ou anterior.`,rangeReversed:`A data inicial deve ser anterior à data final.`,rangeUnderflow:e=>`O valor deve ser ${e.minValue} ou posterior.`,unavailableDate:`Data selecionada indisponível.`}})))()}var hE;function gE(){return(gE=t((()=>{hE={},hE={rangeOverflow:e=>`O valor tem de ser ${e.maxValue} ou anterior.`,rangeReversed:`A data de início deve ser anterior à data de fim.`,rangeUnderflow:e=>`O valor tem de ser ${e.minValue} ou posterior.`,unavailableDate:`Data selecionada indisponível.`}})))()}var _E;function vE(){return(vE=t((()=>{_E={},_E={rangeOverflow:e=>`Valoarea trebuie s\u{103} fie ${e.maxValue} sau anterioar\u{103}.`,rangeReversed:`Data de început trebuie să fie anterioară datei de sfârșit.`,rangeUnderflow:e=>`Valoarea trebuie s\u{103} fie ${e.minValue} sau ulterioar\u{103}.`,unavailableDate:`Data selectată nu este disponibilă.`}})))()}var yE;function bE(){return(bE=t((()=>{yE={},yE={rangeOverflow:e=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{43F}\u{43E}\u{437}\u{436}\u{435} ${e.maxValue}.`,rangeReversed:`Дата начала должна предшествовать дате окончания.`,rangeUnderflow:e=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{44C}\u{448}\u{435} ${e.minValue}.`,unavailableDate:`Выбранная дата недоступна.`}})))()}var xE;function SE(){return(SE=t((()=>{xE={},xE={rangeOverflow:e=>`Hodnota mus\xed by\u{165} ${e.maxValue} alebo skor\u{161}ia.`,rangeReversed:`Dátum začiatku musí byť skorší ako dátum konca.`,rangeUnderflow:e=>`Hodnota mus\xed by\u{165} ${e.minValue} alebo neskor\u{161}ia.`,unavailableDate:`Vybratý dátum je nedostupný.`}})))()}var CE;function wE(){return(wE=t((()=>{CE={},CE={rangeOverflow:e=>`Vrednost mora biti ${e.maxValue} ali starej\u{161}a.`,rangeReversed:`Začetni datum mora biti pred končnim datumom.`,rangeUnderflow:e=>`Vrednost mora biti ${e.minValue} ali novej\u{161}a.`,unavailableDate:`Izbrani datum ni na voljo.`}})))()}var TE;function EE(){return(EE=t((()=>{TE={},TE={rangeOverflow:e=>`Vrednost mora da bude ${e.maxValue} ili starija.`,rangeReversed:`Datum početka mora biti pre datuma završetka.`,rangeUnderflow:e=>`Vrednost mora da bude ${e.minValue} ili novija.`,unavailableDate:`Izabrani datum nije dostupan.`}})))()}var DE;function OE(){return(OE=t((()=>{DE={},DE={rangeOverflow:e=>`V\xe4rdet m\xe5ste vara ${e.maxValue} eller tidigare.`,rangeReversed:`Startdatumet måste vara före slutdatumet.`,rangeUnderflow:e=>`V\xe4rdet m\xe5ste vara ${e.minValue} eller senare.`,unavailableDate:`Det valda datumet är inte tillgängligt.`}})))()}var kE;function AE(){return(AE=t((()=>{kE={},kE={rangeOverflow:e=>`De\u{11F}er, ${e.maxValue} veya \xf6ncesi olmal\u{131}d\u{131}r.`,rangeReversed:`Başlangıç tarihi bitiş tarihinden önce olmalıdır.`,rangeUnderflow:e=>`De\u{11F}er, ${e.minValue} veya sonras\u{131} olmal\u{131}d\u{131}r.`,unavailableDate:`Seçilen tarih kullanılamıyor.`}})))()}var jE;function ME(){return(ME=t((()=>{jE={},jE={rangeOverflow:e=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{43F}\u{456}\u{437}\u{43D}\u{456}\u{448}\u{435} ${e.maxValue}.`,rangeReversed:`Дата початку має передувати даті завершення.`,rangeUnderflow:e=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{456}\u{448}\u{435} ${e.minValue}.`,unavailableDate:`Вибрана дата недоступна.`}})))()}var NE;function PE(){return(PE=t((()=>{NE={},NE={rangeOverflow:e=>`\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{65E5}\u{671F}\u{3002}`,rangeReversed:`开始日期必须早于结束日期。`,rangeUnderflow:e=>`\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{65E5}\u{671F}\u{3002}`,unavailableDate:`所选日期不可用。`}})))()}var FE;function IE(){return(IE=t((()=>{FE={},FE={rangeOverflow:e=>`\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{3002}`,rangeReversed:`開始日期必須在結束日期之前。`,rangeUnderflow:e=>`\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{3002}`,unavailableDate:`所選日期無法使用。`}})))()}var LE;function RE(){return(RE=t((()=>{wT(),ET(),OT(),AT(),MT(),PT(),IT(),RT(),BT(),HT(),WT(),KT(),JT(),XT(),QT(),eE(),nE(),iE(),oE(),cE(),uE(),fE(),mE(),gE(),vE(),bE(),SE(),wE(),EE(),OE(),AE(),ME(),PE(),IE(),LE={},LE={"ar-AE":CT,"bg-BG":TT,"cs-CZ":DT,"da-DK":kT,"de-DE":jT,"el-GR":NT,"en-US":FT,"es-ES":LT,"et-EE":zT,"fi-FI":VT,"fr-FR":UT,"he-IL":GT,"hr-HR":qT,"hu-HU":YT,"it-IT":ZT,"ja-JP":$T,"ko-KR":tE,"lt-LT":rE,"lv-LV":aE,"nb-NO":sE,"nl-NL":lE,"pl-PL":dE,"pt-BR":pE,"pt-PT":hE,"ro-RO":_E,"ru-RU":yE,"sk-SK":xE,"sl-SI":CE,"sr-SP":TE,"sv-SE":DE,"tr-TR":kE,"uk-UA":jE,"zh-CN":NE,"zh-TW":FE}})))()}function zE(e){return e&&e.__esModule?e.default:e}function BE(){let e=typeof navigator<`u`&&(navigator.language||navigator.userLanguage)||`en-US`;try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e=`en-US`}return e}function VE(e,t,n,r,i){let a=e!=null&&n!=null&&e.compare(n)>0,o=e!=null&&t!=null&&e.compare(t)<0,s=e!=null&&r?.(e)||!1,c=a||o||s,l=[];if(c){let e=BE(),r=Ie.getGlobalDictionaryForPackage(`@react-stately/datepicker`)||JE,c=new Ne(e,r),u=new nc(e,HE({},i)),d=u.resolvedOptions().timeZone;o&&t!=null&&l.push(c.format(`rangeUnderflow`,{minValue:u.format(t.toDate(d))})),a&&n!=null&&l.push(c.format(`rangeOverflow`,{maxValue:u.format(n.toDate(d))})),s&&l.push(c.format(`unavailableDate`))}return{isInvalid:c,validationErrors:l,validationDetails:{badInput:s,customError:!1,patternMismatch:!1,rangeOverflow:a,rangeUnderflow:o,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!c}}}function HE(e,t){e={...t.shouldForceLeadingZeros?XE:YE,...e};let n=t.granularity||`minute`,r=Object.keys(e),i=r.indexOf(t.maxGranularity??`year`);i<0&&(i=0);let a=r.indexOf(n);if(a<0&&(a=2),i>a)throw Error(`maxGranularity must be greater than granularity`);let o=r.slice(i,a+1).reduce((t,n)=>(t[n]=e[n],t),{});return t.hourCycle!=null&&(o.hour12=t.hourCycle===12),o.timeZone=t.timeZone||`UTC`,(n===`hour`||n===`minute`||n===`second`)&&t.timeZone&&!t.hideTimeZone&&(o.timeZoneName=`short`),t.showEra&&i===0&&(o.era=`short`),o}function UE(e){return e&&`hour`in e?e:new jo}function WE(e,t){if(e===null)return null;if(e)return Fa(e,t)}function GE(e,t,n,r){if(e)return WE(e,n);let i=Fa(ea(r??aa()).set({hour:0,minute:0,second:0,millisecond:0}),n);return t===`year`||t===`month`||t===`day`?Ma(i):r?i:Na(i)}function KE(e,t){let n=e&&`timeZone`in e?e.timeZone:void 0,r=e&&`minute`in e?`minute`:`day`;if(e&&t&&!(t in e))throw Error(`Invalid granularity `+t+` for value `+e.toString());let[i,a]=(0,qE.useState)([r,n]);e&&(i[0]!==r||i[1]!==n)&&a([r,n]),t||=e?r:i[0];let o=e?n:i[1];return[t,o]}var qE,JE,YE,XE;function ZE(){return(ZE=t((()=>{RE(),oc(),No(),Va(),Sa(),Ae(),Pe(),qE=r(),JE=new Ie(zE(LE)),YE={year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`2-digit`,second:`2-digit`},XE={year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`}})))()}function QE(e){let t=nt(e),[n,r]=ot(e.value,e.defaultValue||null,e.onChange),[i]=(0,$E.useState)(n),a=n||e.placeholderValue||null,[o,s]=KE(a,e.granularity),c=n==null?null:n.toDate(s??`UTC`),l=o===`hour`||o===`minute`||o===`second`,u=e.shouldCloseOnSelect??!0,[d,f]=(0,$E.useState)(null),[p,m]=(0,$E.useState)(null);if(n&&(d=n,`hour`in n&&(p=n)),a&&!(o in a))throw Error(`Invalid granularity `+o+` for value `+a.toString());let h=n?.calendar.identifier===`gregory`&&n.era===`BC`,g=(0,$E.useMemo)(()=>({granularity:o,timeZone:s,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,shouldForceLeadingZeros:e.shouldForceLeadingZeros,showEra:h}),[o,e.hourCycle,e.shouldForceLeadingZeros,s,e.hideTimeZone,h]),{minValue:_,maxValue:v,isDateUnavailable:y}=e,b=(0,$E.useMemo)(()=>VE(n,_,v,y,g),[n,_,v,y,g]),x=il({...e,value:n,builtinValidation:b}),S=x.displayValidation.isInvalid,C=e.validationState||(S?`invalid`:null),w=(e,t)=>{r(`timeZone`in t?t.set(Ma(e)):Na(e,t)),f(null),m(null),x.commitValidation()},T=n=>{let i=typeof u==`function`?u():u;l?p||i?w(n,p||UE(e.defaultValue||e.placeholderValue)):f(n):(r(n),x.commitValidation()),i&&t.setOpen(!1)},E=e=>{d&&e?w(d,e):m(e)};return{...x,value:n,defaultValue:e.defaultValue??i,setValue:r,dateValue:d,timeValue:p,setDateValue:T,setTimeValue:E,granularity:o,hasTime:l,...t,setOpen(r){!r&&!n&&d&&l&&w(d,p||UE(e.defaultValue||e.placeholderValue)),t.setOpen(r)},validationState:C,isInvalid:S,formatValue(e,t){if(!c)return``;let n=HE(t,g);return new nc(e,n).format(c)},getDateFormatter(e,t){let n=HE({},{...g,...t});return new nc(e,n)}}}var $E;function eD(){return(eD=t((()=>{ZE(),gl(),Ze(),Ue(),Va(),oc(),$E=r()})))()}function tD(e,t,n){return e===`era`||e===`dayPeriod`?t:e===`year`||e===`month`||e===`day`?nD.getStringForLocale(e,n):`––`}var nD;function rD(){return(rD=t((()=>{Ae(),nD=new Ie({ach:{year:`mwaka`,month:`dwe`,day:`nino`},af:{year:`jjjj`,month:`mm`,day:`dd`},am:{year:`ዓዓዓዓ`,month:`ሚሜ`,day:`ቀቀ`},an:{year:`aaaa`,month:`mm`,day:`dd`},ar:{year:`سنة`,month:`شهر`,day:`يوم`},ast:{year:`aaaa`,month:`mm`,day:`dd`},az:{year:`iiii`,month:`aa`,day:`gg`},be:{year:`гггг`,month:`мм`,day:`дд`},bg:{year:`гггг`,month:`мм`,day:`дд`},bn:{year:`yyyy`,month:`মিমি`,day:`dd`},br:{year:`bbbb`,month:`mm`,day:`dd`},bs:{year:`gggg`,month:`mm`,day:`dd`},ca:{year:`aaaa`,month:`mm`,day:`dd`},cak:{year:`jjjj`,month:`ii`,day:`q'q'`},ckb:{year:`ساڵ`,month:`مانگ`,day:`ڕۆژ`},cs:{year:`rrrr`,month:`mm`,day:`dd`},cy:{year:`bbbb`,month:`mm`,day:`dd`},da:{year:`åååå`,month:`mm`,day:`dd`},de:{year:`jjjj`,month:`mm`,day:`tt`},dsb:{year:`llll`,month:`mm`,day:`źź`},el:{year:`εεεε`,month:`μμ`,day:`ηη`},en:{year:`yyyy`,month:`mm`,day:`dd`},eo:{year:`jjjj`,month:`mm`,day:`tt`},es:{year:`aaaa`,month:`mm`,day:`dd`},et:{year:`aaaa`,month:`kk`,day:`pp`},eu:{year:`uuuu`,month:`hh`,day:`ee`},fa:{year:`سال`,month:`ماه`,day:`روز`},ff:{year:`hhhh`,month:`ll`,day:`ññ`},fi:{year:`vvvv`,month:`kk`,day:`pp`},fr:{year:`aaaa`,month:`mm`,day:`jj`},fy:{year:`jjjj`,month:`mm`,day:`dd`},ga:{year:`bbbb`,month:`mm`,day:`ll`},gd:{year:`bbbb`,month:`mm`,day:`ll`},gl:{year:`aaaa`,month:`mm`,day:`dd`},he:{year:`שנה`,month:`חודש`,day:`יום`},hr:{year:`gggg`,month:`mm`,day:`dd`},hsb:{year:`llll`,month:`mm`,day:`dd`},hu:{year:`éééé`,month:`hh`,day:`nn`},ia:{year:`aaaa`,month:`mm`,day:`dd`},id:{year:`tttt`,month:`bb`,day:`hh`},is:{year:`áááá`,month:`mm`,day:`dd`},it:{year:`aaaa`,month:`mm`,day:`gg`},ja:{year:`年`,month:`月`,day:`日`},ka:{year:`წწწწ`,month:`თთ`,day:`რრ`},kk:{year:`жжжж`,month:`аа`,day:`кк`},kn:{year:`ವವವವ`,month:`ಮಿಮೀ`,day:`ದಿದಿ`},ko:{year:`연도`,month:`월`,day:`일`},lb:{year:`jjjj`,month:`mm`,day:`dd`},lo:{year:`ປປປປ`,month:`ດດ`,day:`ວວ`},lt:{year:`mmmm`,month:`mm`,day:`dd`},lv:{year:`gggg`,month:`mm`,day:`dd`},meh:{year:`aaaa`,month:`mm`,day:`dd`},ml:{year:`വർഷം`,month:`മാസം`,day:`തീയതി`},ms:{year:`tttt`,month:`mm`,day:`hh`},nb:{year:`åååå`,month:`mm`,day:`dd`},nl:{year:`jjjj`,month:`mm`,day:`dd`},nn:{year:`åååå`,month:`mm`,day:`dd`},no:{year:`åååå`,month:`mm`,day:`dd`},oc:{year:`aaaa`,month:`mm`,day:`jj`},pl:{year:`rrrr`,month:`mm`,day:`dd`},pt:{year:`aaaa`,month:`mm`,day:`dd`},rm:{year:`oooo`,month:`mm`,day:`dd`},ro:{year:`aaaa`,month:`ll`,day:`zz`},ru:{year:`гггг`,month:`мм`,day:`дд`},sc:{year:`aaaa`,month:`mm`,day:`dd`},scn:{year:`aaaa`,month:`mm`,day:`jj`},sk:{year:`rrrr`,month:`mm`,day:`dd`},sl:{year:`llll`,month:`mm`,day:`dd`},sr:{year:`гггг`,month:`мм`,day:`дд`},"sr-Latn":{year:`gggg`,month:`mm`,day:`dd`},sv:{year:`åååå`,month:`mm`,day:`dd`},szl:{year:`rrrr`,month:`mm`,day:`dd`},tg:{year:`сссс`,month:`мм`,day:`рр`},th:{year:`ปปปป`,month:`ดด`,day:`วว`},tr:{year:`yyyy`,month:`aa`,day:`gg`},uk:{year:`рррр`,month:`мм`,day:`дд`},"zh-CN":{year:`年`,month:`月`,day:`日`},"zh-TW":{year:`年`,month:`月`,day:`日`}},`en`)})))()}function iD(e,t,n,r,i=!1){if(i){e+=Math.sign(t),e<n&&(e=r);let i=Math.abs(t);e=t>0?Math.ceil(e/i)*i:Math.floor(e/i)*i,e>r&&(e=n)}else e+=t,e<n?e=r-(n-e-1):e>r&&(e=n+(e-r-1));return e}function aD(e,t){let n=+(e>=12);switch(t){case`h11`:e>=12&&(e-=12);break;case`h12`:e===0?e=12:e>12&&(e-=12);break;case`h23`:n=null;break;case`h24`:e+=1,n=null}return[n,e]}function oD(e,t,n){switch(n){case`h11`:t===1&&(e+=12);break;case`h12`:e===12&&(e=0),t===1&&(e+=12);break;case`h24`:--e}return e}var sD;function cD(){return(cD=t((()=>{No(),sD=class e{constructor(e,t,n){if(this.era=n?.era??null,this.calendar=e,this.year=n?.year??null,this.month=n?.month??null,this.day=n?.day??null,this.hour=n?.hour??null,this.hourCycle=t,this.dayPeriod=null,this.minute=n?.minute??null,this.second=n?.second??null,this.millisecond=n?.millisecond??null,this.offset=`offset`in(n??{})?n.offset:null,this.hour!=null){let[e,n]=aD(this.hour,t);this.dayPeriod=e,this.hour=n}}copy(){let t=new e(this.calendar,this.hourCycle);return t.era=this.era,t.year=this.year,t.month=this.month,t.day=this.day,t.hour=this.hour,t.dayPeriod=this.dayPeriod,t.minute=this.minute,t.second=this.second,t.millisecond=this.millisecond,t.offset=this.offset,t}isComplete(e){return e.every(e=>this[e]!=null)}validate(e,t){return t.every(t=>{if((t===`hour`||t===`dayPeriod`)&&`hour`in e){let[t,n]=aD(e.hour,this.hourCycle);return this.dayPeriod===t&&this.hour===n}return this[t]===e[t]})}isCleared(e){return e.every(e=>this[e]===null)}set(e,t,n){let r=this.copy();return r[e]=t,e===`hour`&&r.dayPeriod==null&&`hour`in n&&(r.dayPeriod=aD(n.hour,this.hourCycle)[0]),e===`year`&&r.era==null&&(r.era=n.era),e!==`second`&&e!==`literal`&&e!==`timeZoneName`&&(r.offset=null),r}clear(e){let t=this.copy();return t[e]=null,e===`year`&&(t.era=null),t.offset=null,t}cycle(e,t,n,r){let i=this.copy();if(i[e]==null&&e!==`dayPeriod`&&e!==`era`){if(e===`hour`&&`hour`in n){let[e,t]=aD(n.hour,this.hourCycle);i.dayPeriod=e,i.hour=t}else i[e]=n[e];return e===`year`&&i.era==null&&(i.era=n.era),i}switch(e){case`era`:{let e=this.calendar.getEras(),n=e.indexOf(i.era);n=iD(n,t,0,e.length-1),i.era=e[n];break}case`year`:{let r=new Ao(this.calendar,this.era??n.era,this.year??n.year,this.month??1,this.day??1);r=r.cycle(e,t,{round:e===`year`}),i.era=r.era,i.year=r.year;break}case`month`:i.month=iD(i.month??1,t,1,this.calendar.getMaximumMonthsInYear());break;case`day`:i.day=iD(i.day??1,t,1,this.calendar.getMaximumDaysInMonth());break;case`hour`:{let e=r.some(e=>[`year`,`month`,`day`].includes(e));if(`timeZone`in n&&(!e||i.year!=null&&i.month!=null&&i.day!=null)){let e=this.toValue(n);e=e.cycle(`hour`,t,{hourCycle:this.hourCycle===`h12`?12:24,round:!1});let[r,a]=aD(e.hour,this.hourCycle);i.hour=a,i.dayPeriod=r,i.offset=e.offset}else{let e=i.hour??0,r=this.getSegmentLimits(`hour`);i.hour=iD(e,t,r.minValue,r.maxValue),i.dayPeriod==null&&`hour`in n&&(i.dayPeriod=aD(n.hour,this.hourCycle)[0])}break}case`dayPeriod`:i.dayPeriod=iD(i.dayPeriod??0,t,0,1);break;case`minute`:i.minute=iD(i.minute??0,t,0,59,!0);break;case`second`:i.second=iD(i.second??0,t,0,59,!0)}return i}toValue(e){if(`hour`in e){let t=this.hour;t==null?(this.hourCycle===`h12`||this.hourCycle===`h11`)&&(t=this.dayPeriod===1?12:0):t=oD(t,this.dayPeriod??0,this.hourCycle);let n=e.set({era:this.era??e.era,year:this.year??e.year,month:this.month??e.month,day:this.day??e.day,hour:t??e.hour,minute:this.minute??e.minute,second:this.second??e.second,millisecond:this.millisecond??e.millisecond});return`offset`in n&&this.offset!=null&&n.offset!==this.offset&&(n=n.add({milliseconds:n.offset-this.offset})),n}return e.set({era:this.era??e.era,year:this.year??e.year,month:this.month??e.month,day:this.day??e.day})}getSegmentLimits(e){switch(e){case`era`:{let e=this.calendar.getEras();return{value:this.era==null?e.length-1:e.indexOf(this.era),minValue:0,maxValue:e.length-1}}case`year`:return{value:this.year,minValue:1,maxValue:9999};case`month`:return{value:this.month,minValue:1,maxValue:this.calendar.getMaximumMonthsInYear()};case`day`:return{value:this.day,minValue:1,maxValue:this.calendar.getMaximumDaysInMonth()};case`dayPeriod`:return{value:this.dayPeriod,minValue:0,maxValue:1};case`hour`:{let e=0,t=23;return this.hourCycle===`h12`?(e=1,t=12):this.hourCycle===`h11`&&(e=0,t=11),{value:this.hour,minValue:e,maxValue:t}}case`minute`:return{value:this.minute,minValue:0,maxValue:59};case`second`:return{value:this.second,minValue:0,maxValue:59}}}}})))()}function lD(e){let{locale:t,createCalendar:n,hideTimeZone:r,isDisabled:i=!1,isReadOnly:a=!1,isRequired:o=!1,minValue:s,maxValue:c,isDateUnavailable:l}=e,u=e.value||e.defaultValue||e.placeholderValue||null,[d,f]=KE(u,e.granularity),p=f||`UTC`;if(u&&!(d in u))throw Error(`Invalid granularity `+d+` for value `+u.toString());let[m,h]=(0,dD.useMemo)(()=>{let r=new nc(t,{dateStyle:`short`,timeStyle:`short`,hour12:e.hourCycle==null?void 0:e.hourCycle===12}).resolvedOptions();return[n(r.calendar),r.hourCycle]},[t,e.hourCycle,n]),[g,_]=ot(e.value,e.defaultValue??null,e.onChange),[v]=(0,dD.useState)(g),y=(0,dD.useMemo)(()=>WE(g,m)??null,[g,m]),[b,x]=(0,dD.useState)(()=>new sD(m,h,y)),S=m.identifier===`gregory`&&b.era===`BC`,C=(0,dD.useMemo)(()=>({granularity:d,maxGranularity:e.maxGranularity??`year`,timeZone:f,hideTimeZone:r,hourCycle:e.hourCycle,showEra:S,shouldForceLeadingZeros:e.shouldForceLeadingZeros}),[e.maxGranularity,d,e.hourCycle,e.shouldForceLeadingZeros,f,r,S]),w=(0,dD.useMemo)(()=>HE({},C),[C]),T=(0,dD.useMemo)(()=>new nc(t,w),[t,w]),E=(0,dD.useMemo)(()=>T.resolvedOptions(),[T]),D=(0,dD.useMemo)(()=>GE(e.placeholderValue,d,m,f),[e.placeholderValue,d,m,f]),O=(0,dD.useMemo)(()=>{let t=h===`h11`||h===`h12`,n=[`era`,`year`,`month`,`day`,`hour`,...t?[`dayPeriod`]:[],`minute`,`second`],r=n.indexOf(e.maxGranularity||`era`),i=n.indexOf(d===`hour`&&t?`dayPeriod`:d);return n.slice(r,i+1)},[e.maxGranularity,d,h]),[k,A]=(0,dD.useState)(y),[j,M]=(0,dD.useState)(m),[N,P]=(0,dD.useState)(h);(y!==k||h!==N||!Zi(m,j))&&(b=new sD(m,h,y),A(y),M(m),P(h),x(b));let F=t=>{if(!(e.isDisabled||e.isReadOnly)){if(t==null||t instanceof sD&&t.isCleared(O))x(new sD(m,h,y)),_(null);else if(!(t instanceof sD))t=Fa(t,u?.calendar||new Wi),x(new sD(m,h,y)),_(t);else{if(t.isComplete(O)){let e=t.toValue(y??D);if(t.validate(e,O)){let t=Fa(e,u?.calendar||new Wi);if(!g||t.compare(g)!==0){x(new sD(m,h,y)),_(t);return}}}x(t)}}},I=(0,dD.useMemo)(()=>b.toValue(y??D).toDate(p),[b,p,y,D]),L=(0,dD.useMemo)(()=>uD(I,b,T,E,m,t,d),[I,T,E,b,m,t,d]),R=(e,t)=>{F(b.cycle(e,t,D,O))},z=(0,dD.useMemo)(()=>VE(g,s,c,l,C),[g,s,c,l,C]),B=il({...e,value:g,builtinValidation:z}),V=B.displayValidation.isInvalid,ee=e.validationState||(V?`invalid`:null);return{...B,value:y,defaultValue:e.defaultValue??v,dateValue:I,calendar:m,setValue:F,segments:L,dateFormatter:T,validationState:ee,isInvalid:V,granularity:d,maxGranularity:e.maxGranularity??`year`,isDisabled:i,isReadOnly:a,isRequired:o,increment(e){R(e,1)},decrement(e){R(e,-1)},incrementPage(e){R(e,pD[e]||1)},decrementPage(e){R(e,-(pD[e]||1))},incrementToMax(e){let t=e===`hour`&&h===`h12`?11:b.getSegmentLimits(e).maxValue;F(b.set(e,t,D))},decrementToMin(e){let t=e===`hour`&&h===`h12`?12:b.getSegmentLimits(e).minValue;F(b.set(e,t,D))},setSegment(e,t){F(b.set(e,t,D))},confirmPlaceholder(){if(!(e.isDisabled||e.isReadOnly)&&b.isComplete(O)){let e=Fa(b.toValue(y??D),u?.calendar||new Wi);(!g||e.compare(g)!==0)&&_(e),x(new sD(m,h,y))}},clearSegment(e){let t=b;e!==`timeZoneName`&&e!==`literal`&&(t=b.clear(e)),F(t)},formatValue(e){if(!y)return``;let n=HE(e,C);return new nc(t,n).format(I)},getDateFormatter(e,t){let n=HE({},{...C,...t});return new nc(e,n)}}}function uD(e,t,n,r,i,a,o){let s=[`hour`,`minute`,`second`],c=n.formatToParts(e),l=new Ll(a,{useGrouping:!1}),u=new Ll(a,{useGrouping:!1,minimumIntegerDigits:2});for(let e of c)if(e.type===`year`||e.type===`month`||e.type===`day`||e.type===`hour`){let n=t[e.type]??0;e.value=r[e.type]===`2-digit`?u.format(n):l.format(n)}let d=[];for(let e of c){let n=mD[e.type]||e.type,r=fD[n];n===`era`&&i.getEras().length===1&&(r=!1);let c=fD[n]&&t[e.type]==null,l=fD[n]?tD(n,e.value,a):null,u={type:n,text:c?l:e.value,...t.getSegmentLimits(n),isPlaceholder:c,placeholder:l,isEditable:r};n===`hour`?(d.push({type:`literal`,text:`⁦`,isPlaceholder:!1,placeholder:``,isEditable:!1}),d.push(u),n===o&&d.push({type:`literal`,text:`⁩`,isPlaceholder:!1,placeholder:``,isEditable:!1})):s.includes(n)&&n===o?(d.push(u),d.push({type:`literal`,text:`⁩`,isPlaceholder:!1,placeholder:``,isEditable:!1})):d.push(u)}return d}var dD,fD,pD,mD;function hD(){return(hD=t((()=>{ZE(),gl(),rD(),cD(),Ue(),oc(),Sa(),Va(),Gi(),Rl(),dD=r(),fD={year:!0,month:!0,day:!0,hour:!0,minute:!0,second:!0,dayPeriod:!0,era:!0},pD={year:5,month:2,day:7,hour:2,minute:15,second:15},mD={dayperiod:`dayPeriod`,relatedYear:`year`,yearName:`literal`,unknown:`literal`}})))()}function gD(e){let{placeholderValue:t=new jo,minValue:n,maxValue:r,defaultValue:i,granularity:a,validate:o}=e,[s,c]=ot(e.value,i??null,e.onChange),l=s||t,u=l&&`day`in l?l:void 0,d=i&&`timeZone`in i?i.timeZone:void 0,f=(0,vD.useMemo)(()=>{let e=l&&`timeZone`in l?l.timeZone:void 0;return(e||d)&&t?Ia(_D(t),e||d):_D(t)},[t,l,d]),p=(0,vD.useMemo)(()=>_D(n,u),[n,u]),m=(0,vD.useMemo)(()=>_D(r,u),[r,u]),h=(0,vD.useMemo)(()=>s&&`day`in s?Pa(s):s,[s]),g=(0,vD.useMemo)(()=>s==null?null:_D(s),[s]),_=(0,vD.useMemo)(()=>i==null?null:_D(i),[i]),v=e=>{c(u||d?e:e&&Pa(e))};return{...lD({...e,value:g,defaultValue:_,minValue:p,maxValue:m,onChange:v,granularity:a||`minute`,maxGranularity:`hour`,placeholderValue:f??void 0,createCalendar:()=>new Wi,validate:(0,vD.useCallback)(()=>o?.(s),[o,s])}),timeValue:h}}function _D(e,t=ta(aa())){return e?`day`in e?e:Na(t,e):null}var vD;function yD(){return(yD=t((()=>{hD(),Ue(),No(),Va(),Gi(),Sa(),vD=r()})))()}function bD(e){let t=-e.getTimezoneOffset(),n=t<0?`-`:`+`,r=Math.abs(t);return`UTC${n}${xD(Math.floor(r/60))}:${xD(r%60)}`}var xD;function SD(){return(SD=t((()=>{xD=e=>String(e).padStart(2,`0`)})))()}function CD(e,t,n){return t!=null&&e.compare(t)<0||n!=null&&e.compare(n)>0}function wD(e,t,n,r,i){let a={};for(let e in t)a[e]=Math.floor(t[e]/2),a[e]>0&&t[e]%2==0&&a[e]--;return DD(e,TD(e,t,n).subtract(a),t,n,r,i)}function TD(e,t,n,r,i){let a=e;return t.years?a=la(e):t.months?a=sa(e):(t.weeks||t.days&&t.days>7)&&(a=ua(e,n)),DD(e,a,t,n,r,i)}function ED(e,t,n,r,i){let a={...t};return a.days?a.days--:a.weeks?a.weeks--:a.months?a.months--:a.years&&a.years--,DD(e,TD(e,t,n).subtract(a),t,n,r,i)}function DD(e,t,n,r,i,a){if(i&&e.compare(i)>=0){let e=ga(t,TD(Ma(i),n,r));e&&(t=e)}if(a&&e.compare(a)<=0){let e=ha(t,ED(Ma(a),n,r));e&&(t=e)}return t}function OD(e,t,n){if(t){let n=ga(e,Ma(t));n&&(e=n)}if(n){let t=ha(e,Ma(n));t&&(e=t)}return e}function kD(e,t,n){if(!n)return e;for(;e.compare(t)>=0&&n(e);)e=e.subtract({days:1});return e.compare(t)>=0?e:null}function AD(e,t){return e===t||e.days===t.days&&e.weeks===t.weeks&&e.months===t.months&&e.years===t.years}function jD(){return(jD=t((()=>{Sa(),Va()})))()}function MD(e){let t=(0,PD.useMemo)(()=>new nc(e.locale),[e.locale]),n=(0,PD.useMemo)(()=>t.resolvedOptions(),[t]),{locale:r,createCalendar:i,visibleDuration:a={months:1},minValue:o,maxValue:s,selectionAlignment:c,isDateUnavailable:l,pageBehavior:u=`visible`,selectionMode:d=`single`,firstDayOfWeek:f,weeksInMonth:p}=e,m=(0,PD.useMemo)(()=>i(n.calendar),[i,n.calendar]),[h,g]=ot(e.value,e.defaultValue??null,e.onChange),_=(0,PD.useMemo)(()=>Array.isArray(h)?h.map(e=>Fa(Ma(e),m)):h?Fa(Ma(h),m):null,[h,m]),v=(0,PD.useMemo)(()=>{let e=Array.isArray(h)?h[0]:h;return e&&`timeZone`in e?e.timeZone:n.timeZone},[h,n.timeZone]),y=(0,PD.useMemo)(()=>e.focusedValue?OD(Fa(Ma(e.focusedValue),m),o,s):void 0,[e.focusedValue,m,o,s]),b=(0,PD.useMemo)(()=>e.defaultFocusedValue?OD(Fa(Ma(e.defaultFocusedValue),m),o,s):OD(_?Array.isArray(_)?_[0]:_:Fa(ta(v),m),o,s),[e.defaultFocusedValue,_,v,m,o,s]),[x,S]=ot(y,b,e.onFocusChange),C=()=>{switch(c){case`start`:return TD(x,a,r,o,s);case`end`:return ED(x,a,r,o,s);default:return wD(x,a,r,o,s)}},[w,T]=(0,PD.useState)(C),[E,D]=(0,PD.useState)(e.autoFocus||!1),[O,k]=(0,PD.useState)(a);AD(a,O)||(k(a),T(C()));let A=(0,PD.useMemo)(()=>{let e={...a};return e.days?e.days--:e.days=-1,w.add(e)},[w,a]),[j,M]=(0,PD.useState)(m);if(!Zi(m,j)){let e=Fa(x,m);T(wD(e,a,r,o,s)),S(e),M(m)}CD(x,o,s)?S(OD(x,o,s)):x.compare(w)<0?T(ED(x,a,r,o,s)):x.compare(A)>0&&T(TD(x,a,r,o,s));function N(e){e=OD(e,o,s),S(e)}function P(e){let t=kD(OD(e,o,s),w,l);if(!t)return null;let n=Array.isArray(h)?h[0]:h,r=Fa(t,n?.calendar||new Wi);return n&&`hour`in n?n.set(r):r}function F(t){if(!e.isDisabled&&!e.isReadOnly){if(t===null){g(d===`multiple`?[]:null);return}if(Array.isArray(t))g(t.map(P).filter(Boolean));else{let e=P(t);e&&g(e)}}}let I=(0,PD.useMemo)(()=>_?Array.isArray(_)?_.some(e=>l?.(e)||CD(e,o,s)):l?.(_)||CD(_,o,s):!1,[_,l,o,s]),L=e.isInvalid||e.validationState===`invalid`||I,R=L?`invalid`:null,z=(0,PD.useMemo)(()=>u===`visible`?a:ND(a),[u,a]);return{isDisabled:e.isDisabled??!1,isReadOnly:e.isReadOnly??!1,value:_,setValue:F,selectionMode:d,visibleDuration:a,visibleRange:{start:w,end:A},minValue:o,maxValue:s,focusedDate:x,timeZone:v,validationState:R,isValueInvalid:L,setFocusedDate(e){N(e)},focusNextDay(){N(x.add({days:1}))},focusPreviousDay(){N(x.subtract({days:1}))},focusNextRow(){a.days?this.focusNextPage():(a.weeks||a.months||a.years)&&N(x.add({weeks:1}))},focusPreviousRow(){a.days?this.focusPreviousPage():(a.weeks||a.months||a.years)&&N(x.subtract({weeks:1}))},focusNextPage(){let e=w.add(z);S(OD(x.add(z),o,s)),T(TD(DD(x,e,z,r,o,s),z,r))},focusPreviousPage(){let e=w.subtract(z);S(OD(x.subtract(z),o,s)),T(TD(DD(x,e,z,r,o,s),z,r))},focusSectionStart(){a.days?N(w):a.weeks?N(ua(x,r)):(a.months||a.years)&&N(sa(x))},focusSectionEnd(){a.days?N(A):a.weeks?N(da(x,r)):(a.months||a.years)&&N(ca(x))},focusNextSection(e){if(!e&&!a.days){N(x.add(ND(a)));return}a.days?this.focusNextPage():a.weeks?N(x.add({months:1})):(a.months||a.years)&&N(x.add({years:1}))},focusPreviousSection(e){if(!e&&!a.days){N(x.subtract(ND(a)));return}a.days?this.focusPreviousPage():a.weeks?N(x.subtract({months:1})):(a.months||a.years)&&N(x.subtract({years:1}))},selectFocusedDate(){l&&l(x)||this.selectDate(x)},selectDate(t){if(!(e.isDisabled||e.isReadOnly)){if(d===`multiple`&&t!=null){let e=P(t);if(!e)return;let n=[];Array.isArray(h)?n=h:h!=null&&(n=[h]);let r=n.findIndex(t=>Ji(t,e)),i=r>=0?n.slice(0,r).concat(n.slice(r+1)):[...n,e];g(i)}else F(t)}},isFocused:E,setFocused:D,isInvalid(e){return CD(e,o,s)},isSelected(e){return!_||this.isCellDisabled(e)||this.isCellUnavailable(e)?!1:Array.isArray(_)?_.some(t=>Ji(t,e)):Ji(e,_)},isCellFocused(e){return E&&x&&Ji(e,x)},isCellDisabled(t){return e.isDisabled||t.compare(w)<0||t.compare(A)>0||this.isInvalid(t)},isCellUnavailable(t){return e.isDateUnavailable?e.isDateUnavailable(t):!1},isPreviousVisibleRangeInvalid(){let e=w.subtract({days:1});return Ji(e,w)||this.isInvalid(e)},isNextVisibleRangeInvalid(){let e=A.add({days:1});return Ji(e,A)||this.isInvalid(e)},getDatesInWeek(e,t=w){let n=t.add({weeks:e}),i=[],o=a.days&&a.days<7?a.days:7;if(o===7){n=ua(n,r,f);let e=$i(n,r,f);for(let t=0;t<e;t++)i.push(null)}for(;i.length<o;){i.push(n);let e=n.add({days:1});if(Ji(n,e))break;n=e}for(;i.length<o;)i.push(null);return i},getWeeksInMonth(e=w){let t=p||ma(e,r,f);return(a.weeks||a.days)&&(t=a.weeks??0,a.days&&(t+=Math.ceil(a.days/7))),t}}}function ND(e){let t={...e};for(let n in e)t[n]=1;return t}var PD;function FD(){return(FD=t((()=>{jD(),Ue(),oc(),Va(),Sa(),Gi(),PD=r()})))()}var ID,LD,RD,zD,BD,VD,HD,UD,WD,GD,KD,qD,JD,YD,XD,ZD,QD,$D,eO,tO,nO,rO,iO,aO,oO,sO,cO,lO,uO,dO,fO,pO,mO,hO,gO,_O,vO,yO,bO,xO,SO,CO,wO,TO,EO,DO,OO,kO,AO,jO;function MO(){return(MO=t((()=>{l(),qS(),ID=u`
  outline: none;
`,LD=u`
  --picker-accent-bg: var(--color-green-600);
  --picker-accent-fg: var(--color-primary-100);
  --picker-accent-soft: var(--color-green-75);
  --picker-accent-hover: var(--color-green-50);
  --picker-focus-ring: rgba(31, 105, 100, 0.4);
  --picker-focus-ring-strong: rgba(31, 105, 100, 0.55);
  font-family: var(--font-sans);
`,RD=u`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  gap: var(--space-3);
  padding: var(--space-3);
`,zD=u`
  grid-template-columns: minmax(0, 1fr) minmax(200px, 240px);
  align-items: stretch;
  column-gap: var(--space-3);

  /* On narrow (mobile) viewports the calendar + time panel can't fit side by side, so stack them. */
  ${GS(`xs`)} {
    grid-template-columns: 1fr;
    row-gap: var(--space-3);
  }
`,BD=u`
  display: grid;
  gap: var(--space-2);
  min-width: 0;
`,VD=u`
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 32px;
  align-items: center;
  column-gap: var(--space-1);
  width: 100%;
`,HD=u`
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-self: center;
`,UD=u`
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
`,WD=u`
  color: var(--field-description);
  font-weight: 500;
  font-size: 0.875rem;
  user-select: none;
`,GD=u`
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
`,KD=u`
  width: 12px;
  height: 12px;
`,qD=u`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`,JD=u`
  padding: 0 0 var(--space-1);
  color: var(--field-description);
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
`,YD=u`
  padding: var(--space-1);
  text-align: center;
`,XD=u`
  height: 42px;
`,ZD=u`
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
`,QD=u`
  box-shadow: inset 0 0 0 1px var(--color-green-500);
`,$D=u`
  box-shadow: 0 0 0 2px var(--picker-focus-ring-strong);
`,eO=u`
  box-shadow:
    inset 0 0 0 1px var(--color-green-500),
    0 0 0 2px var(--picker-focus-ring-strong);
`,tO=u`
  background: var(--picker-accent-bg);
  color: var(--picker-accent-fg);
  font-weight: 600;

  &:hover:not(:disabled) {
    background: var(--picker-accent-bg);
    color: var(--picker-accent-fg);
  }
`,nO=u`
  box-shadow:
    0 0 0 2px var(--field-bg),
    0 0 0 4px var(--picker-focus-ring-strong);
`,rO=u`
  color: var(--field-placeholder);
`,iO=u`
  color: var(--field-description);
  text-decoration: line-through;
`,aO=u`
  color: var(--field-disabled-fg);
`,oO=u`
  box-shadow: inset 0 0 0 1px var(--field-error-border);
`,sO=u`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
  padding-top: var(--space-2);
  margin-top: var(--space-1);
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`,cO=u`
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
`,lO=u`
  display: grid;
  gap: var(--space-3);
  min-width: 0;
  width: 100%;
`,uO=u`
  color: var(--color-gray-400);
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
  letter-spacing: 0.02em;
`,dO=u`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
`,fO=u`
  display: grid;
  gap: var(--space-2);
  min-width: 0;
`,pO=u`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--space-1);
`,mO=u`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
`,hO=u`
  color: var(--color-gray-400);
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.25;
`,gO=u`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-3);
`,_O=u`
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
`,vO=u`
  background: var(--picker-accent-bg);
  color: var(--picker-accent-fg);
  border-color: var(--color-green-700);
  font-weight: 600;

  &:hover:not(:disabled) {
    background: var(--color-green-700);
    border-color: var(--color-green-800);
    color: var(--picker-accent-fg);
  }
`,yO=u`
  display: grid;
  min-width: 0;
  gap: var(--space-1);
  align-self: stretch;
  align-content: start;
  padding: 0 0 0 var(--space-3);
  border-left: 1px solid rgba(31, 105, 100, 0.12);
  background: transparent;

  /* When stacked below the calendar on mobile, the divider becomes a top border. */
  ${GS(`xs`)} {
    padding: var(--space-3) 0 0 0;
    border-left: 0;
    border-top: 1px solid rgba(31, 105, 100, 0.12);
  }
`,bO=u`
  padding: 0;
  border: 0;
`,xO=u`
  color: var(--color-gray-400);
  font-size: 0.625rem;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0.02em;
`,SO=u`
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
`,CO=u`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: var(--space-1);
`,wO=u`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  border-radius: var(--control-radius);
  background: var(--picker-accent-soft);
  padding: 2px;
`,TO=u`
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
`,EO=u`
  min-width: 2.25rem;
  padding: 0 4px;
  text-align: center;
  font-size: 0.8125rem;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  color: var(--field-fg);
`,DO=u`
  display: inline-flex;
  border-radius: var(--control-radius);
  background: var(--picker-accent-soft);
  padding: 2px;
  gap: 2px;
`,OO=u`
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
`,kO=u`
  background: var(--picker-accent-bg);
  color: var(--picker-accent-fg);
  font-weight: 600;
`,AO=u`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-1);
  margin-top: 2px;
`,jO=u`
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
`})))()}function NO({direction:e,isDisabled:t,label:n,onPress:r}){let i=PO.useRef(null),{buttonProps:a}=pt({"aria-label":n,isDisabled:t,onPress:r},i);return(0,FO.jsx)(`button`,{...a,ref:i,className:GD,type:`button`,children:(0,FO.jsx)(ut,{className:KD,direction:e})})}var PO,FO;function IO(){return(IO=t((()=>{PO=e(r()),ft(),dt(),MO(),FO=G()})))()}function LO({isDisabled:e,label:t,options:n,pager:r}){let i=(0,RO.useId)(),a=n.findIndex(e=>!e.isDisabled),o=n.findIndex(e=>e.isSelected&&!e.isDisabled),s=o>=0?o:Math.max(0,a);return(0,zO.jsxs)(`div`,{className:fO,children:[t||r?(0,zO.jsxs)(`div`,{className:pO,children:[t?(0,zO.jsx)(`span`,{id:i,className:hO,children:t}):null,r]}):null,(0,zO.jsx)(`div`,{"aria-labelledby":t?i:void 0,className:gO,role:`group`,children:n.map((t,n)=>(0,zO.jsx)(`button`,{"aria-pressed":t.isSelected,className:c(_O,t.isSelected?vO:void 0),"data-selected":t.isSelected?`true`:`false`,disabled:e||t.isDisabled,tabIndex:n===s?0:-1,type:`button`,onClick:t.onSelect,children:t.label},t.id))})]})}var RO,zO;function BO(){return(BO=t((()=>{l(),RO=e(r()),MO(),zO=G()})))()}var VO,HO,UO,WO,GO,KO,qO,JO,YO,XO,ZO,QO;function $O(){return($O=t((()=>{VO=`left`,HO=`right`,UO=`numeric`,WO=`2-digit`,GO=`long`,KO=`year-`,qO=`month-`,JO=`period-am`,YO=`period-pm`,XO=`calendar`,ZO=`month`,QO=`year`})))()}function ek(){let{t:e}=i(`shared-module`);return{previousMonth:e(`datePicker.previousMonth`),nextMonth:e(`datePicker.nextMonth`),previousYears:e(`datePicker.previousYears`),nextYears:e(`datePicker.nextYears`),previousYear:e(`datePicker.previousYear`),nextYear:e(`datePicker.nextYear`),clear:e(`datePicker.clear`),today:e(`datePicker.today`),now:e(`datePicker.now`),tomorrow:e(`datePicker.tomorrow`),nextWeek:e(`datePicker.nextWeek`),time:e(`datePicker.time`),plus30Minutes:e(`datePicker.plus30Minutes`),endOfDay:e(`datePicker.endOfDay`),chooseMonth:e(`datePicker.chooseMonth`),chooseYear:e(`datePicker.chooseYear`),chooseMonthAndYear:t=>e(`datePicker.chooseMonthAndYear`,{value:t}),decreaseHour:e(`datePicker.decreaseHour`),increaseHour:e(`datePicker.increaseHour`),decreaseMinute:e(`datePicker.decreaseMinute`),increaseMinute:e(`datePicker.increaseMinute`),dayPeriodGroup:e(`datePicker.dayPeriod`)}}function tk(){return(tk=t((()=>{a()})))()}function nk(e,t){let n=new Intl.DateTimeFormat(e,{hour:UO,...t?{hour12:t===12}:void 0}).resolvedOptions().hourCycle;return n===`h11`||n===`h12`||n===`h23`||n===`h24`?n:t===12?`h12`:`h23`}function rk(e){let t=new Intl.DateTimeFormat(e,{hour:UO,hour12:!0,timeZone:`UTC`}),n=(e,n)=>t.formatToParts(new Date(Date.UTC(2024,0,1,e))).find(e=>e.type===`dayPeriod`)?.value??n;return{am:n(9,`AM`),pm:n(21,`PM`)}}function ik(e){return e?e.hour>=12?`pm`:`am`:null}function ak(e,t){switch(t){case`h11`:return e%12;case`h12`:return e%12==0?12:e%12;case`h24`:return e===0?24:e;default:return e}}function ok(e){return e?new jo(e.hour,e.minute,e.second,`millisecond`in e?e.millisecond:0):new jo(0,0)}function sk(e,t){let n=e%12;return t===`pm`?n+12:n}function ck(e){return String(e).padStart(2,`0`)}function lk(e){return Math.floor((e-1)/12)*12+1}function uk(e,t){let n=new Intl.NumberFormat(t,{useGrouping:!1}),r=e;for(let e=0;e<=9;e+=1){let t=n.format(e);t!==String(e)&&(r=r.split(t).join(String(e)))}return r}function dk(e,t){return uk(e.normalize(`NFKC`),t).replaceAll(/[\u200E\u200F\u061C]/g,``).trim()}function fk(e,t){let n=dk(e,t).toLocaleLowerCase(t);return Array.from(n).filter(e=>{let n=e.toLocaleUpperCase(t),r=e.toLocaleLowerCase(t);return/\d/.test(e)||n!==r}).join(``)}function pk(e,t,n){let r=fk(e,t);return n.some(e=>{let n=fk(e,t);return n.length>0&&r.includes(n)})}function mk(e,{hour12:t,locale:n,dayPeriodLabels:r}){let i=e.trim();if(!i)return null;let a=dk(i,n),o=a.startsWith(`T`)||a.startsWith(`t`)?a.slice(1):a,s;try{s=mo(o)}catch{s=null}if(s)return s;let c=a.match(/\d+/g);if(!c||c.length<2||c.length>3)return null;let[l,u,d]=c;if(!l||!u||u.length!==2||d&&d.length!==2)return null;let f=Number(l),p=Number(u),m=d?Number(d):0,h=pk(i,n,[r.pm,`PM`]),g=pk(i,n,[r.am,`AM`]);return t&&(h&&f<12&&(f+=12),g&&f===12&&(f=0)),f<0||f>23||p<0||p>59||m<0||m>59?null:new jo(f,p,m)}function hk(e,t){let n=e.hour*60+e.minute+t;return n=(n%1440+1440)%1440,new jo(Math.floor(n/60),n%60,e.second,e.millisecond)}function gk(){return(gk=t((()=>{Oo(),No(),$O()})))()}function _k({initialView:e=Sk,selectedYear:t,selectedMonth:n,minYear:r,minMonth:i,maxYear:a,maxMonth:o,isDisabled:s=!1,isReadOnly:l=!1,locale:u,onSelect:d,onCancel:f,className:p}){let{locale:m}=je(),h=u??m,g=ek(),_=new Date().getFullYear(),[v,y]=(0,vk.useState)(e),[b,x]=(0,vk.useState)(t??_),[S,C]=(0,vk.useState)(lk(t??_));(0,vk.useEffect)(()=>{y(e)},[e]),(0,vk.useEffect)(()=>{let e=t??_;x(e),C(lk(e))},[_,t]);let w=(0,vk.useMemo)(()=>new Intl.DateTimeFormat(h,{month:`long`,timeZone:`UTC`}),[h]),T=r??-1/0,E=a??1/0,D=!(s||l),O=(0,vk.useCallback)((e,t)=>e<T||e>E||r!==void 0&&i!==void 0&&e===r&&t<i||a!==void 0&&o!==void 0&&e===a&&t>o,[o,a,i,r,E,T]),k=(0,vk.useMemo)(()=>Array.from({length:bk},(e,r)=>{let i=r+1,a=new Date(Date.UTC(b,r,1));return{id:`${qO}${b}-${i}`,isSelected:t===b&&n===i,label:w.format(a),isDisabled:O(b,i),onSelect:()=>{!D||O(b,i)||d(b,i)}}}),[b,D,O,w,d,n,t]),A=(0,vk.useMemo)(()=>Array.from({length:xk},(e,n)=>{let r=S+n;return{id:`${KO}${r}`,isSelected:r===t,label:String(r),isDisabled:r<T||r>E,onSelect:()=>{!D||r<T||r>E||(x(r),C(lk(r)),y(Sk))}}}),[D,E,T,t,S]);return v===`year`?(0,yk.jsxs)(`div`,{className:c(LD,lO,p),children:[(0,yk.jsxs)(`div`,{className:dO,children:[(0,yk.jsx)(`button`,{"aria-label":g.chooseMonth,className:GD,disabled:!D,type:`button`,onClick:()=>{if(D){if(f){f();return}y(Sk)}},children:(0,yk.jsx)(ut,{className:KD,direction:VO})}),(0,yk.jsx)(`div`,{className:uO,children:g.chooseYear}),(0,yk.jsxs)(`div`,{className:mO,children:[(0,yk.jsx)(NO,{direction:VO,isDisabled:!D,label:g.previousYears,onPress:()=>C(e=>e-xk)}),(0,yk.jsx)(NO,{direction:HO,isDisabled:!D,label:g.nextYears,onPress:()=>C(e=>e+xk)})]})]}),(0,yk.jsx)(LO,{isDisabled:!D,options:A})]}):(0,yk.jsxs)(`div`,{className:c(LD,lO,p),children:[(0,yk.jsxs)(`div`,{className:dO,children:[(0,yk.jsx)(NO,{direction:VO,isDisabled:!D,label:g.previousYear,onPress:()=>x(e=>e-1)}),(0,yk.jsx)(`button`,{"aria-label":g.chooseYear,className:UD,disabled:!D,type:`button`,onClick:()=>y(Ck),children:b}),(0,yk.jsx)(NO,{direction:HO,isDisabled:!D,label:g.nextYear,onPress:()=>x(e=>e+1)})]}),(0,yk.jsx)(`div`,{className:uO,children:g.chooseMonth}),(0,yk.jsx)(LO,{isDisabled:!D,options:k})]})}var vk,yk,bk,xk,Sk,Ck;function wk(){return(wk=t((()=>{l(),vk=r(),Me(),dt(),IO(),BO(),$O(),tk(),MO(),gk(),yk=G(),bk=12,xk=12,Sk=`month`,Ck=`year`})))()}function Tk({date:e,monthStart:t,state:n}){let r=Ek.useRef(null),i=!Yi(e,t),{cellProps:a,buttonProps:o,formattedDate:s,isDisabled:l,isFocused:u,isInvalid:d,isSelected:f,isUnavailable:p}=zc({date:e,isOutsideMonth:i},n,r),m=Qi(e,n.timeZone);return(0,Dk.jsx)(`td`,{...a,className:YD,children:(0,Dk.jsx)(`button`,{...o,ref:r,className:c(ZD,f?tO:void 0,f&&u?nO:void 0,!f&&u&&m?eO:void 0,!f&&u&&!m?$D:void 0,!f&&!u&&m?QD:void 0,i?rO:void 0,p?iO:void 0,l?aO:void 0,d?oO:void 0),type:`button`,children:s})})}var Ek,Dk;function Ok(){return(Ok=t((()=>{l(),Sa(),Ek=e(r()),Vc(),MO(),Dk=G()})))()}function kk({firstDayOfWeek:e,state:t}){let{gridProps:n,headerProps:r,weekDays:i,weeksInMonth:a}=Hc(e===void 0?{}:{firstDayOfWeek:e},t),o=t.visibleRange.start;return(0,Ak.jsxs)(`table`,{...n,className:qD,children:[(0,Ak.jsx)(`thead`,{...r,children:(0,Ak.jsx)(`tr`,{children:i.map((e,t)=>(0,Ak.jsx)(`th`,{className:JD,children:e},`${e}-${t}`))})}),(0,Ak.jsx)(`tbody`,{children:Array.from({length:a},(e,n)=>(0,Ak.jsx)(`tr`,{children:t.getDatesInWeek(n).map((e,r)=>e?(0,Ak.jsx)(Tk,{date:e,monthStart:o,state:t},e.toString()):(0,Ak.jsx)(`td`,{className:XD},`empty-${n}-${r}`))},n))})]})}var Ak;function jk(){return(jk=t((()=>{Wc(),Ok(),MO(),Ak=G()})))()}function Mk({shouldFocusOnMount:e=!1,className:t,timeSelectorProps:n}){let{locale:r}=je(),i=ek(),a=(0,Nk.useId)(),o=(0,Nk.useId)(),s=Nk.useRef(null),l=nk(r,n.hourCycle),u=l===`h11`||l===`h12`,d=rk(r),f=ok(n.value),p=!!(n.isDisabled||n.isReadOnly),m=Nk.useMemo(()=>{let e=new Date(2e3,0,1,f.hour,f.minute,f.second);return new Intl.DateTimeFormat(r,{hour:UO,minute:WO,hour12:u}).format(e)},[f.hour,f.minute,f.second,r,u]),[h,g]=Nk.useState(m),_=Nk.useRef(e);Nk.useEffect(()=>{_.current&&s.current?.focus()},[]),Nk.useEffect(()=>{g(m)},[m]);let v=ik(n.value),y=ck(ak(f.hour,l)),b=ck(f.minute),x=e=>{n.onChange(e)};return(0,Pk.jsxs)(`div`,{className:c(yO,t),role:`group`,"aria-labelledby":a,children:[(0,Pk.jsx)(`span`,{id:a,className:xO,children:i.time}),(0,Pk.jsx)(`input`,{"aria-labelledby":a,className:SO,disabled:p,id:o,ref:s,inputMode:`numeric`,type:`text`,value:h,onBlur:()=>{if(n.granularity===`hour`){g(m);return}let e=mk(h,{hour12:u,locale:r,dayPeriodLabels:d});e?x(e):g(m)},onChange:e=>g(e.target.value),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}}),(0,Pk.jsxs)(`div`,{className:CO,children:[(0,Pk.jsxs)(`div`,{className:wO,children:[(0,Pk.jsx)(`button`,{"aria-label":i.decreaseHour,className:TO,disabled:p,type:`button`,onClick:()=>{x(hk(f,-60))},children:`−`}),(0,Pk.jsx)(`span`,{className:EO,children:y}),(0,Pk.jsx)(`button`,{"aria-label":i.increaseHour,className:TO,disabled:p,type:`button`,onClick:()=>{x(hk(f,60))},children:`+`})]}),n.granularity===`minute`?(0,Pk.jsxs)(`div`,{className:wO,children:[(0,Pk.jsx)(`button`,{"aria-label":i.decreaseMinute,className:TO,disabled:p,type:`button`,onClick:()=>{x(hk(f,-n.minuteStep))},children:`−`}),(0,Pk.jsx)(`span`,{className:EO,children:b}),(0,Pk.jsx)(`button`,{"aria-label":i.increaseMinute,className:TO,disabled:p,type:`button`,onClick:()=>{x(hk(f,n.minuteStep))},children:`+`})]}):null,u?(0,Pk.jsxs)(`div`,{"aria-label":i.dayPeriodGroup,className:DO,role:`group`,children:[(0,Pk.jsx)(`button`,{className:c(OO,v===`am`?kO:void 0),disabled:p,id:JO,type:`button`,onClick:()=>{x(f.set({hour:sk(f.hour,`am`)}))},children:d.am}),(0,Pk.jsx)(`button`,{className:c(OO,v===`pm`?kO:void 0),disabled:p,id:YO,type:`button`,onClick:()=>{x(f.set({hour:sk(f.hour,`pm`)}))},children:d.pm})]}):null]}),n.granularity===`minute`?(0,Pk.jsxs)(`div`,{className:AO,children:[(0,Pk.jsx)(`button`,{className:jO,disabled:p,type:`button`,onClick:()=>{x(f.add({minutes:30}))},children:i.plus30Minutes}),(0,Pk.jsx)(`button`,{className:jO,disabled:p,type:`button`,onClick:()=>{x(new jo(23,59,0))},children:i.endOfDay})]}):null]})}var Nk,Pk;function Fk(){return(Fk=t((()=>{l(),No(),Nk=e(r()),Me(),$O(),tk(),MO(),gk(),Pk=G()})))()}function Ik({calendarProps:e,canClear:t,dialogProps:n,onClear:r,onSelectNextWeek:i,onSelectNow:a,onSelectToday:o,onSelectTomorrow:s,timeSelectorProps:l}){let u=Lk.useRef(null),{dialogProps:d}=Xe(n,u),{locale:f}=je(),p=ek(),[m,h]=Lk.useState(XO),g=MD({...e,createCalendar:Ys,locale:f}),{calendarProps:_}=Ec(e,g),v=sc({calendar:g.visibleRange.start.calendar.identifier,month:GO,timeZone:g.timeZone}),y=sc({calendar:g.visibleRange.start.calendar.identifier,timeZone:g.timeZone,year:UO}),b=!(e.isDisabled||e.isReadOnly),x=v.format(g.visibleRange.start.toDate(g.timeZone)),S=y.format(g.visibleRange.start.toDate(g.timeZone)),C=()=>{h(QO)};return(0,Rk.jsx)(`div`,{...d,ref:u,className:c(ID,LD),children:(0,Rk.jsxs)(`div`,{..._,className:c(RD,l&&m===`calendar`?zD:void 0),children:[m===`calendar`?(0,Rk.jsxs)(Rk.Fragment,{children:[(0,Rk.jsxs)(`div`,{className:BD,children:[(0,Rk.jsxs)(`div`,{className:VD,children:[(0,Rk.jsx)(NO,{direction:VO,isDisabled:g.isPreviousVisibleRangeInvalid(),label:p.previousMonth,onPress:()=>g.focusPreviousPage()}),(0,Rk.jsxs)(`div`,{className:HD,children:[(0,Rk.jsx)(`button`,{"aria-label":p.chooseMonthAndYear(x),className:UD,disabled:!b,type:`button`,onClick:()=>h(ZO),children:x}),(0,Rk.jsx)(`span`,{"aria-hidden":`true`,className:WD,children:` `}),(0,Rk.jsx)(`button`,{"aria-label":p.chooseMonthAndYear(S),className:UD,disabled:!b,type:`button`,onClick:C,children:S})]}),(0,Rk.jsx)(NO,{direction:HO,isDisabled:g.isNextVisibleRangeInvalid(),label:p.nextMonth,onPress:()=>g.focusNextPage()})]}),(0,Rk.jsx)(kk,{firstDayOfWeek:e.firstDayOfWeek,state:g}),(0,Rk.jsxs)(`div`,{className:sO,children:[(0,Rk.jsx)(`button`,{className:cO,disabled:!t||!b,type:`button`,onClick:r,children:p.clear}),l?(0,Rk.jsx)(`button`,{className:cO,disabled:!b||!a,type:`button`,onClick:()=>a?.(),children:p.now}):(0,Rk.jsx)(`button`,{className:cO,disabled:!b,type:`button`,onClick:()=>{let e=Fa(ta(g.timeZone),g.visibleRange.start.calendar);g.setFocusedDate(e),o(e)},children:p.today}),s?(0,Rk.jsx)(`button`,{className:cO,disabled:!b,type:`button`,onClick:()=>{let e=Fa(ta(g.timeZone),g.visibleRange.start.calendar).add({days:1});g.setFocusedDate(e),s(e)},children:p.tomorrow}):null,i?(0,Rk.jsx)(`button`,{className:cO,disabled:!b,type:`button`,onClick:()=>{let e=Fa(ta(g.timeZone),g.visibleRange.start.calendar).add({weeks:1});g.setFocusedDate(e),i(e)},children:p.nextWeek}):null]})]}),l?(0,Rk.jsx)(Mk,{timeSelectorProps:l}):null]}):null,m===`calendar`?null:(0,Rk.jsx)(_k,{initialView:m===`year`?`year`:`month`,selectedYear:g.visibleRange.start.year,selectedMonth:g.visibleRange.start.month,...Ny(e.minValue,{minYear:e.minValue?.year,minMonth:e.minValue?.month}),...Ny(e.maxValue,{maxYear:e.maxValue?.year,maxMonth:e.maxValue?.month}),...Y({isDisabled:e.isDisabled}),...Y({isReadOnly:e.isReadOnly}),locale:f,onSelect:(e,t)=>{let n=g.focusedDate.set({year:e,month:t,day:1});g.setFocusedDate(n),h(XO)},onCancel:()=>h(XO)})]})})}var Lk,Rk;function zk(){return(zk=t((()=>{l(),Xs(),Va(),Sa(),FD(),Lk=e(r()),Dc(),uc(),rt(),Me(),wk(),jk(),IO(),$O(),tk(),MO(),Fk(),Rk=G()})))()}var Bk,Vk,Hk,Uk,Wk,Gk,Kk,qk,Jk,Yk,Xk,Zk,Qk,$k,eA,tA,nA,rA;function iA(){return(iA=t((()=>{l(),Bk=u`
  display: flex;
  align-items: baseline;
  flex: 1 1 auto;
  min-width: 0;
  width: 100%;
  color: inherit;
  outline: none;
`,Vk=u`
  display: inline-flex;
  max-width: 100%;
  min-width: 0;
  flex-wrap: nowrap;
  /* Centred, not baseline-aligned: baseline alignment sizes the row from the tallest item's line
     box, which made the field a pixel or two taller than an input showing the same text. */
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,Hk=u`
  cursor: not-allowed;
`,Uk=u`
  cursor: default;
`,Wk=u`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,Gk=u`
  flex: 0 0 auto;
  margin-inline-start: var(--space-2);
  color: var(--field-chrome);
  font-size: 0.85em;
  white-space: nowrap;
`,Kk=u`
  flex: 0 1 auto;
  min-width: 0;
`,qk=u`
  position: relative;
  flex: 0 0 auto;
  color: inherit;
  outline: none;
`,Jk=u`
  padding-inline: 1px;
  margin-inline: -1px;
  border-radius: 4px;
  font-variant-numeric: tabular-nums;

  &[data-focus-visible="true"] {
    background: var(--color-blue-50);
  }
`,Yk=u`
  color: var(--field-placeholder);
`,Xk=u`
  color: var(--field-chrome);
  white-space: pre;
  user-select: none;
`,Zk=u`
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
`,Qk=u`
  width: 18px;
  height: 18px;
`,$k=u`
  margin-inline-start: auto;
`,eA=u`
  opacity: 0;
  pointer-events: none;
`,tA=u`
  && {
    width: min(360px, calc(100vw - 32px));
    min-width: min(320px, calc(100vw - 32px));
  }
`,nA=u`
  && {
    width: min(720px, calc(100vw - 32px));
    min-width: min(320px, calc(100vw - 32px));
  }
`,rA=u`
  && {
    width: min(280px, calc(100vw - 32px));
    min-width: min(240px, calc(100vw - 32px));
  }
`})))()}function aA(){return(0,oA.jsxs)(`svg`,{"aria-hidden":`true`,className:Qk,fill:`none`,viewBox:`0 0 20 20`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,oA.jsx)(`rect`,{height:`13`,rx:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`,width:`15`,x:`2.5`,y:`4`}),(0,oA.jsx)(`path`,{d:`M6 2.5v3M14 2.5v3M2.5 8h15`,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`1.5`})]})}var oA;function sA(){return(sA=t((()=>{iA(),oA=G()})))()}function cA({segment:e,state:t}){let n=(0,lA.useRef)(null),{segmentProps:r}=Yg(e,t,n),{focusProps:i,isFocusVisible:a}=$g(),o=e.type===`literal`,s=o&&e.text.trim()===dA?` `:e.text;return(0,uA.jsx)(`div`,{...W(r,i),ref:n,className:c(qk,o?Xk:Jk,e.isPlaceholder?Yk:void 0),"data-focus-visible":a?`true`:`false`,children:s})}var lA,uA,dA;function fA(){return(fA=t((()=>{l(),lA=r(),O(),Qg(),t_(),iA(),uA=G(),dA=`klo`})))()}function pA({buttonProps:e,dataTestId:t,icon:n}){let r=(0,mA.useRef)(null),{buttonProps:i}=pt(e,r);return(0,hA.jsx)(`button`,{...i,ref:r,className:c(Zk,$k),"data-testid":t,type:`button`,children:n})}var mA,hA;function gA(){return(gA=t((()=>{l(),mA=r(),ft(),iA(),hA=G()})))()}var _A,vA,yA;function bA(){return(bA=t((()=>{_A=`false`,vA=`true`,yA=`minute`})))()}function xA(e,t,n,r){return!(e!==`floating`||t||n||r===!0)}function SA(e,t=2){return String(e).padStart(t,`0`)}function CA(e){return`year`in e&&`month`in e&&`day`in e}function wA(e){return`hour`in e&&`minute`in e&&`second`in e}function TA(e){return`${SA(e.year,4)}-${SA(e.month)}-${SA(e.day)}`}function EA(e,t){let n=SA(e.hour);if(t===`hour`)return n;let r=SA(e.minute);return t===`minute`?`${n}:${r}`:`${n}:${r}:${SA(e.second)}`}function DA(e,t){if(typeof t==`string`&&t.length!==0)try{return e===`date`?ho(t):go(t)}catch{return}}function OA(e){if(typeof e==`string`&&e.length!==0)try{return mo(e)}catch{return}}function kA(e){return e&&CA(e)?TA(e):``}function AA(e,t){return e&&wA(e)?EA(e,t):``}function jA(e,t){return!e||!CA(e)||!wA(e)?``:`${TA(e)}T${EA(e,t)}`}function MA(e,t,n){return e===`date`?kA(t):jA(t,n)}function NA(e){if(e===void 0||e===`any`)return 5;let t=typeof e==`number`?e:Number(e);if(!Number.isFinite(t)||t<=0)return 1;let n=t/60;return!Number.isInteger(n)||n<1||n>59?1:n}function PA(){return(PA=t((()=>{Oo()})))()}function FA(e,t){e&&(e.value=t)}function IA(e,t){let n=e.cloneNode(!0);return FA(n,t),n}function LA(e,t,n){if(!e||(FA(e,n),!t))return;let r=IA(e,n);t({currentTarget:r,target:r,type:`change`})}function RA(e,t){!e||!t||t({currentTarget:e,target:e,type:`blur`,relatedTarget:null})}function zA(e,t){!e||!t||t({currentTarget:e,target:e,type:`focus`,relatedTarget:null})}function BA(e,t){let{id:n,label:r,description:i,errorMessage:a,notice:o,fieldSize:s=`md`,isDisabled:c,isReadOnly:l,isRequired:u,isInvalid:d,iconStart:f,iconEnd:p,layout:m=`stacked`,className:h,value:g,onChange:_,onValueChange:v,onBlur:y,onFocus:b,inputRef:x,min:S,max:C,step:w,hourCycle:T=24,"data-testid":E}=e,{locale:D}=je(),O=(0,HA.useId)(),k=(0,HA.useId)(),A=(0,HA.useRef)(null),j=(0,HA.useRef)(null),M=(0,HA.useRef)(null),[N,P]=(0,HA.useState)(!1);return(0,HA.useImperativeHandle)(t,()=>lS(M.current,`[role="spinbutton"]`)??lS(j.current,`[role="spinbutton"]`)??M.current??j.current),{className:h,dataTestId:E,description:i,errorMessage:a,fieldRef:M,fieldSize:s,groupRef:j,hiddenInputRef:A,hourCycle:T,iconEnd:p,iconStart:f,id:n??O,inputRef:x,isFocused:N,label:r,layout:m,locale:D===`en`?`en-CA`:D,max:C,min:S,notice:o,noticeId:k,onChange:_,onValueChange:v,externalOnBlur:y,externalOnFocus:b,resolvedState:uS({errorMessage:a,...Y({isDisabled:c,isReadOnly:l,isRequired:u,isInvalid:d})}),setIsFocused:P,step:w,value:g}}function VA({isOpen:e,isDisabled:t,isReadOnly:n,open:r}){return i=>{if(e||t||n||i.detail===0)return;let a=i.target instanceof Element?i.target.closest(UA):null;a&&i.currentTarget.contains(a)||r()}}var HA,UA;function WA(){return(WA=t((()=>{HA=r(),Me(),pS(),PA(),UA=`button, a[href], input, select, textarea`})))()}function GA({canClear:e,className:t,dataTestId:n,dateFieldAria:r,description:i,errorMessage:a,externalOnBlur:o,externalOnFocus:s,fieldRef:l,fieldSize:u,groupRef:d,hiddenInputRef:f,hiddenInputValue:p,inputRef:m,iconEnd:h,iconStart:g,isFocused:_,label:v,layout:y,notice:b,noticeId:x,onClear:S,onSelectNextWeek:C,onSelectNow:w,onSelectToday:T,onSelectTomorrow:E,pickerAria:D,pickerState:O,popoverClassName:k,resolvedState:A,setIsFocused:j,state:M,timeSelectorProps:N,zoneLabel:P}){let F=n?`${n}-value`:void 0,I=n?`${n}-trigger`:void 0,L=My(typeof D.groupProps[`aria-describedby`]==`string`?D.groupProps[`aria-describedby`]:void 0,b?x:void 0),R=y===`floating`,z=xA(y,_,M.value!==null,O.isOpen),B=(0,KA.useRef)(O.isOpen);B.current=O.isOpen;let{focusWithinProps:V}=me({onFocusWithin:()=>{zA(f.current,s),j(!0)},onBlurWithin:()=>{j(!1),B.current||RA(f.current,o)}}),ee=VA({isOpen:O.isOpen,isDisabled:A.isDisabled,isReadOnly:A.isReadOnly,open:()=>O.setOpen(!0)}),te=W(D.labelProps,R?{}:{onClick:ee});return(0,qA.jsxs)(HC,{controlClassName:c(lC(u,R,!R)),controlProps:{"data-disabled":A.isDisabled?vA:_A,"data-invalid":O.isInvalid?vA:_A,"data-readonly":A.isReadOnly?vA:_A,"data-has-icon-start":g?vA:void 0,onClickCapture:ee},label:v,description:i,descriptionProps:D.descriptionProps,errorMessage:a,errorMessageProps:D.errorMessageProps,notice:b,...Y({className:t}),...Ny(v,{labelProps:te}),...Ny(b,{noticeId:x}),isDisabled:A.isDisabled,isRequired:A.isRequired,layout:y,fieldSize:u,isFloatingRaised:y!==`floating`||_||M.value!==null||O.isOpen,isFloatingFocused:y===`floating`?_||O.isOpen:!1,isInvalid:O.isInvalid,children:[(0,qA.jsxs)(`div`,{...W(D.groupProps,V),ref:d,className:Wk,"data-testid":n,"aria-describedby":L,"aria-disabled":A.isDisabled?vA:void 0,"aria-invalid":O.isInvalid?vA:void 0,"aria-readonly":A.isReadOnly?vA:void 0,"aria-required":A.isRequired?vA:void 0,children:[g?(0,qA.jsx)(`span`,{className:RC,children:g}):null,(0,qA.jsx)(`div`,{className:Kk,children:(0,qA.jsxs)(`div`,{...r.fieldProps,ref:l,className:c(Bk,R?sC(u):void 0,A.isDisabled?Hk:void 0,A.isReadOnly?Uk:void 0),"aria-describedby":L,children:[(0,qA.jsx)(`div`,{className:c(Vk,z&&eA),children:M.segments.map((e,t)=>(0,qA.jsx)(cA,{segment:e,state:M},`${e.type}-${t}`))}),P&&!z?(0,qA.jsx)(`span`,{className:Gk,children:P}):null]})}),h?(0,qA.jsx)(`span`,{className:RC,children:h}):null,(0,qA.jsx)(pA,{buttonProps:D.buttonProps,dataTestId:I,icon:(0,qA.jsx)(aA,{})})]}),(0,qA.jsx)(`input`,{...r.inputProps,ref:cS(f,m),type:`hidden`,"data-testid":F,"aria-describedby":L,value:p,onChange:()=>{}}),O.isOpen?(0,qA.jsx)(uT,{className:k,state:O,triggerRef:d,placement:`bottom start`,children:(0,qA.jsx)(Ik,{calendarProps:D.calendarProps,canClear:e,dialogProps:D.dialogProps,onClear:S,onSelectToday:T,...Y({onSelectNextWeek:C}),...Y({onSelectNow:w}),...Y({onSelectTomorrow:E}),...Y({timeSelectorProps:N})})}):null]})}var KA,qA;function JA(){return(JA=t((()=>{l(),KA=r(),O(),H(),pS(),zk(),WC(),VC(),hT(),sA(),fA(),gA(),bA(),iA(),WA(),qA=G()})))()}function YA({base:e,currentValue:t,granularity:n,kind:r,onClear:i,onCommitValue:a}){let o=DA(r,e.min),s=DA(r,e.max),c={id:e.id,label:e.label,description:e.description,errorMessage:e.errorMessage,granularity:n,value:t,isDisabled:e.resolvedState.isDisabled,isReadOnly:e.resolvedState.isReadOnly,isRequired:e.resolvedState.isRequired,isInvalid:e.resolvedState.isInvalid,shouldCloseOnSelect:r===`date`,onChange:a,...Y({hourCycle:e.hourCycle,minValue:o,maxValue:s})},l=QE(c),u=Fg(c,l,e.groupRef),d={...u.fieldProps,createCalendar:Ys,locale:e.locale},f=lD(d),p=Dg(d,f,e.fieldRef),m=t!==null||l.dateValue!==null||l.timeValue!==null,h=MA(r,f.value,yA),g=new Date(h),_=r===`datetime`?bD(Number.isNaN(g.getTime())?new Date:g):void 0;return(0,XA.jsx)(GA,{zoneLabel:_,canClear:m,className:e.className,dataTestId:e.dataTestId,dateFieldAria:p,description:e.description,errorMessage:e.errorMessage,fieldRef:e.fieldRef,fieldSize:e.fieldSize,groupRef:e.groupRef,hiddenInputRef:e.hiddenInputRef,hiddenInputValue:h,inputRef:e.inputRef,iconEnd:e.iconEnd,iconStart:e.iconStart,isFocused:e.isFocused,label:e.label,layout:e.layout,notice:e.notice,noticeId:e.noticeId,externalOnBlur:e.externalOnBlur,externalOnFocus:e.externalOnFocus,onClear:()=>{l.setOpen(!1),i()},onSelectNextWeek:e=>{if(r===`date`){l.setValue(e),l.setOpen(!1);return}l.setDateValue(e)},onSelectNow:r===`datetime`?()=>{let e=ea(aa()),n=t?.calendar??new Wi,r=Fa(Ma(e),n),i=Pa(e);l.setValue(Na(r,i))}:void 0,onSelectToday:e=>{if(r===`date`){l.setValue(e),l.setOpen(!1);return}l.setDateValue(e)},onSelectTomorrow:e=>{if(r===`date`){l.setValue(e),l.setOpen(!1);return}l.setDateValue(e)},pickerAria:u,pickerState:l,popoverClassName:r===`date`?tA:nA,resolvedState:e.resolvedState,setIsFocused:e.setIsFocused,state:f,timeSelectorProps:r===`datetime`?{granularity:yA,isDisabled:e.resolvedState.isDisabled,isReadOnly:e.resolvedState.isReadOnly,minuteStep:NA(e.step),value:l.timeValue,onChange:e=>{l.setTimeValue(e)},...Y({hourCycle:e.hourCycle})}:void 0})}var XA;function ZA(){return(ZA=t((()=>{Xs(),Sa(),Gi(),Va(),hD(),eD(),Ng(),Lg(),SD(),JA(),bA(),iA(),WA(),XA=G()})))()}function QA(e,t){let n=BA(e,t),r=e.kind===`date`?`day`:yA,i=DA(e.kind,n.value),[a,o]=(0,$A.useState)(0),s=(0,$A.useRef)(``),c=typeof n.value==`string`?n.value:``;return(0,$A.useEffect)(()=>{s.current.length>0&&c.length===0&&o(e=>e+1),s.current=c},[c]),(0,ej.jsx)(YA,{base:n,currentValue:i??null,granularity:r,kind:e.kind,onClear:()=>{n.onValueChange?.(``),LA(n.hiddenInputRef.current,n.onChange,``)},onCommitValue:t=>{let r=MA(e.kind,t,yA);n.onValueChange?.(r),LA(n.hiddenInputRef.current,n.onChange,r)}},a)}var $A,ej;function tj(){return(tj=t((()=>{$A=e(r()),ZA(),bA(),WA(),ej=G()})))()}function nj({dialogProps:e,timeSelectorProps:t}){let n=rj.useRef(null),{dialogProps:r}=Xe(e,n);return(0,ij.jsx)(`div`,{...r,ref:n,className:c(ID,LD),children:(0,ij.jsx)(`div`,{className:RD,children:(0,ij.jsx)(Mk,{shouldFocusOnMount:!0,className:bO,timeSelectorProps:t})})})}var rj,ij;function aj(){return(aj=t((()=>{l(),rj=e(r()),rt(),MO(),Fk(),ij=G()})))()}function oj(){return(0,sj.jsxs)(`svg`,{"aria-hidden":`true`,className:Qk,fill:`none`,viewBox:`0 0 20 20`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,sj.jsx)(`circle`,{cx:`10`,cy:`10`,r:`7.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,sj.jsx)(`path`,{d:`M10 6v4l2.5 2.5`,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`1.5`})]})}var sj;function cj(){return(cj=t((()=>{iA(),sj=G()})))()}function lj({aria:e,className:t,dataTestId:n,description:r,errorMessage:i,externalOnBlur:a,externalOnFocus:o,fieldRef:s,fieldSize:l,groupRef:u,hiddenInputRef:d,hiddenInputValue:f,inputRef:p,iconEnd:m,iconStart:h,isFocused:g,label:_,layout:v,notice:y,noticeId:b,resolvedState:x,setIsFocused:S,state:C,timeSelectorProps:w}){let T=n?`${n}-value`:void 0,E=n?`${n}-trigger`:void 0,D=ek(),O=(0,uj.useId)(),k=(0,uj.useRef)(null),A=nt({}),{triggerProps:j,overlayProps:M}=Om({type:`dialog`},A,k),N=typeof e.labelProps.id==`string`?e.labelProps.id:void 0,P=N?`${O} ${N}`:O,F=My(typeof e.fieldProps[`aria-describedby`]==`string`?e.fieldProps[`aria-describedby`]:void 0,y?b:void 0),I=v===`floating`,L=xA(v,g,C.value!==null,A.isOpen),R=(0,uj.useRef)(A.isOpen);R.current=A.isOpen;let{focusWithinProps:z}=me({onFocusWithin:()=>{zA(d.current,o),S(!0)},onBlurWithin:()=>{S(!1),R.current||RA(d.current,a)}}),B=VA({isOpen:A.isOpen,isDisabled:x.isDisabled,isReadOnly:x.isReadOnly,open:A.open}),V=e=>{e.altKey&&e.key===`ArrowDown`&&!x.isDisabled&&!x.isReadOnly&&(e.preventDefault(),A.open())},ee=W(e.labelProps,I?{}:{onClick:B});return(0,dj.jsxs)(HC,{controlClassName:c(lC(l,I,!I)),controlProps:{"data-disabled":x.isDisabled?vA:_A,"data-invalid":C.isInvalid?vA:_A,"data-readonly":x.isReadOnly?vA:_A,"data-has-icon-start":h?vA:void 0,onClickCapture:B},label:_,description:r,descriptionProps:e.descriptionProps,errorMessage:i,errorMessageProps:e.errorMessageProps,notice:y,...Y({className:t}),...Ny(_,{labelProps:ee}),...Ny(y,{noticeId:b}),isDisabled:x.isDisabled,isRequired:x.isRequired,layout:v,fieldSize:l,isFloatingRaised:v!==`floating`||g||C.value!==null||A.isOpen,isFloatingFocused:v===`floating`?g||A.isOpen:!1,isInvalid:C.isInvalid,children:[(0,dj.jsxs)(`div`,{...W(z,{onKeyDown:V}),ref:u,className:Wk,children:[h?(0,dj.jsx)(`span`,{className:RC,children:h}):null,(0,dj.jsx)(`div`,{className:Kk,children:(0,dj.jsx)(`div`,{...e.fieldProps,ref:s,className:c(Bk,I?sC(l):void 0,x.isDisabled?Hk:void 0,x.isReadOnly?Uk:void 0),"data-testid":n,"aria-disabled":x.isDisabled?vA:void 0,"aria-describedby":F,"aria-invalid":C.isInvalid?vA:void 0,"aria-readonly":x.isReadOnly?vA:void 0,"aria-required":x.isRequired?vA:void 0,children:(0,dj.jsx)(`div`,{className:c(Vk,L&&eA),children:C.segments.map((e,t)=>(0,dj.jsx)(cA,{segment:e,state:C},`${e.type}-${t}`))})})}),m?(0,dj.jsx)(`span`,{className:RC,children:m}):null,(0,dj.jsx)(pA,{buttonProps:{...j,id:O,"aria-label":D.time,"aria-labelledby":P,isDisabled:x.isDisabled||x.isReadOnly},dataTestId:E,icon:(0,dj.jsx)(oj,{})})]}),(0,dj.jsx)(`input`,{...e.inputProps,ref:cS(d,p),type:`hidden`,"data-testid":T,"aria-describedby":F,value:f,onChange:()=>{}}),A.isOpen?(0,dj.jsx)(uT,{className:rA,state:A,triggerRef:u,placement:`bottom start`,children:(0,dj.jsx)(nj,{dialogProps:{...M,"aria-labelledby":P},timeSelectorProps:w})}):null]})}var uj,dj;function fj(){return(fj=t((()=>{l(),Ze(),uj=e(r()),O(),H(),Am(),pS(),tk(),aj(),WC(),VC(),hT(),cj(),fA(),gA(),bA(),iA(),WA(),dj=G()})))()}function pj(e,t){let n=BA(e,t),r=yA,i=mj.useMemo(()=>OA(n.value),[n.value]),a=mj.useMemo(()=>OA(n.min),[n.min]),o=mj.useMemo(()=>OA(n.max),[n.max]),s=e=>{let t=AA(e,r);n.onValueChange?.(t),LA(n.hiddenInputRef.current,n.onChange,t)},c={id:n.id,inputRef:n.hiddenInputRef,label:n.label,description:n.description,errorMessage:n.errorMessage,locale:n.locale,granularity:r,value:i??null,isDisabled:n.resolvedState.isDisabled,isReadOnly:n.resolvedState.isReadOnly,isRequired:n.resolvedState.isRequired,isInvalid:n.resolvedState.isInvalid,...Y({hourCycle:n.hourCycle,minValue:a,maxValue:o}),onChange:s},l=gD(c),u=Og(c,l,n.fieldRef);return(0,hj.jsx)(lj,{aria:u,className:n.className,dataTestId:n.dataTestId,description:n.description,errorMessage:n.errorMessage,fieldRef:n.fieldRef,fieldSize:n.fieldSize,groupRef:n.groupRef,hiddenInputRef:n.hiddenInputRef,hiddenInputValue:AA(l.value,r),inputRef:n.inputRef,iconEnd:n.iconEnd,iconStart:n.iconStart,isFocused:n.isFocused,label:n.label,layout:n.layout,notice:n.notice,noticeId:n.noticeId,externalOnBlur:n.externalOnBlur,externalOnFocus:n.externalOnFocus,resolvedState:n.resolvedState,setIsFocused:n.setIsFocused,state:l,timeSelectorProps:{granularity:r,isDisabled:n.resolvedState.isDisabled,isReadOnly:n.resolvedState.isReadOnly,minuteStep:NA(n.step),value:i??null,onChange:s,...Y({hourCycle:n.hourCycle})}})}var mj,hj;function gj(){return(gj=t((()=>{yD(),mj=e(r()),Ng(),bA(),WA(),fj(),hj=G()})))()}var _j,vj,yj,bj,xj;function Sj(){return(Sj=t((()=>{_j=e(r()),tj(),gj(),vj=G(),yj=_j.forwardRef(QA),bj=_j.forwardRef(pj),xj=_j.forwardRef(function(e,t){return e.kind===`time`?(0,vj.jsx)(bj,{...e,ref:t}):(0,vj.jsx)(yj,{...e,ref:t})})})))()}function Cj(e){let{name:t,control:n,rules:r,label:i,description:a,errorMessage:o,notice:s,fieldSize:c,iconStart:l,iconEnd:u,isDisabled:d,isReadOnly:f,isRequired:p,id:m,className:h,min:g,max:_,inputRef:v,"data-testid":y}=e,{field:b,resolvedError:x,isInvalid:S}=aS({name:t,control:n,...Y({rules:r}),errorMessage:o}),C=b.value??``;return(0,wj.jsx)(xj,{ref:b.ref,kind:Ej,layout:Tj,label:i,description:a,errorMessage:x,notice:s,iconStart:l,iconEnd:u,isInvalid:S,...Y({fieldSize:c}),...Y({isDisabled:d}),...Y({isReadOnly:f}),...Y({isRequired:p}),...Y({id:m}),...Y({className:h}),...Y({min:g}),...Y({max:_}),...Y({inputRef:v}),"data-testid":y,value:C,onChange:e=>{b.onChange(e.target.value)},onBlur:b.onBlur})}var wj,Tj,Ej;function Dj(){return(Dj=t((()=>{r(),oS(),Sj(),wj=G(),Tj=`floating`,Ej=`date`})))()}function Oj(e){let{name:t,control:n,rules:r,label:i,description:a,errorMessage:o,notice:s,fieldSize:c,iconStart:l,iconEnd:u,isDisabled:d,isReadOnly:f,isRequired:p,id:m,className:h,min:g,max:_,step:v,hourCycle:y,inputRef:b,"data-testid":x}=e,{field:S,resolvedError:C,isInvalid:w}=aS({name:t,control:n,...Y({rules:r}),errorMessage:o}),T=S.value??``;return(0,kj.jsx)(xj,{ref:S.ref,kind:jj,layout:Aj,label:i,description:a,errorMessage:C,notice:s,iconStart:l,iconEnd:u,isInvalid:w,...Y({fieldSize:c}),...Y({isDisabled:d}),...Y({isReadOnly:f}),...Y({isRequired:p}),...Y({id:m}),...Y({className:h}),...Y({min:g}),...Y({max:_}),...Y({step:v}),...Y({hourCycle:y}),...Y({inputRef:b}),"data-testid":x,value:T,onChange:e=>{S.onChange(e.target.value)},onBlur:S.onBlur})}var kj,Aj,jj;function Mj(){return(Mj=t((()=>{r(),oS(),Sj(),kj=G(),Aj=`floating`,jj=`datetime`})))()}function Nj(e){return e?Array.isArray(e)?e:Array.from(e):[]}function Pj(e){return e.trim()}function Fj(e,t){let n=Nj(e);if(n.length===0)return t.empty;let r=e=>{let n=Pj(e);return n.length>0?n:t.unnamedFile};return n.length===1?r(n[0]?.name??``):n.length<=3?n.map(e=>r(e.name)).join(`, `):`${n.slice(0,2).map(e=>r(e.name)).join(`, `)} ${t.formatMoreFiles(n.length-2)}`}function Ij(e){return e?Array.from(e):[]}function Lj(){return(Lj=t((()=>{})))()}function Rj(e){switch(e){case`sm`:return Uj;case`lg`:return Gj;default:return Wj}}function zj(e){let{name:t,control:n,rules:r,id:a,label:o,description:s,errorMessage:l,fieldSize:u=`md`,buttonLabel:d,isDisabled:f=!1,isRequired:p=!1,summaryFormatter:m,className:h,accept:g,multiple:_,"data-testid":v}=e,{field:y,resolvedError:b,isInvalid:x}=aS({name:t,control:n,...Y({rules:r}),errorMessage:l}),{t:S}=i(`shared-module`),C=(0,Bj.useMemo)(()=>({empty:S(`fileField.empty`),unnamedFile:S(`fileField.unnamed`),formatMoreFiles:e=>S(`fileField.moreFiles`,{count:e})}),[S]),w=d??S(`fileField.chooseFile`),T=(0,Bj.useId)(),E=a??T,D=(0,Bj.useId)(),O=(0,Bj.useId)(),k=(0,Bj.useId)(),{labelProps:A,fieldProps:j,descriptionProps:M,errorMessageProps:N}=Tl({label:o,description:s,errorMessage:b,id:E,isInvalid:x}),P=My(typeof j[`aria-describedby`]==`string`?j[`aria-describedby`]:void 0,p?O:void 0,x&&!b?k:void 0),F=(0,Bj.useRef)(null),[I,L]=(0,Bj.useState)(C.empty);return(0,Vj.jsx)(HC,{...Y({className:h}),label:o,labelProps:A,description:s,descriptionProps:M,errorMessage:b,errorMessageProps:N,isDisabled:f,isRequired:p,layout:Kj,children:(0,Vj.jsxs)(`div`,{className:qw,children:[(0,Vj.jsx)(ge,{children:(0,Vj.jsx)(`input`,{ref:cS(F,y.ref),type:`file`,name:y.name,accept:g,multiple:_,disabled:f,required:p,"aria-hidden":`true`,tabIndex:-1,"data-testid":v===void 0?void 0:`${v}-input`,onChange:e=>{let t=Ij(e.currentTarget.files);L(m?.(t)??Fj(t,C)),y.onChange(t)}})}),(0,Vj.jsx)(`button`,{...j,className:c(Jw,Rj(u)),type:`button`,disabled:f,"data-invalid":x?`true`:void 0,"data-testid":v,"aria-describedby":P,"aria-labelledby":typeof j[`aria-labelledby`]==`string`?`${j[`aria-labelledby`]} ${D}`:D,onClick:()=>{F.current?.click()},children:(0,Vj.jsx)(`span`,{id:D,children:w})}),p||x&&!b?(0,Vj.jsx)(ge,{children:(0,Vj.jsxs)(Vj.Fragment,{children:[p?(0,Vj.jsx)(`span`,{id:O,children:S(`required`)}):null,x&&!b?(0,Vj.jsx)(`span`,{id:k,children:S(`error-title`)}):null]})}):null,(0,Vj.jsx)(`div`,{"aria-live":`polite`,className:Hj,role:`status`,children:I})]})})}var Bj,Vj,Hj,Uj,Wj,Gj,Kj;function qj(){return(qj=t((()=>{l(),Bj=e(r()),El(),ce(),a(),oS(),pS(),Lj(),WC(),Yw(),Vj=G(),Hj=u`
  color: var(--field-description);
  font-size: 0.9375rem;
  line-height: 1.45;
`,Uj=u`
  min-height: var(--control-height-sm);
  padding: 0 var(--control-padding-x-sm);
  font-size: var(--font-size-sm);
`,Wj=u`
  min-height: var(--control-height-md);
  padding: 0 var(--control-padding-x-md);
  font-size: var(--font-size-md);
`,Gj=u`
  min-height: var(--control-height-lg);
  padding: 0 var(--control-padding-x-lg);
  font-size: var(--font-size-lg);
`,Kj=`stacked`})))()}function Jj(e){return typeof e==`string`?e:e.toString()}var Yj,Xj,Zj;function Qj(){return(Qj=t((()=>{Yj=e(r()),Xj=G(),Zj=Yj.forwardRef(function({href:e,children:t,...n},r){return(0,Xj.jsx)(`a`,{ref:r,href:Jj(e),...n,children:t})})})))()}function $j(){return($j=t((()=>{Qj()})))()}var eM,tM,nM,rM,iM,aM,oM,sM,cM;function lM(){return(lM=t((()=>{l(),$j(),eM=e(r()),O(),fr(),Mt(),ce(),a(),ab(),fb(),tM=G(),nM=`_self`,rM=/^(?:[a-zA-Z][a-zA-Z\d+.-]*:|\/\/)/,iM=u`
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
`,aM={text:c(iM,u`
      text-decoration: underline;
    `),quiet:c(iM,u`
      text-decoration: none;

      &:hover,
      &:focus-visible {
        text-decoration: underline;
      }
    `),inherit:void 0},oM=`text`,sM=`span`,cM=eM.forwardRef(function(e,t){let{styledAsButton:n,appearance:r,variant:a,size:o,icon:s,iconPosition:l,isLoading:u,isDisabled:d,loadingLabel:f,isCrossService:p,onPress:m,onPressStart:h,onPressEnd:g,onPressChange:_,onPressUp:v,"aria-describedby":y,"aria-labelledby":b,"aria-label":x,onClick:S,onKeyDown:C,onKeyUp:w,onFocus:T,onBlur:E,onPointerDown:D,onPointerUp:O,onPointerCancel:k,className:A,children:j,tabIndex:M,href:N,as:P,replace:F,scroll:I,shallow:L,passHref:R,prefetch:z,locale:B,legacyBehavior:V,onNavigate:ee,transitionTypes:te,"data-testid":ne,...H}=e,re=n===!0,{t:ie}=i(`shared-module`),U=!!u,ae=U||!!d,oe=f??ie(`link.loading`),se=eM.useId(),ce=eM.useId(),le=eM.useId(),ue=H.target===`_blank`,de=ie(`link.opensInNewTab`),fe=My(y,U&&re?se:void 0,ue&&b&&!x?le:void 0),pe=ue&&x?`${x} ${de}`:x,me=pe?void 0:b??(re?ce:void 0),he=At(t),{linkProps:_e,isPressed:ve}=dr({isDisabled:ae,...Y({onPress:m,onPressStart:h,onPressEnd:g,onPressChange:_,onPressUp:v,"aria-label":pe,"aria-describedby":fe,"aria-labelledby":me})},he),ye=M,be=typeof ye==`number`?ye:ae?0:_e.tabIndex,xe=re?Fy({size:(re?o:void 0)??`medium`,variant:(re?a:void 0)??`primary`}):c(aM[r??oM],ae&&Ly),Se=c(xe,A)||void 0,Ce=re?s:void 0,we=(re?l:void 0)??`start`,Te=U?`loading`:ae?`disabled`:void 0,Ee=typeof e.target==`string`&&e.target!==nM,De=e.download!==void 0&&e.download!==!1,Oe=p!==!0&&!De&&!Ee&&!rM.test(N),ke=W(_e,{onClick:ae?void 0:S,onPointerDown:D,onPointerUp:O,onPointerCancel:k,onKeyDown:C,onKeyUp:w,onFocus:T,onBlur:E},H,{className:Se,tabIndex:be,"data-pressed":ve,"data-disabled-reason":Te,"data-testid":ne,"aria-busy":U||void 0}),Ae=re?(0,tM.jsxs)(tM.Fragment,{children:[(0,tM.jsxs)(`span`,{className:c(zy,U?By:void 0),children:[Ce&&we===`start`?(0,tM.jsx)(`span`,{className:Vy,children:Ce}):null,(0,tM.jsxs)(`span`,{id:me===ce?ce:void 0,children:[j,ue&&!x?(0,tM.jsxs)(ge,{elementType:sM,id:le,children:[` `,de]}):null]}),Ce&&we===`end`?(0,tM.jsx)(`span`,{className:Vy,children:Ce}):null]}),U?(0,tM.jsxs)(tM.Fragment,{children:[(0,tM.jsx)(`span`,{className:Hy,"aria-hidden":`true`,children:(0,tM.jsx)(`span`,{className:ob(`sm`,`current`)})}),(0,tM.jsx)(ge,{id:se,children:oe})]}):null]}):(0,tM.jsxs)(tM.Fragment,{children:[j,ue&&!x?(0,tM.jsxs)(ge,{elementType:sM,id:le,children:[` `,de]}):null]});if(!Oe)return(0,tM.jsx)(`a`,{...ke,href:N,ref:he,children:Ae});let je=Y({as:P,replace:F,scroll:I,shallow:L,passHref:R,prefetch:z,locale:B,legacyBehavior:V,onNavigate:ee,transitionTypes:te});return(0,tM.jsx)(Zj,{...ke,...je,href:N,ref:he,children:Ae})})})))()}function uM(e){return e!=null&&String(e).length>0}function dM(e,t){return e||t}function fM(e){return typeof e==`object`&&!!e&&`type`in e&&e.type===ge}function pM(e){return e??` `}function mM(e,t,n){return e===void 0?!t||n.length===0?null:n.join(` `):e}function hM(){return(hM=t((()=>{ce()})))()}function gM({defaultValue:e,elementRef:t,value:n}){let[r,i]=_M.useState(!1),[a,o]=_M.useState(()=>uM(n)||uM(e));return _M.useEffect(()=>{if(n!==void 0){o(uM(n));return}if(t.current){o(t.current.value.length>0);return}o(uM(e))},[e,t,n]),{hasValue:a,isFocused:r,isFloated:dM(r,a),setHasValue:o,setIsFocused:i}}var _M;function vM(){return(vM=t((()=>{_M=e(r()),hM()})))()}function yM(){return(yM=t((()=>{l(),r(),VC(),vM(),G(),u`
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
`})))()}function bM(e){if(!e.startsWith(`[`))return!1;let t=1;e[t]===`^`&&(t+=1);let n=!1,r=!0;for(;t<e.length;){let i=e[t];if(i===`\\`){t+=2,n=!0,r=!1;continue}if(i===`]`){if(r){t+=1,n=!0,r=!1;continue}return n&&t===e.length-1}t+=1,n=!0,r=!1}return!1}function xM(e){if(!bM(e.source))throw Error(`toCharacterMatcher expects a simple character-class RegExp (e.g. /[0-9]/)`);let t=e.flags.replaceAll(`g`,``);return new RegExp(e.source,t)}function SM(e,t){return typeof t==`function`?t(e):xM(t).test(e)}function CM(e,t=jM){return Array.from(e).filter(e=>SM(e,t)).join(``)}function wM(e,t){return Array.from({length:t},(t,n)=>e[n]??``)}function TM(e){return e.join(``)}function EM(e,t){return Math.max(0,Math.min(t-1,e))}function DM(e,t,n,r){let i=[...e],a=CM(n,r).slice(-1);return i[t]=a,{slots:i,nextIndex:a?EM(t+1,e.length):t}}function OM(e,t,n,r){let i=[...e],a=CM(n,r).slice(0,i.length-t).split(``);for(let e=0;e<a.length;e+=1)i[t+e]=a[e]??``;return{slots:i,nextIndex:a.length>0?EM(t+a.length,i.length):t}}function kM(e,t){let n=[...e];if(n[t])return n[t]=``,{slots:n,nextIndex:t};let r=EM(t-1,n.length);return n[r]=``,{slots:n,nextIndex:r}}function AM(e,t,n,r){return n?.(e,t)??r?.(e,t)??`Character ${e+1} of ${t}`}var jM;function MM(){return(MM=t((()=>{jM=/[0-9]/})))()}function NM(e){switch(e){case`sm`:return VM;case`lg`:return UM;default:return HM}}function PM(e){let{name:t,control:n,rules:r,id:a,label:o,description:s,errorMessage:l,fieldSize:u=`md`,length:d=6,onComplete:f,allowedCharacters:p=/[0-9]/,getSlotAriaLabel:m,isDisabled:h=!1,isReadOnly:g=!1,isRequired:_=!1,className:v,autoComplete:y,isFullWidth:b=!1,groupSize:x,autoFocus:S=!1,"data-testid":C}=e,{field:w,resolvedError:T,isInvalid:E}=aS({name:t,control:n,...Y({rules:r}),errorMessage:l}),{t:D}=i(`shared-module`),O=(0,FM.useId)(),k=a??O,A=(0,FM.useRef)(null),j=(0,FM.useRef)(null),M=(0,FM.useRef)([]),N=(0,FM.useRef)(!1);(0,FM.useImperativeHandle)(w.ref,()=>M.current[0]??lS(j.current,GM));let P=(0,FM.useId)(),F=(0,FM.useId)(),{labelProps:I,fieldProps:L,descriptionProps:R,errorMessageProps:z}=Tl({label:o,description:s,errorMessage:T,id:k,isInvalid:E}),{id:B=k,"aria-labelledby":V,...ee}=L,te=Array.from(new Set([V,I.id].flatMap(e=>typeof e==`string`?e.split(` `):[]).filter(e=>e.length>0))).join(` `),ne=W(I,{onClick:()=>{h||M.current[0]?.focus()}}),H=typeof w.value==`string`?w.value:``;(0,FM.useEffect)(()=>{S&&M.current[0]?.focus()},[S]),(0,FM.useEffect)(()=>{A.current&&(A.current.value=H)},[H]);let re=dS({descriptionId:P,errorMessageId:F,hasDescription:!!s,hasErrorMessage:!!T}),ie=wM(H,d),U=e=>{w.onChange(e),A.current&&(A.current.value=e),e.length===d&&f?.(e)};return(0,IM.jsxs)(HC,{...Y({className:v}),label:o,labelProps:ne,description:s,descriptionProps:R,errorMessage:T,errorMessageProps:z,isDisabled:h,isRequired:_,layout:WM,children:[(0,IM.jsx)(ge,{children:(0,IM.jsx)(`input`,{ref:A,type:`text`,name:w.name,value:H,disabled:h,readOnly:g,required:_,"aria-hidden":`true`,tabIndex:-1,autoComplete:y??`one-time-code`,"aria-describedby":re,onChange:()=>{}})}),(0,IM.jsx)(`div`,{...ee,ref:j,className:c(LM,b&&RM),role:`group`,"aria-labelledby":te||void 0,"aria-disabled":h?`true`:void 0,"data-testid":C,onBlur:e=>{j.current?.contains(e.relatedTarget)||(N.current=!1,w.onBlur())},onFocus:()=>{N.current||=!0},children:ie.map((e,t)=>(0,IM.jsx)(`input`,{id:t===0?B:void 0,ref:e=>{M.current[t]=e},className:c(BM,NM(u),x!==void 0&&t>0&&t%x===0&&zM),type:`text`,inputMode:`numeric`,maxLength:1,autoComplete:t===0?y??`one-time-code`:`off`,value:e,disabled:h,readOnly:g,"data-invalid":E?`true`:`false`,"aria-invalid":E?`true`:void 0,"aria-required":t===0&&_?`true`:void 0,"aria-label":AM(t,d,m,e=>D(`otp.slotLabel`,{index:e+1})),onChange:e=>{if(g)return;let n=DM(ie,t,e.currentTarget.value,p),r=TM(n.slots);U(r),M.current[n.nextIndex]?.focus()},onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{if(e.key===`ArrowLeft`)e.preventDefault(),M.current[EM(t-1,d)]?.focus();else if(e.key===`ArrowRight`)e.preventDefault(),M.current[EM(t+1,d)]?.focus();else if(e.key===`Backspace`){if(g)return;e.preventDefault();let n=kM(ie,t);U(TM(n.slots)),M.current[n.nextIndex]?.focus()}},onPaste:e=>{if(g)return;e.preventDefault();let n=e.clipboardData.getData(`text`),r=OM(ie,t,n,p);U(TM(r.slots)),M.current[r.nextIndex]?.focus()}},`${k}-${t}`))})]})}var FM,IM,LM,RM,zM,BM,VM,HM,UM,WM,GM;function KM(){return(KM=t((()=>{l(),FM=e(r()),O(),El(),ce(),a(),oS(),pS(),MM(),WC(),IM=G(),LM=u`
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
`,RM=u`
  flex-wrap: nowrap;
  justify-content: center;

  & > input {
    flex: 1 1 0;
    min-width: 0;
    max-width: 56px;
  }
`,zM=u`
  margin-inline-start: var(--space-3);
`,BM=u`
  width: 44px;
  height: 52px;
  border: 1px solid var(--field-border);
  border-radius: calc(var(--control-radius) + 4px);
  background: var(--field-bg);
  color: var(--field-fg);
  font-size: 1.25rem;
  font-variant-numeric: tabular-nums;
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
`,VM=u`
  width: 36px;
  height: 44px;
  font-size: 1rem;
`,HM=u`
  width: 44px;
  height: 52px;
  font-size: 1.25rem;
`,UM=u`
  width: 52px;
  height: 60px;
  font-size: 1.4rem;
`,WM=`stacked`,GM=`input`})))()}function qM(e){let t=(0,JM.useMemo)(()=>e.name||`radio-group-${YM}-${++XM}`,[e.name]),[n,r]=ot(e.value,e.defaultValue??null,e.onChange),[i]=(0,JM.useState)(n),[a,o]=(0,JM.useState)(null),s=il({...e,value:n}),c=t=>{!e.isReadOnly&&!e.isDisabled&&(r(t),s.commitValidation())},l=s.displayValidation.isInvalid;return{...s,name:t,selectedValue:n,defaultSelectedValue:e.value===void 0?e.defaultValue??null:i,setSelectedValue:c,lastFocusedValue:a,setLastFocusedValue:o,isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1,validationState:e.validationState||(l?`invalid`:null),isInvalid:l}}var JM,YM,XM;function ZM(){return(ZM=t((()=>{gl(),Ue(),JM=r(),YM=Math.round(Math.random()*1e10),XM=0})))()}function QM(e){let{name:t,control:n,rules:r,label:i,description:a,errorMessage:o,fieldSize:s=`md`,isDisabled:l=!1,isReadOnly:u=!1,isRequired:d=!1,orientation:f=`vertical`,variant:p=`list`,fillWidth:m=!1,proseDescription:h=!1,className:g,children:_,"aria-label":v,"data-testid":y}=e,{field:b,resolvedError:x,isInvalid:S}=aS({name:t,control:n,rules:r,errorMessage:o}),C=(0,$M.useRef)(null);(0,$M.useImperativeHandle)(b.ref,()=>({focus(){C.current?.querySelector(hN)?.focus()}}));let w=qM({...b.value===null||b.value===void 0?{}:{value:String(b.value)},onChange:e=>{b.onChange(e)},name:b.name,isDisabled:l,isReadOnly:u,isRequired:d,isInvalid:S}),{radioGroupProps:T,labelProps:E,descriptionProps:D,errorMessageProps:O,isInvalid:k,validationErrors:A}=av({label:i,description:a,errorMessage:x,name:b.name,orientation:f,isDisabled:l,isReadOnly:u,isRequired:d,isInvalid:S,...Y({"aria-label":v})},w),j=p===`segmented`,M=a?(0,eN.jsx)(`div`,{...D,className:h?lN:VS,children:a}):null,N=x??(k&&A.length>0?A.join(` `):null),P=W(T,{onBlur:e=>{C.current?.contains(e.relatedTarget)||b.onBlur()}});return(0,eN.jsxs)(`fieldset`,{...P,ref:C,className:c(FS,nN,g),disabled:w.isDisabled,"data-testid":y,children:[(0,eN.jsx)(`legend`,{...E,className:c(j?sN:IS,rN),children:i}),j&&M?(0,eN.jsx)(`div`,{className:h?uN:cN,children:M}):null,(0,eN.jsx)(tN.Provider,{value:{fieldSize:s,state:w,variant:p,fillWidth:m},children:(0,eN.jsx)(`div`,{className:c(mN(p,f),j&&!M?dN:void 0),children:_})}),!j&&M||N?(0,eN.jsxs)(`div`,{className:c(BS,!j&&M&&h?pN:fN),children:[j?null:M,N?(0,eN.jsx)(`div`,{...O,className:US,role:`alert`,children:N}):null]}):null]})}var $M,eN,tN,nN,rN,iN,aN,oN,sN,cN,lN,uN,dN,fN,pN,mN,hN;function gN(){return(gN=t((()=>{l(),ZM(),$M=e(r()),O(),ov(),oS(),WS(),eN=G(),tN=$M.createContext(null),nN=u`
  margin: 0;
  padding: 0;
  border: 0;
`,rN=u`
  padding: 0;
  margin-bottom: var(--space-3);
`,iN=u`
  display: grid;
  gap: var(--space-3);
`,aN=u`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
`,oN=u`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
`,sN=u`
  color: var(--color-gray-700);
  font-size: var(--font-size-3);
  font-weight: 600;
  line-height: 1.3;
`,cN=u`
  margin-top: var(--space-1);
  margin-bottom: var(--space-3-5);
`,lN=u`
  max-width: 100%;
  overflow-wrap: anywhere;
`,uN=u`
  margin-top: var(--space-4-5);
  margin-bottom: var(--space-4-5);
`,dN=u`
  margin-top: var(--space-3-5);
`,fN=u`
  margin-top: var(--space-3-5);
`,pN=u`
  margin-top: var(--space-4-5);
`,mN=(e,t)=>e===`segmented`?oN:t===`horizontal`?aN:iN,hN=`input[type="radio"]`})))()}function _N({forwardedRef:e,group:t,...n}){let{label:r,description:i,errorMessage:a,fieldSize:o,isDisabled:s,className:l,value:u,disabled:d,checked:f,defaultChecked:p,"aria-describedby":m,onChange:h,required:g,..._}=n,v=At(e),{focusProps:y,isFocusVisible:b}=$g(),x=(0,vN.useId)(),S=(0,vN.useId)(),C=o??t.fieldSize??bN,{inputProps:w,isDisabled:T,isSelected:E,labelProps:D}=nv({children:r,value:u===void 0?void 0:String(u),isDisabled:!!(s||d)},t.state,v),O=My(typeof w[`aria-describedby`]==`string`?w[`aria-describedby`]:void 0,m,i?x:void 0,a?S:void 0),{type:k,...A}=_,j=W(w,y,{...A,onChange:h,type:`radio`});return t.variant===`segmented`?(0,yN.jsxs)(`label`,{...D,className:c(Fy({size:`medium`,variant:E?`primary`:`secondary`}),xN,t.fillWidth&&CN,l),"data-disabled":String(T),"data-focus-visible":String(b),"data-selected":String(E),children:[(0,yN.jsx)(`input`,{...j,ref:v,className:bS,"aria-describedby":O}),(0,yN.jsxs)(`span`,{className:SN,children:[(0,yN.jsx)(`span`,{children:r}),(0,yN.jsx)(wN,{description:i,descriptionId:x,errorMessage:a,errorMessageId:S})]})]}):(0,yN.jsxs)(`label`,{...D,className:c(vS,mS(C),l),"data-disabled":String(T),children:[(0,yN.jsx)(`input`,{...j,ref:v,className:bS,"aria-describedby":O}),(0,yN.jsx)(`span`,{className:hS(C,`radio`),"aria-hidden":`true`,"data-disabled":String(T),"data-focus-visible":String(b),"data-invalid":String(t.state.isInvalid),"data-selected":String(E),children:E?(0,yN.jsx)(`span`,{className:c(kS,AS,NS)}):null}),(0,yN.jsxs)(`span`,{className:xS,children:[(0,yN.jsx)(`span`,{className:SS,children:r}),(0,yN.jsx)(wN,{description:i,descriptionId:x,errorMessage:a,errorMessageId:S})]})]})}var vN,yN,bN,xN,SN,CN,wN;function TN(){return(TN=t((()=>{l(),vN=e(r()),O(),t_(),Mt(),iv(),pS(),ab(),PS(),WS(),yN=G(),bN=`md`,xN=u`
  /* The button sizes fix a height, which a description under the label would overflow. */
  height: auto;
  min-height: var(--control-height-md);
  padding-block: var(--space-2);

  &[data-focus-visible="true"] {
    box-shadow:
      0 0 0 var(--focus-ring-offset) var(--focus-ring-offset-color),
      0 0 0 calc(var(--focus-ring-offset) + var(--focus-ring-width)) var(--focus-ring-color);
  }
`,SN=u`
  display: grid;
  gap: var(--space-1);
  white-space: normal;
`,CN=u`
  flex: 1 1 0;
`,wN=({description:e,descriptionId:t,errorMessage:n,errorMessageId:r})=>(0,yN.jsxs)(yN.Fragment,{children:[e?(0,yN.jsx)(`span`,{className:VS,id:t,children:e}):null,n?(0,yN.jsx)(`span`,{className:US,id:r,role:`alert`,children:n}):null]})})))()}function EN({forwardedRef:e,...t}){let{label:n,description:r,errorMessage:i,fieldSize:a,isDisabled:o,className:s,value:l,disabled:u,checked:d,defaultChecked:f,"aria-describedby":p,onChange:m,required:h,...g}=t,_=At(e),{focusProps:v,isFocusVisible:y}=$g(),b=(0,DN.useId)(),x=(0,DN.useId)(),S=a??kN,C=l===void 0?void 0:String(l),w=d!==void 0,T=uS({isDisabled:!!(o||u),isRequired:!!h,isInvalid:!!i}),E=My(p,r?b:void 0,i?x:void 0),{type:D,...O}=g,k=W(O,v,{className:bS,type:`radio`,disabled:T.isDisabled,required:T.isRequired,...Y({value:C}),"aria-describedby":E,...w?{checked:d,onChange:m}:{defaultChecked:f,onChange:m}});return(0,ON.jsxs)(`label`,{className:c(vS,AN,mS(S),s),"data-disabled":String(T.isDisabled),children:[(0,ON.jsx)(`input`,{...k,ref:_}),(0,ON.jsx)(`span`,{className:c(hS(S,`radio`),w?void 0:OS),"aria-hidden":`true`,"data-disabled":String(T.isDisabled),"data-focus-visible":String(y),"data-invalid":String(T.isInvalid),...Ny(w,{"data-selected":String(d)}),children:w?d?(0,ON.jsx)(`span`,{className:c(kS,AS,NS)}):null:(0,ON.jsx)(`span`,{className:c(kS,NS)})}),(0,ON.jsxs)(`span`,{className:xS,children:[(0,ON.jsx)(`span`,{className:SS,children:n}),r?(0,ON.jsx)(`span`,{className:VS,id:b,children:r}):null,i?(0,ON.jsx)(`span`,{className:US,id:x,role:`alert`,children:i}):null]})]})}var DN,ON,kN,AN;function jN(){return(jN=t((()=>{l(),DN=r(),O(),t_(),Mt(),pS(),PS(),WS(),ON=G(),kN=`md`,AN=u`
  display: flex;
  width: fit-content;

  & + & {
    margin-block-start: var(--space-2);
  }
`})))()}var MN,NN,PN;function FN(){return(FN=t((()=>{MN=e(r()),gN(),TN(),jN(),NN=G(),PN=MN.forwardRef(function(e,t){let n=(0,MN.useContext)(tN);return n?(0,NN.jsx)(_N,{...e,forwardedRef:t,group:n}):(0,NN.jsx)(EN,{...e,forwardedRef:t})})})))()}var IN;function LN(){return(LN=t((()=>{l(),r(),IN=`data-route-focus-manager-active`,s`
  [${IN}]:focus {
    outline: none;
  }
`})))()}function RN(e){let{onInputChange:t,inputValue:n,defaultInputValue:r=``}=e,i=e=>{t&&t(e)},[a,o]=(0,zN.useState)(null),[s,c]=ot(n,r,i);return{inputValue:s,setInputValue:c,focusedNodeId:a,setFocusedNodeId:o}}var zN;function BN(){return(BN=t((()=>{Ue(),zN=r()})))()}function VN(e){let[t,n]=ot(HN(e.value),HN(e.defaultValue)||``,e.onChange);return{value:t,setValue:n}}function HN(e){if(e!=null)return e.toString()}function UN(){return(UN=t((()=>{Ue()})))()}function WN(e){let{selectionMode:t=`single`,shouldCloseOnSelect:n=t===`single`}=e,r=nt(e),[i,a]=(0,KN.useState)(null),o=(0,KN.useMemo)(()=>e.defaultValue===void 0?t===`single`?e.defaultSelectedKey??null:[]:e.defaultValue,[e.defaultValue,e.defaultSelectedKey,t]),s=(0,KN.useMemo)(()=>e.value===void 0?t===`single`?e.selectedKey:void 0:e.value,[e.value,e.selectedKey,t]),[c,l]=ot(s,o,e.onChange),u=t===`single`&&Array.isArray(c)?c[0]:c,d=n=>{if(t===`single`){let t=Array.isArray(n)?n[0]??null:n;l(t),t!==u&&e.onSelectionChange?.(t)}else{let e=[];Array.isArray(n)?e=n:n!=null&&(e=[n]),l(e)}},f=Tw({...e,selectionMode:t,disallowEmptySelection:t===`single`,allowDuplicateSelectionEvents:!0,selectedKeys:(0,KN.useMemo)(()=>GN(u),[u]),onSelectionChange:e=>{if(e!==`all`){if(t===`single`){let t=e.values().next().value??null;d(t)}else d([...e]);n&&r.close(),h.commitValidation()}}}),p=f.selectionManager.firstSelectedKey,m=(0,KN.useMemo)(()=>[...f.selectionManager.selectedKeys].map(e=>f.collection.getItem(e)).filter(e=>e!=null),[f.selectionManager.selectedKeys,f.collection]),h=il({...e,value:Array.isArray(u)&&u.length===0?null:u}),[g,_]=(0,KN.useState)(!1),[v]=(0,KN.useState)(u);return{...h,...f,...r,value:u,defaultValue:o??v,setValue:d,selectedKey:p,setSelectedKey:d,selectedItem:m[0]??null,selectedItems:m,defaultSelectedKey:e.defaultSelectedKey??(e.selectionMode===`single`?v:null),focusStrategy:i,open(t=null){(f.collection.size!==0||e.allowsEmptyCollection)&&(a(t),r.open())},toggle(t=null){(f.collection.size!==0||e.allowsEmptyCollection)&&(a(t),r.toggle())},isFocused:g,setFocused:_}}function GN(e){if(e!==void 0)return e===null?[]:Array.isArray(e)?e:[e]}var KN;function qN(){return(qN=t((()=>{gl(),Ow(),Ze(),Ue(),KN=r()})))()}var JN=n(((e,t)=>{(function(){var n,r=`Expected a function`,i=`__lodash_hash_undefined__`,a=`__lodash_placeholder__`,o=1,s=2,c=8,l=16,u=32,d=64,f=128,p=256,m=512,h=1/0,g=9007199254740991,_=17976931348623157e292,v=NaN,y=4294967295,b=y-1,x=y>>>1,S=[[`ary`,f],[`bind`,o],[`bindKey`,s],[`curry`,c],[`curryRight`,l],[`flip`,m],[`partial`,u],[`partialRight`,d],[`rearg`,p]],C=`[object Arguments]`,w=`[object Array]`,T=`[object AsyncFunction]`,E=`[object Boolean]`,D=`[object Date]`,O=`[object DOMException]`,k=`[object Error]`,A=`[object Function]`,j=`[object GeneratorFunction]`,M=`[object Map]`,N=`[object Number]`,P=`[object Null]`,F=`[object Object]`,I=`[object Promise]`,L=`[object Proxy]`,R=`[object RegExp]`,z=`[object Set]`,B=`[object String]`,V=`[object Symbol]`,ee=`[object Undefined]`,te=`[object WeakMap]`,ne=`[object WeakSet]`,H=`[object ArrayBuffer]`,re=`[object DataView]`,ie=`[object Float32Array]`,U=`[object Float64Array]`,ae=`[object Int8Array]`,oe=`[object Int16Array]`,se=`[object Int32Array]`,ce=`[object Uint8Array]`,le=`[object Uint8ClampedArray]`,ue=`[object Uint16Array]`,de=`[object Uint32Array]`,fe=/\b__p \+= '';/g,pe=/\b(__p \+=) '' \+/g,me=/(__e\(.*?\)|\b__t\)) \+\n'';/g,he=/&(?:amp|lt|gt|quot|#39);/g,ge=/[&<>"']/g,_e=RegExp(he.source),ve=RegExp(ge.source),ye=/<%-([\s\S]+?)%>/g,W=/<%([\s\S]+?)%>/g,be=/<%=([\s\S]+?)%>/g,xe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Se=/^\w*$/,Ce=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,we=/[\\^$.*+?()[\]{}|]/g,Te=RegExp(we.source),Ee=/^\s+/,De=/\s/,Oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ke=/\{\n\/\* \[wrapped with (.+)\] \*/,Ae=/,? & /,je=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Me=/[()=,{}\[\]\/\s]/,Ne=/\\(\\)?/g,Pe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Fe=/\w*$/,Ie=/^[-+]0x[0-9a-f]+$/i,Le=/^0b[01]+$/i,Re=/^\[object .+?Constructor\]$/,ze=/^0o[0-7]+$/i,Be=/^(?:0|[1-9]\d*)$/,Ve=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,He=/($^)/,Ue=/['\n\r\u2028\u2029\\]/g,We=`\\ud800-\\udfff`,Ge=`\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`,Ke=`\\u2700-\\u27bf`,qe=`a-z\\xdf-\\xf6\\xf8-\\xff`,Je=`\\xac\\xb1\\xd7\\xf7`,Ye=`\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf`,Xe=`\\u2000-\\u206f`,Ze=` \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000`,Qe=`A-Z\\xc0-\\xd6\\xd8-\\xde`,$e=`\\ufe0e\\ufe0f`,et=Je+Ye+Xe+Ze,tt=`['’]`,nt=`[`+We+`]`,rt=`[`+et+`]`,it=`[`+Ge+`]`,at=`\\d+`,ot=`[`+Ke+`]`,st=`[`+qe+`]`,ct=`[^`+We+et+at+Ke+qe+Qe+`]`,lt=`\\ud83c[\\udffb-\\udfff]`,ut=`(?:`+it+`|`+lt+`)`,dt=`[^`+We+`]`,ft=`(?:\\ud83c[\\udde6-\\uddff]){2}`,pt=`[\\ud800-\\udbff][\\udc00-\\udfff]`,mt=`[`+Qe+`]`,ht=`\\u200d`,gt=`(?:`+st+`|`+ct+`)`,_t=`(?:`+mt+`|`+ct+`)`,vt=`(?:`+tt+`(?:d|ll|m|re|s|t|ve))?`,yt=`(?:`+tt+`(?:D|LL|M|RE|S|T|VE))?`,G=ut+`?`,bt=`[`+$e+`]?`,xt=`(?:`+ht+`(?:`+[dt,ft,pt].join(`|`)+`)`+bt+G+`)*`,St=`\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])`,Ct=`\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])`,wt=bt+G+xt,Tt=`(?:`+[ot,ft,pt].join(`|`)+`)`+wt,Et=`(?:`+[dt+it+`?`,it,ft,pt,nt].join(`|`)+`)`,Dt=RegExp(tt,`g`),Ot=RegExp(it,`g`),kt=RegExp(lt+`(?=`+lt+`)|`+Et+wt,`g`),At=RegExp([mt+`?`+st+`+`+vt+`(?=`+[rt,mt,`$`].join(`|`)+`)`,_t+`+`+yt+`(?=`+[rt,mt+gt,`$`].join(`|`)+`)`,mt+`?`+gt+`+`+vt,mt+`+`+yt,Ct,St,at,Tt].join(`|`),`g`),jt=RegExp(`[`+ht+We+Ge+$e+`]`),Mt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Nt=`Array.Buffer.DataView.Date.Error.Float32Array.Float64Array.Function.Int8Array.Int16Array.Int32Array.Map.Math.Object.Promise.RegExp.Set.String.Symbol.TypeError.Uint8Array.Uint8ClampedArray.Uint16Array.Uint32Array.WeakMap._.clearTimeout.isFinite.parseInt.setTimeout`.split(`.`),Pt=-1,Ft={};Ft[ie]=Ft[U]=Ft[ae]=Ft[oe]=Ft[se]=Ft[ce]=Ft[le]=Ft[ue]=Ft[de]=!0,Ft[C]=Ft[w]=Ft[H]=Ft[E]=Ft[re]=Ft[D]=Ft[k]=Ft[A]=Ft[M]=Ft[N]=Ft[F]=Ft[R]=Ft[z]=Ft[B]=Ft[te]=!1;var It={};It[C]=It[w]=It[H]=It[re]=It[E]=It[D]=It[ie]=It[U]=It[ae]=It[oe]=It[se]=It[M]=It[N]=It[F]=It[R]=It[z]=It[B]=It[V]=It[ce]=It[le]=It[ue]=It[de]=!0,It[k]=It[A]=It[te]=!1;var Lt={À:`A`,Á:`A`,Â:`A`,Ã:`A`,Ä:`A`,Å:`A`,à:`a`,á:`a`,â:`a`,ã:`a`,ä:`a`,å:`a`,Ç:`C`,ç:`c`,Ð:`D`,ð:`d`,È:`E`,É:`E`,Ê:`E`,Ë:`E`,è:`e`,é:`e`,ê:`e`,ë:`e`,Ì:`I`,Í:`I`,Î:`I`,Ï:`I`,ì:`i`,í:`i`,î:`i`,ï:`i`,Ñ:`N`,ñ:`n`,Ò:`O`,Ó:`O`,Ô:`O`,Õ:`O`,Ö:`O`,Ø:`O`,ò:`o`,ó:`o`,ô:`o`,õ:`o`,ö:`o`,ø:`o`,Ù:`U`,Ú:`U`,Û:`U`,Ü:`U`,ù:`u`,ú:`u`,û:`u`,ü:`u`,Ý:`Y`,ý:`y`,ÿ:`y`,Æ:`Ae`,æ:`ae`,Þ:`Th`,þ:`th`,ß:`ss`,Ā:`A`,Ă:`A`,Ą:`A`,ā:`a`,ă:`a`,ą:`a`,Ć:`C`,Ĉ:`C`,Ċ:`C`,Č:`C`,ć:`c`,ĉ:`c`,ċ:`c`,č:`c`,Ď:`D`,Đ:`D`,ď:`d`,đ:`d`,Ē:`E`,Ĕ:`E`,Ė:`E`,Ę:`E`,Ě:`E`,ē:`e`,ĕ:`e`,ė:`e`,ę:`e`,ě:`e`,Ĝ:`G`,Ğ:`G`,Ġ:`G`,Ģ:`G`,ĝ:`g`,ğ:`g`,ġ:`g`,ģ:`g`,Ĥ:`H`,Ħ:`H`,ĥ:`h`,ħ:`h`,Ĩ:`I`,Ī:`I`,Ĭ:`I`,Į:`I`,İ:`I`,ĩ:`i`,ī:`i`,ĭ:`i`,į:`i`,ı:`i`,Ĵ:`J`,ĵ:`j`,Ķ:`K`,ķ:`k`,ĸ:`k`,Ĺ:`L`,Ļ:`L`,Ľ:`L`,Ŀ:`L`,Ł:`L`,ĺ:`l`,ļ:`l`,ľ:`l`,ŀ:`l`,ł:`l`,Ń:`N`,Ņ:`N`,Ň:`N`,Ŋ:`N`,ń:`n`,ņ:`n`,ň:`n`,ŋ:`n`,Ō:`O`,Ŏ:`O`,Ő:`O`,ō:`o`,ŏ:`o`,ő:`o`,Ŕ:`R`,Ŗ:`R`,Ř:`R`,ŕ:`r`,ŗ:`r`,ř:`r`,Ś:`S`,Ŝ:`S`,Ş:`S`,Š:`S`,ś:`s`,ŝ:`s`,ş:`s`,š:`s`,Ţ:`T`,Ť:`T`,Ŧ:`T`,ţ:`t`,ť:`t`,ŧ:`t`,Ũ:`U`,Ū:`U`,Ŭ:`U`,Ů:`U`,Ű:`U`,Ų:`U`,ũ:`u`,ū:`u`,ŭ:`u`,ů:`u`,ű:`u`,ų:`u`,Ŵ:`W`,ŵ:`w`,Ŷ:`Y`,ŷ:`y`,Ÿ:`Y`,Ź:`Z`,Ż:`Z`,Ž:`Z`,ź:`z`,ż:`z`,ž:`z`,Ĳ:`IJ`,ĳ:`ij`,Œ:`Oe`,œ:`oe`,ŉ:`'n`,ſ:`s`},Rt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},zt={"&amp;":`&`,"&lt;":`<`,"&gt;":`>`,"&quot;":`"`,"&#39;":`'`},Bt={"\\":`\\`,"'":`'`,"\n":`n`,"\r":`r`,"\u2028":`u2028`,"\u2029":`u2029`},Vt=parseFloat,Ht=parseInt,Ut=typeof global==`object`&&global&&global.Object===Object&&global,Wt=typeof self==`object`&&self&&self.Object===Object&&self,Gt=Ut||Wt||Function(`return this`)(),Kt=typeof e==`object`&&e&&!e.nodeType&&e,qt=Kt&&typeof t==`object`&&t&&!t.nodeType&&t,Jt=qt&&qt.exports===Kt,Yt=Jt&&Ut.process,Xt=function(){try{return qt&&qt.require&&qt.require(`util`).types||Yt&&Yt.binding&&Yt.binding(`util`)}catch{}}(),Zt=Xt&&Xt.isArrayBuffer,Qt=Xt&&Xt.isDate,$t=Xt&&Xt.isMap,en=Xt&&Xt.isRegExp,tn=Xt&&Xt.isSet,nn=Xt&&Xt.isTypedArray;function rn(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function an(e,t,n,r){for(var i=-1,a=e==null?0:e.length;++i<a;){var o=e[i];t(r,o,n(o),e)}return r}function on(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}function sn(e,t){for(var n=e==null?0:e.length;n--&&t(e[n],n,e)!==!1;);return e}function cn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function ln(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function un(e,t){return!!(e!=null&&e.length)&&Sn(e,t,0)>-1}function dn(e,t,n){for(var r=-1,i=e==null?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function fn(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function pn(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function mn(e,t,n,r){var i=-1,a=e==null?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}function hn(e,t,n,r){var i=e==null?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function gn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var _n=En(`length`);function vn(e){return e.split(``)}function yn(e){return e.match(je)||[]}function bn(e,t,n){var r;return n(e,function(e,n,i){if(t(e,n,i))return r=n,!1}),r}function xn(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1}function Sn(e,t,n){return t===t?Qn(e,t,n):xn(e,wn,n)}function Cn(e,t,n,r){for(var i=n-1,a=e.length;++i<a;)if(r(e[i],t))return i;return-1}function wn(e){return e!==e}function Tn(e,t){var n=e==null?0:e.length;return n?An(e,t)/n:v}function En(e){return function(t){return t==null?n:t[e]}}function Dn(e){return function(t){return e==null?n:e[t]}}function On(e,t,n,r,i){return i(e,function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)}),n}function kn(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function An(e,t){for(var r,i=-1,a=e.length;++i<a;){var o=t(e[i]);o!==n&&(r=r===n?o:r+o)}return r}function jn(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Mn(e,t){return fn(t,function(t){return[t,e[t]]})}function Nn(e){return e&&e.slice(0,nr(e)+1).replace(Ee,``)}function Pn(e){return function(t){return e(t)}}function Fn(e,t){return fn(t,function(t){return e[t]})}function In(e,t){return e.has(t)}function Ln(e,t){for(var n=-1,r=e.length;++n<r&&Sn(t,e[n],0)>-1;);return n}function Rn(e,t){for(var n=e.length;n--&&Sn(t,e[n],0)>-1;);return n}function zn(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}var Bn=Dn(Lt),Vn=Dn(Rt);function Hn(e){return`\\`+Bt[e]}function Un(e,t){return e==null?n:e[t]}function Wn(e){return jt.test(e)}function Gn(e){return Mt.test(e)}function Kn(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function qn(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function Jn(e,t){return function(n){return e(t(n))}}function Yn(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n];(s===t||s===a)&&(e[n]=a,o[i++]=n)}return o}function Xn(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}function Zn(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=[e,e]}),n}function Qn(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}function $n(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}function er(e){return Wn(e)?ir(e):_n(e)}function tr(e){return Wn(e)?ar(e):vn(e)}function nr(e){for(var t=e.length;t--&&De.test(e.charAt(t)););return t}var rr=Dn(zt);function ir(e){for(var t=kt.lastIndex=0;kt.test(e);)++t;return t}function ar(e){return e.match(kt)||[]}function or(e){return e.match(At)||[]}var sr=(function e(t){t=t==null?Gt:sr.defaults(Gt.Object(),t,sr.pick(Gt,Nt));var De=t.Array,je=t.Date,We=t.Error,Ge=t.Function,Ke=t.Math,qe=t.Object,Je=t.RegExp,Ye=t.String,Xe=t.TypeError,Ze=De.prototype,Qe=Ge.prototype,$e=qe.prototype,et=t[`__core-js_shared__`],tt=Qe.toString,nt=$e.hasOwnProperty,rt=0,it=function(){var e=/[^.]+$/.exec(et&&et.keys&&et.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),at=$e.toString,ot=tt.call(qe),st=Gt._,ct=Je(`^`+tt.call(nt).replace(we,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),lt=Jt?t.Buffer:n,ut=t.Symbol,dt=t.Uint8Array,ft=lt?lt.allocUnsafe:n,pt=Jn(qe.getPrototypeOf,qe),mt=qe.create,ht=$e.propertyIsEnumerable,gt=Ze.splice,_t=ut?ut.isConcatSpreadable:n,vt=ut?ut.iterator:n,yt=ut?ut.toStringTag:n,G=function(){try{var e=Fo(qe,`defineProperty`);return e({},``,{}),e}catch{}}(),bt=t.clearTimeout!==Gt.clearTimeout&&t.clearTimeout,xt=je&&je.now!==Gt.Date.now&&je.now,St=t.setTimeout!==Gt.setTimeout&&t.setTimeout,Ct=Ke.ceil,wt=Ke.floor,Tt=qe.getOwnPropertySymbols,Et=lt?lt.isBuffer:n,kt=t.isFinite,At=Ze.join,jt=Jn(qe.keys,qe),Mt=Ke.max,Lt=Ke.min,Rt=je.now,zt=t.parseInt,Bt=Ke.random,Ut=Ze.reverse,Wt=Fo(t,`DataView`),Kt=Fo(t,`Map`),qt=Fo(t,`Promise`),Yt=Fo(t,`Set`),Xt=Fo(t,`WeakMap`),_n=Fo(qe,`create`),vn=Xt&&new Xt,Dn={},Qn=bs(Wt),ir=bs(Kt),ar=bs(qt),cr=bs(Yt),lr=bs(Xt),ur=ut?ut.prototype:n,dr=ur?ur.valueOf:n,fr=ur?ur.toString:n;function K(e){if(fu(e)&&!J(e)&&!(e instanceof gr)){if(e instanceof hr)return e;if(nt.call(e,`__wrapped__`))return Ss(e)}return new hr(e)}var pr=function(){function e(){}return function(t){if(!du(t))return{};if(mt)return mt(t);e.prototype=t;var r=new e;return e.prototype=n,r}}();function mr(){}function hr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=n}K.templateSettings={escape:ye,evaluate:W,interpolate:be,variable:``,imports:{_:K}},K.prototype=mr.prototype,K.prototype.constructor=K,hr.prototype=pr(mr.prototype),hr.prototype.constructor=hr;function gr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=y,this.__views__=[]}function _r(){var e=new gr(this.__wrapped__);return e.__actions__=Ka(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ka(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ka(this.__views__),e}function vr(){if(this.__filtered__){var e=new gr(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function yr(){var e=this.__wrapped__.value(),t=this.__dir__,n=J(e),r=t<0,i=n?e.length:0,a=Bo(0,i,this.__views__),o=a.start,s=a.end,c=s-o,l=r?s:o-1,u=this.__iteratees__,d=u.length,f=0,p=Lt(c,this.__takeCount__);if(!n||!r&&i==c&&p==c)return Da(e,this.__actions__);var m=[];outer:for(;c--&&f<p;){l+=t;for(var h=-1,g=e[l];++h<d;){var _=u[h],v=_.iteratee,y=_.type,b=v(g);if(y==2)g=b;else if(!b){if(y==1)continue outer;break outer}}m[f++]=g}return m}gr.prototype=pr(mr.prototype),gr.prototype.constructor=gr;function br(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function xr(){this.__data__=_n?_n(null):{},this.size=0}function Sr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}function Cr(e){var t=this.__data__;if(_n){var r=t[e];return r===i?n:r}return nt.call(t,e)?t[e]:n}function wr(e){var t=this.__data__;return _n?t[e]!==n:nt.call(t,e)}function Tr(e,t){var r=this.__data__;return this.size+=+!this.has(e),r[e]=_n&&t===n?i:t,this}br.prototype.clear=xr,br.prototype.delete=Sr,br.prototype.get=Cr,br.prototype.has=wr,br.prototype.set=Tr;function Er(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Dr(){this.__data__=[],this.size=0}function Or(e){var t=this.__data__,n=$r(t,e);return n<0?!1:(n==t.length-1?t.pop():gt.call(t,n,1),--this.size,!0)}function kr(e){var t=this.__data__,r=$r(t,e);return r<0?n:t[r][1]}function Ar(e){return $r(this.__data__,e)>-1}function jr(e,t){var n=this.__data__,r=$r(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}Er.prototype.clear=Dr,Er.prototype.delete=Or,Er.prototype.get=kr,Er.prototype.has=Ar,Er.prototype.set=jr;function Mr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Nr(){this.size=0,this.__data__={hash:new br,map:new(Kt||Er),string:new br}}function Pr(e){var t=No(this,e).delete(e);return this.size-=+!!t,t}function Fr(e){return No(this,e).get(e)}function Ir(e){return No(this,e).has(e)}function Lr(e,t){var n=No(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}Mr.prototype.clear=Nr,Mr.prototype.delete=Pr,Mr.prototype.get=Fr,Mr.prototype.has=Ir,Mr.prototype.set=Lr;function Rr(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Mr;++t<n;)this.add(e[t])}function zr(e){return this.__data__.set(e,i),this}function Br(e){return this.__data__.has(e)}Rr.prototype.add=Rr.prototype.push=zr,Rr.prototype.has=Br;function Vr(e){var t=this.__data__=new Er(e);this.size=t.size}function Hr(){this.__data__=new Er,this.size=0}function Ur(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Wr(e){return this.__data__.get(e)}function Gr(e){return this.__data__.has(e)}function Kr(e,t){var n=this.__data__;if(n instanceof Er){var r=n.__data__;if(!Kt||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Mr(r)}return n.set(e,t),this.size=n.size,this}Vr.prototype.clear=Hr,Vr.prototype.delete=Ur,Vr.prototype.get=Wr,Vr.prototype.has=Gr,Vr.prototype.set=Kr;function qr(e,t){var n=J(e),r=!n&&Yl(e),i=!n&&!r&&eu(e),a=!n&&!r&&!i&&Du(e),o=n||r||i||a,s=o?jn(e.length,Ye):[],c=s.length;for(var l in e)(t||nt.call(e,l))&&!(o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||Jo(l,c)))&&s.push(l);return s}function Jr(e){var t=e.length;return t?e[oa(0,t-1)]:n}function Yr(e,t){return _s(Ka(e),ai(t,0,e.length))}function Xr(e){return _s(Ka(e))}function Zr(e,t,r){(r!==n&&!Kl(e[t],r)||r===n&&!(t in e))&&ri(e,t,r)}function Qr(e,t,r){var i=e[t];(!(nt.call(e,t)&&Kl(i,r))||r===n&&!(t in e))&&ri(e,t,r)}function $r(e,t){for(var n=e.length;n--;)if(Kl(e[n][0],t))return n;return-1}function ei(e,t,n,r){return di(e,function(e,i,a){t(r,e,n(e),a)}),r}function ti(e,t){return e&&qa(t,ld(t),e)}function ni(e,t){return e&&qa(t,ud(t),e)}function ri(e,t,n){t==`__proto__`&&G?G(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ii(e,t){for(var r=-1,i=t.length,a=De(i),o=e==null;++r<i;)a[r]=o?n:rd(e,t[r]);return a}function ai(e,t,r){return e===e&&(r!==n&&(e=e<=r?e:r),t!==n&&(e=e>=t?e:t)),e}function oi(e,t,r,i,a,o){var s,c=t&1,l=t&2,u=t&4;if(r&&(s=a?r(e,i,a,o):r(e)),s!==n)return s;if(!du(e))return e;var d=J(e);if(d){if(s=Uo(e),!c)return Ka(e,s)}else{var f=zo(e),p=f==A||f==j;if(eu(e))return Ia(e,c);if(f==F||f==C||p&&!a){if(s=l||p?{}:Wo(e),!c)return l?Ya(e,ni(s,e)):Ja(e,ti(s,e))}else{if(!It[f])return a?e:{};s=Go(e,f,c)}}o||=new Vr;var m=o.get(e);if(m)return m;o.set(e,s),wu(e)?e.forEach(function(n){s.add(oi(n,t,r,n,e,o))}):pu(e)&&e.forEach(function(n,i){s.set(i,oi(n,t,r,i,e,o))});var h=d?n:(u?l?ko:Oo:l?ud:ld)(e);return on(h||e,function(n,i){h&&(i=n,n=e[i]),Qr(s,i,oi(n,t,r,i,e,o))}),s}function si(e){var t=ld(e);return function(n){return ci(n,e,t)}}function ci(e,t,r){var i=r.length;if(e==null)return!i;for(e=qe(e);i--;){var a=r[i],o=t[a],s=e[a];if(s===n&&!(a in e)||!o(s))return!1}return!0}function li(e,t,i){if(typeof e!=`function`)throw new Xe(r);return ps(function(){e.apply(n,i)},t)}function ui(e,t,n,r){var i=-1,a=un,o=!0,s=e.length,c=[],l=t.length;if(!s)return c;n&&(t=fn(t,Pn(n))),r?(a=dn,o=!1):t.length>=200&&(a=In,o=!1,t=new Rr(t));outer:for(;++i<s;){var u=e[i],d=n==null?u:n(u);if(u=r||u!==0?u:0,o&&d===d){for(var f=l;f--;)if(t[f]===d)continue outer;c.push(u)}else a(t,d,r)||c.push(u)}return c}var di=Qa(bi),fi=Qa(xi,!0);function pi(e,t){var n=!0;return di(e,function(e,r,i){return n=!!t(e,r,i),n}),n}function mi(e,t,r){for(var i=-1,a=e.length;++i<a;){var o=e[i],s=t(o);if(s!=null&&(c===n?s===s&&!Eu(s):r(s,c)))var c=s,l=o}return l}function hi(e,t,r,i){var a=e.length;for(r=Fu(r),r<0&&(r=-r>a?0:a+r),i=i===n||i>a?a:Fu(i),i<0&&(i+=a),i=r>i?0:Iu(i);r<i;)e[r++]=t;return e}function gi(e,t){var n=[];return di(e,function(e,r,i){t(e,r,i)&&n.push(e)}),n}function _i(e,t,n,r,i){var a=-1,o=e.length;for(n||=qo,i||=[];++a<o;){var s=e[a];t>0&&n(s)?t>1?_i(s,t-1,n,r,i):pn(i,s):r||(i[i.length]=s)}return i}var vi=$a(),yi=$a(!0);function bi(e,t){return e&&vi(e,t,ld)}function xi(e,t){return e&&yi(e,t,ld)}function Si(e,t){return ln(t,function(t){return cu(e[t])})}function Ci(e,t){t=Ma(t,e);for(var r=0,i=t.length;e!=null&&r<i;)e=e[ys(t[r++])];return r&&r==i?e:n}function wi(e,t,n){var r=t(e);return J(e)?r:pn(r,n(e))}function Ti(e){return e==null?e===n?ee:P:yt&&yt in qe(e)?Io(e):ss(e)}function Ei(e,t){return e>t}function Di(e,t){return e!=null&&nt.call(e,t)}function Oi(e,t){return e!=null&&t in qe(e)}function ki(e,t,n){return e>=Lt(t,n)&&e<Mt(t,n)}function Ai(e,t,r){for(var i=r?dn:un,a=e[0].length,o=e.length,s=o,c=De(o),l=1/0,u=[];s--;){var d=e[s];s&&t&&(d=fn(d,Pn(t))),l=Lt(d.length,l),c[s]=!r&&(t||a>=120&&d.length>=120)?new Rr(s&&d):n}d=e[0];var f=-1,p=c[0];outer:for(;++f<a&&u.length<l;){var m=d[f],h=t?t(m):m;if(m=r||m!==0?m:0,!(p?In(p,h):i(u,h,r))){for(s=o;--s;){var g=c[s];if(!(g?In(g,h):i(e[s],h,r)))continue outer}p&&p.push(h),u.push(m)}}return u}function ji(e,t,n,r){return bi(e,function(e,i,a){t(r,n(e),i,a)}),r}function Mi(e,t,r){t=Ma(t,e),e=ls(e,t);var i=e==null?e:e[ys(qs(t))];return i==null?n:rn(i,e,r)}function Ni(e){return fu(e)&&Ti(e)==C}function Pi(e){return fu(e)&&Ti(e)==H}function Fi(e){return fu(e)&&Ti(e)==D}function Ii(e,t,n,r,i){return e===t?!0:e==null||t==null||!fu(e)&&!fu(t)?e!==e&&t!==t:Li(e,t,n,r,Ii,i)}function Li(e,t,n,r,i,a){var o=J(e),s=J(t),c=o?w:zo(e),l=s?w:zo(t);c=c==C?F:c,l=l==C?F:l;var u=c==F,d=l==F,f=c==l;if(f&&eu(e)){if(!eu(t))return!1;o=!0,u=!1}if(f&&!u)return a||=new Vr,o||Du(e)?wo(e,t,n,r,i,a):To(e,t,c,n,r,i,a);if(!(n&1)){var p=u&&nt.call(e,`__wrapped__`),m=d&&nt.call(t,`__wrapped__`);if(p||m){var h=p?e.value():e,g=m?t.value():t;return a||=new Vr,i(h,g,n,r,a)}}return f?(a||=new Vr,Eo(e,t,n,r,i,a)):!1}function Ri(e){return fu(e)&&zo(e)==M}function zi(e,t,r,i){var a=r.length,o=a,s=!i;if(e==null)return!o;for(e=qe(e);a--;){var c=r[a];if(s&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++a<o;){c=r[a];var l=c[0],u=e[l],d=c[1];if(s&&c[2]){if(u===n&&!(l in e))return!1}else{var f=new Vr;if(i)var p=i(u,d,l,e,t,f);if(!(p===n?Ii(d,u,3,i,f):p))return!1}}return!0}function Bi(e){return!du(e)||$o(e)?!1:(cu(e)?ct:Re).test(bs(e))}function Vi(e){return fu(e)&&Ti(e)==R}function Hi(e){return fu(e)&&zo(e)==z}function Ui(e){return fu(e)&&uu(e.length)&&!!Ft[Ti(e)]}function Wi(e){return typeof e==`function`?e:e==null?vf:typeof e==`object`?J(e)?Xi(e[0],e[1]):Yi(e):jf(e)}function Gi(e){if(!ts(e))return jt(e);var t=[];for(var n in qe(e))nt.call(e,n)&&n!=`constructor`&&t.push(n);return t}function Ki(e){if(!du(e))return os(e);var t=ts(e),n=[];for(var r in e)r==`constructor`&&(t||!nt.call(e,r))||n.push(r);return n}function qi(e,t){return e<t}function Ji(e,t){var n=-1,r=Zl(e)?De(e.length):[];return di(e,function(e,i,a){r[++n]=t(e,i,a)}),r}function Yi(e){var t=Po(e);return t.length==1&&t[0][2]?rs(t[0][0],t[0][1]):function(n){return n===e||zi(n,e,t)}}function Xi(e,t){return Xo(e)&&ns(t)?rs(ys(e),t):function(r){var i=rd(r,e);return i===n&&i===t?ad(r,e):Ii(t,i,3)}}function Zi(e,t,r,i,a){e!==t&&vi(t,function(o,s){if(a||=new Vr,du(o))Qi(e,t,s,r,Zi,i,a);else{var c=i?i(ds(e,s),o,s+``,e,t,a):n;c===n&&(c=o),Zr(e,s,c)}},ud)}function Qi(e,t,r,i,a,o,s){var c=ds(e,r),l=ds(t,r),u=s.get(l);if(u){Zr(e,r,u);return}var d=o?o(c,l,r+``,e,t,s):n,f=d===n;if(f){var p=J(l),m=!p&&eu(l),h=!p&&!m&&Du(l);d=l,p||m||h?J(c)?d=c:Ql(c)?d=Ka(c):m?(f=!1,d=Ia(l,!0)):h?(f=!1,d=Va(l,!0)):d=[]:xu(l)||Yl(l)?(d=c,Yl(c)?d=Ru(c):(!du(c)||cu(c))&&(d=Wo(l))):f=!1}f&&(s.set(l,d),a(d,l,i,o,s),s.delete(l)),Zr(e,r,d)}function $i(e,t){var r=e.length;if(r)return t+=t<0?r:0,Jo(t,r)?e[t]:n}function ea(e,t,n){t=t.length?fn(t,function(e){return J(e)?function(t){return Ci(t,e.length===1?e[0]:e)}:e}):[vf];var r=-1;return t=fn(t,Pn(q())),kn(Ji(e,function(e,n,i){return{criteria:fn(t,function(t){return t(e)}),index:++r,value:e}}),function(e,t){return Ua(e,t,n)})}function ta(e,t){return na(e,t,function(t,n){return ad(e,n)})}function na(e,t,n){for(var r=-1,i=t.length,a={};++r<i;){var o=t[r],s=Ci(e,o);n(s,o)&&fa(a,Ma(o,e),s)}return a}function ra(e){return function(t){return Ci(t,e)}}function ia(e,t,n,r){var i=r?Cn:Sn,a=-1,o=t.length,s=e;for(e===t&&(t=Ka(t)),n&&(s=fn(e,Pn(n)));++a<o;)for(var c=0,l=t[a],u=n?n(l):l;(c=i(s,u,c,r))>-1;)s!==e&&gt.call(s,c,1),gt.call(e,c,1);return e}function aa(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==a){var a=i;Jo(i)?gt.call(e,i,1):wa(e,i)}}return e}function oa(e,t){return e+wt(Bt()*(t-e+1))}function sa(e,t,n,r){for(var i=-1,a=Mt(Ct((t-e)/(n||1)),0),o=De(a);a--;)o[r?a:++i]=e,e+=n;return o}function ca(e,t){var n=``;if(!e||t<1||t>g)return n;do t%2&&(n+=e),t=wt(t/2),t&&(e+=e);while(t);return n}function la(e,t){return ms(cs(e,t,vf),e+``)}function ua(e){return Jr(Od(e))}function da(e,t){var n=Od(e);return _s(n,ai(t,0,n.length))}function fa(e,t,r,i){if(!du(e))return e;t=Ma(t,e);for(var a=-1,o=t.length,s=o-1,c=e;c!=null&&++a<o;){var l=ys(t[a]),u=r;if(l===`__proto__`||l===`constructor`||l===`prototype`)return e;if(a!=s){var d=c[l];u=i?i(d,l,c):n,u===n&&(u=du(d)?d:Jo(t[a+1])?[]:{})}Qr(c,l,u),c=c[l]}return e}var pa=vn?function(e,t){return vn.set(e,t),e}:vf,ma=G?function(e,t){return G(e,`toString`,{configurable:!0,enumerable:!1,value:mf(t),writable:!0})}:vf;function ha(e){return _s(Od(e))}function ga(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=De(i);++r<i;)a[r]=e[r+t];return a}function _a(e,t){var n;return di(e,function(e,r,i){return n=t(e,r,i),!n}),!!n}function va(e,t,n){var r=0,i=e==null?r:e.length;if(typeof t==`number`&&t===t&&i<=x){for(;r<i;){var a=r+i>>>1,o=e[a];o!==null&&!Eu(o)&&(n?o<=t:o<t)?r=a+1:i=a}return i}return ya(e,t,vf,n)}function ya(e,t,r,i){var a=0,o=e==null?0:e.length;if(o===0)return 0;t=r(t);for(var s=t!==t,c=t===null,l=Eu(t),u=t===n;a<o;){var d=wt((a+o)/2),f=r(e[d]),p=f!==n,m=f===null,h=f===f,g=Eu(f);if(s)var _=i||h;else _=u?h&&(i||p):c?h&&p&&(i||!m):l?h&&p&&!m&&(i||!g):m||g?!1:i?f<=t:f<t;_?a=d+1:o=d}return Lt(o,b)}function ba(e,t){for(var n=-1,r=e.length,i=0,a=[];++n<r;){var o=e[n],s=t?t(o):o;if(!n||!Kl(s,c)){var c=s;a[i++]=o===0?0:o}}return a}function xa(e){return typeof e==`number`?e:Eu(e)?v:+e}function Sa(e){if(typeof e==`string`)return e;if(J(e))return fn(e,Sa)+``;if(Eu(e))return fr?fr.call(e):``;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function Ca(e,t,n){var r=-1,i=un,a=e.length,o=!0,s=[],c=s;if(n)o=!1,i=dn;else if(a>=200){var l=t?null:vo(e);if(l)return Xn(l);o=!1,i=In,c=new Rr}else c=t?[]:s;outer:for(;++r<a;){var u=e[r],d=t?t(u):u;if(u=n||u!==0?u:0,o&&d===d){for(var f=c.length;f--;)if(c[f]===d)continue outer;t&&c.push(d),s.push(u)}else i(c,d,n)||(c!==s&&c.push(d),s.push(u))}return s}function wa(e,t){t=Ma(t,e);var n=-1,r=t.length;if(!r)return!0;for(;++n<r;){var i=ys(t[n]);if(i===`__proto__`&&!nt.call(e,`__proto__`)||(i===`constructor`||i===`prototype`)&&n<r-1)return!1}var a=ls(e,t);return a==null||delete a[ys(qs(t))]}function Ta(e,t,n,r){return fa(e,t,n(Ci(e,t)),r)}function Ea(e,t,n,r){for(var i=e.length,a=r?i:-1;(r?a--:++a<i)&&t(e[a],a,e););return n?ga(e,r?0:a,r?a+1:i):ga(e,r?a+1:0,r?i:a)}function Da(e,t){var n=e;return n instanceof gr&&(n=n.value()),mn(t,function(e,t){return t.func.apply(t.thisArg,pn([e],t.args))},n)}function Oa(e,t,n){var r=e.length;if(r<2)return r?Ca(e[0]):[];for(var i=-1,a=De(r);++i<r;)for(var o=e[i],s=-1;++s<r;)s!=i&&(a[i]=ui(a[i]||o,e[s],t,n));return Ca(_i(a,1),t,n)}function ka(e,t,r){for(var i=-1,a=e.length,o=t.length,s={};++i<a;){var c=i<o?t[i]:n;r(s,e[i],c)}return s}function Aa(e){return Ql(e)?e:[]}function ja(e){return typeof e==`function`?e:vf}function Ma(e,t){return J(e)?e:Xo(e,t)?[e]:vs(Bu(e))}var Na=la;function Pa(e,t,r){var i=e.length;return r=r===n?i:r,!t&&r>=i?e:ga(e,t,r)}var Fa=bt||function(e){return Gt.clearTimeout(e)};function Ia(e,t){if(t)return e.slice();var n=e.length,r=ft?ft(n):new e.constructor(n);return e.copy(r),r}function La(e){var t=new e.constructor(e.byteLength);return new dt(t).set(new dt(e)),t}function Ra(e,t){var n=t?La(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}function za(e){var t=new e.constructor(e.source,Fe.exec(e));return t.lastIndex=e.lastIndex,t}function Ba(e){return dr?qe(dr.call(e)):{}}function Va(e,t){var n=t?La(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ha(e,t){if(e!==t){var r=e!==n,i=e===null,a=e===e,o=Eu(e),s=t!==n,c=t===null,l=t===t,u=Eu(t);if(!c&&!u&&!o&&e>t||o&&s&&l&&!c&&!u||i&&s&&l||!r&&l||!a)return 1;if(!i&&!o&&!u&&e<t||u&&r&&a&&!i&&!o||c&&r&&a||!s&&a||!l)return-1}return 0}function Ua(e,t,n){for(var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;++r<o;){var c=Ha(i[r],a[r]);if(c)return r>=s?c:c*(n[r]==`desc`?-1:1)}return e.index-t.index}function Wa(e,t,n,r){for(var i=-1,a=e.length,o=n.length,s=-1,c=t.length,l=Mt(a-o,0),u=De(c+l),d=!r;++s<c;)u[s]=t[s];for(;++i<o;)(d||i<a)&&(u[n[i]]=e[i]);for(;l--;)u[s++]=e[i++];return u}function Ga(e,t,n,r){for(var i=-1,a=e.length,o=-1,s=n.length,c=-1,l=t.length,u=Mt(a-s,0),d=De(u+l),f=!r;++i<u;)d[i]=e[i];for(var p=i;++c<l;)d[p+c]=t[c];for(;++o<s;)(f||i<a)&&(d[p+n[o]]=e[i++]);return d}function Ka(e,t){var n=-1,r=e.length;for(t||=De(r);++n<r;)t[n]=e[n];return t}function qa(e,t,r,i){var a=!r;r||={};for(var o=-1,s=t.length;++o<s;){var c=t[o],l=i?i(r[c],e[c],c,r,e):n;l===n&&(l=e[c]),a?ri(r,c,l):Qr(r,c,l)}return r}function Ja(e,t){return qa(e,Lo(e),t)}function Ya(e,t){return qa(e,Ro(e),t)}function Xa(e,t){return function(n,r){var i=J(n)?an:ei,a=t?t():{};return i(n,e,q(r,2),a)}}function Za(e){return la(function(t,r){var i=-1,a=r.length,o=a>1?r[a-1]:n,s=a>2?r[2]:n;for(o=e.length>3&&typeof o==`function`?(a--,o):n,s&&Yo(r[0],r[1],s)&&(o=a<3?n:o,a=1),t=qe(t);++i<a;){var c=r[i];c&&e(t,c,i,o)}return t})}function Qa(e,t){return function(n,r){if(n==null)return n;if(!Zl(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=qe(n);(t?a--:++a<i)&&r(o[a],a,o)!==!1;);return n}}function $a(e){return function(t,n,r){for(var i=-1,a=qe(t),o=r(t),s=o.length;s--;){var c=o[e?s:++i];if(n(a[c],c,a)===!1)break}return t}}function eo(e,t,n){var r=t&o,i=ro(e);function a(){return(this&&this!==Gt&&this instanceof a?i:e).apply(r?n:this,arguments)}return a}function to(e){return function(t){t=Bu(t);var r=Wn(t)?tr(t):n,i=r?r[0]:t.charAt(0),a=r?Pa(r,1).join(``):t.slice(1);return i[e]()+a}}function no(e){return function(t){return mn(lf(Fd(t).replace(Dt,``)),e,``)}}function ro(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=pr(e.prototype),r=e.apply(n,t);return du(r)?r:n}}function io(e,t,r){var i=ro(e);function a(){for(var o=arguments.length,s=De(o),c=o,l=Mo(a);c--;)s[c]=arguments[c];var u=o<3&&s[0]!==l&&s[o-1]!==l?[]:Yn(s,l);return o-=u.length,o<r?go(e,t,so,a.placeholder,n,s,u,n,n,r-o):rn(this&&this!==Gt&&this instanceof a?i:e,this,s)}return a}function ao(e){return function(t,r,i){var a=qe(t);if(!Zl(t)){var o=q(r,3);t=ld(t),r=function(e){return o(a[e],e,a)}}var s=e(t,r,i);return s>-1?a[o?t[s]:s]:n}}function oo(e){return Do(function(t){var i=t.length,a=i,o=hr.prototype.thru;for(e&&t.reverse();a--;){var s=t[a];if(typeof s!=`function`)throw new Xe(r);if(o&&!l&&jo(s)==`wrapper`)var l=new hr([],!0)}for(a=l?a:i;++a<i;){s=t[a];var d=jo(s),m=d==`wrapper`?Ao(s):n;l=m&&Qo(m[0])&&m[1]==(f|c|u|p)&&!m[4].length&&m[9]==1?l[jo(m[0])].apply(l,m[3]):s.length==1&&Qo(s)?l[d]():l.thru(s)}return function(){var e=arguments,n=e[0];if(l&&e.length==1&&J(n))return l.plant(n).value();for(var r=0,a=i?t[r].apply(this,e):n;++r<i;)a=t[r].call(this,a);return a}})}function so(e,t,r,i,a,u,d,p,h,g){var _=t&f,v=t&o,y=t&s,b=t&(c|l),x=t&m,S=y?n:ro(e);function C(){for(var n=arguments.length,o=De(n),s=n;s--;)o[s]=arguments[s];if(b)var c=Mo(C),l=zn(o,c);if(i&&(o=Wa(o,i,a,b)),u&&(o=Ga(o,u,d,b)),n-=l,b&&n<g){var f=Yn(o,c);return go(e,t,so,C.placeholder,r,o,f,p,h,g-n)}var m=v?r:this,w=y?m[e]:e;return n=o.length,p?o=us(o,p):x&&n>1&&o.reverse(),_&&h<n&&(o.length=h),this&&this!==Gt&&this instanceof C&&(w=S||ro(w)),w.apply(m,o)}return C}function co(e,t){return function(n,r){return ji(n,e,t(r),{})}}function lo(e,t){return function(r,i){var a;if(r===n&&i===n)return t;if(r!==n&&(a=r),i!==n){if(a===n)return i;typeof r==`string`||typeof i==`string`?(r=Sa(r),i=Sa(i)):(r=xa(r),i=xa(i)),a=e(r,i)}return a}}function uo(e){return Do(function(t){return t=fn(t,Pn(q())),la(function(n){var r=this;return e(t,function(e){return rn(e,r,n)})})})}function fo(e,t){t=t===n?` `:Sa(t);var r=t.length;if(r<2)return r?ca(t,e):t;var i=ca(t,Ct(e/er(t)));return Wn(t)?Pa(tr(i),0,e).join(``):i.slice(0,e)}function po(e,t,n,r){var i=t&o,a=ro(e);function s(){for(var t=-1,o=arguments.length,c=-1,l=r.length,u=De(l+o),d=this&&this!==Gt&&this instanceof s?a:e;++c<l;)u[c]=r[c];for(;o--;)u[c++]=arguments[++t];return rn(d,i?n:this,u)}return s}function mo(e){return function(t,r,i){return i&&typeof i!=`number`&&Yo(t,r,i)&&(r=i=n),t=Pu(t),r===n?(r=t,t=0):r=Pu(r),i=i===n?t<r?1:-1:Pu(i),sa(t,r,i,e)}}function ho(e){return function(t,n){return(typeof t!=`string`||typeof n!=`string`)&&(t=Lu(t),n=Lu(n)),e(t,n)}}function go(e,t,r,i,a,l,f,p,m,h){var g=t&c,_=g?f:n,v=g?n:f,y=g?l:n,b=g?n:l;t|=g?u:d,t&=~(g?d:u),t&4||(t&=~(o|s));var x=[e,t,a,y,_,b,v,p,m,h],S=r.apply(n,x);return Qo(e)&&fs(S,x),S.placeholder=i,hs(S,e,t)}function _o(e){var t=Ke[e];return function(e,n){if(e=Lu(e),n=n==null?0:Lt(Fu(n),292),n&&kt(e)){var r=(Bu(e)+`e`).split(`e`);return r=(Bu(t(r[0]+`e`+(+r[1]+n)))+`e`).split(`e`),+(r[0]+`e`+(+r[1]-n))}return t(e)}}var vo=Yt&&1/Xn(new Yt([,-0]))[1]==h?function(e){return new Yt(e)}:Ef;function yo(e){return function(t){var n=zo(t);return n==M?qn(t):n==z?Zn(t):Mn(t,e(t))}}function bo(e,t,i,a,f,p,m,h){var g=t&s;if(!g&&typeof e!=`function`)throw new Xe(r);var _=a?a.length:0;if(_||(t&=~(u|d),a=f=n),m=m===n?m:Mt(Fu(m),0),h=h===n?h:Fu(h),_-=f?f.length:0,t&d){var v=a,y=f;a=f=n}var b=g?n:Ao(e),x=[e,t,i,a,f,v,y,p,m,h];if(b&&as(x,b),e=x[0],t=x[1],i=x[2],a=x[3],f=x[4],h=x[9]=x[9]===n?g?0:e.length:Mt(x[9]-_,0),!h&&t&(c|l)&&(t&=~(c|l)),!t||t==o)var S=eo(e,t,i);else S=t==c||t==l?io(e,t,h):(t==u||t==(o|u))&&!f.length?po(e,t,i,a):so.apply(n,x);return hs((b?pa:fs)(S,x),e,t)}function xo(e,t,r,i){return e===n||Kl(e,$e[r])&&!nt.call(i,r)?t:e}function So(e,t,r,i,a,o){return du(e)&&du(t)&&(o.set(t,e),Zi(e,t,n,So,o),o.delete(t)),e}function Co(e){return xu(e)?n:e}function wo(e,t,r,i,a,o){var s=r&1,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;var u=o.get(e),d=o.get(t);if(u&&d)return u==t&&d==e;var f=-1,p=!0,m=r&2?new Rr:n;for(o.set(e,t),o.set(t,e);++f<c;){var h=e[f],g=t[f];if(i)var _=s?i(g,h,f,t,e,o):i(h,g,f,e,t,o);if(_!==n){if(_)continue;p=!1;break}if(m){if(!gn(t,function(e,t){if(!In(m,t)&&(h===e||a(h,e,r,i,o)))return m.push(t)})){p=!1;break}}else if(!(h===g||a(h,g,r,i,o))){p=!1;break}}return o.delete(e),o.delete(t),p}function To(e,t,n,r,i,a,o){switch(n){case re:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case H:return!(e.byteLength!=t.byteLength||!a(new dt(e),new dt(t)));case E:case D:case N:return Kl(+e,+t);case k:return e.name==t.name&&e.message==t.message;case R:case B:return e==t+``;case M:var s=qn;case z:var c=r&1;if(s||=Xn,e.size!=t.size&&!c)return!1;var l=o.get(e);if(l)return l==t;r|=2,o.set(e,t);var u=wo(s(e),s(t),r,i,a,o);return o.delete(e),u;case V:if(dr)return dr.call(e)==dr.call(t)}return!1}function Eo(e,t,r,i,a,o){var s=r&1,c=Oo(e),l=c.length;if(l!=Oo(t).length&&!s)return!1;for(var u=l;u--;){var d=c[u];if(!(s?d in t:nt.call(t,d)))return!1}var f=o.get(e),p=o.get(t);if(f&&p)return f==t&&p==e;var m=!0;o.set(e,t),o.set(t,e);for(var h=s;++u<l;){d=c[u];var g=e[d],_=t[d];if(i)var v=s?i(_,g,d,t,e,o):i(g,_,d,e,t,o);if(!(v===n?g===_||a(g,_,r,i,o):v)){m=!1;break}h||=d==`constructor`}if(m&&!h){var y=e.constructor,b=t.constructor;y!=b&&`constructor`in e&&`constructor`in t&&!(typeof y==`function`&&y instanceof y&&typeof b==`function`&&b instanceof b)&&(m=!1)}return o.delete(e),o.delete(t),m}function Do(e){return ms(cs(e,n,Is),e+``)}function Oo(e){return wi(e,ld,Lo)}function ko(e){return wi(e,ud,Ro)}var Ao=vn?function(e){return vn.get(e)}:Ef;function jo(e){for(var t=e.name+``,n=Dn[t],r=nt.call(Dn,t)?n.length:0;r--;){var i=n[r],a=i.func;if(a==null||a==e)return i.name}return t}function Mo(e){return(nt.call(K,`placeholder`)?K:e).placeholder}function q(){var e=K.iteratee||yf;return e=e===yf?Wi:e,arguments.length?e(arguments[0],arguments[1]):e}function No(e,t){var n=e.__data__;return Zo(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function Po(e){for(var t=ld(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,ns(i)]}return t}function Fo(e,t){var r=Un(e,t);return Bi(r)?r:n}function Io(e){var t=nt.call(e,yt),r=e[yt];try{e[yt]=n;var i=!0}catch{}var a=at.call(e);return i&&(t?e[yt]=r:delete e[yt]),a}var Lo=Tt?function(e){return e==null?[]:(e=qe(e),ln(Tt(e),function(t){return ht.call(e,t)}))}:Ff,Ro=Tt?function(e){for(var t=[];e;)pn(t,Lo(e)),e=pt(e);return t}:Ff,zo=Ti;(Wt&&zo(new Wt(new ArrayBuffer(1)))!=re||Kt&&zo(new Kt)!=M||qt&&zo(qt.resolve())!=I||Yt&&zo(new Yt)!=z||Xt&&zo(new Xt)!=te)&&(zo=function(e){var t=Ti(e),r=t==F?e.constructor:n,i=r?bs(r):``;if(i)switch(i){case Qn:return re;case ir:return M;case ar:return I;case cr:return z;case lr:return te}return t});function Bo(e,t,n){for(var r=-1,i=n.length;++r<i;){var a=n[r],o=a.size;switch(a.type){case`drop`:e+=o;break;case`dropRight`:t-=o;break;case`take`:t=Lt(t,e+o);break;case`takeRight`:e=Mt(e,t-o)}}return{start:e,end:t}}function Vo(e){var t=e.match(ke);return t?t[1].split(Ae):[]}function Ho(e,t,n){t=Ma(t,e);for(var r=-1,i=t.length,a=!1;++r<i;){var o=ys(t[r]);if(!(a=e!=null&&n(e,o)))break;e=e[o]}return a||++r!=i?a:(i=e==null?0:e.length,!!i&&uu(i)&&Jo(o,i)&&(J(e)||Yl(e)))}function Uo(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]==`string`&&nt.call(e,`index`)&&(n.index=e.index,n.input=e.input),n}function Wo(e){return typeof e.constructor==`function`&&!ts(e)?pr(pt(e)):{}}function Go(e,t,n){var r=e.constructor;switch(t){case H:return La(e);case E:case D:return new r(+e);case re:return Ra(e,n);case ie:case U:case ae:case oe:case se:case ce:case le:case ue:case de:return Va(e,n);case M:return new r;case N:case B:return new r(e);case R:return za(e);case z:return new r;case V:return Ba(e)}}function Ko(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?`& `:``)+t[r],t=t.join(n>2?`, `:` `),e.replace(Oe,`{
/* [wrapped with `+t+`] */
`)}function qo(e){return J(e)||Yl(e)||!!(_t&&e&&e[_t])}function Jo(e,t){var n=typeof e;return t??=g,!!t&&(n==`number`||n!=`symbol`&&Be.test(e))&&e>-1&&e%1==0&&e<t}function Yo(e,t,n){if(!du(n))return!1;var r=typeof t;return(r==`number`?Zl(n)&&Jo(t,n.length):r==`string`&&t in n)?Kl(n[t],e):!1}function Xo(e,t){if(J(e))return!1;var n=typeof e;return n==`number`||n==`symbol`||n==`boolean`||e==null||Eu(e)?!0:Se.test(e)||!xe.test(e)||t!=null&&e in qe(t)}function Zo(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function Qo(e){var t=jo(e),n=K[t];if(typeof n!=`function`||!(t in gr.prototype))return!1;if(e===n)return!0;var r=Ao(n);return!!r&&e===r[0]}function $o(e){return!!it&&it in e}var es=et?cu:If;function ts(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||$e)}function ns(e){return e===e&&!du(e)}function rs(e,t){return function(r){return r!=null&&r[e]===t&&(t!==n||e in qe(r))}}function is(e){var t=Ol(e,function(e){return n.size===500&&n.clear(),e}),n=t.cache;return t}function as(e,t){var n=e[1],r=t[1],i=n|r,l=i<(o|s|f),u=r==f&&n==c||r==f&&n==p&&e[7].length<=t[8]||r==(f|p)&&t[7].length<=t[8]&&n==c;if(!(l||u))return e;r&o&&(e[2]=t[2],i|=n&o?0:4);var d=t[3];if(d){var m=e[3];e[3]=m?Wa(m,d,t[4]):d,e[4]=m?Yn(e[3],a):t[4]}return d=t[5],d&&(m=e[5],e[5]=m?Ga(m,d,t[6]):d,e[6]=m?Yn(e[5],a):t[6]),d=t[7],d&&(e[7]=d),r&f&&(e[8]=e[8]==null?t[8]:Lt(e[8],t[8])),e[9]??=t[9],e[0]=t[0],e[1]=i,e}function os(e){var t=[];if(e!=null)for(var n in qe(e))t.push(n);return t}function ss(e){return at.call(e)}function cs(e,t,r){return t=Mt(t===n?e.length-1:t,0),function(){for(var n=arguments,i=-1,a=Mt(n.length-t,0),o=De(a);++i<a;)o[i]=n[t+i];i=-1;for(var s=De(t+1);++i<t;)s[i]=n[i];return s[t]=r(o),rn(e,this,s)}}function ls(e,t){return t.length<2?e:Ci(e,ga(t,0,-1))}function us(e,t){for(var r=e.length,i=Lt(t.length,r),a=Ka(e);i--;){var o=t[i];e[i]=Jo(o,r)?a[o]:n}return e}function ds(e,t){if((t!==`constructor`||typeof e[t]!=`function`)&&t!=`__proto__`)return e[t]}var fs=gs(pa),ps=St||function(e,t){return Gt.setTimeout(e,t)},ms=gs(ma);function hs(e,t,n){var r=t+``;return ms(e,Ko(r,xs(Vo(r),n)))}function gs(e){var t=0,r=0;return function(){var i=Rt(),a=16-(i-r);if(r=i,a>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(n,arguments)}}function _s(e,t){var r=-1,i=e.length,a=i-1;for(t=t===n?i:t;++r<t;){var o=oa(r,a),s=e[o];e[o]=e[r],e[r]=s}return e.length=t,e}var vs=is(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(Ce,function(e,n,r,i){t.push(r?i.replace(Ne,`$1`):n||e)}),t});function ys(e){if(typeof e==`string`||Eu(e))return e;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function bs(e){if(e!=null){try{return tt.call(e)}catch{}try{return e+``}catch{}}return``}function xs(e,t){return on(S,function(n){var r=`_.`+n[0];t&n[1]&&!un(e,r)&&e.push(r)}),e.sort()}function Ss(e){if(e instanceof gr)return e.clone();var t=new hr(e.__wrapped__,e.__chain__);return t.__actions__=Ka(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function Cs(e,t,r){t=(r?Yo(e,t,r):t===n)?1:Mt(Fu(t),0);var i=e==null?0:e.length;if(!i||t<1)return[];for(var a=0,o=0,s=De(Ct(i/t));a<i;)s[o++]=ga(e,a,a+=t);return s}function ws(e){for(var t=-1,n=e==null?0:e.length,r=0,i=[];++t<n;){var a=e[t];a&&(i[r++]=a)}return i}function Ts(){var e=arguments.length;if(!e)return[];for(var t=De(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return pn(J(n)?Ka(n):[n],_i(t,1))}var Es=la(function(e,t){return Ql(e)?ui(e,_i(t,1,Ql,!0)):[]}),Ds=la(function(e,t){var r=qs(t);return Ql(r)&&(r=n),Ql(e)?ui(e,_i(t,1,Ql,!0),q(r,2)):[]}),Os=la(function(e,t){var r=qs(t);return Ql(r)&&(r=n),Ql(e)?ui(e,_i(t,1,Ql,!0),n,r):[]});function ks(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:Fu(t),ga(e,t<0?0:t,i)):[]}function As(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:Fu(t),t=i-t,ga(e,0,t<0?0:t)):[]}function js(e,t){return e&&e.length?Ea(e,q(t,3),!0,!0):[]}function Ms(e,t){return e&&e.length?Ea(e,q(t,3),!0):[]}function Ns(e,t,n,r){var i=e==null?0:e.length;return i?(n&&typeof n!=`number`&&Yo(e,t,n)&&(n=0,r=i),hi(e,t,n,r)):[]}function Ps(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=n==null?0:Fu(n);return i<0&&(i=Mt(r+i,0)),xn(e,q(t,3),i)}function Fs(e,t,r){var i=e==null?0:e.length;if(!i)return-1;var a=i-1;return r!==n&&(a=Fu(r),a=r<0?Mt(i+a,0):Lt(a,i-1)),xn(e,q(t,3),a,!0)}function Is(e){return e!=null&&e.length?_i(e,1):[]}function Ls(e){return e!=null&&e.length?_i(e,h):[]}function Rs(e,t){return e!=null&&e.length?(t=t===n?1:Fu(t),_i(e,t)):[]}function zs(e){for(var t=-1,n=e==null?0:e.length,r={};++t<n;){var i=e[t];ri(r,i[0],i[1])}return r}function Bs(e){return e&&e.length?e[0]:n}function Vs(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=n==null?0:Fu(n);return i<0&&(i=Mt(r+i,0)),Sn(e,t,i)}function Hs(e){return e!=null&&e.length?ga(e,0,-1):[]}var Us=la(function(e){var t=fn(e,Aa);return t.length&&t[0]===e[0]?Ai(t):[]}),Ws=la(function(e){var t=qs(e),r=fn(e,Aa);return t===qs(r)?t=n:r.pop(),r.length&&r[0]===e[0]?Ai(r,q(t,2)):[]}),Gs=la(function(e){var t=qs(e),r=fn(e,Aa);return t=typeof t==`function`?t:n,t&&r.pop(),r.length&&r[0]===e[0]?Ai(r,n,t):[]});function Ks(e,t){return e==null?``:At.call(e,t)}function qs(e){var t=e==null?0:e.length;return t?e[t-1]:n}function Js(e,t,r){var i=e==null?0:e.length;if(!i)return-1;var a=i;return r!==n&&(a=Fu(r),a=a<0?Mt(i+a,0):Lt(a,i-1)),t===t?$n(e,t,a):xn(e,wn,a,!0)}function Ys(e,t){return e&&e.length?$i(e,Fu(t)):n}var Xs=la(Zs);function Zs(e,t){return e&&e.length&&t&&t.length?ia(e,t):e}function Qs(e,t,n){return e&&e.length&&t&&t.length?ia(e,t,q(n,2)):e}function $s(e,t,r){return e&&e.length&&t&&t.length?ia(e,t,n,r):e}var ec=Do(function(e,t){var n=e==null?0:e.length,r=ii(e,t);return aa(e,fn(t,function(e){return Jo(e,n)?+e:e}).sort(Ha)),r});function tc(e,t){var n=[];if(!(e&&e.length))return n;var r=-1,i=[],a=e.length;for(t=q(t,3);++r<a;){var o=e[r];t(o,r,e)&&(n.push(o),i.push(r))}return aa(e,i),n}function nc(e){return e==null?e:Ut.call(e)}function rc(e,t,r){var i=e==null?0:e.length;return i?(r&&typeof r!=`number`&&Yo(e,t,r)?(t=0,r=i):(t=t==null?0:Fu(t),r=r===n?i:Fu(r)),ga(e,t,r)):[]}function ic(e,t){return va(e,t)}function ac(e,t,n){return ya(e,t,q(n,2))}function oc(e,t){var n=e==null?0:e.length;if(n){var r=va(e,t);if(r<n&&Kl(e[r],t))return r}return-1}function sc(e,t){return va(e,t,!0)}function cc(e,t,n){return ya(e,t,q(n,2),!0)}function lc(e,t){if(e!=null&&e.length){var n=va(e,t,!0)-1;if(Kl(e[n],t))return n}return-1}function uc(e){return e&&e.length?ba(e):[]}function dc(e,t){return e&&e.length?ba(e,q(t,2)):[]}function fc(e){var t=e==null?0:e.length;return t?ga(e,1,t):[]}function pc(e,t,r){return e&&e.length?(t=r||t===n?1:Fu(t),ga(e,0,t<0?0:t)):[]}function mc(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:Fu(t),t=i-t,ga(e,t<0?0:t,i)):[]}function hc(e,t){return e&&e.length?Ea(e,q(t,3),!1,!0):[]}function gc(e,t){return e&&e.length?Ea(e,q(t,3)):[]}var _c=la(function(e){return Ca(_i(e,1,Ql,!0))}),vc=la(function(e){var t=qs(e);return Ql(t)&&(t=n),Ca(_i(e,1,Ql,!0),q(t,2))}),yc=la(function(e){var t=qs(e);return t=typeof t==`function`?t:n,Ca(_i(e,1,Ql,!0),n,t)});function bc(e){return e&&e.length?Ca(e):[]}function xc(e,t){return e&&e.length?Ca(e,q(t,2)):[]}function Sc(e,t){return t=typeof t==`function`?t:n,e&&e.length?Ca(e,n,t):[]}function Cc(e){if(!(e&&e.length))return[];var t=0;return e=ln(e,function(e){if(Ql(e))return t=Mt(e.length,t),!0}),jn(t,function(t){return fn(e,En(t))})}function wc(e,t){if(!(e&&e.length))return[];var r=Cc(e);return t==null?r:fn(r,function(e){return rn(t,n,e)})}var Tc=la(function(e,t){return Ql(e)?ui(e,t):[]}),Ec=la(function(e){return Oa(ln(e,Ql))}),Dc=la(function(e){var t=qs(e);return Ql(t)&&(t=n),Oa(ln(e,Ql),q(t,2))}),Oc=la(function(e){var t=qs(e);return t=typeof t==`function`?t:n,Oa(ln(e,Ql),n,t)}),kc=la(Cc);function Ac(e,t){return ka(e||[],t||[],Qr)}function jc(e,t){return ka(e||[],t||[],fa)}var Mc=la(function(e){var t=e.length,r=t>1?e[t-1]:n;return r=typeof r==`function`?(e.pop(),r):n,wc(e,r)});function Nc(e){var t=K(e);return t.__chain__=!0,t}function Pc(e,t){return t(e),e}function Fc(e,t){return t(e)}var Ic=Do(function(e){var t=e.length,r=t?e[0]:0,i=this.__wrapped__,a=function(t){return ii(t,e)};return t>1||this.__actions__.length||!(i instanceof gr)||!Jo(r)?this.thru(a):(i=i.slice(r,+r+ +!!t),i.__actions__.push({func:Fc,args:[a],thisArg:n}),new hr(i,this.__chain__).thru(function(e){return t&&!e.length&&e.push(n),e}))});function Lc(){return Nc(this)}function Rc(){return new hr(this.value(),this.__chain__)}function zc(){this.__values__===n&&(this.__values__=Nu(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?n:this.__values__[this.__index__++]}}function Bc(){return this}function Vc(e){for(var t,r=this;r instanceof mr;){var i=Ss(r);i.__index__=0,i.__values__=n,t?a.__wrapped__=i:t=i;var a=i;r=r.__wrapped__}return a.__wrapped__=e,t}function Hc(){var e=this.__wrapped__;if(e instanceof gr){var t=e;return this.__actions__.length&&(t=new gr(this)),t=t.reverse(),t.__actions__.push({func:Fc,args:[nc],thisArg:n}),new hr(t,this.__chain__)}return this.thru(nc)}function Uc(){return Da(this.__wrapped__,this.__actions__)}var Wc=Xa(function(e,t,n){nt.call(e,n)?++e[n]:ri(e,n,1)});function Gc(e,t,r){var i=J(e)?cn:pi;return r&&Yo(e,t,r)&&(t=n),i(e,q(t,3))}function Kc(e,t){return(J(e)?ln:gi)(e,q(t,3))}var qc=ao(Ps),Jc=ao(Fs);function Yc(e,t){return _i(il(e,t),1)}function Xc(e,t){return _i(il(e,t),h)}function Zc(e,t,r){return r=r===n?1:Fu(r),_i(il(e,t),r)}function Qc(e,t){return(J(e)?on:di)(e,q(t,3))}function $c(e,t){return(J(e)?sn:fi)(e,q(t,3))}var el=Xa(function(e,t,n){nt.call(e,n)?e[n].push(t):ri(e,n,[t])});function tl(e,t,n,r){e=Zl(e)?e:Od(e),n=n&&!r?Fu(n):0;var i=e.length;return n<0&&(n=Mt(i+n,0)),Tu(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Sn(e,t,n)>-1}var nl=la(function(e,t,n){var r=-1,i=typeof t==`function`,a=Zl(e)?De(e.length):[];return di(e,function(e){a[++r]=i?rn(t,e,n):Mi(e,t,n)}),a}),rl=Xa(function(e,t,n){ri(e,n,t)});function il(e,t){return(J(e)?fn:Ji)(e,q(t,3))}function al(e,t,r,i){return e==null?[]:(J(t)||(t=t==null?[]:[t]),r=i?n:r,J(r)||(r=r==null?[]:[r]),ea(e,t,r))}var ol=Xa(function(e,t,n){e[+!n].push(t)},function(){return[[],[]]});function sl(e,t,n){var r=J(e)?mn:On,i=arguments.length<3;return r(e,q(t,4),n,i,di)}function cl(e,t,n){var r=J(e)?hn:On,i=arguments.length<3;return r(e,q(t,4),n,i,fi)}function ll(e,t){return(J(e)?ln:gi)(e,kl(q(t,3)))}function ul(e){return(J(e)?Jr:ua)(e)}function dl(e,t,r){return t=(r?Yo(e,t,r):t===n)?1:Fu(t),(J(e)?Yr:da)(e,t)}function fl(e){return(J(e)?Xr:ha)(e)}function pl(e){if(e==null)return 0;if(Zl(e))return Tu(e)?er(e):e.length;var t=zo(e);return t==M||t==z?e.size:Gi(e).length}function ml(e,t,r){var i=J(e)?gn:_a;return r&&Yo(e,t,r)&&(t=n),i(e,q(t,3))}var hl=la(function(e,t){if(e==null)return[];var n=t.length;return n>1&&Yo(e,t[0],t[1])?t=[]:n>2&&Yo(t[0],t[1],t[2])&&(t=[t[0]]),ea(e,_i(t,1),[])}),gl=xt||function(){return Gt.Date.now()};function _l(e,t){if(typeof t!=`function`)throw new Xe(r);return e=Fu(e),function(){if(--e<1)return t.apply(this,arguments)}}function vl(e,t,r){return t=r?n:t,t=e&&t==null?e.length:t,bo(e,f,n,n,n,n,t)}function yl(e,t){var i;if(typeof t!=`function`)throw new Xe(r);return e=Fu(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=n),i}}var bl=la(function(e,t,n){var r=o;if(n.length){var i=Yn(n,Mo(bl));r|=u}return bo(e,r,t,n,i)}),xl=la(function(e,t,n){var r=o|s;if(n.length){var i=Yn(n,Mo(xl));r|=u}return bo(t,r,e,n,i)});function Sl(e,t,r){t=r?n:t;var i=bo(e,c,n,n,n,n,n,t);return i.placeholder=Sl.placeholder,i}function Cl(e,t,r){t=r?n:t;var i=bo(e,l,n,n,n,n,n,t);return i.placeholder=Cl.placeholder,i}function wl(e,t,i){var a,o,s,c,l,u,d=0,f=!1,p=!1,m=!0;if(typeof e!=`function`)throw new Xe(r);t=Lu(t)||0,du(i)&&(f=!!i.leading,p=`maxWait`in i,s=p?Mt(Lu(i.maxWait)||0,t):s,m=`trailing`in i?!!i.trailing:m);function h(t){var r=a,i=o;return a=o=n,d=t,c=e.apply(i,r),c}function g(e){return d=e,l=ps(y,t),f?h(e):c}function _(e){var n=e-u,r=e-d,i=t-n;return p?Lt(i,s-r):i}function v(e){var r=e-u,i=e-d;return u===n||r>=t||r<0||p&&i>=s}function y(){var e=gl();if(v(e))return b(e);l=ps(y,_(e))}function b(e){return l=n,m&&a?h(e):(a=o=n,c)}function x(){l!==n&&Fa(l),d=0,a=u=o=l=n}function S(){return l===n?c:b(gl())}function C(){var e=gl(),r=v(e);if(a=arguments,o=this,u=e,r){if(l===n)return g(u);if(p)return Fa(l),l=ps(y,t),h(u)}return l===n&&(l=ps(y,t)),c}return C.cancel=x,C.flush=S,C}var Tl=la(function(e,t){return li(e,1,t)}),El=la(function(e,t,n){return li(e,Lu(t)||0,n)});function Dl(e){return bo(e,m)}function Ol(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw new Xe(r);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Ol.Cache||Mr),n}Ol.Cache=Mr;function kl(e){if(typeof e!=`function`)throw new Xe(r);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function Al(e){return yl(2,e)}var jl=Na(function(e,t){t=t.length==1&&J(t[0])?fn(t[0],Pn(q())):fn(_i(t,1),Pn(q()));var n=t.length;return la(function(r){for(var i=-1,a=Lt(r.length,n);++i<a;)r[i]=t[i].call(this,r[i]);return rn(e,this,r)})}),Ml=la(function(e,t){return bo(e,u,n,t,Yn(t,Mo(Ml)))}),Nl=la(function(e,t){return bo(e,d,n,t,Yn(t,Mo(Nl)))}),Pl=Do(function(e,t){return bo(e,p,n,n,n,t)});function Fl(e,t){if(typeof e!=`function`)throw new Xe(r);return t=t===n?t:Fu(t),la(e,t)}function Il(e,t){if(typeof e!=`function`)throw new Xe(r);return t=t==null?0:Mt(Fu(t),0),la(function(n){var r=n[t],i=Pa(n,0,t);return r&&pn(i,r),rn(e,this,i)})}function Ll(e,t,n){var i=!0,a=!0;if(typeof e!=`function`)throw new Xe(r);return du(n)&&(i=`leading`in n?!!n.leading:i,a=`trailing`in n?!!n.trailing:a),wl(e,t,{leading:i,maxWait:t,trailing:a})}function Rl(e){return vl(e,1)}function zl(e,t){return Ml(ja(t),e)}function Bl(){if(!arguments.length)return[];var e=arguments[0];return J(e)?e:[e]}function Vl(e){return oi(e,4)}function Hl(e,t){return t=typeof t==`function`?t:n,oi(e,4,t)}function Ul(e){return oi(e,5)}function Wl(e,t){return t=typeof t==`function`?t:n,oi(e,5,t)}function Gl(e,t){return t==null||ci(e,t,ld(t))}function Kl(e,t){return e===t||e!==e&&t!==t}var ql=ho(Ei),Jl=ho(function(e,t){return e>=t}),Yl=Ni(function(){return arguments}())?Ni:function(e){return fu(e)&&nt.call(e,`callee`)&&!ht.call(e,`callee`)},J=De.isArray,Xl=Zt?Pn(Zt):Pi;function Zl(e){return e!=null&&uu(e.length)&&!cu(e)}function Ql(e){return fu(e)&&Zl(e)}function $l(e){return e===!0||e===!1||fu(e)&&Ti(e)==E}var eu=Et||If,tu=Qt?Pn(Qt):Fi;function nu(e){return fu(e)&&e.nodeType===1&&!xu(e)}function ru(e){if(e==null)return!0;if(Zl(e)&&(J(e)||typeof e==`string`||typeof e.splice==`function`||eu(e)||Du(e)||Yl(e)))return!e.length;var t=zo(e);if(t==M||t==z)return!e.size;if(ts(e))return!Gi(e).length;for(var n in e)if(nt.call(e,n))return!1;return!0}function iu(e,t){return Ii(e,t)}function au(e,t,r){r=typeof r==`function`?r:n;var i=r?r(e,t):n;return i===n?Ii(e,t,n,r):!!i}function ou(e){if(!fu(e))return!1;var t=Ti(e);return t==k||t==O||typeof e.message==`string`&&typeof e.name==`string`&&!xu(e)}function su(e){return typeof e==`number`&&kt(e)}function cu(e){if(!du(e))return!1;var t=Ti(e);return t==A||t==j||t==T||t==L}function lu(e){return typeof e==`number`&&e==Fu(e)}function uu(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=g}function du(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}function fu(e){return typeof e==`object`&&!!e}var pu=$t?Pn($t):Ri;function mu(e,t){return e===t||zi(e,t,Po(t))}function hu(e,t,r){return r=typeof r==`function`?r:n,zi(e,t,Po(t),r)}function gu(e){return bu(e)&&e!=+e}function _u(e){if(es(e))throw new We(`Unsupported core-js use. Try https://npms.io/search?q=ponyfill.`);return Bi(e)}function vu(e){return e===null}function yu(e){return e==null}function bu(e){return typeof e==`number`||fu(e)&&Ti(e)==N}function xu(e){if(!fu(e)||Ti(e)!=F)return!1;var t=pt(e);if(t===null)return!0;var n=nt.call(t,`constructor`)&&t.constructor;return typeof n==`function`&&n instanceof n&&tt.call(n)==ot}var Su=en?Pn(en):Vi;function Cu(e){return lu(e)&&e>=-g&&e<=g}var wu=tn?Pn(tn):Hi;function Tu(e){return typeof e==`string`||!J(e)&&fu(e)&&Ti(e)==B}function Eu(e){return typeof e==`symbol`||fu(e)&&Ti(e)==V}var Du=nn?Pn(nn):Ui;function Ou(e){return e===n}function ku(e){return fu(e)&&zo(e)==te}function Au(e){return fu(e)&&Ti(e)==ne}var ju=ho(qi),Mu=ho(function(e,t){return e<=t});function Nu(e){if(!e)return[];if(Zl(e))return Tu(e)?tr(e):Ka(e);if(vt&&e[vt])return Kn(e[vt]());var t=zo(e);return(t==M?qn:t==z?Xn:Od)(e)}function Pu(e){return e?(e=Lu(e),e===h||e===-1/0?(e<0?-1:1)*_:e===e?e:0):e===0?e:0}function Fu(e){var t=Pu(e),n=t%1;return t===t?n?t-n:t:0}function Iu(e){return e?ai(Fu(e),0,y):0}function Lu(e){if(typeof e==`number`)return e;if(Eu(e))return v;if(du(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=du(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=Nn(e);var n=Le.test(e);return n||ze.test(e)?Ht(e.slice(2),n?2:8):Ie.test(e)?v:+e}function Ru(e){return qa(e,ud(e))}function zu(e){return e?ai(Fu(e),-g,g):e===0?e:0}function Bu(e){return e==null?``:Sa(e)}var Vu=Za(function(e,t){if(ts(t)||Zl(t)){qa(t,ld(t),e);return}for(var n in t)nt.call(t,n)&&Qr(e,n,t[n])}),Hu=Za(function(e,t){qa(t,ud(t),e)}),Uu=Za(function(e,t,n,r){qa(t,ud(t),e,r)}),Wu=Za(function(e,t,n,r){qa(t,ld(t),e,r)}),Gu=Do(ii);function Ku(e,t){var n=pr(e);return t==null?n:ti(n,t)}var qu=la(function(e,t){e=qe(e);var r=-1,i=t.length,a=i>2?t[2]:n;for(a&&Yo(t[0],t[1],a)&&(i=1);++r<i;)for(var o=t[r],s=ud(o),c=-1,l=s.length;++c<l;){var u=s[c],d=e[u];(d===n||Kl(d,$e[u])&&!nt.call(e,u))&&(e[u]=o[u])}return e}),Ju=la(function(e){return e.push(n,So),rn(md,n,e)});function Yu(e,t){return bn(e,q(t,3),bi)}function Xu(e,t){return bn(e,q(t,3),xi)}function Zu(e,t){return e==null?e:vi(e,q(t,3),ud)}function Qu(e,t){return e==null?e:yi(e,q(t,3),ud)}function $u(e,t){return e&&bi(e,q(t,3))}function ed(e,t){return e&&xi(e,q(t,3))}function td(e){return e==null?[]:Si(e,ld(e))}function nd(e){return e==null?[]:Si(e,ud(e))}function rd(e,t,r){var i=e==null?n:Ci(e,t);return i===n?r:i}function id(e,t){return e!=null&&Ho(e,t,Di)}function ad(e,t){return e!=null&&Ho(e,t,Oi)}var od=co(function(e,t,n){t!=null&&typeof t.toString!=`function`&&(t=at.call(t)),e[t]=n},mf(vf)),sd=co(function(e,t,n){t!=null&&typeof t.toString!=`function`&&(t=at.call(t)),nt.call(e,t)?e[t].push(n):e[t]=[n]},q),cd=la(Mi);function ld(e){return Zl(e)?qr(e):Gi(e)}function ud(e){return Zl(e)?qr(e,!0):Ki(e)}function dd(e,t){var n={};return t=q(t,3),bi(e,function(e,r,i){ri(n,t(e,r,i),e)}),n}function fd(e,t){var n={};return t=q(t,3),bi(e,function(e,r,i){ri(n,r,t(e,r,i))}),n}var pd=Za(function(e,t,n){Zi(e,t,n)}),md=Za(function(e,t,n,r){Zi(e,t,n,r)}),hd=Do(function(e,t){var n={};if(e==null)return n;var r=!1;t=fn(t,function(t){return t=Ma(t,e),r||=t.length>1,t}),qa(e,ko(e),n),r&&(n=oi(n,7,Co));for(var i=t.length;i--;)wa(n,t[i]);return n});function gd(e,t){return vd(e,kl(q(t)))}var _d=Do(function(e,t){return e==null?{}:ta(e,t)});function vd(e,t){if(e==null)return{};var n=fn(ko(e),function(e){return[e]});return t=q(t),na(e,n,function(e,n){return t(e,n[0])})}function yd(e,t,r){t=Ma(t,e);var i=-1,a=t.length;for(a||(a=1,e=n);++i<a;){var o=e==null?n:e[ys(t[i])];o===n&&(i=a,o=r),e=cu(o)?o.call(e):o}return e}function bd(e,t,n){return e==null?e:fa(e,t,n)}function xd(e,t,r,i){return i=typeof i==`function`?i:n,e==null?e:fa(e,t,r,i)}var Sd=yo(ld),Cd=yo(ud);function wd(e,t,n){var r=J(e),i=r||eu(e)||Du(e);if(t=q(t,4),n==null){var a=e&&e.constructor;n=i?r?new a:[]:du(e)&&cu(a)?pr(pt(e)):{}}return(i?on:bi)(e,function(e,r,i){return t(n,e,r,i)}),n}function Td(e,t){return e==null||wa(e,t)}function Ed(e,t,n){return e==null?e:Ta(e,t,ja(n))}function Dd(e,t,r,i){return i=typeof i==`function`?i:n,e==null?e:Ta(e,t,ja(r),i)}function Od(e){return e==null?[]:Fn(e,ld(e))}function kd(e){return e==null?[]:Fn(e,ud(e))}function Ad(e,t,r){return r===n&&(r=t,t=n),r!==n&&(r=Lu(r),r=r===r?r:0),t!==n&&(t=Lu(t),t=t===t?t:0),ai(Lu(e),t,r)}function jd(e,t,r){return t=Pu(t),r===n?(r=t,t=0):r=Pu(r),e=Lu(e),ki(e,t,r)}function Md(e,t,r){if(r&&typeof r!=`boolean`&&Yo(e,t,r)&&(t=r=n),r===n&&(typeof t==`boolean`?(r=t,t=n):typeof e==`boolean`&&(r=e,e=n)),e===n&&t===n?(e=0,t=1):(e=Pu(e),t===n?(t=e,e=0):t=Pu(t)),e>t){var i=e;e=t,t=i}if(r||e%1||t%1){var a=Bt();return Lt(e+a*(t-e+Vt(`1e-`+((a+``).length-1))),t)}return oa(e,t)}var Nd=no(function(e,t,n){return t=t.toLowerCase(),e+(n?Pd(t):t)});function Pd(e){return cf(Bu(e).toLowerCase())}function Fd(e){return e=Bu(e),e&&e.replace(Ve,Bn).replace(Ot,``)}function Id(e,t,r){e=Bu(e),t=Sa(t);var i=e.length;r=r===n?i:ai(Fu(r),0,i);var a=r;return r-=t.length,r>=0&&e.slice(r,a)==t}function Ld(e){return e=Bu(e),e&&ve.test(e)?e.replace(ge,Vn):e}function Rd(e){return e=Bu(e),e&&Te.test(e)?e.replace(we,`\\$&`):e}var zd=no(function(e,t,n){return e+(n?`-`:``)+t.toLowerCase()}),Bd=no(function(e,t,n){return e+(n?` `:``)+t.toLowerCase()}),Vd=to(`toLowerCase`);function Hd(e,t,n){e=Bu(e),t=Fu(t);var r=t?er(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return fo(wt(i),n)+e+fo(Ct(i),n)}function Ud(e,t,n){e=Bu(e),t=Fu(t);var r=t?er(e):0;return t&&r<t?e+fo(t-r,n):e}function Wd(e,t,n){e=Bu(e),t=Fu(t);var r=t?er(e):0;return t&&r<t?fo(t-r,n)+e:e}function Gd(e,t,n){return n||t==null?t=0:t&&=+t,zt(Bu(e).replace(Ee,``),t||0)}function Kd(e,t,r){return t=(r?Yo(e,t,r):t===n)?1:Fu(t),ca(Bu(e),t)}function qd(){var e=arguments,t=Bu(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var Jd=no(function(e,t,n){return e+(n?`_`:``)+t.toLowerCase()});function Yd(e,t,r){return r&&typeof r!=`number`&&Yo(e,t,r)&&(t=r=n),r=r===n?y:r>>>0,r?(e=Bu(e),e&&(typeof t==`string`||t!=null&&!Su(t))&&(t=Sa(t),!t&&Wn(e))?Pa(tr(e),0,r):e.split(t,r)):[]}var Xd=no(function(e,t,n){return e+(n?` `:``)+cf(t)});function Zd(e,t,n){return e=Bu(e),n=n==null?0:ai(Fu(n),0,e.length),t=Sa(t),e.slice(n,n+t.length)==t}function Qd(e,t,r){var i=K.templateSettings;r&&Yo(e,t,r)&&(t=n),e=Bu(e),t=Wu({},t,i,xo);var a=Wu({},t.imports,i.imports,xo),o=ld(a),s=Fn(a,o);on(o,function(e){if(Me.test(e))throw new We("Invalid `imports` option passed into `_.template`")});var c,l,u=0,d=t.interpolate||He,f=`__p += '`,p=Je((t.escape||He).source+`|`+d.source+`|`+(d===be?Pe:He).source+`|`+(t.evaluate||He).source+`|$`,`g`),m=`//# sourceURL=`+(nt.call(t,`sourceURL`)?(t.sourceURL+``).replace(/\s/g,` `):`lodash.templateSources[`+ ++Pt+`]`)+`
`;e.replace(p,function(t,n,r,i,a,o){return r||=i,f+=e.slice(u,o).replace(Ue,Hn),n&&(c=!0,f+=`' +
__e(`+n+`) +
'`),a&&(l=!0,f+=`';
`+a+`;
__p += '`),r&&(f+=`' +
((__t = (`+r+`)) == null ? '' : __t) +
'`),u=o+t.length,t}),f+=`';
`;var h=nt.call(t,`variable`)&&t.variable;if(!h)f=`with (obj) {
`+f+`
}
`;else if(Me.test(h))throw new We("Invalid `variable` option passed into `_.template`");f=(l?f.replace(fe,``):f).replace(pe,`$1`).replace(me,`$1;`),f=`function(`+(h||`obj`)+`) {
`+(h?``:`obj || (obj = {});
`)+`var __t, __p = ''`+(c?`, __e = _.escape`:``)+(l?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+f+`return __p
}`;var g=uf(function(){return Ge(o,m+`return `+f).apply(n,s)});if(g.source=f,ou(g))throw g;return g}function $d(e){return Bu(e).toLowerCase()}function ef(e){return Bu(e).toUpperCase()}function tf(e,t,r){if(e=Bu(e),e&&(r||t===n))return Nn(e);if(!e||!(t=Sa(t)))return e;var i=tr(e),a=tr(t);return Pa(i,Ln(i,a),Rn(i,a)+1).join(``)}function nf(e,t,r){if(e=Bu(e),e&&(r||t===n))return e.slice(0,nr(e)+1);if(!e||!(t=Sa(t)))return e;var i=tr(e);return Pa(i,0,Rn(i,tr(t))+1).join(``)}function rf(e,t,r){if(e=Bu(e),e&&(r||t===n))return e.replace(Ee,``);if(!e||!(t=Sa(t)))return e;var i=tr(e);return Pa(i,Ln(i,tr(t))).join(``)}function af(e,t){var r=30,i=`...`;if(du(t)){var a=`separator`in t?t.separator:a;r=`length`in t?Fu(t.length):r,i=`omission`in t?Sa(t.omission):i}e=Bu(e);var o=e.length;if(Wn(e)){var s=tr(e);o=s.length}if(r>=o)return e;var c=r-er(i);if(c<1)return i;var l=s?Pa(s,0,c).join(``):e.slice(0,c);if(a===n)return l+i;if(s&&(c+=l.length-c),Su(a)){if(e.slice(c).search(a)){var u,d=l;for(a.global||(a=Je(a.source,Bu(Fe.exec(a))+`g`)),a.lastIndex=0;u=a.exec(d);)var f=u.index;l=l.slice(0,f===n?c:f)}}else if(e.indexOf(Sa(a),c)!=c){var p=l.lastIndexOf(a);p>-1&&(l=l.slice(0,p))}return l+i}function of(e){return e=Bu(e),e&&_e.test(e)?e.replace(he,rr):e}var sf=no(function(e,t,n){return e+(n?` `:``)+t.toUpperCase()}),cf=to(`toUpperCase`);function lf(e,t,r){return e=Bu(e),t=r?n:t,t===n?Gn(e)?or(e):yn(e):e.match(t)||[]}var uf=la(function(e,t){try{return rn(e,n,t)}catch(e){return ou(e)?e:new We(e)}}),df=Do(function(e,t){return on(t,function(t){t=ys(t),ri(e,t,bl(e[t],e))}),e});function ff(e){var t=e==null?0:e.length,n=q();return e=t?fn(e,function(e){if(typeof e[1]!=`function`)throw new Xe(r);return[n(e[0]),e[1]]}):[],la(function(n){for(var r=-1;++r<t;){var i=e[r];if(rn(i[0],this,n))return rn(i[1],this,n)}})}function pf(e){return si(oi(e,1))}function mf(e){return function(){return e}}function hf(e,t){return e==null||e!==e?t:e}var gf=oo(),_f=oo(!0);function vf(e){return e}function yf(e){return Wi(typeof e==`function`?e:oi(e,1))}function bf(e){return Yi(oi(e,1))}function xf(e,t){return Xi(e,oi(t,1))}var Sf=la(function(e,t){return function(n){return Mi(n,e,t)}}),Cf=la(function(e,t){return function(n){return Mi(e,n,t)}});function wf(e,t,n){var r=ld(t),i=Si(t,r);n==null&&!(du(t)&&(i.length||!r.length))&&(n=t,t=e,e=this,i=Si(t,ld(t)));var a=!(du(n)&&`chain`in n)||!!n.chain,o=cu(e);return on(i,function(n){var r=t[n];e[n]=r,o&&(e.prototype[n]=function(){var t=this.__chain__;if(a||t){var n=e(this.__wrapped__);return(n.__actions__=Ka(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,pn([this.value()],arguments))})}),e}function Tf(){return Gt._===this&&(Gt._=st),this}function Ef(){}function Df(e){return e=Fu(e),la(function(t){return $i(t,e)})}var Of=uo(fn),kf=uo(cn),Af=uo(gn);function jf(e){return Xo(e)?En(ys(e)):ra(e)}function Mf(e){return function(t){return e==null?n:Ci(e,t)}}var Nf=mo(),Pf=mo(!0);function Ff(){return[]}function If(){return!1}function Lf(){return{}}function Rf(){return``}function zf(){return!0}function Bf(e,t){if(e=Fu(e),e<1||e>g)return[];var n=y,r=Lt(e,y);t=q(t),e-=y;for(var i=jn(r,t);++n<e;)t(n);return i}function Vf(e){return J(e)?fn(e,ys):Eu(e)?[e]:Ka(vs(Bu(e)))}function Hf(e){var t=++rt;return Bu(e)+t}var Uf=lo(function(e,t){return e+t},0),Wf=_o(`ceil`),Gf=lo(function(e,t){return e/t},1),Kf=_o(`floor`);function qf(e){return e&&e.length?mi(e,vf,Ei):n}function Jf(e,t){return e&&e.length?mi(e,q(t,2),Ei):n}function Yf(e){return Tn(e,vf)}function Xf(e,t){return Tn(e,q(t,2))}function Zf(e){return e&&e.length?mi(e,vf,qi):n}function Qf(e,t){return e&&e.length?mi(e,q(t,2),qi):n}var $f=lo(function(e,t){return e*t},1),ep=_o(`round`),tp=lo(function(e,t){return e-t},0);function np(e){return e&&e.length?An(e,vf):0}function rp(e,t){return e&&e.length?An(e,q(t,2)):0}return K.after=_l,K.ary=vl,K.assign=Vu,K.assignIn=Hu,K.assignInWith=Uu,K.assignWith=Wu,K.at=Gu,K.before=yl,K.bind=bl,K.bindAll=df,K.bindKey=xl,K.castArray=Bl,K.chain=Nc,K.chunk=Cs,K.compact=ws,K.concat=Ts,K.cond=ff,K.conforms=pf,K.constant=mf,K.countBy=Wc,K.create=Ku,K.curry=Sl,K.curryRight=Cl,K.debounce=wl,K.defaults=qu,K.defaultsDeep=Ju,K.defer=Tl,K.delay=El,K.difference=Es,K.differenceBy=Ds,K.differenceWith=Os,K.drop=ks,K.dropRight=As,K.dropRightWhile=js,K.dropWhile=Ms,K.fill=Ns,K.filter=Kc,K.flatMap=Yc,K.flatMapDeep=Xc,K.flatMapDepth=Zc,K.flatten=Is,K.flattenDeep=Ls,K.flattenDepth=Rs,K.flip=Dl,K.flow=gf,K.flowRight=_f,K.fromPairs=zs,K.functions=td,K.functionsIn=nd,K.groupBy=el,K.initial=Hs,K.intersection=Us,K.intersectionBy=Ws,K.intersectionWith=Gs,K.invert=od,K.invertBy=sd,K.invokeMap=nl,K.iteratee=yf,K.keyBy=rl,K.keys=ld,K.keysIn=ud,K.map=il,K.mapKeys=dd,K.mapValues=fd,K.matches=bf,K.matchesProperty=xf,K.memoize=Ol,K.merge=pd,K.mergeWith=md,K.method=Sf,K.methodOf=Cf,K.mixin=wf,K.negate=kl,K.nthArg=Df,K.omit=hd,K.omitBy=gd,K.once=Al,K.orderBy=al,K.over=Of,K.overArgs=jl,K.overEvery=kf,K.overSome=Af,K.partial=Ml,K.partialRight=Nl,K.partition=ol,K.pick=_d,K.pickBy=vd,K.property=jf,K.propertyOf=Mf,K.pull=Xs,K.pullAll=Zs,K.pullAllBy=Qs,K.pullAllWith=$s,K.pullAt=ec,K.range=Nf,K.rangeRight=Pf,K.rearg=Pl,K.reject=ll,K.remove=tc,K.rest=Fl,K.reverse=nc,K.sampleSize=dl,K.set=bd,K.setWith=xd,K.shuffle=fl,K.slice=rc,K.sortBy=hl,K.sortedUniq=uc,K.sortedUniqBy=dc,K.split=Yd,K.spread=Il,K.tail=fc,K.take=pc,K.takeRight=mc,K.takeRightWhile=hc,K.takeWhile=gc,K.tap=Pc,K.throttle=Ll,K.thru=Fc,K.toArray=Nu,K.toPairs=Sd,K.toPairsIn=Cd,K.toPath=Vf,K.toPlainObject=Ru,K.transform=wd,K.unary=Rl,K.union=_c,K.unionBy=vc,K.unionWith=yc,K.uniq=bc,K.uniqBy=xc,K.uniqWith=Sc,K.unset=Td,K.unzip=Cc,K.unzipWith=wc,K.update=Ed,K.updateWith=Dd,K.values=Od,K.valuesIn=kd,K.without=Tc,K.words=lf,K.wrap=zl,K.xor=Ec,K.xorBy=Dc,K.xorWith=Oc,K.zip=kc,K.zipObject=Ac,K.zipObjectDeep=jc,K.zipWith=Mc,K.entries=Sd,K.entriesIn=Cd,K.extend=Hu,K.extendWith=Uu,wf(K,K),K.add=Uf,K.attempt=uf,K.camelCase=Nd,K.capitalize=Pd,K.ceil=Wf,K.clamp=Ad,K.clone=Vl,K.cloneDeep=Ul,K.cloneDeepWith=Wl,K.cloneWith=Hl,K.conformsTo=Gl,K.deburr=Fd,K.defaultTo=hf,K.divide=Gf,K.endsWith=Id,K.eq=Kl,K.escape=Ld,K.escapeRegExp=Rd,K.every=Gc,K.find=qc,K.findIndex=Ps,K.findKey=Yu,K.findLast=Jc,K.findLastIndex=Fs,K.findLastKey=Xu,K.floor=Kf,K.forEach=Qc,K.forEachRight=$c,K.forIn=Zu,K.forInRight=Qu,K.forOwn=$u,K.forOwnRight=ed,K.get=rd,K.gt=ql,K.gte=Jl,K.has=id,K.hasIn=ad,K.head=Bs,K.identity=vf,K.includes=tl,K.indexOf=Vs,K.inRange=jd,K.invoke=cd,K.isArguments=Yl,K.isArray=J,K.isArrayBuffer=Xl,K.isArrayLike=Zl,K.isArrayLikeObject=Ql,K.isBoolean=$l,K.isBuffer=eu,K.isDate=tu,K.isElement=nu,K.isEmpty=ru,K.isEqual=iu,K.isEqualWith=au,K.isError=ou,K.isFinite=su,K.isFunction=cu,K.isInteger=lu,K.isLength=uu,K.isMap=pu,K.isMatch=mu,K.isMatchWith=hu,K.isNaN=gu,K.isNative=_u,K.isNil=yu,K.isNull=vu,K.isNumber=bu,K.isObject=du,K.isObjectLike=fu,K.isPlainObject=xu,K.isRegExp=Su,K.isSafeInteger=Cu,K.isSet=wu,K.isString=Tu,K.isSymbol=Eu,K.isTypedArray=Du,K.isUndefined=Ou,K.isWeakMap=ku,K.isWeakSet=Au,K.join=Ks,K.kebabCase=zd,K.last=qs,K.lastIndexOf=Js,K.lowerCase=Bd,K.lowerFirst=Vd,K.lt=ju,K.lte=Mu,K.max=qf,K.maxBy=Jf,K.mean=Yf,K.meanBy=Xf,K.min=Zf,K.minBy=Qf,K.stubArray=Ff,K.stubFalse=If,K.stubObject=Lf,K.stubString=Rf,K.stubTrue=zf,K.multiply=$f,K.nth=Ys,K.noConflict=Tf,K.noop=Ef,K.now=gl,K.pad=Hd,K.padEnd=Ud,K.padStart=Wd,K.parseInt=Gd,K.random=Md,K.reduce=sl,K.reduceRight=cl,K.repeat=Kd,K.replace=qd,K.result=yd,K.round=ep,K.runInContext=e,K.sample=ul,K.size=pl,K.snakeCase=Jd,K.some=ml,K.sortedIndex=ic,K.sortedIndexBy=ac,K.sortedIndexOf=oc,K.sortedLastIndex=sc,K.sortedLastIndexBy=cc,K.sortedLastIndexOf=lc,K.startCase=Xd,K.startsWith=Zd,K.subtract=tp,K.sum=np,K.sumBy=rp,K.template=Qd,K.times=Bf,K.toFinite=Pu,K.toInteger=Fu,K.toLength=Iu,K.toLower=$d,K.toNumber=Lu,K.toSafeInteger=zu,K.toString=Bu,K.toUpper=ef,K.trim=tf,K.trimEnd=nf,K.trimStart=rf,K.truncate=af,K.unescape=of,K.uniqueId=Hf,K.upperCase=sf,K.upperFirst=cf,K.each=Qc,K.eachRight=$c,K.first=Bs,wf(K,function(){var e={};return bi(K,function(t,n){nt.call(K.prototype,n)||(e[n]=t)}),e}(),{chain:!1}),K.VERSION=`4.18.1`,on([`bind`,`bindKey`,`curry`,`curryRight`,`partial`,`partialRight`],function(e){K[e].placeholder=K}),on([`drop`,`take`],function(e,t){gr.prototype[e]=function(r){r=r===n?1:Mt(Fu(r),0);var i=this.__filtered__&&!t?new gr(this):this.clone();return i.__filtered__?i.__takeCount__=Lt(r,i.__takeCount__):i.__views__.push({size:Lt(r,y),type:e+(i.__dir__<0?`Right`:``)}),i},gr.prototype[e+`Right`]=function(t){return this.reverse()[e](t).reverse()}}),on([`filter`,`map`,`takeWhile`],function(e,t){var n=t+1,r=n==1||n==3;gr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:q(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}}),on([`head`,`last`],function(e,t){var n=`take`+(t?`Right`:``);gr.prototype[e]=function(){return this[n](1).value()[0]}}),on([`initial`,`tail`],function(e,t){var n=`drop`+(t?``:`Right`);gr.prototype[e]=function(){return this.__filtered__?new gr(this):this[n](1)}}),gr.prototype.compact=function(){return this.filter(vf)},gr.prototype.find=function(e){return this.filter(e).head()},gr.prototype.findLast=function(e){return this.reverse().find(e)},gr.prototype.invokeMap=la(function(e,t){return typeof e==`function`?new gr(this):this.map(function(n){return Mi(n,e,t)})}),gr.prototype.reject=function(e){return this.filter(kl(q(e)))},gr.prototype.slice=function(e,t){e=Fu(e);var r=this;return r.__filtered__&&(e>0||t<0)?new gr(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==n&&(t=Fu(t),r=t<0?r.dropRight(-t):r.take(t-e)),r)},gr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},gr.prototype.toArray=function(){return this.take(y)},bi(gr.prototype,function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),a=K[i?`take`+(t==`last`?`Right`:``):t],o=i||/^find/.test(t);a&&(K.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,c=t instanceof gr,l=s[0],u=c||J(t),d=function(e){var t=a.apply(K,pn([e],s));return i&&f?t[0]:t};u&&r&&typeof l==`function`&&l.length!=1&&(c=u=!1);var f=this.__chain__,p=!!this.__actions__.length,m=o&&!f,h=c&&!p;if(!o&&u){t=h?t:new gr(this);var g=e.apply(t,s);return g.__actions__.push({func:Fc,args:[d],thisArg:n}),new hr(g,f)}return m&&h?e.apply(this,s):(g=this.thru(d),m?i?g.value()[0]:g.value():g)})}),on([`pop`,`push`,`shift`,`sort`,`splice`,`unshift`],function(e){var t=Ze[e],n=/^(?:push|sort|unshift)$/.test(e)?`tap`:`thru`,r=/^(?:pop|shift)$/.test(e);K.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(J(i)?i:[],e)}return this[n](function(n){return t.apply(J(n)?n:[],e)})}}),bi(gr.prototype,function(e,t){var n=K[t];if(n){var r=n.name+``;nt.call(Dn,r)||(Dn[r]=[]),Dn[r].push({name:t,func:n})}}),Dn[so(n,s).name]=[{name:`wrapper`,func:n}],gr.prototype.clone=_r,gr.prototype.reverse=vr,gr.prototype.value=yr,K.prototype.at=Ic,K.prototype.chain=Lc,K.prototype.commit=Rc,K.prototype.next=zc,K.prototype.plant=Vc,K.prototype.reverse=Hc,K.prototype.toJSON=K.prototype.valueOf=K.prototype.value=Uc,K.prototype.first=K.prototype.head,vt&&(K.prototype[vt]=Bc),K})();typeof define==`function`&&typeof define.amd==`object`&&define.amd?(Gt._=sr,define(function(){return sr})):qt?((qt.exports=sr)._=sr,Kt._=sr):Gt._=sr}).call(e)}));function YN(e){return e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(e=>YN(e)).join(``):eP.isValidElement(e)?YN(e.props.children):``}function XN(e){return`options`in e}function ZN(e){let t=[],n=[],r=new Map,i=(e,{groupKey:i,groupLabel:a}={})=>{if(r.has(e.value))throw Error(`Select options must have unique values. Duplicate value "${e.value}" found.`);let o={key:e.value,value:e.value,label:e.label,textValue:e.textValue??YN(e.label),isDisabled:!!e.isDisabled,...Y({groupKey:i,groupLabel:a})};r.set(o.value,o.key),o.isDisabled&&n.push(o.key),t.push(o)};return e.forEach((e,t)=>{if(XN(e)){let n=`group-${t}`;e.options.forEach(t=>{i(t,{groupKey:n,groupLabel:e.label})});return}i(e)}),{options:t,disabledKeys:n,valueToKey:r}}function QN(e){return(0,tP.jsx)($C,{textValue:e.textValue,children:e.label},e.key)}function $N(e){let t=[],n=new Map;return e.options.forEach(e=>{if(!e.groupKey){t.push(QN(e));return}let r=n.get(e.groupKey)??{label:e.groupLabel??``,items:[]};n.has(e.groupKey)||t.push({groupKey:e.groupKey}),r.items.push(QN(e)),n.set(e.groupKey,r)}),t.map(e=>{if(e==null||!(`groupKey`in e))return e;let t=n.get(e.groupKey);return t?(0,tP.jsx)(rw,{"aria-label":YN(t.label),title:t.label,children:t.items},e.groupKey):null}).filter(e=>e!==null)}var eP,tP;function nP(){return(nP=t((()=>{ew(),iw(),eP=e(r()),tP=G()})))()}function rP(e){return e.current===null||e.current instanceof HTMLUListElement}function iP(e){let{name:t,control:n,rules:r,id:i,label:a,description:o,errorMessage:s,fieldSize:l=`md`,isDisabled:d=!1,isRequired:f=!1,className:p,options:m,placeholder:h,autoComplete:g,onKeyDown:_,onKeyUp:v,searchEnabled:y=!1,searchPlaceholder:b=`search`,"data-testid":x}=e,[S,C]=(0,oP.useState)(``),{contains:w}=Kg({sensitivity:`base`}),{field:T,resolvedError:E,isInvalid:D}=aS({name:t,control:n,rules:r,errorMessage:s}),O=(0,oP.useId)(),k=i??O,A=(0,oP.useRef)(null),j=(0,oP.useRef)(null),M=(0,oP.useRef)(null),N=(0,oP.useRef)(null),P=(0,oP.useRef)(!1),F=(0,oP.useMemo)(()=>ZN(m),[m]),I=$N({...F,options:j.current===document.activeElement?F.options.filter(e=>w(e.textValue,S)):F.options}),L=(0,oP.useMemo)(()=>new Map(F.options.map(e=>[e.key,e])),[F.options]),R=F.valueToKey.get(fS(T.value))??null,z=WN({children:I,disabledKeys:F.disabledKeys,value:R,onSelectionChange:e=>{let t=(e===null?void 0:L.get(String(e)))?.value??``;T.onChange(t)},isDisabled:d,isRequired:f,isInvalid:D,label:a,description:o,errorMessage:E}),B=VN({value:S,onChange:C}),V=RN({}),{inputProps:ee,collectionProps:te,collectionRef:ne}=cr({inputRef:j,collectionRef:N},V),H=(0,aP.omit)(te,[`aria-label`]),re=(0,aP.omit)(H,[`id`]),{triggerProps:ie,valueProps:U,labelProps:ae,menuProps:oe,descriptionProps:se,errorMessageProps:ce,isInvalid:le,validationErrors:ue}=Ey({id:k,disabledKeys:F.disabledKeys,value:R,isDisabled:d,isRequired:f,isInvalid:D,label:a,description:o,errorMessage:E,name:T.name,...re,...Y({autoComplete:g})},z,A),{buttonProps:de}=pt(ie,A),{labelProps:fe,inputProps:pe}=wy({...ee,placeholder:b,"aria-label":b},B,j),me=W(ae,fe),he=e=>{let t=e;A.current?.contains(t)||M.current?.contains(t)||P.current&&(P.current=!1,T.onBlur())},ge=()=>{P.current||=!0},_e=W(de,{onBlur:e=>{he(e.relatedTarget)},onFocus:()=>{ge()},onKeyDown:_,onKeyUp:v}),ve=mM(E,le,ue),ye=L.get(String(z.value)),be=ye===void 0,xe=z.isOpen||ye!==void 0||h!==void 0;return(0,sP.jsxs)(`div`,{className:c(pC,p),children:[(0,sP.jsxs)(`div`,{className:c(mC,cP),"data-field-control":`true`,"data-focused":z.isFocused?`true`:`false`,"data-floated":xe?`true`:`false`,"data-invalid":le?`true`:`false`,"data-placeholder":be?`true`:`false`,children:[(0,sP.jsxs)(`button`,{..._e,id:k,ref:cS(A,T.ref),className:$S(l),type:`button`,"data-testid":x,children:[(0,sP.jsx)(`span`,{...U,"data-select-placeholder":be?`true`:void 0,className:c(lP,be?vC:void 0),children:ye?.label??h??null}),(0,sP.jsx)(`span`,{className:uP,"aria-hidden":`true`,children:(0,sP.jsx)(`span`,{className:Gw})})]}),(0,sP.jsx)(`span`,{...me,className:nC(l),children:a}),z.isOpen?(0,sP.jsx)(uT,{popoverRef:M,state:z,triggerRef:A,surfaceProps:{onBlur:e=>{he(e.relatedTarget)},onFocus:()=>{ge()}},children:(0,sP.jsxs)(ze,{autoFocus:!0,children:[y&&(0,sP.jsxs)(`div`,{className:u`
                    position: relative;
                    padding: 0 6px;
                  `,children:[(0,sP.jsx)(`span`,{className:u`
                      display: inline-block;
                      position: absolute;
                      left: 1rem;
                      top: 1.125rem;
                    `,children:(0,sP.jsx)(xt,{size:16,weight:`bold`})}),(0,sP.jsx)(`input`,{className:dP,...pe,ref:j})]}),rP(ne)&&(0,sP.jsx)(oT,{...W(oe,H),shouldSelectOnPressUp:!1,state:z,listBoxRef:ne})]})}):null]}),ve?(0,sP.jsx)(`p`,{...ce,role:`alert`,className:iC(l,!0),children:ve}):o?(0,sP.jsx)(`p`,{...se,className:iC(l,!1),children:o}):null]})}var aP,oP,sP,cP,lP,uP,dP;function fP(){return(fP=t((()=>{l(),BN(),UN(),qN(),Ct(),aP=JN(),oP=e(r()),O(),ft(),ky(),Ty(),Jg(),ur(),Fe(),oS(),pS(),hM(),nP(),VC(),lT(),hT(),Yw(),sP=G(),cP=u`
  position: relative;
`,lP=u`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: inherit;
`,uP=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  margin-left: var(--space-3);
  color: var(--field-chrome);
`,dP=u`
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
`})))()}function pP(){return(pP=t((()=>{l(),r(),WC(),G(),u`
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
`})))()}function mP(e){let{name:t,control:n,rules:r,id:i,label:a,description:o,errorMessage:s,fieldSize:l=`md`,isDisabled:u=!1,isReadOnly:d=!1,isRequired:f=!1,className:p,switchValue:m,onKeyDown:h,onKeyUp:g,"aria-label":_,"data-testid":v}=e,{field:y,resolvedError:b,isInvalid:x}=aS({name:t,control:n,rules:r,errorMessage:s}),S=!!y.value,C=(0,hP.useId)(),w=i??C,T=(0,hP.useId)(),E=(0,hP.useId)(),D=dS({descriptionId:T,errorMessageId:E,hasDescription:!!o,hasErrorMessage:!!b}),O=(0,hP.useRef)(null),k=Dl({isDisabled:u,isReadOnly:d,isSelected:S,onChange:e=>{y.onChange(e)}}),A=m===void 0?void 0:Array.isArray(m)?m.join(`,`):String(m),{inputProps:j,isDisabled:M,isPressed:N,isSelected:P,labelProps:F}=Ay({children:a,id:w,name:y.name,isDisabled:u,isReadOnly:d,...Y({value:A,"aria-label":_,"aria-describedby":D})},k,O),{focusProps:I,isFocusVisible:L}=$g(),R=W(j,I,{onKeyDown:h,onKeyUp:g,onBlur:e=>{j.onBlur?.(e),y.onBlur()},"aria-invalid":x?vP:void 0,required:f,type:`checkbox`});return(0,gP.jsx)(HC,{className:c(gS,p),description:o,...Ny(o,{descriptionId:T}),errorMessage:b,...Ny(b,{errorMessageId:E}),layout:_P,children:(0,gP.jsxs)(`label`,{...F,className:c(vS,yS,mS(l)),"data-disabled":M?`true`:`false`,children:[(0,gP.jsx)(`input`,{...R,ref:cS(O,y.ref),className:bS,"data-testid":v}),(0,gP.jsx)(`span`,{className:CS,"aria-hidden":`true`,"data-disabled":M?`true`:`false`,"data-focus-visible":L?`true`:`false`,"data-invalid":x?`true`:`false`,"data-pressed":N?`true`:`false`,"data-selected":P?`true`:`false`,children:(0,gP.jsx)(`span`,{className:wS,"data-selected":P?`true`:`false`})}),(0,gP.jsx)(`span`,{className:xS,children:(0,gP.jsx)(`span`,{className:SS,children:a})})]})})}var hP,gP,_P,vP;function yP(){return(yP=t((()=>{l(),kl(),hP=e(r()),O(),t_(),jy(),oS(),pS(),PS(),WC(),gP=G(),_P=`stacked`,vP=`true`})))()}function bP(e,t){let n=e.style.height;e.style.height=`auto`;let r=e.scrollHeight,i=t?Math.min(r,t):r;return e.style.height=`${i}px`,e.style.overflowY=t&&r>t?`auto`:`hidden`,n===e.style.height?null:i}function xP(e){let{name:t,control:n,rules:r,label:i,isLabelHidden:a,description:o,errorMessage:s,fieldSize:l=`md`,iconStart:u,iconEnd:d,isDisabled:f,isReadOnly:p,isRequired:m,autoResize:h=!1,autoResizeMaxHeightPx:g,onAutoResized:_,id:v,autoComplete:y,maxLength:b,minLength:x,placeholder:S,rows:C,className:w,inputRef:T,onKeyDown:E,"data-testid":D}=e,{field:O,resolvedError:k,isInvalid:A}=aS({name:t,control:n,rules:r,errorMessage:s}),j=(0,SP.useId)(),M=v??j,N=(0,SP.useRef)(null),P=O.value===null||O.value===void 0?``:String(O.value),F=gM({defaultValue:void 0,elementRef:N,value:P}),{labelProps:I,inputProps:L,descriptionProps:R,errorMessageProps:z,isInvalid:B,validationErrors:V}=Zl({label:i,description:o,errorMessage:k,id:M,value:P,name:O.name,isInvalid:A,inputElementType:wP,...Y({autoComplete:y,maxLength:b,minLength:x,isDisabled:f,isReadOnly:p,isRequired:m})},N);(0,SP.useEffect)(()=>{if(!h||!N.current)return;let e=bP(N.current,g);e!==null&&_?.(e)},[P,h,g,_]);let ee=W(L,{onChange:e=>{if(O.onChange(e.target.value),h&&N.current){let e=bP(N.current,g);e!==null&&_?.(e)}},onFocus:()=>{F.setIsFocused(!0)},onBlur:()=>{F.setIsFocused(!1),O.onBlur()},placeholder:pM(a?S:void 0),rows:C,onKeyDown:E}),te=mM(k,B,V),ne=My(void 0,ee[`aria-describedby`]),H=ee[`aria-invalid`];return(0,CP.jsxs)(`div`,{className:c(pC,w),children:[(0,CP.jsxs)(`div`,{className:mC,"data-field-control":`true`,"data-multiline":`true`,"data-has-icon-start":u?`true`:void 0,"data-has-icon-end":d?`true`:void 0,"data-focused":F.isFocused?`true`:`false`,"data-filled":F.hasValue?`true`:`false`,"data-floated":F.isFloated?`true`:`false`,"data-invalid":B?`true`:`false`,"data-label-hidden":a?`true`:void 0,children:[(0,CP.jsx)(`textarea`,{...ee,ref:cS(N,O.ref,T),className:ZS(l),"aria-describedby":ne,"aria-invalid":H,"data-testid":D}),a?(0,CP.jsx)(ge,{children:(0,CP.jsx)(`label`,{...I,children:i})}):(0,CP.jsx)(`label`,{...I,className:tC(l),children:i}),u?(0,CP.jsx)(`span`,{className:OC[l],"aria-hidden":`true`,children:u}):null,d?(0,CP.jsx)(`span`,{className:AC[l],"aria-hidden":`true`,children:d}):null]}),te?(0,CP.jsx)(`p`,{...z,role:`alert`,className:iC(l,!0),children:te}):o?(0,CP.jsx)(`p`,{...R,className:iC(l,!1),children:o}):null]})}var SP,CP,wP;function TP(){return(TP=t((()=>{l(),SP=e(r()),O(),$l(),ce(),oS(),hM(),VC(),vM(),CP=G(),wP=`textarea`})))()}function EP(e){let{name:t,control:n,rules:r,label:i,isLabelHidden:a,description:o,errorMessage:s,fieldSize:l=`md`,iconStart:u,iconEnd:d,isDisabled:f,isReadOnly:p,isRequired:m,id:h,type:g=`text`,autoComplete:_,maxLength:v,minLength:y,pattern:b,inputMode:x,placeholder:S,className:C,min:w,max:T,step:E,"data-testid":D}=e,{field:O,resolvedError:k,isInvalid:A}=aS({name:t,control:n,rules:r,errorMessage:s}),j=(0,DP.useRef)(null),M=!!a||fM(i),N=O.value===null||O.value===void 0?``:String(O.value),P=gM({defaultValue:void 0,elementRef:j,value:N}),{labelProps:F,inputProps:I,descriptionProps:L,errorMessageProps:R,isInvalid:z,validationErrors:B}=Zl({label:i,description:o,errorMessage:k,name:O.name,type:g,value:N,isInvalid:A,...Y({id:h,autoComplete:_,maxLength:v,minLength:y,pattern:b,inputMode:x,placeholder:S,isDisabled:f,isReadOnly:p,isRequired:m})},j),V=W(I,{onChange:e=>{g===`number`&&!Number.isNaN(e.target.valueAsNumber)?O.onChange(e.target.valueAsNumber):g===`number`&&e.target.value===``?O.onChange(null):O.onChange(e.target.value)},onFocus:()=>{P.setIsFocused(!0)},onBlur:()=>{P.setIsFocused(!1),O.onBlur()},placeholder:pM(M?S:void 0),min:w,max:T,step:E}),ee=mM(k,z,B),te=My(void 0,V[`aria-describedby`]);return(0,OP.jsxs)(`div`,{className:c(pC,C),children:[(0,OP.jsxs)(`div`,{className:mC,"data-field-control":`true`,"data-has-icon-start":u?`true`:void 0,"data-has-icon-end":d?`true`:void 0,"data-focused":P.isFocused?`true`:`false`,"data-filled":P.hasValue?`true`:`false`,"data-floated":P.isFloated&&!M?`true`:`false`,"data-invalid":z?`true`:`false`,"data-label-hidden":M?`true`:void 0,children:[(0,OP.jsx)(`input`,{...V,ref:cS(j,O.ref),className:YS(l),"aria-describedby":te,"data-testid":D}),M?(0,OP.jsx)(ge,{children:(0,OP.jsx)(`label`,{...F,children:i})}):(0,OP.jsx)(`label`,{...F,className:tC(l),children:i}),u?(0,OP.jsx)(`span`,{className:TC,"aria-hidden":`true`,children:u}):null,d?(0,OP.jsx)(`span`,{className:EC,"aria-hidden":`true`,children:d}):null]}),ee?(0,OP.jsx)(`p`,{...R,role:`alert`,className:iC(l,!0),children:ee}):o?(0,OP.jsx)(`p`,{...L,className:iC(l,!1),children:o}):null]})}var DP,OP;function kP(){return(kP=t((()=>{l(),DP=e(r()),O(),$l(),ce(),oS(),hM(),VC(),vM(),OP=G()})))()}function AP(e){let{name:t,control:n,rules:r,label:i,description:a,errorMessage:o,notice:s,fieldSize:c,iconStart:l,iconEnd:u,isDisabled:d,isReadOnly:f,isRequired:p,id:m,className:h,min:g,max:_,step:v,hourCycle:y,inputRef:b,"data-testid":x}=e,{field:S,resolvedError:C,isInvalid:w}=aS({name:t,control:n,rules:r,errorMessage:o}),T=S.value??``;return(0,jP.jsx)(xj,{ref:S.ref,kind:NP,layout:MP,label:i,description:a,errorMessage:C,notice:s,...Y({fieldSize:c}),iconStart:l,iconEnd:u,...Y({isDisabled:d}),...Y({isReadOnly:f}),...Y({isRequired:p}),isInvalid:w,...Y({id:m}),...Y({className:h}),...Y({min:g}),...Y({max:_}),...Y({step:v}),...Y({hourCycle:y}),...Y({inputRef:b}),"data-testid":x,value:T,onChange:e=>{S.onChange(e.target.value)},onBlur:S.onBlur})}var jP,MP,NP;function PP(){return(PP=t((()=>{r(),oS(),Sj(),jP=G(),MP=`floating`,NP=`time`})))()}var FP;function IP(){return(IP=t((()=>{l(),FP=r(),G(),(0,FP.createContext)(null),u`
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
`})))()}function LP(){return(LP=t((()=>{l(),u`
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
`})))()}function RP(){return(RP=t((()=>{l(),r(),ab(),IP(),LP(),G()})))()}function zP(){return(zP=t((()=>{Ct(),IP(),RP(),G()})))()}function BP(){return(BP=t((()=>{l(),r(),WC(),VC(),hT(),Yw(),wk(),G(),u`
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
`})))()}function VP(e){let t=e.trim().split(/\s+/).filter(Boolean),n=t[0];if(!n)return`?`;if(t.length===1)return n.slice(0,2).toUpperCase();let r=t[t.length-1]??n;return(n.charAt(0)+r.charAt(0)).toUpperCase()}function HP(e){let t=0;for(let n=0;n<e.length;n++)t=(t*31+(e.codePointAt(n)??0))%2147483647;return t}var UP,WP,GP,KP;function qP(){return(qP=t((()=>{l(),r(),UP=G(),WP=[`var(--color-blue-600)`,`var(--color-green-600)`,`var(--color-purple-600)`,`var(--color-crimson-600)`,`var(--color-gray-600)`],GP=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  border-radius: 50%;
  color: var(--color-primary-100);
  font-weight: 700;
  text-transform: uppercase;
  user-select: none;
`,KP=({name:e,size:t=48,className:n,"data-testid":r})=>{let i=u`
    width: ${t}px;
    height: ${t}px;
    background: ${WP[HP(e)%WP.length]};
    font-size: ${Math.round(t*.38)}px;
  `;return(0,UP.jsx)(`span`,{className:c(GP,i,n),"aria-hidden":`true`,"data-testid":r,children:VP(e)})}})))()}var JP,YP,XP,ZP,QP,$P,eF,tF,nF;function rF(){return(rF=t((()=>{l(),JP=e(r()),YP=G(),XP={neutral:u`
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
  `},ZP=u`
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
`,QP=u`
  gap: var(--space-1);
  padding: 0 var(--space-2);
`,$P=u`
  display: inline-flex;
  align-items: center;
  font-size: 0.9em;
`,eF=u`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-self: start;
  gap: var(--space-1);
`,tF=u`
  font-size: var(--font-size-1);
  font-weight: 400;
  color: var(--color-gray-500);
`,nF=({tone:e=`neutral`,size:t=`default`,icon:n,children:r,className:i,title:a,description:o,"data-testid":s})=>{let l=JP.useId(),u=(0,YP.jsxs)(`span`,{className:c(ZP,XP[e],t===`compact`&&QP,!o&&i),title:a,"data-testid":s,...Ny(o,{"aria-describedby":l}),children:[n?(0,YP.jsx)(`span`,{className:$P,"aria-hidden":`true`,children:n}):null,r]});return o?(0,YP.jsxs)(`span`,{className:c(eF,i),children:[u,(0,YP.jsx)(`span`,{id:l,className:tF,children:o})]}):u}})))()}function iF(){return(iF=t((()=>{l(),r(),G(),u`
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
`})))()}function aF(){return(aF=t((()=>{l(),r(),ab(),G(),u`
  display: inline-block;
  &::first-letter {
    text-transform: uppercase;
  }
`})))()}function oF(){return(oF=t((()=>{l(),r(),aF(),G(),u`
  display: flex;
  flex-flow: row wrap;
  gap: 0.25rem;
`,u`
  display: flex;
  flex-flow: column wrap;
  gap: 0.5rem;
`})))()}var sF,cF;function lF(){return(lF=t((()=>{sF=r(),cF=(0,sF.createContext)({})})))()}function uF(e){let t=(0,dF.useRef)(null);return t.current===null&&(t.current=e()),t.current}var dF;function fF(){return(fF=t((()=>{dF=r()})))()}var pF;function mF(){return(mF=t((()=>{pF=typeof window<`u`})))()}var hF,gF;function _F(){return(_F=t((()=>{hF=r(),mF(),gF=pF?hF.useLayoutEffect:hF.useEffect})))()}var vF,yF;function bF(){return(bF=t((()=>{vF=r(),yF=(0,vF.createContext)(null)})))()}function xF(e,t){e.indexOf(t)===-1&&e.push(t)}function SF(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var CF;function wF(){return(wF=t((()=>{CF=(e,t,n)=>n>t?t:n<e?e:n})))()}var TF,EF;function DF(){return(DF=t((()=>{TF=()=>{},EF=()=>{}})))()}var OF;function kF(){return(kF=t((()=>{OF={}})))()}var AF;function jF(){return(jF=t((()=>{AF=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)})))()}var MF;function NF(){return(NF=t((()=>{MF=e=>typeof e==`object`&&!!e})))()}var PF;function FF(){return(FF=t((()=>{PF=e=>/^0[^.\s]+$/u.test(e)})))()}function IF(e){let t;return()=>(t===void 0&&(t=e()),t)}var LF;function RF(){return(RF=t((()=>{LF=e=>e})))()}var zF;function BF(){return(BF=t((()=>{zF=(...e)=>e.reduce((e,t)=>n=>t(e(n)))})))()}var VF;function HF(){return(HF=t((()=>{VF=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1}})))()}var UF;function WF(){return(WF=t((()=>{UF=class{constructor(){this.subscriptions=[]}add(e){return xF(this.subscriptions,e),()=>SF(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}})))()}var GF,KF;function qF(){return(qF=t((()=>{GF=e=>e*1e3,KF=e=>e/1e3})))()}var JF;function YF(){return(YF=t((()=>{JF=(e,t)=>t?1e3/t*e:0})))()}function XF(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=QF(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>$F&&++s<eI);return o}function ZF(e,t,n,r){if(e===t&&n===r)return LF;let i=t=>XF(t,0,1,e,n);return e=>e===0||e===1?e:QF(i(e),t,r)}var QF,$F,eI;function tI(){return(tI=t((()=>{RF(),QF=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,$F=1e-7,eI=12})))()}var nI;function rI(){return(rI=t((()=>{nI=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2})))()}var iI;function aI(){return(aI=t((()=>{iI=e=>t=>1-e(1-t)})))()}var oI,sI,cI;function lI(){return(lI=t((()=>{tI(),rI(),aI(),oI=ZF(.33,1.53,.69,.99),sI=iI(oI),cI=nI(sI)})))()}var uI;function dI(){return(dI=t((()=>{lI(),uI=e=>e>=1?1:(e*=2)<1?.5*sI(e):.5*(2-2**(-10*(e-1)))})))()}var fI,pI,mI;function hI(){return(hI=t((()=>{rI(),aI(),fI=e=>1-Math.sin(Math.acos(e)),pI=iI(fI),mI=nI(fI)})))()}var gI,_I,vI;function yI(){return(yI=t((()=>{tI(),gI=ZF(.42,0,1,1),_I=ZF(0,0,.58,1),vI=ZF(.42,0,.58,1)})))()}var bI;function xI(){return(xI=t((()=>{bI=e=>Array.isArray(e)&&typeof e[0]!=`number`})))()}var SI;function CI(){return(CI=t((()=>{SI=e=>Array.isArray(e)&&typeof e[0]==`number`})))()}var wI,TI,EI;function DI(){return(DI=t((()=>{DF(),RF(),dI(),lI(),hI(),tI(),yI(),CI(),wI={linear:LF,easeIn:gI,easeInOut:vI,easeOut:_I,circIn:fI,circInOut:mI,circOut:pI,backIn:sI,backInOut:cI,backOut:oI,anticipate:uI},TI=e=>typeof e==`string`,EI=e=>{if(SI(e)){EF(e.length===4,`Cubic bezier arrays must contain four numerical values.`,`cubic-bezier-length`);let[t,n,r,i]=e;return ZF(t,n,r,i)}return TI(e)?(EF(wI[e]!==void 0,`Invalid easing type '${e}'`,`invalid-easing-type`),wI[e]):e}})))()}var OI;function kI(){return(kI=t((()=>{OI=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`]})))()}function AI(e){let t=new Set,n=new Set,r=!1,i=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(c.schedule(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}function jI(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=OI.reduce((e,t)=>(e[t]=AI(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=OF.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,MI),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:OI.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<OI.length;t++)o[OI[t]].cancel(e)},state:i,steps:o}}var MI;function NI(){return(NI=t((()=>{kF(),kI(),MI=40})))()}var PI,FI,II,LI;function RI(){return(RI=t((()=>{RF(),NI(),{schedule:PI,cancel:FI,state:II,steps:LI}=jI(typeof requestAnimationFrame<`u`?requestAnimationFrame:LF,!0)})))()}function zI(){BI=void 0}var BI,VI;function HI(){return(HI=t((()=>{kF(),RI(),VI={now:()=>(BI===void 0&&VI.set(II.isProcessing||OF.useManualTiming?II.timestamp:performance.now()),BI),set:e=>{BI=e,queueMicrotask(zI)}}})))()}function UI(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var WI,GI,KI,qI,JI;function YI(){return(YI=t((()=>{WI=e=>t=>typeof t==`string`&&t.startsWith(e),GI=WI(`--`),KI=WI(`var(--`),qI=e=>KI(e)?JI.test(e.split(`/*`)[0].trim()):!1,JI=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu})))()}var XI,ZI,QI;function $I(){return($I=t((()=>{wF(),XI={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},ZI={...XI,transform:e=>CF(0,1,e)},QI={...XI,default:1}})))()}var eL;function tL(){return(tL=t((()=>{eL=e=>Math.round(e*1e5)/1e5})))()}var nL;function rL(){return(rL=t((()=>{nL=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu})))()}function iL(e){return e==null}var aL;function oL(){return(oL=t((()=>{aL=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu})))()}var sL,cL;function lL(){return(lL=t((()=>{rL(),oL(),sL=(e,t)=>n=>!!(typeof n==`string`&&aL.test(n)&&n.startsWith(e)||t&&!iL(n)&&Object.prototype.hasOwnProperty.call(n,t)),cL=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(nL);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}}})))()}var uL,dL,fL;function pL(){return(pL=t((()=>{wF(),$I(),tL(),lL(),uL=e=>CF(0,255,e),dL={...XI,transform:e=>Math.round(uL(e))},fL={test:sL(`rgb`,`red`),parse:cL(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+dL.transform(e)+`, `+dL.transform(t)+`, `+dL.transform(n)+`, `+eL(ZI.transform(r))+`)`}})))()}function mL(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var hL;function gL(){return(gL=t((()=>{pL(),lL(),hL={test:sL(`#`),parse:mL,transform:fL.transform}})))()}var _L,vL,yL,Q,bL,xL,SL;function CL(){return(CL=t((()=>{_L=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),vL=_L(`deg`),yL=_L(`%`),Q=_L(`px`),bL=_L(`vh`),xL=_L(`vw`),SL={...yL,parse:e=>yL.parse(e)/100,transform:e=>yL.transform(e*100)}})))()}var wL;function TL(){return(TL=t((()=>{$I(),CL(),tL(),lL(),wL={test:sL(`hsl`,`hue`),parse:cL(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+yL.transform(eL(t))+`, `+yL.transform(eL(n))+`, `+eL(ZI.transform(r))+`)`}})))()}var EL;function DL(){return(DL=t((()=>{gL(),TL(),pL(),EL={test:e=>fL.test(e)||hL.test(e)||wL.test(e),parse:e=>fL.test(e)?fL.parse(e):wL.test(e)?wL.parse(e):hL.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?fL.transform(e):wL.transform(e),getAnimatableNone:e=>{let t=EL.parse(e);return t.alpha=0,EL.transform(t)}}})))()}var OL;function kL(){return(kL=t((()=>{OL=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu})))()}function AL(e){return isNaN(e)&&typeof e==`string`&&(e.match(nL)?.length||0)+(e.match(OL)?.length||0)>0}function jL(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(VL,e=>(EL.test(e)?(r.color.push(a),i.push(LL),n.push(EL.parse(e))):e.startsWith(zL)?(r.var.push(a),i.push(RL),n.push(e)):(r.number.push(a),i.push(IL),n.push(parseFloat(e))),++a,BL)).split(BL),indexes:r,types:i}}function ML(e){return jL(e).values}function NL({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===IL?eL(r[a]):e===LL?EL.transform(r[a]):r[a]}return i}}function PL(e){return NL(jL(e))}function FL(e){let t=jL(e);return NL(t)(t.values.map((e,n)=>UL(e,t.split[n])))}var IL,LL,RL,zL,BL,VL,HL,UL,WL;function GL(){return(GL=t((()=>{DL(),kL(),rL(),tL(),IL=`number`,LL=`color`,RL=`var`,zL=`var(`,BL="${}",VL=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu,HL=e=>typeof e==`number`?0:EL.test(e)?EL.getAnimatableNone(e):e,UL=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:HL(e),WL={test:AL,parse:ML,createTransformer:PL,getAnimatableNone:FL}})))()}function KL(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function qL({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=KL(s,r,e+1/3),a=KL(s,r,e),o=KL(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function JL(e,t){return n=>n>0?t:e}var YL;function XL(){return(XL=t((()=>{YL=(e,t,n)=>e+(t-e)*n})))()}function ZL(e){let t=eR(e);if(TF(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`,`color-not-animatable`),!t)return!1;let n=t.parse(e);return t===wL&&(n=qL(n)),n}var QL,$L,eR,tR;function nR(){return(nR=t((()=>{DF(),gL(),TL(),pL(),XL(),QL=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},$L=[hL,fL,wL],eR=e=>$L.find(t=>t.test(e)),tR=(e,t)=>{let n=ZL(e),r=ZL(t);if(!n||!r)return JL(e,t);let i={...n};return e=>(i.red=QL(n.red,r.red,e),i.green=QL(n.green,r.green,e),i.blue=QL(n.blue,r.blue,e),i.alpha=YL(n.alpha,r.alpha,e),fL.transform(i))}})))()}function rR(e,t){return iR.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}var iR;function aR(){return(aR=t((()=>{iR=new Set([`none`,`hidden`])})))()}function oR(e,t){return n=>YL(e,t,n)}function sR(e){return typeof e==`number`?oR:typeof e==`string`?qI(e)?JL:EL.test(e)?tR:dR:Array.isArray(e)?cR:typeof e==`object`?EL.test(e)?tR:lR:JL}function cR(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>sR(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function lR(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=sR(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function uR(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var dR;function fR(){return(fR=t((()=>{BF(),DF(),YI(),DL(),GL(),nR(),XL(),aR(),dR=(e,t)=>{let n=WL.createTransformer(t),r=jL(e),i=jL(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?iR.has(e)&&!i.values.length||iR.has(t)&&!r.values.length?rR(e,t):zF(cR(uR(r,i),i.values),n):(TF(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,`complex-values-different`),JL(e,t))}})))()}function pR(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?YL(e,t,n):sR(e)(e,t)}function mR(){return(mR=t((()=>{fR(),XL()})))()}var hR;function gR(){return(gR=t((()=>{HI(),RI(),hR=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>PI.update(t,e),stop:()=>FI(t),now:()=>II.isProcessing?II.timestamp:VI.now()}}})))()}var _R;function vR(){return(vR=t((()=>{_R=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`}})))()}function yR(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}var bR;function xR(){return(xR=t((()=>{bR=2e4})))()}function SR(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(yR(r),bR);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:KF(i)}}function CR(){return(CR=t((()=>{qF(),xR()})))()}function wR(e,t){return e*Math.sqrt(1-t*t)}function TR(e,t,n){let r=n;for(let n=1;n<jR;n++)r-=e(r)/t(r);return r}function ER({duration:e=AR.duration,bounce:t=AR.bounce,velocity:n=AR.velocity,mass:r=AR.mass}){let i,a;TF(e<=GF(AR.maxDuration),`Spring duration must be 10 seconds or less`,`spring-duration-limit`);let o=1-t;o=CF(AR.minDamping,AR.maxDamping,o),e=CF(AR.minDuration,AR.maxDuration,KF(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=wR(t,o),c=Math.exp(-i);return MR-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=wR(t**2,o);return(-i(t)+MR>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=TR(i,a,s);if(e=GF(e),isNaN(c))return{stiffness:AR.stiffness,damping:AR.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}function DR(e,t){return t.some(t=>e[t]!==void 0)}function OR(e){let t={velocity:AR.velocity,stiffness:AR.stiffness,damping:AR.damping,mass:AR.mass,isResolvedFromDuration:!1,...e};if(!DR(e,PR)&&DR(e,NR)){if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*CF(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:AR.mass,stiffness:i,damping:a}}else{let n=ER({...e,velocity:0});t={...t,...n,mass:AR.mass},t.isResolvedFromDuration=!0}}return t}function kR(e=AR.visualDuration,t=AR.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=OR({...n,velocity:-KF(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=KF(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?AR.restSpeed.granular:AR.restSpeed.default,i||=v?AR.restDelta.granular:AR.restDelta.default;let y,b,x,S,C,w;if(h<1)x=wR(_,h),S=(m+h*_*g)/x,y=e=>{let t=Math.exp(-h*_*e);return o-t*(S*Math.sin(x*e)+g*Math.cos(x*e))},C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let T={calculatedDuration:p&&d||null,velocity:e=>GF(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=GF(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=GF(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(yR(T),bR),t=_R(t=>T.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return T}var AR,jR,MR,NR,PR;function FR(){return(FR=t((()=>{qF(),wF(),DF(),vR(),xR(),CR(),AR={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},jR=12,MR=.001,NR=[`duration`,`bounce`],PR=[`stiffness`,`damping`,`mass`],kR.applyToOptions=e=>{let t=SR(e,100,kR);return e.ease=t.ease,e.duration=GF(t.duration),e.type=`keyframes`,e}})))()}function IR(e,t,n){let r=Math.max(t-LR,0);return JF(n-e(r),t-r)}var LR;function RR(){return(RR=t((()=>{YF(),LR=5})))()}function zR({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=kR({keyframes:[f.value,m(f.value)],velocity:IR(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function BR(){return(BR=t((()=>{FR(),RR()})))()}function VR(e,t,n){let r=[],i=n||OF.mix||pR,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);if(t){let e=Array.isArray(t)?t[n]||LF:t;a=zF(e,a)}r.push(a)}return r}function HR(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(EF(a===t.length,`Both input and output ranges must be the same length`,`range-length`),a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=VR(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=VF(e[r],e[r+1],n);return s[r](i)};return n?t=>l(CF(e[0],e[a-1],t)):l}function UR(){return(UR=t((()=>{DF(),wF(),kF(),RF(),BF(),HF(),mR()})))()}function WR(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=VF(0,t,r);e.push(YL(n,1,i))}}function GR(){return(GR=t((()=>{HF(),XL()})))()}function KR(e){let t=[0];return WR(t,e.length-1),t}function qR(){return(qR=t((()=>{GR()})))()}function JR(e,t){return e.map(e=>e*t)}function YR(e,t){return e.map(()=>t||vI).splice(0,e.length-1)}function XR({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=bI(r)?r.map(EI):EI(r),a={done:!1,value:t[0]},o=HR(JR(n&&n.length===t.length?n:KR(t),e),t,{ease:Array.isArray(i)?i:YR(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}function ZR(){return(ZR=t((()=>{yI(),xI(),DI(),UR(),qR()})))()}function QR(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter($R),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var $R;function ez(){return(ez=t((()=>{$R=e=>e!==null})))()}function tz(e){typeof e.type==`string`&&(e.type=nz[e.type])}var nz;function rz(){return(rz=t((()=>{BR(),ZR(),FR(),nz={decay:zR,inertia:zR,tween:XR,keyframes:XR,spring:kR}})))()}var iz;function az(){return(az=t((()=>{iz=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}})))()}var oz,sz;function cz(){return(cz=t((()=>{BF(),wF(),qF(),HI(),mR(),gR(),BR(),ZR(),xR(),RR(),ez(),rz(),az(),oz=e=>e/100,sz=class extends iz{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==VI.now()&&this.tick(VI.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;tz(e);let{type:t=XR,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||XR;s!==XR&&typeof o[0]!=`number`&&(this.mixKeyframes=zF(oz,pR(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=yR(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=CF(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==zR&&(b.value=QR(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return KF(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+KF(e)}get time(){return KF(this.currentTime)}set time(e){e=GF(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return IR(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(VI.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=KF(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=hR,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(VI.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}}})))()}function lz(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}function uz(e){return+!!e.includes(`scale`)}function dz(e,t){if(!e||e===`none`)return uz(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=bz,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=hz,i=t}if(!i)return uz(t);let a=r[t],o=i[1].split(`,`).map(fz);return typeof a==`function`?a(o):o[a]}function fz(e){return parseFloat(e.trim())}var pz,mz,hz,gz,_z,vz,yz,bz,xz;function Sz(){return(Sz=t((()=>{pz=e=>e*180/Math.PI,mz=e=>{let t=pz(Math.atan2(e[1],e[0]));return gz(t)},hz={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:mz,rotateZ:mz,skewX:e=>pz(Math.atan(e[1])),skewY:e=>pz(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},gz=e=>(e%=360,e<0&&(e+=360),e),_z=mz,vz=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),yz=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),bz={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:vz,scaleY:yz,scale:e=>(vz(e)+yz(e))/2,rotateX:e=>gz(pz(Math.atan2(e[6],e[5]))),rotateY:e=>gz(pz(Math.atan2(-e[2],e[0]))),rotateZ:_z,rotate:_z,skewX:e=>pz(Math.atan(e[4])),skewY:e=>pz(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2},xz=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return dz(n,t)}})))()}var Cz,wz;function Tz(){return(Tz=t((()=>{Cz=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],wz=new Set([...Cz,`pathRotation`])})))()}function Ez(e){let t=[];return kz.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var Dz,Oz,kz,Az;function jz(){return(jz=t((()=>{Sz(),Tz(),$I(),CL(),Dz=e=>e===XI||e===Q,Oz=new Set([`x`,`y`,`z`]),kz=Cz.filter(e=>!Oz.has(e)),Az={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>dz(t,`x`),y:(e,{transform:t})=>dz(t,`y`)},Az.translateX=Az.x,Az.translateY=Az.y})))()}function Mz(){if(Lz){let e=Array.from(Fz).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Ez(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Lz=!1,Iz=!1,Fz.forEach(e=>e.complete(Rz)),Fz.clear()}function Nz(){Fz.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Lz=!0)})}function Pz(){Rz=!0,Nz(),Mz(),Rz=!1}var Fz,Iz,Lz,Rz,zz;function Bz(){return(Bz=t((()=>{jz(),RI(),Fz=new Set,Iz=!1,Lz=!1,Rz=!1,zz=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Fz.add(this),Iz||(Iz=!0,PI.read(Nz),PI.resolveKeyframes(Mz))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}lz(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Fz.delete(this)}cancel(){this.state===`scheduled`&&(Fz.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}}})))()}var Vz;function Hz(){return(Hz=t((()=>{Vz=e=>e.startsWith(`--`)})))()}function Uz(e,t,n){Vz(t)?e.style.setProperty(t,n):e.style[t]=n}function Wz(){return(Wz=t((()=>{Hz()})))()}var Gz;function Kz(){return(Kz=t((()=>{Gz={}})))()}function qz(e,t){let n=IF(e);return()=>Gz[t]??n()}function Jz(){return(Jz=t((()=>{Kz()})))()}var Yz;function Xz(){return(Xz=t((()=>{Jz(),Yz=qz(()=>window.ScrollTimeline!==void 0,`scrollTimeline`)})))()}var Zz;function Qz(){return(Qz=t((()=>{Jz(),Zz=qz(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`)})))()}var $z;function eB(){return(eB=t((()=>{$z=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`})))()}var tB;function nB(){return(nB=t((()=>{eB(),tB={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:$z([0,.65,.55,1]),circOut:$z([.55,0,1,.45]),backIn:$z([.31,.01,.66,-.59]),backOut:$z([.33,1.53,.69,.99])}})))()}function rB(e,t){if(e)return typeof e==`function`?Zz()?_R(e,t):`ease-out`:SI(e)?$z(e):Array.isArray(e)?e.map(e=>rB(e,t)||tB.easeOut):tB[e]}function iB(){return(iB=t((()=>{CI(),Qz(),vR(),eB(),nB()})))()}function aB(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=rB(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function oB(){return(oB=t((()=>{iB()})))()}function sB(e){return typeof e==`function`&&`applyToOptions`in e}function cB({type:e,...t}){return sB(e)&&Zz()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}function lB(){return(lB=t((()=>{Qz()})))()}var uB;function dB(){return(dB=t((()=>{DF(),qF(),RF(),Wz(),Xz(),ez(),az(),oB(),lB(),uB=class extends iz{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,EF(typeof e.type!=`string`,`Mini animate() doesn't support "type" as a string.`,`mini-spring`);let c=cB(e);this.animation=aB(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=QR(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Uz(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return KF(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+KF(e)}get time(){return KF(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=GF(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Yz()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),LF):r(this)}}})))()}function fB(e){return e in mB}function pB(e){typeof e.ease==`string`&&fB(e.ease)&&(e.ease=mB[e.ease])}var mB;function hB(){return(hB=t((()=>{hI(),lI(),dI(),mB={anticipate:uI,backInOut:cI,circInOut:mI}})))()}var gB,_B;function vB(){return(vB=t((()=>{wF(),HI(),Wz(),cz(),dB(),rz(),hB(),gB=10,_B=class extends uB{constructor(e){pB(e),tz(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new sz({...a,autoplay:!1}),s=Math.max(gB,VI.now()-this.startTime),c=CF(0,gB,s-gB),l=o.sample(s).value,{name:u}=this.options;i&&u&&Uz(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}}})))()}var yB;function bB(){return(bB=t((()=>{GL(),yB=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(WL.test(e)||e===`0`)&&!e.startsWith(`url(`))})))()}function xB(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function SB(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=yB(i,t),s=yB(a,t);return TF(o===s,`You are trying to animate ${t} from "${i}" to "${a}". "${o?a:i}" is not an animatable value.`,`value-not-animatable`),!o||!s?!1:xB(e)||(n===`spring`||sB(n))&&r}function CB(){return(CB=t((()=>{DF(),bB()})))()}function wB(e){e.duration=0,e.type=`keyframes`}var TB;function EB(){return(EB=t((()=>{TB=new Set([`opacity`,`clipPath`,`filter`,`transform`,`backgroundColor`])})))()}function DB(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&OB.test(e[t]))return!0;return!1}var OB;function kB(){return(kB=t((()=>{OB=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/})))()}function AB(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e,c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return MB()&&n&&(TB.has(n)||jB.has(n)&&DB(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var jB,MB;function NB(){return(NB=t((()=>{EB(),kB(),jB=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),MB=IF(()=>Object.hasOwnProperty.call(Element.prototype,`animate`))})))()}var PB,FB;function IB(){return(IB=t((()=>{kF(),RF(),HI(),cz(),ez(),Bz(),vB(),CB(),az(),NB(),PB=40,FB=class extends iz{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=VI.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||zz;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=VI.now();let u=!0;SB(e,i,a,o)||(u=!1,(OF.instantAnimations||!s)&&l?.(QR(e,n,t)),e[0]=e[e.length-1],wB(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>PB?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&AB(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new _B({...d,element:p})}catch{m=new sz(d)}else m=new sz(d);m.finished.then(()=>{this.notifyFinished()}).catch(LF),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Pz()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}})))()}function LB(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}function RB(e,t){return new HB(e,t)}var zB,BB,VB,HB;function UB(){return(UB=t((()=>{WF(),YF(),HI(),RI(),zB=30,BB=e=>!isNaN(parseFloat(e)),VB={current:void 0},HB=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=VI.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=VI.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=BB(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new UF);let n=this.events[e].add(t);return e===`change`?()=>{n(),PI.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return VB.current&&VB.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=VI.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>zB)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,zB);return JF(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}})))()}function WB(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function GB(e,t){let n=e?.[t]??e?.default??e;return n===e?n:WB(n,e)}function KB(){return(KB=t((()=>{})))()}var qB,JB,YB,XB,ZB;function QB(){return(QB=t((()=>{Tz(),qB={type:`spring`,stiffness:500,damping:25,restSpeed:10},JB=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),YB={type:`keyframes`,duration:.8},XB={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},ZB=(e,{keyframes:t})=>t.length>2?YB:wz.has(e)?e.startsWith(`scale`)?JB(t[1]):qB:XB})))()}function $B(e){for(let t in e)if(!eV.has(t))return!0;return!1}var eV;function tV(){return(tV=t((()=>{eV=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`])})))()}var nV;function rV(){return(rV=t((()=>{qF(),kF(),IB(),cz(),KB(),QB(),ez(),tV(),RI(),nV=(e,t,n,r={},i,a)=>o=>{let s=GB(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=GF(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};$B(s)||Object.assign(u,ZB(e,u)),u.duration&&=GF(u.duration),u.repeatDelay&&=GF(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(wB(u),u.delay===0&&(d=!0)),(OF.instantAnimations||OF.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,wB(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=QR(u.keyframes,s);if(e!==void 0){PI.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new sz(u):new FB(u)}})))()}function iV(e){let t=oV.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function aV(e,t,n=1){EF(n<=sV,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,`max-css-var-depth`);let[r,i]=iV(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return AF(e)?parseFloat(e):e}return qI(i)?aV(i,t,n+1):i}var oV,sV;function cV(){return(cV=t((()=>{DF(),jF(),YI(),oV=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,sV=4})))()}function lV(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function uV(e,t,n,r){if(typeof t==`function`){let[i,a]=lV(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=lV(r);t=t(n===void 0?e.custom:n,i,a)}return t}function dV(e,t,n){let r=e.getProps();return uV(r,t,n===void 0?r.custom:n,e)}function fV(){return(fV=t((()=>{})))()}var pV;function mV(){return(mV=t((()=>{Tz(),pV=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Cz])})))()}var hV;function gV(){return(gV=t((()=>{hV=e=>Array.isArray(e)})))()}function _V(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,RB(n))}function vV(e){return hV(e)?e[e.length-1]||0:e}function yV(e,t){let{transitionEnd:n={},transition:r={},...i}=dV(e,t)||{};i={...i,...n};for(let t in i)_V(e,t,vV(i[t]))}function bV(){return(bV=t((()=>{UB(),fV(),gV()})))()}var xV;function SV(){return(SV=t((()=>{xV=e=>!!(e&&e.getVelocity)})))()}function CV(e){return!!(xV(e)&&e.add)}function wV(){return(wV=t((()=>{SV()})))()}function TV(e,t){let n=e.getValue(`willChange`);if(CV(n))return n.add(t);if(!n&&OF.WillChange){let n=new OF.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function EV(){return(EV=t((()=>{kF(),wV()})))()}function DV(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var OV,kV;function AV(){return(AV=t((()=>{OV=`framerAppearId`,kV=`data-`+DV(OV)})))()}function jV(e){return e.props[kV]}function MV(){return(MV=t((()=>{AV()})))()}function NV({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function PV(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?WB(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&NV(f,t))continue;let o={delay:n,...GB(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){PI.update(()=>r.set(i));continue}let p=!1;if(FV&&window.MotionHandoffAnimation){let n=jV(e);if(n){let e=window.MotionHandoffAnimation(n,t,PI);e!==null&&(o.startTime=e,p=!0)}}TV(e,t);let m=l??e.shouldReduceMotion;r.start(nV(t,r,i,m&&pV.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>PI.update(()=>{o&&yV(e,o)});d.length?Promise.all(d).then(t):t()}return d}var FV;function IV(){return(IV=t((()=>{KB(),mV(),bV(),EV(),MV(),rV(),RI(),FV=typeof window<`u`})))()}function LV(e,t,n={}){let r=dV(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(PV(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return RV(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function RV(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(LV(c,t,{...o,delay:n+(typeof r==`function`?0:r)+LB(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function zV(){return(zV=t((()=>{fV(),IV()})))()}function BV(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>LV(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=LV(e,t,n);else{let i=typeof t==`function`?dV(e,t,n.custom):t;r=Promise.all(PV(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}function VV(){return(VV=t((()=>{fV(),IV(),zV()})))()}var HV;function UV(){return(UV=t((()=>{HV={test:e=>e===`auto`,parse:e=>e}})))()}var WV;function GV(){return(GV=t((()=>{WV=e=>t=>t.test(e)})))()}var KV,qV;function JV(){return(JV=t((()=>{UV(),$I(),CL(),GV(),KV=[XI,Q,yL,vL,xL,bL,HV],qV=e=>KV.find(WV(e))})))()}function YV(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||PF(e)}function XV(){return(XV=t((()=>{FF()})))()}function ZV(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(nL)||[];if(!r)return e;let i=n.replace(r,``),a=+!!QV.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var QV,$V,eH;function tH(){return(tH=t((()=>{GL(),rL(),QV=new Set([`brightness`,`contrast`,`saturate`,`opacity`]),$V=/\b([a-z-]*)\(.*?\)/gu,eH={...WL,getAnimatableNone:e=>{let t=e.match($V);return t?t.map(ZV).join(` `):e}}})))()}var nH;function rH(){return(rH=t((()=>{GL(),nH={...WL,getAnimatableNone:e=>{let t=WL.parse(e);return WL.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}}})))()}var iH;function aH(){return(aH=t((()=>{$I(),iH={...XI,transform:Math.round}})))()}var oH;function sH(){return(sH=t((()=>{$I(),CL(),oH={rotate:vL,pathRotation:vL,rotateX:vL,rotateY:vL,rotateZ:vL,scale:QI,scaleX:QI,scaleY:QI,scaleZ:QI,skew:vL,skewX:vL,skewY:vL,distance:Q,translateX:Q,translateY:Q,translateZ:Q,x:Q,y:Q,z:Q,perspective:Q,transformPerspective:Q,opacity:ZI,originX:SL,originY:SL,originZ:Q}})))()}var cH;function lH(){return(lH=t((()=>{aH(),$I(),CL(),sH(),cH={borderWidth:Q,borderTopWidth:Q,borderRightWidth:Q,borderBottomWidth:Q,borderLeftWidth:Q,borderRadius:Q,borderTopLeftRadius:Q,borderTopRightRadius:Q,borderBottomRightRadius:Q,borderBottomLeftRadius:Q,width:Q,maxWidth:Q,height:Q,maxHeight:Q,top:Q,right:Q,bottom:Q,left:Q,inset:Q,insetBlock:Q,insetBlockStart:Q,insetBlockEnd:Q,insetInline:Q,insetInlineStart:Q,insetInlineEnd:Q,padding:Q,paddingTop:Q,paddingRight:Q,paddingBottom:Q,paddingLeft:Q,paddingBlock:Q,paddingBlockStart:Q,paddingBlockEnd:Q,paddingInline:Q,paddingInlineStart:Q,paddingInlineEnd:Q,margin:Q,marginTop:Q,marginRight:Q,marginBottom:Q,marginLeft:Q,marginBlock:Q,marginBlockStart:Q,marginBlockEnd:Q,marginInline:Q,marginInlineStart:Q,marginInlineEnd:Q,fontSize:Q,backgroundPositionX:Q,backgroundPositionY:Q,...oH,zIndex:iH,fillOpacity:ZI,strokeOpacity:ZI,numOctaves:iH}})))()}var uH,dH;function fH(){return(fH=t((()=>{DL(),tH(),rH(),lH(),uH={...cH,color:EL,backgroundColor:EL,outlineColor:EL,fill:EL,stroke:EL,borderColor:EL,borderTopColor:EL,borderRightColor:EL,borderBottomColor:EL,borderLeftColor:EL,filter:eH,WebkitFilter:eH,mask:nH,WebkitMask:nH},dH=e=>uH[e]})))()}function pH(e,t){let n=dH(e);return mH.has(n)||(n=WL),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var mH;function hH(){return(hH=t((()=>{GL(),tH(),rH(),fH(),mH=new Set([eH,nH])})))()}function gH(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!_H.has(t)&&jL(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=pH(n,i)}var _H;function vH(){return(vH=t((()=>{GL(),hH(),_H=new Set([`auto`,`none`,`0`])})))()}var yH;function bH(){return(bH=t((()=>{mV(),JV(),cV(),YI(),Bz(),XV(),vH(),jz(),yH=class extends zz{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),qI(r))){let i=aV(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!pV.has(n)||e.length!==2)return;let[r,i]=e,a=qV(r),o=qV(i);if(UI(r)!==UI(i)&&Az[n]){this.needsMeasurement=!0;return}if(a!==o){if(Dz(a)&&Dz(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Az[n]&&(this.needsMeasurement=!0)}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||YV(e[t]))&&n.push(t);n.length&&gH(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Az[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Az[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}}})))()}var xH;function SH(){return(SH=t((()=>{xH=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`]})))()}function CH(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var wH;function TH(){return(TH=t((()=>{wH=(e,t)=>t&&typeof e==`number`?t.transform(e):e})))()}function EH(e){return MF(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}function DH(){return(DH=t((()=>{NF()})))()}var OH,kH;function AH(){return(AH=t((()=>{NI(),{schedule:OH,cancel:kH}=jI(queueMicrotask,!1)})))()}function jH(){return MH.x||MH.y}var MH;function NH(){return(NH=t((()=>{MH={x:!1,y:!1}})))()}function PH(e){return e===`x`||e===`y`?MH[e]?null:(MH[e]=!0,()=>{MH[e]=!1}):MH.x||MH.y?null:(MH.x=MH.y=!0,()=>{MH.x=MH.y=!1})}function FH(){return(FH=t((()=>{NH()})))()}function IH(e,t){let n=CH(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function LH(){return(LH=t((()=>{})))()}function RH(e){return!(e.pointerType===`touch`||jH())}function zH(e,t,n={}){let[r,i,a]=IH(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!RH(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}function BH(){return(BH=t((()=>{NH(),LH()})))()}var VH;function HH(){return(HH=t((()=>{VH=(e,t)=>t?e===t||VH(e,t.parentElement):!1})))()}var UH;function WH(){return(WH=t((()=>{UH=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1})))()}function GH(e){return qH.has(e.tagName)||e.isContentEditable===!0}function KH(e){return JH.has(e.tagName)||e.isContentEditable===!0}var qH,JH;function YH(){return(YH=t((()=>{qH=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]),JH=new Set([`INPUT`,`SELECT`,`TEXTAREA`])})))()}var XH;function ZH(){return(ZH=t((()=>{XH=new WeakSet})))()}function QH(e){return t=>{t.key===`Enter`&&e(t)}}function $H(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var eU;function tU(){return(tU=t((()=>{ZH(),eU=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=QH(()=>{if(XH.has(n))return;$H(n,`down`);let e=QH(()=>{$H(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>$H(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)}})))()}function nU(e){return UH(e)&&!jH()}function rU(e,t,n={}){let[r,i,a]=IH(e,n),o=e=>{let r=e.currentTarget;if(!nU(e)||iU.has(e))return;XH.add(r),n.stopPropagation&&iU.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),XH.has(r)&&XH.delete(r),nU(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||VH(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),EH(e)&&(e.addEventListener(`focus`,e=>eU(e,i)),!GH(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}var iU;function aU(){return(aU=t((()=>{DH(),NH(),HH(),WH(),LH(),YH(),tU(),ZH(),iU=new WeakSet})))()}function oU(e){return MF(e)&&`ownerSVGElement`in e}function sU(){return(sU=t((()=>{NF()})))()}function cU({target:e,borderBoxSize:t}){fU.get(e)?.forEach(n=>{n(e,{get width(){return hU(e,t)},get height(){return gU(e,t)}})})}function lU(e){e.forEach(cU)}function uU(){typeof ResizeObserver>`u`||(pU=new ResizeObserver(lU))}function dU(e,t){pU||uU();let n=CH(e);return n.forEach(e=>{let n=fU.get(e);n||(n=new Set,fU.set(e,n)),n.add(t),pU?.observe(e)}),()=>{n.forEach(e=>{let n=fU.get(e);n?.delete(t),n?.size||pU?.unobserve(e)})}}var fU,pU,mU,hU,gU;function _U(){return(_U=t((()=>{sU(),fU=new WeakMap,mU=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:oU(r)&&`getBBox`in r?r.getBBox()[t]:r[n],hU=mU(`inline`,`width`,`offsetWidth`),gU=mU(`block`,`height`,`offsetHeight`)})))()}function vU(){xU=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};bU.forEach(t=>t(e))},window.addEventListener(`resize`,xU)}function yU(e){return bU.add(e),xU||vU(),()=>{bU.delete(e),!bU.size&&typeof xU==`function`&&(window.removeEventListener(`resize`,xU),xU=void 0)}}var bU,xU;function SU(){return(SU=t((()=>{bU=new Set})))()}function CU(e,t){return typeof e==`function`?yU(e):dU(e,t)}function wU(){return(wU=t((()=>{_U(),SU()})))()}var TU;function EU(){return(EU=t((()=>{TU={value:null,addProjectionMetrics:null}})))()}function DU(e){return oU(e)&&e.tagName===`svg`}function OU(){return(OU=t((()=>{sU()})))()}var kU,AU;function jU(){return(jU=t((()=>{DL(),GL(),JV(),GV(),kU=[...KV,EL,WL],AU=e=>kU.find(WV(e))})))()}var MU,NU,PU,FU;function IU(){return(IU=t((()=>{MU=()=>({translate:0,scale:1,origin:0,originPoint:0}),NU=()=>({x:MU(),y:MU()}),PU=()=>({min:0,max:0}),FU=()=>({x:PU(),y:PU()})})))()}var LU;function RU(){return(RU=t((()=>{LU=new WeakMap})))()}function zU(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function BU(e){return typeof e==`string`||Array.isArray(e)}var VU,HU;function UU(){return(UU=t((()=>{VU=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],HU=[`initial`,...VU]})))()}function WU(e){return zU(e.animate)||HU.some(t=>BU(e[t]))}function GU(e){return!!(WU(e)||e.variants)}function KU(){return(KU=t((()=>{UU()})))()}function qU(e,t,n){for(let r in t){let i=t[r],a=n[r];if(xV(i))e.addValue(r,i);else if(xV(a))e.addValue(r,RB(i,{owner:e}));else if(a!==i){if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,RB(t===void 0?i:t,{owner:e}))}}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}function JU(){return(JU=t((()=>{UB(),SV()})))()}var YU,XU;function ZU(){return(ZU=t((()=>{YU={current:null},XU={current:!1}})))()}function QU(){if(XU.current=!0,$U){if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>YU.current=e.matches;e.addEventListener(`change`,t),t()}else YU.current=!1}}var $U;function eW(){return(eW=t((()=>{ZU(),$U=typeof window<`u`})))()}function tW(e){iW=e}function nW(){return iW}var rW,iW,aW;function oW(){return(oW=t((()=>{qF(),jF(),FF(),WF(),Bz(),dB(),EB(),AH(),HI(),IU(),UB(),GL(),hH(),jU(),SV(),RU(),KU(),Tz(),JU(),eW(),ZU(),RI(),rW=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],iW={},aW=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=zz,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=VI.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,PI.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=WU(t),this.isVariantNode=GU(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&xV(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,LU.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(XU.current||QU(),this.shouldReduceMotion=YU.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),FI(this.notifyUpdate),FI(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&TB.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new uB({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:GF(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=wz.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&PI.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in iW){let t=iW[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):FU()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<rW.length;t++){let n=rW[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=qU(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=RB(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(AF(n)||PF(n))?n=parseFloat(n):!AU(n)&&WL.test(t)&&(n=pH(e,t)),this.setBaseTarget(e,xV(n)?n.get():n)),xV(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=uV(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!xV(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new UF),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){OH.render(this.render)}}})))()}var sW;function cW(){return(cW=t((()=>{SV(),bH(),oW(),sW=class extends aW{constructor(){super(...arguments),this.KeyframeResolver=yH}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;xV(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}}})))()}var lW;function uW(){return(uW=t((()=>{lW=class{constructor(e){this.isMounted=!1,this.node=e}update(){}}})))()}function dW({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function fW({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function pW(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function mW(e){return e===void 0||e===1}function hW({scale:e,scaleX:t,scaleY:n}){return!mW(e)||!mW(t)||!mW(n)}function gW(e){return hW(e)||_W(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function _W(e){return vW(e.x)||vW(e.y)}function vW(e){return e&&e!==`0%`}function yW(e,t,n){return n+t*(e-n)}function bW(e,t,n,r,i){return i!==void 0&&(e=yW(e,i,r)),yW(e,n,r)+t}function xW(e,t=0,n=1,r,i){e.min=bW(e.min,t,n,r,i),e.max=bW(e.max,t,n,r,i)}function SW(e,{x:t,y:n}){xW(e.x,t.translate,t.scale,t.originPoint),xW(e.y,n.translate,n.scale,n.originPoint)}function CW(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(wW(e.x,-a.scroll.offset.x),wW(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,SW(e,o)),r&&gW(a.latestValues)&&DW(e,a.latestValues,a.layout?.layoutBox))}t.x<kW&&t.x>OW&&(t.x=1),t.y<kW&&t.y>OW&&(t.y=1)}function wW(e,t){e.min+=t,e.max+=t}function TW(e,t,n,r,i=.5){xW(e,t,n,YL(e.min,e.max,i),r)}function EW(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function DW(e,t,n){let r=n??e;TW(e.x,EW(t.x,r.x),t.scaleX,t.scale,t.originX),TW(e.y,EW(t.y,r.y),t.scaleY,t.scale,t.originY)}var OW,kW;function AW(){return(AW=t((()=>{XL(),OW=.999999999999,kW=1.0000000000001})))()}function jW(e,t){return dW(pW(e.getBoundingClientRect(),t))}function MW(e,t,n){let r=jW(e,n),{scroll:i}=t;return i&&(wW(r.x,i.offset.x),wW(r.y,i.offset.y)),r}function NW(){return(NW=t((()=>{AW()})))()}function PW(e,t,n){let r=``,i=!0;for(let a=0;a<IW;a++){let o=Cz[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=wH(s,cH[o]);if(!c){i=!1;let t=FW[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${wH(a,cH.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}var FW,IW;function LW(){return(LW=t((()=>{TH(),lH(),Tz(),FW={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},IW=Cz.length})))()}function RW(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(wz.has(e)){o=!0;continue}if(GI(e)){i[e]=n;continue}{let t=wH(n,cH[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=PW(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function zW(){return(zW=t((()=>{TH(),lH(),Tz(),YI(),LW()})))()}function BW(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function VW(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var HW;function UW(){return(UW=t((()=>{CL(),HW={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`){if(Q.test(e))e=parseFloat(e);else return e}return`${VW(e,t.target.x)}% ${VW(e,t.target.y)}%`}}})))()}var WW;function GW(){return(GW=t((()=>{GL(),XL(),WW={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=WL.parse(e);if(i.length>5)return r;let a=WL.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=YL(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}}})))()}var KW;function qW(){return(qW=t((()=>{SH(),UW(),GW(),KW={borderRadius:{...HW,applyTo:[...xH]},borderTopLeftRadius:HW,borderTopRightRadius:HW,borderBottomLeftRadius:HW,borderBottomRightRadius:HW,boxShadow:WW}})))()}function JW(e,{layout:t,layoutId:n}){return wz.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!KW[e]||e===`opacity`)}function YW(){return(YW=t((()=>{Tz(),qW()})))()}function XW(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(xV(r[t])||i&&xV(i[t])||JW(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function ZW(){return(ZW=t((()=>{SV(),YW()})))()}function QW(e){return window.getComputedStyle(e)}var $W;function eG(){return(eG=t((()=>{DF(),YI(),Tz(),Sz(),NW(),cW(),zW(),ZW(),$W=class extends sW{constructor(){super(...arguments),this.type=`html`,this.renderInstance=BW}mount(e){EF(!!e.style,`motion.create() components must forward their ref to a HTML or SVG element`,`custom-component-ref`),super.mount(e)}readValueFromInstance(e,t){if(wz.has(t))return this.projection?.isProjecting?uz(t):xz(e,t);{let n=QW(e),r=(GI(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return jW(e,t)}build(e,t,n){RW(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return XW(e,t,n)}}})))()}function tG(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?nG:rG;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var nG,rG;function iG(){return(iG=t((()=>{nG={offset:`stroke-dashoffset`,array:`stroke-dasharray`},rG={offset:`strokeDashoffset`,array:`strokeDasharray`}})))()}function aG(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(RW(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;for(let e of oG)d[e]!==void 0&&(f[e]=d[e],delete d[e]);(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&tG(d,i,a,o,!1)}var oG;function sG(){return(sG=t((()=>{zW(),iG(),oG=[`transform`,`opacity`,`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`]})))()}var cG;function lG(){return(lG=t((()=>{cG=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`])})))()}var uG;function dG(){return(dG=t((()=>{uG=e=>typeof e==`string`&&e.toLowerCase()===`svg`})))()}function fG(e,t,n,r){BW(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(cG.has(n)?n:DV(n),t.attrs[n])}function pG(){return(pG=t((()=>{lG()})))()}function mG(e,t,n){let r=XW(e,t,n);for(let n in e)if(xV(e[n])||xV(t[n])){let t=Cz.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}function hG(){return(hG=t((()=>{SV(),Tz(),ZW()})))()}var gG;function _G(){return(_G=t((()=>{Tz(),fH(),IU(),cW(),sG(),lG(),dG(),pG(),hG(),gG=class extends sW{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=FU}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(wz.has(t)){let e=dH(t);return e&&e.default||0}if(oG.includes(t)){let n=getComputedStyle(e)[t];if(typeof n==`string`&&n)return n.trim()}return t=cG.has(t)?t:DV(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return mG(e,t,n)}build(e,t,n){aG(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){fG(e,t,n,r)}mount(e){this.isSVGTag=uG(e.tagName),super.mount(e)}}})))()}function vG(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&vG(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<yG;n++){let r=HU[n],i=e.props[r];(BU(i)||i===!1)&&(t[r]=i)}return t}var yG;function bG(){return(bG=t((()=>{UU(),yG=HU.length})))()}function xG(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function SG(e){return t=>Promise.all(t.map(({animation:t,options:n})=>BV(e,t,n)))}function CG(e){let t=SG(e),n=EG(),r=!0,i=!1,a=t=>(n,r)=>{let i=dV(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=vG(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<OG;t++){let p=DG[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=BU(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||zU(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=wG(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,T={...w,...C},E=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in T){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=hV(t)&&hV(n)?!xG(t,n)||y:t!==n,r?t==null?u.add(e):E(e):t!==void 0&&u.has(e)?E(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let D=v&&y;b&&(!D||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!D&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=dV(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=LB(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=dV(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=EG(),i=!0}}}function wG(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!xG(t,e):!1}function TG(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function EG(){return{animate:TG(!0),whileInView:TG(),whileHover:TG(),whileTap:TG(),whileDrag:TG(),whileFocus:TG(),exit:TG()}}var DG,OG;function kG(){return(kG=t((()=>{VV(),bG(),gV(),fV(),UU(),DG=[...VU].reverse(),OG=VU.length})))()}function AG(e,t){e.min=t.min,e.max=t.max}function jG(e,t){AG(e.x,t.x),AG(e.y,t.y)}function MG(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function NG(e){return e.max-e.min}function PG(e,t,n){return Math.abs(e-t)<=n}function FG(e,t,n,r=.5){e.origin=r,e.originPoint=YL(t.min,t.max,e.origin),e.scale=NG(n)/NG(t),e.translate=YL(n.min,n.max,e.origin)-e.originPoint,(e.scale>=VG&&e.scale<=HG||isNaN(e.scale))&&(e.scale=1),(e.translate>=UG&&e.translate<=WG||isNaN(e.translate))&&(e.translate=0)}function IG(e,t,n,r){FG(e.x,t.x,n.x,r?r.originX:void 0),FG(e.y,t.y,n.y,r?r.originY:void 0)}function LG(e,t,n,r=0){e.min=(r?YL(n.min,n.max,r):n.min)+t.min,e.max=e.min+NG(t)}function RG(e,t,n,r){LG(e.x,t.x,n.x,r?.x),LG(e.y,t.y,n.y,r?.y)}function zG(e,t,n,r=0){let i=r?YL(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+NG(t)}function BG(e,t,n,r){zG(e.x,t.x,n.x,r?.x),zG(e.y,t.y,n.y,r?.y)}var VG,HG,UG,WG;function GG(){return(GG=t((()=>{XL(),VG=.9999,HG=1.0001,UG=-.01,WG=.01})))()}function KG(e,t,n,r,i){return e-=t,e=yW(e,1/n,r),i!==void 0&&(e=yW(e,1/i,r)),e}function qG(e,t=0,n=1,r=.5,i,a=e,o=e){if(yL.test(t)&&(t=parseFloat(t),t=YL(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=YL(a.min,a.max,r);e===a&&(s-=t),e.min=KG(e.min,t,n,s,i),e.max=KG(e.max,t,n,s,i)}function JG(e,t,[n,r,i],a,o){qG(e,t[n],t[r],t[i],t.scale,a,o)}function YG(e,t,n,r){JG(e.x,t,XG,n?n.x:void 0,r?r.x:void 0),JG(e.y,t,ZG,n?n.y:void 0,r?r.y:void 0)}var XG,ZG;function QG(){return(QG=t((()=>{XL(),CL(),AW(),XG=[`x`,`scaleX`,`originX`],ZG=[`y`,`scaleY`,`originY`]})))()}function $G(e){return e.translate===0&&e.scale===1}function eK(e){return $G(e.x)&&$G(e.y)}function tK(e,t){return e.min===t.min&&e.max===t.max}function nK(e,t){return tK(e.x,t.x)&&tK(e.y,t.y)}function rK(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function iK(e,t){return rK(e.x,t.x)&&rK(e.y,t.y)}function aK(e){return NG(e.x)/NG(e.y)}function oK(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function sK(){return(sK=t((()=>{GG()})))()}function cK(e){return[e(`x`),e(`y`)]}function lK(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}function uK(e,t,n,r,i,a){i?(e.opacity=YL(0,n.opacity??1,gK(r)),e.opacityExit=YL(t.opacity??1,0,_K(r))):a&&(e.opacity=YL(t.opacity??1,n.opacity??1,r));for(let i=0;i<pK;i++){let a=xH[i],o=dK(t,a),s=dK(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||hK(o)===hK(s)?(e[a]=Math.max(YL(mK(o),mK(s),r),0),(yL.test(s)||yL.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=YL(t.rotate||0,n.rotate||0,r))}function dK(e,t){return e[t]===void 0?e.borderRadius:e[t]}function fK(e,t,n){return r=>r<e?0:r>t?1:n(VF(e,t,r))}var pK,mK,hK,gK,_K;function vK(){return(vK=t((()=>{XL(),CL(),HF(),hI(),RF(),SH(),pK=xH.length,mK=e=>typeof e==`string`?parseFloat(e):e,hK=e=>typeof e==`number`||Q.test(e),gK=fK(0,.5,pI),_K=fK(.5,.95,LF)})))()}function yK(e,t,n){let r=xV(e)?e:RB(e);return r.start(nV(``,r,t,n)),r.animation}function bK(){return(bK=t((()=>{rV(),UB(),SV()})))()}function xK(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var SK;function CK(){return(CK=t((()=>{SK=(e,t)=>e.depth-t.depth})))()}var wK;function TK(){return(TK=t((()=>{CK(),wK=class{constructor(){this.children=[],this.isDirty=!1}add(e){xF(this.children,e),this.isDirty=!0}remove(e){SF(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(SK),this.isDirty=!1,this.children.forEach(e)}}})))()}function EK(e,t){let n=VI.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(FI(r),e(a-t))};return PI.setup(r,!0),()=>FI(r)}function DK(){return(DK=t((()=>{HI(),RI()})))()}function OK(e){return xV(e)?e.get():e}function kK(){return(kK=t((()=>{SV()})))()}var AK;function jK(){return(jK=t((()=>{AK=class{constructor(){this.members=[]}add(e){xF(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(SF(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(SF(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}})))()}var MK;function NK(){return(NK=t((()=>{MK={hasAnimatedSinceResize:!0,hasEverUpdated:!1}})))()}function PK(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function FK(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=jV(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,PI,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&FK(r)}function IK({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=lq++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,TU.value&&(oq.nodes=oq.calculatedTargetDeltas=oq.calculatedProjections=0),this.nodes.forEach(zK),this.nodes.forEach(JK),this.nodes.forEach(YK),this.nodes.forEach(BK),TU.addProjectionMetrics&&TU.addProjectionMetrics(oq)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new wK)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new UF),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=oU(t)&&!DU(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;PI.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=EK(i,250),MK.hasAnimatedSinceResize&&(MK.hasAnimatedSinceResize=!1,this.nodes.forEach(qK)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||uq,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!iK(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...GB(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||qK(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),FI(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(XK),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&FK(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(UK),this.nodes.forEach(HK);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(WK);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(GK),this.nodes.forEach(KK),this.nodes.forEach(LK),this.nodes.forEach(RK)):this.nodes.forEach(WK),this.clearAllSnapshots();let e=VI.now();II.delta=CF(0,1e3/60,e-II.timestamp),II.timestamp=e,II.isProcessing=!0,LI.update.process(II),LI.preRender.process(II),LI.render.process(II),II.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,OH.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(VK),this.sharedNodes.forEach(ZK)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,PI.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){PI.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!NG(this.snapshot.measuredBox.x)&&!NG(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=FU(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!eK(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||gW(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),rq(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return FU();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(aq))){let{scroll:e}=this.root;e&&(wW(t.x,e.offset.x),wW(t.y,e.offset.y))}return t}removeElementScroll(e){let t=FU();if(jG(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&jG(t,e),wW(t.x,i.offset.x),wW(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||FU();jG(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(wW(r.x,-n.scroll.offset.x),wW(r.y,-n.scroll.offset.y)),gW(n.latestValues)&&DW(r,n.latestValues,n.layout?.layoutBox)}return gW(this.latestValues)&&DW(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=FU();jG(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!gW(n.latestValues))continue;let r;n.instance&&(hW(n.latestValues)&&n.updateSnapshot(),r=FU(),jG(r,n.measurePageBox())),YG(t,n.latestValues,n.snapshot?.layoutBox,r)}return gW(this.latestValues)&&YG(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==II.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=II.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=FU(),this.targetWithTransforms=FU()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),RG(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):jG(this.target,this.layout.layoutBox),SW(this.target,this.targetDelta)):jG(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),TU.value&&oq.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||hW(this.parent.latestValues)||_W(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=FU(),this.relativeTargetOrigin=FU(),BG(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),jG(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===II.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;jG(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;CW(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=FU());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(MG(this.prevProjectionDelta.x,this.projectionDelta.x),MG(this.prevProjectionDelta.y,this.projectionDelta.y)),IG(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!oK(this.projectionDelta.x,this.prevProjectionDelta.x)||!oK(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),TU.value&&oq.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=NU(),this.projectionDelta=NU(),this.projectionDeltaWithTransform=NU()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=NU();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=FU(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!!(c&&!u&&this.options.crossfade===!0&&!this.path.some(tq));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=YL(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=YL(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(QK(o.x,e.x,n),QK(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(BG(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),eq(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&nK(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=FU(),jG(f,this.relativeTarget)),c&&(this.animationValues=a,uK(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(FI(this.pendingAnimation),void 0),this.pendingAnimation=PI.update(()=>{MK.hasAnimatedSinceResize=!0,this.motionValue||=RB(0),this.motionValue.jump(0,!1),this.currentAnimation=yK(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(cq),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&iq(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||FU();let t=NG(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=NG(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}jG(t,n),DW(t,i),IG(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new AK),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&PK(`z`,e,r,this.animationValues);for(let t=0;t<sq.length;t++)PK(`rotate${sq[t]}`,e,r,this.animationValues),PK(`skew${sq[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=OK(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=OK(t?.pointerEvents)||``),this.hasProjected&&!gW(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=lK(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in KW){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=KW[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?OK(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(HK),this.root.sharedNodes.clear()}}}function LK(e){e.updateLayout()}function RK(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)cK(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=NG(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;AG(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else iq(i,t.layoutBox,n)&&cK(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=NG(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=NU();IG(o,n,t.layoutBox);let s=NU();a?IG(s,e.applyTransform(r,!0),t.measuredBox):IG(s,n,t.layoutBox);let c=!eK(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=FU();BG(s,t.layoutBox,i.layoutBox,o);let c=FU();BG(c,n,a.layoutBox,o),iK(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function zK(e){TU.value&&oq.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function BK(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function VK(e){e.clearSnapshot()}function HK(e){e.clearMeasurements()}function UK(e){e.isLayoutDirty=!0,e.updateLayout()}function WK(e){e.isLayoutDirty=!1}function GK(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function KK(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function qK(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function JK(e){e.resolveTargetDelta()}function YK(e){e.calcProjection()}function XK(e){e.resetSkewAndRotation()}function ZK(e){e.removeLeadSnapshot()}function QK(e,t,n){e.translate=YL(t.translate,0,n),e.scale=YL(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function $K(e,t,n,r){e.min=YL(t.min,n.min,r),e.max=YL(t.max,n.max,r)}function eq(e,t,n,r){$K(e.x,t.x,n.x,r),$K(e.y,t.y,n.y,r)}function tq(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}function nq(e){e.min=fq(e.min),e.max=fq(e.max)}function rq(e){nq(e.x),nq(e.y)}function iq(e,t,n){return e===`position`||e===`preserve-aspect`&&!PG(aK(t),aK(n),.2)}function aq(e){return e!==e.root&&e.scroll?.wasRoot}var oq,sq,cq,lq,uq,dq,fq;function pq(){return(pq=t((()=>{WF(),wF(),RF(),bK(),MV(),KB(),AH(),HI(),qW(),EU(),DK(),sU(),OU(),XL(),UB(),kK(),vK(),AW(),GG(),QG(),IU(),sK(),jK(),TK(),NK(),RI(),oq={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},sq=[``,`X`,`Y`,`Z`],cq=1e3,lq=0,uq={duration:.45,ease:[.4,0,.1,1]},dq=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),fq=dq(`applewebkit/`)&&!dq(`chrome/`)?Math.round:LF})))()}var mq;function hq(){return(hq=t((()=>{pq(),mq=IK({attachResizeListener:(e,t)=>xK(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0})})))()}var gq,_q;function vq(){return(vq=t((()=>{pq(),hq(),gq={current:void 0},_q=IK({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!gq.current){let e=new mq({});e.mount(window),e.setOptions({layoutScroll:!0}),gq.current=e}return gq.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`})})))()}var yq,bq;function xq(){return(xq=t((()=>{yq=r(),bq=(0,yq.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`})})))()}function Sq(e=!0){let t=(0,Cq.useContext)(yF);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,Cq.useId)();(0,Cq.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,Cq.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Cq;function wq(){return(wq=t((()=>{Cq=r(),bF()})))()}var Tq,Eq;function Dq(){return(Dq=t((()=>{Tq=r(),Eq=(0,Tq.createContext)({strict:!1})})))()}function Oq(){if(jq)return;let e={};for(let t in Aq)e[t]={isEnabled:e=>Aq[t].some(t=>!!e[t])};tW(e),jq=!0}function kq(){return Oq(),nW()}var Aq,jq;function Mq(){return(Mq=t((()=>{oW(),Aq={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},jq=!1})))()}function Nq(e){let t=kq();for(let n in e)t[n]={...t[n],...e[n]};tW(t)}function Pq(){return(Pq=t((()=>{oW(),Mq()})))()}var Fq,Iq;function Lq(){return(Lq=t((()=>{Fq=r(),Iq=(0,Fq.createContext)({})})))()}function Rq(e,t){if(WU(e)){let{initial:t,animate:n}=e;return{initial:t===!1||BU(t)?t:void 0,animate:BU(n)?n:void 0}}return e.inherit===!1?{}:t}function zq(){return(zq=t((()=>{KU()})))()}function Bq(e){let{initial:t,animate:n}=Rq(e,(0,Hq.useContext)(Iq));return(0,Hq.useMemo)(()=>({initial:t,animate:n}),[Vq(t),Vq(n)])}function Vq(e){return Array.isArray(e)?e.join(` `):e}var Hq;function Uq(){return(Uq=t((()=>{Hq=r(),Lq(),zq()})))()}var Wq;function Gq(){return(Gq=t((()=>{Wq=()=>({style:{},transform:{},transformOrigin:{},vars:{}})})))()}function Kq(e,t,n){for(let r in t)!xV(t[r])&&!JW(r,n)&&(e[r]=t[r])}function qq({transformTemplate:e},t){return(0,Xq.useMemo)(()=>{let n=Wq();return RW(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Jq(e,t){let n=e.style||{},r={};return Kq(r,n,e),Object.assign(r,qq(e,t)),r}function Yq(e,t){let n={},r=Jq(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Xq;function Zq(){return(Zq=t((()=>{SV(),YW(),zW(),Xq=r(),Gq()})))()}var Qq;function $q(){return($q=t((()=>{Gq(),Qq=()=>({...Wq(),attrs:{}})})))()}function eJ(e,t,n,r){let i=(0,tJ.useMemo)(()=>{let n=Qq();return aG(n,t,uG(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};Kq(t,e.style,e),i.style={...t,...i.style}}return i}var tJ;function nJ(){return(nJ=t((()=>{sG(),dG(),tJ=r(),Zq(),$q()})))()}function rJ(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||iJ.has(e)}var iJ;function aJ(){return(aJ=t((()=>{iJ=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`))})))()}function oJ(e,t){return e.startsWith(`on`)?!rJ(e):t?.(e)??!rJ(e)}function sJ(e,t,n,r){let i={};for(let a in e)(a!==`values`||typeof e.values!=`object`)&&(xV(e[a])||(oJ(a,r)||n===!0&&rJ(a)||!t&&!rJ(a)||e.draggable&&a.startsWith(`onDrag`))&&(i[a]=e[a]));return i}function cJ(){return(cJ=t((()=>{SV(),aJ()})))()}var lJ;function uJ(){return(uJ=t((()=>{lJ=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`]})))()}function dJ(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(lJ.indexOf(e)>-1||/[A-Z]/u.test(e))}function fJ(){return(fJ=t((()=>{uJ()})))()}function pJ(e,t,n,{latestValues:r},i,a=!1,o,s){let c=(o??dJ(e)?eJ:Yq)(t,r,i,e),l=sJ(t,typeof e==`string`,a,s),u=e===mJ.Fragment?{}:{...l,...c,ref:n},{children:d}=t,f=(0,mJ.useMemo)(()=>xV(d)?d.get():d,[d]);return(0,mJ.createElement)(e,{...u,children:f})}var mJ;function hJ(){return(hJ=t((()=>{SV(),mJ=r(),Zq(),nJ(),cJ(),fJ()})))()}function gJ({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:_J(n,r,i,e),renderState:t()}}function _J(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=OK(a[e]);let{initial:o,animate:s}=e,c=WU(e),l=GU(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!zU(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=uV(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var vJ,yJ;function bJ(){return(bJ=t((()=>{kK(),KU(),vJ=r(),Lq(),bF(),fF(),yJ=e=>(t,n)=>{let r=(0,vJ.useContext)(Iq),i=(0,vJ.useContext)(yF),a=()=>gJ(e,t,r,i);return n?a():uF(a)}})))()}var xJ;function SJ(){return(SJ=t((()=>{ZW(),bJ(),Gq(),xJ=yJ({scrapeMotionValuesFromProps:XW,createRenderState:Wq})})))()}var CJ;function wJ(){return(wJ=t((()=>{hG(),bJ(),$q(),CJ=yJ({scrapeMotionValuesFromProps:mG,createRenderState:Qq})})))()}var TJ;function EJ(){return(EJ=t((()=>{TJ=Symbol.for(`motionComponentSymbol`)})))()}function DJ(e,t,n){let r=(0,OJ.useRef)(n);(0,OJ.useInsertionEffect)(()=>{r.current=n});let i=(0,OJ.useRef)(null);return(0,OJ.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`){if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n)}else a&&(a.current=n)},[t])}var OJ;function kJ(){return(kJ=t((()=>{OJ=r()})))()}var AJ,jJ;function MJ(){return(MJ=t((()=>{AJ=r(),jJ=(0,AJ.createContext)({})})))()}function NJ(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function PJ(e,t,n,r,i,a){let{visualElement:o}=(0,LJ.useContext)(Iq),s=(0,LJ.useContext)(Eq),c=(0,LJ.useContext)(yF),l=(0,LJ.useContext)(bq),u=l.reducedMotion,d=l.skipAnimations,f=(0,LJ.useRef)(null),p=(0,LJ.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,LJ.useContext)(jJ);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&FJ(f.current,n,i,h);let g=(0,LJ.useRef)(!1);(0,LJ.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[kV],v=(0,LJ.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return gF(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,LJ.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function FJ(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:IJ(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&NJ(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function IJ(e){if(e)return e.options.allowProjection===!1?IJ(e.parent):e.projection}var LJ;function RJ(){return(RJ=t((()=>{AV(),LJ=r(),Dq(),xq(),Lq(),bF(),MJ(),_F()})))()}function zJ(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&Nq(r);let a=n?n===`svg`:dJ(e),o=a?CJ:xJ;function s(n,s){let c,l={...(0,WJ.useContext)(bq),...n,layoutId:BJ(n)},{isStatic:u,isValidProp:d}=l,f=Bq(n),p=o(n,u);if(!u&&typeof window<`u`){VJ(l,r);let t=HJ(l);c=t.MeasureLayout,f.visualElement=PJ(e,p,l,i,t.ProjectionNode,a)}return(0,UJ.jsxs)(Iq.Provider,{value:f,children:[c&&f.visualElement?(0,UJ.jsx)(c,{visualElement:f.visualElement,...l}):null,pJ(e,n,DJ(p,f.visualElement,s),p,u,t,a,d)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,WJ.forwardRef)(s);return c[TJ]=e,c}function BJ({layoutId:e}){let t=(0,WJ.useContext)(cF).id;return t&&e!==void 0?t+`-`+e:e}function VJ(e,t){(0,WJ.useContext)(Eq).strict}function HJ(e){let{drag:t,layout:n}=kq();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}var UJ,WJ;function GJ(){return(GJ=t((()=>{UJ=G(),WJ=r(),lF(),Dq(),xq(),Lq(),Uq(),hJ(),fJ(),SJ(),wJ(),Mq(),Pq(),EJ(),kJ(),RJ()})))()}function KJ(e,t){if(typeof Proxy>`u`)return zJ;let n=new Map,r=(n,r)=>zJ(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,zJ(a,void 0,e,t)),n.get(a))})}function qJ(){return(qJ=t((()=>{GJ()})))()}var JJ,YJ;function XJ(){return(XJ=t((()=>{_G(),eG(),JJ=r(),fJ(),YJ=(e,t)=>t.isSVG??dJ(e)?new gG(t):new $W(t,{allowProjection:e!==JJ.Fragment})})))()}var ZJ;function QJ(){return(QJ=t((()=>{uW(),kG(),ZJ=class extends lW{constructor(e){super(e),e.animationState||=CG(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();zU(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}})))()}var $J,eY;function tY(){return(tY=t((()=>{uW(),fV(),$J=0,eY=class extends lW{constructor(){super(...arguments),this.id=$J++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=dV(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}})))()}var nY;function rY(){return(rY=t((()=>{QJ(),tY(),nY={animation:{Feature:ZJ},exit:{Feature:eY}}})))()}function iY(e){return{point:{x:e.pageX,y:e.pageY}}}var aY;function oY(){return(oY=t((()=>{WH(),aY=e=>t=>UH(t)&&e(t,iY(t))})))()}function sY(e,t,n,r){return xK(e,t,aY(n),r)}function cY(){return(cY=t((()=>{oY()})))()}var lY;function uY(){return(uY=t((()=>{lY=({current:e})=>e?e.ownerDocument.defaultView:null})))()}function dY(e,t){let n=fY(e.x,t.x),r=fY(e.y,t.y);return Math.sqrt(n**2+r**2)}var fY;function pY(){return(pY=t((()=>{fY=(e,t)=>Math.abs(e-t)})))()}function mY(e,t){return t?{point:t(e.point)}:e}function hY(e,t){return{x:e.x-t.x,y:e.y-t.y}}function gY({point:e},t){return{point:e,delta:hY(e,vY(t)),offset:hY(e,_Y(t)),velocity:yY(t,.1)}}function _Y(e){return e[0]}function vY(e){return e[e.length-1]}function yY(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=vY(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>GF(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>GF(t)*2&&(r=e[1]);let a=KF(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}var bY,xY;function SY(){return(SY=t((()=>{RI(),WH(),BF(),qF(),cY(),oY(),pY(),bY=new Set([`auto`,`scroll`]),xY=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=mY(this.lastRawMoveEventInfo,this.transformPagePoint));let e=gY(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=dY(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=II;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=mY(t,this.transformPagePoint),PI.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=gY(e.type===`pointercancel`?this.lastMoveEventInfo:mY(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!UH(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=mY(iY(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=II;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,gY(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=zF(sY(this.contextWindow,`pointermove`,this.handlePointerMove,d),sY(this.contextWindow,`pointerup`,this.handlePointerUp,d),sY(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(bY.has(e.overflowX)||bY.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),PI.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),FI(this.updatePoint)}}})))()}function CY(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?YL(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?YL(n,e,r.max):Math.min(e,n)),e}function wY(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function TY(e,{top:t,left:n,bottom:r,right:i}){return{x:wY(e.x,n,i),y:wY(e.y,t,r)}}function EY(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function DY(e,t){return{x:EY(e.x,t.x),y:EY(e.y,t.y)}}function OY(e,t){let n=.5,r=NG(e),i=NG(t);return i>r?n=VF(t.min,t.max-r,e.min):r>i&&(n=VF(e.min,e.max-i,t.min)),CF(0,1,n)}function kY(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}function AY(e=NY){return e===!1?e=0:e===!0&&(e=NY),{x:jY(e,`left`,`right`),y:jY(e,`top`,`bottom`)}}function jY(e,t,n){return{min:MY(e,t),max:MY(e,n)}}function MY(e,t){return typeof e==`number`?e:e[t]||0}var NY;function PY(){return(PY=t((()=>{XL(),GG(),HF(),wF(),NY=.35})))()}function FY(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function IY(e,t,n){let r=CU(e,FY(n)),i=CU(t,FY(n));return()=>{r(),i()}}function LY(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function RY(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var zY,BY;function VY(){return(VY=t((()=>{IU(),RI(),NW(),EV(),rV(),XL(),FH(),CL(),GG(),wU(),YH(),DF(),cY(),oY(),uY(),SY(),PY(),zY=new WeakMap,BY=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=FU(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(iY(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=PH(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),cK(e=>{let t=this.getAxisMotionValue(e).get()||0;if(yL.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=NG(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&PI.update(()=>i(e,t),!1,!0),TV(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=RY(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&PI.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new xY(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:lY(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&PI.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!LY(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=CY(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&NJ(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?TY(n.layoutBox,e):!1,this.elastic=AY(t),r!==this.constraints&&!NJ(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&cK(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=kY(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!NJ(e))return!1;let n=e.current;EF(n!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",`drag-constraints-ref`);let{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=MW(n,r.root,this.visualElement.getTransformPagePoint()),a=DY(r.layout.layoutBox,i);if(t){let e=t(fW(a));this.hasMutatedConstraints=!!e,e&&(a=dW(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=cK(o=>{if(!LY(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return TV(this.visualElement,e),n.start(nV(e,n,0,t,this.visualElement,!1))}stopAnimation(){cK(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){cK(t=>{let{drag:n}=this.getProps();if(!LY(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-YL(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!NJ(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};cK(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=OY({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),cK(t=>{if(!LY(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(YL(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;zY.set(this.visualElement,this);let e=this.visualElement.current,t=sY(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&KH(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();NJ(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=IY(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),PI.read(r);let o=xK(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(cK(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=NY,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}}})))()}var HY;function UY(){return(UY=t((()=>{uW(),RF(),VY(),HY=class extends lW{constructor(e){super(e),this.removeGroupControls=LF,this.removeListeners=LF,this.controls=new BY(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||LF}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}})))()}var WY,GY;function KY(){return(KY=t((()=>{uW(),RI(),RF(),cY(),uY(),SY(),WY=e=>(t,n)=>{e&&PI.update(()=>e(t,n),!1,!0)},GY=class extends lW{constructor(){super(...arguments),this.removePointerDownListener=LF}onPointerDown(e){this.session=new xY(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:lY(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:WY(e),onStart:WY(t),onMove:WY(n),onEnd:(e,t)=>{delete this.session,r&&PI.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=sY(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}})))()}function qY(e){let[t,n]=Sq(),r=(0,YY.useContext)(cF);return(0,JY.jsx)(ZY,{...e,layoutGroup:r,switchLayoutGroup:(0,YY.useContext)(jJ),isPresent:t,safeToRemove:n})}var JY,YY,XY,ZY;function QY(){return(QY=t((()=>{JY=G(),NK(),RI(),AH(),YY=r(),wq(),lF(),MJ(),XY=!1,ZY=class extends YY.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),XY&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),MK.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),XY=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||PI.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),OH.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;XY=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}}})))()}var $Y;function eX(){return(eX=t((()=>{UY(),KY(),QY(),vq(),$Y={pan:{Feature:GY},drag:{Feature:HY,ProjectionNode:_q,MeasureLayout:qY}}})))()}function tX(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&PI.postRender(()=>i(t,iY(t)))}var nX;function rX(){return(rX=t((()=>{uW(),BH(),RI(),oY(),nX=class extends lW{mount(){let{current:e}=this.node;e&&(this.unmount=zH(e,(e,t)=>(tX(this.node,t,`Start`),e=>tX(this.node,e,`End`))))}unmount(){}}})))()}var iX;function aX(){return(aX=t((()=>{uW(),BF(),iX=class extends lW{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=zF(xK(this.node.current,`focus`,()=>this.onFocus()),xK(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}}})))()}function oX(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&PI.postRender(()=>i(t,iY(t)))}var sX;function cX(){return(cX=t((()=>{uW(),aU(),RI(),oY(),sX=class extends lW{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=rU(e,(e,t)=>(oX(this.node,t,`Start`),(e,{success:t})=>oX(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}}})))()}function lX({root:e,...t}){let n=e||document;fX.has(n)||fX.set(n,{});let r=fX.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(mX,{root:e,...t})),r[i]}function uX(e,t,n){let r=lX(t);return dX.set(e,n),r.observe(e),()=>{dX.delete(e),r.unobserve(e)}}var dX,fX,pX,mX;function hX(){return(hX=t((()=>{dX=new WeakMap,fX=new WeakMap,pX=e=>{let t=dX.get(e.target);t&&t(e)},mX=e=>{e.forEach(pX)}})))()}function gX({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var _X,vX;function yX(){return(yX=t((()=>{uW(),hX(),_X={some:0,all:1},vX=class extends lW{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:_X[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=uX(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(gX(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}})))()}var bX;function xX(){return(xX=t((()=>{rX(),aX(),cX(),yX(),bX={inView:{Feature:vX},tap:{Feature:sX},focus:{Feature:iX},hover:{Feature:nX}}})))()}var SX;function CX(){return(CX=t((()=>{vq(),QY(),SX={layout:{ProjectionNode:_q,MeasureLayout:qY}}})))()}var wX;function TX(){return(TX=t((()=>{rY(),eX(),xX(),CX(),wX={...nY,...bX,...$Y,...SX}})))()}var EX;function DX(){return(DX=t((()=>{XJ(),qJ(),TX(),EX=KJ(wX,YJ)})))()}function OX(){!XU.current&&QU();let[e]=(0,kX.useState)(YU.current);return e}var kX;function AX(){return(AX=t((()=>{ZU(),eW(),kX=r()})))()}var jX;function MX(){return(MX=t((()=>{DX(),AX(),jX=EX})))()}var NX,PX,FX;function IX(){return(IX=t((()=>{NX={instant:80,fast:140,base:200,slow:280,deliberate:360},PX={spin:900,shimmer:1600,progressBeam:1100},FX={standard:`cubic-bezier(0.2, 0, 0, 1)`,entrance:`cubic-bezier(0.05, 0.7, 0.1, 1)`,exit:`cubic-bezier(0.3, 0, 0.8, 0.15)`,linear:`linear`}})))()}function LX(){return(LX=t((()=>{l(),r(),qS(),IX(),gb(),G(),NX.deliberate/1e3,NX.deliberate*.7/1e3,NX.instant/1e3,u`
  position: fixed;
  inset: 0;
  z-index: var(--layer-overlay);
  background: var(--scrim);
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
  --dialog-edge-padding: var(--space-5);

  ${GS(`xs`)} {
    --dialog-edge-padding: var(--space-4);
  }
`,u`
    --dialog-padding: var(--dialog-edge-padding);
    --dialog-gap-below-header: var(--space-4);
    --dialog-close-clearance: 3.5rem;
  `,u`
    --dialog-padding: 0;
    --dialog-gap-below-header: 0;
    --dialog-close-clearance: 0px;
  `,u`
  flex: none;
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--dialog-edge-padding);
  padding-bottom: var(--space-4);

  &[data-has-title="true"] {
    border-bottom: 1px solid var(--color-clear-300);
  }

  /* Floats over the body so an untitled dialog does not spend a row on the close button. */
  &[data-has-title="false"] {
    position: absolute;
    top: var(--space-3);
    inset-inline-end: var(--space-3);
    z-index: 1;
    padding: 0;
  }

  &[data-has-title="false"] > button {
    margin: 0;
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
  gap: var(--space-2);
  min-height: var(--space-6);
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
  padding: var(--dialog-padding);

  &[data-below-header="true"] {
    padding-top: var(--dialog-gap-below-header);
  }

  &[data-close-overlay="true"] {
    padding-inline-end: var(--dialog-close-clearance);
  }
`,u`
  flex: none;
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: var(--space-4) var(--dialog-edge-padding) var(--dialog-edge-padding);
  border-top: 1px solid var(--color-clear-300);

  ${GS(`xs`)} {
    flex-direction: column;

    & > * {
      width: 100%;
    }
  }
`,u`
  flex: 1 1 0;

  /* On a column main axis that zero basis becomes a zero height and overrides the button's own,
     leaving an action the height of its text. */
  ${GS(`xs`)} {
    flex: 0 0 auto;
  }
`})))()}function RX(){return(RX=t((()=>{l(),r(),LX(),TP(),G(),u`
  margin-bottom: calc(var(--space-4) + var(--space-2));
`})))()}function zX(){return(zX=t((()=>{l(),r(),G(),u`
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
`})))()}var BX,VX,HX,UX,WX,GX,KX;function qX(){return(qX=t((()=>{l(),Ct(),r(),BX=G(),VX=u`
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
`,HX={neutral:{icon:kt,css:u`
      border-color: var(--color-gray-400);
      background: var(--color-gray-50);
      --infobox-icon: var(--color-gray-500);
    `},info:{icon:Ot,css:u`
      border-color: var(--color-blue-500);
      background: var(--color-blue-25);
      --infobox-icon: var(--color-blue-500);
    `},success:{icon:St,css:u`
      border-color: var(--color-green-600);
      background: var(--color-green-50);
      --infobox-icon: var(--color-green-600);
    `},warning:{icon:Tt,css:u`
      border-color: var(--color-yellow-700);
      background: var(--color-yellow-100);
      /* The yellow ramp is not contrast-safe as ink, so the icon stays grey. */
      --infobox-icon: var(--color-gray-700);
    `},danger:{icon:Tt,css:u`
      border-color: var(--color-crimson-600);
      background: var(--color-crimson-75);
      --infobox-icon: var(--color-crimson-600);
    `}},UX=u`
  display: inline-flex;
  align-items: center;
  flex: none;
  color: var(--infobox-icon);

  @media (max-width: ${479.98}px) {
    float: left;
    margin-right: var(--space-3);
  }
`,WX=u`
  flex: 1;
`,GX=u`
  display: block;
  margin-bottom: var(--space-2);
  color: var(--color-gray-700);
  font-weight: 600;
`,KX=({tone:e=`info`,heading:t,children:n,announce:r=!1,className:i,"data-testid":a})=>{let{icon:o,css:s}=HX[e];return(0,BX.jsxs)(`div`,{className:c(VX,s,i),role:r?e===`warning`||e===`danger`?`alert`:`status`:void 0,"data-testid":a,children:[(0,BX.jsx)(`span`,{className:UX,"aria-hidden":`true`,children:(0,BX.jsx)(o,{})}),(0,BX.jsxs)(`div`,{className:WX,children:[t?(0,BX.jsx)(`strong`,{className:GX,children:t}):null,n]})]})}})))()}function JX(){return(JX=t((()=>{l(),$j(),r(),gb(),hT(),Yw(),G(),u`
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
`})))()}function YX(e,t,n){return n<=t?0:Math.min(100,Math.max(0,(e-t)/(n-t)*100))}var XX,ZX,QX,$X,eZ,tZ,nZ,rZ,iZ,aZ,oZ,sZ;function cZ(){return(cZ=t((()=>{l(),r(),x_(),XX=G(),ZX={neutral:u`
    background: var(--color-gray-400);
  `,success:u`
    background: var(--color-green-600);
  `,warning:u`
    background: var(--color-yellow-700);
  `,danger:u`
    background: var(--color-crimson-700);
  `},QX=u`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`,$X=u`
  display: flex;
  justify-content: space-between;
  gap: var(--space-3);
  font-size: var(--font-size-1);
  color: var(--color-gray-600);
`,eZ=u`
  color: var(--color-gray-700);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`,tZ=u`
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: var(--color-gray-100);
  overflow: hidden;
`,nZ=`div`,rZ=u`
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: 999px;
  transition: width 0.3s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,iZ=u`
  overflow: visible;
`,aZ=u`
  position: absolute;
  top: -2px;
  bottom: -2px;
  width: 2px;
  background: var(--color-gray-600);
`,oZ=({as:e,className:t,fillPct:n,thresholdPct:r,tickClassName:i,tone:a})=>(0,XX.jsxs)(e,{className:t,"aria-hidden":`true`,children:[(0,XX.jsx)(`span`,{className:c(rZ,ZX[a],u`
          width: ${n}%;
        `)}),r===null?null:(0,XX.jsx)(`span`,{className:c(i,u`
            left: ${r}%;
          `)})]}),sZ=({value:e,minValue:t=0,maxValue:n,label:r,valueLabel:i,threshold:a,tone:o=`neutral`,kind:s=`measure`,showLabel:l=!0,className:u,"data-testid":d})=>{let{progressBarProps:f,labelProps:p}=b_({label:r,value:e,minValue:t,maxValue:n,...Y({valueLabel:i}),...l?{}:{"aria-label":r}}),m=YX(e,t,n),h=typeof a==`number`?YX(a,t,n):null;return(0,XX.jsxs)(`div`,{...f,role:s===`progress`?`progressbar`:`meter`,className:c(QX,u),"data-testid":d,children:[l?(0,XX.jsxs)(`div`,{className:$X,children:[(0,XX.jsx)(`span`,{...p,children:r}),i?(0,XX.jsx)(`span`,{className:eZ,children:i}):null]}):null,(0,XX.jsx)(oZ,{as:nZ,className:c(tZ,h!==null&&iZ),fillPct:m,thresholdPct:h,tickClassName:aZ,tone:o})]})},u`
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
`})))()}function lZ(){return(lZ=t((()=>{l(),Ct(),r(),iF(),VC(),lT(),hT(),Yw(),G(),u`
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
`})))()}function uZ(){return(uZ=t((()=>{l(),Ct(),r(),JX(),dt(),G(),u`
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
`})))()}function dZ(){return(dZ=t((()=>{l(),r(),gb(),hT(),G(),u`
  font-weight: 700;
`,u`
  padding: var(--space-3) var(--space-4);
  max-width: 320px;
  font-size: var(--font-size-1);
  color: var(--color-gray-700);
  line-height: 1.4;
`})))()}var fZ,pZ;function mZ(){return(mZ=t((()=>{Ct(),fZ={done:`success`,current:`info`,"action-needed":`warning`,failed:`danger`,superseded:`neutral`,upcoming:`neutral`},pZ={done:St,current:bt,"action-needed":Tt,failed:Et,superseded:Dt,upcoming:null}})))()}var hZ,gZ,_Z;function vZ(){return(vZ=t((()=>{r(),rF(),mZ(),hZ=G(),gZ={default:14,compact:12},_Z=({state:e,children:t,size:n=`default`,className:r,"data-testid":i})=>{let a=pZ[e],o=a?(0,hZ.jsx)(a,{size:gZ[n]}):void 0;return(0,hZ.jsx)(nF,{tone:fZ[e],size:n,...Ny(a,{icon:o}),...Ny(r,{className:r}),"data-testid":i,children:t})}})))()}var yZ,bZ,xZ,SZ,CZ,wZ;function TZ(){return(TZ=t((()=>{l(),r(),mZ(),yZ=G(),bZ=24,xZ=u`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin: 0;
  font-size: var(--font-size-4);
  font-weight: 600;
  line-height: 1.2;
`,SZ={done:u`
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
  `},CZ=u`
  display: inline-flex;
  align-items: center;
  flex: none;
`,wZ=({state:e,children:t,className:n})=>{let r=pZ[e];return(0,yZ.jsxs)(`p`,{className:c(xZ,SZ[e],n),children:[r?(0,yZ.jsx)(`span`,{className:CZ,"aria-hidden":`true`,children:(0,yZ.jsx)(r,{size:bZ})}):null,(0,yZ.jsx)(`span`,{children:t})]})}})))()}function EZ(){return(EZ=t((()=>{l(),r(),G(),u`
  white-space: nowrap;
`,u`
  white-space: nowrap;
  font-size: var(--font-size-1);
  color: var(--color-gray-500);
`})))()}function DZ(e){let t=Math.min(...e),n=Math.max(...e)-t||1,r=VZ/(e.length-1);return e.map((e,i)=>`${i*r},${HZ-(e-t)/n*HZ}`).join(` `)}var OZ,kZ,AZ,jZ,MZ,NZ,PZ,FZ,IZ,LZ,RZ,zZ,BZ,VZ,HZ,UZ;function WZ(){return(WZ=t((()=>{l(),Ct(),r(),OZ=G(),kZ=u`
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
`,AZ={neutral:void 0,success:u`
    border-color: var(--color-green-100);
    background: var(--color-green-75);
  `},jZ={neutral:void 0,success:u`
    color: var(--color-green-700);
  `},MZ=u`
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
`,NZ=u`
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  display: inline-flex;
  color: var(--color-gray-400);
`,PZ=u`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  /* Room for the corner arrow so it never overlaps a wide value. */
  padding-right: var(--space-5);
`,FZ=u`
  font-size: var(--font-size-5);
  font-weight: 700;
  line-height: 1;
  color: var(--color-gray-700);
  font-variant-numeric: tabular-nums;
`,IZ=u`
  color: var(--color-crimson-700);
`,LZ=u`
  font-size: var(--font-size-1);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`,RZ={positive:u`
    color: var(--color-green-700);
  `,negative:u`
    color: var(--color-crimson-700);
  `,neutral:u`
    color: var(--color-gray-500);
  `},zZ=u`
  flex: none;
  width: 4rem;
  height: 1.25rem;
  color: var(--color-gray-400);
`,BZ=u`
  font-size: var(--font-size-1);
  color: var(--color-gray-500);
`,VZ=64,HZ=20,UZ=({label:e,value:t,alertWhenNonZero:n=!1,tone:r=`neutral`,href:i,ariaLabel:a,delta:o,deltaTone:s=`neutral`,trend:l,className:u,"data-testid":d})=>{let f=n&&typeof t==`number`&&t>0,p=c(kZ,AZ[r],i&&MZ,u),m=(0,OZ.jsxs)(OZ.Fragment,{children:[(0,OZ.jsxs)(`span`,{className:PZ,children:[(0,OZ.jsx)(`span`,{className:c(FZ,jZ[r],f&&IZ),children:t}),o===void 0?null:(0,OZ.jsx)(`span`,{className:c(LZ,RZ[s]),children:o}),l&&l.length>1?(0,OZ.jsx)(`svg`,{className:zZ,viewBox:`0 0 ${VZ} ${HZ}`,"aria-hidden":`true`,children:(0,OZ.jsx)(`polyline`,{points:DZ(l),fill:`none`,stroke:`currentColor`,strokeWidth:1.5,strokeLinecap:`round`,strokeLinejoin:`round`})}):null]}),(0,OZ.jsx)(`span`,{className:BZ,children:e})]});return i?(0,OZ.jsxs)(`a`,{className:p,href:i,"aria-label":a,"data-testid":d,children:[m,(0,OZ.jsx)(`span`,{className:NZ,"aria-hidden":`true`,children:(0,OZ.jsx)(wt,{size:16})})]}):(0,OZ.jsx)(`div`,{className:p,"aria-label":a,role:a?`group`:void 0,"data-testid":d,children:m})}})))()}function GZ(e,t){let{min:n,max:r,gap:i}=YZ[t],a=`(100% - ${e-1} * ${i}) / ${e}`;return u`
    gap: ${i};
    /* The percentage floor and the tiles' min-width keep the column count out of the list's
       intrinsic width, which grid and flex ancestors pass on rather than shrink below. */
    grid-template-columns: repeat(auto-fill, minmax(max(${n}, ${a}), 1fr));
    max-width: calc(${e} * ${r} + (${e} - 1) * ${i});

    > li {
      min-width: 0;
    }
  `}var KZ,qZ,JZ,YZ,XZ,ZZ;function QZ(){return(QZ=t((()=>{l(),KZ=e(r()),qZ=G(),JZ=4,YZ={default:{min:`10rem`,max:`18rem`,gap:`var(--space-4)`},compact:{min:`9rem`,max:`13rem`,gap:`var(--space-3)`}},XZ=u`
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
`,ZZ=({children:e,ariaLabel:t,maxColumns:n=JZ,size:r=`default`})=>(0,qZ.jsx)(`ul`,{className:c(XZ,GZ(n,r)),role:`list`,"aria-label":t,children:KZ.Children.map(e,(e,t)=>(0,qZ.jsx)(`li`,{children:e},t))})})))()}function $Z(e){return u`
    left: ${e};
  `}var eQ,tQ,nQ,rQ,iQ,aQ,oQ,sQ,cQ,lQ,uQ,dQ,fQ,pQ,mQ,hQ,gQ,_Q,vQ,yQ,bQ,xQ,SQ,CQ,wQ,TQ,EQ,DQ,OQ,kQ,AQ,jQ,MQ,NQ,PQ,FQ,IQ;function LQ(){return(LQ=t((()=>{l(),eQ=`3rem`,tQ=u`
  position: relative;
  max-width: 100%;
  min-width: 0;
`,nQ=u`
  overflow-x: auto;
`,rQ=u`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-2);
`,iQ=u`
  table-layout: fixed;
`,aQ=u`
  font-size: var(--font-size-1);
`,oQ=u`
  text-align: start;
  padding-bottom: var(--space-3);
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
`,sQ=u`
  text-align: start;
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-clear-300);
  vertical-align: top;
`,cQ=u`
  padding: var(--space-2) var(--space-3);
`,lQ=u`
  color: var(--color-gray-500);
  font-weight: 600;
  white-space: nowrap;
`,uQ=u`
  color: var(--color-gray-700);
  /* Unlike "anywhere", leaves min-content alone, so auto layout never squeezes a short cell
     (a link, a date) into mid-word breaks. */
  overflow-wrap: break-word;
`,dQ=u`
  overflow-wrap: anywhere;
`,fQ=u`
  white-space: nowrap;
`,pQ=u`
  white-space: normal;
`,mQ=u`
  color: var(--color-gray-500);
`,hQ=u`
  width: auto;
`,gQ={start:u`
    text-align: start;
  `,center:u`
    text-align: center;
  `,end:u`
    text-align: end;
    font-variant-numeric: tabular-nums;
  `},_Q=u`
  & tbody tr:hover > * {
    background: var(--color-clear-100);
  }
`,vQ=u`
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
`,yQ=u`
  left: 0;
  background: linear-gradient(
    to right,
    var(--table-fade-color, var(--color-clear-50)),
    transparent
  );
`,bQ=u`
  right: 0;
  background: linear-gradient(to left, var(--table-fade-color, var(--color-clear-50)), transparent);
`,xQ=u`
  opacity: 1;
`,SQ=u`
  position: sticky;
  z-index: 1;
  background: var(--table-sticky-bg, var(--color-clear-50));
`,CQ=u`
  box-shadow: 6px 0 6px -6px rgba(10, 15, 23, 0.25);
`,wQ=u`
  /* An auto table layout treats a width as a preference and shrinks the column to its content
     when the row is tight, which slides the pinned column off its sticky offset and over the
     neighbouring column. A min-width is the floor that offset needs. */
  width: ${eQ};
  min-width: ${eQ};
  padding-right: 0;
`,TQ=u`
  width: ${eQ};
`,EQ=u`
  position: relative;
  display: inline-flex;
  cursor: pointer;

  &[data-disabled="true"] {
    cursor: not-allowed;
  }

  & input:focus-visible + span {
    box-shadow: 0 0 0 var(--focus-ring-width) rgba(8, 69, 122, 0.18);
  }
`,DQ=u`
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
`,OQ=u`
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
`,kQ=u`
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
`,AQ=u`
  display: inline-flex;
  transition: transform 0.15s ease;

  &[data-expanded="true"] {
    transform: rotate(90deg);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,jQ=u`
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-clear-300);
  background: var(--color-clear-100);
  color: var(--color-gray-700);
`,MQ=u`
  padding: var(--space-4) var(--space-4) var(--space-2);
  border-bottom: 1px solid var(--color-clear-300);
  color: var(--color-gray-700);
  font-size: var(--font-size-1);
  font-weight: 600;
  text-align: start;
`,NQ=u`
  display: none;
`,PQ=u`
  display: none;
`,FQ=u`
  display: contents;
`,IQ=u`
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
`})))()}function RQ(e){return typeof e==`number`?`${e}px`:e}function zQ(e){return u`
    width: ${e};
  `}function BQ(e){return u`
    min-width: ${RQ(e)};
  `}function VQ(e){return e.width!==void 0||e.grow===void 0||e.grow===!1?0:e.grow===!0?1:Math.max(e.grow,0)}function HQ(e){return e.align===void 0?void 0:gQ[e.align]}function UQ(e){if(e.nowrap!==void 0)return e.nowrap?fQ:pQ}function WQ(e){let{onSort:t,sortDirection:n}=e;return(0,$.jsxs)(`button`,{className:DQ,onClick:()=>t(n===`ascending`?`descending`:`ascending`),type:`button`,children:[(0,$.jsx)(`span`,{children:e.header}),(0,$.jsx)(`span`,{"aria-hidden":`true`,className:OQ,"data-direction":n??void 0})]})}function GQ(e){return e===0?`0`:`calc(${eQ} * ${e})`}function KQ({isChecked:e,isDisabled:t=!1,isIndeterminate:n=!1,label:r,onChange:i}){let a=(0,JQ.useRef)(null);return(0,JQ.useEffect)(()=>{a.current!==null&&(a.current.indeterminate=n)},[n]),(0,$.jsxs)(`label`,{className:EQ,"data-disabled":t?`true`:`false`,children:[(0,$.jsx)(`input`,{"aria-label":r,checked:e,className:bS,disabled:t,onChange:e=>i(e.target.checked),ref:a,type:`checkbox`}),(0,$.jsxs)(`span`,{"aria-hidden":`true`,className:hS(YQ,XQ),"data-disabled":t?`true`:`false`,"data-indeterminate":n?`true`:`false`,"data-selected":e?`true`:`false`,children:[(0,$.jsx)(`span`,{className:c(kS,jS,e&&!n&&AS)}),(0,$.jsx)(`span`,{className:c(kS,MS,n&&AS)})]})]})}function qQ({columns:e,rows:t,rowKey:n,caption:r,showCaption:a=!1,labelledBy:o,rowGroup:s,density:l=`comfortable`,emptyState:u,overflowCue:d=!0,stickyFirstColumn:f=!1,responsive:p,rowHover:m=!1,expandableRow:h,selection:g,className:_,"data-testid":v}){let{t:y}=i(`shared-module`),b=(0,JQ.useRef)(null),x=(0,JQ.useId)(),[S,C]=(0,JQ.useState)(()=>new Set),[w,T]=(0,JQ.useState)({start:!1,end:!1}),E=p===`stack`,D=g!==void 0,O=h!==void 0,k=+!!D+ +!!O,A=e.length+k,j=l===`compact`,M=d||f;(0,JQ.useEffect)(()=>{let e=b.current;if(!M||e===null)return;let t=()=>{let t=Math.abs(e.scrollLeft),n=e.scrollWidth-e.clientWidth;T(e=>{let r=t>1,i=n-t>1;return e.start===r&&e.end===i?e:{start:r,end:i}})};t(),e.addEventListener(`scroll`,t,{passive:!0});let n=typeof ResizeObserver>`u`?null:new ResizeObserver(t);n?.observe(e);let r=e.firstElementChild;return r!==null&&n?.observe(r),()=>{e.removeEventListener(`scroll`,t),n?.disconnect()}},[M]);let N=e.some(e=>e.width!==void 0),P=e.map(e=>VQ(e)),F=P.reduce((e,t)=>e+t,0),I=new Set(P.filter(e=>e>0)).size>1,L=e.flatMap(e=>e.width===void 0?[]:[RQ(e.width)]),R=N||F>0||k>0,z=(e,t)=>{if(e.width!==void 0)return zQ(RQ(e.width));let n=P[t]??0;if(n!==0)return N?I?zQ(`calc((100% - (${L.join(` + `)})) * ${n} / ${F})`):hQ:zQ(`${Number((n/F*100).toFixed(4))}%`)},B=e.map((e,t)=>({col:z(e,t),cell:c(N||e.minWidth===void 0?void 0:BQ(e.minWidth),UQ(e),e.breakAnywhere?dQ:void 0,HQ(e))})),V=e=>f?c(SQ,$Z(GQ(e)),w.start&&CQ):void 0,ee=V(0),te=V(+!!D),ne=V(k),H=c(sQ,j&&cQ),re=u===void 0?y(`table.noRows`):u,ie=E?IQ:void 0,U=new Set(g?.selectedKeys??[]),ae=t.flatMap((e,t)=>g?.isRowSelectable?.(e)??!0?[String(n(e,t))]:[]),oe=ae.filter(e=>U.has(e)).length,se=ae.length>0&&oe===ae.length,ce=e=>{let t=new Set(U);for(let n of ae)e?t.add(n):t.delete(n);g?.onChange(t)},le=(e,t)=>{let n=new Set(U);t?n.add(e):n.delete(e),g?.onChange(n)},ue=e=>{C(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},de=(e,t)=>E?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,className:NQ,"data-table-stack-label":`true`,children:e.header}),(0,$.jsx)(`span`,{className:FQ,"data-table-stack-value":`true`,children:e.cell(t)})]}):e.cell(t);return(0,$.jsxs)(`div`,{className:c(tQ,ie,_),"data-testid":v,children:[(0,$.jsx)(`div`,{className:nQ,ref:b,children:(0,$.jsxs)(`table`,{className:c(rQ,N&&iQ,j&&aQ,m&&_Q),role:E?`table`:void 0,"aria-labelledby":o,children:[o===void 0?a?(0,$.jsx)(`caption`,{className:oQ,children:r}):(0,$.jsx)(ge,{elementType:`caption`,children:r}):null,R?(0,$.jsxs)(`colgroup`,{children:[D?(0,$.jsx)(`col`,{className:TQ}):null,O?(0,$.jsx)(`col`,{className:TQ}):null,B.map((e,t)=>(0,$.jsx)(`col`,{className:e.col},t))]}):null,(0,$.jsx)(`thead`,{role:E?`rowgroup`:void 0,children:(0,$.jsxs)(`tr`,{role:E?`row`:void 0,children:[D?(0,$.jsx)(`th`,{className:c(H,lQ,wQ,ee),role:E?`columnheader`:void 0,scope:`col`,children:(0,$.jsx)(KQ,{isChecked:se,isDisabled:ae.length===0,isIndeterminate:oe>0&&!se,label:g.selectAllLabel??y(`table.selectAllRows`),onChange:ce})}):null,O?(0,$.jsx)(`th`,{className:c(H,lQ,wQ,te),role:E?`columnheader`:void 0,scope:`col`,children:(0,$.jsx)(ge,{elementType:QQ,children:y(`table.detailsColumn`)})}):null,e.map((e,t)=>(0,$.jsx)(`th`,{"aria-sort":e.onSort===void 0?void 0:e.sortDirection??`none`,className:c(H,lQ,B[t]?.cell,t===0?ne:void 0),role:E?`columnheader`:void 0,scope:`col`,children:e.onSort===void 0?e.header:WQ({...e,onSort:e.onSort})},t))]})}),(0,$.jsx)(`tbody`,{role:E?`rowgroup`:void 0,children:t.length===0?re===null?null:(0,$.jsx)(`tr`,{role:E?`row`:void 0,children:(0,$.jsx)(`td`,{className:c(H,uQ,mQ),colSpan:A,"data-table-detail":`true`,role:E?`cell`:void 0,children:re})}):t.map((r,i)=>{let a=n(r,i),o=h?.(r)??null,l=S.has(String(a)),u=`${x}-${i}`,d=s?.(r),f=i>0?t[i-1]:void 0,p=d!==void 0&&(f===void 0||s?.(f).key!==d.key);return(0,$.jsxs)(JQ.Fragment,{children:[p?(0,$.jsx)(`tr`,{"data-table-group":`true`,role:E?`row`:void 0,children:(0,$.jsx)(`th`,{className:MQ,colSpan:A,"data-table-group":`true`,role:E?`rowheader`:void 0,scope:`colgroup`,children:d.label})}):null,(0,$.jsxs)(`tr`,{"data-row-key":String(a),role:E?`row`:void 0,children:[D?(0,$.jsx)(`td`,{className:c(H,uQ,wQ,ee),"data-table-control":`true`,role:E?`cell`:void 0,children:(0,$.jsx)(KQ,{isChecked:U.has(String(a)),isDisabled:!(g.isRowSelectable?.(r)??!0),label:g.rowLabel?.(r)??y(`table.selectRow`),onChange:e=>le(String(a),e)})}):null,O?(0,$.jsx)(`td`,{className:c(H,uQ,wQ,te),"data-table-control":`true`,role:E?`cell`:void 0,children:o===null?null:(0,$.jsxs)(`button`,{"aria-controls":l?u:void 0,"aria-expanded":l,"aria-label":y(l?`table.collapseRow`:`table.expandRow`),className:kQ,"data-table-expand":`true`,onClick:()=>ue(String(a)),type:`button`,children:[(0,$.jsx)(`span`,{className:AQ,"data-expanded":l?`true`:`false`,children:(0,$.jsx)(ut,{direction:ZQ})}),E?(0,$.jsx)(`span`,{"aria-hidden":`true`,className:PQ,"data-table-expand-label":`true`,children:y(l?`table.collapseRow`:`table.expandRow`)}):null]})}):null,e.map((e,t)=>(0,$.jsx)(`td`,{className:c(H,uQ,B[t]?.cell,t===0?ne:void 0),role:E?`cell`:void 0,children:de(e,r)},t))]}),o!==null&&l?(0,$.jsx)(`tr`,{role:E?`row`:void 0,children:(0,$.jsx)(`td`,{className:c(jQ,j&&cQ),colSpan:A,"data-table-detail":`true`,id:u,role:E?`cell`:void 0,children:o})}):null]},a)})})]})}),d?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,className:c(vQ,yQ,w.start&&xQ)}),(0,$.jsx)(`span`,{"aria-hidden":`true`,className:c(vQ,bQ,w.end&&xQ)})]}):null]})}var JQ,$,YQ,XQ,ZQ,QQ;function $Q(){return($Q=t((()=>{l(),JQ=e(r()),ce(),a(),PS(),dt(),LQ(),$=G(),YQ=`md`,XQ=`checkbox`,ZQ=`right`,QQ=`span`})))()}function e$(){return(e$=t((()=>{l(),IX(),s`
  :root {
    /* sizing */
    --control-gap: var(--space-3);
    --control-radius: var(--radius-2);
    --surface-radius: var(--radius-3);

    --control-height-sm: var(--space-5);
    --control-height-md: var(--space-6);
    --control-height-lg: var(--space-7);

    --control-padding-x-sm: var(--space-3);
    --control-padding-x-md: var(--space-4);
    --control-padding-x-lg: var(--space-5);

    --font-size-sm: var(--font-size-2);
    --font-size-md: var(--font-size-2);
    --font-size-lg: var(--font-size-3);

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

    /* radii — controls sharpen, surfaces soften, the modal is the softest thing on screen */
    --radius-0: 0px;
    --radius-1: 4px;
    --radius-2: 6px;
    --radius-3: 8px;
    --radius-4: 12px;
    --radius-5: 16px;
    --radius-full: 9999px;

    /* elevation — one neutral shadow colour; each step layers a tight contact shadow with a
       wide ambient one. Never brand-tinted: a shadow is a light model, not a colour choice. */
    --shadow-rgb: 10 15 23;

    --elevation-0: none;
    --elevation-1:
      0 1px 2px rgb(var(--shadow-rgb) / 0.06),
      0 1px 3px rgb(var(--shadow-rgb) / 0.1);
    --elevation-2:
      0 2px 4px rgb(var(--shadow-rgb) / 0.06),
      0 4px 10px rgb(var(--shadow-rgb) / 0.1);
    --elevation-3:
      0 4px 8px rgb(var(--shadow-rgb) / 0.07),
      0 12px 24px rgb(var(--shadow-rgb) / 0.14);
    --elevation-4:
      0 8px 16px rgb(var(--shadow-rgb) / 0.08),
      0 24px 48px rgb(var(--shadow-rgb) / 0.18);
    --elevation-inset-pressed: inset 0 2px 4px rgb(var(--shadow-rgb) / 0.1);

    --scrim: rgb(var(--shadow-rgb) / 0.55);

    /* layering — every portalled overlay (dialog, popover, menu, listbox, tooltip) shares
       --layer-overlay; open order is DOM order, so the last-opened overlay paints on top
       without a token per overlay type. */
    --layer-below: -1;
    --layer-base: 0;
    --layer-raised: 1;
    --layer-sticky: 100;
    --layer-overlay: 1000;
    --layer-toast: 1100;

    /* motion — durations and easings live in motion.ts; nothing here moves longer than
       --duration-deliberate, and only the modal layer gets that */
    --duration-instant: ${NX.instant}ms;
    --duration-fast: ${NX.fast}ms;
    --duration-base: ${NX.base}ms;
    --duration-slow: ${NX.slow}ms;
    --duration-deliberate: ${NX.deliberate}ms;

    --duration-exit: calc(var(--duration-base) * 0.7);
    --duration-exit-slow: calc(var(--duration-slow) * 0.7);
    --duration-exit-deliberate: calc(var(--duration-deliberate) * 0.7);

    --duration-spin: ${PX.spin}ms;
    --duration-shimmer: ${PX.shimmer}ms;
    --duration-progress-beam: ${PX.progressBeam}ms;

    --ease-standard: ${FX.standard};
    --ease-entrance: ${FX.entrance};
    --ease-exit: ${FX.exit};
    --ease-linear: ${FX.linear};

    /* type families — declared here; the host app loads the actual font files. Every portalled
       surface must set font-family explicitly, since a portal to document.body escapes any
       styling scoped to the host's app container. Values mirror common's typography.ts;
       components cannot import that package directly. */
    --font-sans:
      "Inter Variable", Inter, system-ui, -apple-system, Cantarell, Ubuntu, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-heading:
      Raleway, system-ui, -apple-system, Cantarell, Ubuntu, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-mono:
      "Commit Mono", ui-monospace, "Source Code Pro", "Ubuntu Mono", SFMono-Regular, Menlo, Monaco,
      Consolas, "Liberation Mono", "Courier New", monospace;

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

    /* danger */
    --btn-danger-bg: var(--color-crimson-700);
    --btn-danger-fg: var(--color-clear-50);
    --btn-danger-border: var(--color-crimson-700);
    --btn-danger-bg-hover: var(--color-crimson-800);
    --btn-danger-bg-pressed: var(--color-crimson-900);

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
  }
`})))()}function t$(e,t){let n=t?.delayMs??250,r=t?.minVisibleMs??400,[i,a]=(0,n$.useState)(!1),o=(0,n$.useRef)(null);return(0,n$.useEffect)(()=>{if(e){let e=setTimeout(()=>{o.current=Date.now(),a(!0)},n);return()=>clearTimeout(e)}if(o.current===null)return;let t=r-(Date.now()-o.current);if(t<=0){o.current=null,a(!1);return}let i=setTimeout(()=>{o.current=null,a(!1)},t);return()=>clearTimeout(i)},[e,n,r]),i}var n$;function r$(){return(r$=t((()=>{n$=r(),IX()})))()}var i$,a$;function o$(){return(o$=t((()=>{i$=`query-initial-loading`,a$=`query-loading-spinner`})))()}function s$(e){if(typeof e==`object`&&e){let t=e,n=typeof t.status==`number`&&Number.isFinite(t.status)?t.status:null,r=typeof t.retryAfterSeconds==`number`&&Number.isFinite(t.retryAfterSeconds)?t.retryAfterSeconds:null,i=Array.isArray(t.issues)&&t.issues.length>0&&typeof t.issues[0]==`object`&&t.issues[0]!==null&&`message`in t.issues[0]&&typeof t.issues[0].message==`string`?t.issues[0].message:null;if(typeof t.userMessage==`string`&&t.userMessage.trim()!==``)return n===null?t.userMessage:`${t.userMessage} (HTTP ${n})`;if(typeof t.detail==`string`&&t.detail.trim()!==``)return n===429&&r!==null?`${t.detail} (retry in ${r}s)`:n===null?t.detail:`${t.detail} (HTTP ${n})`;if(typeof t.message==`string`&&t.message.trim()!==``)return n===null?t.message:`${t.message} (HTTP ${n})`;if(typeof t.title==`string`&&t.title.trim()!==``)return i?`${t.title}: ${i}`:n===null?t.title:`${t.title} (HTTP ${n})`}return e instanceof Error?e.message:String(e)}function c$(e,t){return e===void 0||t&&e===null?!0:Array.isArray(e)?e.length===0:!1}function l$(e,t){return e.some(e=>c$(e,t))}function u$(e){return e.data!==void 0}function d$(e){let t=u$(e);return{hasData:t,data:t?e.data:void 0,initialLoading:e.isFetching&&!t,refreshing:t&&e.isFetching,blockingError:e.isError&&!t,staleError:e.isError&&t,error:e.error??void 0}}function f$(e){return e.map(e=>e.data)}function p$(e){let t=e,n=t.length>0&&t.every(e=>e.data!==void 0),r=t.find(e=>e.data===void 0&&e.isError),i=n?t.find(e=>e.data!==void 0&&e.isError):void 0,a=r?.error??i?.error;return{allHaveData:n,dataTuple:n?f$(e):void 0,initialLoading:!n&&t.some(e=>e.data===void 0&&e.isFetching),refreshing:n&&t.some(e=>e.isFetching),blockingError:r!==void 0,staleError:n&&i!==void 0,error:a}}function m$(e){return u`
    min-height: ${e}px;
  `}function h$(e,t){return u`
    width: ${e};
    height: ${t}px;
  `}var g$,_$,v$,y$,b$,x$,S$,C$,w$,T$,E$,D$,O$,k$,A$,j$,M$,N$,P$,F$,I$,L$,R$,z$;function B$(){return(B$=t((()=>{l(),g$=o`
  0% { transform: translateX(-130%); }
  100% { transform: translateX(130%); }
`,_$=o`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(420%); }
`,v$=u`
  position: relative;
  width: 100%;
  min-width: 0;
`,y$=u`
  isolation: isolate;
`,b$=u`
  background: var(--query-skeleton-surface-light);
  border: var(--query-border-width) solid var(--query-skeleton-surface-border-light);
`,x$=u`
  background: var(--query-skeleton-surface-dark);
  border: var(--query-border-width) solid var(--query-skeleton-surface-border-dark);
`,S$=u`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: calc(var(--space-4) + var(--space-1));
`,C$=u`
  position: absolute;
  inset: 0;
  padding: calc(var(--space-4) + var(--space-1));
  display: grid;
  gap: calc(var(--space-3) + var(--space-2));
  align-content: start;
`,w$=`
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--query-shimmer-edge) 35%,
    var(--query-shimmer-mid) 50%,
    var(--query-shimmer-edge) 65%,
    transparent 100%
  );
`,T$=u`
  background: var(--query-skeleton-block-light);

  &::after {
    ${w$}
  }
`,E$=u`
  background: var(--query-skeleton-block-dark);

  &::after {
    ${w$}
  }
`,D$=u`
  border-radius: calc(var(--space-3) + var(--space-2));
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    animation: ${g$} var(--query-shimmer-duration) linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`,O$=u`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
`,k$=u`
  background: var(--query-progress-track-light);

  &::after {
    background: linear-gradient(90deg, transparent, var(--query-progress-beam-light), transparent);
  }
`,A$=u`
  background: var(--query-progress-track-dark);

  &::after {
    background: linear-gradient(90deg, transparent, var(--query-progress-beam-dark), transparent);
  }
`,j$=u`
  position: absolute;
  inset: 0 0 auto 0;
  height: var(--space-1);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 28%;
    animation: ${_$} var(--query-progress-beam-duration) linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`,M$=u`
  margin-bottom: calc(var(--space-3) + var(--space-2));
`,N$=u`
  transition: var(--query-content-transition);
`,P$=u`
  filter: blur(var(--query-refresh-blur));
  opacity: var(--query-refresh-content-opacity);
  transform: scale(var(--query-refresh-content-scale));
`,F$=u`
  pointer-events: none;
`,I$=u`
  margin: 0 0 var(--space-3);
`,L$=u`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
`,R$=u`
  padding: var(--space-4);
  border-radius: calc(var(--space-3) + var(--space-2));
  border: var(--query-border-width) solid var(--field-border-color-invalid);
  background: var(--color-crimson-25);
`,z$=u`
  font-size: var(--font-size-1);
  color: var(--field-message-color-invalid);
`})))()}function V$(e){let[t,n]=(0,K$.useState)(!1),r=(0,K$.useRef)(!1);return(0,K$.useEffect)(()=>{if(e){r.current=!0,n(!1);return}if(!r.current)return;r.current=!1,n(!0);let t=setTimeout(()=>n(!1),Z$);return()=>clearTimeout(t)},[e]),{settling:t,onContentTransitionEnd:e=>{e.target===e.currentTarget&&e.propertyName===`filter`&&n(!1)}}}function H$({error:e,retry:t}){let{t:n}=i(`shared-module`);return(0,q$.jsx)(`div`,{className:R$,role:`alert`,children:(0,q$.jsxs)(`div`,{className:L$,children:[(0,q$.jsx)(`p`,{className:I$,children:s$(e)}),(0,q$.jsx)(hb,{type:`button`,variant:`secondary`,size:`small`,onPress:t,children:n(`queryResult.retry`)})]})})}function U$({error:e,retry:t}){let{t:n}=i(`shared-module`);return(0,q$.jsxs)(`div`,{className:L$,children:[(0,q$.jsx)(`div`,{className:z$,role:`status`,children:s$(e)}),(0,q$.jsx)(hb,{type:`button`,variant:`tertiary`,size:`small`,onPress:t,children:n(`queryResult.retry`)})]})}function W$(e){return e==null||e===!1}function G$({themeMode:e,minHeight:t=X$,loadingDelayMs:n=200,refreshIndicator:r=`blur`,initialLoading:a,refreshing:o,blockingError:s,staleError:l,error:u,retry:d,children:f,contentClassName:p,renderBlockingError:m,renderStaleError:h}){let{t:g}=i(`shared-module`),_=!!OX(),v=t$(a,{delayMs:n}),y=r!==`quiet`&&o,{settling:b,onContentTransitionEnd:x}=V$(y),S=e===`dark`?x$:b$,C=e===`dark`?E$:T$,w=e===`dark`?A$:k$;if(s&&u!==void 0){let e={error:u,retry:d};return m?m(e):(0,q$.jsx)(H$,{...e})}if(a||v){let e=g(`queryResult.loading`);return(0,q$.jsx)(`section`,{className:c(v$,y$),role:`status`,"aria-live":`polite`,"aria-busy":`true`,"aria-label":e,"data-testid":i$,children:(0,q$.jsxs)(`div`,{className:c(S$,S,m$(t)),children:[(0,q$.jsx)(`div`,{className:C$,"data-testid":`query-skeleton-blocks`,children:J$.map((e,t)=>(0,q$.jsx)(`div`,{className:c(D$,C,h$(e.width,e.height))},t))}),v?(0,q$.jsx)(jX.div,{className:O$,initial:!_&&{opacity:0},animate:{opacity:1},transition:{duration:.2},children:(0,q$.jsx)(`div`,{className:ob(`lg`,`accent`),"data-testid":a$,"aria-hidden":!0})}):null]})})}let T=l&&u!==void 0?{error:u,retry:d}:void 0;return T===void 0&&!o&&!b&&W$(f)?null:(0,q$.jsxs)(`section`,{className:c(v$,o?y$:void 0),"aria-busy":o||b?`true`:void 0,...(o||b)&&{"data-testid":`query-refreshing`},children:[o?(0,q$.jsx)(`div`,{role:`status`,"aria-live":`polite`,"aria-label":g(`queryResult.refreshing`),"data-testid":`query-refreshing-status`}):null,o?(0,q$.jsx)(`div`,{className:c(j$,w),"aria-hidden":!0}):null,(0,q$.jsxs)(jX.div,{initial:!_&&{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.18,ease:Y$},children:[T?(0,q$.jsx)(jX.div,{className:M$,initial:!_&&{opacity:0},animate:{opacity:1},children:h?h(T):(0,q$.jsx)(U$,{...T})}):null,(0,q$.jsx)(`div`,{className:c(N$,y?P$:void 0,y||b?F$:void 0,p),onTransitionEnd:x,children:f})]})]})}var K$,q$,J$,Y$,X$,Z$;function Q$(){return(Q$=t((()=>{l(),MX(),K$=e(r()),a(),r$(),gb(),o$(),fb(),B$(),q$=G(),J$=[{width:`55%`,height:14},{width:`100%`,height:22},{width:`72%`,height:14}],Y$=[.2,0,0,1],X$=120,Z$=600})))()}function $$({query:e,themeMode:t=`light`,children:n,emptyFallback:r=null,treatNullAsEmpty:i=!1,treatEmptyAsData:a=!1,minHeight:o,loadingDelayMs:s,refreshIndicator:c,contentClassName:l,renderBlockingError:u,renderStaleError:d}){let f=d$(e),p=()=>{e.refetch()},m=f.hasData&&f.data!==void 0?!a&&c$(f.data,i)?r:n(f.data):null;return(0,e1.jsx)(G$,{themeMode:t,...Y({minHeight:o}),...Y({loadingDelayMs:s}),...Y({refreshIndicator:c}),...Y({contentClassName:l}),initialLoading:f.initialLoading,refreshing:f.refreshing,blockingError:f.blockingError,staleError:f.staleError,...Y({error:f.error}),retry:p,...Y({renderBlockingError:u}),...Y({renderStaleError:d}),children:m})}var e1;function t1(){return(t1=t((()=>{r(),Q$(),e1=G()})))()}function n1({queries:e,themeMode:t=`light`,renderData:n,emptyFallback:r=null,treatNullAsEmpty:i=!1,treatEmptyAsData:a=!1,minHeight:o,loadingDelayMs:s,refreshIndicator:c,contentClassName:l,renderBlockingError:u,renderStaleError:d}){if(e.length===0)return null;let f=p$(e),p=()=>{let t=e.filter(e=>e.isError),n=t.length>0?t:e;Promise.all(n.map(e=>e.refetch()))},m=f.dataTuple,h=m?Array.isArray(m)?[...m]:Object.values(m):[],g=f.allHaveData&&m?!a&&l$(h,i)?r:n(m,e):null;return(0,r1.jsx)(G$,{themeMode:t,initialLoading:f.initialLoading,refreshing:f.refreshing,blockingError:f.blockingError,staleError:f.staleError,retry:p,...Y({minHeight:o}),...Y({loadingDelayMs:s}),...Y({refreshIndicator:c}),...Y({contentClassName:l}),...Y({error:f.error}),...Y({renderBlockingError:u}),...Y({renderStaleError:d}),children:g})}var r1;function i1(){return(i1=t((()=>{r(),Q$(),r1=G()})))()}var a1,o1;function s1(){return(s1=t((()=>{l(),a1=e(r()),r$(),fb(),G(),(0,a1.createContext)(!1),o1=o`
  from {
    opacity: 0;
  }
`,u`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,u`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  animation: ${o1} var(--duration-base) var(--ease-standard);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,u`
  font-size: var(--font-size-1);
  color: var(--color-gray-500);
  font-family: var(--font-sans);
`})))()}function c1(){return(c1=t((()=>{l(),r(),r$(),fb(),G()})))()}var l1;function u1(){return(u1=t((()=>{l(),r(),lM(),G(),l1=o`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,u`
  min-inline-size: 0;
`,u`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-3);
  margin: 0;
  padding: 0;
  list-style: none;
  min-inline-size: 0;
`,u`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-inline-size: 0;
  max-inline-size: 100%;
  min-block-size: var(--control-height-sm);
`,u`
  display: inline-block;
  padding-block: var(--space-2);
  min-inline-size: 4ch;
  max-inline-size: 24ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
  font-size: var(--font-size-1);
`,u`
  max-inline-size: 40ch;
  color: var(--color-gray-800);
  font-weight: 600;
`,u`
  color: var(--color-gray-500);
  text-decoration: none;

  &:hover {
    color: var(--color-gray-800);
    text-decoration: underline;
  }
`,u`
  flex: none;
  font-size: 12px;
  color: var(--color-gray-400);
`,u`
  display: inline-block;
  inline-size: 8ch;
  block-size: 1em;
  border-radius: var(--radius-1);
  background: linear-gradient(
    90deg,
    var(--color-clear-200) 25%,
    var(--color-clear-100) 50%,
    var(--color-clear-200) 75%
  );
  background-size: 200% 100%;
  animation: ${l1} var(--duration-shimmer) linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: var(--color-clear-200);
  }
`})))()}var d1;function f1(){return(f1=t((()=>{d1=e(r()),d1.createContext(null),d1.createContext(0)})))()}function p1(){return(p1=t((()=>{r(),VC(),G()})))()}var m1;function h1(){return(h1=t((()=>{l(),m1=e(r()),LX(),f1(),p1(),G(),m1.Component,u`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,u`
  margin: 0;
`,u`
  margin: 0;
  color: var(--color-gray-600);
`})))()}function g1(){return(g1=t((()=>{r(),f1(),h1(),G()})))()}function _1(){return(_1=t((()=>{gb(),YC(),ST(),Dj(),Mj(),qj(),lM(),yM(),KM(),FN(),gN(),LN(),fP(),pP(),yP(),TP(),kP(),PP(),IP(),RP(),zP(),BP(),qP(),rF(),iF(),vt(),lt(),oF(),RX(),LX(),gt(),zX(),mt(),qX(),JX(),cZ(),lZ(),uZ(),dZ(),vZ(),TZ(),mZ(),EZ(),WZ(),QZ(),$Q(),e$(),Q$(),t1(),i1(),s1(),c1(),fb(),r$(),u1(),g1()})))()}export{zb as $,mP as A,cM as B,qP as C,kP as D,EP as E,FN as F,Mj as G,zj as H,QM as I,gT as J,Cj as K,gN as L,iP as M,fP as N,xP as O,PN as P,iS as Q,PM as R,KP as S,PP as T,qj as U,lM as V,Oj as W,GC as X,ST as Y,YC as Z,cZ as _,t1 as a,nF as b,ZZ as c,WZ as d,xb as et,wZ as f,sZ as g,vZ as h,$$ as i,yP as j,TP as k,QZ as l,_Z as m,n1 as n,gb as nt,qQ as o,TZ as p,Dj as q,i1 as r,$Q as s,_1 as t,hb as tt,UZ as u,KX as v,AP as w,rF as x,qX as y,KM as z};