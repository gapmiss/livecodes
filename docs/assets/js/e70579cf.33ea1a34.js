"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1944],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||n;return r?o.createElement(m,i(i({ref:t},s),{},{components:r})):o.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4791:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=r(7462),a=(r(7294),r(3905));const n={},i="Export",l={unversionedId:"features/export",id:"features/export",title:"Export",description:"Exporting A Single Project",source:"@site/docs/features/export.md",sourceDirName:"features",slug:"/features/export",permalink:"/livecodes/docs/features/export",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/features/export.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Import",permalink:"/livecodes/docs/features/import"},next:{title:"Share",permalink:"/livecodes/docs/features/share"}},p={},c=[{value:"Exporting A Single Project",id:"exporting-a-single-project",level:2},{value:"Exporting Multiple Projects",id:"exporting-multiple-projects",level:2},{value:"Related",id:"related",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"export"},"Export"),(0,a.kt)("h2",{id:"exporting-a-single-project"},"Exporting A Single Project"),(0,a.kt)("p",null,"Project export can be accessed from app menu \u2192 Export."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"LiveCodes Export",src:r(9132).Z,width:"3200",height:"1800"})),(0,a.kt)("p",null,"Any project can be exported to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Project (JSON):")," a JSON file containing project ",(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/configuration/configuration-object"},"configuration object"),". This can be used to later ",(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/features/import#import-exported-livecodes-projects"},"import")," that project on the same or a different device or to share a copy of the project with others."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Source (ZIP):")," a zip file containing the project configuration file as JSON, in addition to the source code in separate files. This can be useful for opening the code in an external IDE."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Result (HTML):")," ",(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/features/result"},"result page")," as a single html file. Can be used for the purpose of demo or deploy."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GitHub gist")," (",(0,a.kt)("em",{parentName:"li"},"requires login with ",(0,a.kt)("a",{parentName:"em",href:"/livecodes/docs/features/github-integration"},"GitHub account")),"): creates a ",(0,a.kt)("strong",{parentName:"li"},"public")," GitHub gist on the user's GitHub account containing the source code as separate files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CodePen:")," creates a ",(0,a.kt)("a",{parentName:"li",href:"https://codepen.io/"},"CodePen")," prefilled with the project code. If the used ",(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/languages/"},"languages/frameworks")," are not supported in CodePen (e.g. Astro, Svelte, Python, ...etc), the compiled code is exported so that it continues to work there. ",(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/features/module-resolution"},"Bare module imports")," are converted to esm imports, for example:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\n")),"becomes:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'https://cdn.skypack.dev/react';\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"JSFiddle:")," creates a ",(0,a.kt)("a",{parentName:"li",href:"https://jsfiddle.net/"},"JSFiddle")," prefilled with the project code. Exported code may be modified like with CodePen (see above).")),(0,a.kt)("h2",{id:"exporting-multiple-projects"},"Exporting Multiple Projects"),(0,a.kt)("p",null,"Multiple projects can be exported in bulk from the ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/features/projects"},"Saved Projects")," screen (app menu \u2192 Open) using the button ",(0,a.kt)("inlineCode",{parentName:"p"},"Export All"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"saved projects",src:r(4987).Z,width:"3200",height:"1800"})),(0,a.kt)("p",null,"This produces a JSON file containing an array of project configuration objects. They can be later imported in the same or a different device using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Bulk Import")," functionality in the ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/features/import#import-exported-livecodes-projects"},"Import screen"),"."),(0,a.kt)("p",null,"All the currently visible projects will be exported. If projects are filtered (e.g. by language, tag or search query), only the shown projects are exported."),(0,a.kt)("h2",{id:"related"},"Related"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/features/projects"},"Projects")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/features/import"},"Import")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/features/backup-restore"},"Backup/Restore")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/features/sync"},"Sync")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/livecodes/docs/features/share"},"Share"))))}u.isMDXComponent=!0},9132:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/export-a6ff8131df20cb181cfbb03d8bcf4879.png"},4987:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/saved-projects-439c13b2c5e8e0a8348e0dedc170cb3c.png"}}]);