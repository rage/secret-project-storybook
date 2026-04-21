import{n as e}from"./chunk-jRWAZmH_.js";import{r as t,t as n}from"./emotion-css.esm-DyUfwQgn.js";import{c as r,t as i,x as a}from"./iframe-CS1Q_CIZ.js";import{o,t as s}from"./atlas-icons-react-B_7NjFc3.js";var c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{t(),o(),i(),c=a(),l=n`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 480px;
`,u=n`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,d={title:`Components/TextArea`,component:r,parameters:{docs:{description:{component:'Floating-label textarea built on React Aria `useTextField` with `inputElementType="textarea"`, including size variants, description/error messaging, icons, and optional auto-resize.'}}},argTypes:{fieldSize:{control:`select`,options:[`sm`,`md`,`lg`]},autoResize:{control:`boolean`}}},f={args:{label:`Bio`,fieldSize:`md`,rows:3,description:`Tell us a little bit about yourself.`,autoResize:!0}},p={render:()=>(0,c.jsxs)(`div`,{className:l,children:[(0,c.jsx)(r,{label:`Default`,rows:3}),(0,c.jsx)(r,{label:`With description`,description:`Helper text goes here.`,rows:3}),(0,c.jsx)(r,{label:`With error`,errorMessage:`Too short.`,rows:3}),(0,c.jsx)(r,{label:`Disabled`,disabled:!0,rows:3}),(0,c.jsx)(r,{label:`Read only`,defaultValue:`Read-only content`,readOnly:!0,rows:3}),(0,c.jsx)(r,{label:`Plain editor`,appearance:`plain`,rows:3,defaultValue:`Inline editable text`})]})},m={render:()=>(0,c.jsxs)(`div`,{className:u,children:[(0,c.jsx)(r,{label:`Small`,fieldSize:`sm`,rows:3}),(0,c.jsx)(r,{label:`Medium`,fieldSize:`md`,rows:3}),(0,c.jsx)(r,{label:`Large`,fieldSize:`lg`,rows:3})]})},h={render:()=>(0,c.jsx)(`div`,{className:l,children:(0,c.jsx)(r,{label:`Notes`,description:`Leading icon anchored to the label baseline.`,iconStart:(0,c.jsx)(s,{"aria-hidden":`true`,size:16}),rows:4})})},g={render:()=>(0,c.jsx)(`div`,{className:l,children:(0,c.jsx)(r,{label:`Auto-resize`,autoResize:!0,autoResizeMaxHeightPx:160,defaultValue:`This textarea auto-resizes to fit its content.

Resize by typing more lines and watch it clamp at a maximum height with a scrollbar.`})})},_=`VeryLongUnbrokenLabelStringThatShouldWrapGracefullyInNarrowLayoutsWithoutOverflowingTheViewportHorizontally`,v={render:()=>(0,c.jsxs)(`div`,{className:l,children:[(0,c.jsx)(r,{label:_,description:`Helper text that is intentionally long so description wrapping can be reviewed at narrow widths.`,rows:3}),(0,c.jsx)(r,{label:`Label`,errorMessage:`Error text that is intentionally long so error wrapping can be reviewed at narrow widths without horizontal overflow.`,rows:3})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Bio",
    fieldSize: "md",
    rows: 3,
    description: "Tell us a little bit about yourself.",
    autoResize: true
  }
} satisfies StoryType`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className={columnCss}>
      <TextArea label="Default" rows={3} />
      <TextArea label="With description" description="Helper text goes here." rows={3} />
      <TextArea label="With error" errorMessage="Too short." rows={3} />
      <TextArea label="Disabled" disabled rows={3} />
      <TextArea label="Read only" defaultValue="Read-only content" readOnly rows={3} />
      <TextArea label="Plain editor" appearance="plain" rows={3} defaultValue="Inline editable text" />
    </div>
} satisfies StoryType`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className={rowCss}>
      <TextArea label="Small" fieldSize="sm" rows={3} />
      <TextArea label="Medium" fieldSize="md" rows={3} />
      <TextArea label="Large" fieldSize="lg" rows={3} />
    </div>
} satisfies StoryType`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className={columnCss}>
      <TextArea label="Notes" description="Leading icon anchored to the label baseline." iconStart={<AlignLeft aria-hidden="true" size={16} />} rows={4} />
    </div>
} satisfies StoryType`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className={columnCss}>
      <TextArea label="Auto-resize" autoResize autoResizeMaxHeightPx={160} defaultValue={"This textarea auto-resizes to fit its content.\\n\\nResize by typing more lines and watch it clamp at a maximum height with a scrollbar."} />
    </div>
} satisfies StoryType`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className={columnCss}>
      <TextArea label={longUnbroken} description="Helper text that is intentionally long so description wrapping can be reviewed at narrow widths." rows={3} />
      <TextArea label="Label" errorMessage="Error text that is intentionally long so error wrapping can be reviewed at narrow widths without horizontal overflow." rows={3} />
    </div>
} satisfies StoryType`,...v.parameters?.docs?.source}}},y=[`Playground`,`States`,`Sizes`,`WithIcon`,`AutoResize`,`LongMessages`]}))();export{g as AutoResize,v as LongMessages,f as Playground,m as Sizes,p as States,h as WithIcon,y as __namedExportsOrder,d as default};