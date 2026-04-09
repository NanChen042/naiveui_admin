import{B as e,F as t,Ht as n,J as r,Lt as i,Mt as a,Nt as o,Q as s,R as c,U as l,V as u,W as d,_t as f,b as p,ht as m,j as h,mt as g,p as _,s as v,t as y,tt as b,x}from"./vue.runtime.esm-bundler-D_ATJLwM.js";import{$ as S,Ct as C,Dt as w,Et as ee,G as T,Q as E,Tt as D,W as te,Y as O,_t as k,a as ne,at as re,bt as A,ct as j,dt as ie,et as ae,ft as M,gt as N,ht as oe,i as P,lt as se,mt as ce,n as le,nt as F,ot as I,pt as ue,r as L,rt as R,st as de,t as z,tt as fe,ut as B,vt as pe,wt as V,xt as H,yt as U}from"./light-CkuL5o25.js";import{f as W,h as G,i as K,m as q,p as J,t as Y,u as me}from"./light-gcvVC2vE.js";import{A as X,M as he,N as ge,b as _e,v as ve,y as ye}from"./_common-Dw5diFPD.js";import{A as be,D as xe,E as Se,M as Z,N as Ce,O as we,P as Te,S as Ee,T as De,_ as Oe,a as ke,b as Ae,g as je,j as Me,k as Ne,m as Pe,v as Fe,x as Ie}from"./light-ziahGn9C.js";import{O as Le,T as Re,b as Q,c as ze,f as Be,m as Ve,o as He,u as Ue,y as $}from"./request-gDbOFxdk.js";import{t as We,u as Ge}from"./Input-BN8pxWt_.js";import{d as Ke,p as qe,t as Je}from"./Button-BopshsDo.js";import{t as Ye}from"./use-locale-Blf2NK25.js";import{A as Xe,N as Ze,P as Qe,R as $e,b as et,g as tt}from"./app-BS27x7EC.js";import{i as nt,n as rt,r as it,t as at}from"./Warning-BBhEMNWm.js";var ot=o(null);function st(e){if(e.clientX>0||e.clientY>0)ot.value={x:e.clientX,y:e.clientY};else{let{target:t}=e;if(t instanceof Element){let{left:e,top:n,width:r,height:i}=t.getBoundingClientRect();e>0||n>0?ot.value={x:e+r/2,y:n+i/2}:ot.value={x:0,y:0}}else ot.value=null}}var ct=0,lt=!0;function ut(){if(!ge)return a(o(null));ct===0&&Q(`click`,document,st,!0);let e=()=>{ct+=1};return(lt&&=he())?(l(e),d(()=>{--ct,ct===0&&$(`click`,document,st,!0)})):e(),a(ot)}var dt=o(void 0),ft=0;function pt(){dt.value=Date.now()}var mt=!0;function ht(e){if(!ge)return a(o(!1));let t=o(!1),n=null;function r(){n!==null&&window.clearTimeout(n)}function i(){r(),t.value=!0,n=window.setTimeout(()=>{t.value=!1},e)}ft===0&&Q(`click`,window,pt,!0);let s=()=>{ft+=1,Q(`click`,window,i,!0)};return(mt&&=he())?(l(s),d(()=>{--ft,ft===0&&$(`click`,window,pt,!0),$(`click`,window,i,!0),r()})):s(),a(t)}var gt=o(!1);function _t(){gt.value=!0}function vt(){gt.value=!1}var yt=0;function bt(){return G&&(l(()=>{yt||(window.addEventListener(`compositionstart`,_t),window.addEventListener(`compositionend`,vt)),yt++}),d(()=>{yt<=1?(window.removeEventListener(`compositionstart`,_t),window.removeEventListener(`compositionend`,vt),yt=0):yt--})),gt}var xt=0,St=``,Ct=``,wt=``,Tt=``,Et=o(`0px`);function Dt(e){if(typeof document>`u`)return;let t=document.documentElement,n,i=!1,a=()=>{t.style.marginRight=St,t.style.overflow=Ct,t.style.overflowX=wt,t.style.overflowY=Tt,Et.value=`0px`};r(()=>{n=g(e,e=>{if(e){if(!xt){let e=window.innerWidth-t.offsetWidth;e>0&&(St=t.style.marginRight,t.style.marginRight=`${e}px`,Et.value=`${e}px`),Ct=t.style.overflow,wt=t.style.overflowX,Tt=t.style.overflowY,t.style.overflow=`hidden`,t.style.overflowX=`hidden`,t.style.overflowY=`hidden`}i=!0,xt++}else xt--,xt||a(),i=!1},{immediate:!0})}),d(()=>{n?.(),i&&=(xt--,xt||a(),!1)})}var Ot=H(`input-group`,`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[A(`>`,[H(`input`,[A(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),A(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),H(`button`,[A(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[C(`state-border, border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),A(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[C(`state-border, border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),A(`*`,[A(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[A(`>`,[H(`input`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),H(`base-selection`,[H(`base-selection-label`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),H(`base-selection-tags`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),C(`box-shadow, border, state-border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),A(`&:not(:first-child)`,`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[A(`>`,[H(`input`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),H(`base-selection`,[H(`base-selection-label`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),H(`base-selection-tags`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),C(`box-shadow, border, state-border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),kt=h({name:`InputGroup`,props:{},setup(e){let{mergedClsPrefixRef:t}=T(e);return ne(`-input-group`,Ot,t),{mergedClsPrefix:t}},render(){let{mergedClsPrefix:e}=this;return t(`div`,{class:`${e}-input-group`},this.$slots)}});function At(e){let{errorColor:t,infoColor:n,successColor:r,warningColor:i,fontFamily:a}=e;return{color:t,colorInfo:n,colorSuccess:r,colorError:t,colorWarning:i,fontSize:`12px`,fontFamily:a}}var jt={name:`Badge`,common:z,self:At};function Mt(e,t){switch(e[0]){case`hex`:return t?`#000000FF`:`#000000`;case`rgb`:return t?`rgba(0, 0, 0, 1)`:`rgb(0, 0, 0)`;case`hsl`:return t?`hsla(0, 0%, 0%, 1)`:`hsl(0, 0%, 0%)`;case`hsv`:return t?`hsva(0, 0%, 0%, 1)`:`hsv(0, 0%, 0%)`}return`#000000`}function Nt(e){return e===null?null:/^ *#/.test(e)?`hex`:e.includes(`rgb`)?`rgb`:e.includes(`hsl`)?`hsl`:e.includes(`hsv`)?`hsv`:null}function Pt(e,t=[255,255,255],n=`AA`){let[r,i,a,o]=R(j(e));if(o===1){let e=Ft([r,i,a]),o=Ft(t);return(Math.max(e,o)+.05)/(Math.min(e,o)+.05)>=(n===`AA`?4.5:7)}let s=Ft([Math.round(r*o+t[0]*(1-o)),Math.round(i*o+t[1]*(1-o)),Math.round(a*o+t[2]*(1-o))]),c=Ft(t);return(Math.max(s,c)+.05)/(Math.min(s,c)+.05)>=(n===`AA`?4.5:7)}function Ft(e){let[t,n,r]=e.map(e=>(e/=255,e<=.03928?e/12.92:((e+.055)/1.055)**2.4));return .2126*t+.7152*n+.0722*r}function It(e){return e=Math.round(e),e>=360?359:e<0?0:e}function Lt(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}var Rt={rgb:{hex(e){return I(R(e))},hsl(e){let[t,n,r,i]=R(e);return j([...k(t,n,r),i])},hsv(e){let[t,n,r,i]=R(e);return B([...pe(t,n,r),i])}},hex:{rgb(e){return M(R(e))},hsl(e){let[t,n,r,i]=R(e);return j([...k(t,n,r),i])},hsv(e){let[t,n,r,i]=R(e);return B([...pe(t,n,r),i])}},hsl:{hex(e){let[t,n,r,i]=fe(e);return I([...ce(t,n,r),i])},rgb(e){let[t,n,r,i]=fe(e);return M([...ce(t,n,r),i])},hsv(e){let[t,n,r,i]=fe(e);return B([...ue(t,n,r),i])}},hsv:{hex(e){let[t,n,r,i]=F(e);return I([...N(t,n,r),i])},rgb(e){let[t,n,r,i]=F(e);return M([...N(t,n,r),i])},hsl(e){let[t,n,r,i]=F(e);return j([...oe(t,n,r),i])}}};function zt(e,t,n){return n||=Nt(e),n?n===t?e:Rt[n][t](e):null}var Bt=`12px`,Vt=12,Ht=`6px`,Ut=h({name:`AlphaSlider`,props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){let t=o(null);function n(n){!t.value||!e.rgba||(Q(`mousemove`,document,r),Q(`mouseup`,document,i),r(n))}function r(n){let{value:r}=t;if(!r)return;let{width:i,left:a}=r.getBoundingClientRect(),o=(n.clientX-a)/(i-Vt);e.onUpdateAlpha(Lt(o))}function i(){var t;$(`mousemove`,document,r),$(`mouseup`,document,i),(t=e.onComplete)==null||t.call(e)}return{railRef:t,railBackgroundImage:x(()=>{let{rgba:t}=e;return t?`linear-gradient(to right, rgba(${t[0]}, ${t[1]}, ${t[2]}, 0) 0%, rgba(${t[0]}, ${t[1]}, ${t[2]}, 1) 100%)`:``}),handleMouseDown:n}},render(){let{clsPrefix:e}=this;return t(`div`,{class:`${e}-color-picker-slider`,ref:`railRef`,style:{height:Bt,borderRadius:Ht},onMousedown:this.handleMouseDown},t(`div`,{style:{borderRadius:Ht,position:`absolute`,left:0,right:0,top:0,bottom:0,overflow:`hidden`}},t(`div`,{class:`${e}-color-picker-checkboard`}),t(`div`,{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&t(`div`,{style:{position:`absolute`,left:Ht,right:Ht,top:0,bottom:0}},t(`div`,{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${Ht})`,borderRadius:Ht,width:Bt,height:Bt}},t(`div`,{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:M(this.rgba),borderRadius:Ht,width:Bt,height:Bt}}))))}}),Wt=E(`n-color-picker`);function Gt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function Kt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function qt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function Jt(e){let t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Yt(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}var Xt={paddingSmall:`0 4px`},Zt=h({name:`ColorInputUnit`,props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){let t=o(``),{themeRef:n}=c(Wt,null);m(()=>{t.value=r()});function r(){let{value:t}=e;if(t===null)return``;let{label:n}=e;return n===`HEX`?t:n===`A`?`${Math.floor(t*100)}%`:String(Math.floor(t))}function i(e){t.value=e}function a(n){let i,a;switch(e.label){case`HEX`:a=Jt(n),a&&e.onUpdateValue(n),t.value=r();break;case`H`:i=Kt(n),i===!1?t.value=r():e.onUpdateValue(i);break;case`S`:case`L`:case`V`:i=qt(n),i===!1?t.value=r():e.onUpdateValue(i);break;case`A`:i=Yt(n),i===!1?t.value=r():e.onUpdateValue(i);break;case`R`:case`G`:case`B`:i=Gt(n),i===!1?t.value=r():e.onUpdateValue(i);break}}return{mergedTheme:n,inputValue:t,handleInputChange:a,handleInputUpdateValue:i}},render(){let{mergedTheme:e}=this;return t(We,{size:`small`,placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Xt,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label===`A`?`flex-grow: 1.25;`:``})}}),Qt=h({name:`ColorInput`,props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,n){let{showAlpha:r}=e;if(e.mode===`hex`){e.onUpdateValue((r?I:re)(n));return}let i;switch(i=e.valueArr===null?[0,0,0,0]:Array.from(e.valueArr),e.mode){case`hsv`:i[t]=n,e.onUpdateValue((r?B:se)(i));break;case`rgb`:i[t]=n,e.onUpdateValue((r?M:ie)(i));break;case`hsl`:i[t]=n,e.onUpdateValue((r?j:de)(i));break}}}},render(){let{clsPrefix:e,modes:n}=this;return t(`div`,{class:`${e}-color-picker-input`},t(`div`,{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:n.length===1?``:`pointer`}},this.mode.toUpperCase()+(this.showAlpha?`A`:``)),t(kt,null,{default:()=>{let{mode:e,valueArr:n,showAlpha:r}=this;if(e===`hex`){let e=null;try{e=n===null?null:(r?I:re)(n)}catch{}return t(Zt,{label:`HEX`,showAlpha:r,value:e,onUpdateValue:e=>{this.handleUnitUpdateValue(0,e)}})}return(e+(r?`a`:``)).split(``).map((e,r)=>t(Zt,{label:e.toUpperCase(),value:n===null?null:n[r],onUpdateValue:e=>{this.handleUnitUpdateValue(r,e)}}))}}))}});function $t(e,t){if(t===`hsv`){let[t,n,r,i]=F(e);return M([...N(t,n,r),i])}return e}function en(e){let t=document.createElement(`canvas`).getContext(`2d`);return t?(t.fillStyle=e,t.fillStyle):`#000000`}var tn=h({name:`ColorPickerSwatches`,props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){let t=x(()=>e.swatches.map(e=>{let t=Nt(e);return{value:e,mode:t,legalValue:$t(e,t)}}));function n(t){let{mode:n}=e,{value:r,mode:i}=t;return i||(i=`hex`,/^[a-zA-Z]+$/.test(r)?r=en(r):(O(`color-picker`,`color ${r} in swatches is invalid.`),r=`#000000`)),i===n?r:zt(r,n,i)}function r(t){e.onUpdateColor(n(t))}function i(e,t){e.key===`Enter`&&r(t)}return{parsedSwatchesRef:t,handleSwatchSelect:r,handleSwatchKeyDown:i}},render(){let{clsPrefix:e}=this;return t(`div`,{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(n=>t(`div`,{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(n)},onKeydown:e=>{this.handleSwatchKeyDown(e,n)}},t(`div`,{class:`${e}-color-picker-swatch__fill`,style:{background:n.legalValue}}))))}}),nn=h({name:`ColorPickerTrigger`,slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){let{colorPickerSlots:n,renderLabelRef:r}=c(Wt,null);return()=>{let{hsla:i,value:a,clsPrefix:o,onClick:s,disabled:c}=e,l=n.label||r.value;return t(`div`,{class:[`${o}-color-picker`,c&&`${o}-color-picker--disabled`],onClick:c?void 0:s},t(`div`,{class:`${o}-color-picker__fill`},t(`div`,{class:`${o}-color-picker-checkboard`}),t(`div`,{style:{position:`absolute`,left:0,right:0,top:0,bottom:0,backgroundColor:i?j(i):``}}),a&&i?t(`div`,{class:`${o}-color-picker__value`,style:{color:Pt(i)?`white`:`black`}},l?l(a):a):null))}}}),rn=h({name:`ColorPreview`,props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{let t=Nt(e);return!!(!e||t&&t!==`hsv`)}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(t){var n;let r=t.target.value;(n=e.onUpdateColor)==null||n.call(e,zt(r.toUpperCase(),e.mode,`hex`)),t.stopPropagation()}return{handleChange:t}},render(){let{clsPrefix:e}=this;return t(`div`,{class:`${e}-color-picker-preview__preview`},t(`span`,{class:`${e}-color-picker-preview__fill`,style:{background:this.color||`#000000`}}),t(`input`,{class:`${e}-color-picker-preview__input`,type:`color`,value:this.color,onChange:this.handleChange}))}}),an=`12px`,on=12,sn=`6px`,cn=6,ln=`linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)`,un=h({name:`HueSlider`,props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){let t=o(null);function n(e){t.value&&(Q(`mousemove`,document,r),Q(`mouseup`,document,i),r(e))}function r(n){let{value:r}=t;if(!r)return;let{width:i,left:a}=r.getBoundingClientRect(),o=It((n.clientX-a-cn)/(i-on)*360);e.onUpdateHue(o)}function i(){var t;$(`mousemove`,document,r),$(`mouseup`,document,i),(t=e.onComplete)==null||t.call(e)}return{railRef:t,handleMouseDown:n}},render(){let{clsPrefix:e}=this;return t(`div`,{class:`${e}-color-picker-slider`,style:{height:an,borderRadius:sn}},t(`div`,{ref:`railRef`,style:{boxShadow:`inset 0 0 2px 0 rgba(0, 0, 0, .24)`,boxSizing:`border-box`,backgroundImage:ln,height:an,borderRadius:sn,position:`relative`},onMousedown:this.handleMouseDown},t(`div`,{style:{position:`absolute`,left:sn,right:sn,top:0,bottom:0}},t(`div`,{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${sn})`,borderRadius:sn,width:an,height:an}},t(`div`,{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:sn,width:an,height:an}})))))}}),dn=`12px`,fn=`6px`,pn=h({name:`Pallete`,props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){let t=o(null);function n(e){t.value&&(Q(`mousemove`,document,r),Q(`mouseup`,document,i),r(e))}function r(n){let{value:r}=t;if(!r)return;let{width:i,height:a,left:o,bottom:s}=r.getBoundingClientRect(),c=(s-n.clientY)/a,l=(n.clientX-o)/i,u=100*(l>1?1:l<0?0:l),d=100*(c>1?1:c<0?0:c);e.onUpdateSV(u,d)}function i(){var t;$(`mousemove`,document,r),$(`mouseup`,document,i),(t=e.onComplete)==null||t.call(e)}return{palleteRef:t,handleColor:x(()=>{let{rgba:t}=e;return t?`rgb(${t[0]}, ${t[1]}, ${t[2]})`:``}),handleMouseDown:n}},render(){let{clsPrefix:e}=this;return t(`div`,{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:`palleteRef`},t(`div`,{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),t(`div`,{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:`linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))`}}),this.rgba&&t(`div`,{class:`${e}-color-picker-handle`,style:{width:dn,height:dn,borderRadius:fn,left:`calc(${this.displayedSv[0]}% - ${fn})`,bottom:`calc(${this.displayedSv[1]}% - ${fn})`}},t(`div`,{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:fn,width:dn,height:dn}})))}}),mn=A([H(`color-picker-panel`,`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[ke(),H(`input`,`
 text-align: center;
 `)]),H(`color-picker-checkboard`,`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[A(`&::after`,`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),H(`color-picker-slider`,`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[C(`image`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),A(`&::after`,`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),H(`color-picker-handle`,`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[C(`fill`,`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),H(`color-picker-pallete`,`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[C(`layer`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[V(`shadowed`,`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),H(`color-picker-preview`,`
 display: flex;
 `,[C(`sliders`,`
 flex: 1 0 auto;
 `),C(`preview`,`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),C(`fill`,`
 display: block;
 width: 30px;
 height: 30px;
 `),C(`input`,`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),H(`color-picker-input`,`
 display: flex;
 align-items: center;
 `,[H(`input`,`
 flex-grow: 1;
 flex-basis: 0;
 `),C(`mode`,`
 width: 72px;
 text-align: center;
 `)]),H(`color-picker-control`,`
 padding: 12px;
 `),H(`color-picker-action`,`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[H(`button`,`margin-left: 8px;`)]),H(`color-picker`,`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 cursor: pointer;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[V(`disabled`,`cursor: not-allowed`),C(`value`,`
 white-space: nowrap;
 position: relative;
 `),C(`fill`,`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),H(`color-picker-checkboard`,`
 border-radius: var(--n-border-radius);
 `,[A(`&::after`,`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),H(`color-picker-swatches`,`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[H(`color-picker-swatch`,`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[C(`fill`,`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),A(`&:focus`,`
 outline: none;
 `,[C(`fill`,[A(`&::after`,`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),hn=h({name:`ColorPicker`,props:Object.assign(Object.assign({},P.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>[`rgb`,`hex`,`hsl`]},placement:{type:String,default:`bottom-start`},to:Ne.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),slots:Object,setup(e,{slots:n}){let r=null;function a(e){r=e}let s=null,{mergedClsPrefixRef:c,namespaceRef:l,inlineThemeDisabled:d,mergedComponentPropsRef:f}=T(e),p=Ke(e,{mergedSize:t=>{let{size:n}=e;if(n)return n;let{mergedSize:r}=t||{};return r?.value?r.value:f?.value?.ColorPicker?.size||`medium`}}),{mergedSizeRef:h,mergedDisabledRef:_}=p,{localeRef:v}=Ye(`global`),y=P(`ColorPicker`,`-color-picker`,mn,$e,e,c);b(Wt,{themeRef:y,renderLabelRef:i(e,`renderLabel`),colorPickerSlots:n});let S=o(e.defaultShow),C=Ge(i(e,`show`),S);function w(t){let{onUpdateShow:n,"onUpdate:show":r}=e;n&&q(n,t),r&&q(r,t),S.value=t}let{defaultValue:E}=e,D=o(E===void 0?Mt(e.modes,e.showAlpha):E),O=Ge(i(e,`value`),D),ne=o([O.value]),A=o(0),ae=x(()=>Nt(O.value)),{modes:le}=e,L=o(Nt(O.value)||le[0]||`rgb`);function z(){let{modes:t}=e,{value:n}=L,r=t.findIndex(e=>e===n);~r?L.value=t[(r+1)%t.length]:L.value=`rgb`}let V,H,U,W,G,K,J,Y,me=x(()=>{let{value:e}=O;if(!e)return null;switch(ae.value){case`hsv`:return F(e);case`hsl`:return[V,H,U,Y]=fe(e),[...ue(V,H,U),Y];case`rgb`:case`hex`:return[G,K,J,Y]=R(e),[...pe(G,K,J),Y]}}),X=x(()=>{let{value:e}=O;if(!e)return null;switch(ae.value){case`rgb`:case`hex`:return R(e);case`hsv`:return[V,H,W,Y]=F(e),[...N(V,H,W),Y];case`hsl`:return[V,H,U,Y]=fe(e),[...ce(V,H,U),Y]}}),he=x(()=>{let{value:e}=O;if(!e)return null;switch(ae.value){case`hsl`:return fe(e);case`hsv`:return[V,H,W,Y]=F(e),[...oe(V,H,W),Y];case`rgb`:case`hex`:return[G,K,J,Y]=R(e),[...k(G,K,J),Y]}}),ge=x(()=>{switch(L.value){case`rgb`:case`hex`:return X.value;case`hsv`:return me.value;case`hsl`:return he.value}}),_e=o(0),ve=o(1),ye=o([0,0]);function be(t,n){let{value:r}=me,i=_e.value,a=r?r[3]:1;ye.value=[t,n];let{showAlpha:o}=e;switch(L.value){case`hsv`:Z((o?B:se)([i,t,n,a]),`cursor`);break;case`hsl`:Z((o?j:de)([...oe(i,t,n),a]),`cursor`);break;case`rgb`:Z((o?M:ie)([...N(i,t,n),a]),`cursor`);break;case`hex`:Z((o?I:re)([...N(i,t,n),a]),`cursor`);break}}function xe(t){_e.value=t;let{value:n}=me;if(!n)return;let[,r,i,a]=n,{showAlpha:o}=e;switch(L.value){case`hsv`:Z((o?B:se)([t,r,i,a]),`cursor`);break;case`rgb`:Z((o?M:ie)([...N(t,r,i),a]),`cursor`);break;case`hex`:Z((o?I:re)([...N(t,r,i),a]),`cursor`);break;case`hsl`:Z((o?j:de)([...oe(t,r,i),a]),`cursor`);break}}function Se(e){switch(L.value){case`hsv`:[V,H,W]=me.value,Z(B([V,H,W,e]),`cursor`);break;case`rgb`:[G,K,J]=X.value,Z(M([G,K,J,e]),`cursor`);break;case`hex`:[G,K,J]=X.value,Z(I([G,K,J,e]),`cursor`);break;case`hsl`:[V,H,U]=he.value,Z(j([V,H,U,e]),`cursor`);break}ve.value=e}function Z(t,n){s=n===`cursor`?t:null;let{nTriggerFormChange:r,nTriggerFormInput:i}=p,{onUpdateValue:a,"onUpdate:value":o}=e;a&&q(a,t),o&&q(o,t),r(),i(),D.value=t}function Ce(e){Z(e,`input`),u(we)}function we(t=!0){let{value:n}=O;if(n){let{nTriggerFormChange:r,nTriggerFormInput:i}=p,{onComplete:a}=e;a&&a(n);let{value:o}=ne,{value:s}=A;t&&(o.splice(s+1,o.length,n),A.value=s+1),r(),i()}}function Te(){let{value:e}=A;e-1<0||(Z(ne.value[e-1],`input`),we(!1),A.value=e-1)}function Ee(){let{value:e}=A;e<0||e+1>=ne.value.length||(Z(ne.value[e+1],`input`),we(!1),A.value=e+1)}function De(){Z(null,`input`);let{onClear:t}=e;t&&t(),w(!1)}function Oe(){let{value:t}=O,{onConfirm:n}=e;n&&n(t),w(!1)}let ke=x(()=>A.value>=1),Ae=x(()=>{let{value:e}=ne;return e.length>1&&A.value<e.length-1});g(C,e=>{e||(ne.value=[O.value],A.value=0)}),m(()=>{if(!(s&&s===O.value)){let{value:e}=me;e&&(_e.value=e[0],ve.value=e[3],ye.value=[e[1],e[2]])}s=null});let je=x(()=>{let{value:e}=h,{common:{cubicBezierEaseInOut:t},self:{textColor:n,color:r,panelFontSize:i,boxShadow:a,border:o,borderRadius:s,dividerColor:c,[ee(`height`,e)]:l,[ee(`fontSize`,e)]:u}}=y.value;return{"--n-bezier":t,"--n-text-color":n,"--n-color":r,"--n-panel-font-size":i,"--n-font-size":u,"--n-box-shadow":a,"--n-border":o,"--n-border-radius":s,"--n-height":l,"--n-divider-color":c}}),Me=d?te(`color-picker`,x(()=>h.value[0]),je,e):void 0;function Pe(){let{value:r}=X,{value:i}=_e,{internalActions:a,modes:o,actions:s}=e,{value:l}=y,{value:u}=c;return t(`div`,{class:[`${u}-color-picker-panel`,Me?.themeClass.value],onDragstart:e=>{e.preventDefault()},style:d?void 0:je.value},t(`div`,{class:`${u}-color-picker-control`},t(pn,{clsPrefix:u,rgba:r,displayedHue:i,displayedSv:ye.value,onUpdateSV:be,onComplete:we}),t(`div`,{class:`${u}-color-picker-preview`},t(`div`,{class:`${u}-color-picker-preview__sliders`},t(un,{clsPrefix:u,hue:i,onUpdateHue:xe,onComplete:we}),e.showAlpha?t(Ut,{clsPrefix:u,rgba:r,alpha:ve.value,onUpdateAlpha:Se,onComplete:we}):null),e.showPreview?t(rn,{clsPrefix:u,mode:L.value,color:X.value&&re(X.value),onUpdateColor:e=>{Z(e,`input`)}}):null),t(Qt,{clsPrefix:u,showAlpha:e.showAlpha,mode:L.value,modes:o,onUpdateMode:z,value:O.value,valueArr:ge.value,onUpdateValue:Ce}),e.swatches?.length&&t(tn,{clsPrefix:u,mode:L.value,swatches:e.swatches,onUpdateColor:e=>{Z(e,`input`)}})),s?.length?t(`div`,{class:`${u}-color-picker-action`},s.includes(`confirm`)&&t(Je,{size:`small`,onClick:Oe,theme:l.peers.Button,themeOverrides:l.peerOverrides.Button},{default:()=>v.value.confirm}),s.includes(`clear`)&&t(Je,{size:`small`,onClick:De,disabled:!O.value,theme:l.peers.Button,themeOverrides:l.peerOverrides.Button},{default:()=>v.value.clear})):null,n.action?t(`div`,{class:`${u}-color-picker-action`},{default:n.action}):a?t(`div`,{class:`${u}-color-picker-action`},a.includes(`undo`)&&t(Je,{size:`small`,onClick:Te,disabled:!ke.value,theme:l.peers.Button,themeOverrides:l.peerOverrides.Button},{default:()=>v.value.undo}),a.includes(`redo`)&&t(Je,{size:`small`,onClick:Ee,disabled:!Ae.value,theme:l.peers.Button,themeOverrides:l.peerOverrides.Button},{default:()=>v.value.redo})):null)}return{mergedClsPrefix:c,namespace:l,hsla:he,rgba:X,mergedShow:C,mergedDisabled:_,isMounted:qe(),adjustedTo:Ne(e),mergedValue:O,handleTriggerClick(){_.value||w(!0)},setTriggerRef:a,handleClickOutside(e){if(r instanceof Element){if(r.contains(Le(e)))return}else if(r&&r.$el.contains(Le(e)))return;w(!1)},renderPanel:Pe,cssVars:d?void 0:je,themeClass:Me?.themeClass,onRender:Me?.onRender}},render(){let{mergedClsPrefix:e,onRender:n}=this;return n?.(),t(we,null,{default:()=>[t(xe,null,{default:()=>J(this.$slots.trigger,{value:this.mergedValue,onClick:this.handleTriggerClick,ref:this.setTriggerRef},n=>n||t(nn,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,style:this.cssVars,ref:this.setTriggerRef,disabled:this.mergedDisabled,class:this.themeClass,onClick:this.mergedDisabled?void 0:this.handleTriggerClick}))}),t(Ie,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Ne.tdkey,to:this.adjustedTo},{default:()=>t(y,{name:`fade-in-scale-up-transition`,appear:this.isMounted},{default:()=>this.mergedShow?f(this.renderPanel(),[[Se,this.handleClickOutside,void 0,{capture:!0}]]):null})})]})}}),gn=E(`n-dialog-provider`),_n=E(`n-dialog-api`),vn=E(`n-dialog-reactive-list`),yn={icon:Function,type:{type:String,default:`default`},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,titleClass:[String,Array],titleStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],actionClass:[String,Array],actionStyle:[String,Object],onPositiveClick:Function,onNegativeClick:Function,onClose:Function,closeFocusable:Boolean},bn=Ve(yn),xn=A([H(`dialog`,`
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[C(`icon`,`
 color: var(--n-icon-color);
 `),V(`bordered`,`
 border: var(--n-border);
 `),V(`icon-top`,[C(`close`,`
 margin: var(--n-close-margin);
 `),C(`icon`,`
 margin: var(--n-icon-margin);
 `),C(`content`,`
 text-align: center;
 `),C(`title`,`
 justify-content: center;
 `),C(`action`,`
 justify-content: center;
 `)]),V(`icon-left`,[C(`icon`,`
 margin: var(--n-icon-margin);
 `),V(`closable`,[C(`title`,`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),C(`close`,`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),C(`content`,`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[V(`last`,`margin-bottom: 0;`)]),C(`action`,`
 display: flex;
 justify-content: flex-end;
 `,[A(`> *:not(:last-child)`,`
 margin-right: var(--n-action-space);
 `)]),C(`icon`,`
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `),C(`title`,`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),H(`dialog-icon-container`,`
 display: flex;
 justify-content: center;
 `)]),w(H(`dialog`,`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),H(`dialog`,[U(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),Sn={default:()=>t(it,null),info:()=>t(it,null),success:()=>t(rt,null),warning:()=>t(at,null),error:()=>t(nt,null)},Cn=h({name:`Dialog`,alias:[`NimbusConfirmCard`,`Confirm`],props:Object.assign(Object.assign({},P.props),yn),slots:Object,setup(e){let{mergedComponentPropsRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=T(e),a=K(`Dialog`,i,n),o=x(()=>{let{iconPlacement:n}=e;return n||t?.value?.Dialog?.iconPlacement||`left`});function s(t){let{onPositiveClick:n}=e;n&&n(t)}function c(t){let{onNegativeClick:n}=e;n&&n(t)}function l(){let{onClose:t}=e;t&&t()}let u=P(`Dialog`,`-dialog`,xn,Qe,e,n),d=x(()=>{let{type:t}=e,n=o.value,{common:{cubicBezierEaseInOut:r},self:{fontSize:i,lineHeight:a,border:s,titleTextColor:c,textColor:l,color:d,closeBorderRadius:f,closeColorHover:p,closeColorPressed:m,closeIconColor:h,closeIconColorHover:g,closeIconColorPressed:_,closeIconSize:v,borderRadius:y,titleFontWeight:b,titleFontSize:x,padding:S,iconSize:C,actionSpace:w,contentMargin:T,closeSize:E,[n===`top`?`iconMarginIconTop`:`iconMargin`]:D,[n===`top`?`closeMarginIconTop`:`closeMargin`]:te,[ee(`iconColor`,t)]:O}}=u.value,k=Re(D);return{"--n-font-size":i,"--n-icon-color":O,"--n-bezier":r,"--n-close-margin":te,"--n-icon-margin-top":k.top,"--n-icon-margin-right":k.right,"--n-icon-margin-bottom":k.bottom,"--n-icon-margin-left":k.left,"--n-icon-size":C,"--n-close-size":E,"--n-close-icon-size":v,"--n-close-border-radius":f,"--n-close-color-hover":p,"--n-close-color-pressed":m,"--n-close-icon-color":h,"--n-close-icon-color-hover":g,"--n-close-icon-color-pressed":_,"--n-color":d,"--n-text-color":l,"--n-border-radius":y,"--n-padding":S,"--n-line-height":a,"--n-border":s,"--n-content-margin":T,"--n-title-font-size":x,"--n-title-font-weight":b,"--n-title-text-color":c,"--n-action-space":w}}),f=r?te(`dialog`,x(()=>`${e.type[0]}${o.value[0]}`),d,e):void 0;return{mergedClsPrefix:n,rtlEnabled:a,mergedIconPlacement:o,mergedTheme:u,handlePositiveClick:s,handleNegativeClick:c,handleCloseClick:l,cssVars:r?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender}},render(){var e;let{bordered:n,mergedIconPlacement:r,cssVars:i,closable:a,showIcon:o,title:s,content:c,action:l,negativeText:u,positiveText:d,positiveButtonProps:f,negativeButtonProps:p,handlePositiveClick:m,handleNegativeClick:h,mergedTheme:g,loading:_,type:v,mergedClsPrefix:y}=this;(e=this.onRender)==null||e.call(this);let b=o?t(le,{clsPrefix:y,class:`${y}-dialog__icon`},{default:()=>W(this.$slots.icon,e=>e||(this.icon?Pe(this.icon):Sn[this.type]()))}):null,x=W(this.$slots.action,e=>e||d||u||l?t(`div`,{class:[`${y}-dialog__action`,this.actionClass],style:this.actionStyle},e||(l?[Pe(l)]:[this.negativeText&&t(Je,Object.assign({theme:g.peers.Button,themeOverrides:g.peerOverrides.Button,ghost:!0,size:`small`,onClick:h},p),{default:()=>Pe(this.negativeText)}),this.positiveText&&t(Je,Object.assign({theme:g.peers.Button,themeOverrides:g.peerOverrides.Button,size:`small`,type:v===`default`?`primary`:v,disabled:_,loading:_,onClick:m},f),{default:()=>Pe(this.positiveText)})])):null);return t(`div`,{class:[`${y}-dialog`,this.themeClass,this.closable&&`${y}-dialog--closable`,`${y}-dialog--icon-${r}`,n&&`${y}-dialog--bordered`,this.rtlEnabled&&`${y}-dialog--rtl`],style:i,role:`dialog`},a?W(this.$slots.close,e=>{let n=[`${y}-dialog__close`,this.rtlEnabled&&`${y}-dialog--rtl`];return e?t(`div`,{class:n},e):t(X,{focusable:this.closeFocusable,clsPrefix:y,class:n,onClick:this.handleCloseClick})}):null,o&&r===`top`?t(`div`,{class:`${y}-dialog-icon-container`},b):null,t(`div`,{class:[`${y}-dialog__title`,this.titleClass],style:this.titleStyle},o&&r===`left`?b:null,me(this.$slots.header,()=>[Pe(s)])),t(`div`,{class:[`${y}-dialog__content`,x?``:`${y}-dialog__content--last`,this.contentClass],style:this.contentStyle},me(this.$slots.default,()=>[Pe(c)])),x)}}),wn=`n-draggable`;function Tn(e,t){let n,r=x(()=>e.value!==!1),i=x(()=>r.value?wn:``),a=x(()=>{let t=e.value;return t===!0||t===!1?!0:t?t.bounds!==`none`:!0});function o(e){let r=e.querySelector(`.${wn}`);if(!r||!i.value)return;let o=0,s=0,c=0,l=0,u=0,d=0,f,p=null,m=null;function h(t){t.preventDefault(),f=t;let{x:n,y:r,right:i,bottom:a}=e.getBoundingClientRect();s=n,l=r,o=window.innerWidth-i,c=window.innerHeight-a;let{left:p,top:m}=e.style;u=+m.slice(0,-2),d=+p.slice(0,-2)}function g(){m&&=(e.style.top=`${m.y}px`,e.style.left=`${m.x}px`,null),p=null}function _(e){if(!f)return;let{clientX:t,clientY:n}=f,r=e.clientX-t,i=e.clientY-n;a.value&&(r>o?r=o:-r>s&&(r=-s),i>c?i=c:-i>l&&(i=-l)),m={x:r+d,y:i+u},p||=requestAnimationFrame(g)}function v(){f=void 0,p&&=(cancelAnimationFrame(p),null),m&&=(e.style.top=`${m.y}px`,e.style.left=`${m.x}px`,null),t.onEnd(e)}Q(`mousedown`,r,h),Q(`mousemove`,window,_),Q(`mouseup`,window,v),n=()=>{p&&cancelAnimationFrame(p),$(`mousedown`,r,h),$(`mousemove`,window,_),$(`mouseup`,window,v)}}function c(){n&&=(n(),void 0)}return s(c),{stopDrag:c,startDrag:o,draggableRef:r,draggableClassRef:i}}var En=Object.assign(Object.assign({},_e),yn),Dn=Ve(En),On=h({name:`ModalBody`,inheritAttrs:!1,slots:Object,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean,draggable:{type:[Boolean,Object],default:!1},maskHidden:Boolean},En),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){let t=o(null),r=o(null),a=o(e.show),s=o(null),l=o(null),d=c(Z),f=null;g(i(e,`show`),e=>{e&&(f=d.getMousePosition())},{immediate:!0});let{stopDrag:p,startDrag:m,draggableRef:h,draggableClassRef:_}=Tn(i(e,`draggable`),{onEnd:e=>{C(e)}}),v=x(()=>n([e.titleClass,_.value])),y=x(()=>n([e.headerClass,_.value]));g(i(e,`show`),e=>{e&&(a.value=!0)}),Dt(x(()=>e.blockScroll&&a.value));function S(){if(d.transformOriginRef.value===`center`)return``;let{value:e}=s,{value:t}=l;return e===null||t===null?``:r.value?`${e}px ${t+r.value.containerScrollTop}px`:``}function C(e){if(d.transformOriginRef.value===`center`||!f||!r.value)return;let t=r.value.containerScrollTop,{offsetLeft:n,offsetTop:i}=e,a=f.y;s.value=-(n-f.x),l.value=-(i-a-t),e.style.transformOrigin=S()}function w(e){u(()=>{C(e)})}function ee(t){t.style.transformOrigin=S(),e.onBeforeLeave()}function T(t){let n=t;h.value&&m(n),e.onAfterEnter&&e.onAfterEnter(n)}function E(){a.value=!1,s.value=null,l.value=null,p(),e.onAfterLeave()}function D(){let{onClose:t}=e;t&&t()}function te(){e.onNegativeClick()}function O(){e.onPositiveClick()}let k=o(null);return g(k,e=>{e&&u(()=>{let n=e.el;n&&t.value!==n&&(t.value=n)})}),b(Me,t),b(Te,null),b(be,null),{mergedTheme:d.mergedThemeRef,appear:d.appearRef,isMounted:d.isMountedRef,mergedClsPrefix:d.mergedClsPrefixRef,bodyRef:t,scrollbarRef:r,draggableClass:_,displayed:a,childNodeRef:k,cardHeaderClass:y,dialogTitleClass:v,handlePositiveClick:O,handleNegativeClick:te,handleCloseClick:D,handleAfterEnter:T,handleAfterLeave:E,handleBeforeLeave:ee,handleEnter:w}},render(){let{$slots:n,$attrs:r,handleEnter:i,handleAfterEnter:a,handleAfterLeave:o,handleBeforeLeave:s,preset:c,mergedClsPrefix:l}=this,u=null;if(!c){if(u=Oe(`default`,n.default,{draggableClass:this.draggableClass}),!u){O(`modal`,`default slot is empty`);return}u=p(u),u.props=e({class:`${l}-modal`},r,u.props||{})}return this.displayDirective===`show`||this.displayed||this.show?f(t(`div`,{role:`none`,class:[`${l}-modal-body-wrapper`,this.maskHidden&&`${l}-modal-body-wrapper--mask-hidden`]},t(ze,{ref:`scrollbarRef`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${l}-modal-scroll-content`},{default:()=>[this.renderMask?.call(this),t(Ae,{disabled:!this.trapFocus||this.maskHidden,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>t(y,{name:`fade-in-scale-up-transition`,appear:this.appear??this.isMounted,onEnter:i,onAfterEnter:a,onAfterLeave:o,onBeforeLeave:s},{default:()=>{let e=[[v,this.show]],{onClickoutside:r}=this;return r&&e.push([Se,this.onClickoutside,void 0,{capture:!0}]),f(this.preset===`confirm`||this.preset===`dialog`?t(Cn,Object.assign({},this.$attrs,{class:[`${l}-modal`,this.$attrs.class],ref:`bodyRef`,theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},je(this.$props,bn),{titleClass:this.dialogTitleClass,"aria-modal":`true`}),n):this.preset===`card`?t(ve,Object.assign({},this.$attrs,{ref:`bodyRef`,class:[`${l}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},je(this.$props,ye),{headerClass:this.cardHeaderClass,"aria-modal":`true`,role:`dialog`}),n):this.childNodeRef=u,e)}})})]})),[[v,this.displayDirective===`if`||this.displayed||this.show]]):null}}),kn=A([H(`modal-container`,`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),H(`modal-mask`,`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[Be({enterDuration:`.25s`,leaveDuration:`.25s`,enterCubicBezier:`var(--n-bezier-ease-out)`,leaveCubicBezier:`var(--n-bezier-ease-out)`})]),H(`modal-body-wrapper`,`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[H(`modal-scroll-content`,`
 min-height: 100%;
 display: flex;
 position: relative;
 `),V(`mask-hidden`,`pointer-events: none;`,[H(`modal-scroll-content`,[A(`> *`,`
 pointer-events: all;
 `)])])]),H(`modal`,`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[ke({duration:`.25s`,enterScale:`.5`}),A(`.${wn}`,`
 cursor: move;
 user-select: none;
 `)])]),An=h({name:`Modal`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign(Object.assign({},P.props),{show:Boolean,showMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:`if`},transformOrigin:{type:String,default:`mouse`},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),En),{draggable:[Boolean,Object],onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalModal:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function,unstableShowMask:{type:Boolean,default:void 0}}),slots:Object,setup(e){let t=o(null),{mergedClsPrefixRef:n,namespaceRef:r,inlineThemeDisabled:a}=T(e),s=P(`Modal`,`-modal`,kn,Ze,e,n),l=ht(64),u=ut(),d=qe(),f=e.internalDialog?c(gn,null):null,p=e.internalModal?c(Ce,null):null,m=bt();function h(t){let{onUpdateShow:n,"onUpdate:show":r,onHide:i}=e;n&&q(n,t),r&&q(r,t),i&&!t&&i(t)}function g(){let{onClose:t}=e;t?Promise.resolve(t()).then(e=>{e!==!1&&h(!1)}):h(!1)}function _(){let{onPositiveClick:t}=e;t?Promise.resolve(t()).then(e=>{e!==!1&&h(!1)}):h(!1)}function v(){let{onNegativeClick:t}=e;t?Promise.resolve(t()).then(e=>{e!==!1&&h(!1)}):h(!1)}function y(){let{onBeforeLeave:t,onBeforeHide:n}=e;t&&q(t),n&&n()}function S(){let{onAfterLeave:t,onAfterHide:n}=e;t&&q(t),n&&n()}function C(n){let{onMaskClick:r}=e;r&&r(n),e.maskClosable&&t.value?.contains(Le(n))&&h(!1)}function w(t){var n;(n=e.onEsc)==null||n.call(e),e.show&&e.closeOnEsc&&Fe(t)&&(m.value||h(!1))}b(Z,{getMousePosition:()=>{let e=f||p;if(e){let{clickedRef:t,clickedPositionRef:n}=e;if(t.value&&n.value)return n.value}return l.value?u.value:null},mergedClsPrefixRef:n,mergedThemeRef:s,isMountedRef:d,appearRef:i(e,`internalAppear`),transformOriginRef:i(e,`transformOrigin`)});let ee=x(()=>{let{common:{cubicBezierEaseOut:e},self:{boxShadow:t,color:n,textColor:r}}=s.value;return{"--n-bezier-ease-out":e,"--n-box-shadow":t,"--n-color":n,"--n-text-color":r}}),E=a?te(`theme-class`,void 0,ee,e):void 0;return{mergedClsPrefix:n,namespace:r,isMounted:d,containerRef:t,presetProps:x(()=>je(e,Dn)),handleEsc:w,handleAfterLeave:S,handleClickoutside:C,handleBeforeLeave:y,doUpdateShow:h,handleNegativeClick:v,handlePositiveClick:_,handleCloseClick:g,cssVars:a?void 0:ee,themeClass:E?.themeClass,onRender:E?.onRender}},render(){let{mergedClsPrefix:e}=this;return t(Ee,{to:this.to,show:this.show},{default:()=>{var n;(n=this.onRender)==null||n.call(this);let{showMask:r}=this;return f(t(`div`,{role:`none`,ref:`containerRef`,class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},t(On,Object.assign({style:this.overlayStyle},this.$attrs,{ref:`bodyWrapper`,displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,draggable:this.draggable,blockScroll:this.blockScroll,maskHidden:!r},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:r?void 0:this.handleClickoutside,renderMask:r?()=>t(y,{name:`fade-in-transition`,key:`mask`,appear:this.internalAppear??this.isMounted},{default:()=>this.show?t(`div`,{"aria-hidden":!0,ref:`containerRef`,class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null}):void 0}),this.$slots)),[[De,{zIndex:this.zIndex,enabled:this.show}]])}})}}),jn=H(`divider`,`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[D(`vertical`,`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[D(`no-title`,`
 display: flex;
 align-items: center;
 `)]),C(`title`,`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),V(`title-position-left`,[C(`line`,[V(`left`,{width:`28px`})])]),V(`title-position-right`,[C(`line`,[V(`right`,{width:`28px`})])]),V(`dashed`,[C(`line`,`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),V(`vertical`,`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),C(`line`,`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),D(`dashed`,[C(`line`,{backgroundColor:`var(--n-color)`})]),V(`dashed`,[C(`line`,{borderColor:`var(--n-color)`})]),V(`vertical`,{backgroundColor:`var(--n-color)`})]),Mn=h({name:`Divider`,props:Object.assign(Object.assign({},P.props),{titlePlacement:{type:String,default:`center`},dashed:Boolean,vertical:Boolean}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=T(e),r=P(`Divider`,`-divider`,jn,Xe,e,t),i=x(()=>{let{common:{cubicBezierEaseInOut:e},self:{color:t,textColor:n,fontWeight:i}}=r.value;return{"--n-bezier":e,"--n-color":t,"--n-text-color":n,"--n-font-weight":i}}),a=n?te(`divider`,void 0,i,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){var e;let{$slots:n,titlePlacement:r,vertical:i,dashed:a,cssVars:o,mergedClsPrefix:s}=this;return(e=this.onRender)==null||e.call(this),t(`div`,{role:`separator`,class:[`${s}-divider`,this.themeClass,{[`${s}-divider--vertical`]:i,[`${s}-divider--no-title`]:!n.default,[`${s}-divider--dashed`]:a,[`${s}-divider--title-position-${r}`]:n.default&&r}],style:o},i?null:t(`div`,{class:`${s}-divider__line ${s}-divider__line--left`}),!i&&n.default?t(_,null,t(`div`,{class:`${s}-divider__title`},this.$slots),t(`div`,{class:`${s}-divider__line ${s}-divider__line--right`})):null)}});function Nn(e){let{textColorDisabled:t}=e;return{iconColorDisabled:t}}var Pn=L({name:`InputNumber`,common:z,peers:{Button:Y,Input:He},self:Nn});function Fn(e){let{baseColor:t,textColor2:n,bodyColor:r,cardColor:i,dividerColor:a,actionColor:o,scrollbarColor:s,scrollbarColorHover:c,invertedColor:l}=e;return{textColor:n,textColorInverted:`#FFF`,color:r,colorEmbedded:o,headerColor:i,headerColorInverted:l,footerColor:o,footerColorInverted:l,headerBorderColor:a,headerBorderColorInverted:l,footerBorderColor:a,footerBorderColorInverted:l,siderBorderColor:a,siderBorderColorInverted:l,siderColor:i,siderColorInverted:l,siderToggleButtonBorder:`1px solid ${a}`,siderToggleButtonColor:t,siderToggleButtonIconColor:n,siderToggleButtonIconColorInverted:n,siderToggleBarColor:ae(r,s),siderToggleBarColorHover:ae(r,c),__invertScrollbar:`true`}}var In=L({name:`Layout`,common:z,peers:{Scrollbar:Ue},self:Fn});function Ln(e){let{railColor:t,primaryColor:n,baseColor:r,cardColor:i,modalColor:a,popoverColor:o,borderRadius:s,fontSize:c,opacityDisabled:l}=e;return Object.assign(Object.assign({},et),{fontSize:c,markFontSize:c,railColor:t,railColorHover:t,fillColor:n,fillColorHover:n,opacityDisabled:l,handleColor:`#FFF`,dotColor:i,dotColorModal:a,dotColorPopover:o,handleBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,handleBoxShadowHover:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,handleBoxShadowActive:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,handleBoxShadowFocus:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,indicatorColor:`rgba(0, 0, 0, .85)`,indicatorBoxShadow:`0 2px 8px 0 rgba(0, 0, 0, 0.12)`,indicatorTextColor:r,indicatorBorderRadius:s,dotBorder:`2px solid ${t}`,dotBorderActive:`2px solid ${n}`,dotBoxShadow:``})}var Rn={name:`Slider`,common:z,self:Ln};function zn(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},tt),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${S(t,{alpha:.2})}`})}var Bn={name:`Switch`,common:z,self:zn},Vn=L({name:`Watermark`,common:z,self(e){let{fontFamily:t}=e;return{fontFamily:t}}});export{Dt as _,Pn as a,ut as b,Cn as c,_n as d,gn as f,Et as g,jt as h,In as i,bn as l,hn as m,Bn as n,Mn as o,vn as p,Rn as r,An as s,Vn as t,yn as u,bt as v,ht as y};