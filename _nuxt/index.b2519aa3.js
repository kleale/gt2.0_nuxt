import{d,t as s,v as o,E as i,x as e,y as c,z as a,F as b,_ as u,G as h,H as x,r as S,I as j,J as m,g as y,N as $,i as N,A as w,C as B,D as A,K as I,L as E,M as R,O as T,P as z,Q as H,R as D,S as G,T as P,U as F}from"./entry.08873041.js";const V=""+new URL("bannerMobile.27d54a89.png",import.meta.url).href,U=["src"],Y=d({__name:"topMobile",setup(n){return(t,r)=>(s(),o("img",{src:i(V),alt:"topb",style:{width:"100%"},class:"mob md:hidden"},null,8,U))}}),K=""+new URL("nimg.a90f3043.png",import.meta.url).href,J={class:"card card-compact max-w-sm p-3"},Q=["src"],q={class:"card-body"},W={class:"flex"},X={class:"card-title grow text-white"},Z={class:"pl-5"},ee=d({__name:"CardLarge",props:{data:{},game:{}},setup(n){return(t,r)=>(s(),o("div",J,[e("figure",null,[e("img",{src:i(K),alt:"news",style:{width:"100%"}},null,8,Q)]),e("div",q,[e("div",W,[e("h3",X,c(t.data),1),e("div",Z,[a(i(b))])])])]))}});const te=u(ee,[["__scopeId","data-v-29925a39"]]),se={class:"carousel carousel-end w-full"},oe={id:"slide1",class:"carousel-item relative"},ne=d({__name:"Carousel",setup(n){const t=[{name:"TSM рассталась с составом по Dota 2",id:0},{name:"«Я самый лошара среди всех 322-шеров». Открытое письмо GIGA CHEL (LIL SORRY) ",id:1},{name:"LIL SORRY: «Не называю ников, потому что это не моя ответственность. Я пришёл сказать про себя»",id:2},{name:"Petushara рассказал, как кастера выгнали со студии за расистскую шутку",id:2},{name:"TORONTOTOKYO: «Апаться можно на любой роли. Главное — хорошо играть»",id:2}];return(r,_)=>{const p=te;return s(),o("div",se,[(s(),o(h,null,x(t,(f,l)=>e("div",oe,[a(p,{data:f.name},null,8,["data"])])),64))])}}}),ae={class:"flex items-center content-center justify-center mb-5"},ce={role:"tablist",class:"tabs tabs-boxed tabs-lg flex flex-row"},re={class:"flex flex-row"},le=["href","onClick"],ie={key:0,class:"divider divider-horizontal"},de=d({__name:"Tabs",setup(n){const t=S("Matches"),r=p=>{t.value=p},_=[{title:"Matches",sectionId:"#"},{title:"Events",sectionId:"#"},{title:"News",sectionId:"#"}];return(p,f)=>(s(),o("div",ae,[e("div",ce,[(s(),o(h,null,x(_,(l,v)=>e("span",re,[(s(),o("a",{role:"tab",class:j(["tab",l.title===i(t)&&"tab-active"]),key:v,href:l.sectionId,onClick:k=>r(l.title)},c(l.title),11,le)),v<_.length-1?(s(),o("div",ie)):m("",!0)])),64))])]))}});const _e=u(de,[["__scopeId","data-v-56e2557c"]]),me={xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"i-1184202213__icon i-1184202213__icon-tabler i-1184202213__icon-tabler-clock",viewBox:"0 0 24 24"},he=e("path",{stroke:"none",d:"M0 0h24v24H0z"},null,-1),pe=e("path",{d:"M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"},null,-1),ue=e("path",{d:"M12 7v5l3 3"},null,-1),fe=[he,pe,ue];function ve(n,t){return s(),o("svg",me,[...fe])}const ge={render(){return y($,{icon:{render:ve},name:"clock"})}},M=n=>(B("data-v-4a29e52c"),n=n(),A(),n),xe={class:"flex border-dashed odd:bg-gray-800 odd:bg-opacity-10 first:border-0"},we={class:"flex grow items-center"},be={class:"flex items-start md:items-center py-1 pl-2 md:pl-4 w-[70px] md:w-36 flex-col md:flex-row"},ye=M(()=>e("img",{class:"h-5",src:b,alt:"gameName"},null,-1)),$e={class:"md:ml-2"},ke={key:0,class:"font-bold flex-col text-sm dark:text-red-500 leading-4 hidden md:flex"},Ie={key:1,class:"bg-red-500 text-gray-900 text-xs font-semibold mt-0.5 px-1 rounded dark:bg-red-500 dark:text-gray-900"},Me={class:"flex grow py-1 gap-2 md:gap-5 relative px-1 md:px-5"},Le={class:"flex grow flex-1 justify-end items-end gap-1 md:gap-5 flex-col md:flex-row-reverse md:items-center md:justify-start"},Ce={href:"#",class:"flex h-6 w-6"},Oe=["src","alt"],Se={href:"#",class:"flex text-right text-white text-[13px] leading-4"},je=M(()=>e("div",{class:"flex items-center justify-center"},null,-1)),Ne={class:"justify-center text-center text-sm font-extrabold"},Be={class:"flex grow flex-1 content-center md:items-center text-left gap-1 md:gap-5 flex-col md:flex-row"},Ae={href:"#",class:"flex h-6 w-6"},Ee=["src","alt"],Re={href:"#",class:"flex text-white text-[13px] leading-4"},Te={class:"flex items-center w-[175px] md:w-[152px] justify-end gap-3 pr-3"},ze={key:0,class:"flex"},He={class:"text-xs ml-1"},De={key:0,class:"bg-red-500 text-gray-900 text-xs font-semibold mt-0.5 px-1 rounded dark:bg-red-500 dark:text-gray-900"},Ge={key:1,class:"flex flex-col justify-center items-center text-xs text-right text-secondary"},Pe=["data-tip"],Fe=["src","alt"],Ve=d({__name:"MatchesRow",props:{match:{}},setup(n){return(t,r)=>{const _=N("router-link");return s(),o("div",xe,[e("div",we,[e("div",be,[ye,e("div",$e,[t.match.isLive?(s(),o("div",ke,"LIVE")):m("",!0),t.match.isLive?(s(),o("span",Ie,"MAP"+c(t.match.map),1)):m("",!0)])]),e("div",Me,[e("div",Le,[e("a",Ce,[e("img",{class:"h-6 max-w-full",src:t.match.t1Icon,alt:t.match.t1},null,8,Oe)]),e("a",Se,c(t.match.t1),1)]),a(_,{to:"/",class:"flex justify-center px-1 border-x border-gray-800 flex-col w-16 md:w-20 md:h-10 md:px-2"},{default:w(()=>[je,e("div",Ne,c(t.match.score),1)]),_:1}),e("div",Be,[e("a",Ae,[e("img",{class:"h-6 max-w-full",src:t.match.t2Icon,alt:t.match.t2},null,8,Ee)]),e("a",Re,c(t.match.t2),1)])]),e("div",Te,[t.match.isLive?(s(),o("div",ze,[a(i(ge),{class:"h-3",filled:""}),e("div",He,c(t.match.time),1),t.match.isLive?(s(),o("span",De,"MAP"+c(t.match.map),1)):m("",!0)])):m("",!0),t.match.isLive?m("",!0):(s(),o("div",Ge,c(t.match.date)+" "+c(t.match.time),1)),e("a",{href:"/",class:"tooltip w-7","data-tip":t.match.eventName},[e("img",{class:"",src:t.match.eIcon,alt:t.match.eventName},null,8,Fe)],8,Pe)])])])}}});const Ue=u(Ve,[["__scopeId","data-v-4a29e52c"]]),Ye={class:"bg-block flex flex-col md:flex-row items-center p-2 rounded-t-md border-x border-t border-gray-800"},Ke={class:"text-l font-bold text-white grow pl-3 pb-2 md:pb-0"},Je={class:"flex flex-col md:flex-row items-center content-center"},Qe={class:"border border-gray-800 rounded-b-md bg-base"},qe=d({__name:"BlockLayout",props:{header:{}},setup(n){return(t,r)=>(s(),o(h,null,[e("div",Ye,[e("h3",Ke,c(t.header),1),e("div",Je,[I(t.$slots,"header-extra",{},void 0,!0)])]),e("div",Qe,[I(t.$slots,"default",{},void 0,!0)])],64))}});const We=u(qe,[["__scopeId","data-v-f71e5b1e"]]),Xe={},Ze={class:"join"},et=E('<button class="join-item btn">1</button><button class="join-item btn">2</button><button class="join-item btn btn-disabled">...</button><button class="join-item btn">99</button><button class="join-item btn">100</button>',5),tt=[et];function st(n,t){return s(),o("div",Ze,tt)}const ot=u(Xe,[["render",st]]),nt={xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},at=e("path",{stroke:"none",d:"M0 0h24v24H0z"},null,-1),ct=e("path",{d:"M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"},null,-1),rt=[at,ct];function lt(n,t){return s(),o("svg",nt,[...rt])}const it={render(){return y($,{icon:{render:lt},name:"refresh"})}},dt={xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"i1879769759__icon i1879769759__icon-tabler i1879769759__icon-tabler-scoreboard",viewBox:"0 0 24 24"},_t=e("path",{stroke:"none",d:"M0 0h24v24H0z"},null,-1),mt=e("path",{d:"M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM12 5v2M12 10v1M12 14v1M12 18v1M7 3v2M17 3v2"},null,-1),ht=e("path",{d:"M15 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0M6 9h1.5a1.5 1.5 0 0 1 0 3H7h.5a1.5 1.5 0 0 1 0 3H6"},null,-1),pt=[_t,mt,ht];function ut(n,t){return s(),o("svg",dt,[...pt])}const ft={render(){return y($,{icon:{render:ut},name:"score"})}},vt={href:"",class:"tooltip p-2 text-secondary","data-tip":"Refresh"},gt=e("div",{class:"divider divider-horizontal m-0 h-6 self-center"},null,-1),xt={href:"",class:"tooltip p-2 text-secondary","data-tip":"Show the score"},wt=e("div",{class:"divider divider-horizontal m-0 h-6 self-center"},null,-1),bt=["data-tip"],$t=d({__name:"index",setup(n){const t=[{id:0,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:"dota2",gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!0,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:1,t1:"Dota Geniuses",t1Icon:"~/assets/img/none/team.svg",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:"dota2",gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:2,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:"dota2",gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:3,t1:"Dota Geniuses",t1Icon:"/assets/img/none/team.svg",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:"dota2",gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"}],r=[{name:"DOTA2",href:"/dota-2",current:!0,logo:b},{name:"CS2",href:"/",current:!1,logo:z},{name:"League of Legends",href:"/",current:!1,logo:H},{name:"Heartstone",href:"/",current:!1,logo:D},{name:"Overwatch",href:"/",current:!1,logo:G},{name:"Fortnite",href:"/",current:!1,logo:P},{name:"Pubg",href:"/",current:!1,logo:F}];return(_,p)=>{const f=Y,l=ne,v=_e,k=Ue,L=We,C=ot;return s(),o(h,null,[a(f),a(l),a(v),a(L,{header:"Best matches of the day"},{"header-extra":w(()=>[e("a",vt,[a(i(it),{class:"w-6",filled:"",fontControlled:!1})]),gt,e("a",xt,[a(i(ft),{class:"w-6",filled:"",fontControlled:!1})]),wt,(s(),o(h,null,x(r,(g,O)=>e("a",{href:"",class:"tooltip p-2 text-secondary","data-tip":g.name},[(s(),R(T(g.logo),{fontControlled:!1,class:"w-5"}))],8,bt)),64))]),default:w(()=>[(s(),o(h,null,x(t,(g,O)=>a(k,{match:g},null,8,["match"])),64))]),_:1}),a(C,{class:"mt-5"})],64)}}});export{$t as default};
