"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[5458],{"./stories/DebugModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DebugModal_stories});var react=__webpack_require__("./node_modules/react/index.js"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),atlas_icons_react=__webpack_require__("./node_modules/@vectopus/atlas-icons-react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Button=__webpack_require__("./src/components/Button.tsx"),Dialog=__webpack_require__("./src/components/Dialog.tsx"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),Spinner=__webpack_require__("./src/components/Spinner.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MonacoLoading=(0,jsx_runtime.jsx)(Spinner.Z,{variant:"medium"}),MonacoEditorImpl=dynamic_default()((()=>__webpack_require__.e(5369).then(__webpack_require__.bind(__webpack_require__,"./src/components/monaco/impl/MonacoEditorImpl.tsx"))),{ssr:!1,loading:()=>MonacoLoading}),MonacoEditor=props=>(0,jsx_runtime.jsx)(MonacoEditorImpl,{...props});MonacoEditor.displayName="MonacoEditor";const monaco_MonacoEditor=MonacoEditor;try{MonacoEditor.displayName="MonacoEditor",MonacoEditor.__docgenInfo={description:"",displayName:"MonacoEditor",props:{defaultValue:{defaultValue:null,description:"Default value of the current model",name:"defaultValue",required:!1,type:{name:"string"}},defaultLanguage:{defaultValue:null,description:"Default language of the current model",name:"defaultLanguage",required:!1,type:{name:"string"}},defaultPath:{defaultValue:null,description:"Default path of the current model\nWill be passed as the third argument to `.createModel` method\n`monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))`",name:"defaultPath",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Value of the current model",name:"value",required:!1,type:{name:"string"}},language:{defaultValue:null,description:"Language of the current model",name:"language",required:!1,type:{name:"string"}},path:{defaultValue:null,description:"Path of the current model\nWill be passed as the third argument to `.createModel` method\n`monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))`",name:"path",required:!1,type:{name:"string"}},theme:{defaultValue:{value:'"light"'},description:'The theme for the monaco\nAvailable options "vs-dark" | "light"\nDefine new themes by `monaco.editor.defineTheme`',name:"theme",required:!1,type:{name:"string"}},line:{defaultValue:null,description:"The line to jump on it",name:"line",required:!1,type:{name:"number"}},loading:{defaultValue:{value:'"Loading..."'},description:"The loading screen before the editor will be mounted",name:"loading",required:!1,type:{name:"ReactNode"}},options:{defaultValue:null,description:"IStandaloneEditorConstructionOptions",name:"options",required:!1,type:{name:"IStandaloneEditorConstructionOptions"}},overrideServices:{defaultValue:null,description:"IEditorOverrideServices",name:"overrideServices",required:!1,type:{name:"IEditorOverrideServices"}},saveViewState:{defaultValue:null,description:"Indicator whether to save the models' view states between model changes or not\nDefaults to true",name:"saveViewState",required:!1,type:{name:"boolean"}},keepCurrentModel:{defaultValue:{value:"false"},description:"Indicator whether to dispose the current model when the Editor is unmounted or not",name:"keepCurrentModel",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:'"100%"'},description:"Width of the editor wrapper",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:'"100%"'},description:"Height of the editor wrapper",name:"height",required:!1,type:{name:"string | number"}},className:{defaultValue:null,description:"Class name for the editor container",name:"className",required:!1,type:{name:"string"}},wrapperProps:{defaultValue:null,description:"Props applied to the wrapper element",name:"wrapperProps",required:!1,type:{name:"object"}},beforeMount:{defaultValue:null,description:'Signature: function(monaco: Monaco) => void\nAn event is emitted before the editor is mounted\nIt gets the monaco instance as a first argument\nDefaults to "noop"',name:"beforeMount",required:!1,type:{name:"BeforeMount"}},onMount:{defaultValue:null,description:'Signature: function(editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void\nAn event is emitted when the editor is mounted\nIt gets the editor instance as a first argument and the monaco instance as a second\nDefaults to "noop"',name:"onMount",required:!1,type:{name:"OnMount"}},onChange:{defaultValue:null,description:"Signature: function(value: string | undefined, ev: monaco.editor.IModelContentChangedEvent) => void\nAn event is emitted when the content of the current model is changed",name:"onChange",required:!1,type:{name:"OnChange"}},onValidate:{defaultValue:null,description:'Signature: function(markers: monaco.editor.IMarker[]) => void\nAn event is emitted when the content of the current model is changed\nand the current model markers are ready\nDefaults to "noop"',name:"onValidate",required:!1,type:{name:"OnValidate"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/monaco/MonacoEditor.tsx#MonacoEditor"]={docgenInfo:MonacoEditor.__docgenInfo,name:"MonacoEditor",path:"src/components/monaco/MonacoEditor.tsx#MonacoEditor"})}catch(__react_docgen_typescript_loader_error){}const HeaderBar=emotion_styled_browser_esm.Z.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  h1 {
    font-size: 1.25rem;
    margin-bottom: 0;
  }
`,DebugModal=({data,readOnly=!0,updateDataOnClose,buttonSize="medium"})=>{const{t}=(0,es.$G)(),[open,setOpen]=(0,react.useState)(!1),[editedContent,setEditedContent]=(0,react.useState)(null),closeModal=()=>{if(setOpen(!1),updateDataOnClose){let parsed=null;"string"==typeof editedContent&&(parsed=JSON.parse(editedContent)),updateDataOnClose(parsed)}},readOnlySpecifier=t(readOnly?"read-only":"editable");return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.ZP,{variant:"blue",size:buttonSize,"aria-label":t("debug"),onClick:()=>(setEditedContent(JSON.stringify(data,void 0,2)),void setOpen(!0)),className:emotion_css_esm.iv`
          height: 41px;
          padding: 8px;
          color: white !important;
        `,children:(0,jsx_runtime.jsx)(atlas_icons_react.ycR,{size:16,weight:"bold"})}),(0,jsx_runtime.jsxs)(Dialog.Z,{width:"wide",open,onClose:closeModal,noPadding:!0,className:emotion_css_esm.iv`
          overflow: hidden;
        `,children:[(0,jsx_runtime.jsxs)(HeaderBar,{children:[(0,jsx_runtime.jsxs)("h1",{children:[t("title-debug-view")," (",readOnlySpecifier,")"]}),(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.iv`
              flex-grow: 1;
            `}),(0,jsx_runtime.jsx)(Button.ZP,{variant:"primary",size:"medium",onClick:closeModal,children:t("close")})]}),(0,jsx_runtime.jsx)(monaco_MonacoEditor,{height:"90vh",defaultLanguage:"json",options:{wordWrap:"on",readOnly},defaultValue:editedContent||void 0,onChange:value=>value&&setEditedContent(value)})]})]})},components_DebugModal=DebugModal;try{DebugModal.displayName="DebugModal",DebugModal.__docgenInfo={description:"",displayName:"DebugModal",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"unknown"}},readOnly:{defaultValue:{value:"true"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},updateDataOnClose:{defaultValue:null,description:"",name:"updateDataOnClose",required:!1,type:{name:"Dispatch<any>"}},buttonSize:{defaultValue:{value:"medium"},description:"",name:"buttonSize",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DebugModal.tsx#DebugModal"]={docgenInfo:DebugModal.__docgenInfo,name:"DebugModal",path:"src/components/DebugModal.tsx#DebugModal"})}catch(__react_docgen_typescript_loader_error){}const DebugModal_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport DebugModal from "../src/components/DebugModal";\nexport default ({\n  title: "Components/DebugModal",\n  component: DebugModal\n} as Meta);\nconst Component = DebugModal;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Primary: Story<ComponentProps> = Template.bind({});\nPrimary.args = {\n  data: {\n    random: 12,\n    "random float": 1.768,\n    bool: false,\n    date: "2001-01-01",\n    regEx: "hellooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo world",\n    enum: "json",\n    firstname: "Firstname",\n    lastname: "LastName",\n    city: "Stockholm",\n    country: "Belize",\n    countryCode: "US",\n    "email uses current data": "firstname.lastname@example.com",\n    "email from expression": "Firstname.Lastname@example.com",\n    array: ["Lanna", "Marinna", "Constance", "Konstance", "Stevana"],\n    "array of objects": [{\n      index: 0,\n      "index start at 5": 5\n    }, {\n      index: 1,\n      "index start at 5": 6\n    }, {\n      index: 2,\n      "index start at 5": 7\n    }],\n    Emelina: {\n      age: 32\n    }\n  }\n};\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{primary:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/DebugModal",component:components_DebugModal},Component=components_DebugModal,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={data:{random:12,"random float":1.768,bool:!1,date:"2001-01-01",regEx:"hellooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo world",enum:"json",firstname:"Firstname",lastname:"LastName",city:"Stockholm",country:"Belize",countryCode:"US","email uses current data":"firstname.lastname@example.com","email from expression":"Firstname.Lastname@example.com",array:["Lanna","Marinna","Constance","Konstance","Stevana"],"array of objects":[{index:0,"index start at 5":5},{index:1,"index start at 5":6},{index:2,"index start at 5":7}],Emelina:{age:32}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/index.ts"),_styles_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/styles/constants.ts"),_styles_respond__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/styles/respond.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BASE_BUTTON_STYLES=`\n  position: relative;\n  display: inline-block;\n  padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes.large.padding};\n  font-family: ${_styles__WEBPACK_IMPORTED_MODULE_2__.$O};\n  font-weight: ${_styles__WEBPACK_IMPORTED_MODULE_2__.vC.normal};\n  font-size: ${_styles_constants__WEBPACK_IMPORTED_MODULE_3__.Kx}px;\n  line-height: normal;\n  vertical-align: baseline;\n  cursor: pointer;\n  user-select: none;\n  text-decoration: none;\n  text-align: center;\n  justify-content: center;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  transition: all 150ms linear;\n  border: 2.5px solid transparent;\n  z-index: 1;\n  white-space: nowrap;\n\n  color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.text};\n  background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.bg};\n  border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.border};\n\n  &:hover {\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.hoverBorder};\n    background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.hoverBg};\n    border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.hoverBorder};\n    text-decoration: none;\n  }\n\n  &:active {\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.hoverText};\n    background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.activeBg};\n    border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.hoverBorder};\n  }\n\n  &:disabled {\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.disabledText};\n    background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.disabledBg};\n    border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.disabledBorder};\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    text-decoration: none;\n  }\n\n\n  ${_styles_respond__WEBPACK_IMPORTED_MODULE_4__.L.sm} {\n    white-space: nowrap;\n  }\n`,PrimaryButtonStyles=props=>`\n    text-transform: ${props.transform};\n    padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes[props.size].padding};\n  `,PrimaryButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.button`
  ${BASE_BUTTON_STYLES}
  ${PrimaryButtonStyles}
`,SecondaryButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.button`
  ${BASE_BUTTON_STYLES}
  ${props=>`\n    text-transform: ${props.transform};\n    padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes[props.size].padding};\n\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.text};\n    background: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.bg};\n    border: 1.5px solid ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.border};\n\n    &:hover,\n    &:focus {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.hoverText};\n      box-shadow: 0 0 0 1px ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.text};\n      border: 1.5px solid ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.text};\n    }\n\n    &:active {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.hoverText};\n      background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.activeBg};\n    }\n\n    &:disabled {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.disabledText};\n      background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.disabledBg};\n      border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.disabledBorder};\n    }\n  `}
`,RejectButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.button`
  ${BASE_BUTTON_STYLES}
  ${props=>`\n    text-transform: ${props.transform};\n    padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes[props.size].padding};\n\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.text};\n    background: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.bg};\n    border: 1.5px solid ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.border};\n\n    &:hover,\n    &:focus {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.hoverText};\n      box-shadow: 0 0 0 1px ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.text};\n      border: 1.5px solid ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.text};\n    }\n\n    &:active {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.hoverText};\n      background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.activeBg};\n    }\n\n    &:disabled {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.disabledText};\n      background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.disabledBg};\n      border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.disabledBorder};\n    }\n  `}
`,TertiaryButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.button`
  ${BASE_BUTTON_STYLES}
  ${props=>`\n    text-transform: ${props.transform};\n    padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes[props.size].padding};\n\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.text};\n    background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.bg};\n    border: unset;\n\n    &:hover {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.hoverText};\n      background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.hoverBg};\n    }\n\n    &:active {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.hoverText};\n      background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.activeBg};\n    }\n\n    &:disabled {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.disabledText};\n      background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.disabledBg};\n      border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.disabledBorder};\n    }\n  `}
`,BlueButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.button`
  ${BASE_BUTTON_STYLES}
  ${props=>`\n    text-transform: ${props.transform};\n    padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes[props.size].padding};\n\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.text};\n    background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.wE.colors.blue[500]};\n    border: unset;\n    border: 2px solid ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.border};\n\n    &:hover {\n      border: 2px solid ${_styles__WEBPACK_IMPORTED_MODULE_2__.wE.colors.blue[600]};\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.wE.colors.blue[700]};\n    }\n\n    &:active {\n      border: 2px solid ${_styles__WEBPACK_IMPORTED_MODULE_2__.wE.colors.blue[400]};\n    }\n\n    &:disabled {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.disabledText};\n      background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.disabledBg};\n      border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.disabledBorder};\n    }\n  `}
`,WhiteButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.button`
  ${BASE_BUTTON_STYLES}
  ${props=>`\n    text-transform: ${props.transform};\n    padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes[props.size].padding};\n\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.white.text};\n    background: #FCFCFC;\n    border: 1.5px solid #DEDEDE;\n\n  `}
`,IconButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.button`
  ${BASE_BUTTON_STYLES}
  ${props=>`\n    text-transform: ${props.transform};\n    padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes[props.size].padding};\n    color: black;\n    background: none;\n    border: 0px;\n\n    &:hover, &:active, &:disabled {\n      background: none;\n    }\n\n  `}
`,Button=(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.label`
  ${BASE_BUTTON_STYLES}
`,(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(((props,ref)=>{switch(props.variant){case"primary":default:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PrimaryButton,{ref,...props});case"secondary":case"outlined":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SecondaryButton,{ref,...props});case"reject":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(RejectButton,{ref,...props});case"tertiary":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TertiaryButton,{ref,...props});case"blue":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlueButton,{ref,...props});case"white":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(WhiteButton,{ref,...props});case"icon":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(IconButton,{ref,...props})}})));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{PrimaryButtonStyles.displayName="Button",PrimaryButtonStyles.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Dialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),_mui_base_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Dialog=({children,open,onClose,closeable=!0,noPadding=!1,width="normal",...rest})=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const current=ref.current,closeCallback=()=>{onClose&&onClose()};return current?.addEventListener("close",closeCallback),()=>{current?.removeEventListener("close",closeCallback)}}),[onClose]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{ref.current&&(open&&!ref.current.open?ref.current.showModal():ref.current.open&&ref.current.close())}),[open]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{if(!ref.current||closeable)return;const eventHandler=event=>{event.cancelable||ref.current?.showModal(),event.preventDefault()},element=ref.current;return element.addEventListener("close",eventHandler),element.addEventListener("cancel",eventHandler),()=>{element?.removeEventListener("close",eventHandler),element?.removeEventListener("cancel",eventHandler)}}),[closeable]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dialog",{ref,...rest,className:_emotion_css__WEBPACK_IMPORTED_MODULE_0__.iv`
        border: 0;
        border-radius: 5px;
        padding: 0;
        width: 95%;
        max-width: ${"normal"===width?"700px":"1200px"};

        h1 {
          font-size: ${_styles__WEBPACK_IMPORTED_MODULE_2__.cp.h5};
        }
        h2 {
          font-size: ${_styles__WEBPACK_IMPORTED_MODULE_2__.cp.h6};
        }
        h3 {
          font-size: ${_styles__WEBPACK_IMPORTED_MODULE_2__.cp.h6};
        }
        h4 {
          font-size: ${_styles__WEBPACK_IMPORTED_MODULE_2__.cp.h6};
        }
        h5 {
          font-size: ${_styles__WEBPACK_IMPORTED_MODULE_2__.cp.h6};
        }
        h6 {
          font-size: ${_styles__WEBPACK_IMPORTED_MODULE_2__.cp.h6};
        }

        &::backdrop {
          background: rgba(0, 0, 0, 0.4);
        }
      `,children:open&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_base_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__.Z,{onClickAway:()=>{closeable&&ref.current?.close()},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{role:"presentation",className:_emotion_css__WEBPACK_IMPORTED_MODULE_0__.iv`
              ${!noPadding&&"padding: 2rem 3rem;"}
            `,children})})})};Dialog.displayName="Dialog";const __WEBPACK_DEFAULT_EXPORT__=Dialog;try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},closeable:{defaultValue:{value:"true"},description:"",name:"closeable",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:{value:"false"},description:"",name:"noPadding",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"normal"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"wide"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dialog.tsx#Dialog"]={docgenInfo:Dialog.__docgenInfo,name:"Dialog",path:"src/components/Dialog.tsx#Dialog"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/index.ts"),_utils_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const rotation=_emotion_react__WEBPACK_IMPORTED_MODULE_3__.F4`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`,fadeIn=_emotion_react__WEBPACK_IMPORTED_MODULE_3__.F4`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`,variantSizes={small:{width:"16px",height:"16px"},medium:{width:"30px",height:"30px"},large:{width:"42px",height:"42px"}},StyledSpinner=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  margin: ${props=>props.disableMargin?"0":"1rem"};
  width: ${props=>variantSizes[props.variant].width};
  height: ${props=>variantSizes[props.variant].height};
  border: 5px solid #f1f1f1;
  border-bottom-color: ${_styles__WEBPACK_IMPORTED_MODULE_1__.wE.colors.green[500]};
  border-radius: 50%;
  display: inline-block;
  /** Showing the spinner is delayed because showing a spinner for a moment on fast transitions makes the application to feel like more slow than it is **/
  opacity: 0;
  animation-name: ${rotation}, ${fadeIn};
  animation-duration: 1s, 600ms;
  animation-timing-function: linear, ease;
  animation-iteration-count: infinite, 1;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
`,Spinner=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledSpinner,{className:_utils_constants__WEBPACK_IMPORTED_MODULE_4__.wU,...props});Spinner.displayName="Spinner";const __WEBPACK_DEFAULT_EXPORT__=Spinner;try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},disableMargin:{defaultValue:null,description:"",name:"disableMargin",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/respond.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>respondToOrLarger});const mediaQuery=minWidth=>`@media (min-width: ${minWidth}rem)`,respondToOrLarger={xxxs:mediaQuery(2),xxs:mediaQuery(25),xs:mediaQuery(30),sm:mediaQuery(36),md:mediaQuery(48),lg:mediaQuery(62),xl:mediaQuery(75),xxl:mediaQuery(87.5),xxxl:mediaQuery(100),xxxxl:mediaQuery(125),xxxxxl:mediaQuery(150)}},"./src/utils/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PQ:()=>HIDE_TEXT_IN_SYSTEM_TESTS_EVENT,dK:()=>MARGIN_BETWEEN_NAVBAR_AND_CONTENT,tT:()=>SHOW_TEXT_IN_SYSTEM_TESTS_EVENT,tZ:()=>INCLUDE_THIS_HEADING_IN_HEADINGS_NAVIGATION_CLASS,wU:()=>SPINNER_CLASS});const HIDE_TEXT_IN_SYSTEM_TESTS_EVENT="hide-text-in-system-tests",SHOW_TEXT_IN_SYSTEM_TESTS_EVENT="show-text-in-system-tests",MARGIN_BETWEEN_NAVBAR_AND_CONTENT="2rem",INCLUDE_THIS_HEADING_IN_HEADINGS_NAVIGATION_CLASS="include-this-heading-in-headings-navigation",SPINNER_CLASS="loading-spinner-component"}}]);
//# sourceMappingURL=DebugModal-stories.d85eeee0.iframe.bundle.js.map