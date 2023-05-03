"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[4693],{"./stories/Breadcrumbs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Breadcrumbs_stories});__webpack_require__("./node_modules/react/index.js");var emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledBreadcrumb=emotion_styled_browser_esm.Z.div`
  font-size: 1rem;
  margin: 0;

  .breadcrumb {
    font-size: 16px;
    .list {
      margin: 0.5rem 0;
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .group {
      display: inline-flex;
      align-items: center;
    }

    .arrow {
      margin-left: 0.75rem;
      color: #333;
    }
  }
`,wrapper=emotion_css_esm.iv`
  padding: 1rem 2rem;
  color: #fff;
  border-radius: 2px;

  &:nth-of-type(n + 2) {
    margin-top: 2.5rem;
  }
`,Breadcrumbs_link=emotion_css_esm.iv`
  color: #696e77;
  text-decoration: none !important;

  &:hover {
    color: #1a2333;
  }
`,breadCrumbText=emotion_css_esm.iv`
  color: #1a2333;
  font-size: 16px;
`,Breadcrumbs=({pieces})=>{const{t}=(0,es.$G)();return(0,jsx_runtime.jsx)(StyledBreadcrumb,{children:(0,jsx_runtime.jsx)("div",{className:(0,emotion_css_esm.cx)(wrapper),children:(0,jsx_runtime.jsx)("nav",{className:"breadcrumb","aria-label":t("breadcrumb"),children:(0,jsx_runtime.jsx)("ol",{className:"list",children:pieces.map(((piece,index)=>index===pieces.length-1?(0,jsx_runtime.jsx)("li",{className:"group",children:(0,jsx_runtime.jsx)("span",{className:(0,emotion_css_esm.cx)(breadCrumbText),"aria-current":"page",children:piece.text})},piece.url):(0,jsx_runtime.jsxs)("li",{className:"group",children:[piece.externalLink?(0,jsx_runtime.jsx)("a",{href:piece.url,className:(0,emotion_css_esm.cx)(breadCrumbText,Breadcrumbs_link),children:piece.text}):(0,jsx_runtime.jsx)(link_default(),{href:piece.url,className:(0,emotion_css_esm.cx)(breadCrumbText,Breadcrumbs_link),children:piece.text}),(0,jsx_runtime.jsx)("span",{className:"arrow","aria-hidden":"true",children:"›"})]},piece.url)))})})})})};Breadcrumbs.displayName="Breadcrumbs";const components_Breadcrumbs=Breadcrumbs;try{Breadcrumbs.displayName="Breadcrumbs",Breadcrumbs.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{pieces:{defaultValue:null,description:"",name:"pieces",required:!0,type:{name:"BreadcrumbPiece[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Breadcrumbs.tsx#Breadcrumbs"]={docgenInfo:Breadcrumbs.__docgenInfo,name:"Breadcrumbs",path:"src/components/Breadcrumbs.tsx#Breadcrumbs"})}catch(__react_docgen_typescript_loader_error){}const Component=components_Breadcrumbs,Breadcrumbs_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport Breadcrumbs from "../src/components/Breadcrumbs";\nconst Component = Breadcrumbs;\nexport default ({\n  title: "Components/Navigation/Breadcrumbs",\n  component: Component\n} as Meta);\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Default: Story<ComponentProps> = Template.bind({});\nDefault.args = {\n  pieces: [{\n    text: "Home",\n    url: "/"\n  }, {\n    text: "Courses",\n    url: "/courses"\n  }, {\n    text: "Introduction to Everything",\n    url: "/courses/x"\n  }, {\n    text: "Stats",\n    url: "/courses/x/stats"\n  }]\n};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{default:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/Navigation/Breadcrumbs",component:Component},Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={pieces:[{text:"Home",url:"/"},{text:"Courses",url:"/courses"},{text:"Introduction to Everything",url:"/courses/x"},{text:"Stats",url:"/courses/x/stats"}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);
//# sourceMappingURL=Breadcrumbs-stories.f8168968.iframe.bundle.js.map