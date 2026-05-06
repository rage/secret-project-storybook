import{n as e}from"./chunk-jRWAZmH_.js";import{r as t,t as n}from"./emotion-css.esm-DyUfwQgn.js";import{n as r,t as i,x as a}from"./iframe-BhFJDBam.js";function o(e){return{data:void 0,error:null,isError:!1,isPending:!1,isRefetching:!1,refetch:()=>Promise.resolve({}),...e}}var s,c,l,u,d,f,p,m;e((()=>{t(),i(),s=a(),c=n`
  margin: 0;
`,l={title:`Components/QueryResults`,parameters:{docs:{description:{component:"Waits until every query in the tuple has succeeded, then calls `renderData` with the typed data tuple. Shares the same loading, error, and refetch chrome as `QueryResult`."}}}},u={render:()=>(0,s.jsx)(r,{themeMode:`light`,queries:[o({data:`Course name`,isPending:!1}),o({data:42,isPending:!1})],renderData:e=>(0,s.jsxs)(`p`,{className:c,children:[e[0],` — `,e[1],` items`]})})},d={render:()=>(0,s.jsx)(r,{themeMode:`light`,loadingDelayMs:0,queries:[o({data:`Ready`,isPending:!1}),o({data:void 0,isPending:!0})],renderData:()=>null})},f={render:()=>(0,s.jsx)(r,{themeMode:`light`,queries:[o({data:`Ready`,isPending:!1}),o({data:void 0,isPending:!1,isError:!0,error:Error(`Second query failed`)})],renderData:()=>null})},p={render:()=>(0,s.jsx)(r,{themeMode:`dark`,queries:[o({data:`Dark mode`,isPending:!1}),o({data:!0,isPending:!1})],renderData:e=>(0,s.jsxs)(`p`,{className:c,children:[e[0],` (`,String(e[1]),`)`]})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <QueryResults themeMode="light" queries={[mockQuery({
    data: "Course name",
    isPending: false
  }), mockQuery({
    data: 42,
    isPending: false
  })] as never} renderData={tuple => <p className={paragraphCss}>
          {tuple[0]} — {tuple[1]} items
        </p>} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <QueryResults themeMode="light" loadingDelayMs={0} queries={[mockQuery({
    data: "Ready",
    isPending: false
  }), mockQuery({
    data: undefined,
    isPending: true
  })] as never} renderData={() => null} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <QueryResults themeMode="light" queries={[mockQuery({
    data: "Ready",
    isPending: false
  }), mockQuery({
    data: undefined,
    isPending: false,
    isError: true,
    error: new Error("Second query failed")
  })] as never} renderData={() => null} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <QueryResults themeMode="dark" queries={[mockQuery({
    data: "Dark mode",
    isPending: false
  }), mockQuery({
    data: true,
    isPending: false
  })] as never} renderData={tuple => <p className={paragraphCss}>
          {tuple[0]} ({String(tuple[1])})
        </p>} />
}`,...p.parameters?.docs?.source}}},m=[`SuccessTwoQueries`,`Loading`,`BlockingError`,`SuccessDark`]}))();export{f as BlockingError,d as Loading,p as SuccessDark,u as SuccessTwoQueries,m as __namedExportsOrder,l as default};