import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t,t as n}from"./emotion-css.esm-DsoSFdsS.js";import{Z as r,t as i}from"./components-GStDy2Up.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{c as o,l as s,n as c,o as l,s as u}from"./atlas-icons-react-YOFwI17U.js";var d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{t(),s(),i(),d=a(),f=n`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`,p=n`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`,m={title:`Components/Button`,component:r,parameters:{docs:{description:{component:"Accessible button component built on React Aria with size/variant styling, icon slots, loading state, and `icon` variant for inline icon-only actions."}}},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`icon`]},size:{control:`select`,options:[`small`,`medium`,`large`]}}},h={args:{variant:`primary`,size:`medium`,children:`Button`}},g={render:()=>(0,d.jsxs)(`div`,{className:f,children:[(0,d.jsx)(r,{variant:`primary`,children:`Primary`}),(0,d.jsx)(r,{variant:`secondary`,children:`Secondary`}),(0,d.jsx)(r,{variant:`tertiary`,children:`Tertiary`}),(0,d.jsx)(r,{variant:`icon`,"aria-label":`Icon action`,children:(0,d.jsx)(u,{"aria-hidden":`true`,size:16})})]})},_={render:()=>(0,d.jsxs)(`div`,{className:p,children:[(0,d.jsx)(r,{size:`small`,children:`Small`}),(0,d.jsx)(r,{size:`medium`,children:`Medium`}),(0,d.jsx)(r,{size:`large`,children:`Large`})]})},v={render:()=>(0,d.jsxs)(`div`,{className:f,children:[(0,d.jsx)(r,{isLoading:!0,loadingLabel:`Loading`,children:`Saving`}),(0,d.jsx)(r,{variant:`secondary`,isLoading:!0,loadingLabel:`Loading`,children:`Syncing`})]})},y={render:()=>(0,d.jsxs)(`div`,{className:f,children:[(0,d.jsx)(r,{icon:(0,d.jsx)(u,{"aria-hidden":`true`,size:16}),iconPosition:`start`,children:`Starred`}),(0,d.jsx)(r,{icon:(0,d.jsx)(c,{"aria-hidden":`true`,size:16}),iconPosition:`end`,children:`Continue`})]})},b={render:()=>(0,d.jsxs)(`div`,{className:f,children:[(0,d.jsx)(r,{disabled:!0,children:`Disabled`}),(0,d.jsx)(r,{variant:`secondary`,disabled:!0,children:`Disabled`}),(0,d.jsx)(r,{variant:`tertiary`,disabled:!0,children:`Disabled`})]})},x={render:()=>(0,d.jsxs)(`div`,{className:f,children:[(0,d.jsx)(r,{variant:`icon`,size:`small`,"aria-label":`Delete item`,children:(0,d.jsx)(o,{"aria-hidden":`true`,size:18})}),(0,d.jsx)(r,{variant:`icon`,size:`small`,"aria-label":`Edit item`,children:(0,d.jsx)(l,{"aria-hidden":`true`,size:18})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    children: "Button"
  }
} satisfies StoryType`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="icon" aria-label="Icon action">
        <Star aria-hidden="true" size={16} />
      </Button>
    </div>
} satisfies StoryType`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className={sizesCss}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
} satisfies StoryType`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Button isLoading loadingLabel="Loading">
        Saving
      </Button>
      <Button variant="secondary" isLoading loadingLabel="Loading">
        Syncing
      </Button>
    </div>
} satisfies StoryType`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Button icon={<Star aria-hidden="true" size={16} />} iconPosition="start">
        Starred
      </Button>
      <Button icon={<ArrowRight aria-hidden="true" size={16} />} iconPosition="end">
        Continue
      </Button>
    </div>
} satisfies StoryType`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Button disabled>Disabled</Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
      <Button variant="tertiary" disabled>
        Disabled
      </Button>
    </div>
} satisfies StoryType`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <Button variant="icon" size="small" aria-label="Delete item">
        <XmarkCircle aria-hidden="true" size={18} />
      </Button>
      <Button variant="icon" size="small" aria-label="Edit item">
        <Pencil aria-hidden="true" size={18} />
      </Button>
    </div>
} satisfies StoryType`,...x.parameters?.docs?.source}}},S=[`Playground`,`Variants`,`Sizes`,`Loading`,`WithIcons`,`Disabled`,`IconActions`]})))()}C();export{b as Disabled,x as IconActions,v as Loading,h as Playground,_ as Sizes,g as Variants,y as WithIcons,S as __namedExportsOrder,m as default};