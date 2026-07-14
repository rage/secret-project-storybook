import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{U as r,_t as i,dt as a,ft as o,ht as s,pt as c}from"./iframe-Cwq9EqjE.js";import{n as l,t as u}from"./emotion-styled.browser.esm-yttLvJ9D.js";import{l as d,n as f,s as p,t as m}from"./styles-CBXWstuV.js";import{n as h,t as g}from"./strings-BQq8DVe-.js";var _,v,y,b,x,S,C,w,T=t((()=>{c(),u(),_=e(n()),s(),m(),p(),h(),v=r(),y=f.colors.red[600],b=`#dedede`,x=`padding: 8px 10px 10px 10px;`,S=l.input`
  background: #fcfcfc;
  border-width: 2px;
  border-style: solid;
  border-radius: 3px;
  border-color: ${({error:e})=>e?y:b};
  ${({colorField:e})=>!e&&x}
  transition:
    ease-in-out,
    width 0.35s ease-in-out;
  outline: none;
  min-width: 20px;
  width: 100%;
  display: block;
  font-size: 16px;

  ${({disabled:e})=>e&&`cursor: not-allowed;`}

  &:focus,
  &:active {
    border-color: #55b3f5;
  }

  @media (max-width: 767.98px) {
    padding: 6px 8px;
  }
`,C=a`
  color: ${f.colors.red[600]};
  font-size: 14px;
  display: inline-block;
`,w=(0,_.forwardRef)(({onChange:e,onChangeByValue:t,className:n,disabled:r,error:s,...c},l)=>{let{t:u}=i();return(0,v.jsxs)(`div`,{className:o(a`
            margin-bottom: 1rem;
            ${r&&`cursor: not-allowed;
            filter: opacity(0.5);`}
          `,n),children:[(0,v.jsxs)(`label`,{"aria-label":`${c.label}${c.required===!0&&` (${u(`required`)})`}`,className:o(a`
              color: #333;
              font-family: ${d};
              font-weight: 500;
              font-size: 14px;
              display: block;
              margin-bottom: 2px;
              ${r&&`color: ${f.colors.gray[400]};`}
              ${r&&`cursor: not-allowed;`}
            `,c.labelStyle),children:[c.label&&(0,v.jsxs)(v.Fragment,{children:[c.label,` `,c.required===!0&&` *`]}),(0,v.jsx)(S,{id:c.id,name:c.name,disabled:r,colorField:c.type===`color`,"aria-errormessage":`${c.id??c.label}_error`,"aria-invalid":s!==void 0,onChange:n=>{if(t){let{target:{value:e}}=n;t(e)}e&&e(n)},defaultValue:c.defaultValue,error:g(s)??void 0,ref:l,...c})]}),(0,v.jsx)(`span`,{className:s?o(C):a`
                  visibility: hidden;
                `,id:`${c.id??c.label}_error`,role:`alert`,children:g(s)})]})}),w.displayName=`TextField`})),E,D,O;t((()=>{T(),E={component:w,parameters:{docs:{description:{component:`Extends the native HTML input type='text' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text.`}}}},D={args:{label:`Example`,placeholder:`Placeholder`,onChange:e=>{console.log(`Textfield changed to`+e.target.value)},value:void 0,defaultValue:void 0,required:!1}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Example",
    placeholder: "Placeholder",
    onChange: event => {
      console.log("Textfield changed to" + event.target.value);
    },
    value: undefined,
    defaultValue: undefined,
    required: false
  }
} satisfies StoryType`,...D.parameters?.docs?.source}}},O=[`Example`]}))();export{D as Example,O as __namedExportsOrder,E as default};