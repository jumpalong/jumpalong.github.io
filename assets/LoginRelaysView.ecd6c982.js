import{f as N,ap as V,P as S,n as f,y as o,z as r,A as l,aO as d,H as u,C as t,D as s,F as a,G as _,I as p,J as h,L as b,aP as $,a9 as v,O as e,_ as B}from"./index.c4788000.js";import{_ as O}from"./RelayConfig.vue_vue_type_script_setup_true_lang.ed88546d.js";import{S as z}from"./Scrollbar.ad5f3fcb.js";import{_ as L}from"./Tooltip.vue_vue_type_script_setup_true_lang.8eb195b0.js";import{_ as R}from"./Alert.d7afcd78.js";import{_ as U}from"./Space.03ee7147.js";import"./Scrollbar.c314c9ae.js";import"./use-theme-vars.1b812769.js";import"./Close.d5de7318.js";import"./Icon.892f0752.js";import"./RelayAddButton.vue_vue_type_script_setup_true_lang.3b99d839.js";import"./use.8c9b9f33.js";import"./autoAddRelayurlByEventIdStaff.0f24d42b.js";import"./getCacheStaff.b13a93e7.js";import"./AddButton.vue_vue_type_script_setup_true_lang.88636aa0.js";import"./RelayInfoView.ee3cd758.js";import"./Ellipsis.e04d5fd8.js";import"./Empty.dfe4169a.js";import"./ListItem.1b1c7759.js";import"./RelayConnectListCard.vue_vue_type_script_setup_true_lang.6a746513.js";import"./RelayWritableButton.vue_vue_type_script_setup_true_lang.838305f9.js";import"./Input.683297a9.js";import"./MdSearch.e9495723.js";import"./composables.3587e9af.js";import"./get-slot.4ceacf82.js";const A=["textContent"],_t=N({__name:"LoginRelaysView",setup(D){const n=V(S()),g=f(()=>n.value&&v.hasChange()),y=f(()=>Object.keys(v.getConfiguration()).length),x=f(()=>y.value===0?e("please_configure_relay"):g.value?e("please_save_the_configuration"):e("next_step_tip"));function C(){location.reload()}return(c,F)=>{const i=R,k=B,w=U;return o(),r(z,{class:"p-4 box-border w-full h-full"},{default:l(()=>[d(c.$slots,"default"),u(w,{vertical:"",class:"mt-6"},{default:l(()=>[d(c.$slots,"prev-step"),u(L,{tooltip:t(x)},{default:l(()=>[d(c.$slots,"next-step",{disabled:t(g)||t(y)===0})]),_:3},8,["tooltip"]),u(i,{class:"mt-4",title:t(e)("welcome"),type:"info",closable:""},{default:l(()=>[s(a(t(e)("login_welcome")),1)]),_:1},8,["title"]),n.value?_("",!0):(o(),r(i,{key:0,title:t(e)("configuring_relay_prompts"),type:"warning",closable:""},{default:l(()=>[s(a(t(e)("configuring_relay_prompts_text")),1)]),_:1},8,["title"])),n.value?_("",!0):(o(),r(i,{key:1,title:t(e)("synchronization_guide"),type:"info",closable:""},{default:l(()=>[(o(!0),p(b,null,h(t(e)("synchronization_guide_text").split(`
`),m=>(o(),p("div",null,a(m),1))),256))]),_:1},8,["title"])),n.value?_("",!0):(o(),r(i,{key:2,title:t(e)("note"),type:"info",closable:""},{default:l(()=>[s(a(t(e)("discard_changes0"))+" ",1),u(k,{text:"",onClick:C},{default:l(()=>[s(a(t(e)("discard_changes1")),1)]),_:1}),s(" "+a(t(e)("discard_changes2")),1)]),_:1},8,["title"])),n.value?_("",!0):(o(),r(i,{key:3,title:t(e)("note"),type:"info",closable:""},{default:l(()=>[s(a(t(e)("sync_note")),1)]),_:1},8,["title"])),n.value?(o(),r(i,{key:4,title:t(e)("configuring_a_simple_tutorial"),type:"info",closable:""},{default:l(()=>[(o(!0),p(b,null,h(t(e)("configuring_a_simple_tutorial_text").split(`
`),m=>(o(),p("div",null,a(m),1))),256))]),_:1},8,["title"])):_("",!0),n.value?(o(),r(i,{key:5,title:t(e)("detailed_tutorials"),type:"info",closable:""},{default:l(()=>[$("p",{textContent:a(t(e)("detailed_tutorials_text")),style:{whiteSpace:"pre-line"}},null,8,A)]),_:1},8,["title"])):_("",!0),n.value?(o(),r(i,{key:6,title:t(e)("what_is_nostr"),type:"info",closable:""},{default:l(()=>[s(a(t(e)("what_is_nostr_text")),1)]),_:1},8,["title"])):_("",!0),u(O,{class:"h-full mt-4"})]),_:3})]),_:3})}}});export{_t as default};