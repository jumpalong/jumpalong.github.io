import{c as g}from"./Contact.d4d96830.js";import{P as h,Q as v,R as w,n}from"./index.c4788000.js";import{g as p}from"./FollowChannel.952efedf.js";const s=[];s.push(()=>{h()&&(g.follow("076fae9a020673caf9db66734884aa4a77f49ba394274896e439e1c6ff178289","wss://nos.lol","\u4F60\u597D"),p().joinChannel("25e5c82273a271cb1a840d0060391a0bf4965cafeb029d5ab55350b418953fbb",{relays:["wss://nos.lol"]}),p().joinChannel("22dcc0565a6c698199767e80b0526769cf3c04460b7ffc22a4b4cfbfdd642b53",{relays:["wss://nos.lol"]}))});function F(){const o=v(),r=w(),t=n(()=>{var e;return(e=o.meta.step)!=null?e:0}),b=n(()=>{var e;return(e=o.name)!=null?e:""}),c=n(()=>{var e,a;return(a=(e=o.matched[0])==null?void 0:e.children.length)!=null?a:1}),u=n(()=>t.value>1),f=n(()=>t.value<c.value);function m(){if(!f.value){i();return}l(t.value+1)}function d(){!u.value||l(t.value-1)}function l(e){r.push({path:`/login-step-${e}`})}async function i(){s.push(()=>{h()&&localStorage.removeItem("newUserFlag")}),s.forEach(a=>a());const e=o.query.redirected;if(!e){r.push("/");return}r.push(e)}return{nextStep:m,prevStep:d,withPrevStep:u,withNestStep:f,current:t,name:b,numberOfSteps:c,complete:i,loginOperations:s}}export{F as u};