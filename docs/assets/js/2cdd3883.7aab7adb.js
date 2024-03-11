"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},s="Result Page",i={unversionedId:"features/result",id:"features/result",title:"Result Page",description:"The output of a LiveCodes project is a single HTML page. This includes the (compiled) code from editors (markup + style + script) and external resources (CSS + JS), in addition to customizations specified in custom settings.",source:"@site/docs/features/result.md",sourceDirName:"features",slug:"/features/result",permalink:"/livecodes/docs/features/result",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/features/result.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"CSS",permalink:"/livecodes/docs/features/css"},next:{title:"External Resources",permalink:"/livecodes/docs/features/external-resources"}},l={},p=[{value:"Result page structure",id:"result-page-structure",level:2},{value:"Result page zoom",id:"result-page-zoom",level:2},{value:"Open in new window",id:"open-in-new-window",level:2},{value:"Show Spacings",id:"show-spacings",level:2},{value:"Scroll Position",id:"scroll-position",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"result-page"},"Result Page"),(0,o.kt)("p",null,"The output of a LiveCodes project is a single HTML page. This includes the (compiled) code from editors (markup + style + script) and ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/external-resources"},"external resources")," (CSS + JS), in addition to customizations specified in ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/advanced/custom-settings"},"custom settings"),"."),(0,o.kt)("p",null,"This page is loaded in a ",(0,o.kt)("a",{parentName:"p",href:"https://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/"},"sandboxed iframe")," with a unique origin to enforce ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/security"},"security"),". The page code is sent to the iframe in the browser (no code is sent to the server)."),(0,o.kt)("h2",{id:"result-page-structure"},"Result page structure"),(0,o.kt)("p",null,"This is the pseudo-code for the structure of the result page (inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://blog.codepen.io/documentation/preview-template/"},"CodePen docs"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html { Config.htmlAttrs }*>\n  <head>\n    <title>{ Config.title }*</title>\n    <meta name="title" content="{ Config.title }*" />\n    <meta name="description" content="{ Config.description }*" />\n\n    { Config.head }*\n\n    { CSS preset }**\n\n    { External CSS }**\n\n    { Editor CSS }\n\n    { Language(s) run-time CSS }***\n\n    { Language(s) run-time JS }***\n\n    { Import map }****\n\n  </head>\n  <body>\n\n    { Editor HTML }\n    \n    { External JS }**\n\n    { Editor JS }\n\n    { Spacing script (if enabled) }*****\n\n    { Test scripts (if enabled) }******\n\n  </body>\n</html>\n')),(0,o.kt)("p",null,"*"," See ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/configuration-object"},"Configuration Object"),"."),(0,o.kt)("p",null,"*","*"," See ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/external-resources"},"External Resources"),"."),(0,o.kt)("p",null,"*","*","*"," Although most languages are compiled and then the compiled code is used, some languages require run-time scripts or styles to run in the result page."),(0,o.kt)("p",null,"*","*","*","*"," See ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/module-resolution"},"Module Resolution"),"."),(0,o.kt)("p",null,"*","*","*","*","*"," See ",(0,o.kt)("a",{parentName:"p",href:"#show-spacings"},"Show Sapcings"),"."),(0,o.kt)("p",null,"*","*","*","*","*","*"," See ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/tests"},"Tests"),"."),(0,o.kt)("h2",{id:"result-page-zoom"},"Result page zoom"),(0,o.kt)("p",null,"The zoom button in the ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/tools-pane"},"tools pane")," below result page, allows you to toggle result page zoom (1x/0.5x/0.25x)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Result page zoom",src:n(3101).Z,width:"1576",height:"395"})),(0,o.kt)("h2",{id:"open-in-new-window"},"Open in new window"),(0,o.kt)("p",null,"From the ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/tools-pane"},"tools pane"),", the result page can be viewed in a separate window."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open in new window",src:n(5503).Z,width:"1531",height:"407"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please note that the URL of the result page shown in the new window is a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL#parameters"},"temporary URL"),", for local preview. Sharing this URL will not work."),(0,o.kt)("p",{parentName:"admonition"},"If you need to share a project, use the ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/share"},"Share screen"),". While, if you need to share the result page use the ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/display-modes"},"display mode")," or the ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/broadcast"},"broadcast")," feature.")),(0,o.kt)("h2",{id:"show-spacings"},"Show Spacings"),(0,o.kt)("p",null,"The spacing between elements on the result page can be measured by adding ",(0,o.kt)("a",{parentName:"p",href:"https://spacingjs.com/"},"Spacing.js")," to the result page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Show Spacings",src:n(3225).Z,width:"1575",height:"1044"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enable ",(0,o.kt)("inlineCode",{parentName:"li"},"Show Spacing")," setting in the app menu."),(0,o.kt)("li",{parentName:"ol"},"Move your cursor to an element and press Alt on Windows, or Option on a Mac."),(0,o.kt)("li",{parentName:"ol"},"Move your cursor to another element, the measurement results will be there.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Show Spacing")," is only available when viewing the result page in the app. It is not added to the result page for example when ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/export"},"exported")," or ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/deploy"},"deployed"),".")),(0,o.kt)("h2",{id:"scroll-position"},"Scroll Position"),(0,o.kt)("p",null,"By default, the result page scroll position is maintained after reloads."),(0,o.kt)("p",null,"To disable this behavior, set the ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/query-params"},"query param")," ",(0,o.kt)("inlineCode",{parentName:"p"},"scrollPosition")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://livecodes.io?scrollPosition=false\n")))}u.isMDXComponent=!0},5503:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/result-new-window-9730521166f4a51cbe2fc9e5de76ff9a.jpg"},3101:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/result-zoom-f1364fa504bbd706a8e81ad83522913d.jpg"},3225:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/spacings-8bdae1d695383bc6163182e9d26dc0a3.jpg"}}]);