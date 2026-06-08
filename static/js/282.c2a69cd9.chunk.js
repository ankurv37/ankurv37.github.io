"use strict";(self.webpackChunkmy_landing_page=self.webpackChunkmy_landing_page||[]).push([[282],{282:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var r=i(43),a=i(857),n=i(579);const s=e=>{let{type:t,x:i,y:r,active:a}=e;const s={XOR:"#e573b7",AND:"#64b5f6",OR:"#b39ddb",default:"#ccc",active:"#4caf50"};return(0,n.jsxs)("g",{children:[(0,n.jsx)("rect",{x:i,y:r,width:60,height:40,rx:10,fill:a?s.active:s[t]||s.default,stroke:"#333"}),(0,n.jsx)("text",{x:i+30,y:r+25,textAnchor:"middle",fontSize:"18",fill:"#222",children:t})]})},l=()=>{const[e,t]=(0,r.useState)(0),[i,l]=(0,r.useState)(0),[c,x]=(0,r.useState)(0),[d,o]=(0,r.useState)(0),[y,m]=(0,r.useState)(0),[g,f]=(0,r.useState)(0);(0,r.useEffect)((()=>{if(!window.Go)return;const e=new window.Go;WebAssembly.instantiateStreaming(fetch("/arithmetic.wasm"),e.importObject).then((t=>{e.run(t.instance)}))}),[]),(0,r.useEffect)((()=>{let t;if(g<5)t=setTimeout((()=>f(g+1)),900);else if(window.wasmAdd){const t=window.wasmAdd(e,i)%2;o((t^c)%2),m((e&i|c&t)%2)}else{const t=e^i;o(t^c),m(e&i|c&t)}return()=>clearTimeout(t)}),[g,e,i,c]);const h=[{type:"XOR",x:100,y:40,active:g>=1},{type:"XOR",x:250,y:40,active:g>=2},{type:"AND",x:100,y:120,active:g>=3},{type:"AND",x:250,y:120,active:g>=4},{type:"OR",x:400,y:120,active:g>=5}],u=[{x1:40,y1:60,x2:100,y2:60,active:g>=1},{x1:40,y1:100,x2:100,y2:60,active:g>=1},{x1:160,y1:60,x2:250,y2:60,active:g>=2},{x1:40,y1:140,x2:250,y2:60,active:g>=2},{x1:40,y1:60,x2:100,y2:140,active:g>=3},{x1:40,y1:100,x2:100,y2:140,active:g>=3},{x1:40,y1:140,x2:250,y2:140,active:g>=4},{x1:160,y1:60,x2:250,y2:140,active:g>=4},{x1:160,y1:140,x2:400,y2:140,active:g>=5},{x1:310,y1:140,x2:400,y2:140,active:g>=5},{x1:310,y1:60,x2:480,y2:60,active:g>=5},{x1:460,y1:140,x2:480,y2:140,active:g>=5}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"Full Adder",description:"Animated full-adder circuit \u2014 XOR, AND, OR gates \u2014 driven by WASM. Visualizes carry propagation through each logic stage.",tech:["Go","WebAssembly","SVG","Circuit Design"]}),(0,n.jsxs)("div",{style:{textAlign:"center"},children:[(0,n.jsx)("h2",{children:"Full Adder Circuit Visualizer"}),(0,n.jsxs)("div",{style:{marginBottom:20},children:[(0,n.jsxs)("label",{children:["A:",(0,n.jsx)("input",{type:"number",min:"0",max:"1",value:e,onChange:e=>{t(Number(e.target.value)),f(0)}})]}),(0,n.jsxs)("label",{style:{marginLeft:20},children:["B:",(0,n.jsx)("input",{type:"number",min:"0",max:"1",value:i,onChange:e=>{l(Number(e.target.value)),f(0)}})]}),(0,n.jsxs)("label",{style:{marginLeft:20},children:["Cin:",(0,n.jsx)("input",{type:"number",min:"0",max:"1",value:c,onChange:e=>{x(Number(e.target.value)),f(0)}})]})]}),(0,n.jsxs)("svg",{width:520,height:200,style:{background:"#222",borderRadius:10},children:[(0,n.jsx)("circle",{cx:40,cy:60,r:10,fill:"#e53935"}),(0,n.jsx)("circle",{cx:40,cy:100,r:10,fill:"#e53935"}),(0,n.jsx)("circle",{cx:40,cy:140,r:10,fill:"#e53935"}),h.map(((e,t)=>(0,n.jsx)(s,{...e},t))),u.map(((e,t)=>(0,n.jsx)("line",{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stroke:e.active?"#ff1744":"#555",strokeWidth:3},t))),(0,n.jsx)("circle",{cx:480,cy:60,r:10,fill:"#e53935"}),(0,n.jsx)("text",{x:500,y:65,fill:"#fff",fontSize:16,children:"SUM"}),(0,n.jsx)("circle",{cx:480,cy:140,r:10,fill:"#e53935"}),(0,n.jsx)("text",{x:500,y:145,fill:"#fff",fontSize:16,children:"CARRY"})]}),(0,n.jsxs)("div",{style:{marginTop:20,color:"#fff",fontSize:18},children:[(0,n.jsx)("strong",{children:"SUM:"})," ",d," \xa0 ",(0,n.jsx)("strong",{children:"CARRY:"})," ",y]}),(0,n.jsxs)("div",{style:{marginTop:10,fontSize:14,color:"#aaa"},children:["Step: ",g<5?g+1:"Done"]})]})]})}},857:(e,t,i)=>{i.d(t,{A:()=>y});i(43);var r=i(475),a=i(464),n=i(369),s=i(579);const l=a.Ay.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 1rem 1.3rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,c=a.Ay.div`
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
`,x=a.Ay.div`
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`,d=a.Ay.span`
  font-size: 0.65rem;
  padding: 0.15rem 0.5rem;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  color: rgba(184, 192, 212, 0.6);
`,o=(0,a.Ay)(r.N_)`
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
`,y=e=>{let{title:t,description:i,tech:r=[]}=e;return(0,s.jsx)(l,{children:(0,s.jsxs)(c,{children:[(0,s.jsx)("h4",{children:t}),(0,s.jsx)("p",{children:i}),r.length>0&&(0,s.jsx)(x,{children:r.map((e=>(0,s.jsx)(d,{children:e},e)))}),(0,s.jsxs)(o,{to:"/launchpad",children:[(0,s.jsx)(n.QVr,{})," All demos"]})]})})}}}]);
//# sourceMappingURL=282.c2a69cd9.chunk.js.map