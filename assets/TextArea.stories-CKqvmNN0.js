import{T as r,j as e,c as R}from"./iframe-D0P9lDOs.js";import{c as L}from"./index-BexqxeMS.js";import"./preload-helper-Dp1pzeXC.js";import"./extends-CF3RwP-h.js";const n=R`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 480px;
`,N=R`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,P={title:"Components/TextArea",component:r,parameters:{docs:{description:{component:'Floating-label textarea built on React Aria `useTextField` with `inputElementType="textarea"`, including size variants, description/error messaging, icons, and optional auto-resize.'}}},argTypes:{fieldSize:{control:"select",options:["sm","md","lg"]},autoResize:{control:"boolean"}}},a={args:{label:"Bio",fieldSize:"md",rows:3,description:"Tell us a little bit about yourself.",autoResize:!0}},s={render:()=>e.jsxs("div",{className:n,children:[e.jsx(r,{label:"Default",rows:3}),e.jsx(r,{label:"With description",description:"Helper text goes here.",rows:3}),e.jsx(r,{label:"With error",errorMessage:"Too short.",rows:3}),e.jsx(r,{label:"Disabled",disabled:!0,rows:3}),e.jsx(r,{label:"Read only",defaultValue:"Read-only content",readOnly:!0,rows:3}),e.jsx(r,{label:"Plain editor",appearance:"plain",rows:3,defaultValue:"Inline editable text"})]})},t={render:()=>e.jsxs("div",{className:N,children:[e.jsx(r,{label:"Small",fieldSize:"sm",rows:3}),e.jsx(r,{label:"Medium",fieldSize:"md",rows:3}),e.jsx(r,{label:"Large",fieldSize:"lg",rows:3})]})},o={render:()=>e.jsx("div",{className:n,children:e.jsx(r,{label:"Notes",description:"Leading icon anchored to the label baseline.",iconStart:e.jsx(L,{"aria-hidden":"true",size:16}),rows:4})})},i={render:()=>e.jsx("div",{className:n,children:e.jsx(r,{label:"Auto-resize",autoResize:!0,autoResizeMaxHeightPx:160,defaultValue:`This textarea auto-resizes to fit its content.

Resize by typing more lines and watch it clamp at a maximum height with a scrollbar.`})})},M="VeryLongUnbrokenLabelStringThatShouldWrapGracefullyInNarrowLayoutsWithoutOverflowingTheViewportHorizontally",l={render:()=>e.jsxs("div",{className:n,children:[e.jsx(r,{label:M,description:"Helper text that is intentionally long so description wrapping can be reviewed at narrow widths.",rows:3}),e.jsx(r,{label:"Label",errorMessage:"Error text that is intentionally long so error wrapping can be reviewed at narrow widths without horizontal overflow.",rows:3})]})};var d,c,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Bio",
    fieldSize: "md",
    rows: 3,
    description: "Tell us a little bit about yourself.",
    autoResize: true
  }
} satisfies StoryType`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className={columnCss}>
      <TextArea label="Default" rows={3} />
      <TextArea label="With description" description="Helper text goes here." rows={3} />
      <TextArea label="With error" errorMessage="Too short." rows={3} />
      <TextArea label="Disabled" disabled rows={3} />
      <TextArea label="Read only" defaultValue="Read-only content" readOnly rows={3} />
      <TextArea label="Plain editor" appearance="plain" rows={3} defaultValue="Inline editable text" />
    </div>
} satisfies StoryType`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var b,w,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className={rowCss}>
      <TextArea label="Small" fieldSize="sm" rows={3} />
      <TextArea label="Medium" fieldSize="md" rows={3} />
      <TextArea label="Large" fieldSize="lg" rows={3} />
    </div>
} satisfies StoryType`,...(g=(w=t.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var h,f,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className={columnCss}>
      <TextArea label="Notes" description="Leading icon anchored to the label baseline." iconStart={<AlignLeft aria-hidden="true" size={16} />} rows={4} />
    </div>
} satisfies StoryType`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var z,T,S;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className={columnCss}>
      <TextArea label="Auto-resize" autoResize autoResizeMaxHeightPx={160} defaultValue={"This textarea auto-resizes to fit its content.\\n\\nResize by typing more lines and watch it clamp at a maximum height with a scrollbar."} />
    </div>
} satisfies StoryType`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var v,A,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className={columnCss}>
      <TextArea label={longUnbroken} description="Helper text that is intentionally long so description wrapping can be reviewed at narrow widths." rows={3} />
      <TextArea label="Label" errorMessage="Error text that is intentionally long so error wrapping can be reviewed at narrow widths without horizontal overflow." rows={3} />
    </div>
} satisfies StoryType`,...(j=(A=l.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};const E=["Playground","States","Sizes","WithIcon","AutoResize","LongMessages"];export{i as AutoResize,l as LongMessages,a as Playground,t as Sizes,s as States,o as WithIcon,E as __namedExportsOrder,P as default};
