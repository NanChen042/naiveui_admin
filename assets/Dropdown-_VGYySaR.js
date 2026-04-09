import{B as e,F as t,H as n,J as r,K as i,Lt as a,Mt as o,Nt as s,R as c,U as l,V as u,W as d,_t as f,ht as p,it as m,j as h,jt as g,mt as _,p as v,s as y,t as b,tt as x,x as S}from"./vue.runtime.esm-bundler-D_ATJLwM.js";import{Ct as C,Et as w,G as T,Q as E,Tt as D,W as O,Y as k,Z as A,bt as j,i as M,n as N,wt as P,xt as F}from"./light-CkuL5o25.js";import{f as I,g as L,i as R,m as z,u as B}from"./light-gcvVC2vE.js";import{A as ee,C as V,M as te,O as H,P as ne,l as U,p as re,s as ie}from"./_common-Dw5diFPD.js";import{A as W,B as G,C as K,D as q,E as J,I as ae,L as Y,O as oe,P as se,a as ce,g as le,i as ue,j as de,k as fe,m as X,n as pe,o as me,r as he,t as ge,w as _e,x as ve,y as ye}from"./light-ziahGn9C.js";import{C as Z,E as Q,O as be,T as xe,_ as Se,b as Ce,c as we,g as Te,l as Ee,p as De,r as Oe,y as ke}from"./request-gDbOFxdk.js";import{l as Ae,n as je,u as Me}from"./Input-BN8pxWt_.js";import{d as Ne,f as Pe,o as Fe,p as Ie}from"./Button-BopshsDo.js";import{t as Le}from"./use-locale-Blf2NK25.js";import{t as Re}from"./Empty-zLSiiwAH.js";function ze(e={},t){let n=g({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,a=e=>{switch(e.key){case`Control`:n.ctrl=!0;break;case`Meta`:n.command=!0,n.win=!0;break;case`Shift`:n.shift=!0;break;case`Tab`:n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(t=>{if(t!==e.key)return;let n=r[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=e=>{switch(e.key){case`Control`:n.ctrl=!1;break;case`Meta`:n.command=!1,n.win=!1;break;case`Shift`:n.shift=!1;break;case`Tab`:n.tab=!1;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},c=()=>{(t===void 0||t.value)&&(Ce(`keydown`,document,a),Ce(`keyup`,document,s)),t!==void 0&&_(t,e=>{e?(Ce(`keydown`,document,a),Ce(`keyup`,document,s)):(ke(`keydown`,document,a),ke(`keyup`,document,s))})};return te()?(l(c),d(()=>{(t===void 0||t.value)&&(ke(`keydown`,document,a),ke(`keyup`,document,s))})):c(),o(n)}function Be(e,t,n){if(!t)return e;let r=s(e.value),i=null;return _(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function Ve(e){return e&-e}var He=class{constructor(e,t){this.l=e,this.min=t;let n=Array(e+1);for(let t=0;t<e+1;++t)n[t]=0;this.ft=n}add(e,t){if(t===0)return;let{l:n,ft:r}=this;for(e+=1;e<=n;)r[e]+=t,e+=Ve(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;let{ft:t,min:n,l:r}=this;if(e>r)throw Error("[FinweckTree.sum]: `i` is larger than length.");let i=e*n;for(;e>0;)i+=t[e],e-=Ve(e);return i}getBound(e){let t=0,n=this.l;for(;n>t;){let r=Math.floor((t+n)/2),i=this.sum(r);if(i>e){n=r;continue}else if(i<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}},Ue;function We(){return typeof document>`u`?!1:(Ue===void 0&&(Ue=`matchMedia`in window?window.matchMedia(`(pointer:coarse)`).matches:!1),Ue)}var Ge;function Ke(){return typeof document>`u`?1:(Ge===void 0&&(Ge=`chrome`in window?window.devicePixelRatio:1),Ge)}var qe=`VVirtualListXScroll`;function Je({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){let r=s(0),i=s(0),a=S(()=>{let t=e.value;if(t.length===0)return null;let n=new He(t.length,0);return t.forEach((e,t)=>{n.add(t,e.width)}),n});return x(qe,{startIndexRef:L(()=>{let e=a.value;return e===null?0:Math.max(e.getBound(i.value)-1,0)}),endIndexRef:L(()=>{let t=a.value;return t===null?0:Math.min(t.getBound(i.value+r.value)+1,e.value.length-1)}),columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:e=>{let t=a.value;return t===null?0:t.sum(e)}}),{listWidthRef:r,scrollLeftRef:i}}var Ye=h({name:`VirtualListRow`,props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){let{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:i,renderItemWithColsRef:a}=c(qe);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:a,getLeft:r}},render(){let{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:i,getLeft:a,item:o}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:o,getLeft:a});if(r!=null){let i=[];for(let s=e;s<=t;++s){let e=n[s];i.push(r({column:e,left:a(s),item:o}))}return i}return null}}),Xe=K(`.v-vl`,{maxHeight:`inherit`,height:`100%`,overflow:`auto`,minWidth:`1px`},[K(`&:not(.v-vl--show-scrollbar)`,{scrollbarWidth:`none`},[K(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,{width:0,height:0,display:`none`})])]),Ze=h({name:`VirtualList`,inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:`div`},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:`key`},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){let t=A();Xe.mount({id:`vueuc/virtual-list`,head:!0,anchorMetaName:_e,ssr:t}),r(()=>{let{defaultScrollIndex:t,defaultScrollKey:n}=e;t==null?n!=null&&x({key:n}):x({index:t})});let o=!1,c=!1;n(()=>{if(o=!1,!c){c=!0;return}x({top:v.value,left:d.value})}),i(()=>{o=!0,c||=!0});let l=L(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let t=0;return e.columns.forEach(e=>{t+=e.width}),t}),u=S(()=>{let t=new Map,{keyField:n}=e;return e.items.forEach((e,r)=>{t.set(e[n],r)}),t}),{scrollLeftRef:d,listWidthRef:f}=Je({columnsRef:a(e,`columns`),renderColRef:a(e,`renderCol`),renderItemWithColsRef:a(e,`renderItemWithCols`)}),p=s(null),m=s(void 0),h=new Map,g=S(()=>{let{items:t,itemSize:n,keyField:r}=e,i=new He(t.length,n);return t.forEach((e,t)=>{let n=e[r],a=h.get(n);a!==void 0&&i.add(t,a)}),i}),_=s(0),v=s(0),y=L(()=>Math.max(g.value.getBound(v.value-Z(e.paddingTop))-1,0)),b=S(()=>{let{value:t}=m;if(t===void 0)return[];let{items:n,itemSize:r}=e,i=y.value,a=Math.min(i+Math.ceil(t/r+1),n.length-1),o=[];for(let e=i;e<=a;++e)o.push(n[e]);return o}),x=(e,t)=>{if(typeof e==`number`){E(e,t,`auto`);return}let{left:n,top:r,index:i,key:a,position:o,behavior:s,debounce:c=!0}=e;if(n!==void 0||r!==void 0)E(n,r,s);else if(i!==void 0)T(i,s,c);else if(a!==void 0){let e=u.value.get(a);e!==void 0&&T(e,s,c)}else o===`bottom`?E(0,2**53-1,s):o===`top`&&E(0,0,s)},C,w=null;function T(t,n,r){let{value:i}=g,a=i.sum(t)+Z(e.paddingTop);if(!r)p.value.scrollTo({left:0,top:a,behavior:n});else{C=t,w!==null&&window.clearTimeout(w),w=window.setTimeout(()=>{C=void 0,w=null},16);let{scrollTop:e,offsetHeight:r}=p.value;if(a>e){let o=i.get(t);a+o<=e+r||p.value.scrollTo({left:0,top:a+o-r,behavior:n})}else p.value.scrollTo({left:0,top:a,behavior:n})}}function E(e,t,n){p.value.scrollTo({left:e,top:t,behavior:n})}function D(t,n){if(o||e.ignoreItemResize||F(n.target))return;let{value:r}=g,i=u.value.get(t),a=r.get(i),s=n.borderBoxSize?.[0]?.blockSize??n.contentRect.height;if(s===a)return;s-e.itemSize===0?h.delete(t):h.set(t,s-e.itemSize);let c=s-a;if(c===0)return;r.add(i,c);let l=p.value;if(l!=null){if(C===void 0){let e=r.sum(i);l.scrollTop>e&&l.scrollBy(0,c)}else (i<C||i===C&&s+r.sum(i)>l.scrollTop+l.offsetHeight)&&l.scrollBy(0,c);P()}_.value++}let O=!We(),k=!1;function j(t){var n;(n=e.onScroll)==null||n.call(e,t),(!O||!k)&&P()}function M(t){var n;if((n=e.onWheel)==null||n.call(e,t),O){let e=p.value;if(e!=null){if(t.deltaX===0&&(e.scrollTop===0&&t.deltaY<=0||e.scrollTop+e.offsetHeight>=e.scrollHeight&&t.deltaY>=0))return;t.preventDefault(),e.scrollTop+=t.deltaY/Ke(),e.scrollLeft+=t.deltaX/Ke(),P(),k=!0,ne(()=>{k=!1})}}}function N(t){if(o||F(t.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(t.contentRect.height===m.value)return}else if(t.contentRect.height===m.value&&t.contentRect.width===f.value)return;m.value=t.contentRect.height,f.value=t.contentRect.width;let{onResize:n}=e;n!==void 0&&n(t)}function P(){let{value:e}=p;e!=null&&(v.value=e.scrollTop,d.value=e.scrollLeft)}function F(e){let t=e;for(;t!==null;){if(t.style.display===`none`)return!0;t=t.parentElement}return!1}return{listHeight:m,listStyle:{overflow:`auto`},keyToIndex:u,itemsStyle:S(()=>{let{itemResizable:t}=e,n=Q(g.value.sum());return _.value,[e.itemsStyle,{boxSizing:`content-box`,width:Q(l.value),height:t?``:n,minHeight:t?n:``,paddingTop:Q(e.paddingTop),paddingBottom:Q(e.paddingBottom)}]}),visibleItemsStyle:S(()=>(_.value,{transform:`translateY(${Q(g.value.sum(y.value))})`})),viewportItems:b,listElRef:p,itemsElRef:s(null),scrollTo:x,handleListResize:N,handleListScroll:j,handleListWheel:M,handleItemResize:D}},render(){let{itemResizable:n,keyField:r,keyToIndex:i,visibleItemsTag:a}=this;return t(Te,{onResize:this.handleListResize},{default:()=>{var o;return t(`div`,e(this.$attrs,{class:[`v-vl`,this.showScrollbar&&`v-vl--show-scrollbar`],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:`listElRef`}),[this.items.length===0?(o=this.$slots).empty?.call(o):t(`div`,{ref:`itemsElRef`,class:`v-vl-items`,style:this.itemsStyle},[t(a,Object.assign({class:`v-vl-visible-items`,style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{let{renderCol:e,renderItemWithCols:a}=this;return this.viewportItems.map(o=>{let s=o[r],c=i.get(s),l=e==null?void 0:t(Ye,{index:c,item:o}),u=a==null?void 0:t(Ye,{index:c,item:o}),d=this.$slots.default({item:o,renderedCols:l,renderedItemWithCols:u,index:c})[0];return n?t(Te,{key:s,onResize:e=>this.handleItemResize(s,e)},{default:()=>d}):(d.key=s,d)})}})])])}})}}),$=`v-hidden`,Qe=K(`[v-hidden]`,{display:`none!important`}),$e=h({name:`Overflow`,props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){let n=s(null),i=s(null);function a(r){let{value:a}=n,{getCounter:o,getTail:s}=e,c;if(c=o===void 0?i.value:o(),!a||!c)return;c.hasAttribute($)&&c.removeAttribute($);let{children:l}=a;if(r.showAllItemsBeforeCalculate)for(let e of l)e.hasAttribute($)&&e.removeAttribute($);let u=a.offsetWidth,d=[],f=t.tail?s?.():null,p=f?f.offsetWidth:0,m=!1,h=a.children.length-(t.tail?1:0);for(let t=0;t<h-1;++t){if(t<0)continue;let n=l[t];if(m){n.hasAttribute($)||n.setAttribute($,``);continue}else n.hasAttribute($)&&n.removeAttribute($);let r=n.offsetWidth;if(p+=r,d[t]=r,p>u){let{updateCounter:n}=e;for(let r=t;r>=0;--r){let i=h-1-r;n===void 0?c.textContent=`${i}`:n(i);let a=c.offsetWidth;if(p-=d[r],p+a<=u||r===0){m=!0,t=r-1,f&&(t===-1?(f.style.maxWidth=`${u-a}px`,f.style.boxSizing=`border-box`):f.style.maxWidth=``);let{onUpdateCount:n}=e;n&&n(i);break}}}}let{onUpdateOverflow:g}=e;m?g!==void 0&&g(!0):(g!==void 0&&g(!1),c.setAttribute($,``))}let o=A();return Qe.mount({id:`vueuc/overflow`,head:!0,anchorMetaName:_e,ssr:o}),r(()=>a({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:i,sync:a}},render(){let{$slots:e}=this;return u(()=>this.sync({showAllItemsBeforeCalculate:!1})),t(`div`,{class:`v-overflow`,ref:`selfRef`},[m(e,`default`),e.counter?e.counter():t(`span`,{style:{display:`inline-block`},ref:`counterRef`}),e.tail?e.tail():null])}});function et(e,t){t&&(r(()=>{let{value:n}=e;n&&Se.registerHandler(n,t)}),_(e,(e,t)=>{t&&Se.unregisterHandler(t)},{deep:!1}),d(()=>{let{value:t}=e;t&&Se.unregisterHandler(t)}))}function tt(e){switch(typeof e){case`string`:return e||void 0;case`number`:return String(e);default:return}}function nt(e){return t=>{t?e.value=t.$el:e.value=null}}function rt(e){let t=e.filter(e=>e!==void 0);if(t.length!==0)return t.length===1?t[0]:t=>{e.forEach(e=>{e&&e(t)})}}var it=h({name:`Checkmark`,render(){return t(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},t(`g`,{fill:`none`},t(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})))}}),at=h({props:{onFocus:Function,onBlur:Function},setup(e){return()=>t(`div`,{style:`width: 0; height: 0`,tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function ot(e){return Array.isArray(e)?e:[e]}var st={STOP:`STOP`};function ct(e,t){let n=t(e);e.children!==void 0&&n!==st.STOP&&e.children.forEach(e=>ct(e,t))}function lt(e,t={}){let{preserveGroup:n=!1}=t,r=[],i=n?e=>{e.isLeaf||(r.push(e.key),a(e.children))}:e=>{e.isLeaf||(e.isGroup||r.push(e.key),a(e.children))};function a(e){e.forEach(i)}return a(e),r}function ut(e,t){let{isLeaf:n}=e;return n===void 0?!t(e):n}function dt(e){return e.children}function ft(e){return e.key}function pt(){return!1}function mt(e,t){let{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function ht(e){return e.disabled===!0}function gt(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function _t(e){return e==null?[]:Array.isArray(e)?e:e.checkedKeys??[]}function vt(e){return e==null||Array.isArray(e)?[]:e.indeterminateKeys??[]}function yt(e,t){let n=new Set(e);return t.forEach(e=>{n.has(e)||n.add(e)}),Array.from(n)}function bt(e,t){let n=new Set(e);return t.forEach(e=>{n.has(e)&&n.delete(e)}),Array.from(n)}function xt(e){return e?.type===`group`}function St(e){let t=new Map;return e.forEach((e,n)=>{t.set(e.key,n)}),e=>t.get(e)??null}var Ct=class extends Error{constructor(){super(),this.message=`SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.`}};function wt(e,t,n,r){return Ot(t.concat(e),n,r,!1)}function Tt(e,t){let n=new Set;return e.forEach(e=>{let r=t.treeNodeMap.get(e);if(r!==void 0){let e=r.parent;for(;e!==null&&!(e.disabled||n.has(e.key));)n.add(e.key),e=e.parent}}),n}function Et(e,t,n,r){let i=Ot(t,n,r,!1),a=Ot(e,n,r,!0),o=Tt(e,n),s=[];return i.forEach(e=>{(a.has(e)||o.has(e))&&s.push(e)}),s.forEach(e=>i.delete(e)),i}function Dt(e,t){let{checkedKeys:n,keysToCheck:r,keysToUncheck:i,indeterminateKeys:a,cascade:o,leafOnly:s,checkStrategy:c,allowNotLoaded:l}=e;if(!o)return r===void 0?i===void 0?{checkedKeys:Array.from(n),indeterminateKeys:Array.from(a)}:{checkedKeys:bt(n,i),indeterminateKeys:Array.from(a)}:{checkedKeys:yt(n,r),indeterminateKeys:Array.from(a)};let{levelTreeNodeMap:u}=t,d;d=i===void 0?r===void 0?Ot(n,t,l,!1):wt(r,n,t,l):Et(i,n,t,l);let f=c===`parent`,p=c===`child`||s,m=d,h=new Set,g=Math.max.apply(null,Array.from(u.keys()));for(let e=g;e>=0;--e){let t=e===0,n=u.get(e);for(let e of n){if(e.isLeaf)continue;let{key:n,shallowLoaded:r}=e;if(p&&r&&e.children.forEach(e=>{!e.disabled&&!e.isLeaf&&e.shallowLoaded&&m.has(e.key)&&m.delete(e.key)}),e.disabled||!r)continue;let i=!0,a=!1,o=!0;for(let t of e.children){let e=t.key;if(!t.disabled){if(o&&=!1,m.has(e))a=!0;else if(h.has(e)){a=!0,i=!1;break}else if(i=!1,a)break}}i&&!o?(f&&e.children.forEach(e=>{!e.disabled&&m.has(e.key)&&m.delete(e.key)}),m.add(n)):a&&h.add(n),t&&p&&m.has(n)&&m.delete(n)}}return{checkedKeys:Array.from(m),indeterminateKeys:Array.from(h)}}function Ot(e,t,n,r){let{treeNodeMap:i,getChildren:a}=t,o=new Set,s=new Set(e);return e.forEach(e=>{let t=i.get(e);t!==void 0&&ct(t,e=>{if(e.disabled)return st.STOP;let{key:t}=e;if(!o.has(t)&&(o.add(t),s.add(t),gt(e.rawNode,a))){if(r)return st.STOP;if(!n)throw new Ct}})}),s}function kt(e,{includeGroup:t=!1,includeSelf:n=!0},r){let i=r.treeNodeMap,a=e==null?null:i.get(e)??null,o={keyPath:[],treeNodePath:[],treeNode:a};if(a?.ignored)return o.treeNode=null,o;for(;a;)!a.ignored&&(t||!a.isGroup)&&o.treeNodePath.push(a),a=a.parent;return o.treeNodePath.reverse(),n||o.treeNodePath.pop(),o.keyPath=o.treeNodePath.map(e=>e.key),o}function At(e){if(e.length===0)return null;let t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function jt(e,t){let n=e.siblings,r=n.length,{index:i}=e;return t?n[(i+1)%r]:i===n.length-1?null:n[i+1]}function Mt(e,t,{loop:n=!1,includeDisabled:r=!1}={}){let i=t===`prev`?Nt:jt,a={reverse:t===`prev`},o=!1,s=null;function c(t){if(t!==null){if(t===e){if(!o)o=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!t.disabled||r)&&!t.ignored&&!t.isGroup){s=t;return}if(t.isGroup){let e=Ft(t,a);e===null?c(i(t,n)):s=e}else{let e=i(t,!1);if(e!==null)c(e);else{let e=Pt(t);e?.isGroup?c(i(e,n)):n&&c(i(t,!0))}}}}return c(e),s}function Nt(e,t){let n=e.siblings,r=n.length,{index:i}=e;return t?n[(i-1+r)%r]:i===0?null:n[i-1]}function Pt(e){return e.parent}function Ft(e,t={}){let{reverse:n=!1}=t,{children:r}=e;if(r){let{length:e}=r,i=n?e-1:0,a=n?-1:e,o=n?-1:1;for(let e=i;e!==a;e+=o){let n=r[e];if(!n.disabled&&!n.ignored)if(n.isGroup){let e=Ft(n,t);if(e!==null)return e}else return n}}return null}var It={getChild(){return this.ignored?null:Ft(this)},getParent(){let{parent:e}=this;return e?.isGroup?e.getParent():e},getNext(e={}){return Mt(this,`next`,e)},getPrev(e={}){return Mt(this,`prev`,e)}};function Lt(e,t){let n=t?new Set(t):void 0,r=[];function i(e){e.forEach(e=>{r.push(e),!(e.isLeaf||!e.children||e.ignored)&&(e.isGroup||n===void 0||n.has(e.key))&&i(e.children)})}return i(e),r}function Rt(e,t){let n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function zt(e,t,n,r,i,a=null,o=0){let s=[];return e.forEach((c,l)=>{var u;let d=Object.create(r);if(d.rawNode=c,d.siblings=s,d.level=o,d.index=l,d.isFirstChild=l===0,d.isLastChild=l+1===e.length,d.parent=a,!d.ignored){let e=i(c);Array.isArray(e)&&(d.children=zt(e,t,n,r,i,d,o+1))}s.push(d),t.set(d.key,d),n.has(o)||n.set(o,[]),(u=n.get(o))==null||u.push(d)}),s}function Bt(e,t={}){let n=new Map,r=new Map,{getDisabled:i=ht,getIgnored:a=pt,getIsGroup:o=xt,getKey:s=ft}=t,c=t.getChildren??dt,l=t.ignoreEmptyChildren?e=>{let t=c(e);return Array.isArray(t)?t.length?t:null:t}:c,u=zt(e,n,r,Object.assign({get key(){return s(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return o(this.rawNode)},get isLeaf(){return ut(this.rawNode,l)},get shallowLoaded(){return mt(this.rawNode,l)},get ignored(){return a(this.rawNode)},contains(e){return Rt(this,e)}},It),l);function d(e){if(e==null)return null;let t=n.get(e);return t&&!t.isGroup&&!t.ignored?t:null}function f(e){if(e==null)return null;let t=n.get(e);return t&&!t.ignored?t:null}function p(e,t){let n=f(e);return n?n.getPrev(t):null}function m(e,t){let n=f(e);return n?n.getNext(t):null}function h(e){let t=f(e);return t?t.getParent():null}function g(e){let t=f(e);return t?t.getChild():null}let _={treeNodes:u,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:l,getFlattenedNodes(e){return Lt(u,e)},getNode:d,getPrev:p,getNext:m,getParent:h,getChild:g,getFirstAvailableNode(){return At(u)},getPath(e,t={}){return kt(e,t,_)},getCheckedKeys(e,t={}){let{cascade:n=!0,leafOnly:r=!1,checkStrategy:i=`all`,allowNotLoaded:a=!1}=t;return Dt({checkedKeys:_t(e),indeterminateKeys:vt(e),cascade:n,leafOnly:r,checkStrategy:i,allowNotLoaded:a},_)},check(e,t,n={}){let{cascade:r=!0,leafOnly:i=!1,checkStrategy:a=`all`,allowNotLoaded:o=!1}=n;return Dt({checkedKeys:_t(t),indeterminateKeys:vt(t),keysToCheck:e==null?[]:ot(e),cascade:r,leafOnly:i,checkStrategy:a,allowNotLoaded:o},_)},uncheck(e,t,n={}){let{cascade:r=!0,leafOnly:i=!1,checkStrategy:a=`all`,allowNotLoaded:o=!1}=n;return Dt({checkedKeys:_t(t),indeterminateKeys:vt(t),keysToUncheck:e==null?[]:ot(e),cascade:r,leafOnly:i,checkStrategy:a,allowNotLoaded:o},_)},getNonLeafKeys(e={}){return lt(u,e)}};return _}var Vt=h({name:`NBaseSelectGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:r}=c(Y);return{labelField:n,nodeProps:r,renderLabel:e,renderOption:t}},render(){let{clsPrefix:e,renderLabel:n,renderOption:r,nodeProps:i,tmNode:{rawNode:a}}=this,o=i?.(a),s=n?n(a,!1):X(a[this.labelField],a,!1),c=t(`div`,Object.assign({},o,{class:[`${e}-base-select-group-header`,o?.class]}),s);return a.render?a.render({node:c,option:a}):r?r({node:c,option:a,selected:!1}):c}});function Ht(e,n){return t(b,{name:`fade-in-scale-up-transition`},{default:()=>e?t(N,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>t(it)}):null})}var Ut=h({name:`NBaseSelectOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){let{valueRef:t,pendingTmNodeRef:n,multipleRef:r,valueSetRef:i,renderLabelRef:a,renderOptionRef:o,labelFieldRef:s,valueFieldRef:l,showCheckmarkRef:u,nodePropsRef:d,handleOptionClick:f,handleOptionMouseEnter:p}=c(Y),m=L(()=>{let{value:t}=n;return t?e.tmNode.key===t.key:!1});function h(t){let{tmNode:n}=e;n.disabled||f(t,n)}function g(t){let{tmNode:n}=e;n.disabled||p(t,n)}function _(t){let{tmNode:n}=e,{value:r}=m;n.disabled||r||p(t,n)}return{multiple:r,isGrouped:L(()=>{let{tmNode:t}=e,{parent:n}=t;return n&&n.rawNode.type===`group`}),showCheckmark:u,nodeProps:d,isPending:m,isSelected:L(()=>{let{value:n}=t,{value:a}=r;if(n===null)return!1;let o=e.tmNode.rawNode[l.value];if(a){let{value:e}=i;return e.has(o)}else return n===o}),labelField:s,renderLabel:a,renderOption:o,handleMouseMove:_,handleMouseEnter:g,handleClick:h}},render(){let{clsPrefix:e,tmNode:{rawNode:n},isSelected:r,isPending:i,isGrouped:a,showCheckmark:o,nodeProps:s,renderOption:c,renderLabel:l,handleClick:u,handleMouseEnter:d,handleMouseMove:f}=this,p=Ht(r,e),m=l?[l(n,r),o&&p]:[X(n[this.labelField],n,r),o&&p],h=s?.(n),g=t(`div`,Object.assign({},h,{class:[`${e}-base-select-option`,n.class,h?.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:r,[`${e}-base-select-option--grouped`]:a,[`${e}-base-select-option--pending`]:i,[`${e}-base-select-option--show-checkmark`]:o}],style:[h?.style||``,n.style||``],onClick:rt([u,h?.onClick]),onMouseenter:rt([d,h?.onMouseenter]),onMousemove:rt([f,h?.onMousemove])}),t(`div`,{class:`${e}-base-select-option__content`},m));return n.render?n.render({node:g,option:n,selected:r}):c?c({node:g,option:n,selected:r}):g}}),Wt=F(`base-select-menu`,`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[F(`scrollbar`,`
 max-height: var(--n-height);
 `),F(`virtual-list`,`
 max-height: var(--n-height);
 `),F(`base-select-option`,`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[C(`content`,`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),F(`base-select-group-header`,`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),F(`base-select-menu-option-wrapper`,`
 position: relative;
 width: 100%;
 `),C(`loading, empty`,`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),C(`loading`,`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),C(`header`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),C(`action`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),F(`base-select-group-header`,`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),F(`base-select-option`,`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[P(`show-checkmark`,`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),j(`&::before`,`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),j(`&:active`,`
 color: var(--n-option-text-color-pressed);
 `),P(`grouped`,`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),P(`pending`,[j(`&::before`,`
 background-color: var(--n-option-color-pending);
 `)]),P(`selected`,`
 color: var(--n-option-text-color-active);
 `,[j(`&::before`,`
 background-color: var(--n-option-color-active);
 `),P(`pending`,[j(`&::before`,`
 background-color: var(--n-option-color-active-pending);
 `)])]),P(`disabled`,`
 cursor: not-allowed;
 `,[D(`selected`,`
 color: var(--n-option-text-color-disabled);
 `),P(`selected`,`
 opacity: var(--n-option-opacity-disabled);
 `)]),C(`check`,`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[ce({enterScale:`0.5`})])])]),Gt=h({name:`InternalSelectMenu`,props:Object.assign(Object.assign({},M.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:`medium`},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function}),setup(e){let{mergedClsPrefixRef:t,mergedRtlRef:n,mergedComponentPropsRef:i}=T(e),o=R(`InternalSelectMenu`,n,t),c=M(`InternalSelectMenu`,`-internal-select-menu`,Wt,H,e,a(e,`clsPrefix`)),l=s(null),f=s(null),p=s(null),m=S(()=>e.treeMate.getFlattenedNodes()),h=S(()=>St(m.value)),g=s(null);function v(){let{treeMate:t}=e,n=null,{value:r}=e;r===null?n=t.getFirstAvailableNode():(n=e.multiple?t.getNode((r||[])[(r||[]).length-1]):t.getNode(r),(!n||n.disabled)&&(n=t.getFirstAvailableNode())),U(n||null)}function y(){let{value:t}=g;t&&!e.treeMate.getNode(t.key)&&(g.value=null)}let b;_(()=>e.show,t=>{t?b=_(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?v():y(),u(re)):y()},{immediate:!0}):b?.()},{immediate:!0}),d(()=>{b?.()});let C=S(()=>Z(c.value.self[w(`optionHeight`,e.size)])),E=S(()=>xe(c.value.self[w(`padding`,e.size)])),D=S(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),k=S(()=>{let e=m.value;return e&&e.length===0}),A=S(()=>i?.value?.Select?.renderEmpty);function j(t){let{onToggle:n}=e;n&&n(t)}function N(t){let{onScroll:n}=e;n&&n(t)}function P(e){var t;(t=p.value)==null||t.sync(),N(e)}function F(){var e;(e=p.value)==null||e.sync()}function I(){let{value:e}=g;return e||null}function L(e,t){t.disabled||U(t,!1)}function z(e,t){t.disabled||j(t)}function B(t){var n;G(t,`action`)||(n=e.onKeyup)==null||n.call(e,t)}function ee(t){var n;G(t,`action`)||(n=e.onKeydown)==null||n.call(e,t)}function V(t){var n;(n=e.onMousedown)==null||n.call(e,t),!e.focusable&&t.preventDefault()}function te(){let{value:e}=g;e&&U(e.getNext({loop:!0}),!0)}function ne(){let{value:e}=g;e&&U(e.getPrev({loop:!0}),!0)}function U(e,t=!1){g.value=e,t&&re()}function re(){var t,n;let r=g.value;if(!r)return;let i=h.value(r.key);i!==null&&(e.virtualScroll?(t=f.value)==null||t.scrollTo({index:i}):(n=p.value)==null||n.scrollTo({index:i,elSize:C.value}))}function ie(t){var n;l.value?.contains(t.target)&&((n=e.onFocus)==null||n.call(e,t))}function W(t){var n;l.value?.contains(t.relatedTarget)||(n=e.onBlur)==null||n.call(e,t)}x(Y,{handleOptionMouseEnter:L,handleOptionClick:z,valueSetRef:D,pendingTmNodeRef:g,nodePropsRef:a(e,`nodeProps`),showCheckmarkRef:a(e,`showCheckmark`),multipleRef:a(e,`multiple`),valueRef:a(e,`value`),renderLabelRef:a(e,`renderLabel`),renderOptionRef:a(e,`renderOption`),labelFieldRef:a(e,`labelField`),valueFieldRef:a(e,`valueField`)}),x(ae,l),r(()=>{let{value:e}=p;e&&e.sync()});let K=S(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{height:r,borderRadius:i,color:a,groupHeaderTextColor:o,actionDividerColor:s,optionTextColorPressed:l,optionTextColor:u,optionTextColorDisabled:d,optionTextColorActive:f,optionOpacityDisabled:p,optionCheckColor:m,actionTextColor:h,optionColorPending:g,optionColorActive:_,loadingColor:v,loadingSize:y,optionColorActivePending:b,[w(`optionFontSize`,t)]:x,[w(`optionHeight`,t)]:S,[w(`optionPadding`,t)]:C}}=c.value;return{"--n-height":r,"--n-action-divider-color":s,"--n-action-text-color":h,"--n-bezier":n,"--n-border-radius":i,"--n-color":a,"--n-option-font-size":x,"--n-group-header-text-color":o,"--n-option-check-color":m,"--n-option-color-pending":g,"--n-option-color-active":_,"--n-option-color-active-pending":b,"--n-option-height":S,"--n-option-opacity-disabled":p,"--n-option-text-color":u,"--n-option-text-color-active":f,"--n-option-text-color-disabled":d,"--n-option-text-color-pressed":l,"--n-option-padding":C,"--n-option-padding-left":xe(C,`left`),"--n-option-padding-right":xe(C,`right`),"--n-loading-color":v,"--n-loading-size":y}}),{inlineThemeDisabled:q}=e,J=q?O(`internal-select-menu`,S(()=>e.size[0]),K,e):void 0,oe={selfRef:l,next:te,prev:ne,getPendingTmNode:I};return et(l,e.onResize),Object.assign({mergedTheme:c,mergedClsPrefix:t,rtlEnabled:o,virtualListRef:f,scrollbarRef:p,itemSize:C,padding:E,flattenedNodes:m,empty:k,mergedRenderEmpty:A,virtualListContainer(){let{value:e}=f;return e?.listElRef},virtualListContent(){let{value:e}=f;return e?.itemsElRef},doScroll:N,handleFocusin:ie,handleFocusout:W,handleKeyUp:B,handleKeyDown:ee,handleMouseDown:V,handleVirtualListResize:F,handleVirtualListScroll:P,cssVars:q?void 0:K,themeClass:J?.themeClass,onRender:J?.onRender},oe)},render(){let{$slots:e,virtualScroll:n,clsPrefix:r,mergedTheme:i,themeClass:a,onRender:o}=this;return o?.(),t(`div`,{ref:`selfRef`,tabindex:this.focusable?0:-1,class:[`${r}-base-select-menu`,`${r}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${r}-base-select-menu--rtl`,a,this.multiple&&`${r}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},I(e.header,e=>e&&t(`div`,{class:`${r}-base-select-menu__header`,"data-header":!0,key:`header`},e)),this.loading?t(`div`,{class:`${r}-base-select-menu__loading`},t(Fe,{clsPrefix:r,strokeWidth:20})):this.empty?t(`div`,{class:`${r}-base-select-menu__empty`,"data-empty":!0},B(e.empty,()=>[this.mergedRenderEmpty?.call(this)||t(Re,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty,size:this.size})])):t(we,Object.assign({ref:`scrollbarRef`,theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},this.scrollbarProps),{default:()=>n?t(Ze,{ref:`virtualListRef`,class:`${r}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:e})=>e.isGroup?t(Vt,{key:e.key,clsPrefix:r,tmNode:e}):e.ignored?null:t(Ut,{clsPrefix:r,key:e.key,tmNode:e})}):t(`div`,{class:`${r}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(e=>e.isGroup?t(Vt,{key:e.key,clsPrefix:r,tmNode:e}):t(Ut,{clsPrefix:r,key:e.key,tmNode:e})))}),I(e.action,e=>e&&[t(`div`,{class:`${r}-base-select-menu__action`,"data-action":!0,key:`action`},e),t(at,{onFocus:this.onTabOut,key:`focus-detector`})]))}}),Kt={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},qt=F(`tag`,`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[P(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),C(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),C(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),C(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),C(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),P(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[C(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),C(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),P(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),P(`icon, avatar`,[P(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),P(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),P(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[D(`disabled`,[j(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[D(`checked`,`color: var(--n-text-color-hover-checkable);`)]),j(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[D(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),P(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[D(`disabled`,[j(`&:hover`,`background-color: var(--n-color-checked-hover);`),j(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),Jt=Object.assign(Object.assign(Object.assign({},M.props),Kt),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Yt=E(`n-tag`),Xt=h({name:`Tag`,props:Jt,slots:Object,setup(e){let t=s(null),{mergedBorderedRef:n,mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:o,mergedComponentPropsRef:c}=T(e),l=S(()=>e.size||c?.value?.Tag?.size||`medium`),u=M(`Tag`,`-tag`,qt,ge,e,r);x(Yt,{roundRef:a(e,`round`)});function d(){if(!e.disabled&&e.checkable){let{checked:t,onCheckedChange:n,onUpdateChecked:r,"onUpdate:checked":i}=e;r&&r(!t),i&&i(!t),n&&n(!t)}}function f(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){let{onClose:n}=e;n&&z(n,t)}}let p={setTextContent(e){let{value:n}=t;n&&(n.textContent=e)}},m=R(`Tag`,o,r),h=S(()=>{let{type:t,color:{color:r,textColor:i}={}}=e,a=l.value,{common:{cubicBezierEaseInOut:o},self:{padding:s,closeMargin:c,borderRadius:d,opacityDisabled:f,textColorCheckable:p,textColorHoverCheckable:m,textColorPressedCheckable:h,textColorChecked:g,colorCheckable:_,colorHoverCheckable:v,colorPressedCheckable:y,colorChecked:b,colorCheckedHover:x,colorCheckedPressed:S,closeBorderRadius:C,fontWeightStrong:T,[w(`colorBordered`,t)]:E,[w(`closeSize`,a)]:D,[w(`closeIconSize`,a)]:O,[w(`fontSize`,a)]:k,[w(`height`,a)]:A,[w(`color`,t)]:j,[w(`textColor`,t)]:M,[w(`border`,t)]:N,[w(`closeIconColor`,t)]:P,[w(`closeIconColorHover`,t)]:F,[w(`closeIconColorPressed`,t)]:I,[w(`closeColorHover`,t)]:L,[w(`closeColorPressed`,t)]:R}}=u.value,z=xe(c);return{"--n-font-weight-strong":T,"--n-avatar-size-override":`calc(${A} - 8px)`,"--n-bezier":o,"--n-border-radius":d,"--n-border":N,"--n-close-icon-size":O,"--n-close-color-pressed":R,"--n-close-color-hover":L,"--n-close-border-radius":C,"--n-close-icon-color":P,"--n-close-icon-color-hover":F,"--n-close-icon-color-pressed":I,"--n-close-icon-color-disabled":P,"--n-close-margin-top":z.top,"--n-close-margin-right":z.right,"--n-close-margin-bottom":z.bottom,"--n-close-margin-left":z.left,"--n-close-size":D,"--n-color":r||(n.value?E:j),"--n-color-checkable":_,"--n-color-checked":b,"--n-color-checked-hover":x,"--n-color-checked-pressed":S,"--n-color-hover-checkable":v,"--n-color-pressed-checkable":y,"--n-font-size":k,"--n-height":A,"--n-opacity-disabled":f,"--n-padding":s,"--n-text-color":i||M,"--n-text-color-checkable":p,"--n-text-color-checked":g,"--n-text-color-hover-checkable":m,"--n-text-color-pressed-checkable":h}}),g=i?O(`tag`,S(()=>{let t=``,{type:r,color:{color:i,textColor:a}={}}=e;return t+=r[0],t+=l.value[0],i&&(t+=`a${Pe(i)}`),a&&(t+=`b${Pe(a)}`),n.value&&(t+=`c`),t}),h,e):void 0;return Object.assign(Object.assign({},p),{rtlEnabled:m,mergedClsPrefix:r,contentRef:t,mergedBordered:n,handleClick:d,handleCloseClick:f,cssVars:i?void 0:h,themeClass:g?.themeClass,onRender:g?.onRender})},render(){var e;let{mergedClsPrefix:n,rtlEnabled:r,closable:i,color:{borderColor:a}={},round:o,onRender:s,$slots:c}=this;s?.();let l=I(c.avatar,e=>e&&t(`div`,{class:`${n}-tag__avatar`},e)),u=I(c.icon,e=>e&&t(`div`,{class:`${n}-tag__icon`},e));return t(`div`,{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:r,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:o,[`${n}-tag--avatar`]:l,[`${n}-tag--icon`]:u,[`${n}-tag--closable`]:i}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||l,t(`span`,{class:`${n}-tag__content`,ref:`contentRef`},(e=this.$slots).default?.call(e)),!this.checkable&&i?t(ee,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:o,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?t(`div`,{class:`${n}-tag__border`,style:{borderColor:a}}):null)}}),Zt=j([F(`base-selection`,`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[F(`base-loading`,`
 color: var(--n-loading-color);
 `),F(`base-selection-tags`,`min-height: var(--n-height);`),C(`border, state-border`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),C(`state-border`,`
 z-index: 1;
 border-color: #0000;
 `),F(`base-suffix`,`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[C(`arrow`,`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),F(`base-selection-overlay`,`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[C(`wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),F(`base-selection-placeholder`,`
 color: var(--n-placeholder-color);
 `,[C(`inner`,`
 max-width: 100%;
 overflow: hidden;
 `)]),F(`base-selection-tags`,`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),F(`base-selection-label`,`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[F(`base-selection-input`,`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[C(`content`,`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),C(`render-label`,`
 color: var(--n-text-color);
 `)]),D(`disabled`,[j(`&:hover`,[C(`state-border`,`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),P(`focus`,[C(`state-border`,`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),P(`active`,[C(`state-border`,`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),F(`base-selection-label`,`background-color: var(--n-color-active);`),F(`base-selection-tags`,`background-color: var(--n-color-active);`)])]),P(`disabled`,`cursor: not-allowed;`,[C(`arrow`,`
 color: var(--n-arrow-color-disabled);
 `),F(`base-selection-label`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[F(`base-selection-input`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),C(`render-label`,`
 color: var(--n-text-color-disabled);
 `)]),F(`base-selection-tags`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),F(`base-selection-placeholder`,`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),F(`base-selection-input-tag`,`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[C(`input`,`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),C(`mirror`,`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),[`warning`,`error`].map(e=>P(`${e}-status`,[C(`state-border`,`border: var(--n-border-${e});`),D(`disabled`,[j(`&:hover`,[C(`state-border`,`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),P(`active`,[C(`state-border`,`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),F(`base-selection-label`,`background-color: var(--n-color-active-${e});`),F(`base-selection-tags`,`background-color: var(--n-color-active-${e});`)]),P(`focus`,[C(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),F(`base-selection-popover`,`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),F(`base-selection-tag-wrapper`,`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[j(`&:last-child`,`padding-right: 0;`),F(`tag`,`
 font-size: 14px;
 max-width: 100%;
 `,[C(`content`,`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Qt=h({name:`InternalSelection`,props:Object.assign(Object.assign({},M.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:``},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:`medium`},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){let{mergedClsPrefixRef:t,mergedRtlRef:n}=T(e),i=R(`InternalSelection`,n,t),o=s(null),c=s(null),l=s(null),d=s(null),f=s(null),m=s(null),h=s(null),g=s(null),v=s(null),y=s(null),b=s(!1),x=s(!1),C=s(!1),E=M(`InternalSelection`,`-internal-selection`,Zt,V,e,a(e,`clsPrefix`)),D=S(()=>e.clearable&&!e.disabled&&(C.value||e.active)),k=S(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):X(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),A=S(()=>{let t=e.selectedOption;if(t)return t[e.labelField]}),j=S(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function N(){var t;let{value:n}=o;if(n){let{value:r}=c;r&&(r.style.width=`${n.offsetWidth}px`,e.maxTagCount!==`responsive`&&((t=v.value)==null||t.sync({showAllItemsBeforeCalculate:!1})))}}function P(){let{value:e}=y;e&&(e.style.display=`none`)}function F(){let{value:e}=y;e&&(e.style.display=`inline-block`)}_(a(e,`active`),e=>{e||P()}),_(a(e,`pattern`),()=>{e.multiple&&u(N)});function I(t){let{onFocus:n}=e;n&&n(t)}function L(t){let{onBlur:n}=e;n&&n(t)}function z(t){let{onDeleteOption:n}=e;n&&n(t)}function B(t){let{onClear:n}=e;n&&n(t)}function ee(t){let{onPatternInput:n}=e;n&&n(t)}function te(e){(!e.relatedTarget||!l.value?.contains(e.relatedTarget))&&I(e)}function H(e){l.value?.contains(e.relatedTarget)||L(e)}function ne(e){B(e)}function U(){C.value=!0}function re(){C.value=!1}function ie(t){!e.active||!e.filterable||t.target!==c.value&&t.preventDefault()}function W(e){z(e)}let G=s(!1);function K(t){if(t.key===`Backspace`&&!G.value&&!e.pattern.length){let{selectedOptions:t}=e;t?.length&&W(t[t.length-1])}}let q=null;function J(t){let{value:n}=o;n&&(n.textContent=t.target.value,N()),e.ignoreComposition&&G.value?q=t:ee(t)}function ae(){G.value=!0}function Y(){G.value=!1,e.ignoreComposition&&ee(q),q=null}function oe(t){var n;x.value=!0,(n=e.onPatternFocus)==null||n.call(e,t)}function se(t){var n;x.value=!1,(n=e.onPatternBlur)==null||n.call(e,t)}function ce(){var t,n;if(e.filterable)x.value=!1,(t=m.value)==null||t.blur(),(n=c.value)==null||n.blur();else if(e.multiple){let{value:e}=d;e?.blur()}else{let{value:e}=f;e?.blur()}}function le(){var t,n,r;e.filterable?(x.value=!1,(t=m.value)==null||t.focus()):e.multiple?(n=d.value)==null||n.focus():(r=f.value)==null||r.focus()}function ue(){let{value:e}=c;e&&(F(),e.focus())}function de(){let{value:e}=c;e&&e.blur()}function fe(e){let{value:t}=h;t&&t.setTextContent(`+${e}`)}function pe(){let{value:e}=g;return e}function me(){return c.value}let he=null;function ge(){he!==null&&window.clearTimeout(he)}function _e(){e.active||(ge(),he=window.setTimeout(()=>{j.value&&(b.value=!0)},100))}function ve(){ge()}function ye(e){e||(ge(),b.value=!1)}_(j,e=>{e||(b.value=!1)}),r(()=>{p(()=>{let t=m.value;t&&(e.disabled?t.removeAttribute(`tabindex`):t.tabIndex=x.value?-1:0)})}),et(l,e.onResize);let{inlineThemeDisabled:Z}=e,Q=S(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontWeight:r,borderRadius:i,color:a,placeholderColor:o,textColor:s,paddingSingle:c,paddingMultiple:l,caretColor:u,colorDisabled:d,textColorDisabled:f,placeholderColorDisabled:p,colorActive:m,boxShadowFocus:h,boxShadowActive:g,boxShadowHover:_,border:v,borderFocus:y,borderHover:b,borderActive:x,arrowColor:S,arrowColorDisabled:C,loadingColor:T,colorActiveWarning:D,boxShadowFocusWarning:O,boxShadowActiveWarning:k,boxShadowHoverWarning:A,borderWarning:j,borderFocusWarning:M,borderHoverWarning:N,borderActiveWarning:P,colorActiveError:F,boxShadowFocusError:I,boxShadowActiveError:L,boxShadowHoverError:R,borderError:z,borderFocusError:B,borderHoverError:ee,borderActiveError:V,clearColor:te,clearColorHover:H,clearColorPressed:ne,clearSize:U,arrowSize:re,[w(`height`,t)]:ie,[w(`fontSize`,t)]:W}}=E.value,G=xe(c),K=xe(l);return{"--n-bezier":n,"--n-border":v,"--n-border-active":x,"--n-border-focus":y,"--n-border-hover":b,"--n-border-radius":i,"--n-box-shadow-active":g,"--n-box-shadow-focus":h,"--n-box-shadow-hover":_,"--n-caret-color":u,"--n-color":a,"--n-color-active":m,"--n-color-disabled":d,"--n-font-size":W,"--n-height":ie,"--n-padding-single-top":G.top,"--n-padding-multiple-top":K.top,"--n-padding-single-right":G.right,"--n-padding-multiple-right":K.right,"--n-padding-single-left":G.left,"--n-padding-multiple-left":K.left,"--n-padding-single-bottom":G.bottom,"--n-padding-multiple-bottom":K.bottom,"--n-placeholder-color":o,"--n-placeholder-color-disabled":p,"--n-text-color":s,"--n-text-color-disabled":f,"--n-arrow-color":S,"--n-arrow-color-disabled":C,"--n-loading-color":T,"--n-color-active-warning":D,"--n-box-shadow-focus-warning":O,"--n-box-shadow-active-warning":k,"--n-box-shadow-hover-warning":A,"--n-border-warning":j,"--n-border-focus-warning":M,"--n-border-hover-warning":N,"--n-border-active-warning":P,"--n-color-active-error":F,"--n-box-shadow-focus-error":I,"--n-box-shadow-active-error":L,"--n-box-shadow-hover-error":R,"--n-border-error":z,"--n-border-focus-error":B,"--n-border-hover-error":ee,"--n-border-active-error":V,"--n-clear-size":U,"--n-clear-color":te,"--n-clear-color-hover":H,"--n-clear-color-pressed":ne,"--n-arrow-size":re,"--n-font-weight":r}}),be=Z?O(`internal-selection`,S(()=>e.size[0]),Q,e):void 0;return{mergedTheme:E,mergedClearable:D,mergedClsPrefix:t,rtlEnabled:i,patternInputFocused:x,filterablePlaceholder:k,label:A,selected:j,showTagsPanel:b,isComposing:G,counterRef:h,counterWrapperRef:g,patternInputMirrorRef:o,patternInputRef:c,selfRef:l,multipleElRef:d,singleElRef:f,patternInputWrapperRef:m,overflowRef:v,inputTagElRef:y,handleMouseDown:ie,handleFocusin:te,handleClear:ne,handleMouseEnter:U,handleMouseLeave:re,handleDeleteOption:W,handlePatternKeyDown:K,handlePatternInputInput:J,handlePatternInputBlur:se,handlePatternInputFocus:oe,handleMouseEnterCounter:_e,handleMouseLeaveCounter:ve,handleFocusout:H,handleCompositionEnd:Y,handleCompositionStart:ae,onPopoverUpdateShow:ye,focus:le,focusInput:ue,blur:ce,blurInput:de,updateCounter:fe,getCounter:pe,getTail:me,renderLabel:e.renderLabel,cssVars:Z?void 0:Q,themeClass:be?.themeClass,onRender:be?.onRender}},render(){let{status:e,multiple:n,size:r,disabled:i,filterable:a,maxTagCount:o,bordered:s,clsPrefix:c,ellipsisTagPopoverProps:l,onRender:u,renderTag:d,renderLabel:f}=this;u?.();let p=o===`responsive`,m=typeof o==`number`,h=p||m,g=t(De,null,{default:()=>t(je,{clsPrefix:c,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var e;return(e=this.$slots).arrow?.call(e)}})}),_;if(n){let{labelField:e}=this,n=n=>t(`div`,{class:`${c}-base-selection-tag-wrapper`,key:n.value},d?d({option:n,handleClose:()=>{this.handleDeleteOption(n)}}):t(Xt,{size:r,closable:!n.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(n)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>f?f(n,!0):X(n[e],n,!0)})),s=()=>(m?this.selectedOptions.slice(0,o):this.selectedOptions).map(n),u=a?t(`div`,{class:`${c}-base-selection-input-tag`,ref:`inputTagElRef`,key:`__input-tag__`},t(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${c}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),t(`span`,{ref:`patternInputMirrorRef`,class:`${c}-base-selection-input-tag__mirror`},this.pattern)):null,y=p?()=>t(`div`,{class:`${c}-base-selection-tag-wrapper`,ref:`counterWrapperRef`},t(Xt,{size:r,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0,b;if(m){let e=this.selectedOptions.length-o;e>0&&(b=t(`div`,{class:`${c}-base-selection-tag-wrapper`,key:`__counter__`},t(Xt,{size:r,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${e}`})))}let x=p?a?t($e,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:s,counter:y,tail:()=>u}):t($e,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:s,counter:y}):m&&b?s().concat(b):s(),S=h?()=>t(`div`,{class:`${c}-base-selection-popover`},p?s():this.selectedOptions.map(n)):void 0,C=h?Object.assign({show:this.showTagsPanel,trigger:`hover`,overlap:!0,placement:`top`,width:`trigger`,onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},l):null,w=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?t(`div`,{class:`${c}-base-selection-placeholder ${c}-base-selection-overlay`},t(`div`,{class:`${c}-base-selection-placeholder__inner`},this.placeholder)):null,T=a?t(`div`,{ref:`patternInputWrapperRef`,class:`${c}-base-selection-tags`},x,p?null:u,g):t(`div`,{ref:`multipleElRef`,class:`${c}-base-selection-tags`,tabindex:i?void 0:0},x,g);_=t(v,null,h?t(pe,Object.assign({},C,{scrollable:!0,style:`max-height: calc(var(--v-target-height) * 6.6);`}),{trigger:()=>T,default:S}):T,w)}else if(a){let e=this.pattern||this.isComposing,n=this.active?!e:!this.selected,r=this.active?!1:this.selected;_=t(`div`,{ref:`patternInputWrapperRef`,class:`${c}-base-selection-label`,title:this.patternInputFocused?void 0:tt(this.label)},t(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,class:`${c}-base-selection-input`,value:this.active?this.pattern:``,placeholder:``,readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r?t(`div`,{class:`${c}-base-selection-label__render-label ${c}-base-selection-overlay`,key:`input`},t(`div`,{class:`${c}-base-selection-overlay__wrapper`},d?d({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):X(this.label,this.selectedOption,!0))):null,n?t(`div`,{class:`${c}-base-selection-placeholder ${c}-base-selection-overlay`,key:`placeholder`},t(`div`,{class:`${c}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,g)}else _=t(`div`,{ref:`singleElRef`,class:`${c}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label===void 0?t(`div`,{class:`${c}-base-selection-placeholder ${c}-base-selection-overlay`,key:`placeholder`},t(`div`,{class:`${c}-base-selection-placeholder__inner`},this.placeholder)):t(`div`,{class:`${c}-base-selection-input`,title:tt(this.label),key:`input`},t(`div`,{class:`${c}-base-selection-input__content`},d?d({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):X(this.label,this.selectedOption,!0))),g);return t(`div`,{ref:`selfRef`,class:[`${c}-base-selection`,this.rtlEnabled&&`${c}-base-selection--rtl`,this.themeClass,e&&`${c}-base-selection--${e}-status`,{[`${c}-base-selection--active`]:this.active,[`${c}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${c}-base-selection--disabled`]:this.disabled,[`${c}-base-selection--multiple`]:this.multiple,[`${c}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},_,s?t(`div`,{class:`${c}-base-selection__border`}):null,s?t(`div`,{class:`${c}-base-selection__state-border`}):null)}});function $t(e){return e.type===`group`}function en(e){return e.type===`ignored`}function tn(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function nn(e,t){return{getIsGroup:$t,getIgnored:en,getKey(t){return $t(t)?t.name||t.key||`key-required`:t[e]},getChildren(e){return e[t]}}}function rn(e,t,n,r){if(!t)return e;function i(e){if(!Array.isArray(e))return[];let a=[];for(let o of e)if($t(o)){let e=i(o[r]);e.length&&a.push(Object.assign({},o,{[r]:e}))}else if(en(o))continue;else t(n,o)&&a.push(o);return a}return i(e)}function an(e,t,n){let r=new Map;return e.forEach(e=>{$t(e)?e[n].forEach(e=>{r.set(e[t],e)}):r.set(e[t],e)}),r}var on=j([F(`select`,`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),F(`select-menu`,`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[ce({originalTransition:`background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)`})])]),sn=h({name:`Select`,props:Object.assign(Object.assign({},M.props),{to:fe.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:`bottom-start`},widthMode:{type:String,default:`trigger`},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},childrenField:{type:String,default:`children`},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:`show`},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array}),slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:o}=T(e),c=M(`Select`,`-select`,on,re,e,t),l=s(e.defaultValue),u=Me(a(e,`value`),l),d=s(!1),f=s(``),p=Ae(e,[`items`,`options`]),m=s([]),h=s([]),g=S(()=>h.value.concat(m.value).concat(p.value)),v=S(()=>{let{filter:t}=e;if(t)return t;let{labelField:n,valueField:r}=e;return(e,t)=>{if(!t)return!1;let i=t[n];if(typeof i==`string`)return tn(e,i);let a=t[r];return typeof a==`string`?tn(e,a):typeof a==`number`?tn(e,String(a)):!1}}),y=S(()=>{if(e.remote)return p.value;{let{value:t}=g,{value:n}=f;return!n.length||!e.filterable?t:rn(t,v.value,n,e.childrenField)}}),b=S(()=>{let{valueField:t,childrenField:n}=e,r=nn(t,n);return Bt(y.value,r)}),x=S(()=>an(g.value,e.valueField,e.childrenField)),C=s(!1),w=Me(a(e,`show`),C),E=s(null),D=s(null),k=s(null),{localeRef:A}=Le(`Select`),j=S(()=>e.placeholder??A.value.placeholder),N=[],P=s(new Map),F=S(()=>{let{fallbackOption:t}=e;if(t===void 0){let{labelField:t,valueField:n}=e;return e=>({[t]:String(e),[n]:e})}return t===!1?!1:e=>Object.assign(t(e),{value:e})});function I(t){let n=e.remote,{value:r}=P,{value:i}=x,{value:a}=F,o=[];return t.forEach(e=>{if(i.has(e))o.push(i.get(e));else if(n&&r.has(e))o.push(r.get(e));else if(a){let t=a(e);t&&o.push(t)}}),o}let L=S(()=>{if(e.multiple){let{value:e}=u;return Array.isArray(e)?I(e):[]}return null}),R=S(()=>{let{value:t}=u;return!e.multiple&&!Array.isArray(t)?t===null?null:I([t])[0]||null:null}),B=Ne(e,{mergedSize:t=>{let{size:n}=e;if(n)return n;let{mergedSize:r}=t||{};return r?.value?r.value:o?.value?.Select?.size||`medium`}}),{mergedSizeRef:ee,mergedDisabledRef:V,mergedStatusRef:te}=B;function H(t,n){let{onChange:r,"onUpdate:value":i,onUpdateValue:a}=e,{nTriggerFormChange:o,nTriggerFormInput:s}=B;r&&z(r,t,n),a&&z(a,t,n),i&&z(i,t,n),l.value=t,o(),s()}function ne(t){let{onBlur:n}=e,{nTriggerFormBlur:r}=B;n&&z(n,t),r()}function U(){let{onClear:t}=e;t&&z(t)}function ie(t){let{onFocus:n,showOnFocus:r}=e,{nTriggerFormFocus:i}=B;n&&z(n,t),i(),r&&ae()}function W(t){let{onSearch:n}=e;n&&z(n,t)}function K(t){let{onScroll:n}=e;n&&z(n,t)}function q(){var t;let{remote:n,multiple:r}=e;if(n){let{value:n}=P;if(r){let{valueField:r}=e;(t=L.value)==null||t.forEach(e=>{n.set(e[r],e)})}else{let t=R.value;t&&n.set(t[e.valueField],t)}}}function J(t){let{onUpdateShow:n,"onUpdate:show":r}=e;n&&z(n,t),r&&z(r,t),C.value=t}function ae(){V.value||(J(!0),C.value=!0,e.filterable&&De())}function Y(){J(!1)}function oe(){f.value=``,h.value=N}let se=s(!1);function ce(){e.filterable&&(se.value=!0)}function le(){e.filterable&&(se.value=!1,w.value||oe())}function ue(){V.value||(w.value?e.filterable?De():Y():ae())}function de(e){(k.value?.selfRef)?.contains(e.relatedTarget)||(d.value=!1,ne(e),Y())}function X(e){ie(e),d.value=!0}function pe(){d.value=!0}function me(e){E.value?.$el.contains(e.relatedTarget)||(d.value=!1,ne(e),Y())}function he(){var e;(e=E.value)==null||e.focus(),Y()}function ge(e){w.value&&(E.value?.$el.contains(be(e))||Y())}function _e(t){if(!Array.isArray(t))return[];if(F.value)return Array.from(t);{let{remote:n}=e,{value:r}=x;if(n){let{value:e}=P;return t.filter(t=>r.has(t)||e.has(t))}else return t.filter(e=>r.has(e))}}function ve(e){Z(e.rawNode)}function Z(t){if(V.value)return;let{tag:n,remote:r,clearFilterAfterSelect:i,valueField:a}=e;if(n&&!r){let{value:e}=h,t=e[0]||null;if(t){let e=m.value;e.length?e.push(t):m.value=[t],h.value=N}}if(r&&P.value.set(t[a],t),e.multiple){let e=_e(u.value),o=e.findIndex(e=>e===t[a]);if(~o){if(e.splice(o,1),n&&!r){let e=Q(t[a]);~e&&(m.value.splice(e,1),i&&(f.value=``))}}else e.push(t[a]),i&&(f.value=``);H(e,I(e))}else{if(n&&!r){let e=Q(t[a]);~e?m.value=[m.value[e]]:m.value=N}Ee(),Y(),H(t[a],t)}}function Q(t){return m.value.findIndex(n=>n[e.valueField]===t)}function xe(t){w.value||ae();let{value:n}=t.target;f.value=n;let{tag:r,remote:i}=e;if(W(n),r&&!i){if(!n){h.value=N;return}let{onCreate:t}=e,r=t?t(n):{[e.labelField]:n,[e.valueField]:n},{valueField:i,labelField:a}=e;p.value.some(e=>e[i]===r[i]||e[a]===r[a])||m.value.some(e=>e[i]===r[i]||e[a]===r[a])?h.value=N:h.value=[r]}}function Se(t){t.stopPropagation();let{multiple:n,tag:r,remote:i,clearCreatedOptionsOnClear:a}=e;!n&&e.filterable&&Y(),r&&!i&&a&&(m.value=N),U(),n?H([],[]):H(null,null)}function Ce(e){!G(e,`action`)&&!G(e,`empty`)&&!G(e,`header`)&&e.preventDefault()}function we(e){K(e)}function Te(t){var n,r,i;if(!e.keyboard){t.preventDefault();return}switch(t.key){case` `:if(e.filterable)break;t.preventDefault();case`Enter`:if(!E.value?.isComposing){if(w.value){let t=k.value?.getPendingTmNode();t?ve(t):e.filterable||(Y(),Ee())}else if(ae(),e.tag&&se.value){let t=h.value[0];if(t){let n=t[e.valueField],{value:r}=u;e.multiple&&Array.isArray(r)&&r.includes(n)||Z(t)}}}t.preventDefault();break;case`ArrowUp`:if(t.preventDefault(),e.loading)return;w.value&&((n=k.value)==null||n.prev());break;case`ArrowDown`:if(t.preventDefault(),e.loading)return;w.value?(r=k.value)==null||r.next():ae();break;case`Escape`:w.value&&(ye(t),Y()),(i=E.value)==null||i.focus();break}}function Ee(){var e;(e=E.value)==null||e.focus()}function De(){var e;(e=E.value)==null||e.focusInput()}function Oe(){var e;w.value&&((e=D.value)==null||e.syncPosition())}q(),_(a(e,`options`),q);let ke={focus:()=>{var e;(e=E.value)==null||e.focus()},focusInput:()=>{var e;(e=E.value)==null||e.focusInput()},blur:()=>{var e;(e=E.value)==null||e.blur()},blurInput:()=>{var e;(e=E.value)==null||e.blurInput()}},je=S(()=>{let{self:{menuBoxShadow:e}}=c.value;return{"--n-menu-box-shadow":e}}),Pe=i?O(`select`,void 0,je,e):void 0;return Object.assign(Object.assign({},ke),{mergedStatus:te,mergedClsPrefix:t,mergedBordered:n,namespace:r,treeMate:b,isMounted:Ie(),triggerRef:E,menuRef:k,pattern:f,uncontrolledShow:C,mergedShow:w,adjustedTo:fe(e),uncontrolledValue:l,mergedValue:u,followerRef:D,localizedPlaceholder:j,selectedOption:R,selectedOptions:L,mergedSize:ee,mergedDisabled:V,focused:d,activeWithoutMenuOpen:se,inlineThemeDisabled:i,onTriggerInputFocus:ce,onTriggerInputBlur:le,handleTriggerOrMenuResize:Oe,handleMenuFocus:pe,handleMenuBlur:me,handleMenuTabOut:he,handleTriggerClick:ue,handleToggle:ve,handleDeleteOption:Z,handlePatternInput:xe,handleClear:Se,handleTriggerBlur:de,handleTriggerFocus:X,handleKeydown:Te,handleMenuAfterLeave:oe,handleMenuClickOutside:ge,handleMenuScroll:we,handleMenuKeydown:Te,handleMenuMousedown:Ce,mergedTheme:c,cssVars:i?void 0:je,themeClass:Pe?.themeClass,onRender:Pe?.onRender})},render(){return t(`div`,{class:`${this.mergedClsPrefix}-select`},t(oe,null,{default:()=>[t(q,null,{default:()=>t(Qt,{ref:`triggerRef`,inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e;return[(e=this.$slots).arrow?.call(e)]}})}),t(ve,{ref:`followerRef`,show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===fe.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?`target`:void 0,minWidth:`target`,placement:this.placement},{default:()=>t(b,{name:`fade-in-scale-up-transition`,appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e;return this.mergedShow||this.displayDirective===`show`?((e=this.onRender)==null||e.call(this),f(t(Gt,Object.assign({},this.menuProps,{ref:`menuRef`,onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,this.menuProps?.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[this.menuProps?.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{empty:()=>{var e;return[(e=this.$slots).empty?.call(e)]},header:()=>{var e;return[(e=this.$slots).header?.call(e)]},action:()=>{var e;return[(e=this.$slots).action?.call(e)]}}),this.displayDirective===`show`?[[y,this.mergedShow],[J,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[J,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),cn=h({name:`Tooltip`,props:Object.assign(Object.assign({},he),M.props),slots:Object,__popover__:!0,setup(e){let{mergedClsPrefixRef:t}=T(e),n=M(`Tooltip`,`-tooltip`,void 0,ie,e,t),r=s(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(e){r.value.setShow(e)}}),{popoverRef:r,mergedTheme:n,popoverThemeOverrides:S(()=>n.value.self)})},render(){let{mergedTheme:e,internalExtraClass:n}=this;return t(pe,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:n.concat(`tooltip`),ref:`popoverRef`}),this.$slots)}}),ln=E(`n-dropdown-menu`),un=E(`n-dropdown`),dn=E(`n-dropdown-option`),fn=h({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return t(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),pn=h({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=c(ln),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=c(un);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:n,showIcon:r,nodeProps:i,renderLabel:a,renderOption:o}=this,{rawNode:s}=this.tmNode,c=t(`div`,Object.assign({class:`${e}-dropdown-option`},i?.(s)),t(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},t(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,r&&`${e}-dropdown-option-body__prefix--show-icon`]},X(s.icon)),t(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},a?a(s):X(s.title??s[this.labelField])),t(`div`,{class:[`${e}-dropdown-option-body__suffix`,n&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return o?o({node:c,option:s}):c}});function mn(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function hn(e){return e.type===`group`}function gn(e){return e.type===`divider`}function _n(e){return e.type===`render`}var vn=h({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=c(un),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:a,activeKeyPathRef:o,animatedRef:l,mergedShowRef:u,renderLabelRef:d,renderIconRef:f,labelFieldRef:p,childrenFieldRef:m,renderOptionRef:h,nodePropsRef:g,menuPropsRef:_}=t,v=c(dn,null),y=c(ln),b=c(W),C=S(()=>e.tmNode.rawNode),w=S(()=>{let{value:t}=m;return mn(e.tmNode.rawNode,t)}),T=S(()=>{let{disabled:t}=e.tmNode;return t}),E=Be(S(()=>{if(!w.value)return!1;let{key:t,disabled:o}=e.tmNode;if(o)return!1;let{value:s}=n,{value:c}=r,{value:l}=i,{value:u}=a;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,S(()=>r.value===null&&!l.value)),D=S(()=>!!v?.enteringSubmenuRef.value),O=s(!1);x(dn,{enteringSubmenuRef:O});function k(){O.value=!0}function A(){O.value=!1}function j(){let{parentKey:t,tmNode:a}=e;a.disabled||u.value&&(i.value=t,r.value=null,n.value=a.key)}function M(){let{tmNode:t}=e;t.disabled||u.value&&n.value!==t.key&&j()}function N(t){if(e.tmNode.disabled||!u.value)return;let{relatedTarget:r}=t;r&&!G({target:r},`dropdownOption`)&&!G({target:r},`scrollbarRail`)&&(n.value=null)}function P(){let{value:n}=w,{tmNode:r}=e;u.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:p,renderLabel:d,renderIcon:f,siblingHasIcon:y.showIconRef,siblingHasSubmenu:y.hasSubmenuRef,menuProps:_,popoverBody:b,animated:l,mergedShowSubmenu:S(()=>E.value&&!D.value),rawNode:C,hasSubmenu:w,pending:L(()=>{let{value:t}=a,{key:n}=e.tmNode;return t.includes(n)}),childActive:L(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:L(()=>{let{value:t}=o,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:T,renderOption:h,nodeProps:g,handleClick:P,handleMouseMove:M,handleMouseEnter:j,handleMouseLeave:N,handleSubmenuBeforeEnter:k,handleSubmenuAfterEnter:A}},render(){let{animated:n,rawNode:r,mergedShowSubmenu:i,clsPrefix:a,siblingHasIcon:o,siblingHasSubmenu:s,renderLabel:c,renderIcon:l,renderOption:u,nodeProps:d,props:f,scrollable:p}=this,m=null;if(i){let e=this.menuProps?.call(this,r,r.children);m=t(xn,Object.assign({},e,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let h={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},g=d?.(r),_=t(`div`,Object.assign({class:[`${a}-dropdown-option`,g?.class],"data-dropdown-option":!0},g),t(`div`,e(h,f),[t(`div`,{class:[`${a}-dropdown-option-body__prefix`,o&&`${a}-dropdown-option-body__prefix--show-icon`]},[l?l(r):X(r.icon)]),t(`div`,{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},c?c(r):X(r[this.labelField]??r.title)),t(`div`,{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,s&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?t(Oe,null,{default:()=>t(me,null)}):null)]),this.hasSubmenu?t(oe,null,{default:()=>[t(q,null,{default:()=>t(`div`,{class:`${a}-dropdown-offset-container`},t(ve,{show:this.mergedShowSubmenu,placement:this.placement,to:p&&this.popoverBody||void 0,teleportDisabled:!p},{default:()=>t(`div`,{class:`${a}-dropdown-menu-wrapper`},n?t(b,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>m}):m)}))})]}):null);return u?u({node:_,option:r}):_}}),yn=h({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:n,clsPrefix:r}=this,{children:i}=e;return t(v,null,t(pn,{clsPrefix:r,tmNode:e,key:e.key}),i?.map(e=>{let{rawNode:i}=e;return i.show===!1?null:gn(i)?t(fn,{clsPrefix:r,key:e.key}):e.isGroup?(k(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):t(vn,{clsPrefix:r,tmNode:e,parentKey:n,key:e.key})}))}}),bn=h({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:n}}=this.tmNode;return t(`div`,n,[e?.()])}}),xn=h({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:n}=c(un);x(ln,{showIconRef:S(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:S(()=>{let{value:t}=n;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>mn(e,t));let{rawNode:n}=e;return mn(n,t)})})});let r=s(null);return x(de,null),x(se,null),x(W,r),{bodyRef:r}},render(){let{parentKey:e,clsPrefix:n,scrollable:r}=this,i=this.tmNodes.map(i=>{let{rawNode:a}=i;return a.show===!1?null:_n(a)?t(bn,{tmNode:i,key:i.key}):gn(a)?t(fn,{clsPrefix:n,key:i.key}):hn(a)?t(yn,{clsPrefix:n,tmNode:i,parentKey:e,key:i.key}):t(vn,{clsPrefix:n,tmNode:i,parentKey:e,key:i.key,props:a.props,scrollable:r})});return t(`div`,{class:[`${n}-dropdown-menu`,r&&`${n}-dropdown-menu--scrollable`],ref:`bodyRef`},r?t(Ee,{contentClass:`${n}-dropdown-menu__content`},{default:()=>i}):i,this.showArrow?ue({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Sn=F(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[ce(),F(`dropdown-option`,`
 position: relative;
 `,[j(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[j(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),F(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[j(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),D(`disabled`,[P(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[C(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),j(`&::before`,`background-color: var(--n-option-color-hover);`)]),P(`active`,`
 color: var(--n-option-text-color-active);
 `,[C(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),j(`&::before`,`background-color: var(--n-option-color-active);`)]),P(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[C(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),P(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),P(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[C(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[P(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),C(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[P(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),F(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),C(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),C(`suffix`,`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[P(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),F(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),F(`dropdown-menu`,`pointer-events: all;`)]),F(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),F(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),F(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),j(`>`,[F(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),D(`scrollable`,`
 padding: var(--n-padding);
 `),P(`scrollable`,[C(`content`,`
 padding: var(--n-padding);
 `)])]),Cn={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},wn=Object.keys(he),Tn=h({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},he),Cn),M.props),setup(e){let t=s(!1),n=Me(a(e,`show`),t),r=S(()=>{let{keyField:t,childrenField:n}=e;return Bt(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),i=S(()=>r.value.treeNodes),o=s(null),c=s(null),l=s(null),u=S(()=>o.value??c.value??l.value??null),d=S(()=>r.value.getPath(u.value).keyPath),f=S(()=>r.value.getPath(e.value).keyPath),p=L(()=>e.keyboard&&n.value);ze({keydown:{ArrowUp:{prevent:!0,handler:j},ArrowRight:{prevent:!0,handler:A},ArrowDown:{prevent:!0,handler:N},ArrowLeft:{prevent:!0,handler:k},Enter:{prevent:!0,handler:P},Escape:D}},p);let{mergedClsPrefixRef:m,inlineThemeDisabled:h,mergedComponentPropsRef:g}=T(e),v=S(()=>e.size||g?.value?.Dropdown?.size||`medium`),y=M(`Dropdown`,`-dropdown`,Sn,U,e,m);x(un,{labelFieldRef:a(e,`labelField`),childrenFieldRef:a(e,`childrenField`),renderLabelRef:a(e,`renderLabel`),renderIconRef:a(e,`renderIcon`),hoverKeyRef:o,keyboardKeyRef:c,lastToggledSubmenuKeyRef:l,pendingKeyPathRef:d,activeKeyPathRef:f,animatedRef:a(e,`animated`),mergedShowRef:n,nodePropsRef:a(e,`nodeProps`),renderOptionRef:a(e,`renderOption`),menuPropsRef:a(e,`menuProps`),doSelect:b,doUpdateShow:C}),_(n,t=>{!e.animated&&!t&&E()});function b(t,n){let{onSelect:r}=e;r&&z(r,t,n)}function C(n){let{"onUpdate:show":r,onUpdateShow:i}=e;r&&z(r,n),i&&z(i,n),t.value=n}function E(){o.value=null,c.value=null,l.value=null}function D(){C(!1)}function k(){I(`left`)}function A(){I(`right`)}function j(){I(`up`)}function N(){I(`down`)}function P(){let e=F();e?.isLeaf&&n.value&&(b(e.key,e.rawNode),C(!1))}function F(){let{value:e}=r,{value:t}=u;return!e||t===null?null:e.getNode(t)??null}function I(e){let{value:t}=u,{value:{getFirstAvailableNode:n}}=r,i=null;if(t===null){let e=n();e!==null&&(i=e.key)}else{let t=F();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(i=n.key)}}i!==null&&(o.value=null,c.value=i)}let R=S(()=>{let{inverted:t}=e,n=v.value,{common:{cubicBezierEaseInOut:r},self:i}=y.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[w(`optionIconSuffixWidth`,n)]:l,[w(`optionSuffixWidth`,n)]:u,[w(`optionIconPrefixWidth`,n)]:d,[w(`optionPrefixWidth`,n)]:f,[w(`fontSize`,n)]:p,[w(`optionHeight`,n)]:m,[w(`optionIconSize`,n)]:h}=i,g={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":m,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":h,"--n-divider-color":o,"--n-option-opacity-disabled":c};return t?(g[`--n-color`]=i.colorInverted,g[`--n-option-color-hover`]=i.optionColorHoverInverted,g[`--n-option-color-active`]=i.optionColorActiveInverted,g[`--n-option-text-color`]=i.optionTextColorInverted,g[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,g[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,g[`--n-prefix-color`]=i.prefixColorInverted,g[`--n-suffix-color`]=i.suffixColorInverted,g[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(g[`--n-color`]=i.color,g[`--n-option-color-hover`]=i.optionColorHover,g[`--n-option-color-active`]=i.optionColorActive,g[`--n-option-text-color`]=i.optionTextColor,g[`--n-option-text-color-hover`]=i.optionTextColorHover,g[`--n-option-text-color-active`]=i.optionTextColorActive,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,g[`--n-prefix-color`]=i.prefixColor,g[`--n-suffix-color`]=i.suffixColor,g[`--n-group-header-text-color`]=i.groupHeaderTextColor),g}),B=h?O(`dropdown`,S(()=>`${v.value[0]}${e.inverted?`i`:``}`),R,e):void 0;return{mergedClsPrefix:m,mergedTheme:y,mergedSize:v,tmNodes:i,mergedShow:n,handleAfterLeave:()=>{e.animated&&E()},doUpdateShow:C,cssVars:h?void 0:R,themeClass:B?.themeClass,onRender:B?.onRender}},render(){let n=(n,r,i,a,o)=>{var s;let{mergedClsPrefix:c,menuProps:l}=this;(s=this.onRender)==null||s.call(this);let u=l?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},d={ref:nt(r),class:[n,`${c}-dropdown`,`${c}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:o};return t(xn,e(this.$attrs,d,u))},{mergedTheme:r}=this,i={show:this.mergedShow,theme:r.peers.Popover,themeOverrides:r.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:n,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return t(pe,Object.assign({},le(this.$props,wn),i),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{Xt as a,Bt as c,tt as d,$e as f,nn as i,rt as l,cn as n,Yt as o,Ze as p,sn as r,Gt as s,Tn as t,nt as u};