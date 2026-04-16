import{E as a,j as e,c as C}from"./iframe-DXyIoFKT.js";import{d as E,b as L}from"./index-Cdc9tOFE.js";import"./preload-helper-Dp1pzeXC.js";import"./extends-CF3RwP-h.js";const n=C`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 360px;
`,N=C`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,V={title:"Components/TextField",component:a,parameters:{docs:{description:{component:"Floating-label text field built on React Aria `useTextField`, with size variants, description/error messaging, and optional start/end icons."}}},argTypes:{type:{control:"select",options:["text","email","password"]},fieldSize:{control:"select",options:["sm","md","lg"]}}},r={args:{label:"Email",type:"email",fieldSize:"md",description:"We’ll only use this for account updates.",placeholder:"ignored in floating-label mode",required:!0}},l={render:()=>e.jsxs("div",{className:n,children:[e.jsx(a,{label:"Default"}),e.jsx(a,{label:"With description",description:"Helper text goes here."}),e.jsx(a,{label:"With error",errorMessage:"This field is required."}),e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Read only",defaultValue:"Read-only value",readOnly:!0})]})},i={render:()=>e.jsxs("div",{className:N,children:[e.jsx(a,{label:"Small",fieldSize:"sm"}),e.jsx(a,{label:"Medium",fieldSize:"md"}),e.jsx(a,{label:"Large",fieldSize:"lg"})]})},s={render:()=>e.jsxs("div",{className:n,children:[e.jsx(a,{label:"Email",type:"email",iconStart:e.jsx(E,{"aria-hidden":"true",size:16}),description:"Leading icon with floating label."}),e.jsx(a,{label:"Search",type:"search",iconEnd:e.jsx(L,{"aria-hidden":"true",size:16}),description:"Trailing icon with floating label."})]})},t={render:()=>e.jsxs("div",{className:n,children:[e.jsx(a,{label:"Default value",defaultValue:"Prefilled value"}),e.jsx(a,{label:"Controlled value",value:"Controlled value",onChange:()=>{}})]})},M="VeryLongUnbrokenLabelStringThatShouldWrapGracefullyInNarrowLayoutsWithoutOverflowingTheViewportHorizontally",o={render:()=>e.jsxs("div",{className:n,children:[e.jsx(a,{label:M,description:"Helper text that is intentionally long so description wrapping can be reviewed at narrow widths."}),e.jsx(a,{label:"Label",errorMessage:"Error text that is intentionally long so error wrapping can be reviewed at narrow widths without horizontal overflow."})]})};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Email",
    type: "email",
    fieldSize: "md",
    description: "We’ll only use this for account updates.",
    placeholder: "ignored in floating-label mode",
    required: true
  }
} satisfies StoryType`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className={columnCss}>
      <TextField label="Default" />
      <TextField label="With description" description="Helper text goes here." />
      <TextField label="With error" errorMessage="This field is required." />
      <TextField label="Disabled" disabled />
      <TextField label="Read only" defaultValue="Read-only value" readOnly />
    </div>
} satisfies StoryType`,...(g=(m=l.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,b,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className={rowCss}>
      <TextField label="Small" fieldSize="sm" />
      <TextField label="Medium" fieldSize="md" />
      <TextField label="Large" fieldSize="lg" />
    </div>
} satisfies StoryType`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,y,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className={columnCss}>
      <TextField label="Email" type="email" iconStart={<Mail aria-hidden="true" size={16} />} description="Leading icon with floating label." />
      <TextField label="Search" type="search" iconEnd={<ArrowRight aria-hidden="true" size={16} />} description="Trailing icon with floating label." />
    </div>
} satisfies StoryType`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,S,T;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className={columnCss}>
      <TextField label="Default value" defaultValue="Prefilled value" />
      <TextField label="Controlled value" value="Controlled value" onChange={() => {}} />
    </div>
} satisfies StoryType`,...(T=(S=t.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var j,z,F;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className={columnCss}>
      <TextField label={longUnbroken} description="Helper text that is intentionally long so description wrapping can be reviewed at narrow widths." />
      <TextField label="Label" errorMessage="Error text that is intentionally long so error wrapping can be reviewed at narrow widths without horizontal overflow." />
    </div>
} satisfies StoryType`,...(F=(z=o.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const H=["Playground","States","Sizes","WithIcons","Prefilled","LongMessages"];export{o as LongMessages,r as Playground,t as Prefilled,i as Sizes,l as States,s as WithIcons,H as __namedExportsOrder,V as default};
