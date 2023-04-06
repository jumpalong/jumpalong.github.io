import{bs as $,y as n,I as u,aP as h,f as k,au as j,ap as p,a0 as A,m as F,aG as U,ah as D,n as L,H as c,A as a,C as e,aY as S,F as H,z as v,G as b,cg as G,ch as M,aj as J,ac as B,a1 as K,ci as W,ad as Y,_ as R,bv as q,aO as N,D as Q,J as X,L as Z,O as ee}from"./index.2fe28766.js";import{u as te,_ as ne}from"./RelayInfoView.b913d7d0.js";import{E as se}from"./Ellipsis.15ec39c0.js";import{g as oe}from"./use.68f6b21a.js";import{N as E}from"./Icon.a8651358.js";import{u as le}from"./use-theme-vars.e1c34773.js";import{_ as re}from"./Empty.e8510f06.js";import{_ as ce,a as ae}from"./ListItem.2ed27533.js";const ue={},ie={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},_e=h("path",{d:"M15.9 5c-.17 0-.32.09-.41.23l-.07.15l-5.18 11.65c-.16.29-.26.61-.26.96c0 1.11.9 2.01 2.01 2.01c.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM2.06 10.06c.51.51 1.33.55 1.89.09c2.76-2.26 6.24-3.18 9.58-2.76l1.19-2.68c-4.35-.78-8.96.3-12.57 3.25c-.64.53-.68 1.51-.09 2.1zm19.88 0c.59-.59.55-1.57-.1-2.1a15.393 15.393 0 0 0-4.44-2.53l-.53 2.82c1.13.47 2.19 1.09 3.17 1.89c.58.46 1.39.43 1.9-.08zm-4.03 4.03c.6-.6.56-1.63-.14-2.12c-.46-.33-.94-.61-1.44-.86l-.55 2.92c.11.07.22.14.32.22c.57.4 1.33.32 1.81-.16zm-11.83-.01c.5.5 1.27.54 1.85.13c.94-.66 2.01-1.06 3.1-1.22l1.28-2.88c-2.13-.06-4.28.54-6.09 1.84c-.69.51-.74 1.53-.14 2.13z",fill:"currentColor"},null,-1),fe=[_e];function pe(l,r){return n(),u("svg",ie,fe)}const me=$(ue,[["render",pe]]),de={},ve={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},he=h("path",{d:"M13 8v8h-3V8h3m0-3h-3C8.34 5 7 6.34 7 8v8c0 1.66 1.34 3 3 3h3c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3zM1 8h2v11h3V5H1v3zm17.5 3c-.83 0-1.5.68-1.5 1.5v2c0 .82.67 1.5 1.5 1.5H21v1h-4v2h4.5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H19v-1h4v-2h-4.5z",fill:"currentColor"},null,-1),we=[he];function xe(l,r){return n(),u("svg",ve,we)}const ge=$(de,[["render",xe]]),ye={},$e={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ke=h("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M2.74 18c-.77 1.33.19 3 1.73 3h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18zM11 11v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zm0 5h2v2h-2z",fill:"currentColor"},null,-1),Ce=[ke];function be(l,r){return n(),u("svg",$e,Ce)}const ze=$(ye,[["render",be]]),Ve=k({__name:"Ping",props:{url:null},setup(l){const s=j(l,"url");let m=p(!1),i=p(!1),t=p(null);const _=p(1e4),o=p(500),y=p(null),x=oe(y);let d=p(!1);function z(g=!1){if(!!s.value&&!t.value){d.value=!0;try{let f=new URL(s.value).host;if(g&&(M(`p:${f}`),M(`pe:${f}`)),J(`pe:${f}`,B)){d.value=!1,i.value=!0;return}Promise.resolve(K(`p:${f}`,()=>W(f,_.value),{cacheError:!1})).then(w=>{t.value=w,d.value=!1}).catch(w=>{Y(`pe:${f}`,!0,B),d.value=!1,i.value=!0})}catch{m.value=!0,d.value=!1}}}const P=A(z),T=Symbol(),C=F(T,()=>null,!0);U(()=>{var g;!(x.value&&((g=C==null?void 0:C.value)!=null?g:D.autoPing))||P()});const V=L(()=>t.value?t.value>=_.value?255:t.value<=o.value?0:Math.floor(t.value/(_.value-o.value)*255):0);function I(){t.value=null,z(!0)}return(g,f)=>{const w=E,O=R;return n(),u("div",{key:e(s),ref_key:"target",ref:y,class:"rounded-full text-center felx items-center justify-center"},[c(O,{text:"",round:"",onClick:G(I,["stop"]),loading:e(d)},{default:a(()=>[e(t)?(n(),u("span",{key:0,style:S({fontSize:"0.5em",color:`rgb(${e(V)},${255-e(V)},0)`})},H(e(t)),5)):e(m)?(n(),v(w,{key:1,color:"red"},{default:a(()=>[c(ze)]),_:1})):e(i)?(n(),v(w,{key:2,color:"orange"},{default:a(()=>[c(ge)]),_:1})):e(d)?b("",!0):(n(),v(w,{key:3,color:"#3742fa"},{default:a(()=>[c(me)]),_:1}))]),_:1},8,["onClick","loading"])])}}}),Me={class:"flex w-full"},Be=k({__name:"RelayUrlShow",props:{url:null},setup(l){const r=l,{url:s}=q(r),m=le(),{toRelayInfoView:i}=te(),t=p(!1);return(_,o)=>(n(),u("div",null,[e(s)?(n(),u("div",{key:0,class:"flex w-full button",onClick:o[0]||(o[0]=()=>e(i)(e(s))),onMouseenter:o[1]||(o[1]=()=>t.value=!0),onMouseleave:o[2]||(o[2]=()=>t.value=!1),style:S({color:t.value?e(m).successColorHover:void 0})},[h("span",Me,[N(_.$slots,"default",{class:"w-0 flex-1 flex-shrink"},()=>[c(se,null,{default:a(()=>[Q(H(e(s)),1)]),_:1})]),c(Ve,{class:"shrink-0",url:e(s)},null,8,["url"])])],36)):b("",!0)]))}}),Le={key:0,class:"w-full h-28 flex justify-center items-center"},Se={class:"flex items-center flex-shrink-0 w-max"},Je=k({__name:"RelayConnectList",props:{urls:null,title:null,loadable:{type:Boolean}},setup(l){const r=l,s=L(()=>r.urls[Symbol.iterator]().next().done===!0);return(m,i)=>{const t=ne,_=re,o=ae,y=ce;return n(),v(y,{class:"w-full transparent"},{default:a(()=>[r.loadable&&e(s)?(n(),u("div",Le,[c(t,{size:"large"})])):e(s)?(n(),v(_,{key:1,size:"large",description:e(ee)("empty_text")},null,8,["description"])):b("",!0),(n(!0),u(Z,null,X(l.urls,x=>(n(),v(o,{class:"flex",key:x},{suffix:a(()=>[h("div",Se,[N(m.$slots,"right",{url:x})])]),default:a(()=>[c(Be,{url:x},null,8,["url"])]),_:2},1024))),128))]),_:3})}}}),He={},Re={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},Ne=h("g",{fill:"none"},[h("path",{d:"M10.5 2.75a.75.75 0 0 0-1.5 0V9H2.75a.75.75 0 0 0 0 1.5H9v6.25a.75.75 0 0 0 1.5 0V10.5h6.25a.75.75 0 0 0 0-1.5H10.5V2.75z",fill:"currentColor"})],-1),Ee=[Ne];function Pe(l,r){return n(),u("svg",Re,Ee)}const Te=$(He,[["render",Pe]]),Ke=k({__name:"AddButton",props:{disabled:{type:Boolean}},emits:["click"],setup(l,{emit:r}){const s=l;return(m,i)=>{const t=E,_=R;return n(),v(_,{disabled:s.disabled,circle:"",text:"",type:"primary",class:"text-[#6c5ce7] hover:text-[#a29bfe]",onClick:i[0]||(i[0]=o=>r("click",o))},{icon:a(()=>[c(t,null,{default:a(()=>[c(Te)]),_:1})]),_:1},8,["disabled"])}}});export{Ke as _,Je as a,Be as b};
