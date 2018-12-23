<template>
<div>
       <div class="bannerArea">
          <div class="banner" style="background-image: url('./image/porduct.jpg');">
            <div class="banner-top-img" style="background-image:url('./image/lg-想吃甜點是不需要理由的.png')"></div>
          </div>
        </div>

        <div class="Menu">
          <ul class="Menu-list ">
            <li class="Menu-item">
              甜點類別
            </li>
            <li class="Menu-item " :class="{'active': '' === tagName}">
              <a href=""   @click.prevent="filterMenu = '',tagName=''">
                所有甜點
                <span>(48)</span>
              </a>
            </li>
            <li class="Menu-item" :class="{'active': 'Today' === tagName}">
              <a href=""  @click.prevent="filterMenu = 'Today',tagName='Today'">
                本日精選
                <span>(26)</span>
              </a>
            </li>
            <li class="Menu-item" :class="{'active': 'recommend' === tagName}">
              <a href=""  @click.prevent="filterMenu = 'recommend',tagName='recommend'">
                人氣推薦
                <span>(10)</span>
              </a>
            </li>
            <li class="Menu-item" :class="{'active': 'newProduct' === tagName}">
              <a href=""  @click.prevent="filterMenu = 'newProduct',tagName='newProduct'">
                新品上市
                <span>(12)</span>
              </a>
            </li>
          </ul> 
          <ul class="prod-list">
             <prodcard v-for="(item, index) in proddata" :key="index" 
             @point-favorite="changeSaveProd" 
             :prodData="item" 
             :saveobj="FavoriteProd" 
             :routename="routenPath"
             />
             <!--
                https://stackoverflow.com/questions/35242272/vue-js-data-bind-style-backgroundimage-not-working 
                v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }" 
                -->
            <!-- <li v-for="(item, index) in proddata" :key="index" class="card mb-1 col-6">
              
              <div class="card-img" v-bind:style="{'background-image':`url(./image/${item.imgname}.jpg)`  }">
                  <div class="tag">本日精選</div>
                  <div class="like">
                    <i class="far fa-heart"></i>
                  </div>
                </div>
                  <div class="card-header">      
                      <div class="title">{{item.title}}</div>
                      <div class="price">NT$ {{item.price}}</div>
                    </div>
                    <a class="btn" href="">加入購物車</a>
              </li> -->
              
          </ul>
          
        </div>
       
</div>
      
</template>
<script>
import prodcard from '~/components/prodcard.vue';
  export default{
    components: {      
       prodcard
     },
    head(){
      return{
        title:'product Nuxt',
        meta: [
          {name:'description',content:'甜點電商'},
          {name:'keywords',content:'甜點,好吃,蛋糕,頻果派,藍梅,草莓'},
        ],
      }
    },
     data(){
      return{
       proddata:[
          //假資料
          {"id":1,"title":"頻果派","price":450,"imgname":"prod1","tag":'Today'},
          {"id":2,"title":"藍梅派","price":950,"imgname":"prod2","tag":"recommend"},
          {"id":3,"title":"焦糖馬卡籠","price":650,"imgname":"prod3","tag":"newProduct"},
          {"id":4,"title":"水果優格","price":800,"imgname":"prod4","tag":""},
          {"id":5,"title":"葡萄蛋糕","price":700,"imgname":"prod5","tag":""},
        ],
        routenPath:this.$route.name,
        FavoriteProd:[],
        filterMenu:'',
        tagName:'',
        bb:[],
      }
    },
      created(){
       this.getFavoriteProd();
    }, 
    watch:{
      FavoriteProd(){
        const vm = this;
         if (process.client) {
            localStorage.setItem("FavoriteProd", JSON.stringify(vm.FavoriteProd));
         }
      }
    },
     methods:{
      getFavoriteProd(){
         const vm = this;
         //console.log(localStorage.FavoriteProd);
        if (process.client) {
             //require('external_library')
            // console.log(localStorage.FavoriteProd);
            if(window.localStorage){
            vm.FavoriteProd = JSON.parse(window.localStorage.getItem('FavoriteProd'));
           }
        }
      },
      changeSaveProd(prodname){
        const vm = this;                  
        let changeObj = new Set(vm.FavoriteProd);
        //console.log('changeObj',changeObj);
         if (changeObj.has(prodname)) {
            changeObj.delete(prodname);
            this.$toast.info('移除關注!!',{ 
	            theme: "outline", 
	            position: "top-right", 
	            duration : 5000
            });
           
          }else{
            changeObj.add(prodname);
            this.$toast.success('加入關注!!', { 
	            theme: "outline", 
	            position: "top-right", 
	            duration : 5000
            });
            //console.log('加入關注');
          }  
          vm.FavoriteProd = Array.from(changeObj);
             //console.log('FavoriteProd ', vm.FavoriteProd );
      },
      selectMenu(){

      }
    },
    computed:{
      filterdata(){
        let newdata = [];

        return;
      }
    }
  }
 

</script>
<style>

</style>

