"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[6263],{"./stories/NextSectionLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Table:()=>Table,__namedExportsOrder:()=>__namedExportsOrder,default:()=>NextSectionLink_stories});var react=__webpack_require__("./node_modules/react/index.js"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js");const arrow_namespaceObject=__webpack_require__.p+"static/media/arrow.60fcbccc.svg",backarrow_namespaceObject=__webpack_require__.p+"static/media/backarrow.3dc5ea1c.svg",lock_namespaceObject=__webpack_require__.p+"static/media/lock.7e132d7f.svg",up_arrow_namespaceObject=__webpack_require__.p+"static/media/up-arrow.1fee07e7.svg";var styles=__webpack_require__("./src/styles/index.ts"),respond=__webpack_require__("./src/styles/respond.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const LinkOrNoLink=({url,children,linkClassName})=>url?(0,jsx_runtime.jsx)(link_default(),{href:url,className:linkClassName,children}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children});LinkOrNoLink.displayName="LinkOrNoLink";const components_LinkOrNoLink=LinkOrNoLink;try{LinkOrNoLink.displayName="LinkOrNoLink",LinkOrNoLink.__docgenInfo={description:"",displayName:"LinkOrNoLink",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string | undefined"}},linkClassName:{defaultValue:null,description:"",name:"linkClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LinkOrNoLink.tsx#LinkOrNoLink"]={docgenInfo:LinkOrNoLink.__docgenInfo,name:"LinkOrNoLink",path:"src/components/LinkOrNoLink.tsx#LinkOrNoLink"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./src/utils/constants.ts");const HideTextInSystemTests=({text,testPlaceholder})=>function useShouldHideStuffFromSystemTestScreenshots(){const[shouldHideStuff,setShouldHideStuff]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const hideCallback=()=>{setShouldHideStuff(!0)},showCallback=()=>{setShouldHideStuff(!1)};return window.addEventListener(constants.PQ,hideCallback),window.addEventListener(constants.tT,showCallback),()=>{window.removeEventListener(constants.PQ,hideCallback),window.removeEventListener(constants.tT,showCallback)}}),[]),shouldHideStuff}()?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:testPlaceholder}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:text}),system_tests_HideTextInSystemTests=HideTextInSystemTests;try{HideTextInSystemTests.displayName="HideTextInSystemTests",HideTextInSystemTests.__docgenInfo={description:"",displayName:"HideTextInSystemTests",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},testPlaceholder:{defaultValue:null,description:"",name:"testPlaceholder",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/system-tests/HideTextInSystemTests.tsx#HideTextInSystemTests"]={docgenInfo:HideTextInSystemTests.__docgenInfo,name:"HideTextInSystemTests",path:"src/components/system-tests/HideTextInSystemTests.tsx#HideTextInSystemTests"})}catch(__react_docgen_typescript_loader_error){}const Wrapper=emotion_styled_browser_esm.Z.div`
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: calc(0px + 100vw);
  ${respond.L.md} {
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 3rem 0 3.5rem 0;
  }
  background: #f4f6f8;
  padding: 1.5rem 1rem 2rem 1.4rem;
`,StyledLink=(0,emotion_styled_browser_esm.Z)(link_default())`
  border: 1px solid ${styles.wE.colors.blue[200]};
  padding: 0.3rem 1rem;
  background: #fff;
  display: inline-block;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
  margin-bottom: 2.4rem;

  span {
    font-size: 15px;
    font-weight: 500;
    padding-left: 8px;
    color: ${styles.wE.colors.blue[700]};
  }

  .arrow {
    fill: ${styles.wE.colors.blue[500]};
  }

  &:hover {
    cursor: pointer;
    background: ${styles.wE.colors.blue[100]};

    span {
      color: ${styles.wE.colors.blue[600]};
    }

    .arrow {
      fill: ${styles.wE.colors.blue[600]};
    }
  }
`,NextSectionLink=({title,subtitle,nextTitle,url,previous,chapterFrontPageURL})=>{const{t}=(0,es.$G)();return(0,jsx_runtime.jsx)(Wrapper,{children:(0,jsx_runtime.jsxs)("div",{className:emotion_css_esm.iv`
          font-family: ${styles.$O};
          min-height: auto;
          max-width: 48rem;
          margin-left: auto;
          margin-right: auto;
        `,children:[chapterFrontPageURL&&(0,jsx_runtime.jsxs)(StyledLink,{href:chapterFrontPageURL,children:[(0,jsx_runtime.jsx)(up_arrow_namespaceObject,{id:"up-svg-icon",role:"presentation",alt:""}),(0,jsx_runtime.jsx)("span",{children:t("chapter-front-page")})]}),(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("h2",{className:emotion_css_esm.iv`
              font-size: clamp(28px, 3vw, 2rem);
              line-height: 1.3;
              font-weight: 600;
              opacity: 0.9;
              color: ${styles.wE.colors.gray[700]};
            `,children:title}),(0,jsx_runtime.jsx)("p",{className:emotion_css_esm.iv`
              font-size: 18px;
              color: ${styles.wE.colors.gray[700]};
              font-weight: 500;
              margin: 0.3rem 0;
              padding: 0;
              display: flex;

              ${respond.L.md} {
                font-size: 20px;
              }
            `,children:subtitle}),(0,jsx_runtime.jsxs)("div",{className:emotion_css_esm.iv`
              display: grid;
              grid-template-columns: ${previous?"60px 1fr":"1fr"};
              column-gap: 10px;
              margin-top: 1.5rem;

              ${respond.L.md} {
                grid-template-columns: ${previous?"80px 1fr":"1fr"};
                column-gap: 12px;
              }
            `,children:[previous&&(0,jsx_runtime.jsx)(link_default(),{href:previous,"aria-label":t("previous-page"),children:(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.iv`
                    background: ${styles.wE.colors.green[100]};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;

                    &:hover {
                      filter: brightness(95%) contrast(110%);
                      cursor: pointer;
                    }

                    svg {
                      fill: #44827e;
                      width: 30%;
                      ${respond.L.md} {
                        width: 100%;
                      }
                    }
                  `,children:(0,jsx_runtime.jsx)(backarrow_namespaceObject,{id:"back-arrow-icon",role:"presentation",alt:"",width:"25",height:"25",viewBox:"0 0 39 39"})})}),(0,jsx_runtime.jsx)(components_LinkOrNoLink,{url,linkClassName:emotion_css_esm.iv`
                overflow: hidden;
                text-decoration: none;
                &:focus-visible {
                  outline: 2px solid ${styles.wE.colors.green[500]};
                  outline-offset: 2px;
                }
              `,children:(0,jsx_runtime.jsxs)("div",{className:emotion_css_esm.iv`
                  display: flex;
                  flex-direction: row;
                  width: 100%;
                  transition: filter 0.2s;
                  cursor: ${url?"pointer":"not-allowed"};
                  &:hover {
                    text-decoration: none;
                    filter: brightness(92%) contrast(110%);
                  }
                `,children:[(0,jsx_runtime.jsxs)("div",{className:emotion_css_esm.iv`
                    background-color: ${url?styles.wE.colors.green[600]:styles.wE.colors.gray[600]};

                    flex: 1;
                    line-height: 1.3;
                    width: 100%;
                    padding: 1.2rem 1rem;

                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;

                    .next-page-title {
                      display: block;
                      width: 100%;
                      font-size: ${styles.cp.h5};
                      font-weight: 600;
                      color: #fff;
                      white-space: nowrap;
                      text-overflow: ellipsis;
                      overflow: hidden;
                    }
                    .next-page-subtitle {
                      font-weight: medium;
                      color: #dae6e5;
                      font-size: 15px;

                      ${respond.L.md} {
                        font-size: ${styles.cp.paragraph};
                      }
                    }

                    ${respond.L.md} {
                      width: 68%;
                      padding: 1.2rem 1.8rem;
                    }
                  `,children:[(0,jsx_runtime.jsxs)("span",{className:"next-page-subtitle",children:[t("next-page"),":"]}),(0,jsx_runtime.jsx)("span",{className:"next-page-title",children:(0,jsx_runtime.jsx)(system_tests_HideTextInSystemTests,{text:nextTitle,testPlaceholder:"Title of the next page"})})]}),(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.iv`
                    color: white;
                    padding: 16px 16px 16px 0;
                    background-color: ${url?styles.wE.colors.green[600]:styles.wE.colors.gray[600]};
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .arrow {
                      fill: #fff;
                    }

                    ${respond.L.sm} {
                      padding: 1.6rem;
                      width: auto;
                    }

                    svg {
                      width: auto;
                    }
                  `,children:url?(0,jsx_runtime.jsx)(arrow_namespaceObject,{id:"right-svg-icon",role:"presentation",alt:"",width:"30",height:"30",viewBox:"0 0 39 39"}):(0,jsx_runtime.jsx)(lock_namespaceObject,{id:"svg-icon",role:"presentation",alt:"",width:"24",height:"36",viewBox:"0 0 24 36"})})]})})]})]})]})})};NextSectionLink.displayName="NextSectionLink";const components_NextSectionLink=NextSectionLink;try{NextSectionLink.displayName="NextSectionLink",NextSectionLink.__docgenInfo={description:"",displayName:"NextSectionLink",props:{subtitle:{defaultValue:null,description:"",name:"subtitle",required:!0,type:{name:"string"}},nextTitle:{defaultValue:null,description:"",name:"nextTitle",required:!0,type:{name:"string"}},url:{defaultValue:null,description:"",name:"url",required:!1,type:{name:"string"}},previous:{defaultValue:null,description:"",name:"previous",required:!1,type:{name:"string"}},chapterFrontPageURL:{defaultValue:null,description:"",name:"chapterFrontPageURL",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NextSectionLink.tsx#NextSectionLink"]={docgenInfo:NextSectionLink.__docgenInfo,name:"NextSectionLink",path:"src/components/NextSectionLink.tsx#NextSectionLink"})}catch(__react_docgen_typescript_loader_error){}const NextSectionLink_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport NextSectionLink from "../src/components/NextSectionLink";\nexport default ({\n  title: "Components/NextSectionLink",\n  component: NextSectionLink\n} as Meta);\nconst Component = NextSectionLink;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Table: Story<ComponentProps> = Template.bind({});\nTable.args = {\n  children: "NextSectionLink",\n  title: "Congratulation, you\'ve reached the end of this section",\n  subtitle: "Proceed to the next section",\n  nextTitle: "Introduction to Calculus",\n  url: "/",\n  previous: "/"\n};\nTable.parameters = {\n  ...Table.parameters,\n  docs: {\n    ...Table.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Table.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{table:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/NextSectionLink",component:components_NextSectionLink},Component=components_NextSectionLink,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Table=Template.bind({});Table.args={children:"NextSectionLink",title:"Congratulation, you've reached the end of this section",subtitle:"Proceed to the next section",nextTitle:"Introduction to Calculus",url:"/",previous:"/"},Table.parameters={...Table.parameters,docs:{...Table.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Table.parameters?.docs?.source}}};const __namedExportsOrder=["Table"]},"./src/styles/respond.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>respondToOrLarger});const mediaQuery=minWidth=>`@media (min-width: ${minWidth}rem)`,respondToOrLarger={xxxs:mediaQuery(2),xxs:mediaQuery(25),xs:mediaQuery(30),sm:mediaQuery(36),md:mediaQuery(48),lg:mediaQuery(62),xl:mediaQuery(75),xxl:mediaQuery(87.5),xxxl:mediaQuery(100),xxxxl:mediaQuery(125),xxxxxl:mediaQuery(150)}},"./src/utils/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PQ:()=>HIDE_TEXT_IN_SYSTEM_TESTS_EVENT,dK:()=>MARGIN_BETWEEN_NAVBAR_AND_CONTENT,tT:()=>SHOW_TEXT_IN_SYSTEM_TESTS_EVENT,tZ:()=>INCLUDE_THIS_HEADING_IN_HEADINGS_NAVIGATION_CLASS,wU:()=>SPINNER_CLASS});const HIDE_TEXT_IN_SYSTEM_TESTS_EVENT="hide-text-in-system-tests",SHOW_TEXT_IN_SYSTEM_TESTS_EVENT="show-text-in-system-tests",MARGIN_BETWEEN_NAVBAR_AND_CONTENT="2rem",INCLUDE_THIS_HEADING_IN_HEADINGS_NAVIGATION_CLASS="include-this-heading-in-headings-navigation",SPINNER_CLASS="loading-spinner-component"}}]);
//# sourceMappingURL=NextSectionLink-stories.8d45d77b.iframe.bundle.js.map