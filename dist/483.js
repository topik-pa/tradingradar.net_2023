"use strict";(self.webpackChunktradingradar_net=self.webpackChunktradingradar_net||[]).push([[483],{399:(e,t,n)=>{n.d(t,{Z:()=>a});const a=async function(e="",t={},n="GET",a={}){const c={},r={method:n,mode:"cors",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/json",...a},redirect:"follow",referrerPolicy:"no-referrer"};return["post","put","patch","delete"].includes(n.toLowerCase())&&(r.body=JSON.stringify(t)),await fetch(e,r).then((e=>(c.status=e.status,e.json()))).then((e=>{c.body=e})).catch((e=>{console.error(e)})),c}},483:(e,t,n)=>{n.r(t),n.d(t,{target:()=>d});var a=n(399);let c,r;function o(e){c.classList.remove(...r),c.classList.add(e)}const d={init:()=>{c=document.getElementById("target-price"),r=["idle","loading","success","error"],o(r[1]),async function(){try{const e=await(0,a.Z)("/api/stocks/lastJudgment/?order=desc");o(r[2]),function(e,t){const n=c.querySelector(t).querySelector("tbody"),a=c.querySelector(t+" ~ p.detection em");for(let t=0;t<e.length;t++){const c=e[t];0===t&&(a.innerText=new Date(c.lastJudgment.now).toLocaleString());const r=document.createElement("tr"),o=document.createElement("td"),d=document.createElement("a");d.innerText=c.name,d.title=c.name,d.href=`/analisi/${encodeURI(c.name?.toLowerCase().replace(/ /g,"-"))}?isin=${c.isin}`,o.appendChild(d),r.appendChild(o);const s=document.createElement("td");s.innerText=c.lastJudgment?.value[0],r.appendChild(s);const l=document.createElement("td");l.innerText=c.lastJudgment?.value[1],r.appendChild(l);const i=document.createElement("td");i.innerText=c.lastJudgment?.value[2],r.appendChild(i);const u=document.createElement("td");u.innerText=c.lastJudgment?.value[3],r.appendChild(u),n.appendChild(r)}}(e.body,"table")}catch(e){console.error(e),o(r[3])}}()}}}}]);