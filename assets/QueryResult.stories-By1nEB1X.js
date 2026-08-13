import{i as e}from"./preload-helper-B45gAKPr.js";import{Mt as t,Pt as n,i as r,mt as i,t as a}from"./iframe-CnVUbaoj.js";function o(e){return{data:void 0,error:null,isError:!1,isPending:!1,isRefetching:!1,refetch:()=>Promise.resolve({}),...e}}var s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{n(),a(),s=i(),c=t`
  margin: 0;
`,l={title:`Components/QueryResult`,parameters:{docs:{description:{component:"Wraps TanStack Query results with loading skeletons, refetch progress, stale errors, and empty states. Loaded content renders layout-neutral (no clipping frame), while loading/error chrome is applied only for those states. Pass `themeMode` from the host app (light/dark)."}}}},u={render:()=>(0,s.jsx)(r,{themeMode:`light`,query:o({data:`Loaded content`,isPending:!1}),children:e=>(0,s.jsx)(`p`,{className:c,children:e})})},d={render:()=>(0,s.jsx)(r,{themeMode:`light`,loadingDelayMs:0,query:o({data:void 0,isPending:!0}),children:()=>null})},f={render:()=>(0,s.jsx)(r,{themeMode:`light`,query:o({data:void 0,isPending:!1,isError:!0,error:Error(`Request failed`)}),children:()=>null})},p={render:()=>(0,s.jsx)(r,{themeMode:`light`,query:o({data:`Stale content still visible`,isPending:!1,isError:!0,error:Error(`Background refetch failed`)}),children:e=>(0,s.jsx)(`p`,{className:c,children:e})})},m={render:()=>(0,s.jsx)(r,{themeMode:`light`,query:o({data:`Content while refetching`,isPending:!1,isFetching:!0,isRefetching:!0}),children:e=>(0,s.jsx)(`p`,{className:c,children:e})})},h={render:()=>(0,s.jsx)(r,{themeMode:`light`,query:o({data:[],isPending:!1}),emptyFallback:(0,s.jsx)(`p`,{className:c,children:`No rows yet.`}),children:e=>(0,s.jsx)(`p`,{className:c,children:e.join(`,`)})})},g={render:()=>(0,s.jsx)(r,{themeMode:`dark`,query:o({data:`Loaded in dark theme`,isPending:!1}),children:e=>(0,s.jsx)(`p`,{className:c,children:e})})},_=t`
  width: 100%;
  border-top: 1px solid var(--color-gray-200);
`,v=t`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-gray-200);
`,y={render:()=>(0,s.jsx)(r,{themeMode:`light`,query:o({data:[{label:`Teacher Example`,value:`teacher@example.com`},{label:`Assistant Example`,value:`assistant@example.com`}],isPending:!1}),children:e=>(0,s.jsx)(`div`,{className:_,children:e.map(e=>(0,s.jsxs)(`div`,{className:v,children:[(0,s.jsx)(`span`,{children:e.label}),(0,s.jsx)(`span`,{children:e.value})]},e.value))})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    isFetching: true,
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
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <QueryResult themeMode="light" query={mockQuery({
    data: [{
      label: "Teacher Example",
      value: "teacher@example.com"
    }, {
      label: "Assistant Example",
      value: "assistant@example.com"
    }],
    isPending: false
  })}>
      {rows => <div className={fullWidthRowsCss}>
          {rows.map(row => <div key={row.value} className={fullWidthRowCss}>
              <span>{row.label}</span>
              <span>{row.value}</span>
            </div>)}
        </div>}
    </QueryResult>
}`,...y.parameters?.docs?.source}}},b=[`Success`,`Loading`,`BlockingError`,`StaleError`,`Refreshing`,`EmptyFallback`,`SuccessDark`,`FullWidthRows`]}))();export{f as BlockingError,h as EmptyFallback,y as FullWidthRows,d as Loading,m as Refreshing,p as StaleError,u as Success,g as SuccessDark,b as __namedExportsOrder,l as default};