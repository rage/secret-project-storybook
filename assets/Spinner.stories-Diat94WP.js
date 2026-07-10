import{i as e}from"./preload-helper-B45gAKPr.js";import{U as t}from"./iframe-Byt8Om0O.js";import{i as n,n as r,r as i,t as a}from"./emotion-styled.browser.esm-CrWJWHAC.js";import{n as o,t as s}from"./styles-CBXWstuV.js";var c,l=e((()=>{c=`loading-spinner-component`})),u,d,f,p,m,h,g=e((()=>{i(),a(),s(),l(),u=t(),d=n`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`,f=n`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`,p={small:{width:`16px`,height:`16px`},medium:{width:`30px`,height:`30px`},large:{width:`42px`,height:`42px`},placeholder:{width:`30px`,height:`30px`}},m=r.div`
  margin: ${e=>e.disableMargin?`0`:`1rem`};
  width: ${e=>p[e.variant||`medium`].width};
  height: ${e=>p[e.variant||`medium`].height};
  border: ${e=>e.variant===`placeholder`?`4px dashed`:`5px solid`} #f1f1f1;
  border-bottom-color: ${e=>e.variant===`placeholder`?o.colors.blue[500]:o.colors.green[500]};
  border-top-color: ${e=>e.variant===`placeholder`?o.colors.blue[300]:`transparent`};
  border-radius: 50%;
  display: inline-block;
  /** Showing the spinner is delayed because showing a spinner for a moment on fast transitions makes the application to feel like more slow than it is **/
  opacity: 0;
  animation-name: ${d}, ${f};
  animation-duration: ${e=>e.variant===`placeholder`?`0.8s`:`1s`}, 600ms;
  animation-timing-function: linear, ease;
  animation-iteration-count: infinite, 1;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
`,h=e=>(0,u.jsx)(m,{"data-testid":c,...e})})),_,v,y,b,x;e((()=>{g(),_={component:h,parameters:{docs:{description:{component:`Used to display a loading animation.`}}}},v={args:{variant:`medium`,disableMargin:!1}},y={args:{variant:`small`}},b={args:{variant:`large`}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "medium",
    disableMargin: false
  }
} satisfies StoryType`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "small"
  }
} satisfies StoryType`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "large"
  }
} satisfies StoryType`,...b.parameters?.docs?.source}}},x=[`Medium`,`Small`,`Large`]}))();export{b as Large,v as Medium,y as Small,x as __namedExportsOrder,_ as default};