import{_ as g}from"./D89YWmCd.js";import{b as x}from"./DlhhaDuR.js";import{_ as b}from"./D8N9wp3U.js";import{r as d,k as w,h as l,o as i,c,a as t,F as _,I as v,n as y,g as m,b as o,d as u,w as L,t as k,l as M,U as N}from"./Fi5lLTPs.js";const S={class:""},T={class:"grid grid-cols-3 max-md:grid-cols-1 gap-16 bg-white"},j={class:"flex flex-col gap-4"},H={class:"bg-white shadow-md relative min-h-full relative"},V={class:"absolute w-20 bg-white top-6 left-6"},I={class:"text-2xl font-black text-white"},z={class:"flex justify-center items-center"},D={class:"p-2 text-xs first-letter:uppercase"},F={class:"w-full h-[200px] rounded-none"},O={class:"flex flex-col p-4 gap-2"},U={class:"flex flex-col h-[100px]"},$=["innerHTML"],C=["innerHTML"],E=t("span",{class:"text-sm font-semibold"},"Voir l'article",-1),R=t("i",{class:"ri-arrow-right-line"},null,-1),Q={__name:"card.blog",props:["start","end"],setup(q){const p=async()=>{const{findMany:s}=await M(N.BLOGS,"blogs"),{data:n}=await s();n&&(l().blogs=n.data.blogs)};return d([]),d([]),w(()=>{var s;((s=l().blogs)==null?void 0:s.length)==0&&p().then(()=>{})}),(s,n)=>{const a=g,f=x,h=b;return i(),c(_,null,[t("div",S,[t("div",T,[(i(!0),c(_,null,v(m(l)().blogs,e=>{var r;return i(),c("div",j,[t("div",H,[t("div",V,[t("div",{style:y("background-color: "+((r=m(l)().users)==null?void 0:r.color_1)),class:"py-4 flex justify-center items-center"},[t("span",I,[o(a,{datetime:e.created_at,day:"numeric"},null,8,["datetime"])])],4),t("div",z,[t("span",D,[o(a,{datetime:e.created_at,month:"long"},null,8,["datetime"]),u(", "),o(a,{datetime:e.created_at,year:"numeric"},null,8,["datetime"])])])]),t("div",F,[o(f,{sizes:"100vw sm:50vw md:400px",placeholder:[50,25,75,5],src:e.original_url,class:"rounded-none h-full w-full object-cover"},null,8,["src"])]),t("div",O,[t("div",U,[t("article",{innerHTML:e.title,class:"text-lg font-semibold font-blog line-clamp-2"},null,8,$),t("article",{innerHTML:e.content,class:"text-sm font-blog line-clamp-2"},null,8,C)]),o(h,{to:"/blogs/articles?id="+(e==null?void 0:e.id),class:"flex px-4 py-2 bg-gray-100 cursor-pointer justify-between w-full"},{default:L(()=>[E,R]),_:2},1032,["to"])])])])}),256))])]),u(" "+k(s.__BLOGS),1)],64)}}};export{Q as _};
