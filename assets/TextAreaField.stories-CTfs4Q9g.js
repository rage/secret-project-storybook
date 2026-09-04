import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,r as i,t as a}from"./emotion-css.esm-DsoSFdsS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./styles-BtTBt5TU.js";function l(e,t,n){if(e.current){let r=e.current.style.height;e.current.style.height=`auto`;let i=`${e.current.scrollHeight+5}px`;n&&e.current.scrollHeight>n?e.current.style.height=`${n}px`:e.current.style.height=`${e.current.scrollHeight+5}px`,t&&r!==i&&t()}}var u,d,f,p;function m(){return(m=t((()=>{i(),u=e(n()),c(),d=o(),f=(e,t)=>(u.useEffect(()=>{[t,e].forEach(e=>{e&&(typeof e==`function`?e(t.current||null):e.current=t.current||null)})},[t,e]),t),p=(0,u.forwardRef)(({onChangeByValue:e,onChange:t,className:n,autoResize:i,resize:o=`vertical`,onAutoResized:c,autoResizeMaxHeightPx:p,...m},h)=>{let g=(0,u.useRef)(null),_=f(h,g),v=(0,u.useRef)(m.value),y=(0,u.useId)(),b=m.label?y:void 0,x=m[`aria-labelledby`]!==void 0||m[`aria-label`]!==void 0?m[`aria-labelledby`]:b;return(0,u.useEffect)(()=>{i&&l(g,c,p)},[i,c,p]),(0,u.useEffect)(()=>{i&&(v.current&&m.value!==v.current&&l(g,c,p),v.current=m.value)},[m.value,i,c,p]),(0,u.useEffect)(()=>{let e=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting&&g.current){l(g,c,p);break}}),t=g.current;return t&&e.observe(t),()=>{t&&e.disconnect()}},[c,p]),(0,d.jsx)(`div`,{className:r(a`
            margin-bottom: 1rem;

            label {
              display: grid;

              textarea {
                background: #fcfcfc;
                /* gray[400] keeps the border contrast >= 3:1 against the field background (WCAG 1.4.11). */
                border: 1.6px solid ${s.colors.gray[400]};
                border-radius: 3px;
                padding: 10px 12px;
                resize: ${o};
                outline: none;
              }
              textarea:focus,
              textarea:focus-visible {
                /* Visible focus indicator with >= 3:1 contrast against the background. */
                border-color: #215887;
                box-shadow: 0 0 0 2px #215887;
              }
              span {
                color: #333;
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 0.2rem;
              }
            }
          `,n),children:(0,d.jsxs)(`label`,{children:[m.label&&(0,d.jsx)(`span`,{id:b,children:m.label}),(0,d.jsx)(`textarea`,{ref:_,onChange:n=>{if(e){let{target:{value:t}}=n;e(t)}t&&t(n),i&&l(g,c,p)},defaultValue:m.defaultValue,...m,"aria-labelledby":x})]})})}),p.displayName=`TextAreaField`})))()}var h,g,_;function v(){return(v=t((()=>{m(),h={component:p,parameters:{docs:{description:{component:`Extends the native HTML textarea element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea.`}}}},g={args:{label:`Example`,placeholder:`Placeholder`,onChange:e=>{console.log(`Textarea changed to`+e.target.value)},value:void 0,defaultValue:void 0,rows:4,autoResize:!0,required:!1}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Example",
    placeholder: "Placeholder",
    onChange: event => {
      console.log("Textarea changed to" + event.target.value);
    },
    value: undefined,
    defaultValue: undefined,
    rows: 4,
    autoResize: true,
    required: false
  }
} satisfies StoryType`,...g.parameters?.docs?.source}}},_=[`Example`]})))()}v();export{g as Example,_ as __namedExportsOrder,h as default};