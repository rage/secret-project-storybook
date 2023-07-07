"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[7094],{"./stories/CourseProgress.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProgressBar:()=>ProgressBar,ProgressCircle:()=>ProgressCircle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _src_components_CourseProgress_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CourseProgress/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport CourseProgress from "../src/components/CourseProgress/index";\nexport default ({\n  title: "Components/CourseProgress",\n  component: CourseProgress\n} as Meta);\nconst Component = CourseProgress;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const ProgressCircle: Story<ComponentProps> = Template.bind({});\nProgressCircle.args = {\n  children: "CourseProgress",\n  variant: "circle"\n};\nexport const ProgressBar: Story<ComponentProps> = Template.bind({});\nProgressBar.args = {\n  children: "CourseProgress",\n  variant: "bar"\n};\nProgressCircle.parameters = {\n  ...ProgressCircle.parameters,\n  docs: {\n    ...ProgressCircle.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...ProgressCircle.parameters?.docs?.source\n    }\n  }\n};\nProgressBar.parameters = {\n  ...ProgressBar.parameters,\n  docs: {\n    ...ProgressBar.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...ProgressBar.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{"progress-circle":{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}},"progress-bar":{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/CourseProgress",component:_src_components_CourseProgress_index__WEBPACK_IMPORTED_MODULE_1__.Z},Component=_src_components_CourseProgress_index__WEBPACK_IMPORTED_MODULE_1__.Z,Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component,{...args});Template.displayName="Template";const ProgressCircle=Template.bind({});ProgressCircle.args={children:"CourseProgress",variant:"circle"};const ProgressBar=Template.bind({});ProgressBar.args={children:"CourseProgress",variant:"bar"},ProgressCircle.parameters={...ProgressCircle.parameters,docs:{...ProgressCircle.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...ProgressCircle.parameters?.docs?.source}}},ProgressBar.parameters={...ProgressBar.parameters,docs:{...ProgressBar.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...ProgressBar.parameters?.docs?.source}}};const __namedExportsOrder=["ProgressCircle","ProgressBar"]},"./src/components/CourseProgress/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_CourseProgress});var react=__webpack_require__("./node_modules/react/index.js"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),react_spring_modern=__webpack_require__("./node_modules/react-spring/dist/react-spring.modern.mjs"),styles=__webpack_require__("./src/styles/index.ts"),respond=__webpack_require__("./src/styles/respond.ts"),constants=__webpack_require__("./src/utils/constants.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledSVG=emotion_styled_browser_esm.Z.div`
  position: relative;
  width: 100%;
  text-align: center;
  height: auto;

  svg {
    margin: 0 auto;
    width: 16rem;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;

    ${respond.L.sm} {
      width: 25rem;
    }
  }

  svg circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: #b4cdcb;
    stroke-width: 40px;
    transition: stroke-dashoffset 0.35s;
    transform: rotate(0deg);
  }

  svg circle:nth-child(2) {
    stroke: #b4cdcb;
  }

  svg circle:nth-child(3) {
    stroke: #1f6964;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    line-height: 1.1;
    font-weight: 600;
    opacity: 0.9;
    font-family: ${styles.$O};
    ${respond.L.sm} {
      font-size: 3rem;
    }
    span {
      opacity: 0.4;
    }
  }

  .points {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 600;
    opacity: 0.5;
    font-family: ${styles.Qj};

    @media (max-width: 767.98px) {
      font-size: 1rem;
    }
  }
`,CircularProgress=({label,given,max,required})=>{const[willAnimate,setWillAnimate]=(0,react.useState)(!1),{t}=(0,es.$G)(),givenScore=given??0,maximum=max??0,circumference=2*Math.PI*160,receivedPointsStrokeDashOffset=(1-givenScore/maximum)*circumference,requiredForCompletionStrokeDashOffset=(1-(required&&required>0&&max&&max>0?required/max:0))*circumference;return(0,react.useLayoutEffect)((()=>{const onScroll=()=>{window.scrollY+window.innerHeight>1700&&setWillAnimate(!0)};return window.addEventListener("scroll",onScroll),()=>window.removeEventListener("scroll",onScroll)}),[]),(0,react_spring_modern.q_)({number:willAnimate?givenScore:0,config:{duration:1e3}}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h2",{className:(0,emotion_css_esm.cx)(constants.tZ,emotion_css_esm.iv`
            padding-bottom: 14px;
            font-weight: 500;
            font-size: 1.8rem;
            border-bottom: 3px solid #e2e4e6;
            color: ${styles.wE.colors.green[700]};
          `),children:label}),(0,jsx_runtime.jsxs)(StyledSVG,{children:[(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"497",height:"497",viewBox:"0 0 497 497",children:(0,jsx_runtime.jsxs)("g",{id:"Group_11",transform:"translate(-712 -7629)",children:[(0,jsx_runtime.jsxs)("g",{id:"Ellipse_2",transform:"translate(712 7629)",fill:"#edf2f4",children:[(0,jsx_runtime.jsx)("path",{d:"M 248.5 496 C 231.7068176269531 496 214.9244384765625 494.3082580566406 198.6190643310547 490.9716796875 C 182.7286224365234 487.7200012207031 167.0982513427734 482.8680725097656 152.1621246337891 476.5506286621094 C 137.4969329833984 470.3478088378906 123.3523101806641 462.6703186035156 110.1211242675781 453.7315063476563 C 97.01531219482422 444.8773803710938 84.69118499755859 434.7090759277344 73.49106597900391 423.5089416503906 C 62.29093933105469 412.3088073730469 52.12262344360352 399.9846801757813 43.26850128173828 386.8788757324219 C 34.32968902587891 373.6476745605469 26.65218734741211 359.5030517578125 20.44937515258789 344.8378601074219 C 14.13193702697754 329.9017639160156 9.279999732971191 314.2713623046875 6.028312683105469 298.3809509277344 C 2.691750049591064 282.0755615234375 1 265.2931823730469 1 248.5 C 1 231.7068176269531 2.691750049591064 214.9244384765625 6.028312683105469 198.6190643310547 C 9.279999732971191 182.7286224365234 14.13193702697754 167.0982513427734 20.44937515258789 152.1621246337891 C 26.65218734741211 137.4969329833984 34.32968902587891 123.3523101806641 43.26850128173828 110.1211242675781 C 52.12262344360352 97.01531219482422 62.29093933105469 84.69118499755859 73.49106597900391 73.49106597900391 C 84.69118499755859 62.29093933105469 97.01531219482422 52.12262344360352 110.1211242675781 43.26850128173828 C 123.3523101806641 34.32968902587891 137.4969329833984 26.65218734741211 152.1621246337891 20.44937515258789 C 167.0982513427734 14.13193702697754 182.7286224365234 9.279999732971191 198.6190643310547 6.028312683105469 C 214.9244384765625 2.691750049591064 231.7068176269531 1 248.5 1 C 265.2931823730469 1 282.0755615234375 2.691750049591064 298.3809509277344 6.028312683105469 C 314.2713623046875 9.279999732971191 329.9017639160156 14.13193702697754 344.8378601074219 20.44937515258789 C 359.5030517578125 26.65218734741211 373.6476745605469 34.32968902587891 386.8788757324219 43.26850128173828 C 399.9846801757813 52.12262344360352 412.3088073730469 62.29093933105469 423.5089416503906 73.49106597900391 C 434.7090759277344 84.69118499755859 444.8773803710938 97.01531219482422 453.7315063476563 110.1211242675781 C 462.6703186035156 123.3523101806641 470.3478088378906 137.4969329833984 476.5506286621094 152.1621246337891 C 482.8680725097656 167.0982513427734 487.7200012207031 182.7286224365234 490.9716796875 198.6190643310547 C 494.3082580566406 214.9244384765625 496 231.7068176269531 496 248.5 C 496 265.2931823730469 494.3082580566406 282.0755615234375 490.9716796875 298.3809509277344 C 487.7200012207031 314.2713623046875 482.8680725097656 329.9017639160156 476.5506286621094 344.8378601074219 C 470.3478088378906 359.5030517578125 462.6703186035156 373.6476745605469 453.7315063476563 386.8788757324219 C 444.8773803710938 399.9846801757813 434.7090759277344 412.3088073730469 423.5089416503906 423.5089416503906 C 412.3088073730469 434.7090759277344 399.9846801757813 444.8773803710938 386.8788757324219 453.7315063476563 C 373.6476745605469 462.6703186035156 359.5030517578125 470.3478088378906 344.8378601074219 476.5506286621094 C 329.9017639160156 482.8680725097656 314.2713623046875 487.7200012207031 298.3809509277344 490.9716796875 C 282.0755615234375 494.3082580566406 265.2931823730469 496 248.5 496 Z",stroke:"none"}),(0,jsx_runtime.jsx)("path",{d:"M 248.5 2 C 231.7739868164063 2 215.0590515136719 3.6849365234375 198.8195495605469 7.008056640625 C 182.9937438964844 10.24642944335938 167.427001953125 15.07861328125 152.5516967773438 21.370361328125 C 137.9460144042969 27.54806518554688 123.8586120605469 35.19442749023438 110.6808776855469 44.09713745117188 C 97.62786865234375 52.91561889648438 85.35330200195313 63.04306030273438 74.19818115234375 74.19818115234375 C 63.04306030273438 85.35330200195313 52.91561889648438 97.62786865234375 44.09713745117188 110.6808776855469 C 35.19442749023438 123.8586120605469 27.54806518554688 137.9460144042969 21.370361328125 152.5516967773438 C 15.07861328125 167.427001953125 10.24642944335938 182.9937438964844 7.008056640625 198.8195495605469 C 3.6849365234375 215.0590515136719 2 231.7739868164063 2 248.5 C 2 265.2260131835938 3.6849365234375 281.94091796875 7.008056640625 298.180419921875 C 10.24642944335938 314.0062561035156 15.07861328125 329.572998046875 21.370361328125 344.4483032226563 C 27.54806518554688 359.0540161132813 35.19442749023438 373.141357421875 44.09713745117188 386.3191223144531 C 52.91561889648438 399.3721313476563 63.04306030273438 411.6466979980469 74.19818115234375 422.8018188476563 C 85.35330200195313 433.9569396972656 97.62786865234375 444.0843811035156 110.6808776855469 452.9028625488281 C 123.8586120605469 461.8055725097656 137.9460144042969 469.4519348144531 152.5516967773438 475.629638671875 C 167.427001953125 481.92138671875 182.9937438964844 486.7535705566406 198.8195495605469 489.991943359375 C 215.0590515136719 493.3150634765625 231.7739868164063 495 248.5 495 C 265.2260131835938 495 281.94091796875 493.3150634765625 298.180419921875 489.991943359375 C 314.0062561035156 486.7535705566406 329.572998046875 481.92138671875 344.4483032226563 475.629638671875 C 359.0540161132813 469.4519348144531 373.141357421875 461.8055725097656 386.3191223144531 452.9028625488281 C 399.3721313476563 444.0843811035156 411.6466979980469 433.9569396972656 422.8018188476563 422.8018188476563 C 433.9569396972656 411.6466979980469 444.0843811035156 399.3721313476563 452.9028625488281 386.3191223144531 C 461.8055725097656 373.141357421875 469.4519348144531 359.0540161132813 475.629638671875 344.4483032226563 C 481.92138671875 329.572998046875 486.7535705566406 314.0062561035156 489.991943359375 298.180419921875 C 493.3150634765625 281.94091796875 495 265.2260131835938 495 248.5 C 495 231.7739868164063 493.3150634765625 215.0590515136719 489.991943359375 198.8195495605469 C 486.7535705566406 182.9937438964844 481.92138671875 167.427001953125 475.629638671875 152.5516967773438 C 469.4519348144531 137.9460144042969 461.8055725097656 123.8586120605469 452.9028625488281 110.6808776855469 C 444.0843811035156 97.62786865234375 433.9569396972656 85.35330200195313 422.8018188476563 74.19818115234375 C 411.6466979980469 63.04306030273438 399.3721313476563 52.91561889648438 386.3191223144531 44.09713745117188 C 373.141357421875 35.19442749023438 359.0540161132813 27.54806518554688 344.4483032226563 21.370361328125 C 329.572998046875 15.07861328125 314.0062561035156 10.24642944335938 298.180419921875 7.008056640625 C 281.94091796875 3.6849365234375 265.2260131835938 2 248.5 2 M 248.5 0 C 385.7427368164063 0 497 111.2572631835938 497 248.5 C 497 385.7427368164063 385.7427368164063 497 248.5 497 C 111.2572631835938 497 0 385.7427368164063 0 248.5 C 0 111.2572631835938 111.2572631835938 0 248.5 0 Z",stroke:"none",fill:"#edf2f4"})]}),(0,jsx_runtime.jsxs)("g",{id:"Ellipse_1",transform:"translate(801 7718)",fill:"#fff",stroke:`${styles.wE.colors.green[700]}`,strokeLinecap:"round",children:[(0,jsx_runtime.jsx)("circle",{cx:"160",cy:"160",r:"160"}),(0,jsx_runtime.jsx)("circle",{cx:160,cy:160,r:160,className:emotion_css_esm.iv`
                  stroke-dasharray: ${circumference} ${2*circumference};
                  stroke-dashoffset: ${requiredForCompletionStrokeDashOffset};
                `}),(0,jsx_runtime.jsx)("circle",{cx:160,cy:160,r:160,className:emotion_css_esm.iv`
                  stroke-dasharray: ${circumference} ${2*circumference};
                  stroke-dashoffset: ${receivedPointsStrokeDashOffset};
                `})]})]})}),(0,jsx_runtime.jsxs)("p",{children:[givenScore,"/",(0,jsx_runtime.jsx)("span",{children:maximum}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("span",{className:"points",children:t("points")})]})]})]})},CourseProgress_CircularProgress=CircularProgress;try{CircularProgress.displayName="CircularProgress",CircularProgress.__docgenInfo={description:"",displayName:"CircularProgress",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:'"circle"'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number | null"}},given:{defaultValue:null,description:"",name:"given",required:!0,type:{name:"number | null"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CourseProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:CircularProgress.__docgenInfo,name:"CircularProgress",path:"src/components/CourseProgress/CircularProgress.tsx#CircularProgress"})}catch(__react_docgen_typescript_loader_error){}const LinearProgress=emotion_styled_browser_esm.Z.div`
  display: flex;
  background: ${styles.wE.colors.green[100]};
  border-radius: 100px;
  overflow: hidden;
  align-items: center;
  height: ${({height})=>"small"===height?"16px":"20px"};
  width: 290px;

  ${respond.L.sm} {
    height: ${({height})=>"small"===height?"16px":"28px"};
    /* width: 500px; */
    width: 100%;
  }
`,LinearProgressFill=emotion_styled_browser_esm.Z.div`
  height: ${({height})=>"small"===height?"16px":"20px"};
  position: absolute;
  top: 0;
  left: 0;
  transition: 1.5s ease-in-out;
  border-radius: 50px;
  width: ${props=>props.percentage}%;
  background: ${props=>props.light?styles.wE.colors.yellow[200]:styles.wE.colors.green[600]};
  justify-content: end;

  ${respond.L.sm} {
    height: ${({height})=>"small"===height?"16px":"28px"};
  }
`,Label=emotion_styled_browser_esm.Z.div`
  min-width: 100%;
  font-weight: 500;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;
  padding-left: 10px;

  span:first-of-type {
    font-size: 0.8em;
    font-weight: 500;
    font-family: ${styles.$O};
    color: #313947;
  }
  ${respond.L.sm} {
    span:first-of-type {
      font-size: 1.1em;
    }
  }
`,ProgressBar=({showAsPercentage=!1,exercisesAttempted,exercisesTotal,height="medium",label,required})=>{const percentage=100*((exercisesTotal??0)>0?(exercisesAttempted??0)/(exercisesTotal??0):0),requiredPercentage=100*((exercisesTotal??0)>0?(required??0)/(exercisesTotal??0):0),[visualPercentage,setVisualPercentage]=(0,react.useState)(0);return(0,react.useEffect)((()=>{setTimeout((()=>{setVisualPercentage(percentage)}),100)}),[percentage]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:emotion_css_esm.iv`
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-transform: lowercase;
        `,children:[label&&(0,jsx_runtime.jsx)(Label,{children:(0,jsx_runtime.jsx)("span",{children:showAsPercentage?`${percentage}% ${label}`:`${exercisesAttempted??0} / ${exercisesTotal??0} ${label}`})}),(0,jsx_runtime.jsx)(LinearProgress,{height,children:(0,jsx_runtime.jsxs)("div",{className:emotion_css_esm.iv`
              width: 100%;
              position: relative;
              height: inherit;
            `,children:[(0,jsx_runtime.jsx)(LinearProgressFill,{light:!0,percentage:requiredPercentage,height}),(0,jsx_runtime.jsx)(LinearProgressFill,{percentage:visualPercentage,height})]})})]})})},CourseProgress_ProgressBar=ProgressBar;try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:'"bar"'}},showAsPercentage:{defaultValue:{value:"false"},description:"",name:"showAsPercentage",required:!1,type:{name:"boolean"}},exercisesAttempted:{defaultValue:null,description:"",name:"exercisesAttempted",required:!0,type:{name:"number | null"}},exercisesTotal:{defaultValue:null,description:"",name:"exercisesTotal",required:!0,type:{name:"number | null"}},height:{defaultValue:{value:"medium"},description:"",name:"height",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CourseProgress/ProgressBar.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"src/components/CourseProgress/ProgressBar.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}const components_CourseProgress=props=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"circle"===props.variant?(0,jsx_runtime.jsx)(CourseProgress_CircularProgress,{...props}):(0,jsx_runtime.jsx)(CourseProgress_ProgressBar,{...props})});try{CourseProgress.displayName="CourseProgress",CourseProgress.__docgenInfo={description:"",displayName:"CourseProgress",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"circle"'},{value:'"bar"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'}]}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number | null"}},given:{defaultValue:null,description:"",name:"given",required:!0,type:{name:"number | null"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"number"}},showAsPercentage:{defaultValue:null,description:"",name:"showAsPercentage",required:!1,type:{name:"boolean"}},exercisesAttempted:{defaultValue:null,description:"",name:"exercisesAttempted",required:!0,type:{name:"number | null"}},exercisesTotal:{defaultValue:null,description:"",name:"exercisesTotal",required:!0,type:{name:"number | null"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CourseProgress/index.tsx#CourseProgress"]={docgenInfo:CourseProgress.__docgenInfo,name:"CourseProgress",path:"src/components/CourseProgress/index.tsx#CourseProgress"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/respond.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>respondToOrLarger});const mediaQuery=minWidth=>`@media (min-width: ${minWidth}rem)`,respondToOrLarger={xxxs:mediaQuery(2),xxs:mediaQuery(25),xs:mediaQuery(30),sm:mediaQuery(36),md:mediaQuery(48),lg:mediaQuery(62),xl:mediaQuery(75),xxl:mediaQuery(87.5),xxxl:mediaQuery(100),xxxxl:mediaQuery(125),xxxxxl:mediaQuery(150)}},"./src/utils/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PQ:()=>HIDE_TEXT_IN_SYSTEM_TESTS_EVENT,dK:()=>MARGIN_BETWEEN_NAVBAR_AND_CONTENT,tT:()=>SHOW_TEXT_IN_SYSTEM_TESTS_EVENT,tZ:()=>INCLUDE_THIS_HEADING_IN_HEADINGS_NAVIGATION_CLASS,wU:()=>SPINNER_CLASS});const HIDE_TEXT_IN_SYSTEM_TESTS_EVENT="hide-text-in-system-tests",SHOW_TEXT_IN_SYSTEM_TESTS_EVENT="show-text-in-system-tests",MARGIN_BETWEEN_NAVBAR_AND_CONTENT="2rem",INCLUDE_THIS_HEADING_IN_HEADINGS_NAVIGATION_CLASS="include-this-heading-in-headings-navigation",SPINNER_CLASS="loading-spinner-component"}}]);
//# sourceMappingURL=CourseProgress-stories.01ec21d5.iframe.bundle.js.map