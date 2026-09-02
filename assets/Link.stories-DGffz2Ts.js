import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t,t as n}from"./emotion-css.esm-DsoSFdsS.js";import{I as r,t as i}from"./components-GStDy2Up.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{l as o,n as s}from"./atlas-icons-react-YOFwI17U.js";var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{t(),o(),i(),c=a(),l=n`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,u=n`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`,d={title:`Components/Link`,component:r,parameters:{docs:{description:{component:"Accessible link component built on React Aria with optional button styling, loading state, and icon slots. When `styledAsButton` is set, padding, variants, and sizes use the same `buttonStyles` primitives as `Button` for visual parity."}}},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`]},size:{control:`select`,options:[`sm`,`md`,`lg`]}}},f={args:{href:`/`,children:`Visit homepage`}},p={args:{href:`/`,styledAsButton:!0,variant:`primary`,size:`md`,icon:(0,c.jsx)(s,{"aria-hidden":`true`,size:16}),iconPosition:`start`,children:`Open`}},m={render:()=>(0,c.jsxs)(`div`,{className:l,children:[(0,c.jsx)(r,{href:`/`,styledAsButton:!0,variant:`primary`,children:`Primary`}),(0,c.jsx)(r,{href:`/`,styledAsButton:!0,variant:`secondary`,children:`Secondary`}),(0,c.jsx)(r,{href:`/`,styledAsButton:!0,variant:`tertiary`,children:`Tertiary`})]})},h={render:()=>(0,c.jsxs)(`div`,{className:u,children:[(0,c.jsx)(r,{href:`/`,styledAsButton:!0,size:`sm`,children:`Small`}),(0,c.jsx)(r,{href:`/`,styledAsButton:!0,size:`md`,children:`Medium`}),(0,c.jsx)(r,{href:`/`,styledAsButton:!0,size:`lg`,children:`Large`})]})},g={render:()=>(0,c.jsxs)(`div`,{className:l,children:[(0,c.jsx)(r,{href:`/`,styledAsButton:!0,isLoading:!0,loadingLabel:`Loading`,children:`Loading`}),(0,c.jsx)(r,{href:`/`,styledAsButton:!0,variant:`secondary`,isLoading:!0,loadingLabel:`Loading`,children:`Loading`})]})},_={render:()=>(0,c.jsxs)(`div`,{className:l,children:[(0,c.jsx)(r,{href:`/`,styledAsButton:!0,isDisabled:!0,children:`Disabled`}),(0,c.jsx)(r,{href:`/`,styledAsButton:!0,variant:`secondary`,isDisabled:!0,children:`Disabled`}),(0,c.jsx)(r,{href:`/`,styledAsButton:!0,variant:`tertiary`,isDisabled:!0,children:`Disabled`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    href: "/",
    children: "Visit homepage"
  }
} satisfies StoryType`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    href: "/",
    styledAsButton: true,
    variant: "primary",
    size: "md",
    icon: <ArrowRight aria-hidden="true" size={16} />,
    iconPosition: "start",
    children: "Open"
  }
} satisfies StoryType`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryType`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryType`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Link href="/" styledAsButton isLoading loadingLabel="Loading">
        Loading
      </Link>
      <Link href="/" styledAsButton variant="secondary" isLoading loadingLabel="Loading">
        Loading
      </Link>
    </div>
} satisfies StoryType`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryType`,..._.parameters?.docs?.source}}},v=[`Plain`,`StyledAsButton`,`Variants`,`Sizes`,`Loading`,`Disabled`]})))()}y();export{_ as Disabled,g as Loading,f as Plain,h as Sizes,p as StyledAsButton,m as Variants,v as __namedExportsOrder,d as default};