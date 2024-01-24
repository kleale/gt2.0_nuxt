import{a as O,_ as S}from"./Gamelinks.vue.14b0ed46.js";import{_ as y}from"./Row.182d8e93.js";import{_ as E}from"./Blocklayout.724130af.js";import{d as x,r as A,v as p,O as B,B as _,y as e,A as o,F as m,G as N,x as h,H as L,I as G,J as s,K as n,L as a,M as c,_ as k,D as C,E as z,C as w}from"./entry.04ccc4cc.js";import{I as D}from"./refresh.54fe326b.js";import{I as M}from"./score.9b84b48e.js";const F={class:"tooltip p-1 text-secondary hover:text-white hover:cursor-pointer","data-tip":"Refresh"},T=e("div",{class:"divider divider-horizontal m-0 h-6 self-center"},null,-1),$=e("div",{class:"divider divider-horizontal m-0 h-6 self-center"},null,-1),R={class:"flex justify-start p-2"},te=x({__name:"Block",setup(t){const d=[{id:0,t1:"Astralis",t1Icon:"/img/none/teamNoLogo.svg",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:s,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!0,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"/img/none/tourNoLogo.svg",type:"BO3"},{id:1,t1:"Dota Geniuses",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:n,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8401.webp",type:"BO3"},{id:2,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:a,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e7632.webp",type:"BO3"},{id:3,t1:"Dota Geniuses",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:c,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:4,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:s,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:5,t1:"Dota Geniuses",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:n,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8401.webp",type:"BO3"},{id:6,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:a,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e7632.webp",type:"BO3"},{id:7,t1:"Dota Geniuses",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:c,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:8,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:s,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:9,t1:"Dota Geniuses",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:n,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8401.webp",type:"BO3"},{id:10,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:a,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e7632.webp",type:"BO3"},{id:11,t1:"Dota Geniuses",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:c,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:12,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:s,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"},{id:14,t1:"Dota Geniuses",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:n,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8401.webp",type:"BO3"},{id:14,t1:"Astralis",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"The Mongolz",t2Icon:"https://escorenews.com/media/logo/_60/t5270.webp",game:a,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:1,event_id:1,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e7632.webp",type:"BO3"},{id:15,t1:"Dota Geniuses",t1Icon:"https://escorenews.com/media/logo/_60/t7169.webp",t2:"Flawless Goblins",t2Icon:"https://escorenews.com/media/logo/_60/t56255.webp",game:c,gameId:"1",score:"1:0",date:"Oct 14",time:"11:34",isLive:!1,map:2,event_id:2,eventName:"ESEA Open Season 47",eIcon:"https://escorenews.com/media/event/_60/e8382.webp",type:"BO3"}],i=A(!1),g=()=>{i.value=!i.value};return(K,r)=>{const I=O,b=y,f=S,u=E;return p(),B(u,{header:"Best matches of the day"},{"header-extra":_(()=>[e("a",F,[o(m(D),{class:"w-6",filled:"",fontControlled:!1})]),T,e("a",{onClick:r[0]||(r[0]=l=>g()),class:N([m(i)?"text-white":"","tooltip p-1 text-secondary hover:text-white hover:cursor-pointer"]),"data-tip":"Show the score"},[o(m(M),{class:"w-6",filled:"",fontControlled:!1})],2),$,o(I)]),default:_(()=>[(p(),h(L,null,G(d,(l,P)=>o(b,{match:l},null,8,["match"])),64)),e("div",R,[o(f)])]),_:1})}}});const V={},v=t=>(C("data-v-8483d3e6"),t=t(),z(),t),j={class:"signupBlock flex flex-col gap-6 p-5 md:flex-row md:gap-32 md:p-10"},U=v(()=>e("div",{class:"flex flex-col gap-6"},[e("h2",null,[w("Sign up and get the opportunity to make money on your tips."),e("br"),w(" Check your knowledge in eSports!")]),e("p",null,"Dota 2, released in 2011, quickly became a worthy successor to DotA AllStars, WarCraft III custom map, not just in its player base, but in terms of esports. It’s one of the most popular esports titles, with millions of fans and teams. Esports dota 2 is an International series of events known worldwide. It was the first esports event with a million dollars in prize money. Nowadays, watching dota 2 esports live is a breathtaking activity full of tension and vivid emotions.")],-1)),q=v(()=>e("div",{class:"flex md:flex-row md:px-16 items-center"},[e("button",{class:"btn btn-lg rounded-full text-primary btn-outline hover:bg-primary hover:border-primary signupbutton"},"Sign up")],-1)),H=[U,q];function J(t,d){return p(),h("div",j,H)}const oe=k(V,[["render",J],["__scopeId","data-v-8483d3e6"]]);export{oe as S,te as _};