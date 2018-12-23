<template>
  <!-- <ul class="prodCard"> </ul> -->
    <li class="card" :class="{'mb-1':isProductPage,'col-6':isProductPage}">
            <div class="card-img" :style="{'background-image': `url(./image/${prodData.imgname}.jpg)`}">
              <div class="tag">本日精選</div>
              <div class="like"  @click="pointfavorite" :class="{'heart':favorite}">
                <i class="far fa-heart"></i>
              </div>
            </div>
            <div class="card-header">    
              <div class="title">{{prodData.title}}</div>
              <div class="price">NT$ {{prodData.price}}</div>
            </div>
            <a class="btn" href="" @click.prevent="addcart(prodData.id)">加入購物車</a>
      </li>
   
</template>
<script>
export default {
  props:['prodData','saveobj',"routename"],//繼續 資料傳回 點愛心
   data(){
      return{
        likeSweetie: false,
        clientCart: [],
      }
    },
     created(){
       this.getClientCart();
    }, 
      watch:{
      clientCart(){
        const vm = this;
         if (process.client) {
            localStorage.setItem("clientCart", JSON.stringify(vm.clientCart));
         }
      }
    },
    methods:{    
      getClientCart(){
         const vm = this;       
        if (process.client) {
             //require('external_library')
            // console.log(localStorage.FavoriteProd);
            if(window.localStorage){
             vm.clientCart = JSON.parse(window.localStorage.getItem('clientCart'));
             console.log(localStorage.clientCart);
          }
        }       
      }, 
       pointfavorite() {      
        this.$emit('point-favorite',this.prodData.title);
      },
      addcart(objItem){
          const vm = this;         
          // let arrdata = new Set(vm.clientCart);
            let arrdata = [];
           // arrdata = vm.clientCart;
         // vm.clientCart = arrdata;  
        //     console.log('clientCart' ,this);
        //   let prodObj = objItem;  Object.assign({},item) objItem;
   
          if (process.client) {  
            // if (arrdata.has(objItem)) {  } 
                // arrdata.add(objItem);
                arrdata.push(objItem);
               
                vm.clientCart = arrdata;
               // localStorage.setItem("clientCart", JSON.stringify(vm.clientCart));
                 this.$toast.success('已放入購物車!!');
        
             
             
               
           }
          
      },
      
    },
    computed:{
      favorite() {
       return new Set(this.saveobj).has(this.prodData.title) ? true : false;
      },
      isProductPage(){
        return this.routename === 'product';
      }   
    }
}
</script>

