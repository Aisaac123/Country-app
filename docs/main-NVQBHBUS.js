import{D as l,E as f,G as u,H as a,I as h,J as C,K as g,M as y,N as M,c,d as r,f as i,m as n,n as m,o as s,s as d}from"./chunk-XIPPB6IC.js";var x=[{path:"home",component:h},{path:"about",component:C},{path:"contact",component:g},{path:"countries",loadChildren:()=>import("./chunk-JJAT5VBR.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries"}],v=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r({type:t}),t.\u0275inj=i({imports:[a.forRoot(x),a]});let o=t;return o})();var w=(()=>{let t=class t{constructor(){this.title="country-app"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:7,vars:0,consts:[[1,"row","mt-4"],[1,"col-2","border-end","pe-4","me-0"],[1,"col","ms-5"],[1,""]],template:function(e,S){e&1&&(n(0,"h1"),d(1,"Country app en desarrollo..."),m(),n(2,"div",0)(3,"div",1),s(4,"shared-side-bar"),m(),n(5,"div",2),s(6,"router-outlet",3),m()())},dependencies:[u,y]});let o=t;return o})();var N=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r({type:t,bootstrap:[w]}),t.\u0275inj=i({imports:[f,v,M]});let o=t;return o})();l().bootstrapModule(N).catch(o=>console.error(o));
