import{j as a}from"./emotion-serialize.browser.esm-Xr4f5Ts3.js";import{n}from"./emotion-styled.browser.esm-OyKATk7d.js";import{r as N}from"./index-CDs2tPxN.js";import{h as O,f as Y}from"./typography-Bdnj4Bgw.js";import{t as r,b as c}from"./theme-QoxxbpC5.js";import"./extends-CCbyfPlC.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BA1o8LyZ.js";const w=16,o=e=>`@media (min-width: ${e}rem)`,U={xxxs:o(2),xxs:o(25),xs:o(30),sm:o(36),md:o(48),lg:o(62),xl:o(75),xxl:o(87.5),xxxl:o(100),xxxxl:o(125),xxxxxl:o(150)},s=`
  position: relative;
  display: inline-block;
  padding: ${r.buttonSizes.large.padding};
  font-family: ${O};
  font-weight: ${Y.normal};
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


  ${U.sm} {
    white-space: nowrap;
  }
`,I=e=>`
    text-transform: ${e.transform};
    padding: ${r.buttonSizes[e.size].padding};
  `,R=e=>`
    text-transform: ${e.transform};
    padding: ${r.buttonSizes[e.size].padding};

    color: ${r.white.text};
    background: #FCFCFC;
    border: 1.5px solid #DEDEDE;

  `,C=e=>`
    text-transform: ${e.transform};
    padding: ${r.buttonSizes[e.size].padding};
    color: black;
    background: none;
    border: 0px;

    &:hover, &:active, &:disabled {
      background: none;
    }

  `,P=e=>`
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
  `,A=e=>`
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
  `,D=e=>`
    text-transform: ${e.transform};
    padding: ${r.buttonSizes[e.size].padding};

    color: ${r.tertiary.text};
    background-color: ${c.colors.blue[500]};
    border: unset;
    border: 2px solid ${r.secondary.border};

    &:hover {
      border: 2px solid ${c.colors.blue[600]};
      color: ${c.colors.blue[700]};
    }

    &:active {
      border: 2px solid ${c.colors.blue[400]};
    }

    &:disabled {
      color: ${r.secondary.disabledText};
      background-color: ${r.secondary.disabledBg};
      border-color: ${r.secondary.disabledBorder};
    }
  `,y=n.button`
  ${s}
  ${I}
`,p=n.button`
  ${s}
  ${P}
`,F=n.button`
  ${s}
  ${A}
`,H=n.button`
  ${s}
  ${W}
`,M=n.button`
  ${s}
  ${D}
`,q=n.button`
  ${s}
  ${R}
`,V=n.button`
  ${s}
  ${C}
`;n.label`
  ${s}
`;const b=N.forwardRef((e,t)=>{switch(e.variant){case"primary":return a.jsx(y,{ref:t,...e});case"secondary":return a.jsx(p,{ref:t,...e});case"reject":return a.jsx(F,{ref:t,...e});case"tertiary":return a.jsx(H,{ref:t,...e});case"outlined":return a.jsx(p,{ref:t,...e});case"blue":return a.jsx(M,{ref:t,...e});case"white":return a.jsx(q,{ref:t,...e});case"icon":return a.jsx(V,{ref:t,...e});default:return a.jsx(y,{ref:t,...e})}});b.displayName="Button";try{b.displayName="Button",b.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}}}}}catch{}const er={component:b,parameters:{docs:{description:{component:"Extends the native HTML button element with some additional props, such as variant and size. All props available on the regular HTML button also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button."}}}},i={args:{variant:"primary",size:"medium",children:"I am a button"}},d={args:{...i.args,variant:"secondary"}},l={args:{...i.args,variant:"tertiary"}},u={args:{variant:"primary",size:"large",children:"I am a button"}},m={args:{variant:"primary",size:"small",children:"I am a button"}};var g,$,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    children: "I am a button"
  }
} satisfies StoryType`,...(x=($=i.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var T,S,v;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "secondary"
  }
} satisfies StoryType`,...(v=(S=d.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var B,h,_;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "tertiary"
  }
} satisfies StoryType`,...(_=(h=l.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var f,E,z;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "large",
    children: "I am a button"
  }
} satisfies StoryType`,...(z=(E=u.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var j,L,k;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "small",
    children: "I am a button"
  }
} satisfies StoryType`,...(k=(L=m.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};const tr=["Primary","Secondary","Tertiary","Large","Small"];export{u as Large,i as Primary,d as Secondary,m as Small,l as Tertiary,tr as __namedExportsOrder,er as default};
