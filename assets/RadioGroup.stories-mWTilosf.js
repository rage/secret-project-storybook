import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{r,t as i}from"./emotion-css.esm-DyUfwQgn.js";import{d as a,f as o,t as s,x as c}from"./iframe-DP1T4v_l.js";function l(){let[e,t]=(0,u.useState)(`alpha`);return(0,d.jsxs)(o,{label:`Controlled`,value:e,onChange:t,children:[(0,d.jsx)(a,{label:`Alpha`,value:`alpha`}),(0,d.jsx)(a,{label:`Beta`,value:`beta`})]})}var u,d,f,p,m,h,g,_;e((()=>{r(),u=t(n()),s(),d=c(),f=i`
  display: grid;
  gap: 24px;
`,p={title:`Components/RadioGroup`,component:o},m={render:()=>(0,d.jsxs)(o,{label:`Theme`,defaultValue:`light`,children:[(0,d.jsx)(a,{label:`Light`,value:`light`}),(0,d.jsx)(a,{label:`Dark`,value:`dark`}),(0,d.jsx)(a,{label:`System`,value:`system`})]})},h={render:()=>(0,d.jsxs)(`div`,{className:f,children:[(0,d.jsxs)(o,{label:`Delivery speed`,errorMessage:`Choose one`,children:[(0,d.jsx)(a,{label:`Standard`,value:`standard`}),(0,d.jsx)(a,{label:`Express`,value:`express`})]}),(0,d.jsxs)(o,{label:`Orientation`,orientation:`horizontal`,defaultValue:`left`,children:[(0,d.jsx)(a,{label:`Left`,value:`left`}),(0,d.jsx)(a,{label:`Right`,value:`right`})]})]})},g={render:()=>(0,d.jsx)(l,{})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Theme" defaultValue="light">
      <Radio label="Light" value="light" />
      <Radio label="Dark" value="dark" />
      <Radio label="System" value="system" />
    </RadioGroup>
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <RadioGroup label="Delivery speed" errorMessage="Choose one">
        <Radio label="Standard" value="standard" />
        <Radio label="Express" value="express" />
      </RadioGroup>
      <RadioGroup label="Orientation" orientation="horizontal" defaultValue="left">
        <Radio label="Left" value="left" />
        <Radio label="Right" value="right" />
      </RadioGroup>
    </div>
} satisfies Story`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledRadioGroupStory />
} satisfies Story`,...g.parameters?.docs?.source}}},_=[`Vertical`,`States`,`Controlled`]}))();export{g as Controlled,h as States,m as Vertical,_ as __namedExportsOrder,p as default};