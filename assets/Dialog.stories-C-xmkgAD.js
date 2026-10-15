import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,r as i,t as a}from"./emotion-css.esm-DsoSFdsS.js";import{T as o,U as s,W as c,w as l}from"./VisuallyHidden-qGzbw7Kb.js";import{t as u}from"./react-dom-BzEl8usk.js";import{O as d,T as f,_ as p,a as m,c as h,d as g,h as _,i as v,l as y,m as b,n as x,o as S,p as C,r as w,s as T,t as E,u as D,v as O}from"./useOverlayTriggerState-BXBHmCFe.js";import{t as k}from"./jsx-runtime-DeHZSEgm.js";import{t as A,u as j}from"./styles-Ba5erQb_.js";import{n as M}from"./nullability-wl1JYvfZ.js";function N(e){let{children:t}=e,n=(0,R.useContext)(B),[r,i]=(0,R.useState)(0),a=(0,R.useMemo)(()=>({parent:n,modalCount:r,addModal(){i(e=>e+1),n&&n.addModal()},removeModal(){i(e=>e-1),n&&n.removeModal()}}),[n,r]);return R.createElement(B.Provider,{value:a},t)}function ee(){let e=(0,R.useContext)(B);return{modalProviderProps:{"aria-hidden":e&&e.modalCount>0?!0:void 0}}}function P(e){let{modalProviderProps:t}=ee();return R.createElement(`div`,{"data-overlay-container":!0,...e,...t})}function F(e){return R.createElement(N,null,R.createElement(P,e))}function I(e){let t=s(),{portalContainer:n=t?null:document.body,...r}=e,{getContainer:i}=b();if(!e.portalContainer&&i&&(n=i()),R.useEffect(()=>{if(n?.closest(`[data-overlay-container]`))throw Error(`An OverlayContainer must not be inside another container. Please change the portalContainer prop.`)},[n]),!n)return null;let a=R.createElement(F,r);return z.createPortal(a,n)}function L(e){let t=(0,R.useContext)(B);if(!t)throw Error(`Modal is not contained within a provider`);return(0,R.useEffect)(()=>{if(!(e?.isDisabled||!t||!t.parent))return t.parent.addModal(),()=>{t&&t.parent&&t.parent.removeModal()}},[t,t.parent,e?.isDisabled]),{modalProps:{"data-ismodal":!e?.isDisabled}}}var R,z,B;function V(){return(V=t((()=>{c(),_(),R=e(n(),1),z=e(u(),1),B=R.createContext(null)})))()}function H(e,t,n){let{overlayProps:r,underlayProps:i}=m({...e,isOpen:t.isOpen,onClose:t.close},n);return w({isDisabled:!t.isOpen}),g(),(0,U.useEffect)(()=>{if(t.isOpen&&n.current)return p([n.current],{shouldUseInert:!0})},[t.isOpen,n]),{modalProps:l(r),underlayProps:i}}var U;function W(){return(W=t((()=>{O(),S(),o(),C(),v(),U=n()})))()}var G,K,q;function J(){return(J=t((()=>{i(),D(),d(),h(),V(),W(),S(),o(),x(),G=e(n()),A(),K=k(),q=({children:e,open:t,onClose:n,closeable:i=!0,noPadding:o=!1,width:s=`normal`,disableContentScroll:c=!1,preventBackgroundScroll:u=!1,lang:d,"data-testid":p,isDismissable:h=!1,shouldCloseOnBlur:g=!1,..._})=>{let v=(0,G.useRef)(null),b=E({isOpen:t,onOpenChange:e=>{e||n?.()}}),{overlayProps:x,underlayProps:S}=m({isOpen:t,...M({onClose:n}),isDismissable:h,shouldCloseOnBlur:g},v),{modalProps:C}=L(),{modalProps:w,underlayProps:D}=H({isDismissable:h},b,v),{dialogProps:O}=y(_,v),k=u?D:S,A=l(u?w:x,O,u?{}:C);return t?(0,K.jsx)(I,{children:(0,K.jsx)(`div`,{...k,className:a`
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          overflow-y: auto;
        `,children:(0,K.jsx)(f,{contain:!0,restoreFocus:!0,autoFocus:!0,children:(0,K.jsx)(`div`,{...A,lang:d,ref:v,className:r(_.className,a`
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
                  font-size: ${j.h5};
                }
                h2,
                h3,
                h4,
                h5,
                h6 {
                  font-size: ${j.h6};
                }
              `),"data-testid":p??`dialog`,children:(0,K.jsxs)(`div`,{className:a`
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
                ${!c&&!o&&`overflow-y: auto;`}
                ${!o&&`padding: 2rem clamp(1rem, 5vw, 3rem);`}
              `,children:[e,i&&(0,K.jsx)(T,{...M({onDismiss:n})})]})})})})}):null}})))()}var Y,X,Z,Q;function $(){return($=t((()=>{J(),Y=k(),X={component:q,parameters:{docs:{description:{component:`A wrapper component for the native HTML dialog element with some additional props. All props available on the regular HTML dialog also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog.`}}}},Z={args:{open:!1,onClose:()=>{console.log(`onClose`)},closeable:!0,noPadding:!1,width:`normal`,children:(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`h1`,{children:`Heading inside dialog`}),(0,Y.jsx)(`p`,{children:`Paragraph inside dialog`})]})}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryType`,...Z.parameters?.docs?.source}}},Q=[`Example`]})))()}$();export{Z as Example,Q as __namedExportsOrder,X as default};