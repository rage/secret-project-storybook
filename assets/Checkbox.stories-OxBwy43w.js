import{r as c,j as t,l as h,c as p}from"./iframe-CJ3_LdV8.js";import{s as E}from"./emotion-styled.browser.esm-CumKfT5o.js";import{p as v}from"./typography-B78hKXS5.js";import{b as R}from"./theme-DgIg-lup.js";import"./preload-helper-Dp1pzeXC.js";import"./extends-CF3RwP-h.js";const _="#F76D82",w="#787878",L=E.label`
  font-family: ${v};
  font-size: 1.1rem;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  color: ${R.colors.gray[600]};

  input[type="checkbox"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    width: 1.15em;
    height: 1.1em;
    border: 2px solid ${({error:o})=>o?_:w};
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type="checkbox"]:hover {
    background: #f9f9f9;
  }

  input[type="checkbox"]:before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #fff;
    clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%);
  }

  input[type="checkbox"]:checked {
    border-color: #37bc9b;
    background: #37bc9b;
  }
  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  input[type="checkbox"]:disabled {
    color: #959495;
    cursor: not-allowed;
  }
`,T=p`
  color: #f76d82;
  font-size: 14px;
  display: inline-block;
  margin-top: -15px;
`,q="Please check the secret box",i=c.forwardRef(({onChangeByValue:o,onChange:m,className:x,checked:k,labelIsRawHtml:s=!1,labelRef:n,...e},y)=>{const d=c.useRef(null),u=c.useRef(null);c.useEffect(()=>{if(s&&!n&&d.current&&typeof window<"u"){const r=d.current,a=e.label;u.current!==a&&(r.innerHTML=a,u.current=a)}},[s,n,e.label]);const C=r=>{if(o){const{target:{checked:a}}=r;o(a)}m&&m(r)};return t.jsxs("div",{className:h(p`
            margin-bottom: 1rem;
          `,x),children:[t.jsxs(L,{children:[t.jsx("input",{type:"checkbox",checked:k,"aria-errormessage":e.error?`${e.label}_error`:void 0,"aria-invalid":e.error!==void 0,onChange:C,ref:y,...e}),t.jsx("span",{ref:r=>{n&&(typeof n=="function"?n(r):n.current=r),d.current=r},children:s?void 0:e.label})]}),e.error&&t.jsx("span",{className:e.error?h(T):p`
                    visibility: hidden;
                    height: 0;
                    display: block;
                  `,id:`${e.id??e.label}_error`,role:"alert",children:q})]})});i.displayName="CheckBox";try{i.displayName="CheckBox",i.__docgenInfo={description:"",displayName:"CheckBox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!1,type:{name:"((checked: boolean, name?: string) => void)"}},labelIsRawHtml:{defaultValue:{value:"false"},description:"",name:"labelIsRawHtml",required:!1,type:{name:"boolean"}},labelRef:{defaultValue:null,description:"",name:"labelRef",required:!1,type:{name:"Ref<HTMLElement | null>"}}}}}catch{}const N={component:i,parameters:{docs:{description:{component:"Extends the native HTML input type='checkbox' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox."}}}},l={args:{label:"Example",onChange:o=>{console.log("Checkbox changed to"+o.target.checked)},checked:!0,defaultChecked:!0,required:!1}};var f,b,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Example",
    onChange: event => {
      console.log("Checkbox changed to" + event.target.checked);
    },
    checked: true,
    defaultChecked: true,
    required: false
  }
} satisfies StoryType`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const S=["Example"];export{l as Example,S as __namedExportsOrder,N as default};
