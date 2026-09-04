import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./emotion-styled.browser.esm-wsJz3b-B.js";import{a as o,i as s,n as c,o as l,t as u}from"./styles-BtTBt5TU.js";import{n as d,t as f}from"./respond-Bh2VEMCT.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{a(),p=e(n()),u(),f(),m=r(),h=e=>`
  position: relative;
  display: inline-block;
  padding: ${s.buttonSizes.large.padding};
  font-family: ${l};
  font-weight: ${o.normal};
  font-size: 16px;
  line-height: normal;
  vertical-align: baseline;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  text-transform: ${e.transform||`uppercase`};
  letter-spacing: 0.02em;
  transition: all 150ms linear;
  border: 2.5px solid transparent;
  white-space: nowrap;

  color: ${s.primary.text};
  background-color: ${s.primary.bg};
  border-color: ${s.primary.border};

  &:hover {
    color: ${s.primary.hoverBorder};
    background-color: ${s.primary.hoverBg};
    border-color: ${s.primary.hoverBorder};
    text-decoration: none;
  }

  &:active {
    color: ${s.primary.hoverText};
    background-color: ${s.primary.activeBg};
    border-color: ${s.primary.hoverBorder};
  }

  &:disabled {
    color: ${s.primary.disabledText};
    background-color: ${s.primary.disabledBg};
    border-color: ${s.primary.disabledBorder};
    cursor: not-allowed;
  }

  &:focus {
    text-decoration: none;
  }

  ${d.sm} {
    white-space: nowrap;
  }

  ${e.fullWidth&&`
    width: 100%;
    display: block;
  `}
`,g=e=>`
    text-transform: ${e.transform};
    padding: ${s.buttonSizes[e.size].padding};
  `,_=e=>`
    text-transform: ${e.transform};
    padding: ${s.buttonSizes[e.size].padding};

    color: ${s.white.text};
    background: #FCFCFC;
    border: 2.5px solid #DEDEDE;

    &:hover,
    &:focus {
      color: ${s.white.text};
      box-shadow: 0 0 0 1px #FCFCFC;
      border: 2.5px solid #999999;
    }

    &:active {
      color: ${s.white.text};
      background-color: #F5F5F5;
      border: 2.5px solid #999999;
    }

    &:disabled {
      color: ${s.white.disabledText};
      background-color: ${s.white.disabledBg};
      border-color: ${s.white.disabledBorder};
    }
  `,v=e=>`
    text-transform: ${e.transform};
    padding: ${s.buttonSizes[e.size].padding};
    color: black;
    background: none;
    border: 0px;

    &:hover, &:active, &:disabled {
      background: none;
    }

  `,y=e=>`
    text-transform: ${e.transform};
    padding: ${s.buttonSizes[e.size].padding};

    color: ${s.secondary.text};
    background: ${s.secondary.bg};
    border: 1.5px solid ${s.secondary.border};

    &:hover,
    &:focus {
      color: ${s.secondary.hoverText};
      box-shadow: 0 0 0 1px ${s.secondary.bg};
      border: 1.5px solid ${s.secondary.bg};
    }

    &:active {
      color: ${s.secondary.hoverText};
      background-color: ${s.secondary.activeBg};
    }

    &:disabled {
      color: ${s.secondary.disabledText};
      background-color: ${s.secondary.disabledBg};
      border-color: ${s.secondary.disabledBorder};
    }
  `,b=e=>`
    text-transform: ${e.transform};
    padding: ${s.buttonSizes[e.size].padding};

    color: ${s.reject.text};
    background: ${s.reject.bg};
    border: 1.5px solid ${s.reject.border};

    &:hover,
    &:focus {
      color: ${s.reject.hoverText};
      box-shadow: 0 0 0 1px ${s.reject.bg};
      border: 1.5px solid ${s.reject.bg};
    }

    &:active {
      color: ${s.reject.hoverText};
      background-color: ${s.reject.activeBg};
    }

    &:disabled {
      color: ${s.reject.disabledText};
      background-color: ${s.reject.disabledBg};
      border-color: ${s.reject.disabledBorder};
    }
  `,x=e=>`
    text-transform: ${e.transform};
    padding: ${s.buttonSizes[e.size].padding};

    color: ${s.tertiary.text};
    background-color: ${s.tertiary.bg};
    border: 1.5px solid ${s.tertiary.border};

    &:hover,
    &:focus {
      color: ${s.tertiary.hoverText};
      box-shadow: 0 0 0 1px ${s.tertiary.bg};
      border: 1.5px solid ${s.tertiary.bg};
      background-color: ${s.tertiary.hoverBg};
    }

    &:active {
      color: ${s.tertiary.hoverText};
      background-color: ${s.tertiary.activeBg};
    }

    &:disabled {
      color: ${s.tertiary.disabledText};
      background-color: ${s.tertiary.disabledBg};
      border-color: ${s.tertiary.disabledBorder};
    }
  `,S=e=>`
    text-transform: ${e.transform};
    padding: ${s.buttonSizes[e.size].padding};

    color: ${s.tertiary.text};
    background-color: ${c.colors.blue[500]};
    border: 1.5px solid ${s.secondary.border};

    &:hover,
    &:focus {
      color: ${c.colors.blue[700]};
      box-shadow: 0 0 0 1px ${c.colors.blue[500]};
      border: 1.5px solid ${c.colors.blue[500]};
    }

    &:active {
      color: ${c.colors.blue[700]};
      background-color: ${c.colors.blue[600]};
      border: 1.5px solid ${c.colors.blue[500]};
    }

    &:disabled {
      color: ${s.tertiary.disabledText};
      background-color: ${s.tertiary.disabledBg};
      border-color: ${s.tertiary.disabledBorder};
    }
  `,C=e=>`
    text-transform: ${e.transform};
    padding: ${s.buttonSizes[e.size].padding};
    border-radius: 2px;

    color: ${s.secondary.text};
    background: ${s.secondary.bg};
    border: 1.5px solid ${s.secondary.border};

    &:hover,
    &:focus {
    color: ${c.colors.gray[700]};
      background-color: ${c.colors.green[700]}4D;
      border-color: transparent;

    }

    &:active {
      background-color: ${c.colors.green[700]}4D;
      border-color: ${c.colors.green[700]}4D;
    }

    &:disabled {
      color: ${c.colors.gray[500]};
      background-color: ${c.colors.gray[300]};
      border-color: transparent;
      cursor: not-allowed;
      opacity: 0.5;
    }
  `,w=i.button`
  ${h}
  ${g}
`,T=i.button`
  ${h}
  ${y}
`,E=i.button`
  ${h}
  ${b}
`,D=i.button`
  ${h}
  ${x}
`,O=i.button`
  ${h}
  ${S}
`,k=i.button`
  ${h}
  ${_}
`,A=i.button`
  ${h}
  ${v}
`,j=i.button`
  ${h}
  ${C}
`,i.label`
  ${h}
`,M=(0,p.forwardRef)((e,t)=>{switch(e.variant){case`primary`:return(0,m.jsx)(w,{ref:t,...e});case`secondary`:return(0,m.jsx)(T,{ref:t,...e});case`reject`:return(0,m.jsx)(E,{ref:t,...e});case`tertiary`:return(0,m.jsx)(D,{ref:t,...e});case`outlined`:return(0,m.jsx)(T,{ref:t,...e});case`blue`:return(0,m.jsx)(O,{ref:t,...e});case`white`:return(0,m.jsx)(k,{ref:t,...e});case`icon`:return(0,m.jsx)(A,{ref:t,...e});case`green`:return(0,m.jsx)(j,{ref:t,...e});default:return(0,m.jsx)(w,{ref:t,...e})}}),M.displayName=`Button`})))()}var P,F,I,L,R,z,B;function V(){return(V=t((()=>{N(),P={component:M,parameters:{docs:{description:{component:`Extends the native HTML button element with some additional props, such as variant and size. All props available on the regular HTML button also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button.`}}}},F={args:{variant:`primary`,size:`medium`,children:`I am a button`}},I={args:{...F.args,variant:`secondary`}},L={args:{...F.args,variant:`tertiary`}},R={args:{variant:`primary`,size:`large`,children:`I am a button`}},z={args:{variant:`primary`,size:`small`,children:`I am a button`}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    children: "I am a button"
  }
} satisfies StoryType`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "secondary"
  }
} satisfies StoryType`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "tertiary"
  }
} satisfies StoryType`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "large",
    children: "I am a button"
  }
} satisfies StoryType`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "small",
    children: "I am a button"
  }
} satisfies StoryType`,...z.parameters?.docs?.source}}},B=[`Primary`,`Secondary`,`Tertiary`,`Large`,`Small`]})))()}V();export{R as Large,F as Primary,I as Secondary,z as Small,L as Tertiary,B as __namedExportsOrder,P as default};