import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./react-mE7dFmCG.js";import{r as n,t as r}from"./es-CCRBf0sY.js";import{x as i}from"./iframe-DP1T4v_l.js";import{n as a,t as o}from"./emotion-styled.browser.esm-FfEKE14e.js";import{n as s,s as c,t as l}from"./styles-BetQWN8g.js";function u(e){return e instanceof d}var d,f=e((()=>{d=class extends Error{kind;status;requestId;messageKey;type;code;userMessage;detail;issues;metadata;retryAfterSeconds;url;method;body;rawText;cause;constructor(e){let t=e.title?.trim()?e.title:`Request failed`;super(t),this.name=`AppApiError`,this.kind=e.kind,this.status=e.status??null,this.requestId=e.requestId??null,this.messageKey=e.messageKey??null,this.type=e.type??null,this.code=e.code??null,this.userMessage=e.userMessage??null,this.detail=e.detail??null,this.issues=e.issues??[],this.metadata=e.metadata??null,this.retryAfterSeconds=e.retryAfterSeconds??null,this.url=e.url??null,this.method=e.method??null,this.body=e.body,this.rawText=e.rawText??null,this.cause=e.cause}}}));function p(e){return typeof e==`object`&&!!e}function m(e){return e===`internal_error`||e===`validation_error`||e===`validation_error_with_metadata`||e===`not_found`||e===`unauthorized`||e===`chapter_not_open_yet`||e===`authentication_required_for_exam_exercise`||e===`forbidden`||e===`rate_limited`||e===`oauth_error`}function h(e){return e===null?`unknown`:e===401||e===403?`auth`:e===404?`not_found`:e===422?`validation`:e===429?`rate_limit`:e>=500?`server`:e>=400?`client`:`unknown`}function g(e){return e===`rate_limit`||e===`unknown`?`warning`:`error`}function _(e){return!p(e)||e instanceof Error?!1:typeof e.type==`string`||typeof e.message_key==`string`||typeof e.message==`string`||Array.isArray(e.errors)||p(e.metadata)}function v(e){return Array.isArray(e)?e.flatMap(e=>!p(e)||typeof e.message!=`string`?[]:[{message:e.message,path:typeof e.path==`string`?e.path:void 0,code:typeof e.code==`string`?e.code:void 0}]):[]}function y(e){return p(e)&&typeof e.title==`string`&&typeof e.message==`string`&&(e.source===void 0||typeof e.source==`string`)}function b(e){return p(e)&&e.name===`AggregateError`&&Array.isArray(e.errors)}function x(e){let t=m(e.message_key)?e.message_key:null,n=typeof e.type==`string`?e.type:null,r=typeof e.message==`string`?e.message:null,i=p(e.metadata)?e.metadata:null,a=i&&typeof i.block_id==`string`?i.block_id:null,o=t===`rate_limited`?`rate_limit`:t===`validation_error`||t===`validation_error_with_metadata`?`validation`:t===`unauthorized`||t===`chapter_not_open_yet`||t===`authentication_required_for_exam_exercise`||t===`forbidden`?`auth`:t===`not_found`?`not_found`:`client`;return{category:o,severity:g(o),title:r??n??`Request failed`,message:r,requestId:null,status:null,messageKey:t,type:n,code:null,retryable:o===`rate_limit`,retryAfterSeconds:null,issues:v(e.errors),blockId:a,technicalDetails:null,raw:e}}function S(e){let t=m(e.messageKey)?e.messageKey:null,n=e.kind===`abort`?`abort`:e.kind===`network`?`network`:e.kind===`parse`?`client`:h(e.status),r=e.metadata&&typeof e.metadata.block_id==`string`?e.metadata.block_id:null;return{category:n,severity:g(n),title:e.message||`Request failed`,message:e.userMessage??e.detail??null,requestId:e.requestId,status:e.status,messageKey:t,type:e.type,code:e.code,retryable:e.status===null||e.status>=500||e.status===429,retryAfterSeconds:e.retryAfterSeconds,issues:e.issues,blockId:r,technicalDetails:{detail:e.detail,method:e.method,url:e.url},raw:e}}function C(e){if(u(e))return S(e);if(y(e)){let t=p(e.data)?e.data:null,n=typeof e.status==`number`?e.status:null,r=h(n);return{category:r,severity:g(r),title:String(e.title),message:String(e.message),requestId:null,status:n,messageKey:null,type:null,code:null,retryable:n===null||n>=500||n===429,retryAfterSeconds:null,issues:[],blockId:t&&typeof t.block_id==`string`?t.block_id:null,technicalDetails:{detail:typeof e.source==`string`?e.source:null},raw:e}}if(_(e))return x(e);if(p(e)&&e.error===`too_many_requests`)return x({type:`rate_limit`,message_key:`rate_limited`,message:`Too many requests. Please try again later.`,errors:[]});if(p(e)&&typeof e.error==`string`)return x({type:`oauth_error`,message_key:`oauth_error`,message:typeof e.error_description==`string`?e.error_description:e.error,errors:[]});if(b(e)){let t=e.errors?.[0],n=t?C(t):null;return{category:n?.category??`client`,severity:n?.severity??`error`,title:(typeof e.message==`string`?e.message:null)||`Multiple errors occurred`,message:n?.message??null,requestId:n?.requestId??null,status:n?.status??null,messageKey:n?.messageKey??null,type:n?.type??null,code:n?.code??null,retryable:!0,retryAfterSeconds:n?.retryAfterSeconds??null,issues:n?.issues??[],blockId:n?.blockId??null,technicalDetails:{detail:`AggregateError(${String(e.errors?.length??0)})`},raw:e}}return p(e)&&e.name===`ZodError`&&Array.isArray(e.issues)?{category:`validation`,severity:`error`,title:`Invalid input`,message:null,requestId:null,status:422,messageKey:`validation_error`,type:`validation_error`,code:null,retryable:!1,retryAfterSeconds:null,issues:v(e.issues),blockId:null,technicalDetails:null,raw:e}:e instanceof Error&&e.name===`AbortError`?{category:`abort`,severity:`info`,title:`Request was cancelled`,message:e.message||null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,technicalDetails:null,raw:e}:e instanceof Error?{category:e.message.toLowerCase().includes(`timeout`)?`timeout`:`client`,severity:`error`,title:e.message||`Unexpected error`,message:null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,technicalDetails:{stack:e.stack??null,detail:e.message},raw:e}:{category:`unknown`,severity:`warning`,title:`Unexpected error`,message:typeof e==`string`?e:(()=>{try{return JSON.stringify(e)}catch{return String(e)}})(),requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,technicalDetails:null,raw:e}}var w=e((()=>{f()}));function T(e,t){let n=e.issues.find(e=>typeof e.code==`string`)?.code;if(!n)return null;let r=t(`error-issue-code.${n}.message`,{defaultValue:``});return r.trim()===``?null:r}function E(e,t){let n=e.messageKey?t(`error-message-key.${e.messageKey}.title`,{defaultValue:e.title}):e.title,r=T(e,t);if(r)return{title:n,message:r};if(e.messageKey){let r=t(`error-message-key.${e.messageKey}.message`,{defaultValue:``});if(r.trim()!==``)return{title:n,message:r}}return{title:n,message:e.message}}var D=e((()=>{})),O,k,A=e((()=>{t(),O=i(),k=({text:e})=>(0,O.jsx)(`pre`,{children:(typeof e==`string`?e:JSON.stringify(e,void 0,2)).split(`
`).map((e,t)=>(0,O.jsx)(`span`,{children:e},t))})}));function j(e,t){let n=C(e);return{title:n.title||t,message:n.message??void 0,sourceData:n.technicalDetails??void 0,linkBlockId:n.blockId??void 0,status:n.status,messageKey:n.messageKey,type:n.type,requestId:n.requestId,code:n.code,issues:n.issues,retryAfterSeconds:n.retryAfterSeconds}}var M=e((()=>{w()})),N,P,F,I,L=e((()=>{o(),l(),N=a.div`
  background: ${e=>e.isFrontendCrash?`#fff0f6`:`#fff5f5`};
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: block;
  border-left: 4px solid ${e=>e.isFrontendCrash?`#e64980`:`#da4453`};
  box-shadow: ${e=>e.isFrontendCrash?`inset 0 0 0 1px #e64980`:`none`};
`,P=a.div`
  padding-top: ${e=>e.compact?`1rem`:`3rem`};
  padding-bottom: ${e=>e.compact?`1rem`:`3rem`};
  max-width: 100%;
  font-weight: 500;
  font-size: ${e=>e.compact?`0.95rem`:`1rem`};
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
`,F=a.div`
  padding: 0 ${e=>e.compact?`1.5rem`:`2rem`};

  h2 {
    font-size: ${e=>e.compact?`1.2rem`:`1.5rem`};
    margin: ${e=>e.compact?`0 0 0.5rem 0`:`0 0 1rem 0`};
  }
`,I=a.div`
  background: #ffe8ec;
  margin: 0 2rem;
  border-radius: 10px;
  overflow: hidden;
  details {
    padding: 0;
  }

  details[open] summary ~ * {
    color: ${s.colors.gray[700]};
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
    color: ${s.colors.gray[700]};
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
    font-family: ${c};
    margin: 0;
  }

  ul li pre span {
    display: block;
    padding: 2px 0;
  }

  ul li pre span:nth-of-type(even) {
    background: #ffd6df;
  }
`})),R,z,B=e((()=>{t(),r(),w(),D(),A(),M(),L(),R=i(),z=e=>{let{t}=n(),{variant:r=`text`,error:i,contextMessage:a}=e,o=r===`frontendCrash`,s=r===`frontendCrash`,c=E(C(i),t),l=j(i,t(`error-title`)),u=l.status!==null&&l.status!==void 0?t(`error-status`,`Status: {{status}}`,{status:l.status}):null,d=l.type?t(`error-type`,`Type: {{type}}`,{type:l.type}):null,f=l.code&&l.code!==l.type?t(`error-code`,`Code: {{code}}`,{code:l.code}):null;return(0,R.jsx)(N,{compact:o,isFrontendCrash:s,role:`alert`,children:(0,R.jsxs)(P,{compact:o,children:[(0,R.jsxs)(F,{compact:o,children:[(0,R.jsx)(`h2`,{children:c.title}),a&&(0,R.jsx)(`p`,{children:a}),c.message&&(0,R.jsx)(`p`,{children:c.message}),!!l.issues?.length&&(0,R.jsx)(`ul`,{children:l.issues.map((e,t)=>(0,R.jsxs)(`li`,{children:[e.path?`${e.path}: `:``,e.message]},`${e.path??`issue`}-${t}`))})]}),(l.sourceData!==void 0||u||d||f||l.requestId||l.retryAfterSeconds!==null&&l.retryAfterSeconds!==void 0)&&(0,R.jsx)(I,{children:(0,R.jsxs)(`details`,{children:[(0,R.jsx)(`summary`,{children:t(`show-error-source`)}),(0,R.jsxs)(`ul`,{children:[u&&(0,R.jsx)(`li`,{children:(0,R.jsx)(k,{text:u})}),l.requestId&&(0,R.jsx)(`li`,{children:(0,R.jsx)(k,{text:t(`error-request-id`,`Request ID: {{requestId}}`,{requestId:l.requestId})})}),l.retryAfterSeconds!==null&&l.retryAfterSeconds!==void 0&&(0,R.jsx)(`li`,{children:(0,R.jsx)(k,{text:t(`error-retry-after`,`Retry after: {{seconds}}s`,{seconds:l.retryAfterSeconds})})}),d&&(0,R.jsx)(`li`,{children:(0,R.jsx)(k,{text:d})}),f&&(0,R.jsx)(`li`,{children:(0,R.jsx)(k,{text:f})})]}),l.sourceData!==void 0&&(0,R.jsx)(`ul`,{children:(0,R.jsx)(`li`,{children:(0,R.jsx)(k,{text:l.sourceData})})})]})}),l.linkBlockId&&(0,R.jsx)(F,{children:(0,R.jsx)(`a`,{href:`${window.location.href.replace(location.hash,``)}#${l.linkBlockId}`,children:t(`go-to-error`)})})]})})}})),V,H,U;e((()=>{B(),V={component:z,parameters:{docs:{description:{component:`Use this component to display an error banner. The error can be either a string or an Error object.`}}}},H={args:{error:`This is an error message.`}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    error: "This is an error message."
  }
} satisfies StoryType`,...H.parameters?.docs?.source}}},U=[`Example`]}))();export{H as Example,U as __namedExportsOrder,V as default};