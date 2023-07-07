(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[3995],{"./stories/Navigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Complex:()=>Complex,Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Navigation_stories});var react=__webpack_require__("./node_modules/react/index.js"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),styles=__webpack_require__("./src/styles/index.ts"),respond=__webpack_require__("./src/styles/respond.ts"),accessibility=__webpack_require__("./src/utils/accessibility.ts"),Button=__webpack_require__("./src/components/Button.tsx"),QueryClientProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs"),useQuery=__webpack_require__("./node_modules/@tanstack/react-query/build/lib/useQuery.mjs"),ErrorBanner=__webpack_require__("./src/components/ErrorBanner.tsx"),components_Spinner=__webpack_require__("./src/components/Spinner.tsx"),lib_axios=__webpack_require__("./node_modules/axios/lib/axios.js");const loggedIn=async()=>(await lib_axios.Z.get("/api/v0/auth/logged-in",{responseType:"json"})).data;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultLoginState={isLoading:!1,refresh:async()=>{},signedIn:null},LoginStateContext=react.createContext(defaultLoginState),contexts_LoginStateContext=LoginStateContext,LoginStateContextProvider=({children})=>{const[loginState,setLoginState]=(0,react.useState)(defaultLoginState),isLoggedIn=(0,useQuery.a)(["logged-in"],loggedIn);return(0,react.useEffect)((()=>{setLoginState((prev=>({...prev,isLoading:isLoggedIn.isLoading,refresh:isLoggedIn.refetch,signedIn:isLoggedIn.data})))}),[isLoggedIn.data,isLoggedIn.isLoading,isLoggedIn.refetch]),isLoggedIn.isError?(0,jsx_runtime.jsx)(ErrorBanner.Z,{variant:"readOnly",error:isLoggedIn.error}):(0,jsx_runtime.jsx)(LoginStateContext.Provider,{value:loginState,children})};function withSignedIn(Component){const displayName=Component.displayName||Component.name||"Component",InnerComponent=props=>{const{t}=useTranslation(),loginStateContext=useContext(LoginStateContext);if(loginStateContext.isLoading||null===loginStateContext.signedIn)return _jsx(Spinner,{variant:"medium"});if(!loginStateContext.signedIn){const returnTo=encodeURIComponent(window.location.pathname);return window.location.replace(`/login?return_to=${returnTo}`),_jsx("div",{children:t("please-sign-in-to-view-this-page")})}return _jsx(Component,{...props})};return InnerComponent.displayName=`withSignedIn(${displayName})`,InnerComponent}LoginStateContextProvider.displayName="LoginStateContextProvider";try{withSignedIn.displayName="withSignedIn",withSignedIn.__docgenInfo={description:"",displayName:"withSignedIn",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/LoginStateContext.tsx#withSignedIn"]={docgenInfo:withSignedIn.__docgenInfo,name:"withSignedIn",path:"src/contexts/LoginStateContext.tsx#withSignedIn"})}catch(__react_docgen_typescript_loader_error){}try{LoginStateContextProvider.displayName="LoginStateContextProvider",LoginStateContextProvider.__docgenInfo={description:"",displayName:"LoginStateContextProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/contexts/LoginStateContext.tsx#LoginStateContextProvider"]={docgenInfo:LoginStateContextProvider.__docgenInfo,name:"LoginStateContextProvider",path:"src/contexts/LoginStateContext.tsx#LoginStateContextProvider"})}catch(__react_docgen_typescript_loader_error){}var next_router=__webpack_require__("./node_modules/next/router.js");var process=__webpack_require__("./node_modules/process/browser.js");function useCurrentPagePathForReturnTo(currentPagePath){const uncheckedReturnTo=function useQueryParameter(name){const router=(0,next_router.useRouter)(),value=router?.query[name];return value?value instanceof Array?value.join("/"):value.toString():""}("return_to");return currentPagePath.startsWith("/login")||currentPagePath.startsWith("/signup")?uncheckedReturnTo&&""!==uncheckedReturnTo?uncheckedReturnTo:"/":process.env.NEXT_PUBLIC_BASE_PATH+currentPagePath}try{useCurrentPagePathForReturnTo.displayName="useCurrentPagePathForReturnTo",useCurrentPagePathForReturnTo.__docgenInfo={description:"",displayName:"useCurrentPagePathForReturnTo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/redirectBackAfterLoginOrSignup.tsx#useCurrentPagePathForReturnTo"]={docgenInfo:useCurrentPagePathForReturnTo.__docgenInfo,name:"useCurrentPagePathForReturnTo",path:"src/utils/redirectBackAfterLoginOrSignup.tsx#useCurrentPagePathForReturnTo"})}catch(__react_docgen_typescript_loader_error){}const LoginControls=({styles,currentPagePath})=>{const{t}=(0,es.$G)(),loginStateContext=(0,react.useContext)(contexts_LoginStateContext),returnTo=useCurrentPagePathForReturnTo(currentPagePath),queryClient=(0,QueryClientProvider.NL)();if(loginStateContext.isLoading)return(0,jsx_runtime.jsx)(components_Spinner.Z,{variant:"large"});const loginPathWithReturnTo=`/login?return_to=${encodeURIComponent(returnTo)}`,signUpPathWithReturnTo=`/signup?return_to=${encodeURIComponent(returnTo)}`;return loginStateContext.signedIn?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("li",{className:(0,emotion_css_esm.cx)(styles),children:(0,jsx_runtime.jsx)(Button.ZP,{size:"medium",variant:"primary",onClick:async()=>{await(async()=>{await lib_axios.Z.post("/api/v0/auth/logout")})(),queryClient.removeQueries(),await loginStateContext.refresh(),setTimeout((()=>{queryClient.refetchQueries()}),100)},children:t("log-out")})})}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("li",{className:(0,emotion_css_esm.cx)(styles),children:(0,jsx_runtime.jsx)("a",{href:signUpPathWithReturnTo,children:(0,jsx_runtime.jsx)(Button.ZP,{size:"medium",variant:"primary",children:t("create-new-account")})})}),(0,jsx_runtime.jsx)("li",{className:(0,emotion_css_esm.cx)(styles),children:(0,jsx_runtime.jsx)("a",{href:loginPathWithReturnTo,children:(0,jsx_runtime.jsx)(Button.ZP,{size:"medium",variant:"primary",children:t("log-in")})})})]})},components_LoginControls=LoginControls;try{LoginControls.displayName="LoginControls",LoginControls.__docgenInfo={description:"",displayName:"LoginControls",props:{styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:"ClassNamesArg[]"}},currentPagePath:{defaultValue:null,description:"",name:"currentPagePath",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LoginControls.tsx#LoginControls"]={docgenInfo:LoginControls.__docgenInfo,name:"LoginControls",path:"src/components/LoginControls.tsx#LoginControls"})}catch(__react_docgen_typescript_loader_error){}const getBarColor=({barColor})=>`background-color: ${barColor};`,getLayerHeight=buttonWidth=>.1*buttonWidth,getLayerSpacing=buttonWidth=>.15*buttonWidth,getLinesCommon=({buttonWidth})=>`\n  width: ${buttonWidth}px;\n  height: ${.1*buttonWidth}px;\n  border-radius: ${.1*buttonWidth}px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n`,StyledLines=emotion_styled_browser_esm.Z.span`
  display: block;
  top: 50%;
  margin-top: ${({buttonWidth})=>.05*-buttonWidth}px;
  ${getBarColor}
  ${getLinesCommon}

  &::before,
  &::after {
    ${getBarColor}
    ${getLinesCommon}
    content: "";
    display: block;
  }

  &::before {
    top: ${({buttonWidth})=>.25*-buttonWidth}px;
  }

  &::after {
    bottom: ${({buttonWidth})=>.25*-buttonWidth}px;
  }
`,StyledLinesSpring=(0,emotion_styled_browser_esm.Z)(StyledLines)`
  &::before {
    top: ${({buttonWidth})=>getLayerHeight(buttonWidth)+getLayerSpacing(buttonWidth)}px;
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    ${({isActive,buttonWidth})=>isActive&&(buttonWidth=>`\n  top: 0;\n  transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: translate3d(0, ${getLayerHeight(buttonWidth)+getLayerSpacing(buttonWidth)}px, 0) rotate(45deg);\n`)(buttonWidth)}
    ${getBarColor}
  }

  &::after {
    top: ${({buttonWidth})=>2*getLayerHeight(buttonWidth)+2*getLayerSpacing(buttonWidth)}px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    ${({isActive,buttonWidth})=>isActive&&(buttonWidth=>`\n  top: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: translate3d(0, ${getLayerHeight(buttonWidth)+getLayerSpacing(buttonWidth)}px, 0) rotate(-45deg);\n`)(buttonWidth)}
    ${getBarColor}
  }

  top: ${({buttonWidth})=>getLayerHeight(buttonWidth)}px;
  transition: background-color 0s 0.13s linear;
  ${getBarColor}
  ${({isActive})=>isActive&&"\n  transition-delay: 0.22s;\n  background-color: transparent;\n"}
`,StyledButton=emotion_styled_browser_esm.Z.div`
  padding: ${({buttonWidth})=>.375*buttonWidth}px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: ${({buttonColor})=>buttonColor};
  margin: 0;
  border: none;
  overflow: visible;
`,HamburgerSpring_Button=props=>{const{barColor="black",Box=StyledBox,buttonColor="transparent",buttonWidth=40,className,isActive=!1,Lines=StyledLines,toggleButton,buttonId,...rest}=props;return(0,jsx_runtime.jsx)(StyledButton,{onClick:toggleButton,buttonWidth,buttonColor,className,...rest,id:buttonId,children:(0,jsx_runtime.jsx)(Box,{buttonWidth,children:(0,jsx_runtime.jsx)(Lines,{buttonWidth,barColor,isActive})})})};HamburgerSpring_Button.displayName="Button";const StyledBox=emotion_styled_browser_esm.Z.div`
  width: ${({buttonWidth})=>buttonWidth}px;
  height: ${({buttonWidth})=>.6*buttonWidth}px;
  display: inline-block;
  position: relative;
`,HamburgerSpring=props=>(0,jsx_runtime.jsx)(HamburgerSpring_Button,{...props,Lines:StyledLinesSpring});HamburgerSpring.displayName="HamburgerSpring";try{HamburgerSpring.displayName="HamburgerSpring",HamburgerSpring.__docgenInfo={description:"",displayName:"HamburgerSpring",props:{barColor:{defaultValue:null,description:"Color of the bars, default 'black'",name:"barColor",required:!1,type:{name:"string"}},Box:{defaultValue:null,description:"Component to use as the box",name:"Box",required:!1,type:{name:"ElementType<any>"}},buttonColor:{defaultValue:null,description:"Color of the button, default 'transparent'",name:"buttonColor",required:!1,type:{name:"string"}},buttonWidth:{defaultValue:null,description:"Width of the button, default 40",name:"buttonWidth",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"ClassName for the button",name:"className",required:!1,type:{name:"string"}},isActive:{defaultValue:null,description:"Specifies if the button is active or not, default false",name:"isActive",required:!1,type:{name:"boolean"}},Lines:{defaultValue:null,description:"Component to use as the bar lines",name:"Lines",required:!1,type:{name:"ElementType<any>"}},toggleButton:{defaultValue:null,description:"Callback to invoke on button click to toggle active state, default () => {}",name:"toggleButton",required:!1,type:{name:"(() => void)"}},buttonId:{defaultValue:null,description:"id to differirentiate Hamburger menus from each other, needed for accesibility",name:"buttonId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/Menu/Hamburger/HamburgerSpring.tsx#HamburgerSpring"]={docgenInfo:HamburgerSpring.__docgenInfo,name:"HamburgerSpring",path:"src/components/Navigation/NavBar/Menu/Hamburger/HamburgerSpring.tsx#HamburgerSpring"})}catch(__react_docgen_typescript_loader_error){}const defaultPadding=emotion_css_esm.iv`
  padding: 0;
`,Hamburger=({isActive,toggleButton,buttonId})=>(0,jsx_runtime.jsx)(HamburgerSpring,{barColor:"#333",buttonWidth:30,isActive,toggleButton,buttonId,className:"main-navigation-menu"===buttonId?(0,emotion_css_esm.cx)(defaultPadding):void 0});Hamburger.displayName="Hamburger";const Hamburger_Hamburger=Hamburger;try{Hamburger.displayName="Hamburger",Hamburger.__docgenInfo={description:"",displayName:"Hamburger",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},toggleButton:{defaultValue:null,description:"",name:"toggleButton",required:!0,type:{name:"() => void"}},buttonId:{defaultValue:null,description:"",name:"buttonId",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/Menu/Hamburger/Hamburger.tsx#Hamburger"]={docgenInfo:Hamburger.__docgenInfo,name:"Hamburger",path:"src/components/Navigation/NavBar/Menu/Hamburger/Hamburger.tsx#Hamburger"})}catch(__react_docgen_typescript_loader_error){}const swingHorizontal=emotion_css_esm.F4`
15% {
  transform: translateX(5px);
}

30% {
  transform: translateX(-5px);
}

50% {
  transform: translateX(3px);
}

65% {
  transform: translateX(-3px);
}

80% {
  transform: translateX(2px);
}

100% {
  transform: translateX(0);
}
`,navbarItems=emotion_css_esm.iv`
  position: relative;
  display: flex;
  height: 90px;
  align-items: center;
  font-size: 1rem;

  padding: 0em 4em;
  background: ${styles.wE.colors.clear[100]};
  border-bottom: 2px solid #333;
  z-index: 100;

  h1 {
    margin-bottom: 0;
  }

  justify-content: flex-end;
  top: 0;
  ${respond.L.lg} {
    justify-content: space-between;
    top: auto;
  }
`,navbarLogo=emotion_css_esm.iv`
  color: ${styles.wE.colors.gray[700]};
  display: flex;
  justify-self: start;
  margin: 0;
  cursor: pointer;
  padding-left: 10px;

  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50%, 100%);
  ${respond.L.lg} {
    position: static;
    top: auto;
    left: auto;
    transform: none;
  }
`,ComplexNav_active=emotion_css_esm.iv`
  left: 0;
  opacity: 1;
  transition: all 0.5s ease;
  ${respond.L.lg} {
    left: auto;
    transition: all;
  }
`,navMenu=emotion_css_esm.iv`
  display: flex;
  flex-direction: column;
  grid-gap: 0;
  width: 100%;
  height: auto;
  position: absolute;
  top: 90px;
  left: -100%;
  text-align: center;
  align-items: center;
  margin-top: 0;
  transition: all 0.5s ease;
  padding-left: 0;
  z-index: 9;
  overflow-y: hidden;

  justify-content: end;
  background: ${styles.wE.colors.clear[100]};

  ${respond.L.lg} {
    display: inline-block;
    grid-gap: 10px;
    list-style: none;
    margin-top: 1em;
    width: auto;
    position: static;
    top: auto;
    left: auto;
    transition: none;
  }
`,navLinks=emotion_css_esm.iv`
  color: ${styles.wE.colors.gray[700]};
  text-decoration: none;
  position: relative;
  line-height: 1.5rem;
  font-size: 1rem;
  text-align: center;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${styles.wE.colors.gray[700]};
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);

    display: none;
    ${respond.L.lg} {
      display: inline-block;
    }
  }

  &:hover {
    text-decoration: none;
    color: ${styles.wE.colors.gray[700]};

    &:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    animation: ${swingHorizontal} 1s ease;
    animation-iteration-count: 1;
    ${respond.L.lg} {
      animation: none 0 ease;
    }
  }

  font-weight: 500;
  margin: 0;
  width: 100%;
  padding: 2rem;
  display: table;
  border-bottom: 2px solid #f1f1f1;
  ${respond.L.lg} {
    font-weight: 600;
    margin: 0 0.8rem;
    width: auto;
    padding: 0;
    display: inline-block;
    border-bottom: 0;
  }
`,menuIcon=emotion_css_esm.iv`
  font-size: 1.8rem;
  z-index: 99;
  cursor: pointer;
  height: auto;

  display: block;
  position: relative;
  top: -2px;
  ${respond.L.lg} {
    display: none;
    height: 15px;
    position: static;
    top: auto;
    right: auto;
    transform: none;
  }
`,hide=emotion_css_esm.iv`
  ${respond.L.lg} {
    display: none;
  }
`,secondaryLink=emotion_css_esm.iv`
  display: none;
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  align-items: center;
  ${respond.L.lg} {
    display: flex;
  }
`,StyledIcon=(0,emotion_styled_browser_esm.Z)(index_es.G)`
  font-size: 1.8rem;
  color: ${styles.wE.colors.gray[700]};
`,Navigation=()=>{const{t}=(0,es.$G)(),[clicked,setClicked]=(0,react.useState)(!1),callback=()=>setClicked(!clicked);return(0,jsx_runtime.jsxs)("nav",{role:"navigation",className:(0,emotion_css_esm.cx)(navbarItems),children:[(0,jsx_runtime.jsx)("div",{className:(0,emotion_css_esm.cx)(navbarLogo),children:(0,jsx_runtime.jsx)("a",{href:"/","aria-label":t("home-page"),role:"button",children:(0,jsx_runtime.jsx)(StyledIcon,{icon:free_solid_svg_icons.QGx,"aria-label":t("home-page")})})}),(0,jsx_runtime.jsx)("div",{className:(0,emotion_css_esm.cx)(menuIcon),onClick:callback,onKeyDown:e=>(0,accessibility.L)(e,callback),tabIndex:0,role:"button","aria-label":t("open-menu"),children:(0,jsx_runtime.jsx)(Hamburger_Hamburger,{isActive:clicked,toggleButton:callback,buttonId:"main-navigation-menu"})}),(0,jsx_runtime.jsxs)("ol",{className:clicked?(0,emotion_css_esm.cx)(navMenu,ComplexNav_active):(0,emotion_css_esm.cx)(navMenu),children:[(0,jsx_runtime.jsx)("li",{className:(0,emotion_css_esm.cx)(navLinks),children:t("courses")}),(0,jsx_runtime.jsx)("li",{className:(0,emotion_css_esm.cx)(navLinks),children:t("modules")}),(0,jsx_runtime.jsx)("li",{className:(0,emotion_css_esm.cx)(navLinks),children:t("email-templates")}),(0,jsx_runtime.jsx)(components_LoginControls,{styles:[navLinks,hide],currentPagePath:"/"}),(0,jsx_runtime.jsx)("li",{className:(0,emotion_css_esm.cx)(navLinks,hide),children:(0,jsx_runtime.jsx)(Button.ZP,{variant:"primary",size:"medium",children:t("translate")})})]}),(0,jsx_runtime.jsxs)("ol",{className:(0,emotion_css_esm.cx)(secondaryLink),children:[(0,jsx_runtime.jsx)(components_LoginControls,{styles:[secondaryLink],currentPagePath:"/"}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(Button.ZP,{variant:"primary",size:"medium",children:t("translate")})})]})]})};Navigation.displayName="Navigation";const NavBar_ComplexNav=Navigation;try{ComplexNav.displayName="ComplexNav",ComplexNav.__docgenInfo={description:"",displayName:"ComplexNav",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"simple"'},{value:'"complex"'}]}},frontPageUrl:{defaultValue:null,description:"",name:"frontPageUrl",required:!1,type:{name:"string"}},faqUrl:{defaultValue:null,description:"",name:"faqUrl",required:!1,type:{name:"string"}},SearchDialogComponent:{defaultValue:null,description:"",name:"SearchDialogComponent",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/ComplexNav.tsx#ComplexNav"]={docgenInfo:ComplexNav.__docgenInfo,name:"ComplexNav",path:"src/components/Navigation/NavBar/ComplexNav.tsx#ComplexNav"})}catch(__react_docgen_typescript_loader_error){}const NavMenu=emotion_css_esm.iv`
  padding: 0px;
  & > * {
    margin-left: 20px;
  }
`,MenuIcon=emotion_css_esm.iv`
  &:focus-visible {
    outline: 2px solid ${styles.wE.colors.green[500]};
    outline-offset: 2px;
  }
`,ToolTip=emotion_css_esm.iv`
  background: #fff;
  border-color: #cacaca;
  padding: 0;
  border-radius: 4px;
  position: absolute;
  margin-bottom: 10px;
  margin-left: -95px;
  z-index: 901;
  box-shadow: 0px 0px 5px rgba(51, 51, 51, 0.1);

  li {
    text-decoration: none;

    border-bottom: 2px solid #e1e1e1;
    list-style: none;
    margin: 0;
    background-color: white;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      filter: brightness(92%) contrast(110%);
    }

    Button {
      text-decoration: none;
      list-style: none;
      border: none;
      margin: 0;
      padding: 12px 25px;
      font-size: 16px;
      background: inherit;
      text-transform: none;
      text-align: center;
      width: 100%;
      color: ${styles.wE.colors.green[500]};
    }

    Button:hover {
      background: inherit;
      color: ${styles.wE.colors.green[700]};
    }
  }
`,Hide=emotion_css_esm.iv`
  display: none;
`,Menu_Menu=({children,variant})=>{const[clicked,setClicked]=(0,react.useState)(!1),{t}=(0,es.$G)(),buttonId="bottom"===variant?"":"main-navigation-menu",onClickHandler=()=>{setClicked(!clicked)};return(0,jsx_runtime.jsxs)("div",{className:(0,emotion_css_esm.cx)(NavMenu),children:[(0,jsx_runtime.jsx)("div",{className:(0,emotion_css_esm.cx)(MenuIcon),onClick:onClickHandler,onKeyDown:e=>(0,accessibility.L)(e,onClickHandler),role:"button","aria-label":t("open-menu"),tabIndex:0,children:(0,jsx_runtime.jsx)(Hamburger_Hamburger,{isActive:clicked,toggleButton:onClickHandler,buttonId})}),(0,jsx_runtime.jsx)("ul",{className:clicked?(0,emotion_css_esm.cx)(ToolTip,emotion_css_esm.iv`
                  ${"bottom"===variant?"bottom: 70px;":"top: 70px;right:17px;"}
                `):(0,emotion_css_esm.cx)(Hide),children})]})};Menu_Menu.displayName="Menu";try{Menu_Menu.displayName="Menu",Menu_Menu.__docgenInfo={description:"",displayName:"Menu",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/Menu/Menu.tsx#Menu"]={docgenInfo:Menu_Menu.__docgenInfo,name:"Menu",path:"src/components/Navigation/NavBar/Menu/Menu.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}const MenuItem_MenuItem=({children})=>(0,jsx_runtime.jsx)("li",{children});MenuItem_MenuItem.displayName="MenuItem";try{MenuItem_MenuItem.displayName="MenuItem",MenuItem_MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/Menu/MenuItem.tsx#MenuItem"]={docgenInfo:MenuItem_MenuItem.__docgenInfo,name:"MenuItem",path:"src/components/Navigation/NavBar/Menu/MenuItem.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}const NavContainer_NavContainer=({children})=>(0,jsx_runtime.jsx)("div",{className:emotion_css_esm.iv`
        flex-grow: 1;
        align-items: center;
      `,children});NavContainer_NavContainer.displayName="NavContainer";try{NavContainer_NavContainer.displayName="NavContainer",NavContainer_NavContainer.__docgenInfo={description:"",displayName:"NavContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/NavContainer.tsx#NavContainer"]={docgenInfo:NavContainer_NavContainer.__docgenInfo,name:"NavContainer",path:"src/components/Navigation/NavBar/NavContainer.tsx#NavContainer"})}catch(__react_docgen_typescript_loader_error){}const NavItem_NavItem=({children})=>(0,jsx_runtime.jsx)("li",{children});NavItem_NavItem.displayName="NavItem";try{NavItem_NavItem.displayName="NavItem",NavItem_NavItem.__docgenInfo={description:"",displayName:"NavItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/NavItem.tsx#NavItem"]={docgenInfo:NavItem_NavItem.__docgenInfo,name:"NavItem",path:"src/components/Navigation/NavBar/NavItem.tsx#NavItem"})}catch(__react_docgen_typescript_loader_error){}const NavItems_NavItems=({children})=>(0,jsx_runtime.jsx)("ul",{className:emotion_css_esm.iv`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        list-style: none;
        & > * {
          margin-left: 20px;
        }
      `,children});NavItems_NavItems.displayName="NavItems";try{NavItems_NavItems.displayName="NavItems",NavItems_NavItems.__docgenInfo={description:"",displayName:"NavItems",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/NavItems.tsx#NavItems"]={docgenInfo:NavItems_NavItems.__docgenInfo,name:"NavItems",path:"src/components/Navigation/NavBar/NavItems.tsx#NavItems"})}catch(__react_docgen_typescript_loader_error){}const NavLinkStyles=emotion_css_esm.iv`
  color: ${styles.wE.colors.gray[700]};
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  position: relative;
  font-size: 1.2rem;
  line-height: 1.5rem;
  /* margin: 0.5rem 1.5rem; */
  outline: none;
  &:focus-visible {
    outline: 2px solid ${styles.wE.colors.green[500]};
    outline-offset: 2px;
  }
  /*
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${styles.wE.colors.gray[700]};
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom le;
  }
  */
  &:hover {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`,NavLink_NavLink=({children,className,...rest})=>(0,jsx_runtime.jsx)("li",{className:(0,emotion_css_esm.cx)(className),children:(0,jsx_runtime.jsx)("a",{className:(0,emotion_css_esm.cx)(NavLinkStyles),...rest,children})});NavLink_NavLink.displayName="NavLink";try{NavLink_NavLink.displayName="NavLink",NavLink_NavLink.__docgenInfo={description:"",displayName:"NavLink",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/NavLink.tsx#NavLink"]={docgenInfo:NavLink_NavLink.__docgenInfo,name:"NavLink",path:"src/components/Navigation/NavBar/NavLink.tsx#NavLink"})}catch(__react_docgen_typescript_loader_error){}var constants=__webpack_require__("./src/utils/constants.ts");const SkipLink=emotion_styled_browser_esm.Z.a`
  background: ${styles.wE.colors.green[600]};
  color: ${styles.wE.colors.clear[100]};
  font-weight: 700;
  left: 50%;
  padding: 6px;
  position: absolute;
  top: 3px;
  transform: translateY(-150%);
  text-decoration: none;
  z-index: 100000;

  &:focus {
    transform: translateY(0%);
  }
`,components_SkipLink=SkipLink;try{SkipLink.displayName="SkipLink",SkipLink.__docgenInfo={description:"",displayName:"SkipLink",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SkipLink.tsx#SkipLink"]={docgenInfo:SkipLink.__docgenInfo,name:"SkipLink",path:"src/components/SkipLink.tsx#SkipLink"})}catch(__react_docgen_typescript_loader_error){}const SimpleNav_StyledIcon=emotion_css_esm.iv`
  font-size: 1.8rem;
  color: ${styles.wE.colors.gray[700]};
`,Navbar=emotion_css_esm.iv`
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding: 0 1.4rem;
  margin-bottom: ${constants.dK};
  border-bottom: 2px solid ${styles.wE.colors.gray[100]};

  &:focus-visible {
    outline: 2px solid ${styles.wE.colors.green[500]};
    outline-offset: 2px;
  }

  ${respond.L.md} {
    padding: 0 4rem;
  }
`,NavbarLogo=emotion_css_esm.iv`
  color: ${styles.wE.colors.gray[700]};
  cursor: pointer;

  & > a:focus-visible {
    outline: 2px solid ${styles.wE.colors.green[500]};
    outline-offset: 2px;
  }
`,SimpleNav_Navigation=({children})=>{const{t,i18n}=(0,es.$G)(),moocfiUrl=-1!==i18n?.language?.indexOf("fi")?"https://www.mooc.fi":"https://www.mooc.fi/en";return(0,jsx_runtime.jsxs)("nav",{role:"navigation",className:(0,emotion_css_esm.cx)(Navbar),"aria-label":t("navigation-menu"),children:[(0,jsx_runtime.jsx)(components_SkipLink,{href:"#maincontent",children:t("skip-to-content")}),(0,jsx_runtime.jsx)("div",{className:(0,emotion_css_esm.cx)(NavbarLogo),children:(0,jsx_runtime.jsx)("a",{href:moocfiUrl,"aria-label":t("home-page"),role:"button",children:(0,jsx_runtime.jsx)(index_es.G,{className:(0,emotion_css_esm.cx)(SimpleNav_StyledIcon),icon:free_solid_svg_icons.QGx,"aria-label":t("home-page"),"aria-hidden":"true"})})}),children]})};SimpleNav_Navigation.displayName="Navigation";const NavBar_SimpleNav=SimpleNav_Navigation;try{SimpleNav.displayName="SimpleNav",SimpleNav.__docgenInfo={description:"",displayName:"SimpleNav",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"simple"'},{value:'"complex"'}]}},frontPageUrl:{defaultValue:null,description:"",name:"frontPageUrl",required:!1,type:{name:"string"}},faqUrl:{defaultValue:null,description:"",name:"faqUrl",required:!1,type:{name:"string"}},SearchDialogComponent:{defaultValue:null,description:"",name:"SearchDialogComponent",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/SimpleNav.tsx#SimpleNav"]={docgenInfo:SimpleNav.__docgenInfo,name:"SimpleNav",path:"src/components/Navigation/NavBar/SimpleNav.tsx#SimpleNav"})}catch(__react_docgen_typescript_loader_error){}const NavBar=props=>"simple"===props.variant?(0,jsx_runtime.jsx)(NavBar_SimpleNav,{...props}):(0,jsx_runtime.jsx)(NavBar_ComplexNav,{...props});NavBar.displayName="NavBar";try{NavBar.displayName="NavBar",NavBar.__docgenInfo={description:"",displayName:"NavBar",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"simple"'},{value:'"complex"'}]}},frontPageUrl:{defaultValue:null,description:"",name:"frontPageUrl",required:!1,type:{name:"string"}},faqUrl:{defaultValue:null,description:"",name:"faqUrl",required:!1,type:{name:"string"}},SearchDialogComponent:{defaultValue:null,description:"",name:"SearchDialogComponent",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/index.tsx#NavBar"]={docgenInfo:NavBar.__docgenInfo,name:"NavBar",path:"src/components/Navigation/NavBar/index.tsx#NavBar"})}catch(__react_docgen_typescript_loader_error){}try{Menu.displayName="Menu",Menu.__docgenInfo={description:"",displayName:"Menu",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/index.tsx#Menu"]={docgenInfo:Menu.__docgenInfo,name:"Menu",path:"src/components/Navigation/NavBar/index.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/index.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"src/components/Navigation/NavBar/index.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}try{NavItems.displayName="NavItems",NavItems.__docgenInfo={description:"",displayName:"NavItems",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/index.tsx#NavItems"]={docgenInfo:NavItems.__docgenInfo,name:"NavItems",path:"src/components/Navigation/NavBar/index.tsx#NavItems"})}catch(__react_docgen_typescript_loader_error){}try{NavLink.displayName="NavLink",NavLink.__docgenInfo={description:"",displayName:"NavLink",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/index.tsx#NavLink"]={docgenInfo:NavLink.__docgenInfo,name:"NavLink",path:"src/components/Navigation/NavBar/index.tsx#NavLink"})}catch(__react_docgen_typescript_loader_error){}try{NavContainer.displayName="NavContainer",NavContainer.__docgenInfo={description:"",displayName:"NavContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/index.tsx#NavContainer"]={docgenInfo:NavContainer.__docgenInfo,name:"NavContainer",path:"src/components/Navigation/NavBar/index.tsx#NavContainer"})}catch(__react_docgen_typescript_loader_error){}try{NavItem.displayName="NavItem",NavItem.__docgenInfo={description:"",displayName:"NavItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/NavBar/index.tsx#NavItem"]={docgenInfo:NavItem.__docgenInfo,name:"NavItem",path:"src/components/Navigation/NavBar/index.tsx#NavItem"})}catch(__react_docgen_typescript_loader_error){}const Navigation_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react";\nimport React from "react";\nimport { NavBar } from "../src/components/Navigation/NavBar";\nexport default ({\n  title: "Components/NavBar/Nav",\n  component: NavBar\n} as Meta);\nconst Component = NavBar;\ntype ComponentProps = React.ComponentProps<typeof NavBar>;\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />;\nexport const Simple: Story<ComponentProps> = Template.bind({});\nSimple.args = {\n  children: "NavBar",\n  variant: "simple"\n};\nexport const Complex: Story<ComponentProps> = Template.bind({});\nComplex.args = {\n  children: "NavBar",\n  variant: "complex"\n};\nSimple.parameters = {\n  ...Simple.parameters,\n  docs: {\n    ...Simple.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Simple.parameters?.docs?.source\n    }\n  }\n};\nComplex.parameters = {\n  ...Complex.parameters,\n  docs: {\n    ...Complex.parameters?.docs,\n    source: {\n      originalSource: "(args: ComponentProps) => <Component {...args} />",\n      ...Complex.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{simple:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}},complex:{startLoc:{col:40,line:11},endLoc:{col:89,line:11},startBody:{col:40,line:11},endBody:{col:89,line:11}}}}},title:"Components/NavBar/Nav",component:NavBar},Component=NavBar,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Simple=Template.bind({});Simple.args={children:"NavBar",variant:"simple"};const Complex=Template.bind({});Complex.args={children:"NavBar",variant:"complex"},Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Simple.parameters?.docs?.source}}},Complex.parameters={...Complex.parameters,docs:{...Complex.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Complex.parameters?.docs?.source}}};const __namedExportsOrder=["Simple","Complex"]},"./src/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/index.ts"),_styles_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/styles/constants.ts"),_styles_respond__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/styles/respond.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BASE_BUTTON_STYLES=`\n  position: relative;\n  display: inline-block;\n  padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes.large.padding};\n  font-family: ${_styles__WEBPACK_IMPORTED_MODULE_2__.$O};\n  font-weight: ${_styles__WEBPACK_IMPORTED_MODULE_2__.vC.normal};\n  font-size: ${_styles_constants__WEBPACK_IMPORTED_MODULE_3__.Kx}px;\n  line-height: normal;\n  vertical-align: baseline;\n  cursor: pointer;\n  user-select: none;\n  text-decoration: none;\n  text-align: center;\n  justify-content: center;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  transition: all 150ms linear;\n  border: 2.5px solid transparent;\n  z-index: 1;\n  white-space: nowrap;\n\n  color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.text};\n  background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.bg};\n  border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.border};\n\n  &:hover {\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.hoverBorder};\n    background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.hoverBg};\n    border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.hoverBorder};\n    text-decoration: none;\n  }\n\n  &:active {\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.hoverText};\n    background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.activeBg};\n    border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.hoverBorder};\n  }\n\n  &:disabled {\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.disabledText};\n    background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.disabledBg};\n    border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.primary.disabledBorder};\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    text-decoration: none;\n  }\n\n\n  ${_styles_respond__WEBPACK_IMPORTED_MODULE_4__.L.sm} {\n    white-space: nowrap;\n  }\n`,PrimaryButtonStyles=props=>`\n    text-transform: ${props.transform};\n    padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes[props.size].padding};\n  `,PrimaryButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.button`
  ${BASE_BUTTON_STYLES}
  ${PrimaryButtonStyles}
`,SecondaryButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.button`
  ${BASE_BUTTON_STYLES}
  ${props=>`\n    text-transform: ${props.transform};\n    padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes[props.size].padding};\n\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.text};\n    background: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.bg};\n    border: 1.5px solid ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.border};\n\n    &:hover,\n    &:focus {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.hoverText};\n      box-shadow: 0 0 0 1px ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.text};\n      border: 1.5px solid ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.text};\n    }\n\n    &:active {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.hoverText};\n      background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.activeBg};\n    }\n\n    &:disabled {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.disabledText};\n      background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.disabledBg};\n      border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.disabledBorder};\n    }\n  `}
`,RejectButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.button`
  ${BASE_BUTTON_STYLES}
  ${props=>`\n    text-transform: ${props.transform};\n    padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes[props.size].padding};\n\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.text};\n    background: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.bg};\n    border: 1.5px solid ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.border};\n\n    &:hover,\n    &:focus {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.hoverText};\n      box-shadow: 0 0 0 1px ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.text};\n      border: 1.5px solid ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.text};\n    }\n\n    &:active {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.hoverText};\n      background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.activeBg};\n    }\n\n    &:disabled {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.disabledText};\n      background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.disabledBg};\n      border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.reject.disabledBorder};\n    }\n  `}
`,TertiaryButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.button`
  ${BASE_BUTTON_STYLES}
  ${props=>`\n    text-transform: ${props.transform};\n    padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes[props.size].padding};\n\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.text};\n    background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.bg};\n    border: unset;\n\n    &:hover {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.hoverText};\n      background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.hoverBg};\n    }\n\n    &:active {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.hoverText};\n      background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.activeBg};\n    }\n\n    &:disabled {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.disabledText};\n      background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.disabledBg};\n      border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.disabledBorder};\n    }\n  `}
`,BlueButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.button`
  ${BASE_BUTTON_STYLES}
  ${props=>`\n    text-transform: ${props.transform};\n    padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes[props.size].padding};\n\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.tertiary.text};\n    background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.wE.colors.blue[500]};\n    border: unset;\n    border: 2px solid ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.border};\n\n    &:hover {\n      border: 2px solid ${_styles__WEBPACK_IMPORTED_MODULE_2__.wE.colors.blue[600]};\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.wE.colors.blue[700]};\n    }\n\n    &:active {\n      border: 2px solid ${_styles__WEBPACK_IMPORTED_MODULE_2__.wE.colors.blue[400]};\n    }\n\n    &:disabled {\n      color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.disabledText};\n      background-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.disabledBg};\n      border-color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.secondary.disabledBorder};\n    }\n  `}
`,WhiteButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.button`
  ${BASE_BUTTON_STYLES}
  ${props=>`\n    text-transform: ${props.transform};\n    padding: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.buttonSizes[props.size].padding};\n\n    color: ${_styles__WEBPACK_IMPORTED_MODULE_2__.rS.white.text};\n    background: #FCFCFC;\n    border: 1.5px solid #DEDEDE;\n\n  `}
`,Button=(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.label`
  ${BASE_BUTTON_STYLES}
`,(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(((props,ref)=>{switch(props.variant){case"primary":default:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PrimaryButton,{ref,...props});case"secondary":case"outlined":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SecondaryButton,{ref,...props});case"reject":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(RejectButton,{ref,...props});case"tertiary":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TertiaryButton,{ref,...props});case"blue":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlueButton,{ref,...props});case"white":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(WhiteButton,{ref,...props})}})));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{PrimaryButtonStyles.displayName="Button",PrimaryButtonStyles.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/respond.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>respondToOrLarger});const mediaQuery=minWidth=>`@media (min-width: ${minWidth}rem)`,respondToOrLarger={xxxs:mediaQuery(2),xxs:mediaQuery(25),xs:mediaQuery(30),sm:mediaQuery(36),md:mediaQuery(48),lg:mediaQuery(62),xl:mediaQuery(75),xxl:mediaQuery(87.5),xxxl:mediaQuery(100),xxxxl:mediaQuery(125),xxxxxl:mediaQuery(150)}},"./src/utils/accessibility.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function runCallbackIfEnterPressed(event,callback){"Enter"===event.key&&callback()}__webpack_require__.d(__webpack_exports__,{L:()=>runCallbackIfEnterPressed})},"?c969":()=>{},"?b051":()=>{},"?b710":()=>{}}]);
//# sourceMappingURL=Navigation-stories.6b89547c.iframe.bundle.js.map