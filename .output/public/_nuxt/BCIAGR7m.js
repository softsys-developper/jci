import{_ as h}from"./1LnPFIcp.js";import{b}from"./NI5CF_3k.js";import{_ as v}from"./D3y8BB3K.js";import{r as _,j as w,h as n,k as y,o as c,c as i,a as t,F as u,I as L,n as S,g as k,b as o,d as m,w as M,t as N,l as T,U as j}from"./D0umdVxq.js";const H={class:""},V={class:"grid grid-cols-3 max-md:grid-cols-1 gap-8 bg-white"},I={class:"flex flex-col gap-4"},O={class:"bg-white shadow-md relative rounded-lg"},z={class:"absolute w-20 bg-white rounded-lg top-6 left-6"},D={class:"text-2xl font-black text-white"},F={class:"flex justify-center items-center"},U={class:"p-2 text-xs first-letter:uppercase"},$={class:"w-full h-[200px] rounded-none"},C={class:"flex flex-col p-4 gap-2"},E={class:"flex flex-col h-[100px]"},R=["innerHTML"],q=["innerHTML"],A=t("span",{class:"text-sm font-semibold"},"Voir l'article",-1),J=t("i",{class:"ri-arrow-right-line"},null,-1),K={__name:"card.blog",props:["start","end"],setup(P){const p=async()=>{const{findMany:s}=await T(j.BLOGS,"blogs"),{data:l}=await s();l&&(n().blogs=l.data.blogs)},r=_([]);_([]);const f=w(()=>{r.value=n().blogs});return y(()=>{var s;((s=n().blogs)==null?void 0:s.length)==0&&p().then(()=>{})}),(s,l)=>{const a=h,g=b,x=v;return c(),i(u,null,[t("div",H,[t("div",V,[(c(!0),i(u,null,L(r.value,e=>{var d;return c(),i("div",I,[t("div",O,[t("div",z,[t("div",{style:S("background-color: "+((d=k(n)().users)==null?void 0:d.color_1)),class:"py-4 flex justify-center items-center"},[t("span",D,[o(a,{datetime:e.created_at,day:"numeric"},null,8,["datetime"])])],4),t("div",F,[t("span",U,[o(a,{datetime:e.created_at,month:"long"},null,8,["datetime"]),m(", "),o(a,{datetime:e.created_at,year:"numeric"},null,8,["datetime"])])])]),t("div",$,[o(g,{sizes:"100vw sm:50vw md:400px ",placeholder:[50,25,75,5],src:e.original_url,class:"rounded-none h-full w-full object-cover rounded-t-lg"},null,8,["src"])]),t("div",C,[t("div",E,[t("article",{innerHTML:e.title,class:"text-lg font-semibold font-blog line-clamp-2"},null,8,R),t("article",{innerHTML:e.content,class:"text-sm font-blog line-clamp-2"},null,8,q)]),o(x,{to:"/blogs/articles?id="+(e==null?void 0:e.id),class:"flex px-4 py-2 bg-gray-100 cursor-pointer mt-4 justify-between items-center w-full"},{default:M(()=>[A,J]),_:2},1032,["to"])])])])}),256))])]),m(" "+N(f.value),1)],64)}}},Z=K;export{Z as _};
