import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-0yr9KlQE.js";import{S as k}from"./Spinner-C-0eNUe9.js";import{s as m}from"./emotion-styled.browser.esm-uiAl99qX.js";import{m as w}from"./typography-B78hKXS5.js";import{b as g}from"./theme-DgIg-lup.js";import{u as E}from"./useTranslation-B14mqBe9.js";import"./emotion-utils.browser.esm-YKnV_D65.js";import"./extends-CF3RwP-h.js";const $=({text:e})=>{const i=(typeof e=="string"?e:JSON.stringify(e,void 0,2)).split(`
`);return o.jsx("pre",{children:i.map((n,c)=>o.jsx("span",{children:n},c))})};function u(e){const s=e;return(s!==null&&typeof s=="object"||typeof s=="function")&&typeof s.block_id=="string"}function h(e){const s=e;return(s!==null&&typeof s=="object"||typeof s=="function")&&typeof s.title=="string"&&typeof s.message=="string"&&(s.source===null||typeof s.source=="string")&&(s.data===null||u(s.data))}async function D(e,s){var i,n,c;if(typeof e=="string")return{title:s,message:e};if(typeof e=="object"&&e!==null){let t=e;if(t.data instanceof Blob||t.data&&typeof t.data.text=="function"){const r=await t.data.text();try{const d=JSON.parse(r);t={...t,data:d}}catch{t={...t,data:r}}}if(h(t.data)){const a=t.data,r=a.data;return{title:a.title,message:a.message,sourceData:a.source,linkBlockId:u(r)?r.block_id:void 0,status:typeof t.status=="number"?t.status:void 0}}if(t.isAxiosError){const a=t,r=((i=a.response)==null?void 0:i.data)??t.data;if(h(r)){const l=r.data;return{title:r.title,message:r.message,sourceData:r.source,linkBlockId:u(l)?l.block_id:void 0,status:typeof((n=a.response)==null?void 0:n.status)=="number"?(c=a.response)==null?void 0:c.status:void 0}}const d=typeof r=="object"&&r!==null&&"message"in r?r.message:void 0;return{title:a.message,message:d,sourceData:r}}if(t.status!==void 0&&t.statusText!==void 0&&typeof t.request=="object"&&t.request.responseURL!==void 0)return{title:t.statusText,message:t.request.responseURL,sourceData:t.data,status:t.status};if(t instanceof Error||typeof t.message=="string"&&typeof t.stack=="string"){const a=t;return{title:a.message??s,sourceData:`${String(a.message??"")}
${a.stack??""}`}}}return{title:s,sourceData:e}}const S=m.div`
  background: ${e=>e.isFrontendCrash?"#fff0f6":"#fff5f5"};
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: block;
  border-left: 4px solid ${e=>e.isFrontendCrash?"#e64980":"#da4453"};
  box-shadow: ${e=>e.isFrontendCrash?"inset 0 0 0 1px #e64980":"none"};
`,B=m.div`
  padding-top: ${e=>e.compact?"1rem":"3rem"};
  padding-bottom: ${e=>e.compact?"1rem":"3rem"};
  max-width: 100%;
  font-weight: 500;
  font-size: ${e=>e.compact?"0.95rem":"1rem"};
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
`,x=m.div`
  padding: 0 ${e=>e.compact?"1.5rem":"2rem"};

  h2 {
    font-size: ${e=>e.compact?"1.2rem":"1.5rem"};
    margin: ${e=>e.compact?"0 0 0.5rem 0":"0 0 1rem 0"};
  }
`,T=m.div`
  background: #ffe8ec;
  margin: 0 2rem;
  border-radius: 10px;
  overflow: hidden;
  details {
    padding: 0;
  }

  details[open] summary ~ * {
    color: ${g.colors.gray[700]};
  }

  details[open] > div {
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  details summary {
    padding: 0.75rem 1rem;
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
    font-size: 0.9rem;
    margin: 0 0 0.2rem;
    padding: 15px 30px;
    line-height: 1.7;
    list-style: none;
    background: #ffe3e8;
    border: 2px solid #f5b5c1;
    border-radius: 10px;

    &:nth-child(even) {
      background: #ffd6df;
    }
  }

  ul li pre {
    white-space: pre-wrap;
    font-family: ${w};
    margin: 0;
  }

  ul li pre span {
    display: block;
    padding: 2px 0;
  }

  ul li pre span:nth-of-type(even) {
    background: #ffd6df;
  }
`,C=e=>{const{t:s}=E(),{variant:i="text",error:n,contextMessage:c}=e,t=i==="frontendCrash",a=i==="frontendCrash",[r,d]=f.useState(null);return f.useEffect(()=>{let l=!0;return(async()=>{if(n===void 0)throw new Error("Invalid input");const v=await D(n,s("error-title"));l&&d(v)})(),()=>{l=!1}},[n,s]),r===null?o.jsx(k,{variant:"medium"}):o.jsx(S,{compact:t,isFrontendCrash:a,children:o.jsxs(B,{compact:t,children:[o.jsxs(x,{compact:t,children:[o.jsx("h2",{children:r.status!==void 0?o.jsxs(o.Fragment,{children:[s("error-title")," ",r.status,": ",r.title]}):o.jsxs(o.Fragment,{children:[s("error-title"),": ",r.title]})}),c&&o.jsx("p",{children:c}),r.message&&o.jsx("p",{children:r.message})]}),r.sourceData!==void 0&&o.jsx(T,{children:o.jsxs("details",{children:[o.jsx("summary",{children:s("show-error-source")}),o.jsx("ul",{children:o.jsx("li",{children:o.jsx($,{text:r.sourceData})})})]})}),r.linkBlockId&&o.jsx(x,{children:o.jsx("a",{href:`${window.location.href.replace(location.hash,"")}#${r.linkBlockId}`,children:s("go-to-error")})})]})})},J={component:C,parameters:{docs:{description:{component:"Use this component to display an error banner. The error can be either a string or an Error object."}}}},p={args:{error:"This is an error message."}};var y,b,j;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    error: "This is an error message."
  }
} satisfies StoryType`,...(j=(b=p.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const L=["Example"];export{p as Example,L as __namedExportsOrder,J as default};
