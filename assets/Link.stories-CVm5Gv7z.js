import{L as s,j as e,c as z}from"./iframe-CJ3_LdV8.js";import{b as D}from"./index-CtKce3LN.js";import"./preload-helper-Dp1pzeXC.js";import"./extends-CF3RwP-h.js";const d=z`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,T=z`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`,R={title:"Components/Link",component:s,parameters:{docs:{description:{component:"Accessible link component built on React Aria with optional button styling, loading state, and icon slots. When `styledAsButton` is set, padding, variants, and sizes use the same `buttonStyles` primitives as `Button` for visual parity."}}},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]},size:{control:"select",options:["sm","md","lg"]}}},r={args:{href:"/",children:"Visit homepage"}},n={args:{href:"/",styledAsButton:!0,variant:"primary",size:"md",icon:e.jsx(D,{"aria-hidden":"true",size:16}),iconPosition:"start",children:"Open"}},t={render:()=>e.jsxs("div",{className:d,children:[e.jsx(s,{href:"/",styledAsButton:!0,variant:"primary",children:"Primary"}),e.jsx(s,{href:"/",styledAsButton:!0,variant:"secondary",children:"Secondary"}),e.jsx(s,{href:"/",styledAsButton:!0,variant:"tertiary",children:"Tertiary"})]})},a={render:()=>e.jsxs("div",{className:T,children:[e.jsx(s,{href:"/",styledAsButton:!0,size:"sm",children:"Small"}),e.jsx(s,{href:"/",styledAsButton:!0,size:"md",children:"Medium"}),e.jsx(s,{href:"/",styledAsButton:!0,size:"lg",children:"Large"})]})},i={render:()=>e.jsxs("div",{className:d,children:[e.jsx(s,{href:"/",styledAsButton:!0,isLoading:!0,loadingLabel:"Loading",children:"Loading"}),e.jsx(s,{href:"/",styledAsButton:!0,variant:"secondary",isLoading:!0,loadingLabel:"Loading",children:"Loading"})]})},o={render:()=>e.jsxs("div",{className:d,children:[e.jsx(s,{href:"/",styledAsButton:!0,isDisabled:!0,children:"Disabled"}),e.jsx(s,{href:"/",styledAsButton:!0,variant:"secondary",isDisabled:!0,children:"Disabled"}),e.jsx(s,{href:"/",styledAsButton:!0,variant:"tertiary",isDisabled:!0,children:"Disabled"})]})};var l,c,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    href: "/",
    children: "Visit homepage"
  }
} satisfies StoryType`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    href: "/",
    styledAsButton: true,
    variant: "primary",
    size: "md",
    icon: <ArrowRight aria-hidden="true" size={16} />,
    iconPosition: "start",
    children: "Open"
  }
} satisfies StoryType`,...(y=(p=n.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var h,g,L;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Link href="/" styledAsButton variant="primary">
        Primary
      </Link>
      <Link href="/" styledAsButton variant="secondary">
        Secondary
      </Link>
      <Link href="/" styledAsButton variant="tertiary">
        Tertiary
      </Link>
    </div>
} satisfies StoryType`,...(L=(g=t.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var f,v,A;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className={sizesCss}>
      <Link href="/" styledAsButton size="sm">
        Small
      </Link>
      <Link href="/" styledAsButton size="md">
        Medium
      </Link>
      <Link href="/" styledAsButton size="lg">
        Large
      </Link>
    </div>
} satisfies StoryType`,...(A=(v=a.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var k,B,x;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Link href="/" styledAsButton isLoading loadingLabel="Loading">
        Loading
      </Link>
      <Link href="/" styledAsButton variant="secondary" isLoading loadingLabel="Loading">
        Loading
      </Link>
    </div>
} satisfies StoryType`,...(x=(B=i.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var b,S,j;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Link href="/" styledAsButton isDisabled>
        Disabled
      </Link>
      <Link href="/" styledAsButton variant="secondary" isDisabled>
        Disabled
      </Link>
      <Link href="/" styledAsButton variant="tertiary" isDisabled>
        Disabled
      </Link>
    </div>
} satisfies StoryType`,...(j=(S=o.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const V=["Plain","StyledAsButton","Variants","Sizes","Loading","Disabled"];export{o as Disabled,i as Loading,r as Plain,a as Sizes,n as StyledAsButton,t as Variants,V as __namedExportsOrder,R as default};
