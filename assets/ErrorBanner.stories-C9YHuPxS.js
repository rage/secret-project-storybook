import{j as e}from"./jsx-runtime-CLpGMVip.js";import{n as h}from"./emotion-styled.browser.esm-D7Zr_4sy.js";import{r as b}from"./index-BAAwwy_G.js";import{b as w}from"./theme-QoxxbpC5.js";import{S as O}from"./Spinner-BNQ2UB1M.js";import{u as B}from"./useTranslation-ev4gkA6l.js";import"./extends-CF3RwP-h.js";import"./emotion-utils.browser.esm-D8RxJ_4a.js";function _(a){const r=a;return(r!==null&&typeof r=="object"||typeof r=="function")&&typeof r.block_id=="string"}function N(a){const r=a;return(r!==null&&typeof r=="object"||typeof r=="function")&&typeof r.title=="string"&&typeof r.message=="string"&&(r.source===null||typeof r.source=="string")&&(r.data===null||_(r.data))}const d=h.div`
  background: #f1f1f1;
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: block;
  border-left: 4px solid #da4453;
`,l=h.div`
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
`,o=h.div`
  padding: 0 2rem;
`,c=h.div`
  background: #e1e1e1;
  details {
    padding: 0 2rem;
  }

  details[open] summary ~ * {
    color: ${w.colors.gray[700]};
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
    color: ${w.colors.gray[700]};
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
`,x=a=>{var j,f,g,y;const{t:r}=B(),{error:S}=a,t=S,[s,m]=b.useState(void 0);if(b.useEffect(()=>{if(typeof t=="object"&&t!==null&&t.data instanceof Blob)t.data.text().then(i=>{try{const p=JSON.parse(i);m({...t,data:p})}catch{m({...t,data:i})}});else{if(t===void 0)throw new Error("Invalid input");m(t)}},[t]),s===void 0)return e.jsx(O,{variant:"medium"});if(typeof s=="string")return e.jsx(d,{children:e.jsx(l,{children:e.jsxs(o,{children:[e.jsx("h2",{children:r("error-title")}),e.jsx("p",{children:s})]})})});if(typeof s=="object"&&s!==null)if(N(s.data)){const n=s.data,i=n.data;let p=e.jsx(e.Fragment,{});if(_(i)){const T=window.location.href.replace(location.hash,"");p=e.jsx("a",{href:`${T}#${i.block_id}`,children:r("go-to-error")})}return e.jsx(d,{children:e.jsxs(l,{children:[e.jsxs(o,{children:[e.jsxs("h2",{children:[r("error-title")," ",s.status,": ",n.title]}),e.jsx("p",{children:n.message})]}),e.jsx(c,{children:n.source&&e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("pre",{children:n.source})})})]})}),n.data&&e.jsx(o,{children:p})]})})}else if(s.isAxiosError){const n=s,i=(f=(j=n.response)==null?void 0:j.data)==null?void 0:f.message;return e.jsx(d,{children:e.jsxs(l,{children:[e.jsxs(o,{children:[e.jsxs("h2",{children:[r("error-title"),": ",n.message]}),i&&e.jsx("p",{children:i})]}),e.jsx(c,{children:!!((g=n.response)!=null&&g.data)&&e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("pre",{children:JSON.stringify((y=n.response)==null?void 0:y.data,void 0,2)})})})]})})]})})}else{if(s.status!==void 0&&s.statusText!==void 0&&typeof s.request=="object"&&s.request.responseURL!==void 0)return e.jsx(d,{children:e.jsxs(l,{children:[e.jsxs(o,{children:[e.jsxs("h2",{children:[r("error-title")," ",s.status,": ",s.statusText]}),e.jsx("p",{children:s.request.responseURL})]}),e.jsx(c,{children:s.data&&e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("pre",{children:JSON.stringify(s.data,void 0,2)})})})]})})]})});if(s instanceof Error)return e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(o,{children:e.jsxs("h2",{children:[r("error-title"),s.message&&`: ${s.message}`]})}),e.jsx(c,{children:e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsxs("pre",{children:[s.toString(),e.jsx("br",{}),s.stack]})})})]})})]})})}return e.jsx(d,{children:e.jsxs(l,{children:[e.jsx(o,{children:e.jsx("h2",{children:r("error-title")})}),e.jsx(c,{children:e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("pre",{children:JSON.stringify(s,void 0,2)})})})]})})]})})};try{x.displayName="ErrorBanner",x.__docgenInfo={description:"",displayName:"ErrorBanner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"link"'},{value:'"text"'},{value:'"readOnly"'}]}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"unknown"}}}}}catch{}const I={component:x,parameters:{docs:{description:{component:"Use this component to display an error banner. The error can be either a string or an Error object."}}}},u={args:{error:"This is an error message."}};var E,v,k;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    error: "This is an error message."
  }
} satisfies StoryType`,...(k=(v=u.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const L=["Example"];export{u as Example,L as __namedExportsOrder,I as default};
