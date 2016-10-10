/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransforms3d-cssvhunit-dataset-flexbox-inputtypes-requestanimationframe-touchevents-mq-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,s,o,a;for(var u in g)if(g.hasOwnProperty(u)){if(e=[],t=g[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)o=e[s],a=o.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),x.push((i?"":"no-")+a.join("-"))}}function s(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(b&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?S.className.baseVal=t:S.className=t)}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=o(b?"svg":"body"),e.fake=!0),e}function u(e,n,r,i){var s,u,l,f,d="modernizr",p=o("div"),c=a();if(parseInt(r,10))for(;r--;)l=o("div"),l.id=i?i[r]:d+(r+1),p.appendChild(l);return s=o("style"),s.type="text/css",s.id="s"+d,(c.fake?c:p).appendChild(s),c.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(c)),u=n(p,e),c.fake?(c.parentNode.removeChild(c),S.style.overflow=f,S.offsetHeight):p.parentNode.removeChild(p),!!u}function l(e,t){return!!~(""+e).indexOf(t)}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(f(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];i--;)s.push("("+f(t[i])+":"+r+")");return s=s.join(" or "),u("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t,i,s){function a(){f&&(delete k.style,delete k.modElem)}if(s=r(s,"undefined")?!1:s,!r(i,"undefined")){var u=d(e,i);if(!r(u,"undefined"))return u}for(var f,c,m,h,v,y=["modernizr","tspan"];!k.style;)f=!0,k.modElem=o(y.shift()),k.style=k.modElem.style;for(m=e.length,c=0;m>c;c++)if(h=e[c],v=k.style[h],l(h,"-")&&(h=p(h)),k.style[h]!==n){if(s||r(i,"undefined"))return a(),"pfx"==t?h:!0;try{k.style[h]=i}catch(g){}if(k.style[h]!=v)return a(),"pfx"==t?h:!0}return a(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var i;for(var s in e)if(e[s]in t)return n===!1?e[s]:(i=t[e[s]],r(i,"function")?m(i,n||t):i);return!1}function v(e,t,n,i,s){var o=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(o+" ")+o).split(" ");return r(t,"string")||r(t,"undefined")?c(a,t,i,s):(a=(e+" "+P.join(o+" ")+o).split(" "),h(a,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var g=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){g.push({name:e,fn:t,options:n})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var x=[],S=t.documentElement,b="svg"===S.nodeName.toLowerCase(),w=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();C.mq=w;var _="Moz O ms Webkit",T=C._config.usePrefixes?_.split(" "):[];C._cssomPrefixes=T;var z={elem:o("modernizr")};Modernizr._q.push(function(){delete z.elem});var k={style:z.elem.style};Modernizr._q.unshift(function(){delete k.style});var P=C._config.usePrefixes?_.toLowerCase().split(" "):[];C._domPrefixes=P,C.testAllProps=v,C.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0));var A=C.testStyles=u,E="CSS"in e&&"supports"in e.CSS,j="supportsCSS"in e;Modernizr.addTest("supports",E||j),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in S.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",A(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),A("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",r==n)});var N=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];C._prefixes=N,Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",N.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");A(r,function(e){n=9===e.offsetTop})}return n});var q=o("input"),L="search tel url email datetime date month week time datetime-local number range color".split(" "),O={};Modernizr.inputtypes=function(e){for(var r,i,s,o=e.length,a="1)",u=0;o>u;u++)q.setAttribute("type",r=e[u]),s="text"!==q.type&&"style"in q,s&&(q.value=a,q.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&q.style.WebkitAppearance!==n?(S.appendChild(q),i=t.defaultView,s=i.getComputedStyle&&"textfield"!==i.getComputedStyle(q,null).WebkitAppearance&&0!==q.offsetHeight,S.removeChild(q)):/^(search|tel)$/.test(r)||(s=/^(url|email)$/.test(r)?q.checkValidity&&q.checkValidity()===!1:q.value!=a)),O[e[u]]=!!s;return O}(L),Modernizr.addTest("dataset",function(){var e=o("div");return e.setAttribute("data-a-b","c"),!(!e.dataset||"c"!==e.dataset.aB)}),Modernizr.addTest("classlist","classList"in S);var R=function(t){var r,i=N.length,s=e.CSSRule;if("undefined"==typeof s)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in s)return"@"+t;for(var o=0;i>o;o++){var a=N[o],u=a.toUpperCase()+"_"+r;if(u in s)return"@-"+a.toLowerCase()+"-"+t}return!1};C.atRule=R;var V=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?R(e):(-1!=e.indexOf("-")&&(e=p(e)),t?v(e,t,n):v(e,"pfx"))};Modernizr.addTest("requestanimationframe",!!V("requestAnimationFrame",e),{aliases:["raf"]}),i(),s(x),delete C.addTest,delete C.addAsyncTest;for(var $=0;$<Modernizr._q.length;$++)Modernizr._q[$]();e.Modernizr=Modernizr}(window,document);