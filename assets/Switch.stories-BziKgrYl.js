import{z as s,j as e,c as g,r as C}from"./iframe-CJ3_LdV8.js";import"./preload-helper-Dp1pzeXC.js";const f=g`
  display: grid;
  gap: 16px;
`,w={title:"Components/Switch",component:s,args:{label:"Enable notifications"}};function x(){const[o,S]=C.useState(!0);return e.jsx(s,{label:`Controlled (${o?"on":"off"})`,checked:o,onChange:b=>S(b.currentTarget.checked)})}const r={},t={render:()=>e.jsxs("div",{className:f,children:[e.jsx(s,{label:"Default"}),e.jsx(s,{label:"Checked",defaultChecked:!0}),e.jsx(s,{label:"Disabled",disabled:!0}),e.jsx(s,{label:"Invalid",errorMessage:"This setting is required"})]})},a={render:()=>e.jsx(x,{})};var c,l,n;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{} satisfies Story",...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var d,i,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Switch label="Default" />
      <Switch label="Checked" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Invalid" errorMessage="This setting is required" />
    </div>
} satisfies Story`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,m,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ControlledSwitchStory />
} satisfies Story`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const y=["Playground","States","Controlled"];export{a as Controlled,r as Playground,t as States,y as __namedExportsOrder,w as default};
