"use strict";(self.webpackChunkmy_landing_page=self.webpackChunkmy_landing_page||[]).push([[407],{407:(a,e,i)=>{i.r(e),i.d(e,{default:()=>d});var t=i(43),s=i(117),r=i(369),n=i(524);const c=["processCommits"];var l=i(857),o=i(579);const d=a=>{let{username:e="ankurv37"}=a;const{wasmReady:i,processCommits:d,error:m}=(()=>{const{ready:a,fns:e,error:i}=(0,n.m)("/main.wasm",c),s=(0,t.useMemo)((()=>a?e.processCommits:null),[a,e]);return{wasmReady:a,processCommits:s,error:i}})(),[h,u]=(0,t.useState)(null),[y,p]=(0,t.useState)(!1),[x,v]=(0,t.useState)(null);(0,t.useEffect)((()=>{if(!i||!d)return;(async()=>{p(!0);try{const a=await fetch(`https://api.github.com/users/${e}/events/public`);if(!a.ok)throw new Error(`GitHub API error: ${a.status}`);const i=(await a.json()).filter((a=>"PushEvent"===a.type&&a.payload&&a.payload.commits)).flatMap((a=>a.payload.commits.map((e=>a.created_at))));if(0===i.length)return u(null),void v({totalCommits:0,activeDays:0,avgPerDay:0});const t=d(i);u(t);const s=i.length,r=Object.keys(t).length,n=r>0?(s/r).toFixed(1):0;v({totalCommits:s,activeDays:r,avgPerDay:n})}catch(m){console.error("Failed to fetch GitHub data:",m),u(null),v(null)}finally{p(!1)}})()}),[i,d,e]);return m?(0,o.jsxs)(s.P.div,{className:"github-activity-container",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,o.jsxs)("div",{className:"activity-header",children:[(0,o.jsx)(r.hL4,{className:"github-icon"}),(0,o.jsx)("h3",{children:"GitHub Activity"})]}),(0,o.jsxs)("div",{className:"error-message",children:[(0,o.jsx)("p",{children:"\u26a0\ufe0f Error loading WASM module"}),(0,o.jsx)("p",{children:m}),(0,o.jsxs)("small",{children:["Make sure to run: ",(0,o.jsx)("code",{children:"npm run setup:wasm"})]})]})]}):y||!i?(0,o.jsxs)(s.P.div,{className:"github-activity-container",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,o.jsxs)("div",{className:"activity-header",children:[(0,o.jsx)(r.hL4,{className:"github-icon"}),(0,o.jsx)("h3",{children:"GitHub Activity"})]}),(0,o.jsx)("div",{className:"loading-message",children:y?"\ud83d\udcca Loading GitHub activity...":"\u2699\ufe0f Initializing WASM module..."})]}):h&&x?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.A,{title:"GitHub Pulse",description:"Real-time GitHub event stream processed via Go\u2192WebAssembly. Visualizes commit frequency across public repos.",tech:["Go","WebAssembly","GitHub API","Canvas"]}),(0,o.jsxs)(s.P.div,{className:"github-activity-container",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,o.jsxs)("div",{className:"activity-header",children:[(0,o.jsx)(r.hL4,{className:"github-icon"}),(0,o.jsx)("h3",{children:"GitHub Activity Dashboard"})]}),(0,o.jsxs)("div",{className:"stats-grid",children:[(0,o.jsxs)(s.P.div,{className:"stat-card",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.1},children:[(0,o.jsx)(r.FSj,{className:"stat-icon"}),(0,o.jsx)("div",{className:"stat-value",children:x.totalCommits}),(0,o.jsx)("div",{className:"stat-label",children:"Total Commits"})]}),(0,o.jsxs)(s.P.div,{className:"stat-card",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.2},children:[(0,o.jsx)(r.bfZ,{className:"stat-icon"}),(0,o.jsx)("div",{className:"stat-value",children:x.activeDays}),(0,o.jsx)("div",{className:"stat-label",children:"Active Days"})]}),(0,o.jsxs)(s.P.div,{className:"stat-card",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.3},children:[(0,o.jsx)(r.hL4,{className:"stat-icon"}),(0,o.jsx)("div",{className:"stat-value",children:x.avgPerDay}),(0,o.jsx)("div",{className:"stat-label",children:"Avg/Day"})]})]}),(0,o.jsx)(s.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:(()=>{if(!h)return null;const a=Object.keys(h).sort().slice(-7),e=Math.max(...a.map((a=>h[a])));return(0,o.jsxs)("div",{className:"activity-chart",children:[(0,o.jsx)("h4",{children:"Last 7 Days Activity"}),(0,o.jsx)("div",{className:"chart-bars",children:a.map(((a,i)=>{const t=h[a],r=e>0?t/e*100:0,n=new Date(a).toLocaleDateString("en-US",{weekday:"short"});return(0,o.jsxs)(s.P.div,{className:"chart-bar-container",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*i},children:[(0,o.jsx)("div",{className:"chart-bar",style:{height:`${r}%`},title:`${n}: ${t} commits`}),(0,o.jsx)("span",{className:"chart-label",children:n}),(0,o.jsx)("span",{className:"chart-count",children:t})]},a)}))})]})})()})]})]}):(0,o.jsxs)(s.P.div,{className:"github-activity-container",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,o.jsxs)("div",{className:"activity-header",children:[(0,o.jsx)(r.hL4,{className:"github-icon"}),(0,o.jsx)("h3",{children:"GitHub Activity"})]}),(0,o.jsxs)("div",{className:"no-data-message",children:[(0,o.jsx)("p",{children:"\ud83d\udced No recent commit activity found"}),(0,o.jsx)("small",{children:"This shows commits from recent push events in your public repositories."})]})]})}},524:(a,e,i)=>{i.d(e,{m:()=>s});var t=i(43);const s=(a,e)=>{const[i,s]=(0,t.useState)(!1),[r,n]=(0,t.useState)({}),[c,l]=(0,t.useState)(null),o=(0,t.useRef)(!1);return(0,t.useEffect)((()=>{if(o.current)return;o.current=!0;(async()=>{try{window.Go||await new Promise(((a,e)=>{const i=document.createElement("script");i.src="/wasm_exec.js",i.onload=a,i.onerror=()=>e(new Error("Failed to load wasm_exec.js")),document.head.appendChild(i)}));const i=new window.Go,t=await WebAssembly.instantiateStreaming(fetch(a),i.importObject);i.run(t.instance);const r=await function(a){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;return new Promise(((i,t)=>{const s=Date.now();requestAnimationFrame((function r(){a.every((a=>"function"===typeof window[a]))?i(a.reduce(((a,e)=>(a[e]=window[e],a)),{})):Date.now()-s>e?t(new Error(`Timed out waiting for WASM globals: ${a.join(", ")}`)):requestAnimationFrame(r)}))}))}(e);n(r),s(!0)}catch(i){console.error(`WASM loading error (${a}):`,i),l(`WASM initialization failed: ${i.message}`)}})()}),[a,e]),{ready:i,fns:r,error:c}}},857:(a,e,i)=>{i.d(e,{A:()=>h});i(43);var t=i(475),s=i(464),r=i(369),n=i(579);const c=s.Ay.div`
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
`,l=s.Ay.div`
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
`,o=s.Ay.div`
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`,d=s.Ay.span`
  font-size: 0.65rem;
  padding: 0.15rem 0.5rem;
  border-radius: 20px;
  border: 1px solid rgba(196, 181, 253, 0.2);
  background: rgba(196, 181, 253, 0.06);
  color: rgba(196, 181, 253, 0.7);
`,m=(0,s.Ay)(t.N_)`
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
`,h=a=>{let{title:e,description:i,tech:t=[]}=a;return(0,n.jsxs)(c,{children:[(0,n.jsx)(r.uoG,{className:"icon"}),(0,n.jsxs)(l,{children:[(0,n.jsx)("h4",{children:e}),(0,n.jsx)("p",{children:i}),t.length>0&&(0,n.jsx)(o,{children:t.map((a=>(0,n.jsx)(d,{children:a},a)))}),(0,n.jsxs)(m,{to:"/launchpad",children:[(0,n.jsx)(r.QVr,{})," All Missions"]})]})]})}}}]);
//# sourceMappingURL=407.1a8d199b.chunk.js.map