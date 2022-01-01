import{d as u,s as b,r as d,c as y,o as p,a as N,b as _,e as m,f as r,F as x,t as h,g as P,h as A,i as S,j as w,k as T,l as j,m as F,n as I,p as L,q as k,u as H,T as M,P as D}from"./vendor.12f085c8.js";const O=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};O();var l=(o,n)=>{const s=o.__vccOpts||o;for(const[a,e]of n)s[a]=e;return s};const B=u({name:"Navbar",components:{Menu:b},setup(){return{items:[{icon:"pi pi-home",label:"Dashboard",to:"/"},{icon:"pi pi-home",label:"Projects",to:"/projects"},{icon:"pi pi-home",label:"Project Updates",to:"/"},{icon:"pi pi-home",label:"Investments",to:"/"},{icon:"pi pi-home",label:"Users",to:"/"},{icon:"pi pi-home",label:"Profile",to:"/"}]}}});function E(o,n,s,a,e,t){const i=d("Menu");return p(),y(i,{class:"navbar",model:o.items},null,8,["model"])}var V=l(B,[["render",E],["__scopeId","data-v-41458b80"]]);const q=u({name:"App",components:{Navbar:V,Toast:N}}),C={class:"grid md:grid-cols-9 h-full my-4"},U={class:"md:col-span-2 h-full"},W={class:"mx-4 h-full"},K={class:"md:col-span-7"},R={class:"mx-4"};function z(o,n,s,a,e,t){const i=d("Toast"),v=d("Navbar"),g=d("router-view");return p(),_(x,null,[m(i),r("div",C,[r("div",U,[r("div",W,[m(v)])]),r("div",K,[r("div",R,[m(g)])])])],64)}var G=l(q,[["render",z]]);const J={name:"404.vue"},Q=r("h1",null,"Not Found",-1),X=[Q];function Y(o,n,s,a,e,t){return p(),_("div",null,X)}var Z=l(J,[["render",Y]]);const ee=u({name:"PageHeading",props:{title:String,subtitle:String}}),te={class:"page-heading mb-4"},oe={class:"text-3xl"},ne={class:"text-gray-600"};function se(o,n,s,a,e,t){return p(),_("div",te,[r("h1",oe,h(o.title),1),r("div",ne,h(o.subtitle),1)])}var re=l(ee,[["render",se]]);const ce=u({name:"Home",components:{PageHeading:re}}),ae={class:"home"},ie=r("h1",null,"Welcome to the home page",-1),pe=r("p",null,"Nothing here yet",-1);function le(o,n,s,a,e,t){const i=d("page-heading");return p(),_("div",ae,[m(i,{title:"Dashboard"}),ie,pe])}var de=l(ce,[["render",le]]);const _e={},ue={class:"about"},me=r("h1",null,"This is an about page",-1),he=[me];function fe(o,n){return p(),_("div",ue,he)}var f=l(_e,[["render",fe]]);const $e=[{path:"/",name:"Dashboard",component:de},{path:"/projects",name:"Projects",component:f},{path:"/login",name:"Login",component:f},{path:"/:pathMatch(.*)*",component:Z}],$=P({history:A("http://tritechagric.local/wp-content/plugins/tritech-agric-addons/admin/dist/"),routes:$e});$.beforeEach((o,n,s)=>(console.log("route changed"),s()));const ve=Symbol(),ge=S({state:{appName:"Tritech Agric"},mutations:{},actions:{},plugins:[w()]});const c=T(G);c.component("FontAwesomeIcon",j);c.component("InputText",F);c.component("InputNumber",I);c.component("MultiSelect",L);c.component("Dropdown",k);c.component("ProgressSpinner",H);c.use(ge,ve);c.use($);c.use(M);c.use(D);c.mount("#app");
