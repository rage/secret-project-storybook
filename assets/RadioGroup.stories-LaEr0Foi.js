import{x as r,j as e,y as a,c as v,r as R}from"./iframe-CJ3_LdV8.js";import"./preload-helper-Dp1pzeXC.js";const g=v`
  display: grid;
  gap: 24px;
`,y={title:"Components/RadioGroup",component:r};function j(){const[h,b]=R.useState("alpha");return e.jsxs(r,{label:"Controlled",value:h,onChange:b,children:[e.jsx(a,{label:"Alpha",value:"alpha"}),e.jsx(a,{label:"Beta",value:"beta"})]})}const s={render:()=>e.jsxs(r,{label:"Theme",defaultValue:"light",children:[e.jsx(a,{label:"Light",value:"light"}),e.jsx(a,{label:"Dark",value:"dark"}),e.jsx(a,{label:"System",value:"system"})]})},l={render:()=>e.jsxs("div",{className:g,children:[e.jsxs(r,{label:"Delivery speed",errorMessage:"Choose one",children:[e.jsx(a,{label:"Standard",value:"standard"}),e.jsx(a,{label:"Express",value:"express"})]}),e.jsxs(r,{label:"Orientation",orientation:"horizontal",defaultValue:"left",children:[e.jsx(a,{label:"Left",value:"left"}),e.jsx(a,{label:"Right",value:"right"})]})]})},o={render:()=>e.jsx(j,{})};var t,n,i;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Theme" defaultValue="light">
      <Radio label="Light" value="light" />
      <Radio label="Dark" value="dark" />
      <Radio label="System" value="system" />
    </RadioGroup>
} satisfies Story`,...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,u,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
} satisfies Story`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,m,x;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <ControlledRadioGroupStory />
} satisfies Story`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const C=["Vertical","States","Controlled"];export{o as Controlled,l as States,s as Vertical,C as __namedExportsOrder,y as default};
