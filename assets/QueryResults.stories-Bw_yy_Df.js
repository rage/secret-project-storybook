import{j as a,x as o,c as D}from"./iframe-DXyIoFKT.js";import"./preload-helper-Dp1pzeXC.js";const k=D`
  margin: 0;
`,q={title:"Components/QueryResults",parameters:{docs:{description:{component:"Waits until every query in the tuple has succeeded, then calls `renderData` with the typed data tuple. Shares the same loading, error, and refetch chrome as `QueryResult`."}}}};function e(r){return{data:void 0,error:null,isError:!1,isPending:!1,isRefetching:!1,refetch:()=>Promise.resolve({}),...r}}const s={render:()=>a.jsx(o,{themeMode:"light",queries:[e({data:"Course name",isPending:!1}),e({data:42,isPending:!1})],renderData:r=>a.jsxs("p",{className:k,children:[r[0]," — ",r[1]," items"]})})},n={render:()=>a.jsx(o,{themeMode:"light",loadingDelayMs:0,queries:[e({data:"Ready",isPending:!1}),e({data:void 0,isPending:!0})],renderData:()=>null})},t={render:()=>a.jsx(o,{themeMode:"light",queries:[e({data:"Ready",isPending:!1}),e({data:void 0,isPending:!1,isError:!0,error:new Error("Second query failed")})],renderData:()=>null})},d={render:()=>a.jsx(o,{themeMode:"dark",queries:[e({data:"Dark mode",isPending:!1}),e({data:!0,isPending:!1})],renderData:r=>a.jsxs("p",{className:k,children:[r[0]," (",String(r[1]),")"]})})};var i,u,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <QueryResults themeMode="light" queries={[mockQuery({
    data: "Course name",
    isPending: false
  }), mockQuery({
    data: 42,
    isPending: false
  })] as never} renderData={tuple => <p className={paragraphCss}>
          {tuple[0]} — {tuple[1]} items
        </p>} />
}`,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var l,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <QueryResults themeMode="light" loadingDelayMs={0} queries={[mockQuery({
    data: "Ready",
    isPending: false
  }), mockQuery({
    data: undefined,
    isPending: true
  })] as never} renderData={() => null} />
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,h,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <QueryResults themeMode="light" queries={[mockQuery({
    data: "Ready",
    isPending: false
  }), mockQuery({
    data: undefined,
    isPending: false,
    isError: true,
    error: new Error("Second query failed")
  })] as never} renderData={() => null} />
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,P,Q;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <QueryResults themeMode="dark" queries={[mockQuery({
    data: "Dark mode",
    isPending: false
  }), mockQuery({
    data: true,
    isPending: false
  })] as never} renderData={tuple => <p className={paragraphCss}>
          {tuple[0]} ({String(tuple[1])})
        </p>} />
}`,...(Q=(P=d.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const x=["SuccessTwoQueries","Loading","BlockingError","SuccessDark"];export{t as BlockingError,n as Loading,d as SuccessDark,s as SuccessTwoQueries,x as __namedExportsOrder,q as default};
