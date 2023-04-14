import{R as P}from"./ReloadCircleSharp.6f510cbc.js";import{c as A,a as j,b as q,d as E}from"./use.155929f4.js";import{bs as F,bv as G,C as i,O as B,ac as O,bo as Q,f as z,bw as C,bx as T,a0 as U,br as R,aH as Z,aq as J,n as D,y as _,I as b,aZ as y,H as m,A as g,G as $,aQ as K,aP as N,L as W,bc as X,bt as ee}from"./index.ad5a3ab6.js";import{N as te}from"./Icon.32da1a7c.js";import{S as re}from"./Scrollbar.3d511d24.js";const[oe,ae]=A(()=>{const a=new O.exports;return Q(()=>{a.removeAllListeners()}),{on(e,o){return a.on(e,o),()=>this.removeListener(e,o)},emit(e){a.emit(e)},removeListener(e,o){a.removeListener(e,o)}}});function he(a,e){const o=F();G(a);const t=ae();t==null||t.on("load",()=>{!i(e)||n()}),t==null||t.on("refresh",()=>{!i(e)||s()});function n(){var r;(r=a.value)==null||r.feat.load(),o.info(B("loading"))}function s(){var r;(r=a.value)==null||r.feat.refresh(),o.info(B("refreshing"))}return{load:n,refresh:s}}const se=z({__name:"Refresh",props:{refreshable:{type:Boolean},loadable:{type:Boolean},triggerDistance:{default:150},maxShifting:{default:200},containerRef:null},emits:["refresh","load"],setup(a,{emit:e}){const o=a,{refreshable:t,loadable:n,containerRef:s,maxShifting:r}=C(o),{emit:u}=oe();function Y(){!(t!=null&&t.value)||(e("refresh"),u==null||u("refresh"))}function H(){!(n!=null&&n.value)||(e("load"),u==null||u("load"))}const{shifting:d,moveScale:fe,add:w,remake:V}=j(r);let p=null;const{x:ie,y:ue,arrivedState:l}=T(s),M=U(()=>{I(),x(),c.value=!0},500);R(s,"mousewheel",f=>{!(l.bottom||l.top)||(M(),w(-f.wheelDeltaY/3),c.value=!0)},{passive:!0}),R(s,"touchmove",f=>{if(!(l.bottom||l.top))return;const h=f.touches[0].clientY;!h||(p&&w(p-h),p=h,c.value=!1)},{passive:!0}),R(s,"touchend",f=>{!(l.bottom||l.top)||(I(),x(),c.value=!0)},{passive:!0}),Z(()=>{l.bottom||l.top||(x(),c.value=!0)});function I(){Math.abs(d.value)>o.triggerDistance&&(d.value>0?H():d.value<0&&Y())}function x(){V(),p=null}const c=J(!1),S=q(),v=D(()=>{if(d.value<0&&l.top)return d.value;if(d.value>0){const f=S==null?void 0:S.containerRef.value;if(l.bottom||f&&f.offsetHeight===f.scrollHeight)return d.value}return 0});return(f,h)=>{const L=P,k=te;return _(),b(W,null,[i(t)?(_(),b("div",{key:0,class:"w-full h-20 flex items-center justify-center absolute",style:y({transform:`translate(0,calc(${-i(v)}px + -100%)) rotate(${-i(v)*10}deg)`,transition:c.value?"transform 0.5s":"",zIndex:1})},[m(k,{size:50},{default:g(()=>[m(L)]),_:1})],4)):$("",!0),K("div",{class:"wraps flex flex-col h-full relative overflow-hidden",style:y({transform:`translate(0,calc(${-i(v)/4}px ))`,transition:c.value?"transform 0.3s":"",zIndex:0})},[N(f.$slots,"default")],4),i(n)?(_(),b("div",{key:1,class:"w-full h-20 flex items-center justify-center absolute bottom-0",style:y({transform:`translate(0px,calc(${-i(v)}px + 100%)) rotate(${-i(v)*10}deg)`,transition:c.value?"transform 0.3s":"",zIndex:1})},[m(k,{size:50},{default:g(()=>[m(L)]),_:1})],4)):$("",!0)],64)}}}),ne={class:"wraps flex flex-col h-full relative overflow-hidden"},le=z({__name:"Scrollbar",props:{refreshable:{type:Boolean},loadable:{type:Boolean},triggerDistance:null,maxShifting:null},emits:["refresh","load"],setup(a,{emit:e}){const o=a,t=D(()=>{var s;return(s=n.value)==null?void 0:s.scrollbarInstRef.containerRef}),{scrollbarInst:n}=E(t);return C(o),(s,r)=>{const u=re;return _(),b("div",ne,[m(se,X({"container-ref":i(t)},o,{onLoad:r[1]||(r[1]=()=>e("load")),onRefresh:r[2]||(r[2]=()=>e("refresh"))}),{default:g(()=>[m(u,{class:"w-full flex-shrink flex-1",onScroll:r[0]||(r[0]=()=>{}),ref_key:"scrollbarInst",ref:n},{default:g(()=>[N(s.$slots,"default",{},void 0,!0)]),_:3},512)]),_:3},16,["container-ref"])])}}});const _e=ee(le,[["__scopeId","data-v-8d3d4c00"]]);export{_e as S,ae as a,he as u};
