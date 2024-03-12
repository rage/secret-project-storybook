"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[1806],{"./stories/TextInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Text:()=>Text,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextInput_stories});var react=__webpack_require__("./node_modules/react/index.js"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),styles=__webpack_require__("./src/styles/index.ts"),typography=__webpack_require__("./src/styles/typography.ts");function errorToDescription(error){return void 0===error?null:"string"==typeof error?error:error.message??error.type}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ERRORCOLOR=styles.$7.colors.red[600],Input=emotion_styled_browser_esm.A.input`
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
`,errorClass=emotion_css_esm.AH`
  color: ${styles.$7.colors.red[600]};
  font-size: 14px;
  display: inline-block;
`,TextField=(0,react.forwardRef)((({onChange,onChangeByValue,className,disabled,error,...rest},ref)=>{const{t}=(0,es.Bd)();return(0,jsx_runtime.jsxs)("div",{className:(0,emotion_css_esm.cx)(emotion_css_esm.AH`
            margin-bottom: 1rem;
            ${disabled&&"cursor: not-allowed;\n            filter: opacity(0.5);"}
          `,className),children:[(0,jsx_runtime.jsxs)("label",{"aria-label":`${rest.label}${!0===rest.required&&` (${t("required")})`}`,className:(0,emotion_css_esm.cx)(emotion_css_esm.AH`
              color: #333;
              font-family: ${typography.e0};
              font-weight: 500;
              font-size: 14px;
              display: block;
              margin-bottom: 2px;
              ${disabled&&`color: ${styles.$7.colors.gray[400]};`}
              ${disabled&&"cursor: not-allowed;"}
            `,rest.labelStyle),children:[rest.label&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[rest.label," ",!0===rest.required&&" *"]}),(0,jsx_runtime.jsx)(Input,{id:rest.id,name:rest.name,disabled,colorField:"color"===rest.type,"aria-errormessage":`${rest.id??rest.label}_error`,"aria-invalid":void 0!==error,onChange:event=>{if(onChangeByValue){const{target:{value}}=event;onChangeByValue(value)}onChange&&onChange(event)},defaultValue:rest.defaultValue,error:errorToDescription(error)??void 0,ref,...rest})]}),(0,jsx_runtime.jsx)("span",{className:error?(0,emotion_css_esm.cx)(errorClass):emotion_css_esm.AH`
                  visibility: hidden;
                `,id:`${rest.id??rest.label}_error`,role:"alert",children:errorToDescription(error)})]})}));TextField.displayName="TextField";const InputFields_TextField=TextField;try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"email"'},{value:'"color"'},{value:'"password"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | FieldError"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!1,type:{name:"((value: string, name?: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputFields/TextField.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"src/components/InputFields/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}const TextInput_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react"\nimport React from "react"\n\nimport TextField from "../src/components/InputFields/TextField"\n\nexport default {\n  title: "Components/TextField",\n  component: TextField,\n} as Meta\n\nconst Component = TextField\n\ntype ComponentProps = React.ComponentProps<typeof Component>\n\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />\n\nexport const Text: Story<ComponentProps> = Template.bind({})\nText.args = {\n  type: "text",\n  label: "Field Label",\n  placeholder: "Name",\n  error: true,\n  required: true,\n}\n',locationsMap:{text:{startLoc:{col:40,line:16},endLoc:{col:89,line:16},startBody:{col:40,line:16},endBody:{col:89,line:16}}}}},title:"Components/TextField",component:InputFields_TextField},Component=InputFields_TextField,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Text=Template.bind({});Text.args={type:"text",label:"Field Label",placeholder:"Name",error:!0,required:!0},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Text.parameters?.docs?.source}}};const __namedExportsOrder=["Text"]}}]);
//# sourceMappingURL=TextInput-stories.2d91b9e4.iframe.bundle.js.map