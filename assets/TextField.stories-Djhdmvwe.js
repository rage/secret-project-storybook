import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as n,a as i}from"./emotion-css.esm-BvLEAwLp.js";import{s as $}from"./emotion-styled.browser.esm-uiAl99qX.js";import{r as w}from"./index-0yr9KlQE.js";import{p as T}from"./typography-UEJTSqhr.js";import{b as s}from"./theme-DgIg-lup.js";import{e as c}from"./strings-x18Zmgj1.js";import{u as E}from"./useTranslation-B14mqBe9.js";import"./emotion-utils.browser.esm-YKnV_D65.js";import"./extends-CF3RwP-h.js";const j=s.colors.red[600],O="#dedede",R=$.input`
  background: #fcfcfc;
  border-width: 2px;
  border-style: solid;
  border-radius: 3px;
  border-color: ${({error:o})=>o?j:O};
  ${({colorField:o})=>!o&&"padding: 8px 10px 10px 10px;"}
  transition: ease-in-out, width 0.35s ease-in-out;
  outline: none;
  min-width: 20px;
  width: 100%;
  display: block;
  font-size: 16px;

  ${({disabled:o})=>o&&"cursor: not-allowed;"}

  &:focus,
  &:active {
    border-color: #55b3f5;
  }

  @media (max-width: 767.98px) {
    padding: 6px 8px;
  }
`,F=i`
  color: ${s.colors.red[600]};
  font-size: 14px;
  display: inline-block;
`,f=w.forwardRef(({onChange:o,onChangeByValue:d,className:h,disabled:r,error:l,...e},b)=>{const{t:g}=E(),v=p=>{if(d){const{target:{value:y}}=p;d(y)}o&&o(p)};return a.jsxs("div",{className:n(i`
            margin-bottom: 1rem;
            ${r&&`cursor: not-allowed;
            filter: opacity(0.5);`}
          `,h),children:[a.jsxs("label",{"aria-label":`${e.label}${e.required===!0&&` (${g("required")})`}`,className:n(i`
              color: #333;
              font-family: ${T};
              font-weight: 500;
              font-size: 14px;
              display: block;
              margin-bottom: 2px;
              ${r&&`color: ${s.colors.gray[400]};`}
              ${r&&"cursor: not-allowed;"}
            `,e.labelStyle),children:[e.label&&a.jsxs(a.Fragment,{children:[e.label," ",e.required===!0&&" *"]}),a.jsx(R,{id:e.id,name:e.name,disabled:r,colorField:e.type==="color","aria-errormessage":`${e.id??e.label}_error`,"aria-invalid":l!==void 0,onChange:v,defaultValue:e.defaultValue,error:c(l)??void 0,ref:b,...e})]}),a.jsx("span",{className:l?n(F):i`
                  visibility: hidden;
                `,id:`${e.id??e.label}_error`,role:"alert",children:c(l)})]})});f.displayName="TextField";const V={component:f,parameters:{docs:{description:{component:"Extends the native HTML input type='text' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text."}}}},t={args:{label:"Example",placeholder:"Placeholder",onChange:o=>{console.log("Textfield changed to"+o.target.value)},value:void 0,defaultValue:void 0,required:!1}};var m,u,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const A=["Example"];export{t as Example,A as __namedExportsOrder,V as default};
