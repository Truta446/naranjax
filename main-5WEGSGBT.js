import{a as Me,b as xe,c as we,f as Ze,g as He,h as P,i as Ve,l as nt,m as it,n as ot}from"./chunk-5IJAFAZR.js";import{a as st,b as lt,c as dt,d as pt}from"./chunk-OMTEONV2.js";import{C as Fe,Da as Ue,Ea as Qe,H as Oe,Ha as Ge,I as Pe,Ja as Xe,Ka as Je,Ma as Ye,Oa as qe,P as Be,Pa as Ke,Ua as et,Wa as tt,Xa as rt,Ya as at,b as R,c as be,d as Ne,e as Se,g as De,h as Ae,i as Ie,j as k,la as Ee,ma as je,na as Le,oa as We,pa as F,qa as $e,ra as O,s as Re,v as ke}from"./chunk-ORM3CKND.js";import{$b as m,Aa as ie,Ab as z,Bc as ye,Ec as I,Ga as oe,Gb as d,Hb as H,Ia as re,Ib as D,Ja as ae,Ma as $,Mb as C,Oc as ve,Ra as se,Rb as s,Sb as p,Ta as le,Tb as c,Tc as Te,Vc as _e,Xb as ge,_b as A,ac as b,ba as _,bc as N,cc as v,dc as V,fb as de,fc as U,ga as q,gc as Q,hc as G,ia as x,ib as r,ic as S,j as T,ja as K,jb as h,jc as M,kb as pe,la as ee,mb as ce,mc as he,na as w,nb as Z,nc as fe,oa as y,oc as ze,ra as te,sa as L,tb as f,tc as u,ub as me,uc as g,wc as X,ya as W,yc as Ce,za as ne,zb as ue}from"./chunk-67FPPGC6.js";var ct=[{path:"",pathMatch:"full",redirectTo:"/dashboard"},{path:"dashboard",loadChildren:()=>import("./chunk-UBD25REN.js").then(n=>n.DASHBOARD_ROUTES)},{path:"form",loadChildren:()=>import("./chunk-WMYDRCPZ.js").then(n=>n.FORM_ROUTES)}];var mt=[Le,We,Ee,je];function bt(n){let o=n,e=Math.floor(Math.abs(n)),t=n.toString().replace(/^[^.]*\.?/,"").length,i=parseInt(n.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return o===1?1:i===0&&e!==0&&e%1e6===0&&t===0||!(i>=0&&i<=5)?4:5}var ut=["es",[["a.\xA0m.","p.\xA0m."],void 0,void 0],void 0,[["D","L","M","X","J","V","S"],["dom","lun","mar","mi\xE9","jue","vie","s\xE1b"],["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"],["DO","LU","MA","MI","JU","VI","SA"]],void 0,[["E","F","M","A","M","J","J","A","S","O","N","D"],["ene","feb","mar","abr","may","jun","jul","ago","sept","oct","nov","dic"],["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]],void 0,[["a. C.","d. C."],void 0,["antes de Cristo","despu\xE9s de Cristo"]],1,[6,0],["d/M/yy","d MMM y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["H:mm","H:mm:ss","H:mm:ss z","H:mm:ss (zzzz)"],["{1}, {0}",void 0,void 0,void 0],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","euro",{AUD:[void 0,"$"],BRL:[void 0,"R$"],BYN:[void 0,"\u0440."],CAD:[void 0,"$"],CNY:[void 0,"\xA5"],EGP:[],ESP:["\u20A7"],GBP:[void 0,"\xA3"],HKD:[void 0,"$"],ILS:[void 0,"\u20AA"],INR:[void 0,"\u20B9"],JPY:[void 0,"\xA5"],KRW:[void 0,"\u20A9"],MXN:[void 0,"$"],NZD:[void 0,"$"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],THB:["\u0E3F"],TWD:[void 0,"NT$"],USD:["US$","$"],XAF:[],XCD:[void 0,"$"],XOF:[]},"ltr",bt];var Nt="@",St=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=y(oe,{optional:!0});loadingSchedulerFn=y(Mt,{optional:!0});_engine;constructor(e,t,i,a,l){this.doc=e,this.delegate=t,this.zone=i,this.animationType=a,this.moduleImpl=l}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-I2D4WWYI.js").then(i=>i),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(i=>{throw new q(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:a})=>{this._engine=i(this.animationType,this.doc);let l=new a(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(e,t){let i=this.delegate.createRenderer(e,t);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new J(i);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let _t=l.createRenderer(e,t);a.use(_t),this.scheduler?.notify(11)}).catch(l=>{a.use(i)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(t){pe()};static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})(),J=class{delegate;replay=[];\u0275type=1;constructor(o){this.delegate=o}use(o){if(this.delegate=o,this.replay!==null){for(let e of this.replay)e(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,e){return this.delegate.createElement(o,e)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,e){this.delegate.appendChild(o,e)}insertBefore(o,e,t,i){this.delegate.insertBefore(o,e,t,i)}removeChild(o,e,t){this.delegate.removeChild(o,e,t)}selectRootElement(o,e){return this.delegate.selectRootElement(o,e)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,e,t,i){this.delegate.setAttribute(o,e,t,i)}removeAttribute(o,e,t){this.delegate.removeAttribute(o,e,t)}addClass(o,e){this.delegate.addClass(o,e)}removeClass(o,e){this.delegate.removeClass(o,e)}setStyle(o,e,t,i){this.delegate.setStyle(o,e,t,i)}removeStyle(o,e,t){this.delegate.removeStyle(o,e,t)}setProperty(o,e,t){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(o,e,t)),this.delegate.setProperty(o,e,t)}setValue(o,e){this.delegate.setValue(o,e)}listen(o,e,t){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(o,e,t)),this.delegate.listen(o,e,t)}shouldReplay(o){return this.replay!==null&&o.startsWith(Nt)}},Mt=new ee("");function gt(n="animations"){return le("NgAsyncAnimations"),te([{provide:ce,useFactory:(o,e,t)=>new St(o,e,t,n),deps:[ve,Ne,ae]},{provide:se,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ht=(()=>{class n{http;prefix;suffix;constructor(e,t="/assets/i18n/",i=".json"){this.http=e,this.prefix=t,this.suffix=i}getTranslation(e){return this.http.get(`${this.prefix}${e}${this.suffix}`)}static \u0275fac=function(t){return new(t||n)(w(R),w(String),w(String))};static \u0275prov=x({token:n,factory:n.\u0275fac})}return n})();Te(ut);function xt(n){return new ht(n,"./assets/i18n/",".json")}var ft={providers:[Ce({eventCoalescing:!0}),we(ct),$e(mt),et(tt),L(qe),gt(),be(),L(k.forRoot({loader:{provide:De,useFactory:xt,deps:[R]}}))]};var B=["*"],Dt=["nz-sider-trigger",""];function At(n,o){}function It(n,o){if(n&1&&z(0,At,0,0,"ng-template",2),n&2){let e=m(),t=G(5);d("ngTemplateOutlet",e.nzZeroTrigger||t)}}function Rt(n,o){}function kt(n,o){if(n&1&&z(0,Rt,0,0,"ng-template",2),n&2){let e=m(),t=G(3);d("ngTemplateOutlet",e.nzTrigger||t)}}function Ft(n,o){if(n&1&&c(0,"nz-icon",3),n&2){let e=m(2);d("nzType",e.nzCollapsed?"left":"right")}}function Ot(n,o){if(n&1&&c(0,"nz-icon",3),n&2){let e=m(2);d("nzType",e.nzCollapsed?"right":"left")}}function Pt(n,o){if(n&1&&z(0,Ft,1,1,"nz-icon",3)(1,Ot,1,1,"nz-icon",3),n&2){let e=m();C(e.nzReverseArrow?0:1)}}function Bt(n,o){n&1&&c(0,"nz-icon",4)}function Et(n,o){if(n&1){let e=ge();s(0,"div",2),A("click",function(){ne(e);let i=m();return ie(i.setCollapsed(!i.nzCollapsed))}),p()}if(n&2){let e=m();d("matchBreakPoint",e.matchBreakPoint)("nzCollapsedWidth",e.nzCollapsedWidth)("nzCollapsed",e.nzCollapsed)("nzBreakpoint",e.nzBreakpoint)("nzReverseArrow",e.nzReverseArrow)("nzTrigger",e.nzTrigger)("nzZeroTrigger",e.nzZeroTrigger)("siderWidth",e.widthSetting)}}var zt=(()=>{class n{constructor(e,t){this.elementRef=e,this.renderer=t,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}static{this.\u0275fac=function(t){return new(t||n)(h($),h(Z))}}static{this.\u0275cmp=f({type:n,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:B,decls:1,vars:0,template:function(t,i){t&1&&(b(),N(0))},encapsulation:2,changeDetection:0})}}return n})();var Ct=(()=>{class n{constructor(e,t){this.elementRef=e,this.renderer=t,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}static{this.\u0275fac=function(t){return new(t||n)(h($),h(Z))}}static{this.\u0275cmp=f({type:n,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:B,decls:1,vars:0,template:function(t,i){t&1&&(b(),N(0))},encapsulation:2,changeDetection:0})}}return n})(),yt=(()=>{class n{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=this.nzCollapsedWidth===0&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=this.nzCollapsedWidth!==0}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=f({type:n,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(t,i){t&2&&(H("width",i.isNormalTrigger?i.siderWidth:null),D("ant-layout-sider-trigger",i.isNormalTrigger)("ant-layout-sider-zero-width-trigger",i.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",i.isZeroTrigger&&i.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",i.isZeroTrigger&&!i.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[W],attrs:Dt,decls:6,vars:2,consts:[["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],[3,"nzType"],["nzType","bars"]],template:function(t,i){t&1&&z(0,It,1,1,null,2)(1,kt,1,1,null,2)(2,Pt,2,1,"ng-template",null,0,X)(4,Bt,1,0,"ng-template",null,1,X),t&2&&(C(i.isZeroTrigger?0:-1),r(),C(i.isNormalTrigger?1:-1))},dependencies:[_e,O,F],encapsulation:2,changeDetection:0})}}return n})(),E=(()=>{class n{updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:Re(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&this.nzMenuDirective.nzMode==="inline"&&this.nzCollapsedWidth!==0&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(e){e!==this.nzCollapsed&&(this.nzCollapsed=e,this.nzCollapsedChange.emit(e),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}constructor(e,t,i){this.platform=e,this.cdr=t,this.breakpointService=i,this.destroy$=new T,this.nzMenuDirective=null,this.nzCollapsedChange=new re,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(Oe,!0).pipe(_(this.destroy$)).subscribe(e=>{let t=this.nzBreakpoint;t&&ke().subscribe(()=>{this.matchBreakPoint=!e[t],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(e){let{nzCollapsed:t,nzCollapsedWidth:i,nzWidth:a}=e;(t||i||a)&&this.updateStyleMap(),t&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static{this.\u0275fac=function(t){return new(t||n)(h(Fe),h(ye),h(Pe))}}static{this.\u0275cmp=f({type:n,selectors:[["nz-sider"]],contentQueries:function(t,i,a){if(t&1&&V(a,P,5),t&2){let l;U(l=Q())&&(i.nzMenuDirective=l.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(t,i){t&2&&(H("flex",i.flexSetting)("max-width",i.widthSetting)("min-width",i.widthSetting)("width",i.widthSetting),D("ant-layout-sider-zero-width",i.nzCollapsed&&i.nzCollapsedWidth===0)("ant-layout-sider-light",i.nzTheme==="light")("ant-layout-sider-dark",i.nzTheme==="dark")("ant-layout-sider-collapsed",i.nzCollapsed)("ant-layout-sider-has-trigger",i.nzCollapsible&&i.nzTrigger!==null))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:[2,"nzReverseArrow","nzReverseArrow",I],nzCollapsible:[2,"nzCollapsible","nzCollapsible",I],nzCollapsed:[2,"nzCollapsed","nzCollapsed",I]},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[ue,W],ngContentSelectors:B,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth"],["nz-sider-trigger","",3,"click","matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth"]],template:function(t,i){t&1&&(b(),s(0,"div",0),N(1),p(),z(2,Et,1,8,"div",1)),t&2&&(r(2),C(i.nzCollapsible&&i.nzTrigger!==null?2:-1))},dependencies:[yt],encapsulation:2,changeDetection:0})}}return n})(),vt=(()=>{class n{constructor(e){this.directionality=e,this.dir="ltr",this.destroy$=new T}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(_(this.destroy$)).subscribe(e=>{this.dir=e})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(t){return new(t||n)(h(Be))}}static{this.\u0275cmp=f({type:n,selectors:[["nz-layout"]],contentQueries:function(t,i,a){if(t&1&&V(a,E,4),t&2){let l;U(l=Q())&&(i.listOfNzSiderComponent=l)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(t,i){t&2&&D("ant-layout-rtl",i.dir==="rtl")("ant-layout-has-sider",i.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:B,decls:1,vars:0,template:function(t,i){t&1&&(b(),N(0))},encapsulation:2,changeDetection:0})}}return n})(),Tt=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=me({type:n})}static{this.\u0275inj=K({imports:[E,yt]})}}return n})();function Lt(n,o){if(n&1&&(s(0,"div",2)(1,"form",17)(2,"nz-form-item")(3,"nz-form-control",18)(4,"nz-select",19),c(5,"nz-option",20),u(6,"translate"),c(7,"nz-option",21),u(8,"translate"),c(9,"nz-option",22),u(10,"translate"),p()()()()()),n&2){let e=m();r(),d("formGroup",e.langForm),r(2),d("nzSpan",12),r(2),v("nzLabel",g(6,5,"sidenav.lang.english")),r(2),v("nzLabel",g(8,7,"sidenav.lang.spanish")),r(2),v("nzLabel",g(10,9,"sidenav.lang.portuguese"))}}var j=class n{isCollapsed=!1;destroy$=new T;fb=y(Ye);translate=y(Ae);langForm=this.fb.group({lang:this.fb.control("es")});ngOnInit(){this.translate.setDefaultLang("es"),this.langForm.controls.lang.valueChanges.pipe(_(this.destroy$)).subscribe(o=>{o&&this.genderChange(o)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}submitForm(){this.langForm.valid?console.log("submit",this.langForm.value):Object.values(this.langForm.controls).forEach(o=>{o.invalid&&(o.markAsDirty(),o.updateValueAndValidity({onlySelf:!0}))})}genderChange(o){this.translate.use(o)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=f({type:n,selectors:[["app-root"]],decls:37,vars:24,consts:[[1,"app-layout"],["nzCollapsible","","nzWidth","256px","nzBreakpoint","md",1,"menu-sidebar",3,"nzCollapsedChange","nzCollapsed","nzTrigger"],[1,"sidebar-logo"],["href","https://www.naranjax.com/","target","_blank"],["alt","logo",3,"src"],["nz-menu","","nzTheme","dark","nzMode","inline",3,"nzInlineCollapsed"],["nz-submenu","","nzOpen","","nzIcon","dashboard",3,"nzTitle"],["nz-menu-item","","nzMatchRouter",""],["routerLink","/dashboard/welcome"],["routerLink","/dashboard/monitor"],["routerLink","/dashboard/workspace"],["nz-submenu","","nzOpen","","nzIcon","form",3,"nzTitle"],["routerLink","/form/basic"],[1,"app-header"],[1,"header-trigger",3,"click"],[1,"trigger",3,"nzType"],[1,"inner-content"],["nz-form","",3,"formGroup"],[3,"nzSpan"],["id","lang","formControlName","lang"],["nzValue","en",3,"nzLabel"],["nzValue","es",3,"nzLabel"],["nzValue","pt",3,"nzLabel"]],template:function(e,t){e&1&&(s(0,"nz-layout",0)(1,"nz-sider",1),ze("nzCollapsedChange",function(a){return fe(t.isCollapsed,a)||(t.isCollapsed=a),a}),s(2,"div",2)(3,"a",3),c(4,"img",4),p()(),z(5,Lt,11,11,"div",2),s(6,"ul",5)(7,"li",6),u(8,"translate"),s(9,"ul")(10,"li",7)(11,"a",8),S(12),u(13,"translate"),p()(),s(14,"li",7)(15,"a",9),S(16),u(17,"translate"),p()(),s(18,"li",7)(19,"a",10),S(20),u(21,"translate"),p()()()(),s(22,"li",11),u(23,"translate"),s(24,"ul")(25,"li",7)(26,"a",12),S(27),u(28,"translate"),p()()()()()(),s(29,"nz-layout")(30,"nz-header")(31,"div",13)(32,"span",14),A("click",function(){return t.isCollapsed=!t.isCollapsed}),c(33,"nz-icon",15),p()()(),s(34,"nz-content")(35,"div",16),c(36,"router-outlet"),p()()()()),e&2&&(r(),he("nzCollapsed",t.isCollapsed),d("nzTrigger",null),r(3),d("src",t.isCollapsed?"assets/images/logo.png":"https://images.ctfassets.net/yxlyq25bynna/5aunl52F9uDLxXLUC8L7O4/d26d75c924a4cbd4cda5579f3c19d889/155x36px_.png?fm=webp&w=155",de),r(),C(t.isCollapsed?-1:5),r(),d("nzInlineCollapsed",t.isCollapsed),r(),v("nzTitle",g(8,12,"sidenav.dashboard")),r(5),M(g(13,14,"sidenav.welcome")),r(4),M(g(17,16,"sidenav.monitor")),r(4),M(g(21,18,"sidenav.workspace")),r(2),v("nzTitle",g(23,20,"sidenav.form")),r(5),M(g(28,22,"sidenav.basic_form")),r(6),d("nzType",t.isCollapsed?"menu-unfold":"menu-fold"))},dependencies:[xe,Me,O,F,Tt,vt,Ct,zt,E,Ve,P,Ze,He,k,Ie,Ke,Ge,Ue,Qe,Xe,Je,pt,at,rt,lt,st,dt,ot,nt,it],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{height:100vh}.menu-sidebar[_ngcontent-%COMP%]{position:relative;z-index:10;min-height:100vh;box-shadow:2px 0 6px #00152959}.header-trigger[_ngcontent-%COMP%]{height:64px;padding:20px 24px;font-size:20px;cursor:pointer;transition:all .3s,padding 0s}.trigger[_ngcontent-%COMP%]:hover{color:#1890ff}.sidebar-logo[_ngcontent-%COMP%]{position:relative;height:64px;padding-left:24px;overflow:hidden;line-height:64px;background:#001529;transition:all .3s}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block;height:32px;width:auto;vertical-align:middle}nz-header[_ngcontent-%COMP%]{padding:0;width:100%;z-index:2}.app-header[_ngcontent-%COMP%]{position:relative;height:64px;padding:0;background:#fff;box-shadow:0 1px 4px #00152914}nz-content[_ngcontent-%COMP%]{margin:24px}.inner-content[_ngcontent-%COMP%]{padding:24px;background:#fff;height:100%}"]})};Se(j,ft).catch(n=>console.error(n));