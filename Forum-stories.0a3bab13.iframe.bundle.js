"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[6467],{"./stories/Forum.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Forum_stories});var react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),RadioButton=__webpack_require__("./src/components/InputFields/RadioButton.tsx"),TextAreaField=__webpack_require__("./src/components/InputFields/TextAreaField.tsx"),Thread=__webpack_require__("./src/components/Forum/Thread.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const authorObject={id:"1001",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has\nbeen the industry's standard dummy text ever since the 1500s, when an unknown printer took\na galley of type and scrambled it to make a type specimen book. It has survived not only\nfive centuries, but also the leap into electronic typesetting, remaining essentially\nunchanged.",time:"12hr ago"},Wrapper=emotion_styled_browser_esm.Z.div`
  background: #fff;
  width: 60%;
  height: auto;
  border: 2px solid rgba(205, 205, 205, 0.8);
  border-radius: 4px;
`,Head=emotion_styled_browser_esm.Z.div`
  border-bottom: 1px solid rgba(205, 205, 205, 0.6);
`,CommentSection=emotion_styled_browser_esm.Z.form`
  width: 100%;
  height: auto;
  border-top: 1px solid rgba(205, 205, 205, 0.6);
  padding: 2rem;
`,Label=emotion_styled_browser_esm.Z.span`
  color: #333;
  opacity: 0.5;
  font-size: 16px;
`,RadioSection=emotion_styled_browser_esm.Z.div`
  display: flex;
  margin-top: 0.2rem;
  margin-bottom: 1rem;
`,StyledButton=emotion_styled_browser_esm.Z.input`
  display: flex;
  border: none;
  align-self: end;
  padding: 0.5rem 2rem;
  font-size: 18px;
  color: #313947;
  margin-top: 1.5rem;
`,StRadio=(0,emotion_styled_browser_esm.Z)(RadioButton.Z)`
  margin-right: 1rem !important;
`,Forum=()=>{const[state,setState]=(0,react.useState)([]),[visibility,setVisibility]=(0,react.useState)("hide"),[clicked,setClicked]=(0,react.useState)(!1),selectedId=(0,react.useRef)(""),current=new Date,{t}=(0,es.$G)(),handleClick=event=>{setClicked(!clicked);const target=event.target;selectedId.current=target.id},handleReply=e=>{e.preventDefault();const target=e.target,reply=target.reply.value;setState((prevState=>prevState.map((item=>{const{items}=item;return item.id===selectedId.current?{...item,items:[{id:current.toLocaleString(),text:reply,time:current.toLocaleString(),author:"Anonymous"},...items||[]]}:item})))),setClicked(!1),target.reply.value=""};return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(Head,{children:(0,jsx_runtime.jsx)(Thread.Z,{state:authorObject,author:"Henrik Ngyren"})}),state?.map((obj=>(0,jsx_runtime.jsx)(Thread.Z,{state:obj,author:"hide"===visibility?"Anonymous":"Sebastien",handleReply,handleClick,selectedId:selectedId.current,clicked},obj.id))),(0,jsx_runtime.jsxs)(CommentSection,{onSubmit:e=>{e.preventDefault();const target=e.target,comment=target.comment.value,visible=target.visibility.value;setState((state=>[...state,{id:String(current.toLocaleTimeString()),text:comment,time:current.toLocaleString(),item:[]}])),setVisibility(visible),target.comment.value=""},children:[(0,jsx_runtime.jsx)(Label,{children:"Select name visibility: "}),(0,jsx_runtime.jsxs)(RadioSection,{children:[(0,jsx_runtime.jsx)(StRadio,{name:"visibility",label:"show name",value:t("show"),checked:"show"===visibility,onChange:_event=>setVisibility("show")}),(0,jsx_runtime.jsx)(RadioButton.Z,{name:"visibility",label:"hide name",value:t("hide"),onChange:_event=>setVisibility("hide"),checked:"hide"===visibility})]}),(0,jsx_runtime.jsx)(TextAreaField.Z,{name:"comment",placeholder:t("leave-a-comment"),onChange:()=>null}),(0,jsx_runtime.jsx)(StyledButton,{type:"submit",name:"submit",value:t("submit")})]})]})};Forum.displayName="Forum";const Forum_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport Forum from "../src/components/Forum/Forum";\nexport default ({\n  title: "Components/Forum",\n  component: Forum\n} as Meta);\nconst Component = Forum;\ntype ComponentProps = React.ComponentProps<typeof Component>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Primary: Story<ComponentProps> = Template.bind({});\nPrimary.args = {\n  children: "Forum"\n};\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{primary:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/Forum",component:Forum},Component=Forum,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Primary=Template.bind({});Primary.args={children:"Forum"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/Forum/Thread.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_i18next__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),_InputFields_TextAreaField__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/InputFields/TextAreaField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Wrapper=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.div`
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
          `,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Author,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlaceholderAvatar,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:author})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TimeLabel,{children:time})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Text,{children:text}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Footer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ActionTab,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlaceholderIcon,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlaceholderIcon,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlaceholderIcon,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledReportIcon,{children:t("report")})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ChatIcon,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PlaceholderIcon,{})})]})]})]},text)},__WEBPACK_DEFAULT_EXPORT__=Thread;try{Thread.displayName="Thread",Thread.__docgenInfo={description:"",displayName:"Thread",props:{state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"Thread"}},author:{defaultValue:null,description:"",name:"author",required:!0,type:{name:"string"}},handleReply:{defaultValue:null,description:"",name:"handleReply",required:!1,type:{name:"((e: SyntheticEvent<Element, Event>) => void)"}},clicked:{defaultValue:null,description:"",name:"clicked",required:!1,type:{name:"boolean"}},selectedId:{defaultValue:null,description:"",name:"selectedId",required:!1,type:{name:"string"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!1,type:{name:"((event: MouseEvent<HTMLInputElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Forum/Thread.tsx#Thread"]={docgenInfo:Thread.__docgenInfo,name:"Thread",path:"src/components/Forum/Thread.tsx#Thread"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/InputFields/RadioButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/styles/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const labelClass=_emotion_css__WEBPACK_IMPORTED_MODULE_0__.iv`
  /* font-family: system-ui, sans-serif; */
  font-family: ${_styles__WEBPACK_IMPORTED_MODULE_1__.$S};
  font-size: 16px;
  margin: 0.5rem 0.5rem 0.5rem 0;
  line-height: 1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;

  input[type="radio"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    width: 1.15em;
    height: 1.15em;
    border: 1.5px solid #787878;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: ${_styles__WEBPACK_IMPORTED_MODULE_1__.wE.colors.green[600]};
  }

  span {
    font-family: ${_styles__WEBPACK_IMPORTED_MODULE_1__.$S};
    font-weight: 400;
    font-size: 18px;
  }

  input[type="radio"]:checked::before {
    transform: scale(1);
    background: #1f6964;
  }
`,RadioField=({onChange,className,label,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(_emotion_css__WEBPACK_IMPORTED_MODULE_0__.iv`
          margin-bottom: 1rem;
          margin-top: 1rem;
        `,className),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label",{className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(labelClass),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"radio",onChange:event=>onChange&&onChange(event),...rest}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:label})]})});RadioField.displayName="RadioField";const __WEBPACK_DEFAULT_EXPORT__=RadioField;try{RadioButton.displayName="RadioButton",RadioButton.__docgenInfo={description:"",displayName:"RadioButton",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputFields/RadioButton.tsx#RadioButton"]={docgenInfo:RadioButton.__docgenInfo,name:"RadioButton",path:"src/components/InputFields/RadioButton.tsx#RadioButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/InputFields/TextAreaField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function updateHeight(ref){ref.current&&(ref.current.style.height="auto",ref.current.style.height=`${ref.current.scrollHeight+5}px`)}const TextAreaField=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({onChangeByValue,onChange,className,autoResize,resize="vertical",...rest},ref)=>{const textareaRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),combinedRef=(fwdRef=ref,innerRef=textareaRef,react__WEBPACK_IMPORTED_MODULE_1__.useEffect((()=>{[innerRef,fwdRef].forEach((ref=>{ref&&("function"==typeof ref?ref(innerRef.current||null):ref.current=innerRef.current||null)}))}),[innerRef,fwdRef]),innerRef);var fwdRef,innerRef;return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{autoResize&&textareaRef.current&&updateHeight(textareaRef)}),[ref,rest.value,autoResize]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(_emotion_css__WEBPACK_IMPORTED_MODULE_0__.iv`
            margin-bottom: 1rem;

            label {
              display: grid;

              textarea {
                background: #fcfcfc;
                border: 1.6px solid #dedede;
                padding: 10px 12px;
                resize: ${resize};
              }
              span {
                color: #333;
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 0.2rem;
              }
            }
          `,className),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:rest.label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("textarea",{ref:combinedRef,onChange:event=>{if(onChangeByValue){const{target:{value}}=event;onChangeByValue(value)}onChange&&onChange(event),autoResize&&updateHeight(textareaRef)},defaultValue:rest.defaultValue,...rest})]})})}));TextAreaField.displayName="TextAreaField";const __WEBPACK_DEFAULT_EXPORT__=TextAreaField;try{TextAreaField.displayName="TextAreaField",TextAreaField.__docgenInfo={description:"",displayName:"TextAreaField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | FieldError"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!1,type:{name:"((value: string, name?: string) => void)"}},autoResize:{defaultValue:null,description:"",name:"autoResize",required:!1,type:{name:"boolean"}},resize:{defaultValue:{value:"vertical"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"inline"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'},{value:'"block"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputFields/TextAreaField.tsx#TextAreaField"]={docgenInfo:TextAreaField.__docgenInfo,name:"TextAreaField",path:"src/components/InputFields/TextAreaField.tsx#TextAreaField"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=Forum-stories.0a3bab13.iframe.bundle.js.map