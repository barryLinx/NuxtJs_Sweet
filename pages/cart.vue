<template>
  <section class="cart-page" >
      <div class="cart-currently">
          <h3>您的購物車</h3>
          <ul class="cart">
            <li   class="cart-item">
                <div class="img-name-price">
                  <img src="" alt="">
                    <div class="img" style="background-image: url('./image/prod1.jpg')"></div>
                    <div class="name-num-grouby"> 
                      <div class="prod-name">
                        <p>焦糖馬卡龍</p>
                        <p>NT$ 450</p>
                      </div>
                      <div class="quantity">
                        <button>-</button>
                        <p>2</p>
                        <button>+</button>
                      </div>
                    </div>
                </div>
           
              <div class="price-trash">
                <div class="price">
                  NT$ 900
                </div>
                <button class="trash">
                  <i class="material-icons">
                    delete_outline
                  </i>
                </button>
              </div>
            </li>     
            <li class="cart-item">
              <div class="img-name-price">
                  <div class="img" style="background-image: url('./image/prod5.jpg')"></div>
               
                  <div class="name-num-grouby"> 
                    <div class="prod-name">
                      <p>焦糖馬卡龍</p>
                      <p>NT$ 450</p>
                    </div>
                    <div class="quantity">
                      <button>-</button>
                      <p>2</p>
                      <button>+</button>
                    </div>
                  </div>
              </div>
             
                    
              <div class="price-trash">
                <div class="price">
                  NT$ 900
                </div>
                <button class="trash">
                  <i class="material-icons">
                    delete_outline
                  </i>
                </button>
              </div>
             </li> 
             <li class="cart-item">
                <div class="img-name-price">
                    <div class="img" style="background-image: url('./image/prod3.jpg')"></div>
               
                    <div class="name-num-grouby"> 
                      <div class="prod-name">
                        <p>焦糖馬卡龍</p>
                        <p>NT$ 450</p>
                      </div>
                      <div class="quantity">
                        <button>-</button>
                        <p>2</p>
                        <button>+</button>
                      </div>
                    </div>
                </div>
             
                    <div class="price-trash">
                      <div class="price">
                        NT$ 900
                      </div>
                      <button class="trash">
                        <i class="material-icons">
                          delete_outline
                        </i>
                      </button>
                    </div>
             </li>        
          </ul>
      </div>     
       <div class="order-summary">       
         <div class="order-body">
            <h3>訂單摘要</h3>
            <div>
                <span>小計</span>
                <span>NT$ 2,700</span>
           </div>
           <div>
               <span>運費</span>
               <span>NT$ 300</span>
           </div>
           <div>
              <span>總計</span>
              <span>NT$ 3,000</span>
           </div>
         </div>
         <!-- <div class="order-footer">
            <span>總計</span>
            <span>NT$ 3,000</span>
          </div> -->
          <nuxt-link :to="{ name: 'checkout', params: { id: 123 }}"> 結帳</nuxt-link>
         
       </div>

    </section>
</template>

<script>
export default {
  data(){
    return{
      imgdata:[
        {
          img:''
        }
      ],
    
   }
 },
}
</script>

