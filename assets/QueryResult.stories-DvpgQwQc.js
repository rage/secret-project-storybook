import{j as e,Q as s,c as L}from"./iframe-D0P9lDOs.js";import"./preload-helper-Dp1pzeXC.js";const n=L`
  margin: 0;
`,F={title:"Components/QueryResult",parameters:{docs:{description:{component:"Wraps TanStack Query results with loading skeletons, refetch progress, stale errors, and empty states. Pass `themeMode` from the host app (light/dark)."}}}};function a(r){return{data:void 0,error:null,isError:!1,isPending:!1,isRefetching:!1,refetch:()=>Promise.resolve({}),...r}}const t={render:()=>e.jsx(s,{themeMode:"light",query:a({data:"Loaded content",isPending:!1}),children:r=>e.jsx("p",{className:n,children:r})})},o={render:()=>e.jsx(s,{themeMode:"light",loadingDelayMs:0,query:a({data:void 0,isPending:!0}),children:()=>null})},d={render:()=>e.jsx(s,{themeMode:"light",query:a({data:void 0,isPending:!1,isError:!0,error:new Error("Request failed")}),children:()=>null})},i={render:()=>e.jsx(s,{themeMode:"light",query:a({data:"Stale content still visible",isPending:!1,isError:!0,error:new Error("Background refetch failed")}),children:r=>e.jsx("p",{className:n,children:r})})},l={render:()=>e.jsx(s,{themeMode:"light",query:a({data:"Content while refetching",isPending:!1,isRefetching:!0}),children:r=>e.jsx("p",{className:n,children:r})})},c={render:()=>e.jsx(s,{themeMode:"light",query:a({data:[],isPending:!1}),emptyFallback:e.jsx("p",{className:n,children:"No rows yet."}),children:r=>e.jsx("p",{className:n,children:r.join(",")})})},u={render:()=>e.jsx(s,{themeMode:"dark",query:a({data:"Loaded in dark theme",isPending:!1}),children:r=>e.jsx("p",{className:n,children:r})})};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <QueryResult themeMode="light" query={mockQuery({
    data: "Loaded content",
    isPending: false
  })}>
      {d => <p className={paragraphCss}>{d}</p>}
    </QueryResult>
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,y,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <QueryResult themeMode="light" loadingDelayMs={0} query={mockQuery({
    data: undefined,
    isPending: true
  })}>
      {() => null}
    </QueryResult>
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var Q,k,R;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <QueryResult themeMode="light" query={mockQuery({
    data: undefined,
    isPending: false,
    isError: true,
    error: new Error("Request failed")
  })}>
      {() => null}
    </QueryResult>
}`,...(R=(k=d.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var j,x,E;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <QueryResult themeMode="light" query={mockQuery({
    data: "Stale content still visible",
    isPending: false,
    isError: true,
    error: new Error("Background refetch failed")
  })}>
      {d => <p className={paragraphCss}>{d}</p>}
    </QueryResult>
}`,...(E=(x=i.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var M,P,q;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <QueryResult themeMode="light" query={mockQuery({
    data: "Content while refetching",
    isPending: false,
    isRefetching: true
  })}>
      {d => <p className={paragraphCss}>{d}</p>}
    </QueryResult>
}`,...(q=(P=l.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var S,N,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <QueryResult<string[]> themeMode="light" query={mockQuery<string[]>({
    data: [],
    isPending: false
  })} emptyFallback={<p className={paragraphCss}>No rows yet.</p>}>
      {items => <p className={paragraphCss}>{items.join(",")}</p>}
    </QueryResult>
}`,...(C=(N=c.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var w,b,v;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <QueryResult themeMode="dark" query={mockQuery({
    data: "Loaded in dark theme",
    isPending: false
  })}>
      {d => <p className={paragraphCss}>{d}</p>}
    </QueryResult>
}`,...(v=(b=u.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const _=["Success","Loading","BlockingError","StaleError","Refreshing","EmptyFallback","SuccessDark"];export{d as BlockingError,c as EmptyFallback,o as Loading,l as Refreshing,i as StaleError,t as Success,u as SuccessDark,_ as __namedExportsOrder,F as default};
