import{bt as y,y as d,I as C,aQ as c,f as b,n as V,aq as $,z as A,A as e,aP as l,H as o,C as t,bG as B,D as m,F as u,bK as N,V as z,O as a}from"./index.70f8884a.js";import{_ as D}from"./LoginCard.vue_vue_type_script_setup_true_lang.615c2921.js";import{_ as K}from"./Tooltip.vue_vue_type_script_setup_true_lang.ca767078.js";import{u as j}from"./naiveUi.0feadf26.js";import{_ as E}from"./Checkbox.1e7a2f90.js";import{N as F}from"./Icon.76b8c9c6.js";import{_ as H}from"./Input.c72c1027.js";import{_ as I}from"./Alert.c62b6ee1.js";import{_ as L}from"./Space.7a03ce87.js";import"./use.649125ec.js";import"./autoAddRelayurlByEventIdStaff.6030713a.js";import"./getCacheStaff.3d60947c.js";import"./Favicon.c8296274.js";import"./Scrollbar.0f77d236.js";import"./Scrollbar.aca2cd5d.js";import"./composables.43b0b4c0.js";import"./get-slot.4ceacf82.js";const M={},S={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 16 16"},U=c("g",{fill:"none"},[c("path",{d:"M4 4.085V10.5a2.5 2.5 0 0 0 2.336 2.495L6.5 13h4.414A1.5 1.5 0 0 1 9.5 14H6a3 3 0 0 1-3-3V5.5a1.5 1.5 0 0 1 1-1.415zM11.5 2A1.5 1.5 0 0 1 13 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 5 10.5v-7A1.5 1.5 0 0 1 6.5 2h5z",fill:"currentColor"})],-1),q=[U];function G(f,i){return d(),C("svg",S,q)}const O=y(M,[["render",G]]),_e=b({__name:"LoginCompleteView",setup(f){const i=j(),s=V(()=>N.nsecEncode(z.value.privateKey));function v(){i(s.value)}const r=$();return(p,n)=>{const h=F,k=H,w=I,x=E,g=L;return d(),A(D,null,{header:e(()=>[l(p.$slots,"default")]),default:e(()=>[o(g,{class:"mt-6",vertical:""},{default:e(()=>[o(k,{placeholder:"",value:t(s),"onUpdate:value":n[0]||(n[0]=_=>B(s)?s.value=_:null),type:"password","show-password-on":"click"},{suffix:e(()=>[o(h,{class:"px-2",onClick:v},{default:e(()=>[o(O,{class:"hover:text-[#2ed573]"})]),_:1})]),_:1},8,["value"]),o(w,{class:"mt-2",title:t(a)("note"),type:"warning"},{default:e(()=>[m(u(t(a)("keep_private_key_prompt")),1)]),_:1},8,["title"]),o(x,{class:"mt-2",checked:r.value,"onUpdate:checked":n[1]||(n[1]=_=>r.value=_)},{default:e(()=>[m(u(t(a)("i_have_saved_my_private_key_properly")),1)]),_:1},8,["checked"]),l(p.$slots,"prev-step"),o(K,{jtooltip:t(a)("tick_prompt")},{default:e(()=>[l(p.$slots,"next-step",{disabled:!r.value})]),_:3},8,["jtooltip"])]),_:3})]),_:3})}}});export{_e as default};