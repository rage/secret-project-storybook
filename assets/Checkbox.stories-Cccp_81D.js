import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{c as h,a as p}from"./emotion-css.esm-BvLEAwLp.js";import{s as v}from"./emotion-styled.browser.esm-uiAl99qX.js";import{r as a}from"./index-0yr9KlQE.js";import{p as C}from"./typography-B78hKXS5.js";import{b as L}from"./theme-DgIg-lup.js";import"./emotion-utils.browser.esm-YKnV_D65.js";import"./extends-CF3RwP-h.js";const w="#F76D82",T="#787878",O=v.label`
  font-family: ${C};
  font-size: 1.1rem;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  color: ${L.colors.gray[600]};

  input[type="checkbox"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    width: 1.15em;
    height: 1.1em;
    border: 2px solid ${({error:r})=>r?w:T};
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
`,j=p`
  color: #f76d82;
  font-size: 14px;
  display: inline-block;
  margin-top: -15px;
`,R="Please check the secret box",x=a.forwardRef(({onChangeByValue:r,onChange:d,className:g,checked:k,labelIsRawHtml:s=!1,labelRef:t,...e},y)=>{const l=a.useRef(null),m=a.useRef(null);a.useEffect(()=>{if(s&&!t&&l.current&&typeof window<"u"){const o=l.current,n=e.label;m.current!==n&&(o.innerHTML=n,m.current=n)}},[s,t,e.label]);const E=o=>{if(r){const{target:{checked:n}}=o;r(n)}d&&d(o)};return c.jsxs("div",{className:h(p`
            margin-bottom: 1rem;
          `,g),children:[c.jsxs(O,{children:[c.jsx("input",{type:"checkbox",checked:k,"aria-errormessage":e.error?`${e.label}_error`:void 0,"aria-invalid":e.error!==void 0,onChange:E,ref:y,...e}),c.jsx("span",{ref:o=>{t&&(typeof t=="function"?t(o):t.current=o),l.current=o},children:s?void 0:e.label})]}),e.error&&c.jsx("span",{className:e.error?h(j):p`
                    visibility: hidden;
                    height: 0;
                    display: block;
                  `,id:`${e.id??e.label}_error`,role:"alert",children:R})]})});x.displayName="CheckBox";const q={component:x,parameters:{docs:{description:{component:"Extends the native HTML input type='checkbox' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox."}}}},i={args:{label:"Example",onChange:r=>{console.log("Checkbox changed to"+r.target.checked)},checked:!0,defaultChecked:!0,required:!1}};var f,u,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Example",
    onChange: event => {
      console.log("Checkbox changed to" + event.target.checked);
    },
    checked: true,
    defaultChecked: true,
    required: false
  }
} satisfies StoryType`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const A=["Example"];export{i as Example,A as __namedExportsOrder,q as default};
