import{d as c,v as a,x as n,y as e,z as i,O as p,P as h,H as o,I as r,A as w,J as d,K as g,V as f,M as b}from"./entry.f5e68c6f.js";const v={href:"/",class:"card rounded card-compact text-white hover:text-primary border border-slate-700 transition hover:border-slate-500 hover:scale-99 max-w-sm image-full shadow-xl bg-base-100"},x={class:"rounded"},y=["src"],I={class:"card-body justify-end"},C={class:"flex"},L={class:"card-title grow text-white"},O={class:"pl-5 flex items-end content-end text-base-content"},$=c({__name:"CardLarge",props:{data:{}},setup(l){return(s,m)=>(a(),n("a",v,[e("figure",x,[e("img",{src:s.data.src,alt:"news",style:{width:"100%"},class:"rounded"},null,8,y)]),e("div",I,[e("div",C,[e("h3",L,i(s.data.name),1),e("div",O,[(a(),p(h(s.data.game),{fontControlled:!1,class:"w-6"}))])])])]))}}),R={class:"carousel w-full gap-4"},S={id:"slide1",class:"carousel-item relative"},B={class:"flex justify-center w-full py-2 gap-2"},D=["href"],k=c({__name:"Carousel",setup(l){const s=[{name:"TSM рассталась с составом по Dota 2",id:0,src:"https://escorenews.com/media/news/_468/n53609.webp",game:d,isImg:!0,date:"date"},{name:"«Я самый лошара среди всех 322-шеров». Открытое письмо GIGA CHEL (LIL SORRY) ",id:1,src:"https://escorenews.com/media/news/_468/n53580.webp",game:g,isImg:!0,date:"date"},{name:"LIL SORRY: «Не называю ников, потому что это не моя ответственность. Я пришёл сказать про себя»",id:2,src:"https://escorenews.com/media/news/_468/n53512.webp",game:d,isImg:!0,date:"date"},{name:"Petushara рассказал, как кастера выгнали со студии за расистскую шутку",id:3,src:"https://escorenews.com/media/news/_468/n53416.webp",game:f,isImg:!0,date:"date"},{name:"TORONTOTOKYO: «Апаться можно на любой роли. Главное — хорошо играть»",id:4,src:"https://escorenews.com/media/news/_468/n53220.webp",game:b,isImg:!0,date:"date"}];return(m,N)=>{const _=$;return a(),n("div",null,[e("div",R,[(a(),n(o,null,r(s,(t,u)=>e("div",S,[w(_,{data:t,id:`item${t.id}`},null,8,["data","id"])])),64))]),e("div",B,[(a(),n(o,null,r(s,(t,u)=>e("a",{href:`#item${t.id}`,class:"btn btn-xs"},i(t.id),9,D)),64))])])}}});export{k as _};
