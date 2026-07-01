import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{U as n,an as r,ct as i,h as a,ot as o,t as s}from"./iframe-DDfmRLCP.js";function c(){let[e,t]=(0,l.useState)(!0);return(0,u.jsx)(a,{label:`Controlled (${e?`on`:`off`})`,checked:e,onChange:e=>t(e.currentTarget.checked)})}var l,u,d,f,p,m,h,g;t((()=>{i(),l=e(r()),s(),u=n(),d=o`
  display: grid;
  gap: 16px;
`,f={title:`Components/Switch`,component:a,args:{label:`Enable notifications`}},p={},m={render:()=>(0,u.jsxs)(`div`,{className:d,children:[(0,u.jsx)(a,{label:`Default`}),(0,u.jsx)(a,{label:`Checked`,defaultChecked:!0}),(0,u.jsx)(a,{label:`Disabled`,disabled:!0}),(0,u.jsx)(a,{label:`Invalid`,errorMessage:`This setting is required`})]})},h={render:()=>(0,u.jsx)(c,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Switch label="Default" />
      <Switch label="Checked" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Invalid" errorMessage="This setting is required" />
    </div>
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledSwitchStory />
} satisfies Story`,...h.parameters?.docs?.source}}},g=[`Playground`,`States`,`Controlled`]}))();export{h as Controlled,p as Playground,m as States,g as __namedExportsOrder,f as default};