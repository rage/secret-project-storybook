import{i as e}from"./preload-helper-B45gAKPr.js";import{$ as t,St as n,V as r,et as i,it as a,t as o,wt as s}from"./iframe-CAN3q5_A.js";function c(e){let{control:t}=i({defaultValues:{files:null}});return(0,l.jsx)(r,{name:`files`,control:t,...e})}var l,u,d,f,p,m;e((()=>{s(),t(),o(),l=a(),u=n`
  display: grid;
  gap: 16px;
  max-width: 420px;
`,d={title:`Components/FileField`,component:c,args:{label:`Upload files`,buttonLabel:`Browse`}},f={},p={render:()=>(0,l.jsxs)(`div`,{className:u,children:[(0,l.jsx)(c,{label:`Single file`}),(0,l.jsx)(c,{label:`Multiple files`,multiple:!0}),(0,l.jsx)(c,{label:`Disabled`,isDisabled:!0}),(0,l.jsx)(c,{label:`Invalid`,errorMessage:`A file is required`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className={stackCss}>
      <FileFieldDemo label="Single file" />
      <FileFieldDemo label="Multiple files" multiple />
      <FileFieldDemo label="Disabled" isDisabled />
      <FileFieldDemo label="Invalid" errorMessage="A file is required" />
    </div>
} satisfies Story`,...p.parameters?.docs?.source}}},m=[`Playground`,`States`]}))();export{f as Playground,p as States,m as __namedExportsOrder,d as default};