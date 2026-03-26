import{j as a,u as w,r as h}from"./iframe-CJ3_LdV8.js";import{S as E}from"./Spinner-D63uo2e8.js";import{s as m}from"./emotion-styled.browser.esm-CumKfT5o.js";import{m as $}from"./typography-B78hKXS5.js";import{b as y}from"./theme-DgIg-lup.js";import"./preload-helper-Dp1pzeXC.js";import"./extends-CF3RwP-h.js";const u=({text:e})=>{const i=(typeof e=="string"?e:JSON.stringify(e,void 0,2)).split(`
`);return a.jsx("pre",{children:i.map((n,d)=>a.jsx("span",{children:n},d))})};try{u.displayName="SourceBlock",u.__docgenInfo={description:"",displayName:"SourceBlock",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"unknown"}}}}}catch{}function f(e){const s=e;return(s!==null&&typeof s=="object"||typeof s=="function")&&typeof s.block_id=="string"}function x(e){const s=e;return(s!==null&&typeof s=="object"||typeof s=="function")&&typeof s.title=="string"&&typeof s.message=="string"&&(s.source===null||typeof s.source=="string")&&(s.data===null||f(s.data))}async function D(e,s){var i,n,d;if(typeof e=="string")return{title:s,message:e};if(typeof e=="object"&&e!==null){let t=e;if(t.data instanceof Blob||t.data&&typeof t.data.text=="function"){const r=await t.data.text();try{const c=JSON.parse(r);t={...t,data:c}}catch{t={...t,data:r}}}if(x(t.data)){const o=t.data,r=o.data;return{title:o.title,message:o.message,sourceData:o.source,linkBlockId:f(r)?r.block_id:void 0,status:typeof t.status=="number"?t.status:void 0}}if(t.isAxiosError){const o=t,r=((i=o.response)==null?void 0:i.data)??t.data;if(x(r)){const l=r.data;return{title:r.title,message:r.message,sourceData:r.source,linkBlockId:f(l)?l.block_id:void 0,status:typeof((n=o.response)==null?void 0:n.status)=="number"?(d=o.response)==null?void 0:d.status:void 0}}const c=typeof r=="object"&&r!==null&&"message"in r?r.message:void 0;return{title:o.message,message:c,sourceData:r}}if(t.status!==void 0&&t.statusText!==void 0&&typeof t.request=="object"&&t.request.responseURL!==void 0)return{title:t.statusText,message:t.request.responseURL,sourceData:t.data,status:t.status};if(t instanceof Error||typeof t.message=="string"&&typeof t.stack=="string"){const o=t;return{title:o.message??s,sourceData:`${String(o.message??"")}
${o.stack??""}`}}}return{title:s,sourceData:e}}const B=m.div`
  background: ${e=>e.isFrontendCrash?"#fff0f6":"#fff5f5"};
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: block;
  border-left: 4px solid ${e=>e.isFrontendCrash?"#e64980":"#da4453"};
  box-shadow: ${e=>e.isFrontendCrash?"inset 0 0 0 1px #e64980":"none"};
`,S=m.div`
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
`,b=m.div`
  padding: 0 ${e=>e.compact?"1.5rem":"2rem"};

  h2 {
    font-size: ${e=>e.compact?"1.2rem":"1.5rem"};
    margin: ${e=>e.compact?"0 0 0.5rem 0":"0 0 1rem 0"};
  }
`,C=m.div`
  background: #ffe8ec;
  margin: 0 2rem;
  border-radius: 10px;
  overflow: hidden;
  details {
    padding: 0;
  }

  details[open] summary ~ * {
    color: ${y.colors.gray[700]};
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
    color: ${y.colors.gray[700]};
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
    font-family: ${$};
    margin: 0;
  }

  ul li pre span {
    display: block;
    padding: 2px 0;
  }

  ul li pre span:nth-of-type(even) {
    background: #ffd6df;
  }
`,g=e=>{const{t:s}=w(),{variant:i="text",error:n,contextMessage:d}=e,t=i==="frontendCrash",o=i==="frontendCrash",[r,c]=h.useState(null);return h.useEffect(()=>{let l=!0;return(async()=>{if(n===void 0)throw new Error("Invalid input");const _=await D(n,s("error-title"));l&&c(_)})(),()=>{l=!1}},[n,s]),r===null?a.jsx(E,{variant:"medium"}):a.jsx(B,{compact:t,isFrontendCrash:o,children:a.jsxs(S,{compact:t,children:[a.jsxs(b,{compact:t,children:[a.jsx("h2",{children:r.status!==void 0?a.jsxs(a.Fragment,{children:[s("error-title")," ",r.status,": ",r.title]}):a.jsxs(a.Fragment,{children:[s("error-title"),": ",r.title]})}),d&&a.jsx("p",{children:d}),r.message&&a.jsx("p",{children:r.message})]}),r.sourceData!==void 0&&a.jsx(C,{children:a.jsxs("details",{children:[a.jsx("summary",{children:s("show-error-source")}),a.jsx("ul",{children:a.jsx("li",{children:a.jsx(u,{text:r.sourceData})})})]})}),r.linkBlockId&&a.jsx(b,{children:a.jsx("a",{href:`${window.location.href.replace(location.hash,"")}#${r.linkBlockId}`,children:s("go-to-error")})})]})})};try{g.displayName="ErrorBanner",g.__docgenInfo={description:"",displayName:"ErrorBanner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"readOnly"'},{value:'"text"'},{value:'"link"'},{value:'"frontendCrash"'}]}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"unknown"}},contextMessage:{defaultValue:null,description:"",name:"contextMessage",required:!1,type:{name:"ReactNode"}}}}}catch{}const M={component:g,parameters:{docs:{description:{component:"Use this component to display an error banner. The error can be either a string or an Error object."}}}},p={args:{error:"This is an error message."}};var v,j,k;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    error: "This is an error message."
  }
} satisfies StoryType`,...(k=(j=p.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const R=["Example"];export{p as Example,R as __namedExportsOrder,M as default};
