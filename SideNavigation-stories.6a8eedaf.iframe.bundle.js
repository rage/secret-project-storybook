"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[6496],{"./stories/SideNavigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SideNavigation_stories});var react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),styles=__webpack_require__("./src/styles/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const arr=[{text:"Home",path:"/"},{text:"Your threads",path:"/"},{text:"Saved",path:"/"}],currentCourse=[{id:"001",text:"Computer science",path:"/"},{id:"002",text:"Biology",path:"/"},{id:"003",text:"Chemistry",path:"/",items:[{text:"Subtopic",path:"/"},{text:"Subtopic threads",path:"/"}]},{id:"004",text:"Economics",path:"/",items:[{text:"Subtopic I",path:"/"},{text:"Subtopic threads IV",path:"/"}]},{id:"005",text:"Physics",path:"/"},{id:"006",text:"Computer science II",path:"/"}],Wrapper=emotion_styled_browser_esm.Z.div`
  display: block;
  position: sticky;
  top: 24px;
  max-width: 450px;
  height: 100vh;
  overflow: auto;
  border-right: 2px solid #cfcfcf;
  padding-left: 2rem;
  background: #f8f8f9;

  h2 {
    color: #989ca3;
    font-size: 30px;
    font-weight: 400;
    padding-left: 1rem;
  }

  ol {
    text-decoration: none;
    list-style: none;
    padding-left: 0;

    li {
      display: flex;
      color: #767b85;
      margin-bottom: 0.8rem;
      margin-right: 4rem;
      padding: 0.8rem 0;
      align-items: center;
      padding-left: 1rem;
      position: relative;

      &:hover {
        background: #fff;

        &:before {
          content: "";
          background: #44827e;
          width: 4px;
          height: 20px;
          position: absolute;
          border-radius: 1px;
          left: 0;
        }
      }

      a {
        text-decoration: none;
        color: #767b85;
        font-weight: 400;
        font-size: 22px;
        font-family: ${styles.$O};
        line-height: 1;
        align-self: center;
      }
    }
  }

  ol:first-of-type {
    margin-bottom: 4rem;
  }
  ol:last-of-type {
    margin-bottom: 3rem;
  }
`,PlaceholderAvatar=emotion_styled_browser_esm.Z.div`
  background: #dddee0;
  border-radius: 100%;
  height: 34px;
  width: 34px;
  margin-right: 15px;
`,StyledButton=emotion_styled_browser_esm.Z.button`
  display: flex;
  border: none;
  justify-content: center;
  padding: 1rem 2rem;
  margin-left: 1rem;
  font-size: 18px;
  color: #313947;
  width: 21rem;
`,ListItem=emotion_styled_browser_esm.Z.li`
  margin-left: 2rem;
`,SideNavigation=()=>{const[active,setActive]=(0,react.useState)();return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)("ol",{children:arr.map((({text,path})=>(0,jsx_runtime.jsxs)("li",{children:[(0,jsx_runtime.jsx)(PlaceholderAvatar,{}),(0,jsx_runtime.jsx)("a",{href:path,children:text})]},text)))}),(0,jsx_runtime.jsx)("h2",{children:"Current course"}),(0,jsx_runtime.jsx)("ol",{children:currentCourse.map((({text,items,id,path},index)=>(0,jsx_runtime.jsxs)("div",{onClick:()=>{setActive(active!==id&&items?id:"")},onKeyDown:()=>{setActive(active!==id&&items?id:"")},role:"button",tabIndex:index,children:[(0,jsx_runtime.jsxs)("li",{children:[(0,jsx_runtime.jsx)(PlaceholderAvatar,{}),(0,jsx_runtime.jsx)("a",{href:path,children:text})]}),active===id&&items?.map((({text,path})=>(0,jsx_runtime.jsxs)(ListItem,{children:[(0,jsx_runtime.jsx)(PlaceholderAvatar,{}),(0,jsx_runtime.jsx)("a",{href:path,children:text})]},text)))]},text)))}),(0,jsx_runtime.jsx)(StyledButton,{children:" Join new course"})]})};SideNavigation.displayName="SideNavigation";const SideNavigation_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport SideNavigation from "../src/components/Forum/SideNavigation";\nexport default ({\n  title: "Components/Forum/SideNavigation",\n  component: SideNavigation\n} as Meta);\nconst Component = SideNavigation;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Primary: Story<ComponentProps> = Template.bind({});\nPrimary.args = {\n  children: "SideNavigation"\n};\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{primary:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/Forum/SideNavigation",component:SideNavigation},Component=SideNavigation,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={children:"SideNavigation"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]}}]);
//# sourceMappingURL=SideNavigation-stories.6a8eedaf.iframe.bundle.js.map