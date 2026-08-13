import{i as e}from"./preload-helper-B45gAKPr.js";import{Mt as t,Nt as n,Pt as r,mt as i}from"./iframe-CnVUbaoj.js";var a,o,s=e((()=>{r(),a=i(),o=({onChange:e,onChangeByValue:r,className:i,...o})=>(0,a.jsx)(`div`,{className:n(t`
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
        `,i),children:(0,a.jsxs)(`label`,{children:[(0,a.jsx)(`span`,{children:o.label}),(0,a.jsx)(`input`,{type:`date`,onChange:t=>{if(r){let{target:{value:e}}=t;r(e)}e&&e(t)},...o})]})})})),c,l,u;e((()=>{s(),c={component:o,parameters:{docs:{description:{component:`Extends the native HTML input type='date' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date.`}}}},l={args:{label:`Example`,value:void 0,onChange:e=>{console.log(`Datepicker changed to`+e.target.value)},onChangeByValue:e=>{console.log(`Datepicker changed to`+e)},min:`2023-01-01`,max:`2023-12-31`,defaultValue:`2023-01-01`,required:!1}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Example",
    value: undefined,
    onChange: event => {
      console.log("Datepicker changed to" + event.target.value);
    },
    onChangeByValue: value => {
      console.log("Datepicker changed to" + value);
    },
    min: "2023-01-01",
    max: "2023-12-31",
    defaultValue: "2023-01-01",
    required: false
  }
} satisfies StoryType`,...l.parameters?.docs?.source}}},u=[`Example`]}))();export{l as Example,u as __namedExportsOrder,c as default};