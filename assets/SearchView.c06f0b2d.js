import{g as D}from"./event.271d9567.js";import{p as V,g as $}from"./user.4e76e6df.js";import{l as I,P}from"./Content.abdb10db.js";import{b as A}from"./AddButton.vue_vue_type_script_setup_true_lang.1818efac.js";import{f as N,bw as O,n as h,dI as H,y as l,I as _,aQ as C,H as b,A as u,D as M,F as B,C as p,G as v,aq as Q,Y as L,ax as T,z as o,J as y,L as g,S as U,Q as j,a_ as q}from"./index.70f8884a.js";import{E as F}from"./Ellipsis.b41ee5fc.js";import{b as x}from"./getCacheStaff.3d60947c.js";import{a as z,t as G}from"./nostr.07794609.js";import{_ as J,a as Y}from"./ListItem.34301ac7.js";import{_ as K}from"./Space.7a03ce87.js";import"./autoAddRelayurlByEventIdStaff.6030713a.js";import"./use.649125ec.js";import"./Tag.46089e63.js";import"./Icon.76b8c9c6.js";import"./RelayAddButton.vue_vue_type_script_setup_true_lang.fa658e44.js";import"./UserLink.vue_vue_type_script_setup_true_lang.9b7944e9.js";import"./DrawerContent.5919c25b.js";import"./RelayInfoView.f4ee9799.js";import"./ContentBlacklistView.76efa451.js";import"./Input.c72c1027.js";import"./use-theme-vars.c8b8e495.js";import"./Scrollbar.0f77d236.js";import"./Scrollbar.aca2cd5d.js";import"./naiveUi.0feadf26.js";import"./composables.43b0b4c0.js";import"./Popselect.e3982e97.js";import"./create.2deeaf6a.js";import"./Checkmark.33c23f48.js";import"./Empty.0100d8e4.js";import"./create-ref-setter.fe4a2903.js";import"./get-slot.4ceacf82.js";const W={class:"font-bold"},X={key:0,class:"w-full"},Z=N({__name:"SearchChannelItem",props:{event:null},setup(S){const w=S,{event:a}=O(w),m=h(()=>a.value&&V(a.value)),i=h(()=>{if(a.value.kind===40)return a.value.id;if(a.value.kind===41){const e=H(a.value.tags);return e?e[1]:void 0}});return(e,c)=>(l(),_("div",{class:"flex flex-col",onClick:c[0]||(c[0]=()=>p(i)&&e.$router.push({name:"channel-message",params:{value:p(i)}}))},[C("div",W,[b(F,null,{default:u(()=>{var f;return[M(B((f=p(m).name)!=null?f:p(i)&&p(i).slice(0,10)),1)]}),_:1})]),p(m).about?(l(),_("div",X,[b(F,{class:"w-full"},{default:u(()=>[C("small",null,B(p(m).about),1)]),_:1})])):v("",!0)]))}}),ee=C("div",{class:"flex items-center justify-center"},[C("div",{id:"search-input"})],-1),De=N({__name:"SearchView",setup(S){U();const w=j(),a=h(()=>w.params.value),m=h(()=>a.value&&z(a.value)),i=h(()=>a.value&&G(a.value)),e=Q({}),c=L.createChild().addStaff(x());function f(){return c.createChild().addStaff(x())}T(a,()=>{if(e.value={},!(!a.value||a.value.length===0))if(m.value){const t=m.value.relays,s=$(m.value.pubkey,{urls:t&&new Set(t)});c.addChild(s),e.value[0]=s}else if(i.value){const t=i.value,s=i.value.relays,r=D(t.id,s&&{urls:new Set(s)});c.addChild(r),r.feat.onHasEventOnce(d=>{E(d,e.value)})}else{const t=L.createChild().addStaff(x()).addStaff({push(d){E(d,e.value)}});c.addChild(t);const s=t.createChild().addFilter({search:a.value}).addExtends(L);t.addExtends(s);const r=t.createChild().addFilter({search:a.value,limit:50}).addReadUrl();t.addExtends(r)}},{immediate:!0});function E(t,s){var r,d;switch(t.kind){case 0:case 1:case 2:case 3:((r=s[t.kind])!=null?r:s[t.kind]=f()).pushEvent(t);break;case 40:case 41:((d=s.channel)!=null?d:s.channel=f()).pushEvent(t);break}}return(t,s)=>{const r=Y,d=J,k=q,R=K;return l(),o(R,{vertical:""},{default:u(()=>[ee,e.value.channel?(l(),o(k,{key:0,class:"w-full",title:"\u7FA4\u804A"},{default:u(()=>[b(d,{class:"w-full",hoverable:"",clickable:""},{default:u(()=>[(l(!0),_(g,null,y(e.value.channel.getList(),n=>(l(),o(r,{key:n.id},{default:u(()=>[b(Z,{event:n},null,8,["event"])]),_:2},1024))),128))]),_:1})]),_:1})):v("",!0),e.value[0]?(l(),o(k,{key:1,title:"\u7528\u6237"},{default:u(()=>[(l(!0),_(g,null,y(e.value[0].getList(),n=>(l(),o(I,{key:n.id,pubkey:n.pubkey,created_at:n.created_at},null,8,["pubkey","created_at"]))),128))]),_:1})):v("",!0),e.value[2]?(l(),o(k,{key:2,title:"relay"},{default:u(()=>[(l(!0),_(g,null,y(e.value[2].getList(),n=>(l(),o(A,{key:n.id,url:n.content},null,8,["url"]))),128))]),_:1})):v("",!0),e.value[1]?(l(),o(k,{key:3,title:"\u6D88\u606F"},{default:u(()=>[(l(!0),_(g,null,y(e.value[1].getList(),n=>(l(),o(P,{key:n.id,event:n},null,8,["event"]))),128))]),_:1})):v("",!0)]),_:1})}}});export{De as default};
