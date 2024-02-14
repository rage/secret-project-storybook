"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[9424],{"./stories/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Detail:()=>Detail,Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordion_stories});__webpack_require__("./node_modules/react/index.js");var emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),styles=__webpack_require__("./src/styles/index.ts"),respond=__webpack_require__("./src/styles/respond.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const openAnimation=emotion_css_esm.xZ`
0% { opacity: 0; }
100% { opacity: 1; }
`,slideDown=emotion_css_esm.xZ`
from { opacity: 0; height: 0; padding: 0;}
to { opacity: 1; height: 100%; padding: 10px;}
`,TextWrapper=emotion_styled_browser_esm.c.div`
  padding: 0;
  margin: 0;
  font-family: ${styles.qY};

  details {
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }

  details[open] summary ~ * {
    animation: ${openAnimation} 0.3s ease-in-out;
    color: ${styles.sn.colors.gray[700]};
  }

  details[open] > div {
    animation-name: ${slideDown};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    padding: 1rem 1rem 1rem 2rem;
  }

  details summary {
    padding: 1rem;
    position: relative;
    cursor: pointer;
    font-weight: medium;
    list-style: none;
    color: ${styles.sn.colors.gray[700]};
    outline: 0;
    background: ${styles.sn.colors.clear[100]};
    ${respond.e.sm} {
      padding: 1rem 1rem 1rem 2rem;
    }
  }

  details summary::-webkit-details-marker {
    display: none;
  }

  details[open] > summary {
    color: ${styles.sn.colors.gray[700]};
  }

  details summary:after {
    content: "+";
    position: absolute;
    font-size: 2.4rem;
    color: ${styles.sn.colors.gray[700]};
    line-height: 0;
    margin-top: 0.75rem;
    top: 14px;
    right: 4%;
    font-weight: 200;
    transform-origin: center;
    transition: all 200ms linear;
  }
  details[open] summary:after {
    transform: rotate(45deg);
    font-size: 2.4rem;
  }
  details[open] summary {
    font-weight: 600;
    opacity: 0.9;
  }

  ul {
    padding: 14px;
    margin: 0;

    ${respond.e.sm} {
      background: #f9f9f9;
      padding: 25px 35px 30px 35px;
    }
  }

  ul li {
    font-size: 1.1rem;
    margin: 0 0 0.2rem;
    line-height: 1.7;
    list-style: none;
  }
`,DetailAccordion=props=>props.children?(0,jsx_runtime.jsx)(TextWrapper,{className:props.className,children:props.children}):(0,jsx_runtime.jsx)("div",{className:props.className,children:(0,jsx_runtime.jsx)(TextWrapper,{children:(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:"This is a heading:"}),(0,jsx_runtime.jsx)("ul",{children:(0,jsx_runtime.jsx)("li",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown\nprinter took a galley of type and scrambled it to make a type specimen book. It has\nsurvived not only five centuries, but also the leap into electronic typesetting,\nremaining essentially unchanged. It was popularised in the 1960s with the release of\nLetraset sheets containing Lorem Ipsum passages, and more recently with desktop\npublishing software like Aldus PageMaker including versions of Lorem Ipsum"})})]})})});DetailAccordion.displayName="DetailAccordion";const Accordion_DetailAccordion=DetailAccordion;try{DetailAccordion.displayName="DetailAccordion",DetailAccordion.__docgenInfo={description:"",displayName:"DetailAccordion",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/DetailAccordion.tsx#DetailAccordion"]={docgenInfo:DetailAccordion.__docgenInfo,name:"DetailAccordion",path:"src/components/Accordion/DetailAccordion.tsx#DetailAccordion"})}catch(__react_docgen_typescript_loader_error){}const Accordion_openAnimation=emotion_css_esm.xZ`
0% { opacity: 0; }
100% { opacity: 1; }
`,Accordion_slideDown=emotion_css_esm.xZ`
from { opacity: 0; height: 0; padding: 0;}
to { opacity: 1; height: 100%; padding: 10px;}
`,Accordion_TextWrapper=emotion_styled_browser_esm.c.div`
  padding: 0;
  margin: 0;

  details[open] summary ~ * {
    animation: ${Accordion_openAnimation} 0.3s ease-in-out;
    color: ${styles.sn.colors.gray[700]};
  }

  details[open] > div {
    animation-name: ${Accordion_slideDown};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  details summary {
    padding: 1rem 0;
    border-bottom: 1px solid ${styles.sn.colors.gray[700]};
    position: relative;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: medium;
    list-style: none;
    outline: 0;
    color: ${styles.sn.colors.gray[700]};
  }

  details summary::-webkit-details-marker {
    display: none;
  }

  details[open] > summary {
    color: #1c1c1c;
  }

  details summary:after {
    content: "+";
    color: black;
    position: absolute;
    font-size: 1.75rem;
    line-height: 0;
    margin-top: 0.75rem;
    right: 0;
    font-weight: 200;
    transform-origin: center;
    transition: all 200ms linear;
  }
  details[open] summary:after {
    transform: rotate(45deg);
    font-size: 2rem;
  }
  details[open] summary {
    font-weight: 600;
    opacity: 0.9;
  }

  ul {
    padding: 0 0 0 0.6rem;
  }

  details ul li {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0 0 0.2rem;
    padding-left: 8px;
    list-style-position: outside;
  }

  ul li::marker {
    content: "☉";
    text-align: center;
    margin-left: 2rem !important;
  }
`,Accordion=props=>"detail"===props.variant?(0,jsx_runtime.jsx)(Accordion_DetailAccordion,{...props}):props.children?(0,jsx_runtime.jsx)(Accordion_TextWrapper,{className:props.className,children:props.children}):(0,jsx_runtime.jsx)("div",{className:props.className,children:(0,jsx_runtime.jsxs)(Accordion_TextWrapper,{children:[(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:"This is a heading:"}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"This is a list item"}),(0,jsx_runtime.jsx)("li",{children:"This is a list item"}),(0,jsx_runtime.jsx)("li",{children:"This is a list item"}),(0,jsx_runtime.jsx)("li",{children:"This is a list item"})]})]}),(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:"This is a heading:"}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"This is a list item"}),(0,jsx_runtime.jsx)("li",{children:"This is a list item"}),(0,jsx_runtime.jsx)("li",{children:"This is a list item"}),(0,jsx_runtime.jsx)("li",{children:"This is a list item"})]})]}),(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:"This is a heading:"}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"This is a list item"}),(0,jsx_runtime.jsx)("li",{children:"This is a list item"}),(0,jsx_runtime.jsx)("li",{children:"This is a list item"}),(0,jsx_runtime.jsx)("li",{children:"This is a list item"})]})]})]})});Accordion.displayName="Accordion";const components_Accordion=Accordion;try{Accordion.displayName="Accordion",Accordion.__docgenInfo={description:"",displayName:"Accordion",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"simple"'},{value:'"detail"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/index.tsx#Accordion"]={docgenInfo:Accordion.__docgenInfo,name:"Accordion",path:"src/components/Accordion/index.tsx#Accordion"})}catch(__react_docgen_typescript_loader_error){}const Accordion_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react"\nimport React from "react"\n\nimport Accordion from "../src/components/Accordion/index"\n\nexport default {\n  component: Accordion,\n  title: "Components/Accordion",\n} as Meta\n\n/* export const SimpleAccordion: React.VFC<Record<string, unknown>> = () => <Accordion /> */\n\nconst Component = Accordion\n\ntype ComponentProps = React.ComponentProps<typeof Component>\n\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />\n\nexport const Simple: Story<ComponentProps> = Template.bind({})\nSimple.args = {\n  children: "Accordion",\n  variant: "simple",\n}\n\nexport const Detail: Story<ComponentProps> = Template.bind({})\nDetail.args = {\n  children: "Accordion",\n  variant: "detail",\n}\n',locationsMap:{simple:{startLoc:{col:40,line:18},endLoc:{col:89,line:18},startBody:{col:40,line:18},endBody:{col:89,line:18}},detail:{startLoc:{col:40,line:18},endLoc:{col:89,line:18},startBody:{col:40,line:18},endBody:{col:89,line:18}}}}},component:components_Accordion,title:"Components/Accordion"},Component=components_Accordion,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Simple=Template.bind({});Simple.args={children:"Accordion",variant:"simple"};const Detail=Template.bind({});Detail.args={children:"Accordion",variant:"detail"},Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Simple.parameters?.docs?.source}}},Detail.parameters={...Detail.parameters,docs:{...Detail.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Detail.parameters?.docs?.source}}};const __namedExportsOrder=["Simple","Detail"]},"./src/styles/respond.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>respondToOrLarger});const mediaQuery=minWidth=>`@media (min-width: ${minWidth}rem)`,respondToOrLarger={xxxs:mediaQuery(2),xxs:mediaQuery(25),xs:mediaQuery(30),sm:mediaQuery(36),md:mediaQuery(48),lg:mediaQuery(62),xl:mediaQuery(75),xxl:mediaQuery(87.5),xxxl:mediaQuery(100),xxxxl:mediaQuery(125),xxxxxl:mediaQuery(150)}}}]);
//# sourceMappingURL=Accordion-stories.165304e0.iframe.bundle.js.map