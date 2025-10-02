import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as y,a as E}from"./emotion-css.esm-BvLEAwLp.js";import{r as S}from"./index-0yr9KlQE.js";import"./emotion-utils.browser.esm-YKnV_D65.js";const g=S.forwardRef(({id:t,label:r,onChangeByValue:i,onChange:s,onBlur:h,defaultValue:f,options:x,className:b,disabled:a,...c},v)=>{const w=n=>{if(i){const{target:{value:l}}=n;i(l)}s&&s(n)};return e.jsxs("div",{className:y(E`
            margin-bottom: 1rem;
            ${a&&"opacity: 0.5;"}
            select {
              appearance: none;
              background-color: transparent;
              border: none;
              margin: 0;
              width: 100%;
              font-family: inherit;
              font-size: inherit;
              cursor: ${a?"default":"pointer"};
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
              cursor: ${a?"default":"pointer"};
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
              ${c.labelStyle}
            }

            .select + label {
              margin-top: 2rem;
            }
          `,b),children:[r&&e.jsx("label",{htmlFor:t,children:r}),e.jsx("div",{className:"select",children:e.jsx("select",{disabled:!!a,id:t,onChange:w,onBlur:h,defaultValue:f,ref:v,...c,children:x.map(({value:n,label:l,disabled:p})=>e.jsx("option",{value:n,disabled:p,selected:p&&!0,children:l},l))})})]})});g.displayName="SelectField";const T={component:g,parameters:{docs:{description:{component:"Extends the native HTML select element with some additional props, such as label, and options. All props available on the regular HTML select also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select."}}}},o={args:{label:"Example",onChange:t=>{console.log("Select changed to"+t.target.value)},value:void 0,defaultValue:void 0,options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],required:!1}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const $=["Example"];export{o as Example,$ as __namedExportsOrder,T as default};
