import{n as f,j as t,B as l,o as x,p as c,q as h,r as v,s as m,t as g,v as j,w as y,x as O,y as _,T as w,E as P,H as B,J as R,K as b,O as D}from"./vendor-DMhv4npf.js";import{r as M,i as q}from"./createSvgIcon-DHrHUqT_.js";const H=e=>{var s;return typeof((s=e==null?void 0:e.handle)==null?void 0:s.crumb)=="function"},I=()=>{const s=f().filter(H).map(({handle:r,data:a,id:o,pathname:n,params:i})=>r.crumb(a,{id:o,pathname:n,params:i}));return t.jsx(l,{children:t.jsx(x,{"aria-label":"breadcrumb",children:s.map(r=>t.jsx(c,{component:h,color:"inherit",to:r.to,children:r.linkText},r.to))})})},T=()=>{const e=v(),s=m(),{state:r}=g();return e.state!=="idle"||s.some(({state:o})=>o!=="idle")||r!=="idle"?t.jsx(l,{width:1,sx:{position:"fixed",top:0,left:0,zIndex:99999},children:t.jsx(j,{sx:{height:"3px"}})}):null};var u={},C=q;Object.defineProperty(u,"__esModule",{value:!0});var p=u.default=void 0;W(y);var N=C(M()),S=t;function d(e){if(typeof WeakMap!="function")return null;var s=new WeakMap,r=new WeakMap;return(d=function(a){return a?r:s})(e)}function W(e,s){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=d(s);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)){var i=o?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(a,n,i):a[n]=e[n]}return a.default=e,r&&r.set(e,a),a}var E=(0,N.default)((0,S.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");p=u.default=E;function L({version:e,authComponent:s,logoSrc:r}){return t.jsx(t.Fragment,{children:t.jsx(O,{position:"static",color:"transparent",children:t.jsxs(_,{children:[t.jsxs(w,{variant:"h6",sx:{flexGrow:1},children:[t.jsx("img",{src:r,height:"55px"}),t.jsx("span",{style:{verticalAlign:"super",fontSize:"0.75rem"},children:e})]}),s,t.jsx(c,{href:"https://github.com/evidentlyai/evidently",children:t.jsx(P,{children:t.jsx(p,{})})}),t.jsx(c,{href:"https://docs.evidentlyai.com/",children:t.jsx(B,{children:"Docs"})})]})})})}const G=({logoSrc:e,authComponent:s})=>{const{version:r}=R();return t.jsxs(t.Fragment,{children:[t.jsx(L,{authComponent:s,version:r,logoSrc:e}),t.jsx(T,{}),t.jsx(b,{}),t.jsxs(l,{p:3,children:[t.jsx(I,{}),t.jsx(D,{})]})]})},k={crumb:()=>({to:"/",linkText:"Home"})};export{G as HomeComponentTemplate,k as handle};
