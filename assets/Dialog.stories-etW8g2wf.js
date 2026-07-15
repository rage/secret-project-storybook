import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{Ct as r,Dt as i,Et as a,Ot as o,S as s,St as c,Tt as l,Y as u,_t as d,at as f,bt as p,ct as m,dt as ee,ft as h,gt as g,ht as _,it as v,lt as y,mt as b,ot as x,pt as S,st as C,ut as w,vt as T,wt as E,xt as D,yt as O}from"./iframe-6L8_Xta5.js";import{d as k,t as A}from"./styles-CBXWstuV.js";var j=t((()=>{h()})),M=t((()=>{j()})),te=t((()=>{T()})),ne=t((()=>{te()})),re=t((()=>{m()}));function ie(e){let{children:t}=e,n=(0,F.useContext)(L),[r,i]=(0,F.useState)(0),a=(0,F.useMemo)(()=>({parent:n,modalCount:r,addModal(){i(e=>e+1),n&&n.addModal()},removeModal(){i(e=>e-1),n&&n.removeModal()}}),[n,r]);return F.createElement(L.Provider,{value:a},t)}function ae(){let e=(0,F.useContext)(L);return{modalProviderProps:{"aria-hidden":e&&e.modalCount>0?!0:void 0}}}function oe(e){let{modalProviderProps:t}=ae();return F.createElement(`div`,{"data-overlay-container":!0,...e,...t})}function se(e){return F.createElement(ie,null,F.createElement(oe,e))}function N(e){let t=E(),{portalContainer:n=t?null:document.body,...r}=e,{getContainer:i}=_();if(!e.portalContainer&&i&&(n=i()),F.useEffect(()=>{if(n?.closest(`[data-overlay-container]`))throw Error(`An OverlayContainer must not be inside another container. Please change the portalContainer prop.`)},[n]),!n)return null;let a=F.createElement(se,r);return I.createPortal(a,n)}function P(e){let t=(0,F.useContext)(L);if(!t)throw Error(`Modal is not contained within a provider`);return(0,F.useEffect)(()=>{if(!(e?.isDisabled||!t||!t.parent))return t.parent.addModal(),()=>{t&&t.parent&&t.parent.removeModal()}},[t,t.parent,e?.isDisabled]),{modalProps:{"data-ismodal":!e?.isDisabled}}}var F,I,L,R=t((()=>{l(),g(),F=e(n(),1),I=e(D(),1),L=F.createContext(null)})),z=t((()=>{R()})),B=t((()=>{w()}));function V(e,t,n){let{overlayProps:r,underlayProps:i}=C({...e,isOpen:t.isOpen,onClose:t.close},n);return f({isDisabled:!t.isOpen}),S(),(0,H.useEffect)(()=>{if(t.isOpen&&n.current)return O([n.current],{shouldUseInert:!0})},[t.isOpen,n]),{modalProps:c(r),underlayProps:i}}var H,U=t((()=>{p(),m(),r(),b(),x(),H=e(n(),1)})),W=t((()=>{U()})),G=t((()=>{re(),z(),B(),W()})),ce=t((()=>{r()})),le=t((()=>{ce()}));function K(e){let t={};for(let[n,r]of Object.entries(e))r!==void 0&&(t[n]=r);return t}var ue=t((()=>{})),q,J,Y,de=t((()=>{o(),M(),ne(),G(),le(),s(),q=e(n()),A(),ue(),J=v(),Y=({children:e,open:t,onClose:n,closeable:r=!0,noPadding:o=!1,width:s=`normal`,disableContentScroll:l=!1,preventBackgroundScroll:f=!1,"data-testid":p,isDismissable:m=!1,shouldCloseOnBlur:h=!1,...g})=>{let _=(0,q.useRef)(null),v=u({isOpen:t,onOpenChange:e=>{e||n?.()}}),{overlayProps:b,underlayProps:x}=C({isOpen:t,...K({onClose:n}),isDismissable:m,shouldCloseOnBlur:h},_),{modalProps:S}=P(),{modalProps:w,underlayProps:T}=V({isDismissable:m},v,_),{dialogProps:E}=ee(g,_),D=f?T:x,O=c(f?w:b,E,f?{}:S);return t?(0,J.jsx)(N,{children:(0,J.jsx)(`div`,{...D,className:a`
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          overflow-y: auto;
        `,children:(0,J.jsx)(d,{contain:!0,restoreFocus:!0,autoFocus:!0,children:(0,J.jsx)(`div`,{...O,ref:_,className:i(g.className,a`
                background: white;
                border-radius: 5px;
                width: 95%;
                max-width: ${s===`normal`?`700px`:`1200px`};
                max-height: 90vh;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                outline: none;

                h1 {
                  font-size: ${k.h5};
                }
                h2,
                h3,
                h4,
                h5,
                h6 {
                  font-size: ${k.h6};
                }
              `),"data-testid":p??`dialog`,children:(0,J.jsxs)(`div`,{className:a`
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
                ${!l&&!o&&`overflow-y: auto;`}
                ${!o&&`padding: 2rem 3rem;`}
              `,children:[e,r&&(0,J.jsx)(y,{...K({onDismiss:n})})]})})})})}):null}})),X,Z,Q,$;t((()=>{de(),X=v(),Z={component:Y,parameters:{docs:{description:{component:`A wrapper component for the native HTML dialog element with some additional props. All props available on the regular HTML dialog also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog.`}}}},Q={args:{open:!1,onClose:()=>{console.log(`onClose`)},closeable:!0,noPadding:!1,width:`normal`,children:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(`h1`,{children:`Heading inside dialog`}),(0,X.jsx)(`p`,{children:`Paragraph inside dialog`})]})}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onClose: () => {
      console.log("onClose");
    },
    closeable: true,
    noPadding: false,
    width: "normal",
    children: <>
        <h1>Heading inside dialog</h1>
        <p>Paragraph inside dialog</p>
      </>
  }
} satisfies StoryType`,...Q.parameters?.docs?.source}}},$=[`Example`]}))();export{Q as Example,$ as __namedExportsOrder,Z as default};