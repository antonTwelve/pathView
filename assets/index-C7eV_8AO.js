(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Ec(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const gt={},Bs=[],Yn=()=>{},Rd=()=>!1,ta=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Tc=n=>n.startsWith("onUpdate:"),Vt=Object.assign,Ac=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Wp=Object.prototype.hasOwnProperty,lt=(n,e)=>Wp.call(n,e),Ve=Array.isArray,ks=n=>kr(n)==="[object Map]",na=n=>kr(n)==="[object Set]",pu=n=>kr(n)==="[object Date]",Ke=n=>typeof n=="function",Dt=n=>typeof n=="string",Kn=n=>typeof n=="symbol",ft=n=>n!==null&&typeof n=="object",Cd=n=>(ft(n)||Ke(n))&&Ke(n.then)&&Ke(n.catch),Pd=Object.prototype.toString,kr=n=>Pd.call(n),Xp=n=>kr(n).slice(8,-1),Dd=n=>kr(n)==="[object Object]",ia=n=>Dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,gr=Ec(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sa=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},qp=/-\w/g,Gi=sa(n=>n.replace(qp,e=>e.slice(1).toUpperCase())),Yp=/\B([A-Z])/g,xs=sa(n=>n.replace(Yp,"-$1").toLowerCase()),Ld=sa(n=>n.charAt(0).toUpperCase()+n.slice(1)),ya=sa(n=>n?`on${Ld(n)}`:""),Vi=(n,e)=>!Object.is(n,e),wo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Id=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},wc=n=>{const e=parseFloat(n);return isNaN(e)?n:e},$p=n=>{const e=Dt(n)?Number(n):NaN;return isNaN(e)?n:e};let mu;const ra=()=>mu||(mu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function In(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Dt(i)?Jp(i):In(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Dt(n)||ft(n))return n}const jp=/;(?![^(]*\))/g,Kp=/:([^]+)/,Zp=/\/\*[^]*?\*\//g;function Jp(n){const e={};return n.replace(Zp,"").split(jp).forEach(t=>{if(t){const i=t.split(Kp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function wt(n){let e="";if(Dt(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const i=wt(n[t]);i&&(e+=i+" ")}else if(ft(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Qp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",em=Ec(Qp);function Ud(n){return!!n||n===""}function tm(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=oa(n[i],e[i]);return t}function oa(n,e){if(n===e)return!0;let t=pu(n),i=pu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Kn(n),i=Kn(e),t||i)return n===e;if(t=Ve(n),i=Ve(e),t||i)return t&&i?tm(n,e):!1;if(t=ft(n),i=ft(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!oa(n[o],e[o]))return!1}}return String(n)===String(e)}function Nd(n,e){return n.findIndex(t=>oa(t,e))}const Fd=n=>!!(n&&n.__v_isRef===!0),ot=n=>Dt(n)?n:n==null?"":Ve(n)||ft(n)&&(n.toString===Pd||!Ke(n.toString))?Fd(n)?ot(n.value):JSON.stringify(n,Od,2):String(n),Od=(n,e)=>Fd(e)?Od(n,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ea(i,r)+" =>"]=s,t),{})}:na(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ea(t))}:Kn(e)?Ea(e):ft(e)&&!Ve(e)&&!Dd(e)?String(e):e,Ea=(n,e="")=>{var t;return Kn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Xt;class Bd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xt,!e&&Xt&&(this.index=(Xt.scopes||(Xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Xt;try{return Xt=this,e()}finally{Xt=t}}}on(){++this._on===1&&(this.prevScope=Xt,Xt=this)}off(){this._on>0&&--this._on===0&&(Xt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function kd(n){return new Bd(n)}function zd(){return Xt}function nm(n,e=!1){Xt&&Xt.cleanups.push(n)}let _t;const Ta=new WeakSet;class Vd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xt&&Xt.active&&Xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ta.has(this)&&(Ta.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xu(this),Wd(this);const e=_t,t=Nn;_t=this,Nn=!0;try{return this.fn()}finally{Xd(this),_t=e,Nn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Pc(e);this.deps=this.depsTail=void 0,xu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ta.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xl(this)&&this.run()}get dirty(){return xl(this)}}let Hd=0,_r,vr;function Gd(n,e=!1){if(n.flags|=8,e){n.next=vr,vr=n;return}n.next=_r,_r=n}function Rc(){Hd++}function Cc(){if(--Hd>0)return;if(vr){let e=vr;for(vr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;_r;){let e=_r;for(_r=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Wd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Xd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Pc(i),im(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function xl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(qd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function qd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ar)||(n.globalVersion=Ar,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!xl(n))))return;n.flags|=2;const e=n.dep,t=_t,i=Nn;_t=n,Nn=!0;try{Wd(n);const s=n.fn(n._value);(e.version===0||Vi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{_t=t,Nn=i,Xd(n),n.flags&=-3}}function Pc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Pc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function im(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Nn=!0;const Yd=[];function _i(){Yd.push(Nn),Nn=!1}function vi(){const n=Yd.pop();Nn=n===void 0?!0:n}function xu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=_t;_t=void 0;try{e()}finally{_t=t}}}let Ar=0;class sm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Dc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!_t||!Nn||_t===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==_t)t=this.activeLink=new sm(_t,this),_t.deps?(t.prevDep=_t.depsTail,_t.depsTail.nextDep=t,_t.depsTail=t):_t.deps=_t.depsTail=t,$d(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=_t.depsTail,t.nextDep=void 0,_t.depsTail.nextDep=t,_t.depsTail=t,_t.deps===t&&(_t.deps=i)}return t}trigger(e){this.version++,Ar++,this.notify(e)}notify(e){Rc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Cc()}}}function $d(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)$d(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ko=new WeakMap,fs=Symbol(""),gl=Symbol(""),wr=Symbol("");function qt(n,e,t){if(Nn&&_t){let i=ko.get(n);i||ko.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Dc),s.map=i,s.key=t),s.track()}}function fi(n,e,t,i,s,r){const o=ko.get(n);if(!o){Ar++;return}const a=l=>{l&&l.trigger()};if(Rc(),e==="clear")o.forEach(a);else{const l=Ve(n),c=l&&ia(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===wr||!Kn(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(wr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(fs)),ks(n)&&a(o.get(gl)));break;case"delete":l||(a(o.get(fs)),ks(n)&&a(o.get(gl)));break;case"set":ks(n)&&a(o.get(fs));break}}Cc()}function rm(n,e){const t=ko.get(n);return t&&t.get(e)}function vs(n){const e=nt(n);return e===n?e:(qt(e,"iterate",wr),mn(n)?e:e.map(Fn))}function aa(n){return qt(n=nt(n),"iterate",wr),n}function Ui(n,e){return bi(n)?$n(n)?Xs(Fn(e)):Xs(e):Fn(e)}const om={__proto__:null,[Symbol.iterator](){return Aa(this,Symbol.iterator,n=>Ui(this,n))},concat(...n){return vs(this).concat(...n.map(e=>Ve(e)?vs(e):e))},entries(){return Aa(this,"entries",n=>(n[1]=Ui(this,n[1]),n))},every(n,e){return Qn(this,"every",n,e,void 0,arguments)},filter(n,e){return Qn(this,"filter",n,e,t=>t.map(i=>Ui(this,i)),arguments)},find(n,e){return Qn(this,"find",n,e,t=>Ui(this,t),arguments)},findIndex(n,e){return Qn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Qn(this,"findLast",n,e,t=>Ui(this,t),arguments)},findLastIndex(n,e){return Qn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Qn(this,"forEach",n,e,void 0,arguments)},includes(...n){return wa(this,"includes",n)},indexOf(...n){return wa(this,"indexOf",n)},join(n){return vs(this).join(n)},lastIndexOf(...n){return wa(this,"lastIndexOf",n)},map(n,e){return Qn(this,"map",n,e,void 0,arguments)},pop(){return rr(this,"pop")},push(...n){return rr(this,"push",n)},reduce(n,...e){return gu(this,"reduce",n,e)},reduceRight(n,...e){return gu(this,"reduceRight",n,e)},shift(){return rr(this,"shift")},some(n,e){return Qn(this,"some",n,e,void 0,arguments)},splice(...n){return rr(this,"splice",n)},toReversed(){return vs(this).toReversed()},toSorted(n){return vs(this).toSorted(n)},toSpliced(...n){return vs(this).toSpliced(...n)},unshift(...n){return rr(this,"unshift",n)},values(){return Aa(this,"values",n=>Ui(this,n))}};function Aa(n,e,t){const i=aa(n),s=i[e]();return i!==n&&!mn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const am=Array.prototype;function Qn(n,e,t,i,s,r){const o=aa(n),a=o!==n&&!mn(n),l=o[e];if(l!==am[e]){const f=l.apply(n,r);return a?Fn(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,Ui(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function gu(n,e,t,i){const s=aa(n);let r=t;return s!==n&&(mn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Ui(n,a),l,n)}),s[e](r,...i)}function wa(n,e,t){const i=nt(n);qt(i,"iterate",wr);const s=i[e](...t);return(s===-1||s===!1)&&la(t[0])?(t[0]=nt(t[0]),i[e](...t)):s}function rr(n,e,t=[]){_i(),Rc();const i=nt(n)[e].apply(n,t);return Cc(),vi(),i}const lm=Ec("__proto__,__v_isRef,__isVue"),jd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Kn));function cm(n){Kn(n)||(n=String(n));const e=nt(this);return qt(e,"has",n),e.hasOwnProperty(n)}class Kd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?vm:eh:r?Qd:Jd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ve(e);if(!s){let l;if(o&&(l=om[t]))return l;if(t==="hasOwnProperty")return cm}const a=Reflect.get(e,t,ut(e)?e:i);if((Kn(t)?jd.has(t):lm(t))||(s||qt(e,"get",t),r))return a;if(ut(a)){const l=o&&ia(t)?a:a.value;return s&&ft(l)?vl(l):l}return ft(a)?s?vl(a):zr(a):a}}class Zd extends Kd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Ve(e)&&ia(t);if(!this._isShallow){const c=bi(r);if(!mn(i)&&!bi(i)&&(r=nt(r),i=nt(i)),!o&&ut(r)&&!ut(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:lt(e,t),l=Reflect.set(e,t,i,ut(e)?e:s);return e===nt(s)&&(a?Vi(i,r)&&fi(e,"set",t,i):fi(e,"add",t,i)),l}deleteProperty(e,t){const i=lt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&fi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Kn(t)||!jd.has(t))&&qt(e,"has",t),i}ownKeys(e){return qt(e,"iterate",Ve(e)?"length":fs),Reflect.ownKeys(e)}}class um extends Kd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const fm=new Zd,dm=new um,hm=new Zd(!0);const _l=n=>n,Kr=n=>Reflect.getPrototypeOf(n);function pm(n,e,t){return function(...i){const s=this.__v_raw,r=nt(s),o=ks(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?_l:e?Xs:Fn;return!e&&qt(r,"iterate",l?gl:fs),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Zr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function mm(n,e){const t={get(s){const r=this.__v_raw,o=nt(r),a=nt(s);n||(Vi(s,a)&&qt(o,"get",s),qt(o,"get",a));const{has:l}=Kr(o),c=e?_l:n?Xs:Fn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&qt(nt(s),"iterate",fs),s.size},has(s){const r=this.__v_raw,o=nt(r),a=nt(s);return n||(Vi(s,a)&&qt(o,"has",s),qt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=nt(a),c=e?_l:n?Xs:Fn;return!n&&qt(l,"iterate",fs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Vt(t,n?{add:Zr("add"),set:Zr("set"),delete:Zr("delete"),clear:Zr("clear")}:{add(s){!e&&!mn(s)&&!bi(s)&&(s=nt(s));const r=nt(this);return Kr(r).has.call(r,s)||(r.add(s),fi(r,"add",s,s)),this},set(s,r){!e&&!mn(r)&&!bi(r)&&(r=nt(r));const o=nt(this),{has:a,get:l}=Kr(o);let c=a.call(o,s);c||(s=nt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Vi(r,u)&&fi(o,"set",s,r):fi(o,"add",s,r),this},delete(s){const r=nt(this),{has:o,get:a}=Kr(r);let l=o.call(r,s);l||(s=nt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&fi(r,"delete",s,void 0),c},clear(){const s=nt(this),r=s.size!==0,o=s.clear();return r&&fi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=pm(s,n,e)}),t}function Lc(n,e){const t=mm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(lt(t,s)&&s in i?t:i,s,r)}const xm={get:Lc(!1,!1)},gm={get:Lc(!1,!0)},_m={get:Lc(!0,!1)};const Jd=new WeakMap,Qd=new WeakMap,eh=new WeakMap,vm=new WeakMap;function bm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sm(n){return n.__v_skip||!Object.isExtensible(n)?0:bm(Xp(n))}function zr(n){return bi(n)?n:Ic(n,!1,fm,xm,Jd)}function th(n){return Ic(n,!1,hm,gm,Qd)}function vl(n){return Ic(n,!0,dm,_m,eh)}function Ic(n,e,t,i,s){if(!ft(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Sm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function $n(n){return bi(n)?$n(n.__v_raw):!!(n&&n.__v_isReactive)}function bi(n){return!!(n&&n.__v_isReadonly)}function mn(n){return!!(n&&n.__v_isShallow)}function la(n){return n?!!n.__v_raw:!1}function nt(n){const e=n&&n.__v_raw;return e?nt(e):n}function Uc(n){return!lt(n,"__v_skip")&&Object.isExtensible(n)&&Id(n,"__v_skip",!0),n}const Fn=n=>ft(n)?zr(n):n,Xs=n=>ft(n)?vl(n):n;function ut(n){return n?n.__v_isRef===!0:!1}function qe(n){return nh(n,!1)}function Mm(n){return nh(n,!0)}function nh(n,e){return ut(n)?n:new ym(n,e)}class ym{constructor(e,t){this.dep=new Dc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:Fn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||mn(e)||bi(e);e=i?e:nt(e),Vi(e,t)&&(this._rawValue=e,this._value=i?e:Fn(e),this.dep.trigger())}}function St(n){return ut(n)?n.value:n}const Em={get:(n,e,t)=>e==="__v_raw"?n:St(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return ut(s)&&!ut(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function ih(n){return $n(n)?n:new Proxy(n,Em)}function Tm(n){const e=Ve(n)?new Array(n.length):{};for(const t in n)e[t]=sh(n,t);return e}class Am{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=nt(e);let s=!0,r=e;if(!Ve(e)||!ia(String(t)))do s=!la(r)||mn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=St(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&ut(this._raw[this._key])){const t=this._object[this._key];if(ut(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return rm(this._raw,this._key)}}class wm{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Rm(n,e,t){return ut(n)?n:Ke(n)?new wm(n):ft(n)&&arguments.length>1?sh(n,e,t):qe(n)}function sh(n,e,t){return new Am(n,e,t)}class Cm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Dc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ar-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_t!==this)return Gd(this,!0),!0}get value(){const e=this.dep.track();return qd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Pm(n,e,t=!1){let i,s;return Ke(n)?i=n:(i=n.get,s=n.set),new Cm(i,s,t)}const Jr={},zo=new WeakMap;let ss;function Dm(n,e=!1,t=ss){if(t){let i=zo.get(t);i||zo.set(t,i=[]),i.push(n)}}function Lm(n,e,t=gt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=S=>s?S:mn(S)||s===!1||s===0?di(S,1):di(S);let u,f,d,h,x=!1,v=!1;if(ut(n)?(f=()=>n.value,x=mn(n)):$n(n)?(f=()=>c(n),x=!0):Ve(n)?(v=!0,x=n.some(S=>$n(S)||mn(S)),f=()=>n.map(S=>{if(ut(S))return S.value;if($n(S))return c(S);if(Ke(S))return l?l(S,2):S()})):Ke(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){_i();try{d()}finally{vi()}}const S=ss;ss=u;try{return l?l(n,3,[h]):n(h)}finally{ss=S}}:f=Yn,e&&s){const S=f,C=s===!0?1/0:s;f=()=>di(S(),C)}const m=zd(),p=()=>{u.stop(),m&&m.active&&Ac(m.effects,u)};if(r&&e){const S=e;e=(...C)=>{S(...C),p()}}let R=v?new Array(n.length).fill(Jr):Jr;const T=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const C=u.run();if(s||x||(v?C.some((M,L)=>Vi(M,R[L])):Vi(C,R))){d&&d();const M=ss;ss=u;try{const L=[C,R===Jr?void 0:v&&R[0]===Jr?[]:R,h];R=C,l?l(e,3,L):e(...L)}finally{ss=M}}}else u.run()};return a&&a(T),u=new Vd(f),u.scheduler=o?()=>o(T,!1):T,h=S=>Dm(S,!1,u),d=u.onStop=()=>{const S=zo.get(u);if(S){if(l)l(S,4);else for(const C of S)C();zo.delete(u)}},e?i?T(!0):R=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function di(n,e=1/0,t){if(e<=0||!ft(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,ut(n))di(n.value,e,t);else if(Ve(n))for(let i=0;i<n.length;i++)di(n[i],e,t);else if(na(n)||ks(n))n.forEach(i=>{di(i,e,t)});else if(Dd(n)){for(const i in n)di(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&di(n[i],e,t)}return n}function Vr(n,e,t,i){try{return i?n(...i):n()}catch(s){ca(s,e,t)}}function On(n,e,t,i){if(Ke(n)){const s=Vr(n,e,t,i);return s&&Cd(s)&&s.catch(r=>{ca(r,e,t)}),s}if(Ve(n)){const s=[];for(let r=0;r<n.length;r++)s.push(On(n[r],e,t,i));return s}}function ca(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||gt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){_i(),Vr(r,null,10,[n,l,c]),vi();return}}Im(n,t,s,i,o)}function Im(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Zt=[];let Hn=-1;const zs=[];let Ni=null,Ns=0;const rh=Promise.resolve();let Vo=null;function Nc(n){const e=Vo||rh;return n?e.then(this?n.bind(this):n):e}function Um(n){let e=Hn+1,t=Zt.length;for(;e<t;){const i=e+t>>>1,s=Zt[i],r=Rr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Fc(n){if(!(n.flags&1)){const e=Rr(n),t=Zt[Zt.length-1];!t||!(n.flags&2)&&e>=Rr(t)?Zt.push(n):Zt.splice(Um(e),0,n),n.flags|=1,oh()}}function oh(){Vo||(Vo=rh.then(lh))}function Nm(n){Ve(n)?zs.push(...n):Ni&&n.id===-1?Ni.splice(Ns+1,0,n):n.flags&1||(zs.push(n),n.flags|=1),oh()}function _u(n,e,t=Hn+1){for(;t<Zt.length;t++){const i=Zt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Zt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ah(n){if(zs.length){const e=[...new Set(zs)].sort((t,i)=>Rr(t)-Rr(i));if(zs.length=0,Ni){Ni.push(...e);return}for(Ni=e,Ns=0;Ns<Ni.length;Ns++){const t=Ni[Ns];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ni=null,Ns=0}}const Rr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function lh(n){try{for(Hn=0;Hn<Zt.length;Hn++){const e=Zt[Hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Hn<Zt.length;Hn++){const e=Zt[Hn];e&&(e.flags&=-2)}Hn=-1,Zt.length=0,ah(),Vo=null,(Zt.length||zs.length)&&lh()}}let Tn=null,ch=null;function Ho(n){const e=Tn;return Tn=n,ch=n&&n.type.__scopeId||null,e}function Zn(n,e=Tn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Xo(-1);const r=Ho(e);let o;try{o=n(...s)}finally{Ho(r),i._d&&Xo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function qs(n,e){if(Tn===null)return n;const t=ma(Tn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=gt]=e[s];r&&(Ke(r)&&(r={mounted:r,updated:r}),r.deep&&di(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function $i(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(_i(),On(l,t,8,[n.el,a,n,e]),vi())}}const Fm=Symbol("_vte"),uh=n=>n.__isTeleport,ui=Symbol("_leaveCb"),Qr=Symbol("_enterCb");function Om(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return da(()=>{n.isMounted=!0}),Oc(()=>{n.isUnmounting=!0}),n}const Sn=[Function,Array],fh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Sn,onEnter:Sn,onAfterEnter:Sn,onEnterCancelled:Sn,onBeforeLeave:Sn,onLeave:Sn,onAfterLeave:Sn,onLeaveCancelled:Sn,onBeforeAppear:Sn,onAppear:Sn,onAfterAppear:Sn,onAppearCancelled:Sn},dh=n=>{const e=n.subTree;return e.component?dh(e.component):e},Bm={name:"BaseTransition",props:fh,setup(n,{slots:e}){const t=Vc(),i=Om();return()=>{const s=e.default&&mh(e.default(),!0);if(!s||!s.length)return;const r=hh(s),o=nt(n),{mode:a}=o;if(i.isLeaving)return Ra(r);const l=vu(r);if(!l)return Ra(r);let c=bl(l,o,i,t,f=>c=f);l.type!==Jt&&Cr(l,c);let u=t.subTree&&vu(t.subTree);if(u&&u.type!==Jt&&!rs(u,l)&&dh(t).type!==Jt){let f=bl(u,o,i,t);if(Cr(u,f),a==="out-in"&&l.type!==Jt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Ra(r);a==="in-out"&&l.type!==Jt?f.delayLeave=(d,h,x)=>{const v=ph(i,u);v[String(u.key)]=u,d[ui]=()=>{h(),d[ui]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{x(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function hh(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Jt){e=t;break}}return e}const km=Bm;function ph(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function bl(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:x,onLeaveCancelled:v,onBeforeAppear:m,onAppear:p,onAfterAppear:R,onAppearCancelled:T}=e,S=String(n.key),C=ph(t,n),M=(b,_)=>{b&&On(b,i,9,_)},L=(b,_)=>{const D=_[1];M(b,_),Ve(b)?b.every(I=>I.length<=1)&&D():b.length<=1&&D()},O={mode:o,persisted:a,beforeEnter(b){let _=l;if(!t.isMounted)if(r)_=m||l;else return;b[ui]&&b[ui](!0);const D=C[S];D&&rs(n,D)&&D.el[ui]&&D.el[ui](),M(_,[b])},enter(b){let _=c,D=u,I=f;if(!t.isMounted)if(r)_=p||c,D=R||u,I=T||f;else return;let z=!1;const K=b[Qr]=te=>{z||(z=!0,te?M(I,[b]):M(D,[b]),O.delayedLeave&&O.delayedLeave(),b[Qr]=void 0)};_?L(_,[b,K]):K()},leave(b,_){const D=String(n.key);if(b[Qr]&&b[Qr](!0),t.isUnmounting)return _();M(d,[b]);let I=!1;const z=b[ui]=K=>{I||(I=!0,_(),K?M(v,[b]):M(x,[b]),b[ui]=void 0,C[D]===n&&delete C[D])};C[D]=n,h?L(h,[b,z]):z()},clone(b){const _=bl(b,e,t,i,s);return s&&s(_),_}};return O}function Ra(n){if(ua(n))return n=Wi(n),n.children=null,n}function vu(n){if(!ua(n))return uh(n.type)&&n.children?hh(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ke(t.default))return t.default()}}function Cr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Cr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function mh(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===an?(o.patchFlag&128&&s++,i=i.concat(mh(o.children,e,a))):(e||o.type!==Jt)&&i.push(a!=null?Wi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function xh(n,e){return Ke(n)?Vt({name:n.name},e,{setup:n}):n}function gh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Go=new WeakMap;function br(n,e,t,i,s=!1){if(Ve(n)){n.forEach((x,v)=>br(x,e&&(Ve(e)?e[v]:e),t,i,s));return}if(Sr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&br(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?ma(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===gt?a.refs={}:a.refs,f=a.setupState,d=nt(f),h=f===gt?Rd:x=>lt(d,x);if(c!=null&&c!==l){if(bu(e),Dt(c))u[c]=null,h(c)&&(f[c]=null);else if(ut(c)){c.value=null;const x=e;x.k&&(u[x.k]=null)}}if(Ke(l))Vr(l,a,12,[o,u]);else{const x=Dt(l),v=ut(l);if(x||v){const m=()=>{if(n.f){const p=x?h(l)?f[l]:u[l]:l.value;if(s)Ve(p)&&Ac(p,r);else if(Ve(p))p.includes(r)||p.push(r);else if(x)u[l]=[r],h(l)&&(f[l]=u[l]);else{const R=[r];l.value=R,n.k&&(u[n.k]=R)}}else x?(u[l]=o,h(l)&&(f[l]=o)):v&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const p=()=>{m(),Go.delete(n)};p.id=-1,Go.set(n,p),hn(p,t)}else bu(n),m()}}}function bu(n){const e=Go.get(n);e&&(e.flags|=8,Go.delete(n))}ra().requestIdleCallback;ra().cancelIdleCallback;const Sr=n=>!!n.type.__asyncLoader,ua=n=>n.type.__isKeepAlive;function zm(n,e){_h(n,"a",e)}function Vm(n,e){_h(n,"da",e)}function _h(n,e,t=Qt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(fa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ua(s.parent.vnode)&&Hm(i,e,t,s),s=s.parent}}function Hm(n,e,t,i){const s=fa(e,n,i,!0);vh(()=>{Ac(i[e],s)},t)}function fa(n,e,t=Qt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{_i();const a=Hr(t),l=On(e,t,n,o);return a(),vi(),l});return i?s.unshift(r):s.push(r),r}}const Ei=n=>(e,t=Qt)=>{(!Dr||n==="sp")&&fa(n,(...i)=>e(...i),t)},Gm=Ei("bm"),da=Ei("m"),Wm=Ei("bu"),Xm=Ei("u"),Oc=Ei("bum"),vh=Ei("um"),qm=Ei("sp"),Ym=Ei("rtg"),$m=Ei("rtc");function jm(n,e=Qt){fa("ec",n,e)}const Km=Symbol.for("v-ndc");function Ro(n,e,t,i){let s;const r=t,o=Ve(n);if(o||Dt(n)){const a=o&&$n(n);let l=!1,c=!1;a&&(l=!mn(n),c=bi(n),n=aa(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Xs(Fn(n[u])):Fn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(ft(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Sl=n=>n?kh(n)?ma(n):Sl(n.parent):null,Mr=Vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Sl(n.parent),$root:n=>Sl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Sh(n),$forceUpdate:n=>n.f||(n.f=()=>{Fc(n.update)}),$nextTick:n=>n.n||(n.n=Nc.bind(n.proxy)),$watch:n=>l0.bind(n)}),Ca=(n,e)=>n!==gt&&!n.__isScriptSetup&&lt(n,e),Zm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ca(i,e))return o[e]=1,i[e];if(s!==gt&&lt(s,e))return o[e]=2,s[e];if(lt(r,e))return o[e]=3,r[e];if(t!==gt&&lt(t,e))return o[e]=4,t[e];Ml&&(o[e]=0)}}const c=Mr[e];let u,f;if(c)return e==="$attrs"&&qt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==gt&&lt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,lt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Ca(s,e)?(s[e]=t,!0):i!==gt&&lt(i,e)?(i[e]=t,!0):lt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==gt&&a[0]!=="$"&&lt(n,a)||Ca(e,a)||lt(r,a)||lt(i,a)||lt(Mr,a)||lt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:lt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Su(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ml=!0;function Jm(n){const e=Sh(n),t=n.proxy,i=n.ctx;Ml=!1,e.beforeCreate&&Mu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:x,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:R,destroyed:T,unmounted:S,render:C,renderTracked:M,renderTriggered:L,errorCaptured:O,serverPrefetch:b,expose:_,inheritAttrs:D,components:I,directives:z,filters:K}=e;if(c&&Qm(c,i,null),o)for(const Q in o){const H=o[Q];Ke(H)&&(i[Q]=H.bind(t))}if(s){const Q=s.call(t,t);ft(Q)&&(n.data=zr(Q))}if(Ml=!0,r)for(const Q in r){const H=r[Q],pe=Ke(H)?H.bind(t,t):Ke(H.get)?H.get.bind(t,t):Yn,me=!Ke(H)&&Ke(H.set)?H.set.bind(t):Yn,ue=ct({get:pe,set:me});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>ue.value,set:Se=>ue.value=Se})}if(a)for(const Q in a)bh(a[Q],i,t,Q);if(l){const Q=Ke(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(H=>{Co(H,Q[H])})}u&&Mu(u,n,"c");function X(Q,H){Ve(H)?H.forEach(pe=>Q(pe.bind(t))):H&&Q(H.bind(t))}if(X(Gm,f),X(da,d),X(Wm,h),X(Xm,x),X(zm,v),X(Vm,m),X(jm,O),X($m,M),X(Ym,L),X(Oc,R),X(vh,S),X(qm,b),Ve(_))if(_.length){const Q=n.exposed||(n.exposed={});_.forEach(H=>{Object.defineProperty(Q,H,{get:()=>t[H],set:pe=>t[H]=pe,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===Yn&&(n.render=C),D!=null&&(n.inheritAttrs=D),I&&(n.components=I),z&&(n.directives=z),b&&gh(n)}function Qm(n,e,t=Yn){Ve(n)&&(n=yl(n));for(const i in n){const s=n[i];let r;ft(s)?"default"in s?r=jn(s.from||i,s.default,!0):r=jn(s.from||i):r=jn(s),ut(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Mu(n,e,t){On(Ve(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function bh(n,e,t,i){let s=i.includes(".")?Eh(t,i):()=>t[i];if(Dt(n)){const r=e[n];Ke(r)&&zt(s,r)}else if(Ke(n))zt(s,n.bind(t));else if(ft(n))if(Ve(n))n.forEach(r=>bh(r,e,t,i));else{const r=Ke(n.handler)?n.handler.bind(t):e[n.handler];Ke(r)&&zt(s,r,n)}}function Sh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Wo(l,c,o,!0)),Wo(l,e,o)),ft(e)&&r.set(e,l),l}function Wo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Wo(n,r,t,!0),s&&s.forEach(o=>Wo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=e0[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const e0={data:yu,props:Eu,emits:Eu,methods:mr,computed:mr,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:mr,directives:mr,watch:n0,provide:yu,inject:t0};function yu(n,e){return e?n?function(){return Vt(Ke(n)?n.call(this,this):n,Ke(e)?e.call(this,this):e)}:e:n}function t0(n,e){return mr(yl(n),yl(e))}function yl(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function $t(n,e){return n?[...new Set([].concat(n,e))]:e}function mr(n,e){return n?Vt(Object.create(null),n,e):e}function Eu(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:Vt(Object.create(null),Su(n),Su(e??{})):e}function n0(n,e){if(!n)return e;if(!e)return n;const t=Vt(Object.create(null),n);for(const i in e)t[i]=$t(n[i],e[i]);return t}function Mh(){return{app:null,config:{isNativeTag:Rd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let i0=0;function s0(n,e){return function(i,s=null){Ke(i)||(i=Vt({},i)),s!=null&&!ft(s)&&(s=null);const r=Mh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:i0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:z0,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ke(u.install)?(o.add(u),u.install(c,...f)):Ke(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||bt(i,s);return h.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(h,u,d),l=!0,c._container=u,u.__vue_app__=c,ma(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(On(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=ds;ds=c;try{return u()}finally{ds=f}}};return c}}let ds=null;function Co(n,e){if(Qt){let t=Qt.provides;const i=Qt.parent&&Qt.parent.provides;i===t&&(t=Qt.provides=Object.create(i)),t[n]=e}}function jn(n,e,t=!1){const i=Vc();if(i||ds){let s=ds?ds._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ke(e)?e.call(i&&i.proxy):e}}function r0(){return!!(Vc()||ds)}const o0=Symbol.for("v-scx"),a0=()=>jn(o0);function zt(n,e,t){return yh(n,e,t)}function yh(n,e,t=gt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Vt({},t),l=e&&i||!e&&r!=="post";let c;if(Dr){if(r==="sync"){const h=a0();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Yn,h.resume=Yn,h.pause=Yn,h}}const u=Qt;a.call=(h,x,v)=>On(h,u,x,v);let f=!1;r==="post"?a.scheduler=h=>{hn(h,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(h,x)=>{x?h():Fc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=Lm(n,e,a);return Dr&&(c?c.push(d):l&&d()),d}function l0(n,e,t){const i=this.proxy,s=Dt(n)?n.includes(".")?Eh(i,n):()=>i[n]:n.bind(i,i);let r;Ke(e)?r=e:(r=e.handler,t=e);const o=Hr(this),a=yh(s,r.bind(i),t);return o(),a}function Eh(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const c0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Gi(e)}Modifiers`]||n[`${xs(e)}Modifiers`];function u0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||gt;let s=t;const r=e.startsWith("update:"),o=r&&c0(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Dt(u)?u.trim():u)),o.number&&(s=t.map(wc)));let a,l=i[a=ya(e)]||i[a=ya(Gi(e))];!l&&r&&(l=i[a=ya(xs(e))]),l&&On(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,On(c,n,6,s)}}const f0=new WeakMap;function Th(n,e,t=!1){const i=t?f0:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ke(n)){const l=c=>{const u=Th(c,e,!0);u&&(a=!0,Vt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ft(n)&&i.set(n,null),null):(Ve(r)?r.forEach(l=>o[l]=null):Vt(o,r),ft(n)&&i.set(n,o),o)}function ha(n,e){return!n||!ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(n,e[0].toLowerCase()+e.slice(1))||lt(n,xs(e))||lt(n,e))}function Tu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:x,inheritAttrs:v}=n,m=Ho(n);let p,R;try{if(t.shapeFlag&4){const S=s||i,C=S;p=Gn(c.call(C,S,u,f,h,d,x)),R=a}else{const S=e;p=Gn(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),R=e.props?a:d0(a)}}catch(S){yr.length=0,ca(S,n,1),p=bt(Jt)}let T=p;if(R&&v!==!1){const S=Object.keys(R),{shapeFlag:C}=T;S.length&&C&7&&(r&&S.some(Tc)&&(R=h0(R,r)),T=Wi(T,R,!1,!0))}return t.dirs&&(T=Wi(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&Cr(T,t.transition),p=T,Ho(m),p}const d0=n=>{let e;for(const t in n)(t==="class"||t==="style"||ta(t))&&((e||(e={}))[t]=n[t]);return e},h0=(n,e)=>{const t={};for(const i in n)(!Tc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function p0(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Au(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!ha(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Au(i,o,c):!0:!!o;return!1}function Au(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!ha(t,r))return!0}return!1}function m0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ah={},wh=()=>Object.create(Ah),Rh=n=>Object.getPrototypeOf(n)===Ah;function x0(n,e,t,i=!1){const s={},r=wh();n.propsDefaults=Object.create(null),Ch(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:th(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function g0(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=nt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ha(n.emitsOptions,d))continue;const h=e[d];if(l)if(lt(r,d))h!==r[d]&&(r[d]=h,c=!0);else{const x=Gi(d);s[x]=El(l,a,x,h,n,!1)}else h!==r[d]&&(r[d]=h,c=!0)}}}else{Ch(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!lt(e,f)&&((u=xs(f))===f||!lt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=El(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!lt(e,f))&&(delete r[f],c=!0)}c&&fi(n.attrs,"set","")}function Ch(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(gr(l))continue;const c=e[l];let u;s&&lt(s,u=Gi(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ha(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=nt(t),c=a||gt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=El(s,l,f,c[f],n,!lt(c,f))}}return o}function El(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=lt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ke(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Hr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===xs(t))&&(i=!0))}return i}const _0=new WeakMap;function Ph(n,e,t=!1){const i=t?_0:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ke(n)){const u=f=>{l=!0;const[d,h]=Ph(f,e,!0);Vt(o,d),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ft(n)&&i.set(n,Bs),Bs;if(Ve(r))for(let u=0;u<r.length;u++){const f=Gi(r[u]);wu(f)&&(o[f]=gt)}else if(r)for(const u in r){const f=Gi(u);if(wu(f)){const d=r[u],h=o[f]=Ve(d)||Ke(d)?{type:d}:Vt({},d),x=h.type;let v=!1,m=!0;if(Ve(x))for(let p=0;p<x.length;++p){const R=x[p],T=Ke(R)&&R.name;if(T==="Boolean"){v=!0;break}else T==="String"&&(m=!1)}else v=Ke(x)&&x.name==="Boolean";h[0]=v,h[1]=m,(v||lt(h,"default"))&&a.push(f)}}const c=[o,a];return ft(n)&&i.set(n,c),c}function wu(n){return n[0]!=="$"&&!gr(n)}const Bc=n=>n==="_"||n==="_ctx"||n==="$stable",kc=n=>Ve(n)?n.map(Gn):[Gn(n)],v0=(n,e,t)=>{if(e._n)return e;const i=Zn((...s)=>kc(e(...s)),t);return i._c=!1,i},Dh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Bc(s))continue;const r=n[s];if(Ke(r))e[s]=v0(s,r,i);else if(r!=null){const o=kc(r);e[s]=()=>o}}},Lh=(n,e)=>{const t=kc(e);n.slots.default=()=>t},Ih=(n,e,t)=>{for(const i in e)(t||!Bc(i))&&(n[i]=e[i])},b0=(n,e,t)=>{const i=n.slots=wh();if(n.vnode.shapeFlag&32){const s=e._;s?(Ih(i,e,t),t&&Id(i,"_",s,!0)):Dh(e,i)}else e&&Lh(n,e)},S0=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=gt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Ih(s,e,t):(r=!e.$stable,Dh(e,s)),o=e}else e&&(Lh(n,e),o={default:1});if(r)for(const a in s)!Bc(a)&&o[a]==null&&delete s[a]},hn=A0;function M0(n){return y0(n)}function y0(n,e){const t=ra();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Yn,insertStaticContent:x}=n,v=(w,P,F,E=null,q=null,W=null,ce=void 0,J=null,le=!!P.dynamicChildren)=>{if(w===P)return;w&&!rs(w,P)&&(E=U(w),Se(w,q,W,!0),w=null),P.patchFlag===-2&&(le=!1,P.dynamicChildren=null);const{type:Y,ref:de,shapeFlag:y}=P;switch(Y){case pa:m(w,P,F,E);break;case Jt:p(w,P,F,E);break;case Po:w==null&&R(P,F,E,ce);break;case an:I(w,P,F,E,q,W,ce,J,le);break;default:y&1?C(w,P,F,E,q,W,ce,J,le):y&6?z(w,P,F,E,q,W,ce,J,le):(y&64||y&128)&&Y.process(w,P,F,E,q,W,ce,J,le,re)}de!=null&&q?br(de,w&&w.ref,W,P||w,!P):de==null&&w&&w.ref!=null&&br(w.ref,null,W,w,!0)},m=(w,P,F,E)=>{if(w==null)i(P.el=a(P.children),F,E);else{const q=P.el=w.el;P.children!==w.children&&c(q,P.children)}},p=(w,P,F,E)=>{w==null?i(P.el=l(P.children||""),F,E):P.el=w.el},R=(w,P,F,E)=>{[w.el,w.anchor]=x(w.children,P,F,E,w.el,w.anchor)},T=({el:w,anchor:P},F,E)=>{let q;for(;w&&w!==P;)q=d(w),i(w,F,E),w=q;i(P,F,E)},S=({el:w,anchor:P})=>{let F;for(;w&&w!==P;)F=d(w),s(w),w=F;s(P)},C=(w,P,F,E,q,W,ce,J,le)=>{if(P.type==="svg"?ce="svg":P.type==="math"&&(ce="mathml"),w==null)M(P,F,E,q,W,ce,J,le);else{const Y=w.el&&w.el._isVueCE?w.el:null;try{Y&&Y._beginPatch(),b(w,P,q,W,ce,J,le)}finally{Y&&Y._endPatch()}}},M=(w,P,F,E,q,W,ce,J)=>{let le,Y;const{props:de,shapeFlag:y,transition:g,dirs:B}=w;if(le=w.el=o(w.type,W,de&&de.is,de),y&8?u(le,w.children):y&16&&O(w.children,le,null,E,q,Pa(w,W),ce,J),B&&$i(w,null,E,"created"),L(le,w,w.scopeId,ce,E),de){for(const oe in de)oe!=="value"&&!gr(oe)&&r(le,oe,null,de[oe],W,E);"value"in de&&r(le,"value",null,de.value,W),(Y=de.onVnodeBeforeMount)&&Vn(Y,E,w)}B&&$i(w,null,E,"beforeMount");const ee=E0(q,g);ee&&g.beforeEnter(le),i(le,P,F),((Y=de&&de.onVnodeMounted)||ee||B)&&hn(()=>{Y&&Vn(Y,E,w),ee&&g.enter(le),B&&$i(w,null,E,"mounted")},q)},L=(w,P,F,E,q)=>{if(F&&h(w,F),E)for(let W=0;W<E.length;W++)h(w,E[W]);if(q){let W=q.subTree;if(P===W||Fh(W.type)&&(W.ssContent===P||W.ssFallback===P)){const ce=q.vnode;L(w,ce,ce.scopeId,ce.slotScopeIds,q.parent)}}},O=(w,P,F,E,q,W,ce,J,le=0)=>{for(let Y=le;Y<w.length;Y++){const de=w[Y]=J?Fi(w[Y]):Gn(w[Y]);v(null,de,P,F,E,q,W,ce,J)}},b=(w,P,F,E,q,W,ce)=>{const J=P.el=w.el;let{patchFlag:le,dynamicChildren:Y,dirs:de}=P;le|=w.patchFlag&16;const y=w.props||gt,g=P.props||gt;let B;if(F&&ji(F,!1),(B=g.onVnodeBeforeUpdate)&&Vn(B,F,P,w),de&&$i(P,w,F,"beforeUpdate"),F&&ji(F,!0),(y.innerHTML&&g.innerHTML==null||y.textContent&&g.textContent==null)&&u(J,""),Y?_(w.dynamicChildren,Y,J,F,E,Pa(P,q),W):ce||H(w,P,J,null,F,E,Pa(P,q),W,!1),le>0){if(le&16)D(J,y,g,F,q);else if(le&2&&y.class!==g.class&&r(J,"class",null,g.class,q),le&4&&r(J,"style",y.style,g.style,q),le&8){const ee=P.dynamicProps;for(let oe=0;oe<ee.length;oe++){const $=ee[oe],we=y[$],ge=g[$];(ge!==we||$==="value")&&r(J,$,we,ge,q,F)}}le&1&&w.children!==P.children&&u(J,P.children)}else!ce&&Y==null&&D(J,y,g,F,q);((B=g.onVnodeUpdated)||de)&&hn(()=>{B&&Vn(B,F,P,w),de&&$i(P,w,F,"updated")},E)},_=(w,P,F,E,q,W,ce)=>{for(let J=0;J<P.length;J++){const le=w[J],Y=P[J],de=le.el&&(le.type===an||!rs(le,Y)||le.shapeFlag&198)?f(le.el):F;v(le,Y,de,null,E,q,W,ce,!0)}},D=(w,P,F,E,q)=>{if(P!==F){if(P!==gt)for(const W in P)!gr(W)&&!(W in F)&&r(w,W,P[W],null,q,E);for(const W in F){if(gr(W))continue;const ce=F[W],J=P[W];ce!==J&&W!=="value"&&r(w,W,J,ce,q,E)}"value"in F&&r(w,"value",P.value,F.value,q)}},I=(w,P,F,E,q,W,ce,J,le)=>{const Y=P.el=w?w.el:a(""),de=P.anchor=w?w.anchor:a("");let{patchFlag:y,dynamicChildren:g,slotScopeIds:B}=P;B&&(J=J?J.concat(B):B),w==null?(i(Y,F,E),i(de,F,E),O(P.children||[],F,de,q,W,ce,J,le)):y>0&&y&64&&g&&w.dynamicChildren?(_(w.dynamicChildren,g,F,q,W,ce,J),(P.key!=null||q&&P===q.subTree)&&Uh(w,P,!0)):H(w,P,F,de,q,W,ce,J,le)},z=(w,P,F,E,q,W,ce,J,le)=>{P.slotScopeIds=J,w==null?P.shapeFlag&512?q.ctx.activate(P,F,E,ce,le):K(P,F,E,q,W,ce,le):te(w,P,le)},K=(w,P,F,E,q,W,ce)=>{const J=w.component=U0(w,E,q);if(ua(w)&&(J.ctx.renderer=re),N0(J,!1,ce),J.asyncDep){if(q&&q.registerDep(J,X,ce),!w.el){const le=J.subTree=bt(Jt);p(null,le,P,F),w.placeholder=le.el}}else X(J,w,P,F,q,W,ce)},te=(w,P,F)=>{const E=P.component=w.component;if(p0(w,P,F))if(E.asyncDep&&!E.asyncResolved){Q(E,P,F);return}else E.next=P,E.update();else P.el=w.el,E.vnode=P},X=(w,P,F,E,q,W,ce)=>{const J=()=>{if(w.isMounted){let{next:y,bu:g,u:B,parent:ee,vnode:oe}=w;{const Ce=Nh(w);if(Ce){y&&(y.el=oe.el,Q(w,y,ce)),Ce.asyncDep.then(()=>{w.isUnmounted||J()});return}}let $=y,we;ji(w,!1),y?(y.el=oe.el,Q(w,y,ce)):y=oe,g&&wo(g),(we=y.props&&y.props.onVnodeBeforeUpdate)&&Vn(we,ee,y,oe),ji(w,!0);const ge=Tu(w),Le=w.subTree;w.subTree=ge,v(Le,ge,f(Le.el),U(Le),w,q,W),y.el=ge.el,$===null&&m0(w,ge.el),B&&hn(B,q),(we=y.props&&y.props.onVnodeUpdated)&&hn(()=>Vn(we,ee,y,oe),q)}else{let y;const{el:g,props:B}=P,{bm:ee,m:oe,parent:$,root:we,type:ge}=w,Le=Sr(P);ji(w,!1),ee&&wo(ee),!Le&&(y=B&&B.onVnodeBeforeMount)&&Vn(y,$,P),ji(w,!0);{we.ce&&we.ce._def.shadowRoot!==!1&&we.ce._injectChildStyle(ge);const Ce=w.subTree=Tu(w);v(null,Ce,F,E,w,q,W),P.el=Ce.el}if(oe&&hn(oe,q),!Le&&(y=B&&B.onVnodeMounted)){const Ce=P;hn(()=>Vn(y,$,Ce),q)}(P.shapeFlag&256||$&&Sr($.vnode)&&$.vnode.shapeFlag&256)&&w.a&&hn(w.a,q),w.isMounted=!0,P=F=E=null}};w.scope.on();const le=w.effect=new Vd(J);w.scope.off();const Y=w.update=le.run.bind(le),de=w.job=le.runIfDirty.bind(le);de.i=w,de.id=w.uid,le.scheduler=()=>Fc(de),ji(w,!0),Y()},Q=(w,P,F)=>{P.component=w;const E=w.vnode.props;w.vnode=P,w.next=null,g0(w,P.props,E,F),S0(w,P.children,F),_i(),_u(w),vi()},H=(w,P,F,E,q,W,ce,J,le=!1)=>{const Y=w&&w.children,de=w?w.shapeFlag:0,y=P.children,{patchFlag:g,shapeFlag:B}=P;if(g>0){if(g&128){me(Y,y,F,E,q,W,ce,J,le);return}else if(g&256){pe(Y,y,F,E,q,W,ce,J,le);return}}B&8?(de&16&&Z(Y,q,W),y!==Y&&u(F,y)):de&16?B&16?me(Y,y,F,E,q,W,ce,J,le):Z(Y,q,W,!0):(de&8&&u(F,""),B&16&&O(y,F,E,q,W,ce,J,le))},pe=(w,P,F,E,q,W,ce,J,le)=>{w=w||Bs,P=P||Bs;const Y=w.length,de=P.length,y=Math.min(Y,de);let g;for(g=0;g<y;g++){const B=P[g]=le?Fi(P[g]):Gn(P[g]);v(w[g],B,F,null,q,W,ce,J,le)}Y>de?Z(w,q,W,!0,!1,y):O(P,F,E,q,W,ce,J,le,y)},me=(w,P,F,E,q,W,ce,J,le)=>{let Y=0;const de=P.length;let y=w.length-1,g=de-1;for(;Y<=y&&Y<=g;){const B=w[Y],ee=P[Y]=le?Fi(P[Y]):Gn(P[Y]);if(rs(B,ee))v(B,ee,F,null,q,W,ce,J,le);else break;Y++}for(;Y<=y&&Y<=g;){const B=w[y],ee=P[g]=le?Fi(P[g]):Gn(P[g]);if(rs(B,ee))v(B,ee,F,null,q,W,ce,J,le);else break;y--,g--}if(Y>y){if(Y<=g){const B=g+1,ee=B<de?P[B].el:E;for(;Y<=g;)v(null,P[Y]=le?Fi(P[Y]):Gn(P[Y]),F,ee,q,W,ce,J,le),Y++}}else if(Y>g)for(;Y<=y;)Se(w[Y],q,W,!0),Y++;else{const B=Y,ee=Y,oe=new Map;for(Y=ee;Y<=g;Y++){const Ie=P[Y]=le?Fi(P[Y]):Gn(P[Y]);Ie.key!=null&&oe.set(Ie.key,Y)}let $,we=0;const ge=g-ee+1;let Le=!1,Ce=0;const he=new Array(ge);for(Y=0;Y<ge;Y++)he[Y]=0;for(Y=B;Y<=y;Y++){const Ie=w[Y];if(we>=ge){Se(Ie,q,W,!0);continue}let Ne;if(Ie.key!=null)Ne=oe.get(Ie.key);else for($=ee;$<=g;$++)if(he[$-ee]===0&&rs(Ie,P[$])){Ne=$;break}Ne===void 0?Se(Ie,q,W,!0):(he[Ne-ee]=Y+1,Ne>=Ce?Ce=Ne:Le=!0,v(Ie,P[Ne],F,null,q,W,ce,J,le),we++)}const ve=Le?T0(he):Bs;for($=ve.length-1,Y=ge-1;Y>=0;Y--){const Ie=ee+Y,Ne=P[Ie],Ae=P[Ie+1],Ge=Ie+1<de?Ae.el||Ae.placeholder:E;he[Y]===0?v(null,Ne,F,Ge,q,W,ce,J,le):Le&&($<0||Y!==ve[$]?ue(Ne,F,Ge,2):$--)}}},ue=(w,P,F,E,q=null)=>{const{el:W,type:ce,transition:J,children:le,shapeFlag:Y}=w;if(Y&6){ue(w.component.subTree,P,F,E);return}if(Y&128){w.suspense.move(P,F,E);return}if(Y&64){ce.move(w,P,F,re);return}if(ce===an){i(W,P,F);for(let y=0;y<le.length;y++)ue(le[y],P,F,E);i(w.anchor,P,F);return}if(ce===Po){T(w,P,F);return}if(E!==2&&Y&1&&J)if(E===0)J.beforeEnter(W),i(W,P,F),hn(()=>J.enter(W),q);else{const{leave:y,delayLeave:g,afterLeave:B}=J,ee=()=>{w.ctx.isUnmounted?s(W):i(W,P,F)},oe=()=>{W._isLeaving&&W[ui](!0),y(W,()=>{ee(),B&&B()})};g?g(W,ee,oe):oe()}else i(W,P,F)},Se=(w,P,F,E=!1,q=!1)=>{const{type:W,props:ce,ref:J,children:le,dynamicChildren:Y,shapeFlag:de,patchFlag:y,dirs:g,cacheIndex:B}=w;if(y===-2&&(q=!1),J!=null&&(_i(),br(J,null,F,w,!0),vi()),B!=null&&(P.renderCache[B]=void 0),de&256){P.ctx.deactivate(w);return}const ee=de&1&&g,oe=!Sr(w);let $;if(oe&&($=ce&&ce.onVnodeBeforeUnmount)&&Vn($,P,w),de&6)De(w.component,F,E);else{if(de&128){w.suspense.unmount(F,E);return}ee&&$i(w,null,P,"beforeUnmount"),de&64?w.type.remove(w,P,F,re,E):Y&&!Y.hasOnce&&(W!==an||y>0&&y&64)?Z(Y,P,F,!1,!0):(W===an&&y&384||!q&&de&16)&&Z(le,P,F),E&&Be(w)}(oe&&($=ce&&ce.onVnodeUnmounted)||ee)&&hn(()=>{$&&Vn($,P,w),ee&&$i(w,null,P,"unmounted")},F)},Be=w=>{const{type:P,el:F,anchor:E,transition:q}=w;if(P===an){Ue(F,E);return}if(P===Po){S(w);return}const W=()=>{s(F),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(w.shapeFlag&1&&q&&!q.persisted){const{leave:ce,delayLeave:J}=q,le=()=>ce(F,W);J?J(w.el,W,le):le()}else W()},Ue=(w,P)=>{let F;for(;w!==P;)F=d(w),s(w),w=F;s(P)},De=(w,P,F)=>{const{bum:E,scope:q,job:W,subTree:ce,um:J,m:le,a:Y}=w;Ru(le),Ru(Y),E&&wo(E),q.stop(),W&&(W.flags|=8,Se(ce,w,P,F)),J&&hn(J,P),hn(()=>{w.isUnmounted=!0},P)},Z=(w,P,F,E=!1,q=!1,W=0)=>{for(let ce=W;ce<w.length;ce++)Se(w[ce],P,F,E,q)},U=w=>{if(w.shapeFlag&6)return U(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const P=d(w.anchor||w.el),F=P&&P[Fm];return F?d(F):P};let ne=!1;const ae=(w,P,F)=>{w==null?P._vnode&&Se(P._vnode,null,null,!0):v(P._vnode||null,w,P,null,null,null,F),P._vnode=w,ne||(ne=!0,_u(),ah(),ne=!1)},re={p:v,um:Se,m:ue,r:Be,mt:K,mc:O,pc:H,pbc:_,n:U,o:n};return{render:ae,hydrate:void 0,createApp:s0(ae)}}function Pa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ji({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function E0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Uh(n,e,t=!1){const i=n.children,s=e.children;if(Ve(i)&&Ve(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Fi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Uh(o,a)),a.type===pa&&a.patchFlag!==-1&&(a.el=o.el),a.type===Jt&&!a.el&&(a.el=o.el)}}function T0(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Nh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Nh(e)}function Ru(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Fh=n=>n.__isSuspense;function A0(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):Nm(n)}const an=Symbol.for("v-fgt"),pa=Symbol.for("v-txt"),Jt=Symbol.for("v-cmt"),Po=Symbol.for("v-stc"),yr=[];let pn=null;function ke(n=!1){yr.push(pn=n?null:[])}function w0(){yr.pop(),pn=yr[yr.length-1]||null}let Pr=1;function Xo(n,e=!1){Pr+=n,n<0&&pn&&e&&(pn.hasOnce=!0)}function Oh(n){return n.dynamicChildren=Pr>0?pn||Bs:null,w0(),Pr>0&&pn&&pn.push(n),n}function Ze(n,e,t,i,s,r){return Oh(N(n,e,t,i,s,r,!0))}function wn(n,e,t,i,s){return Oh(bt(n,e,t,i,s,!0))}function qo(n){return n?n.__v_isVNode===!0:!1}function rs(n,e){return n.type===e.type&&n.key===e.key}const Bh=({key:n})=>n??null,Do=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Dt(n)||ut(n)||Ke(n)?{i:Tn,r:n,k:e,f:!!t}:n:null);function N(n,e=null,t=null,i=0,s=null,r=n===an?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Bh(e),ref:e&&Do(e),scopeId:ch,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tn};return a?(zc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Dt(t)?8:16),Pr>0&&!o&&pn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pn.push(l),l}const bt=R0;function R0(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Km)&&(n=Jt),qo(n)){const a=Wi(n,e,!0);return t&&zc(a,t),Pr>0&&!r&&pn&&(a.shapeFlag&6?pn[pn.indexOf(n)]=a:pn.push(a)),a.patchFlag=-2,a}if(k0(n)&&(n=n.__vccOpts),e){e=C0(e);let{class:a,style:l}=e;a&&!Dt(a)&&(e.class=wt(a)),ft(l)&&(la(l)&&!Ve(l)&&(l=Vt({},l)),e.style=In(l))}const o=Dt(n)?1:Fh(n)?128:uh(n)?64:ft(n)?4:Ke(n)?2:0;return N(n,e,t,i,s,o,r,!0)}function C0(n){return n?la(n)||Rh(n)?Vt({},n):n:null}function Wi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?D0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Bh(c),ref:e&&e.ref?t&&r?Ve(r)?r.concat(Do(e)):[r,Do(e)]:Do(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==an?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Wi(n.ssContent),ssFallback:n.ssFallback&&Wi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Cr(u,l.clone(u)),u}function hi(n=" ",e=0){return bt(pa,null,n,e)}function P0(n,e){const t=bt(Po,null,n);return t.staticCount=e,t}function kt(n="",e=!1){return e?(ke(),wn(Jt,null,n)):bt(Jt,null,n)}function Gn(n){return n==null||typeof n=="boolean"?bt(Jt):Ve(n)?bt(an,null,n.slice()):qo(n)?Fi(n):bt(pa,null,String(n))}function Fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Wi(n)}function zc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),zc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Rh(e)?e._ctx=Tn:s===3&&Tn&&(Tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ke(e)?(e={default:e,_ctx:Tn},t=32):(e=String(e),i&64?(t=16,e=[hi(e)]):t=8);n.children=e,n.shapeFlag|=t}function D0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=wt([e.class,i.class]));else if(s==="style")e.style=In([e.style,i.style]);else if(ta(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ve(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Vn(n,e,t,i=null){On(n,e,7,[t,i])}const L0=Mh();let I0=0;function U0(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||L0,r={uid:I0++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Bd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ph(i,s),emitsOptions:Th(i,s),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=u0.bind(null,r),n.ce&&n.ce(r),r}let Qt=null;const Vc=()=>Qt||Tn;let Yo,Tl;{const n=ra(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Yo=e("__VUE_INSTANCE_SETTERS__",t=>Qt=t),Tl=e("__VUE_SSR_SETTERS__",t=>Dr=t)}const Hr=n=>{const e=Qt;return Yo(n),n.scope.on(),()=>{n.scope.off(),Yo(e)}},Cu=()=>{Qt&&Qt.scope.off(),Yo(null)};function kh(n){return n.vnode.shapeFlag&4}let Dr=!1;function N0(n,e=!1,t=!1){e&&Tl(e);const{props:i,children:s}=n.vnode,r=kh(n);x0(n,i,r,e),b0(n,s,t||e);const o=r?F0(n,e):void 0;return e&&Tl(!1),o}function F0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Zm);const{setup:i}=t;if(i){_i();const s=n.setupContext=i.length>1?B0(n):null,r=Hr(n),o=Vr(i,n,0,[n.props,s]),a=Cd(o);if(vi(),r(),(a||n.sp)&&!Sr(n)&&gh(n),a){if(o.then(Cu,Cu),e)return o.then(l=>{Pu(n,l)}).catch(l=>{ca(l,n,0)});n.asyncDep=o}else Pu(n,o)}else zh(n)}function Pu(n,e,t){Ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ft(e)&&(n.setupState=ih(e)),zh(n)}function zh(n,e,t){const i=n.type;n.render||(n.render=i.render||Yn);{const s=Hr(n);_i();try{Jm(n)}finally{vi(),s()}}}const O0={get(n,e){return qt(n,"get",""),n[e]}};function B0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,O0),slots:n.slots,emit:n.emit,expose:e}}function ma(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ih(Uc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Mr)return Mr[t](n)},has(e,t){return t in e||t in Mr}})):n.proxy}function k0(n){return Ke(n)&&"__vccOpts"in n}const ct=(n,e)=>Pm(n,e,Dr);function Hc(n,e,t){try{Xo(-1);const i=arguments.length;return i===2?ft(e)&&!Ve(e)?qo(e)?bt(n,null,[e]):bt(n,e):bt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&qo(t)&&(t=[t]),bt(n,e,t))}finally{Xo(1)}}const z0="3.5.25";let Al;const Du=typeof window<"u"&&window.trustedTypes;if(Du)try{Al=Du.createPolicy("vue",{createHTML:n=>n})}catch{}const Vh=Al?n=>Al.createHTML(n):n=>n,V0="http://www.w3.org/2000/svg",H0="http://www.w3.org/1998/Math/MathML",ci=typeof document<"u"?document:null,Lu=ci&&ci.createElement("template"),G0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ci.createElementNS(V0,n):e==="mathml"?ci.createElementNS(H0,n):t?ci.createElement(n,{is:t}):ci.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ci.createTextNode(n),createComment:n=>ci.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ci.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Lu.innerHTML=Vh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Lu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ti="transition",or="animation",Lr=Symbol("_vtc"),Hh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},W0=Vt({},fh,Hh),X0=n=>(n.displayName="Transition",n.props=W0,n),Si=X0((n,{slots:e})=>Hc(km,q0(n),e)),Ki=(n,e=[])=>{Ve(n)?n.forEach(t=>t(...e)):n&&n(...e)},Iu=n=>n?Ve(n)?n.some(e=>e.length>1):n.length>1:!1;function q0(n){const e={};for(const I in n)I in Hh||(e[I]=n[I]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,x=Y0(s),v=x&&x[0],m=x&&x[1],{onBeforeEnter:p,onEnter:R,onEnterCancelled:T,onLeave:S,onLeaveCancelled:C,onBeforeAppear:M=p,onAppear:L=R,onAppearCancelled:O=T}=e,b=(I,z,K,te)=>{I._enterCancelled=te,Zi(I,z?u:a),Zi(I,z?c:o),K&&K()},_=(I,z)=>{I._isLeaving=!1,Zi(I,f),Zi(I,h),Zi(I,d),z&&z()},D=I=>(z,K)=>{const te=I?L:R,X=()=>b(z,I,K);Ki(te,[z,X]),Uu(()=>{Zi(z,I?l:r),ei(z,I?u:a),Iu(te)||Nu(z,i,v,X)})};return Vt(e,{onBeforeEnter(I){Ki(p,[I]),ei(I,r),ei(I,o)},onBeforeAppear(I){Ki(M,[I]),ei(I,l),ei(I,c)},onEnter:D(!1),onAppear:D(!0),onLeave(I,z){I._isLeaving=!0;const K=()=>_(I,z);ei(I,f),I._enterCancelled?(ei(I,d),Bu(I)):(Bu(I),ei(I,d)),Uu(()=>{I._isLeaving&&(Zi(I,f),ei(I,h),Iu(S)||Nu(I,i,m,K))}),Ki(S,[I,K])},onEnterCancelled(I){b(I,!1,void 0,!0),Ki(T,[I])},onAppearCancelled(I){b(I,!0,void 0,!0),Ki(O,[I])},onLeaveCancelled(I){_(I),Ki(C,[I])}})}function Y0(n){if(n==null)return null;if(ft(n))return[Da(n.enter),Da(n.leave)];{const e=Da(n);return[e,e]}}function Da(n){return $p(n)}function ei(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Lr]||(n[Lr]=new Set)).add(e)}function Zi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Lr];t&&(t.delete(e),t.size||(n[Lr]=void 0))}function Uu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let $0=0;function Nu(n,e,t,i){const s=n._endId=++$0,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=j0(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),r()},d=h=>{h.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function j0(n,e){const t=window.getComputedStyle(n),i=x=>(t[x]||"").split(", "),s=i(`${Ti}Delay`),r=i(`${Ti}Duration`),o=Fu(s,r),a=i(`${or}Delay`),l=i(`${or}Duration`),c=Fu(a,l);let u=null,f=0,d=0;e===Ti?o>0&&(u=Ti,f=o,d=r.length):e===or?c>0&&(u=or,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Ti:or:null,d=u?u===Ti?r.length:l.length:0);const h=u===Ti&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ti}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Fu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Ou(t)+Ou(n[i])))}function Ou(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Bu(n){return(n?n.ownerDocument:document).body.offsetHeight}function K0(n,e,t){const i=n[Lr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ku=Symbol("_vod"),Z0=Symbol("_vsh"),J0=Symbol(""),Q0=/(?:^|;)\s*display\s*:/;function ex(n,e,t){const i=n.style,s=Dt(t);let r=!1;if(t&&!s){if(e)if(Dt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Lo(i,a,"")}else for(const o in e)t[o]==null&&Lo(i,o,"");for(const o in t)o==="display"&&(r=!0),Lo(i,o,t[o])}else if(s){if(e!==t){const o=i[J0];o&&(t+=";"+o),i.cssText=t,r=Q0.test(t)}}else e&&n.removeAttribute("style");ku in n&&(n[ku]=r?i.display:"",n[Z0]&&(i.display="none"))}const zu=/\s*!important$/;function Lo(n,e,t){if(Ve(t))t.forEach(i=>Lo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=tx(n,e);zu.test(t)?n.setProperty(xs(i),t.replace(zu,""),"important"):n[i]=t}}const Vu=["Webkit","Moz","ms"],La={};function tx(n,e){const t=La[e];if(t)return t;let i=Gi(e);if(i!=="filter"&&i in n)return La[e]=i;i=Ld(i);for(let s=0;s<Vu.length;s++){const r=Vu[s]+i;if(r in n)return La[e]=r}return e}const Hu="http://www.w3.org/1999/xlink";function Gu(n,e,t,i,s,r=em(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Hu,e.slice(6,e.length)):n.setAttributeNS(Hu,e,t):t==null||r&&!Ud(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Kn(t)?String(t):t)}function Wu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Vh(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Ud(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function os(n,e,t,i){n.addEventListener(e,t,i)}function nx(n,e,t,i){n.removeEventListener(e,t,i)}const Xu=Symbol("_vei");function ix(n,e,t,i,s=null){const r=n[Xu]||(n[Xu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=sx(e);if(i){const c=r[e]=ax(i,s);os(n,a,c,l)}else o&&(nx(n,a,o,l),r[e]=void 0)}}const qu=/(?:Once|Passive|Capture)$/;function sx(n){let e;if(qu.test(n)){e={};let i;for(;i=n.match(qu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):xs(n.slice(2)),e]}let Ia=0;const rx=Promise.resolve(),ox=()=>Ia||(rx.then(()=>Ia=0),Ia=Date.now());function ax(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;On(lx(i,t.value),e,5,[i])};return t.value=n,t.attached=ox(),t}function lx(n,e){if(Ve(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Yu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,cx=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?K0(n,i,o):e==="style"?ex(n,t,i):ta(e)?Tc(e)||ix(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ux(n,e,i,o))?(Wu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gu(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Dt(i))?Wu(n,Gi(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Gu(n,e,i,o))};function ux(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Yu(e)&&Ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yu(e)&&Dt(t)?!1:e in n}const $o=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ve(e)?t=>wo(e,t):e};function fx(n){n.target.composing=!0}function $u(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vs=Symbol("_assign");function ju(n,e,t){return e&&(n=n.trim()),t&&(n=wc(n)),n}const jo={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Vs]=$o(s);const r=i||s.props&&s.props.type==="number";os(n,e?"change":"input",o=>{o.target.composing||n[Vs](ju(n.value,t,r))}),(t||r)&&os(n,"change",()=>{n.value=ju(n.value,t,r)}),e||(os(n,"compositionstart",fx),os(n,"compositionend",$u),os(n,"change",$u))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Vs]=$o(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?wc(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},Ku={deep:!0,created(n,e,t){n[Vs]=$o(t),os(n,"change",()=>{const i=n._modelValue,s=dx(n),r=n.checked,o=n[Vs];if(Ve(i)){const a=Nd(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(na(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Gh(n,r))})},mounted:Zu,beforeUpdate(n,e,t){n[Vs]=$o(t),Zu(n,e,t)}};function Zu(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Ve(e))s=Nd(e,i.props.value)>-1;else if(na(e))s=e.has(i.props.value);else{if(e===t)return;s=oa(e,Gh(n,!0))}n.checked!==s&&(n.checked=s)}function dx(n){return"_value"in n?n._value:n.value}function Gh(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const hx=["ctrl","shift","alt","meta"],px={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>hx.some(t=>n[`${t}Key`]&&!e.includes(t))},Ht=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=px[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},mx=Vt({patchProp:cx},G0);let Ju;function xx(){return Ju||(Ju=M0(mx))}const gx=((...n)=>{const e=xx().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=vx(i);if(!s)return;const r=e._component;!Ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,_x(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function _x(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function vx(n){return Dt(n)?document.querySelector(n):n}let Wh;const xa=n=>Wh=n,Xh=Symbol();function wl(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Er;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Er||(Er={}));function bx(){const n=kd(!0),e=n.run(()=>qe({}));let t=[],i=[];const s=Uc({install(r){xa(s),s._a=r,r.provide(Xh,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return this._a?t.push(r):i.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const qh=()=>{};function Qu(n,e,t,i=qh){n.add(e);const s=()=>{n.delete(e)&&i()};return!t&&zd()&&nm(s),s}function bs(n,...e){n.forEach(t=>{t(...e)})}const Sx=n=>n(),ef=Symbol(),Ua=Symbol();function Rl(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];wl(s)&&wl(i)&&n.hasOwnProperty(t)&&!ut(i)&&!$n(i)?n[t]=Rl(s,i):n[t]=i}return n}const Mx=Symbol();function yx(n){return!wl(n)||!Object.prototype.hasOwnProperty.call(n,Mx)}const{assign:Ii}=Object;function Ex(n){return!!(ut(n)&&n.effect)}function Tx(n,e,t,i){const{state:s,actions:r,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=s?s():{});const u=Tm(t.state.value[n]);return Ii(u,r,Object.keys(o||{}).reduce((f,d)=>(f[d]=Uc(ct(()=>{xa(t);const h=t._s.get(n);return o[d].call(h,h)})),f),{}))}return l=Yh(n,c,e,t,i,!0),l}function Yh(n,e,t={},i,s,r){let o;const a=Ii({actions:{}},t),l={deep:!0};let c,u,f=new Set,d=new Set,h;const x=i.state.value[n];!r&&!x&&(i.state.value[n]={}),qe({});let v;function m(O){let b;c=u=!1,typeof O=="function"?(O(i.state.value[n]),b={type:Er.patchFunction,storeId:n,events:h}):(Rl(i.state.value[n],O),b={type:Er.patchObject,payload:O,storeId:n,events:h});const _=v=Symbol();Nc().then(()=>{v===_&&(c=!0)}),u=!0,bs(f,b,i.state.value[n])}const p=r?function(){const{state:b}=t,_=b?b():{};this.$patch(D=>{Ii(D,_)})}:qh;function R(){o.stop(),f.clear(),d.clear(),i._s.delete(n)}const T=(O,b="")=>{if(ef in O)return O[Ua]=b,O;const _=function(){xa(i);const D=Array.from(arguments),I=new Set,z=new Set;function K(Q){I.add(Q)}function te(Q){z.add(Q)}bs(d,{args:D,name:_[Ua],store:C,after:K,onError:te});let X;try{X=O.apply(this&&this.$id===n?this:C,D)}catch(Q){throw bs(z,Q),Q}return X instanceof Promise?X.then(Q=>(bs(I,Q),Q)).catch(Q=>(bs(z,Q),Promise.reject(Q))):(bs(I,X),X)};return _[ef]=!0,_[Ua]=b,_},S={_p:i,$id:n,$onAction:Qu.bind(null,d),$patch:m,$reset:p,$subscribe(O,b={}){const _=Qu(f,O,b.detached,()=>D()),D=o.run(()=>zt(()=>i.state.value[n],I=>{(b.flush==="sync"?u:c)&&O({storeId:n,type:Er.direct,events:h},I)},Ii({},l,b)));return _},$dispose:R},C=zr(S);i._s.set(n,C);const L=(i._a&&i._a.runWithContext||Sx)(()=>i._e.run(()=>(o=kd()).run(()=>e({action:T}))));for(const O in L){const b=L[O];if(ut(b)&&!Ex(b)||$n(b))r||(x&&yx(b)&&(ut(b)?b.value=x[O]:Rl(b,x[O])),i.state.value[n][O]=b);else if(typeof b=="function"){const _=T(b,O);L[O]=_,a.actions[O]=b}}return Ii(C,L),Ii(nt(C),L),Object.defineProperty(C,"$state",{get:()=>i.state.value[n],set:O=>{m(b=>{Ii(b,O)})}}),i._p.forEach(O=>{Ii(C,o.run(()=>O({store:C,app:i._a,pinia:i,options:a})))}),x&&r&&t.hydrate&&t.hydrate(C.$state,x),c=!0,u=!0,C}function Ax(n,e,t){let i;const s=typeof e=="function";i=s?t:e;function r(o,a){const l=r0();return o=o||(l?jn(Xh,null):null),o&&xa(o),o=Wh,o._s.has(n)||(s?Yh(n,e,i,o):Tx(n,i,o)),o._s.get(n)}return r.$id=n,r}function Gc(n){const e=nt(n),t={};for(const i in e){const s=e[i];s.effect?t[i]=ct({get:()=>n[i],set(r){n[i]=r}}):(ut(s)||$n(s))&&(t[i]=Rm(n,i))}return t}const Fs=typeof document<"u";function $h(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function wx(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&$h(n.default)}const at=Object.assign;function Na(n,e){const t={};for(const i in e){const s=e[i];t[i]=Bn(s)?s.map(n):n(s)}return t}const Tr=()=>{},Bn=Array.isArray;function tf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const jh=/#/g,Rx=/&/g,Cx=/\//g,Px=/=/g,Dx=/\?/g,Kh=/\+/g,Lx=/%5B/g,Ix=/%5D/g,Zh=/%5E/g,Ux=/%60/g,Jh=/%7B/g,Nx=/%7C/g,Qh=/%7D/g,Fx=/%20/g;function Wc(n){return n==null?"":encodeURI(""+n).replace(Nx,"|").replace(Lx,"[").replace(Ix,"]")}function Ox(n){return Wc(n).replace(Jh,"{").replace(Qh,"}").replace(Zh,"^")}function Cl(n){return Wc(n).replace(Kh,"%2B").replace(Fx,"+").replace(jh,"%23").replace(Rx,"%26").replace(Ux,"`").replace(Jh,"{").replace(Qh,"}").replace(Zh,"^")}function Bx(n){return Cl(n).replace(Px,"%3D")}function kx(n){return Wc(n).replace(jh,"%23").replace(Dx,"%3F")}function zx(n){return kx(n).replace(Cx,"%2F")}function Ir(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const Vx=/\/$/,Hx=n=>n.replace(Vx,"");function Fa(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),r=e.slice(l,a>0?a:e.length),s=n(r.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=qx(i??e,t),{fullPath:i+r+o,path:i,query:s,hash:Ir(o)}}function Gx(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function nf(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Wx(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Ys(e.matched[i],t.matched[s])&&ep(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ys(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function ep(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Xx(n[t],e[t]))return!1;return!0}function Xx(n,e){return Bn(n)?sf(n,e):Bn(e)?sf(e,n):n===e}function sf(n,e){return Bn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function qx(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Ai={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Pl=(function(n){return n.pop="pop",n.push="push",n})({}),Oa=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function Yx(n){if(!n)if(Fs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Hx(n)}const $x=/^[^#]+#/;function jx(n,e){return n.replace($x,"#")+e}function Kx(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const ga=()=>({left:window.scrollX,top:window.scrollY});function Zx(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Kx(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function rf(n,e){return(history.state?history.state.position-e:-1)+n}const Dl=new Map;function Jx(n,e){Dl.set(n,e)}function Qx(n){const e=Dl.get(n);return Dl.delete(n),e}function eg(n){return typeof n=="string"||n&&typeof n=="object"}function tp(n){return typeof n=="string"||typeof n=="symbol"}let At=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const np=Symbol("");At.MATCHER_NOT_FOUND+"",At.NAVIGATION_GUARD_REDIRECT+"",At.NAVIGATION_ABORTED+"",At.NAVIGATION_CANCELLED+"",At.NAVIGATION_DUPLICATED+"";function $s(n,e){return at(new Error,{type:n,[np]:!0},e)}function ti(n,e){return n instanceof Error&&np in n&&(e==null||!!(n.type&e))}const tg=["params","query","hash"];function ng(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of tg)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function ig(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const s=t[i].replace(Kh," "),r=s.indexOf("="),o=Ir(r<0?s:s.slice(0,r)),a=r<0?null:Ir(s.slice(r+1));if(o in e){let l=e[o];Bn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function of(n){let e="";for(let t in n){const i=n[t];if(t=Bx(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Bn(i)?i.map(s=>s&&Cl(s)):[i&&Cl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function sg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Bn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const rg=Symbol(""),af=Symbol(""),Xc=Symbol(""),ip=Symbol(""),Ll=Symbol("");function ar(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Oi(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l($s(At.NAVIGATION_ABORTED,{from:t,to:e})):d instanceof Error?l(d):eg(d)?l($s(At.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Ba(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if($h(l)){const c=(l.__vccOpts||l)[e];c&&r.push(Oi(c,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=wx(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&Oi(d,t,i,o,a,s)()}))}}return r}function og(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Ys(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Ys(c,l))||s.push(l))}return[t,i,s]}let ag=()=>location.protocol+"//"+location.host;function sp(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),nf(a,"")}return nf(t,n)+i+s}function lg(n,e,t,i){let s=[],r=[],o=null;const a=({state:d})=>{const h=sp(n,location),x=t.value,v=e.value;let m=0;if(d){if(t.value=h,e.value=d,o&&o===x){o=null;return}m=v?d.position-v.position:0}else i(h);s.forEach(p=>{p(t.value,x,{delta:m,type:Pl.pop,direction:m?m>0?Oa.forward:Oa.back:Oa.unknown})})};function l(){o=t.value}function c(d){s.push(d);const h=()=>{const x=s.indexOf(d);x>-1&&s.splice(x,1)};return r.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(at({},d.state,{scroll:ga()}),"")}}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function lf(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?ga():null}}function cg(n){const{history:e,location:t}=window,i={value:sp(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:ag()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(h){console.error(h),t[u?"replace":"assign"](d)}}function o(l,c){r(l,at({},e.state,lf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=at({},s.value,e.state,{forward:l,scroll:ga()});r(u.current,u,!0),r(l,at({},lf(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function ug(n){n=Yx(n);const e=cg(n),t=lg(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=at({location:"",base:n,go:i,createHref:jx.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let cs=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var Ut=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(Ut||{});const fg={type:cs.Static,value:""},dg=/[a-zA-Z0-9_]/;function hg(n){if(!n)return[[]];if(n==="/")return[[fg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=Ut.Static,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(t===Ut.Static?r.push({type:cs.Static,value:c}):t===Ut.Param||t===Ut.ParamRegExp||t===Ut.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:cs.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==Ut.ParamRegExp){i=t,t=Ut.EscapeNext;continue}switch(t){case Ut.Static:l==="/"?(c&&f(),o()):l===":"?(f(),t=Ut.Param):d();break;case Ut.EscapeNext:d(),t=i;break;case Ut.Param:l==="("?t=Ut.ParamRegExp:dg.test(l)?d():(f(),t=Ut.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Ut.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=Ut.ParamRegExpEnd:u+=l;break;case Ut.ParamRegExpEnd:f(),t=Ut.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===Ut.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}const cf="[^/]+?",pg={sensitive:!1,strict:!1,start:!0,end:!0};var Kt=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(Kt||{});const mg=/[.+*?^${}()[\]/\\]/g;function xg(n,e){const t=at({},pg,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[Kt.Root];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=Kt.Segment+(t.sensitive?Kt.BonusCaseSensitive:0);if(d.type===cs.Static)f||(s+="/"),s+=d.value.replace(mg,"\\$&"),h+=Kt.Static;else if(d.type===cs.Param){const{value:x,repeatable:v,optional:m,regexp:p}=d;r.push({name:x,repeatable:v,optional:m});const R=p||cf;if(R!==cf){h+=Kt.BonusCustomRegExp;try{`${R}`}catch(S){throw new Error(`Invalid custom RegExp for param "${x}" (${R}): `+S.message)}}let T=v?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;f||(T=m&&c.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),s+=T,h+=Kt.Dynamic,m&&(h+=Kt.BonusOptional),v&&(h+=Kt.BonusRepeatable),R===".*"&&(h+=Kt.BonusWildcard)}u.push(h)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=Kt.BonusStrict}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",x=r[d-1];f[x.name]=h&&x.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===cs.Static)u+=h.value;else if(h.type===cs.Param){const{value:x,repeatable:v,optional:m}=h,p=x in c?c[x]:"";if(Bn(p)&&!v)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const R=Bn(p)?p.join("/"):p;if(!R)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${x}"`);u+=R}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function gg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===Kt.Static+Kt.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===Kt.Static+Kt.Segment?1:-1:0}function rp(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=gg(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(uf(i))return 1;if(uf(s))return-1}return s.length-i.length}function uf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const _g={strict:!1,end:!0,sensitive:!1};function vg(n,e,t){const i=xg(hg(n.path),t),s=at(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function bg(n,e){const t=[],i=new Map;e=tf(_g,e);function s(f){return i.get(f)}function r(f,d,h){const x=!h,v=df(f);v.aliasOf=h&&h.record;const m=tf(e,f),p=[v];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const C of S)p.push(df(at({},v,{components:h?h.record.components:v.components,path:C,aliasOf:h?h.record:v})))}let R,T;for(const S of p){const{path:C}=S;if(d&&C[0]!=="/"){const M=d.record.path,L=M[M.length-1]==="/"?"":"/";S.path=d.record.path+(C&&L+C)}if(R=vg(S,d,m),h?h.alias.push(R):(T=T||R,T!==R&&T.alias.push(R),x&&f.name&&!hf(R)&&o(f.name)),op(R)&&l(R),v.children){const M=v.children;for(let L=0;L<M.length;L++)r(M[L],R,h&&h.children[L])}h=h||R}return T?()=>{o(T)}:Tr}function o(f){if(tp(f)){const d=i.get(f);d&&(i.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const d=yg(f,t);t.splice(d,0,f),f.record.name&&!hf(f)&&i.set(f.record.name,f)}function c(f,d){let h,x={},v,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw $s(At.MATCHER_NOT_FOUND,{location:f});m=h.record.name,x=at(ff(d.params,h.keys.filter(T=>!T.optional).concat(h.parent?h.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&ff(f.params,h.keys.map(T=>T.name))),v=h.stringify(x)}else if(f.path!=null)v=f.path,h=t.find(T=>T.re.test(v)),h&&(x=h.parse(v),m=h.record.name);else{if(h=d.name?i.get(d.name):t.find(T=>T.re.test(d.path)),!h)throw $s(At.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=h.record.name,x=at({},d.params,f.params),v=h.stringify(x)}const p=[];let R=h;for(;R;)p.unshift(R.record),R=R.parent;return{name:m,path:v,params:x,matched:p,meta:Mg(p)}}n.forEach(f=>r(f));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function ff(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function df(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Sg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Sg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function hf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Mg(n){return n.reduce((e,t)=>at(e,t.meta),{})}function yg(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;rp(n,e[r])<0?i=r:t=r+1}const s=Eg(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function Eg(n){let e=n;for(;e=e.parent;)if(op(e)&&rp(n,e)===0)return e}function op({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function pf(n){const e=jn(Xc),t=jn(ip),i=ct(()=>{const l=St(n.to);return e.resolve(l)}),s=ct(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(Ys.bind(null,u));if(d>-1)return d;const h=mf(l[c-2]);return c>1&&mf(u)===h&&f[f.length-1].path!==h?f.findIndex(Ys.bind(null,l[c-2])):d}),r=ct(()=>s.value>-1&&Cg(t.params,i.value.params)),o=ct(()=>s.value>-1&&s.value===t.matched.length-1&&ep(t.params,i.value.params));function a(l={}){if(Rg(l)){const c=e[St(n.replace)?"replace":"push"](St(n.to)).catch(Tr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ct(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Tg(n){return n.length===1?n[0]:n}const Ag=xh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:pf,setup(n,{slots:e}){const t=zr(pf(n)),{options:i}=jn(Xc),s=ct(()=>({[xf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[xf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&Tg(e.default(t));return n.custom?r:Hc("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),wg=Ag;function Rg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Cg(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Bn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function mf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const xf=(n,e,t)=>n??e??t,Pg=xh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=jn(Ll),s=ct(()=>n.route||i.value),r=jn(af,0),o=ct(()=>{let c=St(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ct(()=>s.value.matched[o.value]);Co(af,ct(()=>o.value+1)),Co(rg,a),Co(Ll,s);const l=qe();return zt(()=>[l.value,a.value,n.name],([c,u,f],[d,h,x])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Ys(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,f=a.value,d=f&&f.components[u];if(!d)return gf(t.default,{Component:d,route:c});const h=f.props[u],x=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Hc(d,at({},x,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return gf(t.default,{Component:m,route:c})||m}}});function gf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const ap=Pg;function Dg(n){const e=bg(n.routes,n),t=n.parseQuery||ig,i=n.stringifyQuery||of,s=n.history,r=ar(),o=ar(),a=ar(),l=Mm(Ai);let c=Ai;Fs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Na.bind(null,U=>""+U),f=Na.bind(null,zx),d=Na.bind(null,Ir);function h(U,ne){let ae,re;return tp(U)?(ae=e.getRecordMatcher(U),re=ne):re=U,e.addRoute(re,ae)}function x(U){const ne=e.getRecordMatcher(U);ne&&e.removeRoute(ne)}function v(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function p(U,ne){if(ne=at({},ne||l.value),typeof U=="string"){const F=Fa(t,U,ne.path),E=e.resolve({path:F.path},ne),q=s.createHref(F.fullPath);return at(F,E,{params:d(E.params),hash:Ir(F.hash),redirectedFrom:void 0,href:q})}let ae;if(U.path!=null)ae=at({},U,{path:Fa(t,U.path,ne.path).path});else{const F=at({},U.params);for(const E in F)F[E]==null&&delete F[E];ae=at({},U,{params:f(F)}),ne.params=f(ne.params)}const re=e.resolve(ae,ne),_e=U.hash||"";re.params=u(d(re.params));const w=Gx(i,at({},U,{hash:Ox(_e),path:re.path})),P=s.createHref(w);return at({fullPath:w,hash:_e,query:i===of?sg(U.query):U.query||{}},re,{redirectedFrom:void 0,href:P})}function R(U){return typeof U=="string"?Fa(t,U,l.value.path):at({},U)}function T(U,ne){if(c!==U)return $s(At.NAVIGATION_CANCELLED,{from:ne,to:U})}function S(U){return L(U)}function C(U){return S(at(R(U),{replace:!0}))}function M(U,ne){const ae=U.matched[U.matched.length-1];if(ae&&ae.redirect){const{redirect:re}=ae;let _e=typeof re=="function"?re(U,ne):re;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=R(_e):{path:_e},_e.params={}),at({query:U.query,hash:U.hash,params:_e.path!=null?{}:U.params},_e)}}function L(U,ne){const ae=c=p(U),re=l.value,_e=U.state,w=U.force,P=U.replace===!0,F=M(ae,re);if(F)return L(at(R(F),{state:typeof F=="object"?at({},_e,F.state):_e,force:w,replace:P}),ne||ae);const E=ae;E.redirectedFrom=ne;let q;return!w&&Wx(i,re,ae)&&(q=$s(At.NAVIGATION_DUPLICATED,{to:E,from:re}),ue(re,re,!0,!1)),(q?Promise.resolve(q):_(E,re)).catch(W=>ti(W)?ti(W,At.NAVIGATION_GUARD_REDIRECT)?W:me(W):H(W,E,re)).then(W=>{if(W){if(ti(W,At.NAVIGATION_GUARD_REDIRECT))return L(at({replace:P},R(W.to),{state:typeof W.to=="object"?at({},_e,W.to.state):_e,force:w}),ne||E)}else W=I(E,re,!0,P,_e);return D(E,re,W),W})}function O(U,ne){const ae=T(U,ne);return ae?Promise.reject(ae):Promise.resolve()}function b(U){const ne=Ue.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(U):U()}function _(U,ne){let ae;const[re,_e,w]=og(U,ne);ae=Ba(re.reverse(),"beforeRouteLeave",U,ne);for(const F of re)F.leaveGuards.forEach(E=>{ae.push(Oi(E,U,ne))});const P=O.bind(null,U,ne);return ae.push(P),Z(ae).then(()=>{ae=[];for(const F of r.list())ae.push(Oi(F,U,ne));return ae.push(P),Z(ae)}).then(()=>{ae=Ba(_e,"beforeRouteUpdate",U,ne);for(const F of _e)F.updateGuards.forEach(E=>{ae.push(Oi(E,U,ne))});return ae.push(P),Z(ae)}).then(()=>{ae=[];for(const F of w)if(F.beforeEnter)if(Bn(F.beforeEnter))for(const E of F.beforeEnter)ae.push(Oi(E,U,ne));else ae.push(Oi(F.beforeEnter,U,ne));return ae.push(P),Z(ae)}).then(()=>(U.matched.forEach(F=>F.enterCallbacks={}),ae=Ba(w,"beforeRouteEnter",U,ne,b),ae.push(P),Z(ae))).then(()=>{ae=[];for(const F of o.list())ae.push(Oi(F,U,ne));return ae.push(P),Z(ae)}).catch(F=>ti(F,At.NAVIGATION_CANCELLED)?F:Promise.reject(F))}function D(U,ne,ae){a.list().forEach(re=>b(()=>re(U,ne,ae)))}function I(U,ne,ae,re,_e){const w=T(U,ne);if(w)return w;const P=ne===Ai,F=Fs?history.state:{};ae&&(re||P?s.replace(U.fullPath,at({scroll:P&&F&&F.scroll},_e)):s.push(U.fullPath,_e)),l.value=U,ue(U,ne,ae,P),me()}let z;function K(){z||(z=s.listen((U,ne,ae)=>{if(!De.listening)return;const re=p(U),_e=M(re,De.currentRoute.value);if(_e){L(at(_e,{replace:!0,force:!0}),re).catch(Tr);return}c=re;const w=l.value;Fs&&Jx(rf(w.fullPath,ae.delta),ga()),_(re,w).catch(P=>ti(P,At.NAVIGATION_ABORTED|At.NAVIGATION_CANCELLED)?P:ti(P,At.NAVIGATION_GUARD_REDIRECT)?(L(at(R(P.to),{force:!0}),re).then(F=>{ti(F,At.NAVIGATION_ABORTED|At.NAVIGATION_DUPLICATED)&&!ae.delta&&ae.type===Pl.pop&&s.go(-1,!1)}).catch(Tr),Promise.reject()):(ae.delta&&s.go(-ae.delta,!1),H(P,re,w))).then(P=>{P=P||I(re,w,!1),P&&(ae.delta&&!ti(P,At.NAVIGATION_CANCELLED)?s.go(-ae.delta,!1):ae.type===Pl.pop&&ti(P,At.NAVIGATION_ABORTED|At.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),D(re,w,P)}).catch(Tr)}))}let te=ar(),X=ar(),Q;function H(U,ne,ae){me(U);const re=X.list();return re.length?re.forEach(_e=>_e(U,ne,ae)):console.error(U),Promise.reject(U)}function pe(){return Q&&l.value!==Ai?Promise.resolve():new Promise((U,ne)=>{te.add([U,ne])})}function me(U){return Q||(Q=!U,K(),te.list().forEach(([ne,ae])=>U?ae(U):ne()),te.reset()),U}function ue(U,ne,ae,re){const{scrollBehavior:_e}=n;if(!Fs||!_e)return Promise.resolve();const w=!ae&&Qx(rf(U.fullPath,0))||(re||!ae)&&history.state&&history.state.scroll||null;return Nc().then(()=>_e(U,ne,w)).then(P=>P&&Zx(P)).catch(P=>H(P,U,ne))}const Se=U=>s.go(U);let Be;const Ue=new Set,De={currentRoute:l,listening:!0,addRoute:h,removeRoute:x,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:n,push:S,replace:C,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:pe,install(U){U.component("RouterLink",wg),U.component("RouterView",ap),U.config.globalProperties.$router=De,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>St(l)}),Fs&&!Be&&l.value===Ai&&(Be=!0,S(s.location).catch(re=>{}));const ne={};for(const re in Ai)Object.defineProperty(ne,re,{get:()=>l.value[re],enumerable:!0});U.provide(Xc,De),U.provide(ip,th(ne)),U.provide(Ll,l);const ae=U.unmount;Ue.add(U),U.unmount=function(){Ue.delete(U),Ue.size<1&&(c=Ai,z&&z(),z=null,l.value=Ai,Be=!1,Q=!1),ae()}}};function Z(U){return U.reduce((ne,ae)=>ne.then(()=>b(ae)),Promise.resolve())}return De}const Lg={__name:"App",setup(n){return(e,t)=>(ke(),wn(St(ap)))}},qc=Ax("settings",()=>{let n={};try{n=JSON.parse(localStorage.getItem("pathview-settings")||"{}")}catch(p){console.error("Failed to parse settings",p)}const e=(p,R)=>p??R,t=qe(n.showSystemInfo||!1),i=qe(n.vizMode||0),s=qe(n.themeColor||"#ffffff"),r=qe(n.syncZoomRotate!==void 0?n.syncZoomRotate:!0),o=qe(!1),a=qe(!1);let l=n.altitudeRange;Array.isArray(l)||(l=[null,null]);const c=qe([e(l[0],-1/0),e(l[1],1/0)]);let u=n.speedLimit;typeof u=="number"&&(u=[0,u]),Array.isArray(u)||(u=[null,null]);const f=qe([e(u[0],0),e(u[1],1/0)]);zt([t,i,s,c,f,r],()=>{const p={showSystemInfo:t.value,vizMode:i.value,themeColor:s.value,altitudeRange:c.value,speedLimit:f.value,syncZoomRotate:r.value};localStorage.setItem("pathview-settings",JSON.stringify(p))},{deep:!0});function d(){o.value=!o.value}function h(){a.value=!a.value}function x(p){i.value=p}function v(p,R){c.value=[p,R]}function m(p,R){f.value=[p,R]}return{showSystemInfo:t,vizMode:i,themeColor:s,syncZoomRotate:r,isSettingsOpen:o,isAboutOpen:a,altitudeRange:c,speedLimit:f,toggleSettingsModal:d,toggleAboutModal:h,setVizMode:x,setAltitudeRange:v,setSpeedLimit:m}});const Yc="181",Hs={ROTATE:0,DOLLY:1,PAN:2},Os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ig=0,_f=1,Ug=2,lp=1,Ng=2,li=3,Xi=0,ln=1,Xn=2,xi=0,Gs=1,vf=2,bf=3,Sf=4,Fg=5,as=100,Og=101,Bg=102,kg=103,zg=104,Vg=200,Hg=201,Gg=202,Wg=203,Il=204,Ul=205,Xg=206,qg=207,Yg=208,$g=209,jg=210,Kg=211,Zg=212,Jg=213,Qg=214,Nl=0,Fl=1,Ol=2,js=3,Bl=4,kl=5,zl=6,Vl=7,cp=0,e_=1,t_=2,Hi=0,n_=1,i_=2,s_=3,r_=4,o_=5,a_=6,l_=7,up=300,Ks=301,Zs=302,Hl=303,Gl=304,_a=306,Wl=1e3,pi=1001,Xl=1002,xn=1003,c_=1004,eo=1005,An=1006,ka=1007,us=1008,Mi=1009,fp=1010,dp=1011,Ur=1012,$c=1013,hs=1014,mi=1015,er=1016,jc=1017,Kc=1018,Nr=1020,hp=35902,pp=35899,mp=1021,xp=1022,Un=1023,Fr=1026,Or=1027,gp=1028,Zc=1029,Jc=1030,Qc=1031,eu=1033,Io=33776,Uo=33777,No=33778,Fo=33779,ql=35840,Yl=35841,$l=35842,jl=35843,Kl=36196,Zl=37492,Jl=37496,Ql=37808,ec=37809,tc=37810,nc=37811,ic=37812,sc=37813,rc=37814,oc=37815,ac=37816,lc=37817,cc=37818,uc=37819,fc=37820,dc=37821,hc=36492,pc=36494,mc=36495,xc=36283,gc=36284,_c=36285,vc=36286,u_=3200,f_=3201,d_=0,h_=1,ki="",yn="srgb",Js="srgb-linear",Ko="linear",pt="srgb",Ss=7680,Mf=519,p_=512,m_=513,x_=514,_p=515,g_=516,__=517,v_=518,b_=519,yf=35044,Ef="300 es",qn=2e3,Zo=2001;function vp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function S_(){const n=Jo("canvas");return n.style.display="block",n}const Tf={};function Af(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ye(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Rt(...n){const e="THREE."+n.shift();console.error(e,...n)}function Br(...n){const e=n.join(" ");e in Tf||(Tf[e]=!0,Ye(...n))}function M_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oo=Math.PI/180,bc=180/Math.PI;function Gr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function y_(n,e){return(n%e+e)%e}function za(n,e,t){return(1-t)*n+t*e}function lr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const E_={DEG2RAD:Oo};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ps{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],h=r[o+1],x=r[o+2],v=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=d,e[t+1]=h,e[t+2]=x,e[t+3]=v;return}if(f!==v||l!==d||c!==h||u!==x){let m=l*d+c*h+u*x+f*v;m<0&&(d=-d,h=-h,x=-x,v=-v,m=-m);let p=1-a;if(m<.9995){const R=Math.acos(m),T=Math.sin(R);p=Math.sin(p*R)/T,a=Math.sin(a*R)/T,l=l*p+d*a,c=c*p+h*a,u=u*p+x*a,f=f*p+v*a}else{l=l*p+d*a,c=c*p+h*a,u=u*p+x*a,f=f*p+v*a;const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],h=r[o+2],x=r[o+3];return e[t]=a*x+u*f+l*h-c*d,e[t+1]=l*x+u*d+c*f-a*h,e[t+2]=c*x+u*h+a*d-l*f,e[t+3]=u*x-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),h=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*h*x,this._y=c*h*f-d*u*x,this._z=c*u*x+d*h*f,this._w=c*u*f-d*h*x;break;case"YXZ":this._x=d*u*f+c*h*x,this._y=c*h*f-d*u*x,this._z=c*u*x-d*h*f,this._w=c*u*f+d*h*x;break;case"ZXY":this._x=d*u*f-c*h*x,this._y=c*h*f+d*u*x,this._z=c*u*x+d*h*f,this._w=c*u*f-d*h*x;break;case"ZYX":this._x=d*u*f-c*h*x,this._y=c*h*f+d*u*x,this._z=c*u*x-d*h*f,this._w=c*u*f+d*h*x;break;case"YZX":this._x=d*u*f+c*h*x,this._y=c*h*f+d*u*x,this._z=c*u*x-d*h*f,this._w=c*u*f-d*h*x;break;case"XZY":this._x=d*u*f-c*h*x,this._y=c*h*f-d*u*x,this._z=c*u*x+d*h*f,this._w=c*u*f+d*h*x;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new j,wf=new ps;class Je{constructor(e,t,i,s,r,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],x=i[8],v=s[0],m=s[3],p=s[6],R=s[1],T=s[4],S=s[7],C=s[2],M=s[5],L=s[8];return r[0]=o*v+a*R+l*C,r[3]=o*m+a*T+l*M,r[6]=o*p+a*S+l*L,r[1]=c*v+u*R+f*C,r[4]=c*m+u*T+f*M,r[7]=c*p+u*S+f*L,r[2]=d*v+h*R+x*C,r[5]=d*m+h*T+x*M,r[8]=d*p+h*S+x*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,h=c*r-o*l,x=t*f+i*d+s*h;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=h*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new Je,Rf=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cf=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T_(){const n={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?Ko:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Br("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Br("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Js]:{primaries:e,whitePoint:i,transfer:Ko,toXYZ:Rf,fromXYZ:Cf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Rf,fromXYZ:Cf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),n}const rt=T_();function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ms;class A_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ms===void 0&&(Ms=Jo("canvas")),Ms.width=e.width,Ms.height=e.height;const s=Ms.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ms}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gi(t[i]/255)*255):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let w_=0;class tu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Gr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ga(s[o].image)):r.push(Ga(s[o]))}else r=Ga(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?A_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let R_=0;const Wa=new j;class en extends gs{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,i=pi,s=pi,r=An,o=us,a=Un,l=Mi,c=en.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Gr(),this.name="",this.source=new tu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wa).x}get height(){return this.source.getSize(Wa).y}get depth(){return this.source.getSize(Wa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==up)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wl:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wl:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=up;en.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,s=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],x=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,S=(h+1)/2,C=(p+1)/2,M=(u+d)/4,L=(f+v)/4,O=(x+m)/4;return T>S&&T>C?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=M/i,r=L/i):S>C?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=M/s,r=O/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=L/r,s=O/r),this.set(i,s,r,t),this}let R=Math.sqrt((m-x)*(m-x)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(m-x)/R,this.y=(f-v)/R,this.z=(d-u)/R,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class C_ extends gs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new en(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new tu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends C_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class bp extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P_ extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),to.copy(i.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),no.subVectors(this.max,cr),ys.subVectors(e.a,cr),Es.subVectors(e.b,cr),Ts.subVectors(e.c,cr),wi.subVectors(Es,ys),Ri.subVectors(Ts,Es),Ji.subVectors(ys,Ts);let t=[0,-wi.z,wi.y,0,-Ri.z,Ri.y,0,-Ji.z,Ji.y,wi.z,0,-wi.x,Ri.z,0,-Ri.x,Ji.z,0,-Ji.x,-wi.y,wi.x,0,-Ri.y,Ri.x,0,-Ji.y,Ji.x,0];return!Xa(t,ys,Es,Ts,no)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,ys,Es,Ts,no))?!1:(io.crossVectors(wi,Ri),t=[io.x,io.y,io.z],Xa(t,ys,Es,Ts,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ni=[new j,new j,new j,new j,new j,new j,new j,new j],Cn=new j,to=new Wr,ys=new j,Es=new j,Ts=new j,wi=new j,Ri=new j,Ji=new j,cr=new j,no=new j,io=new j,Qi=new j;function Xa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qi.fromArray(n,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),u=i.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const D_=new Wr,ur=new j,qa=new j;class tr{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):D_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(qa)),this.expandByPoint(ur.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ii=new j,Ya=new j,so=new j,Ci=new j,$a=new j,ro=new j,ja=new j;class Xr{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ya.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Ya);const r=e.distanceTo(t)*.5,o=-this.direction.dot(so),a=Ci.dot(this.direction),l=-Ci.dot(so),c=Ci.lengthSq(),u=Math.abs(1-o*o);let f,d,h,x;if(u>0)if(f=o*l-a,d=o*a-l,x=r*u,f>=0)if(d>=-x)if(d<=x){const v=1/u;f*=v,d*=v,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ya).addScaledVector(so,d),h}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),s=ii.dot(ii)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,i,s,r){$a.subVectors(t,e),ro.subVectors(i,e),ja.crossVectors($a,ro);let o=this.direction.dot(ja),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const l=a*this.direction.dot(ro.crossVectors(Ci,ro));if(l<0)return null;const c=a*this.direction.dot($a.cross(Ci));if(c<0||l+c>o)return null;const u=-a*Ci.dot(ja);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,i,s,r,o,a,l,c,u,f,d,h,x,v,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,d,h,x,v,m)}set(e,t,i,s,r,o,a,l,c,u,f,d,h,x,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=x,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,h=o*f,x=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+x*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=x+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,x=c*u,v=c*f;t[0]=d+v*a,t[4]=x*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-x,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,x=c*u,v=c*f;t[0]=d-v*a,t[4]=-o*f,t[8]=x+h*a,t[1]=h+x*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,x=a*u,v=a*f;t[0]=l*u,t[4]=x*c-h,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=h*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,x=a*l,v=a*c;t[0]=l*u,t[4]=v-d*f,t[8]=x*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+x,t[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,h=o*c,x=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=o*u,t[9]=h*f-x,t[2]=x*f-h,t[6]=a*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L_,e,I_)}lookAt(e,t,i){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Pi.crossVectors(i,fn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Pi.crossVectors(i,fn)),Pi.normalize(),oo.crossVectors(fn,Pi),s[0]=Pi.x,s[4]=oo.x,s[8]=fn.x,s[1]=Pi.y,s[5]=oo.y,s[9]=fn.y,s[2]=Pi.z,s[6]=oo.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],x=i[2],v=i[6],m=i[10],p=i[14],R=i[3],T=i[7],S=i[11],C=i[15],M=s[0],L=s[4],O=s[8],b=s[12],_=s[1],D=s[5],I=s[9],z=s[13],K=s[2],te=s[6],X=s[10],Q=s[14],H=s[3],pe=s[7],me=s[11],ue=s[15];return r[0]=o*M+a*_+l*K+c*H,r[4]=o*L+a*D+l*te+c*pe,r[8]=o*O+a*I+l*X+c*me,r[12]=o*b+a*z+l*Q+c*ue,r[1]=u*M+f*_+d*K+h*H,r[5]=u*L+f*D+d*te+h*pe,r[9]=u*O+f*I+d*X+h*me,r[13]=u*b+f*z+d*Q+h*ue,r[2]=x*M+v*_+m*K+p*H,r[6]=x*L+v*D+m*te+p*pe,r[10]=x*O+v*I+m*X+p*me,r[14]=x*b+v*z+m*Q+p*ue,r[3]=R*M+T*_+S*K+C*H,r[7]=R*L+T*D+S*te+C*pe,r[11]=R*O+T*I+S*X+C*me,r[15]=R*b+T*z+S*Q+C*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],x=e[3],v=e[7],m=e[11],p=e[15];return x*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*h-i*l*h)+v*(+t*l*h-t*c*d+r*o*d-s*o*h+s*c*u-r*l*u)+m*(+t*c*f-t*a*h-r*o*f+i*o*h+r*a*u-i*c*u)+p*(-s*a*u-t*l*f+t*a*d+s*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],x=e[12],v=e[13],m=e[14],p=e[15],R=f*m*c-v*d*c+v*l*h-a*m*h-f*l*p+a*d*p,T=x*d*c-u*m*c-x*l*h+o*m*h+u*l*p-o*d*p,S=u*v*c-x*f*c+x*a*h-o*v*h-u*a*p+o*f*p,C=x*f*l-u*v*l-x*a*d+o*v*d+u*a*m-o*f*m,M=t*R+i*T+s*S+r*C;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/M;return e[0]=R*L,e[1]=(v*d*r-f*m*r-v*s*h+i*m*h+f*s*p-i*d*p)*L,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*L,e[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*h-i*l*h)*L,e[4]=T*L,e[5]=(u*m*r-x*d*r+x*s*h-t*m*h-u*s*p+t*d*p)*L,e[6]=(x*l*r-o*m*r-x*s*c+t*m*c+o*s*p-t*l*p)*L,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*h+t*l*h)*L,e[8]=S*L,e[9]=(x*f*r-u*v*r-x*i*h+t*v*h+u*i*p-t*f*p)*L,e[10]=(o*v*r-x*a*r+x*i*c-t*v*c-o*i*p+t*a*p)*L,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*h-t*a*h)*L,e[12]=C*L,e[13]=(u*v*s-x*f*s+x*i*d-t*v*d-u*i*m+t*f*m)*L,e[14]=(x*a*s-o*v*s-x*i*l+t*v*l+o*i*m-t*a*m)*L,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*d+t*a*d)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,d=r*c,h=r*u,x=r*f,v=o*u,m=o*f,p=a*f,R=l*c,T=l*u,S=l*f,C=i.x,M=i.y,L=i.z;return s[0]=(1-(v+p))*C,s[1]=(h+S)*C,s[2]=(x-T)*C,s[3]=0,s[4]=(h-S)*M,s[5]=(1-(d+p))*M,s[6]=(m+R)*M,s[7]=0,s[8]=(x+T)*L,s[9]=(m-R)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=As.set(s[0],s[1],s[2]).length();const o=As.set(s[4],s[5],s[6]).length(),a=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Pn.copy(this);const c=1/r,u=1/o,f=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,t.setFromRotationMatrix(Pn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=qn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let x,v;if(l)x=r/(o-r),v=o*r/(o-r);else if(a===qn)x=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Zo)x=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=qn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),h=-(i+s)/(i-s);let x,v;if(l)x=1/(o-r),v=o/(o-r);else if(a===qn)x=-2/(o-r),v=-(o+r)/(o-r);else if(a===Zo)x=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const As=new j,Pn=new Ct,L_=new j(0,0,0),I_=new j(1,1,1),Pi=new j,oo=new j,fn=new j,Pf=new Ct,Df=new ps;class yi{constructor(e=0,t=0,i=0,s=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Df.setFromEuler(this),this.setFromQuaternion(Df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class nu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U_=0;const Lf=new j,ws=new ps,si=new Ct,ao=new j,fr=new j,N_=new j,F_=new ps,If=new j(1,0,0),Uf=new j(0,1,0),Nf=new j(0,0,1),Ff={type:"added"},O_={type:"removed"},Rs={type:"childadded",child:null},Ka={type:"childremoved",child:null};class tn extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new j,t=new yi,i=new ps,s=new j(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Je}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(If,e)}rotateY(e){return this.rotateOnAxis(Uf,e)}rotateZ(e){return this.rotateOnAxis(Nf,e)}translateOnAxis(e,t){return Lf.copy(e).applyQuaternion(this.quaternion),this.position.add(Lf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(If,e)}translateY(e){return this.translateOnAxis(Uf,e)}translateZ(e){return this.translateOnAxis(Nf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ao.copy(e):ao.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(fr,ao,this.up):si.lookAt(ao,fr,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(si),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ff),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O_),Ka.child=e,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ff),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,N_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,F_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}tn.DEFAULT_UP=new j(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new j,ri=new j,Za=new j,oi=new j,Cs=new j,Ps=new j,Of=new j,Ja=new j,Qa=new j,el=new j,tl=new Pt,nl=new Pt,il=new Pt;class Ln{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),ri.subVectors(i,t),Za.subVectors(e,t);const o=Dn.dot(Dn),a=Dn.dot(ri),l=Dn.dot(Za),c=ri.dot(ri),u=ri.dot(Za),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,x=(o*u-a*l)*d;return r.set(1-h-x,x,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return tl.setScalar(0),nl.setScalar(0),il.setScalar(0),tl.fromBufferAttribute(e,t),nl.fromBufferAttribute(e,i),il.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(tl,r.x),o.addScaledVector(nl,r.y),o.addScaledVector(il,r.z),o}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),ri.subVectors(e,t),Dn.cross(ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Dn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Ln.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Cs.subVectors(s,i),Ps.subVectors(r,i),Ja.subVectors(e,i);const l=Cs.dot(Ja),c=Ps.dot(Ja);if(l<=0&&c<=0)return t.copy(i);Qa.subVectors(e,s);const u=Cs.dot(Qa),f=Ps.dot(Qa);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Cs,o);el.subVectors(e,r);const h=Cs.dot(el),x=Ps.dot(el);if(x>=0&&h<=x)return t.copy(r);const v=h*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(Ps,a);const m=u*x-h*f;if(m<=0&&f-u>=0&&h-x>=0)return Of.subVectors(r,s),a=(f-u)/(f-u+(h-x)),t.copy(s).addScaledVector(Of,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(i).addScaledVector(Cs,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},lo={h:0,s:0,l:0};function sl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=y_(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=sl(o,r,e+1/3),this.g=sl(o,r,e),this.b=sl(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=yn){function i(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const i=Sp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return rt.workingToColorSpace(Wt.copy(this),e),Math.round(et(Wt.r*255,0,255))*65536+Math.round(et(Wt.g*255,0,255))*256+Math.round(et(Wt.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Wt.copy(this),t);const i=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=yn){rt.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,s=Wt.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(lo);const i=za(Di.h,lo.h,t),s=za(Di.s,lo.s,t),r=za(Di.l,lo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new it;it.NAMES=Sp;let B_=0;class nr extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=Gr(),this.name="",this.type="Material",this.blending=Gs,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Ul,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Il&&(i.blendSrc=this.blendSrc),this.blendDst!==Ul&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class iu extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=cp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new j,co=new je;let k_=0;class Nt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yf,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=lr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yf&&(e.usage=this.usage),e}}class Mp extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yp extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gn extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let z_=0;const Mn=new Ct,rl=new tn,Ds=new j,dn=new Wr,dr=new Wr,Bt=new j;class _n extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vp(e)?yp:Mp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,i){return Mn.makeTranslation(e,t,i),this.applyMatrix4(Mn),this}scale(e,t,i){return Mn.makeScale(e,t,i),this.applyMatrix4(Mn),this}lookAt(e){return rl.lookAt(e),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(dn.min,dr.min),dn.expandByPoint(Bt),Bt.addVectors(dn.max,dr.max),dn.expandByPoint(Bt)):(dn.expandByPoint(dr.min),dn.expandByPoint(dr.max))}dn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(e,c),Bt.add(Ds)),s=Math.max(s,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new j,l[O]=new j;const c=new j,u=new j,f=new j,d=new je,h=new je,x=new je,v=new j,m=new j;function p(O,b,_){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,_),d.fromBufferAttribute(r,O),h.fromBufferAttribute(r,b),x.fromBufferAttribute(r,_),u.sub(c),f.sub(c),h.sub(d),x.sub(d);const D=1/(h.x*x.y-x.x*h.y);isFinite(D)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(f,-h.y).multiplyScalar(D),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-x.x).multiplyScalar(D),a[O].add(v),a[b].add(v),a[_].add(v),l[O].add(m),l[b].add(m),l[_].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let O=0,b=R.length;O<b;++O){const _=R[O],D=_.start,I=_.count;for(let z=D,K=D+I;z<K;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new j,S=new j,C=new j,M=new j;function L(O){C.fromBufferAttribute(s,O),M.copy(C);const b=a[O];T.copy(b),T.sub(C.multiplyScalar(C.dot(b))).normalize(),S.crossVectors(M,b);const D=S.dot(l[O])<0?-1:1;o.setXYZW(O,T.x,T.y,T.z,D)}for(let O=0,b=R.length;O<b;++O){const _=R[O],D=_.start,I=_.count;for(let z=D,K=D+I;z<K;z+=3)L(e.getX(z+0)),L(e.getX(z+1)),L(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new j,r=new j,o=new j,a=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let d=0,h=e.count;d<h;d+=3){const x=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,x=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)d[x++]=c[h++]}return new Nt(d,u,f)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bf=new Ct,es=new Xr,uo=new tr,kf=new j,fo=new j,ho=new j,po=new j,ol=new j,mo=new j,zf=new j,xo=new j;class Jn extends tn{constructor(e=new _n,t=new iu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(ol.fromBufferAttribute(f,e),o?mo.addScaledVector(ol,u):mo.addScaledVector(ol.sub(t),u))}t.add(mo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(uo.containsPoint(es.origin)===!1&&(es.intersectSphere(uo,kf)===null||es.origin.distanceToSquared(kf)>(e.far-e.near)**2))&&(Bf.copy(r).invert(),es.copy(e.ray).applyMatrix4(Bf),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const m=d[x],p=o[m.materialIndex],R=Math.max(m.start,h.start),T=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=R,C=T;S<C;S+=3){const M=a.getX(S),L=a.getX(S+1),O=a.getX(S+2);s=go(this,p,e,i,c,u,f,M,L,O),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const x=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=x,p=v;m<p;m+=3){const R=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);s=go(this,o,e,i,c,u,f,R,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const m=d[x],p=o[m.materialIndex],R=Math.max(m.start,h.start),T=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=R,C=T;S<C;S+=3){const M=S,L=S+1,O=S+2;s=go(this,p,e,i,c,u,f,M,L,O),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const x=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=x,p=v;m<p;m+=3){const R=m,T=m+1,S=m+2;s=go(this,o,e,i,c,u,f,R,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function V_(n,e,t,i,s,r,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Xi,a),l===null)return null;xo.copy(a),xo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xo);return c<t.near||c>t.far?null:{distance:c,point:xo.clone(),object:n}}function go(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,fo),n.getVertexPosition(l,ho),n.getVertexPosition(c,po);const u=V_(n,e,t,i,fo,ho,po,zf);if(u){const f=new j;Ln.getBarycoord(zf,fo,ho,po,f),s&&(u.uv=Ln.getInterpolatedAttribute(s,a,l,c,f,new je)),r&&(u.uv1=Ln.getInterpolatedAttribute(r,a,l,c,f,new je)),o&&(u.normal=Ln.getInterpolatedAttribute(o,a,l,c,f,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new j,materialIndex:0};Ln.getNormal(fo,ho,po,d.normal),u.face=d,u.barycoord=f}return u}class qr extends _n{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,s,o,2),x("x","z","y",1,-1,e,i,-t,s,o,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(f,2));function x(v,m,p,R,T,S,C,M,L,O,b){const _=S/L,D=C/O,I=S/2,z=C/2,K=M/2,te=L+1,X=O+1;let Q=0,H=0;const pe=new j;for(let me=0;me<X;me++){const ue=me*D-z;for(let Se=0;Se<te;Se++){const Be=Se*_-I;pe[v]=Be*R,pe[m]=ue*T,pe[p]=K,c.push(pe.x,pe.y,pe.z),pe[v]=0,pe[m]=0,pe[p]=M>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(Se/L),f.push(1-me/O),Q+=1}}for(let me=0;me<O;me++)for(let ue=0;ue<L;ue++){const Se=d+ue+te*me,Be=d+ue+te*(me+1),Ue=d+(ue+1)+te*(me+1),De=d+(ue+1)+te*me;l.push(Se,Be,De),l.push(Be,Ue,De),H+=6}a.addGroup(h,H,b),h+=H,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=Qs(n[t]);for(const s in i)e[s]=i[s]}return e}function H_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ep(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const G_={clone:Qs,merge:jt};var W_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W_,this.fragmentShader=X_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=H_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Tp extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new j,Vf=new je,Hf=new je;class En extends Tp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bc*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Vf,Hf),t.subVectors(Hf,Vf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ls=-90,Is=1;class q_ extends tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(Ls,Is,e,t);s.layers=this.layers,this.add(s);const r=new En(Ls,Is,e,t);r.layers=this.layers,this.add(r);const o=new En(Ls,Is,e,t);o.layers=this.layers,this.add(o);const a=new En(Ls,Is,e,t);a.layers=this.layers,this.add(a);const l=new En(Ls,Is,e,t);l.layers=this.layers,this.add(l);const c=new En(Ls,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Ap extends en{constructor(e=[],t=Ks,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Y_ extends ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ap(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qr(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:xi});r.uniforms.tEquirect.value=t;const o=new Jn(s,r),a=t.minFilter;return t.minFilter===us&&(t.minFilter=An),new q_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class _o extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $_={type:"move"};class al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,x=.005;c.inputState.pinching&&d>h+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _o;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class j_ extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class K_ extends en{constructor(e=null,t=1,i=1,s,r,o,a,l,c=xn,u=xn,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ll=new j,Z_=new j,J_=new Je;class Bi{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ll.subVectors(i,t).cross(Z_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ll),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||J_.getNormalMatrix(e),s=this.coplanarPoint(ll).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new tr,Q_=new je(.5,.5),vo=new j;class wp{constructor(e=new Bi,t=new Bi,i=new Bi,s=new Bi,r=new Bi,o=new Bi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],x=r[8],v=r[9],m=r[10],p=r[11],R=r[12],T=r[13],S=r[14],C=r[15];if(s[0].setComponents(c-o,h-u,p-x,C-R).normalize(),s[1].setComponents(c+o,h+u,p+x,C+R).normalize(),s[2].setComponents(c+a,h+f,p+v,C+T).normalize(),s[3].setComponents(c-a,h-f,p-v,C-T).normalize(),i)s[4].setComponents(l,d,m,S).normalize(),s[5].setComponents(c-l,h-d,p-m,C-S).normalize();else if(s[4].setComponents(c-l,h-d,p-m,C-S).normalize(),t===qn)s[5].setComponents(c+l,h+d,p+m,C+S).normalize();else if(t===Zo)s[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=Q_.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(vo.x=s.normal.x>0?e.max.x:e.min.x,vo.y=s.normal.y>0?e.max.y:e.min.y,vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rp extends nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qo=new j,ea=new j,Gf=new Ct,hr=new Xr,bo=new tr,cl=new j,Wf=new j;class ev extends tn{constructor(e=new _n,t=new Rp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Qo.fromBufferAttribute(t,s-1),ea.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Qo.distanceTo(ea);e.setAttribute("lineDistance",new gn(i,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),bo.radius+=r,e.ray.intersectsSphere(bo)===!1)return;Gf.copy(s).invert(),hr.copy(e.ray).applyMatrix4(Gf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let v=h,m=x-1;v<m;v+=c){const p=u.getX(v),R=u.getX(v+1),T=So(this,e,hr,l,p,R,v);T&&t.push(T)}if(this.isLineLoop){const v=u.getX(x-1),m=u.getX(h),p=So(this,e,hr,l,v,m,x-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let v=h,m=x-1;v<m;v+=c){const p=So(this,e,hr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=So(this,e,hr,l,x-1,h,x-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function So(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Qo.fromBufferAttribute(a,s),ea.fromBufferAttribute(a,r),t.distanceSqToSegment(Qo,ea,cl,Wf)>i)return;cl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(cl);if(!(c<e.near||c>e.far))return{distance:c,point:Wf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Xf=new j,qf=new j;class tv extends ev{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Xf.fromBufferAttribute(t,s),qf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Xf.distanceTo(qf);e.setAttribute("lineDistance",new gn(i,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nv extends nr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yf=new Ct,Sc=new Xr,Mo=new tr,yo=new j;class iv extends tn{constructor(e=new _n,t=new nv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;Yf.copy(s).invert(),Sc.copy(e.ray).applyMatrix4(Yf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let x=d,v=h;x<v;x++){const m=c.getX(x);yo.fromBufferAttribute(f,m),$f(yo,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let x=d,v=h;x<v;x++)yo.fromBufferAttribute(f,x),$f(yo,x,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $f(n,e,t,i,s,r,o){const a=Sc.distanceSqToPoint(n);if(a<t){const l=new j;Sc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Cp extends en{constructor(e,t,i=hs,s,r,o,a=xn,l=xn,c,u=Fr,f=1){if(u!==Fr&&u!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pp extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yr extends _n{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=t/l,h=[],x=[],v=[],m=[];for(let p=0;p<u;p++){const R=p*d-o;for(let T=0;T<c;T++){const S=T*f-r;x.push(S,-R,0),v.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){const T=R+c*p,S=R+c*(p+1),C=R+1+c*(p+1),M=R+1+c*p;h.push(T,S,M),h.push(S,C,M)}this.setIndex(h),this.setAttribute("position",new gn(x,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.width,e.height,e.widthSegments,e.heightSegments)}}class su extends _n{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new j,d=new j,h=[],x=[],v=[],m=[];for(let p=0;p<=i;p++){const R=[],T=p/i;let S=0;p===0&&o===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const M=C/t;f.x=-e*Math.cos(s+M*r)*Math.sin(o+T*a),f.y=e*Math.cos(o+T*a),f.z=e*Math.sin(s+M*r)*Math.sin(o+T*a),x.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(M+S,1-T),R.push(c++)}u.push(R)}for(let p=0;p<i;p++)for(let R=0;R<t;R++){const T=u[p][R+1],S=u[p][R],C=u[p+1][R],M=u[p+1][R+1];(p!==0||o>0)&&h.push(T,S,M),(p!==i-1||l<Math.PI)&&h.push(S,C,M)}this.setIndex(h),this.setAttribute("position",new gn(x,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sv extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rv extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ov extends Tp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class av extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const jf=new Ct;class Kf{constructor(e,t,i=0,s=1/0){this.ray=new Xr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new nu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jf),this}intersectObject(e,t=!0,i=[]){return Mc(e,this,i,t),i.sort(Zf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Mc(e[s],this,i,t);return i.sort(Zf),i}}function Zf(n,e){return n.distance-e.distance}function Mc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Mc(r[o],e,t,!0)}}class Jf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lv extends gs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ye("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Qf(n,e,t,i){const s=cv(i);switch(t){case mp:return n*e;case gp:return n*e/s.components*s.byteLength;case Zc:return n*e/s.components*s.byteLength;case Jc:return n*e*2/s.components*s.byteLength;case Qc:return n*e*2/s.components*s.byteLength;case xp:return n*e*3/s.components*s.byteLength;case Un:return n*e*4/s.components*s.byteLength;case eu:return n*e*4/s.components*s.byteLength;case Io:case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case No:case Fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yl:case jl:return Math.max(n,16)*Math.max(e,8)/4;case ql:case $l:return Math.max(n,8)*Math.max(e,8)/2;case Kl:case Zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case tc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case nc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case oc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ac:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case dc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case hc:case pc:case mc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xc:case gc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case _c:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cv(n){switch(n){case Mi:case fp:return{byteLength:1,components:1};case Ur:case dp:case er:return{byteLength:2,components:1};case jc:case Kc:return{byteLength:2,components:4};case hs:case $c:case mi:return{byteLength:4,components:1};case hp:case pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);function Dp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function uv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,x)=>h.start-x.start);let d=0;for(let h=1;h<f.length;h++){const x=f[d],v=f[h];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,x=f.length;h<x;h++){const v=f[h];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var fv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_v=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ev=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Iv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Uv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ov=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$v=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ib=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ob=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ab=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ub=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,db=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_b=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ab=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ib=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ub=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$b=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_S=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ES=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,HS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:fv,alphahash_pars_fragment:dv,alphamap_fragment:hv,alphamap_pars_fragment:pv,alphatest_fragment:mv,alphatest_pars_fragment:xv,aomap_fragment:gv,aomap_pars_fragment:_v,batching_pars_vertex:vv,batching_vertex:bv,begin_vertex:Sv,beginnormal_vertex:Mv,bsdfs:yv,iridescence_fragment:Ev,bumpmap_pars_fragment:Tv,clipping_planes_fragment:Av,clipping_planes_pars_fragment:wv,clipping_planes_pars_vertex:Rv,clipping_planes_vertex:Cv,color_fragment:Pv,color_pars_fragment:Dv,color_pars_vertex:Lv,color_vertex:Iv,common:Uv,cube_uv_reflection_fragment:Nv,defaultnormal_vertex:Fv,displacementmap_pars_vertex:Ov,displacementmap_vertex:Bv,emissivemap_fragment:kv,emissivemap_pars_fragment:zv,colorspace_fragment:Vv,colorspace_pars_fragment:Hv,envmap_fragment:Gv,envmap_common_pars_fragment:Wv,envmap_pars_fragment:Xv,envmap_pars_vertex:qv,envmap_physical_pars_fragment:ib,envmap_vertex:Yv,fog_vertex:$v,fog_pars_vertex:jv,fog_fragment:Kv,fog_pars_fragment:Zv,gradientmap_pars_fragment:Jv,lightmap_pars_fragment:Qv,lights_lambert_fragment:eb,lights_lambert_pars_fragment:tb,lights_pars_begin:nb,lights_toon_fragment:sb,lights_toon_pars_fragment:rb,lights_phong_fragment:ob,lights_phong_pars_fragment:ab,lights_physical_fragment:lb,lights_physical_pars_fragment:cb,lights_fragment_begin:ub,lights_fragment_maps:fb,lights_fragment_end:db,logdepthbuf_fragment:hb,logdepthbuf_pars_fragment:pb,logdepthbuf_pars_vertex:mb,logdepthbuf_vertex:xb,map_fragment:gb,map_pars_fragment:_b,map_particle_fragment:vb,map_particle_pars_fragment:bb,metalnessmap_fragment:Sb,metalnessmap_pars_fragment:Mb,morphinstance_vertex:yb,morphcolor_vertex:Eb,morphnormal_vertex:Tb,morphtarget_pars_vertex:Ab,morphtarget_vertex:wb,normal_fragment_begin:Rb,normal_fragment_maps:Cb,normal_pars_fragment:Pb,normal_pars_vertex:Db,normal_vertex:Lb,normalmap_pars_fragment:Ib,clearcoat_normal_fragment_begin:Ub,clearcoat_normal_fragment_maps:Nb,clearcoat_pars_fragment:Fb,iridescence_pars_fragment:Ob,opaque_fragment:Bb,packing:kb,premultiplied_alpha_fragment:zb,project_vertex:Vb,dithering_fragment:Hb,dithering_pars_fragment:Gb,roughnessmap_fragment:Wb,roughnessmap_pars_fragment:Xb,shadowmap_pars_fragment:qb,shadowmap_pars_vertex:Yb,shadowmap_vertex:$b,shadowmask_pars_fragment:jb,skinbase_vertex:Kb,skinning_pars_vertex:Zb,skinning_vertex:Jb,skinnormal_vertex:Qb,specularmap_fragment:eS,specularmap_pars_fragment:tS,tonemapping_fragment:nS,tonemapping_pars_fragment:iS,transmission_fragment:sS,transmission_pars_fragment:rS,uv_pars_fragment:oS,uv_pars_vertex:aS,uv_vertex:lS,worldpos_vertex:cS,background_vert:uS,background_frag:fS,backgroundCube_vert:dS,backgroundCube_frag:hS,cube_vert:pS,cube_frag:mS,depth_vert:xS,depth_frag:gS,distanceRGBA_vert:_S,distanceRGBA_frag:vS,equirect_vert:bS,equirect_frag:SS,linedashed_vert:MS,linedashed_frag:yS,meshbasic_vert:ES,meshbasic_frag:TS,meshlambert_vert:AS,meshlambert_frag:wS,meshmatcap_vert:RS,meshmatcap_frag:CS,meshnormal_vert:PS,meshnormal_frag:DS,meshphong_vert:LS,meshphong_frag:IS,meshphysical_vert:US,meshphysical_frag:NS,meshtoon_vert:FS,meshtoon_frag:OS,points_vert:BS,points_frag:kS,shadow_vert:zS,shadow_frag:VS,sprite_vert:HS,sprite_frag:GS},Ee={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Wn={basic:{uniforms:jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new it(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:jt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:jt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:jt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new it(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:jt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:jt([Ee.points,Ee.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:jt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:jt([Ee.common,Ee.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:jt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:jt([Ee.sprite,Ee.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:jt([Ee.common,Ee.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:jt([Ee.lights,Ee.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Wn.physical={uniforms:jt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Eo={r:0,b:0,g:0},ns=new yi,WS=new Ct;function XS(n,e,t,i,s,r,o){const a=new it(0);let l=r===!0?0:1,c,u,f=null,d=0,h=null;function x(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function v(T){let S=!1;const C=x(T);C===null?p(a,l):C&&C.isColor&&(p(C,1),S=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,S){const C=x(S);C&&(C.isCubeTexture||C.mapping===_a)?(u===void 0&&(u=new Jn(new qr(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Qs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ns.copy(S.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(WS.makeRotationFromEuler(ns)),u.material.toneMapped=rt.getTransfer(C.colorSpace)!==pt,(f!==C||d!==C.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=C,d=C.version,h=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Jn(new Yr(2,2),new kn({name:"BackgroundMaterial",uniforms:Qs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=rt.getTransfer(C.colorSpace)!==pt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=C,d=C.version,h=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,S){T.getRGB(Eo,Ep(n)),i.buffers.color.setClear(Eo.r,Eo.g,Eo.b,S,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:v,addToRenderList:m,dispose:R}}function qS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(_,D,I,z,K){let te=!1;const X=f(z,I,D);r!==X&&(r=X,c(r.object)),te=h(_,z,I,K),te&&x(_,z,I,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,S(_,D,I,z),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function f(_,D,I){const z=I.wireframe===!0;let K=i[_.id];K===void 0&&(K={},i[_.id]=K);let te=K[D.id];te===void 0&&(te={},K[D.id]=te);let X=te[z];return X===void 0&&(X=d(l()),te[z]=X),X}function d(_){const D=[],I=[],z=[];for(let K=0;K<t;K++)D[K]=0,I[K]=0,z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:z,object:_,attributes:{},index:null}}function h(_,D,I,z){const K=r.attributes,te=D.attributes;let X=0;const Q=I.getAttributes();for(const H in Q)if(Q[H].location>=0){const me=K[H];let ue=te[H];if(ue===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(ue=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(ue=_.instanceColor)),me===void 0||me.attribute!==ue||ue&&me.data!==ue.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function x(_,D,I,z){const K={},te=D.attributes;let X=0;const Q=I.getAttributes();for(const H in Q)if(Q[H].location>=0){let me=te[H];me===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(me=_.instanceColor));const ue={};ue.attribute=me,me&&me.data&&(ue.data=me.data),K[H]=ue,X++}r.attributes=K,r.attributesNum=X,r.index=z}function v(){const _=r.newAttributes;for(let D=0,I=_.length;D<I;D++)_[D]=0}function m(_){p(_,0)}function p(_,D){const I=r.newAttributes,z=r.enabledAttributes,K=r.attributeDivisors;I[_]=1,z[_]===0&&(n.enableVertexAttribArray(_),z[_]=1),K[_]!==D&&(n.vertexAttribDivisor(_,D),K[_]=D)}function R(){const _=r.newAttributes,D=r.enabledAttributes;for(let I=0,z=D.length;I<z;I++)D[I]!==_[I]&&(n.disableVertexAttribArray(I),D[I]=0)}function T(_,D,I,z,K,te,X){X===!0?n.vertexAttribIPointer(_,D,I,K,te):n.vertexAttribPointer(_,D,I,z,K,te)}function S(_,D,I,z){v();const K=z.attributes,te=I.getAttributes(),X=D.defaultAttributeValues;for(const Q in te){const H=te[Q];if(H.location>=0){let pe=K[Q];if(pe===void 0&&(Q==="instanceMatrix"&&_.instanceMatrix&&(pe=_.instanceMatrix),Q==="instanceColor"&&_.instanceColor&&(pe=_.instanceColor)),pe!==void 0){const me=pe.normalized,ue=pe.itemSize,Se=e.get(pe);if(Se===void 0)continue;const Be=Se.buffer,Ue=Se.type,De=Se.bytesPerElement,Z=Ue===n.INT||Ue===n.UNSIGNED_INT||pe.gpuType===$c;if(pe.isInterleavedBufferAttribute){const U=pe.data,ne=U.stride,ae=pe.offset;if(U.isInstancedInterleavedBuffer){for(let re=0;re<H.locationSize;re++)p(H.location+re,U.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let re=0;re<H.locationSize;re++)m(H.location+re);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let re=0;re<H.locationSize;re++)T(H.location+re,ue/H.locationSize,Ue,me,ne*De,(ae+ue/H.locationSize*re)*De,Z)}else{if(pe.isInstancedBufferAttribute){for(let U=0;U<H.locationSize;U++)p(H.location+U,pe.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let U=0;U<H.locationSize;U++)m(H.location+U);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let U=0;U<H.locationSize;U++)T(H.location+U,ue/H.locationSize,Ue,me,ue*De,ue/H.locationSize*U*De,Z)}}else if(X!==void 0){const me=X[Q];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(H.location,me);break;case 3:n.vertexAttrib3fv(H.location,me);break;case 4:n.vertexAttrib4fv(H.location,me);break;default:n.vertexAttrib1fv(H.location,me)}}}}R()}function C(){O();for(const _ in i){const D=i[_];for(const I in D){const z=D[I];for(const K in z)u(z[K].object),delete z[K];delete D[I]}delete i[_]}}function M(_){if(i[_.id]===void 0)return;const D=i[_.id];for(const I in D){const z=D[I];for(const K in z)u(z[K].object),delete z[K];delete D[I]}delete i[_.id]}function L(_){for(const D in i){const I=i[D];if(I[_.id]===void 0)continue;const z=I[_.id];for(const K in z)u(z[K].object),delete z[K];delete I[_.id]}}function O(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:R}}function YS(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let x=0;x<f;x++)h+=u[x];t.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let x=0;x<c.length;x++)o(c[x],u[x],d[x]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let x=0;for(let v=0;v<f;v++)x+=u[v]*d[v];t.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $S(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Un&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const O=L===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Mi&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==mi&&!O)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,M=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:C,maxSamples:M}}function jS(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Bi,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const x=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||x===null||x.length===0||r&&!m)r?u(null):c();else{const R=r?0:i,T=R*4;let S=p.clippingState||null;l.value=S,S=u(x,d,T,h);for(let C=0;C!==T;++C)S[C]=t[C];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,x){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const p=h+v*4,R=d.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,S=h;T!==v;++T,S+=4)o.copy(f[T]).applyMatrix4(R,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function KS(n){let e=new WeakMap;function t(o,a){return a===Hl?o.mapping=Ks:a===Gl&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hl||a===Gl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Y_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const zi=4,ed=[.125,.215,.35,.446,.526,.582],ls=20,ZS=256,pr=new ov,td=new it;let ul=null,fl=0,dl=0,hl=!1;const JS=new j;class nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=JS}=r;ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,fl,dl),this._renderer.xr.enabled=hl,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:er,format:Un,colorSpace:Js,depthBuffer:!1},s=id(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=QS(r)),this._blurMaterial=tM(r,e,t),this._ggxMaterial=eM(r,e,t)}return s}_compileMaterial(e){const t=new Jn(new _n,e);this._renderer.compile(t,pr)}_sceneToCubeUV(e,t,i,s,r){const l=new En(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(td),f.toneMapping=Hi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jn(new qr,new iu({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const R=e.background;R?R.isColor&&(m.color.copy(R),e.background=null,p=!0):(m.color.copy(td),p=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):S===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const C=this._cubeSize;Us(s,S*C,T>2?C:0,C,C),f.setRenderTarget(s),p&&f.render(v,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ks||e.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Us(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,pr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=.05+c*.95,h=f*d,{_lodMax:x}=this,v=this._sizeLods[i],m=3*v*(i>x-zi?i-x+zi:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=x-t,Us(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,pr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,Us(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(a,pr)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*ls-1),v=r/x,m=isFinite(r)?1+Math.floor(u*v):ls;m>ls&&Ye(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const p=[];let R=0;for(let L=0;L<ls;++L){const O=L/v,b=Math.exp(-O*O/2);p.push(b),L===0?R+=b:L<m&&(R+=2*b)}for(let L=0;L<p.length;L++)p[L]=p[L]/R;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=x,d.mipInt.value=T-i;const S=this._sizeLods[s],C=3*S*(s>T-zi?s-T+zi:0),M=4*(this._cubeSize-S);Us(t,C,M,3*S,2*S),l.setRenderTarget(t),l.render(f,pr)}}function QS(n){const e=[],t=[],i=[];let s=n;const r=n-zi+1+ed.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-zi?l=ed[o-n+zi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,x=6,v=3,m=2,p=1,R=new Float32Array(v*x*h),T=new Float32Array(m*x*h),S=new Float32Array(p*x*h);for(let M=0;M<h;M++){const L=M%3*2/3-1,O=M>2?0:-1,b=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];R.set(b,v*x*M),T.set(d,m*x*M);const _=[M,M,M,M,M,M];S.set(_,p*x*M)}const C=new _n;C.setAttribute("position",new Nt(R,v)),C.setAttribute("uv",new Nt(T,m)),C.setAttribute("faceIndex",new Nt(S,p)),i.push(new Jn(C,null)),s>zi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function id(n,e,t){const i=new ms(n,e,t);return i.texture.mapping=_a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Us(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function eM(n,e,t){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:va(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function tM(n,e,t){const i=new Float32Array(ls),s=new j(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function sd(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function rd(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hl||l===Gl,u=l===Ks||l===Zs;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new nd(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new nd(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function iM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Br("WebGLRenderer: "+i+" extension not supported."),s}}}function sM(n,e,t,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,x=f.attributes.position;let v=0;if(h!==null){const R=h.array;v=h.version;for(let T=0,S=R.length;T<S;T+=3){const C=R[T+0],M=R[T+1],L=R[T+2];d.push(C,M,M,L,L,C)}}else if(x!==void 0){const R=x.array;v=x.version;for(let T=0,S=R.length/3-1;T<S;T+=3){const C=T+0,M=T+1,L=T+2;d.push(C,M,M,L,L,C)}}else return;const m=new(vp(d)?yp:Mp)(d,1);m.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function rM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,x){x!==0&&(n.drawElementsInstanced(i,h,r,d*o,x),t.update(h,i,x))}function u(d,h,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,x);let m=0;for(let p=0;p<x;p++)m+=h[p];t.update(m,i,1)}function f(d,h,x,v){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,d,0,v,0,x);let p=0;for(let R=0;R<x;R++)p+=h[R]*v[R];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function oM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Rt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function aM(n,e,t){const i=new WeakMap,s=new Pt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let b=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let T=0;h===!0&&(T=1),x===!0&&(T=2),v===!0&&(T=3);let S=a.attributes.position.count*T,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const M=new Float32Array(S*C*4*f),L=new bp(M,S,C,f);L.type=mi,L.needsUpdate=!0;const O=T*4;for(let _=0;_<f;_++){const D=m[_],I=p[_],z=R[_],K=S*C*4*_;for(let te=0;te<D.count;te++){const X=te*O;h===!0&&(s.fromBufferAttribute(D,te),M[K+X+0]=s.x,M[K+X+1]=s.y,M[K+X+2]=s.z,M[K+X+3]=0),x===!0&&(s.fromBufferAttribute(I,te),M[K+X+4]=s.x,M[K+X+5]=s.y,M[K+X+6]=s.z,M[K+X+7]=0),v===!0&&(s.fromBufferAttribute(z,te),M[K+X+8]=s.x,M[K+X+9]=s.y,M[K+X+10]=s.z,M[K+X+11]=z.itemSize===4?s.w:1)}}d={count:f,texture:L,size:new je(S,C)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let v=0;v<c.length;v++)h+=c[v];const x=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function lM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Lp=new en,od=new Cp(1,1),Ip=new bp,Up=new P_,Np=new Ap,ad=[],ld=[],cd=new Float32Array(16),ud=new Float32Array(9),fd=new Float32Array(4);function ir(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ad[s];if(r===void 0&&(r=new Float32Array(s),ad[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ba(n,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function fM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function hM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;fd.set(i),n.uniformMatrix2fv(this.addr,!1,fd),Ot(t,i)}}function pM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;ud.set(i),n.uniformMatrix3fv(this.addr,!1,ud),Ot(t,i)}}function mM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;cd.set(i),n.uniformMatrix4fv(this.addr,!1,cd),Ot(t,i)}}function xM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function bM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function yM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function EM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(od.compareFunction=_p,r=od):r=Lp,t.setTexture2D(e||r,s)}function TM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Up,s)}function AM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Np,s)}function wM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ip,s)}function RM(n){switch(n){case 5126:return cM;case 35664:return uM;case 35665:return fM;case 35666:return dM;case 35674:return hM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return xM;case 35667:case 35671:return gM;case 35668:case 35672:return _M;case 35669:case 35673:return vM;case 5125:return bM;case 36294:return SM;case 36295:return MM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return wM}}function CM(n,e){n.uniform1fv(this.addr,e)}function PM(n,e){const t=ir(e,this.size,2);n.uniform2fv(this.addr,t)}function DM(n,e){const t=ir(e,this.size,3);n.uniform3fv(this.addr,t)}function LM(n,e){const t=ir(e,this.size,4);n.uniform4fv(this.addr,t)}function IM(n,e){const t=ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function UM(n,e){const t=ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function NM(n,e){const t=ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function FM(n,e){n.uniform1iv(this.addr,e)}function OM(n,e){n.uniform2iv(this.addr,e)}function BM(n,e){n.uniform3iv(this.addr,e)}function kM(n,e){n.uniform4iv(this.addr,e)}function zM(n,e){n.uniform1uiv(this.addr,e)}function VM(n,e){n.uniform2uiv(this.addr,e)}function HM(n,e){n.uniform3uiv(this.addr,e)}function GM(n,e){n.uniform4uiv(this.addr,e)}function WM(n,e,t){const i=this.cache,s=e.length,r=ba(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Lp,r[o])}function XM(n,e,t){const i=this.cache,s=e.length,r=ba(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Up,r[o])}function qM(n,e,t){const i=this.cache,s=e.length,r=ba(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Np,r[o])}function YM(n,e,t){const i=this.cache,s=e.length,r=ba(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ip,r[o])}function $M(n){switch(n){case 5126:return CM;case 35664:return PM;case 35665:return DM;case 35666:return LM;case 35674:return IM;case 35675:return UM;case 35676:return NM;case 5124:case 35670:return FM;case 35667:case 35671:return OM;case 35668:case 35672:return BM;case 35669:case 35673:return kM;case 5125:return zM;case 36294:return VM;case 36295:return HM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}class jM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RM(t.type)}}class KM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$M(t.type)}}class ZM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function dd(n,e){n.seq.push(e),n.map[e.id]=e}function JM(n,e,t){const i=n.name,s=i.length;for(pl.lastIndex=0;;){const r=pl.exec(i),o=pl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){dd(t,c===void 0?new jM(a,n,e):new KM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ZM(a),dd(t,f)),t=f}}}class Bo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);JM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function hd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const QM=37297;let ey=0;function ty(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const pd=new Je;function ny(n){rt._getMatrix(pd,rt.workingColorSpace,n);const e=`mat3( ${pd.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Ko:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function md(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ty(n.getShaderSource(e),a)}else return r}function iy(n,e){const t=ny(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sy(n,e){let t;switch(e){case n_:t="Linear";break;case i_:t="Reinhard";break;case s_:t="Cineon";break;case r_:t="ACESFilmic";break;case a_:t="AgX";break;case l_:t="Neutral";break;case o_:t="Custom";break;default:Ye("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const To=new j;function ry(){rt.getLuminanceCoefficients(To);const n=To.x.toFixed(4),e=To.y.toFixed(4),t=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function ay(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ly(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xr(n){return n!==""}function xd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(n){return n.replace(cy,fy)}const uy=new Map;function fy(n,e){let t=Qe[e];if(t===void 0){const i=uy.get(e);if(i!==void 0)t=Qe[i],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}const dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(n){return n.replace(dy,hy)}function hy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function py(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===lp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ng?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function my(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case _a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function gy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cp:e="ENVMAP_BLENDING_MULTIPLY";break;case e_:e="ENVMAP_BLENDING_MIX";break;case t_:e="ENVMAP_BLENDING_ADD";break}return e}function _y(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function vy(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=py(t),c=my(t),u=xy(t),f=gy(t),d=_y(t),h=oy(t),x=ay(r),v=s.createProgram();let m,p,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Hi?sy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,iy("linearToOutputTexel",t.outputColorSpace),ry(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),o=yc(o),o=xd(o,t),o=gd(o,t),a=yc(a),a=xd(a,t),a=gd(a,t),o=_d(o),a=_d(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=R+m+o,S=R+p+a,C=hd(s,s.VERTEX_SHADER,T),M=hd(s,s.FRAGMENT_SHADER,S);s.attachShader(v,C),s.attachShader(v,M),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(D){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(C)||"",K=s.getShaderInfoLog(M)||"",te=I.trim(),X=z.trim(),Q=K.trim();let H=!0,pe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,C,M);else{const me=md(s,C,"vertex"),ue=md(s,M,"fragment");Rt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+te+`
`+me+`
`+ue)}else te!==""?Ye("WebGLProgram: Program Info Log:",te):(X===""||Q==="")&&(pe=!1);pe&&(D.diagnostics={runnable:H,programLog:te,vertexShader:{log:X,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(C),s.deleteShader(M),O=new Bo(s,v),b=ly(s,v)}let O;this.getUniforms=function(){return O===void 0&&L(this),O};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,QM)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ey++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=M,this}let by=0;class Sy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new My(e),t.set(e,i)),i}}class My{constructor(e){this.id=by++,this.code=e,this.usedTimes=0}}function yy(n,e,t,i,s,r,o){const a=new nu,l=new Sy,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let h=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,_,D,I,z){const K=I.fog,te=z.geometry,X=b.isMeshStandardMaterial?I.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||X),H=Q&&Q.mapping===_a?Q.image.height:null,pe=x[b.type];b.precision!==null&&(h=s.getMaxPrecision(b.precision),h!==b.precision&&Ye("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const me=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ue=me!==void 0?me.length:0;let Se=0;te.morphAttributes.position!==void 0&&(Se=1),te.morphAttributes.normal!==void 0&&(Se=2),te.morphAttributes.color!==void 0&&(Se=3);let Be,Ue,De,Z;if(pe){const dt=Wn[pe];Be=dt.vertexShader,Ue=dt.fragmentShader}else Be=b.vertexShader,Ue=b.fragmentShader,l.update(b),De=l.getVertexShaderID(b),Z=l.getFragmentShaderID(b);const U=n.getRenderTarget(),ne=n.state.buffers.depth.getReversed(),ae=z.isInstancedMesh===!0,re=z.isBatchedMesh===!0,_e=!!b.map,w=!!b.matcap,P=!!Q,F=!!b.aoMap,E=!!b.lightMap,q=!!b.bumpMap,W=!!b.normalMap,ce=!!b.displacementMap,J=!!b.emissiveMap,le=!!b.metalnessMap,Y=!!b.roughnessMap,de=b.anisotropy>0,y=b.clearcoat>0,g=b.dispersion>0,B=b.iridescence>0,ee=b.sheen>0,oe=b.transmission>0,$=de&&!!b.anisotropyMap,we=y&&!!b.clearcoatMap,ge=y&&!!b.clearcoatNormalMap,Le=y&&!!b.clearcoatRoughnessMap,Ce=B&&!!b.iridescenceMap,he=B&&!!b.iridescenceThicknessMap,ve=ee&&!!b.sheenColorMap,Ie=ee&&!!b.sheenRoughnessMap,Ne=!!b.specularMap,Ae=!!b.specularColorMap,Ge=!!b.specularIntensityMap,k=oe&&!!b.transmissionMap,Te=oe&&!!b.thicknessMap,Me=!!b.gradientMap,ye=!!b.alphaMap,xe=b.alphaTest>0,fe=!!b.alphaHash,Fe=!!b.extensions;let $e=Hi;b.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&($e=n.toneMapping);const vt={shaderID:pe,shaderType:b.type,shaderName:b.name,vertexShader:Be,fragmentShader:Ue,defines:b.defines,customVertexShaderID:De,customFragmentShaderID:Z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:re,batchingColor:re&&z._colorsTexture!==null,instancing:ae,instancingColor:ae&&z.instanceColor!==null,instancingMorph:ae&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Js,alphaToCoverage:!!b.alphaToCoverage,map:_e,matcap:w,envMap:P,envMapMode:P&&Q.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:E,bumpMap:q,normalMap:W,displacementMap:d&&ce,emissiveMap:J,normalMapObjectSpace:W&&b.normalMapType===h_,normalMapTangentSpace:W&&b.normalMapType===d_,metalnessMap:le,roughnessMap:Y,anisotropy:de,anisotropyMap:$,clearcoat:y,clearcoatMap:we,clearcoatNormalMap:ge,clearcoatRoughnessMap:Le,dispersion:g,iridescence:B,iridescenceMap:Ce,iridescenceThicknessMap:he,sheen:ee,sheenColorMap:ve,sheenRoughnessMap:Ie,specularMap:Ne,specularColorMap:Ae,specularIntensityMap:Ge,transmission:oe,transmissionMap:k,thicknessMap:Te,gradientMap:Me,opaque:b.transparent===!1&&b.blending===Gs&&b.alphaToCoverage===!1,alphaMap:ye,alphaTest:xe,alphaHash:fe,combine:b.combine,mapUv:_e&&v(b.map.channel),aoMapUv:F&&v(b.aoMap.channel),lightMapUv:E&&v(b.lightMap.channel),bumpMapUv:q&&v(b.bumpMap.channel),normalMapUv:W&&v(b.normalMap.channel),displacementMapUv:ce&&v(b.displacementMap.channel),emissiveMapUv:J&&v(b.emissiveMap.channel),metalnessMapUv:le&&v(b.metalnessMap.channel),roughnessMapUv:Y&&v(b.roughnessMap.channel),anisotropyMapUv:$&&v(b.anisotropyMap.channel),clearcoatMapUv:we&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ge&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(b.sheenRoughnessMap.channel),specularMapUv:Ne&&v(b.specularMap.channel),specularColorMapUv:Ae&&v(b.specularColorMap.channel),specularIntensityMapUv:Ge&&v(b.specularIntensityMap.channel),transmissionMapUv:k&&v(b.transmissionMap.channel),thicknessMapUv:Te&&v(b.thicknessMap.channel),alphaMapUv:ye&&v(b.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(W||de),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!te.attributes.uv&&(_e||ye),fog:!!K,useFog:b.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ne,skinning:z.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Se,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:_e&&b.map.isVideoTexture===!0&&rt.getTransfer(b.map.colorSpace)===pt,decodeVideoTextureEmissive:J&&b.emissiveMap.isVideoTexture===!0&&rt.getTransfer(b.emissiveMap.colorSpace)===pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Xn,flipSided:b.side===ln,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Fe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&b.extensions.multiDraw===!0||re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function p(b){const _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)_.push(D),_.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(R(_,b),T(_,b),_.push(n.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function R(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function T(b,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){const _=x[b.type];let D;if(_){const I=Wn[_];D=G_.clone(I.uniforms)}else D=b.uniforms;return D}function C(b,_){let D;for(let I=0,z=u.length;I<z;I++){const K=u[I];if(K.cacheKey===_){D=K,++D.usedTimes;break}}return D===void 0&&(D=new vy(n,_,b,r),u.push(D)),D}function M(b){if(--b.usedTimes===0){const _=u.indexOf(b);u[_]=u[u.length-1],u.pop(),b.destroy()}}function L(b){l.remove(b)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:C,releaseProgram:M,releaseShaderCache:L,programs:u,dispose:O}}function Ey(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Ty(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,d,h,x,v,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:x,renderOrder:f.renderOrder,z:v,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=x,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,d,h,x,v,m){const p=o(f,d,h,x,v,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):t.push(p)}function l(f,d,h,x,v,m){const p=o(f,d,h,x,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||Ty),i.length>1&&i.sort(d||bd),s.length>1&&s.sort(d||bd)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Ay(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Sd,n.set(i,[o])):s>=r.length?(o=new Sd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function wy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new it};break;case"SpotLight":t={position:new j,direction:new j,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function Ry(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Cy=0;function Py(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Dy(n){const e=new wy,t=Ry(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const s=new j,r=new Ct,o=new Ct;function a(c){let u=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,x=0,v=0,m=0,p=0,R=0,T=0,S=0,C=0,M=0,L=0;c.sort(Py);for(let b=0,_=c.length;b<_;b++){const D=c[b],I=D.color,z=D.intensity,K=D.distance,te=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=I.r*z,f+=I.g*z,d+=I.b*z;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],z);L++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,H=t.get(D);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=te,i.directionalShadowMatrix[h]=D.shadow.matrix,R++}i.directional[h]=X,h++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(I).multiplyScalar(z),X.distance=K,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[v]=X;const Q=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,Q.updateMatrices(D),D.castShadow&&M++),i.spotLightMatrix[v]=Q.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=te,S++}v++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(I).multiplyScalar(z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=X,m++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const Q=D.shadow,H=t.get(D);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,i.pointShadow[x]=H,i.pointShadowMap[x]=te,i.pointShadowMatrix[x]=D.shadow.matrix,T++}i.point[x]=X,x++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(z),X.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==h||O.pointLength!==x||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==R||O.numPointShadows!==T||O.numSpotShadows!==S||O.numSpotMaps!==C||O.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+C-M,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=L,O.directionalLength=h,O.pointLength=x,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=R,O.numPointShadows=T,O.numSpotShadows=S,O.numSpotMaps=C,O.numLightProbes=L,i.version=Cy++)}function l(c,u){let f=0,d=0,h=0,x=0,v=0;const m=u.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){const T=c[p];if(T.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(T.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(T.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Md(n){const e=new Dy(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ly(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Md(n),e.set(s,[a])):r>=o.length?(a=new Md(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ny(n,e,t){let i=new wp;const s=new je,r=new je,o=new Pt,a=new sv({depthPacking:f_}),l=new rv,c={},u=t.maxTextureSize,f={[Xi]:ln,[ln]:Xi,[Xn]:Xn},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Iy,fragmentShader:Uy}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const x=new _n;x.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Jn(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lp;let p=this.type;this.render=function(M,L,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const b=n.getRenderTarget(),_=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),I=n.state;I.setBlending(xi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=p!==li&&this.type===li,K=p===li&&this.type!==li;for(let te=0,X=M.length;te<X;te++){const Q=M[te],H=Q.shadow;if(H===void 0){Ye("WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const pe=H.getFrameExtents();if(s.multiply(pe),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pe.x),s.x=r.x*pe.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pe.y),s.y=r.y*pe.y,H.mapSize.y=r.y)),H.map===null||z===!0||K===!0){const ue=this.type!==li?{minFilter:xn,magFilter:xn}:{};H.map!==null&&H.map.dispose(),H.map=new ms(s.x,s.y,ue),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const me=H.getViewportCount();for(let ue=0;ue<me;ue++){const Se=H.getViewport(ue);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),I.viewport(o),H.updateMatrices(Q,ue),i=H.getFrustum(),S(L,O,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===li&&R(H,O),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,_,D)};function R(M,L){const O=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,h.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ms(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(L,null,O,d,v,null),h.uniforms.shadow_pass.value=M.mapPass.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(L,null,O,h,v,null)}function T(M,L,O,b){let _=null;const D=O.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)_=D;else if(_=O.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const I=_.uuid,z=L.uuid;let K=c[I];K===void 0&&(K={},c[I]=K);let te=K[z];te===void 0&&(te=_.clone(),K[z]=te,L.addEventListener("dispose",C)),_=te}if(_.visible=L.visible,_.wireframe=L.wireframe,b===li?_.side=L.shadowSide!==null?L.shadowSide:L.side:_.side=L.shadowSide!==null?L.shadowSide:f[L.side],_.alphaMap=L.alphaMap,_.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,_.map=L.map,_.clipShadows=L.clipShadows,_.clippingPlanes=L.clippingPlanes,_.clipIntersection=L.clipIntersection,_.displacementMap=L.displacementMap,_.displacementScale=L.displacementScale,_.displacementBias=L.displacementBias,_.wireframeLinewidth=L.wireframeLinewidth,_.linewidth=L.linewidth,O.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const I=n.properties.get(_);I.light=O}return _}function S(M,L,O,b,_){if(M.visible===!1)return;if(M.layers.test(L.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&_===li)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld);const z=e.update(M),K=M.material;if(Array.isArray(K)){const te=z.groups;for(let X=0,Q=te.length;X<Q;X++){const H=te[X],pe=K[H.materialIndex];if(pe&&pe.visible){const me=T(M,pe,b,_);M.onBeforeShadow(n,M,L,O,z,me,H),n.renderBufferDirect(O,null,z,me,M,H),M.onAfterShadow(n,M,L,O,z,me,H)}}}else if(K.visible){const te=T(M,K,b,_);M.onBeforeShadow(n,M,L,O,z,te,null),n.renderBufferDirect(O,null,z,te,M,null),M.onAfterShadow(n,M,L,O,z,te,null)}}const I=M.children;for(let z=0,K=I.length;z<K;z++)S(I[z],L,O,b,_)}function C(M){M.target.removeEventListener("dispose",C);for(const O in c){const b=c[O],_=M.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}const Fy={[Nl]:Fl,[Ol]:zl,[Bl]:Vl,[js]:kl,[Fl]:Nl,[zl]:Ol,[Vl]:Bl,[kl]:js};function Oy(n,e){function t(){let k=!1;const Te=new Pt;let Me=null;const ye=new Pt(0,0,0,0);return{setMask:function(xe){Me!==xe&&!k&&(n.colorMask(xe,xe,xe,xe),Me=xe)},setLocked:function(xe){k=xe},setClear:function(xe,fe,Fe,$e,vt){vt===!0&&(xe*=$e,fe*=$e,Fe*=$e),Te.set(xe,fe,Fe,$e),ye.equals(Te)===!1&&(n.clearColor(xe,fe,Fe,$e),ye.copy(Te))},reset:function(){k=!1,Me=null,ye.set(-1,0,0,0)}}}function i(){let k=!1,Te=!1,Me=null,ye=null,xe=null;return{setReversed:function(fe){if(Te!==fe){const Fe=e.get("EXT_clip_control");fe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Te=fe;const $e=xe;xe=null,this.setClear($e)}},getReversed:function(){return Te},setTest:function(fe){fe?U(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(fe){Me!==fe&&!k&&(n.depthMask(fe),Me=fe)},setFunc:function(fe){if(Te&&(fe=Fy[fe]),ye!==fe){switch(fe){case Nl:n.depthFunc(n.NEVER);break;case Fl:n.depthFunc(n.ALWAYS);break;case Ol:n.depthFunc(n.LESS);break;case js:n.depthFunc(n.LEQUAL);break;case Bl:n.depthFunc(n.EQUAL);break;case kl:n.depthFunc(n.GEQUAL);break;case zl:n.depthFunc(n.GREATER);break;case Vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=fe}},setLocked:function(fe){k=fe},setClear:function(fe){xe!==fe&&(Te&&(fe=1-fe),n.clearDepth(fe),xe=fe)},reset:function(){k=!1,Me=null,ye=null,xe=null,Te=!1}}}function s(){let k=!1,Te=null,Me=null,ye=null,xe=null,fe=null,Fe=null,$e=null,vt=null;return{setTest:function(dt){k||(dt?U(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(dt){Te!==dt&&!k&&(n.stencilMask(dt),Te=dt)},setFunc:function(dt,zn,Rn){(Me!==dt||ye!==zn||xe!==Rn)&&(n.stencilFunc(dt,zn,Rn),Me=dt,ye=zn,xe=Rn)},setOp:function(dt,zn,Rn){(fe!==dt||Fe!==zn||$e!==Rn)&&(n.stencilOp(dt,zn,Rn),fe=dt,Fe=zn,$e=Rn)},setLocked:function(dt){k=dt},setClear:function(dt){vt!==dt&&(n.clearStencil(dt),vt=dt)},reset:function(){k=!1,Te=null,Me=null,ye=null,xe=null,fe=null,Fe=null,$e=null,vt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],x=null,v=!1,m=null,p=null,R=null,T=null,S=null,C=null,M=null,L=new it(0,0,0),O=0,b=!1,_=null,D=null,I=null,z=null,K=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=Q>=2);let pe=null,me={};const ue=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Be=new Pt().fromArray(ue),Ue=new Pt().fromArray(Se);function De(k,Te,Me,ye){const xe=new Uint8Array(4),fe=n.createTexture();n.bindTexture(k,fe),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<Me;Fe++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(Te+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return fe}const Z={};Z[n.TEXTURE_2D]=De(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=De(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=De(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=De(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(js),q(!1),W(_f),U(n.CULL_FACE),F(xi);function U(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function ne(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function ae(k,Te){return f[k]!==Te?(n.bindFramebuffer(k,Te),f[k]=Te,k===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Te),k===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function re(k,Te){let Me=h,ye=!1;if(k){Me=d.get(Te),Me===void 0&&(Me=[],d.set(Te,Me));const xe=k.textures;if(Me.length!==xe.length||Me[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,Fe=xe.length;fe<Fe;fe++)Me[fe]=n.COLOR_ATTACHMENT0+fe;Me.length=xe.length,ye=!0}}else Me[0]!==n.BACK&&(Me[0]=n.BACK,ye=!0);ye&&n.drawBuffers(Me)}function _e(k){return x!==k?(n.useProgram(k),x=k,!0):!1}const w={[as]:n.FUNC_ADD,[Og]:n.FUNC_SUBTRACT,[Bg]:n.FUNC_REVERSE_SUBTRACT};w[kg]=n.MIN,w[zg]=n.MAX;const P={[Vg]:n.ZERO,[Hg]:n.ONE,[Gg]:n.SRC_COLOR,[Il]:n.SRC_ALPHA,[jg]:n.SRC_ALPHA_SATURATE,[Yg]:n.DST_COLOR,[Xg]:n.DST_ALPHA,[Wg]:n.ONE_MINUS_SRC_COLOR,[Ul]:n.ONE_MINUS_SRC_ALPHA,[$g]:n.ONE_MINUS_DST_COLOR,[qg]:n.ONE_MINUS_DST_ALPHA,[Kg]:n.CONSTANT_COLOR,[Zg]:n.ONE_MINUS_CONSTANT_COLOR,[Jg]:n.CONSTANT_ALPHA,[Qg]:n.ONE_MINUS_CONSTANT_ALPHA};function F(k,Te,Me,ye,xe,fe,Fe,$e,vt,dt){if(k===xi){v===!0&&(ne(n.BLEND),v=!1);return}if(v===!1&&(U(n.BLEND),v=!0),k!==Fg){if(k!==m||dt!==b){if((p!==as||S!==as)&&(n.blendEquation(n.FUNC_ADD),p=as,S=as),dt)switch(k){case Gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vf:n.blendFunc(n.ONE,n.ONE);break;case bf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Rt("WebGLState: Invalid blending: ",k);break}else switch(k){case Gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bf:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sf:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",k);break}R=null,T=null,C=null,M=null,L.set(0,0,0),O=0,m=k,b=dt}return}xe=xe||Te,fe=fe||Me,Fe=Fe||ye,(Te!==p||xe!==S)&&(n.blendEquationSeparate(w[Te],w[xe]),p=Te,S=xe),(Me!==R||ye!==T||fe!==C||Fe!==M)&&(n.blendFuncSeparate(P[Me],P[ye],P[fe],P[Fe]),R=Me,T=ye,C=fe,M=Fe),($e.equals(L)===!1||vt!==O)&&(n.blendColor($e.r,$e.g,$e.b,vt),L.copy($e),O=vt),m=k,b=!1}function E(k,Te){k.side===Xn?ne(n.CULL_FACE):U(n.CULL_FACE);let Me=k.side===ln;Te&&(Me=!Me),q(Me),k.blending===Gs&&k.transparent===!1?F(xi):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const ye=k.stencilWrite;a.setTest(ye),ye&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),J(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(k){_!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),_=k)}function W(k){k!==Ig?(U(n.CULL_FACE),k!==D&&(k===_f?n.cullFace(n.BACK):k===Ug?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),D=k}function ce(k){k!==I&&(X&&n.lineWidth(k),I=k)}function J(k,Te,Me){k?(U(n.POLYGON_OFFSET_FILL),(z!==Te||K!==Me)&&(n.polygonOffset(Te,Me),z=Te,K=Me)):ne(n.POLYGON_OFFSET_FILL)}function le(k){k?U(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function Y(k){k===void 0&&(k=n.TEXTURE0+te-1),pe!==k&&(n.activeTexture(k),pe=k)}function de(k,Te,Me){Me===void 0&&(pe===null?Me=n.TEXTURE0+te-1:Me=pe);let ye=me[Me];ye===void 0&&(ye={type:void 0,texture:void 0},me[Me]=ye),(ye.type!==k||ye.texture!==Te)&&(pe!==Me&&(n.activeTexture(Me),pe=Me),n.bindTexture(k,Te||Z[k]),ye.type=k,ye.texture=Te)}function y(){const k=me[pe];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ee(){try{n.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function oe(){try{n.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ge(){try{n.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Le(){try{n.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Ce(){try{n.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function he(){try{n.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ve(k){Be.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Be.copy(k))}function Ie(k){Ue.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Ue.copy(k))}function Ne(k,Te){let Me=c.get(Te);Me===void 0&&(Me=new WeakMap,c.set(Te,Me));let ye=Me.get(k);ye===void 0&&(ye=n.getUniformBlockIndex(Te,k.name),Me.set(k,ye))}function Ae(k,Te){const ye=c.get(Te).get(k);l.get(Te)!==ye&&(n.uniformBlockBinding(Te,ye,k.__bindingPointIndex),l.set(Te,ye))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},pe=null,me={},f={},d=new WeakMap,h=[],x=null,v=!1,m=null,p=null,R=null,T=null,S=null,C=null,M=null,L=new it(0,0,0),O=0,b=!1,_=null,D=null,I=null,z=null,K=null,Be.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:ne,bindFramebuffer:ae,drawBuffers:re,useProgram:_e,setBlending:F,setMaterial:E,setFlipSided:q,setCullFace:W,setLineWidth:ce,setPolygonOffset:J,setScissorTest:le,activeTexture:Y,bindTexture:de,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:B,texImage2D:Ce,texImage3D:he,updateUBOMapping:Ne,uniformBlockBinding:Ae,texStorage2D:ge,texStorage3D:Le,texSubImage2D:ee,texSubImage3D:oe,compressedTexSubImage2D:$,compressedTexSubImage3D:we,scissor:ve,viewport:Ie,reset:Ge}}function By(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(y,g){return h?new OffscreenCanvas(y,g):Jo("canvas")}function v(y,g,B){let ee=1;const oe=de(y);if((oe.width>B||oe.height>B)&&(ee=B/Math.max(oe.width,oe.height)),ee<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const $=Math.floor(ee*oe.width),we=Math.floor(ee*oe.height);f===void 0&&(f=x($,we));const ge=g?x($,we):f;return ge.width=$,ge.height=we,ge.getContext("2d").drawImage(y,0,0,$,we),Ye("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+$+"x"+we+")."),ge}else return"data"in y&&Ye("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){n.generateMipmap(y)}function R(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(y,g,B,ee,oe=!1){if(y!==null){if(n[y]!==void 0)return n[y];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let $=g;if(g===n.RED&&(B===n.FLOAT&&($=n.R32F),B===n.HALF_FLOAT&&($=n.R16F),B===n.UNSIGNED_BYTE&&($=n.R8)),g===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.R8UI),B===n.UNSIGNED_SHORT&&($=n.R16UI),B===n.UNSIGNED_INT&&($=n.R32UI),B===n.BYTE&&($=n.R8I),B===n.SHORT&&($=n.R16I),B===n.INT&&($=n.R32I)),g===n.RG&&(B===n.FLOAT&&($=n.RG32F),B===n.HALF_FLOAT&&($=n.RG16F),B===n.UNSIGNED_BYTE&&($=n.RG8)),g===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RG8UI),B===n.UNSIGNED_SHORT&&($=n.RG16UI),B===n.UNSIGNED_INT&&($=n.RG32UI),B===n.BYTE&&($=n.RG8I),B===n.SHORT&&($=n.RG16I),B===n.INT&&($=n.RG32I)),g===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGB8UI),B===n.UNSIGNED_SHORT&&($=n.RGB16UI),B===n.UNSIGNED_INT&&($=n.RGB32UI),B===n.BYTE&&($=n.RGB8I),B===n.SHORT&&($=n.RGB16I),B===n.INT&&($=n.RGB32I)),g===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGBA8UI),B===n.UNSIGNED_SHORT&&($=n.RGBA16UI),B===n.UNSIGNED_INT&&($=n.RGBA32UI),B===n.BYTE&&($=n.RGBA8I),B===n.SHORT&&($=n.RGBA16I),B===n.INT&&($=n.RGBA32I)),g===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),g===n.RGBA){const we=oe?Ko:rt.getTransfer(ee);B===n.FLOAT&&($=n.RGBA32F),B===n.HALF_FLOAT&&($=n.RGBA16F),B===n.UNSIGNED_BYTE&&($=we===pt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(y,g){let B;return y?g===null||g===hs||g===Nr?B=n.DEPTH24_STENCIL8:g===mi?B=n.DEPTH32F_STENCIL8:g===Ur&&(B=n.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===hs||g===Nr?B=n.DEPTH_COMPONENT24:g===mi?B=n.DEPTH_COMPONENT32F:g===Ur&&(B=n.DEPTH_COMPONENT16),B}function C(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==xn&&y.minFilter!==An?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function M(y){const g=y.target;g.removeEventListener("dispose",M),O(g),g.isVideoTexture&&u.delete(g)}function L(y){const g=y.target;g.removeEventListener("dispose",L),_(g)}function O(y){const g=i.get(y);if(g.__webglInit===void 0)return;const B=y.source,ee=d.get(B);if(ee){const oe=ee[g.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(y),Object.keys(ee).length===0&&d.delete(B)}i.remove(y)}function b(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const B=y.source,ee=d.get(B);delete ee[g.__cacheKey],o.memory.textures--}function _(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(g.__webglFramebuffer[ee]))for(let oe=0;oe<g.__webglFramebuffer[ee].length;oe++)n.deleteFramebuffer(g.__webglFramebuffer[ee][oe]);else n.deleteFramebuffer(g.__webglFramebuffer[ee]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[ee])}else{if(Array.isArray(g.__webglFramebuffer))for(let ee=0;ee<g.__webglFramebuffer.length;ee++)n.deleteFramebuffer(g.__webglFramebuffer[ee]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let ee=0;ee<g.__webglColorRenderbuffer.length;ee++)g.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[ee]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=y.textures;for(let ee=0,oe=B.length;ee<oe;ee++){const $=i.get(B[ee]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(B[ee])}i.remove(y)}let D=0;function I(){D=0}function z(){const y=D;return y>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),D+=1,y}function K(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function te(y,g){const B=i.get(y);if(y.isVideoTexture&&le(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&B.__version!==y.version){const ee=y.image;if(ee===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,y,g);return}}else y.isExternalTexture&&(B.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+g)}function X(y,g){const B=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){Z(B,y,g);return}else y.isExternalTexture&&(B.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+g)}function Q(y,g){const B=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){Z(B,y,g);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+g)}function H(y,g){const B=i.get(y);if(y.version>0&&B.__version!==y.version){U(B,y,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+g)}const pe={[Wl]:n.REPEAT,[pi]:n.CLAMP_TO_EDGE,[Xl]:n.MIRRORED_REPEAT},me={[xn]:n.NEAREST,[c_]:n.NEAREST_MIPMAP_NEAREST,[eo]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[ka]:n.LINEAR_MIPMAP_NEAREST,[us]:n.LINEAR_MIPMAP_LINEAR},ue={[p_]:n.NEVER,[b_]:n.ALWAYS,[m_]:n.LESS,[_p]:n.LEQUAL,[x_]:n.EQUAL,[v_]:n.GEQUAL,[g_]:n.GREATER,[__]:n.NOTEQUAL};function Se(y,g){if(g.type===mi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===An||g.magFilter===ka||g.magFilter===eo||g.magFilter===us||g.minFilter===An||g.minFilter===ka||g.minFilter===eo||g.minFilter===us)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,pe[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,pe[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,pe[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,me[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,me[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,ue[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===xn||g.minFilter!==eo&&g.minFilter!==us||g.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Be(y,g){let B=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",M));const ee=g.source;let oe=d.get(ee);oe===void 0&&(oe={},d.set(ee,oe));const $=K(g);if($!==y.__cacheKey){oe[$]===void 0&&(oe[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),oe[$].usedTimes++;const we=oe[y.__cacheKey];we!==void 0&&(oe[y.__cacheKey].usedTimes--,we.usedTimes===0&&b(g)),y.__cacheKey=$,y.__webglTexture=oe[$].texture}return B}function Ue(y,g,B){return Math.floor(Math.floor(y/B)/g)}function De(y,g,B,ee){const $=y.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,B,ee,g.data);else{$.sort((he,ve)=>he.start-ve.start);let we=0;for(let he=1;he<$.length;he++){const ve=$[we],Ie=$[he],Ne=ve.start+ve.count,Ae=Ue(Ie.start,g.width,4),Ge=Ue(ve.start,g.width,4);Ie.start<=Ne+1&&Ae===Ge&&Ue(Ie.start+Ie.count-1,g.width,4)===Ae?ve.count=Math.max(ve.count,Ie.start+Ie.count-ve.start):(++we,$[we]=Ie)}$.length=we+1;const ge=n.getParameter(n.UNPACK_ROW_LENGTH),Le=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let he=0,ve=$.length;he<ve;he++){const Ie=$[he],Ne=Math.floor(Ie.start/4),Ae=Math.ceil(Ie.count/4),Ge=Ne%g.width,k=Math.floor(Ne/g.width),Te=Ae,Me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,Ge,k,Te,Me,B,ee,g.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ge),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function Z(y,g,B){let ee=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(ee=n.TEXTURE_3D);const oe=Be(y,g),$=g.source;t.bindTexture(ee,y.__webglTexture,n.TEXTURE0+B);const we=i.get($);if($.version!==we.__version||oe===!0){t.activeTexture(n.TEXTURE0+B);const ge=rt.getPrimaries(rt.workingColorSpace),Le=g.colorSpace===ki?null:rt.getPrimaries(g.colorSpace),Ce=g.colorSpace===ki||ge===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let he=v(g.image,!1,s.maxTextureSize);he=Y(g,he);const ve=r.convert(g.format,g.colorSpace),Ie=r.convert(g.type);let Ne=T(g.internalFormat,ve,Ie,g.colorSpace,g.isVideoTexture);Se(ee,g);let Ae;const Ge=g.mipmaps,k=g.isVideoTexture!==!0,Te=we.__version===void 0||oe===!0,Me=$.dataReady,ye=C(g,he);if(g.isDepthTexture)Ne=S(g.format===Or,g.type),Te&&(k?t.texStorage2D(n.TEXTURE_2D,1,Ne,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Ne,he.width,he.height,0,ve,Ie,null));else if(g.isDataTexture)if(Ge.length>0){k&&Te&&t.texStorage2D(n.TEXTURE_2D,ye,Ne,Ge[0].width,Ge[0].height);for(let xe=0,fe=Ge.length;xe<fe;xe++)Ae=Ge[xe],k?Me&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,ve,Ie,Ae.data):t.texImage2D(n.TEXTURE_2D,xe,Ne,Ae.width,Ae.height,0,ve,Ie,Ae.data);g.generateMipmaps=!1}else k?(Te&&t.texStorage2D(n.TEXTURE_2D,ye,Ne,he.width,he.height),Me&&De(g,he,ve,Ie)):t.texImage2D(n.TEXTURE_2D,0,Ne,he.width,he.height,0,ve,Ie,he.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){k&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ne,Ge[0].width,Ge[0].height,he.depth);for(let xe=0,fe=Ge.length;xe<fe;xe++)if(Ae=Ge[xe],g.format!==Un)if(ve!==null)if(k){if(Me)if(g.layerUpdates.size>0){const Fe=Qf(Ae.width,Ae.height,g.format,g.type);for(const $e of g.layerUpdates){const vt=Ae.data.subarray($e*Fe/Ae.data.BYTES_PER_ELEMENT,($e+1)*Fe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,$e,Ae.width,Ae.height,1,ve,vt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ae.width,Ae.height,he.depth,ve,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Ne,Ae.width,Ae.height,he.depth,0,Ae.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ae.width,Ae.height,he.depth,ve,Ie,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Ne,Ae.width,Ae.height,he.depth,0,ve,Ie,Ae.data)}else{k&&Te&&t.texStorage2D(n.TEXTURE_2D,ye,Ne,Ge[0].width,Ge[0].height);for(let xe=0,fe=Ge.length;xe<fe;xe++)Ae=Ge[xe],g.format!==Un?ve!==null?k?Me&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,ve,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Ne,Ae.width,Ae.height,0,Ae.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Me&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,ve,Ie,Ae.data):t.texImage2D(n.TEXTURE_2D,xe,Ne,Ae.width,Ae.height,0,ve,Ie,Ae.data)}else if(g.isDataArrayTexture)if(k){if(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ne,he.width,he.height,he.depth),Me)if(g.layerUpdates.size>0){const xe=Qf(he.width,he.height,g.format,g.type);for(const fe of g.layerUpdates){const Fe=he.data.subarray(fe*xe/he.data.BYTES_PER_ELEMENT,(fe+1)*xe/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,he.width,he.height,1,ve,Ie,Fe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ve,Ie,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,he.width,he.height,he.depth,0,ve,Ie,he.data);else if(g.isData3DTexture)k?(Te&&t.texStorage3D(n.TEXTURE_3D,ye,Ne,he.width,he.height,he.depth),Me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ve,Ie,he.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,he.width,he.height,he.depth,0,ve,Ie,he.data);else if(g.isFramebufferTexture){if(Te)if(k)t.texStorage2D(n.TEXTURE_2D,ye,Ne,he.width,he.height);else{let xe=he.width,fe=he.height;for(let Fe=0;Fe<ye;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Ne,xe,fe,0,ve,Ie,null),xe>>=1,fe>>=1}}else if(Ge.length>0){if(k&&Te){const xe=de(Ge[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ne,xe.width,xe.height)}for(let xe=0,fe=Ge.length;xe<fe;xe++)Ae=Ge[xe],k?Me&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,ve,Ie,Ae):t.texImage2D(n.TEXTURE_2D,xe,Ne,ve,Ie,Ae);g.generateMipmaps=!1}else if(k){if(Te){const xe=de(he);t.texStorage2D(n.TEXTURE_2D,ye,Ne,xe.width,xe.height)}Me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ie,he)}else t.texImage2D(n.TEXTURE_2D,0,Ne,ve,Ie,he);m(g)&&p(ee),we.__version=$.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function U(y,g,B){if(g.image.length!==6)return;const ee=Be(y,g),oe=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+B);const $=i.get(oe);if(oe.version!==$.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);const we=rt.getPrimaries(rt.workingColorSpace),ge=g.colorSpace===ki?null:rt.getPrimaries(g.colorSpace),Le=g.colorSpace===ki||we===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ce=g.isCompressedTexture||g.image[0].isCompressedTexture,he=g.image[0]&&g.image[0].isDataTexture,ve=[];for(let fe=0;fe<6;fe++)!Ce&&!he?ve[fe]=v(g.image[fe],!0,s.maxCubemapSize):ve[fe]=he?g.image[fe].image:g.image[fe],ve[fe]=Y(g,ve[fe]);const Ie=ve[0],Ne=r.convert(g.format,g.colorSpace),Ae=r.convert(g.type),Ge=T(g.internalFormat,Ne,Ae,g.colorSpace),k=g.isVideoTexture!==!0,Te=$.__version===void 0||ee===!0,Me=oe.dataReady;let ye=C(g,Ie);Se(n.TEXTURE_CUBE_MAP,g);let xe;if(Ce){k&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ge,Ie.width,Ie.height);for(let fe=0;fe<6;fe++){xe=ve[fe].mipmaps;for(let Fe=0;Fe<xe.length;Fe++){const $e=xe[Fe];g.format!==Un?Ne!==null?k?Me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,0,0,$e.width,$e.height,Ne,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,Ge,$e.width,$e.height,0,$e.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,0,0,$e.width,$e.height,Ne,Ae,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe,Ge,$e.width,$e.height,0,Ne,Ae,$e.data)}}}else{if(xe=g.mipmaps,k&&Te){xe.length>0&&ye++;const fe=de(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Ge,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(he){k?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ve[fe].width,ve[fe].height,Ne,Ae,ve[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ge,ve[fe].width,ve[fe].height,0,Ne,Ae,ve[fe].data);for(let Fe=0;Fe<xe.length;Fe++){const vt=xe[Fe].image[fe].image;k?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,0,0,vt.width,vt.height,Ne,Ae,vt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,Ge,vt.width,vt.height,0,Ne,Ae,vt.data)}}else{k?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ne,Ae,ve[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ge,Ne,Ae,ve[fe]);for(let Fe=0;Fe<xe.length;Fe++){const $e=xe[Fe];k?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,0,0,Ne,Ae,$e.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Fe+1,Ge,Ne,Ae,$e.image[fe])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),$.__version=oe.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ne(y,g,B,ee,oe,$){const we=r.convert(B.format,B.colorSpace),ge=r.convert(B.type),Le=T(B.internalFormat,we,ge,B.colorSpace),Ce=i.get(g),he=i.get(B);if(he.__renderTarget=g,!Ce.__hasExternalTextures){const ve=Math.max(1,g.width>>$),Ie=Math.max(1,g.height>>$);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,$,Le,ve,Ie,g.depth,0,we,ge,null):t.texImage2D(oe,$,Le,ve,Ie,0,we,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),J(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,oe,he.__webglTexture,0,ce(g)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,oe,he.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(y,g,B){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer){const ee=g.depthTexture,oe=ee&&ee.isDepthTexture?ee.type:null,$=S(g.stencilBuffer,oe),we=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=ce(g);J(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,$,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,$,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,$,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,y)}else{const ee=g.textures;for(let oe=0;oe<ee.length;oe++){const $=ee[oe],we=r.convert($.format,$.colorSpace),ge=r.convert($.type),Le=T($.internalFormat,we,ge,$.colorSpace),Ce=ce(g);B&&J(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Le,g.width,g.height):J(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,Le,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Le,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(g.depthTexture);ee.__renderTarget=g,(!ee.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),te(g.depthTexture,0);const oe=ee.__webglTexture,$=ce(g);if(g.depthTexture.format===Fr)J(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(g.depthTexture.format===Or)J(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function _e(y){const g=i.get(y),B=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const ee=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),ee){const oe=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,ee.removeEventListener("dispose",oe)};ee.addEventListener("dispose",oe),g.__depthDisposeCallback=oe}g.__boundDepthTexture=ee}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const ee=y.texture.mipmaps;ee&&ee.length>0?re(g.__webglFramebuffer[0],y):re(g.__webglFramebuffer,y)}else if(B){g.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[ee]),g.__webglDepthbuffer[ee]===void 0)g.__webglDepthbuffer[ee]=n.createRenderbuffer(),ae(g.__webglDepthbuffer[ee],y,!1);else{const oe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,$)}}else{const ee=y.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),ae(g.__webglDepthbuffer,y,!1);else{const oe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(y,g,B){const ee=i.get(y);g!==void 0&&ne(ee.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&_e(y)}function P(y){const g=y.texture,B=i.get(y),ee=i.get(g);y.addEventListener("dispose",L);const oe=y.textures,$=y.isWebGLCubeRenderTarget===!0,we=oe.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=g.version,o.memory.textures++),$){B.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[ge]=[];for(let Le=0;Le<g.mipmaps.length;Le++)B.__webglFramebuffer[ge][Le]=n.createFramebuffer()}else B.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let ge=0;ge<g.mipmaps.length;ge++)B.__webglFramebuffer[ge]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(we)for(let ge=0,Le=oe.length;ge<Le;ge++){const Ce=i.get(oe[ge]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&J(y)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ge=0;ge<oe.length;ge++){const Le=oe[ge];B.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ge]);const Ce=r.convert(Le.format,Le.colorSpace),he=r.convert(Le.type),ve=T(Le.internalFormat,Ce,he,Le.colorSpace,y.isXRRenderTarget===!0),Ie=ce(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,ve,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,B.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(B.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Se(n.TEXTURE_CUBE_MAP,g);for(let ge=0;ge<6;ge++)if(g.mipmaps&&g.mipmaps.length>0)for(let Le=0;Le<g.mipmaps.length;Le++)ne(B.__webglFramebuffer[ge][Le],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le);else ne(B.__webglFramebuffer[ge],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(g)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ge=0,Le=oe.length;ge<Le;ge++){const Ce=oe[ge],he=i.get(Ce);let ve=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ve=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,he.__webglTexture),Se(ve,Ce),ne(B.__webglFramebuffer,y,Ce,n.COLOR_ATTACHMENT0+ge,ve,0),m(Ce)&&p(ve)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ge=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,ee.__webglTexture),Se(ge,g),g.mipmaps&&g.mipmaps.length>0)for(let Le=0;Le<g.mipmaps.length;Le++)ne(B.__webglFramebuffer[Le],y,g,n.COLOR_ATTACHMENT0,ge,Le);else ne(B.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,ge,0);m(g)&&p(ge),t.unbindTexture()}y.depthBuffer&&_e(y)}function F(y){const g=y.textures;for(let B=0,ee=g.length;B<ee;B++){const oe=g[B];if(m(oe)){const $=R(y),we=i.get(oe).__webglTexture;t.bindTexture($,we),p($),t.unbindTexture()}}}const E=[],q=[];function W(y){if(y.samples>0){if(J(y)===!1){const g=y.textures,B=y.width,ee=y.height;let oe=n.COLOR_BUFFER_BIT;const $=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(y),ge=g.length>1;if(ge)for(let Ce=0;Ce<g.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Le=y.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ce=0;Ce<g.length;Ce++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const he=i.get(g[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,B,ee,0,0,B,ee,oe,n.NEAREST),l===!0&&(E.length=0,q.length=0,E.push(n.COLOR_ATTACHMENT0+Ce),y.depthBuffer&&y.resolveDepthBuffer===!1&&(E.push($),q.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,E))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ce=0;Ce<g.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const he=i.get(g[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function ce(y){return Math.min(s.maxSamples,y.samples)}function J(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function le(y){const g=o.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function Y(y,g){const B=y.colorSpace,ee=y.format,oe=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||B!==Js&&B!==ki&&(rt.getTransfer(B)===pt?(ee!==Un||oe!==Mi)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",B)),g}function de(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=te,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=w,this.setupRenderTarget=P,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=J}function ky(n,e){function t(i,s=ki){let r;const o=rt.getTransfer(s);if(i===Mi)return n.UNSIGNED_BYTE;if(i===jc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===fp)return n.BYTE;if(i===dp)return n.SHORT;if(i===Ur)return n.UNSIGNED_SHORT;if(i===$c)return n.INT;if(i===hs)return n.UNSIGNED_INT;if(i===mi)return n.FLOAT;if(i===er)return n.HALF_FLOAT;if(i===mp)return n.ALPHA;if(i===xp)return n.RGB;if(i===Un)return n.RGBA;if(i===Fr)return n.DEPTH_COMPONENT;if(i===Or)return n.DEPTH_STENCIL;if(i===gp)return n.RED;if(i===Zc)return n.RED_INTEGER;if(i===Jc)return n.RG;if(i===Qc)return n.RG_INTEGER;if(i===eu)return n.RGBA_INTEGER;if(i===Io||i===Uo||i===No||i===Fo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ql||i===Yl||i===$l||i===jl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kl||i===Zl||i===Jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Kl||i===Zl)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Jl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc||i===fc||i===dc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ql)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ec)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ic)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ac)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hc||i===pc||i===mc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===hc)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xc||i===gc||i===_c||i===vc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===xc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Pp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new kn({vertexShader:zy,fragmentShader:Vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jn(new Yr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gy extends gs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,x=null;const v=typeof XRWebGLBinding<"u",m=new Hy,p={},R=t.getContextAttributes();let T=null,S=null;const C=[],M=[],L=new je;let O=null;const b=new En;b.viewport=new Pt;const _=new En;_.viewport=new Pt;const D=[b,_],I=new av;let z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let U=C[Z];return U===void 0&&(U=new al,C[Z]=U),U.getTargetRaySpace()},this.getControllerGrip=function(Z){let U=C[Z];return U===void 0&&(U=new al,C[Z]=U),U.getGripSpace()},this.getHand=function(Z){let U=C[Z];return U===void 0&&(U=new al,C[Z]=U),U.getHandSpace()};function te(Z){const U=M.indexOf(Z.inputSource);if(U===-1)return;const ne=C[U];ne!==void 0&&(ne.update(Z.inputSource,Z.frame,c||o),ne.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<C.length;Z++){const U=M[Z];U!==null&&(M[Z]=null,C[Z].disconnect(U))}z=null,K=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(T),h=null,d=null,f=null,s=null,S=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Q),R.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ae=null,re=null;R.depth&&(re=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=R.stencil?Or:Fr,ae=R.stencil?Nr:hs);const _e={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(_e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new ms(d.textureWidth,d.textureHeight,{format:Un,type:Mi,depthTexture:new Cp(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ne={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new ms(h.framebufferWidth,h.framebufferHeight,{format:Un,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),De.setContext(s),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(Z){for(let U=0;U<Z.removed.length;U++){const ne=Z.removed[U],ae=M.indexOf(ne);ae>=0&&(M[ae]=null,C[ae].disconnect(ne))}for(let U=0;U<Z.added.length;U++){const ne=Z.added[U];let ae=M.indexOf(ne);if(ae===-1){for(let _e=0;_e<C.length;_e++)if(_e>=M.length){M.push(ne),ae=_e;break}else if(M[_e]===null){M[_e]=ne,ae=_e;break}if(ae===-1)break}const re=C[ae];re&&re.connect(ne)}}const H=new j,pe=new j;function me(Z,U,ne){H.setFromMatrixPosition(U.matrixWorld),pe.setFromMatrixPosition(ne.matrixWorld);const ae=H.distanceTo(pe),re=U.projectionMatrix.elements,_e=ne.projectionMatrix.elements,w=re[14]/(re[10]-1),P=re[14]/(re[10]+1),F=(re[9]+1)/re[5],E=(re[9]-1)/re[5],q=(re[8]-1)/re[0],W=(_e[8]+1)/_e[0],ce=w*q,J=w*W,le=ae/(-q+W),Y=le*-q;if(U.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Y),Z.translateZ(le),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),re[10]===-1)Z.projectionMatrix.copy(U.projectionMatrix),Z.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const de=w+le,y=P+le,g=ce-Y,B=J+(ae-Y),ee=F*P/y*de,oe=E*P/y*de;Z.projectionMatrix.makePerspective(g,B,ee,oe,de,y),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ue(Z,U){U===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(U.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let U=Z.near,ne=Z.far;m.texture!==null&&(m.depthNear>0&&(U=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),I.near=_.near=b.near=U,I.far=_.far=b.far=ne,(z!==I.near||K!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,K=I.far),I.layers.mask=Z.layers.mask|6,b.layers.mask=I.layers.mask&3,_.layers.mask=I.layers.mask&5;const ae=Z.parent,re=I.cameras;ue(I,ae);for(let _e=0;_e<re.length;_e++)ue(re[_e],ae);re.length===2?me(I,b,_):I.projectionMatrix.copy(b.projectionMatrix),Se(Z,I,ae)};function Se(Z,U,ne){ne===null?Z.matrix.copy(U.matrixWorld):(Z.matrix.copy(ne.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(U.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(U.projectionMatrix),Z.projectionMatrixInverse.copy(U.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=bc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Z){return p[Z]};let Be=null;function Ue(Z,U){if(u=U.getViewerPose(c||o),x=U,u!==null){const ne=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let ae=!1;ne.length!==I.cameras.length&&(I.cameras.length=0,ae=!0);for(let P=0;P<ne.length;P++){const F=ne[P];let E=null;if(h!==null)E=h.getViewport(F);else{const W=f.getViewSubImage(d,F);E=W.viewport,P===0&&(e.setRenderTargetTextures(S,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(S))}let q=D[P];q===void 0&&(q=new En,q.layers.enable(P),q.viewport=new Pt,D[P]=q),q.matrix.fromArray(F.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(F.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(E.x,E.y,E.width,E.height),P===0&&(I.matrix.copy(q.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ae===!0&&I.cameras.push(q)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const P=f.getDepthInformation(ne[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(re&&re.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let P=0;P<ne.length;P++){const F=ne[P].camera;if(F){let E=p[F];E||(E=new Pp,p[F]=E);const q=f.getCameraImage(F);E.sourceTexture=q}}}}for(let ne=0;ne<C.length;ne++){const ae=M[ne],re=C[ne];ae!==null&&re!==void 0&&re.update(ae,U,c||o)}Be&&Be(Z,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),x=null}const De=new Dp;De.setAnimationLoop(Ue),this.setAnimationLoop=function(Z){Be=Z},this.dispose=function(){}}}const is=new yi,Wy=new Ct;function Xy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ep(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,R,T,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,R,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const R=e.get(p),T=R.envMap,S=R.envMapRotation;T&&(m.envMap.value=T,is.copy(S),is.x*=-1,is.y*=-1,is.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(Wy.makeRotationFromEuler(is)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,R,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,R){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const R=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qy(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,T){const S=T.program;i.uniformBlockBinding(R,S)}function c(R,T){let S=s[R.id];S===void 0&&(x(R),S=u(R),s[R.id]=S,R.addEventListener("dispose",m));const C=T.program;i.updateUBOMapping(R,C);const M=e.render.frame;r[R.id]!==M&&(d(R),r[R.id]=M)}function u(R){const T=f();R.__bindingPointIndex=T;const S=n.createBuffer(),C=R.__size,M=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function f(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const T=s[R.id],S=R.uniforms,C=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let M=0,L=S.length;M<L;M++){const O=Array.isArray(S[M])?S[M]:[S[M]];for(let b=0,_=O.length;b<_;b++){const D=O[b];if(h(D,M,b,C)===!0){const I=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let te=0;te<z.length;te++){const X=z[te],Q=v(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,I+K,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,K),K+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(R,T,S,C){const M=R.value,L=T+"_"+S;if(C[L]===void 0)return typeof M=="number"||typeof M=="boolean"?C[L]=M:C[L]=M.clone(),!0;{const O=C[L];if(typeof M=="number"||typeof M=="boolean"){if(O!==M)return C[L]=M,!0}else if(O.equals(M)===!1)return O.copy(M),!0}return!1}function x(R){const T=R.uniforms;let S=0;const C=16;for(let L=0,O=T.length;L<O;L++){const b=Array.isArray(T[L])?T[L]:[T[L]];for(let _=0,D=b.length;_<D;_++){const I=b[_],z=Array.isArray(I.value)?I.value:[I.value];for(let K=0,te=z.length;K<te;K++){const X=z[K],Q=v(X),H=S%C,pe=H%Q.boundary,me=H+pe;S+=pe,me!==0&&C-me<Q.storage&&(S+=C-me),I.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=Q.storage}}}const M=S%C;return M>0&&(S+=C-M),R.__size=S,R.__cache={},this}function v(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",R),T}function m(R){const T=R.target;T.removeEventListener("dispose",m);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(const R in s)n.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const Yy=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ai=null;function $y(){return ai===null&&(ai=new K_(Yy,32,32,Jc,er),ai.minFilter=An,ai.magFilter=An,ai.wrapS=pi,ai.wrapT=pi,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class jy{constructor(e={}){const{canvas:t=S_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const x=new Set([eu,Qc,Zc]),v=new Set([Mi,hs,Ur,Nr,jc,Kc]),m=new Uint32Array(4),p=new Int32Array(4);let R=null,T=null;const S=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let L=!1;this._outputColorSpace=yn;let O=0,b=0,_=null,D=-1,I=null;const z=new Pt,K=new Pt;let te=null;const X=new it(0);let Q=0,H=t.width,pe=t.height,me=1,ue=null,Se=null;const Be=new Pt(0,0,H,pe),Ue=new Pt(0,0,H,pe);let De=!1;const Z=new wp;let U=!1,ne=!1;const ae=new Ct,re=new j,_e=new Pt,w={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function F(){return _===null?me:1}let E=i;function q(A,V){return t.getContext(A,V)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yc}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),E===null){const V="webgl2";if(E=q(V,A),E===null)throw q(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let W,ce,J,le,Y,de,y,g,B,ee,oe,$,we,ge,Le,Ce,he,ve,Ie,Ne,Ae,Ge,k,Te;function Me(){W=new iM(E),W.init(),Ge=new ky(E,W),ce=new $S(E,W,e,Ge),J=new Oy(E,W),ce.reversedDepthBuffer&&d&&J.buffers.depth.setReversed(!0),le=new oM(E),Y=new Ey,de=new By(E,W,J,Y,ce,Ge,le),y=new KS(M),g=new nM(M),B=new uv(E),k=new qS(E,B),ee=new sM(E,B,le,k),oe=new lM(E,ee,B,le),Ie=new aM(E,ce,de),Ce=new jS(Y),$=new yy(M,y,g,W,ce,k,Ce),we=new Xy(M,Y),ge=new Ay,Le=new Ly(W),ve=new XS(M,y,g,J,oe,h,l),he=new Ny(M,oe,ce),Te=new qy(E,le,ce,J),Ne=new YS(E,W,le),Ae=new rM(E,W,le),le.programs=$.programs,M.capabilities=ce,M.extensions=W,M.properties=Y,M.renderLists=ge,M.shadowMap=he,M.state=J,M.info=le}Me();const ye=new Gy(M,E);this.xr=ye,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const A=W.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=W.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(A){A!==void 0&&(me=A,this.setSize(H,pe,!1))},this.getSize=function(A){return A.set(H,pe)},this.setSize=function(A,V,ie=!0){if(ye.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,pe=V,t.width=Math.floor(A*me),t.height=Math.floor(V*me),ie===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(H*me,pe*me).floor()},this.setDrawingBufferSize=function(A,V,ie){H=A,pe=V,me=ie,t.width=Math.floor(A*ie),t.height=Math.floor(V*ie),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(Be)},this.setViewport=function(A,V,ie,se){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,V,ie,se),J.viewport(z.copy(Be).multiplyScalar(me).round())},this.getScissor=function(A){return A.copy(Ue)},this.setScissor=function(A,V,ie,se){A.isVector4?Ue.set(A.x,A.y,A.z,A.w):Ue.set(A,V,ie,se),J.scissor(K.copy(Ue).multiplyScalar(me).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(A){J.setScissorTest(De=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){Se=A},this.getClearColor=function(A){return A.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,ie=!0){let se=0;if(A){let G=!1;if(_!==null){const be=_.texture.format;G=x.has(be)}if(G){const be=_.texture.type,Re=v.has(be),Oe=ve.getClearColor(),Pe=ve.getClearAlpha(),We=Oe.r,Xe=Oe.g,ze=Oe.b;Re?(m[0]=We,m[1]=Xe,m[2]=ze,m[3]=Pe,E.clearBufferuiv(E.COLOR,0,m)):(p[0]=We,p[1]=Xe,p[2]=ze,p[3]=Pe,E.clearBufferiv(E.COLOR,0,p))}else se|=E.COLOR_BUFFER_BIT}V&&(se|=E.DEPTH_BUFFER_BIT),ie&&(se|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),ve.dispose(),ge.dispose(),Le.dispose(),Y.dispose(),y.dispose(),g.dispose(),oe.dispose(),k.dispose(),Te.dispose(),$.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",au),ye.removeEventListener("sessionend",lu),qi.stop()};function xe(A){A.preventDefault(),Af("WebGLRenderer: Context Lost."),L=!0}function fe(){Af("WebGLRenderer: Context Restored."),L=!1;const A=le.autoReset,V=he.enabled,ie=he.autoUpdate,se=he.needsUpdate,G=he.type;Me(),le.autoReset=A,he.enabled=V,he.autoUpdate=ie,he.needsUpdate=se,he.type=G}function Fe(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $e(A){const V=A.target;V.removeEventListener("dispose",$e),vt(V)}function vt(A){dt(A),Y.remove(A)}function dt(A){const V=Y.get(A).programs;V!==void 0&&(V.forEach(function(ie){$.releaseProgram(ie)}),A.isShaderMaterial&&$.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,ie,se,G,be){V===null&&(V=w);const Re=G.isMesh&&G.matrixWorld.determinant()<0,Oe=Bp(A,V,ie,se,G);J.setMaterial(se,Re);let Pe=ie.index,We=1;if(se.wireframe===!0){if(Pe=ee.getWireframeAttribute(ie),Pe===void 0)return;We=2}const Xe=ie.drawRange,ze=ie.attributes.position;let tt=Xe.start*We,ht=(Xe.start+Xe.count)*We;be!==null&&(tt=Math.max(tt,be.start*We),ht=Math.min(ht,(be.start+be.count)*We)),Pe!==null?(tt=Math.max(tt,0),ht=Math.min(ht,Pe.count)):ze!=null&&(tt=Math.max(tt,0),ht=Math.min(ht,ze.count));const Et=ht-tt;if(Et<0||Et===1/0)return;k.setup(G,se,Oe,ie,Pe);let Tt,xt=Ne;if(Pe!==null&&(Tt=B.get(Pe),xt=Ae,xt.setIndex(Tt)),G.isMesh)se.wireframe===!0?(J.setLineWidth(se.wireframeLinewidth*F()),xt.setMode(E.LINES)):xt.setMode(E.TRIANGLES);else if(G.isLine){let He=se.linewidth;He===void 0&&(He=1),J.setLineWidth(He*F()),G.isLineSegments?xt.setMode(E.LINES):G.isLineLoop?xt.setMode(E.LINE_LOOP):xt.setMode(E.LINE_STRIP)}else G.isPoints?xt.setMode(E.POINTS):G.isSprite&&xt.setMode(E.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Br("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))xt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const He=G._multiDrawStarts,Mt=G._multiDrawCounts,st=G._multiDrawCount,cn=Pe?B.get(Pe).bytesPerElement:1,_s=Y.get(se).currentProgram.getUniforms();for(let un=0;un<st;un++)_s.setValue(E,"_gl_DrawID",un),xt.render(He[un]/cn,Mt[un])}else if(G.isInstancedMesh)xt.renderInstances(tt,Et,G.count);else if(ie.isInstancedBufferGeometry){const He=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Mt=Math.min(ie.instanceCount,He);xt.renderInstances(tt,Et,Mt)}else xt.render(tt,Et)};function zn(A,V,ie){A.transparent===!0&&A.side===Xn&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,jr(A,V,ie),A.side=Xi,A.needsUpdate=!0,jr(A,V,ie),A.side=Xn):jr(A,V,ie)}this.compile=function(A,V,ie=null){ie===null&&(ie=A),T=Le.get(ie),T.init(V),C.push(T),ie.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),A!==ie&&A.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const se=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const be=G.material;if(be)if(Array.isArray(be))for(let Re=0;Re<be.length;Re++){const Oe=be[Re];zn(Oe,ie,G),se.add(Oe)}else zn(be,ie,G),se.add(be)}),T=C.pop(),se},this.compileAsync=function(A,V,ie=null){const se=this.compile(A,V,ie);return new Promise(G=>{function be(){if(se.forEach(function(Re){Y.get(Re).currentProgram.isReady()&&se.delete(Re)}),se.size===0){G(A);return}setTimeout(be,10)}W.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Rn=null;function Op(A){Rn&&Rn(A)}function au(){qi.stop()}function lu(){qi.start()}const qi=new Dp;qi.setAnimationLoop(Op),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(A){Rn=A,ye.setAnimationLoop(A),A===null?qi.stop():qi.start()},ye.addEventListener("sessionstart",au),ye.addEventListener("sessionend",lu),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(V),V=ye.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,V,_),T=Le.get(A,C.length),T.init(V),C.push(T),ae.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Z.setFromProjectionMatrix(ae,qn,V.reversedDepth),ne=this.localClippingEnabled,U=Ce.init(this.clippingPlanes,ne),R=ge.get(A,S.length),R.init(),S.push(R),ye.enabled===!0&&ye.isPresenting===!0){const be=M.xr.getDepthSensingMesh();be!==null&&Sa(be,V,-1/0,M.sortObjects)}Sa(A,V,0,M.sortObjects),R.finish(),M.sortObjects===!0&&R.sort(ue,Se),P=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,P&&ve.addToRenderList(R,A),this.info.render.frame++,U===!0&&Ce.beginShadows();const ie=T.state.shadowsArray;he.render(ie,A,V),U===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=R.opaque,G=R.transmissive;if(T.setupLights(),V.isArrayCamera){const be=V.cameras;if(G.length>0)for(let Re=0,Oe=be.length;Re<Oe;Re++){const Pe=be[Re];uu(se,G,A,Pe)}P&&ve.render(A);for(let Re=0,Oe=be.length;Re<Oe;Re++){const Pe=be[Re];cu(R,A,Pe,Pe.viewport)}}else G.length>0&&uu(se,G,A,V),P&&ve.render(A),cu(R,A,V);_!==null&&b===0&&(de.updateMultisampleRenderTarget(_),de.updateRenderTargetMipmap(_)),A.isScene===!0&&A.onAfterRender(M,A,V),k.resetDefaultState(),D=-1,I=null,C.pop(),C.length>0?(T=C[C.length-1],U===!0&&Ce.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,S.pop(),S.length>0?R=S[S.length-1]:R=null};function Sa(A,V,ie,se){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){se&&_e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ae);const Re=oe.update(A),Oe=A.material;Oe.visible&&R.push(A,Re,Oe,ie,_e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Re=oe.update(A),Oe=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_e.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),_e.copy(Re.boundingSphere.center)),_e.applyMatrix4(A.matrixWorld).applyMatrix4(ae)),Array.isArray(Oe)){const Pe=Re.groups;for(let We=0,Xe=Pe.length;We<Xe;We++){const ze=Pe[We],tt=Oe[ze.materialIndex];tt&&tt.visible&&R.push(A,Re,tt,ie,_e.z,ze)}}else Oe.visible&&R.push(A,Re,Oe,ie,_e.z,null)}}const be=A.children;for(let Re=0,Oe=be.length;Re<Oe;Re++)Sa(be[Re],V,ie,se)}function cu(A,V,ie,se){const{opaque:G,transmissive:be,transparent:Re}=A;T.setupLightsView(ie),U===!0&&Ce.setGlobalState(M.clippingPlanes,ie),se&&J.viewport(z.copy(se)),G.length>0&&$r(G,V,ie),be.length>0&&$r(be,V,ie),Re.length>0&&$r(Re,V,ie),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function uu(A,V,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;T.state.transmissionRenderTarget[se.id]===void 0&&(T.state.transmissionRenderTarget[se.id]=new ms(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?er:Mi,minFilter:us,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const be=T.state.transmissionRenderTarget[se.id],Re=se.viewport||z;be.setSize(Re.z*M.transmissionResolutionScale,Re.w*M.transmissionResolutionScale);const Oe=M.getRenderTarget(),Pe=M.getActiveCubeFace(),We=M.getActiveMipmapLevel();M.setRenderTarget(be),M.getClearColor(X),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),P&&ve.render(ie);const Xe=M.toneMapping;M.toneMapping=Hi;const ze=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),T.setupLightsView(se),U===!0&&Ce.setGlobalState(M.clippingPlanes,se),$r(A,ie,se),de.updateMultisampleRenderTarget(be),de.updateRenderTargetMipmap(be),W.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ht=0,Et=V.length;ht<Et;ht++){const Tt=V[ht],{object:xt,geometry:He,material:Mt,group:st}=Tt;if(Mt.side===Xn&&xt.layers.test(se.layers)){const cn=Mt.side;Mt.side=ln,Mt.needsUpdate=!0,fu(xt,ie,se,He,Mt,st),Mt.side=cn,Mt.needsUpdate=!0,tt=!0}}tt===!0&&(de.updateMultisampleRenderTarget(be),de.updateRenderTargetMipmap(be))}M.setRenderTarget(Oe,Pe,We),M.setClearColor(X,Q),ze!==void 0&&(se.viewport=ze),M.toneMapping=Xe}function $r(A,V,ie){const se=V.isScene===!0?V.overrideMaterial:null;for(let G=0,be=A.length;G<be;G++){const Re=A[G],{object:Oe,geometry:Pe,group:We}=Re;let Xe=Re.material;Xe.allowOverride===!0&&se!==null&&(Xe=se),Oe.layers.test(ie.layers)&&fu(Oe,V,ie,Pe,Xe,We)}}function fu(A,V,ie,se,G,be){A.onBeforeRender(M,V,ie,se,G,be),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(M,V,ie,se,A,be),G.transparent===!0&&G.side===Xn&&G.forceSinglePass===!1?(G.side=ln,G.needsUpdate=!0,M.renderBufferDirect(ie,V,se,G,A,be),G.side=Xi,G.needsUpdate=!0,M.renderBufferDirect(ie,V,se,G,A,be),G.side=Xn):M.renderBufferDirect(ie,V,se,G,A,be),A.onAfterRender(M,V,ie,se,G,be)}function jr(A,V,ie){V.isScene!==!0&&(V=w);const se=Y.get(A),G=T.state.lights,be=T.state.shadowsArray,Re=G.state.version,Oe=$.getParameters(A,G.state,be,V,ie),Pe=$.getProgramCacheKey(Oe);let We=se.programs;se.environment=A.isMeshStandardMaterial?V.environment:null,se.fog=V.fog,se.envMap=(A.isMeshStandardMaterial?g:y).get(A.envMap||se.environment),se.envMapRotation=se.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",$e),We=new Map,se.programs=We);let Xe=We.get(Pe);if(Xe!==void 0){if(se.currentProgram===Xe&&se.lightsStateVersion===Re)return hu(A,Oe),Xe}else Oe.uniforms=$.getUniforms(A),A.onBeforeCompile(Oe,M),Xe=$.acquireProgram(Oe,Pe),We.set(Pe,Xe),se.uniforms=Oe.uniforms;const ze=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=Ce.uniform),hu(A,Oe),se.needsLights=zp(A),se.lightsStateVersion=Re,se.needsLights&&(ze.ambientLightColor.value=G.state.ambient,ze.lightProbe.value=G.state.probe,ze.directionalLights.value=G.state.directional,ze.directionalLightShadows.value=G.state.directionalShadow,ze.spotLights.value=G.state.spot,ze.spotLightShadows.value=G.state.spotShadow,ze.rectAreaLights.value=G.state.rectArea,ze.ltc_1.value=G.state.rectAreaLTC1,ze.ltc_2.value=G.state.rectAreaLTC2,ze.pointLights.value=G.state.point,ze.pointLightShadows.value=G.state.pointShadow,ze.hemisphereLights.value=G.state.hemi,ze.directionalShadowMap.value=G.state.directionalShadowMap,ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ze.spotShadowMap.value=G.state.spotShadowMap,ze.spotLightMatrix.value=G.state.spotLightMatrix,ze.spotLightMap.value=G.state.spotLightMap,ze.pointShadowMap.value=G.state.pointShadowMap,ze.pointShadowMatrix.value=G.state.pointShadowMatrix),se.currentProgram=Xe,se.uniformsList=null,Xe}function du(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Bo.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function hu(A,V){const ie=Y.get(A);ie.outputColorSpace=V.outputColorSpace,ie.batching=V.batching,ie.batchingColor=V.batchingColor,ie.instancing=V.instancing,ie.instancingColor=V.instancingColor,ie.instancingMorph=V.instancingMorph,ie.skinning=V.skinning,ie.morphTargets=V.morphTargets,ie.morphNormals=V.morphNormals,ie.morphColors=V.morphColors,ie.morphTargetsCount=V.morphTargetsCount,ie.numClippingPlanes=V.numClippingPlanes,ie.numIntersection=V.numClipIntersection,ie.vertexAlphas=V.vertexAlphas,ie.vertexTangents=V.vertexTangents,ie.toneMapping=V.toneMapping}function Bp(A,V,ie,se,G){V.isScene!==!0&&(V=w),de.resetTextureUnits();const be=V.fog,Re=se.isMeshStandardMaterial?V.environment:null,Oe=_===null?M.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Js,Pe=(se.isMeshStandardMaterial?g:y).get(se.envMap||Re),We=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Xe=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),ze=!!ie.morphAttributes.position,tt=!!ie.morphAttributes.normal,ht=!!ie.morphAttributes.color;let Et=Hi;se.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(Et=M.toneMapping);const Tt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,xt=Tt!==void 0?Tt.length:0,He=Y.get(se),Mt=T.state.lights;if(U===!0&&(ne===!0||A!==I)){const Yt=A===I&&se.id===D;Ce.setState(se,A,Yt)}let st=!1;se.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Mt.state.version||He.outputColorSpace!==Oe||G.isBatchedMesh&&He.batching===!1||!G.isBatchedMesh&&He.batching===!0||G.isBatchedMesh&&He.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&He.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&He.instancing===!1||!G.isInstancedMesh&&He.instancing===!0||G.isSkinnedMesh&&He.skinning===!1||!G.isSkinnedMesh&&He.skinning===!0||G.isInstancedMesh&&He.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&He.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&He.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&He.instancingMorph===!1&&G.morphTexture!==null||He.envMap!==Pe||se.fog===!0&&He.fog!==be||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ce.numPlanes||He.numIntersection!==Ce.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==Xe||He.morphTargets!==ze||He.morphNormals!==tt||He.morphColors!==ht||He.toneMapping!==Et||He.morphTargetsCount!==xt)&&(st=!0):(st=!0,He.__version=se.version);let cn=He.currentProgram;st===!0&&(cn=jr(se,V,G));let _s=!1,un=!1,sr=!1;const yt=cn.getUniforms(),nn=He.uniforms;if(J.useProgram(cn.program)&&(_s=!0,un=!0,sr=!0),se.id!==D&&(D=se.id,un=!0),_s||I!==A){J.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),yt.setValue(E,"projectionMatrix",A.projectionMatrix),yt.setValue(E,"viewMatrix",A.matrixWorldInverse);const sn=yt.map.cameraPosition;sn!==void 0&&sn.setValue(E,re.setFromMatrixPosition(A.matrixWorld)),ce.logarithmicDepthBuffer&&yt.setValue(E,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&yt.setValue(E,"isOrthographic",A.isOrthographicCamera===!0),I!==A&&(I=A,un=!0,sr=!0)}if(G.isSkinnedMesh){yt.setOptional(E,G,"bindMatrix"),yt.setOptional(E,G,"bindMatrixInverse");const Yt=G.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),yt.setValue(E,"boneTexture",Yt.boneTexture,de))}G.isBatchedMesh&&(yt.setOptional(E,G,"batchingTexture"),yt.setValue(E,"batchingTexture",G._matricesTexture,de),yt.setOptional(E,G,"batchingIdTexture"),yt.setValue(E,"batchingIdTexture",G._indirectTexture,de),yt.setOptional(E,G,"batchingColorTexture"),G._colorsTexture!==null&&yt.setValue(E,"batchingColorTexture",G._colorsTexture,de));const bn=ie.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Ie.update(G,ie,cn),(un||He.receiveShadow!==G.receiveShadow)&&(He.receiveShadow=G.receiveShadow,yt.setValue(E,"receiveShadow",G.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(nn.envMap.value=Pe,nn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&V.environment!==null&&(nn.envMapIntensity.value=V.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=$y()),un&&(yt.setValue(E,"toneMappingExposure",M.toneMappingExposure),He.needsLights&&kp(nn,sr),be&&se.fog===!0&&we.refreshFogUniforms(nn,be),we.refreshMaterialUniforms(nn,se,me,pe,T.state.transmissionRenderTarget[A.id]),Bo.upload(E,du(He),nn,de)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Bo.upload(E,du(He),nn,de),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&yt.setValue(E,"center",G.center),yt.setValue(E,"modelViewMatrix",G.modelViewMatrix),yt.setValue(E,"normalMatrix",G.normalMatrix),yt.setValue(E,"modelMatrix",G.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Yt=se.uniformsGroups;for(let sn=0,Ma=Yt.length;sn<Ma;sn++){const Yi=Yt[sn];Te.update(Yi,cn),Te.bind(Yi,cn)}}return cn}function kp(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function zp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(A,V,ie){const se=Y.get(A);se.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Y.get(A.texture).__webglTexture=V,Y.get(A.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ie,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const ie=Y.get(A);ie.__webglFramebuffer=V,ie.__useDefaultFramebuffer=V===void 0};const Vp=E.createFramebuffer();this.setRenderTarget=function(A,V=0,ie=0){_=A,O=V,b=ie;let se=!0,G=null,be=!1,Re=!1;if(A){const Pe=Y.get(A);if(Pe.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(E.FRAMEBUFFER,null),se=!1;else if(Pe.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(Pe.__hasExternalTextures)de.rebindTextures(A,Y.get(A.texture).__webglTexture,Y.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ze=A.depthTexture;if(Pe.__boundDepthTexture!==ze){if(ze!==null&&Y.has(ze)&&(A.width!==ze.image.width||A.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Re=!0);const Xe=Y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[V])?G=Xe[V][ie]:G=Xe[V],be=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?G=Y.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?G=Xe[ie]:G=Xe,z.copy(A.viewport),K.copy(A.scissor),te=A.scissorTest}else z.copy(Be).multiplyScalar(me).floor(),K.copy(Ue).multiplyScalar(me).floor(),te=De;if(ie!==0&&(G=Vp),J.bindFramebuffer(E.FRAMEBUFFER,G)&&se&&J.drawBuffers(A,G),J.viewport(z),J.scissor(K),J.setScissorTest(te),be){const Pe=Y.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pe.__webglTexture,ie)}else if(Re){const Pe=V;for(let We=0;We<A.textures.length;We++){const Xe=Y.get(A.textures[We]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+We,Xe.__webglTexture,ie,Pe)}}else if(A!==null&&ie!==0){const Pe=Y.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Pe.__webglTexture,ie)}D=-1},this.readRenderTargetPixels=function(A,V,ie,se,G,be,Re,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){J.bindFramebuffer(E.FRAMEBUFFER,Pe);try{const We=A.textures[Oe],Xe=We.format,ze=We.type;if(!ce.textureFormatReadable(Xe)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(ze)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-se&&ie>=0&&ie<=A.height-G&&(A.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Oe),E.readPixels(V,ie,se,G,Ge.convert(Xe),Ge.convert(ze),be))}finally{const We=_!==null?Y.get(_).__webglFramebuffer:null;J.bindFramebuffer(E.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,V,ie,se,G,be,Re,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe)if(V>=0&&V<=A.width-se&&ie>=0&&ie<=A.height-G){J.bindFramebuffer(E.FRAMEBUFFER,Pe);const We=A.textures[Oe],Xe=We.format,ze=We.type;if(!ce.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,tt),E.bufferData(E.PIXEL_PACK_BUFFER,be.byteLength,E.STREAM_READ),A.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Oe),E.readPixels(V,ie,se,G,Ge.convert(Xe),Ge.convert(ze),0);const ht=_!==null?Y.get(_).__webglFramebuffer:null;J.bindFramebuffer(E.FRAMEBUFFER,ht);const Et=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await M_(E,Et,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,tt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,be),E.deleteBuffer(tt),E.deleteSync(Et),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,ie=0){const se=Math.pow(2,-ie),G=Math.floor(A.image.width*se),be=Math.floor(A.image.height*se),Re=V!==null?V.x:0,Oe=V!==null?V.y:0;de.setTexture2D(A,0),E.copyTexSubImage2D(E.TEXTURE_2D,ie,0,0,Re,Oe,G,be),J.unbindTexture()};const Hp=E.createFramebuffer(),Gp=E.createFramebuffer();this.copyTextureToTexture=function(A,V,ie=null,se=null,G=0,be=null){be===null&&(G!==0?(Br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=G,G=0):be=0);let Re,Oe,Pe,We,Xe,ze,tt,ht,Et;const Tt=A.isCompressedTexture?A.mipmaps[be]:A.image;if(ie!==null)Re=ie.max.x-ie.min.x,Oe=ie.max.y-ie.min.y,Pe=ie.isBox3?ie.max.z-ie.min.z:1,We=ie.min.x,Xe=ie.min.y,ze=ie.isBox3?ie.min.z:0;else{const bn=Math.pow(2,-G);Re=Math.floor(Tt.width*bn),Oe=Math.floor(Tt.height*bn),A.isDataArrayTexture?Pe=Tt.depth:A.isData3DTexture?Pe=Math.floor(Tt.depth*bn):Pe=1,We=0,Xe=0,ze=0}se!==null?(tt=se.x,ht=se.y,Et=se.z):(tt=0,ht=0,Et=0);const xt=Ge.convert(V.format),He=Ge.convert(V.type);let Mt;V.isData3DTexture?(de.setTexture3D(V,0),Mt=E.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(de.setTexture2DArray(V,0),Mt=E.TEXTURE_2D_ARRAY):(de.setTexture2D(V,0),Mt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,V.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,V.unpackAlignment);const st=E.getParameter(E.UNPACK_ROW_LENGTH),cn=E.getParameter(E.UNPACK_IMAGE_HEIGHT),_s=E.getParameter(E.UNPACK_SKIP_PIXELS),un=E.getParameter(E.UNPACK_SKIP_ROWS),sr=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Tt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Tt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,We),E.pixelStorei(E.UNPACK_SKIP_ROWS,Xe),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ze);const yt=A.isDataArrayTexture||A.isData3DTexture,nn=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const bn=Y.get(A),Yt=Y.get(V),sn=Y.get(bn.__renderTarget),Ma=Y.get(Yt.__renderTarget);J.bindFramebuffer(E.READ_FRAMEBUFFER,sn.__webglFramebuffer),J.bindFramebuffer(E.DRAW_FRAMEBUFFER,Ma.__webglFramebuffer);for(let Yi=0;Yi<Pe;Yi++)yt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Y.get(A).__webglTexture,G,ze+Yi),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Y.get(V).__webglTexture,be,Et+Yi)),E.blitFramebuffer(We,Xe,Re,Oe,tt,ht,Re,Oe,E.DEPTH_BUFFER_BIT,E.NEAREST);J.bindFramebuffer(E.READ_FRAMEBUFFER,null),J.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||Y.has(A)){const bn=Y.get(A),Yt=Y.get(V);J.bindFramebuffer(E.READ_FRAMEBUFFER,Hp),J.bindFramebuffer(E.DRAW_FRAMEBUFFER,Gp);for(let sn=0;sn<Pe;sn++)yt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,bn.__webglTexture,G,ze+sn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,bn.__webglTexture,G),nn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Yt.__webglTexture,be,Et+sn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Yt.__webglTexture,be),G!==0?E.blitFramebuffer(We,Xe,Re,Oe,tt,ht,Re,Oe,E.COLOR_BUFFER_BIT,E.NEAREST):nn?E.copyTexSubImage3D(Mt,be,tt,ht,Et+sn,We,Xe,Re,Oe):E.copyTexSubImage2D(Mt,be,tt,ht,We,Xe,Re,Oe);J.bindFramebuffer(E.READ_FRAMEBUFFER,null),J.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else nn?A.isDataTexture||A.isData3DTexture?E.texSubImage3D(Mt,be,tt,ht,Et,Re,Oe,Pe,xt,He,Tt.data):V.isCompressedArrayTexture?E.compressedTexSubImage3D(Mt,be,tt,ht,Et,Re,Oe,Pe,xt,Tt.data):E.texSubImage3D(Mt,be,tt,ht,Et,Re,Oe,Pe,xt,He,Tt):A.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,be,tt,ht,Re,Oe,xt,He,Tt.data):A.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,be,tt,ht,Tt.width,Tt.height,xt,Tt.data):E.texSubImage2D(E.TEXTURE_2D,be,tt,ht,Re,Oe,xt,He,Tt);E.pixelStorei(E.UNPACK_ROW_LENGTH,st),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,cn),E.pixelStorei(E.UNPACK_SKIP_PIXELS,_s),E.pixelStorei(E.UNPACK_SKIP_ROWS,un),E.pixelStorei(E.UNPACK_SKIP_IMAGES,sr),be===0&&V.generateMipmaps&&E.generateMipmap(Mt),J.unbindTexture()},this.initRenderTarget=function(A){Y.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),J.unbindTexture()},this.resetState=function(){O=0,b=0,_=null,J.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const yd={type:"change"},ru={type:"start"},Fp={type:"end"},Ao=new Xr,Ed=new Bi,Ky=Math.cos(70*E_.DEG2RAD),It=new j,on=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ml=1e-6;class Zy extends lv{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hs.ROTATE,MIDDLE:Hs.DOLLY,RIGHT:Hs.PAN},this.touches={ONE:Os.ROTATE,TWO:Os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new ps,this._lastTargetPosition=new j,this._quat=new ps().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jf,this._sphericalDelta=new Jf,this._scale=1,this._panOffset=new j,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new j,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qy.bind(this),this._onPointerDown=Jy.bind(this),this._onPointerUp=eE.bind(this),this._onContextMenu=aE.bind(this),this._onMouseWheel=iE.bind(this),this._onKeyDown=sE.bind(this),this._onTouchStart=rE.bind(this),this._onTouchMove=oE.bind(this),this._onMouseDown=tE.bind(this),this._onMouseMove=nE.bind(this),this._interceptControlDown=lE.bind(this),this._interceptControlUp=cE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yd),this.update(),this.state=mt.NONE}update(e=null){const t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=It.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new j(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new j(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ao.origin.copy(this.object.position),Ao.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ao.direction))<Ky?this.object.lookAt(this.target):(Ed.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ao.intersectPlane(Ed,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ml||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ml||this._lastTargetPosition.distanceToSquared(this.target)>ml?(this.dispatchEvent(yd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;It.copy(s).sub(this.target);let r=It.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Jy(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Qy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function eE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fp),this.state=mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function tE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Hs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=mt.DOLLY;break;case Hs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}break;case Hs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(ru)}function nE(n){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function iE(n){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(n.preventDefault(),this.dispatchEvent(ru),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Fp))}function sE(n){this.enabled!==!1&&this._handleKeyDown(n)}function rE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=mt.TOUCH_ROTATE;break;case Os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=mt.TOUCH_DOLLY_PAN;break;case Os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(ru)}function oE(n){switch(this._trackPointer(n),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=mt.NONE}}function aE(n){this.enabled!==!1&&n.preventDefault()}function lE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const vn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},uE=5,fE={__name:"PathMap",props:{filterRange:{type:Object,default:null},vizMode:{type:Number,default:0},themeColor:{type:String,default:"#ffffff"},altitudeRange:{type:Array,default:()=>[-1/0,1/0]},speedLimit:{type:Array,default:()=>[0,1/0]},enableZoomRotate:{type:Boolean,default:!0}},emits:["loaded","loading","details-loading","error","status","point-selected","fps"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=qe(null);let o,a,l,c,u,f,d,h=null,x=null,v=null,m=null;const p=new Kf,R=new je;let T={x:0,y:0},S=null,C=null;function M(ue){if(i.enableZoomRotate){if(C&&clearTimeout(C),C=setTimeout(()=>{S=null},150),!S){const Se=l.domElement.getBoundingClientRect(),Be=(ue.clientX-Se.left)/Se.width*2-1,Ue=-((ue.clientY-Se.top)/Se.height)*2+1,De=new Kf;De.setFromCamera(new je(Be,Ue),a);const Z=new tr(new j(0,0,0),100),U=new j;De.ray.intersectSphere(Z,U)&&(S=U)}if(S){const Se=a.position,Be=S,Ue=Se.clone().normalize(),De=Be.clone().normalize(),Z=Ue.angleTo(De);if(Z>.001){const U=new j().crossVectors(Ue,De).normalize(),ae=Z*.08;Se.applyAxisAngle(U,ae)}}}}function L(){u=new Worker(new URL("/pathView/assets/dbWorker-CjBIUVLp.js",import.meta.url),{type:"module"}),u.onmessage=ue=>{const{type:Se,positions:Be,densities:Ue,accuracies:De,times:Z,altitudes:U,speeds:ne,message:ae,data:re,count:_e,totalDistance:w,availableDates:P}=ue.data;Se==="success"?(h=De,x=Z,v=U,m=ne,I(Be,Ue,Z,U,ne),i.filterRange&&O(i.filterRange),b(),s("loading",!1),s("status",""),s("loaded",{count:_e,totalDistance:w,availableDates:P})):Se==="details"?(s("point-selected",re),s("details-loading",!1)):Se==="error"&&(s("loading",!1),s("details-loading",!1),s("error",ae))}}function O(ue){if(!(!f||!f.material.uniforms)){if(ue&&ue.start&&ue.end&&x&&x.length>0)try{const Be=ue.start,Ue=ue.end,De=(Be-946684800)/86400,Z=(Ue-946684800)/86400;f.material.uniforms.uTimeRange.value.set(De,Z)}catch(Se){console.error("Date filter error:",Se),f.material.uniforms.uTimeRange.value.set(-99999,99999)}else f.material.uniforms.uTimeRange.value.set(-99999,99999);f.material.needsUpdate=!0}}function b(){if(!f||!f.material.uniforms)return;const ue=i.altitudeRange[0]===-1/0?-999999:i.altitudeRange[0],Se=i.altitudeRange[1]===1/0?999999:i.altitudeRange[1],Be=i.speedLimit[0]===-1/0||i.speedLimit[0]===null?0:i.speedLimit[0],Ue=i.speedLimit[1]===1/0||i.speedLimit[1]===null?999999:i.speedLimit[1];f.material.uniforms.uAltRange.value.set(ue,Se),f.material.uniforms.uSpeedRange.value.set(Be,Ue),f.material.needsUpdate=!0}zt(()=>i.filterRange,ue=>{s("point-selected",null),d.visible=!1,O(ue)}),zt(()=>i.altitudeRange,()=>{s("point-selected",null),d.visible=!1,b()},{deep:!0}),zt(()=>i.speedLimit,()=>{s("point-selected",null),d.visible=!1,b()},{deep:!0}),zt(()=>i.vizMode,ue=>{f&&f.material.uniforms&&(f.material.uniforms.uMode.value=ue,f.material.needsUpdate=!0)}),zt(()=>i.themeColor,ue=>{f&&f.material.uniforms&&(f.material.uniforms.uColor.value.set(ue),f.material.needsUpdate=!0),d&&d.material.uniforms&&(d.material.uniforms.uColor.value.set(ue),d.material.needsUpdate=!0)});function _(ue){u&&(s("loading",!0),s("status","加载中..."),s("error",""),s("point-selected",null),u.postMessage({type:"load",fileBuffer:ue},[ue]))}function D(){o=new j_,o.background=new it(0),a=new En(60,window.innerWidth/window.innerHeight,1e-5,1e3),a.position.z=250,l=new jy({antialias:!0,logarithmicDepthBuffer:!0}),l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(window.devicePixelRatio),r.value.appendChild(l.domElement),c=new Zy(a,l.domElement),c.enableDamping=!0,c.dampingFactor=.05,c.enablePan=!1,c.minDistance=100.0001,c.maxDistance=500,c.rotateSpeed=.5,c.zoomSpeed=.5;function ue(re,_e,w,P){const F=[];for(let ce=1;ce<w;ce++){const J=ce/w*Math.PI-Math.PI/2,le=Math.cos(J)*re,Y=Math.sin(J)*re;for(let de=0;de<_e;de++){const y=de/_e*Math.PI*2,g=(de+1)/_e*Math.PI*2;F.push(le*Math.cos(y),Y,le*Math.sin(y)),F.push(le*Math.cos(g),Y,le*Math.sin(g))}}for(let ce=0;ce<_e;ce++){const J=ce/_e*Math.PI*2,le=Math.sin(J),Y=Math.cos(J);for(let de=0;de<w;de++){const y=de/w*Math.PI-Math.PI/2,g=(de+1)/w*Math.PI-Math.PI/2;F.push(re*Math.cos(y)*Y,re*Math.sin(y),re*Math.cos(y)*le),F.push(re*Math.cos(g)*Y,re*Math.sin(g),re*Math.cos(g)*le)}}const E=new _n;E.setAttribute("position",new gn(F,3));const q=new Rp({color:P,transparent:!0,opacity:.3}),W=new tv(E,q);return W.frustumCulled=!1,W}const Se=8947848,Be=ue(100,72,36,Se);o.add(Be);const Ue=ue(100,144,72,Se);Ue.visible=!1,o.add(Ue);const De=ue(100,360,180,Se);De.visible=!1,o.add(De),c.addEventListener("change",()=>{const re=a.position.distanceTo(c.target),_e=re-100,w=Math.min(Math.max(_e/100,1e-6),1);c.rotateSpeed=w*.35,c.zoomSpeed=w*.8,re>130?(Be.visible=!0,Ue.visible=!1,De.visible=!1):re>105?(Be.visible=!1,Ue.visible=!0,De.visible=!1):(Be.visible=!1,Ue.visible=!1,De.visible=!0)});const Z=new su(99.9,64,64),U=new iu({color:0});o.add(new Jn(Z,U));const ne=new kn({uniforms:{uColor:{value:new it(i.themeColor)}},extensions:{derivatives:!0},vertexShader:`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform vec3 uColor;
            varying vec2 vUv;
            void main() {
              float dist = length(vUv - vec2(0.5)) * 2.0;
              vec2 grad = vec2(dFdx(dist), dFdy(dist));
              float pxSize = length(grad);
              float w = pxSize * 1.5;
              float alpha = 1.0 - smoothstep(1.0 - w, 1.0, dist);
              if (alpha < 0.01) discard;
              float thickness = pxSize * 2.0; 
              float innerRadius = max(0.0, 1.0 - thickness);
              float borderMask = smoothstep(innerRadius - w, innerRadius, dist);
              vec3 borderColor = mix(uColor, vec3(1.0), 0.5);
              vec3 finalColor = mix(uColor, borderColor, borderMask);
              float finalOpacity = mix(0.15, 0.8, borderMask);
              gl_FragColor = vec4(finalColor, finalOpacity * alpha);
            }
          `,transparent:!0,depthTest:!1,depthWrite:!1,side:Xn}),ae=new Yr(1,1);d=new Jn(ae,ne),d.visible=!1,o.add(d),l.domElement.addEventListener("wheel",M,{passive:!1}),me()}function I(ue,Se,Be,Ue,De){f&&(o.remove(f),f.geometry.dispose(),f.material.dispose());const Z=new _n;Z.setAttribute("position",new Nt(ue,3));const U=ue.length/3;Se?Z.setAttribute("aDensity",new Nt(Se,1)):Z.setAttribute("aDensity",new Nt(new Float32Array(U).fill(1),1)),Be?Z.setAttribute("aTime",new Nt(Be,1)):Z.setAttribute("aTime",new Nt(new Float32Array(U).fill(-1),1)),Ue?Z.setAttribute("aAlt",new Nt(Ue,1)):Z.setAttribute("aAlt",new Nt(new Float32Array(U).fill(0),1)),De?Z.setAttribute("aSpeed",new Nt(De,1)):Z.setAttribute("aSpeed",new Nt(new Float32Array(U).fill(0),1));const ne=new kn({uniforms:{uMode:{value:i.vizMode},uColor:{value:new it(i.themeColor)},uOpacity:{value:.8},uSize:{value:3},uTimeRange:{value:new je(-99999,99999)},uAltRange:{value:new je(-999999,999999)},uSpeedRange:{value:new je(0,999999)}},vertexShader:`
      #include <common>
      #include <logdepthbuf_pars_vertex>
      attribute float aDensity;
      attribute float aTime;
      attribute float aAlt;
      attribute float aSpeed;
      varying float vDensity;
      varying float vTime;
      varying float vAlt;
      varying float vSpeed;
      uniform float uSize;
      void main() {
        vDensity = aDensity;
        vTime = aTime;
        vAlt = aAlt;
        vSpeed = aSpeed;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <logdepthbuf_vertex>
        gl_PointSize = uSize; 
      }
    `,fragmentShader:`
      #include <common>
      #include <logdepthbuf_pars_fragment>
      uniform int uMode;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform vec2 uTimeRange;
      uniform vec2 uAltRange;
      uniform vec2 uSpeedRange;
      varying float vDensity;
      varying float vTime;
      varying float vAlt;
      varying float vSpeed;
      
      vec3 getHeatColor(float t) {
        vec3 col0 = vec3(0.25, 0.45, 0.95); 
        vec3 col1 = vec3(0.25, 0.75, 0.85); 
        vec3 col2 = vec3(0.45, 0.85, 0.45); 
        vec3 col3 = vec3(0.95, 0.85, 0.35); 
        vec3 col4 = vec3(0.95, 0.45, 0.35); 
        if (t < 0.25) return mix(col0, col1, smoothstep(0.0, 0.25, t));
        if (t < 0.50) return mix(col1, col2, smoothstep(0.25, 0.50, t));
        if (t < 0.75) return mix(col2, col3, smoothstep(0.50, 0.75, t));
        return mix(col3, col4, smoothstep(0.75, 1.0, t));
      }
      void main() {
        #include <logdepthbuf_fragment>

        // Filters
        if (vTime < uTimeRange.x || vTime > uTimeRange.y) discard;
        if (vAlt < uAltRange.x || vAlt > uAltRange.y) discard;
        if (vSpeed < uSpeedRange.x || vSpeed > uSpeedRange.y) discard;

        vec2 coord = gl_PointCoord - vec2(0.5);
        if (length(coord) > 0.5) discard;
        vec3 color = vec3(1.0);
        float alpha = uOpacity;
        if (uMode == 0) {
            color = uColor; 
            alpha = 0.1 + 0.9 * smoothstep(0.0, 1.0, vDensity);
        } else if (uMode == 1) {
            color = getHeatColor(vDensity);
            alpha = 0.5; 
        }
        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,depthWrite:!1});f=new iv(Z,ne),o.add(f)}function z(ue){if(!f)return;R.x=ue.clientX/window.innerWidth*2-1,R.y=-(ue.clientY/window.innerHeight)*2+1,p.setFromCamera(R,a);const Se=a.position.distanceTo(new j(0,0,0)),Be=Math.max(Se-100,1),Ue=a.fov*(Math.PI/180),De=2*Be*Math.tan(Ue/2)/window.innerHeight;p.params.Points.threshold=De*15;const Z=p.intersectObject(f,!1);if(Z.length>0){let U=null,ne=1/0;const ae=new j,re=l.domElement.getBoundingClientRect(),_e=f.material.uniforms.uTimeRange.value,w=f.material.uniforms.uAltRange.value,P=f.material.uniforms.uSpeedRange.value;for(let F=0;F<Z.length;F++){const q=Z[F].index;if(x){const B=x[q];if(B>-9e19&&(B<_e.x||B>_e.y))continue}if(v){const B=v[q];if(B>-9e19&&(B<w.x||B>w.y))continue}if(m){const B=m[q];if(B>-9e19&&(B<P.x||B>P.y))continue}const W=f.geometry.attributes.position;ae.set(W.getX(q),W.getY(q),W.getZ(q)),ae.project(a);const ce=(ae.x*.5+.5)*re.width,J=(-(ae.y*.5)+.5)*re.height,le=ue.clientX-re.left,Y=ue.clientY-re.top,de=ce-le,y=J-Y,g=Math.sqrt(de*de+y*y);if(g<ne&&g<15){ne=g,U={index:q,position:ae.clone()};const B=W.getX(q),ee=W.getY(q),oe=W.getZ(q);U.worldPos=new j(B,ee,oe)}}if(U){d.position.copy(U.worldPos);const F=h&&h[U.index]||10,E=100/6371e3,q=F*2*E,W=a.position.distanceTo(U.worldPos),ce=3/window.innerHeight*2*W*Math.tan(Ue/2),J=Math.max(q,ce);d.scale.set(J,J,1),d.visible=!0,s("details-loading",!0),u.postMessage({type:"getDetails",index:U.index})}else d.visible=!1,s("point-selected",null)}else d.visible=!1,s("point-selected",null)}function K(ue){performance.now(),T={x:ue.clientX,y:ue.clientY}}function te(ue){performance.now();const Se={x:ue.clientX,y:ue.clientY},Be=Se.x-T.x,Ue=Se.y-T.y;Math.sqrt(Be*Be+Ue*Ue)<uE&&z(ue)}function X(){a&&l&&(a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight),f&&f.material.uniforms.uHeight&&(f.material.uniforms.uHeight.value=window.innerHeight))}let Q=performance.now(),H=0,pe;function me(){pe=requestAnimationFrame(me);const ue=performance.now();H++,ue-Q>=1e3&&(s("fps",H),H=0,Q=ue),c.update(),d&&d.visible&&d.quaternion.copy(a.quaternion),l.render(o,a)}return da(()=>{D(),L(),window.addEventListener("resize",X),l.domElement.addEventListener("mousedown",K),l.domElement.addEventListener("mouseup",te)}),Oc(()=>{window.removeEventListener("resize",X),l&&l.domElement&&(l.domElement.removeEventListener("mousedown",K),l.domElement.removeEventListener("mouseup",te),l.domElement.removeEventListener("wheel",M)),u&&u.terminate(),l&&l.dispose(),pe&&cancelAnimationFrame(pe)}),e({loadFile:_}),(ue,Se)=>(ke(),Ze("div",{ref_key:"container",ref:r,class:"canvas-container"},null,512))}},dE=vn(fE,[["__scopeId","data-v-3f35ea95"]]),hE={class:"stats-panel"},pE={class:"stat-item"},mE={class:"stat-val"},xE={class:"stat-item"},gE={class:"stat-val"},_E={__name:"StatsPanel",props:{totalPoints:Number,totalDistance:Number},setup(n){return(e,t)=>(ke(),Ze("div",hE,[N("div",pE,[t[0]||(t[0]=N("span",{class:"stat-label"},"总点数",-1)),N("span",mE,ot(n.totalPoints>0?n.totalPoints.toLocaleString():"-"),1)]),N("div",xE,[t[1]||(t[1]=N("span",{class:"stat-label"},"总距离",-1)),N("span",gE,ot(n.totalPoints>0?n.totalDistance.toFixed(2)+" KM":"-"),1)])]))}},vE=vn(_E,[["__scopeId","data-v-880e3571"]]),bE={class:"system-status"},SE={class:"sys-row dims"},ME={class:"sys-row dims"},yE={class:"sys-row dims"},EE={__name:"SystemStatus",props:{fps:Number},setup(n){const e=qe("Unknown GPU"),t=qe("Unknown CPU");function i(){try{const s=document.createElement("canvas"),r=s.getContext("webgl",{powerPreference:"high-performance"})||s.getContext("experimental-webgl");if(!r)return"Unknown GPU";const o=r.getExtension("WEBGL_debug_renderer_info");if(o){let a=r.getParameter(o.UNMASKED_RENDERER_WEBGL);if(a){const l=a.match(/^ANGLE \((.+)\)$/);if(l&&l[1]){const c=l[1].split(", ");c.length>1?a=c[1].trim():a=c[0]}return a=a.split("/")[0],a=a.replace(/ OpenGL Engine/gi,""),a=a.replace(/\s*\(.*?\)/g,""),a.trim()}}return"Generic GPU"}catch{return"Unknown GPU"}}return da(()=>{e.value=i();const s=navigator.hardwareConcurrency;s?t.value=`${s} Logical Cores`:t.value="Unknown Cores"}),(s,r)=>(ke(),Ze("div",bE,[N("div",SE,"FPS: "+ot(n.fps),1),N("div",ME,"CPU: "+ot(t.value),1),N("div",yE,"GPU: "+ot(e.value),1)]))}},TE=vn(EE,[["__scopeId","data-v-faf68956"]]),AE={key:0,class:"popup"},wE={key:0,class:"loading-small"},RE={class:"card-header"},CE={class:"time-group"},PE={class:"time-text"},DE={class:"date-row"},LE={class:"time-row"},IE={class:"timestamp"},UE={class:"timezone"},NE={key:0,class:"icon-type",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},FE={key:1,class:"icon-type",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},OE={class:"coord-section"},BE={class:"coord-row-combined"},kE={class:"coord-group"},zE={class:"coord-val"},VE={class:"coord-group"},HE={class:"coord-val"},GE={class:"grid-stats"},WE={class:"stat-box"},XE={class:"stat-content"},qE={class:"s-val"},YE={class:"stat-box"},$E={class:"stat-content"},jE={class:"s-val"},KE={class:"stat-box"},ZE={class:"stat-icon"},JE={class:"stat-content"},QE={class:"s-val"},e1={class:"stat-box"},t1={class:"stat-content"},n1={class:"s-val"},i1={__name:"InfoCard",props:{point:Object,loading:Boolean},setup(n){const e=n,t=ct(()=>{if(!e.point)return null;const i=e.point,s=Object.keys(i),r=T=>s.find(S=>T.test(S)),o=r(/^(latitude|lat)$/i),a=r(/^(longitude|long|lon|lng)$/i),l=r(/^(timestamp|time|date|created_at)$/i),c=r(/^(altitude|alt|elevation)$/i),u=r(/^(speed|velocity)$/i),f=r(/^(course|heading|bearing)$/i),d=r(/^(horizontalAccuracy|accuracy|hAcc)$/i);let h="--",x="--",v="";if(l){const T=i[l];let S;if(typeof T=="number"?T<1e9?S=new Date((T+978307200)*1e3):T<1e11?S=new Date(T*1e3):S=new Date(T):S=new Date(T),!isNaN(S.getTime())){const C=b=>b.toString().padStart(2,"0");h=`${S.getFullYear()}/${C(S.getMonth()+1)}/${C(S.getDate())}`,x=`${C(S.getHours())}:${C(S.getMinutes())}:${C(S.getSeconds())}.${S.getMilliseconds().toString().padStart(3,"0")}`;const M=-S.getTimezoneOffset(),L=M>=0?"+":"-",O=b=>b.toString().padStart(2,"0");v=`UTC${L}${O(Math.floor(Math.abs(M)/60))}:${O(Math.abs(M)%60)}`}}const m=d?parseFloat(i[d]):null,p=m!==null&&m<=65,R=p?"卫星":"网络";return{lat:o?parseFloat(i[o]).toFixed(7):"--",lon:a?parseFloat(i[a]).toFixed(7):"--",alt:c?Math.round(parseFloat(i[c])):"-",speed:u?(parseFloat(i[u])*3.6).toFixed(1):"-",course:f?Math.round(parseFloat(i[f])):0,acc:m?Math.round(m):"-",date:h,time:x,tz:v,type:p?"GPS":"Network",typeLabel:R}});return(i,s)=>(ke(),wn(Si,{name:"slide"},{default:Zn(()=>[n.point||n.loading?(ke(),Ze("div",AE,[n.loading&&!n.point?(ke(),Ze("div",wE,"加载数据中...")):t.value?(ke(),Ze("div",{key:1,class:wt(["info-card",{"content-updating":n.loading}])},[N("div",RE,[N("div",CE,[s[0]||(s[0]=N("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[N("circle",{cx:"12",cy:"12",r:"10"}),N("polyline",{points:"12 6 12 12 16 14"})],-1)),N("div",PE,[N("div",DE,ot(t.value.date),1),N("div",LE,[N("span",IE,ot(t.value.time),1),N("span",UE,ot(t.value.tz),1)])])]),N("div",{class:wt(["badge",t.value.type==="GPS"?"badge-gps":"badge-net"])},[t.value.type==="GPS"?(ke(),Ze("svg",NE,[...s[1]||(s[1]=[N("path",{d:"M13 7 9 3 5 7l4 4"},null,-1),N("path",{d:"m17 11 4 4-4 4-4-4"},null,-1),N("path",{d:"m8 12 4 4 6-6-4-4Z"},null,-1),N("path",{d:"m16 8 3-3"},null,-1),N("path",{d:"M9 15 6 18"},null,-1)])])):(ke(),Ze("svg",FE,[...s[2]||(s[2]=[N("path",{d:"M12 2c-4 0-8 3-8 7 0 5 4 8 8 8s8-3 8-8c0-4-4-7-8-7Z"},null,-1),N("path",{d:"M12 9v13"},null,-1),N("path",{d:"M8 22h8"},null,-1),N("circle",{cx:"12",cy:"6",r:"1",fill:"currentColor"},null,-1),N("path",{d:"M8.5 5.5c-1 1-1.5 2.5-1.5 4 0 2.5 2 4.5 5 4.5s5-2 5-4.5c0-1.5-.5-3-1.5-4"},null,-1)])])),hi(" "+ot(t.value.typeLabel),1)],2)]),N("div",OE,[N("div",BE,[N("div",kE,[s[3]||(s[3]=N("span",{class:"coord-label"},"纬度",-1)),N("span",zE,ot(t.value.lat),1)]),s[5]||(s[5]=N("div",{class:"divider"},null,-1)),N("div",VE,[s[4]||(s[4]=N("span",{class:"coord-label"},"经度",-1)),N("span",HE,ot(t.value.lon),1)])])]),N("div",GE,[N("div",WE,[s[8]||(s[8]=N("div",{class:"stat-icon"},[N("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[N("path",{d:"M3 20 L5 15 L7 18 L12 5 L17 18 L19 12 L21 20"})])],-1)),N("div",XE,[s[7]||(s[7]=N("span",{class:"s-label"},"海拔",-1)),N("span",qE,[hi(ot(t.value.alt),1),s[6]||(s[6]=N("small",null,"m",-1))])])]),N("div",YE,[s[11]||(s[11]=N("div",{class:"stat-icon"},[N("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[N("path",{d:"M22 12 A10 10 0 0 0 12 2 A10 10 0 0 0 2 12"}),N("path",{d:"M16.24 7.76l-2.12 2.12"}),N("line",{x1:"12",y1:"16",x2:"12",y2:"12"})])],-1)),N("div",$E,[s[10]||(s[10]=N("span",{class:"s-label"},"速度",-1)),N("span",jE,[hi(ot(t.value.speed),1),s[9]||(s[9]=N("small",null,"km/h",-1))])])]),N("div",KE,[N("div",ZE,[(ke(),Ze("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",style:In({transform:`rotate(${t.value.course}deg)`})},[...s[12]||(s[12]=[N("polygon",{points:"12 2 19 21 12 17 5 21 12 2"},null,-1)])],4))]),N("div",JE,[s[14]||(s[14]=N("span",{class:"s-label"},"航向",-1)),N("span",QE,[hi(ot(t.value.course),1),s[13]||(s[13]=N("small",null,"°",-1))])])]),N("div",e1,[s[17]||(s[17]=N("div",{class:"stat-icon"},[N("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[N("circle",{cx:"12",cy:"12",r:"10"}),N("circle",{cx:"12",cy:"12",r:"3"}),N("line",{x1:"12",y1:"2",x2:"12",y2:"4"}),N("line",{x1:"12",y1:"20",x2:"12",y2:"22"}),N("line",{x1:"2",y1:"12",x2:"4",y2:"12"}),N("line",{x1:"20",y1:"12",x2:"22",y2:"12"})])],-1)),N("div",t1,[s[16]||(s[16]=N("span",{class:"s-label"},"精度",-1)),N("span",n1,[hi("±"+ot(t.value.acc),1),s[15]||(s[15]=N("small",null,"m",-1))])])])])],2)):kt("",!0)])):kt("",!0)]),_:1}))}},s1=vn(i1,[["__scopeId","data-v-e599011e"]]),r1={class:"fab-container"},o1={class:"filter-tabs"},a1={class:"panel-header"},l1={class:"cal-nav"},c1={key:0,class:"cal-title"},u1={key:1,class:"cal-title"},f1={key:2,class:"cal-title"},d1={class:"panel-content custom-scroll"},h1={key:0,class:"year-grid"},p1=["onClick"],m1={key:1,class:"month-grid"},x1=["onClick"],g1={key:2,class:"calendar-body"},_1={class:"calendar-grid"},v1=["onMouseenter","onClick"],b1={__name:"DateFilter",props:{availableDates:Array,selectedFilter:Object,show:Boolean,hasFilter:Boolean},emits:["update:show","selectFilter"],setup(n,{emit:e}){const t=n,i=e,s=qe("day"),r=qe(new Date);zt(()=>t.availableDates,S=>{if(S&&S.length>0){const C=S[S.length-1];r.value=new Date(C)}},{immediate:!0});function o(S){S=new Date(Date.UTC(S.getFullYear(),S.getMonth(),S.getDate())),S.setUTCDate(S.getUTCDate()+4-(S.getUTCDay()||7));const C=new Date(Date.UTC(S.getUTCFullYear(),0,1)),M=Math.ceil(((S-C)/864e5+1)/7);return[S.getUTCFullYear(),M]}function a(S,C){const M=new Date(C,0,1+(S-1)*7),L=M.getDay(),O=M;return L<=4?O.setDate(M.getDate()-M.getDay()+1):O.setDate(M.getDate()+8-M.getDay()),O}const l=ct(()=>{const S=new Set;return t.availableDates&&t.availableDates.forEach(C=>S.add(C.substring(0,4))),S}),c=ct(()=>{const S=new Set;return t.availableDates&&t.availableDates.forEach(C=>S.add(C.substring(0,7))),S}),u=ct(()=>{const S=r.value.getFullYear(),C=Math.floor(S/10)*10,M=C+9;return`${C}-${M}`}),f=ct(()=>{const S=r.value.getFullYear(),C=Math.floor(S/10)*10,M=[];for(let L=-1;L<=10;L++){const O=C+L,b=String(O);M.push({val:O,str:b,hasData:l.value.has(b),selected:t.selectedFilter&&t.selectedFilter.type==="year"&&t.selectedFilter.value===b,isDecade:L>=0&&L<=9})}return M}),d=ct(()=>`${r.value.getFullYear()}年`),h=ct(()=>{const S=r.value.getFullYear(),C=[];for(let M=0;M<12;M++){const L=String(M+1).padStart(2,"0"),O=`${S}-${L}`;C.push({index:M,label:`${M+1}月`,val:O,hasData:c.value.has(O),selected:t.selectedFilter&&t.selectedFilter.type==="month"&&t.selectedFilter.value===O})}return C}),x=ct(()=>{const S=r.value.getFullYear(),C=r.value.getMonth()+1;return`${S}年${C}月`}),v=ct(()=>{const S=r.value.getFullYear(),C=r.value.getMonth(),M=new Date(S,C,1),L=new Date(S,C+1,0),O=[],b=M.getDay();for(let D=0;D<b;D++)O.push({id:`pad-${D}`,empty:!0});const _=L.getDate();for(let D=1;D<=_;D++){const I=`${S}-${String(C+1).padStart(2,"0")}-${String(D).padStart(2,"0")}`,z=t.availableDates.includes(I);let K=!1;if(t.selectedFilter){if(s.value==="day"&&t.selectedFilter.type==="day")K=t.selectedFilter.value===I;else if(s.value==="week"&&t.selectedFilter.type==="week"){const Q=new Date(I).getTime()/1e3;K=Q>=t.selectedFilter.start&&Q<=t.selectedFilter.end}}const[te,X]=o(new Date(S,C,D));O.push({id:I,day:D,dateStr:I,hasData:z,selected:K,weekId:`${te}-W${X}`})}return O});function m(S){const C=new Date(r.value);s.value==="year"?C.setFullYear(C.getFullYear()+S*10):s.value==="month"?C.setFullYear(C.getFullYear()+S):C.setMonth(C.getMonth()+S),r.value=C}function p(){i("update:show",!t.show)}const R=qe(null);function T(S,C){if(!S){i("selectFilter",null);return}let M=null;if(C==="year"){const L=parseInt(S.val),O=new Date(L,0,1),b=new Date(L,11,31,23,59,59);M={type:"year",value:S.val,label:`${L}年`,start:O.getTime()/1e3,end:b.getTime()/1e3}}else if(C==="month"){const[L,O]=S.val.split("-").map(Number),b=new Date(L,O-1,1),_=new Date(L,O,0,23,59,59);M={type:"month",value:S.val,label:`${L}年${O}月`,start:b.getTime()/1e3,end:_.getTime()/1e3}}else if(C==="week"){const L=new Date(S.dateStr),[O,b]=o(L),_=a(b,O),D=new Date(_);D.setDate(D.getDate()+6),D.setHours(23,59,59,999);const I=_.getMonth()+1,z=_.getDate(),K=D.getMonth()+1,te=D.getDate();M={type:"week",value:`${O}-W${b}`,label:`${O} 第${b}周 (${I}/${z}-${K}/${te})`,start:_.getTime()/1e3,end:D.getTime()/1e3}}else{const[L,O,b]=S.dateStr.split("-").map(Number),_=new Date(L,O-1,b,0,0,0),D=new Date(L,O-1,b,23,59,59);M={type:"day",value:S.dateStr,label:S.dateStr,start:_.getTime()/1e3,end:D.getTime()/1e3}}i("selectFilter",M)}return(S,C)=>(ke(),Ze("div",r1,[bt(Si,{name:"scale"},{default:Zn(()=>[n.show?(ke(),Ze("div",{key:0,class:"date-picker-panel",onClick:C[8]||(C[8]=Ht(()=>{},["stop"]))},[N("div",o1,[N("button",{class:wt({active:s.value==="day"}),onClick:C[0]||(C[0]=M=>s.value="day")},"日",2),N("button",{class:wt({active:s.value==="week"}),onClick:C[1]||(C[1]=M=>s.value="week")},"周",2),N("button",{class:wt({active:s.value==="month"}),onClick:C[2]||(C[2]=M=>s.value="month")},"月",2),N("button",{class:wt({active:s.value==="year"}),onClick:C[3]||(C[3]=M=>s.value="year")},"年",2)]),N("div",a1,[N("div",l1,[N("button",{onClick:C[4]||(C[4]=Ht(M=>m(-1),["stop"])),class:"nav-btn"},"<"),s.value==="year"?(ke(),Ze("span",c1,ot(u.value),1)):s.value==="month"?(ke(),Ze("span",u1,ot(d.value),1)):(ke(),Ze("span",f1,ot(x.value),1)),N("button",{onClick:C[5]||(C[5]=Ht(M=>m(1),["stop"])),class:"nav-btn"},">")]),n.selectedFilter?(ke(),Ze("span",{key:0,class:"clear-btn",onClick:C[6]||(C[6]=Ht(M=>T(null),["stop"]))},"显示全部")):kt("",!0)]),N("div",d1,[s.value==="year"?(ke(),Ze("div",h1,[(ke(!0),Ze(an,null,Ro(f.value,M=>(ke(),Ze("div",{key:M.val,class:wt(["year-cell",{"has-data":M.hasData,selected:M.selected,dim:!M.isDecade}]),onClick:L=>M.hasData?T(M,"year"):null},ot(M.val),11,p1))),128))])):s.value==="month"?(ke(),Ze("div",m1,[(ke(!0),Ze(an,null,Ro(h.value,M=>(ke(),Ze("div",{key:M.val,class:wt(["month-cell",{"has-data":M.hasData,selected:M.selected}]),onClick:L=>M.hasData?T(M,"month"):null},ot(M.label),11,x1))),128))])):(ke(),Ze("div",g1,[C[9]||(C[9]=N("div",{class:"weekdays"},[N("span",null,"日"),N("span",null,"一"),N("span",null,"二"),N("span",null,"三"),N("span",null,"四"),N("span",null,"五"),N("span",null,"六")],-1)),N("div",_1,[(ke(!0),Ze(an,null,Ro(v.value,M=>(ke(),Ze("div",{key:M.id,class:wt(["day-cell",{empty:M.empty,"has-data":M.hasData&&!M.empty,selected:M.selected,disabled:!M.empty&&!M.hasData,"week-hover":s.value==="week"&&!M.empty&&M.weekId===R.value}]),onMouseenter:L=>s.value==="week"&&!M.empty?R.value=M.weekId:null,onMouseleave:C[7]||(C[7]=L=>s.value==="week"?R.value=null:null),onClick:L=>!M.empty&&M.hasData?T(M,s.value):null},ot(M.day),43,v1))),128))])]))])])):kt("",!0)]),_:1}),N("button",{class:wt(["fab-btn",{active:n.show,"has-filter":n.hasFilter}]),onClick:Ht(p,["stop"])},[...C[10]||(C[10]=[P0('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-ce450cd4><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-v-ce450cd4></rect><line x1="16" y1="2" x2="16" y2="6" data-v-ce450cd4></line><line x1="8" y1="2" x2="8" y2="6" data-v-ce450cd4></line><line x1="3" y1="10" x2="21" y2="10" data-v-ce450cd4></line></svg>',1)])],2)]))}},S1=vn(b1,[["__scopeId","data-v-ce450cd4"]]),M1={class:"hex-input-row"},y1=["value"],E1={__name:"CustomColorPicker",props:{modelValue:{type:String,default:"#ffffff"}},emits:["update:modelValue","close"],setup(n,{emit:e}){const t=n,i=e,s=qe(0),r=qe(0),o=qe(100),a=qe(null),l=qe(null),c=qe(!1),u=qe(!1);function f(_){let D=0,I=0,z=0;_=_.replace("#",""),_.length===3?(D=parseInt(_[0]+_[0],16),I=parseInt(_[1]+_[1],16),z=parseInt(_[2]+_[2],16)):_.length===6&&(D=parseInt(_.substring(0,2),16),I=parseInt(_.substring(2,4),16),z=parseInt(_.substring(4,6),16)),D/=255,I/=255,z/=255;let K=Math.min(D,I,z),te=Math.max(D,I,z),X=te-K,Q=0,H=0,pe=0;return X==0?Q=0:te==D?Q=(I-z)/X%6:te==I?Q=(z-D)/X+2:Q=(D-I)/X+4,Q=Math.round(Q*60),Q<0&&(Q+=360),pe=te,H=te==0?0:X/te,{h:Q,s:H*100,v:pe*100}}function d(_,D,I){D/=100,I/=100;let z=I*D,K=z*(1-Math.abs(_/60%2-1)),te=I-z,X=0,Q=0,H=0;return 0<=_&&_<60?(X=z,Q=K,H=0):60<=_&&_<120?(X=K,Q=z,H=0):120<=_&&_<180?(X=0,Q=z,H=K):180<=_&&_<240?(X=0,Q=K,H=z):240<=_&&_<300?(X=K,Q=0,H=z):300<=_&&_<360&&(X=z,Q=0,H=K),X=Math.round((X+te)*255).toString(16).padStart(2,"0"),Q=Math.round((Q+te)*255).toString(16).padStart(2,"0"),H=Math.round((H+te)*255).toString(16).padStart(2,"0"),`#${X}${Q}${H}`}zt(()=>t.modelValue,_=>{const{h:D,s:I,v:z}=f(_);!c.value&&!u.value&&(s.value=D,r.value=I,o.value=z)},{immediate:!0});function h(){const _=d(s.value,r.value,o.value);i("update:modelValue",_)}function x(_){if(!a.value)return;const D=a.value.getBoundingClientRect();let I=_.clientX-D.left,z=_.clientY-D.top;I=Math.max(0,Math.min(I,D.width)),z=Math.max(0,Math.min(z,D.height)),r.value=I/D.width*100,o.value=100-z/D.height*100,h()}function v(_){c.value=!0,x(_),window.addEventListener("mousemove",m),window.addEventListener("mouseup",R)}function m(_){c.value&&x(_)}function p(){const _=D=>{D.stopPropagation()};window.addEventListener("click",_,{capture:!0,once:!0}),setTimeout(()=>{window.removeEventListener("click",_,{capture:!0})},50)}function R(){c.value=!1,window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",R),p()}function T(_){if(!l.value)return;const D=l.value.getBoundingClientRect();let I=_.clientX-D.left;I=Math.max(0,Math.min(I,D.width)),s.value=I/D.width*360,h()}function S(_){u.value=!0,T(_),window.addEventListener("mousemove",C),window.addEventListener("mouseup",M)}function C(_){u.value&&T(_)}function M(){u.value=!1,window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",M),p()}const L=ct(()=>d(s.value,100,100)),O=ct(()=>({left:`${r.value}%`,top:`${100-o.value}%`})),b=ct(()=>({left:`${s.value/360*100}%`}));return(_,D)=>(ke(),Ze("div",{class:"custom-picker",onClick:D[1]||(D[1]=Ht(()=>{},["stop"]))},[N("div",{class:"sv-panel",ref_key:"svPanel",ref:a,style:In({backgroundColor:L.value}),onMousedown:v},[D[2]||(D[2]=N("div",{class:"sv-white"},null,-1)),D[3]||(D[3]=N("div",{class:"sv-black"},null,-1)),N("div",{class:"sv-pointer",style:In(O.value)},null,4)],36),N("div",{class:"hue-slider-track",ref_key:"hueSlider",ref:l,onMousedown:S},[N("div",{class:"hue-pointer",style:In(b.value)},null,4)],544),N("div",M1,[D[4]||(D[4]=N("span",{class:"hash"},"#",-1)),N("input",{type:"text",value:n.modelValue.replace("#",""),onInput:D[0]||(D[0]=I=>i("update:modelValue","#"+I.target.value)),class:"hex-field",maxlength:"6"},null,40,y1),N("div",{class:"preview-color",style:In({backgroundColor:n.modelValue})},null,4)])]))}},T1=vn(E1,[["__scopeId","data-v-ef5d23ed"]]),A1={class:"fab-container-style"},w1={class:"style-menu"},R1={__name:"StyleFilter",props:{currentMode:{type:Number,default:0},show:Boolean,themeColor:{type:String,default:"#ffffff"}},emits:["update:show","changeMode","update:themeColor"],setup(n,{emit:e}){const t=n,i=e,s=qe(!1);zt(()=>t.show,l=>{l||(s.value=!1)});function r(){i("update:show",!t.show)}function o(){t.currentMode!==0&&i("changeMode",0),s.value=!s.value}function a(l){i("changeMode",l),s.value=!1}return(l,c)=>(ke(),Ze("div",A1,[bt(Si,{name:"scale"},{default:Zn(()=>[n.show?(ke(),Ze("div",{key:0,class:"style-panel-container",onClick:c[3]||(c[3]=Ht(()=>{},["stop"]))},[bt(Si,{name:"slide-fade"},{default:Zn(()=>[s.value&&n.currentMode===0?(ke(),wn(T1,{key:0,"model-value":n.themeColor,"onUpdate:modelValue":c[0]||(c[0]=u=>i("update:themeColor",u)),onClick:c[1]||(c[1]=Ht(()=>{},["stop"])),class:"picker-popup"},null,8,["model-value"])):kt("",!0)]),_:1}),N("div",w1,[N("div",{class:"style-option",onClick:o},[N("div",{class:wt(["circle-btn theme-btn-container",{active:n.currentMode===0}]),style:In({background:`linear-gradient(135deg, #000000, ${n.themeColor})`})},null,6),c[4]||(c[4]=N("span",{class:"style-label"},"单色渐变",-1))]),N("div",{class:"style-option",onClick:c[2]||(c[2]=u=>a(1))},[N("div",{class:wt(["circle-btn heat-btn",{active:n.currentMode===1}])},null,2),c[5]||(c[5]=N("span",{class:"style-label"},"热力图",-1))])])])):kt("",!0)]),_:1}),N("button",{class:wt(["fab-btn",{active:n.show}]),onClick:Ht(r,["stop"])},[...c[6]||(c[6]=[N("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[N("path",{d:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"})],-1)])],2)]))}},C1=vn(R1,[["__scopeId","data-v-db610171"]]),P1={class:"filter-body"},D1={class:"filter-row"},L1={class:"value-text"},I1={class:"slider-container"},U1={class:"value-text"},Td=9500/2401,N1={__name:"AltitudeFilter",props:{show:Boolean,modelValue:{type:Array,default:()=>[-1/0,1/0]}},emits:["update:show","update:modelValue"],setup(n,{emit:e}){const t=n,i=e,s=qe(0),r=qe(100);function o(c){if(c<=0)return-1/0;if(c>=100)return 1/0;if(c<=50){const u=(c-1)/49;return Math.round(-500+u*2e3)}else{const u=c-50;return Math.round(1500+Td*u*u)}}function a(c){if(c===-1/0||c===-999999)return 0;if(c===1/0||c===999999)return 100;if(c<=1500){const f=(Math.max(-500,c)+500)/2e3;return Math.max(1,1+f*49)}else{const u=Math.min(11e3,c),f=Math.sqrt((u-1500)/Td);return Math.min(99,50+f)}}function l(c){return c===-1/0||c===1/0?"不限":`${c}m`}return zt(()=>t.modelValue,c=>{c&&(s.value=a(c[0]),r.value=a(c[1]))},{immediate:!0}),zt([s,r],([c,u])=>{if(c>u){s.value!==a(t.modelValue[0])?s.value=u:r.value=c;return}const f=o(c),d=o(u);(f!==t.modelValue[0]||d!==t.modelValue[1])&&i("update:modelValue",[f,d])}),(c,u)=>(ke(),wn(Si,{name:"pop"},{default:Zn(()=>[n.show?(ke(),Ze("div",{key:0,class:"filter-popup",onClick:u[2]||(u[2]=Ht(()=>{},["stop"]))},[u[4]||(u[4]=N("div",{class:"filter-header"},[N("span",{class:"filter-title"},"海拔筛选")],-1)),N("div",P1,[N("div",D1,[N("span",L1,ot(l(n.modelValue[0])),1),N("div",I1,[u[3]||(u[3]=N("div",{class:"track-bg"},null,-1)),N("div",{class:"track-fill",style:In({left:s.value+"%",right:100-r.value+"%"})},null,4),qs(N("input",{type:"range","onUpdate:modelValue":u[0]||(u[0]=f=>s.value=f),min:"0",max:"100",step:"0.1",class:"thumb thumb-left"},null,512),[[jo,s.value,void 0,{number:!0}]]),qs(N("input",{type:"range","onUpdate:modelValue":u[1]||(u[1]=f=>r.value=f),min:"0",max:"100",step:"0.1",class:"thumb thumb-right"},null,512),[[jo,r.value,void 0,{number:!0}]])]),N("span",U1,ot(l(n.modelValue[1])),1)])])])):kt("",!0)]),_:1}))}},F1=vn(N1,[["__scopeId","data-v-c181bf89"]]),O1={class:"filter-body"},B1={class:"filter-row"},k1={class:"value-text"},z1={class:"slider-container"},V1={class:"value-text"},Ad=495/576,H1={__name:"SpeedFilter",props:{show:Boolean,modelValue:{type:Array,default:()=>[0,1/0]}},emits:["update:show","update:modelValue"],setup(n,{emit:e}){const t=n,i=e,s=qe(0),r=qe(100);function o(c,u){if(u&&c>=100||c>=100)return 1/0;let f;if(c<=5)f=c/50;else if(c<=20)f=.1+(c-5)*9.9/15;else if(c<=50)f=10+(c-20)*23/30;else if(c<=75)f=33+(c-50)*22/25;else{const d=c-75;f=55+Ad*d*d}return f<=10?Math.round(f*10)/10:Math.round(f)}function a(c){if(c===1/0)return 100;const u=Math.max(0,c);if(u<=.1)return u*50;if(u<=10)return 5+(u-.1)*15/9.9;if(u<=33)return 20+(u-10)*30/23;if(u<=55)return 50+(u-33)*25/22;{const f=Math.sqrt((u-55)/Ad);return Math.min(99,75+f)}}function l(c){return c===1/0?"不限":`${c} m/s`}return zt(()=>t.modelValue,c=>{c&&(s.value=a(c[0]),r.value=a(c[1]))},{immediate:!0}),zt([s,r],([c,u])=>{if(c>u){s.value!==a(t.modelValue[0])?r.value=c:s.value=u;return}const f=o(c,!1),d=o(u,!0);(f!==t.modelValue[0]||d!==t.modelValue[1])&&i("update:modelValue",[f,d])}),(c,u)=>(ke(),wn(Si,{name:"pop"},{default:Zn(()=>[n.show?(ke(),Ze("div",{key:0,class:"filter-popup",onClick:u[2]||(u[2]=Ht(()=>{},["stop"]))},[u[4]||(u[4]=N("div",{class:"filter-header"},[N("span",{class:"filter-title"},"速度筛选")],-1)),N("div",O1,[N("div",B1,[N("span",k1,ot(l(n.modelValue[0])),1),N("div",z1,[u[3]||(u[3]=N("div",{class:"track-bg"},null,-1)),N("div",{class:"track-fill",style:In({left:s.value+"%",right:100-r.value+"%"})},null,4),qs(N("input",{type:"range","onUpdate:modelValue":u[0]||(u[0]=f=>s.value=f),min:"0",max:"100",step:"0.1",class:"thumb thumb-left"},null,512),[[jo,s.value,void 0,{number:!0}]]),qs(N("input",{type:"range","onUpdate:modelValue":u[1]||(u[1]=f=>r.value=f),min:"0",max:"100",step:"0.1",class:"thumb thumb-right"},null,512),[[jo,r.value,void 0,{number:!0}]])]),N("span",V1,ot(l(n.modelValue[1])),1)])])])):kt("",!0)]),_:1}))}},G1=vn(H1,[["__scopeId","data-v-a2ca9b45"]]),W1={key:0,class:"spinner-circle"},X1={key:1,class:"error-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},q1={class:"loader-text"},Y1={__name:"LoadingSpinner",props:{visible:Boolean,text:String,isError:{type:Boolean,default:!1}},emits:["close"],setup(n,{emit:e}){const t=e;return(i,s)=>(ke(),wn(Si,{name:"fade"},{default:Zn(()=>[n.visible?(ke(),Ze("div",{key:0,class:wt(["loader-container",{"is-error":n.isError}]),onClick:s[0]||(s[0]=r=>n.isError&&t("close"))},[n.isError?(ke(),Ze("svg",X1,[...s[1]||(s[1]=[N("circle",{cx:"12",cy:"12",r:"10"},null,-1),N("line",{x1:"12",y1:"8",x2:"12",y2:"12"},null,-1),N("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"},null,-1)])])):(ke(),Ze("div",W1)),N("div",q1,ot(n.text||(n.isError?"发生错误":"加载中...")),1)],2)):kt("",!0)]),_:1}))}},$1=vn(Y1,[["__scopeId","data-v-fc1ee631"]]),j1={class:"card-content"},K1={class:"setting-item"},Z1={class:"switch"},J1={class:"setting-item",style:{"margin-top":"16px"}},Q1={class:"switch"},eT={__name:"SettingsModal",setup(n){const e=qc(),{showSystemInfo:t,syncZoomRotate:i,isSettingsOpen:s}=Gc(e);function r(){e.toggleSettingsModal()}return(o,a)=>(ke(),wn(Si,{name:"fade"},{default:Zn(()=>[St(s)?(ke(),Ze("div",{key:0,class:"settings-overlay",onClick:r},[N("div",{class:"settings-card",onClick:a[2]||(a[2]=Ht(()=>{},["stop"]))},[a[7]||(a[7]=N("div",{class:"card-header"},[N("h3",null,"设置")],-1)),N("div",j1,[N("div",K1,[a[4]||(a[4]=N("span",{class:"setting-label"},"显示debug信息",-1)),N("label",Z1,[qs(N("input",{type:"checkbox","onUpdate:modelValue":a[0]||(a[0]=l=>ut(t)?t.value=l:null)},null,512),[[Ku,St(t)]]),a[3]||(a[3]=N("span",{class:"slider round"},null,-1))])]),N("div",J1,[a[6]||(a[6]=N("span",{class:"setting-label"},"缩放跟随鼠标位置",-1)),N("label",Q1,[qs(N("input",{type:"checkbox","onUpdate:modelValue":a[1]||(a[1]=l=>ut(i)?i.value=l:null)},null,512),[[Ku,St(i)]]),a[5]||(a[5]=N("span",{class:"slider round"},null,-1))])])])])])):kt("",!0)]),_:1}))}},tT=vn(eT,[["__scopeId","data-v-56ca2fc1"]]),nT={class:"card-content"},iT={class:"section-group"},sT={class:"code-container"},rT=["title"],oT={key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},aT={key:1,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},lT=["innerHTML"],cT={class:"section-group"},uT={class:"data-table-container"},wd=`CREATE TABLE locations (
    ID        INTEGER PRIMARY KEY AUTOINCREMENT,
    Longitude DOUBLE,
    Latitude  DOUBLE,
    Altitude  DOUBLE,
    Accuracy  DOUBLE,
    Bearing   DOUBLE,
    Speed     DOUBLE,
    Type      VARCHAR,
    Time      VARCHAR,
    TimeStamp INTEGER
);`,fT={__name:"AboutModal",setup(n){const e=qc(),{isAboutOpen:t}=Gc(e),i=qe(!1);function s(u){let f=u;return["CREATE","TABLE","PRIMARY","KEY","AUTOINCREMENT","INSERT","INTO","VALUES"].forEach(x=>{const v=new RegExp(`\\b${x}\\b`,"g");f=f.replace(v,`<span class="sql-keyword">${x}</span>`)}),["INTEGER","DOUBLE","VARCHAR"].forEach(x=>{const v=new RegExp(`\\b${x}\\b`,"g");f=f.replace(v,`<span class="sql-type">${x}</span>`)}),f=f.replace(/([(),;])/g,'<span class="sql-punctuation">$1</span>'),f}const r=ct(()=>s(wd)),o=[{field:"ID",example:"1",comment:"INTEGER, 主键，自动递增"},{field:"Longitude",example:"116.397128",comment:"DOUBLE, 经度"},{field:"Latitude",example:"39.916668",comment:"DOUBLE, 纬度"},{field:"Altitude",example:"50.5",comment:"DOUBLE, 海拔 (米)"},{field:"Accuracy",example:"5.0",comment:"DOUBLE, 定位精度 (米)"},{field:"Bearing",example:"90.0",comment:"DOUBLE, 方向 (0-360度)"},{field:"Speed",example:"10.2",comment:"DOUBLE, 速度 (米/秒)"},{field:"Type",example:"'gps'",comment:"VARCHAR, 轨迹点类型 ('gps', 'network')"},{field:"Time",example:"'2022-11-25 17:48:48.916 GMT+08:00'",comment:"VARCHAR, 格式化后时间字符串"},{field:"TimeStamp",example:"1667577630237",comment:"INTEGER, 时间戳"}];function a(){e.toggleAboutModal()}async function l(u,f){try{await navigator.clipboard.writeText(u),f.value=!0,setTimeout(()=>{f.value=!1},2e3)}catch(d){console.error("Failed to copy: ",d)}}function c(){l(wd,i)}return(u,f)=>(ke(),wn(Si,{name:"fade"},{default:Zn(()=>[St(t)?(ke(),Ze("div",{key:0,class:"about-overlay",onClick:a},[N("div",{class:"about-card",onClick:f[0]||(f[0]=Ht(()=>{},["stop"]))},[f[12]||(f[12]=N("div",{class:"card-header"},[N("h3",null,"关于")],-1)),N("div",nT,[f[8]||(f[8]=N("div",{class:"section-group"},[N("div",{class:"app-info"},[N("div",{class:"app-logo"},[N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:"48",height:"48"},[N("circle",{cx:"32",cy:"32",r:"30",fill:"none",stroke:"rgba(255,255,255,0.2)","stroke-width":"2"}),N("path",{d:"M32 2 A 30 30 0 0 1 32 62",fill:"none",stroke:"rgba(255,255,255,0.1)","stroke-width":"1.5"}),N("path",{d:"M2 32 A 30 30 0 0 1 62 32",fill:"none",stroke:"rgba(255,255,255,0.1)","stroke-width":"1.5"}),N("ellipse",{cx:"32",cy:"32",rx:"30",ry:"12",fill:"none",stroke:"rgba(255,255,255,0.1)","stroke-width":"1.5"}),N("path",{d:"M 14 48 C 20 55, 30 50, 40 32 S 54 12, 52 14",fill:"none",stroke:"#0a84ff","stroke-width":"3","stroke-linecap":"round"}),N("circle",{cx:"52",cy:"14",r:"3",fill:"#fff"})])]),N("div",{class:"app-meta"},[N("h4",null,[hi("PathView "),N("span",{class:"version-tag"},"v0.0.1")]),N("p",null,"轨迹可视化工具")])]),N("div",{class:"desc-block"},[N("p",null,"支持拖拽 SQLite 数据库文件直接查看轨迹数据。内置平滑渲染、密度热力图及多维度筛选功能。")])],-1)),f[9]||(f[9]=N("hr",{class:"divider"},null,-1)),N("div",iT,[f[3]||(f[3]=N("h4",null,"数据库表结构 (DDL)",-1)),f[4]||(f[4]=N("p",{class:"sub-text"},[hi("请确保您的 SQLite 数据库包含名为 "),N("code",null,"locations"),hi(" 的表，且结构兼容如下定义：")],-1)),N("div",sT,[N("button",{class:wt(["copy-btn",{copied:u.copied}]),onClick:c,title:u.copied?"已复制":"点击复制"},[u.copied?(ke(),Ze("svg",aT,[...f[2]||(f[2]=[N("polyline",{points:"20 6 9 17 4 12"},null,-1)])])):(ke(),Ze("svg",oT,[...f[1]||(f[1]=[N("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},null,-1),N("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},null,-1)])]))],10,rT),N("pre",{innerHTML:r.value},null,8,lT)])]),f[10]||(f[10]=N("hr",{class:"divider"},null,-1)),N("div",cT,[f[6]||(f[6]=N("h4",null,"数据示例",-1)),f[7]||(f[7]=N("p",{class:"sub-text"},"一个标准的数据行结构可能如下所示：",-1)),N("div",uT,[N("table",null,[f[5]||(f[5]=N("thead",null,[N("tr",null,[N("th",null,"字段名称"),N("th",null,"示例"),N("th",null,"注释")])],-1)),N("tbody",null,[(ke(),Ze(an,null,Ro(o,(d,h)=>N("tr",{key:h},[N("td",null,ot(d.field),1),N("td",null,ot(d.example),1),N("td",null,ot(d.comment),1)])),64))])])])]),f[11]||(f[11]=N("div",{class:"card-footer"},[N("p",null,"更多功能开发中...")],-1))])])])):kt("",!0)]),_:1}))}},dT=vn(fT,[["__scopeId","data-v-73bd77b0"]]),hT={key:0,class:"ui-overlay"},pT={key:0},mT={class:"settings-btn-container"},xT={class:"about-btn-container"},gT={key:3,class:"alt-btn-container"},_T={key:4,class:"speed-btn-container"},vT={__name:"HomeView",setup(n){const e=qe(null),t=qc(),{showSystemInfo:i,vizMode:s,themeColor:r,isSettingsOpen:o,isAboutOpen:a,altitudeRange:l,speedLimit:c,syncZoomRotate:u}=Gc(t),f=qe(!1),d=qe(!1),h=qe(""),x=qe(""),v=qe(null),m=qe(0),p=qe(0),R=qe(0),T=qe([]),S=qe(null),C=qe(!1),M=qe(!1),L=qe(!1),O=qe(!1),b=ct(()=>l.value[0]!==-1/0||l.value[1]!==1/0),_=ct(()=>c.value[0]!==0||c.value[1]!==1/0),D=ct(()=>S.value!==null);function I({count:w,totalDistance:P,availableDates:F}){m.value=w,p.value=P,F&&(T.value=F),S.value=null}function z(w){f.value=w}function K(w){d.value=w}let te=null;function X(w){if(!w){h.value="",te&&clearTimeout(te);return}console.error("Map Error:",w);let P=w;w.includes("file is not a database")||w.includes("unsupported file format")?P="无法识别的文件格式：请上传有效的 SQLite 数据库":w.includes("Point not found")?P="未找到指定的数据点":P=w||"发生未知错误",h.value=P,f.value=!1,te&&clearTimeout(te),te=setTimeout(()=>{h.value="",te=null},3e3)}function Q(w){x.value=w}function H(w){v.value=w}function pe(w){R.value=w}function me(w){w.preventDefault();const P=w.dataTransfer.files[0];if(!P)return;h.value="";const F=new FileReader;F.onload=E=>{const q=E.target.result;e.value&&e.value.loadFile(q)},F.onerror=()=>{h.value="文件读取失败",f.value=!1},F.readAsArrayBuffer(P)}function ue(w){w.preventDefault()}function Se(w){S.value=w,x.value=w?`筛选中: ${w.label}`:"加载中..."}function Be(w){t.setVizMode(w)}function Ue(){C.value=!1,M.value=!1,L.value=!1,O.value=!1}function De(){C.value=!1,M.value=!1,o.value&&t.toggleSettingsModal(),a.value&&t.toggleAboutModal(),L.value=!1,O.value=!1}function Z(){o.value||De(),t.toggleSettingsModal()}function U(){a.value||De(),t.toggleAboutModal()}function ne(w){w&&De(),M.value=w}function ae(w){w&&De(),C.value=w}function re(w){w&&De(),L.value=w}function _e(w){w&&De(),O.value=w}return(w,P)=>(ke(),Ze("div",{class:"app-container",onDrop:me,onDragover:ue,onClick:Ue},[bt(dE,{ref_key:"pathMapRef",ref:e,"filter-range":S.value,"viz-mode":St(s),"theme-color":St(r),"altitude-range":St(l),"speed-limit":St(c),"enable-zoom-rotate":St(u),onLoaded:I,onLoading:z,onDetailsLoading:K,onError:X,onStatus:Q,onPointSelected:H,onFps:pe},null,8,["filter-range","viz-mode","theme-color","altitude-range","speed-limit","enable-zoom-rotate"]),!f.value&&x.value&&!h.value?(ke(),Ze("div",hT,[x.value?(ke(),Ze("p",pT,ot(x.value),1)):kt("",!0)])):kt("",!0),bt($1,{visible:f.value||!!h.value,text:h.value||x.value,"is-error":!!h.value,onClose:P[0]||(P[0]=F=>h.value="")},null,8,["visible","text","is-error"]),bt(vE,{"total-points":m.value,"total-distance":p.value},null,8,["total-points","total-distance"]),St(i)?(ke(),wn(TE,{key:1,fps:R.value},null,8,["fps"])):kt("",!0),bt(s1,{point:v.value,loading:d.value},null,8,["point","loading"]),bt(tT),bt(dT),N("div",mT,[N("button",{class:wt(["fab-btn",{active:St(o)}]),onClick:Ht(Z,["stop"])},[...P[6]||(P[6]=[N("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[N("circle",{cx:"12",cy:"12",r:"3"}),N("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})],-1)])],2)]),N("div",xT,[N("button",{class:wt(["fab-btn about-btn",{active:St(a)}]),onClick:Ht(U,["stop"])},[...P[7]||(P[7]=[N("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[N("circle",{cx:"12",cy:"12",r:"10"}),N("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),N("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1)])],2)]),m.value>0?(ke(),wn(C1,{key:2,show:M.value,"onUpdate:show":ne,"current-mode":St(s),"theme-color":St(r),"onUpdate:themeColor":P[1]||(P[1]=F=>ut(r)?r.value=F:null),onChangeMode:Be},null,8,["show","current-mode","theme-color"])):kt("",!0),m.value>0?(ke(),Ze("div",gT,[N("button",{class:wt(["fab-btn",{active:L.value,"has-filter":b.value}]),onClick:P[2]||(P[2]=Ht(F=>re(!L.value),["stop"]))},[...P[8]||(P[8]=[N("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[N("path",{d:"M3 20 L5 15 L7 18 L12 5 L17 18 L19 12 L21 20"})],-1)])],2)])):kt("",!0),bt(F1,{show:L.value,"onUpdate:show":re,modelValue:St(l),"onUpdate:modelValue":P[3]||(P[3]=F=>ut(l)?l.value=F:null)},null,8,["show","modelValue"]),m.value>0?(ke(),Ze("div",_T,[N("button",{class:wt(["fab-btn",{active:O.value,"has-filter":_.value}]),onClick:P[4]||(P[4]=Ht(F=>_e(!O.value),["stop"]))},[...P[9]||(P[9]=[N("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[N("path",{d:"M22 12 A10 10 0 0 0 12 2 A10 10 0 0 0 2 12"}),N("path",{d:"M16.24 7.76l-2.12 2.12"}),N("line",{x1:"12",y1:"16",x2:"12",y2:"12"})],-1)])],2)])):kt("",!0),bt(G1,{show:O.value,"onUpdate:show":_e,modelValue:St(c),"onUpdate:modelValue":P[5]||(P[5]=F=>ut(c)?c.value=F:null)},null,8,["show","modelValue"]),m.value>0||T.value.length>0?(ke(),wn(S1,{key:5,"available-dates":T.value,"selected-filter":S.value,show:C.value,"onUpdate:show":ae,onSelectFilter:Se,"has-filter":D.value},null,8,["available-dates","selected-filter","show","has-filter"])):kt("",!0)],32))}},bT=vn(vT,[["__scopeId","data-v-a574562d"]]),ST=Dg({history:ug("/pathView/"),routes:[{path:"/",name:"home",component:bT}]}),ou=gx(Lg);ou.use(bx());ou.use(ST);ou.mount("#app");
