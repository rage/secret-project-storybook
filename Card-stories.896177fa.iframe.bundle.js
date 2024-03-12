"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[633],{"./stories/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IllustrationCard:()=>Card_stories_IllustrationCard,Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});__webpack_require__("./node_modules/react/index.js");var emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),styles=__webpack_require__("./src/styles/index.ts"),process=__webpack_require__("./node_modules/process/browser.js");var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),constants=__webpack_require__("./src/styles/constants.ts"),respond=__webpack_require__("./src/styles/respond.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const styledspan=emotion_css_esm.AH`
  font-family: ${styles.UX} !important;
  font-size: 0.9rem;
  opacity: 0.8;
  text-transform: uppercase;
`,CardOpensText=({open,date,time})=>{const{t}=(0,es.Bd)();return date&&time?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:(0,emotion_css_esm.cx)(styledspan),children:t("available")}),(0,jsx_runtime.jsx)("div",{children:t("on-date-at-time",{date,time})})]}):time?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:(0,emotion_css_esm.cx)(styledspan),children:t("opens-in")}),(0,jsx_runtime.jsx)("div",{children:time})]}):open?(0,jsx_runtime.jsx)("span",{className:(0,emotion_css_esm.cx)(styledspan),children:t("opens-now")}):(0,jsx_runtime.jsx)("span",{children:t("closed")})},Card_CardOpensText=CardOpensText;try{CardOpensText.displayName="CardOpensText",CardOpensText.__docgenInfo={description:"",displayName:"CardOpensText",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean | undefined"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string | undefined"}},time:{defaultValue:null,description:"",name:"time",required:!0,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/CardOpensText.tsx#CardOpensText"]={docgenInfo:CardOpensText.__docgenInfo,name:"CardOpensText",path:"src/components/Card/CardOpensText.tsx#CardOpensText"})}catch(__react_docgen_typescript_loader_error){}const CardOpensTextOverlay=({open,date,time})=>(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
        position: relative;
      `,children:!open&&(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
            flex: 0 1 auto;
            text-align: center;
            background: #e2e4e6;
            padding: 1rem 2rem;
            position: absolute;
            width: 100%;
            z-index: 100;

            color: #303030;
            font-size: 0.8em;
            font-weight: 500;

            ${respond.$.md} {
              font-size: 1em;
              padding: 1.5rem;
            }
          `,children:(0,jsx_runtime.jsx)(Card_CardOpensText,{open,date,time})})});CardOpensTextOverlay.displayName="CardOpensTextOverlay";const Card_CardOpenTextOverlay=CardOpensTextOverlay;try{CardOpenTextOverlay.displayName="CardOpenTextOverlay",CardOpenTextOverlay.__docgenInfo={description:"",displayName:"CardOpenTextOverlay",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean | undefined"}},date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"string | undefined"}},time:{defaultValue:null,description:"",name:"time",required:!0,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/CardOpenTextOverlay.tsx#CardOpenTextOverlay"]={docgenInfo:CardOpenTextOverlay.__docgenInfo,name:"CardOpenTextOverlay",path:"src/components/Card/CardOpenTextOverlay.tsx#CardOpenTextOverlay"})}catch(__react_docgen_typescript_loader_error){}const BackgroundStyles=({bg})=>`\n    background-color: ${bg||"#fff"};\n  `,CardContentWrapper=emotion_styled_browser_esm.A.div`
  display: flex;
  height: 100%;
  text-align: left;
  flex-direction: column;
  overflow: hidden;
  overflow-wrap: break-word;
  ${BackgroundStyles}

  h2 {
    font-weight: 600;
    z-index: 20;
    line-height: 1.2;
    color: ${styles.$7.colors.gray[700]};
    margin-top: 5px;
    font-size: clamp(26px, 2.2vw, 30px);
    opacity: 0.9;
  }
`,IllustrationCard=({title,chapterNumber,bg,backgroundImage,open,date,time})=>{const{t}=(0,es.Bd)();return(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
        max-width: ${constants.$H}rem;
        border-radius: 1px;
        position: relative;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        background: #f2f2f2;
        aspect-ratio: 1/1;
        padding: 10px;
      `,children:(0,jsx_runtime.jsxs)(CardContentWrapper,{bg,children:[(0,jsx_runtime.jsx)(Card_CardOpenTextOverlay,{open,date,time}),(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
            width: 100%;
            height: 370.6px;
            transition: transform 0.2s;
            ${backgroundImage&&`background-image: url(${backgroundImage});\n              background-repeat: no-repeat;\n              background-color: ${bg};\n              background-position: center center;\n              background-size: contain;\n              `}

            &:hover {
              transform: scale(1.1);
            }
          `}),(0,jsx_runtime.jsxs)("div",{className:emotion_css_esm.AH`
            flex: 1 1 auto;
            padding: 1rem;
            position: relative;
            background: #fff;

            ${respond.$.md} {
              padding: 2rem 2rem;
            }
          `,children:[(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
              position: absolute;
              top: -15px;
              left: 10px;
              ${respond.$.md} {
                left: 30px;
              }
            `,children:(0,jsx_runtime.jsx)("span",{className:emotion_css_esm.AH`
                font-family: ${styles.ec};
                min-width: 18px;
                font-weight: 500;
                color: ${styles.$7.colors.blue[600]} !important;
                background: #edf1f4;
                border: 3px solid #fff;
                border-radius: 20px;
                font-size: 0.7rem;
                padding: 0.2rem 0.6rem 0.3rem 0.6rem;

                ${respond.$.md} {
                  font-size: 0.9rem;
                }
              `,children:t("chapter-chapter-number",{number:chapterNumber})})}),(0,jsx_runtime.jsx)("h2",{children:title})]})]})})};IllustrationCard.displayName="IllustrationCard";const Card_IllustrationCard=IllustrationCard;try{BackgroundStyles.displayName="BackgroundStyles",BackgroundStyles.__docgenInfo={description:"",displayName:"BackgroundStyles",props:{bg:{defaultValue:null,description:"",name:"bg",required:!0,type:{name:"string | undefined"}},backgroundImage:{defaultValue:null,description:"",name:"backgroundImage",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/IllustrationCard.tsx#BackgroundStyles"]={docgenInfo:BackgroundStyles.__docgenInfo,name:"BackgroundStyles",path:"src/components/Card/IllustrationCard.tsx#BackgroundStyles"})}catch(__react_docgen_typescript_loader_error){}try{IllustrationCard.displayName="IllustrationCard",IllustrationCard.__docgenInfo={description:"",displayName:"IllustrationCard",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"simple"'},{value:'"illustration"'},{value:'"course"'}]}},chapterNumber:{defaultValue:null,description:"",name:"chapterNumber",required:!0,type:{name:"number"}},url:{defaultValue:null,description:"",name:"url",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},allowedToPreview:{defaultValue:null,description:"",name:"allowedToPreview",required:!1,type:{name:"boolean"}},date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string"}},time:{defaultValue:null,description:"",name:"time",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},languages:{defaultValue:null,description:"",name:"languages",required:!1,type:{name:"string"}},backgroundImage:{defaultValue:null,description:"",name:"backgroundImage",required:!1,type:{name:"string | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/IllustrationCard.tsx#IllustrationCard"]={docgenInfo:IllustrationCard.__docgenInfo,name:"IllustrationCard",path:"src/components/Card/IllustrationCard.tsx#IllustrationCard"})}catch(__react_docgen_typescript_loader_error){}const cardNext_namespaceObject=__webpack_require__.p+"static/media/cardNext.46f5aa86.svg",SimpleCard_BackgroundStyles=({bg})=>`\n    background-color: ${bg||"#fff"};\n  `,StCardSvg=(0,emotion_styled_browser_esm.A)(cardNext_namespaceObject)`
  width: 40px;
  opacity: 0.8;
  color: #fff;
`,SimpleCard_CardContentWrapper=emotion_styled_browser_esm.A.div`
  display: flex;
  height: 100%;
  text-align: left;
  flex-direction: column;
  overflow-wrap: break-word;
  position: relative;
  ${SimpleCard_BackgroundStyles}

  &:hover {
    filter: brightness(1.1) contrast(0.9);
  }

  h2 {
    z-index: 20;
    color: #fff;
    font-weight: 500;
    line-height: 100%;
    font-size: clamp(28px, 2.7rem, 46px);
  }

  span {
    color: #f5f6f7;
    font-size: clamp(16px, 1em, 20px);
    opacity: 0.9;
    z-index: 20;
    font-weight: 500;
    width: 50%;
    line-height: 2.5em;
  }
`,StyledSVG=Image=>(0,jsx_runtime.jsx)(Image,{className:emotion_css_esm.AH`
        position: absolute;
        z-index: 99;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `});StyledSVG.displayName="StyledSVG";const SimpleCard=({title,chapterNumber,open,date,time,bg,backgroundImage})=>{const{t}=(0,es.Bd)();return(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
        max-width: ${constants.$H}rem;
        border-radius: 1px;
        position: relative;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        background: #48cfad;
        aspect-ratio: 1/1;
      `,children:(0,jsx_runtime.jsxs)(SimpleCard_CardContentWrapper,{bg,children:[backgroundImage&&StyledSVG(backgroundImage),(0,jsx_runtime.jsx)(Card_CardOpenTextOverlay,{open,date,time}),open&&(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
              padding: 2rem;
              ${respond.$.lg} {
                padding: 3rem;
              }
            `,children:(0,jsx_runtime.jsx)(StCardSvg,{})}),(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
            flex: 1;
          `}),(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
            flex: 1 1 auto;
            padding: 2rem 2rem 3rem 2rem;
            ${respond.$.lg} {
              padding: 3rem 3rem 4rem 3rem;
            }
          `,children:(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.AH`
              display: flex;
              flex-direction: column;
              height: 100%;
            `,children:(0,jsx_runtime.jsxs)("div",{className:emotion_css_esm.AH`
                margin-top: auto;
              `,children:[(0,jsx_runtime.jsx)("span",{className:emotion_css_esm.AH`
                  font-family: ${styles.ec};
                `,children:t("chapter-chapter-number",{number:chapterNumber})}),(0,jsx_runtime.jsx)("h2",{children:title})]})})})]})})};SimpleCard.displayName="SimpleCard";const Card_SimpleCard=SimpleCard;try{SimpleCard_BackgroundStyles.displayName="BackgroundStyles",SimpleCard_BackgroundStyles.__docgenInfo={description:"",displayName:"BackgroundStyles",props:{bg:{defaultValue:null,description:"",name:"bg",required:!0,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/SimpleCard.tsx#BackgroundStyles"]={docgenInfo:SimpleCard_BackgroundStyles.__docgenInfo,name:"BackgroundStyles",path:"src/components/Card/SimpleCard.tsx#BackgroundStyles"})}catch(__react_docgen_typescript_loader_error){}try{StyledSVG.displayName="StyledSVG",StyledSVG.__docgenInfo={description:"",displayName:"StyledSVG",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/SimpleCard.tsx#StyledSVG"]={docgenInfo:StyledSVG.__docgenInfo,name:"StyledSVG",path:"src/components/Card/SimpleCard.tsx#StyledSVG"})}catch(__react_docgen_typescript_loader_error){}try{SimpleCard.displayName="SimpleCard",SimpleCard.__docgenInfo={description:"",displayName:"SimpleCard",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"simple"'},{value:'"illustration"'},{value:'"course"'}]}},chapterNumber:{defaultValue:null,description:"",name:"chapterNumber",required:!0,type:{name:"number"}},url:{defaultValue:null,description:"",name:"url",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},allowedToPreview:{defaultValue:null,description:"",name:"allowedToPreview",required:!1,type:{name:"boolean"}},date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string"}},time:{defaultValue:null,description:"",name:"time",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},languages:{defaultValue:null,description:"",name:"languages",required:!1,type:{name:"string"}},backgroundImage:{defaultValue:null,description:"",name:"backgroundImage",required:!1,type:{name:"string | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/SimpleCard.tsx#SimpleCard"]={docgenInfo:SimpleCard.__docgenInfo,name:"SimpleCard",path:"src/components/Card/SimpleCard.tsx#SimpleCard"})}catch(__react_docgen_typescript_loader_error){}const variantToComponent={simple:Card_SimpleCard,course:Card_SimpleCard,illustration:Card_IllustrationCard},Card=props=>{const Component=variantToComponent[props.variant];return props.url&&(props.open||props.allowedToPreview)?(0,jsx_runtime.jsx)("a",{href:(process.env.NEXT_PUBLIC_BASE_PATH??"")+props.url,className:emotion_css_esm.AH`
          text-decoration: none;
          display: block;
          &:focus-visible {
            outline: 4px solid ${styles.$7.colors.green[500]};
            outline-offset: 2px;
          }
          transition: filter 0.2s;
          filter: brightness(1) contrast(1);
        `,children:(0,jsx_runtime.jsx)(Component,{...props})}):(0,jsx_runtime.jsx)(Component,{...props})};Card.displayName="Card";const components_Card=Card;try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"simple"'},{value:'"illustration"'},{value:'"course"'}]}},chapterNumber:{defaultValue:null,description:"",name:"chapterNumber",required:!0,type:{name:"number"}},url:{defaultValue:null,description:"",name:"url",required:!1,type:{name:"string"}},bg:{defaultValue:null,description:"",name:"bg",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},allowedToPreview:{defaultValue:null,description:"",name:"allowedToPreview",required:!1,type:{name:"boolean"}},date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"string"}},time:{defaultValue:null,description:"",name:"time",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},languages:{defaultValue:null,description:"",name:"languages",required:!1,type:{name:"string"}},backgroundImage:{defaultValue:null,description:"",name:"backgroundImage",required:!1,type:{name:"string | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/index.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Card/index.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}const Card_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react"\nimport React from "react"\n\nimport Card from "../src/components/Card"\n\nexport default {\n  title: "Components/Card",\n  component: Card,\n} as Meta\n\nconst Component = Card\n\ntype ComponentProps = React.ComponentProps<typeof Component>\n\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />\n\nexport const Simple: Story<ComponentProps> = Template.bind({})\nSimple.args = {\n  children: "Card",\n  variant: "simple",\n  title: "Introduction to the role of AI",\n  bg: "#065853",\n  chapterNumber: 1,\n}\nexport const IllustrationCard: Story<ComponentProps> = Template.bind({})\nIllustrationCard.args = {\n  variant: "illustration",\n  title: "Sustainable Development as a Concept and in Politics",\n  bg: "#065853",\n  chapterNumber: 1,\n  open: true,\n  backgroundImage:\n    "http://project-331.local/api/v0/files/course/1e0c52c7-8cb9-4089-b1c3-c24fc0dd5ae4/images/xblEKRBdiD5b5PVizOnxvw8X7qzrJD.svg",\n}\n',locationsMap:{simple:{startLoc:{col:40,line:16},endLoc:{col:89,line:16},startBody:{col:40,line:16},endBody:{col:89,line:16}},"illustration-card":{startLoc:{col:40,line:16},endLoc:{col:89,line:16},startBody:{col:40,line:16},endBody:{col:89,line:16}}}}},title:"Components/Card",component:components_Card},Component=components_Card,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Simple=Template.bind({});Simple.args={children:"Card",variant:"simple",title:"Introduction to the role of AI",bg:"#065853",chapterNumber:1};const Card_stories_IllustrationCard=Template.bind({});Card_stories_IllustrationCard.args={variant:"illustration",title:"Sustainable Development as a Concept and in Politics",bg:"#065853",chapterNumber:1,open:!0,backgroundImage:"http://project-331.local/api/v0/files/course/1e0c52c7-8cb9-4089-b1c3-c24fc0dd5ae4/images/xblEKRBdiD5b5PVizOnxvw8X7qzrJD.svg"},Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Simple.parameters?.docs?.source}}},Card_stories_IllustrationCard.parameters={...Card_stories_IllustrationCard.parameters,docs:{...Card_stories_IllustrationCard.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Card_stories_IllustrationCard.parameters?.docs?.source}}};const __namedExportsOrder=["Simple","IllustrationCard"]},"./src/styles/respond.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>respondToOrLarger});const mediaQuery=minWidth=>`@media (min-width: ${minWidth}rem)`,respondToOrLarger={xxxs:mediaQuery(2),xxs:mediaQuery(25),xs:mediaQuery(30),sm:mediaQuery(36),md:mediaQuery(48),lg:mediaQuery(62),xl:mediaQuery(75),xxl:mediaQuery(87.5),xxxl:mediaQuery(100),xxxxl:mediaQuery(125),xxxxxl:mediaQuery(150)}}}]);
//# sourceMappingURL=Card-stories.896177fa.iframe.bundle.js.map