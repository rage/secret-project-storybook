import{F as s,j as e,c}from"./iframe-D0P9lDOs.js";import"./preload-helper-Dp1pzeXC.js";const p=c`
  display: grid;
  gap: 16px;
  max-width: 420px;
`,b={title:"Components/FileField",component:s,args:{label:"Upload files",buttonLabel:"Browse"}},l={},a={render:()=>e.jsxs("div",{className:p,children:[e.jsx(s,{label:"Single file"}),e.jsx(s,{label:"Multiple files",multiple:!0}),e.jsx(s,{label:"Disabled",disabled:!0}),e.jsx(s,{label:"Invalid",errorMessage:"A file is required"})]})};var r,i,t;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:"{} satisfies Story",...(t=(i=l.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var o,d,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <FileField label="Single file" />
      <FileField label="Multiple files" multiple />
      <FileField label="Disabled" disabled />
      <FileField label="Invalid" errorMessage="A file is required" />
    </div>
} satisfies Story`,...(n=(d=a.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const F=["Playground","States"];export{l as Playground,a as States,F as __namedExportsOrder,b as default};
