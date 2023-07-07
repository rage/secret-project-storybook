/*! For license information please see Spinner-stories.d95d9444.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[2920],{"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F4:()=>keyframes});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");var _emotion_serialize__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),__webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__.O)(args)}var keyframes=function keyframes(){var insertable=css.apply(void 0,arguments),name="animation-"+insertable.name;return{name,styles:"@keyframes "+name+"{"+insertable.styles+"}",anim:1,toString:function toString(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},"./stories/Spinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _src_components_Spinner__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Spinner.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport Spinner from "../src/components/Spinner";\nexport default ({\n  title: "Components/Spinner",\n  component: Spinner\n} as Meta);\nconst Component = Spinner;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Primary: Story<ComponentProps> = Template.bind({});\nPrimary.args = {\n  variant: "medium"\n};\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{primary:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/Spinner",component:_src_components_Spinner__WEBPACK_IMPORTED_MODULE_1__.Z},Component=_src_components_Spinner__WEBPACK_IMPORTED_MODULE_1__.Z,Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={variant:"medium"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/index.ts"),_utils_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const rotation=_emotion_react__WEBPACK_IMPORTED_MODULE_3__.F4`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`,fadeIn=_emotion_react__WEBPACK_IMPORTED_MODULE_3__.F4`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`,variantSizes={small:{width:"16px",height:"16px"},medium:{width:"30px",height:"30px"},large:{width:"42px",height:"42px"}},StyledSpinner=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  margin: ${props=>props.disableMargin?"0":"1rem"};
  width: ${props=>variantSizes[props.variant].width};
  height: ${props=>variantSizes[props.variant].height};
  border: 5px solid #f1f1f1;
  border-bottom-color: ${_styles__WEBPACK_IMPORTED_MODULE_1__.wE.colors.green[500]};
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
`,Spinner=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledSpinner,{className:_utils_constants__WEBPACK_IMPORTED_MODULE_4__.wU,...props});Spinner.displayName="Spinner";const __WEBPACK_DEFAULT_EXPORT__=Spinner;try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},disableMargin:{defaultValue:null,description:"",name:"disableMargin",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{PQ:()=>HIDE_TEXT_IN_SYSTEM_TESTS_EVENT,dK:()=>MARGIN_BETWEEN_NAVBAR_AND_CONTENT,tT:()=>SHOW_TEXT_IN_SYSTEM_TESTS_EVENT,tZ:()=>INCLUDE_THIS_HEADING_IN_HEADINGS_NAVIGATION_CLASS,wU:()=>SPINNER_CLASS});const HIDE_TEXT_IN_SYSTEM_TESTS_EVENT="hide-text-in-system-tests",SHOW_TEXT_IN_SYSTEM_TESTS_EVENT="show-text-in-system-tests",MARGIN_BETWEEN_NAVBAR_AND_CONTENT="2rem",INCLUDE_THIS_HEADING_IN_HEADINGS_NAVIGATION_CLASS="include-this-heading-in-headings-navigation",SPINNER_CLASS="loading-spinner-component"},"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(module,__unused_webpack_exports,__webpack_require__)=>{var reactIs=__webpack_require__("./node_modules/react-is/index.js"),REACT_STATICS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KNOWN_STATICS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},MEMO_STATICS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TYPE_STATICS={};function getStatics(component){return reactIs.isMemo(component)?MEMO_STATICS:TYPE_STATICS[component.$$typeof]||REACT_STATICS}TYPE_STATICS[reactIs.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TYPE_STATICS[reactIs.Memo]=MEMO_STATICS;var defineProperty=Object.defineProperty,getOwnPropertyNames=Object.getOwnPropertyNames,getOwnPropertySymbols=Object.getOwnPropertySymbols,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,getPrototypeOf=Object.getPrototypeOf,objectPrototype=Object.prototype;module.exports=function hoistNonReactStatics(targetComponent,sourceComponent,blacklist){if("string"!=typeof sourceComponent){if(objectPrototype){var inheritedComponent=getPrototypeOf(sourceComponent);inheritedComponent&&inheritedComponent!==objectPrototype&&hoistNonReactStatics(targetComponent,inheritedComponent,blacklist)}var keys=getOwnPropertyNames(sourceComponent);getOwnPropertySymbols&&(keys=keys.concat(getOwnPropertySymbols(sourceComponent)));for(var targetStatics=getStatics(targetComponent),sourceStatics=getStatics(sourceComponent),i=0;i<keys.length;++i){var key=keys[i];if(!(KNOWN_STATICS[key]||blacklist&&blacklist[key]||sourceStatics&&sourceStatics[key]||targetStatics&&targetStatics[key])){var descriptor=getOwnPropertyDescriptor(sourceComponent,key);try{defineProperty(targetComponent,key,descriptor)}catch(e){}}}}return targetComponent}},"./node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(a){if("object"==typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l,exports.ConcurrentMode=m,exports.ContextConsumer=k,exports.ContextProvider=h,exports.Element=c,exports.ForwardRef=n,exports.Fragment=e,exports.Lazy=t,exports.Memo=r,exports.Portal=d,exports.Profiler=g,exports.StrictMode=f,exports.Suspense=p,exports.isAsyncMode=function(a){return A(a)||z(a)===l},exports.isConcurrentMode=A,exports.isContextConsumer=function(a){return z(a)===k},exports.isContextProvider=function(a){return z(a)===h},exports.isElement=function(a){return"object"==typeof a&&null!==a&&a.$$typeof===c},exports.isForwardRef=function(a){return z(a)===n},exports.isFragment=function(a){return z(a)===e},exports.isLazy=function(a){return z(a)===t},exports.isMemo=function(a){return z(a)===r},exports.isPortal=function(a){return z(a)===d},exports.isProfiler=function(a){return z(a)===g},exports.isStrictMode=function(a){return z(a)===f},exports.isSuspense=function(a){return z(a)===p},exports.isValidElementType=function(a){return"string"==typeof a||"function"==typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"==typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)},exports.typeOf=z},"./node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react-is/cjs/react-is.production.min.js")}}]);
//# sourceMappingURL=Spinner-stories.d95d9444.iframe.bundle.js.map