import{_ as h,a as b,b as w}from"./BvhdpkJ3.js";import{_ as B}from"./DO8yyi2f.js";import{f as y,h as F,g as n,r as $,o as t,c as o,b as a,u as _,a as s,F as r,i as d,j as N,U as S}from"./BILIK8qF.js";import"./BXYsEfN9.js";import"./HRrQPjQp.js";const V={class:"flex flex-col gap-8 w-11/12 m-auto mb-32"},j=s("div",{class:"text-4xl font-exo font-bold"},null,-1),k={class:""},z={class:"gap-2 lg:gap-2 columns-[8rem] lg:columns-4 [&>img:not(:first-child)]:mt-8"},E={class:"w-full lg:h-auto rounded-md mt-2"},G=y({__name:"activity",setup(H){const u=async()=>{const{findMany:e}=await N(S.ACTIVITES,"portfolio"),{data:i}=await e();i&&(n().portfolio=i.data.activites)};F(()=>{var e;((e=n().portfolio)==null?void 0:e.length)==0&&u()});const f=$(8);return(e,i)=>{var m;const p=h,v=B,g=w,x=b;return t(),o(r,null,[a(p),a(v,{image:"",title:"Les images de nos activités.",sub:`${(m=_(n)().users)==null?void 0:m.name}, Revivez nos activités en images`},null,8,["sub"]),s("div",V,[j,s("div",k,[(t(!0),o(r,null,d(_(n)().portfolio.slice(0,f.value),c=>(t(),o("div",null,[s("div",z,[(t(!0),o(r,null,d(c==null?void 0:c.medias,l=>(t(),o("div",null,[s("div",E,[a(g,{sizes:"100vw sm:50vw md:400px",placeholder:[50,25,75,5],src:l==null?void 0:l.original_url,class:"rounded-md w-full object-cover"},null,8,["src"])])]))),256))])]))),256))])]),a(x)],64)}}});export{G as default};
