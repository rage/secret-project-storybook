import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{r as t,t as n}from"./emotion-css.esm-DsoSFdsS.js";import{E as r,o as i,t as a}from"./components-BFIiifp_.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{t(),a(),s=o(),c=[{id:`1`,student:`Aino Virtanen`,course:`Credit registration import outcomes, Module CRS-IMPORT-103`,state:`Registered`,updated:`6 Sep 09:51`},{id:`2`,student:`Björn Lindqvist`,course:`Introduction to Programming, Part 1`,state:`Failed`,updated:`6 Sep 08:12`}],l=n`
  max-width: 720px;
`,u={title:`Components/Table`,component:i,parameters:{docs:{description:{component:'Presentational table. Columns declare their own sizing: `width` (which switches the table to a fixed layout), `minWidth`, `grow` and `nowrap`. `density="compact"` is for operator tables, and `emptyState` fills the body when there are no rows.'}}}},d={args:{caption:`Registrations`,rows:c,rowKey:e=>e.id,columns:[{header:`Student`,cell:e=>e.student},{header:`Course`,cell:e=>e.course},{header:`State`,cell:e=>e.state},{header:`Updated`,cell:e=>e.updated}]},render:e=>(0,s.jsx)(`div`,{className:l,children:(0,s.jsx)(i,{...e})})},f={args:{...d.args,columns:[{header:`Student`,cell:e=>e.student,minWidth:`10rem`},{header:`Course`,cell:e=>e.course,grow:!0},{header:`State`,cell:e=>(0,s.jsx)(r,{tone:e.state===`Failed`?`danger`:`success`,size:`compact`,children:e.state}),nowrap:!0},{header:`Updated`,cell:e=>e.updated,nowrap:!0,align:`end`}]},render:d.render},p={args:{...f.args,density:`compact`},render:d.render},m={args:{...d.args,rows:[],emptyState:`No registrations on this course yet.`},render:d.render},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    caption: "Registrations",
    rows,
    rowKey: (row: Registration) => row.id,
    columns: [{
      header: "Student",
      cell: (row: Registration) => row.student
    }, {
      header: "Course",
      cell: (row: Registration) => row.course
    }, {
      header: "State",
      cell: (row: Registration) => row.state
    }, {
      header: "Updated",
      cell: (row: Registration) => row.updated
    }]
  },
  render: args => <div className={wrapCss}>
      <Table {...args} />
    </div>
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    columns: [{
      header: "Student",
      cell: (row: Registration) => row.student,
      minWidth: "10rem"
    }, {
      header: "Course",
      cell: (row: Registration) => row.course,
      grow: true
    }, {
      header: "State",
      cell: (row: Registration) => <Badge tone={row.state === "Failed" ? "danger" : "success"} size="compact">
            {row.state}
          </Badge>,
      nowrap: true
    }, {
      header: "Updated",
      cell: (row: Registration) => row.updated,
      nowrap: true,
      align: "end"
    }]
  },
  render: Default.render
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...SizedColumns.args,
    density: "compact"
  },
  render: Default.render
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rows: [],
    emptyState: "No registrations on this course yet."
  },
  render: Default.render
} satisfies Story`,...m.parameters?.docs?.source}}},h=[`Default`,`SizedColumns`,`Compact`,`Empty`]})))()}g();export{p as Compact,d as Default,m as Empty,f as SizedColumns,h as __namedExportsOrder,u as default};