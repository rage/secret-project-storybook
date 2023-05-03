"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[1310],{"./stories/TopLevelPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TopLevelPage_stories});__webpack_require__("./node_modules/react/index.js");var emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link);const bulleye_namespaceObject=__webpack_require__.p+"static/media/bulleye.7e72ba00.svg",cross_namespaceObject=__webpack_require__.p+"static/media/cross.17492feb.svg";var styles=__webpack_require__("./src/styles/index.ts"),respond=__webpack_require__("./src/styles/respond.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Content=emotion_styled_browser_esm.Z.div`
  margin: 0 auto;
  max-width: 100%;
  background: #ecf3f2;
  display: flex;
  height: auto;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem;
  color: #1a2333;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  transition: filter 0.2s;
  filter: brightness(100%) contrast(100%);
  &:hover {
    filter: brightness(92%) contrast(110%);
  }

  h3 {
    font-family: ${styles.$O};
    font-size: clamp(22px, 2vw, 24px);
    font-weight: 600;
    color: #065853;
  }

  span {
    font-family: ${styles.$O};
    font-size: 18px;
    opacity: 0.8;
  }

  .right-arrow {
    height: 15px;
    width: 15px;
    ${respond.L.md} {
      height: 30px;
      width: 30px;
    }
  }
`,SVGWrapper=emotion_styled_browser_esm.Z.div`
  position: absolute;
  width: 90px;
  height: 90px;
  top: ${({isEven})=>isEven?"-48px":"-26px"};
  left: 20px;
`,TopLevelPage=({title,url,index})=>{const isEven=index%2==0;return(0,jsx_runtime.jsx)(link_default(),{href:url,className:emotion_css_esm.iv`
        text-decoration: none;
      `,children:(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(SVGWrapper,{isEven,children:isEven?(0,jsx_runtime.jsx)(bulleye_namespaceObject,{}):(0,jsx_runtime.jsx)(cross_namespaceObject,{})}),(0,jsx_runtime.jsx)("h3",{children:title})]}),(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 56.957 49",className:"right-arrow",children:(0,jsx_runtime.jsx)("path",{d:"M32.466,0,29.321,3.146l19.123,19.11H0v4.475H48.444L29.321,45.854,32.466,49l24.49-24.506Z",fill:"#44827E"})})]})})};TopLevelPage.displayName="TopLevelPage";const components_TopLevelPage=TopLevelPage;try{TopLevelPage.displayName="TopLevelPage",TopLevelPage.__docgenInfo={description:"",displayName:"TopLevelPage",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TopLevelPage.tsx#TopLevelPage"]={docgenInfo:TopLevelPage.__docgenInfo,name:"TopLevelPage",path:"src/components/TopLevelPage.tsx#TopLevelPage"})}catch(__react_docgen_typescript_loader_error){}const TopLevelPage_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport TopLevelPage from "../src/components/TopLevelPage";\nexport default ({\n  title: "Components/TopLevelPage",\n  component: TopLevelPage\n} as Meta);\nconst Component = TopLevelPage;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Primary: Story<ComponentProps> = Template.bind({});\nPrimary.args = {\n  title: "FAQ",\n  url: "/"\n};\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{primary:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/TopLevelPage",component:components_TopLevelPage},Component=components_TopLevelPage,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={title:"FAQ",url:"/"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/styles/respond.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>respondToOrLarger});const mediaQuery=minWidth=>`@media (min-width: ${minWidth}rem)`,respondToOrLarger={xxxs:mediaQuery(2),xxs:mediaQuery(25),xs:mediaQuery(30),sm:mediaQuery(36),md:mediaQuery(48),lg:mediaQuery(62),xl:mediaQuery(75),xxl:mediaQuery(87.5),xxxl:mediaQuery(100),xxxxl:mediaQuery(125),xxxxxl:mediaQuery(150)}}}]);
//# sourceMappingURL=TopLevelPage-stories.39664c38.iframe.bundle.js.map