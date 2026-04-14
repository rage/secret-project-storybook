import{v as s,j as o,c as y,r as f}from"./iframe-D0P9lDOs.js";import"./preload-helper-Dp1pzeXC.js";const j=y`
  display: grid;
  gap: 16px;
  max-width: 420px;
`,a=[{id:"alpha",label:"Alpha"},{id:"beta",label:"Beta"},{id:"gamma",label:"Gamma"},{id:"delta",label:"Delta"}],O=[{id:"long1",label:"VeryLongOptionLabelWithoutSpacesThatShouldWrapInsideTheListboxPopoverWhenTheViewportOrTriggerIsNarrow"},{id:"long2",label:"Short"}],L={title:"Components/ComboBox",component:s};function P(){const[e,B]=f.useState("beta");return o.jsx(s,{label:"Controlled",items:a,selectedKey:e,onSelectionChange:B,children:v=>v.label})}const r={render:()=>o.jsx(s,{label:"Project",items:a,children:e=>e.label})},t={render:()=>o.jsxs("div",{className:j,children:[o.jsx(s,{label:"Default",items:a,children:e=>e.label}),o.jsx(s,{label:"Custom value",items:a,allowsCustomValue:!0,children:e=>e.label}),o.jsx(s,{label:"Invalid",items:a,errorMessage:"Selection required",children:e=>e.label})]})},l={render:()=>o.jsx(P,{})},n={render:()=>o.jsx("div",{className:j,children:o.jsx(s,{label:"Project",items:O,children:e=>e.label})})};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <ComboBox label="Project" items={items}>
      {item => item.label}
    </ComboBox>
} satisfies Story`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,b,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <ComboBox label="Default" items={items}>
        {item => item.label}
      </ComboBox>
      <ComboBox label="Custom value" items={items} allowsCustomValue>
        {item => item.label}
      </ComboBox>
      <ComboBox label="Invalid" items={items} errorMessage="Selection required">
        {item => item.label}
      </ComboBox>
    </div>
} satisfies Story`,...(p=(b=t.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var u,x,C;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <ControlledComboBoxStory />
} satisfies Story`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var g,S,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <ComboBox label="Project" items={longOptionItems}>
        {item => item.label}
      </ComboBox>
    </div>
} satisfies Story`,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const N=["Playground","States","Controlled","LongOptions"];export{l as Controlled,n as LongOptions,r as Playground,t as States,N as __namedExportsOrder,L as default};
