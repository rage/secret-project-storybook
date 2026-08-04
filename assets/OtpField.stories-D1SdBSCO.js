import{i as e}from"./preload-helper-B45gAKPr.js";import{Mt as t,Pt as n,lt as r,mt as i,q as a,t as o,ut as s}from"./iframe-BF4AkqfF.js";function c(){let{control:e}=s({defaultValues:{code:`123`}});return(0,d.jsx)(a,{name:`code`,control:e,label:`Verification code`,length:6})}function l(){let{control:e}=s({defaultValues:{code:``}}),{control:t}=s({defaultValues:{code:``}}),{control:n}=s({defaultValues:{code:`123456`}});return(0,d.jsxs)(`div`,{className:f,children:[(0,d.jsx)(a,{name:`code`,control:e,label:`Default`}),(0,d.jsx)(a,{name:`code`,control:t,label:`Invalid`,errorMessage:`Code is required`}),(0,d.jsx)(a,{name:`code`,control:n,label:`Disabled`,isDisabled:!0})]})}function u(){let{control:e}=s({defaultValues:{code:`123`}});return(0,d.jsx)(a,{name:`code`,control:e,label:`Controlled`})}var d,f,p,m,h,g,_;e((()=>{n(),r(),o(),d=i(),f=t`
  display: grid;
  gap: 16px;
  max-width: 420px;
`,p={title:`Components/OtpField`,component:a},m={render:()=>(0,d.jsx)(c,{})},h={render:()=>(0,d.jsx)(l,{})},g={render:()=>(0,d.jsx)(u,{})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <PlaygroundStory />
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <StatesStory />
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledOtpFieldStory />
} satisfies Story`,...g.parameters?.docs?.source}}},_=[`Playground`,`States`,`Controlled`]}))();export{g as Controlled,m as Playground,h as States,_ as __namedExportsOrder,p as default};