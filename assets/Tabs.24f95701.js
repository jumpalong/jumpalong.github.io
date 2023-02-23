import{d as D,s as z,al as lt,h as d,ay as dt,aL as q,as as ct,c as bt,y as ft,i as Se,O as ut,p as Y,t as pt,ae as vt,v as gt,a_ as ht,N as mt,a$ as xt,e as i,j as C,l as R,f as I,P as yt,u as Ct,m as we,w as Q,z as St,A as F,aS as wt,q as A,r as Pt,am as Z,ai as Tt,aU as Rt,b0 as zt,aV as Lt}from"./index.624fb536.js";import{s as $t,t as ue,v as pe,i as ee,b as Bt,w as _t,a as ve,V as ge,c as X}from"./Space.2d3d5681.js";const Wt=ue(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[ue("&::-webkit-scrollbar",{width:0,height:0})]),At=D({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=z(null);function n(o){!(o.currentTarget.offsetWidth<o.currentTarget.scrollWidth)||o.deltaY===0||(o.currentTarget.scrollLeft+=o.deltaY+o.deltaX,o.preventDefault())}const r=lt();return Wt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:$t,ssr:r}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...o){var x;(x=e.value)===null||x===void 0||x.scrollTo(...o)}})},render(){return d("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Et=/\s/;function kt(e){for(var n=e.length;n--&&Et.test(e.charAt(n)););return n}var jt=/^\s+/;function It(e){return e&&e.slice(0,kt(e)+1).replace(jt,"")}var he=0/0,Mt=/^[-+]0x[0-9a-f]+$/i,Ft=/^0b[01]+$/i,Ot=/^0o[0-7]+$/i,Ht=parseInt;function me(e){if(typeof e=="number")return e;if(dt(e))return he;if(q(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=q(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=It(e);var r=Ft.test(e);return r||Ot.test(e)?Ht(e.slice(2),r?2:8):Mt.test(e)?he:+e}var Vt=function(){return ct.Date.now()};const te=Vt;var Dt="Expected a function",Gt=Math.max,Nt=Math.min;function Ut(e,n,r){var c,o,x,f,b,v,m=0,P=!1,g=!1,u=!0;if(typeof e!="function")throw new TypeError(Dt);n=me(n)||0,q(r)&&(P=!!r.leading,g="maxWait"in r,x=g?Gt(me(r.maxWait)||0,n):x,u="trailing"in r?!!r.trailing:u);function h(y){var _=c,k=o;return c=o=void 0,m=y,f=e.apply(k,_),f}function S(y){return m=y,b=setTimeout(B,n),P?h(y):f}function L(y){var _=y-v,k=y-m,M=n-_;return g?Nt(M,x-k):M}function T(y){var _=y-v,k=y-m;return v===void 0||_>=n||_<0||g&&k>=x}function B(){var y=te();if(T(y))return p(y);b=setTimeout(B,L(y))}function p(y){return b=void 0,u&&c?h(y):(c=o=void 0,f)}function w(){b!==void 0&&clearTimeout(b),m=0,c=v=o=b=void 0}function E(){return b===void 0?f:p(te())}function V(){var y=te(),_=T(y);if(c=arguments,o=this,v=y,_){if(b===void 0)return S(v);if(g)return clearTimeout(b),b=setTimeout(B,n),h(v)}return b===void 0&&(b=setTimeout(B,n)),f}return V.cancel=w,V.flush=E,V}var Xt="Expected a function";function ae(e,n,r){var c=!0,o=!0;if(typeof e!="function")throw new TypeError(Xt);return q(r)&&(c="leading"in r?!!r.leading:c,o="trailing"in r?!!r.trailing:o),Ut(e,n,{leading:c,maxWait:n,trailing:o})}const Yt=D({name:"Add",render(){return d("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),qt={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"0 6px",tabPaddingVerticalMediumLine:"0 10px",tabPaddingVerticalLargeLine:"0 14px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"0 4px",tabPaddingVerticalMediumBar:"0 6px ",tabPaddingVerticalLargeBar:"0 10px ",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"10px 6px",tabPaddingVerticalMediumCard:"12px 8px",tabPaddingVerticalLargeCard:"16px 8px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},Kt=e=>{const{textColor2:n,primaryColor:r,textColorDisabled:c,closeIconColor:o,closeIconColorHover:x,closeIconColorPressed:f,closeColorHover:b,closeColorPressed:v,tabColor:m,baseColor:P,dividerColor:g,fontWeight:u,textColor1:h,borderRadius:S,fontSize:L,fontWeightStrong:T}=e;return Object.assign(Object.assign({},qt),{colorSegment:m,tabFontSizeCard:L,tabTextColorLine:h,tabTextColorActiveLine:r,tabTextColorHoverLine:r,tabTextColorDisabledLine:c,tabTextColorSegment:h,tabTextColorActiveSegment:n,tabTextColorHoverSegment:n,tabTextColorDisabledSegment:c,tabTextColorBar:h,tabTextColorActiveBar:r,tabTextColorHoverBar:r,tabTextColorDisabledBar:c,tabTextColorCard:h,tabTextColorHoverCard:h,tabTextColorActiveCard:r,tabTextColorDisabledCard:c,barColor:r,closeIconColor:o,closeIconColorHover:x,closeIconColorPressed:f,closeColorHover:b,closeColorPressed:v,closeBorderRadius:S,tabColor:m,tabColorSegment:P,tabBorderColor:g,tabFontWeightActive:u,tabFontWeight:u,tabBorderRadius:S,paneTextColor:n,fontWeightStrong:T})},Jt={name:"Tabs",common:bt,self:Kt},Qt=Jt,oe=ft("n-tabs"),Pe={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ra=D({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Pe,setup(e){const n=Se(oe,null);return n||ut("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return d("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Zt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},xt(Pe,["displayDirective"])),re=D({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Zt,setup(e){const{mergedClsPrefixRef:n,valueRef:r,typeRef:c,closableRef:o,tabStyleRef:x,tabChangeIdRef:f,onBeforeLeaveRef:b,triggerRef:v,handleAdd:m,activateTab:P,handleClose:g}=Se(oe);return{trigger:v,mergedClosable:Y(()=>{if(e.internalAddable)return!1;const{closable:u}=e;return u===void 0?o.value:u}),style:x,clsPrefix:n,value:r,type:c,handleClose(u){u.stopPropagation(),!e.disabled&&g(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){m();return}const{name:u}=e,h=++f.id;if(u!==r.value){const{value:S}=b;S?Promise.resolve(S(e.name,r.value)).then(L=>{L&&f.id===h&&P(u)}):P(u)}}}},render(){const{internalAddable:e,clsPrefix:n,name:r,disabled:c,label:o,tab:x,value:f,mergedClosable:b,style:v,trigger:m,$slots:{default:P}}=this,g=o!=null?o:x;return d("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?d("div",{class:`${n}-tabs-tab-pad`}):null,d("div",Object.assign({key:r,"data-name":r,"data-disabled":c?!0:void 0},pt({class:[`${n}-tabs-tab`,f===r&&`${n}-tabs-tab--active`,c&&`${n}-tabs-tab--disabled`,b&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`],onClick:m==="click"?this.activateTab:void 0,onMouseenter:m==="hover"?this.activateTab:void 0,style:e?void 0:v},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),d("span",{class:`${n}-tabs-tab__label`},e?d(vt,null,d("div",{class:`${n}-tabs-tab__height-placeholder`},"\xA0"),d(gt,{clsPrefix:n},{default:()=>d(Yt,null)})):P?P():typeof g=="object"?g:ht(g!=null?g:r)),b&&this.type==="card"?d(mt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:c}):null))}}),ea=i("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[C("segment-type",[i("tabs-rail",[R("&.transition-disabled","color: red;",[i("tabs-tab",`
 transition: none;
 `)])])]),C("left, right",`
 flex-direction: row;
 `,[i("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),i("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),C("right",`
 flex-direction: row-reverse;
 `,[i("tabs-bar",`
 left: 0;
 `)]),C("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[i("tabs-bar",`
 top: 0;
 `)]),i("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[i("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[i("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[C("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),R("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),C("flex",[i("tabs-nav",{width:"100%"},[i("tabs-wrapper",{width:"100%"},[i("tabs-tab",{marginRight:0})])])]),i("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[I("prefix, suffix",`
 display: flex;
 align-items: center;
 `),I("prefix","padding-right: 16px;"),I("suffix","padding-left: 16px;")]),i("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[C("shadow-before",[R("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),C("shadow-after",[R("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),i("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[R("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),R("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),R("&::before",`
 left: 0;
 `),R("&::after",`
 right: 0;
 `)]),i("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),i("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),i("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),i("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[C("disabled",{cursor:"not-allowed"}),I("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),I("label",`
 display: flex;
 align-items: center;
 `)]),i("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[R("&.transition-disabled",`
 transition: none;
 `),C("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),i("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),i("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[R("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),R("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),R("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),R("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),R("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),i("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),C("line-type, bar-type",[i("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[R("&:hover",{color:"var(--n-tab-text-color-hover)"}),C("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),C("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),i("tabs-nav",[C("line-type",[I("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),C("card-type",[I("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[C("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[I("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),yt("disabled",[R("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),C("closable","padding-right: 6px;"),C("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),C("disabled","color: var(--n-tab-text-color-disabled);")]),i("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),C("left, right",[i("tabs-wrapper",`
 flex-direction: column;
 `,[i("tabs-tab-wrapper",`
 flex-direction: column;
 `,[i("tabs-tab-pad",`
 height: var(--n-tab-gap);
 width: 100%;
 `)])]),i("tabs-nav-scroll-content",`
 border-bottom: none;
 `)]),C("left",[i("tabs-nav-scroll-content",`
 box-sizing: border-box;
 border-right: 1px solid var(--n-tab-border-color);
 `)]),C("right",[i("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `)]),C("bottom",[i("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 border-bottom: none;
 `)])])]),ta=Object.assign(Object.assign({},we.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),oa=D({name:"Tabs",props:ta,setup(e,{slots:n}){var r,c,o,x;const{mergedClsPrefixRef:f,inlineThemeDisabled:b}=Ct(e),v=we("Tabs","-tabs",ea,Qt,e,f),m=z(null),P=z(null),g=z(null),u=z(null),h=z(null),S=z(!0),L=z(!0),T=pe(e,["labelSize","size"]),B=pe(e,["activeName","value"]),p=z((c=(r=B.value)!==null&&r!==void 0?r:e.defaultValue)!==null&&c!==void 0?c:n.default?(x=(o=ee(n.default())[0])===null||o===void 0?void 0:o.props)===null||x===void 0?void 0:x.name:null),w=Bt(B,p),E={id:0},V=Y(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});Q(w,()=>{E.id=0,M(),ie()});function y(){var t;const{value:a}=w;return a===null?null:(t=m.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function _(t){if(e.type==="card")return;const{value:a}=P;if(!!a&&t){const s=`${f.value}-tabs-bar--disabled`,{barWidth:l,placement:W}=e;if(t.dataset.disabled==="true"?a.classList.add(s):a.classList.remove(s),["top","bottom"].includes(W)){if(k(["top","maxHeight","height"]),typeof l=="number"&&t.offsetWidth>=l){const $=Math.floor((t.offsetWidth-l)/2)+t.offsetLeft;a.style.left=`${$}px`,a.style.maxWidth=`${l}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}else{if(k(["left","maxWidth","width"]),typeof l=="number"&&t.offsetHeight>=l){const $=Math.floor((t.offsetHeight-l)/2)+t.offsetTop;a.style.top=`${$}px`,a.style.maxHeight=`${l}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",a.offsetHeight}}}function k(t){const{value:a}=P;if(!!a)for(const s of t)a.style[s]=""}function M(){if(e.type==="card")return;const t=y();t&&_(t)}function ie(t){var a;const s=(a=h.value)===null||a===void 0?void 0:a.$el;if(!s)return;const l=y();if(!l)return;const{scrollLeft:W,offsetWidth:$}=s,{offsetLeft:H,offsetWidth:U}=l;W>H?s.scrollTo({top:0,left:H,behavior:"smooth"}):H+U>W+$&&s.scrollTo({top:0,left:H+U-$,behavior:"smooth"})}const G=z(null);let K=0,j=null;function Te(t){const a=G.value;if(a){K=t.getBoundingClientRect().height;const s=`${K}px`,l=()=>{a.style.height=s,a.style.maxHeight=s};j?(l(),j(),j=null):j=l}}function Re(t){const a=G.value;if(a){const s=t.getBoundingClientRect().height,l=()=>{document.body.offsetHeight,a.style.maxHeight=`${s}px`,a.style.height=`${Math.max(K,s)}px`};j?(j(),j=null,l()):j=l}}function ze(){const t=G.value;t&&(t.style.maxHeight="",t.style.height="")}const se={value:[]},le=z("next");function Le(t){const a=w.value;let s="next";for(const l of se.value){if(l===a)break;if(l===t){s="prev";break}}le.value=s,$e(t)}function $e(t){const{onActiveNameChange:a,onUpdateValue:s,"onUpdate:value":l}=e;a&&X(a,t),s&&X(s,t),l&&X(l,t),p.value=t}function Be(t){const{onClose:a}=e;a&&X(a,t)}function de(){const{value:t}=P;if(!t)return;const a="transition-disabled";t.classList.add(a),M(),t.classList.remove(a)}let ce=0;function _e(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||ce===t.contentRect.width)return;ce=t.contentRect.width;const{type:s}=e;(s==="line"||s==="bar")&&de(),s!=="segment"&&J((a=h.value)===null||a===void 0?void 0:a.$el)}const We=ae(_e,64);Q([()=>e.justifyContent,()=>e.size],()=>{Z(()=>{const{type:t}=e;(t==="line"||t==="bar")&&de()})});const N=z(!1);function Ae(t){var a;const{target:s,contentRect:{width:l}}=t,W=s.parentElement.offsetWidth;if(!N.value)W<l&&(N.value=!0);else{const{value:$}=u;if(!$)return;W-l>$.$el.offsetWidth&&(N.value=!1)}J((a=h.value)===null||a===void 0?void 0:a.$el)}const Ee=ae(Ae,64);function ke(){const{onAdd:t}=e;t&&t(),Z(()=>{const a=y(),{value:s}=h;!a||!s||s.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function J(t){if(!t)return;const{scrollLeft:a,scrollWidth:s,offsetWidth:l}=t;S.value=a<=0,L.value=a+l>=s}const je=ae(t=>{J(t.target)},64);St(oe,{triggerRef:F(e,"trigger"),tabStyleRef:F(e,"tabStyle"),paneClassRef:F(e,"paneClass"),paneStyleRef:F(e,"paneStyle"),mergedClsPrefixRef:f,typeRef:F(e,"type"),closableRef:F(e,"closable"),valueRef:w,tabChangeIdRef:E,onBeforeLeaveRef:F(e,"onBeforeLeave"),activateTab:Le,handleClose:Be,handleAdd:ke}),_t(()=>{M(),ie()}),wt(()=>{const{value:t}=g;if(!t||["left","right"].includes(e.placement))return;const{value:a}=f,s=`${a}-tabs-nav-scroll-wrapper--shadow-before`,l=`${a}-tabs-nav-scroll-wrapper--shadow-after`;S.value?t.classList.remove(s):t.classList.add(s),L.value?t.classList.remove(l):t.classList.add(l)});const be=z(null);Q(w,()=>{if(e.type==="segment"){const t=be.value;t&&Z(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Ie={syncBarPosition:()=>{M()}},fe=Y(()=>{const{value:t}=T,{type:a}=e,s={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],l=`${t}${s}`,{self:{barColor:W,closeIconColor:$,closeIconColorHover:H,closeIconColorPressed:U,tabColor:Me,tabBorderColor:Fe,paneTextColor:Oe,tabFontWeight:He,tabBorderRadius:Ve,tabFontWeightActive:De,colorSegment:Ge,fontWeightStrong:Ne,tabColorSegment:Ue,closeSize:Xe,closeIconSize:Ye,closeColorHover:qe,closeColorPressed:Ke,closeBorderRadius:Je,[A("panePadding",t)]:Qe,[A("tabPadding",l)]:Ze,[A("tabPaddingVertical",l)]:et,[A("tabGap",l)]:tt,[A("tabTextColor",a)]:at,[A("tabTextColorActive",a)]:nt,[A("tabTextColorHover",a)]:rt,[A("tabTextColorDisabled",a)]:ot,[A("tabFontSize",t)]:it},common:{cubicBezierEaseInOut:st}}=v.value;return{"--n-bezier":st,"--n-color-segment":Ge,"--n-bar-color":W,"--n-tab-font-size":it,"--n-tab-text-color":at,"--n-tab-text-color-active":nt,"--n-tab-text-color-disabled":ot,"--n-tab-text-color-hover":rt,"--n-pane-text-color":Oe,"--n-tab-border-color":Fe,"--n-tab-border-radius":Ve,"--n-close-size":Xe,"--n-close-icon-size":Ye,"--n-close-color-hover":qe,"--n-close-color-pressed":Ke,"--n-close-border-radius":Je,"--n-close-icon-color":$,"--n-close-icon-color-hover":H,"--n-close-icon-color-pressed":U,"--n-tab-color":Me,"--n-tab-font-weight":He,"--n-tab-font-weight-active":De,"--n-tab-padding":Ze,"--n-tab-padding-vertical":et,"--n-tab-gap":tt,"--n-pane-padding":Qe,"--n-font-weight-strong":Ne,"--n-tab-color-segment":Ue}}),O=b?Pt("tabs",Y(()=>`${T.value[0]}${e.type[0]}`),fe,e):void 0;return Object.assign({mergedClsPrefix:f,mergedValue:w,renderedNames:new Set,tabsRailElRef:be,tabsPaneWrapperRef:G,tabsElRef:m,barElRef:P,addTabInstRef:u,xScrollInstRef:h,scrollWrapperElRef:g,addTabFixed:N,tabWrapperStyle:V,handleNavResize:We,mergedSize:T,handleScroll:je,handleTabsResize:Ee,cssVars:b?void 0:fe,themeClass:O==null?void 0:O.themeClass,animationDirection:le,renderNameListRef:se,onAnimationBeforeLeave:Te,onAnimationEnter:Re,onAnimationAfterEnter:ze,onRender:O==null?void 0:O.onRender},Ie)},render(){const{mergedClsPrefix:e,type:n,placement:r,addTabFixed:c,addable:o,mergedSize:x,renderNameListRef:f,onRender:b,$slots:{default:v,prefix:m,suffix:P}}=this;b==null||b();const g=v?ee(v()).filter(p=>p.type.__TAB_PANE__===!0):[],u=v?ee(v()).filter(p=>p.type.__TAB__===!0):[],h=!u.length,S=n==="card",L=n==="segment",T=!S&&!L&&this.justifyContent;f.value=[];const B=()=>{const p=d("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},T?null:d("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),h?g.map((w,E)=>(f.value.push(w.props.name),ne(d(re,Object.assign({},w.props,{internalCreatedByPane:!0,internalLeftPadded:E!==0&&(!T||T==="center"||T==="start"||T==="end")}),w.children?{default:w.children.tab}:void 0)))):u.map((w,E)=>(f.value.push(w.props.name),ne(E!==0&&!T?Ce(w):w))),!c&&o&&S?ye(o,(h?g.length:u.length)!==0):null,T?null:d("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return d("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},S&&o?d(ge,{onResize:this.handleTabsResize},{default:()=>p}):p,S?d("div",{class:`${e}-tabs-pad`}):null,S?null:d("div",{ref:"barElRef",class:`${e}-tabs-bar`}))};return d("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${x}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${r}`],style:this.cssVars},d("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${r}`,`${e}-tabs-nav`]},ve(m,p=>p&&d("div",{class:`${e}-tabs-nav__prefix`},p)),L?d("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},h?g.map((p,w)=>(f.value.push(p.props.name),d(re,Object.assign({},p.props,{internalCreatedByPane:!0,internalLeftPadded:w!==0}),p.children?{default:p.children.tab}:void 0))):u.map((p,w)=>(f.value.push(p.props.name),w===0?p:Ce(p)))):d(ge,{onResize:this.handleNavResize},{default:()=>d("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(r)?d(At,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:B}):d("div",{class:`${e}-tabs-nav-y-scroll`},B()))}),c&&o&&S?ye(o,!0):null,ve(P,p=>p&&d("div",{class:`${e}-tabs-nav__suffix`},p))),h&&(this.animated?d("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},xe(g,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):xe(g,this.mergedValue,this.renderedNames)))}});function xe(e,n,r,c,o,x,f){const b=[];return e.forEach(v=>{const{name:m,displayDirective:P,"display-directive":g}=v.props,u=S=>P===S||g===S,h=n===m;if(v.key!==void 0&&(v.key=m),h||u("show")||u("show:lazy")&&r.has(m)){r.has(m)||r.add(m);const S=!u("if");b.push(S?Tt(v,[[Rt,h]]):v)}}),f?d(zt,{name:`${f}-transition`,onBeforeLeave:c,onEnter:o,onAfterEnter:x},{default:()=>b}):b}function ye(e,n){return d(re,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function Ce(e){const n=Lt(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function ne(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{ra as _,oa as a};
