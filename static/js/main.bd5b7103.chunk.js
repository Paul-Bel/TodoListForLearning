(this.webpackJsonptodolistdec=this.webpackJsonptodolistdec||[]).push([[0],{18:function(e,t,i){e.exports={error:"Todolist_error__3Ta5F",errorMessage:"Todolist_errorMessage__3UksW",border:"Todolist_border__278lJ",tasks:"Todolist_tasks__3Ym3e",task:"Todolist_task__2Xi9m",tasksDIV:"Todolist_tasksDIV__FhEay",icon:"Todolist_icon__AxtXC",title:"Todolist_title__PILsY"}},67:function(e,t,i){},68:function(e,t,i){},75:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),c=i(9),r=i.n(c),o=(i(67),i(46)),s=i(13),l=i(25),d=i(17),j=(i(68),i(121)),u=i(109),b=i(110),O=i(5),h=function(e){var t=Object(n.useState)(""),i=Object(d.a)(t,2),a=i[0],c=i[1],r=Object(n.useState)(!1),o=Object(d.a)(r,2),s=o[0],l=o[1],h=function(){var t=a.trim();t?e.addItem(t):l(!0),c("")};return Object(O.jsxs)("div",{children:[Object(O.jsx)(j.a,{value:a,onChange:function(e){c(e.currentTarget.value),l(!1)},onKeyPress:function(e){"Enter"===e.key&&h()},label:"enter your text",variant:"standard",size:"small",color:"primary",error:s,helperText:s&&"Title is required"}),Object(O.jsx)(u.a,{onClick:h,children:Object(O.jsx)(b.a,{})})]})},f=i(18),x=i.n(f),m=function(e){var t=Object(n.useState)(!0),i=Object(d.a)(t,2),a=i[0],c=i[1],r=Object(n.useState)(e.title),o=Object(d.a)(r,2),s=o[0],l=o[1];return a?Object(O.jsx)("span",{className:x.a.title,onDoubleClick:function(){return c(!1)},children:e.title}):Object(O.jsx)("span",{children:Object(O.jsx)(j.a,{value:s,onKeyPress:function(t){s.trim()&&(e.changeTitle(e.title),"Enter"===t.key&&(e.changeTitle(s),c(!0)))},autoFocus:!0,onBlur:function(){return c(!0)},onChange:function(t){l(t.currentTarget.value),s.trim()&&(e.changeTitle(e.title),e.changeTitle(s))},variant:"standard"})})},v=i(111),T=i(123),k=i(114),g=i(77),p=i(112),_=i(113);var y=function(e){var t=e.tasks.map((function(t){var i=a.a.memo(m);return Object(O.jsxs)(v.a,{className:x.a.task,children:[Object(O.jsxs)("div",{className:x.a.tasksDIV,children:[Object(O.jsx)(T.a,{checked:t.isDone,onChange:function(i){return e.changeTaskStatus(t.id,i.currentTarget.checked,e.id)}}),Object(O.jsx)(i,{title:t.title,changeTitle:function(i){e.changeTaskTitle(t.id,i,e.id)}})]}),Object(O.jsx)(u.a,{onClick:function(){return e.removeTask(t.id,e.id)},className:x.a.icon,children:Object(O.jsx)(p.a,{})})]},t.id)}));return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h3",{children:[Object(O.jsx)(u.a,{color:"primary",onClick:function(){return e.removeTotoList(e.id)},children:Object(O.jsx)(_.a,{})}),Object(O.jsx)(m,{title:e.title,changeTitle:function(t){e.changeTitleTD(t,e.id),console.log(t)}})]}),Object(O.jsx)("div",{children:Object(O.jsx)(h,{addItem:function(t){e.addTask(t,e.id)}})}),Object(O.jsx)("ul",{className:x.a.tasks,children:t}),Object(O.jsx)("div",{children:Object(O.jsxs)(k.a,{variant:"contained",size:"small",disableElevation:!0,children:[Object(O.jsx)(g.a,{color:"all"===e.filter?"secondary":"primary",onClick:function(){return e.changeFilter("all",e.id)},className:x.a.buttons,children:"All"}),Object(O.jsx)(g.a,{color:"active"===e.filter?"secondary":"primary",onClick:function(){return e.changeFilter("active",e.id)},className:x.a.buttons,children:"Active"}),Object(O.jsx)(g.a,{color:"completed"===e.filter?"secondary":"primary",onClick:function(){return e.changeFilter("completed",e.id)},children:"Completed"})]})})]})},D=i(122),C=i(115),w=i(76),S=i(116),I=i(117),N=i(119),F=i(120),E=i(118);var A=function(){var e,t=Object(D.a)(),i=Object(D.a)(),a=Object(n.useState)([{id:t,title:"What to learn",filter:"all"},{id:i,title:"What to by",filter:"all"}]),c=Object(d.a)(a,2),r=c[0],j=c[1],b=Object(n.useState)((e={},Object(l.a)(e,t,[{id:Object(D.a)(),title:"HTML",isDone:!1},{id:Object(D.a)(),title:"CSS",isDone:!0},{id:Object(D.a)(),title:"REACT",isDone:!1}]),Object(l.a)(e,i,[{id:Object(D.a)(),title:"Bread",isDone:!0},{id:Object(D.a)(),title:"Milk",isDone:!1},{id:Object(D.a)(),title:"Coffee",isDone:!1}]),e)),f=Object(d.a)(b,2),x=f[0],m=f[1],v=function(e,t){var i=r.map((function(i){return i.id===t?Object(s.a)(Object(s.a)({},i),{},{filter:e}):i}));j(i)},T=function(e,t){var i=r.map((function(i){return i.id===t?Object(s.a)(Object(s.a)({},i),{},{title:e}):i}));j(i)},k=function(e,t){var i=Object(s.a)({},x);i[t]=x[t].filter((function(t){return t.id!==e})),m(i)},p=function(e,t){var i={id:Object(D.a)(),title:e,isDone:!1},n=Object(s.a)({},x);n[t]=[i].concat(Object(o.a)(x[t])),m(n)},_=function(e,t,i){var n=Object(s.a)({},x);n[i]=x[i].map((function(i){return i.id===e?Object(s.a)(Object(s.a)({},i),{},{isDone:t}):i})),m(n)},A=function(e,t,i){var n=Object(s.a)({},x);n[i]=x[i].map((function(i){return i.id===e?Object(s.a)(Object(s.a)({},i),{},{title:t}):i})),m(n)},L=function(e){j(r.filter((function(t){return t.id!==e})))},W=r.map((function(e){var t=x[e.id];return"active"===e.filter&&(t=t.filter((function(e){return!e.isDone}))),"completed"===e.filter&&(t=t.filter((function(e){return e.isDone}))),Object(O.jsx)(C.a,{item:!0,children:Object(O.jsx)(w.a,{elevation:7,style:{padding:"20px"},children:Object(O.jsx)(y,{id:e.id,title:e.title,tasks:t,filter:e.filter,addTask:p,removeTask:k,changeFilter:v,changeTaskStatus:_,removeTotoList:L,changeTaskTitle:A,changeTitleTD:T})})},e.id)}));return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(S.a,{position:"static",children:Object(O.jsxs)(I.a,{style:{justifyContent:"space-between"},children:[Object(O.jsx)(u.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(O.jsx)(E.a,{})}),Object(O.jsx)(N.a,{variant:"h6",children:"Todolists"}),Object(O.jsx)(g.a,{color:"secondary",variant:"outlined",children:"Login"})]})}),Object(O.jsxs)(F.a,{fixed:!0,children:[Object(O.jsx)(C.a,{container:!0,style:{padding:"20px"},children:Object(O.jsx)(h,{addItem:function(e){var t={id:Object(D.a)(),title:e,filter:"all"};j([].concat(Object(o.a)(r),[t])),m(Object(s.a)(Object(s.a)({},x),{},Object(l.a)({},t.id,[])))}})}),Object(O.jsx)(C.a,{style:{width:"1280px"},container:!0,spacing:3,children:W})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(O.jsx)(A,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.bd5b7103.chunk.js.map