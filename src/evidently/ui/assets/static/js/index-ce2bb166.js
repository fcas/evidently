import{Q as St,j as x,R as K,z as we,w as le,r as at,U as ot,V as Et,B as ee,E as jt,W as ut,X as kt,Y as Tt,Z as Ot,_ as Ke,H as Ct,p as Lt,q as Rt,T as Te,J as Mt,G as Nt}from"./vendor-86aeac57.js";import{d as Bt}from"./Edit-11ed00d6.js";import{r as Pt,i as Ut}from"./createSvgIcon-7b76ba23.js";import{u as Ye}from"./index-b3429b2b.js";const It=St(x.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");var Ce={},qt=Ut;Object.defineProperty(Ce,"__esModule",{value:!0});var lt=Ce.default=void 0,Wt=qt(Pt()),Ht=x,$t=(0,Wt.default)((0,Ht.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");lt=Ce.default=$t;var ce=e=>e.type==="checkbox",ie=e=>e instanceof Date,O=e=>e==null;const ct=e=>typeof e=="object";var j=e=>!O(e)&&!Array.isArray(e)&&ct(e)&&!ie(e),zt=e=>j(e)&&e.target?ce(e.target)?e.target.checked:e.target.value:e,Gt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Kt=(e,i)=>e.has(Gt(i)),Yt=e=>{const i=e.constructor&&e.constructor.prototype;return j(i)&&i.hasOwnProperty("isPrototypeOf")},Le=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function G(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Le&&(e instanceof Blob||e instanceof FileList))&&(s||j(e)))if(i=s?[]:{},!s&&!Yt(e))i=e;else for(const t in e)e.hasOwnProperty(t)&&(i[t]=G(e[t]));else return e;return i}var fe=e=>Array.isArray(e)?e.filter(Boolean):[],E=e=>e===void 0,d=(e,i,s)=>{if(!i||!j(e))return s;const t=fe(i.split(/[,[\].]+?/)).reduce((o,a)=>O(o)?o:o[a],e);return E(t)||t===e?E(e[i])?s:e[i]:t},X=e=>typeof e=="boolean";const Je={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};K.createContext(null);var Jt=(e,i,s,t=!0)=>{const o={defaultValues:i._defaultValues};for(const a in e)Object.defineProperty(o,a,{get:()=>{const l=a;return i._proxyFormState[l]!==P.all&&(i._proxyFormState[l]=!t||P.all),s&&(s[l]=!0),e[l]}});return o},M=e=>j(e)&&!Object.keys(e).length,Qt=(e,i,s,t)=>{s(e);const{name:o,...a}=e;return M(a)||Object.keys(a).length>=Object.keys(i).length||Object.keys(a).find(l=>i[l]===(!t||P.all))},De=e=>Array.isArray(e)?e:[e];function Xt(e){const i=K.useRef(e);i.current=e,K.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var W=e=>typeof e=="string",Zt=(e,i,s,t,o)=>W(e)?(t&&i.watch.add(e),d(s,e,o)):Array.isArray(e)?e.map(a=>(t&&i.watch.add(a),d(s,a))):(t&&(i.watchAll=!0),s),Re=e=>/^\w*$/.test(e),ft=e=>fe(e.replace(/["|']|\]/g,"").split(/\.|\[/));function V(e,i,s){let t=-1;const o=Re(i)?[i]:ft(i),a=o.length,l=a-1;for(;++t<a;){const g=o[t];let v=s;if(t!==l){const w=e[g];v=j(w)||Array.isArray(w)?w:isNaN(+o[t+1])?{}:[]}e[g]=v,e=e[g]}return e}var dt=(e,i,s,t,o)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[t]:o||!0}}:{};const Oe=(e,i,s)=>{for(const t of s||Object.keys(e)){const o=d(e,t);if(o){const{_f:a,...l}=o;if(a&&i(a.name)){if(a.ref.focus){a.ref.focus();break}else if(a.refs&&a.refs[0].focus){a.refs[0].focus();break}}else j(l)&&Oe(l,i)}}};var Qe=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),Xe=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),er=(e,i,s)=>{const t=fe(d(e,s));return V(t,"root",i[s]),V(e,s,t),e},Me=e=>e.type==="file",Y=e=>typeof e=="function",he=e=>{if(!Le)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},ye=e=>W(e),Ne=e=>e.type==="radio",ge=e=>e instanceof RegExp;const Ze={value:!1,isValid:!1},et={value:!0,isValid:!0};var yt=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!E(e[0].attributes.value)?E(e[0].value)||e[0].value===""?et:{value:e[0].value,isValid:!0}:et:Ze}return Ze};const tt={isValid:!1,value:null};var ht=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,tt):tt;function rt(e,i,s="validate"){if(ye(e)||Array.isArray(e)&&e.every(ye)||X(e)&&!e)return{type:s,message:ye(e)?e:"",ref:i}}var se=e=>j(e)&&!ge(e)?e:{value:e,message:""},st=async(e,i,s,t,o)=>{const{ref:a,refs:l,required:g,maxLength:v,minLength:w,min:N,max:A,pattern:p,validate:U,name:L,valueAsNumber:me,mount:de,disabled:pe}=e._f,m=d(i,L);if(!de||pe)return{};const B=l?l[0]:a,H=_=>{t&&B.reportValidity&&(B.setCustomValidity(X(_)?"":_||""),B.reportValidity())},k={},ne=Ne(a),te=ce(a),be=ne||te,I=(me||Me(a))&&E(a.value)&&E(m)||he(a)&&a.value===""||m===""||Array.isArray(m)&&!m.length,J=dt.bind(null,L,s,k),$=(_,b,D,C=z.maxLength,R=z.minLength)=>{const q=_?b:D;k[L]={type:_?C:R,message:q,ref:a,...J(_?C:R,q)}};if(o?!Array.isArray(m)||!m.length:g&&(!be&&(I||O(m))||X(m)&&!m||te&&!yt(l).isValid||ne&&!ht(l).isValid)){const{value:_,message:b}=ye(g)?{value:!!g,message:g}:se(g);if(_&&(k[L]={type:z.required,message:b,ref:B,...J(z.required,b)},!s))return H(b),k}if(!I&&(!O(N)||!O(A))){let _,b;const D=se(A),C=se(N);if(!O(m)&&!isNaN(m)){const R=a.valueAsNumber||m&&+m;O(D.value)||(_=R>D.value),O(C.value)||(b=R<C.value)}else{const R=a.valueAsDate||new Date(m),q=oe=>new Date(new Date().toDateString()+" "+oe),Q=a.type=="time",ae=a.type=="week";W(D.value)&&m&&(_=Q?q(m)>q(D.value):ae?m>D.value:R>new Date(D.value)),W(C.value)&&m&&(b=Q?q(m)<q(C.value):ae?m<C.value:R<new Date(C.value))}if((_||b)&&($(!!_,D.message,C.message,z.max,z.min),!s))return H(k[L].message),k}if((v||w)&&!I&&(W(m)||o&&Array.isArray(m))){const _=se(v),b=se(w),D=!O(_.value)&&m.length>+_.value,C=!O(b.value)&&m.length<+b.value;if((D||C)&&($(D,_.message,b.message),!s))return H(k[L].message),k}if(p&&!I&&W(m)){const{value:_,message:b}=se(p);if(ge(_)&&!m.match(_)&&(k[L]={type:z.pattern,message:b,ref:a,...J(z.pattern,b)},!s))return H(b),k}if(U){if(Y(U)){const _=await U(m,i),b=rt(_,B);if(b&&(k[L]={...b,...J(z.validate,b.message)},!s))return H(b.message),k}else if(j(U)){let _={};for(const b in U){if(!M(_)&&!s)break;const D=rt(await U[b](m,i),B,b);D&&(_={...D,...J(b,D.message)},H(D.message),s&&(k[L]=_))}if(!M(_)&&(k[L]={ref:B,..._},!s))return k}}return H(!0),k};function tr(e,i){const s=i.slice(0,-1).length;let t=0;for(;t<s;)e=E(e)?t++:e[i[t++]];return e}function rr(e){for(const i in e)if(e.hasOwnProperty(i)&&!E(e[i]))return!1;return!0}function T(e,i){const s=Array.isArray(i)?i:Re(i)?[i]:ft(i),t=s.length===1?e:tr(e,s),o=s.length-1,a=s[o];return t&&delete t[a],o!==0&&(j(t)&&M(t)||Array.isArray(t)&&rr(t))&&T(e,s.slice(0,-1)),e}function Se(){let e=[];return{get observers(){return e},next:o=>{for(const a of e)a.next&&a.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(a=>a!==o)}}),unsubscribe:()=>{e=[]}}}var ve=e=>O(e)||!ct(e);function Z(e,i){if(ve(e)||ve(i))return e===i;if(ie(e)&&ie(i))return e.getTime()===i.getTime();const s=Object.keys(e),t=Object.keys(i);if(s.length!==t.length)return!1;for(const o of s){const a=e[o];if(!t.includes(o))return!1;if(o!=="ref"){const l=i[o];if(ie(a)&&ie(l)||j(a)&&j(l)||Array.isArray(a)&&Array.isArray(l)?!Z(a,l):a!==l)return!1}}return!0}var gt=e=>e.type==="select-multiple",sr=e=>Ne(e)||ce(e),Ee=e=>he(e)&&e.isConnected,vt=e=>{for(const i in e)if(Y(e[i]))return!0;return!1};function xe(e,i={}){const s=Array.isArray(e);if(j(e)||s)for(const t in e)Array.isArray(e[t])||j(e[t])&&!vt(e[t])?(i[t]=Array.isArray(e[t])?[]:{},xe(e[t],i[t])):O(e[t])||(i[t]=!0);return i}function xt(e,i,s){const t=Array.isArray(e);if(j(e)||t)for(const o in e)Array.isArray(e[o])||j(e[o])&&!vt(e[o])?E(i)||ve(s[o])?s[o]=Array.isArray(e[o])?xe(e[o],[]):{...xe(e[o])}:xt(e[o],O(i)?{}:i[o],s[o]):s[o]=!Z(e[o],i[o]);return s}var je=(e,i)=>xt(e,i,xe(i)),mt=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:t})=>E(e)?e:i?e===""?NaN:e&&+e:s&&W(e)?new Date(e):t?t(e):e;function ke(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Me(i)?i.files:Ne(i)?ht(e.refs).value:gt(i)?[...i.selectedOptions].map(({value:s})=>s):ce(i)?yt(e.refs).value:mt(E(i.value)?e.ref.value:i.value,e)}var ir=(e,i,s,t)=>{const o={};for(const a of e){const l=d(i,a);l&&V(o,a,l._f)}return{criteriaMode:s,names:[...e],fields:o,shouldUseNativeValidation:t}},ue=e=>E(e)?e:ge(e)?e.source:j(e)?ge(e.value)?e.value.source:e.value:e,nr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function it(e,i,s){const t=d(e,s);if(t||Re(s))return{error:t,name:s};const o=s.split(".");for(;o.length;){const a=o.join("."),l=d(i,a),g=d(e,a);if(l&&!Array.isArray(l)&&s!==a)return{name:s};if(g&&g.type)return{name:a,error:g};o.pop()}return{name:s}}var ar=(e,i,s,t,o)=>o.isOnAll?!1:!s&&o.isOnTouch?!(i||e):(s?t.isOnBlur:o.isOnBlur)?!e:(s?t.isOnChange:o.isOnChange)?e:!0,or=(e,i)=>!fe(d(e,i)).length&&T(e,i);const ur={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function lr(e={},i){let s={...ur,...e},t={submitCount:0,isDirty:!1,isLoading:Y(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},a=j(s.defaultValues)||j(s.values)?G(s.defaultValues||s.values)||{}:{},l=s.shouldUnregister?{}:G(a),g={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w,N=0;const A={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={values:Se(),array:Se(),state:Se()},U=e.resetOptions&&e.resetOptions.keepDirtyValues,L=Qe(s.mode),me=Qe(s.reValidateMode),de=s.criteriaMode===P.all,pe=r=>n=>{clearTimeout(N),N=setTimeout(r,n)},m=async r=>{if(A.isValid||r){const n=s.resolver?M((await I()).errors):await $(o,!0);n!==t.isValid&&p.state.next({isValid:n})}},B=r=>A.isValidating&&p.state.next({isValidating:r}),H=(r,n=[],u,y,f=!0,c=!0)=>{if(y&&u){if(g.action=!0,c&&Array.isArray(d(o,r))){const h=u(d(o,r),y.argA,y.argB);f&&V(o,r,h)}if(c&&Array.isArray(d(t.errors,r))){const h=u(d(t.errors,r),y.argA,y.argB);f&&V(t.errors,r,h),or(t.errors,r)}if(A.touchedFields&&c&&Array.isArray(d(t.touchedFields,r))){const h=u(d(t.touchedFields,r),y.argA,y.argB);f&&V(t.touchedFields,r,h)}A.dirtyFields&&(t.dirtyFields=je(a,l)),p.state.next({name:r,isDirty:b(r,n),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else V(l,r,n)},k=(r,n)=>{V(t.errors,r,n),p.state.next({errors:t.errors})},ne=(r,n,u,y)=>{const f=d(o,r);if(f){const c=d(l,r,E(u)?d(a,r):u);E(c)||y&&y.defaultChecked||n?V(l,r,n?c:ke(f._f)):R(r,c),g.mount&&m()}},te=(r,n,u,y,f)=>{let c=!1,h=!1;const F={name:r};if(!u||y){A.isDirty&&(h=t.isDirty,t.isDirty=F.isDirty=b(),c=h!==F.isDirty);const S=Z(d(a,r),n);h=d(t.dirtyFields,r),S?T(t.dirtyFields,r):V(t.dirtyFields,r,!0),F.dirtyFields=t.dirtyFields,c=c||A.dirtyFields&&h!==!S}if(u){const S=d(t.touchedFields,r);S||(V(t.touchedFields,r,u),F.touchedFields=t.touchedFields,c=c||A.touchedFields&&S!==u)}return c&&f&&p.state.next(F),c?F:{}},be=(r,n,u,y)=>{const f=d(t.errors,r),c=A.isValid&&X(n)&&t.isValid!==n;if(e.delayError&&u?(w=pe(()=>k(r,u)),w(e.delayError)):(clearTimeout(N),w=null,u?V(t.errors,r,u):T(t.errors,r)),(u?!Z(f,u):f)||!M(y)||c){const h={...y,...c&&X(n)?{isValid:n}:{},errors:t.errors,name:r};t={...t,...h},p.state.next(h)}B(!1)},I=async r=>s.resolver(l,s.context,ir(r||v.mount,o,s.criteriaMode,s.shouldUseNativeValidation)),J=async r=>{const{errors:n}=await I(r);if(r)for(const u of r){const y=d(n,u);y?V(t.errors,u,y):T(t.errors,u)}else t.errors=n;return n},$=async(r,n,u={valid:!0})=>{for(const y in r){const f=r[y];if(f){const{_f:c,...h}=f;if(c){const F=v.array.has(c.name),S=await st(f,l,de,s.shouldUseNativeValidation&&!n,F);if(S[c.name]&&(u.valid=!1,n))break;!n&&(d(S,c.name)?F?er(t.errors,S,c.name):V(t.errors,c.name,S[c.name]):T(t.errors,c.name))}h&&await $(h,n,u)}}return u.valid},_=()=>{for(const r of v.unMount){const n=d(o,r);n&&(n._f.refs?n._f.refs.every(u=>!Ee(u)):!Ee(n._f.ref))&&_e(r)}v.unMount=new Set},b=(r,n)=>(r&&n&&V(l,r,n),!Z(Be(),a)),D=(r,n,u)=>Zt(r,v,{...g.mount?l:E(n)?a:W(r)?{[r]:n}:n},u,n),C=r=>fe(d(g.mount?l:a,r,e.shouldUnregister?d(a,r,[]):[])),R=(r,n,u={})=>{const y=d(o,r);let f=n;if(y){const c=y._f;c&&(!c.disabled&&V(l,r,mt(n,c)),f=he(c.ref)&&O(n)?"":n,gt(c.ref)?[...c.ref.options].forEach(h=>h.selected=f.includes(h.value)):c.refs?ce(c.ref)?c.refs.length>1?c.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(f)?!!f.find(F=>F===h.value):f===h.value)):c.refs[0]&&(c.refs[0].checked=!!f):c.refs.forEach(h=>h.checked=h.value===f):Me(c.ref)?c.ref.value="":(c.ref.value=f,c.ref.type||p.values.next({name:r,values:{...l}})))}(u.shouldDirty||u.shouldTouch)&&te(r,f,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&oe(r)},q=(r,n,u)=>{for(const y in n){const f=n[y],c=`${r}.${y}`,h=d(o,c);(v.array.has(r)||!ve(f)||h&&!h._f)&&!ie(f)?q(c,f,u):R(c,f,u)}},Q=(r,n,u={})=>{const y=d(o,r),f=v.array.has(r),c=G(n);V(l,r,c),f?(p.array.next({name:r,values:{...l}}),(A.isDirty||A.dirtyFields)&&u.shouldDirty&&p.state.next({name:r,dirtyFields:je(a,l),isDirty:b(r,c)})):y&&!y._f&&!O(c)?q(r,c,u):R(r,c,u),Xe(r,v)&&p.state.next({...t}),p.values.next({name:r,values:{...l}}),!g.mount&&i()},ae=async r=>{const n=r.target;let u=n.name,y=!0;const f=d(o,u),c=()=>n.type?ke(f._f):zt(r);if(f){let h,F;const S=c(),re=r.type===Je.BLUR||r.type===Je.FOCUS_OUT,Ft=!nr(f._f)&&!s.resolver&&!d(t.errors,u)&&!f._f.deps||ar(re,d(t.touchedFields,u),t.isSubmitted,me,L),Ae=Xe(u,v,re);V(l,u,S),re?(f._f.onBlur&&f._f.onBlur(r),w&&w(0)):f._f.onChange&&f._f.onChange(r);const Fe=te(u,S,re,!1),wt=!M(Fe)||Ae;if(!re&&p.values.next({name:u,type:r.type,values:{...l}}),Ft)return A.isValid&&m(),wt&&p.state.next({name:u,...Ae?{}:Fe});if(!re&&Ae&&p.state.next({...t}),B(!0),s.resolver){const{errors:ze}=await I([u]),Dt=it(t.errors,o,u),Ge=it(ze,o,Dt.name||u);h=Ge.error,u=Ge.name,F=M(ze)}else h=(await st(f,l,de,s.shouldUseNativeValidation))[u],y=Number.isNaN(S)||S===d(l,u,S),y&&(h?F=!1:A.isValid&&(F=await $(o,!0)));y&&(f._f.deps&&oe(f._f.deps),be(u,F,h,Fe))}},oe=async(r,n={})=>{let u,y;const f=De(r);if(B(!0),s.resolver){const c=await J(E(r)?r:f);u=M(c),y=r?!f.some(h=>d(c,h)):u}else r?(y=(await Promise.all(f.map(async c=>{const h=d(o,c);return await $(h&&h._f?{[c]:h}:h)}))).every(Boolean),!(!y&&!t.isValid)&&m()):y=u=await $(o);return p.state.next({...!W(r)||A.isValid&&u!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:u}:{},errors:t.errors,isValidating:!1}),n.shouldFocus&&!y&&Oe(o,c=>c&&d(t.errors,c),r?f:v.mount),y},Be=r=>{const n={...a,...g.mount?l:{}};return E(r)?n:W(r)?d(n,r):r.map(u=>d(n,u))},Pe=(r,n)=>({invalid:!!d((n||t).errors,r),isDirty:!!d((n||t).dirtyFields,r),isTouched:!!d((n||t).touchedFields,r),error:d((n||t).errors,r)}),_t=r=>{r&&De(r).forEach(n=>T(t.errors,n)),p.state.next({errors:r?t.errors:{}})},Ue=(r,n,u)=>{const y=(d(o,r,{_f:{}})._f||{}).ref;V(t.errors,r,{...n,ref:y}),p.state.next({name:r,errors:t.errors,isValid:!1}),u&&u.shouldFocus&&y&&y.focus&&y.focus()},Vt=(r,n)=>Y(r)?p.values.subscribe({next:u=>r(D(void 0,n),u)}):D(r,n,!0),_e=(r,n={})=>{for(const u of r?De(r):v.mount)v.mount.delete(u),v.array.delete(u),n.keepValue||(T(o,u),T(l,u)),!n.keepError&&T(t.errors,u),!n.keepDirty&&T(t.dirtyFields,u),!n.keepTouched&&T(t.touchedFields,u),!s.shouldUnregister&&!n.keepDefaultValue&&T(a,u);p.values.next({values:{...l}}),p.state.next({...t,...n.keepDirty?{isDirty:b()}:{}}),!n.keepIsValid&&m()},Ie=({disabled:r,name:n,field:u,fields:y})=>{if(X(r)){const f=r?void 0:d(l,n,ke(u?u._f:d(y,n)._f));V(l,n,f),te(n,f,!1,!1,!0)}},Ve=(r,n={})=>{let u=d(o,r);const y=X(n.disabled);return V(o,r,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:r}},name:r,mount:!0,...n}}),v.mount.add(r),u?Ie({field:u,disabled:n.disabled,name:r}):ne(r,!0,n.value),{...y?{disabled:n.disabled}:{},...s.progressive?{required:!!n.required,min:ue(n.min),max:ue(n.max),minLength:ue(n.minLength),maxLength:ue(n.maxLength),pattern:ue(n.pattern)}:{},name:r,onChange:ae,onBlur:ae,ref:f=>{if(f){Ve(r,n),u=d(o,r);const c=E(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,h=sr(c),F=u._f.refs||[];if(h?F.find(S=>S===c):c===u._f.ref)return;V(o,r,{_f:{...u._f,...h?{refs:[...F.filter(Ee),c,...Array.isArray(d(a,r))?[{}]:[]],ref:{type:c.type,name:r}}:{ref:c}}}),ne(r,!1,void 0,c)}else u=d(o,r,{}),u._f&&(u._f.mount=!1),(s.shouldUnregister||n.shouldUnregister)&&!(Kt(v.array,r)&&g.action)&&v.unMount.add(r)}}},qe=()=>s.shouldFocusError&&Oe(o,r=>r&&d(t.errors,r),v.mount),We=(r,n)=>async u=>{u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let y=G(l);if(p.state.next({isSubmitting:!0}),s.resolver){const{errors:f,values:c}=await I();t.errors=f,y=c}else await $(o);T(t.errors,"root"),M(t.errors)?(p.state.next({errors:{}}),await r(y,u)):(n&&await n({...t.errors},u),qe(),setTimeout(qe)),p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:M(t.errors),submitCount:t.submitCount+1,errors:t.errors})},At=(r,n={})=>{d(o,r)&&(E(n.defaultValue)?Q(r,d(a,r)):(Q(r,n.defaultValue),V(a,r,n.defaultValue)),n.keepTouched||T(t.touchedFields,r),n.keepDirty||(T(t.dirtyFields,r),t.isDirty=n.defaultValue?b(r,d(a,r)):b()),n.keepError||(T(t.errors,r),A.isValid&&m()),p.state.next({...t}))},He=(r,n={})=>{const u=r?G(r):a,y=G(u),f=r&&!M(r)?y:a;if(n.keepDefaultValues||(a=u),!n.keepValues){if(n.keepDirtyValues||U)for(const c of v.mount)d(t.dirtyFields,c)?V(f,c,d(l,c)):Q(c,d(f,c));else{if(Le&&E(r))for(const c of v.mount){const h=d(o,c);if(h&&h._f){const F=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(he(F)){const S=F.closest("form");if(S){S.reset();break}}}}o={}}l=e.shouldUnregister?n.keepDefaultValues?G(a):{}:G(f),p.array.next({values:{...f}}),p.values.next({values:{...f}})}v={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!g.mount&&i(),g.mount=!A.isValid||!!n.keepIsValid,g.watch=!!e.shouldUnregister,p.state.next({submitCount:n.keepSubmitCount?t.submitCount:0,isDirty:n.keepDirty?t.isDirty:!!(n.keepDefaultValues&&!Z(r,a)),isSubmitted:n.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:n.keepDirtyValues?t.dirtyFields:n.keepDefaultValues&&r?je(a,r):{},touchedFields:n.keepTouched?t.touchedFields:{},errors:n.keepErrors?t.errors:{},isSubmitSuccessful:n.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},$e=(r,n)=>He(Y(r)?r(l):r,n);return{control:{register:Ve,unregister:_e,getFieldState:Pe,handleSubmit:We,setError:Ue,_executeSchema:I,_getWatch:D,_getDirty:b,_updateValid:m,_removeUnmounted:_,_updateFieldArray:H,_updateDisabledField:Ie,_getFieldArray:C,_reset:He,_resetDefaultValues:()=>Y(s.defaultValues)&&s.defaultValues().then(r=>{$e(r,s.resetOptions),p.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:p,_proxyFormState:A,get _fields(){return o},get _formValues(){return l},get _state(){return g},set _state(r){g=r},get _defaultValues(){return a},get _names(){return v},set _names(r){v=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:oe,register:Ve,handleSubmit:We,watch:Vt,setValue:Q,getValues:Be,reset:$e,resetField:At,clearErrors:_t,unregister:_e,setError:Ue,setFocus:(r,n={})=>{const u=d(o,r),y=u&&u._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),n.shouldSelect&&f.select())}},getFieldState:Pe}}function cr(e={}){const i=K.useRef(),s=K.useRef(),[t,o]=K.useState({isDirty:!1,isValidating:!1,isLoading:Y(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Y(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...lr(e,()=>o(l=>({...l}))),formState:t});const a=i.current.control;return a._options=e,Xt({subject:a._subjects.state,next:l=>{Qt(l,a._proxyFormState,a._updateFormState,!0)&&o({...a._formState})}}),K.useEffect(()=>{e.values&&!Z(e.values,s.current)?(a._reset(e.values,a._options.resetOptions),s.current=e.values):a._resetDefaultValues()},[e.values,a]),K.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),i.current.formState=Jt(t,a),i.current}var nt=function(e,i,s){if(e&&"reportValidity"in e){var t=d(s,i);e.setCustomValidity(t&&t.message||""),e.reportValidity()}},pt=function(e,i){var s=function(o){var a=i.fields[o];a&&a.ref&&"reportValidity"in a.ref?nt(a.ref,o,e):a.refs&&a.refs.forEach(function(l){return nt(l,o,e)})};for(var t in i.fields)s(t)},fr=function(e,i){i.shouldUseNativeValidation&&pt(e,i);var s={};for(var t in e){var o=d(i.fields,t),a=Object.assign(e[t]||{},{ref:o&&o.ref});if(yr(i.names||Object.keys(e),t)){var l=Object.assign({},dr(d(s,t)));V(l,"root",a),V(s,t,l)}else V(s,t,a)}return s},dr=function(e){return Array.isArray(e)?e.filter(Boolean):[]},yr=function(e,i){return e.some(function(s){return s.startsWith(i+".")})},hr=function(e,i){for(var s={};e.length;){var t=e[0],o=t.code,a=t.message,l=t.path.join(".");if(!s[l])if("unionErrors"in t){var g=t.unionErrors[0].errors[0];s[l]={message:g.message,type:g.code}}else s[l]={message:a,type:o};if("unionErrors"in t&&t.unionErrors.forEach(function(N){return N.errors.forEach(function(A){return e.push(A)})}),i){var v=s[l].types,w=v&&v[t.code];s[l]=dt(l,i,s,o,w?[].concat(w,t.message):t.message)}e.shift()}return s},gr=function(e,i,s){return s===void 0&&(s={}),function(t,o,a){try{return Promise.resolve(function(l,g){try{var v=Promise.resolve(e[s.mode==="sync"?"parse":"parseAsync"](t,i)).then(function(w){return a.shouldUseNativeValidation&&pt({},a),{errors:{},values:s.raw?t:w}})}catch(w){return g(w)}return v&&v.then?v.then(void 0,g):v}(0,function(l){if(function(g){return g.errors!=null}(l))return{values:{},errors:fr(hr(l.errors,!a.shouldUseNativeValidation&&a.criteriaMode==="all"),a)};throw l}))}catch(l){return Promise.reject(l)}}};const vr=we.object({name:we.string().min(3),description:we.string()}),bt=({project:e,disabled:i,action:s})=>{var N,A;const{setFocus:t,register:o,handleSubmit:a,formState:{errors:l,dirtyFields:g}}=cr({resolver:gr(vr),defaultValues:{name:e.name||"",description:e.description||""}}),{palette:v}=Tt(),w=ot();return le.useEffect(()=>t("name"),[t]),x.jsx(x.Fragment,{children:x.jsxs(Ot,{onSubmit:a(({name:p,description:U})=>w(Object.assign({...e,name:p,description:U},s&&{action:s}||null),{method:"put",replace:!0,encType:"application/json"})),style:{opacity:i?.5:1},children:[x.jsx(Ke,{...o("name"),error:!!l.name,helperText:(N=l.name)==null?void 0:N.message,placeholder:"Name",InputProps:{style:{color:v.primary.main,fontSize:"20px",fontWeight:"500"}},disabled:i,variant:"standard"}),x.jsx(Ke,{...o("description"),error:!!l.description,helperText:(A=l.description)==null?void 0:A.message,placeholder:"Description",disabled:i,fullWidth:!0,variant:"standard"}),x.jsx(ee,{sx:{display:"flex",justifyContent:"right"},children:x.jsx(Ct,{variant:"outlined",disabled:i||Object.keys(g).length===0||Object.keys(l).length>0,style:{marginTop:"10px"},color:"primary",type:"submit",children:"Save"})})]})})},xr=({project:e})=>x.jsxs(x.Fragment,{children:[x.jsx(Lt,{component:Rt,to:`projects/${e.id}`,children:x.jsx(Te,{variant:"h6",children:e.name})}),x.jsx(Te,{style:{whiteSpace:"pre-line"},variant:"body1",children:e.description})]}),mr=({project:e,children:i})=>{const[s,t]=le.useState(!1),a=at().state!=="idle",l=ot();return le.useEffect(()=>t(!1),[e]),x.jsxs(Et,{sx:{m:1,p:2,position:"relative","&:hover .action-buttons":{opacity:1}},children:[x.jsx(ee,{style:{position:"absolute",top:"5px",right:"5px"},children:x.jsxs(ee,{sx:{opacity:0,transition:g=>g.transitions.create("opacity",{duration:g.transitions.duration.enteringScreen})},className:"action-buttons",display:"flex",columnGap:1,children:[x.jsx(jt,{disabled:a||s,onClick:()=>{confirm("Are you sure you want to delete this project?")===!0&&l({projectId:e.id,action:"delete-project"},{method:"post",replace:!0,encType:"application/json"})},children:x.jsx(lt,{})}),x.jsx(ut,{color:"primary",value:"edit-mode",selected:s,size:"small",disabled:a,sx:{border:"none",borderRadius:"50%"},onChange:()=>t(g=>!g),children:x.jsx(Bt,{})})]})}),i,s?x.jsx(bt,{project:e,disabled:a}):x.jsx(xr,{project:e})]})},pr=({project:e,children:i})=>{const[s,t]=Ye(!1),[o,a]=Ye(!1),l=at(),g=l.state!=="idle";return le.useEffect(()=>{l.state==="submitting"&&a(!0)},[l.state==="submitting"]),le.useEffect(()=>{o&&l.state==="idle"&&(t(!1),a(!1))},[o,l.state==="idle"]),x.jsxs(ee,{py:2,children:[x.jsx(ee,{display:"flex",justifyContent:"center",children:x.jsx(kt,{title:"Create new project",children:x.jsx(ut,{disabled:g,color:"primary",value:"check",selected:s,size:"small",sx:{border:"none",borderRadius:"50%"},onChange:()=>t(),children:x.jsx(It,{})})})}),s&&x.jsxs(ee,{p:3,display:"flex",flexDirection:"column",rowGap:1,children:[i,x.jsx(bt,{project:e||{name:"",description:""},disabled:g,action:"create-new-project"})]})]})},Sr=()=>{const e=Mt();return x.jsxs(x.Fragment,{children:[x.jsx(Te,{align:"center",variant:"h5",children:e.length>0?"Project List":"You don't have any projects yet"}),x.jsxs(ee,{m:"auto",mt:2,maxWidth:600,children:[x.jsx(pr,{}),x.jsx(Nt,{container:!0,direction:"column",justifyContent:"center",alignItems:"stretch",children:e.map(i=>x.jsx(K.Fragment,{children:x.jsx(mr,{project:i})},i.id))})]})]})};export{Sr as Component};
