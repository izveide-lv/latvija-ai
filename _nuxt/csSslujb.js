import{m,x as v,K as U,d as h,c,e as i,F as y,M as f,n as x,f as u,i as V,I as n,g as A,t as _,E as C,r as F,o as M,O,L as P,q as j,h as $,P as q,Q as z,R as G,J as N}from"./BU7IbVOc.js";import{f as R}from"./BFDxGfwR.js";import{u as W}from"./DPYHNp3u.js";function E(){const a=m("tags",()=>[]),s=v().directory.tags,o=U(()=>s?s.filter(r=>r&&!a.value.includes(r.name)):[]);function d(r){const t=a.value.indexOf(r);t>-1&&a.value.splice(t,1)}function e(r){const t=r.target,g=t.value;p(g),t.value=""}function p(r){a.value&&!a.value.includes(r)&&a.value.push(r)}function l(r){const t=a.value.indexOf(r);if(t!=-1)return a.value.splice(t,1);a.value.push(r)}return{selectedTags:a,availableTags:o,addTagWithEvent:e,toggleTagByName:l,removeTag:d}}const J={class:"flex m-0 gap-4 mt-4 py-2"},Q=["onClick"],H=["value"],X=h({__name:"Select",setup(a){const{selectedTags:s,availableTags:o,addTagWithEvent:d,removeTag:e}=E();return(p,l)=>{const r=C;return c(),i("div",J,[(c(!0),i(y,null,f(n(s),t=>(c(),i("div",{class:x(["relative group border-2 shadow-sm font-semibold text-blue-500 bg-blue-600/10 rounded-lg px-1.5 py-1 inline-flex items-center justify-center","border-blue-500"])},[u("span",{onClick:()=>n(e)(t),class:"absolute text-gray-500 opacity-0 transition-all group-hover:opacity-100 hover:bg-gray-100 flex items-center justify-center -top-4 left-0 bg-white rounded-full h-6 w-6 border dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800"},[V(r,{name:"tabler:x"})],8,Q),A(" "+_(t),1)]))),256)),u("select",{modelValue:null,onChange:l[0]||(l[0]=(...t)=>n(d)&&n(d)(...t)),class:"border border-dashed border-gray-300 rounded-lg font-medium text-gray-500 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-400 focus:ring-primary-500 focus:ring-2 focus:border-none ring-offset-4"},[l[1]||(l[1]=u("option",{value:"",disabled:"",selected:""}," Select a tag ",-1)),(c(!0),i(y,null,f(n(o),t=>(c(),i("option",{key:t.name,value:t.name},_(t.name),9,H))),128))],32)])}}}),Y={class:"flex flex-wrap gap-2 mt-4"},Z=["onClick"],ee=h({__name:"Grid",setup(a){const s=v().directory.tags,{selectedTags:o,toggleTagByName:d}=E();return(e,p)=>(c(),i("div",Y,[(c(!0),i(y,null,f(n(s),l=>(c(),i("span",{class:x(["border rounded-md px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-900 dark:border-gray-600 cursor-pointer select-none",n(o).includes(l.name)?"border-primary-500 dark:border-primary-300":""]),onClick:r=>n(d)(l.name)},_(l.name),11,Z))),256))]))}});function te(){const a=F(),s=function(o){o.key==="k"&&(o.ctrlKey||o.metaKey)&&(o.preventDefault(),a.value.focus())};return M(()=>{document.body.addEventListener("keydown",s)}),O(()=>{document.body.removeEventListener("keydown",s)}),a}const re={class:"mb-10 not-prose"},ae={class:"mt-2 flex rounded-md shadow-sm"},ne={class:"relative flex flex-grow items-stretch focus-within:z-10"},se={key:0,class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},oe=["placeholder"],ie=h({__name:"Search",async setup(a){let s,o;const d=m("search");m("tags",()=>[]);const e=v().directory.search,p=([s,o]=P(()=>l()),s=await s,o(),s);async function l(){if(e!=null&&e.placeholder&&e.placeholder.includes("{0}")){const{data:t}=await W("content-count",()=>j("/dir").where({_extension:"md"}).count());return R((e==null?void 0:e.placeholder)??"Search among {0} listings",t.value)}return(e==null?void 0:e.placeholder)??"Search"}const r=te();return(t,g)=>{var b,k,w,T,S,B;const I=C,K=X,L=ee;return c(),i("div",re,[u("div",ae,[u("div",ne,[(b=n(e))!=null&&b.icon?(c(),i("div",se,[V(I,{name:n(e).icon,class:"h-5 w-5 text-gray-400","aria-hidden":"true"},null,8,["name"])])):$("",!0),q(u("input",{"onUpdate:modelValue":g[0]||(g[0]=D=>G(d)?d.value=D:null),ref_key:"searchInput",ref:r,class:x(["block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:active:ring-primary-400 dark:bg-gray-700 dark:ring-gray-600 dark:text-gray-200 dark:placeholder:text-gray-400",(k=n(e))!=null&&k.icon?"pl-10":""]),placeholder:n(p)},null,10,oe),[[z,n(d)]]),g[1]||(g[1]=u("div",{class:"absolute inset-y-0 right-0 flex py-1.5 pr-1.5"},[u("kbd",{class:"inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400 dark:border-gray-500 dark:text-gray-500"},"⌘K")],-1))])]),((T=(w=n(e))==null?void 0:w.tags)==null?void 0:T.display)==="select"?(c(),N(K,{key:0})):((B=(S=n(e))==null?void 0:S.tags)==null?void 0:B.display)==="show-all"?(c(),N(L,{key:1})):$("",!0)])}}});export{ie as default};
