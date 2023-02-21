(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function hi(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const dd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hd=hi(dd);function el(e){return!!e||e===""}function pi(e){if(G(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=Se(r)?md(r):pi(r);if(o)for(const s in o)t[s]=o[s]}return t}else{if(Se(e))return e;if(ve(e))return e}}const pd=/;(?![^(]*\))/g,gd=/:(.+)/;function md(e){const t={};return e.split(pd).forEach(n=>{if(n){const r=n.split(gd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function gi(e){let t="";if(Se(e))t=e;else if(G(e))for(let n=0;n<e.length;n++){const r=gi(e[n]);r&&(t+=r+" ")}else if(ve(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Fx=e=>Se(e)?e:e==null?"":G(e)||ve(e)&&(e.toString===ol||!Y(e.toString))?JSON.stringify(e,tl,2):String(e),tl=(e,t)=>t&&t.__v_isRef?tl(e,t.value):jn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:nl(t)?{[`Set(${t.size})`]:[...t.values()]}:ve(t)&&!G(t)&&!sl(t)?String(t):t,me={},Bn=[],at=()=>{},bd=()=>!1,yd=/^on[^a-z]/,qo=e=>yd.test(e),mi=e=>e.startsWith("onUpdate:"),Te=Object.assign,bi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},wd=Object.prototype.hasOwnProperty,ne=(e,t)=>wd.call(e,t),G=Array.isArray,jn=e=>Go(e)==="[object Map]",nl=e=>Go(e)==="[object Set]",Y=e=>typeof e=="function",Se=e=>typeof e=="string",yi=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",rl=e=>ve(e)&&Y(e.then)&&Y(e.catch),ol=Object.prototype.toString,Go=e=>ol.call(e),vd=e=>Go(e).slice(8,-1),sl=e=>Go(e)==="[object Object]",wi=e=>Se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Eo=hi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xd=/-(\w)/g,bt=Zo(e=>e.replace(xd,(t,n)=>n?n.toUpperCase():"")),Ed=/\B([A-Z])/g,er=Zo(e=>e.replace(Ed,"-$1").toLowerCase()),Yo=Zo(e=>e.charAt(0).toUpperCase()+e.slice(1)),ws=Zo(e=>e?`on${Yo(e)}`:""),Pr=(e,t)=>!Object.is(e,t),_o=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},So=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},$o=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ga;const _d=()=>ga||(ga=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ve;class Cd{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ve,!t&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ve;try{return Ve=this,t()}finally{Ve=n}}}on(){Ve=this}off(){Ve=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function Ad(e,t=Ve){t&&t.active&&t.effects.push(e)}function zx(){return Ve}function Dx(e){Ve&&Ve.cleanups.push(e)}const vi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},il=e=>(e.w&en)>0,al=e=>(e.n&en)>0,Sd=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=en},$d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];il(o)&&!al(o)?o.delete(e):t[n++]=o,o.w&=~en,o.n&=~en}t.length=n}},Bs=new WeakMap;let wr=0,en=1;const js=30;let ot;const wn=Symbol(""),Ms=Symbol("");class xi{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ad(this,r)}run(){if(!this.active)return this.fn();let t=ot,n=Zt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ot,ot=this,Zt=!0,en=1<<++wr,wr<=js?Sd(this):ma(this),this.fn()}finally{wr<=js&&$d(this),en=1<<--wr,ot=this.parent,Zt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ot===this?this.deferStop=!0:this.active&&(ma(this),this.onStop&&this.onStop(),this.active=!1)}}function ma(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Zt=!0;const cl=[];function tr(){cl.push(Zt),Zt=!1}function nr(){const e=cl.pop();Zt=e===void 0?!0:e}function Ze(e,t,n){if(Zt&&ot){let r=Bs.get(e);r||Bs.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=vi()),ll(o)}}function ll(e,t){let n=!1;wr<=js?al(e)||(e.n|=en,n=!il(e)):n=!e.has(ot),n&&(e.add(ot),ot.deps.push(e))}function St(e,t,n,r,o,s){const i=Bs.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&G(e))i.forEach((c,u)=>{(u==="length"||u>=r)&&a.push(c)});else switch(n!==void 0&&a.push(i.get(n)),t){case"add":G(e)?wi(n)&&a.push(i.get("length")):(a.push(i.get(wn)),jn(e)&&a.push(i.get(Ms)));break;case"delete":G(e)||(a.push(i.get(wn)),jn(e)&&a.push(i.get(Ms)));break;case"set":jn(e)&&a.push(i.get(wn));break}if(a.length===1)a[0]&&Us(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Us(vi(c))}}function Us(e,t){const n=G(e)?e:[...e];for(const r of n)r.computed&&ba(r);for(const r of n)r.computed||ba(r)}function ba(e,t){(e!==ot||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Td=hi("__proto__,__v_isRef,__isVue"),ul=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(yi)),kd=Ei(),Od=Ei(!1,!0),Rd=Ei(!0),ya=Id();function Id(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=le(this);for(let s=0,i=this.length;s<i;s++)Ze(r,"get",s+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(le)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){tr();const r=le(this)[t].apply(this,n);return nr(),r}}),e}function Ei(e=!1,t=!1){return function(r,o,s){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&s===(e?t?Gd:gl:t?pl:hl).get(r))return r;const i=G(r);if(!e&&i&&ne(ya,o))return Reflect.get(ya,o,s);const a=Reflect.get(r,o,s);return(yi(o)?ul.has(o):Td(o))||(e||Ze(r,"get",o),t)?a:Oe(a)?i&&wi(o)?a:a.value:ve(a)?e?Ai(a):rr(a):a}}const Pd=fl(),Hd=fl(!0);function fl(e=!1){return function(n,r,o,s){let i=n[r];if(zn(i)&&Oe(i)&&!Oe(o))return!1;if(!e&&(!To(o)&&!zn(o)&&(i=le(i),o=le(o)),!G(n)&&Oe(i)&&!Oe(o)))return i.value=o,!0;const a=G(n)&&wi(r)?Number(r)<n.length:ne(n,r),c=Reflect.set(n,r,o,s);return n===le(s)&&(a?Pr(o,i)&&St(n,"set",r,o):St(n,"add",r,o)),c}}function Ld(e,t){const n=ne(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&St(e,"delete",t,void 0),r}function Bd(e,t){const n=Reflect.has(e,t);return(!yi(t)||!ul.has(t))&&Ze(e,"has",t),n}function jd(e){return Ze(e,"iterate",G(e)?"length":wn),Reflect.ownKeys(e)}const dl={get:kd,set:Pd,deleteProperty:Ld,has:Bd,ownKeys:jd},Md={get:Rd,set(e,t){return!0},deleteProperty(e,t){return!0}},Ud=Te({},dl,{get:Od,set:Hd}),_i=e=>e,Xo=e=>Reflect.getPrototypeOf(e);function no(e,t,n=!1,r=!1){e=e.__v_raw;const o=le(e),s=le(t);n||(t!==s&&Ze(o,"get",t),Ze(o,"get",s));const{has:i}=Xo(o),a=r?_i:n?$i:Hr;if(i.call(o,t))return a(e.get(t));if(i.call(o,s))return a(e.get(s));e!==o&&e.get(t)}function ro(e,t=!1){const n=this.__v_raw,r=le(n),o=le(e);return t||(e!==o&&Ze(r,"has",e),Ze(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function oo(e,t=!1){return e=e.__v_raw,!t&&Ze(le(e),"iterate",wn),Reflect.get(e,"size",e)}function wa(e){e=le(e);const t=le(this);return Xo(t).has.call(t,e)||(t.add(e),St(t,"add",e,e)),this}function va(e,t){t=le(t);const n=le(this),{has:r,get:o}=Xo(n);let s=r.call(n,e);s||(e=le(e),s=r.call(n,e));const i=o.call(n,e);return n.set(e,t),s?Pr(t,i)&&St(n,"set",e,t):St(n,"add",e,t),this}function xa(e){const t=le(this),{has:n,get:r}=Xo(t);let o=n.call(t,e);o||(e=le(e),o=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return o&&St(t,"delete",e,void 0),s}function Ea(){const e=le(this),t=e.size!==0,n=e.clear();return t&&St(e,"clear",void 0,void 0),n}function so(e,t){return function(r,o){const s=this,i=s.__v_raw,a=le(i),c=t?_i:e?$i:Hr;return!e&&Ze(a,"iterate",wn),i.forEach((u,l)=>r.call(o,c(u),c(l),s))}}function io(e,t,n){return function(...r){const o=this.__v_raw,s=le(o),i=jn(s),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=o[e](...r),l=n?_i:t?$i:Hr;return!t&&Ze(s,"iterate",c?Ms:wn),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[l(f[0]),l(f[1])]:l(f),done:d}},[Symbol.iterator](){return this}}}}function Rt(e){return function(...t){return e==="delete"?!1:this}}function Nd(){const e={get(s){return no(this,s)},get size(){return oo(this)},has:ro,add:wa,set:va,delete:xa,clear:Ea,forEach:so(!1,!1)},t={get(s){return no(this,s,!1,!0)},get size(){return oo(this)},has:ro,add:wa,set:va,delete:xa,clear:Ea,forEach:so(!1,!0)},n={get(s){return no(this,s,!0)},get size(){return oo(this,!0)},has(s){return ro.call(this,s,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:so(!0,!1)},r={get(s){return no(this,s,!0,!0)},get size(){return oo(this,!0)},has(s){return ro.call(this,s,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:so(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=io(s,!1,!1),n[s]=io(s,!0,!1),t[s]=io(s,!1,!0),r[s]=io(s,!0,!0)}),[e,n,t,r]}const[Fd,zd,Dd,Kd]=Nd();function Ci(e,t){const n=t?e?Kd:Dd:e?zd:Fd;return(r,o,s)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(ne(n,o)&&o in r?n:r,o,s)}const Wd={get:Ci(!1,!1)},Vd={get:Ci(!1,!0)},qd={get:Ci(!0,!1)},hl=new WeakMap,pl=new WeakMap,gl=new WeakMap,Gd=new WeakMap;function Zd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yd(e){return e.__v_skip||!Object.isExtensible(e)?0:Zd(vd(e))}function rr(e){return zn(e)?e:Si(e,!1,dl,Wd,hl)}function Xd(e){return Si(e,!1,Ud,Vd,pl)}function Ai(e){return Si(e,!0,Md,qd,gl)}function Si(e,t,n,r,o){if(!ve(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const i=Yd(e);if(i===0)return e;const a=new Proxy(e,i===2?r:n);return o.set(e,a),a}function Mn(e){return zn(e)?Mn(e.__v_raw):!!(e&&e.__v_isReactive)}function zn(e){return!!(e&&e.__v_isReadonly)}function To(e){return!!(e&&e.__v_isShallow)}function ml(e){return Mn(e)||zn(e)}function le(e){const t=e&&e.__v_raw;return t?le(t):e}function ko(e){return So(e,"__v_skip",!0),e}const Hr=e=>ve(e)?rr(e):e,$i=e=>ve(e)?Ai(e):e;function bl(e){Zt&&ot&&(e=le(e),ll(e.dep||(e.dep=vi())))}function yl(e,t){e=le(e),e.dep&&Us(e.dep)}function Oe(e){return!!(e&&e.__v_isRef===!0)}function tn(e){return wl(e,!1)}function Qd(e){return wl(e,!0)}function wl(e,t){return Oe(e)?e:new Jd(e,t)}class Jd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:le(t),this._value=n?t:Hr(t)}get value(){return bl(this),this._value}set value(t){const n=this.__v_isShallow||To(t)||zn(t);t=n?t:le(t),Pr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Hr(t),yl(this))}}function Yt(e){return Oe(e)?e.value:e}const eh={get:(e,t,n)=>Yt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Oe(o)&&!Oe(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function vl(e){return Mn(e)?e:new Proxy(e,eh)}class th{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Ti(e,t,n){const r=e[t];return Oe(r)?r:new th(e,t,n)}var xl;class nh{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[xl]=!1,this._dirty=!0,this.effect=new xi(t,()=>{this._dirty||(this._dirty=!0,yl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=le(this);return bl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}xl="__v_isReadonly";function rh(e,t,n=!1){let r,o;const s=Y(e);return s?(r=e,o=at):(r=e.get,o=e.set),new nh(r,o,s||!o,n)}function Xt(e,t,n,r){let o;try{o=r?e(...r):e()}catch(s){Qo(s,t,n)}return o}function Je(e,t,n,r){if(Y(e)){const s=Xt(e,t,n,r);return s&&rl(s)&&s.catch(i=>{Qo(i,t,n)}),s}const o=[];for(let s=0;s<e.length;s++)o.push(Je(e[s],t,n,r));return o}function Qo(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let s=t.parent;const i=t.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](e,i,a)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Xt(c,null,10,[e,i,a]);return}}oh(e,n,o,r)}function oh(e,t,n,r=!0){console.error(e)}let Lr=!1,Ns=!1;const Le=[];let mt=0;const Un=[];let Ct=null,fn=0;const El=Promise.resolve();let ki=null;function _l(e){const t=ki||El;return e?t.then(this?e.bind(this):e):t}function sh(e){let t=mt+1,n=Le.length;for(;t<n;){const r=t+n>>>1;Br(Le[r])<e?t=r+1:n=r}return t}function Oi(e){(!Le.length||!Le.includes(e,Lr&&e.allowRecurse?mt+1:mt))&&(e.id==null?Le.push(e):Le.splice(sh(e.id),0,e),Cl())}function Cl(){!Lr&&!Ns&&(Ns=!0,ki=El.then(Sl))}function ih(e){const t=Le.indexOf(e);t>mt&&Le.splice(t,1)}function ah(e){G(e)?Un.push(...e):(!Ct||!Ct.includes(e,e.allowRecurse?fn+1:fn))&&Un.push(e),Cl()}function _a(e,t=Lr?mt+1:0){for(;t<Le.length;t++){const n=Le[t];n&&n.pre&&(Le.splice(t,1),t--,n())}}function Al(e){if(Un.length){const t=[...new Set(Un)];if(Un.length=0,Ct){Ct.push(...t);return}for(Ct=t,Ct.sort((n,r)=>Br(n)-Br(r)),fn=0;fn<Ct.length;fn++)Ct[fn]();Ct=null,fn=0}}const Br=e=>e.id==null?1/0:e.id,ch=(e,t)=>{const n=Br(e)-Br(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Sl(e){Ns=!1,Lr=!0,Le.sort(ch);const t=at;try{for(mt=0;mt<Le.length;mt++){const n=Le[mt];n&&n.active!==!1&&Xt(n,null,14)}}finally{mt=0,Le.length=0,Al(),Lr=!1,ki=null,(Le.length||Un.length)&&Sl()}}function lh(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||me;let o=n;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in r){const l=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:d}=r[l]||me;d&&(o=n.map(g=>g.trim())),f&&(o=n.map($o))}let a,c=r[a=ws(t)]||r[a=ws(bt(t))];!c&&s&&(c=r[a=ws(er(t))]),c&&Je(c,e,6,o);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Je(u,e,6,o)}}function $l(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const s=e.emits;let i={},a=!1;if(!Y(e)){const c=u=>{const l=$l(u,t,!0);l&&(a=!0,Te(i,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(ve(e)&&r.set(e,null),null):(G(s)?s.forEach(c=>i[c]=null):Te(i,s),ve(e)&&r.set(e,i),i)}function Jo(e,t){return!e||!qo(t)?!1:(t=t.slice(2).replace(/Once$/,""),ne(e,t[0].toLowerCase()+t.slice(1))||ne(e,er(t))||ne(e,t))}let Be=null,Tl=null;function Oo(e){const t=Be;return Be=e,Tl=e&&e.type.__scopeId||null,t}function Fs(e,t=Be,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&La(-1);const s=Oo(t);let i;try{i=e(...o)}finally{Oo(s),r._d&&La(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function vs(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:s,propsOptions:[i],slots:a,attrs:c,emit:u,render:l,renderCache:f,data:d,setupState:g,ctx:h,inheritAttrs:b}=e;let w,y;const E=Oo(e);try{if(n.shapeFlag&4){const v=o||r;w=gt(l.call(v,v,f,s,g,d,h)),y=c}else{const v=t;w=gt(v.length>1?v(s,{attrs:c,slots:a,emit:u}):v(s,null)),y=t.props?c:uh(c)}}catch(v){Sr.length=0,Qo(v,e,1),w=Re(et)}let $=w;if(y&&b!==!1){const v=Object.keys(y),{shapeFlag:A}=$;v.length&&A&7&&(i&&v.some(mi)&&(y=fh(y,i)),$=nn($,y))}return n.dirs&&($=nn($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),w=$,Oo(E),w}const uh=e=>{let t;for(const n in e)(n==="class"||n==="style"||qo(n))&&((t||(t={}))[n]=e[n]);return t},fh=(e,t)=>{const n={};for(const r in e)(!mi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function dh(e,t,n){const{props:r,children:o,component:s}=e,{props:i,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ca(r,i,u):!!i;if(c&8){const l=t.dynamicProps;for(let f=0;f<l.length;f++){const d=l[f];if(i[d]!==r[d]&&!Jo(u,d))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?Ca(r,i,u):!0:!!i;return!1}function Ca(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const s=r[o];if(t[s]!==e[s]&&!Jo(n,s))return!0}return!1}function hh({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ph=e=>e.__isSuspense;function gh(e,t){t&&t.pendingBranch?G(e)?t.effects.push(...e):t.effects.push(e):ah(e)}function vn(e,t){if($e){let n=$e.provides;const r=$e.parent&&$e.parent.provides;r===n&&(n=$e.provides=Object.create(r)),n[e]=t}}function Ae(e,t,n=!1){const r=$e||Be;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Y(t)?t.call(r.proxy):t}}function kl(e,t){return Ri(e,null,t)}const Aa={};function _r(e,t,n){return Ri(e,t,n)}function Ri(e,t,{immediate:n,deep:r,flush:o,onTrack:s,onTrigger:i}=me){const a=$e;let c,u=!1,l=!1;if(Oe(e)?(c=()=>e.value,u=To(e)):Mn(e)?(c=()=>e,r=!0):G(e)?(l=!0,u=e.some(y=>Mn(y)||To(y)),c=()=>e.map(y=>{if(Oe(y))return y.value;if(Mn(y))return gn(y);if(Y(y))return Xt(y,a,2)})):Y(e)?t?c=()=>Xt(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Je(e,a,3,[d])}:c=at,t&&r){const y=c;c=()=>gn(y())}let f,d=y=>{f=w.onStop=()=>{Xt(y,a,4)}};if(Nr)return d=at,t?n&&Je(t,a,3,[c(),l?[]:void 0,d]):c(),at;let g=l?[]:Aa;const h=()=>{if(!!w.active)if(t){const y=w.run();(r||u||(l?y.some((E,$)=>Pr(E,g[$])):Pr(y,g)))&&(f&&f(),Je(t,a,3,[y,g===Aa?void 0:g,d]),g=y)}else w.run()};h.allowRecurse=!!t;let b;o==="sync"?b=h:o==="post"?b=()=>Ne(h,a&&a.suspense):(h.pre=!0,a&&(h.id=a.uid),b=()=>Oi(h));const w=new xi(c,b);return t?n?h():g=w.run():o==="post"?Ne(w.run.bind(w),a&&a.suspense):w.run(),()=>{w.stop(),a&&a.scope&&bi(a.scope.effects,w)}}function mh(e,t,n){const r=this.proxy,o=Se(e)?e.includes(".")?Ol(r,e):()=>r[e]:e.bind(r,r);let s;Y(t)?s=t:(s=t.handler,n=t);const i=$e;Dn(this);const a=Ri(o,s.bind(r),n);return i?Dn(i):xn(),a}function Ol(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function gn(e,t){if(!ve(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Oe(e))gn(e.value,t);else if(G(e))for(let n=0;n<e.length;n++)gn(e[n],t);else if(nl(e)||jn(e))e.forEach(n=>{gn(n,t)});else if(sl(e))for(const n in e)gn(e[n],t);return e}function Rl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rs(()=>{e.isMounted=!0}),Bl(()=>{e.isUnmounting=!0}),e}const Xe=[Function,Array],bh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xe,onEnter:Xe,onAfterEnter:Xe,onEnterCancelled:Xe,onBeforeLeave:Xe,onLeave:Xe,onAfterLeave:Xe,onLeaveCancelled:Xe,onBeforeAppear:Xe,onAppear:Xe,onAfterAppear:Xe,onAppearCancelled:Xe},setup(e,{slots:t}){const n=Zl(),r=Rl();let o;return()=>{const s=t.default&&Ii(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const b of s)if(b.type!==et){i=b;break}}const a=le(e),{mode:c}=a;if(r.isLeaving)return xs(i);const u=Sa(i);if(!u)return xs(i);const l=jr(u,a,r,n);Mr(u,l);const f=n.subTree,d=f&&Sa(f);let g=!1;const{getTransitionKey:h}=u.type;if(h){const b=h();o===void 0?o=b:b!==o&&(o=b,g=!0)}if(d&&d.type!==et&&(!dn(u,d)||g)){const b=jr(d,a,r,n);if(Mr(d,b),c==="out-in")return r.isLeaving=!0,b.afterLeave=()=>{r.isLeaving=!1,n.update()},xs(i);c==="in-out"&&u.type!==et&&(b.delayLeave=(w,y,E)=>{const $=Pl(r,d);$[String(d.key)]=d,w._leaveCb=()=>{y(),w._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=E})}return i}}},Il=bh;function Pl(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function jr(e,t,n,r){const{appear:o,mode:s,persisted:i=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:h,onBeforeAppear:b,onAppear:w,onAfterAppear:y,onAppearCancelled:E}=t,$=String(e.key),v=Pl(n,e),A=(k,U)=>{k&&Je(k,r,9,U)},M=(k,U)=>{const q=U[1];A(k,U),G(k)?k.every(ie=>ie.length<=1)&&q():k.length<=1&&q()},z={mode:s,persisted:i,beforeEnter(k){let U=a;if(!n.isMounted)if(o)U=b||a;else return;k._leaveCb&&k._leaveCb(!0);const q=v[$];q&&dn(e,q)&&q.el._leaveCb&&q.el._leaveCb(),A(U,[k])},enter(k){let U=c,q=u,ie=l;if(!n.isMounted)if(o)U=w||c,q=y||u,ie=E||l;else return;let P=!1;const te=k._enterCb=Ee=>{P||(P=!0,Ee?A(ie,[k]):A(q,[k]),z.delayedLeave&&z.delayedLeave(),k._enterCb=void 0)};U?M(U,[k,te]):te()},leave(k,U){const q=String(e.key);if(k._enterCb&&k._enterCb(!0),n.isUnmounting)return U();A(f,[k]);let ie=!1;const P=k._leaveCb=te=>{ie||(ie=!0,U(),te?A(h,[k]):A(g,[k]),k._leaveCb=void 0,v[q]===e&&delete v[q])};v[q]=e,d?M(d,[k,P]):P()},clone(k){return jr(k,t,n,r)}};return z}function xs(e){if(es(e))return e=nn(e),e.children=null,e}function Sa(e){return es(e)?e.children?e.children[0]:void 0:e}function Mr(e,t){e.shapeFlag&6&&e.component?Mr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ii(e,t=!1,n){let r=[],o=0;for(let s=0;s<e.length;s++){let i=e[s];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:s);i.type===ze?(i.patchFlag&128&&o++,r=r.concat(Ii(i.children,t,a))):(t||i.type!==et)&&r.push(a!=null?nn(i,{key:a}):i)}if(o>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Ye(e){return Y(e)?{setup:e,name:e.name}:e}const Cr=e=>!!e.type.__asyncLoader,es=e=>e.type.__isKeepAlive;function yh(e,t){Hl(e,"a",t)}function wh(e,t){Hl(e,"da",t)}function Hl(e,t,n=$e){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(ts(t,r,n),n){let o=n.parent;for(;o&&o.parent;)es(o.parent.vnode)&&vh(r,t,n,o),o=o.parent}}function vh(e,t,n,r){const o=ts(t,e,r,!0);jl(()=>{bi(r[t],o)},n)}function ts(e,t,n=$e,r=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;tr(),Dn(n);const a=Je(t,n,e,i);return xn(),nr(),a});return r?o.unshift(s):o.push(s),s}}const Tt=e=>(t,n=$e)=>(!Nr||e==="sp")&&ts(e,(...r)=>t(...r),n),ns=Tt("bm"),rs=Tt("m"),xh=Tt("bu"),Ll=Tt("u"),Bl=Tt("bum"),jl=Tt("um"),Eh=Tt("sp"),_h=Tt("rtg"),Ch=Tt("rtc");function Ah(e,t=$e){ts("ec",e,t)}function Kx(e,t){const n=Be;if(n===null)return e;const r=ss(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,c,u=me]=t[s];Y(i)&&(i={mounted:i,updated:i}),i.deep&&gn(a),o.push({dir:i,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u})}return e}function an(e,t,n,r){const o=e.dirs,s=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];s&&(a.oldValue=s[i].value);let c=a.dir[r];c&&(tr(),Je(c,n,8,[e.el,a,e,t]),nr())}}const Ml="components";function Sh(e,t){return Th(Ml,e,!0,t)||e}const $h=Symbol();function Th(e,t,n=!0,r=!1){const o=Be||$e;if(o){const s=o.type;if(e===Ml){const a=ip(s,!1);if(a&&(a===t||a===bt(t)||a===Yo(bt(t))))return s}const i=$a(o[e]||s[e],t)||$a(o.appContext[e],t);return!i&&r?s:i}}function $a(e,t){return e&&(e[t]||e[bt(t)]||e[Yo(bt(t))])}function Wx(e,t,n,r){let o;const s=n&&n[r];if(G(e)||Se(e)){o=new Array(e.length);for(let i=0,a=e.length;i<a;i++)o[i]=t(e[i],i,void 0,s&&s[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,s&&s[i])}else if(ve(e))if(e[Symbol.iterator])o=Array.from(e,(i,a)=>t(i,a,void 0,s&&s[a]));else{const i=Object.keys(e);o=new Array(i.length);for(let a=0,c=i.length;a<c;a++){const u=i[a];o[a]=t(e[u],u,a,s&&s[a])}}else o=[];return n&&(n[r]=o),o}function Vx(e,t,n={},r,o){if(Be.isCE||Be.parent&&Cr(Be.parent)&&Be.parent.isCE)return Re("slot",t==="default"?null:{name:t},r&&r());let s=e[t];s&&s._c&&(s._d=!1),ji();const i=s&&Ul(s(n)),a=Mi(ze,{key:n.key||i&&i.key||`_${t}`},i||(r?r():[]),i&&e._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Ul(e){return e.some(t=>Po(t)?!(t.type===et||t.type===ze&&!Ul(t.children)):!0)?e:null}const zs=e=>e?Yl(e)?ss(e)||e.proxy:zs(e.parent):null,Ro=Te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>zs(e.parent),$root:e=>zs(e.root),$emit:e=>e.emit,$options:e=>Pi(e),$forceUpdate:e=>e.f||(e.f=()=>Oi(e.update)),$nextTick:e=>e.n||(e.n=_l.bind(e.proxy)),$watch:e=>mh.bind(e)}),kh={get({_:e},t){const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:a,appContext:c}=e;let u;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(r!==me&&ne(r,t))return i[t]=1,r[t];if(o!==me&&ne(o,t))return i[t]=2,o[t];if((u=e.propsOptions[0])&&ne(u,t))return i[t]=3,s[t];if(n!==me&&ne(n,t))return i[t]=4,n[t];Ds&&(i[t]=0)}}const l=Ro[t];let f,d;if(l)return t==="$attrs"&&Ze(e,"get",t),l(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==me&&ne(n,t))return i[t]=4,n[t];if(d=c.config.globalProperties,ne(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:s}=e;return o!==me&&ne(o,t)?(o[t]=n,!0):r!==me&&ne(r,t)?(r[t]=n,!0):ne(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:s}},i){let a;return!!n[i]||e!==me&&ne(e,i)||t!==me&&ne(t,i)||(a=s[0])&&ne(a,i)||ne(r,i)||ne(Ro,i)||ne(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ne(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ds=!0;function Oh(e){const t=Pi(e),n=e.proxy,r=e.ctx;Ds=!1,t.beforeCreate&&Ta(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:i,watch:a,provide:c,inject:u,created:l,beforeMount:f,mounted:d,beforeUpdate:g,updated:h,activated:b,deactivated:w,beforeDestroy:y,beforeUnmount:E,destroyed:$,unmounted:v,render:A,renderTracked:M,renderTriggered:z,errorCaptured:k,serverPrefetch:U,expose:q,inheritAttrs:ie,components:P,directives:te,filters:Ee}=t;if(u&&Rh(u,r,null,e.appContext.config.unwrapInjectedRef),i)for(const he in i){const fe=i[he];Y(fe)&&(r[he]=fe.bind(n))}if(o){const he=o.call(n,n);ve(he)&&(e.data=rr(he))}if(Ds=!0,s)for(const he in s){const fe=s[he],De=Y(fe)?fe.bind(n,n):Y(fe.get)?fe.get.bind(n,n):at,sn=!Y(fe)&&Y(fe.set)?fe.set.bind(n):at,tt=ae({get:De,set:sn});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Me=>tt.value=Me})}if(a)for(const he in a)Nl(a[he],r,n,he);if(c){const he=Y(c)?c.call(n):c;Reflect.ownKeys(he).forEach(fe=>{vn(fe,he[fe])})}l&&Ta(l,e,"c");function ye(he,fe){G(fe)?fe.forEach(De=>he(De.bind(n))):fe&&he(fe.bind(n))}if(ye(ns,f),ye(rs,d),ye(xh,g),ye(Ll,h),ye(yh,b),ye(wh,w),ye(Ah,k),ye(Ch,M),ye(_h,z),ye(Bl,E),ye(jl,v),ye(Eh,U),G(q))if(q.length){const he=e.exposed||(e.exposed={});q.forEach(fe=>{Object.defineProperty(he,fe,{get:()=>n[fe],set:De=>n[fe]=De})})}else e.exposed||(e.exposed={});A&&e.render===at&&(e.render=A),ie!=null&&(e.inheritAttrs=ie),P&&(e.components=P),te&&(e.directives=te)}function Rh(e,t,n=at,r=!1){G(e)&&(e=Ks(e));for(const o in e){const s=e[o];let i;ve(s)?"default"in s?i=Ae(s.from||o,s.default,!0):i=Ae(s.from||o):i=Ae(s),Oe(i)&&r?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[o]=i}}function Ta(e,t,n){Je(G(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Nl(e,t,n,r){const o=r.includes(".")?Ol(n,r):()=>n[r];if(Se(e)){const s=t[e];Y(s)&&_r(o,s)}else if(Y(e))_r(o,e.bind(n));else if(ve(e))if(G(e))e.forEach(s=>Nl(s,t,n,r));else{const s=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(s)&&_r(o,s,e)}}function Pi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,a=s.get(t);let c;return a?c=a:!o.length&&!n&&!r?c=t:(c={},o.length&&o.forEach(u=>Io(c,u,i,!0)),Io(c,t,i)),ve(t)&&s.set(t,c),c}function Io(e,t,n,r=!1){const{mixins:o,extends:s}=t;s&&Io(e,s,n,!0),o&&o.forEach(i=>Io(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=Ih[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Ih={data:ka,props:un,emits:un,methods:un,computed:un,beforeCreate:je,created:je,beforeMount:je,mounted:je,beforeUpdate:je,updated:je,beforeDestroy:je,beforeUnmount:je,destroyed:je,unmounted:je,activated:je,deactivated:je,errorCaptured:je,serverPrefetch:je,components:un,directives:un,watch:Hh,provide:ka,inject:Ph};function ka(e,t){return t?e?function(){return Te(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function Ph(e,t){return un(Ks(e),Ks(t))}function Ks(e){if(G(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function je(e,t){return e?[...new Set([].concat(e,t))]:t}function un(e,t){return e?Te(Te(Object.create(null),e),t):t}function Hh(e,t){if(!e)return t;if(!t)return e;const n=Te(Object.create(null),e);for(const r in t)n[r]=je(e[r],t[r]);return n}function Lh(e,t,n,r=!1){const o={},s={};So(s,os,1),e.propsDefaults=Object.create(null),Fl(e,t,o,s);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=r?o:Xd(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Bh(e,t,n,r){const{props:o,attrs:s,vnode:{patchFlag:i}}=e,a=le(o),[c]=e.propsOptions;let u=!1;if((r||i>0)&&!(i&16)){if(i&8){const l=e.vnode.dynamicProps;for(let f=0;f<l.length;f++){let d=l[f];if(Jo(e.emitsOptions,d))continue;const g=t[d];if(c)if(ne(s,d))g!==s[d]&&(s[d]=g,u=!0);else{const h=bt(d);o[h]=Ws(c,a,h,g,e,!1)}else g!==s[d]&&(s[d]=g,u=!0)}}}else{Fl(e,t,o,s)&&(u=!0);let l;for(const f in a)(!t||!ne(t,f)&&((l=er(f))===f||!ne(t,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(o[f]=Ws(c,a,f,void 0,e,!0)):delete o[f]);if(s!==a)for(const f in s)(!t||!ne(t,f)&&!0)&&(delete s[f],u=!0)}u&&St(e,"set","$attrs")}function Fl(e,t,n,r){const[o,s]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(Eo(c))continue;const u=t[c];let l;o&&ne(o,l=bt(c))?!s||!s.includes(l)?n[l]=u:(a||(a={}))[l]=u:Jo(e.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,i=!0)}if(s){const c=le(n),u=a||me;for(let l=0;l<s.length;l++){const f=s[l];n[f]=Ws(o,c,f,u[f],e,!ne(u,f))}}return i}function Ws(e,t,n,r,o,s){const i=e[n];if(i!=null){const a=ne(i,"default");if(a&&r===void 0){const c=i.default;if(i.type!==Function&&Y(c)){const{propsDefaults:u}=o;n in u?r=u[n]:(Dn(o),r=u[n]=c.call(null,t),xn())}else r=c}i[0]&&(s&&!a?r=!1:i[1]&&(r===""||r===er(n))&&(r=!0))}return r}function zl(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const s=e.props,i={},a=[];let c=!1;if(!Y(e)){const l=f=>{c=!0;const[d,g]=zl(f,t,!0);Te(i,d),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!s&&!c)return ve(e)&&r.set(e,Bn),Bn;if(G(s))for(let l=0;l<s.length;l++){const f=bt(s[l]);Oa(f)&&(i[f]=me)}else if(s)for(const l in s){const f=bt(l);if(Oa(f)){const d=s[l],g=i[f]=G(d)||Y(d)?{type:d}:d;if(g){const h=Pa(Boolean,g.type),b=Pa(String,g.type);g[0]=h>-1,g[1]=b<0||h<b,(h>-1||ne(g,"default"))&&a.push(f)}}}const u=[i,a];return ve(e)&&r.set(e,u),u}function Oa(e){return e[0]!=="$"}function Ra(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ia(e,t){return Ra(e)===Ra(t)}function Pa(e,t){return G(t)?t.findIndex(n=>Ia(n,e)):Y(t)&&Ia(t,e)?0:-1}const Dl=e=>e[0]==="_"||e==="$stable",Hi=e=>G(e)?e.map(gt):[gt(e)],jh=(e,t,n)=>{if(t._n)return t;const r=Fs((...o)=>Hi(t(...o)),n);return r._c=!1,r},Kl=(e,t,n)=>{const r=e._ctx;for(const o in e){if(Dl(o))continue;const s=e[o];if(Y(s))t[o]=jh(o,s,r);else if(s!=null){const i=Hi(s);t[o]=()=>i}}},Wl=(e,t)=>{const n=Hi(t);e.slots.default=()=>n},Mh=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=le(t),So(t,"_",n)):Kl(t,e.slots={})}else e.slots={},t&&Wl(e,t);So(e.slots,os,1)},Uh=(e,t,n)=>{const{vnode:r,slots:o}=e;let s=!0,i=me;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(Te(o,t),!n&&a===1&&delete o._):(s=!t.$stable,Kl(t,o)),i=t}else t&&(Wl(e,t),i={default:1});if(s)for(const a in o)!Dl(a)&&!(a in i)&&delete o[a]};function Vl(){return{app:null,config:{isNativeTag:bd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nh=0;function Fh(e,t){return function(r,o=null){Y(r)||(r=Object.assign({},r)),o!=null&&!ve(o)&&(o=null);const s=Vl(),i=new Set;let a=!1;const c=s.app={_uid:Nh++,_component:r,_props:o,_container:null,_context:s,_instance:null,version:cp,get config(){return s.config},set config(u){},use(u,...l){return i.has(u)||(u&&Y(u.install)?(i.add(u),u.install(c,...l)):Y(u)&&(i.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,f){if(!a){const d=Re(r,o);return d.appContext=s,l&&t?t(d,u):e(d,u,f),a=!0,c._container=u,u.__vue_app__=c,ss(d.component)||d.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c}};return c}}function Vs(e,t,n,r,o=!1){if(G(e)){e.forEach((d,g)=>Vs(d,t&&(G(t)?t[g]:t),n,r,o));return}if(Cr(r)&&!o)return;const s=r.shapeFlag&4?ss(r.component)||r.component.proxy:r.el,i=o?null:s,{i:a,r:c}=e,u=t&&t.r,l=a.refs===me?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==c&&(Se(u)?(l[u]=null,ne(f,u)&&(f[u]=null)):Oe(u)&&(u.value=null)),Y(c))Xt(c,a,12,[i,l]);else{const d=Se(c),g=Oe(c);if(d||g){const h=()=>{if(e.f){const b=d?ne(f,c)?f[c]:l[c]:c.value;o?G(b)&&bi(b,s):G(b)?b.includes(s)||b.push(s):d?(l[c]=[s],ne(f,c)&&(f[c]=l[c])):(c.value=[s],e.k&&(l[e.k]=c.value))}else d?(l[c]=i,ne(f,c)&&(f[c]=i)):g&&(c.value=i,e.k&&(l[e.k]=i))};i?(h.id=-1,Ne(h,n)):h()}}}const Ne=gh;function zh(e){return Dh(e)}function Dh(e,t){const n=_d();n.__VUE__=!0;const{insert:r,remove:o,patchProp:s,createElement:i,createText:a,createComment:c,setText:u,setElementText:l,parentNode:f,nextSibling:d,setScopeId:g=at,insertStaticContent:h}=e,b=(p,m,x,_=null,S=null,R=null,B=!1,O=null,I=!!m.dynamicChildren)=>{if(p===m)return;p&&!dn(p,m)&&(_=L(p),Me(p,S,R,!0),p=null),m.patchFlag===-2&&(I=!1,m.dynamicChildren=null);const{type:T,ref:K,shapeFlag:F}=m;switch(T){case Bi:w(p,m,x,_);break;case et:y(p,m,x,_);break;case Es:p==null&&E(m,x,_,B);break;case ze:P(p,m,x,_,S,R,B,O,I);break;default:F&1?A(p,m,x,_,S,R,B,O,I):F&6?te(p,m,x,_,S,R,B,O,I):(F&64||F&128)&&T.process(p,m,x,_,S,R,B,O,I,se)}K!=null&&S&&Vs(K,p&&p.ref,R,m||p,!m)},w=(p,m,x,_)=>{if(p==null)r(m.el=a(m.children),x,_);else{const S=m.el=p.el;m.children!==p.children&&u(S,m.children)}},y=(p,m,x,_)=>{p==null?r(m.el=c(m.children||""),x,_):m.el=p.el},E=(p,m,x,_)=>{[p.el,p.anchor]=h(p.children,m,x,_,p.el,p.anchor)},$=({el:p,anchor:m},x,_)=>{let S;for(;p&&p!==m;)S=d(p),r(p,x,_),p=S;r(m,x,_)},v=({el:p,anchor:m})=>{let x;for(;p&&p!==m;)x=d(p),o(p),p=x;o(m)},A=(p,m,x,_,S,R,B,O,I)=>{B=B||m.type==="svg",p==null?M(m,x,_,S,R,B,O,I):U(p,m,S,R,B,O,I)},M=(p,m,x,_,S,R,B,O)=>{let I,T;const{type:K,props:F,shapeFlag:W,transition:Z,dirs:J}=p;if(I=p.el=i(p.type,R,F&&F.is,F),W&8?l(I,p.children):W&16&&k(p.children,I,null,_,S,R&&K!=="foreignObject",B,O),J&&an(p,null,_,"created"),F){for(const pe in F)pe!=="value"&&!Eo(pe)&&s(I,pe,null,F[pe],R,p.children,_,S,j);"value"in F&&s(I,"value",null,F.value),(T=F.onVnodeBeforeMount)&&ft(T,_,p)}z(I,p,p.scopeId,B,_),J&&an(p,null,_,"beforeMount");const be=(!S||S&&!S.pendingBranch)&&Z&&!Z.persisted;be&&Z.beforeEnter(I),r(I,m,x),((T=F&&F.onVnodeMounted)||be||J)&&Ne(()=>{T&&ft(T,_,p),be&&Z.enter(I),J&&an(p,null,_,"mounted")},S)},z=(p,m,x,_,S)=>{if(x&&g(p,x),_)for(let R=0;R<_.length;R++)g(p,_[R]);if(S){let R=S.subTree;if(m===R){const B=S.vnode;z(p,B,B.scopeId,B.slotScopeIds,S.parent)}}},k=(p,m,x,_,S,R,B,O,I=0)=>{for(let T=I;T<p.length;T++){const K=p[T]=O?zt(p[T]):gt(p[T]);b(null,K,m,x,_,S,R,B,O)}},U=(p,m,x,_,S,R,B)=>{const O=m.el=p.el;let{patchFlag:I,dynamicChildren:T,dirs:K}=m;I|=p.patchFlag&16;const F=p.props||me,W=m.props||me;let Z;x&&cn(x,!1),(Z=W.onVnodeBeforeUpdate)&&ft(Z,x,m,p),K&&an(m,p,x,"beforeUpdate"),x&&cn(x,!0);const J=S&&m.type!=="foreignObject";if(T?q(p.dynamicChildren,T,O,x,_,J,R):B||fe(p,m,O,null,x,_,J,R,!1),I>0){if(I&16)ie(O,m,F,W,x,_,S);else if(I&2&&F.class!==W.class&&s(O,"class",null,W.class,S),I&4&&s(O,"style",F.style,W.style,S),I&8){const be=m.dynamicProps;for(let pe=0;pe<be.length;pe++){const Ce=be[pe],nt=F[Ce],In=W[Ce];(In!==nt||Ce==="value")&&s(O,Ce,nt,In,S,p.children,x,_,j)}}I&1&&p.children!==m.children&&l(O,m.children)}else!B&&T==null&&ie(O,m,F,W,x,_,S);((Z=W.onVnodeUpdated)||K)&&Ne(()=>{Z&&ft(Z,x,m,p),K&&an(m,p,x,"updated")},_)},q=(p,m,x,_,S,R,B)=>{for(let O=0;O<m.length;O++){const I=p[O],T=m[O],K=I.el&&(I.type===ze||!dn(I,T)||I.shapeFlag&70)?f(I.el):x;b(I,T,K,null,_,S,R,B,!0)}},ie=(p,m,x,_,S,R,B)=>{if(x!==_){if(x!==me)for(const O in x)!Eo(O)&&!(O in _)&&s(p,O,x[O],null,B,m.children,S,R,j);for(const O in _){if(Eo(O))continue;const I=_[O],T=x[O];I!==T&&O!=="value"&&s(p,O,T,I,B,m.children,S,R,j)}"value"in _&&s(p,"value",x.value,_.value)}},P=(p,m,x,_,S,R,B,O,I)=>{const T=m.el=p?p.el:a(""),K=m.anchor=p?p.anchor:a("");let{patchFlag:F,dynamicChildren:W,slotScopeIds:Z}=m;Z&&(O=O?O.concat(Z):Z),p==null?(r(T,x,_),r(K,x,_),k(m.children,x,K,S,R,B,O,I)):F>0&&F&64&&W&&p.dynamicChildren?(q(p.dynamicChildren,W,x,S,R,B,O),(m.key!=null||S&&m===S.subTree)&&Li(p,m,!0)):fe(p,m,x,K,S,R,B,O,I)},te=(p,m,x,_,S,R,B,O,I)=>{m.slotScopeIds=O,p==null?m.shapeFlag&512?S.ctx.activate(m,x,_,B,I):Ee(m,x,_,S,R,B,I):ke(p,m,I)},Ee=(p,m,x,_,S,R,B)=>{const O=p.component=tp(p,_,S);if(es(p)&&(O.ctx.renderer=se),np(O),O.asyncDep){if(S&&S.registerDep(O,ye),!p.el){const I=O.subTree=Re(et);y(null,I,m,x)}return}ye(O,p,m,x,S,R,B)},ke=(p,m,x)=>{const _=m.component=p.component;if(dh(p,m,x))if(_.asyncDep&&!_.asyncResolved){he(_,m,x);return}else _.next=m,ih(_.update),_.update();else m.el=p.el,_.vnode=m},ye=(p,m,x,_,S,R,B)=>{const O=()=>{if(p.isMounted){let{next:K,bu:F,u:W,parent:Z,vnode:J}=p,be=K,pe;cn(p,!1),K?(K.el=J.el,he(p,K,B)):K=J,F&&_o(F),(pe=K.props&&K.props.onVnodeBeforeUpdate)&&ft(pe,Z,K,J),cn(p,!0);const Ce=vs(p),nt=p.subTree;p.subTree=Ce,b(nt,Ce,f(nt.el),L(nt),p,S,R),K.el=Ce.el,be===null&&hh(p,Ce.el),W&&Ne(W,S),(pe=K.props&&K.props.onVnodeUpdated)&&Ne(()=>ft(pe,Z,K,J),S)}else{let K;const{el:F,props:W}=m,{bm:Z,m:J,parent:be}=p,pe=Cr(m);if(cn(p,!1),Z&&_o(Z),!pe&&(K=W&&W.onVnodeBeforeMount)&&ft(K,be,m),cn(p,!0),F&&Q){const Ce=()=>{p.subTree=vs(p),Q(F,p.subTree,p,S,null)};pe?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ce()):Ce()}else{const Ce=p.subTree=vs(p);b(null,Ce,x,_,p,S,R),m.el=Ce.el}if(J&&Ne(J,S),!pe&&(K=W&&W.onVnodeMounted)){const Ce=m;Ne(()=>ft(K,be,Ce),S)}(m.shapeFlag&256||be&&Cr(be.vnode)&&be.vnode.shapeFlag&256)&&p.a&&Ne(p.a,S),p.isMounted=!0,m=x=_=null}},I=p.effect=new xi(O,()=>Oi(T),p.scope),T=p.update=()=>I.run();T.id=p.uid,cn(p,!0),T()},he=(p,m,x)=>{m.component=p;const _=p.vnode.props;p.vnode=m,p.next=null,Bh(p,m.props,_,x),Uh(p,m.children,x),tr(),_a(),nr()},fe=(p,m,x,_,S,R,B,O,I=!1)=>{const T=p&&p.children,K=p?p.shapeFlag:0,F=m.children,{patchFlag:W,shapeFlag:Z}=m;if(W>0){if(W&128){sn(T,F,x,_,S,R,B,O,I);return}else if(W&256){De(T,F,x,_,S,R,B,O,I);return}}Z&8?(K&16&&j(T,S,R),F!==T&&l(x,F)):K&16?Z&16?sn(T,F,x,_,S,R,B,O,I):j(T,S,R,!0):(K&8&&l(x,""),Z&16&&k(F,x,_,S,R,B,O,I))},De=(p,m,x,_,S,R,B,O,I)=>{p=p||Bn,m=m||Bn;const T=p.length,K=m.length,F=Math.min(T,K);let W;for(W=0;W<F;W++){const Z=m[W]=I?zt(m[W]):gt(m[W]);b(p[W],Z,x,null,S,R,B,O,I)}T>K?j(p,S,R,!0,!1,F):k(m,x,_,S,R,B,O,I,F)},sn=(p,m,x,_,S,R,B,O,I)=>{let T=0;const K=m.length;let F=p.length-1,W=K-1;for(;T<=F&&T<=W;){const Z=p[T],J=m[T]=I?zt(m[T]):gt(m[T]);if(dn(Z,J))b(Z,J,x,null,S,R,B,O,I);else break;T++}for(;T<=F&&T<=W;){const Z=p[F],J=m[W]=I?zt(m[W]):gt(m[W]);if(dn(Z,J))b(Z,J,x,null,S,R,B,O,I);else break;F--,W--}if(T>F){if(T<=W){const Z=W+1,J=Z<K?m[Z].el:_;for(;T<=W;)b(null,m[T]=I?zt(m[T]):gt(m[T]),x,J,S,R,B,O,I),T++}}else if(T>W)for(;T<=F;)Me(p[T],S,R,!0),T++;else{const Z=T,J=T,be=new Map;for(T=J;T<=W;T++){const Ke=m[T]=I?zt(m[T]):gt(m[T]);Ke.key!=null&&be.set(Ke.key,T)}let pe,Ce=0;const nt=W-J+1;let In=!1,da=0;const dr=new Array(nt);for(T=0;T<nt;T++)dr[T]=0;for(T=Z;T<=F;T++){const Ke=p[T];if(Ce>=nt){Me(Ke,S,R,!0);continue}let ut;if(Ke.key!=null)ut=be.get(Ke.key);else for(pe=J;pe<=W;pe++)if(dr[pe-J]===0&&dn(Ke,m[pe])){ut=pe;break}ut===void 0?Me(Ke,S,R,!0):(dr[ut-J]=T+1,ut>=da?da=ut:In=!0,b(Ke,m[ut],x,null,S,R,B,O,I),Ce++)}const ha=In?Kh(dr):Bn;for(pe=ha.length-1,T=nt-1;T>=0;T--){const Ke=J+T,ut=m[Ke],pa=Ke+1<K?m[Ke+1].el:_;dr[T]===0?b(null,ut,x,pa,S,R,B,O,I):In&&(pe<0||T!==ha[pe]?tt(ut,x,pa,2):pe--)}}},tt=(p,m,x,_,S=null)=>{const{el:R,type:B,transition:O,children:I,shapeFlag:T}=p;if(T&6){tt(p.component.subTree,m,x,_);return}if(T&128){p.suspense.move(m,x,_);return}if(T&64){B.move(p,m,x,se);return}if(B===ze){r(R,m,x);for(let F=0;F<I.length;F++)tt(I[F],m,x,_);r(p.anchor,m,x);return}if(B===Es){$(p,m,x);return}if(_!==2&&T&1&&O)if(_===0)O.beforeEnter(R),r(R,m,x),Ne(()=>O.enter(R),S);else{const{leave:F,delayLeave:W,afterLeave:Z}=O,J=()=>r(R,m,x),be=()=>{F(R,()=>{J(),Z&&Z()})};W?W(R,J,be):be()}else r(R,m,x)},Me=(p,m,x,_=!1,S=!1)=>{const{type:R,props:B,ref:O,children:I,dynamicChildren:T,shapeFlag:K,patchFlag:F,dirs:W}=p;if(O!=null&&Vs(O,null,x,p,!0),K&256){m.ctx.deactivate(p);return}const Z=K&1&&W,J=!Cr(p);let be;if(J&&(be=B&&B.onVnodeBeforeUnmount)&&ft(be,m,p),K&6)C(p.component,x,_);else{if(K&128){p.suspense.unmount(x,_);return}Z&&an(p,null,m,"beforeUnmount"),K&64?p.type.remove(p,m,x,S,se,_):T&&(R!==ze||F>0&&F&64)?j(T,m,x,!1,!0):(R===ze&&F&384||!S&&K&16)&&j(I,m,x),_&&Rn(p)}(J&&(be=B&&B.onVnodeUnmounted)||Z)&&Ne(()=>{be&&ft(be,m,p),Z&&an(p,null,m,"unmounted")},x)},Rn=p=>{const{type:m,el:x,anchor:_,transition:S}=p;if(m===ze){to(x,_);return}if(m===Es){v(p);return}const R=()=>{o(x),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:B,delayLeave:O}=S,I=()=>B(x,R);O?O(p.el,R,I):I()}else R()},to=(p,m)=>{let x;for(;p!==m;)x=d(p),o(p),p=x;o(m)},C=(p,m,x)=>{const{bum:_,scope:S,update:R,subTree:B,um:O}=p;_&&_o(_),S.stop(),R&&(R.active=!1,Me(B,p,m,x)),O&&Ne(O,m),Ne(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},j=(p,m,x,_=!1,S=!1,R=0)=>{for(let B=R;B<p.length;B++)Me(p[B],m,x,_,S)},L=p=>p.shapeFlag&6?L(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),D=(p,m,x)=>{p==null?m._vnode&&Me(m._vnode,null,null,!0):b(m._vnode||null,p,m,null,null,null,x),_a(),Al(),m._vnode=p},se={p:b,um:Me,m:tt,r:Rn,mt:Ee,mc:k,pc:fe,pbc:q,n:L,o:e};let _e,Q;return t&&([_e,Q]=t(se)),{render:D,hydrate:_e,createApp:Fh(D,_e)}}function cn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Li(e,t,n=!1){const r=e.children,o=t.children;if(G(r)&&G(o))for(let s=0;s<r.length;s++){const i=r[s];let a=o[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[s]=zt(o[s]),a.el=i.el),n||Li(i,a))}}function Kh(e){const t=e.slice(),n=[0];let r,o,s,i,a;const c=e.length;for(r=0;r<c;r++){const u=e[r];if(u!==0){if(o=n[n.length-1],e[o]<u){t[r]=o,n.push(r);continue}for(s=0,i=n.length-1;s<i;)a=s+i>>1,e[n[a]]<u?s=a+1:i=a;u<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}const Wh=e=>e.__isTeleport,Ar=e=>e&&(e.disabled||e.disabled===""),Ha=e=>typeof SVGElement<"u"&&e instanceof SVGElement,qs=(e,t)=>{const n=e&&e.to;return Se(n)?t?t(n):null:n},Vh={__isTeleport:!0,process(e,t,n,r,o,s,i,a,c,u){const{mc:l,pc:f,pbc:d,o:{insert:g,querySelector:h,createText:b,createComment:w}}=u,y=Ar(t.props);let{shapeFlag:E,children:$,dynamicChildren:v}=t;if(e==null){const A=t.el=b(""),M=t.anchor=b("");g(A,n,r),g(M,n,r);const z=t.target=qs(t.props,h),k=t.targetAnchor=b("");z&&(g(k,z),i=i||Ha(z));const U=(q,ie)=>{E&16&&l($,q,ie,o,s,i,a,c)};y?U(n,M):z&&U(z,k)}else{t.el=e.el;const A=t.anchor=e.anchor,M=t.target=e.target,z=t.targetAnchor=e.targetAnchor,k=Ar(e.props),U=k?n:M,q=k?A:z;if(i=i||Ha(M),v?(d(e.dynamicChildren,v,U,o,s,i,a),Li(e,t,!0)):c||f(e,t,U,q,o,s,i,a,!1),y)k||ao(t,n,A,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ie=t.target=qs(t.props,h);ie&&ao(t,ie,null,u,0)}else k&&ao(t,M,z,u,1)}},remove(e,t,n,r,{um:o,o:{remove:s}},i){const{shapeFlag:a,children:c,anchor:u,targetAnchor:l,target:f,props:d}=e;if(f&&s(l),(i||!Ar(d))&&(s(u),a&16))for(let g=0;g<c.length;g++){const h=c[g];o(h,t,n,!0,!!h.dynamicChildren)}},move:ao,hydrate:qh};function ao(e,t,n,{o:{insert:r},m:o},s=2){s===0&&r(e.targetAnchor,t,n);const{el:i,anchor:a,shapeFlag:c,children:u,props:l}=e,f=s===2;if(f&&r(i,t,n),(!f||Ar(l))&&c&16)for(let d=0;d<u.length;d++)o(u[d],t,n,2);f&&r(a,t,n)}function qh(e,t,n,r,o,s,{o:{nextSibling:i,parentNode:a,querySelector:c}},u){const l=t.target=qs(t.props,c);if(l){const f=l._lpa||l.firstChild;if(t.shapeFlag&16)if(Ar(t.props))t.anchor=u(i(e),t,a(e),n,r,o,s),t.targetAnchor=f;else{t.anchor=i(e);let d=f;for(;d;)if(d=i(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,l._lpa=t.targetAnchor&&i(t.targetAnchor);break}u(f,t,l,n,r,o,s)}}return t.anchor&&i(t.anchor)}const Gh=Vh,ze=Symbol(void 0),Bi=Symbol(void 0),et=Symbol(void 0),Es=Symbol(void 0),Sr=[];let st=null;function ji(e=!1){Sr.push(st=e?null:[])}function Zh(){Sr.pop(),st=Sr[Sr.length-1]||null}let Ur=1;function La(e){Ur+=e}function ql(e){return e.dynamicChildren=Ur>0?st||Bn:null,Zh(),Ur>0&&st&&st.push(e),e}function qx(e,t,n,r,o,s){return ql(Ui(e,t,n,r,o,s,!0))}function Mi(e,t,n,r,o){return ql(Re(e,t,n,r,o,!0))}function Po(e){return e?e.__v_isVNode===!0:!1}function dn(e,t){return e.type===t.type&&e.key===t.key}const os="__vInternal",Gl=({key:e})=>e!=null?e:null,Co=({ref:e,ref_key:t,ref_for:n})=>e!=null?Se(e)||Oe(e)||Y(e)?{i:Be,r:e,k:t,f:!!n}:e:null;function Ui(e,t=null,n=null,r=0,o=null,s=e===ze?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gl(t),ref:t&&Co(t),scopeId:Tl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return a?(Ni(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Se(n)?8:16),Ur>0&&!i&&st&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&st.push(c),c}const Re=Yh;function Yh(e,t=null,n=null,r=0,o=null,s=!1){if((!e||e===$h)&&(e=et),Po(e)){const a=nn(e,t,!0);return n&&Ni(a,n),Ur>0&&!s&&st&&(a.shapeFlag&6?st[st.indexOf(e)]=a:st.push(a)),a.patchFlag|=-2,a}if(ap(e)&&(e=e.__vccOpts),t){t=Xh(t);let{class:a,style:c}=t;a&&!Se(a)&&(t.class=gi(a)),ve(c)&&(ml(c)&&!G(c)&&(c=Te({},c)),t.style=pi(c))}const i=Se(e)?1:ph(e)?128:Wh(e)?64:ve(e)?4:Y(e)?2:0;return Ui(e,t,n,r,o,i,s,!0)}function Xh(e){return e?ml(e)||os in e?Te({},e):e:null}function nn(e,t,n=!1){const{props:r,ref:o,patchFlag:s,children:i}=e,a=t?Qh(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Gl(a),ref:t&&t.ref?n&&o?G(o)?o.concat(Co(t)):[o,Co(t)]:Co(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ze?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&nn(e.ssContent),ssFallback:e.ssFallback&&nn(e.ssFallback),el:e.el,anchor:e.anchor}}function Gs(e=" ",t=0){return Re(Bi,null,e,t)}function Gx(e="",t=!1){return t?(ji(),Mi(et,null,e)):Re(et,null,e)}function gt(e){return e==null||typeof e=="boolean"?Re(et):G(e)?Re(ze,null,e.slice()):typeof e=="object"?zt(e):Re(Bi,null,String(e))}function zt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:nn(e)}function Ni(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(G(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Ni(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(os in t)?t._ctx=Be:o===3&&Be&&(Be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:Be},n=32):(t=String(t),r&64?(n=16,t=[Gs(t)]):n=8);e.children=t,e.shapeFlag|=n}function Qh(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=gi([t.class,r.class]));else if(o==="style")t.style=pi([t.style,r.style]);else if(qo(o)){const s=t[o],i=r[o];i&&s!==i&&!(G(s)&&s.includes(i))&&(t[o]=s?[].concat(s,i):i)}else o!==""&&(t[o]=r[o])}return t}function ft(e,t,n,r=null){Je(e,t,7,[n,r])}const Jh=Vl();let ep=0;function tp(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||Jh,s={uid:ep++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zl(r,o),emitsOptions:$l(r,o),emit:null,emitted:null,propsDefaults:me,inheritAttrs:r.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=lh.bind(null,s),e.ce&&e.ce(s),s}let $e=null;const Zl=()=>$e||Be,Dn=e=>{$e=e,e.scope.on()},xn=()=>{$e&&$e.scope.off(),$e=null};function Yl(e){return e.vnode.shapeFlag&4}let Nr=!1;function np(e,t=!1){Nr=t;const{props:n,children:r}=e.vnode,o=Yl(e);Lh(e,n,o,t),Mh(e,r);const s=o?rp(e,t):void 0;return Nr=!1,s}function rp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ko(new Proxy(e.ctx,kh));const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?sp(e):null;Dn(e),tr();const s=Xt(r,e,0,[e.props,o]);if(nr(),xn(),rl(s)){if(s.then(xn,xn),t)return s.then(i=>{Ba(e,i,t)}).catch(i=>{Qo(i,e,0)});e.asyncDep=s}else Ba(e,s,t)}else Xl(e,t)}function Ba(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ve(t)&&(e.setupState=vl(t)),Xl(e,n)}let ja;function Xl(e,t,n){const r=e.type;if(!e.render){if(!t&&ja&&!r.render){const o=r.template||Pi(e).template;if(o){const{isCustomElement:s,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Te(Te({isCustomElement:s,delimiters:a},i),c);r.render=ja(o,u)}}e.render=r.render||at}Dn(e),tr(),Oh(e),nr(),xn()}function op(e){return new Proxy(e.attrs,{get(t,n){return Ze(e,"get","$attrs"),t[n]}})}function sp(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=op(e))},slots:e.slots,emit:e.emit,expose:t}}function ss(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(vl(ko(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ro)return Ro[n](e)}}))}function ip(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function ap(e){return Y(e)&&"__vccOpts"in e}const ae=(e,t)=>rh(e,t,Nr);function N(e,t,n){const r=arguments.length;return r===2?ve(t)&&!G(t)?Po(t)?Re(e,null,[t]):Re(e,t):Re(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Po(n)&&(n=[n]),Re(e,t,n))}const cp="3.2.41",lp="http://www.w3.org/2000/svg",hn=typeof document<"u"?document:null,Ma=hn&&hn.createElement("template"),up={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?hn.createElementNS(lp,e):hn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>hn.createTextNode(e),createComment:e=>hn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>hn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,s){const i=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===s||!(o=o.nextSibling)););else{Ma.innerHTML=r?`<svg>${e}</svg>`:e;const a=Ma.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function fp(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function dp(e,t,n){const r=e.style,o=Se(n);if(n&&!o){for(const s in n)Zs(r,s,n[s]);if(t&&!Se(t))for(const s in t)n[s]==null&&Zs(r,s,"")}else{const s=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const Ua=/\s*!important$/;function Zs(e,t,n){if(G(n))n.forEach(r=>Zs(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=hp(e,t);Ua.test(n)?e.setProperty(er(r),n.replace(Ua,""),"important"):e[r]=n}}const Na=["Webkit","Moz","ms"],_s={};function hp(e,t){const n=_s[t];if(n)return n;let r=bt(t);if(r!=="filter"&&r in e)return _s[t]=r;r=Yo(r);for(let o=0;o<Na.length;o++){const s=Na[o]+r;if(s in e)return _s[t]=s}return t}const Fa="http://www.w3.org/1999/xlink";function pp(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Fa,t.slice(6,t.length)):e.setAttributeNS(Fa,t,n);else{const s=hd(t);n==null||s&&!el(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function gp(e,t,n,r,o,s,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,o,s),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=el(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Hn(e,t,n,r){e.addEventListener(t,n,r)}function mp(e,t,n,r){e.removeEventListener(t,n,r)}function bp(e,t,n,r,o=null){const s=e._vei||(e._vei={}),i=s[t];if(r&&i)i.value=r;else{const[a,c]=yp(t);if(r){const u=s[t]=xp(r,o);Hn(e,a,u,c)}else i&&(mp(e,a,i,c),s[t]=void 0)}}const za=/(?:Once|Passive|Capture)$/;function yp(e){let t;if(za.test(e)){t={};let r;for(;r=e.match(za);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):er(e.slice(2)),t]}let Cs=0;const wp=Promise.resolve(),vp=()=>Cs||(wp.then(()=>Cs=0),Cs=Date.now());function xp(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Je(Ep(r,n.value),t,5,[r])};return n.value=e,n.attached=vp(),n}function Ep(e,t){if(G(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const Da=/^on[a-z]/,_p=(e,t,n,r,o=!1,s,i,a,c)=>{t==="class"?fp(e,r,o):t==="style"?dp(e,n,r):qo(t)?mi(t)||bp(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cp(e,t,r,o))?gp(e,t,r,s,i,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),pp(e,t,r,o))};function Cp(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Da.test(t)&&Y(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Da.test(t)&&Se(n)?!1:t in e}const It="transition",hr="animation",is=(e,{slots:t})=>N(Il,Jl(e),t);is.displayName="Transition";const Ql={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ap=is.props=Te({},Il.props,Ql),ln=(e,t=[])=>{G(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ka=e=>e?G(e)?e.some(t=>t.length>1):e.length>1:!1;function Jl(e){const t={};for(const P in e)P in Ql||(t[P]=e[P]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:s=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=i,appearToClass:l=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,h=Sp(o),b=h&&h[0],w=h&&h[1],{onBeforeEnter:y,onEnter:E,onEnterCancelled:$,onLeave:v,onLeaveCancelled:A,onBeforeAppear:M=y,onAppear:z=E,onAppearCancelled:k=$}=t,U=(P,te,Ee)=>{Ft(P,te?l:a),Ft(P,te?u:i),Ee&&Ee()},q=(P,te)=>{P._isLeaving=!1,Ft(P,f),Ft(P,g),Ft(P,d),te&&te()},ie=P=>(te,Ee)=>{const ke=P?z:E,ye=()=>U(te,P,Ee);ln(ke,[te,ye]),Wa(()=>{Ft(te,P?c:s),Et(te,P?l:a),Ka(ke)||Va(te,r,b,ye)})};return Te(t,{onBeforeEnter(P){ln(y,[P]),Et(P,s),Et(P,i)},onBeforeAppear(P){ln(M,[P]),Et(P,c),Et(P,u)},onEnter:ie(!1),onAppear:ie(!0),onLeave(P,te){P._isLeaving=!0;const Ee=()=>q(P,te);Et(P,f),tu(),Et(P,d),Wa(()=>{!P._isLeaving||(Ft(P,f),Et(P,g),Ka(v)||Va(P,r,w,Ee))}),ln(v,[P,Ee])},onEnterCancelled(P){U(P,!1),ln($,[P])},onAppearCancelled(P){U(P,!0),ln(k,[P])},onLeaveCancelled(P){q(P),ln(A,[P])}})}function Sp(e){if(e==null)return null;if(ve(e))return[As(e.enter),As(e.leave)];{const t=As(e);return[t,t]}}function As(e){return $o(e)}function Et(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Ft(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Wa(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let $p=0;function Va(e,t,n,r){const o=e._endId=++$p,s=()=>{o===e._endId&&r()};if(n)return setTimeout(s,n);const{type:i,timeout:a,propCount:c}=eu(e,t);if(!i)return r();const u=i+"end";let l=0;const f=()=>{e.removeEventListener(u,d),s()},d=g=>{g.target===e&&++l>=c&&f()};setTimeout(()=>{l<c&&f()},a+1),e.addEventListener(u,d)}function eu(e,t){const n=window.getComputedStyle(e),r=h=>(n[h]||"").split(", "),o=r(It+"Delay"),s=r(It+"Duration"),i=qa(o,s),a=r(hr+"Delay"),c=r(hr+"Duration"),u=qa(a,c);let l=null,f=0,d=0;t===It?i>0&&(l=It,f=i,d=s.length):t===hr?u>0&&(l=hr,f=u,d=c.length):(f=Math.max(i,u),l=f>0?i>u?It:hr:null,d=l?l===It?s.length:c.length:0);const g=l===It&&/\b(transform|all)(,|$)/.test(n[It+"Property"]);return{type:l,timeout:f,propCount:d,hasTransform:g}}function qa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Ga(n)+Ga(e[r])))}function Ga(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function tu(){return document.body.offsetHeight}const nu=new WeakMap,ru=new WeakMap,Tp={name:"TransitionGroup",props:Te({},Ap,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Zl(),r=Rl();let o,s;return Ll(()=>{if(!o.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Pp(o[0].el,n.vnode.el,i))return;o.forEach(Op),o.forEach(Rp);const a=o.filter(Ip);tu(),a.forEach(c=>{const u=c.el,l=u.style;Et(u,i),l.transform=l.webkitTransform=l.transitionDuration="";const f=u._moveCb=d=>{d&&d.target!==u||(!d||/transform$/.test(d.propertyName))&&(u.removeEventListener("transitionend",f),u._moveCb=null,Ft(u,i))};u.addEventListener("transitionend",f)})}),()=>{const i=le(e),a=Jl(i);let c=i.tag||ze;o=s,s=t.default?Ii(t.default()):[];for(let u=0;u<s.length;u++){const l=s[u];l.key!=null&&Mr(l,jr(l,a,r,n))}if(o)for(let u=0;u<o.length;u++){const l=o[u];Mr(l,jr(l,a,r,n)),nu.set(l,l.el.getBoundingClientRect())}return Re(c,null,s)}}},kp=Tp;function Op(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Rp(e){ru.set(e,e.el.getBoundingClientRect())}function Ip(e){const t=nu.get(e),n=ru.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${o}px)`,s.transitionDuration="0s",e}}function Pp(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(i=>i&&r.classList.add(i)),r.style.display="none";const o=t.nodeType===1?t:t.parentNode;o.appendChild(r);const{hasTransform:s}=eu(r);return o.removeChild(r),s}const Za=e=>{const t=e.props["onUpdate:modelValue"]||!1;return G(t)?n=>_o(t,n):t};function Hp(e){e.target.composing=!0}function Ya(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Zx={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e._assign=Za(o);const s=r||o.props&&o.props.type==="number";Hn(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),s&&(a=$o(a)),e._assign(a)}),n&&Hn(e,"change",()=>{e.value=e.value.trim()}),t||(Hn(e,"compositionstart",Hp),Hn(e,"compositionend",Ya),Hn(e,"change",Ya))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:o}},s){if(e._assign=Za(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(o||e.type==="number")&&$o(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},Yx={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):pr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),pr(e,!0),r.enter(e)):r.leave(e,()=>{pr(e,!1)}):pr(e,t))},beforeUnmount(e,{value:t}){pr(e,t)}};function pr(e,t){e.style.display=t?e._vod:"none"}const Lp=Te({patchProp:_p},up);let Xa;function Bp(){return Xa||(Xa=zh(Lp))}const jp=(...e)=>{const t=Bp().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=Mp(r);if(!o)return;const s=t._component;!Y(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function Mp(e){return Se(e)?document.querySelector(e):e}const Qa={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},or="^\\s*",sr="\\s*$",mn="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",bn="([0-9A-Fa-f])",yn="([0-9A-Fa-f]{2})",Up=new RegExp(`${or}rgb\\s*\\(${mn},${mn},${mn}\\)${sr}`),Np=new RegExp(`${or}rgba\\s*\\(${mn},${mn},${mn},${mn}\\)${sr}`),Fp=new RegExp(`${or}#${bn}${bn}${bn}${sr}`),zp=new RegExp(`${or}#${yn}${yn}${yn}${sr}`),Dp=new RegExp(`${or}#${bn}${bn}${bn}${bn}${sr}`),Kp=new RegExp(`${or}#${yn}${yn}${yn}${yn}${sr}`);function Ue(e){return parseInt(e,16)}function Cn(e){try{let t;if(t=zp.exec(e))return[Ue(t[1]),Ue(t[2]),Ue(t[3]),1];if(t=Up.exec(e))return[Pe(t[1]),Pe(t[5]),Pe(t[9]),1];if(t=Np.exec(e))return[Pe(t[1]),Pe(t[5]),Pe(t[9]),$r(t[13])];if(t=Fp.exec(e))return[Ue(t[1]+t[1]),Ue(t[2]+t[2]),Ue(t[3]+t[3]),1];if(t=Kp.exec(e))return[Ue(t[1]),Ue(t[2]),Ue(t[3]),$r(Ue(t[4])/255)];if(t=Dp.exec(e))return[Ue(t[1]+t[1]),Ue(t[2]+t[2]),Ue(t[3]+t[3]),$r(Ue(t[4]+t[4])/255)];if(e in Qa)return Cn(Qa[e]);throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(t){throw t}}function Wp(e){return e>1?1:e<0?0:e}function Ys(e,t,n,r){return`rgba(${Pe(e)}, ${Pe(t)}, ${Pe(n)}, ${Wp(r)})`}function Ss(e,t,n,r,o){return Pe((e*t*(1-r)+n*r)/o)}function Vp(e,t){Array.isArray(e)||(e=Cn(e)),Array.isArray(t)||(t=Cn(t));const n=e[3],r=t[3],o=$r(n+r-n*r);return Ys(Ss(e[0],n,t[0],r,o),Ss(e[1],n,t[1],r,o),Ss(e[2],n,t[2],r,o),o)}function Xx(e,t){const[n,r,o,s=1]=Array.isArray(e)?e:Cn(e);return t.alpha?Ys(n,r,o,t.alpha):Ys(n,r,o,s)}function co(e,t){const[n,r,o,s=1]=Array.isArray(e)?e:Cn(e),{lightness:i=1,alpha:a=1}=t;return qp([n*i,r*i,o*i,s*a])}function $r(e){const t=Math.round(Number(e)*100)/100;return t>1?1:t<0?0:t}function Pe(e){const t=Math.round(Number(e));return t>255?255:t<0?0:t}function qp(e){const[t,n,r]=e;return 3 in e?`rgba(${Pe(t)}, ${Pe(n)}, ${Pe(r)}, ${$r(e[3])})`:`rgba(${Pe(t)}, ${Pe(n)}, ${Pe(r)}, 1)`}function Gp(e=8){return Math.random().toString(16).slice(2,2+e)}function Zp(e,t=[],n){const r={};return Object.getOwnPropertyNames(e).forEach(s=>{t.includes(s)||(r[s]=e[s])}),Object.assign(r,n)}const Yp=(e,...t)=>typeof e=="function"?e(...t):typeof e=="string"?Gs(e):typeof e=="number"?Gs(String(e)):null;function Xp(e,t){console.error(`[naive/${e}]: ${t}`)}function Qp(e,t){throw new Error(`[naive/${e}]: ${t}`)}function Qx(e){return e}function Jp(e){let t=0;for(let n=0;n<e.length;++n)e[n]==="&"&&++t;return t}const ou=/\s*,(?![^(]*\))\s*/g,e0=/\s+/g;function t0(e,t){const n=[];return t.split(ou).forEach(r=>{let o=Jp(r);if(o){if(o===1){e.forEach(i=>{n.push(r.replace("&",i))});return}}else{e.forEach(i=>{n.push((i&&i+" ")+r)});return}let s=[r];for(;o--;){const i=[];s.forEach(a=>{e.forEach(c=>{i.push(a.replace("&",c))})}),s=i}s.forEach(i=>n.push(i))}),n}function n0(e,t){const n=[];return t.split(ou).forEach(r=>{e.forEach(o=>{n.push((o&&o+" ")+r)})}),n}function r0(e){let t=[""];return e.forEach(n=>{n=n&&n.trim(),n&&(n.includes("&")?t=t0(t,n):t=n0(t,n))}),t.join(", ").replace(e0," ")}function Ja(e){if(!e)return;const t=e.parentElement;t&&t.removeChild(e)}function as(e){return document.querySelector(`style[cssr-id="${e}"]`)}function o0(e){const t=document.createElement("style");return t.setAttribute("cssr-id",e),t}function lo(e){return e?/^\s*@(s|m)/.test(e):!1}const s0=/[A-Z]/g;function su(e){return e.replace(s0,t=>"-"+t.toLowerCase())}function i0(e,t="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(n=>t+`  ${su(n[0])}: ${n[1]};`).join(`
`)+`
`+t+"}":`: ${e};`}function a0(e,t,n){return typeof e=="function"?e({context:t.context,props:n}):e}function ec(e,t,n,r){if(!t)return"";const o=a0(t,n,r);if(!o)return"";if(typeof o=="string")return`${e} {
${o}
}`;const s=Object.keys(o);if(s.length===0)return n.config.keepEmptyBlock?e+` {
}`:"";const i=e?[e+" {"]:[];return s.forEach(a=>{const c=o[a];if(a==="raw"){i.push(`
`+c+`
`);return}a=su(a),c!=null&&i.push(`  ${a}${i0(c)}`)}),e&&i.push("}"),i.join(`
`)}function Xs(e,t,n){!e||e.forEach(r=>{if(Array.isArray(r))Xs(r,t,n);else if(typeof r=="function"){const o=r(t);Array.isArray(o)?Xs(o,t,n):o&&n(o)}else r&&n(r)})}function iu(e,t,n,r,o,s){const i=e.$;let a="";if(!i||typeof i=="string")lo(i)?a=i:t.push(i);else if(typeof i=="function"){const l=i({context:r.context,props:o});lo(l)?a=l:t.push(l)}else if(i.before&&i.before(r.context),!i.$||typeof i.$=="string")lo(i.$)?a=i.$:t.push(i.$);else if(i.$){const l=i.$({context:r.context,props:o});lo(l)?a=l:t.push(l)}const c=r0(t),u=ec(c,e.props,r,o);a?(n.push(`${a} {`),s&&u&&s.insertRule(`${a} {
${u}
}
`)):(s&&u&&s.insertRule(u),!s&&u.length&&n.push(u)),e.children&&Xs(e.children,{context:r.context,props:o},l=>{if(typeof l=="string"){const f=ec(c,{raw:l},r,o);s?s.insertRule(f):n.push(f)}else iu(l,t,n,r,o,s)}),t.pop(),a&&n.push("}"),i&&i.after&&i.after(r.context)}function au(e,t,n,r=!1){const o=[];return iu(e,[],o,t,n,r?e.instance.__styleSheet:void 0),r?"":o.join(`

`)}function Fr(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function c0(e,t,n){const{els:r}=t;if(n===void 0)r.forEach(Ja),t.els=[];else{const o=as(n);o&&r.includes(o)&&(Ja(o),t.els=r.filter(s=>s!==o))}}function tc(e,t){e.push(t)}function l0(e,t,n,r,o,s,i,a,c){if(s&&!c){if(n===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const d=window.__cssrContext;d[n]||(d[n]=!0,au(t,e,r,s));return}let u;if(n===void 0&&(u=t.render(r),n=Fr(u)),c){c.adapter(n,u!=null?u:t.render(r));return}const l=as(n);if(l!==null&&!i)return l;const f=l!=null?l:o0(n);if(u===void 0&&(u=t.render(r)),f.textContent=u,l!==null)return l;if(a){const d=document.head.querySelector(`meta[name="${a}"]`);if(d)return document.head.insertBefore(f,d),tc(t.els,f),f}return o?document.head.insertBefore(f,document.head.querySelector("style, link")):document.head.appendChild(f),tc(t.els,f),f}function u0(e){return au(this,this.instance,e)}function f0(e={}){const{id:t,ssr:n,props:r,head:o=!1,silent:s=!1,force:i=!1,anchorMetaName:a}=e;return l0(this.instance,this,t,r,o,s,i,a,n)}function d0(e={}){const{id:t}=e;c0(this.instance,this,t)}const uo=function(e,t,n,r){return{instance:e,$:t,props:n,children:r,els:[],render:u0,mount:f0,unmount:d0}},h0=function(e,t,n,r){return Array.isArray(t)?uo(e,{$:null},null,t):Array.isArray(n)?uo(e,t,null,n):Array.isArray(r)?uo(e,t,n,r):uo(e,t,n,null)};function p0(e={}){let t=null;const n={c:(...r)=>h0(n,...r),use:(r,...o)=>r.install(n,...o),find:as,context:{},config:e,get __styleSheet(){if(!t){const r=document.createElement("style");return document.head.appendChild(r),t=document.styleSheets[document.styleSheets.length-1],t}return t}};return n}function g0(e,t){if(e===void 0)return!1;if(t){const{context:{ids:n}}=t;return n.has(e)}return as(e)!==null}function m0(e){let t=".",n="__",r="--",o;if(e){let h=e.blockPrefix;h&&(t=h),h=e.elementPrefix,h&&(n=h),h=e.modifierPrefix,h&&(r=h)}const s={install(h){o=h.c;const b=h.context;b.bem={},b.bem.b=null,b.bem.els=null}};function i(h){let b,w;return{before(y){b=y.bem.b,w=y.bem.els,y.bem.els=null},after(y){y.bem.b=b,y.bem.els=w},$({context:y,props:E}){return h=typeof h=="string"?h:h({context:y,props:E}),y.bem.b=h,`${(E==null?void 0:E.bPrefix)||t}${y.bem.b}`}}}function a(h){let b;return{before(w){b=w.bem.els},after(w){w.bem.els=b},$({context:w,props:y}){return h=typeof h=="string"?h:h({context:w,props:y}),w.bem.els=h.split(",").map(E=>E.trim()),w.bem.els.map(E=>`${(y==null?void 0:y.bPrefix)||t}${w.bem.b}${n}${E}`).join(", ")}}}function c(h){return{$({context:b,props:w}){h=typeof h=="string"?h:h({context:b,props:w});const y=h.split(",").map(v=>v.trim());function E(v){return y.map(A=>`&${(w==null?void 0:w.bPrefix)||t}${b.bem.b}${v!==void 0?`${n}${v}`:""}${r}${A}`).join(", ")}const $=b.bem.els;return $!==null?E($[0]):E()}}}function u(h){return{$({context:b,props:w}){h=typeof h=="string"?h:h({context:b,props:w});const y=b.bem.els;return`&:not(${(w==null?void 0:w.bPrefix)||t}${b.bem.b}${y!==null&&y.length>0?`${n}${y[0]}`:""}${r}${h})`}}}return Object.assign(s,{cB:(...h)=>o(i(h[0]),h[1],h[2]),cE:(...h)=>o(a(h[0]),h[1],h[2]),cM:(...h)=>o(c(h[0]),h[1],h[2]),cNotM:(...h)=>o(u(h[0]),h[1],h[2])}),s}function _t(e,t){return e+(t==="default"?"":t.replace(/^[a-z]/,n=>n.toUpperCase()))}_t("abc","def");const b0="n",zr=`.${b0}-`,y0="__",w0="--",cu=p0(),lu=m0({blockPrefix:zr,elementPrefix:y0,modifierPrefix:w0});cu.use(lu);const{c:ce,find:Jx}=cu,{cB:En,cE:Fe,cM:pt,cNotM:v0}=lu;function e2(e){return ce(({props:{bPrefix:t}})=>`${t||zr}modal, ${t||zr}drawer`,[e])}function t2(e){return ce(({props:{bPrefix:t}})=>`${t||zr}popover`,[e])}function n2(e){return ce(({props:{bPrefix:t}})=>`&${t||zr}modal`,e)}const r2=(...e)=>ce(">",[En(...e)]);function nc(e){const t=ae(e),n=tn(t.value);return _r(t,r=>{n.value=r}),typeof e=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(r){e.set(r)}}}function x0(){const e=tn(!1);return rs(()=>{e.value=!0}),Ai(e)}const uu=Symbol("@css-render/vue3-ssr");function E0(e,t){return`<style cssr-id="${e}">
${t}
</style>`}function _0(e,t){const n=Ae(uu,null);if(n===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:r,ids:o}=n;o.has(e)||r!==null&&(o.add(e),r.push(E0(e,t)))}const C0=typeof document<"u";function cs(){if(C0)return;const e=Ae(uu,null);if(e!==null)return{adapter:_0,context:e}}var A0=typeof global=="object"&&global&&global.Object===Object&&global;const fu=A0;var S0=typeof self=="object"&&self&&self.Object===Object&&self,$0=fu||S0||Function("return this")();const ir=$0;var T0=ir.Symbol;const Kn=T0;var du=Object.prototype,k0=du.hasOwnProperty,O0=du.toString,gr=Kn?Kn.toStringTag:void 0;function R0(e){var t=k0.call(e,gr),n=e[gr];try{e[gr]=void 0;var r=!0}catch{}var o=O0.call(e);return r&&(t?e[gr]=n:delete e[gr]),o}var I0=Object.prototype,P0=I0.toString;function H0(e){return P0.call(e)}var L0="[object Null]",B0="[object Undefined]",rc=Kn?Kn.toStringTag:void 0;function Gr(e){return e==null?e===void 0?B0:L0:rc&&rc in Object(e)?R0(e):H0(e)}function ar(e){return e!=null&&typeof e=="object"}var j0="[object Symbol]";function M0(e){return typeof e=="symbol"||ar(e)&&Gr(e)==j0}function U0(e,t){for(var n=-1,r=e==null?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}var N0=Array.isArray;const Ho=N0;var F0=1/0,oc=Kn?Kn.prototype:void 0,sc=oc?oc.toString:void 0;function hu(e){if(typeof e=="string")return e;if(Ho(e))return U0(e,hu)+"";if(M0(e))return sc?sc.call(e):"";var t=e+"";return t=="0"&&1/e==-F0?"-0":t}function Tn(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function pu(e){return e}var z0="[object AsyncFunction]",D0="[object Function]",K0="[object GeneratorFunction]",W0="[object Proxy]";function Fi(e){if(!Tn(e))return!1;var t=Gr(e);return t==D0||t==K0||t==z0||t==W0}var V0=ir["__core-js_shared__"];const $s=V0;var ic=function(){var e=/[^.]+$/.exec($s&&$s.keys&&$s.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function q0(e){return!!ic&&ic in e}var G0=Function.prototype,Z0=G0.toString;function Y0(e){if(e!=null){try{return Z0.call(e)}catch{}try{return e+""}catch{}}return""}var X0=/[\\^$.*+?()[\]{}|]/g,Q0=/^\[object .+?Constructor\]$/,J0=Function.prototype,eg=Object.prototype,tg=J0.toString,ng=eg.hasOwnProperty,rg=RegExp("^"+tg.call(ng).replace(X0,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function og(e){if(!Tn(e)||q0(e))return!1;var t=Fi(e)?rg:Q0;return t.test(Y0(e))}function sg(e,t){return e==null?void 0:e[t]}function zi(e,t){var n=sg(e,t);return og(n)?n:void 0}var ac=Object.create,ig=function(){function e(){}return function(t){if(!Tn(t))return{};if(ac)return ac(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const ag=ig;function cg(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function lg(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}var ug=800,fg=16,dg=Date.now;function hg(e){var t=0,n=0;return function(){var r=dg(),o=fg-(r-n);if(n=r,o>0){if(++t>=ug)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function pg(e){return function(){return e}}var gg=function(){try{var e=zi(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Lo=gg;var mg=Lo?function(e,t){return Lo(e,"toString",{configurable:!0,enumerable:!1,value:pg(t),writable:!0})}:pu;const bg=mg;var yg=hg(bg);const wg=yg;var vg=9007199254740991,xg=/^(?:0|[1-9]\d*)$/;function gu(e,t){var n=typeof e;return t=t==null?vg:t,!!t&&(n=="number"||n!="symbol"&&xg.test(e))&&e>-1&&e%1==0&&e<t}function Di(e,t,n){t=="__proto__"&&Lo?Lo(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ls(e,t){return e===t||e!==e&&t!==t}var Eg=Object.prototype,_g=Eg.hasOwnProperty;function Cg(e,t,n){var r=e[t];(!(_g.call(e,t)&&ls(r,n))||n===void 0&&!(t in e))&&Di(e,t,n)}function Ag(e,t,n,r){var o=!n;n||(n={});for(var s=-1,i=t.length;++s<i;){var a=t[s],c=r?r(n[a],e[a],a,n,e):void 0;c===void 0&&(c=e[a]),o?Di(n,a,c):Cg(n,a,c)}return n}var cc=Math.max;function Sg(e,t,n){return t=cc(t===void 0?e.length-1:t,0),function(){for(var r=arguments,o=-1,s=cc(r.length-t,0),i=Array(s);++o<s;)i[o]=r[t+o];o=-1;for(var a=Array(t+1);++o<t;)a[o]=r[o];return a[t]=n(i),cg(e,this,a)}}function $g(e,t){return wg(Sg(e,t,pu),e+"")}var Tg=9007199254740991;function mu(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Tg}function Ki(e){return e!=null&&mu(e.length)&&!Fi(e)}function kg(e,t,n){if(!Tn(n))return!1;var r=typeof t;return(r=="number"?Ki(n)&&gu(t,n.length):r=="string"&&t in n)?ls(n[t],e):!1}function Og(e){return $g(function(t,n){var r=-1,o=n.length,s=o>1?n[o-1]:void 0,i=o>2?n[2]:void 0;for(s=e.length>3&&typeof s=="function"?(o--,s):void 0,i&&kg(n[0],n[1],i)&&(s=o<3?void 0:s,o=1),t=Object(t);++r<o;){var a=n[r];a&&e(t,a,r,s)}return t})}var Rg=Object.prototype;function bu(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||Rg;return e===n}function Ig(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Pg="[object Arguments]";function lc(e){return ar(e)&&Gr(e)==Pg}var yu=Object.prototype,Hg=yu.hasOwnProperty,Lg=yu.propertyIsEnumerable,Bg=lc(function(){return arguments}())?lc:function(e){return ar(e)&&Hg.call(e,"callee")&&!Lg.call(e,"callee")};const Qs=Bg;function jg(){return!1}var wu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,uc=wu&&typeof module=="object"&&module&&!module.nodeType&&module,Mg=uc&&uc.exports===wu,fc=Mg?ir.Buffer:void 0,Ug=fc?fc.isBuffer:void 0,Ng=Ug||jg;const vu=Ng;var Fg="[object Arguments]",zg="[object Array]",Dg="[object Boolean]",Kg="[object Date]",Wg="[object Error]",Vg="[object Function]",qg="[object Map]",Gg="[object Number]",Zg="[object Object]",Yg="[object RegExp]",Xg="[object Set]",Qg="[object String]",Jg="[object WeakMap]",em="[object ArrayBuffer]",tm="[object DataView]",nm="[object Float32Array]",rm="[object Float64Array]",om="[object Int8Array]",sm="[object Int16Array]",im="[object Int32Array]",am="[object Uint8Array]",cm="[object Uint8ClampedArray]",lm="[object Uint16Array]",um="[object Uint32Array]",we={};we[nm]=we[rm]=we[om]=we[sm]=we[im]=we[am]=we[cm]=we[lm]=we[um]=!0;we[Fg]=we[zg]=we[em]=we[Dg]=we[tm]=we[Kg]=we[Wg]=we[Vg]=we[qg]=we[Gg]=we[Zg]=we[Yg]=we[Xg]=we[Qg]=we[Jg]=!1;function fm(e){return ar(e)&&mu(e.length)&&!!we[Gr(e)]}function dm(e){return function(t){return e(t)}}var xu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Tr=xu&&typeof module=="object"&&module&&!module.nodeType&&module,hm=Tr&&Tr.exports===xu,Ts=hm&&fu.process,pm=function(){try{var e=Tr&&Tr.require&&Tr.require("util").types;return e||Ts&&Ts.binding&&Ts.binding("util")}catch{}}();const dc=pm;var hc=dc&&dc.isTypedArray,gm=hc?dm(hc):fm;const Eu=gm;var mm=Object.prototype,bm=mm.hasOwnProperty;function ym(e,t){var n=Ho(e),r=!n&&Qs(e),o=!n&&!r&&vu(e),s=!n&&!r&&!o&&Eu(e),i=n||r||o||s,a=i?Ig(e.length,String):[],c=a.length;for(var u in e)(t||bm.call(e,u))&&!(i&&(u=="length"||o&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||gu(u,c)))&&a.push(u);return a}function wm(e,t){return function(n){return e(t(n))}}function vm(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var xm=Object.prototype,Em=xm.hasOwnProperty;function _m(e){if(!Tn(e))return vm(e);var t=bu(e),n=[];for(var r in e)r=="constructor"&&(t||!Em.call(e,r))||n.push(r);return n}function _u(e){return Ki(e)?ym(e,!0):_m(e)}var Cm=zi(Object,"create");const Dr=Cm;function Am(){this.__data__=Dr?Dr(null):{},this.size=0}function Sm(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var $m="__lodash_hash_undefined__",Tm=Object.prototype,km=Tm.hasOwnProperty;function Om(e){var t=this.__data__;if(Dr){var n=t[e];return n===$m?void 0:n}return km.call(t,e)?t[e]:void 0}var Rm=Object.prototype,Im=Rm.hasOwnProperty;function Pm(e){var t=this.__data__;return Dr?t[e]!==void 0:Im.call(t,e)}var Hm="__lodash_hash_undefined__";function Lm(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Dr&&t===void 0?Hm:t,this}function An(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}An.prototype.clear=Am;An.prototype.delete=Sm;An.prototype.get=Om;An.prototype.has=Pm;An.prototype.set=Lm;function Bm(){this.__data__=[],this.size=0}function us(e,t){for(var n=e.length;n--;)if(ls(e[n][0],t))return n;return-1}var jm=Array.prototype,Mm=jm.splice;function Um(e){var t=this.__data__,n=us(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Mm.call(t,n,1),--this.size,!0}function Nm(e){var t=this.__data__,n=us(t,e);return n<0?void 0:t[n][1]}function Fm(e){return us(this.__data__,e)>-1}function zm(e,t){var n=this.__data__,r=us(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function kt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}kt.prototype.clear=Bm;kt.prototype.delete=Um;kt.prototype.get=Nm;kt.prototype.has=Fm;kt.prototype.set=zm;var Dm=zi(ir,"Map");const Cu=Dm;function Km(){this.size=0,this.__data__={hash:new An,map:new(Cu||kt),string:new An}}function Wm(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function fs(e,t){var n=e.__data__;return Wm(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Vm(e){var t=fs(this,e).delete(e);return this.size-=t?1:0,t}function qm(e){return fs(this,e).get(e)}function Gm(e){return fs(this,e).has(e)}function Zm(e,t){var n=fs(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function cr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}cr.prototype.clear=Km;cr.prototype.delete=Vm;cr.prototype.get=qm;cr.prototype.has=Gm;cr.prototype.set=Zm;function Ym(e){return e==null?"":hu(e)}var Xm=wm(Object.getPrototypeOf,Object);const Au=Xm;var Qm="[object Object]",Jm=Function.prototype,eb=Object.prototype,Su=Jm.toString,tb=eb.hasOwnProperty,nb=Su.call(Object);function rb(e){if(!ar(e)||Gr(e)!=Qm)return!1;var t=Au(e);if(t===null)return!0;var n=tb.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Su.call(n)==nb}function ob(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var s=Array(o);++r<o;)s[r]=e[r+t];return s}function sb(e,t,n){var r=e.length;return n=n===void 0?r:n,!t&&n>=r?e:ob(e,t,n)}var ib="\\ud800-\\udfff",ab="\\u0300-\\u036f",cb="\\ufe20-\\ufe2f",lb="\\u20d0-\\u20ff",ub=ab+cb+lb,fb="\\ufe0e\\ufe0f",db="\\u200d",hb=RegExp("["+db+ib+ub+fb+"]");function $u(e){return hb.test(e)}function pb(e){return e.split("")}var Tu="\\ud800-\\udfff",gb="\\u0300-\\u036f",mb="\\ufe20-\\ufe2f",bb="\\u20d0-\\u20ff",yb=gb+mb+bb,wb="\\ufe0e\\ufe0f",vb="["+Tu+"]",Js="["+yb+"]",ei="\\ud83c[\\udffb-\\udfff]",xb="(?:"+Js+"|"+ei+")",ku="[^"+Tu+"]",Ou="(?:\\ud83c[\\udde6-\\uddff]){2}",Ru="[\\ud800-\\udbff][\\udc00-\\udfff]",Eb="\\u200d",Iu=xb+"?",Pu="["+wb+"]?",_b="(?:"+Eb+"(?:"+[ku,Ou,Ru].join("|")+")"+Pu+Iu+")*",Cb=Pu+Iu+_b,Ab="(?:"+[ku+Js+"?",Js,Ou,Ru,vb].join("|")+")",Sb=RegExp(ei+"(?="+ei+")|"+Ab+Cb,"g");function $b(e){return e.match(Sb)||[]}function Tb(e){return $u(e)?$b(e):pb(e)}function kb(e){return function(t){t=Ym(t);var n=$u(t)?Tb(t):void 0,r=n?n[0]:t.charAt(0),o=n?sb(n,1).join(""):t.slice(1);return r[e]()+o}}var Ob=kb("toUpperCase");const Rb=Ob;function Ib(){this.__data__=new kt,this.size=0}function Pb(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Hb(e){return this.__data__.get(e)}function Lb(e){return this.__data__.has(e)}var Bb=200;function jb(e,t){var n=this.__data__;if(n instanceof kt){var r=n.__data__;if(!Cu||r.length<Bb-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new cr(r)}return n.set(e,t),this.size=n.size,this}function lr(e){var t=this.__data__=new kt(e);this.size=t.size}lr.prototype.clear=Ib;lr.prototype.delete=Pb;lr.prototype.get=Hb;lr.prototype.has=Lb;lr.prototype.set=jb;var Hu=typeof exports=="object"&&exports&&!exports.nodeType&&exports,pc=Hu&&typeof module=="object"&&module&&!module.nodeType&&module,Mb=pc&&pc.exports===Hu,gc=Mb?ir.Buffer:void 0,mc=gc?gc.allocUnsafe:void 0;function Ub(e,t){if(t)return e.slice();var n=e.length,r=mc?mc(n):new e.constructor(n);return e.copy(r),r}var Nb=ir.Uint8Array;const bc=Nb;function Fb(e){var t=new e.constructor(e.byteLength);return new bc(t).set(new bc(e)),t}function zb(e,t){var n=t?Fb(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Db(e){return typeof e.constructor=="function"&&!bu(e)?ag(Au(e)):{}}function Kb(e){return function(t,n,r){for(var o=-1,s=Object(t),i=r(t),a=i.length;a--;){var c=i[e?a:++o];if(n(s[c],c,s)===!1)break}return t}}var Wb=Kb();const Vb=Wb;function ti(e,t,n){(n!==void 0&&!ls(e[t],n)||n===void 0&&!(t in e))&&Di(e,t,n)}function qb(e){return ar(e)&&Ki(e)}function ni(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function Gb(e){return Ag(e,_u(e))}function Zb(e,t,n,r,o,s,i){var a=ni(e,n),c=ni(t,n),u=i.get(c);if(u){ti(e,n,u);return}var l=s?s(a,c,n+"",e,t,i):void 0,f=l===void 0;if(f){var d=Ho(c),g=!d&&vu(c),h=!d&&!g&&Eu(c);l=c,d||g||h?Ho(a)?l=a:qb(a)?l=lg(a):g?(f=!1,l=Ub(c,!0)):h?(f=!1,l=zb(c,!0)):l=[]:rb(c)||Qs(c)?(l=a,Qs(a)?l=Gb(a):(!Tn(a)||Fi(a))&&(l=Db(c))):f=!1}f&&(i.set(c,l),o(l,c,r,s,i),i.delete(c)),ti(e,n,l)}function Lu(e,t,n,r,o){e!==t&&Vb(t,function(s,i){if(o||(o=new lr),Tn(s))Zb(e,t,i,n,Lu,r,o);else{var a=r?r(ni(e,i),s,i+"",e,t,o):void 0;a===void 0&&(a=s),ti(e,i,a)}},_u)}var Yb=Og(function(e,t,n){Lu(e,t,n)});const vr=Yb,ds={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:Xb,fontFamily:Qb,lineHeight:Jb}=ds,Bu=ce("body",`
 margin: 0;
 font-size: ${Xb};
 font-family: ${Qb};
 line-height: ${Jb};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[ce("input",`
 font-family: inherit;
 font-size: inherit;
 `)]),Sn="n-config-provider",Kr="naive-ui-style";function o2(e){return e}function Wi(e,t,n,r,o,s){const i=cs(),a=Ae(Sn,null);if(n){const u=()=>{const l=s==null?void 0:s.value;n.mount({id:l===void 0?t:l+t,head:!0,props:{bPrefix:l?`.${l}-`:void 0},anchorMetaName:Kr,ssr:i}),a!=null&&a.preflightStyleDisabled||Bu.mount({id:"n-global",head:!0,anchorMetaName:Kr,ssr:i})};i?u():ns(u)}return ae(()=>{var u;const{theme:{common:l,self:f,peers:d={}}={},themeOverrides:g={},builtinThemeOverrides:h={}}=o,{common:b,peers:w}=g,{common:y=void 0,[e]:{common:E=void 0,self:$=void 0,peers:v={}}={}}=(a==null?void 0:a.mergedThemeRef.value)||{},{common:A=void 0,[e]:M={}}=(a==null?void 0:a.mergedThemeOverridesRef.value)||{},{common:z,peers:k={}}=M,U=vr({},l||E||y||r.common,A,z,b),q=vr((u=f||$||r.self)===null||u===void 0?void 0:u(U),h,M,g);return{common:U,self:q,peers:vr({},r.peers,v,d),peerOverrides:vr({},h.peers,k,w)}})}Wi.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const ju="n";function Mu(e={},t={defaultBordered:!0}){const n=Ae(Sn,null);return{inlineThemeDisabled:n==null?void 0:n.inlineThemeDisabled,mergedRtlRef:n==null?void 0:n.mergedRtlRef,mergedComponentPropsRef:n==null?void 0:n.mergedComponentPropsRef,mergedBreakpointsRef:n==null?void 0:n.mergedBreakpointsRef,mergedBorderedRef:ae(()=>{var r,o;const{bordered:s}=e;return s!==void 0?s:(o=(r=n==null?void 0:n.mergedBorderedRef.value)!==null&&r!==void 0?r:t.defaultBordered)!==null&&o!==void 0?o:!0}),mergedClsPrefixRef:ae(()=>(n==null?void 0:n.mergedClsPrefixRef.value)||ju),namespaceRef:ae(()=>n==null?void 0:n.mergedNamespaceRef.value)}}function Vi(e,t,n){if(!t)return;const r=cs(),o=Ae(Sn,null),s=()=>{const i=n==null?void 0:n.value;t.mount({id:i===void 0?e:i+e,head:!0,anchorMetaName:Kr,props:{bPrefix:i?`.${i}-`:void 0},ssr:r}),o!=null&&o.preflightStyleDisabled||Bu.mount({id:"n-global",head:!0,anchorMetaName:Kr,ssr:r})};r?s():ns(s)}function ey(e,t,n,r){var o;n||Qp("useThemeClass","cssVarsRef is not passed");const s=(o=Ae(Sn,null))===null||o===void 0?void 0:o.mergedThemeHashRef,i=tn(""),a=cs();let c;const u=`__${e}`,l=()=>{let f=u;const d=t?t.value:void 0,g=s==null?void 0:s.value;g&&(f+="-"+g),d&&(f+="-"+d);const{themeOverrides:h,builtinThemeOverrides:b}=r;h&&(f+="-"+Fr(JSON.stringify(h))),b&&(f+="-"+Fr(JSON.stringify(b))),i.value=f,c=()=>{const w=n.value;let y="";for(const E in w)y+=`${E}: ${w[E]};`;ce(`.${f}`,y).mount({id:f,ssr:a}),c=void 0}};return kl(()=>{l()}),{themeClass:i,onRender:()=>{c==null||c()}}}function ty(e,t,n){if(!t)return;const r=cs(),o=ae(()=>{const{value:i}=t;if(!i)return;const a=i[e];if(!!a)return a}),s=()=>{kl(()=>{const{value:i}=n,a=`${i}${e}Rtl`;if(g0(a,r))return;const{value:c}=o;!c||c.style.mount({id:a,head:!0,anchorMetaName:Kr,props:{bPrefix:i?`.${i}-`:void 0},ssr:r})})};return r?s():ns(s),o}function Zr(e,t){return Ye({name:Rb(e),setup(){var n;const r=(n=Ae(Sn,null))===null||n===void 0?void 0:n.mergedIconsRef;return()=>{var o;const s=(o=r==null?void 0:r.value)===null||o===void 0?void 0:o[e];return s?s():t}}})}const ny=Zr("close",N("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},N("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},N("g",{fill:"currentColor","fill-rule":"nonzero"},N("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),ry=Zr("error",N("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},N("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},N("g",{"fill-rule":"nonzero"},N("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),oy=Zr("info",N("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},N("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},N("g",{"fill-rule":"nonzero"},N("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),sy=Zr("success",N("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},N("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},N("g",{"fill-rule":"nonzero"},N("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),iy=Zr("warning",N("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},N("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},N("g",{"fill-rule":"nonzero"},N("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),Uu=Ye({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const n=x0();return()=>N(is,{name:"icon-switch-transition",appear:n.value},t)}}),ay=Ye({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:t}){function n(a){e.width?a.style.maxWidth=`${a.offsetWidth}px`:a.style.maxHeight=`${a.offsetHeight}px`,a.offsetWidth}function r(a){e.width?a.style.maxWidth="0":a.style.maxHeight="0",a.offsetWidth;const{onLeave:c}=e;c&&c()}function o(a){e.width?a.style.maxWidth="":a.style.maxHeight="";const{onAfterLeave:c}=e;c&&c()}function s(a){if(a.style.transition="none",e.width){const c=a.offsetWidth;a.style.maxWidth="0",a.offsetWidth,a.style.transition="",a.style.maxWidth=`${c}px`}else if(e.reverse)a.style.maxHeight=`${a.offsetHeight}px`,a.offsetHeight,a.style.transition="",a.style.maxHeight="0";else{const c=a.offsetHeight;a.style.maxHeight="0",a.offsetWidth,a.style.transition="",a.style.maxHeight=`${c}px`}a.offsetWidth}function i(a){var c;e.width?a.style.maxWidth="":e.reverse||(a.style.maxHeight=""),(c=e.onAfterEnter)===null||c===void 0||c.call(e)}return()=>{const a=e.group?kp:is;return N(a,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:s,onAfterEnter:i,onBeforeLeave:n,onLeave:r,onAfterLeave:o},t)}}}),cy=En("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[ce("svg",`
 height: 1em;
 width: 1em;
 `)]),Nu=Ye({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){Vi("-base-icon",cy,Ti(e,"clsPrefix"))},render(){return N("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),ly=En("base-close",`
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
`,[pt("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),ce("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),v0("disabled",[ce("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),ce("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),ce("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),ce("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),ce("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),pt("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),pt("round",[ce("&::before",`
 border-radius: 50%;
 `)])]),uy=Ye({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return Vi("-base-close",ly,Ti(e,"clsPrefix")),()=>{const{clsPrefix:t,disabled:n,absolute:r,round:o,isButtonTag:s}=e;return N(s?"button":"div",{type:s?"button":void 0,tabindex:n||!e.focusable?-1:0,"aria-disabled":n,"aria-label":"close",role:s?void 0:"button",disabled:n,class:[`${t}-base-close`,r&&`${t}-base-close--absolute`,n&&`${t}-base-close--disabled`,o&&`${t}-base-close--round`],onMousedown:a=>{e.focusable||a.preventDefault()},onClick:e.onClick},N(Nu,{clsPrefix:t},{default:()=>N(ny,null)}))}}}),{cubicBezierEaseInOut:fy}=ds;function ri({originalTransform:e="",left:t=0,top:n=0,transition:r=`all .3s ${fy} !important`}={}){return[ce("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:t,top:n,opacity:0}),ce("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:n,opacity:1}),ce("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:n,transition:r})]}const dy=ce([ce("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),ce("@keyframes loading-layer-rotate",`
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
 `),ce("@keyframes loading-left-spin",`
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
 `),ce("@keyframes loading-right-spin",`
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
 `,[Fe("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[ri()]),Fe("container",`
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
 `,[Fe("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),Fe("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[Fe("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[Fe("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),Fe("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[Fe("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),Fe("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[Fe("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),Fe("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[ri({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),hy={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},py=Ye({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},hy),setup(e){Vi("-base-loading",dy,Ti(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:n,stroke:r,scale:o}=this,s=t/o;return N("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},N(Uu,null,{default:()=>this.show?N("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},N("div",{class:`${e}-base-loading__container`},N("div",{class:`${e}-base-loading__container-layer`},N("div",{class:`${e}-base-loading__container-layer-left`},N("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},N("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:t-n/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),N("div",{class:`${e}-base-loading__container-layer-patch`},N("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},N("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:t-n/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),N("div",{class:`${e}-base-loading__container-layer-right`},N("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},N("circle",{fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:t-n/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t})))))):N("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),V={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},gy=Cn(V.neutralBase),Fu=Cn(V.neutralInvertBase),my="rgba("+Fu.slice(0,3).join(", ")+", ";function yc(e){return my+String(e)+")"}function Ie(e){const t=Array.from(Fu);return t[3]=Number(e),Vp(gy,t)}const by=Object.assign(Object.assign({name:"common"},ds),{baseColor:V.neutralBase,primaryColor:V.primaryDefault,primaryColorHover:V.primaryHover,primaryColorPressed:V.primaryActive,primaryColorSuppl:V.primarySuppl,infoColor:V.infoDefault,infoColorHover:V.infoHover,infoColorPressed:V.infoActive,infoColorSuppl:V.infoSuppl,successColor:V.successDefault,successColorHover:V.successHover,successColorPressed:V.successActive,successColorSuppl:V.successSuppl,warningColor:V.warningDefault,warningColorHover:V.warningHover,warningColorPressed:V.warningActive,warningColorSuppl:V.warningSuppl,errorColor:V.errorDefault,errorColorHover:V.errorHover,errorColorPressed:V.errorActive,errorColorSuppl:V.errorSuppl,textColorBase:V.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:Ie(V.alpha4),placeholderColor:Ie(V.alpha4),placeholderColorDisabled:Ie(V.alpha5),iconColor:Ie(V.alpha4),iconColorHover:co(Ie(V.alpha4),{lightness:.75}),iconColorPressed:co(Ie(V.alpha4),{lightness:.9}),iconColorDisabled:Ie(V.alpha5),opacity1:V.alpha1,opacity2:V.alpha2,opacity3:V.alpha3,opacity4:V.alpha4,opacity5:V.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:Ie(Number(V.alphaClose)),closeIconColorHover:Ie(Number(V.alphaClose)),closeIconColorPressed:Ie(Number(V.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:Ie(V.alpha4),clearColorHover:co(Ie(V.alpha4),{lightness:.75}),clearColorPressed:co(Ie(V.alpha4),{lightness:.9}),scrollbarColor:yc(V.alphaScrollbar),scrollbarColorHover:yc(V.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:Ie(V.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:V.neutralPopover,tableColor:V.neutralCard,cardColor:V.neutralCard,modalColor:V.neutralModal,bodyColor:V.neutralBody,tagColor:"#eee",avatarColor:Ie(V.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:Ie(V.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:V.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),yy=by,{cubicBezierEaseInOut:dt,cubicBezierEaseOut:wy,cubicBezierEaseIn:vy}=ds;function xy({overflow:e="hidden",duration:t=".3s",originalTransition:n="",leavingDelay:r="0s",foldPadding:o=!1,enterToProps:s=void 0,leaveToProps:i=void 0,reverse:a=!1}={}){const c=a?"leave":"enter",u=a?"enter":"leave";return[ce(`&.fade-in-height-expand-transition-${u}-from,
 &.fade-in-height-expand-transition-${c}-to`,Object.assign(Object.assign({},s),{opacity:1})),ce(`&.fade-in-height-expand-transition-${u}-to,
 &.fade-in-height-expand-transition-${c}-from`,Object.assign(Object.assign({},i),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:o?"0 !important":void 0,paddingBottom:o?"0 !important":void 0})),ce(`&.fade-in-height-expand-transition-${u}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${dt} ${r},
 opacity ${t} ${wy} ${r},
 margin-top ${t} ${dt} ${r},
 margin-bottom ${t} ${dt} ${r},
 padding-top ${t} ${dt} ${r},
 padding-bottom ${t} ${dt} ${r}
 ${n?","+n:""}
 `),ce(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${dt},
 opacity ${t} ${vy},
 margin-top ${t} ${dt},
 margin-bottom ${t} ${dt},
 padding-top ${t} ${dt},
 padding-bottom ${t} ${dt}
 ${n?","+n:""}
 `)]}const Ey={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(Xp("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},_y=Ye({name:"ConfigProvider",alias:["App"],props:Ey,setup(e){const t=Ae(Sn,null),n=ae(()=>{const{theme:h}=e;if(h===null)return;const b=t==null?void 0:t.mergedThemeRef.value;return h===void 0?b:b===void 0?h:Object.assign({},b,h)}),r=ae(()=>{const{themeOverrides:h}=e;if(h!==null){if(h===void 0)return t==null?void 0:t.mergedThemeOverridesRef.value;{const b=t==null?void 0:t.mergedThemeOverridesRef.value;return b===void 0?h:vr({},b,h)}}}),o=nc(()=>{const{namespace:h}=e;return h===void 0?t==null?void 0:t.mergedNamespaceRef.value:h}),s=nc(()=>{const{bordered:h}=e;return h===void 0?t==null?void 0:t.mergedBorderedRef.value:h}),i=ae(()=>{const{icons:h}=e;return h===void 0?t==null?void 0:t.mergedIconsRef.value:h}),a=ae(()=>{const{componentOptions:h}=e;return h!==void 0?h:t==null?void 0:t.mergedComponentPropsRef.value}),c=ae(()=>{const{clsPrefix:h}=e;return h!==void 0?h:t==null?void 0:t.mergedClsPrefixRef.value}),u=ae(()=>{var h;const{rtl:b}=e;if(b===void 0)return t==null?void 0:t.mergedRtlRef.value;const w={};for(const y of b)w[y.name]=ko(y),(h=y.peers)===null||h===void 0||h.forEach(E=>{E.name in w||(w[E.name]=ko(E))});return w}),l=ae(()=>e.breakpoints||(t==null?void 0:t.mergedBreakpointsRef.value)),f=e.inlineThemeDisabled||(t==null?void 0:t.inlineThemeDisabled),d=e.preflightStyleDisabled||(t==null?void 0:t.preflightStyleDisabled),g=ae(()=>{const{value:h}=n,{value:b}=r,w=b&&Object.keys(b).length!==0,y=h==null?void 0:h.name;return y?w?`${y}-${Fr(JSON.stringify(r.value))}`:y:w?Fr(JSON.stringify(r.value)):""});return vn(Sn,{mergedThemeHashRef:g,mergedBreakpointsRef:l,mergedRtlRef:u,mergedIconsRef:i,mergedComponentPropsRef:a,mergedBorderedRef:s,mergedNamespaceRef:o,mergedClsPrefixRef:c,mergedLocaleRef:ae(()=>{const{locale:h}=e;if(h!==null)return h===void 0?t==null?void 0:t.mergedLocaleRef.value:h}),mergedDateLocaleRef:ae(()=>{const{dateLocale:h}=e;if(h!==null)return h===void 0?t==null?void 0:t.mergedDateLocaleRef.value:h}),mergedHljsRef:ae(()=>{const{hljs:h}=e;return h===void 0?t==null?void 0:t.mergedHljsRef.value:h}),mergedKatexRef:ae(()=>{const{katex:h}=e;return h===void 0?t==null?void 0:t.mergedKatexRef.value:h}),mergedThemeRef:n,mergedThemeOverridesRef:r,inlineThemeDisabled:f||!1,preflightStyleDisabled:d||!1}),{mergedClsPrefix:c,mergedBordered:s,mergedNamespace:o,mergedTheme:n,mergedThemeOverrides:r}},render(){var e,t,n,r;return this.abstract?(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n):N(this.as||this.tag,{class:`${this.mergedClsPrefix||ju}-config-provider`},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}});function ur(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}const Cy={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"},Ay=e=>{const{textColor2:t,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:o,infoColor:s,successColor:i,errorColor:a,warningColor:c,popoverColor:u,boxShadow2:l,primaryColor:f,lineHeight:d,borderRadius:g,closeColorHover:h,closeColorPressed:b}=e;return Object.assign(Object.assign({},Cy),{closeBorderRadius:g,textColor:t,textColorInfo:t,textColorSuccess:t,textColorError:t,textColorWarning:t,textColorLoading:t,color:u,colorInfo:u,colorSuccess:u,colorError:u,colorWarning:u,colorLoading:u,boxShadow:l,boxShadowInfo:l,boxShadowSuccess:l,boxShadowError:l,boxShadowWarning:l,boxShadowLoading:l,iconColor:t,iconColorInfo:s,iconColorSuccess:i,iconColorWarning:c,iconColorError:a,iconColorLoading:f,closeColorHover:h,closeColorPressed:b,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:o,closeColorHoverInfo:h,closeColorPressedInfo:b,closeIconColorInfo:n,closeIconColorHoverInfo:r,closeIconColorPressedInfo:o,closeColorHoverSuccess:h,closeColorPressedSuccess:b,closeIconColorSuccess:n,closeIconColorHoverSuccess:r,closeIconColorPressedSuccess:o,closeColorHoverError:h,closeColorPressedError:b,closeIconColorError:n,closeIconColorHoverError:r,closeIconColorPressedError:o,closeColorHoverWarning:h,closeColorPressedWarning:b,closeIconColorWarning:n,closeIconColorHoverWarning:r,closeIconColorPressedWarning:o,closeColorHoverLoading:h,closeColorPressedLoading:b,closeIconColorLoading:n,closeIconColorHoverLoading:r,closeIconColorPressedLoading:o,loadingColor:f,lineHeight:d,borderRadius:g})},Sy={name:"Message",common:yy,self:Ay},$y=Sy,zu={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},Ty="n-message-api",Du="n-message-provider",ky=ce([En("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[xy({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),En("message",`
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
 `,[Fe("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),Fe("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(e=>pt(`${e}-type`,[ce("> *",`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),ce("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[ri()])]),Fe("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[ce("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),ce("&:active",`
 color: var(--n-close-icon-color-pressed);
 `)])]),En("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[pt("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),pt("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),pt("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),pt("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),pt("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),pt("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]),Oy={info:()=>N(oy,null),success:()=>N(sy,null),warning:()=>N(iy,null),error:()=>N(ry,null),default:()=>null},Ry=Ye({name:"Message",props:Object.assign(Object.assign({},zu),{render:Function}),setup(e){const{inlineThemeDisabled:t,mergedRtlRef:n}=Mu(e),{props:r,mergedClsPrefixRef:o}=Ae(Du),s=ty("Message",n,o),i=Wi("Message","-message",ky,$y,r,o),a=ae(()=>{const{type:u}=e,{common:{cubicBezierEaseInOut:l},self:{padding:f,margin:d,maxWidth:g,iconMargin:h,closeMargin:b,closeSize:w,iconSize:y,fontSize:E,lineHeight:$,borderRadius:v,iconColorInfo:A,iconColorSuccess:M,iconColorWarning:z,iconColorError:k,iconColorLoading:U,closeIconSize:q,closeBorderRadius:ie,[_t("textColor",u)]:P,[_t("boxShadow",u)]:te,[_t("color",u)]:Ee,[_t("closeColorHover",u)]:ke,[_t("closeColorPressed",u)]:ye,[_t("closeIconColor",u)]:he,[_t("closeIconColorPressed",u)]:fe,[_t("closeIconColorHover",u)]:De}}=i.value;return{"--n-bezier":l,"--n-margin":d,"--n-padding":f,"--n-max-width":g,"--n-font-size":E,"--n-icon-margin":h,"--n-icon-size":y,"--n-close-icon-size":q,"--n-close-border-radius":ie,"--n-close-size":w,"--n-close-margin":b,"--n-text-color":P,"--n-color":Ee,"--n-box-shadow":te,"--n-icon-color-info":A,"--n-icon-color-success":M,"--n-icon-color-warning":z,"--n-icon-color-error":k,"--n-icon-color-loading":U,"--n-close-color-hover":ke,"--n-close-color-pressed":ye,"--n-close-icon-color":he,"--n-close-icon-color-pressed":fe,"--n-close-icon-color-hover":De,"--n-line-height":$,"--n-border-radius":v}}),c=t?ey("message",ae(()=>e.type[0]),a,{}):void 0;return{mergedClsPrefix:o,rtlEnabled:s,messageProviderProps:r,handleClose(){var u;(u=e.onClose)===null||u===void 0||u.call(e)},cssVars:t?void 0:a,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender,placement:r.placement}},render(){const{render:e,type:t,closable:n,content:r,mergedClsPrefix:o,cssVars:s,themeClass:i,onRender:a,icon:c,handleClose:u,showIcon:l}=this;a==null||a();let f;return N("div",{class:[`${o}-message-wrapper`,i],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},s]},e?e(this.$props):N("div",{class:[`${o}-message ${o}-message--${t}-type`,this.rtlEnabled&&`${o}-message--rtl`]},(f=Iy(c,t,o))&&l?N("div",{class:`${o}-message__icon ${o}-message__icon--${t}-type`},N(Uu,null,{default:()=>f})):null,N("div",{class:`${o}-message__content`},Yp(r)),n?N(uy,{clsPrefix:o,class:`${o}-message__close`,onClick:u,absolute:!0}):null))}});function Iy(e,t,n){if(typeof e=="function")return e();{const r=t==="loading"?N(py,{clsPrefix:n,strokeWidth:24,scale:.85}):Oy[t]();return r?N(Nu,{clsPrefix:n,key:t},{default:()=>r}):null}}const Py=Ye({name:"MessageEnvironment",props:Object.assign(Object.assign({},zu),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let t=null;const n=tn(!0);rs(()=>{r()});function r(){const{duration:l}=e;l&&(t=window.setTimeout(i,l))}function o(l){l.currentTarget===l.target&&t!==null&&(window.clearTimeout(t),t=null)}function s(l){l.currentTarget===l.target&&r()}function i(){const{onHide:l}=e;n.value=!1,t&&(window.clearTimeout(t),t=null),l&&l()}function a(){const{onClose:l}=e;l&&l(),i()}function c(){const{onAfterLeave:l,onInternalAfterLeave:f,onAfterHide:d,internalKey:g}=e;l&&l(),f&&f(g),d&&d()}function u(){i()}return{show:n,hide:i,handleClose:a,handleAfterLeave:c,handleMouseleave:s,handleMouseenter:o,deactivate:u}},render(){return N(ay,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?N(Ry,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),Hy=Object.assign(Object.assign({},Wi.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerStyle:[String,Object]}),Ly=Ye({name:"MessageProvider",props:Hy,setup(e){const{mergedClsPrefixRef:t}=Mu(e),n=tn([]),r=tn({}),o={create(c,u){return s(c,Object.assign({type:"default"},u))},info(c,u){return s(c,Object.assign(Object.assign({},u),{type:"info"}))},success(c,u){return s(c,Object.assign(Object.assign({},u),{type:"success"}))},warning(c,u){return s(c,Object.assign(Object.assign({},u),{type:"warning"}))},error(c,u){return s(c,Object.assign(Object.assign({},u),{type:"error"}))},loading(c,u){return s(c,Object.assign(Object.assign({},u),{type:"loading"}))},destroyAll:a};vn(Du,{props:e,mergedClsPrefixRef:t}),vn(Ty,o);function s(c,u){const l=Gp(),f=rr(Object.assign(Object.assign({},u),{content:c,key:l,destroy:()=>{var g;(g=r.value[l])===null||g===void 0||g.hide()}})),{max:d}=e;return d&&n.value.length>=d&&n.value.shift(),n.value.push(f),f}function i(c){n.value.splice(n.value.findIndex(u=>u.key===c),1),delete r.value[c]}function a(){Object.values(r.value).forEach(c=>{c.hide()})}return Object.assign({mergedClsPrefix:t,messageRefs:r,messageList:n,handleAfterLeave:i},o)},render(){var e,t,n;return N(ze,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.messageList.length?N(Gh,{to:(n=this.to)!==null&&n!==void 0?n:"body"},N("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`],key:"message-container",style:this.containerStyle},this.messageList.map(r=>N(Py,Object.assign({ref:o=>{o&&(this.messageRefs[r.key]=o)},internalKey:r.key,onInternalAfterLeave:this.handleAfterLeave},Zp(r,["destroy"],void 0),{duration:r.duration===void 0?this.duration:r.duration,keepAliveOnHover:r.keepAliveOnHover===void 0?this.keepAliveOnHover:r.keepAliveOnHover,closable:r.closable===void 0?this.closable:r.closable}))))):null)}}),By={class:"w-full h-screen"},jy=Ye({__name:"App",setup(e){const t=tn(null);return(n,r)=>{const o=Sh("RouterView");return ji(),Mi(Yt(_y),{theme:t.value,class:""},{default:Fs(()=>[Re(Yt(Ly),null,{default:Fs(()=>[Ui("div",By,[Re(o)])]),_:1})]),_:1},8,["theme"])}}});const My=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},Uy=My(jy,[["__scopeId","data-v-5b93d6c7"]]),Ny="modulepreload",Fy=function(e){return"/"+e},wc={},Pt=function(t,n,r){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=Fy(o),o in wc)return;wc[o]=!0;const s=o.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":Ny,s||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),s)return new Promise((c,u)=>{a.addEventListener("load",c),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ln=typeof window<"u";function zy(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const de=Object.assign;function ks(e,t){const n={};for(const r in t){const o=t[r];n[r]=ct(o)?o.map(e):e(o)}return n}const kr=()=>{},ct=Array.isArray,Dy=/\/$/,Ky=e=>e.replace(Dy,"");function Os(e,t,n="/"){let r,o={},s="",i="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),o=e(s)),a>-1&&(r=r||t.slice(0,a),i=t.slice(a,t.length)),r=Gy(r!=null?r:t,n),{fullPath:r+(s&&"?")+s+i,path:r,query:o,hash:i}}function Wy(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function vc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Vy(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Wn(t.matched[r],n.matched[o])&&Ku(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Wn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ku(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!qy(e[n],t[n]))return!1;return!0}function qy(e,t){return ct(e)?xc(e,t):ct(t)?xc(t,e):e===t}function xc(e,t){return ct(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Gy(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o=n.length-1,s,i;for(s=0;s<r.length;s++)if(i=r[s],i!==".")if(i==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Wr;(function(e){e.pop="pop",e.push="push"})(Wr||(Wr={}));var Or;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Or||(Or={}));function Zy(e){if(!e)if(Ln){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ky(e)}const Yy=/^[^#]+#/;function Xy(e,t){return e.replace(Yy,"#")+t}function Qy(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const hs=()=>({left:window.pageXOffset,top:window.pageYOffset});function Jy(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Qy(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ec(e,t){return(history.state?history.state.position-t:-1)+e}const oi=new Map;function e1(e,t){oi.set(e,t)}function t1(e){const t=oi.get(e);return oi.delete(e),t}let n1=()=>location.protocol+"//"+location.host;function Wu(e,t){const{pathname:n,search:r,hash:o}=t,s=e.indexOf("#");if(s>-1){let a=o.includes(e.slice(s))?e.slice(s).length:1,c=o.slice(a);return c[0]!=="/"&&(c="/"+c),vc(c,"")}return vc(n,e)+r+o}function r1(e,t,n,r){let o=[],s=[],i=null;const a=({state:d})=>{const g=Wu(e,location),h=n.value,b=t.value;let w=0;if(d){if(n.value=g,t.value=d,i&&i===h){i=null;return}w=b?d.position-b.position:0}else r(g);o.forEach(y=>{y(n.value,h,{delta:w,type:Wr.pop,direction:w?w>0?Or.forward:Or.back:Or.unknown})})};function c(){i=n.value}function u(d){o.push(d);const g=()=>{const h=o.indexOf(d);h>-1&&o.splice(h,1)};return s.push(g),g}function l(){const{history:d}=window;!d.state||d.replaceState(de({},d.state,{scroll:hs()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:f}}function _c(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?hs():null}}function o1(e){const{history:t,location:n}=window,r={value:Wu(e,n)},o={value:t.state};o.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:n1()+e+c;try{t[l?"replaceState":"pushState"](u,"",d),o.value=u}catch(g){console.error(g),n[l?"replace":"assign"](d)}}function i(c,u){const l=de({},t.state,_c(o.value.back,c,o.value.forward,!0),u,{position:o.value.position});s(c,l,!0),r.value=c}function a(c,u){const l=de({},o.value,t.state,{forward:c,scroll:hs()});s(l.current,l,!0);const f=de({},_c(r.value,c,null),{position:l.position+1},u);s(c,f,!1),r.value=c}return{location:r,state:o,push:a,replace:i}}function s1(e){e=Zy(e);const t=o1(e),n=r1(e,t.state,t.location,t.replace);function r(s,i=!0){i||n.pauseListeners(),history.go(s)}const o=de({location:"",base:e,go:r,createHref:Xy.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function i1(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),s1(e)}function a1(e){return typeof e=="string"||e&&typeof e=="object"}function Vu(e){return typeof e=="string"||typeof e=="symbol"}const Ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qu=Symbol("");var Cc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Cc||(Cc={}));function Vn(e,t){return de(new Error,{type:e,[qu]:!0},t)}function xt(e,t){return e instanceof Error&&qu in e&&(t==null||!!(e.type&t))}const Ac="[^/]+?",c1={sensitive:!1,strict:!1,start:!0,end:!0},l1=/[.+*?^${}()[\]/\\]/g;function u1(e,t){const n=de({},c1,t),r=[];let o=n.start?"^":"";const s=[];for(const u of e){const l=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let f=0;f<u.length;f++){const d=u[f];let g=40+(n.sensitive?.25:0);if(d.type===0)f||(o+="/"),o+=d.value.replace(l1,"\\$&"),g+=40;else if(d.type===1){const{value:h,repeatable:b,optional:w,regexp:y}=d;s.push({name:h,repeatable:b,optional:w});const E=y||Ac;if(E!==Ac){g+=10;try{new RegExp(`(${E})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${h}" (${E}): `+v.message)}}let $=b?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||($=w&&u.length<2?`(?:/${$})`:"/"+$),w&&($+="?"),o+=$,g+=20,w&&(g+=-8),b&&(g+=-20),E===".*"&&(g+=-50)}l.push(g)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(u){const l=u.match(i),f={};if(!l)return null;for(let d=1;d<l.length;d++){const g=l[d]||"",h=s[d-1];f[h.name]=g&&h.repeatable?g.split("/"):g}return f}function c(u){let l="",f=!1;for(const d of e){(!f||!l.endsWith("/"))&&(l+="/"),f=!1;for(const g of d)if(g.type===0)l+=g.value;else if(g.type===1){const{value:h,repeatable:b,optional:w}=g,y=h in u?u[h]:"";if(ct(y)&&!b)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const E=ct(y)?y.join("/"):y;if(!E)if(w)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):f=!0);else throw new Error(`Missing required param "${h}"`);l+=E}}return l||"/"}return{re:i,score:r,keys:s,parse:a,stringify:c}}function f1(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function d1(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const s=f1(r[n],o[n]);if(s)return s;n++}if(Math.abs(o.length-r.length)===1){if(Sc(r))return 1;if(Sc(o))return-1}return o.length-r.length}function Sc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const h1={type:0,value:""},p1=/[a-zA-Z0-9_]/;function g1(e){if(!e)return[[]];if(e==="/")return[[h1]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const o=[];let s;function i(){s&&o.push(s),s=[]}let a=0,c,u="",l="";function f(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),i()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:p1.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),i(),o}function m1(e,t,n){const r=u1(g1(e.path),n),o=de(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function b1(e,t){const n=[],r=new Map;t=kc({strict:!1,end:!0,sensitive:!1},t);function o(l){return r.get(l)}function s(l,f,d){const g=!d,h=y1(l);h.aliasOf=d&&d.record;const b=kc(t,l),w=[h];if("alias"in l){const $=typeof l.alias=="string"?[l.alias]:l.alias;for(const v of $)w.push(de({},h,{components:d?d.record.components:h.components,path:v,aliasOf:d?d.record:h}))}let y,E;for(const $ of w){const{path:v}=$;if(f&&v[0]!=="/"){const A=f.record.path,M=A[A.length-1]==="/"?"":"/";$.path=f.record.path+(v&&M+v)}if(y=m1($,f,b),d?d.alias.push(y):(E=E||y,E!==y&&E.alias.push(y),g&&l.name&&!Tc(y)&&i(l.name)),h.children){const A=h.children;for(let M=0;M<A.length;M++)s(A[M],y,d&&d.children[M])}d=d||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&c(y)}return E?()=>{i(E)}:kr}function i(l){if(Vu(l)){const f=r.get(l);f&&(r.delete(l),n.splice(n.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=n.indexOf(l);f>-1&&(n.splice(f,1),l.record.name&&r.delete(l.record.name),l.children.forEach(i),l.alias.forEach(i))}}function a(){return n}function c(l){let f=0;for(;f<n.length&&d1(l,n[f])>=0&&(l.record.path!==n[f].record.path||!Gu(l,n[f]));)f++;n.splice(f,0,l),l.record.name&&!Tc(l)&&r.set(l.record.name,l)}function u(l,f){let d,g={},h,b;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw Vn(1,{location:l});b=d.record.name,g=de($c(f.params,d.keys.filter(E=>!E.optional).map(E=>E.name)),l.params&&$c(l.params,d.keys.map(E=>E.name))),h=d.stringify(g)}else if("path"in l)h=l.path,d=n.find(E=>E.re.test(h)),d&&(g=d.parse(h),b=d.record.name);else{if(d=f.name?r.get(f.name):n.find(E=>E.re.test(f.path)),!d)throw Vn(1,{location:l,currentLocation:f});b=d.record.name,g=de({},f.params,l.params),h=d.stringify(g)}const w=[];let y=d;for(;y;)w.unshift(y.record),y=y.parent;return{name:b,path:h,params:g,matched:w,meta:v1(w)}}return e.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:i,getRoutes:a,getRecordMatcher:o}}function $c(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function y1(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:w1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function w1(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Tc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function v1(e){return e.reduce((t,n)=>de(t,n.meta),{})}function kc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Gu(e,t){return t.children.some(n=>n===e||Gu(e,n))}const Zu=/#/g,x1=/&/g,E1=/\//g,_1=/=/g,C1=/\?/g,Yu=/\+/g,A1=/%5B/g,S1=/%5D/g,Xu=/%5E/g,$1=/%60/g,Qu=/%7B/g,T1=/%7C/g,Ju=/%7D/g,k1=/%20/g;function qi(e){return encodeURI(""+e).replace(T1,"|").replace(A1,"[").replace(S1,"]")}function O1(e){return qi(e).replace(Qu,"{").replace(Ju,"}").replace(Xu,"^")}function si(e){return qi(e).replace(Yu,"%2B").replace(k1,"+").replace(Zu,"%23").replace(x1,"%26").replace($1,"`").replace(Qu,"{").replace(Ju,"}").replace(Xu,"^")}function R1(e){return si(e).replace(_1,"%3D")}function I1(e){return qi(e).replace(Zu,"%23").replace(C1,"%3F")}function P1(e){return e==null?"":I1(e).replace(E1,"%2F")}function Bo(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function H1(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const s=r[o].replace(Yu," "),i=s.indexOf("="),a=Bo(i<0?s:s.slice(0,i)),c=i<0?null:Bo(s.slice(i+1));if(a in t){let u=t[a];ct(u)||(u=t[a]=[u]),u.push(c)}else t[a]=c}return t}function Oc(e){let t="";for(let n in e){const r=e[n];if(n=R1(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ct(r)?r.map(s=>s&&si(s)):[r&&si(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function L1(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ct(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const B1=Symbol(""),Rc=Symbol(""),ps=Symbol(""),Gi=Symbol(""),ii=Symbol("");function mr(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Dt(e,t,n,r,o){const s=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((i,a)=>{const c=f=>{f===!1?a(Vn(4,{from:n,to:t})):f instanceof Error?a(f):a1(f)?a(Vn(2,{from:t,to:f})):(s&&r.enterCallbacks[o]===s&&typeof f=="function"&&s.push(f),i())},u=e.call(r&&r.instances[o],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(f=>a(f))})}function Rs(e,t,n,r){const o=[];for(const s of e)for(const i in s.components){let a=s.components[i];if(!(t!=="beforeRouteEnter"&&!s.instances[i]))if(j1(a)){const u=(a.__vccOpts||a)[t];u&&o.push(Dt(u,n,r,s,i))}else{let c=a();o.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));const l=zy(u)?u.default:u;s.components[i]=l;const d=(l.__vccOpts||l)[t];return d&&Dt(d,n,r,s,i)()}))}}return o}function j1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ic(e){const t=Ae(ps),n=Ae(Gi),r=ae(()=>t.resolve(Yt(e.to))),o=ae(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],f=n.matched;if(!l||!f.length)return-1;const d=f.findIndex(Wn.bind(null,l));if(d>-1)return d;const g=Pc(c[u-2]);return u>1&&Pc(l)===g&&f[f.length-1].path!==g?f.findIndex(Wn.bind(null,c[u-2])):d}),s=ae(()=>o.value>-1&&F1(n.params,r.value.params)),i=ae(()=>o.value>-1&&o.value===n.matched.length-1&&Ku(n.params,r.value.params));function a(c={}){return N1(c)?t[Yt(e.replace)?"replace":"push"](Yt(e.to)).catch(kr):Promise.resolve()}return{route:r,href:ae(()=>r.value.href),isActive:s,isExactActive:i,navigate:a}}const M1=Ye({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ic,setup(e,{slots:t}){const n=rr(Ic(e)),{options:r}=Ae(ps),o=ae(()=>({[Hc(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Hc(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:N("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),U1=M1;function N1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function F1(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!ct(o)||o.length!==r.length||r.some((s,i)=>s!==o[i]))return!1}return!0}function Pc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Hc=(e,t,n)=>e!=null?e:t!=null?t:n,z1=Ye({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ae(ii),o=ae(()=>e.route||r.value),s=Ae(Rc,0),i=ae(()=>{let u=Yt(s);const{matched:l}=o.value;let f;for(;(f=l[u])&&!f.components;)u++;return u}),a=ae(()=>o.value.matched[i.value]);vn(Rc,ae(()=>i.value+1)),vn(B1,a),vn(ii,o);const c=tn();return _r(()=>[c.value,a.value,e.name],([u,l,f],[d,g,h])=>{l&&(l.instances[f]=u,g&&g!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!Wn(l,g)||!d)&&(l.enterCallbacks[f]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=o.value,l=e.name,f=a.value,d=f&&f.components[l];if(!d)return Lc(n.default,{Component:d,route:u});const g=f.props[l],h=g?g===!0?u.params:typeof g=="function"?g(u):g:null,w=N(d,de({},h,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(f.instances[l]=null)},ref:c}));return Lc(n.default,{Component:w,route:u})||w}}});function Lc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const D1=z1;function K1(e){const t=b1(e.routes,e),n=e.parseQuery||H1,r=e.stringifyQuery||Oc,o=e.history,s=mr(),i=mr(),a=mr(),c=Qd(Ht);let u=Ht;Ln&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=ks.bind(null,C=>""+C),f=ks.bind(null,P1),d=ks.bind(null,Bo);function g(C,j){let L,D;return Vu(C)?(L=t.getRecordMatcher(C),D=j):D=C,t.addRoute(D,L)}function h(C){const j=t.getRecordMatcher(C);j&&t.removeRoute(j)}function b(){return t.getRoutes().map(C=>C.record)}function w(C){return!!t.getRecordMatcher(C)}function y(C,j){if(j=de({},j||c.value),typeof C=="string"){const p=Os(n,C,j.path),m=t.resolve({path:p.path},j),x=o.createHref(p.fullPath);return de(p,m,{params:d(m.params),hash:Bo(p.hash),redirectedFrom:void 0,href:x})}let L;if("path"in C)L=de({},C,{path:Os(n,C.path,j.path).path});else{const p=de({},C.params);for(const m in p)p[m]==null&&delete p[m];L=de({},C,{params:f(C.params)}),j.params=f(j.params)}const D=t.resolve(L,j),se=C.hash||"";D.params=l(d(D.params));const _e=Wy(r,de({},C,{hash:O1(se),path:D.path})),Q=o.createHref(_e);return de({fullPath:_e,hash:se,query:r===Oc?L1(C.query):C.query||{}},D,{redirectedFrom:void 0,href:Q})}function E(C){return typeof C=="string"?Os(n,C,c.value.path):de({},C)}function $(C,j){if(u!==C)return Vn(8,{from:j,to:C})}function v(C){return z(C)}function A(C){return v(de(E(C),{replace:!0}))}function M(C){const j=C.matched[C.matched.length-1];if(j&&j.redirect){const{redirect:L}=j;let D=typeof L=="function"?L(C):L;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=E(D):{path:D},D.params={}),de({query:C.query,hash:C.hash,params:"path"in D?{}:C.params},D)}}function z(C,j){const L=u=y(C),D=c.value,se=C.state,_e=C.force,Q=C.replace===!0,p=M(L);if(p)return z(de(E(p),{state:typeof p=="object"?de({},se,p.state):se,force:_e,replace:Q}),j||L);const m=L;m.redirectedFrom=j;let x;return!_e&&Vy(r,D,L)&&(x=Vn(16,{to:m,from:D}),sn(D,D,!0,!1)),(x?Promise.resolve(x):U(m,D)).catch(_=>xt(_)?xt(_,2)?_:De(_):he(_,m,D)).then(_=>{if(_){if(xt(_,2))return z(de({replace:Q},E(_.to),{state:typeof _.to=="object"?de({},se,_.to.state):se,force:_e}),j||m)}else _=ie(m,D,!0,Q,se);return q(m,D,_),_})}function k(C,j){const L=$(C,j);return L?Promise.reject(L):Promise.resolve()}function U(C,j){let L;const[D,se,_e]=W1(C,j);L=Rs(D.reverse(),"beforeRouteLeave",C,j);for(const p of D)p.leaveGuards.forEach(m=>{L.push(Dt(m,C,j))});const Q=k.bind(null,C,j);return L.push(Q),Pn(L).then(()=>{L=[];for(const p of s.list())L.push(Dt(p,C,j));return L.push(Q),Pn(L)}).then(()=>{L=Rs(se,"beforeRouteUpdate",C,j);for(const p of se)p.updateGuards.forEach(m=>{L.push(Dt(m,C,j))});return L.push(Q),Pn(L)}).then(()=>{L=[];for(const p of C.matched)if(p.beforeEnter&&!j.matched.includes(p))if(ct(p.beforeEnter))for(const m of p.beforeEnter)L.push(Dt(m,C,j));else L.push(Dt(p.beforeEnter,C,j));return L.push(Q),Pn(L)}).then(()=>(C.matched.forEach(p=>p.enterCallbacks={}),L=Rs(_e,"beforeRouteEnter",C,j),L.push(Q),Pn(L))).then(()=>{L=[];for(const p of i.list())L.push(Dt(p,C,j));return L.push(Q),Pn(L)}).catch(p=>xt(p,8)?p:Promise.reject(p))}function q(C,j,L){for(const D of a.list())D(C,j,L)}function ie(C,j,L,D,se){const _e=$(C,j);if(_e)return _e;const Q=j===Ht,p=Ln?history.state:{};L&&(D||Q?o.replace(C.fullPath,de({scroll:Q&&p&&p.scroll},se)):o.push(C.fullPath,se)),c.value=C,sn(C,j,L,Q),De()}let P;function te(){P||(P=o.listen((C,j,L)=>{if(!to.listening)return;const D=y(C),se=M(D);if(se){z(de(se,{replace:!0}),D).catch(kr);return}u=D;const _e=c.value;Ln&&e1(Ec(_e.fullPath,L.delta),hs()),U(D,_e).catch(Q=>xt(Q,12)?Q:xt(Q,2)?(z(Q.to,D).then(p=>{xt(p,20)&&!L.delta&&L.type===Wr.pop&&o.go(-1,!1)}).catch(kr),Promise.reject()):(L.delta&&o.go(-L.delta,!1),he(Q,D,_e))).then(Q=>{Q=Q||ie(D,_e,!1),Q&&(L.delta&&!xt(Q,8)?o.go(-L.delta,!1):L.type===Wr.pop&&xt(Q,20)&&o.go(-1,!1)),q(D,_e,Q)}).catch(kr)}))}let Ee=mr(),ke=mr(),ye;function he(C,j,L){De(C);const D=ke.list();return D.length?D.forEach(se=>se(C,j,L)):console.error(C),Promise.reject(C)}function fe(){return ye&&c.value!==Ht?Promise.resolve():new Promise((C,j)=>{Ee.add([C,j])})}function De(C){return ye||(ye=!C,te(),Ee.list().forEach(([j,L])=>C?L(C):j()),Ee.reset()),C}function sn(C,j,L,D){const{scrollBehavior:se}=e;if(!Ln||!se)return Promise.resolve();const _e=!L&&t1(Ec(C.fullPath,0))||(D||!L)&&history.state&&history.state.scroll||null;return _l().then(()=>se(C,j,_e)).then(Q=>Q&&Jy(Q)).catch(Q=>he(Q,C,j))}const tt=C=>o.go(C);let Me;const Rn=new Set,to={currentRoute:c,listening:!0,addRoute:g,removeRoute:h,hasRoute:w,getRoutes:b,resolve:y,options:e,push:v,replace:A,go:tt,back:()=>tt(-1),forward:()=>tt(1),beforeEach:s.add,beforeResolve:i.add,afterEach:a.add,onError:ke.add,isReady:fe,install(C){const j=this;C.component("RouterLink",U1),C.component("RouterView",D1),C.config.globalProperties.$router=j,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(c)}),Ln&&!Me&&c.value===Ht&&(Me=!0,v(o.location).catch(se=>{}));const L={};for(const se in Ht)L[se]=ae(()=>c.value[se]);C.provide(ps,j),C.provide(Gi,rr(L)),C.provide(ii,c);const D=C.unmount;Rn.add(C),C.unmount=function(){Rn.delete(C),Rn.size<1&&(u=Ht,P&&P(),P=null,c.value=Ht,Me=!1,ye=!1),D()}}};return to}function Pn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function W1(e,t){const n=[],r=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const a=t.matched[i];a&&(e.matched.find(u=>Wn(u,a))?r.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find(u=>Wn(u,c))||o.push(c))}return[n,r,o]}function s2(){return Ae(ps)}function i2(){return Ae(Gi)}const V1={},q1=Object.freeze(Object.defineProperty({__proto__:null,default:V1},Symbol.toStringTag,{value:"Module"}));/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const re=BigInt(0),xe=BigInt(1),qt=BigInt(2),Rr=BigInt(3),Bc=BigInt(8),ge=Object.freeze({a:re,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:xe,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),jc=(e,t)=>(e+t/qt)/t,fo={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(e){const{n:t}=ge,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-xe*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),s=n,i=BigInt("0x100000000000000000000000000000000"),a=jc(s*e,t),c=jc(-r*e,t);let u=H(e-a*n-c*o,t),l=H(-a*r-c*s,t);const f=u>i,d=l>i;if(f&&(u=t-u),d&&(l=t-l),u>i||l>i)throw new Error("splitScalarEndo: Endomorphism failed, k="+e);return{k1neg:f,k1:u,k2neg:d,k2:l}}},it=32,qn=32,G1=32,jo=it+1,Mo=2*it+1;function Mc(e){const{a:t,b:n}=ge,r=H(e*e),o=H(r*e);return H(o+t*e+n)}const ho=ge.a===re;class Zi extends Error{constructor(t){super(t)}}function Uc(e){if(!(e instanceof ue))throw new TypeError("JacobianPoint expected")}class ue{constructor(t,n,r){this.x=t,this.y=n,this.z=r}static fromAffine(t){if(!(t instanceof oe))throw new TypeError("JacobianPoint#fromAffine: expected Point");return t.equals(oe.ZERO)?ue.ZERO:new ue(t.x,t.y,xe)}static toAffineBatch(t){const n=J1(t.map(r=>r.z));return t.map((r,o)=>r.toAffine(n[o]))}static normalizeZ(t){return ue.toAffineBatch(t).map(ue.fromAffine)}equals(t){Uc(t);const{x:n,y:r,z:o}=this,{x:s,y:i,z:a}=t,c=H(o*o),u=H(a*a),l=H(n*u),f=H(s*c),d=H(H(r*a)*u),g=H(H(i*o)*c);return l===f&&d===g}negate(){return new ue(this.x,H(-this.y),this.z)}double(){const{x:t,y:n,z:r}=this,o=H(t*t),s=H(n*n),i=H(s*s),a=t+s,c=H(qt*(H(a*a)-o-i)),u=H(Rr*o),l=H(u*u),f=H(l-qt*c),d=H(u*(c-f)-Bc*i),g=H(qt*n*r);return new ue(f,d,g)}add(t){Uc(t);const{x:n,y:r,z:o}=this,{x:s,y:i,z:a}=t;if(s===re||i===re)return this;if(n===re||r===re)return t;const c=H(o*o),u=H(a*a),l=H(n*u),f=H(s*c),d=H(H(r*a)*u),g=H(H(i*o)*c),h=H(f-l),b=H(g-d);if(h===re)return b===re?this.double():ue.ZERO;const w=H(h*h),y=H(h*w),E=H(l*w),$=H(b*b-y-qt*E),v=H(b*(E-$)-d*y),A=H(o*a*h);return new ue($,v,A)}subtract(t){return this.add(t.negate())}multiplyUnsafe(t){const n=ue.ZERO;if(typeof t=="bigint"&&t===re)return n;let r=zc(t);if(r===xe)return this;if(!ho){let f=n,d=this;for(;r>re;)r&xe&&(f=f.add(d)),d=d.double(),r>>=xe;return f}let{k1neg:o,k1:s,k2neg:i,k2:a}=fo.splitScalar(r),c=n,u=n,l=this;for(;s>re||a>re;)s&xe&&(c=c.add(l)),a&xe&&(u=u.add(l)),l=l.double(),s>>=xe,a>>=xe;return o&&(c=c.negate()),i&&(u=u.negate()),u=new ue(H(u.x*fo.beta),u.y,u.z),c.add(u)}precomputeWindow(t){const n=ho?128/t+1:256/t+1,r=[];let o=this,s=o;for(let i=0;i<n;i++){s=o,r.push(s);for(let a=1;a<2**(t-1);a++)s=s.add(o),r.push(s);o=s.double()}return r}wNAF(t,n){!n&&this.equals(ue.BASE)&&(n=oe.BASE);const r=n&&n._WINDOW_SIZE||1;if(256%r)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let o=n&&ai.get(n);o||(o=this.precomputeWindow(r),n&&r!==1&&(o=ue.normalizeZ(o),ai.set(n,o)));let s=ue.ZERO,i=ue.BASE;const a=1+(ho?128/r:256/r),c=2**(r-1),u=BigInt(2**r-1),l=2**r,f=BigInt(r);for(let d=0;d<a;d++){const g=d*c;let h=Number(t&u);t>>=f,h>c&&(h-=l,t+=xe);const b=g,w=g+Math.abs(h)-1,y=d%2!==0,E=h<0;h===0?i=i.add(po(y,o[b])):s=s.add(po(E,o[w]))}return{p:s,f:i}}multiply(t,n){let r=zc(t),o,s;if(ho){const{k1neg:i,k1:a,k2neg:c,k2:u}=fo.splitScalar(r);let{p:l,f}=this.wNAF(a,n),{p:d,f:g}=this.wNAF(u,n);l=po(i,l),d=po(c,d),d=new ue(H(d.x*fo.beta),d.y,d.z),o=l.add(d),s=f.add(g)}else{const{p:i,f:a}=this.wNAF(r,n);o=i,s=a}return ue.normalizeZ([o,s])[0]}toAffine(t){const{x:n,y:r,z:o}=this,s=this.equals(ue.ZERO);t==null&&(t=s?Bc:fr(o));const i=t,a=H(i*i),c=H(a*i),u=H(n*a),l=H(r*c),f=H(o*i);if(s)return oe.ZERO;if(f!==xe)throw new Error("invZ was invalid");return new oe(u,l)}}ue.BASE=new ue(ge.Gx,ge.Gy,xe);ue.ZERO=new ue(re,xe,re);function po(e,t){const n=t.negate();return e?n:t}const ai=new WeakMap;class oe{constructor(t,n){this.x=t,this.y=n}_setWindowSize(t){this._WINDOW_SIZE=t,ai.delete(this)}hasEvenY(){return this.y%qt===re}static fromCompressedHex(t){const n=t.length===32,r=Ge(n?t:t.subarray(1));if(!Ao(r))throw new Error("Point is not on curve");const o=Mc(r);let s=Q1(o);const i=(s&xe)===xe;n?i&&(s=H(-s)):(t[0]&1)===1!==i&&(s=H(-s));const a=new oe(r,s);return a.assertValidity(),a}static fromUncompressedHex(t){const n=Ge(t.subarray(1,it+1)),r=Ge(t.subarray(it+1,it*2+1)),o=new oe(n,r);return o.assertValidity(),o}static fromHex(t){const n=yt(t),r=n.length,o=n[0];if(r===it)return this.fromCompressedHex(n);if(r===jo&&(o===2||o===3))return this.fromCompressedHex(n);if(r===Mo&&o===4)return this.fromUncompressedHex(n);throw new Error(`Point.fromHex: received invalid point. Expected 32-${jo} compressed bytes or ${Mo} uncompressed bytes, not ${r}`)}static fromPrivateKey(t){return oe.BASE.multiply($n(t))}static fromSignature(t,n,r){const{r:o,s}=ef(n);if(![0,1,2,3].includes(r))throw new Error("Cannot recover: invalid recovery bit");const i=Yi(yt(t)),{n:a}=ge,c=r===2||r===3?o+a:o,u=fr(c,a),l=H(-i*u,a),f=H(s*u,a),d=r&1?"03":"02",g=oe.fromHex(d+Qt(c)),h=oe.BASE.multiplyAndAddUnsafe(g,l,f);if(!h)throw new Error("Cannot recover signature: point at infinify");return h.assertValidity(),h}toRawBytes(t=!1){return Jt(this.toHex(t))}toHex(t=!1){const n=Qt(this.x);return t?`${this.hasEvenY()?"02":"03"}${n}`:`04${n}${Qt(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const t="Point is not on elliptic curve",{x:n,y:r}=this;if(!Ao(n)||!Ao(r))throw new Error(t);const o=H(r*r),s=Mc(n);if(H(o-s)!==re)throw new Error(t)}equals(t){return this.x===t.x&&this.y===t.y}negate(){return new oe(this.x,H(-this.y))}double(){return ue.fromAffine(this).double().toAffine()}add(t){return ue.fromAffine(this).add(ue.fromAffine(t)).toAffine()}subtract(t){return this.add(t.negate())}multiply(t){return ue.fromAffine(this).multiply(t,this).toAffine()}multiplyAndAddUnsafe(t,n,r){const o=ue.fromAffine(this),s=n===re||n===xe||this!==oe.BASE?o.multiplyUnsafe(n):o.multiply(n),i=ue.fromAffine(t).multiplyUnsafe(r),a=s.add(i);return a.equals(ue.ZERO)?void 0:a.toAffine()}}oe.BASE=new oe(ge.Gx,ge.Gy);oe.ZERO=new oe(re,re);function Nc(e){return Number.parseInt(e[0],16)>=8?"00"+e:e}function Fc(e){if(e.length<2||e[0]!==2)throw new Error(`Invalid signature integer tag: ${Gn(e)}`);const t=e[1],n=e.subarray(2,t+2);if(!t||n.length!==t)throw new Error("Invalid signature integer: wrong length");if(n[0]===0&&n[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:Ge(n),left:e.subarray(t+2)}}function Z1(e){if(e.length<2||e[0]!=48)throw new Error(`Invalid signature tag: ${Gn(e)}`);if(e[1]!==e.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:n}=Fc(e.subarray(2)),{data:r,left:o}=Fc(n);if(o.length)throw new Error(`Invalid signature: left bytes after parsing: ${Gn(o)}`);return{r:t,s:r}}class At{constructor(t,n){this.r=t,this.s=n,this.assertValidity()}static fromCompact(t){const n=t instanceof Uint8Array,r="Signature.fromCompact";if(typeof t!="string"&&!n)throw new TypeError(`${r}: Expected string or Uint8Array`);const o=n?Gn(t):t;if(o.length!==128)throw new Error(`${r}: Expected 64-byte hex`);return new At(Uo(o.slice(0,64)),Uo(o.slice(64,128)))}static fromDER(t){const n=t instanceof Uint8Array;if(typeof t!="string"&&!n)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r,s:o}=Z1(n?t:Jt(t));return new At(r,o)}static fromHex(t){return this.fromDER(t)}assertValidity(){const{r:t,s:n}=this;if(!Yn(t))throw new Error("Invalid Signature: r must be 0 < r < n");if(!Yn(n))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const t=ge.n>>xe;return this.s>t}normalizeS(){return this.hasHighS()?new At(this.r,H(-this.s,ge.n)):this}toDERRawBytes(){return Jt(this.toDERHex())}toDERHex(){const t=Nc(br(this.s)),n=Nc(br(this.r)),r=t.length/2,o=n.length/2,s=br(r),i=br(o);return`30${br(o+r+4)}02${i}${n}02${s}${t}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return Jt(this.toCompactHex())}toCompactHex(){return Qt(this.r)+Qt(this.s)}}function Wt(...e){if(!e.every(r=>r instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((r,o)=>r+o.length,0),n=new Uint8Array(t);for(let r=0,o=0;r<e.length;r++){const s=e[r];n.set(s,o),o+=s.length}return n}const Y1=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Gn(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");let t="";for(let n=0;n<e.length;n++)t+=Y1[e[n]];return t}const X1=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function Qt(e){if(typeof e!="bigint")throw new Error("Expected bigint");if(!(re<=e&&e<X1))throw new Error("Expected number 0 <= n < 2^256");return e.toString(16).padStart(64,"0")}function Zn(e){const t=Jt(Qt(e));if(t.length!==32)throw new Error("Error: expected 32 bytes");return t}function br(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function Uo(e){if(typeof e!="string")throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt(`0x${e}`)}function Jt(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const r=n*2,o=e.slice(r,r+2),s=Number.parseInt(o,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");t[n]=s}return t}function Ge(e){return Uo(Gn(e))}function yt(e){return e instanceof Uint8Array?Uint8Array.from(e):Jt(e)}function zc(e){if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)return BigInt(e);if(typeof e=="bigint"&&Yn(e))return e;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function H(e,t=ge.P){const n=e%t;return n>=re?n:t+n}function Qe(e,t){const{P:n}=ge;let r=e;for(;t-- >re;)r*=r,r%=n;return r}function Q1(e){const{P:t}=ge,n=BigInt(6),r=BigInt(11),o=BigInt(22),s=BigInt(23),i=BigInt(44),a=BigInt(88),c=e*e*e%t,u=c*c*e%t,l=Qe(u,Rr)*u%t,f=Qe(l,Rr)*u%t,d=Qe(f,qt)*c%t,g=Qe(d,r)*d%t,h=Qe(g,o)*g%t,b=Qe(h,i)*h%t,w=Qe(b,a)*b%t,y=Qe(w,i)*h%t,E=Qe(y,Rr)*u%t,$=Qe(E,s)*g%t,v=Qe($,n)*c%t,A=Qe(v,qt);if(A*A%t!==e)throw new Error("Cannot find square root");return A}function fr(e,t=ge.P){if(e===re||t<=re)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=H(e,t),r=t,o=re,s=xe;for(;n!==re;){const a=r/n,c=r%n,u=o-s*a;r=n,n=c,o=s,s=u}if(r!==xe)throw new Error("invert: does not exist");return H(o,t)}function J1(e,t=ge.P){const n=new Array(e.length),r=e.reduce((s,i,a)=>i===re?s:(n[a]=s,H(s*i,t)),xe),o=fr(r,t);return e.reduceRight((s,i,a)=>i===re?s:(n[a]=H(s*n[a],t),H(s*i,t)),o),n}function ew(e){const t=e.length*8-qn*8,n=Ge(e);return t>0?n>>BigInt(t):n}function Yi(e,t=!1){const n=ew(e);if(t)return n;const{n:r}=ge;return n>=r?n-r:n}let Nn,Ir;class tw{constructor(t,n){if(this.hashLen=t,this.qByteLen=n,typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof n!="number"||n<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(t).fill(1),this.k=new Uint8Array(t).fill(0),this.counter=0}hmac(...t){return ee.hmacSha256(this.k,...t)}hmacSync(...t){return Ir(this.k,...t)}checkSync(){if(typeof Ir!="function")throw new Zi("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(t=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),t),this.v=await this.hmac(this.v),t.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),t),this.v=await this.hmac(this.v))}reseedSync(t=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),t),this.v=this.hmacSync(this.v),t.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),t),this.v=this.hmacSync(this.v))}async generate(){this.incr();let t=0;const n=[];for(;t<this.qByteLen;){this.v=await this.hmac(this.v);const r=this.v.slice();n.push(r),t+=this.v.length}return Wt(...n)}generateSync(){this.checkSync(),this.incr();let t=0;const n=[];for(;t<this.qByteLen;){this.v=this.hmacSync(this.v);const r=this.v.slice();n.push(r),t+=this.v.length}return Wt(...n)}}function Yn(e){return re<e&&e<ge.n}function Ao(e){return re<e&&e<ge.P}function nw(e,t,n,r=!0){const{n:o}=ge,s=Yi(e,!0);if(!Yn(s))return;const i=fr(s,o),a=oe.BASE.multiply(s),c=H(a.x,o);if(c===re)return;const u=H(i*H(t+n*c,o),o);if(u===re)return;let l=new At(c,u),f=(a.x===l.r?0:2)|Number(a.y&xe);return r&&l.hasHighS()&&(l=l.normalizeS(),f^=1),{sig:l,recovery:f}}function $n(e){let t;if(typeof e=="bigint")t=e;else if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)t=BigInt(e);else if(typeof e=="string"){if(e.length!==2*qn)throw new Error("Expected 32 bytes of private key");t=Uo(e)}else if(e instanceof Uint8Array){if(e.length!==qn)throw new Error("Expected 32 bytes of private key");t=Ge(e)}else throw new TypeError("Expected valid private key");if(!Yn(t))throw new Error("Expected private key: 0 < key < n");return t}function Xi(e){return e instanceof oe?(e.assertValidity(),e):oe.fromHex(e)}function ef(e){if(e instanceof At)return e.assertValidity(),e;try{return At.fromDER(e)}catch{return At.fromCompact(e)}}function rw(e,t=!1){return oe.fromPrivateKey(e).toRawBytes(t)}function Dc(e){const t=e instanceof Uint8Array,n=typeof e=="string",r=(t||n)&&e.length;return t?r===jo||r===Mo:n?r===jo*2||r===Mo*2:e instanceof oe}function tf(e,t,n=!1){if(Dc(e))throw new TypeError("getSharedSecret: first arg must be private key");if(!Dc(t))throw new TypeError("getSharedSecret: second arg must be public key");const r=Xi(t);return r.assertValidity(),r.multiply($n(e)).toRawBytes(n)}function nf(e){const t=e.length>it?e.slice(0,it):e;return Ge(t)}function ow(e){const t=nf(e),n=H(t,ge.n);return rf(n<re?t:n)}function rf(e){return Zn(e)}function sw(e,t,n){if(e==null)throw new Error(`sign: expected valid message hash, not "${e}"`);const r=yt(e),o=$n(t),s=[rf(o),ow(r)];if(n!=null){n===!0&&(n=ee.randomBytes(it));const c=yt(n);if(c.length!==it)throw new Error(`sign: Expected ${it} bytes of extra data`);s.push(c)}const i=Wt(...s),a=nf(r);return{seed:i,m:a,d:o}}function iw(e,t){const{sig:n,recovery:r}=e,{der:o,recovered:s}=Object.assign({canonical:!0,der:!0},t),i=o?n.toDERRawBytes():n.toCompactRawBytes();return s?[i,r]:i}function aw(e,t,n={}){const{seed:r,m:o,d:s}=sw(e,t,n.extraEntropy),i=new tw(G1,qn);i.reseedSync(r);let a;for(;!(a=nw(i.generateSync(),o,s,n.canonical));)i.reseedSync();return iw(a,n)}const cw={strict:!0};function lw(e,t,n,r=cw){let o;try{o=ef(e),t=yt(t)}catch{return!1}const{r:s,s:i}=o;if(r.strict&&o.hasHighS())return!1;const a=Yi(t);let c;try{c=Xi(n)}catch{return!1}const{n:u}=ge,l=fr(i,u),f=H(a*l,u),d=H(s*l,u),g=oe.BASE.multiplyAndAddUnsafe(c,f,d);return g?H(g.x,u)===s:!1}function No(e){return H(Ge(e),ge.n)}class Xn{constructor(t,n){this.r=t,this.s=n,this.assertValidity()}static fromHex(t){const n=yt(t);if(n.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${n.length}`);const r=Ge(n.subarray(0,32)),o=Ge(n.subarray(32,64));return new Xn(r,o)}assertValidity(){const{r:t,s:n}=this;if(!Ao(t)||!Yn(n))throw new Error("Invalid signature")}toHex(){return Qt(this.r)+Qt(this.s)}toRawBytes(){return Jt(this.toHex())}}function uw(e){return oe.fromPrivateKey(e).toRawX()}class of{constructor(t,n,r=ee.randomBytes()){if(t==null)throw new TypeError(`sign: Expected valid message, not "${t}"`);this.m=yt(t);const{x:o,scalar:s}=this.getScalar($n(n));if(this.px=o,this.d=s,this.rand=yt(r),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(t){const n=oe.fromPrivateKey(t),r=n.hasEvenY()?t:ge.n-t;return{point:n,scalar:r,x:n.toRawX()}}initNonce(t,n){return Zn(t^Ge(n))}finalizeNonce(t){const n=H(Ge(t),ge.n);if(n===re)throw new Error("sign: Creation of signature failed. k is zero");const{point:r,x:o,scalar:s}=this.getScalar(n);return{R:r,rx:o,k:s}}finalizeSig(t,n,r,o){return new Xn(t.x,H(n+r*o,ge.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:t,d:n,px:r,rand:o}=this,s=ee.taggedHash,i=this.initNonce(n,await s(Kt.aux,o)),{R:a,rx:c,k:u}=this.finalizeNonce(await s(Kt.nonce,i,r,t)),l=No(await s(Kt.challenge,c,r,t)),f=this.finalizeSig(a,u,l,n);return await cf(f,t,r)||this.error(),f}calcSync(){const{m:t,d:n,px:r,rand:o}=this,s=ee.taggedHashSync,i=this.initNonce(n,s(Kt.aux,o)),{R:a,rx:c,k:u}=this.finalizeNonce(s(Kt.nonce,i,r,t)),l=No(s(Kt.challenge,c,r,t)),f=this.finalizeSig(a,u,l,n);return lf(f,t,r)||this.error(),f}}async function fw(e,t,n){return new of(e,t,n).calc()}function dw(e,t,n){return new of(e,t,n).calcSync()}function sf(e,t,n){const r=e instanceof Xn,o=r?e:Xn.fromHex(e);return r&&o.assertValidity(),{...o,m:yt(t),P:Xi(n)}}function af(e,t,n,r){const o=oe.BASE.multiplyAndAddUnsafe(t,$n(n),H(-r,ge.n));return!(!o||!o.hasEvenY()||o.x!==e)}async function cf(e,t,n){try{const{r,s:o,m:s,P:i}=sf(e,t,n),a=No(await ee.taggedHash(Kt.challenge,Zn(r),i.toRawX(),s));return af(r,i,o,a)}catch{return!1}}function lf(e,t,n){try{const{r,s:o,m:s,P:i}=sf(e,t,n),a=No(ee.taggedHashSync(Kt.challenge,Zn(r),i.toRawX(),s));return af(r,i,o,a)}catch(r){if(r instanceof Zi)throw r;return!1}}const Yr={Signature:Xn,getPublicKey:uw,sign:fw,verify:cf,signSync:dw,verifySync:lf};oe.BASE._setWindowSize(8);const We={node:q1,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},Kt={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},go={},ee={bytesToHex:Gn,hexToBytes:Jt,concatBytes:Wt,mod:H,invert:fr,isValidPrivateKey(e){try{return $n(e),!0}catch{return!1}},_bigintTo32Bytes:Zn,_normalizePrivateKey:$n,hashToPrivateKey:e=>{e=yt(e);const t=qn+8;if(e.length<t||e.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const n=H(Ge(e),ge.n-xe)+xe;return Zn(n)},randomBytes:(e=32)=>{if(We.web)return We.web.getRandomValues(new Uint8Array(e));if(We.node){const{randomBytes:t}=We.node;return Uint8Array.from(t(e))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>ee.hashToPrivateKey(ee.randomBytes(qn+8)),precompute(e=8,t=oe.BASE){const n=t===oe.BASE?t:new oe(t.x,t.y);return n._setWindowSize(e),n.multiply(Rr),n},sha256:async(...e)=>{if(We.web){const t=await We.web.subtle.digest("SHA-256",Wt(...e));return new Uint8Array(t)}else if(We.node){const{createHash:t}=We.node,n=t("sha256");return e.forEach(r=>n.update(r)),Uint8Array.from(n.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(e,...t)=>{if(We.web){const n=await We.web.subtle.importKey("raw",e,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),r=Wt(...t),o=await We.web.subtle.sign("HMAC",n,r);return new Uint8Array(o)}else if(We.node){const{createHmac:n}=We.node,r=n("sha256",e);return t.forEach(o=>r.update(o)),Uint8Array.from(r.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(e,...t)=>{let n=go[e];if(n===void 0){const r=await ee.sha256(Uint8Array.from(e,o=>o.charCodeAt(0)));n=Wt(r,r),go[e]=n}return ee.sha256(n,...t)},taggedHashSync:(e,...t)=>{if(typeof Nn!="function")throw new Zi("sha256Sync is undefined, you need to set it");let n=go[e];if(n===void 0){const r=Nn(Uint8Array.from(e,o=>o.charCodeAt(0)));n=Wt(r,r),go[e]=n}return Nn(n,...t)},_JacobianPoint:ue};Object.defineProperties(ee,{sha256Sync:{configurable:!1,get(){return Nn},set(e){Nn||(Nn=e)}},hmacSha256Sync:{configurable:!1,get(){return Ir},set(e){Ir||(Ir=e)}}});const Kc={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0};/*! noble-hashes - MIT License (c) 2021 Paul Miller (paulmillr.com) */const Is=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),ht=(e,t)=>e<<32-t|e>>>t,hw=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!hw)throw new Error("Non little-endian hardware is not supported");Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));(()=>{const e=typeof module<"u"&&typeof module.require=="function"&&module.require.bind(module);try{if(e){const{setImmediate:t}=e("timers");return()=>new Promise(n=>t(n))}}catch{}return()=>new Promise(t=>setTimeout(t,0))})();function pw(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function Qi(e){if(typeof e=="string"&&(e=pw(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function Wc(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function gw(e){if(typeof e!="function"||typeof e.init!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Wc(e.outputLen),Wc(e.blockLen)}class ci{clone(){return this._cloneInto()}}function mw(e){const t=r=>e().update(Qi(r)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t.init=t.create,t}function bw(e=32){if(Kc.web)return Kc.web.getRandomValues(new Uint8Array(e));throw new Error("The environment doesn't have randomBytes function")}function yw(e,t,n,r){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,r);const o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),a=Number(n&s),c=r?4:0,u=r?0:4;e.setUint32(t+c,i,r),e.setUint32(t+u,a,r)}class ww extends ci{constructor(t,n,r,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=Is(this.buffer)}update(t){if(this.destroyed)throw new Error("instance is destroyed");const{view:n,buffer:r,blockLen:o,finished:s}=this;if(s)throw new Error("digest() was already called");t=Qi(t);const i=t.length;for(let a=0;a<i;){const c=Math.min(o-this.pos,i-a);if(c===o){const u=Is(t);for(;o<=i-a;a+=o)this.process(u,a);continue}r.set(t.subarray(a,a+c),this.pos),this.pos+=c,a+=c,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){if(this.destroyed)throw new Error("instance is destroyed");if(!(t instanceof Uint8Array)||t.length<this.outputLen)throw new Error("_Sha2: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0;const{buffer:n,view:r,blockLen:o,isLE:s}=this;let{pos:i}=this;n[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>o-i&&(this.process(r,0),i=0);for(let c=i;c<o;c++)n[c]=0;yw(r,o-8,BigInt(this.length*8),s),this.process(r,0);const a=Is(t);this.get().forEach((c,u)=>a.setUint32(4*u,c,s))}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const r=t.slice(0,n);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:r,length:o,finished:s,destroyed:i,pos:a}=this;return t.length=o,t.pos=a,t.finished=s,t.destroyed=i,o%n&&t.buffer.set(r),t}}const vw=(e,t,n)=>e&t^~e&n,xw=(e,t,n)=>e&t^e&n^t&n,Ew=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Lt=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Bt=new Uint32Array(64);class _w extends ww{constructor(){super(64,32,8,!1),this.A=Lt[0]|0,this.B=Lt[1]|0,this.C=Lt[2]|0,this.D=Lt[3]|0,this.E=Lt[4]|0,this.F=Lt[5]|0,this.G=Lt[6]|0,this.H=Lt[7]|0}get(){const{A:t,B:n,C:r,D:o,E:s,F:i,G:a,H:c}=this;return[t,n,r,o,s,i,a,c]}set(t,n,r,o,s,i,a,c){this.A=t|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=s|0,this.F=i|0,this.G=a|0,this.H=c|0}process(t,n){for(let f=0;f<16;f++,n+=4)Bt[f]=t.getUint32(n,!1);for(let f=16;f<64;f++){const d=Bt[f-15],g=Bt[f-2],h=ht(d,7)^ht(d,18)^d>>>3,b=ht(g,17)^ht(g,19)^g>>>10;Bt[f]=b+Bt[f-7]+h+Bt[f-16]|0}let{A:r,B:o,C:s,D:i,E:a,F:c,G:u,H:l}=this;for(let f=0;f<64;f++){const d=ht(a,6)^ht(a,11)^ht(a,25),g=l+d+vw(a,c,u)+Ew[f]+Bt[f]|0,b=(ht(r,2)^ht(r,13)^ht(r,22))+xw(r,o,s)|0;l=u,u=c,c=a,a=i+g|0,i=s,s=o,o=r,r=g+b|0}r=r+this.A|0,o=o+this.B|0,s=s+this.C|0,i=i+this.D|0,a=a+this.E|0,c=c+this.F|0,u=u+this.G|0,l=l+this.H|0,this.set(r,o,s,i,a,c,u,l)}roundClean(){Bt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const Xr=mw(()=>new _w);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function rn(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function lt(...e){const t=(o,s)=>i=>o(s(i)),n=Array.from(e).reverse().reduce((o,s)=>o?t(o,s.encode):s.encode,void 0),r=e.reduce((o,s)=>o?t(o,s.decode):s.decode,void 0);return{encode:n,decode:r}}function wt(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(rn(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const r=e.indexOf(n);if(r===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return r})}}}function vt(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function Qr(e,t="="){if(rn(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let r of n)if(typeof r!="string")throw new Error(`padding.encode: non-string input=${r}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let r=n.length;if(r*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;r>0&&n[r-1]===t;r--)if(!((r-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,r)}}}function uf(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Vc(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let r=0;const o=[],s=Array.from(e);for(s.forEach(i=>{if(rn(i),i<0||i>=t)throw new Error(`Wrong integer: ${i}`)});;){let i=0,a=!0;for(let c=r;c<s.length;c++){const u=s[c],l=t*i+u;if(!Number.isSafeInteger(l)||t*i/t!==i||l-u!==t*i)throw new Error("convertRadix: carry overflow");if(i=l%n,s[c]=Math.floor(l/n),!Number.isSafeInteger(s[c])||s[c]*n+i!==l)throw new Error("convertRadix: carry overflow");if(a)s[c]?a=!1:r=c;else continue}if(o.push(i),a)break}for(let i=0;i<e.length-1&&e[i]===0;i++)o.push(0);return o.reverse()}const ff=(e,t)=>t?ff(t,e%t):e,Fo=(e,t)=>e+(t-ff(e,t));function li(e,t,n,r){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Fo(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${Fo(t,n)}`);let o=0,s=0;const i=2**n-1,a=[];for(const c of e){if(rn(c),c>=2**t)throw new Error(`convertRadix2: invalid data word=${c} from=${t}`);if(o=o<<t|c,s+t>32)throw new Error(`convertRadix2: carry overflow pos=${s} from=${t}`);for(s+=t;s>=n;s-=n)a.push((o>>s-n&i)>>>0);o&=2**s-1}if(o=o<<n-s&i,!r&&s>=t)throw new Error("Excess padding");if(!r&&o)throw new Error(`Non-zero padding: ${o}`);return r&&s>0&&a.push(o>>>0),a}function df(e){return rn(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Vc(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Vc(t,e,2**8))}}}function Ot(e,t=!1){if(rn(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Fo(8,e)>32||Fo(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return li(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(li(n,e,8,t))}}}function qc(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function hf(e,t){if(rn(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const r=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(r,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const r=n.slice(0,-e),o=t(r).slice(0,e),s=n.slice(-e);for(let i=0;i<e;i++)if(o[i]!==s[i])throw new Error("Invalid checksum");return r}}}const Cw={alphabet:wt,chain:lt,checksum:hf,radix:df,radix2:Ot,join:vt,padding:Qr},pf=lt(Ot(4),wt("0123456789ABCDEF"),vt("")),gf=lt(Ot(5),wt("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),Qr(5),vt("")),Aw=lt(Ot(5),wt("0123456789ABCDEFGHIJKLMNOPQRSTUV"),Qr(5),vt("")),Sw=lt(Ot(5),wt("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),vt(""),uf(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Qn=lt(Ot(6),wt("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),Qr(6),vt("")),mf=lt(Ot(6),wt("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),Qr(6),vt("")),Ji=e=>lt(df(58),wt(e),vt("")),Vr=Ji("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),$w=Ji("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),Tw=Ji("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Gc=[0,2,3,5,6,7,9,10,11],bf={encode(e){let t="";for(let n=0;n<e.length;n+=8){const r=e.subarray(n,n+8);t+=Vr.encode(r).padStart(Gc[r.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const r=e.slice(n,n+11),o=Gc.indexOf(r.length),s=Vr.decode(r);for(let i=0;i<s.length-o;i++)if(s[i]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(s.slice(s.length-o)))}return Uint8Array.from(t)}},yf=e=>lt(hf(4,t=>e(e(t))),Vr),ui=lt(wt("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),vt("")),Zc=[996825010,642813549,513874426,1027748829,705979059];function yr(e){const t=e>>25;let n=(e&33554431)<<5;for(let r=0;r<Zc.length;r++)(t>>r&1)===1&&(n^=Zc[r]);return n}function Yc(e,t,n=1){const r=e.length;let o=1;for(let s=0;s<r;s++){const i=e.charCodeAt(s);if(i<33||i>126)throw new Error(`Invalid prefix (${e})`);o=yr(o)^i>>5}o=yr(o);for(let s=0;s<r;s++)o=yr(o)^e.charCodeAt(s)&31;for(let s of t)o=yr(o)^s;for(let s=0;s<6;s++)o=yr(o);return o^=n,ui.encode(li([o%2**30],30,5,!1))}function wf(e){const t=e==="bech32"?1:734539939,n=Ot(5),r=n.decode,o=n.encode,s=qc(r);function i(l,f,d=90){if(typeof l!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof l}`);if(!Array.isArray(f)||f.length&&typeof f[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof f}`);const g=l.length+7+f.length;if(d!==!1&&g>d)throw new TypeError(`Length ${g} exceeds limit ${d}`);return l=l.toLowerCase(),`${l}1${ui.encode(f)}${Yc(l,f,t)}`}function a(l,f=90){if(typeof l!="string")throw new Error(`bech32.decode input should be string, not ${typeof l}`);if(l.length<8||f!==!1&&l.length>f)throw new TypeError(`Wrong string length: ${l.length} (${l}). Expected (8..${f})`);const d=l.toLowerCase();if(l!==d&&l!==l.toUpperCase())throw new Error("String must be lowercase or uppercase");l=d;const g=l.lastIndexOf("1");if(g===0||g===-1)throw new Error('Letter "1" must be present between prefix and data only');const h=l.slice(0,g),b=l.slice(g+1);if(b.length<6)throw new Error("Data must be at least 6 characters long");const w=ui.decode(b).slice(0,-6),y=Yc(h,w,t);if(!b.endsWith(y))throw new Error(`Invalid checksum in ${l}: expected "${y}"`);return{prefix:h,words:w}}const c=qc(a);function u(l){const{prefix:f,words:d}=a(l,!1);return{prefix:f,words:d,bytes:r(d)}}return{encode:i,decode:a,decodeToBytes:u,decodeUnsafe:c,fromWords:r,fromWordsUnsafe:s,toWords:o}}const $t=wf("bech32"),kw=wf("bech32m"),vf={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},xf=lt(Ot(4),wt("0123456789abcdef"),vt(""),uf(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),qr={utf8:vf,hex:xf,base16:pf,base32:gf,base64:Qn,base64url:mf,base58:Vr,base58xmr:bf},Ef=`Invalid encoding type. Available types: ${Object.keys(qr).join(", ")}`,_f=(e,t)=>{if(typeof e!="string"||!qr.hasOwnProperty(e))throw new TypeError(Ef);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return qr[e].encode(t)},Ow=_f,Cf=(e,t)=>{if(!qr.hasOwnProperty(e))throw new TypeError(Ef);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return qr[e].decode(t)},Rw=Cf,Iw=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:rn,utils:Cw,base16:pf,base32:gf,base32hex:Aw,base32crockford:Sw,base64:Qn,base64url:mf,base58:Vr,base58flickr:$w,base58xrp:Tw,base58xmr:bf,base58check:yf,bech32:$t,bech32m:kw,utf8:vf,hex:xf,bytesToString:_f,str:Ow,stringToBytes:Cf,bytes:Rw},Symbol.toStringTag,{value:"Module"}));var ea={};Object.defineProperty(ea,"__esModule",{value:!0});var ta=ea.wordlist=void 0;ta=ea.wordlist=`abandon
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
`);var qe={};function zo(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function Af(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function Vt(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function Sf(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");zo(e.outputLen),zo(e.blockLen)}function $f(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function Tf(e,t){Vt(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Gt={number:zo,bool:Af,bytes:Vt,hash:Sf,exists:$f,output:Tf},Pw=Object.freeze(Object.defineProperty({__proto__:null,number:zo,bool:Af,bytes:Vt,hash:Sf,exists:$f,output:Tf,default:Gt},Symbol.toStringTag,{value:"Module"})),Hw=ur(Pw);var Jn={},He={};Object.defineProperty(He,"__esModule",{value:!0});He.output=He.exists=He.hash=He.bytes=He.bool=He.number=void 0;function Do(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}He.number=Do;function kf(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}He.bool=kf;function na(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}He.bytes=na;function Of(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Do(e.outputLen),Do(e.blockLen)}He.hash=Of;function Rf(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}He.exists=Rf;function If(e,t){na(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}He.output=If;const Lw={number:Do,bool:kf,bytes:na,hash:Of,exists:Rf,output:If};He.default=Lw;var Pf={},ra={};const xr={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},Bw=Object.freeze(Object.defineProperty({__proto__:null,crypto:xr},Symbol.toStringTag,{value:"Module"})),jw=ur(Bw);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=jw,n=v=>new Uint8Array(v.buffer,v.byteOffset,v.byteLength);e.u8=n;const r=v=>new Uint32Array(v.buffer,v.byteOffset,Math.floor(v.byteLength/4));e.u32=r;const o=v=>new DataView(v.buffer,v.byteOffset,v.byteLength);e.createView=o;const s=(v,A)=>v<<32-A|v>>>A;if(e.rotr=s,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const i=Array.from({length:256},(v,A)=>A.toString(16).padStart(2,"0"));function a(v){if(!(v instanceof Uint8Array))throw new Error("Uint8Array expected");let A="";for(let M=0;M<v.length;M++)A+=i[v[M]];return A}e.bytesToHex=a;function c(v){if(typeof v!="string")throw new TypeError("hexToBytes: expected string, got "+typeof v);if(v.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const A=new Uint8Array(v.length/2);for(let M=0;M<A.length;M++){const z=M*2,k=v.slice(z,z+2),U=Number.parseInt(k,16);if(Number.isNaN(U)||U<0)throw new Error("Invalid byte sequence");A[M]=U}return A}e.hexToBytes=c;const u=async()=>{};e.nextTick=u;async function l(v,A,M){let z=Date.now();for(let k=0;k<v;k++){M(k);const U=Date.now()-z;U>=0&&U<A||(await(0,e.nextTick)(),z+=U)}}e.asyncLoop=l;function f(v){if(typeof v!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof v}`);return new TextEncoder().encode(v)}e.utf8ToBytes=f;function d(v){if(typeof v=="string"&&(v=f(v)),!(v instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof v})`);return v}e.toBytes=d;function g(...v){if(!v.every(z=>z instanceof Uint8Array))throw new Error("Uint8Array list expected");if(v.length===1)return v[0];const A=v.reduce((z,k)=>z+k.length,0),M=new Uint8Array(A);for(let z=0,k=0;z<v.length;z++){const U=v[z];M.set(U,k),k+=U.length}return M}e.concatBytes=g;class h{clone(){return this._cloneInto()}}e.Hash=h;const b=v=>Object.prototype.toString.call(v)==="[object Object]"&&v.constructor===Object;function w(v,A){if(A!==void 0&&(typeof A!="object"||!b(A)))throw new TypeError("Options should be object or undefined");return Object.assign(v,A)}e.checkOpts=w;function y(v){const A=z=>v().update(d(z)).digest(),M=v();return A.outputLen=M.outputLen,A.blockLen=M.blockLen,A.create=()=>v(),A}e.wrapConstructor=y;function E(v){const A=(z,k)=>v(k).update(d(z)).digest(),M=v({});return A.outputLen=M.outputLen,A.blockLen=M.blockLen,A.create=z=>v(z),A}e.wrapConstructorWithOpts=E;function $(v=32){if(t.crypto.web)return t.crypto.web.getRandomValues(new Uint8Array(v));if(t.crypto.node)return new Uint8Array(t.crypto.node.randomBytes(v).buffer);throw new Error("The environment doesn't have randomBytes function")}e.randomBytes=$})(ra);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=He,n=ra;class r extends n.Hash{constructor(i,a){super(),this.finished=!1,this.destroyed=!1,t.default.hash(i);const c=(0,n.toBytes)(a);if(this.iHash=i.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const u=this.blockLen,l=new Uint8Array(u);l.set(c.length>u?i.create().update(c).digest():c);for(let f=0;f<l.length;f++)l[f]^=54;this.iHash.update(l),this.oHash=i.create();for(let f=0;f<l.length;f++)l[f]^=106;this.oHash.update(l),l.fill(0)}update(i){return t.default.exists(this),this.iHash.update(i),this}digestInto(i){t.default.exists(this),t.default.bytes(i,this.outputLen),this.finished=!0,this.iHash.digestInto(i),this.oHash.update(i),this.oHash.digestInto(i),this.destroy()}digest(){const i=new Uint8Array(this.oHash.outputLen);return this.digestInto(i),i}_cloneInto(i){i||(i=Object.create(Object.getPrototypeOf(this),{}));const{oHash:a,iHash:c,finished:u,destroyed:l,blockLen:f,outputLen:d}=this;return i=i,i.finished=u,i.destroyed=l,i.blockLen=f,i.outputLen=d,i.oHash=a._cloneInto(i.oHash),i.iHash=c._cloneInto(i.iHash),i}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(s,i,a)=>new r(s,i).update(a).digest();e.hmac=o,e.hmac.create=(s,i)=>new r(s,i)})(Pf);Object.defineProperty(Jn,"__esModule",{value:!0});Jn.pbkdf2Async=Jn.pbkdf2=void 0;const mo=He,Mw=Pf,Fn=ra;function Hf(e,t,n,r){mo.default.hash(e);const o=(0,Fn.checkOpts)({dkLen:32,asyncTick:10},r),{c:s,dkLen:i,asyncTick:a}=o;if(mo.default.number(s),mo.default.number(i),mo.default.number(a),s<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const c=(0,Fn.toBytes)(t),u=(0,Fn.toBytes)(n),l=new Uint8Array(i),f=Mw.hmac.create(e,c),d=f._cloneInto().update(u);return{c:s,dkLen:i,asyncTick:a,DK:l,PRF:f,PRFSalt:d}}function Lf(e,t,n,r,o){return e.destroy(),t.destroy(),r&&r.destroy(),o.fill(0),n}function Uw(e,t,n,r){const{c:o,dkLen:s,DK:i,PRF:a,PRFSalt:c}=Hf(e,t,n,r);let u;const l=new Uint8Array(4),f=(0,Fn.createView)(l),d=new Uint8Array(a.outputLen);for(let g=1,h=0;h<s;g++,h+=a.outputLen){const b=i.subarray(h,h+a.outputLen);f.setInt32(0,g,!1),(u=c._cloneInto(u)).update(l).digestInto(d),b.set(d.subarray(0,b.length));for(let w=1;w<o;w++){a._cloneInto(u).update(d).digestInto(d);for(let y=0;y<b.length;y++)b[y]^=d[y]}}return Lf(a,c,i,u,d)}Jn.pbkdf2=Uw;async function Nw(e,t,n,r){const{c:o,dkLen:s,asyncTick:i,DK:a,PRF:c,PRFSalt:u}=Hf(e,t,n,r);let l;const f=new Uint8Array(4),d=(0,Fn.createView)(f),g=new Uint8Array(c.outputLen);for(let h=1,b=0;b<s;h++,b+=c.outputLen){const w=a.subarray(b,b+c.outputLen);d.setInt32(0,h,!1),(l=u._cloneInto(l)).update(f).digestInto(g),w.set(g.subarray(0,w.length)),await(0,Fn.asyncLoop)(o-1,i,y=>{c._cloneInto(l).update(g).digestInto(g);for(let E=0;E<w.length;E++)w[E]^=g[E]})}return Lf(c,u,a,l,g)}Jn.pbkdf2Async=Nw;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Fw=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),zw=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),_n=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),rt=(e,t)=>e<<32-t|e>>>t,Bf=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Bf)throw new Error("Non little-endian hardware is not supported");const Dw=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function jf(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=Dw[e[n]];return t}function Mf(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const r=n*2,o=e.slice(r,r+2),s=Number.parseInt(o,16);if(Number.isNaN(s)||s<0)throw new Error("Invalid byte sequence");t[n]=s}return t}const Uf=async()=>{};async function Kw(e,t,n){let r=Date.now();for(let o=0;o<e;o++){n(o);const s=Date.now()-r;s>=0&&s<t||(await Uf(),r+=s)}}function oa(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function Jr(e){if(typeof e=="string"&&(e=oa(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function Er(...e){if(!e.every(r=>r instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((r,o)=>r+o.length,0),n=new Uint8Array(t);for(let r=0,o=0;r<e.length;r++){const s=e[r];n.set(s,o),o+=s.length}return n}class sa{clone(){return this._cloneInto()}}const Ww=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function Vw(e,t){if(t!==void 0&&(typeof t!="object"||!Ww(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function on(e){const t=r=>e().update(Jr(r)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function qw(e){const t=(r,o)=>e(o).update(Jr(r)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=r=>e(r),t}function Gw(e=32){if(xr.web)return xr.web.getRandomValues(new Uint8Array(e));if(xr.node)return new Uint8Array(xr.node.randomBytes(e).buffer);throw new Error("The environment doesn't have randomBytes function")}const Zw=Object.freeze(Object.defineProperty({__proto__:null,u8:Fw,u32:zw,createView:_n,rotr:rt,isLE:Bf,bytesToHex:jf,hexToBytes:Mf,nextTick:Uf,asyncLoop:Kw,utf8ToBytes:oa,toBytes:Jr,concatBytes:Er,Hash:sa,checkOpts:Vw,wrapConstructor:on,wrapConstructorWithOpts:qw,randomBytes:Gw},Symbol.toStringTag,{value:"Module"}));function Yw(e,t,n,r){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,r);const o=BigInt(32),s=BigInt(4294967295),i=Number(n>>o&s),a=Number(n&s),c=r?4:0,u=r?0:4;e.setUint32(t+c,i,r),e.setUint32(t+u,a,r)}class ia extends sa{constructor(t,n,r,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=_n(this.buffer)}update(t){Gt.exists(this);const{view:n,buffer:r,blockLen:o}=this;t=Jr(t);const s=t.length;for(let i=0;i<s;){const a=Math.min(o-this.pos,s-i);if(a===o){const c=_n(t);for(;o<=s-i;i+=o)this.process(c,i);continue}r.set(t.subarray(i,i+a),this.pos),this.pos+=a,i+=a,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Gt.exists(this),Gt.output(t,this),this.finished=!0;const{buffer:n,view:r,blockLen:o,isLE:s}=this;let{pos:i}=this;n[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>o-i&&(this.process(r,0),i=0);for(let f=i;f<o;f++)n[f]=0;Yw(r,o-8,BigInt(this.length*8),s),this.process(r,0);const a=_n(t),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const u=c/4,l=this.get();if(u>l.length)throw new Error("_sha2: outputLen bigger than state");for(let f=0;f<u;f++)a.setUint32(4*f,l[f],s)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const r=t.slice(0,n);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:r,length:o,finished:s,destroyed:i,pos:a}=this;return t.length=o,t.pos=a,t.finished=s,t.destroyed=i,o%n&&t.buffer.set(r),t}}const Xw=(e,t,n)=>e&t^~e&n,Qw=(e,t,n)=>e&t^e&n^t&n,Jw=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),jt=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Mt=new Uint32Array(64);class Nf extends ia{constructor(){super(64,32,8,!1),this.A=jt[0]|0,this.B=jt[1]|0,this.C=jt[2]|0,this.D=jt[3]|0,this.E=jt[4]|0,this.F=jt[5]|0,this.G=jt[6]|0,this.H=jt[7]|0}get(){const{A:t,B:n,C:r,D:o,E:s,F:i,G:a,H:c}=this;return[t,n,r,o,s,i,a,c]}set(t,n,r,o,s,i,a,c){this.A=t|0,this.B=n|0,this.C=r|0,this.D=o|0,this.E=s|0,this.F=i|0,this.G=a|0,this.H=c|0}process(t,n){for(let f=0;f<16;f++,n+=4)Mt[f]=t.getUint32(n,!1);for(let f=16;f<64;f++){const d=Mt[f-15],g=Mt[f-2],h=rt(d,7)^rt(d,18)^d>>>3,b=rt(g,17)^rt(g,19)^g>>>10;Mt[f]=b+Mt[f-7]+h+Mt[f-16]|0}let{A:r,B:o,C:s,D:i,E:a,F:c,G:u,H:l}=this;for(let f=0;f<64;f++){const d=rt(a,6)^rt(a,11)^rt(a,25),g=l+d+Xw(a,c,u)+Jw[f]+Mt[f]|0,b=(rt(r,2)^rt(r,13)^rt(r,22))+Qw(r,o,s)|0;l=u,u=c,c=a,a=i+g|0,i=s,s=o,o=r,r=g+b|0}r=r+this.A|0,o=o+this.B|0,s=s+this.C|0,i=i+this.D|0,a=a+this.E|0,c=c+this.F|0,u=u+this.G|0,l=l+this.H|0,this.set(r,o,s,i,a,c,u,l)}roundClean(){Mt.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class ev extends Nf{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const gs=on(()=>new Nf),tv=on(()=>new ev),nv=Object.freeze(Object.defineProperty({__proto__:null,sha256:gs,sha224:tv},Symbol.toStringTag,{value:"Module"})),rv=ur(nv),bo=BigInt(2**32-1),fi=BigInt(32);function Ff(e,t=!1){return t?{h:Number(e&bo),l:Number(e>>fi&bo)}:{h:Number(e>>fi&bo)|0,l:Number(e&bo)|0}}function ov(e,t=!1){let n=new Uint32Array(e.length),r=new Uint32Array(e.length);for(let o=0;o<e.length;o++){const{h:s,l:i}=Ff(e[o],t);[n[o],r[o]]=[s,i]}return[n,r]}const sv=(e,t)=>BigInt(e>>>0)<<fi|BigInt(t>>>0),iv=(e,t,n)=>e>>>n,av=(e,t,n)=>e<<32-n|t>>>n,cv=(e,t,n)=>e>>>n|t<<32-n,lv=(e,t,n)=>e<<32-n|t>>>n,uv=(e,t,n)=>e<<64-n|t>>>n-32,fv=(e,t,n)=>e>>>n-32|t<<64-n,dv=(e,t)=>t,hv=(e,t)=>e,pv=(e,t,n)=>e<<n|t>>>32-n,gv=(e,t,n)=>t<<n|e>>>32-n,mv=(e,t,n)=>t<<n-32|e>>>64-n,bv=(e,t,n)=>e<<n-32|t>>>64-n;function yv(e,t,n,r){const o=(t>>>0)+(r>>>0);return{h:e+n+(o/2**32|0)|0,l:o|0}}const wv=(e,t,n)=>(e>>>0)+(t>>>0)+(n>>>0),vv=(e,t,n,r)=>t+n+r+(e/2**32|0)|0,xv=(e,t,n,r)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0),Ev=(e,t,n,r,o)=>t+n+r+o+(e/2**32|0)|0,_v=(e,t,n,r,o)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0)+(o>>>0),Cv=(e,t,n,r,o,s)=>t+n+r+o+s+(e/2**32|0)|0,X={fromBig:Ff,split:ov,toBig:sv,shrSH:iv,shrSL:av,rotrSH:cv,rotrSL:lv,rotrBH:uv,rotrBL:fv,rotr32H:dv,rotr32L:hv,rotlSH:pv,rotlSL:gv,rotlBH:mv,rotlBL:bv,add:yv,add3L:wv,add3H:vv,add4L:xv,add4H:Ev,add5H:Cv,add5L:_v},[Av,Sv]=X.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),Ut=new Uint32Array(80),Nt=new Uint32Array(80);class eo extends ia{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:r,Bl:o,Ch:s,Cl:i,Dh:a,Dl:c,Eh:u,El:l,Fh:f,Fl:d,Gh:g,Gl:h,Hh:b,Hl:w}=this;return[t,n,r,o,s,i,a,c,u,l,f,d,g,h,b,w]}set(t,n,r,o,s,i,a,c,u,l,f,d,g,h,b,w){this.Ah=t|0,this.Al=n|0,this.Bh=r|0,this.Bl=o|0,this.Ch=s|0,this.Cl=i|0,this.Dh=a|0,this.Dl=c|0,this.Eh=u|0,this.El=l|0,this.Fh=f|0,this.Fl=d|0,this.Gh=g|0,this.Gl=h|0,this.Hh=b|0,this.Hl=w|0}process(t,n){for(let $=0;$<16;$++,n+=4)Ut[$]=t.getUint32(n),Nt[$]=t.getUint32(n+=4);for(let $=16;$<80;$++){const v=Ut[$-15]|0,A=Nt[$-15]|0,M=X.rotrSH(v,A,1)^X.rotrSH(v,A,8)^X.shrSH(v,A,7),z=X.rotrSL(v,A,1)^X.rotrSL(v,A,8)^X.shrSL(v,A,7),k=Ut[$-2]|0,U=Nt[$-2]|0,q=X.rotrSH(k,U,19)^X.rotrBH(k,U,61)^X.shrSH(k,U,6),ie=X.rotrSL(k,U,19)^X.rotrBL(k,U,61)^X.shrSL(k,U,6),P=X.add4L(z,ie,Nt[$-7],Nt[$-16]),te=X.add4H(P,M,q,Ut[$-7],Ut[$-16]);Ut[$]=te|0,Nt[$]=P|0}let{Ah:r,Al:o,Bh:s,Bl:i,Ch:a,Cl:c,Dh:u,Dl:l,Eh:f,El:d,Fh:g,Fl:h,Gh:b,Gl:w,Hh:y,Hl:E}=this;for(let $=0;$<80;$++){const v=X.rotrSH(f,d,14)^X.rotrSH(f,d,18)^X.rotrBH(f,d,41),A=X.rotrSL(f,d,14)^X.rotrSL(f,d,18)^X.rotrBL(f,d,41),M=f&g^~f&b,z=d&h^~d&w,k=X.add5L(E,A,z,Sv[$],Nt[$]),U=X.add5H(k,y,v,M,Av[$],Ut[$]),q=k|0,ie=X.rotrSH(r,o,28)^X.rotrBH(r,o,34)^X.rotrBH(r,o,39),P=X.rotrSL(r,o,28)^X.rotrBL(r,o,34)^X.rotrBL(r,o,39),te=r&s^r&a^s&a,Ee=o&i^o&c^i&c;y=b|0,E=w|0,b=g|0,w=h|0,g=f|0,h=d|0,{h:f,l:d}=X.add(u|0,l|0,U|0,q|0),u=a|0,l=c|0,a=s|0,c=i|0,s=r|0,i=o|0;const ke=X.add3L(q,P,Ee);r=X.add3H(ke,U,ie,te),o=ke|0}({h:r,l:o}=X.add(this.Ah|0,this.Al|0,r|0,o|0)),{h:s,l:i}=X.add(this.Bh|0,this.Bl|0,s|0,i|0),{h:a,l:c}=X.add(this.Ch|0,this.Cl|0,a|0,c|0),{h:u,l}=X.add(this.Dh|0,this.Dl|0,u|0,l|0),{h:f,l:d}=X.add(this.Eh|0,this.El|0,f|0,d|0),{h:g,l:h}=X.add(this.Fh|0,this.Fl|0,g|0,h|0),{h:b,l:w}=X.add(this.Gh|0,this.Gl|0,b|0,w|0),{h:y,l:E}=X.add(this.Hh|0,this.Hl|0,y|0,E|0),this.set(r,o,s,i,a,c,u,l,f,d,g,h,b,w,y,E)}roundClean(){Ut.fill(0),Nt.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class $v extends eo{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class Tv extends eo{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class kv extends eo{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}const di=on(()=>new eo),Ov=on(()=>new $v),Rv=on(()=>new Tv),Iv=on(()=>new kv),Pv=Object.freeze(Object.defineProperty({__proto__:null,SHA512:eo,sha512:di,sha512_224:Ov,sha512_256:Rv,sha384:Iv},Symbol.toStringTag,{value:"Module"})),Hv=ur(Pv),Lv=ur(Zw),Bv=ur(Iw);Object.defineProperty(qe,"__esModule",{value:!0});var zf=qe.mnemonicToSeedSync=qe.mnemonicToSeed=Qf=qe.validateMnemonic=qe.entropyToMnemonic=qe.mnemonicToEntropy=Gf=qe.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const Df=Hw,Kf=Jn,jv=rv,Wf=Hv,Mv=Lv,yo=Bv,Uv=e=>e[0]==="\u3042\u3044\u3053\u304F\u3057\u3093";function Vf(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function aa(e){const t=Vf(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function qf(e){Df.default.bytes(e,16,20,24,28,32)}function Nv(e,t=128){if(Df.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return Xf((0,Mv.randomBytes)(t/8),e)}var Gf=qe.generateMnemonic=Nv;const Fv=e=>{const t=8-e.length/4;return new Uint8Array([(0,jv.sha256)(e)[0]>>t<<t])};function Zf(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),yo.utils.chain(yo.utils.checksum(1,Fv),yo.utils.radix2(11,!0),yo.utils.alphabet(e))}function Yf(e,t){const{words:n}=aa(e),r=Zf(t).decode(n);return qf(r),r}qe.mnemonicToEntropy=Yf;function Xf(e,t){return qf(e),Zf(t).encode(e).join(Uv(t)?"\u3000":" ")}qe.entropyToMnemonic=Xf;function zv(e,t){try{Yf(e,t)}catch{return!1}return!0}var Qf=qe.validateMnemonic=zv;const Jf=e=>Vf(`mnemonic${e}`);function Dv(e,t=""){return(0,Kf.pbkdf2Async)(Wf.sha512,aa(e).nfkd,Jf(t),{c:2048,dkLen:64})}qe.mnemonicToSeed=Dv;function Kv(e,t=""){return(0,Kf.pbkdf2)(Wf.sha512,aa(e).nfkd,Jf(t),{c:2048,dkLen:64})}zf=qe.mnemonicToSeedSync=Kv;class ed extends sa{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,Gt.hash(t);const r=Jr(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,s=new Uint8Array(o);s.set(r.length>o?t.create().update(r).digest():r);for(let i=0;i<s.length;i++)s[i]^=54;this.iHash.update(s),this.oHash=t.create();for(let i=0;i<s.length;i++)s[i]^=106;this.oHash.update(s),s.fill(0)}update(t){return Gt.exists(this),this.iHash.update(t),this}digestInto(t){Gt.exists(this),Gt.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:o,destroyed:s,blockLen:i,outputLen:a}=this;return t=t,t.finished=o,t.destroyed=s,t.blockLen=i,t.outputLen=a,t.oHash=n._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Ko=(e,t,n)=>new ed(e,t).update(n).digest();Ko.create=(e,t)=>new ed(e,t);const Wv=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),td=Uint8Array.from({length:16},(e,t)=>t),Vv=td.map(e=>(9*e+5)%16);let ca=[td],la=[Vv];for(let e=0;e<4;e++)for(let t of[ca,la])t.push(t[e].map(n=>Wv[n]));const nd=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),qv=ca.map((e,t)=>e.map(n=>nd[t][n])),Gv=la.map((e,t)=>e.map(n=>nd[t][n])),Zv=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),Yv=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),wo=(e,t)=>e<<t|e>>>32-t;function Xc(e,t,n,r){return e===0?t^n^r:e===1?t&n|~t&r:e===2?(t|~n)^r:e===3?t&r|n&~r:t^(n|~r)}const vo=new Uint32Array(16);class Xv extends ia{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:r,h3:o,h4:s}=this;return[t,n,r,o,s]}set(t,n,r,o,s){this.h0=t|0,this.h1=n|0,this.h2=r|0,this.h3=o|0,this.h4=s|0}process(t,n){for(let g=0;g<16;g++,n+=4)vo[g]=t.getUint32(n,!0);let r=this.h0|0,o=r,s=this.h1|0,i=s,a=this.h2|0,c=a,u=this.h3|0,l=u,f=this.h4|0,d=f;for(let g=0;g<5;g++){const h=4-g,b=Zv[g],w=Yv[g],y=ca[g],E=la[g],$=qv[g],v=Gv[g];for(let A=0;A<16;A++){const M=wo(r+Xc(g,s,a,u)+vo[y[A]]+b,$[A])+f|0;r=f,f=u,u=wo(a,10)|0,a=s,s=M}for(let A=0;A<16;A++){const M=wo(o+Xc(h,i,c,l)+vo[E[A]]+w,v[A])+d|0;o=d,d=l,l=wo(c,10)|0,c=i,i=M}}this.set(this.h1+a+l|0,this.h2+u+d|0,this.h3+f+o|0,this.h4+r+i|0,this.h0+s+c|0)}roundClean(){vo.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const Qv=on(()=>new Xv);ee.hmacSha256Sync=(e,...t)=>Ko(gs,e,ee.concatBytes(...t));const Ps=yf(gs);function Qc(e){return BigInt(`0x${jf(e)}`)}function Jv(e){return Mf(e.toString(16).padStart(64,"0"))}const ex=oa("Bitcoin seed"),Hs={private:76066276,public:76067358},Ls=2147483648,tx=e=>Qv(gs(e)),nx=e=>_n(e).getUint32(0,!1),xo=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return _n(t).setUint32(0,e,!1),t};class pn{constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||Hs,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!ee.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:Qc(t.privateKey),this.privKeyBytes=Jv(this.privKey),this.pubKey=rw(t.privateKey,!0)}else if(t.publicKey)this.pubKey=oe.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=tx(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return nx(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return Ps.encode(this.serialize(this.versions.private,Er(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Ps.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=Hs){if(Vt(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const r=Ko(di,ex,t);return new pn({versions:n,chainCode:r.slice(32),privateKey:r.slice(0,32)})}static fromExtendedKey(t,n=Hs){const r=Ps.decode(t),o=_n(r),s=o.getUint32(0,!1),i={versions:n,depth:r[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:r.slice(13,45)},a=r.slice(45),c=a[0]===0;if(s!==n[c?"private":"public"])throw new Error("Version mismatch");return c?new pn({...i,privateKey:a.slice(1)}):new pn({...i,publicKey:a})}static fromJSON(t){return pn.fromExtendedKey(t.xpriv)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let r=this;for(const o of n){const s=/^(\d+)('?)$/.exec(o);if(!s||s.length!==3)throw new Error(`Invalid child index: ${o}`);let i=+s[1];if(!Number.isSafeInteger(i)||i>=Ls)throw new Error("Invalid index");s[2]==="'"&&(i+=Ls),r=r.deriveChild(i)}return r}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=xo(t);if(t>=Ls){const a=this.privateKey;if(!a)throw new Error("Could not derive hardened child key");n=Er(new Uint8Array([0]),a,n)}else n=Er(this.pubKey,n);const r=Ko(di,this.chainCode,n),o=Qc(r.slice(0,32)),s=r.slice(32);if(!ee.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const i={versions:this.versions,chainCode:s,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const a=ee.mod(this.privKey+o,ge.n);if(!ee.isValidPrivateKey(a))throw new Error("The tweak was out of range or the resulted private key is invalid");i.privateKey=a}else{const a=oe.fromHex(this.pubKey).add(oe.fromPrivateKey(o));if(a.equals(oe.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");i.publicKey=a.toRawBytes(!0)}return new pn(i)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Vt(t,32),aw(t,this.privKey,{canonical:!0,der:!1})}verify(t,n){if(Vt(t,32),Vt(n,64),!this.publicKey)throw new Error("No publicKey set!");let r;try{r=At.fromCompact(n)}catch{return!1}return lw(r,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Vt(n,33),Er(xo(t),new Uint8Array([this.depth]),xo(this.parentFingerprint),xo(this.index),this.chainCode,n)}}class rd extends ci{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,gw(t);const r=Qi(n);if(this.iHash=t.create(),!(this.iHash instanceof ci))throw new TypeError("Expected instance of class which extends utils.Hash");const o=this.blockLen=this.iHash.blockLen;this.outputLen=this.iHash.outputLen;const s=new Uint8Array(o);s.set(r.length>this.iHash.blockLen?t.create().update(r).digest():r);for(let i=0;i<s.length;i++)s[i]^=54;this.iHash.update(s),this.oHash=t.create();for(let i=0;i<s.length;i++)s[i]^=106;this.oHash.update(s),s.fill(0)}update(t){if(this.destroyed)throw new Error("instance is destroyed");return this.iHash.update(t),this}digestInto(t){if(this.destroyed)throw new Error("instance is destroyed");if(!(t instanceof Uint8Array)||t.length!==this.outputLen)throw new Error("HMAC: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:r,finished:o,destroyed:s,blockLen:i,outputLen:a}=this;return t=t,t.finished=o,t.destroyed=s,t.blockLen=i,t.outputLen=a,t.oHash=n._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Wo=(e,t,n)=>new rd(e,t).update(n).digest();Wo.create=(e,t)=>new rd(e,t);Wo.init=Wo.create;var rx=Object.defineProperty,kn=(e,t)=>{for(var n in t)rx(e,n,{get:t[n],enumerable:!0})};function ox(){return ee.bytesToHex(ee.randomPrivateKey())}function sx(e){return ee.bytesToHex(Yr.getPublicKey(e))}var ix={};kn(ix,{insertEventIntoAscendingList:()=>lx,insertEventIntoDescendingList:()=>cx,normalizeURL:()=>ax,utf8Decoder:()=>Vo,utf8Encoder:()=>On});var Vo=new TextDecoder("utf-8"),On=new TextEncoder;function ax(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function cx(e,t){var i;let n=0,r=e.length-1,o,s=n;if(r<0)s=0;else if(t.created_at<e[r].created_at)s=r+1;else if(t.created_at>=e[n].created_at)s=n;else for(;;){if(r<=n+1){s=r;break}if(o=Math.floor(n+(r-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)r=o;else{s=o;break}}return((i=e[s])==null?void 0:i.id)!==t.id?[...e.slice(0,s),t,...e.slice(s)]:e}function lx(e,t){var i;let n=0,r=e.length-1,o,s=n;if(r<0)s=0;else if(t.created_at>e[r].created_at)s=r+1;else if(t.created_at<=e[n].created_at)s=n;else for(;;){if(r<=n+1){s=r;break}if(o=Math.floor(n+(r-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)r=o;else{s=o;break}}return((i=e[s])==null?void 0:i.id)!==t.id?[...e.slice(0,s),t,...e.slice(s)]:e}function ux(e){if(!sd(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function od(e){let t=Xr(On.encode(ux(e)));return ee.bytesToHex(t)}function sd(e){if(typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let r=0;r<n.length;r++)if(typeof n[r]=="object")return!1}return!0}function fx(e){return Yr.verifySync(e.sig,od(e),e.pubkey)}function a2(e,t){return ee.bytesToHex(Yr.signSync(od(e),t))}function dx(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1)return!1;for(let n in e)if(n[0]==="#"){let r=n.slice(1),o=e[`#${r}`];if(o&&!t.tags.find(([s,i])=>s===n.slice(1)&&o.indexOf(i)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function hx(e,t){for(let n=0;n<e.length;n++)if(dx(e[n],t))return!0;return!1}var px={};kn(px,{getHex64:()=>ms,getInt:()=>id,getSubscriptionId:()=>ad,matchEventId:()=>gx,matchEventKind:()=>bx,matchEventPubkey:()=>mx});function ms(e,t){let n=t.length+3,r=e.indexOf(`"${t}":`)+n,o=e.slice(r).indexOf('"')+r+1;return e.slice(o,o+64)}function id(e,t){let n=t.length,r=e.indexOf(`"${t}":`)+n+3,o=e.slice(r),s=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,s),10)}function ad(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let r=t+7+1+n,o=e.slice(r+1,80).indexOf('"');if(o===-1)return null;let s=r+1+o;return e.slice(r+1,s)}function gx(e,t){return t===ms(e,"id")}function mx(e,t){return t===ms(e,"pubkey")}function bx(e,t){return t===id(e,"kind")}function c2(e){var t,n,r,o=new Promise(g=>{r=g}),s={},i={connect:[],disconnect:[],error:[],notice:[]},a={},c={};async function u(){return new Promise((g,h)=>{t=new WebSocket(e),t.onopen=()=>{i.connect.forEach(E=>E()),r(),g()},t.onerror=()=>{i.error.forEach(E=>E()),h()},t.onclose=async()=>{i.disconnect.forEach(E=>E()),n&&n()};let b=[],w;t.onmessage=E=>{b.push(E.data),w||(w=setInterval(y,0))};function y(){var v,A,M,z;if(b.length===0){clearInterval(w),w=null;return}var E=b.shift();if(!E)return;let $=ad(E);if($){let k=s[$];if(k&&k.alreadyHaveEvent&&k.alreadyHaveEvent(ms(E,"id"),e))return}try{let k=JSON.parse(E);switch(k[0]){case"EVENT":let U=k[1],q=k[2];sd(q)&&s[U]&&(s[U].skipVerification||fx(q))&&hx(s[U].filters,q)&&(s[U],(((v=a[U])==null?void 0:v.event)||[]).forEach(P=>P(q)));return;case"EOSE":{let P=k[1];(((A=a[P])==null?void 0:A.eose)||[]).forEach(te=>te());return}case"OK":{let P=k[1],te=k[2],Ee=k[3]||"";te?(M=c[P])==null||M.ok.forEach(ke=>ke()):(z=c[P])==null||z.failed.forEach(ke=>ke(Ee));return}case"NOTICE":let ie=k[1];i.notice.forEach(P=>P(ie));return}}catch{return}}})}async function l(){(t==null?void 0:t.readyState)&&t.readyState===1||await u()}async function f(g){let h=JSON.stringify(g);await o;try{t.send(h)}catch(b){console.log(b)}}const d=(g,{skipVerification:h=!1,alreadyHaveEvent:b=null,id:w=Math.random().toString().slice(2)}={})=>{let y=w;return s[y]={id:y,filters:g,skipVerification:h,alreadyHaveEvent:b},f(["REQ",y,...g]),{sub:(E,$={})=>d(E||g,{skipVerification:$.skipVerification||h,alreadyHaveEvent:$.alreadyHaveEvent||b,id:y}),unsub:()=>{delete s[y],delete a[y],f(["CLOSE",y])},on:(E,$)=>{a[y]=a[y]||{event:[],eose:[]},a[y][E].push($)},off:(E,$)=>{let v=a[y],A=v[E].indexOf($);A>=0&&v[E].splice(A,1)}}};return{url:e,sub:d,on:(g,h)=>{i[g].push(h),g==="connect"&&(t==null?void 0:t.readyState)===1&&h()},off:(g,h)=>{let b=i[g].indexOf(h);b!==-1&&i[g].splice(b,1)},list:(g,h)=>new Promise(b=>{let w=d(g,h),y=[],E=setTimeout(()=>{w.unsub(),b(y)},1500);w.on("eose",()=>{w.unsub(),clearTimeout(E),b(y)}),w.on("event",$=>{y.push($)})}),get:(g,h)=>new Promise(b=>{let w=d([g],h),y=setTimeout(()=>{w.unsub(),b(null)},1500);w.on("event",E=>{w.unsub(),clearTimeout(y),b(E)})}),publish(g){if(!g.id)throw new Error(`event ${g} has no id`);let h=g.id;var b=!1,w=!1;f(["EVENT",g]).then(()=>{b=!0,w&&(y(),w=!1)}).catch(()=>{});const y=()=>{let E=d([{ids:[h]}],{id:`monitor-${h.slice(0,5)}`}),$=setTimeout(()=>{var v;(((v=c[h])==null?void 0:v.failed)||[]).forEach(A=>A("event not seen after 5 seconds")),E.unsub()},5e3);E.on("event",()=>{var v;clearTimeout($),(((v=c[h])==null?void 0:v.seen)||[]).forEach(A=>A())})};return{on:(E,$)=>{c[h]=c[h]||{ok:[],seen:[],failed:[]},c[h][E].push($),E==="seen"&&(b?y():w=!0)},off:(E,$)=>{let v=c[h];if(!v)return;let A=v[E].indexOf($);A>=0&&v[E].splice(A,1)}}},connect:l,close(){return t.readyState>1?Promise.resolve():(t.close(),new Promise(g=>{n=g}))},get status(){var g;return(g=t==null?void 0:t.readyState)!=null?g:3}}}var yx={};kn(yx,{decrypt:()=>vx,encrypt:()=>wx});async function wx(e,t,n){const r=tf(e,"02"+t),o=cd(r);let s=Uint8Array.from(bw(16)),i=On.encode(n),a=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),c=await crypto.subtle.encrypt({name:"AES-CBC",iv:s},a,i),u=Qn.encode(new Uint8Array(c)),l=Qn.encode(new Uint8Array(s.buffer));return`${u}?iv=${l}`}async function vx(e,t,n){let[r,o]=n.split("?iv="),s=tf(e,"02"+t),i=cd(s),a=await crypto.subtle.importKey("raw",i,{name:"AES-CBC"},!1,["decrypt"]),c=Qn.decode(r),u=Qn.decode(o),l=await crypto.subtle.decrypt({name:"AES-CBC",iv:u},a,c);return Vo.decode(l)}function cd(e){return e.slice(1,33)}var xx={};kn(xx,{queryProfile:()=>Cx,searchDomain:()=>_x,useFetchImplementation:()=>Ex});var bs;try{bs=fetch}catch{}function Ex(e){bs=e}async function _x(e,t=""){try{return(await(await bs(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function Cx(e){var i,a;let[t,n]=e.split("@");if(n||(n=t,t="_"),!t.match(/^[A-Za-z0-9-_]+$/))return null;let r=await(await bs(`https://${n}/.well-known/nostr.json?name=${t}`)).json();if(!((i=r==null?void 0:r.names)!=null&&i[t]))return null;let o=r.names[t],s=((a=r.relays)==null?void 0:a[o])||[];return{pubkey:o,relays:s}}var Ax={};kn(Ax,{generateSeedWords:()=>$x,privateKeyFromSeedWords:()=>Sx,validateWords:()=>Tx});function Sx(e,t){let r=pn.fromMasterSeed(zf(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!r)throw new Error("could not derive private key");return ee.bytesToHex(r)}function $x(){return Gf(ta)}function Tx(e){return Qf(e,ta)}var kx={};kn(kx,{decode:()=>Ox,neventEncode:()=>Lx,noteEncode:()=>Px,nprofileEncode:()=>Hx,npubEncode:()=>Ix,nsecEncode:()=>Rx});var ys=5e3;function Ox(e){var o,s;let{prefix:t,words:n}=$t.decode(e,ys),r=new Uint8Array($t.fromWords(n));if(t==="nprofile"){let i=Jc(r);if(!((o=i[0])!=null&&o[0]))throw new Error("missing TLV 0 for nprofile");if(i[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:ee.bytesToHex(i[0][0]),relays:i[1].map(a=>Vo.decode(a))}}}if(t==="nevent"){let i=Jc(r);if(!((s=i[0])!=null&&s[0]))throw new Error("missing TLV 0 for nevent");if(i[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nevent",data:{id:ee.bytesToHex(i[0][0]),relays:i[1].map(a=>Vo.decode(a))}}}if(t==="nsec"||t==="npub"||t==="note")return{type:t,data:ee.bytesToHex(r)};throw new Error(`unknown prefix ${t}`)}function Jc(e){let t={},n=e;for(;n.length>0;){let r=n[0],o=n[1],s=n.slice(2,2+o);n=n.slice(2+o),!(s.length<o)&&(t[r]=t[r]||[],t[r].push(s))}return t}function Rx(e){return ua("nsec",e)}function Ix(e){return ua("npub",e)}function Px(e){return ua("note",e)}function ua(e,t){let n=ee.hexToBytes(t),r=$t.toWords(n);return $t.encode(e,r,ys)}function Hx(e){let t=ld({0:[ee.hexToBytes(e.pubkey)],1:(e.relays||[]).map(r=>On.encode(r))}),n=$t.toWords(t);return $t.encode("nprofile",n,ys)}function Lx(e){let t=ld({0:[ee.hexToBytes(e.id)],1:(e.relays||[]).map(r=>On.encode(r))}),n=$t.toWords(t);return $t.encode("nevent",n,ys)}function ld(e){let t=[];return Object.entries(e).forEach(([n,r])=>{r.forEach(o=>{let s=new Uint8Array(o.length+2);s.set([parseInt(n)],0),s.set([o.length],1),s.set(o,2),t.push(s)})}),ee.concatBytes(...t)}var Bx={};kn(Bx,{createDelegation:()=>jx,getDelegator:()=>Mx});function jx(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let r=n.join("&");if(r==="")throw new Error("refusing to create a delegation without any conditions");let o=Xr(On.encode(`nostr:delegation:${t.pubkey}:${r}`)),s=ee.bytesToHex(Yr.signSync(o,e));return{from:sx(e),to:t.pubkey,cond:r,sig:s}}function Mx(e){let t=e.tags.find(a=>a[0]==="delegation"&&a.length>=4);if(!t)return null;let n=t[1],r=t[2],o=t[3],s=r.split("&");for(let a=0;a<s.length;a++){let[c,u,l]=s[a].split(/\b/);if(!(c==="kind"&&u==="="&&e.kind===parseInt(l))){if(c==="created_at"&&u==="<"&&e.created_at<parseInt(l))continue;if(c==="created_at"&&u===">"&&e.created_at>parseInt(l))continue;return null}}let i=Xr(On.encode(`nostr:delegation:${e.pubkey}:${r}`));return Yr.verifySync(o,i,n)?n:null}ee.hmacSha256Sync=(e,...t)=>Wo(Xr,e,ee.concatBytes(...t));ee.sha256Sync=(...e)=>Xr(ee.concatBytes(...e));const fa="prikey";function Ux(){return ox()}function Nx(e){localStorage.setItem(fa,e)}function l2(){const e=Ux();return Nx(e),e}function u2(){window.localStorage[fa]="",location.reload()}const ud=K1({history:i1(),routes:[{path:"/login",name:"login",component:()=>Pt(()=>import("./LoginView.c771b0fe.js"),["assets/LoginView.c771b0fe.js","assets/Ellipsis.vue_vue_type_script_setup_true_lang.dde593dd.js","assets/Space.e53fc030.js","assets/naiveUi.ca5165eb.js","assets/use-locale.f5546dc0.js","assets/user.62a3b15e.js","assets/Icon.dd751103.js","assets/RelayConfig.vue_vue_type_script_setup_true_lang.48777afe.js","assets/Card.2239ab71.js"])},{path:"/",redirect:"/home",component:()=>Pt(()=>import("./LayoutView.8715985b.js"),["assets/LayoutView.8715985b.js","assets/user.62a3b15e.js","assets/Space.e53fc030.js","assets/use-locale.f5546dc0.js","assets/Dropdown.b5400b00.js","assets/Icon.dd751103.js","assets/fade-in-scale-up.cssr.8655525e.js"]),children:[{path:"/home",component:()=>Pt(()=>import("./HomeView.5f8aa29e.js"),["assets/HomeView.5f8aa29e.js","assets/user.62a3b15e.js","assets/PostList.vue_vue_type_script_setup_true_lang.48650ecf.js","assets/PostList.3b3877b2.css","assets/Space.e53fc030.js","assets/fade-in-scale-up.cssr.8655525e.js","assets/use-locale.f5546dc0.js","assets/Card.2239ab71.js"])},{path:"/relays",component:()=>Pt(()=>import("./RelaysView.195f012c.js"),["assets/RelaysView.195f012c.js","assets/RelayConfig.vue_vue_type_script_setup_true_lang.48777afe.js","assets/user.62a3b15e.js","assets/Ellipsis.vue_vue_type_script_setup_true_lang.dde593dd.js","assets/Space.e53fc030.js","assets/Card.2239ab71.js","assets/Icon.dd751103.js"])},{path:"/channels",component:()=>Pt(()=>import("./ChannelsView.6bae9abb.js"),["assets/ChannelsView.6bae9abb.js","assets/channel.fc21e593.js","assets/user.62a3b15e.js"])},{path:"/channel/message/:id",component:()=>Pt(()=>import("./ChannelMessageView.e957164f.js"),["assets/ChannelMessageView.e957164f.js","assets/channel.fc21e593.js","assets/user.62a3b15e.js"])},{path:"/profile/:hash",component:()=>Pt(()=>import("./ProfileView.e51b43b6.js"),["assets/ProfileView.e51b43b6.js","assets/user.62a3b15e.js","assets/PostList.vue_vue_type_script_setup_true_lang.48650ecf.js","assets/PostList.3b3877b2.css","assets/Space.e53fc030.js","assets/fade-in-scale-up.cssr.8655525e.js","assets/use-locale.f5546dc0.js","assets/Card.2239ab71.js","assets/Ellipsis.vue_vue_type_script_setup_true_lang.dde593dd.js","assets/naiveUi.ca5165eb.js","assets/Icon.dd751103.js","assets/Dropdown.b5400b00.js"])},{path:"/profile",component:()=>Pt(()=>import("./ProfileView.e51b43b6.js"),["assets/ProfileView.e51b43b6.js","assets/user.62a3b15e.js","assets/PostList.vue_vue_type_script_setup_true_lang.48650ecf.js","assets/PostList.3b3877b2.css","assets/Space.e53fc030.js","assets/fade-in-scale-up.cssr.8655525e.js","assets/use-locale.f5546dc0.js","assets/Card.2239ab71.js","assets/Ellipsis.vue_vue_type_script_setup_true_lang.dde593dd.js","assets/naiveUi.ca5165eb.js","assets/Icon.dd751103.js","assets/Dropdown.b5400b00.js"])}]}]});ud.beforeEach((e,t,n)=>{const r=window.localStorage.getItem(fa);e.name==="login"||r?n():n({name:"login",query:{redirected:e.fullPath}})});const fd=jp(Uy);fd.use(ud);fd.mount("#app");export{l2 as $,Ti as A,ri as B,e2 as C,t2 as D,ry as E,nc as F,Gp as G,Uu as H,oy as I,ds as J,rs as K,Xp as L,Vi as M,uy as N,Qp as O,v0 as P,ny as Q,fa as R,sy as S,is as T,kx as U,ji as V,iy as W,Mi as X,Fs as Y,Re as Z,Gs as _,Vp as a,Zp as a$,sx as a0,Nx as a1,qx as a2,Ui as a3,Ai as a4,Yt as a5,Oe as a6,Gx as a7,gi as a8,pi as a9,Ym as aA,Y0 as aB,Gr as aC,Cu as aD,Kn as aE,ls as aF,bc as aG,vu as aH,lr as aI,Eu as aJ,ar as aK,Tn as aL,mu as aM,gu as aN,Qs as aO,pu as aP,Vb as aQ,U0 as aR,kl as aS,r2 as aT,Yx as aU,nn as aV,py as aW,o2 as aX,Ty as aY,Zr as aZ,Yp as a_,s2 as aa,i2 as ab,Fx as ac,Wx as ad,ze as ae,n2 as af,et as ag,Po as ah,Kx as ai,p0 as aj,Gh as ak,cs as al,_l as am,x0 as an,Vx as ao,yh as ap,wh as aq,zi as ar,ir as as,wm as at,bu as au,Ki as av,ym as aw,Ho as ax,M0 as ay,cr as az,Xx as b,kp as b0,zx as b1,Dx as b2,Qd as b3,rr as b4,c2 as b5,od as b6,a2 as b7,Ux as b8,Sn as b9,u2 as ba,U1 as bb,Sh as bc,ns as bd,Zx as be,My as bf,yy as c,Ye as d,En as e,Fe as f,Zl as g,N as h,Ae as i,pt as j,xy as k,ce as l,Wi as m,ty as n,Bl as o,ae as p,_t as q,ey as r,tn as s,Qh as t,Mu as u,Nu as v,_r as w,ay as x,Qx as y,vn as z};
