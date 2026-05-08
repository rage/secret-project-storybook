import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{r,t as i}from"./emotion-css.esm-DyUfwQgn.js";import{t as a,u as o,x as s}from"./iframe-CkG2IuzH.js";function c(){let[e,t]=(0,l.useState)(`b`);return(0,u.jsxs)(o,{label:`Controlled`,value:e,onChange:e=>t(e.currentTarget.value),children:[(0,u.jsx)(`option`,{value:`a`,children:`Option A`}),(0,u.jsx)(`option`,{value:`b`,children:`Option B`}),(0,u.jsx)(`option`,{value:`c`,children:`Option C`})]})}var l,u,d,f,p,m,h,g;e((()=>{r(),l=t(n()),a(),u=s(),d=i`
  display: grid;
  gap: 16px;
  max-width: 360px;
`,f={title:`Components/Select`,component:o,parameters:{docs:{description:{component:"Custom select built on React Aria `useSelect`: the visible trigger is a native `button` (not `role=combobox` on the trigger). Screen readers still get the correct listbox relationship via React Aria; keyboard support follows the WAI-ARIA listbox pattern."}}}},p={render:()=>(0,u.jsxs)(o,{label:`Country`,defaultValue:`fi`,children:[(0,u.jsx)(`option`,{value:`fi`,children:`Finland`}),(0,u.jsx)(`option`,{value:`se`,children:`Sweden`}),(0,u.jsx)(`option`,{value:`no`,children:`Norway`})]})},m={render:()=>(0,u.jsxs)(`div`,{className:d,children:[(0,u.jsxs)(o,{label:`Default`,children:[(0,u.jsx)(`option`,{value:``,children:`Choose`}),(0,u.jsx)(`option`,{value:`1`,children:`One`})]}),(0,u.jsx)(o,{label:`Disabled`,disabled:!0,children:(0,u.jsx)(`option`,{value:`1`,children:`One`})}),(0,u.jsxs)(o,{label:`Invalid`,errorMessage:`Selection required`,children:[(0,u.jsx)(`option`,{value:``,children:`Choose`}),(0,u.jsx)(`option`,{value:`1`,children:`One`})]})]})},h={render:()=>(0,u.jsx)(c,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Select label="Country" defaultValue="fi">
      <option value="fi">Finland</option>
      <option value="se">Sweden</option>
      <option value="no">Norway</option>
    </Select>
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledSelectStory />
} satisfies Story`,...h.parameters?.docs?.source}}},g=[`Playground`,`States`,`Controlled`]}))();export{h as Controlled,p as Playground,m as States,g as __namedExportsOrder,f as default};