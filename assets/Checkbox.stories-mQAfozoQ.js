import{j as r}from"./emotion-serialize.browser.esm-Xr4f5Ts3.js";import{c as n,a as s}from"./emotion-css.esm-DPNEF3j8.js";import{n as x}from"./emotion-styled.browser.esm-OyKATk7d.js";import{r as k}from"./index-CDs2tPxN.js";import{p as y}from"./typography-BJ13ygNv.js";import{b as v}from"./theme-QoxxbpC5.js";import"./extends-CCbyfPlC.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BA1o8LyZ.js";const C="#F76D82",_="#787878",E=x.label`
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
    border: 2px solid ${({error:o})=>o?C:_};
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
`,R=n`
  color: #f76d82;
  font-size: 14px;
  display: inline-block;
  margin-top: -15px;
`,w="Please check the secret box",t=k.forwardRef(({onChangeByValue:o,onChange:l,className:h,checked:u,labelIsRawHtml:c=!1,...e},b)=>{const f=i=>{if(o){const{target:{checked:g}}=i;o(g)}l&&l(i)};return r.jsxs("div",{className:s(n`
            margin-bottom: 1rem;
          `,h),children:[r.jsxs(E,{children:[r.jsx("input",{type:"checkbox",checked:u,"aria-errormessage":e.error?`${e.label}_error`:void 0,"aria-invalid":e.error!==void 0,onChange:f,ref:b,...e}),r.jsx("span",{dangerouslySetInnerHTML:c?{__html:e.label}:void 0,children:c?void 0:e.label})]}),e.error&&r.jsx("span",{className:e.error?s(R):n`
                    visibility: hidden;
                    height: 0;
                    display: block;
                  `,id:`${e.id??e.label}_error`,role:"alert",children:w})]})});t.displayName="CheckBox";try{t.displayName="CheckBox",t.__docgenInfo={description:"",displayName:"CheckBox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!1,type:{name:"(checked: boolean, name?: string) => void"}},labelIsRawHtml:{defaultValue:{value:"false"},description:"",name:"labelIsRawHtml",required:!1,type:{name:"boolean"}}}}}catch{}const H={component:t,parameters:{docs:{description:{component:"Extends the native HTML input type='checkbox' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox."}}}},a={args:{label:"Example",onChange:o=>{console.log("Checkbox changed to"+o.target.checked)},checked:!0,defaultChecked:!0,required:!1}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Example",
    onChange: event => {
      console.log("Checkbox changed to" + event.target.checked);
    },
    checked: true,
    defaultChecked: true,
    required: false
  }
} satisfies StoryType`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const N=["Example"];export{a as Example,N as __namedExportsOrder,H as default};
