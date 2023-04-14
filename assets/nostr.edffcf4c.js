import{ao as n,a8 as u,a9 as d}from"./index.263e31e4.js";function i(t){try{const e=n.decode(t);switch(e.type){case"nprofile":return e.data;case"npub":return{pubkey:e.data};default:return null}}catch{try{return n.npubEncode(t),{pubkey:t}}catch{return null}}}function p(t){try{const e=n.decode(t);if(e.type==="naddr")return e.data}catch{}return null}function y(t){if(!t)return null;if(s(t))return t;try{const e=n.decode(t);return e.type==="nsec"?e.data:null}catch{return null}}function s(t){try{const e=n.nsecEncode(t);return n.decode(e).data===t}catch{return!1}}function l(t){return n.nprofileEncode(t)}function h(t){const e=i(t);return e?l(e):null}function v(t){try{const e=n.decode(t);switch(e.type){case"nevent":return e.data;case"note":return{id:e.data,relays:[]};default:return null}}catch{try{return n.noteEncode(t),{id:t,relays:[]}}catch{return null}}}function E(t,e){var o;const r=new Set;for(const c of t)for(const a of e)u(r,(o=a[c])!=null?o:[]);return r}function b(t,e){const r=d(t.tags);return t.tags.forEach(o=>{(o[0]==="e"||o[0]==="p")&&o[2]&&r.add(o[2])}),n.neventEncode({id:t.id,relays:[...r,...e!=null?e:[]]})}function g(t){return Object.assign({kind:1,created_at:Math.floor(Date.now()/1e3),tags:[],content:""},t)}export{v as a,i as b,g as c,y as d,h as e,E as g,b as n,p as t};