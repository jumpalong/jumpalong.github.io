import{d as k,h as d,c as ge,a as pe,b as ue,e as J,f as U,g as u,i as w,u as K,r as $,j as re,k as z,l as ne,p as M,m as c,n as b,N as be,o as E,t as X,q as j,F as $e,s as oe,v as Fe,w as G,x as Ee,y as ve,z as Z,A as xe,B as Ce,C as ye,D as Le,R as Me,E as Y,G as D,H as je}from"./index.16f885a0.js";import{u as Ke}from"./use.371b1fd7.js";import{d as Ve,C as De,_ as Ue,c as qe}from"./Dropdown.3504b7d6.js";import{s as Ge,t as Ye,u as ze,N as Ie,f as Q,a as te,c as O,_ as We,k as le,b as ee,d as Xe,e as Ze}from"./Space.27d7f468.js";import{N as me}from"./Icon.0afac5d0.js";import"./fade-in-scale-up.cssr.27cf49ad.js";const Je=k({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Qe=e=>{const{baseColor:t,textColor2:o,bodyColor:n,cardColor:a,dividerColor:i,actionColor:v,scrollbarColor:m,scrollbarColorHover:s,invertedColor:x}=e;return{textColor:o,textColorInverted:"#FFF",color:n,colorEmbedded:v,headerColor:a,headerColorInverted:x,footerColor:v,footerColorInverted:x,headerBorderColor:i,headerBorderColorInverted:x,footerBorderColor:i,footerBorderColorInverted:x,siderBorderColor:i,siderBorderColorInverted:x,siderColor:a,siderColorInverted:x,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:ue(n,m),siderToggleBarColorHover:ue(n,s),__invertScrollbar:"true"}},eo=ge({name:"Layout",common:pe,peers:{Scrollbar:Ge},self:Qe}),we=eo;function oo(e,t,o,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:n}}const to=e=>{const{borderRadius:t,textColor3:o,primaryColor:n,textColor2:a,textColor1:i,fontSize:v,dividerColor:m,hoverColor:s,primaryColorHover:x}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:s,itemColorActive:J(n,{alpha:.1}),itemColorActiveHover:J(n,{alpha:.1}),itemColorActiveCollapsed:J(n,{alpha:.1}),itemTextColor:a,itemTextColorHover:a,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:a,itemTextColorHoverHorizontal:x,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:x,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:a,arrowColorHover:a,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:v,dividerColor:m},oo("#BBB",n,"#FFF","#AAA"))},ro=ge({name:"Menu",common:pe,peers:{Tooltip:Ye,Dropdown:Ve},self:to}),no=ro,Se=U("n-layout-sider"),He={type:String,default:"static"},lo=u("layout",`
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
`,[u("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),w("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),io={embedded:Boolean,position:He,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Ae=U("n-layout");function ao(e){return k({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},K.props),io),setup(t){const o=$(null),n=$(null),{mergedClsPrefixRef:a,inlineThemeDisabled:i}=re(t),v=K("Layout","-layout",lo,we,t,a);function m(y,S){if(t.nativeScrollbar){const{value:P}=o;P&&(S===void 0?P.scrollTo(y):P.scrollTo(y,S))}else{const{value:P}=n;P&&P.scrollTo(y,S)}}M(Ae,t);let s=0,x=0;const N=y=>{var S;const P=y.target;s=P.scrollLeft,x=P.scrollTop,(S=t.onScroll)===null||S===void 0||S.call(t,y)};ze(()=>{if(t.nativeScrollbar){const y=o.value;y&&(y.scrollTop=x,y.scrollLeft=s)}});const A={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},f={scrollTo:m},_=z(()=>{const{common:{cubicBezierEaseInOut:y},self:S}=v.value;return{"--n-bezier":y,"--n-color":t.embedded?S.colorEmbedded:S.color,"--n-text-color":S.textColor}}),R=i?ne("layout",z(()=>t.embedded?"e":""),_,t):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:o,scrollbarInstRef:n,hasSiderStyle:A,mergedTheme:v,handleNativeElScroll:N,cssVars:i?void 0:_,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender},f)},render(){var t;const{mergedClsPrefix:o,hasSider:n}=this;(t=this.onRender)===null||t===void 0||t.call(this);const a=n?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return d("div",{class:i,style:this.cssVars},this.nativeScrollbar?d("div",{ref:"scrollableElRef",class:`${o}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):d(Ie,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const co=ao(!1),so=u("layout-sider",`
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
`,[w("bordered",[c("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),c("left-placement",[w("bordered",[c("border",`
 right: 0;
 `)])]),w("right-placement",`
 justify-content: flex-start;
 `,[w("bordered",[c("border",`
 left: 0;
 `)]),w("collapsed",[u("layout-toggle-button",[u("base-icon",`
 transform: rotate(180deg);
 `)]),u("layout-toggle-bar",[b("&:hover",[c("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),u("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[u("base-icon",`
 transform: rotate(0);
 `)]),u("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[b("&:hover",[c("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),w("collapsed",[u("layout-toggle-bar",[b("&:hover",[c("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),u("layout-toggle-button",[u("base-icon",`
 transform: rotate(0);
 `)])]),u("layout-toggle-button",`
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
 `,[u("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),u("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[c("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),c("bottom",`
 position: absolute;
 top: 34px;
 `),b("&:hover",[c("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),c("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),c("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),b("&:hover",[c("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),c("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),u("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),w("show-content",[u("layout-sider-scroll-container",{opacity:1})]),w("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),uo=k({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},d(be,{clsPrefix:e},{default:()=>d(De,null)}))}}),vo=k({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},d("div",{class:`${e}-layout-toggle-bar__top`}),d("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),mo={position:He,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},ho=k({name:"LayoutSider",props:Object.assign(Object.assign({},K.props),mo),setup(e){const t=E(Ae),o=$(null),n=$(null),a=z(()=>Q(s.value?e.collapsedWidth:e.width)),i=z(()=>e.collapseMode!=="transform"?{}:{minWidth:Q(e.width)}),v=z(()=>t?t.siderPlacement:"left"),m=$(e.defaultCollapsed),s=te(X(e,"collapsed"),m);function x(H,C){if(e.nativeScrollbar){const{value:I}=o;I&&(C===void 0?I.scrollTo(H):I.scrollTo(H,C))}else{const{value:I}=n;I&&I.scrollTo(H,C)}}function N(){const{"onUpdate:collapsed":H,onUpdateCollapsed:C,onExpand:I,onCollapse:g}=e,{value:p}=s;C&&O(C,!p),H&&O(H,!p),m.value=!p,p?I&&O(I):g&&O(g)}let A=0,f=0;const _=H=>{var C;const I=H.target;A=I.scrollLeft,f=I.scrollTop,(C=e.onScroll)===null||C===void 0||C.call(e,H)};ze(()=>{if(e.nativeScrollbar){const H=o.value;H&&(H.scrollTop=f,H.scrollLeft=A)}}),M(Se,{collapsedRef:s,collapseModeRef:X(e,"collapseMode")});const{mergedClsPrefixRef:R,inlineThemeDisabled:y}=re(e),S=K("Layout","-layout-sider",so,we,e,R);function P(H){var C,I;H.propertyName==="max-width"&&(s.value?(C=e.onAfterLeave)===null||C===void 0||C.call(e):(I=e.onAfterEnter)===null||I===void 0||I.call(e))}const V={scrollTo:x},F=z(()=>{const{common:{cubicBezierEaseInOut:H},self:C}=S.value,{siderToggleButtonColor:I,siderToggleButtonBorder:g,siderToggleBarColor:p,siderToggleBarColorHover:r}=C,h={"--n-bezier":H,"--n-toggle-button-color":I,"--n-toggle-button-border":g,"--n-toggle-bar-color":p,"--n-toggle-bar-color-hover":r};return e.inverted?(h["--n-color"]=C.siderColorInverted,h["--n-text-color"]=C.textColorInverted,h["--n-border-color"]=C.siderBorderColorInverted,h["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColorInverted,h.__invertScrollbar=C.__invertScrollbar):(h["--n-color"]=C.siderColor,h["--n-text-color"]=C.textColor,h["--n-border-color"]=C.siderBorderColor,h["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColor),h}),B=y?ne("layout-sider",z(()=>e.inverted?"a":"b"),F,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:n,mergedClsPrefix:R,mergedTheme:S,styleMaxWidth:a,mergedCollapsed:s,scrollContainerStyle:i,siderPlacement:v,handleNativeElScroll:_,handleTransitionend:P,handleTriggerClick:N,inlineThemeDisabled:y,cssVars:F,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender},V)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:Q(this.width)}]},this.nativeScrollbar?d("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):d(Ie,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?d(vo,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):d(uo,{clsPrefix:t,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?d("div",{class:`${t}-layout-sider__border`}):null)}}),q=U("n-menu"),ie=U("n-submenu"),ae=U("n-menu-item-group"),W=8;function ce(e){const t=E(q),{props:o,mergedCollapsedRef:n}=t,a=E(ie,null),i=E(ae,null),v=z(()=>o.mode==="horizontal"),m=z(()=>v.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=z(()=>{var f;return Math.max((f=o.collapsedIconSize)!==null&&f!==void 0?f:o.iconSize,o.iconSize)}),x=z(()=>{var f;return!v.value&&e.root&&n.value&&(f=o.collapsedIconSize)!==null&&f!==void 0?f:o.iconSize}),N=z(()=>{if(v.value)return;const{collapsedWidth:f,indent:_,rootIndent:R}=o,{root:y,isGroup:S}=e,P=R===void 0?_:R;if(y)return n.value?f/2-s.value/2:P;if(i)return _/2+i.paddingLeftRef.value;if(a)return(S?_/2:_)+a.paddingLeftRef.value}),A=z(()=>{const{collapsedWidth:f,indent:_,rootIndent:R}=o,{value:y}=s,{root:S}=e;return v.value||!S||!n.value?W:(R===void 0?_:R)+y+W-(f+y)/2});return{dropdownPlacement:m,activeIconSize:x,maxIconSize:s,paddingLeft:N,iconMarginRight:A,NMenu:t,NSubmenu:a}}const de={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Re=Object.assign(Object.assign({},de),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),fo=k({name:"MenuOptionGroup",props:Re,setup(e){M(ie,null);const t=ce(e);M(ae,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:n}=E(q);return function(){const{value:a}=o,i=t.paddingLeft.value,{nodeProps:v}=n,m=v==null?void 0:v(e.tmNode.rawNode);return d("div",{class:`${a}-menu-item-group`,role:"group"},d("div",Object.assign({},m,{class:[`${a}-menu-item-group-title`,m==null?void 0:m.class],style:[(m==null?void 0:m.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),j(e.title),e.extra?d($e,null," ",j(e.extra)):null),d("div",null,e.tmNodes.map(s=>se(s,n))))}}}),Pe=k({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=E(q);return{menuProps:t,style:z(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:z(()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:a}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:n,renderExtra:a,expandIcon:i}}=this,v=o?o(t.rawNode):j(this.icon);return d("div",{onClick:m=>{var s;(s=this.onClick)===null||s===void 0||s.call(this,m)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},v&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[v]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(t.rawNode):j(this.title),this.extra||a?d("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(t.rawNode):j(this.extra)):null),this.showArrow?d(be,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(t.rawNode):d(Je,null)}):null)}}),Te=Object.assign(Object.assign({},de),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),go=k({name:"Submenu",props:Te,setup(e){const t=ce(e),{NMenu:o,NSubmenu:n}=t,{props:a,mergedCollapsedRef:i,mergedThemeRef:v}=o,m=z(()=>{const{disabled:f}=e;return n!=null&&n.mergedDisabledRef.value||a.disabled?!0:f}),s=$(!1);M(ie,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:m}),M(ae,null);function x(){const{onClick:f}=e;f&&f()}function N(){m.value||(i.value||o.toggleExpand(e.internalKey),x())}function A(f){s.value=f}return{menuProps:a,mergedTheme:v,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:s,paddingLeft:t.paddingLeft,mergedDisabled:m,mergedValue:o.mergedValueRef,childActive:oe(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:z(()=>a.mode==="horizontal"?!1:i.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:z(()=>!m.value&&(a.mode==="horizontal"||i.value)),handlePopoverShowChange:A,handleClick:N}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:n}}=this,a=()=>{const{isHorizontal:v,paddingLeft:m,collapsed:s,mergedDisabled:x,maxIconSize:N,activeIconSize:A,title:f,childActive:_,icon:R,handleClick:y,menuProps:{nodeProps:S},dropdownShow:P,iconMarginRight:V,tmNode:F,mergedClsPrefix:B}=this,H=S==null?void 0:S(F.rawNode);return d("div",Object.assign({},H,{class:[`${B}-menu-item`,H==null?void 0:H.class],role:"menuitem"}),d(Pe,{tmNode:F,paddingLeft:m,collapsed:s,disabled:x,iconMarginRight:V,maxIconSize:N,activeIconSize:A,title:f,extra:this.extra,showArrow:!v,childActive:_,clsPrefix:B,icon:R,hover:P,onClick:y}))},i=()=>d(Fe,null,{default:()=>{const{tmNodes:v,collapsed:m}=this;return m?null:d("div",{class:`${t}-submenu-children`,role:"menu"},v.map(s=>se(s,this.menuProps)))}});return this.root?d(Ue,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:n}),{default:()=>d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:i())}):d("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),i())}}),_e=Object.assign(Object.assign({},de),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),po=k({name:"MenuOption",props:_e,setup(e){const t=ce(e),{NSubmenu:o,NMenu:n}=t,{props:a,mergedClsPrefixRef:i,mergedCollapsedRef:v}=n,m=o?o.mergedDisabledRef:{value:!1},s=z(()=>m.value||e.disabled);function x(A){const{onClick:f}=e;f&&f(A)}function N(A){s.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),x(A))}return{mergedClsPrefix:i,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:a,dropdownEnabled:oe(()=>e.root&&v.value&&a.mode!=="horizontal"&&!s.value),selected:oe(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:N}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:n,nodeProps:a}}=this,i=a==null?void 0:a(o.rawNode);return d("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),d(We,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(o.rawNode):j(this.title),trigger:()=>d(Pe,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),bo=k({name:"MenuDivider",setup(){const e=E(q),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:d("div",{class:`${t.value}-menu-divider`})}}),xo=le(Re),Co=le(_e),yo=le(Te);function ke(e){return e.type==="divider"||e.type==="render"}function zo(e){return e.type==="divider"}function se(e,t){const{rawNode:o}=e,{show:n}=o;if(n===!1)return null;if(ke(o))return zo(o)?d(bo,Object.assign({key:e.key},o.props)):null;const{labelField:a}=t,{key:i,level:v,isGroup:m}=e,s=Object.assign(Object.assign({},o),{title:o.title||o[a],extra:o.titleExtra||o.extra,key:i,internalKey:i,level:v,root:v===0,isGroup:m});return e.children?e.isGroup?d(fo,ee(s,xo,{tmNode:e,tmNodes:e.children,key:i})):d(go,ee(s,yo,{key:i,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):d(po,ee(s,Co,{key:i,tmNode:e}))}const he=[b("&::before","background-color: var(--n-item-color-hover);"),c("arrow",`
 color: var(--n-arrow-color-hover);
 `),c("icon",`
 color: var(--n-item-icon-color-hover);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[b("a",`
 color: var(--n-item-text-color-hover);
 `),c("extra",`
 color: var(--n-item-text-color-hover);
 `)])],fe=[c("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),u("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[b("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),c("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Io=b([u("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[w("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[u("submenu","margin: 0;"),u("menu-item","margin: 0;"),u("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[b("&::before","display: none;"),w("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),u("menu-item-content",[w("selected",[c("icon","color: var(--n-item-icon-color-active-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[b("a","color: var(--n-item-text-color-active-horizontal);"),c("extra","color: var(--n-item-text-color-active-horizontal);")])]),w("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[b("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),c("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),c("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),G("disabled",[G("selected, child-active",[b("&:focus-within",fe)]),w("selected",[L(null,[c("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[b("a","color: var(--n-item-text-color-active-hover-horizontal);"),c("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),w("child-active",[L(null,[c("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[b("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),c("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),L("border-bottom: 2px solid var(--n-border-color-horizontal);",fe)]),u("menu-item-content-header",[b("a","color: var(--n-item-text-color-horizontal);")])])]),w("collapsed",[u("menu-item-content",[w("selected",[b("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),u("menu-item-content-header","opacity: 0;"),c("arrow","opacity: 0;"),c("icon","color: var(--n-item-icon-color-collapsed);")])]),u("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),u("menu-item-content",`
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
 `),w("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),w("collapsed",[c("arrow","transform: rotate(0);")]),w("selected",[b("&::before","background-color: var(--n-item-color-active);"),c("arrow","color: var(--n-arrow-color-active);"),c("icon","color: var(--n-item-icon-color-active);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[b("a","color: var(--n-item-text-color-active);"),c("extra","color: var(--n-item-text-color-active);")])]),w("child-active",[u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[b("a",`
 color: var(--n-item-text-color-child-active);
 `),c("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),c("arrow",`
 color: var(--n-arrow-color-child-active);
 `),c("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),G("disabled",[G("selected, child-active",[b("&:focus-within",he)]),w("selected",[L(null,[c("arrow","color: var(--n-arrow-color-active-hover);"),c("icon","color: var(--n-item-icon-color-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[b("a","color: var(--n-item-text-color-active-hover);"),c("extra","color: var(--n-item-text-color-active-hover);")])])]),w("child-active",[L(null,[c("arrow","color: var(--n-arrow-color-child-active-hover);"),c("icon","color: var(--n-item-icon-color-child-active-hover);"),u("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[b("a","color: var(--n-item-text-color-child-active-hover);"),c("extra","color: var(--n-item-text-color-child-active-hover);")])])]),w("selected",[L(null,[b("&::before","background-color: var(--n-item-color-active-hover);")])]),L(null,he)]),c("icon",`
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
 `),c("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),u("menu-item-content-header",`
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
 `)]),c("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),u("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[u("menu-item-content",`
 height: var(--n-item-height);
 `),u("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Ee({duration:".2s"})])]),u("menu-item-group",[u("menu-item-group-title",`
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
 `)])]),u("menu-tooltip",[b("a",`
 color: inherit;
 text-decoration: none;
 `)]),u("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function L(e,t){return[w("hover",e,t),b("&:hover",e,t)]}const wo=Object.assign(Object.assign({},K.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),So=k({name:"Menu",props:wo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=re(e),n=K("Menu","-menu",Io,no,e,t),a=E(Se,null),i=z(()=>{var g;const{collapsed:p}=e;if(p!==void 0)return p;if(a){const{collapseModeRef:r,collapsedRef:h}=a;if(r.value==="width")return(g=h.value)!==null&&g!==void 0?g:!1}return!1}),v=z(()=>{const{keyField:g,childrenField:p,disabledField:r}=e;return qe(e.items||e.options,{getIgnored(h){return ke(h)},getChildren(h){return h[p]},getDisabled(h){return h[r]},getKey(h){var T;return(T=h[g])!==null&&T!==void 0?T:h.name}})}),m=z(()=>new Set(v.value.treeNodes.map(g=>g.key))),{watchProps:s}=e,x=$(null);s!=null&&s.includes("defaultValue")?ve(()=>{x.value=e.defaultValue}):x.value=e.defaultValue;const N=X(e,"value"),A=te(N,x),f=$([]),_=()=>{f.value=e.defaultExpandAll?v.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||v.value.getPath(A.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?ve(_):_();const R=Xe(e,["expandedNames","expandedKeys"]),y=te(R,f),S=z(()=>v.value.treeNodes),P=z(()=>v.value.getPath(A.value).keyPath);M(q,{props:e,mergedCollapsedRef:i,mergedThemeRef:n,mergedValueRef:A,mergedExpandedKeysRef:y,activePathRef:P,mergedClsPrefixRef:t,isHorizontalRef:z(()=>e.mode==="horizontal"),invertedRef:X(e,"inverted"),doSelect:V,toggleExpand:B});function V(g,p){const{"onUpdate:value":r,onUpdateValue:h,onSelect:T}=e;h&&O(h,g,p),r&&O(r,g,p),T&&O(T,g,p),x.value=g}function F(g){const{"onUpdate:expandedKeys":p,onUpdateExpandedKeys:r,onExpandedNamesChange:h,onOpenNamesChange:T}=e;p&&O(p,g),r&&O(r,g),h&&O(h,g),T&&O(T,g),f.value=g}function B(g){const p=Array.from(y.value),r=p.findIndex(h=>h===g);if(~r)p.splice(r,1);else{if(e.accordion&&m.value.has(g)){const h=p.findIndex(T=>m.value.has(T));h>-1&&p.splice(h,1)}p.push(g)}F(p)}const H=g=>{const p=v.value.getPath(g!=null?g:A.value,{includeSelf:!1}).keyPath;if(!p.length)return;const r=Array.from(y.value),h=new Set([...r,...p]);e.accordion&&m.value.forEach(T=>{h.has(T)&&!p.includes(T)&&h.delete(T)}),F(Array.from(h))},C=z(()=>{const{inverted:g}=e,{common:{cubicBezierEaseInOut:p},self:r}=n.value,{borderRadius:h,borderColorHorizontal:T,fontSize:Ne,itemHeight:Be,dividerColor:Oe}=r,l={"--n-divider-color":Oe,"--n-bezier":p,"--n-font-size":Ne,"--n-border-color-horizontal":T,"--n-border-radius":h,"--n-item-height":Be};return g?(l["--n-group-text-color"]=r.groupTextColorInverted,l["--n-color"]=r.colorInverted,l["--n-item-text-color"]=r.itemTextColorInverted,l["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,l["--n-item-text-color-active"]=r.itemTextColorActiveInverted,l["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,l["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveInverted,l["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,l["--n-item-icon-color"]=r.itemIconColorInverted,l["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,l["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,l["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,l["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,l["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHoverInverted,l["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,l["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,l["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,l["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,l["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,l["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontalInverted,l["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,l["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,l["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,l["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,l["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,l["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,l["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontalInverted,l["--n-arrow-color"]=r.arrowColorInverted,l["--n-arrow-color-hover"]=r.arrowColorHoverInverted,l["--n-arrow-color-active"]=r.arrowColorActiveInverted,l["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,l["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,l["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHoverInverted,l["--n-item-color-hover"]=r.itemColorHoverInverted,l["--n-item-color-active"]=r.itemColorActiveInverted,l["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,l["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(l["--n-group-text-color"]=r.groupTextColor,l["--n-color"]=r.color,l["--n-item-text-color"]=r.itemTextColor,l["--n-item-text-color-hover"]=r.itemTextColorHover,l["--n-item-text-color-active"]=r.itemTextColorActive,l["--n-item-text-color-child-active"]=r.itemTextColorChildActive,l["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveHover,l["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,l["--n-item-icon-color"]=r.itemIconColor,l["--n-item-icon-color-hover"]=r.itemIconColorHover,l["--n-item-icon-color-active"]=r.itemIconColorActive,l["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,l["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,l["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHover,l["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,l["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,l["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,l["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,l["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,l["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontal,l["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,l["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,l["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,l["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,l["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,l["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,l["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontal,l["--n-arrow-color"]=r.arrowColor,l["--n-arrow-color-hover"]=r.arrowColorHover,l["--n-arrow-color-active"]=r.arrowColorActive,l["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,l["--n-arrow-color-child-active"]=r.arrowColorChildActive,l["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHover,l["--n-item-color-hover"]=r.itemColorHover,l["--n-item-color-active"]=r.itemColorActive,l["--n-item-color-active-hover"]=r.itemColorActiveHover,l["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),l}),I=o?ne("menu",z(()=>e.inverted?"a":"b"),C,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:R,uncontrolledExpanededKeys:f,mergedExpandedKeys:y,uncontrolledValue:x,mergedValue:A,activePath:P,tmNodes:S,mergedTheme:n,mergedCollapsed:i,cssVars:o?void 0:C,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender,showOption:H}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:n}=this;return n==null||n(),d("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>se(a,this.$props)))}}),Ho={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ao=Ce("path",{d:"M352 48H160a48 48 0 0 0-48 48v368l144-128l144 128V96a48 48 0 0 0-48-48z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Ro=[Ao],Po=k({name:"BookmarkOutline",render:function(t,o){return Z(),xe("svg",Ho,Ro)}}),To={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},_o=Ce("path",{d:"M98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z",fill:"currentColor"},null,-1),ko=[_o],No=k({name:"CaretDownOutline",render:function(t,o){return Z(),xe("svg",To,ko)}}),Bo=k({__name:"Sidebar",props:{collapsed:{type:Boolean}},setup(e){Ke();const t=$([{key:"Profile",label:"Profile",href:"/profile"},{key:"Relays",label:"Relays",href:"/relays"},{key:"Global Feed",label:"Global Feed",href:"/home"},{key:"My Feed",label:"My Feed",href:"/feed"},{key:"Channels",label:"Channels",href:"/channels"},{key:"Settings",label:"Settings",href:"/settings"},{key:"About",label:"About",href:"/about"}]);function o(i){return"href"in i?d(Me,{to:i.href},{default:()=>i.label}):i.label}function n(i){return i.key==="sheep-man"?!0:i.key==="food"?null:d(me,null,{default:()=>d(Po)})}function a(){return d(me,null,{default:()=>d(No)})}return(i,v)=>(Z(),ye(Le(So),{collapsed:e.collapsed,"collapsed-width":64,"collapsed-icon-size":22,options:t.value,"render-label":o,"render-icon":n,"expand-icon":a},null,8,["collapsed","options"]))}}),jo=k({__name:"LayoutView",setup(e){const t=$(!0);return(o,n)=>{const a=ho,i=je("RouterView"),v=co,m=Ze;return Z(),ye(m,{vertical:""},{default:Y(()=>[D(v,{"has-sider":""},{default:Y(()=>[D(a,{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,collapsed:t.value,"show-trigger":"",onCollapse:n[0]||(n[0]=s=>t.value=!0),onExpand:n[1]||(n[1]=s=>t.value=!1)},{default:Y(()=>[D(Bo,{collapsed:t.value},null,8,["collapsed"])]),_:1},8,["collapsed"]),D(v,{class:"h-screen p-4 box-border"},{default:Y(()=>[D(i)]),_:1})]),_:1})]),_:1})}}});export{jo as default};
