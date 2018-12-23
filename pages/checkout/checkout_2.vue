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
                  <div class="col-12">
                    <label for="">信用卡卡號</label>
                    <input v-model="from.payway.credit"  v-validate="'credit_card'" type="" name="credit"  placeholder="9012-3456-7890-1234">
                  </div>
                </div>
                <label for="">持卡人姓名</label>
                <div class="form-row form-mr-4">
                  <div class="col-6 ">
                    <input type="text" v-model="from.payway.credit_name"  v-validate="'required'"  placeholder="小明">
                  </div>
                  <div class="col-6 ">
                    <input type="text" v-model="from.payway.credit_name_first" v-validate="'required'"  placeholder="王">
                  </div>
                </div>
                <label for="">有效期限</label>              
                <div class="form-row form-mr-4">
                  <div class="col-6 ">
                    <select v-validate="'required'" v-model="from.payway.limit_mth
                    ">
                      <option value="audi">月</option>
                      <option value="audi">01</option>
                      <option value="mercedes">02</option>
                      <option value="mercedes">03</option>
                    </select>
                  </div>
                  <div class="col-6">
                    <select v-validate="'required'" v-model="from.payway.limit_year">
                      <option value="volvo">年</option>
                    </select>
                  </div> 
                </div>
                <div class="form-row">
                    <div class="col-6 ">
                        <label for="three">背面末三碼</label>
                      <input type="number" name="three" v-model="from.payway.credit_number" v-validate="'required'"  placeholder="123">
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
          alert('Form Submitted!');
           vm.$router.push('/checkout/checkout_3');
          return;
        }
        alert('Correct them errors!');
      });
    }
  },
}
</script>

