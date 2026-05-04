import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{r,t as i}from"./emotion-css.esm-DyUfwQgn.js";import{p as a,t as o,x as s}from"./iframe-DP1T4v_l.js";function c(){let[e,t]=(0,l.useState)(`123`);return(0,u.jsx)(a,{label:`Controlled`,value:e,onChange:e=>t(e.currentTarget.value)})}var l,u,d,f,p,m,h,g;e((()=>{r(),l=t(n()),o(),u=s(),d=i`
  display: grid;
  gap: 16px;
  max-width: 420px;
`,f={title:`Components/OtpField`,component:a,args:{label:`Verification code`,length:6}},p={},m={render:()=>(0,u.jsxs)(`div`,{className:d,children:[(0,u.jsx)(a,{label:`Default`}),(0,u.jsx)(a,{label:`Invalid`,errorMessage:`Code is required`}),(0,u.jsx)(a,{label:`Disabled`,disabled:!0,defaultValue:`123456`})]})},h={render:()=>(0,u.jsx)(c,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <OtpField label="Default" />
      <OtpField label="Invalid" errorMessage="Code is required" />
      <OtpField label="Disabled" disabled defaultValue="123456" />
    </div>
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledOtpFieldStory />
} satisfies Story`,...h.parameters?.docs?.source}}},g=[`Playground`,`States`,`Controlled`]}))();export{h as Controlled,p as Playground,m as States,g as __namedExportsOrder,f as default};