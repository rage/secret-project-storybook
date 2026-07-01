import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{C as n,U as r,an as i,ct as a,ot as o,t as s}from"./iframe-B8-D29QV.js";function c(){let[e,t]=(0,l.useState)(`123`);return(0,u.jsx)(n,{label:`Controlled`,value:e,onValueChange:t})}var l,u,d,f,p,m,h,g;t((()=>{a(),l=e(i()),s(),u=r(),d=o`
  display: grid;
  gap: 16px;
  max-width: 420px;
`,f={title:`Components/OtpField`,component:n,args:{label:`Verification code`,length:6}},p={},m={render:()=>(0,u.jsxs)(`div`,{className:d,children:[(0,u.jsx)(n,{label:`Default`}),(0,u.jsx)(n,{label:`Invalid`,errorMessage:`Code is required`}),(0,u.jsx)(n,{label:`Disabled`,disabled:!0,defaultValue:`123456`})]})},h={render:()=>(0,u.jsx)(c,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <OtpField label="Default" />
      <OtpField label="Invalid" errorMessage="Code is required" />
      <OtpField label="Disabled" disabled defaultValue="123456" />
    </div>
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledOtpFieldStory />
} satisfies Story`,...h.parameters?.docs?.source}}},g=[`Playground`,`States`,`Controlled`]}))();export{h as Controlled,p as Playground,m as States,g as __namedExportsOrder,f as default};