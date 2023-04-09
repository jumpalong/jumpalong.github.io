import{f as I,n as B,ao as _,y as v,z as E,A as e,H as t,C as l,ab as H,O as u,V as ue,bo as re,aO as C,D as c,F as r,bF as ie,I as z,J as D,L as K,G as de,Y as A,U as ce,aY as _e,_ as pe,aX as O,dJ as me}from"./index.6304a51f.js";import{_ as q,a as fe}from"./AddButton.vue_vue_type_script_setup_true_lang.84021d61.js";import{_ as ve,a as he,b as ye}from"./UserLink.vue_vue_type_script_setup_true_lang.c22273e8.js";import{S as W}from"./Scrollbar.9f2302cb.js";import{_ as ge}from"./Input.9124b0cd.js";import{_ as X}from"./Thing.1ab5231b.js";import{_ as G}from"./RelayConnectListCard.vue_vue_type_script_setup_true_lang.b24c1a46.js";import{a as be,d as ke,i as we}from"./getCacheStaff.4d97934e.js";import{q as Ce}from"./use.cd98c830.js";import{a as xe,_ as Se}from"./Checkbox.d31acec3.js";import{u as Le}from"./use-theme-vars.89c1ef43.js";import{_ as Ue}from"./Space.7ea99aad.js";import{_ as Re}from"./Empty.559ecf73.js";import"./RelayInfoView.1d101069.js";import"./Ellipsis.1f56af6a.js";import"./Icon.358fada6.js";import"./ListItem.6e1cd44c.js";import"./DrawerContent.c7a28493.js";import"./user.8ea1c8c2.js";import"./nostr.65b69e2e.js";import"./ReloadCircleSharp.aaba4a76.js";import"./Scrollbar.695c977e.js";import"./autoAddRelayurlByEventIdStaff.c25d3ca8.js";import"./get-slot.4ceacf82.js";const $e=I({__name:"AddRelay",props:{show:{type:Boolean},disabledList:null},emits:["add-relay","update:show"],setup(h,{emit:f}){const k=B(()=>H.getOtherList()),m=_("");return(x,p)=>{const y=ge,S=X;return v(),E(ve,{show:h.show,"onUpdate:show":p[2]||(p[2]=d=>f("update:show",d)),closable:"",height:"100%",title:l(u)("add_relay")},{default:e(()=>[t(W,null,{default:e(()=>[t(S,{class:"my-2"},{header:e(()=>[t(y,{value:m.value,"onUpdate:value":p[0]||(p[0]=d=>m.value=d),placeholder:"eg: wss://relay.com",size:"small"},null,8,["value"])]),"header-extra":e(()=>[t(q,{onClick:p[1]||(p[1]=()=>f("add-relay",m.value)),disabled:h.disabledList&&h.disabledList.has(m.value)},null,8,["disabled"])]),_:1}),t(fe,{urls:l(k),loadable:""},{right:e(({url:d})=>[t(q,{onClick:()=>f("add-relay",d),disabled:h.disabledList&&h.disabledList.has(d)},null,8,["onClick","disabled"])]),_:1},8,["urls"])]),_:1})]),_:1},8,["show","title"])}}}),Pe=["id"],Ve=C("div",{class:"grid grid-cols-2"},null,-1),at=I({__name:"MoveHouseView",setup(h){const f=_(H.getReadList()),k=_(H.getWriteList()),m=_(!1),x=_(!1),p=[0,1,2,3,4,5,6,7,8,40,41,42,43,44,1984,9734,9735,1e4,10001,10002,3e4,30001,30008,30009,30023,30078],y=Ce("checkedKinds",p),S=[ue.value.publicKey],d=_([...S]),w=_(new Map),F=B(()=>[{kinds:y.value,authors:d.value}]),L=B(()=>(w.value.clear(),A.createChild().addStaff(be()).addFilters(F.value).addStaff({push(s){var o;const a=s.kind;w.value.set(a,((o=w.value.get(a))!=null?o:0)+1)}}).addExtends(A)));function j(){m.value=!0,L.value.addExtends(A.createChild().addStaff(ke()).addFilters(F.value).addRelayUrls(f.value))}const J=me(10),U=B(()=>{let s=0;for(const[a,o]of w.value)s+=o;return s}),R=_(new Map);function Z(){return{ok:0,error:0,ignore:0}}function Q(s,a){const o=a.get(s);if(!o){const i=Z();return R.value.set(s,i),i}return o}function ee(){const s=ce(new Map);R.value=s,x.value=!0,A.createChild().addFilters(F.value).addStaff({push(a){J.unShift(()=>{var o;L.value.getRelayEmiter().on("ok",a.id,({ok:i,url:V})=>{const g=Q(V,s);i?g.ok++:g.error++},{overtime:6e4});for(const i of k.value){if((o=we(a.id))!=null&&o.has(i)){Q(i,s).ignore++;continue}J.unShift(()=>{L.value.publish(a,new Set().add(i),{autoPublishToTagR:!1})})}})}}).addExtends(L.value)}const M=Le(),te=re(),$=_(null);function ae(s){var a;(a=$.value)==null||a.add(s),te.success(u("successfully_added"))}const P=_(!1);function le(){$.value=f.value,P.value=!0}function se(){$.value=k.value,P.value=!0}return(s,a)=>{const o=Se,i=X,V=xe,g=_e,T=pe,N=Ue,ne=Re;return v(),E(he,null,{default:e(({id:oe})=>{var Y;return[t($e,{show:P.value,"onUpdate:show":a[0]||(a[0]=n=>P.value=n),onAddRelay:ae,disabledList:(Y=$.value)!=null?Y:void 0},null,8,["show","disabledList"]),C("div",{id:oe},[t(W,null,{default:e(()=>[t(N,{vertical:""},{default:e(()=>[t(g,{title:l(u)("kind")},{"header-extra":e(()=>[c(r(l(U)),1)]),default:e(()=>[t(V,{value:l(y),"onUpdate:value":[a[1]||(a[1]=n=>ie(y)?y.value=n:null),a[2]||(a[2]=()=>{m.value=!1,x.value=!1})]},{default:e(()=>[(v(),z(K,null,D(p,n=>t(i,null,{header:e(()=>[t(o,{value:n,label:l(u)(`kind${n}`)},null,8,["value","label"])]),"header-extra":e(()=>{var b;return[c(r((b=w.value.get(n))!=null?b:0),1)]}),_:2},1024)),64))]),_:1},8,["value"])]),_:1},8,["title"]),t(g,{title:l(u)("include_user")},{default:e(()=>[t(V,{value:d.value,"onUpdate:value":a[3]||(a[3]=n=>d.value=n)},{default:e(()=>[Ve,(v(),z(K,null,D(S,n=>t(o,{value:n},{default:e(()=>[t(ye,{withPrefix:!1,value:n},null,8,["value"])]),_:2},1032,["value"])),64))]),_:1},8,["value"])]),_:1},8,["title"]),t(G,{urls:f.value,title:l(u)("pull")},{action:e(()=>[t(N,null,{default:e(()=>[t(T,{disabled:m.value,type:"primary",onClick:j},{default:e(()=>[c(r(l(u)("pull")),1)]),_:1},8,["disabled"]),t(T,{type:"primary",onClick:le},{default:e(()=>[c(r(l(u)("add_relay")),1)]),_:1})]),_:1})]),_:1},8,["urls","title"]),t(G,{urls:k.value,title:l(u)("push")},{action:e(()=>[t(N,null,{default:e(()=>[t(T,{disabled:x.value||l(U)===0,type:"primary",onClick:ee},{default:e(()=>[c(r(l(u)("push"))+"("+r(l(U))+") ",1)]),_:1},8,["disabled"]),t(T,{type:"primary",onClick:se},{default:e(()=>[c(r(l(u)("add_relay")),1)]),_:1})]),_:1})]),_:1},8,["urls","title"]),t(g,{title:l(u)("result")},{"header-extra":e(()=>[c(r(l(U)),1)]),default:e(()=>[R.value.size===0?(v(),E(ne,{key:0,description:l(u)("empty_text")},null,8,["description"])):de("",!0),(v(!0),z(K,null,D(R.value,([n,b])=>(v(),E(i,null,{header:e(()=>[c(r(n),1)]),"header-extra":e(()=>[C("span",{style:O({color:l(M).successColor})},r(b.ok),5),c(" / "),C("span",{style:O({color:l(M).primaryColor})},r(b.ignore),5),c(" / "),C("span",{style:O({color:l(M).errorColor})},r(b.error),5)]),_:2},1024))),256))]),_:1},8,["title"])]),_:1})]),_:1})],8,Pe)]}),_:1})}}});export{at as default};