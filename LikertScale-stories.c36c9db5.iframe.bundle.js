"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[9414],{"./stories/LikertScale.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _src_components_PeerReview_LikertScale__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/PeerReview/LikertScale.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react"\nimport React from "react"\n\nimport LikertScale from "../src/components/PeerReview/LikertScale"\n\nexport default {\n  title: "Components/PeerReview/LikertScale",\n  component: LikertScale,\n} as Meta\n\nconst Component = LikertScale\n\ntype ComponentProps = React.ComponentProps<typeof Component>\n\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />\n\nexport const Primary: Story<ComponentProps> = Template.bind({})\nPrimary.args = {\n  children: "LikertScale",\n}\n',locationsMap:{primary:{startLoc:{col:40,line:16},endLoc:{col:89,line:16},startBody:{col:40,line:16},endBody:{col:89,line:16}}}}},title:"Components/PeerReview/LikertScale",component:_src_components_PeerReview_LikertScale__WEBPACK_IMPORTED_MODULE_1__.A},Component=_src_components_PeerReview_LikertScale__WEBPACK_IMPORTED_MODULE_1__.A,Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={children:"LikertScale"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/PeerReview/LikertScale.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>PeerReview_LikertScale});var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),es=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-i18next/dist/es/index.js"));const agree_namespaceObject=__webpack_require__.p+"static/media/agree.60c4acec.svg",disagree_namespaceObject=__webpack_require__.p+"static/media/disagree.762e08f3.svg",neutral_namespaceObject=__webpack_require__.p+"static/media/neutral.4bdcc321.svg",stronglyAgree_namespaceObject=__webpack_require__.p+"static/media/stronglyAgree.bae1aa71.svg",stronglyDisagree_namespaceObject=__webpack_require__.p+"static/media/stronglyDisagree.78928049.svg";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Wrapper=emotion_styled_browser_esm.A.div`
  margin: 1.5rem auto;
  max-width: 1000px;
`,Question=emotion_styled_browser_esm.A.span`
  font-size: 22px;
  margin: 0 auto;
  margin-bottom: 1rem;
  display: block;
  color: #1a2333;
`,Likerts=emotion_styled_browser_esm.A.div`
  background: #f9f9f9;
  min-height: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  margin: 0 auto;
  max-width: 1000px;
  justify-items: center;
`,Likert=emotion_styled_browser_esm.A.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  background-color: ${({active})=>active?"#313947":"#f9f9f9"};
  cursor: pointer;
  transition: all 0.2s;

  svg .bg {
    fill: ${({active})=>active&&"#ffd93b"};
  }

  svg {
    margin-top: 10px;
    margin-bottom: 5px;
  }

  &:hover {
    background: ${({active})=>active?"#313947":"#babdc2"};
    svg .bg {
      fill: #ffd93b;
    }
  }

  .likert-scale-text {
    margin-top: 6px;
    font-size: 15px;
    font-weight: 500;
    color: ${({active})=>active?"#ffffff":"#313947"};
    text-align: center;
    line-height: 1.2;
    padding: 0 0.5rem;
  }
`,LikertScale=({disabled,question,answerRequired,selectedOption,setSelectedOption})=>{const{t}=(0,es.Bd)(),arr=[{text:t("likert-scale-strongly-disagree"),image:(0,jsx_runtime.jsx)(stronglyDisagree_namespaceObject,{})},{text:t("likert-scale-disagree"),image:(0,jsx_runtime.jsx)(disagree_namespaceObject,{})},{text:t("likert-scale-neither-agree-nor-disagree"),image:(0,jsx_runtime.jsx)(neutral_namespaceObject,{})},{text:t("likert-scale-agree"),image:(0,jsx_runtime.jsx)(agree_namespaceObject,{})},{text:t("likert-scale-strongly-agree"),image:(0,jsx_runtime.jsx)(stronglyAgree_namespaceObject,{})}];return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(Question,{children:[question,answerRequired&&" *"]}),(0,jsx_runtime.jsx)(Likerts,{children:arr.map(((option,n)=>(0,jsx_runtime.jsxs)(Likert,{onClick:()=>{disabled||setSelectedOption(n+1)},active:selectedOption===n+1,children:[option.image,(0,jsx_runtime.jsx)("p",{className:"likert-scale-text",children:option.text})]},n+1)))})]})};LikertScale.displayName="LikertScale",LikertScale.defaultProps={disabled:!1};const PeerReview_LikertScale=LikertScale;try{LikertScale.displayName="LikertScale",LikertScale.__docgenInfo={description:"",displayName:"LikertScale",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},question:{defaultValue:null,description:"",name:"question",required:!0,type:{name:"string"}},answerRequired:{defaultValue:null,description:"",name:"answerRequired",required:!0,type:{name:"boolean"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"number | null"}},setSelectedOption:{defaultValue:null,description:"",name:"setSelectedOption",required:!0,type:{name:"(value: number | null) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PeerReview/LikertScale.tsx#LikertScale"]={docgenInfo:LikertScale.__docgenInfo,name:"LikertScale",path:"src/components/PeerReview/LikertScale.tsx#LikertScale"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=LikertScale-stories.c36c9db5.iframe.bundle.js.map