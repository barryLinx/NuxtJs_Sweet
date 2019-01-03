<template>
  <!-- <ul class="prodCard"> </ul> -->
    <li class="card" :class="{'mb-1':isProductPage,'col-6':isProductPage}">
            <div class="card-img" :style="{'background-image': `url(./image/${prodData.imgname}.jpg)`}">
              <div class="tag">本日精選</div>
              <div class="like" @click="pointfavorite" :class="{'heart':favorite}">
                <i class="far fa-heart"></i>
              </div>
            </div>
            <div class="card-header">    
              <div class="title">{{prodData.title}}</div>
              <div class="price">NT$ {{prodData.price}}</div>
            </div>
            <a class="btn" href="" @click.prevent="addcart(prodData)">加入購物車</a>
      </li>
   
</template>
<script>
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex';
export default {
  props:['prodData','saveobj',"routename"],//繼續 資料傳回 點愛心
   data(){
      return{
        likeSweetie: false,       
      }
    },
     created(){      
    }, 
      watch:{     
    },
    methods:{      
       pointfavorite() {      
        this.$emit('point-favorite',this.prodData.id);
      },
      addcart(objItem){
          const vm = this;         
           vm.$store.dispatch('cartModules/AddCartAction',objItem);
            
          if (process.client) {
               localStorage.setItem("clientCart", JSON.stringify(this.vxCart));
               this.$toast.success('已放入購物車!!');        
           }          
      },
      
    },
    computed:{
        ...mapState('cartModules',['vxCart']),
      favorite() {
       return new Set(this.saveobj).has(this.prodData.id) ? true : false;
      },
      isProductPage(){
        return this.routename === 'product';
      }
      
      
    }
}
</script>

