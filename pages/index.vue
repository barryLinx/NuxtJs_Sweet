<template>
<div>
      <div class="bannerArea">
        <div class="banner" style="background-image: url('./image/banner.jpg');">        
        </div>
        <ul class="category-lists">
          <li class="category-item Today">
            <div class="imgblur" style="background-image: url('./image/Day.jpg');"></div>
            <div class="shadow"></div>
            <p>本日精選</p>
          </li>
          <li class="category-item popular">
            <div class="imgblur" style="background-image: url(./image/newProduct.jpg);"></div>
            <div class="shadow"></div>
            <p>人氣推薦</p>
          </li>
          <li class="category-item newProduct">
            <div class="imgblur" style="background-image: url('./image/popular.jpg');"></div>
            <div class="shadow"></div>
            <p>新品上市</p>
          </li>
        </ul>
      </div>
       <div class="depiction">
        <div class="showbox">
          <div class="img" style="background-image: url('./image/depiction1.jpg');">
          </div>
          <div class="content">
            <p> 青山依舊在，幾度夕陽紅。慣看秋月春風。
              一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
            </p>
            <br />
            <p> 是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。 </p>
          </div>
    
          <div class="title" style="background-image: url('./image/lg-為什麼選擇了做甜點.png');">
          </div>
          <div class="screen-320" style="background-image: url('./image/sm-橫式-為什麼選擇了做甜點.svg');"></div>
        </div>
        <div class="showbox reverse">
          <div class="img" style="background-image: url('./image/depiction2.jpg');">
          </div>
          <div class="title" style="background-image: url('./image/lg-為什麼一定要吃甜點.png');"></div>
          <div class="screen-320" style="background-image: url('./image/sm-橫式-為什麼一定要吃甜點.svg');"></div>
          <div class="content">
            <p> 青山依舊在，幾度夕陽紅。慣看秋月春風。
              一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p>    
            <br />
            <p> 是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。 </p>
          </div>
        </div>    
      </div>

      <div class="result">
        <div class="show-result" style="background-image: url('./image/lg-想吃甜點是不需要理由的2x.png');">
        </div>
        <div class="screen-show-result " style="background-image: url('./image/sm-橫式-想吃甜點是不需要理由的.svg');">
        </div>
      </div>
       <div id="product">
        <ul class="prodCard">
           <prodcard v-for="(item, index) in proddata" :key="index" 
             @point-favorite="changeSaveProd" :prodData="item" :saveobj="FavoriteProd"/>
         </ul>
            
      </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import prodcard from '~/components/prodcard.vue'

export default {
  components: {
    Logo,
    prodcard
  },
   head(){
      return{
        title:'Home Nuxt',
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
          {"title":"頻果派","price":450,"imgname":"prod1"},
          {"title":"藍梅派","price":950,"imgname":"prod2"},
          {"title":"焦糖馬卡籠","price":650,"imgname":"prod3"},
        ],
        FavoriteProd:[],
      }
    },
    created(){
       this.getFavoriteProd();
    },
    watch:{
      FavoriteProd(){
        const vm = this;
        localStorage.setItem("FavoriteProd", JSON.stringify(vm.FavoriteProd));
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
         if (changeObj.has(prodname)) {
            changeObj.delete(prodname)
          }else{
            changeObj.add(prodname)
          }  
          vm.FavoriteProd = Array.from(changeObj);
      }
    },

   
}
</script>

<style>

/* .container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
