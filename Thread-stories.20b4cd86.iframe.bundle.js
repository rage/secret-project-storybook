"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[3661],{"./stories/Thread.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _src_components_Forum_Thread__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Forum/Thread.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport Thread from "../src/components/Forum/Thread";\nexport default ({\n  title: "Components/Forum/Thread",\n  component: Thread\n} as Meta);\nconst Component = Thread;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Primary: Story<ComponentProps> = Template.bind({});\nPrimary.args = {\n  children: "Thread"\n};\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{primary:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/Forum/Thread",component:_src_components_Forum_Thread__WEBPACK_IMPORTED_MODULE_1__.Z},Component=_src_components_Forum_Thread__WEBPACK_IMPORTED_MODULE_1__.Z,Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={children:"Thread"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/Forum/Thread.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_i18next__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),_InputFields_TextAreaField__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/InputFields/TextAreaField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Wrapper=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.div`
  width: 100%;
  height: auto;
`,Header=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 1.6rem 2rem;

  h2 {
    align-self: end;
  }
`,Content=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.div`
  padding: 0 2rem;
`,Text=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.p`
  font-size: 20px;
  line-height: 140%;
  font-weight: 500;
  padding-bottom: 0rem;
`,Footer=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0 3rem 0;
  align-items: center;
`,Author=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.div`
  display: flex;

  span {
    margin-right: 10px;
    color: #535a66;
    font-size: 20px;
    align-self: center;
  }
`,ActionTab=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.div`
  display: flex;
`,ChatIcon=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.div`
  display: flex;
`,PlaceholderAvatar=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.div`
  background: #f3f3f3;
  border-radius: 100%;
  height: 35px;
  width: 35px;
  margin-right: 10px;
`,PlaceholderIcon=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.div`
  background: #f3f3f3;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  margin-right: 10px;
`,StyledReplyIcon=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.div`
  display: flex;
  margin: 0 1.5rem;
  cursor: pointer;

  span {
    color: #535a66;
  }
`,StyledReportIcon=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.span`
  color: #b66757;
`,TimeLabel=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.span`
  color: #535a66;
`,StyledButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.input`
  display: flex;
  border: none;
  align-self: end;
  padding: 0.5rem 2rem;
  font-size: 18px;
  color: #313947;
  margin: 1rem 0;
`,Thread=props=>{const{state:{items}}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[GetThread(props),items?.map((item=>GetNestedThread(item)))]})};Thread.displayName="Thread";const GetThread=props=>{const{t}=(0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.$G)(),{state,author,handleReply,handleClick,clicked,selectedId}=props,{id,text,time}=state;return text&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Wrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Header,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Author,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlaceholderAvatar,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:author})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TimeLabel,{children:time})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Text,{children:text}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Footer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ActionTab,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlaceholderIcon,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlaceholderIcon,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlaceholderIcon,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledReplyIcon,{onClick:handleClick,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlaceholderIcon,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{id,children:t("reply")})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledReportIcon,{children:t("report")})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ChatIcon,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlaceholderIcon,{})})]}),clicked&&selectedId===id&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form",{onSubmit:handleReply,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_InputFields_TextAreaField__WEBPACK_IMPORTED_MODULE_4__.Z,{name:"reply",placeholder:t("leave-a-comment"),onChange:()=>null}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledButton,{type:"submit",name:"submit",value:t("reply")})]})]})]},text)},GetNestedThread=item=>{const{t}=(0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.$G)(),{text,time,author}=item;return text&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Wrapper,{className:_emotion_css__WEBPACK_IMPORTED_MODULE_0__.iv`
          padding-left: 40px;
        `,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Header,{className:_emotion_css__WEBPACK_IMPORTED_MODULE_0__.iv`
            padding-top: 0 !important;
          `,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Author,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlaceholderAvatar,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:author})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TimeLabel,{children:time})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Text,{children:text}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Footer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ActionTab,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlaceholderIcon,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlaceholderIcon,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlaceholderIcon,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledReportIcon,{children:t("report")})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ChatIcon,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlaceholderIcon,{})})]})]})]},text)},__WEBPACK_DEFAULT_EXPORT__=Thread;try{Thread.displayName="Thread",Thread.__docgenInfo={description:"",displayName:"Thread",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"Thread"}},author:{defaultValue:null,description:"",name:"author",required:!0,type:{name:"string"}},handleReply:{defaultValue:null,description:"",name:"handleReply",required:!1,type:{name:"((e: SyntheticEvent<Element, Event>) => void)"}},clicked:{defaultValue:null,description:"",name:"clicked",required:!1,type:{name:"boolean"}},selectedId:{defaultValue:null,description:"",name:"selectedId",required:!1,type:{name:"string"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!1,type:{name:"((event: MouseEvent<HTMLInputElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Forum/Thread.tsx#Thread"]={docgenInfo:Thread.__docgenInfo,name:"Thread",path:"src/components/Forum/Thread.tsx#Thread"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/InputFields/TextAreaField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function updateHeight(ref){ref.current&&(ref.current.style.height="auto",ref.current.style.height=`${ref.current.scrollHeight+5}px`)}const TextAreaField=({onChange,className,autoResize,register,...rest})=>{const textareaRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{autoResize&&textareaRef.current&&updateHeight(textareaRef)}),[rest.value,autoResize]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(_emotion_css__WEBPACK_IMPORTED_MODULE_0__.iv`
          margin-bottom: 1rem;

          label {
            display: grid;

            textarea {
              background: #fcfcfc;
              border: 1.6px solid #dedede;
              padding: 10px 12px;
            }

            span {
              color: #333;
              font-size: 14px;
              font-weight: 500;
              margin-bottom: 0.2rem;
            }
          }
        `,className),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:rest.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea",{ref:textareaRef,onChange:({target:{value,name}})=>{onChange&&onChange(value,name),autoResize&&updateHeight(textareaRef)},...register,defaultValue:rest.defaultValue,...rest})]})})};TextAreaField.displayName="TextAreaField";const __WEBPACK_DEFAULT_EXPORT__=TextAreaField;try{TextAreaField.displayName="TextAreaField",TextAreaField.__docgenInfo={description:"",displayName:"TextAreaField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},maxlength:{defaultValue:null,description:"",name:"maxlength",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string, name?: string) => void)"}},autoResize:{defaultValue:null,description:"",name:"autoResize",required:!1,type:{name:"boolean"}},register:{defaultValue:null,description:"",name:"register",required:!1,type:{name:"UseFormRegisterReturn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputFields/TextAreaField.tsx#TextAreaField"]={docgenInfo:TextAreaField.__docgenInfo,name:"TextAreaField",path:"src/components/InputFields/TextAreaField.tsx#TextAreaField"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Thread-stories.20b4cd86.iframe.bundle.js.map