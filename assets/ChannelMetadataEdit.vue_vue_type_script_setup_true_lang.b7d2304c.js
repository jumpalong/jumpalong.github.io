import{_ as f}from"./UploadButton.vue_vue_type_script_setup_true_lang.87ae30c2.js";import{f as c,bv as _,n as h,y as d,I as U,H as o,C as l,bF as b,z as x,A as C}from"./index.aaa5d7fe.js";import{_ as m}from"./Input.43216aad.js";import{_ as R}from"./Space.d2497847.js";const g={class:"flex"},k=c({__name:"UploadInput",props:{placeholder:null,value:null},emits:["update:value"],setup(p,{emit:s}){const a=p,{placeholder:r}=_(a),e=h({get(){var n;return(n=a.value)!=null?n:""},set(n){s("update:value",n)}});function u(n){e.value=n.url}return(n,t)=>{const i=m;return d(),U("div",g,[o(i,{placeholder:l(r),value:l(e),"onUpdate:value":t[0]||(t[0]=v=>b(e)?e.value=v:null)},null,8,["placeholder","value"]),o(f,{onUploadResult:u})])}}}),$=c({__name:"ChannelMetadataEdit",props:{channelMetadata:null},setup(p){const s=p,{channelMetadata:a}=_(s);return(r,e)=>{const u=m,n=R;return d(),x(n,{vertical:""},{default:C(()=>[o(u,{placeholder:"name",value:l(a).name,"onUpdate:value":e[0]||(e[0]=t=>l(a).name=t)},null,8,["value"]),o(u,{placeholder:"about",value:l(a).about,"onUpdate:value":e[1]||(e[1]=t=>l(a).about=t)},null,8,["value"]),o(k,{placeholder:"picture",value:l(a).picture,"onUpdate:value":e[2]||(e[2]=t=>l(a).picture=t)},null,8,["value"])]),_:1})}}});export{$ as _};