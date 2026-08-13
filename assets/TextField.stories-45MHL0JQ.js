import{i as e}from"./preload-helper-B45gAKPr.js";import{B as t,I as n,Mt as r,P as i,Pt as a,T as o,lt as s,mt as c,t as l,ut as u}from"./iframe-CnVUbaoj.js";var d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{a(),t(),s(),l(),d=c(),f=r`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 360px;
`,p=r`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,m={title:`Components/TextField`,component:o,parameters:{docs:{description:{component:"Floating-label text field built on React Aria `useTextField`, with size variants, description/error messaging, and optional start/end icons."}}},argTypes:{type:{control:`select`,options:[`text`,`email`,`password`]},fieldSize:{control:`select`,options:[`sm`,`md`,`lg`]}}},h={render:()=>{let{control:e}=u({defaultValues:{email:``}});return(0,d.jsx)(o,{name:`email`,control:e,label:`Email`,type:`email`,fieldSize:`md`,description:`We'll only use this for account updates.`,placeholder:`ignored in floating-label mode`,isRequired:!0})}},g={render:()=>{let{control:e}=u({defaultValues:{default:``,description:``,error:``,disabled:``,readonly:`Read-only value`}});return(0,d.jsxs)(`div`,{className:f,children:[(0,d.jsx)(o,{name:`default`,control:e,label:`Default`}),(0,d.jsx)(o,{name:`description`,control:e,label:`With description`,description:`Helper text goes here.`}),(0,d.jsx)(o,{name:`error`,control:e,label:`With error`,errorMessage:`This field is required.`}),(0,d.jsx)(o,{name:`disabled`,control:e,label:`Disabled`,isDisabled:!0}),(0,d.jsx)(o,{name:`readonly`,control:e,label:`Read only`,isReadOnly:!0})]})}},_={render:()=>{let{control:e}=u({defaultValues:{small:``,medium:``,large:``}});return(0,d.jsxs)(`div`,{className:p,children:[(0,d.jsx)(o,{name:`small`,control:e,label:`Small`,fieldSize:`sm`}),(0,d.jsx)(o,{name:`medium`,control:e,label:`Medium`,fieldSize:`md`}),(0,d.jsx)(o,{name:`large`,control:e,label:`Large`,fieldSize:`lg`})]})}},v={render:()=>{let{control:e}=u({defaultValues:{email:``,search:``}});return(0,d.jsxs)(`div`,{className:f,children:[(0,d.jsx)(o,{name:`email`,control:e,label:`Email`,type:`email`,iconStart:(0,d.jsx)(n,{"aria-hidden":`true`,size:16}),description:`Leading icon with floating label.`}),(0,d.jsx)(o,{name:`search`,control:e,label:`Search`,type:`search`,iconEnd:(0,d.jsx)(i,{"aria-hidden":`true`,size:16}),description:`Trailing icon with floating label.`})]})}},y={render:()=>{let{control:e}=u({defaultValues:{defaultValue:`Prefilled value`,controlledValue:`Controlled value`}});return(0,d.jsxs)(`div`,{className:f,children:[(0,d.jsx)(o,{name:`defaultValue`,control:e,label:`Default value`}),(0,d.jsx)(o,{name:`controlledValue`,control:e,label:`Controlled value`})]})}},b=`VeryLongUnbrokenLabelStringThatShouldWrapGracefullyInNarrowLayoutsWithoutOverflowingTheViewportHorizontally`,x={render:()=>{let{control:e}=u({defaultValues:{longDescription:``,longError:``}});return(0,d.jsxs)(`div`,{className:f,children:[(0,d.jsx)(o,{name:`longDescription`,control:e,label:b,description:`Helper text that is intentionally long so description wrapping can be reviewed at narrow widths.`}),(0,d.jsx)(o,{name:`longError`,control:e,label:`Label`,errorMessage:`Error text that is intentionally long so error wrapping can be reviewed at narrow widths without horizontal overflow.`})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      control
    } = useForm<{
      email: string;
    }>({
      defaultValues: {
        email: ""
      }
    });
    return <TextField name="email" control={control} label="Email" type="email" fieldSize="md" description="We'll only use this for account updates." placeholder="ignored in floating-label mode" isRequired />;
  }
} satisfies StoryType`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      control
    } = useForm({
      defaultValues: {
        default: "",
        description: "",
        error: "",
        disabled: "",
        readonly: "Read-only value"
      }
    });
    return <div className={columnCss}>
        <TextField name="default" control={control} label="Default" />
        <TextField name="description" control={control} label="With description" description="Helper text goes here." />
        <TextField name="error" control={control} label="With error" errorMessage="This field is required." />
        <TextField name="disabled" control={control} label="Disabled" isDisabled />
        <TextField name="readonly" control={control} label="Read only" isReadOnly />
      </div>;
  }
} satisfies StoryType`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      control
    } = useForm({
      defaultValues: {
        small: "",
        medium: "",
        large: ""
      }
    });
    return <div className={rowCss}>
        <TextField name="small" control={control} label="Small" fieldSize="sm" />
        <TextField name="medium" control={control} label="Medium" fieldSize="md" />
        <TextField name="large" control={control} label="Large" fieldSize="lg" />
      </div>;
  }
} satisfies StoryType`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      control
    } = useForm({
      defaultValues: {
        email: "",
        search: ""
      }
    });
    return <div className={columnCss}>
        <TextField name="email" control={control} label="Email" type="email" iconStart={<Mail aria-hidden="true" size={16} />} description="Leading icon with floating label." />
        <TextField name="search" control={control} label="Search" type="search" iconEnd={<ArrowRight aria-hidden="true" size={16} />} description="Trailing icon with floating label." />
      </div>;
  }
} satisfies StoryType`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      control
    } = useForm({
      defaultValues: {
        defaultValue: "Prefilled value",
        controlledValue: "Controlled value"
      }
    });
    return <div className={columnCss}>
        <TextField name="defaultValue" control={control} label="Default value" />
        <TextField name="controlledValue" control={control} label="Controlled value" />
      </div>;
  }
} satisfies StoryType`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      control
    } = useForm({
      defaultValues: {
        longDescription: "",
        longError: ""
      }
    });
    return <div className={columnCss}>
        <TextField name="longDescription" control={control} label={longUnbroken} description="Helper text that is intentionally long so description wrapping can be reviewed at narrow widths." />
        <TextField name="longError" control={control} label="Label" errorMessage="Error text that is intentionally long so error wrapping can be reviewed at narrow widths without horizontal overflow." />
      </div>;
  }
} satisfies StoryType`,...x.parameters?.docs?.source}}},S=[`Playground`,`States`,`Sizes`,`WithIcons`,`Prefilled`,`LongMessages`]}))();export{x as LongMessages,h as Playground,y as Prefilled,_ as Sizes,g as States,v as WithIcons,S as __namedExportsOrder,m as default};