import{f as J,bL as Q,bM as Z,aE as ee,bp as te,bq as le,n as T,ap as R,aD as ie,b1 as D,cn as E,j as I,bb as ne,aJ as Y,bN as W,dj as se}from"./index.0e420a7a.js";function $(i){return i&-i}class oe{constructor(l,s){this.l=l,this.min=s;const u=new Array(l+1);for(let o=0;o<l+1;++o)u[o]=0;this.ft=u}add(l,s){if(s===0)return;const{l:u,ft:o}=this;for(l+=1;l<=u;)o[l]+=s,l+=$(l)}get(l){return this.sum(l+1)-this.sum(l)}sum(l){if(l===void 0&&(l=this.l),l<=0)return 0;const{ft:s,min:u,l:o}=this;if(l>o)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let r=l*u;for(;l>0;)r+=s[l],l-=$(l);return r}getBound(l){let s=0,u=this.l;for(;u>s;){const o=Math.floor((s+u)/2),r=this.sum(o);if(r>l){u=o;continue}else if(r<l){if(s===o)return this.sum(s+1)<=l?s+1:o;s=o}else return o}return s}}let B;function re(){return B===void 0&&("matchMedia"in window?B=window.matchMedia("(pointer:coarse)").matches:B=!1),B}let _;function X(){return _===void 0&&(_="chrome"in window?window.devicePixelRatio:1),_}const ae=W(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[W("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[W("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),ce=J({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(i){const l=Q();ae.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Z,ssr:l}),ee(()=>{const{defaultScrollIndex:e,defaultScrollKey:t}=i;e!=null?z({index:e}):t!=null&&z({key:t})});let s=!1,u=!1;te(()=>{if(s=!1,!u){u=!0;return}z({top:H.value,left:x})}),le(()=>{s=!0,u||(u=!0)});const o=T(()=>{const e=new Map,{keyField:t}=i;return i.items.forEach((n,c)=>{e.set(n[t],c)}),e}),r=R(null),g=R(void 0),m=new Map,b=T(()=>{const{items:e,itemSize:t,keyField:n}=i,c=new oe(e.length,t);return e.forEach((f,d)=>{const a=f[n],h=m.get(a);h!==void 0&&c.add(d,h)}),c}),w=R(0);let x=0;const H=R(0),O=ie(()=>Math.max(b.value.getBound(H.value-D(i.paddingTop))-1,0)),q=T(()=>{const{value:e}=g;if(e===void 0)return[];const{items:t,itemSize:n}=i,c=O.value,f=Math.min(c+Math.ceil(e/n+1),t.length-1),d=[];for(let a=c;a<=f;++a)d.push(t[a]);return d}),z=(e,t)=>{if(typeof e=="number"){M(e,t,"auto");return}const{left:n,top:c,index:f,key:d,position:a,behavior:h,debounce:v=!0}=e;if(n!==void 0||c!==void 0)M(n,c,h);else if(f!==void 0)V(f,h,v);else if(d!==void 0){const F=o.value.get(d);F!==void 0&&V(F,h,v)}else a==="bottom"?M(0,Number.MAX_SAFE_INTEGER,h):a==="top"&&M(0,0,h)};let S,k=null;function V(e,t,n){const{value:c}=b,f=c.sum(e)+D(i.paddingTop);if(!n)r.value.scrollTo({left:0,top:f,behavior:t});else{S=e,k!==null&&window.clearTimeout(k),k=window.setTimeout(()=>{S=void 0,k=null},16);const{scrollTop:d,offsetHeight:a}=r.value;if(f>d){const h=c.get(e);f+h<=d+a||r.value.scrollTo({left:0,top:f+h-a,behavior:t})}else r.value.scrollTo({left:0,top:f,behavior:t})}}function M(e,t,n){r.value.scrollTo({left:e,top:t,behavior:n})}function C(e,t){var n,c,f;if(s||i.ignoreItemResize||P(t.target))return;const{value:d}=b,a=o.value.get(e),h=d.get(a),v=(f=(c=(n=t.borderBoxSize)===null||n===void 0?void 0:n[0])===null||c===void 0?void 0:c.blockSize)!==null&&f!==void 0?f:t.contentRect.height;if(v===h)return;v-i.itemSize===0?m.delete(e):m.set(e,v-i.itemSize);const p=v-h;if(p===0)return;d.add(a,p);const y=r.value;if(y!=null){if(S===void 0){const A=d.sum(a);y.scrollTop>A&&y.scrollBy(0,p)}else if(a<S)y.scrollBy(0,p);else if(a===S){const A=d.sum(a);v+A>y.scrollTop+y.offsetHeight&&y.scrollBy(0,p)}N()}w.value++}const j=!re();let L=!1;function K(e){var t;(t=i.onScroll)===null||t===void 0||t.call(i,e),(!j||!L)&&N()}function U(e){var t;if((t=i.onWheel)===null||t===void 0||t.call(i,e),j){const n=r.value;if(n!=null){if(e.deltaX===0&&(n.scrollTop===0&&e.deltaY<=0||n.scrollTop+n.offsetHeight>=n.scrollHeight&&e.deltaY>=0))return;e.preventDefault(),n.scrollTop+=e.deltaY/X(),n.scrollLeft+=e.deltaX/X(),N(),L=!0,se(()=>{L=!1})}}}function G(e){if(s||P(e.target)||e.contentRect.height===g.value)return;g.value=e.contentRect.height;const{onResize:t}=i;t!==void 0&&t(e)}function N(){const{value:e}=r;e!=null&&(H.value=e.scrollTop,x=e.scrollLeft)}function P(e){let t=e;for(;t!==null;){if(t.style.display==="none")return!0;t=t.parentElement}return!1}return{listHeight:g,listStyle:{overflow:"auto"},keyToIndex:o,itemsStyle:T(()=>{const{itemResizable:e}=i,t=E(b.value.sum());return w.value,[i.itemsStyle,{boxSizing:"content-box",height:e?"":t,minHeight:e?t:"",paddingTop:E(i.paddingTop),paddingBottom:E(i.paddingBottom)}]}),visibleItemsStyle:T(()=>(w.value,{transform:`translateY(${E(b.value.sum(O.value))})`})),viewportItems:q,listElRef:r,itemsElRef:R(null),scrollTo:z,handleListResize:G,handleListScroll:K,handleListWheel:U,handleItemResize:C}},render(){const{itemResizable:i,keyField:l,keyToIndex:s,visibleItemsTag:u}=this;return I(Y,{onResize:this.handleListResize},{default:()=>{var o,r;return I("div",ne(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?I("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[I(u,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(g=>{const m=g[l],b=s.get(m),w=this.$slots.default({item:g,index:b})[0];return i?I(Y,{key:m,onResize:x=>this.handleItemResize(m,x)},{default:()=>w}):(w.key=m,w)})})]):(r=(o=this.$slots).empty)===null||r===void 0?void 0:r.call(o)])}})}});export{ce as V};