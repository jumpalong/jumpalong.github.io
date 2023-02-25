import{a6 as pe,r as B,bw as Me,o as ae,K as no,w as J,c as E,b as S,a as x,P as ue,e as D,j as A,v as be,d as I,u as ce,bC as Ro,x as Z,y as le,l as ro,m as F,n as M,p as de,h as f,N as lo,A as De,B as io,i as ie,aV as Fo,bD as Eo,ah as So,bE as Oo,b9 as Y,s as Mo,I as Ae,S as Do,W as Io,E as To,ap as He,L as Lo,a_ as jo,q as No,al as $e,aZ as Ve,T as so,aq as Ao,bF as Ho,bG as Vo,O as Uo,X as O,a4 as X,_ as z,Z as $,ag as ao,af as Ko,Y as H,a5 as L,a7 as C,ae as me,$ as j,a9 as G,a3 as co,V as ge,ad as Wo,a1 as Xo}from"./index.d8f797c6.js";import{i as Be,o as Yo,p as qo,g as Go,l as Pe,b as uo,_ as Zo,f as Jo,u as Qo}from"./PostList.vue_vue_type_script_setup_true_lang.641fcf24.js";import{u as N,g as fo,k as et,r as ot}from"./user.da0a4adb.js";import{_ as tt}from"./Ellipsis.vue_vue_type_script_setup_true_lang.13bd0a7d.js";import{O as vo,o as Re,z as ho,p as Fe,H as nt,P as Ee,a as se,c as ne,r as Se,V as rt,N as U,Q as go,E as lt,A as it,R as st,n as at,S as ct,T as dt,k as Oe,G as ut,I as ft,L as vt,U as ht,J as gt,_ as Ue,j as pt}from"./Space.28e34898.js";import{a as mt,_ as bt}from"./Tabs.1eb33f60.js";import{u as kt,N as yt}from"./use-message.9d078f0e.js";import{N as fe,u as Ct,r as Ke}from"./naiveUi.13532acc.js";import{c as _t,_ as po,a as xt}from"./Card.ee9e9e2a.js";import{_ as wt}from"./Dropdown.2fbbecac.js";import{k as mo}from"./keysOf.8a025f7e.js";import{f as zt}from"./fade-in-scale-up.cssr.71d7533c.js";import"./utils.82ac1979.js";import"./use-locale.46468919.js";const Bt=new WeakSet;function $t(e){return!Bt.has(e)}const re=B(null);function We(e){if(e.clientX>0||e.clientY>0)re.value={x:e.clientX,y:e.clientY};else{const{target:t}=e;if(t instanceof Element){const{left:o,top:n,width:l,height:h}=t.getBoundingClientRect();o>0||n>0?re.value={x:o+l/2,y:n+h/2}:re.value={x:0,y:0}}else re.value=null}}let ve=0,Xe=!0;function Pt(){if(!vo)return pe(B(null));ve===0&&Re("click",document,We,!0);const e=()=>{ve+=1};return Xe&&(Xe=ho())?(Me(e),ae(()=>{ve-=1,ve===0&&Fe("click",document,We,!0)})):e(),pe(re)}const Rt=B(void 0);let he=0;function Ye(){Rt.value=Date.now()}let qe=!0;function Ft(e){if(!vo)return pe(B(!1));const t=B(!1);let o=null;function n(){o!==null&&window.clearTimeout(o)}function l(){n(),t.value=!0,o=window.setTimeout(()=>{t.value=!1},e)}he===0&&Re("click",window,Ye,!0);const h=()=>{he+=1,Re("click",window,l,!0)};return qe&&(qe=ho())?(Me(h),ae(()=>{he-=1,he===0&&Fe("click",window,Ye,!0),Fe("click",window,l,!0),n()})):h(),pe(t)}let q=0,Ge="",Ze="",Je="",Qe="";const eo=B("0px");function Et(e){if(typeof document>"u")return;const t=document.documentElement;let o,n=!1;const l=()=>{t.style.marginRight=Ge,t.style.overflow=Ze,t.style.overflowX=Je,t.style.overflowY=Qe,eo.value="0px"};no(()=>{o=J(e,h=>{if(h){if(!q){const r=window.innerWidth-t.offsetWidth;r>0&&(Ge=t.style.marginRight,t.style.marginRight=`${r}px`,eo.value=`${r}px`),Ze=t.style.overflow,Je=t.style.overflowX,Qe=t.style.overflowY,t.style.overflow="hidden",t.style.overflowX="hidden",t.style.overflowY="hidden"}n=!0,q++}else q--,q||l(),n=!1},{immediate:!0})}),ae(()=>{o==null||o(),n&&(q--,q||l(),n=!1)})}const Ie=B(!1),oo=()=>{Ie.value=!0},to=()=>{Ie.value=!1};let te=0;const St=()=>(nt&&(Me(()=>{te||(window.addEventListener("compositionstart",oo),window.addEventListener("compositionend",to)),te++}),ae(()=>{te<=1?(window.removeEventListener("compositionstart",oo),window.removeEventListener("compositionend",to),te=0):te--})),Ie),Ot={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Mt=E("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[S("strong",`
 font-weight: var(--n-font-weight-strong);
 `),x("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),x("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),x("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),x("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),S("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[x("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),x("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),S("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),S("icon, avatar",[S("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),S("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),S("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ue("disabled",[D("&:hover","background-color: var(--n-color-hover-checkable);",[ue("checked","color: var(--n-text-color-hover-checkable);")]),D("&:active","background-color: var(--n-color-pressed-checkable);",[ue("checked","color: var(--n-text-color-pressed-checkable);")])]),S("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ue("disabled",[D("&:hover","background-color: var(--n-color-checked-hover);"),D("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Dt=Object.assign(Object.assign(Object.assign({},A.props),Ot),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),bo=be("n-tag");I({name:"Tag",props:Dt,setup(e){const t=B(null),{mergedBorderedRef:o,mergedClsPrefixRef:n,inlineThemeDisabled:l,mergedRtlRef:h}=ce(e),r=A("Tag","-tag",Mt,Ro,e,n);Z(bo,{roundRef:le(e,"round")});function i(u){if(!e.disabled&&e.checkable){const{checked:k,onCheckedChange:P,onUpdateChecked:p,"onUpdate:checked":_}=e;p&&p(!k),_&&_(!k),P&&P(!k)}}function g(u){if(e.triggerClickOnClose||u.stopPropagation(),!e.disabled){const{onClose:k}=e;k&&ne(k,u)}}const y={setTextContent(u){const{value:k}=t;k&&(k.textContent=u)}},v=ro("Tag",h,n),c=F(()=>{const{type:u,size:k,color:{color:P,textColor:p}={}}=e,{common:{cubicBezierEaseInOut:_},self:{padding:w,closeMargin:d,closeMarginRtl:m,borderRadius:s,opacityDisabled:a,textColorCheckable:R,textColorHoverCheckable:T,textColorPressedCheckable:V,textColorChecked:K,colorCheckable:Q,colorHoverCheckable:ee,colorPressedCheckable:oe,colorChecked:W,colorCheckedHover:ke,colorCheckedPressed:ye,closeBorderRadius:Ce,fontWeightStrong:_e,[M("colorBordered",u)]:xe,[M("closeSize",k)]:we,[M("closeIconSize",k)]:ze,[M("fontSize",k)]:Co,[M("height",k)]:je,[M("color",u)]:_o,[M("textColor",u)]:xo,[M("border",u)]:wo,[M("closeIconColor",u)]:Ne,[M("closeIconColorHover",u)]:zo,[M("closeIconColorPressed",u)]:Bo,[M("closeColorHover",u)]:$o,[M("closeColorPressed",u)]:Po}}=r.value;return{"--n-font-weight-strong":_e,"--n-avatar-size-override":`calc(${je} - 8px)`,"--n-bezier":_,"--n-border-radius":s,"--n-border":wo,"--n-close-icon-size":ze,"--n-close-color-pressed":Po,"--n-close-color-hover":$o,"--n-close-border-radius":Ce,"--n-close-icon-color":Ne,"--n-close-icon-color-hover":zo,"--n-close-icon-color-pressed":Bo,"--n-close-icon-color-disabled":Ne,"--n-close-margin":d,"--n-close-margin-rtl":m,"--n-close-size":we,"--n-color":P||(o.value?xe:_o),"--n-color-checkable":Q,"--n-color-checked":W,"--n-color-checked-hover":ke,"--n-color-checked-pressed":ye,"--n-color-hover-checkable":ee,"--n-color-pressed-checkable":oe,"--n-font-size":Co,"--n-height":je,"--n-opacity-disabled":a,"--n-padding":w,"--n-text-color":p||xo,"--n-text-color-checkable":R,"--n-text-color-checked":K,"--n-text-color-hover-checkable":T,"--n-text-color-pressed-checkable":V}}),b=l?de("tag",F(()=>{let u="";const{type:k,size:P,color:{color:p,textColor:_}={}}=e;return u+=k[0],u+=P[0],p&&(u+=`a${Ee(p)}`),_&&(u+=`b${Ee(_)}`),o.value&&(u+="c"),u}),c,e):void 0;return Object.assign(Object.assign({},y),{rtlEnabled:v,mergedClsPrefix:n,contentRef:t,mergedBordered:o,handleClick:i,handleCloseClick:g,cssVars:l?void 0:c,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender})},render(){var e,t;const{mergedClsPrefix:o,rtlEnabled:n,closable:l,color:{borderColor:h}={},round:r,onRender:i,$slots:g}=this;i==null||i();const y=se(g.avatar,c=>c&&f("div",{class:`${o}-tag__avatar`},c)),v=se(g.icon,c=>c&&f("div",{class:`${o}-tag__icon`},c));return f("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:n,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:r,[`${o}-tag--avatar`]:y,[`${o}-tag--icon`]:v,[`${o}-tag--closable`]:l}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},v||y,f("span",{class:`${o}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&l?f(lo,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:r,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?f("div",{class:`${o}-tag__border`,style:{borderColor:h}}):null)}});const It=be("n-avatar-group"),Tt=E("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[De(D("&","--n-merged-color: var(--n-color-modal);")),io(D("&","--n-merged-color: var(--n-color-popover);")),D("img",`
 width: 100%;
 height: 100%;
 `),x("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),E("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),x("text","line-height: 1.25")]),Lt=Object.assign(Object.assign({},A.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),ko=I({name:"Avatar",props:Lt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=ce(e),n=B(!1);let l=null;const h=B(null),r=B(null),i=()=>{const{value:d}=h;if(d&&(l===null||l!==d.innerHTML)){l=d.innerHTML;const{value:m}=r;if(m){const{offsetWidth:s,offsetHeight:a}=m,{offsetWidth:R,offsetHeight:T}=d,V=.9,K=Math.min(s/R*V,a/T*V,1);d.style.transform=`translateX(-50%) translateY(-50%) scale(${K})`}}},g=ie(It,null),y=F(()=>{const{size:d}=e;if(d)return d;const{size:m}=g||{};return m||"medium"}),v=A("Avatar","-avatar",Tt,Eo,e,t),c=ie(bo,null),b=F(()=>{if(g)return!0;const{round:d,circle:m}=e;return d!==void 0||m!==void 0?d||m:c?c.roundRef.value:!1}),u=F(()=>g?!0:e.bordered||!1),k=d=>{var m;if(!_.value)return;n.value=!0;const{onError:s,imgProps:a}=e;(m=a==null?void 0:a.onError)===null||m===void 0||m.call(a,d),s&&s(d)};J(()=>e.src,()=>n.value=!1);const P=F(()=>{const d=y.value,m=b.value,s=u.value,{color:a}=e,{self:{borderRadius:R,fontSize:T,color:V,border:K,colorModal:Q,colorPopover:ee},common:{cubicBezierEaseInOut:oe}}=v.value;let W;return typeof d=="number"?W=`${d}px`:W=v.value.self[M("height",d)],{"--n-font-size":T,"--n-border":s?K:"none","--n-border-radius":m?"50%":R,"--n-color":a||V,"--n-color-modal":a||Q,"--n-color-popover":a||ee,"--n-bezier":oe,"--n-merged-size":`var(--n-avatar-size-override, ${W})`}}),p=o?de("avatar",F(()=>{const d=y.value,m=b.value,s=u.value,{color:a}=e;let R="";return d&&(typeof d=="number"?R+=`a${d}`:R+=d[0]),m&&(R+="b"),s&&(R+="c"),a&&(R+=Ee(a)),R}),P,e):void 0,_=B(!e.lazy);no(()=>{if(Be)return;let d;const m=Fo(()=>{d==null||d(),d=void 0,e.lazy&&(d=Yo(r.value,e.intersectionObserverOptions,_))});ae(()=>{m(),d==null||d()})});const w=B(!e.lazy);return{textRef:h,selfRef:r,mergedRoundRef:b,mergedClsPrefix:t,fitTextTransform:i,cssVars:o?void 0:P,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender,hasLoadError:n,handleError:k,shouldStartLoading:_,loaded:w,mergedOnLoad:d=>{var m;const{onLoad:s,imgProps:a}=e;s==null||s(d),(m=a==null?void 0:a.onLoad)===null||m===void 0||m.call(a,d),w.value=!0}}},render(){var e,t;const{$slots:o,src:n,mergedClsPrefix:l,lazy:h,onRender:r,mergedOnLoad:i,shouldStartLoading:g,loaded:y,hasLoadError:v}=this;r==null||r();let c;const b=!y&&!v&&(this.renderPlaceholder?this.renderPlaceholder():(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e));return this.hasLoadError?c=this.renderFallback?this.renderFallback():Se(o.fallback,()=>[f("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):c=se(o.default,u=>{if(u)return f(rt,{onResize:this.fitTextTransform},{default:()=>f("span",{ref:"textRef",class:`${l}-avatar__text`},u)});if(n){const{imgProps:k}=this;return f("img",Object.assign(Object.assign({},k),{loading:Be&&!this.intersectionObserverOptions&&h?"lazy":"eager",src:Be||g||y?n:void 0,onLoad:i,"data-image-src":n,onError:this.handleError,style:[k==null?void 0:k.style,{objectFit:this.objectFit},b?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),f("span",{ref:"selfRef",class:[`${l}-avatar`,this.themeClass],style:this.cssVars},c,h&&b)}}),Te={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,onPositiveClick:Function,onNegativeClick:Function,onClose:Function},jt=mo(Te),Nt=D([E("dialog",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[x("icon",{color:"var(--n-icon-color)"}),S("bordered",{border:"var(--n-border)"}),S("icon-top",[x("close",{margin:"var(--n-close-margin)"}),x("icon",{margin:"var(--n-icon-margin)"}),x("content",{textAlign:"center"}),x("title",{justifyContent:"center"}),x("action",{justifyContent:"center"})]),S("icon-left",[x("icon",{margin:"var(--n-icon-margin)"}),S("closable",[x("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),x("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),x("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[S("last","margin-bottom: 0;")]),x("action",`
 display: flex;
 justify-content: flex-end;
 `,[D("> *:not(:last-child)",{marginRight:"var(--n-action-space)"})]),x("icon",{fontSize:"var(--n-icon-size)",transition:"color .3s var(--n-bezier)"}),x("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),E("dialog-icon-container",{display:"flex",justifyContent:"center"})]),De(E("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),E("dialog",[So(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),At={default:()=>f(Ae,null),info:()=>f(Ae,null),success:()=>f(Do,null),warning:()=>f(Io,null),error:()=>f(To,null)},Ht=I({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},A.props),Te),setup(e){const{mergedComponentPropsRef:t,mergedClsPrefixRef:o,inlineThemeDisabled:n}=ce(e),l=F(()=>{var c,b;const{iconPlacement:u}=e;return u||((b=(c=t==null?void 0:t.value)===null||c===void 0?void 0:c.Dialog)===null||b===void 0?void 0:b.iconPlacement)||"left"});function h(c){const{onPositiveClick:b}=e;b&&b(c)}function r(c){const{onNegativeClick:b}=e;b&&b(c)}function i(){const{onClose:c}=e;c&&c()}const g=A("Dialog","-dialog",Nt,Oo,e,o),y=F(()=>{const{type:c}=e,b=l.value,{common:{cubicBezierEaseInOut:u},self:{fontSize:k,lineHeight:P,border:p,titleTextColor:_,textColor:w,color:d,closeBorderRadius:m,closeColorHover:s,closeColorPressed:a,closeIconColor:R,closeIconColorHover:T,closeIconColorPressed:V,closeIconSize:K,borderRadius:Q,titleFontWeight:ee,titleFontSize:oe,padding:W,iconSize:ke,actionSpace:ye,contentMargin:Ce,closeSize:_e,[b==="top"?"iconMarginIconTop":"iconMargin"]:xe,[b==="top"?"closeMarginIconTop":"closeMargin"]:we,[M("iconColor",c)]:ze}}=g.value;return{"--n-font-size":k,"--n-icon-color":ze,"--n-bezier":u,"--n-close-margin":we,"--n-icon-margin":xe,"--n-icon-size":ke,"--n-close-size":_e,"--n-close-icon-size":K,"--n-close-border-radius":m,"--n-close-color-hover":s,"--n-close-color-pressed":a,"--n-close-icon-color":R,"--n-close-icon-color-hover":T,"--n-close-icon-color-pressed":V,"--n-color":d,"--n-text-color":w,"--n-border-radius":Q,"--n-padding":W,"--n-line-height":P,"--n-border":p,"--n-content-margin":Ce,"--n-title-font-size":oe,"--n-title-font-weight":ee,"--n-title-text-color":_,"--n-action-space":ye}}),v=n?de("dialog",F(()=>`${e.type[0]}${l.value[0]}`),y,e):void 0;return{mergedClsPrefix:o,mergedIconPlacement:l,mergedTheme:g,handlePositiveClick:h,handleNegativeClick:r,handleCloseClick:i,cssVars:n?void 0:y,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var e;const{bordered:t,mergedIconPlacement:o,cssVars:n,closable:l,showIcon:h,title:r,content:i,action:g,negativeText:y,positiveText:v,positiveButtonProps:c,negativeButtonProps:b,handlePositiveClick:u,handleNegativeClick:k,mergedTheme:P,loading:p,type:_,mergedClsPrefix:w}=this;(e=this.onRender)===null||e===void 0||e.call(this);const d=h?f(Mo,{clsPrefix:w,class:`${w}-dialog__icon`},{default:()=>se(this.$slots.icon,s=>s||(this.icon?Y(this.icon):At[this.type]()))}):null,m=se(this.$slots.action,s=>s||v||y||g?f("div",{class:`${w}-dialog__action`},s||(g?[Y(g)]:[this.negativeText&&f(U,Object.assign({theme:P.peers.Button,themeOverrides:P.peerOverrides.Button,ghost:!0,size:"small",onClick:k},b),{default:()=>Y(this.negativeText)}),this.positiveText&&f(U,Object.assign({theme:P.peers.Button,themeOverrides:P.peerOverrides.Button,size:"small",type:_==="default"?"primary":_,disabled:p,loading:p,onClick:u},c),{default:()=>Y(this.positiveText)})])):null);return f("div",{class:[`${w}-dialog`,this.themeClass,this.closable&&`${w}-dialog--closable`,`${w}-dialog--icon-${o}`,t&&`${w}-dialog--bordered`],style:n,role:"dialog"},l?f(lo,{clsPrefix:w,class:`${w}-dialog__close`,onClick:this.handleCloseClick}):null,h&&o==="top"?f("div",{class:`${w}-dialog-icon-container`},d):null,f("div",{class:`${w}-dialog__title`},h&&o==="left"?d:null,Se(this.$slots.header,()=>[Y(r)])),f("div",{class:[`${w}-dialog__content`,m?"":`${w}-dialog__content--last`]},Se(this.$slots.default,()=>[Y(i)])),m)}}),Vt=be("n-dialog-provider"),Le=Object.assign(Object.assign({},_t),Te),Ut=mo(Le),Kt=I({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},Le),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const t=B(null),o=B(null),n=B(e.show),l=B(null),h=B(null);J(le(e,"show"),p=>{p&&(n.value=!0)}),Et(F(()=>e.blockScroll&&n.value));const r=ie(go);function i(){if(r.transformOriginRef.value==="center")return"";const{value:p}=l,{value:_}=h;if(p===null||_===null)return"";if(o.value){const w=o.value.containerScrollTop;return`${p}px ${_+w}px`}return""}function g(p){if(r.transformOriginRef.value==="center")return;const _=r.getMousePosition();if(!_||!o.value)return;const w=o.value.containerScrollTop,{offsetLeft:d,offsetTop:m}=p;if(_){const s=_.y,a=_.x;l.value=-(d-a),h.value=-(m-s-w)}p.style.transformOrigin=i()}function y(p){He(()=>{g(p)})}function v(p){p.style.transformOrigin=i(),e.onBeforeLeave()}function c(){n.value=!1,l.value=null,h.value=null,e.onAfterLeave()}function b(){const{onClose:p}=e;p&&p()}function u(){e.onNegativeClick()}function k(){e.onPositiveClick()}const P=B(null);return J(P,p=>{p&&He(()=>{const _=p.el;_&&t.value!==_&&(t.value=_)})}),Z(ut,t),Z(lt,null),Z(it,null),{mergedTheme:r.mergedThemeRef,appear:r.appearRef,isMounted:r.isMountedRef,mergedClsPrefix:r.mergedClsPrefixRef,bodyRef:t,scrollbarRef:o,displayed:n,childNodeRef:P,handlePositiveClick:k,handleNegativeClick:u,handleCloseClick:b,handleAfterLeave:c,handleBeforeLeave:v,handleEnter:y}},render(){const{$slots:e,$attrs:t,handleEnter:o,handleAfterLeave:n,handleBeforeLeave:l,preset:h,mergedClsPrefix:r}=this;let i=null;if(!h){if(i=st(e),!i){Lo("modal","default slot is empty");return}i=jo(i),i.props=No({class:`${r}-modal`},t,i.props||{})}return this.displayDirective==="show"||this.displayed||this.show?$e(f("div",{role:"none",class:`${r}-modal-body-wrapper`},f(at,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${r}-modal-scroll-content`},{default:()=>{var g;return[(g=this.renderMask)===null||g===void 0?void 0:g.call(this),f(ct,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var y;return f(so,{name:"fade-in-scale-up-transition",appear:(y=this.appear)!==null&&y!==void 0?y:this.isMounted,onEnter:o,onAfterEnter:this.onAfterEnter,onAfterLeave:n,onBeforeLeave:l},{default:()=>{const v=[[Ve,this.show]],{onClickoutside:c}=this;return c&&v.push([dt,this.onClickoutside,void 0,{capture:!0}]),$e(this.preset==="confirm"||this.preset==="dialog"?f(Ht,Object.assign({},this.$attrs,{class:[`${r}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},Oe(this.$props,jt),{"aria-modal":"true"}),e):this.preset==="card"?f(po,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${r}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},Oe(this.$props,xt),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=i,v)}})}})]}})),[[Ve,this.displayDirective==="if"||this.displayed||this.show]]):null}}),Wt=D([E("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),E("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[ft({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),E("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[E("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),E("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[zt({duration:".25s",enterScale:".5"})])]),Xt=Object.assign(Object.assign(Object.assign(Object.assign({},A.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),Le),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),Yt=I({name:"Modal",inheritAttrs:!1,props:Xt,setup(e){const t=B(null),{mergedClsPrefixRef:o,namespaceRef:n,inlineThemeDisabled:l}=ce(e),h=A("Modal","-modal",Wt,Ho,e,o),r=Ft(64),i=Pt(),g=Ao(),y=e.internalDialog?ie(Vt,null):null,v=St();function c(s){const{onUpdateShow:a,"onUpdate:show":R,onHide:T}=e;a&&ne(a,s),R&&ne(R,s),T&&!s&&T(s)}function b(){const{onClose:s}=e;s?Promise.resolve(s()).then(a=>{a!==!1&&c(!1)}):c(!1)}function u(){const{onPositiveClick:s}=e;s?Promise.resolve(s()).then(a=>{a!==!1&&c(!1)}):c(!1)}function k(){const{onNegativeClick:s}=e;s?Promise.resolve(s()).then(a=>{a!==!1&&c(!1)}):c(!1)}function P(){const{onBeforeLeave:s,onBeforeHide:a}=e;s&&ne(s),a&&a()}function p(){const{onAfterLeave:s,onAfterHide:a}=e;s&&ne(s),a&&a()}function _(s){var a;const{onMaskClick:R}=e;R&&R(s),e.maskClosable&&!((a=t.value)===null||a===void 0)&&a.contains(ht(s))&&c(!1)}function w(s){var a;(a=e.onEsc)===null||a===void 0||a.call(e),e.show&&e.closeOnEsc&&$t(s)&&!v.value&&c(!1)}Z(go,{getMousePosition:()=>{if(y){const{clickedRef:s,clickPositionRef:a}=y;if(s.value&&a.value)return a.value}return r.value?i.value:null},mergedClsPrefixRef:o,mergedThemeRef:h,isMountedRef:g,appearRef:le(e,"internalAppear"),transformOriginRef:le(e,"transformOrigin")});const d=F(()=>{const{common:{cubicBezierEaseOut:s},self:{boxShadow:a,color:R,textColor:T}}=h.value;return{"--n-bezier-ease-out":s,"--n-box-shadow":a,"--n-color":R,"--n-text-color":T}}),m=l?de("theme-class",void 0,d,e):void 0;return{mergedClsPrefix:o,namespace:n,isMounted:g,containerRef:t,presetProps:F(()=>Oe(e,Ut)),handleEsc:w,handleAfterLeave:p,handleClickoutside:_,handleBeforeLeave:P,doUpdateShow:c,handleNegativeClick:k,handlePositiveClick:u,handleCloseClick:b,cssVars:l?void 0:d,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){const{mergedClsPrefix:e}=this;return f(vt,{to:this.to,show:this.show},{default:()=>{var t;(t=this.onRender)===null||t===void 0||t.call(this);const{unstableShowMask:o}=this;return $e(f("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},f(Kt,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:o?void 0:this.handleClickoutside,renderMask:o?()=>{var n;return f(so,{name:"fade-in-transition",key:"mask",appear:(n=this.internalAppear)!==null&&n!==void 0?n:this.isMounted},{default:()=>this.show?f("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[gt,{zIndex:this.zIndex,enabled:this.show}]])}})}}),qt=D([E("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[S("show-divider",[E("list-item",[D("&:not(:last-child)",[x("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),S("clickable",[E("list-item",`
 cursor: pointer;
 `)]),S("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),S("hoverable",[E("list-item",`
 border-radius: var(--n-border-radius);
 `,[D("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[x("divider",`
 background-color: transparent;
 `)])])]),S("bordered, hoverable",[E("list-item",`
 padding: 12px 20px;
 `),x("header, footer",`
 padding: 12px 20px;
 `)]),x("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[D("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),E("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("prefix",`
 margin-right: 20px;
 flex: 0;
 `),x("suffix",`
 margin-left: 20px;
 flex: 0;
 `),x("main",`
 flex: 1;
 `),x("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),De(E("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),io(E("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),Gt=Object.assign(Object.assign({},A.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),yo=be("n-list"),Zt=I({name:"List",props:Gt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o,mergedRtlRef:n}=ce(e),l=ro("List",n,t),h=A("List","-list",qt,Vo,e,t);Z(yo,{showDividerRef:le(e,"showDivider"),mergedClsPrefixRef:t});const r=F(()=>{const{common:{cubicBezierEaseInOut:g},self:{fontSize:y,textColor:v,color:c,colorModal:b,colorPopover:u,borderColor:k,borderColorModal:P,borderColorPopover:p,borderRadius:_,colorHover:w,colorHoverModal:d,colorHoverPopover:m}}=h.value;return{"--n-font-size":y,"--n-bezier":g,"--n-text-color":v,"--n-color":c,"--n-border-radius":_,"--n-border-color":k,"--n-border-color-modal":P,"--n-border-color-popover":p,"--n-color-modal":b,"--n-color-popover":u,"--n-color-hover":w,"--n-color-hover-modal":d,"--n-color-hover-popover":m}}),i=o?de("list",void 0,r,e):void 0;return{mergedClsPrefix:t,rtlEnabled:l,cssVars:o?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:t,mergedClsPrefix:o,onRender:n}=this;return n==null||n(),f("ul",{class:[`${o}-list`,this.rtlEnabled&&`${o}-list--rtl`,this.bordered&&`${o}-list--bordered`,this.showDivider&&`${o}-list--show-divider`,this.hoverable&&`${o}-list--hoverable`,this.clickable&&`${o}-list--clickable`,this.themeClass],style:this.cssVars},t.header?f("div",{class:`${o}-list__header`},t.header()):null,(e=t.default)===null||e===void 0?void 0:e.call(t),t.footer?f("div",{class:`${o}-list__footer`},t.footer()):null)}}),Jt=I({name:"ListItem",setup(){const e=ie(yo,null);return e||Uo("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:t}=this;return f("li",{class:`${t}-list-item`},e.prefix?f("div",{class:`${t}-list-item__prefix`},e.prefix()):null,e.default?f("div",{class:`${t}-list-item__main`},e):null,e.suffix?f("div",{class:`${t}-list-item__suffix`},e.suffix()):null,this.showDivider&&f("div",{class:`${t}-list-item__divider`}))}}),Qt={class:"p-4 box-border"},en={class:"flex items-center"},on={class:"flex flex-col ml-4 flex-1 shrink-1 w-full"},tn={class:"text-xl"},nn=I({__name:"Contacts",props:{pubkey:null},setup(e){const{pubkey:t}=e;qo();const o=F(()=>t===N.value.publicKey),n=o.value?null:Go(t),l=F(()=>{var r;return(r=(o.value?Pe.value:n.value).contacts)!=null?r:{}}),h=F(()=>Object.keys(l.value));return(r,i)=>(O(),X("div",Qt,[z(C(Zt),null,{default:$(()=>[(O(!0),X(ao,null,Ko(C(h),g=>(O(),H(C(Jt),{class:"cursor-pointer"},{default:$(()=>{var y,v;return[L("div",en,[z(C(ko),{class:"ml-4",size:"small",src:(y=C(l)[g].picture)!=null?y:C(uo),round:"",onClick:()=>r.$router.push(`/profile/${g}`)},null,8,["src","onClick"]),L("div",on,[L("div",tn,me((v=C(l)[g].name)!=null?v:g.slice(0,10)),1),C(l)[g].about?(O(),H(tt,{key:0,style:{fontSize:"10px"}},{default:$(()=>[j(me(C(l)[g].about),1)]),_:2},1024)):G("",!0)])])]}),_:2},1024))),256))]),_:1})]))}}),rn=I({__name:"ProfileMoreInfo",props:{pubkey:null},setup(e){return(t,o)=>{const n=bt,l=mt;return O(),H(l,{type:"line",animated:""},{default:$(()=>[z(n,{"display-directive":"show",name:"\u4E3B\u9875",tab:"\u4E3B\u9875"},{default:$(()=>[z(Zo,{pubkey:[e.pubkey]},null,8,["pubkey"])]),_:1}),z(n,{"display-directive":"show",name:"\u5173\u6CE8",tab:"\u5173\u6CE8"},{default:$(()=>[z(nn,{pubkey:e.pubkey},null,8,["pubkey"])]),_:1}),z(n,{"display-directive":"show",name:"\u5173\u6CE8\u8005",tab:"\u5173\u6CE8\u8005"},{default:$(()=>[j(" \u4E03\u91CC\u9999 ")]),_:1}),z(n,{"display-directive":"show",name:"\u4E2D\u7EE7",tab:"\u4E2D\u7EE7"},{default:$(()=>[j(" \u4E03\u91CC\u9999 ")]),_:1})]),_:1})}}}),ln=I({__name:"UserDataEditing",emits:["close"],setup(e,{emit:t}){const o=kt(),n=B({}),l=B(!1);J(N,async()=>{l.value=!0;const r=await fo(N.value.publicKey);l.value=!1,o.success("\u4E2A\u4EBA\u4FE1\u606F\u66F4\u65B0\u6210\u529F"),n.value=r},{immediate:!0});async function h(){l.value=!0,await et(n.value).catch(()=>{o.error("\u63D0\u4EA4\u5931\u8D25"),l.value=!1}),o.success("\u63D0\u4EA4\u6210\u529F\uFF0C\u5DF2\u53D1\u9001\u5230\u81F3\u5C11\u4E00\u4E2A\u670D\u52A1\u5668"),l.value=!1}return(r,i)=>{const g=pt,y=po;return O(),H(y,{style:{width:"600px"},title:"\u7F16\u8F91\u7528\u6237\u4FE1\u606F",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{default:$(()=>[z(C(Ue),{vertical:""},{default:$(()=>[z(C(fe),{type:"text",placeholder:"\u7528\u6237\u540D",value:n.value.name,"onUpdate:value":i[0]||(i[0]=v=>n.value.name=v)},null,8,["value"]),z(C(fe),{type:"textarea",placeholder:"\u4ECB\u7ECD",value:n.value.about,"onUpdate:value":i[1]||(i[1]=v=>n.value.about=v)},null,8,["value"]),z(C(fe),{type:"text",placeholder:"profileUrl",value:n.value.picture,"onUpdate:value":i[2]||(i[2]=v=>n.value.picture=v)},null,8,["value"]),z(C(fe),{type:"text",placeholder:"\u7528\u6237\u8BA4\u8BC1",value:n.value.nip05,"onUpdate:value":i[3]||(i[3]=v=>n.value.nip05=v)},null,8,["value"]),z(C(Ue),{center:""},{default:$(()=>[z(C(U),{type:"tertiary",onClick:i[4]||(i[4]=()=>t("close"))},{default:$(()=>[j(" \u53D6\u6D88 ")]),_:1}),z(g,{trigger:"hover"},{trigger:$(()=>[z(C(U),{type:"primary",onClick:h,loading:l.value,disabled:l.value},{default:$(()=>[j(" \u63D0\u4EA4 ")]),_:1},8,["loading","disabled"])]),default:$(()=>[j(" \u5982\u679C\u52A0\u8F7D\u4E0D\u5230\u5408\u9002\u7684\u4FE1\u606F\uFF0C\u90A3\u53EF\u80FD\u662Frelays\u8BBE\u7F6E\u4E0D\u5BF9\u8BF7\u5C1D\u8BD5\u914D\u7F6E\u4E00\u4E0B ")]),_:1}),l.value?(O(),H(g,{key:0,trigger:"hover"},{trigger:$(()=>[z(C(U),{onClick:i[5]||(i[5]=()=>l.value=!1)},{default:$(()=>[j("\u505C\u6B62\u52A0\u8F7D")]),_:1})]),default:$(()=>[j(" \u5982\u679C\u60A8\u662F\u65B0\u7528\u6237\u7684\u8BDD\uFF0C\u6216\u8005\u60A8\u653E\u5F03\u4E4B\u524D\u7684\u4FE1\u606F\u5C31\u53EF\u4EE5\u70B9\u6B64\u5904 ")]),_:1})):G("",!0)]),_:1})]),_:1})]),_:1})}}}),sn=L("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},[L("g",{fill:"none"},[L("path",{d:"M6.75 10a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0zm5 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0zM15 11.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5z",fill:"currentColor"})])],-1),an=I({__name:"MoreIcon",setup(e){return(t,o)=>(O(),H(C(yt),null,{default:$(()=>[sn]),_:1}))}}),cn={},dn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},un=L("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"44",d:"M358.62 129.28L86.49 402.08L70 442l39.92-16.49l272.8-272.13l-24.1-24.1z"},null,-1),fn=L("path",{d:"M413.07 74.84l-11.79 11.78l24.1 24.1l11.79-11.79a16.51 16.51 0 0 0 0-23.34l-.75-.75a16.51 16.51 0 0 0-23.35 0z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"44"},null,-1),vn=[un,fn];function hn(e,t){return O(),X("svg",dn,vn)}const gn=co(cn,[["render",hn]]),pn={},mn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},bn=L("path",{d:"M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336z",fill:"currentColor"},null,-1),kn=[bn];function yn(e,t){return O(),X("svg",mn,kn)}const Cn=co(pn,[["render",yn]]),_n=I({__name:"UserInformationButton",props:{pubkey:null},setup(e){const{pubkey:t}=e,o=Ct(),n=F(()=>t===N.value.publicKey),l=B(!1),h=B([n.value&&{label:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",key:"editProfile",icon:Ke(gn),props:{onclick(){l.value=!l.value}}},{label:"\u590D\u5236",key:"clipboard",icon:Ke(Cn),children:[{label:"\u590D\u5236npub",key:"copy-npub",props:{onclick(){const r=ge.npubEncode(N.value.publicKey);o(r)}}},{label:"\u590D\u5236nprofile",key:"copy-npro",props:{onclick(){const r=ge.nprofileEncode({pubkey:N.value.publicKey,relays:[...ot.getWriteList()]});o(r)}}},n.value&&{label:"\u590D\u5236\u79C1\u94A5",key:"copy-nsec",props:{onclick(){const r=ge.nsecEncode(N.value.privateKey);o(r)}}},{label:"\u590D\u5236publicKey hex",key:"copy-hex",props:{onclick(){o(N.value.publicKey)}}}].filter(r=>!!r)}].filter(r=>!!r));return(r,i)=>{const g=an,y=U,v=wt,c=ln,b=Yt;return O(),X(ao,null,[z(v,{placement:"bottom-start",trigger:"click",options:h.value},{default:$(()=>[z(y,{tertiary:"",circle:""},{default:$(()=>[z(g)]),_:1})]),_:1},8,["options"]),z(b,{show:l.value,"onUpdate:show":i[1]||(i[1]=u=>l.value=u)},{default:$(()=>[z(c,{onClose:i[0]||(i[0]=()=>l.value=!1)})]),_:1},8,["show"])],64)}}}),xn={class:""},wn={class:"flex items-center"},zn={key:2,class:"ml-4"},Nn=I({__name:"ProfileView",setup(e){const t=F(()=>{var r;return(r=Wo().params.hash)!=null?r:N.value.publicKey}),o=B({}),n=F(()=>{try{const r=ge.decode(t.value);switch(r.type){case"nprofile":return r.data;case"npub":return{pubkey:r.data};case"nsec":return{pubkey:Xo(r.data)};default:break}}catch{if(t.value.length===64)return{pubkey:t.value}}}),l=F(()=>{var r;return((r=n.value)==null?void 0:r.pubkey)===N.value.publicKey}),h=F(()=>{var r,i;return!((r=n.value)!=null&&r.pubkey)||!((i=Pe.value)!=null&&i.contacts)?!1:!!Pe.value.contacts[n.value.pubkey]});return J(n,async()=>{!n.value||(o.value=await fo(n.value.pubkey,n.value.relays?{relayUrls:new Set(n.value.relays)}:void 0))},{immediate:!0}),(r,i)=>{var y,v,c,b,u;const g=ko;return O(),X("div",null,[L("div",xn,[z(g,{round:"",size:100,src:(y=o.value.picture)!=null?y:C(uo)},null,8,["src"])]),L("h1",wn,[j(me((c=o.value.name)!=null?c:(v=C(n))==null?void 0:v.pubkey.slice(0,10))+" ",1),!C(h)&&!C(l)?(O(),H(C(U),{key:0,class:"ml-4",strong:"",round:"",type:"primary",onClick:i[0]||(i[0]=()=>{var k;return C(Jo)((k=C(n))==null?void 0:k.pubkey)})},{default:$(()=>[j(" Flower ")]),_:1})):G("",!0),C(h)&&!C(l)?(O(),H(C(U),{key:1,class:"ml-4",strong:"",round:"",type:"tertiary",onClick:i[1]||(i[1]=()=>{var k;return C(Qo)((k=C(n))==null?void 0:k.pubkey)})},{default:$(()=>[j(" Unflower ")]),_:1})):G("",!0),(b=C(n))!=null&&b.pubkey?(O(),X("div",zn,[z(_n,{pubkey:C(n).pubkey},null,8,["pubkey"])])):G("",!0)]),L("div",null,me(o.value.about),1),C(n)?(O(),H(rn,{key:0,pubkey:(u=C(n))==null?void 0:u.pubkey},null,8,["pubkey"])):G("",!0)])}}});export{Nn as default};
