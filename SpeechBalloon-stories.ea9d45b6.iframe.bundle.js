"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[643],{"./stories/SpeechBalloon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Positioned:()=>Positioned,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SpeechBalloon_stories});var emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),styles=__webpack_require__("./src/styles/index.ts"),accessibility=__webpack_require__("./src/utils/accessibility.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SpeechBalloon=react.forwardRef((({children,className,onClick},ref)=>{const bg=styles.wE.colors.gray[100],outerCss=emotion_css_esm.iv`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: max-content;
    `;return(0,jsx_runtime.jsxs)("div",{ref,role:"button",tabIndex:0,onKeyDown:e=>onClick&&(0,accessibility.L)(e,onClick),onClick,className:`${outerCss} ${className}`,children:[(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.iv`
            background: ${bg};
            width: max-content;
            padding: 1rem;
          `,children}),(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.iv`
            width: ${"1rem"};
            height: ${"1rem"};
            position: relative;
            top: calc(-${"1rem"} / 2);
            background: ${bg};
            transform: rotate(45deg);
          `})]})}));SpeechBalloon.displayName="SpeechBalloon";const components_SpeechBalloon=SpeechBalloon;try{SpeechBalloon.displayName="SpeechBalloon",SpeechBalloon.__docgenInfo={description:"",displayName:"SpeechBalloon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SpeechBalloon.tsx#SpeechBalloon"]={docgenInfo:SpeechBalloon.__docgenInfo,name:"SpeechBalloon",path:"src/components/SpeechBalloon.tsx#SpeechBalloon"})}catch(__react_docgen_typescript_loader_error){}const SpeechBalloon_stories={parameters:{storySource:{source:'\nimport { css } from "@emotion/css";\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport SpeechBalloon from "../src/components/SpeechBalloon";\nexport default ({\n  title: "Components/SpeechBalloon",\n  component: SpeechBalloon\n} as Meta);\nconst Component = SpeechBalloon;\ntype ComponentProps = React.ComponentProps<typeof Component>;\n\n// @ts-ignore: seems to work\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Primary: Story<ComponentProps> = Template.bind({});\nPrimary.args = {\n  children: "SpeechBalloon"\n};\nexport const Positioned: Story<ComponentProps> = Template.bind({});\nPositioned.args = {\n  children: "A positioned SpeechBalloon",\n  className: css`\n    position: absolute;\n    right: 0;\n    top: 0;\n  `\n};\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};\nPositioned.parameters = {\n  ...Positioned.parameters,\n  docs: {\n    ...Positioned.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Positioned.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{primary:{startLoc:{col:40,line:14},endLoc:{col:89,line:14},startBody:{col:40,line:14},endBody:{col:89,line:14}},positioned:{startLoc:{col:40,line:14},endLoc:{col:89,line:14},startBody:{col:40,line:14},endBody:{col:89,line:14}}}}},title:"Components/SpeechBalloon",component:components_SpeechBalloon},Component=components_SpeechBalloon,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={children:"SpeechBalloon"};const Positioned=Template.bind({});Positioned.args={children:"A positioned SpeechBalloon",className:emotion_css_esm.iv`
    position: absolute;
    right: 0;
    top: 0;
  `},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Primary.parameters?.docs?.source}}},Positioned.parameters={...Positioned.parameters,docs:{...Positioned.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Positioned.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Positioned"]},"./src/utils/accessibility.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function runCallbackIfEnterPressed(event,callback){"Enter"===event.key&&callback()}__webpack_require__.d(__webpack_exports__,{L:()=>runCallbackIfEnterPressed})}}]);
//# sourceMappingURL=SpeechBalloon-stories.ea9d45b6.iframe.bundle.js.map