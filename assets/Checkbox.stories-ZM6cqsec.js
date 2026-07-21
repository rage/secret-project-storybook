import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{Mt as r,Nt as i,Pt as a,mt as o}from"./iframe-DLEIRINA.js";import{n as s,t as c}from"./emotion-styled.browser.esm-JBkxDSkN.js";import{l,n as u,t as d}from"./styles-CBXWstuV.js";var f,p,m,h,g,_,v,y,b=t((()=>{a(),c(),f=e(n()),d(),p=o(),m=`#F76D82`,h=`#787878`,g=s.label`
  font-family: ${l};
  font-size: 1.1rem;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  color: ${u.colors.gray[600]};

  input[type="checkbox"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    width: 1.15em;
    height: 1.1em;
    border: 2px solid ${({error:e})=>e?m:h};
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
    border-color: ${u.colors.green[600]};
    background: ${u.colors.green[600]};
  }
  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  input[type="checkbox"]:disabled {
    color: #959495;
    cursor: not-allowed;
  }
`,_=r`
  color: #f76d82;
  font-size: 14px;
  display: inline-block;
  margin-top: -15px;
`,v=`Please check the secret box`,y=(0,f.forwardRef)(({onChangeByValue:e,onChange:t,className:n,checked:a,labelIsRawHtml:o=!1,labelRef:s,...c},l)=>{let u=(0,f.useRef)(null),d=(0,f.useRef)(null);return(0,f.useEffect)(()=>{if(o&&!s&&u.current&&typeof window<`u`){let e=u.current,t=c.label;d.current!==t&&(e.innerHTML=t,d.current=t)}},[o,s,c.label]),(0,p.jsxs)(`div`,{className:i(r`
            margin-bottom: 1rem;
          `,n),children:[(0,p.jsxs)(g,{children:[(0,p.jsx)(`input`,{type:`checkbox`,checked:a,"aria-errormessage":c.error?`${c.label}_error`:void 0,"aria-invalid":c.error!==void 0,onChange:n=>{if(e){let{target:{checked:t}}=n;e(t)}t&&t(n)},ref:l,...c}),(0,p.jsx)(`span`,{ref:e=>{s&&(typeof s==`function`?s(e):s.current=e),u.current=e},children:o?void 0:c.label})]}),c.error&&(0,p.jsx)(`span`,{className:c.error?i(_):r`
                    visibility: hidden;
                    height: 0;
                    display: block;
                  `,id:`${c.id??c.label}_error`,role:`alert`,children:v})]})}),y.displayName=`CheckBox`})),x,S,C;t((()=>{b(),x={component:y,parameters:{docs:{description:{component:`Extends the native HTML input type='checkbox' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox.`}}}},S={args:{label:`Example`,onChange:e=>{console.log(`Checkbox changed to`+e.target.checked)},checked:!0,defaultChecked:!0,required:!1}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Example",
    onChange: event => {
      console.log("Checkbox changed to" + event.target.checked);
    },
    checked: true,
    defaultChecked: true,
    required: false
  }
} satisfies StoryType`,...S.parameters?.docs?.source}}},C=[`Example`]}))();export{S as Example,C as __namedExportsOrder,x as default};