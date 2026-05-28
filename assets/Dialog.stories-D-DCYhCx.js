import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{n as r,r as i,t as a}from"./emotion-css.esm-DyUfwQgn.js";import{L as o,P as s,a as c,c as l,d as u,dt as d,f,g as p,h as m,i as h,l as g,m as _,n as v,p as y,t as b,u as x,ut as S}from"./import-BlTRSeLe.js";import{C}from"./iframe-Dm9cNdLO.js";import{t as w,u as T}from"./styles-BetQWN8g.js";var E=e((()=>{p()})),D=e((()=>{E()})),O=e((()=>{o()})),k=e((()=>{O()})),A=e((()=>{g()})),j=e((()=>{f()})),M=e((()=>{_()})),N=e((()=>{c()})),P=e((()=>{A(),j(),M(),N()})),F=e((()=>{d()})),I=e((()=>{F()})),L,R,z,B=e((()=>{i(),D(),k(),P(),I(),b(),L=t(n()),w(),R=C(),z=({children:e,open:t,onClose:n,closeable:i=!0,noPadding:o=!1,width:c=`normal`,disableContentScroll:d=!1,preventBackgroundScroll:f=!1,"data-testid":p,isDismissable:g=!1,shouldCloseOnBlur:_=!1,...b})=>{let C=(0,L.useRef)(null),w=v({isOpen:t,onOpenChange:e=>{e||n?.()}}),{overlayProps:E,underlayProps:D}=l({isOpen:t,onClose:n,isDismissable:g,shouldCloseOnBlur:_},C),{modalProps:O}=x(),{modalProps:k,underlayProps:A}=h({isDismissable:g},w,C),{dialogProps:j}=m(b,C),M=f?A:D,N=S(f?k:E,j,f?{}:O);return t?(0,R.jsx)(u,{children:(0,R.jsx)(`div`,{...M,className:a`
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          overflow-y: auto;
        `,children:(0,R.jsx)(s,{contain:!0,restoreFocus:!0,autoFocus:!0,children:(0,R.jsx)(`div`,{...N,ref:C,className:r(b.className,a`
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
              `),"data-testid":p??`dialog`,children:(0,R.jsxs)(`div`,{className:a`
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
                ${!d&&!o&&`overflow-y: auto;`}
                ${!o&&`padding: 2rem 3rem;`}
              `,children:[e,i&&(0,R.jsx)(y,{onDismiss:n})]})})})})}):null}})),V,H,U,W;e((()=>{B(),V=C(),H={component:z,parameters:{docs:{description:{component:`A wrapper component for the native HTML dialog element with some additional props. All props available on the regular HTML dialog also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog.`}}}},U={args:{open:!1,onClose:()=>{console.log(`onClose`)},closeable:!0,noPadding:!1,width:`normal`,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`h1`,{children:`Heading inside dialog`}),(0,V.jsx)(`p`,{children:`Paragraph inside dialog`})]})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryType`,...U.parameters?.docs?.source}}},W=[`Example`]}))();export{U as Example,W as __namedExportsOrder,H as default};