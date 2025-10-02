import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as i,a}from"./emotion-css.esm-BvLEAwLp.js";import{s as g}from"./emotion-styled.browser.esm-uiAl99qX.js";import{r as k}from"./index-0yr9KlQE.js";import{p as y}from"./typography-UEJTSqhr.js";import{b as v}from"./theme-cNlTTPbF.js";import"./emotion-utils.browser.esm-YKnV_D65.js";import"./extends-CF3RwP-h.js";const E="#F76D82",C="#787878",R=g.label`
  font-family: ${y};
  font-size: 1.1rem;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  color: ${v.colors.gray[600]};

  input[type="checkbox"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    width: 1.15em;
    height: 1.1em;
    border: 2px solid ${({error:o})=>o?E:C};
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type="checkbox"]:hover {
    background: #f9f9f9;
  }

  input[type="checkbox"]:before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #fff;
    clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%);
  }

  input[type="checkbox"]:checked {
    border-color: #37bc9b;
    background: #37bc9b;
  }
  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  input[type="checkbox"]:disabled {
    color: #959495;
    cursor: not-allowed;
  }
`,L=a`
  color: #f76d82;
  font-size: 14px;
  display: inline-block;
  margin-top: -15px;
`,O="Please check the secret box",m=k.forwardRef(({onChangeByValue:o,onChange:n,className:h,checked:b,labelIsRawHtml:c=!1,...e},f)=>{const x=s=>{if(o){const{target:{checked:u}}=s;o(u)}n&&n(s)};return r.jsxs("div",{className:i(a`
            margin-bottom: 1rem;
          `,h),children:[r.jsxs(R,{children:[r.jsx("input",{type:"checkbox",checked:b,"aria-errormessage":e.error?`${e.label}_error`:void 0,"aria-invalid":e.error!==void 0,onChange:x,ref:f,...e}),r.jsx("span",{dangerouslySetInnerHTML:c?{__html:e.label}:void 0,children:c?void 0:e.label})]}),e.error&&r.jsx("span",{className:e.error?i(L):a`
                    visibility: hidden;
                    height: 0;
                    display: block;
                  `,id:`${e.id??e.label}_error`,role:"alert",children:O})]})});m.displayName="CheckBox";const F={component:m,parameters:{docs:{description:{component:"Extends the native HTML input type='checkbox' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox."}}}},t={args:{label:"Example",onChange:o=>{console.log("Checkbox changed to"+o.target.checked)},checked:!0,defaultChecked:!0,required:!1}};var l,p,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Example",
    onChange: event => {
      console.log("Checkbox changed to" + event.target.checked);
    },
    checked: true,
    defaultChecked: true,
    required: false
  }
} satisfies StoryType`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const H=["Example"];export{t as Example,H as __namedExportsOrder,F as default};
