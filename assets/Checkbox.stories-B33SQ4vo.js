import{i as e}from"./preload-helper-B45gAKPr.js";import{$ as t,Et as n,Ot as r,Z as i,et as a,it as o,t as s}from"./iframe-6L8_Xta5.js";function c({defaultChecked:e=!1,...t}){let{control:n}=a({defaultValues:{accepted:e}});return(0,l.jsx)(i,{name:`accepted`,control:n,...t})}var l,u,d,f,p,m;e((()=>{r(),t(),s(),l=o(),u=n`
  display: grid;
  gap: 16px;
`,d={title:`Components/Checkbox`,component:c,args:{label:`Accept terms`}},f={},p={render:()=>(0,l.jsxs)(`div`,{className:u,children:[(0,l.jsx)(c,{label:`Default`}),(0,l.jsx)(c,{label:`Checked`,defaultChecked:!0}),(0,l.jsx)(c,{label:`Indeterminate`,isIndeterminate:!0}),(0,l.jsx)(c,{label:`Disabled`,isDisabled:!0}),(0,l.jsx)(c,{label:`Invalid`,errorMessage:`Required`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <CheckboxDemo label="Default" />
      <CheckboxDemo label="Checked" defaultChecked />
      <CheckboxDemo label="Indeterminate" isIndeterminate />
      <CheckboxDemo label="Disabled" isDisabled />
      <CheckboxDemo label="Invalid" errorMessage="Required" />
    </div>
} satisfies Story`,...p.parameters?.docs?.source}}},m=[`Playground`,`States`]}))();export{f as Playground,p as States,m as __namedExportsOrder,d as default};