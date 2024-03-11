"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5768],{4887:(e,t,o)=>{o.d(t,{Z:()=>n});var a=o(7294),r=o(1262),i=o(814),s=o(9493),l=o(1446);function n(e){const{params:t,config:o,code:n,language:p="js",codeTitle:d="",showLineNumbers:c=!1,formatCode:m=!0,linkText:u="Run in LiveCodes",style:h={},className:f=""}=e,g=(0,s.r)({appUrl:l.G,params:t,config:o});return a.createElement("div",{style:{marginBottom:"30px",...h},className:f},n&&a.createElement(r.Z,null,(()=>{return a.createElement(i.Z,{language:p,title:d,showLineNumbers:c},m?(e=n,void 0===(t=p)&&(t="js"),window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})):n);var e,t})),a.createElement("a",{href:g,target:"_blank",rel:"noreferrer"},u,a.createElement("svg",{width:"12",height:"12","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module",style:{marginLeft:"4px"}},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))))}},9493:(e,t,o)=>{o.d(t,{T:()=>r,r:()=>i});var a=o(7728);async function r(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:o="https://livecodes.io/",params:a={},config:r={},import:i,lite:s,loading:l="lazy",template:n,view:p="split"}=t,d="headless"===p;let c,m=null;if("string"==typeof e)m=document.querySelector(e);else if(e instanceof HTMLElement)m=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!m){if(!d)throw new Error(`Cannot find element: "${e}"`);m=document.createElement("div"),C(m),document.body.appendChild(m)}try{c=new URL(o)}catch{throw new Error(`"${o}" is not a valid URL.`)}const u=c.origin;if("object"==typeof a&&Object.keys(a).forEach((e=>{c.searchParams.set(e,String(a[e]))})),"string"==typeof r)try{new URL(r),c.searchParams.set("config",r)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof r)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(r).length>0&&c.searchParams.set("config","sdk")}n&&c.searchParams.set("template",n),i&&c.searchParams.set("x",i),s&&c.searchParams.set("lite","true"),c.searchParams.set("embed","true"),c.searchParams.set("loading",d?"eager":l),c.searchParams.set("view",p);let h=!1;const f="Cannot call API methods after calling `destroy()`.",g=await new Promise((e=>{if(!m)return;const t=m.dataset.height||m.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";m.style.height=e}"false"===m.dataset.defaultStyles||d||(m.style.backgroundColor||="#fff",m.style.border||="1px solid black",m.style.borderRadius||="5px",m.style.boxSizing||="border-box",m.style.padding||="0",m.style.width||="100%",m.style.height||=m.style.height||"300px",m.style.minHeight="200px",m.style.flexGrow="1",m.style.overflow||="hidden",m.style.resize||="vertical");const o=document.createElement("iframe");o.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),o.setAttribute("allowtransparency","true"),o.setAttribute("allowpaymentrequest","true"),o.setAttribute("allowfullscreen","true"),o.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const a="eager"===l?"eager":"lazy";o.setAttribute("loading",a),o.classList.add("livecodes"),d?C(o):(o.style.height="100%",o.style.minHeight="200px",o.style.width="100%",o.style.margin="0",o.style.border="0",o.style.borderRadius=m.style.borderRadius),addEventListener("message",(function e(t){t.source===o.contentWindow&&t.origin===u&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),o.contentWindow?.postMessage({type:"livecodes-config",payload:r},u))})),o.onload=()=>{e(o)},o.src=c.href,m.appendChild(o)})),k=new Promise((e=>{addEventListener("message",(function t(o){o.source===g.contentWindow&&o.origin===u&&"livecodes-ready"===o.data?.type&&(removeEventListener("message",t),e(),k.settled=!0)}))})),v=()=>h?Promise.reject(f):new Promise((async e=>{k.settled&&e();g.contentWindow?.postMessage({type:"livecodes-load"},u),await k,e()})),b=(e,t)=>new Promise((async(o,a)=>{if(h)return a(f);await v();const r=L();addEventListener("message",(function t(i){if(i.source===g.contentWindow&&i.origin===u&&"livecodes-api-response"===i.data?.type&&i.data?.id===r&&i.data.method===e){removeEventListener("message",t);const e=i.data.payload;e?.error?a(e.error):o(e)}})),g.contentWindow?.postMessage({method:e,id:r,args:t},u)})),y={},w=["load","ready","code","console","tests","destroy"],N=(e,t)=>{if(h)throw new Error(f);return w.includes(e)?(b("watch",[e]),y[e]||(y[e]=[]),y[e]?.push(t),{remove:()=>{y[e]=y[e]?.filter((e=>e!==t)),0===y[e]?.length&&b("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==g.contentWindow||e.origin!==u||!t||!y[t])return;const o=e.data?.payload;y[t]?.forEach((e=>{e(o)}))}));const x=()=>{Object.values(y).forEach((e=>{e.length=0})),g?.remove?.(),h=!0};if("lazy"===l&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(m))}))}),{rootMargin:"150px"}).observe(m)}function C(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const L=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>v(),run:()=>b("run"),format:e=>b("format",[e]),getShareUrl:e=>b("getShareUrl",[e]),getConfig:e=>b("getConfig",[e]),setConfig:e=>b("setConfig",[e]),getCode:()=>b("getCode"),show:(e,t)=>b("show",[e,t]),runTests:()=>b("runTests"),onChange:e=>N("code",e),watch:N,exec:function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return b("exec",[e,...o])},destroy:()=>k.settled?b("destroy").then(x):h?Promise.reject(f):(x(),Promise.resolve())}}function i(e){void 0===e&&(e={});const{appUrl:t,params:o,config:r,import:i,...s}=e,l="string"==typeof r?{config:r}:"object"==typeof r?{x:"code/"+(0,a.compressToEncodedURIComponent)(JSON.stringify(r))}:{},n=new URLSearchParams(JSON.parse(JSON.stringify({...s,...o,x:i,...l}))).toString();return(t||"https://livecodes.io")+(n?"?"+n:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const o=e.dataset.options;if(o)try{t=JSON.parse(o)}catch{}let a;const i=e.dataset.config||e.dataset.prefill;if(i)try{a=JSON.parse(i)}catch{}const s=encodeURIComponent(e.outerHTML);e.innerHTML="",r(e,{import:"dom/"+s,...t,...a?{config:a}:{}})}))}))},7283:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>n,toc:()=>d});var a=o(7462),r=(o(7294),o(3905)),i=o(4887);const s={},l="Import",n={unversionedId:"features/import",id:"features/import",title:"Import",description:"Overview",source:"@site/docs/features/import.md",sourceDirName:"features",slug:"/features/import",permalink:"/livecodes/docs/features/import",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/features/import.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Code Snippets",permalink:"/livecodes/docs/features/snippets"},next:{title:"Export",permalink:"/livecodes/docs/features/export"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Examples",id:"examples",level:2},{value:"Sources",id:"sources",level:2},{value:"File Selection",id:"file-selection",level:2},{value:"Import Shared Projects",id:"import-shared-projects",level:2},{value:"Import Code from DOM",id:"import-code-from-dom",level:2},{value:"Import Raw Code",id:"import-raw-code",level:2},{value:"&quot;Edit in LiveCodes&quot; Bookmarklet",id:"edit-in-livecodes-bookmarklet",level:2},{value:"Import from CodePen",id:"import-from-codepen",level:2},{value:"Import Exported LiveCodes Projects",id:"import-exported-livecodes-projects",level:2},{value:"Related",id:"related",level:2}],c={toc:d};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"import"},"Import"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"LiveCodes supports importing code from a wide variety of sources."),(0,r.kt)("p",null,"The Import screen can be accessed from the app menu \u2192 Import."),(0,r.kt)(i.Z,{params:{screen:"import"},linkText:"direct link",mdxType:"RunInLiveCodes"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LiveCodes Import",src:o(3641).Z,width:"2697",height:"1581"})),(0,r.kt)("p",null,"Alternatively, a URL of any of the sources can be imported on-load by adding it as a value to ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/query-params"},"query param")," key: ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),". This is easier using the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/bookmarklet"},"bookmarklet"),"."),(0,r.kt)("p",null,"For ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/embeds"},"embedded playgrounds"),", use the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/"},"SDK")," property ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#import"},(0,r.kt)("inlineCode",{parentName:"a"},"EmbedOptions.import")),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GitHub File:"),(0,r.kt)("p",{parentName:"li"},"URL: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lodash/lodash/blob/master/isObject.js"},"https://github.com/lodash/lodash/blob/master/isObject.js")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?x=https://github.com/lodash/lodash/blob/master/isObject.js"},"Open in LiveCodes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GitHub Directory:"),(0,r.kt)("p",{parentName:"li"},"URL: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bradtraversy/50projects50days/tree/master/expanding-cards"},"https://github.com/bradtraversy/50projects50days/tree/master/expanding-cards")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?x=https://github.com/bradtraversy/50projects50days/tree/master/expanding-cards"},"Open in LiveCodes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GitHub Gist:"),(0,r.kt)("p",{parentName:"li"},"URL: ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/f01deb828a42f363502fbae7964d48e9"},"https://gist.github.com/f01deb828a42f363502fbae7964d48e9")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?x=https://gist.github.com/f01deb828a42f363502fbae7964d48e9"},"Open in LiveCodes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JS Bin:"),(0,r.kt)("p",{parentName:"li"},"URL: ",(0,r.kt)("a",{parentName:"p",href:"https://jsbin.com/iwovaj/73/embed?html,js,output"},"https://jsbin.com/iwovaj/73/embed?html,js,output")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?x=https://jsbin.com/iwovaj/73/embed?html,js,output"},"Open in LiveCodes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Vue Playground:"),(0,r.kt)("p",{parentName:"li"},"URL: ",(0,r.kt)("a",{parentName:"p",href:"https://play.vuejs.org/#eNp9kUFKAzEUhq/yyKYKtUW6K9OCli4UUVFxlU2Zvk5TM0lIXsbCMGdw7QG8g+fxAl7Bl5RWF9Jd3v//7+cLrxUXzg2aiGIsilB65QgCUnRTaVTtrCdoweMKOlh5W0OPoz1ppCmtCQR1qGCS/JPejWpwZpcY4Ov94/vzDZ45eSpNMdzVciEPhLXTC0KeAIr1+bRtc0nXFUOesqqMiwTNWc1teiIF+1KwVQwP26IvKDDCSlWDTbCG6du0K0Vpa6c0+jtHihGlGEN2krfQ2r5eZ418xP5eL9dYvvyjb8I2aVLcewzoG5Ti4NHCV0g7e/54i1t+H0wmj5rTR8wHDFbHxLiLXUazZOw/uUx7lW+gTPUU5ltCE/afSqAp2eW8FHyX2ZGv/+KOBqO8J00nuh/8Wasi"},"https://play.vuejs.org/#eNp9kUFKAzEUhq/yyKYKtUW6K9OCli4UUVFxlU2Z...")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?x=https%3A%2F%2Fplay.vuejs.org%2F%23eNp9kUFKAzEUhq%2FyyKYKtUW6K9OCli4UUVFxlU2Zvk5TM0lIXsbCMGdw7QG8g%2BfxAl7Bl5RWF9Jd3v%2F%2F7%2BcLrxUXzg2aiGIsilB65QgCUnRTaVTtrCdoweMKOlh5W0OPoz1ppCmtCQR1qGCS%2FJPejWpwZpcY4Ov94%2FvzDZ45eSpNMdzVciEPhLXTC0KeAIr1%2BbRtc0nXFUOesqqMiwTNWc1teiIF%2B1KwVQwP26IvKDDCSlWDTbCG6du0K0Vpa6c0%2BjtHihGlGEN2krfQ2r5eZ418xP5eL9dYvvyjb8I2aVLcewzoG5Ti4NHCV0g7e%2F54i1t%2BH0wmj5rTR8wHDFbHxLiLXUazZOw%2FuUx7lW%2BgTPUU5ltCE%2FafSqAp2eW8FHyX2ZGv%2F%2BKOBqO8J00nuh%2F8Wasi"},"Open in LiveCodes")))),(0,r.kt)("h2",{id:"sources"},"Sources"),(0,r.kt)("p",null,"Import is supported from any of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub gist"),(0,r.kt)("li",{parentName:"ul"},"GitHub file"),(0,r.kt)("li",{parentName:"ul"},"Directory in a GitHub repo"),(0,r.kt)("li",{parentName:"ul"},"Gitlab snippet"),(0,r.kt)("li",{parentName:"ul"},"Gitlab file"),(0,r.kt)("li",{parentName:"ul"},"Directory in a Gitlab repo"),(0,r.kt)("li",{parentName:"ul"},"JS Bin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/livecodes/docs/features/share"},"Shared projects")),(0,r.kt)("li",{parentName:"ul"},"Raw code"),(0,r.kt)("li",{parentName:"ul"},"Code in web page DOM"),(0,r.kt)("li",{parentName:"ul"},"Code in zip file"),(0,r.kt)("li",{parentName:"ul"},"Projects shared in official playgrounds of ",(0,r.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/play"},"TypeScript"),", ",(0,r.kt)("a",{parentName:"li",href:"https://play.vuejs.org/"},"Vue")," and ",(0,r.kt)("a",{parentName:"li",href:"https://svelte.dev/repl"},"Svelte")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/livecodes/docs/features/export"},"Exported project JSON")," (single project and bulk import)")),(0,r.kt)("p",null,"Import sources are identified by URL patterns (e.g. origin, pathname and extension)."),(0,r.kt)("h2",{id:"file-selection"},"File Selection"),(0,r.kt)("p",null,"For sources that provide multiple files (e.g. GitHub/GitLab directories, GitHub gists, GitLab snippets and zip files), a best guess is tried to load files in respective editors. Best results are when there are 3 files and each file is in a language (identified by file extension) that can be loaded to a different editor, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"index.html, style.css, script.js"),(0,r.kt)("li",{parentName:"ul"},"default.pug, app.scss, main.ts")),(0,r.kt)("p",null,"Markup files starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"index."),", style files starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"style.")," and script files starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"script.")," are given higher priority. While Markup files starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"readme.")," are given lower priority."),(0,r.kt)("p",null,"Alternatively, languages and files can be specified using ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/query-params"},"query params"),":",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"?x={url}&{language1}={file1}&{language2}={file2}&{language3}={file3}")),(0,r.kt)("h2",{id:"import-shared-projects"},"Import Shared Projects"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/share"},"Shared Projects")," can be imported using the value of the query param ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," generated by the Share screen. This starts with either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"code/"),": for compressed base64-encoded project config"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id/"),": for short URLs recognized by shared project id.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?x=id/bi9qszw86w3"},"https://livecodes.io/?x=id/bi9qszw86w3")),(0,r.kt)("h2",{id:"import-code-from-dom"},"Import Code from DOM"),(0,r.kt)("p",null,"If the source URL does not match one of the supported origins (GitHub, GitLab and JS Bin), the URL is fetched, its response text is parsed as ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"},"DOM")," and code is extracted from elements that match specific CSS selectors.",(0,r.kt)("br",{parentName:"p"}),"\n","(By default: ",(0,r.kt)("inlineCode",{parentName:"p"},'.livecodes [data-lang="{language}"]'),")"),(0,r.kt)("admonition",{title:"Example",type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<code class="livecodes">\n  <pre data-lang="html">This is identified as &lt;strong&gt;HTML&lt;/strong&gt; code</pre>\n</code>\n')),(0,r.kt)("p",{parentName:"admonition"},"The HTML editor is prefilled with: ",(0,r.kt)("inlineCode",{parentName:"p"},"This is identified as <strong>HTML</strong> code")),(0,r.kt)("p",{parentName:"admonition"},"Please note that the code should be html-encoded to avoid interference with the HTML of the page.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?x=https://live-codes.github.io/livecodes-examples/prefill-from-code-blocks.html"},"https://livecodes.io/?x=https://live-codes.github.io/livecodes-examples/prefill-from-code-blocks.html")),(0,r.kt)("p",null,"Alternatively, custom CSS selectors can be specified using ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/query-params"},"query params"),":",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"?x={url}&{language}-selector={selector}")),(0,r.kt)("p",null,"The following example loads the content of the first element that matches the CSS selector ",(0,r.kt)("inlineCode",{parentName:"p"},"h3")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"html"),":"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?html-selector=h3&x=https://live-codes.github.io/livecodes-examples/prefill-from-code-blocks.html"},"https://livecodes.io/?html-selector=h3&x=https://live-codes.github.io/livecodes-examples/prefill-from-code-blocks.html")),(0,r.kt)("p",null,"Of course, ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/embeds"},"embedded playgrounds")," can be prefilled with code from the same embedding page. This works well for documentation and educational websites."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://live-codes.github.io/livecodes-examples/prefill-from-code-blocks.html"},"This is a demo"),' for automatic extraction of code blocks to prefill editors by creating "Edit in LiveCodes" links. Also embedded editors are prefilled from the code blocks. (',(0,r.kt)("a",{parentName:"p",href:"https://github.com/live-codes/livecodes-examples/blob/master/prefill-from-code-blocks.html"},"View source"),")"),(0,r.kt)("h2",{id:"import-raw-code"},"Import Raw Code"),(0,r.kt)("p",null,"If the response text could not be parsed as DOM or no elements matched the CSS selectors, it is assumed to be raw code and the response text is loaded to editor. If the URL ends with an extension it is used to identify the language, otherwise it is assumed to be ",(0,r.kt)("inlineCode",{parentName:"p"},"html"),"."),(0,r.kt)("p",null,"Alternatively, the language of raw code can be specified using ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/query-params"},"query params"),":",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"?x={url}&raw={language}")),(0,r.kt)("h2",{id:"edit-in-livecodes-bookmarklet"},'"Edit in LiveCodes" Bookmarklet'),(0,r.kt)("p",null,"Instead of manually copy/pasting URLs to import, adding ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/bookmarklet"},(0,r.kt)("strong",{parentName:"a"},'"Edit in LiveCodes"')," bookmarklet")," to the browser bookmarks bar can be a more convenient way. It opens LiveCodes in a new window and imports the current webpage URL."),(0,r.kt)("h2",{id:"import-from-codepen"},"Import from CodePen"),(0,r.kt)("p",null,"Currently, CodePen API does not allow directly importing code from Pens (except for Pens of Pro users, which can be imported!). However, you can export any saved Pen as a ",(0,r.kt)("a",{parentName:"p",href:"https://blog.codepen.io/documentation/exporting-pens/#export-zip-1"},"zip file")," or ",(0,r.kt)("a",{parentName:"p",href:"https://blog.codepen.io/documentation/exporting-pens/#save-as-github-gist-2"},"Github gist")," and then import it to LiveCodes. The format that Codepen exports is well understood by LiveCodes. Most Pens can be imported with no or minimal changes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," External resources (styles/scripts) are not exported with source code in zip file export of CodePen. However, export to GitHub gist does export these. So if a Pen with external resources exported as zip file is not imported properly, try exporting to GitHub gist or manually add the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/external-resources"},"external resources"),"."),(0,r.kt)("h2",{id:"import-exported-livecodes-projects"},"Import Exported LiveCodes Projects"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/export#exporting-a-single-project"},"single project exported as JSON"),' can be imported in the same or a different device from the import screen under the tab "Import Project JSON". The JSON file can be supplied as a local file upload or from a URL.'),(0,r.kt)("p",null,"Similarly, ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/export#exporting-multiple-projects"},"multiple projects exported in bulk"),' can be imported from the tab "Bulk Import".'),(0,r.kt)("h2",{id:"related"},"Related"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/livecodes/docs/features/code-prefill"},"Code prefill")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/livecodes/docs/features/export"},"Export")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/livecodes/docs/features/external-resources"},"External resources")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/livecodes/docs/features/module-resolution"},"Module resolution")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/livecodes/docs/features/projects"},"Projects"))))}m.isMDXComponent=!0},3641:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/import-fab1bf7eb26deac51b086969ed7b9497.jpg"}}]);