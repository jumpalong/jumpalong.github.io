import{f as q,o as k,V as p,A as f,B as x,C as e,D as a,c3 as I,ca as re,F as l,a8 as Y,dJ as ie,az as J,aG as ce,Q as o,aH as _e,dH as pe,c1 as ve,aB as fe,W as L,H as i,I as d,aC as X,L as H,M as K,O as D,J as me,dK as he,aR as A,bE as ye,eK as ge,bn as be,eL as ke,aa as Ce,_ as we,X as xe,cn as Le,eM as Se,a9 as Q,eN as Ue}from"./index.ddbfeb2e.js";import{_ as Z}from"./Thing.9bca183f.js";import{_ as j}from"./RelayConnectListCard.vue_vue_type_script_setup_true_lang.4e1dcb24.js";import{_ as Re,a as $e}from"./Checkbox.23bc7b2e.js";const Be=q({__name:"AddRelay",props:{show:{type:Boolean},disabledList:null},emits:["add-relay","update:show"],setup(h,{emit:m}){const C=k(()=>J.getOtherList()),v=p("");return(S,c)=>{const y=ce,U=Z;return f(),x(ie,{show:h.show,"onUpdate:show":c[2]||(c[2]=_=>m("update:show",_)),closable:"",height:"100%",title:l(o)("add_relay")},{default:e(()=>[a(Y,null,{default:e(()=>[a(U,{class:"my-2"},{header:e(()=>[a(y,{value:v.value,"onUpdate:value":c[0]||(c[0]=_=>v.value=_),placeholder:"eg: wss://relay.com",size:"small"},null,8,["value"])]),"header-extra":e(()=>[a(I,{onClick:c[1]||(c[1]=()=>m("add-relay",v.value)),disabled:h.disabledList&&h.disabledList.has(v.value)},null,8,["disabled"])]),_:1}),a(re,{urls:l(C),loadable:""},{right:e(({url:_})=>[a(I,{onClick:()=>m("add-relay",_),disabled:h.disabledList&&h.disabledList.has(_)},null,8,["onClick","disabled"])]),_:1},8,["urls"])]),_:1})]),_:1},8,["show","title"])}}}),Pe=["id"],Ve=L("div",{class:"grid grid-cols-2"},null,-1),Ne=q({__name:"MoveHouseView",setup(h){const m=p(J.getReadList()),C=p(J.getWriteList()),v=p(!1),S=p(!1),c=[0,1,2,3,4,5,6,7,8,40,41,42,43,44,1984,9734,9735,1e4,10001,10002,3e4,30001,30008,30009,30023,30078],y=_e("checkedKinds",c),U=pe(),_=k(()=>U.value?[U.value]:[]),R=k(()=>[..._.value]),w=p(new Map),N=k(()=>[{kinds:y.value,authors:R.value}]),$=k(()=>(w.value.clear(),A.createChild().addStaff(ye()).addFilters(N.value).addStaff({push(s){var u;const t=s.kind;w.value.set(t,((u=w.value.get(t))!=null?u:0)+1)}}).addExtends(A)));function ee(){v.value=!0,$.value.addExtends(A.createChild().addStaff(ge()).addFilters(N.value).addRelayUrls(m.value))}const O=Ue(10),B=k(()=>{let s=0;for(const[t,u]of w.value)s+=u;return s}),P=p(new Map);function ae(){return{ok:0,error:0,ignore:0}}function W(s,t){const u=t.get(s);if(!u){const r=ae();return P.value.set(s,r),r}return u}function le(){const s=be(new Map);P.value=s,S.value=!0,A.createChild().addFilters(N.value).addStaff({push(t){O.unShift(()=>{var u;$.value.getRelayEmiter().on("ok",t.id,({ok:r,url:M})=>{const g=W(M,s);r?g.ok++:g.error++},{overtime:6e4});for(const r of C.value){if((u=ke(t.id))!=null&&u.has(r)){W(r,s).ignore++;continue}O.unShift(()=>{$.value.publish(t,new Set().add(r),{autoPublishToTagR:!1})})}})}}).addExtends($.value)}const F=ve(),te=fe(),V=p(null);function se(s){var t;(t=V.value)==null||t.add(s),te.success(o("successfully_added"))}const E=p(!1);function ne(){V.value=m.value,E.value=!0}function ue(){V.value=C.value,E.value=!0}return(s,t)=>{const u=$e,r=Z,M=Re,g=Ce,T=we,z=xe,oe=Le;return f(),x(he,null,{default:e(({id:de})=>{var G;return[a(Be,{show:E.value,"onUpdate:show":t[0]||(t[0]=n=>E.value=n),onAddRelay:se,disabledList:(G=V.value)!=null?G:void 0},null,8,["show","disabledList"]),L("div",{id:de},[a(Y,null,{default:e(()=>[a(z,{vertical:""},{default:e(()=>[a(g,{title:l(o)("kind")},{"header-extra":e(()=>[i(d(l(B)),1)]),default:e(()=>[a(M,{value:l(y),"onUpdate:value":[t[1]||(t[1]=n=>X(y)?y.value=n:null),t[2]||(t[2]=()=>{v.value=!1,S.value=!1})]},{default:e(()=>[(f(),H(D,null,K(c,n=>a(r,null,{header:e(()=>[a(u,{value:n,label:l(o)(`kind${n}`)},null,8,["value","label"])]),"header-extra":e(()=>{var b;return[i(d((b=w.value.get(n))!=null?b:0),1)]}),_:2},1024)),64))]),_:1},8,["value"])]),_:1},8,["title"]),a(g,{title:l(o)("include_user")},{default:e(()=>[a(M,{value:l(R),"onUpdate:value":t[3]||(t[3]=n=>X(R)?R.value=n:null)},{default:e(()=>[Ve,(f(!0),H(D,null,K(l(_),n=>(f(),x(u,{value:n},{default:e(()=>[a(Se,{withPrefix:!1,value:n},null,8,["value"])]),_:2},1032,["value"]))),256))]),_:1},8,["value"])]),_:1},8,["title"]),a(j,{urls:m.value,title:l(o)("pull")},{action:e(()=>[a(z,null,{default:e(()=>[a(T,{disabled:v.value,type:"primary",onClick:ee},{default:e(()=>[i(d(l(o)("pull")),1)]),_:1},8,["disabled"]),a(T,{type:"primary",onClick:ne},{default:e(()=>[i(d(l(o)("add_relay")),1)]),_:1})]),_:1})]),_:1},8,["urls","title"]),a(j,{urls:C.value,title:l(o)("push")},{action:e(()=>[a(z,null,{default:e(()=>[a(T,{disabled:S.value||l(B)===0,type:"primary",onClick:le},{default:e(()=>[i(d(l(o)("push"))+"("+d(l(B))+") ",1)]),_:1},8,["disabled"]),a(T,{type:"primary",onClick:ue},{default:e(()=>[i(d(l(o)("add_relay")),1)]),_:1})]),_:1})]),_:1},8,["urls","title"]),a(g,{title:l(o)("result")},{"header-extra":e(()=>[i(d(l(B)),1)]),default:e(()=>[P.value.size===0?(f(),x(oe,{key:0,description:l(o)("empty_text")},null,8,["description"])):me("",!0),(f(!0),H(D,null,K(P.value,([n,b])=>(f(),x(r,null,{header:e(()=>[i(d(n),1)]),"header-extra":e(()=>[L("span",{style:Q({color:l(F).successColor})},d(b.ok),5),i(" / "),L("span",{style:Q({color:l(F).primaryColor})},d(b.ignore),5),i(" / "),L("span",{style:Q({color:l(F).errorColor})},d(b.error),5)]),_:2},1024))),256))]),_:1},8,["title"])]),_:1})]),_:1})],8,Pe)]}),_:1})}}});export{Ne as default};