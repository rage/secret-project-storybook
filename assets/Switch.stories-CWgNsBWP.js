import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{r,t as i}from"./emotion-css.esm-DyUfwQgn.js";import{l as a,t as o,x as s}from"./iframe-DP1T4v_l.js";function c(){let[e,t]=(0,l.useState)(!0);return(0,u.jsx)(a,{label:`Controlled (${e?`on`:`off`})`,checked:e,onChange:e=>t(e.currentTarget.checked)})}var l,u,d,f,p,m,h,g;e((()=>{r(),l=t(n()),o(),u=s(),d=i`
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