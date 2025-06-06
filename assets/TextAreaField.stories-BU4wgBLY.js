import{j as d}from"./jsx-runtime-CLpGMVip.js";import{a as _,c as w}from"./emotion-css.esm-HUuX3KNn.js";import{r as u,R as j}from"./index-CZMpeKRu.js";import"./emotion-utils.browser.esm-D8RxJ_4a.js";function p(e,r,a){if(e.current){const t=e.current.style.height;e.current.style.height="auto";const g=`${e.current.scrollHeight+5}px`;a&&e.current.scrollHeight>a?e.current.style.height=`${a}px`:e.current.style.height=`${e.current.scrollHeight+5}px`,r&&t!==g&&r()}}const C=(e,r)=>(j.useEffect(()=>{[r,e].forEach(a=>{a&&(typeof a=="function"?a(r.current||null):a.current=r.current||null)})},[r,e]),r),m=u.forwardRef(({onChangeByValue:e,onChange:r,className:a,autoResize:t,resize:g="vertical",onAutoResized:n,autoResizeMaxHeightPx:l,...s},x)=>{const o=u.useRef(null),E=C(x,o),h=u.useRef(s.value),V=c=>{if(e){const{target:{value:i}}=c;e(i)}r&&r(c),t&&p(o,n,l)};return u.useEffect(()=>{t&&p(o,n,l)},[t,n,l]),u.useEffect(()=>{t&&(h.current&&s.value!=h.current&&p(o,n,l),h.current=s.value)},[s.value,t,n,l]),u.useEffect(()=>{const c=new IntersectionObserver(T=>{for(const q of T)if(q.isIntersecting&&o.current){p(o,n,l);break}}),i=o.current;return i&&c.observe(i),()=>{i&&c.disconnect()}},[n,l]),d.jsx("div",{className:_(w`
            margin-bottom: 1rem;

            label {
              display: grid;

              textarea {
                background: #fcfcfc;
                border: 1.6px solid #dedede;
                padding: 10px 12px;
                resize: ${g};
              }
              span {
                color: #333;
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 0.2rem;
              }
            }
          `,a),children:d.jsxs("label",{children:[d.jsx("span",{children:s.label}),d.jsx("textarea",{ref:E,onChange:V,defaultValue:s.defaultValue,...s})]})})});m.displayName="TextAreaField";try{m.displayName="TextAreaField",m.__docgenInfo={description:"",displayName:"TextAreaField",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"any"}},onChangeByValue:{defaultValue:null,description:"",name:"onChangeByValue",required:!1,type:{name:"((value: string, name?: string) => void)"}},autoResize:{defaultValue:null,description:"",name:"autoResize",required:!1,type:{name:"boolean"}},onAutoResized:{defaultValue:null,description:"",name:"onAutoResized",required:!1,type:{name:"(() => void)"}},autoResizeMaxHeightPx:{defaultValue:null,description:"",name:"autoResizeMaxHeightPx",required:!1,type:{name:"number"}},resize:{defaultValue:{value:"vertical"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"inline"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'},{value:'"block"'}]}}}}}catch{}const $={component:m,parameters:{docs:{description:{component:"Extends the native HTML textarea element with some additional props, such as label. All props available on the regular HTML input also work with this component. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea."}}}},f={args:{label:"Example",placeholder:"Placeholder",onChange:e=>{console.log("Textarea changed to"+e.target.value)},value:void 0,defaultValue:void 0,rows:4,autoResize:!0,required:!1}};var v,b,y;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(y=(b=f.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const H=["Example"];export{f as Example,H as __namedExportsOrder,$ as default};
