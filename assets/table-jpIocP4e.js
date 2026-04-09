import{A as e,B as t,C as n,F as r,Nt as i,S as a,T as o,Wt as s,et as c,gt as l,j as u,k as d,w as f,x as p,zt as m}from"./vue.runtime.esm-bundler-D_ATJLwM.js";import{Ct as h,Et as g,G as _,W as v,bt as y,i as b,n as x,wt as S,xt as C}from"./light-CkuL5o25.js";import{f as w,i as T,u as E}from"./light-gcvVC2vE.js";import{A as D,v as O}from"./_common-Dw5diFPD.js";import{T as k}from"./request-gDbOFxdk.js";import{t as A}from"./Input-BN8pxWt_.js";import{s as j,t as M}from"./Button-BopshsDo.js";import{a as N,r as P}from"./Dropdown-_VGYySaR.js";import{n as F,t as I}from"./FormItem-DQg-yWrA.js";import{t as L}from"./Space-CDvsTHzQ.js";import{t as R}from"./DataTable-DgijHFP8.js";import{i as z,n as B,r as V,t as H}from"./Warning-BBhEMNWm.js";import{t as U}from"./light-CfK_SnfT.js";import{t as W}from"./fade-in-height-expand.cssr-C7sZQC7I.js";import{t as G}from"./use-message-d78GRr2-.js";import{t as K}from"./user-DmXjT4R4.js";var q=C(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[h(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),S(`closable`,[C(`alert-body`,[h(`title`,`
 padding-right: 24px;
 `)])]),h(`icon`,{color:`var(--n-icon-color)`}),C(`alert-body`,{padding:`var(--n-padding)`},[h(`title`,{color:`var(--n-title-text-color)`}),h(`content`,{color:`var(--n-content-text-color)`})]),W({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),h(`icon`,`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),h(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),S(`show-icon`,[C(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),S(`right-adjust`,[C(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),C(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[h(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[y(`& +`,[h(`content`,{marginTop:`9px`})])]),h(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),h(`icon`,{transition:`color .3s var(--n-bezier)`})]),J=u({name:`Alert`,inheritAttrs:!1,props:Object.assign(Object.assign({},b.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:n,inlineThemeDisabled:r,mergedRtlRef:a}=_(e),o=b(`Alert`,`-alert`,q,U,e,t),s=T(`Alert`,a,t),c=p(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=o.value,{fontSize:r,borderRadius:i,titleFontWeight:a,lineHeight:s,iconSize:c,iconMargin:l,iconMarginRtl:u,closeIconSize:d,closeBorderRadius:f,closeSize:p,closeMargin:m,closeMarginRtl:h,padding:_}=n,{type:v}=e,{left:y,right:b}=k(l);return{"--n-bezier":t,"--n-color":n[g(`color`,v)],"--n-close-icon-size":d,"--n-close-border-radius":f,"--n-close-color-hover":n[g(`closeColorHover`,v)],"--n-close-color-pressed":n[g(`closeColorPressed`,v)],"--n-close-icon-color":n[g(`closeIconColor`,v)],"--n-close-icon-color-hover":n[g(`closeIconColorHover`,v)],"--n-close-icon-color-pressed":n[g(`closeIconColorPressed`,v)],"--n-icon-color":n[g(`iconColor`,v)],"--n-border":n[g(`border`,v)],"--n-title-text-color":n[g(`titleTextColor`,v)],"--n-content-text-color":n[g(`contentTextColor`,v)],"--n-line-height":s,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":a,"--n-icon-size":c,"--n-icon-margin":l,"--n-icon-margin-rtl":u,"--n-close-size":p,"--n-close-margin":m,"--n-close-margin-rtl":h,"--n-padding":_,"--n-icon-margin-left":y,"--n-icon-margin-right":b}}),l=r?v(`alert`,p(()=>e.type[0]),c,e):void 0,u=i(!0),d=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:s,mergedClsPrefix:t,mergedBordered:n,visible:u,handleCloseClick:()=>{Promise.resolve(e.onClose?.call(e)).then(e=>{e!==!1&&(u.value=!1)})},handleAfterLeave:()=>{d()},mergedTheme:o,cssVars:r?void 0:c,themeClass:l?.themeClass,onRender:l?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),r(j,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:n}=this,i={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?r(`div`,Object.assign({},t(this.$attrs,i)),this.closable&&r(D,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&r(`div`,{class:`${e}-alert__border`}),this.showIcon&&r(`div`,{class:`${e}-alert__icon`,"aria-hidden":`true`},E(n.icon,()=>[r(x,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return r(B,null);case`info`:return r(V,null);case`warning`:return r(H,null);case`error`:return r(z,null);default:return null}}})])),r(`div`,{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},w(n.header,t=>{let n=t||this.title;return n?r(`div`,{class:`${e}-alert-body__title`},n):null}),n.default&&r(`div`,{class:`${e}-alert-body__content`},n))):null}})}}),Y={class:`flex flex-col gap-4`},X={class:`ml-auto flex gap-2`},Z={class:`flex justify-between items-center w-full`},Q=u({__name:`table`,setup(t){let i=G(),u=K(),p=[{title:`ID`,key:`id`,width:80},{title:`姓名`,key:`name`,width:120},{title:`年龄`,key:`age`,width:80},{title:`公司`,key:`company`},{title:`地址`,key:`address`},{title:`标签`,key:`tags`,render(e){return e.tags.map(e=>r(N,{style:{marginRight:`6px`},type:e===`优秀`?`success`:`info`,bordered:!1},{default:()=>e}))}},{title:`操作`,key:`actions`,render(e){return r(`div`,{class:`flex gap-2`},[r(M,{size:`small`,quaternary:!0,type:`primary`,onClick:()=>i.info(`查看 ${e.name}`)},{default:()=>`查看`}),u.role===`admin`?r(M,{size:`small`,quaternary:!0,type:`error`,onClick:()=>i.warning(`确认删除 ${e.name} 吗？`)},{default:()=>`删除`}):null])}}],h=Array.from({length:15}).map((e,t)=>({key:t,id:`10${t}`,name:[`陆红 k`,`楼呈轩`,`市娜娜`,`竹依诺`,`宿治文`,`邵治涛`][t%6]||`匿名`,age:20+t,company:`南码市义轩运输有限公司`,address:`上海市浦东东运路 ${t+1} 号`,tags:t%3==0?[`优秀`,`活跃`]:[`普通`]})),g={pageSize:10};return(t,r)=>{let i=J,_=A,v=I,y=P,b=F,x=O,S=L,C=R;return c(),o(`div`,Y,[e(i,{title:`数据表格演示`,type:`info`,closable:``},{default:l(()=>[r[0]||=d(` 这是一个数据表格的例子，集成了搜索、筛选和分页功能。当前角色：`,-1),e(m(N),{type:m(u).role===`admin`?`success`:`warning`,size:`small`},{default:l(()=>[d(s(m(u).role),1)]),_:1},8,[`type`])]),_:1}),e(x,{bordered:!1,size:`small`,class:`shadow-sm rounded-lg`},{default:l(()=>[e(b,{inline:``,"label-width":80,"label-placement":`left`,class:`flex flex-wrap gap-4`},{default:l(()=>[e(v,{label:`姓名`},{default:l(()=>[e(_,{placeholder:`请输入姓名`})]),_:1}),e(v,{label:`性别`},{default:l(()=>[e(y,{placeholder:`请选择`,options:[{label:`男`,value:1},{label:`女`,value:2}],style:{width:`120px`}})]),_:1}),e(v,{label:`公司`},{default:l(()=>[e(_,{placeholder:`请输入公司`})]),_:1}),a(`div`,X,[e(m(M),{type:`primary`},{default:l(()=>[...r[1]||=[d(`查询`,-1)]]),_:1}),e(m(M),null,{default:l(()=>[...r[2]||=[d(`重置`,-1)]]),_:1})])]),_:1})]),_:1}),e(x,{bordered:!1,size:`small`,class:`shadow-sm rounded-lg`},{header:l(()=>[a(`div`,Z,[r[5]||=a(`span`,{class:`font-bold text-lg`},`数据列表`,-1),e(S,null,{default:l(()=>[m(u).role===`admin`?(c(),n(m(M),{key:0,type:`primary`,secondary:``},{default:l(()=>[...r[3]||=[d(`新增数据`,-1)]]),_:1})):f(``,!0),e(m(M),null,{default:l(()=>[...r[4]||=[d(`导出 CSV`,-1)]]),_:1})]),_:1})])]),default:l(()=>[e(C,{columns:p,data:m(h),pagination:g,bordered:!1},null,8,[`data`])]),_:1})])}}});export{Q as default};