import{r as m,f as co,a as io}from"./user.90341f0d.js";import{c as uo,a as f,l as d,e as M,j as R,P as _o,C as po,D as ho,d as w,u as mo,m as j,n as bo,p as P,q as L,r as go,h as fo,s as W,V as c,X as B,Y as r,Z as o,_ as v,a3 as b,a4 as i,ad as $,a8 as vo,aa as xo,a6 as s,a2 as S,ae as V,af as A}from"./index.e069f064.js";import{u as Co,N as y}from"./use-message.c63a8014.js";import{N as D,_ as H,l as k}from"./Space.2195441c.js";import{_ as T}from"./Ellipsis.vue_vue_type_script_setup_true_lang.703f832c.js";import{_ as N}from"./Card.dace5702.js";const wo={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},$o=n=>{const{dividerColor:e,cardColor:l,modalColor:p,popoverColor:t,tableHeaderColor:h,tableColorStriped:u,textColor1:_,textColor2:a,borderRadius:x,fontWeightStrong:C,lineHeight:E,fontSizeSmall:F,fontSizeMedium:z,fontSizeLarge:g}=n;return Object.assign(Object.assign({},wo),{fontSizeSmall:F,fontSizeMedium:z,fontSizeLarge:g,lineHeight:E,borderRadius:x,borderColor:f(l,e),borderColorModal:f(p,e),borderColorPopover:f(t,e),tdColor:l,tdColorModal:p,tdColorPopover:t,tdColorStriped:f(l,u),tdColorStripedModal:f(p,u),tdColorStripedPopover:f(t,u),thColor:f(l,h),thColorModal:f(p,h),thColorPopover:f(t,h),thTextColor:_,tdTextColor:a,thFontWeight:C})},ko={name:"Table",common:uo,self:$o},Bo=ko,Eo=d([M("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[d("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[d("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),d("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[d("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),R("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[d("tr",[d("&:last-child",[d("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),R("single-line",[d("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),d("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),R("single-column",[d("tr",[d("&:not(:last-child)",[d("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),R("striped",[d("tr:nth-of-type(even)",[d("td","background-color: var(--n-td-color-striped)")])]),_o("bottom-bordered",[d("tr",[d("&:last-child",[d("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),po(M("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[d("th",`
 background-color: var(--n-th-color-modal);
 `),d("td",`
 background-color: var(--n-td-color-modal);
 `)])),ho(M("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[d("th",`
 background-color: var(--n-th-color-popover);
 `),d("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),Fo=Object.assign(Object.assign({},j.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),O=w({name:"Table",props:Fo,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:l,mergedRtlRef:p}=mo(n),t=j("Table","-table",Eo,Bo,n,e),h=bo("Table",p,e),u=P(()=>{const{size:a}=n,{self:{borderColor:x,tdColor:C,tdColorModal:E,tdColorPopover:F,thColor:z,thColorModal:g,thColorPopover:K,thTextColor:X,tdTextColor:Y,borderRadius:Z,thFontWeight:G,lineHeight:J,borderColorModal:Q,borderColorPopover:oo,tdColorStriped:eo,tdColorStripedModal:ro,tdColorStripedPopover:to,[L("fontSize",a)]:no,[L("tdPadding",a)]:lo,[L("thPadding",a)]:ao},common:{cubicBezierEaseInOut:so}}=t.value;return{"--n-bezier":so,"--n-td-color":C,"--n-td-color-modal":E,"--n-td-color-popover":F,"--n-td-text-color":Y,"--n-border-color":x,"--n-border-color-modal":Q,"--n-border-color-popover":oo,"--n-border-radius":Z,"--n-font-size":no,"--n-th-color":z,"--n-th-color-modal":g,"--n-th-color-popover":K,"--n-th-font-weight":G,"--n-th-text-color":X,"--n-line-height":J,"--n-td-padding":lo,"--n-th-padding":ao,"--n-td-color-striped":eo,"--n-td-color-striped-modal":ro,"--n-td-color-striped-popover":to}}),_=l?go("table",P(()=>n.size[0]),u,n):void 0;return{rtlEnabled:h,mergedClsPrefix:e,cssVars:l?void 0:u,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){var n;const{mergedClsPrefix:e}=this;return(n=this.onRender)===null||n===void 0||n.call(this),fo("table",{class:[`${e}-table`,this.themeClass,{[`${e}-table--rtl`]:this.rtlEnabled,[`${e}-table--bottom-bordered`]:this.bottomBordered,[`${e}-table--bordered`]:this.bordered,[`${e}-table--single-line`]:this.singleLine,[`${e}-table--single-column`]:this.singleColumn,[`${e}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),zo={key:0},yo={class:"text-[#ff4757]"},Ro={class:"text-[#7bed9f]"},Po=w({__name:"Broadcast",setup(n){const e=Co(),l=W(null);function p(){const t=m.broadcast();if(!t){e.error("\u8BF7\u6C42\u5931\u8D25\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u5148\u914D\u7F6E\u4E00\u4E0B\u5217\u8868");return}l.value=W(t).value}return(t,h)=>{const u=D,_=H;return c(),B(_,{trigger:"hover"},{trigger:r(()=>[o(u,{onClick:p,type:"default",loading:l.value,disabled:l.value},{default:r(()=>{var a,x,C;return[v(" \u5E7F\u64AD "),l.value?(c(),b("span",zo,[i("span",yo,$((a=l.value)==null?void 0:a.numberOfSuccesses),1),v("/"),i("span",Ro,$((x=l.value)==null?void 0:x.numberOfErrors),1),v("/"+$((C=l.value)==null?void 0:C.total),1)])):vo("",!0)]}),_:1},8,["loading","disabled"])]),default:r(()=>[v(" \u5C06\u81EA\u5DF1\u7684\u8054\u7CFB\u65B9\u5F0F\u5E7F\u6CDB\u53D1\u5E03\uFF0C\u53EF\u5E2E\u52A9\u522B\u4EBA\u66F4\u5BB9\u6613\u627E\u5230\u81EA\u5DF1 ")]),_:1})}}}),U=w({__name:"RelayFailedFlay",props:{url:null},setup(n){return(e,l)=>(c(),b("div",{class:"h-4 w-4 rounded-full",style:xo({border:"1px solid #747d8c",backgroundColor:s(co).has(n.url)?"red":"white"})},null,4))}}),So={},Do={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 16 16"},Mo=i("g",{fill:"none"},[i("path",{d:"M3.5 13h9a.75.75 0 0 1 .102 1.493l-.102.007h-9a.75.75 0 0 1-.102-1.493L3.5 13h9h-9zM7.898 1.007L8 1a.75.75 0 0 1 .743.648l.007.102v7.688l2.255-2.254a.75.75 0 0 1 .977-.072l.084.072a.75.75 0 0 1 .072.977l-.072.084L8.53 11.78a.75.75 0 0 1-.976.073l-.084-.073l-3.536-3.535a.75.75 0 0 1 .977-1.133l.084.072L7.25 9.44V1.75a.75.75 0 0 1 .648-.743L8 1l-.102.007z",fill:"currentColor"})],-1),Lo=[Mo];function Vo(n,e){return c(),b("svg",Do,Lo)}const Ao=S(So,[["render",Vo]]),To={},No={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 16 16"},Oo=i("g",{fill:"none"},[i("path",{d:"M3.75 2a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5zm4.78 2.72a.75.75 0 0 0-1.06 0L4.22 7.97a.75.75 0 0 0 1.06 1.06l1.97-1.97v6.19a.75.75 0 0 0 1.5 0V7.06l1.97 1.97a.75.75 0 1 0 1.06-1.06L8.53 4.72z",fill:"currentColor"})],-1),Wo=[Oo];function jo(n,e){return c(),b("svg",No,Wo)}const Ho=S(To,[["render",jo]]),Uo={},qo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Io=i("path",{d:"M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z",fill:"currentColor"},null,-1),Ko=[Io];function Xo(n,e){return c(),b("svg",qo,Ko)}const q=S(Uo,[["render",Xo]]),Yo={class:"flex"},Zo={class:"flex-grow"},Go={class:"flex-shrink-0"},Jo=w({__name:"RelayConfigurator",setup(n){const e=P(()=>Object.keys(m.getConfiguration()));function l(t){m.hasWriteByUrl(t)?m.remoteWrite(t):m.addWrite(t)}function p(t){m.hasReadByUrl(t)?m.remoteRead(t):m.addRead(t)}return(t,h)=>{const u=Ho,_=Ao,a=D,x=U,C=O,E=H,F=Po,z=N;return c(),B(z,{title:"\u4E2D\u7EE7\u914D\u7F6E"},{default:r(()=>[o(s(k),{vertical:""},{default:r(()=>[o(C,{striped:""},{default:r(()=>[i("tbody",null,[(c(!0),b(A,null,V(s(e),g=>(c(),b("tr",Yo,[i("td",Zo,[o(T,null,{default:r(()=>[v($(g),1)]),_:2},1024)]),i("td",Go,[o(s(k),{justify:"end",align:"center"},{default:r(()=>[o(s(y),{color:s(m).hasWriteByUrl(g)?"#2ed573":void 0,onClick:()=>l(g)},{default:r(()=>[o(u)]),_:2},1032,["color","onClick"]),o(s(y),{color:s(m).hasReadByUrl(g)?"#2ed573":void 0,onClick:()=>p(g)},{default:r(()=>[o(_)]),_:2},1032,["color","onClick"]),o(a,{quaternary:"",circle:"",type:"error",class:"text-[#6c5ce7] hover:text-[#a29bfe]",onClick:()=>s(m).remove(g)},{icon:r(()=>[o(s(y),null,{default:r(()=>[o(q)]),_:1})]),_:2},1032,["onClick"]),o(x,{url:"url"})]),_:2},1024)])]))),256))])]),_:1}),o(s(k),null,{default:r(()=>[o(E,{trigger:"hover"},{trigger:r(()=>[o(a,{onClick:h[0]||(h[0]=()=>s(m).save()),type:"primary"},{default:r(()=>[v(" \u4FDD\u5B58 ")]),_:1})]),default:r(()=>[v(" \u4F1A\u53D1\u5E03\u5230\u4E91\u7AEF ")]),_:1}),o(F)]),_:1})]),_:1})]),_:1})}}}),Qo={},oe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},ee=i("g",{fill:"none"},[i("path",{d:"M10.5 2.75a.75.75 0 0 0-1.5 0V9H2.75a.75.75 0 0 0 0 1.5H9v6.25a.75.75 0 0 0 1.5 0V10.5h6.25a.75.75 0 0 0 0-1.5H10.5V2.75z",fill:"currentColor"})],-1),re=[ee];function te(n,e){return c(),b("svg",oe,re)}const ne=S(Qo,[["render",te]]),I=w({__name:"AddButton",emits:["click"],setup(n,{emit:e}){return(l,p)=>{const t=ne,h=y,u=D;return c(),B(u,{quaternary:"",circle:"",type:"primary",class:"text-[#6c5ce7] hover:text-[#a29bfe]",onClick:p[0]||(p[0]=_=>e("click",_))},{icon:r(()=>[o(h,null,{default:r(()=>[o(t)]),_:1})]),_:1})}}}),le={class:"flex"},de={class:"flex-grow"},ae={class:"shrink-0"},se=w({__name:"RelayConnected",setup(n){return(e,l)=>{const p=y,t=D,h=k,u=O,_=N;return c(),B(_,{title:"\u6D3B\u52A8\u4E2D\u7EE7"},{default:r(()=>[o(u,{striped:""},{default:r(()=>[i("tbody",null,[(c(!0),b(A,null,V(s(io),a=>(c(),b("tr",le,[i("td",de,[o(T,null,{default:r(()=>[v($(a==null?void 0:a.url),1)]),_:2},1024)]),i("td",ae,[o(h,{justify:"end",align:"center"},{default:r(()=>[o(I,{onClick:()=>s(m).addWriteRead(a==null?void 0:a.url)},null,8,["onClick"]),o(t,{quaternary:"",circle:"",type:"error",class:"text-[#6c5ce7] hover:text-[#a29bfe]",onClick:()=>a==null?void 0:a.close()},{icon:r(()=>[o(p,null,{default:r(()=>[o(q)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)])]))),256))])]),_:1})]),_:1})}}}),ce={class:"flex"},ie={class:"flex-grow"},ue={class:"shrink-0"},_e=w({__name:"RelayOther",setup(n){const e=P(()=>m.getOtherList());return(l,p)=>{const t=O,h=N;return c(),B(h,{title:"\u5176\u4ED6",class:"h-[512px] overflow-auto"},{default:r(()=>[o(t,{striped:""},{default:r(()=>[i("tbody",null,[(c(!0),b(A,null,V(s(e),(u,_)=>(c(),b("tr",ce,[i("td",ie,[o(T,null,{default:r(()=>[v($(u),1)]),_:2},1024)]),i("td",ue,[o(s(k),{justify:"end",align:"center"},{default:r(()=>[o(I,{onClick:()=>s(m).addWriteRead(u)},null,8,["onClick"]),o(U,{url:"url"})]),_:2},1024)])]))),256))])]),_:1})]),_:1})}}}),ve=w({__name:"RelayConfig",setup(n){return(e,l)=>(c(),B(s(k),{vertical:""},{default:r(()=>[o(Jo),o(se),o(_e)]),_:1}))}});export{ve as _};
