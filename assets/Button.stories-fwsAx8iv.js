import{j as t}from"./jsx-runtime-CLpGMVip.js";import{n as a}from"./emotion-styled.browser.esm-D7Zr_4sy.js";import{r as k}from"./index-BAAwwy_G.js";import{h as L,f as N}from"./typography-ksV1GOB1.js";import{t as r,b as s}from"./theme-QoxxbpC5.js";import{r as O}from"./respond-DJ1j7TkH.js";import"./extends-CF3RwP-h.js";import"./emotion-utils.browser.esm-D8RxJ_4a.js";const Y=16,n=e=>`
  position: relative;
  display: inline-block;
  padding: ${r.buttonSizes.large.padding};
  font-family: ${L};
  font-weight: ${N.normal};
  font-size: ${Y}px;
  line-height: normal;
  vertical-align: baseline;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  transition: all 150ms linear;
  border: 2.5px solid transparent;
  z-index: 1;
  white-space: nowrap;

  color: ${r.primary.text};
  background-color: ${r.primary.bg};
  border-color: ${r.primary.border};

  &:hover {
    color: ${r.primary.hoverBorder};
    background-color: ${r.primary.hoverBg};
    border-color: ${r.primary.hoverBorder};
    text-decoration: none;
  }

  &:active {
    color: ${r.primary.hoverText};
    background-color: ${r.primary.activeBg};
    border-color: ${r.primary.hoverBorder};
  }

  &:disabled {
    color: ${r.primary.disabledText};
    background-color: ${r.primary.disabledBg};
    border-color: ${r.primary.disabledBorder};
    cursor: not-allowed;
  }

  &:focus {
    text-decoration: none;
  }

  ${O.sm} {
    white-space: nowrap;
  }

  ${e.fullWidth&&`
    width: 100%;
    display: block;
  `}
`,U=e=>`
    text-transform: ${e.transform};
    padding: ${r.buttonSizes[e.size].padding};
  `,I=e=>`
    text-transform: ${e.transform};
    padding: ${r.buttonSizes[e.size].padding};

    color: ${r.white.text};
    background: #FCFCFC;
    border: 2.5px solid #DEDEDE;

    &:hover,
    &:focus {
      color: ${r.white.text};
      box-shadow: 0 0 0 1px #FCFCFC;
      border: 2.5px solid #999999;
    }

    &:active {
      color: ${r.white.text};
      background-color: #F5F5F5;
      border: 2.5px solid #999999;
    }

    &:disabled {
      color: ${r.white.disabledText};
      background-color: ${r.white.disabledBg};
      border-color: ${r.white.disabledBorder};
    }
  `,R=e=>`
    text-transform: ${e.transform};
    padding: ${r.buttonSizes[e.size].padding};
    color: black;
    background: none;
    border: 0px;

    &:hover, &:active, &:disabled {
      background: none;
    }

  `,C=e=>`
    text-transform: ${e.transform};
    padding: ${r.buttonSizes[e.size].padding};

    color: ${r.secondary.text};
    background: ${r.secondary.bg};
    border: 1.5px solid ${r.secondary.border};

    &:hover,
    &:focus {
      color: ${r.secondary.hoverText};
      box-shadow: 0 0 0 1px ${r.secondary.bg};
      border: 1.5px solid ${r.secondary.bg};
    }

    &:active {
      color: ${r.secondary.hoverText};
      background-color: ${r.secondary.activeBg};
    }

    &:disabled {
      color: ${r.secondary.disabledText};
      background-color: ${r.secondary.disabledBg};
      border-color: ${r.secondary.disabledBorder};
    }
  `,F=e=>`
    text-transform: ${e.transform};
    padding: ${r.buttonSizes[e.size].padding};

    color: ${r.reject.text};
    background: ${r.reject.bg};
    border: 1.5px solid ${r.reject.border};

    &:hover,
    &:focus {
      color: ${r.reject.hoverText};
      box-shadow: 0 0 0 1px ${r.reject.bg};
      border: 1.5px solid ${r.reject.bg};
    }

    &:active {
      color: ${r.reject.hoverText};
      background-color: ${r.reject.activeBg};
    }

    &:disabled {
      color: ${r.reject.disabledText};
      background-color: ${r.reject.disabledBg};
      border-color: ${r.reject.disabledBorder};
    }
  `,P=e=>`
    text-transform: ${e.transform};
    padding: ${r.buttonSizes[e.size].padding};

    color: ${r.tertiary.text};
    background-color: ${r.tertiary.bg};
    border: 1.5px solid ${r.tertiary.border};

    &:hover,
    &:focus {
      color: ${r.tertiary.hoverText};
      box-shadow: 0 0 0 1px ${r.tertiary.bg};
      border: 1.5px solid ${r.tertiary.bg};
    }

    &:active {
      color: ${r.tertiary.hoverText};
      background-color: ${r.tertiary.activeBg};
    }

    &:disabled {
      color: ${r.tertiary.disabledText};
      background-color: ${r.tertiary.disabledBg};
      border-color: ${r.tertiary.disabledBorder};
    }
  `,W=e=>`
    text-transform: ${e.transform};
    padding: ${r.buttonSizes[e.size].padding};

    color: ${r.tertiary.text};
    background-color: ${s.colors.blue[500]};
    border: 1.5px solid ${r.secondary.border};

    &:hover,
    &:focus {
      color: ${s.colors.blue[700]};
      box-shadow: 0 0 0 1px ${s.colors.blue[500]};
      border: 1.5px solid ${s.colors.blue[500]};
    }

    &:active {
      color: ${s.colors.blue[700]};
      background-color: ${s.colors.blue[600]};
      border: 1.5px solid ${s.colors.blue[500]};
    }

    &:disabled {
      color: ${r.tertiary.disabledText};
      background-color: ${r.tertiary.disabledBg};
      border-color: ${r.tertiary.disabledBorder};
    }
  `,m=a.button`
  ${n}
  ${U}
`,p=a.button`
  ${n}
  ${C}
`,A=a.button`
  ${n}
  ${F}
`,D=a.button`
  ${n}
  ${P}
`,H=a.button`
  ${n}
  ${W}
`,M=a.button`
  ${n}
  ${I}
`,q=a.button`
  ${n}
  ${R}
`;a.label`
  ${n}
`;const b=k.forwardRef((e,o)=>{switch(e.variant){case"primary":return t.jsx(m,{ref:o,...e});case"secondary":return t.jsx(p,{ref:o,...e});case"reject":return t.jsx(A,{ref:o,...e});case"tertiary":return t.jsx(D,{ref:o,...e});case"outlined":return t.jsx(p,{ref:o,...e});case"blue":return t.jsx(H,{ref:o,...e});case"white":return t.jsx(M,{ref:o,...e});case"icon":return t.jsx(q,{ref:o,...e});default:return t.jsx(m,{ref:o,...e})}});b.displayName="Button";try{b.displayName="Button",b.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const er={component:b,parameters:{docs:{description:{component:"Extends the native HTML button element with some additional props, such as variant and size. All props available on the regular HTML button also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button."}}}},i={args:{variant:"primary",size:"medium",children:"I am a button"}},d={args:{...i.args,variant:"secondary"}},c={args:{...i.args,variant:"tertiary"}},l={args:{variant:"primary",size:"large",children:"I am a button"}},u={args:{variant:"primary",size:"small",children:"I am a button"}};var y,$,g;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    children: "I am a button"
  }
} satisfies StoryType`,...(g=($=i.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};var T,x,S;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "secondary"
  }
} satisfies StoryType`,...(S=(x=d.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var v,h,B;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "tertiary"
  }
} satisfies StoryType`,...(B=(h=c.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var f,_,E;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "large",
    children: "I am a button"
  }
} satisfies StoryType`,...(E=(_=l.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var z,j,w;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "small",
    children: "I am a button"
  }
} satisfies StoryType`,...(w=(j=u.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const or=["Primary","Secondary","Tertiary","Large","Small"];export{l as Large,i as Primary,d as Secondary,u as Small,c as Tertiary,or as __namedExportsOrder,er as default};
