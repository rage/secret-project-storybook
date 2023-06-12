"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[897],{"./stories/TimePicker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Time:()=>Time,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TimePicker_stories});__webpack_require__("./node_modules/react/index.js");var emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TimePicker=({onChangeByValue,onChange,className,...rest})=>(0,jsx_runtime.jsx)("div",{className:(0,emotion_css_esm.cx)(emotion_css_esm.iv`
          margin-bottom: 1rem;

          label {
            display: grid;

            input {
              max-width: 18.5ch;
              padding: 8px 10px 10px 10px;
              background: #fcfcfc;
              border: 1.6px solid #dedede;
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
        `,className),children:(0,jsx_runtime.jsxs)("label",{children:[(0,jsx_runtime.jsx)("span",{children:rest.label}),(0,jsx_runtime.jsx)("input",{type:"time",onChange:event=>{if(onChangeByValue){const{target:{value}}=event;onChangeByValue(value)}onChange&&onChange(event)},...rest})]})});TimePicker.displayName="TimePicker";const InputFields_TimePickerField=TimePicker;try{TimePickerField.displayName="TimePickerField",TimePickerField.__docgenInfo={description:"",displayName:"TimePickerField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!0,type:{name:"(value: string, name?: string | undefined) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputFields/TimePickerField.tsx#TimePickerField"]={docgenInfo:TimePickerField.__docgenInfo,name:"TimePickerField",path:"src/components/InputFields/TimePickerField.tsx#TimePickerField"})}catch(__react_docgen_typescript_loader_error){}const TimePicker_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport TimePickerField from "../src/components/InputFields/TimePickerField";\nexport default ({\n  title: "Components/TimePickerField",\n  component: TimePickerField\n} as Meta);\nconst Component = TimePickerField;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Time: Story<ComponentProps> = Template.bind({});\nTime.args = {\n  label: "Field Label"\n};\nTime.parameters = {\n  ...Time.parameters,\n  docs: {\n    ...Time.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Time.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{time:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/TimePickerField",component:InputFields_TimePickerField},Component=InputFields_TimePickerField,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Time=Template.bind({});Time.args={label:"Field Label"},Time.parameters={...Time.parameters,docs:{...Time.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Time.parameters?.docs?.source}}};const __namedExportsOrder=["Time"]}}]);
//# sourceMappingURL=TimePicker-stories.3c296e15.iframe.bundle.js.map