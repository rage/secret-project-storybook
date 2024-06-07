import{j as e}from"./emotion-serialize.browser.esm-Xr4f5Ts3.js";import{n as m}from"./emotion-styled.browser.esm-OyKATk7d.js";import{r as y}from"./index-CDs2tPxN.js";import{b}from"./theme-QoxxbpC5.js";import{S as O}from"./Spinner-DklfHp98.js";import{u as $}from"./useTranslation-B1yBCfgX.js";import"./extends-CCbyfPlC.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BA1o8LyZ.js";function k(d){const r=d;return(r!==null&&typeof r=="object"||typeof r=="function")&&typeof r.block_id=="string"}function B(d){const r=d;return(r!==null&&typeof r=="object"||typeof r=="function")&&typeof r.title=="string"&&typeof r.message=="string"&&(r.source===null||typeof r.source=="string")&&(r.data===null||k(r.data))}const a=m.div`
  background: #f1f1f1;
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: block;
  border-left: 4px solid #da4453;
`,l=m.div`
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
`,o=m.div`
  padding: 0 2rem;
`,c=m.div`
  background: #e1e1e1;
  details {
    padding: 0 2rem;
  }

  details[open] summary ~ * {
    color: ${b.colors.gray[700]};
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
    color: ${b.colors.gray[700]};
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
`,J=d=>{var u,j,f,g;const{t:r}=$(),{error:S}=d,t=S,[s,x]=y.useState(void 0);if(y.useEffect(()=>{if(typeof t=="object"&&t!==null&&t.data instanceof Blob)t.data.text().then(n=>{try{const h=JSON.parse(n);x({...t,data:h})}catch{x({...t,data:n})}});else{if(t===void 0)throw new Error("Invalid input");x(t)}},[t]),s===void 0)return e.jsx(O,{variant:"medium"});if(typeof s=="string")return e.jsx(a,{children:e.jsx(l,{children:e.jsxs(o,{children:[e.jsx("h2",{children:r("error-title")}),e.jsx("p",{children:s})]})})});if(typeof s=="object"&&s!==null)if(B(s.data)){const i=s.data,n=i.data;let h=e.jsx(e.Fragment,{});if(k(n)){const T=window.location.href.replace(location.hash,"");h=e.jsx("a",{href:`${T}#${n.block_id}`,children:"Go to error"})}return e.jsx(a,{children:e.jsxs(l,{children:[e.jsxs(o,{children:[e.jsxs("h2",{children:[r("error-title")," ",s.status,": ",i.title]}),e.jsx("p",{children:i.message})]}),e.jsx(c,{children:i.source&&e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("pre",{children:i.source})})})]})}),i.data&&e.jsx(o,{children:h})]})})}else if(s.isAxiosError){const i=s,n=(j=(u=i.response)==null?void 0:u.data)==null?void 0:j.message;return e.jsx(a,{children:e.jsxs(l,{children:[e.jsxs(o,{children:[e.jsxs("h2",{children:[r("error-title"),": ",i.message]}),n&&e.jsx("p",{children:n})]}),e.jsx(c,{children:!!((f=i.response)!=null&&f.data)&&e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("pre",{children:JSON.stringify((g=i.response)==null?void 0:g.data,void 0,2)})})})]})})]})})}else{if(s.status!==void 0&&s.statusText!==void 0&&typeof s.request=="object"&&s.request.responseURL!==void 0)return e.jsx(a,{children:e.jsxs(l,{children:[e.jsxs(o,{children:[e.jsxs("h2",{children:[r("error-title")," ",s.status,": ",s.statusText]}),e.jsx("p",{children:s.request.responseURL})]}),e.jsx(c,{children:s.data&&e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("pre",{children:JSON.stringify(s.data,void 0,2)})})})]})})]})});if(s instanceof Error)return e.jsx(a,{children:e.jsxs(l,{children:[e.jsx(o,{children:e.jsxs("h2",{children:[r("error-title"),s.message&&`: ${s.message}`]})}),e.jsx(c,{children:e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsxs("pre",{children:[s.toString(),e.jsx("br",{}),s.stack]})})})]})})]})})}return e.jsx(a,{children:e.jsxs(l,{children:[e.jsx(o,{children:e.jsx("h2",{children:r("error-title")})}),e.jsx(c,{children:e.jsxs("details",{children:[e.jsx("summary",{children:r("show-error-source")}),e.jsx("ul",{children:e.jsx("li",{children:e.jsx("pre",{children:JSON.stringify(s,void 0,2)})})})]})})]})})},L={component:J,parameters:{docs:{description:{component:"Use this component to display an error banner. The error can be either a string or an Error object."}}}},p={args:{error:"This is an error message."}};var v,w,E;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    error: "This is an error message."
  }
} satisfies StoryType`,...(E=(w=p.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const A=["Example"];export{p as Example,A as __namedExportsOrder,L as default};
