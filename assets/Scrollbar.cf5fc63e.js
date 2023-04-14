import{R as P}from"./ReloadCircleSharp.e8710d86.js";import{c as A,a as j,b as q,d as E}from"./use.005c1652.js";import{bt as F,bw as G,C as u,O as B,bo as O,bp as Q,f as z,bx as C,by as T,a1 as U,bs as y,aH as Z,aq as J,n as D,y as _,I as b,aZ as R,H as m,A as g,G as $,aQ as K,aP as N,L as W,bc as X,bu as ee}from"./index.263e31e4.js";import{N as te}from"./Icon.07f0951b.js";import{S as re}from"./Scrollbar.e375dfe4.js";const[oe,se]=A(()=>{const s=new O.exports;return Q(()=>{s.removeAllListeners()}),{on(e,o){return s.on(e,o),()=>this.removeListener(e,o)},emit(e){s.emit(e)},removeListener(e,o){s.removeListener(e,o)}}});function he(s,e){const o=F();G(s);const t=se();t==null||t.on("load",()=>{!u(e)||n()}),t==null||t.on("refresh",()=>{!u(e)||a()});function n(){var r;(r=s.value)==null||r.feat.load(),o.info(B("loading"))}function a(){var r;(r=s.value)==null||r.feat.refresh(),o.info(B("refreshing"))}return{load:n,refresh:a}}const ae=z({__name:"Refresh",props:{refreshable:{type:Boolean},loadable:{type:Boolean},triggerDistance:{default:150},maxShifting:{default:200},containerRef:null},emits:["refresh","load"],setup(s,{emit:e}){const o=s,{refreshable:t,loadable:n,containerRef:a,maxShifting:r}=C(o),{emit:i}=oe();function Y(){!(t!=null&&t.value)||(e("refresh"),i==null||i("refresh"))}function H(){!(n!=null&&n.value)||(e("load"),i==null||i("load"))}const{shifting:d,moveScale:fe,add:w,remake:V}=j(r);let v=null;const{x:ue,y:ie,arrivedState:l}=T(a),M=U(()=>{I(),x(),c.value=!0},500);y(a,"mousewheel",f=>{!(l.bottom||l.top)||(M(),w(-f.wheelDeltaY/3),c.value=!0)},{passive:!0}),y(a,"touchmove",f=>{if(!(l.bottom||l.top))return;const h=f.touches[0].clientY;!h||(v&&w(v-h),v=h,c.value=!1)},{passive:!0}),y(a,"touchend",f=>{!(l.bottom||l.top)||(I(),x(),c.value=!0)},{passive:!0}),Z(()=>{l.bottom||l.top||(x(),c.value=!0)});function I(){Math.abs(d.value)>o.triggerDistance&&(d.value>0?H():d.value<0&&Y())}function x(){V(),v=null}const c=J(!1),S=q(),p=D(()=>{if(d.value<0&&l.top)return d.value;if(d.value>0){const f=S==null?void 0:S.containerRef.value;if(l.bottom||f&&f.offsetHeight===f.scrollHeight)return d.value}return 0});return(f,h)=>{const L=P,k=te;return _(),b(W,null,[u(t)?(_(),b("div",{key:0,class:"w-full h-20 flex items-center justify-center absolute",style:R({transform:`translate(0,calc(${-u(p)}px + -100%)) rotate(${-u(p)*10}deg)`,transition:c.value?"transform 0.5s":"",zIndex:1})},[m(k,{size:50},{default:g(()=>[m(L)]),_:1})],4)):$("",!0),K("div",{class:"wraps flex flex-col h-full relative overflow-hidden",style:R({transform:`translate(0,calc(${-u(p)/4}px ))`,transition:c.value?"transform 0.3s":"",zIndex:0})},[N(f.$slots,"default")],4),u(n)?(_(),b("div",{key:1,class:"w-full h-20 flex items-center justify-center absolute bottom-0",style:R({transform:`translate(0px,calc(${-u(p)}px + 100%)) rotate(${-u(p)*10}deg)`,transition:c.value?"transform 0.3s":"",zIndex:1})},[m(k,{size:50},{default:g(()=>[m(L)]),_:1})],4)):$("",!0)],64)}}}),ne={class:"wraps flex flex-col h-full relative overflow-hidden"},le=z({__name:"Scrollbar",props:{refreshable:{type:Boolean},loadable:{type:Boolean},triggerDistance:null,maxShifting:null},emits:["refresh","load"],setup(s,{emit:e}){const o=s,t=D(()=>{var a;return(a=n.value)==null?void 0:a.scrollbarInstRef.containerRef}),{scrollbarInst:n}=E(t);return C(o),(a,r)=>{const i=re;return _(),b("div",ne,[m(ae,X({"container-ref":u(t)},o,{onLoad:r[1]||(r[1]=()=>e("load")),onRefresh:r[2]||(r[2]=()=>e("refresh"))}),{default:g(()=>[m(i,{class:"w-full flex-shrink flex-1",onScroll:r[0]||(r[0]=()=>{}),ref_key:"scrollbarInst",ref:n},{default:g(()=>[N(a.$slots,"default",{},void 0,!0)]),_:3},512)]),_:3},16,["container-ref"])])}}});const _e=ee(le,[["__scopeId","data-v-8d3d4c00"]]);export{_e as S,se as a,he as u};