import{A as R,B as _,C as $,G as C,K as H,M as q,a as b,b as E,c as m,d as h,e as S,f as y,g as w,h as M,i as p,j as I,k as v,l as d,m as n,n as o,o as f,p as T,q as B,r as P,s as a,t as u,u as F,v as D,w as j,x as N,y as k,z as O}from"./chunk-THEZYCBW.js";var g=(()=>{let t=class t{constructor(r){this.http=r,this.url="https://restcountries.com/v3.1"}searchCapital(r){let i=`${this.url}/capital/${r}`;return this.http.get(i).pipe(E(()=>b([])))}};t.\u0275fac=function(i){return new(i||t)(w(_))},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})();function V(e,t){e&1&&(n(0,"div",2),a(1,` No hay paises que mostrar
`),o())}function W(e,t){if(e&1&&(n(0,"tr")(1,"td"),a(2),o(),n(3,"td"),f(4,"img",5),o(),n(5,"td"),a(6),o(),n(7,"td"),a(8),o(),n(9,"td"),a(10),F(11,"number"),o(),n(12,"td"),f(13,"a",6),o()()),e&2){let c=t.$implicit,r=t.index;p(2),u(" ",r+1,""),p(2),d("src",c.flags.svg,M)("alt",c.name.common),p(2),u(" ",c.name.common,""),p(2),u(" ",c.capital,""),p(2),u(" ",D(11,6,c.population),"")}}function X(e,t){if(e&1&&(n(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),o(),n(5,"th"),a(6,"Bandera"),o(),n(7,"th"),a(8,"Nombre"),o(),n(9,"th"),a(10,"Capital"),o(),n(11,"th"),a(12,"Poblacion"),o(),n(13,"th"),a(14,"Link"),o()()(),n(15,"tbody"),v(16,W,14,8,"tr",4),o()()),e&2){let c=B();p(16),d("ngForOf",c.countries)}}var z=(()=>{let t=class t{constructor(){this.countries=[]}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover","text-center"],[4,"ngFor","ngForOf"],[3,"src","alt"],["href","#"]],template:function(i,s){if(i&1&&v(0,V,2,0,"div",0)(1,X,17,1,"ng-template",null,1,j),i&2){let x=P(2);d("ngIf",s.countries.length===0)("ngIfElse",x)}},dependencies:[N,k,O],styles:["img[_ngcontent-%COMP%]{width:35px}"]});let e=t;return e})();var L=(()=>{let t=class t{searchByCapital(r){this.service.searchCapital(r).subscribe(i=>{this.countries=i})}constructor(r){this.service=r,this.countries=[]}};t.\u0275fac=function(i){return new(i||t)(I(g))},t.\u0275cmp=m({type:t,selectors:[["countries-by-capital-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital...",3,"searchEvent"],[1,"row","pt-5"],[3,"countries"]],template:function(i,s){i&1&&(n(0,"h2"),a(1,"Por capital"),o(),f(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),T("searchEvent",function(K){return s.searchByCapital(K)}),o()()(),n(6,"div",3)(7,"div",1),f(8,"hr")(9,"countries-table",4),o()()),i&2&&(p(9),d("countries",s.countries))},dependencies:[H,z]});let e=t;return e})();var U=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["countries-by-region-page"]],decls:2,vars:0,template:function(i,s){i&1&&(n(0,"p"),a(1,"by-region-page works!"),o())}});let e=t;return e})();var A=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["countries-by-country-page"]],decls:2,vars:0,template:function(i,s){i&1&&(n(0,"p"),a(1,"by-country-page works!"),o())}});let e=t;return e})();var G=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["countries-country-page"]],decls:2,vars:0,template:function(i,s){i&1&&(n(0,"p"),a(1,"country-page works!"),o())}});let e=t;return e})();var Z=[{path:"by-capital",component:L},{path:"by-region",component:U},{path:"by-country",component:A},{path:"by/:id",component:G},{path:"**",redirectTo:"by-capital"}],J=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=h({type:t}),t.\u0275inj=y({imports:[C.forChild(Z),C]});let e=t;return e})();var Pt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=h({type:t}),t.\u0275inj=y({providers:[g],imports:[R,J,q,$]});let e=t;return e})();export{Pt as CountriesModule};