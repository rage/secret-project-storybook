"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[3103],{"./stories/FloatingErrorBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FloatingErrorBox_stories});__webpack_require__("./node_modules/react/index.js");var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");const tick_namespaceObject=__webpack_require__.p+"static/media/tick.955eb9a2.svg";var styles=__webpack_require__("./src/styles/index.ts"),Button=__webpack_require__("./src/components/Button.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ErrorWrapper=emotion_styled_browser_esm.Z.div`
  max-width: 460px;
  height: 163px;
  border-radius: 1px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: #f5f5f5;
  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;
`,ButtonWrapper=emotion_styled_browser_esm.Z.div`
  display: flex;
  gap: 26px;
`,Message=emotion_styled_browser_esm.Z.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 30px;
  background: #e2efec;
  display: flex;
  justify-content: center;
  gap: 5px;

  span {
    display: inline-block;
    font-family: ${styles.$O};
    color: #37bc9b;
    align-self: center;
  }
`,FloatingErrorBox=()=>(0,jsx_runtime.jsxs)(ErrorWrapper,{children:[(0,jsx_runtime.jsxs)(ButtonWrapper,{children:[(0,jsx_runtime.jsx)(Button.ZP,{transform:"capitalize",variant:"primary",size:"large",children:"Reset"}),(0,jsx_runtime.jsx)(Button.ZP,{transform:"capitalize",variant:"secondary",size:"large",children:"Reset"})]}),(0,jsx_runtime.jsxs)(Message,{children:[(0,jsx_runtime.jsx)(tick_namespaceObject,{}),(0,jsx_runtime.jsx)("span",{children:"Your edit has been saved!"})]})]});FloatingErrorBox.displayName="FloatingErrorBox";const components_FloatingErrorBox=FloatingErrorBox;try{FloatingErrorBox.displayName="FloatingErrorBox",FloatingErrorBox.__docgenInfo={description:"",displayName:"FloatingErrorBox",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingErrorBox.tsx#FloatingErrorBox"]={docgenInfo:FloatingErrorBox.__docgenInfo,name:"FloatingErrorBox",path:"src/components/FloatingErrorBox.tsx#FloatingErrorBox"})}catch(__react_docgen_typescript_loader_error){}const FloatingErrorBox_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport FloatingErrorBox from "../src/components/FloatingErrorBox";\nexport default ({\n  title: "Components/FloatingErrorBox",\n  component: FloatingErrorBox\n} as Meta);\nconst Component = FloatingErrorBox;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Primary: Story<ComponentProps> = Template.bind({});\nPrimary.args = {};\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{primary:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/FloatingErrorBox",component:components_FloatingErrorBox},Component=components_FloatingErrorBox,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/index.ts"),_styles_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/styles/constants.ts"),_styles_respond__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/styles/respond.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BASE_BUTTON_STYLES=`\n  position: relative;\n  display: inline-block;\n  padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes.large.padding};\n  font-family: ${_styles__WEBPACK_IMPORTED_MODULE_2__.$O};\n  font-weight: ${_styles__WEBPACK_IMPORTED_MODULE_2__.vC.normal};\n  font-size: ${_styles_constants__WEBPACK_IMPORTED_MODULE_3__.Kx}px;\n  line-height: normal;\n  vertical-align: baseline;\n  cursor: pointer;\n  user-select: none;\n  text-decoration: none;\n  text-align: center;\n  justify-content: center;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  transition: all 150ms linear;\n  border: 2.5px solid transparent;\n  z-index: 1;\n  white-space: nowrap;\n\n  color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.text};\n  background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.bg};\n  border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.border};\n\n  &:hover {\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.hoverBorder};\n    background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.hoverBg};\n    border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.hoverBorder};\n    text-decoration: none;\n  }\n\n  &:active {\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.hoverText};\n    background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.activeBg};\n    border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.hoverBorder};\n  }\n\n  &:disabled {\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.disabledText};\n    background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.disabledBg};\n    border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.disabledBorder};\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    text-decoration: none;\n  }\n\n\n  ${_styles_respond__WEBPACK_IMPORTED_MODULE_4__.L.sm} {\n    white-space: nowrap;\n  }\n`,PrimaryButtonStyles=props=>`\n    text-transform: ${props.transform};\n    padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes[props.size].padding};\n  `,PrimaryButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.button`
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
`,Button=(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.label`
  ${BASE_BUTTON_STYLES}
`,(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(((props,ref)=>{switch(props.variant){case"primary":default:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PrimaryButton,{ref,...props});case"secondary":case"outlined":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SecondaryButton,{ref,...props});case"reject":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(RejectButton,{ref,...props});case"tertiary":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TertiaryButton,{ref,...props});case"blue":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlueButton,{ref,...props});case"white":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(WhiteButton,{ref,...props})}})));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{PrimaryButtonStyles.displayName="Button",PrimaryButtonStyles.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/respond.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>respondToOrLarger});const mediaQuery=minWidth=>`@media (min-width: ${minWidth}rem)`,respondToOrLarger={xxxs:mediaQuery(2),xxs:mediaQuery(25),xs:mediaQuery(30),sm:mediaQuery(36),md:mediaQuery(48),lg:mediaQuery(62),xl:mediaQuery(75),xxl:mediaQuery(87.5),xxxl:mediaQuery(100),xxxxl:mediaQuery(125),xxxxxl:mediaQuery(150)}}}]);
//# sourceMappingURL=FloatingErrorBox-stories.12124894.iframe.bundle.js.map