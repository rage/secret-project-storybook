import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{s as o}from"./emotion-styled.browser.esm-uiAl99qX.js";import{r as U}from"./index-0yr9KlQE.js";import{h as R,f as C}from"./typography-UEJTSqhr.js";import{t as e,b as t}from"./theme-DgIg-lup.js";import{r as F}from"./respond-Ce_Chyxf.js";import"./extends-CF3RwP-h.js";import"./emotion-utils.browser.esm-YKnV_D65.js";const P=16,l=a=>`
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
`,m=a=>`
    text-transform: ${a.transform};
    padding: ${e.buttonSizes[a.size].padding};
  `,p=a=>`
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
  `,v=a=>`
    text-transform: ${a.transform};
    padding: ${e.buttonSizes[a.size].padding};
    color: black;
    background: none;
    border: 0px;

    &:hover, &:active, &:disabled {
      background: none;
    }

  `,y=a=>`
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
  `,f=a=>`
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
  `,b=a=>`
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
  `,g=a=>`
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
  `,_=a=>`
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
  `,$=o.button`
  ${l}
  ${m}
`,h=o.button`
  ${l}
  ${y}
`,A=o.button`
  ${l}
  ${f}
`,D=o.button`
  ${l}
  ${b}
`,G=o.button`
  ${l}
  ${g}
`,H=o.button`
  ${l}
  ${p}
`,M=o.button`
  ${l}
  ${v}
`,J=o.button`
  ${l}
  ${_}
`,S=o.label`
  ${l}
`,Y=U.forwardRef((a,r)=>{switch(a.variant){case"primary":return n.jsx($,{ref:r,...a});case"secondary":return n.jsx(h,{ref:r,...a});case"reject":return n.jsx(A,{ref:r,...a});case"tertiary":return n.jsx(D,{ref:r,...a});case"outlined":return n.jsx(h,{ref:r,...a});case"blue":return n.jsx(G,{ref:r,...a});case"white":return n.jsx(H,{ref:r,...a});case"icon":return n.jsx(M,{ref:r,...a});case"green":return n.jsx(J,{ref:r,...a});default:return n.jsx($,{ref:r,...a})}});Y.displayName="Button";try{l.displayName="BASE_BUTTON_STYLES",l.__docgenInfo={description:"",displayName:"BASE_BUTTON_STYLES",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"uppercase"'},{value:'"none"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{m.displayName="PrimaryButtonStyles",m.__docgenInfo={description:"",displayName:"PrimaryButtonStyles",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"uppercase"'},{value:'"none"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{p.displayName="WhiteButtonStyles",p.__docgenInfo={description:"",displayName:"WhiteButtonStyles",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"uppercase"'},{value:'"none"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{v.displayName="IconButtonStyles",v.__docgenInfo={description:"",displayName:"IconButtonStyles",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"uppercase"'},{value:'"none"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{y.displayName="SecondaryButtonStyles",y.__docgenInfo={description:"",displayName:"SecondaryButtonStyles",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"uppercase"'},{value:'"none"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{f.displayName="RejectButtonStyles",f.__docgenInfo={description:"",displayName:"RejectButtonStyles",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"uppercase"'},{value:'"none"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{b.displayName="TertiaryButtonStyles",b.__docgenInfo={description:"",displayName:"TertiaryButtonStyles",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"uppercase"'},{value:'"none"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{g.displayName="BlueButtonStyles",g.__docgenInfo={description:"",displayName:"BlueButtonStyles",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"uppercase"'},{value:'"none"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{_.displayName="GreenButtonStyles",_.__docgenInfo={description:"",displayName:"GreenButtonStyles",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"uppercase"'},{value:'"none"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{S.displayName="LabelButton",S.__docgenInfo={description:"",displayName:"LabelButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"reject"'},{value:'"tertiary"'},{value:'"outlined"'},{value:'"blue"'},{value:'"white"'},{value:'"icon"'},{value:'"green"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'}]}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"enum",value:[{value:'"capitalize"'},{value:'"uppercase"'},{value:'"none"'},{value:'"lowercase"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}const le={component:Y,parameters:{docs:{description:{component:"Extends the native HTML button element with some additional props, such as variant and size. All props available on the regular HTML button also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button."}}}},u={args:{variant:"primary",size:"medium",children:"I am a button"}},i={args:{...u.args,variant:"secondary"}},s={args:{...u.args,variant:"tertiary"}},d={args:{variant:"primary",size:"large",children:"I am a button"}},c={args:{variant:"primary",size:"small",children:"I am a button"}};var T,B,x;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    children: "I am a button"
  }
} satisfies StoryType`,...(x=(B=u.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var z,q,V;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "secondary"
  }
} satisfies StoryType`,...(V=(q=i.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var E,N,w;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    variant: "tertiary"
  }
} satisfies StoryType`,...(w=(N=s.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var j,k,L;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "large",
    children: "I am a button"
  }
} satisfies StoryType`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var I,W,O;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "small",
    children: "I am a button"
  }
} satisfies StoryType`,...(O=(W=c.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const ne=["Primary","Secondary","Tertiary","Large","Small"];export{d as Large,u as Primary,i as Secondary,c as Small,s as Tertiary,ne as __namedExportsOrder,le as default};
