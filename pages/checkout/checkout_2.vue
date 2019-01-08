<template>
    <section class="checkout-userdata">
        <div class="checkout-page">
          <div class="checkout-form">
              <div class=" checkout-header">
                  <div class="title">
                      付款
                    </div>
                    <ul class="progressbar">
                      <li class="finished"></li>
                      <li class="active"></li>
                      <li></li>
                    </ul>
              </div>
              <form class="checkout-body">
                <div class="form-row ">
                  <div class="col-12 validate-tooltip">
                    <label for="信用卡">信用卡卡號</label>
                    <input name="信用卡"  placeholder="格式: 9012-3456-7890-1234"
                     v-model="from.payway.credit" 
                     v-validate="{required, regex: /\d{4}-\d{4}-\d{4}-\d{4}$/ }" 
                     data-vv-validate-on="change|blur"
                     
                    >
                     <span v-show="errors.has('信用卡')" class="tooltip-text left" 
                       :class="{'is-invalid':errors.has('信用卡')}">
                    {{ errors.first('信用卡') }}
                    </span>
                  </div>
                </div>
                <label for="">持卡人姓名</label>
                <div class="form-row form-mr-4">
                  <div class="col-6 validate-tooltip">
                    <input type="text" name="持卡人姓氏" 
                    v-model="from.payway.credit_name"  
                    v-validate="'required|max:16'"  placeholder="小明">
                   <span v-show="errors.has('持卡人姓氏')" class="tooltip-text left" 
                       :class="{'is-invalid':errors.has('持卡人姓氏')}">
                    {{ errors.first('持卡人姓氏') }}
                    </span>
                  </div>
                  <div class="col-6 validate-tooltip">
                    <input type="text" name="持卡人姓名" 
                    v-model="from.payway.credit_name_first" 
                    v-validate="'required'"  placeholder="王">
                    <span v-show="errors.has('持卡人姓名')" class="tooltip-text right" 
                       :class="{'is-invalid':errors.has('持卡人姓名')}">
                    {{ errors.first('持卡人姓名') }}
                    </span>
                  </div>
                </div>
                <label for="">有效期限</label>              
                <div class="form-row form-mr-4">
                  <div class="col-6 validate-tooltip">
                    <select v-validate="'required'" name="月份" v-model="from.payway.limit_mth
                    ">
                      <option value="">月</option>
                      <option value="1">01</option>
                      <option value="2">02</option>
                      <option value="3">03</option>
                    </select>
                     <span v-show="errors.has('月份')" class="tooltip-text left" 
                       :class="{'is-invalid':errors.has('月份')}">
                    {{ errors.first('月份') }}
                    </span>
                  </div>
                  <div class="col-6 validate-tooltip">
                    <select v-validate="'required'" name="年份" v-model="from.payway.limit_year">
                      <option value="">年</option>
                      <option value="2025">2025</option>
                      <option value="2030">2030</option>
                    </select>
                     <span v-show="errors.has('年份')" class="tooltip-text right" 
                       :class="{'is-invalid':errors.has('年份')}">
                    {{ errors.first('年份') }}
                    </span>
                  </div> 
                </div>
                <div class="form-row">
                    <div class="col-6 validate-tooltip">
                        <label for="末三碼">背面末三碼</label>
                      <input type="number" name="末三碼"
                       v-model="from.payway.credit_number" 
                       v-validate="'required|length:3|numeric'" 
                       data-vv-validate-on="change|blur"  placeholder="123">
                         <span v-show="errors.has('末三碼')" class="tooltip-text left" 
                       :class="{'is-invalid':errors.has('末三碼')}">
                    {{ errors.first('末三碼') }}
                    </span>
                    </div>             
                  </div>
              </form>
          </div>        
          <div class="checkout-footer">
             <!-- <nuxt-link  to="/checkout/checkout_3">下一步</nuxt-link> -->
              <a href="" @click.prevent="validateBeforeSubmit">下一步</a>
          </div> 
        </div>
        <div class="Summary-list">
          <div class="order-info">
            <h3>訂單摘要</h3>
            <div class="order-body">
              <div>
                   <span>小計</span>
                   <span>NT$ 2,700</span>
              </div>
              <div>
                  <span>運費</span>
                  <span>NT$ 300</span>
              </div>
            </div>
            <div class="order-footer">
                 <span>總計</span>
                 <span>NT$ 3,000</span>
            </div>
          </div>
          <div class="cart-list">
            <h3>購物清單</h3>
            <div class="cart-card">
             <div class="img" style="background-image: url('./image/prod1.jpg')"></div>
              <div >
                <p>焦糖馬卡龍（2 )<p>
                  <p>NT$ 900</p>
              </div>
            </div>
            <div class="cart-card">
              <div class="img" style="background-image: url('./image/prod4.jpg')"></div>
              <div >
                <p>焦糖馬卡龍（2 )<p>
                <p>NT$ 900</p>
              </div>
            </div>
            <div class="cart-card">
              <div class="img" style="background-image: url('./image/prod3.jpg')"></div>
              <div class="">
                <p>焦糖馬卡龍（2 )<p>
                  <p>NT$ 900</p>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>
<script>
export default {
   data(){
    return{
      from:{
        payway:{
          credit_name:'',
          credit_name_first:'',
          limit_year:'',
          limit_mth:'',
        }
      }
    }
  },
 methods: {
    validateBeforeSubmit() {
       const vm = this;
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line          
         this.$toast.success('填寫成功!!', { 
              position: "top-center", 
              theme: "outline",   
              duration : 3000,
               icon : {
                name : 'check',
                after : false // this will append the icon to the end of content
               }
            });
           vm.$router.push('/checkout/checkout_3');
          return;
        }
        console.log('result',result)
        this.$toast.error('請填入資訊!!', { 
              position: "top-center", 
	            theme: "outline", 	         
              duration : 2000,            
              icon : {
                name : 'error',
                after : false // this will append the icon to the end of content
               }
            });
      });
    },
    // matchtext(v){
    //   //console.log('v', this.from.payway.credit);
    //    // 使用 $set 動態新增響應式組件
    //   //this.$set(this.counter, 'penguin', 0)
    //   this.from.payway.credit=this.from.payway.credit.replace(/\s/g,'').replace(/(\d{4})/g,'$1 ');
    // }
  },
}
</script>

