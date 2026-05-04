import{n as e}from"./chunk-jRWAZmH_.js";import{r as t,t as n}from"./emotion-css.esm-DyUfwQgn.js";import{r,t as i,x as a}from"./iframe-DP1T4v_l.js";function o(e){return{data:void 0,error:null,isError:!1,isPending:!1,isRefetching:!1,refetch:()=>Promise.resolve({}),...e}}var s,c,l,u,d,f,p,m,h,g,_;e((()=>{t(),i(),s=a(),c=n`
  margin: 0;
`,l={title:`Components/QueryResult`,parameters:{docs:{description:{component:"Wraps TanStack Query results with loading skeletons, refetch progress, stale errors, and empty states. Pass `themeMode` from the host app (light/dark)."}}}},u={render:()=>(0,s.jsx)(r,{themeMode:`light`,query:o({data:`Loaded content`,isPending:!1}),children:e=>(0,s.jsx)(`p`,{className:c,children:e})})},d={render:()=>(0,s.jsx)(r,{themeMode:`light`,loadingDelayMs:0,query:o({data:void 0,isPending:!0}),children:()=>null})},f={render:()=>(0,s.jsx)(r,{themeMode:`light`,query:o({data:void 0,isPending:!1,isError:!0,error:Error(`Request failed`)}),children:()=>null})},p={render:()=>(0,s.jsx)(r,{themeMode:`light`,query:o({data:`Stale content still visible`,isPending:!1,isError:!0,error:Error(`Background refetch failed`)}),children:e=>(0,s.jsx)(`p`,{className:c,children:e})})},m={render:()=>(0,s.jsx)(r,{themeMode:`light`,query:o({data:`Content while refetching`,isPending:!1,isRefetching:!0}),children:e=>(0,s.jsx)(`p`,{className:c,children:e})})},h={render:()=>(0,s.jsx)(r,{themeMode:`light`,query:o({data:[],isPending:!1}),emptyFallback:(0,s.jsx)(`p`,{className:c,children:`No rows yet.`}),children:e=>(0,s.jsx)(`p`,{className:c,children:e.join(`,`)})})},g={render:()=>(0,s.jsx)(r,{themeMode:`dark`,query:o({data:`Loaded in dark theme`,isPending:!1}),children:e=>(0,s.jsx)(`p`,{className:c,children:e})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <QueryResult themeMode="light" query={mockQuery({
    data: "Loaded content",
    isPending: false
  })}>
      {d => <p className={paragraphCss}>{d}</p>}
    </QueryResult>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <QueryResult themeMode="light" loadingDelayMs={0} query={mockQuery({
    data: undefined,
    isPending: true
  })}>
      {() => null}
    </QueryResult>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <QueryResult themeMode="light" query={mockQuery({
    data: undefined,
    isPending: false,
    isError: true,
    error: new Error("Request failed")
  })}>
      {() => null}
    </QueryResult>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <QueryResult themeMode="light" query={mockQuery({
    data: "Stale content still visible",
    isPending: false,
    isError: true,
    error: new Error("Background refetch failed")
  })}>
      {d => <p className={paragraphCss}>{d}</p>}
    </QueryResult>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <QueryResult themeMode="light" query={mockQuery({
    data: "Content while refetching",
    isPending: false,
    isRefetching: true
  })}>
      {d => <p className={paragraphCss}>{d}</p>}
    </QueryResult>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <QueryResult<string[]> themeMode="light" query={mockQuery<string[]>({
    data: [],
    isPending: false
  })} emptyFallback={<p className={paragraphCss}>No rows yet.</p>}>
      {items => <p className={paragraphCss}>{items.join(",")}</p>}
    </QueryResult>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <QueryResult themeMode="dark" query={mockQuery({
    data: "Loaded in dark theme",
    isPending: false
  })}>
      {d => <p className={paragraphCss}>{d}</p>}
    </QueryResult>
}`,...g.parameters?.docs?.source}}},_=[`Success`,`Loading`,`BlockingError`,`StaleError`,`Refreshing`,`EmptyFallback`,`SuccessDark`]}))();export{f as BlockingError,h as EmptyFallback,d as Loading,m as Refreshing,p as StaleError,u as Success,g as SuccessDark,_ as __namedExportsOrder,l as default};