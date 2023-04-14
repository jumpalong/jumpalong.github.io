import{_ as ee,a as te}from"./Drawer.vue_vue_type_script_setup_true_lang.eb3fbe5c.js";import{C as ne}from"./Copy16Filled.6407fd73.js";import{c as L,f as W,u as ae,aB as oe,aD as se,aq as v,h as K,eW as le,av as ie,aC as ue,n as l,q as re,j as O,_ as de,x as ce,bV as me,aL as pe,r as N,bt as ve,y as Q,I as fe,aQ as M,T as ge,ax as H,da as he,cf as _e,z as ye,A as x,H as d,C as P,Q as be,S as Ce,d2 as we,ao as q,a6 as Te,O as j}from"./index.ad5a3ab6.js";import{u as ke}from"./Markdown.332b2c76.js";import{M as Ve}from"./MavonEditor.0cc50f9f.js";import{_ as Fe}from"./UploadInput.vue_vue_type_script_setup_true_lang.ac487649.js";import{u as Ie}from"./naiveUi.3458fb2f.js";import{c as Se}from"./nostr.e909604e.js";import{i as Re}from"./use.155929f4.js";import{_ as Ae,c as Oe}from"./Tag.7971d92c.js";import{s as xe}from"./prop.0533c762.js";import{_ as G}from"./Input.41d0bc3a.js";import{_ as J}from"./Space.e1756818.js";import{N as ze}from"./Icon.32da1a7c.js";import"./DrawerContent.3368dbc4.js";import"./event.4ebd61ae.js";import"./getCacheStaff.6b7a4ad5.js";import"./autoAddRelayurlByEventIdStaff.5eab6df5.js";import"./use-theme-vars.e5566cb3.js";import"./UploadButton.vue_vue_type_script_setup_true_lang.1e92da7e.js";import"./CloudUpload.41ff2ba1.js";import"./get-slot.4ceacf82.js";const Be=L("dynamic-tags",[L("input",{minWidth:"var(--n-input-width)"})]),Ue=Object.assign(Object.assign(Object.assign({},K.props),Oe),{size:{type:String,default:"medium"},closable:{type:Boolean,default:!0},defaultValue:{type:Array,default:()=>[]},value:Array,inputStyle:[String,Object],inputProps:Object,max:Number,tagStyle:[String,Object],renderTag:Function,onCreate:{type:Function,default:a=>a},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]}),$e=W({name:"DynamicTags",props:Ue,setup(a){const{mergedClsPrefixRef:m,inlineThemeDisabled:f}=ae(a),{localeRef:_}=oe("DynamicTags"),y=se(a),{mergedDisabledRef:u}=y,p=v(""),g=v(!1),b=v(!0),C=v(null),z=K("DynamicTags","-dynamic-tags",Be,le,a,m),F=v(a.defaultValue),c=ie(a,"value"),t=ue(c,F),B=l(()=>_.value.add),U=l(()=>xe(a.size)),I=l(()=>u.value||!!a.max&&t.value.length>=a.max);function S(e){const{onChange:o,"onUpdate:value":T,onUpdateValue:E}=a,{nTriggerFormInput:s,nTriggerFormChange:n}=y;o&&N(o,e),E&&N(E,e),T&&N(T,e),F.value=e,s(),n()}function R(e){const o=t.value.slice(0);o.splice(e,1),S(o)}function $(e){switch(e.key){case"Enter":h()}}function h(e){const o=e!=null?e:p.value;if(o){const T=t.value.slice(0);T.push(a.onCreate(o)),S(T)}g.value=!1,b.value=!0,p.value=""}function w(){h()}function D(){g.value=!0,pe(()=>{var e;(e=C.value)===null||e===void 0||e.focus(),b.value=!1})}const A=l(()=>{const{self:{inputWidth:e}}=z.value;return{"--n-input-width":e}}),i=f?re("dynamic-tags",void 0,A,a):void 0;return{mergedClsPrefix:m,inputInstRef:C,localizedAdd:B,inputSize:U,inputValue:p,showInput:g,inputForceFocused:b,mergedValue:t,mergedDisabled:u,triggerDisabled:I,handleInputKeyUp:$,handleAddClick:D,handleInputBlur:w,handleCloseClick:R,handleInputConfirm:h,mergedTheme:z,cssVars:f?void 0:A,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{mergedTheme:a,cssVars:m,mergedClsPrefix:f,onRender:_,renderTag:y}=this;return _==null||_(),O(J,{class:[`${f}-dynamic-tags`,this.themeClass],size:"small",style:m,theme:a.peers.Space,themeOverrides:a.peerOverrides.Space,itemStyle:"display: flex;"},{default:()=>{const{mergedTheme:u,tagStyle:p,type:g,round:b,size:C,color:z,closable:F,mergedDisabled:c,showInput:t,inputValue:B,inputStyle:U,inputSize:I,inputForceFocused:S,triggerDisabled:R,handleInputKeyUp:$,handleInputBlur:h,handleAddClick:w,handleCloseClick:D,handleInputConfirm:A,$slots:i}=this;return this.mergedValue.map((e,o)=>y?y(e,o):O(Ae,{key:o,theme:u.peers.Tag,themeOverrides:u.peerOverrides.Tag,style:p,type:g,round:b,size:C,color:z,closable:F,disabled:c,onClose:()=>D(o)},{default:()=>typeof e=="string"?e:e.label})).concat(t?i.input?i.input({submit:A,deactivate:h}):O(G,Object.assign({placeholder:"",size:I,style:U,autosize:!0},this.inputProps,{ref:"inputInstRef",value:B,onUpdateValue:e=>{this.inputValue=e},theme:u.peers.Input,themeOverrides:u.peerOverrides.Input,onKeyup:$,onBlur:h,internalForceFocus:S})):i.trigger?i.trigger({activate:w,disabled:R}):O(de,{dashed:!0,disabled:R,theme:u.peers.Button,themeOverrides:u.peerOverrides.Button,size:I,onClick:w},{icon:()=>O(ce,{clsPrefix:f},{default:()=>O(me,null)})}))}})}}),De={},Pe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},je=M("g",{fill:"none"},[M("path",{d:"M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9zM4.5 7v7.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7h-11z",fill:"currentColor"})],-1),Me=[je];function Ee(a,m){return Q(),fe("svg",Pe,Me)}const Ne=ve(De,[["render",Ee]]),Le=["id"],He=["title"],qe=["title"],vt=W({__name:"MarkdownEditorView",setup(a){const m=ge(),f=be(),_=Ce();m.start();const y=l(()=>f.params.value),u=l(()=>f.query.new);H(u,()=>{u.value&&m.finish()});const p=v(30023),{addressPointer:g,line:b,longFormContentOptions:C,event:z}=ke(y),F=he(),c=l(()=>{var n;if(Boolean(g.value))return g.value;const s={identifier:we(),pubkey:(n=F.value)!=null?n:"",kind:p.value,relays:[]};return setTimeout(()=>{_.push({name:"markdown-editor",params:{value:q.naddrEncode(s)},query:{new:"1"}})}),s});c.value;const t=v({content:"",title:"",publishedAt:Te(),summary:"",image:"",hashtags:[]});H(C,()=>{const s=t.value,n=C.value;if(n){setTimeout(()=>{m.finish()});for(const[k,V]of Object.entries(n))s[k]=V}},{deep:!0,immediate:!0});const B=l(()=>["title",t.value.title]),U=l(()=>["published_at",String(t.value.publishedAt)]),I=l(()=>["summary",t.value.summary]),S=l(()=>["image",t.value.image]),R=l(()=>["a",`${c.value.kind}:${c.value.pubkey}:${c.value.identifier}`]),$=l(()=>["d",c.value.identifier]),h=l(()=>Se({kind:p.value,content:t.value.content,tags:[$.value,B.value,U.value,I.value,S.value,R.value,...t.value.hashtags.map(s=>["t",s])]})),w=v(),D=_e(),A=async(s,n)=>{var V;const k=await D(n);k.url,(V=w.value)==null||V.$img2Url(s,k.url)},i=Re(p.value,b,void 0);function e(s){t.value.content=s,i(h.value)}const o=v(!1);setTimeout(()=>o.value=!0);const T=Ie();function E(){const s=q.naddrEncode(c.value);T(s)}return(s,n)=>{const k=ze,V=G,X=$e,Y=J;return Q(),ye(te,null,{default:x(({id:Z})=>[M("div",{class:"h-full w-full",id:Z},[d(Ve,{ref_key:"md",ref:w,class:"h-full",onImgAdd:A,onSave:e,modelValue:t.value.content,"onUpdate:modelValue":n[1]||(n[1]=r=>t.value.content=r)},{"right-toolbar-after":x(()=>[M("button",{type:"button",onClick:E,class:"op-icon","aria-hidden":"true",title:`${P(j)("copy")}naddr`},[d(k,null,{default:x(()=>[d(ne)]),_:1})],8,He),M("button",{type:"button",onClick:n[0]||(n[0]=()=>o.value=!o.value),class:"op-icon","aria-hidden":"true",title:P(j)("edit")},[d(k,null,{default:x(()=>[d(Ne)]),_:1})],8,qe)]),_:1},8,["modelValue"]),d(ee,{show:o.value,"onUpdate:show":n[6]||(n[6]=r=>o.value=r),closable:"",height:"100%"},{default:x(()=>[d(Y,{vertical:""},{default:x(()=>[d(Fe,{class:"w-full",placeholder:P(j)("banner"),value:t.value.image,"onUpdate:value":n[2]||(n[2]=r=>t.value.image=r)},null,8,["placeholder","value"]),d(V,{placeholder:P(j)("title"),value:t.value.title,"onUpdate:value":n[3]||(n[3]=r=>t.value.title=r),class:"w-full"},null,8,["placeholder","value"]),d(V,{placeholder:P(j)("summary"),value:t.value.summary,"onUpdate:value":n[4]||(n[4]=r=>t.value.summary=r)},null,8,["placeholder","value"]),d(X,{value:t.value.hashtags,"onUpdate:value":n[5]||(n[5]=r=>t.value.hashtags=r)},null,8,["value"])]),_:1})]),_:1},8,["show"])],8,Le)]),_:1})}}});export{vt as default};
