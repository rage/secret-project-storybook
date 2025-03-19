import{j as o}from"./jsx-runtime-CLpGMVip.js";import{n as a}from"./emotion-styled.browser.esm-D7Zr_4sy.js";import{r as L}from"./index-BAAwwy_G.js";import{h as N,f as O}from"./typography-ksV1GOB1.js";import{t as r,b as i}from"./theme-QoxxbpC5.js";import{r as Y}from"./respond-DJ1j7TkH.js";import"./extends-CF3RwP-h.js";import"./emotion-utils.browser.esm-D8RxJ_4a.js";const w=16,n=e=>`
  position: relative;
  display: inline-block;
  padding: ${r.buttonSizes.large.padding};
  font-family: ${N};
  font-weight: ${O.normal};
  font-size: ${w}px;
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

  ${Y.sm} {
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
    border: 1.5px solid #DEDEDE;

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
      box-shadow: 0 0 0 1px ${r.secondary.text};
      border: 1.5px solid ${r.secondary.text};
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
  `,P=e=>`
    text-transform: ${e.transform};
    padding: ${r.buttonSizes[e.size].padding};

    color: ${r.reject.text};
    background: ${r.reject.bg};
    border: 1.5px solid ${r.reject.border};

    &:hover,
    &:focus {
      color: ${r.reject.hoverText};
      box-shadow: 0 0 0 1px ${r.reject.text};
      border: 1.5px solid ${r.reject.text};
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
  `,W=e=>`
    text-transform: ${e.transform};
    padding: ${r.buttonSizes[e.size].padding};

    color: ${r.tertiary.text};
    background-color: ${r.tertiary.bg};
    border: unset;

    &:hover {
      color: ${r.tertiary.hoverText};
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
  `,A=e=>`
    text-transform: ${e.transform};
    padding: ${r.buttonSizes[e.size].padding};

    color: ${r.tertiary.text};
    background-color: ${i.colors.blue[500]};
    border: unset;
    border: 2px solid ${r.secondary.border};

    &:hover {
      border: 2px solid ${i.colors.blue[600]};
      color: ${i.colors.blue[700]};
    }

    &:active {
      border: 2px solid ${i.colors.blue[400]};
    }

    &:disabled {
      color: ${r.secondary.disabledText};
      background-color: ${r.secondary.disabledBg};
      border-color: ${r.secondary.disabledBorder};
    }
  `,b=a.button`
  ${n}
  ${U}
`,y=a.button`
  ${n}
  ${C}
`,D=a.button`
  ${n}
  ${P}
`,F=a.button`
  ${n}
  ${W}
`,H=a.button`
  ${n}
  ${A}
`,M=a.button`
  ${n}
  ${I}
`,q=a.button`
  ${n}
  ${R}
`;a.label`
  ${n}
`;const m=L.forwardRef((e,t)=>{switch(e.variant){case"primary":return o.jsx(b,{ref:t,...e});case"secondary":return o.jsx(y,{ref:t,...e});case"reject":return o.jsx(D,{ref:t,...e});case"tertiary":return o.jsx(F,{ref:t,...e});case"outlined":return o.jsx(y,{ref:t,...e});case"blue":return o.jsx(H,{ref:t,...e});case"white":return o.jsx(M,{ref:t,...e});case"icon":return o.jsx(q,{ref:t,...e});default:return o.jsx(b,{ref:t,...e})}});m.displayName="Button";try{m.displayName="Button",m.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"uppercase"'},{value:'"none"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const er={component:m,parameters:{docs:{description:{component:"Extends the native HTML button element with some additional props, such as variant and size. All props available on the regular HTML button also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button."}}}},s={args:{variant:"primary",size:"medium",children:"I am a button"}},c={args:{...s.args,variant:"secondary"}},d={args:{...s.args,variant:"tertiary"}},l={args:{variant:"primary",size:"large",children:"I am a button"}},u={args:{variant:"primary",size:"small",children:"I am a button"}};var p,$,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    children: "I am a button"
  }
} satisfies StoryType`,...(g=($=s.parameters)==null?void 0:$.docs)==null?void 0:g.source}}};var T,S,x;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "secondary"
  }
} satisfies StoryType`,...(x=(S=c.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var v,B,h;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "tertiary"
  }
} satisfies StoryType`,...(h=(B=d.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var f,_,E;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "large",
    children: "I am a button"
  }
} satisfies StoryType`,...(E=(_=l.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var z,j,k;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "small",
    children: "I am a button"
  }
} satisfies StoryType`,...(k=(j=u.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const tr=["Primary","Secondary","Tertiary","Large","Small"];export{l as Large,s as Primary,c as Secondary,u as Small,d as Tertiary,tr as __namedExportsOrder,er as default};
