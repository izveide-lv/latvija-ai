import{_ as l,a as _}from"./BH1_v7lA.js";import{d as u,c as t,J as r,w as p,h as f,f as a,t as c,e as h,F as g,M as x,C as y,K as b,I as k}from"./BU7IbVOc.js";const w={class:"m-0 text-lg font-semibold dark:text-gray-50"},v={class:"p-0 mt-2 flex flex-wrap gap-2"},B=u({__name:"Item",props:["item"],setup(e){return(n,i)=>{const s=l,o=_,m=y;return t(),r(m,{to:e.item._path,class:"border border-dashed border-gray-200 dark:border-gray-500 hover:border-primary-400 hover:border-solid dark:hover:border-primary-300 rounded p-6 relative group transition-all"},{default:p(()=>[e.item.featured?(t(),r(s,{key:0})):f("",!0),a("h2",w,c(e.item.title),1),a("p",null,c(e.item.description),1),a("div",v,[(t(!0),h(g,null,x(e.item.tags,d=>(t(),r(o,{tag:d},null,8,["tag"]))),256))])]),_:1},8,["to"])}}}),D={__name:"FeatureExample",setup(e){const n=b(()=>({title:"My Awesome Product",description:"This product is a great way to do things.",featured:!0}));return(i,s)=>{const o=B;return t(),r(o,{class:"block w-96 h-42 my-8",item:k(n)},null,8,["item"])}}};export{D as default};
