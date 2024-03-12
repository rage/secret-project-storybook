"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[2728],{"./stories/BreakFromCentered.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithSidebarOnLeft:()=>WithSidebarOnLeft,WithSidebarOnRight:()=>WithSidebarOnRight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BreakFromCentered_stories});var emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const BreakFromCentered=props=>{let scrollbarWidth=0;return"undefined"!=typeof window&&(scrollbarWidth=Math.abs(window.innerWidth-document.documentElement.clientWidth)/2),props.sidebar?props.sidebarThreshold?(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: calc(-50vw + ${props.sidebarWidth} / 2);
            margin-right: calc(-50vw + ${props.sidebarWidth} / 2);
            width: calc(100vw - ${props.sidebarWidth} - ${scrollbarWidth}px);

            @media (max-width: ${props.sidebarThreshold}) {
              margin-left: -50vw;
              margin-right: -50vw;
              width: calc(100vw - ${scrollbarWidth}px);
            }
          `,children:props.children}):(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: calc(-50vw + ${props.sidebarWidth} / 2);
            margin-right: calc(-50vw + ${props.sidebarWidth} / 2);
            width: calc(100vw - ${props.sidebarWidth} - ${scrollbarWidth}px);
          `,children:props.children}):(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        width: calc(100vw - ${scrollbarWidth}px);
      `,children:props.children})};BreakFromCentered.displayName="BreakFromCentered";const Centering_BreakFromCentered=BreakFromCentered;try{BreakFromCentered.displayName="BreakFromCentered",BreakFromCentered.__docgenInfo={description:"",displayName:"BreakFromCentered",props:{sidebar:{defaultValue:null,description:"",name:"sidebar",required:!0,type:{name:"boolean"}},sidebarPosition:{defaultValue:null,description:"",name:"sidebarPosition",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},sidebarWidth:{defaultValue:null,description:"",name:"sidebarWidth",required:!0,type:{name:"string"}},sidebarThreshold:{defaultValue:null,description:"",name:"sidebarThreshold",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Centering/BreakFromCentered.tsx#BreakFromCentered"]={docgenInfo:BreakFromCentered.__docgenInfo,name:"BreakFromCentered",path:"src/components/Centering/BreakFromCentered.tsx#BreakFromCentered"})}catch(__react_docgen_typescript_loader_error){}var Centered=__webpack_require__("./src/components/Centering/Centered.tsx");const BreakFromCentered_stories={parameters:{storySource:{source:'\nimport { css } from "@emotion/css"\nimport { Meta, Story } from "@storybook/react"\nimport React from "react"\n\nimport BreakFromCentered from "../src/components/Centering/BreakFromCentered"\nimport Centered from "../src/components/Centering/Centered"\n\nexport default {\n  title: "Components/Centering/BreakFromCentered",\n  component: BreakFromCentered,\n} as Meta\n\nconst Component = BreakFromCentered\n\ntype ComponentProps = React.ComponentProps<typeof Component>\n\nconst children = (\n  <>\n    <p>\n      McLaughlin: The centering method that is also being developed at the UCI has been developed on\n      the UCI&apos;s technical facilities.\n    </p>\n\n    <p>\n      Garnold: Yes. The center of gravity in the track will be much larger and I think it must be a\n      much more difficult target for you to operate if you have to get around a corner and you have\n      to drive down the lane.\n    </p>\n\n    <p>\n      McLaughlin: That&apos;s true, but it depends on your location in the track. The track with the\n      highest gradient on the line is the one with the longest track of any of the UCI track and\n      this means the center of gravity of the track needs to be above 100 in order to be able to\n      maintain a high gradient.\n    </p>\n\n    <p>\n      Garnold: Yes. It would be very easy to say that to operate if you have your hand in the wheel\n      on a track like the UCI or as an individual in the UCI. That is true for certain types of\n      riders at the track. But more importantly it would be true when you are performing this\n      maneuver on the Pirelli road course.\n    </p>\n  </>\n)\n\nconst Wrapper: React.FC<React.PropsWithChildren<React.PropsWithChildren<unknown>>> = ({\n  children,\n}) => (\n  <div\n    className={css`\n      p {\n        margin-bottom: 0.5rem;\n      }\n    `}\n  >\n    {children}\n  </div>\n)\n\nconst DefaultTemplate: Story<ComponentProps> = (args: ComponentProps) => (\n  <Wrapper>\n    <Centered variant="narrow">\n      {children}\n      <Component {...args} />\n      {children}\n    </Centered>\n  </Wrapper>\n)\n\nexport const Default: Story<ComponentProps> = DefaultTemplate.bind({})\nDefault.args = {\n  children: (\n    <div\n      className={css`\n        background-color: #fffff0;\n        padding: 1rem 0.5rem;\n        border: 1px solid #333;\n      `}\n    >\n      This content should have broken free from the centering.\n    </div>\n  ),\n}\n\nconst WithSidebarOnLeftTemplate: Story<ComponentProps> = (args: ComponentProps) => (\n  <Wrapper>\n    <div\n      className={css`\n        width: 20rem;\n        position: absolute;\n        left: 0;\n        top: 0;\n        padding-top: 40px;\n        background-color: #e2f5fb;\n        height: 100%;\n        font-weight: bold;\n        font-size: 60px;\n        color: #333;\n      `}\n    >\n      <div\n        className={css`\n          transform: rotate(-90deg);\n          position: relative;\n          bottom: -80px;\n        `}\n      >\n        Sidebar\n      </div>\n    </div>\n    <div\n      className={css`\n        margin-left: 20rem;\n      `}\n    >\n      <Centered variant="narrow">\n        {children}\n        <Component {...args} />\n        {children}\n      </Centered>\n    </div>\n  </Wrapper>\n)\n\nexport const WithSidebarOnLeft: Story<ComponentProps> = WithSidebarOnLeftTemplate.bind({})\nWithSidebarOnLeft.args = {\n  sidebar: true,\n  sidebarPosition: "left",\n  sidebarWidth: "20rem",\n  children: (\n    <div\n      className={css`\n        background-color: #fffff0;\n        padding: 1rem 0.5rem;\n        border: 1px solid #333;\n      `}\n    >\n      This content should have broken free from the centering.\n    </div>\n  ),\n}\n\nconst WithSidebarOnRightTemplate: Story<ComponentProps> = (args: ComponentProps) => (\n  <Wrapper>\n    <div\n      className={css`\n        width: 20rem;\n        height: 100vh;\n        position: absolute;\n        right: 0;\n        top: 0;\n        padding-top: 40px;\n        background-color: #e2f5fb;\n        font-weight: bold;\n        font-size: 60px;\n        color: #333;\n      `}\n    >\n      <div\n        className={css`\n          transform: rotate(-90deg);\n          position: relative;\n          bottom: -80px;\n        `}\n      >\n        Sidebar\n      </div>\n    </div>\n    <div\n      className={css`\n        margin-right: 20rem;\n      `}\n    >\n      <Centered variant="narrow">\n        {children}\n        <Component {...args} />\n        {children}\n      </Centered>\n    </div>\n  </Wrapper>\n)\n\nexport const WithSidebarOnRight: Story<ComponentProps> = WithSidebarOnRightTemplate.bind({})\nWithSidebarOnRight.args = {\n  sidebar: true,\n  sidebarPosition: "right",\n  sidebarWidth: "20rem",\n  children: (\n    <div\n      className={css`\n        background-color: #fffff0;\n        padding: 1rem 0.5rem;\n        border: 1px solid #333;\n      `}\n    >\n      This content should have broken free from the centering.\n    </div>\n  ),\n}\n',locationsMap:{default:{startLoc:{col:47,line:61},endLoc:{col:1,line:69},startBody:{col:47,line:61},endBody:{col:1,line:69}},"with-sidebar-on-left":{startLoc:{col:57,line:86},endLoc:{col:1,line:124},startBody:{col:57,line:86},endBody:{col:1,line:124}},"with-sidebar-on-right":{startLoc:{col:58,line:144},endLoc:{col:1,line:182},startBody:{col:58,line:144},endBody:{col:1,line:182}}}}},title:"Components/Centering/BreakFromCentered",component:Centering_BreakFromCentered},Component=Centering_BreakFromCentered,children=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("p",{children:"McLaughlin: The centering method that is also being developed at the UCI has been developed on the UCI's technical facilities."}),(0,jsx_runtime.jsx)("p",{children:"Garnold: Yes. The center of gravity in the track will be much larger and I think it must be a much more difficult target for you to operate if you have to get around a corner and you have to drive down the lane."}),(0,jsx_runtime.jsx)("p",{children:"McLaughlin: That's true, but it depends on your location in the track. The track with the highest gradient on the line is the one with the longest track of any of the UCI track and this means the center of gravity of the track needs to be above 100 in order to be able to maintain a high gradient."}),(0,jsx_runtime.jsx)("p",{children:"Garnold: Yes. It would be very easy to say that to operate if you have your hand in the wheel on a track like the UCI or as an individual in the UCI. That is true for certain types of riders at the track. But more importantly it would be true when you are performing this maneuver on the Pirelli road course."})]}),Wrapper=({children})=>(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
      p {
        margin-bottom: 0.5rem;
      }
    `,children});Wrapper.displayName="Wrapper";const DefaultTemplate=args=>(0,jsx_runtime.jsx)(Wrapper,{children:(0,jsx_runtime.jsxs)(Centered.Ay,{variant:"narrow",children:[children,(0,jsx_runtime.jsx)(Component,{...args}),children]})});DefaultTemplate.displayName="DefaultTemplate";const Default=DefaultTemplate.bind({});Default.args={children:(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
        background-color: #fffff0;
        padding: 1rem 0.5rem;
        border: 1px solid #333;
      `,children:"This content should have broken free from the centering."})};const WithSidebarOnLeftTemplate=args=>(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
        width: 20rem;
        position: absolute;
        left: 0;
        top: 0;
        padding-top: 40px;
        background-color: #e2f5fb;
        height: 100%;
        font-weight: bold;
        font-size: 60px;
        color: #333;
      `,children:(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
          transform: rotate(-90deg);
          position: relative;
          bottom: -80px;
        `,children:"Sidebar"})}),(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
        margin-left: 20rem;
      `,children:(0,jsx_runtime.jsxs)(Centered.Ay,{variant:"narrow",children:[children,(0,jsx_runtime.jsx)(Component,{...args}),children]})})]});WithSidebarOnLeftTemplate.displayName="WithSidebarOnLeftTemplate";const WithSidebarOnLeft=WithSidebarOnLeftTemplate.bind({});WithSidebarOnLeft.args={sidebar:!0,sidebarPosition:"left",sidebarWidth:"20rem",children:(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
        background-color: #fffff0;
        padding: 1rem 0.5rem;
        border: 1px solid #333;
      `,children:"This content should have broken free from the centering."})};const WithSidebarOnRightTemplate=args=>(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
        width: 20rem;
        height: 100vh;
        position: absolute;
        right: 0;
        top: 0;
        padding-top: 40px;
        background-color: #e2f5fb;
        font-weight: bold;
        font-size: 60px;
        color: #333;
      `,children:(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
          transform: rotate(-90deg);
          position: relative;
          bottom: -80px;
        `,children:"Sidebar"})}),(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
        margin-right: 20rem;
      `,children:(0,jsx_runtime.jsxs)(Centered.Ay,{variant:"narrow",children:[children,(0,jsx_runtime.jsx)(Component,{...args}),children]})})]});WithSidebarOnRightTemplate.displayName="WithSidebarOnRightTemplate";const WithSidebarOnRight=WithSidebarOnRightTemplate.bind({});WithSidebarOnRight.args={sidebar:!0,sidebarPosition:"right",sidebarWidth:"20rem",children:(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
        background-color: #fffff0;
        padding: 1rem 0.5rem;
        border: 1px solid #333;
      `,children:"This content should have broken free from the centering."})},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(args: ComponentProps) => <Wrapper>\n    <Centered variant="narrow">\n      {children}\n      <Component {...args} />\n      {children}\n    </Centered>\n  </Wrapper>',...Default.parameters?.docs?.source}}},WithSidebarOnLeft.parameters={...WithSidebarOnLeft.parameters,docs:{...WithSidebarOnLeft.parameters?.docs,source:{originalSource:'(args: ComponentProps) => <Wrapper>\n    <div className={css`\n        width: 20rem;\n        position: absolute;\n        left: 0;\n        top: 0;\n        padding-top: 40px;\n        background-color: #e2f5fb;\n        height: 100%;\n        font-weight: bold;\n        font-size: 60px;\n        color: #333;\n      `}>\n      <div className={css`\n          transform: rotate(-90deg);\n          position: relative;\n          bottom: -80px;\n        `}>\n        Sidebar\n      </div>\n    </div>\n    <div className={css`\n        margin-left: 20rem;\n      `}>\n      <Centered variant="narrow">\n        {children}\n        <Component {...args} />\n        {children}\n      </Centered>\n    </div>\n  </Wrapper>',...WithSidebarOnLeft.parameters?.docs?.source}}},WithSidebarOnRight.parameters={...WithSidebarOnRight.parameters,docs:{...WithSidebarOnRight.parameters?.docs,source:{originalSource:'(args: ComponentProps) => <Wrapper>\n    <div className={css`\n        width: 20rem;\n        height: 100vh;\n        position: absolute;\n        right: 0;\n        top: 0;\n        padding-top: 40px;\n        background-color: #e2f5fb;\n        font-weight: bold;\n        font-size: 60px;\n        color: #333;\n      `}>\n      <div className={css`\n          transform: rotate(-90deg);\n          position: relative;\n          bottom: -80px;\n        `}>\n        Sidebar\n      </div>\n    </div>\n    <div className={css`\n        margin-right: 20rem;\n      `}>\n      <Centered variant="narrow">\n        {children}\n        <Component {...args} />\n        {children}\n      </Centered>\n    </div>\n  </Wrapper>',...WithSidebarOnRight.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithSidebarOnLeft","WithSidebarOnRight"]},"./src/components/Centering/Centered.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),_styles_constants__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/styles/constants.ts")),_styles_respond__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/styles/respond.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultWidthCenteredComponentStyles=_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH`
  max-width: ${_styles_constants__WEBPACK_IMPORTED_MODULE_2__.x0}rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0rem 1.375rem;
  margin-bottom: 1.25rem;
  ${_styles_respond__WEBPACK_IMPORTED_MODULE_3__.$.xl} {
    padding: 0rem;
  }
`,narrowWidthCenteredComponentStyles=_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH`
  max-width: ${_styles_constants__WEBPACK_IMPORTED_MODULE_2__.xy}rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0rem 1.375rem;
  margin-bottom: 1.25rem;
  ${_styles_respond__WEBPACK_IMPORTED_MODULE_3__.$.md} {
    padding: 0rem;
  }
`,Centered=({children,variant})=>"narrow"===variant?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:narrowWidthCenteredComponentStyles,children}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:defaultWidthCenteredComponentStyles,children}),__WEBPACK_DEFAULT_EXPORT__=Centered;try{Centered.displayName="Centered",Centered.__docgenInfo={description:"",displayName:"Centered",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"narrow"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Centering/Centered.tsx#Centered"]={docgenInfo:Centered.__docgenInfo,name:"Centered",path:"src/components/Centering/Centered.tsx#Centered"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/respond.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>respondToOrLarger});const mediaQuery=minWidth=>`@media (min-width: ${minWidth}rem)`,respondToOrLarger={xxxs:mediaQuery(2),xxs:mediaQuery(25),xs:mediaQuery(30),sm:mediaQuery(36),md:mediaQuery(48),lg:mediaQuery(62),xl:mediaQuery(75),xxl:mediaQuery(87.5),xxxl:mediaQuery(100),xxxxl:mediaQuery(125),xxxxxl:mediaQuery(150)}}}]);
//# sourceMappingURL=BreakFromCentered-stories.abd387df.iframe.bundle.js.map