import{j as l}from"./emotion-serialize.browser.esm-Xr4f5Ts3.js";import{c as n,a as s}from"./emotion-css.esm-DPNEF3j8.js";import{n as w}from"./emotion-styled.browser.esm-OyKATk7d.js";import{r as T}from"./index-CDs2tPxN.js";import{p as $}from"./typography-BJ13ygNv.js";import{b as d}from"./theme-QoxxbpC5.js";import{e as u}from"./strings-x18Zmgj1.js";import{u as _}from"./useTranslation-B1yBCfgX.js";import"./extends-CCbyfPlC.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BA1o8LyZ.js";const q=d.colors.red[600],E="#dedede",V=w.input`
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
`,F=n`
  color: ${d.colors.red[600]};
  font-size: 14px;
  display: inline-block;
`,i=T.forwardRef(({onChange:a,onChangeByValue:p,className:h,disabled:o,error:r,...e},g)=>{const{t:y}=_(),b=c=>{if(p){const{target:{value:v}}=c;p(v)}a&&a(c)};return l.jsxs("div",{className:s(n`
            margin-bottom: 1rem;
            ${o&&`cursor: not-allowed;
            filter: opacity(0.5);`}
          `,h),children:[l.jsxs("label",{"aria-label":`${e.label}${e.required===!0&&` (${y("required")})`}`,className:s(n`
              color: #333;
              font-family: ${$};
              font-weight: 500;
              font-size: 14px;
              display: block;
              margin-bottom: 2px;
              ${o&&`color: ${d.colors.gray[400]};`}
              ${o&&"cursor: not-allowed;"}
            `,e.labelStyle),children:[e.label&&l.jsxs(l.Fragment,{children:[e.label," ",e.required===!0&&" *"]}),l.jsx(V,{id:e.id,name:e.name,disabled:o,colorField:e.type==="color","aria-errormessage":`${e.id??e.label}_error`,"aria-invalid":r!==void 0,onChange:b,defaultValue:e.defaultValue,error:u(r)??void 0,ref:g,...e})]}),l.jsx("span",{className:r?s(F):n`
                  visibility: hidden;
                `,id:`${e.id??e.label}_error`,role:"alert",children:u(r)})]})});i.displayName="TextField";try{i.displayName="TextField",i.__docgenInfo={description:"",displayName:"TextField",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"color"'},{value:'"email"'},{value:'"password"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"any"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!1,type:{name:"(value: string, name?: string) => void"}}}}}catch{}const M={component:i,parameters:{docs:{description:{component:"Extends the native HTML input type='text' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text."}}}},t={args:{label:"Example",placeholder:"Placeholder",onChange:a=>{console.log("Textfield changed to"+a.target.value)},value:void 0,defaultValue:void 0,required:!1}};var m,f,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const A=["Example"];export{t as Example,A as __namedExportsOrder,M as default};
