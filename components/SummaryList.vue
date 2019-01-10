<template>
<div>
         <div class="order-info">
            <h3>訂單摘要</h3>
            <div class="order-body">
              <div>
                <span>小計</span>
                <span>NT$ {{ordersummary.subtotal}}</span>
              </div>
              <div>
                <span>運費</span>
                <span>NT$ {{ordersummary.tran}}</span>
              </div>
            </div>
            <div class="order-footer">
              <span>總計</span>
              <span>NT$ {{ordersummary.Total}}</span>
            </div>
        </div>
          <div class="cart-list">
            <h3>購物清單</h3>
            <div class="cart-overflow">
        
              <div class="cart-card" v-for="(item, index) in cartlist" :key="index">
                <div class="img" :style="{'background-image': `url(./image/${item.imgname}.jpg)`}"></div>
                <div class="">
                  <p> 
                    {{item.title}}（{{item.len}} )
                  </p>
                    <p>
                      NT$ {{item.price}}
                    </p>
                </div>
              </div>
              <!-- <div class="cart-card">
                <div class="img" style="background-image: url(./image/prod4.jpg)"></div>
                <div>
                  <p>焦糖馬卡龍（2 )</<p>
                    <p>NT$ 900</p>
                </div>
              </div> -->
            
          
            </div>
          </div>
</div>
    
</template>

<script>
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex';
export default {
  popps:[],
  computed:{
     ...mapState('cartModules',['vxCart','vxCartList','vxOrderSummary']), 
    cartlist(){
     
      return   this.$store.getters['cartModules/CalcCartItem'];
    },
    ordersummary(){
      return   this.$store.getters['cartModules/Calctotalsubtotal'];
    }
  }
  
}
</script>
