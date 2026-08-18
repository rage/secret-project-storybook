import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,r,t as i}from"./emotion-css.esm-DsoSFdsS.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";var o,s;function c(){return(c=e((()=>{r(),t(),o=a(),s=({onChangeByValue:e,onChange:t,className:r,...a})=>(0,o.jsx)(`div`,{className:n(i`
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
        `,r),children:(0,o.jsxs)(`label`,{children:[(0,o.jsx)(`span`,{children:a.label}),(0,o.jsx)(`input`,{type:`time`,onChange:n=>{if(e){let{target:{value:t}}=n;e(t)}t&&t(n)},...a})]})})})))()}var l,u,d;function f(){return(f=e((()=>{c(),l={component:s,parameters:{docs:{description:{component:`Extends the native HTML input type='time' element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time.`}}}},u={args:{label:`Example`,onChange:e=>{console.log(`Time changed to`+e.target.value)},onChangeByValue:e=>{console.log(`Time changed to`+e)},value:void 0,defaultValue:void 0,min:void 0,max:void 0,required:!1}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Example",
    onChange: event => {
      console.log("Time changed to" + event.target.value);
    },
    onChangeByValue: value => {
      console.log("Time changed to" + value);
    },
    value: undefined,
    defaultValue: undefined,
    min: undefined,
    max: undefined,
    required: false
  }
} satisfies StoryType`,...u.parameters?.docs?.source}}},d=[`Example`]})))()}f();export{u as Example,d as __namedExportsOrder,l as default};