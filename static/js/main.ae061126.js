(()=>{"use strict";var e={5004:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var n=r(9385),l=r(6792),a=r(1204),o=r(8994),i=r(1054),s=r(2629),u=l.default.create({container:{marginTop:40,backgroundColor:"#333333",flexDirection:"row",justifyContent:"space-around",padding:10},textColor:{color:"white"}});const c=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.default,{style:u.container,children:[(0,s.jsx)(a.Link,{to:"/",underlayColor:"#f0f4f7",children:(0,s.jsx)(i.default,{style:u.textColor,children:"Stochastic"})}),(0,s.jsx)(i.default,{style:u.textColor,children:"|"}),(0,s.jsx)(a.Link,{to:"/kolgomorov",underlayColor:"#f0f4f7",children:(0,s.jsx)(i.default,{style:u.textColor,children:"Kolgomorov"})}),(0,s.jsx)(i.default,{style:u.textColor,children:"|"}),(0,s.jsx)(a.Link,{to:"/montecarlo",underlayColor:"#f0f4f7",children:(0,s.jsx)(i.default,{style:u.textColor,children:"MonteCarlo"})})]}),(0,s.jsx)(o.Outlet,{})]})};var d=r(2982),f=r(4942),x=r(885),h=r(3094),j=r(6591),b=r(3019),y=r(5326),p=l.default.create({button:{alignItems:"center",justifyContent:"center",paddingVertical:12,paddingHorizontal:32,borderRadius:4,elevation:3,backgroundColor:"#454440"},textColor:{color:"white"}});const g=function(e){var t=e.solver;return(0,s.jsx)(y.default,{style:p.button,onPress:t,children:(0,s.jsx)(i.default,{style:p.textColor,children:"\u041d\u0430\u0436\u043c\u0456\u0442\u044c"})})};var v=l.default.create({header:{fontSize:20,fontWeight:"600"}});const m=function(e){var t=e.text;return(0,s.jsx)(i.default,{style:v.header,children:t})};var w=l.default.create({input:{borderWidth:.5,width:"75%",textAlign:"center"}});const C=function(e){var t=e.value,r=e.setter,n=e.text;return(0,s.jsx)(j.default,{value:t,onChangeText:function(e){return r(e)},style:w.input,placeholder:n})};function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,f.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=l.default.create({mainContainer:{gap:20,marginTop:25,justifyContent:"center",flexDirection:"column",alignItems:"center"},container:{width:"80%"},innerContainer:{backgroundColor:"#55615f",display:"flex",flexDirection:"column"},input:{borderWidth:.5,width:"75%",textAlign:"center"},tableView:{display:"flex",flexDirection:"row",gap:35},tableText:{fontSize:17,color:"white"},finalText:{fontSize:18,color:"white"}});const k=function(){var e=(0,h.useState)({row1:"",row2:"",row3:"",row4:"",row5:""}),t=(0,x.default)(e,2),r=t[0],l=t[1],a=(0,h.useState)(""),o=(0,x.default)(a,2),u=o[0],c=o[1],y=(0,h.useState)(""),p=(0,x.default)(y,2),v=p[0],w=p[1],O=(0,h.useState)([]),k=(0,x.default)(O,2),P=k[0],$=k[1];return(0,s.jsx)(n.default,{children:(0,s.jsxs)(b.default,{contentContainerStyle:S.mainContainer,children:[(0,s.jsx)(m,{text:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434\u0438 \u0441\u0442\u0430\u043d\u0456\u0432 \u0437\u0430 \u0442\u0430\u043a\u0442\u0430\u043c\u0438"}),["\u043f\u0435\u0440\u0448\u0438\u0439","\u0434\u0440\u0443\u0433\u0438\u0439","\u0442\u0440\u0435\u0442\u0456\u0439","\u0447\u0435\u0442\u0432\u0435\u0440\u0442\u0438\u0439","\u043f'\u044f\u0442\u0438\u0439"].map((function(e,t){return(0,s.jsx)(j.default,{value:r[`row${t+1}`],onChangeText:function(e){return function(e,t){l((function(r){return T(T({},r),{},(0,f.default)({},e,t))}))}(`row${t+1}`,e)},style:S.input,placeholder:`\u0412\u0432\u0435\u0434\u0456\u0442\u044c ${e} \u0440\u044f\u0434\u043e\u043a \u0437 \u043c\u0430\u0442\u0440\u0438\u0446\u0456`},`row${t+1}`)})),(0,s.jsx)(C,{value:u,setter:c,text:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0442\u0430\u043d\u0438"}),(0,s.jsx)(C,{value:v,setter:w,text:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0442\u0430\u043a\u0442\u0456\u0432"}),(0,s.jsx)(g,{solver:function(){try{for(var e=[],t=1;t<=5;t++){var n=r[`row${t}`].split(" ").map(Number);e.push(n)}for(var l=u.split(" ").map(Number),a=Number(v),o=0,i=0,s=[],c=0;c<a;c++){i==l.length&&(i=0);for(var f=`${l[i]} <= `,x=0,h=0;h<e[o].length;h++){if((x+=e[o][h])>=l[i]){f+=`${e[o][h]}`,s=[].concat((0,d.default)(s),[{stateOfSystem:`${h}`,equation:f}]),o=h;break}f+=`${e[o][h]} + `}i++}$(s)}catch(j){console.log("error")}}}),(0,s.jsx)(n.default,{style:S.container,children:(0,s.jsx)(n.default,{style:S.innerContainer,children:P.map((function(e,t){return(0,s.jsxs)(n.default,{style:S.innerContainer,children:[(0,s.jsxs)(i.default,{style:S.tableText,children:[t+1+" )"," ",e.equation]}),(0,s.jsxs)(i.default,{style:S.tableText,children:["\u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0435\u043c\u043e \u0443 \u0441\u0442\u0430\u043d z",e.stateOfSystem]})]},t)}))})})]})})};var P=l.default.create({tableView:{display:"flex",flexDirection:"row",gap:10},tableText:{fontSize:17,marginVertical:10,color:"white"}});const $=function(e){var t=e.text,r=e.array;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.default,{style:P.tableText,children:t}),(0,s.jsx)(n.default,{style:P.tableView,children:r.map((function(e,t){return(0,s.jsx)(i.default,{style:P.tableText,children:e},t)}))})]})};var D=l.default.create({mainContainer:{gap:20,marginTop:25,justifyContent:"center",flexDirection:"column",alignItems:"center"},container:{height:"70%",width:"85%"},innerContainer:{flex:1,backgroundColor:"#55615f"},distributionView:{display:"flex",flexDirection:"column",marginVertical:10},tableText:{fontSize:17,marginVertical:10,color:"white"},finalText:{fontSize:18,color:"white"}});const V=function(){var e=(0,h.useState)(""),t=(0,x.default)(e,2),r=t[0],l=t[1],a=(0,h.useState)({modular:[],diff:0,arr:[],distribution:[]}),o=(0,x.default)(a,2),u=o[0],c=o[1];function d(e){if(e.length<2)return null;for(var t=e[0],r=e[0],n=1;n<e.length;n++)e[n]<t&&(t=e[n]),e[n]>r&&(r=e[n]);return r-t}return(0,s.jsxs)(n.default,{style:D.mainContainer,children:[(0,s.jsx)(m,{text:"\u041a\u0440\u0438\u0442\u0435\u0440\u0456\u0439 \u041a\u043e\u043b\u0433\u043e\u043c\u043e\u0440\u043e\u0432\u0430-\u0421\u043c\u0456\u0440\u043d\u043e\u0432\u0430"}),(0,s.jsx)(C,{value:r,setter:l,text:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0441\u043b\u0456\u0434\u043e\u0432\u043d\u0456\u0441\u0442\u044c \u0432\u0438\u043f\u0430\u0434\u043a\u043e\u0432\u0438\u0445 \u0447\u0438\u0441\u0435\u043b"}),(0,s.jsx)(g,{solver:function(){try{var e=r.split(" ").map((function(e){return Number(e)})).sort((function(e,t){return e-t})),t=[],n=e.map((function(e,r){return e=Math.abs(e-Number(2*(r+1))),t.push(2*(r+1)),e}));c({modular:n,arr:e,distribution:t,diff:d(n)})}catch(l){console.log("error")}}}),(0,s.jsx)(n.default,{style:D.container,children:(0,s.jsx)(n.default,{style:D.innerContainer,children:(0,s.jsxs)(b.default,{children:[(0,s.jsxs)(n.default,{style:D.distributionView,children:[(0,s.jsx)($,{text:"\u0420\u0456\u0432\u043d\u043e\u043c\u0456\u0440\u043d\u0438\u0439 \u0437\u0430\u043a\u043e\u043d \u0440\u043e\u0437\u043f\u043e\u0434\u0456\u043b\u0443 \u043f\u0456\u0441\u043b\u044f \u0441\u043e\u0440\u0442\u0443\u0432\u0430\u043d\u043d\u044f:",array:u.arr}),(0,s.jsx)($,{text:"",array:u.distribution})]}),(0,s.jsx)(n.default,{children:(0,s.jsx)($,{text:"\u0412\u0456\u0434\u043d\u0456\u043c\u0430\u0454\u043c\u043e \u0447\u0438\u0441\u043b\u0430 \u043f\u043e \u043c\u043e\u0434\u0443\u043b\u044e \u0456 \u0437\u043d\u0430\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448\u0443 \u0440\u0456\u0437\u043d\u0438\u0446\u044e:",array:u.modular})}),(0,s.jsxs)(n.default,{children:[(0,s.jsxs)(i.default,{style:D.tableText,children:["\u041e\u0442\u0436\u0435, \u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448\u0430 \u0440\u0456\u0437\u043d\u0438\u0446\u044f ",u.diff]}),(0,s.jsxs)(i.default,{style:D.tableText,children:["\u041a\u0440\u0438\u0442\u0435\u0440\u0456\u0439 \u041a\u043e\u043b\u0433\u043e\u043c\u043e\u0440\u043e\u0432\u0430-\u0421\u043c\u0456\u0440\u043d\u043e\u0432\u0430: k = ",u.diff,"\u221a",u.arr.length," = ",(u.diff*Math.sqrt(u.arr.length)).toFixed(3)]})]})]})})})]})};var z=r(290),F=l.default.create({mainContainer:{gap:20,marginTop:60,justifyContent:"center",flexDirection:"column",alignItems:"center"},container:{height:"60%",width:"85%"},innerContainer:{flex:1,backgroundColor:"#55615f"},tableView:{display:"flex",flexDirection:"row",gap:35},tableText:{fontSize:17,color:"white"},finalText:{fontSize:18,color:"white"}});const _=function(){var e=(0,h.useState)(""),t=(0,x.default)(e,2),r=t[0],l=t[1],a=(0,h.useState)(""),o=(0,x.default)(a,2),u=o[0],c=o[1],f=(0,h.useState)(0),j=(0,x.default)(f,2),y=j[0],p=j[1],v=(0,h.useState)([]),w=(0,x.default)(v,2),O=w[0],T=w[1],S=(0,h.useState)(""),k=(0,x.default)(S,2),P=k[0],$=k[1];return(0,s.jsxs)(n.default,{style:F.mainContainer,children:[(0,s.jsx)(m,{text:"\u041c\u0435\u0442\u043e\u0434 \u041c\u043e\u043d\u0442\u0435-\u041a\u0430\u0440\u043b\u043e"}),(0,s.jsx)(C,{value:r,setter:l,text:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0441\u043b\u0456\u0434\u043e\u0432\u043d\u0456\u0441\u0442\u044c \u0432\u0438\u043f\u0430\u0434\u043a\u043e\u0432\u0438\u0445 \u0447\u0438\u0441\u0435\u043b"}),(0,s.jsx)(C,{value:u,setter:c,text:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043d\u0442\u0435\u0440\u0432\u0430\u043b"}),(0,s.jsx)(g,{solver:function(){try{var e=r.split(" ").map(Number),t=Number(u);if(0==t)throw new Error("error");var n={};e.forEach((function(e){n[e]=(n[e]||0)+1})),Object.keys(n).forEach((function(t){n[t]/=e.length}));var l=[],a=`\u0417\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0432\u0438\u043f\u0430\u0434\u043a\u043e\u0432\u043e\u0457 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0438, \u044f\u043a\u0430 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0439\u043c\u043e\u0432\u0456\u0440\u043d\u043e\u0441\u0442\u0456 ${t} \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c `,o=0,i=[0],s=[0,0,0];Object.keys(n).forEach((function(e){i=[].concat((0,d.default)(i),[e]),s=[].concat((0,d.default)(s),[(o+n[e]).toFixed(2),(o+n[e]).toFixed(2)]),l=[].concat((0,d.default)(l),[[`${e+1}`,`${n[e].toFixed(3)}`,`${(o+n[e]).toFixed(2)}`]]),t>=o&&t<=o+n[e]&&(a+=e+" "),o+=n[e]})),p({labels:i,datasets:[{data:s}]}),$(a),T(l)}catch(c){console.log("error")}}}),(0,s.jsxs)(n.default,{style:F.tableView,children:[(0,s.jsx)(i.default,{children:"\u0427\u0438\u0441\u043b\u043e"}),(0,s.jsx)(i.default,{children:"\u0419\u043c\u043e\u0432\u0456\u0440\u043d\u0456\u0441\u0442\u044c"}),(0,s.jsx)(i.default,{children:"\u041a\u043e\u043c\u0443\u0442\u0430\u0442\u0438\u0432\u043d\u0430 \u0439\u043c\u043e\u0432\u0456\u0440\u043d\u0456\u0441\u0442\u044c"})]}),(0,s.jsx)(n.default,{style:F.container,children:(0,s.jsx)(n.default,{style:F.innerContainer,children:(0,s.jsxs)(b.default,{children:[(0,s.jsx)(n.default,{children:O.map((function(e,t){return(0,s.jsxs)(n.default,{style:F.tableView,children:[(0,s.jsx)(i.default,{style:F.tableText,children:e[0]}),(0,s.jsx)(i.default,{style:F.tableText,children:"|"}),(0,s.jsx)(i.default,{style:F.tableText,children:e[1]}),(0,s.jsx)(i.default,{style:F.tableText,children:"|"}),(0,s.jsx)(i.default,{style:F.tableText,children:e[2]})]},t)}))}),(0,s.jsx)(n.default,{children:(0,s.jsx)(i.default,{style:F.finalText,children:P})}),(0,s.jsxs)(n.default,{children:[(0,s.jsx)(i.default,{style:F.tableText,children:"\u041b\u0456\u043d\u0456\u0439\u043d\u0438\u0439 \u0433\u0440\u0430\u0444\u0456\u043a"}),y?(0,s.jsx)(z.LineChart,{data:y,width:300,height:300,chartConfig:{backgroundColor:"#e26a00",backgroundGradientFrom:"#fb8c00",backgroundGradientTo:"#ffa726",decimalPlaces:2,color:function(){return`rgba(255, 255, 255, ${arguments.length>0&&void 0!==arguments[0]?arguments[0]:1})`},labelColor:function(){return`rgba(255, 255, 255, ${arguments.length>0&&void 0!==arguments[0]?arguments[0]:1})`},style:{borderRadius:16},propsForDots:{r:"0",strokeWidth:"2",stroke:"#ffa726"}},style:{marginVertical:8,borderRadius:16}}):(0,s.jsx)(i.default,{style:F.tableText,children:"\u0413\u0440\u0430\u0444\u0456\u043a \u043d\u0435 \u043f\u043e\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u043e"})]})]})})})]})};function N(){return(0,s.jsx)(a.NativeRouter,{children:(0,s.jsx)(n.default,{style:R.container,children:(0,s.jsx)(o.Routes,{children:(0,s.jsxs)(o.Route,{path:"/",element:(0,s.jsx)(c,{}),children:[(0,s.jsx)(o.Route,{path:"/",element:(0,s.jsx)(k,{})}),(0,s.jsx)(o.Route,{path:"/kolgomorov",element:(0,s.jsx)(V,{})}),(0,s.jsx)(o.Route,{path:"/montecarlo",element:(0,s.jsx)(_,{})})]})})})})}var R=l.default.create({container:{width:"100%"}})}},t={};function r(n){var l=t[n];if(void 0!==l)return l.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,l,a)=>{if(!n){var o=1/0;for(c=0;c<e.length;c++){for(var[n,l,a]=e[c],i=!0,s=0;s<n.length;s++)(!1&a||o>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(i=!1,a<o&&(o=a));if(i){e.splice(c--,1);var u=l();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,l,a]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,l){if(1&l&&(n=this(n)),8&l)return n;if("object"===typeof n&&n){if(4&l&&n.__esModule)return n;if(16&l&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var i=2&l&&n;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>n[e]));return o.default=()=>n,r.d(a,o),a}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var l,a,[o,i,s]=n,u=0;if(o.some((t=>0!==e[t]))){for(l in i)r.o(i,l)&&(r.m[l]=i[l]);if(s)var c=s(r)}for(t&&t(n);u<o.length;u++)a=o[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[854],(()=>r(6271)));n=r.O(n)})();
//# sourceMappingURL=main.ae061126.js.map