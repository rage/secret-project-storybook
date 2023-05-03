"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[5478],{"./src/components/ErrorBanner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_ErrorBanner});var emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),es=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-i18next/dist/es/index.js"));function isErrorData(obj){return(null!==obj&&"object"==typeof obj||"function"==typeof obj)&&"string"==typeof obj.block_id}var styles=__webpack_require__("./src/styles/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BannerWrapper=emotion_styled_browser_esm.Z.div`
  background: #f1f1f1;
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: block;
  border-left: 4px solid #da4453;
`,Content=emotion_styled_browser_esm.Z.div`
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
`,Text=emotion_styled_browser_esm.Z.div`
  padding: 0 2rem;
`,DetailTag=emotion_styled_browser_esm.Z.div`
  background: #e1e1e1;
  details {
    padding: 0 2rem;
  }

  details[open] summary ~ * {
    color: ${styles.wE.colors.gray[700]};
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
    color: ${styles.wE.colors.gray[700]};
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
`,ErrorBanner=props=>{const{t}=(0,es.$G)(),{error:unknownError}=props,error=unknownError;if("string"==typeof error)return(0,jsx_runtime.jsx)(BannerWrapper,{children:(0,jsx_runtime.jsx)(Content,{children:(0,jsx_runtime.jsxs)(Text,{children:[(0,jsx_runtime.jsx)("h2",{children:t("error-title")}),(0,jsx_runtime.jsx)("p",{children:error})]})})});if("object"==typeof error&&null!==error){if(function isErrorResponse(obj){const typedObj=obj;return(null!==typedObj&&"object"==typeof typedObj||"function"==typeof typedObj)&&"string"==typeof typedObj.title&&"string"==typeof typedObj.message&&(null===typedObj.source||"string"==typeof typedObj.source)&&(null===typedObj.data||isErrorData(typedObj.data))}(error.data)){const data=error.data,errorData=data.data;let linkComponent=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{});if(isErrorData(errorData)){const url=window.location.href.replace(location.hash,"");linkComponent=(0,jsx_runtime.jsx)("a",{href:`${url}#${errorData.block_id}`,children:"Go to error"})}return(0,jsx_runtime.jsx)(BannerWrapper,{children:(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsxs)(Text,{children:[(0,jsx_runtime.jsxs)("h2",{children:[t("error-title")," ",error.status,": ",data.title]}),(0,jsx_runtime.jsx)("p",{children:data.message})]}),(0,jsx_runtime.jsx)(DetailTag,{children:data.source&&(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:t("show-error-source")}),(0,jsx_runtime.jsx)("ul",{children:(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("pre",{children:data.source})})})]})}),data.data&&(0,jsx_runtime.jsx)(Text,{children:linkComponent})]})})}if(error.isAxiosError){const axiosError=error,responseMessage=axiosError.response?.data?.message;return(0,jsx_runtime.jsx)(BannerWrapper,{children:(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsxs)(Text,{children:[(0,jsx_runtime.jsxs)("h2",{children:[t("error-title"),": ",axiosError.message]}),responseMessage&&(0,jsx_runtime.jsx)("p",{children:responseMessage})]}),(0,jsx_runtime.jsx)(DetailTag,{children:Boolean(axiosError.response?.data)&&(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:t("show-error-source")}),(0,jsx_runtime.jsx)("ul",{children:(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("pre",{children:JSON.stringify(axiosError.response?.data,void 0,2)})})})]})})]})})}if(void 0!==error.status&&void 0!==error.statusText&&"object"==typeof error.request&&void 0!==error.request.responseURL)return(0,jsx_runtime.jsx)(BannerWrapper,{children:(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsxs)(Text,{children:[(0,jsx_runtime.jsxs)("h2",{children:[t("error-title")," ",error.status,": ",error.statusText]}),(0,jsx_runtime.jsx)("p",{children:error.request.responseURL})]}),(0,jsx_runtime.jsx)(DetailTag,{children:error.data&&(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:t("show-error-source")}),(0,jsx_runtime.jsx)("ul",{children:(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("pre",{children:JSON.stringify(error.data,void 0,2)})})})]})})]})});if(error instanceof Error)return(0,jsx_runtime.jsx)(BannerWrapper,{children:(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsx)(Text,{children:(0,jsx_runtime.jsx)("h2",{children:t("error-title")})}),(0,jsx_runtime.jsx)(DetailTag,{children:(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:t("show-error-source")}),(0,jsx_runtime.jsx)("ul",{children:(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsxs)("pre",{children:[error.toString(),(0,jsx_runtime.jsx)("br",{}),error.stack]})})})]})})]})})}return(0,jsx_runtime.jsx)(BannerWrapper,{children:(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsx)(Text,{children:(0,jsx_runtime.jsx)("h2",{children:t("error-title")})}),(0,jsx_runtime.jsx)(DetailTag,{children:(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:t("show-error-source")}),(0,jsx_runtime.jsx)("ul",{children:(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("pre",{children:JSON.stringify(error,void 0,2)})})})]})})]})})};ErrorBanner.displayName="ErrorBanner";const components_ErrorBanner=ErrorBanner;try{ErrorBanner.displayName="ErrorBanner",ErrorBanner.__docgenInfo={description:"",displayName:"ErrorBanner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"link"'},{value:'"text"'},{value:'"readOnly"'}]}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"unknown"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ErrorBanner.tsx#ErrorBanner"]={docgenInfo:ErrorBanner.__docgenInfo,name:"ErrorBanner",path:"src/components/ErrorBanner.tsx#ErrorBanner"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=5478.d2982a3d.iframe.bundle.js.map