(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/components/monaco/impl/MonacoEditorImpl.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var es=__webpack_require__("./node_modules/@monaco-editor/react/lib/es/index.js");__webpack_require__("./node_modules/react/index.js");es.b.config({paths:{vs:"/monaco-editor/vs"}});var styles=__webpack_require__("./src/styles/index.ts"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),styles_monacoFontFixer=Object(emotion_css_esm.a)(".monaco-editor{font-family:",styles.d,"!important;--monaco-monospace-font:",styles.d,"!important;}",""),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),MonacoEditorImpl_MonacoEditorImpl=function MonacoEditorImpl(props){var _props$options,options=null!==(_props$options=props.options)&&void 0!==_props$options?_props$options:{};return options.fontFamily=styles.d,options.wordWrap||(options.wordWrap="on"),Object(jsx_runtime.jsx)("div",{className:styles_monacoFontFixer,children:Object(jsx_runtime.jsx)(es.a,Object.assign({},props,{options:options}))})};MonacoEditorImpl_MonacoEditorImpl.displayName="MonacoEditorImpl";__webpack_exports__.default=MonacoEditorImpl_MonacoEditorImpl;try{MonacoEditorImpl_MonacoEditorImpl.displayName="MonacoEditorImpl",MonacoEditorImpl_MonacoEditorImpl.__docgenInfo={description:"",displayName:"MonacoEditorImpl",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/monaco/impl/MonacoEditorImpl.tsx#MonacoEditorImpl"]={docgenInfo:MonacoEditorImpl_MonacoEditorImpl.__docgenInfo,name:"MonacoEditorImpl",path:"src/components/monaco/impl/MonacoEditorImpl.tsx#MonacoEditorImpl"})}catch(__react_docgen_typescript_loader_error){}}}]);