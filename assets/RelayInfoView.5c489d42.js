import{g as Yn}from"./user.6b6d4538.js";import{b as Jn}from"./nostr.e9b690f1.js";import{f as ee,j as x,l as bn,m as we,N as Qn,av as Zn,x as et,ap as T,bc as Je,n as A,a_ as nt,aD as $,aE as tt,dF as lt,cn as at,c8 as ot,c as K,b as oe,a as B,c6 as un,d as me,e as _e,i as Qe,u as rt,g as it,h as kn,dK as dt,aG as Se,au as _,aB as Ie,aw as xe,aK as Ze,r as z,p as st,q as ct,aH as ut,bf as fn,w as ft,bv as ht,y as G,z as Ue,A as W,H as Q,D as Me,F as Ke,C as Z,_ as gt,M as vt,br as yt,I as ce,G as ue,L as hn,J as bt,aP as kt,Q as mt,a1 as pt,aZ as xt,O as pe}from"./index.2fe28766.js";import{_ as wt,a as Rt}from"./RelayInfoView.b913d7d0.js";import{_ as Ct}from"./Checkbox.84fe0d8b.js";import{h as gn,c as Nt,f as vn,a as _t}from"./create.2deeaf6a.js";import{V as St,_ as Kt}from"./Tag.91214d1a.js";import{_ as Dt}from"./Empty.e8510f06.js";import{u as Ft}from"./composables.6f863803.js";import{_ as Lt}from"./Space.effd1d2c.js";import{_ as At}from"./Result.bdff91ac.js";import"./getCacheStaff.bf0024d4.js";import"./get-slot.4ceacf82.js";function mn(e){return typeof e=="string"?`s-${e}`:`n-${e}`}const Tt=ee({name:"Switcher",render(){return x("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},x("path",{d:"M12 8l10 8l-10 8z"}))}}),pn=bn("n-tree-select"),De=bn("n-tree"),Et=ee({name:"NTreeSwitcher",props:{clsPrefix:{type:String,required:!0},expanded:Boolean,selected:Boolean,hide:Boolean,loading:Boolean,onClick:Function},setup(e){const{renderSwitcherIconRef:l}=we(De,null);return()=>{const{clsPrefix:c}=e;return x("span",{"data-switcher":!0,class:[`${c}-tree-node-switcher`,e.expanded&&`${c}-tree-node-switcher--expanded`,e.hide&&`${c}-tree-node-switcher--hide`],onClick:e.onClick},x("div",{class:`${c}-tree-node-switcher__icon`},x(Qn,null,{default:()=>{if(e.loading)return x(Zn,{clsPrefix:c,key:"loading",radius:85,strokeWidth:20});const{value:g}=l;return g?g({expanded:e.expanded,selected:e.selected}):x(et,{clsPrefix:c,key:"switcher"},{default:()=>x(Tt,null)})}})))}}}),Pt=ee({name:"NTreeNodeCheckbox",props:{clsPrefix:{type:String,required:!0},right:Boolean,focusable:Boolean,disabled:Boolean,checked:Boolean,indeterminate:Boolean,onCheck:Function},setup(e){const l=we(De);function c(d){const{onCheck:r}=e;if(r)return r(d)}function g(d){e.indeterminate?c(!1):c(d)}return{handleUpdateValue:g,mergedTheme:l.mergedThemeRef}},render(){const{clsPrefix:e,mergedTheme:l,checked:c,indeterminate:g,disabled:d,focusable:r,handleUpdateValue:h}=this;return x("span",{class:[`${e}-tree-node-checkbox`,this.right&&`${e}-tree-node-checkbox--right`],"data-checkbox":!0},x(Ct,{focusable:r,disabled:d,theme:l.peers.Checkbox,themeOverrides:l.peerOverrides.Checkbox,checked:c,indeterminate:g,onUpdateChecked:h}))}}),Bt=ee({name:"TreeNodeContent",props:{clsPrefix:{type:String,required:!0},disabled:Boolean,checked:Boolean,selected:Boolean,onClick:Function,onDragstart:Function,tmNode:{type:Object,required:!0},nodeProps:Object},setup(e){const{renderLabelRef:l,renderPrefixRef:c,renderSuffixRef:g,labelFieldRef:d}=we(De),r=T(null);function h(v){const{onClick:b}=e;b&&b(v)}function p(v){h(v)}return{selfRef:r,renderLabel:l,renderPrefix:c,renderSuffix:g,labelField:d,handleClick:p}},render(){const{clsPrefix:e,labelField:l,nodeProps:c,checked:g=!1,selected:d=!1,renderLabel:r,renderPrefix:h,renderSuffix:p,handleClick:v,onDragstart:b,tmNode:{rawNode:y,rawNode:{prefix:w,suffix:k,[l]:a}}}=this;return x("span",Object.assign({},c,{ref:"selfRef",class:[`${e}-tree-node-content`,c==null?void 0:c.class],onClick:v,draggable:b===void 0?void 0:!0,onDragstart:b}),h||w?x("div",{class:`${e}-tree-node-content__prefix`},h?h({option:y,selected:d,checked:g}):Je(w)):null,x("div",{class:`${e}-tree-node-content__text`},r?r({option:y,selected:d,checked:g}):Je(a)),p||k?x("div",{class:`${e}-tree-node-content__suffix`},p?p({option:y,selected:d,checked:g}):Je(k)):null)}});function yn({position:e,offsetLevel:l,indent:c,el:g}){const d={position:"absolute",boxSizing:"border-box",right:0};if(e==="inside")d.left=0,d.top=0,d.bottom=0,d.borderRadius="inherit",d.boxShadow="inset 0 0 0 2px var(--n-drop-mark-color)";else{const r=e==="before"?"top":"bottom";d[r]=0,d.left=`${g.offsetLeft+6-l*c}px`,d.height="2px",d.backgroundColor="var(--n-drop-mark-color)",d.transformOrigin=r,d.borderRadius="1px",d.transform=e==="before"?"translateY(-4px)":"translateY(4px)"}return x("div",{style:d})}function Ot({dropPosition:e,node:l}){return l.isLeaf===!1||l.children?!0:e!=="inside"}function It(e){return A(()=>e.leafOnly?"child":e.checkStrategy)}function re(e,l){return!!e.rawNode[l]}function xn(e,l,c,g){e==null||e.forEach(d=>{c(d),xn(d[l],l,c,g),g(d)})}function $t(e,l,c,g,d){const r=new Set,h=new Set,p=[];return xn(e,g,v=>{if(p.push(v),d(l,v)){h.add(v[c]);for(let b=p.length-2;b>=0;--b)if(!r.has(p[b][c]))r.add(p[b][c]);else return}},()=>{p.pop()}),{expandedKeys:Array.from(r),highlightKeySet:h}}if(nt&&Image){const e=new Image;e.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}function Ut(e,l,c,g,d){const r=new Set,h=new Set,p=new Set,v=[],b=[],y=[];function w(a){a.forEach(u=>{if(y.push(u),l(c,u)){r.add(u[g]),p.add(u[g]);for(let R=y.length-2;R>=0;--R){const F=y[R][g];if(!h.has(F))h.add(F),r.has(F)&&r.delete(F);else break}}const m=u[d];m&&w(m),y.pop()})}w(e);function k(a,u){a.forEach(m=>{const R=m[g],F=r.has(R),S=h.has(R);if(!F&&!S)return;const U=m[d];if(U)if(F)u.push(m);else{v.push(R);const E=Object.assign(Object.assign({},m),{[d]:[]});u.push(E),k(U,E[d])}else u.push(m)})}return k(e,b),{filteredTree:b,highlightKeySet:p,expandedKeys:v}}const Mt=ee({name:"TreeNode",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const l=we(De),{droppingNodeParentRef:c,droppingMouseNodeRef:g,draggingNodeRef:d,droppingPositionRef:r,droppingOffsetLevelRef:h,nodePropsRef:p,indentRef:v,blockLineRef:b,checkboxPlacementRef:y,checkOnClickRef:w,disabledFieldRef:k}=l,a=$(()=>!!e.tmNode.rawNode.checkboxDisabled),u=$(()=>re(e.tmNode,k.value)),m=$(()=>l.disabledRef.value||u.value),R=A(()=>{const{value:i}=p;if(!!i)return i({option:e.tmNode.rawNode})}),F=T(null),S={value:null};tt(()=>{S.value=F.value.$el});function U(){const{tmNode:i}=e;if(!i.isLeaf&&!i.shallowLoaded){if(!l.loadingKeysRef.value.has(i.key))l.loadingKeysRef.value.add(i.key);else return;const{onLoadRef:{value:C}}=l;C&&C(i.rawNode).then(D=>{D!==!1&&l.handleSwitcherClick(i)}).finally(()=>{l.loadingKeysRef.value.delete(i.key)})}else l.handleSwitcherClick(i)}const E=$(()=>!u.value&&l.selectableRef.value&&(l.internalTreeSelect?l.mergedCheckStrategyRef.value!=="child"||l.multipleRef.value&&l.cascadeRef.value||e.tmNode.isLeaf:!0)),H=$(()=>l.checkableRef.value&&(l.cascadeRef.value||l.mergedCheckStrategyRef.value!=="child"||e.tmNode.isLeaf)),M=$(()=>l.displayedCheckedKeysRef.value.includes(e.tmNode.key)),ie=$(()=>{const{value:i}=H;if(!i)return!1;const{value:C}=w;return typeof C=="boolean"?C:C(e.tmNode.rawNode)});function X(i){const{value:C}=l.expandOnClickRef,{value:D}=E,{value:ge}=ie;if(!D&&!C&&!ge||gn(i,"checkbox")||gn(i,"switcher"))return;const{tmNode:Le}=e;D&&l.handleSelect(Le),C&&!Le.isLeaf&&U(),ge&&he(!M.value)}function je(i){var C,D;b.value||(m.value||X(i),(D=(C=R.value)===null||C===void 0?void 0:C.onClick)===null||D===void 0||D.call(C,i))}function fe(i){var C,D;!b.value||(m.value||X(i),(D=(C=R.value)===null||C===void 0?void 0:C.onClick)===null||D===void 0||D.call(C,i))}function he(i){l.handleCheck(e.tmNode,i)}function Fe(i){l.handleDragStart({event:i,node:e.tmNode})}function ze(i){i.currentTarget===i.target&&l.handleDragEnter({event:i,node:e.tmNode})}function q(i){i.preventDefault(),l.handleDragOver({event:i,node:e.tmNode})}function ne(i){l.handleDragEnd({event:i,node:e.tmNode})}function te(i){i.currentTarget===i.target&&l.handleDragLeave({event:i,node:e.tmNode})}function Ve(i){i.preventDefault(),r.value!==null&&l.handleDrop({event:i,node:e.tmNode,dropPosition:r.value})}return{showDropMark:$(()=>{const{value:i}=d;if(!i)return;const{value:C}=r;if(!C)return;const{value:D}=g;if(!D)return;const{tmNode:ge}=e;return ge.key===D.key}),showDropMarkAsParent:$(()=>{const{value:i}=c;if(!i)return!1;const{tmNode:C}=e,{value:D}=r;return D==="before"||D==="after"?i.key===C.key:!1}),pending:$(()=>l.pendingNodeKeyRef.value===e.tmNode.key),loading:$(()=>l.loadingKeysRef.value.has(e.tmNode.key)),highlight:$(()=>{var i;return(i=l.highlightKeySetRef.value)===null||i===void 0?void 0:i.has(e.tmNode.key)}),checked:M,indeterminate:$(()=>l.displayedIndeterminateKeysRef.value.includes(e.tmNode.key)),selected:$(()=>l.mergedSelectedKeysRef.value.includes(e.tmNode.key)),expanded:$(()=>l.mergedExpandedKeysRef.value.includes(e.tmNode.key)),disabled:m,checkable:H,mergedCheckOnClick:ie,checkboxDisabled:a,selectable:E,expandOnClick:l.expandOnClickRef,internalScrollable:l.internalScrollableRef,draggable:l.draggableRef,blockLine:b,nodeProps:R,checkboxFocusable:l.internalCheckboxFocusableRef,droppingPosition:r,droppingOffsetLevel:h,indent:v,checkboxPlacement:y,contentInstRef:F,contentElRef:S,handleCheck:he,handleDrop:Ve,handleDragStart:Fe,handleDragEnter:ze,handleDragOver:q,handleDragEnd:ne,handleDragLeave:te,handleLineClick:fe,handleContentClick:je,handleSwitcherClick:U}},render(){const{tmNode:e,clsPrefix:l,checkable:c,expandOnClick:g,selectable:d,selected:r,checked:h,highlight:p,draggable:v,blockLine:b,indent:y,disabled:w,pending:k,internalScrollable:a,nodeProps:u,checkboxPlacement:m}=this,R=v&&!w?{onDragenter:this.handleDragEnter,onDragleave:this.handleDragLeave,onDragend:this.handleDragEnd,onDrop:this.handleDrop,onDragover:this.handleDragOver}:void 0,F=a?mn(e.key):void 0,S=m==="right",U=c?x(Pt,{right:S,focusable:this.checkboxFocusable,disabled:w||this.checkboxDisabled,clsPrefix:l,checked:this.checked,indeterminate:this.indeterminate,onCheck:this.handleCheck}):null;return x("div",Object.assign({class:`${l}-tree-node-wrapper`},R),x("div",Object.assign({},b?u:void 0,{class:[`${l}-tree-node`,{[`${l}-tree-node--selected`]:r,[`${l}-tree-node--checkable`]:c,[`${l}-tree-node--highlight`]:p,[`${l}-tree-node--pending`]:k,[`${l}-tree-node--disabled`]:w,[`${l}-tree-node--selectable`]:d,[`${l}-tree-node--clickable`]:d||g||this.mergedCheckOnClick},u==null?void 0:u.class],"data-key":F,draggable:v&&b,onClick:this.handleLineClick,onDragstart:v&&b&&!w?this.handleDragStart:void 0}),lt(e.level,x("div",{class:`${l}-tree-node-indent`},x("div",{style:{width:`${y}px`}}))),x(Et,{clsPrefix:l,expanded:this.expanded,selected:r,loading:this.loading,hide:e.isLeaf,onClick:this.handleSwitcherClick}),S?null:U,x(Bt,{ref:"contentInstRef",clsPrefix:l,checked:h,selected:r,onClick:this.handleContentClick,nodeProps:b?void 0:u,onDragstart:v&&!b&&!w?this.handleDragStart:void 0,tmNode:e}),v?this.showDropMark?yn({el:this.contentElRef.value,position:this.droppingPosition,offsetLevel:this.droppingOffsetLevel,indent:y}):this.showDropMarkAsParent?yn({el:this.contentElRef.value,position:"inside",offsetLevel:this.droppingOffsetLevel,indent:y}):null:null,S?U:null))}}),wn=Mt;function jt({props:e,fNodesRef:l,mergedExpandedKeysRef:c,mergedSelectedKeysRef:g,handleSelect:d,handleSwitcherClick:r}){const{value:h}=g,p=we(pn,null),v=p?p.pendingNodeKeyRef:T(h.length?h[h.length-1]:null);function b(y){if(!e.keyboard)return;const{value:w}=v;if(w===null){if((y.key==="ArrowDown"||y.key==="ArrowUp")&&y.preventDefault(),["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(y.key)&&w===null){const{value:k}=l;let a=0;for(;a<k.length;){if(!k[a].disabled){v.value=k[a].key;break}a+=1}}}else{const{value:k}=l;let a=k.findIndex(u=>u.key===w);if(!~a)return;if(y.key==="Enter")d(k[a]);else if(y.key==="ArrowDown")for(y.preventDefault(),a+=1;a<k.length;){if(!k[a].disabled){v.value=k[a].key;break}a+=1}else if(y.key==="ArrowUp")for(y.preventDefault(),a-=1;a>=0;){if(!k[a].disabled){v.value=k[a].key;break}a-=1}else if(y.key==="ArrowLeft"){const u=k[a];if(u.isLeaf||!c.value.includes(w)){const m=u.getParent();m&&(v.value=m.key)}else r(u)}else if(y.key==="ArrowRight"){const u=k[a];if(u.isLeaf)return;if(!c.value.includes(w))r(u);else for(a+=1;a<k.length;){if(!k[a].disabled){v.value=k[a].key;break}a+=1}}}}return{pendingNodeKeyRef:v,handleKeydown:b}}const zt=ee({name:"TreeMotionWrapper",props:{clsPrefix:{type:String,required:!0},height:Number,nodes:{type:Array,required:!0},mode:{type:String,required:!0},onAfterEnter:{type:Function,required:!0}},render(){const{clsPrefix:e}=this;return x(ot,{onAfterEnter:this.onAfterEnter,appear:!0,reverse:this.mode==="collapse"},{default:()=>x("div",{class:[`${e}-tree-motion-wrapper`,`${e}-tree-motion-wrapper--${this.mode}`],style:{height:at(this.height)}},this.nodes.map(l=>x(wn,{clsPrefix:e,tmNode:l})))})}}),Vt=K("tree",`
 font-size: var(--n-font-size);
 outline: none;
`,[oe("ul, li",`
 margin: 0;
 padding: 0;
 list-style: none;
 `),oe(">",[K("tree-node",[oe("&:first-child",{marginTop:0})])]),K("tree-node-indent",`
 flex-grow: 0;
 flex-shrink: 0;
 height: 0;
 `),K("tree-motion-wrapper",[B("expand",[un({duration:"0.2s"})]),B("collapse",[un({duration:"0.2s",reverse:!0})])]),K("tree-node-wrapper",`
 box-sizing: border-box;
 padding: 3px 0;
 `),K("tree-node",`
 transform: translate3d(0,0,0);
 position: relative;
 display: flex;
 border-radius: var(--n-node-border-radius);
 transition: background-color .3s var(--n-bezier);
 `,[B("highlight",[K("tree-node-content",[me("text",{borderBottomColor:"var(--n-node-text-color-disabled)"})])]),B("disabled",[K("tree-node-content",`
 color: var(--n-node-text-color-disabled);
 cursor: not-allowed;
 `)]),_e("disabled",[B("clickable",[K("tree-node-content",`
 cursor: pointer;
 `)])])]),B("block-node",[K("tree-node-content",`
 flex: 1;
 min-width: 0;
 `)]),_e("block-line",[K("tree-node",[_e("disabled",[K("tree-node-content",[oe("&:hover",{backgroundColor:"var(--n-node-color-hover)"})]),B("selectable",[K("tree-node-content",[oe("&:active",{backgroundColor:"var(--n-node-color-pressed)"})])]),B("pending",[K("tree-node-content",`
 background-color: var(--n-node-color-hover);
 `)]),B("selected",[K("tree-node-content",{backgroundColor:"var(--n-node-color-active)"})])])])]),B("block-line",[K("tree-node",[_e("disabled",[oe("&:hover",{backgroundColor:"var(--n-node-color-hover)"}),B("pending",`
 background-color: var(--n-node-color-hover);
 `),B("selectable",[_e("selected",[oe("&:active",{backgroundColor:"var(--n-node-color-pressed)"})])]),B("selected",{backgroundColor:"var(--n-node-color-active)"})]),B("disabled",`
 cursor: not-allowed;
 `)])]),K("tree-node-switcher",`
 cursor: pointer;
 display: inline-flex;
 flex-shrink: 0;
 height: 24px;
 width: 24px;
 align-items: center;
 justify-content: center;
 transition: transform .15s var(--n-bezier);
 vertical-align: bottom;
 `,[me("icon",`
 position: relative;
 height: 14px;
 width: 14px;
 display: flex;
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 font-size: 14px;
 `,[K("icon",[Qe()]),K("base-loading",`
 color: var(--n-loading-color);
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[Qe()]),K("base-icon",[Qe()])]),B("hide",{visibility:"hidden"}),B("expanded",{transform:"rotate(90deg)"})]),K("tree-node-checkbox",`
 display: inline-flex;
 height: 24px;
 width: 16px;
 vertical-align: bottom;
 align-items: center;
 justify-content: center;
 margin-right: 4px;
 `,[B("right","margin-left: 4px;")]),B("checkable",[K("tree-node-content",`
 padding: 0 6px;
 `)]),K("tree-node-content",`
 position: relative;
 display: inline-flex;
 align-items: center;
 min-height: 24px;
 box-sizing: border-box;
 line-height: 1.5;
 vertical-align: bottom;
 padding: 0 6px 0 4px;
 cursor: default;
 border-radius: var(--n-node-border-radius);
 text-decoration-color: #0000;
 text-decoration-line: underline;
 color: var(--n-node-text-color);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[oe("&:last-child",{marginBottom:0}),me("prefix",`
 display: inline-flex;
 margin-right: 8px;
 `),me("text",`
 border-bottom: 1px solid #0000;
 transition: border-color .3s var(--n-bezier);
 flex-grow: 1;
 max-width: 100%;
 `),me("suffix",`
 display: inline-flex;
 `)]),me("empty","margin: auto;")]);var Ht=globalThis&&globalThis.__awaiter||function(e,l,c,g){function d(r){return r instanceof c?r:new c(function(h){h(r)})}return new(c||(c=Promise))(function(r,h){function p(y){try{b(g.next(y))}catch(w){h(w)}}function v(y){try{b(g.throw(y))}catch(w){h(w)}}function b(y){y.done?r(y.value):d(y.value).then(p,v)}b((g=g.apply(e,l||[])).next())})};const $e=30;function qt(e,l,c,g){return{getIsGroup(){return!1},getKey(r){return r[e]},getChildren:g||(r=>r[l]),getDisabled(r){return!!(r[c]||r.checkboxDisabled)}}}const Gt={allowCheckingNotLoaded:Boolean,filter:Function,defaultExpandAll:Boolean,expandedKeys:Array,keyField:{type:String,default:"key"},labelField:{type:String,default:"label"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandedKeys:{type:Array,default:()=>[]},indeterminateKeys:Array,renderSwitcherIcon:Function,onUpdateIndeterminateKeys:[Function,Array],"onUpdate:indeterminateKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],"onUpdate:expandedKeys":[Function,Array]},Wt=Object.assign(Object.assign(Object.assign(Object.assign({},kn.props),{accordion:Boolean,showIrrelevantNodes:{type:Boolean,default:!0},data:{type:Array,default:()=>[]},expandOnDragenter:{type:Boolean,default:!0},expandOnClick:Boolean,checkOnClick:{type:[Boolean,Function],default:!1},cancelable:{type:Boolean,default:!0},checkable:Boolean,draggable:Boolean,blockNode:Boolean,blockLine:Boolean,disabled:Boolean,checkedKeys:Array,defaultCheckedKeys:{type:Array,default:()=>[]},selectedKeys:Array,defaultSelectedKeys:{type:Array,default:()=>[]},multiple:Boolean,pattern:{type:String,default:""},onLoad:Function,cascade:Boolean,selectable:{type:Boolean,default:!0},indent:{type:Number,default:16},allowDrop:{type:Function,default:Ot},animated:{type:Boolean,default:!0},checkboxPlacement:{type:String,default:"left"},virtualScroll:Boolean,watchProps:Array,renderLabel:Function,renderPrefix:Function,renderSuffix:Function,nodeProps:Function,keyboard:{type:Boolean,default:!0},getChildren:Function,onDragenter:[Function,Array],onDragleave:[Function,Array],onDragend:[Function,Array],onDragstart:[Function,Array],onDragover:[Function,Array],onDrop:[Function,Array],onUpdateCheckedKeys:[Function,Array],"onUpdate:checkedKeys":[Function,Array],onUpdateSelectedKeys:[Function,Array],"onUpdate:selectedKeys":[Function,Array]}),Gt),{internalTreeSelect:Boolean,internalScrollable:Boolean,internalScrollablePadding:String,internalRenderEmpty:Function,internalHighlightKeySet:Object,internalUnifySelectCheck:Boolean,internalCheckboxFocusable:{type:Boolean,default:!0},internalFocusable:{type:Boolean,default:!0},checkStrategy:{type:String,default:"all"},leafOnly:Boolean}),Xt=ee({name:"Tree",props:Wt,setup(e){const{mergedClsPrefixRef:l,inlineThemeDisabled:c,mergedRtlRef:g}=rt(e),d=it("Tree",g,l),r=kn("Tree","-tree",Vt,dt,e,l),h=T(null),p=T(null),v=T(null);function b(){var n;return(n=v.value)===null||n===void 0?void 0:n.listElRef}function y(){var n;return(n=v.value)===null||n===void 0?void 0:n.itemsElRef}const w=A(()=>{const{filter:n}=e;if(n)return n;const{labelField:t}=e;return(o,s)=>{if(!o.length)return!0;const f=s[t];return typeof f=="string"?f.toLowerCase().includes(o.toLowerCase()):!1}}),k=A(()=>{const{pattern:n}=e;return n?!n.length||!w.value?{filteredTree:e.data,highlightKeySet:null,expandedKeys:void 0}:Ut(e.data,w.value,n,e.keyField,e.childrenField):{filteredTree:e.data,highlightKeySet:null,expandedKeys:void 0}}),a=A(()=>Nt(e.showIrrelevantNodes?e.data:k.value.filteredTree,qt(e.keyField,e.childrenField,e.disabledField,e.getChildren))),u=we(pn,null),m=e.internalTreeSelect?u.dataTreeMate:a,{watchProps:R}=e,F=T([]);R!=null&&R.includes("defaultCheckedKeys")?Se(()=>{F.value=e.defaultCheckedKeys}):F.value=e.defaultCheckedKeys;const S=_(e,"checkedKeys"),U=Ie(S,F),E=A(()=>m.value.getCheckedKeys(U.value,{cascade:e.cascade,allowNotLoaded:e.allowCheckingNotLoaded})),H=It(e),M=A(()=>E.value.checkedKeys),ie=A(()=>{const{indeterminateKeys:n}=e;return n!==void 0?n:E.value.indeterminateKeys}),X=T([]);R!=null&&R.includes("defaultSelectedKeys")?Se(()=>{X.value=e.defaultSelectedKeys}):X.value=e.defaultSelectedKeys;const je=_(e,"selectedKeys"),fe=Ie(je,X),he=T([]),Fe=n=>{he.value=e.defaultExpandAll?m.value.getNonLeafKeys():n===void 0?e.defaultExpandedKeys:n};R!=null&&R.includes("defaultExpandedKeys")?Se(()=>Fe(void 0)):Se(()=>Fe(e.defaultExpandedKeys));const ze=_(e,"expandedKeys"),q=Ie(ze,he),ne=A(()=>a.value.getFlattenedNodes(q.value)),{pendingNodeKeyRef:te,handleKeydown:Ve}=jt({props:e,mergedSelectedKeysRef:fe,fNodesRef:ne,mergedExpandedKeysRef:q,handleSelect:We,handleSwitcherClick:an});let i=null,C=null;const D=T(new Set),ge=A(()=>e.internalHighlightKeySet||k.value.highlightKeySet),Le=Ie(ge,D),Ae=T(new Set),Rn=A(()=>q.value.filter(n=>!Ae.value.has(n)));let en=0;const Re=T(null),Te=T(null),Ee=T(null),Pe=T(null),Be=T(0),Cn=A(()=>{const{value:n}=Te;return n?n.parent:null});xe(_(e,"data"),()=>{Ae.value.clear(),te.value=null,Ne()},{deep:!1});let He=!1;const qe=()=>{He=!0,Ze(()=>{He=!1})};let Ce;xe(_(e,"pattern"),(n,t)=>{if(e.showIrrelevantNodes)if(Ce=void 0,n){const{expandedKeys:o,highlightKeySet:s}=$t(e.data,e.pattern,e.keyField,e.childrenField,w.value);D.value=s,qe(),ye(o,V(o),{node:null,action:"filter"})}else D.value=new Set;else if(!n.length)Ce!==void 0&&(qe(),ye(Ce,V(Ce),{node:null,action:"filter"}));else{t.length||(Ce=q.value);const{expandedKeys:o}=k.value;o!==void 0&&(qe(),ye(o,V(o),{node:null,action:"filter"}))}});function nn(n){return Ht(this,void 0,void 0,function*(){const{onLoad:t}=e;if(!t)return yield Promise.resolve();const{value:o}=Ae;if(!o.has(n.key)){o.add(n.key);try{(yield t(n.rawNode))===!1&&be()}catch(s){console.error(s),be()}o.delete(n.key)}})}Se(()=>{var n;const{value:t}=a;if(!t)return;const{getNode:o}=t;(n=q.value)===null||n===void 0||n.forEach(s=>{const f=o(s);f&&!f.shallowLoaded&&nn(f)})});const ve=T(!1),le=T([]);xe(Rn,(n,t)=>{if(!e.animated||He){Ze(Oe);return}const o=new Set(t);let s=null,f=null;for(const L of n)if(!o.has(L)){if(s!==null)return;s=L}const O=new Set(n);for(const L of t)if(!O.has(L)){if(f!==null)return;f=L}if(s===null&&f===null)return;const{virtualScroll:P}=e,J=(P?v.value.listElRef:h.value).offsetHeight,se=Math.ceil(J/$e)+1;let Y;if(s!==null&&(Y=t),f!==null&&(Y===void 0?Y=n:Y=Y.filter(L=>L!==f)),ve.value=!0,le.value=a.value.getFlattenedNodes(Y),s!==null){const L=le.value.findIndex(I=>I.key===s);if(~L){const I=le.value[L].children;if(I){const ae=vn(I,n);le.value.splice(L+1,0,{__motion:!0,mode:"expand",height:P?ae.length*$e:void 0,nodes:P?ae.slice(0,se):ae})}}}if(f!==null){const L=le.value.findIndex(I=>I.key===f);if(~L){const I=le.value[L].children;if(!I)return;ve.value=!0;const ae=vn(I,n);le.value.splice(L+1,0,{__motion:!0,mode:"collapse",height:P?ae.length*$e:void 0,nodes:P?ae.slice(0,se):ae})}}});const Nn=A(()=>_t(ne.value)),_n=A(()=>ve.value?le.value:ne.value);function Oe(){const{value:n}=p;n&&n.sync()}function Sn(){ve.value=!1,e.virtualScroll&&Ze(Oe)}function V(n){const{getNode:t}=m.value;return n.map(o=>{var s;return((s=t(o))===null||s===void 0?void 0:s.rawNode)||null})}function ye(n,t,o){const{"onUpdate:expandedKeys":s,onUpdateExpandedKeys:f}=e;he.value=n,s&&z(s,n,t,o),f&&z(f,n,t,o)}function tn(n,t,o){const{"onUpdate:checkedKeys":s,onUpdateCheckedKeys:f}=e;F.value=n,f&&z(f,n,t,o),s&&z(s,n,t,o)}function Kn(n,t){const{"onUpdate:indeterminateKeys":o,onUpdateIndeterminateKeys:s}=e;o&&z(o,n,t),s&&z(s,n,t)}function Ge(n,t,o){const{"onUpdate:selectedKeys":s,onUpdateSelectedKeys:f}=e;X.value=n,f&&z(f,n,t,o),s&&z(s,n,t,o)}function Dn(n){const{onDragenter:t}=e;t&&z(t,n)}function Fn(n){const{onDragleave:t}=e;t&&z(t,n)}function Ln(n){const{onDragend:t}=e;t&&z(t,n)}function An(n){const{onDragstart:t}=e;t&&z(t,n)}function Tn(n){const{onDragover:t}=e;t&&z(t,n)}function En(n){const{onDrop:t}=e;t&&z(t,n)}function Ne(){Pn(),de()}function Pn(){Re.value=null}function de(){Be.value=0,Te.value=null,Ee.value=null,Pe.value=null,be()}function be(){i&&(window.clearTimeout(i),i=null),C=null}function ln(n,t){if(e.disabled||re(n,e.disabledField))return;if(e.internalUnifySelectCheck&&!e.multiple){We(n);return}const o=t?"check":"uncheck",{checkedKeys:s,indeterminateKeys:f}=m.value[o](n.key,M.value,{cascade:e.cascade,checkStrategy:H.value,allowNotLoaded:e.allowCheckingNotLoaded});tn(s,V(s),{node:n.rawNode,action:o}),Kn(f,V(f))}function Bn(n){if(e.disabled)return;const{key:t}=n,{value:o}=q,s=o.findIndex(f=>f===t);if(~s){const f=Array.from(o);f.splice(s,1),ye(f,V(f),{node:n.rawNode,action:"collapse"})}else{const f=a.value.getNode(t);if(!f||f.isLeaf)return;let O;if(e.accordion){const P=new Set(n.siblings.map(({key:J})=>J));O=o.filter(J=>!P.has(J)),O.push(t)}else O=o.concat(t);ye(O,V(O),{node:n.rawNode,action:"expand"})}}function an(n){e.disabled||ve.value||Bn(n)}function We(n){if(!(e.disabled||!e.selectable)){if(te.value=n.key,e.internalUnifySelectCheck){const{value:{checkedKeys:t,indeterminateKeys:o}}=E;e.multiple?ln(n,!(t.includes(n.key)||o.includes(n.key))):tn([n.key],V([n.key]),{node:n.rawNode,action:"check"})}if(e.multiple){const t=Array.from(fe.value),o=t.findIndex(s=>s===n.key);~o?e.cancelable&&t.splice(o,1):~o||t.push(n.key),Ge(t,V(t),{node:n.rawNode,action:~o?"unselect":"select"})}else fe.value.includes(n.key)?e.cancelable&&Ge([],[],{node:n.rawNode,action:"unselect"}):Ge([n.key],V([n.key]),{node:n.rawNode,action:"select"})}}function On(n){if(i&&(window.clearTimeout(i),i=null),n.isLeaf)return;C=n.key;const t=()=>{if(C!==n.key)return;const{value:o}=Ee;if(o&&o.key===n.key&&!q.value.includes(n.key)){const s=q.value.concat(n.key);ye(s,V(s),{node:n.rawNode,action:"expand"})}i=null,C=null};n.shallowLoaded?i=window.setTimeout(()=>{t()},1e3):i=window.setTimeout(()=>{nn(n).then(()=>{t()})},1e3)}function In({event:n,node:t}){!e.draggable||e.disabled||re(t,e.disabledField)||(on({event:n,node:t},!1),Dn({event:n,node:t.rawNode}))}function $n({event:n,node:t}){!e.draggable||e.disabled||re(t,e.disabledField)||Fn({event:n,node:t.rawNode})}function Un(n){n.target===n.currentTarget&&de()}function Mn({event:n,node:t}){Ne(),!(!e.draggable||e.disabled||re(t,e.disabledField))&&Ln({event:n,node:t.rawNode})}function jn({event:n,node:t}){!e.draggable||e.disabled||re(t,e.disabledField)||(en=n.clientX,Re.value=t,An({event:n,node:t.rawNode}))}function on({event:n,node:t},o=!0){var s;if(!e.draggable||e.disabled||re(t,e.disabledField))return;const{value:f}=Re;if(!f)return;const{allowDrop:O,indent:P}=e;o&&Tn({event:n,node:t.rawNode});const J=n.currentTarget,{height:se,top:Y}=J.getBoundingClientRect(),L=n.clientY-Y;let I;O({node:t.rawNode,dropPosition:"inside",phase:"drag"})?L<=8?I="before":L>=se-8?I="after":I="inside":L<=se/2?I="before":I="after";const{value:Xn}=Nn;let N,j;const Xe=Xn(t.key);if(Xe===null){de();return}let dn=!1;I==="inside"?(N=t,j="inside"):I==="before"?t.isFirstChild?(N=t,j="before"):(N=ne.value[Xe-1],j="after"):(N=t,j="after"),!N.isLeaf&&q.value.includes(N.key)&&(dn=!0,j==="after"&&(N=ne.value[Xe+1],N?j="before":(N=t,j="inside")));const sn=N;if(Ee.value=sn,!dn&&f.isLastChild&&f.key===N.key&&(j="after"),j==="after"){let cn=en-n.clientX,Ye=0;for(;cn>=P/2&&N.parent!==null&&N.isLastChild&&Ye<1;)cn-=P,Ye+=1,N=N.parent;Be.value=Ye}else Be.value=0;if((f.contains(N)||j==="inside"&&((s=f.parent)===null||s===void 0?void 0:s.key)===N.key)&&!(f.key===sn.key&&f.key===N.key)){de();return}if(!O({node:N.rawNode,dropPosition:j,phase:"drag"})){de();return}if(f.key===N.key)be();else if(C!==N.key)if(j==="inside"){if(e.expandOnDragenter){if(On(N),!N.shallowLoaded&&C!==N.key){Ne();return}}else if(!N.shallowLoaded){Ne();return}}else be();else j!=="inside"&&be();Pe.value=j,Te.value=N}function zn({event:n,node:t,dropPosition:o}){if(!e.draggable||e.disabled||re(t,e.disabledField))return;const{value:s}=Re,{value:f}=Te,{value:O}=Pe;if(!(!s||!f||!O)&&!!e.allowDrop({node:f.rawNode,dropPosition:O,phase:"drag"})&&s.key!==f.key){if(O==="before"){const P=s.getNext({includeDisabled:!0});if(P&&P.key===f.key){de();return}}if(O==="after"){const P=s.getPrev({includeDisabled:!0});if(P&&P.key===f.key){de();return}}En({event:n,node:f.rawNode,dragNode:s.rawNode,dropPosition:o}),Ne()}}function Vn(){Oe()}function Hn(){Oe()}function qn(n){var t;if(e.virtualScroll||e.internalScrollable){const{value:o}=p;if(!((t=o==null?void 0:o.containerRef)===null||t===void 0)&&t.contains(n.relatedTarget))return;te.value=null}else{const{value:o}=h;if(o!=null&&o.contains(n.relatedTarget))return;te.value=null}}xe(te,n=>{var t,o;if(n!==null){if(e.virtualScroll)(t=v.value)===null||t===void 0||t.scrollTo({key:n});else if(e.internalScrollable){const{value:s}=p;if(s===null)return;const f=(o=s.contentRef)===null||o===void 0?void 0:o.querySelector(`[data-key="${mn(n)}"]`);if(!f)return;s.scrollTo({el:f})}}}),st(De,{loadingKeysRef:Ae,highlightKeySetRef:Le,displayedCheckedKeysRef:M,displayedIndeterminateKeysRef:ie,mergedSelectedKeysRef:fe,mergedExpandedKeysRef:q,mergedThemeRef:r,mergedCheckStrategyRef:H,nodePropsRef:_(e,"nodeProps"),disabledRef:_(e,"disabled"),checkableRef:_(e,"checkable"),selectableRef:_(e,"selectable"),expandOnClickRef:_(e,"expandOnClick"),onLoadRef:_(e,"onLoad"),draggableRef:_(e,"draggable"),blockLineRef:_(e,"blockLine"),indentRef:_(e,"indent"),cascadeRef:_(e,"cascade"),checkOnClickRef:_(e,"checkOnClick"),checkboxPlacementRef:e.checkboxPlacement,droppingMouseNodeRef:Ee,droppingNodeParentRef:Cn,draggingNodeRef:Re,droppingPositionRef:Pe,droppingOffsetLevelRef:Be,fNodesRef:ne,pendingNodeKeyRef:te,disabledFieldRef:_(e,"disabledField"),internalScrollableRef:_(e,"internalScrollable"),internalCheckboxFocusableRef:_(e,"internalCheckboxFocusable"),internalTreeSelect:e.internalTreeSelect,renderLabelRef:_(e,"renderLabel"),renderPrefixRef:_(e,"renderPrefix"),renderSuffixRef:_(e,"renderSuffix"),renderSwitcherIconRef:_(e,"renderSwitcherIcon"),labelFieldRef:_(e,"labelField"),multipleRef:_(e,"multiple"),handleSwitcherClick:an,handleDragEnd:Mn,handleDragEnter:In,handleDragLeave:$n,handleDragStart:jn,handleDrop:zn,handleDragOver:on,handleSelect:We,handleCheck:ln});function Gn(n){var t;(t=v.value)===null||t===void 0||t.scrollTo(n)}const Wn={handleKeydown:Ve,scrollTo:Gn,getCheckedData:()=>{if(!e.checkable)return{keys:[],options:[]};const{checkedKeys:n}=E.value;return{keys:n,options:V(n)}},getIndeterminateData:()=>{if(!e.checkable)return{keys:[],options:[]};const{indeterminateKeys:n}=E.value;return{keys:n,options:V(n)}}},rn=A(()=>{const{common:{cubicBezierEaseInOut:n},self:{fontSize:t,nodeBorderRadius:o,nodeColorHover:s,nodeColorPressed:f,nodeColorActive:O,arrowColor:P,loadingColor:J,nodeTextColor:se,nodeTextColorDisabled:Y,dropMarkColor:L}}=r.value;return{"--n-arrow-color":P,"--n-loading-color":J,"--n-bezier":n,"--n-font-size":t,"--n-node-border-radius":o,"--n-node-color-active":O,"--n-node-color-hover":s,"--n-node-color-pressed":f,"--n-node-text-color":se,"--n-node-text-color-disabled":Y,"--n-drop-mark-color":L}}),ke=c?ct("tree",void 0,rn,e):void 0;return Object.assign(Object.assign({},Wn),{mergedClsPrefix:l,mergedTheme:r,rtlEnabled:d,fNodes:_n,aip:ve,selfElRef:h,virtualListInstRef:v,scrollbarInstRef:p,handleFocusout:qn,handleDragLeaveTree:Un,handleScroll:Vn,getScrollContainer:b,getScrollContent:y,handleAfterEnter:Sn,handleResize:Hn,cssVars:c?void 0:rn,themeClass:ke==null?void 0:ke.themeClass,onRender:ke==null?void 0:ke.onRender})},render(){var e;const{fNodes:l,internalRenderEmpty:c}=this;if(!l.length&&c)return c();const{mergedClsPrefix:g,blockNode:d,blockLine:r,draggable:h,disabled:p,internalFocusable:v,checkable:b,handleKeydown:y,rtlEnabled:w,handleFocusout:k}=this,a=v&&!p,u=a?"0":void 0,m=[`${g}-tree`,w&&`${g}-tree--rtl`,b&&`${g}-tree--checkable`,(r||d)&&`${g}-tree--block-node`,r&&`${g}-tree--block-line`],R=S=>"__motion"in S?x(zt,{height:S.height,nodes:S.nodes,clsPrefix:g,mode:S.mode,onAfterEnter:this.handleAfterEnter}):x(wn,{key:S.key,tmNode:S,clsPrefix:g});if(this.virtualScroll){const{mergedTheme:S,internalScrollablePadding:U}=this,E=ut(U||"0");return x(fn,{ref:"scrollbarInstRef",onDragleave:h?this.handleDragLeaveTree:void 0,container:this.getScrollContainer,content:this.getScrollContent,class:m,theme:S.peers.Scrollbar,themeOverrides:S.peerOverrides.Scrollbar,tabindex:u,onKeydown:a?y:void 0,onFocusout:a?k:void 0},{default:()=>{var H;return(H=this.onRender)===null||H===void 0||H.call(this),x(St,{ref:"virtualListInstRef",items:this.fNodes,itemSize:$e,ignoreItemResize:this.aip,paddingTop:E.top,paddingBottom:E.bottom,class:this.themeClass,style:[this.cssVars,{paddingLeft:E.left,paddingRight:E.right}],onScroll:this.handleScroll,onResize:this.handleResize,showScrollbar:!1,itemResizable:!0},{default:({item:M})=>R(M)})}})}const{internalScrollable:F}=this;return m.push(this.themeClass),(e=this.onRender)===null||e===void 0||e.call(this),F?x(fn,{class:m,tabindex:u,onKeydown:a?y:void 0,onFocusout:a?k:void 0,style:this.cssVars,contentStyle:{padding:this.internalScrollablePadding}},{default:()=>x("div",{onDragleave:h?this.handleDragLeaveTree:void 0,ref:"selfElRef"},this.fNodes.map(R))}):x("div",{class:m,tabindex:u,ref:"selfElRef",style:this.cssVars,onKeydown:a?y:void 0,onFocusout:a?k:void 0,onDragleave:h?this.handleDragLeaveTree:void 0},l.length?l.map(R):ft(this.$slots.empty,()=>[x(Dt,{class:`${g}-tree__empty`,theme:this.mergedTheme.peers.Empty,themeOverrides:this.mergedTheme.peerOverrides.Empty})]))}}),Yt=ee({__name:"PubkeyLink",props:{pubkey:null},setup(e){const l=e,{pubkey:c}=ht(l),g=A(()=>Yn(c.value)),d=A(()=>g.value.feat.useMetadata()),r=A(()=>{const h=Jn(c.value);return h||c.value});return(h,p)=>{const v=gt,b=vt("RouterLink");return G(),Ue(b,{to:`/profile/${Z(c)}`},{default:W(()=>[Q(v,{text:""},{default:W(()=>[Me(" @"+Ke(Z(d).name?Z(d).name:Z(r)),1)]),_:1})]),_:1},8,["to"])}}}),Jt={key:0,size:"large"},Qt=kt("div",{class:"h-[80vh]"},null,-1),Zt={key:2},el={key:0},nl={key:0},tl={key:1},yl=ee({__name:"RelayInfoView",setup(e){const{error:l}=yt(),c=Ft(),g=mt(),d=A(()=>{const a=g.params.url;if(a){const u=new URL(a);return u.protocol="http://",u.toString()}return a}),r=T(null),h=T(null);xe(d,async()=>{r.value=null,p().then(a=>{h.value=a}).catch(a=>{r.value=a})},{immediate:!0});async function p(){if(!d.value)return null;const a="https://cors-anywhere.herokuapp.com/";return await pt(`fetch:${a}${d.value}:get:application/nostr+json`,async()=>await fetch(`${a}${d.value}`,{headers:{accept:"application/nostr+json"}}).then(u=>u.text()).then(u=>{try{return JSON.parse(u)}catch{return u.includes("/corsdemo")&&(l(u,{duration:2e5,closable:!0}),c.warning({title:pe("warning"),content:pe("message.relay_info_view_verified"),positiveText:pe("yes"),negativeText:pe("no"),onPositiveClick:()=>{window.open("https://cors-anywhere.herokuapp.com/corsdemo")},onNegativeClick:()=>{}})),Promise.reject(u)}}),{cacheError:!1})}const v=Rt();xe(h,()=>{var u;const a=(u=h.value)==null?void 0:u.supported_nips;a&&a.forEach(m=>{v.value.add(m)})});const b=A(()=>{var a;return new Set((a=h.value)==null?void 0:a.supported_nips)});function y(a){const u=`https://github.com/nostr-protocol/nips/blob/master/${a.toString().padStart(2,"0")}.md`;window.open(u)}const w=A(()=>k(h.value));function k(a){return a?Array.isArray(a)?a.map(u=>({whateverLabel:u,whateverKey:u})):typeof a=="object"?Object.entries(a).map(([u,m])=>typeof m=="string"||typeof m=="number"?{whateverLabel:`${u}: ${m}`,whateverKey:u}:{whateverLabel:u,whateverKey:u,whateverChildren:k(m)}):[]:[]}return(a,u)=>{const m=wt,R=Lt,F=At,S=xt,U=Kt,E=Xt;return G(),ce(hn,null,[r.value===null&&!h.value?(G(),ce("div",Jt,[Q(R,{vertical:""},{default:W(()=>[r.value===null&&!h.value?(G(),Ue(m,{key:0,size:"large"},{description:W(()=>[Me(Ke(Z(pe)("loading")),1)]),default:W(()=>[Qt]),_:1})):ue("",!0)]),_:1})])):ue("",!0),r.value?(G(),Ue(F,{key:1,status:"404",title:`404 ${Z(pe)("resource_does_not_exist")}`,description:"\u751F\u6D3B\u603B\u5F52\u5E26\u70B9\u8352\u8C2C"},null,8,["title"])):ue("",!0),h.value?(G(),ce("div",Zt,[Q(R,{vertical:""},{default:W(()=>{var H;return[h.value.name?(G(),ce("h1",el,Ke((H=h.value)==null?void 0:H.name),1)):ue("",!0),Q(S,{title:"\u57FA\u672C\u4FE1\u606F"},{default:W(()=>{var M,ie,X;return[(M=h.value)!=null&&M.description?(G(),ce("p",nl,"\u63CF\u8FF0 \uFF1A"+Ke((ie=h.value)==null?void 0:ie.description),1)):ue("",!0),(X=h.value)!=null&&X.pubkey?(G(),ce("p",tl,[Me(" \u7BA1\u7406\u8005 \uFF1A"),Q(Yt,{pubkey:h.value.pubkey},null,8,["pubkey"])])):ue("",!0)]}),_:1}),Q(S,{title:"\u652F\u6301\u7684nip\u60C5\u51B5"},{default:W(()=>[Q(R,null,{default:W(()=>[(G(!0),ce(hn,null,bt(Z(v),M=>(G(),Ue(U,{bordered:!1,type:Z(b).has(M)?"success":"error",onClick:()=>y(M)},{default:W(()=>[Me(" nip-"+Ke(M),1)]),_:2},1032,["type","onClick"]))),256))]),_:1})]),_:1}),Q(S,{title:"\u66F4\u591A\u4FE1\u606F"},{default:W(()=>[Q(E,{"block-line":"",data:Z(w),"key-field":"whateverKey","label-field":"whateverLabel","children-field":"whateverChildren",selectable:""},null,8,["data"])]),_:1})]}),_:1})])):ue("",!0)],64)}}});export{yl as default};
