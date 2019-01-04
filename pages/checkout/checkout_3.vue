<template>
   <section class="checkout-userdata">
      <div class="checkout-page">
        <div class="checkout-form">
            <div class="checkout-header">
                <div class="title">
                    發票
                  </div>
                  <ul class="progressbar">
                    <li class="finished"></li>
                    <li class="finished"></li>
                    <li class="active"></li>                   
                  </ul>
            </div>
            <form class="checkout-body">
                <div class="invoice">     
                  <div class="invoice-pill col-12" :class="{'invoice-active': invoiceName == 'electronic'}"  @click="invoiceName='electronic'">
                      <p>電子發票</p>
                  </div>               
                  <div class="invoice-pill col-12 " :class="{'invoice-active': invoiceName == 'Mailing'}" @click="invoiceName='Mailing'">
                      <p >郵寄發票</p>
                  </div>                     
                </div>
                <div class="Mailing" :class="{'active':invoiceName == 'Mailing'}">
                    <label for="">地址</label>
                    <div class="form-row form-mr-4">
                      <div class="col-6 ">
                        <select>
                          <option value="audi">新竹市</option>
                          <option value="mercedes">嘉義市</option>
                          <option value="saab">台南市</option>
                          <option selected value="volvo">高雄市</option>
                        </select>
                      </div>
                      <div class="col-6">
                        <select>
                          <option value="volvo">新興區</option>
                          <option value="saab">彌陀區</option>
                          <option value="mercedes">岡山區</option>
                          <option value="audi">三民區</option>
                        </select>
                      </div>        
                    </div>     
                    <div class="form-row">
                      <input type="" name="" value="" placeholder="幸福路 520 號">
                    </div>
                </div>
                <div class="electronic"  :class="{'active':invoiceName == 'electronic'}">
                    <label for="">電子郵件信箱</label>
                    <div class="form-row">
                        <input type="" name="" value="" placeholder="example@email.com">
                      </div>
                </div>
                <label for="">統一編號（選填）</label>  
                  <div class="form-row">
                    <input type="" name="" value="" placeholder="12345678">
                  </div>
            </form>
        </div>
        <div class="checkout-footer">
  
            <nuxt-link  to="/checkout/checkoutEnd">確認結帳</nuxt-link>
         
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
            <div class="img" style="background-image: url(~static/image/prod1.jpg)"></div>
            <div class="">
              <p>焦糖馬卡龍（2 )<p>
                <p>NT$ 900</p>
            </div>
          </div>
          <div class="cart-card">
            <div class="img" style="background-image: url(~static/image/prod4.jpg)"></div>
            <div >
              <p>焦糖馬卡龍（2 )<p>
              <p>NT$ 900</p>
            </div>
          </div>
          <div class="cart-card">
            <div class="img" style="background-image: url(~static/image/prod3.jpg)"></div>
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
       invoice:{
        }
      },
      invoiceName:'electronic'
    }
  },
 methods: {
    validateBeforeSubmit() {
       const vm = this;
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line          
          alert('Form Submitted!');
           vm.$router.push('/checkout/checkoutEnd');
          return;
        }
        alert('Correct them errors!');
      });
    }
  },
}
</script>
