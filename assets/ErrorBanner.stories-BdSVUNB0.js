import{j as e}from"./jsx-runtime-CLpGMVip.js";import{n as h}from"./emotion-styled.browser.esm-yr_-r2v3.js";import{r as f}from"./index-CZMpeKRu.js";import{b as g}from"./theme-QoxxbpC5.js";import{S as k}from"./Spinner-Dws5Fmo8.js";import{u as S}from"./useTranslation-CFqzwKmp.js";import"./extends-CF3RwP-h.js";import"./emotion-utils.browser.esm-D8RxJ_4a.js";function E(l){const r=l;return(r!==null&&typeof r=="object"||typeof r=="function")&&typeof r.block_id=="string"}function T(l){const r=l;return(r!==null&&typeof r=="object"||typeof r=="function")&&typeof r.title=="string"&&typeof r.message=="string"&&(r.source===null||typeof r.source=="string")&&(r.data===null||E(r.data))}const d=h.div`
  background: #f1f1f1;
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: block;
  border-left: 4px solid #da4453;
`,c=h.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  max-width: 100%;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  a {
    text-decoration: none;
    max-width: 100%;
    cursor: pointer;
    display: flex;
    height: 1rem;
    line-height: 1rem;
    margin-top: 1rem;

    span {
      display: flex;
      align-items: center;
      margin-left: 0.5rem;
    }
  }
`,a=h.div`
  padding: 0 2rem;
`,p=h.div`
  background: #e1e1e1;
  details {
    padding: 0 2rem;
  }

  details[open] summary ~ * {
    color: ${g.colors.gray[700]};
  }

  details[open] > div {
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  details summary {
    padding: 1rem 0;
    position: relative;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: medium;
    list-style: none;
    color: ${g.colors.gray[700]};
    outline: 0;
    ::-webkit-details-marker {
      display: none;
    }
    &:hover {
      text-decoration: underline;
    }
  }

  details[open] > summary {
    color: #1c1c1c;
  }

  details[open] summary {
    opacity: 0.9;
  }

  ul {
    padding: 0;
    margin: 0;
    padding-bottom: 2rem;
  }

  ul li {
    font-size: 1.1rem;
    margin: 0 0 0.2rem;
    padding: 15px 30px;
    line-height: 1.7;
    list-style: none;
    background: #e3e3e3;
    border: 2px solid #c1c1c1;
    border-radius: 10px;
  }

  ul li pre {
    white-space: pre-line;
  }
`,x=l=>{var j;const{t:r}=S(),{variant:O="text",error:v}=l,i=v,[s,m]=f.useState(void 0);if(f.useEffect(()=>{if(typeof i=="object"&&i!==null&&i.data instanceof Blob)i.data.text().then(n=>{try{const o=JSON.parse(n);m({...i,data:o})}catch{m({...i,data:n})}});else{if(i===void 0)throw new Error("Invalid input");m(i)}},[i]),s===void 0)return e.jsx(k,{variant:"medium"});if(typeof s=="string")return e.jsx(d,{children:e.jsx(c,{children:e.jsxs(a,{children:[e.jsx("h2",{children:r("error-title")}),e.jsx("p",{children:s})]})})});if(typeof s=="object"&&s!==null)if(T(s.data)){const t=s.data,n=t.data;let o=e.jsx(e.Fragment,{});if(E(n)){const _=window.location.href.replace(location.hash,"");o=e.jsx("a",{href:`${_}#${n.block_id}`,children:r("go-to-error")})}return e.jsx(d,{children:e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsxs("h2",{children:[r("error-title")," ",s.status,": ",t.title]}),e.jsx("p",{children:t.message})]}),e.jsx(p,{children:t.source&&e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("pre",{children:t.source})})})]})}),t.data&&e.jsx(a,{children:o})]})})}else if(s.isAxiosError){const t=s,n=(j=t.response)==null?void 0:j.data,o=typeof n=="object"&&n!==null&&"message"in n?n.message:void 0;return e.jsx(d,{children:e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsxs("h2",{children:[r("error-title"),": ",t.message]}),o&&e.jsx("p",{children:o})]}),e.jsx(p,{children:!!n&&e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("pre",{children:JSON.stringify(n,void 0,2)})})})]})})]})})}else{if(s.status!==void 0&&s.statusText!==void 0&&typeof s.request=="object"&&s.request.responseURL!==void 0)return e.jsx(d,{children:e.jsxs(c,{children:[e.jsxs(a,{children:[e.jsxs("h2",{children:[r("error-title")," ",s.status,": ",s.statusText]}),e.jsx("p",{children:s.request.responseURL})]}),e.jsx(p,{children:s.data&&e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("pre",{children:JSON.stringify(s.data,void 0,2)})})})]})})]})});if(s instanceof Error)return e.jsx(d,{children:e.jsxs(c,{children:[e.jsx(a,{children:e.jsxs("h2",{children:[r("error-title"),s.message&&`: ${s.message}`]})}),e.jsx(p,{children:e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsxs("pre",{children:[s.toString(),e.jsx("br",{}),s.stack]})})})]})})]})})}return e.jsx(d,{children:e.jsxs(c,{children:[e.jsx(a,{children:e.jsx("h2",{children:r("error-title")})}),e.jsx(p,{children:e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("pre",{children:JSON.stringify(s,void 0,2)})})})]})})]})})};try{x.displayName="ErrorBanner",x.__docgenInfo={description:"",displayName:"ErrorBanner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"readOnly"'},{value:'"text"'},{value:'"link"'}]}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"unknown"}}}}}catch{}const U={component:x,parameters:{docs:{description:{component:"Use this component to display an error banner. The error can be either a string or an Error object."}}}},u={args:{error:"This is an error message."}};var y,b,w;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    error: "This is an error message."
  }
} satisfies StoryType`,...(w=(b=u.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const C=["Example"];export{u as Example,C as __namedExportsOrder,U as default};
