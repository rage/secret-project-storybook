import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{n as r,r as i,t as a}from"./emotion-css.esm-DyUfwQgn.js";import{x as o}from"./iframe-CS1Q_CIZ.js";var s,c,l,u=e((()=>{i(),s=t(n()),c=o(),l=(0,s.forwardRef)(({id:e,label:t,onChangeByValue:n,onChange:i,onBlur:o,defaultValue:s,options:l,className:u,disabled:d,...f},p)=>(0,c.jsxs)(`div`,{className:r(a`
            margin-bottom: 1rem;
            ${d&&`opacity: 0.5;`}
            select {
              appearance: none;
              background-color: transparent;
              border: none;
              margin: 0;
              width: 100%;
              font-family: inherit;
              font-size: inherit;
              cursor: ${d?`default`:`pointer`};
              line-height: inherit;
              z-index: 1;
              outline: none;
              padding: 8px 10px 10px 10px;
            }

            select,
            .select:after {
              grid-area: select;
            }

            .select {
              width: 100%;
              border: 2px solid #e0e0e0;
              border-radius: 3px;
              font-size: 16px;
              cursor: ${d?`default`:`pointer`};
              background: #f9f9f9;
              display: grid;
              grid-template-areas: "select";
              align-items: center;

              @media (max-width: 767.98px) {
                padding: 6px 8px;
              }
            }

            .select::after {
              content: "";
              justify-self: end;
              align-self: center;
              width: 0.8em;
              margin-right: 10px;
              height: 0.8em;
              line-height: 0;
              background-color: #1a2333;
              clip-path: polygon(52% 80%, 0 20%, 100% 20%);
              opacity: 0.6;
            }
            label {
              color: #333;
              font-size: 14px;
              font-weight: 500;
              ${f.labelStyle}
            }

            .select + label {
              margin-top: 2rem;
            }
          `,u),children:[t&&(0,c.jsx)(`label`,{htmlFor:e,children:t}),(0,c.jsx)(`div`,{className:`select`,children:(0,c.jsx)(`select`,{disabled:!!d,id:e,onChange:e=>{if(n){let{target:{value:t}}=e;n(t)}i&&i(e)},onBlur:o,defaultValue:s,ref:p,...f,children:l.map(({value:e,label:t,disabled:n})=>(0,c.jsx)(`option`,{value:e,disabled:n,selected:n&&!0,children:t},t))})})]})),l.displayName=`SelectField`})),d,f,p;e((()=>{u(),d={component:l,parameters:{docs:{description:{component:`Extends the native HTML select element with some additional props, such as label, and options. All props available on the regular HTML select also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select.`}}}},f={args:{label:`Example`,onChange:e=>{console.log(`Select changed to`+e.target.value)},value:void 0,defaultValue:void 0,options:[{value:`1`,label:`Option 1`},{value:`2`,label:`Option 2`},{value:`3`,label:`Option 3`}],required:!1}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Example",
    onChange: event => {
      console.log("Select changed to" + event.target.value);
    },
    value: undefined,
    defaultValue: undefined,
    options: [{
      value: "1",
      label: "Option 1"
    }, {
      value: "2",
      label: "Option 2"
    }, {
      value: "3",
      label: "Option 3"
    }],
    required: false
  }
} satisfies StoryType`,...f.parameters?.docs?.source}}},p=[`Example`]}))();export{f as Example,p as __namedExportsOrder,d as default};