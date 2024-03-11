"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="TSX",s={unversionedId:"languages/tsx",id:"languages/tsx",title:"TSX",description:"TSX is a syntax that allows using TypeScript in JSX.",source:"@site/docs/languages/tsx.md",sourceDirName:"languages",slug:"/languages/tsx",permalink:"/livecodes/docs/languages/tsx",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/tsx.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Token CSS",permalink:"/livecodes/docs/languages/tokencss"},next:{title:"Twig",permalink:"/livecodes/docs/languages/twig"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extension",id:"extension",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Custom Settings",id:"custom-settings",level:2},{value:"Starter Template",id:"starter-template",level:2},{value:"Links",id:"links",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tsx"},"TSX"),(0,r.kt)("p",null,"TSX is a syntax that allows using TypeScript in JSX.\n",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/learn/writing-markup-with-jsx"},"JSX")," is a syntax extension for JavaScript that allows writing HTML-like markup inside JavaScript.\nIt has been popularized by ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/"},"React"),", and then adopted by many other libraries/frameworks."),(0,r.kt)("p",null,"By default, when running JSX/TSX in LiveCodes, ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/"},"React")," runtime is used.\nHowever, other libraries like ",(0,r.kt)("a",{parentName:"p",href:"https://preactjs.com/"},"Preact"),", ",(0,r.kt)("a",{parentName:"p",href:"https://nanojsx.io/"},"nano JSX")," and others can be used as well (see ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/jsx#custom-jsx-runtimes"},"Custom JSX Runtimes"),")."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"For usage and examples, see documentation for ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/jsx"},"JSX")," and ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/typescript"},"TypeScript")," support in LiveCodes."),(0,r.kt)("h2",{id:"language-info"},"Language Info"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tsx")),(0,r.kt)("h3",{id:"extension"},"Extension"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".tsx")),(0,r.kt)("h3",{id:"editor"},"Editor"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"script")),(0,r.kt)("h2",{id:"compiler"},"Compiler"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/typescript"},"TypeScript compiler")),(0,r.kt)("h2",{id:"code-formatting"},"Code Formatting"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),"."),(0,r.kt)("h2",{id:"custom-settings"},"Custom Settings"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/advanced/custom-settings"},"Custom settings")," added to the property ",(0,r.kt)("inlineCode",{parentName:"p"},"tsx")," are passed to the TypeScript compiler as ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#compilerOptions"},"compiler options")," while compiling TSX.\nIn addition, the option ",(0,r.kt)("inlineCode",{parentName:"p"},"disableAutoRender")," can be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to disable ",(0,r.kt)("a",{parentName:"p",href:"./jsx#auto-rendering"},"auto-rendering"),"."),(0,r.kt)("p",null,"Please note that custom settings should be valid JSON (i.e. functions are not allowed)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Custom Settings"',title:'"Custom','Settings"':!0},'{\n  "tsx": {\n    "disableAutoRender": true,\n    "jsxFactory": "h",\n    "jsxFragmentFactory": "Fragment"\n  }\n}\n')),(0,r.kt)("h2",{id:"starter-template"},"Starter Template"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io/?template=react"},"https://livecodes.io/?template=react")," (uses JSX)"),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://react.dev/"},"React")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://react.dev/learn/writing-markup-with-jsx"},"JSX")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeScript"))))}u.isMDXComponent=!0}}]);