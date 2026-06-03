import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{U as n,an as r,ct as i,lt as a,ot as o}from"./iframe-Ceo6Khuz.js";import{n as s,t as c}from"./emotion-styled.browser.esm-BIVYKRpR.js";import{n as l,t as u,u as d}from"./styles-CSQU3Qq8.js";import{n as f,t as p}from"./respond-CElc44Sa.js";var m,h,g,_,v,y=t((()=>{m=e(r()),h=n(),g=(0,m.createContext)(void 0),_=({children:e})=>{let t=(0,m.useRef)(new Set),n=(0,m.useCallback)(e=>{t.current.add(e)},[]),r=(0,m.useCallback)(e=>{t.current.delete(e)},[]),i=(0,m.useCallback)(()=>{t.current.forEach(e=>{e.open=!0})},[]),a=(0,m.useCallback)(()=>{t.current.forEach(e=>{e.open=!1})},[]),o=(0,m.useMemo)(()=>({expandAll:i,collapseAll:a,registerAccordion:n,unregisterAccordion:r}),[i,a,n,r]);return(0,h.jsx)(g.Provider,{value:o,children:e})},v=()=>{let e=(0,m.useContext)(g);if(!e)throw Error(`useAccordionContext must be used within an AccordionProvider`);return e}})),b,x,S,C,w,T,E=t((()=>{i(),c(),b=e(r()),u(),p(),y(),x=n(),S=a`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,C=a`
  from { opacity: 0; height: 0; padding: 0; }
  to { opacity: 1; height: 100%; padding: 10px; }
`,w=s.div`
  padding: 0;
  margin: 0;
  font-family: ${d};

  details {
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }

  details[open] summary ~ * {
    animation: ${S} 0.3s ease-in-out;
    color: ${l.colors.gray[700]};
  }

  details[open] > div {
    animation-name: ${C};
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
    color: ${l.colors.gray[700]};
    outline: 0;
    background: ${l.colors.clear[100]};
    ${f.sm} {
      padding: 1rem 1rem 1rem 2rem;
    }
  }

  details summary::-webkit-details-marker {
    display: none;
  }

  details[open] > summary {
    color: ${l.colors.gray[700]};
  }

  details summary:after {
    content: "+";
    position: absolute;
    font-size: 2.4rem;
    color: ${l.colors.gray[700]};
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
`,T=({className:e,children:t})=>{let n=b.useRef(null),r=(0,b.useContext)(g);return b.useEffect(()=>{if(n.current&&r){let e=n.current.querySelector(`details`);if(e)return r.registerAccordion(e),()=>{r.unregisterAccordion(e)}}},[r]),(0,x.jsx)(w,{ref:n,className:e,children:t})}})),D,O,k,A,j,M,N;t((()=>{i(),E(),y(),D=n(),O={component:T,parameters:{docs:{description:{component:`An expandable accordion component that can show/hide content.`}}}},k={args:{children:(0,D.jsxs)(`details`,{children:[(0,D.jsx)(`summary`,{children:`Click to expand`}),(0,D.jsxs)(`ul`,{children:[(0,D.jsx)(`li`,{children:`First item`}),(0,D.jsx)(`li`,{children:`Second item`}),(0,D.jsx)(`li`,{children:`Third item`})]})]})}},A={args:{open:!0,children:(0,D.jsxs)(`details`,{children:[(0,D.jsx)(`summary`,{children:`This accordion starts expanded`}),(0,D.jsxs)(`ul`,{children:[(0,D.jsx)(`li`,{children:`First item`}),(0,D.jsx)(`li`,{children:`Second item`}),(0,D.jsx)(`li`,{children:`Third item`})]})]})}},j=()=>{let{expandAll:e,collapseAll:t}=v();return(0,D.jsxs)(`div`,{children:[(0,D.jsxs)(`div`,{className:o`
          margin-bottom: 1rem;
        `,children:[(0,D.jsx)(`button`,{className:o`
            margin-right: 1rem;
          `,onClick:e,children:`Expand All`}),(0,D.jsx)(`button`,{onClick:t,children:`Collapse All`})]}),(0,D.jsxs)(`div`,{className:o`
          display: grid;
          gap: 1rem;
        `,children:[(0,D.jsx)(T,{children:(0,D.jsxs)(`details`,{children:[(0,D.jsx)(`summary`,{children:`First Section`}),(0,D.jsxs)(`ul`,{children:[(0,D.jsx)(`li`,{children:`Item 1.1`}),(0,D.jsx)(`li`,{children:`Item 1.2`})]})]})}),(0,D.jsx)(T,{children:(0,D.jsxs)(`details`,{children:[(0,D.jsx)(`summary`,{children:`Second Section`}),(0,D.jsxs)(`ul`,{children:[(0,D.jsx)(`li`,{children:`Item 2.1`}),(0,D.jsx)(`li`,{children:`Item 2.2`})]})]})})]})]})},M={render:()=>(0,D.jsx)(_,{children:(0,D.jsx)(j,{})})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryType`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
} satisfies StoryType`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <AccordionProvider>
      <AccordionWithControls />
    </AccordionProvider>
} satisfies StoryType`,...M.parameters?.docs?.source}}},N=[`Accordion`,`OpenByDefault`,`WithExpandCollapseControls`]}))();export{k as Accordion,A as OpenByDefault,M as WithExpandCollapseControls,N as __namedExportsOrder,O as default};