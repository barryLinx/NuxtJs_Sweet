(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{182:function(e,t,a){"use strict";var i=a(13),s=a.n(i),r=a(14),o={popps:[],computed:s()({},Object(r.b)("cartModules",["vxCart","vxCartList","vxOrderSummary"]),{cartlist:function(){return this.$store.getters["cartModules/CalcCartItem"]},ordersummary:function(){return this.$store.getters["cartModules/Calctotalsubtotal"]}})},n=a(12),v=Object(n.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"order-info"},[a("h3",[e._v("訂單摘要")]),e._v(" "),a("div",{staticClass:"order-body"},[a("div",[a("span",[e._v("小計")]),e._v(" "),a("span",[e._v("NT$ "+e._s(e.ordersummary.subtotal))])]),e._v(" "),a("div",[a("span",[e._v("運費")]),e._v(" "),a("span",[e._v("NT$ "+e._s(e.ordersummary.tran))])])]),e._v(" "),a("div",{staticClass:"order-footer"},[a("span",[e._v("總計")]),e._v(" "),a("span",[e._v("NT$ "+e._s(e.ordersummary.Total))])])]),e._v(" "),a("div",{staticClass:"cart-list"},[a("h3",[e._v("購物清單")]),e._v(" "),a("div",{staticClass:"cart-overflow"},e._l(e.cartlist,function(t,i){return a("div",{key:i,staticClass:"cart-card"},[a("div",{staticClass:"img",style:{"background-image":"url(./image/"+t.imgname+".jpg)"}}),e._v(" "),a("div",{},[a("p",[e._v(" \r\n                    "+e._s(t.title)+"（"+e._s(t.len)+" )\r\n                  ")]),e._v(" "),a("p",[e._v("\r\n                      NT$ "+e._s(t.price)+"\r\n                    ")])])])}),0)])])},[],!1,null,null,null);v.options.__file="SummaryList.vue";t.a=v.exports},206:function(e,t,a){"use strict";a.r(t);var i={components:{summarylist:a(182).a},data:function(){return{from:{invoice:{county:"",area:""}},invoiceName:"electronic"}},methods:{validateBeforeSubmit:function(){var e=this,t=this;this.$validator.validateAll().then(function(a){if(a)return e.$toast.success("填寫成功!!",{position:"top-center",theme:"outline",duration:3e3,icon:{name:"check",after:!1}}),void t.$router.push("/checkout/checkoutEnd");e.$toast.error("請填入資訊!!",{position:"top-center",theme:"outline",duration:2e3,icon:{name:"error",after:!1}})})}}},s=a(12),r=Object(s.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"checkout-userdata"},[a("div",{staticClass:"checkout-page"},[a("div",{staticClass:"checkout-form"},[e._m(0),e._v(" "),a("form",{staticClass:"checkout-body"},[a("div",{staticClass:"invoice"},[a("div",{staticClass:"invoice-pill col-12",class:{"invoice-active":"electronic"==e.invoiceName},on:{click:function(t){e.invoiceName="electronic"}}},[a("p",[e._v("電子發票")])]),e._v(" "),a("div",{staticClass:"invoice-pill col-12 ",class:{"invoice-active":"Mailing"==e.invoiceName},on:{click:function(t){e.invoiceName="Mailing"}}},[a("p",[e._v("郵寄發票")])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"Mailing"==e.invoiceName,expression:"invoiceName == 'Mailing'"}],staticClass:"Mailing",class:{active:"Mailing"==e.invoiceName}},[a("label",{attrs:{for:""}},[e._v("地址")]),e._v(" "),a("div",{staticClass:"form-row form-mr-4"},[a("div",{staticClass:"col-6 validate-tooltip"},["Mailing"==e.invoiceName?a("select",{directives:[{name:"model",rawName:"v-model",value:e.from.invoice.county,expression:"from.invoice.county"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"城市"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.from.invoice,"county",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("請選擇")]),e._v(" "),a("option",{attrs:{value:"新竹市"}},[e._v("新竹市")]),e._v(" "),a("option",{attrs:{value:"嘉義市"}},[e._v("嘉義市")]),e._v(" "),a("option",{attrs:{value:"台南市"}},[e._v("台南市")]),e._v(" "),a("option",{attrs:{selected:"",value:"高雄市"}},[e._v("高雄市")])]):e._e(),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("城市"),expression:"errors.has('城市')"}],staticClass:"tooltip-text left",class:{"is-invalid":e.errors.has("城市")}},[e._v("\n                      "+e._s(e.errors.first("城市"))+"\n                     ")])]),e._v(" "),a("div",{staticClass:"col-6 validate-tooltip"},["Mailing"==e.invoiceName?a("select",{directives:[{name:"model",rawName:"v-model",value:e.from.invoice.area,expression:"from.invoice.area"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"區域"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.from.invoice,"area",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v("請選擇")]),e._v(" "),a("option",{attrs:{value:"新興區"}},[e._v("新興區")]),e._v(" "),a("option",{attrs:{value:"彌陀區"}},[e._v("彌陀區")]),e._v(" "),a("option",{attrs:{value:"岡山區"}},[e._v("岡山區")]),e._v(" "),a("option",{attrs:{value:"三民區"}},[e._v("三民區")])]):e._e(),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("區域"),expression:"errors.has('區域')"}],staticClass:"tooltip-text right",class:{"is-invalid":e.errors.has("區域")}},[e._v("\n                      "+e._s(e.errors.first("區域"))+"\n                     ")])])]),e._v(" "),a("div",{staticClass:"form-row validate-tooltip"},["Mailing"==e.invoiceName?a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.from.invoice.address,expression:"from.invoice.address"}],attrs:{type:"text",name:"地址",placeholder:"幸福路 520 號"},domProps:{value:e.from.invoice.address},on:{input:function(t){t.target.composing||e.$set(e.from.invoice,"address",t.target.value)}}}):e._e(),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("地址"),expression:"errors.has('地址')"}],staticClass:"tooltip-text left",class:{"is-invalid":e.errors.has("地址")}},[e._v("\n                 "+e._s(e.errors.first("地址"))+"\n                 ")])])]),e._v(" "),"electronic"==e.invoiceName?a("div",{staticClass:"electronic",class:{active:"electronic"==e.invoiceName}},[a("label",{attrs:{for:""}},[e._v("電子郵件信箱")]),e._v(" "),a("div",{staticClass:"form-row validate-tooltip"},["electronic"==e.invoiceName?a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:e.from.invoice.email,expression:"from.invoice.email"}],attrs:{type:"text",name:"電子郵件","data-vv-as":"email",placeholder:"example@email.com"},domProps:{value:e.from.invoice.email},on:{input:function(t){t.target.composing||e.$set(e.from.invoice,"email",t.target.value)}}}):e._e(),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("電子郵件"),expression:"errors.has('電子郵件')"}],staticClass:"tooltip-text left",class:{"is-invalid":e.errors.has("電子郵件")}},[e._v("\n                      "+e._s(e.errors.first("電子郵件"))+"\n                     ")])])]):e._e(),e._v(" "),a("label",{attrs:{for:""}},[e._v("統一編號（選填）")]),e._v(" "),a("div",{staticClass:"form-row validate-tooltip"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.from.invoice.taxId,expression:"from.invoice.taxId"},{name:"validate",rawName:"v-validate",value:"required|length:8|numeric",expression:"'required|length:8|numeric'"}],attrs:{name:"統一編號",placeholder:"12345678"},domProps:{value:e.from.invoice.taxId},on:{input:function(t){t.target.composing||e.$set(e.from.invoice,"taxId",t.target.value)}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("統一編號"),expression:"errors.has('統一編號')"}],staticClass:"tooltip-text left",class:{"is-invalid":e.errors.has("統一編號")}},[e._v("\n                      "+e._s(e.errors.first("統一編號"))+"\n                     ")])])])]),e._v(" "),a("div",{staticClass:"checkout-footer"},[a("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.validateBeforeSubmit(t)}}},[e._v("確認結帳")])])]),e._v(" "),a("div",{staticClass:"Summary-list"},[a("summarylist")],1)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"checkout-header"},[t("div",{staticClass:"title"},[this._v("\n                 發票\n               ")]),this._v(" "),t("ul",{staticClass:"progressbar"},[t("li",{staticClass:"finished"}),this._v(" "),t("li",{staticClass:"finished"}),this._v(" "),t("li",{staticClass:"active"})])])}],!1,null,null,null);r.options.__file="checkout_3.vue";t.default=r.exports}}]);