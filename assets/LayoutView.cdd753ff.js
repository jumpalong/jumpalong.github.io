import{d as S,h as s,aX as de,c as ue,a as be,b as ie,y as G,e as m,j as _,m as V,s as F,u as J,p as y,r as re,z as K,f as u,l as x,v as ve,i as E,A as Y,a_ as W,ae as Ue,F as ae,x as qe,P as ee,k as We,aS as Ce,W as Ye,a$ as Ge,V as O,a2 as M,a3 as B,X as me,Y as q,ao as Xe,_ as ye,a5 as ce,ba as Ze,bb as Je,Z,bc as Qe}from"./index.9d2bf25f.js";import{r as D}from"./naiveUi.bc5c95f5.js";import{b as eo,i as oo}from"./user.fc2ca8fc.js";import{x as to,y as ro,z as no,A as io,B as He,p as ke,f as le,b as se,c as N,_ as lo,k as ne,h as te,v as ao,r as ze,N as we,a as co,C as so,D as uo,l as vo}from"./Space.9a7f5c32.js";import{u as Ie}from"./use-locale.cfe9146b.js";import{d as mo,C as ho,_ as po,c as fo}from"./Dropdown.499cc441.js";import{N as _e}from"./use-message.46e043a9.js";import"./fade-in-scale-up.cssr.d0a3bba3.js";const go=S({name:"ChevronDownFilled",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),xo=e=>{const{baseColor:t,textColor2:o,bodyColor:r,cardColor:a,dividerColor:l,actionColor:v,scrollbarColor:d,scrollbarColorHover:c,invertedColor:p}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:v,headerColor:a,headerColorInverted:p,footerColor:v,footerColorInverted:p,headerBorderColor:l,headerBorderColorInverted:p,footerBorderColor:l,footerBorderColorInverted:p,siderBorderColor:l,siderBorderColorInverted:p,siderColor:a,siderColorInverted:p,siderToggleButtonBorder:`1px solid ${l}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:be(r,d),siderToggleBarColorHover:be(r,c),__invertScrollbar:"true"}},bo=de({name:"Layout",common:ue,peers:{Scrollbar:to},self:xo}),Re=bo;function Co(e,t,o,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:r}}const yo=e=>{const{borderRadius:t,textColor3:o,primaryColor:r,textColor2:a,textColor1:l,fontSize:v,dividerColor:d,hoverColor:c,primaryColorHover:p}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:c,itemColorActive:ie(r,{alpha:.1}),itemColorActiveHover:ie(r,{alpha:.1}),itemColorActiveCollapsed:ie(r,{alpha:.1}),itemTextColor:a,itemTextColorHover:a,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:a,itemTextColorHoverHorizontal:p,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:l,itemIconColorHover:l,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:l,itemIconColorHorizontal:l,itemIconColorHoverHorizontal:p,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:a,arrowColorHover:a,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:v,dividerColor:d},Co("#BBB",r,"#FFF","#AAA"))},zo=de({name:"Menu",common:ue,peers:{Tooltip:ro,Dropdown:mo},self:yo}),wo=zo,Io={iconSize:"22px"},_o=e=>{const{fontSize:t,warningColor:o}=e;return Object.assign(Object.assign({},Io),{fontSize:t,iconColor:o})},So=de({name:"Popconfirm",common:ue,peers:{Button:no,Popover:io},self:_o}),Ao=So,Te=G("n-layout-sider"),$e={type:String,default:"static"},Po=m("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[m("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),_("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Ho={embedded:Boolean,position:$e,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Ne=G("n-layout");function ko(e){return S({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},V.props),Ho),setup(t){const o=F(null),r=F(null),{mergedClsPrefixRef:a,inlineThemeDisabled:l}=J(t),v=V("Layout","-layout",Po,Re,t,a);function d(w,A){if(t.nativeScrollbar){const{value:R}=o;R&&(A===void 0?R.scrollTo(w):R.scrollTo(w,A))}else{const{value:R}=r;R&&R.scrollTo(w,A)}}K(Ne,t);let c=0,p=0;const k=w=>{var A;const R=w.target;c=R.scrollLeft,p=R.scrollTop,(A=t.onScroll)===null||A===void 0||A.call(t,w)};He(()=>{if(t.nativeScrollbar){const w=o.value;w&&(w.scrollTop=p,w.scrollLeft=c)}});const C={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},f={scrollTo:d},$=y(()=>{const{common:{cubicBezierEaseInOut:w},self:A}=v.value;return{"--n-bezier":w,"--n-color":t.embedded?A.colorEmbedded:A.color,"--n-text-color":A.textColor}}),H=l?re("layout",y(()=>t.embedded?"e":""),$,t):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:C,mergedTheme:v,handleNativeElScroll:k,cssVars:l?void 0:$,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender},f)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const a=r?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return s("div",{class:l,style:this.cssVars},this.nativeScrollbar?s("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):s(ke,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const Ro=ko(!1),To=m("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[_("bordered",[u("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),u("left-placement",[_("bordered",[u("border",`
 right: 0;
 `)])]),_("right-placement",`
 justify-content: flex-start;
 `,[_("bordered",[u("border",`
 left: 0;
 `)]),_("collapsed",[m("layout-toggle-button",[m("base-icon",`
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",[x("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),m("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[m("base-icon",`
 transform: rotate(0);
 `)]),m("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[x("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),_("collapsed",[m("layout-toggle-bar",[x("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),m("layout-toggle-button",[m("base-icon",`
 transform: rotate(0);
 `)])]),m("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[m("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[u("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),u("bottom",`
 position: absolute;
 top: 34px;
 `),x("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),x("&:hover",[u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),u("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),m("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),_("show-content",[m("layout-sider-scroll-container",{opacity:1})]),_("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),$o=S({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},s(ve,{clsPrefix:e},{default:()=>s(ho,null)}))}}),No=S({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},s("div",{class:`${e}-layout-toggle-bar__top`}),s("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Bo={position:$e,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Oo=S({name:"LayoutSider",props:Object.assign(Object.assign({},V.props),Bo),setup(e){const t=E(Ne),o=F(null),r=F(null),a=y(()=>le(c.value?e.collapsedWidth:e.width)),l=y(()=>e.collapseMode!=="transform"?{}:{minWidth:le(e.width)}),v=y(()=>t?t.siderPlacement:"left"),d=F(e.defaultCollapsed),c=se(Y(e,"collapsed"),d);function p(P,z){if(e.nativeScrollbar){const{value:I}=o;I&&(z===void 0?I.scrollTo(P):I.scrollTo(P,z))}else{const{value:I}=r;I&&I.scrollTo(P,z)}}function k(){const{"onUpdate:collapsed":P,onUpdateCollapsed:z,onExpand:I,onCollapse:g}=e,{value:b}=c;z&&N(z,!b),P&&N(P,!b),d.value=!b,b?I&&N(I):g&&N(g)}let C=0,f=0;const $=P=>{var z;const I=P.target;C=I.scrollLeft,f=I.scrollTop,(z=e.onScroll)===null||z===void 0||z.call(e,P)};He(()=>{if(e.nativeScrollbar){const P=o.value;P&&(P.scrollTop=f,P.scrollLeft=C)}}),K(Te,{collapsedRef:c,collapseModeRef:Y(e,"collapseMode")});const{mergedClsPrefixRef:H,inlineThemeDisabled:w}=J(e),A=V("Layout","-layout-sider",To,Re,e,H);function R(P){var z,I;P.propertyName==="max-width"&&(c.value?(z=e.onAfterLeave)===null||z===void 0||z.call(e):(I=e.onAfterEnter)===null||I===void 0||I.call(e))}const X={scrollTo:p},j=y(()=>{const{common:{cubicBezierEaseInOut:P},self:z}=A.value,{siderToggleButtonColor:I,siderToggleButtonBorder:g,siderToggleBarColor:b,siderToggleBarColorHover:n}=z,h={"--n-bezier":P,"--n-toggle-button-color":I,"--n-toggle-button-border":g,"--n-toggle-bar-color":b,"--n-toggle-bar-color-hover":n};return e.inverted?(h["--n-color"]=z.siderColorInverted,h["--n-text-color"]=z.textColorInverted,h["--n-border-color"]=z.siderBorderColorInverted,h["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColorInverted,h.__invertScrollbar=z.__invertScrollbar):(h["--n-color"]=z.siderColor,h["--n-text-color"]=z.textColor,h["--n-border-color"]=z.siderBorderColor,h["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColor),h}),L=w?re("layout-sider",y(()=>e.inverted?"a":"b"),j,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:H,mergedTheme:A,styleMaxWidth:a,mergedCollapsed:c,scrollContainerStyle:l,siderPlacement:v,handleNativeElScroll:$,handleTransitionend:R,handleTriggerClick:k,inlineThemeDisabled:w,cssVars:j,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender},X)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),s("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:le(this.width)}]},this.nativeScrollbar?s("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):s(ke,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?s(No,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):s($o,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?s("div",{class:`${t}-layout-sider__border`}):null)}}),Q=G("n-menu"),he=G("n-submenu"),pe=G("n-menu-item-group"),oe=8;function fe(e){const t=E(Q),{props:o,mergedCollapsedRef:r}=t,a=E(he,null),l=E(pe,null),v=y(()=>o.mode==="horizontal"),d=y(()=>v.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=y(()=>{var f;return Math.max((f=o.collapsedIconSize)!==null&&f!==void 0?f:o.iconSize,o.iconSize)}),p=y(()=>{var f;return!v.value&&e.root&&r.value&&(f=o.collapsedIconSize)!==null&&f!==void 0?f:o.iconSize}),k=y(()=>{if(v.value)return;const{collapsedWidth:f,indent:$,rootIndent:H}=o,{root:w,isGroup:A}=e,R=H===void 0?$:H;if(w)return r.value?f/2-c.value/2:R;if(l)return $/2+l.paddingLeftRef.value;if(a)return(A?$/2:$)+a.paddingLeftRef.value}),C=y(()=>{const{collapsedWidth:f,indent:$,rootIndent:H}=o,{value:w}=c,{root:A}=e;return v.value||!A||!r.value?oe:(H===void 0?$:H)+w+oe-(f+w)/2});return{dropdownPlacement:d,activeIconSize:p,maxIconSize:c,paddingLeft:k,iconMarginRight:C,NMenu:t,NSubmenu:a}}const ge={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Be=Object.assign(Object.assign({},ge),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Lo=S({name:"MenuOptionGroup",props:Be,setup(e){K(he,null);const t=fe(e);K(pe,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:r}=E(Q);return function(){const{value:a}=o,l=t.paddingLeft.value,{nodeProps:v}=r,d=v==null?void 0:v(e.tmNode.rawNode);return s("div",{class:`${a}-menu-item-group`,role:"group"},s("div",Object.assign({},d,{class:[`${a}-menu-item-group-title`,d==null?void 0:d.class],style:[(d==null?void 0:d.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),W(e.title),e.extra?s(Ue,null," ",W(e.extra)):null),s("div",null,e.tmNodes.map(c=>xe(c,r))))}}}),Oe=S({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=E(Q);return{menuProps:t,style:y(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:y(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:a}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:a,expandIcon:l}}=this,v=o?o(t.rawNode):W(this.icon);return s("div",{onClick:d=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},v&&s("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[v]),s("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(t.rawNode):W(this.title),this.extra||a?s("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(t.rawNode):W(this.extra)):null),this.showArrow?s(ve,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(t.rawNode):s(go,null)}):null)}}),Le=Object.assign(Object.assign({},ge),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Fo=S({name:"Submenu",props:Le,setup(e){const t=fe(e),{NMenu:o,NSubmenu:r}=t,{props:a,mergedCollapsedRef:l,mergedThemeRef:v}=o,d=y(()=>{const{disabled:f}=e;return r!=null&&r.mergedDisabledRef.value||a.disabled?!0:f}),c=F(!1);K(he,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:d}),K(pe,null);function p(){const{onClick:f}=e;f&&f()}function k(){d.value||(l.value||o.toggleExpand(e.internalKey),p())}function C(f){c.value=f}return{menuProps:a,mergedTheme:v,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:c,paddingLeft:t.paddingLeft,mergedDisabled:d,mergedValue:o.mergedValueRef,childActive:ae(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:y(()=>a.mode==="horizontal"?!1:l.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:y(()=>!d.value&&(a.mode==="horizontal"||l.value)),handlePopoverShowChange:C,handleClick:k}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,a=()=>{const{isHorizontal:v,paddingLeft:d,collapsed:c,mergedDisabled:p,maxIconSize:k,activeIconSize:C,title:f,childActive:$,icon:H,handleClick:w,menuProps:{nodeProps:A},dropdownShow:R,iconMarginRight:X,tmNode:j,mergedClsPrefix:L}=this,P=A==null?void 0:A(j.rawNode);return s("div",Object.assign({},P,{class:[`${L}-menu-item`,P==null?void 0:P.class],role:"menuitem"}),s(Oe,{tmNode:j,paddingLeft:d,collapsed:c,disabled:p,iconMarginRight:X,maxIconSize:k,activeIconSize:C,title:f,extra:this.extra,showArrow:!v,childActive:$,clsPrefix:L,icon:H,hover:R,onClick:w}))},l=()=>s(qe,null,{default:()=>{const{tmNodes:v,collapsed:d}=this;return d?null:s("div",{class:`${t}-submenu-children`,role:"menu"},v.map(c=>xe(c,this.menuProps)))}});return this.root?s(po,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>s("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:l())}):s("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),l())}}),Fe=Object.assign(Object.assign({},ge),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Eo=S({name:"MenuOption",props:Fe,setup(e){const t=fe(e),{NSubmenu:o,NMenu:r}=t,{props:a,mergedClsPrefixRef:l,mergedCollapsedRef:v}=r,d=o?o.mergedDisabledRef:{value:!1},c=y(()=>d.value||e.disabled);function p(C){const{onClick:f}=e;f&&f(C)}function k(C){c.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),p(C))}return{mergedClsPrefix:l,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:a,dropdownEnabled:ae(()=>e.root&&v.value&&a.mode!=="horizontal"&&!c.value),selected:ae(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:k}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r,nodeProps:a}}=this,l=a==null?void 0:a(o.rawNode);return s("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),s(lo,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):W(this.title),trigger:()=>s(Oe,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Mo=S({name:"MenuDivider",setup(){const e=E(Q),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:s("div",{class:`${t.value}-menu-divider`})}}),jo=ne(Be),Vo=ne(Fe),Ko=ne(Le);function Ee(e){return e.type==="divider"||e.type==="render"}function Do(e){return e.type==="divider"}function xe(e,t){const{rawNode:o}=e,{show:r}=o;if(r===!1)return null;if(Ee(o))return Do(o)?s(Mo,Object.assign({key:e.key},o.props)):null;const{labelField:a}=t,{key:l,level:v,isGroup:d}=e,c=Object.assign(Object.assign({},o),{title:o.title||o[a],extra:o.titleExtra||o.extra,key:l,internalKey:l,level:v,root:v===0,isGroup:d});return e.children?e.isGroup?s(Lo,te(c,jo,{tmNode:e,tmNodes:e.children,key:l})):s(Fo,te(c,Ko,{key:l,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):s(Eo,te(c,Vo,{key:l,tmNode:e}))}const Se=[x("&::before","background-color: var(--n-item-color-hover);"),u("arrow",`
 color: var(--n-arrow-color-hover);
 `),u("icon",`
 color: var(--n-item-icon-color-hover);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[x("a",`
 color: var(--n-item-text-color-hover);
 `),u("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ae=[u("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Uo=x([m("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[_("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[m("submenu","margin: 0;"),m("menu-item","margin: 0;"),m("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[x("&::before","display: none;"),_("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),m("menu-item-content",[_("selected",[u("icon","color: var(--n-item-icon-color-active-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-horizontal);"),u("extra","color: var(--n-item-text-color-active-horizontal);")])]),_("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),u("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ee("disabled",[ee("selected, child-active",[x("&:focus-within",Ae)]),_("selected",[U(null,[u("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),_("child-active",[U(null,[u("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),U("border-bottom: 2px solid var(--n-border-color-horizontal);",Ae)]),m("menu-item-content-header",[x("a","color: var(--n-item-text-color-horizontal);")])])]),_("collapsed",[m("menu-item-content",[_("selected",[x("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),m("menu-item-content-header","opacity: 0;"),u("arrow","opacity: 0;"),u("icon","color: var(--n-item-icon-color-collapsed);")])]),m("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),m("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("> *","z-index: 1;"),x("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),_("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),_("collapsed",[u("arrow","transform: rotate(0);")]),_("selected",[x("&::before","background-color: var(--n-item-color-active);"),u("arrow","color: var(--n-arrow-color-active);"),u("icon","color: var(--n-item-icon-color-active);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[x("a","color: var(--n-item-text-color-active);"),u("extra","color: var(--n-item-text-color-active);")])]),_("child-active",[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[x("a",`
 color: var(--n-item-text-color-child-active);
 `),u("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),u("arrow",`
 color: var(--n-arrow-color-child-active);
 `),u("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ee("disabled",[ee("selected, child-active",[x("&:focus-within",Se)]),_("selected",[U(null,[u("arrow","color: var(--n-arrow-color-active-hover);"),u("icon","color: var(--n-item-icon-color-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[x("a","color: var(--n-item-text-color-active-hover);"),u("extra","color: var(--n-item-text-color-active-hover);")])])]),_("child-active",[U(null,[u("arrow","color: var(--n-arrow-color-child-active-hover);"),u("icon","color: var(--n-item-icon-color-child-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[x("a","color: var(--n-item-text-color-child-active-hover);"),u("extra","color: var(--n-item-text-color-child-active-hover);")])])]),_("selected",[U(null,[x("&::before","background-color: var(--n-item-color-active-hover);")])]),U(null,Se)]),u("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),u("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),m("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[x("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[x("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),u("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),m("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[m("menu-item-content",`
 height: var(--n-item-height);
 `),m("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[We({duration:".2s"})])]),m("menu-item-group",[m("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),m("menu-tooltip",[x("a",`
 color: inherit;
 text-decoration: none;
 `)]),m("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function U(e,t){return[_("hover",e,t),x("&:hover",e,t)]}const qo=Object.assign(Object.assign({},V.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),Wo=S({name:"Menu",props:qo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=J(e),r=V("Menu","-menu",Uo,wo,e,t),a=E(Te,null),l=y(()=>{var g;const{collapsed:b}=e;if(b!==void 0)return b;if(a){const{collapseModeRef:n,collapsedRef:h}=a;if(n.value==="width")return(g=h.value)!==null&&g!==void 0?g:!1}return!1}),v=y(()=>{const{keyField:g,childrenField:b,disabledField:n}=e;return fo(e.items||e.options,{getIgnored(h){return Ee(h)},getChildren(h){return h[b]},getDisabled(h){return h[n]},getKey(h){var T;return(T=h[g])!==null&&T!==void 0?T:h.name}})}),d=y(()=>new Set(v.value.treeNodes.map(g=>g.key))),{watchProps:c}=e,p=F(null);c!=null&&c.includes("defaultValue")?Ce(()=>{p.value=e.defaultValue}):p.value=e.defaultValue;const k=Y(e,"value"),C=se(k,p),f=F([]),$=()=>{f.value=e.defaultExpandAll?v.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||v.value.getPath(C.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?Ce($):$();const H=ao(e,["expandedNames","expandedKeys"]),w=se(H,f),A=y(()=>v.value.treeNodes),R=y(()=>v.value.getPath(C.value).keyPath);K(Q,{props:e,mergedCollapsedRef:l,mergedThemeRef:r,mergedValueRef:C,mergedExpandedKeysRef:w,activePathRef:R,mergedClsPrefixRef:t,isHorizontalRef:y(()=>e.mode==="horizontal"),invertedRef:Y(e,"inverted"),doSelect:X,toggleExpand:L});function X(g,b){const{"onUpdate:value":n,onUpdateValue:h,onSelect:T}=e;h&&N(h,g,b),n&&N(n,g,b),T&&N(T,g,b),p.value=g}function j(g){const{"onUpdate:expandedKeys":b,onUpdateExpandedKeys:n,onExpandedNamesChange:h,onOpenNamesChange:T}=e;b&&N(b,g),n&&N(n,g),h&&N(h,g),T&&N(T,g),f.value=g}function L(g){const b=Array.from(w.value),n=b.findIndex(h=>h===g);if(~n)b.splice(n,1);else{if(e.accordion&&d.value.has(g)){const h=b.findIndex(T=>d.value.has(T));h>-1&&b.splice(h,1)}b.push(g)}j(b)}const P=g=>{const b=v.value.getPath(g!=null?g:C.value,{includeSelf:!1}).keyPath;if(!b.length)return;const n=Array.from(w.value),h=new Set([...n,...b]);e.accordion&&d.value.forEach(T=>{h.has(T)&&!b.includes(T)&&h.delete(T)}),j(Array.from(h))},z=y(()=>{const{inverted:g}=e,{common:{cubicBezierEaseInOut:b},self:n}=r.value,{borderRadius:h,borderColorHorizontal:T,fontSize:Ve,itemHeight:Ke,dividerColor:De}=n,i={"--n-divider-color":De,"--n-bezier":b,"--n-font-size":Ve,"--n-border-color-horizontal":T,"--n-border-radius":h,"--n-item-height":Ke};return g?(i["--n-group-text-color"]=n.groupTextColorInverted,i["--n-color"]=n.colorInverted,i["--n-item-text-color"]=n.itemTextColorInverted,i["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,i["--n-item-text-color-active"]=n.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=n.itemIconColorInverted,i["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=n.arrowColorInverted,i["--n-arrow-color-hover"]=n.arrowColorHoverInverted,i["--n-arrow-color-active"]=n.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=n.itemColorHoverInverted,i["--n-item-color-active"]=n.itemColorActiveInverted,i["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=n.groupTextColor,i["--n-color"]=n.color,i["--n-item-text-color"]=n.itemTextColor,i["--n-item-text-color-hover"]=n.itemTextColorHover,i["--n-item-text-color-active"]=n.itemTextColorActive,i["--n-item-text-color-child-active"]=n.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,i["--n-item-icon-color"]=n.itemIconColor,i["--n-item-icon-color-hover"]=n.itemIconColorHover,i["--n-item-icon-color-active"]=n.itemIconColorActive,i["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=n.arrowColor,i["--n-arrow-color-hover"]=n.arrowColorHover,i["--n-arrow-color-active"]=n.arrowColorActive,i["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,i["--n-arrow-color-child-active"]=n.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHover,i["--n-item-color-hover"]=n.itemColorHover,i["--n-item-color-active"]=n.itemColorActive,i["--n-item-color-active-hover"]=n.itemColorActiveHover,i["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),i}),I=o?re("menu",y(()=>e.inverted?"a":"b"),z,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:H,uncontrolledExpanededKeys:f,mergedExpandedKeys:w,uncontrolledValue:p,mergedValue:C,activePath:R,tmNodes:A,mergedTheme:r,mergedCollapsed:l,cssVars:o?void 0:z,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender,showOption:P}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;return r==null||r(),s("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>xe(a,this.$props)))}}),Me=G("n-popconfirm"),je={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},Pe=ne(je),Yo=S({name:"NPopconfirmPanel",props:je,setup(e){const{localeRef:t}=Ie("Popconfirm"),{inlineThemeDisabled:o}=J(),{mergedClsPrefixRef:r,mergedThemeRef:a,props:l}=E(Me),v=y(()=>{const{common:{cubicBezierEaseInOut:c},self:{fontSize:p,iconSize:k,iconColor:C}}=a.value;return{"--n-bezier":c,"--n-font-size":p,"--n-icon-size":k,"--n-icon-color":C}}),d=o?re("popconfirm-panel",void 0,v,l):void 0;return Object.assign(Object.assign({},Ie("Popconfirm")),{mergedClsPrefix:r,cssVars:o?void 0:v,localizedPositiveText:y(()=>e.positiveText||t.value.positiveText),localizedNegativeText:y(()=>e.negativeText||t.value.negativeText),positiveButtonProps:Y(l,"positiveButtonProps"),negativeButtonProps:Y(l,"negativeButtonProps"),handlePositiveClick(c){e.onPositiveClick(c)},handleNegativeClick(c){e.onNegativeClick(c)},themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender})},render(){var e;const{mergedClsPrefix:t,showIcon:o,$slots:r}=this,a=ze(r.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&s(we,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&s(we,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(e=this.onRender)===null||e===void 0||e.call(this),s("div",{class:[`${t}-popconfirm__panel`,this.themeClass],style:this.cssVars},co(r.default,l=>o||l?s("div",{class:`${t}-popconfirm__body`},o?s("div",{class:`${t}-popconfirm__icon`},ze(r.icon,()=>[s(ve,{clsPrefix:t},{default:()=>s(Ye,null)})])):null,l):null),a?s("div",{class:[`${t}-popconfirm__action`]},a):null)}}),Go=m("popconfirm",[u("body",`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[u("icon",`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),u("action",`
 display: flex;
 justify-content: flex-end;
 `,[x("&:not(:first-child)","margin-top: 8px"),m("button",[x("&:not(:last-child)","margin-right: 8px;")])])]),Xo=Object.assign(Object.assign(Object.assign({},V.props),uo),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),Zo=S({name:"Popconfirm",props:Xo,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=J(),o=V("Popconfirm","-popconfirm",Go,Ao,e,t),r=F(null);function a(d){const{onPositiveClick:c,"onUpdate:show":p}=e;Promise.resolve(c?c(d):!0).then(k=>{var C;k!==!1&&((C=r.value)===null||C===void 0||C.setShow(!1),p&&N(p,!1))})}function l(d){const{onNegativeClick:c,"onUpdate:show":p}=e;Promise.resolve(c?c(d):!0).then(k=>{var C;k!==!1&&((C=r.value)===null||C===void 0||C.setShow(!1),p&&N(p,!1))})}return K(Me,{mergedThemeRef:o,mergedClsPrefixRef:t,props:e}),Object.assign(Object.assign({},{setShow(d){var c;(c=r.value)===null||c===void 0||c.setShow(d)},syncPosition(){var d;(d=r.value)===null||d===void 0||d.syncPosition()}}),{mergedTheme:o,popoverInstRef:r,handlePositiveClick:a,handleNegativeClick:l})},render(){const{$slots:e,$props:t,mergedTheme:o}=this;return s(so,Ge(t,Pe,{theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.activator||e.trigger,default:()=>{const r=te(t,Pe);return s(Yo,Object.assign(Object.assign({},r),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}}),Jo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Qo=B("path",{d:"M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 0 0 8 8h0a8 8 0 0 0 8-8l8-216c.58-8.64-7.34-16-16-16z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),et=B("circle",{cx:"256",cy:"416",r:"16",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ot=[Qo,et],tt=S({name:"AlertOutline",render:function(t,o){return O(),M("svg",Jo,ot)}}),rt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},nt=B("path",{d:"M352 48H160a48 48 0 0 0-48 48v368l144-128l144 128V96a48 48 0 0 0-48-48z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),it=[nt],lt=S({name:"BookmarkOutline",render:function(t,o){return O(),M("svg",rt,it)}}),at={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ct=B("path",{d:"M98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z",fill:"currentColor"},null,-1),st=[ct],dt=S({name:"CaretDownOutline",render:function(t,o){return O(),M("svg",at,st)}}),ut={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},vt=B("path",{d:"M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z",fill:"currentColor"},null,-1),mt=B("path",{d:"M490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z",fill:"currentColor"},null,-1),ht=[vt,mt],pt=S({name:"Home",render:function(t,o){return O(),M("svg",ut,ht)}}),ft={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},gt=B("path",{d:"M160 256a16 16 0 0 1 16-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h160a56.06 56.06 0 0 0 56-56V272H176a16 16 0 0 1-16-16z",fill:"currentColor"},null,-1),xt=B("path",{d:"M459.31 244.69l-80-80a16 16 0 0 0-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62z",fill:"currentColor"},null,-1),bt=[gt,xt],Ct=S({name:"LogOut",render:function(t,o){return O(),M("svg",ft,bt)}}),yt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},zt=B("circle",{cx:"256",cy:"256",r:"48",fill:"currentColor"},null,-1),wt=B("path",{d:"M470.39 300l-.47-.38l-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.59 1.59 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13l-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59l-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56l-5.57 39.67a16 16 0 0 1-8.13 11.82a175.21 175.21 0 0 0-10 5.82a15.92 15.92 0 0 1-14.43 1.27l-37.13-15l-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22l-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38l31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.59 1.59 0 0 1 .13.22a26.86 26.86 0 0 0 32.45 11.3l.35-.13l37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59l.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56l5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95l.35.14a26.85 26.85 0 0 0 32.48-11.34a2.53 2.53 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11zm-134.48-40.24a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67z",fill:"currentColor"},null,-1),It=[zt,wt],_t=S({name:"Settings",render:function(t,o){return O(),M("svg",yt,It)}}),St={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 448 512"},At=B("path",{d:"M437.4 226.3c-.3-.9-.9-1.4-1.4-2l-70-38.6c-.9-.6-2-.6-3.1 0l-58.9 36c-.9.6-1.4 1.7-1.4 2.6l-.9 31.4l-24-16c-.9-.6-2.3-.6-3.1 0L240 260.9l-1.4-35.1c0-.9-.6-2-1.4-2.3l-36-24.3l33.7-17.4c1.1-.6 1.7-1.7 1.7-2.9l-5.7-132.3c0-.9-.9-2-1.7-2.6L138.6.3c-.9-.3-1.7-.3-2.3-.3L12.6 38.6c-1.4.6-2.3 2-2 3.7L38 175.4c.9 3.4 34 27.4 38.6 30.9l-26.9 12.9c-1.4.9-2 2.3-1.7 3.4l20.6 100.3c.6 2.9 23.7 23.1 27.1 26.3l-17.4 10.6c-.9.6-1.7 2-1.4 3.1c1.4 7.1 15.4 77.7 16.9 79.1l65.1 69.1c.6.6 1.4.6 2.3.9c.6 0 1.1-.3 1.7-.6l83.7-66.9c.9-.6 1.1-1.4 1.1-2.3l-2-46l28 23.7c1.1.9 2.9.9 4 0l66.9-53.4c.9-.6 1.1-1.4 1.1-2.3l2.3-33.4l20.3 14c1.1.9 2.6.9 3.7 0l54.6-43.7c.6-.3 1.1-1.1 1.1-2c.9-6.5 10.3-70.8 9.7-72.8zm-204.8 4.8l4 92.6l-90.6 61.2l-14-96.6l100.6-57.2zm-7.7-180l5.4 126l-106.6 55.4L104 97.7l120.9-46.6zM44 173.1L18 48l79.7 49.4l19.4 132.9L44 173.1zm30.6 147.8L55.7 230l70 58.3l13.7 93.4l-64.8-60.8zm24.3 117.7l-13.7-67.1l61.7 60.9l9.7 67.4l-57.7-61.2zm64.5 64.5l-10.6-70.9l85.7-61.4l3.1 70l-78.2 62.3zm82-115.1c0-3.4.9-22.9-2-25.1l-24.3-20l22.3-14.9c2.3-1.7 1.1-5.7 1.1-8l29.4 22.6l.6 68.3l-27.1-22.9zm94.3-25.4l-60.9 48.6l-.6-68.6l65.7-46.9l-4.2 66.9zm27.7-25.7l-19.1-13.4l2-34c.3-.9-.3-2-1.1-2.6L308 259.7l.6-30l64.6 40.6l-5.8 66.6zm54.6-39.8l-48.3 38.3l5.7-65.1l51.1-36.6l-8.5 63.4z",fill:"currentColor"},null,-1),Pt=[At],Ht=S({name:"Linode",render:function(t,o){return O(),M("svg",St,Pt)}}),kt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 448 512"},Rt=B("path",{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",fill:"currentColor"},null,-1),Tt=[Rt],$t=S({name:"User",render:function(t,o){return O(),M("svg",kt,Tt)}}),Nt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 640 512"},Bt=B("path",{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6c40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32S208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",fill:"currentColor"},null,-1),Ot=[Bt],Lt=S({name:"Users",render:function(t,o){return O(),M("svg",Nt,Ot)}}),Ft=S({__name:"LogoutButton",setup(e){return(t,o)=>(O(),me(ce(Zo),{onPositiveClick:ce(Ze)},{trigger:q(()=>[Xe(t.$slots,"default",{},()=>[ye("Logout")])]),default:q(()=>[ye(" \u786E\u8BA4\u9000\u51FA\u767B\u5F55\u5417\uFF1F\u60A8\u662F\u5426\u786E\u8BA4\u5DF2\u7ECF\u5907\u4EFD\u79C1\u94A5? ")]),_:3},8,["onPositiveClick"]))}}),Et=S({__name:"Sidebar",props:{collapsed:{type:Boolean}},setup(e){eo();const t=F([{key:"Home",label:"\u9996\u9875",href:"/home",icon:D(pt)},{key:"Profile",label:"\u6211\u7684",href:"/profile",icon:D($t)},{key:"Relays",label:"\u4E2D\u7EE7",href:"/relays",icon:D(Ht)},{key:"Channels",label:"\u9891\u9053",href:"/channels",icon:D(Lt)},{key:"Settings",label:"\u8BBE\u7F6E",href:"/settings",icon:D(_t)},{key:"About",label:"\u5173\u4E8E",href:"/about",icon:D(tt)},{key:"Logout",label:()=>s(Ft,{},{default:()=>"\u9000\u51FA\u767B\u5F55"}),icon:D(Ct)}]);function o(l){return"href"in l?s(Je,{to:l.href},{default:()=>l.label}):oo(l.label)?l.label():l.label}function r(l){return l.icon?l.icon():s(_e,null,{default:()=>s(lt)})}function a(){return s(_e,null,{default:()=>s(dt)})}return(l,v)=>(O(),me(ce(Wo),{collapsed:e.collapsed,"collapsed-width":64,"collapsed-icon-size":22,options:t.value,"render-label":o,"render-icon":r,"expand-icon":a},null,8,["collapsed","options"]))}}),Yt=S({__name:"LayoutView",setup(e){const t=F(!0);return(o,r)=>{const a=Oo,l=Qe("RouterView"),v=Ro,d=vo;return O(),me(d,{vertical:""},{default:q(()=>[Z(v,{"has-sider":""},{default:q(()=>[Z(a,{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,collapsed:t.value,"show-trigger":"",onCollapse:r[0]||(r[0]=c=>t.value=!0),onExpand:r[1]||(r[1]=c=>t.value=!1)},{default:q(()=>[Z(Et,{collapsed:t.value},null,8,["collapsed"])]),_:1},8,["collapsed"]),Z(v,{class:"h-screen p-4 box-border"},{default:q(()=>[Z(l)]),_:1})]),_:1})]),_:1})}}});export{Yt as default};
