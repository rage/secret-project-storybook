import{j as a}from"./jsx-runtime-CLpGMVip.js";import{a as S,c as _}from"./emotion-css.esm-COI6KVUB.js";import{r as w}from"./index-BAAwwy_G.js";import"./emotion-serialize.esm-CH7fXiIe.js";const o=w.forwardRef(({id:e,label:i,onChangeByValue:s,onChange:d,onBlur:g,defaultValue:h,options:x,className:b,disabled:t,...p},y)=>{const v=l=>{if(s){const{target:{value:n}}=l;s(n)}d&&d(l)};return a.jsxs("div",{className:S(_`
            margin-bottom: 1rem;
            ${t&&"opacity: 0.5;"}
            select {
              appearance: none;
              background-color: transparent;
              border: none;
              margin: 0;
              width: 100%;
              font-family: inherit;
              font-size: inherit;
              cursor: ${t?"default":"pointer"};
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
              cursor: ${t?"default":"pointer"};
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
              ${p.labelStyle}
            }

            .select + label {
              margin-top: 2rem;
            }
          `,b),children:[i&&a.jsx("label",{htmlFor:e,children:i}),a.jsx("div",{className:"select",children:a.jsx("select",{disabled:!!t,id:e,onChange:v,onBlur:g,defaultValue:h,ref:y,...p,children:x.map(({value:l,label:n,disabled:c})=>a.jsx("option",{value:l,disabled:c,selected:c&&!0,children:n},n))})})]})});o.displayName="SelectField";try{o.displayName="SelectField",o.__docgenInfo={description:"",displayName:"SelectField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption[]"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!1,type:{name:"((value: string, name?: string) => void)"}}}}}catch{}const q={component:o,parameters:{docs:{description:{component:"Extends the native HTML select element with some additional props, such as label, and options. All props available on the regular HTML select also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select."}}}},r={args:{label:"Example",onChange:e=>{console.log("Select changed to"+e.target.value)},value:void 0,defaultValue:void 0,options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],required:!1}};var u,m,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const z=["Example"];export{r as Example,z as __namedExportsOrder,q as default};
