import{d as p,t as s,v as n,E as m,x as e,y as d,F as I,G as $,_ as u,H as b,I as x,z as c,J as w,K as g,P as j,L as f,r as M,M as k,N as h,O as y,Q as U,R as Y,g as C,S as E,T as O,U as K,C as z,D,A as v,B as L}from"./entry.3e76365f.js";const q=""+new URL("bannerMobile.27d54a89.png",import.meta.url).href,J=["src"],Q=p({__name:"topMobile",setup(a){return(t,i)=>(s(),n("img",{src:m(q),alt:"topb",style:{width:"100%"},class:"mob md:hidden"},null,8,J))}}),W={href:"/",class:"card card-compact text-white hover:text-primary border border-slate-700 transition hover:border-slate-500 hover:scale-95 max-w-sm image-full shadow-xl bg-base-100"},Z=["src"],X={class:"card-body justify-end"},ee={class:"flex"},te={class:"card-title grow text-white"},se={class:"pl-5 flex items-end content-end"},oe=p({__name:"CardLarge",props:{data:{}},setup(a){return(t,i)=>(s(),n("a",W,[e("figure",null,[e("img",{src:t.data.src,alt:"news",style:{width:"100%"}},null,8,Z)]),e("div",X,[e("div",ee,[e("h3",te,d(t.data.name),1),e("div",se,[(s(),I($(t.data.game),{fontControlled:!1,class:"w-6"}))])])])]))}});const ne=u(oe,[["__scopeId","data-v-11a71d02"]]),ae={class:"carousel w-full gap-4"},ce={id:"slide1",class:"carousel-item relative"},ie={class:"flex justify-center w-full py-2 gap-2"},re=["href"],de=p({__name:"Carousel",setup(a){const t=[{name:"TSM рассталась с составом по Dota 2",id:0,src:"https://escorenews.com/media/news/_468/n53609.webp",game:w},{name:"«Я самый лошара среди всех 322-шеров». Открытое письмо GIGA CHEL (LIL SORRY) ",id:1,src:"https://escorenews.com/media/news/_468/n53580.webp",game:g},{name:"LIL SORRY: «Не называю ников, потому что это не моя ответственность. Я пришёл сказать про себя»",id:2,src:"https://escorenews.com/media/news/_468/n53512.webp",game:w},{name:"Petushara рассказал, как кастера выгнали со студии за расистскую шутку",id:3,src:"https://escorenews.com/media/news/_468/n53416.webp",game:j},{name:"TORONTOTOKYO: «Апаться можно на любой роли. Главное — хорошо играть»",id:4,src:"https://escorenews.com/media/news/_468/n53220.webp",game:f}];return(i,o)=>{const r=ne;return s(),n("div",null,[e("div",ae,[(s(),n(b,null,x(t,(l,_)=>e("div",ce,[c(r,{data:l,id:`item${l.id}`},null,8,["data","id"])])),64))]),e("div",ie,[(s(),n(b,null,x(t,(l,_)=>e("a",{href:`#item${l.id}`,class:"btn btn-xs"},d(l.id),9,re)),64))])])}}}),le={class:"flex items-center content-center justify-center"},_e={role:"tablist",class:"tabs tabs-boxed tabs-lg flex flex-row"},me={class:"flex flex-row"},pe=["href","onClick"],he={key:0,class:"divider divider-horizontal"},we=p({__name:"Tabs",setup(a){const t=M("Matches"),i=r=>{t.value=r},o=[{title:"Matches",sectionId:"#"},{title:"Events",sectionId:"#"},{title:"News",sectionId:"#"}];return(r,l)=>(s(),n("div",le,[e("div",_e,[(s(),n(b,null,x(o,(_,S)=>e("span",me,[(s(),n("a",{role:"tab",class:k(["tab hover:text-primary hover:bg-slate-400 hover:bg-opacity-5 transition",_.title===m(t)&&"tab-active"]),key:S,href:_.sectionId,onClick:A=>i(_.title)},d(_.title),11,pe)),S<o.length-1?(s(),n("div",he)):h("",!0)])),64))])]))}});const ue=u(we,[["__scopeId","data-v-a86b35b8"]]),ve={key:0,class:"hidden md:flex"},ge=["data-tip"],fe={tabindex:"0",role:"button",class:"text-secondary hover:text-primary btn btn-sm btn-ghost"},be=e("svg",{width:"12px",height:"12px",class:"h-2 w-2 fill-current opacity-60",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2048 2048"},[e("path",{d:"M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"})],-1),xe={tabindex:"0",class:"dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-22"},ye=["data-tip"],Ie=p({__name:"GamesLinks",props:{isCompact:{type:Boolean}},setup(a){const t=[{name:"DOTA2",href:"/dota-2",current:!0,logo:w},{name:"CS2",href:"/",current:!1,logo:g},{name:"League of Legends",href:"/",current:!1,logo:y},{name:"Heartstone",href:"/",current:!1,logo:U},{name:"Overwatch",href:"/",current:!1,logo:Y},{name:"Fortnite",href:"/",current:!1,logo:f},{name:"Pubg",href:"/",current:!1,logo:j}];return(i,o)=>(s(),n("div",null,[i.isCompact?h("",!0):(s(),n("div",ve,[(s(),n(b,null,x(t,(r,l)=>e("a",{href:"",class:"tooltip p-2 text-secondary hover:text-white","data-tip":r.name},[(s(),I($(r.logo),{fontControlled:!1,class:"w-5"}))],8,ge)),64))])),e("div",{class:k(["dropdown",i.isCompact?"":"md:hidden"])},[e("div",fe,[(s(),I($(t[0].logo),{fontControlled:!1,class:"w-5"})),be]),e("ul",xe,[(s(),n(b,null,x(t,(r,l)=>e("li",null,[e("a",{href:"",class:"tooltip p-2 text-secondary hover:text-white","data-tip":r.name},[(s(),I($(r.logo),{fontControlled:!1,class:"w-5"}))],8,ye)])),64))])],2)]))}}),$e={xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"i-1184202213__icon i-1184202213__icon-tabler i-1184202213__icon-tabler-clock",viewBox:"0 0 24 24"},Oe=e("path",{stroke:"none",d:"M0 0h24v24H0z"},null,-1),Se=e("path",{d:"M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"},null,-1),ke=e("path",{d:"M12 7v5l3 3"},null,-1),Le=[Oe,Se,ke];function Me(a,t){return s(),n("svg",$e,[...Le])}const Ce={render(){return C(E,{icon:{render:Me},name:"clock"})}},Ee={class:"flex grow items-center"},Be={class:"flex items-start md:items-center py-1 pl-2 md:pl-4 w-[30px] md:w-36 flex-col md:flex-row text-secondary"},Ae={class:"flex grow gap-1 md:gap-5 relative md:px-1"},Ne={class:"flex grow flex-1 items-center gap-2 md:gap-5 flex-row-reverse md:flex-row-reverse md:items-center md:justify-start"},Ge={href:"#",class:"flex h-5 w-5"},Te=["src","alt"],je={href:"#",class:"flex text-right text-xs md:text-base text-white text-[13px] leading-4 text-ellipsis overflow-hidden md:w-fit"},ze={class:"flex flex-col justify-center items-center px-1 bg-gray-800 bg-opacity-20 h-14 w-[60px] md:w-20 md:h-14 md:px-2"},De={key:2,class:"text-sm font-bold"},Fe={class:"flex grow flex-1 items-center flex-row gap-2 md:gap-5 md:flex-row text-left"},Re={href:"#",class:"flex h-6 w-6"},He=["src","alt"],Pe={href:"#",class:"flex text-xs md:text-base text-white text-[13px] leading-4 text-ellipsis overflow-hidden md:w-fit"},Ve={class:"flex items-center w-[80px] md:w-[170px] justify-end gap-2 md:gap-4 pr-1 md:pr-3"},Ue={key:0,class:"flex md:gap-3 flex-col md:flex-row items-end"},Ye={class:"flex gap-1 text-xs md:text-sm text-red-400 items-center"},Ke={class:"text-xs md:text-sm"},qe={key:0,class:"bg-red-400 text-gray-900 text-xs font-semibold mt-0.5 px-1 rounded dark:bg-red-500 dark:text-gray-900"},Je={key:1,class:"text-xs md:text-sm text-right text-secondary"},Qe=["data-tip"],We=["src","alt"],Ze=p({__name:"MatchesRow",props:{match:{}},setup(a){const t=M(!1),i=()=>{t.value=!t.value};return(o,r)=>(s(),n("div",{class:k([o.match.isLive?"isLive":"","flex border-b border-b-slate-800 odd:bg-gray-800 odd:bg-opacity-10 last:border-0 hover:bg-opacity-10 hover:bg-gray-700"])},[e("div",Ee,[e("div",Be,[(s(),I($(o.match.game),{fontControlled:!1,class:"w-4 md:w-5"}))]),e("div",Ae,[e("div",Ne,[e("a",Ge,[e("img",{class:"h-5 max-w-full",src:o.match.t1Icon,alt:o.match.t1},null,8,Te)]),e("a",je,d(o.match.t1),1)]),e("div",ze,[o.match.isLive&&!m(t)?(s(),n("div",{key:0,class:"badge badge-error badge-outline cursor-pointer text-xs md:text-sm",onClick:i},"score")):h("",!0),o.match.isLive&&m(t)?(s(),n("div",{key:1,class:"text-sm font-bold text-red-400",onClick:i},d(o.match.score),1)):h("",!0),!o.match.isLive&&!m(t)?(s(),n("div",De,d(o.match.score),1)):h("",!0)]),e("div",Fe,[e("a",Re,[e("img",{class:"h-6 max-w-full",src:o.match.t2Icon,alt:o.match.t2},null,8,He)]),e("a",Pe,d(o.match.t2),1)])]),e("div",Ve,[o.match.isLive?(s(),n("div",Ue,[e("div",Ye,[c(m(Ce),{class:"h-3",filled:""}),e("div",Ke,d(o.match.time),1)]),e("div",null,[o.match.isLive?(s(),n("span",qe,"MAP"+d(o.match.map),1)):h("",!0)])])):h("",!0),o.match.isLive?h("",!0):(s(),n("div",Je,d(o.match.date)+" "+d(o.match.time),1)),e("div",null,[e("a",{href:"/",class:"tooltip w-6 md:w-7 flex justify-center","data-tip":o.match.eventName},[e("img",{class:"h-5 md:h-6 max-w-full",src:o.match.eIcon,alt:o.match.eventName},null,8,We)],8,Qe)])])])],2))}});const Xe=u(Ze,[["__scopeId","data-v-0d368663"]]),et={class:"bg-block flex flex-row items-center p-2 rounded-t-md border-x border-t border-gray-800"},tt={class:"text-l font-bold text-white grow pl-3"},st={class:"flex flex-row items-center content-center"},ot={class:"border border-gray-800 rounded-b-md bg-base"},nt=p({__name:"BlockLayout",props:{header:{}},setup(a){return(t,i)=>(s(),n("div",null,[e("div",et,[e("h3",tt,d(t.header),1),e("div",st,[O(t.$slots,"header-extra",{},void 0,!0)])]),e("div",ot,[O(t.$slots,"default",{},void 0,!0)])]))}});const at=u(nt,[["__scopeId","data-v-a7af2f81"]]),ct={},it={class:"join"},rt=K('<button class="join-item btn">1</button><button class="join-item btn">2</button><button class="join-item btn btn-disabled">...</button><button class="join-item btn">99</button><button class="join-item btn">100</button>',5),dt=[rt];function lt(a,t){return s(),n("div",it,dt)}const _t=u(ct,[["render",lt]]);const mt={},pt={class:"textBlock"};function ht(a,t){return s(),n("div",pt,[e("h2",null,[O(a.$slots,"header-extra",{},void 0,!0)]),e("p",null,[O(a.$slots,"default",{},void 0,!0)]),O(a.$slots,"header-footer",{},void 0,!0)])}const wt=u(mt,[["render",ht],["__scopeId","data-v-68ec4aeb"]]),ut=a=>(z("data-v-aebed637"),a=a(),D(),a),vt={href:"/",class:"text-white hover:text-primary relative transition image-full bg-base-100"},gt=["src"],ft={class:"justify-end p-6 absolute bottom-0"},bt={class:"flex flex-col gap-2"},xt=ut(()=>e("div",null,[e("span",{"data-v-ac29a604":"",class:"bg-[#DDBE9A] text-gray-900 text-xs font-semibold mt-0.5 px-1 rounded"},"MAP1")],-1)),yt={class:"card-title grow text-white text-lg leading-5"},It=p({__name:"CardLarge2",props:{data:{}},setup(a){return(t,i)=>(s(),n("a",vt,[e("figure",null,[e("img",{src:t.data.src,alt:"news",class:"opacity-25",style:{width:"100%"}},null,8,gt)]),e("div",ft,[e("div",bt,[xt,e("h3",yt,d(t.data.name),1)])])]))}});const $t=u(It,[["__scopeId","data-v-aebed637"]]),Ot={xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"},St=e("path",{stroke:"none",d:"M0 0h24v24H0z"},null,-1),kt=e("path",{d:"M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"},null,-1),Lt=[St,kt];function Mt(a,t){return s(),n("svg",Ot,[...Lt])}const Ct={render(){return C(E,{icon:{render:Mt},name:"refresh"})}},Et={xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"i1879769759__icon i1879769759__icon-tabler i1879769759__icon-tabler-scoreboard",viewBox:"0 0 24 24"},Bt=e("path",{stroke:"none",d:"M0 0h24v24H0z"},null,-1),At=e("path",{d:"M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM12 5v2M12 10v1M12 14v1M12 18v1M7 3v2M17 3v2"},null,-1),Nt=e("path",{d:"M15 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0M6 9h1.5a1.5 1.5 0 0 1 0 3H7h.5a1.5 1.5 0 0 1 0 3H6"},null,-1),Gt=[Bt,At,Nt];function Tt(a,t){return s(),n("svg",Et,[...Gt])}const jt={render(){return C(E,{icon:{render:Tt},name:"score"})}};const zt={},B=a=>(z("data-v-f8965ea0"),a=a(),D(),a),Dt={class:"signupBlock"},Ft=B(()=>e("h2",null,"Sign up and get the opportunity to make money on your tips. Check your knowledge in eSports!",-1)),Rt=B(()=>e("p",null,"Dota 2, released in 2011, quickly became a worthy successor to DotA AllStars, WarCraft III custom map, not just in its player base, but in terms of esports. It’s one of the most popular esports titles, with millions of fans and teams. Esports dota 2 is an International series of events known worldwide. It was the first esports event with a million dollars in prize money. Nowadays, watching dota 2 esports live is a breathtaking activity full of tension and vivid emotions.",-1)),Ht=B(()=>e("button",{class:"btn btn-lg rounded-full text-primary btn-outline hover:bg-primary hover:border-primary signupbutton"},"Sign up",-1)),Pt=[Ft,Rt,Ht];function Vt(a,t){return s(),n("div",Dt,Pt)}const Ut=u(zt,[["render",Vt],["__scopeId","data-v-f8965ea0"]]),Yt={class:"p-4 xl:p-0 xl:pt-4"},Kt={class:"grid grid-cols-7 gap-5"},qt={class:"col-span-12 md:col-span-5"},Jt={class:"flex flex-col gap-5"},Qt={class:"tooltip p-2 text-secondary hover:text-white hover:cursor-pointer","data-tip":"Refresh"},Wt=e("div",{class:"divider divider-horizontal m-0 h-6 self-center"},null,-1),Zt=e("div",{class:"divider divider-horizontal m-0 h-6 self-center"},null,-1),Xt={class:"flex justify-center"},es={class:"col-span-12 md:col-span-2 gap-5"},ts={class:"flex flex-col gap-5"},ss=e("a",{href:"/"},"Dota 2",-1),as=p({__name:"index",setup(a){const t=[{id:0,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:w,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!0,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:1,t1:"Dota Geniuses",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:g,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8401.webp",type:"BO3"},{id:2,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:y,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e7632.webp",type:"BO3"},{id:3,t1:"Dota Geniuses",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:f,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:4,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:w,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:5,t1:"Dota Geniuses",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:g,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8401.webp",type:"BO3"},{id:6,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:y,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e7632.webp",type:"BO3"},{id:7,t1:"Dota Geniuses",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:f,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:8,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:w,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:9,t1:"Dota Geniuses",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:g,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8401.webp",type:"BO3"},{id:10,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:y,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e7632.webp",type:"BO3"},{id:11,t1:"Dota Geniuses",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:f,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:12,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:w,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:14,t1:"Dota Geniuses",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:g,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8401.webp",type:"BO3"},{id:14,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:y,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e7632.webp",type:"BO3"},{id:15,t1:"Dota Geniuses",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:f,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"}],i={name:"ZywOo's first Major MVP, dupreeh and zonic's 5th Major win, and other storilines closed at BLAST Paris Major 2023",id:0,src:"https://escorenews.com/media/news/_468/n53609.webp",game:w},o=M(!1),r=()=>{o.value=!o.value};return(l,_)=>{const S=Q,A=de,F=ue,N=Ie,R=Xe,G=at,H=_t,P=wt,V=$t;return s(),n("div",Yt,[e("div",Kt,[e("div",qt,[e("div",Jt,[c(S),c(A),c(F),c(G,{header:"Best matches of the day"},{"header-extra":v(()=>[e("a",Qt,[c(m(Ct),{class:"w-6",filled:"",fontControlled:!1})]),Wt,e("a",{onClick:_[0]||(_[0]=T=>r()),class:k([m(o)?"text-white":"","tooltip p-2 text-secondary hover:text-white hover:cursor-pointer"]),"data-tip":"Show the score"},[c(m(jt),{class:"w-6",filled:"",fontControlled:!1})],2),Zt,c(N)]),default:v(()=>[(s(),n(b,null,x(t,(T,os)=>c(R,{match:T},null,8,["match"])),64))]),_:1}),e("div",Xt,[c(H)]),c(Ut)])]),e("div",es,[e("div",ts,[c(P,null,{"header-extra":v(()=>[L(" Stream and video, teams and players, statistics and analytics ")]),default:v(()=>[L(" On GT you can find all "),ss,L(" and CS:GO matches, watch streams and videos, look for detailed statistics on the teams, players and games, make predictions for the games and sell subscriptions for them. Follow Esports with GT! ")]),_:1}),c(G,{header:"News"},{"header-extra":v(()=>[c(N,{isCompact:!0})]),default:v(()=>[c(V,{data:i})]),_:1})])])])])}}});export{as as default};
