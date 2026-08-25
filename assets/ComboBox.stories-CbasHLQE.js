import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t,t as n}from"./emotion-css.esm-DsoSFdsS.js";import{J as r,W as i,Y as a,t as o}from"./components-Z9vn7rOp.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";function c({defaultSelectedKey:e=null,items:t,...n}){let{control:r}=a({defaultValues:{value:e}});return(0,l.jsx)(i,{name:`value`,control:r,getItemKey:e=>e.id,getItemTextValue:e=>e.label,items:t,...n,children:e=>e.label})}var l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{t(),r(),o(),l=s(),u=n`
  display: grid;
  gap: 16px;
  max-width: 420px;
`,d=[{id:`alpha`,label:`Alpha`},{id:`beta`,label:`Beta`},{id:`gamma`,label:`Gamma`},{id:`delta`,label:`Delta`}],f=[{id:`long1`,label:`VeryLongOptionLabelWithoutSpacesThatShouldWrapInsideTheListboxPopoverWhenTheViewportOrTriggerIsNarrow`},{id:`long2`,label:`Short`}],p={title:`Components/ComboBox`,component:c,args:{label:`Project`,items:d}},m={},h={render:()=>(0,l.jsxs)(`div`,{className:u,children:[(0,l.jsx)(c,{label:`Default`,items:d}),(0,l.jsx)(c,{label:`Custom value`,items:d,allowsCustomValue:!0}),(0,l.jsx)(c,{label:`Invalid`,items:d,errorMessage:`Selection required`})]})},g={render:()=>(0,l.jsx)(c,{label:`Controlled`,items:d,defaultSelectedKey:`beta`})},_={render:()=>(0,l.jsx)(`div`,{className:u,children:(0,l.jsx)(c,{label:`Project`,items:f})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <ComboBoxDemo label="Default" items={items} />
      <ComboBoxDemo label="Custom value" items={items} allowsCustomValue />
      <ComboBoxDemo label="Invalid" items={items} errorMessage="Selection required" />
    </div>
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ComboBoxDemo label="Controlled" items={items} defaultSelectedKey="beta" />
} satisfies Story`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <ComboBoxDemo label="Project" items={longOptionItems} />
    </div>
} satisfies Story`,..._.parameters?.docs?.source}}},v=[`Playground`,`States`,`Controlled`,`LongOptions`]})))()}y();export{g as Controlled,_ as LongOptions,m as Playground,h as States,v as __namedExportsOrder,p as default};