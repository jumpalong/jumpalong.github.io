(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function pi(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const od="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sd=pi(od);function Qc(e){return!!e||e===""}function gi(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=$e(r)?cd(r):gi(r);if(o)for(const s in o)t[s]=o[s]}return t}else{if($e(e))return e;if(xe(e))return e}}const id=/;(?![^(]*\))/g,ad=/:(.+)/;function cd(e){const t={};return e.split(id).forEach(n=>{if(n){const r=n.split(ad);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function mi(e){let t="";if($e(e))t=e;else if(Y(e))for(let n=0;n<e.length;n++){const r=mi(e[n]);r&&(t+=r+" ")}else if(xe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const r2=e=>$e(e)?e:e==null?"":Y(e)||xe(e)&&(e.toString===nl||!Q(e.toString))?JSON.stringify(e,Jc,2):String(e),Jc=(e,t)=>t&&t.__v_isRef?Jc(e,t.value):jn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:el(t)?{[`Set(${t.size})`]:[...t.values()]}:xe(t)&&!Y(t)&&!rl(t)?String(t):t,ye={},Ln=[],lt=()=>{},ld=()=>!1,ud=/^on[^a-z]/,Ko=e=>ud.test(e),bi=e=>e.startsWith("onUpdate:"),Oe=Object.assign,yi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},fd=Object.prototype.hasOwnProperty,oe=(e,t)=>fd.call(e,t),Y=Array.isArray,jn=e=>Wo(e)==="[object Map]",el=e=>Wo(e)==="[object Set]",Q=e=>typeof e=="function",$e=e=>typeof e=="string",wi=e=>typeof e=="symbol",xe=e=>e!==null&&typeof e=="object",tl=e=>xe(e)&&Q(e.then)&&Q(e.catch),nl=Object.prototype.toString,Wo=e=>nl.call(e),dd=e=>Wo(e).slice(8,-1),rl=e=>Wo(e)==="[object Object]",vi=e=>$e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,vo=pi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},hd=/-(\w)/g,wt=Vo(e=>e.replace(hd,(t,n)=>n?n.toUpperCase():"")),pd=/\B([A-Z])/g,tr=Vo(e=>e.replace(pd,"-$1").toLowerCase()),qo=Vo(e=>e.charAt(0).toUpperCase()+e.slice(1)),ys=Vo(e=>e?`on${qo(e)}`:""),Hr=(e,t)=>!Object.is(e,t),xo=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Co=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ao=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ha;const gd=()=>ha||(ha=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let qe;class md{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=qe,!t&&qe&&(this.index=(qe.scopes||(qe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=qe;try{return qe=this,t()}finally{qe=n}}}on(){qe=this}off(){qe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function bd(e,t=qe){t&&t.active&&t.effects.push(e)}function o2(){return qe}function s2(e){qe&&qe.cleanups.push(e)}const xi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ol=e=>(e.w&en)>0,sl=e=>(e.n&en)>0,yd=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=en},wd=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];ol(o)&&!sl(o)?o.delete(e):t[n++]=o,o.w&=~en,o.n&=~en}t.length=n}},js=new WeakMap;let vr=0,en=1;const Ms=30;let it;const wn=Symbol(""),Us=Symbol("");class Ei{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bd(this,r)}run(){if(!this.active)return this.fn();let t=it,n=Zt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=it,it=this,Zt=!0,en=1<<++vr,vr<=Ms?yd(this):pa(this),this.fn()}finally{vr<=Ms&&wd(this),en=1<<--vr,it=this.parent,Zt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){it===this?this.deferStop=!0:this.active&&(pa(this),this.onStop&&this.onStop(),this.active=!1)}}function pa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Zt=!0;const il=[];function nr(){il.push(Zt),Zt=!1}function rr(){const e=il.pop();Zt=e===void 0?!0:e}function Ye(e,t,n){if(Zt&&it){let r=js.get(e);r||js.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=xi()),al(o)}}function al(e,t){let n=!1;vr<=Ms?sl(e)||(e.n|=en,n=!ol(e)):n=!e.has(it),n&&(e.add(it),it.deps.push(e))}function Tt(e,t,n,r,o,s){const i=js.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&Y(e))i.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(i.get(n)),t){case"add":Y(e)?vi(n)&&a.push(i.get("length")):(a.push(i.get(wn)),jn(e)&&a.push(i.get(Us)));break;case"delete":Y(e)||(a.push(i.get(wn)),jn(e)&&a.push(i.get(Us)));break;case"set":jn(e)&&a.push(i.get(wn));break}if(a.length===1)a[0]&&Ns(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ns(xi(c))}}function Ns(e,t){const n=Y(e)?e:[...e];for(const r of n)r.computed&&ga(r);for(const r of n)r.computed||ga(r)}function ga(e,t){(e!==it||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const vd=pi("__proto__,__v_isRef,__isVue"),cl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wi)),xd=_i(),Ed=_i(!1,!0),_d=_i(!0),ma=Cd();function Cd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ue(this);for(let s=0,i=this.length;s<i;s++)Ye(r,"get",s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(ue)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){nr();const r=ue(this)[t].apply(this,n);return rr(),r}}),e}function _i(e=!1,t=!1){return function(r,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Nd:hl:t?dl:fl).get(r))return r;const i=Y(r);if(!e&&i&&oe(ma,o))return Reflect.get(ma,o,s);const a=Reflect.get(r,o,s);return(wi(o)?cl.has(o):vd(o))||(e||Ye(r,"get",o),t)?a:He(a)?i&&vi(o)?a:a.value:xe(a)?e?Si(a):or(a):a}}const Ad=ll(),Sd=ll(!0);function ll(e=!1){return function(n,r,o,s){let i=n[r];if(zn(i)&&He(i)&&!He(o))return!1;if(!e&&(!So(o)&&!zn(o)&&(i=ue(i),o=ue(o)),!Y(n)&&He(i)&&!He(o)))return i.value=o,!0;const a=Y(n)&&vi(r)?Number(r)<n.length:oe(n,r),c=Reflect.set(n,r,o,s);return n===ue(s)&&(a?Hr(o,i)&&Tt(n,"set",r,o):Tt(n,"add",r,o)),c}}function $d(e,t){const n=oe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Tt(e,"delete",t,void 0),r}function Td(e,t){const n=Reflect.has(e,t);return(!wi(t)||!cl.has(t))&&Ye(e,"has",t),n}function kd(e){return Ye(e,"iterate",Y(e)?"length":wn),Reflect.ownKeys(e)}const ul={get:xd,set:Ad,deleteProperty:$d,has:Td,ownKeys:kd},Od={get:_d,set(e,t){return!0},deleteProperty(e,t){return!0}},Id=Oe({},ul,{get:Ed,set:Sd}),Ci=e=>e,Go=e=>Reflect.getPrototypeOf(e);function to(e,t,n=!1,r=!1){e=e.__v_raw;const o=ue(e),s=ue(t);n||(t!==s&&Ye(o,"get",t),Ye(o,"get",s));const{has:i}=Go(o),a=r?Ci:n?Ti:Rr;if(i.call(o,t))return a(e.get(t));if(i.call(o,s))return a(e.get(s));e!==o&&e.get(t)}function no(e,t=!1){const n=this.__v_raw,r=ue(n),o=ue(e);return t||(e!==o&&Ye(r,"has",e),Ye(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function ro(e,t=!1){return e=e.__v_raw,!t&&Ye(ue(e),"iterate",wn),Reflect.get(e,"size",e)}function ba(e){e=ue(e);const t=ue(this);return Go(t).has.call(t,e)||(t.add(e),Tt(t,"add",e,e)),this}function ya(e,t){t=ue(t);const n=ue(this),{has:r,get:o}=Go(n);let s=r.call(n,e);s||(e=ue(e),s=r.call(n,e));const i=o.call(n,e);return n.set(e,t),s?Hr(t,i)&&Tt(n,"set",e,t):Tt(n,"add",e,t),this}function wa(e){const t=ue(this),{has:n,get:r}=Go(t);let o=n.call(t,e);o||(e=ue(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&Tt(t,"delete",e,void 0),s}function va(){const e=ue(this),t=e.size!==0,n=e.clear();return t&&Tt(e,"clear",void 0,void 0),n}function oo(e,t){return function(r,o){const s=this,i=s.__v_raw,a=ue(i),c=t?Ci:e?Ti:Rr;return!e&&Ye(a,"iterate",wn),i.forEach((l,u)=>r.call(o,c(l),c(u),s))}}function so(e,t,n){return function(...r){const o=this.__v_raw,s=ue(o),i=jn(s),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,l=o[e](...r),u=n?Ci:t?Ti:Rr;return!t&&Ye(s,"iterate",c?Us:wn),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Rt(e){return function(...t){return e==="delete"?!1:this}}function Hd(){const e={get(s){return to(this,s)},get size(){return ro(this)},has:no,add:ba,set:ya,delete:wa,clear:va,forEach:oo(!1,!1)},t={get(s){return to(this,s,!1,!0)},get size(){return ro(this)},has:no,add:ba,set:ya,delete:wa,clear:va,forEach:oo(!1,!0)},n={get(s){return to(this,s,!0)},get size(){return ro(this,!0)},has(s){return no.call(this,s,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:oo(!0,!1)},r={get(s){return to(this,s,!0,!0)},get size(){return ro(this,!0)},has(s){return no.call(this,s,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:oo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=so(s,!1,!1),n[s]=so(s,!0,!1),t[s]=so(s,!1,!0),r[s]=so(s,!0,!0)}),[e,n,t,r]}const[Rd,Pd,Bd,Ld]=Hd();function Ai(e,t){const n=t?e?Ld:Bd:e?Pd:Rd;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(oe(n,o)&&o in r?n:r,o,s)}const jd={get:Ai(!1,!1)},Md={get:Ai(!1,!0)},Ud={get:Ai(!0,!1)},fl=new WeakMap,dl=new WeakMap,hl=new WeakMap,Nd=new WeakMap;function Fd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zd(e){return e.__v_skip||!Object.isExtensible(e)?0:Fd(dd(e))}function or(e){return zn(e)?e:$i(e,!1,ul,jd,fl)}function Dd(e){return $i(e,!1,Id,Md,dl)}function Si(e){return $i(e,!0,Od,Ud,hl)}function $i(e,t,n,r,o){if(!xe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=zd(e);if(i===0)return e;const a=new Proxy(e,i===2?r:n);return o.set(e,a),a}function Mn(e){return zn(e)?Mn(e.__v_raw):!!(e&&e.__v_isReactive)}function zn(e){return!!(e&&e.__v_isReadonly)}function So(e){return!!(e&&e.__v_isShallow)}function pl(e){return Mn(e)||zn(e)}function ue(e){const t=e&&e.__v_raw;return t?ue(t):e}function $o(e){return Co(e,"__v_skip",!0),e}const Rr=e=>xe(e)?or(e):e,Ti=e=>xe(e)?Si(e):e;function gl(e){Zt&&it&&(e=ue(e),al(e.dep||(e.dep=xi())))}function ml(e,t){e=ue(e),e.dep&&Ns(e.dep)}function He(e){return!!(e&&e.__v_isRef===!0)}function tn(e){return bl(e,!1)}function Kd(e){return bl(e,!0)}function bl(e,t){return He(e)?e:new Wd(e,t)}class Wd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ue(t),this._value=n?t:Rr(t)}get value(){return gl(this),this._value}set value(t){const n=this.__v_isShallow||So(t)||zn(t);t=n?t:ue(t),Hr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Rr(t),ml(this))}}function Yt(e){return He(e)?e.value:e}const Vd={get:(e,t,n)=>Yt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return He(o)&&!He(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function yl(e){return Mn(e)?e:new Proxy(e,Vd)}class qd{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function ki(e,t,n){const r=e[t];return He(r)?r:new qd(e,t,n)}var wl;class Gd{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[wl]=!1,this._dirty=!0,this.effect=new Ei(t,()=>{this._dirty||(this._dirty=!0,ml(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=ue(this);return gl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}wl="__v_isReadonly";function Zd(e,t,n=!1){let r,o;const s=Q(e);return s?(r=e,o=lt):(r=e.get,o=e.set),new Gd(r,o,s||!o,n)}function Xt(e,t,n,r){let o;try{o=r?e(...r):e()}catch(s){Zo(s,t,n)}return o}function nt(e,t,n,r){if(Q(e)){const s=Xt(e,t,n,r);return s&&tl(s)&&s.catch(i=>{Zo(i,t,n)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(nt(e[s],t,n,r));return o}function Zo(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,i,a)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Xt(c,null,10,[e,i,a]);return}}Yd(e,n,o,r)}function Yd(e,t,n,r=!0){console.error(e)}let Pr=!1,Fs=!1;const Le=[];let yt=0;const Un=[];let St=null,un=0;const vl=Promise.resolve();let Oi=null;function xl(e){const t=Oi||vl;return e?t.then(this?e.bind(this):e):t}function Xd(e){let t=yt+1,n=Le.length;for(;t<n;){const r=t+n>>>1;Br(Le[r])<e?t=r+1:n=r}return t}function Ii(e){(!Le.length||!Le.includes(e,Pr&&e.allowRecurse?yt+1:yt))&&(e.id==null?Le.push(e):Le.splice(Xd(e.id),0,e),El())}function El(){!Pr&&!Fs&&(Fs=!0,Oi=vl.then(Cl))}function Qd(e){const t=Le.indexOf(e);t>yt&&Le.splice(t,1)}function Jd(e){Y(e)?Un.push(...e):(!St||!St.includes(e,e.allowRecurse?un+1:un))&&Un.push(e),El()}function xa(e,t=Pr?yt+1:0){for(;t<Le.length;t++){const n=Le[t];n&&n.pre&&(Le.splice(t,1),t--,n())}}function _l(e){if(Un.length){const t=[...new Set(Un)];if(Un.length=0,St){St.push(...t);return}for(St=t,St.sort((n,r)=>Br(n)-Br(r)),un=0;un<St.length;un++)St[un]();St=null,un=0}}const Br=e=>e.id==null?1/0:e.id,eh=(e,t)=>{const n=Br(e)-Br(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Cl(e){Fs=!1,Pr=!0,Le.sort(eh);const t=lt;try{for(yt=0;yt<Le.length;yt++){const n=Le[yt];n&&n.active!==!1&&Xt(n,null,14)}}finally{yt=0,Le.length=0,_l(),Pr=!1,Oi=null,(Le.length||Un.length)&&Cl()}}function th(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ye;let o=n;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in r){const u=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:d}=r[u]||ye;d&&(o=n.map(g=>g.trim())),f&&(o=n.map(Ao))}let a,c=r[a=ys(t)]||r[a=ys(wt(t))];!c&&s&&(c=r[a=ys(tr(t))]),c&&nt(c,e,6,o);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,nt(l,e,6,o)}}function Al(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let i={},a=!1;if(!Q(e)){const c=l=>{const u=Al(l,t,!0);u&&(a=!0,Oe(i,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(xe(e)&&r.set(e,null),null):(Y(s)?s.forEach(c=>i[c]=null):Oe(i,s),xe(e)&&r.set(e,i),i)}function Yo(e,t){return!e||!Ko(t)?!1:(t=t.slice(2).replace(/Once$/,""),oe(e,t[0].toLowerCase()+t.slice(1))||oe(e,tr(t))||oe(e,t))}let je=null,Sl=null;function To(e){const t=je;return je=e,Sl=e&&e.type.__scopeId||null,t}function zs(e,t=je,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&Ra(-1);const s=To(t);let i;try{i=e(...o)}finally{To(s),r._d&&Ra(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function ws(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:d,setupState:g,ctx:h,inheritAttrs:b}=e;let w,y;const x=To(e);try{if(n.shapeFlag&4){const v=o||r;w=bt(u.call(v,v,f,s,g,d,h)),y=c}else{const v=t;w=bt(v.length>1?v(s,{attrs:c,slots:a,emit:l}):v(s,null)),y=t.props?c:nh(c)}}catch(v){Ar.length=0,Zo(v,e,1),w=Re(rt)}let T=w;if(y&&b!==!1){const v=Object.keys(y),{shapeFlag:A}=T;v.length&&A&7&&(i&&v.some(bi)&&(y=rh(y,i)),T=nn(T,y))}return n.dirs&&(T=nn(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),w=T,To(x),w}const nh=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ko(n))&&((t||(t={}))[n]=e[n]);return t},rh=(e,t)=>{const n={};for(const r in e)(!bi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function oh(e,t,n){const{props:r,children:o,component:s}=e,{props:i,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ea(r,i,l):!!i;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(i[d]!==r[d]&&!Yo(l,d))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?Ea(r,i,l):!0:!!i;return!1}function Ea(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==e[s]&&!Yo(n,s))return!0}return!1}function sh({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ih=e=>e.__isSuspense;function ah(e,t){t&&t.pendingBranch?Y(e)?t.effects.push(...e):t.effects.push(e):Jd(e)}function vn(e,t){if(ke){let n=ke.provides;const r=ke.parent&&ke.parent.provides;r===n&&(n=ke.provides=Object.create(r)),n[e]=t}}function Se(e,t,n=!1){const r=ke||je;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Q(t)?t.call(r.proxy):t}}function $l(e,t){return Hi(e,null,t)}const _a={};function Er(e,t,n){return Hi(e,t,n)}function Hi(e,t,{immediate:n,deep:r,flush:o,onTrack:s,onTrigger:i}=ye){const a=ke;let c,l=!1,u=!1;if(He(e)?(c=()=>e.value,l=So(e)):Mn(e)?(c=()=>e,r=!0):Y(e)?(u=!0,l=e.some(y=>Mn(y)||So(y)),c=()=>e.map(y=>{if(He(y))return y.value;if(Mn(y))return pn(y);if(Q(y))return Xt(y,a,2)})):Q(e)?t?c=()=>Xt(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),nt(e,a,3,[d])}:c=lt,t&&r){const y=c;c=()=>pn(y())}let f,d=y=>{f=w.onStop=()=>{Xt(y,a,4)}};if(Ur)return d=lt,t?n&&nt(t,a,3,[c(),u?[]:void 0,d]):c(),lt;let g=u?[]:_a;const h=()=>{if(!!w.active)if(t){const y=w.run();(r||l||(u?y.some((x,T)=>Hr(x,g[T])):Hr(y,g)))&&(f&&f(),nt(t,a,3,[y,g===_a?void 0:g,d]),g=y)}else w.run()};h.allowRecurse=!!t;let b;o==="sync"?b=h:o==="post"?b=()=>Fe(h,a&&a.suspense):(h.pre=!0,a&&(h.id=a.uid),b=()=>Ii(h));const w=new Ei(c,b);return t?n?h():g=w.run():o==="post"?Fe(w.run.bind(w),a&&a.suspense):w.run(),()=>{w.stop(),a&&a.scope&&yi(a.scope.effects,w)}}function ch(e,t,n){const r=this.proxy,o=$e(e)?e.includes(".")?Tl(r,e):()=>r[e]:e.bind(r,r);let s;Q(t)?s=t:(s=t.handler,n=t);const i=ke;Dn(this);const a=Hi(o,s.bind(r),n);return i?Dn(i):xn(),a}function Tl(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function pn(e,t){if(!xe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),He(e))pn(e.value,t);else if(Y(e))for(let n=0;n<e.length;n++)pn(e[n],t);else if(el(e)||jn(e))e.forEach(n=>{pn(n,t)});else if(rl(e))for(const n in e)pn(e[n],t);return e}function kl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return es(()=>{e.isMounted=!0}),Pl(()=>{e.isUnmounting=!0}),e}const Qe=[Function,Array],lh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qe,onEnter:Qe,onAfterEnter:Qe,onEnterCancelled:Qe,onBeforeLeave:Qe,onLeave:Qe,onAfterLeave:Qe,onLeaveCancelled:Qe,onBeforeAppear:Qe,onAppear:Qe,onAfterAppear:Qe,onAppearCancelled:Qe},setup(e,{slots:t}){const n=ql(),r=kl();let o;return()=>{const s=t.default&&Ri(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const b of s)if(b.type!==rt){i=b;break}}const a=ue(e),{mode:c}=a;if(r.isLeaving)return vs(i);const l=Ca(i);if(!l)return vs(i);const u=Lr(l,a,r,n);jr(l,u);const f=n.subTree,d=f&&Ca(f);let g=!1;const{getTransitionKey:h}=l.type;if(h){const b=h();o===void 0?o=b:b!==o&&(o=b,g=!0)}if(d&&d.type!==rt&&(!fn(l,d)||g)){const b=Lr(d,a,r,n);if(jr(d,b),c==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update()},vs(i);c==="in-out"&&l.type!==rt&&(b.delayLeave=(w,y,x)=>{const T=Il(r,d);T[String(d.key)]=d,w._leaveCb=()=>{y(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return i}}},Ol=lh;function Il(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Lr(e,t,n,r){const{appear:o,mode:s,persisted:i=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:h,onBeforeAppear:b,onAppear:w,onAfterAppear:y,onAppearCancelled:x}=t,T=String(e.key),v=Il(n,e),A=(I,F)=>{I&&nt(I,r,9,F)},N=(I,F)=>{const k=F[1];A(I,F),Y(I)?I.every(B=>B.length<=1)&&k():I.length<=1&&k()},K={mode:s,persisted:i,beforeEnter(I){let F=a;if(!n.isMounted)if(o)F=b||a;else return;I._leaveCb&&I._leaveCb(!0);const k=v[T];k&&fn(e,k)&&k.el._leaveCb&&k.el._leaveCb(),A(F,[I])},enter(I){let F=c,k=l,B=u;if(!n.isMounted)if(o)F=w||c,k=y||l,B=x||u;else return;let _=!1;const Z=I._enterCb=ee=>{_||(_=!0,ee?A(B,[I]):A(k,[I]),K.delayedLeave&&K.delayedLeave(),I._enterCb=void 0)};F?N(F,[I,Z]):Z()},leave(I,F){const k=String(e.key);if(I._enterCb&&I._enterCb(!0),n.isUnmounting)return F();A(f,[I]);let B=!1;const _=I._leaveCb=Z=>{B||(B=!0,F(),Z?A(h,[I]):A(g,[I]),I._leaveCb=void 0,v[k]===e&&delete v[k])};v[k]=e,d?N(d,[I,_]):_()},clone(I){return Lr(I,t,n,r)}};return K}function vs(e){if(Xo(e))return e=nn(e),e.children=null,e}function Ca(e){return Xo(e)?e.children?e.children[0]:void 0:e}function jr(e,t){e.shapeFlag&6&&e.component?jr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ri(e,t=!1,n){let r=[],o=0;for(let s=0;s<e.length;s++){let i=e[s];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:s);i.type===De?(i.patchFlag&128&&o++,r=r.concat(Ri(i.children,t,a))):(t||i.type!==rt)&&r.push(a!=null?nn(i,{key:a}):i)}if(o>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Xe(e){return Q(e)?{setup:e,name:e.name}:e}const _r=e=>!!e.type.__asyncLoader,Xo=e=>e.type.__isKeepAlive;function uh(e,t){Hl(e,"a",t)}function fh(e,t){Hl(e,"da",t)}function Hl(e,t,n=ke){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Qo(t,r,n),n){let o=n.parent;for(;o&&o.parent;)Xo(o.parent.vnode)&&dh(r,t,n,o),o=o.parent}}function dh(e,t,n,r){const o=Qo(t,e,r,!0);Bl(()=>{yi(r[t],o)},n)}function Qo(e,t,n=ke,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;nr(),Dn(n);const a=nt(t,n,e,i);return xn(),rr(),a});return r?o.unshift(s):o.push(s),s}}const Ot=e=>(t,n=ke)=>(!Ur||e==="sp")&&Qo(e,(...r)=>t(...r),n),Jo=Ot("bm"),es=Ot("m"),hh=Ot("bu"),Rl=Ot("u"),Pl=Ot("bum"),Bl=Ot("um"),ph=Ot("sp"),gh=Ot("rtg"),mh=Ot("rtc");function bh(e,t=ke){Qo("ec",e,t)}function i2(e,t){const n=je;if(n===null)return e;const r=ns(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,c,l=ye]=t[s];Q(i)&&(i={mounted:i,updated:i}),i.deep&&pn(a),o.push({dir:i,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return e}function sn(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];s&&(a.oldValue=s[i].value);let c=a.dir[r];c&&(nr(),nt(c,n,8,[e.el,a,e,t]),rr())}}const Ll="components";function yh(e,t){return vh(Ll,e,!0,t)||e}const wh=Symbol();function vh(e,t,n=!0,r=!1){const o=je||ke;if(o){const s=o.type;if(e===Ll){const a=Qh(s,!1);if(a&&(a===t||a===wt(t)||a===qo(wt(t))))return s}const i=Aa(o[e]||s[e],t)||Aa(o.appContext[e],t);return!i&&r?s:i}}function Aa(e,t){return e&&(e[t]||e[wt(t)]||e[qo(wt(t))])}function a2(e,t,n,r){let o;const s=n&&n[r];if(Y(e)||$e(e)){o=new Array(e.length);for(let i=0,a=e.length;i<a;i++)o[i]=t(e[i],i,void 0,s&&s[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,s&&s[i])}else if(xe(e))if(e[Symbol.iterator])o=Array.from(e,(i,a)=>t(i,a,void 0,s&&s[a]));else{const i=Object.keys(e);o=new Array(i.length);for(let a=0,c=i.length;a<c;a++){const l=i[a];o[a]=t(e[l],l,a,s&&s[a])}}else o=[];return n&&(n[r]=o),o}function c2(e,t,n={},r,o){if(je.isCE||je.parent&&_r(je.parent)&&je.parent.isCE)return Re("slot",t==="default"?null:{name:t},r&&r());let s=e[t];s&&s._c&&(s._d=!1),Mi();const i=s&&jl(s(n)),a=Ui(De,{key:n.key||i&&i.key||`_${t}`},i||(r?r():[]),i&&e._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function jl(e){return e.some(t=>Io(t)?!(t.type===rt||t.type===De&&!jl(t.children)):!0)?e:null}const Ds=e=>e?Gl(e)?ns(e)||e.proxy:Ds(e.parent):null,ko=Oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ds(e.parent),$root:e=>Ds(e.root),$emit:e=>e.emit,$options:e=>Pi(e),$forceUpdate:e=>e.f||(e.f=()=>Ii(e.update)),$nextTick:e=>e.n||(e.n=xl.bind(e.proxy)),$watch:e=>ch.bind(e)}),xh={get({_:e},t){const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(r!==ye&&oe(r,t))return i[t]=1,r[t];if(o!==ye&&oe(o,t))return i[t]=2,o[t];if((l=e.propsOptions[0])&&oe(l,t))return i[t]=3,s[t];if(n!==ye&&oe(n,t))return i[t]=4,n[t];Ks&&(i[t]=0)}}const u=ko[t];let f,d;if(u)return t==="$attrs"&&Ye(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ye&&oe(n,t))return i[t]=4,n[t];if(d=c.config.globalProperties,oe(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return o!==ye&&oe(o,t)?(o[t]=n,!0):r!==ye&&oe(r,t)?(r[t]=n,!0):oe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},i){let a;return!!n[i]||e!==ye&&oe(e,i)||t!==ye&&oe(t,i)||(a=s[0])&&oe(a,i)||oe(r,i)||oe(ko,i)||oe(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:oe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ks=!0;function Eh(e){const t=Pi(e),n=e.proxy,r=e.ctx;Ks=!1,t.beforeCreate&&Sa(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:g,updated:h,activated:b,deactivated:w,beforeDestroy:y,beforeUnmount:x,destroyed:T,unmounted:v,render:A,renderTracked:N,renderTriggered:K,errorCaptured:I,serverPrefetch:F,expose:k,inheritAttrs:B,components:_,directives:Z,filters:ee}=t;if(l&&_h(l,r,null,e.appContext.config.unwrapInjectedRef),i)for(const pe in i){const de=i[pe];Q(de)&&(r[pe]=de.bind(n))}if(o){const pe=o.call(n,n);xe(pe)&&(e.data=or(pe))}if(Ks=!0,s)for(const pe in s){const de=s[pe],Ke=Q(de)?de.bind(n,n):Q(de.get)?de.get.bind(n,n):lt,on=!Q(de)&&Q(de.set)?de.set.bind(n):lt,ot=ce({get:Ke,set:on});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>ot.value,set:Ue=>ot.value=Ue})}if(a)for(const pe in a)Ml(a[pe],r,n,pe);if(c){const pe=Q(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(de=>{vn(de,pe[de])})}u&&Sa(u,e,"c");function be(pe,de){Y(de)?de.forEach(Ke=>pe(Ke.bind(n))):de&&pe(de.bind(n))}if(be(Jo,f),be(es,d),be(hh,g),be(Rl,h),be(uh,b),be(fh,w),be(bh,I),be(mh,N),be(gh,K),be(Pl,x),be(Bl,v),be(ph,F),Y(k))if(k.length){const pe=e.exposed||(e.exposed={});k.forEach(de=>{Object.defineProperty(pe,de,{get:()=>n[de],set:Ke=>n[de]=Ke})})}else e.exposed||(e.exposed={});A&&e.render===lt&&(e.render=A),B!=null&&(e.inheritAttrs=B),_&&(e.components=_),Z&&(e.directives=Z)}function _h(e,t,n=lt,r=!1){Y(e)&&(e=Ws(e));for(const o in e){const s=e[o];let i;xe(s)?"default"in s?i=Se(s.from||o,s.default,!0):i=Se(s.from||o):i=Se(s),He(i)&&r?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[o]=i}}function Sa(e,t,n){nt(Y(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ml(e,t,n,r){const o=r.includes(".")?Tl(n,r):()=>n[r];if($e(e)){const s=t[e];Q(s)&&Er(o,s)}else if(Q(e))Er(o,e.bind(n));else if(xe(e))if(Y(e))e.forEach(s=>Ml(s,t,n,r));else{const s=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(s)&&Er(o,s,e)}}function Pi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,a=s.get(t);let c;return a?c=a:!o.length&&!n&&!r?c=t:(c={},o.length&&o.forEach(l=>Oo(c,l,i,!0)),Oo(c,t,i)),xe(t)&&s.set(t,c),c}function Oo(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&Oo(e,s,n,!0),o&&o.forEach(i=>Oo(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=Ch[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Ch={data:$a,props:ln,emits:ln,methods:ln,computed:ln,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:ln,directives:ln,watch:Sh,provide:$a,inject:Ah};function $a(e,t){return t?e?function(){return Oe(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function Ah(e,t){return ln(Ws(e),Ws(t))}function Ws(e){if(Y(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Me(e,t){return e?[...new Set([].concat(e,t))]:t}function ln(e,t){return e?Oe(Oe(Object.create(null),e),t):t}function Sh(e,t){if(!e)return t;if(!t)return e;const n=Oe(Object.create(null),e);for(const r in t)n[r]=Me(e[r],t[r]);return n}function $h(e,t,n,r=!1){const o={},s={};Co(s,ts,1),e.propsDefaults=Object.create(null),Ul(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=r?o:Dd(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Th(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,a=ue(o),[c]=e.propsOptions;let l=!1;if((r||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Yo(e.emitsOptions,d))continue;const g=t[d];if(c)if(oe(s,d))g!==s[d]&&(s[d]=g,l=!0);else{const h=wt(d);o[h]=Vs(c,a,h,g,e,!1)}else g!==s[d]&&(s[d]=g,l=!0)}}}else{Ul(e,t,o,s)&&(l=!0);let u;for(const f in a)(!t||!oe(t,f)&&((u=tr(f))===f||!oe(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(o[f]=Vs(c,a,f,void 0,e,!0)):delete o[f]);if(s!==a)for(const f in s)(!t||!oe(t,f)&&!0)&&(delete s[f],l=!0)}l&&Tt(e,"set","$attrs")}function Ul(e,t,n,r){const[o,s]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(vo(c))continue;const l=t[c];let u;o&&oe(o,u=wt(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:Yo(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,i=!0)}if(s){const c=ue(n),l=a||ye;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Vs(o,c,f,l[f],e,!oe(l,f))}}return i}function Vs(e,t,n,r,o,s){const i=e[n];if(i!=null){const a=oe(i,"default");if(a&&r===void 0){const c=i.default;if(i.type!==Function&&Q(c)){const{propsDefaults:l}=o;n in l?r=l[n]:(Dn(o),r=l[n]=c.call(null,t),xn())}else r=c}i[0]&&(s&&!a?r=!1:i[1]&&(r===""||r===tr(n))&&(r=!0))}return r}function Nl(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,i={},a=[];let c=!1;if(!Q(e)){const u=f=>{c=!0;const[d,g]=Nl(f,t,!0);Oe(i,d),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return xe(e)&&r.set(e,Ln),Ln;if(Y(s))for(let u=0;u<s.length;u++){const f=wt(s[u]);Ta(f)&&(i[f]=ye)}else if(s)for(const u in s){const f=wt(u);if(Ta(f)){const d=s[u],g=i[f]=Y(d)||Q(d)?{type:d}:d;if(g){const h=Ia(Boolean,g.type),b=Ia(String,g.type);g[0]=h>-1,g[1]=b<0||h<b,(h>-1||oe(g,"default"))&&a.push(f)}}}const l=[i,a];return xe(e)&&r.set(e,l),l}function Ta(e){return e[0]!=="$"}function ka(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Oa(e,t){return ka(e)===ka(t)}function Ia(e,t){return Y(t)?t.findIndex(n=>Oa(n,e)):Q(t)&&Oa(t,e)?0:-1}const Fl=e=>e[0]==="_"||e==="$stable",Bi=e=>Y(e)?e.map(bt):[bt(e)],kh=(e,t,n)=>{if(t._n)return t;const r=zs((...o)=>Bi(t(...o)),n);return r._c=!1,r},zl=(e,t,n)=>{const r=e._ctx;for(const o in e){if(Fl(o))continue;const s=e[o];if(Q(s))t[o]=kh(o,s,r);else if(s!=null){const i=Bi(s);t[o]=()=>i}}},Dl=(e,t)=>{const n=Bi(t);e.slots.default=()=>n},Oh=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ue(t),Co(t,"_",n)):zl(t,e.slots={})}else e.slots={},t&&Dl(e,t);Co(e.slots,ts,1)},Ih=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,i=ye;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(Oe(o,t),!n&&a===1&&delete o._):(s=!t.$stable,zl(t,o)),i=t}else t&&(Dl(e,t),i={default:1});if(s)for(const a in o)!Fl(a)&&!(a in i)&&delete o[a]};function Kl(){return{app:null,config:{isNativeTag:ld,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hh=0;function Rh(e,t){return function(r,o=null){Q(r)||(r=Object.assign({},r)),o!=null&&!xe(o)&&(o=null);const s=Kl(),i=new Set;let a=!1;const c=s.app={_uid:Hh++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:ep,get config(){return s.config},set config(l){},use(l,...u){return i.has(l)||(l&&Q(l.install)?(i.add(l),l.install(c,...u)):Q(l)&&(i.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!a){const d=Re(r,o);return d.appContext=s,u&&t?t(d,l):e(d,l,f),a=!0,c._container=l,l.__vue_app__=c,ns(d.component)||d.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function qs(e,t,n,r,o=!1){if(Y(e)){e.forEach((d,g)=>qs(d,t&&(Y(t)?t[g]:t),n,r,o));return}if(_r(r)&&!o)return;const s=r.shapeFlag&4?ns(r.component)||r.component.proxy:r.el,i=o?null:s,{i:a,r:c}=e,l=t&&t.r,u=a.refs===ye?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&($e(l)?(u[l]=null,oe(f,l)&&(f[l]=null)):He(l)&&(l.value=null)),Q(c))Xt(c,a,12,[i,u]);else{const d=$e(c),g=He(c);if(d||g){const h=()=>{if(e.f){const b=d?oe(f,c)?f[c]:u[c]:c.value;o?Y(b)&&yi(b,s):Y(b)?b.includes(s)||b.push(s):d?(u[c]=[s],oe(f,c)&&(f[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else d?(u[c]=i,oe(f,c)&&(f[c]=i)):g&&(c.value=i,e.k&&(u[e.k]=i))};i?(h.id=-1,Fe(h,n)):h()}}}const Fe=ah;function Ph(e){return Bh(e)}function Bh(e,t){const n=gd();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:i,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:g=lt,insertStaticContent:h}=e,b=(p,m,E,C=null,$=null,R=null,M=!1,H=null,P=!!m.dynamicChildren)=>{if(p===m)return;p&&!fn(p,m)&&(C=j(p),Ue(p,$,R,!0),p=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:O,ref:V,shapeFlag:D}=m;switch(O){case ji:w(p,m,E,C);break;case rt:y(p,m,E,C);break;case xs:p==null&&x(m,E,C,M);break;case De:_(p,m,E,C,$,R,M,H,P);break;default:D&1?A(p,m,E,C,$,R,M,H,P):D&6?Z(p,m,E,C,$,R,M,H,P):(D&64||D&128)&&O.process(p,m,E,C,$,R,M,H,P,ae)}V!=null&&$&&qs(V,p&&p.ref,R,m||p,!m)},w=(p,m,E,C)=>{if(p==null)r(m.el=a(m.children),E,C);else{const $=m.el=p.el;m.children!==p.children&&l($,m.children)}},y=(p,m,E,C)=>{p==null?r(m.el=c(m.children||""),E,C):m.el=p.el},x=(p,m,E,C)=>{[p.el,p.anchor]=h(p.children,m,E,C,p.el,p.anchor)},T=({el:p,anchor:m},E,C)=>{let $;for(;p&&p!==m;)$=d(p),r(p,E,C),p=$;r(m,E,C)},v=({el:p,anchor:m})=>{let E;for(;p&&p!==m;)E=d(p),o(p),p=E;o(m)},A=(p,m,E,C,$,R,M,H,P)=>{M=M||m.type==="svg",p==null?N(m,E,C,$,R,M,H,P):F(p,m,$,R,M,H,P)},N=(p,m,E,C,$,R,M,H)=>{let P,O;const{type:V,props:D,shapeFlag:q,transition:X,dirs:ne}=p;if(P=p.el=i(p.type,R,D&&D.is,D),q&8?u(P,p.children):q&16&&I(p.children,P,null,C,$,R&&V!=="foreignObject",M,H),ne&&sn(p,null,C,"created"),D){for(const ge in D)ge!=="value"&&!vo(ge)&&s(P,ge,null,D[ge],R,p.children,C,$,U);"value"in D&&s(P,"value",null,D.value),(O=D.onVnodeBeforeMount)&&ht(O,C,p)}K(P,p,p.scopeId,M,C),ne&&sn(p,null,C,"beforeMount");const we=(!$||$&&!$.pendingBranch)&&X&&!X.persisted;we&&X.beforeEnter(P),r(P,m,E),((O=D&&D.onVnodeMounted)||we||ne)&&Fe(()=>{O&&ht(O,C,p),we&&X.enter(P),ne&&sn(p,null,C,"mounted")},$)},K=(p,m,E,C,$)=>{if(E&&g(p,E),C)for(let R=0;R<C.length;R++)g(p,C[R]);if($){let R=$.subTree;if(m===R){const M=$.vnode;K(p,M,M.scopeId,M.slotScopeIds,$.parent)}}},I=(p,m,E,C,$,R,M,H,P=0)=>{for(let O=P;O<p.length;O++){const V=p[O]=H?Kt(p[O]):bt(p[O]);b(null,V,m,E,C,$,R,M,H)}},F=(p,m,E,C,$,R,M)=>{const H=m.el=p.el;let{patchFlag:P,dynamicChildren:O,dirs:V}=m;P|=p.patchFlag&16;const D=p.props||ye,q=m.props||ye;let X;E&&an(E,!1),(X=q.onVnodeBeforeUpdate)&&ht(X,E,m,p),V&&sn(m,p,E,"beforeUpdate"),E&&an(E,!0);const ne=$&&m.type!=="foreignObject";if(O?k(p.dynamicChildren,O,H,E,C,ne,R):M||de(p,m,H,null,E,C,ne,R,!1),P>0){if(P&16)B(H,m,D,q,E,C,$);else if(P&2&&D.class!==q.class&&s(H,"class",null,q.class,$),P&4&&s(H,"style",D.style,q.style,$),P&8){const we=m.dynamicProps;for(let ge=0;ge<we.length;ge++){const Ae=we[ge],st=D[Ae],In=q[Ae];(In!==st||Ae==="value")&&s(H,Ae,st,In,$,p.children,E,C,U)}}P&1&&p.children!==m.children&&u(H,m.children)}else!M&&O==null&&B(H,m,D,q,E,C,$);((X=q.onVnodeUpdated)||V)&&Fe(()=>{X&&ht(X,E,m,p),V&&sn(m,p,E,"updated")},C)},k=(p,m,E,C,$,R,M)=>{for(let H=0;H<m.length;H++){const P=p[H],O=m[H],V=P.el&&(P.type===De||!fn(P,O)||P.shapeFlag&70)?f(P.el):E;b(P,O,V,null,C,$,R,M,!0)}},B=(p,m,E,C,$,R,M)=>{if(E!==C){if(E!==ye)for(const H in E)!vo(H)&&!(H in C)&&s(p,H,E[H],null,M,m.children,$,R,U);for(const H in C){if(vo(H))continue;const P=C[H],O=E[H];P!==O&&H!=="value"&&s(p,H,O,P,M,m.children,$,R,U)}"value"in C&&s(p,"value",E.value,C.value)}},_=(p,m,E,C,$,R,M,H,P)=>{const O=m.el=p?p.el:a(""),V=m.anchor=p?p.anchor:a("");let{patchFlag:D,dynamicChildren:q,slotScopeIds:X}=m;X&&(H=H?H.concat(X):X),p==null?(r(O,E,C),r(V,E,C),I(m.children,E,V,$,R,M,H,P)):D>0&&D&64&&q&&p.dynamicChildren?(k(p.dynamicChildren,q,E,$,R,M,H),(m.key!=null||$&&m===$.subTree)&&Li(p,m,!0)):de(p,m,E,V,$,R,M,H,P)},Z=(p,m,E,C,$,R,M,H,P)=>{m.slotScopeIds=H,p==null?m.shapeFlag&512?$.ctx.activate(m,E,C,M,P):ee(m,E,C,$,R,M,P):Ce(p,m,P)},ee=(p,m,E,C,$,R,M)=>{const H=p.component=qh(p,C,$);if(Xo(p)&&(H.ctx.renderer=ae),Gh(H),H.asyncDep){if($&&$.registerDep(H,be),!p.el){const P=H.subTree=Re(rt);y(null,P,m,E)}return}be(H,p,m,E,$,R,M)},Ce=(p,m,E)=>{const C=m.component=p.component;if(oh(p,m,E))if(C.asyncDep&&!C.asyncResolved){pe(C,m,E);return}else C.next=m,Qd(C.update),C.update();else m.el=p.el,C.vnode=m},be=(p,m,E,C,$,R,M)=>{const H=()=>{if(p.isMounted){let{next:V,bu:D,u:q,parent:X,vnode:ne}=p,we=V,ge;an(p,!1),V?(V.el=ne.el,pe(p,V,M)):V=ne,D&&xo(D),(ge=V.props&&V.props.onVnodeBeforeUpdate)&&ht(ge,X,V,ne),an(p,!0);const Ae=ws(p),st=p.subTree;p.subTree=Ae,b(st,Ae,f(st.el),j(st),p,$,R),V.el=Ae.el,we===null&&sh(p,Ae.el),q&&Fe(q,$),(ge=V.props&&V.props.onVnodeUpdated)&&Fe(()=>ht(ge,X,V,ne),$)}else{let V;const{el:D,props:q}=m,{bm:X,m:ne,parent:we}=p,ge=_r(m);if(an(p,!1),X&&xo(X),!ge&&(V=q&&q.onVnodeBeforeMount)&&ht(V,we,m),an(p,!0),D&&te){const Ae=()=>{p.subTree=ws(p),te(D,p.subTree,p,$,null)};ge?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ae()):Ae()}else{const Ae=p.subTree=ws(p);b(null,Ae,E,C,p,$,R),m.el=Ae.el}if(ne&&Fe(ne,$),!ge&&(V=q&&q.onVnodeMounted)){const Ae=m;Fe(()=>ht(V,we,Ae),$)}(m.shapeFlag&256||we&&_r(we.vnode)&&we.vnode.shapeFlag&256)&&p.a&&Fe(p.a,$),p.isMounted=!0,m=E=C=null}},P=p.effect=new Ei(H,()=>Ii(O),p.scope),O=p.update=()=>P.run();O.id=p.uid,an(p,!0),O()},pe=(p,m,E)=>{m.component=p;const C=p.vnode.props;p.vnode=m,p.next=null,Th(p,m.props,C,E),Ih(p,m.children,E),nr(),xa(),rr()},de=(p,m,E,C,$,R,M,H,P=!1)=>{const O=p&&p.children,V=p?p.shapeFlag:0,D=m.children,{patchFlag:q,shapeFlag:X}=m;if(q>0){if(q&128){on(O,D,E,C,$,R,M,H,P);return}else if(q&256){Ke(O,D,E,C,$,R,M,H,P);return}}X&8?(V&16&&U(O,$,R),D!==O&&u(E,D)):V&16?X&16?on(O,D,E,C,$,R,M,H,P):U(O,$,R,!0):(V&8&&u(E,""),X&16&&I(D,E,C,$,R,M,H,P))},Ke=(p,m,E,C,$,R,M,H,P)=>{p=p||Ln,m=m||Ln;const O=p.length,V=m.length,D=Math.min(O,V);let q;for(q=0;q<D;q++){const X=m[q]=P?Kt(m[q]):bt(m[q]);b(p[q],X,E,null,$,R,M,H,P)}O>V?U(p,$,R,!0,!1,D):I(m,E,C,$,R,M,H,P,D)},on=(p,m,E,C,$,R,M,H,P)=>{let O=0;const V=m.length;let D=p.length-1,q=V-1;for(;O<=D&&O<=q;){const X=p[O],ne=m[O]=P?Kt(m[O]):bt(m[O]);if(fn(X,ne))b(X,ne,E,null,$,R,M,H,P);else break;O++}for(;O<=D&&O<=q;){const X=p[D],ne=m[q]=P?Kt(m[q]):bt(m[q]);if(fn(X,ne))b(X,ne,E,null,$,R,M,H,P);else break;D--,q--}if(O>D){if(O<=q){const X=q+1,ne=X<V?m[X].el:C;for(;O<=q;)b(null,m[O]=P?Kt(m[O]):bt(m[O]),E,ne,$,R,M,H,P),O++}}else if(O>q)for(;O<=D;)Ue(p[O],$,R,!0),O++;else{const X=O,ne=O,we=new Map;for(O=ne;O<=q;O++){const We=m[O]=P?Kt(m[O]):bt(m[O]);We.key!=null&&we.set(We.key,O)}let ge,Ae=0;const st=q-ne+1;let In=!1,ua=0;const dr=new Array(st);for(O=0;O<st;O++)dr[O]=0;for(O=X;O<=D;O++){const We=p[O];if(Ae>=st){Ue(We,$,R,!0);continue}let dt;if(We.key!=null)dt=we.get(We.key);else for(ge=ne;ge<=q;ge++)if(dr[ge-ne]===0&&fn(We,m[ge])){dt=ge;break}dt===void 0?Ue(We,$,R,!0):(dr[dt-ne]=O+1,dt>=ua?ua=dt:In=!0,b(We,m[dt],E,null,$,R,M,H,P),Ae++)}const fa=In?Lh(dr):Ln;for(ge=fa.length-1,O=st-1;O>=0;O--){const We=ne+O,dt=m[We],da=We+1<V?m[We+1].el:C;dr[O]===0?b(null,dt,E,da,$,R,M,H,P):In&&(ge<0||O!==fa[ge]?ot(dt,E,da,2):ge--)}}},ot=(p,m,E,C,$=null)=>{const{el:R,type:M,transition:H,children:P,shapeFlag:O}=p;if(O&6){ot(p.component.subTree,m,E,C);return}if(O&128){p.suspense.move(m,E,C);return}if(O&64){M.move(p,m,E,ae);return}if(M===De){r(R,m,E);for(let D=0;D<P.length;D++)ot(P[D],m,E,C);r(p.anchor,m,E);return}if(M===xs){T(p,m,E);return}if(C!==2&&O&1&&H)if(C===0)H.beforeEnter(R),r(R,m,E),Fe(()=>H.enter(R),$);else{const{leave:D,delayLeave:q,afterLeave:X}=H,ne=()=>r(R,m,E),we=()=>{D(R,()=>{ne(),X&&X()})};q?q(R,ne,we):we()}else r(R,m,E)},Ue=(p,m,E,C=!1,$=!1)=>{const{type:R,props:M,ref:H,children:P,dynamicChildren:O,shapeFlag:V,patchFlag:D,dirs:q}=p;if(H!=null&&qs(H,null,E,p,!0),V&256){m.ctx.deactivate(p);return}const X=V&1&&q,ne=!_r(p);let we;if(ne&&(we=M&&M.onVnodeBeforeUnmount)&&ht(we,m,p),V&6)S(p.component,E,C);else{if(V&128){p.suspense.unmount(E,C);return}X&&sn(p,null,m,"beforeUnmount"),V&64?p.type.remove(p,m,E,$,ae,C):O&&(R!==De||D>0&&D&64)?U(O,m,E,!1,!0):(R===De&&D&384||!$&&V&16)&&U(P,m,E),C&&On(p)}(ne&&(we=M&&M.onVnodeUnmounted)||X)&&Fe(()=>{we&&ht(we,m,p),X&&sn(p,null,m,"unmounted")},E)},On=p=>{const{type:m,el:E,anchor:C,transition:$}=p;if(m===De){eo(E,C);return}if(m===xs){v(p);return}const R=()=>{o(E),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(p.shapeFlag&1&&$&&!$.persisted){const{leave:M,delayLeave:H}=$,P=()=>M(E,R);H?H(p.el,R,P):P()}else R()},eo=(p,m)=>{let E;for(;p!==m;)E=d(p),o(p),p=E;o(m)},S=(p,m,E)=>{const{bum:C,scope:$,update:R,subTree:M,um:H}=p;C&&xo(C),$.stop(),R&&(R.active=!1,Ue(M,p,m,E)),H&&Fe(H,m),Fe(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},U=(p,m,E,C=!1,$=!1,R=0)=>{for(let M=R;M<p.length;M++)Ue(p[M],m,E,C,$)},j=p=>p.shapeFlag&6?j(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),W=(p,m,E)=>{p==null?m._vnode&&Ue(m._vnode,null,null,!0):b(m._vnode||null,p,m,null,null,null,E),xa(),_l(),m._vnode=p},ae={p:b,um:Ue,m:ot,r:On,mt:ee,mc:I,pc:de,pbc:k,n:j,o:e};let _e,te;return t&&([_e,te]=t(ae)),{render:W,hydrate:_e,createApp:Rh(W,_e)}}function an({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Li(e,t,n=!1){const r=e.children,o=t.children;if(Y(r)&&Y(o))for(let s=0;s<r.length;s++){const i=r[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=Kt(o[s]),a.el=i.el),n||Li(i,a))}}function Lh(e){const t=e.slice(),n=[0];let r,o,s,i,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(o=n[n.length-1],e[o]<l){t[r]=o,n.push(r);continue}for(s=0,i=n.length-1;s<i;)a=s+i>>1,e[n[a]]<l?s=a+1:i=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}const jh=e=>e.__isTeleport,Cr=e=>e&&(e.disabled||e.disabled===""),Ha=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Gs=(e,t)=>{const n=e&&e.to;return $e(n)?t?t(n):null:n},Mh={__isTeleport:!0,process(e,t,n,r,o,s,i,a,c,l){const{mc:u,pc:f,pbc:d,o:{insert:g,querySelector:h,createText:b,createComment:w}}=l,y=Cr(t.props);let{shapeFlag:x,children:T,dynamicChildren:v}=t;if(e==null){const A=t.el=b(""),N=t.anchor=b("");g(A,n,r),g(N,n,r);const K=t.target=Gs(t.props,h),I=t.targetAnchor=b("");K&&(g(I,K),i=i||Ha(K));const F=(k,B)=>{x&16&&u(T,k,B,o,s,i,a,c)};y?F(n,N):K&&F(K,I)}else{t.el=e.el;const A=t.anchor=e.anchor,N=t.target=e.target,K=t.targetAnchor=e.targetAnchor,I=Cr(e.props),F=I?n:N,k=I?A:K;if(i=i||Ha(N),v?(d(e.dynamicChildren,v,F,o,s,i,a),Li(e,t,!0)):c||f(e,t,F,k,o,s,i,a,!1),y)I||io(t,n,A,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const B=t.target=Gs(t.props,h);B&&io(t,B,null,l,0)}else I&&io(t,N,K,l,1)}},remove(e,t,n,r,{um:o,o:{remove:s}},i){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:f,props:d}=e;if(f&&s(u),(i||!Cr(d))&&(s(l),a&16))for(let g=0;g<c.length;g++){const h=c[g];o(h,t,n,!0,!!h.dynamicChildren)}},move:io,hydrate:Uh};function io(e,t,n,{o:{insert:r},m:o},s=2){s===0&&r(e.targetAnchor,t,n);const{el:i,anchor:a,shapeFlag:c,children:l,props:u}=e,f=s===2;if(f&&r(i,t,n),(!f||Cr(u))&&c&16)for(let d=0;d<l.length;d++)o(l[d],t,n,2);f&&r(a,t,n)}function Uh(e,t,n,r,o,s,{o:{nextSibling:i,parentNode:a,querySelector:c}},l){const u=t.target=Gs(t.props,c);if(u){const f=u._lpa||u.firstChild;if(t.shapeFlag&16)if(Cr(t.props))t.anchor=l(i(e),t,a(e),n,r,o,s),t.targetAnchor=f;else{t.anchor=i(e);let d=f;for(;d;)if(d=i(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,u._lpa=t.targetAnchor&&i(t.targetAnchor);break}l(f,t,u,n,r,o,s)}}return t.anchor&&i(t.anchor)}const Nh=Mh,De=Symbol(void 0),ji=Symbol(void 0),rt=Symbol(void 0),xs=Symbol(void 0),Ar=[];let at=null;function Mi(e=!1){Ar.push(at=e?null:[])}function Fh(){Ar.pop(),at=Ar[Ar.length-1]||null}let Mr=1;function Ra(e){Mr+=e}function Wl(e){return e.dynamicChildren=Mr>0?at||Ln:null,Fh(),Mr>0&&at&&at.push(e),e}function l2(e,t,n,r,o,s){return Wl(Ni(e,t,n,r,o,s,!0))}function Ui(e,t,n,r,o){return Wl(Re(e,t,n,r,o,!0))}function Io(e){return e?e.__v_isVNode===!0:!1}function fn(e,t){return e.type===t.type&&e.key===t.key}const ts="__vInternal",Vl=({key:e})=>e!=null?e:null,Eo=({ref:e,ref_key:t,ref_for:n})=>e!=null?$e(e)||He(e)||Q(e)?{i:je,r:e,k:t,f:!!n}:e:null;function Ni(e,t=null,n=null,r=0,o=null,s=e===De?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vl(t),ref:t&&Eo(t),scopeId:Sl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return a?(Fi(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=$e(n)?8:16),Mr>0&&!i&&at&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&at.push(c),c}const Re=zh;function zh(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===wh)&&(e=rt),Io(e)){const a=nn(e,t,!0);return n&&Fi(a,n),Mr>0&&!s&&at&&(a.shapeFlag&6?at[at.indexOf(e)]=a:at.push(a)),a.patchFlag|=-2,a}if(Jh(e)&&(e=e.__vccOpts),t){t=Dh(t);let{class:a,style:c}=t;a&&!$e(a)&&(t.class=mi(a)),xe(c)&&(pl(c)&&!Y(c)&&(c=Oe({},c)),t.style=gi(c))}const i=$e(e)?1:ih(e)?128:jh(e)?64:xe(e)?4:Q(e)?2:0;return Ni(e,t,n,r,o,i,s,!0)}function Dh(e){return e?pl(e)||ts in e?Oe({},e):e:null}function nn(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:i}=e,a=t?Kh(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Vl(a),ref:t&&t.ref?n&&o?Y(o)?o.concat(Eo(t)):[o,Eo(t)]:Eo(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==De?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&nn(e.ssContent),ssFallback:e.ssFallback&&nn(e.ssFallback),el:e.el,anchor:e.anchor}}function Zs(e=" ",t=0){return Re(ji,null,e,t)}function u2(e="",t=!1){return t?(Mi(),Ui(rt,null,e)):Re(rt,null,e)}function bt(e){return e==null||typeof e=="boolean"?Re(rt):Y(e)?Re(De,null,e.slice()):typeof e=="object"?Kt(e):Re(ji,null,String(e))}function Kt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:nn(e)}function Fi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(Y(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Fi(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(ts in t)?t._ctx=je:o===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:je},n=32):(t=String(t),r&64?(n=16,t=[Zs(t)]):n=8);e.children=t,e.shapeFlag|=n}function Kh(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=mi([t.class,r.class]));else if(o==="style")t.style=gi([t.style,r.style]);else if(Ko(o)){const s=t[o],i=r[o];i&&s!==i&&!(Y(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=r[o])}return t}function ht(e,t,n,r=null){nt(e,t,7,[n,r])}const Wh=Kl();let Vh=0;function qh(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||Wh,s={uid:Vh++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new md(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nl(r,o),emitsOptions:Al(r,o),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:r.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=th.bind(null,s),e.ce&&e.ce(s),s}let ke=null;const ql=()=>ke||je,Dn=e=>{ke=e,e.scope.on()},xn=()=>{ke&&ke.scope.off(),ke=null};function Gl(e){return e.vnode.shapeFlag&4}let Ur=!1;function Gh(e,t=!1){Ur=t;const{props:n,children:r}=e.vnode,o=Gl(e);$h(e,n,o,t),Oh(e,r);const s=o?Zh(e,t):void 0;return Ur=!1,s}function Zh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=$o(new Proxy(e.ctx,xh));const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?Xh(e):null;Dn(e),nr();const s=Xt(r,e,0,[e.props,o]);if(rr(),xn(),tl(s)){if(s.then(xn,xn),t)return s.then(i=>{Pa(e,i,t)}).catch(i=>{Zo(i,e,0)});e.asyncDep=s}else Pa(e,s,t)}else Zl(e,t)}function Pa(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:xe(t)&&(e.setupState=yl(t)),Zl(e,n)}let Ba;function Zl(e,t,n){const r=e.type;if(!e.render){if(!t&&Ba&&!r.render){const o=r.template||Pi(e).template;if(o){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Oe(Oe({isCustomElement:s,delimiters:a},i),c);r.render=Ba(o,l)}}e.render=r.render||lt}Dn(e),nr(),Eh(e),rr(),xn()}function Yh(e){return new Proxy(e.attrs,{get(t,n){return Ye(e,"get","$attrs"),t[n]}})}function Xh(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Yh(e))},slots:e.slots,emit:e.emit,expose:t}}function ns(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(yl($o(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ko)return ko[n](e)}}))}function Qh(e,t=!0){return Q(e)?e.displayName||e.name:e.name||t&&e.__name}function Jh(e){return Q(e)&&"__vccOpts"in e}const ce=(e,t)=>Zd(e,t,Ur);function z(e,t,n){const r=arguments.length;return r===2?xe(t)&&!Y(t)?Io(t)?Re(e,null,[t]):Re(e,t):Re(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Io(n)&&(n=[n]),Re(e,t,n))}const ep="3.2.41",tp="http://www.w3.org/2000/svg",dn=typeof document<"u"?document:null,La=dn&&dn.createElement("template"),np={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?dn.createElementNS(tp,e):dn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>dn.createTextNode(e),createComment:e=>dn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const i=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{La.innerHTML=r?`<svg>${e}</svg>`:e;const a=La.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function rp(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function op(e,t,n){const r=e.style,o=$e(n);if(n&&!o){for(const s in n)Ys(r,s,n[s]);if(t&&!$e(t))for(const s in t)n[s]==null&&Ys(r,s,"")}else{const s=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const ja=/\s*!important$/;function Ys(e,t,n){if(Y(n))n.forEach(r=>Ys(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=sp(e,t);ja.test(n)?e.setProperty(tr(r),n.replace(ja,""),"important"):e[r]=n}}const Ma=["Webkit","Moz","ms"],Es={};function sp(e,t){const n=Es[t];if(n)return n;let r=wt(t);if(r!=="filter"&&r in e)return Es[t]=r;r=qo(r);for(let o=0;o<Ma.length;o++){const s=Ma[o]+r;if(s in e)return Es[t]=s}return t}const Ua="http://www.w3.org/1999/xlink";function ip(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ua,t.slice(6,t.length)):e.setAttributeNS(Ua,t,n);else{const s=sd(t);n==null||s&&!Qc(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function ap(e,t,n,r,o,s,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,o,s),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Qc(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Rn(e,t,n,r){e.addEventListener(t,n,r)}function cp(e,t,n,r){e.removeEventListener(t,n,r)}function lp(e,t,n,r,o=null){const s=e._vei||(e._vei={}),i=s[t];if(r&&i)i.value=r;else{const[a,c]=up(t);if(r){const l=s[t]=hp(r,o);Rn(e,a,l,c)}else i&&(cp(e,a,i,c),s[t]=void 0)}}const Na=/(?:Once|Passive|Capture)$/;function up(e){let t;if(Na.test(e)){t={};let r;for(;r=e.match(Na);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):tr(e.slice(2)),t]}let _s=0;const fp=Promise.resolve(),dp=()=>_s||(fp.then(()=>_s=0),_s=Date.now());function hp(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;nt(pp(r,n.value),t,5,[r])};return n.value=e,n.attached=dp(),n}function pp(e,t){if(Y(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const Fa=/^on[a-z]/,gp=(e,t,n,r,o=!1,s,i,a,c)=>{t==="class"?rp(e,r,o):t==="style"?op(e,n,r):Ko(t)?bi(t)||lp(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mp(e,t,r,o))?ap(e,t,r,s,i,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ip(e,t,r,o))};function mp(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Fa.test(t)&&Q(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Fa.test(t)&&$e(n)?!1:t in e}const Pt="transition",hr="animation",rs=(e,{slots:t})=>z(Ol,Xl(e),t);rs.displayName="Transition";const Yl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},bp=rs.props=Oe({},Ol.props,Yl),cn=(e,t=[])=>{Y(e)?e.forEach(n=>n(...t)):e&&e(...t)},za=e=>e?Y(e)?e.some(t=>t.length>1):e.length>1:!1;function Xl(e){const t={};for(const _ in e)_ in Yl||(t[_]=e[_]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=i,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,h=yp(o),b=h&&h[0],w=h&&h[1],{onBeforeEnter:y,onEnter:x,onEnterCancelled:T,onLeave:v,onLeaveCancelled:A,onBeforeAppear:N=y,onAppear:K=x,onAppearCancelled:I=T}=t,F=(_,Z,ee)=>{Dt(_,Z?u:a),Dt(_,Z?l:i),ee&&ee()},k=(_,Z)=>{_._isLeaving=!1,Dt(_,f),Dt(_,g),Dt(_,d),Z&&Z()},B=_=>(Z,ee)=>{const Ce=_?K:x,be=()=>F(Z,_,ee);cn(Ce,[Z,be]),Da(()=>{Dt(Z,_?c:s),Ct(Z,_?u:a),za(Ce)||Ka(Z,r,b,be)})};return Oe(t,{onBeforeEnter(_){cn(y,[_]),Ct(_,s),Ct(_,i)},onBeforeAppear(_){cn(N,[_]),Ct(_,c),Ct(_,l)},onEnter:B(!1),onAppear:B(!0),onLeave(_,Z){_._isLeaving=!0;const ee=()=>k(_,Z);Ct(_,f),Jl(),Ct(_,d),Da(()=>{!_._isLeaving||(Dt(_,f),Ct(_,g),za(v)||Ka(_,r,w,ee))}),cn(v,[_,ee])},onEnterCancelled(_){F(_,!1),cn(T,[_])},onAppearCancelled(_){F(_,!0),cn(I,[_])},onLeaveCancelled(_){k(_),cn(A,[_])}})}function yp(e){if(e==null)return null;if(xe(e))return[Cs(e.enter),Cs(e.leave)];{const t=Cs(e);return[t,t]}}function Cs(e){return Ao(e)}function Ct(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Dt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Da(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let wp=0;function Ka(e,t,n,r){const o=e._endId=++wp,s=()=>{o===e._endId&&r()};if(n)return setTimeout(s,n);const{type:i,timeout:a,propCount:c}=Ql(e,t);if(!i)return r();const l=i+"end";let u=0;const f=()=>{e.removeEventListener(l,d),s()},d=g=>{g.target===e&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),e.addEventListener(l,d)}function Ql(e,t){const n=window.getComputedStyle(e),r=h=>(n[h]||"").split(", "),o=r(Pt+"Delay"),s=r(Pt+"Duration"),i=Wa(o,s),a=r(hr+"Delay"),c=r(hr+"Duration"),l=Wa(a,c);let u=null,f=0,d=0;t===Pt?i>0&&(u=Pt,f=i,d=s.length):t===hr?l>0&&(u=hr,f=l,d=c.length):(f=Math.max(i,l),u=f>0?i>l?Pt:hr:null,d=u?u===Pt?s.length:c.length:0);const g=u===Pt&&/\b(transform|all)(,|$)/.test(n[Pt+"Property"]);return{type:u,timeout:f,propCount:d,hasTransform:g}}function Wa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Va(n)+Va(e[r])))}function Va(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Jl(){return document.body.offsetHeight}const eu=new WeakMap,tu=new WeakMap,vp={name:"TransitionGroup",props:Oe({},bp,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ql(),r=kl();let o,s;return Rl(()=>{if(!o.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Ap(o[0].el,n.vnode.el,i))return;o.forEach(Ep),o.forEach(_p);const a=o.filter(Cp);Jl(),a.forEach(c=>{const l=c.el,u=l.style;Ct(l,i),u.transform=u.webkitTransform=u.transitionDuration="";const f=l._moveCb=d=>{d&&d.target!==l||(!d||/transform$/.test(d.propertyName))&&(l.removeEventListener("transitionend",f),l._moveCb=null,Dt(l,i))};l.addEventListener("transitionend",f)})}),()=>{const i=ue(e),a=Xl(i);let c=i.tag||De;o=s,s=t.default?Ri(t.default()):[];for(let l=0;l<s.length;l++){const u=s[l];u.key!=null&&jr(u,Lr(u,a,r,n))}if(o)for(let l=0;l<o.length;l++){const u=o[l];jr(u,Lr(u,a,r,n)),eu.set(u,u.el.getBoundingClientRect())}return Re(c,null,s)}}},xp=vp;function Ep(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function _p(e){tu.set(e,e.el.getBoundingClientRect())}function Cp(e){const t=eu.get(e),n=tu.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${o}px)`,s.transitionDuration="0s",e}}function Ap(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(i=>i&&r.classList.add(i)),r.style.display="none";const o=t.nodeType===1?t:t.parentNode;o.appendChild(r);const{hasTransform:s}=Ql(r);return o.removeChild(r),s}const qa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Y(t)?n=>xo(t,n):t};function Sp(e){e.target.composing=!0}function Ga(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const f2={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e._assign=qa(o);const s=r||o.props&&o.props.type==="number";Rn(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),s&&(a=Ao(a)),e._assign(a)}),n&&Rn(e,"change",()=>{e.value=e.value.trim()}),t||(Rn(e,"compositionstart",Sp),Rn(e,"compositionend",Ga),Rn(e,"change",Ga))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:o}},s){if(e._assign=qa(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(o||e.type==="number")&&Ao(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},d2={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):pr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),pr(e,!0),r.enter(e)):r.leave(e,()=>{pr(e,!1)}):pr(e,t))},beforeUnmount(e,{value:t}){pr(e,t)}};function pr(e,t){e.style.display=t?e._vod:"none"}const $p=Oe({patchProp:gp},np);let Za;function Tp(){return Za||(Za=Ph($p))}const kp=(...e)=>{const t=Tp().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=Op(r);if(!o)return;const s=t._component;!Q(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function Op(e){return $e(e)?document.querySelector(e):e}const Ya={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},sr="^\\s*",ir="\\s*$",gn="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",mn="([0-9A-Fa-f])",bn="([0-9A-Fa-f]{2})",Ip=new RegExp(`${sr}rgb\\s*\\(${gn},${gn},${gn}\\)${ir}`),Hp=new RegExp(`${sr}rgba\\s*\\(${gn},${gn},${gn},${gn}\\)${ir}`),Rp=new RegExp(`${sr}#${mn}${mn}${mn}${ir}`),Pp=new RegExp(`${sr}#${bn}${bn}${bn}${ir}`),Bp=new RegExp(`${sr}#${mn}${mn}${mn}${mn}${ir}`),Lp=new RegExp(`${sr}#${bn}${bn}${bn}${bn}${ir}`);function Ne(e){return parseInt(e,16)}function _n(e){try{let t;if(t=Pp.exec(e))return[Ne(t[1]),Ne(t[2]),Ne(t[3]),1];if(t=Ip.exec(e))return[Be(t[1]),Be(t[5]),Be(t[9]),1];if(t=Hp.exec(e))return[Be(t[1]),Be(t[5]),Be(t[9]),Sr(t[13])];if(t=Rp.exec(e))return[Ne(t[1]+t[1]),Ne(t[2]+t[2]),Ne(t[3]+t[3]),1];if(t=Lp.exec(e))return[Ne(t[1]),Ne(t[2]),Ne(t[3]),Sr(Ne(t[4])/255)];if(t=Bp.exec(e))return[Ne(t[1]+t[1]),Ne(t[2]+t[2]),Ne(t[3]+t[3]),Sr(Ne(t[4]+t[4])/255)];if(e in Ya)return _n(Ya[e]);throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(t){throw t}}function jp(e){return e>1?1:e<0?0:e}function Xs(e,t,n,r){return`rgba(${Be(e)}, ${Be(t)}, ${Be(n)}, ${jp(r)})`}function As(e,t,n,r,o){return Be((e*t*(1-r)+n*r)/o)}function Mp(e,t){Array.isArray(e)||(e=_n(e)),Array.isArray(t)||(t=_n(t));const n=e[3],r=t[3],o=Sr(n+r-n*r);return Xs(As(e[0],n,t[0],r,o),As(e[1],n,t[1],r,o),As(e[2],n,t[2],r,o),o)}function h2(e,t){const[n,r,o,s=1]=Array.isArray(e)?e:_n(e);return t.alpha?Xs(n,r,o,t.alpha):Xs(n,r,o,s)}function ao(e,t){const[n,r,o,s=1]=Array.isArray(e)?e:_n(e),{lightness:i=1,alpha:a=1}=t;return Up([n*i,r*i,o*i,s*a])}function Sr(e){const t=Math.round(Number(e)*100)/100;return t>1?1:t<0?0:t}function Be(e){const t=Math.round(Number(e));return t>255?255:t<0?0:t}function Up(e){const[t,n,r]=e;return 3 in e?`rgba(${Be(t)}, ${Be(n)}, ${Be(r)}, ${Sr(e[3])})`:`rgba(${Be(t)}, ${Be(n)}, ${Be(r)}, 1)`}function Np(e=8){return Math.random().toString(16).slice(2,2+e)}function Fp(e,t=[],n){const r={};return Object.getOwnPropertyNames(e).forEach(s=>{t.includes(s)||(r[s]=e[s])}),Object.assign(r,n)}const zp=(e,...t)=>typeof e=="function"?e(...t):typeof e=="string"?Zs(e):typeof e=="number"?Zs(String(e)):null;function Dp(e,t){console.error(`[naive/${e}]: ${t}`)}function Kp(e,t){throw new Error(`[naive/${e}]: ${t}`)}function p2(e){return e}function Wp(e){let t=0;for(let n=0;n<e.length;++n)e[n]==="&"&&++t;return t}const nu=/\s*,(?![^(]*\))\s*/g,Vp=/\s+/g;function qp(e,t){const n=[];return t.split(nu).forEach(r=>{let o=Wp(r);if(o){if(o===1){e.forEach(i=>{n.push(r.replace("&",i))});return}}else{e.forEach(i=>{n.push((i&&i+" ")+r)});return}let s=[r];for(;o--;){const i=[];s.forEach(a=>{e.forEach(c=>{i.push(a.replace("&",c))})}),s=i}s.forEach(i=>n.push(i))}),n}function Gp(e,t){const n=[];return t.split(nu).forEach(r=>{e.forEach(o=>{n.push((o&&o+" ")+r)})}),n}function Zp(e){let t=[""];return e.forEach(n=>{n=n&&n.trim(),n&&(n.includes("&")?t=qp(t,n):t=Gp(t,n))}),t.join(", ").replace(Vp," ")}function Xa(e){if(!e)return;const t=e.parentElement;t&&t.removeChild(e)}function os(e){return document.querySelector(`style[cssr-id="${e}"]`)}function Yp(e){const t=document.createElement("style");return t.setAttribute("cssr-id",e),t}function co(e){return e?/^\s*@(s|m)/.test(e):!1}const Xp=/[A-Z]/g;function ru(e){return e.replace(Xp,t=>"-"+t.toLowerCase())}function Qp(e,t="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(n=>t+`  ${ru(n[0])}: ${n[1]};`).join(`
`)+`
`+t+"}":`: ${e};`}function Jp(e,t,n){return typeof e=="function"?e({context:t.context,props:n}):e}function Qa(e,t,n,r){if(!t)return"";const o=Jp(t,n,r);if(!o)return"";if(typeof o=="string")return`${e} {
${o}
}`;const s=Object.keys(o);if(s.length===0)return n.config.keepEmptyBlock?e+` {
}`:"";const i=e?[e+" {"]:[];return s.forEach(a=>{const c=o[a];if(a==="raw"){i.push(`
`+c+`
`);return}a=ru(a),c!=null&&i.push(`  ${a}${Qp(c)}`)}),e&&i.push("}"),i.join(`
`)}function Qs(e,t,n){!e||e.forEach(r=>{if(Array.isArray(r))Qs(r,t,n);else if(typeof r=="function"){const o=r(t);Array.isArray(o)?Qs(o,t,n):o&&n(o)}else r&&n(r)})}function ou(e,t,n,r,o,s){const i=e.$;let a="";if(!i||typeof i=="string")co(i)?a=i:t.push(i);else if(typeof i=="function"){const u=i({context:r.context,props:o});co(u)?a=u:t.push(u)}else if(i.before&&i.before(r.context),!i.$||typeof i.$=="string")co(i.$)?a=i.$:t.push(i.$);else if(i.$){const u=i.$({context:r.context,props:o});co(u)?a=u:t.push(u)}const c=Zp(t),l=Qa(c,e.props,r,o);a?(n.push(`${a} {`),s&&l&&s.insertRule(`${a} {
${l}
}
`)):(s&&l&&s.insertRule(l),!s&&l.length&&n.push(l)),e.children&&Qs(e.children,{context:r.context,props:o},u=>{if(typeof u=="string"){const f=Qa(c,{raw:u},r,o);s?s.insertRule(f):n.push(f)}else ou(u,t,n,r,o,s)}),t.pop(),a&&n.push("}"),i&&i.after&&i.after(r.context)}function su(e,t,n,r=!1){const o=[];return ou(e,[],o,t,n,r?e.instance.__styleSheet:void 0),r?"":o.join(`

`)}function Nr(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function e0(e,t,n){const{els:r}=t;if(n===void 0)r.forEach(Xa),t.els=[];else{const o=os(n);o&&r.includes(o)&&(Xa(o),t.els=r.filter(s=>s!==o))}}function Ja(e,t){e.push(t)}function t0(e,t,n,r,o,s,i,a,c){if(s&&!c){if(n===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const d=window.__cssrContext;d[n]||(d[n]=!0,su(t,e,r,s));return}let l;if(n===void 0&&(l=t.render(r),n=Nr(l)),c){c.adapter(n,l!=null?l:t.render(r));return}const u=os(n);if(u!==null&&!i)return u;const f=u!=null?u:Yp(n);if(l===void 0&&(l=t.render(r)),f.textContent=l,u!==null)return u;if(a){const d=document.head.querySelector(`meta[name="${a}"]`);if(d)return document.head.insertBefore(f,d),Ja(t.els,f),f}return o?document.head.insertBefore(f,document.head.querySelector("style, link")):document.head.appendChild(f),Ja(t.els,f),f}function n0(e){return su(this,this.instance,e)}function r0(e={}){const{id:t,ssr:n,props:r,head:o=!1,silent:s=!1,force:i=!1,anchorMetaName:a}=e;return t0(this.instance,this,t,r,o,s,i,a,n)}function o0(e={}){const{id:t}=e;e0(this.instance,this,t)}const lo=function(e,t,n,r){return{instance:e,$:t,props:n,children:r,els:[],render:n0,mount:r0,unmount:o0}},s0=function(e,t,n,r){return Array.isArray(t)?lo(e,{$:null},null,t):Array.isArray(n)?lo(e,t,null,n):Array.isArray(r)?lo(e,t,n,r):lo(e,t,n,null)};function i0(e={}){let t=null;const n={c:(...r)=>s0(n,...r),use:(r,...o)=>r.install(n,...o),find:os,context:{},config:e,get __styleSheet(){if(!t){const r=document.createElement("style");return document.head.appendChild(r),t=document.styleSheets[document.styleSheets.length-1],t}return t}};return n}function a0(e,t){if(e===void 0)return!1;if(t){const{context:{ids:n}}=t;return n.has(e)}return os(e)!==null}function c0(e){let t=".",n="__",r="--",o;if(e){let h=e.blockPrefix;h&&(t=h),h=e.elementPrefix,h&&(n=h),h=e.modifierPrefix,h&&(r=h)}const s={install(h){o=h.c;const b=h.context;b.bem={},b.bem.b=null,b.bem.els=null}};function i(h){let b,w;return{before(y){b=y.bem.b,w=y.bem.els,y.bem.els=null},after(y){y.bem.b=b,y.bem.els=w},$({context:y,props:x}){return h=typeof h=="string"?h:h({context:y,props:x}),y.bem.b=h,`${(x==null?void 0:x.bPrefix)||t}${y.bem.b}`}}}function a(h){let b;return{before(w){b=w.bem.els},after(w){w.bem.els=b},$({context:w,props:y}){return h=typeof h=="string"?h:h({context:w,props:y}),w.bem.els=h.split(",").map(x=>x.trim()),w.bem.els.map(x=>`${(y==null?void 0:y.bPrefix)||t}${w.bem.b}${n}${x}`).join(", ")}}}function c(h){return{$({context:b,props:w}){h=typeof h=="string"?h:h({context:b,props:w});const y=h.split(",").map(v=>v.trim());function x(v){return y.map(A=>`&${(w==null?void 0:w.bPrefix)||t}${b.bem.b}${v!==void 0?`${n}${v}`:""}${r}${A}`).join(", ")}const T=b.bem.els;return T!==null?x(T[0]):x()}}}function l(h){return{$({context:b,props:w}){h=typeof h=="string"?h:h({context:b,props:w});const y=b.bem.els;return`&:not(${(w==null?void 0:w.bPrefix)||t}${b.bem.b}${y!==null&&y.length>0?`${n}${y[0]}`:""}${r}${h})`}}}return Object.assign(s,{cB:(...h)=>o(i(h[0]),h[1],h[2]),cE:(...h)=>o(a(h[0]),h[1],h[2]),cM:(...h)=>o(c(h[0]),h[1],h[2]),cNotM:(...h)=>o(l(h[0]),h[1],h[2])}),s}function At(e,t){return e+(t==="default"?"":t.replace(/^[a-z]/,n=>n.toUpperCase()))}At("abc","def");const l0="n",Fr=`.${l0}-`,u0="__",f0="--",iu=i0(),au=c0({blockPrefix:Fr,elementPrefix:u0,modifierPrefix:f0});iu.use(au);const{c:le,find:g2}=iu,{cB:En,cE:ze,cM:mt,cNotM:d0}=au;function m2(e){return le(({props:{bPrefix:t}})=>`${t||Fr}modal, ${t||Fr}drawer`,[e])}function b2(e){return le(({props:{bPrefix:t}})=>`${t||Fr}popover`,[e])}function y2(e){return le(({props:{bPrefix:t}})=>`&${t||Fr}modal`,e)}const w2=(...e)=>le(">",[En(...e)]);function ec(e){const t=ce(e),n=tn(t.value);return Er(t,r=>{n.value=r}),typeof e=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(r){e.set(r)}}}function h0(){const e=tn(!1);return es(()=>{e.value=!0}),Si(e)}const cu=Symbol("@css-render/vue3-ssr");function p0(e,t){return`<style cssr-id="${e}">
${t}
</style>`}function g0(e,t){const n=Se(cu,null);if(n===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:r,ids:o}=n;o.has(e)||r!==null&&(o.add(e),r.push(p0(e,t)))}const m0=typeof document<"u";function ss(){if(m0)return;const e=Se(cu,null);if(e!==null)return{adapter:g0,context:e}}var b0=typeof global=="object"&&global&&global.Object===Object&&global;const lu=b0;var y0=typeof self=="object"&&self&&self.Object===Object&&self,w0=lu||y0||Function("return this")();const ar=w0;var v0=ar.Symbol;const Kn=v0;var uu=Object.prototype,x0=uu.hasOwnProperty,E0=uu.toString,gr=Kn?Kn.toStringTag:void 0;function _0(e){var t=x0.call(e,gr),n=e[gr];try{e[gr]=void 0;var r=!0}catch{}var o=E0.call(e);return r&&(t?e[gr]=n:delete e[gr]),o}var C0=Object.prototype,A0=C0.toString;function S0(e){return A0.call(e)}var $0="[object Null]",T0="[object Undefined]",tc=Kn?Kn.toStringTag:void 0;function qr(e){return e==null?e===void 0?T0:$0:tc&&tc in Object(e)?_0(e):S0(e)}function cr(e){return e!=null&&typeof e=="object"}var k0="[object Symbol]";function O0(e){return typeof e=="symbol"||cr(e)&&qr(e)==k0}function I0(e,t){for(var n=-1,r=e==null?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}var H0=Array.isArray;const Ho=H0;var R0=1/0,nc=Kn?Kn.prototype:void 0,rc=nc?nc.toString:void 0;function fu(e){if(typeof e=="string")return e;if(Ho(e))return I0(e,fu)+"";if(O0(e))return rc?rc.call(e):"";var t=e+"";return t=="0"&&1/e==-R0?"-0":t}function $n(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function du(e){return e}var P0="[object AsyncFunction]",B0="[object Function]",L0="[object GeneratorFunction]",j0="[object Proxy]";function zi(e){if(!$n(e))return!1;var t=qr(e);return t==B0||t==L0||t==P0||t==j0}var M0=ar["__core-js_shared__"];const Ss=M0;var oc=function(){var e=/[^.]+$/.exec(Ss&&Ss.keys&&Ss.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function U0(e){return!!oc&&oc in e}var N0=Function.prototype,F0=N0.toString;function z0(e){if(e!=null){try{return F0.call(e)}catch{}try{return e+""}catch{}}return""}var D0=/[\\^$.*+?()[\]{}|]/g,K0=/^\[object .+?Constructor\]$/,W0=Function.prototype,V0=Object.prototype,q0=W0.toString,G0=V0.hasOwnProperty,Z0=RegExp("^"+q0.call(G0).replace(D0,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Y0(e){if(!$n(e)||U0(e))return!1;var t=zi(e)?Z0:K0;return t.test(z0(e))}function X0(e,t){return e==null?void 0:e[t]}function Di(e,t){var n=X0(e,t);return Y0(n)?n:void 0}var sc=Object.create,Q0=function(){function e(){}return function(t){if(!$n(t))return{};if(sc)return sc(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const J0=Q0;function eg(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function tg(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}var ng=800,rg=16,og=Date.now;function sg(e){var t=0,n=0;return function(){var r=og(),o=rg-(r-n);if(n=r,o>0){if(++t>=ng)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function ig(e){return function(){return e}}var ag=function(){try{var e=Di(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Ro=ag;var cg=Ro?function(e,t){return Ro(e,"toString",{configurable:!0,enumerable:!1,value:ig(t),writable:!0})}:du;const lg=cg;var ug=sg(lg);const fg=ug;var dg=9007199254740991,hg=/^(?:0|[1-9]\d*)$/;function hu(e,t){var n=typeof e;return t=t==null?dg:t,!!t&&(n=="number"||n!="symbol"&&hg.test(e))&&e>-1&&e%1==0&&e<t}function Ki(e,t,n){t=="__proto__"&&Ro?Ro(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function is(e,t){return e===t||e!==e&&t!==t}var pg=Object.prototype,gg=pg.hasOwnProperty;function mg(e,t,n){var r=e[t];(!(gg.call(e,t)&&is(r,n))||n===void 0&&!(t in e))&&Ki(e,t,n)}function bg(e,t,n,r){var o=!n;n||(n={});for(var s=-1,i=t.length;++s<i;){var a=t[s],c=r?r(n[a],e[a],a,n,e):void 0;c===void 0&&(c=e[a]),o?Ki(n,a,c):mg(n,a,c)}return n}var ic=Math.max;function yg(e,t,n){return t=ic(t===void 0?e.length-1:t,0),function(){for(var r=arguments,o=-1,s=ic(r.length-t,0),i=Array(s);++o<s;)i[o]=r[t+o];o=-1;for(var a=Array(t+1);++o<t;)a[o]=r[o];return a[t]=n(i),eg(e,this,a)}}function wg(e,t){return fg(yg(e,t,du),e+"")}var vg=9007199254740991;function pu(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=vg}function Wi(e){return e!=null&&pu(e.length)&&!zi(e)}function xg(e,t,n){if(!$n(n))return!1;var r=typeof t;return(r=="number"?Wi(n)&&hu(t,n.length):r=="string"&&t in n)?is(n[t],e):!1}function Eg(e){return wg(function(t,n){var r=-1,o=n.length,s=o>1?n[o-1]:void 0,i=o>2?n[2]:void 0;for(s=e.length>3&&typeof s=="function"?(o--,s):void 0,i&&xg(n[0],n[1],i)&&(s=o<3?void 0:s,o=1),t=Object(t);++r<o;){var a=n[r];a&&e(t,a,r,s)}return t})}var _g=Object.prototype;function gu(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||_g;return e===n}function Cg(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Ag="[object Arguments]";function ac(e){return cr(e)&&qr(e)==Ag}var mu=Object.prototype,Sg=mu.hasOwnProperty,$g=mu.propertyIsEnumerable,Tg=ac(function(){return arguments}())?ac:function(e){return cr(e)&&Sg.call(e,"callee")&&!$g.call(e,"callee")};const Js=Tg;function kg(){return!1}var bu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,cc=bu&&typeof module=="object"&&module&&!module.nodeType&&module,Og=cc&&cc.exports===bu,lc=Og?ar.Buffer:void 0,Ig=lc?lc.isBuffer:void 0,Hg=Ig||kg;const yu=Hg;var Rg="[object Arguments]",Pg="[object Array]",Bg="[object Boolean]",Lg="[object Date]",jg="[object Error]",Mg="[object Function]",Ug="[object Map]",Ng="[object Number]",Fg="[object Object]",zg="[object RegExp]",Dg="[object Set]",Kg="[object String]",Wg="[object WeakMap]",Vg="[object ArrayBuffer]",qg="[object DataView]",Gg="[object Float32Array]",Zg="[object Float64Array]",Yg="[object Int8Array]",Xg="[object Int16Array]",Qg="[object Int32Array]",Jg="[object Uint8Array]",em="[object Uint8ClampedArray]",tm="[object Uint16Array]",nm="[object Uint32Array]",ve={};ve[Gg]=ve[Zg]=ve[Yg]=ve[Xg]=ve[Qg]=ve[Jg]=ve[em]=ve[tm]=ve[nm]=!0;ve[Rg]=ve[Pg]=ve[Vg]=ve[Bg]=ve[qg]=ve[Lg]=ve[jg]=ve[Mg]=ve[Ug]=ve[Ng]=ve[Fg]=ve[zg]=ve[Dg]=ve[Kg]=ve[Wg]=!1;function rm(e){return cr(e)&&pu(e.length)&&!!ve[qr(e)]}function om(e){return function(t){return e(t)}}var wu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,$r=wu&&typeof module=="object"&&module&&!module.nodeType&&module,sm=$r&&$r.exports===wu,$s=sm&&lu.process,im=function(){try{var e=$r&&$r.require&&$r.require("util").types;return e||$s&&$s.binding&&$s.binding("util")}catch{}}();const uc=im;var fc=uc&&uc.isTypedArray,am=fc?om(fc):rm;const vu=am;var cm=Object.prototype,lm=cm.hasOwnProperty;function um(e,t){var n=Ho(e),r=!n&&Js(e),o=!n&&!r&&yu(e),s=!n&&!r&&!o&&vu(e),i=n||r||o||s,a=i?Cg(e.length,String):[],c=a.length;for(var l in e)(t||lm.call(e,l))&&!(i&&(l=="length"||o&&(l=="offset"||l=="parent")||s&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||hu(l,c)))&&a.push(l);return a}function fm(e,t){return function(n){return e(t(n))}}function dm(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var hm=Object.prototype,pm=hm.hasOwnProperty;function gm(e){if(!$n(e))return dm(e);var t=gu(e),n=[];for(var r in e)r=="constructor"&&(t||!pm.call(e,r))||n.push(r);return n}function xu(e){return Wi(e)?um(e,!0):gm(e)}var mm=Di(Object,"create");const zr=mm;function bm(){this.__data__=zr?zr(null):{},this.size=0}function ym(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var wm="__lodash_hash_undefined__",vm=Object.prototype,xm=vm.hasOwnProperty;function Em(e){var t=this.__data__;if(zr){var n=t[e];return n===wm?void 0:n}return xm.call(t,e)?t[e]:void 0}var _m=Object.prototype,Cm=_m.hasOwnProperty;function Am(e){var t=this.__data__;return zr?t[e]!==void 0:Cm.call(t,e)}var Sm="__lodash_hash_undefined__";function $m(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=zr&&t===void 0?Sm:t,this}function Cn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Cn.prototype.clear=bm;Cn.prototype.delete=ym;Cn.prototype.get=Em;Cn.prototype.has=Am;Cn.prototype.set=$m;function Tm(){this.__data__=[],this.size=0}function as(e,t){for(var n=e.length;n--;)if(is(e[n][0],t))return n;return-1}var km=Array.prototype,Om=km.splice;function Im(e){var t=this.__data__,n=as(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Om.call(t,n,1),--this.size,!0}function Hm(e){var t=this.__data__,n=as(t,e);return n<0?void 0:t[n][1]}function Rm(e){return as(this.__data__,e)>-1}function Pm(e,t){var n=this.__data__,r=as(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function It(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}It.prototype.clear=Tm;It.prototype.delete=Im;It.prototype.get=Hm;It.prototype.has=Rm;It.prototype.set=Pm;var Bm=Di(ar,"Map");const Eu=Bm;function Lm(){this.size=0,this.__data__={hash:new Cn,map:new(Eu||It),string:new Cn}}function jm(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function cs(e,t){var n=e.__data__;return jm(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Mm(e){var t=cs(this,e).delete(e);return this.size-=t?1:0,t}function Um(e){return cs(this,e).get(e)}function Nm(e){return cs(this,e).has(e)}function Fm(e,t){var n=cs(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function lr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}lr.prototype.clear=Lm;lr.prototype.delete=Mm;lr.prototype.get=Um;lr.prototype.has=Nm;lr.prototype.set=Fm;function zm(e){return e==null?"":fu(e)}var Dm=fm(Object.getPrototypeOf,Object);const _u=Dm;var Km="[object Object]",Wm=Function.prototype,Vm=Object.prototype,Cu=Wm.toString,qm=Vm.hasOwnProperty,Gm=Cu.call(Object);function Zm(e){if(!cr(e)||qr(e)!=Km)return!1;var t=_u(e);if(t===null)return!0;var n=qm.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Cu.call(n)==Gm}function Ym(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var s=Array(o);++r<o;)s[r]=e[r+t];return s}function Xm(e,t,n){var r=e.length;return n=n===void 0?r:n,!t&&n>=r?e:Ym(e,t,n)}var Qm="\\ud800-\\udfff",Jm="\\u0300-\\u036f",eb="\\ufe20-\\ufe2f",tb="\\u20d0-\\u20ff",nb=Jm+eb+tb,rb="\\ufe0e\\ufe0f",ob="\\u200d",sb=RegExp("["+ob+Qm+nb+rb+"]");function Au(e){return sb.test(e)}function ib(e){return e.split("")}var Su="\\ud800-\\udfff",ab="\\u0300-\\u036f",cb="\\ufe20-\\ufe2f",lb="\\u20d0-\\u20ff",ub=ab+cb+lb,fb="\\ufe0e\\ufe0f",db="["+Su+"]",ei="["+ub+"]",ti="\\ud83c[\\udffb-\\udfff]",hb="(?:"+ei+"|"+ti+")",$u="[^"+Su+"]",Tu="(?:\\ud83c[\\udde6-\\uddff]){2}",ku="[\\ud800-\\udbff][\\udc00-\\udfff]",pb="\\u200d",Ou=hb+"?",Iu="["+fb+"]?",gb="(?:"+pb+"(?:"+[$u,Tu,ku].join("|")+")"+Iu+Ou+")*",mb=Iu+Ou+gb,bb="(?:"+[$u+ei+"?",ei,Tu,ku,db].join("|")+")",yb=RegExp(ti+"(?="+ti+")|"+bb+mb,"g");function wb(e){return e.match(yb)||[]}function vb(e){return Au(e)?wb(e):ib(e)}function xb(e){return function(t){t=zm(t);var n=Au(t)?vb(t):void 0,r=n?n[0]:t.charAt(0),o=n?Xm(n,1).join(""):t.slice(1);return r[e]()+o}}var Eb=xb("toUpperCase");const _b=Eb;function Cb(){this.__data__=new It,this.size=0}function Ab(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Sb(e){return this.__data__.get(e)}function $b(e){return this.__data__.has(e)}var Tb=200;function kb(e,t){var n=this.__data__;if(n instanceof It){var r=n.__data__;if(!Eu||r.length<Tb-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new lr(r)}return n.set(e,t),this.size=n.size,this}function ur(e){var t=this.__data__=new It(e);this.size=t.size}ur.prototype.clear=Cb;ur.prototype.delete=Ab;ur.prototype.get=Sb;ur.prototype.has=$b;ur.prototype.set=kb;var Hu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,dc=Hu&&typeof module=="object"&&module&&!module.nodeType&&module,Ob=dc&&dc.exports===Hu,hc=Ob?ar.Buffer:void 0,pc=hc?hc.allocUnsafe:void 0;function Ib(e,t){if(t)return e.slice();var n=e.length,r=pc?pc(n):new e.constructor(n);return e.copy(r),r}var Hb=ar.Uint8Array;const gc=Hb;function Rb(e){var t=new e.constructor(e.byteLength);return new gc(t).set(new gc(e)),t}function Pb(e,t){var n=t?Rb(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Bb(e){return typeof e.constructor=="function"&&!gu(e)?J0(_u(e)):{}}function Lb(e){return function(t,n,r){for(var o=-1,s=Object(t),i=r(t),a=i.length;a--;){var c=i[e?a:++o];if(n(s[c],c,s)===!1)break}return t}}var jb=Lb();const Mb=jb;function ni(e,t,n){(n!==void 0&&!is(e[t],n)||n===void 0&&!(t in e))&&Ki(e,t,n)}function Ub(e){return cr(e)&&Wi(e)}function ri(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function Nb(e){return bg(e,xu(e))}function Fb(e,t,n,r,o,s,i){var a=ri(e,n),c=ri(t,n),l=i.get(c);if(l){ni(e,n,l);return}var u=s?s(a,c,n+"",e,t,i):void 0,f=u===void 0;if(f){var d=Ho(c),g=!d&&yu(c),h=!d&&!g&&vu(c);u=c,d||g||h?Ho(a)?u=a:Ub(a)?u=tg(a):g?(f=!1,u=Ib(c,!0)):h?(f=!1,u=Pb(c,!0)):u=[]:Zm(c)||Js(c)?(u=a,Js(a)?u=Nb(a):(!$n(a)||zi(a))&&(u=Bb(c))):f=!1}f&&(i.set(c,u),o(u,c,r,s,i),i.delete(c)),ni(e,n,u)}function Ru(e,t,n,r,o){e!==t&&Mb(t,function(s,i){if(o||(o=new ur),$n(s))Fb(e,t,i,n,Ru,r,o);else{var a=r?r(ri(e,i),s,i+"",e,t,o):void 0;a===void 0&&(a=s),ni(e,i,a)}},xu)}var zb=Eg(function(e,t,n){Ru(e,t,n)});const xr=zb,ls={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:Db,fontFamily:Kb,lineHeight:Wb}=ls,Pu=le("body",`
 margin: 0;
 font-size: ${Db};
 font-family: ${Kb};
 line-height: ${Wb};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[le("input",`
 font-family: inherit;
 font-size: inherit;
 `)]),An="n-config-provider",Dr="naive-ui-style";function v2(e){return e}function Vi(e,t,n,r,o,s){const i=ss(),a=Se(An,null);if(n){const l=()=>{const u=s==null?void 0:s.value;n.mount({id:u===void 0?t:u+t,head:!0,props:{bPrefix:u?`.${u}-`:void 0},anchorMetaName:Dr,ssr:i}),a!=null&&a.preflightStyleDisabled||Pu.mount({id:"n-global",head:!0,anchorMetaName:Dr,ssr:i})};i?l():Jo(l)}return ce(()=>{var l;const{theme:{common:u,self:f,peers:d={}}={},themeOverrides:g={},builtinThemeOverrides:h={}}=o,{common:b,peers:w}=g,{common:y=void 0,[e]:{common:x=void 0,self:T=void 0,peers:v={}}={}}=(a==null?void 0:a.mergedThemeRef.value)||{},{common:A=void 0,[e]:N={}}=(a==null?void 0:a.mergedThemeOverridesRef.value)||{},{common:K,peers:I={}}=N,F=xr({},u||x||y||r.common,A,K,b),k=xr((l=f||T||r.self)===null||l===void 0?void 0:l(F),h,N,g);return{common:F,self:k,peers:xr({},r.peers,v,d),peerOverrides:xr({},h.peers,I,w)}})}Vi.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const Bu="n";function Lu(e={},t={defaultBordered:!0}){const n=Se(An,null);return{inlineThemeDisabled:n==null?void 0:n.inlineThemeDisabled,mergedRtlRef:n==null?void 0:n.mergedRtlRef,mergedComponentPropsRef:n==null?void 0:n.mergedComponentPropsRef,mergedBreakpointsRef:n==null?void 0:n.mergedBreakpointsRef,mergedBorderedRef:ce(()=>{var r,o;const{bordered:s}=e;return s!==void 0?s:(o=(r=n==null?void 0:n.mergedBorderedRef.value)!==null&&r!==void 0?r:t.defaultBordered)!==null&&o!==void 0?o:!0}),mergedClsPrefixRef:ce(()=>(n==null?void 0:n.mergedClsPrefixRef.value)||Bu),namespaceRef:ce(()=>n==null?void 0:n.mergedNamespaceRef.value)}}function qi(e,t,n){if(!t)return;const r=ss(),o=Se(An,null),s=()=>{const i=n==null?void 0:n.value;t.mount({id:i===void 0?e:i+e,head:!0,anchorMetaName:Dr,props:{bPrefix:i?`.${i}-`:void 0},ssr:r}),o!=null&&o.preflightStyleDisabled||Pu.mount({id:"n-global",head:!0,anchorMetaName:Dr,ssr:r})};r?s():Jo(s)}function Vb(e,t,n,r){var o;n||Kp("useThemeClass","cssVarsRef is not passed");const s=(o=Se(An,null))===null||o===void 0?void 0:o.mergedThemeHashRef,i=tn(""),a=ss();let c;const l=`__${e}`,u=()=>{let f=l;const d=t?t.value:void 0,g=s==null?void 0:s.value;g&&(f+="-"+g),d&&(f+="-"+d);const{themeOverrides:h,builtinThemeOverrides:b}=r;h&&(f+="-"+Nr(JSON.stringify(h))),b&&(f+="-"+Nr(JSON.stringify(b))),i.value=f,c=()=>{const w=n.value;let y="";for(const x in w)y+=`${x}: ${w[x]};`;le(`.${f}`,y).mount({id:f,ssr:a}),c=void 0}};return $l(()=>{u()}),{themeClass:i,onRender:()=>{c==null||c()}}}function qb(e,t,n){if(!t)return;const r=ss(),o=ce(()=>{const{value:i}=t;if(!i)return;const a=i[e];if(!!a)return a}),s=()=>{$l(()=>{const{value:i}=n,a=`${i}${e}Rtl`;if(a0(a,r))return;const{value:c}=o;!c||c.style.mount({id:a,head:!0,anchorMetaName:Dr,props:{bPrefix:i?`.${i}-`:void 0},ssr:r})})};return r?s():Jo(s),o}function Gr(e,t){return Xe({name:_b(e),setup(){var n;const r=(n=Se(An,null))===null||n===void 0?void 0:n.mergedIconsRef;return()=>{var o;const s=(o=r==null?void 0:r.value)===null||o===void 0?void 0:o[e];return s?s():t}}})}const Gb=Gr("close",z("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},z("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},z("g",{fill:"currentColor","fill-rule":"nonzero"},z("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),Zb=Gr("error",z("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},z("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},z("g",{"fill-rule":"nonzero"},z("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),Yb=Gr("info",z("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},z("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},z("g",{"fill-rule":"nonzero"},z("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),Xb=Gr("success",z("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},z("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},z("g",{"fill-rule":"nonzero"},z("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),Qb=Gr("warning",z("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},z("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},z("g",{"fill-rule":"nonzero"},z("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),ju=Xe({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const n=h0();return()=>z(rs,{name:"icon-switch-transition",appear:n.value},t)}}),Jb=Xe({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:t}){function n(a){e.width?a.style.maxWidth=`${a.offsetWidth}px`:a.style.maxHeight=`${a.offsetHeight}px`,a.offsetWidth}function r(a){e.width?a.style.maxWidth="0":a.style.maxHeight="0",a.offsetWidth;const{onLeave:c}=e;c&&c()}function o(a){e.width?a.style.maxWidth="":a.style.maxHeight="";const{onAfterLeave:c}=e;c&&c()}function s(a){if(a.style.transition="none",e.width){const c=a.offsetWidth;a.style.maxWidth="0",a.offsetWidth,a.style.transition="",a.style.maxWidth=`${c}px`}else if(e.reverse)a.style.maxHeight=`${a.offsetHeight}px`,a.offsetHeight,a.style.transition="",a.style.maxHeight="0";else{const c=a.offsetHeight;a.style.maxHeight="0",a.offsetWidth,a.style.transition="",a.style.maxHeight=`${c}px`}a.offsetWidth}function i(a){var c;e.width?a.style.maxWidth="":e.reverse||(a.style.maxHeight=""),(c=e.onAfterEnter)===null||c===void 0||c.call(e)}return()=>{const a=e.group?xp:rs;return z(a,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:s,onAfterEnter:i,onBeforeLeave:n,onLeave:r,onAfterLeave:o},t)}}}),ey=En("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[le("svg",`
 height: 1em;
 width: 1em;
 `)]),Mu=Xe({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){qi("-base-icon",ey,ki(e,"clsPrefix"))},render(){return z("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),ty=En("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[mt("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),le("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),d0("disabled",[le("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),le("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),le("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),le("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),le("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),mt("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),mt("round",[le("&::before",`
 border-radius: 50%;
 `)])]),ny=Xe({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return qi("-base-close",ty,ki(e,"clsPrefix")),()=>{const{clsPrefix:t,disabled:n,absolute:r,round:o,isButtonTag:s}=e;return z(s?"button":"div",{type:s?"button":void 0,tabindex:n||!e.focusable?-1:0,"aria-disabled":n,"aria-label":"close",role:s?void 0:"button",disabled:n,class:[`${t}-base-close`,r&&`${t}-base-close--absolute`,n&&`${t}-base-close--disabled`,o&&`${t}-base-close--round`],onMousedown:a=>{e.focusable||a.preventDefault()},onClick:e.onClick},z(Mu,{clsPrefix:t},{default:()=>z(Gb,null)}))}}}),{cubicBezierEaseInOut:ry}=ls;function oi({originalTransform:e="",left:t=0,top:n=0,transition:r=`all .3s ${ry} !important`}={}){return[le("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:t,top:n,opacity:0}),le("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:n,opacity:1}),le("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:n,transition:r})]}const oy=le([le("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),le("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),le("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),le("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),En("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[ze("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[oi()]),ze("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[ze("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),ze("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[ze("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[ze("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),ze("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[ze("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),ze("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[ze("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),ze("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[oi({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),sy={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},iy=Xe({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},sy),setup(e){qi("-base-loading",oy,ki(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:n,stroke:r,scale:o}=this,s=t/o;return z("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},z(ju,null,{default:()=>this.show?z("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},z("div",{class:`${e}-base-loading__container`},z("div",{class:`${e}-base-loading__container-layer`},z("div",{class:`${e}-base-loading__container-layer-left`},z("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},z("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:t-n/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),z("div",{class:`${e}-base-loading__container-layer-patch`},z("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},z("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:t-n/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),z("div",{class:`${e}-base-loading__container-layer-right`},z("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},z("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:t-n/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t})))))):z("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),G={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},ay=_n(G.neutralBase),Uu=_n(G.neutralInvertBase),cy="rgba("+Uu.slice(0,3).join(", ")+", ";function mc(e){return cy+String(e)+")"}function Pe(e){const t=Array.from(Uu);return t[3]=Number(e),Mp(ay,t)}const ly=Object.assign(Object.assign({name:"common"},ls),{baseColor:G.neutralBase,primaryColor:G.primaryDefault,primaryColorHover:G.primaryHover,primaryColorPressed:G.primaryActive,primaryColorSuppl:G.primarySuppl,infoColor:G.infoDefault,infoColorHover:G.infoHover,infoColorPressed:G.infoActive,infoColorSuppl:G.infoSuppl,successColor:G.successDefault,successColorHover:G.successHover,successColorPressed:G.successActive,successColorSuppl:G.successSuppl,warningColor:G.warningDefault,warningColorHover:G.warningHover,warningColorPressed:G.warningActive,warningColorSuppl:G.warningSuppl,errorColor:G.errorDefault,errorColorHover:G.errorHover,errorColorPressed:G.errorActive,errorColorSuppl:G.errorSuppl,textColorBase:G.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:Pe(G.alpha4),placeholderColor:Pe(G.alpha4),placeholderColorDisabled:Pe(G.alpha5),iconColor:Pe(G.alpha4),iconColorHover:ao(Pe(G.alpha4),{lightness:.75}),iconColorPressed:ao(Pe(G.alpha4),{lightness:.9}),iconColorDisabled:Pe(G.alpha5),opacity1:G.alpha1,opacity2:G.alpha2,opacity3:G.alpha3,opacity4:G.alpha4,opacity5:G.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:Pe(Number(G.alphaClose)),closeIconColorHover:Pe(Number(G.alphaClose)),closeIconColorPressed:Pe(Number(G.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:Pe(G.alpha4),clearColorHover:ao(Pe(G.alpha4),{lightness:.75}),clearColorPressed:ao(Pe(G.alpha4),{lightness:.9}),scrollbarColor:mc(G.alphaScrollbar),scrollbarColorHover:mc(G.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:Pe(G.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:G.neutralPopover,tableColor:G.neutralCard,cardColor:G.neutralCard,modalColor:G.neutralModal,bodyColor:G.neutralBody,tagColor:"#eee",avatarColor:Pe(G.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:Pe(G.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:G.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),uy=ly,{cubicBezierEaseInOut:pt,cubicBezierEaseOut:fy,cubicBezierEaseIn:dy}=ls;function hy({overflow:e="hidden",duration:t=".3s",originalTransition:n="",leavingDelay:r="0s",foldPadding:o=!1,enterToProps:s=void 0,leaveToProps:i=void 0,reverse:a=!1}={}){const c=a?"leave":"enter",l=a?"enter":"leave";return[le(`&.fade-in-height-expand-transition-${l}-from,
 &.fade-in-height-expand-transition-${c}-to`,Object.assign(Object.assign({},s),{opacity:1})),le(`&.fade-in-height-expand-transition-${l}-to,
 &.fade-in-height-expand-transition-${c}-from`,Object.assign(Object.assign({},i),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:o?"0 !important":void 0,paddingBottom:o?"0 !important":void 0})),le(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${pt} ${r},
 opacity ${t} ${fy} ${r},
 margin-top ${t} ${pt} ${r},
 margin-bottom ${t} ${pt} ${r},
 padding-top ${t} ${pt} ${r},
 padding-bottom ${t} ${pt} ${r}
 ${n?","+n:""}
 `),le(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${pt},
 opacity ${t} ${dy},
 margin-top ${t} ${pt},
 margin-bottom ${t} ${pt},
 padding-top ${t} ${pt},
 padding-bottom ${t} ${pt}
 ${n?","+n:""}
 `)]}const py={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(Dp("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},gy=Xe({name:"ConfigProvider",alias:["App"],props:py,setup(e){const t=Se(An,null),n=ce(()=>{const{theme:h}=e;if(h===null)return;const b=t==null?void 0:t.mergedThemeRef.value;return h===void 0?b:b===void 0?h:Object.assign({},b,h)}),r=ce(()=>{const{themeOverrides:h}=e;if(h!==null){if(h===void 0)return t==null?void 0:t.mergedThemeOverridesRef.value;{const b=t==null?void 0:t.mergedThemeOverridesRef.value;return b===void 0?h:xr({},b,h)}}}),o=ec(()=>{const{namespace:h}=e;return h===void 0?t==null?void 0:t.mergedNamespaceRef.value:h}),s=ec(()=>{const{bordered:h}=e;return h===void 0?t==null?void 0:t.mergedBorderedRef.value:h}),i=ce(()=>{const{icons:h}=e;return h===void 0?t==null?void 0:t.mergedIconsRef.value:h}),a=ce(()=>{const{componentOptions:h}=e;return h!==void 0?h:t==null?void 0:t.mergedComponentPropsRef.value}),c=ce(()=>{const{clsPrefix:h}=e;return h!==void 0?h:t==null?void 0:t.mergedClsPrefixRef.value}),l=ce(()=>{var h;const{rtl:b}=e;if(b===void 0)return t==null?void 0:t.mergedRtlRef.value;const w={};for(const y of b)w[y.name]=$o(y),(h=y.peers)===null||h===void 0||h.forEach(x=>{x.name in w||(w[x.name]=$o(x))});return w}),u=ce(()=>e.breakpoints||(t==null?void 0:t.mergedBreakpointsRef.value)),f=e.inlineThemeDisabled||(t==null?void 0:t.inlineThemeDisabled),d=e.preflightStyleDisabled||(t==null?void 0:t.preflightStyleDisabled),g=ce(()=>{const{value:h}=n,{value:b}=r,w=b&&Object.keys(b).length!==0,y=h==null?void 0:h.name;return y?w?`${y}-${Nr(JSON.stringify(r.value))}`:y:w?Nr(JSON.stringify(r.value)):""});return vn(An,{mergedThemeHashRef:g,mergedBreakpointsRef:u,mergedRtlRef:l,mergedIconsRef:i,mergedComponentPropsRef:a,mergedBorderedRef:s,mergedNamespaceRef:o,mergedClsPrefixRef:c,mergedLocaleRef:ce(()=>{const{locale:h}=e;if(h!==null)return h===void 0?t==null?void 0:t.mergedLocaleRef.value:h}),mergedDateLocaleRef:ce(()=>{const{dateLocale:h}=e;if(h!==null)return h===void 0?t==null?void 0:t.mergedDateLocaleRef.value:h}),mergedHljsRef:ce(()=>{const{hljs:h}=e;return h===void 0?t==null?void 0:t.mergedHljsRef.value:h}),mergedKatexRef:ce(()=>{const{katex:h}=e;return h===void 0?t==null?void 0:t.mergedKatexRef.value:h}),mergedThemeRef:n,mergedThemeOverridesRef:r,inlineThemeDisabled:f||!1,preflightStyleDisabled:d||!1}),{mergedClsPrefix:c,mergedBordered:s,mergedNamespace:o,mergedTheme:n,mergedThemeOverrides:r}},render(){var e,t,n,r;return this.abstract?(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n):z(this.as||this.tag,{class:`${this.mergedClsPrefix||Bu}-config-provider`},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}});function my(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}const by={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"},yy=e=>{const{textColor2:t,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:o,infoColor:s,successColor:i,errorColor:a,warningColor:c,popoverColor:l,boxShadow2:u,primaryColor:f,lineHeight:d,borderRadius:g,closeColorHover:h,closeColorPressed:b}=e;return Object.assign(Object.assign({},by),{closeBorderRadius:g,textColor:t,textColorInfo:t,textColorSuccess:t,textColorError:t,textColorWarning:t,textColorLoading:t,color:l,colorInfo:l,colorSuccess:l,colorError:l,colorWarning:l,colorLoading:l,boxShadow:u,boxShadowInfo:u,boxShadowSuccess:u,boxShadowError:u,boxShadowWarning:u,boxShadowLoading:u,iconColor:t,iconColorInfo:s,iconColorSuccess:i,iconColorWarning:c,iconColorError:a,iconColorLoading:f,closeColorHover:h,closeColorPressed:b,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:o,closeColorHoverInfo:h,closeColorPressedInfo:b,closeIconColorInfo:n,closeIconColorHoverInfo:r,closeIconColorPressedInfo:o,closeColorHoverSuccess:h,closeColorPressedSuccess:b,closeIconColorSuccess:n,closeIconColorHoverSuccess:r,closeIconColorPressedSuccess:o,closeColorHoverError:h,closeColorPressedError:b,closeIconColorError:n,closeIconColorHoverError:r,closeIconColorPressedError:o,closeColorHoverWarning:h,closeColorPressedWarning:b,closeIconColorWarning:n,closeIconColorHoverWarning:r,closeIconColorPressedWarning:o,closeColorHoverLoading:h,closeColorPressedLoading:b,closeIconColorLoading:n,closeIconColorHoverLoading:r,closeIconColorPressedLoading:o,loadingColor:f,lineHeight:d,borderRadius:g})},wy={name:"Message",common:uy,self:yy},vy=wy,Nu={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},xy="n-message-api",Fu="n-message-provider",Ey=le([En("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[hy({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),En("message",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `,[ze("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),ze("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(e=>mt(`${e}-type`,[le("> *",`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),le("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[oi()])]),ze("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[le("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),le("&:active",`
 color: var(--n-close-icon-color-pressed);
 `)])]),En("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[mt("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),mt("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),mt("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),mt("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),mt("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),mt("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]),_y={info:()=>z(Yb,null),success:()=>z(Xb,null),warning:()=>z(Qb,null),error:()=>z(Zb,null),default:()=>null},Cy=Xe({name:"Message",props:Object.assign(Object.assign({},Nu),{render:Function}),setup(e){const{inlineThemeDisabled:t,mergedRtlRef:n}=Lu(e),{props:r,mergedClsPrefixRef:o}=Se(Fu),s=qb("Message",n,o),i=Vi("Message","-message",Ey,vy,r,o),a=ce(()=>{const{type:l}=e,{common:{cubicBezierEaseInOut:u},self:{padding:f,margin:d,maxWidth:g,iconMargin:h,closeMargin:b,closeSize:w,iconSize:y,fontSize:x,lineHeight:T,borderRadius:v,iconColorInfo:A,iconColorSuccess:N,iconColorWarning:K,iconColorError:I,iconColorLoading:F,closeIconSize:k,closeBorderRadius:B,[At("textColor",l)]:_,[At("boxShadow",l)]:Z,[At("color",l)]:ee,[At("closeColorHover",l)]:Ce,[At("closeColorPressed",l)]:be,[At("closeIconColor",l)]:pe,[At("closeIconColorPressed",l)]:de,[At("closeIconColorHover",l)]:Ke}}=i.value;return{"--n-bezier":u,"--n-margin":d,"--n-padding":f,"--n-max-width":g,"--n-font-size":x,"--n-icon-margin":h,"--n-icon-size":y,"--n-close-icon-size":k,"--n-close-border-radius":B,"--n-close-size":w,"--n-close-margin":b,"--n-text-color":_,"--n-color":ee,"--n-box-shadow":Z,"--n-icon-color-info":A,"--n-icon-color-success":N,"--n-icon-color-warning":K,"--n-icon-color-error":I,"--n-icon-color-loading":F,"--n-close-color-hover":Ce,"--n-close-color-pressed":be,"--n-close-icon-color":pe,"--n-close-icon-color-pressed":de,"--n-close-icon-color-hover":Ke,"--n-line-height":T,"--n-border-radius":v}}),c=t?Vb("message",ce(()=>e.type[0]),a,{}):void 0;return{mergedClsPrefix:o,rtlEnabled:s,messageProviderProps:r,handleClose(){var l;(l=e.onClose)===null||l===void 0||l.call(e)},cssVars:t?void 0:a,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender,placement:r.placement}},render(){const{render:e,type:t,closable:n,content:r,mergedClsPrefix:o,cssVars:s,themeClass:i,onRender:a,icon:c,handleClose:l,showIcon:u}=this;a==null||a();let f;return z("div",{class:[`${o}-message-wrapper`,i],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},s]},e?e(this.$props):z("div",{class:[`${o}-message ${o}-message--${t}-type`,this.rtlEnabled&&`${o}-message--rtl`]},(f=Ay(c,t,o))&&u?z("div",{class:`${o}-message__icon ${o}-message__icon--${t}-type`},z(ju,null,{default:()=>f})):null,z("div",{class:`${o}-message__content`},zp(r)),n?z(ny,{clsPrefix:o,class:`${o}-message__close`,onClick:l,absolute:!0}):null))}});function Ay(e,t,n){if(typeof e=="function")return e();{const r=t==="loading"?z(iy,{clsPrefix:n,strokeWidth:24,scale:.85}):_y[t]();return r?z(Mu,{clsPrefix:n,key:t},{default:()=>r}):null}}const Sy=Xe({name:"MessageEnvironment",props:Object.assign(Object.assign({},Nu),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let t=null;const n=tn(!0);es(()=>{r()});function r(){const{duration:u}=e;u&&(t=window.setTimeout(i,u))}function o(u){u.currentTarget===u.target&&t!==null&&(window.clearTimeout(t),t=null)}function s(u){u.currentTarget===u.target&&r()}function i(){const{onHide:u}=e;n.value=!1,t&&(window.clearTimeout(t),t=null),u&&u()}function a(){const{onClose:u}=e;u&&u(),i()}function c(){const{onAfterLeave:u,onInternalAfterLeave:f,onAfterHide:d,internalKey:g}=e;u&&u(),f&&f(g),d&&d()}function l(){i()}return{show:n,hide:i,handleClose:a,handleAfterLeave:c,handleMouseleave:s,handleMouseenter:o,deactivate:l}},render(){return z(Jb,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?z(Cy,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),$y=Object.assign(Object.assign({},Vi.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerStyle:[String,Object]}),Ty=Xe({name:"MessageProvider",props:$y,setup(e){const{mergedClsPrefixRef:t}=Lu(e),n=tn([]),r=tn({}),o={create(c,l){return s(c,Object.assign({type:"default"},l))},info(c,l){return s(c,Object.assign(Object.assign({},l),{type:"info"}))},success(c,l){return s(c,Object.assign(Object.assign({},l),{type:"success"}))},warning(c,l){return s(c,Object.assign(Object.assign({},l),{type:"warning"}))},error(c,l){return s(c,Object.assign(Object.assign({},l),{type:"error"}))},loading(c,l){return s(c,Object.assign(Object.assign({},l),{type:"loading"}))},destroyAll:a};vn(Fu,{props:e,mergedClsPrefixRef:t}),vn(xy,o);function s(c,l){const u=Np(),f=or(Object.assign(Object.assign({},l),{content:c,key:u,destroy:()=>{var g;(g=r.value[u])===null||g===void 0||g.hide()}})),{max:d}=e;return d&&n.value.length>=d&&n.value.shift(),n.value.push(f),f}function i(c){n.value.splice(n.value.findIndex(l=>l.key===c),1),delete r.value[c]}function a(){Object.values(r.value).forEach(c=>{c.hide()})}return Object.assign({mergedClsPrefix:t,messageRefs:r,messageList:n,handleAfterLeave:i},o)},render(){var e,t,n;return z(De,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.messageList.length?z(Nh,{to:(n=this.to)!==null&&n!==void 0?n:"body"},z("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`],key:"message-container",style:this.containerStyle},this.messageList.map(r=>z(Sy,Object.assign({ref:o=>{o&&(this.messageRefs[r.key]=o)},internalKey:r.key,onInternalAfterLeave:this.handleAfterLeave},Fp(r,["destroy"],void 0),{duration:r.duration===void 0?this.duration:r.duration,keepAliveOnHover:r.keepAliveOnHover===void 0?this.keepAliveOnHover:r.keepAliveOnHover,closable:r.closable===void 0?this.closable:r.closable}))))):null)}}),ky={class:"w-full h-screen"},Oy=Xe({__name:"App",setup(e){const t=tn(null);return(n,r)=>{const o=yh("RouterView");return Mi(),Ui(Yt(gy),{theme:t.value,class:""},{default:zs(()=>[Re(Yt(Ty),null,{default:zs(()=>[Ni("div",ky,[Re(o)])]),_:1})]),_:1},8,["theme"])}}});const Iy=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},Hy=Iy(Oy,[["__scopeId","data-v-5b93d6c7"]]),Ry="modulepreload",Py=function(e){return"/"+e},bc={},Bt=function(t,n,r){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=Py(o),o in bc)return;bc[o]=!0;const s=o.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":Ry,s||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),s)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Pn=typeof window<"u";function By(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const he=Object.assign;function Ts(e,t){const n={};for(const r in t){const o=t[r];n[r]=ut(o)?o.map(e):e(o)}return n}const Tr=()=>{},ut=Array.isArray,Ly=/\/$/,jy=e=>e.replace(Ly,"");function ks(e,t,n="/"){let r,o={},s="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),o=e(s)),a>-1&&(r=r||t.slice(0,a),i=t.slice(a,t.length)),r=Fy(r!=null?r:t,n),{fullPath:r+(s&&"?")+s+i,path:r,query:o,hash:i}}function My(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function yc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Uy(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Wn(t.matched[r],n.matched[o])&&zu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Wn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function zu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ny(e[n],t[n]))return!1;return!0}function Ny(e,t){return ut(e)?wc(e,t):ut(t)?wc(t,e):e===t}function wc(e,t){return ut(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Fy(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o=n.length-1,s,i;for(s=0;s<r.length;s++)if(i=r[s],i!==".")if(i==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Kr;(function(e){e.pop="pop",e.push="push"})(Kr||(Kr={}));var kr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(kr||(kr={}));function zy(e){if(!e)if(Pn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),jy(e)}const Dy=/^[^#]+#/;function Ky(e,t){return e.replace(Dy,"#")+t}function Wy(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const us=()=>({left:window.pageXOffset,top:window.pageYOffset});function Vy(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Wy(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function vc(e,t){return(history.state?history.state.position-t:-1)+e}const si=new Map;function qy(e,t){si.set(e,t)}function Gy(e){const t=si.get(e);return si.delete(e),t}let Zy=()=>location.protocol+"//"+location.host;function Du(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let a=o.includes(e.slice(s))?e.slice(s).length:1,c=o.slice(a);return c[0]!=="/"&&(c="/"+c),yc(c,"")}return yc(n,e)+r+o}function Yy(e,t,n,r){let o=[],s=[],i=null;const a=({state:d})=>{const g=Du(e,location),h=n.value,b=t.value;let w=0;if(d){if(n.value=g,t.value=d,i&&i===h){i=null;return}w=b?d.position-b.position:0}else r(g);o.forEach(y=>{y(n.value,h,{delta:w,type:Kr.pop,direction:w?w>0?kr.forward:kr.back:kr.unknown})})};function c(){i=n.value}function l(d){o.push(d);const g=()=>{const h=o.indexOf(d);h>-1&&o.splice(h,1)};return s.push(g),g}function u(){const{history:d}=window;!d.state||d.replaceState(he({},d.state,{scroll:us()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function xc(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?us():null}}function Xy(e){const{history:t,location:n}=window,r={value:Du(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Zy()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),o.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function i(c,l){const u=he({},t.state,xc(o.value.back,c,o.value.forward,!0),l,{position:o.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=he({},o.value,t.state,{forward:c,scroll:us()});s(u.current,u,!0);const f=he({},xc(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:o,push:a,replace:i}}function Qy(e){e=zy(e);const t=Xy(e),n=Yy(e,t.state,t.location,t.replace);function r(s,i=!0){i||n.pauseListeners(),history.go(s)}const o=he({location:"",base:e,go:r,createHref:Ky.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Jy(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Qy(e)}function e1(e){return typeof e=="string"||e&&typeof e=="object"}function Ku(e){return typeof e=="string"||typeof e=="symbol"}const Lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wu=Symbol("");var Ec;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ec||(Ec={}));function Vn(e,t){return he(new Error,{type:e,[Wu]:!0},t)}function _t(e,t){return e instanceof Error&&Wu in e&&(t==null||!!(e.type&t))}const _c="[^/]+?",t1={sensitive:!1,strict:!1,start:!0,end:!0},n1=/[.+*?^${}()[\]/\\]/g;function r1(e,t){const n=he({},t1,t),r=[];let o=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let f=0;f<l.length;f++){const d=l[f];let g=40+(n.sensitive?.25:0);if(d.type===0)f||(o+="/"),o+=d.value.replace(n1,"\\$&"),g+=40;else if(d.type===1){const{value:h,repeatable:b,optional:w,regexp:y}=d;s.push({name:h,repeatable:b,optional:w});const x=y||_c;if(x!==_c){g+=10;try{new RegExp(`(${x})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${h}" (${x}): `+v.message)}}let T=b?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(T=w&&l.length<2?`(?:/${T})`:"/"+T),w&&(T+="?"),o+=T,g+=20,w&&(g+=-8),b&&(g+=-20),x===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(l){const u=l.match(i),f={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",h=s[d-1];f[h.name]=g&&h.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:h,repeatable:b,optional:w}=g,y=h in l?l[h]:"";if(ut(y)&&!b)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const x=ut(y)?y.join("/"):y;if(!x)if(w)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${h}"`);u+=x}}return u||"/"}return{re:i,score:r,keys:s,parse:a,stringify:c}}function o1(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function s1(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=o1(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(Cc(r))return 1;if(Cc(o))return-1}return o.length-r.length}function Cc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const i1={type:0,value:""},a1=/[a-zA-Z0-9_]/;function c1(e){if(!e)return[[]];if(e==="/")return[[i1]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const o=[];let s;function i(){s&&o.push(s),s=[]}let a=0,c,l="",u="";function f(){!l||(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),i()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:a1.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),i(),o}function l1(e,t,n){const r=r1(c1(e.path),n),o=he(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function u1(e,t){const n=[],r=new Map;t=$c({strict:!1,end:!0,sensitive:!1},t);function o(u){return r.get(u)}function s(u,f,d){const g=!d,h=f1(u);h.aliasOf=d&&d.record;const b=$c(t,u),w=[h];if("alias"in u){const T=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of T)w.push(he({},h,{components:d?d.record.components:h.components,path:v,aliasOf:d?d.record:h}))}let y,x;for(const T of w){const{path:v}=T;if(f&&v[0]!=="/"){const A=f.record.path,N=A[A.length-1]==="/"?"":"/";T.path=f.record.path+(v&&N+v)}if(y=l1(T,f,b),d?d.alias.push(y):(x=x||y,x!==y&&x.alias.push(y),g&&u.name&&!Sc(y)&&i(u.name)),h.children){const A=h.children;for(let N=0;N<A.length;N++)s(A[N],y,d&&d.children[N])}d=d||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&c(y)}return x?()=>{i(x)}:Tr}function i(u){if(Ku(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(i),u.alias.forEach(i))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&s1(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Vu(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Sc(u)&&r.set(u.record.name,u)}function l(u,f){let d,g={},h,b;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Vn(1,{location:u});b=d.record.name,g=he(Ac(f.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Ac(u.params,d.keys.map(x=>x.name))),h=d.stringify(g)}else if("path"in u)h=u.path,d=n.find(x=>x.re.test(h)),d&&(g=d.parse(h),b=d.record.name);else{if(d=f.name?r.get(f.name):n.find(x=>x.re.test(f.path)),!d)throw Vn(1,{location:u,currentLocation:f});b=d.record.name,g=he({},f.params,u.params),h=d.stringify(g)}const w=[];let y=d;for(;y;)w.unshift(y.record),y=y.parent;return{name:b,path:h,params:g,matched:w,meta:h1(w)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:i,getRoutes:a,getRecordMatcher:o}}function Ac(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function f1(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:d1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function d1(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Sc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function h1(e){return e.reduce((t,n)=>he(t,n.meta),{})}function $c(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Vu(e,t){return t.children.some(n=>n===e||Vu(e,n))}const qu=/#/g,p1=/&/g,g1=/\//g,m1=/=/g,b1=/\?/g,Gu=/\+/g,y1=/%5B/g,w1=/%5D/g,Zu=/%5E/g,v1=/%60/g,Yu=/%7B/g,x1=/%7C/g,Xu=/%7D/g,E1=/%20/g;function Gi(e){return encodeURI(""+e).replace(x1,"|").replace(y1,"[").replace(w1,"]")}function _1(e){return Gi(e).replace(Yu,"{").replace(Xu,"}").replace(Zu,"^")}function ii(e){return Gi(e).replace(Gu,"%2B").replace(E1,"+").replace(qu,"%23").replace(p1,"%26").replace(v1,"`").replace(Yu,"{").replace(Xu,"}").replace(Zu,"^")}function C1(e){return ii(e).replace(m1,"%3D")}function A1(e){return Gi(e).replace(qu,"%23").replace(b1,"%3F")}function S1(e){return e==null?"":A1(e).replace(g1,"%2F")}function Po(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function $1(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace(Gu," "),i=s.indexOf("="),a=Po(i<0?s:s.slice(0,i)),c=i<0?null:Po(s.slice(i+1));if(a in t){let l=t[a];ut(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Tc(e){let t="";for(let n in e){const r=e[n];if(n=C1(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ut(r)?r.map(s=>s&&ii(s)):[r&&ii(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function T1(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ut(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const k1=Symbol(""),kc=Symbol(""),fs=Symbol(""),Zi=Symbol(""),ai=Symbol("");function mr(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Wt(e,t,n,r,o){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((i,a)=>{const c=f=>{f===!1?a(Vn(4,{from:n,to:t})):f instanceof Error?a(f):e1(f)?a(Vn(2,{from:t,to:f})):(s&&r.enterCallbacks[o]===s&&typeof f=="function"&&s.push(f),i())},l=e.call(r&&r.instances[o],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function Os(e,t,n,r){const o=[];for(const s of e)for(const i in s.components){let a=s.components[i];if(!(t!=="beforeRouteEnter"&&!s.instances[i]))if(O1(a)){const l=(a.__vccOpts||a)[t];l&&o.push(Wt(l,n,r,s,i))}else{let c=a();o.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));const u=By(l)?l.default:l;s.components[i]=u;const d=(u.__vccOpts||u)[t];return d&&Wt(d,n,r,s,i)()}))}}return o}function O1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Oc(e){const t=Se(fs),n=Se(Zi),r=ce(()=>t.resolve(Yt(e.to))),o=ce(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Wn.bind(null,u));if(d>-1)return d;const g=Ic(c[l-2]);return l>1&&Ic(u)===g&&f[f.length-1].path!==g?f.findIndex(Wn.bind(null,c[l-2])):d}),s=ce(()=>o.value>-1&&P1(n.params,r.value.params)),i=ce(()=>o.value>-1&&o.value===n.matched.length-1&&zu(n.params,r.value.params));function a(c={}){return R1(c)?t[Yt(e.replace)?"replace":"push"](Yt(e.to)).catch(Tr):Promise.resolve()}return{route:r,href:ce(()=>r.value.href),isActive:s,isExactActive:i,navigate:a}}const I1=Xe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Oc,setup(e,{slots:t}){const n=or(Oc(e)),{options:r}=Se(fs),o=ce(()=>({[Hc(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Hc(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:z("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),H1=I1;function R1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function P1(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!ut(o)||o.length!==r.length||r.some((s,i)=>s!==o[i]))return!1}return!0}function Ic(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Hc=(e,t,n)=>e!=null?e:t!=null?t:n,B1=Xe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Se(ai),o=ce(()=>e.route||r.value),s=Se(kc,0),i=ce(()=>{let l=Yt(s);const{matched:u}=o.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=ce(()=>o.value.matched[i.value]);vn(kc,ce(()=>i.value+1)),vn(k1,a),vn(ai,o);const c=tn();return Er(()=>[c.value,a.value,e.name],([l,u,f],[d,g,h])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Wn(u,g)||!d)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=o.value,u=e.name,f=a.value,d=f&&f.components[u];if(!d)return Rc(n.default,{Component:d,route:l});const g=f.props[u],h=g?g===!0?l.params:typeof g=="function"?g(l):g:null,w=z(d,he({},h,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Rc(n.default,{Component:w,route:l})||w}}});function Rc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const L1=B1;function j1(e){const t=u1(e.routes,e),n=e.parseQuery||$1,r=e.stringifyQuery||Tc,o=e.history,s=mr(),i=mr(),a=mr(),c=Kd(Lt);let l=Lt;Pn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ts.bind(null,S=>""+S),f=Ts.bind(null,S1),d=Ts.bind(null,Po);function g(S,U){let j,W;return Ku(S)?(j=t.getRecordMatcher(S),W=U):W=S,t.addRoute(W,j)}function h(S){const U=t.getRecordMatcher(S);U&&t.removeRoute(U)}function b(){return t.getRoutes().map(S=>S.record)}function w(S){return!!t.getRecordMatcher(S)}function y(S,U){if(U=he({},U||c.value),typeof S=="string"){const p=ks(n,S,U.path),m=t.resolve({path:p.path},U),E=o.createHref(p.fullPath);return he(p,m,{params:d(m.params),hash:Po(p.hash),redirectedFrom:void 0,href:E})}let j;if("path"in S)j=he({},S,{path:ks(n,S.path,U.path).path});else{const p=he({},S.params);for(const m in p)p[m]==null&&delete p[m];j=he({},S,{params:f(S.params)}),U.params=f(U.params)}const W=t.resolve(j,U),ae=S.hash||"";W.params=u(d(W.params));const _e=My(r,he({},S,{hash:_1(ae),path:W.path})),te=o.createHref(_e);return he({fullPath:_e,hash:ae,query:r===Tc?T1(S.query):S.query||{}},W,{redirectedFrom:void 0,href:te})}function x(S){return typeof S=="string"?ks(n,S,c.value.path):he({},S)}function T(S,U){if(l!==S)return Vn(8,{from:U,to:S})}function v(S){return K(S)}function A(S){return v(he(x(S),{replace:!0}))}function N(S){const U=S.matched[S.matched.length-1];if(U&&U.redirect){const{redirect:j}=U;let W=typeof j=="function"?j(S):j;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=x(W):{path:W},W.params={}),he({query:S.query,hash:S.hash,params:"path"in W?{}:S.params},W)}}function K(S,U){const j=l=y(S),W=c.value,ae=S.state,_e=S.force,te=S.replace===!0,p=N(j);if(p)return K(he(x(p),{state:typeof p=="object"?he({},ae,p.state):ae,force:_e,replace:te}),U||j);const m=j;m.redirectedFrom=U;let E;return!_e&&Uy(r,W,j)&&(E=Vn(16,{to:m,from:W}),on(W,W,!0,!1)),(E?Promise.resolve(E):F(m,W)).catch(C=>_t(C)?_t(C,2)?C:Ke(C):pe(C,m,W)).then(C=>{if(C){if(_t(C,2))return K(he({replace:te},x(C.to),{state:typeof C.to=="object"?he({},ae,C.to.state):ae,force:_e}),U||m)}else C=B(m,W,!0,te,ae);return k(m,W,C),C})}function I(S,U){const j=T(S,U);return j?Promise.reject(j):Promise.resolve()}function F(S,U){let j;const[W,ae,_e]=M1(S,U);j=Os(W.reverse(),"beforeRouteLeave",S,U);for(const p of W)p.leaveGuards.forEach(m=>{j.push(Wt(m,S,U))});const te=I.bind(null,S,U);return j.push(te),Hn(j).then(()=>{j=[];for(const p of s.list())j.push(Wt(p,S,U));return j.push(te),Hn(j)}).then(()=>{j=Os(ae,"beforeRouteUpdate",S,U);for(const p of ae)p.updateGuards.forEach(m=>{j.push(Wt(m,S,U))});return j.push(te),Hn(j)}).then(()=>{j=[];for(const p of S.matched)if(p.beforeEnter&&!U.matched.includes(p))if(ut(p.beforeEnter))for(const m of p.beforeEnter)j.push(Wt(m,S,U));else j.push(Wt(p.beforeEnter,S,U));return j.push(te),Hn(j)}).then(()=>(S.matched.forEach(p=>p.enterCallbacks={}),j=Os(_e,"beforeRouteEnter",S,U),j.push(te),Hn(j))).then(()=>{j=[];for(const p of i.list())j.push(Wt(p,S,U));return j.push(te),Hn(j)}).catch(p=>_t(p,8)?p:Promise.reject(p))}function k(S,U,j){for(const W of a.list())W(S,U,j)}function B(S,U,j,W,ae){const _e=T(S,U);if(_e)return _e;const te=U===Lt,p=Pn?history.state:{};j&&(W||te?o.replace(S.fullPath,he({scroll:te&&p&&p.scroll},ae)):o.push(S.fullPath,ae)),c.value=S,on(S,U,j,te),Ke()}let _;function Z(){_||(_=o.listen((S,U,j)=>{if(!eo.listening)return;const W=y(S),ae=N(W);if(ae){K(he(ae,{replace:!0}),W).catch(Tr);return}l=W;const _e=c.value;Pn&&qy(vc(_e.fullPath,j.delta),us()),F(W,_e).catch(te=>_t(te,12)?te:_t(te,2)?(K(te.to,W).then(p=>{_t(p,20)&&!j.delta&&j.type===Kr.pop&&o.go(-1,!1)}).catch(Tr),Promise.reject()):(j.delta&&o.go(-j.delta,!1),pe(te,W,_e))).then(te=>{te=te||B(W,_e,!1),te&&(j.delta&&!_t(te,8)?o.go(-j.delta,!1):j.type===Kr.pop&&_t(te,20)&&o.go(-1,!1)),k(W,_e,te)}).catch(Tr)}))}let ee=mr(),Ce=mr(),be;function pe(S,U,j){Ke(S);const W=Ce.list();return W.length?W.forEach(ae=>ae(S,U,j)):console.error(S),Promise.reject(S)}function de(){return be&&c.value!==Lt?Promise.resolve():new Promise((S,U)=>{ee.add([S,U])})}function Ke(S){return be||(be=!S,Z(),ee.list().forEach(([U,j])=>S?j(S):U()),ee.reset()),S}function on(S,U,j,W){const{scrollBehavior:ae}=e;if(!Pn||!ae)return Promise.resolve();const _e=!j&&Gy(vc(S.fullPath,0))||(W||!j)&&history.state&&history.state.scroll||null;return xl().then(()=>ae(S,U,_e)).then(te=>te&&Vy(te)).catch(te=>pe(te,S,U))}const ot=S=>o.go(S);let Ue;const On=new Set,eo={currentRoute:c,listening:!0,addRoute:g,removeRoute:h,hasRoute:w,getRoutes:b,resolve:y,options:e,push:v,replace:A,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:s.add,beforeResolve:i.add,afterEach:a.add,onError:Ce.add,isReady:de,install(S){const U=this;S.component("RouterLink",H1),S.component("RouterView",L1),S.config.globalProperties.$router=U,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(c)}),Pn&&!Ue&&c.value===Lt&&(Ue=!0,v(o.location).catch(ae=>{}));const j={};for(const ae in Lt)j[ae]=ce(()=>c.value[ae]);S.provide(fs,U),S.provide(Zi,or(j)),S.provide(ai,c);const W=S.unmount;On.add(S),S.unmount=function(){On.delete(S),On.size<1&&(l=Lt,_&&_(),_=null,c.value=Lt,Ue=!1,be=!1),W()}}};return eo}function Hn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function M1(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const a=t.matched[i];a&&(e.matched.find(l=>Wn(l,a))?r.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(l=>Wn(l,c))||o.push(c))}return[n,r,o]}function x2(){return Se(fs)}function E2(){return Se(Zi)}const U1={},N1=Object.freeze(Object.defineProperty({__proto__:null,default:U1},Symbol.toStringTag,{value:"Module"}));/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const se=BigInt(0),Ee=BigInt(1),Gt=BigInt(2),Or=BigInt(3),Pc=BigInt(8),me=Object.freeze({a:se,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:Ee,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),Bc=(e,t)=>(e+t/Gt)/t,uo={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(e){const{n:t}=me,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-Ee*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),s=n,i=BigInt("0x100000000000000000000000000000000"),a=Bc(s*e,t),c=Bc(-r*e,t);let l=L(e-a*n-c*o,t),u=L(-a*r-c*s,t);const f=l>i,d=u>i;if(f&&(l=t-l),d&&(u=t-u),l>i||u>i)throw new Error("splitScalarEndo: Endomorphism failed, k="+e);return{k1neg:f,k1:l,k2neg:d,k2:u}}},ct=32,qn=32,F1=32,Bo=ct+1,Lo=2*ct+1;function Lc(e){const{a:t,b:n}=me,r=L(e*e),o=L(r*e);return L(o+t*e+n)}const fo=me.a===se;class Yi extends Error{constructor(t){super(t)}}function jc(e){if(!(e instanceof fe))throw new TypeError("JacobianPoint expected")}class fe{constructor(t,n,r){this.x=t,this.y=n,this.z=r}static fromAffine(t){if(!(t instanceof ie))throw new TypeError("JacobianPoint#fromAffine: expected Point");return t.equals(ie.ZERO)?fe.ZERO:new fe(t.x,t.y,Ee)}static toAffineBatch(t){const n=V1(t.map(r=>r.z));return t.map((r,o)=>r.toAffine(n[o]))}static normalizeZ(t){return fe.toAffineBatch(t).map(fe.fromAffine)}equals(t){jc(t);const{x:n,y:r,z:o}=this,{x:s,y:i,z:a}=t,c=L(o*o),l=L(a*a),u=L(n*l),f=L(s*c),d=L(L(r*a)*l),g=L(L(i*o)*c);return u===f&&d===g}negate(){return new fe(this.x,L(-this.y),this.z)}double(){const{x:t,y:n,z:r}=this,o=L(t*t),s=L(n*n),i=L(s*s),a=t+s,c=L(Gt*(L(a*a)-o-i)),l=L(Or*o),u=L(l*l),f=L(u-Gt*c),d=L(l*(c-f)-Pc*i),g=L(Gt*n*r);return new fe(f,d,g)}add(t){jc(t);const{x:n,y:r,z:o}=this,{x:s,y:i,z:a}=t;if(s===se||i===se)return this;if(n===se||r===se)return t;const c=L(o*o),l=L(a*a),u=L(n*l),f=L(s*c),d=L(L(r*a)*l),g=L(L(i*o)*c),h=L(f-u),b=L(g-d);if(h===se)return b===se?this.double():fe.ZERO;const w=L(h*h),y=L(h*w),x=L(u*w),T=L(b*b-y-Gt*x),v=L(b*(x-T)-d*y),A=L(o*a*h);return new fe(T,v,A)}subtract(t){return this.add(t.negate())}multiplyUnsafe(t){const n=fe.ZERO;if(typeof t=="bigint"&&t===se)return n;let r=Nc(t);if(r===Ee)return this;if(!fo){let f=n,d=this;for(;r>se;)r&Ee&&(f=f.add(d)),d=d.double(),r>>=Ee;return f}let{k1neg:o,k1:s,k2neg:i,k2:a}=uo.splitScalar(r),c=n,l=n,u=this;for(;s>se||a>se;)s&Ee&&(c=c.add(u)),a&Ee&&(l=l.add(u)),u=u.double(),s>>=Ee,a>>=Ee;return o&&(c=c.negate()),i&&(l=l.negate()),l=new fe(L(l.x*uo.beta),l.y,l.z),c.add(l)}precomputeWindow(t){const n=fo?128/t+1:256/t+1,r=[];let o=this,s=o;for(let i=0;i<n;i++){s=o,r.push(s);for(let a=1;a<2**(t-1);a++)s=s.add(o),r.push(s);o=s.double()}return r}wNAF(t,n){!n&&this.equals(fe.BASE)&&(n=ie.BASE);const r=n&&n._WINDOW_SIZE||1;if(256%r)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let o=n&&ci.get(n);o||(o=this.precomputeWindow(r),n&&r!==1&&(o=fe.normalizeZ(o),ci.set(n,o)));let s=fe.ZERO,i=fe.BASE;const a=1+(fo?128/r:256/r),c=2**(r-1),l=BigInt(2**r-1),u=2**r,f=BigInt(r);for(let d=0;d<a;d++){const g=d*c;let h=Number(t&l);t>>=f,h>c&&(h-=u,t+=Ee);const b=g,w=g+Math.abs(h)-1,y=d%2!==0,x=h<0;h===0?i=i.add(ho(y,o[b])):s=s.add(ho(x,o[w]))}return{p:s,f:i}}multiply(t,n){let r=Nc(t),o,s;if(fo){const{k1neg:i,k1:a,k2neg:c,k2:l}=uo.splitScalar(r);let{p:u,f}=this.wNAF(a,n),{p:d,f:g}=this.wNAF(l,n);u=ho(i,u),d=ho(c,d),d=new fe(L(d.x*uo.beta),d.y,d.z),o=u.add(d),s=f.add(g)}else{const{p:i,f:a}=this.wNAF(r,n);o=i,s=a}return fe.normalizeZ([o,s])[0]}toAffine(t){const{x:n,y:r,z:o}=this,s=this.equals(fe.ZERO);t==null&&(t=s?Pc:fr(o));const i=t,a=L(i*i),c=L(a*i),l=L(n*a),u=L(r*c),f=L(o*i);if(s)return ie.ZERO;if(f!==Ee)throw new Error("invZ was invalid");return new ie(l,u)}}fe.BASE=new fe(me.Gx,me.Gy,Ee);fe.ZERO=new fe(se,Ee,se);function ho(e,t){const n=t.negate();return e?n:t}const ci=new WeakMap;class ie{constructor(t,n){this.x=t,this.y=n}_setWindowSize(t){this._WINDOW_SIZE=t,ci.delete(this)}hasEvenY(){return this.y%Gt===se}static fromCompressedHex(t){const n=t.length===32,r=Ze(n?t:t.subarray(1));if(!_o(r))throw new Error("Point is not on curve");const o=Lc(r);let s=W1(o);const i=(s&Ee)===Ee;n?i&&(s=L(-s)):(t[0]&1)===1!==i&&(s=L(-s));const a=new ie(r,s);return a.assertValidity(),a}static fromUncompressedHex(t){const n=Ze(t.subarray(1,ct+1)),r=Ze(t.subarray(ct+1,ct*2+1)),o=new ie(n,r);return o.assertValidity(),o}static fromHex(t){const n=vt(t),r=n.length,o=n[0];if(r===ct)return this.fromCompressedHex(n);if(r===Bo&&(o===2||o===3))return this.fromCompressedHex(n);if(r===Lo&&o===4)return this.fromUncompressedHex(n);throw new Error(`Point.fromHex: received invalid point. Expected 32-${Bo} compressed bytes or ${Lo} uncompressed bytes, not ${r}`)}static fromPrivateKey(t){return ie.BASE.multiply(Sn(t))}static fromSignature(t,n,r){const{r:o,s}=Qu(n);if(![0,1,2,3].includes(r))throw new Error("Cannot recover: invalid recovery bit");const i=Xi(vt(t)),{n:a}=me,c=r===2||r===3?o+a:o,l=fr(c,a),u=L(-i*l,a),f=L(s*l,a),d=r&1?"03":"02",g=ie.fromHex(d+Qt(c)),h=ie.BASE.multiplyAndAddUnsafe(g,u,f);if(!h)throw new Error("Cannot recover signature: point at infinify");return h.assertValidity(),h}toRawBytes(t=!1){return Jt(this.toHex(t))}toHex(t=!1){const n=Qt(this.x);return t?`${this.hasEvenY()?"02":"03"}${n}`:`04${n}${Qt(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const t="Point is not on elliptic curve",{x:n,y:r}=this;if(!_o(n)||!_o(r))throw new Error(t);const o=L(r*r),s=Lc(n);if(L(o-s)!==se)throw new Error(t)}equals(t){return this.x===t.x&&this.y===t.y}negate(){return new ie(this.x,L(-this.y))}double(){return fe.fromAffine(this).double().toAffine()}add(t){return fe.fromAffine(this).add(fe.fromAffine(t)).toAffine()}subtract(t){return this.add(t.negate())}multiply(t){return fe.fromAffine(this).multiply(t,this).toAffine()}multiplyAndAddUnsafe(t,n,r){const o=fe.fromAffine(this),s=n===se||n===Ee||this!==ie.BASE?o.multiplyUnsafe(n):o.multiply(n),i=fe.fromAffine(t).multiplyUnsafe(r),a=s.add(i);return a.equals(fe.ZERO)?void 0:a.toAffine()}}ie.BASE=new ie(me.Gx,me.Gy);ie.ZERO=new ie(se,se);function Mc(e){return Number.parseInt(e[0],16)>=8?"00"+e:e}function Uc(e){if(e.length<2||e[0]!==2)throw new Error(`Invalid signature integer tag: ${Gn(e)}`);const t=e[1],n=e.subarray(2,t+2);if(!t||n.length!==t)throw new Error("Invalid signature integer: wrong length");if(n[0]===0&&n[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:Ze(n),left:e.subarray(t+2)}}function z1(e){if(e.length<2||e[0]!=48)throw new Error(`Invalid signature tag: ${Gn(e)}`);if(e[1]!==e.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:n}=Uc(e.subarray(2)),{data:r,left:o}=Uc(n);if(o.length)throw new Error(`Invalid signature: left bytes after parsing: ${Gn(o)}`);return{r:t,s:r}}class $t{constructor(t,n){this.r=t,this.s=n,this.assertValidity()}static fromCompact(t){const n=t instanceof Uint8Array,r="Signature.fromCompact";if(typeof t!="string"&&!n)throw new TypeError(`${r}: Expected string or Uint8Array`);const o=n?Gn(t):t;if(o.length!==128)throw new Error(`${r}: Expected 64-byte hex`);return new $t(jo(o.slice(0,64)),jo(o.slice(64,128)))}static fromDER(t){const n=t instanceof Uint8Array;if(typeof t!="string"&&!n)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r,s:o}=z1(n?t:Jt(t));return new $t(r,o)}static fromHex(t){return this.fromDER(t)}assertValidity(){const{r:t,s:n}=this;if(!Yn(t))throw new Error("Invalid Signature: r must be 0 < r < n");if(!Yn(n))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const t=me.n>>Ee;return this.s>t}normalizeS(){return this.hasHighS()?new $t(this.r,L(-this.s,me.n)):this}toDERRawBytes(){return Jt(this.toDERHex())}toDERHex(){const t=Mc(br(this.s)),n=Mc(br(this.r)),r=t.length/2,o=n.length/2,s=br(r),i=br(o);return`30${br(o+r+4)}02${i}${n}02${s}${t}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return Jt(this.toCompactHex())}toCompactHex(){return Qt(this.r)+Qt(this.s)}}function qt(...e){if(!e.every(r=>r instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((r,o)=>r+o.length,0),n=new Uint8Array(t);for(let r=0,o=0;r<e.length;r++){const s=e[r];n.set(s,o),o+=s.length}return n}const D1=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Gn(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");let t="";for(let n=0;n<e.length;n++)t+=D1[e[n]];return t}const K1=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function Qt(e){if(typeof e!="bigint")throw new Error("Expected bigint");if(!(se<=e&&e<K1))throw new Error("Expected number 0 <= n < 2^256");return e.toString(16).padStart(64,"0")}function Zn(e){const t=Jt(Qt(e));if(t.length!==32)throw new Error("Error: expected 32 bytes");return t}function br(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function jo(e){if(typeof e!="string")throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt(`0x${e}`)}function Jt(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const r=n*2,o=e.slice(r,r+2),s=Number.parseInt(o,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");t[n]=s}return t}function Ze(e){return jo(Gn(e))}function vt(e){return e instanceof Uint8Array?Uint8Array.from(e):Jt(e)}function Nc(e){if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)return BigInt(e);if(typeof e=="bigint"&&Yn(e))return e;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function L(e,t=me.P){const n=e%t;return n>=se?n:t+n}function Je(e,t){const{P:n}=me;let r=e;for(;t-- >se;)r*=r,r%=n;return r}function W1(e){const{P:t}=me,n=BigInt(6),r=BigInt(11),o=BigInt(22),s=BigInt(23),i=BigInt(44),a=BigInt(88),c=e*e*e%t,l=c*c*e%t,u=Je(l,Or)*l%t,f=Je(u,Or)*l%t,d=Je(f,Gt)*c%t,g=Je(d,r)*d%t,h=Je(g,o)*g%t,b=Je(h,i)*h%t,w=Je(b,a)*b%t,y=Je(w,i)*h%t,x=Je(y,Or)*l%t,T=Je(x,s)*g%t,v=Je(T,n)*c%t,A=Je(v,Gt);if(A*A%t!==e)throw new Error("Cannot find square root");return A}function fr(e,t=me.P){if(e===se||t<=se)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=L(e,t),r=t,o=se,s=Ee;for(;n!==se;){const a=r/n,c=r%n,l=o-s*a;r=n,n=c,o=s,s=l}if(r!==Ee)throw new Error("invert: does not exist");return L(o,t)}function V1(e,t=me.P){const n=new Array(e.length),r=e.reduce((s,i,a)=>i===se?s:(n[a]=s,L(s*i,t)),Ee),o=fr(r,t);return e.reduceRight((s,i,a)=>i===se?s:(n[a]=L(s*n[a],t),L(s*i,t)),o),n}function q1(e){const t=e.length*8-qn*8,n=Ze(e);return t>0?n>>BigInt(t):n}function Xi(e,t=!1){const n=q1(e);if(t)return n;const{n:r}=me;return n>=r?n-r:n}let Nn,Ir;class G1{constructor(t,n){if(this.hashLen=t,this.qByteLen=n,typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof n!="number"||n<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(t).fill(1),this.k=new Uint8Array(t).fill(0),this.counter=0}hmac(...t){return re.hmacSha256(this.k,...t)}hmacSync(...t){return Ir(this.k,...t)}checkSync(){if(typeof Ir!="function")throw new Yi("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(t=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),t),this.v=await this.hmac(this.v),t.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),t),this.v=await this.hmac(this.v))}reseedSync(t=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),t),this.v=this.hmacSync(this.v),t.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),t),this.v=this.hmacSync(this.v))}async generate(){this.incr();let t=0;const n=[];for(;t<this.qByteLen;){this.v=await this.hmac(this.v);const r=this.v.slice();n.push(r),t+=this.v.length}return qt(...n)}generateSync(){this.checkSync(),this.incr();let t=0;const n=[];for(;t<this.qByteLen;){this.v=this.hmacSync(this.v);const r=this.v.slice();n.push(r),t+=this.v.length}return qt(...n)}}function Yn(e){return se<e&&e<me.n}function _o(e){return se<e&&e<me.P}function Z1(e,t,n,r=!0){const{n:o}=me,s=Xi(e,!0);if(!Yn(s))return;const i=fr(s,o),a=ie.BASE.multiply(s),c=L(a.x,o);if(c===se)return;const l=L(i*L(t+n*c,o),o);if(l===se)return;let u=new $t(c,l),f=(a.x===u.r?0:2)|Number(a.y&Ee);return r&&u.hasHighS()&&(u=u.normalizeS(),f^=1),{sig:u,recovery:f}}function Sn(e){let t;if(typeof e=="bigint")t=e;else if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)t=BigInt(e);else if(typeof e=="string"){if(e.length!==2*qn)throw new Error("Expected 32 bytes of private key");t=jo(e)}else if(e instanceof Uint8Array){if(e.length!==qn)throw new Error("Expected 32 bytes of private key");t=Ze(e)}else throw new TypeError("Expected valid private key");if(!Yn(t))throw new Error("Expected private key: 0 < key < n");return t}function Qi(e){return e instanceof ie?(e.assertValidity(),e):ie.fromHex(e)}function Qu(e){if(e instanceof $t)return e.assertValidity(),e;try{return $t.fromDER(e)}catch{return $t.fromCompact(e)}}function Y1(e,t=!1){return ie.fromPrivateKey(e).toRawBytes(t)}function Fc(e){const t=e instanceof Uint8Array,n=typeof e=="string",r=(t||n)&&e.length;return t?r===Bo||r===Lo:n?r===Bo*2||r===Lo*2:e instanceof ie}function Ju(e,t,n=!1){if(Fc(e))throw new TypeError("getSharedSecret: first arg must be private key");if(!Fc(t))throw new TypeError("getSharedSecret: second arg must be public key");const r=Qi(t);return r.assertValidity(),r.multiply(Sn(e)).toRawBytes(n)}function ef(e){const t=e.length>ct?e.slice(0,ct):e;return Ze(t)}function X1(e){const t=ef(e),n=L(t,me.n);return tf(n<se?t:n)}function tf(e){return Zn(e)}function Q1(e,t,n){if(e==null)throw new Error(`sign: expected valid message hash, not "${e}"`);const r=vt(e),o=Sn(t),s=[tf(o),X1(r)];if(n!=null){n===!0&&(n=re.randomBytes(ct));const c=vt(n);if(c.length!==ct)throw new Error(`sign: Expected ${ct} bytes of extra data`);s.push(c)}const i=qt(...s),a=ef(r);return{seed:i,m:a,d:o}}function J1(e,t){const{sig:n,recovery:r}=e,{der:o,recovered:s}=Object.assign({canonical:!0,der:!0},t),i=o?n.toDERRawBytes():n.toCompactRawBytes();return s?[i,r]:i}function ew(e,t,n={}){const{seed:r,m:o,d:s}=Q1(e,t,n.extraEntropy),i=new G1(F1,qn);i.reseedSync(r);let a;for(;!(a=Z1(i.generateSync(),o,s,n.canonical));)i.reseedSync();return J1(a,n)}const tw={strict:!0};function nw(e,t,n,r=tw){let o;try{o=Qu(e),t=vt(t)}catch{return!1}const{r:s,s:i}=o;if(r.strict&&o.hasHighS())return!1;const a=Xi(t);let c;try{c=Qi(n)}catch{return!1}const{n:l}=me,u=fr(i,l),f=L(a*u,l),d=L(s*u,l),g=ie.BASE.multiplyAndAddUnsafe(c,f,d);return g?L(g.x,l)===s:!1}function Mo(e){return L(Ze(e),me.n)}class Xn{constructor(t,n){this.r=t,this.s=n,this.assertValidity()}static fromHex(t){const n=vt(t);if(n.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${n.length}`);const r=Ze(n.subarray(0,32)),o=Ze(n.subarray(32,64));return new Xn(r,o)}assertValidity(){const{r:t,s:n}=this;if(!_o(t)||!Yn(n))throw new Error("Invalid signature")}toHex(){return Qt(this.r)+Qt(this.s)}toRawBytes(){return Jt(this.toHex())}}function rw(e){return ie.fromPrivateKey(e).toRawX()}class nf{constructor(t,n,r=re.randomBytes()){if(t==null)throw new TypeError(`sign: Expected valid message, not "${t}"`);this.m=vt(t);const{x:o,scalar:s}=this.getScalar(Sn(n));if(this.px=o,this.d=s,this.rand=vt(r),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(t){const n=ie.fromPrivateKey(t),r=n.hasEvenY()?t:me.n-t;return{point:n,scalar:r,x:n.toRawX()}}initNonce(t,n){return Zn(t^Ze(n))}finalizeNonce(t){const n=L(Ze(t),me.n);if(n===se)throw new Error("sign: Creation of signature failed. k is zero");const{point:r,x:o,scalar:s}=this.getScalar(n);return{R:r,rx:o,k:s}}finalizeSig(t,n,r,o){return new Xn(t.x,L(n+r*o,me.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:t,d:n,px:r,rand:o}=this,s=re.taggedHash,i=this.initNonce(n,await s(Vt.aux,o)),{R:a,rx:c,k:l}=this.finalizeNonce(await s(Vt.nonce,i,r,t)),u=Mo(await s(Vt.challenge,c,r,t)),f=this.finalizeSig(a,l,u,n);return await sf(f,t,r)||this.error(),f}calcSync(){const{m:t,d:n,px:r,rand:o}=this,s=re.taggedHashSync,i=this.initNonce(n,s(Vt.aux,o)),{R:a,rx:c,k:l}=this.finalizeNonce(s(Vt.nonce,i,r,t)),u=Mo(s(Vt.challenge,c,r,t)),f=this.finalizeSig(a,l,u,n);return af(f,t,r)||this.error(),f}}async function ow(e,t,n){return new nf(e,t,n).calc()}function sw(e,t,n){return new nf(e,t,n).calcSync()}function rf(e,t,n){const r=e instanceof Xn,o=r?e:Xn.fromHex(e);return r&&o.assertValidity(),{...o,m:vt(t),P:Qi(n)}}function of(e,t,n,r){const o=ie.BASE.multiplyAndAddUnsafe(t,Sn(n),L(-r,me.n));return!(!o||!o.hasEvenY()||o.x!==e)}async function sf(e,t,n){try{const{r,s:o,m:s,P:i}=rf(e,t,n),a=Mo(await re.taggedHash(Vt.challenge,Zn(r),i.toRawX(),s));return of(r,i,o,a)}catch{return!1}}function af(e,t,n){try{const{r,s:o,m:s,P:i}=rf(e,t,n),a=Mo(re.taggedHashSync(Vt.challenge,Zn(r),i.toRawX(),s));return of(r,i,o,a)}catch(r){if(r instanceof Yi)throw r;return!1}}const Zr={Signature:Xn,getPublicKey:rw,sign:ow,verify:sf,signSync:sw,verifySync:af};ie.BASE._setWindowSize(8);const Ve={node:N1,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},Vt={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},po={},re={bytesToHex:Gn,hexToBytes:Jt,concatBytes:qt,mod:L,invert:fr,isValidPrivateKey(e){try{return Sn(e),!0}catch{return!1}},_bigintTo32Bytes:Zn,_normalizePrivateKey:Sn,hashToPrivateKey:e=>{e=vt(e);const t=qn+8;if(e.length<t||e.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const n=L(Ze(e),me.n-Ee)+Ee;return Zn(n)},randomBytes:(e=32)=>{if(Ve.web)return Ve.web.getRandomValues(new Uint8Array(e));if(Ve.node){const{randomBytes:t}=Ve.node;return Uint8Array.from(t(e))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>re.hashToPrivateKey(re.randomBytes(qn+8)),precompute(e=8,t=ie.BASE){const n=t===ie.BASE?t:new ie(t.x,t.y);return n._setWindowSize(e),n.multiply(Or),n},sha256:async(...e)=>{if(Ve.web){const t=await Ve.web.subtle.digest("SHA-256",qt(...e));return new Uint8Array(t)}else if(Ve.node){const{createHash:t}=Ve.node,n=t("sha256");return e.forEach(r=>n.update(r)),Uint8Array.from(n.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(e,...t)=>{if(Ve.web){const n=await Ve.web.subtle.importKey("raw",e,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),r=qt(...t),o=await Ve.web.subtle.sign("HMAC",n,r);return new Uint8Array(o)}else if(Ve.node){const{createHmac:n}=Ve.node,r=n("sha256",e);return t.forEach(o=>r.update(o)),Uint8Array.from(r.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(e,...t)=>{let n=po[e];if(n===void 0){const r=await re.sha256(Uint8Array.from(e,o=>o.charCodeAt(0)));n=qt(r,r),po[e]=n}return re.sha256(n,...t)},taggedHashSync:(e,...t)=>{if(typeof Nn!="function")throw new Yi("sha256Sync is undefined, you need to set it");let n=po[e];if(n===void 0){const r=Nn(Uint8Array.from(e,o=>o.charCodeAt(0)));n=qt(r,r),po[e]=n}return Nn(n,...t)},_JacobianPoint:fe};Object.defineProperties(re,{sha256Sync:{configurable:!1,get(){return Nn},set(e){Nn||(Nn=e)}},hmacSha256Sync:{configurable:!1,get(){return Ir},set(e){Ir||(Ir=e)}}});const zc={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0};/*! noble-hashes - MIT License (c) 2021 Paul Miller (paulmillr.com) */const Is=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),gt=(e,t)=>e<<32-t|e>>>t,iw=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!iw)throw new Error("Non little-endian hardware is not supported");Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));(()=>{const e=typeof module<"u"&&typeof module.require=="function"&&module.require.bind(module);try{if(e){const{setImmediate:t}=e("timers");return()=>new Promise(n=>t(n))}}catch{}return()=>new Promise(t=>setTimeout(t,0))})();function aw(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function Ji(e){if(typeof e=="string"&&(e=aw(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function Dc(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function cw(e){if(typeof e!="function"||typeof e.init!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Dc(e.outputLen),Dc(e.blockLen)}class li{clone(){return this._cloneInto()}}function lw(e){const t=r=>e().update(Ji(r)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t.init=t.create,t}function uw(e=32){if(zc.web)return zc.web.getRandomValues(new Uint8Array(e));throw new Error("The environment doesn't have randomBytes function")}function fw(e,t,n,r){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,r);const o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),a=Number(n&s),c=r?4:0,l=r?0:4;e.setUint32(t+c,i,r),e.setUint32(t+l,a,r)}class dw extends li{constructor(t,n,r,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=Is(this.buffer)}update(t){if(this.destroyed)throw new Error("instance is destroyed");const{view:n,buffer:r,blockLen:o,finished:s}=this;if(s)throw new Error("digest() was already called");t=Ji(t);const i=t.length;for(let a=0;a<i;){const c=Math.min(o-this.pos,i-a);if(c===o){const l=Is(t);for(;o<=i-a;a+=o)this.process(l,a);continue}r.set(t.subarray(a,a+c),this.pos),this.pos+=c,a+=c,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){if(this.destroyed)throw new Error("instance is destroyed");if(!(t instanceof Uint8Array)||t.length<this.outputLen)throw new Error("_Sha2: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0;const{buffer:n,view:r,blockLen:o,isLE:s}=this;let{pos:i}=this;n[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>o-i&&(this.process(r,0),i=0);for(let c=i;c<o;c++)n[c]=0;fw(r,o-8,BigInt(this.length*8),s),this.process(r,0);const a=Is(t);this.get().forEach((c,l)=>a.setUint32(4*l,c,s))}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const r=t.slice(0,n);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:r,length:o,finished:s,destroyed:i,pos:a}=this;return t.length=o,t.pos=a,t.finished=s,t.destroyed=i,o%n&&t.buffer.set(r),t}}const hw=(e,t,n)=>e&t^~e&n,pw=(e,t,n)=>e&t^e&n^t&n,gw=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),jt=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Mt=new Uint32Array(64);class mw extends dw{constructor(){super(64,32,8,!1),this.A=jt[0]|0,this.B=jt[1]|0,this.C=jt[2]|0,this.D=jt[3]|0,this.E=jt[4]|0,this.F=jt[5]|0,this.G=jt[6]|0,this.H=jt[7]|0}get(){const{A:t,B:n,C:r,D:o,E:s,F:i,G:a,H:c}=this;return[t,n,r,o,s,i,a,c]}set(t,n,r,o,s,i,a,c){this.A=t|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=s|0,this.F=i|0,this.G=a|0,this.H=c|0}process(t,n){for(let f=0;f<16;f++,n+=4)Mt[f]=t.getUint32(n,!1);for(let f=16;f<64;f++){const d=Mt[f-15],g=Mt[f-2],h=gt(d,7)^gt(d,18)^d>>>3,b=gt(g,17)^gt(g,19)^g>>>10;Mt[f]=b+Mt[f-7]+h+Mt[f-16]|0}let{A:r,B:o,C:s,D:i,E:a,F:c,G:l,H:u}=this;for(let f=0;f<64;f++){const d=gt(a,6)^gt(a,11)^gt(a,25),g=u+d+hw(a,c,l)+gw[f]+Mt[f]|0,b=(gt(r,2)^gt(r,13)^gt(r,22))+pw(r,o,s)|0;u=l,l=c,c=a,a=i+g|0,i=s,s=o,o=r,r=g+b|0}r=r+this.A|0,o=o+this.B|0,s=s+this.C|0,i=i+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(r,o,s,i,a,c,l,u)}roundClean(){Mt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const Yr=lw(()=>new mw);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function rn(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function ft(...e){const t=(o,s)=>i=>o(s(i)),n=Array.from(e).reverse().reduce((o,s)=>o?t(o,s.encode):s.encode,void 0),r=e.reduce((o,s)=>o?t(o,s.decode):s.decode,void 0);return{encode:n,decode:r}}function xt(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(rn(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const r=e.indexOf(n);if(r===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return r})}}}function Et(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function Xr(e,t="="){if(rn(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let r of n)if(typeof r!="string")throw new Error(`padding.encode: non-string input=${r}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let r=n.length;if(r*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;r>0&&n[r-1]===t;r--)if(!((r-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,r)}}}function cf(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Kc(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let r=0;const o=[],s=Array.from(e);for(s.forEach(i=>{if(rn(i),i<0||i>=t)throw new Error(`Wrong integer: ${i}`)});;){let i=0,a=!0;for(let c=r;c<s.length;c++){const l=s[c],u=t*i+l;if(!Number.isSafeInteger(u)||t*i/t!==i||u-l!==t*i)throw new Error("convertRadix: carry overflow");if(i=u%n,s[c]=Math.floor(u/n),!Number.isSafeInteger(s[c])||s[c]*n+i!==u)throw new Error("convertRadix: carry overflow");if(a)s[c]?a=!1:r=c;else continue}if(o.push(i),a)break}for(let i=0;i<e.length-1&&e[i]===0;i++)o.push(0);return o.reverse()}const lf=(e,t)=>t?lf(t,e%t):e,Uo=(e,t)=>e+(t-lf(e,t));function ui(e,t,n,r){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Uo(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${Uo(t,n)}`);let o=0,s=0;const i=2**n-1,a=[];for(const c of e){if(rn(c),c>=2**t)throw new Error(`convertRadix2: invalid data word=${c} from=${t}`);if(o=o<<t|c,s+t>32)throw new Error(`convertRadix2: carry overflow pos=${s} from=${t}`);for(s+=t;s>=n;s-=n)a.push((o>>s-n&i)>>>0);o&=2**s-1}if(o=o<<n-s&i,!r&&s>=t)throw new Error("Excess padding");if(!r&&o)throw new Error(`Non-zero padding: ${o}`);return r&&s>0&&a.push(o>>>0),a}function uf(e){return rn(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Kc(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Kc(t,e,2**8))}}}function Ht(e,t=!1){if(rn(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Uo(8,e)>32||Uo(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return ui(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(ui(n,e,8,t))}}}function Wc(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function ff(e,t){if(rn(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const r=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(r,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const r=n.slice(0,-e),o=t(r).slice(0,e),s=n.slice(-e);for(let i=0;i<e;i++)if(o[i]!==s[i])throw new Error("Invalid checksum");return r}}}const bw={alphabet:xt,chain:ft,checksum:ff,radix:uf,radix2:Ht,join:Et,padding:Xr},df=ft(Ht(4),xt("0123456789ABCDEF"),Et("")),hf=ft(Ht(5),xt("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),Xr(5),Et("")),yw=ft(Ht(5),xt("0123456789ABCDEFGHIJKLMNOPQRSTUV"),Xr(5),Et("")),ww=ft(Ht(5),xt("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Et(""),cf(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Qn=ft(Ht(6),xt("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),Xr(6),Et("")),pf=ft(Ht(6),xt("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),Xr(6),Et("")),ea=e=>ft(uf(58),xt(e),Et("")),Wr=ea("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),vw=ea("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),xw=ea("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Vc=[0,2,3,5,6,7,9,10,11],gf={encode(e){let t="";for(let n=0;n<e.length;n+=8){const r=e.subarray(n,n+8);t+=Wr.encode(r).padStart(Vc[r.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const r=e.slice(n,n+11),o=Vc.indexOf(r.length),s=Wr.decode(r);for(let i=0;i<s.length-o;i++)if(s[i]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(s.slice(s.length-o)))}return Uint8Array.from(t)}},mf=e=>ft(ff(4,t=>e(e(t))),Wr),fi=ft(xt("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Et("")),qc=[996825010,642813549,513874426,1027748829,705979059];function yr(e){const t=e>>25;let n=(e&33554431)<<5;for(let r=0;r<qc.length;r++)(t>>r&1)===1&&(n^=qc[r]);return n}function Gc(e,t,n=1){const r=e.length;let o=1;for(let s=0;s<r;s++){const i=e.charCodeAt(s);if(i<33||i>126)throw new Error(`Invalid prefix (${e})`);o=yr(o)^i>>5}o=yr(o);for(let s=0;s<r;s++)o=yr(o)^e.charCodeAt(s)&31;for(let s of t)o=yr(o)^s;for(let s=0;s<6;s++)o=yr(o);return o^=n,fi.encode(ui([o%2**30],30,5,!1))}function bf(e){const t=e==="bech32"?1:734539939,n=Ht(5),r=n.decode,o=n.encode,s=Wc(r);function i(u,f,d=90){if(typeof u!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof u}`);if(!Array.isArray(f)||f.length&&typeof f[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof f}`);const g=u.length+7+f.length;if(d!==!1&&g>d)throw new TypeError(`Length ${g} exceeds limit ${d}`);return u=u.toLowerCase(),`${u}1${fi.encode(f)}${Gc(u,f,t)}`}function a(u,f=90){if(typeof u!="string")throw new Error(`bech32.decode input should be string, not ${typeof u}`);if(u.length<8||f!==!1&&u.length>f)throw new TypeError(`Wrong string length: ${u.length} (${u}). Expected (8..${f})`);const d=u.toLowerCase();if(u!==d&&u!==u.toUpperCase())throw new Error("String must be lowercase or uppercase");u=d;const g=u.lastIndexOf("1");if(g===0||g===-1)throw new Error('Letter "1" must be present between prefix and data only');const h=u.slice(0,g),b=u.slice(g+1);if(b.length<6)throw new Error("Data must be at least 6 characters long");const w=fi.decode(b).slice(0,-6),y=Gc(h,w,t);if(!b.endsWith(y))throw new Error(`Invalid checksum in ${u}: expected "${y}"`);return{prefix:h,words:w}}const c=Wc(a);function l(u){const{prefix:f,words:d}=a(u,!1);return{prefix:f,words:d,bytes:r(d)}}return{encode:i,decode:a,decodeToBytes:l,decodeUnsafe:c,fromWords:r,fromWordsUnsafe:s,toWords:o}}const kt=bf("bech32"),Ew=bf("bech32m"),yf={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},wf=ft(Ht(4),xt("0123456789abcdef"),Et(""),cf(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),Vr={utf8:yf,hex:wf,base16:df,base32:hf,base64:Qn,base64url:pf,base58:Wr,base58xmr:gf},vf=`Invalid encoding type. Available types: ${Object.keys(Vr).join(", ")}`,xf=(e,t)=>{if(typeof e!="string"||!Vr.hasOwnProperty(e))throw new TypeError(vf);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return Vr[e].encode(t)},_w=xf,Ef=(e,t)=>{if(!Vr.hasOwnProperty(e))throw new TypeError(vf);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return Vr[e].decode(t)},Cw=Ef,Aw=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:rn,utils:bw,base16:df,base32:hf,base32hex:yw,base32crockford:ww,base64:Qn,base64url:pf,base58:Wr,base58flickr:vw,base58xrp:xw,base58xmr:gf,base58check:mf,bech32:kt,bech32m:Ew,utf8:yf,hex:wf,bytesToString:xf,str:_w,stringToBytes:Ef,bytes:Cw},Symbol.toStringTag,{value:"Module"}));var ta={};Object.defineProperty(ta,"__esModule",{value:!0});var na=ta.wordlist=void 0;na=ta.wordlist=`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`);var Ge={},Te={};Object.defineProperty(Te,"__esModule",{value:!0});Te.output=Te.exists=Te.hash=Bn=Te.bytes=Te.bool=Te.number=void 0;function No(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}Te.number=No;function _f(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}Te.bool=_f;function ra(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var Bn=Te.bytes=ra;function Cf(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");No(e.outputLen),No(e.blockLen)}Te.hash=Cf;function Af(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}Te.exists=Af;function Sf(e,t){ra(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}Te.output=Sf;const Sw={number:No,bool:_f,bytes:ra,hash:Cf,exists:Af,output:Sf};Te.default=Sw;var Jn={},$f={},Ie={},ds={};Object.defineProperty(ds,"__esModule",{value:!0});ds.crypto=void 0;ds.crypto={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0};(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=ds,n=v=>new Uint8Array(v.buffer,v.byteOffset,v.byteLength);e.u8=n;const r=v=>new Uint32Array(v.buffer,v.byteOffset,Math.floor(v.byteLength/4));e.u32=r;const o=v=>new DataView(v.buffer,v.byteOffset,v.byteLength);e.createView=o;const s=(v,A)=>v<<32-A|v>>>A;if(e.rotr=s,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const i=Array.from({length:256},(v,A)=>A.toString(16).padStart(2,"0"));function a(v){if(!(v instanceof Uint8Array))throw new Error("Uint8Array expected");let A="";for(let N=0;N<v.length;N++)A+=i[v[N]];return A}e.bytesToHex=a;function c(v){if(typeof v!="string")throw new TypeError("hexToBytes: expected string, got "+typeof v);if(v.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const A=new Uint8Array(v.length/2);for(let N=0;N<A.length;N++){const K=N*2,I=v.slice(K,K+2),F=Number.parseInt(I,16);if(Number.isNaN(F)||F<0)throw new Error("Invalid byte sequence");A[N]=F}return A}e.hexToBytes=c;const l=async()=>{};e.nextTick=l;async function u(v,A,N){let K=Date.now();for(let I=0;I<v;I++){N(I);const F=Date.now()-K;F>=0&&F<A||(await(0,e.nextTick)(),K+=F)}}e.asyncLoop=u;function f(v){if(typeof v!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof v}`);return new TextEncoder().encode(v)}e.utf8ToBytes=f;function d(v){if(typeof v=="string"&&(v=f(v)),!(v instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof v})`);return v}e.toBytes=d;function g(...v){if(!v.every(K=>K instanceof Uint8Array))throw new Error("Uint8Array list expected");if(v.length===1)return v[0];const A=v.reduce((K,I)=>K+I.length,0),N=new Uint8Array(A);for(let K=0,I=0;K<v.length;K++){const F=v[K];N.set(F,I),I+=F.length}return N}e.concatBytes=g;class h{clone(){return this._cloneInto()}}e.Hash=h;const b=v=>Object.prototype.toString.call(v)==="[object Object]"&&v.constructor===Object;function w(v,A){if(A!==void 0&&(typeof A!="object"||!b(A)))throw new TypeError("Options should be object or undefined");return Object.assign(v,A)}e.checkOpts=w;function y(v){const A=K=>v().update(d(K)).digest(),N=v();return A.outputLen=N.outputLen,A.blockLen=N.blockLen,A.create=()=>v(),A}e.wrapConstructor=y;function x(v){const A=(K,I)=>v(I).update(d(K)).digest(),N=v({});return A.outputLen=N.outputLen,A.blockLen=N.blockLen,A.create=K=>v(K),A}e.wrapConstructorWithOpts=x;function T(v=32){if(t.crypto.web)return t.crypto.web.getRandomValues(new Uint8Array(v));if(t.crypto.node)return new Uint8Array(t.crypto.node.randomBytes(v).buffer);throw new Error("The environment doesn't have randomBytes function")}e.randomBytes=T})(Ie);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=Te,n=Ie;class r extends n.Hash{constructor(i,a){super(),this.finished=!1,this.destroyed=!1,t.default.hash(i);const c=(0,n.toBytes)(a);if(this.iHash=i.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const l=this.blockLen,u=new Uint8Array(l);u.set(c.length>l?i.create().update(c).digest():c);for(let f=0;f<u.length;f++)u[f]^=54;this.iHash.update(u),this.oHash=i.create();for(let f=0;f<u.length;f++)u[f]^=106;this.oHash.update(u),u.fill(0)}update(i){return t.default.exists(this),this.iHash.update(i),this}digestInto(i){t.default.exists(this),t.default.bytes(i,this.outputLen),this.finished=!0,this.iHash.digestInto(i),this.oHash.update(i),this.oHash.digestInto(i),this.destroy()}digest(){const i=new Uint8Array(this.oHash.outputLen);return this.digestInto(i),i}_cloneInto(i){i||(i=Object.create(Object.getPrototypeOf(this),{}));const{oHash:a,iHash:c,finished:l,destroyed:u,blockLen:f,outputLen:d}=this;return i=i,i.finished=l,i.destroyed=u,i.blockLen=f,i.outputLen=d,i.oHash=a._cloneInto(i.oHash),i.iHash=c._cloneInto(i.iHash),i}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(s,i,a)=>new r(s,i).update(a).digest();e.hmac=o,e.hmac.create=(s,i)=>new r(s,i)})($f);Object.defineProperty(Jn,"__esModule",{value:!0});Jn.pbkdf2Async=Jn.pbkdf2=void 0;const go=Te,$w=$f,Fn=Ie;function Tf(e,t,n,r){go.default.hash(e);const o=(0,Fn.checkOpts)({dkLen:32,asyncTick:10},r),{c:s,dkLen:i,asyncTick:a}=o;if(go.default.number(s),go.default.number(i),go.default.number(a),s<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const c=(0,Fn.toBytes)(t),l=(0,Fn.toBytes)(n),u=new Uint8Array(i),f=$w.hmac.create(e,c),d=f._cloneInto().update(l);return{c:s,dkLen:i,asyncTick:a,DK:u,PRF:f,PRFSalt:d}}function kf(e,t,n,r,o){return e.destroy(),t.destroy(),r&&r.destroy(),o.fill(0),n}function Tw(e,t,n,r){const{c:o,dkLen:s,DK:i,PRF:a,PRFSalt:c}=Tf(e,t,n,r);let l;const u=new Uint8Array(4),f=(0,Fn.createView)(u),d=new Uint8Array(a.outputLen);for(let g=1,h=0;h<s;g++,h+=a.outputLen){const b=i.subarray(h,h+a.outputLen);f.setInt32(0,g,!1),(l=c._cloneInto(l)).update(u).digestInto(d),b.set(d.subarray(0,b.length));for(let w=1;w<o;w++){a._cloneInto(l).update(d).digestInto(d);for(let y=0;y<b.length;y++)b[y]^=d[y]}}return kf(a,c,i,l,d)}Jn.pbkdf2=Tw;async function kw(e,t,n,r){const{c:o,dkLen:s,asyncTick:i,DK:a,PRF:c,PRFSalt:l}=Tf(e,t,n,r);let u;const f=new Uint8Array(4),d=(0,Fn.createView)(f),g=new Uint8Array(c.outputLen);for(let h=1,b=0;b<s;h++,b+=c.outputLen){const w=a.subarray(b,b+c.outputLen);d.setInt32(0,h,!1),(u=l._cloneInto(u)).update(f).digestInto(g),w.set(g.subarray(0,w.length)),await(0,Fn.asyncLoop)(o-1,i,y=>{c._cloneInto(u).update(g).digestInto(g);for(let x=0;x<w.length;x++)w[x]^=g[x]})}return kf(c,l,a,u,g)}Jn.pbkdf2Async=kw;var er={},Qr={};Object.defineProperty(Qr,"__esModule",{value:!0});Qr.SHA2=void 0;const Hs=Te,wr=Ie;function Ow(e,t,n,r){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,r);const o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),a=Number(n&s),c=r?4:0,l=r?0:4;e.setUint32(t+c,i,r),e.setUint32(t+l,a,r)}class Iw extends wr.Hash{constructor(t,n,r,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,wr.createView)(this.buffer)}update(t){Hs.default.exists(this);const{view:n,buffer:r,blockLen:o}=this;t=(0,wr.toBytes)(t);const s=t.length;for(let i=0;i<s;){const a=Math.min(o-this.pos,s-i);if(a===o){const c=(0,wr.createView)(t);for(;o<=s-i;i+=o)this.process(c,i);continue}r.set(t.subarray(i,i+a),this.pos),this.pos+=a,i+=a,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Hs.default.exists(this),Hs.default.output(t,this),this.finished=!0;const{buffer:n,view:r,blockLen:o,isLE:s}=this;let{pos:i}=this;n[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>o-i&&(this.process(r,0),i=0);for(let f=i;f<o;f++)n[f]=0;Ow(r,o-8,BigInt(this.length*8),s),this.process(r,0);const a=(0,wr.createView)(t),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let f=0;f<l;f++)a.setUint32(4*f,u[f],s)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const r=t.slice(0,n);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:r,length:o,finished:s,destroyed:i,pos:a}=this;return t.length=o,t.pos=a,t.finished=s,t.destroyed=i,o%n&&t.buffer.set(r),t}}Qr.SHA2=Iw;Object.defineProperty(er,"__esModule",{value:!0});er.sha224=hs=er.sha256=void 0;const Hw=Qr,et=Ie,Rw=(e,t,n)=>e&t^~e&n,Pw=(e,t,n)=>e&t^e&n^t&n,Bw=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Ut=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Nt=new Uint32Array(64);class Of extends Hw.SHA2{constructor(){super(64,32,8,!1),this.A=Ut[0]|0,this.B=Ut[1]|0,this.C=Ut[2]|0,this.D=Ut[3]|0,this.E=Ut[4]|0,this.F=Ut[5]|0,this.G=Ut[6]|0,this.H=Ut[7]|0}get(){const{A:t,B:n,C:r,D:o,E:s,F:i,G:a,H:c}=this;return[t,n,r,o,s,i,a,c]}set(t,n,r,o,s,i,a,c){this.A=t|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=s|0,this.F=i|0,this.G=a|0,this.H=c|0}process(t,n){for(let f=0;f<16;f++,n+=4)Nt[f]=t.getUint32(n,!1);for(let f=16;f<64;f++){const d=Nt[f-15],g=Nt[f-2],h=(0,et.rotr)(d,7)^(0,et.rotr)(d,18)^d>>>3,b=(0,et.rotr)(g,17)^(0,et.rotr)(g,19)^g>>>10;Nt[f]=b+Nt[f-7]+h+Nt[f-16]|0}let{A:r,B:o,C:s,D:i,E:a,F:c,G:l,H:u}=this;for(let f=0;f<64;f++){const d=(0,et.rotr)(a,6)^(0,et.rotr)(a,11)^(0,et.rotr)(a,25),g=u+d+Rw(a,c,l)+Bw[f]+Nt[f]|0,b=((0,et.rotr)(r,2)^(0,et.rotr)(r,13)^(0,et.rotr)(r,22))+Pw(r,o,s)|0;u=l,l=c,c=a,a=i+g|0,i=s,s=o,o=r,r=g+b|0}r=r+this.A|0,o=o+this.B|0,s=s+this.C|0,i=i+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(r,o,s,i,a,c,l,u)}roundClean(){Nt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class Lw extends Of{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}var hs=er.sha256=(0,et.wrapConstructor)(()=>new Of);er.sha224=(0,et.wrapConstructor)(()=>new Lw);var tt={},If={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function r(k,B=!1){return B?{h:Number(k&t),l:Number(k>>n&t)}:{h:Number(k>>n&t)|0,l:Number(k&t)|0}}e.fromBig=r;function o(k,B=!1){let _=new Uint32Array(k.length),Z=new Uint32Array(k.length);for(let ee=0;ee<k.length;ee++){const{h:Ce,l:be}=r(k[ee],B);[_[ee],Z[ee]]=[Ce,be]}return[_,Z]}e.split=o;const s=(k,B)=>BigInt(k>>>0)<<n|BigInt(B>>>0);e.toBig=s;const i=(k,B,_)=>k>>>_,a=(k,B,_)=>k<<32-_|B>>>_,c=(k,B,_)=>k>>>_|B<<32-_,l=(k,B,_)=>k<<32-_|B>>>_,u=(k,B,_)=>k<<64-_|B>>>_-32,f=(k,B,_)=>k>>>_-32|B<<64-_,d=(k,B)=>B,g=(k,B)=>k,h=(k,B,_)=>k<<_|B>>>32-_,b=(k,B,_)=>B<<_|k>>>32-_,w=(k,B,_)=>B<<_-32|k>>>64-_,y=(k,B,_)=>k<<_-32|B>>>64-_;function x(k,B,_,Z){const ee=(B>>>0)+(Z>>>0);return{h:k+_+(ee/2**32|0)|0,l:ee|0}}e.add=x;const T=(k,B,_)=>(k>>>0)+(B>>>0)+(_>>>0),v=(k,B,_,Z)=>B+_+Z+(k/2**32|0)|0,A=(k,B,_,Z)=>(k>>>0)+(B>>>0)+(_>>>0)+(Z>>>0),N=(k,B,_,Z,ee)=>B+_+Z+ee+(k/2**32|0)|0,K=(k,B,_,Z,ee)=>(k>>>0)+(B>>>0)+(_>>>0)+(Z>>>0)+(ee>>>0),I=(k,B,_,Z,ee,Ce)=>B+_+Z+ee+Ce+(k/2**32|0)|0,F={fromBig:r,split:o,toBig:e.toBig,shrSH:i,shrSL:a,rotrSH:c,rotrSL:l,rotrBH:u,rotrBL:f,rotr32H:d,rotr32L:g,rotlSH:h,rotlSL:b,rotlBH:w,rotlBL:y,add:x,add3L:T,add3H:v,add4L:A,add4H:N,add5H:I,add5L:K};e.default=F})(If);Object.defineProperty(tt,"__esModule",{value:!0});tt.sha384=tt.sha512_256=tt.sha512_224=di=tt.sha512=tt.SHA512=void 0;const jw=Qr,J=If,ps=Ie,[Mw,Uw]=J.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),Ft=new Uint32Array(80),zt=new Uint32Array(80);class Jr extends jw.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:r,Bl:o,Ch:s,Cl:i,Dh:a,Dl:c,Eh:l,El:u,Fh:f,Fl:d,Gh:g,Gl:h,Hh:b,Hl:w}=this;return[t,n,r,o,s,i,a,c,l,u,f,d,g,h,b,w]}set(t,n,r,o,s,i,a,c,l,u,f,d,g,h,b,w){this.Ah=t|0,this.Al=n|0,this.Bh=r|0,this.Bl=o|0,this.Ch=s|0,this.Cl=i|0,this.Dh=a|0,this.Dl=c|0,this.Eh=l|0,this.El=u|0,this.Fh=f|0,this.Fl=d|0,this.Gh=g|0,this.Gl=h|0,this.Hh=b|0,this.Hl=w|0}process(t,n){for(let T=0;T<16;T++,n+=4)Ft[T]=t.getUint32(n),zt[T]=t.getUint32(n+=4);for(let T=16;T<80;T++){const v=Ft[T-15]|0,A=zt[T-15]|0,N=J.default.rotrSH(v,A,1)^J.default.rotrSH(v,A,8)^J.default.shrSH(v,A,7),K=J.default.rotrSL(v,A,1)^J.default.rotrSL(v,A,8)^J.default.shrSL(v,A,7),I=Ft[T-2]|0,F=zt[T-2]|0,k=J.default.rotrSH(I,F,19)^J.default.rotrBH(I,F,61)^J.default.shrSH(I,F,6),B=J.default.rotrSL(I,F,19)^J.default.rotrBL(I,F,61)^J.default.shrSL(I,F,6),_=J.default.add4L(K,B,zt[T-7],zt[T-16]),Z=J.default.add4H(_,N,k,Ft[T-7],Ft[T-16]);Ft[T]=Z|0,zt[T]=_|0}let{Ah:r,Al:o,Bh:s,Bl:i,Ch:a,Cl:c,Dh:l,Dl:u,Eh:f,El:d,Fh:g,Fl:h,Gh:b,Gl:w,Hh:y,Hl:x}=this;for(let T=0;T<80;T++){const v=J.default.rotrSH(f,d,14)^J.default.rotrSH(f,d,18)^J.default.rotrBH(f,d,41),A=J.default.rotrSL(f,d,14)^J.default.rotrSL(f,d,18)^J.default.rotrBL(f,d,41),N=f&g^~f&b,K=d&h^~d&w,I=J.default.add5L(x,A,K,Uw[T],zt[T]),F=J.default.add5H(I,y,v,N,Mw[T],Ft[T]),k=I|0,B=J.default.rotrSH(r,o,28)^J.default.rotrBH(r,o,34)^J.default.rotrBH(r,o,39),_=J.default.rotrSL(r,o,28)^J.default.rotrBL(r,o,34)^J.default.rotrBL(r,o,39),Z=r&s^r&a^s&a,ee=o&i^o&c^i&c;y=b|0,x=w|0,b=g|0,w=h|0,g=f|0,h=d|0,{h:f,l:d}=J.default.add(l|0,u|0,F|0,k|0),l=a|0,u=c|0,a=s|0,c=i|0,s=r|0,i=o|0;const Ce=J.default.add3L(k,_,ee);r=J.default.add3H(Ce,F,B,Z),o=Ce|0}({h:r,l:o}=J.default.add(this.Ah|0,this.Al|0,r|0,o|0)),{h:s,l:i}=J.default.add(this.Bh|0,this.Bl|0,s|0,i|0),{h:a,l:c}=J.default.add(this.Ch|0,this.Cl|0,a|0,c|0),{h:l,l:u}=J.default.add(this.Dh|0,this.Dl|0,l|0,u|0),{h:f,l:d}=J.default.add(this.Eh|0,this.El|0,f|0,d|0),{h:g,l:h}=J.default.add(this.Fh|0,this.Fl|0,g|0,h|0),{h:b,l:w}=J.default.add(this.Gh|0,this.Gl|0,b|0,w|0),{h:y,l:x}=J.default.add(this.Hh|0,this.Hl|0,y|0,x|0),this.set(r,o,s,i,a,c,l,u,f,d,g,h,b,w,y,x)}roundClean(){Ft.fill(0),zt.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}tt.SHA512=Jr;class Nw extends Jr{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class Fw extends Jr{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class zw extends Jr{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var di=tt.sha512=(0,ps.wrapConstructor)(()=>new Jr);tt.sha512_224=(0,ps.wrapConstructor)(()=>new Nw);tt.sha512_256=(0,ps.wrapConstructor)(()=>new Fw);tt.sha384=(0,ps.wrapConstructor)(()=>new zw);const Dw=my(Aw);Object.defineProperty(Ge,"__esModule",{value:!0});var Hf=Ge.mnemonicToSeedSync=Ge.mnemonicToSeed=zf=Ge.validateMnemonic=Ge.entropyToMnemonic=Ge.mnemonicToEntropy=Mf=Ge.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const Rf=Te,Pf=Jn,Kw=er,Bf=tt,Ww=Ie,mo=Dw,Vw=e=>e[0]==="\u3042\u3044\u3053\u304F\u3057\u3093";function Lf(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function oa(e){const t=Lf(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function jf(e){Rf.default.bytes(e,16,20,24,28,32)}function qw(e,t=128){if(Rf.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return Ff((0,Ww.randomBytes)(t/8),e)}var Mf=Ge.generateMnemonic=qw;const Gw=e=>{const t=8-e.length/4;return new Uint8Array([(0,Kw.sha256)(e)[0]>>t<<t])};function Uf(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),mo.utils.chain(mo.utils.checksum(1,Gw),mo.utils.radix2(11,!0),mo.utils.alphabet(e))}function Nf(e,t){const{words:n}=oa(e),r=Uf(t).decode(n);return jf(r),r}Ge.mnemonicToEntropy=Nf;function Ff(e,t){return jf(e),Uf(t).encode(e).join(Vw(t)?"\u3000":" ")}Ge.entropyToMnemonic=Ff;function Zw(e,t){try{Nf(e,t)}catch{return!1}return!0}var zf=Ge.validateMnemonic=Zw;const Df=e=>Lf(`mnemonic${e}`);function Yw(e,t=""){return(0,Pf.pbkdf2Async)(Bf.sha512,oa(e).nfkd,Df(t),{c:2048,dkLen:64})}Ge.mnemonicToSeed=Yw;function Xw(e,t=""){return(0,Pf.pbkdf2)(Bf.sha512,oa(e).nfkd,Df(t),{c:2048,dkLen:64})}Hf=Ge.mnemonicToSeedSync=Xw;function hi(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function Qw(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function Kf(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function Jw(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");hi(e.outputLen),hi(e.blockLen)}function ev(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function tv(e,t){Kf(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const yn={number:hi,bool:Qw,bytes:Kf,hash:Jw,exists:ev,output:tv};/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Rs=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),nv=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!nv)throw new Error("Non little-endian hardware is not supported");Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function rv(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function sa(e){if(typeof e=="string"&&(e=rv(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}class Wf{clone(){return this._cloneInto()}}function ov(e){const t=r=>e().update(sa(r)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}class Vf extends Wf{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,yn.hash(t);const r=sa(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,s=new Uint8Array(o);s.set(r.length>o?t.create().update(r).digest():r);for(let i=0;i<s.length;i++)s[i]^=54;this.iHash.update(s),this.oHash=t.create();for(let i=0;i<s.length;i++)s[i]^=106;this.oHash.update(s),s.fill(0)}update(t){return yn.exists(this),this.iHash.update(t),this}digestInto(t){yn.exists(this),yn.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:o,destroyed:s,blockLen:i,outputLen:a}=this;return t=t,t.finished=o,t.destroyed=s,t.blockLen=i,t.outputLen=a,t.oHash=n._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Fo=(e,t,n)=>new Vf(e,t).update(n).digest();Fo.create=(e,t)=>new Vf(e,t);function sv(e,t,n,r){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,r);const o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),a=Number(n&s),c=r?4:0,l=r?0:4;e.setUint32(t+c,i,r),e.setUint32(t+l,a,r)}class iv extends Wf{constructor(t,n,r,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=Rs(this.buffer)}update(t){yn.exists(this);const{view:n,buffer:r,blockLen:o}=this;t=sa(t);const s=t.length;for(let i=0;i<s;){const a=Math.min(o-this.pos,s-i);if(a===o){const c=Rs(t);for(;o<=s-i;i+=o)this.process(c,i);continue}r.set(t.subarray(i,i+a),this.pos),this.pos+=a,i+=a,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){yn.exists(this),yn.output(t,this),this.finished=!0;const{buffer:n,view:r,blockLen:o,isLE:s}=this;let{pos:i}=this;n[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>o-i&&(this.process(r,0),i=0);for(let f=i;f<o;f++)n[f]=0;sv(r,o-8,BigInt(this.length*8),s),this.process(r,0);const a=Rs(t),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let f=0;f<l;f++)a.setUint32(4*f,u[f],s)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const r=t.slice(0,n);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:r,length:o,finished:s,destroyed:i,pos:a}=this;return t.length=o,t.pos=a,t.finished=s,t.destroyed=i,o%n&&t.buffer.set(r),t}}const av=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),qf=Uint8Array.from({length:16},(e,t)=>t),cv=qf.map(e=>(9*e+5)%16);let ia=[qf],aa=[cv];for(let e=0;e<4;e++)for(let t of[ia,aa])t.push(t[e].map(n=>av[n]));const Gf=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),lv=ia.map((e,t)=>e.map(n=>Gf[t][n])),uv=aa.map((e,t)=>e.map(n=>Gf[t][n])),fv=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),dv=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),bo=(e,t)=>e<<t|e>>>32-t;function Zc(e,t,n,r){return e===0?t^n^r:e===1?t&n|~t&r:e===2?(t|~n)^r:e===3?t&r|n&~r:t^(n|~r)}const yo=new Uint32Array(16);class hv extends iv{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:r,h3:o,h4:s}=this;return[t,n,r,o,s]}set(t,n,r,o,s){this.h0=t|0,this.h1=n|0,this.h2=r|0,this.h3=o|0,this.h4=s|0}process(t,n){for(let g=0;g<16;g++,n+=4)yo[g]=t.getUint32(n,!0);let r=this.h0|0,o=r,s=this.h1|0,i=s,a=this.h2|0,c=a,l=this.h3|0,u=l,f=this.h4|0,d=f;for(let g=0;g<5;g++){const h=4-g,b=fv[g],w=dv[g],y=ia[g],x=aa[g],T=lv[g],v=uv[g];for(let A=0;A<16;A++){const N=bo(r+Zc(g,s,a,l)+yo[y[A]]+b,T[A])+f|0;r=f,f=l,l=bo(a,10)|0,a=s,s=N}for(let A=0;A<16;A++){const N=bo(o+Zc(h,i,c,u)+yo[x[A]]+w,v[A])+d|0;o=d,d=u,u=bo(c,10)|0,c=i,i=N}}this.set(this.h1+a+u|0,this.h2+l+d|0,this.h3+f+o|0,this.h4+r+i|0,this.h0+s+c|0)}roundClean(){yo.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const pv=ov(()=>new hv);re.hmacSha256Sync=(e,...t)=>Fo(hs,e,re.concatBytes(...t));const Ps=mf(hs);function Yc(e){return BigInt(`0x${Ie.bytesToHex(e)}`)}function gv(e){return Ie.hexToBytes(e.toString(16).padStart(64,"0"))}const mv=Ie.utf8ToBytes("Bitcoin seed"),Bs={private:76066276,public:76067358},Ls=2147483648,bv=e=>pv(hs(e)),yv=e=>Ie.createView(e).getUint32(0,!1),wo=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return Ie.createView(t).setUint32(0,e,!1),t};class hn{constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||Bs,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!re.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:Yc(t.privateKey),this.privKeyBytes=gv(this.privKey),this.pubKey=Y1(t.privateKey,!0)}else if(t.publicKey)this.pubKey=ie.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=bv(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return yv(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return Ps.encode(this.serialize(this.versions.private,Ie.concatBytes(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Ps.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=Bs){if(Bn(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const r=Fo(di,mv,t);return new hn({versions:n,chainCode:r.slice(32),privateKey:r.slice(0,32)})}static fromExtendedKey(t,n=Bs){const r=Ps.decode(t),o=Ie.createView(r),s=o.getUint32(0,!1),i={versions:n,depth:r[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:r.slice(13,45)},a=r.slice(45),c=a[0]===0;if(s!==n[c?"private":"public"])throw new Error("Version mismatch");return c?new hn({...i,privateKey:a.slice(1)}):new hn({...i,publicKey:a})}static fromJSON(t){return hn.fromExtendedKey(t.xpriv)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let r=this;for(const o of n){const s=/^(\d+)('?)$/.exec(o);if(!s||s.length!==3)throw new Error(`Invalid child index: ${o}`);let i=+s[1];if(!Number.isSafeInteger(i)||i>=Ls)throw new Error("Invalid index");s[2]==="'"&&(i+=Ls),r=r.deriveChild(i)}return r}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=wo(t);if(t>=Ls){const a=this.privateKey;if(!a)throw new Error("Could not derive hardened child key");n=Ie.concatBytes(new Uint8Array([0]),a,n)}else n=Ie.concatBytes(this.pubKey,n);const r=Fo(di,this.chainCode,n),o=Yc(r.slice(0,32)),s=r.slice(32);if(!re.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const i={versions:this.versions,chainCode:s,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const a=re.mod(this.privKey+o,me.n);if(!re.isValidPrivateKey(a))throw new Error("The tweak was out of range or the resulted private key is invalid");i.privateKey=a}else{const a=ie.fromHex(this.pubKey).add(ie.fromPrivateKey(o));if(a.equals(ie.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");i.publicKey=a.toRawBytes(!0)}return new hn(i)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Bn(t,32),ew(t,this.privKey,{canonical:!0,der:!1})}verify(t,n){if(Bn(t,32),Bn(n,64),!this.publicKey)throw new Error("No publicKey set!");let r;try{r=$t.fromCompact(n)}catch{return!1}return nw(r,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Bn(n,33),Ie.concatBytes(wo(t),new Uint8Array([this.depth]),wo(this.parentFingerprint),wo(this.index),this.chainCode,n)}}class Zf extends li{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,cw(t);const r=Ji(n);if(this.iHash=t.create(),!(this.iHash instanceof li))throw new TypeError("Expected instance of class which extends utils.Hash");const o=this.blockLen=this.iHash.blockLen;this.outputLen=this.iHash.outputLen;const s=new Uint8Array(o);s.set(r.length>this.iHash.blockLen?t.create().update(r).digest():r);for(let i=0;i<s.length;i++)s[i]^=54;this.iHash.update(s),this.oHash=t.create();for(let i=0;i<s.length;i++)s[i]^=106;this.oHash.update(s),s.fill(0)}update(t){if(this.destroyed)throw new Error("instance is destroyed");return this.iHash.update(t),this}digestInto(t){if(this.destroyed)throw new Error("instance is destroyed");if(!(t instanceof Uint8Array)||t.length!==this.outputLen)throw new Error("HMAC: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:o,destroyed:s,blockLen:i,outputLen:a}=this;return t=t,t.finished=o,t.destroyed=s,t.blockLen=i,t.outputLen=a,t.oHash=n._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const zo=(e,t,n)=>new Zf(e,t).update(n).digest();zo.create=(e,t)=>new Zf(e,t);zo.init=zo.create;var wv=Object.defineProperty,Tn=(e,t)=>{for(var n in t)wv(e,n,{get:t[n],enumerable:!0})};function vv(){return re.bytesToHex(re.randomPrivateKey())}function xv(e){return re.bytesToHex(Zr.getPublicKey(e))}var Ev={};Tn(Ev,{insertEventIntoAscendingList:()=>Av,insertEventIntoDescendingList:()=>Cv,normalizeURL:()=>_v,utf8Decoder:()=>Do,utf8Encoder:()=>kn});var Do=new TextDecoder("utf-8"),kn=new TextEncoder;function _v(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function Cv(e,t){var i;let n=0,r=e.length-1,o,s=n;if(r<0)s=0;else if(t.created_at<e[r].created_at)s=r+1;else if(t.created_at>=e[n].created_at)s=n;else for(;;){if(r<=n+1){s=r;break}if(o=Math.floor(n+(r-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)r=o;else{s=o;break}}return((i=e[s])==null?void 0:i.id)!==t.id?[...e.slice(0,s),t,...e.slice(s)]:e}function Av(e,t){var i;let n=0,r=e.length-1,o,s=n;if(r<0)s=0;else if(t.created_at>e[r].created_at)s=r+1;else if(t.created_at<=e[n].created_at)s=n;else for(;;){if(r<=n+1){s=r;break}if(o=Math.floor(n+(r-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)r=o;else{s=o;break}}return((i=e[s])==null?void 0:i.id)!==t.id?[...e.slice(0,s),t,...e.slice(s)]:e}function Sv(e){if(!Xf(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function Yf(e){let t=Yr(kn.encode(Sv(e)));return re.bytesToHex(t)}function Xf(e){if(typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let r=0;r<n.length;r++)if(typeof n[r]=="object")return!1}return!0}function $v(e){return Zr.verifySync(e.sig,Yf(e),e.pubkey)}function _2(e,t){return re.bytesToHex(Zr.signSync(Yf(e),t))}function Tv(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1)return!1;for(let n in e)if(n[0]==="#"){let r=n.slice(1),o=e[`#${r}`];if(o&&!t.tags.find(([s,i])=>s===n.slice(1)&&o.indexOf(i)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function kv(e,t){for(let n=0;n<e.length;n++)if(Tv(e[n],t))return!0;return!1}var Ov={};Tn(Ov,{getHex64:()=>gs,getInt:()=>Qf,getSubscriptionId:()=>Jf,matchEventId:()=>Iv,matchEventKind:()=>Rv,matchEventPubkey:()=>Hv});function gs(e,t){let n=t.length+3,r=e.indexOf(`"${t}":`)+n,o=e.slice(r).indexOf('"')+r+1;return e.slice(o,o+64)}function Qf(e,t){let n=t.length,r=e.indexOf(`"${t}":`)+n+3,o=e.slice(r),s=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,s),10)}function Jf(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let r=t+7+1+n,o=e.slice(r+1,80).indexOf('"');if(o===-1)return null;let s=r+1+o;return e.slice(r+1,s)}function Iv(e,t){return t===gs(e,"id")}function Hv(e,t){return t===gs(e,"pubkey")}function Rv(e,t){return t===Qf(e,"kind")}function C2(e){var t,n,r,o=new Promise(g=>{r=g}),s={},i={connect:[],disconnect:[],error:[],notice:[]},a={},c={};async function l(){return new Promise((g,h)=>{t=new WebSocket(e),t.onopen=()=>{i.connect.forEach(x=>x()),r(),g()},t.onerror=()=>{i.error.forEach(x=>x()),h()},t.onclose=async()=>{i.disconnect.forEach(x=>x()),n&&n()};let b=[],w;t.onmessage=x=>{b.push(x.data),w||(w=setInterval(y,0))};function y(){var v,A,N,K;if(b.length===0){clearInterval(w),w=null;return}var x=b.shift();if(!x)return;let T=Jf(x);if(T){let I=s[T];if(I&&I.alreadyHaveEvent&&I.alreadyHaveEvent(gs(x,"id"),e))return}try{let I=JSON.parse(x);switch(I[0]){case"EVENT":let F=I[1],k=I[2];Xf(k)&&s[F]&&(s[F].skipVerification||$v(k))&&kv(s[F].filters,k)&&(s[F],(((v=a[F])==null?void 0:v.event)||[]).forEach(_=>_(k)));return;case"EOSE":{let _=I[1];(((A=a[_])==null?void 0:A.eose)||[]).forEach(Z=>Z());return}case"OK":{let _=I[1],Z=I[2],ee=I[3]||"";Z?(N=c[_])==null||N.ok.forEach(Ce=>Ce()):(K=c[_])==null||K.failed.forEach(Ce=>Ce(ee));return}case"NOTICE":let B=I[1];i.notice.forEach(_=>_(B));return}}catch{return}}})}async function u(){(t==null?void 0:t.readyState)&&t.readyState===1||await l()}async function f(g){let h=JSON.stringify(g);await o;try{t.send(h)}catch(b){console.log(b)}}const d=(g,{skipVerification:h=!1,alreadyHaveEvent:b=null,id:w=Math.random().toString().slice(2)}={})=>{let y=w;return s[y]={id:y,filters:g,skipVerification:h,alreadyHaveEvent:b},f(["REQ",y,...g]),{sub:(x,T={})=>d(x||g,{skipVerification:T.skipVerification||h,alreadyHaveEvent:T.alreadyHaveEvent||b,id:y}),unsub:()=>{delete s[y],delete a[y],f(["CLOSE",y])},on:(x,T)=>{a[y]=a[y]||{event:[],eose:[]},a[y][x].push(T)},off:(x,T)=>{let v=a[y],A=v[x].indexOf(T);A>=0&&v[x].splice(A,1)}}};return{url:e,sub:d,on:(g,h)=>{i[g].push(h),g==="connect"&&(t==null?void 0:t.readyState)===1&&h()},off:(g,h)=>{let b=i[g].indexOf(h);b!==-1&&i[g].splice(b,1)},list:(g,h)=>new Promise(b=>{let w=d(g,h),y=[],x=setTimeout(()=>{w.unsub(),b(y)},1500);w.on("eose",()=>{w.unsub(),clearTimeout(x),b(y)}),w.on("event",T=>{y.push(T)})}),get:(g,h)=>new Promise(b=>{let w=d([g],h),y=setTimeout(()=>{w.unsub(),b(null)},1500);w.on("event",x=>{w.unsub(),clearTimeout(y),b(x)})}),publish(g){if(!g.id)throw new Error(`event ${g} has no id`);let h=g.id;var b=!1,w=!1;f(["EVENT",g]).then(()=>{b=!0,w&&(y(),w=!1)}).catch(()=>{});const y=()=>{let x=d([{ids:[h]}],{id:`monitor-${h.slice(0,5)}`}),T=setTimeout(()=>{var v;(((v=c[h])==null?void 0:v.failed)||[]).forEach(A=>A("event not seen after 5 seconds")),x.unsub()},5e3);x.on("event",()=>{var v;clearTimeout(T),(((v=c[h])==null?void 0:v.seen)||[]).forEach(A=>A())})};return{on:(x,T)=>{c[h]=c[h]||{ok:[],seen:[],failed:[]},c[h][x].push(T),x==="seen"&&(b?y():w=!0)},off:(x,T)=>{let v=c[h];if(!v)return;let A=v[x].indexOf(T);A>=0&&v[x].splice(A,1)}}},connect:u,close(){return t.readyState>1?Promise.resolve():(t.close(),new Promise(g=>{n=g}))},get status(){var g;return(g=t==null?void 0:t.readyState)!=null?g:3}}}var Pv={};Tn(Pv,{decrypt:()=>Lv,encrypt:()=>Bv});async function Bv(e,t,n){const r=Ju(e,"02"+t),o=ed(r);let s=Uint8Array.from(uw(16)),i=kn.encode(n),a=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),c=await crypto.subtle.encrypt({name:"AES-CBC",iv:s},a,i),l=Qn.encode(new Uint8Array(c)),u=Qn.encode(new Uint8Array(s.buffer));return`${l}?iv=${u}`}async function Lv(e,t,n){let[r,o]=n.split("?iv="),s=Ju(e,"02"+t),i=ed(s),a=await crypto.subtle.importKey("raw",i,{name:"AES-CBC"},!1,["decrypt"]),c=Qn.decode(r),l=Qn.decode(o),u=await crypto.subtle.decrypt({name:"AES-CBC",iv:l},a,c);return Do.decode(u)}function ed(e){return e.slice(1,33)}var jv={};Tn(jv,{queryProfile:()=>Nv,searchDomain:()=>Uv,useFetchImplementation:()=>Mv});var ms;try{ms=fetch}catch{}function Mv(e){ms=e}async function Uv(e,t=""){try{return(await(await ms(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function Nv(e){var i,a;let[t,n]=e.split("@");if(n||(n=t,t="_"),!t.match(/^[A-Za-z0-9-_]+$/))return null;let r=await(await ms(`https://${n}/.well-known/nostr.json?name=${t}`)).json();if(!((i=r==null?void 0:r.names)!=null&&i[t]))return null;let o=r.names[t],s=((a=r.relays)==null?void 0:a[o])||[];return{pubkey:o,relays:s}}var Fv={};Tn(Fv,{generateSeedWords:()=>Dv,privateKeyFromSeedWords:()=>zv,validateWords:()=>Kv});function zv(e,t){let r=hn.fromMasterSeed(Hf(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!r)throw new Error("could not derive private key");return re.bytesToHex(r)}function Dv(){return Mf(na)}function Kv(e){return zf(e,na)}var Wv={};Tn(Wv,{decode:()=>Vv,neventEncode:()=>Xv,noteEncode:()=>Zv,nprofileEncode:()=>Yv,npubEncode:()=>Gv,nsecEncode:()=>qv});var bs=5e3;function Vv(e){var o,s;let{prefix:t,words:n}=kt.decode(e,bs),r=new Uint8Array(kt.fromWords(n));if(t==="nprofile"){let i=Xc(r);if(!((o=i[0])!=null&&o[0]))throw new Error("missing TLV 0 for nprofile");if(i[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:re.bytesToHex(i[0][0]),relays:i[1].map(a=>Do.decode(a))}}}if(t==="nevent"){let i=Xc(r);if(!((s=i[0])!=null&&s[0]))throw new Error("missing TLV 0 for nevent");if(i[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nevent",data:{id:re.bytesToHex(i[0][0]),relays:i[1].map(a=>Do.decode(a))}}}if(t==="nsec"||t==="npub"||t==="note")return{type:t,data:re.bytesToHex(r)};throw new Error(`unknown prefix ${t}`)}function Xc(e){let t={},n=e;for(;n.length>0;){let r=n[0],o=n[1],s=n.slice(2,2+o);n=n.slice(2+o),!(s.length<o)&&(t[r]=t[r]||[],t[r].push(s))}return t}function qv(e){return ca("nsec",e)}function Gv(e){return ca("npub",e)}function Zv(e){return ca("note",e)}function ca(e,t){let n=re.hexToBytes(t),r=kt.toWords(n);return kt.encode(e,r,bs)}function Yv(e){let t=td({0:[re.hexToBytes(e.pubkey)],1:(e.relays||[]).map(r=>kn.encode(r))}),n=kt.toWords(t);return kt.encode("nprofile",n,bs)}function Xv(e){let t=td({0:[re.hexToBytes(e.id)],1:(e.relays||[]).map(r=>kn.encode(r))}),n=kt.toWords(t);return kt.encode("nevent",n,bs)}function td(e){let t=[];return Object.entries(e).forEach(([n,r])=>{r.forEach(o=>{let s=new Uint8Array(o.length+2);s.set([parseInt(n)],0),s.set([o.length],1),s.set(o,2),t.push(s)})}),re.concatBytes(...t)}var Qv={};Tn(Qv,{createDelegation:()=>Jv,getDelegator:()=>e2});function Jv(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let r=n.join("&");if(r==="")throw new Error("refusing to create a delegation without any conditions");let o=Yr(kn.encode(`nostr:delegation:${t.pubkey}:${r}`)),s=re.bytesToHex(Zr.signSync(o,e));return{from:xv(e),to:t.pubkey,cond:r,sig:s}}function e2(e){let t=e.tags.find(a=>a[0]==="delegation"&&a.length>=4);if(!t)return null;let n=t[1],r=t[2],o=t[3],s=r.split("&");for(let a=0;a<s.length;a++){let[c,l,u]=s[a].split(/\b/);if(!(c==="kind"&&l==="="&&e.kind===parseInt(u))){if(c==="created_at"&&l==="<"&&e.created_at<parseInt(u))continue;if(c==="created_at"&&l===">"&&e.created_at>parseInt(u))continue;return null}}let i=Yr(kn.encode(`nostr:delegation:${e.pubkey}:${r}`));return Zr.verifySync(o,i,n)?n:null}re.hmacSha256Sync=(e,...t)=>zo(Yr,e,re.concatBytes(...t));re.sha256Sync=(...e)=>Yr(re.concatBytes(...e));const la="prikey";function t2(){return vv()}function n2(e){localStorage.setItem(la,e)}function A2(){const e=t2();return n2(e),e}function S2(){window.localStorage[la]="",location.reload()}const nd=j1({history:Jy(),routes:[{path:"/login",name:"login",component:()=>Bt(()=>import("./LoginView.9161054a.js"),["assets/LoginView.9161054a.js","assets/use-message.c63a8014.js","assets/Space.2195441c.js","assets/Input.e0ed6f0a.js","assets/use-locale.2946792e.js","assets/Tabs.1b7861ae.js","assets/user.90341f0d.js","assets/utils.460e4338.js","assets/naiveUi.dcbfc488.js","assets/RelayConfig.vue_vue_type_script_setup_true_lang.9a27fe2b.js","assets/Ellipsis.vue_vue_type_script_setup_true_lang.703f832c.js","assets/Card.dace5702.js"])},{path:"/",redirect:"/home",component:()=>Bt(()=>import("./LayoutView.ef293a53.js"),["assets/LayoutView.ef293a53.js","assets/naiveUi.dcbfc488.js","assets/utils.460e4338.js","assets/use-message.c63a8014.js","assets/Space.2195441c.js","assets/use-locale.2946792e.js","assets/Dropdown.74c73407.js","assets/fade-in-scale-up.cssr.618796f7.js"]),children:[{path:"/home",component:()=>Bt(()=>import("./HomeView.88e20fa4.js"),["assets/HomeView.88e20fa4.js","assets/PostList.vue_vue_type_script_setup_true_lang.5f374a06.js","assets/PostList.b97ebd1b.css","assets/user.90341f0d.js","assets/utils.460e4338.js","assets/Space.2195441c.js","assets/fade-in-scale-up.cssr.618796f7.js","assets/use-locale.2946792e.js","assets/Card.dace5702.js","assets/Tabs.1b7861ae.js"])},{path:"/relays",component:()=>Bt(()=>import("./RelaysView.5d64e9e8.js"),["assets/RelaysView.5d64e9e8.js","assets/RelayConfig.vue_vue_type_script_setup_true_lang.9a27fe2b.js","assets/user.90341f0d.js","assets/utils.460e4338.js","assets/use-message.c63a8014.js","assets/Space.2195441c.js","assets/Ellipsis.vue_vue_type_script_setup_true_lang.703f832c.js","assets/Card.dace5702.js"])},{path:"/channels",component:()=>Bt(()=>import("./ChannelsView.4c657caf.js"),["assets/ChannelsView.4c657caf.js","assets/channel.29088dfa.js","assets/user.90341f0d.js","assets/utils.460e4338.js"])},{path:"/channel/message/:id",component:()=>Bt(()=>import("./ChannelMessageView.f327e5b0.js"),["assets/ChannelMessageView.f327e5b0.js","assets/channel.29088dfa.js","assets/user.90341f0d.js","assets/utils.460e4338.js"])},{path:"/profile/:hash",component:()=>Bt(()=>import("./ProfileView.b946a466.js"),["assets/ProfileView.b946a466.js","assets/PostList.vue_vue_type_script_setup_true_lang.5f374a06.js","assets/PostList.b97ebd1b.css","assets/user.90341f0d.js","assets/utils.460e4338.js","assets/Space.2195441c.js","assets/fade-in-scale-up.cssr.618796f7.js","assets/use-locale.2946792e.js","assets/Card.dace5702.js","assets/Ellipsis.vue_vue_type_script_setup_true_lang.703f832c.js","assets/Tabs.1b7861ae.js","assets/use-message.c63a8014.js","assets/Input.e0ed6f0a.js","assets/naiveUi.dcbfc488.js","assets/Dropdown.74c73407.js"])},{path:"/profile",component:()=>Bt(()=>import("./ProfileView.b946a466.js"),["assets/ProfileView.b946a466.js","assets/PostList.vue_vue_type_script_setup_true_lang.5f374a06.js","assets/PostList.b97ebd1b.css","assets/user.90341f0d.js","assets/utils.460e4338.js","assets/Space.2195441c.js","assets/fade-in-scale-up.cssr.618796f7.js","assets/use-locale.2946792e.js","assets/Card.dace5702.js","assets/Ellipsis.vue_vue_type_script_setup_true_lang.703f832c.js","assets/Tabs.1b7861ae.js","assets/use-message.c63a8014.js","assets/Input.e0ed6f0a.js","assets/naiveUi.dcbfc488.js","assets/Dropdown.74c73407.js"])}]}]});nd.beforeEach((e,t,n)=>{const r=window.localStorage.getItem(la);e.name==="login"||r?n():n({name:"login",query:{redirected:e.fullPath}})});const rd=kp(Hy);rd.use(nd);rd.mount("#app");export{A2 as $,ki as A,oi as B,m2 as C,b2 as D,Zb as E,ec as F,Np as G,ju as H,Yb as I,ls as J,es as K,Dp as L,qi as M,ny as N,Kp as O,d0 as P,Gb as Q,la as R,Xb as S,rs as T,Wv as U,Mi as V,Qb as W,Ui as X,zs as Y,Re as Z,Zs as _,Mp as a,zp as a$,xv as a0,n2 as a1,Iy as a2,l2 as a3,Ni as a4,Si as a5,Yt as a6,He as a7,u2 as a8,mi as a9,lr as aA,zm as aB,z0 as aC,qr as aD,Eu as aE,Kn as aF,is as aG,gc as aH,yu as aI,ur as aJ,vu as aK,cr as aL,$n as aM,pu as aN,hu as aO,Js as aP,du as aQ,Mb as aR,I0 as aS,$l as aT,w2 as aU,d2 as aV,nn as aW,iy as aX,v2 as aY,xy as aZ,Gr as a_,gi as aa,x2 as ab,E2 as ac,r2 as ad,a2 as ae,De as af,y2 as ag,rt as ah,Io as ai,i2 as aj,i0 as ak,Nh as al,ss as am,xl as an,h0 as ao,c2 as ap,uh as aq,fh as ar,Di as as,ar as at,fm as au,gu as av,Wi as aw,um as ax,Ho as ay,O0 as az,h2 as b,Fp as b0,xp as b1,Kd as b2,Yf as b3,_2 as b4,or as b5,C2 as b6,t2 as b7,An as b8,o2 as b9,s2 as ba,S2 as bb,H1 as bc,yh as bd,Jo as be,f2 as bf,uy as c,Xe as d,En as e,ze as f,ql as g,z as h,Se as i,mt as j,hy as k,le as l,Vi as m,qb as n,Pl as o,ce as p,At as q,Vb as r,tn as s,Kh as t,Lu as u,Mu as v,Er as w,Jb as x,p2 as y,vn as z};
