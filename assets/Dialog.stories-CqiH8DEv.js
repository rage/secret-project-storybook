import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{Ct as r,Dt as i,Et as a,S as o,St as s,Tt as c,Y as ee,_t as l,at as u,bt as d,ct as f,dt as p,ft as m,gt as h,ht as g,it as _,lt as v,mt as y,ot as b,pt as x,rt as S,st as C,ut as w,vt as T,wt as E,xt as D,yt as O}from"./iframe-BvH-_XRD.js";import{d as k,t as A}from"./styles-CBXWstuV.js";var te=t((()=>{p()})),ne=t((()=>{te()})),re=t((()=>{l()})),ie=t((()=>{re()})),ae=t((()=>{C()}));function oe(e){let{children:t}=e,n=(0,I.useContext)(R),[r,i]=(0,I.useState)(0),a=(0,I.useMemo)(()=>({parent:n,modalCount:r,addModal(){i(e=>e+1),n&&n.addModal()},removeModal(){i(e=>e-1),n&&n.removeModal()}}),[n,r]);return I.createElement(R.Provider,{value:a},t)}function j(){let e=(0,I.useContext)(R);return{modalProviderProps:{"aria-hidden":e&&e.modalCount>0?!0:void 0}}}function M(e){let{modalProviderProps:t}=j();return I.createElement(`div`,{"data-overlay-container":!0,...e,...t})}function N(e){return I.createElement(oe,null,I.createElement(M,e))}function P(e){let t=r(),{portalContainer:n=t?null:document.body,...i}=e,{getContainer:a}=y();if(!e.portalContainer&&a&&(n=a()),I.useEffect(()=>{if(n?.closest(`[data-overlay-container]`))throw Error(`An OverlayContainer must not be inside another container. Please change the portalContainer prop.`)},[n]),!n)return null;let o=I.createElement(N,i);return L.createPortal(o,n)}function F(e){let t=(0,I.useContext)(R);if(!t)throw Error(`Modal is not contained within a provider`);return(0,I.useEffect)(()=>{if(!(e?.isDisabled||!t||!t.parent))return t.parent.addModal(),()=>{t&&t.parent&&t.parent.removeModal()}},[t,t.parent,e?.isDisabled]),{modalProps:{"data-ismodal":!e?.isDisabled}}}var I,L,R,z=t((()=>{E(),g(),I=e(n(),1),L=e(d(),1),R=I.createContext(null)})),B=t((()=>{z()})),V=t((()=>{v()}));function H(e,t,n){let{overlayProps:r,underlayProps:i}=b({...e,isOpen:t.isOpen,onClose:t.close},n);return _({isDisabled:!t.isOpen}),m(),(0,U.useEffect)(()=>{if(t.isOpen&&n.current)return T([n.current],{shouldUseInert:!0})},[t.isOpen,n]),{modalProps:D(r),underlayProps:i}}var U,W=t((()=>{O(),C(),s(),x(),u(),U=e(n(),1)})),G=t((()=>{W()})),K=t((()=>{ae(),B(),V(),G()})),se=t((()=>{s()})),ce=t((()=>{se()})),q,J,Y,le=t((()=>{i(),ne(),ie(),K(),ce(),o(),q=e(n()),A(),J=S(),Y=({children:e,open:t,onClose:n,closeable:r=!0,noPadding:i=!1,width:o=`normal`,disableContentScroll:s=!1,preventBackgroundScroll:l=!1,"data-testid":u,isDismissable:d=!1,shouldCloseOnBlur:p=!1,...m})=>{let g=(0,q.useRef)(null),_=ee({isOpen:t,onOpenChange:e=>{e||n?.()}}),{overlayProps:v,underlayProps:y}=b({isOpen:t,onClose:n,isDismissable:d,shouldCloseOnBlur:p},g),{modalProps:x}=F(),{modalProps:S,underlayProps:C}=H({isDismissable:d},_,g),{dialogProps:T}=w(m,g),E=l?C:y,O=D(l?S:v,T,l?{}:x);return t?(0,J.jsx)(P,{children:(0,J.jsx)(`div`,{...E,className:c`
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          overflow-y: auto;
        `,children:(0,J.jsx)(h,{contain:!0,restoreFocus:!0,autoFocus:!0,children:(0,J.jsx)(`div`,{...O,ref:g,className:a(m.className,c`
                background: white;
                border-radius: 5px;
                width: 95%;
                max-width: ${o===`normal`?`700px`:`1200px`};
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
              `),"data-testid":u??`dialog`,children:(0,J.jsxs)(`div`,{className:c`
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
                ${!s&&!i&&`overflow-y: auto;`}
                ${!i&&`padding: 2rem 3rem;`}
              `,children:[e,r&&(0,J.jsx)(f,{onDismiss:n})]})})})})}):null}})),X,Z,Q,$;t((()=>{le(),X=S(),Z={component:Y,parameters:{docs:{description:{component:`A wrapper component for the native HTML dialog element with some additional props. All props available on the regular HTML dialog also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog.`}}}},Q={args:{open:!1,onClose:()=>{console.log(`onClose`)},closeable:!0,noPadding:!1,width:`normal`,children:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(`h1`,{children:`Heading inside dialog`}),(0,X.jsx)(`p`,{children:`Paragraph inside dialog`})]})}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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