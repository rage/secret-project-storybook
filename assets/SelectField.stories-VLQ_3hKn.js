import{j as a}from"./emotion-serialize.browser.esm-Xr4f5Ts3.js";import{a as S,c as _}from"./emotion-css.esm-DPNEF3j8.js";import{r as w}from"./index-CDs2tPxN.js";const o=w.forwardRef(({id:e,label:i,onChangeByValue:s,onChange:d,onBlur:f,defaultValue:h,options:x,className:b,disabled:l,...p},v)=>{const y=t=>{if(s){const{target:{value:n}}=t;s(n)}d&&d(t)};return a.jsxs("div",{className:S(_`
            margin-bottom: 1rem;
            ${l&&"opacity: 0.5;"}
            select {
              appearance: none;
              background-color: transparent;
              border: none;
              margin: 0;
              width: 100%;
              font-family: inherit;
              font-size: inherit;
              cursor: ${l?"default":"pointer"};
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
              border: 1px solid #e0e0e0;
              border-radius: 3px;
              font-size: 17px;
              cursor: ${l?"default":"pointer"};
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
              background-color: #333;
              clip-path: polygon(52% 80%, 0 20%, 100% 20%);
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
          `,b),children:[i&&a.jsx("label",{htmlFor:e,children:i}),a.jsx("div",{className:"select",children:a.jsx("select",{disabled:!!l,id:e,onChange:y,onBlur:f,defaultValue:h,ref:v,...p,children:x.map(({value:t,label:n,disabled:c})=>a.jsx("option",{value:t,disabled:c,selected:c&&!0,children:n},n))})})]})});o.displayName="SelectField";try{o.displayName="SelectField",o.__docgenInfo={description:"",displayName:"SelectField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption[]"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!1,type:{name:"(value: string, name?: string) => void"}}}}}catch{}const V={component:o,parameters:{docs:{description:{component:"Extends the native HTML select element with some additional props, such as label, and options. All props available on the regular HTML select also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select."}}}},r={args:{label:"Example",onChange:e=>{console.log("Select changed to"+e.target.value)},value:void 0,defaultValue:void 0,options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],required:!1}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const q=["Example"];export{r as Example,q as __namedExportsOrder,V as default};
