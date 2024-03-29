"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[8273],{"./stories/Quote.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BlockQuote:()=>BlockQuote,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Quote_stories});__webpack_require__("./node_modules/react/index.js");var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");const quote_namespaceObject=__webpack_require__.p+"static/media/quote.31ddc7f8.svg";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Justify=emotion_styled_browser_esm.A.div`
  display: grid;
  justify-content: center;
`,StyledImg=emotion_styled_browser_esm.A.div`
  position: absolute;
  width: 40px;
  top: 40px;
  left: 46px;
  opacity: 0.15;
`,ContentWrapper=emotion_styled_browser_esm.A.div`
  padding: 0.5rem 2rem;
  margin: 2.5rem 0;
  max-width: 650px;
  border-left: 7px solid #bfbfbf;
  background: rgba(0, 0, 0, 0.02);
  position: relative;
`,Text=emotion_styled_browser_esm.A.div`
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: left;
`,Quote=({content})=>(0,jsx_runtime.jsx)(Justify,{children:(0,jsx_runtime.jsxs)(ContentWrapper,{children:[(0,jsx_runtime.jsx)(StyledImg,{children:(0,jsx_runtime.jsx)(quote_namespaceObject,{width:"30px",height:"20px",role:"presentation",alt:""})}),(0,jsx_runtime.jsxs)(Text,{children:[" ",content," "]})]})});Quote.displayName="Quote";const components_Quote=Quote;try{Quote.displayName="Quote",Quote.__docgenInfo={description:"",displayName:"Quote",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"pullquote"'},{value:'"blockquote"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Quote.tsx#Quote"]={docgenInfo:Quote.__docgenInfo,name:"Quote",path:"src/components/Quote.tsx#Quote"})}catch(__react_docgen_typescript_loader_error){}const Quote_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react"\nimport React from "react"\n\nimport Quote from "../src/components/Quote"\n\nexport default {\n  title: "Components/Quote",\n  component: Quote,\n} as Meta\n\nconst Component = Quote\n\ntype ComponentProps = React.ComponentProps<typeof Component>\n\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />\n\nexport const BlockQuote: Story<ComponentProps> = Template.bind({})\nBlockQuote.args = {\n  children: "Quote",\n  variant: "blockquote",\n  content:\n    "Just like a pull quote blockquote (actually block quotations) are also set off from the main text as a distinct paragraph or block. However, they refer to some external citation which isn’t already mentioned in the article. Block quotations are usually placed within the reader’s flow",\n}\n\n/* export const PullQuote: Story<ComponentProps> = Template.bind({})\nPullQuote.args = {\n  children: "Quote",\n  variant: "pullquote",\n}\n */\n',locationsMap:{"block-quote":{startLoc:{col:40,line:16},endLoc:{col:89,line:16},startBody:{col:40,line:16},endBody:{col:89,line:16}}}}},title:"Components/Quote",component:components_Quote},Component=components_Quote,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const BlockQuote=Template.bind({});BlockQuote.args={children:"Quote",variant:"blockquote",content:"Just like a pull quote blockquote (actually block quotations) are also set off from the main text as a distinct paragraph or block. However, they refer to some external citation which isn’t already mentioned in the article. Block quotations are usually placed within the reader’s flow"},BlockQuote.parameters={...BlockQuote.parameters,docs:{...BlockQuote.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...BlockQuote.parameters?.docs?.source}}};const __namedExportsOrder=["BlockQuote"]}}]);
//# sourceMappingURL=Quote-stories.8c1095a3.iframe.bundle.js.map