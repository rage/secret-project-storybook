import{n as e}from"./chunk-jRWAZmH_.js";import{n as t,r as n,t as r}from"./emotion-css.esm-DyUfwQgn.js";import{x as i}from"./iframe-CS1Q_CIZ.js";var a,o,s=e((()=>{n(),a=i(),o=({onChange:e,onChangeByValue:n,className:i,...o})=>(0,a.jsx)(`div`,{className:t(r`
          margin-bottom: 1rem;

          label {
            display: grid;

            input {
              max-width: 22ch;
              padding: 8px 10px 10px 10px;
              border: 2px solid #dedede;
              border-radius: 3px;
              outline: none;

              &:focus,
              &:active {
                border-color: #55b3f5;
              }

              @media (max-width: 767.98px) {
                padding: 6px 8px;
              }
            }

            span {
              color: #333;
              font-size: 14px;
              font-weight: 500;
              margin-bottom: 0.2rem;
            }
          }
        `,i),children:(0,a.jsxs)(`label`,{children:[(0,a.jsx)(`span`,{children:o.label}),(0,a.jsx)(`input`,{type:`date`,onChange:t=>{if(n){let{target:{value:e}}=t;n(e)}e&&e(t)},...o})]})})})),c,l,u;e((()=>{s(),c={component:o,parameters:{docs:{description:{component:`Extends the native HTML input type='date' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date.`}}}},l={args:{label:`Example`,value:void 0,onChange:e=>{console.log(`Datepicker changed to`+e.target.value)},min:`2023-01-01`,max:`2023-12-31`,defaultValue:`2023-01-01`,required:!1}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Example",
    value: undefined,
    onChange: event => {
      console.log("Datepicker changed to" + event.target.value);
    },
    min: "2023-01-01",
    max: "2023-12-31",
    defaultValue: "2023-01-01",
    required: false
  }
} satisfies StoryType`,...l.parameters?.docs?.source}}},u=[`Example`]}))();export{l as Example,u as __namedExportsOrder,c as default};