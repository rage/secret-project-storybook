import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t,t as n}from"./emotion-css.esm-DsoSFdsS.js";import{at as r,it as i,nt as a,t as o}from"./components-BFIiifp_.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";function c({defaultChecked:e=!1,...t}){let{control:n}=r({defaultValues:{accepted:e}});return(0,l.jsx)(a,{name:`accepted`,control:n,...t})}var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{t(),i(),o(),l=s(),u=n`
  display: grid;
  gap: 16px;
`,d=n`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
`,f={title:`Components/Checkbox`,component:c,args:{label:`Accept terms`}},p={},m={render:()=>(0,l.jsxs)(`div`,{className:d,children:[(0,l.jsx)(c,{label:`Only rows that need attention`,isInline:!0}),(0,l.jsx)(c,{label:`Show replaced attempts`,isInline:!0})]})},h={render:()=>(0,l.jsxs)(`div`,{className:u,children:[(0,l.jsx)(c,{label:`Default`}),(0,l.jsx)(c,{label:`Checked`,defaultChecked:!0}),(0,l.jsx)(c,{label:`Indeterminate`,isIndeterminate:!0}),(0,l.jsx)(c,{label:`Disabled`,isDisabled:!0}),(0,l.jsx)(c,{label:`Invalid`,errorMessage:`Required`})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className={toolbarCss}>
      <CheckboxDemo label="Only rows that need attention" isInline />
      <CheckboxDemo label="Show replaced attempts" isInline />
    </div>
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <CheckboxDemo label="Default" />
      <CheckboxDemo label="Checked" defaultChecked />
      <CheckboxDemo label="Indeterminate" isIndeterminate />
      <CheckboxDemo label="Disabled" isDisabled />
      <CheckboxDemo label="Invalid" errorMessage="Required" />
    </div>
} satisfies Story`,...h.parameters?.docs?.source}}},g=[`Playground`,`InlineInAToolbar`,`States`]})))()}_();export{m as InlineInAToolbar,p as Playground,h as States,g as __namedExportsOrder,f as default};