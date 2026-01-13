import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as n,a as l}from"./emotion-css.esm-BvLEAwLp.js";import{s as v}from"./emotion-styled.browser.esm-uiAl99qX.js";import{r as w}from"./index-0yr9KlQE.js";import{p as E}from"./typography-B78hKXS5.js";import{b as s}from"./theme-DgIg-lup.js";import{e as d}from"./strings-x18Zmgj1.js";import{u as F}from"./useTranslation-B14mqBe9.js";import"./emotion-utils.browser.esm-YKnV_D65.js";import"./extends-CF3RwP-h.js";const T=s.colors.red[600],j="#dedede",O=v.input`
  background: #fcfcfc;
  border-width: 2px;
  border-style: solid;
  border-radius: 3px;
  border-color: ${({error:o})=>o?T:j};
  ${({colorField:o})=>!o&&"padding: 8px 10px 10px 10px;"}
  transition: ease-in-out, width 0.35s ease-in-out;
  outline: none;
  min-width: 20px;
  width: 100%;
  display: block;
  font-size: 17px;

  ${({disabled:o})=>o&&"cursor: not-allowed;"}

  &:focus,
  &:active {
    border-color: #55b3f5;
  }

  @media (max-width: 767.98px) {
    padding: 6px 8px;
  }
`,R=l`
  color: ${s.colors.red[600]};
  font-size: 14px;
  display: inline-block;
`,x=w.forwardRef(({onChange:o,onChangeByValue:p,className:g,disabled:a,error:i,...e},b)=>{const{t:h}=F(),y=c=>{if(p){const{target:{value:$}}=c;p($)}o&&o(c)};return r.jsxs("div",{className:n(l`
            margin-bottom: 1rem;
            ${a&&`cursor: not-allowed;
            filter: opacity(0.5);`}
          `,g),children:[r.jsxs("label",{"aria-label":`${e.label}${e.required===!0&&` (${h("required")})`}`,className:n(l`
              color: #333;
              font-family: ${E};
              font-weight: 500;
              font-size: 14px;
              display: block;
              margin-bottom: 2px;
              ${a&&`color: ${s.colors.gray[400]};`}
              ${a&&"cursor: not-allowed;"}
            `,e.labelStyle),children:[e.label&&r.jsxs(r.Fragment,{children:[e.label," ",e.required===!0&&" *"]}),r.jsx(O,{id:e.id,name:e.name,disabled:a,type:"file","aria-errormessage":`${e.id??e.label}_error`,"aria-invalid":i!==void 0,onChange:y,error:d(i)??void 0,ref:b,...e})]}),r.jsx("span",{className:i?n(R):l`
                  visibility: hidden;
                `,id:`${e.id??e.label}_error`,role:"alert",children:d(i)})]})});x.displayName="FileField";const A={component:x,parameters:{docs:{description:{component:"Extends the native HTML input type='file' element with some additional props. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file."}}}},t={args:{label:"Example",onChange:o=>{console.log("File changed to"+o.target.value)},accept:"image/*",required:!1}};var m,u,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Example",
    onChange: event => {
      console.log("File changed to" + event.target.value);
    },
    accept: "image/*",
    required: false
  }
} satisfies StoryType`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const D=["Example"];export{t as Example,D as __namedExportsOrder,A as default};
