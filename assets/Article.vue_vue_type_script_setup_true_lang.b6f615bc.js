import{f as k,n as _,av as g,T as $,bz as w,O as h,bu as R,an as E,C as n,y as t,z as m,I as p,H as u,A as y,D as B,F as L,_ as z,bD as A,G as x,L as C,J as V,ac as F,ad as I,dv as D,aA as H}from"./index.d4beb9d4.js";import{i as M}from"./use.e428b080.js";import{r as N,f as O,P as U}from"./Content.8be18bd0.js";import{a as b,b as j}from"./PapawList.vue_vue_type_script_setup_true_lang.84c8759f.js";import{g as G}from"./event.ce5eb45a.js";import{a as J,S as q}from"./Scrollbar.a74a5321.js";import{_ as K}from"./Empty.501abe6f.js";import{_ as Q}from"./PostList.vue_vue_type_script_setup_true_lang.f712bb57.js";import{_ as W}from"./RichTextEditBox.vue_vue_type_script_setup_true_lang.52906b86.js";const X={key:1},Y={key:0,class:"w-full flex justify-center items-center"},Z=k({__name:"PapawTreeParent",props:{id:null,relays:null,chindEvent:null},setup(s){const c=s,o=_(()=>G(c.id,{urls:c.relays})),i=_(()=>o.value.feat.useEvent()),r=g(!1),a=$();function d(){r.value=!0,a.start(),setTimeout(()=>{a.finish()},1e3)}const v=w(),e=J();if(e){const l=e.on("refresh",()=>{r.value?v.success(h("non_existent")):(l(),setTimeout(()=>{d(),v.success(h("load_parent_success"))}))});R(l)}return!E.enablePapawTreeLazyMode&&d(),(l,f)=>{const P=z,S=K;return n(i)&&r.value?(t(),m(T,{key:0,event:n(i),relays:s.relays},null,8,["event","relays"])):(t(),p("div",X,[!r.value&&n(i)?(t(),p("div",Y,[u(P,{text:"",onClick:d},{default:y(()=>[B(L(n(h)("load_parent")),1)]),_:1})])):(t(),m(S,{key:1,description:n(h)("not_found"),size:"huge"},null,8,["description"])),u(N,null,{default:y(()=>[u(b,{event:s.chindEvent},null,8,["event"])]),_:1})]))}}}),ee={key:0},ne={key:1},te={key:2},T=k({__name:"PapawTreeAutoFindRoot",props:{event:null,relays:null,deleteEvent:null,withPapawOptionsButtons:{type:Boolean,default:!0}},setup(s){const c=s,{event:o}=A(c),i=_(()=>o.value.tags.filter(e=>e[0]==="e"&&e[1]&&(e[2]===void 0||e[2]==="reply"))),r=_(()=>F(new Set(c.relays),I(o.value.tags))),a=_(()=>i.value.length>0),d=_(()=>new Set(i.value.map(e=>e[1]))),v=_(()=>{var e;return(e=D(o.value.tags))==null?void 0:e[1]});return(e,l)=>n(v)?(t(),p("div",ee,[u(O,{id:n(v)},{reply:y(({event:f})=>[f?(t(),m(j,{key:0,event:f},null,8,["event"])):x("",!0)]),_:1},8,["id"])])):n(a)?(t(),p("div",ne,[(t(!0),p(C,null,V(n(d),f=>(t(),m(Z,{chindEvent:n(o),relays:n(r),id:f},null,8,["chindEvent","relays","id"]))),256))])):(t(),p("div",te,[u(b,{event:n(o)},null,8,["event"])]))}}),se={key:0,class:"flex flex-col w-full h-full overflow-auto"},fe=k({__name:"Article",props:{event:null,urls:null},emits:["pushEvent"],setup(s,{emit:c}){const o=s,i=w(),r=H(o,"urls"),a=g(void 0),d=M(1,void 0,g(e=>{var l;(l=a.value)==null||l.call(a,e),c("pushEvent",e)}),{urls:r});async function v(e){await d(e),i.info("send")}return(e,l)=>s.event?(t(),p("div",se,[u(q,{class:"w-full h-0 flex-shrink flex-1",loadable:"",refreshable:""},{default:y(()=>[n(E).enablePapawTree?(t(),m(T,{key:0,event:s.event},null,8,["event"])):(t(),m(U,{key:1,event:s.event},{reply:y(()=>[u(Q,{pushEvent:a.value,"onUpdate:pushEvent":l[0]||(l[0]=f=>a.value=f),urls:n(r),filter:{"#e":[s.event.id],kinds:[1,30023]},active:"",disabledReply:""},null,8,["pushEvent","urls","filter"])]),_:1},8,["event"]))]),_:1}),u(W,{onSend:v})])):x("",!0)}});export{fe as _};
