import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,r as i,t as a}from"./emotion-css.esm-DsoSFdsS.js";import{At as o,M as s,_ as c,a as l,c as u,d,dt as f,h as p,i as m,k as h,kt as g,l as _,m as v,n as y,o as b,p as x,r as S,s as C,t as w,u as T,ut as E,v as D}from"./useOverlayTriggerState--ZTAXzSt.js";import{t as O}from"./react-dom-BzEl8usk.js";import{t as k}from"./jsx-runtime-DeHZSEgm.js";import{d as A,t as j}from"./styles-CJhTCqa4.js";function M(e){let{children:t}=e,n=(0,L.useContext)(z),[r,i]=(0,L.useState)(0),a=(0,L.useMemo)(()=>({parent:n,modalCount:r,addModal(){i(e=>e+1),n&&n.addModal()},removeModal(){i(e=>e-1),n&&n.removeModal()}}),[n,r]);return L.createElement(z.Provider,{value:a},t)}function N(){let e=(0,L.useContext)(z);return{modalProviderProps:{"aria-hidden":e&&e.modalCount>0?!0:void 0}}}function ee(e){let{modalProviderProps:t}=N();return L.createElement(`div`,{"data-overlay-container":!0,...e,...t})}function P(e){return L.createElement(M,null,L.createElement(ee,e))}function F(e){let t=g(),{portalContainer:n=t?null:document.body,...r}=e,{getContainer:i}=v();if(!e.portalContainer&&i&&(n=i()),L.useEffect(()=>{if(n?.closest(`[data-overlay-container]`))throw Error(`An OverlayContainer must not be inside another container. Please change the portalContainer prop.`)},[n]),!n)return null;let a=L.createElement(P,r);return R.createPortal(a,n)}function I(e){let t=(0,L.useContext)(z);if(!t)throw Error(`Modal is not contained within a provider`);return(0,L.useEffect)(()=>{if(!(e?.isDisabled||!t||!t.parent))return t.parent.addModal(),()=>{t&&t.parent&&t.parent.removeModal()}},[t,t.parent,e?.isDisabled]),{modalProps:{"data-ismodal":!e?.isDisabled}}}var L,R,z;function B(){return(B=t((()=>{o(),p(),L=e(n(),1),R=e(O(),1),z=L.createContext(null)})))()}function V(e,t,n){let{overlayProps:r,underlayProps:i}=l({...e,isOpen:t.isOpen,onClose:t.close},n);return S({isDisabled:!t.isOpen}),d(),(0,H.useEffect)(()=>{if(t.isOpen&&n.current)return c([n.current],{shouldUseInert:!0})},[t.isOpen,n]),{modalProps:E(r),underlayProps:i}}var H;function U(){return(U=t((()=>{D(),b(),f(),x(),m(),H=n()})))()}function W(e){let t={};for(let[n,r]of Object.entries(e))r!==void 0&&(t[n]=r);return t}var G,K,q;function J(){return(J=t((()=>{i(),T(),s(),u(),B(),U(),b(),f(),y(),G=e(n()),j(),K=k(),q=({children:e,open:t,onClose:n,closeable:i=!0,noPadding:o=!1,width:s=`normal`,disableContentScroll:c=!1,preventBackgroundScroll:u=!1,lang:d,"data-testid":f,isDismissable:p=!1,shouldCloseOnBlur:m=!1,...g})=>{let v=(0,G.useRef)(null),y=w({isOpen:t,onOpenChange:e=>{e||n?.()}}),{overlayProps:b,underlayProps:x}=l({isOpen:t,...W({onClose:n}),isDismissable:p,shouldCloseOnBlur:m},v),{modalProps:S}=I(),{modalProps:T,underlayProps:D}=V({isDismissable:p},y,v),{dialogProps:O}=_(g,v),k=u?D:x,j=E(u?T:b,O,u?{}:S);return t?(0,K.jsx)(F,{children:(0,K.jsx)(`div`,{...k,className:a`
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          overflow-y: auto;
        `,children:(0,K.jsx)(h,{contain:!0,restoreFocus:!0,autoFocus:!0,children:(0,K.jsx)(`div`,{...j,lang:d,ref:v,className:r(g.className,a`
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
                  font-size: ${A.h5};
                }
                h2,
                h3,
                h4,
                h5,
                h6 {
                  font-size: ${A.h6};
                }
              `),"data-testid":f??`dialog`,children:(0,K.jsxs)(`div`,{className:a`
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
                ${!c&&!o&&`overflow-y: auto;`}
                ${!o&&`padding: 2rem clamp(1rem, 5vw, 3rem);`}
              `,children:[e,i&&(0,K.jsx)(C,{...W({onDismiss:n})})]})})})})}):null}})))()}var Y,X,Z,Q;function $(){return($=t((()=>{J(),Y=k(),X={component:q,parameters:{docs:{description:{component:`A wrapper component for the native HTML dialog element with some additional props. All props available on the regular HTML dialog also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog.`}}}},Z={args:{open:!1,onClose:()=>{console.log(`onClose`)},closeable:!0,noPadding:!1,width:`normal`,children:(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`h1`,{children:`Heading inside dialog`}),(0,Y.jsx)(`p`,{children:`Paragraph inside dialog`})]})}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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