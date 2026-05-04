import{n as e}from"./chunk-jRWAZmH_.js";import{r as t,t as n}from"./emotion-css.esm-DyUfwQgn.js";import{s as r,t as i,x as a}from"./iframe-DP1T4v_l.js";import{i as o,n as s,o as c}from"./atlas-icons-react-B_7NjFc3.js";var l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{t(),c(),i(),l=a(),u=n`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 360px;
`,d=n`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,f={title:`Components/TextField`,component:r,parameters:{docs:{description:{component:"Floating-label text field built on React Aria `useTextField`, with size variants, description/error messaging, and optional start/end icons."}}},argTypes:{type:{control:`select`,options:[`text`,`email`,`password`]},fieldSize:{control:`select`,options:[`sm`,`md`,`lg`]}}},p={args:{label:`Email`,type:`email`,fieldSize:`md`,description:`We’ll only use this for account updates.`,placeholder:`ignored in floating-label mode`,required:!0}},m={render:()=>(0,l.jsxs)(`div`,{className:u,children:[(0,l.jsx)(r,{label:`Default`}),(0,l.jsx)(r,{label:`With description`,description:`Helper text goes here.`}),(0,l.jsx)(r,{label:`With error`,errorMessage:`This field is required.`}),(0,l.jsx)(r,{label:`Disabled`,disabled:!0}),(0,l.jsx)(r,{label:`Read only`,defaultValue:`Read-only value`,readOnly:!0})]})},h={render:()=>(0,l.jsxs)(`div`,{className:d,children:[(0,l.jsx)(r,{label:`Small`,fieldSize:`sm`}),(0,l.jsx)(r,{label:`Medium`,fieldSize:`md`}),(0,l.jsx)(r,{label:`Large`,fieldSize:`lg`})]})},g={render:()=>(0,l.jsxs)(`div`,{className:u,children:[(0,l.jsx)(r,{label:`Email`,type:`email`,iconStart:(0,l.jsx)(o,{"aria-hidden":`true`,size:16}),description:`Leading icon with floating label.`}),(0,l.jsx)(r,{label:`Search`,type:`search`,iconEnd:(0,l.jsx)(s,{"aria-hidden":`true`,size:16}),description:`Trailing icon with floating label.`})]})},_={render:()=>(0,l.jsxs)(`div`,{className:u,children:[(0,l.jsx)(r,{label:`Default value`,defaultValue:`Prefilled value`}),(0,l.jsx)(r,{label:`Controlled value`,value:`Controlled value`,onChange:()=>{}})]})},v=`VeryLongUnbrokenLabelStringThatShouldWrapGracefullyInNarrowLayoutsWithoutOverflowingTheViewportHorizontally`,y={render:()=>(0,l.jsxs)(`div`,{className:u,children:[(0,l.jsx)(r,{label:v,description:`Helper text that is intentionally long so description wrapping can be reviewed at narrow widths.`}),(0,l.jsx)(r,{label:`Label`,errorMessage:`Error text that is intentionally long so error wrapping can be reviewed at narrow widths without horizontal overflow.`})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    type: "email",
    fieldSize: "md",
    description: "We’ll only use this for account updates.",
    placeholder: "ignored in floating-label mode",
    required: true
  }
} satisfies StoryType`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className={columnCss}>
      <TextField label="Default" />
      <TextField label="With description" description="Helper text goes here." />
      <TextField label="With error" errorMessage="This field is required." />
      <TextField label="Disabled" disabled />
      <TextField label="Read only" defaultValue="Read-only value" readOnly />
    </div>
} satisfies StoryType`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className={rowCss}>
      <TextField label="Small" fieldSize="sm" />
      <TextField label="Medium" fieldSize="md" />
      <TextField label="Large" fieldSize="lg" />
    </div>
} satisfies StoryType`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className={columnCss}>
      <TextField label="Email" type="email" iconStart={<Mail aria-hidden="true" size={16} />} description="Leading icon with floating label." />
      <TextField label="Search" type="search" iconEnd={<ArrowRight aria-hidden="true" size={16} />} description="Trailing icon with floating label." />
    </div>
} satisfies StoryType`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className={columnCss}>
      <TextField label="Default value" defaultValue="Prefilled value" />
      <TextField label="Controlled value" value="Controlled value" onChange={() => {}} />
    </div>
} satisfies StoryType`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className={columnCss}>
      <TextField label={longUnbroken} description="Helper text that is intentionally long so description wrapping can be reviewed at narrow widths." />
      <TextField label="Label" errorMessage="Error text that is intentionally long so error wrapping can be reviewed at narrow widths without horizontal overflow." />
    </div>
} satisfies StoryType`,...y.parameters?.docs?.source}}},b=[`Playground`,`States`,`Sizes`,`WithIcons`,`Prefilled`,`LongMessages`]}))();export{y as LongMessages,p as Playground,_ as Prefilled,h as Sizes,m as States,g as WithIcons,b as __namedExportsOrder,f as default};