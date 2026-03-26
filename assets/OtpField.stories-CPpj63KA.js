import{O as s,j as e,c as f,r as C}from"./iframe-CJ3_LdV8.js";import"./preload-helper-Dp1pzeXC.js";const S=f`
  display: grid;
  gap: 16px;
  max-width: 420px;
`,v={title:"Components/OtpField",component:s,args:{label:"Verification code",length:6}};function O(){const[x,g]=C.useState("123");return e.jsx(s,{label:"Controlled",value:x,onChange:b=>g(b.currentTarget.value)})}const r={},a={render:()=>e.jsxs("div",{className:S,children:[e.jsx(s,{label:"Default"}),e.jsx(s,{label:"Invalid",errorMessage:"Code is required"}),e.jsx(s,{label:"Disabled",disabled:!0,defaultValue:"123456"})]})},t={render:()=>e.jsx(O,{})};var o,l,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{} satisfies Story",...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var n,i,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <OtpField label="Default" />
      <OtpField label="Invalid" errorMessage="Code is required" />
      <OtpField label="Disabled" disabled defaultValue="123456" />
    </div>
} satisfies Story`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,u,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ControlledOtpFieldStory />
} satisfies Story`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const F=["Playground","States","Controlled"];export{t as Controlled,r as Playground,a as States,F as __namedExportsOrder,v as default};
