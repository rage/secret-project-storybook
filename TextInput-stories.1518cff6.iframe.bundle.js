"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[2126],{"./stories/TextInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Text:()=>Text,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextInput_stories});__webpack_require__("./node_modules/react/index.js");var emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),styles=__webpack_require__("./src/styles/index.ts"),typography=__webpack_require__("./src/styles/typography.ts");function errorToDescription(error){return void 0===error?null:"string"==typeof error?error:error.message??error.type}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ERRORCOLOR=styles.wE.colors.red[600],Input=emotion_styled_browser_esm.Z.input`
  background: #fcfcfc;
  border-width: 1.6px;
  border-style: solid;
  border-radius: 3px;
  border-color: ${({error})=>error?ERRORCOLOR:"#dedede"};
  ${({colorField})=>!colorField&&"padding: 8px 10px 10px 10px;"}
  transition: ease-in-out, width 0.35s ease-in-out;
  outline: none;
  min-width: 20px;
  width: 100%;
  display: block;
  font-size: 17px;

  ${({disabled})=>disabled&&"cursor: not-allowed;"}

  &:focus,
  &:active {
    border-color: #55b3f5;
  }

  @media (max-width: 767.98px) {
    padding: 6px 8px;
  }
`,errorClass=emotion_css_esm.iv`
  color: ${styles.wE.colors.red[600]};
  font-size: 14px;
  display: inline-block;
`,TextField=({onChange,className,register,disabled,error,...rest})=>{const{t}=(0,es.$G)();return(0,jsx_runtime.jsxs)("div",{className:(0,emotion_css_esm.cx)(emotion_css_esm.iv`
          margin-bottom: 1rem;
          ${disabled&&"cursor: not-allowed;\n            filter: opacity(0.5);"}
        `,className),children:[(0,jsx_runtime.jsxs)("label",{"aria-label":`${rest.label}${!0===rest.required&&` (${t("required")})`}`,className:(0,emotion_css_esm.cx)(emotion_css_esm.iv`
            color: #333;
            font-family: ${typography.$S};
            font-weight: 500;
            font-size: 14px;
            display: block;
            margin-bottom: 2px;
            ${disabled&&`color: ${styles.wE.colors.gray[400]};`}
            ${disabled&&"cursor: not-allowed;"}
          `,rest.labelStyle),children:[rest.label&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[rest.label," ",!0===rest.required&&" *"]}),(0,jsx_runtime.jsx)(Input,{id:rest.id,name:rest.name,disabled,colorField:"color"===rest.type,"aria-errormessage":`${rest.id??rest.label}_error`,"aria-invalid":void 0!==error,onChange:({target:{value}})=>onChange&&onChange(value),defaultValue:rest.defaultValue,error:errorToDescription(error)??void 0,...rest,...register})]}),(0,jsx_runtime.jsx)("span",{className:error?(0,emotion_css_esm.cx)(errorClass):emotion_css_esm.iv`
                visibility: hidden;
              `,id:`${rest.id??rest.label}_error`,role:"alert",children:errorToDescription(error)})]})};TextField.displayName="TextField";const InputFields_TextField=TextField;try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"email"'},{value:'"color"'},{value:'"password"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | FieldError"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string, name?: string) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},register:{defaultValue:null,description:"",name:"register",required:!1,type:{name:"UseFormRegisterReturn"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputFields/TextField.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"src/components/InputFields/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}const TextInput_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport TextField from "../src/components/InputFields/TextField";\nexport default ({\n  title: "Components/TextField",\n  component: TextField\n} as Meta);\nconst Component = TextField;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Text: Story<ComponentProps> = Template.bind({});\nText.args = {\n  type: "text",\n  label: "Field Label",\n  placeholder: "Name",\n  error: true,\n  required: true\n};\nText.parameters = {\n  ...Text.parameters,\n  docs: {\n    ...Text.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Text.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{text:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/TextField",component:InputFields_TextField},Component=InputFields_TextField,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Text=Template.bind({});Text.args={type:"text",label:"Field Label",placeholder:"Name",error:!0,required:!0},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Text.parameters?.docs?.source}}};const __namedExportsOrder=["Text"]}}]);
//# sourceMappingURL=TextInput-stories.1518cff6.iframe.bundle.js.map