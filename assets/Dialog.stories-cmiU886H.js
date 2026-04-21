import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{n as r,r as i,t as a}from"./emotion-css.esm-DyUfwQgn.js";import{L as o,P as s,c,d as l,dt as u,f as d,h as f,i as p,l as m,m as h,n as g,p as _,r as v,s as y,t as b,u as x,ut as S}from"./useOverlayTriggerState-CcQRCiIe.js";import{x as C}from"./iframe-CS1Q_CIZ.js";import{t as w,u as T}from"./styles-BetQWN8g.js";var E=e((()=>{f()})),D=e((()=>{E()})),O=e((()=>{o()})),k=e((()=>{O()})),A=e((()=>{c()})),j=e((()=>{l()})),M=e((()=>{_()})),N=e((()=>{p()})),P=e((()=>{A(),j(),M(),N()})),F=e((()=>{u()})),I=e((()=>{F()})),L=e((()=>{g()})),R=e((()=>{L()})),z,B,V,H=e((()=>{i(),D(),k(),P(),I(),R(),z=t(n()),w(),B=C(),V=({children:e,open:t,onClose:n,closeable:i=!0,noPadding:o=!1,width:c=`normal`,disableContentScroll:l=!1,preventBackgroundScroll:u=!1,"data-testid":f,isDismissable:p=!1,shouldCloseOnBlur:g=!1,..._})=>{let C=(0,z.useRef)(null),w=b({isOpen:t,onOpenChange:e=>{e||n?.()}}),{overlayProps:E,underlayProps:D}=y({isOpen:t,onClose:n,isDismissable:p,shouldCloseOnBlur:g},C),{modalProps:O}=m(),{modalProps:k,underlayProps:A}=v({isDismissable:p},w,C),{dialogProps:j}=h(_,C),M=u?A:D,N=S(u?k:E,j,u?{}:O);return t?(0,B.jsx)(x,{children:(0,B.jsx)(`div`,{...M,className:a`
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          overflow-y: auto;
        `,children:(0,B.jsx)(s,{contain:!0,restoreFocus:!0,autoFocus:!0,children:(0,B.jsx)(`div`,{...N,ref:C,className:r(_.className,a`
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
                  font-size: ${T.h5};
                }
                h2,
                h3,
                h4,
                h5,
                h6 {
                  font-size: ${T.h6};
                }
              `),"data-testid":f??`dialog`,children:(0,B.jsxs)(`div`,{className:a`
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
                ${!l&&!o&&`overflow-y: auto;`}
                ${!o&&`padding: 2rem 3rem;`}
              `,children:[e,i&&(0,B.jsx)(d,{onDismiss:n})]})})})})}):null}})),U,W,G,K;e((()=>{H(),U=C(),W={component:V,parameters:{docs:{description:{component:`A wrapper component for the native HTML dialog element with some additional props. All props available on the regular HTML dialog also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog.`}}}},G={args:{open:!1,onClose:()=>{console.log(`onClose`)},closeable:!0,noPadding:!1,width:`normal`,children:(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`h1`,{children:`Heading inside dialog`}),(0,U.jsx)(`p`,{children:`Paragraph inside dialog`})]})}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryType`,...G.parameters?.docs?.source}}},K=[`Example`]}))();export{G as Example,K as __namedExportsOrder,W as default};