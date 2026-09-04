import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./useTranslation-B0Jg814S.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./emotion-styled.browser.esm-wsJz3b-B.js";import{c as s,n as c,t as l}from"./styles-BtTBt5TU.js";function u(e,t,n){function r(n,r){if(n._zod||Object.defineProperty(n,"_zod",{value:{def:r,constr:o,traits:new Set},enumerable:!1}),n._zod.traits.has(e))return;n._zod.traits.add(e),t(n,r);let i=o.prototype,a=Object.keys(i);for(let e=0;e<a.length;e++){let t=a[e];t in n||(n[t]=i[t].bind(n))}}let i=n?.Parent??Object;class a extends i{}Object.defineProperty(a,"name",{value:e});function o(e){var t;let i=n?.Parent?new a:this;r(i,e),(t=i._zod).deferred??(t.deferred=[]);for(let e of i._zod.deferred)e();return i}return Object.defineProperty(o,"init",{value:r}),Object.defineProperty(o,Symbol.hasInstance,{value:t=>n?.Parent&&t instanceof n.Parent?!0:t?._zod?.traits?.has(e)}),Object.defineProperty(o,"name",{value:e}),o}var d;function f(){return(f=e((()=>{(d=globalThis).__zod_globalConfig??(d.__zod_globalConfig={}),globalThis.__zod_globalConfig})))()}function p(e,t){return typeof t==`bigint`?t.toString():t}function m(){return(m=e((()=>{`captureStackTrace`in Error&&Error.captureStackTrace,-Number.MAX_VALUE,Number.MAX_VALUE})))()}function h(e,t=e=>e.message){let n={},r=[];for(let i of e.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(t(i))):r.push(t(i));return{formErrors:r,fieldErrors:n}}function g(e,t=e=>e.message){let n={_errors:[]},r=(e,i=[])=>{for(let a of e.issues)if(a.code===`invalid_union`&&a.errors.length)a.errors.map(e=>r({issues:e},[...i,...a.path]));else if(a.code===`invalid_key`)r({issues:a.issues},[...i,...a.path]);else if(a.code===`invalid_element`)r({issues:a.issues},[...i,...a.path]);else{let e=[...i,...a.path];if(e.length===0)n._errors.push(t(a));else{let r=n,i=0;for(;i<e.length;){let n=e[i];i===e.length-1?(r[n]=r[n]||{_errors:[]},r[n]._errors.push(t(a))):r[n]=r[n]||{_errors:[]},r=r[n],i++}}}};return r(e),n}var _,v;function y(){return(y=e((()=>{f(),m(),_=(e,t)=>{e.name=`$ZodError`,Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:t,enumerable:!1}),e.message=JSON.stringify(t,p,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},v=u(`$ZodError`,_),u(`$ZodError`,_,{Parent:Error})})))()}var b,x;function S(){return(S=e((()=>{y(),f(),m(),b=(e,t)=>{v.init(e,t),e.name=`ZodError`,Object.defineProperties(e,{format:{value:t=>g(e,t)},flatten:{value:t=>h(e,t)},addIssue:{value:t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,p,2)}},addIssues:{value:t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,p,2)}},isEmpty:{get(){return e.issues.length===0}}})},x=u(`ZodError`,b)})))()}function ee(e){return e instanceof C}var C;function w(){return(w=e((()=>{C=class extends Error{kind;status;requestId;messageKey;type;code;userMessage;detail;issues;metadata;extra;retryAfterSeconds;url;method;body;rawText;cause;constructor(e){let t=e.title?.trim()?e.title:`Request failed`;super(t),this.name=`AppApiError`,this.kind=e.kind,this.status=e.status??null,this.requestId=e.requestId??null,this.messageKey=e.messageKey??null,this.type=e.type??null,this.code=e.code??null,this.userMessage=e.userMessage??null,this.detail=e.detail??null,this.issues=e.issues??[],this.metadata=e.metadata??null,this.extra=e.extra??null,this.retryAfterSeconds=e.retryAfterSeconds??null,this.url=e.url??null,this.method=e.method??null,this.body=e.body,this.rawText=e.rawText??null,this.cause=e.cause}}})))()}function T(e){return typeof e==`object`&&!!e}function E(e){return e===`internal_error`||e===`validation_error`||e===`response_validation_error`||e===`validation_error_with_metadata`||e===`course_slug_already_taken`||e===`not_found`||e===`unauthorized`||e===`chapter_not_open_yet`||e===`authentication_required_for_exam_exercise`||e===`forbidden`||e===`rate_limited`||e===`oauth_error`||e===`invalid_course_code`||e===`generic_sisu_error`||e===`sisu_resource_not_found`||e===`foreign_key_violation`}function D(e){return e===null?`unknown`:e===401||e===403?`auth`:e===404?`not_found`:e===422?`validation`:e===429?`rate_limit`:e>=500?`server`:e>=400?`client`:`unknown`}function O(e){return e===`rate_limit`||e===`unknown`?`warning`:`error`}function k(e){return!T(e)||e instanceof Error?!1:typeof e.type==`string`||typeof e.message_key==`string`||typeof e.message==`string`||Array.isArray(e.errors)||T(e.metadata)}function A(e){if(typeof e==`string`)return e;if(Array.isArray(e))return e.filter(e=>typeof e==`string`||typeof e==`number`).join(`.`)}function j(e){return Array.isArray(e)?e.flatMap(e=>!T(e)||typeof e.message!=`string`?[]:[{message:e.message,path:A(e.path),code:typeof e.code==`string`?e.code:void 0}]):[]}function M(e,t){if(e.code===`invalid_type`&&`expected`in e&&`received`in e)return t(`error-zod-issue.invalid_type`,{expected:String(e.expected),received:String(e.received)});if(e.code===`invalid_format`){if(`format`in e&&e.format)return t(`error-zod-issue.invalid_format`,{format:String(e.format)});if(`pattern`in e&&e.pattern)return t(`error-zod-issue.invalid_format_pattern`,{pattern:String(e.pattern)})}return e.code===`too_big`&&`maximum`in e&&`inclusive`in e?t(`error-zod-issue.too_big`,{comparator:e.inclusive?`<=`:`<`,maximum:String(e.maximum)}):e.code===`too_small`&&`minimum`in e&&`inclusive`in e?t(`error-zod-issue.too_small`,{comparator:e.inclusive?`>=`:`>`,minimum:String(e.minimum)}):e.code===`unrecognized_keys`&&`keys`in e&&Array.isArray(e.keys)?t(`error-zod-issue.unrecognized_keys`,{keys:e.keys.join(`, `)}):e.message}function N(e){return T(e)&&typeof e.title==`string`&&typeof e.message==`string`&&(e.source===void 0||typeof e.source==`string`)}function P(e){return T(e)&&e.name===`AggregateError`&&Array.isArray(e.errors)}function F(e,t){let n=E(e.message_key)?e.message_key:null,r=typeof e.type==`string`?e.type:null,i=typeof e.message==`string`?e.message:null,a=T(e.metadata)?e.metadata:null,o=a&&typeof a.block_id==`string`?a.block_id:null,s=n===`rate_limited`?`rate_limit`:n===`validation_error`||n===`validation_error_with_metadata`||n===`course_slug_already_taken`||n===`response_validation_error`?`validation`:n===`unauthorized`||n===`chapter_not_open_yet`||n===`authentication_required_for_exam_exercise`||n===`forbidden`?`auth`:n===`not_found`?`not_found`:`client`;return{category:s,severity:O(s),title:i??r??t(`error-request-failed`),message:i,requestId:null,status:null,messageKey:n,type:r,code:null,retryable:s===`rate_limit`,retryAfterSeconds:null,issues:j(e.errors),blockId:o,technicalDetails:null,raw:e}}function te(e,t){let n=E(e.messageKey)?e.messageKey:null,r=e.kind===`abort`?`abort`:e.kind===`network`?`network`:e.kind===`parse`?`client`:D(e.status),i=e.metadata&&typeof e.metadata.block_id==`string`?e.metadata.block_id:null;return{category:r,severity:O(r),title:e.message||t(`error-request-failed`),message:e.userMessage??e.detail??null,requestId:e.requestId,status:e.status,messageKey:n,type:e.type,code:e.code,retryable:e.status===null||e.status>=500||e.status===429,retryAfterSeconds:e.retryAfterSeconds,issues:e.issues,blockId:i,technicalDetails:{detail:e.detail,method:e.method,url:e.url,raw:{type:e.type,messageKey:e.messageKey,code:e.code,message:e.userMessage,status:e.status,issues:e.issues,metadata:e.metadata,extra:e.extra,body:e.body,rawText:e.rawText}},raw:e}}function I(e,t){if(ee(e))return te(e,t);if(N(e)){let t=T(e.data)?e.data:null,n=typeof e.status==`number`?e.status:null,r=D(n);return{category:r,severity:O(r),title:String(e.title),message:String(e.message),requestId:null,status:n,messageKey:null,type:null,code:null,retryable:n===null||n>=500||n===429,retryAfterSeconds:null,issues:[],blockId:t&&typeof t.block_id==`string`?t.block_id:null,technicalDetails:{detail:typeof e.source==`string`?e.source:null},raw:e}}if(k(e))return F(e,t);if(T(e)&&e.error===`too_many_requests`)return F({type:`rate_limit`,message_key:`rate_limited`,message:t(`error-too-many-requests`),errors:[]},t);if(T(e)&&typeof e.error==`string`)return F({type:`oauth_error`,message_key:`oauth_error`,message:typeof e.error_description==`string`?e.error_description:e.error,errors:[]},t);if(P(e)){let n=e.errors?.[0],r=n?I(n,t):null;return{category:r?.category??`client`,severity:r?.severity??`error`,title:(typeof e.message==`string`?e.message:null)||t(`error-multiple-errors-occurred`),message:r?.message??null,requestId:r?.requestId??null,status:r?.status??null,messageKey:r?.messageKey??null,type:r?.type??null,code:r?.code??null,retryable:!0,retryAfterSeconds:r?.retryAfterSeconds??null,issues:r?.issues??[],blockId:r?.blockId??null,technicalDetails:{detail:`AggregateError(${String(e.errors?.length??0)})`},raw:e}}if(e instanceof x){let n=e.issues.map(e=>({message:M(e,t),path:A(e.path),code:typeof e.code==`string`?e.code:void 0}));return{category:`validation`,severity:`error`,title:t(`error-message-key.response_validation_error.title`),message:null,requestId:null,status:422,messageKey:`response_validation_error`,type:`response_validation_error`,code:null,retryable:!1,retryAfterSeconds:null,issues:n,blockId:null,technicalDetails:{raw:e.issues},raw:e}}return e instanceof Error&&e.name===`AbortError`?{category:`abort`,severity:`info`,title:t(`error-request-cancelled`),message:e.message||null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,technicalDetails:null,raw:e}:e instanceof Error?{category:e.message.toLowerCase().includes(`timeout`)?`timeout`:`client`,severity:`error`,title:e.message||t(`error-unexpected-error`),message:null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,technicalDetails:{stack:e.stack??null,detail:e.message},raw:e}:{category:`unknown`,severity:`warning`,title:`Unexpected error`,message:typeof e==`string`?e:(()=>{try{return JSON.stringify(e)}catch{return String(e)}})(),requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,technicalDetails:null,raw:e}}function L(){return(L=e((()=>{S(),w()})))()}function ne(e,t){let n=e.issues.find(e=>typeof e.code==`string`)?.code;if(!n)return null;let r=t(`error-issue-code.${n}.message`,{defaultValue:``});return r.trim()===``?null:r}function re(e,t){let n=e.messageKey?t(`error-message-key.${e.messageKey}.title`,{defaultValue:e.title}):e.title,r=ne(e,t);if(r)return{title:n,message:r};if(e.messageKey){let r=t(`error-message-key.${e.messageKey}.message`,{defaultValue:``});if(r.trim()!==``)return{title:n,message:r}}return{title:n,message:e.message}}function ie(e,t,n){let r=I(e,n),i=r.technicalDetails??void 0;return{title:r.title||t,message:r.message??void 0,sourceData:i?.detail??i?.raw??void 0,technicalDetails:i,linkBlockId:r.blockId??void 0,status:r.status,messageKey:r.messageKey,type:r.type,requestId:r.requestId,code:r.code,issues:r.issues,retryAfterSeconds:r.retryAfterSeconds}}function R(){return(R=e((()=>{L()})))()}var z,B;function V(){return(V=e((()=>{t(),z=i(),B=({text:e})=>{let t=(typeof e==`string`?e:JSON.stringify(e,void 0,2)).split(`
`);return(0,z.jsx)(`pre`,{children:t.map((e,t)=>(0,z.jsx)(`span`,{children:e},t))})}})))()}var H,U,W,G;function K(){return(K=e((()=>{o(),l(),H=a.div`
  background: ${e=>e.isFrontendCrash?`#fff0f6`:`#fff5f5`};
  width: 100%;
  height: 100%;
  ${e=>e.maxHeightVH?`max-height: ${e.maxHeightVH}vh;`:``}
  position: relative;
  margin: 0 auto;
  display: block;
  border-left: 4px solid ${e=>e.isFrontendCrash?`#e64980`:`#da4453`};
  box-shadow: ${e=>e.isFrontendCrash?`inset 0 0 0 1px #e64980`:`none`};
`,U=a.div`
  padding-top: ${e=>e.compact?`1rem`:`3rem`};
  padding-bottom: ${e=>e.compact?`1rem`:`3rem`};
  max-width: 100%;
  height: inherit;
  max-height: inherit;
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
`,W=a.div`
  padding: 0 ${e=>e.compact?`1.5rem`:`2rem`};

  h2 {
    font-size: ${e=>e.compact?`1.2rem`:`1.5rem`};
    margin: ${e=>e.compact?`0 0 0.5rem 0`:`0 0 1rem 0`};
  }
`,G=a.div`
  background: #ffe8ec;
  margin: 0 2rem;
  border-radius: 10px;
  details {
    padding: 0;
  }

  details[open] summary ~ * {
    color: ${c.colors.gray[700]};
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
    color: ${c.colors.gray[700]};
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
    ${e=>e.listMaxHeightVH?`max-height: ${e.listMaxHeightVH}vh;`:``}
    overflow: auto;
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
    font-family: ${s};
    margin: 0;
  }

  ul li pre span {
    display: block;
    padding: 2px 0;
  }

  ul li pre span:nth-of-type(even) {
    background: #ffd6df;
  }
`})))()}var q,J;function Y(){return(Y=e((()=>{t(),r(),L(),R(),V(),K(),q=i(),J=e=>{let{t}=n(),{variant:r=`text`,error:i,contextMessage:a,maxHeightVH:o,listMaxHeightVH:s}=e,c=r===`frontendCrash`,l=r===`frontendCrash`,u=re(I(i,t),t),d=ie(i,t(`error-title`),t),f=d.status!==null&&d.status!==void 0?t(`error-status`,{status:d.status}):null,p=d.type?t(`error-type`,{type:d.type}):null,m=d.messageKey?t(`error-message-key-line`,{messageKey:d.messageKey}):null,h=d.code&&d.code!==d.type?t(`error-code`,{code:d.code}):null,g=d.technicalDetails?.method||d.technicalDetails?.url||d.technicalDetails?.detail||d.technicalDetails?.stack||d.technicalDetails?.raw!==void 0;return(0,q.jsx)(H,{compact:c,isFrontendCrash:l,maxHeightVH:o,role:`alert`,children:(0,q.jsxs)(U,{compact:c,children:[(0,q.jsxs)(W,{compact:c,children:[(0,q.jsx)(`h2`,{children:u.title}),a&&(0,q.jsx)(`p`,{children:a}),u.message&&(0,q.jsx)(`p`,{children:u.message}),!!d.issues?.length&&(0,q.jsx)(`ul`,{children:d.issues.map((e,n)=>(0,q.jsx)(`li`,{children:d.messageKey===`response_validation_error`?t(`error-zod-issue-prefix`,{path:e.path??``,message:e.message,defaultValue:`Validation issue at {{path}}: {{message}}`}):`${e.path?`${e.path}: `:``}${e.message}`},`${e.path??`issue`}-${n}`))})]}),(g||f||p||m||h||d.requestId||d.retryAfterSeconds!==null&&d.retryAfterSeconds!==void 0)&&(0,q.jsx)(G,{listMaxHeightVH:s,children:(0,q.jsxs)(`details`,{children:[(0,q.jsx)(`summary`,{children:t(`show-error-source`)}),(0,q.jsxs)(`ul`,{children:[f&&(0,q.jsx)(`li`,{children:(0,q.jsx)(B,{text:f})}),d.requestId&&(0,q.jsx)(`li`,{children:(0,q.jsx)(B,{text:t(`error-request-id`,{requestId:d.requestId})})}),d.retryAfterSeconds!==null&&d.retryAfterSeconds!==void 0&&(0,q.jsx)(`li`,{children:(0,q.jsx)(B,{text:t(`error-retry-after`,{seconds:d.retryAfterSeconds})})}),p&&(0,q.jsx)(`li`,{children:(0,q.jsx)(B,{text:p})}),m&&(0,q.jsx)(`li`,{children:(0,q.jsx)(B,{text:m})}),h&&(0,q.jsx)(`li`,{children:(0,q.jsx)(B,{text:h})}),d.technicalDetails?.method&&(0,q.jsx)(`li`,{children:(0,q.jsx)(B,{text:t(`error-source-method`,{method:d.technicalDetails.method})})}),d.technicalDetails?.url&&(0,q.jsx)(`li`,{children:(0,q.jsx)(B,{text:t(`error-source-url`,{url:d.technicalDetails.url})})}),d.technicalDetails?.detail&&(0,q.jsx)(`li`,{children:(0,q.jsx)(B,{text:d.technicalDetails.detail})}),d.message&&(0,q.jsx)(`li`,{children:(0,q.jsx)(B,{text:d.message})}),d.technicalDetails?.stack&&(0,q.jsx)(`li`,{children:(0,q.jsx)(B,{text:d.technicalDetails.stack})}),d.technicalDetails?.raw!==void 0&&(0,q.jsx)(`li`,{children:(0,q.jsx)(B,{text:d.technicalDetails.raw})})]}),!g&&d.sourceData!==void 0&&(0,q.jsx)(`ul`,{children:(0,q.jsx)(`li`,{children:(0,q.jsx)(B,{text:d.sourceData})})})]})}),d.linkBlockId&&(0,q.jsx)(W,{children:(0,q.jsx)(`a`,{href:`${window.location.href.replace(location.hash,``)}#${d.linkBlockId}`,children:t(`go-to-error`)})})]})})}})))()}var X,Z,Q;function $(){return($=e((()=>{Y(),X={component:J,parameters:{docs:{description:{component:`Use this component to display an error banner. The error can be either a string or an Error object.`}}}},Z={args:{error:`This is an error message.`}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    error: "This is an error message."
  }
} satisfies StoryType`,...Z.parameters?.docs?.source}}},Q=[`Example`]})))()}$();export{Z as Example,Q as __namedExportsOrder,X as default};