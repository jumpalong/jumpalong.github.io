import{aK as Y,dy as G,ba as Z,f as L,j as r,m as ee,dz as H,aJ as K,bi as ne,x as Pe,bg as we,c as b,d as C,a as k,b as O,e as Ce,bo as Oe,h as q,aA as h,dA as Te,av as _,n as m,aC as U,aQ as Be,b7 as _e,o as T,aN as j,p as W,dB as Le,q as $e,v as Ie,aB as Ke,aO as je,w as Ee}from"./index.271bc2a1.js";import{F as He}from"./Checkmark.456ae65d.js";import{a as De,h as J}from"./create.2deeaf6a.js";import{V as Ve}from"./VirtualList.9c7cfa50.js";import{_ as Ae}from"./Empty.f48bf955.js";function E(e){const i=e.filter(t=>t!==void 0);if(i.length!==0)return i.length===1?i[0]:t=>{e.forEach(a=>{a&&a(t)})}}function Ge(e,i){i&&(Y(()=>{const{value:t}=e;t&&G.registerHandler(t,i)}),Z(()=>{const{value:t}=e;t&&G.unregisterHandler(t)}))}const qe=L({props:{onFocus:Function,onBlur:Function},setup(e){return()=>r("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Ue(e,i){return r(we,{name:"fade-in-scale-up-transition"},{default:()=>e?r(Pe,{clsPrefix:i,class:`${i}-base-select-option__check`},{default:()=>r(He)}):null})}const Q=L({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:i,pendingTmNodeRef:t,multipleRef:a,valueSetRef:s,renderLabelRef:c,renderOptionRef:l,labelFieldRef:u,valueFieldRef:S,showCheckmarkRef:R,nodePropsRef:g,handleOptionClick:F,handleOptionMouseEnter:y}=ee(H),N=K(()=>{const{value:f}=t;return f?e.tmNode.key===f.key:!1});function d(f){const{tmNode:p}=e;p.disabled||F(f,p)}function x(f){const{tmNode:p}=e;p.disabled||y(f,p)}function B(f){const{tmNode:p}=e,{value:z}=N;p.disabled||z||y(f,p)}return{multiple:a,isGrouped:K(()=>{const{tmNode:f}=e,{parent:p}=f;return p&&p.rawNode.type==="group"}),showCheckmark:R,nodeProps:g,isPending:N,isSelected:K(()=>{const{value:f}=i,{value:p}=a;if(f===null)return!1;const z=e.tmNode.rawNode[S.value];if(p){const{value:$}=s;return $.has(z)}else return f===z}),labelField:u,renderLabel:c,renderOption:l,handleMouseMove:B,handleMouseEnter:x,handleClick:d}},render(){const{clsPrefix:e,tmNode:{rawNode:i},isSelected:t,isPending:a,isGrouped:s,showCheckmark:c,nodeProps:l,renderOption:u,renderLabel:S,handleClick:R,handleMouseEnter:g,handleMouseMove:F}=this,y=Ue(t,e),N=S?[S(i,t),c&&y]:[ne(i[this.labelField],i,t),c&&y],d=l==null?void 0:l(i),x=r("div",Object.assign({},d,{class:[`${e}-base-select-option`,i.class,d==null?void 0:d.class,{[`${e}-base-select-option--disabled`]:i.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:s,[`${e}-base-select-option--pending`]:a,[`${e}-base-select-option--show-checkmark`]:c}],style:[(d==null?void 0:d.style)||"",i.style||""],onClick:E([R,d==null?void 0:d.onClick]),onMouseenter:E([g,d==null?void 0:d.onMouseenter]),onMousemove:E([F,d==null?void 0:d.onMousemove])}),r("div",{class:`${e}-base-select-option__content`},N));return i.render?i.render({node:x,option:i,selected:t}):u?u({node:x,option:i,selected:t}):x}}),X=L({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:i,labelFieldRef:t,nodePropsRef:a}=ee(H);return{labelField:t,nodeProps:a,renderLabel:e,renderOption:i}},render(){const{clsPrefix:e,renderLabel:i,renderOption:t,nodeProps:a,tmNode:{rawNode:s}}=this,c=a==null?void 0:a(s),l=i?i(s,!1):ne(s[this.labelField],s,!1),u=r("div",Object.assign({},c,{class:[`${e}-base-select-group-header`,c==null?void 0:c.class]}),l);return s.render?s.render({node:u,option:s}):t?t({node:u,option:s,selected:!1}):u}}),We=b("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[b("scrollbar",`
 max-height: var(--n-height);
 `),b("virtual-list",`
 max-height: var(--n-height);
 `),b("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[C("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),b("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),b("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),C("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),C("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),C("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),b("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),b("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[k("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),O("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),O("&:active",`
 color: var(--n-option-text-color-pressed);
 `),k("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),k("pending",[O("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),k("selected",`
 color: var(--n-option-text-color-active);
 `,[O("&::before",`
 background-color: var(--n-option-color-active);
 `),k("pending",[O("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),k("disabled",`
 cursor: not-allowed;
 `,[Ce("selected",`
 color: var(--n-option-text-color-disabled);
 `),k("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),C("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Oe({enterScale:"0.5"})])])]),en=L({name:"InternalSelectMenu",props:Object.assign(Object.assign({},q.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const i=q("InternalSelectMenu","-internal-select-menu",We,Te,e,h(e,"clsPrefix")),t=_(null),a=_(null),s=_(null),c=m(()=>e.treeMate.getFlattenedNodes()),l=m(()=>De(c.value)),u=_(null);function S(){const{treeMate:n}=e;let o=null;const{value:v}=e;v===null?o=n.getFirstAvailableNode():(e.multiple?o=n.getNode((v||[])[(v||[]).length-1]):o=n.getNode(v),(!o||o.disabled)&&(o=n.getFirstAvailableNode())),P(o||null)}function R(){const{value:n}=u;n&&!e.treeMate.getNode(n.key)&&(u.value=null)}let g;U(()=>e.show,n=>{n?g=U(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?S():R(),Be(D)):R()},{immediate:!0}):g==null||g()},{immediate:!0}),Z(()=>{g==null||g()});const F=m(()=>_e(i.value.self[T("optionHeight",e.size)])),y=m(()=>j(i.value.self[T("padding",e.size)])),N=m(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),d=m(()=>{const n=c.value;return n&&n.length===0});function x(n){const{onToggle:o}=e;o&&o(n)}function B(n){const{onScroll:o}=e;o&&o(n)}function f(n){var o;(o=s.value)===null||o===void 0||o.sync(),B(n)}function p(){var n;(n=s.value)===null||n===void 0||n.sync()}function z(){const{value:n}=u;return n||null}function $(n,o){o.disabled||P(o,!1)}function oe(n,o){o.disabled||x(o)}function te(n){var o;J(n,"action")||(o=e.onKeyup)===null||o===void 0||o.call(e,n)}function ie(n){var o;J(n,"action")||(o=e.onKeydown)===null||o===void 0||o.call(e,n)}function le(n){var o;(o=e.onMousedown)===null||o===void 0||o.call(e,n),!e.focusable&&n.preventDefault()}function ae(){const{value:n}=u;n&&P(n.getNext({loop:!0}),!0)}function re(){const{value:n}=u;n&&P(n.getPrev({loop:!0}),!0)}function P(n,o=!1){u.value=n,o&&D()}function D(){var n,o;const v=u.value;if(!v)return;const w=l.value(v.key);w!==null&&(e.virtualScroll?(n=a.value)===null||n===void 0||n.scrollTo({index:w}):(o=s.value)===null||o===void 0||o.scrollTo({index:w,elSize:F.value}))}function se(n){var o,v;!((o=t.value)===null||o===void 0)&&o.contains(n.target)&&((v=e.onFocus)===null||v===void 0||v.call(e,n))}function de(n){var o,v;!((o=t.value)===null||o===void 0)&&o.contains(n.relatedTarget)||(v=e.onBlur)===null||v===void 0||v.call(e,n)}W(H,{handleOptionMouseEnter:$,handleOptionClick:oe,valueSetRef:N,pendingTmNodeRef:u,nodePropsRef:h(e,"nodeProps"),showCheckmarkRef:h(e,"showCheckmark"),multipleRef:h(e,"multiple"),valueRef:h(e,"value"),renderLabelRef:h(e,"renderLabel"),renderOptionRef:h(e,"renderOption"),labelFieldRef:h(e,"labelField"),valueFieldRef:h(e,"valueField")}),W(Le,t),Y(()=>{const{value:n}=s;n&&n.sync()});const V=m(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:o},self:{height:v,borderRadius:w,color:ue,groupHeaderTextColor:ve,actionDividerColor:fe,optionTextColorPressed:pe,optionTextColor:ge,optionTextColorDisabled:he,optionTextColorActive:be,optionOpacityDisabled:me,optionCheckColor:ye,actionTextColor:xe,optionColorPending:ke,optionColorActive:Se,loadingColor:Re,loadingSize:Fe,optionColorActivePending:Ne,[T("optionFontSize",n)]:ze,[T("optionHeight",n)]:Me,[T("optionPadding",n)]:I}}=i.value;return{"--n-height":v,"--n-action-divider-color":fe,"--n-action-text-color":xe,"--n-bezier":o,"--n-border-radius":w,"--n-color":ue,"--n-option-font-size":ze,"--n-group-header-text-color":ve,"--n-option-check-color":ye,"--n-option-color-pending":ke,"--n-option-color-active":Se,"--n-option-color-active-pending":Ne,"--n-option-height":Me,"--n-option-opacity-disabled":me,"--n-option-text-color":ge,"--n-option-text-color-active":be,"--n-option-text-color-disabled":he,"--n-option-text-color-pressed":pe,"--n-option-padding":I,"--n-option-padding-left":j(I,"left"),"--n-option-padding-right":j(I,"right"),"--n-loading-color":Re,"--n-loading-size":Fe}}),{inlineThemeDisabled:A}=e,M=A?$e("internal-select-menu",m(()=>e.size[0]),V,e):void 0,ce={selfRef:t,next:ae,prev:re,getPendingTmNode:z};return Ge(t,e.onResize),Object.assign({mergedTheme:i,virtualListRef:a,scrollbarRef:s,itemSize:F,padding:y,flattenedNodes:c,empty:d,virtualListContainer(){const{value:n}=a;return n==null?void 0:n.listElRef},virtualListContent(){const{value:n}=a;return n==null?void 0:n.itemsElRef},doScroll:B,handleFocusin:se,handleFocusout:de,handleKeyUp:te,handleKeyDown:ie,handleMouseDown:le,handleVirtualListResize:p,handleVirtualListScroll:f,cssVars:A?void 0:V,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender},ce)},render(){const{$slots:e,virtualScroll:i,clsPrefix:t,mergedTheme:a,themeClass:s,onRender:c}=this;return c==null||c(),r("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,s,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?r("div",{class:`${t}-base-select-menu__loading`},r(Ke,{clsPrefix:t,strokeWidth:20})):this.empty?r("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Ee(e.empty,()=>[r(Ae,{theme:a.peers.Empty,themeOverrides:a.peerOverrides.Empty})])):r(je,{ref:"scrollbarRef",theme:a.peers.Scrollbar,themeOverrides:a.peerOverrides.Scrollbar,scrollable:this.scrollable,container:i?this.virtualListContainer:void 0,content:i?this.virtualListContent:void 0,onScroll:i?void 0:this.doScroll},{default:()=>i?r(Ve,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?r(X,{key:l.key,clsPrefix:t,tmNode:l}):l.ignored?null:r(Q,{clsPrefix:t,key:l.key,tmNode:l})}):r("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?r(X,{key:l.key,clsPrefix:t,tmNode:l}):r(Q,{clsPrefix:t,key:l.key,tmNode:l})))}),Ie(e.action,l=>l&&[r("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},l),r(qe,{onFocus:this.onTabOut,key:"focus-detector"})]))}});export{en as N,E as m,Ge as u};
