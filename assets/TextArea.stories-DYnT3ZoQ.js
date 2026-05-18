import{n as e}from"./chunk-jRWAZmH_.js";import{r as t,t as n}from"./emotion-css.esm-DyUfwQgn.js";import{C as r,b as i,c as a,t as o,x as s}from"./iframe-CIKWDTJj.js";import{o as c,t as l}from"./atlas-icons-react-B_7NjFc3.js";var u,d,f,p,m,h,g,_,v;e((()=>{t(),c(),i(),o(),u=r(),d=n`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 480px;
`,f=n`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,p={title:`Components/TextArea`,component:a},m={render:()=>{let{control:e}=s({defaultValues:{a:``}});return(0,u.jsx)(a,{name:`a`,control:e,label:`Bio`,fieldSize:`md`,rows:3,description:`Tell us a little bit about yourself.`,autoResize:!0})}},h={render:()=>{let{control:e}=s({defaultValues:{a:``,b:``,c:`Read-only content`}});return(0,u.jsxs)(`div`,{className:d,children:[(0,u.jsx)(a,{name:`a`,control:e,label:`Default`,rows:3}),(0,u.jsx)(a,{name:`b`,control:e,label:`With description`,description:`Helper text goes here.`,rows:3}),(0,u.jsx)(a,{name:`a`,control:e,label:`With error`,errorMessage:`Too short.`,rows:3}),(0,u.jsx)(a,{name:`a`,control:e,label:`Disabled`,isDisabled:!0,rows:3}),(0,u.jsx)(a,{name:`c`,control:e,label:`Read only`,isReadOnly:!0,rows:3})]})}},g={render:()=>{let{control:e}=s({defaultValues:{a:``,b:``,c:``}});return(0,u.jsxs)(`div`,{className:f,children:[(0,u.jsx)(a,{name:`a`,control:e,label:`Small`,fieldSize:`sm`,rows:3}),(0,u.jsx)(a,{name:`b`,control:e,label:`Medium`,fieldSize:`md`,rows:3}),(0,u.jsx)(a,{name:`c`,control:e,label:`Large`,fieldSize:`lg`,rows:3})]})}},_={render:()=>{let{control:e}=s({defaultValues:{a:``}});return(0,u.jsx)(`div`,{className:d,children:(0,u.jsx)(a,{name:`a`,control:e,label:`Notes`,description:`Leading icon anchored to the label baseline.`,iconStart:(0,u.jsx)(l,{"aria-hidden":`true`,size:16}),rows:4})})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      control
    } = useForm<Form>({
      defaultValues: {
        a: ""
      }
    });
    return <TextArea name="a" control={control} label="Bio" fieldSize="md" rows={3} description="Tell us a little bit about yourself." autoResize />;
  }
} satisfies StoryType`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      control
    } = useForm<Form>({
      defaultValues: {
        a: "",
        b: "",
        c: "Read-only content"
      }
    });
    return <div className={columnCss}>
        <TextArea name="a" control={control} label="Default" rows={3} />
        <TextArea name="b" control={control} label="With description" description="Helper text goes here." rows={3} />
        <TextArea name="a" control={control} label="With error" errorMessage="Too short." rows={3} />
        <TextArea name="a" control={control} label="Disabled" isDisabled rows={3} />
        <TextArea name="c" control={control} label="Read only" isReadOnly rows={3} />
      </div>;
  }
} satisfies StoryType`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      control
    } = useForm<Form>({
      defaultValues: {
        a: "",
        b: "",
        c: ""
      }
    });
    return <div className={rowCss}>
        <TextArea name="a" control={control} label="Small" fieldSize="sm" rows={3} />
        <TextArea name="b" control={control} label="Medium" fieldSize="md" rows={3} />
        <TextArea name="c" control={control} label="Large" fieldSize="lg" rows={3} />
      </div>;
  }
} satisfies StoryType`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      control
    } = useForm<Form>({
      defaultValues: {
        a: ""
      }
    });
    return <div className={columnCss}>
        <TextArea name="a" control={control} label="Notes" description="Leading icon anchored to the label baseline." iconStart={<AlignLeft aria-hidden="true" size={16} />} rows={4} />
      </div>;
  }
} satisfies StoryType`,..._.parameters?.docs?.source}}},v=[`Playground`,`States`,`Sizes`,`WithIcon`]}))();export{m as Playground,g as Sizes,h as States,_ as WithIcon,v as __namedExportsOrder,p as default};