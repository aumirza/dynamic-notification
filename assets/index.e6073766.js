(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var F,u,te,x,B,I={},ne=[],he=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(e,_){for(var t in _)e[t]=_[t];return e}function oe(e){var _=e.parentNode;_&&_.removeChild(e)}function ve(e,_,t){var r,i,o,l={};for(o in _)o=="key"?r=_[o]:o=="ref"?i=_[o]:l[o]=_[o];if(arguments.length>2&&(l.children=arguments.length>3?F.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return L(e,l,r,i,null)}function L(e,_,t,r,i){var o={type:e,props:_,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++te:i};return i==null&&u.vnode!=null&&u.vnode(o),o}function C(e){return e.children}function P(e,_){this.props=e,this.context=_}function H(e,_){if(_==null)return e.__?H(e.__,e.__.__k.indexOf(e)+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?H(e):null}function re(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return re(e)}}function R(e){(!e.__d&&(e.__d=!0)&&x.push(e)&&!U.__r++||B!==u.debounceRendering)&&((B=u.debounceRendering)||setTimeout)(U)}function U(){for(var e;U.__r=x.length;)e=x.sort(function(_,t){return _.__v.__b-t.__v.__b}),x=[],e.some(function(_){var t,r,i,o,l,f;_.__d&&(l=(o=(t=_).__v).__e,(f=t.__P)&&(r=[],(i=k({},o)).__v=o.__v+1,V(f,o,i,t.__n,f.ownerSVGElement!==void 0,o.__h!=null?[l]:null,r,l==null?H(o):l,o.__h),ue(r,o),o.__e!=l&&re(o)))})}function ie(e,_,t,r,i,o,l,f,s,p){var n,h,a,c,d,N,v,m=r&&r.__k||ne,b=m.length;for(t.__k=[],n=0;n<_.length;n++)if((c=t.__k[n]=(c=_[n])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?L(null,c,null,null,c):Array.isArray(c)?L(C,{children:c},null,null,null):c.__b>0?L(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null){if(c.__=t,c.__b=t.__b+1,(a=m[n])===null||a&&c.key==a.key&&c.type===a.type)m[n]=void 0;else for(h=0;h<b;h++){if((a=m[h])&&c.key==a.key&&c.type===a.type){m[h]=void 0;break}a=null}V(e,c,a=a||I,i,o,l,f,s,p),d=c.__e,(h=c.ref)&&a.ref!=h&&(v||(v=[]),a.ref&&v.push(a.ref,null,c),v.push(h,c.__c||d,c)),d!=null?(N==null&&(N=d),typeof c.type=="function"&&c.__k===a.__k?c.__d=s=le(c,s,e):s=ce(e,c,a,m,d,s),typeof t.type=="function"&&(t.__d=s)):s&&a.__e==s&&s.parentNode!=e&&(s=H(a))}for(t.__e=N,n=b;n--;)m[n]!=null&&(typeof t.type=="function"&&m[n].__e!=null&&m[n].__e==t.__d&&(t.__d=H(r,n+1)),se(m[n],m[n]));if(v)for(n=0;n<v.length;n++)fe(v[n],v[++n],v[++n])}function le(e,_,t){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,_=typeof r.type=="function"?le(r,_,t):ce(t,r,r,i,r.__e,_));return _}function ce(e,_,t,r,i,o){var l,f,s;if(_.__d!==void 0)l=_.__d,_.__d=void 0;else if(t==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),l=null;else{for(f=o,s=0;(f=f.nextSibling)&&s<r.length;s+=2)if(f==i)break e;e.insertBefore(i,o),l=o}return l!==void 0?l:i.nextSibling}function ye(e,_,t,r,i){var o;for(o in t)o==="children"||o==="key"||o in _||D(e,o,null,t[o],r);for(o in _)i&&typeof _[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===_[o]||D(e,o,_[o],t[o],r)}function Y(e,_,t){_[0]==="-"?e.setProperty(_,t):e[_]=t==null?"":typeof t!="number"||he.test(_)?t:t+"px"}function D(e,_,t,r,i){var o;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)t&&_ in t||Y(e.style,_,"");if(t)for(_ in t)r&&t[_]===r[_]||Y(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")o=_!==(_=_.replace(/Capture$/,"")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+o]=t,t?r||e.addEventListener(_,o?z:j,o):e.removeEventListener(_,o?z:j,o);else if(_!=="dangerouslySetInnerHTML"){if(i)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_ in e)try{e[_]=t==null?"":t;break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||_[0]==="a"&&_[1]==="r")?e.setAttribute(_,t):e.removeAttribute(_))}}function j(e){this.l[e.type+!1](u.event?u.event(e):e)}function z(e){this.l[e.type+!0](u.event?u.event(e):e)}function V(e,_,t,r,i,o,l,f,s){var p,n,h,a,c,d,N,v,m,b,$,q,w,g=_.type;if(_.constructor!==void 0)return null;t.__h!=null&&(s=t.__h,f=_.__e=t.__e,_.__h=null,o=[f]),(p=u.__b)&&p(_);try{e:if(typeof g=="function"){if(v=_.props,m=(p=g.contextType)&&r[p.__c],b=p?m?m.props.value:p.__:r,t.__c?N=(n=_.__c=t.__c).__=n.__E:("prototype"in g&&g.prototype.render?_.__c=n=new g(v,b):(_.__c=n=new P(v,b),n.constructor=g,n.render=ge),m&&m.sub(n),n.props=v,n.state||(n.state={}),n.context=b,n.__n=r,h=n.__d=!0,n.__h=[]),n.__s==null&&(n.__s=n.state),g.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=k({},n.__s)),k(n.__s,g.getDerivedStateFromProps(v,n.__s))),a=n.props,c=n.state,h)g.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(g.getDerivedStateFromProps==null&&v!==a&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,b),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,b)===!1||_.__v===t.__v){n.props=v,n.state=n.__s,_.__v!==t.__v&&(n.__d=!1),n.__v=_,_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(S){S&&(S.__=_)}),n.__h.length&&l.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,b),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(a,c,d)})}if(n.context=b,n.props=v,n.__v=_,n.__P=e,$=u.__r,q=0,"prototype"in g&&g.prototype.render)n.state=n.__s,n.__d=!1,$&&$(_),p=n.render(n.props,n.state,n.context);else do n.__d=!1,$&&$(_),p=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++q<25);n.state=n.__s,n.getChildContext!=null&&(r=k(k({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(d=n.getSnapshotBeforeUpdate(a,c)),w=p!=null&&p.type===C&&p.key==null?p.props.children:p,ie(e,Array.isArray(w)?w:[w],_,t,r,i,o,l,f,s),n.base=_.__e,_.__h=null,n.__h.length&&l.push(n),N&&(n.__E=n.__=null),n.__e=!1}else o==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=me(t.__e,_,t,r,i,o,l,s);(p=u.diffed)&&p(_)}catch(S){_.__v=null,(s||o!=null)&&(_.__e=f,_.__h=!!s,o[o.indexOf(f)]=null),u.__e(S,_,t)}}function ue(e,_){u.__c&&u.__c(_,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(r){r.call(t)})}catch(r){u.__e(r,t.__v)}})}function me(e,_,t,r,i,o,l,f){var s,p,n,h=t.props,a=_.props,c=_.type,d=0;if(c==="svg"&&(i=!0),o!=null){for(;d<o.length;d++)if((s=o[d])&&"setAttribute"in s==!!c&&(c?s.localName===c:s.nodeType===3)){e=s,o[d]=null;break}}if(e==null){if(c===null)return document.createTextNode(a);e=i?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,a.is&&a),o=null,f=!1}if(c===null)h===a||f&&e.data===a||(e.data=a);else{if(o=o&&F.call(e.childNodes),p=(h=t.props||I).dangerouslySetInnerHTML,n=a.dangerouslySetInnerHTML,!f){if(o!=null)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(n||p)&&(n&&(p&&n.__html==p.__html||n.__html===e.innerHTML)||(e.innerHTML=n&&n.__html||""))}if(ye(e,a,h,i,f),n)_.__k=[];else if(d=_.props.children,ie(e,Array.isArray(d)?d:[d],_,t,r,i&&c!=="foreignObject",o,l,o?o[0]:t.__k&&H(t,0),f),o!=null)for(d=o.length;d--;)o[d]!=null&&oe(o[d]);f||("value"in a&&(d=a.value)!==void 0&&(d!==e.value||c==="progress"&&!d||c==="option"&&d!==h.value)&&D(e,"value",d,h.value,!1),"checked"in a&&(d=a.checked)!==void 0&&d!==e.checked&&D(e,"checked",d,h.checked,!1))}return e}function fe(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(r){u.__e(r,t)}}function se(e,_,t){var r,i;if(u.unmount&&u.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||fe(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){u.__e(o,_)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&se(r[i],_,typeof e.type!="function");t||e.__e==null||oe(e.__e),e.__=e.__e=e.__d=void 0}function ge(e,_,t){return this.constructor(e,t)}function be(e,_,t){var r,i,o;u.__&&u.__(e,_),i=(r=typeof t=="function")?null:t&&t.__k||_.__k,o=[],V(_,e=(!r&&t||_).__k=ve(C,null,[e]),i||I,I,_.ownerSVGElement!==void 0,!r&&t?[t]:i?null:_.firstChild?F.call(_.childNodes):null,o,!r&&t?t:i?i.__e:_.firstChild,r),ue(o,e)}F=ne.slice,u={__e:function(e,_,t,r){for(var i,o,l;_=_.__;)if((i=_.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),l=i.__d),l)return i.__E=i}catch(f){e=f}throw e}},te=0,P.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},t),this.props)),e&&k(t,e),e!=null&&this.__v&&(_&&this.__h.push(_),R(this))},P.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),R(this))},P.prototype.render=C,x=[],U.__r=0;var ae,y,M,G,O=0,de=[],A=[],K=u.__b,J=u.__r,Q=u.diffed,X=u.__c,Z=u.unmount;function ke(e,_){u.__h&&u.__h(y,e,O||_),O=0;var t=y.__H||(y.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:A}),t.__[e]}function ee(e){return O=1,Ne(pe,e)}function Ne(e,_,t){var r=ke(ae++,2);if(r.t=e,!r.__c&&(r.__=[t?t(_):pe(void 0,_),function(o){var l=r.__N?r.__N[0]:r.__[0],f=r.t(l,o);l!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){y.u=!0;var i=y.shouldComponentUpdate;y.shouldComponentUpdate=function(o,l,f){if(!r.__c.__H)return!0;var s=r.__c.__H.__.filter(function(n){return n.__c});if(s.every(function(n){return!n.__N}))return!i||i.call(this,o,l,f);var p=!1;return s.forEach(function(n){if(n.__N){var h=n.__[0];n.__=n.__N,n.__N=void 0,h!==n.__[0]&&(p=!0)}}),!!p&&(!i||i.call(this,o,l,f))}}return r.__N||r.__}function He(){for(var e;e=de.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(T),e.__H.__h.forEach(W),e.__H.__h=[]}catch(_){e.__H.__h=[],u.__e(_,e.__v)}}u.__b=function(e){typeof e.type!="function"||e.o||e.type===C?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),y=null,K&&K(e)},u.__r=function(e){J&&J(e),ae=0;var _=(y=e.__c).__H;_&&(M===y?(_.__h=[],y.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=A,t.__N=t.i=void 0})):(_.__h.forEach(T),_.__h.forEach(W),_.__h=[])),M=y},u.diffed=function(e){Q&&Q(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(de.push(_)!==1&&G===u.requestAnimationFrame||((G=u.requestAnimationFrame)||$e)(He)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==A&&(t.__=t.__V),t.i=void 0,t.__V=A})),M=y=null},u.__c=function(e,_){_.some(function(t){try{t.__h.forEach(T),t.__h=t.__h.filter(function(r){return!r.__||W(r)})}catch(r){_.some(function(i){i.__h&&(i.__h=[])}),_=[],u.__e(r,t.__v)}}),X&&X(e,_)},u.unmount=function(e){Z&&Z(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{T(r)}catch(i){_=i}}),t.__H=void 0,_&&u.__e(_,t.__v))};var _e=typeof requestAnimationFrame=="function";function $e(e){var _,t=function(){clearTimeout(r),_e&&cancelAnimationFrame(_),setTimeout(e)},r=setTimeout(t,100);_e&&(_=requestAnimationFrame(t))}function T(e){var _=y,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),y=_}function W(e){var _=y;e.__c=e.__(),y=_}function pe(e,_){return typeof _=="function"?_(e):_}var Ee=0;function E(e,_,t,r,i){var o,l,f={};for(l in _)l=="ref"?o=_[l]:f[l]=_[l];var s={type:e,props:f,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ee,__source:i,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(l in o)f[l]===void 0&&(f[l]=o[l]);return u.vnode&&u.vnode(s),s}function xe(){const[e,_]=ee(0),[t,r]=ee(!1);let i=null,o=null;const l=()=>{i&&clearInterval(i),o&&o.close(),r(!1),new Notification("You have been logged out",{body:"You have been successfully logged out",tag:"logout"}),document.removeEventListener("visibilitychange",s),alert("You have been logged out")},f=()=>{r(!0),Notification.requestPermission().then(p=>{p==="granted"&&(console.log("Notification permission granted."),new Notification("notification with Notification API",{body:"This is the body text of the notification."}))}),alert("logged in"),document.addEventListener("visibilitychange",s)},s=p=>{document.visibilityState==="visible"?(i&&clearInterval(i),o&&o.close(),_(()=>0)):(_(()=>15),i=setInterval(()=>{_(n=>(o=new Notification("inactivity",{body:`You have been inactive for ${n} seconds`,tag:"notify-inactivity"}),console.log(n,"timeleft"),n<=0&&l(),n-1))},1e3))};return E("div",{children:[E("h1",{children:["Logged ",t?"In":"Out"]}),E("button",{onClick:f,children:"Login"}),E("button",{onClick:l,children:"Logout"})]})}be(E(xe,{}),document.getElementById("app"));
