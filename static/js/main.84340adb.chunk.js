(this.webpackJsonptodolistdec=this.webpackJsonptodolistdec||[]).push([[0],{18:function(e,t,i){e.exports={error:"Todolist_error__3Ta5F",errorMessage:"Todolist_errorMessage__3UksW",border:"Todolist_border__278lJ",tasks:"Todolist_tasks__3Ym3e",task:"Todolist_task__2Xi9m",tasksDIV:"Todolist_tasksDIV__FhEay",icon:"Todolist_icon__AxtXC",title:"Todolist_title__PILsY"}},67:function(e,t,i){},68:function(e,t,i){},75:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(9),c=i.n(a),r=(i(67),i(46)),o=i(13),s=i(25),l=i(17),d=(i(68),i(121)),j=i(109),u=i(110),b=i(5),O=function(e){var t=Object(n.useState)(""),i=Object(l.a)(t,2),a=i[0],c=i[1],r=Object(n.useState)(!1),o=Object(l.a)(r,2),s=o[0],O=o[1],h=function(){var t=a.trim();t?e.addItem(t):O(!0),c("")};return Object(b.jsxs)("div",{children:[Object(b.jsx)(d.a,{value:a,onChange:function(e){c(e.currentTarget.value),O(!1)},onKeyPress:function(e){"Enter"===e.key&&h()},label:"enter your text",variant:"standard",size:"small",color:"primary",error:s}),Object(b.jsx)(j.a,{onClick:h,children:Object(b.jsx)(u.a,{})})]})},h=i(18),f=i.n(h),x=function(e){var t=Object(n.useState)(!0),i=Object(l.a)(t,2),a=i[0],c=i[1],r=Object(n.useState)(e.title),o=Object(l.a)(r,2),s=o[0],j=o[1];return a?Object(b.jsx)("span",{className:f.a.title,onDoubleClick:function(){return c(!1)},children:e.title}):Object(b.jsx)("span",{children:Object(b.jsx)(d.a,{value:s,onKeyPress:function(t){"Enter"===t.key&&(e.changeTitle(s),c(!0))},autoFocus:!0,onBlur:function(){return c(!0)},onChange:function(t){j(t.currentTarget.value),e.changeTitle(s)},variant:"standard"})})},v=i(111),m=i(123),k=i(114),T=i(77),g=i(112),p=i(113);var _=function(e){var t=e.tasks.map((function(t){return Object(b.jsxs)(v.a,{className:f.a.task,children:[Object(b.jsxs)("div",{className:f.a.tasksDIV,children:[Object(b.jsx)(m.a,{checked:t.isDone,onChange:function(i){return e.changeTaskStatus(t.id,i.currentTarget.checked,e.id)}}),Object(b.jsx)(x,{title:t.title,changeTitle:function(i){e.changeTaskTitle(t.id,i,e.id)}})]}),Object(b.jsx)(j.a,{onClick:function(){return e.removeTask(t.id,e.id)},className:f.a.icon,children:Object(b.jsx)(g.a,{})})]},t.id)}));return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:[Object(b.jsx)(j.a,{color:"primary",onClick:function(){return e.removeTotoList(e.id)},children:Object(b.jsx)(p.a,{})}),Object(b.jsx)(x,{title:e.title,changeTitle:function(t){e.changeTitleTD(t,e.id),console.log(t)}})]}),Object(b.jsx)("div",{children:Object(b.jsx)(O,{addItem:function(t){e.addTask(t,e.id)}})}),Object(b.jsx)("ul",{className:f.a.tasks,children:t}),Object(b.jsx)("div",{children:Object(b.jsxs)(k.a,{variant:"contained",size:"small",disableElevation:!0,children:[Object(b.jsx)(T.a,{color:"all"===e.filter?"secondary":"primary",onClick:function(){return e.changeFilter("all",e.id)},className:f.a.buttons,children:"All"}),Object(b.jsx)(T.a,{color:"active"===e.filter?"secondary":"primary",onClick:function(){return e.changeFilter("active",e.id)},className:f.a.buttons,children:"Active"}),Object(b.jsx)(T.a,{color:"completed"===e.filter?"secondary":"primary",onClick:function(){return e.changeFilter("completed",e.id)},children:"Completed"})]})})]})},y=i(122),D=i(115),C=i(76),w=i(116),S=i(117),I=i(119),N=i(120),F=i(118);var E=function(){var e,t=Object(y.a)(),i=Object(y.a)(),a=Object(n.useState)([{id:t,title:"What to learn",filter:"all"},{id:i,title:"What to by",filter:"all"}]),c=Object(l.a)(a,2),d=c[0],u=c[1],h=Object(n.useState)((e={},Object(s.a)(e,t,[{id:Object(y.a)(),title:"HTML",isDone:!1},{id:Object(y.a)(),title:"CSS",isDone:!0},{id:Object(y.a)(),title:"REACT",isDone:!1}]),Object(s.a)(e,i,[{id:Object(y.a)(),title:"Bread",isDone:!0},{id:Object(y.a)(),title:"Milk",isDone:!1},{id:Object(y.a)(),title:"Coffee",isDone:!1}]),e)),f=Object(l.a)(h,2),x=f[0],v=f[1],m=function(e,t){var i=d.map((function(i){return i.id===t?Object(o.a)(Object(o.a)({},i),{},{filter:e}):i}));u(i)},k=function(e,t){var i=d.map((function(i){return i.id===t?Object(o.a)(Object(o.a)({},i),{},{title:e}):i}));u(i)},g=function(e,t){var i=Object(o.a)({},x);i[t]=x[t].filter((function(t){return t.id!==e})),v(i)},p=function(e,t){var i={id:Object(y.a)(),title:e,isDone:!1},n=Object(o.a)({},x);n[t]=[i].concat(Object(r.a)(x[t])),v(n)},E=function(e,t,i){var n=Object(o.a)({},x);n[i]=x[i].map((function(i){return i.id===e?Object(o.a)(Object(o.a)({},i),{},{isDone:t}):i})),v(n)},A=function(e,t,i){var n=Object(o.a)({},x);n[i]=x[i].map((function(i){return i.id===e?Object(o.a)(Object(o.a)({},i),{},{title:t}):i})),v(n)},L=function(e){u(d.filter((function(t){return t.id!==e})))},W=d.map((function(e){var t=x[e.id];return"active"===e.filter&&(t=t.filter((function(e){return!e.isDone}))),"completed"===e.filter&&(t=t.filter((function(e){return e.isDone}))),Object(b.jsx)(D.a,{item:!0,children:Object(b.jsx)(C.a,{elevation:7,style:{padding:"20px"},children:Object(b.jsx)(_,{id:e.id,title:e.title,tasks:t,filter:e.filter,addTask:p,removeTask:g,changeFilter:m,changeTaskStatus:E,removeTotoList:L,changeTaskTitle:A,changeTitleTD:k})})},e.id)}));return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(w.a,{position:"static",children:Object(b.jsxs)(S.a,{style:{justifyContent:"space-between"},children:[Object(b.jsx)(j.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(b.jsx)(F.a,{})}),Object(b.jsx)(I.a,{variant:"h6",children:"Todolists"}),Object(b.jsx)(T.a,{color:"secondary",variant:"outlined",children:"Login"})]})}),Object(b.jsxs)(N.a,{fixed:!0,children:[Object(b.jsx)(D.a,{container:!0,style:{padding:"20px"},children:Object(b.jsx)(O,{addItem:function(e){var t={id:Object(y.a)(),title:e,filter:"all"};u([].concat(Object(r.a)(d),[t])),v(Object(o.a)(Object(o.a)({},x),{},Object(s.a)({},t.id,[])))}})}),Object(b.jsx)(D.a,{style:{width:"1280px"},container:!0,spacing:3,children:W})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(b.jsx)(E,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.84340adb.chunk.js.map