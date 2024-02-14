"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[1840],{"./src/components/ErrorBanner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>components_ErrorBanner});var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js");function isErrorData(obj){return(null!==obj&&"object"==typeof obj||"function"==typeof obj)&&"string"==typeof obj.block_id}var styles=__webpack_require__("./src/styles/index.ts"),Spinner=__webpack_require__("./src/components/Spinner.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BannerWrapper=emotion_styled_browser_esm.c.div`
  background: #f1f1f1;
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: block;
  border-left: 4px solid #da4453;
`,Content=emotion_styled_browser_esm.c.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  max-width: 100%;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

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
`,Text=emotion_styled_browser_esm.c.div`
  padding: 0 2rem;
`,DetailTag=emotion_styled_browser_esm.c.div`
  background: #e1e1e1;
  details {
    padding: 0 2rem;
  }

  details[open] summary ~ * {
    color: ${styles.sn.colors.gray[700]};
  }

  details[open] > div {
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  details summary {
    padding: 1rem 0;
    position: relative;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: medium;
    list-style: none;
    color: ${styles.sn.colors.gray[700]};
    outline: 0;
    ::-webkit-details-marker {
      display: none;
    }
    &:hover {
      text-decoration: underline;
    }
  }

  details[open] > summary {
    color: #1c1c1c;
  }

  details[open] summary {
    opacity: 0.9;
  }

  ul {
    padding: 0;
    margin: 0;
    padding-bottom: 2rem;
  }

  ul li {
    font-size: 1.1rem;
    margin: 0 0 0.2rem;
    padding: 15px 30px;
    line-height: 1.7;
    list-style: none;
    background: #e3e3e3;
    border: 2px solid #c1c1c1;
    border-radius: 10px;
  }

  ul li pre {
    white-space: pre-line;
  }
`,ErrorBanner=props=>{const{t}=(0,es.Gy)(),{error:unknownError}=props,anyError=unknownError,[error,setError]=(0,react.useState)(void 0);if((0,react.useEffect)((()=>{if("object"==typeof anyError&&null!==anyError&&anyError.data instanceof Blob){anyError.data.text().then((text=>{try{const parsed=JSON.parse(text);setError({...anyError,data:parsed})}catch{setError({...anyError,data:text})}}))}else{if(void 0===anyError)throw new Error("Invalid input");setError(anyError)}}),[anyError]),void 0===error)return(0,jsx_runtime.jsx)(Spinner.c,{variant:"medium"});if("string"==typeof error)return(0,jsx_runtime.jsx)(BannerWrapper,{children:(0,jsx_runtime.jsx)(Content,{children:(0,jsx_runtime.jsxs)(Text,{children:[(0,jsx_runtime.jsx)("h2",{children:t("error-title")}),(0,jsx_runtime.jsx)("p",{children:error})]})})});if("object"==typeof error&&null!==error){if(function isErrorResponse(obj){const typedObj=obj;return(null!==typedObj&&"object"==typeof typedObj||"function"==typeof typedObj)&&"string"==typeof typedObj.title&&"string"==typeof typedObj.message&&(null===typedObj.source||"string"==typeof typedObj.source)&&(null===typedObj.data||isErrorData(typedObj.data))}(error.data)){const data=error.data,errorData=data.data;let linkComponent=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{});if(isErrorData(errorData)){const url=window.location.href.replace(location.hash,"");linkComponent=(0,jsx_runtime.jsx)("a",{href:`${url}#${errorData.block_id}`,children:"Go to error"})}return(0,jsx_runtime.jsx)(BannerWrapper,{children:(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsxs)(Text,{children:[(0,jsx_runtime.jsxs)("h2",{children:[t("error-title")," ",error.status,": ",data.title]}),(0,jsx_runtime.jsx)("p",{children:data.message})]}),(0,jsx_runtime.jsx)(DetailTag,{children:data.source&&(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:t("show-error-source")}),(0,jsx_runtime.jsx)("ul",{children:(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("pre",{children:data.source})})})]})}),data.data&&(0,jsx_runtime.jsx)(Text,{children:linkComponent})]})})}if(error.isAxiosError){const axiosError=error,responseMessage=axiosError.response?.data?.message;return(0,jsx_runtime.jsx)(BannerWrapper,{children:(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsxs)(Text,{children:[(0,jsx_runtime.jsxs)("h2",{children:[t("error-title"),": ",axiosError.message]}),responseMessage&&(0,jsx_runtime.jsx)("p",{children:responseMessage})]}),(0,jsx_runtime.jsx)(DetailTag,{children:Boolean(axiosError.response?.data)&&(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:t("show-error-source")}),(0,jsx_runtime.jsx)("ul",{children:(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("pre",{children:JSON.stringify(axiosError.response?.data,void 0,2)})})})]})})]})})}if(void 0!==error.status&&void 0!==error.statusText&&"object"==typeof error.request&&void 0!==error.request.responseURL)return(0,jsx_runtime.jsx)(BannerWrapper,{children:(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsxs)(Text,{children:[(0,jsx_runtime.jsxs)("h2",{children:[t("error-title")," ",error.status,": ",error.statusText]}),(0,jsx_runtime.jsx)("p",{children:error.request.responseURL})]}),(0,jsx_runtime.jsx)(DetailTag,{children:error.data&&(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:t("show-error-source")}),(0,jsx_runtime.jsx)("ul",{children:(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("pre",{children:JSON.stringify(error.data,void 0,2)})})})]})})]})});if(error instanceof Error)return(0,jsx_runtime.jsx)(BannerWrapper,{children:(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsx)(Text,{children:(0,jsx_runtime.jsxs)("h2",{children:[t("error-title"),error.message&&`: ${error.message}`]})}),(0,jsx_runtime.jsx)(DetailTag,{children:(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:t("show-error-source")}),(0,jsx_runtime.jsx)("ul",{children:(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsxs)("pre",{children:[error.toString(),(0,jsx_runtime.jsx)("br",{}),error.stack]})})})]})})]})})}return(0,jsx_runtime.jsx)(BannerWrapper,{children:(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsx)(Text,{children:(0,jsx_runtime.jsx)("h2",{children:t("error-title")})}),(0,jsx_runtime.jsx)(DetailTag,{children:(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:t("show-error-source")}),(0,jsx_runtime.jsx)("ul",{children:(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("pre",{children:JSON.stringify(error,void 0,2)})})})]})})]})})};ErrorBanner.displayName="ErrorBanner";const components_ErrorBanner=ErrorBanner;try{ErrorBanner.displayName="ErrorBanner",ErrorBanner.__docgenInfo={description:"",displayName:"ErrorBanner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"link"'},{value:'"text"'},{value:'"readOnly"'}]}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"unknown"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ErrorBanner.tsx#ErrorBanner"]={docgenInfo:ErrorBanner.__docgenInfo,name:"ErrorBanner",path:"src/components/ErrorBanner.tsx#ErrorBanner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/index.ts"),_utils_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const rotation=_emotion_react__WEBPACK_IMPORTED_MODULE_3__.xZ`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`,fadeIn=_emotion_react__WEBPACK_IMPORTED_MODULE_3__.xZ`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`,variantSizes={small:{width:"16px",height:"16px"},medium:{width:"30px",height:"30px"},large:{width:"42px",height:"42px"}},StyledSpinner=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.c.div`
  margin: ${props=>props.disableMargin?"0":"1rem"};
  width: ${props=>variantSizes[props.variant].width};
  height: ${props=>variantSizes[props.variant].height};
  border: 5px solid #f1f1f1;
  border-bottom-color: ${_styles__WEBPACK_IMPORTED_MODULE_1__.sn.colors.green[500]};
  border-radius: 50%;
  display: inline-block;
  /** Showing the spinner is delayed because showing a spinner for a moment on fast transitions makes the application to feel like more slow than it is **/
  opacity: 0;
  animation-name: ${rotation}, ${fadeIn};
  animation-duration: 1s, 600ms;
  animation-timing-function: linear, ease;
  animation-iteration-count: infinite, 1;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
`,Spinner=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledSpinner,{className:_utils_constants__WEBPACK_IMPORTED_MODULE_4__.Wr,...props});Spinner.displayName="Spinner";const __WEBPACK_DEFAULT_EXPORT__=Spinner;try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},disableMargin:{defaultValue:null,description:"",name:"disableMargin",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>INCLUDE_THIS_HEADING_IN_HEADINGS_NAVIGATION_CLASS,S4:()=>HIDE_TEXT_IN_SYSTEM_TESTS_EVENT,Sc:()=>MARGIN_BETWEEN_NAVBAR_AND_CONTENT,Wr:()=>SPINNER_CLASS,i4:()=>SHOW_TEXT_IN_SYSTEM_TESTS_EVENT});const HIDE_TEXT_IN_SYSTEM_TESTS_EVENT="hide-text-in-system-tests",SHOW_TEXT_IN_SYSTEM_TESTS_EVENT="show-text-in-system-tests",MARGIN_BETWEEN_NAVBAR_AND_CONTENT="2rem",INCLUDE_THIS_HEADING_IN_HEADINGS_NAVIGATION_CLASS="include-this-heading-in-headings-navigation",SPINNER_CLASS="loading-spinner-component"}}]);
//# sourceMappingURL=1840.fc396da5.iframe.bundle.js.map