import{j as r,u as C}from"./iframe-DXyIoFKT.js";import{s as p}from"./emotion-styled.browser.esm-D3ju6Bg2.js";import{m as T}from"./typography-B78hKXS5.js";import{b as A}from"./theme-DgIg-lup.js";import"./preload-helper-Dp1pzeXC.js";import"./extends-CF3RwP-h.js";class B extends Error{constructor(t){var a;const n=(a=t.title)!=null&&a.trim()?t.title:"Request failed";super(n),this.name="AppApiError",this.kind=t.kind,this.status=t.status??null,this.requestId=t.requestId??null,this.messageKey=t.messageKey??null,this.type=t.type??null,this.code=t.code??null,this.userMessage=t.userMessage??null,this.detail=t.detail??null,this.issues=t.issues??[],this.metadata=t.metadata??null,this.retryAfterSeconds=t.retryAfterSeconds??null,this.url=t.url??null,this.method=t.method??null,this.body=t.body,this.rawText=t.rawText??null,this.cause=t.cause}}function M(e){return e instanceof B}function o(e){return typeof e=="object"&&e!==null}function v(e){return e==="internal_error"||e==="validation_error"||e==="validation_error_with_metadata"||e==="not_found"||e==="unauthorized"||e==="chapter_not_open_yet"||e==="authentication_required_for_exam_exercise"||e==="forbidden"||e==="rate_limited"||e==="oauth_error"}function E(e){return e===null?"unknown":e===401||e===403?"auth":e===404?"not_found":e===422?"validation":e===429?"rate_limit":e>=500?"server":e>=400?"client":"unknown"}function k(e){return e==="rate_limit"||e==="unknown"?"warning":"error"}function R(e){return!o(e)||e instanceof Error?!1:typeof e.type=="string"||typeof e.message_key=="string"||typeof e.message=="string"||Array.isArray(e.errors)||o(e.metadata)}function $(e){return Array.isArray(e)?e.flatMap(t=>!o(t)||typeof t.message!="string"?[]:[{message:t.message,path:typeof t.path=="string"?t.path:void 0,code:typeof t.code=="string"?t.code:void 0}]):[]}function F(e){return o(e)&&typeof e.title=="string"&&typeof e.message=="string"&&(e.source===void 0||typeof e.source=="string")}function V(e){return o(e)&&e.name==="AggregateError"&&Array.isArray(e.errors)}function _(e){const t=v(e.message_key)?e.message_key:null,n=typeof e.type=="string"?e.type:null,a=typeof e.message=="string"?e.message:null,s=o(e.metadata)?e.metadata:null,l=s&&typeof s.block_id=="string"?s.block_id:null,c=t==="rate_limited"?"rate_limit":t==="validation_error"||t==="validation_error_with_metadata"?"validation":t==="unauthorized"||t==="chapter_not_open_yet"||t==="authentication_required_for_exam_exercise"||t==="forbidden"?"auth":t==="not_found"?"not_found":"client";return{category:c,severity:k(c),title:a??n??"Request failed",message:a,requestId:null,status:null,messageKey:t,type:n,code:null,retryable:c==="rate_limit",retryAfterSeconds:null,issues:$(e.errors),blockId:l,technicalDetails:null,raw:e}}function L(e){const t=v(e.messageKey)?e.messageKey:null,n=e.kind==="abort"?"abort":e.kind==="network"?"network":e.kind==="parse"?"client":E(e.status),a=e.metadata&&typeof e.metadata.block_id=="string"?e.metadata.block_id:null;return{category:n,severity:k(n),title:e.message||"Request failed",message:e.userMessage??e.detail??null,requestId:e.requestId,status:e.status,messageKey:t,type:e.type,code:e.code,retryable:e.status===null||e.status>=500||e.status===429,retryAfterSeconds:e.retryAfterSeconds,issues:e.issues,blockId:a,technicalDetails:{detail:e.detail,method:e.method,url:e.url},raw:e}}function b(e){var t,n;if(M(e))return L(e);if(F(e)){const a=o(e.data)?e.data:null,s=typeof e.status=="number"?e.status:null,l=E(s);return{category:l,severity:k(l),title:String(e.title),message:String(e.message),requestId:null,status:s,messageKey:null,type:null,code:null,retryable:s===null||s>=500||s===429,retryAfterSeconds:null,issues:[],blockId:a&&typeof a.block_id=="string"?a.block_id:null,technicalDetails:{detail:typeof e.source=="string"?e.source:null},raw:e}}if(R(e))return _(e);if(o(e)&&e.error==="too_many_requests")return _({type:"rate_limit",message_key:"rate_limited",message:"Too many requests. Please try again later.",errors:[]});if(o(e)&&typeof e.error=="string")return _({type:"oauth_error",message_key:"oauth_error",message:typeof e.error_description=="string"?e.error_description:e.error,errors:[]});if(V(e)){const a=(t=e.errors)==null?void 0:t[0],s=a?b(a):null;return{category:(s==null?void 0:s.category)??"client",severity:(s==null?void 0:s.severity)??"error",title:(typeof e.message=="string"?e.message:null)||"Multiple errors occurred",message:(s==null?void 0:s.message)??null,requestId:(s==null?void 0:s.requestId)??null,status:(s==null?void 0:s.status)??null,messageKey:(s==null?void 0:s.messageKey)??null,type:(s==null?void 0:s.type)??null,code:(s==null?void 0:s.code)??null,retryable:!0,retryAfterSeconds:(s==null?void 0:s.retryAfterSeconds)??null,issues:(s==null?void 0:s.issues)??[],blockId:(s==null?void 0:s.blockId)??null,technicalDetails:{detail:`AggregateError(${String(((n=e.errors)==null?void 0:n.length)??0)})`},raw:e}}return o(e)&&e.name==="ZodError"&&Array.isArray(e.issues)?{category:"validation",severity:"error",title:"Invalid input",message:null,requestId:null,status:422,messageKey:"validation_error",type:"validation_error",code:null,retryable:!1,retryAfterSeconds:null,issues:$(e.issues),blockId:null,technicalDetails:null,raw:e}:e instanceof Error&&e.name==="AbortError"?{category:"abort",severity:"info",title:"Request was cancelled",message:e.message||null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,technicalDetails:null,raw:e}:e instanceof Error?{category:e.message.toLowerCase().includes("timeout")?"timeout":"client",severity:"error",title:e.message||"Unexpected error",message:null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,technicalDetails:{stack:e.stack??null,detail:e.message},raw:e}:{category:"unknown",severity:"warning",title:"Unexpected error",message:typeof e=="string"?e:(()=>{try{return JSON.stringify(e)}catch{return String(e)}})(),requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,technicalDetails:null,raw:e}}function O(e,t){var s;const n=(s=e.issues.find(l=>typeof l.code=="string"))==null?void 0:s.code;if(!n)return null;const a=t(`error-issue-code.${n}.message`,{defaultValue:""});return a.trim()===""?null:a}function P(e,t){const n=e.messageKey?t(`error-message-key.${e.messageKey}.title`,{defaultValue:e.title}):e.title,a=O(e,t);if(a)return{title:n,message:a};if(e.messageKey){const s=t(`error-message-key.${e.messageKey}.message`,{defaultValue:""});if(s.trim()!=="")return{title:n,message:s}}return{title:n,message:e.message}}const u=({text:e})=>{const n=(typeof e=="string"?e:JSON.stringify(e,void 0,2)).split(`
`);return r.jsx("pre",{children:n.map((a,s)=>r.jsx("span",{children:a},s))})};try{u.displayName="SourceBlock",u.__docgenInfo={description:"",displayName:"SourceBlock",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"unknown"}}}}}catch{}function U(e,t){const n=b(e);return{title:n.title||t,message:n.message??void 0,sourceData:n.technicalDetails??void 0,linkBlockId:n.blockId??void 0,status:n.status,messageKey:n.messageKey,type:n.type,requestId:n.requestId,code:n.code,issues:n.issues,retryAfterSeconds:n.retryAfterSeconds}}const J=p.div`
  background: ${e=>e.isFrontendCrash?"#fff0f6":"#fff5f5"};
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: block;
  border-left: 4px solid ${e=>e.isFrontendCrash?"#e64980":"#da4453"};
  box-shadow: ${e=>e.isFrontendCrash?"inset 0 0 0 1px #e64980":"none"};
`,W=p.div`
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
`,I=p.div`
  padding: 0 ${e=>e.compact?"1.5rem":"2rem"};

  h2 {
    font-size: ${e=>e.compact?"1.2rem":"1.5rem"};
    margin: ${e=>e.compact?"0 0 0.5rem 0":"0 0 1rem 0"};
  }
`,Z=p.div`
  background: #ffe8ec;
  margin: 0 2rem;
  border-radius: 10px;
  overflow: hidden;
  details {
    padding: 0;
  }

  details[open] summary ~ * {
    color: ${A.colors.gray[700]};
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
    color: ${A.colors.gray[700]};
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
    font-family: ${T};
    margin: 0;
  }

  ul li pre span {
    display: block;
    padding: 2px 0;
  }

  ul li pre span:nth-of-type(even) {
    background: #ffd6df;
  }
`,x=e=>{var w;const{t}=C(),{variant:n="text",error:a,contextMessage:s}=e,l=n==="frontendCrash",c=n==="frontendCrash",K=b(a),y=P(K,t),i=U(a,t("error-title")),g=i.status!==null&&i.status!==void 0?t("error-status","Status: {{status}}",{status:i.status}):null,f=i.type?t("error-type","Type: {{type}}",{type:i.type}):null,h=i.code&&i.code!==i.type?t("error-code","Code: {{code}}",{code:i.code}):null;return r.jsx(J,{compact:l,isFrontendCrash:c,role:"alert",children:r.jsxs(W,{compact:l,children:[r.jsxs(I,{compact:l,children:[r.jsx("h2",{children:y.title}),s&&r.jsx("p",{children:s}),y.message&&r.jsx("p",{children:y.message}),!!((w=i.issues)!=null&&w.length)&&r.jsx("ul",{children:i.issues.map((d,D)=>r.jsxs("li",{children:[d.path?`${d.path}: `:"",d.message]},`${d.path??"issue"}-${D}`))})]}),(i.sourceData!==void 0||g||f||h||i.requestId||i.retryAfterSeconds!==null&&i.retryAfterSeconds!==void 0)&&r.jsx(Z,{children:r.jsxs("details",{children:[r.jsx("summary",{children:t("show-error-source")}),r.jsxs("ul",{children:[g&&r.jsx("li",{children:r.jsx(u,{text:g})}),i.requestId&&r.jsx("li",{children:r.jsx(u,{text:t("error-request-id","Request ID: {{requestId}}",{requestId:i.requestId})})}),i.retryAfterSeconds!==null&&i.retryAfterSeconds!==void 0&&r.jsx("li",{children:r.jsx(u,{text:t("error-retry-after","Retry after: {{seconds}}s",{seconds:i.retryAfterSeconds})})}),f&&r.jsx("li",{children:r.jsx(u,{text:f})}),h&&r.jsx("li",{children:r.jsx(u,{text:h})})]}),i.sourceData!==void 0&&r.jsx("ul",{children:r.jsx("li",{children:r.jsx(u,{text:i.sourceData})})})]})}),i.linkBlockId&&r.jsx(I,{children:r.jsx("a",{href:`${window.location.href.replace(location.hash,"")}#${i.linkBlockId}`,children:t("go-to-error")})})]})})};try{x.displayName="ErrorBanner",x.__docgenInfo={description:"",displayName:"ErrorBanner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"readOnly"'},{value:'"text"'},{value:'"link"'},{value:'"frontendCrash"'}]}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"unknown"}},contextMessage:{defaultValue:null,description:"",name:"contextMessage",required:!1,type:{name:"ReactNode"}}}}}catch{}const N={component:x,parameters:{docs:{description:{component:"Use this component to display an error banner. The error can be either a string or an Error object."}}}},m={args:{error:"This is an error message."}};var j,q,S;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    error: "This is an error message."
  }
} satisfies StoryType`,...(S=(q=m.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};const ee=["Example"];export{m as Example,ee as __namedExportsOrder,N as default};
