import{d as _,t as s,v as o,E as f,x as e,y as d,z as n,F as v,_ as g,G as h,H as b,r as L,I as S,J as x,i as p,A as y,K as k,L as O}from"./entry.be5e09c8.js";const E=""+new URL("bannerMobile.27d54a89.png",import.meta.url).href,N=["src"],C=_({__name:"topMobile",setup(l){return(t,i)=>(s(),o("img",{src:f(E),alt:"topb",style:{width:"100%"},class:"mob md:hidden"},null,8,N))}}),j=""+new URL("nimg.a90f3043.png",import.meta.url).href,B={class:"card card-compact max-w-sm p-3"},A=["src"],M={class:"card-body"},T={class:"flex"},G={class:"card-title grow text-white"},R={class:"pl-5"},z=_({__name:"CardLarge",props:{data:{},game:{}},setup(l){return(t,i)=>(s(),o("div",B,[e("figure",null,[e("img",{src:f(j),alt:"news",style:{width:"100%"}},null,8,A)]),e("div",M,[e("div",T,[e("h3",G,d(t.data),1),e("div",R,[n(f(v))])])])]))}});const D=g(z,[["__scopeId","data-v-29925a39"]]),F={class:"carousel carousel-end w-full"},V={id:"slide1",class:"carousel-item relative"},P=_({__name:"Carousel",setup(l){const t=[{name:"TSM рассталась с составом по Dota 2",id:0},{name:"«Я самый лошара среди всех 322-шеров». Открытое письмо GIGA CHEL (LIL SORRY) ",id:1},{name:"LIL SORRY: «Не называю ников, потому что это не моя ответственность. Я пришёл сказать про себя»",id:2},{name:"Petushara рассказал, как кастера выгнали со студии за расистскую шутку",id:2},{name:"TORONTOTOKYO: «Апаться можно на любой роли. Главное — хорошо играть»",id:2}];return(i,c)=>{const a=D;return s(),o("div",F,[(s(),o(h,null,b(t,(m,r)=>e("div",V,[n(a,{data:m.name},null,8,["data"])])),64))])}}}),Y={class:"flex items-center content-center justify-center mb-5"},H={role:"tablist",class:"tabs tabs-boxed tabs-lg flex flex-row"},K={class:"flex flex-row"},U=["href","onClick"],J={key:0,class:"divider divider-horizontal"},q=_({__name:"Tabs",setup(l){const t=L("Matches"),i=a=>{t.value=a},c=[{title:"Matches",sectionId:"#"},{title:"Events",sectionId:"#"},{title:"News",sectionId:"#"}];return(a,m)=>(s(),o("div",Y,[e("div",H,[(s(),o(h,null,b(c,(r,u)=>e("span",K,[(s(),o("a",{role:"tab",class:S(["tab",r.title===f(t)&&"tab-active"]),key:u,href:r.sectionId,onClick:w=>i(r.title)},d(r.title),11,U)),u<c.length-1?(s(),o("div",J)):x("",!0)])),64))])]))}});const Q=g(q,[["__scopeId","data-v-56e2557c"]]),W={class:"flex border-dashed odd:bg-odd first:border-0"},X={class:"flex grow items-center"},Z={class:"flex items-start md:items-center py-1 pl-2 md:pl-4 w-[70px] md:w-36 flex-col md:flex-row"},ee=e("img",{class:"h-5",src:v,alt:"gameName"},null,-1),te={class:"md:ml-2"},se={key:0,class:"font-bold flex-col text-sm dark:text-red-500 leading-4 hidden md:flex"},oe={key:1,class:"bg-red-500 text-gray-900 text-xs font-semibold mt-0.5 px-1 rounded dark:bg-red-500 dark:text-gray-900"},ne=e("div",{class:"text-xs text-gray-600 dark:text-gray-300"},"СЕГОДНЯ В 23:00",-1),ae={class:"flex grow py-1 gap-2 md:gap-5 relative px-1 md:px-5"},ce={class:"flex grow flex-1 justify-end items-end gap-1 md:gap-5 flex-col md:flex-row-reverse md:items-center md:justify-start"},de={href:"#",class:"flex h-6 w-6"},le=["src","alt"],ie={href:"#",class:"flex text-right text-white text-[13px] leading-4"},re={class:"flex items-center justify-center"},_e={class:"text-xs ml-1"},me={class:"dark:text-apple justify-center text-center text-sm font-extrabold"},pe={class:"flex grow flex-1 content-center md:items-center text-left gap-1 md:gap-5 flex-col md:flex-row"},he={href:"#",class:"flex h-6 w-6"},ue=["src","alt"],fe={href:"#",class:"flex text-white text-[13px] leading-4"},xe={class:"flex items-center w-[75px] md:w-[102px] justify-end gap-3 pr-3"},ge=["data-tip"],be=["src","alt"],we=e("div",{class:"flex flex-col justify-center items-center"},[e("div",{class:"flex font-bold flex-col text-xs dark:text-gray-300 leading-4"},"BO3"),e("span",{class:"text-[11px] leading-none font-semibold mt-0.5 w-7 px-1 py-0.5 rounded bg-apple text-white text-center"},"0:1")],-1),ve=_({__name:"MatchesRow",props:{match:{}},setup(l){return(t,i)=>{const c=p("ClockIcon"),a=p("router-link");return s(),o("div",W,[e("div",X,[e("div",Z,[ee,e("div",te,[t.match.isLive?(s(),o("div",se,"LIVE")):x("",!0),t.match.isLive?(s(),o("span",oe,"MAP"+d(t.match.map),1)):x("",!0),ne])]),e("div",ae,[e("div",ce,[e("a",de,[e("img",{class:"h-6 max-w-full",src:t.match.t1Icon,alt:t.match.t1},null,8,le)]),e("a",ie,d(t.match.t1),1)]),n(a,{to:"/",class:"flex justify-center px-1 border-x border-gray-300 dark:border-gray-700 flex-col w-16 md:w-20 md:h-10 md:px-2"},{default:y(()=>[e("div",re,[n(c,{class:"h-3"}),e("div",_e,d(t.match.time),1)]),e("div",me,d(t.match.score),1)]),_:1}),e("div",pe,[e("a",he,[e("img",{class:"h-6 max-w-full",src:t.match.t2Icon,alt:t.match.t2},null,8,ue)]),e("a",fe,d(t.match.t2),1)])]),e("div",xe,[e("a",{href:"/",class:"tooltip w-7","data-tip":t.match.eventName},[e("img",{class:"",src:t.match.eIcon,alt:t.match.eventName},null,8,be)],8,ge),we])])])}}}),ye={class:"flex flex-col md:flex-row items-center p-2 rounded-t-md border-x border-t border-gray-300 dark:border-gray-700"},Ie={class:"text-l font-bold dark:text-white grow pl-3 w-full pb-2 md:pb-0"},$e={class:"flex flex-col md:flex-row w-full"},Le={class:"border border-gray-300 dark:border-gray-700 rounded-b-md"},Se=_({__name:"BlockLayout",props:{header:{},game:{}},setup(l){return(t,i)=>{const c=p("SelectGame"),a=p("SelectTeam"),m=p("SelectEvent");return s(),o(h,null,[e("div",ye,[e("h3",Ie,d(t.header),1),e("div",$e,[n(c,{class:"pl-2 pb-2 md:w-40 md:pb-0"}),n(a,{class:"pl-2 pb-2 md:w-40 md:pb-0"}),n(m,{class:"pl-2 pb-2 md:w-40 md:pb-0"})])]),e("div",Le,[k(t.$slots,"default")])],64)}}}),ke={},Oe={class:"join"},Ee=O('<button class="join-item btn">1</button><button class="join-item btn">2</button><button class="join-item btn btn-disabled">...</button><button class="join-item btn">99</button><button class="join-item btn">100</button>',5),Ne=[Ee];function Ce(l,t){return s(),o("div",Oe,Ne)}const je=g(ke,[["render",Ce]]),Me=_({__name:"index",setup(l){const t=[{id:0,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:"dota2",gameId:"1",score:"1:0",date:"13.12.2023",time:"11:34",isLive:!0,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:0,t1:"Dota Geniuses",t1Icon:"/assets/img/none/team.svg",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:"dota2",gameId:"1",score:"1:0",date:"13.12.2023",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:0,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:"dota2",gameId:"1",score:"1:0",date:"13.12.2023",time:"11:34",isLive:!0,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:0,t1:"Dota Geniuses",t1Icon:"/assets/img/none/team.svg",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:"dota2",gameId:"1",score:"1:0",date:"13.12.2023",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:0,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:"dota2",gameId:"1",score:"1:0",date:"13.12.2023",time:"11:34",isLive:!0,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:0,t1:"Dota Geniuses",t1Icon:"/assets/img/none/team.svg",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:"dota2",gameId:"1",score:"1:0",date:"13.12.2023",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"}];return(i,c)=>{const a=C,m=P,r=Q,u=ve,w=Se,I=je;return s(),o(h,null,[n(a),n(m),n(r),n(w,{header:"Best matches of the day"},{default:y(()=>[(s(),o(h,null,b(t,($,Be)=>n(u,{match:$},null,8,["match"])),64))]),_:1}),n(I,{class:"mt-5"})],64)}}});export{Me as default};
