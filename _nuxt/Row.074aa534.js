import{d as o,r as n,v as a,x as l,y as s,O as r,P as i,z as t,G as c,_ as d}from"./entry.04ccc4cc.js";const _={href:"#",class:"flex grow items-center gap-5 h-10 text-primary"},p={class:"flex items-start md:items-center pl-4 w-[35px] text-secondary"},m={class:"flex-1 flex items-center gap-2"},v={class:"text-sm hover:underline line-clamp-1"},h={class:"text-xs text-slate-500"},f={class:"text-xs text-right text-secondary w-20 line-clamp-2"},x={class:"pr-3"},g=["data-tip"],y=["src","alt"],u=o({__name:"Row",props:{event:{}},setup(w){return n(!1),(e,b)=>(a(),l("div",{class:c([e.event.isLive?"isLive":"","flex border-b border-b-slate-800 odd:bg-slate-800 odd:bg-opacity-10 last:border-0 hover:bg-opacity-10 hover:bg-gray-700"])},[s("a",_,[s("div",p,[(a(),r(i(e.event.game),{fontControlled:!1,class:"w-4 md:w-5"}))]),s("div",m,[s("div",v,t(e.event.name),1),s("span",h,t(e.event.price),1)]),s("div",f,t(e.event.date)+" "+t(e.event.time),1),s("div",x,[s("span",{href:"/",class:"tooltip w-5 md:w-5 flex justify-center","data-tip":e.event.name},[s("img",{class:"h-5 md:h-5 max-w-full",src:e.event.eIcon,alt:e.event.name},null,8,y)],8,g)])])],2))}});const C=d(u,[["__scopeId","data-v-81312d66"]]);export{C as _};