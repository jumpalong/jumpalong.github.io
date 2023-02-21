import{r as b,f as so,a as co}from"./user.62a3b15e.js";import{c as io,a as x,l as a,e as S,j as z,P as uo,C as _o,D as po,d as f,u as ho,m as W,n as bo,p as y,q as M,r as mo,h as go,V as i,a2 as g,a3 as u,s as O,X as B,Y as r,Z as o,_ as C,ac as k,a7 as fo,a9 as vo,a5 as d,ad as A,ae as L}from"./index.5e976b28.js";import{u as xo,_ as V}from"./Ellipsis.vue_vue_type_script_setup_true_lang.dde593dd.js";import{N as R,_ as j,l as $}from"./Space.e53fc030.js";import{_ as T}from"./Card.2239ab71.js";import{N as E}from"./Icon.dd751103.js";const Co={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},wo=l=>{const{dividerColor:e,cardColor:t,modalColor:_,popoverColor:n,tableHeaderColor:p,tableColorStriped:s,textColor1:h,textColor2:m,borderRadius:c,fontWeightStrong:w,lineHeight:F,fontSizeSmall:v,fontSizeMedium:P,fontSizeLarge:D}=l;return Object.assign(Object.assign({},Co),{fontSizeSmall:v,fontSizeMedium:P,fontSizeLarge:D,lineHeight:F,borderRadius:c,borderColor:x(t,e),borderColorModal:x(_,e),borderColorPopover:x(n,e),tdColor:t,tdColorModal:_,tdColorPopover:n,tdColorStriped:x(t,s),tdColorStripedModal:x(_,s),tdColorStripedPopover:x(n,s),thColor:x(t,p),thColorModal:x(_,p),thColorPopover:x(n,p),thTextColor:h,tdTextColor:m,thFontWeight:w})},ko={name:"Table",common:io,self:wo},$o=ko,Bo=a([S("table",`
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
 `,[a("th",`
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
 `,[a("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),a("td",`
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
 `,[a("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),z("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[a("tr",[a("&:last-child",[a("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),z("single-line",[a("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),a("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),z("single-column",[a("tr",[a("&:not(:last-child)",[a("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),z("striped",[a("tr:nth-of-type(even)",[a("td","background-color: var(--n-td-color-striped)")])]),uo("bottom-bordered",[a("tr",[a("&:last-child",[a("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),_o(S("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[a("th",`
 background-color: var(--n-th-color-modal);
 `),a("td",`
 background-color: var(--n-td-color-modal);
 `)])),po(S("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[a("th",`
 background-color: var(--n-th-color-popover);
 `),a("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),Fo=Object.assign(Object.assign({},W.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),N=f({name:"Table",props:Fo,setup(l){const{mergedClsPrefixRef:e,inlineThemeDisabled:t,mergedRtlRef:_}=ho(l),n=W("Table","-table",Bo,$o,l,e),p=bo("Table",_,e),s=y(()=>{const{size:m}=l,{self:{borderColor:c,tdColor:w,tdColorModal:F,tdColorPopover:v,thColor:P,thColorModal:D,thColorPopover:I,thTextColor:K,tdTextColor:X,borderRadius:Y,thFontWeight:Z,lineHeight:G,borderColorModal:J,borderColorPopover:Q,tdColorStriped:oo,tdColorStripedModal:eo,tdColorStripedPopover:ro,[M("fontSize",m)]:to,[M("tdPadding",m)]:no,[M("thPadding",m)]:lo},common:{cubicBezierEaseInOut:ao}}=n.value;return{"--n-bezier":ao,"--n-td-color":w,"--n-td-color-modal":F,"--n-td-color-popover":v,"--n-td-text-color":X,"--n-border-color":c,"--n-border-color-modal":J,"--n-border-color-popover":Q,"--n-border-radius":Y,"--n-font-size":to,"--n-th-color":P,"--n-th-color-modal":D,"--n-th-color-popover":I,"--n-th-font-weight":Z,"--n-th-text-color":K,"--n-line-height":G,"--n-td-padding":no,"--n-th-padding":lo,"--n-td-color-striped":oo,"--n-td-color-striped-modal":eo,"--n-td-color-striped-popover":ro}}),h=t?mo("table",y(()=>l.size[0]),s,l):void 0;return{rtlEnabled:p,mergedClsPrefix:e,cssVars:t?void 0:s,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){var l;const{mergedClsPrefix:e}=this;return(l=this.onRender)===null||l===void 0||l.call(this),go("table",{class:[`${e}-table`,this.themeClass,{[`${e}-table--rtl`]:this.rtlEnabled,[`${e}-table--bottom-bordered`]:this.bottomBordered,[`${e}-table--bordered`]:this.bordered,[`${e}-table--single-line`]:this.singleLine,[`${e}-table--single-column`]:this.singleColumn,[`${e}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),Eo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},zo=u("g",{fill:"none"},[u("path",{d:"M10.5 2.75a.75.75 0 0 0-1.5 0V9H2.75a.75.75 0 0 0 0 1.5H9v6.25a.75.75 0 0 0 1.5 0V10.5h6.25a.75.75 0 0 0 0-1.5H10.5V2.75z",fill:"currentColor"})],-1),yo=[zo],Ro=f({name:"Add20Filled",render:function(e,t){return i(),g("svg",Eo,yo)}}),Po={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 16 16"},Do=u("g",{fill:"none"},[u("path",{d:"M3.5 13h9a.75.75 0 0 1 .102 1.493l-.102.007h-9a.75.75 0 0 1-.102-1.493L3.5 13h9h-9zM7.898 1.007L8 1a.75.75 0 0 1 .743.648l.007.102v7.688l2.255-2.254a.75.75 0 0 1 .977-.072l.084.072a.75.75 0 0 1 .072.977l-.072.084L8.53 11.78a.75.75 0 0 1-.976.073l-.084-.073l-3.536-3.535a.75.75 0 0 1 .977-1.133l.084.072L7.25 9.44V1.75a.75.75 0 0 1 .648-.743L8 1l-.102.007z",fill:"currentColor"})],-1),So=[Do],Mo=f({name:"ArrowDownload16Filled",render:function(e,t){return i(),g("svg",Po,So)}}),Ao={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 16 16"},Lo=u("g",{fill:"none"},[u("path",{d:"M3.75 2a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5zm4.78 2.72a.75.75 0 0 0-1.06 0L4.22 7.97a.75.75 0 0 0 1.06 1.06l1.97-1.97v6.19a.75.75 0 0 0 1.5 0V7.06l1.97 1.97a.75.75 0 1 0 1.06-1.06L8.53 4.72z",fill:"currentColor"})],-1),Vo=[Lo],To=f({name:"ArrowUpload16Filled",render:function(e,t){return i(),g("svg",Ao,Vo)}}),No={key:0},Oo={class:"text-[#ff4757]"},Wo={class:"text-[#7bed9f]"},jo=f({__name:"Broadcast",setup(l){const e=xo(),t=O(null);function _(){const n=b.broadcast();if(!n){e.error("\u8BF7\u6C42\u5931\u8D25\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u5148\u914D\u7F6E\u4E00\u4E0B\u5217\u8868");return}t.value=O(n).value}return(n,p)=>{const s=R,h=j;return i(),B(h,{trigger:"hover"},{trigger:r(()=>[o(s,{onClick:_,type:"default",loading:t.value,disabled:t.value},{default:r(()=>{var m,c,w;return[C(" \u5E7F\u64AD "),t.value?(i(),g("span",No,[u("span",Oo,k((m=t.value)==null?void 0:m.numberOfSuccesses),1),C("/"),u("span",Wo,k((c=t.value)==null?void 0:c.numberOfErrors),1),C("/"+k((w=t.value)==null?void 0:w.total),1)])):fo("",!0)]}),_:1},8,["loading","disabled"])]),default:r(()=>[C(" \u5C06\u81EA\u5DF1\u7684\u8054\u7CFB\u65B9\u5F0F\u5E7F\u6CDB\u53D1\u5E03\uFF0C\u53EF\u5E2E\u52A9\u522B\u4EBA\u66F4\u5BB9\u6613\u627E\u5230\u81EA\u5DF1 ")]),_:1})}}}),H=f({__name:"RelayFailedFlay",props:{url:null},setup(l){return(e,t)=>(i(),g("div",{class:"h-4 w-4 rounded-full",style:vo({border:"1px solid #747d8c",backgroundColor:d(so).has(l.url)?"red":"white"})},null,4))}}),Ho={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Uo=u("path",{d:"M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z",fill:"currentColor"},null,-1),qo=[Uo],U=f({name:"Close",render:function(e,t){return i(),g("svg",Ho,qo)}}),Io={class:"flex"},Ko={class:"flex-grow"},Xo={class:"flex-shrink-0"},Yo=f({__name:"RelayConfigurator",setup(l){const e=y(()=>Object.keys(b.getConfiguration()));function t(n){b.hasWriteByUrl(n)?b.remoteWrite(n):b.addWrite(n)}function _(n){b.hasReadByUrl(n)?b.remoteRead(n):b.addRead(n)}return(n,p)=>{const s=R,h=H,m=N,c=j,w=jo,F=T;return i(),B(F,{title:"\u4E2D\u7EE7\u914D\u7F6E"},{default:r(()=>[o(d($),{vertical:""},{default:r(()=>[o(m,{striped:""},{default:r(()=>[u("tbody",null,[(i(!0),g(L,null,A(d(e),v=>(i(),g("tr",Io,[u("td",Ko,[o(V,null,{default:r(()=>[C(k(v),1)]),_:2},1024)]),u("td",Xo,[o(d($),{justify:"end",align:"center"},{default:r(()=>[o(d(E),{color:d(b).hasWriteByUrl(v)?"#2ed573":void 0,onClick:()=>t(v)},{default:r(()=>[o(d(To))]),_:2},1032,["color","onClick"]),o(d(E),{color:d(b).hasReadByUrl(v)?"#2ed573":void 0,onClick:()=>_(v)},{default:r(()=>[o(d(Mo))]),_:2},1032,["color","onClick"]),o(s,{quaternary:"",circle:"",type:"error",class:"text-[#6c5ce7] hover:text-[#a29bfe]",onClick:()=>d(b).remove(v)},{icon:r(()=>[o(d(E),null,{default:r(()=>[o(d(U))]),_:1})]),_:2},1032,["onClick"]),o(h,{url:"url"})]),_:2},1024)])]))),256))])]),_:1}),o(d($),null,{default:r(()=>[o(c,{trigger:"hover"},{trigger:r(()=>[o(s,{onClick:p[0]||(p[0]=()=>d(b).save()),type:"primary"},{default:r(()=>[C(" \u4FDD\u5B58 ")]),_:1})]),default:r(()=>[C(" \u4F1A\u53D1\u5E03\u5230\u4E91\u7AEF ")]),_:1}),o(w)]),_:1})]),_:1})]),_:1})}}}),q=f({__name:"AddButton",emits:["click"],setup(l,{emit:e}){return(t,_)=>{const n=E,p=R;return i(),B(p,{quaternary:"",circle:"",type:"primary",class:"text-[#6c5ce7] hover:text-[#a29bfe]",onClick:_[0]||(_[0]=s=>e("click",s))},{icon:r(()=>[o(n,null,{default:r(()=>[o(d(Ro))]),_:1})]),_:1})}}}),Zo={class:"flex"},Go={class:"flex-grow"},Jo={class:"shrink-0"},Qo=f({__name:"RelayConnected",setup(l){return(e,t)=>{const _=q,n=E,p=R,s=$,h=N,m=T;return i(),B(m,{title:"\u6D3B\u52A8\u4E2D\u7EE7"},{default:r(()=>[o(h,{striped:""},{default:r(()=>[u("tbody",null,[(i(!0),g(L,null,A(d(co),c=>(i(),g("tr",Zo,[u("td",Go,[o(V,null,{default:r(()=>[C(k(c==null?void 0:c.url),1)]),_:2},1024)]),u("td",Jo,[o(s,{justify:"end",align:"center"},{default:r(()=>[o(_,{onClick:()=>d(b).addWriteRead(c==null?void 0:c.url)},null,8,["onClick"]),o(p,{quaternary:"",circle:"",type:"error",class:"text-[#6c5ce7] hover:text-[#a29bfe]",onClick:()=>c==null?void 0:c.close()},{icon:r(()=>[o(n,null,{default:r(()=>[o(d(U))]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)])]))),256))])]),_:1})]),_:1})}}}),oe={class:"flex"},ee={class:"flex-grow"},re={class:"shrink-0"},te=f({__name:"RelayOther",setup(l){const e=y(()=>b.getOtherList());return(t,_)=>{const n=N,p=T;return i(),B(p,{title:"\u5176\u4ED6",class:"h-[512px] overflow-auto"},{default:r(()=>[o(n,{striped:""},{default:r(()=>[u("tbody",null,[(i(!0),g(L,null,A(d(e),(s,h)=>(i(),g("tr",oe,[u("td",ee,[o(V,null,{default:r(()=>[C(k(s),1)]),_:2},1024)]),u("td",re,[o(d($),{justify:"end",align:"center"},{default:r(()=>[o(q,{onClick:()=>d(b).addWriteRead(s)},null,8,["onClick"]),o(H,{url:"url"})]),_:2},1024)])]))),256))])]),_:1})]),_:1})}}}),ie=f({__name:"RelayConfig",setup(l){return(e,t)=>(i(),B(d($),{vertical:""},{default:r(()=>[o(Yo),o(Qo),o(te)]),_:1}))}});export{ie as _};
