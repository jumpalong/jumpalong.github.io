import{g,a as h}from"./FollowChannel.58136f82.js";import{_ as C}from"./ChannelMetadataEdit.vue_vue_type_script_setup_true_lang.a7ac5704.js";import{f as w,aB as B,o as n,V as y,ae as M,aQ as O,A as L,B as N,C as u,D as r,H as S,I as k,F as x,R as F,dS as V,az as s,_ as b,X as D,Q as I}from"./index.ddbfeb2e.js";import"./UploadInput.vue_vue_type_script_setup_true_lang.38a6b87a.js";import"./UploadButton.vue_vue_type_script_setup_true_lang.1b04ab38.js";import"./CloudUpload.0c626ccd.js";const E=w({__name:"EditChannelView",setup(R){const i=B(),c=F(),_=n(()=>V(c.params.value)),t=n(()=>{var e;return(e=_.value)==null?void 0:e.id}),m=g(),a=y({}),o=n(()=>{if(!!t.value)return h(t.value)}),l=n(()=>{var e;return(e=o.value)==null?void 0:e.feat.useMetadata()});M(()=>l.value,()=>{Object.assign(a.value,l.value)},{deep:!0,immediate:!0});const d=O();function p(){if(!t.value)return;if(!a.value.name){i.warning("\u8BF7\u8F93\u5165channelName");return}if(!o.value)return;const e=[...s.getWriteList()][0];a.value.relayUrls=[...new Set([...s.getReadList(),...s.getWriteList()])],o.value.publish({kind:41,content:JSON.stringify(a.value),tags:[["e",t.value,e]]},s.getWriteList(),{onOK:d}),m.setChannelmetadata(t.value,a.value)}return(e,W)=>{const v=b,f=D;return L(),N(f,{vertical:""},{default:u(()=>[r(C,{channelMetadata:a.value},null,8,["channelMetadata"]),r(v,{onClick:p},{default:u(()=>[S(k(x(I)("save")),1)]),_:1})]),_:1})}}});export{E as default};