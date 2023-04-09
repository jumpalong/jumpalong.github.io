import{f as N,ao as V,P as S,n as f,y as o,z as r,A as l,aN as d,H as u,C as t,D as s,F as a,G as _,I as p,J as h,L as b,aO as $,ab as v,O as e,_ as B}from"./index.6304a51f.js";import{_ as O}from"./RelayConfig.vue_vue_type_script_setup_true_lang.62151a44.js";import{S as z}from"./Scrollbar.9f2302cb.js";import{_ as L}from"./Tooltip.vue_vue_type_script_setup_true_lang.8242804d.js";import{_ as R}from"./Alert.5cbdfb4d.js";import{_ as U}from"./Space.7ea99aad.js";import"./Scrollbar.695c977e.js";import"./use-theme-vars.89c1ef43.js";import"./Close.4c9ddda5.js";import"./Icon.358fada6.js";import"./RelayAddButton.vue_vue_type_script_setup_true_lang.cbb6a5ee.js";import"./use.cd98c830.js";import"./autoAddRelayurlByEventIdStaff.c25d3ca8.js";import"./getCacheStaff.4d97934e.js";import"./AddButton.vue_vue_type_script_setup_true_lang.84021d61.js";import"./RelayInfoView.1d101069.js";import"./Ellipsis.1f56af6a.js";import"./Empty.559ecf73.js";import"./ListItem.6e1cd44c.js";import"./RelayConnectListCard.vue_vue_type_script_setup_true_lang.b24c1a46.js";import"./RelayWritableButton.vue_vue_type_script_setup_true_lang.698c8920.js";import"./Input.9124b0cd.js";import"./MdSearch.5ca1d3d5.js";import"./composables.f1ca8f3c.js";import"./ReloadCircleSharp.aaba4a76.js";import"./get-slot.4ceacf82.js";const A=["textContent"],ut=N({__name:"LoginRelaysView",setup(D){const n=V(S()),g=f(()=>n.value&&v.hasChange()),y=f(()=>Object.keys(v.getConfiguration()).length),x=f(()=>y.value===0?e("please_configure_relay"):g.value?e("please_save_the_configuration"):e("next_step_tip"));function C(){location.reload()}return(c,F)=>{const i=R,k=B,w=U;return o(),r(z,{class:"p-4 box-border w-full h-full"},{default:l(()=>[d(c.$slots,"default"),u(w,{vertical:"",class:"mt-6"},{default:l(()=>[d(c.$slots,"prev-step"),u(L,{tooltip:t(x)},{default:l(()=>[d(c.$slots,"next-step",{disabled:t(g)||t(y)===0})]),_:3},8,["tooltip"]),u(i,{class:"mt-4",title:t(e)("welcome"),type:"info",closable:""},{default:l(()=>[s(a(t(e)("login_welcome")),1)]),_:1},8,["title"]),n.value?_("",!0):(o(),r(i,{key:0,title:t(e)("configuring_relay_prompts"),type:"warning",closable:""},{default:l(()=>[s(a(t(e)("configuring_relay_prompts_text")),1)]),_:1},8,["title"])),n.value?_("",!0):(o(),r(i,{key:1,title:t(e)("synchronization_guide"),type:"info",closable:""},{default:l(()=>[(o(!0),p(b,null,h(t(e)("synchronization_guide_text").split(`
`),m=>(o(),p("div",null,a(m),1))),256))]),_:1},8,["title"])),n.value?_("",!0):(o(),r(i,{key:2,title:t(e)("note"),type:"info",closable:""},{default:l(()=>[s(a(t(e)("discard_changes0"))+" ",1),u(k,{text:"",onClick:C},{default:l(()=>[s(a(t(e)("discard_changes1")),1)]),_:1}),s(" "+a(t(e)("discard_changes2")),1)]),_:1},8,["title"])),n.value?_("",!0):(o(),r(i,{key:3,title:t(e)("note"),type:"info",closable:""},{default:l(()=>[s(a(t(e)("sync_note")),1)]),_:1},8,["title"])),n.value?(o(),r(i,{key:4,title:t(e)("configuring_a_simple_tutorial"),type:"info",closable:""},{default:l(()=>[(o(!0),p(b,null,h(t(e)("configuring_a_simple_tutorial_text").split(`
`),m=>(o(),p("div",null,a(m),1))),256))]),_:1},8,["title"])):_("",!0),n.value?(o(),r(i,{key:5,title:t(e)("detailed_tutorials"),type:"info",closable:""},{default:l(()=>[$("p",{textContent:a(t(e)("detailed_tutorials_text")),style:{whiteSpace:"pre-line"}},null,8,A)]),_:1},8,["title"])):_("",!0),n.value?(o(),r(i,{key:6,title:t(e)("what_is_nostr"),type:"info",closable:""},{default:l(()=>[s(a(t(e)("what_is_nostr_text")),1)]),_:1},8,["title"])):_("",!0),u(O,{class:"h-full mt-4"})]),_:3})]),_:3})}}});export{ut as default};
