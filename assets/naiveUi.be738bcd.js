import{br as a,O as t,cv as i,j as s}from"./index.c6be74f9.js";import{u as c}from"./composables.f9376454.js";import{_ as u}from"./Input.361a3be3.js";import{N as l}from"./Icon.8692983b.js";function x(){const r=a(),n=c();return function(o){let e="success";try{if(!o){r.error(t("empty_text"));return}i(o),e="success"}catch{e="error"}n[e]({title:t(e),content:()=>s(u,{value:o,type:"textarea"}),positiveText:t("yes"),negativeText:t("no"),onPositiveClick:()=>{},onNegativeClick:()=>{}})}}const _=r=>()=>s(l,null,{default:()=>s(r)});export{_ as r,x as u};