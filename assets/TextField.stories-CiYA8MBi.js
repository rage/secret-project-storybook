import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,r as i,t as a}from"./emotion-css.esm-DsoSFdsS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./emotion-styled.browser.esm-Da19Zo8Q.js";import{l,n as u,s as d,t as f}from"./styles-CJhTCqa4.js";import{n as p,t as m}from"./strings-aR_XYl6G.js";var h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{i(),c(),h=e(n()),f(),d(),p(),g=o(),_=u.colors.red[600],v=u.colors.gray[400],y=`padding: 8px 10px 10px 10px;`,b=s.input`
  background: #fcfcfc;
  border-width: 2px;
  border-style: solid;
  border-radius: 3px;
  border-color: ${({error:e})=>e?_:v};
  ${({colorField:e})=>!e&&y}
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
    border-color: #215887;
    box-shadow: 0 0 0 2px #215887;
  }

  @media (max-width: 767.98px) {
    padding: 6px 8px;
  }
`,x=a`
  color: ${u.colors.red[600]};
  font-size: 14px;
  display: inline-block;
`,S=(0,h.forwardRef)(({onChange:e,onChangeByValue:t,className:n,disabled:i,error:o,...s},c)=>(0,g.jsxs)(`div`,{className:r(a`
            margin-bottom: 1rem;
            ${i&&`cursor: not-allowed;
            filter: opacity(0.5);`}
          `,n),children:[(0,g.jsxs)(`label`,{className:r(a`
              color: #333;
              font-family: ${l};
              font-weight: 500;
              font-size: 14px;
              display: block;
              margin-bottom: 2px;
              ${i&&`color: ${u.colors.gray[400]};`}
              ${i&&`cursor: not-allowed;`}
            `,s.labelStyle),children:[s.label&&(0,g.jsxs)(g.Fragment,{children:[s.label,` `,s.required===!0&&` *`]}),(0,g.jsx)(b,{id:s.id,name:s.name,disabled:i,colorField:s.type===`color`,"aria-errormessage":`${s.id??s.label}_error`,"aria-invalid":o!==void 0,onChange:n=>{if(t){let{target:{value:e}}=n;t(e)}e&&e(n)},defaultValue:s.defaultValue,error:m(o)??void 0,ref:c,...s})]}),(0,g.jsx)(`span`,{className:o?r(x):a`
                  visibility: hidden;
                `,id:`${s.id??s.label}_error`,role:`alert`,children:m(o)})]})),S.displayName=`TextField`})))()}var w,T,E;function D(){return(D=t((()=>{C(),w={component:S,parameters:{docs:{description:{component:`Extends the native HTML input type='text' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text.`}}}},T={args:{label:`Example`,placeholder:`Placeholder`,onChange:e=>{console.log(`Textfield changed to`+e.target.value)},value:void 0,defaultValue:void 0,required:!1}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryType`,...T.parameters?.docs?.source}}},E=[`Example`]})))()}D();export{T as Example,E as __namedExportsOrder,w as default};