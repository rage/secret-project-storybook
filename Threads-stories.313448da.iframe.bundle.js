"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[4778],{"./stories/Threads.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Threads_stories});__webpack_require__("./node_modules/react/index.js");var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Wrapper=emotion_styled_browser_esm.A.div`
  background: #fff;
  width: 60%;
  height: auto;
  border: 2px solid rgba(205, 205, 205, 0.8);
  border-radius: 4px;
`,Header=emotion_styled_browser_esm.A.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 2rem 2rem;

  h2 {
    align-self: end;
  }
`,Tag=emotion_styled_browser_esm.A.div`
  background: #ececec;
  width: auto;
  padding: 1rem;
  text-transform: uppercase;
`,Content=emotion_styled_browser_esm.A.div`
  padding: 0 2rem;
`,Text=emotion_styled_browser_esm.A.p`
  font-size: 20px;
  line-height: 140%;
  font-weight: 500;
  padding-bottom: 3rem;
  border-bottom: 2px solid rgba(197, 197, 197, 0.8);
`,Footer=emotion_styled_browser_esm.A.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0 3rem 0;
  align-items: center;
`,Author=emotion_styled_browser_esm.A.div`
  display: flex;

  p {
    margin-right: 10px;
    color: #b2b2b2;
    span {
      color: #32bea6;
      margin: 0 10px;
    }
  }
`,ChatIcon=emotion_styled_browser_esm.A.div`
  display: flex;
`,PlaceholderAvatar=emotion_styled_browser_esm.A.div`
  background: #f3f3f3;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  margin-right: 10px;
`,Threads=()=>(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(Header,{children:[(0,jsx_runtime.jsx)("h2",{children:"New date for final exams"}),(0,jsx_runtime.jsx)(Tag,{children:"Computer science"})]}),(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsx)(Text,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}),(0,jsx_runtime.jsxs)(Footer,{children:[(0,jsx_runtime.jsxs)(Author,{children:[(0,jsx_runtime.jsx)(PlaceholderAvatar,{}),(0,jsx_runtime.jsxs)("p",{children:["Posted by ",(0,jsx_runtime.jsx)("span",{children:"Henrik Nygren"})]}),(0,jsx_runtime.jsx)("span",{children:"12hr ago"})]}),(0,jsx_runtime.jsxs)(ChatIcon,{children:[(0,jsx_runtime.jsx)(PlaceholderAvatar,{}),(0,jsx_runtime.jsx)("span",{children:"50+"})]})]})]})]});Threads.displayName="Threads";const Threads_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react"\nimport React from "react"\n\nimport Threads from "../src/components/Forum/Threads"\n\nexport default {\n  title: "Components/Forum/Threads",\n  component: Threads,\n} as Meta\n\nconst Component = Threads\n\ntype ComponentProps = React.ComponentProps<typeof Component>\n\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />\n\nexport const Primary: Story<ComponentProps> = Template.bind({})\nPrimary.args = {\n  children: "Threads",\n}\n',locationsMap:{primary:{startLoc:{col:40,line:16},endLoc:{col:89,line:16},startBody:{col:40,line:16},endBody:{col:89,line:16}}}}},title:"Components/Forum/Threads",component:Threads},Component=Threads,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={children:"Threads"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]}}]);
//# sourceMappingURL=Threads-stories.313448da.iframe.bundle.js.map