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
                <div class="Mailing" v-show="invoiceName == 'Mailing'" :class="{'active':invoiceName == 'Mailing'}">
                    <label for="">地址</label>
                    <div class="form-row form-mr-4">
                      <div class="col-6 validate-tooltip" >
                        <select v-model="from.invoice.county" name="城市" v-if="invoiceName == 'Mailing'" v-validate="'required'">
                          <option value="">請選擇</option>
                          <option value="新竹市">新竹市</option>
                          <option value="嘉義市">嘉義市</option>
                          <option value="台南市">台南市</option>
                          <option selected value="高雄市">高雄市</option>
                        </select>
                         <span v-show="errors.has('城市')" class="tooltip-text left" 
                          :class="{'is-invalid':errors.has('城市')}">
                         {{ errors.first('城市') }}
                        </span>
                      </div>
                      <div class="col-6 validate-tooltip">
                        <select v-model="from.invoice.area" name="區域" v-validate="'required'" v-if="invoiceName == 'Mailing'">
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
                      <input type="text" name="地址" v-validate="'required'" v-if="invoiceName == 'Mailing'"  v-model="from.invoice.address" placeholder="幸福路 520 號">
                       <span v-show="errors.has('地址')" class="tooltip-text left" 
                       :class="{'is-invalid':errors.has('地址')}">
                    {{ errors.first('地址') }}
                    </span>
                    </div>
                </div>
                <div class="electronic" v-if="invoiceName == 'electronic'" :class="{'active':invoiceName == 'electronic'}">
                    <label for="">電子郵件信箱</label>
                    <div class="form-row validate-tooltip">
                        <input type="text" name="電子郵件" v-if="invoiceName == 'electronic'" v-validate="'required|email'" data-vv-as="email" v-model="from.invoice.email" placeholder="example@email.com">
                         <span v-show="errors.has('電子郵件')" class="tooltip-text left" 
                          :class="{'is-invalid':errors.has('電子郵件')}">
                         {{ errors.first('電子郵件') }}
                        </span>
                      </div>
                </div>
                <label for="">統一編號（選填）</label>  
                  <div class="form-row validate-tooltip">
                    <input name="統一編號"  placeholder="12345678"
                      v-model="from.invoice.taxId" v-validate="'required|length:8|numeric'"  
                      
                      >
                     <span v-show="errors.has('統一編號')" class="tooltip-text left" 
                          :class="{'is-invalid':errors.has('統一編號')}">
                         {{ errors.first('統一編號') }}
                        </span>
                  </div>
            </form>
        </div>
        <div class="checkout-footer">
            <a href="" @click.prevent="validateBeforeSubmit">確認結帳</a>
            <!-- <nuxt-link  to="/checkout/checkoutEnd">確認結帳</nuxt-link> -->
         
          </div> 
      </div>
    
      <div class="Summary-list">
         <summarylist />
      </div>
    </section>
</template>
<script>
import summarylist from '~/components/SummaryList.vue'
export default {
  components:{
    summarylist
  },
   data(){
    return{
      from:{
       invoice:{
         county:'',
         area:''
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
          this.$toast.success('填寫成功!!', { 
              position: "top-center", 
              theme: "outline",   
              duration : 3000,
               icon : {
                name : 'check',
                after : false // this will append the icon to the end of content
               }
            });
           vm.$router.push('/checkout/checkoutEnd');
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
