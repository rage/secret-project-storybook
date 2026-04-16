import{r as U,j as n}from"./iframe-DXyIoFKT.js";import{s as o}from"./emotion-styled.browser.esm-D3ju6Bg2.js";import{h as R,f as C}from"./typography-B78hKXS5.js";import{t as e,b as t}from"./theme-DgIg-lup.js";import{r as F}from"./respond-Ce_Chyxf.js";import"./preload-helper-Dp1pzeXC.js";import"./extends-CF3RwP-h.js";const P=16,l=a=>`
  position: relative;
  display: inline-block;
  padding: ${e.buttonSizes.large.padding};
  font-family: ${R};
  font-weight: ${C.normal};
  font-size: ${P}px;
  line-height: normal;
  vertical-align: baseline;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  text-transform: ${a.transform||"uppercase"};
  letter-spacing: 0.02em;
  transition: all 150ms linear;
  border: 2.5px solid transparent;
  white-space: nowrap;

  color: ${e.primary.text};
  background-color: ${e.primary.bg};
  border-color: ${e.primary.border};

  &:hover {
    color: ${e.primary.hoverBorder};
    background-color: ${e.primary.hoverBg};
    border-color: ${e.primary.hoverBorder};
    text-decoration: none;
  }

  &:active {
    color: ${e.primary.hoverText};
    background-color: ${e.primary.activeBg};
    border-color: ${e.primary.hoverBorder};
  }

  &:disabled {
    color: ${e.primary.disabledText};
    background-color: ${e.primary.disabledBg};
    border-color: ${e.primary.disabledBorder};
    cursor: not-allowed;
  }

  &:focus {
    text-decoration: none;
  }

  ${F.sm} {
    white-space: nowrap;
  }

  ${a.fullWidth&&`
    width: 100%;
    display: block;
  `}
`,p=a=>`
    text-transform: ${a.transform};
    padding: ${e.buttonSizes[a.size].padding};
  `,v=a=>`
    text-transform: ${a.transform};
    padding: ${e.buttonSizes[a.size].padding};

    color: ${e.white.text};
    background: #FCFCFC;
    border: 2.5px solid #DEDEDE;

    &:hover,
    &:focus {
      color: ${e.white.text};
      box-shadow: 0 0 0 1px #FCFCFC;
      border: 2.5px solid #999999;
    }

    &:active {
      color: ${e.white.text};
      background-color: #F5F5F5;
      border: 2.5px solid #999999;
    }

    &:disabled {
      color: ${e.white.disabledText};
      background-color: ${e.white.disabledBg};
      border-color: ${e.white.disabledBorder};
    }
  `,y=a=>`
    text-transform: ${a.transform};
    padding: ${e.buttonSizes[a.size].padding};
    color: black;
    background: none;
    border: 0px;

    &:hover, &:active, &:disabled {
      background: none;
    }

  `,f=a=>`
    text-transform: ${a.transform};
    padding: ${e.buttonSizes[a.size].padding};

    color: ${e.secondary.text};
    background: ${e.secondary.bg};
    border: 1.5px solid ${e.secondary.border};

    &:hover,
    &:focus {
      color: ${e.secondary.hoverText};
      box-shadow: 0 0 0 1px ${e.secondary.bg};
      border: 1.5px solid ${e.secondary.bg};
    }

    &:active {
      color: ${e.secondary.hoverText};
      background-color: ${e.secondary.activeBg};
    }

    &:disabled {
      color: ${e.secondary.disabledText};
      background-color: ${e.secondary.disabledBg};
      border-color: ${e.secondary.disabledBorder};
    }
  `,b=a=>`
    text-transform: ${a.transform};
    padding: ${e.buttonSizes[a.size].padding};

    color: ${e.reject.text};
    background: ${e.reject.bg};
    border: 1.5px solid ${e.reject.border};

    &:hover,
    &:focus {
      color: ${e.reject.hoverText};
      box-shadow: 0 0 0 1px ${e.reject.bg};
      border: 1.5px solid ${e.reject.bg};
    }

    &:active {
      color: ${e.reject.hoverText};
      background-color: ${e.reject.activeBg};
    }

    &:disabled {
      color: ${e.reject.disabledText};
      background-color: ${e.reject.disabledBg};
      border-color: ${e.reject.disabledBorder};
    }
  `,g=a=>`
    text-transform: ${a.transform};
    padding: ${e.buttonSizes[a.size].padding};

    color: ${e.tertiary.text};
    background-color: ${e.tertiary.bg};
    border: 1.5px solid ${e.tertiary.border};

    &:hover,
    &:focus {
      color: ${e.tertiary.hoverText};
      box-shadow: 0 0 0 1px ${e.tertiary.bg};
      border: 1.5px solid ${e.tertiary.bg};
      background-color: ${e.tertiary.hoverBg};
    }

    &:active {
      color: ${e.tertiary.hoverText};
      background-color: ${e.tertiary.activeBg};
    }

    &:disabled {
      color: ${e.tertiary.disabledText};
      background-color: ${e.tertiary.disabledBg};
      border-color: ${e.tertiary.disabledBorder};
    }
  `,_=a=>`
    text-transform: ${a.transform};
    padding: ${e.buttonSizes[a.size].padding};

    color: ${e.tertiary.text};
    background-color: ${t.colors.blue[500]};
    border: 1.5px solid ${e.secondary.border};

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
      color: ${e.tertiary.disabledText};
      background-color: ${e.tertiary.disabledBg};
      border-color: ${e.tertiary.disabledBorder};
    }
  `,$=a=>`
    text-transform: ${a.transform};
    padding: ${e.buttonSizes[a.size].padding};
    border-radius: 2px;

    color: ${e.secondary.text};
    background: ${e.secondary.bg};
    border: 1.5px solid ${e.secondary.border};

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
  `,h=o.button`
  ${l}
  ${p}
`,S=o.button`
  ${l}
  ${f}
`,A=o.button`
  ${l}
  ${b}
`,D=o.button`
  ${l}
  ${g}
`,G=o.button`
  ${l}
  ${_}
`,H=o.button`
  ${l}
  ${v}
`,M=o.button`
  ${l}
  ${y}
`,J=o.button`
  ${l}
  ${$}
`,T=o.label`
  ${l}
`,m=U.forwardRef((a,r)=>{switch(a.variant){case"primary":return n.jsx(h,{ref:r,...a});case"secondary":return n.jsx(S,{ref:r,...a});case"reject":return n.jsx(A,{ref:r,...a});case"tertiary":return n.jsx(D,{ref:r,...a});case"outlined":return n.jsx(S,{ref:r,...a});case"blue":return n.jsx(G,{ref:r,...a});case"white":return n.jsx(H,{ref:r,...a});case"icon":return n.jsx(M,{ref:r,...a});case"green":return n.jsx(J,{ref:r,...a});default:return n.jsx(h,{ref:r,...a})}});m.displayName="Button";try{l.displayName="BASE_BUTTON_STYLES",l.__docgenInfo={description:"",displayName:"BASE_BUTTON_STYLES",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{p.displayName="PrimaryButtonStyles",p.__docgenInfo={description:"",displayName:"PrimaryButtonStyles",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{v.displayName="WhiteButtonStyles",v.__docgenInfo={description:"",displayName:"WhiteButtonStyles",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{y.displayName="IconButtonStyles",y.__docgenInfo={description:"",displayName:"IconButtonStyles",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{f.displayName="SecondaryButtonStyles",f.__docgenInfo={description:"",displayName:"SecondaryButtonStyles",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{b.displayName="RejectButtonStyles",b.__docgenInfo={description:"",displayName:"RejectButtonStyles",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{g.displayName="TertiaryButtonStyles",g.__docgenInfo={description:"",displayName:"TertiaryButtonStyles",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{_.displayName="BlueButtonStyles",_.__docgenInfo={description:"",displayName:"BlueButtonStyles",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{$.displayName="GreenButtonStyles",$.__docgenInfo={description:"",displayName:"GreenButtonStyles",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{T.displayName="LabelButton",T.__docgenInfo={description:"",displayName:"LabelButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{m.displayName="Button",m.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"capitalize"'},{value:'"uppercase"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}const te={component:m,parameters:{docs:{description:{component:"Extends the native HTML button element with some additional props, such as variant and size. All props available on the regular HTML button also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button."}}}},u={args:{variant:"primary",size:"medium",children:"I am a button"}},i={args:{...u.args,variant:"secondary"}},d={args:{...u.args,variant:"tertiary"}},s={args:{variant:"primary",size:"large",children:"I am a button"}},c={args:{variant:"primary",size:"small",children:"I am a button"}};var B,x,z;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    children: "I am a button"
  }
} satisfies StoryType`,...(z=(x=u.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var q,V,E;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "secondary"
  }
} satisfies StoryType`,...(E=(V=i.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var N,w,j;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "tertiary"
  }
} satisfies StoryType`,...(j=(w=d.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var k,W,I;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "large",
    children: "I am a button"
  }
} satisfies StoryType`,...(I=(W=s.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var L,O,Y;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "small",
    children: "I am a button"
  }
} satisfies StoryType`,...(Y=(O=c.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};const le=["Primary","Secondary","Tertiary","Large","Small"];export{s as Large,u as Primary,i as Secondary,c as Small,d as Tertiary,le as __namedExportsOrder,te as default};
