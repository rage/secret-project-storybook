import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{x as r}from"./iframe-CS1Q_CIZ.js";import{n as i,t as a}from"./emotion-styled.browser.esm-JXiqyJv2.js";import{a as o,i as s,n as c,r as l,t as u}from"./styles-BetQWN8g.js";import{n as d,t as f}from"./respond-B8OCT_xO.js";var p=e((()=>{})),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P=e((()=>{a(),m=t(n()),u(),p(),f(),h=r(),g=e=>`
  position: relative;
  display: inline-block;
  padding: ${l.buttonSizes.large.padding};
  font-family: ${o};
  font-weight: ${s.normal};
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

  color: ${l.primary.text};
  background-color: ${l.primary.bg};
  border-color: ${l.primary.border};

  &:hover {
    color: ${l.primary.hoverBorder};
    background-color: ${l.primary.hoverBg};
    border-color: ${l.primary.hoverBorder};
    text-decoration: none;
  }

  &:active {
    color: ${l.primary.hoverText};
    background-color: ${l.primary.activeBg};
    border-color: ${l.primary.hoverBorder};
  }

  &:disabled {
    color: ${l.primary.disabledText};
    background-color: ${l.primary.disabledBg};
    border-color: ${l.primary.disabledBorder};
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
`,_=e=>`
    text-transform: ${e.transform};
    padding: ${l.buttonSizes[e.size].padding};
  `,v=e=>`
    text-transform: ${e.transform};
    padding: ${l.buttonSizes[e.size].padding};

    color: ${l.white.text};
    background: #FCFCFC;
    border: 2.5px solid #DEDEDE;

    &:hover,
    &:focus {
      color: ${l.white.text};
      box-shadow: 0 0 0 1px #FCFCFC;
      border: 2.5px solid #999999;
    }

    &:active {
      color: ${l.white.text};
      background-color: #F5F5F5;
      border: 2.5px solid #999999;
    }

    &:disabled {
      color: ${l.white.disabledText};
      background-color: ${l.white.disabledBg};
      border-color: ${l.white.disabledBorder};
    }
  `,y=e=>`
    text-transform: ${e.transform};
    padding: ${l.buttonSizes[e.size].padding};
    color: black;
    background: none;
    border: 0px;

    &:hover, &:active, &:disabled {
      background: none;
    }

  `,b=e=>`
    text-transform: ${e.transform};
    padding: ${l.buttonSizes[e.size].padding};

    color: ${l.secondary.text};
    background: ${l.secondary.bg};
    border: 1.5px solid ${l.secondary.border};

    &:hover,
    &:focus {
      color: ${l.secondary.hoverText};
      box-shadow: 0 0 0 1px ${l.secondary.bg};
      border: 1.5px solid ${l.secondary.bg};
    }

    &:active {
      color: ${l.secondary.hoverText};
      background-color: ${l.secondary.activeBg};
    }

    &:disabled {
      color: ${l.secondary.disabledText};
      background-color: ${l.secondary.disabledBg};
      border-color: ${l.secondary.disabledBorder};
    }
  `,x=e=>`
    text-transform: ${e.transform};
    padding: ${l.buttonSizes[e.size].padding};

    color: ${l.reject.text};
    background: ${l.reject.bg};
    border: 1.5px solid ${l.reject.border};

    &:hover,
    &:focus {
      color: ${l.reject.hoverText};
      box-shadow: 0 0 0 1px ${l.reject.bg};
      border: 1.5px solid ${l.reject.bg};
    }

    &:active {
      color: ${l.reject.hoverText};
      background-color: ${l.reject.activeBg};
    }

    &:disabled {
      color: ${l.reject.disabledText};
      background-color: ${l.reject.disabledBg};
      border-color: ${l.reject.disabledBorder};
    }
  `,S=e=>`
    text-transform: ${e.transform};
    padding: ${l.buttonSizes[e.size].padding};

    color: ${l.tertiary.text};
    background-color: ${l.tertiary.bg};
    border: 1.5px solid ${l.tertiary.border};

    &:hover,
    &:focus {
      color: ${l.tertiary.hoverText};
      box-shadow: 0 0 0 1px ${l.tertiary.bg};
      border: 1.5px solid ${l.tertiary.bg};
      background-color: ${l.tertiary.hoverBg};
    }

    &:active {
      color: ${l.tertiary.hoverText};
      background-color: ${l.tertiary.activeBg};
    }

    &:disabled {
      color: ${l.tertiary.disabledText};
      background-color: ${l.tertiary.disabledBg};
      border-color: ${l.tertiary.disabledBorder};
    }
  `,C=e=>`
    text-transform: ${e.transform};
    padding: ${l.buttonSizes[e.size].padding};

    color: ${l.tertiary.text};
    background-color: ${c.colors.blue[500]};
    border: 1.5px solid ${l.secondary.border};

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
      color: ${l.tertiary.disabledText};
      background-color: ${l.tertiary.disabledBg};
      border-color: ${l.tertiary.disabledBorder};
    }
  `,w=e=>`
    text-transform: ${e.transform};
    padding: ${l.buttonSizes[e.size].padding};
    border-radius: 2px;

    color: ${l.secondary.text};
    background: ${l.secondary.bg};
    border: 1.5px solid ${l.secondary.border};

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
  `,T=i.button`
  ${g}
  ${_}
`,E=i.button`
  ${g}
  ${b}
`,D=i.button`
  ${g}
  ${x}
`,O=i.button`
  ${g}
  ${S}
`,k=i.button`
  ${g}
  ${C}
`,A=i.button`
  ${g}
  ${v}
`,j=i.button`
  ${g}
  ${y}
`,M=i.button`
  ${g}
  ${w}
`,i.label`
  ${g}
`,N=(0,m.forwardRef)((e,t)=>{switch(e.variant){case`primary`:return(0,h.jsx)(T,{ref:t,...e});case`secondary`:return(0,h.jsx)(E,{ref:t,...e});case`reject`:return(0,h.jsx)(D,{ref:t,...e});case`tertiary`:return(0,h.jsx)(O,{ref:t,...e});case`outlined`:return(0,h.jsx)(E,{ref:t,...e});case`blue`:return(0,h.jsx)(k,{ref:t,...e});case`white`:return(0,h.jsx)(A,{ref:t,...e});case`icon`:return(0,h.jsx)(j,{ref:t,...e});case`green`:return(0,h.jsx)(M,{ref:t,...e});default:return(0,h.jsx)(T,{ref:t,...e})}}),N.displayName=`Button`})),F,I,L,R,z,B,V;e((()=>{P(),F={component:N,parameters:{docs:{description:{component:`Extends the native HTML button element with some additional props, such as variant and size. All props available on the regular HTML button also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button.`}}}},I={args:{variant:`primary`,size:`medium`,children:`I am a button`}},L={args:{...I.args,variant:`secondary`}},R={args:{...I.args,variant:`tertiary`}},z={args:{variant:`primary`,size:`large`,children:`I am a button`}},B={args:{variant:`primary`,size:`small`,children:`I am a button`}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    children: "I am a button"
  }
} satisfies StoryType`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "secondary"
  }
} satisfies StoryType`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "tertiary"
  }
} satisfies StoryType`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "large",
    children: "I am a button"
  }
} satisfies StoryType`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "small",
    children: "I am a button"
  }
} satisfies StoryType`,...B.parameters?.docs?.source}}},V=[`Primary`,`Secondary`,`Tertiary`,`Large`,`Small`]}))();export{z as Large,I as Primary,L as Secondary,B as Small,R as Tertiary,V as __namedExportsOrder,F as default};