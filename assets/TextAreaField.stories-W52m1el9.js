import{j as n}from"./emotion-serialize.browser.esm-Xr4f5Ts3.js";import{a as y,c as E}from"./emotion-css.esm-DPNEF3j8.js";import{r as u,R as V}from"./index-CDs2tPxN.js";function p(e){e.current&&(e.current.style.height="auto",e.current.style.height=`${e.current.scrollHeight+5}px`)}const T=(e,a)=>(V.useEffect(()=>{[a,e].forEach(r=>{r&&(typeof r=="function"?r(a.current||null):r.current=a.current||null)})},[a,e]),a),s=u.forwardRef(({onChangeByValue:e,onChange:a,className:r,autoResize:i,resize:h="vertical",...t},d)=>{const l=u.useRef(null),x=T(d,l),v=c=>{if(e){const{target:{value:b}}=c;e(b)}a&&a(c),i&&p(l)};return u.useEffect(()=>{!i||!l.current||p(l)},[d,t.value,i]),n.jsx("div",{className:y(E`
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
          `,r),children:n.jsxs("label",{children:[n.jsx("span",{children:t.label}),n.jsx("textarea",{ref:x,onChange:v,defaultValue:t.defaultValue,...t})]})})});s.displayName="TextAreaField";try{s.displayName="TextAreaField",s.__docgenInfo={description:"",displayName:"TextAreaField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"any"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!1,type:{name:"(value: string, name?: string) => void"}},autoResize:{defaultValue:null,description:"",name:"autoResize",required:!1,type:{name:"boolean"}},resize:{defaultValue:{value:"vertical"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"inline"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'},{value:'"block"'}]}}}}}catch{}const j={component:s,parameters:{docs:{description:{component:"Extends the native HTML textarea element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea."}}}},o={args:{label:"Example",placeholder:"Placeholder",onChange:e=>{console.log("Textarea changed to"+e.target.value)},value:void 0,defaultValue:void 0,rows:4,autoResize:!0,required:!1}};var m,f,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const w=["Example"];export{o as Example,w as __namedExportsOrder,j as default};
