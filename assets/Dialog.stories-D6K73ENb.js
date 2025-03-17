import{j as i}from"./jsx-runtime-CLpGMVip.js";import{c as x}from"./emotion-css.esm-HUuX3KNn.js";import{r as a}from"./index-BAAwwy_G.js";import{t as l}from"./typography-ksV1GOB1.js";import"./emotion-utils.browser.esm-D8RxJ_4a.js";const L=(d,t,s=!0)=>{const o=a.useRef(null);o.current=t,a.useEffect(()=>{if(!s)return;const c=u=>{var p,f;(p=d.current)!=null&&p.contains(u.target)||(f=o.current)==null||f.call(o,u)};return document.addEventListener("click",c,!0),()=>document.removeEventListener("click",c,!0)},[d,o,s])},h=({children:d,open:t,onClose:s,closeable:o=!0,noPadding:c=!1,width:u="normal",disableContentScroll:p=!1,...f})=>{const n=a.useRef(null),g=a.useRef(null);return a.useEffect(()=>{const e=n.current,r=()=>{s&&s()};return e==null||e.addEventListener("close",r),()=>{e==null||e.removeEventListener("close",r)}},[s]),a.useEffect(()=>{n.current&&(t&&!n.current.open?n.current.showModal():n.current.open&&n.current.close())},[t]),a.useEffect(()=>{if(!n.current||o)return;const e=v=>{var E;v.cancelable||(E=n.current)==null||E.showModal(),v.preventDefault()},r=n.current;return r.addEventListener("close",e),r.addEventListener("cancel",e),()=>{r==null||r.removeEventListener("close",e),r==null||r.removeEventListener("cancel",e)}},[o]),L(g,()=>{var e;o&&((e=n.current)==null||e.close())},t),t?i.jsx("dialog",{ref:n,...f,className:x`
        border: 0;
        border-radius: 5px;
        padding: 0;
        width: 95%;
        max-width: ${u==="normal"?"700px":"1200px"};
        ${p&&"overflow: hidden;"}

        h1 {
          font-size: ${l.h5};
        }
        h2 {
          font-size: ${l.h6};
        }
        h3 {
          font-size: ${l.h6};
        }
        h4 {
          font-size: ${l.h6};
        }
        h5 {
          font-size: ${l.h6};
        }
        h6 {
          font-size: ${l.h6};
        }

        &::backdrop {
          background: rgba(0, 0, 0, 0.4);
        }
      `,children:i.jsx("div",{role:"presentation",ref:g,className:x`
          ${!c&&"padding: 2rem 3rem;"}
        `,children:d})}):null};try{h.displayName="Dialog",h.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},closeable:{defaultValue:{value:"true"},description:"",name:"closeable",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:{value:"false"},description:"",name:"noPadding",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"normal"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"wide"'}]}},disableContentScroll:{defaultValue:{value:"false"},description:"",name:"disableContentScroll",required:!1,type:{name:"boolean"}}}}}catch{}const z={component:h,parameters:{docs:{description:{component:"A wrapper component for the native HTML dialog element with some additional props. All props available on the regular HTML dialog also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog."}}}},m={args:{open:!1,onClose:()=>{console.log("onClose")},closeable:!0,noPadding:!1,width:"normal",children:i.jsxs(i.Fragment,{children:[i.jsx("h1",{children:"Heading inside dialog"}),i.jsx("p",{children:"Paragraph inside dialog"})]})}};var b,w,y;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(y=(w=m.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const q=["Example"];export{m as Example,q as __namedExportsOrder,z as default};
