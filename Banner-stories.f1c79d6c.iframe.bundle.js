"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[4772],{"./stories/Banner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LinkBanner:()=>LinkBanner,ReadOnlyBanner:()=>Banner_stories_ReadOnlyBanner,TextBanner:()=>TextBanner,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Banner_stories});__webpack_require__("./node_modules/react/index.js");var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");const next_namespaceObject=__webpack_require__.p+"static/media/next.b8c5d100.svg";var respond=__webpack_require__("./src/styles/respond.ts"),styles=__webpack_require__("./src/styles/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BannerWrapper=emotion_styled_browser_esm.Z.div`
  background: ${styles.wE.colors.clear[100]};
  width: 100%;
  position: relative;
  padding: 3rem 2rem;
  margin: 0 auto;
  display: block;
`,Content=emotion_styled_browser_esm.Z.div`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.4;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`,Text=emotion_styled_browser_esm.Z.div`
  text-align: center;

  div {
    color: #3b4754;
  }
`,Quote=props=>(0,jsx_runtime.jsx)(BannerWrapper,{...props,children:(0,jsx_runtime.jsx)(Content,{children:(0,jsx_runtime.jsx)(Text,{children:(0,jsx_runtime.jsx)("div",{children:props.children})})})});Quote.displayName="Quote";const Banner_ReadOnlyBanner=Quote;try{ReadOnlyBanner.displayName="ReadOnlyBanner",ReadOnlyBanner.__docgenInfo={description:"",displayName:"ReadOnlyBanner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"link"'},{value:'"text"'},{value:'"read-only"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Banner/ReadOnlyBanner.tsx#ReadOnlyBanner"]={docgenInfo:ReadOnlyBanner.__docgenInfo,name:"ReadOnlyBanner",path:"src/components/Banner/ReadOnlyBanner.tsx#ReadOnlyBanner"})}catch(__react_docgen_typescript_loader_error){}const Banner_BannerWrapper=emotion_styled_browser_esm.Z.div`
  background: rgba(212, 212, 217, 1);
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: block;

  ${respond.L.sm} {
    max-width: 1984px;
  }

  &:before {
    content: "+";
    color: black;
    position: absolute;
    font-size: 2.4rem;
    line-height: 0;
    margin-top: 0.75rem;
    top: 18px;
    right: 2rem;
    font-weight: 200;
    transform-origin: center;
    transition: all 200ms linear;
    transform: rotate(45deg);

    ${respond.L.sm} {
      top: 30px;
      right: 4rem;
    }
  }
`,Banner_Content=emotion_styled_browser_esm.Z.div`
  padding: 3.5rem 1.4rem 2rem 1.4rem;
  max-width: 1760px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;

  ${respond.L.sm} {
    padding: 2rem 4rem 2.5rem 4rem;
    grid-template-columns: repeat(12, 1fr);
  }

  a {
    text-decoration: none;
    max-width: 100%;
    cursor: pointer;
    display: flex;
    height: 1rem;
    line-height: 1rem;
    margin-top: 1rem;

    span {
      display: flex;
      align-items: center;
      margin-left: 0.5rem;
    }
  }
`,Banner_Text=emotion_styled_browser_esm.Z.div`
  grid-column: span 8 / auto;
`,Banner=({children,variant,linkHref,linkText},props)=>"readOnly"===variant?(0,jsx_runtime.jsx)(Banner_ReadOnlyBanner,{...props,children}):(0,jsx_runtime.jsx)(Banner_BannerWrapper,{...props,children:(0,jsx_runtime.jsx)(Banner_Content,{children:(0,jsx_runtime.jsxs)(Banner_Text,{children:[(0,jsx_runtime.jsx)("div",{children}),"link"===variant&&(0,jsx_runtime.jsxs)("a",{href:linkHref,children:[(0,jsx_runtime.jsx)("div",{children:linkText}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsx)(next_namespaceObject,{role:"presentation",alt:"",width:"12px"})})]})]})})});Banner.displayName="Banner";const Banner_Banner=Banner;try{Banner.displayName="Banner",Banner.__docgenInfo={description:"",displayName:"Banner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"link"'},{value:'"text"'},{value:'"readOnly"'}]}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Banner/Banner.tsx#Banner"]={docgenInfo:Banner.__docgenInfo,name:"Banner",path:"src/components/Banner/Banner.tsx#Banner"})}catch(__react_docgen_typescript_loader_error){}const Banner_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport Banner from "../src/components/Banner/Banner";\nexport default ({\n  title: "Components/Banner",\n  component: Banner\n} as Meta);\nconst Component = Banner;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const TextBanner: Story<ComponentProps> = Template.bind({});\nTextBanner.args = {\n  children: <>\n      Just like a pull quote blockquote (actually block quotations) are also set off from the main\n      text as a distinct paragraph or block. However, they refer to some external citation which\n      isn’t already mentioned in the article. Block quotations are usually placed within the\n      reader’s flow\n    </>,\n  variant: "text"\n};\nexport const LinkBanner: Story<ComponentProps> = Template.bind({});\nLinkBanner.args = {\n  children: <>\n      Just like a pull quote blockquote (actually block quotations) are also set off from the main\n      text as a distinct paragraph or block. However, they refer to some external citation which\n      isn’t already mentioned in the article. Block quotations are usually placed within the\n      reader’s flow\n    </>,\n  variant: "link",\n  linkText: "Link text"\n};\nexport const ReadOnlyBanner: Story<ComponentProps> = Template.bind({});\nReadOnlyBanner.args = {\n  children: <>\n      Just like a pull quote blockquote (actually block quotations) are also set off from the main\n      text as a distinct paragraph or block. However, they refer to some external citation which\n      isn’t already mentioned in the article. Block quotations are usually placed within the\n      reader’s flow\n    </>,\n  variant: "readOnly"\n};\nTextBanner.parameters = {\n  ...TextBanner.parameters,\n  docs: {\n    ...TextBanner.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...TextBanner.parameters?.docs?.source\n    }\n  }\n};\nLinkBanner.parameters = {\n  ...LinkBanner.parameters,\n  docs: {\n    ...LinkBanner.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...LinkBanner.parameters?.docs?.source\n    }\n  }\n};\nReadOnlyBanner.parameters = {\n  ...ReadOnlyBanner.parameters,\n  docs: {\n    ...ReadOnlyBanner.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...ReadOnlyBanner.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{"text-banner":{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}},"link-banner":{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}},"read-only-banner":{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/Banner",component:Banner_Banner},Component=Banner_Banner,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const TextBanner=Template.bind({});TextBanner.args={children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Just like a pull quote blockquote (actually block quotations) are also set off from the main text as a distinct paragraph or block. However, they refer to some external citation which isn’t already mentioned in the article. Block quotations are usually placed within the reader’s flow"}),variant:"text"};const LinkBanner=Template.bind({});LinkBanner.args={children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Just like a pull quote blockquote (actually block quotations) are also set off from the main text as a distinct paragraph or block. However, they refer to some external citation which isn’t already mentioned in the article. Block quotations are usually placed within the reader’s flow"}),variant:"link",linkText:"Link text"};const Banner_stories_ReadOnlyBanner=Template.bind({});Banner_stories_ReadOnlyBanner.args={children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Just like a pull quote blockquote (actually block quotations) are also set off from the main text as a distinct paragraph or block. However, they refer to some external citation which isn’t already mentioned in the article. Block quotations are usually placed within the reader’s flow"}),variant:"readOnly"},TextBanner.parameters={...TextBanner.parameters,docs:{...TextBanner.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...TextBanner.parameters?.docs?.source}}},LinkBanner.parameters={...LinkBanner.parameters,docs:{...LinkBanner.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...LinkBanner.parameters?.docs?.source}}},Banner_stories_ReadOnlyBanner.parameters={...Banner_stories_ReadOnlyBanner.parameters,docs:{...Banner_stories_ReadOnlyBanner.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Banner_stories_ReadOnlyBanner.parameters?.docs?.source}}};const __namedExportsOrder=["TextBanner","LinkBanner","ReadOnlyBanner"]},"./src/styles/respond.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>respondToOrLarger});const mediaQuery=minWidth=>`@media (min-width: ${minWidth}rem)`,respondToOrLarger={xxxs:mediaQuery(2),xxs:mediaQuery(25),xs:mediaQuery(30),sm:mediaQuery(36),md:mediaQuery(48),lg:mediaQuery(62),xl:mediaQuery(75),xxl:mediaQuery(87.5),xxxl:mediaQuery(100),xxxxl:mediaQuery(125),xxxxxl:mediaQuery(150)}}}]);
//# sourceMappingURL=Banner-stories.f1c79d6c.iframe.bundle.js.map