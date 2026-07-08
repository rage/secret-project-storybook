import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{C as r,U as i,dt as a,pt as o,t as s}from"./iframe-DU-gbSMd.js";function c(){let[e,t]=(0,l.useState)(`123`);return(0,u.jsx)(r,{label:`Controlled`,value:e,onValueChange:t})}var l,u,d,f,p,m,h,g;t((()=>{o(),l=e(n()),s(),u=i(),d=a`
  display: grid;
  gap: 16px;
  max-width: 420px;
`,f={title:`Components/OtpField`,component:r,args:{label:`Verification code`,length:6}},p={},m={render:()=>(0,u.jsxs)(`div`,{className:d,children:[(0,u.jsx)(r,{label:`Default`}),(0,u.jsx)(r,{label:`Invalid`,errorMessage:`Code is required`}),(0,u.jsx)(r,{label:`Disabled`,disabled:!0,defaultValue:`123456`})]})},h={render:()=>(0,u.jsx)(c,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <OtpField label="Default" />
      <OtpField label="Invalid" errorMessage="Code is required" />
      <OtpField label="Disabled" disabled defaultValue="123456" />
    </div>
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledOtpFieldStory />
} satisfies Story`,...h.parameters?.docs?.source}}},g=[`Playground`,`States`,`Controlled`]}))();export{h as Controlled,p as Playground,m as States,g as __namedExportsOrder,f as default};