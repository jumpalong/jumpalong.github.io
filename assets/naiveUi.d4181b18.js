import{bo as a,O as t,cv as i,j as s}from"./index.7cd35645.js";import{u as c}from"./composables.7e69fec0.js";import{_ as u}from"./Input.37ed4e7f.js";import{N as l}from"./Icon.a7306fa3.js";function x(){const o=a(),n=c();return function(r){let e="success";try{if(!r){o.error(t("empty_text"));return}i(r),e="success"}catch{e="error"}n[e]({title:t(e),content:()=>s(u,{value:r,type:"textarea"}),positiveText:t("yes"),negativeText:t("no"),onPositiveClick:()=>{},onNegativeClick:()=>{}})}}const _=o=>()=>s(l,null,{default:()=>s(o)});export{_ as r,x as u};
