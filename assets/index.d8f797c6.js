(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();function Ms(e,t){const o=Object.create(null),r=e.split(",");for(let n=0;n<r.length;n++)o[r[n]]=!0;return t?n=>!!o[n.toLowerCase()]:n=>!!o[n]}const yp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vp=Ms(yp);function Tc(e){return!!e||e===""}function Os(e){if(te(e)){const t={};for(let o=0;o<e.length;o++){const r=e[o],n=Be(r)?$p(r):Os(r);if(n)for(const i in n)t[i]=n[i]}return t}else{if(Be(e))return e;if(Pe(e))return e}}const wp=/;(?![^(]*\))/g,Sp=/:(.+)/;function $p(e){const t={};return e.split(wp).forEach(o=>{if(o){const r=o.split(Sp);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function zs(e){let t="";if(Be(e))t=e;else if(te(e))for(let o=0;o<e.length;o++){const r=zs(e[o]);r&&(t+=r+" ")}else if(Pe(e))for(const o in e)e[o]&&(t+=o+" ");return t.trim()}const E8=e=>Be(e)?e:e==null?"":te(e)||Pe(e)&&(e.toString===_c||!ne(e.toString))?JSON.stringify(e,Hc,2):String(e),Hc=(e,t)=>t&&t.__v_isRef?Hc(e,t.value):er(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((o,[r,n])=>(o[`${r} =>`]=n,o),{})}:Pc(t)?{[`Set(${t.size})`]:[...t.values()]}:Pe(t)&&!te(t)&&!Ac(t)?String(t):t,$e={},Jo=[],wt=()=>{},Ep=()=>!1,Tp=/^on[^a-z]/,fi=e=>Tp.test(e),Fs=e=>e.startsWith("onUpdate:"),Me=Object.assign,js=(e,t)=>{const o=e.indexOf(t);o>-1&&e.splice(o,1)},Hp=Object.prototype.hasOwnProperty,ce=(e,t)=>Hp.call(e,t),te=Array.isArray,er=e=>hi(e)==="[object Map]",Pc=e=>hi(e)==="[object Set]",ne=e=>typeof e=="function",Be=e=>typeof e=="string",Ws=e=>typeof e=="symbol",Pe=e=>e!==null&&typeof e=="object",Ic=e=>Pe(e)&&ne(e.then)&&ne(e.catch),_c=Object.prototype.toString,hi=e=>_c.call(e),Pp=e=>hi(e).slice(8,-1),Ac=e=>hi(e)==="[object Object]",Ns=e=>Be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Wn=Ms(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pi=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},Ip=/-(\w)/g,kt=pi(e=>e.replace(Ip,(t,o)=>o?o.toUpperCase():"")),_p=/\B([A-Z])/g,xr=pi(e=>e.replace(_p,"-$1").toLowerCase()),gi=pi(e=>e.charAt(0).toUpperCase()+e.slice(1)),ji=pi(e=>e?`on${gi(e)}`:""),Xr=(e,t)=>!Object.is(e,t),Nn=(e,t)=>{for(let o=0;o<e.length;o++)e[o](t)},Vn=(e,t,o)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:o})},Gn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Fl;const Ap=()=>Fl||(Fl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let nt;class kp{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=nt,!t&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}run(t){if(this.active){const o=nt;try{return nt=this,t()}finally{nt=o}}}on(){nt=this}off(){nt=this.parent}stop(t){if(this.active){let o,r;for(o=0,r=this.effects.length;o<r;o++)this.effects[o].stop();for(o=0,r=this.cleanups.length;o<r;o++)this.cleanups[o]();if(this.scopes)for(o=0,r=this.scopes.length;o<r;o++)this.scopes[o].stop(!0);if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this.active=!1}}}function Lp(e,t=nt){t&&t.active&&t.effects.push(e)}function T8(){return nt}function H8(e){nt&&nt.cleanups.push(e)}const Us=e=>{const t=new Set(e);return t.w=0,t.n=0,t},kc=e=>(e.w&mo)>0,Lc=e=>(e.n&mo)>0,Bp=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=mo},Dp=e=>{const{deps:t}=e;if(t.length){let o=0;for(let r=0;r<t.length;r++){const n=t[r];kc(n)&&!Lc(n)?n.delete(e):t[o++]=n,n.w&=~mo,n.n&=~mo}t.length=o}},ss=new WeakMap;let zr=0,mo=1;const ls=30;let Ct;const Bo=Symbol(""),as=Symbol("");class Ks{constructor(t,o=null,r){this.fn=t,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,Lp(this,r)}run(){if(!this.active)return this.fn();let t=Ct,o=fo;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ct,Ct=this,fo=!0,mo=1<<++zr,zr<=ls?Bp(this):jl(this),this.fn()}finally{zr<=ls&&Dp(this),mo=1<<--zr,Ct=this.parent,fo=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ct===this?this.deferStop=!0:this.active&&(jl(this),this.onStop&&this.onStop(),this.active=!1)}}function jl(e){const{deps:t}=e;if(t.length){for(let o=0;o<t.length;o++)t[o].delete(e);t.length=0}}let fo=!0;const Bc=[];function Cr(){Bc.push(fo),fo=!1}function yr(){const e=Bc.pop();fo=e===void 0?!0:e}function lt(e,t,o){if(fo&&Ct){let r=ss.get(e);r||ss.set(e,r=new Map);let n=r.get(o);n||r.set(o,n=Us()),Dc(n)}}function Dc(e,t){let o=!1;zr<=ls?Lc(e)||(e.n|=mo,o=!kc(e)):o=!e.has(Ct),o&&(e.add(Ct),Ct.deps.push(e))}function Nt(e,t,o,r,n,i){const s=ss.get(e);if(!s)return;let l=[];if(t==="clear")l=[...s.values()];else if(o==="length"&&te(e))s.forEach((a,c)=>{(c==="length"||c>=r)&&l.push(a)});else switch(o!==void 0&&l.push(s.get(o)),t){case"add":te(e)?Ns(o)&&l.push(s.get("length")):(l.push(s.get(Bo)),er(e)&&l.push(s.get(as)));break;case"delete":te(e)||(l.push(s.get(Bo)),er(e)&&l.push(s.get(as)));break;case"set":er(e)&&l.push(s.get(Bo));break}if(l.length===1)l[0]&&cs(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);cs(Us(a))}}function cs(e,t){const o=te(e)?e:[...e];for(const r of o)r.computed&&Wl(r);for(const r of o)r.computed||Wl(r)}function Wl(e,t){(e!==Ct||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Rp=Ms("__proto__,__v_isRef,__isVue"),Rc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ws)),Mp=Vs(),Op=Vs(!1,!0),zp=Vs(!0),Nl=Fp();function Fp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...o){const r=Ce(this);for(let i=0,s=this.length;i<s;i++)lt(r,"get",i+"");const n=r[t](...o);return n===-1||n===!1?r[t](...o.map(Ce)):n}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...o){Cr();const r=Ce(this)[t].apply(this,o);return yr(),r}}),e}function Vs(e=!1,t=!1){return function(r,n,i){if(n==="__v_isReactive")return!e;if(n==="__v_isReadonly")return e;if(n==="__v_isShallow")return t;if(n==="__v_raw"&&i===(e?t?og:jc:t?Fc:zc).get(r))return r;const s=te(r);if(!e&&s&&ce(Nl,n))return Reflect.get(Nl,n,i);const l=Reflect.get(r,n,i);return(Ws(n)?Rc.has(n):Rp(n))||(e||lt(r,"get",n),t)?l:ze(l)?s&&Ns(n)?l:l.value:Pe(l)?e?Zs(l):vr(l):l}}const jp=Mc(),Wp=Mc(!0);function Mc(e=!1){return function(o,r,n,i){let s=o[r];if(ir(s)&&ze(s)&&!ze(n))return!1;if(!e&&(!qn(n)&&!ir(n)&&(s=Ce(s),n=Ce(n)),!te(o)&&ze(s)&&!ze(n)))return s.value=n,!0;const l=te(o)&&Ns(r)?Number(r)<o.length:ce(o,r),a=Reflect.set(o,r,n,i);return o===Ce(i)&&(l?Xr(n,s)&&Nt(o,"set",r,n):Nt(o,"add",r,n)),a}}function Np(e,t){const o=ce(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&o&&Nt(e,"delete",t,void 0),r}function Up(e,t){const o=Reflect.has(e,t);return(!Ws(t)||!Rc.has(t))&&lt(e,"has",t),o}function Kp(e){return lt(e,"iterate",te(e)?"length":Bo),Reflect.ownKeys(e)}const Oc={get:Mp,set:jp,deleteProperty:Np,has:Up,ownKeys:Kp},Vp={get:zp,set(e,t){return!0},deleteProperty(e,t){return!0}},Gp=Me({},Oc,{get:Op,set:Wp}),Gs=e=>e,mi=e=>Reflect.getPrototypeOf(e);function $n(e,t,o=!1,r=!1){e=e.__v_raw;const n=Ce(e),i=Ce(t);o||(t!==i&&lt(n,"get",t),lt(n,"get",i));const{has:s}=mi(n),l=r?Gs:o?Xs:Qr;if(s.call(n,t))return l(e.get(t));if(s.call(n,i))return l(e.get(i));e!==n&&e.get(t)}function En(e,t=!1){const o=this.__v_raw,r=Ce(o),n=Ce(e);return t||(e!==n&&lt(r,"has",e),lt(r,"has",n)),e===n?o.has(e):o.has(e)||o.has(n)}function Tn(e,t=!1){return e=e.__v_raw,!t&&lt(Ce(e),"iterate",Bo),Reflect.get(e,"size",e)}function Ul(e){e=Ce(e);const t=Ce(this);return mi(t).has.call(t,e)||(t.add(e),Nt(t,"add",e,e)),this}function Kl(e,t){t=Ce(t);const o=Ce(this),{has:r,get:n}=mi(o);let i=r.call(o,e);i||(e=Ce(e),i=r.call(o,e));const s=n.call(o,e);return o.set(e,t),i?Xr(t,s)&&Nt(o,"set",e,t):Nt(o,"add",e,t),this}function Vl(e){const t=Ce(this),{has:o,get:r}=mi(t);let n=o.call(t,e);n||(e=Ce(e),n=o.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return n&&Nt(t,"delete",e,void 0),i}function Gl(){const e=Ce(this),t=e.size!==0,o=e.clear();return t&&Nt(e,"clear",void 0,void 0),o}function Hn(e,t){return function(r,n){const i=this,s=i.__v_raw,l=Ce(s),a=t?Gs:e?Xs:Qr;return!e&&lt(l,"iterate",Bo),s.forEach((c,d)=>r.call(n,a(c),a(d),i))}}function Pn(e,t,o){return function(...r){const n=this.__v_raw,i=Ce(n),s=er(i),l=e==="entries"||e===Symbol.iterator&&s,a=e==="keys"&&s,c=n[e](...r),d=o?Gs:t?Xs:Qr;return!t&&lt(i,"iterate",a?as:Bo),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:l?[d(u[0]),d(u[1])]:d(u),done:f}},[Symbol.iterator](){return this}}}}function Yt(e){return function(...t){return e==="delete"?!1:this}}function qp(){const e={get(i){return $n(this,i)},get size(){return Tn(this)},has:En,add:Ul,set:Kl,delete:Vl,clear:Gl,forEach:Hn(!1,!1)},t={get(i){return $n(this,i,!1,!0)},get size(){return Tn(this)},has:En,add:Ul,set:Kl,delete:Vl,clear:Gl,forEach:Hn(!1,!0)},o={get(i){return $n(this,i,!0)},get size(){return Tn(this,!0)},has(i){return En.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:Hn(!0,!1)},r={get(i){return $n(this,i,!0,!0)},get size(){return Tn(this,!0)},has(i){return En.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:Hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Pn(i,!1,!1),o[i]=Pn(i,!0,!1),t[i]=Pn(i,!1,!0),r[i]=Pn(i,!0,!0)}),[e,o,t,r]}const[Zp,Yp,Xp,Qp]=qp();function qs(e,t){const o=t?e?Qp:Xp:e?Yp:Zp;return(r,n,i)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?r:Reflect.get(ce(o,n)&&n in r?o:r,n,i)}const Jp={get:qs(!1,!1)},eg={get:qs(!1,!0)},tg={get:qs(!0,!1)},zc=new WeakMap,Fc=new WeakMap,jc=new WeakMap,og=new WeakMap;function rg(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ng(e){return e.__v_skip||!Object.isExtensible(e)?0:rg(Pp(e))}function vr(e){return ir(e)?e:Ys(e,!1,Oc,Jp,zc)}function ig(e){return Ys(e,!1,Gp,eg,Fc)}function Zs(e){return Ys(e,!0,Vp,tg,jc)}function Ys(e,t,o,r,n){if(!Pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=n.get(e);if(i)return i;const s=ng(e);if(s===0)return e;const l=new Proxy(e,s===2?r:o);return n.set(e,l),l}function tr(e){return ir(e)?tr(e.__v_raw):!!(e&&e.__v_isReactive)}function ir(e){return!!(e&&e.__v_isReadonly)}function qn(e){return!!(e&&e.__v_isShallow)}function Wc(e){return tr(e)||ir(e)}function Ce(e){const t=e&&e.__v_raw;return t?Ce(t):e}function Zn(e){return Vn(e,"__v_skip",!0),e}const Qr=e=>Pe(e)?vr(e):e,Xs=e=>Pe(e)?Zs(e):e;function Nc(e){fo&&Ct&&(e=Ce(e),Dc(e.dep||(e.dep=Us())))}function Uc(e,t){e=Ce(e),e.dep&&cs(e.dep)}function ze(e){return!!(e&&e.__v_isRef===!0)}function bo(e){return Kc(e,!1)}function sg(e){return Kc(e,!0)}function Kc(e,t){return ze(e)?e:new lg(e,t)}class lg{constructor(t,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?t:Ce(t),this._value=o?t:Qr(t)}get value(){return Nc(this),this._value}set value(t){const o=this.__v_isShallow||qn(t)||ir(t);t=o?t:Ce(t),Xr(t,this._rawValue)&&(this._rawValue=t,this._value=o?t:Qr(t),Uc(this))}}function jt(e){return ze(e)?e.value:e}const ag={get:(e,t,o)=>jt(Reflect.get(e,t,o)),set:(e,t,o,r)=>{const n=e[t];return ze(n)&&!ze(o)?(n.value=o,!0):Reflect.set(e,t,o,r)}};function Vc(e){return tr(e)?e:new Proxy(e,ag)}class cg{constructor(t,o,r){this._object=t,this._key=o,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Qs(e,t,o){const r=e[t];return ze(r)?r:new cg(e,t,o)}var Gc;class dg{constructor(t,o,r,n){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this[Gc]=!1,this._dirty=!0,this.effect=new Ks(t,()=>{this._dirty||(this._dirty=!0,Uc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=r}get value(){const t=Ce(this);return Nc(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Gc="__v_isReadonly";function ug(e,t,o=!1){let r,n;const i=ne(e);return i?(r=e,n=wt):(r=e.get,n=e.set),new dg(r,n,i||!n,o)}function ho(e,t,o,r){let n;try{n=r?e(...r):e()}catch(i){bi(i,t,o)}return n}function ht(e,t,o,r){if(ne(e)){const i=ho(e,t,o,r);return i&&Ic(i)&&i.catch(s=>{bi(s,t,o)}),i}const n=[];for(let i=0;i<e.length;i++)n.push(ht(e[i],t,o,r));return n}function bi(e,t,o,r=!0){const n=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,l=o;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,s,l)===!1)return}i=i.parent}const a=t.appContext.config.errorHandler;if(a){ho(a,null,10,[e,s,l]);return}}fg(e,o,n,r)}function fg(e,t,o,r=!0){console.error(e)}let Jr=!1,ds=!1;const Ne=[];let At=0;const or=[];let Ft=null,Eo=0;const qc=Promise.resolve();let Js=null;function Zc(e){const t=Js||qc;return e?t.then(this?e.bind(this):e):t}function hg(e){let t=At+1,o=Ne.length;for(;t<o;){const r=t+o>>>1;en(Ne[r])<e?t=r+1:o=r}return t}function el(e){(!Ne.length||!Ne.includes(e,Jr&&e.allowRecurse?At+1:At))&&(e.id==null?Ne.push(e):Ne.splice(hg(e.id),0,e),Yc())}function Yc(){!Jr&&!ds&&(ds=!0,Js=qc.then(Qc))}function pg(e){const t=Ne.indexOf(e);t>At&&Ne.splice(t,1)}function gg(e){te(e)?or.push(...e):(!Ft||!Ft.includes(e,e.allowRecurse?Eo+1:Eo))&&or.push(e),Yc()}function ql(e,t=Jr?At+1:0){for(;t<Ne.length;t++){const o=Ne[t];o&&o.pre&&(Ne.splice(t,1),t--,o())}}function Xc(e){if(or.length){const t=[...new Set(or)];if(or.length=0,Ft){Ft.push(...t);return}for(Ft=t,Ft.sort((o,r)=>en(o)-en(r)),Eo=0;Eo<Ft.length;Eo++)Ft[Eo]();Ft=null,Eo=0}}const en=e=>e.id==null?1/0:e.id,mg=(e,t)=>{const o=en(e)-en(t);if(o===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return o};function Qc(e){ds=!1,Jr=!0,Ne.sort(mg);const t=wt;try{for(At=0;At<Ne.length;At++){const o=Ne[At];o&&o.active!==!1&&ho(o,null,14)}}finally{At=0,Ne.length=0,Xc(),Jr=!1,Js=null,(Ne.length||or.length)&&Qc()}}function bg(e,t,...o){if(e.isUnmounted)return;const r=e.vnode.props||$e;let n=o;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:u,trim:f}=r[d]||$e;f&&(n=o.map(p=>p.trim())),u&&(n=o.map(Gn))}let l,a=r[l=ji(t)]||r[l=ji(kt(t))];!a&&i&&(a=r[l=ji(xr(t))]),a&&ht(a,e,6,n);const c=r[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,ht(c,e,6,n)}}function Jc(e,t,o=!1){const r=t.emitsCache,n=r.get(e);if(n!==void 0)return n;const i=e.emits;let s={},l=!1;if(!ne(e)){const a=c=>{const d=Jc(c,t,!0);d&&(l=!0,Me(s,d))};!o&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!l?(Pe(e)&&r.set(e,null),null):(te(i)?i.forEach(a=>s[a]=null):Me(s,i),Pe(e)&&r.set(e,s),s)}function xi(e,t){return!e||!fi(t)?!1:(t=t.slice(2).replace(/Once$/,""),ce(e,t[0].toLowerCase()+t.slice(1))||ce(e,xr(t))||ce(e,t))}let Ue=null,ed=null;function Yn(e){const t=Ue;return Ue=e,ed=e&&e.type.__scopeId||null,t}function us(e,t=Ue,o){if(!t||e._n)return e;const r=(...n)=>{r._d&&sa(-1);const i=Yn(t);let s;try{s=e(...n)}finally{Yn(i),r._d&&sa(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Wi(e){const{type:t,vnode:o,proxy:r,withProxy:n,props:i,propsOptions:[s],slots:l,attrs:a,emit:c,render:d,renderCache:u,data:f,setupState:p,ctx:h,inheritAttrs:m}=e;let x,b;const y=Yn(e);try{if(o.shapeFlag&4){const v=n||r;x=_t(d.call(v,v,u,i,p,f,h)),b=a}else{const v=t;x=_t(v.length>1?v(i,{attrs:a,slots:l,emit:c}):v(i,null)),b=t.props?a:xg(a)}}catch(v){Ur.length=0,bi(v,e,1),x=Fe(pt)}let S=x;if(b&&m!==!1){const v=Object.keys(b),{shapeFlag:E}=S;v.length&&E&7&&(s&&v.some(Fs)&&(b=Cg(b,s)),S=xo(S,b))}return o.dirs&&(S=xo(S),S.dirs=S.dirs?S.dirs.concat(o.dirs):o.dirs),o.transition&&(S.transition=o.transition),x=S,Yn(y),x}const xg=e=>{let t;for(const o in e)(o==="class"||o==="style"||fi(o))&&((t||(t={}))[o]=e[o]);return t},Cg=(e,t)=>{const o={};for(const r in e)(!Fs(r)||!(r.slice(9)in t))&&(o[r]=e[r]);return o};function yg(e,t,o){const{props:r,children:n,component:i}=e,{props:s,children:l,patchFlag:a}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(o&&a>=0){if(a&1024)return!0;if(a&16)return r?Zl(r,s,c):!!s;if(a&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const f=d[u];if(s[f]!==r[f]&&!xi(c,f))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:r===s?!1:r?s?Zl(r,s,c):!0:!!s;return!1}function Zl(e,t,o){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let n=0;n<r.length;n++){const i=r[n];if(t[i]!==e[i]&&!xi(o,i))return!0}return!1}function vg({vnode:e,parent:t},o){for(;t&&t.subTree===e;)(e=t.vnode).el=o,t=t.parent}const wg=e=>e.__isSuspense;function Sg(e,t){t&&t.pendingBranch?te(e)?t.effects.push(...e):t.effects.push(e):gg(e)}function Do(e,t){if(Re){let o=Re.provides;const r=Re.parent&&Re.parent.provides;r===o&&(o=Re.provides=Object.create(r)),o[e]=t}}function Le(e,t,o=!1){const r=Re||Ue;if(r){const n=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(n&&e in n)return n[e];if(arguments.length>1)return o&&ne(t)?t.call(r.proxy):t}}function td(e,t){return tl(e,null,t)}const Yl={};function jr(e,t,o){return tl(e,t,o)}function tl(e,t,{immediate:o,deep:r,flush:n,onTrack:i,onTrigger:s}=$e){const l=Re;let a,c=!1,d=!1;if(ze(e)?(a=()=>e.value,c=qn(e)):tr(e)?(a=()=>e,r=!0):te(e)?(d=!0,c=e.some(b=>tr(b)||qn(b)),a=()=>e.map(b=>{if(ze(b))return b.value;if(tr(b))return Io(b);if(ne(b))return ho(b,l,2)})):ne(e)?t?a=()=>ho(e,l,2):a=()=>{if(!(l&&l.isUnmounted))return u&&u(),ht(e,l,3,[f])}:a=wt,t&&r){const b=a;a=()=>Io(b())}let u,f=b=>{u=x.onStop=()=>{ho(b,l,4)}};if(nn)return f=wt,t?o&&ht(t,l,3,[a(),d?[]:void 0,f]):a(),wt;let p=d?[]:Yl;const h=()=>{if(!!x.active)if(t){const b=x.run();(r||c||(d?b.some((y,S)=>Xr(y,p[S])):Xr(b,p)))&&(u&&u(),ht(t,l,3,[b,p===Yl?void 0:p,f]),p=b)}else x.run()};h.allowRecurse=!!t;let m;n==="sync"?m=h:n==="post"?m=()=>qe(h,l&&l.suspense):(h.pre=!0,l&&(h.id=l.uid),m=()=>el(h));const x=new Ks(a,m);return t?o?h():p=x.run():n==="post"?qe(x.run.bind(x),l&&l.suspense):x.run(),()=>{x.stop(),l&&l.scope&&js(l.scope.effects,x)}}function $g(e,t,o){const r=this.proxy,n=Be(e)?e.includes(".")?od(r,e):()=>r[e]:e.bind(r,r);let i;ne(t)?i=t:(i=t.handler,o=t);const s=Re;sr(this);const l=tl(n,i.bind(r),o);return s?sr(s):Ro(),l}function od(e,t){const o=t.split(".");return()=>{let r=e;for(let n=0;n<o.length&&r;n++)r=r[o[n]];return r}}function Io(e,t){if(!Pe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ze(e))Io(e.value,t);else if(te(e))for(let o=0;o<e.length;o++)Io(e[o],t);else if(Pc(e)||er(e))e.forEach(o=>{Io(o,t)});else if(Ac(e))for(const o in e)Io(e[o],t);return e}function rd(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wi(()=>{e.isMounted=!0}),ad(()=>{e.isUnmounting=!0}),e}const ct=[Function,Array],Eg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},setup(e,{slots:t}){const o=vd(),r=rd();let n;return()=>{const i=t.default&&ol(t.default(),!0);if(!i||!i.length)return;let s=i[0];if(i.length>1){for(const m of i)if(m.type!==pt){s=m;break}}const l=Ce(e),{mode:a}=l;if(r.isLeaving)return Ni(s);const c=Xl(s);if(!c)return Ni(s);const d=tn(c,l,r,o);on(c,d);const u=o.subTree,f=u&&Xl(u);let p=!1;const{getTransitionKey:h}=c.type;if(h){const m=h();n===void 0?n=m:m!==n&&(n=m,p=!0)}if(f&&f.type!==pt&&(!To(c,f)||p)){const m=tn(f,l,r,o);if(on(f,m),a==="out-in")return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,o.update()},Ni(s);a==="in-out"&&c.type!==pt&&(m.delayLeave=(x,b,y)=>{const S=id(r,f);S[String(f.key)]=f,x._leaveCb=()=>{b(),x._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=y})}return s}}},nd=Eg;function id(e,t){const{leavingVNodes:o}=e;let r=o.get(t.type);return r||(r=Object.create(null),o.set(t.type,r)),r}function tn(e,t,o,r){const{appear:n,mode:i,persisted:s=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:u,onLeave:f,onAfterLeave:p,onLeaveCancelled:h,onBeforeAppear:m,onAppear:x,onAfterAppear:b,onAppearCancelled:y}=t,S=String(e.key),v=id(o,e),E=(P,D)=>{P&&ht(P,r,9,D)},B=(P,D)=>{const I=D[1];E(P,D),te(P)?P.every(L=>L.length<=1)&&I():P.length<=1&&I()},j={mode:i,persisted:s,beforeEnter(P){let D=l;if(!o.isMounted)if(n)D=m||l;else return;P._leaveCb&&P._leaveCb(!0);const I=v[S];I&&To(e,I)&&I.el._leaveCb&&I.el._leaveCb(),E(D,[P])},enter(P){let D=a,I=c,L=d;if(!o.isMounted)if(n)D=x||a,I=b||c,L=y||d;else return;let w=!1;const q=P._enterCb=oe=>{w||(w=!0,oe?E(L,[P]):E(I,[P]),j.delayedLeave&&j.delayedLeave(),P._enterCb=void 0)};D?B(D,[P,q]):q()},leave(P,D){const I=String(e.key);if(P._enterCb&&P._enterCb(!0),o.isUnmounting)return D();E(u,[P]);let L=!1;const w=P._leaveCb=q=>{L||(L=!0,D(),q?E(h,[P]):E(p,[P]),P._leaveCb=void 0,v[I]===e&&delete v[I])};v[I]=e,f?B(f,[P,w]):w()},clone(P){return tn(P,t,o,r)}};return j}function Ni(e){if(Ci(e))return e=xo(e),e.children=null,e}function Xl(e){return Ci(e)?e.children?e.children[0]:void 0:e}function on(e,t){e.shapeFlag&6&&e.component?on(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ol(e,t=!1,o){let r=[],n=0;for(let i=0;i<e.length;i++){let s=e[i];const l=o==null?s.key:String(o)+String(s.key!=null?s.key:i);s.type===Ye?(s.patchFlag&128&&n++,r=r.concat(ol(s.children,t,l))):(t||s.type!==pt)&&r.push(l!=null?xo(s,{key:l}):s)}if(n>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function at(e){return ne(e)?{setup:e,name:e.name}:e}const Wr=e=>!!e.type.__asyncLoader,Ci=e=>e.type.__isKeepAlive;function Tg(e,t){sd(e,"a",t)}function Hg(e,t){sd(e,"da",t)}function sd(e,t,o=Re){const r=e.__wdc||(e.__wdc=()=>{let n=o;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(yi(t,r,o),o){let n=o.parent;for(;n&&n.parent;)Ci(n.parent.vnode)&&Pg(r,t,o,n),n=n.parent}}function Pg(e,t,o,r){const n=yi(t,e,r,!0);cd(()=>{js(r[t],n)},o)}function yi(e,t,o=Re,r=!1){if(o){const n=o[e]||(o[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(o.isUnmounted)return;Cr(),sr(o);const l=ht(t,o,e,s);return Ro(),yr(),l});return r?n.unshift(i):n.push(i),i}}const Vt=e=>(t,o=Re)=>(!nn||e==="sp")&&yi(e,(...r)=>t(...r),o),vi=Vt("bm"),wi=Vt("m"),Ig=Vt("bu"),ld=Vt("u"),ad=Vt("bum"),cd=Vt("um"),_g=Vt("sp"),Ag=Vt("rtg"),kg=Vt("rtc");function Lg(e,t=Re){yi("ec",e,t)}function P8(e,t){const o=Ue;if(o===null)return e;const r=$i(o)||o.proxy,n=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,l,a,c=$e]=t[i];ne(s)&&(s={mounted:s,updated:s}),s.deep&&Io(l),n.push({dir:s,instance:r,value:l,oldValue:void 0,arg:a,modifiers:c})}return e}function vo(e,t,o,r){const n=e.dirs,i=t&&t.dirs;for(let s=0;s<n.length;s++){const l=n[s];i&&(l.oldValue=i[s].value);let a=l.dir[r];a&&(Cr(),ht(a,o,8,[e.el,l,e,t]),yr())}}const dd="components";function Bg(e,t){return Rg(dd,e,!0,t)||e}const Dg=Symbol();function Rg(e,t,o=!0,r=!1){const n=Ue||Re;if(n){const i=n.type;if(e===dd){const l=p0(i,!1);if(l&&(l===t||l===kt(t)||l===gi(kt(t))))return i}const s=Ql(n[e]||i[e],t)||Ql(n.appContext[e],t);return!s&&r?i:s}}function Ql(e,t){return e&&(e[t]||e[kt(t)]||e[gi(kt(t))])}function I8(e,t,o,r){let n;const i=o&&o[r];if(te(e)||Be(e)){n=new Array(e.length);for(let s=0,l=e.length;s<l;s++)n[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){n=new Array(e);for(let s=0;s<e;s++)n[s]=t(s+1,s,void 0,i&&i[s])}else if(Pe(e))if(e[Symbol.iterator])n=Array.from(e,(s,l)=>t(s,l,void 0,i&&i[l]));else{const s=Object.keys(e);n=new Array(s.length);for(let l=0,a=s.length;l<a;l++){const c=s[l];n[l]=t(e[c],c,l,i&&i[l])}}else n=[];return o&&(o[r]=n),n}function _8(e,t,o={},r,n){if(Ue.isCE||Ue.parent&&Wr(Ue.parent)&&Ue.parent.isCE)return Fe("slot",t==="default"?null:{name:t},r&&r());let i=e[t];i&&i._c&&(i._d=!1),ll();const s=i&&ud(i(o)),l=al(Ye,{key:o.key||s&&s.key||`_${t}`},s||(r?r():[]),s&&e._===1?64:-2);return!n&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function ud(e){return e.some(t=>Jn(t)?!(t.type===pt||t.type===Ye&&!ud(t.children)):!0)?e:null}const fs=e=>e?wd(e)?$i(e)||e.proxy:fs(e.parent):null,Xn=Me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>fs(e.parent),$root:e=>fs(e.root),$emit:e=>e.emit,$options:e=>rl(e),$forceUpdate:e=>e.f||(e.f=()=>el(e.update)),$nextTick:e=>e.n||(e.n=Zc.bind(e.proxy)),$watch:e=>$g.bind(e)}),Mg={get({_:e},t){const{ctx:o,setupState:r,data:n,props:i,accessCache:s,type:l,appContext:a}=e;let c;if(t[0]!=="$"){const p=s[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return n[t];case 4:return o[t];case 3:return i[t]}else{if(r!==$e&&ce(r,t))return s[t]=1,r[t];if(n!==$e&&ce(n,t))return s[t]=2,n[t];if((c=e.propsOptions[0])&&ce(c,t))return s[t]=3,i[t];if(o!==$e&&ce(o,t))return s[t]=4,o[t];hs&&(s[t]=0)}}const d=Xn[t];let u,f;if(d)return t==="$attrs"&&lt(e,"get",t),d(e);if((u=l.__cssModules)&&(u=u[t]))return u;if(o!==$e&&ce(o,t))return s[t]=4,o[t];if(f=a.config.globalProperties,ce(f,t))return f[t]},set({_:e},t,o){const{data:r,setupState:n,ctx:i}=e;return n!==$e&&ce(n,t)?(n[t]=o,!0):r!==$e&&ce(r,t)?(r[t]=o,!0):ce(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=o,!0)},has({_:{data:e,setupState:t,accessCache:o,ctx:r,appContext:n,propsOptions:i}},s){let l;return!!o[s]||e!==$e&&ce(e,s)||t!==$e&&ce(t,s)||(l=i[0])&&ce(l,s)||ce(r,s)||ce(Xn,s)||ce(n.config.globalProperties,s)},defineProperty(e,t,o){return o.get!=null?e._.accessCache[t]=0:ce(o,"value")&&this.set(e,t,o.value,null),Reflect.defineProperty(e,t,o)}};let hs=!0;function Og(e){const t=rl(e),o=e.proxy,r=e.ctx;hs=!1,t.beforeCreate&&Jl(t.beforeCreate,e,"bc");const{data:n,computed:i,methods:s,watch:l,provide:a,inject:c,created:d,beforeMount:u,mounted:f,beforeUpdate:p,updated:h,activated:m,deactivated:x,beforeDestroy:b,beforeUnmount:y,destroyed:S,unmounted:v,render:E,renderTracked:B,renderTriggered:j,errorCaptured:P,serverPrefetch:D,expose:I,inheritAttrs:L,components:w,directives:q,filters:oe}=t;if(c&&zg(c,r,null,e.appContext.config.unwrapInjectedRef),s)for(const ge in s){const me=s[ge];ne(me)&&(r[ge]=me.bind(o))}if(n){const ge=n.call(o,o);Pe(ge)&&(e.data=vr(ge))}if(hs=!0,i)for(const ge in i){const me=i[ge],tt=ne(me)?me.bind(o,o):ne(me.get)?me.get.bind(o,o):wt,yo=!ne(me)&&ne(me.set)?me.set.bind(o):wt,bt=be({get:tt,set:yo});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>bt.value,set:Ve=>bt.value=Ve})}if(l)for(const ge in l)fd(l[ge],r,o,ge);if(a){const ge=ne(a)?a.call(o):a;Reflect.ownKeys(ge).forEach(me=>{Do(me,ge[me])})}d&&Jl(d,e,"c");function fe(ge,me){te(me)?me.forEach(tt=>ge(tt.bind(o))):me&&ge(me.bind(o))}if(fe(vi,u),fe(wi,f),fe(Ig,p),fe(ld,h),fe(Tg,m),fe(Hg,x),fe(Lg,P),fe(kg,B),fe(Ag,j),fe(ad,y),fe(cd,v),fe(_g,D),te(I))if(I.length){const ge=e.exposed||(e.exposed={});I.forEach(me=>{Object.defineProperty(ge,me,{get:()=>o[me],set:tt=>o[me]=tt})})}else e.exposed||(e.exposed={});E&&e.render===wt&&(e.render=E),L!=null&&(e.inheritAttrs=L),w&&(e.components=w),q&&(e.directives=q)}function zg(e,t,o=wt,r=!1){te(e)&&(e=ps(e));for(const n in e){const i=e[n];let s;Pe(i)?"default"in i?s=Le(i.from||n,i.default,!0):s=Le(i.from||n):s=Le(i),ze(s)&&r?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:l=>s.value=l}):t[n]=s}}function Jl(e,t,o){ht(te(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,o)}function fd(e,t,o,r){const n=r.includes(".")?od(o,r):()=>o[r];if(Be(e)){const i=t[e];ne(i)&&jr(n,i)}else if(ne(e))jr(n,e.bind(o));else if(Pe(e))if(te(e))e.forEach(i=>fd(i,t,o,r));else{const i=ne(e.handler)?e.handler.bind(o):t[e.handler];ne(i)&&jr(n,i,e)}}function rl(e){const t=e.type,{mixins:o,extends:r}=t,{mixins:n,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,l=i.get(t);let a;return l?a=l:!n.length&&!o&&!r?a=t:(a={},n.length&&n.forEach(c=>Qn(a,c,s,!0)),Qn(a,t,s)),Pe(t)&&i.set(t,a),a}function Qn(e,t,o,r=!1){const{mixins:n,extends:i}=t;i&&Qn(e,i,o,!0),n&&n.forEach(s=>Qn(e,s,o,!0));for(const s in t)if(!(r&&s==="expose")){const l=Fg[s]||o&&o[s];e[s]=l?l(e[s],t[s]):t[s]}return e}const Fg={data:ea,props:$o,emits:$o,methods:$o,computed:$o,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:$o,directives:$o,watch:Wg,provide:ea,inject:jg};function ea(e,t){return t?e?function(){return Me(ne(e)?e.call(this,this):e,ne(t)?t.call(this,this):t)}:t:e}function jg(e,t){return $o(ps(e),ps(t))}function ps(e){if(te(e)){const t={};for(let o=0;o<e.length;o++)t[e[o]]=e[o];return t}return e}function Ke(e,t){return e?[...new Set([].concat(e,t))]:t}function $o(e,t){return e?Me(Me(Object.create(null),e),t):t}function Wg(e,t){if(!e)return t;if(!t)return e;const o=Me(Object.create(null),e);for(const r in t)o[r]=Ke(e[r],t[r]);return o}function Ng(e,t,o,r=!1){const n={},i={};Vn(i,Si,1),e.propsDefaults=Object.create(null),hd(e,t,n,i);for(const s in e.propsOptions[0])s in n||(n[s]=void 0);o?e.props=r?n:ig(n):e.type.props?e.props=n:e.props=i,e.attrs=i}function Ug(e,t,o,r){const{props:n,attrs:i,vnode:{patchFlag:s}}=e,l=Ce(n),[a]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let f=d[u];if(xi(e.emitsOptions,f))continue;const p=t[f];if(a)if(ce(i,f))p!==i[f]&&(i[f]=p,c=!0);else{const h=kt(f);n[h]=gs(a,l,h,p,e,!1)}else p!==i[f]&&(i[f]=p,c=!0)}}}else{hd(e,t,n,i)&&(c=!0);let d;for(const u in l)(!t||!ce(t,u)&&((d=xr(u))===u||!ce(t,d)))&&(a?o&&(o[u]!==void 0||o[d]!==void 0)&&(n[u]=gs(a,l,u,void 0,e,!0)):delete n[u]);if(i!==l)for(const u in i)(!t||!ce(t,u)&&!0)&&(delete i[u],c=!0)}c&&Nt(e,"set","$attrs")}function hd(e,t,o,r){const[n,i]=e.propsOptions;let s=!1,l;if(t)for(let a in t){if(Wn(a))continue;const c=t[a];let d;n&&ce(n,d=kt(a))?!i||!i.includes(d)?o[d]=c:(l||(l={}))[d]=c:xi(e.emitsOptions,a)||(!(a in r)||c!==r[a])&&(r[a]=c,s=!0)}if(i){const a=Ce(o),c=l||$e;for(let d=0;d<i.length;d++){const u=i[d];o[u]=gs(n,a,u,c[u],e,!ce(c,u))}}return s}function gs(e,t,o,r,n,i){const s=e[o];if(s!=null){const l=ce(s,"default");if(l&&r===void 0){const a=s.default;if(s.type!==Function&&ne(a)){const{propsDefaults:c}=n;o in c?r=c[o]:(sr(n),r=c[o]=a.call(null,t),Ro())}else r=a}s[0]&&(i&&!l?r=!1:s[1]&&(r===""||r===xr(o))&&(r=!0))}return r}function pd(e,t,o=!1){const r=t.propsCache,n=r.get(e);if(n)return n;const i=e.props,s={},l=[];let a=!1;if(!ne(e)){const d=u=>{a=!0;const[f,p]=pd(u,t,!0);Me(s,f),p&&l.push(...p)};!o&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!a)return Pe(e)&&r.set(e,Jo),Jo;if(te(i))for(let d=0;d<i.length;d++){const u=kt(i[d]);ta(u)&&(s[u]=$e)}else if(i)for(const d in i){const u=kt(d);if(ta(u)){const f=i[d],p=s[u]=te(f)||ne(f)?{type:f}:f;if(p){const h=na(Boolean,p.type),m=na(String,p.type);p[0]=h>-1,p[1]=m<0||h<m,(h>-1||ce(p,"default"))&&l.push(u)}}}const c=[s,l];return Pe(e)&&r.set(e,c),c}function ta(e){return e[0]!=="$"}function oa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ra(e,t){return oa(e)===oa(t)}function na(e,t){return te(t)?t.findIndex(o=>ra(o,e)):ne(t)&&ra(t,e)?0:-1}const gd=e=>e[0]==="_"||e==="$stable",nl=e=>te(e)?e.map(_t):[_t(e)],Kg=(e,t,o)=>{if(t._n)return t;const r=us((...n)=>nl(t(...n)),o);return r._c=!1,r},md=(e,t,o)=>{const r=e._ctx;for(const n in e){if(gd(n))continue;const i=e[n];if(ne(i))t[n]=Kg(n,i,r);else if(i!=null){const s=nl(i);t[n]=()=>s}}},bd=(e,t)=>{const o=nl(t);e.slots.default=()=>o},Vg=(e,t)=>{if(e.vnode.shapeFlag&32){const o=t._;o?(e.slots=Ce(t),Vn(t,"_",o)):md(t,e.slots={})}else e.slots={},t&&bd(e,t);Vn(e.slots,Si,1)},Gg=(e,t,o)=>{const{vnode:r,slots:n}=e;let i=!0,s=$e;if(r.shapeFlag&32){const l=t._;l?o&&l===1?i=!1:(Me(n,t),!o&&l===1&&delete n._):(i=!t.$stable,md(t,n)),s=t}else t&&(bd(e,t),s={default:1});if(i)for(const l in n)!gd(l)&&!(l in s)&&delete n[l]};function xd(){return{app:null,config:{isNativeTag:Ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qg=0;function Zg(e,t){return function(r,n=null){ne(r)||(r=Object.assign({},r)),n!=null&&!Pe(n)&&(n=null);const i=xd(),s=new Set;let l=!1;const a=i.app={_uid:qg++,_component:r,_props:n,_container:null,_context:i,_instance:null,version:m0,get config(){return i.config},set config(c){},use(c,...d){return s.has(c)||(c&&ne(c.install)?(s.add(c),c.install(a,...d)):ne(c)&&(s.add(c),c(a,...d))),a},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),a},component(c,d){return d?(i.components[c]=d,a):i.components[c]},directive(c,d){return d?(i.directives[c]=d,a):i.directives[c]},mount(c,d,u){if(!l){const f=Fe(r,n);return f.appContext=i,d&&t?t(f,c):e(f,c,u),l=!0,a._container=c,c.__vue_app__=a,$i(f.component)||f.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(c,d){return i.provides[c]=d,a}};return a}}function ms(e,t,o,r,n=!1){if(te(e)){e.forEach((f,p)=>ms(f,t&&(te(t)?t[p]:t),o,r,n));return}if(Wr(r)&&!n)return;const i=r.shapeFlag&4?$i(r.component)||r.component.proxy:r.el,s=n?null:i,{i:l,r:a}=e,c=t&&t.r,d=l.refs===$e?l.refs={}:l.refs,u=l.setupState;if(c!=null&&c!==a&&(Be(c)?(d[c]=null,ce(u,c)&&(u[c]=null)):ze(c)&&(c.value=null)),ne(a))ho(a,l,12,[s,d]);else{const f=Be(a),p=ze(a);if(f||p){const h=()=>{if(e.f){const m=f?ce(u,a)?u[a]:d[a]:a.value;n?te(m)&&js(m,i):te(m)?m.includes(i)||m.push(i):f?(d[a]=[i],ce(u,a)&&(u[a]=d[a])):(a.value=[i],e.k&&(d[e.k]=a.value))}else f?(d[a]=s,ce(u,a)&&(u[a]=s)):p&&(a.value=s,e.k&&(d[e.k]=s))};s?(h.id=-1,qe(h,o)):h()}}}const qe=Sg;function Yg(e){return Xg(e)}function Xg(e,t){const o=Ap();o.__VUE__=!0;const{insert:r,remove:n,patchProp:i,createElement:s,createText:l,createComment:a,setText:c,setElementText:d,parentNode:u,nextSibling:f,setScopeId:p=wt,insertStaticContent:h}=e,m=(g,C,$,T=null,A=null,z=null,U=!1,R=null,F=!!C.dynamicChildren)=>{if(g===C)return;g&&!To(g,C)&&(T=N(g),Ve(g,A,z,!0),g=null),C.patchFlag===-2&&(F=!1,C.dynamicChildren=null);const{type:k,ref:Q,shapeFlag:Y}=C;switch(k){case sl:x(g,C,$,T);break;case pt:b(g,C,$,T);break;case Ui:g==null&&y(C,$,T,U);break;case Ye:w(g,C,$,T,A,z,U,R,F);break;default:Y&1?E(g,C,$,T,A,z,U,R,F):Y&6?q(g,C,$,T,A,z,U,R,F):(Y&64||Y&128)&&k.process(g,C,$,T,A,z,U,R,F,he)}Q!=null&&A&&ms(Q,g&&g.ref,z,C||g,!C)},x=(g,C,$,T)=>{if(g==null)r(C.el=l(C.children),$,T);else{const A=C.el=g.el;C.children!==g.children&&c(A,C.children)}},b=(g,C,$,T)=>{g==null?r(C.el=a(C.children||""),$,T):C.el=g.el},y=(g,C,$,T)=>{[g.el,g.anchor]=h(g.children,C,$,T,g.el,g.anchor)},S=({el:g,anchor:C},$,T)=>{let A;for(;g&&g!==C;)A=f(g),r(g,$,T),g=A;r(C,$,T)},v=({el:g,anchor:C})=>{let $;for(;g&&g!==C;)$=f(g),n(g),g=$;n(C)},E=(g,C,$,T,A,z,U,R,F)=>{U=U||C.type==="svg",g==null?B(C,$,T,A,z,U,R,F):D(g,C,A,z,U,R,F)},B=(g,C,$,T,A,z,U,R)=>{let F,k;const{type:Q,props:Y,shapeFlag:J,transition:re,dirs:le}=g;if(F=g.el=s(g.type,z,Y&&Y.is,Y),J&8?d(F,g.children):J&16&&P(g.children,F,null,T,A,z&&Q!=="foreignObject",U,R),le&&vo(g,null,T,"created"),Y){for(const we in Y)we!=="value"&&!Wn(we)&&i(F,we,null,Y[we],z,g.children,T,A,V);"value"in Y&&i(F,"value",null,Y.value),(k=Y.onVnodeBeforeMount)&&Tt(k,T,g)}j(F,g,g.scopeId,U,T),le&&vo(g,null,T,"beforeMount");const Te=(!A||A&&!A.pendingBranch)&&re&&!re.persisted;Te&&re.beforeEnter(F),r(F,C,$),((k=Y&&Y.onVnodeMounted)||Te||le)&&qe(()=>{k&&Tt(k,T,g),Te&&re.enter(F),le&&vo(g,null,T,"mounted")},A)},j=(g,C,$,T,A)=>{if($&&p(g,$),T)for(let z=0;z<T.length;z++)p(g,T[z]);if(A){let z=A.subTree;if(C===z){const U=A.vnode;j(g,U,U.scopeId,U.slotScopeIds,A.parent)}}},P=(g,C,$,T,A,z,U,R,F=0)=>{for(let k=F;k<g.length;k++){const Q=g[k]=R?so(g[k]):_t(g[k]);m(null,Q,C,$,T,A,z,U,R)}},D=(g,C,$,T,A,z,U)=>{const R=C.el=g.el;let{patchFlag:F,dynamicChildren:k,dirs:Q}=C;F|=g.patchFlag&16;const Y=g.props||$e,J=C.props||$e;let re;$&&wo($,!1),(re=J.onVnodeBeforeUpdate)&&Tt(re,$,C,g),Q&&vo(C,g,$,"beforeUpdate"),$&&wo($,!0);const le=A&&C.type!=="foreignObject";if(k?I(g.dynamicChildren,k,R,$,T,le,z):U||me(g,C,R,null,$,T,le,z,!1),F>0){if(F&16)L(R,C,Y,J,$,T,A);else if(F&2&&Y.class!==J.class&&i(R,"class",null,J.class,A),F&4&&i(R,"style",Y.style,J.style,A),F&8){const Te=C.dynamicProps;for(let we=0;we<Te.length;we++){const ke=Te[we],xt=Y[ke],qo=J[ke];(qo!==xt||ke==="value")&&i(R,ke,xt,qo,A,g.children,$,T,V)}}F&1&&g.children!==C.children&&d(R,C.children)}else!U&&k==null&&L(R,C,Y,J,$,T,A);((re=J.onVnodeUpdated)||Q)&&qe(()=>{re&&Tt(re,$,C,g),Q&&vo(C,g,$,"updated")},T)},I=(g,C,$,T,A,z,U)=>{for(let R=0;R<C.length;R++){const F=g[R],k=C[R],Q=F.el&&(F.type===Ye||!To(F,k)||F.shapeFlag&70)?u(F.el):$;m(F,k,Q,null,T,A,z,U,!0)}},L=(g,C,$,T,A,z,U)=>{if($!==T){if($!==$e)for(const R in $)!Wn(R)&&!(R in T)&&i(g,R,$[R],null,U,C.children,A,z,V);for(const R in T){if(Wn(R))continue;const F=T[R],k=$[R];F!==k&&R!=="value"&&i(g,R,k,F,U,C.children,A,z,V)}"value"in T&&i(g,"value",$.value,T.value)}},w=(g,C,$,T,A,z,U,R,F)=>{const k=C.el=g?g.el:l(""),Q=C.anchor=g?g.anchor:l("");let{patchFlag:Y,dynamicChildren:J,slotScopeIds:re}=C;re&&(R=R?R.concat(re):re),g==null?(r(k,$,T),r(Q,$,T),P(C.children,$,Q,A,z,U,R,F)):Y>0&&Y&64&&J&&g.dynamicChildren?(I(g.dynamicChildren,J,$,A,z,U,R),(C.key!=null||A&&C===A.subTree)&&il(g,C,!0)):me(g,C,$,Q,A,z,U,R,F)},q=(g,C,$,T,A,z,U,R,F)=>{C.slotScopeIds=R,g==null?C.shapeFlag&512?A.ctx.activate(C,$,T,U,F):oe(C,$,T,A,z,U,F):Ee(g,C,F)},oe=(g,C,$,T,A,z,U)=>{const R=g.component=c0(g,T,A);if(Ci(g)&&(R.ctx.renderer=he),d0(R),R.asyncDep){if(A&&A.registerDep(R,fe),!g.el){const F=R.subTree=Fe(pt);b(null,F,C,$)}return}fe(R,g,C,$,A,z,U)},Ee=(g,C,$)=>{const T=C.component=g.component;if(yg(g,C,$))if(T.asyncDep&&!T.asyncResolved){ge(T,C,$);return}else T.next=C,pg(T.update),T.update();else C.el=g.el,T.vnode=C},fe=(g,C,$,T,A,z,U)=>{const R=()=>{if(g.isMounted){let{next:Q,bu:Y,u:J,parent:re,vnode:le}=g,Te=Q,we;wo(g,!1),Q?(Q.el=le.el,ge(g,Q,U)):Q=le,Y&&Nn(Y),(we=Q.props&&Q.props.onVnodeBeforeUpdate)&&Tt(we,re,Q,le),wo(g,!0);const ke=Wi(g),xt=g.subTree;g.subTree=ke,m(xt,ke,u(xt.el),N(xt),g,A,z),Q.el=ke.el,Te===null&&vg(g,ke.el),J&&qe(J,A),(we=Q.props&&Q.props.onVnodeUpdated)&&qe(()=>Tt(we,re,Q,le),A)}else{let Q;const{el:Y,props:J}=C,{bm:re,m:le,parent:Te}=g,we=Wr(C);if(wo(g,!1),re&&Nn(re),!we&&(Q=J&&J.onVnodeBeforeMount)&&Tt(Q,Te,C),wo(g,!0),Y&&se){const ke=()=>{g.subTree=Wi(g),se(Y,g.subTree,g,A,null)};we?C.type.__asyncLoader().then(()=>!g.isUnmounted&&ke()):ke()}else{const ke=g.subTree=Wi(g);m(null,ke,$,T,g,A,z),C.el=ke.el}if(le&&qe(le,A),!we&&(Q=J&&J.onVnodeMounted)){const ke=C;qe(()=>Tt(Q,Te,ke),A)}(C.shapeFlag&256||Te&&Wr(Te.vnode)&&Te.vnode.shapeFlag&256)&&g.a&&qe(g.a,A),g.isMounted=!0,C=$=T=null}},F=g.effect=new Ks(R,()=>el(k),g.scope),k=g.update=()=>F.run();k.id=g.uid,wo(g,!0),k()},ge=(g,C,$)=>{C.component=g;const T=g.vnode.props;g.vnode=C,g.next=null,Ug(g,C.props,T,$),Gg(g,C.children,$),Cr(),ql(),yr()},me=(g,C,$,T,A,z,U,R,F=!1)=>{const k=g&&g.children,Q=g?g.shapeFlag:0,Y=C.children,{patchFlag:J,shapeFlag:re}=C;if(J>0){if(J&128){yo(k,Y,$,T,A,z,U,R,F);return}else if(J&256){tt(k,Y,$,T,A,z,U,R,F);return}}re&8?(Q&16&&V(k,A,z),Y!==k&&d($,Y)):Q&16?re&16?yo(k,Y,$,T,A,z,U,R,F):V(k,A,z,!0):(Q&8&&d($,""),re&16&&P(Y,$,T,A,z,U,R,F))},tt=(g,C,$,T,A,z,U,R,F)=>{g=g||Jo,C=C||Jo;const k=g.length,Q=C.length,Y=Math.min(k,Q);let J;for(J=0;J<Y;J++){const re=C[J]=F?so(C[J]):_t(C[J]);m(g[J],re,$,null,A,z,U,R,F)}k>Q?V(g,A,z,!0,!1,Y):P(C,$,T,A,z,U,R,F,Y)},yo=(g,C,$,T,A,z,U,R,F)=>{let k=0;const Q=C.length;let Y=g.length-1,J=Q-1;for(;k<=Y&&k<=J;){const re=g[k],le=C[k]=F?so(C[k]):_t(C[k]);if(To(re,le))m(re,le,$,null,A,z,U,R,F);else break;k++}for(;k<=Y&&k<=J;){const re=g[Y],le=C[J]=F?so(C[J]):_t(C[J]);if(To(re,le))m(re,le,$,null,A,z,U,R,F);else break;Y--,J--}if(k>Y){if(k<=J){const re=J+1,le=re<Q?C[re].el:T;for(;k<=J;)m(null,C[k]=F?so(C[k]):_t(C[k]),$,le,A,z,U,R,F),k++}}else if(k>J)for(;k<=Y;)Ve(g[k],A,z,!0),k++;else{const re=k,le=k,Te=new Map;for(k=le;k<=J;k++){const ot=C[k]=F?so(C[k]):_t(C[k]);ot.key!=null&&Te.set(ot.key,k)}let we,ke=0;const xt=J-le+1;let qo=!1,Ml=0;const Ar=new Array(xt);for(k=0;k<xt;k++)Ar[k]=0;for(k=re;k<=Y;k++){const ot=g[k];if(ke>=xt){Ve(ot,A,z,!0);continue}let Et;if(ot.key!=null)Et=Te.get(ot.key);else for(we=le;we<=J;we++)if(Ar[we-le]===0&&To(ot,C[we])){Et=we;break}Et===void 0?Ve(ot,A,z,!0):(Ar[Et-le]=k+1,Et>=Ml?Ml=Et:qo=!0,m(ot,C[Et],$,null,A,z,U,R,F),ke++)}const Ol=qo?Qg(Ar):Jo;for(we=Ol.length-1,k=xt-1;k>=0;k--){const ot=le+k,Et=C[ot],zl=ot+1<Q?C[ot+1].el:T;Ar[k]===0?m(null,Et,$,zl,A,z,U,R,F):qo&&(we<0||k!==Ol[we]?bt(Et,$,zl,2):we--)}}},bt=(g,C,$,T,A=null)=>{const{el:z,type:U,transition:R,children:F,shapeFlag:k}=g;if(k&6){bt(g.component.subTree,C,$,T);return}if(k&128){g.suspense.move(C,$,T);return}if(k&64){U.move(g,C,$,he);return}if(U===Ye){r(z,C,$);for(let Y=0;Y<F.length;Y++)bt(F[Y],C,$,T);r(g.anchor,C,$);return}if(U===Ui){S(g,C,$);return}if(T!==2&&k&1&&R)if(T===0)R.beforeEnter(z),r(z,C,$),qe(()=>R.enter(z),A);else{const{leave:Y,delayLeave:J,afterLeave:re}=R,le=()=>r(z,C,$),Te=()=>{Y(z,()=>{le(),re&&re()})};J?J(z,le,Te):Te()}else r(z,C,$)},Ve=(g,C,$,T=!1,A=!1)=>{const{type:z,props:U,ref:R,children:F,dynamicChildren:k,shapeFlag:Q,patchFlag:Y,dirs:J}=g;if(R!=null&&ms(R,null,$,g,!0),Q&256){C.ctx.deactivate(g);return}const re=Q&1&&J,le=!Wr(g);let Te;if(le&&(Te=U&&U.onVnodeBeforeUnmount)&&Tt(Te,C,g),Q&6)_(g.component,$,T);else{if(Q&128){g.suspense.unmount($,T);return}re&&vo(g,null,C,"beforeUnmount"),Q&64?g.type.remove(g,C,$,A,he,T):k&&(z!==Ye||Y>0&&Y&64)?V(k,C,$,!1,!0):(z===Ye&&Y&384||!A&&Q&16)&&V(F,C,$),T&&Go(g)}(le&&(Te=U&&U.onVnodeUnmounted)||re)&&qe(()=>{Te&&Tt(Te,C,g),re&&vo(g,null,C,"unmounted")},$)},Go=g=>{const{type:C,el:$,anchor:T,transition:A}=g;if(C===Ye){Sn($,T);return}if(C===Ui){v(g);return}const z=()=>{n($),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(g.shapeFlag&1&&A&&!A.persisted){const{leave:U,delayLeave:R}=A,F=()=>U($,z);R?R(g.el,z,F):F()}else z()},Sn=(g,C)=>{let $;for(;g!==C;)$=f(g),n(g),g=$;n(C)},_=(g,C,$)=>{const{bum:T,scope:A,update:z,subTree:U,um:R}=g;T&&Nn(T),A.stop(),z&&(z.active=!1,Ve(U,g,C,$)),R&&qe(R,C),qe(()=>{g.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},V=(g,C,$,T=!1,A=!1,z=0)=>{for(let U=z;U<g.length;U++)Ve(g[U],C,$,T,A)},N=g=>g.shapeFlag&6?N(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),X=(g,C,$)=>{g==null?C._vnode&&Ve(C._vnode,null,null,!0):m(C._vnode||null,g,C,null,null,null,$),ql(),Xc(),C._vnode=g},he={p:m,um:Ve,m:bt,r:Go,mt:oe,mc:P,pc:me,pbc:I,n:N,o:e};let _e,se;return t&&([_e,se]=t(he)),{render:X,hydrate:_e,createApp:Zg(X,_e)}}function wo({effect:e,update:t},o){e.allowRecurse=t.allowRecurse=o}function il(e,t,o=!1){const r=e.children,n=t.children;if(te(r)&&te(n))for(let i=0;i<r.length;i++){const s=r[i];let l=n[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[i]=so(n[i]),l.el=s.el),o||il(s,l))}}function Qg(e){const t=e.slice(),o=[0];let r,n,i,s,l;const a=e.length;for(r=0;r<a;r++){const c=e[r];if(c!==0){if(n=o[o.length-1],e[n]<c){t[r]=n,o.push(r);continue}for(i=0,s=o.length-1;i<s;)l=i+s>>1,e[o[l]]<c?i=l+1:s=l;c<e[o[i]]&&(i>0&&(t[r]=o[i-1]),o[i]=r)}}for(i=o.length,s=o[i-1];i-- >0;)o[i]=s,s=t[s];return o}const Jg=e=>e.__isTeleport,Nr=e=>e&&(e.disabled||e.disabled===""),ia=e=>typeof SVGElement<"u"&&e instanceof SVGElement,bs=(e,t)=>{const o=e&&e.to;return Be(o)?t?t(o):null:o},e0={__isTeleport:!0,process(e,t,o,r,n,i,s,l,a,c){const{mc:d,pc:u,pbc:f,o:{insert:p,querySelector:h,createText:m,createComment:x}}=c,b=Nr(t.props);let{shapeFlag:y,children:S,dynamicChildren:v}=t;if(e==null){const E=t.el=m(""),B=t.anchor=m("");p(E,o,r),p(B,o,r);const j=t.target=bs(t.props,h),P=t.targetAnchor=m("");j&&(p(P,j),s=s||ia(j));const D=(I,L)=>{y&16&&d(S,I,L,n,i,s,l,a)};b?D(o,B):j&&D(j,P)}else{t.el=e.el;const E=t.anchor=e.anchor,B=t.target=e.target,j=t.targetAnchor=e.targetAnchor,P=Nr(e.props),D=P?o:B,I=P?E:j;if(s=s||ia(B),v?(f(e.dynamicChildren,v,D,n,i,s,l),il(e,t,!0)):a||u(e,t,D,I,n,i,s,l,!1),b)P||In(t,o,E,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const L=t.target=bs(t.props,h);L&&In(t,L,null,c,0)}else P&&In(t,B,j,c,1)}},remove(e,t,o,r,{um:n,o:{remove:i}},s){const{shapeFlag:l,children:a,anchor:c,targetAnchor:d,target:u,props:f}=e;if(u&&i(d),(s||!Nr(f))&&(i(c),l&16))for(let p=0;p<a.length;p++){const h=a[p];n(h,t,o,!0,!!h.dynamicChildren)}},move:In,hydrate:t0};function In(e,t,o,{o:{insert:r},m:n},i=2){i===0&&r(e.targetAnchor,t,o);const{el:s,anchor:l,shapeFlag:a,children:c,props:d}=e,u=i===2;if(u&&r(s,t,o),(!u||Nr(d))&&a&16)for(let f=0;f<c.length;f++)n(c[f],t,o,2);u&&r(l,t,o)}function t0(e,t,o,r,n,i,{o:{nextSibling:s,parentNode:l,querySelector:a}},c){const d=t.target=bs(t.props,a);if(d){const u=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Nr(t.props))t.anchor=c(s(e),t,l(e),o,r,n,i),t.targetAnchor=u;else{t.anchor=s(e);let f=u;for(;f;)if(f=s(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,d._lpa=t.targetAnchor&&s(t.targetAnchor);break}c(u,t,d,o,r,n,i)}}return t.anchor&&s(t.anchor)}const o0=e0,Ye=Symbol(void 0),sl=Symbol(void 0),pt=Symbol(void 0),Ui=Symbol(void 0),Ur=[];let yt=null;function ll(e=!1){Ur.push(yt=e?null:[])}function r0(){Ur.pop(),yt=Ur[Ur.length-1]||null}let rn=1;function sa(e){rn+=e}function Cd(e){return e.dynamicChildren=rn>0?yt||Jo:null,r0(),rn>0&&yt&&yt.push(e),e}function A8(e,t,o,r,n,i){return Cd(cl(e,t,o,r,n,i,!0))}function al(e,t,o,r,n){return Cd(Fe(e,t,o,r,n,!0))}function Jn(e){return e?e.__v_isVNode===!0:!1}function To(e,t){return e.type===t.type&&e.key===t.key}const Si="__vInternal",yd=({key:e})=>e!=null?e:null,Un=({ref:e,ref_key:t,ref_for:o})=>e!=null?Be(e)||ze(e)||ne(e)?{i:Ue,r:e,k:t,f:!!o}:e:null;function cl(e,t=null,o=null,r=0,n=null,i=e===Ye?0:1,s=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&yd(t),ref:t&&Un(t),scopeId:ed,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:n,dynamicChildren:null,appContext:null};return l?(dl(a,o),i&128&&e.normalize(a)):o&&(a.shapeFlag|=Be(o)?8:16),rn>0&&!s&&yt&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&yt.push(a),a}const Fe=n0;function n0(e,t=null,o=null,r=0,n=null,i=!1){if((!e||e===Dg)&&(e=pt),Jn(e)){const l=xo(e,t,!0);return o&&dl(l,o),rn>0&&!i&&yt&&(l.shapeFlag&6?yt[yt.indexOf(e)]=l:yt.push(l)),l.patchFlag|=-2,l}if(g0(e)&&(e=e.__vccOpts),t){t=i0(t);let{class:l,style:a}=t;l&&!Be(l)&&(t.class=zs(l)),Pe(a)&&(Wc(a)&&!te(a)&&(a=Me({},a)),t.style=Os(a))}const s=Be(e)?1:wg(e)?128:Jg(e)?64:Pe(e)?4:ne(e)?2:0;return cl(e,t,o,r,n,s,i,!0)}function i0(e){return e?Wc(e)||Si in e?Me({},e):e:null}function xo(e,t,o=!1){const{props:r,ref:n,patchFlag:i,children:s}=e,l=t?s0(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&yd(l),ref:t&&t.ref?o&&n?te(n)?n.concat(Un(t)):[n,Un(t)]:Un(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ye?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&xo(e.ssContent),ssFallback:e.ssFallback&&xo(e.ssFallback),el:e.el,anchor:e.anchor}}function xs(e=" ",t=0){return Fe(sl,null,e,t)}function k8(e="",t=!1){return t?(ll(),al(pt,null,e)):Fe(pt,null,e)}function _t(e){return e==null||typeof e=="boolean"?Fe(pt):te(e)?Fe(Ye,null,e.slice()):typeof e=="object"?so(e):Fe(sl,null,String(e))}function so(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:xo(e)}function dl(e,t){let o=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(te(t))o=16;else if(typeof t=="object")if(r&65){const n=t.default;n&&(n._c&&(n._d=!1),dl(e,n()),n._c&&(n._d=!0));return}else{o=32;const n=t._;!n&&!(Si in t)?t._ctx=Ue:n===3&&Ue&&(Ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ne(t)?(t={default:t,_ctx:Ue},o=32):(t=String(t),r&64?(o=16,t=[xs(t)]):o=8);e.children=t,e.shapeFlag|=o}function s0(...e){const t={};for(let o=0;o<e.length;o++){const r=e[o];for(const n in r)if(n==="class")t.class!==r.class&&(t.class=zs([t.class,r.class]));else if(n==="style")t.style=Os([t.style,r.style]);else if(fi(n)){const i=t[n],s=r[n];s&&i!==s&&!(te(i)&&i.includes(s))&&(t[n]=i?[].concat(i,s):s)}else n!==""&&(t[n]=r[n])}return t}function Tt(e,t,o,r=null){ht(e,t,7,[o,r])}const l0=xd();let a0=0;function c0(e,t,o){const r=e.type,n=(t?t.appContext:e.appContext)||l0,i={uid:a0++,vnode:e,type:r,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new kp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pd(r,n),emitsOptions:Jc(r,n),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:r.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=bg.bind(null,i),e.ce&&e.ce(i),i}let Re=null;const vd=()=>Re||Ue,sr=e=>{Re=e,e.scope.on()},Ro=()=>{Re&&Re.scope.off(),Re=null};function wd(e){return e.vnode.shapeFlag&4}let nn=!1;function d0(e,t=!1){nn=t;const{props:o,children:r}=e.vnode,n=wd(e);Ng(e,o,n,t),Vg(e,r);const i=n?u0(e,t):void 0;return nn=!1,i}function u0(e,t){const o=e.type;e.accessCache=Object.create(null),e.proxy=Zn(new Proxy(e.ctx,Mg));const{setup:r}=o;if(r){const n=e.setupContext=r.length>1?h0(e):null;sr(e),Cr();const i=ho(r,e,0,[e.props,n]);if(yr(),Ro(),Ic(i)){if(i.then(Ro,Ro),t)return i.then(s=>{la(e,s,t)}).catch(s=>{bi(s,e,0)});e.asyncDep=i}else la(e,i,t)}else Sd(e,t)}function la(e,t,o){ne(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Pe(t)&&(e.setupState=Vc(t)),Sd(e,o)}let aa;function Sd(e,t,o){const r=e.type;if(!e.render){if(!t&&aa&&!r.render){const n=r.template||rl(e).template;if(n){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:l,compilerOptions:a}=r,c=Me(Me({isCustomElement:i,delimiters:l},s),a);r.render=aa(n,c)}}e.render=r.render||wt}sr(e),Cr(),Og(e),yr(),Ro()}function f0(e){return new Proxy(e.attrs,{get(t,o){return lt(e,"get","$attrs"),t[o]}})}function h0(e){const t=r=>{e.exposed=r||{}};let o;return{get attrs(){return o||(o=f0(e))},slots:e.slots,emit:e.emit,expose:t}}function $i(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Vc(Zn(e.exposed)),{get(t,o){if(o in t)return t[o];if(o in Xn)return Xn[o](e)}}))}function p0(e,t=!0){return ne(e)?e.displayName||e.name:e.name||t&&e.__name}function g0(e){return ne(e)&&"__vccOpts"in e}const be=(e,t)=>ug(e,t,nn);function Z(e,t,o){const r=arguments.length;return r===2?Pe(t)&&!te(t)?Jn(t)?Fe(e,null,[t]):Fe(e,t):Fe(e,null,t):(r>3?o=Array.prototype.slice.call(arguments,2):r===3&&Jn(o)&&(o=[o]),Fe(e,t,o))}const m0="3.2.41",b0="http://www.w3.org/2000/svg",Ho=typeof document<"u"?document:null,ca=Ho&&Ho.createElement("template"),x0={insert:(e,t,o)=>{t.insertBefore(e,o||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,o,r)=>{const n=t?Ho.createElementNS(b0,e):Ho.createElement(e,o?{is:o}:void 0);return e==="select"&&r&&r.multiple!=null&&n.setAttribute("multiple",r.multiple),n},createText:e=>Ho.createTextNode(e),createComment:e=>Ho.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ho.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,o,r,n,i){const s=o?o.previousSibling:t.lastChild;if(n&&(n===i||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),o),!(n===i||!(n=n.nextSibling)););else{ca.innerHTML=r?`<svg>${e}</svg>`:e;const l=ca.content;if(r){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,o)}return[s?s.nextSibling:t.firstChild,o?o.previousSibling:t.lastChild]}};function C0(e,t,o){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):o?e.setAttribute("class",t):e.className=t}function y0(e,t,o){const r=e.style,n=Be(o);if(o&&!n){for(const i in o)Cs(r,i,o[i]);if(t&&!Be(t))for(const i in t)o[i]==null&&Cs(r,i,"")}else{const i=r.display;n?t!==o&&(r.cssText=o):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const da=/\s*!important$/;function Cs(e,t,o){if(te(o))o.forEach(r=>Cs(e,t,r));else if(o==null&&(o=""),t.startsWith("--"))e.setProperty(t,o);else{const r=v0(e,t);da.test(o)?e.setProperty(xr(r),o.replace(da,""),"important"):e[r]=o}}const ua=["Webkit","Moz","ms"],Ki={};function v0(e,t){const o=Ki[t];if(o)return o;let r=kt(t);if(r!=="filter"&&r in e)return Ki[t]=r;r=gi(r);for(let n=0;n<ua.length;n++){const i=ua[n]+r;if(i in e)return Ki[t]=i}return t}const fa="http://www.w3.org/1999/xlink";function w0(e,t,o,r,n){if(r&&t.startsWith("xlink:"))o==null?e.removeAttributeNS(fa,t.slice(6,t.length)):e.setAttributeNS(fa,t,o);else{const i=vp(t);o==null||i&&!Tc(o)?e.removeAttribute(t):e.setAttribute(t,i?"":o)}}function S0(e,t,o,r,n,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,n,i),e[t]=o==null?"":o;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=o;const a=o==null?"":o;(e.value!==a||e.tagName==="OPTION")&&(e.value=a),o==null&&e.removeAttribute(t);return}let l=!1;if(o===""||o==null){const a=typeof e[t];a==="boolean"?o=Tc(o):o==null&&a==="string"?(o="",l=!0):a==="number"&&(o=0,l=!0)}try{e[t]=o}catch{}l&&e.removeAttribute(t)}function Yo(e,t,o,r){e.addEventListener(t,o,r)}function $0(e,t,o,r){e.removeEventListener(t,o,r)}function E0(e,t,o,r,n=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[l,a]=T0(t);if(r){const c=i[t]=I0(r,n);Yo(e,l,c,a)}else s&&($0(e,l,s,a),i[t]=void 0)}}const ha=/(?:Once|Passive|Capture)$/;function T0(e){let t;if(ha.test(e)){t={};let r;for(;r=e.match(ha);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):xr(e.slice(2)),t]}let Vi=0;const H0=Promise.resolve(),P0=()=>Vi||(H0.then(()=>Vi=0),Vi=Date.now());function I0(e,t){const o=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=o.attached)return;ht(_0(r,o.value),t,5,[r])};return o.value=e,o.attached=P0(),o}function _0(e,t){if(te(t)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},t.map(r=>n=>!n._stopped&&r&&r(n))}else return t}const pa=/^on[a-z]/,A0=(e,t,o,r,n=!1,i,s,l,a)=>{t==="class"?C0(e,r,n):t==="style"?y0(e,o,r):fi(t)?Fs(t)||E0(e,t,o,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):k0(e,t,r,n))?S0(e,t,r,i,s,l,a):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),w0(e,t,r,n))};function k0(e,t,o,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&pa.test(t)&&ne(o)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||pa.test(t)&&Be(o)?!1:t in e}const Xt="transition",kr="animation",Ei=(e,{slots:t})=>Z(nd,Ed(e),t);Ei.displayName="Transition";const $d={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},L0=Ei.props=Me({},nd.props,$d),So=(e,t=[])=>{te(e)?e.forEach(o=>o(...t)):e&&e(...t)},ga=e=>e?te(e)?e.some(t=>t.length>1):e.length>1:!1;function Ed(e){const t={};for(const w in e)w in $d||(t[w]=e[w]);if(e.css===!1)return t;const{name:o="v",type:r,duration:n,enterFromClass:i=`${o}-enter-from`,enterActiveClass:s=`${o}-enter-active`,enterToClass:l=`${o}-enter-to`,appearFromClass:a=i,appearActiveClass:c=s,appearToClass:d=l,leaveFromClass:u=`${o}-leave-from`,leaveActiveClass:f=`${o}-leave-active`,leaveToClass:p=`${o}-leave-to`}=e,h=B0(n),m=h&&h[0],x=h&&h[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:S,onLeave:v,onLeaveCancelled:E,onBeforeAppear:B=b,onAppear:j=y,onAppearCancelled:P=S}=t,D=(w,q,oe)=>{io(w,q?d:l),io(w,q?c:s),oe&&oe()},I=(w,q)=>{w._isLeaving=!1,io(w,u),io(w,p),io(w,f),q&&q()},L=w=>(q,oe)=>{const Ee=w?j:y,fe=()=>D(q,w,oe);So(Ee,[q,fe]),ma(()=>{io(q,w?a:i),Ot(q,w?d:l),ga(Ee)||ba(q,r,m,fe)})};return Me(t,{onBeforeEnter(w){So(b,[w]),Ot(w,i),Ot(w,s)},onBeforeAppear(w){So(B,[w]),Ot(w,a),Ot(w,c)},onEnter:L(!1),onAppear:L(!0),onLeave(w,q){w._isLeaving=!0;const oe=()=>I(w,q);Ot(w,u),Hd(),Ot(w,f),ma(()=>{!w._isLeaving||(io(w,u),Ot(w,p),ga(v)||ba(w,r,x,oe))}),So(v,[w,oe])},onEnterCancelled(w){D(w,!1),So(S,[w])},onAppearCancelled(w){D(w,!0),So(P,[w])},onLeaveCancelled(w){I(w),So(E,[w])}})}function B0(e){if(e==null)return null;if(Pe(e))return[Gi(e.enter),Gi(e.leave)];{const t=Gi(e);return[t,t]}}function Gi(e){return Gn(e)}function Ot(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.add(o)),(e._vtc||(e._vtc=new Set)).add(t)}function io(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:o}=e;o&&(o.delete(t),o.size||(e._vtc=void 0))}function ma(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let D0=0;function ba(e,t,o,r){const n=e._endId=++D0,i=()=>{n===e._endId&&r()};if(o)return setTimeout(i,o);const{type:s,timeout:l,propCount:a}=Td(e,t);if(!s)return r();const c=s+"end";let d=0;const u=()=>{e.removeEventListener(c,f),i()},f=p=>{p.target===e&&++d>=a&&u()};setTimeout(()=>{d<a&&u()},l+1),e.addEventListener(c,f)}function Td(e,t){const o=window.getComputedStyle(e),r=h=>(o[h]||"").split(", "),n=r(Xt+"Delay"),i=r(Xt+"Duration"),s=xa(n,i),l=r(kr+"Delay"),a=r(kr+"Duration"),c=xa(l,a);let d=null,u=0,f=0;t===Xt?s>0&&(d=Xt,u=s,f=i.length):t===kr?c>0&&(d=kr,u=c,f=a.length):(u=Math.max(s,c),d=u>0?s>c?Xt:kr:null,f=d?d===Xt?i.length:a.length:0);const p=d===Xt&&/\b(transform|all)(,|$)/.test(o[Xt+"Property"]);return{type:d,timeout:u,propCount:f,hasTransform:p}}function xa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((o,r)=>Ca(o)+Ca(e[r])))}function Ca(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Hd(){return document.body.offsetHeight}const Pd=new WeakMap,Id=new WeakMap,R0={name:"TransitionGroup",props:Me({},L0,{tag:String,moveClass:String}),setup(e,{slots:t}){const o=vd(),r=rd();let n,i;return ld(()=>{if(!n.length)return;const s=e.moveClass||`${e.name||"v"}-move`;if(!j0(n[0].el,o.vnode.el,s))return;n.forEach(O0),n.forEach(z0);const l=n.filter(F0);Hd(),l.forEach(a=>{const c=a.el,d=c.style;Ot(c,s),d.transform=d.webkitTransform=d.transitionDuration="";const u=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",u),c._moveCb=null,io(c,s))};c.addEventListener("transitionend",u)})}),()=>{const s=Ce(e),l=Ed(s);let a=s.tag||Ye;n=i,i=t.default?ol(t.default()):[];for(let c=0;c<i.length;c++){const d=i[c];d.key!=null&&on(d,tn(d,l,r,o))}if(n)for(let c=0;c<n.length;c++){const d=n[c];on(d,tn(d,l,r,o)),Pd.set(d,d.el.getBoundingClientRect())}return Fe(a,null,i)}}},M0=R0;function O0(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function z0(e){Id.set(e,e.el.getBoundingClientRect())}function F0(e){const t=Pd.get(e),o=Id.get(e),r=t.left-o.left,n=t.top-o.top;if(r||n){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${n}px)`,i.transitionDuration="0s",e}}function j0(e,t,o){const r=e.cloneNode();e._vtc&&e._vtc.forEach(s=>{s.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),o.split(/\s+/).forEach(s=>s&&r.classList.add(s)),r.style.display="none";const n=t.nodeType===1?t:t.parentNode;n.appendChild(r);const{hasTransform:i}=Td(r);return n.removeChild(r),i}const ya=e=>{const t=e.props["onUpdate:modelValue"]||!1;return te(t)?o=>Nn(t,o):t};function W0(e){e.target.composing=!0}function va(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const L8={created(e,{modifiers:{lazy:t,trim:o,number:r}},n){e._assign=ya(n);const i=r||n.props&&n.props.type==="number";Yo(e,t?"change":"input",s=>{if(s.target.composing)return;let l=e.value;o&&(l=l.trim()),i&&(l=Gn(l)),e._assign(l)}),o&&Yo(e,"change",()=>{e.value=e.value.trim()}),t||(Yo(e,"compositionstart",W0),Yo(e,"compositionend",va),Yo(e,"change",va))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:o,trim:r,number:n}},i){if(e._assign=ya(i),e.composing||document.activeElement===e&&e.type!=="range"&&(o||r&&e.value.trim()===t||(n||e.type==="number")&&Gn(e.value)===t))return;const s=t==null?"":t;e.value!==s&&(e.value=s)}},B8={beforeMount(e,{value:t},{transition:o}){e._vod=e.style.display==="none"?"":e.style.display,o&&t?o.beforeEnter(e):Lr(e,t)},mounted(e,{value:t},{transition:o}){o&&t&&o.enter(e)},updated(e,{value:t,oldValue:o},{transition:r}){!t!=!o&&(r?t?(r.beforeEnter(e),Lr(e,!0),r.enter(e)):r.leave(e,()=>{Lr(e,!1)}):Lr(e,t))},beforeUnmount(e,{value:t}){Lr(e,t)}};function Lr(e,t){e.style.display=t?e._vod:"none"}const N0=Me({patchProp:A0},x0);let wa;function U0(){return wa||(wa=Yg(N0))}const K0=(...e)=>{const t=U0().createApp(...e),{mount:o}=t;return t.mount=r=>{const n=V0(r);if(!n)return;const i=t._component;!ne(i)&&!i.render&&!i.template&&(i.template=n.innerHTML),n.innerHTML="";const s=o(n,!1,n instanceof SVGElement);return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),s},t};function V0(e){return Be(e)?document.querySelector(e):e}const Sa={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},wr="^\\s*",Sr="\\s*$",_o="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",Ao="([0-9A-Fa-f])",ko="([0-9A-Fa-f]{2})",G0=new RegExp(`${wr}rgb\\s*\\(${_o},${_o},${_o}\\)${Sr}`),q0=new RegExp(`${wr}rgba\\s*\\(${_o},${_o},${_o},${_o}\\)${Sr}`),Z0=new RegExp(`${wr}#${Ao}${Ao}${Ao}${Sr}`),Y0=new RegExp(`${wr}#${ko}${ko}${ko}${Sr}`),X0=new RegExp(`${wr}#${Ao}${Ao}${Ao}${Ao}${Sr}`),Q0=new RegExp(`${wr}#${ko}${ko}${ko}${ko}${Sr}`);function Ge(e){return parseInt(e,16)}function Ut(e){try{let t;if(t=Y0.exec(e))return[Ge(t[1]),Ge(t[2]),Ge(t[3]),1];if(t=G0.exec(e))return[We(t[1]),We(t[5]),We(t[9]),1];if(t=q0.exec(e))return[We(t[1]),We(t[5]),We(t[9]),Kr(t[13])];if(t=Z0.exec(e))return[Ge(t[1]+t[1]),Ge(t[2]+t[2]),Ge(t[3]+t[3]),1];if(t=Q0.exec(e))return[Ge(t[1]),Ge(t[2]),Ge(t[3]),Kr(Ge(t[4])/255)];if(t=X0.exec(e))return[Ge(t[1]+t[1]),Ge(t[2]+t[2]),Ge(t[3]+t[3]),Kr(Ge(t[4]+t[4])/255)];if(e in Sa)return Ut(Sa[e]);throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(t){throw t}}function J0(e){return e>1?1:e<0?0:e}function ys(e,t,o,r){return`rgba(${We(e)}, ${We(t)}, ${We(o)}, ${J0(r)})`}function qi(e,t,o,r,n){return We((e*t*(1-r)+o*r)/n)}function G(e,t){Array.isArray(e)||(e=Ut(e)),Array.isArray(t)||(t=Ut(t));const o=e[3],r=t[3],n=Kr(o+r-o*r);return ys(qi(e[0],o,t[0],r,n),qi(e[1],o,t[1],r,n),qi(e[2],o,t[2],r,n),n)}function H(e,t){const[o,r,n,i=1]=Array.isArray(e)?e:Ut(e);return t.alpha?ys(o,r,n,t.alpha):ys(o,r,n,i)}function Ae(e,t){const[o,r,n,i=1]=Array.isArray(e)?e:Ut(e),{lightness:s=1,alpha:l=1}=t;return em([o*s,r*s,n*s,i*l])}function Kr(e){const t=Math.round(Number(e)*100)/100;return t>1?1:t<0?0:t}function We(e){const t=Math.round(Number(e));return t>255?255:t<0?0:t}function em(e){const[t,o,r]=e;return 3 in e?`rgba(${We(t)}, ${We(o)}, ${We(r)}, ${Kr(e[3])})`:`rgba(${We(t)}, ${We(o)}, ${We(r)}, 1)`}function tm(e=8){return Math.random().toString(16).slice(2,2+e)}function om(e,t=[],o){const r={};return Object.getOwnPropertyNames(e).forEach(i=>{t.includes(i)||(r[i]=e[i])}),Object.assign(r,o)}const rm=(e,...t)=>typeof e=="function"?e(...t):typeof e=="string"?xs(e):typeof e=="number"?xs(String(e)):null;function nm(e,t){console.error(`[naive/${e}]: ${t}`)}function im(e,t){throw new Error(`[naive/${e}]: ${t}`)}function D8(e){return e}function sm(e){let t=0;for(let o=0;o<e.length;++o)e[o]==="&"&&++t;return t}const _d=/\s*,(?![^(]*\))\s*/g,lm=/\s+/g;function am(e,t){const o=[];return t.split(_d).forEach(r=>{let n=sm(r);if(n){if(n===1){e.forEach(s=>{o.push(r.replace("&",s))});return}}else{e.forEach(s=>{o.push((s&&s+" ")+r)});return}let i=[r];for(;n--;){const s=[];i.forEach(l=>{e.forEach(a=>{s.push(l.replace("&",a))})}),i=s}i.forEach(s=>o.push(s))}),o}function cm(e,t){const o=[];return t.split(_d).forEach(r=>{e.forEach(n=>{o.push((n&&n+" ")+r)})}),o}function dm(e){let t=[""];return e.forEach(o=>{o=o&&o.trim(),o&&(o.includes("&")?t=am(t,o):t=cm(t,o))}),t.join(", ").replace(lm," ")}function $a(e){if(!e)return;const t=e.parentElement;t&&t.removeChild(e)}function Ti(e){return document.querySelector(`style[cssr-id="${e}"]`)}function um(e){const t=document.createElement("style");return t.setAttribute("cssr-id",e),t}function _n(e){return e?/^\s*@(s|m)/.test(e):!1}const fm=/[A-Z]/g;function Ad(e){return e.replace(fm,t=>"-"+t.toLowerCase())}function hm(e,t="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(o=>t+`  ${Ad(o[0])}: ${o[1]};`).join(`
`)+`
`+t+"}":`: ${e};`}function pm(e,t,o){return typeof e=="function"?e({context:t.context,props:o}):e}function Ea(e,t,o,r){if(!t)return"";const n=pm(t,o,r);if(!n)return"";if(typeof n=="string")return`${e} {
${n}
}`;const i=Object.keys(n);if(i.length===0)return o.config.keepEmptyBlock?e+` {
}`:"";const s=e?[e+" {"]:[];return i.forEach(l=>{const a=n[l];if(l==="raw"){s.push(`
`+a+`
`);return}l=Ad(l),a!=null&&s.push(`  ${l}${hm(a)}`)}),e&&s.push("}"),s.join(`
`)}function vs(e,t,o){!e||e.forEach(r=>{if(Array.isArray(r))vs(r,t,o);else if(typeof r=="function"){const n=r(t);Array.isArray(n)?vs(n,t,o):n&&o(n)}else r&&o(r)})}function kd(e,t,o,r,n,i){const s=e.$;let l="";if(!s||typeof s=="string")_n(s)?l=s:t.push(s);else if(typeof s=="function"){const d=s({context:r.context,props:n});_n(d)?l=d:t.push(d)}else if(s.before&&s.before(r.context),!s.$||typeof s.$=="string")_n(s.$)?l=s.$:t.push(s.$);else if(s.$){const d=s.$({context:r.context,props:n});_n(d)?l=d:t.push(d)}const a=dm(t),c=Ea(a,e.props,r,n);l?(o.push(`${l} {`),i&&c&&i.insertRule(`${l} {
${c}
}
`)):(i&&c&&i.insertRule(c),!i&&c.length&&o.push(c)),e.children&&vs(e.children,{context:r.context,props:n},d=>{if(typeof d=="string"){const u=Ea(a,{raw:d},r,n);i?i.insertRule(u):o.push(u)}else kd(d,t,o,r,n,i)}),t.pop(),l&&o.push("}"),s&&s.after&&s.after(r.context)}function Ld(e,t,o,r=!1){const n=[];return kd(e,[],n,t,o,r?e.instance.__styleSheet:void 0),r?"":n.join(`

`)}function sn(e){for(var t=0,o,r=0,n=e.length;n>=4;++r,n-=4)o=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,o=(o&65535)*1540483477+((o>>>16)*59797<<16),o^=o>>>24,t=(o&65535)*1540483477+((o>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(n){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function gm(e,t,o){const{els:r}=t;if(o===void 0)r.forEach($a),t.els=[];else{const n=Ti(o);n&&r.includes(n)&&($a(n),t.els=r.filter(i=>i!==n))}}function Ta(e,t){e.push(t)}function mm(e,t,o,r,n,i,s,l,a){if(i&&!a){if(o===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const f=window.__cssrContext;f[o]||(f[o]=!0,Ld(t,e,r,i));return}let c;if(o===void 0&&(c=t.render(r),o=sn(c)),a){a.adapter(o,c!=null?c:t.render(r));return}const d=Ti(o);if(d!==null&&!s)return d;const u=d!=null?d:um(o);if(c===void 0&&(c=t.render(r)),u.textContent=c,d!==null)return d;if(l){const f=document.head.querySelector(`meta[name="${l}"]`);if(f)return document.head.insertBefore(u,f),Ta(t.els,u),u}return n?document.head.insertBefore(u,document.head.querySelector("style, link")):document.head.appendChild(u),Ta(t.els,u),u}function bm(e){return Ld(this,this.instance,e)}function xm(e={}){const{id:t,ssr:o,props:r,head:n=!1,silent:i=!1,force:s=!1,anchorMetaName:l}=e;return mm(this.instance,this,t,r,n,i,s,l,o)}function Cm(e={}){const{id:t}=e;gm(this.instance,this,t)}const An=function(e,t,o,r){return{instance:e,$:t,props:o,children:r,els:[],render:bm,mount:xm,unmount:Cm}},ym=function(e,t,o,r){return Array.isArray(t)?An(e,{$:null},null,t):Array.isArray(o)?An(e,t,null,o):Array.isArray(r)?An(e,t,o,r):An(e,t,o,null)};function vm(e={}){let t=null;const o={c:(...r)=>ym(o,...r),use:(r,...n)=>r.install(o,...n),find:Ti,context:{},config:e,get __styleSheet(){if(!t){const r=document.createElement("style");return document.head.appendChild(r),t=document.styleSheets[document.styleSheets.length-1],t}return t}};return o}function wm(e,t){if(e===void 0)return!1;if(t){const{context:{ids:o}}=t;return o.has(e)}return Ti(e)!==null}function Sm(e){let t=".",o="__",r="--",n;if(e){let h=e.blockPrefix;h&&(t=h),h=e.elementPrefix,h&&(o=h),h=e.modifierPrefix,h&&(r=h)}const i={install(h){n=h.c;const m=h.context;m.bem={},m.bem.b=null,m.bem.els=null}};function s(h){let m,x;return{before(b){m=b.bem.b,x=b.bem.els,b.bem.els=null},after(b){b.bem.b=m,b.bem.els=x},$({context:b,props:y}){return h=typeof h=="string"?h:h({context:b,props:y}),b.bem.b=h,`${(y==null?void 0:y.bPrefix)||t}${b.bem.b}`}}}function l(h){let m;return{before(x){m=x.bem.els},after(x){x.bem.els=m},$({context:x,props:b}){return h=typeof h=="string"?h:h({context:x,props:b}),x.bem.els=h.split(",").map(y=>y.trim()),x.bem.els.map(y=>`${(b==null?void 0:b.bPrefix)||t}${x.bem.b}${o}${y}`).join(", ")}}}function a(h){return{$({context:m,props:x}){h=typeof h=="string"?h:h({context:m,props:x});const b=h.split(",").map(v=>v.trim());function y(v){return b.map(E=>`&${(x==null?void 0:x.bPrefix)||t}${m.bem.b}${v!==void 0?`${o}${v}`:""}${r}${E}`).join(", ")}const S=m.bem.els;return S!==null?y(S[0]):y()}}}function c(h){return{$({context:m,props:x}){h=typeof h=="string"?h:h({context:m,props:x});const b=m.bem.els;return`&:not(${(x==null?void 0:x.bPrefix)||t}${m.bem.b}${b!==null&&b.length>0?`${o}${b[0]}`:""}${r}${h})`}}}return Object.assign(i,{cB:(...h)=>n(s(h[0]),h[1],h[2]),cE:(...h)=>n(l(h[0]),h[1],h[2]),cM:(...h)=>n(a(h[0]),h[1],h[2]),cNotM:(...h)=>n(c(h[0]),h[1],h[2])}),i}function zt(e,t){return e+(t==="default"?"":t.replace(/^[a-z]/,o=>o.toUpperCase()))}zt("abc","def");const $m="n",ln=`.${$m}-`,Em="__",Tm="--",Bd=vm(),Dd=Sm({blockPrefix:ln,elementPrefix:Em,modifierPrefix:Tm});Bd.use(Dd);const{c:xe,find:R8}=Bd,{cB:Mo,cE:Ze,cM:It,cNotM:Hm}=Dd;function M8(e){return xe(({props:{bPrefix:t}})=>`${t||ln}modal, ${t||ln}drawer`,[e])}function O8(e){return xe(({props:{bPrefix:t}})=>`${t||ln}popover`,[e])}function z8(e){return xe(({props:{bPrefix:t}})=>`&${t||ln}modal`,e)}const F8=(...e)=>xe(">",[Mo(...e)]);function Ha(e){const t=be(e),o=bo(t.value);return jr(t,r=>{o.value=r}),typeof e=="function"?o:{__v_isRef:!0,get value(){return o.value},set value(r){e.set(r)}}}function Pm(){const e=bo(!1);return wi(()=>{e.value=!0}),Zs(e)}const Rd=Symbol("@css-render/vue3-ssr");function Im(e,t){return`<style cssr-id="${e}">
${t}
</style>`}function _m(e,t){const o=Le(Rd,null);if(o===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:r,ids:n}=o;n.has(e)||r!==null&&(n.add(e),r.push(Im(e,t)))}const Am=typeof document<"u";function Hi(){if(Am)return;const e=Le(Rd,null);if(e!==null)return{adapter:_m,context:e}}var km=typeof global=="object"&&global&&global.Object===Object&&global;const Md=km;var Lm=typeof self=="object"&&self&&self.Object===Object&&self,Bm=Md||Lm||Function("return this")();const $r=Bm;var Dm=$r.Symbol;const lr=Dm;var Od=Object.prototype,Rm=Od.hasOwnProperty,Mm=Od.toString,Br=lr?lr.toStringTag:void 0;function Om(e){var t=Rm.call(e,Br),o=e[Br];try{e[Br]=void 0;var r=!0}catch{}var n=Mm.call(e);return r&&(t?e[Br]=o:delete e[Br]),n}var zm=Object.prototype,Fm=zm.toString;function jm(e){return Fm.call(e)}var Wm="[object Null]",Nm="[object Undefined]",Pa=lr?lr.toStringTag:void 0;function hn(e){return e==null?e===void 0?Nm:Wm:Pa&&Pa in Object(e)?Om(e):jm(e)}function Er(e){return e!=null&&typeof e=="object"}var Um="[object Symbol]";function Km(e){return typeof e=="symbol"||Er(e)&&hn(e)==Um}function Vm(e,t){for(var o=-1,r=e==null?0:e.length,n=Array(r);++o<r;)n[o]=t(e[o],o,e);return n}var Gm=Array.isArray;const ei=Gm;var qm=1/0,Ia=lr?lr.prototype:void 0,_a=Ia?Ia.toString:void 0;function zd(e){if(typeof e=="string")return e;if(ei(e))return Vm(e,zd)+"";if(Km(e))return _a?_a.call(e):"";var t=e+"";return t=="0"&&1/e==-qm?"-0":t}function jo(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function Fd(e){return e}var Zm="[object AsyncFunction]",Ym="[object Function]",Xm="[object GeneratorFunction]",Qm="[object Proxy]";function ul(e){if(!jo(e))return!1;var t=hn(e);return t==Ym||t==Xm||t==Zm||t==Qm}var Jm=$r["__core-js_shared__"];const Zi=Jm;var Aa=function(){var e=/[^.]+$/.exec(Zi&&Zi.keys&&Zi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function eb(e){return!!Aa&&Aa in e}var tb=Function.prototype,ob=tb.toString;function rb(e){if(e!=null){try{return ob.call(e)}catch{}try{return e+""}catch{}}return""}var nb=/[\\^$.*+?()[\]{}|]/g,ib=/^\[object .+?Constructor\]$/,sb=Function.prototype,lb=Object.prototype,ab=sb.toString,cb=lb.hasOwnProperty,db=RegExp("^"+ab.call(cb).replace(nb,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ub(e){if(!jo(e)||eb(e))return!1;var t=ul(e)?db:ib;return t.test(rb(e))}function fb(e,t){return e==null?void 0:e[t]}function fl(e,t){var o=fb(e,t);return ub(o)?o:void 0}var ka=Object.create,hb=function(){function e(){}return function(t){if(!jo(t))return{};if(ka)return ka(t);e.prototype=t;var o=new e;return e.prototype=void 0,o}}();const pb=hb;function gb(e,t,o){switch(o.length){case 0:return e.call(t);case 1:return e.call(t,o[0]);case 2:return e.call(t,o[0],o[1]);case 3:return e.call(t,o[0],o[1],o[2])}return e.apply(t,o)}function mb(e,t){var o=-1,r=e.length;for(t||(t=Array(r));++o<r;)t[o]=e[o];return t}var bb=800,xb=16,Cb=Date.now;function yb(e){var t=0,o=0;return function(){var r=Cb(),n=xb-(r-o);if(o=r,n>0){if(++t>=bb)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function vb(e){return function(){return e}}var wb=function(){try{var e=fl(Object,"defineProperty");return e({},"",{}),e}catch{}}();const ti=wb;var Sb=ti?function(e,t){return ti(e,"toString",{configurable:!0,enumerable:!1,value:vb(t),writable:!0})}:Fd;const $b=Sb;var Eb=yb($b);const Tb=Eb;var Hb=9007199254740991,Pb=/^(?:0|[1-9]\d*)$/;function jd(e,t){var o=typeof e;return t=t==null?Hb:t,!!t&&(o=="number"||o!="symbol"&&Pb.test(e))&&e>-1&&e%1==0&&e<t}function hl(e,t,o){t=="__proto__"&&ti?ti(e,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[t]=o}function Pi(e,t){return e===t||e!==e&&t!==t}var Ib=Object.prototype,_b=Ib.hasOwnProperty;function Ab(e,t,o){var r=e[t];(!(_b.call(e,t)&&Pi(r,o))||o===void 0&&!(t in e))&&hl(e,t,o)}function kb(e,t,o,r){var n=!o;o||(o={});for(var i=-1,s=t.length;++i<s;){var l=t[i],a=r?r(o[l],e[l],l,o,e):void 0;a===void 0&&(a=e[l]),n?hl(o,l,a):Ab(o,l,a)}return o}var La=Math.max;function Lb(e,t,o){return t=La(t===void 0?e.length-1:t,0),function(){for(var r=arguments,n=-1,i=La(r.length-t,0),s=Array(i);++n<i;)s[n]=r[t+n];n=-1;for(var l=Array(t+1);++n<t;)l[n]=r[n];return l[t]=o(s),gb(e,this,l)}}function Bb(e,t){return Tb(Lb(e,t,Fd),e+"")}var Db=9007199254740991;function Wd(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Db}function pl(e){return e!=null&&Wd(e.length)&&!ul(e)}function Rb(e,t,o){if(!jo(o))return!1;var r=typeof t;return(r=="number"?pl(o)&&jd(t,o.length):r=="string"&&t in o)?Pi(o[t],e):!1}function Mb(e){return Bb(function(t,o){var r=-1,n=o.length,i=n>1?o[n-1]:void 0,s=n>2?o[2]:void 0;for(i=e.length>3&&typeof i=="function"?(n--,i):void 0,s&&Rb(o[0],o[1],s)&&(i=n<3?void 0:i,n=1),t=Object(t);++r<n;){var l=o[r];l&&e(t,l,r,i)}return t})}var Ob=Object.prototype;function Nd(e){var t=e&&e.constructor,o=typeof t=="function"&&t.prototype||Ob;return e===o}function zb(e,t){for(var o=-1,r=Array(e);++o<e;)r[o]=t(o);return r}var Fb="[object Arguments]";function Ba(e){return Er(e)&&hn(e)==Fb}var Ud=Object.prototype,jb=Ud.hasOwnProperty,Wb=Ud.propertyIsEnumerable,Nb=Ba(function(){return arguments}())?Ba:function(e){return Er(e)&&jb.call(e,"callee")&&!Wb.call(e,"callee")};const ws=Nb;function Ub(){return!1}var Kd=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Da=Kd&&typeof module=="object"&&module&&!module.nodeType&&module,Kb=Da&&Da.exports===Kd,Ra=Kb?$r.Buffer:void 0,Vb=Ra?Ra.isBuffer:void 0,Gb=Vb||Ub;const Vd=Gb;var qb="[object Arguments]",Zb="[object Array]",Yb="[object Boolean]",Xb="[object Date]",Qb="[object Error]",Jb="[object Function]",ex="[object Map]",tx="[object Number]",ox="[object Object]",rx="[object RegExp]",nx="[object Set]",ix="[object String]",sx="[object WeakMap]",lx="[object ArrayBuffer]",ax="[object DataView]",cx="[object Float32Array]",dx="[object Float64Array]",ux="[object Int8Array]",fx="[object Int16Array]",hx="[object Int32Array]",px="[object Uint8Array]",gx="[object Uint8ClampedArray]",mx="[object Uint16Array]",bx="[object Uint32Array]",He={};He[cx]=He[dx]=He[ux]=He[fx]=He[hx]=He[px]=He[gx]=He[mx]=He[bx]=!0;He[qb]=He[Zb]=He[lx]=He[Yb]=He[ax]=He[Xb]=He[Qb]=He[Jb]=He[ex]=He[tx]=He[ox]=He[rx]=He[nx]=He[ix]=He[sx]=!1;function xx(e){return Er(e)&&Wd(e.length)&&!!He[hn(e)]}function Cx(e){return function(t){return e(t)}}var Gd=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Vr=Gd&&typeof module=="object"&&module&&!module.nodeType&&module,yx=Vr&&Vr.exports===Gd,Yi=yx&&Md.process,vx=function(){try{var e=Vr&&Vr.require&&Vr.require("util").types;return e||Yi&&Yi.binding&&Yi.binding("util")}catch{}}();const Ma=vx;var Oa=Ma&&Ma.isTypedArray,wx=Oa?Cx(Oa):xx;const qd=wx;var Sx=Object.prototype,$x=Sx.hasOwnProperty;function Ex(e,t){var o=ei(e),r=!o&&ws(e),n=!o&&!r&&Vd(e),i=!o&&!r&&!n&&qd(e),s=o||r||n||i,l=s?zb(e.length,String):[],a=l.length;for(var c in e)(t||$x.call(e,c))&&!(s&&(c=="length"||n&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||jd(c,a)))&&l.push(c);return l}function Tx(e,t){return function(o){return e(t(o))}}function Hx(e){var t=[];if(e!=null)for(var o in Object(e))t.push(o);return t}var Px=Object.prototype,Ix=Px.hasOwnProperty;function _x(e){if(!jo(e))return Hx(e);var t=Nd(e),o=[];for(var r in e)r=="constructor"&&(t||!Ix.call(e,r))||o.push(r);return o}function Zd(e){return pl(e)?Ex(e,!0):_x(e)}var Ax=fl(Object,"create");const an=Ax;function kx(){this.__data__=an?an(null):{},this.size=0}function Lx(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Bx="__lodash_hash_undefined__",Dx=Object.prototype,Rx=Dx.hasOwnProperty;function Mx(e){var t=this.__data__;if(an){var o=t[e];return o===Bx?void 0:o}return Rx.call(t,e)?t[e]:void 0}var Ox=Object.prototype,zx=Ox.hasOwnProperty;function Fx(e){var t=this.__data__;return an?t[e]!==void 0:zx.call(t,e)}var jx="__lodash_hash_undefined__";function Wx(e,t){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=an&&t===void 0?jx:t,this}function Oo(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var r=e[t];this.set(r[0],r[1])}}Oo.prototype.clear=kx;Oo.prototype.delete=Lx;Oo.prototype.get=Mx;Oo.prototype.has=Fx;Oo.prototype.set=Wx;function Nx(){this.__data__=[],this.size=0}function Ii(e,t){for(var o=e.length;o--;)if(Pi(e[o][0],t))return o;return-1}var Ux=Array.prototype,Kx=Ux.splice;function Vx(e){var t=this.__data__,o=Ii(t,e);if(o<0)return!1;var r=t.length-1;return o==r?t.pop():Kx.call(t,o,1),--this.size,!0}function Gx(e){var t=this.__data__,o=Ii(t,e);return o<0?void 0:t[o][1]}function qx(e){return Ii(this.__data__,e)>-1}function Zx(e,t){var o=this.__data__,r=Ii(o,e);return r<0?(++this.size,o.push([e,t])):o[r][1]=t,this}function Gt(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var r=e[t];this.set(r[0],r[1])}}Gt.prototype.clear=Nx;Gt.prototype.delete=Vx;Gt.prototype.get=Gx;Gt.prototype.has=qx;Gt.prototype.set=Zx;var Yx=fl($r,"Map");const Yd=Yx;function Xx(){this.size=0,this.__data__={hash:new Oo,map:new(Yd||Gt),string:new Oo}}function Qx(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function _i(e,t){var o=e.__data__;return Qx(t)?o[typeof t=="string"?"string":"hash"]:o.map}function Jx(e){var t=_i(this,e).delete(e);return this.size-=t?1:0,t}function e1(e){return _i(this,e).get(e)}function t1(e){return _i(this,e).has(e)}function o1(e,t){var o=_i(this,e),r=o.size;return o.set(e,t),this.size+=o.size==r?0:1,this}function Tr(e){var t=-1,o=e==null?0:e.length;for(this.clear();++t<o;){var r=e[t];this.set(r[0],r[1])}}Tr.prototype.clear=Xx;Tr.prototype.delete=Jx;Tr.prototype.get=e1;Tr.prototype.has=t1;Tr.prototype.set=o1;function r1(e){return e==null?"":zd(e)}var n1=Tx(Object.getPrototypeOf,Object);const Xd=n1;var i1="[object Object]",s1=Function.prototype,l1=Object.prototype,Qd=s1.toString,a1=l1.hasOwnProperty,c1=Qd.call(Object);function d1(e){if(!Er(e)||hn(e)!=i1)return!1;var t=Xd(e);if(t===null)return!0;var o=a1.call(t,"constructor")&&t.constructor;return typeof o=="function"&&o instanceof o&&Qd.call(o)==c1}function u1(e,t,o){var r=-1,n=e.length;t<0&&(t=-t>n?0:n+t),o=o>n?n:o,o<0&&(o+=n),n=t>o?0:o-t>>>0,t>>>=0;for(var i=Array(n);++r<n;)i[r]=e[r+t];return i}function f1(e,t,o){var r=e.length;return o=o===void 0?r:o,!t&&o>=r?e:u1(e,t,o)}var h1="\\ud800-\\udfff",p1="\\u0300-\\u036f",g1="\\ufe20-\\ufe2f",m1="\\u20d0-\\u20ff",b1=p1+g1+m1,x1="\\ufe0e\\ufe0f",C1="\\u200d",y1=RegExp("["+C1+h1+b1+x1+"]");function Jd(e){return y1.test(e)}function v1(e){return e.split("")}var eu="\\ud800-\\udfff",w1="\\u0300-\\u036f",S1="\\ufe20-\\ufe2f",$1="\\u20d0-\\u20ff",E1=w1+S1+$1,T1="\\ufe0e\\ufe0f",H1="["+eu+"]",Ss="["+E1+"]",$s="\\ud83c[\\udffb-\\udfff]",P1="(?:"+Ss+"|"+$s+")",tu="[^"+eu+"]",ou="(?:\\ud83c[\\udde6-\\uddff]){2}",ru="[\\ud800-\\udbff][\\udc00-\\udfff]",I1="\\u200d",nu=P1+"?",iu="["+T1+"]?",_1="(?:"+I1+"(?:"+[tu,ou,ru].join("|")+")"+iu+nu+")*",A1=iu+nu+_1,k1="(?:"+[tu+Ss+"?",Ss,ou,ru,H1].join("|")+")",L1=RegExp($s+"(?="+$s+")|"+k1+A1,"g");function B1(e){return e.match(L1)||[]}function D1(e){return Jd(e)?B1(e):v1(e)}function R1(e){return function(t){t=r1(t);var o=Jd(t)?D1(t):void 0,r=o?o[0]:t.charAt(0),n=o?f1(o,1).join(""):t.slice(1);return r[e]()+n}}var M1=R1("toUpperCase");const O1=M1;function z1(){this.__data__=new Gt,this.size=0}function F1(e){var t=this.__data__,o=t.delete(e);return this.size=t.size,o}function j1(e){return this.__data__.get(e)}function W1(e){return this.__data__.has(e)}var N1=200;function U1(e,t){var o=this.__data__;if(o instanceof Gt){var r=o.__data__;if(!Yd||r.length<N1-1)return r.push([e,t]),this.size=++o.size,this;o=this.__data__=new Tr(r)}return o.set(e,t),this.size=o.size,this}function Hr(e){var t=this.__data__=new Gt(e);this.size=t.size}Hr.prototype.clear=z1;Hr.prototype.delete=F1;Hr.prototype.get=j1;Hr.prototype.has=W1;Hr.prototype.set=U1;var su=typeof exports=="object"&&exports&&!exports.nodeType&&exports,za=su&&typeof module=="object"&&module&&!module.nodeType&&module,K1=za&&za.exports===su,Fa=K1?$r.Buffer:void 0,ja=Fa?Fa.allocUnsafe:void 0;function V1(e,t){if(t)return e.slice();var o=e.length,r=ja?ja(o):new e.constructor(o);return e.copy(r),r}var G1=$r.Uint8Array;const Wa=G1;function q1(e){var t=new e.constructor(e.byteLength);return new Wa(t).set(new Wa(e)),t}function Z1(e,t){var o=t?q1(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}function Y1(e){return typeof e.constructor=="function"&&!Nd(e)?pb(Xd(e)):{}}function X1(e){return function(t,o,r){for(var n=-1,i=Object(t),s=r(t),l=s.length;l--;){var a=s[e?l:++n];if(o(i[a],a,i)===!1)break}return t}}var Q1=X1();const J1=Q1;function Es(e,t,o){(o!==void 0&&!Pi(e[t],o)||o===void 0&&!(t in e))&&hl(e,t,o)}function eC(e){return Er(e)&&pl(e)}function Ts(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function tC(e){return kb(e,Zd(e))}function oC(e,t,o,r,n,i,s){var l=Ts(e,o),a=Ts(t,o),c=s.get(a);if(c){Es(e,o,c);return}var d=i?i(l,a,o+"",e,t,s):void 0,u=d===void 0;if(u){var f=ei(a),p=!f&&Vd(a),h=!f&&!p&&qd(a);d=a,f||p||h?ei(l)?d=l:eC(l)?d=mb(l):p?(u=!1,d=V1(a,!0)):h?(u=!1,d=Z1(a,!0)):d=[]:d1(a)||ws(a)?(d=l,ws(l)?d=tC(l):(!jo(l)||ul(l))&&(d=Y1(a))):u=!1}u&&(s.set(a,d),n(d,a,r,i,s),s.delete(a)),Es(e,o,d)}function lu(e,t,o,r,n){e!==t&&J1(t,function(i,s){if(n||(n=new Hr),jo(i))oC(e,t,s,o,lu,r,n);else{var l=r?r(Ts(e,s),i,s+"",e,t,n):void 0;l===void 0&&(l=i),Es(e,s,l)}},Zd)}var rC=Mb(function(e,t,o){lu(e,t,o)});const Fr=rC,pn={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:nC,fontFamily:iC,lineHeight:sC}=pn,au=xe("body",`
 margin: 0;
 font-size: ${nC};
 font-family: ${iC};
 line-height: ${sC};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[xe("input",`
 font-family: inherit;
 font-size: inherit;
 `)]),zo="n-config-provider",cn="naive-ui-style";function gl(e,t,o,r,n,i){const s=Hi(),l=Le(zo,null);if(o){const c=()=>{const d=i==null?void 0:i.value;o.mount({id:d===void 0?t:d+t,head:!0,props:{bPrefix:d?`.${d}-`:void 0},anchorMetaName:cn,ssr:s}),l!=null&&l.preflightStyleDisabled||au.mount({id:"n-global",head:!0,anchorMetaName:cn,ssr:s})};s?c():vi(c)}return be(()=>{var c;const{theme:{common:d,self:u,peers:f={}}={},themeOverrides:p={},builtinThemeOverrides:h={}}=n,{common:m,peers:x}=p,{common:b=void 0,[e]:{common:y=void 0,self:S=void 0,peers:v={}}={}}=(l==null?void 0:l.mergedThemeRef.value)||{},{common:E=void 0,[e]:B={}}=(l==null?void 0:l.mergedThemeOverridesRef.value)||{},{common:j,peers:P={}}=B,D=Fr({},d||y||b||r.common,E,j,m),I=Fr((c=u||S||r.self)===null||c===void 0?void 0:c(D),h,B,p);return{common:D,self:I,peers:Fr({},r.peers,v,f),peerOverrides:Fr({},h.peers,P,x)}})}gl.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const cu="n";function du(e={},t={defaultBordered:!0}){const o=Le(zo,null);return{inlineThemeDisabled:o==null?void 0:o.inlineThemeDisabled,mergedRtlRef:o==null?void 0:o.mergedRtlRef,mergedComponentPropsRef:o==null?void 0:o.mergedComponentPropsRef,mergedBreakpointsRef:o==null?void 0:o.mergedBreakpointsRef,mergedBorderedRef:be(()=>{var r,n;const{bordered:i}=e;return i!==void 0?i:(n=(r=o==null?void 0:o.mergedBorderedRef.value)!==null&&r!==void 0?r:t.defaultBordered)!==null&&n!==void 0?n:!0}),mergedClsPrefixRef:be(()=>(o==null?void 0:o.mergedClsPrefixRef.value)||cu),namespaceRef:be(()=>o==null?void 0:o.mergedNamespaceRef.value)}}function ml(e,t,o){if(!t)return;const r=Hi(),n=Le(zo,null),i=()=>{const s=o==null?void 0:o.value;t.mount({id:s===void 0?e:s+e,head:!0,anchorMetaName:cn,props:{bPrefix:s?`.${s}-`:void 0},ssr:r}),n!=null&&n.preflightStyleDisabled||au.mount({id:"n-global",head:!0,anchorMetaName:cn,ssr:r})};r?i():vi(i)}function lC(e,t,o,r){var n;o||im("useThemeClass","cssVarsRef is not passed");const i=(n=Le(zo,null))===null||n===void 0?void 0:n.mergedThemeHashRef,s=bo(""),l=Hi();let a;const c=`__${e}`,d=()=>{let u=c;const f=t?t.value:void 0,p=i==null?void 0:i.value;p&&(u+="-"+p),f&&(u+="-"+f);const{themeOverrides:h,builtinThemeOverrides:m}=r;h&&(u+="-"+sn(JSON.stringify(h))),m&&(u+="-"+sn(JSON.stringify(m))),s.value=u,a=()=>{const x=o.value;let b="";for(const y in x)b+=`${y}: ${x[y]};`;xe(`.${u}`,b).mount({id:u,ssr:l}),a=void 0}};return td(()=>{d()}),{themeClass:s,onRender:()=>{a==null||a()}}}function aC(e,t,o){if(!t)return;const r=Hi(),n=be(()=>{const{value:s}=t;if(!s)return;const l=s[e];if(!!l)return l}),i=()=>{td(()=>{const{value:s}=o,l=`${s}${e}Rtl`;if(wm(l,r))return;const{value:a}=n;!a||a.style.mount({id:l,head:!0,anchorMetaName:cn,props:{bPrefix:s?`.${s}-`:void 0},ssr:r})})};return r?i():vi(i),n}function gn(e,t){return at({name:O1(e),setup(){var o;const r=(o=Le(zo,null))===null||o===void 0?void 0:o.mergedIconsRef;return()=>{var n;const i=(n=r==null?void 0:r.value)===null||n===void 0?void 0:n[e];return i?i():t}}})}const cC=gn("close",Z("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},Z("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Z("g",{fill:"currentColor","fill-rule":"nonzero"},Z("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),dC=gn("error",Z("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Z("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},Z("g",{"fill-rule":"nonzero"},Z("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),uC=gn("info",Z("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Z("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},Z("g",{"fill-rule":"nonzero"},Z("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),fC=gn("success",Z("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Z("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},Z("g",{"fill-rule":"nonzero"},Z("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),hC=gn("warning",Z("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Z("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},Z("g",{"fill-rule":"nonzero"},Z("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),uu=at({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const o=Pm();return()=>Z(Ei,{name:"icon-switch-transition",appear:o.value},t)}}),pC=at({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:t}){function o(l){e.width?l.style.maxWidth=`${l.offsetWidth}px`:l.style.maxHeight=`${l.offsetHeight}px`,l.offsetWidth}function r(l){e.width?l.style.maxWidth="0":l.style.maxHeight="0",l.offsetWidth;const{onLeave:a}=e;a&&a()}function n(l){e.width?l.style.maxWidth="":l.style.maxHeight="";const{onAfterLeave:a}=e;a&&a()}function i(l){if(l.style.transition="none",e.width){const a=l.offsetWidth;l.style.maxWidth="0",l.offsetWidth,l.style.transition="",l.style.maxWidth=`${a}px`}else if(e.reverse)l.style.maxHeight=`${l.offsetHeight}px`,l.offsetHeight,l.style.transition="",l.style.maxHeight="0";else{const a=l.offsetHeight;l.style.maxHeight="0",l.offsetWidth,l.style.transition="",l.style.maxHeight=`${a}px`}l.offsetWidth}function s(l){var a;e.width?l.style.maxWidth="":e.reverse||(l.style.maxHeight=""),(a=e.onAfterEnter)===null||a===void 0||a.call(e)}return()=>{const l=e.group?M0:Ei;return Z(l,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:i,onAfterEnter:s,onBeforeLeave:o,onLeave:r,onAfterLeave:n},t)}}}),gC=Mo("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[xe("svg",`
 height: 1em;
 width: 1em;
 `)]),fu=at({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){ml("-base-icon",gC,Qs(e,"clsPrefix"))},render(){return Z("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),mC=Mo("base-close",`
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
`,[It("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),xe("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),Hm("disabled",[xe("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),xe("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),xe("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),xe("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),xe("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),It("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),It("round",[xe("&::before",`
 border-radius: 50%;
 `)])]),bC=at({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return ml("-base-close",mC,Qs(e,"clsPrefix")),()=>{const{clsPrefix:t,disabled:o,absolute:r,round:n,isButtonTag:i}=e;return Z(i?"button":"div",{type:i?"button":void 0,tabindex:o||!e.focusable?-1:0,"aria-disabled":o,"aria-label":"close",role:i?void 0:"button",disabled:o,class:[`${t}-base-close`,r&&`${t}-base-close--absolute`,o&&`${t}-base-close--disabled`,n&&`${t}-base-close--round`],onMousedown:l=>{e.focusable||l.preventDefault()},onClick:e.onClick},Z(fu,{clsPrefix:t},{default:()=>Z(cC,null)}))}}}),{cubicBezierEaseInOut:xC}=pn;function Hs({originalTransform:e="",left:t=0,top:o=0,transition:r=`all .3s ${xC} !important`}={}){return[xe("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:t,top:o,opacity:0}),xe("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:o,opacity:1}),xe("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:o,transition:r})]}const CC=xe([xe("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),xe("@keyframes loading-layer-rotate",`
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
 `),xe("@keyframes loading-left-spin",`
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
 `),xe("@keyframes loading-right-spin",`
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
 `),Mo("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[Ze("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[Hs()]),Ze("container",`
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
 `,[Ze("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),Ze("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[Ze("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[Ze("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),Ze("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[Ze("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),Ze("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[Ze("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),Ze("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Hs({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),yC={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},vC=at({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},yC),setup(e){ml("-base-loading",CC,Qs(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:o,stroke:r,scale:n}=this,i=t/n;return Z("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},Z(uu,null,{default:()=>this.show?Z("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},Z("div",{class:`${e}-base-loading__container`},Z("div",{class:`${e}-base-loading__container-layer`},Z("div",{class:`${e}-base-loading__container-layer-left`},Z("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},Z("circle",{fill:"none",stroke:"currentColor","stroke-width":o,"stroke-linecap":"round",cx:i,cy:i,r:t-o/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),Z("div",{class:`${e}-base-loading__container-layer-patch`},Z("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},Z("circle",{fill:"none",stroke:"currentColor","stroke-width":o,"stroke-linecap":"round",cx:i,cy:i,r:t-o/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),Z("div",{class:`${e}-base-loading__container-layer-right`},Z("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},Z("circle",{fill:"none",stroke:"currentColor","stroke-width":o,"stroke-linecap":"round",cx:i,cy:i,r:t-o/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t})))))):Z("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),K={neutralBase:"#000",neutralInvertBase:"#fff",neutralTextBase:"#fff",neutralPopover:"rgb(72, 72, 78)",neutralCard:"rgb(24, 24, 28)",neutralModal:"rgb(44, 44, 50)",neutralBody:"rgb(16, 16, 20)",alpha1:"0.9",alpha2:"0.82",alpha3:"0.52",alpha4:"0.38",alpha5:"0.28",alphaClose:"0.52",alphaDisabled:"0.38",alphaDisabledInput:"0.06",alphaPending:"0.09",alphaTablePending:"0.06",alphaTableStriped:"0.05",alphaPressed:"0.05",alphaAvatar:"0.18",alphaRail:"0.2",alphaProgressRail:"0.12",alphaBorder:"0.24",alphaDivider:"0.09",alphaInput:"0.1",alphaAction:"0.06",alphaTab:"0.04",alphaScrollbar:"0.2",alphaScrollbarHover:"0.3",alphaCode:"0.12",alphaTag:"0.2",primaryHover:"#7fe7c4",primaryDefault:"#63e2b7",primaryActive:"#5acea7",primarySuppl:"rgb(42, 148, 125)",infoHover:"#8acbec",infoDefault:"#70c0e8",infoActive:"#66afd3",infoSuppl:"rgb(56, 137, 197)",errorHover:"#e98b8b",errorDefault:"#e88080",errorActive:"#e57272",errorSuppl:"rgb(208, 58, 82)",warningHover:"#f5d599",warningDefault:"#f2c97d",warningActive:"#e6c260",warningSuppl:"rgb(240, 138, 0)",successHover:"#7fe7c4",successDefault:"#63e2b7",successActive:"#5acea7",successSuppl:"rgb(42, 148, 125)"},wC=Ut(K.neutralBase),hu=Ut(K.neutralInvertBase),SC="rgba("+hu.slice(0,3).join(", ")+", ";function pe(e){return SC+String(e)+")"}function $C(e){const t=Array.from(hu);return t[3]=Number(e),G(wC,t)}const EC=Object.assign(Object.assign({name:"common"},pn),{baseColor:K.neutralBase,primaryColor:K.primaryDefault,primaryColorHover:K.primaryHover,primaryColorPressed:K.primaryActive,primaryColorSuppl:K.primarySuppl,infoColor:K.infoDefault,infoColorHover:K.infoHover,infoColorPressed:K.infoActive,infoColorSuppl:K.infoSuppl,successColor:K.successDefault,successColorHover:K.successHover,successColorPressed:K.successActive,successColorSuppl:K.successSuppl,warningColor:K.warningDefault,warningColorHover:K.warningHover,warningColorPressed:K.warningActive,warningColorSuppl:K.warningSuppl,errorColor:K.errorDefault,errorColorHover:K.errorHover,errorColorPressed:K.errorActive,errorColorSuppl:K.errorSuppl,textColorBase:K.neutralTextBase,textColor1:pe(K.alpha1),textColor2:pe(K.alpha2),textColor3:pe(K.alpha3),textColorDisabled:pe(K.alpha4),placeholderColor:pe(K.alpha4),placeholderColorDisabled:pe(K.alpha5),iconColor:pe(K.alpha4),iconColorDisabled:pe(K.alpha5),iconColorHover:pe(Number(K.alpha4)*1.25),iconColorPressed:pe(Number(K.alpha4)*.8),opacity1:K.alpha1,opacity2:K.alpha2,opacity3:K.alpha3,opacity4:K.alpha4,opacity5:K.alpha5,dividerColor:pe(K.alphaDivider),borderColor:pe(K.alphaBorder),closeIconColorHover:pe(Number(K.alphaClose)),closeIconColor:pe(Number(K.alphaClose)),closeIconColorPressed:pe(Number(K.alphaClose)),closeColorHover:"rgba(255, 255, 255, .12)",closeColorPressed:"rgba(255, 255, 255, .08)",clearColor:pe(K.alpha4),clearColorHover:Ae(pe(K.alpha4),{alpha:1.25}),clearColorPressed:Ae(pe(K.alpha4),{alpha:.8}),scrollbarColor:pe(K.alphaScrollbar),scrollbarColorHover:pe(K.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:pe(K.alphaProgressRail),railColor:pe(K.alphaRail),popoverColor:K.neutralPopover,tableColor:K.neutralCard,cardColor:K.neutralCard,modalColor:K.neutralModal,bodyColor:K.neutralBody,tagColor:$C(K.alphaTag),avatarColor:pe(K.alphaAvatar),invertedColor:K.neutralBase,inputColor:pe(K.alphaInput),codeColor:pe(K.alphaCode),tabColor:pe(K.alphaTab),actionColor:pe(K.alphaAction),tableHeaderColor:pe(K.alphaAction),hoverColor:pe(K.alphaPending),tableColorHover:pe(K.alphaTablePending),tableColorStriped:pe(K.alphaTableStriped),pressedColor:pe(K.alphaPressed),opacityDisabled:K.alphaDisabled,inputColorDisabled:pe(K.alphaDisabledInput),buttonColor2:"rgba(255, 255, 255, .08)",buttonColor2Hover:"rgba(255, 255, 255, .12)",buttonColor2Pressed:"rgba(255, 255, 255, .08)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),M=EC,ee={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},TC=Ut(ee.neutralBase),pu=Ut(ee.neutralInvertBase),HC="rgba("+pu.slice(0,3).join(", ")+", ";function Na(e){return HC+String(e)+")"}function je(e){const t=Array.from(pu);return t[3]=Number(e),G(TC,t)}const PC=Object.assign(Object.assign({name:"common"},pn),{baseColor:ee.neutralBase,primaryColor:ee.primaryDefault,primaryColorHover:ee.primaryHover,primaryColorPressed:ee.primaryActive,primaryColorSuppl:ee.primarySuppl,infoColor:ee.infoDefault,infoColorHover:ee.infoHover,infoColorPressed:ee.infoActive,infoColorSuppl:ee.infoSuppl,successColor:ee.successDefault,successColorHover:ee.successHover,successColorPressed:ee.successActive,successColorSuppl:ee.successSuppl,warningColor:ee.warningDefault,warningColorHover:ee.warningHover,warningColorPressed:ee.warningActive,warningColorSuppl:ee.warningSuppl,errorColor:ee.errorDefault,errorColorHover:ee.errorHover,errorColorPressed:ee.errorActive,errorColorSuppl:ee.errorSuppl,textColorBase:ee.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:je(ee.alpha4),placeholderColor:je(ee.alpha4),placeholderColorDisabled:je(ee.alpha5),iconColor:je(ee.alpha4),iconColorHover:Ae(je(ee.alpha4),{lightness:.75}),iconColorPressed:Ae(je(ee.alpha4),{lightness:.9}),iconColorDisabled:je(ee.alpha5),opacity1:ee.alpha1,opacity2:ee.alpha2,opacity3:ee.alpha3,opacity4:ee.alpha4,opacity5:ee.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:je(Number(ee.alphaClose)),closeIconColorHover:je(Number(ee.alphaClose)),closeIconColorPressed:je(Number(ee.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:je(ee.alpha4),clearColorHover:Ae(je(ee.alpha4),{lightness:.75}),clearColorPressed:Ae(je(ee.alpha4),{lightness:.9}),scrollbarColor:Na(ee.alphaScrollbar),scrollbarColorHover:Na(ee.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:je(ee.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:ee.neutralPopover,tableColor:ee.neutralCard,cardColor:ee.neutralCard,modalColor:ee.neutralModal,bodyColor:ee.neutralBody,tagColor:"#eee",avatarColor:je(ee.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:je(ee.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:ee.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),O=PC,IC={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},gu=e=>{const{textColorDisabled:t,iconColor:o,textColor2:r,fontSizeSmall:n,fontSizeMedium:i,fontSizeLarge:s,fontSizeHuge:l}=e;return Object.assign(Object.assign({},IC),{fontSizeSmall:n,fontSizeMedium:i,fontSizeLarge:s,fontSizeHuge:l,textColor:t,iconColor:o,extraTextColor:r})},_C={name:"Empty",common:O,self:gu},qt=_C,AC={name:"Empty",common:M,self:gu},Wo=AC,mu=e=>{const{scrollbarColor:t,scrollbarColorHover:o}=e;return{color:t,colorHover:o}},kC={name:"Scrollbar",common:O,self:mu},Xe=kC,LC={name:"Scrollbar",common:M,self:mu},Qe=LC,BC={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"},bu=e=>{const{borderRadius:t,popoverColor:o,textColor3:r,dividerColor:n,textColor2:i,primaryColorPressed:s,textColorDisabled:l,primaryColor:a,opacityDisabled:c,hoverColor:d,fontSizeSmall:u,fontSizeMedium:f,fontSizeLarge:p,fontSizeHuge:h,heightSmall:m,heightMedium:x,heightLarge:b,heightHuge:y}=e;return Object.assign(Object.assign({},BC),{optionFontSizeSmall:u,optionFontSizeMedium:f,optionFontSizeLarge:p,optionFontSizeHuge:h,optionHeightSmall:m,optionHeightMedium:x,optionHeightLarge:b,optionHeightHuge:y,borderRadius:t,color:o,groupHeaderTextColor:r,actionDividerColor:n,optionTextColor:i,optionTextColorPressed:s,optionTextColorDisabled:l,optionTextColorActive:a,optionOpacityDisabled:c,optionCheckColor:a,optionColorPending:d,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:d,actionTextColor:i,loadingColor:a})},DC={name:"InternalSelectMenu",common:O,peers:{Scrollbar:Xe,Empty:qt},self:bu},mn=DC,RC={name:"InternalSelectMenu",common:M,peers:{Scrollbar:Qe,Empty:Wo},self:bu},bn=RC,MC={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"},xu=e=>{const{boxShadow2:t,popoverColor:o,textColor2:r,borderRadius:n,fontSize:i,dividerColor:s}=e;return Object.assign(Object.assign({},MC),{fontSize:i,borderRadius:n,color:o,dividerColor:s,textColor:r,boxShadow:t})},OC={name:"Popover",common:O,self:xu},No=OC,zC={name:"Popover",common:M,self:xu},Uo=zC,Cu={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"},FC={name:"Tag",common:M,self(e){const{textColor2:t,primaryColorHover:o,primaryColorPressed:r,primaryColor:n,infoColor:i,successColor:s,warningColor:l,errorColor:a,baseColor:c,borderColor:d,tagColor:u,opacityDisabled:f,closeIconColor:p,closeIconColorHover:h,closeIconColorPressed:m,closeColorHover:x,closeColorPressed:b,borderRadiusSmall:y,fontSizeMini:S,fontSizeTiny:v,fontSizeSmall:E,fontSizeMedium:B,heightMini:j,heightTiny:P,heightSmall:D,heightMedium:I,buttonColor2Hover:L,buttonColor2Pressed:w,fontWeightStrong:q}=e;return Object.assign(Object.assign({},Cu),{closeBorderRadius:y,heightTiny:j,heightSmall:P,heightMedium:D,heightLarge:I,borderRadius:y,opacityDisabled:f,fontSizeTiny:S,fontSizeSmall:v,fontSizeMedium:E,fontSizeLarge:B,fontWeightStrong:q,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:L,colorPressedCheckable:w,colorChecked:n,colorCheckedHover:o,colorCheckedPressed:r,border:`1px solid ${d}`,textColor:t,color:u,colorBordered:"#0000",closeIconColor:p,closeIconColorHover:h,closeIconColorPressed:m,closeColorHover:x,closeColorPressed:b,borderPrimary:`1px solid ${H(n,{alpha:.3})}`,textColorPrimary:n,colorPrimary:H(n,{alpha:.16}),colorBorderedPrimary:"#0000",closeIconColorPrimary:Ae(n,{lightness:.7}),closeIconColorHoverPrimary:Ae(n,{lightness:.7}),closeIconColorPressedPrimary:Ae(n,{lightness:.7}),closeColorHoverPrimary:H(n,{alpha:.16}),closeColorPressedPrimary:H(n,{alpha:.12}),borderInfo:`1px solid ${H(i,{alpha:.3})}`,textColorInfo:i,colorInfo:H(i,{alpha:.16}),colorBorderedInfo:"#0000",closeIconColorInfo:Ae(i,{alpha:.7}),closeIconColorHoverInfo:Ae(i,{alpha:.7}),closeIconColorPressedInfo:Ae(i,{alpha:.7}),closeColorHoverInfo:H(i,{alpha:.16}),closeColorPressedInfo:H(i,{alpha:.12}),borderSuccess:`1px solid ${H(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:H(s,{alpha:.16}),colorBorderedSuccess:"#0000",closeIconColorSuccess:Ae(s,{alpha:.7}),closeIconColorHoverSuccess:Ae(s,{alpha:.7}),closeIconColorPressedSuccess:Ae(s,{alpha:.7}),closeColorHoverSuccess:H(s,{alpha:.16}),closeColorPressedSuccess:H(s,{alpha:.12}),borderWarning:`1px solid ${H(l,{alpha:.3})}`,textColorWarning:l,colorWarning:H(l,{alpha:.16}),colorBorderedWarning:"#0000",closeIconColorWarning:Ae(l,{alpha:.7}),closeIconColorHoverWarning:Ae(l,{alpha:.7}),closeIconColorPressedWarning:Ae(l,{alpha:.7}),closeColorHoverWarning:H(l,{alpha:.16}),closeColorPressedWarning:H(l,{alpha:.11}),borderError:`1px solid ${H(a,{alpha:.3})}`,textColorError:a,colorError:H(a,{alpha:.16}),colorBorderedError:"#0000",closeIconColorError:Ae(a,{alpha:.7}),closeIconColorHoverError:Ae(a,{alpha:.7}),closeIconColorPressedError:Ae(a,{alpha:.7}),closeColorHoverError:H(a,{alpha:.16}),closeColorPressedError:H(a,{alpha:.12})})}},yu=FC,jC=e=>{const{textColor2:t,primaryColorHover:o,primaryColorPressed:r,primaryColor:n,infoColor:i,successColor:s,warningColor:l,errorColor:a,baseColor:c,borderColor:d,opacityDisabled:u,tagColor:f,closeIconColor:p,closeIconColorHover:h,closeIconColorPressed:m,borderRadiusSmall:x,fontSizeMini:b,fontSizeTiny:y,fontSizeSmall:S,fontSizeMedium:v,heightMini:E,heightTiny:B,heightSmall:j,heightMedium:P,closeColorHover:D,closeColorPressed:I,buttonColor2Hover:L,buttonColor2Pressed:w,fontWeightStrong:q}=e;return Object.assign(Object.assign({},Cu),{closeBorderRadius:x,heightTiny:E,heightSmall:B,heightMedium:j,heightLarge:P,borderRadius:x,opacityDisabled:u,fontSizeTiny:b,fontSizeSmall:y,fontSizeMedium:S,fontSizeLarge:v,fontWeightStrong:q,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:L,colorPressedCheckable:w,colorChecked:n,colorCheckedHover:o,colorCheckedPressed:r,border:`1px solid ${d}`,textColor:t,color:f,colorBordered:"rgb(250, 250, 252)",closeIconColor:p,closeIconColorHover:h,closeIconColorPressed:m,closeColorHover:D,closeColorPressed:I,borderPrimary:`1px solid ${H(n,{alpha:.3})}`,textColorPrimary:n,colorPrimary:H(n,{alpha:.12}),colorBorderedPrimary:H(n,{alpha:.1}),closeIconColorPrimary:n,closeIconColorHoverPrimary:n,closeIconColorPressedPrimary:n,closeColorHoverPrimary:H(n,{alpha:.12}),closeColorPressedPrimary:H(n,{alpha:.18}),borderInfo:`1px solid ${H(i,{alpha:.3})}`,textColorInfo:i,colorInfo:H(i,{alpha:.12}),colorBorderedInfo:H(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:H(i,{alpha:.12}),closeColorPressedInfo:H(i,{alpha:.18}),borderSuccess:`1px solid ${H(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:H(s,{alpha:.12}),colorBorderedSuccess:H(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:H(s,{alpha:.12}),closeColorPressedSuccess:H(s,{alpha:.18}),borderWarning:`1px solid ${H(l,{alpha:.35})}`,textColorWarning:l,colorWarning:H(l,{alpha:.15}),colorBorderedWarning:H(l,{alpha:.12}),closeIconColorWarning:l,closeIconColorHoverWarning:l,closeIconColorPressedWarning:l,closeColorHoverWarning:H(l,{alpha:.12}),closeColorPressedWarning:H(l,{alpha:.18}),borderError:`1px solid ${H(a,{alpha:.23})}`,textColorError:a,colorError:H(a,{alpha:.1}),colorBorderedError:H(a,{alpha:.08}),closeIconColorError:a,closeIconColorHoverError:a,closeIconColorPressedError:a,closeColorHoverError:H(a,{alpha:.12}),closeColorPressedError:H(a,{alpha:.18})})},WC={name:"Tag",common:O,self:jC},vu=WC,wu={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},NC=e=>{const{borderRadius:t,textColor2:o,textColorDisabled:r,inputColor:n,inputColorDisabled:i,primaryColor:s,primaryColorHover:l,warningColor:a,warningColorHover:c,errorColor:d,errorColorHover:u,borderColor:f,iconColor:p,iconColorDisabled:h,clearColor:m,clearColorHover:x,clearColorPressed:b,placeholderColor:y,placeholderColorDisabled:S,fontSizeTiny:v,fontSizeSmall:E,fontSizeMedium:B,fontSizeLarge:j,heightTiny:P,heightSmall:D,heightMedium:I,heightLarge:L}=e;return Object.assign(Object.assign({},wu),{fontSizeTiny:v,fontSizeSmall:E,fontSizeMedium:B,fontSizeLarge:j,heightTiny:P,heightSmall:D,heightMedium:I,heightLarge:L,borderRadius:t,textColor:o,textColorDisabled:r,placeholderColor:y,placeholderColorDisabled:S,color:n,colorDisabled:i,colorActive:n,border:`1px solid ${f}`,borderHover:`1px solid ${l}`,borderActive:`1px solid ${s}`,borderFocus:`1px solid ${l}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${H(s,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${H(s,{alpha:.2})}`,caretColor:s,arrowColor:p,arrowColorDisabled:h,loadingColor:s,borderWarning:`1px solid ${a}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${a}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${H(a,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${H(a,{alpha:.2})}`,colorActiveWarning:n,caretColorWarning:a,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${u}`,borderActiveError:`1px solid ${d}`,borderFocusError:`1px solid ${u}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${H(d,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${H(d,{alpha:.2})}`,colorActiveError:n,caretColorError:d,clearColor:m,clearColorHover:x,clearColorPressed:b})},UC={name:"InternalSelection",common:O,peers:{Popover:No},self:NC},bl=UC,KC={name:"InternalSelection",common:M,peers:{Popover:Uo},self(e){const{borderRadius:t,textColor2:o,textColorDisabled:r,inputColor:n,inputColorDisabled:i,primaryColor:s,primaryColorHover:l,warningColor:a,warningColorHover:c,errorColor:d,errorColorHover:u,iconColor:f,iconColorDisabled:p,clearColor:h,clearColorHover:m,clearColorPressed:x,placeholderColor:b,placeholderColorDisabled:y,fontSizeTiny:S,fontSizeSmall:v,fontSizeMedium:E,fontSizeLarge:B,heightTiny:j,heightSmall:P,heightMedium:D,heightLarge:I}=e;return Object.assign(Object.assign({},wu),{fontSizeTiny:S,fontSizeSmall:v,fontSizeMedium:E,fontSizeLarge:B,heightTiny:j,heightSmall:P,heightMedium:D,heightLarge:I,borderRadius:t,textColor:o,textColorDisabled:r,placeholderColor:b,placeholderColorDisabled:y,color:n,colorDisabled:i,colorActive:H(s,{alpha:.1}),border:"1px solid #0000",borderHover:`1px solid ${l}`,borderActive:`1px solid ${s}`,borderFocus:`1px solid ${l}`,boxShadowHover:"none",boxShadowActive:`0 0 8px 0 ${H(s,{alpha:.4})}`,boxShadowFocus:`0 0 8px 0 ${H(s,{alpha:.4})}`,caretColor:s,arrowColor:f,arrowColorDisabled:p,loadingColor:s,borderWarning:`1px solid ${a}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${a}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 8px 0 ${H(a,{alpha:.4})}`,boxShadowFocusWarning:`0 0 8px 0 ${H(a,{alpha:.4})}`,colorActiveWarning:H(a,{alpha:.1}),caretColorWarning:a,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${u}`,borderActiveError:`1px solid ${d}`,borderFocusError:`1px solid ${u}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 8px 0 ${H(d,{alpha:.4})}`,boxShadowFocusError:`0 0 8px 0 ${H(d,{alpha:.4})}`,colorActiveError:H(d,{alpha:.1}),caretColorError:d,clearColor:h,clearColorHover:m,clearColorPressed:x})}},xl=KC,Su={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},VC={name:"Alert",common:M,self(e){const{lineHeight:t,borderRadius:o,fontWeightStrong:r,dividerColor:n,inputColor:i,textColor1:s,textColor2:l,closeColorHover:a,closeColorPressed:c,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:f,infoColorSuppl:p,successColorSuppl:h,warningColorSuppl:m,errorColorSuppl:x,fontSize:b}=e;return Object.assign(Object.assign({},Su),{fontSize:b,lineHeight:t,titleFontWeight:r,borderRadius:o,border:`1px solid ${n}`,color:i,titleTextColor:s,iconColor:l,contentTextColor:l,closeBorderRadius:o,closeColorHover:a,closeColorPressed:c,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:f,borderInfo:`1px solid ${H(p,{alpha:.35})}`,colorInfo:H(p,{alpha:.25}),titleTextColorInfo:s,iconColorInfo:p,contentTextColorInfo:l,closeColorHoverInfo:a,closeColorPressedInfo:c,closeIconColorInfo:d,closeIconColorHoverInfo:u,closeIconColorPressedInfo:f,borderSuccess:`1px solid ${H(h,{alpha:.35})}`,colorSuccess:H(h,{alpha:.25}),titleTextColorSuccess:s,iconColorSuccess:h,contentTextColorSuccess:l,closeColorHoverSuccess:a,closeColorPressedSuccess:c,closeIconColorSuccess:d,closeIconColorHoverSuccess:u,closeIconColorPressedSuccess:f,borderWarning:`1px solid ${H(m,{alpha:.35})}`,colorWarning:H(m,{alpha:.25}),titleTextColorWarning:s,iconColorWarning:m,contentTextColorWarning:l,closeColorHoverWarning:a,closeColorPressedWarning:c,closeIconColorWarning:d,closeIconColorHoverWarning:u,closeIconColorPressedWarning:f,borderError:`1px solid ${H(x,{alpha:.35})}`,colorError:H(x,{alpha:.25}),titleTextColorError:s,iconColorError:x,contentTextColorError:l,closeColorHoverError:a,closeColorPressedError:c,closeIconColorError:d,closeIconColorHoverError:u,closeIconColorPressedError:f})}},GC=VC,qC=e=>{const{lineHeight:t,borderRadius:o,fontWeightStrong:r,baseColor:n,dividerColor:i,actionColor:s,textColor1:l,textColor2:a,closeColorHover:c,closeColorPressed:d,closeIconColor:u,closeIconColorHover:f,closeIconColorPressed:p,infoColor:h,successColor:m,warningColor:x,errorColor:b,fontSize:y}=e;return Object.assign(Object.assign({},Su),{fontSize:y,lineHeight:t,titleFontWeight:r,borderRadius:o,border:`1px solid ${i}`,color:s,titleTextColor:l,iconColor:a,contentTextColor:a,closeBorderRadius:o,closeColorHover:c,closeColorPressed:d,closeIconColor:u,closeIconColorHover:f,closeIconColorPressed:p,borderInfo:`1px solid ${G(n,H(h,{alpha:.25}))}`,colorInfo:G(n,H(h,{alpha:.08})),titleTextColorInfo:l,iconColorInfo:h,contentTextColorInfo:a,closeColorHoverInfo:c,closeColorPressedInfo:d,closeIconColorInfo:u,closeIconColorHoverInfo:f,closeIconColorPressedInfo:p,borderSuccess:`1px solid ${G(n,H(m,{alpha:.25}))}`,colorSuccess:G(n,H(m,{alpha:.08})),titleTextColorSuccess:l,iconColorSuccess:m,contentTextColorSuccess:a,closeColorHoverSuccess:c,closeColorPressedSuccess:d,closeIconColorSuccess:u,closeIconColorHoverSuccess:f,closeIconColorPressedSuccess:p,borderWarning:`1px solid ${G(n,H(x,{alpha:.33}))}`,colorWarning:G(n,H(x,{alpha:.08})),titleTextColorWarning:l,iconColorWarning:x,contentTextColorWarning:a,closeColorHoverWarning:c,closeColorPressedWarning:d,closeIconColorWarning:u,closeIconColorHoverWarning:f,closeIconColorPressedWarning:p,borderError:`1px solid ${G(n,H(b,{alpha:.25}))}`,colorError:G(n,H(b,{alpha:.08})),titleTextColorError:l,iconColorError:b,contentTextColorError:a,closeColorHoverError:c,closeColorPressedError:d,closeIconColorError:u,closeIconColorHoverError:f,closeIconColorPressedError:p})},ZC={name:"Alert",common:O,self:qC},YC=ZC,{cubicBezierEaseInOut:Ht,cubicBezierEaseOut:XC,cubicBezierEaseIn:QC}=pn;function JC({overflow:e="hidden",duration:t=".3s",originalTransition:o="",leavingDelay:r="0s",foldPadding:n=!1,enterToProps:i=void 0,leaveToProps:s=void 0,reverse:l=!1}={}){const a=l?"leave":"enter",c=l?"enter":"leave";return[xe(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${a}-to`,Object.assign(Object.assign({},i),{opacity:1})),xe(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${a}-from`,Object.assign(Object.assign({},s),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:n?"0 !important":void 0,paddingBottom:n?"0 !important":void 0})),xe(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${Ht} ${r},
 opacity ${t} ${XC} ${r},
 margin-top ${t} ${Ht} ${r},
 margin-bottom ${t} ${Ht} ${r},
 padding-top ${t} ${Ht} ${r},
 padding-bottom ${t} ${Ht} ${r}
 ${o?","+o:""}
 `),xe(`&.fade-in-height-expand-transition-${a}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${Ht},
 opacity ${t} ${QC},
 margin-top ${t} ${Ht},
 margin-bottom ${t} ${Ht},
 padding-top ${t} ${Ht},
 padding-bottom ${t} ${Ht}
 ${o?","+o:""}
 `)]}const ey={linkFontSize:"13px",linkPadding:"0 0 0 16px",railWidth:"4px"},$u=e=>{const{borderRadius:t,railColor:o,primaryColor:r,primaryColorHover:n,primaryColorPressed:i,textColor2:s}=e;return Object.assign(Object.assign({},ey),{borderRadius:t,railColor:o,railColorActive:r,linkColor:H(r,{alpha:.15}),linkTextColor:s,linkTextColorHover:n,linkTextColorPressed:i,linkTextColorActive:r})},ty={name:"Anchor",common:O,self:$u},oy=ty,ry={name:"Anchor",common:M,self:$u},ny=ry,Eu={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"},iy={name:"Input",common:M,self(e){const{textColor2:t,textColor3:o,textColorDisabled:r,primaryColor:n,primaryColorHover:i,inputColor:s,inputColorDisabled:l,warningColor:a,warningColorHover:c,errorColor:d,errorColorHover:u,borderRadius:f,lineHeight:p,fontSizeTiny:h,fontSizeSmall:m,fontSizeMedium:x,fontSizeLarge:b,heightTiny:y,heightSmall:S,heightMedium:v,heightLarge:E,clearColor:B,clearColorHover:j,clearColorPressed:P,placeholderColor:D,placeholderColorDisabled:I,iconColor:L,iconColorDisabled:w,iconColorHover:q,iconColorPressed:oe}=e;return Object.assign(Object.assign({},Eu),{countTextColorDisabled:r,countTextColor:o,heightTiny:y,heightSmall:S,heightMedium:v,heightLarge:E,fontSizeTiny:h,fontSizeSmall:m,fontSizeMedium:x,fontSizeLarge:b,lineHeight:p,lineHeightTextarea:p,borderRadius:f,iconSize:"16px",groupLabelColor:s,textColor:t,textColorDisabled:r,textDecorationColor:t,groupLabelTextColor:t,caretColor:n,placeholderColor:D,placeholderColorDisabled:I,color:s,colorDisabled:l,colorFocus:H(n,{alpha:.1}),groupLabelBorder:"1px solid #0000",border:"1px solid #0000",borderHover:`1px solid ${i}`,borderDisabled:"1px solid #0000",borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 8px 0 ${H(n,{alpha:.3})}`,loadingColor:n,loadingColorWarning:a,borderWarning:`1px solid ${a}`,borderHoverWarning:`1px solid ${c}`,colorFocusWarning:H(a,{alpha:.1}),borderFocusWarning:`1px solid ${c}`,boxShadowFocusWarning:`0 0 8px 0 ${H(a,{alpha:.3})}`,caretColorWarning:a,loadingColorError:d,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${u}`,colorFocusError:H(d,{alpha:.1}),borderFocusError:`1px solid ${u}`,boxShadowFocusError:`0 0 8px 0 ${H(d,{alpha:.3})}`,caretColorError:d,clearColor:B,clearColorHover:j,clearColorPressed:P,iconColor:L,iconColorDisabled:w,iconColorHover:q,iconColorPressed:oe,suffixTextColor:t})}},gt=iy,sy=e=>{const{textColor2:t,textColor3:o,textColorDisabled:r,primaryColor:n,primaryColorHover:i,inputColor:s,inputColorDisabled:l,borderColor:a,warningColor:c,warningColorHover:d,errorColor:u,errorColorHover:f,borderRadius:p,lineHeight:h,fontSizeTiny:m,fontSizeSmall:x,fontSizeMedium:b,fontSizeLarge:y,heightTiny:S,heightSmall:v,heightMedium:E,heightLarge:B,actionColor:j,clearColor:P,clearColorHover:D,clearColorPressed:I,placeholderColor:L,placeholderColorDisabled:w,iconColor:q,iconColorDisabled:oe,iconColorHover:Ee,iconColorPressed:fe}=e;return Object.assign(Object.assign({},Eu),{countTextColorDisabled:r,countTextColor:o,heightTiny:S,heightSmall:v,heightMedium:E,heightLarge:B,fontSizeTiny:m,fontSizeSmall:x,fontSizeMedium:b,fontSizeLarge:y,lineHeight:h,lineHeightTextarea:h,borderRadius:p,iconSize:"16px",groupLabelColor:j,groupLabelTextColor:t,textColor:t,textColorDisabled:r,textDecorationColor:t,caretColor:n,placeholderColor:L,placeholderColorDisabled:w,color:s,colorDisabled:l,colorFocus:s,groupLabelBorder:`1px solid ${a}`,border:`1px solid ${a}`,borderHover:`1px solid ${i}`,borderDisabled:`1px solid ${a}`,borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 0 2px ${H(n,{alpha:.2})}`,loadingColor:n,loadingColorWarning:c,borderWarning:`1px solid ${c}`,borderHoverWarning:`1px solid ${d}`,colorFocusWarning:s,borderFocusWarning:`1px solid ${d}`,boxShadowFocusWarning:`0 0 0 2px ${H(c,{alpha:.2})}`,caretColorWarning:c,loadingColorError:u,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${f}`,colorFocusError:s,borderFocusError:`1px solid ${f}`,boxShadowFocusError:`0 0 0 2px ${H(u,{alpha:.2})}`,caretColorError:u,clearColor:P,clearColorHover:D,clearColorPressed:I,iconColor:q,iconColorDisabled:oe,iconColorHover:Ee,iconColorPressed:fe,suffixTextColor:t})},ly={name:"Input",common:O,self:sy},mt=ly;function Tu(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}const ay={name:"AutoComplete",common:O,peers:{InternalSelectMenu:mn,Input:mt},self:Tu},cy=ay,dy={name:"AutoComplete",common:M,peers:{InternalSelectMenu:bn,Input:gt},self:Tu},uy=dy,Hu=e=>{const{borderRadius:t,avatarColor:o,cardColor:r,fontSize:n,heightTiny:i,heightSmall:s,heightMedium:l,heightLarge:a,heightHuge:c,modalColor:d,popoverColor:u}=e;return{borderRadius:t,fontSize:n,border:`2px solid ${r}`,heightTiny:i,heightSmall:s,heightMedium:l,heightLarge:a,heightHuge:c,color:G(r,o),colorModal:G(d,o),colorPopover:G(u,o)}},fy={name:"Avatar",common:O,self:Hu},Pu=fy,hy={name:"Avatar",common:M,self:Hu},Iu=hy,_u=()=>({gap:"-12px"}),py={name:"AvatarGroup",common:O,peers:{Avatar:Pu},self:_u},gy=py,my={name:"AvatarGroup",common:M,peers:{Avatar:Iu},self:_u},by=my,Au={width:"44px",height:"44px",borderRadius:"22px",iconSize:"26px"},xy={name:"BackTop",common:M,self(e){const{popoverColor:t,textColor2:o,primaryColorHover:r,primaryColorPressed:n}=e;return Object.assign(Object.assign({},Au),{color:t,textColor:o,iconColor:o,iconColorHover:r,iconColorPressed:n,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})}},Cy=xy,yy=e=>{const{popoverColor:t,textColor2:o,primaryColorHover:r,primaryColorPressed:n}=e;return Object.assign(Object.assign({},Au),{color:t,textColor:o,iconColor:o,iconColorHover:r,iconColorPressed:n,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},vy={name:"BackTop",common:O,self:yy},wy=vy,Sy={name:"Badge",common:M,self(e){const{errorColorSuppl:t,infoColorSuppl:o,successColorSuppl:r,warningColorSuppl:n,fontFamily:i}=e;return{color:t,colorInfo:o,colorSuccess:r,colorError:t,colorWarning:n,fontSize:"12px",fontFamily:i}}},$y=Sy,Ey=e=>{const{errorColor:t,infoColor:o,successColor:r,warningColor:n,fontFamily:i}=e;return{color:t,colorInfo:o,colorSuccess:r,colorError:t,colorWarning:n,fontSize:"12px",fontFamily:i}},Ty={name:"Badge",common:O,self:Ey},Hy=Ty,Py={fontWeightActive:"400"},ku=e=>{const{fontSize:t,textColor3:o,textColor2:r,borderRadius:n,buttonColor2Hover:i,buttonColor2Pressed:s}=e;return Object.assign(Object.assign({},Py),{fontSize:t,itemLineHeight:"1.25",itemTextColor:o,itemTextColorHover:r,itemTextColorPressed:r,itemTextColorActive:r,itemBorderRadius:n,itemColorHover:i,itemColorPressed:s,separatorColor:o})},Iy={name:"Breadcrumb",common:O,self:ku},_y=Iy,Ay={name:"Breadcrumb",common:M,self:ku},ky=Ay,Ly={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},Lu=e=>{const{heightTiny:t,heightSmall:o,heightMedium:r,heightLarge:n,borderRadius:i,fontSizeTiny:s,fontSizeSmall:l,fontSizeMedium:a,fontSizeLarge:c,opacityDisabled:d,textColor2:u,textColor3:f,primaryColorHover:p,primaryColorPressed:h,borderColor:m,primaryColor:x,baseColor:b,infoColor:y,infoColorHover:S,infoColorPressed:v,successColor:E,successColorHover:B,successColorPressed:j,warningColor:P,warningColorHover:D,warningColorPressed:I,errorColor:L,errorColorHover:w,errorColorPressed:q,fontWeight:oe,buttonColor2:Ee,buttonColor2Hover:fe,buttonColor2Pressed:ge,fontWeightStrong:me}=e;return Object.assign(Object.assign({},Ly),{heightTiny:t,heightSmall:o,heightMedium:r,heightLarge:n,borderRadiusTiny:i,borderRadiusSmall:i,borderRadiusMedium:i,borderRadiusLarge:i,fontSizeTiny:s,fontSizeSmall:l,fontSizeMedium:a,fontSizeLarge:c,opacityDisabled:d,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:Ee,colorSecondaryHover:fe,colorSecondaryPressed:ge,colorTertiary:Ee,colorTertiaryHover:fe,colorTertiaryPressed:ge,colorQuaternary:"#0000",colorQuaternaryHover:fe,colorQuaternaryPressed:ge,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:u,textColorTertiary:f,textColorHover:p,textColorPressed:h,textColorFocus:p,textColorDisabled:u,textColorText:u,textColorTextHover:p,textColorTextPressed:h,textColorTextFocus:p,textColorTextDisabled:u,textColorGhost:u,textColorGhostHover:p,textColorGhostPressed:h,textColorGhostFocus:p,textColorGhostDisabled:u,border:`1px solid ${m}`,borderHover:`1px solid ${p}`,borderPressed:`1px solid ${h}`,borderFocus:`1px solid ${p}`,borderDisabled:`1px solid ${m}`,rippleColor:x,colorPrimary:x,colorHoverPrimary:p,colorPressedPrimary:h,colorFocusPrimary:p,colorDisabledPrimary:x,textColorPrimary:b,textColorHoverPrimary:b,textColorPressedPrimary:b,textColorFocusPrimary:b,textColorDisabledPrimary:b,textColorTextPrimary:x,textColorTextHoverPrimary:p,textColorTextPressedPrimary:h,textColorTextFocusPrimary:p,textColorTextDisabledPrimary:u,textColorGhostPrimary:x,textColorGhostHoverPrimary:p,textColorGhostPressedPrimary:h,textColorGhostFocusPrimary:p,textColorGhostDisabledPrimary:x,borderPrimary:`1px solid ${x}`,borderHoverPrimary:`1px solid ${p}`,borderPressedPrimary:`1px solid ${h}`,borderFocusPrimary:`1px solid ${p}`,borderDisabledPrimary:`1px solid ${x}`,rippleColorPrimary:x,colorInfo:y,colorHoverInfo:S,colorPressedInfo:v,colorFocusInfo:S,colorDisabledInfo:y,textColorInfo:b,textColorHoverInfo:b,textColorPressedInfo:b,textColorFocusInfo:b,textColorDisabledInfo:b,textColorTextInfo:y,textColorTextHoverInfo:S,textColorTextPressedInfo:v,textColorTextFocusInfo:S,textColorTextDisabledInfo:u,textColorGhostInfo:y,textColorGhostHoverInfo:S,textColorGhostPressedInfo:v,textColorGhostFocusInfo:S,textColorGhostDisabledInfo:y,borderInfo:`1px solid ${y}`,borderHoverInfo:`1px solid ${S}`,borderPressedInfo:`1px solid ${v}`,borderFocusInfo:`1px solid ${S}`,borderDisabledInfo:`1px solid ${y}`,rippleColorInfo:y,colorSuccess:E,colorHoverSuccess:B,colorPressedSuccess:j,colorFocusSuccess:B,colorDisabledSuccess:E,textColorSuccess:b,textColorHoverSuccess:b,textColorPressedSuccess:b,textColorFocusSuccess:b,textColorDisabledSuccess:b,textColorTextSuccess:E,textColorTextHoverSuccess:B,textColorTextPressedSuccess:j,textColorTextFocusSuccess:B,textColorTextDisabledSuccess:u,textColorGhostSuccess:E,textColorGhostHoverSuccess:B,textColorGhostPressedSuccess:j,textColorGhostFocusSuccess:B,textColorGhostDisabledSuccess:E,borderSuccess:`1px solid ${E}`,borderHoverSuccess:`1px solid ${B}`,borderPressedSuccess:`1px solid ${j}`,borderFocusSuccess:`1px solid ${B}`,borderDisabledSuccess:`1px solid ${E}`,rippleColorSuccess:E,colorWarning:P,colorHoverWarning:D,colorPressedWarning:I,colorFocusWarning:D,colorDisabledWarning:P,textColorWarning:b,textColorHoverWarning:b,textColorPressedWarning:b,textColorFocusWarning:b,textColorDisabledWarning:b,textColorTextWarning:P,textColorTextHoverWarning:D,textColorTextPressedWarning:I,textColorTextFocusWarning:D,textColorTextDisabledWarning:u,textColorGhostWarning:P,textColorGhostHoverWarning:D,textColorGhostPressedWarning:I,textColorGhostFocusWarning:D,textColorGhostDisabledWarning:P,borderWarning:`1px solid ${P}`,borderHoverWarning:`1px solid ${D}`,borderPressedWarning:`1px solid ${I}`,borderFocusWarning:`1px solid ${D}`,borderDisabledWarning:`1px solid ${P}`,rippleColorWarning:P,colorError:L,colorHoverError:w,colorPressedError:q,colorFocusError:w,colorDisabledError:L,textColorError:b,textColorHoverError:b,textColorPressedError:b,textColorFocusError:b,textColorDisabledError:b,textColorTextError:L,textColorTextHoverError:w,textColorTextPressedError:q,textColorTextFocusError:w,textColorTextDisabledError:u,textColorGhostError:L,textColorGhostHoverError:w,textColorGhostPressedError:q,textColorGhostFocusError:w,textColorGhostDisabledError:L,borderError:`1px solid ${L}`,borderHoverError:`1px solid ${w}`,borderPressedError:`1px solid ${q}`,borderFocusError:`1px solid ${w}`,borderDisabledError:`1px solid ${L}`,rippleColorError:L,waveOpacity:"0.6",fontWeight:oe,fontWeightStrong:me})},By={name:"Button",common:O,self:Lu},Je=By,Dy={name:"Button",common:M,self(e){const t=Lu(e);return t.waveOpacity="0.8",t.colorOpacitySecondary="0.16",t.colorOpacitySecondaryHover="0.2",t.colorOpacitySecondaryPressed="0.12",t}},et=Dy,Ry={titleFontSize:"22px"},Bu=e=>{const{borderRadius:t,fontSize:o,lineHeight:r,textColor2:n,textColor1:i,textColorDisabled:s,dividerColor:l,fontWeightStrong:a,primaryColor:c,baseColor:d,hoverColor:u,cardColor:f,modalColor:p,popoverColor:h}=e;return Object.assign(Object.assign({},Ry),{borderRadius:t,borderColor:G(f,l),borderColorModal:G(p,l),borderColorPopover:G(h,l),textColor:n,titleFontWeight:a,titleTextColor:i,dayTextColor:s,fontSize:o,lineHeight:r,dateColorCurrent:c,dateTextColorCurrent:d,cellColorHover:G(f,u),cellColorHoverModal:G(p,u),cellColorHoverPopover:G(h,u),cellColor:f,cellColorModal:p,cellColorPopover:h,barColor:c})},My={name:"Calendar",common:O,peers:{Button:Je},self:Bu},Oy=My,zy={name:"Calendar",common:M,peers:{Button:et},self:Bu},Fy=zy,Du=e=>{const{fontSize:t,boxShadow2:o,popoverColor:r,textColor2:n,borderRadius:i,borderColor:s,heightSmall:l,heightMedium:a,heightLarge:c,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:f,dividerColor:p}=e;return{panelFontSize:t,boxShadow:o,color:r,textColor:n,borderRadius:i,border:`1px solid ${s}`,heightSmall:l,heightMedium:a,heightLarge:c,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:f,dividerColor:p}},jy={name:"ColorPicker",common:O,peers:{Input:mt,Button:Je},self:Du},Wy=jy,Ny={name:"ColorPicker",common:M,peers:{Input:gt,Button:et},self:Du},Uy=Ny,Ky={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},Ru=e=>{const{primaryColor:t,borderRadius:o,lineHeight:r,fontSize:n,cardColor:i,textColor2:s,textColor1:l,dividerColor:a,fontWeightStrong:c,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:f,closeColorHover:p,closeColorPressed:h,modalColor:m,boxShadow1:x,popoverColor:b,actionColor:y}=e;return Object.assign(Object.assign({},Ky),{lineHeight:r,color:i,colorModal:m,colorPopover:b,colorTarget:t,colorEmbedded:y,colorEmbeddedModal:y,colorEmbeddedPopover:y,textColor:s,titleTextColor:l,borderColor:a,actionColor:y,titleFontWeight:c,closeColorHover:p,closeColorPressed:h,closeBorderRadius:o,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:f,fontSizeSmall:n,fontSizeMedium:n,fontSizeLarge:n,fontSizeHuge:n,boxShadow:x,borderRadius:o})},Vy={name:"Card",common:O,self:Ru},Mu=Vy,Gy={name:"Card",common:M,self(e){const t=Ru(e),{cardColor:o,modalColor:r,popoverColor:n}=e;return t.colorEmbedded=o,t.colorEmbeddedModal=r,t.colorEmbeddedPopover=n,t}},Ou=Gy,zu=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),qy={name:"Carousel",common:O,self:zu},Zy=qy,Yy={name:"Carousel",common:M,self:zu},Xy=Yy,Qy={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},Fu=e=>{const{baseColor:t,inputColorDisabled:o,cardColor:r,modalColor:n,popoverColor:i,textColorDisabled:s,borderColor:l,primaryColor:a,textColor2:c,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:f,borderRadiusSmall:p,lineHeight:h}=e;return Object.assign(Object.assign({},Qy),{labelLineHeight:h,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:f,borderRadius:p,color:t,colorChecked:a,colorDisabled:o,colorDisabledChecked:o,colorTableHeader:r,colorTableHeaderModal:n,colorTableHeaderPopover:i,checkMarkColor:t,checkMarkColorDisabled:s,checkMarkColorDisabledChecked:s,border:`1px solid ${l}`,borderDisabled:`1px solid ${l}`,borderDisabledChecked:`1px solid ${l}`,borderChecked:`1px solid ${a}`,borderFocus:`1px solid ${a}`,boxShadowFocus:`0 0 0 2px ${H(a,{alpha:.3})}`,textColor:c,textColorDisabled:s})},Jy={name:"Checkbox",common:O,self:Fu},Pr=Jy,ev={name:"Checkbox",common:M,self(e){const{cardColor:t}=e,o=Fu(e);return o.color="#0000",o.checkMarkColor=t,o}},Ir=ev,ju=e=>{const{borderRadius:t,boxShadow2:o,popoverColor:r,textColor2:n,textColor3:i,primaryColor:s,textColorDisabled:l,dividerColor:a,hoverColor:c,fontSizeMedium:d,heightMedium:u}=e;return{menuBorderRadius:t,menuColor:r,menuBoxShadow:o,menuDividerColor:a,menuHeight:"calc(var(--n-option-height) * 6.6)",optionArrowColor:i,optionHeight:u,optionFontSize:d,optionColorHover:c,optionTextColor:n,optionTextColorActive:s,optionTextColorDisabled:l,optionCheckMarkColor:s,loadingColor:s,columnWidth:"180px"}},tv={name:"Cascader",common:O,peers:{InternalSelectMenu:mn,InternalSelection:bl,Scrollbar:Xe,Checkbox:Pr,Empty:qt},self:ju},ov=tv,rv={name:"Cascader",common:M,peers:{InternalSelectMenu:bn,InternalSelection:xl,Scrollbar:Qe,Checkbox:Ir,Empty:qt},self:ju},nv=rv,iv={name:"Code",common:M,self(e){const{textColor2:t,fontSize:o,fontWeightStrong:r,textColor3:n}=e;return{textColor:t,fontSize:o,fontWeightStrong:r,"mono-3":"#5c6370","hue-1":"#56b6c2","hue-2":"#61aeee","hue-3":"#c678dd","hue-4":"#98c379","hue-5":"#e06c75","hue-5-2":"#be5046","hue-6":"#d19a66","hue-6-2":"#e6c07b",lineNumberTextColor:n}}},Wu=iv,sv=e=>{const{textColor2:t,fontSize:o,fontWeightStrong:r,textColor3:n}=e;return{textColor:t,fontSize:o,fontWeightStrong:r,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:n}},lv={name:"Code",common:O,self:sv},Nu=lv,Uu=e=>{const{fontWeight:t,textColor1:o,textColor2:r,textColorDisabled:n,dividerColor:i,fontSize:s}=e;return{titleFontSize:s,titleFontWeight:t,dividerColor:i,titleTextColor:o,titleTextColorDisabled:n,fontSize:s,textColor:r,arrowColor:r,arrowColorDisabled:n,itemMargin:"16px 0 0 0"}},av={name:"Collapse",common:O,self:Uu},cv=av,dv={name:"Collapse",common:M,self:Uu},uv=dv,Ku=e=>{const{cubicBezierEaseInOut:t}=e;return{bezier:t}},fv={name:"CollapseTransition",common:O,self:Ku},hv=fv,pv={name:"CollapseTransition",common:M,self:Ku},gv=pv,mv={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(nm("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},bv=at({name:"ConfigProvider",alias:["App"],props:mv,setup(e){const t=Le(zo,null),o=be(()=>{const{theme:h}=e;if(h===null)return;const m=t==null?void 0:t.mergedThemeRef.value;return h===void 0?m:m===void 0?h:Object.assign({},m,h)}),r=be(()=>{const{themeOverrides:h}=e;if(h!==null){if(h===void 0)return t==null?void 0:t.mergedThemeOverridesRef.value;{const m=t==null?void 0:t.mergedThemeOverridesRef.value;return m===void 0?h:Fr({},m,h)}}}),n=Ha(()=>{const{namespace:h}=e;return h===void 0?t==null?void 0:t.mergedNamespaceRef.value:h}),i=Ha(()=>{const{bordered:h}=e;return h===void 0?t==null?void 0:t.mergedBorderedRef.value:h}),s=be(()=>{const{icons:h}=e;return h===void 0?t==null?void 0:t.mergedIconsRef.value:h}),l=be(()=>{const{componentOptions:h}=e;return h!==void 0?h:t==null?void 0:t.mergedComponentPropsRef.value}),a=be(()=>{const{clsPrefix:h}=e;return h!==void 0?h:t==null?void 0:t.mergedClsPrefixRef.value}),c=be(()=>{var h;const{rtl:m}=e;if(m===void 0)return t==null?void 0:t.mergedRtlRef.value;const x={};for(const b of m)x[b.name]=Zn(b),(h=b.peers)===null||h===void 0||h.forEach(y=>{y.name in x||(x[y.name]=Zn(y))});return x}),d=be(()=>e.breakpoints||(t==null?void 0:t.mergedBreakpointsRef.value)),u=e.inlineThemeDisabled||(t==null?void 0:t.inlineThemeDisabled),f=e.preflightStyleDisabled||(t==null?void 0:t.preflightStyleDisabled),p=be(()=>{const{value:h}=o,{value:m}=r,x=m&&Object.keys(m).length!==0,b=h==null?void 0:h.name;return b?x?`${b}-${sn(JSON.stringify(r.value))}`:b:x?sn(JSON.stringify(r.value)):""});return Do(zo,{mergedThemeHashRef:p,mergedBreakpointsRef:d,mergedRtlRef:c,mergedIconsRef:s,mergedComponentPropsRef:l,mergedBorderedRef:i,mergedNamespaceRef:n,mergedClsPrefixRef:a,mergedLocaleRef:be(()=>{const{locale:h}=e;if(h!==null)return h===void 0?t==null?void 0:t.mergedLocaleRef.value:h}),mergedDateLocaleRef:be(()=>{const{dateLocale:h}=e;if(h!==null)return h===void 0?t==null?void 0:t.mergedDateLocaleRef.value:h}),mergedHljsRef:be(()=>{const{hljs:h}=e;return h===void 0?t==null?void 0:t.mergedHljsRef.value:h}),mergedKatexRef:be(()=>{const{katex:h}=e;return h===void 0?t==null?void 0:t.mergedKatexRef.value:h}),mergedThemeRef:o,mergedThemeOverridesRef:r,inlineThemeDisabled:u||!1,preflightStyleDisabled:f||!1}),{mergedClsPrefix:a,mergedBordered:i,mergedNamespace:n,mergedTheme:o,mergedThemeOverrides:r}},render(){var e,t,o,r;return this.abstract?(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o):Z(this.as||this.tag,{class:`${this.mergedClsPrefix||cu}-config-provider`},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),xv={name:"Popselect",common:M,peers:{Popover:Uo,InternalSelectMenu:bn}},Vu=xv;function Cv(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}const yv={name:"Popselect",common:O,peers:{Popover:No,InternalSelectMenu:mn},self:Cv},Gu=yv;function qu(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}const vv={name:"Select",common:O,peers:{InternalSelection:bl,InternalSelectMenu:mn},self:qu},Zu=vv,wv={name:"Select",common:M,peers:{InternalSelection:xl,InternalSelectMenu:bn},self:qu},Yu=wv,Sv={itemPaddingSmall:"0 4px",itemMarginSmall:"0 0 0 8px",itemMarginSmallRtl:"0 8px 0 0",itemPaddingMedium:"0 4px",itemMarginMedium:"0 0 0 8px",itemMarginMediumRtl:"0 8px 0 0",itemPaddingLarge:"0 4px",itemMarginLarge:"0 0 0 8px",itemMarginLargeRtl:"0 8px 0 0",buttonIconSizeSmall:"14px",buttonIconSizeMedium:"16px",buttonIconSizeLarge:"18px",inputWidthSmall:"60px",selectWidthSmall:"unset",inputMarginSmall:"0 0 0 8px",inputMarginSmallRtl:"0 8px 0 0",selectMarginSmall:"0 0 0 8px",prefixMarginSmall:"0 8px 0 0",suffixMarginSmall:"0 0 0 8px",inputWidthMedium:"60px",selectWidthMedium:"unset",inputMarginMedium:"0 0 0 8px",inputMarginMediumRtl:"0 8px 0 0",selectMarginMedium:"0 0 0 8px",prefixMarginMedium:"0 8px 0 0",suffixMarginMedium:"0 0 0 8px",inputWidthLarge:"60px",selectWidthLarge:"unset",inputMarginLarge:"0 0 0 8px",inputMarginLargeRtl:"0 8px 0 0",selectMarginLarge:"0 0 0 8px",prefixMarginLarge:"0 8px 0 0",suffixMarginLarge:"0 0 0 8px"},Xu=e=>{const{textColor2:t,primaryColor:o,primaryColorHover:r,primaryColorPressed:n,inputColorDisabled:i,textColorDisabled:s,borderColor:l,borderRadius:a,fontSizeTiny:c,fontSizeSmall:d,fontSizeMedium:u,heightTiny:f,heightSmall:p,heightMedium:h}=e;return Object.assign(Object.assign({},Sv),{buttonColor:"#0000",buttonColorHover:"#0000",buttonColorPressed:"#0000",buttonBorder:`1px solid ${l}`,buttonBorderHover:`1px solid ${l}`,buttonBorderPressed:`1px solid ${l}`,buttonIconColor:t,buttonIconColorHover:t,buttonIconColorPressed:t,itemTextColor:t,itemTextColorHover:r,itemTextColorPressed:n,itemTextColorActive:o,itemTextColorDisabled:s,itemColor:"#0000",itemColorHover:"#0000",itemColorPressed:"#0000",itemColorActive:"#0000",itemColorActiveHover:"#0000",itemColorDisabled:i,itemBorder:"1px solid #0000",itemBorderHover:"1px solid #0000",itemBorderPressed:"1px solid #0000",itemBorderActive:`1px solid ${o}`,itemBorderDisabled:`1px solid ${l}`,itemBorderRadius:a,itemSizeSmall:f,itemSizeMedium:p,itemSizeLarge:h,itemFontSizeSmall:c,itemFontSizeMedium:d,itemFontSizeLarge:u,jumperFontSizeSmall:c,jumperFontSizeMedium:d,jumperFontSizeLarge:u,jumperTextColor:t,jumperTextColorDisabled:s})},$v={name:"Pagination",common:O,peers:{Select:Zu,Input:mt,Popselect:Gu},self:Xu},Qu=$v,Ev={name:"Pagination",common:M,peers:{Select:Yu,Input:gt,Popselect:Vu},self(e){const{primaryColor:t,opacity3:o}=e,r=H(t,{alpha:Number(o)}),n=Xu(e);return n.itemBorderActive=`1px solid ${r}`,n.itemBorderDisabled="1px solid #0000",n}},Ju=Ev,ef={padding:"8px 14px"},Tv={name:"Tooltip",common:M,peers:{Popover:Uo},self(e){const{borderRadius:t,boxShadow2:o,popoverColor:r,textColor2:n}=e;return Object.assign(Object.assign({},ef),{borderRadius:t,boxShadow:o,color:r,textColor:n})}},Ai=Tv,Hv=e=>{const{borderRadius:t,boxShadow2:o,baseColor:r}=e;return Object.assign(Object.assign({},ef),{borderRadius:t,boxShadow:o,color:G(r,"rgba(0, 0, 0, .85)"),textColor:r})},Pv={name:"Tooltip",common:O,peers:{Popover:No},self:Hv},ki=Pv,Iv={name:"Ellipsis",common:M,peers:{Tooltip:Ai}},tf=Iv,_v={name:"Ellipsis",common:O,peers:{Tooltip:ki}},of=_v,rf={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},Av={name:"Radio",common:M,self(e){const{borderColor:t,primaryColor:o,baseColor:r,textColorDisabled:n,inputColorDisabled:i,textColor2:s,opacityDisabled:l,borderRadius:a,fontSizeSmall:c,fontSizeMedium:d,fontSizeLarge:u,heightSmall:f,heightMedium:p,heightLarge:h,lineHeight:m}=e;return Object.assign(Object.assign({},rf),{labelLineHeight:m,buttonHeightSmall:f,buttonHeightMedium:p,buttonHeightLarge:h,fontSizeSmall:c,fontSizeMedium:d,fontSizeLarge:u,boxShadow:`inset 0 0 0 1px ${t}`,boxShadowActive:`inset 0 0 0 1px ${o}`,boxShadowFocus:`inset 0 0 0 1px ${o}, 0 0 0 2px ${H(o,{alpha:.3})}`,boxShadowHover:`inset 0 0 0 1px ${o}`,boxShadowDisabled:`inset 0 0 0 1px ${t}`,color:"#0000",colorDisabled:i,colorActive:"#0000",textColor:s,textColorDisabled:n,dotColorActive:o,dotColorDisabled:t,buttonBorderColor:t,buttonBorderColorActive:o,buttonBorderColorHover:o,buttonColor:"#0000",buttonColorActive:o,buttonTextColor:s,buttonTextColorActive:r,buttonTextColorHover:o,opacityDisabled:l,buttonBoxShadowFocus:`inset 0 0 0 1px ${o}, 0 0 0 2px ${H(o,{alpha:.3})}`,buttonBoxShadowHover:`inset 0 0 0 1px ${o}`,buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:a})}},nf=Av,kv=e=>{const{borderColor:t,primaryColor:o,baseColor:r,textColorDisabled:n,inputColorDisabled:i,textColor2:s,opacityDisabled:l,borderRadius:a,fontSizeSmall:c,fontSizeMedium:d,fontSizeLarge:u,heightSmall:f,heightMedium:p,heightLarge:h,lineHeight:m}=e;return Object.assign(Object.assign({},rf),{labelLineHeight:m,buttonHeightSmall:f,buttonHeightMedium:p,buttonHeightLarge:h,fontSizeSmall:c,fontSizeMedium:d,fontSizeLarge:u,boxShadow:`inset 0 0 0 1px ${t}`,boxShadowActive:`inset 0 0 0 1px ${o}`,boxShadowFocus:`inset 0 0 0 1px ${o}, 0 0 0 2px ${H(o,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${o}`,boxShadowDisabled:`inset 0 0 0 1px ${t}`,color:r,colorDisabled:i,colorActive:"#0000",textColor:s,textColorDisabled:n,dotColorActive:o,dotColorDisabled:t,buttonBorderColor:t,buttonBorderColorActive:o,buttonBorderColorHover:t,buttonColor:r,buttonColorActive:r,buttonTextColor:s,buttonTextColorActive:o,buttonTextColorHover:o,opacityDisabled:l,buttonBoxShadowFocus:`inset 0 0 0 1px ${o}, 0 0 0 2px ${H(o,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:a})},Lv={name:"Radio",common:O,self:kv},sf=Lv,Bv={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},lf=e=>{const{primaryColor:t,textColor2:o,dividerColor:r,hoverColor:n,popoverColor:i,invertedColor:s,borderRadius:l,fontSizeSmall:a,fontSizeMedium:c,fontSizeLarge:d,fontSizeHuge:u,heightSmall:f,heightMedium:p,heightLarge:h,heightHuge:m,textColor3:x,opacityDisabled:b}=e;return Object.assign(Object.assign({},Bv),{optionHeightSmall:f,optionHeightMedium:p,optionHeightLarge:h,optionHeightHuge:m,borderRadius:l,fontSizeSmall:a,fontSizeMedium:c,fontSizeLarge:d,fontSizeHuge:u,optionTextColor:o,optionTextColorHover:o,optionTextColorActive:t,optionTextColorChildActive:t,color:i,dividerColor:r,suffixColor:o,prefixColor:o,optionColorHover:n,optionColorActive:H(t,{alpha:.1}),groupHeaderTextColor:x,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:s,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:b})},Dv={name:"Dropdown",common:O,peers:{Popover:No},self:lf},Cl=Dv,Rv={name:"Dropdown",common:M,peers:{Popover:Uo},self(e){const{primaryColorSuppl:t,primaryColor:o,popoverColor:r}=e,n=lf(e);return n.colorInverted=r,n.optionColorActive=H(o,{alpha:.15}),n.optionColorActiveInverted=t,n.optionColorHoverInverted=t,n}},yl=Rv,Mv={thPaddingSmall:"8px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"8px",tdPaddingMedium:"12px",tdPaddingLarge:"12px",sorterSize:"15px",resizableContainerSize:"8px",resizableSize:"2px",filterSize:"15px",paginationMargin:"12px 0 0 0",emptyPadding:"48px 0",actionPadding:"8px 12px",actionButtonMargin:"0 8px 0 0"},af=e=>{const{cardColor:t,modalColor:o,popoverColor:r,textColor2:n,textColor1:i,tableHeaderColor:s,tableColorHover:l,iconColor:a,primaryColor:c,fontWeightStrong:d,borderRadius:u,lineHeight:f,fontSizeSmall:p,fontSizeMedium:h,fontSizeLarge:m,dividerColor:x,heightSmall:b,opacityDisabled:y,tableColorStriped:S}=e;return Object.assign(Object.assign({},Mv),{actionDividerColor:x,lineHeight:f,borderRadius:u,fontSizeSmall:p,fontSizeMedium:h,fontSizeLarge:m,borderColor:G(t,x),tdColorHover:G(t,l),tdColorStriped:G(t,S),thColor:G(t,s),thColorHover:G(G(t,s),l),tdColor:t,tdTextColor:n,thTextColor:i,thFontWeight:d,thButtonColorHover:l,thIconColor:a,thIconColorActive:c,borderColorModal:G(o,x),tdColorHoverModal:G(o,l),tdColorStripedModal:G(o,S),thColorModal:G(o,s),thColorHoverModal:G(G(o,s),l),tdColorModal:o,borderColorPopover:G(r,x),tdColorHoverPopover:G(r,l),tdColorStripedPopover:G(r,S),thColorPopover:G(r,s),thColorHoverPopover:G(G(r,s),l),tdColorPopover:r,boxShadowBefore:"inset -12px 0 8px -12px rgba(0, 0, 0, .18)",boxShadowAfter:"inset 12px 0 8px -12px rgba(0, 0, 0, .18)",loadingColor:c,loadingSize:b,opacityLoading:y})},Ov={name:"DataTable",common:O,peers:{Button:Je,Checkbox:Pr,Radio:sf,Pagination:Qu,Scrollbar:Xe,Empty:qt,Popover:No,Ellipsis:of,Dropdown:Cl},self:af},zv=Ov,Fv={name:"DataTable",common:M,peers:{Button:et,Checkbox:Ir,Radio:nf,Pagination:Ju,Scrollbar:Qe,Empty:Wo,Popover:Uo,Ellipsis:tf,Dropdown:yl},self(e){const t=af(e);return t.boxShadowAfter="inset 12px 0 8px -12px rgba(0, 0, 0, .36)",t.boxShadowBefore="inset -12px 0 8px -12px rgba(0, 0, 0, .36)",t}},jv=Fv,cf=e=>{const{textColorBase:t,opacity1:o,opacity2:r,opacity3:n,opacity4:i,opacity5:s}=e;return{color:t,opacity1Depth:o,opacity2Depth:r,opacity3Depth:n,opacity4Depth:i,opacity5Depth:s}},Wv={name:"Icon",common:O,self:cf},Nv=Wv,Uv={name:"Icon",common:M,self:cf},Kv=Uv,Vv={itemFontSize:"12px",itemHeight:"36px",itemWidth:"52px",panelActionPadding:"8px 0"},df=e=>{const{popoverColor:t,textColor2:o,primaryColor:r,hoverColor:n,dividerColor:i,opacityDisabled:s,boxShadow2:l,borderRadius:a,iconColor:c,iconColorDisabled:d}=e;return Object.assign(Object.assign({},Vv),{panelColor:t,panelBoxShadow:l,panelDividerColor:i,itemTextColor:o,itemTextColorActive:r,itemColorHover:n,itemOpacityDisabled:s,itemBorderRadius:a,borderRadius:a,iconColor:c,iconColorDisabled:d})},Gv={name:"TimePicker",common:O,peers:{Scrollbar:Xe,Button:Je,Input:mt},self:df},uf=Gv,qv={name:"TimePicker",common:M,peers:{Scrollbar:Qe,Button:et,Input:gt},self:df},ff=qv,Zv={itemSize:"24px",itemCellWidth:"38px",itemCellHeight:"32px",scrollItemWidth:"80px",scrollItemHeight:"40px",panelExtraFooterPadding:"8px 12px",panelActionPadding:"8px 12px",calendarTitlePadding:"0",calendarTitleHeight:"28px",arrowSize:"14px",panelHeaderPadding:"8px 12px",calendarDaysHeight:"32px",calendarTitleGridTempateColumns:"28px 28px 1fr 28px 28px",calendarLeftPaddingDate:"6px 12px 4px 12px",calendarLeftPaddingDatetime:"4px 12px",calendarLeftPaddingDaterange:"6px 12px 4px 12px",calendarLeftPaddingDatetimerange:"4px 12px",calendarLeftPaddingMonth:"0",calendarLeftPaddingYear:"0",calendarLeftPaddingQuarter:"0",calendarLeftPaddingMonthrange:"0",calendarLeftPaddingQuarterrange:"0",calendarLeftPaddingYearrange:"0",calendarRightPaddingDate:"6px 12px 4px 12px",calendarRightPaddingDatetime:"4px 12px",calendarRightPaddingDaterange:"6px 12px 4px 12px",calendarRightPaddingDatetimerange:"4px 12px",calendarRightPaddingMonth:"0",calendarRightPaddingYear:"0",calendarRightPaddingQuarter:"0",calendarRightPaddingMonthrange:"0",calendarRightPaddingQuarterrange:"0",calendarRightPaddingYearrange:"0"},hf=e=>{const{hoverColor:t,fontSize:o,textColor2:r,textColorDisabled:n,popoverColor:i,primaryColor:s,borderRadiusSmall:l,iconColor:a,iconColorDisabled:c,textColor1:d,dividerColor:u,boxShadow2:f,borderRadius:p,fontWeightStrong:h}=e;return Object.assign(Object.assign({},Zv),{itemFontSize:o,calendarDaysFontSize:o,calendarTitleFontSize:o,itemTextColor:r,itemTextColorDisabled:n,itemTextColorActive:i,itemTextColorCurrent:s,itemColorIncluded:H(s,{alpha:.1}),itemColorHover:t,itemColorDisabled:t,itemColorActive:s,itemBorderRadius:l,panelColor:i,panelTextColor:r,arrowColor:a,calendarTitleTextColor:d,calendarTitleColorHover:t,calendarDaysTextColor:r,panelHeaderDividerColor:u,calendarDaysDividerColor:u,calendarDividerColor:u,panelActionDividerColor:u,panelBoxShadow:f,panelBorderRadius:p,calendarTitleFontWeight:h,scrollItemBorderRadius:p,iconColor:a,iconColorDisabled:c})},Yv={name:"DatePicker",common:O,peers:{Input:mt,Button:Je,TimePicker:uf,Scrollbar:Xe},self:hf},Xv=Yv,Qv={name:"DatePicker",common:M,peers:{Input:gt,Button:et,TimePicker:ff,Scrollbar:Qe},self(e){const{popoverColor:t,hoverColor:o,primaryColor:r}=e,n=hf(e);return n.itemColorDisabled=G(t,o),n.itemColorIncluded=H(r,{alpha:.15}),n.itemColorHover=G(t,o),n}},Jv=Qv;function e2(e){var t=e.default;if(typeof t=="function"){var o=function(){return t.apply(this,arguments)};o.prototype=t.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(o,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}),o}const t2={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"},pf=e=>{const{tableHeaderColor:t,textColor2:o,textColor1:r,cardColor:n,modalColor:i,popoverColor:s,dividerColor:l,borderRadius:a,fontWeightStrong:c,lineHeight:d,fontSizeSmall:u,fontSizeMedium:f,fontSizeLarge:p}=e;return Object.assign(Object.assign({},t2),{lineHeight:d,fontSizeSmall:u,fontSizeMedium:f,fontSizeLarge:p,titleTextColor:r,thColor:G(n,t),thColorModal:G(i,t),thColorPopover:G(s,t),thTextColor:r,thFontWeight:c,tdTextColor:o,tdColor:n,tdColorModal:i,tdColorPopover:s,borderColor:G(n,l),borderColorModal:G(i,l),borderColorPopover:G(s,l),borderRadius:a})},o2={name:"Descriptions",common:O,self:pf},r2=o2,n2={name:"Descriptions",common:M,self:pf},i2=n2,s2={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"},gf=e=>{const{textColor1:t,textColor2:o,modalColor:r,closeIconColor:n,closeIconColorHover:i,closeIconColorPressed:s,closeColorHover:l,closeColorPressed:a,infoColor:c,successColor:d,warningColor:u,errorColor:f,primaryColor:p,dividerColor:h,borderRadius:m,fontWeightStrong:x,lineHeight:b,fontSize:y}=e;return Object.assign(Object.assign({},s2),{fontSize:y,lineHeight:b,border:`1px solid ${h}`,titleTextColor:t,textColor:o,color:r,closeColorHover:l,closeColorPressed:a,closeIconColor:n,closeIconColorHover:i,closeIconColorPressed:s,closeBorderRadius:m,iconColor:p,iconColorInfo:c,iconColorSuccess:d,iconColorWarning:u,iconColorError:f,borderRadius:m,titleFontWeight:x})},l2={name:"Dialog",common:O,peers:{Button:Je},self:gf},mf=l2,a2={name:"Dialog",common:M,peers:{Button:et},self:gf},bf=a2,xf=e=>{const{modalColor:t,textColor2:o,boxShadow3:r}=e;return{color:t,textColor:o,boxShadow:r}},c2={name:"Modal",common:O,peers:{Scrollbar:Xe,Dialog:mf,Card:Mu},self:xf},d2=c2,u2={name:"Modal",common:M,peers:{Scrollbar:Qe,Dialog:bf,Card:Ou},self:xf},f2=u2,Cf=e=>{const{textColor1:t,dividerColor:o,fontWeightStrong:r}=e;return{textColor:t,color:o,fontWeight:r}},h2={name:"Divider",common:O,self:Cf},p2=h2,g2={name:"Divider",common:M,self:Cf},m2=g2,yf=e=>{const{modalColor:t,textColor1:o,textColor2:r,boxShadow3:n,lineHeight:i,fontWeightStrong:s,dividerColor:l,closeColorHover:a,closeColorPressed:c,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:f,borderRadius:p,primaryColorHover:h}=e;return{bodyPadding:"16px 24px",headerPadding:"16px 24px",footerPadding:"16px 24px",color:t,textColor:r,titleTextColor:o,titleFontSize:"18px",titleFontWeight:s,boxShadow:n,lineHeight:i,headerBorderBottom:`1px solid ${l}`,footerBorderTop:`1px solid ${l}`,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:f,closeSize:"22px",closeIconSize:"18px",closeColorHover:a,closeColorPressed:c,closeBorderRadius:p,resizableTriggerColorHover:h}},b2={name:"Drawer",common:O,peers:{Scrollbar:Xe},self:yf},x2=b2,C2={name:"Drawer",common:M,peers:{Scrollbar:Qe},self:yf},y2=C2,vf={actionMargin:"0 0 0 20px",actionMarginRtl:"0 20px 0 0"},v2={name:"DynamicInput",common:M,peers:{Input:gt,Button:et},self(){return vf}},w2=v2,S2=()=>vf,$2={name:"DynamicInput",common:O,peers:{Input:mt,Button:Je},self:S2},E2=$2,wf={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},T2={name:"Space",self(){return wf}},Sf=T2,H2=()=>wf,P2={name:"Space",self:H2},$f=P2,I2={name:"DynamicTags",common:M,peers:{Input:gt,Button:et,Tag:yu,Space:Sf},self(){return{inputWidth:"64px"}}},_2=I2,A2={name:"DynamicTags",common:O,peers:{Input:mt,Button:Je,Tag:vu,Space:$f},self(){return{inputWidth:"64px"}}},k2=A2,L2={name:"Element",common:M},B2=L2,D2={name:"Element",common:O},R2=D2,M2={feedbackPadding:"4px 0 0 2px",feedbackHeightSmall:"24px",feedbackHeightMedium:"24px",feedbackHeightLarge:"26px",feedbackFontSizeSmall:"13px",feedbackFontSizeMedium:"14px",feedbackFontSizeLarge:"14px",labelFontSizeLeftSmall:"14px",labelFontSizeLeftMedium:"14px",labelFontSizeLeftLarge:"15px",labelFontSizeTopSmall:"13px",labelFontSizeTopMedium:"14px",labelFontSizeTopLarge:"14px",labelHeightSmall:"24px",labelHeightMedium:"26px",labelHeightLarge:"28px",labelPaddingVertical:"0 0 6px 2px",labelPaddingHorizontal:"0 12px 0 0",labelTextAlignVertical:"left",labelTextAlignHorizontal:"right",labelFontWeight:"400"},Ef=e=>{const{heightSmall:t,heightMedium:o,heightLarge:r,textColor1:n,errorColor:i,warningColor:s,lineHeight:l,textColor3:a}=e;return Object.assign(Object.assign({},M2),{blankHeightSmall:t,blankHeightMedium:o,blankHeightLarge:r,lineHeight:l,labelTextColor:n,asteriskColor:i,feedbackTextColorError:i,feedbackTextColorWarning:s,feedbackTextColor:a})},O2={name:"Form",common:O,self:Ef},z2=O2,F2={name:"Form",common:M,self:Ef},j2=F2,W2={name:"GradientText",common:M,self(e){const{primaryColor:t,successColor:o,warningColor:r,errorColor:n,infoColor:i,primaryColorSuppl:s,successColorSuppl:l,warningColorSuppl:a,errorColorSuppl:c,infoColorSuppl:d,fontWeightStrong:u}=e;return{fontWeight:u,rotate:"252deg",colorStartPrimary:t,colorEndPrimary:s,colorStartInfo:i,colorEndInfo:d,colorStartWarning:r,colorEndWarning:a,colorStartError:n,colorEndError:c,colorStartSuccess:o,colorEndSuccess:l}}},N2=W2,U2=e=>{const{primaryColor:t,successColor:o,warningColor:r,errorColor:n,infoColor:i,fontWeightStrong:s}=e;return{fontWeight:s,rotate:"252deg",colorStartPrimary:H(t,{alpha:.6}),colorEndPrimary:t,colorStartInfo:H(i,{alpha:.6}),colorEndInfo:i,colorStartWarning:H(r,{alpha:.6}),colorEndWarning:r,colorStartError:H(n,{alpha:.6}),colorEndError:n,colorStartSuccess:H(o,{alpha:.6}),colorEndSuccess:o}},K2={name:"GradientText",common:O,self:U2},V2=K2,Tf=e=>{const{primaryColor:t,baseColor:o}=e;return{color:t,iconColor:o}},G2={name:"IconWrapper",common:O,self:Tf},q2=G2,Z2={name:"IconWrapper",common:M,self:Tf},Y2=Z2;function X2(){return{toolbarIconColor:"rgba(255, 255, 255, .9)",toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}const Q2={name:"Image",common:O,peers:{Tooltip:ki},self:X2},J2={closeMargin:"16px 12px",closeSize:"20px",closeIconSize:"16px",width:"365px",padding:"16px",titleFontSize:"16px",metaFontSize:"12px",descriptionFontSize:"12px"},Hf=e=>{const{textColor2:t,successColor:o,infoColor:r,warningColor:n,errorColor:i,popoverColor:s,closeIconColor:l,closeIconColorHover:a,closeIconColorPressed:c,closeColorHover:d,closeColorPressed:u,textColor1:f,textColor3:p,borderRadius:h,fontWeightStrong:m,boxShadow2:x,lineHeight:b,fontSize:y}=e;return Object.assign(Object.assign({},J2),{borderRadius:h,lineHeight:b,fontSize:y,headerFontWeight:m,iconColor:t,iconColorSuccess:o,iconColorInfo:r,iconColorWarning:n,iconColorError:i,color:s,textColor:t,closeIconColor:l,closeIconColorHover:a,closeIconColorPressed:c,closeBorderRadius:h,closeColorHover:d,closeColorPressed:u,headerTextColor:f,descriptionTextColor:p,actionTextColor:t,boxShadow:x})},ew={name:"Notification",common:O,peers:{Scrollbar:Xe},self:Hf},tw=ew,ow={name:"Notification",common:M,peers:{Scrollbar:Qe},self:Hf},rw=ow,nw={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"},Pf=e=>{const{textColor2:t,closeIconColor:o,closeIconColorHover:r,closeIconColorPressed:n,infoColor:i,successColor:s,errorColor:l,warningColor:a,popoverColor:c,boxShadow2:d,primaryColor:u,lineHeight:f,borderRadius:p,closeColorHover:h,closeColorPressed:m}=e;return Object.assign(Object.assign({},nw),{closeBorderRadius:p,textColor:t,textColorInfo:t,textColorSuccess:t,textColorError:t,textColorWarning:t,textColorLoading:t,color:c,colorInfo:c,colorSuccess:c,colorError:c,colorWarning:c,colorLoading:c,boxShadow:d,boxShadowInfo:d,boxShadowSuccess:d,boxShadowError:d,boxShadowWarning:d,boxShadowLoading:d,iconColor:t,iconColorInfo:i,iconColorSuccess:s,iconColorWarning:a,iconColorError:l,iconColorLoading:u,closeColorHover:h,closeColorPressed:m,closeIconColor:o,closeIconColorHover:r,closeIconColorPressed:n,closeColorHoverInfo:h,closeColorPressedInfo:m,closeIconColorInfo:o,closeIconColorHoverInfo:r,closeIconColorPressedInfo:n,closeColorHoverSuccess:h,closeColorPressedSuccess:m,closeIconColorSuccess:o,closeIconColorHoverSuccess:r,closeIconColorPressedSuccess:n,closeColorHoverError:h,closeColorPressedError:m,closeIconColorError:o,closeIconColorHoverError:r,closeIconColorPressedError:n,closeColorHoverWarning:h,closeColorPressedWarning:m,closeIconColorWarning:o,closeIconColorHoverWarning:r,closeIconColorPressedWarning:n,closeColorHoverLoading:h,closeColorPressedLoading:m,closeIconColorLoading:o,closeIconColorHoverLoading:r,closeIconColorPressedLoading:n,loadingColor:u,lineHeight:f,borderRadius:p})},iw={name:"Message",common:O,self:Pf},If=iw,sw={name:"Message",common:M,self:Pf},lw=sw,aw={name:"ButtonGroup",common:M},cw=aw,dw={name:"ButtonGroup",common:O},uw=dw,fw={name:"InputNumber",common:M,peers:{Button:et,Input:gt},self(e){const{textColorDisabled:t}=e;return{iconColorDisabled:t}}},hw=fw,pw=e=>{const{textColorDisabled:t}=e;return{iconColorDisabled:t}},gw={name:"InputNumber",common:O,peers:{Button:Je,Input:mt},self:pw},mw=gw,bw={name:"Layout",common:M,peers:{Scrollbar:Qe},self(e){const{textColor2:t,bodyColor:o,popoverColor:r,cardColor:n,dividerColor:i,scrollbarColor:s,scrollbarColorHover:l}=e;return{textColor:t,textColorInverted:t,color:o,colorEmbedded:o,headerColor:n,headerColorInverted:n,footerColor:n,footerColorInverted:n,headerBorderColor:i,headerBorderColorInverted:i,footerBorderColor:i,footerBorderColorInverted:i,siderBorderColor:i,siderBorderColorInverted:i,siderColor:n,siderColorInverted:n,siderToggleButtonBorder:"1px solid transparent",siderToggleButtonColor:r,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:G(o,s),siderToggleBarColorHover:G(o,l),__invertScrollbar:"false"}}},xw=bw,Cw=e=>{const{baseColor:t,textColor2:o,bodyColor:r,cardColor:n,dividerColor:i,actionColor:s,scrollbarColor:l,scrollbarColorHover:a,invertedColor:c}=e;return{textColor:o,textColorInverted:"#FFF",color:r,colorEmbedded:s,headerColor:n,headerColorInverted:c,footerColor:s,footerColorInverted:c,headerBorderColor:i,headerBorderColorInverted:c,footerBorderColor:i,footerBorderColorInverted:c,siderBorderColor:i,siderBorderColorInverted:c,siderColor:n,siderColorInverted:c,siderToggleButtonBorder:`1px solid ${i}`,siderToggleButtonColor:t,siderToggleButtonIconColor:o,siderToggleButtonIconColorInverted:o,siderToggleBarColor:G(r,l),siderToggleBarColorHover:G(r,a),__invertScrollbar:"true"}},yw={name:"Layout",common:O,peers:{Scrollbar:Xe},self:Cw},vw=yw,_f=e=>{const{textColor2:t,cardColor:o,modalColor:r,popoverColor:n,dividerColor:i,borderRadius:s,fontSize:l,hoverColor:a}=e;return{textColor:t,color:o,colorHover:a,colorModal:r,colorHoverModal:G(r,a),colorPopover:n,colorHoverPopover:G(n,a),borderColor:i,borderColorModal:G(r,i),borderColorPopover:G(n,i),borderRadius:s,fontSize:l}},ww={name:"List",common:O,self:_f},Sw=ww,$w={name:"List",common:M,self:_f},Ew=$w,Tw={name:"LoadingBar",common:M,self(e){const{primaryColor:t}=e;return{colorError:"red",colorLoading:t,height:"2px"}}},Hw=Tw,Pw=e=>{const{primaryColor:t,errorColor:o}=e;return{colorError:o,colorLoading:t,height:"2px"}},Iw={name:"LoadingBar",common:O,self:Pw},_w=Iw,Aw={name:"Log",common:M,peers:{Scrollbar:Qe,Code:Wu},self(e){const{textColor2:t,inputColor:o,fontSize:r,primaryColor:n}=e;return{loaderFontSize:r,loaderTextColor:t,loaderColor:o,loaderBorder:"1px solid #0000",loadingColor:n}}},kw=Aw,Lw=e=>{const{textColor2:t,modalColor:o,borderColor:r,fontSize:n,primaryColor:i}=e;return{loaderFontSize:n,loaderTextColor:t,loaderColor:o,loaderBorder:`1px solid ${r}`,loadingColor:i}},Bw={name:"Log",common:O,peers:{Scrollbar:Xe,Code:Nu},self:Lw},Dw=Bw,Rw={name:"Mention",common:M,peers:{InternalSelectMenu:bn,Input:gt},self(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}},Mw=Rw,Ow=e=>{const{boxShadow2:t}=e;return{menuBoxShadow:t}},zw={name:"Mention",common:O,peers:{InternalSelectMenu:mn,Input:mt},self:Ow},Fw=zw;function jw(e,t,o,r){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:o,itemTextColorChildActiveInverted:o,itemTextColorChildActiveHoverInverted:o,itemTextColorActiveInverted:o,itemTextColorActiveHoverInverted:o,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:o,itemTextColorChildActiveHorizontalInverted:o,itemTextColorChildActiveHoverHorizontalInverted:o,itemTextColorActiveHorizontalInverted:o,itemTextColorActiveHoverHorizontalInverted:o,itemIconColorInverted:e,itemIconColorHoverInverted:o,itemIconColorActiveInverted:o,itemIconColorActiveHoverInverted:o,itemIconColorChildActiveInverted:o,itemIconColorChildActiveHoverInverted:o,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:o,itemIconColorActiveHorizontalInverted:o,itemIconColorActiveHoverHorizontalInverted:o,itemIconColorChildActiveHorizontalInverted:o,itemIconColorChildActiveHoverHorizontalInverted:o,arrowColorInverted:e,arrowColorHoverInverted:o,arrowColorActiveInverted:o,arrowColorActiveHoverInverted:o,arrowColorChildActiveInverted:o,arrowColorChildActiveHoverInverted:o,groupTextColorInverted:r}}const Af=e=>{const{borderRadius:t,textColor3:o,primaryColor:r,textColor2:n,textColor1:i,fontSize:s,dividerColor:l,hoverColor:a,primaryColorHover:c}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:o,itemColorHover:a,itemColorActive:H(r,{alpha:.1}),itemColorActiveHover:H(r,{alpha:.1}),itemColorActiveCollapsed:H(r,{alpha:.1}),itemTextColor:n,itemTextColorHover:n,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:n,itemTextColorHoverHorizontal:c,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:c,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:n,arrowColorHover:n,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:s,dividerColor:l},jw("#BBB",r,"#FFF","#AAA"))},Ww={name:"Menu",common:O,peers:{Tooltip:ki,Dropdown:Cl},self:Af},Nw=Ww,Uw={name:"Menu",common:M,peers:{Tooltip:Ai,Dropdown:yl},self(e){const{primaryColor:t,primaryColorSuppl:o}=e,r=Af(e);return r.itemColorActive=H(t,{alpha:.15}),r.itemColorActiveHover=H(t,{alpha:.15}),r.itemColorActiveCollapsed=H(t,{alpha:.15}),r.itemColorActiveInverted=o,r.itemColorActiveHoverInverted=o,r.itemColorActiveCollapsedInverted=o,r}},Kw=Uw,Vw={titleFontSize:"18px",backSize:"22px"};function kf(e){const{textColor1:t,textColor2:o,textColor3:r,fontSize:n,fontWeightStrong:i,primaryColorHover:s,primaryColorPressed:l}=e;return Object.assign(Object.assign({},Vw),{titleFontWeight:i,fontSize:n,titleTextColor:t,backColor:o,backColorHover:s,backColorPressed:l,subtitleTextColor:r})}const Gw={name:"PageHeader",common:O,self:kf},qw={name:"PageHeader",common:M,self:kf},Zw={iconSize:"22px"},Lf=e=>{const{fontSize:t,warningColor:o}=e;return Object.assign(Object.assign({},Zw),{fontSize:t,iconColor:o})},Yw={name:"Popconfirm",common:O,peers:{Button:Je,Popover:No},self:Lf},Xw=Yw,Qw={name:"Popconfirm",common:M,peers:{Button:et,Popover:Uo},self:Lf},Jw=Qw,Bf=e=>{const{infoColor:t,successColor:o,warningColor:r,errorColor:n,textColor2:i,progressRailColor:s,fontSize:l,fontWeight:a}=e;return{fontSize:l,fontSizeCircle:"28px",fontWeightCircle:a,railColor:s,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:t,iconColorInfo:t,iconColorSuccess:o,iconColorWarning:r,iconColorError:n,textColorCircle:i,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:i,fillColor:t,fillColorInfo:t,fillColorSuccess:o,fillColorWarning:r,fillColorError:n,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}},eS={name:"Progress",common:O,self:Bf},Df=eS,tS={name:"Progress",common:M,self(e){const t=Bf(e);return t.textColorLineInner="rgb(0, 0, 0)",t.lineBgProcessing="linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)",t}},Rf=tS,oS={name:"Rate",common:M,self(e){const{railColor:t}=e;return{itemColor:t,itemColorActive:"#CCAA33",itemSize:"20px",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}},rS=oS,nS=e=>{const{railColor:t}=e;return{itemColor:t,itemColorActive:"#FFCC33",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}},iS={name:"Rate",common:O,self:nS},sS=iS,lS={titleFontSizeSmall:"26px",titleFontSizeMedium:"32px",titleFontSizeLarge:"40px",titleFontSizeHuge:"48px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",iconSizeSmall:"64px",iconSizeMedium:"80px",iconSizeLarge:"100px",iconSizeHuge:"125px",iconColor418:void 0,iconColor404:void 0,iconColor403:void 0,iconColor500:void 0},Mf=e=>{const{textColor2:t,textColor1:o,errorColor:r,successColor:n,infoColor:i,warningColor:s,lineHeight:l,fontWeightStrong:a}=e;return Object.assign(Object.assign({},lS),{lineHeight:l,titleFontWeight:a,titleTextColor:o,textColor:t,iconColorError:r,iconColorSuccess:n,iconColorInfo:i,iconColorWarning:s})},aS={name:"Result",common:O,self:Mf},cS=aS,dS={name:"Result",common:M,self:Mf},uS=dS,Of={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"},fS={name:"Slider",common:M,self(e){const t="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:o,modalColor:r,primaryColorSuppl:n,popoverColor:i,textColor2:s,cardColor:l,borderRadius:a,fontSize:c,opacityDisabled:d}=e;return Object.assign(Object.assign({},Of),{fontSize:c,markFontSize:c,railColor:o,railColorHover:o,fillColor:n,fillColorHover:n,opacityDisabled:d,handleColor:"#FFF",dotColor:l,dotColorModal:r,dotColorPopover:i,handleBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowHover:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowActive:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowFocus:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",indicatorColor:i,indicatorBoxShadow:t,indicatorTextColor:s,indicatorBorderRadius:a,dotBorder:`2px solid ${o}`,dotBorderActive:`2px solid ${n}`,dotBoxShadow:""})}},hS=fS,pS=e=>{const t="rgba(0, 0, 0, .85)",o="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:r,primaryColor:n,baseColor:i,cardColor:s,modalColor:l,popoverColor:a,borderRadius:c,fontSize:d,opacityDisabled:u}=e;return Object.assign(Object.assign({},Of),{fontSize:d,markFontSize:d,railColor:r,railColorHover:r,fillColor:n,fillColorHover:n,opacityDisabled:u,handleColor:"#FFF",dotColor:s,dotColorModal:l,dotColorPopover:a,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:t,indicatorBoxShadow:o,indicatorTextColor:i,indicatorBorderRadius:c,dotBorder:`2px solid ${r}`,dotBorderActive:`2px solid ${n}`,dotBoxShadow:""})},gS={name:"Slider",common:O,self:pS},mS=gS,zf=e=>{const{opacityDisabled:t,heightTiny:o,heightSmall:r,heightMedium:n,heightLarge:i,heightHuge:s,primaryColor:l,fontSize:a}=e;return{fontSize:a,textColor:l,sizeTiny:o,sizeSmall:r,sizeMedium:n,sizeLarge:i,sizeHuge:s,color:l,opacitySpinning:t}},bS={name:"Spin",common:O,self:zf},xS=bS,CS={name:"Spin",common:M,self:zf},yS=CS,Ff=e=>{const{textColor2:t,textColor3:o,fontSize:r,fontWeight:n}=e;return{labelFontSize:r,labelFontWeight:n,valueFontWeight:n,valueFontSize:"24px",labelTextColor:o,valuePrefixTextColor:t,valueSuffixTextColor:t,valueTextColor:t}},vS={name:"Statistic",common:O,self:Ff},wS=vS,SS={name:"Statistic",common:M,self:Ff},$S=SS,ES={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"},jf=e=>{const{fontWeightStrong:t,baseColor:o,textColorDisabled:r,primaryColor:n,errorColor:i,textColor1:s,textColor2:l}=e;return Object.assign(Object.assign({},ES),{stepHeaderFontWeight:t,indicatorTextColorProcess:o,indicatorTextColorWait:r,indicatorTextColorFinish:n,indicatorTextColorError:i,indicatorBorderColorProcess:n,indicatorBorderColorWait:r,indicatorBorderColorFinish:n,indicatorBorderColorError:i,indicatorColorProcess:n,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:r,splitorColorWait:r,splitorColorFinish:n,splitorColorError:r,headerTextColorProcess:s,headerTextColorWait:r,headerTextColorFinish:r,headerTextColorError:i,descriptionTextColorProcess:l,descriptionTextColorWait:r,descriptionTextColorFinish:r,descriptionTextColorError:i})},TS={name:"Steps",common:O,self:jf},HS=TS,PS={name:"Steps",common:M,self:jf},IS=PS,Wf={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},_S={name:"Switch",common:M,self(e){const{primaryColorSuppl:t,opacityDisabled:o,borderRadius:r,primaryColor:n,textColor2:i,baseColor:s}=e,l="rgba(255, 255, 255, .20)";return Object.assign(Object.assign({},Wf),{iconColor:s,textColor:i,loadingColor:t,opacityDisabled:o,railColor:l,railColorActive:t,buttonBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",buttonColor:"#FFF",railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 8px 0 ${H(n,{alpha:.3})}`})}},AS=_S,kS=e=>{const{primaryColor:t,opacityDisabled:o,borderRadius:r,textColor3:n}=e,i="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Wf),{iconColor:n,textColor:"white",loadingColor:t,opacityDisabled:o,railColor:i,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${H(t,{alpha:.2})}`})},LS={name:"Switch",common:O,self:kS},BS=LS,DS={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"},Nf=e=>{const{dividerColor:t,cardColor:o,modalColor:r,popoverColor:n,tableHeaderColor:i,tableColorStriped:s,textColor1:l,textColor2:a,borderRadius:c,fontWeightStrong:d,lineHeight:u,fontSizeSmall:f,fontSizeMedium:p,fontSizeLarge:h}=e;return Object.assign(Object.assign({},DS),{fontSizeSmall:f,fontSizeMedium:p,fontSizeLarge:h,lineHeight:u,borderRadius:c,borderColor:G(o,t),borderColorModal:G(r,t),borderColorPopover:G(n,t),tdColor:o,tdColorModal:r,tdColorPopover:n,tdColorStriped:G(o,s),tdColorStripedModal:G(r,s),tdColorStripedPopover:G(n,s),thColor:G(o,i),thColorModal:G(r,i),thColorPopover:G(n,i),thTextColor:l,tdTextColor:a,thFontWeight:d})},RS={name:"Table",common:O,self:Nf},MS=RS,OS={name:"Table",common:M,self:Nf},zS=OS,FS={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"0 6px",tabPaddingVerticalMediumLine:"0 10px",tabPaddingVerticalLargeLine:"0 14px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"0 4px",tabPaddingVerticalMediumBar:"0 6px ",tabPaddingVerticalLargeBar:"0 10px ",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"10px 6px",tabPaddingVerticalMediumCard:"12px 8px",tabPaddingVerticalLargeCard:"16px 8px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},Uf=e=>{const{textColor2:t,primaryColor:o,textColorDisabled:r,closeIconColor:n,closeIconColorHover:i,closeIconColorPressed:s,closeColorHover:l,closeColorPressed:a,tabColor:c,baseColor:d,dividerColor:u,fontWeight:f,textColor1:p,borderRadius:h,fontSize:m,fontWeightStrong:x}=e;return Object.assign(Object.assign({},FS),{colorSegment:c,tabFontSizeCard:m,tabTextColorLine:p,tabTextColorActiveLine:o,tabTextColorHoverLine:o,tabTextColorDisabledLine:r,tabTextColorSegment:p,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:r,tabTextColorBar:p,tabTextColorActiveBar:o,tabTextColorHoverBar:o,tabTextColorDisabledBar:r,tabTextColorCard:p,tabTextColorHoverCard:p,tabTextColorActiveCard:o,tabTextColorDisabledCard:r,barColor:o,closeIconColor:n,closeIconColorHover:i,closeIconColorPressed:s,closeColorHover:l,closeColorPressed:a,closeBorderRadius:h,tabColor:c,tabColorSegment:d,tabBorderColor:u,tabFontWeightActive:f,tabFontWeight:f,tabBorderRadius:h,paneTextColor:t,fontWeightStrong:x})},jS={name:"Tabs",common:O,self:Uf},WS=jS,NS={name:"Tabs",common:M,self(e){const t=Uf(e),{inputColor:o}=e;return t.colorSegment=o,t.tabColorSegment=o,t}},US=NS,Kf=e=>{const{textColor1:t,textColor2:o,fontWeightStrong:r,fontSize:n}=e;return{fontSize:n,titleTextColor:t,textColor:o,titleFontWeight:r}},KS={name:"Thing",common:O,self:Kf},VS=KS,GS={name:"Thing",common:M,self:Kf},qS=GS,Vf={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"},ZS={name:"Timeline",common:M,self(e){const{textColor3:t,infoColorSuppl:o,errorColorSuppl:r,successColorSuppl:n,warningColorSuppl:i,textColor1:s,textColor2:l,railColor:a,fontWeightStrong:c,fontSize:d}=e;return Object.assign(Object.assign({},Vf),{contentFontSize:d,titleFontWeight:c,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${o}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${n}`,circleBorderWarning:`2px solid ${i}`,iconColor:t,iconColorInfo:o,iconColorError:r,iconColorSuccess:n,iconColorWarning:i,titleTextColor:s,contentTextColor:l,metaTextColor:t,lineColor:a})}},YS=ZS,XS=e=>{const{textColor3:t,infoColor:o,errorColor:r,successColor:n,warningColor:i,textColor1:s,textColor2:l,railColor:a,fontWeightStrong:c,fontSize:d}=e;return Object.assign(Object.assign({},Vf),{contentFontSize:d,titleFontWeight:c,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${o}`,circleBorderError:`2px solid ${r}`,circleBorderSuccess:`2px solid ${n}`,circleBorderWarning:`2px solid ${i}`,iconColor:t,iconColorInfo:o,iconColorError:r,iconColorSuccess:n,iconColorWarning:i,titleTextColor:s,contentTextColor:l,metaTextColor:t,lineColor:a})},QS={name:"Timeline",common:O,self:XS},JS=QS,Gf={extraFontSizeSmall:"12px",extraFontSizeMedium:"12px",extraFontSizeLarge:"14px",titleFontSizeSmall:"14px",titleFontSizeMedium:"16px",titleFontSizeLarge:"16px",closeSize:"20px",closeIconSize:"16px",headerHeightSmall:"44px",headerHeightMedium:"44px",headerHeightLarge:"50px"},e3={name:"Transfer",common:M,peers:{Checkbox:Ir,Scrollbar:Qe,Input:gt,Empty:Wo,Button:et},self(e){const{fontWeight:t,fontSizeLarge:o,fontSizeMedium:r,fontSizeSmall:n,heightLarge:i,heightMedium:s,borderRadius:l,inputColor:a,tableHeaderColor:c,textColor1:d,textColorDisabled:u,textColor2:f,textColor3:p,hoverColor:h,closeColorHover:m,closeColorPressed:x,closeIconColor:b,closeIconColorHover:y,closeIconColorPressed:S,dividerColor:v}=e;return Object.assign(Object.assign({},Gf),{itemHeightSmall:s,itemHeightMedium:s,itemHeightLarge:i,fontSizeSmall:n,fontSizeMedium:r,fontSizeLarge:o,borderRadius:l,dividerColor:v,borderColor:"#0000",listColor:a,headerColor:c,titleTextColor:d,titleTextColorDisabled:u,extraTextColor:p,extraTextColorDisabled:u,itemTextColor:f,itemTextColorDisabled:u,itemColorPending:h,titleFontWeight:t,closeColorHover:m,closeColorPressed:x,closeIconColor:b,closeIconColorHover:y,closeIconColorPressed:S})}},t3=e3,o3=e=>{const{fontWeight:t,fontSizeLarge:o,fontSizeMedium:r,fontSizeSmall:n,heightLarge:i,heightMedium:s,borderRadius:l,cardColor:a,tableHeaderColor:c,textColor1:d,textColorDisabled:u,textColor2:f,textColor3:p,borderColor:h,hoverColor:m,closeColorHover:x,closeColorPressed:b,closeIconColor:y,closeIconColorHover:S,closeIconColorPressed:v}=e;return Object.assign(Object.assign({},Gf),{itemHeightSmall:s,itemHeightMedium:s,itemHeightLarge:i,fontSizeSmall:n,fontSizeMedium:r,fontSizeLarge:o,borderRadius:l,dividerColor:h,borderColor:h,listColor:a,headerColor:G(a,c),titleTextColor:d,titleTextColorDisabled:u,extraTextColor:p,extraTextColorDisabled:u,itemTextColor:f,itemTextColorDisabled:u,itemColorPending:m,titleFontWeight:t,closeColorHover:x,closeColorPressed:b,closeIconColor:y,closeIconColorHover:S,closeIconColorPressed:v})},r3={name:"Transfer",common:O,peers:{Checkbox:Pr,Scrollbar:Xe,Input:mt,Empty:qt,Button:Je},self:o3},n3=r3,qf=e=>{const{borderRadiusSmall:t,hoverColor:o,pressedColor:r,primaryColor:n,textColor3:i,textColor2:s,textColorDisabled:l,fontSize:a}=e;return{fontSize:a,nodeBorderRadius:t,nodeColorHover:o,nodeColorPressed:r,nodeColorActive:H(n,{alpha:.1}),arrowColor:i,nodeTextColor:s,nodeTextColorDisabled:l,loadingColor:n,dropMarkColor:n}},i3={name:"Tree",common:O,peers:{Checkbox:Pr,Scrollbar:Xe,Empty:qt},self:qf},Zf=i3,s3={name:"Tree",common:M,peers:{Checkbox:Ir,Scrollbar:Qe,Empty:Wo},self(e){const{primaryColor:t}=e,o=qf(e);return o.nodeColorActive=H(t,{alpha:.15}),o}},Yf=s3,l3={name:"TreeSelect",common:M,peers:{Tree:Yf,Empty:Wo,InternalSelection:xl}},a3=l3,c3=e=>{const{popoverColor:t,boxShadow2:o,borderRadius:r,heightMedium:n,dividerColor:i,textColor2:s}=e;return{menuPadding:"4px",menuColor:t,menuBoxShadow:o,menuBorderRadius:r,menuHeight:`calc(${n} * 7.6)`,actionDividerColor:i,actionTextColor:s,actionPadding:"8px 12px"}},d3={name:"TreeSelect",common:O,peers:{Tree:Zf,Empty:qt,InternalSelection:bl},self:c3},u3=d3,f3={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},Xf=e=>{const{primaryColor:t,textColor2:o,borderColor:r,lineHeight:n,fontSize:i,borderRadiusSmall:s,dividerColor:l,fontWeightStrong:a,textColor1:c,textColor3:d,infoColor:u,warningColor:f,errorColor:p,successColor:h,codeColor:m}=e;return Object.assign(Object.assign({},f3),{aTextColor:t,blockquoteTextColor:o,blockquotePrefixColor:r,blockquoteLineHeight:n,blockquoteFontSize:i,codeBorderRadius:s,liTextColor:o,liLineHeight:n,liFontSize:i,hrColor:l,headerFontWeight:a,headerTextColor:c,pTextColor:o,pTextColor1Depth:c,pTextColor2Depth:o,pTextColor3Depth:d,pLineHeight:n,pFontSize:i,headerBarColor:t,headerBarColorPrimary:t,headerBarColorInfo:u,headerBarColorError:p,headerBarColorWarning:f,headerBarColorSuccess:h,textColor:o,textColor1Depth:c,textColor2Depth:o,textColor3Depth:d,textColorPrimary:t,textColorInfo:u,textColorSuccess:h,textColorWarning:f,textColorError:p,codeTextColor:o,codeColor:m,codeBorder:"1px solid #0000"})},h3={name:"Typography",common:O,self:Xf},p3=h3,g3={name:"Typography",common:M,self:Xf},m3=g3,Qf=e=>{const{iconColor:t,primaryColor:o,errorColor:r,textColor2:n,successColor:i,opacityDisabled:s,actionColor:l,borderColor:a,hoverColor:c,lineHeight:d,borderRadius:u,fontSize:f}=e;return{fontSize:f,lineHeight:d,borderRadius:u,draggerColor:l,draggerBorder:`1px dashed ${a}`,draggerBorderHover:`1px dashed ${o}`,itemColorHover:c,itemColorHoverError:H(r,{alpha:.06}),itemTextColor:n,itemTextColorError:r,itemTextColorSuccess:i,itemIconColor:t,itemDisabledOpacity:s,itemBorderImageCardError:`1px solid ${r}`,itemBorderImageCard:`1px solid ${a}`}},b3={name:"Upload",common:O,peers:{Button:Je,Progress:Df},self:Qf},x3=b3,C3={name:"Upload",common:M,peers:{Button:et,Progress:Rf},self(e){const{errorColor:t}=e,o=Qf(e);return o.itemColorHoverError=H(t,{alpha:.09}),o}},y3=C3,v3={name:"Watermark",common:M,self(e){const{fontFamily:t}=e;return{fontFamily:t}}},w3=v3,S3={name:"Watermark",common:O,self(e){const{fontFamily:t}=e;return{fontFamily:t}}},$3=S3,E3={name:"Row",common:O},T3=E3,H3={name:"Row",common:M},P3=H3,I3={name:"Image",common:M,peers:{Tooltip:Ai},self:e=>{const{textColor2:t}=e;return{toolbarIconColor:t,toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}},Jf={extraFontSize:"12px",width:"440px"},_3={name:"Transfer",common:M,peers:{Checkbox:Ir,Scrollbar:Qe,Input:gt,Empty:Wo,Button:et},self(e){const{iconColorDisabled:t,iconColor:o,fontWeight:r,fontSizeLarge:n,fontSizeMedium:i,fontSizeSmall:s,heightLarge:l,heightMedium:a,heightSmall:c,borderRadius:d,inputColor:u,tableHeaderColor:f,textColor1:p,textColorDisabled:h,textColor2:m,hoverColor:x}=e;return Object.assign(Object.assign({},Jf),{itemHeightSmall:c,itemHeightMedium:a,itemHeightLarge:l,fontSizeSmall:s,fontSizeMedium:i,fontSizeLarge:n,borderRadius:d,borderColor:"#0000",listColor:u,headerColor:f,titleTextColor:p,titleTextColorDisabled:h,extraTextColor:m,filterDividerColor:"#0000",itemTextColor:m,itemTextColorDisabled:h,itemColorPending:x,titleFontWeight:r,iconColor:o,iconColorDisabled:t})}},A3=_3,k3=e=>{const{fontWeight:t,iconColorDisabled:o,iconColor:r,fontSizeLarge:n,fontSizeMedium:i,fontSizeSmall:s,heightLarge:l,heightMedium:a,heightSmall:c,borderRadius:d,cardColor:u,tableHeaderColor:f,textColor1:p,textColorDisabled:h,textColor2:m,borderColor:x,hoverColor:b}=e;return Object.assign(Object.assign({},Jf),{itemHeightSmall:c,itemHeightMedium:a,itemHeightLarge:l,fontSizeSmall:s,fontSizeMedium:i,fontSizeLarge:n,borderRadius:d,borderColor:x,listColor:u,headerColor:G(u,f),titleTextColor:p,titleTextColorDisabled:h,extraTextColor:m,filterDividerColor:x,itemTextColor:m,itemTextColorDisabled:h,itemColorPending:b,titleFontWeight:t,iconColor:r,iconColorDisabled:o})},L3={name:"Transfer",common:O,peers:{Checkbox:Pr,Scrollbar:Xe,Input:mt,Empty:qt,Button:Je},self:k3},B3=L3,eh={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},D3="n-message-api",th="n-message-provider",R3=xe([Mo("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[JC({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),Mo("message",`
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
 `,[Ze("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),Ze("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(e=>It(`${e}-type`,[xe("> *",`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),xe("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[Hs()])]),Ze("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[xe("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),xe("&:active",`
 color: var(--n-close-icon-color-pressed);
 `)])]),Mo("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[It("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),It("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),It("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),It("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),It("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),It("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]),M3={info:()=>Z(uC,null),success:()=>Z(fC,null),warning:()=>Z(hC,null),error:()=>Z(dC,null),default:()=>null},O3=at({name:"Message",props:Object.assign(Object.assign({},eh),{render:Function}),setup(e){const{inlineThemeDisabled:t,mergedRtlRef:o}=du(e),{props:r,mergedClsPrefixRef:n}=Le(th),i=aC("Message",o,n),s=gl("Message","-message",R3,If,r,n),l=be(()=>{const{type:c}=e,{common:{cubicBezierEaseInOut:d},self:{padding:u,margin:f,maxWidth:p,iconMargin:h,closeMargin:m,closeSize:x,iconSize:b,fontSize:y,lineHeight:S,borderRadius:v,iconColorInfo:E,iconColorSuccess:B,iconColorWarning:j,iconColorError:P,iconColorLoading:D,closeIconSize:I,closeBorderRadius:L,[zt("textColor",c)]:w,[zt("boxShadow",c)]:q,[zt("color",c)]:oe,[zt("closeColorHover",c)]:Ee,[zt("closeColorPressed",c)]:fe,[zt("closeIconColor",c)]:ge,[zt("closeIconColorPressed",c)]:me,[zt("closeIconColorHover",c)]:tt}}=s.value;return{"--n-bezier":d,"--n-margin":f,"--n-padding":u,"--n-max-width":p,"--n-font-size":y,"--n-icon-margin":h,"--n-icon-size":b,"--n-close-icon-size":I,"--n-close-border-radius":L,"--n-close-size":x,"--n-close-margin":m,"--n-text-color":w,"--n-color":oe,"--n-box-shadow":q,"--n-icon-color-info":E,"--n-icon-color-success":B,"--n-icon-color-warning":j,"--n-icon-color-error":P,"--n-icon-color-loading":D,"--n-close-color-hover":Ee,"--n-close-color-pressed":fe,"--n-close-icon-color":ge,"--n-close-icon-color-pressed":me,"--n-close-icon-color-hover":tt,"--n-line-height":S,"--n-border-radius":v}}),a=t?lC("message",be(()=>e.type[0]),l,{}):void 0;return{mergedClsPrefix:n,rtlEnabled:i,messageProviderProps:r,handleClose(){var c;(c=e.onClose)===null||c===void 0||c.call(e)},cssVars:t?void 0:l,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender,placement:r.placement}},render(){const{render:e,type:t,closable:o,content:r,mergedClsPrefix:n,cssVars:i,themeClass:s,onRender:l,icon:a,handleClose:c,showIcon:d}=this;l==null||l();let u;return Z("div",{class:[`${n}-message-wrapper`,s],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},i]},e?e(this.$props):Z("div",{class:[`${n}-message ${n}-message--${t}-type`,this.rtlEnabled&&`${n}-message--rtl`]},(u=z3(a,t,n))&&d?Z("div",{class:`${n}-message__icon ${n}-message__icon--${t}-type`},Z(uu,null,{default:()=>u})):null,Z("div",{class:`${n}-message__content`},rm(r)),o?Z(bC,{clsPrefix:n,class:`${n}-message__close`,onClick:c,absolute:!0}):null))}});function z3(e,t,o){if(typeof e=="function")return e();{const r=t==="loading"?Z(vC,{clsPrefix:o,strokeWidth:24,scale:.85}):M3[t]();return r?Z(fu,{clsPrefix:o,key:t},{default:()=>r}):null}}const F3=at({name:"MessageEnvironment",props:Object.assign(Object.assign({},eh),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let t=null;const o=bo(!0);wi(()=>{r()});function r(){const{duration:d}=e;d&&(t=window.setTimeout(s,d))}function n(d){d.currentTarget===d.target&&t!==null&&(window.clearTimeout(t),t=null)}function i(d){d.currentTarget===d.target&&r()}function s(){const{onHide:d}=e;o.value=!1,t&&(window.clearTimeout(t),t=null),d&&d()}function l(){const{onClose:d}=e;d&&d(),s()}function a(){const{onAfterLeave:d,onInternalAfterLeave:u,onAfterHide:f,internalKey:p}=e;d&&d(),u&&u(p),f&&f()}function c(){s()}return{show:o,hide:s,handleClose:l,handleAfterLeave:a,handleMouseleave:i,handleMouseenter:n,deactivate:c}},render(){return Z(pC,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?Z(O3,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),j3=Object.assign(Object.assign({},gl.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerStyle:[String,Object]}),W3=at({name:"MessageProvider",props:j3,setup(e){const{mergedClsPrefixRef:t}=du(e),o=bo([]),r=bo({}),n={create(a,c){return i(a,Object.assign({type:"default"},c))},info(a,c){return i(a,Object.assign(Object.assign({},c),{type:"info"}))},success(a,c){return i(a,Object.assign(Object.assign({},c),{type:"success"}))},warning(a,c){return i(a,Object.assign(Object.assign({},c),{type:"warning"}))},error(a,c){return i(a,Object.assign(Object.assign({},c),{type:"error"}))},loading(a,c){return i(a,Object.assign(Object.assign({},c),{type:"loading"}))},destroyAll:l};Do(th,{props:e,mergedClsPrefixRef:t}),Do(D3,n);function i(a,c){const d=tm(),u=vr(Object.assign(Object.assign({},c),{content:a,key:d,destroy:()=>{var p;(p=r.value[d])===null||p===void 0||p.hide()}})),{max:f}=e;return f&&o.value.length>=f&&o.value.shift(),o.value.push(u),u}function s(a){o.value.splice(o.value.findIndex(c=>c.key===a),1),delete r.value[a]}function l(){Object.values(r.value).forEach(a=>{a.hide()})}return Object.assign({mergedClsPrefix:t,messageRefs:r,messageList:o,handleAfterLeave:s},n)},render(){var e,t,o;return Z(Ye,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.messageList.length?Z(o0,{to:(o=this.to)!==null&&o!==void 0?o:"body"},Z("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`],key:"message-container",style:this.containerStyle},this.messageList.map(r=>Z(F3,Object.assign({ref:n=>{n&&(this.messageRefs[r.key]=n)},internalKey:r.key,onInternalAfterLeave:this.handleAfterLeave},om(r,["destroy"],void 0),{duration:r.duration===void 0?this.duration:r.duration,keepAliveOnHover:r.keepAliveOnHover===void 0?this.keepAliveOnHover:r.keepAliveOnHover,closable:r.closable===void 0?this.closable:r.closable}))))):null)}}),N3={name:"Skeleton",common:M,self(e){const{heightSmall:t,heightMedium:o,heightLarge:r,borderRadius:n}=e;return{color:"rgba(255, 255, 255, 0.12)",colorEnd:"rgba(255, 255, 255, 0.18)",borderRadius:n,heightSmall:t,heightMedium:o,heightLarge:r}}},U3=e=>{const{heightSmall:t,heightMedium:o,heightLarge:r,borderRadius:n}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:n,heightSmall:t,heightMedium:o,heightLarge:r}},K3={name:"Skeleton",common:O,self:U3},oh=()=>({}),V3={name:"Equation",common:O,self:oh},G3=V3,q3={name:"Equation",common:M,self:oh},Z3=q3,Y3={name:"dark",common:M,Alert:GC,Anchor:ny,AutoComplete:uy,Avatar:Iu,AvatarGroup:by,BackTop:Cy,Badge:$y,Breadcrumb:ky,Button:et,ButtonGroup:cw,Calendar:Fy,Card:Ou,Carousel:Xy,Cascader:nv,Checkbox:Ir,Code:Wu,Collapse:uv,CollapseTransition:gv,ColorPicker:Uy,DataTable:jv,DatePicker:Jv,Descriptions:i2,Dialog:bf,Divider:m2,Drawer:y2,Dropdown:yl,DynamicInput:w2,DynamicTags:_2,Element:B2,Empty:Wo,Ellipsis:tf,Equation:Z3,Form:j2,GradientText:N2,Icon:Kv,IconWrapper:Y2,Image:I3,Input:gt,InputNumber:hw,LegacyTransfer:A3,Layout:xw,List:Ew,LoadingBar:Hw,Log:kw,Menu:Kw,Mention:Mw,Message:lw,Modal:f2,Notification:rw,PageHeader:qw,Pagination:Ju,Popconfirm:Jw,Popover:Uo,Popselect:Vu,Progress:Rf,Radio:nf,Rate:rS,Result:uS,Row:P3,Scrollbar:Qe,Select:Yu,Skeleton:N3,Slider:hS,Space:Sf,Spin:yS,Statistic:$S,Steps:IS,Switch:AS,Table:zS,Tabs:US,Tag:yu,Thing:qS,TimePicker:ff,Timeline:YS,Tooltip:Ai,Transfer:t3,Tree:Yf,TreeSelect:a3,Typography:m3,Upload:y3,Watermark:w3},rh={name:"light",common:O,Alert:YC,Anchor:oy,AutoComplete:cy,Avatar:Pu,AvatarGroup:gy,BackTop:wy,Badge:Hy,Breadcrumb:_y,Button:Je,ButtonGroup:uw,Calendar:Oy,Card:Mu,Carousel:Zy,Cascader:ov,Checkbox:Pr,Code:Nu,Collapse:cv,CollapseTransition:hv,ColorPicker:Wy,DataTable:zv,DatePicker:Xv,Descriptions:r2,Dialog:mf,Divider:p2,Drawer:x2,Dropdown:Cl,DynamicInput:E2,DynamicTags:k2,Element:R2,Empty:qt,Equation:G3,Ellipsis:of,Form:z2,GradientText:V2,Icon:Nv,IconWrapper:q2,Image:Q2,Input:mt,InputNumber:mw,Layout:vw,LegacyTransfer:B3,List:Sw,LoadingBar:_w,Log:Dw,Menu:Nw,Mention:Fw,Message:If,Modal:d2,Notification:tw,PageHeader:Gw,Pagination:Qu,Popconfirm:Xw,Popover:No,Popselect:Gu,Progress:Df,Radio:sf,Rate:sS,Row:T3,Result:cS,Scrollbar:Xe,Skeleton:K3,Select:Zu,Slider:mS,Space:$f,Spin:xS,Statistic:wS,Steps:HS,Switch:BS,Table:MS,Tabs:WS,Tag:vu,Thing:VS,TimePicker:uf,Timeline:JS,Tooltip:ki,Transfer:n3,Tree:Zf,TreeSelect:u3,Typography:p3,Upload:x3,Watermark:$3},Ua=[rh,Y3],nh=bo(rh);let kn=0;function j8(){kn++,kn=kn%Ua.length,nh.value=Ua[kn]}const X3={class:"w-full h-screen"},Q3=at({__name:"App",setup(e){return(t,o)=>{const r=Bg("RouterView");return ll(),al(jt(bv),{theme:jt(nh)},{default:us(()=>[Fe(jt(W3),null,{default:us(()=>[cl("div",X3,[Fe(r)])]),_:1})]),_:1},8,["theme"])}}});const J3=(e,t)=>{const o=e.__vccOpts||e;for(const[r,n]of t)o[r]=n;return o},e6=J3(Q3,[["__scopeId","data-v-1bf4ac33"]]),t6="modulepreload",o6=function(e){return"/"+e},Ka={},Rt=function(t,o,r){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=o6(n),n in Ka)return;Ka[n]=!0;const i=n.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":t6,i||(l.as="script",l.crossOrigin=""),l.href=n,document.head.appendChild(l),i)return new Promise((a,c)=>{l.addEventListener("load",a),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Xo=typeof window<"u";function r6(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ve=Object.assign;function Xi(e,t){const o={};for(const r in t){const n=t[r];o[r]=St(n)?n.map(e):e(n)}return o}const Gr=()=>{},St=Array.isArray,n6=/\/$/,i6=e=>e.replace(n6,"");function Qi(e,t,o="/"){let r,n={},i="",s="";const l=t.indexOf("#");let a=t.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(r=t.slice(0,a),i=t.slice(a+1,l>-1?l:t.length),n=e(i)),l>-1&&(r=r||t.slice(0,l),s=t.slice(l,t.length)),r=c6(r!=null?r:t,o),{fullPath:r+(i&&"?")+i+s,path:r,query:n,hash:s}}function s6(e,t){const o=t.query?e(t.query):"";return t.path+(o&&"?")+o+(t.hash||"")}function Va(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function l6(e,t,o){const r=t.matched.length-1,n=o.matched.length-1;return r>-1&&r===n&&ar(t.matched[r],o.matched[n])&&ih(t.params,o.params)&&e(t.query)===e(o.query)&&t.hash===o.hash}function ar(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ih(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const o in e)if(!a6(e[o],t[o]))return!1;return!0}function a6(e,t){return St(e)?Ga(e,t):St(t)?Ga(t,e):e===t}function Ga(e,t){return St(t)?e.length===t.length&&e.every((o,r)=>o===t[r]):e.length===1&&e[0]===t}function c6(e,t){if(e.startsWith("/"))return e;if(!e)return t;const o=t.split("/"),r=e.split("/");let n=o.length-1,i,s;for(i=0;i<r.length;i++)if(s=r[i],s!==".")if(s==="..")n>1&&n--;else break;return o.slice(0,n).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var dn;(function(e){e.pop="pop",e.push="push"})(dn||(dn={}));var qr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(qr||(qr={}));function d6(e){if(!e)if(Xo){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),i6(e)}const u6=/^[^#]+#/;function f6(e,t){return e.replace(u6,"#")+t}function h6(e,t){const o=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-o.left-(t.left||0),top:r.top-o.top-(t.top||0)}}const Li=()=>({left:window.pageXOffset,top:window.pageYOffset});function p6(e){let t;if("el"in e){const o=e.el,r=typeof o=="string"&&o.startsWith("#"),n=typeof o=="string"?r?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!n)return;t=h6(n,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function qa(e,t){return(history.state?history.state.position-t:-1)+e}const Ps=new Map;function g6(e,t){Ps.set(e,t)}function m6(e){const t=Ps.get(e);return Ps.delete(e),t}let b6=()=>location.protocol+"//"+location.host;function sh(e,t){const{pathname:o,search:r,hash:n}=t,i=e.indexOf("#");if(i>-1){let l=n.includes(e.slice(i))?e.slice(i).length:1,a=n.slice(l);return a[0]!=="/"&&(a="/"+a),Va(a,"")}return Va(o,e)+r+n}function x6(e,t,o,r){let n=[],i=[],s=null;const l=({state:f})=>{const p=sh(e,location),h=o.value,m=t.value;let x=0;if(f){if(o.value=p,t.value=f,s&&s===h){s=null;return}x=m?f.position-m.position:0}else r(p);n.forEach(b=>{b(o.value,h,{delta:x,type:dn.pop,direction:x?x>0?qr.forward:qr.back:qr.unknown})})};function a(){s=o.value}function c(f){n.push(f);const p=()=>{const h=n.indexOf(f);h>-1&&n.splice(h,1)};return i.push(p),p}function d(){const{history:f}=window;!f.state||f.replaceState(ve({},f.state,{scroll:Li()}),"")}function u(){for(const f of i)f();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d),{pauseListeners:a,listen:c,destroy:u}}function Za(e,t,o,r=!1,n=!1){return{back:e,current:t,forward:o,replaced:r,position:window.history.length,scroll:n?Li():null}}function C6(e){const{history:t,location:o}=window,r={value:sh(e,o)},n={value:t.state};n.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,c,d){const u=e.indexOf("#"),f=u>-1?(o.host&&document.querySelector("base")?e:e.slice(u))+a:b6()+e+a;try{t[d?"replaceState":"pushState"](c,"",f),n.value=c}catch(p){console.error(p),o[d?"replace":"assign"](f)}}function s(a,c){const d=ve({},t.state,Za(n.value.back,a,n.value.forward,!0),c,{position:n.value.position});i(a,d,!0),r.value=a}function l(a,c){const d=ve({},n.value,t.state,{forward:a,scroll:Li()});i(d.current,d,!0);const u=ve({},Za(r.value,a,null),{position:d.position+1},c);i(a,u,!1),r.value=a}return{location:r,state:n,push:l,replace:s}}function y6(e){e=d6(e);const t=C6(e),o=x6(e,t.state,t.location,t.replace);function r(i,s=!0){s||o.pauseListeners(),history.go(i)}const n=ve({location:"",base:e,go:r,createHref:f6.bind(null,e)},t,o);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>t.state.value}),n}function v6(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),y6(e)}function w6(e){return typeof e=="string"||e&&typeof e=="object"}function lh(e){return typeof e=="string"||typeof e=="symbol"}const Qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ah=Symbol("");var Ya;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ya||(Ya={}));function cr(e,t){return ve(new Error,{type:e,[ah]:!0},t)}function Mt(e,t){return e instanceof Error&&ah in e&&(t==null||!!(e.type&t))}const Xa="[^/]+?",S6={sensitive:!1,strict:!1,start:!0,end:!0},$6=/[.+*?^${}()[\]/\\]/g;function E6(e,t){const o=ve({},S6,t),r=[];let n=o.start?"^":"";const i=[];for(const c of e){const d=c.length?[]:[90];o.strict&&!c.length&&(n+="/");for(let u=0;u<c.length;u++){const f=c[u];let p=40+(o.sensitive?.25:0);if(f.type===0)u||(n+="/"),n+=f.value.replace($6,"\\$&"),p+=40;else if(f.type===1){const{value:h,repeatable:m,optional:x,regexp:b}=f;i.push({name:h,repeatable:m,optional:x});const y=b||Xa;if(y!==Xa){p+=10;try{new RegExp(`(${y})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${h}" (${y}): `+v.message)}}let S=m?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;u||(S=x&&c.length<2?`(?:/${S})`:"/"+S),x&&(S+="?"),n+=S,p+=20,x&&(p+=-8),m&&(p+=-20),y===".*"&&(p+=-50)}d.push(p)}r.push(d)}if(o.strict&&o.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}o.strict||(n+="/?"),o.end?n+="$":o.strict&&(n+="(?:/|$)");const s=new RegExp(n,o.sensitive?"":"i");function l(c){const d=c.match(s),u={};if(!d)return null;for(let f=1;f<d.length;f++){const p=d[f]||"",h=i[f-1];u[h.name]=p&&h.repeatable?p.split("/"):p}return u}function a(c){let d="",u=!1;for(const f of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const p of f)if(p.type===0)d+=p.value;else if(p.type===1){const{value:h,repeatable:m,optional:x}=p,b=h in c?c[h]:"";if(St(b)&&!m)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const y=St(b)?b.join("/"):b;if(!y)if(x)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${h}"`);d+=y}}return d||"/"}return{re:s,score:r,keys:i,parse:l,stringify:a}}function T6(e,t){let o=0;for(;o<e.length&&o<t.length;){const r=t[o]-e[o];if(r)return r;o++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function H6(e,t){let o=0;const r=e.score,n=t.score;for(;o<r.length&&o<n.length;){const i=T6(r[o],n[o]);if(i)return i;o++}if(Math.abs(n.length-r.length)===1){if(Qa(r))return 1;if(Qa(n))return-1}return n.length-r.length}function Qa(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const P6={type:0,value:""},I6=/[a-zA-Z0-9_]/;function _6(e){if(!e)return[[]];if(e==="/")return[[P6]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${o})/"${c}": ${p}`)}let o=0,r=o;const n=[];let i;function s(){i&&n.push(i),i=[]}let l=0,a,c="",d="";function u(){!c||(o===0?i.push({type:0,value:c}):o===1||o===2||o===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&o!==2){r=o,o=4;continue}switch(o){case 0:a==="/"?(c&&u(),s()):a===":"?(u(),o=1):f();break;case 4:f(),o=r;break;case 1:a==="("?o=2:I6.test(a)?f():(u(),o=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:o=3:d+=a;break;case 3:u(),o=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,d="";break;default:t("Unknown state");break}}return o===2&&t(`Unfinished custom RegExp for param "${c}"`),u(),s(),n}function A6(e,t,o){const r=E6(_6(e.path),o),n=ve(r,{record:e,parent:t,children:[],alias:[]});return t&&!n.record.aliasOf==!t.record.aliasOf&&t.children.push(n),n}function k6(e,t){const o=[],r=new Map;t=tc({strict:!1,end:!0,sensitive:!1},t);function n(d){return r.get(d)}function i(d,u,f){const p=!f,h=L6(d);h.aliasOf=f&&f.record;const m=tc(t,d),x=[h];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const v of S)x.push(ve({},h,{components:f?f.record.components:h.components,path:v,aliasOf:f?f.record:h}))}let b,y;for(const S of x){const{path:v}=S;if(u&&v[0]!=="/"){const E=u.record.path,B=E[E.length-1]==="/"?"":"/";S.path=u.record.path+(v&&B+v)}if(b=A6(S,u,m),f?f.alias.push(b):(y=y||b,y!==b&&y.alias.push(b),p&&d.name&&!ec(b)&&s(d.name)),h.children){const E=h.children;for(let B=0;B<E.length;B++)i(E[B],b,f&&f.children[B])}f=f||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&a(b)}return y?()=>{s(y)}:Gr}function s(d){if(lh(d)){const u=r.get(d);u&&(r.delete(d),o.splice(o.indexOf(u),1),u.children.forEach(s),u.alias.forEach(s))}else{const u=o.indexOf(d);u>-1&&(o.splice(u,1),d.record.name&&r.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function l(){return o}function a(d){let u=0;for(;u<o.length&&H6(d,o[u])>=0&&(d.record.path!==o[u].record.path||!ch(d,o[u]));)u++;o.splice(u,0,d),d.record.name&&!ec(d)&&r.set(d.record.name,d)}function c(d,u){let f,p={},h,m;if("name"in d&&d.name){if(f=r.get(d.name),!f)throw cr(1,{location:d});m=f.record.name,p=ve(Ja(u.params,f.keys.filter(y=>!y.optional).map(y=>y.name)),d.params&&Ja(d.params,f.keys.map(y=>y.name))),h=f.stringify(p)}else if("path"in d)h=d.path,f=o.find(y=>y.re.test(h)),f&&(p=f.parse(h),m=f.record.name);else{if(f=u.name?r.get(u.name):o.find(y=>y.re.test(u.path)),!f)throw cr(1,{location:d,currentLocation:u});m=f.record.name,p=ve({},u.params,d.params),h=f.stringify(p)}const x=[];let b=f;for(;b;)x.unshift(b.record),b=b.parent;return{name:m,path:h,params:p,matched:x,meta:D6(x)}}return e.forEach(d=>i(d)),{addRoute:i,resolve:c,removeRoute:s,getRoutes:l,getRecordMatcher:n}}function Ja(e,t){const o={};for(const r of t)r in e&&(o[r]=e[r]);return o}function L6(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:B6(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function B6(e){const t={},o=e.props||!1;if("component"in e)t.default=o;else for(const r in e.components)t[r]=typeof o=="boolean"?o:o[r];return t}function ec(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function D6(e){return e.reduce((t,o)=>ve(t,o.meta),{})}function tc(e,t){const o={};for(const r in e)o[r]=r in t?t[r]:e[r];return o}function ch(e,t){return t.children.some(o=>o===e||ch(e,o))}const dh=/#/g,R6=/&/g,M6=/\//g,O6=/=/g,z6=/\?/g,uh=/\+/g,F6=/%5B/g,j6=/%5D/g,fh=/%5E/g,W6=/%60/g,hh=/%7B/g,N6=/%7C/g,ph=/%7D/g,U6=/%20/g;function vl(e){return encodeURI(""+e).replace(N6,"|").replace(F6,"[").replace(j6,"]")}function K6(e){return vl(e).replace(hh,"{").replace(ph,"}").replace(fh,"^")}function Is(e){return vl(e).replace(uh,"%2B").replace(U6,"+").replace(dh,"%23").replace(R6,"%26").replace(W6,"`").replace(hh,"{").replace(ph,"}").replace(fh,"^")}function V6(e){return Is(e).replace(O6,"%3D")}function G6(e){return vl(e).replace(dh,"%23").replace(z6,"%3F")}function q6(e){return e==null?"":G6(e).replace(M6,"%2F")}function oi(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Z6(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<r.length;++n){const i=r[n].replace(uh," "),s=i.indexOf("="),l=oi(s<0?i:i.slice(0,s)),a=s<0?null:oi(i.slice(s+1));if(l in t){let c=t[l];St(c)||(c=t[l]=[c]),c.push(a)}else t[l]=a}return t}function oc(e){let t="";for(let o in e){const r=e[o];if(o=V6(o),r==null){r!==void 0&&(t+=(t.length?"&":"")+o);continue}(St(r)?r.map(i=>i&&Is(i)):[r&&Is(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+o,i!=null&&(t+="="+i))})}return t}function Y6(e){const t={};for(const o in e){const r=e[o];r!==void 0&&(t[o]=St(r)?r.map(n=>n==null?null:""+n):r==null?r:""+r)}return t}const X6=Symbol(""),rc=Symbol(""),Bi=Symbol(""),wl=Symbol(""),_s=Symbol("");function Dr(){let e=[];function t(r){return e.push(r),()=>{const n=e.indexOf(r);n>-1&&e.splice(n,1)}}function o(){e=[]}return{add:t,list:()=>e,reset:o}}function lo(e,t,o,r,n){const i=r&&(r.enterCallbacks[n]=r.enterCallbacks[n]||[]);return()=>new Promise((s,l)=>{const a=u=>{u===!1?l(cr(4,{from:o,to:t})):u instanceof Error?l(u):w6(u)?l(cr(2,{from:t,to:u})):(i&&r.enterCallbacks[n]===i&&typeof u=="function"&&i.push(u),s())},c=e.call(r&&r.instances[n],t,o,a);let d=Promise.resolve(c);e.length<3&&(d=d.then(a)),d.catch(u=>l(u))})}function Ji(e,t,o,r){const n=[];for(const i of e)for(const s in i.components){let l=i.components[s];if(!(t!=="beforeRouteEnter"&&!i.instances[s]))if(Q6(l)){const c=(l.__vccOpts||l)[t];c&&n.push(lo(c,o,r,i,s))}else{let a=l();n.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));const d=r6(c)?c.default:c;i.components[s]=d;const f=(d.__vccOpts||d)[t];return f&&lo(f,o,r,i,s)()}))}}return n}function Q6(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function nc(e){const t=Le(Bi),o=Le(wl),r=be(()=>t.resolve(jt(e.to))),n=be(()=>{const{matched:a}=r.value,{length:c}=a,d=a[c-1],u=o.matched;if(!d||!u.length)return-1;const f=u.findIndex(ar.bind(null,d));if(f>-1)return f;const p=ic(a[c-2]);return c>1&&ic(d)===p&&u[u.length-1].path!==p?u.findIndex(ar.bind(null,a[c-2])):f}),i=be(()=>n.value>-1&&o5(o.params,r.value.params)),s=be(()=>n.value>-1&&n.value===o.matched.length-1&&ih(o.params,r.value.params));function l(a={}){return t5(a)?t[jt(e.replace)?"replace":"push"](jt(e.to)).catch(Gr):Promise.resolve()}return{route:r,href:be(()=>r.value.href),isActive:i,isExactActive:s,navigate:l}}const J6=at({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:nc,setup(e,{slots:t}){const o=vr(nc(e)),{options:r}=Le(Bi),n=be(()=>({[sc(e.activeClass,r.linkActiveClass,"router-link-active")]:o.isActive,[sc(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const i=t.default&&t.default(o);return e.custom?i:Z("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:n.value},i)}}}),e5=J6;function t5(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function o5(e,t){for(const o in t){const r=t[o],n=e[o];if(typeof r=="string"){if(r!==n)return!1}else if(!St(n)||n.length!==r.length||r.some((i,s)=>i!==n[s]))return!1}return!0}function ic(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const sc=(e,t,o)=>e!=null?e:t!=null?t:o,r5=at({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:o}){const r=Le(_s),n=be(()=>e.route||r.value),i=Le(rc,0),s=be(()=>{let c=jt(i);const{matched:d}=n.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),l=be(()=>n.value.matched[s.value]);Do(rc,be(()=>s.value+1)),Do(X6,l),Do(_s,n);const a=bo();return jr(()=>[a.value,l.value,e.name],([c,d,u],[f,p,h])=>{d&&(d.instances[u]=c,p&&p!==d&&c&&c===f&&(d.leaveGuards.size||(d.leaveGuards=p.leaveGuards),d.updateGuards.size||(d.updateGuards=p.updateGuards))),c&&d&&(!p||!ar(d,p)||!f)&&(d.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=n.value,d=e.name,u=l.value,f=u&&u.components[d];if(!f)return lc(o.default,{Component:f,route:c});const p=u.props[d],h=p?p===!0?c.params:typeof p=="function"?p(c):p:null,x=Z(f,ve({},h,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(u.instances[d]=null)},ref:a}));return lc(o.default,{Component:x,route:c})||x}}});function lc(e,t){if(!e)return null;const o=e(t);return o.length===1?o[0]:o}const n5=r5;function i5(e){const t=k6(e.routes,e),o=e.parseQuery||Z6,r=e.stringifyQuery||oc,n=e.history,i=Dr(),s=Dr(),l=Dr(),a=sg(Qt);let c=Qt;Xo&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Xi.bind(null,_=>""+_),u=Xi.bind(null,q6),f=Xi.bind(null,oi);function p(_,V){let N,X;return lh(_)?(N=t.getRecordMatcher(_),X=V):X=_,t.addRoute(X,N)}function h(_){const V=t.getRecordMatcher(_);V&&t.removeRoute(V)}function m(){return t.getRoutes().map(_=>_.record)}function x(_){return!!t.getRecordMatcher(_)}function b(_,V){if(V=ve({},V||a.value),typeof _=="string"){const g=Qi(o,_,V.path),C=t.resolve({path:g.path},V),$=n.createHref(g.fullPath);return ve(g,C,{params:f(C.params),hash:oi(g.hash),redirectedFrom:void 0,href:$})}let N;if("path"in _)N=ve({},_,{path:Qi(o,_.path,V.path).path});else{const g=ve({},_.params);for(const C in g)g[C]==null&&delete g[C];N=ve({},_,{params:u(_.params)}),V.params=u(V.params)}const X=t.resolve(N,V),he=_.hash||"";X.params=d(f(X.params));const _e=s6(r,ve({},_,{hash:K6(he),path:X.path})),se=n.createHref(_e);return ve({fullPath:_e,hash:he,query:r===oc?Y6(_.query):_.query||{}},X,{redirectedFrom:void 0,href:se})}function y(_){return typeof _=="string"?Qi(o,_,a.value.path):ve({},_)}function S(_,V){if(c!==_)return cr(8,{from:V,to:_})}function v(_){return j(_)}function E(_){return v(ve(y(_),{replace:!0}))}function B(_){const V=_.matched[_.matched.length-1];if(V&&V.redirect){const{redirect:N}=V;let X=typeof N=="function"?N(_):N;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=y(X):{path:X},X.params={}),ve({query:_.query,hash:_.hash,params:"path"in X?{}:_.params},X)}}function j(_,V){const N=c=b(_),X=a.value,he=_.state,_e=_.force,se=_.replace===!0,g=B(N);if(g)return j(ve(y(g),{state:typeof g=="object"?ve({},he,g.state):he,force:_e,replace:se}),V||N);const C=N;C.redirectedFrom=V;let $;return!_e&&l6(r,X,N)&&($=cr(16,{to:C,from:X}),yo(X,X,!0,!1)),($?Promise.resolve($):D(C,X)).catch(T=>Mt(T)?Mt(T,2)?T:tt(T):ge(T,C,X)).then(T=>{if(T){if(Mt(T,2))return j(ve({replace:se},y(T.to),{state:typeof T.to=="object"?ve({},he,T.to.state):he,force:_e}),V||C)}else T=L(C,X,!0,se,he);return I(C,X,T),T})}function P(_,V){const N=S(_,V);return N?Promise.reject(N):Promise.resolve()}function D(_,V){let N;const[X,he,_e]=s5(_,V);N=Ji(X.reverse(),"beforeRouteLeave",_,V);for(const g of X)g.leaveGuards.forEach(C=>{N.push(lo(C,_,V))});const se=P.bind(null,_,V);return N.push(se),Zo(N).then(()=>{N=[];for(const g of i.list())N.push(lo(g,_,V));return N.push(se),Zo(N)}).then(()=>{N=Ji(he,"beforeRouteUpdate",_,V);for(const g of he)g.updateGuards.forEach(C=>{N.push(lo(C,_,V))});return N.push(se),Zo(N)}).then(()=>{N=[];for(const g of _.matched)if(g.beforeEnter&&!V.matched.includes(g))if(St(g.beforeEnter))for(const C of g.beforeEnter)N.push(lo(C,_,V));else N.push(lo(g.beforeEnter,_,V));return N.push(se),Zo(N)}).then(()=>(_.matched.forEach(g=>g.enterCallbacks={}),N=Ji(_e,"beforeRouteEnter",_,V),N.push(se),Zo(N))).then(()=>{N=[];for(const g of s.list())N.push(lo(g,_,V));return N.push(se),Zo(N)}).catch(g=>Mt(g,8)?g:Promise.reject(g))}function I(_,V,N){for(const X of l.list())X(_,V,N)}function L(_,V,N,X,he){const _e=S(_,V);if(_e)return _e;const se=V===Qt,g=Xo?history.state:{};N&&(X||se?n.replace(_.fullPath,ve({scroll:se&&g&&g.scroll},he)):n.push(_.fullPath,he)),a.value=_,yo(_,V,N,se),tt()}let w;function q(){w||(w=n.listen((_,V,N)=>{if(!Sn.listening)return;const X=b(_),he=B(X);if(he){j(ve(he,{replace:!0}),X).catch(Gr);return}c=X;const _e=a.value;Xo&&g6(qa(_e.fullPath,N.delta),Li()),D(X,_e).catch(se=>Mt(se,12)?se:Mt(se,2)?(j(se.to,X).then(g=>{Mt(g,20)&&!N.delta&&N.type===dn.pop&&n.go(-1,!1)}).catch(Gr),Promise.reject()):(N.delta&&n.go(-N.delta,!1),ge(se,X,_e))).then(se=>{se=se||L(X,_e,!1),se&&(N.delta&&!Mt(se,8)?n.go(-N.delta,!1):N.type===dn.pop&&Mt(se,20)&&n.go(-1,!1)),I(X,_e,se)}).catch(Gr)}))}let oe=Dr(),Ee=Dr(),fe;function ge(_,V,N){tt(_);const X=Ee.list();return X.length?X.forEach(he=>he(_,V,N)):console.error(_),Promise.reject(_)}function me(){return fe&&a.value!==Qt?Promise.resolve():new Promise((_,V)=>{oe.add([_,V])})}function tt(_){return fe||(fe=!_,q(),oe.list().forEach(([V,N])=>_?N(_):V()),oe.reset()),_}function yo(_,V,N,X){const{scrollBehavior:he}=e;if(!Xo||!he)return Promise.resolve();const _e=!N&&m6(qa(_.fullPath,0))||(X||!N)&&history.state&&history.state.scroll||null;return Zc().then(()=>he(_,V,_e)).then(se=>se&&p6(se)).catch(se=>ge(se,_,V))}const bt=_=>n.go(_);let Ve;const Go=new Set,Sn={currentRoute:a,listening:!0,addRoute:p,removeRoute:h,hasRoute:x,getRoutes:m,resolve:b,options:e,push:v,replace:E,go:bt,back:()=>bt(-1),forward:()=>bt(1),beforeEach:i.add,beforeResolve:s.add,afterEach:l.add,onError:Ee.add,isReady:me,install(_){const V=this;_.component("RouterLink",e5),_.component("RouterView",n5),_.config.globalProperties.$router=V,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>jt(a)}),Xo&&!Ve&&a.value===Qt&&(Ve=!0,v(n.location).catch(he=>{}));const N={};for(const he in Qt)N[he]=be(()=>a.value[he]);_.provide(Bi,V),_.provide(wl,vr(N)),_.provide(_s,a);const X=_.unmount;Go.add(_),_.unmount=function(){Go.delete(_),Go.size<1&&(c=Qt,w&&w(),w=null,a.value=Qt,Ve=!1,fe=!1),X()}}};return Sn}function Zo(e){return e.reduce((t,o)=>t.then(()=>o()),Promise.resolve())}function s5(e,t){const o=[],r=[],n=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const l=t.matched[s];l&&(e.matched.find(c=>ar(c,l))?r.push(l):o.push(l));const a=e.matched[s];a&&(t.matched.find(c=>ar(c,a))||n.push(a))}return[o,r,n]}function W8(){return Le(Bi)}function N8(){return Le(wl)}const l5={},a5=Object.freeze(Object.defineProperty({__proto__:null,default:l5},Symbol.toStringTag,{value:"Module"}));/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const de=BigInt(0),Ie=BigInt(1),uo=BigInt(2),Zr=BigInt(3),ac=BigInt(8),Se=Object.freeze({a:de,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:Ie,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),cc=(e,t)=>(e+t/uo)/t,Ln={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(e){const{n:t}=Se,o=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-Ie*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),n=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=o,s=BigInt("0x100000000000000000000000000000000"),l=cc(i*e,t),a=cc(-r*e,t);let c=W(e-l*o-a*n,t),d=W(-l*r-a*i,t);const u=c>s,f=d>s;if(u&&(c=t-c),f&&(d=t-d),c>s||d>s)throw new Error("splitScalarEndo: Endomorphism failed, k="+e);return{k1neg:u,k1:c,k2neg:f,k2:d}}},vt=32,dr=32,c5=32,ri=vt+1,ni=2*vt+1;function dc(e){const{a:t,b:o}=Se,r=W(e*e),n=W(r*e);return W(n+t*e+o)}const Bn=Se.a===de;class Sl extends Error{constructor(t){super(t)}}function uc(e){if(!(e instanceof ye))throw new TypeError("JacobianPoint expected")}class ye{constructor(t,o,r){this.x=t,this.y=o,this.z=r}static fromAffine(t){if(!(t instanceof ue))throw new TypeError("JacobianPoint#fromAffine: expected Point");return t.equals(ue.ZERO)?ye.ZERO:new ye(t.x,t.y,Ie)}static toAffineBatch(t){const o=p5(t.map(r=>r.z));return t.map((r,n)=>r.toAffine(o[n]))}static normalizeZ(t){return ye.toAffineBatch(t).map(ye.fromAffine)}equals(t){uc(t);const{x:o,y:r,z:n}=this,{x:i,y:s,z:l}=t,a=W(n*n),c=W(l*l),d=W(o*c),u=W(i*a),f=W(W(r*l)*c),p=W(W(s*n)*a);return d===u&&f===p}negate(){return new ye(this.x,W(-this.y),this.z)}double(){const{x:t,y:o,z:r}=this,n=W(t*t),i=W(o*o),s=W(i*i),l=t+i,a=W(uo*(W(l*l)-n-s)),c=W(Zr*n),d=W(c*c),u=W(d-uo*a),f=W(c*(a-u)-ac*s),p=W(uo*o*r);return new ye(u,f,p)}add(t){uc(t);const{x:o,y:r,z:n}=this,{x:i,y:s,z:l}=t;if(i===de||s===de)return this;if(o===de||r===de)return t;const a=W(n*n),c=W(l*l),d=W(o*c),u=W(i*a),f=W(W(r*l)*c),p=W(W(s*n)*a),h=W(u-d),m=W(p-f);if(h===de)return m===de?this.double():ye.ZERO;const x=W(h*h),b=W(h*x),y=W(d*x),S=W(m*m-b-uo*y),v=W(m*(y-S)-f*b),E=W(n*l*h);return new ye(S,v,E)}subtract(t){return this.add(t.negate())}multiplyUnsafe(t){const o=ye.ZERO;if(typeof t=="bigint"&&t===de)return o;let r=pc(t);if(r===Ie)return this;if(!Bn){let u=o,f=this;for(;r>de;)r&Ie&&(u=u.add(f)),f=f.double(),r>>=Ie;return u}let{k1neg:n,k1:i,k2neg:s,k2:l}=Ln.splitScalar(r),a=o,c=o,d=this;for(;i>de||l>de;)i&Ie&&(a=a.add(d)),l&Ie&&(c=c.add(d)),d=d.double(),i>>=Ie,l>>=Ie;return n&&(a=a.negate()),s&&(c=c.negate()),c=new ye(W(c.x*Ln.beta),c.y,c.z),a.add(c)}precomputeWindow(t){const o=Bn?128/t+1:256/t+1,r=[];let n=this,i=n;for(let s=0;s<o;s++){i=n,r.push(i);for(let l=1;l<2**(t-1);l++)i=i.add(n),r.push(i);n=i.double()}return r}wNAF(t,o){!o&&this.equals(ye.BASE)&&(o=ue.BASE);const r=o&&o._WINDOW_SIZE||1;if(256%r)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let n=o&&As.get(o);n||(n=this.precomputeWindow(r),o&&r!==1&&(n=ye.normalizeZ(n),As.set(o,n)));let i=ye.ZERO,s=ye.BASE;const l=1+(Bn?128/r:256/r),a=2**(r-1),c=BigInt(2**r-1),d=2**r,u=BigInt(r);for(let f=0;f<l;f++){const p=f*a;let h=Number(t&c);t>>=u,h>a&&(h-=d,t+=Ie);const m=p,x=p+Math.abs(h)-1,b=f%2!==0,y=h<0;h===0?s=s.add(Dn(b,n[m])):i=i.add(Dn(y,n[x]))}return{p:i,f:s}}multiply(t,o){let r=pc(t),n,i;if(Bn){const{k1neg:s,k1:l,k2neg:a,k2:c}=Ln.splitScalar(r);let{p:d,f:u}=this.wNAF(l,o),{p:f,f:p}=this.wNAF(c,o);d=Dn(s,d),f=Dn(a,f),f=new ye(W(f.x*Ln.beta),f.y,f.z),n=d.add(f),i=u.add(p)}else{const{p:s,f:l}=this.wNAF(r,o);n=s,i=l}return ye.normalizeZ([n,i])[0]}toAffine(t){const{x:o,y:r,z:n}=this,i=this.equals(ye.ZERO);t==null&&(t=i?ac:_r(n));const s=t,l=W(s*s),a=W(l*s),c=W(o*l),d=W(r*a),u=W(n*s);if(i)return ue.ZERO;if(u!==Ie)throw new Error("invZ was invalid");return new ue(c,d)}}ye.BASE=new ye(Se.Gx,Se.Gy,Ie);ye.ZERO=new ye(de,Ie,de);function Dn(e,t){const o=t.negate();return e?o:t}const As=new WeakMap;class ue{constructor(t,o){this.x=t,this.y=o}_setWindowSize(t){this._WINDOW_SIZE=t,As.delete(this)}hasEvenY(){return this.y%uo===de}static fromCompressedHex(t){const o=t.length===32,r=st(o?t:t.subarray(1));if(!Kn(r))throw new Error("Point is not on curve");const n=dc(r);let i=h5(n);const s=(i&Ie)===Ie;o?s&&(i=W(-i)):(t[0]&1)===1!==s&&(i=W(-i));const l=new ue(r,i);return l.assertValidity(),l}static fromUncompressedHex(t){const o=st(t.subarray(1,vt+1)),r=st(t.subarray(vt+1,vt*2+1)),n=new ue(o,r);return n.assertValidity(),n}static fromHex(t){const o=Lt(t),r=o.length,n=o[0];if(r===vt)return this.fromCompressedHex(o);if(r===ri&&(n===2||n===3))return this.fromCompressedHex(o);if(r===ni&&n===4)return this.fromUncompressedHex(o);throw new Error(`Point.fromHex: received invalid point. Expected 32-${ri} compressed bytes or ${ni} uncompressed bytes, not ${r}`)}static fromPrivateKey(t){return ue.BASE.multiply(Fo(t))}static fromSignature(t,o,r){const{r:n,s:i}=gh(o);if(![0,1,2,3].includes(r))throw new Error("Cannot recover: invalid recovery bit");const s=$l(Lt(t)),{n:l}=Se,a=r===2||r===3?n+l:n,c=_r(a,l),d=W(-s*c,l),u=W(i*c,l),f=r&1?"03":"02",p=ue.fromHex(f+po(a)),h=ue.BASE.multiplyAndAddUnsafe(p,d,u);if(!h)throw new Error("Cannot recover signature: point at infinify");return h.assertValidity(),h}toRawBytes(t=!1){return go(this.toHex(t))}toHex(t=!1){const o=po(this.x);return t?`${this.hasEvenY()?"02":"03"}${o}`:`04${o}${po(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const t="Point is not on elliptic curve",{x:o,y:r}=this;if(!Kn(o)||!Kn(r))throw new Error(t);const n=W(r*r),i=dc(o);if(W(n-i)!==de)throw new Error(t)}equals(t){return this.x===t.x&&this.y===t.y}negate(){return new ue(this.x,W(-this.y))}double(){return ye.fromAffine(this).double().toAffine()}add(t){return ye.fromAffine(this).add(ye.fromAffine(t)).toAffine()}subtract(t){return this.add(t.negate())}multiply(t){return ye.fromAffine(this).multiply(t,this).toAffine()}multiplyAndAddUnsafe(t,o,r){const n=ye.fromAffine(this),i=o===de||o===Ie||this!==ue.BASE?n.multiplyUnsafe(o):n.multiply(o),s=ye.fromAffine(t).multiplyUnsafe(r),l=i.add(s);return l.equals(ye.ZERO)?void 0:l.toAffine()}}ue.BASE=new ue(Se.Gx,Se.Gy);ue.ZERO=new ue(de,de);function fc(e){return Number.parseInt(e[0],16)>=8?"00"+e:e}function hc(e){if(e.length<2||e[0]!==2)throw new Error(`Invalid signature integer tag: ${ur(e)}`);const t=e[1],o=e.subarray(2,t+2);if(!t||o.length!==t)throw new Error("Invalid signature integer: wrong length");if(o[0]===0&&o[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:st(o),left:e.subarray(t+2)}}function d5(e){if(e.length<2||e[0]!=48)throw new Error(`Invalid signature tag: ${ur(e)}`);if(e[1]!==e.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:o}=hc(e.subarray(2)),{data:r,left:n}=hc(o);if(n.length)throw new Error(`Invalid signature: left bytes after parsing: ${ur(n)}`);return{r:t,s:r}}class Wt{constructor(t,o){this.r=t,this.s=o,this.assertValidity()}static fromCompact(t){const o=t instanceof Uint8Array,r="Signature.fromCompact";if(typeof t!="string"&&!o)throw new TypeError(`${r}: Expected string or Uint8Array`);const n=o?ur(t):t;if(n.length!==128)throw new Error(`${r}: Expected 64-byte hex`);return new Wt(ii(n.slice(0,64)),ii(n.slice(64,128)))}static fromDER(t){const o=t instanceof Uint8Array;if(typeof t!="string"&&!o)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r,s:n}=d5(o?t:go(t));return new Wt(r,n)}static fromHex(t){return this.fromDER(t)}assertValidity(){const{r:t,s:o}=this;if(!hr(t))throw new Error("Invalid Signature: r must be 0 < r < n");if(!hr(o))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const t=Se.n>>Ie;return this.s>t}normalizeS(){return this.hasHighS()?new Wt(this.r,W(-this.s,Se.n)):this}toDERRawBytes(){return go(this.toDERHex())}toDERHex(){const t=fc(Rr(this.s)),o=fc(Rr(this.r)),r=t.length/2,n=o.length/2,i=Rr(r),s=Rr(n);return`30${Rr(n+r+4)}02${s}${o}02${i}${t}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return go(this.toCompactHex())}toCompactHex(){return po(this.r)+po(this.s)}}function co(...e){if(!e.every(r=>r instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((r,n)=>r+n.length,0),o=new Uint8Array(t);for(let r=0,n=0;r<e.length;r++){const i=e[r];o.set(i,n),n+=i.length}return o}const u5=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function ur(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");let t="";for(let o=0;o<e.length;o++)t+=u5[e[o]];return t}const f5=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function po(e){if(typeof e!="bigint")throw new Error("Expected bigint");if(!(de<=e&&e<f5))throw new Error("Expected number 0 <= n < 2^256");return e.toString(16).padStart(64,"0")}function fr(e){const t=go(po(e));if(t.length!==32)throw new Error("Error: expected 32 bytes");return t}function Rr(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function ii(e){if(typeof e!="string")throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt(`0x${e}`)}function go(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+e.length);const t=new Uint8Array(e.length/2);for(let o=0;o<t.length;o++){const r=o*2,n=e.slice(r,r+2),i=Number.parseInt(n,16);if(Number.isNaN(i)||i<0)throw new Error("Invalid byte sequence");t[o]=i}return t}function st(e){return ii(ur(e))}function Lt(e){return e instanceof Uint8Array?Uint8Array.from(e):go(e)}function pc(e){if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)return BigInt(e);if(typeof e=="bigint"&&hr(e))return e;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function W(e,t=Se.P){const o=e%t;return o>=de?o:t+o}function dt(e,t){const{P:o}=Se;let r=e;for(;t-- >de;)r*=r,r%=o;return r}function h5(e){const{P:t}=Se,o=BigInt(6),r=BigInt(11),n=BigInt(22),i=BigInt(23),s=BigInt(44),l=BigInt(88),a=e*e*e%t,c=a*a*e%t,d=dt(c,Zr)*c%t,u=dt(d,Zr)*c%t,f=dt(u,uo)*a%t,p=dt(f,r)*f%t,h=dt(p,n)*p%t,m=dt(h,s)*h%t,x=dt(m,l)*m%t,b=dt(x,s)*h%t,y=dt(b,Zr)*c%t,S=dt(y,i)*p%t,v=dt(S,o)*a%t,E=dt(v,uo);if(E*E%t!==e)throw new Error("Cannot find square root");return E}function _r(e,t=Se.P){if(e===de||t<=de)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let o=W(e,t),r=t,n=de,i=Ie;for(;o!==de;){const l=r/o,a=r%o,c=n-i*l;r=o,o=a,n=i,i=c}if(r!==Ie)throw new Error("invert: does not exist");return W(n,t)}function p5(e,t=Se.P){const o=new Array(e.length),r=e.reduce((i,s,l)=>s===de?i:(o[l]=i,W(i*s,t)),Ie),n=_r(r,t);return e.reduceRight((i,s,l)=>s===de?i:(o[l]=W(i*o[l],t),W(i*s,t)),n),o}function g5(e){const t=e.length*8-dr*8,o=st(e);return t>0?o>>BigInt(t):o}function $l(e,t=!1){const o=g5(e);if(t)return o;const{n:r}=Se;return o>=r?o-r:o}let rr,Yr;class m5{constructor(t,o){if(this.hashLen=t,this.qByteLen=o,typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof o!="number"||o<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(t).fill(1),this.k=new Uint8Array(t).fill(0),this.counter=0}hmac(...t){return ae.hmacSha256(this.k,...t)}hmacSync(...t){return Yr(this.k,...t)}checkSync(){if(typeof Yr!="function")throw new Sl("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(t=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),t),this.v=await this.hmac(this.v),t.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),t),this.v=await this.hmac(this.v))}reseedSync(t=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),t),this.v=this.hmacSync(this.v),t.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),t),this.v=this.hmacSync(this.v))}async generate(){this.incr();let t=0;const o=[];for(;t<this.qByteLen;){this.v=await this.hmac(this.v);const r=this.v.slice();o.push(r),t+=this.v.length}return co(...o)}generateSync(){this.checkSync(),this.incr();let t=0;const o=[];for(;t<this.qByteLen;){this.v=this.hmacSync(this.v);const r=this.v.slice();o.push(r),t+=this.v.length}return co(...o)}}function hr(e){return de<e&&e<Se.n}function Kn(e){return de<e&&e<Se.P}function b5(e,t,o,r=!0){const{n}=Se,i=$l(e,!0);if(!hr(i))return;const s=_r(i,n),l=ue.BASE.multiply(i),a=W(l.x,n);if(a===de)return;const c=W(s*W(t+o*a,n),n);if(c===de)return;let d=new Wt(a,c),u=(l.x===d.r?0:2)|Number(l.y&Ie);return r&&d.hasHighS()&&(d=d.normalizeS(),u^=1),{sig:d,recovery:u}}function Fo(e){let t;if(typeof e=="bigint")t=e;else if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)t=BigInt(e);else if(typeof e=="string"){if(e.length!==2*dr)throw new Error("Expected 32 bytes of private key");t=ii(e)}else if(e instanceof Uint8Array){if(e.length!==dr)throw new Error("Expected 32 bytes of private key");t=st(e)}else throw new TypeError("Expected valid private key");if(!hr(t))throw new Error("Expected private key: 0 < key < n");return t}function El(e){return e instanceof ue?(e.assertValidity(),e):ue.fromHex(e)}function gh(e){if(e instanceof Wt)return e.assertValidity(),e;try{return Wt.fromDER(e)}catch{return Wt.fromCompact(e)}}function x5(e,t=!1){return ue.fromPrivateKey(e).toRawBytes(t)}function gc(e){const t=e instanceof Uint8Array,o=typeof e=="string",r=(t||o)&&e.length;return t?r===ri||r===ni:o?r===ri*2||r===ni*2:e instanceof ue}function mh(e,t,o=!1){if(gc(e))throw new TypeError("getSharedSecret: first arg must be private key");if(!gc(t))throw new TypeError("getSharedSecret: second arg must be public key");const r=El(t);return r.assertValidity(),r.multiply(Fo(e)).toRawBytes(o)}function bh(e){const t=e.length>vt?e.slice(0,vt):e;return st(t)}function C5(e){const t=bh(e),o=W(t,Se.n);return xh(o<de?t:o)}function xh(e){return fr(e)}function y5(e,t,o){if(e==null)throw new Error(`sign: expected valid message hash, not "${e}"`);const r=Lt(e),n=Fo(t),i=[xh(n),C5(r)];if(o!=null){o===!0&&(o=ae.randomBytes(vt));const a=Lt(o);if(a.length!==vt)throw new Error(`sign: Expected ${vt} bytes of extra data`);i.push(a)}const s=co(...i),l=bh(r);return{seed:s,m:l,d:n}}function v5(e,t){const{sig:o,recovery:r}=e,{der:n,recovered:i}=Object.assign({canonical:!0,der:!0},t),s=n?o.toDERRawBytes():o.toCompactRawBytes();return i?[s,r]:s}function w5(e,t,o={}){const{seed:r,m:n,d:i}=y5(e,t,o.extraEntropy),s=new m5(c5,dr);s.reseedSync(r);let l;for(;!(l=b5(s.generateSync(),n,i,o.canonical));)s.reseedSync();return v5(l,o)}const S5={strict:!0};function $5(e,t,o,r=S5){let n;try{n=gh(e),t=Lt(t)}catch{return!1}const{r:i,s}=n;if(r.strict&&n.hasHighS())return!1;const l=$l(t);let a;try{a=El(o)}catch{return!1}const{n:c}=Se,d=_r(s,c),u=W(l*d,c),f=W(i*d,c),p=ue.BASE.multiplyAndAddUnsafe(a,u,f);return p?W(p.x,c)===i:!1}function si(e){return W(st(e),Se.n)}class pr{constructor(t,o){this.r=t,this.s=o,this.assertValidity()}static fromHex(t){const o=Lt(t);if(o.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${o.length}`);const r=st(o.subarray(0,32)),n=st(o.subarray(32,64));return new pr(r,n)}assertValidity(){const{r:t,s:o}=this;if(!Kn(t)||!hr(o))throw new Error("Invalid signature")}toHex(){return po(this.r)+po(this.s)}toRawBytes(){return go(this.toHex())}}function E5(e){return ue.fromPrivateKey(e).toRawX()}class Ch{constructor(t,o,r=ae.randomBytes()){if(t==null)throw new TypeError(`sign: Expected valid message, not "${t}"`);this.m=Lt(t);const{x:n,scalar:i}=this.getScalar(Fo(o));if(this.px=n,this.d=i,this.rand=Lt(r),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(t){const o=ue.fromPrivateKey(t),r=o.hasEvenY()?t:Se.n-t;return{point:o,scalar:r,x:o.toRawX()}}initNonce(t,o){return fr(t^st(o))}finalizeNonce(t){const o=W(st(t),Se.n);if(o===de)throw new Error("sign: Creation of signature failed. k is zero");const{point:r,x:n,scalar:i}=this.getScalar(o);return{R:r,rx:n,k:i}}finalizeSig(t,o,r,n){return new pr(t.x,W(o+r*n,Se.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:t,d:o,px:r,rand:n}=this,i=ae.taggedHash,s=this.initNonce(o,await i(ao.aux,n)),{R:l,rx:a,k:c}=this.finalizeNonce(await i(ao.nonce,s,r,t)),d=si(await i(ao.challenge,a,r,t)),u=this.finalizeSig(l,c,d,o);return await wh(u,t,r)||this.error(),u}calcSync(){const{m:t,d:o,px:r,rand:n}=this,i=ae.taggedHashSync,s=this.initNonce(o,i(ao.aux,n)),{R:l,rx:a,k:c}=this.finalizeNonce(i(ao.nonce,s,r,t)),d=si(i(ao.challenge,a,r,t)),u=this.finalizeSig(l,c,d,o);return Sh(u,t,r)||this.error(),u}}async function T5(e,t,o){return new Ch(e,t,o).calc()}function H5(e,t,o){return new Ch(e,t,o).calcSync()}function yh(e,t,o){const r=e instanceof pr,n=r?e:pr.fromHex(e);return r&&n.assertValidity(),{...n,m:Lt(t),P:El(o)}}function vh(e,t,o,r){const n=ue.BASE.multiplyAndAddUnsafe(t,Fo(o),W(-r,Se.n));return!(!n||!n.hasEvenY()||n.x!==e)}async function wh(e,t,o){try{const{r,s:n,m:i,P:s}=yh(e,t,o),l=si(await ae.taggedHash(ao.challenge,fr(r),s.toRawX(),i));return vh(r,s,n,l)}catch{return!1}}function Sh(e,t,o){try{const{r,s:n,m:i,P:s}=yh(e,t,o),l=si(ae.taggedHashSync(ao.challenge,fr(r),s.toRawX(),i));return vh(r,s,n,l)}catch(r){if(r instanceof Sl)throw r;return!1}}const xn={Signature:pr,getPublicKey:E5,sign:T5,verify:wh,signSync:H5,verifySync:Sh};ue.BASE._setWindowSize(8);const rt={node:a5,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},ao={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},Rn={},ae={bytesToHex:ur,hexToBytes:go,concatBytes:co,mod:W,invert:_r,isValidPrivateKey(e){try{return Fo(e),!0}catch{return!1}},_bigintTo32Bytes:fr,_normalizePrivateKey:Fo,hashToPrivateKey:e=>{e=Lt(e);const t=dr+8;if(e.length<t||e.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const o=W(st(e),Se.n-Ie)+Ie;return fr(o)},randomBytes:(e=32)=>{if(rt.web)return rt.web.getRandomValues(new Uint8Array(e));if(rt.node){const{randomBytes:t}=rt.node;return Uint8Array.from(t(e))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>ae.hashToPrivateKey(ae.randomBytes(dr+8)),precompute(e=8,t=ue.BASE){const o=t===ue.BASE?t:new ue(t.x,t.y);return o._setWindowSize(e),o.multiply(Zr),o},sha256:async(...e)=>{if(rt.web){const t=await rt.web.subtle.digest("SHA-256",co(...e));return new Uint8Array(t)}else if(rt.node){const{createHash:t}=rt.node,o=t("sha256");return e.forEach(r=>o.update(r)),Uint8Array.from(o.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(e,...t)=>{if(rt.web){const o=await rt.web.subtle.importKey("raw",e,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),r=co(...t),n=await rt.web.subtle.sign("HMAC",o,r);return new Uint8Array(n)}else if(rt.node){const{createHmac:o}=rt.node,r=o("sha256",e);return t.forEach(n=>r.update(n)),Uint8Array.from(r.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(e,...t)=>{let o=Rn[e];if(o===void 0){const r=await ae.sha256(Uint8Array.from(e,n=>n.charCodeAt(0)));o=co(r,r),Rn[e]=o}return ae.sha256(o,...t)},taggedHashSync:(e,...t)=>{if(typeof rr!="function")throw new Sl("sha256Sync is undefined, you need to set it");let o=Rn[e];if(o===void 0){const r=rr(Uint8Array.from(e,n=>n.charCodeAt(0)));o=co(r,r),Rn[e]=o}return rr(o,...t)},_JacobianPoint:ye};Object.defineProperties(ae,{sha256Sync:{configurable:!1,get(){return rr},set(e){rr||(rr=e)}},hmacSha256Sync:{configurable:!1,get(){return Yr},set(e){Yr||(Yr=e)}}});const mc={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0};/*! noble-hashes - MIT License (c) 2021 Paul Miller (paulmillr.com) */const es=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),Pt=(e,t)=>e<<32-t|e>>>t,P5=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!P5)throw new Error("Non little-endian hardware is not supported");Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));(()=>{const e=typeof module<"u"&&typeof module.require=="function"&&module.require.bind(module);try{if(e){const{setImmediate:t}=e("timers");return()=>new Promise(o=>t(o))}}catch{}return()=>new Promise(t=>setTimeout(t,0))})();function I5(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function Tl(e){if(typeof e=="string"&&(e=I5(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function bc(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function _5(e){if(typeof e!="function"||typeof e.init!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");bc(e.outputLen),bc(e.blockLen)}class ks{clone(){return this._cloneInto()}}function A5(e){const t=r=>e().update(Tl(r)).digest(),o=e();return t.outputLen=o.outputLen,t.blockLen=o.blockLen,t.create=()=>e(),t.init=t.create,t}function k5(e=32){if(mc.web)return mc.web.getRandomValues(new Uint8Array(e));throw new Error("The environment doesn't have randomBytes function")}function L5(e,t,o,r){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,o,r);const n=BigInt(32),i=BigInt(4294967295),s=Number(o>>n&i),l=Number(o&i),a=r?4:0,c=r?0:4;e.setUint32(t+a,s,r),e.setUint32(t+c,l,r)}class B5 extends ks{constructor(t,o,r,n){super(),this.blockLen=t,this.outputLen=o,this.padOffset=r,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=es(this.buffer)}update(t){if(this.destroyed)throw new Error("instance is destroyed");const{view:o,buffer:r,blockLen:n,finished:i}=this;if(i)throw new Error("digest() was already called");t=Tl(t);const s=t.length;for(let l=0;l<s;){const a=Math.min(n-this.pos,s-l);if(a===n){const c=es(t);for(;n<=s-l;l+=n)this.process(c,l);continue}r.set(t.subarray(l,l+a),this.pos),this.pos+=a,l+=a,this.pos===n&&(this.process(o,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){if(this.destroyed)throw new Error("instance is destroyed");if(!(t instanceof Uint8Array)||t.length<this.outputLen)throw new Error("_Sha2: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0;const{buffer:o,view:r,blockLen:n,isLE:i}=this;let{pos:s}=this;o[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>n-s&&(this.process(r,0),s=0);for(let a=s;a<n;a++)o[a]=0;L5(r,n-8,BigInt(this.length*8),i),this.process(r,0);const l=es(t);this.get().forEach((a,c)=>l.setUint32(4*c,a,i))}digest(){const{buffer:t,outputLen:o}=this;this.digestInto(t);const r=t.slice(0,o);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:o,buffer:r,length:n,finished:i,destroyed:s,pos:l}=this;return t.length=n,t.pos=l,t.finished=i,t.destroyed=s,n%o&&t.buffer.set(r),t}}const D5=(e,t,o)=>e&t^~e&o,R5=(e,t,o)=>e&t^e&o^t&o,M5=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Jt=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),eo=new Uint32Array(64);class O5 extends B5{constructor(){super(64,32,8,!1),this.A=Jt[0]|0,this.B=Jt[1]|0,this.C=Jt[2]|0,this.D=Jt[3]|0,this.E=Jt[4]|0,this.F=Jt[5]|0,this.G=Jt[6]|0,this.H=Jt[7]|0}get(){const{A:t,B:o,C:r,D:n,E:i,F:s,G:l,H:a}=this;return[t,o,r,n,i,s,l,a]}set(t,o,r,n,i,s,l,a){this.A=t|0,this.B=o|0,this.C=r|0,this.D=n|0,this.E=i|0,this.F=s|0,this.G=l|0,this.H=a|0}process(t,o){for(let u=0;u<16;u++,o+=4)eo[u]=t.getUint32(o,!1);for(let u=16;u<64;u++){const f=eo[u-15],p=eo[u-2],h=Pt(f,7)^Pt(f,18)^f>>>3,m=Pt(p,17)^Pt(p,19)^p>>>10;eo[u]=m+eo[u-7]+h+eo[u-16]|0}let{A:r,B:n,C:i,D:s,E:l,F:a,G:c,H:d}=this;for(let u=0;u<64;u++){const f=Pt(l,6)^Pt(l,11)^Pt(l,25),p=d+f+D5(l,a,c)+M5[u]+eo[u]|0,m=(Pt(r,2)^Pt(r,13)^Pt(r,22))+R5(r,n,i)|0;d=c,c=a,a=l,l=s+p|0,s=i,i=n,n=r,r=p+m|0}r=r+this.A|0,n=n+this.B|0,i=i+this.C|0,s=s+this.D|0,l=l+this.E|0,a=a+this.F|0,c=c+this.G|0,d=d+this.H|0,this.set(r,n,i,s,l,a,c,d)}roundClean(){eo.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const Cn=A5(()=>new O5);/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Co(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function $t(...e){const t=(n,i)=>s=>n(i(s)),o=Array.from(e).reverse().reduce((n,i)=>n?t(n,i.encode):i.encode,void 0),r=e.reduce((n,i)=>n?t(n,i.decode):i.decode,void 0);return{encode:o,decode:r}}function Bt(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(o=>{if(Co(o),o<0||o>=e.length)throw new Error(`Digit index outside alphabet: ${o} (alphabet: ${e.length})`);return e[o]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(o=>{if(typeof o!="string")throw new Error(`alphabet.decode: not string element=${o}`);const r=e.indexOf(o);if(r===-1)throw new Error(`Unknown letter: "${o}". Allowed: ${e}`);return r})}}}function Dt(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let o of t)if(typeof o!="string")throw new Error(`join.encode: non-string input=${o}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function yn(e,t="="){if(Co(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(o){if(!Array.isArray(o)||o.length&&typeof o[0]!="string")throw new Error("padding.encode input should be array of strings");for(let r of o)if(typeof r!="string")throw new Error(`padding.encode: non-string input=${r}`);for(;o.length*e%8;)o.push(t);return o},decode(o){if(!Array.isArray(o)||o.length&&typeof o[0]!="string")throw new Error("padding.encode input should be array of strings");for(let n of o)if(typeof n!="string")throw new Error(`padding.decode: non-string input=${n}`);let r=o.length;if(r*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;r>0&&o[r-1]===t;r--)if(!((r-1)*e%8))throw new Error("Invalid padding: string has too much padding");return o.slice(0,r)}}}function $h(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function xc(e,t,o){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(o<2)throw new Error(`convertRadix: wrong to=${o}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let r=0;const n=[],i=Array.from(e);for(i.forEach(s=>{if(Co(s),s<0||s>=t)throw new Error(`Wrong integer: ${s}`)});;){let s=0,l=!0;for(let a=r;a<i.length;a++){const c=i[a],d=t*s+c;if(!Number.isSafeInteger(d)||t*s/t!==s||d-c!==t*s)throw new Error("convertRadix: carry overflow");if(s=d%o,i[a]=Math.floor(d/o),!Number.isSafeInteger(i[a])||i[a]*o+s!==d)throw new Error("convertRadix: carry overflow");if(l)i[a]?l=!1:r=a;else continue}if(n.push(s),l)break}for(let s=0;s<e.length-1&&e[s]===0;s++)n.push(0);return n.reverse()}const Eh=(e,t)=>t?Eh(t,e%t):e,li=(e,t)=>e+(t-Eh(e,t));function Ls(e,t,o,r){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(o<=0||o>32)throw new Error(`convertRadix2: wrong to=${o}`);if(li(t,o)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${o} carryBits=${li(t,o)}`);let n=0,i=0;const s=2**o-1,l=[];for(const a of e){if(Co(a),a>=2**t)throw new Error(`convertRadix2: invalid data word=${a} from=${t}`);if(n=n<<t|a,i+t>32)throw new Error(`convertRadix2: carry overflow pos=${i} from=${t}`);for(i+=t;i>=o;i-=o)l.push((n>>i-o&s)>>>0);n&=2**i-1}if(n=n<<o-i&s,!r&&i>=t)throw new Error("Excess padding");if(!r&&n)throw new Error(`Non-zero padding: ${n}`);return r&&i>0&&l.push(n>>>0),l}function Th(e){return Co(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return xc(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(xc(t,e,2**8))}}}function Zt(e,t=!1){if(Co(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(li(8,e)>32||li(e,8)>32)throw new Error("radix2: carry overflow");return{encode:o=>{if(!(o instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return Ls(Array.from(o),8,e,!t)},decode:o=>{if(!Array.isArray(o)||o.length&&typeof o[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(Ls(o,e,8,t))}}}function Cc(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function Hh(e,t){if(Co(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(o){if(!(o instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const r=t(o).slice(0,e),n=new Uint8Array(o.length+e);return n.set(o),n.set(r,o.length),n},decode(o){if(!(o instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const r=o.slice(0,-e),n=t(r).slice(0,e),i=o.slice(-e);for(let s=0;s<e;s++)if(n[s]!==i[s])throw new Error("Invalid checksum");return r}}}const z5={alphabet:Bt,chain:$t,checksum:Hh,radix:Th,radix2:Zt,join:Dt,padding:yn},Ph=$t(Zt(4),Bt("0123456789ABCDEF"),Dt("")),Ih=$t(Zt(5),Bt("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),yn(5),Dt("")),F5=$t(Zt(5),Bt("0123456789ABCDEFGHIJKLMNOPQRSTUV"),yn(5),Dt("")),j5=$t(Zt(5),Bt("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Dt(""),$h(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),gr=$t(Zt(6),Bt("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),yn(6),Dt("")),_h=$t(Zt(6),Bt("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),yn(6),Dt("")),Hl=e=>$t(Th(58),Bt(e),Dt("")),un=Hl("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),W5=Hl("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),N5=Hl("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),yc=[0,2,3,5,6,7,9,10,11],Ah={encode(e){let t="";for(let o=0;o<e.length;o+=8){const r=e.subarray(o,o+8);t+=un.encode(r).padStart(yc[r.length],"1")}return t},decode(e){let t=[];for(let o=0;o<e.length;o+=11){const r=e.slice(o,o+11),n=yc.indexOf(r.length),i=un.decode(r);for(let s=0;s<i.length-n;s++)if(i[s]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(i.slice(i.length-n)))}return Uint8Array.from(t)}},kh=e=>$t(Hh(4,t=>e(e(t))),un),Bs=$t(Bt("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Dt("")),vc=[996825010,642813549,513874426,1027748829,705979059];function Mr(e){const t=e>>25;let o=(e&33554431)<<5;for(let r=0;r<vc.length;r++)(t>>r&1)===1&&(o^=vc[r]);return o}function wc(e,t,o=1){const r=e.length;let n=1;for(let i=0;i<r;i++){const s=e.charCodeAt(i);if(s<33||s>126)throw new Error(`Invalid prefix (${e})`);n=Mr(n)^s>>5}n=Mr(n);for(let i=0;i<r;i++)n=Mr(n)^e.charCodeAt(i)&31;for(let i of t)n=Mr(n)^i;for(let i=0;i<6;i++)n=Mr(n);return n^=o,Bs.encode(Ls([n%2**30],30,5,!1))}function Lh(e){const t=e==="bech32"?1:734539939,o=Zt(5),r=o.decode,n=o.encode,i=Cc(r);function s(d,u,f=90){if(typeof d!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof d}`);if(!Array.isArray(u)||u.length&&typeof u[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof u}`);const p=d.length+7+u.length;if(f!==!1&&p>f)throw new TypeError(`Length ${p} exceeds limit ${f}`);return d=d.toLowerCase(),`${d}1${Bs.encode(u)}${wc(d,u,t)}`}function l(d,u=90){if(typeof d!="string")throw new Error(`bech32.decode input should be string, not ${typeof d}`);if(d.length<8||u!==!1&&d.length>u)throw new TypeError(`Wrong string length: ${d.length} (${d}). Expected (8..${u})`);const f=d.toLowerCase();if(d!==f&&d!==d.toUpperCase())throw new Error("String must be lowercase or uppercase");d=f;const p=d.lastIndexOf("1");if(p===0||p===-1)throw new Error('Letter "1" must be present between prefix and data only');const h=d.slice(0,p),m=d.slice(p+1);if(m.length<6)throw new Error("Data must be at least 6 characters long");const x=Bs.decode(m).slice(0,-6),b=wc(h,x,t);if(!m.endsWith(b))throw new Error(`Invalid checksum in ${d}: expected "${b}"`);return{prefix:h,words:x}}const a=Cc(l);function c(d){const{prefix:u,words:f}=l(d,!1);return{prefix:u,words:f,bytes:r(f)}}return{encode:s,decode:l,decodeToBytes:c,decodeUnsafe:a,fromWords:r,fromWordsUnsafe:i,toWords:n}}const Kt=Lh("bech32"),U5=Lh("bech32m"),Bh={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},Dh=$t(Zt(4),Bt("0123456789abcdef"),Dt(""),$h(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),fn={utf8:Bh,hex:Dh,base16:Ph,base32:Ih,base64:gr,base64url:_h,base58:un,base58xmr:Ah},Rh=`Invalid encoding type. Available types: ${Object.keys(fn).join(", ")}`,Mh=(e,t)=>{if(typeof e!="string"||!fn.hasOwnProperty(e))throw new TypeError(Rh);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return fn[e].encode(t)},K5=Mh,Oh=(e,t)=>{if(!fn.hasOwnProperty(e))throw new TypeError(Rh);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return fn[e].decode(t)},V5=Oh,G5=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Co,utils:z5,base16:Ph,base32:Ih,base32hex:F5,base32crockford:j5,base64:gr,base64url:_h,base58:un,base58flickr:W5,base58xrp:N5,base58xmr:Ah,base58check:kh,bech32:Kt,bech32m:U5,utf8:Bh,hex:Dh,bytesToString:Mh,str:K5,stringToBytes:Oh,bytes:V5},Symbol.toStringTag,{value:"Module"}));var Pl={};Object.defineProperty(Pl,"__esModule",{value:!0});var Il=Pl.wordlist=void 0;Il=Pl.wordlist=`abandon
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
`);var it={},De={};Object.defineProperty(De,"__esModule",{value:!0});De.output=De.exists=De.hash=Qo=De.bytes=De.bool=De.number=void 0;function ai(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}De.number=ai;function zh(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}De.bool=zh;function _l(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var Qo=De.bytes=_l;function Fh(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");ai(e.outputLen),ai(e.blockLen)}De.hash=Fh;function jh(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}De.exists=jh;function Wh(e,t){_l(e);const o=t.outputLen;if(e.length<o)throw new Error(`digestInto() expects output buffer of length at least ${o}`)}De.output=Wh;const q5={number:ai,bool:zh,bytes:_l,hash:Fh,exists:jh,output:Wh};De.default=q5;var mr={},Nh={},Oe={},Di={};Object.defineProperty(Di,"__esModule",{value:!0});Di.crypto=void 0;Di.crypto={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0};(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=Di,o=v=>new Uint8Array(v.buffer,v.byteOffset,v.byteLength);e.u8=o;const r=v=>new Uint32Array(v.buffer,v.byteOffset,Math.floor(v.byteLength/4));e.u32=r;const n=v=>new DataView(v.buffer,v.byteOffset,v.byteLength);e.createView=n;const i=(v,E)=>v<<32-E|v>>>E;if(e.rotr=i,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const s=Array.from({length:256},(v,E)=>E.toString(16).padStart(2,"0"));function l(v){if(!(v instanceof Uint8Array))throw new Error("Uint8Array expected");let E="";for(let B=0;B<v.length;B++)E+=s[v[B]];return E}e.bytesToHex=l;function a(v){if(typeof v!="string")throw new TypeError("hexToBytes: expected string, got "+typeof v);if(v.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const E=new Uint8Array(v.length/2);for(let B=0;B<E.length;B++){const j=B*2,P=v.slice(j,j+2),D=Number.parseInt(P,16);if(Number.isNaN(D)||D<0)throw new Error("Invalid byte sequence");E[B]=D}return E}e.hexToBytes=a;const c=async()=>{};e.nextTick=c;async function d(v,E,B){let j=Date.now();for(let P=0;P<v;P++){B(P);const D=Date.now()-j;D>=0&&D<E||(await(0,e.nextTick)(),j+=D)}}e.asyncLoop=d;function u(v){if(typeof v!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof v}`);return new TextEncoder().encode(v)}e.utf8ToBytes=u;function f(v){if(typeof v=="string"&&(v=u(v)),!(v instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof v})`);return v}e.toBytes=f;function p(...v){if(!v.every(j=>j instanceof Uint8Array))throw new Error("Uint8Array list expected");if(v.length===1)return v[0];const E=v.reduce((j,P)=>j+P.length,0),B=new Uint8Array(E);for(let j=0,P=0;j<v.length;j++){const D=v[j];B.set(D,P),P+=D.length}return B}e.concatBytes=p;class h{clone(){return this._cloneInto()}}e.Hash=h;const m=v=>Object.prototype.toString.call(v)==="[object Object]"&&v.constructor===Object;function x(v,E){if(E!==void 0&&(typeof E!="object"||!m(E)))throw new TypeError("Options should be object or undefined");return Object.assign(v,E)}e.checkOpts=x;function b(v){const E=j=>v().update(f(j)).digest(),B=v();return E.outputLen=B.outputLen,E.blockLen=B.blockLen,E.create=()=>v(),E}e.wrapConstructor=b;function y(v){const E=(j,P)=>v(P).update(f(j)).digest(),B=v({});return E.outputLen=B.outputLen,E.blockLen=B.blockLen,E.create=j=>v(j),E}e.wrapConstructorWithOpts=y;function S(v=32){if(t.crypto.web)return t.crypto.web.getRandomValues(new Uint8Array(v));if(t.crypto.node)return new Uint8Array(t.crypto.node.randomBytes(v).buffer);throw new Error("The environment doesn't have randomBytes function")}e.randomBytes=S})(Oe);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=De,o=Oe;class r extends o.Hash{constructor(s,l){super(),this.finished=!1,this.destroyed=!1,t.default.hash(s);const a=(0,o.toBytes)(l);if(this.iHash=s.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const c=this.blockLen,d=new Uint8Array(c);d.set(a.length>c?s.create().update(a).digest():a);for(let u=0;u<d.length;u++)d[u]^=54;this.iHash.update(d),this.oHash=s.create();for(let u=0;u<d.length;u++)d[u]^=106;this.oHash.update(d),d.fill(0)}update(s){return t.default.exists(this),this.iHash.update(s),this}digestInto(s){t.default.exists(this),t.default.bytes(s,this.outputLen),this.finished=!0,this.iHash.digestInto(s),this.oHash.update(s),this.oHash.digestInto(s),this.destroy()}digest(){const s=new Uint8Array(this.oHash.outputLen);return this.digestInto(s),s}_cloneInto(s){s||(s=Object.create(Object.getPrototypeOf(this),{}));const{oHash:l,iHash:a,finished:c,destroyed:d,blockLen:u,outputLen:f}=this;return s=s,s.finished=c,s.destroyed=d,s.blockLen=u,s.outputLen=f,s.oHash=l._cloneInto(s.oHash),s.iHash=a._cloneInto(s.iHash),s}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const n=(i,s,l)=>new r(i,s).update(l).digest();e.hmac=n,e.hmac.create=(i,s)=>new r(i,s)})(Nh);Object.defineProperty(mr,"__esModule",{value:!0});mr.pbkdf2Async=mr.pbkdf2=void 0;const Mn=De,Z5=Nh,nr=Oe;function Uh(e,t,o,r){Mn.default.hash(e);const n=(0,nr.checkOpts)({dkLen:32,asyncTick:10},r),{c:i,dkLen:s,asyncTick:l}=n;if(Mn.default.number(i),Mn.default.number(s),Mn.default.number(l),i<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const a=(0,nr.toBytes)(t),c=(0,nr.toBytes)(o),d=new Uint8Array(s),u=Z5.hmac.create(e,a),f=u._cloneInto().update(c);return{c:i,dkLen:s,asyncTick:l,DK:d,PRF:u,PRFSalt:f}}function Kh(e,t,o,r,n){return e.destroy(),t.destroy(),r&&r.destroy(),n.fill(0),o}function Y5(e,t,o,r){const{c:n,dkLen:i,DK:s,PRF:l,PRFSalt:a}=Uh(e,t,o,r);let c;const d=new Uint8Array(4),u=(0,nr.createView)(d),f=new Uint8Array(l.outputLen);for(let p=1,h=0;h<i;p++,h+=l.outputLen){const m=s.subarray(h,h+l.outputLen);u.setInt32(0,p,!1),(c=a._cloneInto(c)).update(d).digestInto(f),m.set(f.subarray(0,m.length));for(let x=1;x<n;x++){l._cloneInto(c).update(f).digestInto(f);for(let b=0;b<m.length;b++)m[b]^=f[b]}}return Kh(l,a,s,c,f)}mr.pbkdf2=Y5;async function X5(e,t,o,r){const{c:n,dkLen:i,asyncTick:s,DK:l,PRF:a,PRFSalt:c}=Uh(e,t,o,r);let d;const u=new Uint8Array(4),f=(0,nr.createView)(u),p=new Uint8Array(a.outputLen);for(let h=1,m=0;m<i;h++,m+=a.outputLen){const x=l.subarray(m,m+a.outputLen);f.setInt32(0,h,!1),(d=c._cloneInto(d)).update(u).digestInto(p),x.set(p.subarray(0,x.length)),await(0,nr.asyncLoop)(n-1,s,b=>{a._cloneInto(d).update(p).digestInto(p);for(let y=0;y<x.length;y++)x[y]^=p[y]})}return Kh(a,c,l,d,p)}mr.pbkdf2Async=X5;var br={},vn={};Object.defineProperty(vn,"__esModule",{value:!0});vn.SHA2=void 0;const ts=De,Or=Oe;function Q5(e,t,o,r){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,o,r);const n=BigInt(32),i=BigInt(4294967295),s=Number(o>>n&i),l=Number(o&i),a=r?4:0,c=r?0:4;e.setUint32(t+a,s,r),e.setUint32(t+c,l,r)}class J5 extends Or.Hash{constructor(t,o,r,n){super(),this.blockLen=t,this.outputLen=o,this.padOffset=r,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,Or.createView)(this.buffer)}update(t){ts.default.exists(this);const{view:o,buffer:r,blockLen:n}=this;t=(0,Or.toBytes)(t);const i=t.length;for(let s=0;s<i;){const l=Math.min(n-this.pos,i-s);if(l===n){const a=(0,Or.createView)(t);for(;n<=i-s;s+=n)this.process(a,s);continue}r.set(t.subarray(s,s+l),this.pos),this.pos+=l,s+=l,this.pos===n&&(this.process(o,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){ts.default.exists(this),ts.default.output(t,this),this.finished=!0;const{buffer:o,view:r,blockLen:n,isLE:i}=this;let{pos:s}=this;o[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>n-s&&(this.process(r,0),s=0);for(let u=s;u<n;u++)o[u]=0;Q5(r,n-8,BigInt(this.length*8),i),this.process(r,0);const l=(0,Or.createView)(t),a=this.outputLen;if(a%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const c=a/4,d=this.get();if(c>d.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<c;u++)l.setUint32(4*u,d[u],i)}digest(){const{buffer:t,outputLen:o}=this;this.digestInto(t);const r=t.slice(0,o);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:o,buffer:r,length:n,finished:i,destroyed:s,pos:l}=this;return t.length=n,t.pos=l,t.finished=i,t.destroyed=s,n%o&&t.buffer.set(r),t}}vn.SHA2=J5;Object.defineProperty(br,"__esModule",{value:!0});br.sha224=Ri=br.sha256=void 0;const e4=vn,ut=Oe,t4=(e,t,o)=>e&t^~e&o,o4=(e,t,o)=>e&t^e&o^t&o,r4=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),to=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),oo=new Uint32Array(64);class Vh extends e4.SHA2{constructor(){super(64,32,8,!1),this.A=to[0]|0,this.B=to[1]|0,this.C=to[2]|0,this.D=to[3]|0,this.E=to[4]|0,this.F=to[5]|0,this.G=to[6]|0,this.H=to[7]|0}get(){const{A:t,B:o,C:r,D:n,E:i,F:s,G:l,H:a}=this;return[t,o,r,n,i,s,l,a]}set(t,o,r,n,i,s,l,a){this.A=t|0,this.B=o|0,this.C=r|0,this.D=n|0,this.E=i|0,this.F=s|0,this.G=l|0,this.H=a|0}process(t,o){for(let u=0;u<16;u++,o+=4)oo[u]=t.getUint32(o,!1);for(let u=16;u<64;u++){const f=oo[u-15],p=oo[u-2],h=(0,ut.rotr)(f,7)^(0,ut.rotr)(f,18)^f>>>3,m=(0,ut.rotr)(p,17)^(0,ut.rotr)(p,19)^p>>>10;oo[u]=m+oo[u-7]+h+oo[u-16]|0}let{A:r,B:n,C:i,D:s,E:l,F:a,G:c,H:d}=this;for(let u=0;u<64;u++){const f=(0,ut.rotr)(l,6)^(0,ut.rotr)(l,11)^(0,ut.rotr)(l,25),p=d+f+t4(l,a,c)+r4[u]+oo[u]|0,m=((0,ut.rotr)(r,2)^(0,ut.rotr)(r,13)^(0,ut.rotr)(r,22))+o4(r,n,i)|0;d=c,c=a,a=l,l=s+p|0,s=i,i=n,n=r,r=p+m|0}r=r+this.A|0,n=n+this.B|0,i=i+this.C|0,s=s+this.D|0,l=l+this.E|0,a=a+this.F|0,c=c+this.G|0,d=d+this.H|0,this.set(r,n,i,s,l,a,c,d)}roundClean(){oo.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class n4 extends Vh{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}var Ri=br.sha256=(0,ut.wrapConstructor)(()=>new Vh);br.sha224=(0,ut.wrapConstructor)(()=>new n4);var ft={},Gh={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),o=BigInt(32);function r(I,L=!1){return L?{h:Number(I&t),l:Number(I>>o&t)}:{h:Number(I>>o&t)|0,l:Number(I&t)|0}}e.fromBig=r;function n(I,L=!1){let w=new Uint32Array(I.length),q=new Uint32Array(I.length);for(let oe=0;oe<I.length;oe++){const{h:Ee,l:fe}=r(I[oe],L);[w[oe],q[oe]]=[Ee,fe]}return[w,q]}e.split=n;const i=(I,L)=>BigInt(I>>>0)<<o|BigInt(L>>>0);e.toBig=i;const s=(I,L,w)=>I>>>w,l=(I,L,w)=>I<<32-w|L>>>w,a=(I,L,w)=>I>>>w|L<<32-w,c=(I,L,w)=>I<<32-w|L>>>w,d=(I,L,w)=>I<<64-w|L>>>w-32,u=(I,L,w)=>I>>>w-32|L<<64-w,f=(I,L)=>L,p=(I,L)=>I,h=(I,L,w)=>I<<w|L>>>32-w,m=(I,L,w)=>L<<w|I>>>32-w,x=(I,L,w)=>L<<w-32|I>>>64-w,b=(I,L,w)=>I<<w-32|L>>>64-w;function y(I,L,w,q){const oe=(L>>>0)+(q>>>0);return{h:I+w+(oe/2**32|0)|0,l:oe|0}}e.add=y;const S=(I,L,w)=>(I>>>0)+(L>>>0)+(w>>>0),v=(I,L,w,q)=>L+w+q+(I/2**32|0)|0,E=(I,L,w,q)=>(I>>>0)+(L>>>0)+(w>>>0)+(q>>>0),B=(I,L,w,q,oe)=>L+w+q+oe+(I/2**32|0)|0,j=(I,L,w,q,oe)=>(I>>>0)+(L>>>0)+(w>>>0)+(q>>>0)+(oe>>>0),P=(I,L,w,q,oe,Ee)=>L+w+q+oe+Ee+(I/2**32|0)|0,D={fromBig:r,split:n,toBig:e.toBig,shrSH:s,shrSL:l,rotrSH:a,rotrSL:c,rotrBH:d,rotrBL:u,rotr32H:f,rotr32L:p,rotlSH:h,rotlSL:m,rotlBH:x,rotlBL:b,add:y,add3L:S,add3H:v,add4L:E,add4H:B,add5H:P,add5L:j};e.default=D})(Gh);Object.defineProperty(ft,"__esModule",{value:!0});ft.sha384=ft.sha512_256=ft.sha512_224=Ds=ft.sha512=ft.SHA512=void 0;const i4=vn,ie=Gh,Mi=Oe,[s4,l4]=ie.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),ro=new Uint32Array(80),no=new Uint32Array(80);class wn extends i4.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:o,Bh:r,Bl:n,Ch:i,Cl:s,Dh:l,Dl:a,Eh:c,El:d,Fh:u,Fl:f,Gh:p,Gl:h,Hh:m,Hl:x}=this;return[t,o,r,n,i,s,l,a,c,d,u,f,p,h,m,x]}set(t,o,r,n,i,s,l,a,c,d,u,f,p,h,m,x){this.Ah=t|0,this.Al=o|0,this.Bh=r|0,this.Bl=n|0,this.Ch=i|0,this.Cl=s|0,this.Dh=l|0,this.Dl=a|0,this.Eh=c|0,this.El=d|0,this.Fh=u|0,this.Fl=f|0,this.Gh=p|0,this.Gl=h|0,this.Hh=m|0,this.Hl=x|0}process(t,o){for(let S=0;S<16;S++,o+=4)ro[S]=t.getUint32(o),no[S]=t.getUint32(o+=4);for(let S=16;S<80;S++){const v=ro[S-15]|0,E=no[S-15]|0,B=ie.default.rotrSH(v,E,1)^ie.default.rotrSH(v,E,8)^ie.default.shrSH(v,E,7),j=ie.default.rotrSL(v,E,1)^ie.default.rotrSL(v,E,8)^ie.default.shrSL(v,E,7),P=ro[S-2]|0,D=no[S-2]|0,I=ie.default.rotrSH(P,D,19)^ie.default.rotrBH(P,D,61)^ie.default.shrSH(P,D,6),L=ie.default.rotrSL(P,D,19)^ie.default.rotrBL(P,D,61)^ie.default.shrSL(P,D,6),w=ie.default.add4L(j,L,no[S-7],no[S-16]),q=ie.default.add4H(w,B,I,ro[S-7],ro[S-16]);ro[S]=q|0,no[S]=w|0}let{Ah:r,Al:n,Bh:i,Bl:s,Ch:l,Cl:a,Dh:c,Dl:d,Eh:u,El:f,Fh:p,Fl:h,Gh:m,Gl:x,Hh:b,Hl:y}=this;for(let S=0;S<80;S++){const v=ie.default.rotrSH(u,f,14)^ie.default.rotrSH(u,f,18)^ie.default.rotrBH(u,f,41),E=ie.default.rotrSL(u,f,14)^ie.default.rotrSL(u,f,18)^ie.default.rotrBL(u,f,41),B=u&p^~u&m,j=f&h^~f&x,P=ie.default.add5L(y,E,j,l4[S],no[S]),D=ie.default.add5H(P,b,v,B,s4[S],ro[S]),I=P|0,L=ie.default.rotrSH(r,n,28)^ie.default.rotrBH(r,n,34)^ie.default.rotrBH(r,n,39),w=ie.default.rotrSL(r,n,28)^ie.default.rotrBL(r,n,34)^ie.default.rotrBL(r,n,39),q=r&i^r&l^i&l,oe=n&s^n&a^s&a;b=m|0,y=x|0,m=p|0,x=h|0,p=u|0,h=f|0,{h:u,l:f}=ie.default.add(c|0,d|0,D|0,I|0),c=l|0,d=a|0,l=i|0,a=s|0,i=r|0,s=n|0;const Ee=ie.default.add3L(I,w,oe);r=ie.default.add3H(Ee,D,L,q),n=Ee|0}({h:r,l:n}=ie.default.add(this.Ah|0,this.Al|0,r|0,n|0)),{h:i,l:s}=ie.default.add(this.Bh|0,this.Bl|0,i|0,s|0),{h:l,l:a}=ie.default.add(this.Ch|0,this.Cl|0,l|0,a|0),{h:c,l:d}=ie.default.add(this.Dh|0,this.Dl|0,c|0,d|0),{h:u,l:f}=ie.default.add(this.Eh|0,this.El|0,u|0,f|0),{h:p,l:h}=ie.default.add(this.Fh|0,this.Fl|0,p|0,h|0),{h:m,l:x}=ie.default.add(this.Gh|0,this.Gl|0,m|0,x|0),{h:b,l:y}=ie.default.add(this.Hh|0,this.Hl|0,b|0,y|0),this.set(r,n,i,s,l,a,c,d,u,f,p,h,m,x,b,y)}roundClean(){ro.fill(0),no.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}ft.SHA512=wn;class a4 extends wn{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class c4 extends wn{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class d4 extends wn{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var Ds=ft.sha512=(0,Mi.wrapConstructor)(()=>new wn);ft.sha512_224=(0,Mi.wrapConstructor)(()=>new a4);ft.sha512_256=(0,Mi.wrapConstructor)(()=>new c4);ft.sha384=(0,Mi.wrapConstructor)(()=>new d4);const u4=e2(G5);Object.defineProperty(it,"__esModule",{value:!0});var qh=it.mnemonicToSeedSync=it.mnemonicToSeed=np=it.validateMnemonic=it.entropyToMnemonic=it.mnemonicToEntropy=ep=it.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const Zh=De,Yh=mr,f4=br,Xh=ft,h4=Oe,On=u4,p4=e=>e[0]==="\u3042\u3044\u3053\u304F\u3057\u3093";function Qh(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function Al(e){const t=Qh(e),o=t.split(" ");if(![12,15,18,21,24].includes(o.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:o}}function Jh(e){Zh.default.bytes(e,16,20,24,28,32)}function g4(e,t=128){if(Zh.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return rp((0,h4.randomBytes)(t/8),e)}var ep=it.generateMnemonic=g4;const m4=e=>{const t=8-e.length/4;return new Uint8Array([(0,f4.sha256)(e)[0]>>t<<t])};function tp(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),On.utils.chain(On.utils.checksum(1,m4),On.utils.radix2(11,!0),On.utils.alphabet(e))}function op(e,t){const{words:o}=Al(e),r=tp(t).decode(o);return Jh(r),r}it.mnemonicToEntropy=op;function rp(e,t){return Jh(e),tp(t).encode(e).join(p4(t)?"\u3000":" ")}it.entropyToMnemonic=rp;function b4(e,t){try{op(e,t)}catch{return!1}return!0}var np=it.validateMnemonic=b4;const ip=e=>Qh(`mnemonic${e}`);function x4(e,t=""){return(0,Yh.pbkdf2Async)(Xh.sha512,Al(e).nfkd,ip(t),{c:2048,dkLen:64})}it.mnemonicToSeed=x4;function C4(e,t=""){return(0,Yh.pbkdf2)(Xh.sha512,Al(e).nfkd,ip(t),{c:2048,dkLen:64})}qh=it.mnemonicToSeedSync=C4;function Rs(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function y4(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function sp(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function v4(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Rs(e.outputLen),Rs(e.blockLen)}function w4(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function S4(e,t){sp(e);const o=t.outputLen;if(e.length<o)throw new Error(`digestInto() expects output buffer of length at least ${o}`)}const Lo={number:Rs,bool:y4,bytes:sp,hash:v4,exists:w4,output:S4};/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const os=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),$4=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!$4)throw new Error("Non little-endian hardware is not supported");Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function E4(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function kl(e){if(typeof e=="string"&&(e=E4(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}class lp{clone(){return this._cloneInto()}}function T4(e){const t=r=>e().update(kl(r)).digest(),o=e();return t.outputLen=o.outputLen,t.blockLen=o.blockLen,t.create=()=>e(),t}class ap extends lp{constructor(t,o){super(),this.finished=!1,this.destroyed=!1,Lo.hash(t);const r=kl(o);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const n=this.blockLen,i=new Uint8Array(n);i.set(r.length>n?t.create().update(r).digest():r);for(let s=0;s<i.length;s++)i[s]^=54;this.iHash.update(i),this.oHash=t.create();for(let s=0;s<i.length;s++)i[s]^=106;this.oHash.update(i),i.fill(0)}update(t){return Lo.exists(this),this.iHash.update(t),this}digestInto(t){Lo.exists(this),Lo.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:o,iHash:r,finished:n,destroyed:i,blockLen:s,outputLen:l}=this;return t=t,t.finished=n,t.destroyed=i,t.blockLen=s,t.outputLen=l,t.oHash=o._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const ci=(e,t,o)=>new ap(e,t).update(o).digest();ci.create=(e,t)=>new ap(e,t);function H4(e,t,o,r){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,o,r);const n=BigInt(32),i=BigInt(4294967295),s=Number(o>>n&i),l=Number(o&i),a=r?4:0,c=r?0:4;e.setUint32(t+a,s,r),e.setUint32(t+c,l,r)}class P4 extends lp{constructor(t,o,r,n){super(),this.blockLen=t,this.outputLen=o,this.padOffset=r,this.isLE=n,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=os(this.buffer)}update(t){Lo.exists(this);const{view:o,buffer:r,blockLen:n}=this;t=kl(t);const i=t.length;for(let s=0;s<i;){const l=Math.min(n-this.pos,i-s);if(l===n){const a=os(t);for(;n<=i-s;s+=n)this.process(a,s);continue}r.set(t.subarray(s,s+l),this.pos),this.pos+=l,s+=l,this.pos===n&&(this.process(o,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Lo.exists(this),Lo.output(t,this),this.finished=!0;const{buffer:o,view:r,blockLen:n,isLE:i}=this;let{pos:s}=this;o[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>n-s&&(this.process(r,0),s=0);for(let u=s;u<n;u++)o[u]=0;H4(r,n-8,BigInt(this.length*8),i),this.process(r,0);const l=os(t),a=this.outputLen;if(a%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const c=a/4,d=this.get();if(c>d.length)throw new Error("_sha2: outputLen bigger than state");for(let u=0;u<c;u++)l.setUint32(4*u,d[u],i)}digest(){const{buffer:t,outputLen:o}=this;this.digestInto(t);const r=t.slice(0,o);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:o,buffer:r,length:n,finished:i,destroyed:s,pos:l}=this;return t.length=n,t.pos=l,t.finished=i,t.destroyed=s,n%o&&t.buffer.set(r),t}}const I4=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),cp=Uint8Array.from({length:16},(e,t)=>t),_4=cp.map(e=>(9*e+5)%16);let Ll=[cp],Bl=[_4];for(let e=0;e<4;e++)for(let t of[Ll,Bl])t.push(t[e].map(o=>I4[o]));const dp=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),A4=Ll.map((e,t)=>e.map(o=>dp[t][o])),k4=Bl.map((e,t)=>e.map(o=>dp[t][o])),L4=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),B4=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),zn=(e,t)=>e<<t|e>>>32-t;function Sc(e,t,o,r){return e===0?t^o^r:e===1?t&o|~t&r:e===2?(t|~o)^r:e===3?t&r|o&~r:t^(o|~r)}const Fn=new Uint32Array(16);class D4 extends P4{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:o,h2:r,h3:n,h4:i}=this;return[t,o,r,n,i]}set(t,o,r,n,i){this.h0=t|0,this.h1=o|0,this.h2=r|0,this.h3=n|0,this.h4=i|0}process(t,o){for(let p=0;p<16;p++,o+=4)Fn[p]=t.getUint32(o,!0);let r=this.h0|0,n=r,i=this.h1|0,s=i,l=this.h2|0,a=l,c=this.h3|0,d=c,u=this.h4|0,f=u;for(let p=0;p<5;p++){const h=4-p,m=L4[p],x=B4[p],b=Ll[p],y=Bl[p],S=A4[p],v=k4[p];for(let E=0;E<16;E++){const B=zn(r+Sc(p,i,l,c)+Fn[b[E]]+m,S[E])+u|0;r=u,u=c,c=zn(l,10)|0,l=i,i=B}for(let E=0;E<16;E++){const B=zn(n+Sc(h,s,a,d)+Fn[y[E]]+x,v[E])+f|0;n=f,f=d,d=zn(a,10)|0,a=s,s=B}}this.set(this.h1+l+d|0,this.h2+c+f|0,this.h3+u+n|0,this.h4+r+s|0,this.h0+i+a|0)}roundClean(){Fn.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const R4=T4(()=>new D4);ae.hmacSha256Sync=(e,...t)=>ci(Ri,e,ae.concatBytes(...t));const rs=kh(Ri);function $c(e){return BigInt(`0x${Oe.bytesToHex(e)}`)}function M4(e){return Oe.hexToBytes(e.toString(16).padStart(64,"0"))}const O4=Oe.utf8ToBytes("Bitcoin seed"),ns={private:76066276,public:76067358},is=2147483648,z4=e=>R4(Ri(e)),F4=e=>Oe.createView(e).getUint32(0,!1),jn=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return Oe.createView(t).setUint32(0,e,!1),t};class Po{constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||ns,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!ae.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:$c(t.privateKey),this.privKeyBytes=M4(this.privKey),this.pubKey=x5(t.privateKey,!0)}else if(t.publicKey)this.pubKey=ue.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=z4(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return F4(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return rs.encode(this.serialize(this.versions.private,Oe.concatBytes(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return rs.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,o=ns){if(Qo(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const r=ci(Ds,O4,t);return new Po({versions:o,chainCode:r.slice(32),privateKey:r.slice(0,32)})}static fromExtendedKey(t,o=ns){const r=rs.decode(t),n=Oe.createView(r),i=n.getUint32(0,!1),s={versions:o,depth:r[4],parentFingerprint:n.getUint32(5,!1),index:n.getUint32(9,!1),chainCode:r.slice(13,45)},l=r.slice(45),a=l[0]===0;if(i!==o[a?"private":"public"])throw new Error("Version mismatch");return a?new Po({...s,privateKey:l.slice(1)}):new Po({...s,publicKey:l})}static fromJSON(t){return Po.fromExtendedKey(t.xpriv)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const o=t.replace(/^[mM]'?\//,"").split("/");let r=this;for(const n of o){const i=/^(\d+)('?)$/.exec(n);if(!i||i.length!==3)throw new Error(`Invalid child index: ${n}`);let s=+i[1];if(!Number.isSafeInteger(s)||s>=is)throw new Error("Invalid index");i[2]==="'"&&(s+=is),r=r.deriveChild(s)}return r}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let o=jn(t);if(t>=is){const l=this.privateKey;if(!l)throw new Error("Could not derive hardened child key");o=Oe.concatBytes(new Uint8Array([0]),l,o)}else o=Oe.concatBytes(this.pubKey,o);const r=ci(Ds,this.chainCode,o),n=$c(r.slice(0,32)),i=r.slice(32);if(!ae.isValidPrivateKey(n))throw new Error("Tweak bigger than curve order");const s={versions:this.versions,chainCode:i,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const l=ae.mod(this.privKey+n,Se.n);if(!ae.isValidPrivateKey(l))throw new Error("The tweak was out of range or the resulted private key is invalid");s.privateKey=l}else{const l=ue.fromHex(this.pubKey).add(ue.fromPrivateKey(n));if(l.equals(ue.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");s.publicKey=l.toRawBytes(!0)}return new Po(s)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Qo(t,32),w5(t,this.privKey,{canonical:!0,der:!1})}verify(t,o){if(Qo(t,32),Qo(o,64),!this.publicKey)throw new Error("No publicKey set!");let r;try{r=Wt.fromCompact(o)}catch{return!1}return $5(r,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,o){if(!this.chainCode)throw new Error("No chainCode set");return Qo(o,33),Oe.concatBytes(jn(t),new Uint8Array([this.depth]),jn(this.parentFingerprint),jn(this.index),this.chainCode,o)}}class up extends ks{constructor(t,o){super(),this.finished=!1,this.destroyed=!1,_5(t);const r=Tl(o);if(this.iHash=t.create(),!(this.iHash instanceof ks))throw new TypeError("Expected instance of class which extends utils.Hash");const n=this.blockLen=this.iHash.blockLen;this.outputLen=this.iHash.outputLen;const i=new Uint8Array(n);i.set(r.length>this.iHash.blockLen?t.create().update(r).digest():r);for(let s=0;s<i.length;s++)i[s]^=54;this.iHash.update(i),this.oHash=t.create();for(let s=0;s<i.length;s++)i[s]^=106;this.oHash.update(i),i.fill(0)}update(t){if(this.destroyed)throw new Error("instance is destroyed");return this.iHash.update(t),this}digestInto(t){if(this.destroyed)throw new Error("instance is destroyed");if(!(t instanceof Uint8Array)||t.length!==this.outputLen)throw new Error("HMAC: Invalid output buffer");if(this.finished)throw new Error("digest() was already called");this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:o,iHash:r,finished:n,destroyed:i,blockLen:s,outputLen:l}=this;return t=t,t.finished=n,t.destroyed=i,t.blockLen=s,t.outputLen=l,t.oHash=o._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const di=(e,t,o)=>new up(e,t).update(o).digest();di.create=(e,t)=>new up(e,t);di.init=di.create;var j4=Object.defineProperty,Ko=(e,t)=>{for(var o in t)j4(e,o,{get:t[o],enumerable:!0})};function W4(){return ae.bytesToHex(ae.randomPrivateKey())}function N4(e){return ae.bytesToHex(xn.getPublicKey(e))}var U4={};Ko(U4,{insertEventIntoAscendingList:()=>G4,insertEventIntoDescendingList:()=>V4,normalizeURL:()=>K4,utf8Decoder:()=>ui,utf8Encoder:()=>Vo});var ui=new TextDecoder("utf-8"),Vo=new TextEncoder;function K4(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function V4(e,t){var s;let o=0,r=e.length-1,n,i=o;if(r<0)i=0;else if(t.created_at<e[r].created_at)i=r+1;else if(t.created_at>=e[o].created_at)i=o;else for(;;){if(r<=o+1){i=r;break}if(n=Math.floor(o+(r-o)/2),e[n].created_at>t.created_at)o=n;else if(e[n].created_at<t.created_at)r=n;else{i=n;break}}return((s=e[i])==null?void 0:s.id)!==t.id?[...e.slice(0,i),t,...e.slice(i)]:e}function G4(e,t){var s;let o=0,r=e.length-1,n,i=o;if(r<0)i=0;else if(t.created_at>e[r].created_at)i=r+1;else if(t.created_at<=e[o].created_at)i=o;else for(;;){if(r<=o+1){i=r;break}if(n=Math.floor(o+(r-o)/2),e[n].created_at<t.created_at)o=n;else if(e[n].created_at>t.created_at)r=n;else{i=n;break}}return((s=e[i])==null?void 0:s.id)!==t.id?[...e.slice(0,i),t,...e.slice(i)]:e}function q4(e){if(!hp(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function fp(e){let t=Cn(Vo.encode(q4(e)));return ae.bytesToHex(t)}function hp(e){if(typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let o=e.tags[t];if(!Array.isArray(o))return!1;for(let r=0;r<o.length;r++)if(typeof o[r]=="object")return!1}return!0}function Z4(e){return xn.verifySync(e.sig,fp(e),e.pubkey)}function U8(e,t){return ae.bytesToHex(xn.signSync(fp(e),t))}function Y4(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1)return!1;for(let o in e)if(o[0]==="#"){let r=o.slice(1),n=e[`#${r}`];if(n&&!t.tags.find(([i,s])=>i===o.slice(1)&&n.indexOf(s)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function X4(e,t){for(let o=0;o<e.length;o++)if(Y4(e[o],t))return!0;return!1}var Q4={};Ko(Q4,{getHex64:()=>Oi,getInt:()=>pp,getSubscriptionId:()=>gp,matchEventId:()=>J4,matchEventKind:()=>t8,matchEventPubkey:()=>e8});function Oi(e,t){let o=t.length+3,r=e.indexOf(`"${t}":`)+o,n=e.slice(r).indexOf('"')+r+1;return e.slice(n,n+64)}function pp(e,t){let o=t.length,r=e.indexOf(`"${t}":`)+o+3,n=e.slice(r),i=Math.min(n.indexOf(","),n.indexOf("}"));return parseInt(n.slice(0,i),10)}function gp(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let o=e.slice(t+7+1).indexOf('"');if(o===-1)return null;let r=t+7+1+o,n=e.slice(r+1,80).indexOf('"');if(n===-1)return null;let i=r+1+n;return e.slice(r+1,i)}function J4(e,t){return t===Oi(e,"id")}function e8(e,t){return t===Oi(e,"pubkey")}function t8(e,t){return t===pp(e,"kind")}function K8(e){var t,o,r,n=new Promise(p=>{r=p}),i={},s={connect:[],disconnect:[],error:[],notice:[]},l={},a={};async function c(){return new Promise((p,h)=>{t=new WebSocket(e),t.onopen=()=>{s.connect.forEach(y=>y()),r(),p()},t.onerror=()=>{s.error.forEach(y=>y()),h()},t.onclose=async()=>{s.disconnect.forEach(y=>y()),o&&o()};let m=[],x;t.onmessage=y=>{m.push(y.data),x||(x=setInterval(b,0))};function b(){var v,E,B,j;if(m.length===0){clearInterval(x),x=null;return}var y=m.shift();if(!y)return;let S=gp(y);if(S){let P=i[S];if(P&&P.alreadyHaveEvent&&P.alreadyHaveEvent(Oi(y,"id"),e))return}try{let P=JSON.parse(y);switch(P[0]){case"EVENT":let D=P[1],I=P[2];hp(I)&&i[D]&&(i[D].skipVerification||Z4(I))&&X4(i[D].filters,I)&&(i[D],(((v=l[D])==null?void 0:v.event)||[]).forEach(w=>w(I)));return;case"EOSE":{let w=P[1];(((E=l[w])==null?void 0:E.eose)||[]).forEach(q=>q());return}case"OK":{let w=P[1],q=P[2],oe=P[3]||"";q?(B=a[w])==null||B.ok.forEach(Ee=>Ee()):(j=a[w])==null||j.failed.forEach(Ee=>Ee(oe));return}case"NOTICE":let L=P[1];s.notice.forEach(w=>w(L));return}}catch{return}}})}async function d(){(t==null?void 0:t.readyState)&&t.readyState===1||await c()}async function u(p){let h=JSON.stringify(p);await n;try{t.send(h)}catch(m){console.log(m)}}const f=(p,{skipVerification:h=!1,alreadyHaveEvent:m=null,id:x=Math.random().toString().slice(2)}={})=>{let b=x;return i[b]={id:b,filters:p,skipVerification:h,alreadyHaveEvent:m},u(["REQ",b,...p]),{sub:(y,S={})=>f(y||p,{skipVerification:S.skipVerification||h,alreadyHaveEvent:S.alreadyHaveEvent||m,id:b}),unsub:()=>{delete i[b],delete l[b],u(["CLOSE",b])},on:(y,S)=>{l[b]=l[b]||{event:[],eose:[]},l[b][y].push(S)},off:(y,S)=>{let v=l[b],E=v[y].indexOf(S);E>=0&&v[y].splice(E,1)}}};return{url:e,sub:f,on:(p,h)=>{s[p].push(h),p==="connect"&&(t==null?void 0:t.readyState)===1&&h()},off:(p,h)=>{let m=s[p].indexOf(h);m!==-1&&s[p].splice(m,1)},list:(p,h)=>new Promise(m=>{let x=f(p,h),b=[],y=setTimeout(()=>{x.unsub(),m(b)},1500);x.on("eose",()=>{x.unsub(),clearTimeout(y),m(b)}),x.on("event",S=>{b.push(S)})}),get:(p,h)=>new Promise(m=>{let x=f([p],h),b=setTimeout(()=>{x.unsub(),m(null)},1500);x.on("event",y=>{x.unsub(),clearTimeout(b),m(y)})}),publish(p){if(!p.id)throw new Error(`event ${p} has no id`);let h=p.id;var m=!1,x=!1;u(["EVENT",p]).then(()=>{m=!0,x&&(b(),x=!1)}).catch(()=>{});const b=()=>{let y=f([{ids:[h]}],{id:`monitor-${h.slice(0,5)}`}),S=setTimeout(()=>{var v;(((v=a[h])==null?void 0:v.failed)||[]).forEach(E=>E("event not seen after 5 seconds")),y.unsub()},5e3);y.on("event",()=>{var v;clearTimeout(S),(((v=a[h])==null?void 0:v.seen)||[]).forEach(E=>E())})};return{on:(y,S)=>{a[h]=a[h]||{ok:[],seen:[],failed:[]},a[h][y].push(S),y==="seen"&&(m?b():x=!0)},off:(y,S)=>{let v=a[h];if(!v)return;let E=v[y].indexOf(S);E>=0&&v[y].splice(E,1)}}},connect:d,close(){return t.readyState>1?Promise.resolve():(t.close(),new Promise(p=>{o=p}))},get status(){var p;return(p=t==null?void 0:t.readyState)!=null?p:3}}}var o8={};Ko(o8,{decrypt:()=>n8,encrypt:()=>r8});async function r8(e,t,o){const r=mh(e,"02"+t),n=mp(r);let i=Uint8Array.from(k5(16)),s=Vo.encode(o),l=await crypto.subtle.importKey("raw",n,{name:"AES-CBC"},!1,["encrypt"]),a=await crypto.subtle.encrypt({name:"AES-CBC",iv:i},l,s),c=gr.encode(new Uint8Array(a)),d=gr.encode(new Uint8Array(i.buffer));return`${c}?iv=${d}`}async function n8(e,t,o){let[r,n]=o.split("?iv="),i=mh(e,"02"+t),s=mp(i),l=await crypto.subtle.importKey("raw",s,{name:"AES-CBC"},!1,["decrypt"]),a=gr.decode(r),c=gr.decode(n),d=await crypto.subtle.decrypt({name:"AES-CBC",iv:c},l,a);return ui.decode(d)}function mp(e){return e.slice(1,33)}var i8={};Ko(i8,{queryProfile:()=>a8,searchDomain:()=>l8,useFetchImplementation:()=>s8});var zi;try{zi=fetch}catch{}function s8(e){zi=e}async function l8(e,t=""){try{return(await(await zi(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function a8(e){var s,l;let[t,o]=e.split("@");if(o||(o=t,t="_"),!t.match(/^[A-Za-z0-9-_]+$/))return null;let r=await(await zi(`https://${o}/.well-known/nostr.json?name=${t}`)).json();if(!((s=r==null?void 0:r.names)!=null&&s[t]))return null;let n=r.names[t],i=((l=r.relays)==null?void 0:l[n])||[];return{pubkey:n,relays:i}}var c8={};Ko(c8,{generateSeedWords:()=>u8,privateKeyFromSeedWords:()=>d8,validateWords:()=>f8});function d8(e,t){let r=Po.fromMasterSeed(qh(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!r)throw new Error("could not derive private key");return ae.bytesToHex(r)}function u8(){return ep(Il)}function f8(e){return np(e,Il)}var h8={};Ko(h8,{decode:()=>p8,neventEncode:()=>C8,noteEncode:()=>b8,nprofileEncode:()=>x8,npubEncode:()=>m8,nsecEncode:()=>g8});var Fi=5e3;function p8(e){var n,i;let{prefix:t,words:o}=Kt.decode(e,Fi),r=new Uint8Array(Kt.fromWords(o));if(t==="nprofile"){let s=Ec(r);if(!((n=s[0])!=null&&n[0]))throw new Error("missing TLV 0 for nprofile");if(s[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:ae.bytesToHex(s[0][0]),relays:s[1].map(l=>ui.decode(l))}}}if(t==="nevent"){let s=Ec(r);if(!((i=s[0])!=null&&i[0]))throw new Error("missing TLV 0 for nevent");if(s[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nevent",data:{id:ae.bytesToHex(s[0][0]),relays:s[1].map(l=>ui.decode(l))}}}if(t==="nsec"||t==="npub"||t==="note")return{type:t,data:ae.bytesToHex(r)};throw new Error(`unknown prefix ${t}`)}function Ec(e){let t={},o=e;for(;o.length>0;){let r=o[0],n=o[1],i=o.slice(2,2+n);o=o.slice(2+n),!(i.length<n)&&(t[r]=t[r]||[],t[r].push(i))}return t}function g8(e){return Dl("nsec",e)}function m8(e){return Dl("npub",e)}function b8(e){return Dl("note",e)}function Dl(e,t){let o=ae.hexToBytes(t),r=Kt.toWords(o);return Kt.encode(e,r,Fi)}function x8(e){let t=bp({0:[ae.hexToBytes(e.pubkey)],1:(e.relays||[]).map(r=>Vo.encode(r))}),o=Kt.toWords(t);return Kt.encode("nprofile",o,Fi)}function C8(e){let t=bp({0:[ae.hexToBytes(e.id)],1:(e.relays||[]).map(r=>Vo.encode(r))}),o=Kt.toWords(t);return Kt.encode("nevent",o,Fi)}function bp(e){let t=[];return Object.entries(e).forEach(([o,r])=>{r.forEach(n=>{let i=new Uint8Array(n.length+2);i.set([parseInt(o)],0),i.set([n.length],1),i.set(n,2),t.push(i)})}),ae.concatBytes(...t)}var y8={};Ko(y8,{createDelegation:()=>v8,getDelegator:()=>w8});function v8(e,t){let o=[];(t.kind||-1)>=0&&o.push(`kind=${t.kind}`),t.until&&o.push(`created_at<${t.until}`),t.since&&o.push(`created_at>${t.since}`);let r=o.join("&");if(r==="")throw new Error("refusing to create a delegation without any conditions");let n=Cn(Vo.encode(`nostr:delegation:${t.pubkey}:${r}`)),i=ae.bytesToHex(xn.signSync(n,e));return{from:N4(e),to:t.pubkey,cond:r,sig:i}}function w8(e){let t=e.tags.find(l=>l[0]==="delegation"&&l.length>=4);if(!t)return null;let o=t[1],r=t[2],n=t[3],i=r.split("&");for(let l=0;l<i.length;l++){let[a,c,d]=i[l].split(/\b/);if(!(a==="kind"&&c==="="&&e.kind===parseInt(d))){if(a==="created_at"&&c==="<"&&e.created_at<parseInt(d))continue;if(a==="created_at"&&c===">"&&e.created_at>parseInt(d))continue;return null}}let s=Cn(Vo.encode(`nostr:delegation:${e.pubkey}:${r}`));return xn.verifySync(n,s,o)?o:null}ae.hmacSha256Sync=(e,...t)=>di(Cn,e,ae.concatBytes(...t));ae.sha256Sync=(...e)=>Cn(ae.concatBytes(...e));const Rl="prikey";function S8(){return W4()}function $8(e){localStorage.setItem(Rl,e)}function V8(){const e=S8();return $8(e),e}function G8(){window.localStorage[Rl]="",location.reload()}const xp=i5({history:v6(),routes:[{path:"/login",name:"login",component:()=>Rt(()=>import("./LoginView.9c97b190.js"),["assets/LoginView.9c97b190.js","assets/use-message.9d078f0e.js","assets/Space.28e34898.js","assets/naiveUi.13532acc.js","assets/use-locale.46468919.js","assets/utils.82ac1979.js","assets/keysOf.8a025f7e.js","assets/Tabs.1eb33f60.js","assets/user.da0a4adb.js","assets/RelayConfig.vue_vue_type_script_setup_true_lang.b4267915.js","assets/ButtonClose.vue_vue_type_script_setup_true_lang.40794e45.js","assets/Ellipsis.vue_vue_type_script_setup_true_lang.13bd0a7d.js","assets/Card.ee9e9e2a.js"])},{path:"/",redirect:"/home",component:()=>Rt(()=>import("./LayoutView.565a7154.js"),["assets/LayoutView.565a7154.js","assets/naiveUi.13532acc.js","assets/Space.28e34898.js","assets/use-locale.46468919.js","assets/utils.82ac1979.js","assets/use-message.9d078f0e.js","assets/keysOf.8a025f7e.js","assets/Dropdown.2fbbecac.js","assets/fade-in-scale-up.cssr.71d7533c.js"]),children:[{path:"/home",component:()=>Rt(()=>import("./HomeView.13f63402.js"),["assets/HomeView.13f63402.js","assets/PostList.vue_vue_type_script_setup_true_lang.641fcf24.js","assets/PostList.b97ebd1b.css","assets/user.da0a4adb.js","assets/utils.82ac1979.js","assets/Space.28e34898.js","assets/fade-in-scale-up.cssr.71d7533c.js","assets/use-locale.46468919.js","assets/Card.ee9e9e2a.js","assets/keysOf.8a025f7e.js","assets/Tabs.1eb33f60.js"])},{path:"/relays",component:()=>Rt(()=>import("./RelaysView.db797af8.js"),["assets/RelaysView.db797af8.js","assets/RelayConfig.vue_vue_type_script_setup_true_lang.b4267915.js","assets/user.da0a4adb.js","assets/utils.82ac1979.js","assets/use-message.9d078f0e.js","assets/Space.28e34898.js","assets/ButtonClose.vue_vue_type_script_setup_true_lang.40794e45.js","assets/Ellipsis.vue_vue_type_script_setup_true_lang.13bd0a7d.js","assets/Card.ee9e9e2a.js","assets/keysOf.8a025f7e.js"])},{path:"/channels",component:()=>Rt(()=>import("./ChannelsView.49026fa2.js"),["assets/ChannelsView.49026fa2.js","assets/channel.62be2bb6.js","assets/user.da0a4adb.js","assets/utils.82ac1979.js"])},{path:"/channel/message/:id",component:()=>Rt(()=>import("./ChannelMessageView.699966fe.js"),["assets/ChannelMessageView.699966fe.js","assets/channel.62be2bb6.js","assets/user.da0a4adb.js","assets/utils.82ac1979.js"])},{path:"/profile/:hash",component:()=>Rt(()=>import("./ProfileView.4ca4cbbf.js"),["assets/ProfileView.4ca4cbbf.js","assets/PostList.vue_vue_type_script_setup_true_lang.641fcf24.js","assets/PostList.b97ebd1b.css","assets/user.da0a4adb.js","assets/utils.82ac1979.js","assets/Space.28e34898.js","assets/fade-in-scale-up.cssr.71d7533c.js","assets/use-locale.46468919.js","assets/Card.ee9e9e2a.js","assets/keysOf.8a025f7e.js","assets/Ellipsis.vue_vue_type_script_setup_true_lang.13bd0a7d.js","assets/Tabs.1eb33f60.js","assets/use-message.9d078f0e.js","assets/naiveUi.13532acc.js","assets/Dropdown.2fbbecac.js"])},{path:"/profile",component:()=>Rt(()=>import("./ProfileView.4ca4cbbf.js"),["assets/ProfileView.4ca4cbbf.js","assets/PostList.vue_vue_type_script_setup_true_lang.641fcf24.js","assets/PostList.b97ebd1b.css","assets/user.da0a4adb.js","assets/utils.82ac1979.js","assets/Space.28e34898.js","assets/fade-in-scale-up.cssr.71d7533c.js","assets/use-locale.46468919.js","assets/Card.ee9e9e2a.js","assets/keysOf.8a025f7e.js","assets/Ellipsis.vue_vue_type_script_setup_true_lang.13bd0a7d.js","assets/Tabs.1eb33f60.js","assets/use-message.9d078f0e.js","assets/naiveUi.13532acc.js","assets/Dropdown.2fbbecac.js"])},{path:"/task",component:()=>Rt(()=>import("./TaskView.3674b4e1.js"),["assets/TaskView.3674b4e1.js","assets/ButtonClose.vue_vue_type_script_setup_true_lang.40794e45.js","assets/use-message.9d078f0e.js","assets/Space.28e34898.js","assets/Ellipsis.vue_vue_type_script_setup_true_lang.13bd0a7d.js","assets/user.da0a4adb.js","assets/utils.82ac1979.js"])}]}]});xp.beforeEach((e,t,o)=>{const r=window.localStorage.getItem(Rl);e.name==="login"||r?o():o({name:"login",query:{redirected:e.fullPath}})});const Cp=K0(e6);Cp.use(xp);Cp.mount("#app");export{xs as $,M8 as A,O8 as B,Ha as C,Pr as D,dC as E,tm as F,uu as G,z2 as H,uC as I,pn as J,wi as K,nm as L,ml as M,bC as N,im as O,Hm as P,HS as Q,cC as R,fC as S,Ei as T,Rl as U,h8 as V,hC as W,ll as X,al as Y,us as Z,Fe as _,Ze as a,G as a$,V8 as a0,N4 as a1,$8 as a2,J3 as a3,A8 as a4,cl as a5,Zs as a6,jt as a7,ze as a8,k8 as a9,ei as aA,Km as aB,Tr as aC,r1 as aD,rb as aE,hn as aF,Yd as aG,lr as aH,Pi as aI,Wa as aJ,Vd as aK,Hr as aL,qd as aM,Er as aN,jo as aO,Wd as aP,jd as aQ,ws as aR,Fd as aS,J1 as aT,Vm as aU,td as aV,Xe as aW,F8 as aX,No as aY,B8 as aZ,xo as a_,zs as aa,Os as ab,W8 as ac,N8 as ad,E8 as ae,I8 as af,Ye as ag,z8 as ah,Mu as ai,pt as aj,Jn as ak,P8 as al,vm as am,o0 as an,Hi as ao,Zc as ap,Pm as aq,_8 as ar,Tg as as,Hg as at,fl as au,$r as av,Tx as aw,Nd as ax,pl as ay,Ex as az,It as b,Je as b0,H as b1,vC as b2,ki as b3,$f as b4,Nv as b5,D3 as b6,gn as b7,mt as b8,rm as b9,Q2 as bA,K3 as bB,vu as bC,Pu as bD,mf as bE,d2 as bF,Sw as bG,om as ba,WS as bb,M0 as bc,sg as bd,fp as be,U8 as bf,vr as bg,K8 as bh,S8 as bi,zo as bj,T8 as bk,H8 as bl,MS as bm,vw as bn,Nw as bo,Xw as bp,G8 as bq,e5 as br,j8 as bs,nh as bt,rh as bu,Bg as bv,vi as bw,Cl as bx,L8 as by,qt as bz,Mo as c,at as d,xe as e,JC as f,vd as g,Z as h,Le as i,gl as j,YC as k,aC as l,be as m,zt as n,ad as o,lC as p,s0 as q,bo as r,fu as s,pC as t,du as u,D8 as v,jr as w,Do as x,Qs as y,Hs as z};
