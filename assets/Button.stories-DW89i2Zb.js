import{n as e}from"./chunk-jRWAZmH_.js";import{r as t,t as n}from"./emotion-css.esm-DyUfwQgn.js";import{b as r,t as i,x as a}from"./iframe-BhFJDBam.js";import{a as o,n as s,o as c}from"./atlas-icons-react-B_7NjFc3.js";var l,u,d,f,p,m,h,g,_,v,y;e((()=>{t(),c(),i(),l=a(),u=n`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,d=n`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`,f={title:`Components/Button`,component:r,parameters:{docs:{description:{component:`Accessible button component built on React Aria with size/variant styling, icon slots, and loading state.`}}},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`]},size:{control:`select`,options:[`sm`,`md`,`lg`]}}},p={args:{variant:`primary`,size:`md`,children:`Button`}},m={render:()=>(0,l.jsxs)(`div`,{className:u,children:[(0,l.jsx)(r,{variant:`primary`,children:`Primary`}),(0,l.jsx)(r,{variant:`secondary`,children:`Secondary`}),(0,l.jsx)(r,{variant:`tertiary`,children:`Tertiary`})]})},h={render:()=>(0,l.jsxs)(`div`,{className:d,children:[(0,l.jsx)(r,{size:`sm`,children:`Small`}),(0,l.jsx)(r,{size:`md`,children:`Medium`}),(0,l.jsx)(r,{size:`lg`,children:`Large`})]})},g={render:()=>(0,l.jsxs)(`div`,{className:u,children:[(0,l.jsx)(r,{isLoading:!0,loadingLabel:`Loading`,children:`Saving`}),(0,l.jsx)(r,{variant:`secondary`,isLoading:!0,loadingLabel:`Loading`,children:`Syncing`})]})},_={render:()=>(0,l.jsxs)(`div`,{className:u,children:[(0,l.jsx)(r,{icon:(0,l.jsx)(o,{"aria-hidden":`true`,size:16}),iconPosition:`start`,children:`Starred`}),(0,l.jsx)(r,{icon:(0,l.jsx)(s,{"aria-hidden":`true`,size:16}),iconPosition:`end`,children:`Continue`})]})},v={render:()=>(0,l.jsxs)(`div`,{className:u,children:[(0,l.jsx)(r,{disabled:!0,children:`Disabled`}),(0,l.jsx)(r,{variant:`secondary`,disabled:!0,children:`Disabled`}),(0,l.jsx)(r,{variant:`tertiary`,disabled:!0,children:`Disabled`})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "Button"
  }
} satisfies StoryType`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
} satisfies StoryType`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className={sizesCss}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
} satisfies StoryType`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Button isLoading loadingLabel="Loading">
        Saving
      </Button>
      <Button variant="secondary" isLoading loadingLabel="Loading">
        Syncing
      </Button>
    </div>
} satisfies StoryType`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Button icon={<Star aria-hidden="true" size={16} />} iconPosition="start">
        Starred
      </Button>
      <Button icon={<ArrowRight aria-hidden="true" size={16} />} iconPosition="end">
        Continue
      </Button>
    </div>
} satisfies StoryType`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Button disabled>Disabled</Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
      <Button variant="tertiary" disabled>
        Disabled
      </Button>
    </div>
} satisfies StoryType`,...v.parameters?.docs?.source}}},y=[`Playground`,`Variants`,`Sizes`,`Loading`,`WithIcons`,`Disabled`]}))();export{v as Disabled,g as Loading,p as Playground,h as Sizes,m as Variants,_ as WithIcons,y as __namedExportsOrder,f as default};