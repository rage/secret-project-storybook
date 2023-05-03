"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[1996],{"./stories/TopicObjectives.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TopicObjectives_stories});__webpack_require__("./node_modules/react/index.js");var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js");const checkmark_namespaceObject=__webpack_require__.p+"static/media/checkmark.476acc48.svg";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PLACEHOLDER_TEXT="The passage experienced a surge in popularity during the 1960s.",objectives=[{id:1,objective:PLACEHOLDER_TEXT},{id:2,objective:PLACEHOLDER_TEXT},{id:3,objective:PLACEHOLDER_TEXT},{id:4,objective:PLACEHOLDER_TEXT}],Wrapper=emotion_styled_browser_esm.Z.div`
  margin: 0 auto;
  max-width: 1000px;
  height: auto;
`,Header=emotion_styled_browser_esm.Z.div`
  background: #44827e;
  text-align: center;
  min-height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;

  h2 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    text-transform: uppercase;
    color: #ffffff;
  }
`,Content=emotion_styled_browser_esm.Z.div`
  padding: 2rem 2rem 3rem 2rem;
  background: rgba(229, 224, 241, 0.05);
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 30px;
  column-gap: 5px;
  border-right: 1px solid #e5e0f1;
  border-left: 1px solid #e5e0f1;
  border-bottom: 1px solid #e5e0f1;

  @media (max-width: 767.98px) {
    padding: 1rem 1rem 2rem 1rem;
    grid-template-columns: 1fr;
    row-gap: 25px;
  }
`,StyledObjectives=emotion_styled_browser_esm.Z.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  span {
    margin-left: 15px;
    font-size: 20px;
    line-height: 1.3;
    font-style: normal;
    font-weight: 400;
    color: #535a66;
  }
`,StyledCheck=(0,emotion_styled_browser_esm.Z)(checkmark_namespaceObject)`
  margin-top: 8px;
`,TopicObjectives=()=>{const{t}=(0,es.$G)();return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(Header,{children:(0,jsx_runtime.jsx)("h2",{children:t("what-you-will-learn")})}),(0,jsx_runtime.jsx)(Content,{children:objectives.map((({id,objective})=>(0,jsx_runtime.jsxs)(StyledObjectives,{children:[(0,jsx_runtime.jsx)(StyledCheck,{}),(0,jsx_runtime.jsx)("span",{children:objective})]},id)))})]})};TopicObjectives.displayName="TopicObjectives";const components_TopicObjectives=TopicObjectives;try{TopicObjectives.displayName="TopicObjectives",TopicObjectives.__docgenInfo={description:"",displayName:"TopicObjectives",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TopicObjectives.tsx#TopicObjectives"]={docgenInfo:TopicObjectives.__docgenInfo,name:"TopicObjectives",path:"src/components/TopicObjectives.tsx#TopicObjectives"})}catch(__react_docgen_typescript_loader_error){}const TopicObjectives_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport TopicObjectives from "../src/components/TopicObjectives";\nexport default ({\n  title: "Components/TopicObjectives",\n  component: TopicObjectives\n} as Meta);\nconst Component = TopicObjectives;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Primary: Story<ComponentProps> = Template.bind({});\nPrimary.args = {\n  children: "TopicObjectives"\n};\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{primary:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/TopicObjectives",component:components_TopicObjectives},Component=components_TopicObjectives,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={children:"TopicObjectives"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]}}]);
//# sourceMappingURL=TopicObjectives-stories.357952b8.iframe.bundle.js.map