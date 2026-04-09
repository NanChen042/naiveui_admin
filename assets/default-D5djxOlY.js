import{A as e,B as t,C as n,F as r,G as i,Ht as a,J as o,Lt as s,Nt as c,O as l,Q as u,R as d,S as f,T as p,Ut as m,V as h,W as g,Wt as _,_t as v,at as y,b,et as x,gt as S,ht as C,j as w,jt as T,k as E,l as D,m as O,mt as k,n as ee,o as A,ot as j,p as M,rt as N,s as P,t as te,tt as F,w as I,x as L,zt as R}from"./vue.runtime.esm-bundler-D_ATJLwM.js";import{Ct as z,Dt as ne,Et as B,G as V,J as re,Ot as ie,Q as H,R as ae,Tt as U,U as oe,W,X as se,Z as ce,a as le,bt as G,i as K,n as q,o as ue,rt as de,wt as J,xt as Y}from"./light-CkuL5o25.js";import{f as X,g as Z,h as fe,i as pe,l as me,m as Q,u as he}from"./light-gcvVC2vE.js";import{A as ge,j as _e}from"./_common-Dw5diFPD.js";import{A as ve,C as ye,D as be,E as xe,F as Se,O as Ce,P as we,R as Te,S as Ee,T as De,a as Oe,b as ke,g as Ae,h as je,j as Me,k as Ne,m as Pe,o as Fe,v as Ie,w as Le,x as Re}from"./light-ziahGn9C.js";import{C as ze,E as Be,T as Ve,b as He,c as Ue,f as We,g as Ge,h as Ke,m as qe,n as Je,r as $,v as Ye,x as Xe,y as Ze}from"./request-gDbOFxdk.js";import{_ as Qe,a as $e,h as et,i as tt,m as nt,n as rt,o as it,r as at,s as ot,t as st,v as ct}from"./light-CkMc6Thn.js";import{l as lt,t as ut,u as dt}from"./Input-BN8pxWt_.js";import{a as ft,c as pt,d as mt,f as ht,i as gt,l as _t,n as vt,o as yt,p as bt,s as xt,t as St}from"./Button-BopshsDo.js";import{c as Ct,d as wt,f as Tt,n as Et,o as Dt,r as Ot,t as kt}from"./Dropdown-_VGYySaR.js";import{t as At}from"./use-locale-Blf2NK25.js";import{W as jt,k as Mt,m as Nt,q as Pt,r as Ft,t as It,w as Lt,z as Rt}from"./app-BS27x7EC.js";import{t as zt}from"./toNumber-Bjw75fU6.js";import{t as Bt}from"./fade-in-height-expand.cssr-C7sZQC7I.js";import{n as Vt}from"./pinia-CkrJuEaG.js";import{a as Ht,i as Ut}from"./vue-router-BjmVLinn.js";import{t as Wt}from"./user-DmXjT4R4.js";import{n as Gt,r as Kt,t as qt}from"./RefreshOutline-ChzPUbUo.js";import{t as Jt}from"./_plugin-vue_export-helper-BlUFwkfT.js";var Yt=ye(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[ye(`&::-webkit-scrollbar`,{width:0,height:0})]),Xt=w({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=c(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=ce();return Yt.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:Le,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return r(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Zt=function(){return oe.Date.now()},Qt=`Expected a function`,$t=Math.max,en=Math.min;function tn(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(Qt);t=zt(t)||0,ae(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?$t(zt(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?en(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=Zt();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v(Zt())}function x(){var e=Zt(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var nn=`Expected a function`;function rn(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(nn);return ae(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),tn(e,t,{leading:r,maxWait:t,trailing:i})}var an=w({name:`Add`,render(){return r(`svg`,{width:`512`,height:`512`,viewBox:`0 0 512 512`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},r(`path`,{d:`M256 112V400M400 256H112`,stroke:`currentColor`,"stroke-width":`32`,"stroke-linecap":`round`,"stroke-linejoin":`round`}))}}),on=w({name:`ChevronDownFilled`,render(){return r(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},r(`path`,{d:`M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z`,fill:`currentColor`}))}}),sn=w({name:`Remove`,render(){return r(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`},r(`line`,{x1:`400`,y1:`256`,x2:`112`,y2:`256`,style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),cn=w({name:`SlotMachineNumber`,props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){let t=c(null),n=c(e.value),i=c(e.value),a=c(`up`),o=c(!1),l=L(()=>o.value?`${e.clsPrefix}-base-slot-machine-current-number--${a.value}-scroll`:null),u=L(()=>o.value?`${e.clsPrefix}-base-slot-machine-old-number--${a.value}-scroll`:null);k(s(e,`value`),(e,t)=>{n.value=t,i.value=e,h(d)});function d(){let t=e.newOriginalNumber,n=e.oldOriginalNumber;n===void 0||t===void 0||(t>n?f(`up`):n>t&&f(`down`))}function f(e){a.value=e,o.value=!1,h(()=>{var e;(e=t.value)==null||e.offsetWidth,o.value=!0})}return()=>{let{clsPrefix:a}=e;return r(`span`,{ref:t,class:`${a}-base-slot-machine-number`},n.value===null?null:r(`span`,{class:[`${a}-base-slot-machine-old-number ${a}-base-slot-machine-old-number--top`,u.value]},n.value),r(`span`,{class:[`${a}-base-slot-machine-current-number`,l.value]},r(`span`,{ref:`numberWrapper`,class:[`${a}-base-slot-machine-current-number__inner`,typeof e.value!=`number`&&`${a}-base-slot-machine-current-number__inner--not-number`]},i.value)),n.value===null?null:r(`span`,{class:[`${a}-base-slot-machine-old-number ${a}-base-slot-machine-old-number--bottom`,u.value]},n.value))}}}),{cubicBezierEaseOut:ln}=ue;function un({duration:e=`.2s`}={}){return[G(`&.fade-up-width-expand-transition-leave-active`,{transition:`
 opacity ${e} ${ln},
 max-width ${e} ${ln},
 transform ${e} ${ln}
 `}),G(`&.fade-up-width-expand-transition-enter-active`,{transition:`
 opacity ${e} ${ln},
 max-width ${e} ${ln},
 transform ${e} ${ln}
 `}),G(`&.fade-up-width-expand-transition-enter-to`,{opacity:1,transform:`translateX(0) translateY(0)`}),G(`&.fade-up-width-expand-transition-enter-from`,{maxWidth:`0 !important`,opacity:0,transform:`translateY(60%)`}),G(`&.fade-up-width-expand-transition-leave-from`,{opacity:1,transform:`translateY(0)`}),G(`&.fade-up-width-expand-transition-leave-to`,{maxWidth:`0 !important`,opacity:0,transform:`translateY(60%)`})]}var dn=G([G(`@keyframes n-base-slot-machine-fade-up-in`,`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),G(`@keyframes n-base-slot-machine-fade-down-in`,`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),G(`@keyframes n-base-slot-machine-fade-up-out`,`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),G(`@keyframes n-base-slot-machine-fade-down-out`,`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),Y(`base-slot-machine`,`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[Y(`base-slot-machine-number`,`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[un({duration:`.2s`}),ft({duration:`.2s`,delay:`0s`}),Y(`base-slot-machine-old-number`,`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[J(`top`,{transform:`translateY(-100%)`}),J(`bottom`,{transform:`translateY(100%)`}),J(`down-scroll`,{animation:`n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)`,animationIterationCount:1}),J(`up-scroll`,{animation:`n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)`,animationIterationCount:1})]),Y(`base-slot-machine-current-number`,`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[J(`down-scroll`,{animation:`n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)`,animationIterationCount:1}),J(`up-scroll`,{animation:`n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)`,animationIterationCount:1}),z(`inner`,`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[J(`not-number`,`
 right: unset;
 left: 0;
 `)])])])])]),fn=w({name:`BaseSlotMachine`,props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){le(`-base-slot-machine`,dn,s(e,`clsPrefix`));let t=c(),n=c(),i=L(()=>{if(typeof e.value==`string`)return[];if(e.value<1)return[0];let t=[],n=e.value;for(e.max!==void 0&&(n=Math.min(e.max,n));n>=1;)t.push(n%10),n/=10,n=Math.floor(n);return t.reverse(),t});return k(s(e,`value`),(e,r)=>{typeof e==`string`?(n.value=void 0,t.value=void 0):typeof r==`string`?(n.value=e,t.value=void 0):(n.value=e,t.value=r)}),()=>{let{value:a,clsPrefix:o}=e;return typeof a==`number`?r(`span`,{class:`${o}-base-slot-machine`},r(ee,{name:`fade-up-width-expand-transition`,tag:`span`},{default:()=>i.value.map((e,a)=>r(cn,{clsPrefix:o,key:i.value.length-a-1,oldOriginalNumber:t.value,newOriginalNumber:n.value,value:e}))}),r(xt,{key:`+`,width:!0},{default:()=>e.max!==void 0&&e.max<a?r(cn,{clsPrefix:o,value:`+`}):null})):r(`span`,{class:`${o}-base-slot-machine`},a)}}}),pn=fe&&`loading`in document.createElement(`img`);function mn(e={}){let{root:t=null}=e;return{hash:`${e.rootMargin||`0px 0px 0px 0px`}-${Array.isArray(e.threshold)?e.threshold.join(`,`):e.threshold??`0`}`,options:Object.assign(Object.assign({},e),{root:(typeof t==`string`?document.querySelector(t):t)||document.documentElement})}}var hn=new WeakMap,gn=new WeakMap,_n=new WeakMap,vn=(e,t,n)=>{if(!e)return()=>{};let r=mn(t),{root:i}=r.options,a,o=hn.get(i);o?a=o:(a=new Map,hn.set(i,a));let s,c;a.has(r.hash)?(c=a.get(r.hash),c[1].has(e)||(s=c[0],c[1].add(e),s.observe(e))):(s=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){let t=gn.get(e.target),n=_n.get(e.target);t&&t(),n&&(n.value=!0)}})},r.options),s.observe(e),c=[s,new Set([e])],a.set(r.hash,c));let l=!1,u=()=>{l||(gn.delete(e),_n.delete(e),l=!0,c[1].has(e)&&(c[0].unobserve(e),c[1].delete(e)),c[1].size<=0&&a.delete(r.hash),a.size||hn.delete(i))};return gn.set(e,u),_n.set(e,n),u},yn=H(`n-avatar-group`),bn=Y(`avatar`,`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[ne(G(`&`,`--n-merged-color: var(--n-color-modal);`)),ie(G(`&`,`--n-merged-color: var(--n-color-popover);`)),G(`img`,`
 width: 100%;
 height: 100%;
 `),z(`text`,`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),Y(`icon`,`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),z(`text`,`line-height: 1.25`)]),xn=w({name:`Avatar`,props:Object.assign(Object.assign({},K.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=V(e),r=c(!1),i=null,a=c(null),s=c(null),l=()=>{let{value:e}=a;if(e&&(i===null||i!==e.innerHTML)){i=e.innerHTML;let{value:t}=s;if(t){let{offsetWidth:n,offsetHeight:r}=t,{offsetWidth:i,offsetHeight:a}=e,o=.9,s=Math.min(n/i*o,r/a*o,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${s})`}}},u=d(yn,null),f=L(()=>{let{size:t}=e;if(t)return t;let{size:n}=u||{};return n||`medium`}),p=K(`Avatar`,`-avatar`,bn,Pt,e,t),m=d(Dt,null),h=L(()=>{if(u)return!0;let{round:t,circle:n}=e;return t!==void 0||n!==void 0?t||n:m?m.roundRef.value:!1}),_=L(()=>u?!0:e.bordered||!1),v=L(()=>{let t=f.value,n=h.value,r=_.value,{color:i}=e,{self:{borderRadius:a,fontSize:o,color:s,border:c,colorModal:l,colorPopover:u},common:{cubicBezierEaseInOut:d}}=p.value,m;return m=typeof t==`number`?`${t}px`:p.value.self[B(`height`,t)],{"--n-font-size":o,"--n-border":r?c:`none`,"--n-border-radius":n?`50%`:a,"--n-color":i||s,"--n-color-modal":i||l,"--n-color-popover":i||u,"--n-bezier":d,"--n-merged-size":`var(--n-avatar-size-override, ${m})`}}),y=n?W(`avatar`,L(()=>{let t=f.value,n=h.value,r=_.value,{color:i}=e,a=``;return t&&(typeof t==`number`?a+=`a${t}`:a+=t[0]),n&&(a+=`b`),r&&(a+=`c`),i&&(a+=ht(i)),a}),v,e):void 0,b=c(!e.lazy);o(()=>{if(e.lazy&&e.intersectionObserverOptions){let t,n=C(()=>{t?.(),t=void 0,e.lazy&&(t=vn(s.value,e.intersectionObserverOptions,b))});g(()=>{n(),t?.()})}}),k(()=>e.src||e.imgProps?.src,()=>{r.value=!1});let x=c(!e.lazy);return{textRef:a,selfRef:s,mergedRoundRef:h,mergedClsPrefix:t,fitTextTransform:l,cssVars:n?void 0:v,themeClass:y?.themeClass,onRender:y?.onRender,hasLoadError:r,shouldStartLoading:b,loaded:x,mergedOnError:t=>{if(!b.value)return;r.value=!0;let{onError:n,imgProps:{onError:i}={}}=e;n?.(t),i?.(t)},mergedOnLoad:t=>{let{onLoad:n,imgProps:{onLoad:r}={}}=e;n?.(t),r?.(t),x.value=!0}}},render(){var e;let{$slots:t,src:n,mergedClsPrefix:i,lazy:a,onRender:o,loaded:s,hasLoadError:c,imgProps:l={}}=this;o?.();let u,d=!s&&!c&&(this.renderPlaceholder?this.renderPlaceholder():(e=this.$slots).placeholder?.call(e));return u=this.hasLoadError?this.renderFallback?this.renderFallback():he(t.fallback,()=>[r(`img`,{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):X(t.default,e=>{if(e)return r(Ge,{onResize:this.fitTextTransform},{default:()=>r(`span`,{ref:`textRef`,class:`${i}-avatar__text`},e)});if(n||l.src){let e=this.src||l.src;return r(`img`,Object.assign(Object.assign({},l),{loading:pn&&!this.intersectionObserverOptions&&a?`lazy`:`eager`,src:a&&this.intersectionObserverOptions?this.shouldStartLoading?e:void 0:e,"data-image-src":e,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[l.style||``,{objectFit:this.objectFit},d?{height:`0`,width:`0`,visibility:`hidden`,position:`absolute`}:``]}))}}),r(`span`,{ref:`selfRef`,class:[`${i}-avatar`,this.themeClass],style:this.cssVars},u,a&&d)}}),Sn=G([G(`@keyframes badge-wave-spread`,{from:{boxShadow:`0 0 0.5px 0px var(--n-ripple-color)`,opacity:.6},to:{boxShadow:`0 0 0.5px 4.5px var(--n-ripple-color)`,opacity:0}}),Y(`badge`,`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 font-family: var(--n-font-family);
 `,[J(`as-is`,[Y(`badge-sup`,{position:`static`,transform:`translateX(0)`},[Oe({transformOrigin:`left bottom`,originalTransform:`translateX(0)`})])]),J(`dot`,[Y(`badge-sup`,`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[G(`::before`,`border-radius: 4px;`)])]),Y(`badge-sup`,`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 2;
 display: flex;
 align-items: center;
 `,[Oe({transformOrigin:`left bottom`,originalTransform:`translateX(-50%)`}),Y(`base-wave`,{zIndex:1,animationDuration:`2s`,animationIterationCount:`infinite`,animationDelay:`1s`,animationTimingFunction:`var(--n-ripple-bezier)`,animationName:`badge-wave-spread`}),G(`&::before`,`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),Cn=w({name:`Badge`,props:Object.assign(Object.assign({},K.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:`default`},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=V(e),a=K(`Badge`,`-badge`,Sn,et,e,n),s=c(!1),l=()=>{s.value=!0},u=()=>{s.value=!1},d=L(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&Number(e.value)<=0)||!me(t.value)));o(()=>{d.value&&(s.value=!0)});let f=pe(`Badge`,i,n),p=L(()=>{let{type:t,color:n}=e,{common:{cubicBezierEaseInOut:r,cubicBezierEaseOut:i},self:{[B(`color`,t)]:o,fontFamily:s,fontSize:c}}=a.value;return{"--n-font-size":c,"--n-font-family":s,"--n-color":n||o,"--n-ripple-color":n||o,"--n-bezier":r,"--n-ripple-bezier":i}}),m=r?W(`badge`,L(()=>{let t=``,{type:n,color:r}=e;return n&&(t+=n[0]),r&&(t+=ht(r)),t}),p,e):void 0,h=L(()=>{let{offset:t}=e;if(!t)return;let[n,r]=t,i=typeof n==`number`?`${n}px`:n,a=typeof r==`number`?`${r}px`:r;return{transform:`translate(calc(${f?.value?`50%`:`-50%`} + ${i}), ${a})`}});return{rtlEnabled:f,mergedClsPrefix:n,appeared:s,showBadge:d,handleAfterEnter:l,handleAfterLeave:u,cssVars:r?void 0:p,themeClass:m?.themeClass,onRender:m?.onRender,offsetStyle:h}},render(){let{mergedClsPrefix:e,onRender:t,themeClass:n,$slots:i}=this;t?.();let a=i.default?.call(i);return r(`div`,{class:[`${e}-badge`,this.rtlEnabled&&`${e}-badge--rtl`,n,{[`${e}-badge--dot`]:this.dot,[`${e}-badge--as-is`]:!a}],style:this.cssVars},a,r(te,{name:`fade-in-scale-up-transition`,onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?r(`sup`,{class:`${e}-badge-sup`,title:wt(this.value),style:this.offsetStyle},he(i.value,()=>[this.dot?null:r(fn,{clsPrefix:e,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?r(gt,{clsPrefix:e}):null):null}))}}),wn=Y(`breadcrumb`,`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[G(`ul`,`
 list-style: none;
 padding: 0;
 margin: 0;
 `),G(`a`,`
 color: inherit;
 text-decoration: inherit;
 `),Y(`breadcrumb-item`,`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[Y(`icon`,`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),G(`&:not(:last-child)`,[J(`clickable`,[z(`link`,`
 cursor: pointer;
 `,[G(`&:hover`,`
 background-color: var(--n-item-color-hover);
 `),G(`&:active`,`
 background-color: var(--n-item-color-pressed); 
 `)])])]),z(`link`,`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[G(`&:hover`,`
 color: var(--n-item-text-color-hover);
 `,[Y(`icon`,`
 color: var(--n-item-text-color-hover);
 `)]),G(`&:active`,`
 color: var(--n-item-text-color-pressed);
 `,[Y(`icon`,`
 color: var(--n-item-text-color-pressed);
 `)])]),z(`separator`,`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),G(`&:last-child`,[z(`link`,`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[Y(`icon`,`
 color: var(--n-item-text-color-active);
 `)]),z(`separator`,`
 display: none;
 `)])])]),Tn=H(`n-breadcrumb`),En=w({name:`Breadcrumb`,props:Object.assign(Object.assign({},K.props),{separator:{type:String,default:`/`}}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=V(e),r=K(`Breadcrumb`,`-breadcrumb`,wn,jt,e,t);F(Tn,{separatorRef:s(e,`separator`),mergedClsPrefixRef:t});let i=L(()=>{let{common:{cubicBezierEaseInOut:e},self:{separatorColor:t,itemTextColor:n,itemTextColorHover:i,itemTextColorPressed:a,itemTextColorActive:o,fontSize:s,fontWeightActive:c,itemBorderRadius:l,itemColorHover:u,itemColorPressed:d,itemLineHeight:f}}=r.value;return{"--n-font-size":s,"--n-bezier":e,"--n-item-text-color":n,"--n-item-text-color-hover":i,"--n-item-text-color-pressed":a,"--n-item-text-color-active":o,"--n-separator-color":t,"--n-item-color-hover":u,"--n-item-color-pressed":d,"--n-item-border-radius":l,"--n-font-weight-active":c,"--n-item-line-height":f}}),a=n?W(`breadcrumb`,void 0,i,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),r(`nav`,{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":`Breadcrumb`},r(`ul`,null,this.$slots))}});function Dn(e=fe?window:null){let t=()=>{let{hash:t,host:n,hostname:r,href:i,origin:a,pathname:o,port:s,protocol:c,search:l}=e?.location||{};return{hash:t,host:n,hostname:r,href:i,origin:a,pathname:o,port:s,protocol:c,search:l}},n=c(t()),r=()=>{n.value=t()};return o(()=>{e&&(e.addEventListener(`popstate`,r),e.addEventListener(`hashchange`,r))}),u(()=>{e&&(e.removeEventListener(`popstate`,r),e.removeEventListener(`hashchange`,r))}),n}var On=w({name:`BreadcrumbItem`,props:{separator:String,href:String,clickable:{type:Boolean,default:!0},showSeparator:{type:Boolean,default:!0},onClick:Function},slots:Object,setup(e,{slots:t}){let n=d(Tn,null);if(!n)return()=>null;let{separatorRef:i,mergedClsPrefixRef:a}=n,o=Dn(),s=L(()=>e.href?`a`:`span`),c=L(()=>o.value.href===e.href?`location`:null);return()=>{let{value:n}=a;return r(`li`,{class:[`${n}-breadcrumb-item`,e.clickable&&`${n}-breadcrumb-item--clickable`]},r(s.value,{class:`${n}-breadcrumb-item__link`,"aria-current":c.value,href:e.href,onClick:e.onClick},t),e.showSeparator&&r(`span`,{class:`${n}-breadcrumb-item__separator`,"aria-hidden":`true`},he(t.separator,()=>[e.separator??i.value])))}}}),kn=Y(`collapse-transition`,{width:`100%`},[Bt()]),An=w({name:`CollapseTransition`,props:Object.assign(Object.assign({},K.props),{show:{type:Boolean,default:!0},appear:Boolean,collapsed:{type:Boolean,default:void 0}}),inheritAttrs:!1,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:r}=V(e),i=K(`CollapseTransition`,`-collapse-transition`,kn,Rt,e,t),a=pe(`CollapseTransition`,r,t),o=L(()=>e.collapsed===void 0?e.show:e.collapsed),s=L(()=>{let{self:{bezier:e}}=i.value;return{"--n-bezier":e}}),c=n?W(`collapse-transition`,void 0,s,e):void 0;return{rtlEnabled:a,mergedShow:o,mergedClsPrefix:t,cssVars:n?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){return r(xt,{appear:this.appear},{default:()=>{var e;if(this.mergedShow)return(e=this.onRender)==null||e.call(this),r(`div`,t({class:[`${this.mergedClsPrefix}-collapse-transition`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse-transition--rtl`,this.themeClass],style:this.cssVars},this.$attrs),this.$slots)}})}}),jn=w({name:`NDrawerContent`,inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){let t=c(!!e.show),n=c(null),r=d(Se),i=0,a=``,o=null,s=c(!1),l=c(!1),u=L(()=>e.placement===`top`||e.placement===`bottom`),{mergedClsPrefixRef:f,mergedRtlRef:p}=V(e),m=pe(`Drawer`,p,f),h=E,_=e=>{l.value=!0,i=u.value?e.clientY:e.clientX,a=document.body.style.cursor,document.body.style.cursor=u.value?`ns-resize`:`ew-resize`,document.body.addEventListener(`mousemove`,T),document.body.addEventListener(`mouseleave`,h),document.body.addEventListener(`mouseup`,E)},v=()=>{o!==null&&(window.clearTimeout(o),o=null),l.value?s.value=!0:o=window.setTimeout(()=>{s.value=!0},300)},y=()=>{o!==null&&(window.clearTimeout(o),o=null),s.value=!1},{doUpdateHeight:b,doUpdateWidth:x}=r,S=t=>{let{maxWidth:n}=e;if(n&&t>n)return n;let{minWidth:r}=e;return r&&t<r?r:t},w=t=>{let{maxHeight:n}=e;if(n&&t>n)return n;let{minHeight:r}=e;return r&&t<r?r:t};function T(t){if(l.value)if(u.value){let r=n.value?.offsetHeight||0,a=i-t.clientY;r+=e.placement===`bottom`?a:-a,r=w(r),b(r),i=t.clientY}else{let r=n.value?.offsetWidth||0,a=i-t.clientX;r+=e.placement===`right`?a:-a,r=S(r),x(r),i=t.clientX}}function E(){l.value&&(i=0,l.value=!1,document.body.style.cursor=a,document.body.removeEventListener(`mousemove`,T),document.body.removeEventListener(`mouseup`,E),document.body.removeEventListener(`mouseleave`,h))}C(()=>{e.show&&(t.value=!0)}),k(()=>e.show,e=>{e||E()}),g(()=>{E()});let D=L(()=>{let{show:t}=e,n=[[P,t]];return e.showMask||n.push([xe,e.onClickoutside,void 0,{capture:!0}]),n});function O(){var n;t.value=!1,(n=e.onAfterLeave)==null||n.call(e)}return Qe(L(()=>e.blockScroll&&t.value)),F(we,n),F(ve,null),F(Me,null),{bodyRef:n,rtlEnabled:m,mergedClsPrefix:r.mergedClsPrefixRef,isMounted:r.isMountedRef,mergedTheme:r.mergedThemeRef,displayed:t,transitionName:L(()=>({right:`slide-in-from-right-transition`,left:`slide-in-from-left-transition`,top:`slide-in-from-top-transition`,bottom:`slide-in-from-bottom-transition`})[e.placement]),handleAfterLeave:O,bodyDirectives:D,handleMousedownResizeTrigger:_,handleMouseenterResizeTrigger:v,handleMouseleaveResizeTrigger:y,isDragging:l,isHoverOnResizeTrigger:s}},render(){let{$slots:e,mergedClsPrefix:n}=this;return this.displayDirective===`show`||this.displayed||this.show?v(r(`div`,{role:`none`},r(ke,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>r(te,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>v(r(`div`,t(this.$attrs,{role:`dialog`,ref:`bodyRef`,"aria-modal":`true`,class:[`${n}-drawer`,this.rtlEnabled&&`${n}-drawer--rtl`,`${n}-drawer--${this.placement}-placement`,this.isDragging&&`${n}-drawer--unselectable`,this.nativeScrollbar&&`${n}-drawer--native-scrollbar`]}),[this.resizable?r(`div`,{class:[`${n}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${n}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?r(`div`,{class:[`${n}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:`none`},e):r(Ue,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${n}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[P,this.displayDirective===`if`||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Mn,cubicBezierEaseOut:Nn}=ue;function Pn({duration:e=`0.3s`,leaveDuration:t=`0.2s`,name:n=`slide-in-from-bottom`}={}){return[G(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${Mn}`}),G(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${Nn}`}),G(`&.${n}-transition-enter-to`,{transform:`translateY(0)`}),G(`&.${n}-transition-enter-from`,{transform:`translateY(100%)`}),G(`&.${n}-transition-leave-from`,{transform:`translateY(0)`}),G(`&.${n}-transition-leave-to`,{transform:`translateY(100%)`})]}var{cubicBezierEaseIn:Fn,cubicBezierEaseOut:In}=ue;function Ln({duration:e=`0.3s`,leaveDuration:t=`0.2s`,name:n=`slide-in-from-left`}={}){return[G(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${Fn}`}),G(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${In}`}),G(`&.${n}-transition-enter-to`,{transform:`translateX(0)`}),G(`&.${n}-transition-enter-from`,{transform:`translateX(-100%)`}),G(`&.${n}-transition-leave-from`,{transform:`translateX(0)`}),G(`&.${n}-transition-leave-to`,{transform:`translateX(-100%)`})]}var{cubicBezierEaseIn:Rn,cubicBezierEaseOut:zn}=ue;function Bn({duration:e=`0.3s`,leaveDuration:t=`0.2s`,name:n=`slide-in-from-right`}={}){return[G(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${Rn}`}),G(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${zn}`}),G(`&.${n}-transition-enter-to`,{transform:`translateX(0)`}),G(`&.${n}-transition-enter-from`,{transform:`translateX(100%)`}),G(`&.${n}-transition-leave-from`,{transform:`translateX(0)`}),G(`&.${n}-transition-leave-to`,{transform:`translateX(100%)`})]}var{cubicBezierEaseIn:Vn,cubicBezierEaseOut:Hn}=ue;function Un({duration:e=`0.3s`,leaveDuration:t=`0.2s`,name:n=`slide-in-from-top`}={}){return[G(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${Vn}`}),G(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${Hn}`}),G(`&.${n}-transition-enter-to`,{transform:`translateY(0)`}),G(`&.${n}-transition-enter-from`,{transform:`translateY(-100%)`}),G(`&.${n}-transition-leave-from`,{transform:`translateY(0)`}),G(`&.${n}-transition-leave-to`,{transform:`translateY(-100%)`})]}var Wn=G([Y(`drawer`,`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Bn(),Ln(),Un(),Pn(),J(`unselectable`,`
 user-select: none; 
 -webkit-user-select: none;
 `),J(`native-scrollbar`,[Y(`drawer-content-wrapper`,`
 overflow: auto;
 height: 100%;
 `)]),z(`resize-trigger`,`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[J(`hover`,`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),Y(`drawer-content-wrapper`,`
 box-sizing: border-box;
 `),Y(`drawer-content`,`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[J(`native-scrollbar`,[Y(`drawer-body-content-wrapper`,`
 height: 100%;
 overflow: auto;
 `)]),Y(`drawer-body`,`
 flex: 1 0 0;
 overflow: hidden;
 `),Y(`drawer-body-content-wrapper`,`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),Y(`drawer-header`,`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[z(`main`,`
 flex: 1;
 `),z(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),Y(`drawer-footer`,`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),J(`right-placement`,`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[z(`resize-trigger`,`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),J(`left-placement`,`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[z(`resize-trigger`,`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),J(`top-placement`,`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[z(`resize-trigger`,`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),J(`bottom-placement`,`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[z(`resize-trigger`,`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),G(`body`,[G(`>`,[Y(`drawer-container`,`
 position: fixed;
 `)])]),Y(`drawer-container`,`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[G(`> *`,`
 pointer-events: all;
 `)]),Y(`drawer-mask`,`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[J(`invisible`,`
 background-color: rgba(0, 0, 0, 0)
 `),We({enterDuration:`0.2s`,leaveDuration:`0.2s`,enterCubicBezier:`var(--n-bezier-in)`,leaveCubicBezier:`var(--n-bezier-out)`})])]),Gn=w({name:`Drawer`,inheritAttrs:!1,props:Object.assign(Object.assign({},K.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:`right`},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:`if`},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),setup(e){let{mergedClsPrefixRef:t,namespaceRef:n,inlineThemeDisabled:r}=V(e),i=bt(),a=K(`Drawer`,`-drawer`,Wn,Mt,e,t),o=c(e.defaultWidth),l=c(e.defaultHeight),u=dt(s(e,`width`),o),d=dt(s(e,`height`),l),f=L(()=>{let{placement:t}=e;return t===`top`||t===`bottom`?``:Ke(u.value)}),p=L(()=>{let{placement:t}=e;return t===`left`||t===`right`?``:Ke(d.value)}),m=t=>{let{onUpdateWidth:n,"onUpdate:width":r}=e;n&&Q(n,t),r&&Q(r,t),o.value=t},h=t=>{let{onUpdateHeight:n,"onUpdate:width":r}=e;n&&Q(n,t),r&&Q(r,t),l.value=t},g=L(()=>[{width:f.value,height:p.value},e.drawerStyle||``]);function _(t){let{onMaskClick:n,maskClosable:r}=e;r&&x(!1),n&&n(t)}function v(e){_(e)}let y=ct();function b(t){var n;(n=e.onEsc)==null||n.call(e),e.show&&e.closeOnEsc&&Ie(t)&&(y.value||x(!1))}function x(t){let{onHide:n,onUpdateShow:r,"onUpdate:show":i}=e;r&&Q(r,t),i&&Q(i,t),n&&!t&&Q(n,t)}F(Se,{isMountedRef:i,mergedThemeRef:a,mergedClsPrefixRef:t,doUpdateShow:x,doUpdateHeight:h,doUpdateWidth:m});let S=L(()=>{let{common:{cubicBezierEaseInOut:e,cubicBezierEaseIn:t,cubicBezierEaseOut:n},self:{color:r,textColor:i,boxShadow:o,lineHeight:s,headerPadding:c,footerPadding:l,borderRadius:u,bodyPadding:d,titleFontSize:f,titleTextColor:p,titleFontWeight:m,headerBorderBottom:h,footerBorderTop:g,closeIconColor:_,closeIconColorHover:v,closeIconColorPressed:y,closeColorHover:b,closeColorPressed:x,closeIconSize:S,closeSize:C,closeBorderRadius:w,resizableTriggerColorHover:T}}=a.value;return{"--n-line-height":s,"--n-color":r,"--n-border-radius":u,"--n-text-color":i,"--n-box-shadow":o,"--n-bezier":e,"--n-bezier-out":n,"--n-bezier-in":t,"--n-header-padding":c,"--n-body-padding":d,"--n-footer-padding":l,"--n-title-text-color":p,"--n-title-font-size":f,"--n-title-font-weight":m,"--n-header-border-bottom":h,"--n-footer-border-top":g,"--n-close-icon-color":_,"--n-close-icon-color-hover":v,"--n-close-icon-color-pressed":y,"--n-close-size":C,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-icon-size":S,"--n-close-border-radius":w,"--n-resize-trigger-color-hover":T}}),C=r?W(`drawer`,void 0,S,e):void 0;return{mergedClsPrefix:t,namespace:n,mergedBodyStyle:g,handleOutsideClick:v,handleMaskClick:_,handleEsc:b,mergedTheme:a,cssVars:r?void 0:S,themeClass:C?.themeClass,onRender:C?.onRender,isMounted:i}},render(){let{mergedClsPrefix:e}=this;return r(Ee,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)==null||t.call(this),v(r(`div`,{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:`none`},this.showMask?r(te,{name:`fade-in-transition`,appear:this.isMounted},{default:()=>this.show?r(`div`,{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask===`transparent`&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,r(jn,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[De,{zIndex:this.zIndex,enabled:this.show}]])}})}}),Kn=w({name:`DrawerContent`,props:{title:String,headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],bodyClass:String,bodyStyle:[Object,String],bodyContentClass:String,bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},slots:Object,setup(){let e=d(Se,null);e||re(`drawer-content`,"`n-drawer-content` must be placed inside `n-drawer`.");let{doUpdateShow:t}=e;function n(){t(!1)}return{handleCloseClick:n,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){let{title:e,mergedClsPrefix:t,nativeScrollbar:n,mergedTheme:i,bodyClass:a,bodyStyle:o,bodyContentClass:s,bodyContentStyle:c,headerClass:l,headerStyle:u,footerClass:d,footerStyle:f,scrollbarProps:p,closable:m,$slots:h}=this;return r(`div`,{role:`none`,class:[`${t}-drawer-content`,n&&`${t}-drawer-content--native-scrollbar`]},h.header||e||m?r(`div`,{class:[`${t}-drawer-header`,l],style:u,role:`none`},r(`div`,{class:`${t}-drawer-header__main`,role:`heading`,"aria-level":`1`},h.header===void 0?e:h.header()),m&&r(ge,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,n?r(`div`,{class:[`${t}-drawer-body`,a],style:o,role:`none`},r(`div`,{class:[`${t}-drawer-body-content-wrapper`,s],style:c,role:`none`},h)):r(Ue,Object.assign({themeOverrides:i.peerOverrides.Scrollbar,theme:i.peers.Scrollbar},p,{class:`${t}-drawer-body`,contentClass:[`${t}-drawer-body-content-wrapper`,s],contentStyle:c}),h),h.footer?r(`div`,{class:[`${t}-drawer-footer`,d],style:f,role:`none`},h.footer()):null)}}),qn=G([Y(`input-number-suffix`,`
 display: inline-block;
 margin-right: 10px;
 `),Y(`input-number-prefix`,`
 display: inline-block;
 margin-left: 10px;
 `)]);function Jn(e){return e==null||typeof e==`string`&&e.trim()===``?null:Number(e)}function Yn(e){return e.includes(`.`)&&(/^(-)?\d+.*(\.|0)$/.test(e)||/^-?\d*$/.test(e))||e===`-`||e===`-0`}function Xn(e){return e==null?!0:!Number.isNaN(e)}function Zn(e,t){return typeof e==`number`?t===void 0?String(e):e.toFixed(t):``}function Qn(e){if(e===null)return null;if(typeof e==`number`)return e;{let t=Number(e);return Number.isNaN(t)?null:t}}var $n=800,er=100,tr=w({name:`InputNumber`,props:Object.assign(Object.assign({},K.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:`right`},inputProps:Object,readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},round:{type:Boolean,default:void 0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),slots:Object,setup(e){let{mergedBorderedRef:t,mergedClsPrefixRef:n,mergedRtlRef:r,mergedComponentPropsRef:i}=V(e),a=K(`InputNumber`,`-input-number`,qn,$e,e,n),{localeRef:o}=At(`InputNumber`),l=mt(e,{mergedSize:t=>{let{size:n}=e;if(n)return n;let{mergedSize:r}=t||{};return r?.value?r.value:i?.value?.InputNumber?.size||`medium`}}),{mergedSizeRef:u,mergedDisabledRef:d,mergedStatusRef:f}=l,p=c(null),m=c(null),g=c(null),_=c(e.defaultValue),v=dt(s(e,`value`),_),y=c(``),b=e=>{let t=String(e).split(`.`)[1];return t?t.length:0},x=t=>{let n=[e.min,e.max,e.step,t].map(e=>e===void 0?0:b(e));return Math.max(...n)},S=Z(()=>{let{placeholder:t}=e;return t===void 0?o.value.placeholder:t}),C=Z(()=>{let t=Qn(e.step);return t===null||t===0?1:Math.abs(t)}),w=Z(()=>{let t=Qn(e.min);return t===null?null:t}),T=Z(()=>{let t=Qn(e.max);return t===null?null:t}),E=()=>{let{value:t}=v;if(Xn(t)){let{format:n,precision:r}=e;n?y.value=n(t):t===null||r===void 0||b(t)>r?y.value=Zn(t,void 0):y.value=Zn(t,r)}else y.value=String(t)};E();let D=t=>{let{value:n}=v;if(t===n){E();return}let{"onUpdate:value":r,onUpdateValue:i,onChange:a}=e,{nTriggerFormInput:o,nTriggerFormChange:s}=l;a&&Q(a,t),i&&Q(i,t),r&&Q(r,t),_.value=t,o(),s()},O=({offset:t,doUpdateIfValid:n,fixPrecision:r,isInputing:i})=>{let{value:a}=y;if(i&&Yn(a))return!1;let o=(e.parse||Jn)(a);if(o===null)return n&&D(null),null;if(Xn(o)){let a=b(o),{precision:s}=e;if(s!==void 0&&s<a&&!r)return!1;let c=Number.parseFloat((o+t).toFixed(s??x(o)));if(Xn(c)){let{value:t}=T,{value:r}=w;if(t!==null&&c>t){if(!n||i)return!1;c=t}if(r!==null&&c<r){if(!n||i)return!1;c=r}return e.validator&&!e.validator(c)?!1:(n&&D(c),c)}}return!1},ee=Z(()=>O({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),A=Z(()=>{let{value:t}=v;if(e.validator&&t===null)return!1;let{value:n}=C;return O({offset:-n,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),j=Z(()=>{let{value:t}=v;if(e.validator&&t===null)return!1;let{value:n}=C;return O({offset:+n,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function M(t){let{onFocus:n}=e,{nTriggerFormFocus:r}=l;n&&Q(n,t),r()}function N(t){if(t.target===p.value?.wrapperElRef)return;let n=O({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(n!==!1){let e=p.value?.inputElRef;e&&(e.value=String(n||``)),v.value===n&&E()}else E();let{onBlur:r}=e,{nTriggerFormBlur:i}=l;r&&Q(r,t),i(),h(()=>{E()})}function P(t){let{onClear:n}=e;n&&Q(n,t)}function te(){let{value:t}=j;if(!t){oe();return}let{value:n}=v;if(n===null)e.validator||D(z());else{let{value:e}=C;O({offset:e,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function F(){let{value:t}=A;if(!t){ae();return}let{value:n}=v;if(n===null)e.validator||D(z());else{let{value:e}=C;O({offset:-e,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}let I=M,R=N;function z(){if(e.validator)return null;let{value:t}=w,{value:n}=T;return t===null?n===null?0:Math.min(0,n):Math.max(0,t)}function ne(e){P(e),D(null)}function B(e){var t;g.value?.$el.contains(e.target)&&e.preventDefault(),m.value?.$el.contains(e.target)&&e.preventDefault(),(t=p.value)==null||t.activate()}let re=null,ie=null,H=null;function ae(){H&&=(window.clearTimeout(H),null),re&&=(window.clearInterval(re),null)}let U=null;function oe(){U&&=(window.clearTimeout(U),null),ie&&=(window.clearInterval(ie),null)}function W(){ae(),H=window.setTimeout(()=>{re=window.setInterval(()=>{F()},er)},$n),He(`mouseup`,document,ae,{once:!0})}function se(){oe(),U=window.setTimeout(()=>{ie=window.setInterval(()=>{te()},er)},$n),He(`mouseup`,document,oe,{once:!0})}let ce=()=>{ie||te()},le=()=>{re||F()};function G(t){var n;if(t.key===`Enter`){if(t.target===p.value?.wrapperElRef)return;O({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((n=p.value)==null||n.deactivate())}else if(t.key===`ArrowUp`){if(!j.value||e.keyboard.ArrowUp===!1)return;t.preventDefault(),O({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&te()}else if(t.key===`ArrowDown`){if(!A.value||e.keyboard.ArrowDown===!1)return;t.preventDefault(),O({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&F()}}function q(t){y.value=t,e.updateValueOnInput&&!e.format&&!e.parse&&e.precision===void 0&&O({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}k(v,()=>{E()});let ue={focus:()=>p.value?.focus(),blur:()=>p.value?.blur(),select:()=>p.value?.select()},J=pe(`InputNumber`,r,n);return Object.assign(Object.assign({},ue),{rtlEnabled:J,inputInstRef:p,minusButtonInstRef:m,addButtonInstRef:g,mergedClsPrefix:n,mergedBordered:t,uncontrolledValue:_,mergedValue:v,mergedPlaceholder:S,displayedValueInvalid:ee,mergedSize:u,mergedDisabled:d,displayedValue:y,addable:j,minusable:A,mergedStatus:f,handleFocus:I,handleBlur:R,handleClear:ne,handleMouseDown:B,handleAddClick:ce,handleMinusClick:le,handleAddMousedown:se,handleMinusMousedown:W,handleKeyDown:G,handleUpdateDisplayedValue:q,mergedTheme:a,inputThemeOverrides:{paddingSmall:`0 8px 0 10px`,paddingMedium:`0 8px 0 12px`,paddingLarge:`0 8px 0 14px`},buttonThemeOverrides:L(()=>{let{self:{iconColorDisabled:e}}=a.value,[t,n,r,i]=de(e);return{textColorTextDisabled:`rgb(${t}, ${n}, ${r})`,opacityDisabled:`${i}`}})})},render(){let{mergedClsPrefix:e,$slots:t}=this,n=()=>r(vt,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:`minusButtonInstRef`},{icon:()=>he(t[`minus-icon`],()=>[r(q,{clsPrefix:e},{default:()=>r(sn,null)})])}),i=()=>r(vt,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:`addButtonInstRef`},{icon:()=>he(t[`add-icon`],()=>[r(q,{clsPrefix:e},{default:()=>r(an,null)})])});return r(`div`,{class:[`${e}-input-number`,this.rtlEnabled&&`${e}-input-number--rtl`]},r(ut,{ref:`inputInstRef`,autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,round:this.round,textDecoration:this.displayedValueInvalid?`line-through`:void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,inputProps:this.inputProps,internalLoadingBeforeSuffix:!0},{prefix:()=>this.showButton&&this.buttonPlacement===`both`?[n(),X(t.prefix,t=>t?r(`span`,{class:`${e}-input-number-prefix`},t):null)]:t.prefix?.call(t),suffix:()=>this.showButton?[X(t.suffix,t=>t?r(`span`,{class:`${e}-input-number-suffix`},t):null),this.buttonPlacement===`right`?n():null,i()]:t.suffix?.call(t)}))}}),nr=H(`n-layout-sider`),rr={type:String,default:`static`},ir=Y(`layout`,`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[Y(`layout-scroll-container`,`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),J(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ar={embedded:Boolean,position:rr,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:``},hasSider:Boolean,siderPlacement:{type:String,default:`left`}},or=H(`n-layout`);function sr(e){return w({name:e?`LayoutContent`:`Layout`,props:Object.assign(Object.assign({},K.props),ar),setup(e){let t=c(null),n=c(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=V(e),a=K(`Layout`,`-layout`,ir,tt,e,r);function o(r,i){if(e.nativeScrollbar){let{value:e}=t;e&&(i===void 0?e.scrollTo(r):e.scrollTo(r,i))}else{let{value:e}=n;e&&e.scrollTo(r,i)}}F(or,e);let s=0,l=0,u=t=>{var n;let r=t.target;s=r.scrollLeft,l=r.scrollTop,(n=e.onScroll)==null||n.call(e,t)};Ye(()=>{if(e.nativeScrollbar){let e=t.value;e&&(e.scrollTop=l,e.scrollLeft=s)}});let d={display:`flex`,flexWrap:`nowrap`,width:`100%`,flexDirection:`row`},f={scrollTo:o},p=L(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=a.value;return{"--n-bezier":t,"--n-color":e.embedded?n.colorEmbedded:n.color,"--n-text-color":n.textColor}}),m=i?W(`layout`,L(()=>e.embedded?`e`:``),p,e):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:t,scrollbarInstRef:n,hasSiderStyle:d,mergedTheme:a,handleNativeElScroll:u,cssVars:i?void 0:p,themeClass:m?.themeClass,onRender:m?.onRender},f)},render(){var t;let{mergedClsPrefix:n,hasSider:i}=this;(t=this.onRender)==null||t.call(this);let a=i?this.hasSiderStyle:void 0;return r(`div`,{class:[this.themeClass,e&&`${n}-layout-content`,`${n}-layout`,`${n}-layout--${this.position}-positioned`],style:this.cssVars},this.nativeScrollbar?r(`div`,{ref:`scrollableElRef`,class:[`${n}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):r(Ue,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:`scrollbarInstRef`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,a]}),this.$slots))}})}var cr=sr(!1),lr=Y(`layout-footer`,`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[J(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),J(`bordered`,`
 border-top: solid 1px var(--n-border-color);
 `)]),ur=w({name:`LayoutFooter`,props:Object.assign(Object.assign({},K.props),{inverted:Boolean,position:rr,bordered:Boolean}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=V(e),r=K(`Layout`,`-layout-footer`,lr,tt,e,t),i=L(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=r.value,i={"--n-bezier":t};return e.inverted?(i[`--n-color`]=n.footerColorInverted,i[`--n-text-color`]=n.textColorInverted,i[`--n-border-color`]=n.footerBorderColorInverted):(i[`--n-color`]=n.footerColor,i[`--n-text-color`]=n.textColor,i[`--n-border-color`]=n.footerBorderColor),i}),a=n?W(`layout-footer`,L(()=>e.inverted?`a`:`b`),i,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),r(`div`,{class:[`${t}-layout-footer`,this.themeClass,this.position&&`${t}-layout-footer--${this.position}-positioned`,this.bordered&&`${t}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),dr=Y(`layout-header`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[J(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),J(`bordered`,`
 border-bottom: solid 1px var(--n-border-color);
 `)]),fr={position:rr,inverted:Boolean,bordered:{type:Boolean,default:!1}},pr=w({name:`LayoutHeader`,props:Object.assign(Object.assign({},K.props),fr),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=V(e),r=K(`Layout`,`-layout-header`,dr,tt,e,t),i=L(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=r.value,i={"--n-bezier":t};return e.inverted?(i[`--n-color`]=n.headerColorInverted,i[`--n-text-color`]=n.textColorInverted,i[`--n-border-color`]=n.headerBorderColorInverted):(i[`--n-color`]=n.headerColor,i[`--n-text-color`]=n.textColor,i[`--n-border-color`]=n.headerBorderColor),i}),a=n?W(`layout-header`,L(()=>e.inverted?`a`:`b`),i,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),r(`div`,{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),mr=Y(`layout-sider`,`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[J(`bordered`,[z(`border`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),z(`left-placement`,[J(`bordered`,[z(`border`,`
 right: 0;
 `)])]),J(`right-placement`,`
 justify-content: flex-start;
 `,[J(`bordered`,[z(`border`,`
 left: 0;
 `)]),J(`collapsed`,[Y(`layout-toggle-button`,[Y(`base-icon`,`
 transform: rotate(180deg);
 `)]),Y(`layout-toggle-bar`,[G(`&:hover`,[z(`top`,{transform:`rotate(-12deg) scale(1.15) translateY(-2px)`}),z(`bottom`,{transform:`rotate(12deg) scale(1.15) translateY(2px)`})])])]),Y(`layout-toggle-button`,`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[Y(`base-icon`,`
 transform: rotate(0);
 `)]),Y(`layout-toggle-bar`,`
 left: -28px;
 transform: rotate(180deg);
 `,[G(`&:hover`,[z(`top`,{transform:`rotate(12deg) scale(1.15) translateY(-2px)`}),z(`bottom`,{transform:`rotate(-12deg) scale(1.15) translateY(2px)`})])])]),J(`collapsed`,[Y(`layout-toggle-bar`,[G(`&:hover`,[z(`top`,{transform:`rotate(-12deg) scale(1.15) translateY(-2px)`}),z(`bottom`,{transform:`rotate(12deg) scale(1.15) translateY(2px)`})])]),Y(`layout-toggle-button`,[Y(`base-icon`,`
 transform: rotate(0);
 `)])]),Y(`layout-toggle-button`,`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[Y(`base-icon`,`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),Y(`layout-toggle-bar`,`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[z(`top, bottom`,`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),z(`bottom`,`
 position: absolute;
 top: 34px;
 `),G(`&:hover`,[z(`top`,{transform:`rotate(12deg) scale(1.15) translateY(-2px)`}),z(`bottom`,{transform:`rotate(-12deg) scale(1.15) translateY(2px)`})]),z(`top, bottom`,{backgroundColor:`var(--n-toggle-bar-color)`}),G(`&:hover`,[z(`top, bottom`,{backgroundColor:`var(--n-toggle-bar-color-hover)`})])]),z(`border`,`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),Y(`layout-sider-scroll-container`,`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),J(`show-content`,[Y(`layout-sider-scroll-container`,{opacity:1})]),J(`absolute-positioned`,`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),hr=w({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){let{clsPrefix:e}=this;return r(`div`,{onClick:this.onClick,class:`${e}-layout-toggle-bar`},r(`div`,{class:`${e}-layout-toggle-bar__top`}),r(`div`,{class:`${e}-layout-toggle-bar__bottom`}))}}),gr=w({name:`LayoutToggleButton`,props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){let{clsPrefix:e}=this;return r(`div`,{class:`${e}-layout-toggle-button`,onClick:this.onClick},r(q,{clsPrefix:e},{default:()=>r(Fe,null)}))}}),_r={position:rr,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:``},collapseMode:{type:String,default:`transform`},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},vr=w({name:`LayoutSider`,props:Object.assign(Object.assign({},K.props),_r),setup(e){let t=d(or),n=c(null),r=c(null),i=c(e.defaultCollapsed),a=dt(s(e,`collapsed`),i),o=L(()=>Ke(a.value?e.collapsedWidth:e.width)),l=L(()=>e.collapseMode===`transform`?{minWidth:Ke(e.width)}:{}),u=L(()=>t?t.siderPlacement:`left`);function f(t,i){if(e.nativeScrollbar){let{value:e}=n;e&&(i===void 0?e.scrollTo(t):e.scrollTo(t,i))}else{let{value:e}=r;e&&e.scrollTo(t,i)}}function p(){let{"onUpdate:collapsed":t,onUpdateCollapsed:n,onExpand:r,onCollapse:o}=e,{value:s}=a;n&&Q(n,!s),t&&Q(t,!s),i.value=!s,s?r&&Q(r):o&&Q(o)}let m=0,h=0,g=t=>{var n;let r=t.target;m=r.scrollLeft,h=r.scrollTop,(n=e.onScroll)==null||n.call(e,t)};Ye(()=>{if(e.nativeScrollbar){let e=n.value;e&&(e.scrollTop=h,e.scrollLeft=m)}}),F(nr,{collapsedRef:a,collapseModeRef:s(e,`collapseMode`)});let{mergedClsPrefixRef:_,inlineThemeDisabled:v}=V(e),y=K(`Layout`,`-layout-sider`,mr,tt,e,_);function b(t){var n,r;t.propertyName===`max-width`&&(a.value?(n=e.onAfterLeave)==null||n.call(e):(r=e.onAfterEnter)==null||r.call(e))}let x={scrollTo:f},S=L(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=y.value,{siderToggleButtonColor:r,siderToggleButtonBorder:i,siderToggleBarColor:a,siderToggleBarColorHover:o}=n,s={"--n-bezier":t,"--n-toggle-button-color":r,"--n-toggle-button-border":i,"--n-toggle-bar-color":a,"--n-toggle-bar-color-hover":o};return e.inverted?(s[`--n-color`]=n.siderColorInverted,s[`--n-text-color`]=n.textColorInverted,s[`--n-border-color`]=n.siderBorderColorInverted,s[`--n-toggle-button-icon-color`]=n.siderToggleButtonIconColorInverted,s.__invertScrollbar=n.__invertScrollbar):(s[`--n-color`]=n.siderColor,s[`--n-text-color`]=n.textColor,s[`--n-border-color`]=n.siderBorderColor,s[`--n-toggle-button-icon-color`]=n.siderToggleButtonIconColor),s}),C=v?W(`layout-sider`,L(()=>e.inverted?`a`:`b`),S,e):void 0;return Object.assign({scrollableElRef:n,scrollbarInstRef:r,mergedClsPrefix:_,mergedTheme:y,styleMaxWidth:o,mergedCollapsed:a,scrollContainerStyle:l,siderPlacement:u,handleNativeElScroll:g,handleTransitionend:b,handleTriggerClick:p,inlineThemeDisabled:v,cssVars:S,themeClass:C?.themeClass,onRender:C?.onRender},x)},render(){var e;let{mergedClsPrefix:t,mergedCollapsed:n,showTrigger:i}=this;return(e=this.onRender)==null||e.call(this),r(`aside`,{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,n&&`${t}-layout-sider--collapsed`,(!n||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:Ke(this.width)}]},this.nativeScrollbar?r(`div`,{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:`auto`},this.contentStyle],ref:`scrollableElRef`},this.$slots):r(Ue,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:`scrollbarInstRef`,style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar===`true`?{colorHover:`rgba(255, 255, 255, .4)`,color:`rgba(255, 255, 255, .3)`}:void 0}),this.$slots),i?r(i===`bar`?hr:gr,{clsPrefix:t,class:n?this.collapsedTriggerClass:this.triggerClass,style:n?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?r(`div`,{class:`${t}-layout-sider__border`}):null)}}),yr=H(`n-menu`),br=H(`n-submenu`),xr=H(`n-menu-item-group`),Sr=[G(`&::before`,`background-color: var(--n-item-color-hover);`),z(`arrow`,`
 color: var(--n-arrow-color-hover);
 `),z(`icon`,`
 color: var(--n-item-icon-color-hover);
 `),Y(`menu-item-content-header`,`
 color: var(--n-item-text-color-hover);
 `,[G(`a`,`
 color: var(--n-item-text-color-hover);
 `),z(`extra`,`
 color: var(--n-item-text-color-hover);
 `)])],Cr=[z(`icon`,`
 color: var(--n-item-icon-color-hover-horizontal);
 `),Y(`menu-item-content-header`,`
 color: var(--n-item-text-color-hover-horizontal);
 `,[G(`a`,`
 color: var(--n-item-text-color-hover-horizontal);
 `),z(`extra`,`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],wr=G([Y(`menu`,`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[J(`horizontal`,`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[Y(`submenu`,`margin: 0;`),Y(`menu-item`,`margin: 0;`),Y(`menu-item-content`,`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[G(`&::before`,`display: none;`),J(`selected`,`border-bottom: 2px solid var(--n-border-color-horizontal)`)]),Y(`menu-item-content`,[J(`selected`,[z(`icon`,`color: var(--n-item-icon-color-active-horizontal);`),Y(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-horizontal);
 `,[G(`a`,`color: var(--n-item-text-color-active-horizontal);`),z(`extra`,`color: var(--n-item-text-color-active-horizontal);`)])]),J(`child-active`,`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[Y(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[G(`a`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `),z(`extra`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),z(`icon`,`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),U(`disabled`,[U(`selected, child-active`,[G(`&:focus-within`,Cr)]),J(`selected`,[Tr(null,[z(`icon`,`color: var(--n-item-icon-color-active-hover-horizontal);`),Y(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[G(`a`,`color: var(--n-item-text-color-active-hover-horizontal);`),z(`extra`,`color: var(--n-item-text-color-active-hover-horizontal);`)])])]),J(`child-active`,[Tr(null,[z(`icon`,`color: var(--n-item-icon-color-child-active-hover-horizontal);`),Y(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[G(`a`,`color: var(--n-item-text-color-child-active-hover-horizontal);`),z(`extra`,`color: var(--n-item-text-color-child-active-hover-horizontal);`)])])]),Tr(`border-bottom: 2px solid var(--n-border-color-horizontal);`,Cr)]),Y(`menu-item-content-header`,[G(`a`,`color: var(--n-item-text-color-horizontal);`)])])]),U(`responsive`,[Y(`menu-item-content-header`,`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),J(`collapsed`,[Y(`menu-item-content`,[J(`selected`,[G(`&::before`,`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),Y(`menu-item-content-header`,`opacity: 0;`),z(`arrow`,`opacity: 0;`),z(`icon`,`color: var(--n-item-icon-color-collapsed);`)])]),Y(`menu-item`,`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),Y(`menu-item-content`,`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[G(`> *`,`z-index: 1;`),G(`&::before`,`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),J(`disabled`,`
 opacity: .45;
 cursor: not-allowed;
 `),J(`collapsed`,[z(`arrow`,`transform: rotate(0);`)]),J(`selected`,[G(`&::before`,`background-color: var(--n-item-color-active);`),z(`arrow`,`color: var(--n-arrow-color-active);`),z(`icon`,`color: var(--n-item-icon-color-active);`),Y(`menu-item-content-header`,`
 color: var(--n-item-text-color-active);
 `,[G(`a`,`color: var(--n-item-text-color-active);`),z(`extra`,`color: var(--n-item-text-color-active);`)])]),J(`child-active`,[Y(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active);
 `,[G(`a`,`
 color: var(--n-item-text-color-child-active);
 `),z(`extra`,`
 color: var(--n-item-text-color-child-active);
 `)]),z(`arrow`,`
 color: var(--n-arrow-color-child-active);
 `),z(`icon`,`
 color: var(--n-item-icon-color-child-active);
 `)]),U(`disabled`,[U(`selected, child-active`,[G(`&:focus-within`,Sr)]),J(`selected`,[Tr(null,[z(`arrow`,`color: var(--n-arrow-color-active-hover);`),z(`icon`,`color: var(--n-item-icon-color-active-hover);`),Y(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-hover);
 `,[G(`a`,`color: var(--n-item-text-color-active-hover);`),z(`extra`,`color: var(--n-item-text-color-active-hover);`)])])]),J(`child-active`,[Tr(null,[z(`arrow`,`color: var(--n-arrow-color-child-active-hover);`),z(`icon`,`color: var(--n-item-icon-color-child-active-hover);`),Y(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-hover);
 `,[G(`a`,`color: var(--n-item-text-color-child-active-hover);`),z(`extra`,`color: var(--n-item-text-color-child-active-hover);`)])])]),J(`selected`,[Tr(null,[G(`&::before`,`background-color: var(--n-item-color-active-hover);`)])]),Tr(null,Sr)]),z(`icon`,`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),z(`arrow`,`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),Y(`menu-item-content-header`,`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[G(`a`,`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[G(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),z(`extra`,`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),Y(`submenu`,`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[Y(`menu-item-content`,`
 height: var(--n-item-height);
 `),Y(`submenu-children`,`
 overflow: hidden;
 padding: 0;
 `,[Bt({duration:`.2s`})])]),Y(`menu-item-group`,[Y(`menu-item-group-title`,`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),Y(`menu-tooltip`,[G(`a`,`
 color: inherit;
 text-decoration: none;
 `)]),Y(`menu-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function Tr(e,t){return[J(`hover`,e,t),G(`&:hover`,e,t)]}var Er=w({name:`MenuOptionContent`,props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){let{props:t}=d(yr);return{menuProps:t,style:L(()=>{let{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:L(()=>{let{maxIconSize:t,activeIconSize:n,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){let{clsPrefix:e,tmNode:t,menuProps:{renderIcon:n,renderLabel:i,renderExtra:a,expandIcon:o}}=this,s=n?n(t.rawNode):Pe(this.icon);return r(`div`,{onClick:e=>{var t;(t=this.onClick)==null||t.call(this,e)},role:`none`,class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&r(`div`,{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:`none`},[s]),r(`div`,{class:`${e}-menu-item-content-header`,role:`none`},this.isEllipsisPlaceholder?this.title:i?i(t.rawNode):Pe(this.title),this.extra||a?r(`span`,{class:`${e}-menu-item-content-header__extra`},` `,a?a(t.rawNode):Pe(this.extra)):null),this.showArrow?r(q,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>o?o(t.rawNode):r(on,null)}):null)}}),Dr=8;function Or(e){let t=d(yr),{props:n,mergedCollapsedRef:r}=t,i=d(br,null),a=d(xr,null),o=L(()=>n.mode===`horizontal`),s=L(()=>o.value?n.dropdownPlacement:`tmNodes`in e?`right-start`:`right`),c=L(()=>Math.max(n.collapsedIconSize??n.iconSize,n.iconSize));return{dropdownPlacement:s,activeIconSize:L(()=>!o.value&&e.root&&r.value?n.collapsedIconSize??n.iconSize:n.iconSize),maxIconSize:c,paddingLeft:L(()=>{if(o.value)return;let{collapsedWidth:t,indent:s,rootIndent:l}=n,{root:u,isGroup:d}=e,f=l===void 0?s:l;return u?r.value?t/2-c.value/2:f:a&&typeof a.paddingLeftRef.value==`number`?s/2+a.paddingLeftRef.value:i&&typeof i.paddingLeftRef.value==`number`?(d?s/2:s)+i.paddingLeftRef.value:0}),iconMarginRight:L(()=>{let{collapsedWidth:t,indent:i,rootIndent:a}=n,{value:s}=c,{root:l}=e;return o.value||!l||!r.value?Dr:(a===void 0?i:a)+s+Dr-(t+s)/2}),NMenu:t,NSubmenu:i,NMenuOptionGroup:a}}var kr={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ar=w({name:`MenuDivider`,setup(){let{mergedClsPrefixRef:e,isHorizontalRef:t}=d(yr);return()=>t.value?null:r(`div`,{class:`${e.value}-menu-divider`})}}),jr=Object.assign(Object.assign({},kr),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Mr=qe(jr),Nr=w({name:`MenuOption`,props:jr,setup(e){let t=Or(e),{NSubmenu:n,NMenu:r,NMenuOptionGroup:i}=t,{props:a,mergedClsPrefixRef:o,mergedCollapsedRef:s}=r,c=n?n.mergedDisabledRef:i?i.mergedDisabledRef:{value:!1},l=L(()=>c.value||e.disabled);function u(t){let{onClick:n}=e;n&&n(t)}function d(t){l.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),u(t))}return{mergedClsPrefix:o,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:a,dropdownEnabled:Z(()=>e.root&&s.value&&a.mode!==`horizontal`&&!l.value),selected:Z(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:l,handleClick:d}},render(){let{mergedClsPrefix:e,mergedTheme:t,tmNode:n,menuProps:{renderLabel:i,nodeProps:a}}=this,o=a?.(n.rawNode);return r(`div`,Object.assign({},o,{role:`menuitem`,class:[`${e}-menu-item`,o?.class]}),r(Et,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:`hover`,placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:[`menu-tooltip`]},{default:()=>i?i(n.rawNode):Pe(this.title),trigger:()=>r(Er,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Pr=Object.assign(Object.assign({},kr),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Fr=qe(Pr),Ir=w({name:`MenuOptionGroup`,props:Pr,setup(e){let t=Or(e),{NSubmenu:n}=t,i=L(()=>n?.mergedDisabledRef.value?!0:e.tmNode.disabled);F(xr,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:i});let{mergedClsPrefixRef:a,props:o}=d(yr);return function(){let{value:n}=a,i=t.paddingLeft.value,{nodeProps:s}=o,c=s?.(e.tmNode.rawNode);return r(`div`,{class:`${n}-menu-item-group`,role:`group`},r(`div`,Object.assign({},c,{class:[`${n}-menu-item-group-title`,c?.class],style:[c?.style||``,i===void 0?``:`padding-left: ${i}px;`]}),Pe(e.title),e.extra?r(M,null,` `,Pe(e.extra)):null),r(`div`,null,e.tmNodes.map(e=>zr(e,o))))}}});function Lr(e){return e.type===`divider`||e.type===`render`}function Rr(e){return e.type===`divider`}function zr(e,t){let{rawNode:n}=e,{show:i}=n;if(i===!1)return null;if(Lr(n))return Rr(n)?r(Ar,Object.assign({key:e.key},n.props)):null;let{labelField:a}=t,{key:o,level:s,isGroup:c}=e,l=Object.assign(Object.assign({},n),{title:n.title||n[a],extra:n.titleExtra||n.extra,key:o,internalKey:o,level:s,root:s===0,isGroup:c});return e.children?e.isGroup?r(Ir,Ae(l,Fr,{tmNode:e,tmNodes:e.children,key:o})):r(Hr,Ae(l,Vr,{key:o,rawNodes:n[t.childrenField],tmNodes:e.children,tmNode:e})):r(Nr,Ae(l,Mr,{key:o,tmNode:e}))}var Br=Object.assign(Object.assign({},kr),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Vr=qe(Br),Hr=w({name:`Submenu`,props:Br,setup(e){let t=Or(e),{NMenu:n,NSubmenu:r}=t,{props:i,mergedCollapsedRef:a,mergedThemeRef:o}=n,s=L(()=>{let{disabled:t}=e;return r?.mergedDisabledRef.value||i.disabled?!0:t}),l=c(!1);F(br,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),F(xr,null);function u(){let{onClick:t}=e;t&&t()}function d(){s.value||(a.value||n.toggleExpand(e.internalKey),u())}function f(e){l.value=e}return{menuProps:i,mergedTheme:o,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:l,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:n.mergedValueRef,childActive:Z(()=>e.virtualChildActive??n.activePathRef.value.includes(e.internalKey)),collapsed:L(()=>i.mode===`horizontal`?!1:a.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:L(()=>!s.value&&(i.mode===`horizontal`||a.value)),handlePopoverShowChange:f,handleClick:d}},render(){let{mergedClsPrefix:e,menuProps:{renderIcon:t,renderLabel:n}}=this,i=()=>{let{isHorizontal:e,paddingLeft:t,collapsed:n,mergedDisabled:i,maxIconSize:a,activeIconSize:o,title:s,childActive:c,icon:l,handleClick:u,menuProps:{nodeProps:d},dropdownShow:f,iconMarginRight:p,tmNode:m,mergedClsPrefix:h,isEllipsisPlaceholder:g,extra:_}=this,v=d?.(m.rawNode);return r(`div`,Object.assign({},v,{class:[`${h}-menu-item`,v?.class],role:`menuitem`}),r(Er,{tmNode:m,paddingLeft:t,collapsed:n,disabled:i,iconMarginRight:p,maxIconSize:a,activeIconSize:o,title:s,extra:_,showArrow:!e,childActive:c,clsPrefix:h,icon:l,hover:f,onClick:u,isEllipsisPlaceholder:g}))},a=()=>r(xt,null,{default:()=>{let{tmNodes:t,collapsed:n}=this;return n?null:r(`div`,{class:`${e}-submenu-children`,role:`menu`},t.map(e=>zr(e,this.menuProps)))}});return this.root?r(kt,Object.assign({size:`large`,trigger:`hover`},this.menuProps?.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:`14px`,optionIconSizeLarge:`18px`},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>r(`div`,{class:`${e}-submenu`,role:`menu`,"aria-expanded":!this.collapsed,id:this.domId},i(),this.isHorizontal?null:a())}):r(`div`,{class:`${e}-submenu`,role:`menu`,"aria-expanded":!this.collapsed,id:this.domId},i(),a())}}),Ur=w({name:`Menu`,inheritAttrs:!1,props:Object.assign(Object.assign({},K.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},disabledField:{type:String,default:`disabled`},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:`vertical`},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:`bottom`},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=V(e),i=K(`Menu`,`-menu`,wr,Lt,e,t),a=d(nr,null),o=L(()=>{let{collapsed:t}=e;if(t!==void 0)return t;if(a){let{collapseModeRef:e,collapsedRef:t}=a;if(e.value===`width`)return t.value??!1}return!1}),l=L(()=>{let{keyField:t,childrenField:n,disabledField:r}=e;return Ct(e.items||e.options,{getIgnored(e){return Lr(e)},getChildren(e){return e[n]},getDisabled(e){return e[r]},getKey(e){return e[t]??e.name}})}),u=L(()=>new Set(l.value.treeNodes.map(e=>e.key))),{watchProps:f}=e,p=c(null);f?.includes(`defaultValue`)?C(()=>{p.value=e.defaultValue}):p.value=e.defaultValue;let m=dt(s(e,`value`),p),h=c([]),g=()=>{h.value=e.defaultExpandAll?l.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||l.value.getPath(m.value,{includeSelf:!1}).keyPath};f?.includes(`defaultExpandedKeys`)?C(g):g();let _=lt(e,[`expandedNames`,`expandedKeys`]),v=dt(_,h),y=L(()=>l.value.treeNodes),b=L(()=>l.value.getPath(m.value).keyPath);F(yr,{props:e,mergedCollapsedRef:o,mergedThemeRef:i,mergedValueRef:m,mergedExpandedKeysRef:v,activePathRef:b,mergedClsPrefixRef:t,isHorizontalRef:L(()=>e.mode===`horizontal`),invertedRef:s(e,`inverted`),doSelect:x,toggleExpand:w});function x(t,n){let{"onUpdate:value":r,onUpdateValue:i,onSelect:a}=e;i&&Q(i,t,n),r&&Q(r,t,n),a&&Q(a,t,n),p.value=t}function S(t){let{"onUpdate:expandedKeys":n,onUpdateExpandedKeys:r,onExpandedNamesChange:i,onOpenNamesChange:a}=e;n&&Q(n,t),r&&Q(r,t),i&&Q(i,t),a&&Q(a,t),h.value=t}function w(t){let n=Array.from(v.value),r=n.findIndex(e=>e===t);if(~r)n.splice(r,1);else{if(e.accordion&&u.value.has(t)){let e=n.findIndex(e=>u.value.has(e));e>-1&&n.splice(e,1)}n.push(t)}S(n)}let T=t=>{let n=l.value.getPath(t??m.value,{includeSelf:!1}).keyPath;if(!n.length)return;let r=Array.from(v.value),i=new Set([...r,...n]);e.accordion&&u.value.forEach(e=>{i.has(e)&&!n.includes(e)&&i.delete(e)}),S(Array.from(i))},E=L(()=>{let{inverted:t}=e,{common:{cubicBezierEaseInOut:n},self:r}=i.value,{borderRadius:a,borderColorHorizontal:o,fontSize:s,itemHeight:c,dividerColor:l}=r,u={"--n-divider-color":l,"--n-bezier":n,"--n-font-size":s,"--n-border-color-horizontal":o,"--n-border-radius":a,"--n-item-height":c};return t?(u[`--n-group-text-color`]=r.groupTextColorInverted,u[`--n-color`]=r.colorInverted,u[`--n-item-text-color`]=r.itemTextColorInverted,u[`--n-item-text-color-hover`]=r.itemTextColorHoverInverted,u[`--n-item-text-color-active`]=r.itemTextColorActiveInverted,u[`--n-item-text-color-child-active`]=r.itemTextColorChildActiveInverted,u[`--n-item-text-color-child-active-hover`]=r.itemTextColorChildActiveInverted,u[`--n-item-text-color-active-hover`]=r.itemTextColorActiveHoverInverted,u[`--n-item-icon-color`]=r.itemIconColorInverted,u[`--n-item-icon-color-hover`]=r.itemIconColorHoverInverted,u[`--n-item-icon-color-active`]=r.itemIconColorActiveInverted,u[`--n-item-icon-color-active-hover`]=r.itemIconColorActiveHoverInverted,u[`--n-item-icon-color-child-active`]=r.itemIconColorChildActiveInverted,u[`--n-item-icon-color-child-active-hover`]=r.itemIconColorChildActiveHoverInverted,u[`--n-item-icon-color-collapsed`]=r.itemIconColorCollapsedInverted,u[`--n-item-text-color-horizontal`]=r.itemTextColorHorizontalInverted,u[`--n-item-text-color-hover-horizontal`]=r.itemTextColorHoverHorizontalInverted,u[`--n-item-text-color-active-horizontal`]=r.itemTextColorActiveHorizontalInverted,u[`--n-item-text-color-child-active-horizontal`]=r.itemTextColorChildActiveHorizontalInverted,u[`--n-item-text-color-child-active-hover-horizontal`]=r.itemTextColorChildActiveHoverHorizontalInverted,u[`--n-item-text-color-active-hover-horizontal`]=r.itemTextColorActiveHoverHorizontalInverted,u[`--n-item-icon-color-horizontal`]=r.itemIconColorHorizontalInverted,u[`--n-item-icon-color-hover-horizontal`]=r.itemIconColorHoverHorizontalInverted,u[`--n-item-icon-color-active-horizontal`]=r.itemIconColorActiveHorizontalInverted,u[`--n-item-icon-color-active-hover-horizontal`]=r.itemIconColorActiveHoverHorizontalInverted,u[`--n-item-icon-color-child-active-horizontal`]=r.itemIconColorChildActiveHorizontalInverted,u[`--n-item-icon-color-child-active-hover-horizontal`]=r.itemIconColorChildActiveHoverHorizontalInverted,u[`--n-arrow-color`]=r.arrowColorInverted,u[`--n-arrow-color-hover`]=r.arrowColorHoverInverted,u[`--n-arrow-color-active`]=r.arrowColorActiveInverted,u[`--n-arrow-color-active-hover`]=r.arrowColorActiveHoverInverted,u[`--n-arrow-color-child-active`]=r.arrowColorChildActiveInverted,u[`--n-arrow-color-child-active-hover`]=r.arrowColorChildActiveHoverInverted,u[`--n-item-color-hover`]=r.itemColorHoverInverted,u[`--n-item-color-active`]=r.itemColorActiveInverted,u[`--n-item-color-active-hover`]=r.itemColorActiveHoverInverted,u[`--n-item-color-active-collapsed`]=r.itemColorActiveCollapsedInverted):(u[`--n-group-text-color`]=r.groupTextColor,u[`--n-color`]=r.color,u[`--n-item-text-color`]=r.itemTextColor,u[`--n-item-text-color-hover`]=r.itemTextColorHover,u[`--n-item-text-color-active`]=r.itemTextColorActive,u[`--n-item-text-color-child-active`]=r.itemTextColorChildActive,u[`--n-item-text-color-child-active-hover`]=r.itemTextColorChildActiveHover,u[`--n-item-text-color-active-hover`]=r.itemTextColorActiveHover,u[`--n-item-icon-color`]=r.itemIconColor,u[`--n-item-icon-color-hover`]=r.itemIconColorHover,u[`--n-item-icon-color-active`]=r.itemIconColorActive,u[`--n-item-icon-color-active-hover`]=r.itemIconColorActiveHover,u[`--n-item-icon-color-child-active`]=r.itemIconColorChildActive,u[`--n-item-icon-color-child-active-hover`]=r.itemIconColorChildActiveHover,u[`--n-item-icon-color-collapsed`]=r.itemIconColorCollapsed,u[`--n-item-text-color-horizontal`]=r.itemTextColorHorizontal,u[`--n-item-text-color-hover-horizontal`]=r.itemTextColorHoverHorizontal,u[`--n-item-text-color-active-horizontal`]=r.itemTextColorActiveHorizontal,u[`--n-item-text-color-child-active-horizontal`]=r.itemTextColorChildActiveHorizontal,u[`--n-item-text-color-child-active-hover-horizontal`]=r.itemTextColorChildActiveHoverHorizontal,u[`--n-item-text-color-active-hover-horizontal`]=r.itemTextColorActiveHoverHorizontal,u[`--n-item-icon-color-horizontal`]=r.itemIconColorHorizontal,u[`--n-item-icon-color-hover-horizontal`]=r.itemIconColorHoverHorizontal,u[`--n-item-icon-color-active-horizontal`]=r.itemIconColorActiveHorizontal,u[`--n-item-icon-color-active-hover-horizontal`]=r.itemIconColorActiveHoverHorizontal,u[`--n-item-icon-color-child-active-horizontal`]=r.itemIconColorChildActiveHorizontal,u[`--n-item-icon-color-child-active-hover-horizontal`]=r.itemIconColorChildActiveHoverHorizontal,u[`--n-arrow-color`]=r.arrowColor,u[`--n-arrow-color-hover`]=r.arrowColorHover,u[`--n-arrow-color-active`]=r.arrowColorActive,u[`--n-arrow-color-active-hover`]=r.arrowColorActiveHover,u[`--n-arrow-color-child-active`]=r.arrowColorChildActive,u[`--n-arrow-color-child-active-hover`]=r.arrowColorChildActiveHover,u[`--n-item-color-hover`]=r.itemColorHover,u[`--n-item-color-active`]=r.itemColorActive,u[`--n-item-color-active-hover`]=r.itemColorActiveHover,u[`--n-item-color-active-collapsed`]=r.itemColorActiveCollapsed),u}),D=n?W(`menu`,L(()=>e.inverted?`a`:`b`),E,e):void 0,O=Xe(),k=c(null),ee=c(null),A=!0,j=()=>{var e;A?A=!1:(e=k.value)==null||e.sync({showAllItemsBeforeCalculate:!0})};function M(){return document.getElementById(O)}let N=c(-1);function P(t){N.value=e.options.length-t}function te(e){e||(N.value=-1)}let I=L(()=>{let t=N.value;return{children:t===-1?[]:e.options.slice(t)}}),R=L(()=>{let{childrenField:t,disabledField:n,keyField:r}=e;return Ct([I.value],{getIgnored(e){return Lr(e)},getChildren(e){return e[t]},getDisabled(e){return e[n]},getKey(e){return e[r]??e.name}})}),z=L(()=>Ct([{}]).treeNodes[0]);function ne(){if(N.value===-1)return r(Hr,{root:!0,level:0,key:`__ellpisisGroupPlaceholder__`,internalKey:`__ellpisisGroupPlaceholder__`,title:`···`,tmNode:z.value,domId:O,isEllipsisPlaceholder:!0});let e=R.value.treeNodes[0],t=b.value;return r(Hr,{level:0,root:!0,key:`__ellpisisGroup__`,internalKey:`__ellpisisGroup__`,title:`···`,virtualChildActive:!!e.children?.some(e=>t.includes(e.key)),tmNode:e,domId:O,rawNodes:e.rawNode.children||[],tmNodes:e.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:_,uncontrolledExpanededKeys:h,mergedExpandedKeys:v,uncontrolledValue:p,mergedValue:m,activePath:b,tmNodes:y,mergedTheme:i,mergedCollapsed:o,cssVars:n?void 0:E,themeClass:D?.themeClass,overflowRef:k,counterRef:ee,updateCounter:()=>{},onResize:j,onUpdateOverflow:te,onUpdateCount:P,renderCounter:ne,getCounter:M,onRender:D?.onRender,showOption:T,deriveResponsiveState:j}},render(){let{mergedClsPrefix:e,mode:n,themeClass:i,onRender:a}=this;a?.();let o=()=>this.tmNodes.map(e=>zr(e,this.$props)),s=n===`horizontal`&&this.responsive,c=()=>r(`div`,t(this.$attrs,{role:n===`horizontal`?`menubar`:`menu`,class:[`${e}-menu`,i,`${e}-menu--${n}`,s&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),s?r(Tt,{ref:`overflowRef`,onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:o,counter:this.renderCounter}):o());return s?r(Ge,{onResize:this.onResize},{default:c}):c()}}),Wr=w({name:`Scrollbar`,props:Object.assign(Object.assign({},K.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number,yPlacement:{type:String,default:`right`},xPlacement:{type:String,default:`bottom`}}),setup(){let e=c(null);return Object.assign(Object.assign({},{scrollTo:(...t)=>{var n;(n=e.value)==null||n.scrollTo(t[0],t[1])},scrollBy:(...t)=>{var n;(n=e.value)==null||n.scrollBy(t[0],t[1])}}),{scrollbarInstRef:e})},render(){return r(Ue,Object.assign({ref:`scrollbarInstRef`},this.$props),this.$slots)}}),Gr=G([Y(`slider`,`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[J(`reverse`,[Y(`slider-handles`,[Y(`slider-handle-wrapper`,`
 transform: translate(50%, -50%);
 `)]),Y(`slider-dots`,[Y(`slider-dot`,`
 transform: translateX(50%, -50%);
 `)]),J(`vertical`,[Y(`slider-handles`,[Y(`slider-handle-wrapper`,`
 transform: translate(-50%, -50%);
 `)]),Y(`slider-marks`,[Y(`slider-mark`,`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),Y(`slider-dots`,[Y(`slider-dot`,`
 transform: translateX(-50%) translateY(0);
 `)])])]),J(`vertical`,`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[Y(`slider-handles`,`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[Y(`slider-handle-wrapper`,`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),Y(`slider-rail`,`
 height: 100%;
 `,[z(`fill`,`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),J(`with-mark`,`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),Y(`slider-marks`,`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[Y(`slider-mark`,`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),Y(`slider-dots`,`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[Y(`slider-dot`,`
 transform: translateX(-50%) translateY(50%);
 `)])]),J(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[Y(`slider-handle`,`
 cursor: not-allowed;
 `)]),J(`with-mark`,`
 width: 100%;
 margin: 8px 0 32px 0;
 `),G(`&:hover`,[Y(`slider-rail`,{backgroundColor:`var(--n-rail-color-hover)`},[z(`fill`,{backgroundColor:`var(--n-fill-color-hover)`})]),Y(`slider-handle`,{boxShadow:`var(--n-handle-box-shadow-hover)`})]),J(`active`,[Y(`slider-rail`,{backgroundColor:`var(--n-rail-color-hover)`},[z(`fill`,{backgroundColor:`var(--n-fill-color-hover)`})]),Y(`slider-handle`,{boxShadow:`var(--n-handle-box-shadow-hover)`})]),Y(`slider-marks`,`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[Y(`slider-mark`,`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),Y(`slider-rail`,`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[z(`fill`,`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),Y(`slider-handles`,`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[Y(`slider-handle-wrapper`,`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[Y(`slider-handle`,`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[G(`&:hover`,`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),G(`&:focus`,[Y(`slider-handle`,`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[G(`&:hover`,`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),Y(`slider-dots`,`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[J(`transition-disabled`,[Y(`slider-dot`,`transition: none;`)]),Y(`slider-dot`,`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[J(`active`,`border: var(--n-dot-border-active);`)])])]),Y(`slider-handle-indicator`,`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Oe()]),Y(`slider-handle-indicator`,`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[J(`top`,`
 margin-bottom: 12px;
 `),J(`right`,`
 margin-left: 12px;
 `),J(`bottom`,`
 margin-top: 12px;
 `),J(`left`,`
 margin-right: 12px;
 `),Oe()]),ne(Y(`slider`,[Y(`slider-dot`,`background-color: var(--n-dot-color-modal);`)])),ie(Y(`slider`,[Y(`slider-dot`,`background-color: var(--n-dot-color-popover);`)]))]);function Kr(e){return window.TouchEvent&&e instanceof window.TouchEvent}function qr(){let e=new Map;return i(()=>{e.clear()}),[e,t=>n=>{e.set(t,n)}]}var Jr=0,Yr=w({name:`Slider`,props:Object.assign(Object.assign({},K.props),{to:Ne.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),slots:Object,setup(e){let{mergedClsPrefixRef:t,namespaceRef:n,inlineThemeDisabled:r}=V(e),i=K(`Slider`,`-slider`,Gr,at,e,t),a=c(null),[o,l]=qr(),[u,d]=qr(),f=c(new Set),p=mt(e),{mergedDisabledRef:m}=p,_=L(()=>{let{step:t}=e;if(Number(t)<=0||t===`mark`)return 0;let n=t.toString(),r=0;return n.includes(`.`)&&(r=n.length-n.indexOf(`.`)-1),r}),v=c(e.defaultValue),y=dt(s(e,`value`),v),b=L(()=>{let{value:t}=y;return(e.range?t:[t]).map(B)}),x=L(()=>b.value.length>2),S=L(()=>e.placement===void 0?e.vertical?`right`:`top`:e.placement),C=L(()=>{let{marks:t}=e;return t?Object.keys(t).map(Number.parseFloat):null}),w=c(-1),T=c(-1),E=c(-1),D=c(!1),O=c(!1),ee=L(()=>{let{vertical:t,reverse:n}=e;return t?n?`top`:`bottom`:n?`right`:`left`}),A=L(()=>{if(x.value)return;let t=b.value,n=re(e.range?Math.min(...t):e.min),r=re(e.range?Math.max(...t):t[0]),{value:i}=ee;return e.vertical?{[i]:`${n}%`,height:`${r-n}%`}:{[i]:`${n}%`,width:`${r-n}%`}}),j=L(()=>{let t=[],{marks:n}=e;if(n){let r=b.value.slice();r.sort((e,t)=>e-t);let{value:i}=ee,{value:a}=x,{range:o}=e,s=a?()=>!1:e=>o?e>=r[0]&&e<=r[r.length-1]:e<=r[0];for(let e of Object.keys(n)){let r=Number(e);t.push({active:s(r),key:r,label:n[e],style:{[i]:`${re(r)}%`}})}}return t});function M(e,t){let n=re(e),{value:r}=ee;return{[r]:`${n}%`,zIndex:t===w.value?1:0}}function N(t){return e.showTooltip||E.value===t||w.value===t&&D.value}function P(e){return D.value?!(w.value===e&&T.value===e):!0}function te(e){var t;~e&&(w.value=e,(t=o.get(e))==null||t.focus())}function F(){u.forEach((e,t)=>{N(t)&&e.syncPosition()})}function I(t){let{"onUpdate:value":n,onUpdateValue:r}=e,{nTriggerFormInput:i,nTriggerFormChange:a}=p;r&&Q(r,t),n&&Q(n,t),v.value=t,i(),a()}function R(t){let{range:n}=e;if(n){if(Array.isArray(t)){let{value:e}=b;t.join()!==e.join()&&I(t)}}else Array.isArray(t)||b.value[0]!==t&&I(t)}function z(t,n){if(e.range){let e=b.value.slice();e.splice(n,1,t),R(e)}else R(t)}function ne(t,n,r){let i=r!==void 0;r||=t-n>0?1:-1;let a=C.value||[],{step:o}=e;if(o===`mark`){let e=ae(t,a.concat(n),i?r:void 0);return e?e.value:n}if(o<=0)return n;let{value:s}=_,c;if(i){let e=Number((n/o).toFixed(s)),t=Math.floor(e),i=e>t?t:t-1,l=e<t?t:t+1;c=ae(n,[Number((i*o).toFixed(s)),Number((l*o).toFixed(s)),...a],r)}else{let e=H(t);c=ae(t,[...a,e])}return c?B(c.value):n}function B(t){return Math.min(e.max,Math.max(e.min,t))}function re(t){let{max:n,min:r}=e;return(t-r)/(n-r)*100}function ie(t){let{max:n,min:r}=e;return r+(n-r)*t}function H(t){let{step:n,min:r}=e;if(Number(n)<=0||n===`mark`)return t;let i=Math.round((t-r)/n)*n+r;return Number(i.toFixed(_.value))}function ae(e,t=C.value,n){if(!t?.length)return null;let r=null,i=-1;for(;++i<t.length;){let a=t[i]-e,o=Math.abs(a);(n===void 0||a*n>0)&&(r===null||o<r.distance)&&(r={index:i,distance:o,value:t[i]})}return r}function U(t){let n=a.value;if(!n)return;let r=Kr(t)?t.touches[0]:t,i=n.getBoundingClientRect(),o;return o=e.vertical?(i.bottom-r.clientY)/i.height:(r.clientX-i.left)/i.width,e.reverse&&(o=1-o),ie(o)}function oe(t){if(m.value||!e.keyboard)return;let{vertical:n,reverse:r}=e;switch(t.key){case`ArrowUp`:t.preventDefault(),se(n&&r?-1:1);break;case`ArrowRight`:t.preventDefault(),se(!n&&r?-1:1);break;case`ArrowDown`:t.preventDefault(),se(n&&r?1:-1);break;case`ArrowLeft`:t.preventDefault(),se(!n&&r?1:-1);break}}function se(t){let n=w.value;if(n===-1)return;let{step:r}=e,i=b.value[n];z(ne(Number(r)<=0||r===`mark`?i:i+r*t,i,t>0?1:-1),n)}function ce(t){if(m.value||!Kr(t)&&t.button!==Jr)return;let n=U(t);if(n===void 0)return;let r=b.value.slice(),i=e.range?ae(n,r)?.index??-1:0;i!==-1&&(t.preventDefault(),te(i),le(),z(ne(n,b.value[i]),i))}function le(){D.value||(D.value=!0,e.onDragstart&&Q(e.onDragstart),He(`touchend`,document,ue),He(`mouseup`,document,ue),He(`touchmove`,document,q),He(`mousemove`,document,q))}function G(){D.value&&(D.value=!1,e.onDragend&&Q(e.onDragend),Ze(`touchend`,document,ue),Ze(`mouseup`,document,ue),Ze(`touchmove`,document,q),Ze(`mousemove`,document,q))}function q(e){let{value:t}=w;if(!D.value||t===-1){G();return}let n=U(e);n!==void 0&&z(ne(n,b.value[t]),t)}function ue(){G()}function de(e){w.value=e,m.value||(E.value=e)}function J(e){w.value===e&&(w.value=-1,G()),E.value===e&&(E.value=-1)}function Y(e){E.value=e}function X(e){E.value===e&&(E.value=-1)}k(w,(e,t)=>void h(()=>T.value=t)),k(y,()=>{if(e.marks){if(O.value)return;O.value=!0,h(()=>{O.value=!1})}h(F)}),g(()=>{G()});let Z=L(()=>{let{self:{markFontSize:e,railColor:t,railColorHover:n,fillColor:r,fillColorHover:a,handleColor:o,opacityDisabled:s,dotColor:c,dotColorModal:l,handleBoxShadow:u,handleBoxShadowHover:d,handleBoxShadowActive:f,handleBoxShadowFocus:p,dotBorder:m,dotBoxShadow:h,railHeight:g,railWidthVertical:_,handleSize:v,dotHeight:y,dotWidth:b,dotBorderRadius:x,fontSize:S,dotBorderActive:C,dotColorPopover:w},common:{cubicBezierEaseInOut:T}}=i.value;return{"--n-bezier":T,"--n-dot-border":m,"--n-dot-border-active":C,"--n-dot-border-radius":x,"--n-dot-box-shadow":h,"--n-dot-color":c,"--n-dot-color-modal":l,"--n-dot-color-popover":w,"--n-dot-height":y,"--n-dot-width":b,"--n-fill-color":r,"--n-fill-color-hover":a,"--n-font-size":S,"--n-handle-box-shadow":u,"--n-handle-box-shadow-active":f,"--n-handle-box-shadow-focus":p,"--n-handle-box-shadow-hover":d,"--n-handle-color":o,"--n-handle-size":v,"--n-opacity-disabled":s,"--n-rail-color":t,"--n-rail-color-hover":n,"--n-rail-height":g,"--n-rail-width-vertical":_,"--n-mark-font-size":e}}),fe=r?W(`slider`,void 0,Z,e):void 0,pe=L(()=>{let{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:n,indicatorTextColor:r,indicatorBorderRadius:a}}=i.value;return{"--n-font-size":e,"--n-indicator-border-radius":a,"--n-indicator-box-shadow":n,"--n-indicator-color":t,"--n-indicator-text-color":r}}),me=r?W(`slider-indicator`,void 0,pe,e):void 0;return{mergedClsPrefix:t,namespace:n,uncontrolledValue:v,mergedValue:y,mergedDisabled:m,mergedPlacement:S,isMounted:bt(),adjustedTo:Ne(e),dotTransitionDisabled:O,markInfos:j,isShowTooltip:N,shouldKeepTooltipTransition:P,handleRailRef:a,setHandleRefs:l,setFollowerRefs:d,fillStyle:A,getHandleStyle:M,activeIndex:w,arrifiedValues:b,followerEnabledIndexSet:f,handleRailMouseDown:ce,handleHandleFocus:de,handleHandleBlur:J,handleHandleMouseEnter:Y,handleHandleMouseLeave:X,handleRailKeyDown:oe,indicatorCssVars:r?void 0:pe,indicatorThemeClass:me?.themeClass,indicatorOnRender:me?.onRender,cssVars:r?void 0:Z,themeClass:fe?.themeClass,onRender:fe?.onRender}},render(){var e;let{mergedClsPrefix:t,themeClass:n,formatTooltip:i}=this;return(e=this.onRender)==null||e.call(this),r(`div`,{class:[`${t}-slider`,n,{[`${t}-slider--disabled`]:this.mergedDisabled,[`${t}-slider--active`]:this.activeIndex!==-1,[`${t}-slider--with-mark`]:this.marks,[`${t}-slider--vertical`]:this.vertical,[`${t}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},r(`div`,{class:`${t}-slider-rail`},r(`div`,{class:`${t}-slider-rail__fill`,style:this.fillStyle}),this.marks?r(`div`,{class:[`${t}-slider-dots`,this.dotTransitionDisabled&&`${t}-slider-dots--transition-disabled`]},this.markInfos.map(e=>r(`div`,{key:e.key,class:[`${t}-slider-dot`,{[`${t}-slider-dot--active`]:e.active}],style:e.style}))):null,r(`div`,{ref:`handleRailRef`,class:`${t}-slider-handles`},this.arrifiedValues.map((e,n)=>{let a=this.isShowTooltip(n);return r(Ce,null,{default:()=>[r(be,null,{default:()=>r(`div`,{ref:this.setHandleRefs(n),class:`${t}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:`slider`,"aria-valuenow":e,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?`vertical`:`horizontal`,"aria-disabled":this.disabled,style:this.getHandleStyle(e,n),onFocus:()=>{this.handleHandleFocus(n)},onBlur:()=>{this.handleHandleBlur(n)},onMouseenter:()=>{this.handleHandleMouseEnter(n)},onMouseleave:()=>{this.handleHandleMouseLeave(n)}},he(this.$slots.thumb,()=>[r(`div`,{class:`${t}-slider-handle`})]))}),this.tooltip&&r(Re,{ref:this.setFollowerRefs(n),show:a,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(n),teleportDisabled:this.adjustedTo===Ne.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>r(te,{name:`fade-in-scale-up-transition`,appear:this.isMounted,css:this.shouldKeepTooltipTransition(n),onEnter:()=>{this.followerEnabledIndexSet.add(n)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(n)}},{default:()=>{var n;return a?((n=this.indicatorOnRender)==null||n.call(this),r(`div`,{class:[`${t}-slider-handle-indicator`,this.indicatorThemeClass,`${t}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof i==`function`?i(e):e)):null}})})]})})),this.marks?r(`div`,{class:`${t}-slider-marks`},this.markInfos.map(e=>r(`div`,{key:e.key,class:`${t}-slider-mark`,style:e.style},typeof e.label==`function`?e.label():e.label))):null))}}),Xr=Y(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[z(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),z(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),z(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),Y(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[pt({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),z(`checked, unchecked`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),z(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),z(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),G(`&:focus`,[z(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),J(`round`,[z(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[z(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),U(`disabled`,[U(`icon`,[J(`rubber-band`,[J(`pressed`,[z(`rail`,[z(`button`,`max-width: var(--n-button-width-pressed);`)])]),z(`rail`,[G(`&:active`,[z(`button`,`max-width: var(--n-button-width-pressed);`)])]),J(`active`,[J(`pressed`,[z(`rail`,[z(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),z(`rail`,[G(`&:active`,[z(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),J(`active`,[z(`rail`,[z(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),z(`rail`,`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[z(`button-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[pt()]),z(`button`,`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),J(`active`,[z(`rail`,`background-color: var(--n-rail-color-active);`)]),J(`loading`,[z(`rail`,`
 cursor: wait;
 `)]),J(`disabled`,[z(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Zr=Object.assign(Object.assign({},K.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),Qr,$r=w({name:`Switch`,props:Zr,slots:Object,setup(e){Qr===void 0&&(Qr=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:r}=V(e),i=K(`Switch`,`-switch`,Xr,rt,e,t),a=mt(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:r?.value?.Switch?.size||`medium`:e.size}}),{mergedSizeRef:o,mergedDisabledRef:l}=a,u=c(e.defaultValue),d=dt(s(e,`value`),u),f=L(()=>d.value===e.checkedValue),p=c(!1),m=c(!1),h=L(()=>{let{railStyle:t}=e;if(t)return t({focused:m.value,checked:f.value})});function g(t){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=e,{nTriggerFormInput:o,nTriggerFormChange:s}=a;n&&Q(n,t),i&&Q(i,t),r&&Q(r,t),u.value=t,o(),s()}function _(){let{nTriggerFormFocus:e}=a;e()}function v(){let{nTriggerFormBlur:e}=a;e()}function y(){e.loading||l.value||(d.value===e.checkedValue?g(e.uncheckedValue):g(e.checkedValue))}function b(){m.value=!0,_()}function x(){m.value=!1,v(),p.value=!1}function S(t){e.loading||l.value||t.key===` `&&(d.value===e.checkedValue?g(e.uncheckedValue):g(e.checkedValue),p.value=!1)}function C(t){e.loading||l.value||t.key===` `&&(t.preventDefault(),p.value=!0)}let w=L(()=>{let{value:e}=o,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:a,buttonColor:s,boxShadowFocus:c,loadingColor:l,textColor:u,iconColor:d,[B(`buttonHeight`,e)]:f,[B(`buttonWidth`,e)]:p,[B(`buttonWidthPressed`,e)]:m,[B(`railHeight`,e)]:h,[B(`railWidth`,e)]:g,[B(`railBorderRadius`,e)]:_,[B(`buttonBorderRadius`,e)]:v},common:{cubicBezierEaseInOut:y}}=i.value,b,x,S;return Qr?(b=`calc((${h} - ${f}) / 2)`,x=`max(${h}, ${f})`,S=`max(${g}, calc(${g} + ${f} - ${h}))`):(b=Be((ze(h)-ze(f))/2),x=Be(Math.max(ze(h),ze(f))),S=ze(h)>ze(f)?g:Be(ze(g)+ze(f)-ze(h))),{"--n-bezier":y,"--n-button-border-radius":v,"--n-button-box-shadow":a,"--n-button-color":s,"--n-button-width":p,"--n-button-width-pressed":m,"--n-button-height":f,"--n-height":x,"--n-offset":b,"--n-opacity-disabled":t,"--n-rail-border-radius":_,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":h,"--n-rail-width":g,"--n-width":S,"--n-box-shadow-focus":c,"--n-loading-color":l,"--n-text-color":u,"--n-icon-color":d}}),T=n?W(`switch`,L(()=>o.value[0]),w,e):void 0;return{handleClick:y,handleBlur:x,handleFocus:b,handleKeyup:S,handleKeydown:C,mergedRailStyle:h,pressed:p,mergedClsPrefix:t,mergedValue:d,checked:f,mergedDisabled:l,cssVars:n?void 0:w,themeClass:T?.themeClass,onRender:T?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:t,checked:n,mergedRailStyle:i,onRender:a,$slots:o}=this;a?.();let{checked:s,unchecked:c,icon:l,"checked-icon":u,"unchecked-icon":d}=o,f=!(me(l)&&me(u)&&me(d));return r(`div`,{role:`switch`,"aria-checked":n,class:[`${e}-switch`,this.themeClass,f&&`${e}-switch--icon`,n&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},r(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:i},X(s,t=>X(c,n=>t||n?r(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},r(`div`,{class:`${e}-switch__rail-placeholder`},r(`div`,{class:`${e}-switch__button-placeholder`}),t),r(`div`,{class:`${e}-switch__rail-placeholder`},r(`div`,{class:`${e}-switch__button-placeholder`}),n)):null)),r(`div`,{class:`${e}-switch__button`},X(l,t=>X(u,n=>X(d,i=>r(_t,null,{default:()=>this.loading?r(yt,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(n||t)?r(`div`,{class:`${e}-switch__button-icon`,key:n?`checked-icon`:`icon`},n||t):!this.checked&&(i||t)?r(`div`,{class:`${e}-switch__button-icon`,key:i?`unchecked-icon`:`icon`},i||t):null})))),X(s,t=>t&&r(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),X(c,t=>t&&r(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}}),ei=H(`n-tabs`),ti={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};w({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:ti,slots:Object,setup(e){let t=d(ei,null);return t||re(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return r(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});var ni=w({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},je(ti,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:f,handleAdd:p,activateTab:m,handleClose:h}=d(ei);return{trigger:f,mergedClosable:L(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){p();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&m(t)}):m(t)}}}},render(){let{internalAddable:e,clsPrefix:n,name:i,disabled:a,label:o,tab:s,value:c,mergedClosable:l,trigger:u,$slots:{default:d}}=this,f=o??s;return r(`div`,{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?r(`div`,{class:`${n}-tabs-tab-pad`}):null,r(`div`,Object.assign({key:i,"data-name":i,"data-disabled":a?!0:void 0},t({class:[`${n}-tabs-tab`,c===i&&`${n}-tabs-tab--active`,a&&`${n}-tabs-tab--disabled`,l&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:u===`click`?this.activateTab:void 0,onMouseenter:u===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),r(`span`,{class:`${n}-tabs-tab__label`},e?r(M,null,r(`div`,{class:`${n}-tabs-tab__height-placeholder`},`\xA0`),r(q,{clsPrefix:n},{default:()=>r(an,null)})):d?d():typeof f==`object`?f:Pe(f??i)),l&&this.type===`card`?r(ge,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:a}):null))}}),ri=Y(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[J(`segment-type`,[Y(`tabs-rail`,[G(`&.transition-disabled`,[Y(`tabs-capsule`,`
 transition: none;
 `)])])]),J(`top`,[Y(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),J(`left`,[Y(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),J(`left, right`,`
 flex-direction: row;
 `,[Y(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),Y(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),J(`right`,`
 flex-direction: row-reverse;
 `,[Y(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),Y(`tabs-bar`,`
 left: 0;
 `)]),J(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[Y(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),Y(`tabs-bar`,`
 top: 0;
 `)]),Y(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[Y(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),Y(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Y(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[J(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),G(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),J(`flex`,[Y(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[Y(`tabs-wrapper`,`
 width: 100%;
 `,[Y(`tabs-tab`,`
 margin-right: 0;
 `)])])]),Y(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[z(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),z(`prefix`,`padding-right: 16px;`),z(`suffix`,`padding-left: 16px;`)]),J(`top, bottom`,[G(`>`,[Y(`tabs-nav`,[Y(`tabs-nav-scroll-wrapper`,[G(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),G(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),J(`shadow-start`,[G(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),J(`shadow-end`,[G(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),J(`left, right`,[Y(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),G(`>`,[Y(`tabs-nav`,[Y(`tabs-nav-scroll-wrapper`,[G(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),G(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),J(`shadow-start`,[G(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),J(`shadow-end`,[G(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),Y(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[Y(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[G(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),G(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),Y(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),Y(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),Y(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),Y(`tabs-tab`,`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[J(`disabled`,{cursor:`not-allowed`}),z(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),z(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),Y(`tabs-bar`,`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[G(`&.transition-disabled`,`
 transition: none;
 `),J(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),Y(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),Y(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[G(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),G(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),G(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),G(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),G(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),Y(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),J(`line-type, bar-type`,[Y(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[G(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),J(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),J(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),Y(`tabs-nav`,[J(`line-type`,[J(`top`,[z(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Y(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Y(`tabs-bar`,`
 bottom: -1px;
 `)]),J(`left`,[z(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Y(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Y(`tabs-bar`,`
 right: -1px;
 `)]),J(`right`,[z(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Y(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Y(`tabs-bar`,`
 left: -1px;
 `)]),J(`bottom`,[z(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Y(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Y(`tabs-bar`,`
 top: -1px;
 `)]),z(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),Y(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),Y(`tabs-bar`,`
 border-radius: 0;
 `)]),J(`card-type`,[z(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),Y(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),Y(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),Y(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[J(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[z(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),U(`disabled`,[G(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),J(`closable`,`padding-right: 8px;`),J(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),J(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),J(`left, right`,`
 flex-direction: column; 
 `,[z(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),Y(`tabs-wrapper`,`
 flex-direction: column;
 `),Y(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[Y(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),J(`top`,[J(`card-type`,[Y(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Y(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[J(`active`,`
 border-bottom: 1px solid #0000;
 `)]),Y(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),Y(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),J(`left`,[J(`card-type`,[Y(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Y(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[J(`active`,`
 border-right: 1px solid #0000;
 `)]),Y(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),Y(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),J(`right`,[J(`card-type`,[Y(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Y(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[J(`active`,`
 border-left: 1px solid #0000;
 `)]),Y(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),Y(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),J(`bottom`,[J(`card-type`,[Y(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Y(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[J(`active`,`
 border-top: 1px solid #0000;
 `)]),Y(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),Y(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),ii=rn,ai=w({name:`Tabs`,props:Object.assign(Object.assign({},K.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i}=V(e),a=K(`Tabs`,`-tabs`,ri,Nt,e,n),l=c(null),u=c(null),d=c(null),f=c(null),p=c(null),m=c(null),g=c(!0),_=c(!0),v=lt(e,[`labelSize`,`size`]),y=L(()=>v.value?v.value:i?.value?.Tabs?.size||`medium`),b=lt(e,[`activeName`,`value`]),x=c(b.value??e.defaultValue??(t.default?_e(t.default())[0]?.props?.name:null)),S=dt(b,x),w={id:0},T=L(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});k(S,()=>{w.id=0,A(),j()});function E(){let{value:e}=S;return e===null?null:l.value?.querySelector(`[data-name="${e}"]`)}function D(t){if(e.type===`card`)return;let{value:r}=u;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(ee([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(ee([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function O(){if(e.type===`card`)return;let{value:t}=u;t&&(t.style.opacity=`0`)}function ee(e){let{value:t}=u;if(t)for(let n of e)t.style[n]=``}function A(){if(e.type===`card`)return;let t=E();t?D(t):O()}function j(){let e=p.value?.$el;if(!e)return;let t=E();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let M=c(null),N=0,P=null;function te(e){let t=M.value;if(t){N=e.getBoundingClientRect().height;let n=`${N}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};P?(r(),P(),P=null):P=r}}function I(e){let t=M.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(N,n)}px`};P?(P(),P=null,r()):P=r}}function R(){let t=M.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let z={value:[]},ne=c(`next`);function re(e){let t=S.value,n=`next`;for(let r of z.value){if(r===t)break;if(r===e){n=`prev`;break}}ne.value=n,ie(e)}function ie(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&Q(n,t),r&&Q(r,t),i&&Q(i,t),x.value=t}function H(t){let{onClose:n}=e;n&&Q(n,t)}let ae=!0;function U(){let{value:e}=u;if(!e)return;ae||=!1;let t=`transition-disabled`;e.classList.add(t),A(),e.classList.remove(t)}let oe=c(null);function se({transitionDisabled:e}){let t=l.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=E();n&&oe.value&&(oe.value.style.width=`${n.offsetWidth}px`,oe.value.style.height=`${n.offsetHeight}px`,oe.value.style.transform=`translateX(${n.offsetLeft-ze(getComputedStyle(t).paddingLeft)}px)`,e&&oe.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}k([S],()=>{e.type===`segment`&&h(()=>{se({transitionDisabled:!1})})}),o(()=>{e.type===`segment`&&se({transitionDisabled:!0})});let ce=0;function le(t){if(t.contentRect.width===0&&t.contentRect.height===0||ce===t.contentRect.width)return;ce=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(ae||e.justifyContent?.startsWith(`space`))&&U(),n!==`segment`){let{placement:t}=e;Y((t===`top`||t===`bottom`?p.value?.$el:m.value)||null)}}let G=ii(le,64);k([()=>e.justifyContent,()=>e.size],()=>{h(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&U()})});let q=c(!1);function ue(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!q.value)s===`top`||s===`bottom`?a<r&&(q.value=!0):o<i&&(q.value=!0);else{let{value:e}=f;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(q.value=!1):o-i>e.$el.offsetHeight&&(q.value=!1)}Y(p.value?.$el||null)}let de=ii(ue,64);function J(){let{onAdd:t}=e;t&&t(),h(()=>{let e=E(),{value:t}=p;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function Y(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;g.value=e<=0,_.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;g.value=e<=0,_.value=e+r>=n}}let X=ii(e=>{Y(e.target)},64);F(ei,{triggerRef:s(e,`trigger`),tabStyleRef:s(e,`tabStyle`),tabClassRef:s(e,`tabClass`),addTabStyleRef:s(e,`addTabStyle`),addTabClassRef:s(e,`addTabClass`),paneClassRef:s(e,`paneClass`),paneStyleRef:s(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:s(e,`type`),closableRef:s(e,`closable`),valueRef:S,tabChangeIdRef:w,onBeforeLeaveRef:s(e,`onBeforeLeave`),activateTab:re,handleClose:H,handleAdd:J}),Te(()=>{A(),j()}),C(()=>{let{value:e}=d;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;g.value?e.classList.remove(r):e.classList.add(r),_.value?e.classList.remove(i):e.classList.add(i)});let Z={syncBarPosition:()=>{A()}},fe=()=>{se({transitionDisabled:!0})},pe=L(()=>{let{value:t}=y,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:o,closeIconColorHover:s,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:b,closeColorHover:x,closeColorPressed:S,closeBorderRadius:C,[B(`panePadding`,t)]:w,[B(`tabPadding`,r)]:T,[B(`tabPaddingVertical`,r)]:E,[B(`tabGap`,r)]:D,[B(`tabGap`,`${r}Vertical`)]:O,[B(`tabTextColor`,n)]:k,[B(`tabTextColorActive`,n)]:ee,[B(`tabTextColorHover`,n)]:A,[B(`tabTextColorDisabled`,n)]:j,[B(`tabFontSize`,t)]:M},common:{cubicBezierEaseInOut:N}}=a.value;return{"--n-bezier":N,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":M,"--n-tab-text-color":k,"--n-tab-text-color-active":ee,"--n-tab-text-color-disabled":j,"--n-tab-text-color-hover":A,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":b,"--n-close-color-hover":x,"--n-close-color-pressed":S,"--n-close-border-radius":C,"--n-close-icon-color":o,"--n-close-icon-color-hover":s,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":T,"--n-tab-padding-vertical":E,"--n-tab-gap":D,"--n-tab-gap-vertical":O,"--n-pane-padding-left":Ve(w,`left`),"--n-pane-padding-right":Ve(w,`right`),"--n-pane-padding-top":Ve(w,`top`),"--n-pane-padding-bottom":Ve(w,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),me=r?W(`tabs`,L(()=>`${y.value[0]}${e.type[0]}`),pe,e):void 0;return Object.assign({mergedClsPrefix:n,mergedValue:S,renderedNames:new Set,segmentCapsuleElRef:oe,tabsPaneWrapperRef:M,tabsElRef:l,barElRef:u,addTabInstRef:f,xScrollInstRef:p,scrollWrapperElRef:d,addTabFixed:q,tabWrapperStyle:T,handleNavResize:G,mergedSize:y,handleScroll:X,handleTabsResize:de,cssVars:r?void 0:pe,themeClass:me?.themeClass,animationDirection:ne,renderNameListRef:z,yScrollElRef:m,handleSegmentResize:fe,onAnimationBeforeLeave:te,onAnimationEnter:I,onAnimationAfterEnter:R,onRender:me?.onRender},Z)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:i,addable:a,mergedSize:o,renderNameListRef:s,onRender:c,paneWrapperClass:l,paneWrapperStyle:u,$slots:{default:d,prefix:f,suffix:p}}=this;c?.();let m=d?_e(d()).filter(e=>e.type.__TAB_PANE__===!0):[],h=d?_e(d()).filter(e=>e.type.__TAB__===!0):[],g=!h.length,_=t===`card`,v=t===`segment`,y=!_&&!v&&this.justifyContent;s.value=[];let b=()=>{let t=r(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},y?null:r(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),g?m.map((e,t)=>(s.value.push(e.props.name),li(r(ni,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!y||y===`center`||y===`start`||y===`end`)}),e.children?{default:e.children.tab}:void 0)))):h.map((e,t)=>(s.value.push(e.props.name),li(t!==0&&!y?ci(e):e))),!i&&a&&_?si(a,(g?m.length:h.length)!==0):null,y?null:r(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return r(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},_&&a?r(Ge,{onResize:this.handleTabsResize},{default:()=>t}):t,_?r(`div`,{class:`${e}-tabs-pad`}):null,_?null:r(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},x=v?`top`:n;return r(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${o}-size`,y&&`${e}-tabs--flex`,`${e}-tabs--${x}`],style:this.cssVars},r(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${x}`,`${e}-tabs-nav`]},X(f,t=>t&&r(`div`,{class:`${e}-tabs-nav__prefix`},t)),v?r(Ge,{onResize:this.handleSegmentResize},{default:()=>r(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},r(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},r(`div`,{class:`${e}-tabs-wrapper`},r(`div`,{class:`${e}-tabs-tab`}))),g?m.map((e,t)=>(s.value.push(e.props.name),r(ni,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):h.map((e,t)=>(s.value.push(e.props.name),t===0?e:ci(e))))}):r(Ge,{onResize:this.handleNavResize},{default:()=>r(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(x)?r(Xt,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:b}):r(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},b()))}),i&&a&&_?si(a,!0):null,X(p,t=>t&&r(`div`,{class:`${e}-tabs-nav__suffix`},t))),g&&(this.animated&&(x===`top`||x===`bottom`)?r(`div`,{ref:`tabsPaneWrapperRef`,style:u,class:[`${e}-tabs-pane-wrapper`,l]},oi(m,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):oi(m,this.mergedValue,this.renderedNames)))}});function oi(e,t,n,i,a,o,s){let c=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,s=t===r;if(e.key!==void 0&&(e.key=r),s||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);c.push(t?v(e,[[P,s]]):e)}}),s?r(ee,{name:`${s}-transition`,onBeforeLeave:i,onEnter:a,onAfterEnter:o},{default:()=>c}):c}function si(e,t){return r(ni,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function ci(e){let t=b(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function li(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var ui=G([Y(`watermark-container`,`
 position: relative;
 `,[U(`selectable`,`
 user-select: none;
 -webkit-user-select: none;
 `),J(`global-rotate`,`
 overflow: hidden;
 `),J(`fullscreen`,`
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 pointer-events: none;
 position: fixed;
 `)]),Y(`watermark`,`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 pointer-events: none;
 background-repeat: repeat;
 `,[J(`fullscreen`,`
 position: fixed;
 `),J(`global-rotate`,`
 position: absolute;
 height: max(284vh, 284vw);
 width: max(284vh, 284vw);
 `)])]);function di(e){if(!e)return 1;let t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t}var fi=w({name:`Watermark`,props:Object.assign(Object.assign({},K.props),{debug:Boolean,cross:Boolean,fullscreen:Boolean,width:{type:Number,default:32},height:{type:Number,default:32},zIndex:{type:Number,default:10},xGap:{type:Number,default:0},yGap:{type:Number,default:0},yOffset:{type:Number,default:0},xOffset:{type:Number,default:0},rotate:{type:Number,default:0},textAlign:{type:String,default:`left`},image:String,imageOpacity:{type:Number,default:1},imageHeight:Number,imageWidth:Number,content:String,selectable:{type:Boolean,default:!0},fontSize:{type:Number,default:14},fontFamily:String,fontStyle:{type:String,default:`normal`},fontVariant:{type:String,default:``},fontWeight:{type:Number,default:400},fontColor:{type:String,default:`rgba(128, 128, 128, .3)`},fontStretch:{type:String,default:``},lineHeight:{type:Number,default:14},globalRotate:{type:Number,default:0}}),setup(e,{slots:t}){let{mergedClsPrefixRef:n}=V(e),i=K(`Watermark`,`-watermark`,ui,st,e,n),a=c(``),o=fe?document.createElement(`canvas`):null,s=o?o.getContext(`2d`):null,l=c(!1);return Te(()=>l.value=!0),C(()=>{if(!o)return;l.value;let t=di(s),{xGap:n,yGap:r,width:c,height:u,yOffset:d,xOffset:f,rotate:p,image:m,content:h,fontColor:g,fontStyle:_,fontVariant:v,fontStretch:y,fontWeight:b,fontFamily:x,fontSize:S,lineHeight:C,debug:w}=e,T=(n+c)*t,E=(r+u)*t,D=f*t,O=d*t;if(o.width=T,o.height=E,s){s.translate(0,0);let n=c*t,r=u*t;if(w&&(s.strokeStyle=`grey`,s.strokeRect(0,0,n,r)),s.rotate(Math.PI/180*p),m){let n=new Image;n.crossOrigin=`anonymous`,n.referrerPolicy=`no-referrer`,n.src=m,n.onload=()=>{s.globalAlpha=e.imageOpacity;let{imageWidth:r,imageHeight:i}=e;s.drawImage(n,D,O,(e.imageWidth||(i?n.width*i/n.height:n.width))*t,(e.imageHeight||(r?n.height*r/n.width:n.height))*t),a.value=o.toDataURL()}}else if(h){w&&(s.strokeStyle=`green`,s.strokeRect(0,0,n,r)),s.font=`${_} ${v} ${b} ${y} ${S*t}px/${C*t}px ${x||i.value.self.fontFamily}`,s.fillStyle=g;let c=0,{textAlign:l}=e;h.split(`
`).map(e=>{let t=s.measureText(e).width;return c=Math.max(c,t),{width:t,line:e}}).forEach(({line:e,width:n},r)=>{let i=l===`left`?0:l===`center`?(c-n)/2:c-n;s.fillText(e,D+i,O+C*t*(r+1))}),a.value=o.toDataURL()}else h||(s.clearRect(0,0,o.width,o.height),a.value=o.toDataURL())}else se(`watermark`,`Canvas is not supported in the browser.`)}),()=>{let{globalRotate:i,fullscreen:o,zIndex:s}=e,c=n.value,l=i!==0&&o,u=`max(142vh, 142vw)`,d=r(`div`,{class:[`${c}-watermark`,i!==0&&`${c}-watermark--global-rotate`,o&&`${c}-watermark--fullscreen`],style:{transform:i?`translateX(-50%) translateY(-50%) rotate(${i}deg)`:void 0,zIndex:l?void 0:s,backgroundSize:`${e.xGap+e.width}px`,backgroundPosition:i===0?e.cross?`${e.width/2}px ${e.height/2}px, 0 0`:``:e.cross?`calc(${u} + ${e.width/2}px) calc(${u} + ${e.height/2}px), ${u} ${u}`:u,backgroundImage:e.cross?`url(${a.value}), url(${a.value})`:`url(${a.value})`}});return e.fullscreen&&!i?d:r(`div`,{class:[`${c}-watermark-container`,i!==0&&`${c}-watermark-container--global-rotate`,o&&`${c}-watermark-container--fullscreen`,e.selectable&&`${c}-watermark-container--selectable`],style:{zIndex:l?s:void 0}},t.default?.call(t),d)}}}),pi={title:`Admin Pro`,logo:`A`,defaultPageSize:10,useMock:!0,usePermission:!0},mi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},hi=w({name:`AppsOutline`,render:function(e,t){return x(),p(`svg`,mi,t[0]||=[l(`<rect x="64" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect><rect x="216" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect><rect x="368" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect><rect x="64" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect><rect x="216" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect><rect x="368" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect><rect x="64" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect><rect x="216" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect><rect x="368" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>`,9)])}}),gi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},_i=w({name:`ArrowBackOutline`,render:function(e,t){return x(),p(`svg`,gi,t[0]||=[f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`48`,d:`M244 400L100 256l144-144`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`48`,d:`M120 256h292`},null,-1)])}}),vi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},yi=w({name:`ArrowForwardOutline`,render:function(e,t){return x(),p(`svg`,vi,t[0]||=[f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`48`,d:`M268 112l144 144l-144 144`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`48`,d:`M392 256H100`},null,-1)])}}),bi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},xi=w({name:`BookOutline`,render:function(e,t){return x(),p(`svg`,bi,t[0]||=[f(`path`,{d:`M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M256 160v288`},null,-1)])}}),Si={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Ci=w({name:`CheckmarkOutline`,render:function(e,t){return x(),p(`svg`,Si,t[0]||=[f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M416 128L192 384l-96-96`},null,-1)])}}),wi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Ti=w({name:`ChevronForwardOutline`,render:function(e,t){return x(),p(`svg`,wi,t[0]||=[f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`48`,d:`M184 112l144 144l-144 144`},null,-1)])}}),Ei={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Di=w({name:`CloseCircleOutline`,render:function(e,t){return x(),p(`svg`,Ei,t[0]||=[f(`path`,{d:`M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z`,fill:`none`,stroke:`currentColor`,"stroke-miterlimit":`10`,"stroke-width":`32`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M320 320L192 192`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M192 320l128-128`},null,-1)])}}),Oi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},ki=w({name:`CloseOutline`,render:function(e,t){return x(),p(`svg`,Oi,t[0]||=[f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M368 368L144 144`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M368 144L144 368`},null,-1)])}}),Ai={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},ji=w({name:`ContractOutline`,render:function(e,t){return x(),p(`svg`,Ai,t[0]||=[l(`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 416V304h112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M314.2 314.23L432 432"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M208 96v112H96"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M197.8 197.77L80 80"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 208H304V96"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M314.23 197.8L432 80"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 304h112v112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M197.77 314.2L80 432"></path>`,8)])}}),Mi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Ni=w({name:`CreateOutline`,render:function(e,t){return x(),p(`svg`,Mi,t[0]||=[f(`path`,{d:`M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),f(`path`,{d:`M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38z`,fill:`currentColor`},null,-1),f(`path`,{d:`M399.34 90L218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0z`,fill:`currentColor`},null,-1)])}}),Pi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Fi=w({name:`DesktopOutline`,render:function(e,t){return x(),p(`svg`,Pi,t[0]||=[f(`rect`,{x:`32`,y:`64`,width:`448`,height:`320`,rx:`32`,ry:`32`,fill:`none`,stroke:`currentColor`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),f(`path`,{stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M304 448l-8-64h-80l-8 64h96z`,fill:`currentColor`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M368 448H144`},null,-1),f(`path`,{d:`M32 304v48a32.09 32.09 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32v-48zm224 64a16 16 0 1 1 16-16a16 16 0 0 1-16 16z`,fill:`currentColor`},null,-1)])}}),Ii={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Li=w({name:`ExpandOutline`,render:function(e,t){return x(),p(`svg`,Ii,t[0]||=[l(`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 320v112H320"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M421.8 421.77L304 304"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 192V80h112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M90.2 90.23L208 208"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 80h112v112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M421.77 90.2L304 208"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 432H80V320"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M90.23 421.8L208 304"></path>`,8)])}}),Ri={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},zi=w({name:`FolderOutline`,render:function(e,t){return x(),p(`svg`,Ri,t[0]||=[f(`path`,{d:`M440 432H72a40 40 0 0 1-40-40V120a40 40 0 0 1 40-40h75.89a40 40 0 0 1 22.19 6.72l27.84 18.56a40 40 0 0 0 22.19 6.72H440a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M32 192h448`},null,-1)])}}),Bi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Vi=w({name:`GridOutline`,render:function(e,t){return x(),p(`svg`,Bi,t[0]||=[f(`rect`,{x:`48`,y:`48`,width:`176`,height:`176`,rx:`20`,ry:`20`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),f(`rect`,{x:`288`,y:`48`,width:`176`,height:`176`,rx:`20`,ry:`20`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),f(`rect`,{x:`48`,y:`288`,width:`176`,height:`176`,rx:`20`,ry:`20`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),f(`rect`,{x:`288`,y:`288`,width:`176`,height:`176`,rx:`20`,ry:`20`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1)])}}),Hi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Ui=w({name:`HelpCircleOutline`,render:function(e,t){return x(),p(`svg`,Hi,t[0]||=[f(`path`,{d:`M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80z`,fill:`none`,stroke:`currentColor`,"stroke-miterlimit":`10`,"stroke-width":`32`},null,-1),f(`path`,{d:`M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45c10 4.76 29.47 16.38 29.47 41.09c0 26-17 37.81-36.37 50.8S251 281.43 251 296`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-miterlimit":`10`,"stroke-width":`28`},null,-1),f(`circle`,{cx:`250`,cy:`348`,r:`20`,fill:`currentColor`},null,-1)])}}),Wi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Gi=w({name:`LanguageOutline`,render:function(e,t){return x(),p(`svg`,Wi,t[0]||=[l(`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 112h288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 64v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M272 448l96-224l96 224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M301.5 384h133"></path><path d="M281.3 112S257 206 199 277S80 384 80 384" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M256 336s-35-27-72-75s-56-85-56-85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>`,6)])}}),Ki={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},qi=w({name:`ListOutline`,render:function(e,t){return x(),p(`svg`,Ki,t[0]||=[l(`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 144h288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 256h288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368h288"></path><circle cx="80" cy="144" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="80" cy="256" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="80" cy="368" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle>`,6)])}}),Ji={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Yi=w({name:`LogOutOutline`,render:function(e,t){return x(),p(`svg`,Ji,t[0]||=[f(`path`,{d:`M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M368 336l80-80l-80-80`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M176 256h256`},null,-1)])}}),Xi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Zi=w({name:`MoonOutline`,render:function(e,t){return x(),p(`svg`,Xi,t[0]||=[f(`path`,{d:`M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216c88.68 0 166.73-51.57 200-128c-26.39 11.49-57.38 16-88 16c-119.29 0-216-96.71-216-216z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1)])}}),Qi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},$i=w({name:`NotificationsOutline`,render:function(e,t){return x(),p(`svg`,Qi,t[0]||=[f(`path`,{d:`M427.68 351.43C402 320 383.87 304 383.87 217.35C383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53c-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43C73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),f(`path`,{d:`M320 384v16a64 64 0 0 1-128 0v-16`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1)])}}),ea={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},ta=w({name:`PersonCircleOutline`,render:function(e,t){return x(),p(`svg`,ea,t[0]||=[f(`path`,{d:`M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 0 1-6.14-.32a124.27 124.27 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25z`,fill:`currentColor`},null,-1),f(`path`,{d:`M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z`,fill:`currentColor`},null,-1)])}}),na={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},ra=w({name:`PinOutline`,render:function(e,t){return x(),p(`svg`,na,t[0]||=[f(`circle`,{cx:`256`,cy:`96`,r:`64`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),f(`path`,{d:`M272 164a9 9 0 0 0-9-9h-14a9 9 0 0 0-9 9v293.56a32.09 32.09 0 0 0 2.49 12.38l10.07 24a3.92 3.92 0 0 0 6.88 0l10.07-24a32.09 32.09 0 0 0 2.49-12.38z`,fill:`currentColor`},null,-1),f(`circle`,{cx:`280`,cy:`72`,r:`24`,fill:`currentColor`},null,-1)])}}),ia={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},aa=w({name:`ReloadOutline`,render:function(e,t){return x(),p(`svg`,ia,t[0]||=[f(`path`,{d:`M400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-miterlimit":`10`,"stroke-width":`32`},null,-1),f(`path`,{d:`M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z`,fill:`currentColor`},null,-1)])}}),oa={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},sa=w({name:`SaveOutline`,render:function(e,t){return x(),p(`svg`,oa,t[0]||=[f(`path`,{d:`M380.93 57.37A32 32 0 0 0 358.3 48H94.22A46.21 46.21 0 0 0 48 94.22v323.56A46.21 46.21 0 0 0 94.22 464h323.56A46.36 46.36 0 0 0 464 417.78V153.7a32 32 0 0 0-9.37-22.63zM256 416a64 64 0 1 1 64-64a63.92 63.92 0 0 1-64 64zm48-224H112a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1)])}}),ca={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},la=w({name:`SearchOutline`,render:function(e,t){return x(),p(`svg`,ca,t[0]||=[f(`path`,{d:`M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z`,fill:`none`,stroke:`currentColor`,"stroke-miterlimit":`10`,"stroke-width":`32`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-miterlimit":`10`,"stroke-width":`32`,d:`M338.29 338.29L448 448`},null,-1)])}}),ua={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},da=w({name:`SettingsOutline`,render:function(e,t){return x(),p(`svg`,ua,t[0]||=[f(`path`,{d:`M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1)])}}),fa={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},pa=w({name:`SunnyOutline`,render:function(e,t){return x(),p(`svg`,fa,t[0]||=[l(`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 416v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 108.92l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 369.14l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M464 256h-48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M96 256H48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 403.08l-33.94-33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 142.86l-33.94-33.94"></path><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></circle>`,9)])}}),ma={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},ha=w({name:`SwapHorizontalOutline`,render:function(e,t){return x(),p(`svg`,ma,t[0]||=[f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M304 48l112 112l-112 112`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M398.87 160H96`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M208 464L96 352l112-112`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M114 352h302`},null,-1)])}}),ga={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},_a=w({name:`WineOutline`,render:function(e,t){return x(),p(`svg`,ga,t[0]||=[f(`path`,{d:`M398.57 80H113.43v16S87.51 272 256 272S398.57 96 398.57 96z`,fill:`none`,stroke:`currentColor`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M256 272v160`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M352 432H160`},null,-1),f(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M112 160h288`},null,-1)])}}),va={Dashboard:xi,User:Gt,Demo:hi,DemoMeat:Gt,DemoSeafood:_a,DemoBeverage:_a,DemoWhisky:_a,DemoJuice:_a,DataDisplay:Vi,DataTable:Vi,DataForm:qi};function ya(){let e=Ht(),t=Wt(),n=e=>()=>r($,null,{default:()=>r(e)});return{menuOptions:L(()=>{let r=e.getRoutes().find(e=>e.name===`Root`)?.children||[],i=(e,r=``)=>e.filter(e=>{if(e.meta?.hidden)return!1;let n=e.meta?.roles;return!(n&&!n.includes(t.role))}).map(e=>{let t=e.path.startsWith(`/`)?e.path:`${r}/${e.path}`.replace(/\/+/g,`/`),a={label:e.meta?.title||e.name,key:t,icon:n(va[e.name]||hi)};return e.children&&e.children.length>0&&(a.children=i(e.children,t)),a});return i(r)})}}var ba={class:`flex flex-col h-full`},xa={key:0,class:`text-xl font-semibold tracking-wide dark:text-white/90 truncate`},Sa={class:`flex-1 overflow-y-auto py-2 custom-scrollbar`},Ca={class:`p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20 m-3 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-all`},wa={class:`flex items-center gap-3 overflow-hidden`},Ta={class:`flex flex-col overflow-hidden`},Ea={class:`text-xs font-bold truncate`},Da={class:`text-[10px] text-gray-400 truncate uppercase`},Oa=Jt(w({__name:`Sidebar`,props:{collapsed:{type:Boolean}},setup(t){let i=Ht(),o=Ut(),s=It(),l=Wt(),{menuOptions:u}=ya(),d=c(o.path);k(()=>o.path,e=>{d.value=e});let h=e=>()=>r($,null,{default:()=>r(e)}),g=[{label:`个人中心`,key:`profile`,icon:h(ta)},{label:`退出登录`,key:`logout`,icon:h(Yi)}],v=e=>{i.push(e)},y=()=>{i.push(`/`)},b=e=>{e===`logout`&&l.logout()};return(r,i)=>(x(),p(`div`,ba,[R(s).showLogo?(x(),p(`div`,{key:0,class:a([`h-16 flex items-center gap-3 px-4 border-b border-gray-100 dark:border-gray-800 shrink-0 cursor-pointer overflow-hidden transition-all duration-300`,t.collapsed?`justify-center px-0`:`px-6`]),onClick:y},[f(`div`,{class:`w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-lg shadow-sm shrink-0`,style:m({backgroundColor:R(s).themeColor})},_(R(pi).logo),5),t.collapsed?I(``,!0):(x(),p(`span`,xa,_(R(pi).title),1))],2)):I(``,!0),f(`div`,Sa,[e(R(Ur),{value:d.value,"onUpdate:value":[i[0]||=e=>d.value=e,v],collapsed:t.collapsed,"collapsed-width":64,"collapsed-icon-size":22,options:R(u)},null,8,[`value`,`collapsed`,`options`])]),t.collapsed?I(``,!0):(x(),n(R(kt),{key:1,trigger:`click`,options:g,onSelect:b},{default:S(()=>[f(`div`,Ca,[f(`div`,wa,[e(R(xn),{round:``,size:`small`,src:R(l).avatar,class:`shrink-0`},null,8,[`src`]),f(`div`,Ta,[f(`span`,Ea,_(R(l).username),1),f(`span`,Da,_(R(l).role),1)])]),e(R($),{size:`16`,class:`text-gray-400 group-hover:text-primary transition-colors`,style:m({color:R(s).themeColor})},{default:S(()=>[e(R(da))]),_:1},8,[`style`])])]),_:1}))]))}}),[[`__scopeId`,`data-v-c3b5aca7`]]),ka={class:`flex items-center select-none gap-1`},Aa={class:`flex items-center gap-2 text-gray-400 px-2 border-r border-gray-200 dark:border-gray-700 mr-2`},ja=Jt(w({__name:`Breadcrumb`,setup(t){let r=Ut(),i=Ht();It();let o=L(()=>r.matched.filter(e=>e.meta&&e.meta.title&&e.meta.breadcrumb!==!1&&!e.meta.hideBreadcrumb)),s=(e,t)=>{t!==o.value.length-1&&e.meta?.canClickBack&&i.push(e.path)};return(t,r)=>{let c=$,l=On,u=En;return x(),p(`div`,ka,[f(`div`,Aa,[e(c,{size:`16`,class:`cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition-colors`,onClick:r[0]||=e=>R(i).back()},{default:S(()=>[e(R(_i))]),_:1}),e(c,{size:`16`,class:`cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition-colors`,onClick:r[1]||=e=>R(i).forward()},{default:S(()=>[e(R(yi))]),_:1})]),e(u,{separator:`/`},{default:S(()=>[(x(!0),p(M,null,N(o.value,(t,r)=>(x(),n(l,{key:t.path,onClick:e=>s(t,r)},{default:S(()=>[f(`div`,{class:a([`flex items-center gap-1.5 transition-colors text-[13px]`,[r!==o.value.length-1&&t.meta?.canClickBack?`cursor-pointer hover-link text-gray-500`:`cursor-default`,r===o.value.length-1?`font-medium text-gray-800 dark:text-gray-200`:`text-gray-400 dark:text-gray-500`]])},[t.name&&R(va)[t.name]?(x(),n(j(R(va)[t.name]),{key:0,class:`w-3.5 h-3.5`})):(x(),n(c,{key:1,class:`w-3.5 h-3.5`},{default:S(()=>[e(R(zi))]),_:1})),f(`span`,null,_(t.meta?.title),1)],2)]),_:2},1032,[`onClick`]))),128))]),_:1})])}}}),[[`__scopeId`,`data-v-8142a574`]]),Ma={class:`flex justify-between items-center h-full w-full px-4 select-none`},Na={class:`flex items-center gap-4 flex-nowrap shrink-0 h-full`},Pa={class:`text-lg font-bold truncate max-w-[120px]`},Fa={key:0,class:`flex-1 mx-4 overflow-hidden h-full flex items-center`},Ia={key:1,class:`flex items-center gap-4 shrink-0`},La=Jt(w({__name:`Navbar`,setup(t){let i=Ht(),a=Ut(),s=It(),{t:l}=Ft(),{menuOptions:d}=ya(),h=c(a.path);k(()=>a.path,e=>{h.value=e});let g=L(()=>({"--n-color-hover":s.themeColor})),v=(e,t)=>()=>r($,{color:t},{default:()=>r(e)}),y=L(()=>[{label:l(`navbar.theme.light`),key:`light`,icon:v(pa),extra:s.themeMode===`light`?()=>r($,{color:s.themeColor},{default:()=>r(Ci)}):void 0},{label:l(`navbar.theme.dark`),key:`dark`,icon:v(Zi),extra:s.themeMode===`dark`?()=>r($,{color:s.themeColor},{default:()=>r(Ci)}):void 0},{label:l(`navbar.theme.auto`),key:`auto`,icon:v(Fi),extra:s.themeMode===`auto`?()=>r($,{color:s.themeColor},{default:()=>r(Ci)}):void 0}]),b=L(()=>[{label:`简体中文`,key:`zh-CN`,extra:s.language===`zh-CN`?()=>r($,{color:s.themeColor},{default:()=>r(Ci)}):void 0},{label:`English`,key:`en-US`,extra:s.language===`en-US`?()=>r($,{color:s.themeColor},{default:()=>r(Ci)}):void 0}]),C=L(()=>s.themeMode===`light`?pa:s.themeMode===`dark`?Zi:Fi),w=e=>{s.setThemeMode(e)},T=e=>{s.setLanguage(e)},D=e=>{i.push(e)},O=()=>{window.$dialog?.warning({title:l(`navbar.tip`),content:l(`navbar.logoutConfirm`),positiveText:l(`common.ok`),negativeText:l(`common.cancel`),onPositiveClick:()=>{i.push(`/login`)}})},ee=()=>{i.push(`/`)},A=()=>{let e=document.documentElement,t=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;if(!document.fullscreenElement&&!document.webkitFullscreenElement&&!document.mozFullScreenElement&&!document.msFullscreenElement)t&&t.call(e);else{let e=document.exitFullscreen||document.webkitExitFullscreen||document.mozCancelFullScreen||document.msExitFullscreen;e&&e.call(document)}},M=()=>{s.updateFullScreenStatus()};return o(()=>{document.addEventListener(`fullscreenchange`,M),document.addEventListener(`webkitfullscreenchange`,M),document.addEventListener(`mozfullscreenchange`,M),document.addEventListener(`MSFullscreenChange`,M)}),u(()=>{document.removeEventListener(`fullscreenchange`,M),document.removeEventListener(`webkitfullscreenchange`,M),document.removeEventListener(`mozfullscreenchange`,M),document.removeEventListener(`MSFullscreenChange`,M)}),(t,r)=>{let i=Ur,a=Et,o=kt,c=Cn;return x(),p(`div`,Ma,[f(`div`,Na,[R(s).navMode===`top`&&R(s).showLogo?(x(),p(`div`,{key:0,class:`flex items-center gap-2 mr-4 cursor-pointer`,onClick:ee},[f(`div`,{class:`w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-lg shadow-sm`,style:m({backgroundColor:R(s).themeColor})},_(R(pi).logo),5),f(`span`,Pa,_(R(pi).title),1)])):I(``,!0),R(s).showBreadcrumb?(x(),n(ja,{key:1})):I(``,!0)]),R(s).navMode===`top`?(x(),p(`div`,Fa,[e(i,{value:h.value,"onUpdate:value":[r[0]||=e=>h.value=e,D],mode:`horizontal`,options:R(d),class:`nav-horizontal-menu`},null,8,[`value`,`options`])])):I(``,!0),R(s).showNavButtons?(x(),p(`div`,Ia,[e(a,{trigger:`hover`},{trigger:S(()=>[e(R($),{size:`20`,class:`tool-icon`,style:m(g.value)},{default:S(()=>[e(R(la))]),_:1},8,[`style`])]),default:S(()=>[E(` `+_(t.$t(`navbar.search`)),1)]),_:1}),e(a,{trigger:`hover`},{trigger:S(()=>[e(R($),{size:`20`,class:`tool-icon`,style:m(g.value),onClick:A},{default:S(()=>[R(s).isFullScreen?(x(),n(R(ji),{key:1})):(x(),n(R(Li),{key:0}))]),_:1},8,[`style`])]),default:S(()=>[E(` `+_(R(s).isFullScreen?t.$t(`navbar.exitFullscreen`):t.$t(`navbar.fullscreen`)),1)]),_:1}),e(o,{options:b.value,onSelect:T,placement:`bottom-end`,trigger:`hover`},{default:S(()=>[f(`div`,{class:`flex items-center justify-center tool-icon`,style:m(g.value)},[e(R($),{size:`20`},{default:S(()=>[e(R(Gi))]),_:1})],4)]),_:1},8,[`options`]),e(o,{options:y.value,onSelect:w,placement:`bottom-end`,trigger:`hover`},{default:S(()=>[f(`div`,{class:`flex items-center justify-center tool-icon`,style:m(g.value)},[e(R($),{size:`20`},{default:S(()=>[(x(),n(j(C.value)))]),_:1})],4)]),_:1},8,[`options`]),e(c,{dot:``,type:`error`},{default:S(()=>[e(R($),{size:`20`,class:`tool-icon`,style:m(g.value)},{default:S(()=>[e(R($i))]),_:1},8,[`style`])]),_:1}),e(R($),{size:`20`,onClick:R(s).toggleSettingDrawer,class:`tool-icon`,style:m({color:R(s).themeColor})},{default:S(()=>[e(R(da))]),_:1},8,[`onClick`,`style`]),e(a,{trigger:`hover`},{trigger:S(()=>[f(`div`,{class:`flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors group`,onClick:O},[e(R($),{size:`22`,class:`text-gray-500 group-hover:text-red-500 transition-colors`},{default:S(()=>[e(R(Yi))]),_:1})])]),default:S(()=>[E(` `+_(t.$t(`navbar.logout`)),1)]),_:1})])):I(``,!0)])}}}),[[`__scopeId`,`data-v-e7849f5b`]]),Ra=Vt(`tagsView`,{state:()=>({tags:Je.get(`visited_tags`)||[{name:`Dashboard`,path:`/dashboard`,title:`业务大盘`,affix:!0}],activePath:`/dashboard`}),actions:{addTag(e){if(this.tags.some(t=>t.path===e.path)){this.activePath=e.path;return}this.tags.push(e),this.activePath=e.path,this.saveTags()},removeTag(e){let t=this.tags.find(t=>t.path===e);t&&t.affix||(this.tags=this.tags.filter(t=>t.path!==e),this.saveTags())},toggleAffix(e){let t=this.tags.find(t=>t.path===e);t&&(t.affix=!t.affix,this.saveTags())},toggleKeepAlive(e){let t=this.tags.find(t=>t.path===e);t&&(t.keepAlive=!t.keepAlive,this.saveTags())},closeOthers(e){this.tags=this.tags.filter(t=>t.path===e||t.affix),this.saveTags()},closeLeft(e){let t=this.tags.findIndex(t=>t.path===e);t!==-1&&(this.tags=this.tags.filter((e,n)=>n>=t||e.affix),this.saveTags())},closeRight(e){let t=this.tags.findIndex(t=>t.path===e);t!==-1&&(this.tags=this.tags.filter((e,n)=>n<=t||e.affix),this.saveTags())},closeAll(){this.tags=this.tags.filter(e=>e.affix),this.saveTags()},setActivePath(e){this.activePath=e},saveTags(){Je.set(`visited_tags`,this.tags)}}}),za={class:`flex items-center border-b border-gray-100 pr-5 select-none relative z-10 transition-all duration-300`},Ba={class:`flex-1 overflow-hidden px-6 py-2`},Va={key:0,class:`flex items-center shrink-0 ml-2`},Ha=Jt(w({__name:`TagsView`,setup(t){A(e=>({v27f6444a:R(l).themeColor}));let i=Ht(),o=Ut(),s=Ra(),l=It(),u=L(()=>s.tags),d=L({get:()=>s.activePath,set:e=>s.setActivePath(e)}),g=c(!1),_=c(!1),v=c(0),y=c(0),b=c(null),C=e=>()=>r($,null,{default:()=>r(e)}),w=L(()=>[{label:`关闭`,key:`close`,icon:C(ki),disabled:b.value?.affix},{label:`关闭其他`,key:`close-others`,icon:C(ha)},{label:`关闭左侧`,key:`close-left`,icon:C(_i)},{label:`关闭右侧`,key:`close-right`,icon:C(yi)},{label:`关闭所有`,key:`close-all`,icon:C(Di)},{type:`divider`,key:`d1`},{label:b.value?.affix?`取消固定`:`固定标签页`,key:`affix`,icon:C(ra)},{label:b.value?.keepAlive?`关闭缓存`:`缓存标签页`,key:`cache`,icon:C(sa)},{label:`锁定标签页`,key:`lock`,icon:C(Kt)}]);k(()=>o.path,e=>{o.meta?.title&&!o.meta?.hideInTags&&s.addTag({name:o.name,path:e,title:o.meta.title})},{immediate:!0});let T=e=>{i.push(e)},O=e=>{let t=u.value.findIndex(t=>t.path===e);if(t!==-1){if(e===d.value){let e=u.value[t+1]||u.value[t-1];e&&i.push(e.path)}s.removeTag(e)}},ee=async()=>{g.value||(g.value=!0,await l.reloadPage(),setTimeout(()=>{g.value=!1},500))},j=(e,t)=>{_.value=!1,h(()=>{_.value=!0,v.value=e.clientX,y.value=e.clientY,b.value=t})},P=()=>{_.value=!1},te=e=>{if(_.value=!1,!b.value)return;let t=b.value.path;switch(e){case`close`:O(t);break;case`close-others`:s.closeOthers(t),t!==d.value&&i.push(t);break;case`close-left`:s.closeLeft(t);break;case`close-right`:s.closeRight(t);break;case`close-all`:s.closeAll();let e=u.value[0];e&&i.push(e.path);break;case`affix`:case`lock`:s.toggleAffix(t);break;case`cache`:s.toggleKeepAlive(t);break}};return(t,r)=>{let i=ni,o=ai,s=Et,c=kt;return x(),p(`div`,za,[f(`div`,Ba,[e(o,{value:d.value,"onUpdate:value":[r[0]||=e=>d.value=e,T],type:`card`,onClose:O,size:`small`,class:a([`tags-view-tabs`,[`border-pos-${R(l).tabBorderPosition}`]])},{default:S(()=>[(x(!0),p(M,null,N(u.value,e=>(x(),n(i,{key:e.path,name:e.path,label:e.title,closable:(R(l).showTabClose||e.path===d.value)&&!e.affix,onContextmenu:D(t=>j(t,e),[`prevent`])},null,8,[`name`,`label`,`closable`,`onContextmenu`]))),128))]),_:1},8,[`value`,`class`])]),R(l).showNavButtons?(x(),p(`div`,Va,[e(s,{trigger:`hover`},{trigger:S(()=>[f(`div`,{class:`p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer transition-all duration-300 group`,onClick:ee},[e(R($),{size:`20`,class:a([`text-gray-500 transition-transform duration-500 group-hover:color-primary`,{"rotate-180":g.value}]),style:m({"--hover-color":R(l).themeColor})},{default:S(()=>[e(R(aa))]),_:1},8,[`class`,`style`])])]),default:S(()=>[r[1]||=E(` 刷新当前页 `,-1)]),_:1})])):I(``,!0),e(c,{placement:`bottom-start`,trigger:`manual`,x:v.value,y:y.value,options:w.value,show:_.value,"on-clickoutside":P,onSelect:te},null,8,[`x`,`y`,`options`,`show`])])}}}),[[`__scopeId`,`data-v-b072be8c`]]),Ua={class:`app-main h-full`},Wa=Jt(w({__name:`AppMain`,setup(t){let r=It(),i=Ra(),a=L(()=>r.isRouterAlive),o=L(()=>i.tags.filter(e=>e.keepAlive).map(e=>e.name));return(t,i)=>{let s=y(`router-view`);return x(),p(`div`,Ua,[e(s,null,{default:S(({Component:t,route:i})=>[e(te,{name:R(r).enableTransition?R(r).transitionType:`none`,mode:`out-in`,appear:``},{default:S(()=>[(x(),n(O,{include:o.value},[a.value?(x(),n(j(t),{key:i.fullPath})):I(``,!0)],1032,[`include`]))]),_:2},1032,[`name`])]),_:1})])}}}),[[`__scopeId`,`data-v-93b1ed36`]]),Ga={class:`px-1 pr-3 pb-6`},Ka={class:`flex flex-col gap-6`},qa={class:`form-group`},Ja={class:`grid grid-cols-2 gap-4`},Ya={class:`form-group`},Xa={class:`form-group`},Za={class:`form-group`},Qa={class:`grid grid-cols-2 gap-4`},$a={class:`form-group`},eo={class:`form-group`},to={class:`grid grid-cols-2 gap-4`},no={class:`form-group`},ro={class:`form-group`},io={class:`grid grid-cols-2 gap-4`},ao={class:`form-group`},oo={class:`form-group`},so={class:`grid grid-cols-3 gap-4 items-end`},co={class:`form-group`},lo={class:`form-group`},uo={class:`form-group flex items-center justify-between px-2 bg-gray-50 dark:bg-zinc-800/50 rounded-md py-1.5`},fo={class:`image-section border-t border-gray-100 dark:border-gray-800 pt-6`},po={class:`form-group mb-5`},mo={class:`grid grid-cols-3 gap-4 items-start`},ho={class:`form-group`},go={class:`flex items-center gap-1 mb-1.5`},_o={class:`form-group`},vo={class:`flex items-center gap-1 mb-1.5`},yo={class:`form-group`},bo={class:`flex items-center gap-1 mb-1.5`},xo={class:`flex items-center gap-2`},So=Jt(w({__name:`WatermarkModal`,props:{show:{type:Boolean}},emits:[`update:show`],setup(t,{emit:r}){let i=t,a=r,o=L({get:()=>i.show,set:e=>a(`update:show`,e)}),s=It(),c=T({...s.watermarkConfig});k(()=>s.watermarkConfig,e=>{Object.assign(c,e)},{deep:!0});let l=(e,t)=>{s.setWatermarkConfig({[e]:t})},u=()=>{s.setWatermarkConfig({image:c.image,imageWidth:c.imageWidth,imageHeight:c.imageHeight,imageOpacity:c.imageOpacity}),window.$message?.success(`图像水印配置已应用`)},d=()=>{s.resetWatermarkConfig(),window.$message?.info(`水印配置已恢复默认`)},p=[{label:`正常 (Normal)`,value:`normal`},{label:`斜体 (Italic)`,value:`italic`},{label:`偏斜 (Oblique)`,value:`oblique`}];return(t,r)=>(x(),n(R(ot),{show:o.value,"onUpdate:show":r[30]||=e=>o.value=e,preset:`card`,title:`修改水印信息`,style:{width:`446px`},bordered:!1,class:`watermark-modal`},{"header-extra":S(()=>[e(R(St),{quaternary:``,circle:``,size:`small`,onClick:d},{icon:S(()=>[e(R($),null,{default:S(()=>[e(R(qt))]),_:1})]),_:1})]),default:S(()=>[e(R(Wr),{style:{"max-height":`68vh`},trigger:`hover`},{default:S(()=>[f(`div`,Ga,[f(`div`,Ka,[f(`div`,qa,[r[31]||=f(`label`,null,`水印内容`,-1),e(R(ut),{type:`textarea`,value:c.content,"onUpdate:value":[r[0]||=e=>c.content=e,r[1]||=e=>l(`content`,e)],placeholder:`请输入水印内容`,autosize:{minRows:2,maxRows:4},size:`medium`},null,8,[`value`])]),f(`div`,Ja,[f(`div`,Ya,[r[32]||=f(`label`,null,`字体大小`,-1),e(R(tr),{value:c.fontSize,"onUpdate:value":[r[2]||=e=>c.fontSize=e,r[3]||=e=>l(`fontSize`,e)],size:`medium`,min:10,max:100},null,8,[`value`])]),f(`div`,Xa,[r[33]||=f(`label`,null,`字体风格`,-1),e(R(Ot),{value:c.fontStyle,"onUpdate:value":[r[4]||=e=>c.fontStyle=e,r[5]||=e=>l(`fontStyle`,e)],size:`medium`,options:p},null,8,[`value`])])]),f(`div`,Za,[r[34]||=f(`label`,null,`文字颜色`,-1),e(R(nt),{value:c.color,"onUpdate:value":[r[6]||=e=>c.color=e,r[7]||=e=>l(`color`,e)],size:`medium`,"show-alpha":!0},null,8,[`value`])]),f(`div`,Qa,[f(`div`,$a,[r[35]||=f(`label`,null,`行高 (px)`,-1),e(R(tr),{value:c.lineHeight,"onUpdate:value":[r[8]||=e=>c.lineHeight=e,r[9]||=e=>l(`lineHeight`,e)],size:`medium`,min:1},null,8,[`value`])]),f(`div`,eo,[r[36]||=f(`label`,null,`字重`,-1),e(R(tr),{value:c.fontWeight,"onUpdate:value":[r[10]||=e=>c.fontWeight=e,r[11]||=e=>l(`fontWeight`,e)],size:`medium`,step:100,min:100,max:900},null,8,[`value`])])]),f(`div`,to,[f(`div`,no,[r[37]||=f(`label`,null,`网格宽度`,-1),e(R(tr),{value:c.width,"onUpdate:value":[r[12]||=e=>c.width=e,r[13]||=e=>l(`width`,e)],size:`medium`,min:10},null,8,[`value`])]),f(`div`,ro,[r[38]||=f(`label`,null,`网格高度`,-1),e(R(tr),{value:c.height,"onUpdate:value":[r[14]||=e=>c.height=e,r[15]||=e=>l(`height`,e)],size:`medium`,min:10},null,8,[`value`])])]),f(`div`,io,[f(`div`,ao,[r[39]||=f(`label`,null,`X轴偏移`,-1),e(R(tr),{value:c.xOffset,"onUpdate:value":[r[16]||=e=>c.xOffset=e,r[17]||=e=>l(`xOffset`,e)],size:`medium`},null,8,[`value`])]),f(`div`,oo,[r[40]||=f(`label`,null,`Y轴偏移`,-1),e(R(tr),{value:c.yOffset,"onUpdate:value":[r[18]||=e=>c.yOffset=e,r[19]||=e=>l(`yOffset`,e)],size:`medium`},null,8,[`value`])])]),f(`div`,so,[f(`div`,co,[r[41]||=f(`label`,null,`旋转角度`,-1),e(R(Yr),{value:c.rotate,"onUpdate:value":[r[20]||=e=>c.rotate=e,r[21]||=e=>l(`rotate`,e)],min:-180,max:180},null,8,[`value`])]),f(`div`,lo,[r[42]||=f(`label`,null,`整体旋转`,-1),e(R(Yr),{value:c.overallRotation,"onUpdate:value":[r[22]||=e=>c.overallRotation=e,r[23]||=e=>l(`overallRotation`,e)],min:-180,max:180},null,8,[`value`])]),f(`div`,uo,[r[43]||=f(`span`,{class:`text-[12px] font-semibold text-gray-500`},`跨越边界`,-1),e(R($r),{value:c.cross,"onUpdate:value":[r[24]||=e=>c.cross=e,r[25]||=e=>l(`cross`,e)],size:`medium`},null,8,[`value`])])]),f(`div`,fo,[f(`div`,po,[r[44]||=f(`label`,null,`图像地址 (URL)`,-1),e(R(ut),{type:`textarea`,value:c.image,"onUpdate:value":r[26]||=e=>c.image=e,placeholder:`请输入图像URL地址`,autosize:{minRows:2,maxRows:3},size:`medium`},null,8,[`value`])]),f(`div`,mo,[f(`div`,ho,[f(`div`,go,[r[46]||=f(`label`,{class:`mb-0!`},`图像宽度`,-1),e(R(Et),{trigger:`hover`},{trigger:S(()=>[e(R($),{size:`16`,class:`text-gray-400 cursor-help`},{default:S(()=>[e(R(Ui))]),_:1})]),default:S(()=>[r[45]||=E(` 控制图像水印显示的像素宽度 `,-1)]),_:1})]),e(R(tr),{value:c.imageWidth,"onUpdate:value":r[27]||=e=>c.imageWidth=e,size:`medium`,min:1},null,8,[`value`])]),f(`div`,_o,[f(`div`,vo,[r[48]||=f(`label`,{class:`mb-0!`},`图像高度`,-1),e(R(Et),{trigger:`hover`},{trigger:S(()=>[e(R($),{size:`16`,class:`text-gray-400 cursor-help`},{default:S(()=>[e(R(Ui))]),_:1})]),default:S(()=>[r[47]||=E(` 控制图像水印显示的像素高度 `,-1)]),_:1})]),e(R(tr),{value:c.imageHeight,"onUpdate:value":r[28]||=e=>c.imageHeight=e,size:`medium`,min:1},null,8,[`value`])]),f(`div`,yo,[f(`div`,bo,[r[50]||=f(`label`,{class:`mb-0!`},`图像透明度`,-1),e(R(Et),{trigger:`hover`},{trigger:S(()=>[e(R($),{size:`16`,class:`text-gray-400 cursor-help`},{default:S(()=>[e(R(Ui))]),_:1})]),default:S(()=>[r[49]||=E(` 调整图像水印的不透明度 (0-1) `,-1)]),_:1})]),f(`div`,xo,[e(R(Yr),{value:c.imageOpacity,"onUpdate:value":r[29]||=e=>c.imageOpacity=e,min:0,max:1,step:.01,class:`flex-1`},null,8,[`value`]),e(R(St),{strong:``,secondary:``,type:`primary`,size:`medium`,onClick:u},{default:S(()=>[...r[51]||=[E(` 应用 `,-1)]]),_:1})])])])])])])]),_:1})]),_:1},8,[`show`]))}}),[[`__scopeId`,`data-v-0c86db6b`]]),Co={class:`flex justify-between items-center w-full pr-10`},wo={class:`flex flex-col gap-6 pb-10`},To={class:`px-2 text-center`},Eo={class:`flex justify-around gap-4 px-2`},Do={class:`flex h-full w-full gap-1`},Oo={class:`flex flex-col h-full w-full gap-1`},ko={class:`flex flex-col gap-3.5 px-2`},Ao={class:`flex items-center gap-1`},jo={class:`flex flex-col gap-3 pl-4 pb-2 pt-1`},Mo={class:`flex justify-between items-center text-xs text-gray-500`},No={class:`flex justify-between items-center text-xs text-gray-500`},Po={class:`flex items-center gap-1`},Fo={class:`flex flex-col gap-3 pl-4 pb-2 pt-1`},Io={class:`flex justify-between items-center text-xs text-gray-500`},Lo={class:`flex justify-between items-center text-xs text-gray-500`},Ro={class:`flex items-center gap-1`},zo={class:`flex flex-col gap-3 pl-4 pb-2 pt-1 text-xs text-gray-500`},Bo={class:`flex justify-between items-center`},Vo={class:`setting-item`},Ho={class:`setting-item`},Uo={class:`setting-item`},Wo={class:`setting-item`},Go={class:`flex items-center gap-1`},Ko={class:`flex flex-col gap-2 pl-4 pb-2 text-xs text-gray-500`},qo={class:`flex justify-between items-center`},Jo={class:`flex flex-col gap-3.5 px-2 text-sm`},Yo={class:`setting-item pb-10`},Xo={class:`flex items-center gap-2`},Zo={class:`flex flex-col items-center gap-1 py-1 text-gray-400 border-t border-gray-100 dark:border-gray-800`},Qo={class:`flex items-center gap-2 text-xs`},$o=Jt(w({__name:`SettingDrawer`,setup(t){let n=It(),r=c(!1),i=c(!1),o=c(!1),s=c(!1),l=c(!1),u=[{label:`左右滑动`,value:`fade-slide`},{label:`缩放`,value:`zoom-fade`},{label:`淡显`,value:`fade`},{label:`左淡显`,value:`fade-left`},{label:`右淡显`,value:`fade-right`}],d=[{label:`顶部`,value:`top`},{label:`底部`,value:`bottom`},{label:`左侧`,value:`left`},{label:`右侧`,value:`right`}],h=L({get:()=>n.showSettingDrawer,set:e=>n.setUI(`showSettingDrawer`,e)});return(t,c)=>(x(),p(M,null,[e(R(Gn),{show:h.value,"onUpdate:show":c[26]||=e=>h.value=e,width:350},{default:S(()=>[e(R(Kn),{closable:``},{header:S(()=>[f(`div`,Co,[c[28]||=f(`span`,null,`系统设定`,-1),e(R(St),{quaternary:``,circle:``,size:`small`,onClick:R(n).reloadPage},{icon:S(()=>[e(R($),null,{default:S(()=>[e(R(qt))]),_:1})]),_:1},8,[`onClick`])])]),footer:S(()=>[f(`div`,Zo,[f(`div`,Qo,[e(R($),null,{default:S(()=>[e(R(da))]),_:1}),c[50]||=f(`span`,null,`版本 v0.1.3`,-1),c[51]||=f(`span`,{class:`mx-2 text-gray-300`},`|`,-1),c[52]||=f(`span`,{class:`font-mono text-[9px]`},`POWERED BY NAN CHEN`,-1)])])]),default:S(()=>[f(`div`,wo,[f(`section`,null,[e(R(it),{"title-placement":`center`},{default:S(()=>[...c[29]||=[E(`主题颜色`,-1)]]),_:1}),f(`div`,To,[e(R(nt),{value:R(n).themeColor,"show-alpha":!1,"onUpdate:value":c[0]||=e=>R(n).setThemeColor(e)},null,8,[`value`])])]),f(`section`,null,[e(R(it),{"title-placement":`center`},{default:S(()=>[...c[30]||=[E(`导航模式`,-1)]]),_:1}),f(`div`,Eo,[f(`div`,{class:a([`relative w-24 h-18 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer border-2 transition-all p-1`,R(n).navMode===`sider`?`selected-mode`:`border-gray-200 dark:border-gray-800`]),style:m(R(n).navMode===`sider`?{borderColor:R(n).themeColor}:{}),onClick:c[1]||=e=>R(n).setNavMode(`sider`)},[f(`div`,Do,[f(`div`,{class:`w-1/4 h-full rounded-sm`,style:m({backgroundColor:R(n).themeColor+`44`})},null,4),c[31]||=f(`div`,{class:`flex-1 flex flex-col gap-1`},[f(`div`,{class:`h-1/5 w-full bg-gray-200 dark:bg-gray-700 rounded-sm`}),f(`div`,{class:`flex-1 w-full bg-gray-100 dark:bg-gray-800 rounded-sm`})],-1)])],6),f(`div`,{class:a([`relative w-24 h-18 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer border-2 transition-all p-1`,R(n).navMode===`top`?`selected-mode`:`border-gray-200 dark:border-gray-800`]),style:m(R(n).navMode===`top`?{borderColor:R(n).themeColor}:{}),onClick:c[2]||=e=>R(n).setNavMode(`top`)},[f(`div`,Oo,[f(`div`,{class:`h-1/4 w-full rounded-sm`,style:m({backgroundColor:R(n).themeColor+`44`})},null,4),c[32]||=f(`div`,{class:`flex-1 w-full bg-gray-100 dark:bg-gray-800 rounded-sm`},null,-1)])],6)])]),f(`section`,null,[e(R(it),{"title-placement":`center`},{default:S(()=>[...c[33]||=[E(`布局相关`,-1)]]),_:1}),f(`div`,ko,[f(`div`,{class:`setting-item cursor-pointer group hover:opacity-80 transition-opacity`,onClick:c[4]||=e=>i.value=!i.value},[f(`div`,Ao,[c[34]||=f(`span`,null,`展开侧边菜单`,-1),e(R($),{size:`14`,class:a([`text-gray-400 transition-transform duration-300`,{"rotate-90":i.value}])},{default:S(()=>[e(R(Ti))]),_:1},8,[`class`])]),e(R($r),{value:!R(n).sidebarCollapsed,"onUpdate:value":R(n).toggleSidebar,size:`medium`,onClick:c[3]||=D(()=>{},[`stop`])},null,8,[`value`,`onUpdate:value`])]),e(R(An),{show:i.value},{default:S(()=>[f(`div`,jo,[f(`div`,Mo,[c[35]||=f(`span`,null,`侧边菜单宽度`,-1),e(R(tr),{value:R(n).sidebarWidth,"onUpdate:value":c[5]||=e=>R(n).sidebarWidth=e,size:`small`,class:`w-24`,min:160,max:400},null,8,[`value`])]),f(`div`,No,[c[36]||=f(`span`,null,`侧边菜单最大宽度`,-1),e(R(tr),{value:R(n).sidebarMaxWidth,"onUpdate:value":c[6]||=e=>R(n).sidebarMaxWidth=e,size:`small`,class:`w-24`,min:400,max:800},null,8,[`value`])])])]),_:1},8,[`show`]),f(`div`,{class:`setting-item cursor-pointer group hover:opacity-80 transition-opacity`,onClick:c[9]||=e=>o.value=!o.value},[f(`div`,Po,[c[37]||=f(`span`,null,`显示标签页`,-1),e(R($),{size:`14`,class:a([`text-gray-400 transition-transform duration-300`,{"rotate-90":o.value}])},{default:S(()=>[e(R(Ti))]),_:1},8,[`class`])]),e(R($r),{value:R(n).showTabs,"onUpdate:value":c[7]||=e=>R(n).setUI(`show_tabs`,e),size:`medium`,onClick:c[8]||=D(()=>{},[`stop`])},null,8,[`value`])]),e(R(An),{show:o.value},{default:S(()=>[f(`div`,Fo,[f(`div`,Io,[c[38]||=f(`span`,null,`常显标签关闭按钮`,-1),e(R($r),{value:R(n).showTabClose,"onUpdate:value":c[10]||=e=>R(n).setUI(`show_tab_close`,e),size:`small`},null,8,[`value`])]),f(`div`,Lo,[c[39]||=f(`span`,null,`激活标签边框位置`,-1),e(R(Ot),{value:R(n).tabBorderPosition,"onUpdate:value":c[11]||=e=>R(n).tabBorderPosition=e,size:`small`,options:d,class:`!w-24`},null,8,[`value`])])])]),_:1},8,[`show`]),f(`div`,{class:`setting-item cursor-pointer group hover:opacity-80 transition-opacity`,onClick:c[14]||=e=>s.value=!s.value},[f(`div`,Ro,[c[40]||=f(`span`,null,`显示面包屑`,-1),e(R($),{size:`14`,class:a([`text-gray-400 transition-transform duration-300`,{"rotate-90":s.value}])},{default:S(()=>[e(R(Ti))]),_:1},8,[`class`])]),e(R($r),{value:R(n).showBreadcrumb,"onUpdate:value":c[12]||=e=>R(n).setUI(`show_breadcrumb`,e),size:`medium`,onClick:c[13]||=D(()=>{},[`stop`])},null,8,[`value`])]),e(R(An),{show:s.value},{default:S(()=>[f(`div`,zo,[f(`div`,Bo,[c[41]||=f(`span`,null,`启用切换过渡效果`,-1),e(R($r),{value:R(n).enableTransition,"onUpdate:value":c[15]||=e=>R(n).setUI(`enable_transition`,e),size:`small`},null,8,[`value`])])])]),_:1},8,[`show`]),f(`div`,Vo,[c[42]||=f(`span`,null,`显示顶部加载条`,-1),e(R($r),{value:R(n).showLoadingBar,"onUpdate:value":c[16]||=e=>R(n).setUI(`show_loading_bar`,e),size:`medium`},null,8,[`value`])]),f(`div`,Ho,[c[43]||=f(`span`,null,`显示Logo`,-1),e(R($r),{value:R(n).showLogo,"onUpdate:value":c[17]||=e=>R(n).setUI(`show_logo`,e),size:`medium`},null,8,[`value`])]),f(`div`,Uo,[c[44]||=f(`span`,null,`显示导航按钮`,-1),e(R($r),{value:R(n).showNavButtons,"onUpdate:value":c[18]||=e=>R(n).setUI(`show_nav_buttons`,e),size:`medium`},null,8,[`value`])]),f(`div`,Wo,[c[45]||=f(`span`,null,`显示底部`,-1),e(R($r),{value:R(n).showFooter,"onUpdate:value":c[19]||=e=>R(n).setUI(`show_footer`,e),size:`medium`},null,8,[`value`])]),f(`div`,{class:`setting-item cursor-pointer group hover:opacity-80 transition-opacity`,onClick:c[22]||=e=>r.value=!r.value},[f(`div`,Go,[c[46]||=f(`span`,null,`启用导航过渡效果`,-1),e(R($),{size:`14`,class:a([`text-gray-400 transition-transform duration-300`,{"rotate-90":r.value}])},{default:S(()=>[e(R(Ti))]),_:1},8,[`class`])]),e(R($r),{value:R(n).enableTransition,"onUpdate:value":c[20]||=e=>R(n).setUI(`enable_transition`,e),size:`medium`,onClick:c[21]||=D(()=>{},[`stop`])},null,8,[`value`])]),e(R(An),{show:r.value},{default:S(()=>[f(`div`,Ko,[f(`div`,qo,[c[47]||=f(`span`,null,`过渡效果类型`,-1),e(R(Ot),{value:R(n).transitionType,"onUpdate:value":c[23]||=e=>R(n).transitionType=e,size:`small`,options:u,class:`w-32!`},null,8,[`value`])])])]),_:1},8,[`show`])])]),f(`section`,null,[e(R(it),{"title-placement":`center`},{default:S(()=>[...c[48]||=[E(`页面相关`,-1)]]),_:1}),f(`div`,Jo,[f(`div`,Yo,[f(`div`,Xo,[c[49]||=f(`span`,null,`显示水印`,-1),e(R($),{size:`14`,class:`text-gray-400 transition-colors hover:text-primary cursor-pointer`,onClick:c[24]||=e=>l.value=!0},{default:S(()=>[e(R(Ni))]),_:1})]),e(R($r),{value:R(n).showWatermark,"onUpdate:value":c[25]||=e=>R(n).setUI(`show_watermark`,e),size:`medium`},null,8,[`value`])])])])])]),_:1})]),_:1},8,[`show`]),e(So,{show:l.value,"onUpdate:show":c[27]||=e=>l.value=e},null,8,[`show`])],64))}}),[[`__scopeId`,`data-v-501af533`]]),es={class:`h-screen w-screen overflow-hidden relative`},ts={class:`flex flex-col w-full h-full absolute inset-0`},ns={key:0,class:`shrink-0 relative z-10 w-full border-b border-gray-100 dark:border-gray-800`},rs={class:`flex-1 p-4`},is={class:`h-full flex items-center justify-center text-gray-400 text-xs text-center w-full`},as=w({__name:`index`,setup(r){let i=It(),a=L(()=>{if(!i.showWatermark)return{};let{watermarkConfig:e}=i;return{content:e.content,fontSize:e.fontSize,fontColor:e.color,fontStyle:e.fontStyle,fontWeight:e.fontWeight,lineHeight:e.lineHeight,width:e.width,height:e.height,xOffset:e.xOffset,yOffset:e.yOffset,rotate:(e.rotate||0)+(e.overallRotation||0),cross:e.cross,image:e.image,imageWidth:e.imageWidth,imageHeight:e.imageHeight,imageOpacity:e.imageOpacity,zIndex:10}});return(r,o)=>(x(),p(`div`,es,[(x(),n(j(R(i).showWatermark?R(fi):`div`),t({class:`h-full w-full`},a.value),{default:S(()=>[e(R(cr),{class:`h-screen w-screen shrink-0`,"has-sider":R(i).navMode===`sider`},{default:S(()=>[R(i).navMode===`sider`?(x(),n(R(vr),{key:0,bordered:``,"collapse-mode":`width`,"collapsed-width":64,width:R(i).sidebarWidth,collapsed:R(i).sidebarCollapsed,"onUpdate:collapsed":o[0]||=e=>R(i).toggleSidebar(),"show-trigger":`bar`,class:`z-30 transition-all duration-300`},{default:S(()=>[e(Oa,{collapsed:R(i).sidebarCollapsed},null,8,[`collapsed`])]),_:1},8,[`width`,`collapsed`])):I(``,!0),e(R(cr),{class:`transition-all duration-300 relative bg-[#f5f7f9] dark:bg-black w-full h-full`},{default:S(()=>[f(`div`,ts,[e(R(pr),{class:`h-16 flex items-center shrink-0 z-20`,bordered:``},{default:S(()=>[e(La)]),_:1}),R(i).showTabs?(x(),p(`div`,ns,[e(Ha)])):I(``,!0),e(R(cr),{class:`flex-1 bg-transparent`,"content-style":`display: flex; flex-direction: column; min-height: 100%;`,"native-scrollbar":!1},{default:S(()=>[f(`div`,rs,[e(Wa)])]),_:1}),R(i).showFooter?(x(),n(R(ur),{key:1,class:`shrink-0 h-12`,bordered:``},{default:S(()=>[f(`div`,is,` Copyright © 2026 `+_(R(pi).title)+`. All Rights Reserved. `,1)]),_:1})):I(``,!0)])]),_:1})]),_:1},8,[`has-sider`]),e($o)]),_:1},16))]))}});export{as as default};