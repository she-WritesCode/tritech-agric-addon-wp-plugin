(function(t){function e(e){for(var r,l,s=e[0],a=e[1],i=e[2],j=0,b=[];j<s.length;j++)l=s[j],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&b.push(o[l][0]),o[l]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);d&&d(e);while(b.length)b.shift()();return n.push.apply(n,i||[]),c()}function c(){for(var t,e=0;e<n.length;e++){for(var c=n[e],r=!0,s=1;s<c.length;s++){var a=c[s];0!==o[a]&&(r=!1)}r&&(n.splice(e--,1),t=l(l.s=c[0]))}return t}var r={},o={app:0},n=[];function l(e){if(r[e])return r[e].exports;var c=r[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=t,l.c=r,l.d=function(t,e,c){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(c,r,function(e){return t[e]}.bind(null,r));return c},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var d=a;n.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"1a8e":function(t,e,c){"use strict";c("636d")},"56d7":function(t,e,c){"use strict";c.r(e);c("e623"),c("e379"),c("5dc8"),c("37e1");var r=c("7a23"),o={class:"list-projects py-6 px-6"},n={key:0},l={class:"grid gap-6 my-8"},s={key:1,class:"flex flex-col justify-center items-center py-28 px-10"},a=Object(r["g"])("img",{class:"w-32 mb-4",alt:"No investments yet",src:"https://dashboard.agric.tritech.com.ng/img/box.1cace0d8.png"},null,-1),i=Object(r["g"])("div",{class:"text-xl"},"No projects yet, check back later",-1);function d(t,e,c,d,j,b){var u=Object(r["y"])("ProjectCard");return Object(r["q"])(),Object(r["d"])("div",o,[j.projects.length?(Object(r["q"])(),Object(r["d"])("div",n,[Object(r["g"])("div",l,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(j.projects,(function(t){return Object(r["q"])(),Object(r["d"])("div",{class:"project-item",key:t.id},[Object(r["g"])(u,{project:t},null,8,["project"])])})),128))])])):(Object(r["q"])(),Object(r["d"])("div",s,[a,i]))])}var j=c("1da1"),b=(c("96cf"),c("a15b"),c("d81d"),c("99af"),c("b680"),Object(r["I"])("data-v-7f8d29bb"));Object(r["t"])("data-v-7f8d29bb");var u={class:""},p={class:"shadow-xl bg-white rounded-2xl hover:shadow-2xl"},g={class:"grid md:grid-cols-3 gap-0"},O={class:"md:col-span-1 bg-primary-300 rounded-t-2xl md:rounded-tr-none md:rounded-tl-2xl relative"},v={class:"md:col-span-2 py-6 px-4"},m={key:0,class:"text-xs text-gray-500"},f={class:"font-semibold text-xl"},x={key:1,class:"text-base text-gray-500"},h={class:"text-2xl font-black text-primary-500 my-2"},y={class:"mb-4 text-lg"},w={class:"text-primary-600"},B=Object(r["f"])(" returns in "),S={class:"text-primary-600"},P=Object(r["f"])(" month(s) "),q={class:"grid grid-cols-2 gap-4 text-lg mb-4"},k={class:"font-semibold"},C=Object(r["g"])("div",{class:"text-base"},"Slots Available",-1),_={class:"font-semibold"},I=Object(r["g"])("div",{class:"text-base"},"Per Slot",-1),N={class:"mt-2 flex flex-wrap gap-3"},V={key:0,class:"text-sm uppercase"},M={class:"flex flex-wrap flex-col-reverse justify-center md:flex-row md:justify-between items-center font-medium pt-1 pb-2 px-2"},A=Object(r["f"])(" OF "),D=Object(r["f"])(" FUNDED BY "),F=Object(r["f"])(" INVESTMENT(S) ");Object(r["r"])();var T=b((function(t,e,c,o,n,l){var s,a,i,d,j,T,E,U,R,H,L,G,Y=Object(r["y"])("ProgressBar");return Object(r["q"])(),Object(r["d"])("div",u,[Object(r["g"])("div",p,[Object(r["g"])("div",g,[Object(r["g"])("div",O,[Object(r["g"])("img",{class:"object-cover w-full h-full rounded-t-2xl md:rounded-tr-none md:rounded-tl-2xl object-center",src:null===(s=t.project)||void 0===s?void 0:s.image,alt:null===(a=t.project)||void 0===a?void 0:a.title},null,8,["src","alt"])]),Object(r["g"])("div",v,[null!==(i=t.project)&&void 0!==i&&i.categories?(Object(r["q"])(),Object(r["d"])("div",m,Object(r["B"])(null===(d=t.project)||void 0===d?void 0:d.categories.map((function(t){return t.title})).join(",")),1)):Object(r["e"])("",!0),Object(r["g"])("a",{class:"cursor-pointer hover:text-primary-700",href:"".concat(t.wordpressUrl,"/").concat(t.project.slug)},[Object(r["g"])("div",f,Object(r["B"])(null===(j=t.project)||void 0===j?void 0:j.title),1)],8,["href"]),null!==(T=t.project)&&void 0!==T&&T.categories?(Object(r["q"])(),Object(r["d"])("div",x,Object(r["B"])(null===(E=t.project)||void 0===E?void 0:E.location),1)):Object(r["e"])("",!0),Object(r["g"])("div",h,Object(r["B"])(t.toCurrency(null===(U=t.project)||void 0===U?void 0:U.fee)),1),Object(r["g"])("div",y,[Object(r["g"])("span",w,Object(r["B"])(null===(R=t.project)||void 0===R?void 0:R.roi)+"%",1),B,Object(r["g"])("span",S,Object(r["B"])(null===(H=t.project)||void 0===H?void 0:H.duration),1),P]),Object(r["g"])("div",q,[Object(r["g"])("div",null,[Object(r["g"])("div",k,Object(r["B"])(null===(L=t.project)||void 0===L?void 0:L.availableSlots),1),C]),Object(r["g"])("div",null,[Object(r["g"])("div",_,Object(r["B"])(null===(G=t.project)||void 0===G?void 0:G.slotsCapacity),1),I])]),Object(r["g"])("div",N,[Object(r["g"])("a",{href:"".concat(t.wordpressUrl,"/").concat(t.project.slug),class:"cursor-pointer bg-primary-500 border-2 border-primary-500 px-3 py-2 rounded-full text-sm text-white font-bold shadow hover:shadow-lg hover:border-primary-600 focus:text-primary-500 hover:bg-primary-600"},"View Project",8,["href"])])])]),t.progress>0?(Object(r["q"])(),Object(r["d"])("div",V,[Object(r["g"])(Y,{value:t.progress,class:"rounded-b-2xl h-24 md:h-6"},{default:b((function(){return[Object(r["g"])("div",M,[Object(r["g"])("div",null,[Object(r["g"])("b",null,Object(r["B"])(t.toCurrency(t.current)),1),A,Object(r["g"])("b",null,Object(r["B"])(t.toCurrency(t.total)),1),D,Object(r["g"])("b",null,Object(r["B"])(t.project.investments.length),1),F]),Object(r["g"])("div",null,Object(r["B"])(t.progress.toFixed(2))+"%",1)])]})),_:1},8,["value"])])):Object(r["e"])("",!0)])])}));function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t.toLocaleString("en-NG",{currency:"NGN",style:"currency"})}var U=c("c045"),R=Object(r["h"])({name:"ProjectCard",components:{ProgressBar:U["a"]},props:{project:{type:Object,required:!0}},computed:{progress(){return(this.project.totalSlots-this.project.availableSlots)/this.project.totalSlots*100},total(){return this.project.totalSlots*this.project.fee},current(){return(this.project.totalSlots-this.project.availableSlots)*this.project.fee}},setup(){const t="https://agric.tritech.com.ng/projects-to-fund/#";return{toCurrency:E,wordpressUrl:t}}});c("6bee");R.render=T,R.__scopeId="data-v-7f8d29bb";var H=R,L=c("bc3a"),G=c.n(L),Y="https://tritech-agric.herokuapp.com",$={name:"App",components:{ProjectCard:H},data:function(){return{limit:-1,xPage:1,projects:[],meta:{total:0,count:0,pageCount:0,page:0}}},computed:{query:function(){return"join=investments&join=categories&join=updates&sort=id,ASC"}},methods:{getProjects:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("".concat(Y,"/projects?").concat(t.query));case 2:c=e.sent,t.projects=c.data;case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getProjects().then((function(){return console.log("done")}))}};c("e466");$.render=d;var J=$,K=Object(r["I"])("data-v-0d072e0a"),W=K((function(t,e,c,o,n,l){var s=Object(r["y"])("router-view");return Object(r["q"])(),Object(r["d"])(s)})),z=Object(r["h"])({name:"ProjectDetailsApp",mounted:function(){console.log(this.$route)}});z.render=W,z.__scopeId="data-v-0d072e0a";var Q=z,X=c("6c02"),Z={class:"list-projects py-6 px-6"},tt={key:0},et={class:"grid gap-6 my-8"},ct={class:"text-center w-full my-8 text-lg"},rt={key:1,class:"flex flex-col justify-center items-center py-28 px-10"},ot=Object(r["g"])("img",{class:"w-32 mb-4",alt:"No investments yet",src:"https://dashboard.agric.tritech.com.ng/img/box.1cace0d8.png"},null,-1),nt=Object(r["g"])("div",{class:"text-xl"},"No projects yet, check back later",-1);function lt(t,e,c,o,n,l){var s=Object(r["y"])("ProjectCard");return Object(r["q"])(),Object(r["d"])("div",Z,[n.projects.length?(Object(r["q"])(),Object(r["d"])("div",tt,[Object(r["g"])("div",et,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(n.projects,(function(t){return Object(r["q"])(),Object(r["d"])("div",{class:"project-item",key:t.id},[Object(r["g"])(s,{project:t},null,8,["project"])])})),128))]),Object(r["g"])("div",ct,[Object(r["g"])("div",null,"Showing "+Object(r["B"])(n.projects.length)+" of "+Object(r["B"])(n.projects.length)+" Project(s)",1)])])):(Object(r["q"])(),Object(r["d"])("div",rt,[ot,nt]))])}var st=Object(r["I"])("data-v-0897b85c");Object(r["t"])("data-v-0897b85c");var at={class:""},it={class:"shadow-xl bg-white rounded-2xl hover:shadow-2xl"},dt={class:"grid md:grid-cols-3 gap-0"},jt={class:"md:col-span-1 bg-primary-300 rounded-t-2xl md:rounded-tr-none md:rounded-tl-2xl relative"},bt={class:"md:col-span-2 py-6 px-4"},ut={key:0,class:"text-xs text-gray-500"},pt={class:"cursor-pointer hover:text-primary-700",target:"_blank"},gt={class:"font-semibold text-xl"},Ot={key:1,class:"text-base text-gray-500"},vt={class:"text-2xl font-black text-primary-500 my-2"},mt={class:"mb-4 text-lg"},ft={class:"text-primary-600"},xt=Object(r["f"])(" returns in "),ht={class:"text-primary-600"},yt=Object(r["f"])(" month(s) "),wt={class:"grid grid-cols-2 gap-4 text-lg mb-4"},Bt={class:"font-semibold"},St=Object(r["g"])("div",{class:"text-base"},"Slots Available",-1),Pt={class:"font-semibold"},qt=Object(r["g"])("div",{class:"text-base"},"Per Slot",-1),kt={class:"mt-2 flex flex-wrap gap-3"},Ct=Object(r["g"])("a",{class:"cursor-pointer bg-primary-500 border-2 border-primary-500 px-3 py-2 rounded-full text-sm text-white font-bold shadow hover:shadow-lg hover:border-primary-600 focus:text-primary-500 hover:bg-primary-600"},"View Project",-1),_t={key:0,class:"text-sm uppercase"},It={class:"flex flex-wrap flex-col-reverse justify-center md:flex-row md:justify-between items-center font-medium pt-1 pb-2 px-2"},Nt=Object(r["f"])(" OF "),Vt=Object(r["f"])(" FUNDED BY "),Mt=Object(r["f"])(" INVESTMENT(S) ");Object(r["r"])();var At=st((function(t,e,c,o,n,l){var s,a,i,d,j,b,u,p,g,O,v,m=Object(r["y"])("router-link"),f=Object(r["y"])("ProgressBar");return Object(r["q"])(),Object(r["d"])("div",at,[Object(r["g"])("div",it,[Object(r["g"])("div",dt,[Object(r["g"])("div",jt,[Object(r["g"])("img",{class:"object-cover w-full h-full rounded-t-2xl md:rounded-tr-none md:rounded-tl-2xl object-center",src:null===(s=t.project)||void 0===s?void 0:s.image,alt:null===(a=t.project)||void 0===a?void 0:a.title},null,8,["src","alt"])]),Object(r["g"])("div",bt,[null!==(i=t.project)&&void 0!==i&&i.categories?(Object(r["q"])(),Object(r["d"])("div",ut,Object(r["B"])(null===(d=t.project)||void 0===d?void 0:d.categories.map((function(t){return t.title})).join(",")),1)):Object(r["e"])("",!0),Object(r["g"])(m,{to:{name:"ProjectDetails",params:{slug:t.project.slug}}},{default:st((function(){var e;return[Object(r["g"])("a",pt,[Object(r["g"])("div",gt,Object(r["B"])(null===(e=t.project)||void 0===e?void 0:e.title),1)])]})),_:1},8,["to"]),null!==(j=t.project)&&void 0!==j&&j.categories?(Object(r["q"])(),Object(r["d"])("div",Ot,Object(r["B"])(null===(b=t.project)||void 0===b?void 0:b.location),1)):Object(r["e"])("",!0),Object(r["g"])("div",vt,Object(r["B"])(t.toCurrency(null===(u=t.project)||void 0===u?void 0:u.fee)),1),Object(r["g"])("div",mt,[Object(r["g"])("span",ft,Object(r["B"])(null===(p=t.project)||void 0===p?void 0:p.roi)+"%",1),xt,Object(r["g"])("span",ht,Object(r["B"])(null===(g=t.project)||void 0===g?void 0:g.duration),1),yt]),Object(r["g"])("div",wt,[Object(r["g"])("div",null,[Object(r["g"])("div",Bt,Object(r["B"])(null===(O=t.project)||void 0===O?void 0:O.availableSlots),1),St]),Object(r["g"])("div",null,[Object(r["g"])("div",Pt,Object(r["B"])(null===(v=t.project)||void 0===v?void 0:v.slotsCapacity),1),qt])]),Object(r["g"])("div",kt,[Object(r["g"])(m,{to:{name:"ProjectDetails",params:{slug:t.project.slug}}},{default:st((function(){return[Ct]})),_:1},8,["to"])])])]),t.progress>0?(Object(r["q"])(),Object(r["d"])("div",_t,[Object(r["g"])(f,{value:t.progress,class:"rounded-b-2xl h-24 md:h-6"},{default:st((function(){return[Object(r["g"])("div",It,[Object(r["g"])("div",null,[Object(r["g"])("b",null,Object(r["B"])(t.toCurrency(t.current)),1),Nt,Object(r["g"])("b",null,Object(r["B"])(t.toCurrency(t.total)),1),Vt,Object(r["g"])("b",null,Object(r["B"])(t.project.investments.length),1),Mt]),Object(r["g"])("div",null,Object(r["B"])(t.progress.toFixed(2))+"%",1)])]})),_:1},8,["value"])])):Object(r["e"])("",!0)])])})),Dt=Object(r["h"])({name:"ProjectCard",components:{ProgressBar:U["a"]},props:{project:{type:Object,required:!0}},computed:{progress(){return(this.project.totalSlots-this.project.availableSlots)/this.project.totalSlots*100},total(){return this.project.totalSlots*this.project.fee},current(){return(this.project.totalSlots-this.project.availableSlots)*this.project.fee}},setup(){return{toCurrency:E}}});c("1a8e");Dt.render=At,Dt.__scopeId="data-v-0897b85c";var Ft=Dt,Tt="https://tritech-agric.herokuapp.com",Et={name:"App",components:{ProjectCard:Ft},data:function(){return{limit:-1,xPage:1,projects:[],meta:{total:0,count:0,pageCount:0,page:0}}},computed:{query:function(){return"join=investments&join=categories&join=updates&sort=id,ASC"}},methods:{getProjects:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("".concat(Tt,"/projects?").concat(t.query));case 2:c=e.sent,t.projects=c.data;case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getProjects().then((function(){return console.log("done")}))}};Et.render=lt;var Ut=Et,Rt=(c("a4d3"),c("e01a"),{key:0,class:"w-full"}),Ht=Object(r["g"])("div",{class:"flex flex-col justify-center items-center py-28 px-10"},[Object(r["g"])("img",{class:"w-32 mb-4",alt:"No investments yet",src:"https://dashboard.agric.tritech.com.ng/img/box.1cace0d8.png"}),Object(r["g"])("div",{class:"text-xl"},"Project not found")],-1),Lt={key:1,class:"w-full"},Gt={class:""},Yt={class:""},$t={class:"mb-8 rounded-2xl bg-white shadow-lg"},Jt={class:"grid md:grid-cols-2 gap-8"},Kt={class:""},Wt={class:"px-4 pb-4 md:py-8 md:pr-4 md:pl-0"},zt={class:"text-primary-500 font-semibold text-2xl"},Qt={class:"text-2xl leading-tight font-black mb-2"},Xt={class:"mb-4 text-lg"},Zt={class:"text-primary-600"},te=Object(r["f"])(" returns in "),ee={class:"text-primary-600"},ce=Object(r["f"])(" month(s) "),re={class:"prose prose-lg text-base"},oe={class:"my-2"},ne={class:"mr-2"},le=Object(r["f"])(" Insured by: "),se={class:"my-2"},ae={class:"mr-2"},ie=Object(r["f"])(" Project Location: "),de={class:"my-2"},je={class:"mr-2"},be=Object(r["f"])(" Slot Capacity: "),ue={class:"flex justify-between"},pe={class:"bg-primary-100 text-primary-600 p-2 rounded mb-4"},ge=Object(r["g"])("span",null,null,-1),Oe={class:"mt-4 p-formgroup-inline"},ve={class:"p-field"},me={class:"p-field"},fe={class:"text-sm uppercase bg-white shadow-lg mb-8"},xe={class:"flex flex-wrap flex-col-reverse md:flex-row md:justify-between font-medium pt-1 pb-2 px-2"},he=Object(r["f"])(" OF "),ye=Object(r["f"])(" FUNDED BY "),we=Object(r["f"])(" INVESTMENT(S) "),Be={class:"mb-8 rounded-2xl bg-white shadow-lg py-8 px-6"},Se={class:"mb-8 rounded-2xl bg-white shadow-lg py-8 px-6"},Pe=Object(r["g"])("h3",{class:"text-2xl mb-4"},"Details",-1),qe={class:"content"},ke={class:"text-center w-full text-lg"},Ce=Object(r["f"])("See more projects to fund ");function _e(t,e,c,o,n,l){var s=Object(r["y"])("PageHeading"),a=Object(r["y"])("FontAwesomeIcon"),i=Object(r["y"])("Markdown"),d=Object(r["y"])("InputNumber"),j=Object(r["y"])("Button"),b=Object(r["y"])("ProgressBar"),u=Object(r["y"])("ProfitSimulation"),p=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["d"])(r["a"],null,[t.project?(Object(r["q"])(),Object(r["d"])("section",Lt,[Object(r["g"])(s,{title:t.project.title,subtitle:"",class:"mb-16"},null,8,["title"]),Object(r["g"])("div",Gt,[Object(r["g"])("div",Yt,[Object(r["g"])("div",$t,[Object(r["g"])("div",Jt,[Object(r["g"])("div",Kt,[Object(r["g"])("img",{src:t.project.image,class:"w-full shadow h-full object-cover object-center rounded-t-2xl md:rounded-t-none md:rounded-l-2xl",alt:t.project.title},null,8,["src","alt"])]),Object(r["g"])("div",Wt,[Object(r["g"])("div",zt,Object(r["B"])(t.toCurrency(t.project.fee)),1),Object(r["g"])("div",Qt,Object(r["B"])(t.project.title),1),Object(r["g"])("div",Xt,[Object(r["g"])("span",Zt,Object(r["B"])(t.project.roi)+"%",1),te,Object(r["g"])("span",ee,Object(r["B"])(t.project.duration),1),ce]),Object(r["g"])("div",re,[Object(r["g"])("div",null,[Object(r["g"])("div",oe,[Object(r["g"])("span",ne,[Object(r["g"])(a,{icon:t.faShieldAlt},null,8,["icon"])]),le,Object(r["g"])("b",null,Object(r["B"])(t.project.insuredBy),1)]),Object(r["g"])("div",se,[Object(r["g"])("span",ae,[Object(r["g"])(a,{icon:t.faMapMarkedAlt},null,8,["icon"])]),ie,Object(r["g"])("b",null,Object(r["B"])(t.project.location),1)]),Object(r["g"])("div",de,[Object(r["g"])("span",je,[Object(r["g"])(a,{icon:t.faWarehouse},null,8,["icon"])]),be,Object(r["g"])("b",null,Object(r["B"])(t.project.slotsCapacity),1)])]),Object(r["g"])("div",null,[Object(r["g"])(i,{source:t.project.shortDescription},null,8,["source"])])]),Object(r["g"])("span",ue,[Object(r["g"])("span",pe,Object(r["B"])(t.project.availableSlots)+" unit(s) left",1),ge]),Object(r["g"])("div",Oe,[Object(r["g"])("div",ve,[Object(r["g"])(d,{class:"project-quantity",modelValue:t.quantity,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.quantity=e}),onValueChange:"{(e) => setValue(e.value)}",step:1,min:1,max:t.project.availableSlots,showButtons:!0},null,8,["modelValue","max"])]),Object(r["g"])("div",me,[Object(r["g"])(j,{icon:"pi pi-chevron-right",iconPos:"right",onClick:t.fundProject,label:"Fund Project",class:"btn rounded-3xl mt-2 font-semibold"},null,8,["onClick"])])])])])]),Object(r["g"])("div",fe,[Object(r["g"])(b,{value:t.progress,class:"h-20 md:h-6"},{default:Object(r["G"])((function(){return[Object(r["g"])("div",xe,[Object(r["g"])("div",null,[Object(r["g"])("b",null,Object(r["B"])(t.toCurrency(t.current)),1),he,Object(r["g"])("b",null,Object(r["B"])(t.toCurrency(t.total)),1),ye,Object(r["g"])("b",null,Object(r["B"])(t.project.investments.length),1),we]),Object(r["g"])("div",null,Object(r["B"])(t.progress.toFixed(2))+"%",1)])]})),_:1},8,["value"])]),Object(r["g"])("div",Be,[Object(r["g"])(u,{project:t.project,quantity:t.quantity},null,8,["project","quantity"])]),Object(r["g"])("div",Se,[Pe,Object(r["g"])("div",qe,[Object(r["g"])(i,{source:t.project.description},null,8,["source"])])])])])])):(Object(r["q"])(),Object(r["d"])("section",Rt,[Ht])),Object(r["g"])("div",ke,[Object(r["g"])(p,{to:"/"},{default:Object(r["G"])((function(){return[Object(r["g"])("a",null,[Object(r["g"])(a,{icon:t.faArrowLeft,class:"mr-4"},null,8,["icon"]),Ce])]})),_:1})])],64)}var Ie=c("bb57"),Ne=c("3822"),Ve=c("c074"),Me=c("ad3d"),Ae=Object(r["I"])("data-v-116bfe6e");Object(r["t"])("data-v-116bfe6e");var De={class:"grid md:grid-cols-5 gap-6"},Fe={class:"md:col-span-3 md:p-4"},Te={class:""},Ee={class:"slots mb-8"},Ue={class:"flex justify-between items-center text-lg md:text-xl mb-6"},Re={class:""},He=Object(r["g"])("label",{for:"slots"},"Slots",-1),Le={class:""},Ge={class:"text-primary"},Ye=Object(r["g"])("div",{class:"text-primary text-sm text-gray-400 text-right -mt-2"},"Total Investment",-1),$e={class:"flex justify-between text-gray-400 mt-3"},Je=Object(r["g"])("span",null,"1",-1),Ke={class:"others grid grid-cols-2 gap-8"},We={class:"flex flex-col items-center"},ze=Object(r["g"])("label",{for:"roi",class:"md:text-lg"},"Returns",-1),Qe={class:"flex flex-col items-center"},Xe=Object(r["g"])("label",{for:"duration",class:"md:text-lg"},"Month(s)",-1),Ze={class:"md:col-span-2 text-center md:text-left md:p-4"},tc={class:""},ec={class:"flex flex-col justify-center"},cc={class:"return mb-8"},rc=Object(r["g"])("div",{class:"text-xl md:text-2xl"},"Total Profit",-1),oc={class:"text-3xl md:text-4xl"},nc={class:"invest"},lc={class:"p-field"};Object(r["r"])();var sc=Ae((function(t,e,c,o,n,l){var s=Object(r["y"])("Slider"),a=Object(r["y"])("Knob"),i=Object(r["y"])("Button");return Object(r["q"])(),Object(r["d"])("div",null,[Object(r["g"])("div",De,[Object(r["g"])("div",Fe,[Object(r["g"])("div",Te,[Object(r["g"])("div",Ee,[Object(r["g"])("div",Ue,[Object(r["g"])("div",Re,[Object(r["H"])(Object(r["g"])("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.slots=e}),min:1,max:t.project.availableSlots,class:"p-inputtext p-component p-filled w-20 md:w-28 p-inputnumber-input py-1 mr-2"},null,8,["max"]),[[r["E"],t.slots]]),He]),Object(r["g"])("div",Le,[Object(r["g"])("div",Ge,Object(r["B"])(t.toCurrency(t.totalInvestment)),1),Ye])]),Object(r["g"])(s,{id:"slots",modelValue:t.slots,"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.slots=e}),min:1,max:t.project.availableSlots},null,8,["modelValue","max"]),Object(r["g"])("div",$e,[Je,Object(r["g"])("span",null,Object(r["B"])(t.project.availableSlots),1)])]),Object(r["g"])("div",Ke,[Object(r["g"])("div",We,[Object(r["g"])(a,{id:"roi",modelValue:t.project.roi,valueTemplate:"{value}%",readonly:"",min:0,max:100},null,8,["modelValue"]),ze]),Object(r["g"])("div",Qe,[Object(r["g"])(a,{id:"duration",modelValue:+t.project.duration,readonly:"",min:1,max:12},null,8,["modelValue"]),Xe])])])]),Object(r["g"])("div",Ze,[Object(r["g"])("div",tc,[Object(r["g"])("div",ec,[Object(r["g"])("div",cc,[rc,Object(r["g"])("div",oc,Object(r["B"])(t.toCurrency(t.profit)),1)]),Object(r["g"])("div",nc,[Object(r["g"])("div",lc,[Object(r["g"])(i,{icon:"pi pi-chevron-right",iconPos:"right",onclick:"",label:"Fund Project",class:"rounded-3xl p-button-raised font-semibold md:p-button-lg"})])])])])])])])})),ac=(c("a9e3"),c("60aa")),ic=c("14f2"),dc=Object(r["h"])({name:"ProfitSimulation",props:{project:{type:Object,required:!0},quantity:Number},components:{Knob:ac["a"],Slider:ic["a"],Button:Ie["a"]},data:function(){return{slots:1}},computed:{totalInvestment:function(){var t,e;return this.project?this.slots*(null!==(t=null===(e=this.project)||void 0===e?void 0:e.fee)&&void 0!==t?t:0):0},profit:function(){var t,e;return this.project?this.totalInvestment*(null!==(t=null===(e=this.project)||void 0===e?void 0:e.roi)&&void 0!==t?t:0)/100:0}},methods:{},setup:function(){return{toCurrency:E}}});dc.render=sc,dc.__scopeId="data-v-116bfe6e";var jc=dc,bc=Object(r["I"])("data-v-166e1ea8"),uc=bc((function(t,e,c,o,n,l){return Object(r["q"])(),Object(r["d"])("div",{class:"markdown prose",innerHTML:t.source},null,8,["innerHTML"])})),pc=c("d4cd"),gc=c.n(pc),Oc=Object(r["h"])({name:"Markdown",props:{source:{type:String,required:!0}},data:function(){return{text:""}},mounted:function(){var t=new gc.a;this.text=t.render(this.source)}});Oc.render=uc,Oc.__scopeId="data-v-166e1ea8";var vc=Oc,mc=Object(r["I"])("data-v-c95301a0");Object(r["t"])("data-v-c95301a0");var fc={class:"page-heading mb-4"},xc={class:"text-3xl"},hc={class:"text-gray-600"};Object(r["r"])();var yc=mc((function(t,e,c,o,n,l){return Object(r["q"])(),Object(r["d"])("div",fc,[Object(r["g"])("h1",xc,Object(r["B"])(t.title),1),Object(r["g"])("div",hc,Object(r["B"])(t.subtitle),1)])})),wc=Object(r["h"])({name:"PageHeading",props:["title","subtitle"]});wc.render=yc,wc.__scopeId="data-v-c95301a0";var Bc=wc,Sc="https://tritech-agric.herokuapp.com",Pc=Object(r["h"])({name:"ProjectDetails",components:{PageHeading:Bc,FontAwesomeIcon:Me["a"],Markdown:vc,ProfitSimulation:jc,Button:Ie["a"],InputNumber:Ne["a"],ProgressBar:U["a"]},setup:function(){return{toCurrency:E,faMapMarkedAlt:Ve["b"],faWarehouse:Ve["d"],faShieldAlt:Ve["c"],faArrowLeft:Ve["a"]}},data:function(){return{quantity:1,project:null}},methods:{getProject:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("".concat(Sc,"/projects?").concat(t.query));case 2:c=e.sent,c.data.length>0&&(t.project=c.data[0]);case 4:case"end":return e.stop()}}),e)})))()},fundProject:function(){}},computed:{progress:function(){return(this.project.totalSlots-this.project.availableSlots)/this.project.totalSlots*100},total:function(){return this.project.totalSlots*this.project.fee},current:function(){return(this.project.totalSlots-this.project.availableSlots)*this.project.fee},query:function(){return"filter=slug||$eq||".concat(this.$route.params.slug,"&join=investments&join=categories&join=updates&sort=id,ASC&limit=1")}},mounted:function(){this.getProject().then((function(){return console.log("done")}))}});c("c03a");Pc.render=_e;var qc=Pc,kc=[{path:"/",component:Ut},{path:"/:slug",name:"ProjectDetails",component:qc}],Cc=Object(X["a"])({routes:kc,history:Object(X["b"])()}),_c=Cc;c("08a8"),c("e1ae"),c("4121"),c("a766");Object(r["c"])(J).mount("#ta_projects");var Ic=Object(r["c"])(Q);Ic.use(_c),Ic.mount("#ta_project_details")},"636d":function(t,e,c){},6682:function(t,e,c){},"6bee":function(t,e,c){"use strict";c("ccd1")},a766:function(t,e,c){},a9b3:function(t,e,c){},c03a:function(t,e,c){"use strict";c("a9b3")},ccd1:function(t,e,c){},e466:function(t,e,c){"use strict";c("6682")}});
//# sourceMappingURL=app.d8645553.js.map