(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[96],{1565:function(e,a,t){},1947:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t(741),r=t(440),i=t(441),n=t(446),l=t(963),d=t(983),j=t(1060),o=t(7),b=function(){return Object(o.jsx)("div",{className:"item-features",children:Object(o.jsxs)(r.a,{className:"text-center",children:[Object(o.jsx)(i.a,{className:"mb-4 mb-md-0",md:"4",xs:"12",children:Object(o.jsxs)("div",{className:"w-75 mx-auto",children:[Object(o.jsx)(l.a,{}),Object(o.jsx)("h4",{className:"mt-2 mb-1",children:"100% Original"}),Object(o.jsx)(n.a,{children:"Chocolate bar candy canes ice cream toffee. Croissant pie cookie halvah."})]})}),Object(o.jsx)(i.a,{className:"mb-4 mb-md-0",md:"4",xs:"12",children:Object(o.jsxs)("div",{className:"w-75 mx-auto",children:[Object(o.jsx)(d.a,{}),Object(o.jsx)("h4",{className:"mt-2 mb-1",children:"10 Day Replacement"}),Object(o.jsx)(n.a,{children:"Marshmallow biscuit donut drag\xe9e fruitcake. Jujubes wafer cupcake."})]})}),Object(o.jsx)(i.a,{className:"mb-4 mb-md-0",md:"4",xs:"12",children:Object(o.jsxs)("div",{className:"w-75 mx-auto",children:[Object(o.jsx)(j.a,{}),Object(o.jsx)("h4",{className:"mt-2 mb-1",children:"1 Year Warranty"}),Object(o.jsx)(n.a,{children:"Cotton candy gingerbread cake I love sugar plum I love sweet croissant."})]})})]})})},m=t(2),p=t(23),u=t(436),O=t(439),h=t.n(O),x=t(1065),g=t(946),f=t(999),N=t(932),v=t(1058),y=t(1007),w=t(1076),C=t(1090),P=t(1022),k=t(431),T=t(451),M=t(1260),z=t(937),D=t(939),I=function(e){var a=e.data,t=e.deleteWishlistItem,c=e.dispatch,l=e.addToWishlist,d=e.getProduct,j=e.productId,b=e.addToCart,O=Object(s.useState)("primary"),I=Object(p.a)(O,2),A=I[0],E=I[1],S=a.isInCart?u.b:"button";return Object(o.jsxs)(r.a,{className:"my-2",children:[Object(o.jsx)(i.a,{className:"d-flex align-items-center justify-content-center mb-2 mb-md-0",md:"5",xs:"12",children:Object(o.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:Object(o.jsx)("img",{className:"img-fluid product-img",src:a.image,alt:a.name})})}),Object(o.jsxs)(i.a,{md:"7",xs:"12",children:[Object(o.jsx)("h4",{children:a.name}),Object(o.jsxs)(n.a,{tag:"span",className:"item-company",children:["By",Object(o.jsx)("a",{className:"company-name",href:"/",onClick:function(e){return e.preventDefault()},children:a.brand})]}),Object(o.jsxs)("div",{className:"ecommerce-details-price d-flex flex-wrap mt-1",children:[Object(o.jsxs)("h4",{className:"item-price mr-1",children:["$",a.price]}),Object(o.jsx)("ul",{className:"unstyled-list list-inline",children:new Array(5).fill().map((function(e,t){return Object(o.jsx)("li",{className:"ratings-list-item mr-25",children:Object(o.jsx)(x.a,{className:h()({"filled-star":t+1<=a.rating,"unfilled-star":t+1>a.rating})})},t)}))})]}),Object(o.jsxs)(n.a,{children:["Available -",Object(o.jsx)("span",{className:"text-success ml-25",children:"In stock"})]}),Object(o.jsx)(n.a,{children:a.description}),Object(o.jsxs)("ul",{className:"product-features list-unstyled",children:[a.hasFreeShipping?Object(o.jsxs)("li",{children:[Object(o.jsx)(g.a,{size:19}),Object(o.jsx)("span",{children:"Free Shipping"})]}):null,Object(o.jsxs)("li",{children:[Object(o.jsx)(f.a,{size:19}),Object(o.jsx)("span",{children:"EMI options available"})]})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"product-color-options",children:[Object(o.jsx)("h6",{children:"Colors"}),Object(o.jsx)("ul",{className:"list-unstyled mb-0",children:a.colorOptions.map((function(e){return Object(o.jsx)("li",{className:h()("d-inline-block",{selected:A===e}),onClick:function(){return E(e)},children:Object(o.jsx)("div",{className:"color-option b-".concat(e),children:Object(o.jsx)("div",{className:"filloption bg-".concat(e)})})},e)}))})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"d-flex flex-column flex-sm-row pt-1",children:[Object(o.jsxs)(k.a,Object(m.a)(Object(m.a)({tag:S,className:"btn-cart mr-0 mr-sm-1 mb-1 mb-sm-0",color:"primary",onClick:function(){return e=a.id,!1===a.isInCart&&c(b(e)),void c(d(j));var e}},a.isInCart?{to:"/apps/ecommerce/checkout"}:{}),{},{children:[Object(o.jsx)(g.a,{className:"mr-50",size:14}),a.isInCart?"View in cart":"Move to cart"]})),Object(o.jsxs)(k.a,{className:"btn-wishlist mr-0 mr-sm-1 mb-1 mb-sm-0",color:"secondary",outline:!0,onClick:function(){return e=a.isInWishlist,c(e?t(j):l(j)),void c(d(j));var e},children:[Object(o.jsx)(N.a,{size:14,className:h()("mr-50",{"text-danger":a.isInWishlist})}),Object(o.jsx)("span",{children:"Wishlist"})]}),Object(o.jsxs)(T.a,{className:"dropdown-icon-wrapper btn-share",children:[Object(o.jsx)(M.a,{className:"btn-icon hide-arrow",color:"secondary",caret:!0,outline:!0,children:Object(o.jsx)(v.a,{size:14})}),Object(o.jsxs)(z.a,{right:!0,children:[Object(o.jsx)(D.a,{tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(o.jsx)(y.a,{size:14})}),Object(o.jsx)(D.a,{tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(o.jsx)(w.a,{size:14})}),Object(o.jsx)(D.a,{tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(o.jsx)(C.a,{size:14})}),Object(o.jsx)(D.a,{tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:Object(o.jsx)(P.a,{size:14})})]})]})]})]})]})},A=t(625),E=t(1170),S=t(1946),W=t(1870),B=t.p+"static/media/apple-watch.884c5ea7.png",V=t.p+"static/media/macbook-pro.4ecc26e8.png",F=t.p+"static/media/homepod.c5fa0cec.png",J=t.p+"static/media/magic-mouse.f8ccce24.png",H=t.p+"static/media/iphone-x.ba5bfe17.png",R=(t(823),function(){A.a.use([E.a]);var e=[{name:"Apple Watch Series 6",brand:"Apple",ratings:4,price:399.98,img:B},{name:"Apple MacBook Pro - Silver",brand:"Apple",ratings:2,price:2449.49,img:V},{name:"Apple HomePod (Space Grey)",brand:"Apple",ratings:3,price:229.29,img:F},{name:"Magic Mouse 2 - Black",brand:"Apple",ratings:3,price:90.98,img:J},{name:"iPhone 12 Pro",brand:"Apple",ratings:4,price:1559.99,img:H}];return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsxs)("div",{className:"mt-4 mb-2 text-center",children:[Object(o.jsx)("h4",{children:"Related Products"}),Object(o.jsx)(n.a,{children:"People also search for this items"})]}),Object(o.jsx)(S.a,Object(m.a)(Object(m.a)({},{className:"swiper-responsive-breakpoints swiper-container px-4 py-2",slidesPerView:5,spaceBetween:55,navigation:!0,breakpoints:{1600:{slidesPerView:4,spaceBetween:55},1300:{slidesPerView:3,spaceBetween:55},768:{slidesPerView:2,spaceBetween:55},320:{slidesPerView:1,spaceBetween:55}}}),{},{children:e.map((function(e){return Object(o.jsx)(W.a,{children:Object(o.jsxs)("a",{href:"/",onClick:function(e){return e.preventDefault()},children:[Object(o.jsxs)("div",{className:"item-heading",children:[Object(o.jsx)("h5",{className:"text-truncate mb-0",children:e.name}),Object(o.jsxs)("small",{className:"text-body",children:["by ",e.brand]})]}),Object(o.jsx)("div",{className:"img-container w-50 mx-auto py-75",children:Object(o.jsx)("img",{src:e.img,alt:"swiper 1",className:"img-fluid"})}),Object(o.jsxs)("div",{className:"item-meta",children:[Object(o.jsx)("ul",{className:"unstyled-list list-inline mb-25",children:new Array(5).fill().map((function(a,t){return Object(o.jsx)("li",{className:"ratings-list-item mr-25",children:Object(o.jsx)(x.a,{className:h()({"filled-star":t+1<=e.ratings,"unfilled-star":t+1>e.ratings})})},t)}))}),Object(o.jsxs)(n.a,{className:"text-primary mb-0",children:["$",e.price]})]})]})},e.name)}))}))]})}),$=t(435),G=t(442),Y=t(443),q=t(101),K=t(634);t(1565),a.default=function(){var e=Object(c.i)().product,a=e.substring(e.lastIndexOf("-")+1),t=Object(q.b)(),r=Object(q.c)((function(e){return e.ecommerce}));return Object(s.useEffect)((function(){t(Object(K.f)(a))}),[]),Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)($.a,{breadCrumbTitle:"Product Details",breadCrumbParent:"eCommerce",breadCrumbActive:"Details"}),Object(o.jsx)("div",{className:"app-ecommerce-details",children:Object.keys(r.productDetail).length?Object(o.jsxs)(G.a,{children:[Object(o.jsx)(Y.a,{children:Object(o.jsx)(I,{dispatch:t,addToCart:K.a,productId:a,getProduct:K.f,data:r.productDetail,addToWishlist:K.b,deleteWishlistItem:K.d})}),Object(o.jsx)(b,{}),Object(o.jsx)(Y.a,{children:Object(o.jsx)(R,{})})]}):null})]})}},435:function(e,a,t){"use strict";var s=t(436),c=t(1015),r=t(973),i=t(1036),n=t(1031),l=t(970),d=t(449),j=t(450),o=t(451),b=t(1260),m=t(937),p=t(939),u=t(7);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,O=e.breadCrumbParent2,h=e.breadCrumbParent3,x=e.breadCrumbActive;return Object(u.jsxs)("div",{className:"content-header row",children:[Object(u.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(u.jsx)("div",{className:"row breadcrumbs-top",children:Object(u.jsxs)("div",{className:"col-12",children:[a?Object(u.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(u.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(u.jsxs)(d.a,{children:[Object(u.jsx)(j.a,{tag:"li",children:Object(u.jsx)(s.b,{to:"/",children:"Home"})}),Object(u.jsx)(j.a,{tag:"li",className:"text-primary",children:t}),O?Object(u.jsx)(j.a,{tag:"li",className:"text-primary",children:O}):"",h?Object(u.jsx)(j.a,{tag:"li",className:"text-primary",children:h}):"",Object(u.jsx)(j.a,{tag:"li",active:!0,children:x})]})})]})})}),Object(u.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(u.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(b.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(u.jsx)(c.a,{size:14})}),Object(u.jsxs)(m.a,{tag:"ul",right:!0,children:[Object(u.jsxs)(p.a,{tag:s.b,to:"/apps/chat",children:[Object(u.jsx)(r.a,{className:"mr-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(u.jsxs)(p.a,{tag:s.b,to:"/apps/chat",children:[Object(u.jsx)(i.a,{className:"mr-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(u.jsxs)(p.a,{tag:s.b,to:"/apps/email",children:[Object(u.jsx)(n.a,{className:"mr-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(u.jsxs)(p.a,{tag:s.b,to:"/apps/calendar",children:[Object(u.jsx)(l.a,{className:"mr-1",size:14}),Object(u.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},437:function(e,a,t){"use strict";var s=t(14),c=t(1),r=t.n(c),i=t(3),n=t.n(i),l=t(448),d={children:n.a.node},j=function(e){return r.a.createElement(l.a,Object(s.a)({group:!0},e))};j.propTypes=d,a.a=j},446:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),i=t.n(r),n=t(3),l=t.n(n),d=t(95),j=t.n(d),o=t(59),b={tag:o.tagPropType,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,n=Object(c.a)(e,["className","cssModule","tag"]),l=Object(o.mapToCssModules)(j()(a,"card-text"),t);return i.a.createElement(r,Object(s.a)({},n,{className:l}))};m.propTypes=b,m.defaultProps={tag:"p"},a.a=m},449:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),i=t.n(r),n=t(3),l=t.n(n),d=t(95),j=t.n(d),o=t(59),b={tag:o.tagPropType,listTag:o.tagPropType,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},m=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,n=e.children,l=e.tag,d=e.listTag,b=e["aria-label"],m=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(o.mapToCssModules)(j()(a),r),u=Object(o.mapToCssModules)(j()("breadcrumb",t),r);return i.a.createElement(l,Object(s.a)({},m,{className:p,"aria-label":b}),i.a.createElement(d,{className:u},n))};m.propTypes=b,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},450:function(e,a,t){"use strict";var s=t(14),c=t(15),r=t(1),i=t.n(r),n=t(3),l=t.n(n),d=t(95),j=t.n(d),o=t(59),b={tag:o.tagPropType,active:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.active,n=e.tag,l=Object(c.a)(e,["className","cssModule","active","tag"]),d=Object(o.mapToCssModules)(j()(a,!!r&&"active","breadcrumb-item"),t);return i.a.createElement(n,Object(s.a)({},l,{className:d,"aria-current":r?"page":void 0}))};m.propTypes=b,m.defaultProps={tag:"li"},a.a=m},451:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var s=t(438),c=t(14),r=t(96),i=t(45),n=t(1),l=t.n(n),d=t(3),j=t.n(d),o=t(437),b=t(59);function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}var p=["defaultOpen"],u=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:a.defaultOpen||!1},t.toggle=t.toggle.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return l.a.createElement(o.a,Object(c.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(b.omit)(this.props,p)))},a}(n.Component);u.propTypes=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({defaultOpen:j.a.bool},o.a.propTypes)},823:function(e,a,t){}}]);
//# sourceMappingURL=96.c3ac6489.chunk.js.map