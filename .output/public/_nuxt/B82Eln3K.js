import{b as w}from"./BaX7qBvw.js";import{_ as k}from"./DvMDzYO1.js";import{r as _,j as E,k as S,h as l,o as n,c,a as s,F as p,I as V,b as C,P as h,H as N,w as A,n as f,g,q as y,d as L,t as j,l as B,U as R}from"./2UmPZn4h.js";const $={class:""},z={class:"grid max-md:grid-cols-2 grid-cols-4 gap-1"},G=["href"],T={class:"w-full max-md:h-48 h-72 rounded-md"},D=s("span",{class:""},"Voir plus images ",-1),F=s("i",{class:"ri-arrow-right-line"},null,-1),H=[D,F],P={key:1,class:"flex justify-center"},U=s("span",{class:""},"Voir plus ",-1),q=s("i",{class:"ri-arrow-right-line"},null,-1),O=[U,q],X={__name:"card.activity",props:["start","end","size"],setup(J){const x=async()=>{const{findMany:e}=await B(R.ACTIVITES,"portfolio"),{data:o}=await e();o&&(l().portfolio=o.data.activites)},a=_([]),u=_([]),r=_(16),b=E(()=>{r.value&&(a.value=u.value.slice(0,r.value))}),m=()=>{var e;l().portfolio.forEach(o=>{o==null||o.medias.forEach(d=>{var i;a.value.push(d),a.value=(i=a.value)==null?void 0:i.reverse()})}),u.value=(e=a.value)==null?void 0:e.reverse()};return S(()=>{var e;((e=l().portfolio)==null?void 0:e.length)==0&&x().then(()=>{m()}),m()}),(e,o)=>{var v;const d=w,i=k;return n(),c(p,null,[s("div",$,[s("div",z,[(n(!0),c(p,null,V(a.value,t=>(n(),c("div",null,[s("a",{href:t==null?void 0:t.original_url,target:"_blank"},[s("div",T,[C(d,{sizes:"100vw sm:50vw md:400px",placeholder:[30,20],src:t==null?void 0:t.original_url,class:"rounded-md w-full h-full object-cover"},null,8,["src"])])],8,G)]))),256))]),(e._.provides[h]||e.$route).path!="/activity"?(n(),N(i,{key:0,to:"/activity",class:"flex justify-center"},{default:A(()=>{var t;return[s("button",{style:f("background-color: "+((t=g(l)().users)==null?void 0:t.color_1)),class:"px-4 py-3 flex items-center gap-2 text-base rounded-md text-white underline font-bold mt-5"},H,4)]}),_:1})):y("",!0),(e._.provides[h]||e.$route).path=="/activity"&&u.value.length>=r.value?(n(),c("div",P,[s("button",{onClick:o[0]||(o[0]=t=>r.value=r.value+8),style:f("background-color: "+((v=g(l)().users)==null?void 0:v.color_1)),class:"px-4 flex items-center gap-2 text-base py-2 rounded-md text-white font-bold mt-5"},O,4)])):y("",!0)]),L(" "+j(b.value),1)],64)}}};export{X as _};