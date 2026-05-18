import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{r,t as i}from"./emotion-css.esm-DyUfwQgn.js";import{C as a,t as o,u as s}from"./iframe-CIKWDTJj.js";function c(){let[e,t]=(0,l.useState)(`b`);return(0,u.jsx)(s,{label:`Controlled`,options:[{value:`a`,label:`Option A`},{value:`b`,label:`Option B`},{value:`c`,label:`Option C`}],value:e,onChange:e=>t(e.currentTarget.value)})}var l,u,d,f,p,m,h,g,_;e((()=>{r(),l=t(n()),o(),u=a(),d=i`
  display: grid;
  gap: 16px;
  max-width: 360px;
`,f={title:`Components/Select`,component:s,parameters:{docs:{description:{component:"Custom select built on React Aria `useSelect`: the visible trigger is a native `button` (not `role=combobox` on the trigger). Screen readers still get the correct listbox relationship via React Aria; keyboard support follows the WAI-ARIA listbox pattern."}}}},p=[{value:`fi`,label:`Finland`},{value:`se`,label:`Sweden`},{value:`no`,label:`Norway`}],m={render:()=>(0,u.jsx)(s,{defaultValue:`fi`,label:`Country`,options:p})},h={render:()=>(0,u.jsxs)(`div`,{className:d,children:[(0,u.jsx)(s,{label:`Default`,options:[{value:`1`,label:`One`},{value:`2`,label:`Two`}],placeholder:`Choose`}),(0,u.jsx)(s,{disabled:!0,label:`Disabled`,options:[{value:`1`,label:`One`}]}),(0,u.jsx)(s,{errorMessage:`Selection required`,label:`Invalid`,options:[{value:`1`,label:`One`},{value:`2`,label:`Two`}],placeholder:`Choose`})]})},g={render:()=>(0,u.jsx)(c,{})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Select defaultValue="fi" label="Country" options={countryOptions} />
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Select label="Default" options={[{
      value: "1",
      label: "One"
    }, {
      value: "2",
      label: "Two"
    }]} placeholder="Choose" />
      <Select disabled label="Disabled" options={[{
      value: "1",
      label: "One"
    }]} />
      <Select errorMessage="Selection required" label="Invalid" options={[{
      value: "1",
      label: "One"
    }, {
      value: "2",
      label: "Two"
    }]} placeholder="Choose" />
    </div>
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledSelectStory />
} satisfies Story`,...g.parameters?.docs?.source}}},_=[`Playground`,`States`,`Controlled`]}))();export{g as Controlled,m as Playground,h as States,_ as __namedExportsOrder,f as default};