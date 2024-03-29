"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[654],{"./stories/Footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Footer_stories});__webpack_require__("./node_modules/react/index.js");var emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js");const UHBrandLogo_namespaceObject=__webpack_require__.p+"static/media/UHBrandLogo.352b4f75.svg";var moocfiLogo=__webpack_require__("./src/img/moocfiLogo.svg"),styles=__webpack_require__("./src/styles/index.ts"),respond=__webpack_require__("./src/styles/respond.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=emotion_styled_browser_esm.A.div`
  margin-top: 5em;
  padding: 1rem;
  background: #f7f8f9;

  ${respond.$.sm} {
    padding: 4rem;
  }

  ${respond.$.lg} {
    padding: 5rem 3rem;
  }

  h1 {
    margin-bottom: 0.8rem;
    line-height: 1;
    font-weight: 600;
    font-size: clamp(24px, 2vw, 30px);
    color: ${styles.$7.colors.gray[700]};
    padding: 0;

    ${respond.$.sm} {
      padding: 0 2rem 0 0;
    }
    ${respond.$.lg} {
      padding: 0 2rem 0 3rem;
    }
  }
`,Wrapper=emotion_styled_browser_esm.A.div`
  display: grid;
  grid-template-rows: 1fr;
  color: #231f20;
  position: relative;
  row-gap: 20px;

  ${respond.$.sm} {
    grid-template-columns: 1fr;
    gap: 20px;
    row-gap: 20px;
  }

  ${respond.$.lg} {
    grid-template-columns: 0.9fr 0.2fr;
    gap: 20px;
    row-gap: 20px;
  }
`,StyledLink=emotion_styled_browser_esm.A.a`
  text-decoration: none;
  color: ${styles.$7.colors.gray[700]};
  font-size: 18px;
  font-weight: 500;
  opacity: 0.8;
  transition: opacity 0.2s ease-in;
  margin-bottom: 5px;
  font-family: ${styles.ec};
  padding-left: 0;

  ${respond.$.lg} {
    margin-bottom: 10px;
    padding-left: 3rem;
  }

  :hover {
    text-decoration: none;
    opacity: 1;
  }
`,Text=emotion_styled_browser_esm.A.div`
  width: 100%;
  padding: 0;

  ${respond.$.sm} {
    padding: 0 2rem 0 0;
  }

  ${respond.$.md} {
    width: 90%;
  }

  ${respond.$.lg} {
    width: 90%;
    padding: 0 5rem 0 3rem;
  }

  p {
    font-size: 18px;
    padding-right: 0;
    color: ${styles.$7.colors.gray[600]};
  }

  .mooc-description {
    display: inline-block;
    padding-top: 10px;
    opacity: 0.8;
  }
`,Links=emotion_styled_browser_esm.A.div`
  display: flex;
  flex-direction: column;
`,LogoA=emotion_styled_browser_esm.A.a`
  filter: brightness(100%) contrast(100%);
  transition: filter 0.2s;
  max-height: 98px;
  &:hover {
    filter: brightness(34%) contrast(40%);
  }

  &:first-of-type {
    margin-right: 1.5rem;
  }
`,Footer=()=>{const{t,i18n}=(0,es.Bd)(),useFinnishLinks="fi"===i18n.language||"fi-FI"===i18n.language;return(0,jsx_runtime.jsx)("footer",{role:"contentinfo",className:emotion_css_esm.AH`
        margin-top: 2rem;

        a {
          color: #065853;
          font-weight: 600;
        }
      `,children:(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)("h1",{children:t("about")}),(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(Text,{children:[(0,jsx_runtime.jsx)("p",{children:t("about-mooc-center-description")}),(0,jsx_runtime.jsxs)("p",{className:"mooc-description",children:[t("mooc-project-description")," ",t("star-the-project-on-github"),":"," ",(0,jsx_runtime.jsx)("a",{href:"https://github.com/rage/secret-project-331/",children:t("project-github")}),"."]})]}),(0,jsx_runtime.jsx)(Links,{children:(0,jsx_runtime.jsx)(StyledLink,{href:"https://www.mooc.fi/faq/tietosuojaseloste/",children:t("privacy")})}),(0,jsx_runtime.jsxs)("div",{className:emotion_css_esm.AH`
              display: flex;
              align-content: space-between;
              row-gap: 1.4em;
              opacity: 0.9;

              ${respond.$.sm} {
                padding: 0 2rem 0 0;
              }

              ${respond.$.md} {
                width: 90%;
              }

              ${respond.$.lg} {
                padding: 1rem 2rem 0 3rem;
              }
            `,children:[(0,jsx_runtime.jsx)(LogoA,{href:useFinnishLinks?"https://www.mooc.fi":"https://www.mooc.fi/en","aria-label":"MOOC.fi",children:(0,jsx_runtime.jsx)(moocfiLogo,{})}),(0,jsx_runtime.jsx)(LogoA,{href:useFinnishLinks?"https://www.helsinki.fi":"https://www.helsinki.fi/en","aria-label":t("university-of-helsinki"),children:(0,jsx_runtime.jsx)(UHBrandLogo_namespaceObject,{})})]})]})]})})};Footer.displayName="Footer";const components_Footer=Footer;try{Footer.displayName="Footer",Footer.__docgenInfo={description:"",displayName:"Footer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Footer.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"src/components/Footer.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}const Footer_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react"\nimport React from "react"\n\nimport Footer from "../src/components/Footer"\n\nexport default {\n  title: "Components/Footer",\n  component: Footer,\n} as Meta\n\nconst Component = Footer\n\ntype ComponentProps = React.ComponentProps<typeof Component>\n\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />\n\nexport const Primary: Story<ComponentProps> = Template.bind({})\nPrimary.args = {}\n',locationsMap:{primary:{startLoc:{col:40,line:16},endLoc:{col:89,line:16},startBody:{col:40,line:16},endBody:{col:89,line:16}}}}},title:"Components/Footer",component:components_Footer},Component=components_Footer,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/styles/respond.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>respondToOrLarger});const mediaQuery=minWidth=>`@media (min-width: ${minWidth}rem)`,respondToOrLarger={xxxs:mediaQuery(2),xxs:mediaQuery(25),xs:mediaQuery(30),sm:mediaQuery(36),md:mediaQuery(48),lg:mediaQuery(62),xl:mediaQuery(75),xxl:mediaQuery(87.5),xxxl:mediaQuery(100),xxxxl:mediaQuery(125),xxxxxl:mediaQuery(150)}},"./src/img/moocfiLogo.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/moocfiLogo.d1039a89.svg"}}]);
//# sourceMappingURL=Footer-stories.bea778dc.iframe.bundle.js.map