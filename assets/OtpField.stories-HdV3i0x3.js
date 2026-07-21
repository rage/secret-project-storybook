import{i as e}from"./preload-helper-B45gAKPr.js";import{$ as t,L as n,St as r,et as i,it as a,t as o,wt as s}from"./iframe-CAN3q5_A.js";function c(){let{control:e}=i({defaultValues:{code:`123`}});return(0,d.jsx)(n,{name:`code`,control:e,label:`Verification code`,length:6})}function l(){let{control:e}=i({defaultValues:{code:``}}),{control:t}=i({defaultValues:{code:``}}),{control:r}=i({defaultValues:{code:`123456`}});return(0,d.jsxs)(`div`,{className:f,children:[(0,d.jsx)(n,{name:`code`,control:e,label:`Default`}),(0,d.jsx)(n,{name:`code`,control:t,label:`Invalid`,errorMessage:`Code is required`}),(0,d.jsx)(n,{name:`code`,control:r,label:`Disabled`,isDisabled:!0})]})}function u(){let{control:e}=i({defaultValues:{code:`123`}});return(0,d.jsx)(n,{name:`code`,control:e,label:`Controlled`})}var d,f,p,m,h,g,_;e((()=>{s(),t(),o(),d=a(),f=r`
  display: grid;
  gap: 16px;
  max-width: 420px;
`,p={title:`Components/OtpField`,component:n},m={render:()=>(0,d.jsx)(c,{})},h={render:()=>(0,d.jsx)(l,{})},g={render:()=>(0,d.jsx)(u,{})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <PlaygroundStory />
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <StatesStory />
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledOtpFieldStory />
} satisfies Story`,...g.parameters?.docs?.source}}},_=[`Playground`,`States`,`Controlled`]}))();export{g as Controlled,m as Playground,h as States,_ as __namedExportsOrder,p as default};