<template>
     <section class="checkout-userdata">
        <div class=" checkout-page"> 
          <div class="checkout-form">
            <div class="checkout-header">
              <div class="title">
                運送
              </div>
              <ul class="progressbar">
                <li class="active"></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <form class="checkout-body" action="" >
              <div class="form-row form-mr-4">
                <div class="col-6 validate-tooltip">
                  <label for="">名字</label>
                  <input v-model="from.transfrom.username"  v-validate="'required'"  type="text"
                   name="名字"  placeholder="小明">
                  <span v-show="errors.has('名字')" class="tooltip-text left" 
                       :class="{'is-invalid':errors.has('名字')}">
                    {{ errors.first('名字') }}
                    </span>
                
                </div>
                <div class="col-6 validate-tooltip">
                  <label for="">姓氏</label>
                  <input v-model="from.transfrom.name"  v-validate="'required'" name="姓氏" type="text"  placeholder="王">
                   <span v-show="errors.has('姓氏')" class="tooltip-text right" 
                       :class="{'is-invalid':errors.has('姓氏')}">
                    {{ errors.first('姓氏') }}
                    </span>
                </div>
              </div>
              <div class="form-row validate-tooltip">
                <div class="col-12">
                  <label for="tel">電話</label>
                  <input type="tel" name="電話"  placeholder="0912-345-678"
                   v-model="from.transfrom.tel"  
                  v-validate="'required|numeric'" >
                  <span v-show="errors.has('電話')" class="tooltip-text left" 
                       :class="{'is-invalid':errors.has('電話')}">
                    {{ errors.first('電話') }}
                    </span>
                </div>
              </div>
              <label for="">地址</label>
              <div class="form-row form-mr-4">
                <div class="col-6 validate-tooltip">
                  <select v-model="from.transfrom.county" v-validate="'required'" name="城市">
                      <option value="">請選擇</option>
                    <option value="新竹市">新竹市</option>
                    <option value="嘉義市">嘉義市</option>
                    <option value="台南市">台南市</option>
                    <option value="台南市">台南市</option>
                  </select>
                    <span v-show="errors.has('城市')" class="tooltip-text left" 
                       :class="{'is-invalid':errors.has('城市')}">
                    {{ errors.first('城市') }}
                    </span>
                </div>
                <div class="col-6 validate-tooltip">
                  <select v-model="from.transfrom.area" v-validate="'required'" name="區域">
                    <option value="">請選擇</option>
                    <option value="新興區">新興區</option>
                    <option value="彌陀區">彌陀區</option>
                    <option value="岡山區">岡山區</option>
                    <option value="三民區">三民區</option>
                  </select>
                     <span v-show="errors.has('區域')" class="tooltip-text right" 
                       :class="{'is-invalid':errors.has('區域')}">
                    {{ errors.first('區域') }}
                    </span>
                </div>        
              </div>            
              <div class="form-row validate-tooltip">
                <input v-model="from.transfrom.address"  name="地址" value=""  v-validate="'required'"  placeholder="幸福路 520 號">
                 <span v-show="errors.has('地址')" class="tooltip-text left" 
                       :class="{'is-invalid':errors.has('地址')}">
                    {{ errors.first('地址') }}
                    </span>
              </div>
        
            </form>                 
          </div>
          <div class="checkout-footer">
            <a href="" @click.prevent="validateBeforeSubmit">下一步</a>
            <!-- <nuxt-link to="/checkout/checkout_2" @click.prevent="validateBeforeSubmit" >下一步</nuxt-link> -->
           
          </div>      
        </div>
         
        <div class=" Summary-list">
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
                <div class="">
                  <p>焦糖馬（2 )</p>
                    <p>NT$ 900</p>
                </div>
              </div>
              <div class="cart-card">
                <div class="img" style="background-image: url('./image/prod4.jpg')"></div>
                <div >
                  <p>焦糖（2 )</p>
                  <p>NT$ 900</p>
                </div>
              </div>
              <div class="cart-card">
                <div class="img" style="background-image: url('./image/prod3.jpg')"></div>
                <div class="">
                  <p>焦糖馬卡龍（2 )</p>
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
        transfrom:{
          username:'',
          name:'',
          county:'',
          area:'',
          address:''
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
           vm.$router.push('/checkout/checkout_2');
          return;
        }
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
    }
  },
  
}
</script>

