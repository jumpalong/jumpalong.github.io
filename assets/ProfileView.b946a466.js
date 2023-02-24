import{a5 as Ce,s as S,be as Le,o as de,K as io,w as te,c as ue,b as P,e as F,j as I,f as w,P as he,l as L,m as W,y as ke,d as D,u as fe,z as re,A as se,n as so,p as E,q as O,r as ve,h as g,N as ao,a as Z,C as De,D as co,i as ae,aT as Mo,aY as uo,ag as Oo,a$ as Q,v as To,I as Ve,S as Lo,W as Do,E as jo,an as Ue,L as Ho,aW as No,t as Ao,aj as Re,aV as Ke,T as fo,ao as Wo,O as Vo,V as M,a3 as J,Z as $,Y as R,af as vo,ae as Uo,X as U,a4 as j,a6 as x,ad as ye,_ as H,a8 as oe,a2 as ho,U as be,ac as Ko,a0 as Yo}from"./index.e069f064.js";import{i as Be,o as Xo,p as qo,g as Go,l as Ee,b as po,_ as Zo,f as Jo,u as Qo}from"./PostList.vue_vue_type_script_setup_true_lang.5f374a06.js";import{u as A,g as go,k as er,r as or}from"./user.90341f0d.js";import{_ as rr}from"./Ellipsis.vue_vue_type_script_setup_true_lang.703f832c.js";import{T as mo,o as Fe,E as bo,q as Ie,M as tr,U as Me,a as ce,c as le,r as Oe,V as nr,z as lr,k as Co,N as K,x as ir,W as yo,J as sr,F as ar,Y as cr,p as dr,Z as ur,$ as fr,h as Te,L as vr,O as hr,P as pr,a0 as gr,Q as mr,l as Ye,_ as br}from"./Space.2195441c.js";import{a as Cr,_ as yr}from"./Tabs.1b7861ae.js";import{u as kr,N as xr}from"./use-message.c63a8014.js";import{N as pe}from"./Input.e0ed6f0a.js";import{c as _r,a as wr,_ as ko,b as zr}from"./Card.dace5702.js";import{u as Pr,r as Xe}from"./naiveUi.dcbfc488.js";import{_ as $r}from"./Dropdown.74c73407.js";import{f as Sr}from"./fade-in-scale-up.cssr.618796f7.js";import"./utils.460e4338.js";import"./use-locale.2946792e.js";const Br=new WeakSet;function Rr(e){return!Br.has(e)}const ie=S(null);function qe(e){if(e.clientX>0||e.clientY>0)ie.value={x:e.clientX,y:e.clientY};else{const{target:r}=e;if(r instanceof Element){const{left:o,top:t,width:l,height:s}=r.getBoundingClientRect();o>0||t>0?ie.value={x:o+l/2,y:t+s/2}:ie.value={x:0,y:0}}else ie.value=null}}let ge=0,Ge=!0;function Er(){if(!mo)return Ce(S(null));ge===0&&Fe("click",document,qe,!0);const e=()=>{ge+=1};return Ge&&(Ge=bo())?(Le(e),de(()=>{ge-=1,ge===0&&Ie("click",document,qe,!0)})):e(),Ce(ie)}const Fr=S(void 0);let me=0;function Ze(){Fr.value=Date.now()}let Je=!0;function Ir(e){if(!mo)return Ce(S(!1));const r=S(!1);let o=null;function t(){o!==null&&window.clearTimeout(o)}function l(){t(),r.value=!0,o=window.setTimeout(()=>{r.value=!1},e)}me===0&&Fe("click",window,Ze,!0);const s=()=>{me+=1,Fe("click",window,l,!0)};return Je&&(Je=bo())?(Le(s),de(()=>{me-=1,me===0&&Ie("click",window,Ze,!0),Ie("click",window,l,!0),t()})):s(),Ce(r)}let ee=0,Qe="",eo="",oo="",ro="";const to=S("0px");function Mr(e){if(typeof document>"u")return;const r=document.documentElement;let o,t=!1;const l=()=>{r.style.marginRight=Qe,r.style.overflow=eo,r.style.overflowX=oo,r.style.overflowY=ro,to.value="0px"};io(()=>{o=te(e,s=>{if(s){if(!ee){const n=window.innerWidth-r.offsetWidth;n>0&&(Qe=r.style.marginRight,r.style.marginRight=`${n}px`,to.value=`${n}px`),eo=r.style.overflow,oo=r.style.overflowX,ro=r.style.overflowY,r.style.overflow="hidden",r.style.overflowX="hidden",r.style.overflowY="hidden"}t=!0,ee++}else ee--,ee||l(),t=!1},{immediate:!0})}),de(()=>{o==null||o(),t&&(ee--,ee||l(),t=!1)})}const je=S(!1),no=()=>{je.value=!0},lo=()=>{je.value=!1};let ne=0;const Or=()=>(tr&&(Le(()=>{ne||(window.addEventListener("compositionstart",no),window.addEventListener("compositionend",lo)),ne++}),de(()=>{ne<=1?(window.removeEventListener("compositionstart",no),window.removeEventListener("compositionend",lo),ne=0):ne--})),je),Tr={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},Lr=e=>{const{textColor2:r,primaryColorHover:o,primaryColorPressed:t,primaryColor:l,infoColor:s,successColor:n,warningColor:i,errorColor:a,baseColor:C,borderColor:v,opacityDisabled:c,tagColor:m,closeIconColor:h,closeIconColorHover:b,closeIconColorPressed:z,borderRadiusSmall:p,fontSizeMini:k,fontSizeTiny:_,fontSizeSmall:f,fontSizeMedium:y,heightMini:d,heightTiny:u,heightSmall:B,heightMedium:T,closeColorHover:N,closeColorPressed:V,buttonColor2Hover:Y,buttonColor2Pressed:X,fontWeightStrong:q}=e;return Object.assign(Object.assign({},Tr),{closeBorderRadius:p,heightTiny:d,heightSmall:u,heightMedium:B,heightLarge:T,borderRadius:p,opacityDisabled:c,fontSizeTiny:k,fontSizeSmall:_,fontSizeMedium:f,fontSizeLarge:y,fontWeightStrong:q,textColorCheckable:r,textColorHoverCheckable:r,textColorPressedCheckable:r,textColorChecked:C,colorCheckable:"#0000",colorHoverCheckable:Y,colorPressedCheckable:X,colorChecked:l,colorCheckedHover:o,colorCheckedPressed:t,border:`1px solid ${v}`,textColor:r,color:m,colorBordered:"rgb(250, 250, 252)",closeIconColor:h,closeIconColorHover:b,closeIconColorPressed:z,closeColorHover:N,closeColorPressed:V,borderPrimary:`1px solid ${P(l,{alpha:.3})}`,textColorPrimary:l,colorPrimary:P(l,{alpha:.12}),colorBorderedPrimary:P(l,{alpha:.1}),closeIconColorPrimary:l,closeIconColorHoverPrimary:l,closeIconColorPressedPrimary:l,closeColorHoverPrimary:P(l,{alpha:.12}),closeColorPressedPrimary:P(l,{alpha:.18}),borderInfo:`1px solid ${P(s,{alpha:.3})}`,textColorInfo:s,colorInfo:P(s,{alpha:.12}),colorBorderedInfo:P(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:P(s,{alpha:.12}),closeColorPressedInfo:P(s,{alpha:.18}),borderSuccess:`1px solid ${P(n,{alpha:.3})}`,textColorSuccess:n,colorSuccess:P(n,{alpha:.12}),colorBorderedSuccess:P(n,{alpha:.1}),closeIconColorSuccess:n,closeIconColorHoverSuccess:n,closeIconColorPressedSuccess:n,closeColorHoverSuccess:P(n,{alpha:.12}),closeColorPressedSuccess:P(n,{alpha:.18}),borderWarning:`1px solid ${P(i,{alpha:.35})}`,textColorWarning:i,colorWarning:P(i,{alpha:.15}),colorBorderedWarning:P(i,{alpha:.12}),closeIconColorWarning:i,closeIconColorHoverWarning:i,closeIconColorPressedWarning:i,closeColorHoverWarning:P(i,{alpha:.12}),closeColorPressedWarning:P(i,{alpha:.18}),borderError:`1px solid ${P(a,{alpha:.23})}`,textColorError:a,colorError:P(a,{alpha:.1}),colorBorderedError:P(a,{alpha:.08}),closeIconColorError:a,closeIconColorHoverError:a,closeIconColorPressedError:a,closeColorHoverError:P(a,{alpha:.12}),closeColorPressedError:P(a,{alpha:.18})})},Dr={name:"Tag",common:ue,self:Lr},jr=Dr,Hr={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Nr=F("tag",`
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
`,[I("strong",`
 font-weight: var(--n-font-weight-strong);
 `),w("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),w("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),w("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),w("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),I("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[w("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),w("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),I("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),I("icon, avatar",[I("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),I("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),I("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[he("disabled",[L("&:hover","background-color: var(--n-color-hover-checkable);",[he("checked","color: var(--n-text-color-hover-checkable);")]),L("&:active","background-color: var(--n-color-pressed-checkable);",[he("checked","color: var(--n-text-color-pressed-checkable);")])]),I("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[he("disabled",[L("&:hover","background-color: var(--n-color-checked-hover);"),L("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Ar=Object.assign(Object.assign(Object.assign({},W.props),Hr),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),xo=ke("n-tag");D({name:"Tag",props:Ar,setup(e){const r=S(null),{mergedBorderedRef:o,mergedClsPrefixRef:t,inlineThemeDisabled:l,mergedRtlRef:s}=fe(e),n=W("Tag","-tag",Nr,jr,e,t);re(xo,{roundRef:se(e,"round")});function i(h){if(!e.disabled&&e.checkable){const{checked:b,onCheckedChange:z,onUpdateChecked:p,"onUpdate:checked":k}=e;p&&p(!b),k&&k(!b),z&&z(!b)}}function a(h){if(e.triggerClickOnClose||h.stopPropagation(),!e.disabled){const{onClose:b}=e;b&&le(b,h)}}const C={setTextContent(h){const{value:b}=r;b&&(b.textContent=h)}},v=so("Tag",s,t),c=E(()=>{const{type:h,size:b,color:{color:z,textColor:p}={}}=e,{common:{cubicBezierEaseInOut:k},self:{padding:_,closeMargin:f,closeMarginRtl:y,borderRadius:d,opacityDisabled:u,textColorCheckable:B,textColorHoverCheckable:T,textColorPressedCheckable:N,textColorChecked:V,colorCheckable:Y,colorHoverCheckable:X,colorPressedCheckable:q,colorChecked:G,colorCheckedHover:xe,colorCheckedPressed:_e,closeBorderRadius:we,fontWeightStrong:ze,[O("colorBordered",h)]:Pe,[O("closeSize",b)]:$e,[O("closeIconSize",b)]:Se,[O("fontSize",b)]:Po,[O("height",b)]:Ae,[O("color",h)]:$o,[O("textColor",h)]:So,[O("border",h)]:Bo,[O("closeIconColor",h)]:We,[O("closeIconColorHover",h)]:Ro,[O("closeIconColorPressed",h)]:Eo,[O("closeColorHover",h)]:Fo,[O("closeColorPressed",h)]:Io}}=n.value;return{"--n-font-weight-strong":ze,"--n-avatar-size-override":`calc(${Ae} - 8px)`,"--n-bezier":k,"--n-border-radius":d,"--n-border":Bo,"--n-close-icon-size":Se,"--n-close-color-pressed":Io,"--n-close-color-hover":Fo,"--n-close-border-radius":we,"--n-close-icon-color":We,"--n-close-icon-color-hover":Ro,"--n-close-icon-color-pressed":Eo,"--n-close-icon-color-disabled":We,"--n-close-margin":f,"--n-close-margin-rtl":y,"--n-close-size":$e,"--n-color":z||(o.value?Pe:$o),"--n-color-checkable":Y,"--n-color-checked":G,"--n-color-checked-hover":xe,"--n-color-checked-pressed":_e,"--n-color-hover-checkable":X,"--n-color-pressed-checkable":q,"--n-font-size":Po,"--n-height":Ae,"--n-opacity-disabled":u,"--n-padding":_,"--n-text-color":p||So,"--n-text-color-checkable":B,"--n-text-color-checked":V,"--n-text-color-hover-checkable":T,"--n-text-color-pressed-checkable":N}}),m=l?ve("tag",E(()=>{let h="";const{type:b,size:z,color:{color:p,textColor:k}={}}=e;return h+=b[0],h+=z[0],p&&(h+=`a${Me(p)}`),k&&(h+=`b${Me(k)}`),o.value&&(h+="c"),h}),c,e):void 0;return Object.assign(Object.assign({},C),{rtlEnabled:v,mergedClsPrefix:t,contentRef:r,mergedBordered:o,handleClick:i,handleCloseClick:a,cssVars:l?void 0:c,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender})},render(){var e,r;const{mergedClsPrefix:o,rtlEnabled:t,closable:l,color:{borderColor:s}={},round:n,onRender:i,$slots:a}=this;i==null||i();const C=ce(a.avatar,c=>c&&g("div",{class:`${o}-tag__avatar`},c)),v=ce(a.icon,c=>c&&g("div",{class:`${o}-tag__icon`},c));return g("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:t,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:n,[`${o}-tag--avatar`]:C,[`${o}-tag--icon`]:v,[`${o}-tag--closable`]:l}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},v||C,g("span",{class:`${o}-tag__content`,ref:"contentRef"},(r=(e=this.$slots).default)===null||r===void 0?void 0:r.call(e)),!this.checkable&&l?g(ao,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:n,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?g("div",{class:`${o}-tag__border`,style:{borderColor:s}}):null)}});const Wr=e=>{const{borderRadius:r,avatarColor:o,cardColor:t,fontSize:l,heightTiny:s,heightSmall:n,heightMedium:i,heightLarge:a,heightHuge:C,modalColor:v,popoverColor:c}=e;return{borderRadius:r,fontSize:l,border:`2px solid ${t}`,heightTiny:s,heightSmall:n,heightMedium:i,heightLarge:a,heightHuge:C,color:Z(t,o),colorModal:Z(v,o),colorPopover:Z(c,o)}},Vr={name:"Avatar",common:ue,self:Wr},Ur=Vr,Kr=ke("n-avatar-group"),Yr=F("avatar",`
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
`,[De(L("&","--n-merged-color: var(--n-color-modal);")),co(L("&","--n-merged-color: var(--n-color-popover);")),L("img",`
 width: 100%;
 height: 100%;
 `),w("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),F("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),w("text","line-height: 1.25")]),Xr=Object.assign(Object.assign({},W.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),_o=D({name:"Avatar",props:Xr,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=fe(e),t=S(!1);let l=null;const s=S(null),n=S(null),i=()=>{const{value:f}=s;if(f&&(l===null||l!==f.innerHTML)){l=f.innerHTML;const{value:y}=n;if(y){const{offsetWidth:d,offsetHeight:u}=y,{offsetWidth:B,offsetHeight:T}=f,N=.9,V=Math.min(d/B*N,u/T*N,1);f.style.transform=`translateX(-50%) translateY(-50%) scale(${V})`}}},a=ae(Kr,null),C=E(()=>{const{size:f}=e;if(f)return f;const{size:y}=a||{};return y||"medium"}),v=W("Avatar","-avatar",Yr,Ur,e,r),c=ae(xo,null),m=E(()=>{if(a)return!0;const{round:f,circle:y}=e;return f!==void 0||y!==void 0?f||y:c?c.roundRef.value:!1}),h=E(()=>a?!0:e.bordered||!1),b=f=>{var y;if(!k.value)return;t.value=!0;const{onError:d,imgProps:u}=e;(y=u==null?void 0:u.onError)===null||y===void 0||y.call(u,f),d&&d(f)};te(()=>e.src,()=>t.value=!1);const z=E(()=>{const f=C.value,y=m.value,d=h.value,{color:u}=e,{self:{borderRadius:B,fontSize:T,color:N,border:V,colorModal:Y,colorPopover:X},common:{cubicBezierEaseInOut:q}}=v.value;let G;return typeof f=="number"?G=`${f}px`:G=v.value.self[O("height",f)],{"--n-font-size":T,"--n-border":d?V:"none","--n-border-radius":y?"50%":B,"--n-color":u||N,"--n-color-modal":u||Y,"--n-color-popover":u||X,"--n-bezier":q,"--n-merged-size":`var(--n-avatar-size-override, ${G})`}}),p=o?ve("avatar",E(()=>{const f=C.value,y=m.value,d=h.value,{color:u}=e;let B="";return f&&(typeof f=="number"?B+=`a${f}`:B+=f[0]),y&&(B+="b"),d&&(B+="c"),u&&(B+=Me(u)),B}),z,e):void 0,k=S(!e.lazy);io(()=>{if(Be)return;let f;const y=Mo(()=>{f==null||f(),f=void 0,e.lazy&&(f=Xo(n.value,e.intersectionObserverOptions,k))});de(()=>{y(),f==null||f()})});const _=S(!e.lazy);return{textRef:s,selfRef:n,mergedRoundRef:m,mergedClsPrefix:r,fitTextTransform:i,cssVars:o?void 0:z,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender,hasLoadError:t,handleError:b,shouldStartLoading:k,loaded:_,mergedOnLoad:f=>{var y;const{onLoad:d,imgProps:u}=e;d==null||d(f),(y=u==null?void 0:u.onLoad)===null||y===void 0||y.call(u,f),_.value=!0}}},render(){var e,r;const{$slots:o,src:t,mergedClsPrefix:l,lazy:s,onRender:n,mergedOnLoad:i,shouldStartLoading:a,loaded:C,hasLoadError:v}=this;n==null||n();let c;const m=!C&&!v&&(this.renderPlaceholder?this.renderPlaceholder():(r=(e=this.$slots).placeholder)===null||r===void 0?void 0:r.call(e));return this.hasLoadError?c=this.renderFallback?this.renderFallback():Oe(o.fallback,()=>[g("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):c=ce(o.default,h=>{if(h)return g(nr,{onResize:this.fitTextTransform},{default:()=>g("span",{ref:"textRef",class:`${l}-avatar__text`},h)});if(t){const{imgProps:b}=this;return g("img",Object.assign(Object.assign({},b),{loading:Be&&!this.intersectionObserverOptions&&s?"lazy":"eager",src:Be||a||C?t:void 0,onLoad:i,"data-image-src":t,onError:this.handleError,style:[b==null?void 0:b.style,{objectFit:this.objectFit},m?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),g("span",{ref:"selfRef",class:[`${l}-avatar`,this.themeClass],style:this.cssVars},c,s&&m)}}),qr={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"},Gr=e=>{const{textColor1:r,textColor2:o,modalColor:t,closeIconColor:l,closeIconColorHover:s,closeIconColorPressed:n,closeColorHover:i,closeColorPressed:a,infoColor:C,successColor:v,warningColor:c,errorColor:m,primaryColor:h,dividerColor:b,borderRadius:z,fontWeightStrong:p,lineHeight:k,fontSize:_}=e;return Object.assign(Object.assign({},qr),{fontSize:_,lineHeight:k,border:`1px solid ${b}`,titleTextColor:r,textColor:o,color:t,closeColorHover:i,closeColorPressed:a,closeIconColor:l,closeIconColorHover:s,closeIconColorPressed:n,closeBorderRadius:z,iconColor:h,iconColorInfo:C,iconColorSuccess:v,iconColorWarning:c,iconColorError:m,borderRadius:z,titleFontWeight:p})},Zr=uo({name:"Dialog",common:ue,peers:{Button:lr},self:Gr}),wo=Zr,He={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,onPositiveClick:Function,onNegativeClick:Function,onClose:Function},Jr=Co(He),Qr=L([F("dialog",`
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
 `,[w("icon",{color:"var(--n-icon-color)"}),I("bordered",{border:"var(--n-border)"}),I("icon-top",[w("close",{margin:"var(--n-close-margin)"}),w("icon",{margin:"var(--n-icon-margin)"}),w("content",{textAlign:"center"}),w("title",{justifyContent:"center"}),w("action",{justifyContent:"center"})]),I("icon-left",[w("icon",{margin:"var(--n-icon-margin)"}),I("closable",[w("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),w("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),w("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[I("last","margin-bottom: 0;")]),w("action",`
 display: flex;
 justify-content: flex-end;
 `,[L("> *:not(:last-child)",{marginRight:"var(--n-action-space)"})]),w("icon",{fontSize:"var(--n-icon-size)",transition:"color .3s var(--n-bezier)"}),w("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),F("dialog-icon-container",{display:"flex",justifyContent:"center"})]),De(F("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),F("dialog",[Oo(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),et={default:()=>g(Ve,null),info:()=>g(Ve,null),success:()=>g(Lo,null),warning:()=>g(Do,null),error:()=>g(jo,null)},ot=D({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},W.props),He),setup(e){const{mergedComponentPropsRef:r,mergedClsPrefixRef:o,inlineThemeDisabled:t}=fe(e),l=E(()=>{var c,m;const{iconPlacement:h}=e;return h||((m=(c=r==null?void 0:r.value)===null||c===void 0?void 0:c.Dialog)===null||m===void 0?void 0:m.iconPlacement)||"left"});function s(c){const{onPositiveClick:m}=e;m&&m(c)}function n(c){const{onNegativeClick:m}=e;m&&m(c)}function i(){const{onClose:c}=e;c&&c()}const a=W("Dialog","-dialog",Qr,wo,e,o),C=E(()=>{const{type:c}=e,m=l.value,{common:{cubicBezierEaseInOut:h},self:{fontSize:b,lineHeight:z,border:p,titleTextColor:k,textColor:_,color:f,closeBorderRadius:y,closeColorHover:d,closeColorPressed:u,closeIconColor:B,closeIconColorHover:T,closeIconColorPressed:N,closeIconSize:V,borderRadius:Y,titleFontWeight:X,titleFontSize:q,padding:G,iconSize:xe,actionSpace:_e,contentMargin:we,closeSize:ze,[m==="top"?"iconMarginIconTop":"iconMargin"]:Pe,[m==="top"?"closeMarginIconTop":"closeMargin"]:$e,[O("iconColor",c)]:Se}}=a.value;return{"--n-font-size":b,"--n-icon-color":Se,"--n-bezier":h,"--n-close-margin":$e,"--n-icon-margin":Pe,"--n-icon-size":xe,"--n-close-size":ze,"--n-close-icon-size":V,"--n-close-border-radius":y,"--n-close-color-hover":d,"--n-close-color-pressed":u,"--n-close-icon-color":B,"--n-close-icon-color-hover":T,"--n-close-icon-color-pressed":N,"--n-color":f,"--n-text-color":_,"--n-border-radius":Y,"--n-padding":G,"--n-line-height":z,"--n-border":p,"--n-content-margin":we,"--n-title-font-size":q,"--n-title-font-weight":X,"--n-title-text-color":k,"--n-action-space":_e}}),v=t?ve("dialog",E(()=>`${e.type[0]}${l.value[0]}`),C,e):void 0;return{mergedClsPrefix:o,mergedIconPlacement:l,mergedTheme:a,handlePositiveClick:s,handleNegativeClick:n,handleCloseClick:i,cssVars:t?void 0:C,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var e;const{bordered:r,mergedIconPlacement:o,cssVars:t,closable:l,showIcon:s,title:n,content:i,action:a,negativeText:C,positiveText:v,positiveButtonProps:c,negativeButtonProps:m,handlePositiveClick:h,handleNegativeClick:b,mergedTheme:z,loading:p,type:k,mergedClsPrefix:_}=this;(e=this.onRender)===null||e===void 0||e.call(this);const f=s?g(To,{clsPrefix:_,class:`${_}-dialog__icon`},{default:()=>ce(this.$slots.icon,d=>d||(this.icon?Q(this.icon):et[this.type]()))}):null,y=ce(this.$slots.action,d=>d||v||C||a?g("div",{class:`${_}-dialog__action`},d||(a?[Q(a)]:[this.negativeText&&g(K,Object.assign({theme:z.peers.Button,themeOverrides:z.peerOverrides.Button,ghost:!0,size:"small",onClick:b},m),{default:()=>Q(this.negativeText)}),this.positiveText&&g(K,Object.assign({theme:z.peers.Button,themeOverrides:z.peerOverrides.Button,size:"small",type:k==="default"?"primary":k,disabled:p,loading:p,onClick:h},c),{default:()=>Q(this.positiveText)})])):null);return g("div",{class:[`${_}-dialog`,this.themeClass,this.closable&&`${_}-dialog--closable`,`${_}-dialog--icon-${o}`,r&&`${_}-dialog--bordered`],style:t,role:"dialog"},l?g(ao,{clsPrefix:_,class:`${_}-dialog__close`,onClick:this.handleCloseClick}):null,s&&o==="top"?g("div",{class:`${_}-dialog-icon-container`},f):null,g("div",{class:`${_}-dialog__title`},s&&o==="left"?f:null,Oe(this.$slots.header,()=>[Q(n)])),g("div",{class:[`${_}-dialog__content`,y?"":`${_}-dialog__content--last`]},Oe(this.$slots.default,()=>[Q(i)])),y)}}),rt=ke("n-dialog-provider"),tt=e=>{const{modalColor:r,textColor2:o,boxShadow3:t}=e;return{color:r,textColor:o,boxShadow:t}},nt=uo({name:"Modal",common:ue,peers:{Scrollbar:ir,Dialog:wo,Card:_r},self:tt}),lt=nt,Ne=Object.assign(Object.assign({},wr),He),it=Co(Ne),st=D({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},Ne),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const r=S(null),o=S(null),t=S(e.show),l=S(null),s=S(null);te(se(e,"show"),p=>{p&&(t.value=!0)}),Mr(E(()=>e.blockScroll&&t.value));const n=ae(yo);function i(){if(n.transformOriginRef.value==="center")return"";const{value:p}=l,{value:k}=s;if(p===null||k===null)return"";if(o.value){const _=o.value.containerScrollTop;return`${p}px ${k+_}px`}return""}function a(p){if(n.transformOriginRef.value==="center")return;const k=n.getMousePosition();if(!k||!o.value)return;const _=o.value.containerScrollTop,{offsetLeft:f,offsetTop:y}=p;if(k){const d=k.y,u=k.x;l.value=-(f-u),s.value=-(y-d-_)}p.style.transformOrigin=i()}function C(p){Ue(()=>{a(p)})}function v(p){p.style.transformOrigin=i(),e.onBeforeLeave()}function c(){t.value=!1,l.value=null,s.value=null,e.onAfterLeave()}function m(){const{onClose:p}=e;p&&p()}function h(){e.onNegativeClick()}function b(){e.onPositiveClick()}const z=S(null);return te(z,p=>{p&&Ue(()=>{const k=p.el;k&&r.value!==k&&(r.value=k)})}),re(vr,r),re(sr,null),re(ar,null),{mergedTheme:n.mergedThemeRef,appear:n.appearRef,isMounted:n.isMountedRef,mergedClsPrefix:n.mergedClsPrefixRef,bodyRef:r,scrollbarRef:o,displayed:t,childNodeRef:z,handlePositiveClick:b,handleNegativeClick:h,handleCloseClick:m,handleAfterLeave:c,handleBeforeLeave:v,handleEnter:C}},render(){const{$slots:e,$attrs:r,handleEnter:o,handleAfterLeave:t,handleBeforeLeave:l,preset:s,mergedClsPrefix:n}=this;let i=null;if(!s){if(i=cr(e),!i){Ho("modal","default slot is empty");return}i=No(i),i.props=Ao({class:`${n}-modal`},r,i.props||{})}return this.displayDirective==="show"||this.displayed||this.show?Re(g("div",{role:"none",class:`${n}-modal-body-wrapper`},g(dr,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${n}-modal-scroll-content`},{default:()=>{var a;return[(a=this.renderMask)===null||a===void 0?void 0:a.call(this),g(ur,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var C;return g(fo,{name:"fade-in-scale-up-transition",appear:(C=this.appear)!==null&&C!==void 0?C:this.isMounted,onEnter:o,onAfterEnter:this.onAfterEnter,onAfterLeave:t,onBeforeLeave:l},{default:()=>{const v=[[Ke,this.show]],{onClickoutside:c}=this;return c&&v.push([fr,this.onClickoutside,void 0,{capture:!0}]),Re(this.preset==="confirm"||this.preset==="dialog"?g(ot,Object.assign({},this.$attrs,{class:[`${n}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},Te(this.$props,Jr),{"aria-modal":"true"}),e):this.preset==="card"?g(ko,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${n}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},Te(this.$props,zr),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=i,v)}})}})]}})),[[Ke,this.displayDirective==="if"||this.displayed||this.show]]):null}}),at=L([F("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),F("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[hr({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),F("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[F("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),F("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[Sr({duration:".25s",enterScale:".5"})])]),ct=Object.assign(Object.assign(Object.assign(Object.assign({},W.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),Ne),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),dt=D({name:"Modal",inheritAttrs:!1,props:ct,setup(e){const r=S(null),{mergedClsPrefixRef:o,namespaceRef:t,inlineThemeDisabled:l}=fe(e),s=W("Modal","-modal",at,lt,e,o),n=Ir(64),i=Er(),a=Wo(),C=e.internalDialog?ae(rt,null):null,v=Or();function c(d){const{onUpdateShow:u,"onUpdate:show":B,onHide:T}=e;u&&le(u,d),B&&le(B,d),T&&!d&&T(d)}function m(){const{onClose:d}=e;d?Promise.resolve(d()).then(u=>{u!==!1&&c(!1)}):c(!1)}function h(){const{onPositiveClick:d}=e;d?Promise.resolve(d()).then(u=>{u!==!1&&c(!1)}):c(!1)}function b(){const{onNegativeClick:d}=e;d?Promise.resolve(d()).then(u=>{u!==!1&&c(!1)}):c(!1)}function z(){const{onBeforeLeave:d,onBeforeHide:u}=e;d&&le(d),u&&u()}function p(){const{onAfterLeave:d,onAfterHide:u}=e;d&&le(d),u&&u()}function k(d){var u;const{onMaskClick:B}=e;B&&B(d),e.maskClosable&&!((u=r.value)===null||u===void 0)&&u.contains(gr(d))&&c(!1)}function _(d){var u;(u=e.onEsc)===null||u===void 0||u.call(e),e.show&&e.closeOnEsc&&Rr(d)&&!v.value&&c(!1)}re(yo,{getMousePosition:()=>{if(C){const{clickedRef:d,clickPositionRef:u}=C;if(d.value&&u.value)return u.value}return n.value?i.value:null},mergedClsPrefixRef:o,mergedThemeRef:s,isMountedRef:a,appearRef:se(e,"internalAppear"),transformOriginRef:se(e,"transformOrigin")});const f=E(()=>{const{common:{cubicBezierEaseOut:d},self:{boxShadow:u,color:B,textColor:T}}=s.value;return{"--n-bezier-ease-out":d,"--n-box-shadow":u,"--n-color":B,"--n-text-color":T}}),y=l?ve("theme-class",void 0,f,e):void 0;return{mergedClsPrefix:o,namespace:t,isMounted:a,containerRef:r,presetProps:E(()=>Te(e,it)),handleEsc:_,handleAfterLeave:p,handleClickoutside:k,handleBeforeLeave:z,doUpdateShow:c,handleNegativeClick:b,handlePositiveClick:h,handleCloseClick:m,cssVars:l?void 0:f,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){const{mergedClsPrefix:e}=this;return g(pr,{to:this.to,show:this.show},{default:()=>{var r;(r=this.onRender)===null||r===void 0||r.call(this);const{unstableShowMask:o}=this;return Re(g("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},g(st,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:o?void 0:this.handleClickoutside,renderMask:o?()=>{var t;return g(fo,{name:"fade-in-transition",key:"mask",appear:(t=this.internalAppear)!==null&&t!==void 0?t:this.isMounted},{default:()=>this.show?g("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[mr,{zIndex:this.zIndex,enabled:this.show}]])}})}}),ut=e=>{const{textColor2:r,cardColor:o,modalColor:t,popoverColor:l,dividerColor:s,borderRadius:n,fontSize:i,hoverColor:a}=e;return{textColor:r,color:o,colorHover:a,colorModal:t,colorHoverModal:Z(t,a),colorPopover:l,colorHoverPopover:Z(l,a),borderColor:s,borderColorModal:Z(t,s),borderColorPopover:Z(l,s),borderRadius:n,fontSize:i}},ft={name:"List",common:ue,self:ut},vt=ft,ht=L([F("list",`
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
 `,[I("show-divider",[F("list-item",[L("&:not(:last-child)",[w("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),I("clickable",[F("list-item",`
 cursor: pointer;
 `)]),I("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),I("hoverable",[F("list-item",`
 border-radius: var(--n-border-radius);
 `,[L("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[w("divider",`
 background-color: transparent;
 `)])])]),I("bordered, hoverable",[F("list-item",`
 padding: 12px 20px;
 `),w("header, footer",`
 padding: 12px 20px;
 `)]),w("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[L("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),F("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[w("prefix",`
 margin-right: 20px;
 flex: 0;
 `),w("suffix",`
 margin-left: 20px;
 flex: 0;
 `),w("main",`
 flex: 1;
 `),w("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),De(F("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),co(F("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),pt=Object.assign(Object.assign({},W.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),zo=ke("n-list"),gt=D({name:"List",props:pt,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:t}=fe(e),l=so("List",t,r),s=W("List","-list",ht,vt,e,r);re(zo,{showDividerRef:se(e,"showDivider"),mergedClsPrefixRef:r});const n=E(()=>{const{common:{cubicBezierEaseInOut:a},self:{fontSize:C,textColor:v,color:c,colorModal:m,colorPopover:h,borderColor:b,borderColorModal:z,borderColorPopover:p,borderRadius:k,colorHover:_,colorHoverModal:f,colorHoverPopover:y}}=s.value;return{"--n-font-size":C,"--n-bezier":a,"--n-text-color":v,"--n-color":c,"--n-border-radius":k,"--n-border-color":b,"--n-border-color-modal":z,"--n-border-color-popover":p,"--n-color-modal":m,"--n-color-popover":h,"--n-color-hover":_,"--n-color-hover-modal":f,"--n-color-hover-popover":y}}),i=o?ve("list",void 0,n,e):void 0;return{mergedClsPrefix:r,rtlEnabled:l,cssVars:o?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:r,mergedClsPrefix:o,onRender:t}=this;return t==null||t(),g("ul",{class:[`${o}-list`,this.rtlEnabled&&`${o}-list--rtl`,this.bordered&&`${o}-list--bordered`,this.showDivider&&`${o}-list--show-divider`,this.hoverable&&`${o}-list--hoverable`,this.clickable&&`${o}-list--clickable`,this.themeClass],style:this.cssVars},r.header?g("div",{class:`${o}-list__header`},r.header()):null,(e=r.default)===null||e===void 0?void 0:e.call(r),r.footer?g("div",{class:`${o}-list__footer`},r.footer()):null)}}),mt=D({name:"ListItem",setup(){const e=ae(zo,null);return e||Vo("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:r}=this;return g("li",{class:`${r}-list-item`},e.prefix?g("div",{class:`${r}-list-item__prefix`},e.prefix()):null,e.default?g("div",{class:`${r}-list-item__main`},e):null,e.suffix?g("div",{class:`${r}-list-item__suffix`},e.suffix()):null,this.showDivider&&g("div",{class:`${r}-list-item__divider`}))}}),bt={class:"p-4 box-border"},Ct={class:"flex items-center"},yt={class:"flex flex-col ml-4 flex-1 shrink-1 w-full"},kt={class:"text-xl"},xt=D({__name:"Contacts",props:{pubkey:null},setup(e){const{pubkey:r}=e;qo();const o=E(()=>r===A.value.publicKey),t=o.value?null:Go(r),l=E(()=>{var n;return(n=(o.value?Ee.value:t.value).contacts)!=null?n:{}}),s=E(()=>Object.keys(l.value));return(n,i)=>(M(),J("div",bt,[$(x(gt),null,{default:R(()=>[(M(!0),J(vo,null,Uo(x(s),a=>(M(),U(x(mt),{class:"cursor-pointer"},{default:R(()=>{var C,v;return[j("div",Ct,[$(x(_o),{class:"ml-4",size:"small",src:(C=x(l)[a].picture)!=null?C:x(po),round:"",onClick:()=>n.$router.push(`/profile/${a}`)},null,8,["src","onClick"]),j("div",yt,[j("div",kt,ye((v=x(l)[a].name)!=null?v:a.slice(0,10)),1),x(l)[a].about?(M(),U(rr,{key:0,style:{fontSize:"10px"}},{default:R(()=>[H(ye(x(l)[a].about),1)]),_:2},1024)):oe("",!0)])])]}),_:2},1024))),256))]),_:1})]))}}),_t=D({__name:"ProfileMoreInfo",props:{pubkey:null},setup(e){return(r,o)=>{const t=yr,l=Cr;return M(),U(l,{type:"line",animated:""},{default:R(()=>[$(t,{"display-directive":"show",name:"\u4E3B\u9875",tab:"\u4E3B\u9875"},{default:R(()=>[$(Zo,{pubkey:[e.pubkey]},null,8,["pubkey"])]),_:1}),$(t,{"display-directive":"show",name:"\u5173\u6CE8",tab:"\u5173\u6CE8"},{default:R(()=>[$(xt,{pubkey:e.pubkey},null,8,["pubkey"])]),_:1}),$(t,{"display-directive":"show",name:"\u5173\u6CE8\u8005",tab:"\u5173\u6CE8\u8005"},{default:R(()=>[H(" \u4E03\u91CC\u9999 ")]),_:1}),$(t,{"display-directive":"show",name:"\u4E2D\u7EE7",tab:"\u4E2D\u7EE7"},{default:R(()=>[H(" \u4E03\u91CC\u9999 ")]),_:1})]),_:1})}}}),wt=D({__name:"UserDataEditing",emits:["close"],setup(e,{emit:r}){const o=kr(),t=S({}),l=S(!1);te(A,async()=>{l.value=!0;const n=await go(A.value.publicKey);l.value=!1,o.success("\u4E2A\u4EBA\u4FE1\u606F\u66F4\u65B0\u6210\u529F"),t.value=n},{immediate:!0});async function s(){l.value=!0,await er(t.value).catch(()=>{o.error("\u63D0\u4EA4\u5931\u8D25"),l.value=!1}),o.success("\u63D0\u4EA4\u6210\u529F\uFF0C\u5DF2\u53D1\u9001\u5230\u81F3\u5C11\u4E00\u4E2A\u670D\u52A1\u5668"),l.value=!1}return(n,i)=>{const a=br,C=ko;return M(),U(C,{style:{width:"600px"},title:"\u7F16\u8F91\u7528\u6237\u4FE1\u606F",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{default:R(()=>[$(x(Ye),{vertical:""},{default:R(()=>[$(x(pe),{type:"text",placeholder:"\u7528\u6237\u540D",value:t.value.name,"onUpdate:value":i[0]||(i[0]=v=>t.value.name=v)},null,8,["value"]),$(x(pe),{type:"textarea",placeholder:"\u4ECB\u7ECD",value:t.value.about,"onUpdate:value":i[1]||(i[1]=v=>t.value.about=v)},null,8,["value"]),$(x(pe),{type:"text",placeholder:"profileUrl",value:t.value.picture,"onUpdate:value":i[2]||(i[2]=v=>t.value.picture=v)},null,8,["value"]),$(x(pe),{type:"text",placeholder:"\u7528\u6237\u8BA4\u8BC1",value:t.value.nip05,"onUpdate:value":i[3]||(i[3]=v=>t.value.nip05=v)},null,8,["value"]),$(x(Ye),{center:""},{default:R(()=>[$(x(K),{type:"tertiary",onClick:i[4]||(i[4]=()=>r("close"))},{default:R(()=>[H(" \u53D6\u6D88 ")]),_:1}),$(a,{trigger:"hover"},{trigger:R(()=>[$(x(K),{type:"primary",onClick:s,loading:l.value,disabled:l.value},{default:R(()=>[H(" \u63D0\u4EA4 ")]),_:1},8,["loading","disabled"])]),default:R(()=>[H(" \u5982\u679C\u52A0\u8F7D\u4E0D\u5230\u5408\u9002\u7684\u4FE1\u606F\uFF0C\u90A3\u53EF\u80FD\u662Frelays\u8BBE\u7F6E\u4E0D\u5BF9\u8BF7\u5C1D\u8BD5\u914D\u7F6E\u4E00\u4E0B ")]),_:1}),l.value?(M(),U(a,{key:0,trigger:"hover"},{trigger:R(()=>[$(x(K),{onClick:i[5]||(i[5]=()=>l.value=!1)},{default:R(()=>[H("\u505C\u6B62\u52A0\u8F7D")]),_:1})]),default:R(()=>[H(" \u5982\u679C\u60A8\u662F\u65B0\u7528\u6237\u7684\u8BDD\uFF0C\u6216\u8005\u60A8\u653E\u5F03\u4E4B\u524D\u7684\u4FE1\u606F\u5C31\u53EF\u4EE5\u70B9\u6B64\u5904 ")]),_:1})):oe("",!0)]),_:1})]),_:1})]),_:1})}}}),zt=j("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},[j("g",{fill:"none"},[j("path",{d:"M6.75 10a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0zm5 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0zM15 11.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5z",fill:"currentColor"})])],-1),Pt=D({__name:"MoreIcon",setup(e){return(r,o)=>(M(),U(x(xr),null,{default:R(()=>[zt]),_:1}))}}),$t={},St={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Bt=j("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"44",d:"M358.62 129.28L86.49 402.08L70 442l39.92-16.49l272.8-272.13l-24.1-24.1z"},null,-1),Rt=j("path",{d:"M413.07 74.84l-11.79 11.78l24.1 24.1l11.79-11.79a16.51 16.51 0 0 0 0-23.34l-.75-.75a16.51 16.51 0 0 0-23.35 0z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"44"},null,-1),Et=[Bt,Rt];function Ft(e,r){return M(),J("svg",St,Et)}const It=ho($t,[["render",Ft]]),Mt={},Ot={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Tt=j("path",{d:"M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336z",fill:"currentColor"},null,-1),Lt=[Tt];function Dt(e,r){return M(),J("svg",Ot,Lt)}const jt=ho(Mt,[["render",Dt]]),Ht=D({__name:"UserInformationButton",props:{pubkey:null},setup(e){const{pubkey:r}=e,o=Pr(),t=E(()=>r===A.value.publicKey),l=S(!1),s=S([t.value&&{label:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",key:"editProfile",icon:Xe(It),props:{onclick(){l.value=!l.value}}},{label:"\u590D\u5236",key:"clipboard",icon:Xe(jt),children:[{label:"\u590D\u5236npub",key:"copy-npub",props:{onclick(){const n=be.npubEncode(A.value.publicKey);o(n)}}},{label:"\u590D\u5236nprofile",key:"copy-npro",props:{onclick(){const n=be.nprofileEncode({pubkey:A.value.publicKey,relays:[...or.getWriteList()]});o(n)}}},t.value&&{label:"\u590D\u5236\u79C1\u94A5",key:"copy-nsec",props:{onclick(){const n=be.nsecEncode(A.value.privateKey);o(n)}}},{label:"\u590D\u5236publicKey hex",key:"copy-hex",props:{onclick(){o(A.value.publicKey)}}}].filter(n=>!!n)}].filter(n=>!!n));return(n,i)=>{const a=Pt,C=K,v=$r,c=wt,m=dt;return M(),J(vo,null,[$(v,{placement:"bottom-start",trigger:"click",options:s.value},{default:R(()=>[$(C,{tertiary:"",circle:""},{default:R(()=>[$(a)]),_:1})]),_:1},8,["options"]),$(m,{show:l.value,"onUpdate:show":i[1]||(i[1]=h=>l.value=h)},{default:R(()=>[$(c,{onClose:i[0]||(i[0]=()=>l.value=!1)})]),_:1},8,["show"])],64)}}}),Nt={class:""},At={class:"flex items-center"},Wt={key:2,class:"ml-4"},nn=D({__name:"ProfileView",setup(e){const r=E(()=>{var n;return(n=Ko().params.hash)!=null?n:A.value.publicKey}),o=S({}),t=E(()=>{try{const n=be.decode(r.value);switch(n.type){case"nprofile":return n.data;case"npub":return{pubkey:n.data};case"nsec":return{pubkey:Yo(n.data)};default:break}}catch{if(r.value.length===64)return{pubkey:r.value}}}),l=E(()=>{var n;return((n=t.value)==null?void 0:n.pubkey)===A.value.publicKey}),s=E(()=>{var n,i;return!((n=t.value)!=null&&n.pubkey)||!((i=Ee.value)!=null&&i.contacts)?!1:!!Ee.value.contacts[t.value.pubkey]});return te(t,async()=>{!t.value||(o.value=await go(t.value.pubkey,t.value.relays?{relayUrls:new Set(t.value.relays)}:void 0))},{immediate:!0}),(n,i)=>{var C,v,c,m,h;const a=_o;return M(),J("div",null,[j("div",Nt,[$(a,{round:"",size:100,src:(C=o.value.picture)!=null?C:x(po)},null,8,["src"])]),j("h1",At,[H(ye((c=o.value.name)!=null?c:(v=x(t))==null?void 0:v.pubkey.slice(0,10))+" ",1),!x(s)&&!x(l)?(M(),U(x(K),{key:0,class:"ml-4",strong:"",round:"",type:"primary",onClick:i[0]||(i[0]=()=>{var b;return x(Jo)((b=x(t))==null?void 0:b.pubkey)})},{default:R(()=>[H(" Flower ")]),_:1})):oe("",!0),x(s)&&!x(l)?(M(),U(x(K),{key:1,class:"ml-4",strong:"",round:"",type:"tertiary",onClick:i[1]||(i[1]=()=>{var b;return x(Qo)((b=x(t))==null?void 0:b.pubkey)})},{default:R(()=>[H(" Unflower ")]),_:1})):oe("",!0),(m=x(t))!=null&&m.pubkey?(M(),J("div",Wt,[$(Ht,{pubkey:x(t).pubkey},null,8,["pubkey"])])):oe("",!0)]),j("div",null,ye(o.value.about),1),x(t)?(M(),U(_t,{key:0,pubkey:(h=x(t))==null?void 0:h.pubkey},null,8,["pubkey"])):oe("",!0)])}}});export{nn as default};
