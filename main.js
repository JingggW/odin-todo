(()=>{"use strict";let e=["Time","Research","Life"];const t=["Achievements","Archived"],n=(e,t)=>{const n=document.createElement("button");if(n.classList.add("nav-item"),n.textContent=e,2===t){const e=document.createElement("span");e.textContent="x",n.appendChild(e),n.classList.add("nav-deletable")}else 3===t?n.classList.add("nav-color"):4===t?n.classList.add("nav-add"):1===t&&n.classList.add("active");return n};let d={Time:["Today","Week","Month"],Researchx:["Study","Paper","Thesis","Others"],Lifex:["Grocery","Chores","Utility","Others"]};const c=e=>{const t=document.createElement("div"),n=d[e];for(let e=0;e<n.length;e++){const d=document.createElement("button");d.textContent=n[e],t.appendChild(d)}return t},s=(e,t)=>({taskContent:e,dueDate:t,isCompleted:!1,curState:null}),a=e=>{const t=document.createElement("li"),n=document.createElement("div");n.classList.add("item-li");const d=document.createElement("span");d.classList.add("circle"),n.appendChild(d);const c=document.createElement("div");c.textContent=e.taskContent,n.appendChild(c);const s=document.createElement("div");s.textContent=e.dueDate.toString(),s.classList.add("due-date"),n.appendChild(s);const a=document.createElement("img");a.src="./images/icons/archive-arrow-down-outline.svg",n.appendChild(a);const o=document.createElement("img");return o.src="./images/icons/trophy.svg",n.appendChild(o),t.appendChild(n),t},o=document.querySelector("body"),l=document.querySelector(".content"),i=document.createElement("div");i.classList.add("header"),o.insertBefore(i,l);const r=document.createElement("div");r.textContent="Made By Jing with PhD Regrets",r.classList.add("footer"),l.after(r);const m=document.createElement("div");m.classList.add("nav");const p=document.createElement("div");for(let t=0;t<e.length;t++){const d=n(e[t],0===t?1:2);p.appendChild(d)}m.appendChild(p);const h=n("Add new +",4);m.appendChild(h),h.addEventListener("click",(()=>{if(p.childNodes.length<6){const e=n("Test",2);p.appendChild(e),console.log(p.childNodes.length)}}));const u=document.createElement("div");for(let e=0;e<2;e++){const d=n(t[e],3);u.appendChild(d)}m.appendChild(u),l.appendChild(m);const C=document.createElement("div");C.classList.add("list-bar");const v=c("Time");C.appendChild(v);const E=document.querySelectorAll(".nav-item");m.addEventListener("click",(e=>{if("BUTTON"===e.target.tagName){E.forEach((e=>{console.log(e.classList.contains("active")),e.classList.remove("active")}));const t=e.target;t.classList.add("active");const n=c(t.textContent);for(;C.firstChild;)C.replaceChildren();C.appendChild(n)}})),l.append(C);const g=document.createElement("div");g.classList.add("task-panel");const L=document.createElement("div");L.textContent="Tasks",g.appendChild(L);const f=["Sleep for 12 hours","Study for 24 hours","Hunting Alligators Non STOP"],x=s(f[0],"2021-02-02"),y=s(f[1],"2021-02-02"),T=s(f[2],"2021-02-02"),S=document.createElement("ul"),k=a(x);S.appendChild(k);const b=a(y);S.appendChild(b);const A=a(T);S.appendChild(A),g.appendChild(S),l.appendChild(g)})();