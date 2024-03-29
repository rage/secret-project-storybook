"use strict";(self.webpackChunkshared_module=self.webpackChunkshared_module||[]).push([[3417],{"./stories/DropdownMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DropdownMenu_stories});var react=__webpack_require__("./node_modules/react/index.js"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),atlas_icons_react=__webpack_require__("./node_modules/@vectopus/atlas-icons-react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),usePopper=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),src_styles=__webpack_require__("./src/styles/index.ts"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const itemInnerStyles=emotion_css_esm.AH`
  border: none;
  padding: 0.5rem 1.5rem;
  background-color: white;
  cursor: pointer;
  display: block;
  color: ${src_styles.$7.colors.gray[500]};
  font-weight: 600;
  text-decoration: none;
  width: 100%;
  white-space: nowrap;
  text-align: left;
  &:focus {
    filter: brightness(92%) contrast(110%);
    border: 2px solid black;
    outline: none;
  }
`,DropdownMenuItem=({item,closeMenu})=>item.href?(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(link_default(),{href:item.href,className:itemInnerStyles,children:item.label})}):(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("button",{onClick:()=>{try{item.onClick&&item.onClick()}finally{closeMenu()}},className:itemInnerStyles,children:item.label})});DropdownMenuItem.displayName="DropdownMenuItem";const DropdownMenu_DropdownMenuItem=DropdownMenuItem;try{DropdownMenuItem.displayName="DropdownMenuItem",DropdownMenuItem.__docgenInfo={description:"",displayName:"DropdownMenuItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"DropdownMenuItemType"}},closeMenu:{defaultValue:null,description:"",name:"closeMenu",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropdownMenu/DropdownMenuItem.tsx#DropdownMenuItem"]={docgenInfo:DropdownMenuItem.__docgenInfo,name:"DropdownMenuItem",path:"src/components/DropdownMenu/DropdownMenuItem.tsx#DropdownMenuItem"})}catch(__react_docgen_typescript_loader_error){}const DropdownMenu=({items})=>{const{t}=(0,es.Bd)(),[expanded,setExpanded]=(0,react.useState)(!1),[referenceElement,setReferenceElement]=(0,react.useState)(null),[popperElement,setPopperElement]=(0,react.useState)(null),{styles,attributes}=(0,usePopper.E)(referenceElement,popperElement,{placement:"bottom-start",strategy:"fixed",modifiers:[{name:"offset",enabled:!0,options:{offset:[0,5]}},{name:"preventOverflow",enabled:!0,options:{padding:8}},{name:"flip",enabled:!0}]}),handleOutsideClick=(0,react.useCallback)((event=>{expanded&&(referenceElement&&(referenceElement.contains(event.target)||referenceElement===event.target)||setExpanded(!1))}),[expanded,referenceElement]);return(0,react.useEffect)((()=>(document.addEventListener("click",handleOutsideClick),()=>{document.removeEventListener("click",handleOutsideClick)})),[handleOutsideClick]),(0,jsx_runtime.jsxs)("div",{className:emotion_css_esm.AH`
        display: flex;
        align-items: center;
      `,children:[(0,jsx_runtime.jsx)("button",{"aria-expanded":expanded,ref:setReferenceElement,onClick:()=>{setExpanded(!expanded)},className:emotion_css_esm.AH`
          background-color: transparent;
          border: none;
          color: ${src_styles.$7.colors.gray[400]};
          cursor: pointer;
          padding: 0 0.66em;
          margin: 0 0.66em;
          &:hover {
            background-color: ${src_styles.$7.colors.clear[200]};
            border-radius: 50px;
          }
        `,"aria-label":t(expanded?"close":"dropdown-menu"),children:(0,jsx_runtime.jsx)(atlas_icons_react.txq,{size:16,weight:"bold"})}),expanded&&(0,jsx_runtime.jsx)("div",{style:styles.popper,...attributes.popper,className:emotion_css_esm.AH`
            z-index: 200;
          `,ref:setPopperElement,children:(0,jsx_runtime.jsx)("ul",{className:emotion_css_esm.AH`
              box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.1);
              width: fit-content;
              list-style: none;
              padding: 0;
              border-radius: 4px;
              margin: 0;
              font-size: 17px;

              li + li {
                border-top: 2px solid ${src_styles.$7.colors.clear[200]};
              }

              li:hover {
                filter: brightness(92%) contrast(110%);
              }
            `,children:items.filter((item=>null!==item)).map((item=>null===item?null:(0,jsx_runtime.jsx)(DropdownMenu_DropdownMenuItem,{item,closeMenu:()=>{setExpanded(!1)}},item.label)))})})]})};DropdownMenu.displayName="DropdownMenu";const components_DropdownMenu=DropdownMenu;try{DropdownMenu.displayName="DropdownMenu",DropdownMenu.__docgenInfo={description:"",displayName:"DropdownMenu",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"(DropdownMenuItemType | null)[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropdownMenu/index.tsx#DropdownMenu"]={docgenInfo:DropdownMenu.__docgenInfo,name:"DropdownMenu",path:"src/components/DropdownMenu/index.tsx#DropdownMenu"})}catch(__react_docgen_typescript_loader_error){}const DropdownMenu_stories={parameters:{storySource:{source:'\nimport { Meta, Story } from "@storybook/react"\nimport React from "react"\n\nimport DropdownMenu from "../src/components/DropdownMenu"\n\nexport default {\n  title: "Components/DropdownMenu",\n  component: DropdownMenu,\n} as Meta\n\nconst Component = DropdownMenu\n\ntype ComponentProps = React.ComponentProps<typeof Component>\n\nconst Template: Story<ComponentProps> = (args: ComponentProps) => <Component {...args} />\n\nexport const Default: Story<ComponentProps> = Template.bind({})\nDefault.args = {\n  items: [\n    {\n      label: "First option",\n      onClick: () => {},\n    },\n    {\n      label: "Second option",\n      onClick: () => {},\n    },\n    { label: "Third option", href: "https://www.example.com" },\n  ],\n}\n',locationsMap:{default:{startLoc:{col:40,line:16},endLoc:{col:89,line:16},startBody:{col:40,line:16},endBody:{col:89,line:16}}}}},title:"Components/DropdownMenu",component:components_DropdownMenu},Component=components_DropdownMenu,Template=args=>(0,jsx_runtime.jsx)(Component,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={items:[{label:"First option",onClick:()=>{}},{label:"Second option",onClick:()=>{}},{label:"Third option",href:"https://www.example.com"}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: ComponentProps) => <Component {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);
//# sourceMappingURL=DropdownMenu-stories.1e1dfde1.iframe.bundle.js.map