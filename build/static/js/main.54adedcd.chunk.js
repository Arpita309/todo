(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{11:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(4),l=t.n(o),r=(t(10),t(1)),s=Object(n.createContext)(),i=function(e){var a=Object(n.useState)([{id:Date.now(),value:"learn react",done:!1},{id:Date.now()+1,value:"Complete site deployment",done:!1}]),t=Object(r.a)(a,2),o=t[0],l=t[1];return c.a.createElement(s.Provider,{value:[o,l]},e.children)},d=t(2);function m(){var e=Object(n.useContext)(s),a=Object(r.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)(!1),i=Object(r.a)(l,2),m=i[0],u=i[1],v=Object(n.useState)(""),b=Object(r.a)(v,2),E=b[0],h=b[1];return c.a.createElement("div",{className:"navbar has-shadow"},c.a.createElement("div",{className:"navbar-brand"},c.a.createElement("div",{className:"navbar-item"},c.a.createElement("p",{className:"title"},"Easy Todo")),c.a.createElement("a",{role:"button",onClick:function(){return u(!m)},className:"navbar-burger burger ".concat(m?"is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},c.a.createElement("span",{"aria-hidden":"true"}),c.a.createElement("span",{"aria-hidden":"true"}),c.a.createElement("span",{"aria-hidden":"true"}))),c.a.createElement("div",{className:"navbar-menu ".concat(m?"is-active":"")},c.a.createElement("div",{className:"navbar-end"},c.a.createElement("div",{className:"navbar-item"},c.a.createElement("div",{className:"field has-addons"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o([].concat(Object(d.a)(t),[{id:Date.now(),value:E,done:!1}])),h("")},className:"field has-addons"},c.a.createElement("p",{className:"control is-expanded"},c.a.createElement("input",{value:E,type:"text",onChange:function(e){return h(e.target.value)},className:"input"})),c.a.createElement("p",{className:"control"},c.a.createElement("button",{className:"button is-info has-text-weight-bold"},"Add Todo"))))))))}function u(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"level"},c.a.createElement("div",{className:"level-left"},c.a.createElement("div",{className:"level-item"},c.a.createElement("p",{className:"title ".concat(e.todo.done?"has-text-grey-light":"")},e.todo.value))),c.a.createElement("div",{className:"level-right"},c.a.createElement("div",{className:"level-item buttons"},c.a.createElement("button",{onClick:e.toggleDone.bind(this,e.todo),className:"button has-text-weight-bold ".concat(e.todo.done?"is-warning":"is-primary")},e.todo.done?"Undo":"Done"),c.a.createElement("button",{onClick:e.deleteTodo.bind(this,e.todo),className:"button is-danger has-text-weight-bold"},"Delete"))))))}function v(){var e=Object(n.useContext)(s),a=Object(r.a)(e,2),t=a[0],o=a[1],l=function(e){t.map((function(a){return a===e?a.done=!e.done:e})),o(Object(d.a)(t))},i=function(e){var a=t.filter((function(a){return a!==e}));o(a)};return c.a.createElement("div",null,c.a.createElement("div",{className:"hero is-info"},c.a.createElement("div",{className:"hero-body has-text-centered"},c.a.createElement("p",{className:"title is-1"},t.length," Todos"))),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},t.map((function(e){return c.a.createElement(u,{key:e.id,todo:e,toggleDone:l,deleteTodo:i})})))))}var b=function(){return c.a.createElement(i,null,c.a.createElement(m,null),c.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,a,t){e.exports=t(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.54adedcd.chunk.js.map