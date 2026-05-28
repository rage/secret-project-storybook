import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{r,t as i}from"./emotion-css.esm-DyUfwQgn.js";import{C as a,p as o,t as s}from"./iframe-Dm9cNdLO.js";function c(){let[e,t]=(0,l.useState)(`123`);return(0,u.jsx)(o,{label:`Controlled`,value:e,onValueChange:t})}var l,u,d,f,p,m,h,g;e((()=>{r(),l=t(n()),s(),u=a(),d=i`
  display: grid;
  gap: 16px;
  max-width: 420px;
`,f={title:`Components/OtpField`,component:o,args:{label:`Verification code`,length:6}},p={},m={render:()=>(0,u.jsxs)(`div`,{className:d,children:[(0,u.jsx)(o,{label:`Default`}),(0,u.jsx)(o,{label:`Invalid`,errorMessage:`Code is required`}),(0,u.jsx)(o,{label:`Disabled`,disabled:!0,defaultValue:`123456`})]})},h={render:()=>(0,u.jsx)(c,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <OtpField label="Default" />
      <OtpField label="Invalid" errorMessage="Code is required" />
      <OtpField label="Disabled" disabled defaultValue="123456" />
    </div>
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledOtpFieldStory />
} satisfies Story`,...h.parameters?.docs?.source}}},g=[`Playground`,`States`,`Controlled`]}))();export{h as Controlled,p as Playground,m as States,g as __namedExportsOrder,f as default};