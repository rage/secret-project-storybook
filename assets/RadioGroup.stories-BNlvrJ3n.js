import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{r,t as i}from"./emotion-css.esm-DyUfwQgn.js";import{C as a,d as o,f as s,t as c}from"./iframe-Dm9cNdLO.js";function l(){let[e,t]=(0,u.useState)(`alpha`);return(0,d.jsxs)(s,{label:`Controlled`,value:e,onChange:t,children:[(0,d.jsx)(o,{label:`Alpha`,value:`alpha`}),(0,d.jsx)(o,{label:`Beta`,value:`beta`})]})}var u,d,f,p,m,h,g,_;e((()=>{r(),u=t(n()),c(),d=a(),f=i`
  display: grid;
  gap: 24px;
`,p={title:`Components/RadioGroup`,component:s},m={render:()=>(0,d.jsxs)(s,{label:`Theme`,defaultValue:`light`,children:[(0,d.jsx)(o,{label:`Light`,value:`light`}),(0,d.jsx)(o,{label:`Dark`,value:`dark`}),(0,d.jsx)(o,{label:`System`,value:`system`})]})},h={render:()=>(0,d.jsxs)(`div`,{className:f,children:[(0,d.jsxs)(s,{label:`Delivery speed`,errorMessage:`Choose one`,children:[(0,d.jsx)(o,{label:`Standard`,value:`standard`}),(0,d.jsx)(o,{label:`Express`,value:`express`})]}),(0,d.jsxs)(s,{label:`Orientation`,orientation:`horizontal`,defaultValue:`left`,children:[(0,d.jsx)(o,{label:`Left`,value:`left`}),(0,d.jsx)(o,{label:`Right`,value:`right`})]})]})},g={render:()=>(0,d.jsx)(l,{})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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