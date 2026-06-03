import{i as e}from"./preload-helper-usAeo7Bx.js";import{U as t,ct as n,ot as r,st as i}from"./iframe-Ceo6Khuz.js";import{l as a,n as o,t as s}from"./styles-CSQU3Qq8.js";var c,l,u,d=e((()=>{n(),s(),c=t(),l=r`
  font-family: ${a};
  font-size: 16px;
  margin: 0.5rem 0.5rem 0.5rem 0;
  line-height: 1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;

  input[type="radio"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font-family: ${a};
    width: 1.15em;
    height: 1.15em;
    border: 1.5px solid #787878;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: ${o.colors.green[600]};
  }

  span {
    font-family: ${a};
    font-weight: 400;
    font-size: 18px;
  }

  input[type="radio"]:checked::before {
    transform: scale(1);
    background: #1f6964;
  }
`,u=({onChange:e,className:t,label:n,...a})=>(0,c.jsx)(`div`,{className:i(r`
          margin-bottom: 1rem;
          margin-top: 1rem;
        `,t),children:(0,c.jsxs)(`label`,{className:i(l),children:[(0,c.jsx)(`input`,{type:`radio`,onChange:t=>e&&e(t),...a}),(0,c.jsx)(`span`,{children:n})]})})})),f,p,m;e((()=>{d(),f={component:u,parameters:{docs:{description:{component:`Extends the native HTML input type='radio' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio`}}}},p={args:{label:`Example`,onChange:e=>{console.log(`Radio changed to`+e.target.checked)},value:void 0,defaultChecked:!1,required:!1}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Example",
    onChange: event => {
      console.log("Radio changed to" + event.target.checked);
    },
    value: undefined,
    defaultChecked: false,
    required: false
  }
} satisfies StoryType`,...p.parameters?.docs?.source}}},m=[`Example`]}))();export{p as Example,m as __namedExportsOrder,f as default};