import{j as i}from"./jsx-runtime-CLpGMVip.js";import{c as b}from"./emotion-css.esm-HUuX3KNn.js";import{r as t}from"./index-BAAwwy_G.js";import{t as s}from"./typography-ksV1GOB1.js";import"./emotion-utils.browser.esm-D8RxJ_4a.js";const C=(d,a,l=!0)=>{const o=t.useRef(null);o.current=a,t.useEffect(()=>{if(!l)return;const u=f=>{var p,c;(p=d.current)!=null&&p.contains(f.target)||(c=o.current)==null||c.call(o,f)};return document.addEventListener("click",u,!0),()=>document.removeEventListener("click",u,!0)},[d,o,l])},h=({children:d,open:a,onClose:l,closeable:o=!0,noPadding:u=!1,width:f="normal",disableContentScroll:p=!1,preventBackgroundScroll:c=!1,...L})=>{const n=t.useRef(null),g=t.useRef(null);return t.useEffect(()=>{const e=n.current,r=()=>{l&&l()};return e==null||e.addEventListener("close",r),()=>{e==null||e.removeEventListener("close",r)}},[l]),t.useEffect(()=>{n.current&&(a&&!n.current.open?n.current.showModal():n.current.open&&n.current.close())},[a]),t.useEffect(()=>{if(!n.current||o)return;const e=v=>{var y;v.cancelable||(y=n.current)==null||y.showModal(),v.preventDefault()},r=n.current;return r.addEventListener("close",e),r.addEventListener("cancel",e),()=>{r==null||r.removeEventListener("close",e),r==null||r.removeEventListener("cancel",e)}},[o]),C(g,()=>{var e;o&&((e=n.current)==null||e.close())},a),t.useEffect(()=>(c&&(a?document.body.style.overflow="hidden":document.body.style.overflow=""),()=>{document.body.style.overflow=""}),[a,c]),a?i.jsx("dialog",{ref:n,...L,className:b`
        border: 0;
        border-radius: 5px;
        padding: 0;
        width: 95%;
        max-width: ${f==="normal"?"700px":"1200px"};
        ${p&&"overflow: hidden;"}

        h1 {
          font-size: ${s.h5};
        }
        h2 {
          font-size: ${s.h6};
        }
        h3 {
          font-size: ${s.h6};
        }
        h4 {
          font-size: ${s.h6};
        }
        h5 {
          font-size: ${s.h6};
        }
        h6 {
          font-size: ${s.h6};
        }

        &::backdrop {
          background: rgba(0, 0, 0, 0.4);
        }
      `,children:i.jsx("div",{role:"presentation",ref:g,className:b`
          ${!u&&"padding: 2rem 3rem;"}
        `,children:d})}):null};try{h.displayName="Dialog",h.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},closeable:{defaultValue:{value:"true"},description:"",name:"closeable",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:{value:"false"},description:"",name:"noPadding",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"normal"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"wide"'}]}},disableContentScroll:{defaultValue:{value:"false"},description:"",name:"disableContentScroll",required:!1,type:{name:"boolean"}},preventBackgroundScroll:{defaultValue:{value:"false"},description:"",name:"preventBackgroundScroll",required:!1,type:{name:"boolean"}}}}}catch{}const z={component:h,parameters:{docs:{description:{component:"A wrapper component for the native HTML dialog element with some additional props. All props available on the regular HTML dialog also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog."}}}},m={args:{open:!1,onClose:()=>{console.log("onClose")},closeable:!0,noPadding:!1,width:"normal",children:i.jsxs(i.Fragment,{children:[i.jsx("h1",{children:"Heading inside dialog"}),i.jsx("p",{children:"Paragraph inside dialog"})]})}};var E,w,x;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(x=(w=m.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const S=["Example"];export{m as Example,S as __namedExportsOrder,z as default};
