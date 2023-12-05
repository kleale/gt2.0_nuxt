import{d as m,t as s,v as n,G as h,H as u,x as e,I as o,K as i,L as f,y as l,J as p,M as v,F as w,N as g,O as b,P as x,Q as y,R as A,S as k,C as S,D as Z,_ as M,T as H,z as C}from"./entry.feeaadf9.js";import{u as $}from"./vue.f36acd1f.32d153e4.js";const B=t=>(S("data-v-ed687a20"),t=t(),Z(),t),P={class:"drawer-side-inner w-72 h-full bg-opacity-90 bg-cyan-950 backdrop-blur transition-shadow duration-100 shadow-sm"},V=B(()=>e("div",{class:"flex border-b-cyan-200 border-b items-center content-center p-4"},[e("div",{class:"flex grow"},[e("label",{class:"swap swap-rotate text-primary"},[e("input",{type:"checkbox",class:"theme-controller",value:"synthwave"}),e("svg",{class:"swap-on fill-current w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"})]),e("svg",{class:"swap-off fill-current w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"})])])]),e("div",{class:"flex items-center content-center gap-3"},[e("button",{class:"btn btn-xs btn-active btn-ghost text-primary font-normal rounded-sm"},"13:00 MSK"),e("div",{class:"dropdown dropdown-end"},[e("div",{role:"button",class:"btn btn-xs btn-active btn-ghost text-primary font-normal rounded-sm"},"RU"),e("ul",{class:"dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-22 hidden"},[e("li",null,[e("a",null,"Ru")]),e("li",null,[e("a",null,"En")])])])])],-1)),L={class:"nav"},N=["href"],D={key:1,class:"collapse collapse-plus rounded-none"},I=["checked"],O=["href"],T={class:"collapse-content p-0"},z={class:"menu menu-vertical lg:menu-horizontal submenu py-2 px-0 m-0"},E=["href"],F=m({__name:"SidePanel",setup(t){const r=[{name:"Home",href:"/",current:!1,logo:v,childrens:[]},{name:"DOTA2",href:"/dota-2",current:!0,logo:w,childrens:[{name:"HUB",href:"/dota-2/",current:!1},{name:"Matches",href:"/dota-2/",current:!1},{name:"Events",href:"/dota-2/",current:!1},{name:"News",href:"/dota-2/",current:!1},{name:"Teams",href:"/dota-2/",current:!1},{name:"Players",href:"/dota-2/",current:!1},{name:"Vods",href:"/dota-2/",current:!1}]},{name:"CS2",href:"/",current:!1,logo:g,childrens:[{name:"HUB",href:"/dota-2/",current:!1},{name:"Matches",href:"/dota-2/",current:!1},{name:"Events",href:"/dota-2/",current:!1},{name:"News",href:"/dota-2/",current:!1},{name:"Teams",href:"/dota-2/",current:!1},{name:"Players",href:"/dota-2/",current:!1},{name:"Vods",href:"/dota-2/",current:!1}]},{name:"LOL",href:"/",current:!1,logo:b,childrens:[]},{name:"Hs",href:"/",current:!1,logo:x,childrens:[]},{name:"Overwatch",href:"/",current:!1,logo:y,childrens:[]},{name:"Fortnite",href:"/",current:!1,logo:A,childrens:[]},{name:"Pubg",href:"/",current:!1,logo:k,childrens:[]}];return(_,c)=>(s(),n("div",P,[V,(s(),n(h,null,u(r,a=>e("div",L,[a.childrens.length?p("",!0):(s(),n("a",{key:a.name,href:a.href,class:o([[a.current?"text-cyan-950":"text-cyan-200"],"nocollapse flex gap-5 px-4 py-3 italic font-black uppercase text-xs hover:bg-cyan-900"])},[(s(),i(f(a.logo),{class:"w-4",fontControlled:!1})),e("span",null,l(a.name),1)],10,N)),a.childrens.length?(s(),n("div",D,[e("input",{type:"radio",name:"my-accordion-1",class:"min-h-0",checked:a.current},null,8,I),e("div",{class:o(["collapse-title font-medium px-4 py-3 min-h-0",[a.current&&"bg-cyan-200 current"]])},[(s(),n("a",{key:a.name,href:a.href,class:o([[a.current?"text-cyan-950":"text-cyan-200"],"flex gap-5 italic font-black uppercase text-sm hover:bg-cyan-800"])},[(s(),i(f(a.logo),{class:"w-4",fontControlled:!1})),e("span",null,l(a.name),1)],10,O))],2),e("div",T,[e("ul",z,[(s(!0),n(h,null,u(a.childrens,d=>(s(),n("li",null,[e("a",{class:"italic font-bold text-white text-xs rounded-none py-2 pl-14 hover:text-primary hover:bg-cyan-900",href:d.href},l(d.name),9,E)]))),256))])])])):p("",!0)])),64))]))}});const R=M(F,[["__scopeId","data-v-ed687a20"]]),U={class:"min-h-full"},G={class:"drawer drawer-end"},K=e("input",{id:"my-drawer",type:"checkbox",class:"drawer-toggle"},null,-1),J={class:"drawer-content"},Q={class:"mx-auto"},j={class:"drawer-side top-16"},q=e("label",{for:"my-drawer","aria-label":"close sidebar",class:"drawer-overlay"},null,-1),Y=m({__name:"default",setup(t){return $({bodyAttrs:{class:"h-full"},htmlAttrs:{class:"h-full"}}),(r,_)=>{const c=R;return s(),n("div",U,[e("div",G,[K,e("div",J,[e("main",Q,[H(r.$slots,"default")])]),e("div",j,[q,C(c)])])])}}});export{Y as default};
