"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[160],{160:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(5861),a=n(885),c=n(7757),u=n.n(c),s=n(6871),o=n(2791),i="castPage_list__OcaOG",p="castPage_name__2+Vuc",f="castPage_text__FUliF",v=n(1157),l=n(184),h=function(){var t=(0,o.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],h=(0,o.useState)(null),d=(0,a.Z)(h,2),m=(d[0],d[1]),x=(0,s.UO)().movieId;(0,o.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,v.M1)(x);case 3:e=t.sent,n=e.cast,c(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),m(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[x]);var _=n.map((function(t){var e=t.cast_id,n=t.character,r=t.name,a=t.profile_path,c="https://image.tmdb.org/t/p/w200".concat(a),u=a?c:"http://via.placeholder.com/120x180";return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:u,alt:r}),(0,l.jsx)("p",{className:p,children:r}),(0,l.jsxs)("p",{className:f,children:["character: ",n]})]},e)}));return(0,l.jsx)("ul",{className:i,children:_})}},1157:function(t,e,n){n.d(e,{M1:function(){return l},EW:function(){return v},tx:function(){return h},V0:function(){return f},Aj:function(){return p}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u),o="https://api.themoviedb.org/3/",i="eed4f1d8aea9e26327c4f8a358313952",p=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat(o,"trending/all/day?api_key=").concat(i));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a,u=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:1,t.next=3,s().get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(e,"&page=").concat(n));case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat(o,"movie/").concat(e,"?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=160.3188c3ab.chunk.js.map