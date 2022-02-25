(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[14],{1444:function(e,t,a){},2053:function(e,t,a){"use strict";a.r(t);var s=a(23),l=a(1),c=a(754),n=a(440),i=a.n(n),r=a(2),d=a(437),o=a(446),j=a(570),u=a(484),b=a.n(u),m=a(1056),h=a(1050),p=a(968),g=a(963),O=a(940),f=a(956),x=a(957),k=a(758),N=a(958),v=a(949),T=a(1289),C=a(953),S=a(955),y=a(7),w=function(e){var t=e.query,a=e.tasks,s=e.params,l=e.setSort,c=e.dispatch,n=e.getTasks,u=e.setQuery,w=e.updateTask,D=e.selectTask,A=e.reOrderTasks,z=e.handleTaskSidebar,R=e.handleMainSidebar,E=function(e){var t={team:"light-primary",low:"light-success",medium:"light-warning",high:"light-danger",update:"light-info"};return e.map((function(e){return Object(y.jsx)(g.a,{className:"text-capitalize",color:t[e],pill:!0,children:e},e)}))},M=function(e){var t,a=e.assignee;return void 0===a.avatar||null===a.avatar?Object(y.jsx)(o.a,{img:"",imgHeight:"32",imgWidth:"32"}):""!==a.avatar?Object(y.jsx)(o.a,{img:a.avatar,imgHeight:"32",imgWidth:"32"}):Object(y.jsx)(o.a,{color:(t=e.tags,t.includes("high")?"light-primary":t.includes("medium")?"light-warning":t.includes("low")?"light-success":t.includes("update")?"light-danger":t.includes("team")?"light-info":"light-primary"),content:a.fullName,initials:!0})},P=function(e,t){e.preventDefault(),l(t),c(n(Object(r.a)({},s)))};return Object(y.jsxs)("div",{className:"todo-app-list",children:[Object(y.jsxs)("div",{className:"app-fixed-search d-flex align-items-center",children:[Object(y.jsx)("div",{className:"sidebar-toggle cursor-pointer d-block d-lg-none ml-1",onClick:R,children:Object(y.jsx)(h.a,{size:21})}),Object(y.jsx)("div",{className:"d-flex align-content-center justify-content-between w-100",children:Object(y.jsxs)(f.a,{className:"input-group-merge",children:[Object(y.jsx)(x.a,{addonType:"prepend",children:Object(y.jsx)(k.a,{children:Object(y.jsx)(p.a,{className:"text-muted",size:14})})}),Object(y.jsx)(N.a,{placeholder:"Search task",value:t,onChange:function(e){u(e.target.value),c(n(s))}})]})}),Object(y.jsxs)(v.a,{children:[Object(y.jsx)(T.a,{className:"hide-arrow mr-1",tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(y.jsx)(m.a,{className:"text-body",size:16})}),Object(y.jsxs)(C.a,{right:!0,children:[Object(y.jsx)(S.a,{tag:d.b,to:"/",onClick:function(e){return P(e,"title-asc")},children:"Sort A-Z"}),Object(y.jsx)(S.a,{tag:d.b,to:"/",onClick:function(e){return P(e,"title-desc")},children:"Sort Z-A"}),Object(y.jsx)(S.a,{tag:d.b,to:"/",onClick:function(e){return P(e,"assignee")},children:"Sort Assignee"}),Object(y.jsx)(S.a,{tag:d.b,to:"/",onClick:function(e){return P(e,"due-date")},children:"Sort Due Date"}),Object(y.jsx)(S.a,{tag:d.b,to:"/",onClick:function(e){return P(e,"")},children:"Reset Sort"})]})]})]}),Object(y.jsx)(b.a,{className:"list-group todo-task-list-wrapper",options:{wheelPropagation:!1},children:a.length?Object(y.jsx)(j.ReactSortable,{tag:"ul",list:a,handle:".drag-icon",className:"todo-task-list media-list",setList:function(e){return c(A(e))},children:a.map((function(e){return Object(y.jsx)("li",{onClick:function(){return c(D(e)),void z()},className:i()("todo-item",{completed:e.isCompleted}),children:Object(y.jsxs)("div",{className:"todo-title-wrapper",children:[Object(y.jsxs)("div",{className:"todo-title-area",children:[Object(y.jsx)(m.a,{className:"drag-icon"}),Object(y.jsx)(O.a,{type:"checkbox",className:"custom-control-Primary",id:e.title,label:"",onChange:function(t){return c(w(Object(r.a)(Object(r.a)({},e),{},{isCompleted:t.target.checked})))},checked:e.isCompleted}),Object(y.jsx)("span",{className:"todo-title",children:e.title})]}),Object(y.jsxs)("div",{className:"todo-item-action mt-lg-0 mt-50",children:[e.tags.length?Object(y.jsx)("div",{className:"badge-wrapper mr-1",children:E(e.tags)}):null,e.dueDate?Object(y.jsxs)("small",{className:"text-nowrap text-muted mr-1",children:[new Date(e.dueDate).toLocaleString("default",{month:"short"})," ",new Date(e.dueDate).getDate().toString().padStart(2,"0")]}):null,e.assignee?M(e):null]})]})},e.id)}))}):Object(y.jsx)("div",{className:"no-results show",children:Object(y.jsx)("h5",{children:"No Items Found"})})})]})},D=a(432),A=a(518),z=a(519),R=a(1046),E=a(1080),M=a(990),P=a(1087),I=a(960),_=function(e){var t=e.handleTaskSidebar,a=e.setMainSidebar,s=e.mainSidebar,l=e.dispatch,c=e.getTasks,n=e.params,o=function(e){l(c(Object(r.a)(Object(r.a)({},n),{},{filter:e})))},j=function(e){l(c(Object(r.a)(Object(r.a)({},n),{},{tag:e})))},u=function(e){return!!(n.filter&&n.filter===e||n.tag&&n.tag===e)};return Object(y.jsx)("div",{className:i()("sidebar-left",{show:!0===s}),children:Object(y.jsx)("div",{className:"sidebar",children:Object(y.jsx)("div",{className:"sidebar-content todo-sidebar",children:Object(y.jsxs)("div",{className:"todo-app-menu",children:[Object(y.jsx)("div",{className:"add-task",children:Object(y.jsx)(D.a.Ripple,{color:"primary",onClick:function(){t(),a()},block:!0,children:"Add Task"})}),Object(y.jsxs)(b.a,{className:"sidebar-menu-list",options:{wheelPropagation:!1},children:[Object(y.jsxs)(A.a,{tag:"div",className:"list-group-filters",children:[Object(y.jsxs)(z.a,{action:!0,tag:d.b,to:"/apps/todo/",active:""===n.filter&&""===n.tag,onClick:function(){return o("")},children:[Object(y.jsx)(R.a,{className:"mr-75",size:18}),Object(y.jsx)("span",{className:"align-middle",children:"My Tasks"})]}),Object(y.jsxs)(z.a,{tag:d.b,to:"/apps/todo/important",active:u("important"),onClick:function(){return o("important")},action:!0,children:[Object(y.jsx)(E.a,{className:"mr-75",size:18}),Object(y.jsx)("span",{className:"align-middle",children:"Important"})]}),Object(y.jsxs)(z.a,{tag:d.b,to:"/apps/todo/completed",active:u("completed"),onClick:function(){return o("completed")},action:!0,children:[Object(y.jsx)(M.a,{className:"mr-75",size:18}),Object(y.jsx)("span",{className:"align-middle",children:"Completed"})]}),Object(y.jsxs)(z.a,{tag:d.b,to:"/apps/todo/deleted",active:u("deleted"),onClick:function(){return o("deleted")},action:!0,children:[Object(y.jsx)(P.a,{className:"mr-75",size:18}),Object(y.jsx)("span",{className:"align-middle",children:"Deleted"})]})]}),Object(y.jsxs)("div",{className:"mt-3 px-2 d-flex justify-content-between",children:[Object(y.jsx)("h6",{className:"section-label mb-1",children:"Tags"}),Object(y.jsx)(I.a,{className:"cursor-pointer",size:14})]}),Object(y.jsxs)(A.a,{className:"list-group-labels",children:[Object(y.jsxs)(z.a,{active:u("team"),className:"d-flex align-items-center",tag:d.b,to:"/apps/todo/tag/team",onClick:function(){return j("team")},action:!0,children:[Object(y.jsx)("span",{className:"bullet bullet-sm bullet-primary mr-1"}),Object(y.jsx)("span",{className:"align-middle",children:"Team"})]}),Object(y.jsxs)(z.a,{active:u("low"),className:"d-flex align-items-center",tag:d.b,to:"/apps/todo/tag/low",onClick:function(){return j("low")},action:!0,children:[Object(y.jsx)("span",{className:"bullet bullet-sm bullet-success mr-1"}),Object(y.jsx)("span",{className:"align-middle",children:"Low"})]}),Object(y.jsxs)(z.a,{active:u("medium"),className:"d-flex align-items-center",tag:d.b,to:"/apps/todo/tag/medium",onClick:function(){return j("medium")},action:!0,children:[Object(y.jsx)("span",{className:"bullet bullet-sm bullet-warning mr-1"}),Object(y.jsx)("span",{className:"align-middle",children:"Medium"})]}),Object(y.jsxs)(z.a,{active:u("high"),className:"d-flex align-items-center",tag:d.b,to:"/apps/todo/tag/high",onClick:function(){return j("high")},action:!0,children:[Object(y.jsx)("span",{className:"bullet bullet-sm bullet-danger mr-1"}),Object(y.jsx)("span",{className:"align-middle",children:"High"})]}),Object(y.jsxs)(z.a,{active:u("update"),className:"d-flex align-items-center",tag:d.b,to:"/apps/todo/tag/update",onClick:function(){return j("update")},action:!0,children:[Object(y.jsx)("span",{className:"bullet bullet-sm bullet-info mr-1"}),Object(y.jsx)("span",{className:"align-middle",children:"Update"})]})]})]})]})})})})},K=a(98),L=a(101),B=a(460),F=a.n(B),U=a(942),q=a(532),G=a(597),H=a(503),J=a(961),Q=a(637),W=a(462),Z=a(609),Y=a(943),V=a(455),X=a(467),$=a(479),ee=a(0),te=(a(699),a(517),a(458),["data"]),ae=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},se=function(e){var t=e.children,a=e.store,s=e.handleTaskSidebar,l=e.setDeleted,c=e.deleted,n=e.important,r=e.setImportant,d=e.deleteTask,o=e.dispatch;return Object(y.jsxs)("div",{className:"modal-header d-flex align-items-center justify-content-between mb-1",children:[Object(y.jsx)("h5",{className:"modal-title",children:t}),Object(y.jsxs)("div",{className:"todo-item-action d-flex align-items-center",children:[a&&!Object(X.e)(a.selectedTask)?Object(y.jsx)(P.a,{className:"cursor-pointer mt-25",size:16,onClick:function(){return l(!c),o(d(a.selectedTask.id)),void s()}}):null,Object(y.jsx)("span",{className:"todo-item-favorite cursor-pointer mx-75",children:Object(y.jsx)(E.a,{size:16,onClick:function(){return r(!n)},className:i()({"text-warning":!0===n})})}),Object(y.jsx)(U.a,{className:"font-weight-normal mt-25",size:16,onClick:s})]})]})},le=function(e){var t=Object($.a)(),a=Object(s.a)(t,2),c=a[0],n=(a[1],e.open),i=e.handleTaskSidebar,d=e.store,o=e.dispatch,j=e.updateTask,u=e.selectTask,b=e.addTask,m=e.deleteTask,h=Object(l.useState)(""),p=Object(s.a)(h,2),g=p[0],O=p[1],f=Object(l.useState)({value:"pheobe",label:"Pheobe Buffay",img:ee.default}),x=Object(s.a)(f,2),k=x[0],v=x[1],T=Object(l.useState)([]),C=Object(s.a)(T,2),S=C[0],w=C[1],A=Object(l.useState)("<p></p>"),z=Object(s.a)(A,2),R=z[0],E=z[1],M=Object(l.useState)(!1),P=Object(s.a)(M,2),I=P[0],_=P[1],B=Object(l.useState)(!1),U=Object(s.a)(B,2),le=U[0],ce=U[1],ne=Object(l.useState)(!1),ie=Object(s.a)(ne,2),re=ie[0],de=ie[1],oe=Object(l.useState)(new Date),je=Object(s.a)(oe,2),ue=je[0],be=je[1],me=[{value:"pheobe",label:"Pheobe Buffay",img:ee.default},{value:"chandler",label:"Chandler Bing",img:ee.default},{value:"ross",label:"Ross Geller",img:ee.default},{value:"monica",label:"Monica Geller",img:ee.default},{value:"joey",label:"Joey Tribbiani",img:ee.default},{value:"Rachel",label:"Rachel Green",img:ee.default}],he=function(){if(O(d.selectedTask.title),E(d.selectedTask.description),_(d.selectedTask.isCompleted),ce(d.selectedTask.isImportant),de(d.selectedTask.isDeleted),be(d.selectedTask.dueDate),d.selectedTask.assignee.fullName!==k.label&&v({value:d.selectedTask.assignee.fullName,label:d.selectedTask.assignee.fullName,img:d.selectedTask.assignee.avatar}),d.selectedTask.tags.length){var e=[];d.selectedTask.tags.map((function(t){e.push({value:t,label:ae(t)})})),w(e)}};return Object(y.jsx)(Q.a,{isOpen:n,toggle:i,className:"sidebar-lg",contentClassName:"p-0",onOpened:function(){var e=d.selectedTask;if(!Object(X.e)(e)&&(O(e.title),_(e.isCompleted),ce(e.isImportant),v([{value:e.assignee.fullName,label:e.assignee.fullName,img:e.assignee.avatar}]),be(e.dueDate),E(e.description),e.tags.length)){var t=[];e.tags.map((function(e){t.push({value:e,label:ae(e)})})),w(t)}},onClosed:function(){w([]),E(""),O(""),v({value:"pheobe",label:"Pheobe Buffay",img:ee.default}),_(!1),ce(!1),be(new Date),o(u({}))},modalClassName:"modal-slide-in sidebar-todo-modal",children:Object(y.jsxs)(W.a,{id:"form-modal-todo",className:"todo-modal",onSubmit:function(e){return e.preventDefault()},children:[Object(y.jsx)(se,{store:d,deleted:re,dispatch:o,important:le,deleteTask:m,setDeleted:de,setImportant:ce,handleTaskSidebar:i,children:d&&!Object(X.e)(d.selectedTask)?Object(y.jsx)(D.a.Ripple,{outline:!0,size:"sm",onClick:function(){return _(!I)},color:!0===I?"success":"secondary",children:!0===I?"Completed":"Mark Complete"}):"Add Task"}),Object(y.jsxs)(Z.a,{className:"flex-grow-1 pb-sm-0 pb-3",children:[Object(y.jsxs)(Y.a,{children:[Object(y.jsx)(V.a,{className:"form-label",for:"task-title",children:"Title"}),Object(y.jsx)(N.a,{id:"task-title",value:g,placeholder:"Title",className:"new-todo-item-title",onChange:function(e){return O(e.target.value)}})]}),Object(y.jsxs)(Y.a,{children:[Object(y.jsx)(V.a,{className:"form-label",for:"task-assignee",children:"Assignee"}),Object(y.jsx)(H.a,{id:"task-assignee",className:"react-select",classNamePrefix:"select",isClearable:!1,options:me,theme:X.h,value:k,onChange:function(e){return v(e)},components:{Option:function(e){var t=e.data,a=Object(L.a)(e,te);return Object(y.jsx)(G.z.Option,Object(r.a)(Object(r.a)({},a),{},{children:Object(y.jsxs)(J.a,{className:"align-items-center",children:[Object(y.jsx)("img",{className:"d-block rounded-circle mr-50",src:t.img,height:"26",width:"26",alt:t.label}),Object(y.jsx)(J.a,{body:!0,children:Object(y.jsx)("p",{className:"mb-0",children:t.label})})]})}))}}})]}),Object(y.jsxs)(Y.a,{children:[Object(y.jsx)(V.a,{className:"form-label",for:"due-date",children:"Due Date"}),Object(y.jsx)(F.a,{id:"due-date",name:"due-date",className:"form-control",onChange:function(e){return be(e[0])},value:ue,options:{dateFormat:"Y-m-d"}})]}),Object(y.jsxs)(Y.a,{children:[Object(y.jsx)(V.a,{className:"form-label",for:"task-tags",children:"Tags"}),Object(y.jsx)(H.a,{isMulti:!0,id:"task-tags",className:"react-select",classNamePrefix:"select",isClearable:!1,options:[{value:"team",label:"Team"},{value:"low",label:"Low"},{value:"medium",label:"Medium"},{value:"high",label:"High"},{value:"update",label:"Update"}],theme:X.h,value:S,onChange:function(e){w(null!==e?Object(K.a)(e):[])}})]}),Object(y.jsxs)(Y.a,{children:[Object(y.jsx)(V.a,{for:"task-desc",className:"form-label",children:"Description"}),Object(y.jsx)(q.a,{apiKey:"emjshh1tafcjgizkmk6eofcmmcxc2cmugajs9l2ordjyca64",value:R,onEditorChange:function(e){return E(e)},init:{menubar:!1,toolbar:"bold italic underline aligncenter link",toolbar_location:"bottom",skin:"dark"===c?"dark":void 0,content_css:"dark"===c?"dark":void 0}})]}),Object(y.jsx)(Y.a,{className:"my-1",children:function(){var e=[],t=!Object(X.e)(d.selectedTask)&&k.label===d.selectedTask.assignee.fullName;S.length&&S.map((function(t){return e.push(t.value)}));var a={fullName:k.label,avatar:k.img},s={title:g,dueDate:ue,tags:e,description:R,isCompleted:I,isDeleted:re,isImportant:le,assignee:t||void 0===k.label?d.selectedTask.assignee:a};return d&&!Object(X.e)(d.selectedTask)?Object(y.jsxs)(l.Fragment,{children:[Object(y.jsx)(D.a,{color:"primary",disabled:!g.length,className:"update-btn update-todo-item mr-1",onClick:function(){o(j(Object(r.a)(Object(r.a)({},s),{},{id:d.selectedTask.id}))),i()},children:"Update"}),Object(y.jsx)(D.a,{color:"secondary",onClick:he,outline:!0,children:"Reset"})]}):Object(y.jsxs)(l.Fragment,{children:[Object(y.jsx)(D.a,{color:"primary",disabled:!g.length,className:"add-todo-item mr-1",onClick:function(){o(b(s)),i()},children:"Add"}),Object(y.jsx)(D.a,{color:"secondary",onClick:i,outline:!0,children:"Cancel"})]})}()})]})]})})},ce=a(102),ne=a(60),ie=a.n(ne),re=function(e){return function(t){return ie.a.get("/apps/todo/tasks",{params:e}).then((function(a){t({type:"GET_TASKS",tasks:a.data,params:e})}))}},de=function(e){return function(t){return t({type:"REORDER_TASKS",tasks:e})}},oe=function(e){return function(t,a){ie.a.post("/apps/todo/add-tasks",{task:e}).then((function(e){t({type:"ADD_TASK",task:e.data})})).then(t(re(a().todo.params)))}},je=function(e){return function(t,a){ie.a.post("/apps/todo/update-task",{task:e}).then((function(e){t({type:"UPDATE_TASK",task:e.data})})).then(t(re(a().todo.params)))}},ue=function(e){return function(t,a){ie.a.delete("/apps/todo/delete-task",{taskId:e}).then((function(e){t({type:"DELETE_TASK",task:e.data})})).then((function(){return t(re(a().todo.params))}))}},be=function(e){return function(t){return t({type:"SELECT_TASK",task:e})}};a(1444),t.default=function(){var e=Object(l.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(l.useState)(""),d=Object(s.a)(r,2),o=d[0],j=d[1],u=Object(l.useState)(!1),b=Object(s.a)(u,2),m=b[0],h=b[1],p=Object(l.useState)(!1),g=Object(s.a)(p,2),O=g[0],f=g[1],x=Object(ce.b)(),k=Object(ce.c)((function(e){return e.todo})),N=Object(c.i)(),v={filter:N.filter||"",q:o||"",sortBy:a||"",tag:N.tag||""},T=function(){return h(!m)},C=function(){return f(!O)};return Object(l.useEffect)((function(){x(re({filter:N.filter||"",q:o||"",sortBy:a||"",tag:N.tag||""}))}),[k.tasks.length,N.filter,N.tag,o,a]),Object(y.jsxs)(l.Fragment,{children:[Object(y.jsx)(_,{store:k,params:v,getTasks:re,dispatch:x,mainSidebar:m,urlFilter:N.filter,setMainSidebar:h,handleTaskSidebar:C}),Object(y.jsx)("div",{className:"content-right",children:Object(y.jsx)("div",{className:"content-wrapper",children:Object(y.jsxs)("div",{className:"content-body",children:[Object(y.jsx)("div",{className:i()("body-content-overlay",{show:!0===m}),onClick:T}),k?Object(y.jsx)(w,{store:k,tasks:k.tasks,sort:a,query:o,params:v,setSort:n,setQuery:j,dispatch:x,getTasks:re,paramsURL:N,updateTask:je,selectTask:be,reOrderTasks:de,handleMainSidebar:T,handleTaskSidebar:C}):null,Object(y.jsx)(le,{store:k,params:v,addTask:oe,dispatch:x,open:O,updateTask:je,selectTask:be,deleteTask:ue,handleTaskSidebar:C})]})})})]})}},458:function(e,t,a){}}]);
//# sourceMappingURL=14.6c7ca6cd.chunk.js.map