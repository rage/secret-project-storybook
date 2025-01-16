import{j as l}from"./jsx-runtime-CLpGMVip.js";import{c as E}from"./emotion-css.esm-COI6KVUB.js";import{r as a}from"./index-BAAwwy_G.js";import{t as i}from"./typography-BJ13ygNv.js";import"./emotion-serialize.esm-CH7fXiIe.js";const b=(d,t,s=!0)=>{const o=a.useRef(null);o.current=t,a.useEffect(()=>{if(!s)return;const c=u=>{var p,e;(p=d.current)!=null&&p.contains(u.target)||(e=o.current)==null||e.call(o,u)};return document.addEventListener("click",c,!0),()=>document.removeEventListener("click",c,!0)},[d,o,s])},f=({children:d,open:t,onClose:s,closeable:o=!0,noPadding:c=!1,width:u="normal",...p})=>{const e=a.useRef(null),h=a.useRef(null);return a.useEffect(()=>{const n=e.current,r=()=>{s&&s()};return n==null||n.addEventListener("close",r),()=>{n==null||n.removeEventListener("close",r)}},[s]),a.useEffect(()=>{e.current&&(t&&!e.current.open?e.current.showModal():e.current.open&&e.current.close())},[t]),a.useEffect(()=>{if(!e.current||o)return;const n=g=>{var v;g.cancelable||(v=e.current)==null||v.showModal(),g.preventDefault()},r=e.current;return r.addEventListener("close",n),r.addEventListener("cancel",n),()=>{r==null||r.removeEventListener("close",n),r==null||r.removeEventListener("cancel",n)}},[o]),b(h,()=>{var n;o&&((n=e.current)==null||n.close())},t),t?l.jsx("dialog",{ref:e,...p,className:E`
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
      `,children:l.jsx("div",{role:"presentation",ref:h,className:E`
          ${!c&&"padding: 2rem 3rem;"}
        `,children:d})}):null};try{f.displayName="Dialog",f.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},closeable:{defaultValue:{value:"true"},description:"",name:"closeable",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:{value:"false"},description:"",name:"noPadding",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"normal"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"wide"'}]}}}}}catch{}const k={component:f,parameters:{docs:{description:{component:"A wrapper component for the native HTML dialog element with some additional props. All props available on the regular HTML dialog also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog."}}}},m={args:{open:!1,onClose:()=>{console.log("onClose")},closeable:!0,noPadding:!1,width:"normal",children:l.jsxs(l.Fragment,{children:[l.jsx("h1",{children:"Heading inside dialog"}),l.jsx("p",{children:"Paragraph inside dialog"})]})}};var x,w,y;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(y=(w=m.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const z=["Example"];export{m as Example,z as __namedExportsOrder,k as default};
