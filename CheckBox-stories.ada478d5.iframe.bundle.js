"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[3956],{"./stories/CheckBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Check:()=>Check,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CheckBox_stories});var react=__webpack_require__("./node_modules/react/index.js"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),styles=__webpack_require__("./src/styles/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Label=emotion_styled_browser_esm.c.label`
  font-family: ${styles.qc};
  font-size: 1.1rem;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  color: ${styles.sn.colors.gray[600]};

  input[type="checkbox"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    width: 1.15em;
    height: 1.1em;
    border: 2px solid ${({error})=>error?"#F76D82":"#787878"};
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
`,error=emotion_css_esm.gV`
  color: #f76d82;
  font-size: 14px;
  display: inline-block;
  margin-top: -15px;
`,CheckBox=(0,react.forwardRef)((({onChangeByValue,onChange,className,checked,...rest},ref)=>(0,jsx_runtime.jsxs)("div",{className:(0,emotion_css_esm.cx)(emotion_css_esm.gV`
            margin-bottom: 1rem;
          `,className),children:[(0,jsx_runtime.jsxs)(Label,{children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",checked,"aria-errormessage":rest.error?`${rest.label}_error`:void 0,"aria-invalid":void 0!==rest.error,onChange:event=>{if(onChangeByValue){const{target:{checked}}=event;onChangeByValue(checked)}onChange&&onChange(event)},ref,...rest}),(0,jsx_runtime.jsx)("span",{children:rest.label})]}),rest.error&&(0,jsx_runtime.jsx)("span",{className:rest.error?(0,emotion_css_esm.cx)(error):emotion_css_esm.gV`
                    visibility: hidden;
                    height: 0;
                    display: block;
                  `,id:`${rest.id??rest.label}_error`,role:"alert",children:"Please check the secret box"})]})));CheckBox.displayName="CheckBox";const InputFields_CheckBox=CheckBox;try{CheckBox.displayName="CheckBox",CheckBox.__docgenInfo={description:"",displayName:"CheckBox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!1,type:{name:"((checked: boolean, name?: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputFields/CheckBox.tsx#CheckBox"]={docgenInfo:CheckBox.__docgenInfo,name:"CheckBox",path:"src/components/InputFields/CheckBox.tsx#CheckBox"})}catch(__react_docgen_typescript_loader_error){}const CheckBox_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react"\nimport React from "react"\n\nimport CheckBox from "../src/components/InputFields/CheckBox"\n\nexport default {\n  title: "Components/CheckBox",\n  component: CheckBox,\n} as Meta\n\nconst Component = CheckBox\n\ntype ComponentProps = React.ComponentProps<typeof Component>\n\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />\n\nexport const Check: Story<ComponentProps> = Template.bind({})\nCheck.args = {\n  label: "Field Label",\n  error: false,\n  checked: true,\n}\n',locationsMap:{check:{startLoc:{col:40,line:16},endLoc:{col:89,line:16},startBody:{col:40,line:16},endBody:{col:89,line:16}}}}},title:"Components/CheckBox",component:InputFields_CheckBox},Component=InputFields_CheckBox,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Check=Template.bind({});Check.args={label:"Field Label",error:!1,checked:!0},Check.parameters={...Check.parameters,docs:{...Check.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Check.parameters?.docs?.source}}};const __namedExportsOrder=["Check"]}}]);
//# sourceMappingURL=CheckBox-stories.ada478d5.iframe.bundle.js.map