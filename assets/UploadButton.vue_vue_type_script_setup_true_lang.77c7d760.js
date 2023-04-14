import{C as S}from"./CloudUpload.0792136c.js";import{c as d,e as $,b as r,a as e,d as _,f as y,u as E,au as k,p as G,cf as N,g as P,j as z,bx as U,cg as j,y as q,z as D,A as u,H as c,_ as I,ch as L,ci as M}from"./index.263e31e4.js";import{N as T}from"./Icon.07f0951b.js";const t="0!important",x="-1px!important";function n(o){return e(o+"-type",[r("& +",[d("button",{},[e(o+"-type",[_("border",{borderLeftWidth:t}),_("state-border",{left:x})])])])])}function a(o){return e(o+"-type",[r("& +",[d("button",[e(o+"-type",[_("border",{borderTopWidth:t}),_("state-border",{top:x})])])])])}const V=d("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[$("vertical",{flexDirection:"row"},[$("rtl",[d("button",[r("&:first-child:not(:last-child)",`
 margin-right: ${t};
 border-top-right-radius: ${t};
 border-bottom-right-radius: ${t};
 `),r("&:last-child:not(:first-child)",`
 margin-left: ${t};
 border-top-left-radius: ${t};
 border-bottom-left-radius: ${t};
 `),r("&:not(:first-child):not(:last-child)",`
 margin-left: ${t};
 margin-right: ${t};
 border-radius: ${t};
 `),n("default"),e("ghost",[n("primary"),n("info"),n("success"),n("warning"),n("error")])])])]),e("vertical",{flexDirection:"column"},[d("button",[r("&:first-child:not(:last-child)",`
 margin-bottom: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-bottom-left-radius: ${t};
 border-bottom-right-radius: ${t};
 `),r("&:last-child:not(:first-child)",`
 margin-top: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-top-left-radius: ${t};
 border-top-right-radius: ${t};
 `),r("&:not(:first-child):not(:last-child)",`
 margin: ${t};
 border-radius: ${t};
 `),a("default"),e("ghost",[a("primary"),a("info"),a("success"),a("warning"),a("error")])])])]),W={size:{type:String,default:void 0},vertical:Boolean},A=y({name:"ButtonGroup",props:W,setup(o){const{mergedClsPrefixRef:s,mergedRtlRef:m}=E(o);return k("-button-group",V,s),G(N,o),{rtlEnabled:P("ButtonGroup",m,s),mergedClsPrefix:s}},render(){const{mergedClsPrefix:o}=this;return z("div",{class:[`${o}-button-group`,this.rtlEnabled&&`${o}-button-group--rtl`,this.vertical&&`${o}-button-group--vertical`],role:"group"},this.$slots)}}),O=y({__name:"UploadButton",props:{upload:null},emits:["uploadResult"],setup(o,{emit:s}){const m=o,{upload:i}=U(m),v=j(),g=new Set;async function C({file:{file:p,status:h,id:l},onFinish:f}){if(!g.has(l)&&h==="pending"&&!!p)if(i!=null&&i.value)i.value(p),g.add(l),f();else{const b=await v(p);f(),g.add(l),s("uploadResult",b)}}return(p,h)=>{const l=T,f=I,b=L,R=A,B=M;return q(),D(B,{abstract:"",customRequest:C},{default:u(()=>[c(R,null,{default:u(()=>[c(b,{abstract:""},{default:u(({handleClick:w})=>[c(f,{quaternary:"",onClick:w},{default:u(()=>[c(l,null,{default:u(()=>[c(S)]),_:1})]),_:2},1032,["onClick"])]),_:1})]),_:1})]),_:1})}}});export{O as _};