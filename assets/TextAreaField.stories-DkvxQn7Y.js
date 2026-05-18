import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{n as r,r as i,t as a}from"./emotion-css.esm-DyUfwQgn.js";import{C as o}from"./iframe-CIKWDTJj.js";function s(e,t,n){if(e.current){let r=e.current.style.height;e.current.style.height=`auto`;let i=`${e.current.scrollHeight+5}px`;n&&e.current.scrollHeight>n?e.current.style.height=`${n}px`:e.current.style.height=`${e.current.scrollHeight+5}px`,t&&r!==i&&t()}}var c,l,u,d,f=e((()=>{i(),c=t(n()),l=o(),u=(e,t)=>(c.useEffect(()=>{[t,e].forEach(e=>{e&&(typeof e==`function`?e(t.current||null):e.current=t.current||null)})},[t,e]),t),d=(0,c.forwardRef)(({onChangeByValue:e,onChange:t,className:n,autoResize:i,resize:o=`vertical`,onAutoResized:d,autoResizeMaxHeightPx:f,...p},m)=>{let h=(0,c.useRef)(null),g=u(m,h),_=(0,c.useRef)(p.value);return(0,c.useEffect)(()=>{i&&s(h,d,f)},[i,d,f]),(0,c.useEffect)(()=>{i&&(_.current&&p.value!=_.current&&s(h,d,f),_.current=p.value)},[p.value,i,d,f]),(0,c.useEffect)(()=>{let e=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting&&h.current){s(h,d,f);break}}),t=h.current;return t&&e.observe(t),()=>{t&&e.disconnect()}},[d,f]),(0,l.jsx)(`div`,{className:r(a`
            margin-bottom: 1rem;

            label {
              display: grid;

              textarea {
                background: #fcfcfc;
                border: 1.6px solid #dedede;
                padding: 10px 12px;
                resize: ${o};
              }
              span {
                color: #333;
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 0.2rem;
              }
            }
          `,n),children:(0,l.jsxs)(`label`,{children:[(0,l.jsx)(`span`,{children:p.label}),(0,l.jsx)(`textarea`,{ref:g,onChange:n=>{if(e){let{target:{value:t}}=n;e(t)}t&&t(n),i&&s(h,d,f)},defaultValue:p.defaultValue,...p})]})})}),d.displayName=`TextAreaField`})),p,m,h;e((()=>{f(),p={component:d,parameters:{docs:{description:{component:`Extends the native HTML textarea element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea.`}}}},m={args:{label:`Example`,placeholder:`Placeholder`,onChange:e=>{console.log(`Textarea changed to`+e.target.value)},value:void 0,defaultValue:void 0,rows:4,autoResize:!0,required:!1}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryType`,...m.parameters?.docs?.source}}},h=[`Example`]}))();export{m as Example,h as __namedExportsOrder,p as default};