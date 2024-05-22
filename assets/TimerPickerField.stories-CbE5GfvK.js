import{j as a}from"./emotion-serialize.browser.esm-Xr4f5Ts3.js";import{a as c,c as u}from"./emotion-css.esm-DPNEF3j8.js";import"./index-CDs2tPxN.js";const g=({onChangeByValue:e,onChange:i,className:s,...t})=>{const p=r=>{if(e){const{target:{value:m}}=r;e(m)}i&&i(r)};return a.jsx("div",{className:c(u`
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
        `,s),children:a.jsxs("label",{children:[a.jsx("span",{children:t.label}),a.jsx("input",{type:"time",onChange:p,...t})]})})};try{TimePickerField.displayName="TimePickerField",TimePickerField.__docgenInfo={description:"",displayName:"TimePickerField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!0,type:{name:"(value: string, name?: string) => void"}}}}}catch{}const b={component:g,parameters:{docs:{description:{component:"Extends the native HTML input type='time' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time."}}}},n={args:{label:"Example",onChange:e=>{console.log("Time changed to"+e.target.value)},value:void 0,defaultValue:void 0,min:void 0,max:void 0,required:!1}};var o,l,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const v=["Example"];export{n as Example,v as __namedExportsOrder,b as default};
