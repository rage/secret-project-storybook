import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{c as S,a as V}from"./emotion-css.esm-BvLEAwLp.js";import{r as s,R as $}from"./index-0yr9KlQE.js";import"./emotion-utils.browser.esm-YKnV_D65.js";function p(e,r,t){if(e.current){const n=e.current.style.height;e.current.style.height="auto";const m=`${e.current.scrollHeight+5}px`;t&&e.current.scrollHeight>t?e.current.style.height=`${t}px`:e.current.style.height=`${e.current.scrollHeight+5}px`,r&&n!==m&&r()}}const k=(e,r)=>($.useEffect(()=>{[r,e].forEach(t=>{t&&(typeof t=="function"?t(r.current||null):t.current=r.current||null)})},[r,e]),r),x=s.forwardRef(({onChangeByValue:e,onChange:r,className:t,autoResize:n,resize:m="vertical",onAutoResized:a,autoResizeMaxHeightPx:l,...c},E)=>{const o=s.useRef(null),y=k(E,o),h=s.useRef(c.value),T=u=>{if(e){const{target:{value:i}}=u;e(i)}r&&r(u),n&&p(o,a,l)};return s.useEffect(()=>{n&&p(o,a,l)},[n,a,l]),s.useEffect(()=>{n&&(h.current&&c.value!=h.current&&p(o,a,l),h.current=c.value)},[c.value,n,a,l]),s.useEffect(()=>{const u=new IntersectionObserver(w=>{for(const j of w)if(j.isIntersecting&&o.current){p(o,a,l);break}}),i=o.current;return i&&u.observe(i),()=>{i&&u.disconnect()}},[a,l]),d.jsx("div",{className:S(V`
            margin-bottom: 1rem;

            label {
              display: grid;

              textarea {
                background: #fcfcfc;
                border: 1.6px solid #dedede;
                padding: 10px 12px;
                resize: ${m};
              }
              span {
                color: #333;
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 0.2rem;
              }
            }
          `,t),children:d.jsxs("label",{children:[d.jsx("span",{children:c.label}),d.jsx("textarea",{ref:y,onChange:T,defaultValue:c.defaultValue,...c})]})})});x.displayName="TextAreaField";const F={component:x,parameters:{docs:{description:{component:"Extends the native HTML textarea element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea."}}}},f={args:{label:"Example",placeholder:"Placeholder",onChange:e=>{console.log("Textarea changed to"+e.target.value)},value:void 0,defaultValue:void 0,rows:4,autoResize:!0,required:!1}};var g,v,b;f.parameters={...f.parameters,docs:{...(g=f.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(b=(v=f.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const I=["Example"];export{f as Example,I as __namedExportsOrder,F as default};
