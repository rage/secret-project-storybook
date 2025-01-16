import{j as a}from"./jsx-runtime-CLpGMVip.js";import{a as m,c as u}from"./emotion-css.esm-COI6KVUB.js";import"./emotion-serialize.esm-CH7fXiIe.js";const g=({onChange:e,onChangeByValue:t,className:d,...r})=>{const p=i=>{if(t){const{target:{value:c}}=i;t(c)}e&&e(i)};return a.jsx("div",{className:m(u`
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
        `,d),children:a.jsxs("label",{children:[a.jsx("span",{children:r.label}),a.jsx("input",{type:"date",onChange:p,...r})]})})};try{DatePickerField.displayName="DatePickerField",DatePickerField.__docgenInfo={description:"",displayName:"DatePickerField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!0,type:{name:"(value: string, name?: string | undefined) => void"}}}}}catch{}const b={component:g,parameters:{docs:{description:{component:"Extends the native HTML input type='date' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date."}}}},n={args:{label:"Example",value:void 0,onChange:e=>{console.log("Datepicker changed to"+e.target.value)},min:"2023-01-01",max:"2023-12-31",defaultValue:"2023-01-01",required:!1}};var l,o,s;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const v=["Example"];export{n as Example,v as __namedExportsOrder,b as default};
