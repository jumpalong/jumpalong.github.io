import{f as l,bs as m,aq as p,y as _,z as f,A as a,H as o,D as d,F as g,C as h,Y as C,ab as F,_ as v,O as w}from"./index.5bd2a348.js";import{g as B}from"./FollowChannel.1e9dcae6.js";import{e as y}from"./use.43aa8a2b.js";import{_ as M}from"./ChannelMetadataEdit.vue_vue_type_script_setup_true_lang.157298ce.js";import{_ as O}from"./Space.ba3d3247.js";import"./getCacheStaff.f63839b3.js";import"./createGarbageFilter.5c6ab2a5.js";import"./autoAddRelayurlByEventIdStaff.1b7cfbea.js";import"./user.e0e91af5.js";import"./ContentBlacklistView.2490232b.js";import"./Input.d0fcd3c4.js";import"./event.fa9f7acc.js";import"./UploadInput.vue_vue_type_script_setup_true_lang.e51b60b0.js";import"./UploadButton.vue_vue_type_script_setup_true_lang.cce0a536.js";import"./CloudUpload.6fe7e4b3.js";import"./Icon.4c613503.js";import"./get-slot.4ceacf82.js";const $=l({__name:"CreateChannelView",setup(b){const s=B(),n=m(),r=y(),e=p({});async function i(){if(!e.value.name){n.warning("\u8BF7\u8F93\u5165channelName");return}const t=await C.publish({kind:40,content:JSON.stringify(e.value)},F.getWriteList(),{onOK:r});t?(s.joinChannel(t.id,{channelMetadata:e.value}),n.success("\u521B\u5EFA\u6210\u529F")):n.warning("\u6CA1\u6709\u521B\u5EFA\u6210\u529F")}return(t,k)=>{const u=v,c=O;return _(),f(c,{vertical:""},{default:a(()=>[o(M,{channelMetadata:e.value},null,8,["channelMetadata"]),o(u,{onClick:i},{default:a(()=>[d(g(h(w)("create")),1)]),_:1})]),_:1})}}});export{$ as default};
