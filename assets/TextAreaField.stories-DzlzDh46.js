import{j as o}from"./emotion-serialize.browser.esm-Xr4f5Ts3.js";import{a as T,c as V}from"./emotion-css.esm-DPNEF3j8.js";import{r as s,R as _}from"./index-CDs2tPxN.js";function p(e){e.current&&(e.current.style.height="auto",e.current.style.height=`${e.current.scrollHeight+5}px`)}const q=(e,a)=>(_.useEffect(()=>{[a,e].forEach(r=>{r&&(typeof r=="function"?r(a.current||null):r.current=a.current||null)})},[a,e]),a),u=s.forwardRef(({onChangeByValue:e,onChange:a,className:r,autoResize:c,resize:h="vertical",...d},x)=>{const t=s.useRef(null),v=q(x,t),b=n=>{if(e){const{target:{value:l}}=n;e(l)}a&&a(n),c&&p(t)};return s.useEffect(()=>{c&&p(t)},[c]),s.useEffect(()=>{const n=new IntersectionObserver(y=>{for(const E of y)if(E.isIntersecting&&t.current){p(t);break}}),l=t.current;return l&&n.observe(l),()=>{l&&n.disconnect()}},[]),o.jsx("div",{className:T(V`
            margin-bottom: 1rem;

            label {
              display: grid;

              textarea {
                background: #fcfcfc;
                border: 1.6px solid #dedede;
                padding: 10px 12px;
                resize: ${h};
              }
              span {
                color: #333;
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 0.2rem;
              }
            }
          `,r),children:o.jsxs("label",{children:[o.jsx("span",{children:d.label}),o.jsx("textarea",{ref:v,onChange:b,defaultValue:d.defaultValue,...d})]})})});u.displayName="TextAreaField";try{u.displayName="TextAreaField",u.__docgenInfo={description:"",displayName:"TextAreaField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"any"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!1,type:{name:"(value: string, name?: string) => void"}},autoResize:{defaultValue:null,description:"",name:"autoResize",required:!1,type:{name:"boolean"}},resize:{defaultValue:{value:"vertical"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"inline"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'},{value:'"block"'}]}}}}}catch{}const R={component:u,parameters:{docs:{description:{component:"Extends the native HTML textarea element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea."}}}},i={args:{label:"Example",placeholder:"Placeholder",onChange:e=>{console.log("Textarea changed to"+e.target.value)},value:void 0,defaultValue:void 0,rows:4,autoResize:!0,required:!1}};var m,f,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const A=["Example"];export{i as Example,A as __namedExportsOrder,R as default};
