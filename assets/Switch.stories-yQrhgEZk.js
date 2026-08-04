import{i as e}from"./preload-helper-B45gAKPr.js";import{Mt as t,Pt as n,dt as r,k as i,lt as a,mt as o,t as s,ut as c}from"./iframe-BF4AkqfF.js";function l(){let{control:e}=c({defaultValues:{enabled:!1}});return(0,f.jsx)(i,{name:`enabled`,control:e,label:`Enable notifications`})}function u(){let{control:e}=c({defaultValues:{default:!1,checked:!0,disabled:!1,invalid:!1}});return(0,f.jsxs)(`div`,{className:p,children:[(0,f.jsx)(i,{name:`default`,control:e,label:`Default`}),(0,f.jsx)(i,{name:`checked`,control:e,label:`Checked`}),(0,f.jsx)(i,{name:`disabled`,control:e,label:`Disabled`,isDisabled:!0}),(0,f.jsx)(i,{name:`invalid`,control:e,label:`Invalid`,errorMessage:`This setting is required`})]})}function d(){let{control:e}=c({defaultValues:{enabled:!0}});return(0,f.jsx)(i,{name:`enabled`,control:e,label:`Controlled (${r({control:e,name:`enabled`})?`on`:`off`})`})}var f,p,m,h,g,_,v;e((()=>{n(),a(),s(),f=o(),p=t`
  display: grid;
  gap: 16px;
`,m={title:`Components/Switch`,component:i},h={render:()=>(0,f.jsx)(l,{})},g={render:()=>(0,f.jsx)(u,{})},_={render:()=>(0,f.jsx)(d,{})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <PlaygroundStory />
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <StatesStory />
} satisfies Story`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledSwitchStory />
} satisfies Story`,..._.parameters?.docs?.source}}},v=[`Playground`,`States`,`Controlled`]}))();export{_ as Controlled,h as Playground,g as States,v as __namedExportsOrder,m as default};