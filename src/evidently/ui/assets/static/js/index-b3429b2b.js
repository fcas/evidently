import{w as a}from"./vendor-86aeac57.js";function u(e,t){window.dispatchEvent(new StorageEvent("storage",{key:e,newValue:t}))}const g=(e,t)=>{const o=JSON.stringify(t);window.localStorage.setItem(e,o),u(e,o)},l=e=>{window.localStorage.removeItem(e),u(e,null)},S=e=>window.localStorage.getItem(e),f=e=>(window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)),d=()=>{throw Error("useLocalStorage is a client-only hook")};function i(e,t){const o=()=>S(e),n=a.useSyncExternalStore(f,o,d),c=a.useCallback(r=>{try{const s=typeof r=="function"?r(JSON.parse(n)):r;s==null?l(e):g(e,s)}catch(s){console.warn(s)}},[e,n]);return a.useEffect(()=>{S(e)===null&&typeof t<"u"&&g(e,t)},[e,t]),[n?JSON.parse(n):t,c]}function p(e){const[t,o]=a.useState(()=>typeof e=="boolean"?e:!!e),n=a.useCallback(c=>o(typeof c=="boolean"?c:r=>!r),[]);return[t,n]}export{i as a,p as u};
