(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{180:function(t,e,i){"use strict";var r=i(184),a=i(181);t.exports=i(185)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(a(this,"Set"),t=0===t?0:t,t)}},r)},181:function(t,e,i){var r=i(7);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},182:function(t,e,i){"use strict";var r=i(20),a=i(4),o=i(29),n=i(110),s=i(111),l=i(17),c=i(183),d=i(112);a(a.S+a.F*!i(108)(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,a,u,v=o(t),f="function"==typeof this?this:Array,p=arguments.length,g=p>1?arguments[1]:void 0,h=void 0!==g,_=0,m=d(v);if(h&&(g=r(g,p>2?arguments[2]:void 0,2)),null==m||f==Array&&s(m))for(i=new f(e=l(v.length));e>_;_++)c(i,_,h?g(v[_],_):v[_]);else for(u=m.call(v),i=new f;!(a=u.next()).done;_++)c(i,_,h?n(u,g,[a.value,_],!0):a.value);return i.length=_,i}})},183:function(t,e,i){"use strict";var r=i(9),a=i(34);t.exports=function(t,e,i){e in t?r.f(t,e,a(0,i)):t[e]=i}},184:function(t,e,i){"use strict";var r=i(9).f,a=i(71),o=i(107),n=i(20),s=i(105),l=i(106),c=i(70),d=i(109),u=i(72),v=i(8),f=i(104).fastKey,p=i(181),g=v?"_s":"size",h=function(t,e){var i,r=f(e);if("F"!==r)return t._i[r];for(i=t._f;i;i=i.n)if(i.k==e)return i};t.exports={getConstructor:function(t,e,i,c){var d=t(function(t,r){s(t,d,e,"_i"),t._t=e,t._i=a(null),t._f=void 0,t._l=void 0,t[g]=0,null!=r&&l(r,i,t[c],t)});return o(d.prototype,{clear:function(){for(var t=p(this,e),i=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete i[r.i];t._f=t._l=void 0,t[g]=0},delete:function(t){var i=p(this,e),r=h(i,t);if(r){var a=r.n,o=r.p;delete i._i[r.i],r.r=!0,o&&(o.n=a),a&&(a.p=o),i._f==r&&(i._f=a),i._l==r&&(i._l=o),i[g]--}return!!r},forEach:function(t){p(this,e);for(var i,r=n(t,arguments.length>1?arguments[1]:void 0,3);i=i?i.n:this._f;)for(r(i.v,i.k,this);i&&i.r;)i=i.p},has:function(t){return!!h(p(this,e),t)}}),v&&r(d.prototype,"size",{get:function(){return p(this,e)[g]}}),d},def:function(t,e,i){var r,a,o=h(t,e);return o?o.v=i:(t._l=o={i:a=f(e,!0),k:e,v:i,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[g]++,"F"!==a&&(t._i[a]=o)),t},getEntry:h,setStrong:function(t,e,i){c(t,e,function(t,i){this._t=p(t,e),this._k=i,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?d(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,d(1))},i?"entries":"values",!i,!0),u(e)}}},185:function(t,e,i){"use strict";var r=i(2),a=i(4),o=i(11),n=i(107),s=i(104),l=i(106),c=i(105),d=i(7),u=i(10),v=i(108),f=i(35),p=i(113);t.exports=function(t,e,i,g,h,_){var m=r[t],b=m,w=h?"set":"add",y=b&&b.prototype,C={},x=function(t){var e=y[t];o(y,t,"delete"==t?function(t){return!(_&&!d(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(_&&!d(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return _&&!d(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,i){return e.call(this,0===t?0:t,i),this})};if("function"==typeof b&&(_||y.forEach&&!u(function(){(new b).entries().next()}))){var k=new b,S=k[w](_?{}:-0,1)!=k,P=u(function(){k.has(1)}),T=v(function(t){new b(t)}),F=!_&&u(function(){for(var t=new b,e=5;e--;)t[w](e,e);return!t.has(-0)});T||((b=e(function(e,i){c(e,b,t);var r=p(new m,e,b);return null!=i&&l(i,h,r[w],r),r})).prototype=y,y.constructor=b),(P||F)&&(x("delete"),x("has"),h&&x("get")),(F||S)&&x(w),_&&y.clear&&delete y.clear}else b=g.getConstructor(e,t,h,w),n(b.prototype,i),s.NEED=!0;return f(b,t),C[t]=b,a(a.G+a.W+a.F*(b!=m),C),_||g.setStrong(b,t,h),b}},187:function(t,e,i){var r=i(196);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,i(28).default)("59497dc0",r,!0,{})},188:function(t,e,i){var r=i(198);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,i(28).default)("d4be674c",r,!0,{})},189:function(t,e,i){"use strict";i(19),i(69),i(180);var r=i(15),a=i.n(r),o=i(16),n={props:["prodData","saveobj","routename"],data:function(){return{likeSweetie:!1}},created:function(){},watch:{},methods:{pointfavorite:function(){this.$emit("point-favorite",this.prodData.id)},addcart:function(t){this.$store.dispatch("cartModules/AddCartAction",t),localStorage.setItem("clientCart",JSON.stringify(this.vxCart)),this.$toast.success("已放入購物車!!")}},computed:a()({},Object(o.b)("cartModules",["vxCart"]),{favorite:function(){return!!new Set(this.saveobj).has(this.prodData.id)},isProductPage:function(){return"product"===this.routename}})},s=i(12),l=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"card",class:{"mb-1":t.isProductPage,"col-6":t.isProductPage}},[i("div",{staticClass:"card-img",style:{"background-image":"url(./image/"+t.prodData.imgname+".jpg)"}},[i("div",{staticClass:"tag"},[t._v("本日精選")]),t._v(" "),i("div",{staticClass:"like",class:{heart:t.favorite},on:{click:t.pointfavorite}},[i("i",{staticClass:"far fa-heart"})])]),t._v(" "),i("div",{staticClass:"card-header"},[i("div",{staticClass:"title"},[t._v(t._s(t.prodData.title))]),t._v(" "),i("div",{staticClass:"price"},[t._v("NT$ "+t._s(t.prodData.price))])]),t._v(" "),i("a",{staticClass:"btn",attrs:{href:""},on:{click:function(e){e.preventDefault(),t.addcart(t.prodData)}}},[t._v("加入購物車")])])},[],!1,null,null,null);l.options.__file="prodcard.vue";e.a=l.exports},195:function(t,e,i){"use strict";var r=i(187);i.n(r).a},196:function(t,e,i){(t.exports=i(27)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},197:function(t,e,i){"use strict";var r=i(188);i.n(r).a},198:function(t,e,i){(t.exports=i(27)(!1)).push([t.i,"",""])},199:function(t,e,i){"use strict";i.r(e);i(182),i(19),i(69),i(180),i(195);var r=i(12),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);a.options.__file="Logo.vue";var o={components:{Logo:a.exports,prodcard:i(189).a},head:function(){return{title:"Home Nuxt",meta:[{name:"description",content:"甜點電商"},{name:"keywords",content:"甜點,好吃,蛋糕,頻果派,藍梅,草莓"}]}},data:function(){return{proddata:[{id:1,title:"頻果派",price:450,imgname:"prod1",tag:"Today"},{id:2,title:"藍梅派",price:950,imgname:"prod2",tag:"recommend"},{id:3,title:"焦糖馬卡籠",price:650,imgname:"prod3",tag:"newProduct"}],FavoriteProd:[]}},created:function(){this.getFavoriteProd()},watch:{FavoriteProd:function(){localStorage.setItem("FavoriteProd",JSON.stringify(this.FavoriteProd))}},methods:{getFavoriteProd:function(){window.localStorage&&(this.FavoriteProd=JSON.parse(window.localStorage.getItem("FavoriteProd")))},changeSaveProd:function(t){var e=new Set(this.FavoriteProd);e.has(t)?e.delete(t):e.add(t),this.FavoriteProd=Array.from(e)}}},n=(i(197),Object(r.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("div",{attrs:{id:"product"}},[i("ul",{staticClass:"prodCard"},t._l(t.proddata,function(e,r){return i("prodcard",{key:r,attrs:{prodData:e,saveobj:t.FavoriteProd},on:{"point-favorite":t.changeSaveProd}})}),1)])])},[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bannerArea"},[i("div",{staticClass:"banner",staticStyle:{"background-image":"url('./image/banner.jpg')"}}),t._v(" "),i("ul",{staticClass:"category-lists"},[i("li",{staticClass:"category-item Today"},[i("div",{staticClass:"imgblur",staticStyle:{"background-image":"url('./image/Day.jpg')"}}),t._v(" "),i("div",{staticClass:"shadow"}),t._v(" "),i("p",[t._v("本日精選")])]),t._v(" "),i("li",{staticClass:"category-item popular"},[i("div",{staticClass:"imgblur",staticStyle:{"background-image":"url(./image/newProduct.jpg)"}}),t._v(" "),i("div",{staticClass:"shadow"}),t._v(" "),i("p",[t._v("人氣推薦")])]),t._v(" "),i("li",{staticClass:"category-item newProduct"},[i("div",{staticClass:"imgblur",staticStyle:{"background-image":"url('./image/popular.jpg')"}}),t._v(" "),i("div",{staticClass:"shadow"}),t._v(" "),i("p",[t._v("新品上市")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"depiction"},[i("div",{staticClass:"showbox"},[i("div",{staticClass:"img",staticStyle:{"background-image":"url('./image/depiction1.jpg')"}}),t._v(" "),i("div",{staticClass:"content"},[i("p",[t._v(" 青山依舊在，幾度夕陽紅。慣看秋月春風。\n              一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。\n            ")]),t._v(" "),i("br"),t._v(" "),i("p",[t._v(" 是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。 ")])]),t._v(" "),i("div",{staticClass:"title",staticStyle:{"background-image":"url('./image/lg-為什麼選擇了做甜點.png')"}}),t._v(" "),i("div",{staticClass:"screen-320",staticStyle:{"background-image":"url('./image/sm-橫式-為什麼選擇了做甜點.svg')"}})]),t._v(" "),i("div",{staticClass:"showbox reverse"},[i("div",{staticClass:"img",staticStyle:{"background-image":"url('./image/depiction2.jpg')"}}),t._v(" "),i("div",{staticClass:"title",staticStyle:{"background-image":"url('./image/lg-為什麼一定要吃甜點.png')"}}),t._v(" "),i("div",{staticClass:"screen-320",staticStyle:{"background-image":"url('./image/sm-橫式-為什麼一定要吃甜點.svg')"}}),t._v(" "),i("div",{staticClass:"content"},[i("p",[t._v(" 青山依舊在，幾度夕陽紅。慣看秋月春風。\n              一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。")]),t._v(" "),i("br"),t._v(" "),i("p",[t._v(" 是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。 ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"result"},[e("div",{staticClass:"show-result",staticStyle:{"background-image":"url('./image/lg-想吃甜點是不需要理由的2x.png')"}}),this._v(" "),e("div",{staticClass:"screen-show-result ",staticStyle:{"background-image":"url('./image/sm-橫式-想吃甜點是不需要理由的.svg')"}})])}],!1,null,null,null));n.options.__file="index.vue";e.default=n.exports}}]);