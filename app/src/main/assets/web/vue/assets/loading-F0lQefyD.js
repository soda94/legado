import{ag as f,v as g,H as u,ah as c,u as d,a5 as h,ai as m}from"./vendor-Blq-ceJ6.js";const L=a=>/,\s*\{/.test(a)||!(a.startsWith("http")||a.startsWith("data:")||a.startsWith("blob:")),M=a=>{let r=new Date().getTime(),e=Math.floor((r-a)/1e3),t="";return e<=30?t="刚刚":e<60?t=e+"秒前":e<3600?t=Math.floor(e/60)+"分钟前":e<86400?t=Math.floor(e/3600)+"小时前":e<2592e3?t=Math.floor(e/86400)+"天前":t=f(new Date(a),"YYYY-MM-DD"),t},b=(a,r,e=m)=>{const t=g(!1);let s=null;const n=()=>t.value=!1,i=()=>t.value=!0;u(t,o=>{if(!o)return s==null?void 0:s.close();s=c.service({target:d(a),spinner:e,text:r,lock:!0,background:"rgba(0, 0, 0, 0)"})});const l=o=>{if(!(o instanceof Promise))throw TypeError("loadingWrapper argument must be Promise");return i(),o.finally(n)};return h(()=>{n()}),{isLoading:t,showLoading:i,closeLoading:n,loadingWrapper:l}};export{M as d,L as i,b as u};