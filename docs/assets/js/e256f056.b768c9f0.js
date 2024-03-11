(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[275,6318,4366],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||s;return r?n.createElement(h,a(a({ref:t},d),{},{components:r})):n.createElement(h,a({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1262:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(7294),o=r(2389);function s(e){let{children:t,fallback:r}=e;return(0,o.Z)()?n.createElement(n.Fragment,null,t?.()):r??null}},4887:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(7294),o=r(1262),s=r(814),a=r(9493),i=r(1446);function c(e){const{params:t,config:r,code:c,language:l="js",codeTitle:d="",showLineNumbers:p=!1,formatCode:u=!0,linkText:f="Run in LiveCodes",style:h={},className:m=""}=e,y=(0,a.r)({appUrl:i.G,params:t,config:r});return n.createElement("div",{style:{marginBottom:"30px",...h},className:m},c&&n.createElement(o.Z,null,(()=>{return n.createElement(s.Z,{language:l,title:d,showLineNumbers:p},u?(e=c,void 0===(t=l)&&(t="js"),window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})):c);var e,t})),n.createElement("a",{href:y,target:"_blank",rel:"noreferrer"},f,n.createElement("svg",{width:"12",height:"12","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module",style:{marginLeft:"4px"}},n.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))))}},9493:(e,t,r)=>{"use strict";r.d(t,{T:()=>o,r:()=>s});var n=r(7728);async function o(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:r="https://livecodes.io/",params:n={},config:o={},import:s,lite:a,loading:i="lazy",template:c,view:l="split"}=t,d="headless"===l;let p,u=null;if("string"==typeof e)u=document.querySelector(e);else if(e instanceof HTMLElement)u=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!u){if(!d)throw new Error(`Cannot find element: "${e}"`);u=document.createElement("div"),C(u),document.body.appendChild(u)}try{p=new URL(r)}catch{throw new Error(`"${r}" is not a valid URL.`)}const f=p.origin;if("object"==typeof n&&Object.keys(n).forEach((e=>{p.searchParams.set(e,String(n[e]))})),"string"==typeof o)try{new URL(o),p.searchParams.set("config",o)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof o)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(o).length>0&&p.searchParams.set("config","sdk")}c&&p.searchParams.set("template",c),s&&p.searchParams.set("x",s),a&&p.searchParams.set("lite","true"),p.searchParams.set("embed","true"),p.searchParams.set("loading",d?"eager":i),p.searchParams.set("view",l);let h=!1;const m="Cannot call API methods after calling `destroy()`.",y=await new Promise((e=>{if(!u)return;const t=u.dataset.height||u.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";u.style.height=e}"false"===u.dataset.defaultStyles||d||(u.style.backgroundColor||="#fff",u.style.border||="1px solid black",u.style.borderRadius||="5px",u.style.boxSizing||="border-box",u.style.padding||="0",u.style.width||="100%",u.style.height||=u.style.height||"300px",u.style.minHeight="200px",u.style.flexGrow="1",u.style.overflow||="hidden",u.style.resize||="vertical");const r=document.createElement("iframe");r.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),r.setAttribute("allowtransparency","true"),r.setAttribute("allowpaymentrequest","true"),r.setAttribute("allowfullscreen","true"),r.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const n="eager"===i?"eager":"lazy";r.setAttribute("loading",n),r.classList.add("livecodes"),d?C(r):(r.style.height="100%",r.style.minHeight="200px",r.style.width="100%",r.style.margin="0",r.style.border="0",r.style.borderRadius=u.style.borderRadius),addEventListener("message",(function e(t){t.source===r.contentWindow&&t.origin===f&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),r.contentWindow?.postMessage({type:"livecodes-config",payload:o},f))})),r.onload=()=>{e(r)},r.src=p.href,u.appendChild(r)})),g=new Promise((e=>{addEventListener("message",(function t(r){r.source===y.contentWindow&&r.origin===f&&"livecodes-ready"===r.data?.type&&(removeEventListener("message",t),e(),g.settled=!0)}))})),v=()=>h?Promise.reject(m):new Promise((async e=>{g.settled&&e();y.contentWindow?.postMessage({type:"livecodes-load"},f),await g,e()})),w=(e,t)=>new Promise((async(r,n)=>{if(h)return n(m);await v();const o=O();addEventListener("message",(function t(s){if(s.source===y.contentWindow&&s.origin===f&&"livecodes-api-response"===s.data?.type&&s.data?.id===o&&s.data.method===e){removeEventListener("message",t);const e=s.data.payload;e?.error?n(e.error):r(e)}})),y.contentWindow?.postMessage({method:e,id:o,args:t},f)})),b={},k=["load","ready","code","console","tests","destroy"],x=(e,t)=>{if(h)throw new Error(m);return k.includes(e)?(w("watch",[e]),b[e]||(b[e]=[]),b[e]?.push(t),{remove:()=>{b[e]=b[e]?.filter((e=>e!==t)),0===b[e]?.length&&w("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==y.contentWindow||e.origin!==f||!t||!b[t])return;const r=e.data?.payload;b[t]?.forEach((e=>{e(r)}))}));const E=()=>{Object.values(b).forEach((e=>{e.length=0})),y?.remove?.(),h=!0};if("lazy"===i&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(u))}))}),{rootMargin:"150px"}).observe(u)}function C(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const O=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>v(),run:()=>w("run"),format:e=>w("format",[e]),getShareUrl:e=>w("getShareUrl",[e]),getConfig:e=>w("getConfig",[e]),setConfig:e=>w("setConfig",[e]),getCode:()=>w("getCode"),show:(e,t)=>w("show",[e,t]),runTests:()=>w("runTests"),onChange:e=>x("code",e),watch:x,exec:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return w("exec",[e,...r])},destroy:()=>g.settled?w("destroy").then(E):h?Promise.reject(m):(E(),Promise.resolve())}}function s(e){void 0===e&&(e={});const{appUrl:t,params:r,config:o,import:s,...a}=e,i="string"==typeof o?{config:o}:"object"==typeof o?{x:"code/"+(0,n.compressToEncodedURIComponent)(JSON.stringify(o))}:{},c=new URLSearchParams(JSON.parse(JSON.stringify({...a,...r,x:s,...i}))).toString();return(t||"https://livecodes.io")+(c?"?"+c:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const r=e.dataset.options;if(r)try{t=JSON.parse(r)}catch{}let n;const s=e.dataset.config||e.dataset.prefill;if(s)try{n=JSON.parse(s)}catch{}const a=encodeURIComponent(e.outerHTML);e.innerHTML="",o(e,{import:"dom/"+a,...t,...n?{config:n}:{}})}))}))},198:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(7462),o=(r(7294),r(3905)),s=r(4887);const a={},i="Sync",c={unversionedId:"features/sync",id:"features/sync",title:"Sync",description:"LiveCodes local data can be synchronized to a GitHub repo. This can be used as a cloud backup, and to synchronize multiple devices.",source:"@site/docs/features/sync.md",sourceDirName:"features",slug:"/features/sync",permalink:"/livecodes/docs/features/sync",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/features/sync.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Deploy",permalink:"/livecodes/docs/features/deploy"},next:{title:"Broadcast",permalink:"/livecodes/docs/features/broadcast"}},l={},d=[{value:"Related",id:"related",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sync"},"Sync"),(0,o.kt)("p",null,"LiveCodes local data can be synchronized to a GitHub repo. This can be used as a cloud backup, and to synchronize multiple devices."),(0,o.kt)("p",null,"A GitHub account is required. The user must give access to ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/github-integration"},"(Private Repos) while logging in"),"."),(0,o.kt)("p",null,"The Sync screen can be accessed from the app menu \u2192 Sync."),(0,o.kt)(s.Z,{params:{screen:"sync"},linkText:"direct link",mdxType:"RunInLiveCodes"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LiveCodes Sync",src:r(3692).Z,width:"2708",height:"1267"})),(0,o.kt)("p",null,"Data can be synchronized to a new (",(0,o.kt)("strong",{parentName:"p"},"private"),") or existing repo."),(0,o.kt)("p",null,"The data is synchronized with the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch in a directory named ",(0,o.kt)("inlineCode",{parentName:"p"},"livecodes-data"),"."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"Auto sync")," is selected, the sync will be attempted every 5 minutes. Remote files are downloaded only when changed (e.g. sync from another device)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Auto sync")," can be turned off and on by the switch on the app menu."),(0,o.kt)("p",null,"The sync can be manually triggered at any time from the Sync UI. Information regarding the last sync time and repo are displayed on the UI screen."),(0,o.kt)("h2",{id:"related"},"Related"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livecodes/docs/features/backup-restore"},"Backup / restore")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livecodes/docs/features/export"},"Export"))))}u.isMDXComponent=!0},3692:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/sync-203c43186261cc0679dcb1c7d3c4e300.png"},7728:(e,t,r)=>{var n,o=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};function o(e,t){if(!n[e]){n[e]={};for(var r=0;r<e.length;r++)n[e][e.charAt(r)]=r}return n[e][t]}var s={compressToBase64:function(e){if(null==e)return"";var r=s._compress(e,6,(function(e){return t.charAt(e)}));switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:s._decompress(e.length,32,(function(r){return o(t,e.charAt(r))}))},compressToUTF16:function(t){return null==t?"":s._compress(t,15,(function(t){return e(t+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:s._decompress(e.length,16384,(function(t){return e.charCodeAt(t)-32}))},compressToUint8Array:function(e){for(var t=s.compress(e),r=new Uint8Array(2*t.length),n=0,o=t.length;n<o;n++){var a=t.charCodeAt(n);r[2*n]=a>>>8,r[2*n+1]=a%256}return r},decompressFromUint8Array:function(t){if(null==t)return s.decompress(t);for(var r=new Array(t.length/2),n=0,o=r.length;n<o;n++)r[n]=256*t[2*n]+t[2*n+1];var a=[];return r.forEach((function(t){a.push(e(t))})),s.decompress(a.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":s._compress(e,6,(function(e){return r.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),s._decompress(e.length,32,(function(t){return o(r,e.charAt(t))})))},compress:function(t){return s._compress(t,16,(function(t){return e(t)}))},_compress:function(e,t,r){if(null==e)return"";var n,o,s,a={},i={},c="",l="",d="",p=2,u=3,f=2,h=[],m=0,y=0;for(s=0;s<e.length;s+=1)if(c=e.charAt(s),Object.prototype.hasOwnProperty.call(a,c)||(a[c]=u++,i[c]=!0),l=d+c,Object.prototype.hasOwnProperty.call(a,l))d=l;else{if(Object.prototype.hasOwnProperty.call(i,d)){if(d.charCodeAt(0)<256){for(n=0;n<f;n++)m<<=1,y==t-1?(y=0,h.push(r(m)),m=0):y++;for(o=d.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&o,y==t-1?(y=0,h.push(r(m)),m=0):y++,o>>=1}else{for(o=1,n=0;n<f;n++)m=m<<1|o,y==t-1?(y=0,h.push(r(m)),m=0):y++,o=0;for(o=d.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&o,y==t-1?(y=0,h.push(r(m)),m=0):y++,o>>=1}0==--p&&(p=Math.pow(2,f),f++),delete i[d]}else for(o=a[d],n=0;n<f;n++)m=m<<1|1&o,y==t-1?(y=0,h.push(r(m)),m=0):y++,o>>=1;0==--p&&(p=Math.pow(2,f),f++),a[l]=u++,d=String(c)}if(""!==d){if(Object.prototype.hasOwnProperty.call(i,d)){if(d.charCodeAt(0)<256){for(n=0;n<f;n++)m<<=1,y==t-1?(y=0,h.push(r(m)),m=0):y++;for(o=d.charCodeAt(0),n=0;n<8;n++)m=m<<1|1&o,y==t-1?(y=0,h.push(r(m)),m=0):y++,o>>=1}else{for(o=1,n=0;n<f;n++)m=m<<1|o,y==t-1?(y=0,h.push(r(m)),m=0):y++,o=0;for(o=d.charCodeAt(0),n=0;n<16;n++)m=m<<1|1&o,y==t-1?(y=0,h.push(r(m)),m=0):y++,o>>=1}0==--p&&(p=Math.pow(2,f),f++),delete i[d]}else for(o=a[d],n=0;n<f;n++)m=m<<1|1&o,y==t-1?(y=0,h.push(r(m)),m=0):y++,o>>=1;0==--p&&(p=Math.pow(2,f),f++)}for(o=2,n=0;n<f;n++)m=m<<1|1&o,y==t-1?(y=0,h.push(r(m)),m=0):y++,o>>=1;for(;;){if(m<<=1,y==t-1){h.push(r(m));break}y++}return h.join("")},decompress:function(e){return null==e?"":""==e?null:s._decompress(e.length,32768,(function(t){return e.charCodeAt(t)}))},_decompress:function(t,r,n){var o,s,a,i,c,l,d,p=[],u=4,f=4,h=3,m="",y=[],g={val:n(0),position:r,index:1};for(o=0;o<3;o+=1)p[o]=o;for(a=0,c=Math.pow(2,2),l=1;l!=c;)i=g.val&g.position,g.position>>=1,0==g.position&&(g.position=r,g.val=n(g.index++)),a|=(i>0?1:0)*l,l<<=1;switch(a){case 0:for(a=0,c=Math.pow(2,8),l=1;l!=c;)i=g.val&g.position,g.position>>=1,0==g.position&&(g.position=r,g.val=n(g.index++)),a|=(i>0?1:0)*l,l<<=1;d=e(a);break;case 1:for(a=0,c=Math.pow(2,16),l=1;l!=c;)i=g.val&g.position,g.position>>=1,0==g.position&&(g.position=r,g.val=n(g.index++)),a|=(i>0?1:0)*l,l<<=1;d=e(a);break;case 2:return""}for(p[3]=d,s=d,y.push(d);;){if(g.index>t)return"";for(a=0,c=Math.pow(2,h),l=1;l!=c;)i=g.val&g.position,g.position>>=1,0==g.position&&(g.position=r,g.val=n(g.index++)),a|=(i>0?1:0)*l,l<<=1;switch(d=a){case 0:for(a=0,c=Math.pow(2,8),l=1;l!=c;)i=g.val&g.position,g.position>>=1,0==g.position&&(g.position=r,g.val=n(g.index++)),a|=(i>0?1:0)*l,l<<=1;p[f++]=e(a),d=f-1,u--;break;case 1:for(a=0,c=Math.pow(2,16),l=1;l!=c;)i=g.val&g.position,g.position>>=1,0==g.position&&(g.position=r,g.val=n(g.index++)),a|=(i>0?1:0)*l,l<<=1;p[f++]=e(a),d=f-1,u--;break;case 2:return y.join("")}if(0==u&&(u=Math.pow(2,h),h++),p[d])m=p[d];else{if(d!==f)return null;m=s+s.charAt(0)}y.push(m),p[f++]=s+m.charAt(0),s=m,0==--u&&(u=Math.pow(2,h),h++)}}};return s}();void 0===(n=function(){return o}.call(t,r,t,e))||(e.exports=n)}}]);