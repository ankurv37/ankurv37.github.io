"use strict";(self.webpackChunkmy_landing_page=self.webpackChunkmy_landing_page||[]).push([[684],{684:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var r=i(43),n=i(857),s=i(579);const a=e=>{let{type:t,x:i,y:r,active:n}=e;const a="#ccc",l="#4caf50";return(0,s.jsxs)("g",{children:[(0,s.jsx)("rect",{x:i,y:r,width:60,height:40,rx:10,fill:n?l:a,stroke:"#333"}),(0,s.jsx)("text",{x:i+30,y:r+25,textAnchor:"middle",fontSize:"18",fill:"#222",children:t})]})},l=()=>{const[e,t]=(0,r.useState)(1),[i,l]=(0,r.useState)(1),[o,d]=(0,r.useState)(null),[c,m]=(0,r.useState)(0),[x,h]=(0,r.useState)("add");(0,r.useEffect)((()=>{const e=new window.Go;WebAssembly.instantiateStreaming(fetch("/arithmetic.wasm"),e.importObject).then((t=>{e.run(t.instance)}))}),[]),(0,r.useEffect)((()=>{let t;if(c<3)t=setTimeout((()=>m(c+1)),1e3);else if(window.wasmAdd&&window.wasmSub){const t="add"===x?window.wasmAdd(e,i):window.wasmSub(e,i);d(t)}return()=>clearTimeout(t)}),[c,e,i,x]);const g=[{type:"NAND",x:20,y:40,active:c>=1},{type:"XOR",x:120,y:40,active:c>=2},{type:"add"===x?"AND":"Borrow",x:220,y:40,active:c>=3}];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{title:"Logic Gates",description:"Interactive SVG visualizer for binary arithmetic (ADD/SUB) powered by a Go\u2192WASM backend with step-by-step gate animation.",tech:["Go","WebAssembly","SVG","Digital Logic"]}),(0,s.jsxs)("div",{style:{textAlign:"center"},children:[(0,s.jsx)("h2",{children:"Logic Gate Visualizer"}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{children:["A:",(0,s.jsx)("input",{type:"number",min:"0",max:"1",value:e,onChange:e=>{t(Number(e.target.value)),m(0),d(null)}})]}),(0,s.jsxs)("label",{style:{marginLeft:20},children:["B:",(0,s.jsx)("input",{type:"number",min:"0",max:"1",value:i,onChange:e=>{l(Number(e.target.value)),m(0),d(null)}})]}),(0,s.jsxs)("select",{value:x,onChange:e=>{h(e.target.value),m(0),d(null)},style:{marginLeft:20},children:[(0,s.jsx)("option",{value:"add",children:"Addition"}),(0,s.jsx)("option",{value:"sub",children:"Subtraction"})]})]}),(0,s.jsxs)("svg",{width:320,height:120,style:{marginTop:30},children:[g.map(((e,t)=>(0,s.jsx)(a,{...e},t))),(0,s.jsx)("line",{x1:80,y1:60,x2:120,y2:60,stroke:"#333",strokeWidth:2}),(0,s.jsx)("line",{x1:180,y1:60,x2:220,y2:60,stroke:"#333",strokeWidth:2})]}),null!==o&&(0,s.jsxs)("div",{style:{marginTop:20},children:[(0,s.jsx)("strong",{children:"Result: "})," ",o]}),(0,s.jsxs)("div",{style:{marginTop:10,fontSize:14,color:"#666"},children:["Step: ",c<3?c+1:"Done"]})]})]})}},857:(e,t,i)=>{i.d(t,{A:()=>x});i(43);var r=i(475),n=i(464),s=i(369),a=i(579);const l=n.Ay.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem 1.3rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,o=n.Ay.div`
  flex: 1;

  h4 {
    margin: 0 0 0.3rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: #dce1ed;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1.5;
    color: rgba(184, 192, 212, 0.6);
  }
`,d=n.Ay.div`
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`,c=n.Ay.span`
  font-size: 0.65rem;
  padding: 0.15rem 0.5rem;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  color: rgba(184, 192, 212, 0.6);
`,m=(0,n.Ay)(r.N_)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: rgba(160, 175, 210, 0.55);
  text-decoration: none;
  margin-top: 0.5rem;
  transition: color 0.15s ease;

  &:hover {
    color: #b8c0d4;
  }
`,x=e=>{let{title:t,description:i,tech:r=[]}=e;return(0,a.jsx)(l,{children:(0,a.jsxs)(o,{children:[(0,a.jsx)("h4",{children:t}),(0,a.jsx)("p",{children:i}),r.length>0&&(0,a.jsx)(d,{children:r.map((e=>(0,a.jsx)(c,{children:e},e)))}),(0,a.jsxs)(m,{to:"/launchpad",children:[(0,a.jsx)(s.QVr,{})," All demos"]})]})})}}}]);
//# sourceMappingURL=684.0e1fb631.chunk.js.map