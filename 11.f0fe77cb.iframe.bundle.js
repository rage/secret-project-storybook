(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./node_modules/@monaco-editor/react/lib/es/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function state_local_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function state_local_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function state_local_objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?state_local_ownKeys(Object(source),!0).forEach((function(key){state_local_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):state_local_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function compose(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function(x){return fns.reduceRight((function(y,f){return f(y)}),x)}}function curry(fn){return function curried(){for(var _this=this,_len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return args.length>=fn.length?fn.apply(this,args):function(){for(var _len3=arguments.length,nextArgs=new Array(_len3),_key3=0;_key3<_len3;_key3++)nextArgs[_key3]=arguments[_key3];return curried.apply(_this,[].concat(args,nextArgs))}}}function isObject(value){return{}.toString.call(value).includes("Object")}function isFunction(value){return"function"==typeof value}__webpack_require__.d(__webpack_exports__,"b",(function(){return es_loader})),__webpack_require__.d(__webpack_exports__,"a",(function(){return es_Editor}));var errorHandler=curry((function throwError(errorMessages,type){throw new Error(errorMessages[type]||errorMessages.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),validators={changes:function validateChanges(initial,changes){return isObject(changes)||errorHandler("changeType"),Object.keys(changes).some((function(field){return!function state_local_hasOwnProperty(object,property){return Object.prototype.hasOwnProperty.call(object,property)}(initial,field)}))&&errorHandler("changeField"),changes},selector:function validateSelector(selector){isFunction(selector)||errorHandler("selectorType")},handler:function validateHandler(handler){isFunction(handler)||isObject(handler)||errorHandler("handlerType"),isObject(handler)&&Object.values(handler).some((function(_handler){return!isFunction(_handler)}))&&errorHandler("handlersType")},initial:function validateInitial(initial){initial||errorHandler("initialIsRequired"),isObject(initial)||errorHandler("initialType"),function isEmpty(obj){return!Object.keys(obj).length}(initial)&&errorHandler("initialContent")}};function extractChanges(state,causedChanges){return isFunction(causedChanges)?causedChanges(state.current):causedChanges}function updateState(state,changes){return state.current=state_local_objectSpread2(state_local_objectSpread2({},state.current),changes),changes}function didStateUpdate(state,handler,changes){return isFunction(handler)?handler(state.current):Object.keys(changes).forEach((function(field){var _handler$field;return null===(_handler$field=handler[field])||void 0===_handler$field?void 0:_handler$field.call(handler,state.current[field])})),changes}var index={create:function create(initial){var handler=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};validators.initial(initial),validators.handler(handler);var state={current:initial},didUpdate=curry(didStateUpdate)(state,handler),update=curry(updateState)(state),validate=curry(validators.changes)(initial),getChanges=curry(extractChanges)(state);function getState(){var selector=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(state){return state};return validators.selector(selector),selector(state.current)}function setState(causedChanges){compose(didUpdate,update,validate,getChanges)(causedChanges)}return[getState,setState]}},state_local=index,es_config={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}};var utils_curry=function curry_curry(fn){return function curried(){for(var _this=this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return args.length>=fn.length?fn.apply(this,args):function(){for(var _len2=arguments.length,nextArgs=new Array(_len2),_key2=0;_key2<_len2;_key2++)nextArgs[_key2]=arguments[_key2];return curried.apply(_this,[].concat(args,nextArgs))}}};var utils_isObject=function isObject_isObject(value){return{}.toString.call(value).includes("Object")};var validators_errorMessages={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},validators_errorHandler=utils_curry((function validators_throwError(errorMessages,type){throw new Error(errorMessages[type]||errorMessages.default)}))(validators_errorMessages),es_validators={config:function validateConfig(config){return config||validators_errorHandler("configIsRequired"),utils_isObject(config)||validators_errorHandler("configType"),config.urls?(function informAboutDeprecation(){console.warn(validators_errorMessages.deprecation)}(),{paths:{vs:config.urls.monacoBase}}):config}},utils_compose=function compose(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function(x){return fns.reduceRight((function(y,f){return f(y)}),x)}};var deepMerge=function merge(target,source){return Object.keys(source).forEach((function(key){source[key]instanceof Object&&target[key]&&Object.assign(source[key],merge(target[key],source[key]))})),_objectSpread2(_objectSpread2({},target),source)},CANCELATION_MESSAGE={type:"cancelation",msg:"operation is manually canceled"};var utils_makeCancelable=function makeCancelable(promise){var hasCanceled_=!1,wrappedPromise=new Promise((function(resolve,reject){promise.then((function(val){return hasCanceled_?reject(CANCELATION_MESSAGE):resolve(val)})),promise.catch(reject)}));return wrappedPromise.cancel=function(){return hasCanceled_=!0},wrappedPromise},_state$create2=function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(state_local.create({config:es_config,resolve:null,reject:null,monaco:null}),2),getState=_state$create2[0],setState=_state$create2[1];function injectScripts(script){return document.body.appendChild(script)}function getMonacoLoaderScript(configureLoader){var state=getState((function(_ref2){return{config:_ref2.config,reject:_ref2.reject}})),loaderScript=function createScript(src){var script=document.createElement("script");return src&&(script.src=src),script}("".concat(state.config.paths.vs,"/loader.js"));return loaderScript.onload=function(){return configureLoader()},loaderScript.onerror=state.reject,loaderScript}function configureLoader(){var state=getState((function(_ref3){return{config:_ref3.config,resolve:_ref3.resolve,reject:_ref3.reject}})),require=window.require;require.config(state.config),require(["vs/editor/editor.main"],(function(monaco){storeMonacoInstance(monaco),state.resolve(monaco)}),(function(error){state.reject(error)}))}function storeMonacoInstance(monaco){getState().monaco||setState({monaco:monaco})}var wrapperPromise=new Promise((function(resolve,reject){return setState({resolve:resolve,reject:reject})})),es_loader={config:function loader_config(globalConfig){var _validators$config=es_validators.config(globalConfig),monaco=_validators$config.monaco,config=_objectWithoutProperties(_validators$config,["monaco"]);setState((function(state){return{config:deepMerge(state.config,config),monaco:monaco}}))},init:function init(){var state=getState((function(_ref){return{monaco:_ref.monaco}}));if(state.monaco){if(state.monaco)return utils_makeCancelable(Promise.resolve(state.monaco))}else{if(window.monaco&&window.monaco.editor)return storeMonacoInstance(window.monaco),utils_makeCancelable(Promise.resolve(window.monaco));utils_compose(injectScripts,getMonacoLoaderScript)(configureLoader)}return utils_makeCancelable(wrapperPromise)},__getMonacoInstance:function __getMonacoInstance(){return getState((function(_ref4){return _ref4.monaco}))}},react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const loadingStyles={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var Loading_Loading=function Loading({content:content}){return react_default.a.createElement("div",{style:loadingStyles},content)};var MonacoContainer_styles={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function MonacoContainer({width:width,height:height,isEditorReady:isEditorReady,loading:loading,_ref:_ref,className:className,wrapperProps:wrapperProps}){return react_default.a.createElement("section",_extends({style:{...MonacoContainer_styles.wrapper,width:width,height:height}},wrapperProps),!isEditorReady&&react_default.a.createElement(Loading_Loading,{content:loading}),react_default.a.createElement("div",{ref:_ref,style:{...MonacoContainer_styles.fullWidth,...!isEditorReady&&MonacoContainer_styles.hide},className:className}))}MonacoContainer.propTypes={width:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]).isRequired,height:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]).isRequired,loading:prop_types_default.a.oneOfType([prop_types_default.a.element,prop_types_default.a.string]).isRequired,isEditorReady:prop_types_default.a.bool.isRequired,className:prop_types_default.a.string,wrapperProps:prop_types_default.a.object};var MonacoContainer_MonacoContainer=MonacoContainer,es_MonacoContainer=Object(react.memo)(MonacoContainer_MonacoContainer);var hooks_useMount=function useMount(effect){Object(react.useEffect)(effect,[])};var hooks_useUpdate=function useUpdate(effect,deps,applyChanges=!0){const isInitialMount=Object(react.useRef)(!0);Object(react.useEffect)(isInitialMount.current||!applyChanges?()=>{isInitialMount.current=!1}:effect,deps)};function noop(){}function getOrCreateModel(monaco,value,language,path){return function getModel(monaco,path){return monaco.editor.getModel(createModelUri(monaco,path))}(monaco,path)||function createModel(monaco,value,language,path){return monaco.editor.createModel(value,language,path&&createModelUri(monaco,path))}(monaco,value,language,path)}function createModelUri(monaco,path){return monaco.Uri.parse(path)}function DiffEditor({original:original,modified:modified,language:language,originalLanguage:originalLanguage,modifiedLanguage:modifiedLanguage,originalModelPath:originalModelPath,modifiedModelPath:modifiedModelPath,keepCurrentOriginalModel:keepCurrentOriginalModel,keepCurrentModifiedModel:keepCurrentModifiedModel,theme:theme,loading:loading,options:options,height:height,width:width,className:className,wrapperProps:wrapperProps,beforeMount:beforeMount,onMount:onMount}){const[isEditorReady,setIsEditorReady]=Object(react.useState)(!1),[isMonacoMounting,setIsMonacoMounting]=Object(react.useState)(!0),editorRef=Object(react.useRef)(null),monacoRef=Object(react.useRef)(null),containerRef=Object(react.useRef)(null),onMountRef=Object(react.useRef)(onMount),beforeMountRef=Object(react.useRef)(beforeMount);hooks_useMount((()=>{const cancelable=es_loader.init();return cancelable.then((monaco=>(monacoRef.current=monaco)&&setIsMonacoMounting(!1))).catch((error=>"cancelation"!==(null==error?void 0:error.type)&&console.error("Monaco initialization: error:",error))),()=>editorRef.current?function disposeEditor(){const models=editorRef.current.getModel();var _models$original,_models$modified;keepCurrentOriginalModel||null===(_models$original=models.original)||void 0===_models$original||_models$original.dispose();keepCurrentModifiedModel||null===(_models$modified=models.modified)||void 0===_models$modified||_models$modified.dispose();editorRef.current.dispose()}():cancelable.cancel()})),hooks_useUpdate((()=>{const modifiedEditor=editorRef.current.getModifiedEditor();modifiedEditor.getOption(monacoRef.current.editor.EditorOption.readOnly)?modifiedEditor.setValue(modified):modified!==modifiedEditor.getValue()&&(modifiedEditor.executeEdits("",[{range:modifiedEditor.getModel().getFullModelRange(),text:modified,forceMoveMarkers:!0}]),modifiedEditor.pushUndoStop())}),[modified],isEditorReady),hooks_useUpdate((()=>{editorRef.current.getModel().original.setValue(original)}),[original],isEditorReady),hooks_useUpdate((()=>{const{original:original,modified:modified}=editorRef.current.getModel();monacoRef.current.editor.setModelLanguage(original,originalLanguage||language),monacoRef.current.editor.setModelLanguage(modified,modifiedLanguage||language)}),[language,originalLanguage,modifiedLanguage],isEditorReady),hooks_useUpdate((()=>{monacoRef.current.editor.setTheme(theme)}),[theme],isEditorReady),hooks_useUpdate((()=>{editorRef.current.updateOptions(options)}),[options],isEditorReady);const setModels=Object(react.useCallback)((()=>{beforeMountRef.current(monacoRef.current);const originalModel=getOrCreateModel(monacoRef.current,original,originalLanguage||language,originalModelPath),modifiedModel=getOrCreateModel(monacoRef.current,modified,modifiedLanguage||language,modifiedModelPath);editorRef.current.setModel({original:originalModel,modified:modifiedModel})}),[language,modified,modifiedLanguage,original,originalLanguage,originalModelPath,modifiedModelPath]),createEditor=Object(react.useCallback)((()=>{editorRef.current=monacoRef.current.editor.createDiffEditor(containerRef.current,{automaticLayout:!0,...options}),setModels(),monacoRef.current.editor.setTheme(theme),setIsEditorReady(!0)}),[options,theme,setModels]);return Object(react.useEffect)((()=>{isEditorReady&&onMountRef.current(editorRef.current,monacoRef.current)}),[isEditorReady]),Object(react.useEffect)((()=>{!isMonacoMounting&&!isEditorReady&&createEditor()}),[isMonacoMounting,isEditorReady,createEditor]),react_default.a.createElement(es_MonacoContainer,{width:width,height:height,isEditorReady:isEditorReady,loading:loading,_ref:containerRef,className:className,wrapperProps:wrapperProps})}DiffEditor.propTypes={original:prop_types_default.a.string,modified:prop_types_default.a.string,language:prop_types_default.a.string,originalLanguage:prop_types_default.a.string,modifiedLanguage:prop_types_default.a.string,originalModelPath:prop_types_default.a.string,modifiedModelPath:prop_types_default.a.string,keepCurrentOriginalModel:prop_types_default.a.bool,keepCurrentModifiedModel:prop_types_default.a.bool,theme:prop_types_default.a.string,loading:prop_types_default.a.oneOfType([prop_types_default.a.element,prop_types_default.a.string]),options:prop_types_default.a.object,width:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),height:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),className:prop_types_default.a.string,wrapperProps:prop_types_default.a.object,beforeMount:prop_types_default.a.func,onMount:prop_types_default.a.func},DiffEditor.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:noop,onMount:noop};var hooks_usePrevious=function usePrevious(value){const ref=Object(react.useRef)();return Object(react.useEffect)((()=>{ref.current=value}),[value]),ref.current};const viewStates=new Map;function Editor({defaultValue:defaultValue,defaultLanguage:defaultLanguage,defaultPath:defaultPath,value:value,language:language,path:path,theme:theme,line:line,loading:loading,options:options,overrideServices:overrideServices,saveViewState:saveViewState,keepCurrentModel:keepCurrentModel,width:width,height:height,className:className,wrapperProps:wrapperProps,beforeMount:beforeMount,onMount:onMount,onChange:onChange,onValidate:onValidate}){const[isEditorReady,setIsEditorReady]=Object(react.useState)(!1),[isMonacoMounting,setIsMonacoMounting]=Object(react.useState)(!0),monacoRef=Object(react.useRef)(null),editorRef=Object(react.useRef)(null),containerRef=Object(react.useRef)(null),onMountRef=Object(react.useRef)(onMount),beforeMountRef=Object(react.useRef)(beforeMount),subscriptionRef=Object(react.useRef)(null),valueRef=Object(react.useRef)(value),previousPath=hooks_usePrevious(path);hooks_useMount((()=>{const cancelable=es_loader.init();return cancelable.then((monaco=>(monacoRef.current=monaco)&&setIsMonacoMounting(!1))).catch((error=>"cancelation"!==(null==error?void 0:error.type)&&console.error("Monaco initialization: error:",error))),()=>editorRef.current?function disposeEditor(){var _subscriptionRef$curr2,_editorRef$current$ge2;null===(_subscriptionRef$curr2=subscriptionRef.current)||void 0===_subscriptionRef$curr2||_subscriptionRef$curr2.dispose(),keepCurrentModel?saveViewState&&viewStates.set(path,editorRef.current.saveViewState()):null===(_editorRef$current$ge2=editorRef.current.getModel())||void 0===_editorRef$current$ge2||_editorRef$current$ge2.dispose();editorRef.current.dispose()}():cancelable.cancel()})),hooks_useUpdate((()=>{const model=getOrCreateModel(monacoRef.current,defaultValue||value,defaultLanguage||language,path);model!==editorRef.current.getModel()&&(saveViewState&&viewStates.set(previousPath,editorRef.current.saveViewState()),editorRef.current.setModel(model),saveViewState&&editorRef.current.restoreViewState(viewStates.get(path)))}),[path],isEditorReady),hooks_useUpdate((()=>{editorRef.current.updateOptions(options)}),[options],isEditorReady),hooks_useUpdate((()=>{editorRef.current.getOption(monacoRef.current.editor.EditorOption.readOnly)?editorRef.current.setValue(value):value!==editorRef.current.getValue()&&(editorRef.current.executeEdits("",[{range:editorRef.current.getModel().getFullModelRange(),text:value,forceMoveMarkers:!0}]),editorRef.current.pushUndoStop())}),[value],isEditorReady),hooks_useUpdate((()=>{monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(),language)}),[language],isEditorReady),hooks_useUpdate((()=>{(function isUndefined(input){return void 0===input})(line)||editorRef.current.revealLine(line)}),[line],isEditorReady),hooks_useUpdate((()=>{monacoRef.current.editor.setTheme(theme)}),[theme],isEditorReady);const createEditor=Object(react.useCallback)((()=>{beforeMountRef.current(monacoRef.current);const autoCreatedModelPath=path||defaultPath,defaultModel=getOrCreateModel(monacoRef.current,value||defaultValue,defaultLanguage||language,autoCreatedModelPath);editorRef.current=monacoRef.current.editor.create(containerRef.current,{model:defaultModel,automaticLayout:!0,...options},overrideServices),saveViewState&&editorRef.current.restoreViewState(viewStates.get(autoCreatedModelPath)),monacoRef.current.editor.setTheme(theme),setIsEditorReady(!0)}),[defaultValue,defaultLanguage,defaultPath,value,language,path,options,overrideServices,saveViewState,theme]);return Object(react.useEffect)((()=>{isEditorReady&&onMountRef.current(editorRef.current,monacoRef.current)}),[isEditorReady]),Object(react.useEffect)((()=>{!isMonacoMounting&&!isEditorReady&&createEditor()}),[isMonacoMounting,isEditorReady,createEditor]),valueRef.current=value,Object(react.useEffect)((()=>{var _subscriptionRef$curr,_editorRef$current;isEditorReady&&onChange&&(null===(_subscriptionRef$curr=subscriptionRef.current)||void 0===_subscriptionRef$curr||_subscriptionRef$curr.dispose(),subscriptionRef.current=null===(_editorRef$current=editorRef.current)||void 0===_editorRef$current?void 0:_editorRef$current.onDidChangeModelContent((event=>{const editorValue=editorRef.current.getValue();valueRef.current!==editorValue&&onChange(editorValue,event)})))}),[isEditorReady,onChange]),Object(react.useEffect)((()=>{if(isEditorReady){const changeMarkersListener=monacoRef.current.editor.onDidChangeMarkers((uris=>{var _editorRef$current$ge;const editorUri=null===(_editorRef$current$ge=editorRef.current.getModel())||void 0===_editorRef$current$ge?void 0:_editorRef$current$ge.uri;if(editorUri){if(uris.find((uri=>uri.path===editorUri.path))){const markers=monacoRef.current.editor.getModelMarkers({resource:editorUri});null==onValidate||onValidate(markers)}}}));return()=>{null==changeMarkersListener||changeMarkersListener.dispose()}}}),[isEditorReady,onValidate]),react_default.a.createElement(es_MonacoContainer,{width:width,height:height,isEditorReady:isEditorReady,loading:loading,_ref:containerRef,className:className,wrapperProps:wrapperProps})}Editor.propTypes={defaultValue:prop_types_default.a.string,defaultPath:prop_types_default.a.string,defaultLanguage:prop_types_default.a.string,value:prop_types_default.a.string,language:prop_types_default.a.string,path:prop_types_default.a.string,theme:prop_types_default.a.string,line:prop_types_default.a.number,loading:prop_types_default.a.oneOfType([prop_types_default.a.element,prop_types_default.a.string]),options:prop_types_default.a.object,overrideServices:prop_types_default.a.object,saveViewState:prop_types_default.a.bool,keepCurrentModel:prop_types_default.a.bool,width:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),height:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),className:prop_types_default.a.string,wrapperProps:prop_types_default.a.object,beforeMount:prop_types_default.a.func,onMount:prop_types_default.a.func,onChange:prop_types_default.a.func,onValidate:prop_types_default.a.func},Editor.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:noop,onMount:noop,onValidate:noop};var Editor_Editor=Editor,es_Editor=Object(react.memo)(Editor_Editor)}}]);