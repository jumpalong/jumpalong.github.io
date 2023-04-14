import{c as k,k as M}from"./use.155929f4.js";import{f as V,e as z,P as A,g as C,h as j}from"./Content.6c3a480a.js";import{f,n as c,aH as O,y as o,I as r,L as h,J as T,C as l,H as d,A as v,D as H,F as R,G as b,_ as L,z as w,O as I,bw as S,aq as P,aP as g,bt as D,aQ as x,aZ as F}from"./index.ad5a3ab6.js";import{N as q}from"./Icon.32da1a7c.js";const[pe,J]=k(e=>({useTree:e})),W={key:0,class:"w-full flex justify-center items-center py-2"},G=f({__name:"PapawTreeReply",props:{event:null,noTree:{type:Boolean}},setup(e){const s=e,n=c(()=>s.event.id),a=5,t=c(()=>z({limit:a,filters:[{"#e":[n.value],kinds:[1,30023]}]}).addStaffOfSortByCreateAt()),i=c(()=>t.value.getList()),u=V();O(()=>{u!=null&&u.parents.value.has(n.value)&&u.focusEvent.value&&t.value.pushEvent(u.focusEvent.value)});const _=c(()=>{var m;return(m=i.value.length)!=null?m:0});return(m,y)=>{const B=L;return o(),r(h,null,[(o(!0),r(h,null,T(l(i),p=>(o(),w($,{event:p},null,8,["event"]))),256)),l(_)>0?(o(),r("div",W,[d(B,{class:"w-full",text:"",onClick:y[0]||(y[0]=()=>l(t).feat.load())},{default:v(()=>[H(R(l(I)("load_more")),1)]),_:1})])):b("",!0)],64)}}}),[Q,U]=k(e=>({withEventSet:e})),Z=f({__name:"PapawTreeWithEvent",props:{id:null},setup(e){const s=e,{id:n}=S(s),a=P(!1),t=U();return t?a.value=!t.withEventSet.value.has(n.value):(Q(P(new Set().add(n.value))),a.value=!0),a.value&&(t==null||t.withEventSet.value.add(n.value)),(i,u)=>(o(),r(h,null,[a.value?g(i.$slots,"default",{key:0}):b("",!0),g(i.$slots,"else")],64))}}),$=f({__name:"PapawTree",props:{event:null,deleteEvent:null,withPapawOptionsButtons:{type:Boolean,default:!0}},setup(e){var t;const s=e,{event:n}=S(s),a=P();return(t=a.value)==null||t.scrollToPapaw(),(i,u)=>(o(),w(Z,{id:l(n).id},{default:v(()=>[d(A,{disabledReply:"",event:l(n),ref:a.value,"onUpdate:ref":u[0]||(u[0]=_=>a.value=_)},{reply:v(()=>[d(G,{event:l(n)},null,8,["event"])]),_:1},8,["event"])]),_:1},8,["id"]))}}),K=f({__name:"MayBeTreePapaw",props:{event:null,withPapawOptionsButtons:{type:Boolean},disabledReply:{type:Boolean}},setup(e){var n;const{useTree:s}=(n=J())!=null?n:{};return(a,t)=>l(s)?(o(),w($,{key:0,event:e.event,withPapawOptionsButtons:e.withPapawOptionsButtons},null,8,["event","withPapawOptionsButtons"])):(o(),w(A,{key:1,withPapawOptionsButtons:e.withPapawOptionsButtons,event:e.event,disabledReply:e.disabledReply},null,8,["withPapawOptionsButtons","event","disabledReply"]))}}),X={},Y={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},ee=x("g",{fill:"none"},[x("path",{d:"M9.516 6a.5.5 0 0 0 0 1h2.777l-4.147 4.146a.5.5 0 0 0 .708.708L13 7.707v2.777a.5.5 0 0 0 1 0V6.5a.5.5 0 0 0-.5-.5H9.516zm3.25 11a2.5 2.5 0 0 0 2.47-2.11A2.501 2.501 0 0 0 17 12.5v-7A2.5 2.5 0 0 0 14.5 3h-7a2.501 2.501 0 0 0-2.4 1.797A2.5 2.5 0 0 0 3 7.266V13.5A3.5 3.5 0 0 0 6.5 17h6.266zM4 7.266A1.5 1.5 0 0 1 5 5.85V12.5A2.5 2.5 0 0 0 7.5 15h6.68a1.5 1.5 0 0 1-1.414 1H6.5A2.5 2.5 0 0 1 4 13.5V7.266zM7.5 4h7A1.5 1.5 0 0 1 16 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 6 12.5v-7A1.5 1.5 0 0 1 7.5 4z",fill:"currentColor"})],-1),te=[ee];function ne(e,s){return o(),r("svg",Y,te)}const ae=D(X,[["render",ne]]),se=f({__name:"NewMessage",setup(e){let s=C();const n=s!=null?s:j({jumpList:P([])}),a=c(()=>n.jumpList.value);function t(){const p=a.value.shift();!p||p()}const i=c(()=>a.value.length>0),{show:u,hidden:_,transitionActive:m,safeActive:y,duration:B}=M(600);return O(()=>{i.value?u():_()}),(p,oe)=>{const E=q,N=L;return o(),r(h,null,[g(p.$slots,"default"),l(y)&&!l(s)?(o(),w(N,{key:0,class:"fixed bottom-3 right-4 px-2",style:F({transform:l(m)?"translate(0%,0%)":"translate(150%,0%)",transition:`transform ${l(B)}ms ease`}),quaternary:"",type:"primary",size:"large",round:"",onClick:t},{default:v(()=>[x("span",null,R(l(a).length),1),d(E,{size:30},{default:v(()=>[d(ae)]),_:1})]),_:1},8,["style"])):b("",!0)],64)}}}),ce=f({__name:"PapawList",props:{eventList:null,withPapawOptionsButtons:{type:Boolean},disabledReply:{type:Boolean}},emits:["eventDeletion"],setup(e,{emit:s}){return(n,a)=>(o(),w(se,null,{default:v(()=>[(o(!0),r(h,null,T(e.eventList,t=>(o(),r("div",{key:t.id},[d(K,{event:t,withPapawOptionsButtons:e.withPapawOptionsButtons,disabledReply:e.disabledReply},null,8,["event","withPapawOptionsButtons","disabledReply"])]))),128))]),_:1}))}});export{ce as _,$ as a,G as b};