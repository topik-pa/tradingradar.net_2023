"use strict";(self.webpackChunktradingradar_net=self.webpackChunktradingradar_net||[]).push([[494],{399:(e,t,n)=>{n.d(t,{Z:()=>c});const c=async function(e="",t={},n="GET",c={}){const a={},r={method:n,mode:"cors",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/json",...c},redirect:"follow",referrerPolicy:"no-referrer"};return["post","put","patch","delete"].includes(n.toLowerCase())&&(r.body=JSON.stringify(t)),await fetch(e,r).then((e=>(a.status=e.status,e.json()))).then((e=>{a.body=e})).catch((e=>{console.error(e)})),a}},494:(e,t,n)=>{n.r(t),n.d(t,{upInversionView:()=>d});var c=n(399);let a,r;function o(e){a.classList.remove(...r),a.classList.add(e)}const d={init:()=>{a=document.getElementById("upinversion"),r=["idle","loading","success","error"],o(r[1]),async function(){try{const e=await(0,c.Z)("/api/custom");o(r[2]),function(e,t){const n=a.querySelector(t).querySelector("tbody"),c=a.querySelector(t+" ~ p.detection em");for(let t=0;t<e.length;t++){const a=e[t];0===t&&(c.innerText=new Date(a.lastPrice.now).toLocaleString());const r=document.createElement("tr"),o=document.createElement("td"),d=document.createElement("a");d.innerText=a.name,d.title=a.name,d.href=`/analisi/${encodeURI(a.name?.toLowerCase().replace(/ /g,"-"))}?isin=${a.isin}`,o.appendChild(d),r.appendChild(o);const s=document.createElement("td");s.classList.add("green","em"),s.innerText=a.lastPrice?.value,r.appendChild(s);const i=document.createElement("td");i.innerText=a.mm20days?.value,r.appendChild(i);const l=document.createElement("td");l.innerText=a.mm40days?.value,r.appendChild(l);const u=document.createElement("td");u.innerText=a.mm100days?.value,r.appendChild(u),n.appendChild(r)}}(e.body.tiup,"table")}catch(e){console.error(e),o(r[3])}}()}}}}]);