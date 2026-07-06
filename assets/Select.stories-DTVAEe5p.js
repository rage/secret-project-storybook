import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{U as r,_ as i,dt as a,pt as o,t as s}from"./iframe-DX-7slnQ.js";function c(){let[e,t]=(0,l.useState)(`b`);return(0,u.jsx)(i,{label:`Controlled`,options:[{value:`a`,label:`Option A`},{value:`b`,label:`Option B`},{value:`c`,label:`Option C`}],value:e,onChange:e=>t(e.currentTarget.value)})}var l,u,d,f,p,m,h,g,_;t((()=>{o(),l=e(n()),s(),u=r(),d=a`
  display: grid;
  gap: 16px;
  max-width: 360px;
`,f={title:`Components/Select`,component:i,parameters:{docs:{description:{component:"Custom select built on React Aria `useSelect`: the visible trigger is a native `button` (not `role=combobox` on the trigger). Screen readers still get the correct listbox relationship via React Aria; keyboard support follows the WAI-ARIA listbox pattern."}}}},p=[{value:`fi`,label:`Finland`},{value:`se`,label:`Sweden`},{value:`no`,label:`Norway`}],m={render:()=>(0,u.jsx)(i,{defaultValue:`fi`,label:`Country`,options:p})},h={render:()=>(0,u.jsxs)(`div`,{className:d,children:[(0,u.jsx)(i,{label:`Default`,options:[{value:`1`,label:`One`},{value:`2`,label:`Two`}],placeholder:`Choose`}),(0,u.jsx)(i,{disabled:!0,label:`Disabled`,options:[{value:`1`,label:`One`}]}),(0,u.jsx)(i,{errorMessage:`Selection required`,label:`Invalid`,options:[{value:`1`,label:`One`},{value:`2`,label:`Two`}],placeholder:`Choose`})]})},g={render:()=>(0,u.jsx)(c,{})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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