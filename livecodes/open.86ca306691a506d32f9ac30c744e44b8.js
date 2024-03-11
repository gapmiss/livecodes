var P=`<div id="list-container" class="list-container"><div class="modal-title">Saved Projects</div><div class="buttons"><button id="bulk-import-button" class="button">Import</button> <button id="export-all-button" class="button">Export All</button> <button id="delete-all-button" class="button danger">Delete All</button></div><div class="modal-message" id="projects-container" class="items-container"><span id="sort-by-label">Sort By:</span> <a href="#" id="sort-by-last-modified" class="active">Last&nbsp;Modified</a>&nbsp;/&nbsp;<a href="#" id="sort-by-title">Title</a>&nbsp;(<a href="#" id="sorted-asc" style="display:none">\u25B2</a><a href="#" id="sorted-desc">\u25BC</a>) <select name="language-filter" id="language-filter"><option value="">All languages</option></select> <input id="filter-tags" type="text" placeholder="Filter by tags"> <input id="search-projects" type="text" placeholder="Search"> <a href="#" id="reset-filters" class="hint--bottom" data-hint="Reset" style="width:auto"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 489.533 489.533" style="width:1em;height:1em" xml:space="preserve"><g><path d="M268.175,488.161c98.2-11,176.9-89.5,188.1-187.7c14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9
		l-118.6,87.1c-2,1.5-2,4.4,0,5.9l118.6,87.1c2.7,2,6.7,0.2,6.7-2.9v-57.5c87.9,1.4,158.3,76.2,152.3,165.6
		c-5.1,76.9-67.8,139.3-144.7,144.2c-81.5,5.2-150.8-53-163.2-130c-2.3-14.3-14.8-24.7-29.2-24.7c-17.9,0-31.9,15.9-29.1,33.6
		C49.575,418.961,150.875,501.261,268.175,488.161z"/></g></svg></a><div class="modal-message no-data"><div>You have no saved projects.</div><div class="description">You can save a project from (settings&nbsp;menu&nbsp;>&nbsp;Save) or by the keyboard shortcut (Ctrl/Cmd&nbsp;+&nbsp;S).</div></div><div class="modal-message no-data" id="no-match"><div>No projects match these filters.</div></div></div></div>`;var te=e=>e.replace(/{{APP_VERSION}}/g,"26").replace(/{{SDK_VERSION}}/g,"0.4.0").replace(/{{COMMIT_SHA}}/g,"c13944e").replace(/{{REPO_URL}}/g,"https://github.com/live-codes/livecodes").replace(/{{DOCS_BASE_URL}}/g,"/livecodes/docs/");var O=te(P);var oe=(e,t="_")=>e.replace(/[\W]+/g,t),C=()=>{let e=!1,t=navigator.userAgent.toLowerCase();return function(s){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(s)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(s.substr(0,4)))&&(e=!0)}(t||navigator.vendor||window.opera),e};var ne=()=>String(Math.random())+"-"+Date.now().toFixed(),$=(e,t,s)=>{let c=document.createElement("a");c.style.display="none",c.href=s,c.download=oe(e)+"."+t,c.click(),c.remove()},I=(e,t)=>new Promise((s,c)=>{if(t&&globalThis[t])return s(globalThis[t]);if(typeof globalThis.importScripts=="function")return globalThis.importScripts(e),t&&globalThis[t]?s(globalThis[t]):s(globalThis);let r=document.createElement("script");r.src=e,r.async=!0;let l=()=>{r.removeEventListener("load",i),r.removeEventListener("error",y)},i=()=>{if(l(),!t)return s("loaded: "+e);let p=setInterval(()=>{if(window[t])return clearInterval(p),s(window[t])},5)},y=()=>{l(),c("failed to load: "+e)};r.addEventListener("load",i),r.addEventListener("error",y),document.head.appendChild(r)}),A=(e,t,s)=>{if(t&&document.getElementById(t))return;let c=document.createElement("link");c.rel="stylesheet",c.href=e,c.id=t||"styles-"+ne(),document.head.insertBefore(c,s?document.querySelector(s):null)};var N=()=>{let e=new Date,t=e.getTimezoneOffset();return e=new Date(e.getTime()-t*60*1e3),e.toISOString().split("T")[0]};var W=["esm.sh","skypack","jspm"],_=["unpkg","jsdelivr","fastly.jsdelivr"],G=["fastly.jsdelivr.gh","jsdelivr.gh","statically"],k={getModuleUrl:(e,{isModule:t=!0,defaultCDN:s="esm.sh"}={})=>{e=e.replace(/#nobundle/g,"");let c=F(e,t,s);return c||(t?"https://esm.sh/"+e:"https://cdn.jsdelivr.net/npm/"+e)},getUrl:(e,t)=>e.startsWith("http")||e.startsWith("data:")?e:F(e,!1,t||se())||e,cdnLists:{npm:_,module:W,gh:G},checkCDNs:async(e,t)=>{let s=[t,...k.cdnLists.npm].filter(Boolean);for(let c of s)try{if((await fetch(k.getUrl(e,c),{method:"HEAD"})).ok)return c}catch{}return k.cdnLists.npm[0]}},se=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||k.cdnLists.npm[0]}catch{return k.cdnLists.npm[0]}},F=(e,t,s)=>{let c=t&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",G[0]):e.includes(":")||(e=(s||(t?W[0]:_[0]))+":"+e);for(let r of re){let[l,i]=r;if(l.test(e))return e.replace(l,i)+c}return null},re=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly.jsdelivr.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:R,getModuleUrl:Ee}=k;var J=R("flexsearch@0.7.21/dist/flexsearch.bundle.js");var ce="0.6.64",be=R(`malinajs@${ce}/malina.js`);var B=R("@yaireo/tagify@4.9.6/dist/");var V=e=>e.querySelector("#bulk-import-button"),K=e=>e.querySelector("#export-all-button"),Z=e=>e.querySelector("#delete-all-button");var Y=typeof window<"u"?window:null,Q=Y===null,ae=Q?void 0:Y.document;var Ie=Q?"calc":["","-webkit-","-moz-","-o-"].filter(function(e){var t=ae.createElement("div");return t.style.cssText="width:"+e+"calc(9px)",!!t.style.length}).shift()+"calc";var X=e=>{try{return JSON.parse(e).map(t=>t.value)}catch{return e.split(",").map(t=>t.trim())}};var ie=(e,t,s,c,r=!1)=>{let l=document.createElement("li");t.appendChild(l);let i=document.createElement("a");i.href="#",i.dataset.id=e.id,i.classList.add("open-project-link");let y=C()?new Date(e.lastModified).toLocaleDateString():new Date(e.lastModified).toLocaleString(),p=[];C()||e.languages.forEach(u=>{let a=document.createElement("span");a.classList.add("language-tag"),a.dataset.lang=c(u),r?a.classList.add("template-tag"):a.title="filter by language",a.textContent=s(u),p.push(a)});let T=[];e.tags=[...new Set(e.tags)].filter(Boolean),!C()&&e.tags.length>0&&e.tags.forEach(u=>{let a=document.createElement("span");a.classList.add("user-tag"),a.dataset.tag=u,r?a.classList.add("template-tag"):a.title="filter by tag",a.textContent=u,T.push(a)});let S=document.createElement("div");S.classList.add("open-title","overflow-text"),S.textContent=e.title,i.appendChild(S);let E=document.createElement("div");E.classList.add("light"),E.textContent="Last modified: "+y,i.appendChild(E);let x=document.createElement("div");x.classList.add("project-tags"),p.forEach(u=>x.append(u)),x.innerHTML+=T.length>0?' <span class="light">|</span> ':"",T.forEach(u=>x.append(u)),i.appendChild(x);let m=document.createElement("div");m.classList.add("template-default");let d=document.createElement("span");d.innerText="Set as default",d.classList.add("template-default-link"),m.appendChild(d);let g=document.createElement("span");g.classList.add("default-template-label"),g.innerText="Default template ",m.appendChild(g);let L=document.createElement("span");L.innerText="(unset)",L.classList.add("template-remove-default-link"),g.appendChild(L),r&&i.appendChild(m),l.appendChild(i);let h=document.createElement("button");return h.classList.add("delete-button"),l.appendChild(h),{link:i,deleteButton:h,setAsDefaultLink:d,removeDefaultLink:L}},pe=e=>{let t=document.createElement("div");return t.innerHTML=`
    <div class="modal-message">Loading...</div>
    <div class="modal-message">${e.title}</div>
    `,t},me=(e,t,s,c)=>{let r="lastModified",l="desc",i,y=[],p,T=[],S=document.querySelector("#list-container #sort-by-last-modified"),E=document.querySelector("#list-container #sort-by-title"),x=document.querySelector("#list-container #sorted-asc"),m=document.querySelector("#list-container #sorted-desc"),d=document.querySelector("#list-container #language-filter"),g=document.querySelector("#list-container #filter-tags"),L=document.querySelector("#list-container #search-projects"),h=document.querySelector("#list-container #reset-filters");c.map(o=>({name:o.name,title:o.longTitle||o.title})).sort((o,n)=>o.title.toLowerCase()<n.title.toLowerCase()?-1:o.title.toLowerCase()>n.title.toLowerCase()?1:0).forEach(o=>{let n=document.createElement("option");n.text=o.title,n.value=o.name,d.appendChild(n)});let u=async()=>(await e()).filter(o=>i?o.languages.includes(i):!0).filter(o=>y.length>0?y.map(n=>o.tags.includes(n)).every(n=>n===!0):!0).filter(o=>L.value.trim()!==""?T.includes(o.id):!0).sort((o,n)=>r==="lastModified"&&l==="asc"?o.lastModified-n.lastModified:r==="lastModified"&&l==="desc"?n.lastModified-o.lastModified:r==="title"&&l==="asc"&&o.title<n.title?-1:r==="title"&&l==="asc"&&o.title>n.title||r==="title"&&l==="desc"&&o.title<n.title?1:r==="title"&&l==="desc"&&o.title>n.title?-1:0),a=()=>{document.querySelectorAll(".project-tags span").forEach(n=>{n.dataset.lang?s.addEventListener(n,"click",async f=>{f.stopPropagation(),d.value=n.dataset.lang||"",await U()},!1):n.dataset.tag&&s.addEventListener(n,"click",async f=>{f.stopPropagation(),p&&(p.removeAllTags(),p.addTags(n.dataset.tag),await w())},!1)})},b=async()=>{t(await u()),a()},H=()=>{l="asc",x.style.display="unset",m.style.display="none"},M=()=>{l="desc",x.style.display="none",m.style.display="unset"},w=async(o=g.value)=>{y=X(o).filter(n=>n!==""),await b()},U=async(o=d.value)=>{i=o,await b()};s.addEventListener(S,"click",async o=>{o.preventDefault(),r!=="lastModified"||l==="asc"?M():H(),r="lastModified",S.classList.add("active"),E.classList.remove("active"),await b()},!1),s.addEventListener(E,"click",async o=>{o.preventDefault(),r!=="title"?H():l==="asc"?M():H(),r="title",S.classList.remove("active"),E.classList.add("active"),await b()},!1),s.addEventListener(x,"click",async o=>{o.preventDefault(),M(),await b()},!1),s.addEventListener(m,"click",async o=>{o.preventDefault(),H(),await b()},!1),s.addEventListener(g,"keyup",()=>w(g.value),!1),s.addEventListener(d,"change",async()=>{await U()},!1),a(),A(B+"tagify.css","tagify-styles"),I(B+"tagify.min.js","Tagify").then(async o=>{o&&(p=new o(g,{whitelist:Array.from(new Set((await e()).map(n=>n.tags).flat())).sort((n,f)=>f>n?-1:1),dropdown:{maxItems:40,enabled:0,closeOnSelect:!1,highlightFirst:!0}}),p.on("change",()=>w(JSON.stringify(p?.value||""))))}),I(J,"FlexSearch").then(async o=>{let n=new o.Document({index:["title","description","tags","languages"],tokenize:"full",worker:!0});await Promise.all((await e()).map(f=>n.add(f))),s.addEventListener(L,"keyup",async()=>{T=(await n.searchAsync(L.value)).map(v=>v.result).flat(),await b()},!1)}),s.addEventListener(h,"click",async o=>{o.preventDefault(),r="lastModified",l="desc",i="",y=[],T=[],S.classList.add("active"),E.classList.remove("active"),M(),d.value="",p?.removeAllTags(),L.value="",await b()},!1)},St=async({projectStorage:e,eventsManager:t,showScreen:s,getContentConfig:c,notifications:r,modal:l,loadConfig:i,getProjectId:y,setProjectId:p,languages:T,getLanguageTitle:S,getLanguageByAlias:E})=>{let x=document.createElement("div");x.innerHTML=O;let m=x.firstChild,d=m.querySelector(".no-data"),g=m.querySelector("#no-match.no-data"),L=m.querySelector("#projects-container"),h=document.createElement("ul");h.classList.add("open-list");let u=await e.getList(),a=u,b=V(m),H=K(m),M=Z(m);t.addEventListener(b,"click",()=>{s("import")},!1),t.addEventListener(H,"click",async()=>{let o=(await e.getAllData()).filter(v=>a.find(q=>q.id===v.id)).map(v=>({...v,config:c(v.config)})).sort((v,q)=>v.lastModified-q.lastModified),n="livecodes_export_"+N(),f="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(o));$(n,"json",f)},!1),t.addEventListener(M,"click",async()=>{r.confirm(`Delete ${a.length} projects?`,async()=>{for(let o of a)await e.deleteItem(o.id),y()===o.id&&p("");a=[],u=await e.getList(),await w(a)})},!1),L.appendChild(h);let w=async o=>{a=o,h.innerHTML="",o.forEach(n=>{let{link:f,deleteButton:v}=ie(n,h,S,E);t.addEventListener(f,"click",async q=>{q.preventDefault();let j=pe(n);l.show(j,{size:"small"});let D=f.dataset.id||"",z=(await e.getItem(D))?.config;z&&(await i(z),p(D)),l.close(),j.remove()},!1),t.addEventListener(v,"click",()=>{r.confirm(`Delete project: ${n.title}?`,async()=>{n.id===y()&&p(""),await e.deleteItem(n.id),a=a.filter(j=>j.id!==n.id),v.parentElement.classList.add("hidden"),setTimeout(()=>{w(a)},500)})},!1)}),o.length===0?(h.classList.add("hidden"),M.classList.add("hidden"),H.classList.add("hidden"),(await e.getList()).length===0?(d.classList.remove("hidden"),g.classList.add("hidden")):(d.classList.add("hidden"),g.classList.remove("hidden"))):(h.classList.remove("hidden"),M.classList.remove("hidden"),H.classList.remove("hidden"),d.classList.add("hidden"),g.classList.add("hidden"))};await w(u);let U=()=>e.getList();l.show(m,{isAsync:!0}),me(U,w,t,T)};export{ie as createOpenItem,St as createSavedProjectsList};