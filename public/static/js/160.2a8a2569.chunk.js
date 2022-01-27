(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[160],{2058:function(e,a,r){"use strict";r.r(a);var t=r(0),c=r(494),i=r(495),s=r(489),l=r(134),n=r(967),d=r(496),m=r(501),j=r(498),o=r(497),b=r(500),h=r(987),x=r(485),u=r(6),O=function(){return Object(u.jsxs)(d.a,{children:[Object(u.jsx)(m.a,{children:Object(u.jsx)(j.a,{tag:"h4",children:"Basic"})}),Object(u.jsxs)(o.a,{children:[Object(u.jsx)(b.a,{children:"Getting values in and out of form state is easy using formik, you won't have to manage state to make your input a controlled element."}),Object(u.jsx)(n.d,{initialValues:{firstName:"",lastName:"",email:""},onSubmit:function(e){setTimeout((function(){l.f.success(JSON.stringify(e,null,2))}),500)},children:Object(u.jsxs)(n.c,{children:[Object(u.jsxs)(h.a,{children:[Object(u.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(u.jsx)(n.b,{className:"form-control",name:"firstName",placeholder:"Jane"})]}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(u.jsx)(n.b,{className:"form-control",name:"lastName",placeholder:"Doe"})]}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)(n.b,{className:"form-control",name:"email",placeholder:"jane@acme.com",type:"email"})]}),Object(u.jsx)(x.a.Ripple,{color:"primary",type:"submit",children:"Submit"})]})})]})]})},N=r(1310),g=N.c().shape({email:N.d().email("Invalid email address").required("Required"),firstName:N.d().min(2,"Must be longer than 2 characters").max(20,"Nice try, nobody has a first name that long").required("Required"),lastName:N.d().min(2,"Must be longer than 2 characters").max(20,"Nice try, nobody has a last name that long").required("Required")}),f=function(){return Object(u.jsxs)(d.a,{children:[Object(u.jsx)(m.a,{children:Object(u.jsx)(j.a,{tag:"h4",children:"Error Msg"})}),Object(u.jsxs)(o.a,{children:[Object(u.jsxs)(b.a,{children:["You can show error messages with formik using ",Object(u.jsx)("code",{children:"validationSchema"})," prop with formik tag."]}),Object(u.jsx)(n.d,{initialValues:{email:"",firstName:"",lastName:""},validationSchema:g,children:function(e){var a=e.errors,r=e.touched;return Object(u.jsxs)(n.c,{children:[Object(u.jsxs)(h.a,{children:[Object(u.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(u.jsx)(n.b,{type:"text",name:"firstName",placeholder:"Jane",className:"form-control ".concat(a.firstName&&r.firstName&&"is-invalid")}),Object(u.jsx)(n.a,{name:"firstName",component:"div",className:"field-error text-danger"})]}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(u.jsx)(n.b,{type:"text",name:"lastName",placeholder:"Doe",className:"form-control ".concat(a.email&&r.email&&"is-invalid")}),Object(u.jsx)(n.a,{name:"firstName",children:function(e){return Object(u.jsx)("div",{className:"field-error text-danger",children:e})}})]}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)(n.b,{name:"email",type:"email",placeholder:"jane@acme.com",className:"form-control ".concat(a.lastName&&r.lastName&&"is-invalid")}),Object(u.jsx)(n.a,{name:"email",children:function(e){return Object(u.jsx)("div",{className:"field-error text-danger",children:e})}})]}),Object(u.jsx)(x.a.Ripple,{color:"primary",type:"submit",children:"Submit"})]})}})]})]})},p=r(508),v=N.c().shape({required:N.d().required("Required"),email:N.d().email("Invalid email").required("Required"),number:N.b().required("Required"),url:N.d().url().required("Required"),date:N.a().required("Required"),minlength:N.d().min(4,"Too Short!").required("Required"),maxlength:N.d().max(5,"Too Long!").required("Required")}),q=function(){return Object(u.jsxs)(d.a,{children:[Object(u.jsx)(m.a,{children:Object(u.jsx)(j.a,{tag:"h4",children:" Validation"})}),Object(u.jsx)(o.a,{children:Object(u.jsx)(n.d,{initialValues:{required:"",email:"",url:"",number:"",date:"",minlength:"",maxlength:""},validationSchema:v,children:function(e){var a=e.errors,r=e.touched;return Object(u.jsxs)(n.c,{children:[Object(u.jsxs)(h.a,{children:[Object(u.jsx)(p.a,{for:"required",children:"Name"}),Object(u.jsx)(n.b,{name:"required",id:"required",className:"form-control ".concat(a.required&&r.required&&"is-invalid")}),Object(u.jsx)(n.a,{name:"required",component:"div",className:"field-error text-danger"})]}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)(p.a,{for:"email",children:"Email"}),Object(u.jsx)(n.b,{type:"email",name:"email",id:"email",className:"form-control ".concat(a.email&&r.email&&"is-invalid")}),Object(u.jsx)(n.a,{name:"email",component:"div",className:"field-error text-danger"})]}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)(p.a,{for:"url",children:"Website URL"}),Object(u.jsx)(n.b,{name:"url",id:"url",className:"form-control ".concat(a.url&&r.url&&"is-invalid")}),Object(u.jsx)(n.a,{name:"url",component:"div",className:"field-error text-danger"})]}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)(p.a,{for:"number",children:"Number"}),Object(u.jsx)(n.b,{name:"number",id:"number",className:"form-control ".concat(a.number&&r.number&&"is-invalid")}),Object(u.jsx)(n.a,{name:"number",component:"div",className:"field-error text-danger"})]}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)(p.a,{for:"date",children:"Date"}),Object(u.jsx)(n.b,{type:"date",name:"date",id:"date",className:"form-control ".concat(a.date&&r.date&&"is-invalid")}),Object(u.jsx)(n.a,{name:"date",component:"div",className:"field-error text-danger"})]}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)(p.a,{for:"minlength",children:"Min Length (Minimum 4 Characters)"}),Object(u.jsx)(n.b,{name:"minlength",id:"minlength",className:"form-control ".concat(a.minlength&&r.minlength&&"is-invalid")}),Object(u.jsx)(n.a,{name:"minlength",component:"div",className:"field-error text-danger"})]}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)(p.a,{for:"maxlength",children:"Max Length (Maximum 5 Characters)"}),Object(u.jsx)(n.b,{name:"maxlength",id:"maxlength",className:"form-control ".concat(a.maxlength&&r.maxlength&&"is-invalid")}),Object(u.jsx)(n.a,{name:"maxlength",component:"div",className:"field-error text-danger"})]}),Object(u.jsx)(x.a.Ripple,{color:"primary",type:"submit",children:"Submit"})]})}})})]})};a.default=function(){return Object(u.jsxs)(t.Fragment,{children:[Object(u.jsx)(s.a,{breadCrumbTitle:"Formik",breadCrumbParent:"Form",breadCrumbActive:"Formik"}),Object(u.jsxs)(c.a,{children:[Object(u.jsx)(i.a,{lg:"6",md:"12",children:Object(u.jsx)(O,{})}),Object(u.jsx)(i.a,{lg:"6",md:"12",children:Object(u.jsx)(f,{})}),Object(u.jsx)(i.a,{sm:"12",children:Object(u.jsx)(q,{})})]})]})}},489:function(e,a,r){"use strict";var t=r(490),c=r(1075),i=r(1033),s=r(1096),l=r(1091),n=r(1030),d=r(503),m=r(504),j=r(505),o=r(1318),b=r(997),h=r(999),x=r(6);a.a=function(e){var a=e.breadCrumbTitle,r=e.breadCrumbParent,u=e.breadCrumbParent2,O=e.breadCrumbParent3,N=e.breadCrumbActive;return Object(x.jsxs)("div",{className:"content-header row",children:[Object(x.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(x.jsx)("div",{className:"row breadcrumbs-top",children:Object(x.jsxs)("div",{className:"col-12",children:[a?Object(x.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(x.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(m.a,{tag:"li",children:Object(x.jsx)(t.b,{to:"/",children:"Home"})}),Object(x.jsx)(m.a,{tag:"li",className:"text-primary",children:r}),u?Object(x.jsx)(m.a,{tag:"li",className:"text-primary",children:u}):"",O?Object(x.jsx)(m.a,{tag:"li",className:"text-primary",children:O}):"",Object(x.jsx)(m.a,{tag:"li",active:!0,children:N})]})})]})})}),Object(x.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(x.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(o.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(x.jsx)(c.a,{size:14})}),Object(x.jsxs)(b.a,{tag:"ul",right:!0,children:[Object(x.jsxs)(h.a,{tag:t.b,to:"/apps/chat",children:[Object(x.jsx)(i.a,{className:"mr-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(x.jsxs)(h.a,{tag:t.b,to:"/apps/chat",children:[Object(x.jsx)(s.a,{className:"mr-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(x.jsxs)(h.a,{tag:t.b,to:"/apps/email",children:[Object(x.jsx)(l.a,{className:"mr-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(x.jsxs)(h.a,{tag:t.b,to:"/apps/calendar",children:[Object(x.jsx)(n.a,{className:"mr-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}}}]);
//# sourceMappingURL=160.2a8a2569.chunk.js.map