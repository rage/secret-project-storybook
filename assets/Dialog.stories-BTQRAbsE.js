import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,r as i,t as a}from"./emotion-css.esm-D2eg9Mn3.js";import{D as o,E as s,G as c,K as l}from"./VisuallyHidden-CgoBJi3y.js";import{t as u}from"./react-dom-B2lTHb2f.js";import{t as d}from"./jsx-runtime-MKhVqBIO.js";import{Q as f,Z as p,_t as m,at as h,bt as g,ct as _,dt as v,ft as y,gt as b,ht as x,it as S,lt as C,mt as w,ot as T,pt as E,st as D,ut as ee,vt as O,yt as te}from"./iframe-BA8d9TS_.js";import{t as k,u as A}from"./styles-ScMoUagR.js";import{n as j}from"./nullability-BeJ_a4aq.js";function M(e){let{children:t}=e,n=(0,R.useContext)(B),[r,i]=(0,R.useState)(0),a=(0,R.useMemo)(()=>({parent:n,modalCount:r,addModal(){i(e=>e+1),n&&n.addModal()},removeModal(){i(e=>e-1),n&&n.removeModal()}}),[n,r]);return R.createElement(B.Provider,{value:a},t)}function N(){let e=(0,R.useContext)(B);return{modalProviderProps:{"aria-hidden":e&&e.modalCount>0?!0:void 0}}}function P(e){let{modalProviderProps:t}=N();return R.createElement(`div`,{"data-overlay-container":!0,...e,...t})}function F(e){return R.createElement(M,null,R.createElement(P,e))}function I(e){let t=c(),{portalContainer:n=t?null:document.body,...r}=e,{getContainer:i}=w();if(!e.portalContainer&&i&&(n=i()),R.useEffect(()=>{if(n?.closest(`[data-overlay-container]`))throw Error(`An OverlayContainer must not be inside another container. Please change the portalContainer prop.`)},[n]),!n)return null;let a=R.createElement(F,r);return z.createPortal(a,n)}function L(e){let t=(0,R.useContext)(B);if(!t)throw Error(`Modal is not contained within a provider`);return(0,R.useEffect)(()=>{if(!e?.isDisabled&&t&&t.parent)return t.parent.addModal(),()=>{t&&t.parent&&t.parent.removeModal()}},[t,t.parent,e?.isDisabled]),{modalProps:{"data-ismodal":!e?.isDisabled}}}var R,z,B;function V(){return(V=t((()=>{l(),x(),R=e(n(),1),z=e(u(),1),B=R.createContext(null)})))()}function H(e,t,n){let{overlayProps:r,underlayProps:i}=T({...e,isOpen:t.isOpen,onClose:t.close},n);S({isDisabled:!t.isOpen,UNSTABLE_overrideFocus:e.UNSTABLE_overrideFocus}),y();let{isEntering:a}=e;return(0,U.useEffect)(()=>{if(t.isOpen&&n.current)return a?b(n.current):m([n.current],{shouldUseInert:!0})},[t.isOpen,a,n]),{modalProps:s(r),underlayProps:i}}var U;function W(){return(W=t((()=>{O(),D(),o(),E(),h(),U=n()})))()}var G,K,q;function J(){return(J=t((()=>{i(),v(),g(),C(),V(),W(),D(),o(),f(),G=e(n()),k(),K=d(),q=({children:e,open:t,onClose:n,closeable:i=!0,noPadding:o=!1,width:c=`normal`,disableContentScroll:l=!1,preventBackgroundScroll:u=!1,lang:d,"data-testid":f,isDismissable:m=!1,shouldCloseOnBlur:h=!1,...g})=>{let v=(0,G.useRef)(null),y=p({isOpen:t,onOpenChange:e=>{e||n?.()}}),{overlayProps:b,underlayProps:x}=T({isOpen:t,...j({onClose:n}),isDismissable:m,shouldCloseOnBlur:h},v),{modalProps:S}=L(),{modalProps:C,underlayProps:w}=H({isDismissable:m},y,v),{dialogProps:E}=ee(g,v),D=u?w:x,O=s(u?C:b,E,u?{}:S);return t?(0,K.jsx)(I,{children:(0,K.jsx)(`div`,{...D,className:a`
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          overflow-y: auto;
        `,children:(0,K.jsx)(te,{contain:!0,restoreFocus:!0,autoFocus:!0,children:(0,K.jsx)(`div`,{...O,lang:d,ref:v,className:r(g.className,a`
                background: white;
                border-radius: 5px;
                width: 95%;
                max-width: ${c===`normal`?`700px`:`1200px`};
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
                ${!l&&!o&&`overflow-y: auto;`}
                ${!o&&`padding: 2rem clamp(1rem, 5vw, 3rem);`}
              `,children:[e,i&&(0,K.jsx)(_,{...j({onDismiss:n})})]})})})})}):null}})))()}var Y,X,Z,Q;function $(){return($=t((()=>{J(),Y=d(),X={component:q,parameters:{docs:{description:{component:`A wrapper component for the native HTML dialog element with some additional props. All props available on the regular HTML dialog also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog.`}}}},Z={args:{open:!1,onClose:()=>{console.log(`onClose`)},closeable:!0,noPadding:!1,width:`normal`,children:(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`h1`,{children:`Heading inside dialog`}),(0,Y.jsx)(`p`,{children:`Paragraph inside dialog`})]})}},Q=[`Example`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryType`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as Example,Q as __namedExportsOrder,X as default};