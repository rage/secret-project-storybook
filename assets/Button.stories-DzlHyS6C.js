import{j as a}from"./jsx-runtime-CLpGMVip.js";import{n}from"./emotion-styled.browser.esm-yr_-r2v3.js";import{r as w}from"./index-CZMpeKRu.js";import{h as N,f as L}from"./typography-ksV1GOB1.js";import{t as r,b as t}from"./theme-QoxxbpC5.js";import{r as O}from"./respond-DJ1j7TkH.js";import"./extends-CF3RwP-h.js";import"./emotion-utils.browser.esm-D8RxJ_4a.js";const Y=16,s=e=>`
  position: relative;
  display: inline-block;
  padding: ${r.buttonSizes.large.padding};
  font-family: ${N};
  font-weight: ${L.normal};
  font-size: ${Y}px;
  line-height: normal;
  vertical-align: baseline;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  text-transform: ${e.transform||"uppercase"};
  letter-spacing: 0.02em;
  transition: all 150ms linear;
  border: 2.5px solid transparent;
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
  `,R=e=>`
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
  `,I=e=>`
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
      background-color: ${r.tertiary.hoverBg};
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
    background-color: ${t.colors.blue[500]};
    border: 1.5px solid ${r.secondary.border};

    &:hover,
    &:focus {
      color: ${t.colors.blue[700]};
      box-shadow: 0 0 0 1px ${t.colors.blue[500]};
      border: 1.5px solid ${t.colors.blue[500]};
    }

    &:active {
      color: ${t.colors.blue[700]};
      background-color: ${t.colors.blue[600]};
      border: 1.5px solid ${t.colors.blue[500]};
    }

    &:disabled {
      color: ${r.tertiary.disabledText};
      background-color: ${r.tertiary.disabledBg};
      border-color: ${r.tertiary.disabledBorder};
    }
  `,A=e=>`
    text-transform: ${e.transform};
    padding: ${r.buttonSizes[e.size].padding};
    border-radius: 2px;

    color: ${r.secondary.text};
    background: ${r.secondary.bg};
    border: 1.5px solid ${r.secondary.border};

    &:hover,
    &:focus {
    color: ${t.colors.gray[700]};
      background-color: ${t.colors.green[700]}4D;
      border-color: transparent;

    }

    &:active {
      background-color: ${t.colors.green[700]}4D;
      border-color: ${t.colors.green[700]}4D;
    }

    &:disabled {
      color: ${t.colors.gray[500]};
      background-color: ${t.colors.gray[300]};
      border-color: transparent;
      cursor: not-allowed;
      opacity: 0.5;
    }
  `,m=n.button`
  ${s}
  ${U}
`,$=n.button`
  ${s}
  ${C}
`,D=n.button`
  ${s}
  ${F}
`,H=n.button`
  ${s}
  ${P}
`,M=n.button`
  ${s}
  ${W}
`,q=n.button`
  ${s}
  ${R}
`,G=n.button`
  ${s}
  ${I}
`,V=n.button`
  ${s}
  ${A}
`;n.label`
  ${s}
`;const b=w.forwardRef((e,o)=>{switch(e.variant){case"primary":return a.jsx(m,{ref:o,...e});case"secondary":return a.jsx($,{ref:o,...e});case"reject":return a.jsx(D,{ref:o,...e});case"tertiary":return a.jsx(H,{ref:o,...e});case"outlined":return a.jsx($,{ref:o,...e});case"blue":return a.jsx(M,{ref:o,...e});case"white":return a.jsx(q,{ref:o,...e});case"icon":return a.jsx(G,{ref:o,...e});case"green":return a.jsx(V,{ref:o,...e});default:return a.jsx(m,{ref:o,...e})}});b.displayName="Button";try{b.displayName="Button",b.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const tr={component:b,parameters:{docs:{description:{component:"Extends the native HTML button element with some additional props, such as variant and size. All props available on the regular HTML button also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button."}}}},c={args:{variant:"primary",size:"medium",children:"I am a button"}},i={args:{...c.args,variant:"secondary"}},d={args:{...c.args,variant:"tertiary"}},l={args:{variant:"primary",size:"large",children:"I am a button"}},u={args:{variant:"primary",size:"small",children:"I am a button"}};var g,y,p;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    children: "I am a button"
  }
} satisfies StoryType`,...(p=(y=c.parameters)==null?void 0:y.docs)==null?void 0:p.source}}};var T,x,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "secondary"
  }
} satisfies StoryType`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var v,h,B;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "tertiary"
  }
} satisfies StoryType`,...(B=(h=d.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var f,_,E;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "large",
    children: "I am a button"
  }
} satisfies StoryType`,...(E=(_=l.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var k,z,j;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "small",
    children: "I am a button"
  }
} satisfies StoryType`,...(j=(z=u.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const ar=["Primary","Secondary","Tertiary","Large","Small"];export{l as Large,c as Primary,i as Secondary,u as Small,d as Tertiary,ar as __namedExportsOrder,tr as default};
