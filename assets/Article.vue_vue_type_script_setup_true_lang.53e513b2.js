import{f as k,o as f,bQ as $,V as g,T as B,aB as w,eI as R,Q as h,df as L,ef as E,F as n,A as t,B as m,L as p,D as i,C as y,H as V,I as C,eJ as I,_ as A,cn as F,bT as M,J as b,di as z,O as H,M as N,bP as D,bR as J,d0 as O,al as Q,cL as U,dd as j,a8 as q}from"./index.ddbfeb2e.js";import{a as x,b as G}from"./PapawList.vue_vue_type_script_setup_true_lang.876524d1.js";import{_ as K}from"./PostList.vue_vue_type_script_setup_true_lang.7efae235.js";import{_ as W}from"./RichTextEditBox.vue_vue_type_script_setup_true_lang.05e7b11a.js";const X={key:1},Y={key:0,class:"w-full flex justify-center items-center"},Z=k({__name:"PapawTreeParent",props:{id:null,relays:null,chindEvent:null},setup(s){const c=s,o=f(()=>$(c.id,{urls:c.relays})),u=f(()=>o.value.feat.useEvent()),r=g(!1),a=B();function d(){r.value=!0,a.start(),setTimeout(()=>{a.finish()},1e3)}const v=w(),e=R();if(e){const l=e.on("refresh",()=>{r.value?v.success(h("non_existent")):(l(),setTimeout(()=>{d(),v.success(h("load_parent_success"))}))});L(l)}return!E.enablePapawTreeLazyMode&&d(),(l,_)=>{const P=A,S=F;return n(u)&&r.value?(t(),m(T,{key:0,event:n(u),relays:s.relays},null,8,["event","relays"])):(t(),p("div",X,[!r.value&&n(u)?(t(),p("div",Y,[i(P,{text:"",onClick:d},{default:y(()=>[V(C(n(h)("load_parent")),1)]),_:1})])):(t(),m(S,{key:1,description:n(h)("not_found"),size:"huge"},null,8,["description"])),i(I,null,{default:y(()=>[i(x,{event:s.chindEvent},null,8,["event"])]),_:1})]))}}}),ee={key:0},ne={key:1},te={key:2},T=k({__name:"PapawTreeAutoFindRoot",props:{event:null,relays:null,deleteEvent:null,withPapawOptionsButtons:{type:Boolean,default:!0}},setup(s){const c=s,{event:o}=M(c),u=f(()=>o.value.tags.filter(e=>e[0]==="e"&&e[1]&&(e[2]===void 0||e[2]==="reply"))),r=f(()=>D(new Set(c.relays),J(o.value.tags))),a=f(()=>u.value.length>0),d=f(()=>new Set(u.value.map(e=>e[1]))),v=f(()=>{var e;return(e=O(o.value.tags))==null?void 0:e[1]});return(e,l)=>n(v)?(t(),p("div",ee,[i(z,{id:n(v)},{reply:y(({event:_})=>[_?(t(),m(G,{key:0,event:_},null,8,["event"])):b("",!0)]),_:1},8,["id"])])):n(a)?(t(),p("div",ne,[(t(!0),p(H,null,N(n(d),_=>(t(),m(Z,{chindEvent:n(o),relays:n(r),id:_},null,8,["chindEvent","relays","id"]))),256))])):(t(),p("div",te,[i(x,{event:n(o)},null,8,["event"])]))}}),se={key:0,class:"flex flex-col w-full h-full overflow-auto"},ue=k({__name:"Article",props:{event:null,urls:null},emits:["pushEvent"],setup(s,{emit:c}){const o=s,u=w(),r=Q(o,"urls"),a=g(void 0),d=U(1,void 0,g(e=>{var l;(l=a.value)==null||l.call(a,e),c("pushEvent",e)}),{urls:r});async function v(e){await d(e),u.info("send")}return(e,l)=>s.event?(t(),p("div",se,[i(q,{class:"w-full h-0 flex-shrink flex-1",loadable:"",refreshable:""},{default:y(()=>[n(E).enablePapawTree?(t(),m(T,{key:0,event:s.event},null,8,["event"])):(t(),m(j,{key:1,event:s.event},{reply:y(()=>[i(K,{pushEvent:a.value,"onUpdate:pushEvent":l[0]||(l[0]=_=>a.value=_),urls:n(r),filter:{"#e":[s.event.id],kinds:[1,30023]},active:"",disabledReply:""},null,8,["pushEvent","urls","filter"])]),_:1},8,["event"]))]),_:1}),i(W,{onSend:v})])):b("",!0)}});export{ue as _};