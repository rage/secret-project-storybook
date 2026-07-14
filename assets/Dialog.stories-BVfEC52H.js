import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{$ as r,F as i,G as a,J as ee,K as o,Q as s,U as c,W as l,X as te,Y as u,Z as d,at as f,c as p,ct as m,dt as h,et as g,ft as _,it as v,lt as y,nt as b,ot as x,pt as S,q as C,rt as w,st as T,tt as E,ut as D}from"./iframe-Cwq9EqjE.js";import{d as O,t as k}from"./styles-CBXWstuV.js";var A=t((()=>{d()})),j=t((()=>{A()})),ne=t((()=>{w()})),re=t((()=>{ne()})),ie=t((()=>{C()}));function ae(e){let{children:t}=e,n=(0,I.useContext)(R),[r,i]=(0,I.useState)(0),a=(0,I.useMemo)(()=>({parent:n,modalCount:r,addModal(){i(e=>e+1),n&&n.addModal()},removeModal(){i(e=>e-1),n&&n.removeModal()}}),[n,r]);return I.createElement(R.Provider,{value:a},t)}function oe(){let e=(0,I.useContext)(R);return{modalProviderProps:{"aria-hidden":e&&e.modalCount>0?!0:void 0}}}function M(e){let{modalProviderProps:t}=oe();return I.createElement(`div`,{"data-overlay-container":!0,...e,...t})}function N(e){return I.createElement(ae,null,I.createElement(M,e))}function P(e){let t=y(),{portalContainer:n=t?null:document.body,...r}=e,{getContainer:i}=g();if(!e.portalContainer&&i&&(n=i()),I.useEffect(()=>{if(n?.closest(`[data-overlay-container]`))throw Error(`An OverlayContainer must not be inside another container. Please change the portalContainer prop.`)},[n]),!n)return null;let a=I.createElement(N,r);return L.createPortal(a,n)}function F(e){let t=(0,I.useContext)(R);if(!t)throw Error(`Modal is not contained within a provider`);return(0,I.useEffect)(()=>{if(!(e?.isDisabled||!t||!t.parent))return t.parent.addModal(),()=>{t&&t.parent&&t.parent.removeModal()}},[t,t.parent,e?.isDisabled]),{modalProps:{"data-ismodal":!e?.isDisabled}}}var I,L,R,z=t((()=>{D(),E(),I=e(n(),1),L=e(x(),1),R=I.createContext(null)})),B=t((()=>{z()})),V=t((()=>{u()}));function H(e,t,n){let{overlayProps:r,underlayProps:i}=o({...e,isOpen:t.isOpen,onClose:t.close},n);return l({isDisabled:!t.isOpen}),s(),(0,U.useEffect)(()=>{if(t.isOpen&&n.current)return v([n.current],{shouldUseInert:!0})},[t.isOpen,n]),{modalProps:T(r),underlayProps:i}}var U,W=t((()=>{f(),C(),m(),r(),a(),U=e(n(),1)})),G=t((()=>{W()})),K=t((()=>{ie(),B(),V(),G()})),se=t((()=>{m()})),ce=t((()=>{se()})),q,J,Y,le=t((()=>{S(),j(),re(),K(),ce(),p(),q=e(n()),k(),J=c(),Y=({children:e,open:t,onClose:n,closeable:r=!0,noPadding:a=!1,width:s=`normal`,disableContentScroll:c=!1,preventBackgroundScroll:l=!1,"data-testid":u,isDismissable:d=!1,shouldCloseOnBlur:f=!1,...p})=>{let m=(0,q.useRef)(null),g=i({isOpen:t,onOpenChange:e=>{e||n?.()}}),{overlayProps:v,underlayProps:y}=o({isOpen:t,onClose:n,isDismissable:d,shouldCloseOnBlur:f},m),{modalProps:x}=F(),{modalProps:S,underlayProps:C}=H({isDismissable:d},g,m),{dialogProps:w}=te(p,m),E=l?C:y,D=T(l?S:v,w,l?{}:x);return t?(0,J.jsx)(P,{children:(0,J.jsx)(`div`,{...E,className:h`
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          overflow-y: auto;
        `,children:(0,J.jsx)(b,{contain:!0,restoreFocus:!0,autoFocus:!0,children:(0,J.jsx)(`div`,{...D,ref:m,className:_(p.className,h`
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
                  font-size: ${O.h5};
                }
                h2,
                h3,
                h4,
                h5,
                h6 {
                  font-size: ${O.h6};
                }
              `),"data-testid":u??`dialog`,children:(0,J.jsxs)(`div`,{className:h`
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
                ${!c&&!a&&`overflow-y: auto;`}
                ${!a&&`padding: 2rem 3rem;`}
              `,children:[e,r&&(0,J.jsx)(ee,{onDismiss:n})]})})})})}):null}})),X,Z,Q,$;t((()=>{le(),X=c(),Z={component:Y,parameters:{docs:{description:{component:`A wrapper component for the native HTML dialog element with some additional props. All props available on the regular HTML dialog also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog.`}}}},Q={args:{open:!1,onClose:()=>{console.log(`onClose`)},closeable:!0,noPadding:!1,width:`normal`,children:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(`h1`,{children:`Heading inside dialog`}),(0,X.jsx)(`p`,{children:`Paragraph inside dialog`})]})}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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