(this["webpackJsonpcheck-differ"]=this["webpackJsonpcheck-differ"]||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){},115:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(30),l=n.n(i),s=(n(111),n(32)),r=n(190),o=n(195),d=n(45),h=n(191),j=n(193),u=n(192),f=n(103),b=n(194),v=(n(112),n(6)),O=function(){return Object(v.jsx)("svg",{className:"collapsible-icon",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M8.177.677l2.896 2.896a.25.25 0 01-.177.427H8.75v1.25a.75.75 0 01-1.5 0V4H5.104a.25.25 0 01-.177-.427L7.823.677a.25.25 0 01.354 0zM7.25 10.75a.75.75 0 011.5 0V12h2.146a.25.25 0 01.177.427l-2.896 2.896a.25.25 0 01-.354 0l-2.896-2.896A.25.25 0 015.104 12H7.25v-1.25zm-5-2a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 016 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 0112 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z"})})},x=function(){return Object(v.jsx)("svg",{className:"collapsible-icon",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M8.177 14.323l2.896-2.896a.25.25 0 00-.177-.427H8.75V7.764a.75.75 0 10-1.5 0V11H5.104a.25.25 0 00-.177.427l2.896 2.896a.25.25 0 00.354 0zM2.25 5a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 4.25a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5a.75.75 0 01.75.75zM8.25 5a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 4.25a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5a.75.75 0 01.75.75zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z"})})},p=function(){return Object(v.jsx)("svg",{className:"collapsible-icon",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(v.jsx)("path",{fillRule:"evenodd",d:"M7.823 1.677L4.927 4.573A.25.25 0 005.104 5H7.25v3.236a.75.75 0 101.5 0V5h2.146a.25.25 0 00.177-.427L8.177 1.677a.25.25 0 00-.354 0zM13.75 11a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zm-3.75.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zM7.75 11a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM4 11.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zM1.75 11a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"})})},m=r.a.Content,g=0,N=1,z=function(e){var t=e.diffResults,n=e.isFile,a=Object(c.useState)([]),i=Object(s.a)(a,2),l=i[0],r=i[1],o=Object(c.useState)(N),d=Object(s.a)(o,2),h=d[0],j=d[1],u=Object(c.useState)(h===N),f=Object(s.a)(u,2),z=f[0],C=f[1];Object(c.useEffect)((function(){y(t)}),[t]),Object(c.useEffect)((function(){C(h===N)}),[h]);var y=function(e){if("string"!==typeof(e||t)){var c=(e||t).map((function(e,t,c){var a,i,l,s,r;n?(i="+"===e[0],l="-"===e[0],s=e.slice(1),r=1):(i=e.added,l=e.removed,s=e.value,r=e.count);var o,d,h,j=(null===(a=s)||void 0===a?void 0:a.split("\n").filter((function(e){return e})))||[],u=(i?"+":l&&"-")||" ";if(" "!==u)d=[],h=[],o=j;else{var f=j.length;f<=6?(d=[],h=[],o=j):(o=j.slice(0,3),d=j.slice(3,f-3),h=j.slice(f-3))}return{type:u,count:r,content:{hidden:d,head:o,tail:h}}})),a=1,i=1;c.forEach((function(e){var t=e.type,n=e.count;e.leftPos=a,e.rightPos=i,a+="+"===t?0:n,i+="-"===t?0:n})),r(c)}},k=function(e,t){var n=l.slice(),c=n[t],a=c.content,i=a.head,s=a.tail,o=a.hidden;if("head"===e)c.content.head=i.concat(o.slice(0,3)),c.content.hidden=o.slice(3);else if("tail"===e){var d=o.length;c.content.tail=o.slice(d-3).concat(s),c.content.hidden=o.slice(0,d-3)}else c.content.head=i.concat(o),c.content.hidden=[];n[t]=c,r(n)},w=function(e,t){var n=e.length<6;return Object(v.jsxs)("div",{className:"collapsible-wrapper",children:[Object(v.jsx)("div",{className:"colLeft ".concat(z?"splitWidth":""),children:n?Object(v.jsx)("div",{className:"arrow",onClick:function(){return k("all",t)},children:Object(v.jsx)(O,{})}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"arrow",onClick:function(){return k("head",t)},children:Object(v.jsx)(x,{})}),Object(v.jsx)("div",{className:"arrow",onClick:function(){return k("tail",t)},children:Object(v.jsx)(p,{})})]})}),Object(v.jsx)("div",{className:"collRight, ".concat(z?"collRightSplit":""),children:Object(v.jsx)("div",{className:"colRContent ".concat(n?"":"cRHeight"),children:"Collapsed: ".concat(e.length," lines")})})]},"collapse")},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.type,c=e.content,a=e.leftPos,i=t.type,l=t.content,s=t.rightPos,r=(null===c||void 0===c?void 0:c.head)||[],o=(null===l||void 0===l?void 0:l.head)||[],d="+"===n?"add":"removed",h="+"===i?"add":"removed";return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"iBlock lBorder",children:r.map((function(e,t){return Object(v.jsxs)("div",{className:"prBlock ".concat(d),children:[L(a+t),P("-  "+e)]},t)}))}),Object(v.jsx)("div",{className:"iBlock ".concat(r.length?"":"rBorder"),children:o.map((function(e,t){return Object(v.jsxs)("div",{className:"prBlock ".concat(h),children:[L(s+t),P("+  "+e)]},t)}))})]})},M=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.content,c=n.head,a=n.hidden,i=n.tail,l=e.leftPos,s=e.rightPos;return(t?c:i).map((function(e,n){var i=t?0:c.length+a.length;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"iBlock lBorder",children:[L(l+i+n),P("    "+e)]}),Object(v.jsxs)("div",{className:"iBlock",children:[L(s+i+n),P("    "+e)]})]},(t?"h-":"t-")+n)}))},S=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.type,c=e.content,a=c.head,i=c.tail,l=c.hidden,s=e.leftPos,r=e.rightPos,o=" "===n,d="normal ".concat("+"===n?"add":""," ").concat("-"===n?"removed":""),h="     ";return(t?a:i).map((function(e,c){var i="";if(o){var j=t?0:a.length+l.length;i=(h+(s+j+c)).slice(-5)+(h+(r+j+c)).slice(-5)}else i="-"===n?F(s+c)+h:h+F(r+c);return Object(v.jsxs)("div",{className:d,children:[Object(v.jsx)("pre",{className:"pre line",children:i}),Object(v.jsx)("div",{className:"outerPre",children:Object(v.jsxs)("div",{className:"splitCon",children:[Object(v.jsx)("div",{className:"spanWidth",children:" "+n+" "}),P(e)]})})]},(t?"h-":"t-")+c)}))},F=function(e){return("     "+e).slice(-5)},L=function(e){var t=("     "+e).slice(-5);return Object(v.jsx)("div",{className:"splitLN",children:t})},P=function(e){return Object(v.jsx)("div",{className:"splitCon",children:e})};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"radioGroup",children:Object(v.jsxs)(b.a.Group,{value:h,size:"small",onChange:function(e){return function(e){j(e.target.value)}(e)},children:[Object(v.jsx)(b.a.Button,{value:N,children:"Split"}),Object(v.jsx)(b.a.Button,{value:g,children:"Unified"})]})}),Object(v.jsx)(m,{className:"content",children:Object(v.jsx)("div",{className:"color",children:z?function(){for(var e=l.length,t=[],n=0;n<e;n++){var c=l[n],a=c.type,i=c.content.hidden;if(" "===a)t.push(Object(v.jsxs)("div",{children:[M(c),i.length&&w(i,n)||null,M(c,!1)]},n));else if("-"===a){var s=l[n+1]||{content:{}},r="+"===s.type;t.push(Object(v.jsx)("div",{children:B(c,r?s:{})},n)),r&&(n+=1)}else"+"===a&&t.push(Object(v.jsx)("div",{children:B({},c)},n))}return Object(v.jsx)("div",{children:t})}():l.map((function(e,t){var n=e.type,c=e.content.hidden,a=" "===n;return Object(v.jsxs)("div",{children:[S(e),c.length&&a&&w(c,t)||null,S(e,!1)]},t)}))})})]})},C=(n(115),n(84)),y=h.a.Item,k=j.a.TextArea,w={labelCol:{span:4},wrapperCol:{span:20}},B={labelCol:{span:10},wrapperCol:{span:10}},M=["diffLines","diffTrimmedLines"],S=function(){var e=Object(c.useState)("abc"),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)("ab"),l=Object(s.a)(i,2),r=l[0],o=l[1],h=Object(c.useState)("diffLines"),j=Object(s.a)(h,2),b=j[0],O=j[1],x=Object(c.useState)([]),p=Object(s.a)(x,2),m=p[0],g=p[1];Object(c.useEffect)((function(){S()}),[]);var N=function(e,t){"left"===e&&a(t.target.value),"right"===e&&o(t.target.value)},S=function(){var e=C[b](n,r);g(e)};return Object(v.jsxs)("div",{className:"wrapper",children:[Object(v.jsxs)("div",{className:"inputWrapper",children:[Object(v.jsx)(y,Object(d.a)(Object(d.a)({},w),{},{label:"Left",className:"input",children:Object(v.jsx)(k,{style:{height:350},defaultValue:n,onChange:function(e){return N("left",e)}})})),Object(v.jsx)(y,Object(d.a)(Object(d.a)({},w),{},{label:"Right",className:"input",children:Object(v.jsx)(k,{style:{height:350},defaultValue:r,onChange:function(e){return N("right",e)}})}))]}),Object(v.jsxs)("div",{className:"funWrapper",children:[Object(v.jsx)(y,Object(d.a)(Object(d.a)({},B),{},{label:"Methods",children:Object(v.jsx)(u.a,{defaultValue:b,style:{width:220},onChange:function(e){O(e)},children:M.map((function(e,t){return Object(v.jsx)(u.a.Option,{value:e,children:e},t)}))})})),Object(v.jsx)(f.a,{type:"primary",onClick:S,children:"Compare"})]}),Object(v.jsx)(z,{diffResults:m,isFile:!1})]})},F=(n(185),function(){var e=r.a.Footer;return Object(v.jsxs)(e,{className:"footer",children:["\xa9 2021 - ",(new Date).getFullYear()," Check Differ, Xz"]})}),L=(n(186),n(187),{array:["a","b","c","d","e"],object:{a:"b",c:"d",e:"f",g:"h",i:"j"}}),P={array:["a","b","z","d","e"],object:{a:"b",c2:"d",e:"f",g:"h2",i:"j"}},R=n(84),V="0",H="1",A=function(){var e=Object(c.useState)(V),t=Object(s.a)(e,2),n=t[0],a=t[1],i=function(){var e=R.diffJson(L,P);return Object(v.jsx)(z,{diffResults:e,isFile:!1})};return Object(v.jsxs)(r.a,{children:[Object(v.jsxs)(o.a,{mode:"horizontal",onClick:function(e){return function(e){a(e.key)}(e)},defaultSelectedKeys:[n],children:[Object(v.jsx)(o.a.Item,{children:"Text Diff"},V),Object(v.jsx)(o.a.Item,{children:"JSON Diff"},H)]}),n===V&&Object(v.jsx)(S,{}),n===H&&Object(v.jsx)(i,{}),Object(v.jsx)(F,{})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,196)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),i(e),l(e)}))};l.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(A,{})}),document.getElementById("root")),D()}},[[188,1,2]]]);
//# sourceMappingURL=main.98ae783d.chunk.js.map