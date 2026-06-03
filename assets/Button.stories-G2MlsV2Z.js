import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{U as n,an as r}from"./iframe-Ceo6Khuz.js";import{n as i,t as a}from"./emotion-styled.browser.esm-BIVYKRpR.js";import{a as o,i as s,n as c,o as l,t as u}from"./styles-CSQU3Qq8.js";import{n as d,t as f}from"./respond-CElc44Sa.js";var p=t((()=>{})),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P=t((()=>{a(),m=e(r()),u(),p(),f(),h=n(),g=e=>`
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
`,_=e=>`
    text-transform: ${e.transform};
    padding: ${s.buttonSizes[e.size].padding};
  `,v=e=>`
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
  `,y=e=>`
    text-transform: ${e.transform};
    padding: ${s.buttonSizes[e.size].padding};
    color: black;
    background: none;
    border: 0px;

    &:hover, &:active, &:disabled {
      background: none;
    }

  `,b=e=>`
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
  `,x=e=>`
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
  `,S=e=>`
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
  `,C=e=>`
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
  `,w=e=>`
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
`,N=(0,m.forwardRef)((e,t)=>{switch(e.variant){case`primary`:return(0,h.jsx)(T,{ref:t,...e});case`secondary`:return(0,h.jsx)(E,{ref:t,...e});case`reject`:return(0,h.jsx)(D,{ref:t,...e});case`tertiary`:return(0,h.jsx)(O,{ref:t,...e});case`outlined`:return(0,h.jsx)(E,{ref:t,...e});case`blue`:return(0,h.jsx)(k,{ref:t,...e});case`white`:return(0,h.jsx)(A,{ref:t,...e});case`icon`:return(0,h.jsx)(j,{ref:t,...e});case`green`:return(0,h.jsx)(M,{ref:t,...e});default:return(0,h.jsx)(T,{ref:t,...e})}}),N.displayName=`Button`})),F,I,L,R,z,B,V;t((()=>{P(),F={component:N,parameters:{docs:{description:{component:`Extends the native HTML button element with some additional props, such as variant and size. All props available on the regular HTML button also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button.`}}}},I={args:{variant:`primary`,size:`medium`,children:`I am a button`}},L={args:{...I.args,variant:`secondary`}},R={args:{...I.args,variant:`tertiary`}},z={args:{variant:`primary`,size:`large`,children:`I am a button`}},B={args:{variant:`primary`,size:`small`,children:`I am a button`}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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