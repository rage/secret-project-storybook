"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[131],{"./stories/Test.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _src_components_CircularProgressBar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CircularProgressBar.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react"\nimport React from "react"\n\nimport CircularProgressBar from "../src/components/CircularProgressBar"\n\nexport default {\n  title: "Components/CircularProgressBarTest",\n  component: CircularProgressBar,\n} as Meta\n\nconst Component = CircularProgressBar\n\ntype ComponentProps = React.ComponentProps<typeof Component>\n\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />\n\nexport const Simple: Story<ComponentProps> = Template.bind({})\nSimple.args = {\n  children: "CircularProgressBar",\n}\n',locationsMap:{simple:{startLoc:{col:40,line:16},endLoc:{col:89,line:16},startBody:{col:40,line:16},endBody:{col:89,line:16}}}}},title:"Components/CircularProgressBarTest",component:_src_components_CircularProgressBar__WEBPACK_IMPORTED_MODULE_1__.A},Component=_src_components_CircularProgressBar__WEBPACK_IMPORTED_MODULE_1__.A,Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component,{...args});Template.displayName="Template";const Simple=Template.bind({});Simple.args={children:"CircularProgressBar"},Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Simple.parameters?.docs?.source}}};const __namedExportsOrder=["Simple"]},"./src/components/CircularProgressBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_styles__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/styles/index.ts")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CircleBox=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A.div`
  width: 60px;
  height: 60px;
  margin: 0.2rem !important;
  display: inline-block;
  padding: 0;
  .progress {
    position: absolute;
    height: 60px;
    width: 60px;
    cursor: pointer;
  }

  .progress-circle {
    transform: rotate(-90deg);
  }

  .progress-circle-bg {
    fill: none;
    stroke: ${_styles__WEBPACK_IMPORTED_MODULE_2__.$7.colors.green[200]};
    stroke-width: 7px;
    stroke-linecap: round;
  }
  .progress-circle-value {
    fill: none;
    stroke: ${_styles__WEBPACK_IMPORTED_MODULE_2__.$7.colors.green[600]};
    stroke-width: 7px;
    stroke-linecap: round;
    stroke-dasharray: 131 131;
    stroke-dashoffset: ${({point})=>131-131*point};
    transition: stroke-dashoffset 0.7s ease-in-out;
  }
  .progress-text {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-family: ${_styles__WEBPACK_IMPORTED_MODULE_2__.ec};
  }
`,CircularProgressBar=({scoreMaximum,userPoints})=>{const complete=userPoints/scoreMaximum;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CircleBox,{point:complete,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"progress",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg",{className:"progress-circle",width:"60",height:"60",xmlns:"http://www.w3.org/2000/svg",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle",{className:"progress-circle-bg",cx:"50%",cy:"50%",r:"20.9155"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle",{className:"progress-circle-value update-value",cx:"50%",cy:"50%",r:"20.9155"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"progress-text","data-progress":"50",children:[userPoints,"/",scoreMaximum]})]})})};CircularProgressBar.displayName="CircularProgressBar";const __WEBPACK_DEFAULT_EXPORT__=CircularProgressBar;try{CircularProgressBar.displayName="CircularProgressBar",CircularProgressBar.__docgenInfo={description:"",displayName:"CircularProgressBar",props:{scoreMaximum:{defaultValue:null,description:"",name:"scoreMaximum",required:!0,type:{name:"number"}},userPoints:{defaultValue:null,description:"",name:"userPoints",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgressBar.tsx#CircularProgressBar"]={docgenInfo:CircularProgressBar.__docgenInfo,name:"CircularProgressBar",path:"src/components/CircularProgressBar.tsx#CircularProgressBar"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Test-stories.89a748b8.iframe.bundle.js.map