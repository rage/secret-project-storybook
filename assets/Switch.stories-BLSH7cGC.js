import{i as e}from"./preload-helper-B45gAKPr.js";import{$ as t,St as n,et as r,it as i,k as a,t as o,tt as s,wt as c}from"./iframe-CAN3q5_A.js";function l(){let{control:e}=r({defaultValues:{enabled:!1}});return(0,f.jsx)(a,{name:`enabled`,control:e,label:`Enable notifications`})}function u(){let{control:e}=r({defaultValues:{default:!1,checked:!0,disabled:!1,invalid:!1}});return(0,f.jsxs)(`div`,{className:p,children:[(0,f.jsx)(a,{name:`default`,control:e,label:`Default`}),(0,f.jsx)(a,{name:`checked`,control:e,label:`Checked`}),(0,f.jsx)(a,{name:`disabled`,control:e,label:`Disabled`,isDisabled:!0}),(0,f.jsx)(a,{name:`invalid`,control:e,label:`Invalid`,errorMessage:`This setting is required`})]})}function d(){let{control:e}=r({defaultValues:{enabled:!0}});return(0,f.jsx)(a,{name:`enabled`,control:e,label:`Controlled (${s({control:e,name:`enabled`})?`on`:`off`})`})}var f,p,m,h,g,_,v;e((()=>{c(),t(),o(),f=i(),p=n`
  display: grid;
  gap: 16px;
`,m={title:`Components/Switch`,component:a},h={render:()=>(0,f.jsx)(l,{})},g={render:()=>(0,f.jsx)(u,{})},_={render:()=>(0,f.jsx)(d,{})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <PlaygroundStory />
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <StatesStory />
} satisfies Story`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledSwitchStory />
} satisfies Story`,..._.parameters?.docs?.source}}},v=[`Playground`,`States`,`Controlled`]}))();export{_ as Controlled,h as Playground,g as States,v as __namedExportsOrder,m as default};