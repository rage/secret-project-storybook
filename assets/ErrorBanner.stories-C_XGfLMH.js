import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as m}from"./emotion-styled.browser.esm-uiAl99qX.js";import{r as j}from"./index-0yr9KlQE.js";import{b as f}from"./theme-DgIg-lup.js";import{S as k}from"./Spinner-D452YIrd.js";import{u as S}from"./useTranslation-B14mqBe9.js";import"./extends-CF3RwP-h.js";import"./emotion-utils.browser.esm-YKnV_D65.js";function v(c){const r=c;return(r!==null&&typeof r=="object"||typeof r=="function")&&typeof r.block_id=="string"}function T(c){const r=c;return(r!==null&&typeof r=="object"||typeof r=="function")&&typeof r.title=="string"&&typeof r.message=="string"&&(r.source===null||typeof r.source=="string")&&(r.data===null||v(r.data))}const l=m.div`
  background: #f1f1f1;
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: block;
  border-left: 4px solid #da4453;
`,d=m.div`
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
`,a=m.div`
  padding: 0 2rem;
`,h=m.div`
  background: #e1e1e1;
  details {
    padding: 0 2rem;
  }

  details[open] summary ~ * {
    color: ${f.colors.gray[700]};
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
    color: ${f.colors.gray[700]};
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
`,O=c=>{var u;const{t:r}=S(),{variant:_="text",error:w}=c,n=w,[s,x]=j.useState(void 0);if(j.useEffect(()=>{if(typeof n=="object"&&n!==null&&n.data instanceof Blob)n.data.text().then(i=>{try{const o=JSON.parse(i);x({...n,data:o})}catch{x({...n,data:i})}});else{if(n===void 0)throw new Error("Invalid input");x(n)}},[n]),s===void 0)return e.jsx(k,{variant:"medium"});if(typeof s=="string")return e.jsx(l,{children:e.jsx(d,{children:e.jsxs(a,{children:[e.jsx("h2",{children:r("error-title")}),e.jsx("p",{children:s})]})})});if(typeof s=="object"&&s!==null)if(T(s.data)){const t=s.data,i=t.data;let o=e.jsx(e.Fragment,{});if(v(i)){const E=window.location.href.replace(location.hash,"");o=e.jsx("a",{href:`${E}#${i.block_id}`,children:r("go-to-error")})}return e.jsx(l,{children:e.jsxs(d,{children:[e.jsxs(a,{children:[e.jsxs("h2",{children:[r("error-title")," ",s.status,": ",t.title]}),e.jsx("p",{children:t.message})]}),e.jsx(h,{children:t.source&&e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("pre",{children:t.source})})})]})}),t.data&&e.jsx(a,{children:o})]})})}else if(s.isAxiosError){const t=s,i=(u=t.response)==null?void 0:u.data,o=typeof i=="object"&&i!==null&&"message"in i?i.message:void 0;return e.jsx(l,{children:e.jsxs(d,{children:[e.jsxs(a,{children:[e.jsxs("h2",{children:[r("error-title"),": ",t.message]}),o&&e.jsx("p",{children:o})]}),e.jsx(h,{children:!!i&&e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("pre",{children:JSON.stringify(i,void 0,2)})})})]})})]})})}else{if(s.status!==void 0&&s.statusText!==void 0&&typeof s.request=="object"&&s.request.responseURL!==void 0)return e.jsx(l,{children:e.jsxs(d,{children:[e.jsxs(a,{children:[e.jsxs("h2",{children:[r("error-title")," ",s.status,": ",s.statusText]}),e.jsx("p",{children:s.request.responseURL})]}),e.jsx(h,{children:s.data&&e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("pre",{children:JSON.stringify(s.data,void 0,2)})})})]})})]})});if(s instanceof Error)return e.jsx(l,{children:e.jsxs(d,{children:[e.jsx(a,{children:e.jsxs("h2",{children:[r("error-title"),s.message&&`: ${s.message}`]})}),e.jsx(h,{children:e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsxs("pre",{children:[s.toString(),e.jsx("br",{}),s.stack]})})})]})})]})})}return e.jsx(l,{children:e.jsxs(d,{children:[e.jsx(a,{children:e.jsx("h2",{children:r("error-title")})}),e.jsx(h,{children:e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("pre",{children:JSON.stringify(s,void 0,2)})})})]})})]})})},U={component:O,parameters:{docs:{description:{component:"Use this component to display an error banner. The error can be either a string or an Error object."}}}},p={args:{error:"This is an error message."}};var g,y,b;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    error: "This is an error message."
  }
} satisfies StoryType`,...(b=(y=p.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const C=["Example"];export{p as Example,C as __namedExportsOrder,U as default};
