"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[9928],{"./stories/DateTimeLocal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DateTime:()=>DateTime,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DateTimeLocal_stories});var react=__webpack_require__("./node_modules/react/index.js"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),styles=__webpack_require__("./src/styles/index.ts"),esm_format=__webpack_require__("./node_modules/date-fns/esm/format/index.js");const dateToString=(date,timeZone=!0)=>{try{const datePart=`${(0,esm_format.Z)(date,"yyyy-MM-dd HH:mm:ss")}`,timeZonePart=` UTC${(0,esm_format.Z)(date,"xxx")}`;return datePart+(timeZone?timeZonePart:"")}catch(e){return"Invalid date"}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const error=emotion_css_esm.iv`
  color: #f76d82;
  font-size: 14px;
  display: inline-block;
  margin-top: -15px;
`,DateTimeLocal=({onChange,register,className,defaultValue,...rest})=>{const ref=(0,react.useRef)(null),[value,setValue]=(0,react.useState)(defaultValue??"");return(0,jsx_runtime.jsxs)("div",{className:(0,emotion_css_esm.cx)(emotion_css_esm.iv`
          margin-bottom: 1rem;

          label {
            display: grid;

            input {
              padding: 8px 10px 10px 10px;
              border: 2px solid #dedede;
              border-radius: 3px;
              outline: none;

              &:focus,
              &:active {
                border-color: #55b3f5;
              }

              @media (max-width: 767.98px) {
                padding: 6px 8px;
              }
            }

            span {
              color: #333;
              font-size: 14px;
              font-weight: 500;
              margin-bottom: 0.2rem;
            }
          }

          small {
            color: ${styles.wE.colors.gray[500]};
            font-size: 12px;
            text-align: left;
            width: 100%;
            display: block;
            padding-left: 5px;
          }
        `,className),children:[(0,jsx_runtime.jsxs)("label",{children:[(0,jsx_runtime.jsx)("span",{children:rest.label}),(0,jsx_runtime.jsx)("input",{ref,type:"datetime-local",step:"1",...rest,...register,onChange:event=>{onChange&&onChange(event.target.value),register?.onChange&&register.onChange(event),setValue(event.target.value)},value})]}),value&&(0,jsx_runtime.jsx)("small",{className:emotion_css_esm.iv`
            display: block;
            height: 18px;
          `,children:dateToString(new Date(value))}),rest.error&&(0,jsx_runtime.jsx)("span",{className:(0,emotion_css_esm.cx)(error),id:`${rest.label}_error`,role:"alert",children:rest.error})]})};DateTimeLocal.displayName="DateTimeLocal";const InputFields_DateTimeLocal=DateTimeLocal;try{DateTimeLocal.displayName="DateTimeLocal",DateTimeLocal.__docgenInfo={description:"",displayName:"DateTimeLocal",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"string"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string, name?: string) => void)"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},register:{defaultValue:null,description:"",name:"register",required:!1,type:{name:"UseFormRegisterReturn"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputFields/DateTimeLocal.tsx#DateTimeLocal"]={docgenInfo:DateTimeLocal.__docgenInfo,name:"DateTimeLocal",path:"src/components/InputFields/DateTimeLocal.tsx#DateTimeLocal"})}catch(__react_docgen_typescript_loader_error){}const DateTimeLocal_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport DateTimeLocal from "../src/components/InputFields/DateTimeLocal";\nexport default ({\n  title: "Components/DateTimeLocal",\n  component: DateTimeLocal\n} as Meta);\nconst Component = DateTimeLocal;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const DateTime: Story<ComponentProps> = Template.bind({});\nDateTime.args = {\n  label: "Field Label"\n};\nDateTime.parameters = {\n  ...DateTime.parameters,\n  docs: {\n    ...DateTime.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...DateTime.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{"date-time":{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/DateTimeLocal",component:InputFields_DateTimeLocal},Component=InputFields_DateTimeLocal,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const DateTime=Template.bind({});DateTime.args={label:"Field Label"},DateTime.parameters={...DateTime.parameters,docs:{...DateTime.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...DateTime.parameters?.docs?.source}}};const __namedExportsOrder=["DateTime"]}}]);
//# sourceMappingURL=DateTimeLocal-stories.ca07829f.iframe.bundle.js.map