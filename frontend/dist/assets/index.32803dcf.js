(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function x(){}function I(e){return e()}function q(){return Object.create(null)}function w(e){e.forEach(I)}function M(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let E;function D(e,t){return E||(E=document.createElement("a")),E.href=t,e===E.href}function H(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function J(e,t,n){e.insertBefore(t,n||null)}function F(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function K(e){return document.createTextNode(e)}function A(){return K(" ")}function N(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Q(e){return Array.from(e.childNodes)}function R(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t){e.value=t==null?"":t}let P;function v(e){P=e}const y=[],T=[],L=[],B=[],U=Promise.resolve();let S=!1;function V(){S||(S=!0,U.then(W))}function C(e){L.push(e)}const O=new Set;let g=0;function W(){if(g!==0)return;const e=P;do{try{for(;g<y.length;){const t=y[g];g++,v(t),X(t.$$)}}catch(t){throw y.length=0,g=0,t}for(v(null),y.length=0,g=0;T.length;)T.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];O.has(n)||(O.add(n),n())}L.length=0}while(y.length);for(;B.length;)B.pop()();S=!1,O.clear(),v(e)}function X(e){if(e.fragment!==null){e.update(),w(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const Y=new Set;function Z(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function ee(e,t,n,i){const{fragment:r,after_update:l}=e.$$;r&&r.m(t,n),i||C(()=>{const u=e.$$.on_mount.map(I).filter(M);e.$$.on_destroy?e.$$.on_destroy.push(...u):w(u),e.$$.on_mount=[]}),l.forEach(C)}function te(e,t){const n=e.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(e,t){e.$$.dirty[0]===-1&&(y.push(e),V(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(e,t,n,i,r,l,u,m=[-1]){const s=P;v(e);const o=e.$$={fragment:null,ctx:[],props:l,update:x,not_equal:r,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:q(),dirty:m,skip_bound:!1,root:t.target||s.$$.root};u&&u(o.root);let b=!1;if(o.ctx=n?n(e,t.props||{},(c,$,...d)=>{const _=d.length?d[0]:$;return o.ctx&&r(o.ctx[c],o.ctx[c]=_)&&(!o.skip_bound&&o.bound[c]&&o.bound[c](_),b&&ne(e,c)),$}):[],o.update(),b=!0,w(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){const c=Q(t.target);o.fragment&&o.fragment.l(c),c.forEach(F)}else o.fragment&&o.fragment.c();t.intro&&Z(e.$$.fragment),ee(e,t.target,t.anchor,t.customElement),W()}v(s)}class oe{$destroy(){te(this,1),this.$destroy=x}$on(t,n){if(!M(n))return x;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!H(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const le="/assets/logo-universal.f9dae61b.png";function ie(e){return window.go.main.App.Greet(e)}function se(){return window.go.main.App.Start()}function ue(e){let t,n,i,r,l,u,m,s,o,b,c,$,d,_,j;return{c(){t=h("main"),n=h("img"),r=A(),l=h("div"),u=K(e[0]),m=A(),s=h("div"),o=h("input"),b=A(),c=h("button"),c.textContent="Greet",$=A(),d=h("button"),d.textContent="Play",f(n,"alt","Wails logo"),f(n,"id","logo"),D(n.src,i=le)||f(n,"src",i),f(n,"class","svelte-140lxdh"),f(l,"class","result svelte-140lxdh"),f(l,"id","result"),f(o,"autocomplete","off"),f(o,"class","input svelte-140lxdh"),f(o,"id","name"),f(o,"type","text"),f(c,"class","btn svelte-140lxdh"),f(d,"class","btn svelte-140lxdh"),f(s,"class","input-box svelte-140lxdh"),f(s,"id","input")},m(p,k){J(p,t,k),a(t,n),a(t,r),a(t,l),a(l,u),a(t,m),a(t,s),a(s,o),G(o,e[1]),a(s,b),a(s,c),a(s,$),a(s,d),_||(j=[N(o,"input",e[4]),N(c,"click",e[2]),N(d,"click",e[3])],_=!0)},p(p,[k]){k&1&&R(u,p[0]),k&2&&o.value!==p[1]&&G(o,p[1])},i:x,o:x,d(p){p&&F(t),_=!1,w(j)}}}function ce(e,t,n){let i="Please enter your name below \u{1F447}",r;function l(){ie(r).then(s=>n(0,i=s))}function u(){se()}function m(){r=this.value,n(1,r)}return[i,r,l,u,m]}class fe extends oe{constructor(t){super(),re(this,t,ce,ue,z,{})}}new fe({target:document.getElementById("app")});
