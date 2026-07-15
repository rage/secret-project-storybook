import{i as e}from"./preload-helper-B45gAKPr.js";import{$ as t,Et as n,L as r,Ot as i,et as a,it as o,t as s}from"./iframe-6L8_Xta5.js";function c(){let{control:e}=a({defaultValues:{code:`123`}});return(0,d.jsx)(r,{name:`code`,control:e,label:`Verification code`,length:6})}function l(){let{control:e}=a({defaultValues:{code:``}}),{control:t}=a({defaultValues:{code:``}}),{control:n}=a({defaultValues:{code:`123456`}});return(0,d.jsxs)(`div`,{className:f,children:[(0,d.jsx)(r,{name:`code`,control:e,label:`Default`}),(0,d.jsx)(r,{name:`code`,control:t,label:`Invalid`,errorMessage:`Code is required`}),(0,d.jsx)(r,{name:`code`,control:n,label:`Disabled`,isDisabled:!0})]})}function u(){let{control:e}=a({defaultValues:{code:`123`}});return(0,d.jsx)(r,{name:`code`,control:e,label:`Controlled`})}var d,f,p,m,h,g,_;e((()=>{i(),t(),s(),d=o(),f=n`
  display: grid;
  gap: 16px;
  max-width: 420px;
`,p={title:`Components/OtpField`,component:r},m={render:()=>(0,d.jsx)(c,{})},h={render:()=>(0,d.jsx)(l,{})},g={render:()=>(0,d.jsx)(u,{})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <PlaygroundStory />
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <StatesStory />
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledOtpFieldStory />
} satisfies Story`,...g.parameters?.docs?.source}}},_=[`Playground`,`States`,`Controlled`]}))();export{g as Controlled,m as Playground,h as States,_ as __namedExportsOrder,p as default};