<template>
  <section class="cart-page" :class="{'cart-empty': cartData <= 1 }" >
      <div class="cart-currently">
          <h3>您的購物車</h3>
          <ul class="cart">
            <li v-for="(item, index) in cartItem" :key="index"  class="cart-item">
                <div class="img-name-price">
                  <img src="" alt="">
                    <div class="img" :style="{'background-image': `url(./image/${item.imgname}.jpg)`}"></div>
                    <div class="name-num-grouby"> 
                      <div class="prod-name">
                        <p>{{item.title}}</p>
                        <p>NT$ {{item.price}}</p>
                      </div>
                      <div class="quantity">
                        <button @click.prevent="removeItem(item)">-</button>
                        <p>{{item.len}}</p>
                        <button @click.prevent="additem(item)">+</button>
                      </div>
                    </div>
                </div>
           
              <div class="price-trash">
                <div class="price">
                  NT$ {{item.subtotal}} 
                </div>
                <button class="trash" @click.prevent="AllRemoveCartItem(item)">
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
                <span>NT$ {{totalsubtotal.subtotal}}</span>
           </div>
           <div>
               <span>運費</span>
               <span>NT$ {{totalsubtotal.tran}}</span>
           </div>
           <div>
              <span>總計</span>
              <span>NT$ {{totalsubtotal.Total}}</span>
           </div>
         </div>
         <!-- <div class="order-footer">
            <span>總計</span>
            <span>NT$ 3,000</span>
          </div> -->
          <a @click.prevent="gotoPay">結帳</a>
          <!-- <nuxt-link :to="{ name: 'checkout'}"> 結帳</nuxt-link> -->
         
       </div>

    </section>
</template>

<script>
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex';
export default {
  data(){
    return{
      cartData:0,
      //cartEmpty:false    
   }
 },
 created(){
   //this.accCartData();
 },
 filters:{

 },
 methods: {
   gotoPay(){
     console.log('this.vxCart.length',this.vxCart.length);
     if( this.vxCart.length == 0 ){
      this.$toast.info('購車車是空的!!', { 
              position: "top-center", 
	            theme: "outline", 	         
              duration : 2000,            
              icon : {
                name : 'error',
                after : false // this will append the icon to the end of content
               }
            });
            return;
     }
      this.$router.push('/checkout');

   },
 accCartData(){   
     
  //    let newData = [];    
  //  //groupby objects in an array
  //   console.log('vxCart',this.vxCart);
  //   let data = this.vxCart.reduce(function (acc, obj) {
  //     let key = obj['id'];
  //     //console.log('key',key);
  //      if (!acc[key]) {        
  //         acc[key] = [];
  //       }
  //       acc[key].push( obj);
  //       return acc;
  //    }, {});
  //  // 加入 數量len
  //  Object.keys(data).forEach(function(key) {
  //      let newObj =  Object.assign({}, data[key][0]); // Do not mutate vuex store state outside mutation handlers 避免參考錯誤
  //       newObj['len'] = data[key].length;
  //       newObj['subtotal'] =  newObj['len'] *  newObj['price'];
  //     //  console.log('newObj' ,newObj);
  //       newData.push(newObj);
  //    }); 
  //     this.cartData = newData;
  //   //console.log('calcdata',data);

   },
  additem(objItem){
          const vm = this;      
          delete objItem.len;
          // console.log('objItem' ,objItem);   
           vm.$store.dispatch('cartModules/AddCartAction',objItem);
            
          if (process.client) {
               localStorage.setItem("clientCart", JSON.stringify(this.vxCart));
               //this.$toast.success('已放入購物車!!');        
          }
        //  vm.accCartData();          
    },
    removeItem(objItem){
        const vm = this;
        let del = vm.vxCart.findIndex(e => {
          return e.id  == objItem.id;
        });
         vm.$store.dispatch('cartModules/removeCartAction',del);
            if (process.client) {
               localStorage.setItem("clientCart", JSON.stringify(this.vxCart));
               //this.$toast.success('已放入購物車!!');     
          }
       // console.log('Index',del);
    },
    AllRemoveCartItem(objItem){
      this.$store.dispatch('cartModules/allremoveCartItemAction',{id:objItem.id,len:objItem.len});
        if (process.client) {
               localStorage.setItem("clientCart", JSON.stringify(this.vxCart));
               //this.$toast.success('已放入購物車!!');     
          }
    }   
 }, 
 computed:{
   ...mapState('cartModules',['vxCart','vxCartList','vxOrderSummary']),   
  //  calcTotal(){
  //    const vm = this;
  //    vm.cartData;
  //    return;
  //  },
   cartItem(){
      this.cartData = this.$store.getters['cartModules/CalcCartItem'].length;

     return this.$store.getters['cartModules/CalcCartItem'];

  //    let newData = [];    
  //  //groupby objects in an array
  //   //console.log('vxCart',this.vxCart);
  //   let data = this.vxCart.reduce(function (acc, obj) {
  //     let key = obj['id'];
  //     //console.log('key',key);
  //      if (!acc[key]) {        
  //         acc[key] = [];
  //       }
  //       acc[key].push( obj);
  //       return acc;
  //    }, {});
  //  // 加入 數量len
  //  Object.keys(data).forEach(function(key) {
  //      let newObj =  Object.assign({}, data[key][0]); // Do not mutate vuex store state outside mutation handlers 避免參考錯誤
  //       newObj['len'] = data[key].length;
  //       newObj['subtotal'] =  newObj['len'] *  newObj['price']; //小計
  //     //  console.log('newObj' ,newObj);
  //       newData.push(newObj);
  //    }); 
  //      this.cartData = newData;
  //      this.$store.dispatch('cartModules/setvxCartList',newData);     
  //      console.log('vxCartList',this.vxCartList);
  //    return newData;
   },
   totalsubtotal(){
     return this.$store.getters['cartModules/Calctotalsubtotal'];
    //  const TolSub = this.cartData.reduce((acc,cuu, currentIndex, array)=>{    
    //       return  cuu.subtotal + acc;
    //    },0);
    //    let buy = {};
    //    buy.subtotal = TolSub;
    //    buy.tran = 300;
    //    buy.Total =   buy.subtotal + buy.tran;

    //     this.$store.dispatch('cartModules/setvxOrderSummary', Object.assign({},buy)); 
    //    console.log('vxOrderSummary',this.vxOrderSummary); 
    //    return buy;
   },
   
  //  trydata(){
  //    let trydd = [];
  //    const cartitem = new Set([1,3,2,4,4,4,4,4,2,2,2]); // [1,3,2,4,4,4,4,4,2,2,2]
  //   //  this.Alldata.forEach(function(item){
  //   //    cartitem.entries().forEach(function(e){
  //   //      if (e == item.id) {
  //   //        trydd.push(item);
  //   //      }

  //   //    });
  //   //  });


  //  }
 }

 }

</script>

