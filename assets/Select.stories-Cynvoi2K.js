import{S as o,j as e,c as m,r as b}from"./iframe-DXyIoFKT.js";import"./preload-helper-Dp1pzeXC.js";const j=m`
  display: grid;
  gap: 16px;
  max-width: 360px;
`,y={title:"Components/Select",component:o,parameters:{docs:{description:{component:"Custom select built on React Aria `useSelect`: the visible trigger is a native `button` (not `role=combobox` on the trigger). Screen readers still get the correct listbox relationship via React Aria; keyboard support follows the WAI-ARIA listbox pattern."}}}};function C(){const[v,x]=b.useState("b");return e.jsxs(o,{label:"Controlled",value:v,onChange:h=>x(h.currentTarget.value),children:[e.jsx("option",{value:"a",children:"Option A"}),e.jsx("option",{value:"b",children:"Option B"}),e.jsx("option",{value:"c",children:"Option C"})]})}const t={render:()=>e.jsxs(o,{label:"Country",defaultValue:"fi",children:[e.jsx("option",{value:"fi",children:"Finland"}),e.jsx("option",{value:"se",children:"Sweden"}),e.jsx("option",{value:"no",children:"Norway"})]})},n={render:()=>e.jsxs("div",{className:j,children:[e.jsxs(o,{label:"Default",children:[e.jsx("option",{value:"",children:"Choose"}),e.jsx("option",{value:"1",children:"One"})]}),e.jsx(o,{label:"Disabled",disabled:!0,children:e.jsx("option",{value:"1",children:"One"})}),e.jsxs(o,{label:"Invalid",errorMessage:"Selection required",children:[e.jsx("option",{value:"",children:"Choose"}),e.jsx("option",{value:"1",children:"One"})]})]})},r={render:()=>e.jsx(C,{})};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Select label="Country" defaultValue="fi">
      <option value="fi">Finland</option>
      <option value="se">Sweden</option>
      <option value="no">Norway</option>
    </Select>
} satisfies Story`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var i,c,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Select label="Default">
        <option value="">Choose</option>
        <option value="1">One</option>
      </Select>
      <Select label="Disabled" disabled>
        <option value="1">One</option>
      </Select>
      <Select label="Invalid" errorMessage="Selection required">
        <option value="">Choose</option>
        <option value="1">One</option>
      </Select>
    </div>
} satisfies Story`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,S;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ControlledSelectStory />
} satisfies Story`,...(S=(u=r.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const O=["Playground","States","Controlled"];export{r as Controlled,t as Playground,n as States,O as __namedExportsOrder,y as default};
