import{j as l}from"./jsx-runtime-CLpGMVip.js";import{c as t,a as d}from"./emotion-css.esm-COI6KVUB.js";import{n as w}from"./emotion-styled.browser.esm-CDpaQ36c.js";import{r as T}from"./index-BAAwwy_G.js";import{p as $}from"./typography-BJ13ygNv.js";import{b as s}from"./theme-QoxxbpC5.js";import{e as c}from"./strings-NLxxmnpi.js";import{u as _}from"./useTranslation-ev4gkA6l.js";import"./emotion-serialize.esm-CH7fXiIe.js";import"./extends-CF3RwP-h.js";const q=s.colors.red[600],E="#dedede",V=w.input`
  background: #fcfcfc;
  border-width: 2px;
  border-style: solid;
  border-radius: 3px;
  border-color: ${({error:a})=>a?q:E};
  ${({colorField:a})=>!a&&"padding: 8px 10px 10px 10px;"}
  transition: ease-in-out, width 0.35s ease-in-out;
  outline: none;
  min-width: 20px;
  width: 100%;
  display: block;
  font-size: 16px;

  ${({disabled:a})=>a&&"cursor: not-allowed;"}

  &:focus,
  &:active {
    border-color: #55b3f5;
  }

  @media (max-width: 767.98px) {
    padding: 6px 8px;
  }
`,F=t`
  color: ${s.colors.red[600]};
  font-size: 14px;
  display: inline-block;
`,i=T.forwardRef(({onChange:a,onChangeByValue:p,className:h,disabled:r,error:o,...e},g)=>{const{t:y}=_(),b=u=>{if(p){const{target:{value:v}}=u;p(v)}a&&a(u)};return l.jsxs("div",{className:d(t`
            margin-bottom: 1rem;
            ${r&&`cursor: not-allowed;
            filter: opacity(0.5);`}
          `,h),children:[l.jsxs("label",{"aria-label":`${e.label}${e.required===!0&&` (${y("required")})`}`,className:d(t`
              color: #333;
              font-family: ${$};
              font-weight: 500;
              font-size: 14px;
              display: block;
              margin-bottom: 2px;
              ${r&&`color: ${s.colors.gray[400]};`}
              ${r&&"cursor: not-allowed;"}
            `,e.labelStyle),children:[e.label&&l.jsxs(l.Fragment,{children:[e.label," ",e.required===!0&&" *"]}),l.jsx(V,{id:e.id,name:e.name,disabled:r,colorField:e.type==="color","aria-errormessage":`${e.id??e.label}_error`,"aria-invalid":o!==void 0,onChange:b,defaultValue:e.defaultValue,error:c(o)??void 0,ref:g,...e})]}),l.jsx("span",{className:o?d(F):t`
                  visibility: hidden;
                `,id:`${e.id??e.label}_error`,role:"alert",children:c(o)})]})});i.displayName="TextField";try{i.displayName="TextField",i.__docgenInfo={description:"",displayName:"TextField",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"email"'},{value:'"color"'},{value:'"password"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"any"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!1,type:{name:"((value: string, name?: string) => void)"}}}}}catch{}const M={component:i,parameters:{docs:{description:{component:"Extends the native HTML input type='text' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text."}}}},n={args:{label:"Example",placeholder:"Placeholder",onChange:a=>{console.log("Textfield changed to"+a.target.value)},value:void 0,defaultValue:void 0,required:!1}};var m,f,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Example",
    placeholder: "Placeholder",
    onChange: event => {
      console.log("Textfield changed to" + event.target.value);
    },
    value: undefined,
    defaultValue: undefined,
    required: false
  }
} satisfies StoryType`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const A=["Example"];export{n as Example,A as __namedExportsOrder,M as default};
