(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{203:function(e,a,t){"use strict";t.r(a);var r={data:function(){return{from:{payway:{credit_name:"",credit_name_first:"",limit_year:"",limit_mth:""}}}},methods:{validateBeforeSubmit:function(){var e=this,a=this;this.$validator.validateAll().then(function(t){if(t)return e.$toast.success("填寫成功!!",{position:"top-center",theme:"outline",duration:3e3,icon:{name:"check",after:!1}}),void a.$router.push("/checkout/checkout_3");console.log("result",t),e.$toast.error("請填入資訊!!",{position:"top-center",theme:"outline",duration:2e3,icon:{name:"error",after:!1}})})}}},s=t(12),i=Object(s.a)(r,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"checkout-userdata"},[t("div",{staticClass:"checkout-page"},[t("div",{staticClass:"checkout-form"},[e._m(0),e._v(" "),t("form",{staticClass:"checkout-body"},[t("div",{staticClass:"form-row "},[t("div",{staticClass:"col-12 validate-tooltip"},[t("label",{attrs:{for:"信用卡"}},[e._v("信用卡卡號")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.from.payway.credit,expression:"from.payway.credit"},{name:"validate",rawName:"v-validate",value:{required:e.required,regex:/\d{4}-\d{4}-\d{4}-\d{4}$/},expression:"{required, regex: /\\d{4}-\\d{4}-\\d{4}-\\d{4}$/ }"}],attrs:{name:"信用卡",placeholder:"格式: 9012-3456-7890-1234","data-vv-validate-on":"change|blur"},domProps:{value:e.from.payway.credit},on:{input:function(a){a.target.composing||e.$set(e.from.payway,"credit",a.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("信用卡"),expression:"errors.has('信用卡')"}],staticClass:"tooltip-text left",class:{"is-invalid":e.errors.has("信用卡")}},[e._v("\n                "+e._s(e.errors.first("信用卡"))+"\n                ")])])]),e._v(" "),t("label",{attrs:{for:""}},[e._v("持卡人姓名")]),e._v(" "),t("div",{staticClass:"form-row form-mr-4"},[t("div",{staticClass:"col-6 validate-tooltip"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.from.payway.credit_name,expression:"from.payway.credit_name"},{name:"validate",rawName:"v-validate",value:"required|max:16",expression:"'required|max:16'"}],attrs:{type:"text",name:"持卡人姓氏",placeholder:"小明"},domProps:{value:e.from.payway.credit_name},on:{input:function(a){a.target.composing||e.$set(e.from.payway,"credit_name",a.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("持卡人姓氏"),expression:"errors.has('持卡人姓氏')"}],staticClass:"tooltip-text left",class:{"is-invalid":e.errors.has("持卡人姓氏")}},[e._v("\n                "+e._s(e.errors.first("持卡人姓氏"))+"\n                ")])]),e._v(" "),t("div",{staticClass:"col-6 validate-tooltip"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.from.payway.credit_name_first,expression:"from.payway.credit_name_first"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"text",name:"持卡人姓名",placeholder:"王"},domProps:{value:e.from.payway.credit_name_first},on:{input:function(a){a.target.composing||e.$set(e.from.payway,"credit_name_first",a.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("持卡人姓名"),expression:"errors.has('持卡人姓名')"}],staticClass:"tooltip-text right",class:{"is-invalid":e.errors.has("持卡人姓名")}},[e._v("\n                "+e._s(e.errors.first("持卡人姓名"))+"\n                ")])])]),e._v(" "),t("label",{attrs:{for:""}},[e._v("有效期限")]),e._v(" "),t("div",{staticClass:"form-row form-mr-4"},[t("div",{staticClass:"col-6 validate-tooltip"},[t("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.from.payway.limit_mth,expression:"from.payway.limit_mth\n                "}],attrs:{name:"月份"},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.from.payway,"limit_mth",a.target.multiple?t:t[0])}}},[t("option",{attrs:{value:""}},[e._v("月")]),e._v(" "),t("option",{attrs:{value:"1"}},[e._v("01")]),e._v(" "),t("option",{attrs:{value:"2"}},[e._v("02")]),e._v(" "),t("option",{attrs:{value:"3"}},[e._v("03")])]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("月份"),expression:"errors.has('月份')"}],staticClass:"tooltip-text left",class:{"is-invalid":e.errors.has("月份")}},[e._v("\n                "+e._s(e.errors.first("月份"))+"\n                ")])]),e._v(" "),t("div",{staticClass:"col-6 validate-tooltip"},[t("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.from.payway.limit_year,expression:"from.payway.limit_year"}],attrs:{name:"年份"},on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.from.payway,"limit_year",a.target.multiple?t:t[0])}}},[t("option",{attrs:{value:""}},[e._v("年")]),e._v(" "),t("option",{attrs:{value:"2025"}},[e._v("2025")]),e._v(" "),t("option",{attrs:{value:"2030"}},[e._v("2030")])]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("年份"),expression:"errors.has('年份')"}],staticClass:"tooltip-text right",class:{"is-invalid":e.errors.has("年份")}},[e._v("\n                "+e._s(e.errors.first("年份"))+"\n                ")])])]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-6 validate-tooltip"},[t("label",{attrs:{for:"末三碼"}},[e._v("背面末三碼")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.from.payway.credit_number,expression:"from.payway.credit_number"},{name:"validate",rawName:"v-validate",value:"required|length:3|numeric",expression:"'required|length:3|numeric'"}],attrs:{type:"number",name:"末三碼","data-vv-validate-on":"change|blur",placeholder:"123"},domProps:{value:e.from.payway.credit_number},on:{input:function(a){a.target.composing||e.$set(e.from.payway,"credit_number",a.target.value)}}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("末三碼"),expression:"errors.has('末三碼')"}],staticClass:"tooltip-text left",class:{"is-invalid":e.errors.has("末三碼")}},[e._v("\n                "+e._s(e.errors.first("末三碼"))+"\n                ")])])])])]),e._v(" "),t("div",{staticClass:"checkout-footer"},[t("a",{attrs:{href:""},on:{click:function(a){return a.preventDefault(),e.validateBeforeSubmit(a)}}},[e._v("下一步")])])]),e._v(" "),e._m(1)])},[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:" checkout-header"},[a("div",{staticClass:"title"},[this._v("\n                  付款\n                ")]),this._v(" "),a("ul",{staticClass:"progressbar"},[a("li",{staticClass:"finished"}),this._v(" "),a("li",{staticClass:"active"}),this._v(" "),a("li")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"Summary-list"},[t("div",{staticClass:"order-info"},[t("h3",[e._v("訂單摘要")]),e._v(" "),t("div",{staticClass:"order-body"},[t("div",[t("span",[e._v("小計")]),e._v(" "),t("span",[e._v("NT$ 2,700")])]),e._v(" "),t("div",[t("span",[e._v("運費")]),e._v(" "),t("span",[e._v("NT$ 300")])])]),e._v(" "),t("div",{staticClass:"order-footer"},[t("span",[e._v("總計")]),e._v(" "),t("span",[e._v("NT$ 3,000")])])]),e._v(" "),t("div",{staticClass:"cart-list"},[t("h3",[e._v("購物清單")]),e._v(" "),t("div",{staticClass:"cart-card"},[t("div",{staticClass:"img",staticStyle:{"background-image":"url('./image/prod1.jpg')"}}),e._v(" "),t("div",[t("p",[e._v("焦糖馬卡龍（2 )")]),t("p"),t("p",[e._v("NT$ 900")])])]),e._v(" "),t("div",{staticClass:"cart-card"},[t("div",{staticClass:"img",staticStyle:{"background-image":"url('./image/prod4.jpg')"}}),e._v(" "),t("div",[t("p",[e._v("焦糖馬卡龍（2 )")]),t("p"),t("p",[e._v("NT$ 900")])])]),e._v(" "),t("div",{staticClass:"cart-card"},[t("div",{staticClass:"img",staticStyle:{"background-image":"url('./image/prod3.jpg')"}}),e._v(" "),t("div",{},[t("p",[e._v("焦糖馬卡龍（2 )")]),t("p"),t("p",[e._v("NT$ 900")])])])])])}],!1,null,null,null);i.options.__file="checkout_2.vue";a.default=i.exports}}]);