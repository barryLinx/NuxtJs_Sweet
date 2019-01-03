<template>
   <header>
        <h1>
          <!-- <img src="./image/logo-all-dark.png" alt=""> -->
          <nuxt-link class="logo" style="background-image: url('./image/logo-all-dark.png');" to="/">首页</nuxt-link>
            <nuxt-link class="screen-576" style="background-image: url('./image/logotype-sm-dark.svg');" to="/">首页</nuxt-link>
          <!-- <a href="sweet.html" style="background-image: url('./image/logo-all-dark.png');" class="logo" ></a>
          <a class="screen-576"  href="sweet.html" style="background-image: url('./image/logotype-sm-dark.svg');"></a> -->
<!-- v-for="(item, index) in navitem" :key="index" {{item}} {{routeName}}{{index}}-->
        </h1>
          <ul>
            <li  class="nav-item " @click="routeclick('index')"  :class="{'active':'index' == routeName}">
               <nuxt-link to="/">首頁</nuxt-link>
             
              </li>
            <li class="nav-item" @click="routeclick('product')" :class="{'active': 'product' == routeName}">
             
              <nuxt-link to="/product">甜點</nuxt-link>
            </li>
            <li class="nav-item" @click="routeclick('login')" :class="{'active': 'login' == routeName}">
             
               <nuxt-link to="/login">登入</nuxt-link>
            </li>
          </ul>                    
       
        <div class="cart"  @click="routeclick('cart')">
          <nuxt-link to="/cart"><i class="fas fa-shopping-cart"></i>
          {{vxCart.length }}
          </nuxt-link>
         
        </div>
        <div class="menu-btn" @click="showMenu" :class="{'close':show}">
          <div class="btn-line" ></div>
          <div class="btn-line"></div>
          <div class="btn-line"></div>
        <!-- <i class="fas fa-bars"></i> -->
      </div>
      <nav class="menu " :class="{'show':show}">      
        <ul class="menu-nav" :class="{'show':show}">
          <li class="nav-item current" :class="{'show':show}"> 
            <nuxt-link class="nav-link" to="/">首頁</nuxt-link>
            </li>
          <li class="nav-item" :class="{'show':show}">
            <nuxt-link class="nav-link" to="/product">甜點</nuxt-link>
          </li>
          <li class="nav-item" :class="{'show':show}">
           <nuxt-link class="nav-link" to="/login">登入</nuxt-link>
            </li>
        </ul>
      </nav>
      </header>
</template>

<script>
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex';
  export default{
   
    data(){
      return{
       // navitem:['index','product','login'],
        routeName:'index',
        show:false,
        BowerCart:[],
      }
    },
    created(){
       //this.routeName = 'index';
       this.getBuycart();
    },
    methods:{
       getBuycart(){
         const vm = this;           
          if (process.client) {  
             //require('external_library')
            // console.log(localStorage.FavoriteProd);
            if(window.localStorage){
              let arrdata =  JSON.parse(window.localStorage.getItem('clientCart'));
               console.log('arrdata',arrdata);
               if(arrdata !== null && arrdata.lenth !== 0){
               //vm.BowerCart =  arrdata;
                 this.$store.dispatch('cartModules/getclientcart', arrdata);
               }
            //vm.BowerCart = JSON.parse(window.localStorage.getItem('clientCart'));
            }          
          }
      },          
      
      routeclick(activeName){
        const vm = this;
        this.routeName = activeName;
        console.log( this.routeName);
      },
      showMenu(){
        this.show = !this.show;
      }

    },
    computed:{
      ...mapState("cartModules",["vxCart"]),
      // cartlenth(){
      //   const vm = this;
       
      //  console.log('vxCart',this.vxCart);
      //   vm.BowerCart = this.vxCart;
      //     console.log('BowerCart',this.BowerCart);
      //   return vm.BowerCart.length;
      // }
    }
  }
</script>

<style>

</style>

