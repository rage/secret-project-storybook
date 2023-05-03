"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[3618],{"./stories/HeroSection.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HeroSection_stories});__webpack_require__("./node_modules/react/index.js");var emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),styles=__webpack_require__("./src/styles/index.ts"),respond=__webpack_require__("./src/styles/respond.ts"),constants=__webpack_require__("./src/utils/constants.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextBox=emotion_styled_browser_esm.Z.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding: 2rem 2.5rem 3rem 2.5rem;
  margin: 0 auto;
  text-align: ${({direction})=>direction};
  align-items: ${({direction})=>direction};
  justify-content: center;

  ${respond.L.md} {
    margin: ${({direction})=>"center"==direction?"0 auto":"0 0 0 45%"};
  }

  ${respond.L.lg} {
    margin: ${({direction})=>"center"==direction?"0 auto":"0 0 0 35%"};
  }

  h1 {
    font-weight: 700;
    z-index: 20;
    margin-bottom: 0.5rem;
    line-height: 120%;
    color: ${({color})=>color||styles.wE.colors.gray[700]};
  }

  .chapter {
    font-size: 18px;
    color: ${({color})=>color||styles.wE.colors.gray[700]};
    opacity: 0.9;
    text-align: ${({direction})=>direction};
    font-weight: 500;
    font-family: ${styles.$O};
    margin-bottom: 0.2rem;
    text-transform: capitalize;
  }

  span {
    color: ${({color})=>color||styles.wE.colors.gray[700]};
    font-size: 18px;
    opacity: 0.9;
    z-index: 20;
  }
`,HeroSection=({title,subtitle,backgroundImage,fontColor,alignCenter,backgroundColor,label,partiallyTransparent:isNotPartiallyTransparent,backgroundRepeatX})=>{const direction=alignCenter?"center":"left";return(0,jsx_runtime.jsx)("div",{id:"hero-section",className:emotion_css_esm.iv`
        width: 100%;
        border-radius: 1px;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        padding: 7.5em 1em;
        margin-bottom: 3rem;
        background-color: ${backgroundColor||styles.wE.colors.green[200]};
        position: relative;

        &::after {
          background-size: 26rem;
          width: 100%;
          height: 100%;
          content: "";
          opacity: 0.3;
          background-image: url(${backgroundImage});
          background-repeat: ${backgroundRepeatX?"repeat-x":"no-repeat"};
          background-position: center center;
          position: absolute;
          top: 0px;
          left: 0px;
          ${respond.L.md} {
            opacity: ${isNotPartiallyTransparent?"1":"0.4"};
            background-position: ${direction} center;
            background-size: ${"center"==direction?"contain":"22rem"};
            left: ${"center"==direction?"0":"30px"};
          }
          ${respond.L.lg} {
            opacity: ${isNotPartiallyTransparent?"1":"0.4"};
            background-position: ${direction} center;
            background-size: ${"center"==direction?"contain":"26rem"};
            left: ${"center"==direction?"0":"40px"};
          }
        }
      `,children:(0,jsx_runtime.jsxs)(TextBox,{color:fontColor,direction,children:[(0,jsx_runtime.jsx)("span",{className:"chapter",children:label}),(0,jsx_runtime.jsx)("h1",{className:constants.tZ,children:title}),(0,jsx_runtime.jsx)("span",{children:subtitle})]})})};HeroSection.displayName="HeroSection";const components_HeroSection=HeroSection;try{HeroSection.displayName="HeroSection",HeroSection.__docgenInfo={description:"",displayName:"HeroSection",props:{subtitle:{defaultValue:null,description:"",name:"subtitle",required:!0,type:{name:"string"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"string"}},backgroundImage:{defaultValue:null,description:"",name:"backgroundImage",required:!1,type:{name:"string"}},fontColor:{defaultValue:null,description:"",name:"fontColor",required:!1,type:{name:"string"}},alignCenter:{defaultValue:null,description:"",name:"alignCenter",required:!0,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},useDefaultTextForLabel:{defaultValue:null,description:"",name:"useDefaultTextForLabel",required:!1,type:{name:"boolean"}},partiallyTransparent:{defaultValue:null,description:"",name:"partiallyTransparent",required:!1,type:{name:"boolean"}},backgroundRepeatX:{defaultValue:null,description:"",name:"backgroundRepeatX",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HeroSection.tsx#HeroSection"]={docgenInfo:HeroSection.__docgenInfo,name:"HeroSection",path:"src/components/HeroSection.tsx#HeroSection"})}catch(__react_docgen_typescript_loader_error){}const HeroSection_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport HeroSection from "../src/components/HeroSection";\nexport default ({\n  title: "Components/HeroSection",\n  component: HeroSection\n} as Meta);\nconst Component = HeroSection;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Primary: Story<ComponentProps> = Template.bind({});\nPrimary.args = {\n  children: "HeroSection",\n  title: "Introduction to Calculus"\n};\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{primary:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/HeroSection",component:components_HeroSection},Component=components_HeroSection,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={children:"HeroSection",title:"Introduction to Calculus"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/styles/respond.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>respondToOrLarger});const mediaQuery=minWidth=>`@media (min-width: ${minWidth}rem)`,respondToOrLarger={xxxs:mediaQuery(2),xxs:mediaQuery(25),xs:mediaQuery(30),sm:mediaQuery(36),md:mediaQuery(48),lg:mediaQuery(62),xl:mediaQuery(75),xxl:mediaQuery(87.5),xxxl:mediaQuery(100),xxxxl:mediaQuery(125),xxxxxl:mediaQuery(150)}},"./src/utils/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PQ:()=>HIDE_TEXT_IN_SYSTEM_TESTS_EVENT,dK:()=>MARGIN_BETWEEN_NAVBAR_AND_CONTENT,tT:()=>SHOW_TEXT_IN_SYSTEM_TESTS_EVENT,tZ:()=>INCLUDE_THIS_HEADING_IN_HEADINGS_NAVIGATION_CLASS});const HIDE_TEXT_IN_SYSTEM_TESTS_EVENT="hide-text-in-system-tests",SHOW_TEXT_IN_SYSTEM_TESTS_EVENT="show-text-in-system-tests",MARGIN_BETWEEN_NAVBAR_AND_CONTENT="2rem",INCLUDE_THIS_HEADING_IN_HEADINGS_NAVIGATION_CLASS="include-this-heading-in-headings-navigation"}}]);
//# sourceMappingURL=HeroSection-stories.1ba39eea.iframe.bundle.js.map