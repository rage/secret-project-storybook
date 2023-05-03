"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[949],{"./stories/SelectField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Select:()=>Select,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SelectField_stories});__webpack_require__("./node_modules/react/index.js");var emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SelectField=({id,label,onChange,onBlur,defaultValue,options,className,register,disabled,...rest})=>(0,jsx_runtime.jsxs)("div",{className:(0,emotion_css_esm.cx)(emotion_css_esm.iv`
          margin-bottom: 1rem;
          ${disabled&&"opacity: 0.5;"}
          select {
            appearance: none;
            background-color: transparent;
            border: none;
            margin: 0;
            width: 100%;
            font-family: inherit;
            font-size: inherit;
            cursor: ${disabled?"default":"pointer"};
            line-height: inherit;
            z-index: 1;
            outline: none;
            padding: 8px 10px 10px 10px;
          }

          select,
          .select:after {
            grid-area: select;
          }

          .select {
            width: 100%;
            border: 1px solid #e0e0e0;
            border-radius: 3px;
            font-size: 17px;
            cursor: ${disabled?"default":"pointer"};
            background: #f9f9f9;
            display: grid;
            grid-template-areas: "select";
            align-items: center;

            @media (max-width: 767.98px) {
              padding: 6px 8px;
            }
          }

          .select::after {
            content: "";
            justify-self: end;
            align-self: center;
            width: 0.8em;
            margin-right: 10px;
            height: 0.8em;
            line-height: 0;
            background-color: #333;
            clip-path: polygon(52% 80%, 0 20%, 100% 20%);
          }
          label {
            color: #333;
            font-size: 14px;
            font-weight: 500;
            ${rest.labelStyle}
          }

          .select + label {
            margin-top: 2rem;
          }
        `,className),children:[label&&(0,jsx_runtime.jsx)("label",{htmlFor:id,children:label}),(0,jsx_runtime.jsx)("div",{className:"select",children:(0,jsx_runtime.jsx)("select",{disabled:Boolean(disabled),id,onChange:({target:{value}})=>onChange&&onChange(value),onBlur,defaultValue,...rest,...register,children:options.map((({value,label,disabled})=>(0,jsx_runtime.jsx)("option",{value,disabled,selected:disabled&&!0,children:label},label)))})})]});SelectField.displayName="SelectField";const InputFields_SelectField=SelectField;try{SelectField.displayName="SelectField",SelectField.__docgenInfo={description:"",displayName:"SelectField",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption<T>[]"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLSelectElement, Element>) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T, name?: string) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},register:{defaultValue:null,description:"",name:"register",required:!1,type:{name:"UseFormRegisterReturn"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputFields/SelectField.tsx#SelectField"]={docgenInfo:SelectField.__docgenInfo,name:"SelectField",path:"src/components/InputFields/SelectField.tsx#SelectField"})}catch(__react_docgen_typescript_loader_error){}const SelectField_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport SelectField from "../src/components/InputFields/SelectField";\nexport default ({\n  title: "Components/SelectField",\n  component: SelectField\n} as Meta);\nconst Component = SelectField;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Select: Story<ComponentProps> = Template.bind({});\nSelect.args = {\n  name: "Select",\n  label: "Field Label"\n};\nSelect.parameters = {\n  ...Select.parameters,\n  docs: {\n    ...Select.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Select.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{select:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/SelectField",component:InputFields_SelectField},Component=InputFields_SelectField,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Select=Template.bind({});Select.args={name:"Select",label:"Field Label"},Select.parameters={...Select.parameters,docs:{...Select.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Select.parameters?.docs?.source}}};const __namedExportsOrder=["Select"]}}]);
//# sourceMappingURL=SelectField-stories.135150fc.iframe.bundle.js.map