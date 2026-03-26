import{j as a,l as m,c as u}from"./iframe-CJ3_LdV8.js";import"./preload-helper-Dp1pzeXC.js";const g=({onChangeByValue:e,onChange:i,className:s,...t})=>{const p=r=>{if(e){const{target:{value:c}}=r;e(c)}i&&i(r)};return a.jsx("div",{className:m(u`
          margin-bottom: 1rem;

          label {
            display: grid;

            input {
              max-width: 18.5ch;
              padding: 8px 10px 10px 10px;
              background: #fcfcfc;
              border: 1.6px solid #dedede;
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
        `,s),children:a.jsxs("label",{children:[a.jsx("span",{children:t.label}),a.jsx("input",{type:"time",onChange:p,...t})]})})};try{TimePickerField.displayName="TimePickerField",TimePickerField.__docgenInfo={description:"",displayName:"TimePickerField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!0,type:{name:"(value: string, name?: string | undefined) => void"}}}}}catch{}const h={component:g,parameters:{docs:{description:{component:"Extends the native HTML input type='time' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time."}}}},n={args:{label:"Example",onChange:e=>{console.log("Time changed to"+e.target.value)},value:void 0,defaultValue:void 0,min:void 0,max:void 0,required:!1}};var o,l,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Example",
    onChange: event => {
      console.log("Time changed to" + event.target.value);
    },
    value: undefined,
    defaultValue: undefined,
    min: undefined,
    max: undefined,
    required: false
  }
} satisfies StoryType`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const b=["Example"];export{n as Example,b as __namedExportsOrder,h as default};
