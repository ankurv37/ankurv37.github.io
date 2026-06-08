"use strict";(self.webpackChunkmy_landing_page=self.webpackChunkmy_landing_page||[]).push([[446],{446:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var r=t(43),a=t(369),n=t(857),i=t(579);const l=(e,s)=>({tick:0,totalPublished:0,totalProcessed:0,retries:0,deadLetters:0,partitions:Array.from({length:e},((e,s)=>({id:s+1,backlog:0===s?2:0,processed:0,throughput:0}))),consumers:Array.from({length:s},((e,s)=>({id:s+1,lag:0,processed:0,state:"healthy"}))),events:[{id:"boot-1",message:"Simulation initialized with broker partitions online."},{id:"boot-2",message:"Consumers attached to partition assignments."}]}),c=(e,s,t)=>[{id:`${t}-${e.length}-${s.slice(0,12)}`,message:s},...e].slice(0,7),o=()=>{const[e,s]=(0,r.useState)(3),[t,o]=(0,r.useState)(2),[d,h]=(0,r.useState)(!0),[m,u]=(0,r.useState)(!1),[x,g]=(0,r.useState)(!0),[p,j]=(0,r.useState)(!1),[b,v]=(0,r.useState)(!0),[k,N]=(0,r.useState)((()=>l(3,2)));(0,r.useEffect)((()=>{N(l(e,t))}),[e,t]),(0,r.useEffect)((()=>{if(!d)return;const e=window.setInterval((()=>{N((e=>((e,s)=>{const t={...e,tick:e.tick+1,partitions:e.partitions.map((e=>({...e,throughput:0}))),consumers:e.consumers.map((e=>({...e}))),events:[...e.events]},r=2+Math.floor(3*Math.random());for(let a=0;a<r;a+=1){const e=s.hotPartition&&Math.random()<.68?0:Math.floor(Math.random()*t.partitions.length);t.partitions[e].backlog+=1,t.totalPublished+=1}return t.events=c(t.events,`${r} events published into ${t.partitions.length} partitions.`,t.tick),t.consumers.forEach(((e,r)=>{const a=t.partitions.filter(((e,s)=>s%t.consumers.length===r)),n=s.slowConsumer&&r===t.consumers.length-1?1:2;for(let l=0;l<n;l+=1){const r=a.filter((e=>e.backlog>0)).sort(((e,s)=>s.backlog-e.backlog))[0];if(!r)break;r.backlog-=1,r.throughput+=1,Math.random()<(s.retryEnabled?.16:.08)?s.deadLetterEnabled&&Math.random()<.35?(t.deadLetters+=1,t.events=c(t.events,`Partition ${r.id} routed an exhausted event to the dead-letter queue.`,t.tick)):s.retryEnabled&&(r.backlog+=1,t.retries+=1):(e.processed+=1,r.processed+=1,t.totalProcessed+=1)}const i=a.reduce(((e,s)=>e+s.backlog),0);e.lag=i,e.state=s.slowConsumer&&r===t.consumers.length-1?"throttled":i>8?"lagging":"healthy"})),t})(e,{hotPartition:m,retryEnabled:x,slowConsumer:p,deadLetterEnabled:b})))}),900);return()=>{window.clearInterval(e)}}),[d,m,x,p,b]);const y=k.partitions.reduce(((e,s)=>e+s.backlog),0),f=Math.max(...k.partitions.map((e=>e.backlog)),0)-Math.min(...k.partitions.map((e=>e.backlog)),0);return(0,i.jsxs)("div",{className:"event-mesh-lab",children:[(0,i.jsx)(n.A,{title:"Event Mesh Lab",description:"Interactive eventing simulator for partitions, retries, consumer lag, and dead-letter flow.",tech:["Systems Design","Event-Driven Architecture","React"]}),(0,i.jsxs)("section",{className:"mesh-header-card",children:[(0,i.jsxs)("div",{className:"mesh-header-copy",children:[(0,i.jsx)("span",{className:"mesh-eyebrow",children:"Flagship demo"}),(0,i.jsx)("h2",{children:"Play with the knobs that actually shape event-driven systems."}),(0,i.jsx)("p",{children:"This lab is intentionally opinionated: it focuses on partition skew, retry behavior, and consumer lag because those are the issues that usually matter more than architecture diagrams do."})]}),(0,i.jsxs)("div",{className:"mesh-metric-grid",children:[(0,i.jsxs)("div",{className:"mesh-metric-card",children:[(0,i.jsx)("span",{children:"Published"}),(0,i.jsx)("strong",{children:k.totalPublished})]}),(0,i.jsxs)("div",{className:"mesh-metric-card",children:[(0,i.jsx)("span",{children:"Processed"}),(0,i.jsx)("strong",{children:k.totalProcessed})]}),(0,i.jsxs)("div",{className:"mesh-metric-card",children:[(0,i.jsx)("span",{children:"Backlog"}),(0,i.jsx)("strong",{children:y})]}),(0,i.jsxs)("div",{className:"mesh-metric-card",children:[(0,i.jsx)("span",{children:"Skew"}),(0,i.jsx)("strong",{children:f})]})]})]}),(0,i.jsxs)("section",{className:"mesh-control-panel",children:[(0,i.jsxs)("div",{className:"mesh-control-group",children:[(0,i.jsx)("label",{htmlFor:"partitionCount",children:"Partitions"}),(0,i.jsx)("input",{id:"partitionCount",type:"range",min:"2",max:"6",value:e,onChange:e=>s(Number(e.target.value))}),(0,i.jsx)("span",{children:e})]}),(0,i.jsxs)("div",{className:"mesh-control-group",children:[(0,i.jsx)("label",{htmlFor:"consumerCount",children:"Consumers"}),(0,i.jsx)("input",{id:"consumerCount",type:"range",min:"1",max:"4",value:t,onChange:e=>o(Number(e.target.value))}),(0,i.jsx)("span",{children:t})]}),(0,i.jsxs)("button",{type:"button",className:"mesh-action-button",onClick:()=>h((e=>!e)),children:[d?(0,i.jsx)(a.kwt,{}):(0,i.jsx)(a.gSK,{}),d?"Pause":"Resume"]}),(0,i.jsxs)("button",{type:"button",className:"mesh-action-button secondary",onClick:()=>N(l(e,t)),children:[(0,i.jsx)(a.Swo,{}),"Reset"]})]}),(0,i.jsxs)("section",{className:"mesh-toggle-grid",children:[(0,i.jsxs)("button",{type:"button",className:"mesh-toggle "+(m?"active":""),onClick:()=>u((e=>!e)),children:[(0,i.jsx)(a.YsJ,{}),"Hot partition"]}),(0,i.jsxs)("button",{type:"button",className:"mesh-toggle "+(x?"active":""),onClick:()=>g((e=>!e)),children:[(0,i.jsx)(a.lHQ,{}),"Retries"]}),(0,i.jsxs)("button",{type:"button",className:"mesh-toggle "+(p?"active":""),onClick:()=>j((e=>!e)),children:[(0,i.jsx)(a.vwk,{}),"Slow consumer"]}),(0,i.jsxs)("button",{type:"button",className:"mesh-toggle "+(b?"active":""),onClick:()=>v((e=>!e)),children:[(0,i.jsx)(a.qnm,{}),"Dead-letter queue"]})]}),(0,i.jsxs)("section",{className:"mesh-system-grid",children:[(0,i.jsxs)("article",{className:"mesh-column",children:[(0,i.jsxs)("div",{className:"mesh-column-header",children:[(0,i.jsx)(a.ATg,{}),(0,i.jsx)("h3",{children:"Ingress"})]}),(0,i.jsxs)("div",{className:"mesh-ingress-card",children:[(0,i.jsx)("strong",{children:"Producer stream"}),(0,i.jsx)("p",{children:"Each tick publishes a small batch of events. Hot partition mode intentionally pushes too much load to one lane to make skew visible."})]})]}),(0,i.jsxs)("article",{className:"mesh-column",children:[(0,i.jsxs)("div",{className:"mesh-column-header",children:[(0,i.jsx)(a.YsJ,{}),(0,i.jsx)("h3",{children:"Partitions"})]}),(0,i.jsx)("div",{className:"mesh-stack",children:k.partitions.map((e=>(0,i.jsxs)("div",{className:"partition-card",children:[(0,i.jsxs)("div",{className:"partition-header",children:[(0,i.jsxs)("strong",{children:["Partition ",e.id]}),(0,i.jsxs)("span",{children:[e.backlog," queued"]})]}),(0,i.jsx)("div",{className:"partition-bar",children:(0,i.jsx)("div",{className:"partition-bar-fill",style:{width:`${Math.min(11*e.backlog,100)}%`}})}),(0,i.jsxs)("small",{children:[e.processed," delivered so far"]})]},e.id)))})]}),(0,i.jsxs)("article",{className:"mesh-column",children:[(0,i.jsxs)("div",{className:"mesh-column-header",children:[(0,i.jsx)(a.vwk,{}),(0,i.jsx)("h3",{children:"Consumers"})]}),(0,i.jsx)("div",{className:"mesh-stack",children:k.consumers.map((e=>(0,i.jsxs)("div",{className:`consumer-card consumer-${e.state}`,children:[(0,i.jsxs)("div",{className:"partition-header",children:[(0,i.jsxs)("strong",{children:["Consumer ",e.id]}),(0,i.jsx)("span",{children:e.state})]}),(0,i.jsxs)("p",{children:[e.processed," processed"]}),(0,i.jsxs)("small",{children:[e.lag," events of lag across assigned partitions"]})]},e.id)))})]}),(0,i.jsxs)("article",{className:"mesh-column",children:[(0,i.jsxs)("div",{className:"mesh-column-header",children:[(0,i.jsx)(a.qnm,{}),(0,i.jsx)("h3",{children:"Outcome"})]}),(0,i.jsxs)("div",{className:"mesh-outcome-card",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"Retries"}),(0,i.jsx)("strong",{children:k.retries})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"Dead letters"}),(0,i.jsx)("strong",{children:k.deadLetters})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:"Tick"}),(0,i.jsx)("strong",{children:k.tick})]})]})]})]}),(0,i.jsxs)("section",{className:"mesh-log-card",children:[(0,i.jsxs)("div",{className:"mesh-column-header",children:[(0,i.jsx)(a.ATg,{}),(0,i.jsx)("h3",{children:"Recent event log"})]}),(0,i.jsx)("ul",{className:"mesh-log-list",children:k.events.map((e=>(0,i.jsx)("li",{children:e.message},e.id)))})]})]})}},857:(e,s,t)=>{t.d(s,{A:()=>m});t(43);var r=t(475),a=t(464),n=t(369),i=t(579);const l=a.Ay.div`
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
`,o=a.Ay.div`
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
`,h=(0,a.Ay)(r.N_)`
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
`,m=e=>{let{title:s,description:t,tech:r=[]}=e;return(0,i.jsx)(l,{children:(0,i.jsxs)(c,{children:[(0,i.jsx)("h4",{children:s}),(0,i.jsx)("p",{children:t}),r.length>0&&(0,i.jsx)(o,{children:r.map((e=>(0,i.jsx)(d,{children:e},e)))}),(0,i.jsxs)(h,{to:"/launchpad",children:[(0,i.jsx)(n.QVr,{})," All demos"]})]})})}}}]);
//# sourceMappingURL=446.a77f964c.chunk.js.map