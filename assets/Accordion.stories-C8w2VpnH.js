import{r as o,j as e,R as g,k as T,c as h}from"./iframe-D0P9lDOs.js";import{s as E}from"./emotion-styled.browser.esm-Dn97sZhW.js";import{s as N}from"./typography-B78hKXS5.js";import{b as c}from"./theme-DgIg-lup.js";import{r as f}from"./respond-Ce_Chyxf.js";import"./preload-helper-Dp1pzeXC.js";import"./extends-CF3RwP-h.js";const d=o.createContext(void 0),x=({children:r})=>{const n=o.useRef(new Set),t=o.useCallback(s=>{n.current.add(s)},[]),i=o.useCallback(s=>{n.current.delete(s)},[]),a=o.useCallback(()=>{n.current.forEach(s=>{s.open=!0})},[]),y=o.useCallback(()=>{n.current.forEach(s=>{s.open=!1})},[]),$=o.useMemo(()=>({expandAll:a,collapseAll:y,registerAccordion:t,unregisterAccordion:i}),[a,y,t,i]);return e.jsx(d.Provider,{value:$,children:r})},I=()=>{const r=o.useContext(d);if(!r)throw new Error("useAccordionContext must be used within an AccordionProvider");return r};try{d.displayName="AccordionContext",d.__docgenInfo={description:"",displayName:"AccordionContext",props:{}}}catch{}try{x.displayName="AccordionProvider",x.__docgenInfo={description:"",displayName:"AccordionProvider",props:{}}}catch{}const P=T`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,R=T`
  from { opacity: 0; height: 0; padding: 0; }
  to { opacity: 1; height: 100%; padding: 10px; }
`,F=E.div`
  padding: 0;
  margin: 0;
  font-family: ${N};

  details {
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }

  details[open] summary ~ * {
    animation: ${P} 0.3s ease-in-out;
    color: ${c.colors.gray[700]};
  }

  details[open] > div {
    animation-name: ${R};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    padding: 1rem 1rem 1rem 2rem;
  }

  details summary {
    padding: 1rem;
    position: relative;
    cursor: pointer;
    font-weight: medium;
    list-style: none;
    color: ${c.colors.gray[700]};
    outline: 0;
    background: ${c.colors.clear[100]};
    ${f.sm} {
      padding: 1rem 1rem 1rem 2rem;
    }
  }

  details summary::-webkit-details-marker {
    display: none;
  }

  details[open] > summary {
    color: ${c.colors.gray[700]};
  }

  details summary:after {
    content: "+";
    position: absolute;
    font-size: 2.4rem;
    color: ${c.colors.gray[700]};
    line-height: 0;
    margin-top: 0.75rem;
    top: 14px;
    right: 4%;
    font-weight: 200;
    transform-origin: center;
    transition: all 200ms linear;
  }
  details[open] summary:after {
    transform: rotate(45deg);
    font-size: 2.4rem;
  }
  details[open] summary {
    font-weight: 600;
    opacity: 0.9;
  }

  ul {
    padding: 14px;
    margin: 0;

    ${f.sm} {
      background: #f9f9f9;
      padding: 25px 35px 30px 35px;
    }
  }

  ul li {
    font-size: 1.1rem;
    margin: 0 0 0.2rem;
    line-height: 1.7;
    list-style: none;
  }
`,l=({className:r,children:n})=>{const t=g.useRef(null),i=o.useContext(d);return g.useEffect(()=>{if(t.current&&i){const a=t.current.querySelector("details");if(a)return i.registerAccordion(a),()=>{i.unregisterAccordion(a)}}},[i]),e.jsx(F,{ref:t,className:r,children:n})};try{l.displayName="Accordion",l.__docgenInfo={description:`Accordion component that wraps HTML details/summary elements with styling and animations.
AccordionContext can be used to expand/collapse all accordions in a subtree.`,displayName:"Accordion",props:{}}}catch{}const H={component:l,parameters:{docs:{description:{component:"An expandable accordion component that can show/hide content."}}}},m={args:{children:e.jsxs("details",{children:[e.jsx("summary",{children:"Click to expand"}),e.jsxs("ul",{children:[e.jsx("li",{children:"First item"}),e.jsx("li",{children:"Second item"}),e.jsx("li",{children:"Third item"})]})]})}},p={args:{open:!0,children:e.jsxs("details",{children:[e.jsx("summary",{children:"This accordion starts expanded"}),e.jsxs("ul",{children:[e.jsx("li",{children:"First item"}),e.jsx("li",{children:"Second item"}),e.jsx("li",{children:"Third item"})]})]})}},W=()=>{const{expandAll:r,collapseAll:n}=I();return e.jsxs("div",{children:[e.jsxs("div",{className:h`
          margin-bottom: 1rem;
        `,children:[e.jsx("button",{className:h`
            margin-right: 1rem;
          `,onClick:r,children:"Expand All"}),e.jsx("button",{onClick:n,children:"Collapse All"})]}),e.jsxs("div",{className:h`
          display: grid;
          gap: 1rem;
        `,children:[e.jsx(l,{children:e.jsxs("details",{children:[e.jsx("summary",{children:"First Section"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Item 1.1"}),e.jsx("li",{children:"Item 1.2"})]})]})}),e.jsx(l,{children:e.jsxs("details",{children:[e.jsx("summary",{children:"Second Section"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Item 2.1"}),e.jsx("li",{children:"Item 2.2"})]})]})})]})]})},u={render:()=>e.jsx(x,{children:e.jsx(W,{})})};var j,A,_;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: <details>
        <summary>Click to expand</summary>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </details>
  }
} satisfies StoryType`,...(_=(A=m.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var C,b,v;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    open: true,
    children: <details>
        <summary>This accordion starts expanded</summary>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </details>
  }
} satisfies StoryType`,...(v=(b=p.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var S,k,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <AccordionProvider>
      <AccordionWithControls />
    </AccordionProvider>
} satisfies StoryType`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const G=["Accordion","OpenByDefault","WithExpandCollapseControls"];export{m as Accordion,p as OpenByDefault,u as WithExpandCollapseControls,G as __namedExportsOrder,H as default};
