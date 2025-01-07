import{a as ke,b as Ae,c as Re,f as Ge,g as Xe,h as j,i as Je,l as st,m as lt,n as pt}from"./chunk-IPA2IEFM.js";import{a as mt,b as ut,c as gt,d as ht}from"./chunk-BHFWB2KP.js";import{C as Ee,Da as Ye,Ea as qe,H as Le,Ha as Ke,I as We,Ja as et,Ka as tt,Ma as nt,Oa as it,P as $e,Pa as ot,Ua as rt,Wa as at,Xa as dt,Ya as ct,b as O,c as we,d as De,e as Ie,g as Fe,h as Oe,i as Pe,j as P,la as Ze,ma as He,na as Ve,oa as Ue,pa as B,qa as Qe,ra as S,s as Be,v as je}from"./chunk-LHCL3QF2.js";import{$b as u,Aa as ae,Ab as C,Bc as be,Ec as F,Ga as se,Gb as l,Hb as G,Ia as le,Ib as A,Ja as pe,Jc as _e,Ma as U,Mb as y,Oc as Me,Ra as de,Rb as s,Sb as d,Ta as ce,Tb as c,Tc as Ne,Vc as xe,Xb as Ce,_b as R,ac as N,ba as M,bc as x,cc as T,dc as X,fb as me,fc as J,ga as te,gc as Y,hc as q,ia as v,ib as r,ic as w,j as _,ja as ne,jb as z,jc as D,kb as ue,la as ie,mb as ge,mc as ye,na as k,nb as Q,nc as ve,oa as f,oc as Te,pb as he,ra as oe,sa as H,tb as m,tc as g,ub as fe,uc as h,wc as K,ya as V,yc as Se,za as re,zb as ze}from"./chunk-67FPPGC6.js";var ft=[{path:"",pathMatch:"full",redirectTo:"/dashboard"},{path:"dashboard",loadChildren:()=>import("./chunk-ZFDWQCQO.js").then(n=>n.DASHBOARD_ROUTES)},{path:"form",loadChildren:()=>import("./chunk-WJPISHGL.js").then(n=>n.FORM_ROUTES)}];var zt=[Ve,Ue,Ze,He];function wt(n){let o=n,e=Math.floor(Math.abs(n)),t=n.toString().replace(/^[^.]*\.?/,"").length,i=parseInt(n.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return o===1?1:i===0&&e!==0&&e%1e6===0&&t===0||!(i>=0&&i<=5)?4:5}var Ct=["es",[["a.\xA0m.","p.\xA0m."],void 0,void 0],void 0,[["D","L","M","X","J","V","S"],["dom","lun","mar","mi\xE9","jue","vie","s\xE1b"],["domingo","lunes","martes","mi\xE9rcoles","jueves","viernes","s\xE1bado"],["DO","LU","MA","MI","JU","VI","SA"]],void 0,[["E","F","M","A","M","J","J","A","S","O","N","D"],["ene","feb","mar","abr","may","jun","jul","ago","sept","oct","nov","dic"],["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]],void 0,[["a. C.","d. C."],void 0,["antes de Cristo","despu\xE9s de Cristo"]],1,[6,0],["d/M/yy","d MMM y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["H:mm","H:mm:ss","H:mm:ss z","H:mm:ss (zzzz)"],["{1}, {0}",void 0,void 0,void 0],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","euro",{AUD:[void 0,"$"],BRL:[void 0,"R$"],BYN:[void 0,"\u0440."],CAD:[void 0,"$"],CNY:[void 0,"\xA5"],EGP:[],ESP:["\u20A7"],GBP:[void 0,"\xA3"],HKD:[void 0,"$"],ILS:[void 0,"\u20AA"],INR:[void 0,"\u20B9"],JPY:[void 0,"\xA5"],KRW:[void 0,"\u20A9"],MXN:[void 0,"$"],NZD:[void 0,"$"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],THB:["\u0E3F"],TWD:[void 0,"NT$"],USD:["US$","$"],XAF:[],XCD:[void 0,"$"],XOF:[]},"ltr",wt];var Dt="@",It=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=f(se,{optional:!0});loadingSchedulerFn=f(kt,{optional:!0});_engine;constructor(e,t,i,a,p){this.doc=e,this.delegate=t,this.zone=i,this.animationType=a,this.moduleImpl=p}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-I2D4WWYI.js").then(i=>i),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(i=>{throw new te(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:a})=>{this._engine=i(this.animationType,this.doc);let p=new a(this.delegate,this._engine,this.zone);return this.delegate=p,p})}createRenderer(e,t){let i=this.delegate.createRenderer(e,t);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new ee(i);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(p=>{let xt=p.createRenderer(e,t);a.use(xt),this.scheduler?.notify(11)}).catch(p=>{a.use(i)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(t){ue()};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})(),ee=class{delegate;replay=[];\u0275type=1;constructor(o){this.delegate=o}use(o){if(this.delegate=o,this.replay!==null){for(let e of this.replay)e(o);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(o,e){return this.delegate.createElement(o,e)}createComment(o){return this.delegate.createComment(o)}createText(o){return this.delegate.createText(o)}get destroyNode(){return this.delegate.destroyNode}appendChild(o,e){this.delegate.appendChild(o,e)}insertBefore(o,e,t,i){this.delegate.insertBefore(o,e,t,i)}removeChild(o,e,t){this.delegate.removeChild(o,e,t)}selectRootElement(o,e){return this.delegate.selectRootElement(o,e)}parentNode(o){return this.delegate.parentNode(o)}nextSibling(o){return this.delegate.nextSibling(o)}setAttribute(o,e,t,i){this.delegate.setAttribute(o,e,t,i)}removeAttribute(o,e,t){this.delegate.removeAttribute(o,e,t)}addClass(o,e){this.delegate.addClass(o,e)}removeClass(o,e){this.delegate.removeClass(o,e)}setStyle(o,e,t,i){this.delegate.setStyle(o,e,t,i)}removeStyle(o,e,t){this.delegate.removeStyle(o,e,t)}setProperty(o,e,t){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(o,e,t)),this.delegate.setProperty(o,e,t)}setValue(o,e){this.delegate.setValue(o,e)}listen(o,e,t){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(o,e,t)),this.delegate.listen(o,e,t)}shouldReplay(o){return this.replay!==null&&o.startsWith(Dt)}},kt=new ie("");function yt(n="animations"){return ce("NgAsyncAnimations"),oe([{provide:ge,useFactory:(o,e,t)=>new It(o,e,t,n),deps:[Me,De,pe]},{provide:de,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var vt=(()=>{class n{http;prefix;suffix;constructor(e,t="/assets/i18n/",i=".json"){this.http=e,this.prefix=t,this.suffix=i}getTranslation(e){return this.http.get(`${this.prefix}${e}${this.suffix}`)}static \u0275fac=function(t){return new(t||n)(k(O),k(String),k(String))};static \u0275prov=v({token:n,factory:n.\u0275fac})}return n})();Ne(Ct);function At(n){return new vt(n,"./assets/i18n/",".json")}var Tt={providers:[Se({eventCoalescing:!0}),Re(ft),Qe(zt),rt(at),H(it),yt(),we(),H(P.forRoot({loader:{provide:Fe,useFactory:At,deps:[O]}}))]};var E=["*"],Ft=["nz-sider-trigger",""];function Ot(n,o){}function Pt(n,o){if(n&1&&C(0,Ot,0,0,"ng-template",2),n&2){let e=u(),t=q(5);l("ngTemplateOutlet",e.nzZeroTrigger||t)}}function Bt(n,o){}function jt(n,o){if(n&1&&C(0,Bt,0,0,"ng-template",2),n&2){let e=u(),t=q(3);l("ngTemplateOutlet",e.nzTrigger||t)}}function Et(n,o){if(n&1&&c(0,"nz-icon",3),n&2){let e=u(2);l("nzType",e.nzCollapsed?"left":"right")}}function Lt(n,o){if(n&1&&c(0,"nz-icon",3),n&2){let e=u(2);l("nzType",e.nzCollapsed?"right":"left")}}function Wt(n,o){if(n&1&&C(0,Et,1,1,"nz-icon",3)(1,Lt,1,1,"nz-icon",3),n&2){let e=u();y(e.nzReverseArrow?0:1)}}function $t(n,o){n&1&&c(0,"nz-icon",4)}function Zt(n,o){if(n&1){let e=Ce();s(0,"div",2),R("click",function(){re(e);let i=u();return ae(i.setCollapsed(!i.nzCollapsed))}),d()}if(n&2){let e=u();l("matchBreakPoint",e.matchBreakPoint)("nzCollapsedWidth",e.nzCollapsedWidth)("nzCollapsed",e.nzCollapsed)("nzBreakpoint",e.nzBreakpoint)("nzReverseArrow",e.nzReverseArrow)("nzTrigger",e.nzTrigger)("nzZeroTrigger",e.nzZeroTrigger)("siderWidth",e.widthSetting)}}var St=(()=>{class n{constructor(e,t){this.elementRef=e,this.renderer=t,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}static{this.\u0275fac=function(t){return new(t||n)(z(U),z(Q))}}static{this.\u0275cmp=m({type:n,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:E,decls:1,vars:0,template:function(t,i){t&1&&(N(),x(0))},encapsulation:2,changeDetection:0})}}return n})();var bt=(()=>{class n{constructor(e,t){this.elementRef=e,this.renderer=t,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}static{this.\u0275fac=function(t){return new(t||n)(z(U),z(Q))}}static{this.\u0275cmp=m({type:n,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:E,decls:1,vars:0,template:function(t,i){t&1&&(N(),x(0))},encapsulation:2,changeDetection:0})}}return n})(),_t=(()=>{class n{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=this.nzCollapsedWidth===0&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=this.nzCollapsedWidth!==0}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=m({type:n,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(t,i){t&2&&(G("width",i.isNormalTrigger?i.siderWidth:null),A("ant-layout-sider-trigger",i.isNormalTrigger)("ant-layout-sider-zero-width-trigger",i.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",i.isZeroTrigger&&i.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",i.isZeroTrigger&&!i.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[V],attrs:Ft,decls:6,vars:2,consts:[["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],[3,"nzType"],["nzType","bars"]],template:function(t,i){t&1&&C(0,Pt,1,1,null,2)(1,jt,1,1,null,2)(2,Wt,2,1,"ng-template",null,0,K)(4,$t,1,0,"ng-template",null,1,K),t&2&&(y(i.isZeroTrigger?0:-1),r(),y(i.isNormalTrigger?1:-1))},dependencies:[xe,S,B],encapsulation:2,changeDetection:0})}}return n})(),L=(()=>{class n{updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:Be(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&this.nzMenuDirective.nzMode==="inline"&&this.nzCollapsedWidth!==0&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(e){e!==this.nzCollapsed&&(this.nzCollapsed=e,this.nzCollapsedChange.emit(e),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}constructor(e,t,i){this.platform=e,this.cdr=t,this.breakpointService=i,this.destroy$=new _,this.nzMenuDirective=null,this.nzCollapsedChange=new le,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(Le,!0).pipe(M(this.destroy$)).subscribe(e=>{let t=this.nzBreakpoint;t&&je().subscribe(()=>{this.matchBreakPoint=!e[t],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(e){let{nzCollapsed:t,nzCollapsedWidth:i,nzWidth:a}=e;(t||i||a)&&this.updateStyleMap(),t&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}static{this.\u0275fac=function(t){return new(t||n)(z(Ee),z(be),z(We))}}static{this.\u0275cmp=m({type:n,selectors:[["nz-sider"]],contentQueries:function(t,i,a){if(t&1&&X(a,j,5),t&2){let p;J(p=Y())&&(i.nzMenuDirective=p.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(t,i){t&2&&(G("flex",i.flexSetting)("max-width",i.widthSetting)("min-width",i.widthSetting)("width",i.widthSetting),A("ant-layout-sider-zero-width",i.nzCollapsed&&i.nzCollapsedWidth===0)("ant-layout-sider-light",i.nzTheme==="light")("ant-layout-sider-dark",i.nzTheme==="dark")("ant-layout-sider-collapsed",i.nzCollapsed)("ant-layout-sider-has-trigger",i.nzCollapsible&&i.nzTrigger!==null))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:[2,"nzReverseArrow","nzReverseArrow",F],nzCollapsible:[2,"nzCollapsible","nzCollapsible",F],nzCollapsed:[2,"nzCollapsed","nzCollapsed",F]},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[ze,V],ngContentSelectors:E,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth"],["nz-sider-trigger","",3,"click","matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth"]],template:function(t,i){t&1&&(N(),s(0,"div",0),x(1),d(),C(2,Zt,1,8,"div",1)),t&2&&(r(2),y(i.nzCollapsible&&i.nzTrigger!==null?2:-1))},dependencies:[_t],encapsulation:2,changeDetection:0})}}return n})(),Mt=(()=>{class n{constructor(e){this.directionality=e,this.dir="ltr",this.destroy$=new _}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(M(this.destroy$)).subscribe(e=>{this.dir=e})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(t){return new(t||n)(z($e))}}static{this.\u0275cmp=m({type:n,selectors:[["nz-layout"]],contentQueries:function(t,i,a){if(t&1&&X(a,L,4),t&2){let p;J(p=Y())&&(i.listOfNzSiderComponent=p)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(t,i){t&2&&A("ant-layout-rtl",i.dir==="rtl")("ant-layout-has-sider",i.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:E,decls:1,vars:0,template:function(t,i){t&1&&(N(),x(0))},encapsulation:2,changeDetection:0})}}return n})(),W=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=fe({type:n})}static{this.\u0275inj=ne({imports:[L,_t]})}}return n})();var b=class n{isCollapsed=he(!1);static \u0275fac=function(e){return new(e||n)};static \u0275prov=v({token:n,factory:n.\u0275fac,providedIn:"root"})};function Vt(n,o){if(n&1&&(s(0,"div",1)(1,"form",12)(2,"nz-form-item")(3,"nz-form-control",13)(4,"nz-select",14),c(5,"nz-option",15),g(6,"translate"),c(7,"nz-option",16),g(8,"translate"),c(9,"nz-option",17),g(10,"translate"),d()()()()()),n&2){let e=u();r(),l("formGroup",e.langForm),r(2),l("nzSpan",12),r(2),T("nzLabel",h(6,5,"sidenav.lang.english")),r(2),T("nzLabel",h(8,7,"sidenav.lang.spanish")),r(2),T("nzLabel",h(10,9,"sidenav.lang.portuguese"))}}var $=class n{isCollapsed=!1;destroy$=new _;fb=f(nt);translate=f(Oe);$stateManagement=f(b);langForm=this.fb.group({lang:this.fb.control("es")});effectSig=_e(()=>{this.isCollapsed=this.$stateManagement.isCollapsed()});ngOnInit(){this.translate.setDefaultLang("es"),this.langForm.controls.lang.valueChanges.pipe(M(this.destroy$)).subscribe(o=>{o&&this.genderChange(o)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}submitForm(){this.langForm.valid?console.log("submit",this.langForm.value):Object.values(this.langForm.controls).forEach(o=>{o.invalid&&(o.markAsDirty(),o.updateValueAndValidity({onlySelf:!0}))})}genderChange(o){this.translate.use(o)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["app-sidenav"]],decls:28,vars:23,consts:[["nzCollapsible","","nzWidth","256px","nzBreakpoint","md",1,"menu-sidebar",3,"nzCollapsedChange","nzCollapsed","nzTrigger"],[1,"sidebar-logo"],["href","https://www.naranjax.com/","target","_blank"],["alt","logo",3,"src"],["nz-menu","","nzTheme","dark","nzMode","inline",3,"nzInlineCollapsed"],["nz-submenu","","nzOpen","","nzIcon","dashboard",3,"nzTitle"],["nz-menu-item","","nzMatchRouter",""],["routerLink","/dashboard/welcome"],["routerLink","/dashboard/monitor"],["routerLink","/dashboard/workspace"],["nz-submenu","","nzOpen","","nzIcon","form",3,"nzTitle"],["routerLink","/form/basic"],["nz-form","",3,"formGroup"],[3,"nzSpan"],["id","lang","formControlName","lang"],["nzValue","en",3,"nzLabel"],["nzValue","es",3,"nzLabel"],["nzValue","pt",3,"nzLabel"]],template:function(e,t){e&1&&(s(0,"nz-sider",0),Te("nzCollapsedChange",function(a){return ve(t.isCollapsed,a)||(t.isCollapsed=a),a}),s(1,"div",1)(2,"a",2),c(3,"img",3),d()(),C(4,Vt,11,11,"div",1),s(5,"ul",4)(6,"li",5),g(7,"translate"),s(8,"ul")(9,"li",6)(10,"a",7),w(11),g(12,"translate"),d()(),s(13,"li",6)(14,"a",8),w(15),g(16,"translate"),d()(),s(17,"li",6)(18,"a",9),w(19),g(20,"translate"),d()()()(),s(21,"li",10),g(22,"translate"),s(23,"ul")(24,"li",6)(25,"a",11),w(26),g(27,"translate"),d()()()()()()),e&2&&(ye("nzCollapsed",t.isCollapsed),l("nzTrigger",null),r(3),l("src",t.isCollapsed?"assets/images/logo.png":"https://images.ctfassets.net/yxlyq25bynna/5aunl52F9uDLxXLUC8L7O4/d26d75c924a4cbd4cda5579f3c19d889/155x36px_.png?fm=webp&w=155",me),r(),y(t.isCollapsed?-1:4),r(),l("nzInlineCollapsed",t.isCollapsed),r(),T("nzTitle",h(7,11,"sidenav.dashboard")),r(5),D(h(12,13,"sidenav.welcome")),r(4),D(h(16,15,"sidenav.monitor")),r(4),D(h(20,17,"sidenav.workspace")),r(2),T("nzTitle",h(22,19,"sidenav.form")),r(5),D(h(27,21,"sidenav.basic_form")))},dependencies:[Ae,P,Pe,ot,Ke,Ye,qe,et,tt,ht,ct,dt,ut,mt,gt,pt,st,lt,S,Je,j,Ge,Xe,W,L],styles:["[_nghost-%COMP%]{display:flex}.sidebar-logo[_ngcontent-%COMP%]{position:relative;height:64px;padding-left:24px;overflow:hidden;line-height:64px;background:#001529;transition:all .3s}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block;height:32px;width:auto;vertical-align:middle}.menu-sidebar[_ngcontent-%COMP%]{position:relative;z-index:10;min-height:100vh;box-shadow:2px 0 6px #00152959}"]})};var Z=class n{isCollapsed=!1;$stateManagement=f(b);handleMenu(){this.isCollapsed=!this.isCollapsed,this.$stateManagement.isCollapsed.set(this.isCollapsed)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=m({type:n,selectors:[["app-root"]],decls:10,vars:1,consts:[[1,"app-layout"],[1,"app-header"],[1,"header-trigger",3,"click"],[1,"trigger",3,"nzType"],[1,"inner-content"]],template:function(e,t){e&1&&(s(0,"nz-layout",0),c(1,"app-sidenav"),s(2,"nz-layout")(3,"nz-header")(4,"div",1)(5,"span",2),R("click",function(){return t.handleMenu()}),c(6,"nz-icon",3),d()()(),s(7,"nz-content")(8,"div",4),c(9,"router-outlet"),d()()()()),e&2&&(r(6),l("nzType",t.isCollapsed?"menu-unfold":"menu-fold"))},dependencies:[ke,S,B,W,Mt,bt,St,$],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{height:100vh;flex-direction:row}.header-trigger[_ngcontent-%COMP%]{height:64px;padding:20px 24px;font-size:20px;cursor:pointer;transition:all .3s,padding 0s}.trigger[_ngcontent-%COMP%]:hover{color:#1890ff}nz-header[_ngcontent-%COMP%]{padding:0;width:100%;z-index:2}.app-header[_ngcontent-%COMP%]{position:relative;height:64px;padding:0;background:#fff;box-shadow:0 1px 4px #00152914}nz-content[_ngcontent-%COMP%]{margin:24px}.inner-content[_ngcontent-%COMP%]{padding:24px;background:#fff;height:100%}"]})};Ie(Z,Tt).catch(n=>console.error(n));
