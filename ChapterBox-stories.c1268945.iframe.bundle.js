"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[3223],{"./stories/ChapterBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Selected:()=>Selected,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ChapterBox_stories});__webpack_require__("./node_modules/react/index.js");var emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link);const blackArrow_namespaceObject=__webpack_require__.p+"static/media/blackArrow.5b9503bd.svg";var styles=__webpack_require__("./src/styles/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Wrapper=emotion_styled_browser_esm.c.div`
  border-radius: 10px;
  position: relative;
  width: 100%;
`,PageNumberBox=emotion_styled_browser_esm.c.div`
  position: relative;
  display: inline-block;
  opacity: 0.8;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${styles.sn.colors.blue[200]};
  margin-right: 8px;

  span {
    color: ${styles.sn.colors.gray[700]};
    font-family: ${styles.Q$};
    line-height: 1;
    font-size: 12px !important;
    text-align: center;
    font-weight: 600;
  }
`,ChapterParts=emotion_styled_browser_esm.c.div`
  margin-left: 0em;
  padding: 0.8em 1em;
  list-style-type: none;
  color: rgb(17, 24, 36);
  text-decoration: none;
  border-radius: 2px;
  margin-bottom: 0.4em;
  background: rgb(242, 245, 247);
  display: flex;
  align-items: center;

  ${({selected})=>selected&&"\n    background-color: #D8D8D8;\n    font-weight: 500;\n\n    :hover {\n      background-color: rgb(235, 239, 242) !important;\n    }\n  "}
  :hover {
    background-color: rgb(235, 239, 242);
  }

  svg {
    position: absolute;
    right: 30px;
    top: 40%;
    fill: ${styles.sn.colors.gray[300]};
  }

  :hover svg {
    fill: ${styles.sn.colors.gray[600]};
  }

  span {
    font-family: ${styles.KU};
    font-weight: 500;
    vertical-align: top;
    font-size: clamp(16px, 1.2vw, 20px);
    display: inline-block;
    width: 80%;
    margin: 0.4em 0 0.4em 0.2em;
  }
`,PagesInChapterBox=props=>(0,jsx_runtime.jsx)(Wrapper,{children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(link_default(),{href:props.url,className:emotion_css_esm.gV`
            color: #1c3b40;
            box-shadow: none;
            text-decoration: none;
            &:focus-visible {
              outline: 2px solid ${styles.sn.colors.green[500]};
              outline-offset: 2px;
            }

            :hover {
              .chapter-part-arrow {
                visibility: visible;
              }
            }
          `,children:(0,jsx_runtime.jsxs)(ChapterParts,{...props,children:[(0,jsx_runtime.jsx)(PageNumberBox,{children:(0,jsx_runtime.jsx)("span",{children:props.chapterIndex})}),(0,jsx_runtime.jsx)("span",{children:props.chapterTitle}),(0,jsx_runtime.jsx)(blackArrow_namespaceObject,{className:"page-link-arrow",role:"presentation",alt:"",width:"15"})]})})})});PagesInChapterBox.displayName="PagesInChapterBox";const components_PagesInChapterBox=PagesInChapterBox;try{PagesInChapterBox.displayName="PagesInChapterBox",PagesInChapterBox.__docgenInfo={description:"",displayName:"PagesInChapterBox",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"link"'},{value:'"text"'},{value:'"readOnly"'}]}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},chapterIndex:{defaultValue:null,description:"",name:"chapterIndex",required:!0,type:{name:"number"}},chapterTitle:{defaultValue:null,description:"",name:"chapterTitle",required:!0,type:{name:"string"}},url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PagesInChapterBox.tsx#PagesInChapterBox"]={docgenInfo:PagesInChapterBox.__docgenInfo,name:"PagesInChapterBox",path:"src/components/PagesInChapterBox.tsx#PagesInChapterBox"})}catch(__react_docgen_typescript_loader_error){}const ChapterBox_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react"\nimport React from "react"\n\nimport PagesInChapterBox from "../src/components/PagesInChapterBox"\n\nexport default {\n  title: "Components/ChapterBox",\n  component: PagesInChapterBox,\n} as Meta\n\nconst Component = PagesInChapterBox\n\ntype ComponentProps = React.ComponentProps<typeof Component>\n\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />\n\nexport const Selected: Story<ComponentProps> = Template.bind({})\nSelected.args = {\n  children: "ChapterBox",\n  chapterIndex: 1,\n  chapterTitle: "Introduction to everything",\n  selected: true,\n}\n',locationsMap:{selected:{startLoc:{col:40,line:16},endLoc:{col:89,line:16},startBody:{col:40,line:16},endBody:{col:89,line:16}}}}},title:"Components/ChapterBox",component:components_PagesInChapterBox},Component=components_PagesInChapterBox,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Selected=Template.bind({});Selected.args={children:"ChapterBox",chapterIndex:1,chapterTitle:"Introduction to everything",selected:!0},Selected.parameters={...Selected.parameters,docs:{...Selected.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Selected.parameters?.docs?.source}}};const __namedExportsOrder=["Selected"]}}]);
//# sourceMappingURL=ChapterBox-stories.c1268945.iframe.bundle.js.map