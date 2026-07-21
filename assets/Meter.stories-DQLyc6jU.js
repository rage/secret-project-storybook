import{i as e}from"./preload-helper-B45gAKPr.js";import{St as t,it as n,t as r,u as i,wt as a}from"./iframe-CAN3q5_A.js";var o,s,c,l,u,d,f;e((()=>{a(),r(),o=n(),s=t`
  display: grid;
  gap: 20px;
  max-width: 360px;
`,c={title:`Components/Meter`,component:i,args:{label:`Completed`,value:5040,maxValue:10800,threshold:10800,valueLabel:`1.4 h of 3 h (47%)`,tone:`warning`}},l={},u={render:()=>(0,o.jsxs)(`div`,{className:s,children:[(0,o.jsx)(i,{label:`Intro to Programming`,value:5040,maxValue:10800,threshold:10800,valueLabel:`1.4 h of 3 h (47%)`,tone:`warning`}),(0,o.jsx)(i,{label:`Data Structures`,value:3240,maxValue:10800,threshold:10800,valueLabel:`0.9 h of 3 h (30%)`,tone:`neutral`})]})},d={render:()=>(0,o.jsxs)(`div`,{className:s,children:[(0,o.jsx)(i,{label:`Module 1 gap`,value:720,maxValue:3e3,tone:`neutral`,showLabel:!1}),(0,o.jsx)(i,{label:`Module 3 gap`,value:3e3,maxValue:3e3,tone:`neutral`,showLabel:!1}),(0,o.jsx)(i,{label:`Module 4 gap`,value:120,maxValue:3e3,tone:`warning`,showLabel:!1})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Meter label="Intro to Programming" value={5040} maxValue={10800} threshold={10800} valueLabel="1.4 h of 3 h (47%)" tone="warning" />
      <Meter label="Data Structures" value={3240} maxValue={10800} threshold={10800} valueLabel="0.9 h of 3 h (30%)" tone="neutral" />
    </div>
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Meter label="Module 1 gap" value={720} maxValue={3000} tone="neutral" showLabel={false} />
      <Meter label="Module 3 gap" value={3000} maxValue={3000} tone="neutral" showLabel={false} />
      <Meter label="Module 4 gap" value={120} maxValue={3000} tone="warning" showLabel={false} />
    </div>
} satisfies Story`,...d.parameters?.docs?.source}}},f=[`Playground`,`DurationVsThreshold`,`CompactGapBars`]}))();export{d as CompactGapBars,u as DurationVsThreshold,l as Playground,f as __namedExportsOrder,c as default};