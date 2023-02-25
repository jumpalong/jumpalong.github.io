import{e as o,c as b,b as l,P as H,A as I,B as q,d as v,u as D,j as u,bm as F,l as K,m as h,n as g,p as W,h as X,a3 as Y,X as f,a4 as Z,a5 as G,Y as J,Z as m,_ as p}from"./index.d8f797c6.js";import{N as Q}from"./use-message.9d078f0e.js";import{N as U}from"./Space.28e34898.js";const oo=o([b("table",`
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
 `,[o("th",`
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
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),o("td",`
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
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),l("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),l("single-line",[o("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),o("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),l("single-column",[o("tr",[o("&:not(:last-child)",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),l("striped",[o("tr:nth-of-type(even)",[o("td","background-color: var(--n-td-color-striped)")])]),H("bottom-bordered",[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),I(b("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[o("th",`
 background-color: var(--n-th-color-modal);
 `),o("td",`
 background-color: var(--n-td-color-modal);
 `)])),q(b("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[o("th",`
 background-color: var(--n-th-color-popover);
 `),o("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),ro=Object.assign(Object.assign({},u.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),go=v({name:"Table",props:ro,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:a,mergedRtlRef:d}=D(e),s=u("Table","-table",oo,F,e,r),i=K("Table",d,r),n=h(()=>{const{size:c}=e,{self:{borderColor:x,tdColor:_,tdColorModal:C,tdColorPopover:k,thColor:z,thColorModal:w,thColorPopover:B,thTextColor:P,tdTextColor:R,borderRadius:y,thFontWeight:$,lineHeight:M,borderColorModal:T,borderColorPopover:N,tdColorStriped:S,tdColorStripedModal:V,tdColorStripedPopover:E,[g("fontSize",c)]:j,[g("tdPadding",c)]:L,[g("thPadding",c)]:O},common:{cubicBezierEaseInOut:A}}=s.value;return{"--n-bezier":A,"--n-td-color":_,"--n-td-color-modal":C,"--n-td-color-popover":k,"--n-td-text-color":R,"--n-border-color":x,"--n-border-color-modal":T,"--n-border-color-popover":N,"--n-border-radius":y,"--n-font-size":j,"--n-th-color":z,"--n-th-color-modal":w,"--n-th-color-popover":B,"--n-th-font-weight":$,"--n-th-text-color":P,"--n-line-height":M,"--n-td-padding":L,"--n-th-padding":O,"--n-td-color-striped":S,"--n-td-color-striped-modal":V,"--n-td-color-striped-popover":E}}),t=a?W("table",h(()=>e.size[0]),n,e):void 0;return{rtlEnabled:i,mergedClsPrefix:r,cssVars:a?void 0:n,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),X("table",{class:[`${r}-table`,this.themeClass,{[`${r}-table--rtl`]:this.rtlEnabled,[`${r}-table--bottom-bordered`]:this.bottomBordered,[`${r}-table--bordered`]:this.bordered,[`${r}-table--single-line`]:this.singleLine,[`${r}-table--single-column`]:this.singleColumn,[`${r}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),eo={},to={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},no=G("path",{d:"M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z",fill:"currentColor"},null,-1),lo=[no];function ao(e,r){return f(),Z("svg",to,lo)}const so=Y(eo,[["render",ao]]),ho=v({__name:"ButtonClose",emits:["click"],setup(e,{emit:r}){return(a,d)=>{const s=Q,i=U;return f(),J(i,{quaternary:"",circle:"",type:"error",class:"text-[#6c5ce7] hover:text-[#a29bfe]",onClick:d[0]||(d[0]=n=>r("click",n))},{icon:m(()=>[p(s,null,{default:m(()=>[p(so)]),_:1})]),_:1})}}});export{ho as _,go as a};
