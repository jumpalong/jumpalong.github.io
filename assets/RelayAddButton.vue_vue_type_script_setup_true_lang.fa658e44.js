import{f as u,bw as p,n as _,C as e,y as a,I as n,F as r,O as i,z as f,aa as l}from"./index.70f8884a.js";import{f as y}from"./use.649125ec.js";import{_ as h}from"./AddButton.vue_vue_type_script_setup_true_lang.1818efac.js";const k={key:0},x={key:1},g={key:2},B={key:3},S={key:4},b=u({__name:"DateTime",props:{secondTimestamp:null},setup(o){const c=o,{secondTimestamp:t}=p(c),d=y(),s=_(()=>d.value-t.value),m=_(()=>new Date(t.value*1e3).toLocaleDateString());return(T,w)=>e(s)>=60*60*24?(a(),n("span",k,r(e(m)),1)):e(s)<60?(a(),n("span",x,r(e(i)("x_seconds_ago",{x:e(s)})),1)):e(s)<3600?(a(),n("span",g,r(e(i)("x_minutes_ago",{x:Math.floor(e(s)/60)})),1)):e(s)<60*60*24?(a(),n("span",B,r(e(i)("x_hours_ago",{x:Math.floor(e(s)/60/60)})),1)):(a(),n("span",S,r(e(m)),1))}}),v=u({__name:"RelayAddButton",props:{url:null},setup(o){return(c,t)=>(a(),f(h,{disabled:e(l).hasReadByUrl(o.url)||e(l).hasWriteByUrl(o.url),onClick:t[0]||(t[0]=()=>{e(l).addWriteRead(o.url),c.$emit("click")})},null,8,["disabled"]))}});export{b as _,v as a};