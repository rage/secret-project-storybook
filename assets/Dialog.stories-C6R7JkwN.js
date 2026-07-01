import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{$ as n,F as r,G as i,J as a,K as o,Q as s,U as c,W as l,X as u,Y as d,Z as f,an as p,at as m,c as h,ct as g,et as _,it as v,nt as y,ot as b,q as x,st as S,tt as C}from"./iframe-DDfmRLCP.js";import{d as w,t as T}from"./styles-CSQU3Qq8.js";var E=t((()=>{_()})),D=t((()=>{E()})),O=t((()=>{y()})),k=t((()=>{O()})),A=t((()=>{x()})),j=t((()=>{u()})),M=t((()=>{s()})),N=t((()=>{i()})),P=t((()=>{A(),j(),M(),N()})),F=t((()=>{m()})),I=t((()=>{F()})),L,R,z,B=t((()=>{g(),D(),k(),P(),I(),h(),L=e(p()),T(),R=c(),z=({children:e,open:t,onClose:i,closeable:s=!0,noPadding:c=!1,width:u=`normal`,disableContentScroll:p=!1,preventBackgroundScroll:m=!1,"data-testid":h,isDismissable:g=!1,shouldCloseOnBlur:_=!1,...y})=>{let x=(0,L.useRef)(null),T=r({isOpen:t,onOpenChange:e=>{e||i?.()}}),{overlayProps:E,underlayProps:D}=o({isOpen:t,onClose:i,isDismissable:g,shouldCloseOnBlur:_},x),{modalProps:O}=a(),{modalProps:k,underlayProps:A}=l({isDismissable:g},T,x),{dialogProps:j}=n(y,x),M=m?A:D,N=v(m?k:E,j,m?{}:O);return t?(0,R.jsx)(d,{children:(0,R.jsx)(`div`,{...M,className:b`
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          overflow-y: auto;
        `,children:(0,R.jsx)(C,{contain:!0,restoreFocus:!0,autoFocus:!0,children:(0,R.jsx)(`div`,{...N,ref:x,className:S(y.className,b`
                background: white;
                border-radius: 5px;
                width: 95%;
                max-width: ${u===`normal`?`700px`:`1200px`};
                max-height: 90vh;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                outline: none;

                h1 {
                  font-size: ${w.h5};
                }
                h2,
                h3,
                h4,
                h5,
                h6 {
                  font-size: ${w.h6};
                }
              `),"data-testid":h??`dialog`,children:(0,R.jsxs)(`div`,{className:b`
                flex: 1;
                min-height: 0;
                display: flex;
                flex-direction: column;
                ${!p&&!c&&`overflow-y: auto;`}
                ${!c&&`padding: 2rem 3rem;`}
              `,children:[e,s&&(0,R.jsx)(f,{onDismiss:i})]})})})})}):null}})),V,H,U,W;t((()=>{B(),V=c(),H={component:z,parameters:{docs:{description:{component:`A wrapper component for the native HTML dialog element with some additional props. All props available on the regular HTML dialog also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog.`}}}},U={args:{open:!1,onClose:()=>{console.log(`onClose`)},closeable:!0,noPadding:!1,width:`normal`,children:(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`h1`,{children:`Heading inside dialog`}),(0,V.jsx)(`p`,{children:`Paragraph inside dialog`})]})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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