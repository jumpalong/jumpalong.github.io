import{f as l,bt as m,aq as p,y as _,z as f,A as a,H as o,D as d,F as g,C as h,Y as C,ac as F,_ as v,O as w}from"./index.263e31e4.js";import{g as B}from"./FollowChannel.cdd95215.js";import{e as y}from"./use.005c1652.js";import{_ as M}from"./ChannelMetadataEdit.vue_vue_type_script_setup_true_lang.1d85b2bb.js";import{_ as O}from"./Space.117fa1dd.js";import"./getCacheStaff.b1915842.js";import"./createGarbageFilter.3e1159b1.js";import"./autoAddRelayurlByEventIdStaff.ed9d5285.js";import"./user.c34e6ae3.js";import"./ContentBlacklistView.06106af3.js";import"./Input.6e809293.js";import"./event.f4defe96.js";import"./UploadInput.vue_vue_type_script_setup_true_lang.d2cc71bb.js";import"./UploadButton.vue_vue_type_script_setup_true_lang.77c7d760.js";import"./CloudUpload.0792136c.js";import"./Icon.07f0951b.js";import"./get-slot.4ceacf82.js";const $=l({__name:"CreateChannelView",setup(k){const r=B(),t=m(),s=y(),e=p({});async function i(){if(!e.value.name){t.warning("\u8BF7\u8F93\u5165channelName");return}const n=await C.publish({kind:40,content:JSON.stringify(e.value)},F.getWriteList(),{onOK:s});n?(r.joinChannel(n.id,{channelMetadata:e.value}),t.success("\u521B\u5EFA\u6210\u529F")):t.warning("\u6CA1\u6709\u521B\u5EFA\u6210\u529F")}return(n,x)=>{const u=v,c=O;return _(),f(c,{vertical:""},{default:a(()=>[o(M,{channelMetadata:e.value},null,8,["channelMetadata"]),o(u,{onClick:i},{default:a(()=>[d(g(h(w)("create")),1)]),_:1})]),_:1})}}});export{$ as default};