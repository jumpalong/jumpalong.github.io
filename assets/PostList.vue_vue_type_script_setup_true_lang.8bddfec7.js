import{e as P}from"./event.e7c9f230.js";import{_ as C}from"./PapawList.vue_vue_type_script_setup_true_lang.30b43373.js";import{f as S,bw as w,bs as z,n as l,bo as D,ap as v,y as m,I as _,C as s,H as b,G as B,z as F,aF as I,O as j}from"./index.0e420a7a.js";import{g as N}from"./use.7b5663cd.js";import{e as U}from"./Content.676f5600.js";import{u as V}from"./Scrollbar.3fc623a0.js";import{_ as q}from"./RelayInfoView.1000451d.js";import{_ as A}from"./Empty.3f22b2fc.js";const G={key:0,class:"py-20 flex items-center justify-center"},H={key:1,class:"h-40 flex justify-center items-center"},Y=S({__name:"PostList",props:{urls:null,pubkeys:null,filter:null,filters:null,pushEvent:null,active:{type:Boolean,default:!0},disabledLoad:{type:Boolean},disabledEmpty:{type:Boolean},limit:null,reverseSort:{type:Boolean},disabledReply:{type:Boolean}},emits:["update:pushEvent"],setup(i,{expose:L,emit:E}){const c=i;logger.for("home.vue").for("PostList.vue").info("\u8FDB\u5165PostList.vue");const{pubkeys:o,filter:r,filters:u,urls:f,active:p}=w(c);z(),logger.for("home.vue").for("PostList.vue").debug("defineProps > pubkey:",o);const y=l(()=>{const e=u!=null&&u.value?[...u.value]:[];return r!=null&&r.value&&e.push(r.value),o!=null&&o.value&&e.push(...o.value.map(t=>({kinds:[30023,1],authors:[t]}))),e}),k=l(()=>{var e;return[...(e=o==null?void 0:o.value)!=null?e:[],...y.value.map(t=>{var d;return(d=t.authors)!=null?d:[]}).flat(1)]}),a=l(()=>{const e={},t=U({filters:y.value,...e,addUrls:f==null?void 0:f.value,pubkeys:k.value,limit:c.limit});return c.reverseSort&&t.addStaffOfSortByCreateAt(),t}),R=V(a,p);D(()=>{var e;(e=a.value)==null||e.closeReq()});const n=l(()=>{var e;return(e=a.value)==null?void 0:e.getList()});E("update:pushEvent",e=>{var t;(t=a.value)==null||t.pushEvent(e)});const g=l(()=>{var e,t;return((e=a.value)==null?void 0:e.feat.loadBufferOpt.isLoading)||((t=a.value)==null?void 0:t.feat.refreshBufferOpt.isLoading)});L({postEvents:n,...R});const h=v(void 0);return N(h,{active:p!=null?p:v(!0)}),v(I()),(e,t)=>{const d=q,x=A;return m(),_("div",{ref_key:"divRef",ref:h},[!i.disabledLoad&&s(g)&&s(n)&&s(n).length===0?(m(),_("div",G,[b(d,{size:"medium"})])):!i.disabledEmpty&&!s(g)&&s(n)&&s(n).length===0?(m(),_("div",H,[b(x,{description:s(j)("empty_text"),size:"huge"},null,8,["description"])])):B("",!0),s(n)?(m(),F(C,{key:2,eventList:s(n),withPapawOptionsButtons:"",disabledReply:i.disabledReply,onEventDeletion:t[0]||(t[0]=O=>s(P)(O))},null,8,["eventList","disabledReply"])):B("",!0)],512)}}});export{Y as _};