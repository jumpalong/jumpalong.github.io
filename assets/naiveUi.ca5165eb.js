import{m as Tr,n as wt,r as Pe,p as _r,q as Ar,b as Lt,u as Br,g as Lr,a as ve,s as Fr,V as ht,o as Ct,c as I,t as St,v as zt,i as dt,w as Er}from"./Space.e53fc030.js";import{d as K,s as $,al as Wr,h as n,ay as kr,aL as ke,as as Ir,aZ as Mr,e as b,l as T,f as m,B as Dr,M as Ft,A as Z,H as Vr,v as $e,aW as Hr,c as Et,b as ct,y as Wt,w as ge,i as xt,p as N,j as R,P as pe,u as kt,m as Ie,F as Pt,K as Or,g as jr,aS as pt,z as It,n as Nr,q as G,r as Mt,ae as Dt,am as Re,O as Ur,t as Gr,a_ as Kr,N as Xr,a$ as Yr,ai as qr,aU as Zr,b0 as Jr,aV as Qr}from"./index.5e976b28.js";import{u as eo}from"./use-locale.f5546dc0.js";import{c as to}from"./user.62a3b15e.js";import{N as ro}from"./Icon.dd751103.js";import{u as oo}from"./Ellipsis.vue_vue_type_script_setup_true_lang.dde593dd.js";const no=wt(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[wt("&::-webkit-scrollbar",{width:0,height:0})]),ao=K({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=$(null);function a(h){!(h.currentTarget.offsetWidth<h.currentTarget.scrollWidth)||h.deltaY===0||(h.currentTarget.scrollLeft+=h.deltaY+h.deltaX,h.preventDefault())}const o=Wr();return no.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Tr,ssr:o}),Object.assign({selfRef:e,handleWheel:a},{scrollTo(...h){var x;(x=e.value)===null||x===void 0||x.scrollTo(...h)}})},render(){return n("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var io=/\s/;function lo(e){for(var a=e.length;a--&&io.test(e.charAt(a)););return a}var so=/^\s+/;function co(e){return e&&e.slice(0,lo(e)+1).replace(so,"")}var Rt=0/0,uo=/^[-+]0x[0-9a-f]+$/i,fo=/^0b[01]+$/i,bo=/^0o[0-7]+$/i,ho=parseInt;function $t(e){if(typeof e=="number")return e;if(kr(e))return Rt;if(ke(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=ke(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=co(e);var o=fo.test(e);return o||bo.test(e)?ho(e.slice(2),o?2:8):uo.test(e)?Rt:+e}var po=function(){return Ir.Date.now()};const ut=po;var vo="Expected a function",go=Math.max,xo=Math.min;function mo(e,a,o){var y,h,x,u,s,c,d=0,f=!1,p=!1,g=!0;if(typeof e!="function")throw new TypeError(vo);a=$t(a)||0,ke(o)&&(f=!!o.leading,p="maxWait"in o,x=p?go($t(o.maxWait)||0,a):x,g="trailing"in o?!!o.trailing:g);function P(A){var W=y,M=h;return y=h=void 0,d=A,u=e.apply(M,W),u}function z(A){return d=A,s=setTimeout(V,a),f?P(A):u}function D(A){var W=A-c,M=A-d,k=a-W;return p?xo(k,x-M):k}function L(A){var W=A-c,M=A-d;return c===void 0||W>=a||W<0||p&&M>=x}function V(){var A=ut();if(L(A))return C(A);s=setTimeout(V,D(A))}function C(A){return s=void 0,g&&y?P(A):(y=h=void 0,u)}function _(){s!==void 0&&clearTimeout(s),d=0,y=c=h=s=void 0}function H(){return s===void 0?u:C(ut())}function O(){var A=ut(),W=L(A);if(y=arguments,h=this,c=A,W){if(s===void 0)return z(c);if(p)return clearTimeout(s),s=setTimeout(V,a),P(c)}return s===void 0&&(s=setTimeout(V,a)),u}return O.cancel=_,O.flush=H,O}var yo="Expected a function";function ft(e,a,o){var y=!0,h=!0;if(typeof e!="function")throw new TypeError(yo);return ke(o)&&(y="leading"in o?!!o.leading:y,h="trailing"in o?!!o.trailing:h),mo(e,a,{leading:y,maxWait:a,trailing:h})}const wo=K({name:"Add",render(){return n("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),Co=K({name:"Eye",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),n("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),So=K({name:"EyeOff",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),n("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),n("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),n("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),n("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),zo=K({name:"ChevronDown",render(){return n("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Po=Mr("clear",n("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("g",{fill:"currentColor","fill-rule":"nonzero"},n("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Ro=b("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[T(">",[m("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[T("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),T("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),m("placeholder",`
 display: flex;
 `),m("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Dr({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),vt=K({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return Ft("-base-clear",Ro,Z(e,"clsPrefix")),{handleMouseDown(a){a.preventDefault()}}},render(){const{clsPrefix:e}=this;return n("div",{class:`${e}-base-clear`},n(Vr,null,{default:()=>{var a,o;return this.show?n("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},Pe(this.$slots.icon,()=>[n($e,{clsPrefix:e},{default:()=>n(Po,null)})])):n("div",{key:"icon",class:`${e}-base-clear__placeholder`},(o=(a=this.$slots).placeholder)===null||o===void 0?void 0:o.call(a))}}))}}),$o=K({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:a}){return()=>{const{clsPrefix:o}=e;return n(Hr,{clsPrefix:o,class:`${o}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?n(vt,{clsPrefix:o,show:e.showClear,onClear:e.onClear},{placeholder:()=>n($e,{clsPrefix:o,class:`${o}-base-suffix__arrow`},{default:()=>Pe(a.default,()=>[n(zo,null)])})}):null})}}}),To={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"},_o=e=>{const{textColor2:a,textColor3:o,textColorDisabled:y,primaryColor:h,primaryColorHover:x,inputColor:u,inputColorDisabled:s,borderColor:c,warningColor:d,warningColorHover:f,errorColor:p,errorColorHover:g,borderRadius:P,lineHeight:z,fontSizeTiny:D,fontSizeSmall:L,fontSizeMedium:V,fontSizeLarge:C,heightTiny:_,heightSmall:H,heightMedium:O,heightLarge:A,actionColor:W,clearColor:M,clearColorHover:k,clearColorPressed:Y,placeholderColor:q,placeholderColorDisabled:J,iconColor:U,iconColorDisabled:xe,iconColorHover:re,iconColorPressed:me}=e;return Object.assign(Object.assign({},To),{countTextColorDisabled:y,countTextColor:o,heightTiny:_,heightSmall:H,heightMedium:O,heightLarge:A,fontSizeTiny:D,fontSizeSmall:L,fontSizeMedium:V,fontSizeLarge:C,lineHeight:z,lineHeightTextarea:z,borderRadius:P,iconSize:"16px",groupLabelColor:W,groupLabelTextColor:a,textColor:a,textColorDisabled:y,textDecorationColor:a,caretColor:h,placeholderColor:q,placeholderColorDisabled:J,color:u,colorDisabled:s,colorFocus:u,groupLabelBorder:`1px solid ${c}`,border:`1px solid ${c}`,borderHover:`1px solid ${x}`,borderDisabled:`1px solid ${c}`,borderFocus:`1px solid ${x}`,boxShadowFocus:`0 0 0 2px ${ct(h,{alpha:.2})}`,loadingColor:h,loadingColorWarning:d,borderWarning:`1px solid ${d}`,borderHoverWarning:`1px solid ${f}`,colorFocusWarning:u,borderFocusWarning:`1px solid ${f}`,boxShadowFocusWarning:`0 0 0 2px ${ct(d,{alpha:.2})}`,caretColorWarning:d,loadingColorError:p,borderError:`1px solid ${p}`,borderHoverError:`1px solid ${g}`,colorFocusError:u,borderFocusError:`1px solid ${g}`,boxShadowFocusError:`0 0 0 2px ${ct(p,{alpha:.2})}`,caretColorError:p,clearColor:M,clearColorHover:k,clearColorPressed:Y,iconColor:U,iconColorDisabled:xe,iconColorHover:re,iconColorPressed:me,suffixTextColor:a})},Ao={name:"Input",common:Et,self:_o},Bo=Ao,Vt=Wt("n-input");function Lo(e){let a=0;for(const o of e)a++;return a}function We(e){return e===""||e==null}function Fo(e){const a=$(null);function o(){const{value:x}=e;if(!(x!=null&&x.focus)){h();return}const{selectionStart:u,selectionEnd:s,value:c}=x;if(u==null||s==null){h();return}a.value={start:u,end:s,beforeText:c.slice(0,u),afterText:c.slice(s)}}function y(){var x;const{value:u}=a,{value:s}=e;if(!u||!s)return;const{value:c}=s,{start:d,beforeText:f,afterText:p}=u;let g=c.length;if(c.endsWith(p))g=c.length-p.length;else if(c.startsWith(f))g=f.length;else{const P=f[d-1],z=c.indexOf(P,d-1);z!==-1&&(g=z+1)}(x=s.setSelectionRange)===null||x===void 0||x.call(s,g,g)}function h(){a.value=null}return ge(e,h),{recordCursor:o,restoreCursor:y}}const Tt=K({name:"InputWordCount",setup(e,{slots:a}){const{mergedValueRef:o,maxlengthRef:y,mergedClsPrefixRef:h,countGraphemesRef:x}=xt(Vt),u=N(()=>{const{value:s}=o;return s===null||Array.isArray(s)?0:(x.value||Lo)(s)});return()=>{const{value:s}=y,{value:c}=o;return n("span",{class:`${h.value}-input-word-count`},_r(a.default,{value:c===null||Array.isArray(c)?"":c},()=>[s===void 0?u.value:`${u.value} / ${s}`]))}}}),Eo=b("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[m("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),m("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),m("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[T("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),T("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),T("&:-webkit-autofill ~",[m("placeholder","display: none;")])]),R("round",[pe("textarea","border-radius: calc(var(--n-height) / 2);")]),m("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[T("span",`
 width: 100%;
 display: inline-block;
 `)]),R("textarea",[m("placeholder","overflow: visible;")]),pe("autosize","width: 100%;"),R("autosize",[m("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),b("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),m("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),m("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[T("+",[m("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),pe("textarea",[m("placeholder","white-space: nowrap;")]),m("eye",`
 transition: color .3s var(--n-bezier);
 `),R("textarea","width: 100%;",[b("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),R("resizable",[b("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),m("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),m("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),R("pair",[m("input-el, placeholder","text-align: center;"),m("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[b("icon",`
 color: var(--n-icon-color);
 `),b("base-icon",`
 color: var(--n-icon-color);
 `)])]),R("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[m("border","border: var(--n-border-disabled);"),m("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),m("placeholder","color: var(--n-placeholder-color-disabled);"),m("separator","color: var(--n-text-color-disabled);",[b("icon",`
 color: var(--n-icon-color-disabled);
 `),b("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),b("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),m("suffix, prefix","color: var(--n-text-color-disabled);",[b("icon",`
 color: var(--n-icon-color-disabled);
 `),b("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),pe("disabled",[m("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[T("&:hover",`
 color: var(--n-icon-color-hover);
 `),T("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),T("&:hover",[m("state-border","border: var(--n-border-hover);")]),R("focus","background-color: var(--n-color-focus);",[m("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),m("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),m("state-border",`
 border-color: #0000;
 z-index: 1;
 `),m("prefix","margin-right: 4px;"),m("suffix",`
 margin-left: 4px;
 `),m("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[b("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),b("base-clear",`
 font-size: var(--n-icon-size);
 `,[m("placeholder",[b("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),T(">",[b("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),b("base-icon",`
 font-size: var(--n-icon-size);
 `)]),b("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>R(`${e}-status`,[pe("disabled",[b("base-loading",`
 color: var(--n-loading-color-${e})
 `),m("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),m("state-border",`
 border: var(--n-border-${e});
 `),T("&:hover",[m("state-border",`
 border: var(--n-border-hover-${e});
 `)]),T("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[m("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),R("focus",`
 background-color: var(--n-color-focus-${e});
 `,[m("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),Wo=b("input",[R("disabled",[m("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),ko=Object.assign(Object.assign({},Ie.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),qo=K({name:"Input",props:ko,setup(e){const{mergedClsPrefixRef:a,mergedBorderedRef:o,inlineThemeDisabled:y,mergedRtlRef:h}=kt(e),x=Ie("Input","-input",Eo,Bo,e,a);Ar&&Ft("-input-safari",Wo,a);const u=$(null),s=$(null),c=$(null),d=$(null),f=$(null),p=$(null),g=$(null),P=Fo(g),z=$(null),{localeRef:D}=eo("Input"),L=$(e.defaultValue),V=Z(e,"value"),C=Lt(V,L),_=Br(e),{mergedSizeRef:H,mergedDisabledRef:O,mergedStatusRef:A}=_,W=$(!1),M=$(!1),k=$(!1),Y=$(!1);let q=null;const J=N(()=>{const{placeholder:t,pair:r}=e;return r?Array.isArray(t)?t:t===void 0?["",""]:[t,t]:t===void 0?[D.value.placeholder]:[t]}),U=N(()=>{const{value:t}=k,{value:r}=C,{value:v}=J;return!t&&(We(r)||Array.isArray(r)&&We(r[0]))&&v[0]}),xe=N(()=>{const{value:t}=k,{value:r}=C,{value:v}=J;return!t&&v[1]&&(We(r)||Array.isArray(r)&&We(r[1]))}),re=Pt(()=>e.internalForceFocus||W.value),me=Pt(()=>{if(O.value||e.readonly||!e.clearable||!re.value&&!M.value)return!1;const{value:t}=C,{value:r}=re;return e.pair?!!(Array.isArray(t)&&(t[0]||t[1]))&&(M.value||r):!!t&&(M.value||r)}),ie=N(()=>{const{showPasswordOn:t}=e;if(t)return t;if(e.showPasswordToggle)return"click"}),Q=$(!1),Me=N(()=>{const{textDecoration:t}=e;return t?Array.isArray(t)?t.map(r=>({textDecoration:r})):[{textDecoration:t}]:["",""]}),Te=$(void 0),De=()=>{var t,r;if(e.type==="textarea"){const{autosize:v}=e;if(v&&(Te.value=(r=(t=z.value)===null||t===void 0?void 0:t.$el)===null||r===void 0?void 0:r.offsetWidth),!s.value||typeof v=="boolean")return;const{paddingTop:F,paddingBottom:E,lineHeight:B}=window.getComputedStyle(s.value),oe=Number(F.slice(0,-2)),ne=Number(E.slice(0,-2)),ae=Number(B.slice(0,-2)),{value:Se}=c;if(!Se)return;if(v.minRows){const ze=Math.max(v.minRows,1),st=`${oe+ne+ae*ze}px`;Se.style.minHeight=st}if(v.maxRows){const ze=`${oe+ne+ae*v.maxRows}px`;Se.style.maxHeight=ze}}},_e=N(()=>{const{maxlength:t}=e;return t===void 0?void 0:Number(t)});Or(()=>{const{value:t}=C;Array.isArray(t)||Ce(t)});const Ae=jr().proxy;function le(t){const{onUpdateValue:r,"onUpdate:value":v,onInput:F}=e,{nTriggerFormInput:E}=_;r&&I(r,t),v&&I(v,t),F&&I(F,t),L.value=t,E()}function se(t){const{onChange:r}=e,{nTriggerFormChange:v}=_;r&&I(r,t),L.value=t,v()}function de(t){const{onBlur:r}=e,{nTriggerFormBlur:v}=_;r&&I(r,t),v()}function Ve(t){const{onFocus:r}=e,{nTriggerFormFocus:v}=_;r&&I(r,t),v()}function He(t){const{onClear:r}=e;r&&I(r,t)}function Oe(t){const{onInputBlur:r}=e;r&&I(r,t)}function ye(t){const{onInputFocus:r}=e;r&&I(r,t)}function je(){const{onDeactivate:t}=e;t&&I(t)}function Be(){const{onActivate:t}=e;t&&I(t)}function Ne(t){const{onClick:r}=e;r&&I(r,t)}function Le(t){const{onWrapperFocus:r}=e;r&&I(r,t)}function ee(t){const{onWrapperBlur:r}=e;r&&I(r,t)}function i(){k.value=!0}function l(t){k.value=!1,t.target===p.value?w(t,1):w(t,0)}function w(t,r=0,v="input"){const F=t.target.value;if(Ce(F),t instanceof InputEvent&&!t.isComposing&&(k.value=!1),e.type==="textarea"){const{value:B}=z;B&&B.syncUnifiedContainer()}if(q=F,k.value)return;P.recordCursor();const E=S(F);if(E)if(!e.pair)v==="input"?le(F):se(F);else{let{value:B}=C;Array.isArray(B)?B=[B[0],B[1]]:B=["",""],B[r]=F,v==="input"?le(B):se(B)}Ae.$forceUpdate(),E||Re(P.restoreCursor)}function S(t){const{countGraphemes:r,maxlength:v,minlength:F}=e;if(r){let B;if(v!==void 0&&(B===void 0&&(B=r(t)),B>Number(v))||F!==void 0&&(B===void 0&&(B=r(t)),B<Number(v)))return!1}const{allowInput:E}=e;return typeof E=="function"?E(t):!0}function X(t){Oe(t),t.relatedTarget===u.value&&je(),t.relatedTarget!==null&&(t.relatedTarget===f.value||t.relatedTarget===p.value||t.relatedTarget===s.value)||(Y.value=!1),ue(t,"blur"),g.value=null}function j(t,r){ye(t),W.value=!0,Y.value=!0,Be(),ue(t,"focus"),r===0?g.value=f.value:r===1?g.value=p.value:r===2&&(g.value=s.value)}function te(t){e.passivelyActivated&&(ee(t),ue(t,"blur"))}function ce(t){e.passivelyActivated&&(W.value=!0,Le(t),ue(t,"focus"))}function ue(t,r){t.relatedTarget!==null&&(t.relatedTarget===f.value||t.relatedTarget===p.value||t.relatedTarget===s.value||t.relatedTarget===u.value)||(r==="focus"?(Ve(t),W.value=!0):r==="blur"&&(de(t),W.value=!1))}function Ue(t,r){w(t,r,"change")}function Ge(t){Ne(t)}function Ke(t){He(t),e.pair?(le(["",""]),se(["",""])):(le(""),se(""))}function Xe(t){const{onMousedown:r}=e;r&&r(t);const{tagName:v}=t.target;if(v!=="INPUT"&&v!=="TEXTAREA"){if(e.resizable){const{value:F}=u;if(F){const{left:E,top:B,width:oe,height:ne}=F.getBoundingClientRect(),ae=14;if(E+oe-ae<t.clientX&&t.clientX<E+oe&&B+ne-ae<t.clientY&&t.clientY<B+ne)return}}t.preventDefault(),W.value||Fe()}}function Ye(){var t;M.value=!0,e.type==="textarea"&&((t=z.value)===null||t===void 0||t.handleMouseEnterWrapper())}function qe(){var t;M.value=!1,e.type==="textarea"&&((t=z.value)===null||t===void 0||t.handleMouseLeaveWrapper())}function Ze(){O.value||ie.value==="click"&&(Q.value=!Q.value)}function Je(t){if(O.value)return;t.preventDefault();const r=F=>{F.preventDefault(),St("mouseup",document,r)};if(Ct("mouseup",document,r),ie.value!=="mousedown")return;Q.value=!0;const v=()=>{Q.value=!1,St("mouseup",document,v)};Ct("mouseup",document,v)}function Qe(t){var r;switch((r=e.onKeydown)===null||r===void 0||r.call(e,t),t.key){case"Escape":we();break;case"Enter":et(t);break}}function et(t){var r,v;if(e.passivelyActivated){const{value:F}=Y;if(F){e.internalDeactivateOnEnter&&we();return}t.preventDefault(),e.type==="textarea"?(r=s.value)===null||r===void 0||r.focus():(v=f.value)===null||v===void 0||v.focus()}}function we(){e.passivelyActivated&&(Y.value=!1,Re(()=>{var t;(t=u.value)===null||t===void 0||t.focus()}))}function Fe(){var t,r,v;O.value||(e.passivelyActivated?(t=u.value)===null||t===void 0||t.focus():((r=s.value)===null||r===void 0||r.focus(),(v=f.value)===null||v===void 0||v.focus()))}function tt(){var t;!((t=u.value)===null||t===void 0)&&t.contains(document.activeElement)&&document.activeElement.blur()}function rt(){var t,r;(t=s.value)===null||t===void 0||t.select(),(r=f.value)===null||r===void 0||r.select()}function ot(){O.value||(s.value?s.value.focus():f.value&&f.value.focus())}function nt(){const{value:t}=u;(t==null?void 0:t.contains(document.activeElement))&&t!==document.activeElement&&we()}function at(t){if(e.type==="textarea"){const{value:r}=s;r==null||r.scrollTo(t)}else{const{value:r}=f;r==null||r.scrollTo(t)}}function Ce(t){const{type:r,pair:v,autosize:F}=e;if(!v&&F)if(r==="textarea"){const{value:E}=c;E&&(E.textContent=(t!=null?t:"")+`\r
`)}else{const{value:E}=d;E&&(t?E.textContent=t:E.innerHTML="&nbsp;")}}function it(){De()}const Ee=$({top:"0"});function lt(t){var r;const{scrollTop:v}=t.target;Ee.value.top=`${-v}px`,(r=z.value)===null||r===void 0||r.syncUnifiedContainer()}let fe=null;pt(()=>{const{autosize:t,type:r}=e;t&&r==="textarea"?fe=ge(C,v=>{!Array.isArray(v)&&v!==q&&Ce(v)}):fe==null||fe()});let be=null;pt(()=>{e.type==="textarea"?be=ge(C,t=>{var r;!Array.isArray(t)&&t!==q&&((r=z.value)===null||r===void 0||r.syncUnifiedContainer())}):be==null||be()}),It(Vt,{mergedValueRef:C,maxlengthRef:_e,mergedClsPrefixRef:a,countGraphemesRef:Z(e,"countGraphemes")});const Ot={wrapperElRef:u,inputElRef:f,textareaElRef:s,isCompositing:k,focus:Fe,blur:tt,select:rt,deactivate:nt,activate:ot,scrollTo:at},jt=Nr("Input",h,a),yt=N(()=>{const{value:t}=H,{common:{cubicBezierEaseInOut:r},self:{color:v,borderRadius:F,textColor:E,caretColor:B,caretColorError:oe,caretColorWarning:ne,textDecorationColor:ae,border:Se,borderDisabled:ze,borderHover:st,borderFocus:Nt,placeholderColor:Ut,placeholderColorDisabled:Gt,lineHeightTextarea:Kt,colorDisabled:Xt,colorFocus:Yt,textColorDisabled:qt,boxShadowFocus:Zt,iconSize:Jt,colorFocusWarning:Qt,boxShadowFocusWarning:er,borderWarning:tr,borderFocusWarning:rr,borderHoverWarning:or,colorFocusError:nr,boxShadowFocusError:ar,borderError:ir,borderFocusError:lr,borderHoverError:sr,clearSize:dr,clearColor:cr,clearColorHover:ur,clearColorPressed:fr,iconColor:br,iconColorDisabled:hr,suffixTextColor:pr,countTextColor:vr,countTextColorDisabled:gr,iconColorHover:xr,iconColorPressed:mr,loadingColor:yr,loadingColorError:wr,loadingColorWarning:Cr,[G("padding",t)]:Sr,[G("fontSize",t)]:zr,[G("height",t)]:Pr}}=x.value,{left:Rr,right:$r}=Lr(Sr);return{"--n-bezier":r,"--n-count-text-color":vr,"--n-count-text-color-disabled":gr,"--n-color":v,"--n-font-size":zr,"--n-border-radius":F,"--n-height":Pr,"--n-padding-left":Rr,"--n-padding-right":$r,"--n-text-color":E,"--n-caret-color":B,"--n-text-decoration-color":ae,"--n-border":Se,"--n-border-disabled":ze,"--n-border-hover":st,"--n-border-focus":Nt,"--n-placeholder-color":Ut,"--n-placeholder-color-disabled":Gt,"--n-icon-size":Jt,"--n-line-height-textarea":Kt,"--n-color-disabled":Xt,"--n-color-focus":Yt,"--n-text-color-disabled":qt,"--n-box-shadow-focus":Zt,"--n-loading-color":yr,"--n-caret-color-warning":ne,"--n-color-focus-warning":Qt,"--n-box-shadow-focus-warning":er,"--n-border-warning":tr,"--n-border-focus-warning":rr,"--n-border-hover-warning":or,"--n-loading-color-warning":Cr,"--n-caret-color-error":oe,"--n-color-focus-error":nr,"--n-box-shadow-focus-error":ar,"--n-border-error":ir,"--n-border-focus-error":lr,"--n-border-hover-error":sr,"--n-loading-color-error":wr,"--n-clear-color":cr,"--n-clear-size":dr,"--n-clear-color-hover":ur,"--n-clear-color-pressed":fr,"--n-icon-color":br,"--n-icon-color-hover":xr,"--n-icon-color-pressed":mr,"--n-icon-color-disabled":hr,"--n-suffix-text-color":pr}}),he=y?Mt("input",N(()=>{const{value:t}=H;return t[0]}),yt,e):void 0;return Object.assign(Object.assign({},Ot),{wrapperElRef:u,inputElRef:f,inputMirrorElRef:d,inputEl2Ref:p,textareaElRef:s,textareaMirrorElRef:c,textareaScrollbarInstRef:z,rtlEnabled:jt,uncontrolledValue:L,mergedValue:C,passwordVisible:Q,mergedPlaceholder:J,showPlaceholder1:U,showPlaceholder2:xe,mergedFocus:re,isComposing:k,activated:Y,showClearButton:me,mergedSize:H,mergedDisabled:O,textDecorationStyle:Me,mergedClsPrefix:a,mergedBordered:o,mergedShowPasswordOn:ie,placeholderStyle:Ee,mergedStatus:A,textAreaScrollContainerWidth:Te,handleTextAreaScroll:lt,handleCompositionStart:i,handleCompositionEnd:l,handleInput:w,handleInputBlur:X,handleInputFocus:j,handleWrapperBlur:te,handleWrapperFocus:ce,handleMouseEnter:Ye,handleMouseLeave:qe,handleMouseDown:Xe,handleChange:Ue,handleClick:Ge,handleClear:Ke,handlePasswordToggleClick:Ze,handlePasswordToggleMousedown:Je,handleWrapperKeydown:Qe,handleTextAreaMirrorResize:it,getTextareaScrollContainer:()=>s.value,mergedTheme:x,cssVars:y?void 0:yt,themeClass:he==null?void 0:he.themeClass,onRender:he==null?void 0:he.onRender})},render(){var e,a;const{mergedClsPrefix:o,mergedStatus:y,themeClass:h,type:x,countGraphemes:u,onRender:s}=this,c=this.$slots;return s==null||s(),n("div",{ref:"wrapperElRef",class:[`${o}-input`,h,y&&`${o}-input--${y}-status`,{[`${o}-input--rtl`]:this.rtlEnabled,[`${o}-input--disabled`]:this.mergedDisabled,[`${o}-input--textarea`]:x==="textarea",[`${o}-input--resizable`]:this.resizable&&!this.autosize,[`${o}-input--autosize`]:this.autosize,[`${o}-input--round`]:this.round&&x!=="textarea",[`${o}-input--pair`]:this.pair,[`${o}-input--focus`]:this.mergedFocus,[`${o}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},n("div",{class:`${o}-input-wrapper`},ve(c.prefix,d=>d&&n("div",{class:`${o}-input__prefix`},d)),x==="textarea"?n(Fr,{ref:"textareaScrollbarInstRef",class:`${o}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var d,f;const{textAreaScrollContainerWidth:p}=this,g={width:this.autosize&&p&&`${p}px`};return n(Dt,null,n("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${o}-input__textarea-el`,(d=this.inputProps)===null||d===void 0?void 0:d.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(f=this.inputProps)===null||f===void 0?void 0:f.style,g],onBlur:this.handleInputBlur,onFocus:P=>this.handleInputFocus(P,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?n("div",{class:`${o}-input__placeholder`,style:[this.placeholderStyle,g],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?n(ht,{onResize:this.handleTextAreaMirrorResize},{default:()=>n("div",{ref:"textareaMirrorElRef",class:`${o}-input__textarea-mirror`,key:"mirror"})}):null)}}):n("div",{class:`${o}-input__input`},n("input",Object.assign({type:x==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":x},this.inputProps,{ref:"inputElRef",class:[`${o}-input__input-el`,(e=this.inputProps)===null||e===void 0?void 0:e.class],style:[this.textDecorationStyle[0],(a=this.inputProps)===null||a===void 0?void 0:a.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:d=>this.handleInputFocus(d,0),onInput:d=>this.handleInput(d,0),onChange:d=>this.handleChange(d,0)})),this.showPlaceholder1?n("div",{class:`${o}-input__placeholder`},n("span",null,this.mergedPlaceholder[0])):null,this.autosize?n("div",{class:`${o}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&ve(c.suffix,d=>d||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?n("div",{class:`${o}-input__suffix`},[ve(c["clear-icon-placeholder"],f=>(this.clearable||f)&&n(vt,{clsPrefix:o,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>f,icon:()=>{var p,g;return(g=(p=this.$slots)["clear-icon"])===null||g===void 0?void 0:g.call(p)}})),this.internalLoadingBeforeSuffix?null:d,this.loading!==void 0?n($o,{clsPrefix:o,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?d:null,this.showCount&&this.type!=="textarea"?n(Tt,null,{default:f=>{var p;return(p=c.count)===null||p===void 0?void 0:p.call(c,f)}}):null,this.mergedShowPasswordOn&&this.type==="password"?n("div",{class:`${o}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?Pe(c["password-visible-icon"],()=>[n($e,{clsPrefix:o},{default:()=>n(Co,null)})]):Pe(c["password-invisible-icon"],()=>[n($e,{clsPrefix:o},{default:()=>n(So,null)})])):null]):null)),this.pair?n("span",{class:`${o}-input__separator`},Pe(c.separator,()=>[this.separator])):null,this.pair?n("div",{class:`${o}-input-wrapper`},n("div",{class:`${o}-input__input`},n("input",{ref:"inputEl2Ref",type:this.type,class:`${o}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:d=>this.handleInputFocus(d,1),onInput:d=>this.handleInput(d,1),onChange:d=>this.handleChange(d,1)}),this.showPlaceholder2?n("div",{class:`${o}-input__placeholder`},n("span",null,this.mergedPlaceholder[1])):null),ve(c.suffix,d=>(this.clearable||d)&&n("div",{class:`${o}-input__suffix`},[this.clearable&&n(vt,{clsPrefix:o,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var f;return(f=c["clear-icon"])===null||f===void 0?void 0:f.call(c)},placeholder:()=>{var f;return(f=c["clear-icon-placeholder"])===null||f===void 0?void 0:f.call(c)}}),d]))):null,this.mergedBordered?n("div",{class:`${o}-input__border`}):null,this.mergedBordered?n("div",{class:`${o}-input__state-border`}):null,this.showCount&&x==="textarea"?n(Tt,null,{default:d=>{var f;const{renderCount:p}=this;return p?p(d):(f=c.count)===null||f===void 0?void 0:f.call(c,d)}}):null)}}),Io={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"0 6px",tabPaddingVerticalMediumLine:"0 10px",tabPaddingVerticalLargeLine:"0 14px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"0 4px",tabPaddingVerticalMediumBar:"0 6px ",tabPaddingVerticalLargeBar:"0 10px ",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"10px 6px",tabPaddingVerticalMediumCard:"12px 8px",tabPaddingVerticalLargeCard:"16px 8px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},Mo=e=>{const{textColor2:a,primaryColor:o,textColorDisabled:y,closeIconColor:h,closeIconColorHover:x,closeIconColorPressed:u,closeColorHover:s,closeColorPressed:c,tabColor:d,baseColor:f,dividerColor:p,fontWeight:g,textColor1:P,borderRadius:z,fontSize:D,fontWeightStrong:L}=e;return Object.assign(Object.assign({},Io),{colorSegment:d,tabFontSizeCard:D,tabTextColorLine:P,tabTextColorActiveLine:o,tabTextColorHoverLine:o,tabTextColorDisabledLine:y,tabTextColorSegment:P,tabTextColorActiveSegment:a,tabTextColorHoverSegment:a,tabTextColorDisabledSegment:y,tabTextColorBar:P,tabTextColorActiveBar:o,tabTextColorHoverBar:o,tabTextColorDisabledBar:y,tabTextColorCard:P,tabTextColorHoverCard:P,tabTextColorActiveCard:o,tabTextColorDisabledCard:y,barColor:o,closeIconColor:h,closeIconColorHover:x,closeIconColorPressed:u,closeColorHover:s,closeColorPressed:c,closeBorderRadius:z,tabColor:d,tabColorSegment:f,tabBorderColor:p,tabFontWeightActive:g,tabFontWeight:g,tabBorderRadius:z,paneTextColor:a,fontWeightStrong:L})},Do={name:"Tabs",common:Et,self:Mo},Vo=Do,mt=Wt("n-tabs"),Ht={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Zo=K({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Ht,setup(e){const a=xt(mt,null);return a||Ur("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:a.paneStyleRef,class:a.paneClassRef,mergedClsPrefix:a.mergedClsPrefixRef}},render(){return n("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ho=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Yr(Ht,["displayDirective"])),gt=K({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Ho,setup(e){const{mergedClsPrefixRef:a,valueRef:o,typeRef:y,closableRef:h,tabStyleRef:x,tabChangeIdRef:u,onBeforeLeaveRef:s,triggerRef:c,handleAdd:d,activateTab:f,handleClose:p}=xt(mt);return{trigger:c,mergedClosable:N(()=>{if(e.internalAddable)return!1;const{closable:g}=e;return g===void 0?h.value:g}),style:x,clsPrefix:a,value:o,type:y,handleClose(g){g.stopPropagation(),!e.disabled&&p(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){d();return}const{name:g}=e,P=++u.id;if(g!==o.value){const{value:z}=s;z?Promise.resolve(z(e.name,o.value)).then(D=>{D&&u.id===P&&f(g)}):f(g)}}}},render(){const{internalAddable:e,clsPrefix:a,name:o,disabled:y,label:h,tab:x,value:u,mergedClosable:s,style:c,trigger:d,$slots:{default:f}}=this,p=h!=null?h:x;return n("div",{class:`${a}-tabs-tab-wrapper`},this.internalLeftPadded?n("div",{class:`${a}-tabs-tab-pad`}):null,n("div",Object.assign({key:o,"data-name":o,"data-disabled":y?!0:void 0},Gr({class:[`${a}-tabs-tab`,u===o&&`${a}-tabs-tab--active`,y&&`${a}-tabs-tab--disabled`,s&&`${a}-tabs-tab--closable`,e&&`${a}-tabs-tab--addable`],onClick:d==="click"?this.activateTab:void 0,onMouseenter:d==="hover"?this.activateTab:void 0,style:e?void 0:c},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),n("span",{class:`${a}-tabs-tab__label`},e?n(Dt,null,n("div",{class:`${a}-tabs-tab__height-placeholder`},"\xA0"),n($e,{clsPrefix:a},{default:()=>n(wo,null)})):f?f():typeof p=="object"?p:Kr(p!=null?p:o)),s&&this.type==="card"?n(Xr,{clsPrefix:a,class:`${a}-tabs-tab__close`,onClick:this.handleClose,disabled:y}):null))}}),Oo=b("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[R("segment-type",[b("tabs-rail",[T("&.transition-disabled","color: red;",[b("tabs-tab",`
 transition: none;
 `)])])]),R("left, right",`
 flex-direction: row;
 `,[b("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),b("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),R("right",`
 flex-direction: row-reverse;
 `,[b("tabs-bar",`
 left: 0;
 `)]),R("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[b("tabs-bar",`
 top: 0;
 `)]),b("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[b("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[b("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[R("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),T("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),R("flex",[b("tabs-nav",{width:"100%"},[b("tabs-wrapper",{width:"100%"},[b("tabs-tab",{marginRight:0})])])]),b("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[m("prefix, suffix",`
 display: flex;
 align-items: center;
 `),m("prefix","padding-right: 16px;"),m("suffix","padding-left: 16px;")]),b("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[R("shadow-before",[T("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),R("shadow-after",[T("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),b("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[T("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),T("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),T("&::before",`
 left: 0;
 `),T("&::after",`
 right: 0;
 `)]),b("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),b("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),b("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),b("tabs-tab",`
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
 `,[R("disabled",{cursor:"not-allowed"}),m("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),m("label",`
 display: flex;
 align-items: center;
 `)]),b("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[T("&.transition-disabled",`
 transition: none;
 `),R("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),b("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),b("tab-pane",`
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
 `,[T("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),T("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),T("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),T("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),T("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),b("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),R("line-type, bar-type",[b("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[T("&:hover",{color:"var(--n-tab-text-color-hover)"}),R("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),R("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),b("tabs-nav",[R("line-type",[m("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),R("card-type",[m("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-tab",`
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
 `,[R("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[m("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),pe("disabled",[T("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),R("closable","padding-right: 6px;"),R("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),R("disabled","color: var(--n-tab-text-color-disabled);")]),b("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),R("left, right",[b("tabs-wrapper",`
 flex-direction: column;
 `,[b("tabs-tab-wrapper",`
 flex-direction: column;
 `,[b("tabs-tab-pad",`
 height: var(--n-tab-gap);
 width: 100%;
 `)])]),b("tabs-nav-scroll-content",`
 border-bottom: none;
 `)]),R("left",[b("tabs-nav-scroll-content",`
 box-sizing: border-box;
 border-right: 1px solid var(--n-tab-border-color);
 `)]),R("right",[b("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `)]),R("bottom",[b("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 border-bottom: none;
 `)])])]),jo=Object.assign(Object.assign({},Ie.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Jo=K({name:"Tabs",props:jo,setup(e,{slots:a}){var o,y,h,x;const{mergedClsPrefixRef:u,inlineThemeDisabled:s}=kt(e),c=Ie("Tabs","-tabs",Oo,Vo,e,u),d=$(null),f=$(null),p=$(null),g=$(null),P=$(null),z=$(!0),D=$(!0),L=zt(e,["labelSize","size"]),V=zt(e,["activeName","value"]),C=$((y=(o=V.value)!==null&&o!==void 0?o:e.defaultValue)!==null&&y!==void 0?y:a.default?(x=(h=dt(a.default())[0])===null||h===void 0?void 0:h.props)===null||x===void 0?void 0:x.name:null),_=Lt(V,C),H={id:0},O=N(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ge(_,()=>{H.id=0,k(),Y()});function A(){var i;const{value:l}=_;return l===null?null:(i=d.value)===null||i===void 0?void 0:i.querySelector(`[data-name="${l}"]`)}function W(i){if(e.type==="card")return;const{value:l}=f;if(!!l&&i){const w=`${u.value}-tabs-bar--disabled`,{barWidth:S,placement:X}=e;if(i.dataset.disabled==="true"?l.classList.add(w):l.classList.remove(w),["top","bottom"].includes(X)){if(M(["top","maxHeight","height"]),typeof S=="number"&&i.offsetWidth>=S){const j=Math.floor((i.offsetWidth-S)/2)+i.offsetLeft;l.style.left=`${j}px`,l.style.maxWidth=`${S}px`}else l.style.left=`${i.offsetLeft}px`,l.style.maxWidth=`${i.offsetWidth}px`;l.style.width="8192px",l.offsetWidth}else{if(M(["left","maxWidth","width"]),typeof S=="number"&&i.offsetHeight>=S){const j=Math.floor((i.offsetHeight-S)/2)+i.offsetTop;l.style.top=`${j}px`,l.style.maxHeight=`${S}px`}else l.style.top=`${i.offsetTop}px`,l.style.maxHeight=`${i.offsetHeight}px`;l.style.height="8192px",l.offsetHeight}}}function M(i){const{value:l}=f;if(!!l)for(const w of i)l.style[w]=""}function k(){if(e.type==="card")return;const i=A();i&&W(i)}function Y(i){var l;const w=(l=P.value)===null||l===void 0?void 0:l.$el;if(!w)return;const S=A();if(!S)return;const{scrollLeft:X,offsetWidth:j}=w,{offsetLeft:te,offsetWidth:ce}=S;X>te?w.scrollTo({top:0,left:te,behavior:"smooth"}):te+ce>X+j&&w.scrollTo({top:0,left:te+ce-j,behavior:"smooth"})}const q=$(null);let J=0,U=null;function xe(i){const l=q.value;if(l){J=i.getBoundingClientRect().height;const w=`${J}px`,S=()=>{l.style.height=w,l.style.maxHeight=w};U?(S(),U(),U=null):U=S}}function re(i){const l=q.value;if(l){const w=i.getBoundingClientRect().height,S=()=>{document.body.offsetHeight,l.style.maxHeight=`${w}px`,l.style.height=`${Math.max(J,w)}px`};U?(U(),U=null,S()):U=S}}function me(){const i=q.value;i&&(i.style.maxHeight="",i.style.height="")}const ie={value:[]},Q=$("next");function Me(i){const l=_.value;let w="next";for(const S of ie.value){if(S===l)break;if(S===i){w="prev";break}}Q.value=w,Te(i)}function Te(i){const{onActiveNameChange:l,onUpdateValue:w,"onUpdate:value":S}=e;l&&I(l,i),w&&I(w,i),S&&I(S,i),C.value=i}function De(i){const{onClose:l}=e;l&&I(l,i)}function _e(){const{value:i}=f;if(!i)return;const l="transition-disabled";i.classList.add(l),k(),i.classList.remove(l)}let Ae=0;function le(i){var l;if(i.contentRect.width===0&&i.contentRect.height===0||Ae===i.contentRect.width)return;Ae=i.contentRect.width;const{type:w}=e;(w==="line"||w==="bar")&&_e(),w!=="segment"&&ye((l=P.value)===null||l===void 0?void 0:l.$el)}const se=ft(le,64);ge([()=>e.justifyContent,()=>e.size],()=>{Re(()=>{const{type:i}=e;(i==="line"||i==="bar")&&_e()})});const de=$(!1);function Ve(i){var l;const{target:w,contentRect:{width:S}}=i,X=w.parentElement.offsetWidth;if(!de.value)X<S&&(de.value=!0);else{const{value:j}=g;if(!j)return;X-S>j.$el.offsetWidth&&(de.value=!1)}ye((l=P.value)===null||l===void 0?void 0:l.$el)}const He=ft(Ve,64);function Oe(){const{onAdd:i}=e;i&&i(),Re(()=>{const l=A(),{value:w}=P;!l||!w||w.scrollTo({left:l.offsetLeft,top:0,behavior:"smooth"})})}function ye(i){if(!i)return;const{scrollLeft:l,scrollWidth:w,offsetWidth:S}=i;z.value=l<=0,D.value=l+S>=w}const je=ft(i=>{ye(i.target)},64);It(mt,{triggerRef:Z(e,"trigger"),tabStyleRef:Z(e,"tabStyle"),paneClassRef:Z(e,"paneClass"),paneStyleRef:Z(e,"paneStyle"),mergedClsPrefixRef:u,typeRef:Z(e,"type"),closableRef:Z(e,"closable"),valueRef:_,tabChangeIdRef:H,onBeforeLeaveRef:Z(e,"onBeforeLeave"),activateTab:Me,handleClose:De,handleAdd:Oe}),Er(()=>{k(),Y()}),pt(()=>{const{value:i}=p;if(!i||["left","right"].includes(e.placement))return;const{value:l}=u,w=`${l}-tabs-nav-scroll-wrapper--shadow-before`,S=`${l}-tabs-nav-scroll-wrapper--shadow-after`;z.value?i.classList.remove(w):i.classList.add(w),D.value?i.classList.remove(S):i.classList.add(S)});const Be=$(null);ge(_,()=>{if(e.type==="segment"){const i=Be.value;i&&Re(()=>{i.classList.add("transition-disabled"),i.offsetWidth,i.classList.remove("transition-disabled")})}});const Ne={syncBarPosition:()=>{k()}},Le=N(()=>{const{value:i}=L,{type:l}=e,w={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[l],S=`${i}${w}`,{self:{barColor:X,closeIconColor:j,closeIconColorHover:te,closeIconColorPressed:ce,tabColor:ue,tabBorderColor:Ue,paneTextColor:Ge,tabFontWeight:Ke,tabBorderRadius:Xe,tabFontWeightActive:Ye,colorSegment:qe,fontWeightStrong:Ze,tabColorSegment:Je,closeSize:Qe,closeIconSize:et,closeColorHover:we,closeColorPressed:Fe,closeBorderRadius:tt,[G("panePadding",i)]:rt,[G("tabPadding",S)]:ot,[G("tabPaddingVertical",S)]:nt,[G("tabGap",S)]:at,[G("tabTextColor",l)]:Ce,[G("tabTextColorActive",l)]:it,[G("tabTextColorHover",l)]:Ee,[G("tabTextColorDisabled",l)]:lt,[G("tabFontSize",i)]:fe},common:{cubicBezierEaseInOut:be}}=c.value;return{"--n-bezier":be,"--n-color-segment":qe,"--n-bar-color":X,"--n-tab-font-size":fe,"--n-tab-text-color":Ce,"--n-tab-text-color-active":it,"--n-tab-text-color-disabled":lt,"--n-tab-text-color-hover":Ee,"--n-pane-text-color":Ge,"--n-tab-border-color":Ue,"--n-tab-border-radius":Xe,"--n-close-size":Qe,"--n-close-icon-size":et,"--n-close-color-hover":we,"--n-close-color-pressed":Fe,"--n-close-border-radius":tt,"--n-close-icon-color":j,"--n-close-icon-color-hover":te,"--n-close-icon-color-pressed":ce,"--n-tab-color":ue,"--n-tab-font-weight":Ke,"--n-tab-font-weight-active":Ye,"--n-tab-padding":ot,"--n-tab-padding-vertical":nt,"--n-tab-gap":at,"--n-pane-padding":rt,"--n-font-weight-strong":Ze,"--n-tab-color-segment":Je}}),ee=s?Mt("tabs",N(()=>`${L.value[0]}${e.type[0]}`),Le,e):void 0;return Object.assign({mergedClsPrefix:u,mergedValue:_,renderedNames:new Set,tabsRailElRef:Be,tabsPaneWrapperRef:q,tabsElRef:d,barElRef:f,addTabInstRef:g,xScrollInstRef:P,scrollWrapperElRef:p,addTabFixed:de,tabWrapperStyle:O,handleNavResize:se,mergedSize:L,handleScroll:je,handleTabsResize:He,cssVars:s?void 0:Le,themeClass:ee==null?void 0:ee.themeClass,animationDirection:Q,renderNameListRef:ie,onAnimationBeforeLeave:xe,onAnimationEnter:re,onAnimationAfterEnter:me,onRender:ee==null?void 0:ee.onRender},Ne)},render(){const{mergedClsPrefix:e,type:a,placement:o,addTabFixed:y,addable:h,mergedSize:x,renderNameListRef:u,onRender:s,$slots:{default:c,prefix:d,suffix:f}}=this;s==null||s();const p=c?dt(c()).filter(C=>C.type.__TAB_PANE__===!0):[],g=c?dt(c()).filter(C=>C.type.__TAB__===!0):[],P=!g.length,z=a==="card",D=a==="segment",L=!z&&!D&&this.justifyContent;u.value=[];const V=()=>{const C=n("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},L?null:n("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),P?p.map((_,H)=>(u.value.push(_.props.name),bt(n(gt,Object.assign({},_.props,{internalCreatedByPane:!0,internalLeftPadded:H!==0&&(!L||L==="center"||L==="start"||L==="end")}),_.children?{default:_.children.tab}:void 0)))):g.map((_,H)=>(u.value.push(_.props.name),bt(H!==0&&!L?Bt(_):_))),!y&&h&&z?At(h,(P?p.length:g.length)!==0):null,L?null:n("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return n("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},z&&h?n(ht,{onResize:this.handleTabsResize},{default:()=>C}):C,z?n("div",{class:`${e}-tabs-pad`}):null,z?null:n("div",{ref:"barElRef",class:`${e}-tabs-bar`}))};return n("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${a}-type`,`${e}-tabs--${x}-size`,L&&`${e}-tabs--flex`,`${e}-tabs--${o}`],style:this.cssVars},n("div",{class:[`${e}-tabs-nav--${a}-type`,`${e}-tabs-nav--${o}`,`${e}-tabs-nav`]},ve(d,C=>C&&n("div",{class:`${e}-tabs-nav__prefix`},C)),D?n("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},P?p.map((C,_)=>(u.value.push(C.props.name),n(gt,Object.assign({},C.props,{internalCreatedByPane:!0,internalLeftPadded:_!==0}),C.children?{default:C.children.tab}:void 0))):g.map((C,_)=>(u.value.push(C.props.name),_===0?C:Bt(C)))):n(ht,{onResize:this.handleNavResize},{default:()=>n("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(o)?n(ao,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:V}):n("div",{class:`${e}-tabs-nav-y-scroll`},V()))}),y&&h&&z?At(h,!0):null,ve(f,C=>C&&n("div",{class:`${e}-tabs-nav__suffix`},C))),P&&(this.animated?n("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},_t(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):_t(p,this.mergedValue,this.renderedNames)))}});function _t(e,a,o,y,h,x,u){const s=[];return e.forEach(c=>{const{name:d,displayDirective:f,"display-directive":p}=c.props,g=z=>f===z||p===z,P=a===d;if(c.key!==void 0&&(c.key=d),P||g("show")||g("show:lazy")&&o.has(d)){o.has(d)||o.add(d);const z=!g("if");s.push(z?qr(c,[[Zr,P]]):c)}}),u?n(Jr,{name:`${u}-transition`,onBeforeLeave:y,onEnter:h,onAfterEnter:x},{default:()=>s}):s}function At(e,a){return n(gt,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:a,disabled:typeof e=="object"&&e.disabled})}function Bt(e){const a=Qr(e);return a.props?a.props.internalLeftPadded=!0:a.props={internalLeftPadded:!0},a}function bt(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}function Qo(){const e=oo();return function(o){try{o||e.error("\u590D\u5236\u5931\u8D25"),to(o),e.success("\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F!")}catch{e.error("\u590D\u5236\u5931\u8D25")}}}const en=e=>()=>n(ro,null,{default:()=>n(e)});export{qo as N,Zo as _,Jo as a,en as r,Qo as u};
