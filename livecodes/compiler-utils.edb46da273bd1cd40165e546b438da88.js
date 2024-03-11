"use strict";(()=>{var p=t=>{function e(o){return typeof HTMLElement=="object"?o instanceof HTMLElement:o&&typeof o=="object"&&o!==null&&o.nodeType===1&&typeof o.nodeName=="string"}function s(o){return typeof Node=="object"?o instanceof Node:o&&typeof o=="object"&&typeof o.nodeType=="number"&&typeof o.nodeName=="string"}function n(o){return Object.prototype.toString.call(o)==="[object HTMLDocument]"}function a(o){return Object.prototype.toString.call(o)==="[object Window]"}let i=Object.prototype.toString.call(t);if(t===void 0)return"undefined";if(t===null)return"null";if(a(t))return"window";if(n(t))return"document";if(e(t))return"element";if(s(t))return"node";if(t.constructor&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t))return"buffer";if(typeof window=="object"&&t===window)return"window";if(typeof global=="object"&&t===global)return"global";if(typeof t=="number"&&isNaN(t)||typeof t=="object"&&i==="[object Number]"&&isNaN(t))return"nan";if(typeof t=="object"&&i.substr(-6)==="Event]")return"event";if(i.substr(0,12)==="[object HTML")return"element";if(i.substr(0,12)==="[object Node")return"node";let r=i.match(/\[object\s*([^\]]+)\]/);return r?r[1].toLowerCase():"object"};function l(t){return t.map(e=>{switch(p(e)){case"window":case"function":case"date":case"symbol":return{type:p(e),content:e.toString()};case"document":return{type:p(e),content:e.documentElement.outerHTML};case"element":return{type:p(e),content:e.outerHTML};case"node":return{type:p(e),content:e.textContent};case"array":return{type:p(e),content:e.map(s=>l([s])[0].content)};case"object":return{type:p(e),content:Object.keys(e).reduce((s,n)=>({...s,[n]:l([e[n]])[0].content}),{})};case"error":return{type:p(e),content:e.constructor.name+": "+e.message}}try{return{type:"other",content:structuredClone(e)}}catch{return{type:"other",content:String(e)}}})}var m=()=>{window.console=new Proxy(console,{get(t,e){return function(...s){if(!(e in t)){let n=`Uncaught TypeError: console.${String(e)} is not a function`;t.error(n),parent.postMessage({type:"console",method:"error",args:l([n])},"*");return}t[e](...s),parent.postMessage({type:"console",method:e,args:l(s)},"*")}}}),window.addEventListener("error",t=>{parent.postMessage({type:"console",method:"error",args:l([t.message])},"*")})};var y=["esm.sh","skypack","jspm"],b=["unpkg","jsdelivr","fastly.jsdelivr"],x=["fastly.jsdelivr.gh","jsdelivr.gh","statically"],d={getModuleUrl:(t,{isModule:e=!0,defaultCDN:s="esm.sh"}={})=>{t=t.replace(/#nobundle/g,"");let n=h(t,e,s);return n||(e?"https://esm.sh/"+t:"https://cdn.jsdelivr.net/npm/"+t)},getUrl:(t,e)=>t.startsWith("http")||t.startsWith("data:")?t:h(t,!1,e||f())||t,cdnLists:{npm:b,module:y,gh:x},checkCDNs:async(t,e)=>{let s=[e,...d.cdnLists.npm].filter(Boolean);for(let n of s)try{if((await fetch(d.getUrl(t,n),{method:"HEAD"})).ok)return n}catch{}return d.cdnLists.npm[0]}},f=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||d.cdnLists.npm[0]}catch{return d.cdnLists.npm[0]}},h=(t,e,s)=>{let n=e&&t.startsWith("unpkg:")?"?module":"";t.startsWith("gh:")?t=t.replace("gh",x[0]):t.includes(":")||(t=(s||(e?y[0]:b[0]))+":"+t);for(let a of E){let[i,r]=a;if(i.test(t))return t.replace(i,r)+n}return null},E=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly.jsdelivr.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var L=typeof btoa=="function",g=typeof Buffer=="function",_=typeof TextDecoder=="function"?new TextDecoder:void 0,w=typeof TextEncoder=="function"?new TextEncoder:void 0,U="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u=Array.prototype.slice.call(U),O=(t=>{let e={};return t.forEach((s,n)=>e[s]=n),e})(u);var c=String.fromCharCode.bind(String),F=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):t=>new Uint8Array(Array.prototype.slice.call(t,0)),T=t=>t.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_");var $=t=>{let e,s,n,a,i="",r=t.length%3;for(let o=0;o<t.length;){if((s=t.charCodeAt(o++))>255||(n=t.charCodeAt(o++))>255||(a=t.charCodeAt(o++))>255)throw new TypeError("invalid character found");e=s<<16|n<<8|a,i+=u[e>>18&63]+u[e>>12&63]+u[e>>6&63]+u[e&63]}return r?i.slice(0,r-3)+"===".substring(r):i},v=L?t=>btoa(t):g?t=>Buffer.from(t,"binary").toString("base64"):$,j=g?t=>Buffer.from(t).toString("base64"):t=>{let s=[];for(let n=0,a=t.length;n<a;n+=4096)s.push(c.apply(null,t.subarray(n,n+4096)));return v(s.join(""))};var D=t=>{if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?c(192|e>>>6)+c(128|e&63):c(224|e>>>12&15)+c(128|e>>>6&63)+c(128|e&63)}else{var e=65536+(t.charCodeAt(0)-55296)*1024+(t.charCodeAt(1)-56320);return c(240|e>>>18&7)+c(128|e>>>12&63)+c(128|e>>>6&63)+c(128|e&63)}},S=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,B=t=>t.replace(S,D),C=g?t=>Buffer.from(t,"utf8").toString("base64"):w?t=>j(w.encode(t)):t=>v(B(t)),k=(t,e=!1)=>e?T(C(t)):C(t);var N=(t,e="text/javascript")=>`data:${e};charset=UTF-8;base64,`+k(t);var A=t=>{try{return new Worker(N(t))}catch{return new Worker(URL.createObjectURL(new Blob([t],{type:"application/javascript"})))}};m();window.initCompiler=async t=>{let e=t.baseUrl,s=e+"compile.worker.f0eb7f0827df4de0b1cd325f63a1b7b0.js",n=new URL(e).origin,a=`self.appCDN='${f()}';importScripts('${s}');`,i=A(a);await new Promise(r=>{let o=document.createElement("script");o.src=e+"compile.page.75add465088f6451949b480847aa7f8b.js",o.onload=()=>r(),document.head.appendChild(o)}),i.addEventListener("message",async function(r){if(r.data.type==="compileInCompiler"){i.postMessage(r.data);return}r.data.payload&&window.compilers&&window.compilers[r.data.payload.language]&&(r.data.payload.compiled=await window.compilers[r.data.payload.language](r.data.payload.compiled,{config:r.data.payload.config,language:r.data.payload.language,baseUrl:e,options:r.data.payload.options,worker:i})),r.data.trigger==="compileInCompiler"?i.postMessage({...r.data,from:"compiler"}):parent.postMessage({...r.data,from:"compiler"},n)}),window.addEventListener("message",async function(r){i.postMessage(r.data)}),i.postMessage(t)};})();