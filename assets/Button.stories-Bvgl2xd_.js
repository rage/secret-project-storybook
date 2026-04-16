import{B as e,j as s,c as N}from"./iframe-DXyIoFKT.js";import{a as T,b as D}from"./index-Cdc9tOFE.js";import"./preload-helper-Dp1pzeXC.js";import"./extends-CF3RwP-h.js";const d=N`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,P=N`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`,E={title:"Components/Button",component:e,parameters:{docs:{description:{component:"Accessible button component built on React Aria with size/variant styling, icon slots, and loading state."}}},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]},size:{control:"select",options:["sm","md","lg"]}}},a={args:{variant:"primary",size:"md",children:"Button"}},r={render:()=>s.jsxs("div",{className:d,children:[s.jsx(e,{variant:"primary",children:"Primary"}),s.jsx(e,{variant:"secondary",children:"Secondary"}),s.jsx(e,{variant:"tertiary",children:"Tertiary"})]})},n={render:()=>s.jsxs("div",{className:P,children:[s.jsx(e,{size:"sm",children:"Small"}),s.jsx(e,{size:"md",children:"Medium"}),s.jsx(e,{size:"lg",children:"Large"})]})},t={render:()=>s.jsxs("div",{className:d,children:[s.jsx(e,{isLoading:!0,loadingLabel:"Loading",children:"Saving"}),s.jsx(e,{variant:"secondary",isLoading:!0,loadingLabel:"Loading",children:"Syncing"})]})},i={render:()=>s.jsxs("div",{className:d,children:[s.jsx(e,{icon:s.jsx(T,{"aria-hidden":"true",size:16}),iconPosition:"start",children:"Starred"}),s.jsx(e,{icon:s.jsx(D,{"aria-hidden":"true",size:16}),iconPosition:"end",children:"Continue"})]})},o={render:()=>s.jsxs("div",{className:d,children:[s.jsx(e,{disabled:!0,children:"Disabled"}),s.jsx(e,{variant:"secondary",disabled:!0,children:"Disabled"}),s.jsx(e,{variant:"tertiary",disabled:!0,children:"Disabled"})]})};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "Button"
  }
} satisfies StoryType`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,p,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
} satisfies StoryType`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,v,B;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className={sizesCss}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
} satisfies StoryType`,...(B=(v=n.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var x,h,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Button isLoading loadingLabel="Loading">
        Saving
      </Button>
      <Button variant="secondary" isLoading loadingLabel="Loading">
        Syncing
      </Button>
    </div>
} satisfies StoryType`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,j,z;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Button icon={<Star aria-hidden="true" size={16} />} iconPosition="start">
        Starred
      </Button>
      <Button icon={<ArrowRight aria-hidden="true" size={16} />} iconPosition="end">
        Continue
      </Button>
    </div>
} satisfies StoryType`,...(z=(j=i.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var L,f,C;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Button disabled>Disabled</Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
      <Button variant="tertiary" disabled>
        Disabled
      </Button>
    </div>
} satisfies StoryType`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const I=["Playground","Variants","Sizes","Loading","WithIcons","Disabled"];export{o as Disabled,t as Loading,a as Playground,n as Sizes,r as Variants,i as WithIcons,I as __namedExportsOrder,E as default};
