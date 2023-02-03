(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();const w={};let G=D;const y=1,v=2,U={owned:null,cleanups:null,context:null,owner:null};var a=null;let _=null,c=null,d=null,$=0;function J(e,n){const t=a,s=e.length===0,i=s?U:{owned:null,cleanups:null,context:null,owner:n||t},l=s?e:()=>e(()=>T(()=>L(i)));a=i;try{return C(l,!0)}finally{a=t}}function m(e,n,t){const s=V(e,n,!1,y);I(s)}function T(e){try{return e()}finally{}}function K(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&C(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],f=_&&_.running;f&&_.disposed.has(l),(f&&!l.tState||!f&&!l.state)&&(l.pure?c.push(l):d.push(l),l.observers&&F(l)),f||(l.state=y)}if(c.length>1e6)throw c=[],new Error},!1)),n}function I(e){if(!e.fn)return;L(e);const n=a,t=$;a=e,Q(e,e.value,t),a=n}function Q(e,n,t){let s;try{s=e.fn(n)}catch(i){e.pure&&(e.state=y),M(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?K(e,s):e.value=s,e.updatedAt=t)}function V(e,n,t,s=y,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:a,context:null,pure:t};return a===null||a!==U&&(a.owned?a.owned.push(l):a.owned=[l]),l}function P(e){const n=_;if(e.state===0||n)return;if(e.state===v||n)return N(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<$);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===y||n)I(e);else if(e.state===v||n){const i=c;c=null,C(()=>N(e,t[0]),!1),c=i}}function C(e,n){if(c)return e();let t=!1;n||(c=[]),d?t=!0:d=[],$++;try{const s=e();return W(t),s}catch(s){c||(d=null),M(s)}}function W(e){if(c&&(D(c),c=null),e)return;const n=d;d=null,n.length&&C(()=>G(n),!1)}function D(e){for(let n=0;n<e.length;n++)P(e[n])}function N(e,n){const t=_;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===y||t?i!==n&&P(i):(i.state===v||t)&&N(i,n))}}function F(e){const n=_;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=v,s.pure?c.push(s):d.push(s),s.observers&&F(s))}}function L(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),f=t.observerSlots.pop();s<i.length&&(l.sourceSlots[f]=s,i[s]=l,t.observerSlots[s]=f)}}if(e.owned){for(n=0;n<e.owned.length;n++)L(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function k(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function M(e){throw e=k(e),e}function R(e,n){return T(()=>e(n||{}))}function X(e,n,t){let s=t.length,i=n.length,l=s,f=0,o=0,r=n[i-1].nextSibling,u=null;for(;f<i||o<l;){if(n[f]===t[o]){f++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===f){const h=l<s?o?t[o-1].nextSibling:t[l-o]:r;for(;o<l;)e.insertBefore(t[o++],h)}else if(l===o)for(;f<i;)(!u||!u.has(n[f]))&&n[f].remove(),f++;else if(n[f]===t[l-1]&&t[o]===n[i-1]){const h=n[--i].nextSibling;e.insertBefore(t[o++],n[f++].nextSibling),e.insertBefore(t[--l],h),n[i]=t[l]}else{if(!u){u=new Map;let p=o;for(;p<l;)u.set(t[p],p++)}const h=u.get(n[f]);if(h!=null)if(o<h&&h<l){let p=f,S=1,B;for(;++p<i&&p<l&&!((B=u.get(n[p]))==null||B!==h+S);)S++;if(S>h-o){const q=n[f];for(;o<h;)e.insertBefore(t[o++],q)}else e.replaceChild(t[o++],n[f++])}else f++;else n[f++].remove()}}}function Y(e,n,t,s={}){let i;return J(l=>{i=l,n===document?e():j(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function H(e,n,t){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function Z(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function A(e,n){n==null?e.removeAttribute("class"):e.className=n}function j(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return x(e,n,s,t);m(i=>x(e,n(),i,t),s)}function x(e,n,t,s,i){for(w.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,f=s!==void 0;if(e=f&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(w.context)return t;if(l==="number"&&(n=n.toString()),f){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=g(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean"){if(w.context)return t;t=g(e,t,s)}else{if(l==="function")return m(()=>{let o=n();for(;typeof o=="function";)o=o();t=x(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],r=t&&Array.isArray(t);if(E(o,n,t,i))return m(()=>t=x(e,o,t,s,!0)),()=>t;if(w.context){if(!o.length)return t;for(let u=0;u<o.length;u++)if(o[u].parentNode)return t=o}if(o.length===0){if(t=g(e,t,s),f)return t}else r?t.length===0?O(e,o,s):X(e,t,o):(t&&g(e),O(e,o));t=o}else if(n instanceof Node){if(w.context&&n.parentNode)return t=f?[n]:n;if(Array.isArray(t)){if(f)return t=g(e,t,s,n);g(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function E(e,n,t,s){let i=!1;for(let l=0,f=n.length;l<f;l++){let o=n[l],r=t&&t[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=E(e,o,r)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=E(e,Array.isArray(o)?o:[o],Array.isArray(r)?r:[r])||i}else e.push(o),i=!0;else{const u=String(o);r&&r.nodeType===3&&r.data===u?e.push(r):e.push(document.createTextNode(u))}}return i}function O(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function g(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let f=n.length-1;f>=0;f--){const o=n[f];if(i!==o){const r=o.parentNode===e;!l&&!f?r?e.replaceChild(i,o):e.insertBefore(i,t):r&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}const z="/assets/blob.c18061e4.png",ee="_fullScreen_1rl8u_1",te="_homeLayout_1rl8u_6",ne="_decoration_1rl8u_12",ie="_snowball_1rl8u_32",b={fullScreen:ee,homeLayout:te,decoration:ne,snowball:ie,"logo-float":"_logo-float_1rl8u_1","logo-spin":"_logo-spin_1rl8u_1"},se=H('<div><div><div><img alt="snowball blob"></div><div><h1>Snowballers</h1><p>Accumulating experience and falling through the blockchain rabbit hole.</p><button>Join us on discord !</button></div></div></div>'),oe=()=>(()=>{const e=se.cloneNode(!0),n=e.firstChild,t=n.firstChild,s=t.firstChild;return Z(s,"src",z),m(i=>{const l=[b.fullScreen,b.homeLayout].join(" "),f=b.decoration,o=b.snowball;return l!==i._v$&&A(e,i._v$=l),f!==i._v$2&&A(n,i._v$2=f),o!==i._v$3&&A(t,i._v$3=o),i},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})(),le="_App_16ig6_1",fe="_container_16ig6_16",re="_logo_16ig6_24",ue="_header_16ig6_30",ce="_link_16ig6_40",ae={App:le,container:fe,logo:re,"logo-spin":"_logo-spin_16ig6_1",header:ue,link:ce},he=H("<div></div>"),pe=()=>(()=>{const e=he.cloneNode(!0);return j(e,R(oe,{})),m(()=>A(e,ae.App)),e})();Y(()=>R(pe,{}),document.getElementById("root"));
