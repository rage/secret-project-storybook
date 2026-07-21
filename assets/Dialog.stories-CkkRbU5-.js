import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{Ct as r,S as i,St as a,Y as o,_t as s,at as c,bt as l,ct as u,dt as d,ft as f,gt as p,ht as m,it as h,lt as ee,mt as g,ot as _,pt as v,st as y,ut as b,vt as x,wt as S,xt as C,yt as w}from"./iframe-CAN3q5_A.js";import{d as T,t as E}from"./styles-CBXWstuV.js";var D=t((()=>{f()})),O=t((()=>{D()})),k=t((()=>{p()})),A=t((()=>{k()})),j=t((()=>{u()}));function M(e){let{children:t}=e,n=(0,F.useContext)(L),[r,i]=(0,F.useState)(0),a=(0,F.useMemo)(()=>({parent:n,modalCount:r,addModal(){i(e=>e+1),n&&n.addModal()},removeModal(){i(e=>e-1),n&&n.removeModal()}}),[n,r]);return F.createElement(L.Provider,{value:a},t)}function te(){let e=(0,F.useContext)(L);return{modalProviderProps:{"aria-hidden":e&&e.modalCount>0?!0:void 0}}}function ne(e){let{modalProviderProps:t}=te();return F.createElement(`div`,{"data-overlay-container":!0,...e,...t})}function re(e){return F.createElement(M,null,F.createElement(ne,e))}function N(e){let t=l(),{portalContainer:n=t?null:document.body,...r}=e,{getContainer:i}=v();if(!e.portalContainer&&i&&(n=i()),F.useEffect(()=>{if(n?.closest(`[data-overlay-container]`))throw Error(`An OverlayContainer must not be inside another container. Please change the portalContainer prop.`)},[n]),!n)return null;let a=F.createElement(re,r);return I.createPortal(a,n)}function P(e){let t=(0,F.useContext)(L);if(!t)throw Error(`Modal is not contained within a provider`);return(0,F.useEffect)(()=>{if(!(e?.isDisabled||!t||!t.parent))return t.parent.addModal(),()=>{t&&t.parent&&t.parent.removeModal()}},[t,t.parent,e?.isDisabled]),{modalProps:{"data-ismodal":!e?.isDisabled}}}var F,I,L,R=t((()=>{C(),g(),F=e(n(),1),I=e(s(),1),L=F.createContext(null)})),z=t((()=>{R()})),B=t((()=>{b()})),V=t((()=>{_()})),H=t((()=>{j(),z(),B(),V()})),U=t((()=>{w()})),W=t((()=>{U()}));function G(e){let t={};for(let[n,r]of Object.entries(e))r!==void 0&&(t[n]=r);return t}var K=t((()=>{})),q,J,Y,ie=t((()=>{S(),O(),A(),H(),W(),i(),q=e(n()),E(),K(),J=h(),Y=({children:e,open:t,onClose:n,closeable:i=!0,noPadding:s=!1,width:l=`normal`,disableContentScroll:u=!1,preventBackgroundScroll:f=!1,lang:p,"data-testid":h,isDismissable:g=!1,shouldCloseOnBlur:_=!1,...v})=>{let b=(0,q.useRef)(null),S=o({isOpen:t,onOpenChange:e=>{e||n?.()}}),{overlayProps:C,underlayProps:w}=y({isOpen:t,...G({onClose:n}),isDismissable:g,shouldCloseOnBlur:_},b),{modalProps:E}=P(),{modalProps:D,underlayProps:O}=c({isDismissable:g},S,b),{dialogProps:k}=d(v,b),A=f?O:w,j=x(f?D:C,k,f?{}:E);return t?(0,J.jsx)(N,{children:(0,J.jsx)(`div`,{...A,className:a`
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          overflow-y: auto;
        `,children:(0,J.jsx)(m,{contain:!0,restoreFocus:!0,autoFocus:!0,children:(0,J.jsx)(`div`,{...j,lang:p,ref:b,className:r(v.className,a`
                background: white;
                border-radius: 5px;
                width: 95%;
                max-width: ${l===`normal`?`700px`:`1200px`};
                max-height: 90vh;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                outline: none;

                h1 {
                  font-size: ${T.h5};
                }
                h2,
                h3,
                h4,
                h5,
                h6 {
                  font-size: ${T.h6};
                }
              `),"data-testid":h??`dialog`,children:(0,J.jsxs)(`div`,{className:a`
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
                ${!u&&!s&&`overflow-y: auto;`}
                ${!s&&`padding: 2rem clamp(1rem, 5vw, 3rem);`}
              `,children:[e,i&&(0,J.jsx)(ee,{...G({onDismiss:n})})]})})})})}):null}})),X,Z,Q,$;t((()=>{ie(),X=h(),Z={component:Y,parameters:{docs:{description:{component:`A wrapper component for the native HTML dialog element with some additional props. All props available on the regular HTML dialog also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog.`}}}},Q={args:{open:!1,onClose:()=>{console.log(`onClose`)},closeable:!0,noPadding:!1,width:`normal`,children:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(`h1`,{children:`Heading inside dialog`}),(0,X.jsx)(`p`,{children:`Paragraph inside dialog`})]})}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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