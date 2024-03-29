"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[1145],{"./stories/SelectField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Select:()=>Select,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SelectField_stories});var react=__webpack_require__("./node_modules/react/index.js"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SelectField=(0,react.forwardRef)((({id,label,onChangeByValue,onChange,onBlur,defaultValue,options,className,disabled,...rest},ref)=>(0,jsx_runtime.jsxs)("div",{className:(0,emotion_css_esm.cx)(emotion_css_esm.AH`
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
          `,className),children:[label&&(0,jsx_runtime.jsx)("label",{htmlFor:id,children:label}),(0,jsx_runtime.jsx)("div",{className:"select",children:(0,jsx_runtime.jsx)("select",{disabled:Boolean(disabled),id,onChange:event=>{if(onChangeByValue){const{target:{value}}=event;onChangeByValue(value)}onChange&&onChange(event)},onBlur,defaultValue,ref,...rest,children:options.map((({value,label,disabled})=>(0,jsx_runtime.jsx)("option",{value,disabled,selected:disabled&&!0,children:label},label)))})})]})));SelectField.displayName="SelectField";const InputFields_SelectField=SelectField;try{SelectField.displayName="SelectField",SelectField.__docgenInfo={description:"",displayName:"SelectField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption[]"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!1,type:{name:"((value: string, name?: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputFields/SelectField.tsx#SelectField"]={docgenInfo:SelectField.__docgenInfo,name:"SelectField",path:"src/components/InputFields/SelectField.tsx#SelectField"})}catch(__react_docgen_typescript_loader_error){}const SelectField_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react"\nimport React from "react"\n\nimport SelectField from "../src/components/InputFields/SelectField"\n\nexport default {\n  title: "Components/SelectField",\n  component: SelectField,\n} as Meta\n\nconst Component = SelectField\n\ntype ComponentProps = React.ComponentProps<typeof Component>\n\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />\n\nexport const Select: Story<ComponentProps> = Template.bind({})\nSelect.args = {\n  name: "Select",\n  label: "Field Label",\n}\n',locationsMap:{select:{startLoc:{col:40,line:16},endLoc:{col:89,line:16},startBody:{col:40,line:16},endBody:{col:89,line:16}}}}},title:"Components/SelectField",component:InputFields_SelectField},Component=InputFields_SelectField,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Select=Template.bind({});Select.args={name:"Select",label:"Field Label"},Select.parameters={...Select.parameters,docs:{...Select.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Select.parameters?.docs?.source}}};const __namedExportsOrder=["Select"]}}]);
//# sourceMappingURL=SelectField-stories.701da412.iframe.bundle.js.map