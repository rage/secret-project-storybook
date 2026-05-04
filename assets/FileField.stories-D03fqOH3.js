import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{r,t as i}from"./es-CCRBf0sY.js";import{n as a,r as o,t as s}from"./emotion-css.esm-DyUfwQgn.js";import{x as c}from"./iframe-DP1T4v_l.js";import{n as l,t as u}from"./emotion-styled.browser.esm-FfEKE14e.js";import{c as d,n as f,o as p,t as m}from"./styles-BetQWN8g.js";import{n as h,t as g}from"./strings-D2ToGqSe.js";var _,v,y,b,x,S,C,w=e((()=>{o(),u(),_=t(n()),i(),m(),p(),h(),v=c(),y=f.colors.red[600],b=`#dedede`,x=l.input`
  background: #fcfcfc;
  border-width: 2px;
  border-style: solid;
  border-radius: 3px;
  border-color: ${({error:e})=>e?y:b};
  ${({colorField:e})=>!e&&`padding: 8px 10px 10px 10px;`}
  transition: ease-in-out, width 0.35s ease-in-out;
  outline: none;
  min-width: 20px;
  width: 100%;
  display: block;
  font-size: 17px;

  ${({disabled:e})=>e&&`cursor: not-allowed;`}

  &:focus,
  &:active {
    border-color: #55b3f5;
  }

  @media (max-width: 767.98px) {
    padding: 6px 8px;
  }
`,S=s`
  color: ${f.colors.red[600]};
  font-size: 14px;
  display: inline-block;
`,C=(0,_.forwardRef)(({onChange:e,onChangeByValue:t,className:n,disabled:i,error:o,...c},l)=>{let{t:u}=r();return(0,v.jsxs)(`div`,{className:a(s`
            margin-bottom: 1rem;
            ${i&&`cursor: not-allowed;
            filter: opacity(0.5);`}
          `,n),children:[(0,v.jsxs)(`label`,{"aria-label":`${c.label}${c.required===!0&&` (${u(`required`)})`}`,className:a(s`
              color: #333;
              font-family: ${d};
              font-weight: 500;
              font-size: 14px;
              display: block;
              margin-bottom: 2px;
              ${i&&`color: ${f.colors.gray[400]};`}
              ${i&&`cursor: not-allowed;`}
            `,c.labelStyle),children:[c.label&&(0,v.jsxs)(v.Fragment,{children:[c.label,` `,c.required===!0&&` *`]}),(0,v.jsx)(x,{id:c.id,name:c.name,disabled:i,type:`file`,"aria-errormessage":`${c.id??c.label}_error`,"aria-invalid":o!==void 0,onChange:n=>{if(t){let{target:{value:e}}=n;t(e)}e&&e(n)},error:g(o)??void 0,ref:l,...c})]}),(0,v.jsx)(`span`,{className:o?a(S):s`
                  visibility: hidden;
                `,id:`${c.id??c.label}_error`,role:`alert`,children:g(o)})]})}),C.displayName=`FileField`})),T,E,D;e((()=>{w(),T={component:C,parameters:{docs:{description:{component:`Extends the native HTML input type='file' element with some additional props. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file.`}}}},E={args:{label:`Example`,onChange:e=>{console.log(`File changed to`+e.target.value)},accept:`image/*`,required:!1}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Example",
    onChange: event => {
      console.log("File changed to" + event.target.value);
    },
    accept: "image/*",
    required: false
  }
} satisfies StoryType`,...E.parameters?.docs?.source}}},D=[`Example`]}))();export{E as Example,D as __namedExportsOrder,T as default};