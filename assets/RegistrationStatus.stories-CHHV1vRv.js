import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{r as t,t as n}from"./emotion-css.esm-D2eg9Mn3.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{h as i,n as a,p as o}from"./iframe-CgHI3aZu.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{t(),a(),s=r(),c=n`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`,l=n`
  display: grid;
  gap: 16px;
`,u={done:`Registered in Sisu`,current:`Being registered`,"action-needed":`We need your student number`,failed:`Registration failed`,superseded:`Replaced by a later attempt`,upcoming:`Not started`},d={title:`Components/RegistrationStatus`,component:i,args:{state:`done`,children:u.done},parameters:{docs:{description:{component:"One credit-registration state in two forms: `RegistrationStatusBadge` for list rows and table cells, `RegistrationStatusHeadline` for a page that exists to report the state. Both take their tone and icon from the same maps, so the two forms cannot drift."}}}},f={render:()=>(0,s.jsx)(`div`,{className:c,children:Object.entries(u).map(([e,t])=>(0,s.jsx)(i,{state:e,children:t},e))})},p={render:()=>(0,s.jsx)(`div`,{className:c,children:Object.entries(u).map(([e,t])=>(0,s.jsx)(i,{size:`compact`,state:e,children:t},e))})},m={render:()=>(0,s.jsx)(`div`,{className:l,children:Object.entries(u).map(([e,t])=>(0,s.jsx)(o,{state:e,children:t},e))})},h=[`Badges`,`CompactBadges`,`Headlines`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className={rowCss}>
      {Object.entries(labels).map(([state, label]) => <RegistrationStatusBadge key={state} state={state as keyof typeof labels}>
          {label}
        </RegistrationStatusBadge>)}
    </div>
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className={rowCss}>
      {Object.entries(labels).map(([state, label]) => <RegistrationStatusBadge key={state} size="compact" state={state as keyof typeof labels}>
          {label}
        </RegistrationStatusBadge>)}
    </div>
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      {Object.entries(labels).map(([state, label]) => <RegistrationStatusHeadline key={state} state={state as keyof typeof labels}>
          {label}
        </RegistrationStatusHeadline>)}
    </div>
} satisfies Story`,...m.parameters?.docs?.source}}}})))()}g();export{f as Badges,p as CompactBadges,m as Headlines,h as __namedExportsOrder,d as default};