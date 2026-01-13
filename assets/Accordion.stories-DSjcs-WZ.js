import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{k as T,a as p}from"./emotion-css.esm-BvLEAwLp.js";import{s as E}from"./emotion-styled.browser.esm-uiAl99qX.js";import{r,R as g}from"./index-0yr9KlQE.js";import{s as R}from"./typography-B78hKXS5.js";import{b as c}from"./theme-DgIg-lup.js";import{r as f}from"./respond-Ce_Chyxf.js";import"./emotion-utils.browser.esm-YKnV_D65.js";import"./extends-CF3RwP-h.js";const h=r.createContext(void 0),F=({children:n})=>{const s=r.useRef(new Set),t=r.useCallback(i=>{s.current.add(i)},[]),o=r.useCallback(i=>{s.current.delete(i)},[]),a=r.useCallback(()=>{s.current.forEach(i=>{i.open=!0})},[]),x=r.useCallback(()=>{s.current.forEach(i=>{i.open=!1})},[]),$=r.useMemo(()=>({expandAll:a,collapseAll:x,registerAccordion:t,unregisterAccordion:o}),[a,x,t,o]);return e.jsx(h.Provider,{value:$,children:n})},P=()=>{const n=r.useContext(h);if(!n)throw new Error("useAccordionContext must be used within an AccordionProvider");return n},W=T`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,I=T`
  from { opacity: 0; height: 0; padding: 0; }
  to { opacity: 1; height: 100%; padding: 10px; }
`,O=E.div`
  padding: 0;
  margin: 0;
  font-family: ${R};

  details {
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }

  details[open] summary ~ * {
    animation: ${W} 0.3s ease-in-out;
    color: ${c.colors.gray[700]};
  }

  details[open] > div {
    animation-name: ${I};
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
`,u=({className:n,children:s})=>{const t=g.useRef(null),o=r.useContext(h);return g.useEffect(()=>{if(t.current&&o){const a=t.current.querySelector("details");if(a)return o.registerAccordion(a),()=>{o.unregisterAccordion(a)}}},[o]),e.jsx(O,{ref:t,className:n,children:s})},J={component:u,parameters:{docs:{description:{component:"An expandable accordion component that can show/hide content."}}}},l={args:{children:e.jsxs("details",{children:[e.jsx("summary",{children:"Click to expand"}),e.jsxs("ul",{children:[e.jsx("li",{children:"First item"}),e.jsx("li",{children:"Second item"}),e.jsx("li",{children:"Third item"})]})]})}},d={args:{open:!0,children:e.jsxs("details",{children:[e.jsx("summary",{children:"This accordion starts expanded"}),e.jsxs("ul",{children:[e.jsx("li",{children:"First item"}),e.jsx("li",{children:"Second item"}),e.jsx("li",{children:"Third item"})]})]})}},z=()=>{const{expandAll:n,collapseAll:s}=P();return e.jsxs("div",{children:[e.jsxs("div",{className:p`
          margin-bottom: 1rem;
        `,children:[e.jsx("button",{className:p`
            margin-right: 1rem;
          `,onClick:n,children:"Expand All"}),e.jsx("button",{onClick:s,children:"Collapse All"})]}),e.jsxs("div",{className:p`
          display: grid;
          gap: 1rem;
        `,children:[e.jsx(u,{children:e.jsxs("details",{children:[e.jsx("summary",{children:"First Section"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Item 1.1"}),e.jsx("li",{children:"Item 1.2"})]})]})}),e.jsx(u,{children:e.jsxs("details",{children:[e.jsx("summary",{children:"Second Section"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Item 2.1"}),e.jsx("li",{children:"Item 2.2"})]})]})})]})]})},m={render:()=>e.jsx(F,{children:e.jsx(z,{})})};var y,j,A;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(A=(j=l.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var C,b,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
} satisfies StoryType`,...(S=(b=d.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var k,v,w;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <AccordionProvider>
      <AccordionWithControls />
    </AccordionProvider>
} satisfies StoryType`,...(w=(v=m.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const K=["Accordion","OpenByDefault","WithExpandCollapseControls"];export{l as Accordion,d as OpenByDefault,m as WithExpandCollapseControls,K as __namedExportsOrder,J as default};
