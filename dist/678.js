"use strict";(self.webpackChunktradingradar_net=self.webpackChunktradingradar_net||[]).push([[678],{442:(e,t,n)=>{n.d(t,{Z:()=>l});var c=n(399);let o,a;function r(e){o.classList.remove(...a),o.classList.add(e)}function d(e,t){const n=o.querySelector(t),c=o.querySelector(t+" ~ p.detection em");for(let t=0;t<e.length;t++){const o=e[t];0===t&&(c.innerText=new Date(o.perf1M.now).toLocaleString());const a=document.createElement("li"),r=document.createElement("a");r.innerText=o.name,r.title=o.name,r.href=`/analisi/${encodeURI(o.name?.toLowerCase().replace(/ /g,"-"))}?isin=${o.isin}`;const d=document.createElement("span");d.innerText=o.perf1M.value||"",a.appendChild(r),a.appendChild(d),n.appendChild(a)}}const l={init:()=>{o=document.getElementById("perf-month"),a=["idle","loading","success","error"],r(a[1]),async function(){try{const e=await(0,c.Z)("/api/stocks/perf1M/?order=desc");r(a[2]),d(e.body.slice(0,10),"ul.up"),d(e.body.reverse().slice(0,10),"ul.down")}catch(e){console.error(e),r(a[3])}}()}}},872:(e,t,n)=>{n.d(t,{Z:()=>l});var c=n(399);let o,a;function r(e){o.classList.remove(...a),o.classList.add(e)}function d(e,t){const n=o.querySelector(t),c=o.querySelector(t+" ~ p.detection em");for(let t=0;t<e.length;t++){const o=e[t];0===t&&(c.innerText=new Date(o.perf1Y.now).toLocaleString());const a=document.createElement("li"),r=document.createElement("a");r.innerText=o.name,r.title=o.name,r.href=`/analisi/${encodeURI(o.name?.toLowerCase().replace(/ /g,"-"))}?isin=${o.isin}`;const d=document.createElement("span");d.innerText=o.perf1Y.value||"",a.appendChild(r),a.appendChild(d),n.appendChild(a)}}const l={init:()=>{o=document.getElementById("perf-year"),a=["idle","loading","success","error"],r(a[1]),async function(){try{const e=await(0,c.Z)("/api/stocks/perf1Y/?order=desc");r(a[2]),d(e.body.slice(0,10),"ul.up"),d(e.body.reverse().slice(0,10),"ul.down")}catch(e){console.error(e),r(a[3])}}()}}},399:(e,t,n)=>{n.d(t,{Z:()=>c});const c=async function(e="",t={},n="GET",c={}){const o={},a={method:n,mode:"cors",cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/json",...c},redirect:"follow",referrerPolicy:"no-referrer"};return["post","put","patch","delete"].includes(n.toLowerCase())&&(a.body=JSON.stringify(t)),await fetch(e,a).then((e=>(o.status=e.status,e.json()))).then((e=>{o.body=e})).catch((e=>{console.error(e)})),o}},678:(e,t,n)=>{n.r(t),n.d(t,{home:()=>C});var c=n(399),o=n(442),a=n(872);let r;const d=e=>{r=document.getElementById("uptrends"),function(e,t){const n=r.querySelector(t).querySelector("tbody"),c=r.querySelector(t+" ~ p.detection em");for(let t=0;t<e.length;t++){const o=e[t];0===t&&(c.innerText=new Date(o.lastPrice.now).toLocaleString());const a=document.createElement("tr"),r=document.createElement("td"),d=document.createElement("a");d.innerText=o.name,d.title=o.name,d.href=`/analisi/${encodeURI(o.name?.toLowerCase().replace(/ /g,"-"))}?isin=${o.isin}`,r.appendChild(d),a.appendChild(r);const l=document.createElement("td");l.classList.add("green","em"),l.innerText=o.lastPrice?.value,a.appendChild(l);const i=document.createElement("td");i.innerText=o.mm20days?.value,a.appendChild(i);const s=document.createElement("td");s.innerText=o.mm40days?.value,a.appendChild(s);const m=document.createElement("td");m.innerText=o.mm100days?.value,a.appendChild(m),n.appendChild(a)}}(e,"table")};let l;const i=e=>{l=document.getElementById("downtrends"),function(e,t){const n=l.querySelector(t).querySelector("tbody"),c=l.querySelector(t+" ~ p.detection em");for(let t=0;t<e.length;t++){const o=e[t];0===t&&(c.innerText=new Date(o.lastPrice.now).toLocaleString());const a=document.createElement("tr"),r=document.createElement("td"),d=document.createElement("a");d.innerText=o.name,d.title=o.name,d.href=`/analisi/${encodeURI(o.name?.toLowerCase().replace(/ /g,"-"))}?isin=${o.isin}`,r.appendChild(d),a.appendChild(r);const l=document.createElement("td");l.classList.add("red","em"),l.innerText=o.lastPrice?.value,a.appendChild(l);const i=document.createElement("td");i.innerText=o.mm20days?.value,a.appendChild(i);const s=document.createElement("td");s.innerText=o.mm40days?.value,a.appendChild(s);const m=document.createElement("td");m.innerText=o.mm100days?.value,a.appendChild(m),n.appendChild(a)}}(e,"table")};let s;const m=e=>{s=document.getElementById("upinversion"),function(e,t){const n=s.querySelector(t).querySelector("tbody"),c=s.querySelector(t+" ~ p.detection em");for(let t=0;t<e.length;t++){const o=e[t];0===t&&(c.innerText=new Date(o.lastPrice.now).toLocaleString());const a=document.createElement("tr"),r=document.createElement("td"),d=document.createElement("a");d.innerText=o.name,d.title=o.name,d.href=`/analisi/${encodeURI(o.name?.toLowerCase().replace(/ /g,"-"))}?isin=${o.isin}`,r.appendChild(d),a.appendChild(r);const l=document.createElement("td");l.classList.add("green","em"),l.innerText=o.lastPrice?.value,a.appendChild(l);const i=document.createElement("td");i.innerText=o.mm20days?.value,a.appendChild(i);const s=document.createElement("td");s.innerText=o.mm40days?.value,a.appendChild(s),n.appendChild(a)}}(e,"table")};let u;const p=e=>{u=document.getElementById("downinversion"),function(e,t){const n=u.querySelector(t).querySelector("tbody"),c=u.querySelector(t+" ~ p.detection em");for(let t=0;t<e.length;t++){const o=e[t];0===t&&(c.innerText=new Date(o.lastPrice.now).toLocaleString());const a=document.createElement("tr"),r=document.createElement("td"),d=document.createElement("a");d.innerText=o.name,d.title=o.name,d.href=`/analisi/${encodeURI(o.name?.toLowerCase().replace(/ /g,"-"))}?isin=${o.isin}`,r.appendChild(d),a.appendChild(r);const l=document.createElement("td");l.classList.add("red","em"),l.innerText=o.lastPrice?.value,a.appendChild(l);const i=document.createElement("td");i.innerText=o.mm20days?.value,a.appendChild(i);const s=document.createElement("td");s.innerText=o.mm40days?.value,a.appendChild(s),n.appendChild(a)}}(e,"table")},h=["idle","loading","success","error"],y=document.querySelectorAll("#downinversion, #upinversion, #downtrends, #uptrends");function f(e){for(const t of y)t.classList.remove(...h),t.classList.add(e)}const C={init:async()=>{o.Z.init(),a.Z.init(),async function(){try{const e=await(0,c.Z)("/api/custom");f(h[2]),d(e.body.uptrends),i(e.body.downtrends),m(e.body.tiup),p(e.body.tidown)}catch(e){console.error(e),f(h[3])}}()}}}}]);