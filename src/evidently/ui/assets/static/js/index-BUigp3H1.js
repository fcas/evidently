const __vite__fileDeps=["static/js/index-EGHEjhT4.js","static/js/vendor-DMhv4npf.js","static/js/createSvgIcon-DHrHUqT_.js","static/js/index-Bhm_czZ5.js","static/js/DashboardWidgets-l2SgSweo.js","static/js/DashboardContent-Bq_88EJR.js","static/js/Edit-DQf_uTMw.js","static/js/index-DmnjlZof.js","static/js/index-CMUlmG0y.js","static/js/index-COlEUV-A.js","static/js/ContentCopy-4v12Uflg.js","static/css/index-C5isHALn.css","static/js/index-ogtuiEPx.js","static/js/index-BIUFRNE3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var F=Object.defineProperty;var N=(t,e,r)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var I=(t,e,r)=>(N(t,typeof e!="symbol"?e+"":e,r),r);import{c as L,g as j,u as V,j as s,A,a as M,i as U,T as k,b as g,L as z,d as H,G as $,F as W,I as G,S as J,M as f,B as O,D as R,C as q,e as Q,f as T,z as b,h as Y,k as K,R as X,l as Z,m as ee}from"./vendor-DMhv4npf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const{transitions:_}=L(),y="#ed0500",te="#ded5d5",re=L({shape:{borderRadius:5},palette:{primary:{main:j[900],light:j[200]},secondary:{main:y,dark:"#c10400",light:j[200]},background:{default:"white",paper:"white"}},components:{MuiLink:{styleOverrides:{root:{transition:_.create("color",{duration:_.duration.enteringScreen}),"&:hover":{color:y}}}},MuiTabs:{styleOverrides:{flexContainer:{gap:"10px"},indicator:{backgroundColor:y}}},MuiButton:{styleOverrides:{contained:{"&:hover":{background:j[800]}},outlined:{"&:hover":{color:y,borderColor:y,background:"white"}},text:{"&:hover":{color:y,borderColor:y}}}},MuiTab:{defaultProps:{color:"secondary"},styleOverrides:{root:{fontSize:"1rem",borderRadius:"5px","&:hover":{background:j[200]}}}},MuiIconButton:{styleOverrides:{root:{transition:_.create("color",{duration:_.duration.enteringScreen}),color:j[900],"&:hover":{color:y}}}},MuiSwitch:{defaultProps:{color:"secondary"}},MuiToggleButton:{defaultProps:{color:"secondary"},styleOverrides:{root:{transition:_.create("color",{duration:_.duration.enteringScreen}),color:j[900],"&:hover":{color:y},"&.Mui-disabled":{border:"unset",background:j[100]}}}},MuiToggleButtonGroup:{defaultProps:{color:"secondary"}},MuiLinearProgress:{defaultProps:{color:"secondary"}},MuiPaper:{styleOverrides:{root:{boxShadow:"unset",border:"1px solid",borderColor:te}}}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),button:{fontWeight:"bold",textTransform:"none"}}}),v=()=>{var e;const t=V();return s.jsxs(A,{severity:"error",children:[s.jsx(M,{children:"Something went wrong"}),U(t)&&s.jsxs(s.Fragment,{children:[s.jsx(k,{fontWeight:"bold",children:[`Status: ${t.status}`,typeof((e=t.data)==null?void 0:e.detail)=="string"&&t.data.detail].filter(Boolean).join(", ")}),typeof t.data=="string"&&s.jsx(k,{children:t.data})]}),typeof t=="string"&&s.jsx(k,{fontWeight:"bold",children:t})]})},se="modulepreload",oe=function(t){return"/"+t},C={},w=function(e,r,i){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),a=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));o=Promise.all(r.map(c=>{if(c=oe(c),c in C)return;C[c]=!0;const d=c.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":se,d||(m.as="script",m.crossOrigin=""),m.href=c,a&&m.setAttribute("nonce",a),document.head.appendChild(m),d)return new Promise((E,D)=>{m.addEventListener("load",E),m.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${c}`)))})}))}return o.then(()=>e()).catch(n=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n})},ne=({api:t})=>({loader:()=>t.getVersion()});class x{constructor(){I(this,"at",0);I(this,"ch","");I(this,"text","");I(this,"escapee",{'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"})}error(e){throw{name:"SyntaxError",message:e,at:this.at,text:this.text}}next(){return this.ch=this.text.charAt(this.at++)}check(e){e!==this.ch&&this.error(`Expected '${e}' instead of '${this.ch}'`),this.ch=this.text.charAt(this.at++)}number(){var e="";if(this.ch==="-"&&(e="-",this.check("-")),this.ch==="I")return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),-1/0;for(;this.ch>="0"&&this.ch<="9";)e+=this.ch,this.next();if(this.ch===".")for(e+=".";this.next()&&this.ch>="0"&&this.ch<="9";)e+=this.ch;if(this.ch==="e"||this.ch==="E")for(e+=this.ch,this.next(),(this.ch==="-"||this.ch==="+")&&(e+=this.ch,this.next());this.ch>="0"&&this.ch<="9";)e+=this.ch,this.next();return+e}string(){var e,r,i="",o;if(this.ch==='"')for(;this.next();){if(this.ch==='"')return this.next(),i;if(this.ch==="\\")if(this.next(),this.ch==="u"){for(o=0,r=0;r<4&&(e=parseInt(this.next(),16),!!isFinite(e));r++)o=o*16+e;i+=String.fromCharCode(o)}else if(this.escapee[this.ch])i+=this.escapee[this.ch];else break;else i+=this.ch}this.error("Bad string")}white(){for(;this.ch&&this.ch<=" ";)this.next()}word(){switch(this.ch){case"t":return this.check("t"),this.check("r"),this.check("u"),this.check("e"),!0;case"f":return this.check("f"),this.check("a"),this.check("l"),this.check("s"),this.check("e"),!1;case"n":return this.check("n"),this.check("u"),this.check("l"),this.check("l"),null;case"N":return this.check("N"),this.check("a"),this.check("N"),NaN;case"I":return this.check("I"),this.check("n"),this.check("f"),this.check("i"),this.check("n"),this.check("i"),this.check("t"),this.check("y"),1/0}this.error("Unexpected '"+this.ch+"'")}array(){var e=[];if(this.ch==="["){if(this.check("["),this.white(),this.ch==="]")return this.check("]"),e;for(;this.ch;){if(e.push(this.value()),this.white(),this.ch==="]")return this.check("]"),e;this.check(","),this.white()}}this.error("Bad array")}object(){var e,r={};if(this.ch==="{"){if(this.check("{"),this.white(),this.ch==="}")return this.check("}"),r;for(;this.ch;){if(e=this.string(),this.white(),this.check(":"),Object.hasOwnProperty.call(r,e)&&this.error('Duplicate key "'+e+'"'),r[e]=this.value(),this.white(),this.ch==="}")return this.check("}"),r;this.check(","),this.white()}}this.error("Bad object")}value(){switch(this.white(),this.ch){case"{":return this.object();case"[":return this.array();case'"':return this.string();case"-":return this.number();default:return this.ch>="0"&&this.ch<="9"?this.number():this.word()}}parse(e,r){let i;return this.text=e,this.at=0,this.ch=" ",i=this.value(),this.white(),this.ch&&this.error("Syntax error"),r!==void 0?function o(n,a){var c,d,h=n[a];if(h&&typeof h=="object")for(c in h)Object.prototype.hasOwnProperty.call(h,c)&&(d=o(h,c),d!==void 0?h[c]=d:delete h[c]);return r.call(n,a,h)}({"":i},""):i}}async function u(...t){const e=await fetch(...t);if(!e.ok&&e.status>=400)throw e;return e}class ie{constructor(e){I(this,"endpoint");this.endpoint=e}async getAdditionalGraphData(e,r,i){const o=await u(`${this.endpoint}/projects/${e}/${r}/graphs_data/${i}`);return new x().parse(await o.text())}async getAdditionalWidgetData(e,r,i){const o=await u(`${this.endpoint}/projects/${e}/${r}/graphs_data/${i}`);return new x().parse(await o.text())}async getDashboard(e,r){const i=await u(`${this.endpoint}/projects/${e}/${r}/data`);return new x().parse(await i.text())}async getProjects(){const e=await u(`${this.endpoint}/projects`);return new x().parse(await e.text())}async getProjectDashboard(e,r,i){const o=new URLSearchParams;r&&o.append("timestamp_start",r),i&&o.append("timestamp_end",i);const n=await u(`${this.endpoint}/projects/${e}/dashboard?${o.toString()}`);return new x().parse(await n.text())}async getReports(e){const r=await u(`${this.endpoint}/projects/${e}/reports`);return new x().parse(await r.text())}async getTestSuites(e){const r=await u(`${this.endpoint}/projects/${e}/test_suites`);return new x().parse(await r.text())}async getProjectInfo(e){const r=await u(`${this.endpoint}/projects/${e}/info`);return new x().parse(await r.text())}async getVersion(){return(await u(`${this.endpoint}/version`)).json()}async editProjectInfo(e){return u(`${this.endpoint}/projects/${e.id}/info`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}async reloadProject(e){return u(`${this.endpoint}/projects/${e}/reload`)}async createProject(e){const r=new URLSearchParams;return e.team_id&&r.append("team_id",e.team_id),(await u(`${this.endpoint}/projects?${r.toString()}`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}async deleteProject(e){return u(`${this.endpoint}/projects/${e}`,{method:"delete"})}}const P=new ie("/api"),ae="/static/img/logo.png",{loader:ce}=ne({api:P}),he={path:"/",lazy:async()=>{const{HomeComponentTemplate:t,...e}=await w(()=>import("./index-EGHEjhT4.js"),__vite__mapDeps([0,1,2]));return{Component:()=>s.jsx(t,{logoSrc:ae}),...e}},loader:ce,ErrorBoundary:v},de=({api:t})=>({loader:({params:e})=>{const{projectId:r}=e;return g(r),t.getProjectInfo(r)}}),le=t=>{if(t.headers.get("Content-type")!=="application/json")throw new Response("Unsupported Media Type",{status:415})};function S(t){return typeof t!=typeof new Date?(console.log(`not a date ${typeof t}: ${t}`),t):`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}T${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}`}const l={FROM:"date_from",TO:"date_to"},ue=t=>{let e=t.get(l.FROM),r=t.get(l.TO);return{date_from:e,date_to:r}},pe=({dataRanges:t})=>{const[e,r]=Q(),{date_from:i,date_to:o}=ue(e),n=T(i||t.minDate),a=T(o||t.maxDate);return{isCorrectTimeInterval:n.isValid()&&a.isValid()&&(n.isSame(a)||n.isBefore(a)),date_from:n,date_to:a,setSearchParams:r}},Ve=({dataRanges:t})=>{const{isCorrectTimeInterval:e,date_from:r,date_to:i,setSearchParams:o}=pe({dataRanges:t}),n=e?"":"incorrect time interval",a=c=>d=>{o(h=>(h.delete(c),d&&h.append(c,S(d.toDate())),h),{preventScrollReset:!0,replace:!0})};return s.jsx(z,{dateAdapter:H,adapterLocale:"en-gb",children:s.jsxs($,{container:!0,padding:1,zIndex:1,gap:2,justifyContent:"flex-end",justifyItems:"center",children:[s.jsx($,{item:!0,xs:12,md:2,children:s.jsxs(W,{fullWidth:!0,children:[s.jsx(G,{children:"Period"}),s.jsxs(J,{variant:"standard",defaultValue:"",onChange:c=>{const[d,h]=c.target.value.split(",");if(d===""){o(p=>(p.delete(l.FROM),p.delete(l.TO),p.append(l.FROM,S(t.minDate.toDate())),p.append(l.TO,S(t.maxDate.toDate())),p),{preventScrollReset:!0,replace:!0});return}const[m,E]=[Number(d),h],D=t.maxDate.subtract(m,E);o(p=>(p.delete(l.FROM),p.delete(l.TO),p.append(l.FROM,S(D.isBefore(t.minDate)?t.minDate.toDate():D.toDate())),p.append(l.TO,S(t.maxDate.toDate())),p),{preventScrollReset:!0,replace:!0})},children:[s.jsx(f,{value:"",children:s.jsx("em",{children:"None"})}),s.jsx(f,{value:"10,minutes",children:"Last 10 Minutes"}),s.jsx(f,{value:"30,minutes",children:"Last 30 Minutes"}),s.jsx(f,{value:"1,hours",children:"Last 1 Hours"}),s.jsx(f,{value:"2,hours",children:"Last 2 Hours"}),s.jsx(f,{value:"8,hours",children:"Last 8 Hours"}),s.jsx(f,{value:"24,hours",children:"Last 24 Hours"}),s.jsx(f,{value:"7,days",children:"Last 7 Days"}),s.jsx(f,{value:"14,days",children:"Last 14 Days"}),s.jsx(f,{value:"28,days",children:"Last 28 Days"}),s.jsx(f,{value:"60,days",children:"Last 60 Days"})]})]})}),s.jsx($,{item:!0,children:s.jsxs(O,{display:"flex",alignItems:"center",gap:2,children:[s.jsx(R,{minDate:t.minDate,maxDate:t.maxDate&&i,slotProps:{textField:{variant:"standard"}},label:"From",value:r,onChange:a(l.FROM)}),s.jsx(O,{height:1,display:"flex",alignItems:"center",children:s.jsx(k,{children:" - "})}),s.jsx(R,{minDate:t.minDate&&r,maxDate:t.maxDate,slotProps:{textField:{variant:"standard"}},label:"To",value:i,onChange:a(l.TO)})]})}),s.jsx($,{item:!0,xs:12,children:s.jsx(q,{unmountOnExit:!0,in:!e,children:s.jsxs(A,{severity:"error",children:[s.jsx(M,{children:"Error"}),n]})})})]})})},fe=({api:t})=>({loader:({params:e,request:r})=>{g(e.projectId);const{searchParams:i}=new URL(r.url);let o=i.get(l.FROM),n=i.get(l.TO);return o&&!T(o).isValid()&&(o=null),n&&!T(n).isValid()&&(n=null),t.getProjectDashboard(e.projectId,o,n)}}),{loader:me}=fe({api:P}),ye={index:!0,id:"dashboard",lazy:async()=>{const[{DashboardComponentTemplate:t},{DashboardWidgets:e}]=await Promise.all([w(()=>import("./index-Bhm_czZ5.js"),__vite__mapDeps([3,1])),w(()=>import("./DashboardWidgets-l2SgSweo.js"),__vite__mapDeps([4,1,5,2,6]))]);return{Component:()=>s.jsx(t,{Dashboard:({data:{widgets:r}})=>s.jsx(e,{widgets:r})})}},loader:me,ErrorBoundary:v},je=({api:t})=>({loader:({params:e})=>(g(e.projectId),e.snapshotId?Promise.resolve([]):t.getReports(e.projectId)),action:async({params:e})=>(g(e.projectId),t.reloadProject(e.projectId))}),xe=({api:t})=>({loader:({params:e})=>(g(e.projectId),e.snapshotId?Promise.resolve([]):t.getTestSuites(e.projectId)),action:async({params:e})=>(g(e.projectId),t.reloadProject(e.projectId))}),ge=({api:t})=>({loader:({params:e})=>{const{projectId:r,snapshotId:i}=e;return g(r),g(i),t.getDashboard(r,i)}}),{loader:we}=ge({api:P}),B={path:":snapshotId",lazy:async()=>{const{SnapshotTemplate:t,...e}=await w(()=>import("./index-DmnjlZof.js"),__vite__mapDeps([7,1,5,2,6]));return{Component:()=>s.jsx(t,{api:P}),...e}},loader:we,ErrorBoundary:v},{loader:ve,action:Pe}=je({api:P}),be={id:"reports",path:"reports",lazy:async()=>{const{SnapshotsListTemplate:t,...e}=await w(()=>import("./index-CMUlmG0y.js"),__vite__mapDeps([8,1,9,10,2,11]));return{...e,Component:()=>s.jsx(t,{type:"reports"})}},loader:ve,action:Pe,ErrorBoundary:v,children:[B]},{loader:Ie,action:_e}=xe({api:P}),Se={id:"test_suites",path:"test-suites",lazy:async()=>{const{SnapshotsListTemplate:t,...e}=await w(()=>import("./index-CMUlmG0y.js"),__vite__mapDeps([8,1,9,10,2,11]));return{...e,Component:()=>s.jsx(t,{type:"test suites"})}},loader:Ie,action:_e,ErrorBoundary:v,children:[B]},{loader:ke}=de({api:P}),De={path:"projects/:projectId",lazy:()=>w(()=>import("./index-ogtuiEPx.js"),__vite__mapDeps([12,1,10,2])),loader:ke,ErrorBoundary:v,children:[ye,be,Se]},$e=b.object({action:b.literal("edit-project")}),Te=b.object({action:b.literal("create-new-project")}),Ee=b.object({action:b.literal("delete-project"),projectId:b.string().uuid()}),Oe=({api:t})=>({loader:()=>t.getProjects(),action:async({request:e})=>{le(e);const r=await e.json();if(Te.safeParse(r).success)return t.createProject(r);const i=Ee.safeParse(r);if(i.success)return t.deleteProject(i.data.projectId);if($e.safeParse(r).success)return t.editProjectInfo(r);throw"Undefined action"}}),{loader:Re,action:Ce}=Oe({api:P}),Le={index:!0,lazy:()=>w(()=>import("./index-BIUFRNE3.js"),__vite__mapDeps([13,1,6,2,9])),loader:Re,action:Ce,ErrorBoundary:v},Ae={path:"*",Component:()=>s.jsx(O,{display:"flex",justifyContent:"center",children:s.jsx(k,{variant:"h4",children:"Page Not Found"})})},Me={...he,children:[Le,De,Ae],ErrorBoundary:v},Be=Y([Me]);K.createRoot(document.getElementById("root")).render(s.jsx(X.StrictMode,{children:s.jsx(Z,{theme:re,children:s.jsx(ee,{router:Be})})}));export{Ve as D};
