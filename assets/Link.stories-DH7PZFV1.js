import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t,t as n}from"./emotion-css.esm-DsoSFdsS.js";import{K as r,t as i}from"./components-DGjPniUa.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{m as o,n as s}from"./atlas-icons-react-CQxarVg9.js";var c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{t(),o(),i(),c=a(),l=n`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,u=n`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`,d={title:`Components/Link`,component:r,args:{href:`/`,children:`Visit homepage`},parameters:{docs:{description:{component:"Accessible link component built on React Aria with optional button styling, loading state, and icon slots. A plain link is a text link; `appearance` chooses between the underlined body-copy form, a `quiet` form for dense lists, and `inherit` for a link wrapping a badge or a card. When `styledAsButton` is set, padding, variants, and sizes use the same `buttonStyles` primitives as `Button` for visual parity."}}},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`]},size:{control:`select`,options:[`small`,`medium`,`large`]}}},f={},p={render:()=>(0,c.jsxs)(`div`,{className:l,children:[(0,c.jsxs)(`p`,{children:[`A sentence with a `,(0,c.jsx)(r,{href:`/`,children:`body-copy link`}),` in it.`]}),(0,c.jsx)(r,{href:`/`,appearance:`quiet`,children:`Quiet, for a table cell`}),(0,c.jsx)(r,{href:`/`,appearance:`inherit`,children:`Inherit, for a link wrapping a badge`})]})},m={args:{href:`/`,styledAsButton:!0,variant:`primary`,size:`medium`,icon:(0,c.jsx)(s,{"aria-hidden":`true`,size:16}),iconPosition:`start`,children:`Open`}},h={render:()=>(0,c.jsxs)(`div`,{className:l,children:[(0,c.jsx)(r,{href:`/`,styledAsButton:!0,variant:`primary`,children:`Primary`}),(0,c.jsx)(r,{href:`/`,styledAsButton:!0,variant:`secondary`,children:`Secondary`}),(0,c.jsx)(r,{href:`/`,styledAsButton:!0,variant:`tertiary`,children:`Tertiary`})]})},g={render:()=>(0,c.jsxs)(`div`,{className:u,children:[(0,c.jsx)(r,{href:`/`,styledAsButton:!0,size:`small`,children:`Small`}),(0,c.jsx)(r,{href:`/`,styledAsButton:!0,size:`medium`,children:`Medium`}),(0,c.jsx)(r,{href:`/`,styledAsButton:!0,size:`large`,children:`Large`})]})},_={render:()=>(0,c.jsxs)(`div`,{className:l,children:[(0,c.jsx)(r,{href:`/`,styledAsButton:!0,isLoading:!0,loadingLabel:`Loading`,children:`Loading`}),(0,c.jsx)(r,{href:`/`,styledAsButton:!0,variant:`secondary`,isLoading:!0,loadingLabel:`Loading`,children:`Loading`})]})},v={render:()=>(0,c.jsxs)(`div`,{className:l,children:[(0,c.jsx)(r,{href:`/`,styledAsButton:!0,isDisabled:!0,children:`Disabled`}),(0,c.jsx)(r,{href:`/`,styledAsButton:!0,variant:`secondary`,isDisabled:!0,children:`Disabled`}),(0,c.jsx)(r,{href:`/`,styledAsButton:!0,variant:`tertiary`,isDisabled:!0,children:`Disabled`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{} satisfies StoryType`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <p>
        A sentence with a <Link href="/">body-copy link</Link> in it.
      </p>
      <Link href="/" appearance="quiet">
        Quiet, for a table cell
      </Link>
      <Link href="/" appearance="inherit">
        Inherit, for a link wrapping a badge
      </Link>
    </div>
} satisfies StoryType`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    href: "/",
    styledAsButton: true,
    variant: "primary",
    size: "medium",
    icon: <ArrowRight aria-hidden="true" size={16} />,
    iconPosition: "start",
    children: "Open"
  }
} satisfies StoryType`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryType`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className={sizesCss}>
      <Link href="/" styledAsButton size="small">
        Small
      </Link>
      <Link href="/" styledAsButton size="medium">
        Medium
      </Link>
      <Link href="/" styledAsButton size="large">
        Large
      </Link>
    </div>
} satisfies StoryType`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Link href="/" styledAsButton isLoading loadingLabel="Loading">
        Loading
      </Link>
      <Link href="/" styledAsButton variant="secondary" isLoading loadingLabel="Loading">
        Loading
      </Link>
    </div>
} satisfies StoryType`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryType`,...v.parameters?.docs?.source}}},y=[`Plain`,`Appearances`,`StyledAsButton`,`Variants`,`Sizes`,`Loading`,`Disabled`]})))()}b();export{p as Appearances,v as Disabled,_ as Loading,f as Plain,g as Sizes,m as StyledAsButton,h as Variants,y as __namedExportsOrder,d as default};