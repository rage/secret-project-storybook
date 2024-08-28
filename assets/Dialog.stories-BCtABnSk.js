import{j as c}from"./emotion-serialize.browser.esm-Xr4f5Ts3.js";import{c as E}from"./emotion-css.esm-DPNEF3j8.js";import{r as t}from"./index-CDs2tPxN.js";import{t as i}from"./typography-Bdnj4Bgw.js";const w=(l,s,a=!0)=>{const o=t.useRef(null);o.current=s,t.useEffect(()=>{if(!a)return;const d=u=>{var p,e;(p=l.current)!=null&&p.contains(u.target)||(e=o.current)==null||e.call(o,u)};return document.addEventListener("click",d,!0),()=>document.removeEventListener("click",d,!0)},[l,o,a])},$=({children:l,open:s,onClose:a,closeable:o=!0,noPadding:d=!1,width:u="normal",...p})=>{const e=t.useRef(null),m=t.useRef(null);return t.useEffect(()=>{const r=e.current,n=()=>{a&&a()};return r==null||r.addEventListener("close",n),()=>{r==null||r.removeEventListener("close",n)}},[a]),t.useEffect(()=>{e.current&&(s&&!e.current.open?e.current.showModal():e.current.open&&e.current.close())},[s]),t.useEffect(()=>{if(!e.current||o)return;const r=h=>{var g;h.cancelable||(g=e.current)==null||g.showModal(),h.preventDefault()},n=e.current;return n.addEventListener("close",r),n.addEventListener("cancel",r),()=>{n==null||n.removeEventListener("close",r),n==null||n.removeEventListener("cancel",r)}},[o]),w(m,()=>{var r;o&&((r=e.current)==null||r.close())},s),s?c.jsx("dialog",{ref:e,...p,className:E`
        border: 0;
        border-radius: 5px;
        padding: 0;
        width: 95%;
        max-width: ${u==="normal"?"700px":"1200px"};

        h1 {
          font-size: ${i.h5};
        }
        h2 {
          font-size: ${i.h6};
        }
        h3 {
          font-size: ${i.h6};
        }
        h4 {
          font-size: ${i.h6};
        }
        h5 {
          font-size: ${i.h6};
        }
        h6 {
          font-size: ${i.h6};
        }

        &::backdrop {
          background: rgba(0, 0, 0, 0.4);
        }
      `,children:c.jsx("div",{role:"presentation",ref:m,className:E`
          ${!d&&"padding: 2rem 3rem;"}
        `,children:l})}):null},C={component:$,parameters:{docs:{description:{component:"A wrapper component for the native HTML dialog element with some additional props. All props available on the regular HTML dialog also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog."}}}},f={args:{open:!1,onClose:()=>{console.log("onClose")},closeable:!0,noPadding:!1,width:"normal",children:c.jsxs(c.Fragment,{children:[c.jsx("h1",{children:"Heading inside dialog"}),c.jsx("p",{children:"Paragraph inside dialog"})]})}};var v,x,L;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(L=(x=f.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};const H=["Example"];export{f as Example,H as __namedExportsOrder,C as default};
