(this.webpackJsonpshopping=this.webpackJsonpshopping||[]).push([[0],{103:function(e,t,c){"use strict";c.r(t);var n,i,a=c(0),s=c.n(a),r=c(14),j=c.n(r),o=(c(73),c(34)),d=c(20),l=(c(74),c(75),c(111)),b=c(112),h=c(110),u=c(109),O=c(67),x=[{id:0,title:"white and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}],p=c(24),m=c(7),f=c(43),v=c(45),g=(c(76),c(113)),N=c(27),k=c(2),S=v.a.div(n||(n=Object(f.a)(["\n    padding: 20px;\n"]))),y=v.a.h4(i||(i=Object(f.a)(["\n    font-size : 25px;\n    color : ","\n"])),(function(e){return e.\uc0c9\uc0c1}));function C(e){return Object(a.useEffect)((function(){e.setSwitch(!0)})),0===e.tabNumber?Object(k.jsx)("div",{className:"tabBox",children:"11111"}):1===e.tabNumber?Object(k.jsx)("div",{className:"tabBox",children:"22222"}):2===e.tabNumber?Object(k.jsx)("div",{className:"tabBox",children:"33333"}):void 0}function w(e){return Object(k.jsxs)("p",{children:["\uc7ac\uace0 : ",e.stock[e.index]]})}var I=Object(N.b)((function(e){return{state:e.reducer,openState:e.reducer2}}))((function(e){var t=Object(a.useState)(!0),c=Object(d.a)(t,2),n=c[0],i=c[1],s=Object(a.useState)("\uc784\uc2dc\uc774\ub2e4"),r=Object(d.a)(s,2);r[0],r[1],Object(a.useContext)(E),Object(a.useEffect)((function(){var e=setTimeout((function(){!0===n&&i(!1)}),2e3);return console.log("useEffect\uac00 \uacc4\uc18d \uc2e4\ud589\ub41c\ub2e4!!"),function(){console.log("\uc9c0\uc131\ube60\uc774! \uc6c5!"),clearTimeout(e)}}),[]);var j=Object(m.f)(),l=Object(m.g)().id,h=e.shoes.find((function(e){return e.id==l})),u=Object(a.useState)(0),O=Object(d.a)(u,2),x=O[0],p=O[1],f=Object(a.useState)(!1),v=Object(d.a)(f,2),N=v[0],I=v[1];return Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(S,{children:Object(k.jsx)(y,{className:"titleName",children:"Detail"})}),!0===n?Object(k.jsx)("div",{className:"my-alert2",children:Object(k.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null,Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-md-6",children:Object(k.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(h.id+1)+".jpg",width:"100%"})}),Object(k.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(k.jsx)("h4",{className:"pt-5",children:h.title}),Object(k.jsx)("p",{children:h.content}),Object(k.jsx)("p",{children:h.price}),Object(k.jsx)(w,{stock:e.stock,index:h.id}),Object(k.jsx)("button",{className:"btn btn-danger",onClick:function(){var t=Object(o.a)(e.stock);t[h.id]-=1,e.setStock(t),e.dispatch({type:"plusInfo",data:{id:h.id,name:h.title,quan:1}}),j.push("/cart")},children:"\uc8fc\ubb38\ud558\uae30"}),"\xa0",Object(k.jsx)("button",{className:"btn btn-danger",onClick:function(){j.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]}),Object(k.jsxs)(b.a,{className:"mt-5",variant:"tabs",defaultActiveKey:"tap-0",children:[Object(k.jsx)(b.a.Item,{children:Object(k.jsx)(b.a.Link,{eventKey:"tap-0",onClick:function(){I(!1),p(0)},children:"\ud0ed1"})}),Object(k.jsx)(b.a.Item,{children:Object(k.jsx)(b.a.Link,{eventKey:"tap-1",onClick:function(){I(!1),p(1)},children:"\ud0ed2"})}),Object(k.jsx)(b.a.Item,{children:Object(k.jsx)(b.a.Link,{eventKey:"tap-2",onClick:function(){I(!1),p(2)},children:"\ud0ed3"})})]}),Object(k.jsx)(g.a,{in:N,classNames:"wow",timeout:500,children:Object(k.jsx)(C,{tabNumber:x,setSwitch:I})})]})})),B=c(64),q=c.n(B),L=c(108);var T=Object(N.b)((function(e){return{state:e.reducer,openState:e.reducer2}}))((function(e){var t=e.state;return Object(k.jsxs)("div",{children:[Object(k.jsxs)(L.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"#"}),Object(k.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(k.jsx)("th",{children:"\uc218\ub7c9"}),Object(k.jsx)("th",{children:"\ubcc0\uacbd"})]}),t.map((function(t,c){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:t.id}),Object(k.jsx)("td",{children:t.name}),Object(k.jsx)("td",{children:t.quan}),Object(k.jsxs)("td",{children:[Object(k.jsx)("button",{onClick:function(){e.dispatch({type:"\uc99d\uac00",number:t.id})},children:"+"}),Object(k.jsx)("button",{onClick:function(){e.dispatch({type:"\uac10\uc18c",number:t.id})},children:"-"})]})]},c)}))]}),!0===e.openState?Object(k.jsxs)("div",{className:"my-alert2",children:[Object(k.jsx)("p",{children:"\uc9c0\uae08 \uad6c\ub9e4\ud558\uc2dc\uba74 \uc2e0\uaddc\ud560\uc778 20%"}),Object(k.jsx)("button",{onClick:function(){e.dispatch({type:"close"})},children:"\ub2eb\uae30"})]}):null]})})),E=s.a.createContext();function A(e){var t="http://codingapple1.github.io/shop/shoes"+e.i+".jpg";Object(a.useContext)(E);return Object(k.jsx)("div",{className:"col-md-4",children:Object(k.jsxs)(p.b,{to:"/detail/"+(e.i-1),children:[Object(k.jsx)("img",{src:t,width:"100%"}),Object(k.jsx)("h4",{children:e.shoes.title}),Object(k.jsx)("p",{children:e.shoes.content}),Object(k.jsx)("p",{children:e.shoes.price}),Object(k.jsx)(D,{index:e.i-1})]})})}function D(e){var t=Object(a.useContext)(E);return Object(k.jsxs)("p",{children:["\uc7ac\uace0 : ",t[e.index]]})}var F=function(){var e=Object(a.useState)(x),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)([10,20,15]),s=Object(d.a)(i,2),r=s[0],j=s[1];return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsxs)(l.a,{bg:"light",expand:"lg",className:"navBar",children:[Object(k.jsx)(l.a.Brand,{children:"Shopping_Mall"}),Object(k.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(k.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(k.jsxs)(b.a,{className:"ml-auto",children:[Object(k.jsx)(b.a.Link,{as:p.b,to:"/",children:"HOME"}),Object(k.jsx)(b.a.Link,{as:p.b,to:"/detail",children:"DETAIL"}),Object(k.jsxs)(h.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(k.jsx)(h.a.Item,{href:"#action/3.1",children:"Action"}),Object(k.jsx)(h.a.Item,{href:"#action/3.2",children:"Another action"}),Object(k.jsx)(h.a.Item,{href:"#action/3.3",children:"Something"}),Object(k.jsx)(h.a.Divider,{}),Object(k.jsx)(h.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(k.jsxs)(u.a,{className:"main",children:[Object(k.jsx)("h1",{children:"2021 New Collection"}),Object(k.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(k.jsx)("p",{children:Object(k.jsx)(O.a,{variant:"primary",children:"Learn more"})})]}),Object(k.jsxs)(m.c,{children:[Object(k.jsx)(m.a,{exact:!0,path:"/",children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(E.Provider,{value:r,children:Object(k.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(k.jsx)(A,{shoes:e,i:t+1},t)}))})}),Object(k.jsx)("button",{className:"btn btn-primary",onClick:function(){q.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){var t=[].concat(Object(o.a)(c),Object(o.a)(e.data));n(t)})).catch((function(){console.log("\uc2e4\ud328")}))},children:"\ub354\ubcf4\uae30"})]})}),Object(k.jsx)(m.a,{path:"/detail/:id",children:Object(k.jsx)(E.Provider,{children:Object(k.jsx)(I,{shoes:c,stock:r,setStock:j})})}),Object(k.jsx)(m.a,{path:"/cart",children:Object(k.jsx)(T,{})}),Object(k.jsx)(m.a,{path:"/:id",children:Object(k.jsx)("div",{children:"\uc544\ubb34\uac70\ub098 \ud638\ud638\ud638\ud638"})})]})]})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,114)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))},P=c(32),M=[{id:0,name:"Good\uc2e0\ubc1c",quan:2},{id:1,name:"\uba4b\uc9c4\uc2e0\ubc1c",quan:3}];var G=!0;var J=Object(P.c)(Object(P.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;if("plusInfo"===t.type){var c=e.findIndex((function(e){return e.id===t.data.id})),n=[].concat(M);return c>=0?n[c].quan++:n.push(t.data),n}if("\uc99d\uac00"===t.type){var i=[].concat(M);return i[t.number].quan++,i}if("\uac10\uc18c"===t.type){var a=[].concat(M);return a[t.number].quan--,a[t.number].quan<=0&&(a[t.number].quan=0),a}return e},reducer2:function(){var e=arguments.length>1?arguments[1]:void 0;if("close"===e.type){var t=!1;return t}return G}}));j.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(p.a,{basename:"/test_shoppingmall/",children:Object(k.jsx)(N.a,{store:J,children:Object(k.jsx)(F,{})})})}),document.getElementById("root")),K()},73:function(e,t,c){},74:function(e,t,c){},76:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.4237db2b.chunk.js.map