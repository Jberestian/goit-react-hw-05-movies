"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680,834],{2834:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(501),a=n(6871),c={},i=n(184),o=function(){var e=(0,a.s0)();return(0,i.jsx)("div",{className:c.body,children:(0,i.jsxs)("div",{className:c.main,children:[(0,i.jsxs)("div",{className:c.links,children:[(0,i.jsx)("button",{className:c.link,onClick:function(){e(-1)},children:"Go Back"}),(0,i.jsx)(r.rU,{className:c.link,to:"/",children:"Home"}),(0,i.jsx)(r.rU,{className:c.link,to:"/search",children:"Search"}),(0,i.jsx)(r.rU,{className:c.link,to:"/weekly-trending",children:"WeekPage"})]}),(0,i.jsxs)("h1",{className:c.title,children:["4",(0,i.jsxs)("span",{className:c.span,children:[(0,i.jsx)("span",{className:c.eye}),(0,i.jsx)("span",{className:c.eye})]}),"4"]}),(0,i.jsx)("h2",{className:c.subtitle,children:"Error: 404 page not found"}),(0,i.jsx)("p",{className:c.p,children:"Sorry, the page you're looking for cannot be accessed"})]})})}},680:function(e,t,n){n.r(t);var r=n(2982),a=n(1413),c=n(5861),i=n(885),o=n(7757),s=n.n(o),u=n(1157),l=n(2791),f=n(7267),p=n(5138),d=n(2834),m=n(184);t.default=function(){var e=(0,l.useState)({items:[],loading:!1,error:null}),t=(0,i.Z)(e,2),n=t[0],o=t[1],v=(0,l.useState)(1),h=(0,i.Z)(v,1)[0];(0,l.useEffect)((function(){var e=function(){var e=(0,c.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loading:!0,error:null})})),e.prev=1,e.next=4,(0,u.Aj)();case 4:t=e.sent,o((function(e){return(0,a.Z)((0,a.Z)({},e),{},{items:[].concat((0,r.Z)(e.items),(0,r.Z)(t)),loading:!1})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),o((function(t){return(0,a.Z)((0,a.Z)({},t),{},{error:e.t0})}));case 11:return e.prev=11,o((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]);var y=n.items,b=n.loading,j=n.error;return(0,m.jsxs)("div",{className:"container",children:[b&&(0,m.jsx)(p.Z,{}),j&&(0,m.jsx)(d.default,{}),(0,m.jsx)(f.Z,{items:y})]})}},1157:function(e,t,n){n.d(t,{M1:function(){return d},EW:function(){return p},tx:function(){return m},V0:function(){return f},Aj:function(){return l}});var r=n(5861),a=n(7757),c=n.n(a),i=n(4569),o=n.n(i),s="https://api.themoviedb.org/3/",u="eed4f1d8aea9e26327c4f8a358313952",l=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(s,"trending/all/day?api_key=").concat(u));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:1,e.next=3,o().get("".concat(s,"search/movie?api_key=").concat(u,"&query=").concat(t,"&page=").concat(n));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(s,"movie/").concat(t,"?api_key=").concat(u));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(u));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(u));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},7267:function(e,t,n){n.d(t,{Z:function(){return l}});var r="movieList_list__snn+K",a=n(6871),c=n(501),i="singleMovie_items__VrxVX",o="singleMovie_img__i038h",s=n(184),u=function(e){var t=e.id,n=e.title,r=e.src,a=e.state;return(0,s.jsx)("li",{className:i,children:(0,s.jsxs)(c.rU,{state:a,to:"/movies/".concat(t),children:[(0,s.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:"movie img"}),n]})})},l=function(e){var t=e.items,n=(0,a.TH)(),c=t.map((function(e){var t=e.id,r=e.name,a=e.poster_path,c=e.title;return(0,s.jsx)(u,{state:{from:n},src:a,title:c||r,id:t},t)}));return(0,s.jsx)("ul",{className:r,children:c})}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},2982:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(907);var a=n(181);function c(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=680.05da93e4.chunk.js.map