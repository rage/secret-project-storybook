import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t,t as n}from"./emotion-css.esm-DsoSFdsS.js";import{J as r,P as i,Y as a,t as o}from"./components-_-uPbBBQ.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";function c(){let{control:e}=a({defaultValues:{code:`123`}});return(0,d.jsx)(i,{name:`code`,control:e,label:`Verification code`,length:6})}function l(){let{control:e}=a({defaultValues:{code:``}}),{control:t}=a({defaultValues:{code:``}}),{control:n}=a({defaultValues:{code:`123456`}});return(0,d.jsxs)(`div`,{className:f,children:[(0,d.jsx)(i,{name:`code`,control:e,label:`Default`}),(0,d.jsx)(i,{name:`code`,control:t,label:`Invalid`,errorMessage:`Code is required`}),(0,d.jsx)(i,{name:`code`,control:n,label:`Disabled`,isDisabled:!0})]})}function u(){let{control:e}=a({defaultValues:{code:`123`}});return(0,d.jsx)(i,{name:`code`,control:e,label:`Controlled`})}var d,f,p,m,h,g,_;function v(){return(v=e((()=>{t(),r(),o(),d=s(),f=n`
  display: grid;
  gap: 16px;
  max-width: 420px;
`,p={title:`Components/OtpField`,component:i},m={render:()=>(0,d.jsx)(c,{})},h={render:()=>(0,d.jsx)(l,{})},g={render:()=>(0,d.jsx)(u,{})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <PlaygroundStory />
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <StatesStory />
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledOtpFieldStory />
} satisfies Story`,...g.parameters?.docs?.source}}},_=[`Playground`,`States`,`Controlled`]})))()}v();export{g as Controlled,m as Playground,h as States,_ as __namedExportsOrder,p as default};