import{d as T,h as s,aX as ae,c as ce,a as fe,b as te,y as U,e as m,j as S,m as E,s as $,u as G,p as y,r as ee,z as j,f as u,l as b,v as se,i as F,A as D,a_ as V,ae as De,F as ne,x as Ue,P as Z,k as qe,aS as ge,W as We,a$ as Ge,V as Y,a2 as Pe,a3 as Ae,X as de,Y as K,ao as Ye,_ as be,a5 as ie,ba as Xe,bb as Ze,Z as W,bc as Je}from"./index.5e976b28.js";import{b as Qe,i as eo}from"./user.62a3b15e.js";import{x as oo,y as to,z as ro,A as no,B as He,s as _e,f as re,b as le,c as B,_ as io,k as oe,h as Q,v as lo,r as Ce,N as xe,a as ao,C as co,D as so,l as uo}from"./Space.e53fc030.js";import{u as ye}from"./use-locale.f5546dc0.js";import{d as vo,C as mo,_ as ho,c as po}from"./Dropdown.b5400b00.js";import{N as ze}from"./Icon.dd751103.js";import"./fade-in-scale-up.cssr.8655525e.js";const fo=T({name:"ChevronDownFilled",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),go=e=>{const{baseColor:t,textColor2:o,bodyColor:r,cardColor:a,dividerColor:l,actionColor:v,scrollbarColor:d,scrollbarColorHover:c,invertedColor:p}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:v,headerColor:a,headerColorInverted:p,footerColor:v,footerColorInverted:p,headerBorderColor:l,headerBorderColorInverted:p,footerBorderColor:l,footerBorderColorInverted:p,siderBorderColor:l,siderBorderColorInverted:p,siderColor:a,siderColorInverted:p,siderToggleButtonBorder:`1px solid ${l}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:fe(r,d),siderToggleBarColorHover:fe(r,c),__invertScrollbar:"true"}},bo=ae({name:"Layout",common:ce,peers:{Scrollbar:oo},self:go}),Re=bo;function Co(e,t,o,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:r}}const xo=e=>{const{borderRadius:t,textColor3:o,primaryColor:r,textColor2:a,textColor1:l,fontSize:v,dividerColor:d,hoverColor:c,primaryColorHover:p}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:c,itemColorActive:te(r,{alpha:.1}),itemColorActiveHover:te(r,{alpha:.1}),itemColorActiveCollapsed:te(r,{alpha:.1}),itemTextColor:a,itemTextColorHover:a,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:a,itemTextColorHoverHorizontal:p,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:l,itemIconColorHover:l,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:l,itemIconColorHorizontal:l,itemIconColorHoverHorizontal:p,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:a,arrowColorHover:a,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:v,dividerColor:d},Co("#BBB",r,"#FFF","#AAA"))},yo=ae({name:"Menu",common:ce,peers:{Tooltip:to,Dropdown:vo},self:xo}),zo=yo,Io={iconSize:"22px"},wo=e=>{const{fontSize:t,warningColor:o}=e;return Object.assign(Object.assign({},Io),{fontSize:t,iconColor:o})},So=ae({name:"Popconfirm",common:ce,peers:{Button:ro,Popover:no},self:wo}),Po=So,Te=U("n-layout-sider"),ke={type:String,default:"static"},Ao=m("layout",`
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
 `),S("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Ho={embedded:Boolean,position:ke,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Ne=U("n-layout");function _o(e){return T({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},E.props),Ho),setup(t){const o=$(null),r=$(null),{mergedClsPrefixRef:a,inlineThemeDisabled:l}=G(t),v=E("Layout","-layout",Ao,Re,t,a);function d(I,P){if(t.nativeScrollbar){const{value:R}=o;R&&(P===void 0?R.scrollTo(I):R.scrollTo(I,P))}else{const{value:R}=r;R&&R.scrollTo(I,P)}}j(Ne,t);let c=0,p=0;const _=I=>{var P;const R=I.target;c=R.scrollLeft,p=R.scrollTop,(P=t.onScroll)===null||P===void 0||P.call(t,I)};He(()=>{if(t.nativeScrollbar){const I=o.value;I&&(I.scrollTop=p,I.scrollLeft=c)}});const x={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},f={scrollTo:d},N=y(()=>{const{common:{cubicBezierEaseInOut:I},self:P}=v.value;return{"--n-bezier":I,"--n-color":t.embedded?P.colorEmbedded:P.color,"--n-text-color":P.textColor}}),H=l?ee("layout",y(()=>t.embedded?"e":""),N,t):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:o,scrollbarInstRef:r,hasSiderStyle:x,mergedTheme:v,handleNativeElScroll:_,cssVars:l?void 0:N,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender},f)},render(){var t;const{mergedClsPrefix:o,hasSider:r}=this;(t=this.onRender)===null||t===void 0||t.call(this);const a=r?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return s("div",{class:l,style:this.cssVars},this.nativeScrollbar?s("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):s(_e,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const Ro=_o(!1),To=m("layout-sider",`
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
`,[S("bordered",[u("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),u("left-placement",[S("bordered",[u("border",`
 right: 0;
 `)])]),S("right-placement",`
 justify-content: flex-start;
 `,[S("bordered",[u("border",`
 left: 0;
 `)]),S("collapsed",[m("layout-toggle-button",[m("base-icon",`
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",[b("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),m("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[m("base-icon",`
 transform: rotate(0);
 `)]),m("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[b("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),S("collapsed",[m("layout-toggle-bar",[b("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),m("layout-toggle-button",[m("base-icon",`
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
 `),b("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),b("&:hover",[u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),u("border",`
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
 `),S("show-content",[m("layout-sider-scroll-container",{opacity:1})]),S("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),ko=T({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},s(se,{clsPrefix:e},{default:()=>s(mo,null)}))}}),No=T({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return s("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},s("div",{class:`${e}-layout-toggle-bar__top`}),s("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Bo={position:ke,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Oo=T({name:"LayoutSider",props:Object.assign(Object.assign({},E.props),Bo),setup(e){const t=F(Ne),o=$(null),r=$(null),a=y(()=>re(c.value?e.collapsedWidth:e.width)),l=y(()=>e.collapseMode!=="transform"?{}:{minWidth:re(e.width)}),v=y(()=>t?t.siderPlacement:"left"),d=$(e.defaultCollapsed),c=le(D(e,"collapsed"),d);function p(A,z){if(e.nativeScrollbar){const{value:w}=o;w&&(z===void 0?w.scrollTo(A):w.scrollTo(A,z))}else{const{value:w}=r;w&&w.scrollTo(A,z)}}function _(){const{"onUpdate:collapsed":A,onUpdateCollapsed:z,onExpand:w,onCollapse:g}=e,{value:C}=c;z&&B(z,!C),A&&B(A,!C),d.value=!C,C?w&&B(w):g&&B(g)}let x=0,f=0;const N=A=>{var z;const w=A.target;x=w.scrollLeft,f=w.scrollTop,(z=e.onScroll)===null||z===void 0||z.call(e,A)};He(()=>{if(e.nativeScrollbar){const A=o.value;A&&(A.scrollTop=f,A.scrollLeft=x)}}),j(Te,{collapsedRef:c,collapseModeRef:D(e,"collapseMode")});const{mergedClsPrefixRef:H,inlineThemeDisabled:I}=G(e),P=E("Layout","-layout-sider",To,Re,e,H);function R(A){var z,w;A.propertyName==="max-width"&&(c.value?(z=e.onAfterLeave)===null||z===void 0||z.call(e):(w=e.onAfterEnter)===null||w===void 0||w.call(e))}const q={scrollTo:p},L=y(()=>{const{common:{cubicBezierEaseInOut:A},self:z}=P.value,{siderToggleButtonColor:w,siderToggleButtonBorder:g,siderToggleBarColor:C,siderToggleBarColorHover:n}=z,h={"--n-bezier":A,"--n-toggle-button-color":w,"--n-toggle-button-border":g,"--n-toggle-bar-color":C,"--n-toggle-bar-color-hover":n};return e.inverted?(h["--n-color"]=z.siderColorInverted,h["--n-text-color"]=z.textColorInverted,h["--n-border-color"]=z.siderBorderColorInverted,h["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColorInverted,h.__invertScrollbar=z.__invertScrollbar):(h["--n-color"]=z.siderColor,h["--n-text-color"]=z.textColor,h["--n-border-color"]=z.siderBorderColor,h["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColor),h}),O=I?ee("layout-sider",y(()=>e.inverted?"a":"b"),L,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:r,mergedClsPrefix:H,mergedTheme:P,styleMaxWidth:a,mergedCollapsed:c,scrollContainerStyle:l,siderPlacement:v,handleNativeElScroll:N,handleTransitionend:R,handleTriggerClick:_,inlineThemeDisabled:I,cssVars:L,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender},q)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),s("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:re(this.width)}]},this.nativeScrollbar?s("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):s(_e,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?s(No,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):s(ko,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?s("div",{class:`${t}-layout-sider__border`}):null)}}),X=U("n-menu"),ue=U("n-submenu"),ve=U("n-menu-item-group"),J=8;function me(e){const t=F(X),{props:o,mergedCollapsedRef:r}=t,a=F(ue,null),l=F(ve,null),v=y(()=>o.mode==="horizontal"),d=y(()=>v.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=y(()=>{var f;return Math.max((f=o.collapsedIconSize)!==null&&f!==void 0?f:o.iconSize,o.iconSize)}),p=y(()=>{var f;return!v.value&&e.root&&r.value&&(f=o.collapsedIconSize)!==null&&f!==void 0?f:o.iconSize}),_=y(()=>{if(v.value)return;const{collapsedWidth:f,indent:N,rootIndent:H}=o,{root:I,isGroup:P}=e,R=H===void 0?N:H;if(I)return r.value?f/2-c.value/2:R;if(l)return N/2+l.paddingLeftRef.value;if(a)return(P?N/2:N)+a.paddingLeftRef.value}),x=y(()=>{const{collapsedWidth:f,indent:N,rootIndent:H}=o,{value:I}=c,{root:P}=e;return v.value||!P||!r.value?J:(H===void 0?N:H)+I+J-(f+I)/2});return{dropdownPlacement:d,activeIconSize:p,maxIconSize:c,paddingLeft:_,iconMarginRight:x,NMenu:t,NSubmenu:a}}const he={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Be=Object.assign(Object.assign({},he),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),$o=T({name:"MenuOptionGroup",props:Be,setup(e){j(ue,null);const t=me(e);j(ve,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:r}=F(X);return function(){const{value:a}=o,l=t.paddingLeft.value,{nodeProps:v}=r,d=v==null?void 0:v(e.tmNode.rawNode);return s("div",{class:`${a}-menu-item-group`,role:"group"},s("div",Object.assign({},d,{class:[`${a}-menu-item-group-title`,d==null?void 0:d.class],style:[(d==null?void 0:d.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),V(e.title),e.extra?s(De,null," ",V(e.extra)):null),s("div",null,e.tmNodes.map(c=>pe(c,r))))}}}),Oe=T({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=F(X);return{menuProps:t,style:y(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:y(()=>{const{maxIconSize:o,activeIconSize:r,iconMarginRight:a}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${r}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:r,renderExtra:a,expandIcon:l}}=this,v=o?o(t.rawNode):V(this.icon);return s("div",{onClick:d=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},v&&s("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[v]),s("div",{class:`${e}-menu-item-content-header`,role:"none"},r?r(t.rawNode):V(this.title),this.extra||a?s("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(t.rawNode):V(this.extra)):null),this.showArrow?s(se,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(t.rawNode):s(fo,null)}):null)}}),$e=Object.assign(Object.assign({},he),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Fo=T({name:"Submenu",props:$e,setup(e){const t=me(e),{NMenu:o,NSubmenu:r}=t,{props:a,mergedCollapsedRef:l,mergedThemeRef:v}=o,d=y(()=>{const{disabled:f}=e;return r!=null&&r.mergedDisabledRef.value||a.disabled?!0:f}),c=$(!1);j(ue,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:d}),j(ve,null);function p(){const{onClick:f}=e;f&&f()}function _(){d.value||(l.value||o.toggleExpand(e.internalKey),p())}function x(f){c.value=f}return{menuProps:a,mergedTheme:v,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:c,paddingLeft:t.paddingLeft,mergedDisabled:d,mergedValue:o.mergedValueRef,childActive:ne(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:y(()=>a.mode==="horizontal"?!1:l.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:y(()=>!d.value&&(a.mode==="horizontal"||l.value)),handlePopoverShowChange:x,handleClick:_}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:r}}=this,a=()=>{const{isHorizontal:v,paddingLeft:d,collapsed:c,mergedDisabled:p,maxIconSize:_,activeIconSize:x,title:f,childActive:N,icon:H,handleClick:I,menuProps:{nodeProps:P},dropdownShow:R,iconMarginRight:q,tmNode:L,mergedClsPrefix:O}=this,A=P==null?void 0:P(L.rawNode);return s("div",Object.assign({},A,{class:[`${O}-menu-item`,A==null?void 0:A.class],role:"menuitem"}),s(Oe,{tmNode:L,paddingLeft:d,collapsed:c,disabled:p,iconMarginRight:q,maxIconSize:_,activeIconSize:x,title:f,extra:this.extra,showArrow:!v,childActive:N,clsPrefix:O,icon:H,hover:R,onClick:I}))},l=()=>s(Ue,null,{default:()=>{const{tmNodes:v,collapsed:d}=this;return d?null:s("div",{class:`${t}-submenu-children`,role:"menu"},v.map(c=>pe(c,this.menuProps)))}});return this.root?s(ho,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:r}),{default:()=>s("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:l())}):s("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),l())}}),Fe=Object.assign(Object.assign({},he),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Lo=T({name:"MenuOption",props:Fe,setup(e){const t=me(e),{NSubmenu:o,NMenu:r}=t,{props:a,mergedClsPrefixRef:l,mergedCollapsedRef:v}=r,d=o?o.mergedDisabledRef:{value:!1},c=y(()=>d.value||e.disabled);function p(x){const{onClick:f}=e;f&&f(x)}function _(x){c.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),p(x))}return{mergedClsPrefix:l,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:a,dropdownEnabled:ne(()=>e.root&&v.value&&a.mode!=="horizontal"&&!c.value),selected:ne(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:_}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:r,nodeProps:a}}=this,l=a==null?void 0:a(o.rawNode);return s("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),s(io,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(o.rawNode):V(this.title),trigger:()=>s(Oe,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Eo=T({name:"MenuDivider",setup(){const e=F(X),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:s("div",{class:`${t.value}-menu-divider`})}}),jo=oe(Be),Mo=oe(Fe),Ko=oe($e);function Le(e){return e.type==="divider"||e.type==="render"}function Vo(e){return e.type==="divider"}function pe(e,t){const{rawNode:o}=e,{show:r}=o;if(r===!1)return null;if(Le(o))return Vo(o)?s(Eo,Object.assign({key:e.key},o.props)):null;const{labelField:a}=t,{key:l,level:v,isGroup:d}=e,c=Object.assign(Object.assign({},o),{title:o.title||o[a],extra:o.titleExtra||o.extra,key:l,internalKey:l,level:v,root:v===0,isGroup:d});return e.children?e.isGroup?s($o,Q(c,jo,{tmNode:e,tmNodes:e.children,key:l})):s(Fo,Q(c,Ko,{key:l,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):s(Lo,Q(c,Mo,{key:l,tmNode:e}))}const Ie=[b("&::before","background-color: var(--n-item-color-hover);"),u("arrow",`
 color: var(--n-arrow-color-hover);
 `),u("icon",`
 color: var(--n-item-icon-color-hover);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[b("a",`
 color: var(--n-item-text-color-hover);
 `),u("extra",`
 color: var(--n-item-text-color-hover);
 `)])],we=[u("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[b("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Do=b([m("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[S("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[m("submenu","margin: 0;"),m("menu-item","margin: 0;"),m("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[b("&::before","display: none;"),S("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),m("menu-item-content",[S("selected",[u("icon","color: var(--n-item-icon-color-active-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[b("a","color: var(--n-item-text-color-active-horizontal);"),u("extra","color: var(--n-item-text-color-active-horizontal);")])]),S("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[b("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),u("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),Z("disabled",[Z("selected, child-active",[b("&:focus-within",we)]),S("selected",[M(null,[u("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[b("a","color: var(--n-item-text-color-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),S("child-active",[M(null,[u("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[b("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),M("border-bottom: 2px solid var(--n-border-color-horizontal);",we)]),m("menu-item-content-header",[b("a","color: var(--n-item-text-color-horizontal);")])])]),S("collapsed",[m("menu-item-content",[S("selected",[b("&::before",`
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
 `,[b("> *","z-index: 1;"),b("&::before",`
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
 `),S("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),S("collapsed",[u("arrow","transform: rotate(0);")]),S("selected",[b("&::before","background-color: var(--n-item-color-active);"),u("arrow","color: var(--n-arrow-color-active);"),u("icon","color: var(--n-item-icon-color-active);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[b("a","color: var(--n-item-text-color-active);"),u("extra","color: var(--n-item-text-color-active);")])]),S("child-active",[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[b("a",`
 color: var(--n-item-text-color-child-active);
 `),u("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),u("arrow",`
 color: var(--n-arrow-color-child-active);
 `),u("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),Z("disabled",[Z("selected, child-active",[b("&:focus-within",Ie)]),S("selected",[M(null,[u("arrow","color: var(--n-arrow-color-active-hover);"),u("icon","color: var(--n-item-icon-color-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[b("a","color: var(--n-item-text-color-active-hover);"),u("extra","color: var(--n-item-text-color-active-hover);")])])]),S("child-active",[M(null,[u("arrow","color: var(--n-arrow-color-child-active-hover);"),u("icon","color: var(--n-item-icon-color-child-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[b("a","color: var(--n-item-text-color-child-active-hover);"),u("extra","color: var(--n-item-text-color-child-active-hover);")])])]),S("selected",[M(null,[b("&::before","background-color: var(--n-item-color-active-hover);")])]),M(null,Ie)]),u("icon",`
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
 `,[b("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[b("&::before",`
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
 `,[qe({duration:".2s"})])]),m("menu-item-group",[m("menu-item-group-title",`
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
 `)])]),m("menu-tooltip",[b("a",`
 color: inherit;
 text-decoration: none;
 `)]),m("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function M(e,t){return[S("hover",e,t),b("&:hover",e,t)]}const Uo=Object.assign(Object.assign({},E.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),qo=T({name:"Menu",props:Uo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=G(e),r=E("Menu","-menu",Do,zo,e,t),a=F(Te,null),l=y(()=>{var g;const{collapsed:C}=e;if(C!==void 0)return C;if(a){const{collapseModeRef:n,collapsedRef:h}=a;if(n.value==="width")return(g=h.value)!==null&&g!==void 0?g:!1}return!1}),v=y(()=>{const{keyField:g,childrenField:C,disabledField:n}=e;return po(e.items||e.options,{getIgnored(h){return Le(h)},getChildren(h){return h[C]},getDisabled(h){return h[n]},getKey(h){var k;return(k=h[g])!==null&&k!==void 0?k:h.name}})}),d=y(()=>new Set(v.value.treeNodes.map(g=>g.key))),{watchProps:c}=e,p=$(null);c!=null&&c.includes("defaultValue")?ge(()=>{p.value=e.defaultValue}):p.value=e.defaultValue;const _=D(e,"value"),x=le(_,p),f=$([]),N=()=>{f.value=e.defaultExpandAll?v.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||v.value.getPath(x.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?ge(N):N();const H=lo(e,["expandedNames","expandedKeys"]),I=le(H,f),P=y(()=>v.value.treeNodes),R=y(()=>v.value.getPath(x.value).keyPath);j(X,{props:e,mergedCollapsedRef:l,mergedThemeRef:r,mergedValueRef:x,mergedExpandedKeysRef:I,activePathRef:R,mergedClsPrefixRef:t,isHorizontalRef:y(()=>e.mode==="horizontal"),invertedRef:D(e,"inverted"),doSelect:q,toggleExpand:O});function q(g,C){const{"onUpdate:value":n,onUpdateValue:h,onSelect:k}=e;h&&B(h,g,C),n&&B(n,g,C),k&&B(k,g,C),p.value=g}function L(g){const{"onUpdate:expandedKeys":C,onUpdateExpandedKeys:n,onExpandedNamesChange:h,onOpenNamesChange:k}=e;C&&B(C,g),n&&B(n,g),h&&B(h,g),k&&B(k,g),f.value=g}function O(g){const C=Array.from(I.value),n=C.findIndex(h=>h===g);if(~n)C.splice(n,1);else{if(e.accordion&&d.value.has(g)){const h=C.findIndex(k=>d.value.has(k));h>-1&&C.splice(h,1)}C.push(g)}L(C)}const A=g=>{const C=v.value.getPath(g!=null?g:x.value,{includeSelf:!1}).keyPath;if(!C.length)return;const n=Array.from(I.value),h=new Set([...n,...C]);e.accordion&&d.value.forEach(k=>{h.has(k)&&!C.includes(k)&&h.delete(k)}),L(Array.from(h))},z=y(()=>{const{inverted:g}=e,{common:{cubicBezierEaseInOut:C},self:n}=r.value,{borderRadius:h,borderColorHorizontal:k,fontSize:Me,itemHeight:Ke,dividerColor:Ve}=n,i={"--n-divider-color":Ve,"--n-bezier":C,"--n-font-size":Me,"--n-border-color-horizontal":k,"--n-border-radius":h,"--n-item-height":Ke};return g?(i["--n-group-text-color"]=n.groupTextColorInverted,i["--n-color"]=n.colorInverted,i["--n-item-text-color"]=n.itemTextColorInverted,i["--n-item-text-color-hover"]=n.itemTextColorHoverInverted,i["--n-item-text-color-active"]=n.itemTextColorActiveInverted,i["--n-item-text-color-child-active"]=n.itemTextColorChildActiveInverted,i["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveInverted,i["--n-item-text-color-active-hover"]=n.itemTextColorActiveHoverInverted,i["--n-item-icon-color"]=n.itemIconColorInverted,i["--n-item-icon-color-hover"]=n.itemIconColorHoverInverted,i["--n-item-icon-color-active"]=n.itemIconColorActiveInverted,i["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHoverInverted,i["--n-item-icon-color-child-active"]=n.itemIconColorChildActiveInverted,i["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHoverInverted,i["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsedInverted,i["--n-item-text-color-horizontal"]=n.itemTextColorHorizontalInverted,i["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontalInverted,i["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontalInverted,i["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontalInverted,i["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontalInverted,i["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontalInverted,i["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontalInverted,i["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontalInverted,i["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontalInverted,i["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontalInverted,i["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontalInverted,i["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontalInverted,i["--n-arrow-color"]=n.arrowColorInverted,i["--n-arrow-color-hover"]=n.arrowColorHoverInverted,i["--n-arrow-color-active"]=n.arrowColorActiveInverted,i["--n-arrow-color-active-hover"]=n.arrowColorActiveHoverInverted,i["--n-arrow-color-child-active"]=n.arrowColorChildActiveInverted,i["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHoverInverted,i["--n-item-color-hover"]=n.itemColorHoverInverted,i["--n-item-color-active"]=n.itemColorActiveInverted,i["--n-item-color-active-hover"]=n.itemColorActiveHoverInverted,i["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsedInverted):(i["--n-group-text-color"]=n.groupTextColor,i["--n-color"]=n.color,i["--n-item-text-color"]=n.itemTextColor,i["--n-item-text-color-hover"]=n.itemTextColorHover,i["--n-item-text-color-active"]=n.itemTextColorActive,i["--n-item-text-color-child-active"]=n.itemTextColorChildActive,i["--n-item-text-color-child-active-hover"]=n.itemTextColorChildActiveHover,i["--n-item-text-color-active-hover"]=n.itemTextColorActiveHover,i["--n-item-icon-color"]=n.itemIconColor,i["--n-item-icon-color-hover"]=n.itemIconColorHover,i["--n-item-icon-color-active"]=n.itemIconColorActive,i["--n-item-icon-color-active-hover"]=n.itemIconColorActiveHover,i["--n-item-icon-color-child-active"]=n.itemIconColorChildActive,i["--n-item-icon-color-child-active-hover"]=n.itemIconColorChildActiveHover,i["--n-item-icon-color-collapsed"]=n.itemIconColorCollapsed,i["--n-item-text-color-horizontal"]=n.itemTextColorHorizontal,i["--n-item-text-color-hover-horizontal"]=n.itemTextColorHoverHorizontal,i["--n-item-text-color-active-horizontal"]=n.itemTextColorActiveHorizontal,i["--n-item-text-color-child-active-horizontal"]=n.itemTextColorChildActiveHorizontal,i["--n-item-text-color-child-active-hover-horizontal"]=n.itemTextColorChildActiveHoverHorizontal,i["--n-item-text-color-active-hover-horizontal"]=n.itemTextColorActiveHoverHorizontal,i["--n-item-icon-color-horizontal"]=n.itemIconColorHorizontal,i["--n-item-icon-color-hover-horizontal"]=n.itemIconColorHoverHorizontal,i["--n-item-icon-color-active-horizontal"]=n.itemIconColorActiveHorizontal,i["--n-item-icon-color-active-hover-horizontal"]=n.itemIconColorActiveHoverHorizontal,i["--n-item-icon-color-child-active-horizontal"]=n.itemIconColorChildActiveHorizontal,i["--n-item-icon-color-child-active-hover-horizontal"]=n.itemIconColorChildActiveHoverHorizontal,i["--n-arrow-color"]=n.arrowColor,i["--n-arrow-color-hover"]=n.arrowColorHover,i["--n-arrow-color-active"]=n.arrowColorActive,i["--n-arrow-color-active-hover"]=n.arrowColorActiveHover,i["--n-arrow-color-child-active"]=n.arrowColorChildActive,i["--n-arrow-color-child-active-hover"]=n.arrowColorChildActiveHover,i["--n-item-color-hover"]=n.itemColorHover,i["--n-item-color-active"]=n.itemColorActive,i["--n-item-color-active-hover"]=n.itemColorActiveHover,i["--n-item-color-active-collapsed"]=n.itemColorActiveCollapsed),i}),w=o?ee("menu",y(()=>e.inverted?"a":"b"),z,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:H,uncontrolledExpanededKeys:f,mergedExpandedKeys:I,uncontrolledValue:p,mergedValue:x,activePath:R,tmNodes:P,mergedTheme:r,mergedCollapsed:l,cssVars:o?void 0:z,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender,showOption:A}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:r}=this;return r==null||r(),s("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>pe(a,this.$props)))}}),Ee=U("n-popconfirm"),je={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},Se=oe(je),Wo=T({name:"NPopconfirmPanel",props:je,setup(e){const{localeRef:t}=ye("Popconfirm"),{inlineThemeDisabled:o}=G(),{mergedClsPrefixRef:r,mergedThemeRef:a,props:l}=F(Ee),v=y(()=>{const{common:{cubicBezierEaseInOut:c},self:{fontSize:p,iconSize:_,iconColor:x}}=a.value;return{"--n-bezier":c,"--n-font-size":p,"--n-icon-size":_,"--n-icon-color":x}}),d=o?ee("popconfirm-panel",void 0,v,l):void 0;return Object.assign(Object.assign({},ye("Popconfirm")),{mergedClsPrefix:r,cssVars:o?void 0:v,localizedPositiveText:y(()=>e.positiveText||t.value.positiveText),localizedNegativeText:y(()=>e.negativeText||t.value.negativeText),positiveButtonProps:D(l,"positiveButtonProps"),negativeButtonProps:D(l,"negativeButtonProps"),handlePositiveClick(c){e.onPositiveClick(c)},handleNegativeClick(c){e.onNegativeClick(c)},themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender})},render(){var e;const{mergedClsPrefix:t,showIcon:o,$slots:r}=this,a=Ce(r.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&s(xe,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&s(xe,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(e=this.onRender)===null||e===void 0||e.call(this),s("div",{class:[`${t}-popconfirm__panel`,this.themeClass],style:this.cssVars},ao(r.default,l=>o||l?s("div",{class:`${t}-popconfirm__body`},o?s("div",{class:`${t}-popconfirm__icon`},Ce(r.icon,()=>[s(se,{clsPrefix:t},{default:()=>s(We,null)})])):null,l):null),a?s("div",{class:[`${t}-popconfirm__action`]},a):null)}}),Go=m("popconfirm",[u("body",`
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
 `,[b("&:not(:first-child)","margin-top: 8px"),m("button",[b("&:not(:last-child)","margin-right: 8px;")])])]),Yo=Object.assign(Object.assign(Object.assign({},E.props),so),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),Xo=T({name:"Popconfirm",props:Yo,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=G(),o=E("Popconfirm","-popconfirm",Go,Po,e,t),r=$(null);function a(d){const{onPositiveClick:c,"onUpdate:show":p}=e;Promise.resolve(c?c(d):!0).then(_=>{var x;_!==!1&&((x=r.value)===null||x===void 0||x.setShow(!1),p&&B(p,!1))})}function l(d){const{onNegativeClick:c,"onUpdate:show":p}=e;Promise.resolve(c?c(d):!0).then(_=>{var x;_!==!1&&((x=r.value)===null||x===void 0||x.setShow(!1),p&&B(p,!1))})}return j(Ee,{mergedThemeRef:o,mergedClsPrefixRef:t,props:e}),Object.assign(Object.assign({},{setShow(d){var c;(c=r.value)===null||c===void 0||c.setShow(d)},syncPosition(){var d;(d=r.value)===null||d===void 0||d.syncPosition()}}),{mergedTheme:o,popoverInstRef:r,handlePositiveClick:a,handleNegativeClick:l})},render(){const{$slots:e,$props:t,mergedTheme:o}=this;return s(co,Ge(t,Se,{theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.activator||e.trigger,default:()=>{const r=Q(t,Se);return s(Wo,Object.assign(Object.assign({},r),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}}),Zo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Jo=Ae("path",{d:"M352 48H160a48 48 0 0 0-48 48v368l144-128l144 128V96a48 48 0 0 0-48-48z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Qo=[Jo],et=T({name:"BookmarkOutline",render:function(t,o){return Y(),Pe("svg",Zo,Qo)}}),ot={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},tt=Ae("path",{d:"M98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z",fill:"currentColor"},null,-1),rt=[tt],nt=T({name:"CaretDownOutline",render:function(t,o){return Y(),Pe("svg",ot,rt)}}),it=T({__name:"LogoutButton",setup(e){return(t,o)=>(Y(),de(ie(Xo),{onPositiveClick:ie(Xe)},{trigger:K(()=>[Ye(t.$slots,"default",{},()=>[be("Logout")])]),default:K(()=>[be(" \u786E\u8BA4\u9000\u51FA\u767B\u5F55\u5417\uFF1F\u60A8\u662F\u5426\u786E\u8BA4\u5DF2\u7ECF\u5907\u4EFD\u79C1\u94A5? ")]),_:3},8,["onPositiveClick"]))}}),lt=T({__name:"Sidebar",props:{collapsed:{type:Boolean}},setup(e){Qe();const t=$([{key:"Profile",label:"Profile",href:"/profile"},{key:"Relays",label:"Relays",href:"/relays"},{key:"Global Feed",label:"Global Feed",href:"/home"},{key:"My Feed",label:"My Feed",href:"/feed"},{key:"Channels",label:"Channels",href:"/channels"},{key:"Settings",label:"Settings",href:"/settings"},{key:"About",label:"About",href:"/about"},{key:"Logout",label:()=>s(it)}]);function o(l){return"href"in l?s(Ze,{to:l.href},{default:()=>l.label}):eo(l.label)?l.label():l.label}function r(l){return l.key==="sheep-man"?!0:l.key==="food"?null:s(ze,null,{default:()=>s(et)})}function a(){return s(ze,null,{default:()=>s(nt)})}return(l,v)=>(Y(),de(ie(qo),{collapsed:e.collapsed,"collapsed-width":64,"collapsed-icon-size":22,options:t.value,"render-label":o,"render-icon":r,"expand-icon":a},null,8,["collapsed","options"]))}}),ht=T({__name:"LayoutView",setup(e){const t=$(!0);return(o,r)=>{const a=Oo,l=Je("RouterView"),v=Ro,d=uo;return Y(),de(d,{vertical:""},{default:K(()=>[W(v,{"has-sider":""},{default:K(()=>[W(a,{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,collapsed:t.value,"show-trigger":"",onCollapse:r[0]||(r[0]=c=>t.value=!0),onExpand:r[1]||(r[1]=c=>t.value=!1)},{default:K(()=>[W(lt,{collapsed:t.value},null,8,["collapsed"])]),_:1},8,["collapsed"]),W(v,{class:"h-screen p-4 box-border"},{default:K(()=>[W(l)]),_:1})]),_:1})]),_:1})}}});export{ht as default};
