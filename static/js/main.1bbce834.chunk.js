(this.webpackJsonpdicedroppers=this.webpackJsonpdicedroppers||[]).push([[0],{22:function(e,c,n){},23:function(e,c,n){},24:function(e,c,n){},34:function(e,c,n){},35:function(e,c,n){},36:function(e,c,n){},37:function(e,c,n){},38:function(e,c,n){},39:function(e,c,n){"use strict";n.r(c);var t=n(1),a=n.n(t),s=n(15),i=n.n(s),r=(n(22),n(2)),o=(n.p,n(23),n(11));n(24);function j(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function l(){var e=Object(t.useState)(j()),c=Object(o.a)(e,2),n=c[0],a=c[1];return Object(t.useEffect)((function(){function e(){a(j())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}var d=n(0);var m=function(){var e=Object(t.useState)(!1),c=Object(o.a)(e,2),n=c[0],a=c[1],s=l(),i=(s.height,s.width);return function(e,c){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,a=Object(t.useRef)();Object(t.useEffect)((function(){a.current=c}),[c]),Object(t.useEffect)((function(){if(n&&n.addEventListener){var c=function(e){return a.current(e)};return n.addEventListener(e,c),function(){n.removeEventListener(e,c)}}}),[e,n])}("mouseup",(function(){a(!1)})),Object(d.jsxs)("div",{className:"nav",id:"myNav",children:[Object(d.jsxs)("div",{className:"nav-logo-container",children:[Object(d.jsx)(r.b,{to:"/",className:"sticky nav-logo-link",exact:!0,children:Object(d.jsx)("img",{className:"nav-logo",src:"/images/logo.png",alt:"Logo"})}),Object(d.jsx)(r.b,{to:"/",className:"sticky nav-name",exact:!0,children:"Dice Droppers"}),Object(d.jsx)("a",{href:"javascript:void(0);",className:"icon",onClick:function(){a(!n)},children:Object(d.jsx)("i",{className:"fa fa-bars"})})]}),n||i>960?Object(d.jsxs)("div",{className:"links-container".concat(n?" responsive":""),children:[Object(d.jsx)(r.c,{to:"/",className:"nav-item home",exact:!0,children:"Home"}),Object(d.jsx)(r.c,{to:"/blog",className:"nav-item",children:"Blog"}),Object(d.jsx)(r.c,{to:"/episodes",className:"nav-item",children:"Episodes"}),Object(d.jsx)(r.c,{to:"/campaign-notes",className:"nav-item",children:"Campaign Notes"}),Object(d.jsx)(r.c,{to:"/meet-the-crew",className:"nav-item",children:"Meet The Crew"}),Object(d.jsx)(r.c,{to:"/search",className:"nav-item",children:"Search"})]}):null]})};n(34),n(9);var p=function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsxs)("div",{className:"wrapper footer-wrapper",children:[Object(d.jsx)("p",{className:"f1"}),Object(d.jsx)("p",{className:"f2"}),Object(d.jsx)("p",{className:"f3",children:"\xa9 2021 Dicedroppers"})]})})},b=n(3);n(35);var h=function(){return Object(d.jsx)("div",{className:"page",children:Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("div",{className:"splash",children:[Object(d.jsx)("img",{className:"logo",src:"/images/logo.png"}),Object(d.jsx)("h1",{children:"Dice Droppers"}),Object(d.jsx)("p",{children:"Welcome, adventurer."})]})})})};var u=function(){return Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h1",{children:"Blog"}),Object(d.jsx)("p",{children:"This is our blog."})]})})};var O=function(){return Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h1",{children:"Episodes"}),Object(d.jsx)("p",{children:"Watch our content."})]})})};n(36);var v=function(){return Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h1",{children:"Campaign Notes"}),Object(d.jsx)("p",{children:"Get up to speed."}),Object(d.jsx)("img",{className:"world-map",src:"/images/world-map.jpg"})]})})};n(37);var x=function(e){return Object(d.jsx)(r.b,{to:"/meet-the-crew/".concat(e.name),children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"img-container",children:Object(d.jsx)("img",{src:"/images/".concat(e.imageFile),alt:e.name})}),Object(d.jsxs)("div",{className:"content-container",children:[Object(d.jsx)("h4",{children:Object(d.jsx)("b",{children:e.name})}),Object(d.jsx)("p",{children:e.description})]})]})},e.name)};n(38);var g=function(){return Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h1",{children:"Meet The Crew"}),Object(d.jsx)("p",{children:"Get to know us."}),[{name:"Lawson",description:"DM",imageFile:"img_avatar.png"},{name:"Chris",description:"Player",imageFile:"img_avatar.png"},{name:"Fabbs",description:"Player",imageFile:"img_avatar.png"},{name:"Hailey",description:"Player",imageFile:"img_avatar.png"},{name:"Luke",description:"Player",imageFile:"img_avatar.png"},{name:"Oscar",description:"Player",imageFile:"img_avatar.png"}].map((function(e){return function(e){return Object(d.jsx)(x,{name:e.name,description:e.description,imageFile:e.imageFile})}(e)}))]})})};var f=function(){return Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{path:"/meet-the-crew",component:g}),Object(d.jsx)(b.a,{path:"/campaign-notes",component:v}),Object(d.jsx)(b.a,{path:"/episodes",component:O}),Object(d.jsx)(b.a,{path:"/blog",component:u}),Object(d.jsx)(b.a,{path:"/",component:h})]})};var N=function(){return Object(d.jsx)(r.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{}),Object(d.jsx)(f,{}),Object(d.jsx)(p,{})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(c){var n=c.getCLS,t=c.getFID,a=c.getFCP,s=c.getLCP,i=c.getTTFB;n(e),t(e),a(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),w()},9:function(e,c,n){}},[[39,1,2]]]);
//# sourceMappingURL=main.1bbce834.chunk.js.map