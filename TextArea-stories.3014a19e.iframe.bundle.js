"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[45],{"./stories/TextArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TextArea:()=>TextArea,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _src_components_InputFields_TextAreaField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/InputFields/TextAreaField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react"\nimport React from "react"\n\nimport TextAreaField from "../src/components/InputFields/TextAreaField"\n\nexport default {\n  title: "Components/TextAreaField",\n  component: TextAreaField,\n} as Meta\n\nconst Component = TextAreaField\n\ntype ComponentProps = React.ComponentProps<typeof Component>\n\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />\n\nexport const TextArea: Story<ComponentProps> = Template.bind({})\nTextArea.args = {\n  label: "Field Label",\n}\n',locationsMap:{"text-area":{startLoc:{col:40,line:16},endLoc:{col:89,line:16},startBody:{col:40,line:16},endBody:{col:89,line:16}}}}},title:"Components/TextAreaField",component:_src_components_InputFields_TextAreaField__WEBPACK_IMPORTED_MODULE_1__.A},Component=_src_components_InputFields_TextAreaField__WEBPACK_IMPORTED_MODULE_1__.A,Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component,{...args});Template.displayName="Template";const TextArea=Template.bind({});TextArea.args={label:"Field Label"},TextArea.parameters={...TextArea.parameters,docs:{...TextArea.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...TextArea.parameters?.docs?.source}}};const __namedExportsOrder=["TextArea"]},"./src/components/InputFields/TextAreaField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function updateHeight(ref){ref.current&&(ref.current.style.height="auto",ref.current.style.height=`${ref.current.scrollHeight+5}px`)}const TextAreaField=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({onChangeByValue,onChange,className,autoResize,resize="vertical",...rest},ref)=>{const textareaRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),combinedRef=(fwdRef=ref,innerRef=textareaRef,react__WEBPACK_IMPORTED_MODULE_1__.useEffect((()=>{[innerRef,fwdRef].forEach((ref=>{ref&&("function"==typeof ref?ref(innerRef.current||null):ref.current=innerRef.current||null)}))}),[innerRef,fwdRef]),innerRef);var fwdRef,innerRef;return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{autoResize&&textareaRef.current&&updateHeight(textareaRef)}),[ref,rest.value,autoResize]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH`
            margin-bottom: 1rem;

            label {
              display: grid;

              textarea {
                background: #fcfcfc;
                border: 1.6px solid #dedede;
                padding: 10px 12px;
                resize: ${resize};
              }
              span {
                color: #333;
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 0.2rem;
              }
            }
          `,className),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:rest.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea",{ref:combinedRef,onChange:event=>{if(onChangeByValue){const{target:{value}}=event;onChangeByValue(value)}onChange&&onChange(event),autoResize&&updateHeight(textareaRef)},defaultValue:rest.defaultValue,...rest})]})})}));TextAreaField.displayName="TextAreaField";const __WEBPACK_DEFAULT_EXPORT__=TextAreaField;try{TextAreaField.displayName="TextAreaField",TextAreaField.__docgenInfo={description:"",displayName:"TextAreaField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | FieldError"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!1,type:{name:"((value: string, name?: string) => void)"}},autoResize:{defaultValue:null,description:"",name:"autoResize",required:!1,type:{name:"boolean"}},resize:{defaultValue:{value:"vertical"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"inline"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'},{value:'"block"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputFields/TextAreaField.tsx#TextAreaField"]={docgenInfo:TextAreaField.__docgenInfo,name:"TextAreaField",path:"src/components/InputFields/TextAreaField.tsx#TextAreaField"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=TextArea-stories.3014a19e.iframe.bundle.js.map