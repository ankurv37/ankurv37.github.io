"use strict";(self.webpackChunkmy_landing_page=self.webpackChunkmy_landing_page||[]).push([[251],{251:(e,s,a)=>{a.r(s),a.d(s,{default:()=>d});var i=a(43),t=a(117),n=a(369),r=a(524),c=a(857),l=a(579);const o=["initializeCluster","toggleFault","simulateCluster"],d=()=>{const{ready:e,fns:s,error:a}=(0,r.m)("/chaos.wasm",o),[d,m]=(0,i.useState)(null),[h,u]=(0,i.useState)(!1),[x,p]=(0,i.useState)({networkPartition:!1,cpuSpike:!1,nodeCrash:!1,memoryLeak:!1}),j=(0,i.useMemo)((()=>s.initializeCluster),[s]),y=(0,i.useMemo)((()=>s.simulateCluster),[s]),N=(0,i.useMemo)((()=>s.toggleFault),[s]);(0,i.useEffect)((()=>{if(e&&j&&!d){const e=j(6);m(JSON.parse(e))}}),[e,j,d]);const g=(0,i.useRef)(h);g.current=h,(0,i.useEffect)((()=>{let s;const a=()=>{g.current&&e&&y&&(s=setInterval((()=>{const e=y();m(JSON.parse(e))}),1e3))},i=()=>clearInterval(s),t=()=>{document.hidden?i():a()};return a(),document.addEventListener("visibilitychange",t),()=>{i(),document.removeEventListener("visibilitychange",t)}}),[h,e,y]);const v=(0,i.useCallback)((s=>{if(!e||!N)return;const a=!x[s];p((e=>({...e,[s]:a})));const i=N(s,a);m(JSON.parse(i))}),[x,e,N]),f=(0,i.useCallback)((()=>{if(!e||!N||!j)return;Object.keys(x).forEach((e=>{x[e]&&N(e,!1)})),p({networkPartition:!1,cpuSpike:!1,nodeCrash:!1,memoryLeak:!1});const s=j(6);m(JSON.parse(s))}),[x,e,N,j]),b=e=>{switch(e.status){case"healthy":return"#00ff95";case"degraded":return"#ffa500";case"crashed":return"#ff4444";case"partitioned":return"#8a2be2";default:return"#666"}},w=e=>{switch(e.status){case"crashed":return(0,l.jsx)(n.BS8,{});case"partitioned":return(0,l.jsx)(n.nVN,{});default:return(0,l.jsx)(n.vwk,{})}};return a?(0,l.jsxs)(t.P.div,{className:"chaos-demo-container",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,l.jsxs)("div",{className:"chaos-header",children:[(0,l.jsx)(n.BS8,{className:"chaos-icon"}),(0,l.jsx)("h3",{children:"Chaos Engineering Demo"})]}),(0,l.jsxs)("div",{className:"error-message",children:[(0,l.jsx)("p",{children:"\u26a0\ufe0f Error loading Chaos WASM module"}),(0,l.jsx)("p",{children:a}),(0,l.jsx)("small",{children:"Make sure chaos.wasm is built and available"})]})]}):e&&d?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.A,{title:"Chaos Engine",description:"WASM-powered chaos engineering simulator. Injects faults \u2014 network partitions, CPU spikes, node crashes, memory leaks \u2014 into a virtual cluster.",tech:["Go","WebAssembly","Chaos Engineering"]}),(0,l.jsxs)(t.P.div,{className:"chaos-demo-container",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,l.jsxs)("div",{className:"chaos-header",children:[(0,l.jsx)(n.vwk,{className:"chaos-icon"}),(0,l.jsx)("h3",{children:"Distributed Systems Chaos Engineering"}),(0,l.jsx)("p",{className:"chaos-subtitle",children:"Interactive fault injection simulation"})]}),(0,l.jsxs)(t.P.div,{className:"control-panel",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:[(0,l.jsxs)("div",{className:"simulation-controls",children:[(0,l.jsxs)("button",{className:"control-btn "+(h?"active":""),onClick:()=>u(!h),children:[h?(0,l.jsx)(n.kwt,{}):(0,l.jsx)(n.gSK,{}),h?"Pause":"Start"," Simulation"]}),(0,l.jsxs)("button",{className:"control-btn reset",onClick:f,children:[(0,l.jsx)(n.Swo,{})," Reset Cluster"]})]}),(0,l.jsxs)("div",{className:"fault-toggles",children:[(0,l.jsxs)("button",{className:"fault-btn "+(x.networkPartition?"active":""),onClick:()=>v("networkPartition"),children:[(0,l.jsx)(n.nVN,{})," Network Partition"]}),(0,l.jsxs)("button",{className:"fault-btn "+(x.cpuSpike?"active":""),onClick:()=>v("cpuSpike"),children:[(0,l.jsx)(n.UIU,{})," CPU Spike"]}),(0,l.jsxs)("button",{className:"fault-btn "+(x.nodeCrash?"active":""),onClick:()=>v("nodeCrash"),children:[(0,l.jsx)(n.BS8,{})," Node Crash"]}),(0,l.jsxs)("button",{className:"fault-btn "+(x.memoryLeak?"active":""),onClick:()=>v("memoryLeak"),children:[(0,l.jsx)(n.FZ6,{})," Memory Leak"]})]})]}),(0,l.jsx)(t.P.div,{className:"cluster-overview",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:(0,l.jsxs)("div",{className:"cluster-stats",children:[(0,l.jsxs)("div",{className:"stat-item",children:[(0,l.jsx)("span",{className:"stat-label",children:"Total Nodes:"}),(0,l.jsx)("span",{className:"stat-value",children:d.totalNodes})]}),(0,l.jsxs)("div",{className:"stat-item",children:[(0,l.jsx)("span",{className:"stat-label",children:"Healthy:"}),(0,l.jsx)("span",{className:"stat-value healthy",children:d.healthyNodes})]}),(0,l.jsxs)("div",{className:"stat-item",children:[(0,l.jsx)("span",{className:"stat-label",children:"Unhealthy:"}),(0,l.jsx)("span",{className:"stat-value unhealthy",children:d.totalNodes-d.healthyNodes})]})]})}),(0,l.jsx)(t.P.div,{className:"nodes-grid",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:d.nodes.map(((e,s)=>(0,l.jsxs)(t.P.div,{className:`node-card ${e.status}`,style:{borderColor:b(e)},initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.1*s},whileHover:{scale:1.05},children:[(0,l.jsxs)("div",{className:"node-header",children:[(0,l.jsx)("div",{className:"node-icon",style:{color:b(e)},children:w(e)}),(0,l.jsxs)("div",{className:"node-info",children:[(0,l.jsx)("div",{className:"node-id",children:e.id}),(0,l.jsx)("div",{className:`node-status ${e.status}`,children:e.status})]})]}),(0,l.jsxs)("div",{className:"node-metrics",children:[(0,l.jsxs)("div",{className:"metric",children:[(0,l.jsx)(n.UIU,{className:"metric-icon"}),(0,l.jsx)("div",{className:"metric-bar",children:(0,l.jsx)("div",{className:"metric-fill cpu",style:{width:`${e.cpuUsage}%`}})}),(0,l.jsxs)("span",{className:"metric-value",children:[e.cpuUsage.toFixed(1),"%"]})]}),(0,l.jsxs)("div",{className:"metric",children:[(0,l.jsx)(n.FZ6,{className:"metric-icon"}),(0,l.jsx)("div",{className:"metric-bar",children:(0,l.jsx)("div",{className:"metric-fill memory",style:{width:`${e.memory}%`}})}),(0,l.jsxs)("span",{className:"metric-value",children:[e.memory.toFixed(1),"%"]})]}),(0,l.jsxs)("div",{className:"metric",children:[(0,l.jsx)(n.nVN,{className:"metric-icon"}),(0,l.jsx)("span",{className:"metric-value",children:e.network?`${e.requestRate} RPS`:"Disconnected"})]})]})]},e.id)))}),d.partitions&&d.partitions.length>0&&(0,l.jsxs)(t.P.div,{className:"partitions-info",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.5},children:[(0,l.jsx)("h4",{children:"Network Partitions:"}),d.partitions.map(((e,s)=>(0,l.jsxs)("div",{className:"partition",children:[(0,l.jsxs)("strong",{children:["Partition ",s+1,":"]})," ",e.join(", ")]},s)))]})]})]}):(0,l.jsxs)(t.P.div,{className:"chaos-demo-container",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,l.jsxs)("div",{className:"chaos-header",children:[(0,l.jsx)(n.vwk,{className:"chaos-icon"}),(0,l.jsx)("h3",{children:"Chaos Engineering Demo"})]}),(0,l.jsx)("div",{className:"loading-message",children:"\u2699\ufe0f Initializing distributed system simulation..."})]})}},524:(e,s,a)=>{a.d(s,{m:()=>t});var i=a(43);const t=(e,s)=>{const[a,t]=(0,i.useState)(!1),[n,r]=(0,i.useState)({}),[c,l]=(0,i.useState)(null),o=(0,i.useRef)(!1);return(0,i.useEffect)((()=>{if(o.current)return;o.current=!0;(async()=>{try{window.Go||await new Promise(((e,s)=>{const a=document.createElement("script");a.src="/wasm_exec.js",a.onload=e,a.onerror=()=>s(new Error("Failed to load wasm_exec.js")),document.head.appendChild(a)}));const a=new window.Go,i=await WebAssembly.instantiateStreaming(fetch(e),a.importObject);a.run(i.instance);const n=await function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;return new Promise(((a,i)=>{const t=Date.now();requestAnimationFrame((function n(){e.every((e=>"function"===typeof window[e]))?a(e.reduce(((e,s)=>(e[s]=window[s],e)),{})):Date.now()-t>s?i(new Error(`Timed out waiting for WASM globals: ${e.join(", ")}`)):requestAnimationFrame(n)}))}))}(s);r(n),t(!0)}catch(a){console.error(`WASM loading error (${e}):`,a),l(`WASM initialization failed: ${a.message}`)}})()}),[e,s]),{ready:a,fns:n,error:c}}},857:(e,s,a)=>{a.d(s,{A:()=>h});a(43);var i=a(475),t=a(464),n=a(369),r=a(579);const c=t.Ay.div`
  background: rgba(124, 155, 255, 0.04);
  border: 1px solid rgba(124, 155, 255, 0.12);
  border-radius: 12px;
  padding: 1rem 1.4rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .icon {
    color: #fbbf24;
    font-size: 1.1rem;
    margin-top: 0.15rem;
    flex-shrink: 0;
  }
`,l=t.Ay.div`
  flex: 1;

  h4 {
    margin: 0 0 0.3rem;
    font-size: 0.95rem;
    background: linear-gradient(135deg, #7c9bff, #c4b5fd);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1.5;
    color: rgba(205, 214, 244, 0.65);
  }
`,o=t.Ay.div`
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`,d=t.Ay.span`
  font-size: 0.65rem;
  padding: 0.15rem 0.5rem;
  border-radius: 20px;
  border: 1px solid rgba(196, 181, 253, 0.2);
  background: rgba(196, 181, 253, 0.06);
  color: rgba(196, 181, 253, 0.7);
`,m=(0,t.Ay)(i.N_)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: rgba(124, 155, 255, 0.6);
  text-decoration: none;
  margin-top: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: #7c9bff;
  }
`,h=e=>{let{title:s,description:a,tech:i=[]}=e;return(0,r.jsxs)(c,{children:[(0,r.jsx)(n.uoG,{className:"icon"}),(0,r.jsxs)(l,{children:[(0,r.jsx)("h4",{children:s}),(0,r.jsx)("p",{children:a}),i.length>0&&(0,r.jsx)(o,{children:i.map((e=>(0,r.jsx)(d,{children:e},e)))}),(0,r.jsxs)(m,{to:"/launchpad",children:[(0,r.jsx)(n.QVr,{})," All Missions"]})]})]})}}}]);
//# sourceMappingURL=251.2d936aad.chunk.js.map