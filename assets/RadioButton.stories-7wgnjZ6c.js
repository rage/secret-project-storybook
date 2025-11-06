import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as r,a as l}from"./emotion-css.esm-BvLEAwLp.js";import{p as t}from"./typography-UEJTSqhr.js";import{b as u}from"./theme-DgIg-lup.js";import"./emotion-utils.browser.esm-YKnV_D65.js";const f=l`
  font-family: ${t};
  font-size: 16px;
  margin: 0.5rem 0.5rem 0.5rem 0;
  line-height: 1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;

  input[type="radio"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font-family: ${t};
    width: 1.15em;
    height: 1.15em;
    border: 1.5px solid #787878;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: ${u.colors.green[600]};
  }

  span {
    font-family: ${t};
    font-weight: 400;
    font-size: 18px;
  }

  input[type="radio"]:checked::before {
    transform: scale(1);
    background: #1f6964;
  }
`,g=({onChange:e,className:d,label:p,...m})=>a.jsx("div",{className:r(l`
          margin-bottom: 1rem;
          margin-top: 1rem;
        `,d),children:a.jsxs("label",{className:r(f),children:[a.jsx("input",{type:"radio",onChange:c=>e&&e(c),...m}),a.jsx("span",{children:p})]})});try{RadioButton.displayName="RadioButton",RadioButton.__docgenInfo={description:"",displayName:"RadioButton",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}const k={component:g,parameters:{docs:{description:{component:"Extends the native HTML input type='radio' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio"}}}},o={args:{label:"Example",onChange:e=>{console.log("Radio changed to"+e.target.checked)},value:void 0,defaultChecked:!1,required:!1}};var n,s,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Example",
    onChange: event => {
      console.log("Radio changed to" + event.target.checked);
    },
    value: undefined,
    defaultChecked: false,
    required: false
  }
} satisfies StoryType`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const v=["Example"];export{o as Example,v as __namedExportsOrder,k as default};
