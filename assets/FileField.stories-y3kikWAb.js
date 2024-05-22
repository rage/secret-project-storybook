import{j as r}from"./emotion-serialize.browser.esm-Xr4f5Ts3.js";import{c as n,a as s}from"./emotion-css.esm-DPNEF3j8.js";import{n as w}from"./emotion-styled.browser.esm-OyKATk7d.js";import{r as $}from"./index-CDs2tPxN.js";import{p as F}from"./typography-Bdnj4Bgw.js";import{b as d}from"./theme-QoxxbpC5.js";import{e as m}from"./strings-x18Zmgj1.js";import{u as _}from"./useTranslation-B1yBCfgX.js";import"./extends-CCbyfPlC.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BA1o8LyZ.js";const E=d.colors.red[600],q="#dedede",S=w.input`
  background: #fcfcfc;
  border-width: 1.6px;
  border-style: solid;
  border-radius: 3px;
  border-color: ${({error:a})=>a?E:q};
  ${({colorField:a})=>!a&&"padding: 8px 10px 10px 10px;"}
  transition: ease-in-out, width 0.35s ease-in-out;
  outline: none;
  min-width: 20px;
  width: 100%;
  display: block;
  font-size: 17px;

  ${({disabled:a})=>a&&"cursor: not-allowed;"}

  &:focus,
  &:active {
    border-color: #55b3f5;
  }

  @media (max-width: 767.98px) {
    padding: 6px 8px;
  }
`,T=n`
  color: ${d.colors.red[600]};
  font-size: 14px;
  display: inline-block;
`,t=$.forwardRef(({onChange:a,onChangeByValue:p,className:x,disabled:o,error:l,...e},y)=>{const{t:b}=_(),h=c=>{if(p){const{target:{value:v}}=c;p(v)}a&&a(c)};return r.jsxs("div",{className:s(n`
            margin-bottom: 1rem;
            ${o&&`cursor: not-allowed;
            filter: opacity(0.5);`}
          `,x),children:[r.jsxs("label",{"aria-label":`${e.label}${e.required===!0&&` (${b("required")})`}`,className:s(n`
              color: #333;
              font-family: ${F};
              font-weight: 500;
              font-size: 14px;
              display: block;
              margin-bottom: 2px;
              ${o&&`color: ${d.colors.gray[400]};`}
              ${o&&"cursor: not-allowed;"}
            `,e.labelStyle),children:[e.label&&r.jsxs(r.Fragment,{children:[e.label," ",e.required===!0&&" *"]}),r.jsx(S,{id:e.id,name:e.name,disabled:o,type:"file","aria-errormessage":`${e.id??e.label}_error`,"aria-invalid":l!==void 0,onChange:h,error:m(l)??void 0,ref:y,...e})]}),r.jsx("span",{className:l?s(T):n`
                  visibility: hidden;
                `,id:`${e.id??e.label}_error`,role:"alert",children:m(l)})]})});t.displayName="FileField";try{t.displayName="FileField",t.__docgenInfo={description:"",displayName:"FileField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"any"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!1,type:{name:"(value: string, name?: string) => void"}}}}}catch{}const M={component:t,parameters:{docs:{description:{component:"Extends the native HTML input type='file' element with some additional props. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file."}}}},i={args:{label:"Example",onChange:a=>{console.log("File changed to"+a.target.value)},accept:"image/*",required:!1}};var u,f,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Example",
    onChange: event => {
      console.log("File changed to" + event.target.value);
    },
    accept: "image/*",
    required: false
  }
} satisfies StoryType`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const A=["Example"];export{i as Example,A as __namedExportsOrder,M as default};
