import{j as n}from"./jsx-runtime-CLpGMVip.js";import{a as c,c as u}from"./emotion-css.esm-HUuX3KNn.js";import"./emotion-utils.browser.esm-D8RxJ_4a.js";const f=({onChangeByValue:e,onChange:i,className:s,...t})=>{const p=r=>{if(e){const{target:{value:m}}=r;e(m)}i&&i(r)};return n.jsx("div",{className:c(u`
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
        `,s),children:n.jsxs("label",{children:[n.jsx("span",{children:t.label}),n.jsx("input",{type:"time",onChange:p,...t})]})})};try{TimePickerField.displayName="TimePickerField",TimePickerField.__docgenInfo={description:"",displayName:"TimePickerField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!0,type:{name:"(value: string, name?: string | undefined) => void"}}}}}catch{}const b={component:f,parameters:{docs:{description:{component:"Extends the native HTML input type='time' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time."}}}},a={args:{label:"Example",onChange:e=>{console.log("Time changed to"+e.target.value)},value:void 0,defaultValue:void 0,min:void 0,max:void 0,required:!1}};var o,d,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const v=["Example"];export{a as Example,v as __namedExportsOrder,b as default};
