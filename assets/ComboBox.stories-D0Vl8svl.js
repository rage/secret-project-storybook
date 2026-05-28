import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{r,t as i}from"./emotion-css.esm-DyUfwQgn.js";import{C as a,t as o,v as s}from"./iframe-Dm9cNdLO.js";function c(){let[e,t]=(0,l.useState)(`beta`);return(0,u.jsx)(s,{getItemKey:e=>e.id,getItemTextValue:e=>e.label,label:`Controlled`,items:f,selectedKey:e,onSelectionChange:t,children:e=>e.label})}var l,u,d,f,p,m,h,g,_,v,y;e((()=>{r(),l=t(n()),o(),u=a(),d=i`
  display: grid;
  gap: 16px;
  max-width: 420px;
`,f=[{id:`alpha`,label:`Alpha`},{id:`beta`,label:`Beta`},{id:`gamma`,label:`Gamma`},{id:`delta`,label:`Delta`}],p=[{id:`long1`,label:`VeryLongOptionLabelWithoutSpacesThatShouldWrapInsideTheListboxPopoverWhenTheViewportOrTriggerIsNarrow`},{id:`long2`,label:`Short`}],m={title:`Components/ComboBox`,component:s},h={render:()=>(0,u.jsx)(s,{getItemKey:e=>e.id,getItemTextValue:e=>e.label,label:`Project`,items:f,children:e=>e.label})},g={render:()=>(0,u.jsxs)(`div`,{className:d,children:[(0,u.jsx)(s,{getItemKey:e=>e.id,getItemTextValue:e=>e.label,label:`Default`,items:f,children:e=>e.label}),(0,u.jsx)(s,{allowsCustomValue:!0,getItemKey:e=>e.id,getItemTextValue:e=>e.label,label:`Custom value`,items:f,children:e=>e.label}),(0,u.jsx)(s,{errorMessage:`Selection required`,getItemKey:e=>e.id,getItemTextValue:e=>e.label,label:`Invalid`,items:f,children:e=>e.label})]})},_={render:()=>(0,u.jsx)(c,{})},v={render:()=>(0,u.jsx)(`div`,{className:d,children:(0,u.jsx)(s,{getItemKey:e=>e.id,getItemTextValue:e=>e.label,label:`Project`,items:p,children:e=>e.label})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ComboBox getItemKey={item => item.id} getItemTextValue={item => item.label} label="Project" items={items}>
      {item => item.label}
    </ComboBox>
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <ComboBox getItemKey={item => item.id} getItemTextValue={item => item.label} label="Default" items={items}>
        {item => item.label}
      </ComboBox>
      <ComboBox allowsCustomValue getItemKey={item => item.id} getItemTextValue={item => item.label} label="Custom value" items={items}>
        {item => item.label}
      </ComboBox>
      <ComboBox errorMessage="Selection required" getItemKey={item => item.id} getItemTextValue={item => item.label} label="Invalid" items={items}>
        {item => item.label}
      </ComboBox>
    </div>
} satisfies Story`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledComboBoxStory />
} satisfies Story`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <ComboBox getItemKey={item => item.id} getItemTextValue={item => item.label} label="Project" items={longOptionItems}>
        {item => item.label}
      </ComboBox>
    </div>
} satisfies Story`,...v.parameters?.docs?.source}}},y=[`Playground`,`States`,`Controlled`,`LongOptions`]}))();export{_ as Controlled,v as LongOptions,h as Playground,g as States,y as __namedExportsOrder,m as default};