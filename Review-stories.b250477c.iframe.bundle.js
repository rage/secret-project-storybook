"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[353],{"./stories/Review.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Review_stories});__webpack_require__("./node_modules/react/index.js");var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),typography=__webpack_require__("./src/styles/typography.ts"),TextAreaField=__webpack_require__("./src/components/InputFields/TextAreaField.tsx"),LikertScale=__webpack_require__("./src/components/PeerReview/LikertScale.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Wrapper=emotion_styled_browser_esm.Z.div`
  margin: 0 auto;
  max-width: 1000px;

  .comment {
    display: inline-block;
    font-size: 20px;
    margin-bottom: 10px;
    color: #1a2333;
  }
`,StyledInstruction=emotion_styled_browser_esm.Z.div`
  margin-bottom: 3rem;

  .instruction {
    font-family: ${typography.$S};
    margin-bottom: 5px;
  }

  .instruction-text {
    font-size: 18px;
    line-height: 24px;
    color: #313947;
  }
`,Review=()=>{const{t}=(0,es.$G)();return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(StyledInstruction,{children:[(0,jsx_runtime.jsx)("h3",{className:"instruction",children:t("instruction")}),(0,jsx_runtime.jsx)("p",{className:"instruction-text",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\nbeen the industrys standard dummy text ever since the 1500s, when an unknown printer took\na galley of type and scrambled."})]}),(0,jsx_runtime.jsx)("span",{className:"comment",children:"General comments"}),(0,jsx_runtime.jsx)(TextAreaField.Z,{placeholder:t("write-a-review"),onChange:()=>null}),(0,jsx_runtime.jsx)(LikertScale.Z,{question:"Example question",answerRequired:!1,selectedOption:null,setSelectedOption:function(_value){}})]})};Review.displayName="Review";const PeerReview_Review=Review;try{Review.displayName="Review",Review.__docgenInfo={description:"",displayName:"Review",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PeerReview/Review.tsx#Review"]={docgenInfo:Review.__docgenInfo,name:"Review",path:"src/components/PeerReview/Review.tsx#Review"})}catch(__react_docgen_typescript_loader_error){}const Review_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport Review from "../src/components/PeerReview/Review";\nexport default ({\n  title: "Components/PeerReview/Review",\n  component: Review\n} as Meta);\nconst Component = Review;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Primary: Story<ComponentProps> = Template.bind({});\nPrimary.args = {\n  children: "Option"\n};\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{primary:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/PeerReview/Review",component:PeerReview_Review},Component=PeerReview_Review,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={children:"Option"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/InputFields/TextAreaField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function updateHeight(ref){ref.current&&(ref.current.style.height="auto",ref.current.style.height=`${ref.current.scrollHeight+5}px`)}const TextAreaField=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({onChangeByValue,onChange,className,autoResize,...rest},ref)=>{const textareaRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),combinedRef=(fwdRef=ref,innerRef=textareaRef,react__WEBPACK_IMPORTED_MODULE_1__.useEffect((()=>{[innerRef,fwdRef].forEach((ref=>{ref&&("function"==typeof ref?ref(innerRef.current||null):ref.current=innerRef.current||null)}))}),[innerRef,fwdRef]),innerRef);var fwdRef,innerRef;return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{autoResize&&textareaRef.current&&updateHeight(textareaRef)}),[ref,rest.value,autoResize]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(_emotion_css__WEBPACK_IMPORTED_MODULE_0__.iv`
            margin-bottom: 1rem;

            label {
              display: grid;

              textarea {
                background: #fcfcfc;
                border: 1.6px solid #dedede;
                padding: 10px 12px;
              }
              span {
                color: #333;
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 0.2rem;
              }
            }
          `,className),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:rest.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea",{ref:combinedRef,onChange:event=>{if(onChangeByValue){const{target:{value}}=event;onChangeByValue(value)}onChange&&onChange(event),autoResize&&updateHeight(textareaRef)},defaultValue:rest.defaultValue,...rest})]})})}));TextAreaField.displayName="TextAreaField";const __WEBPACK_DEFAULT_EXPORT__=TextAreaField;try{TextAreaField.displayName="TextAreaField",TextAreaField.__docgenInfo={description:"",displayName:"TextAreaField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | FieldError"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!1,type:{name:"((value: string, name?: string) => void)"}},autoResize:{defaultValue:null,description:"",name:"autoResize",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputFields/TextAreaField.tsx#TextAreaField"]={docgenInfo:TextAreaField.__docgenInfo,name:"TextAreaField",path:"src/components/InputFields/TextAreaField.tsx#TextAreaField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PeerReview/LikertScale.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PeerReview_LikertScale});var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),es=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-i18next/dist/es/index.js"));const agree_namespaceObject=__webpack_require__.p+"static/media/agree.60c4acec.svg",disagree_namespaceObject=__webpack_require__.p+"static/media/disagree.762e08f3.svg",neutral_namespaceObject=__webpack_require__.p+"static/media/neutral.4bdcc321.svg",stronglyAgree_namespaceObject=__webpack_require__.p+"static/media/stronglyAgree.bae1aa71.svg",stronglyDisagree_namespaceObject=__webpack_require__.p+"static/media/stronglyDisagree.78928049.svg";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Wrapper=emotion_styled_browser_esm.Z.div`
  margin: 1.5rem auto;
  max-width: 1000px;
`,Question=emotion_styled_browser_esm.Z.span`
  font-size: 22px;
  margin: 0 auto;
  margin-bottom: 1rem;
  display: block;
  color: #1a2333;
`,Likerts=emotion_styled_browser_esm.Z.div`
  background: #f9f9f9;
  min-height: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  margin: 0 auto;
  max-width: 1000px;
`,Likert=emotion_styled_browser_esm.Z.div`
  width: 150px;
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
  }
`,LikertScale=({disabled,question,answerRequired,selectedOption,setSelectedOption})=>{const{t}=(0,es.$G)(),arr=[{text:t("likert-scale-strongly-disagree"),image:(0,jsx_runtime.jsx)(stronglyDisagree_namespaceObject,{})},{text:t("likert-scale-disagree"),image:(0,jsx_runtime.jsx)(disagree_namespaceObject,{})},{text:t("likert-scale-neither-agree-nor-disagree"),image:(0,jsx_runtime.jsx)(neutral_namespaceObject,{})},{text:t("likert-scale-agree"),image:(0,jsx_runtime.jsx)(agree_namespaceObject,{})},{text:t("likert-scale-strongly-agree"),image:(0,jsx_runtime.jsx)(stronglyAgree_namespaceObject,{})}];return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(Question,{children:[question,answerRequired&&" *"]}),(0,jsx_runtime.jsx)(Likerts,{children:arr.map(((option,n)=>(0,jsx_runtime.jsxs)(Likert,{onClick:()=>{disabled||setSelectedOption(n+1)},active:selectedOption===n+1,children:[option.image,(0,jsx_runtime.jsx)("p",{className:"likert-scale-text",children:option.text})]},n+1)))})]})};LikertScale.displayName="LikertScale",LikertScale.defaultProps={disabled:!1};const PeerReview_LikertScale=LikertScale;try{LikertScale.displayName="LikertScale",LikertScale.__docgenInfo={description:"",displayName:"LikertScale",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},question:{defaultValue:null,description:"",name:"question",required:!0,type:{name:"string"}},answerRequired:{defaultValue:null,description:"",name:"answerRequired",required:!0,type:{name:"boolean"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!0,type:{name:"number | null"}},setSelectedOption:{defaultValue:null,description:"",name:"setSelectedOption",required:!0,type:{name:"(value: number | null) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PeerReview/LikertScale.tsx#LikertScale"]={docgenInfo:LikertScale.__docgenInfo,name:"LikertScale",path:"src/components/PeerReview/LikertScale.tsx#LikertScale"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Review-stories.b250477c.iframe.bundle.js.map