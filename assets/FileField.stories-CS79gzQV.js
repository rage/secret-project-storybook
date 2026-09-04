import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./useTranslation-B0Jg814S.js";import{n as a,r as o,t as s}from"./emotion-css.esm-DsoSFdsS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./emotion-styled.browser.esm-wsJz3b-B.js";import{l as d,n as f,s as p,t as m}from"./styles-BtTBt5TU.js";import{n as h,t as g}from"./strings-aR_XYl6G.js";var _,v,y,b,x,S,C,w;function T(){return(T=t((()=>{o(),u(),_=e(n()),i(),m(),p(),h(),v=c(),y=f.colors.red[600],b=`#dedede`,x=`padding: 8px 10px 10px 10px;`,S=l.input`
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
  font-size: 17px;

  ${({disabled:e})=>e&&`cursor: not-allowed;`}

  &:focus,
  &:active {
    border-color: #55b3f5;
  }

  @media (max-width: 767.98px) {
    padding: 6px 8px;
  }
`,C=s`
  color: ${f.colors.red[600]};
  font-size: 14px;
  display: inline-block;
`,w=(0,_.forwardRef)(({onChange:e,onChangeByValue:t,className:n,disabled:i,error:o,...c},l)=>{let{t:u}=r();return(0,v.jsxs)(`div`,{className:a(s`
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
            `,c.labelStyle),children:[c.label&&(0,v.jsxs)(v.Fragment,{children:[c.label,` `,c.required===!0&&` *`]}),(0,v.jsx)(S,{id:c.id,name:c.name,disabled:i,type:`file`,"aria-errormessage":`${c.id??c.label}_error`,"aria-invalid":o!==void 0,onChange:n=>{if(t){let{target:{value:e}}=n;t(e)}e&&e(n)},error:g(o)??void 0,ref:l,...c})]}),(0,v.jsx)(`span`,{className:o?a(C):s`
                  visibility: hidden;
                `,id:`${c.id??c.label}_error`,role:`alert`,children:g(o)})]})}),w.displayName=`FileField`})))()}var E,D,O;function k(){return(k=t((()=>{T(),E={component:w,parameters:{docs:{description:{component:`Extends the native HTML input type='file' element with some additional props. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file.`}}}},D={args:{label:`Example`,onChange:e=>{console.log(`File changed to`+e.target.value)},accept:`image/*`,required:!1}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Example",
    onChange: event => {
      console.log("File changed to" + event.target.value);
    },
    accept: "image/*",
    required: false
  }
} satisfies StoryType`,...D.parameters?.docs?.source}}},O=[`Example`]})))()}k();export{D as Example,O as __namedExportsOrder,E as default};