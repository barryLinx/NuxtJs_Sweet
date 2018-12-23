<template>
<div>
   <div class="wrap">
     <Nav />
     <nuxt/>
   </div>
     <footer>     
          <div class="head">   
            <div class="cntainer">
                <div class="title">
                
                    <div class="img" style="background-image: url('./image/logo-light.svg')">
                    </div>
                    <span>訂閱你我的甜蜜郵件</span>
                  </div>
            
                  <div class="email">
                    <div class="mail-icon">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <input type="text">
                    <button><i class="fas fa-arrow-right"></i></button>
                  </div>
            </div>              
            </div>        
            <div class="content">
               <div class="container"> 
                  <div class="concact ">
                      <div class="img" style="background-image: url(./image/logotype-lg-dark.svg)"></div>
                      <div class="text">
                        <p>07-1234-5678</p>
                        <p>sweetaste@email.com </p>
                        <p>800高雄市新興區幸福路 520 號</p>
                      </div>              
                    </div>
              
                    <div class="depiction">
                      <div class="img" style="background-image: url(./image/sm-今天是個吃甜點的好日子.svg)"></div>
                    </div>
                </div>
             
            </div>
            <div class="concact-footer">
              <div class="container">
                  <div class="icon">
                      <a href=""><i class="fab fa-facebook-square"></i></a>
                      <a href=""><i class="fas fa-at"></i></a>
                    </div>
                    <div class="copyright">
                      <p>© 2018 Sweetaste* All Rights Reserved</p>
                    </div>
              </div>
            </div>
      </footer>
  
</div>


</template>

<script>
  import Nav from "../components/Header.vue";
  export default{
    components:{
      Nav
    },
      data(){
      return{       
        routeName: this.$route.name, 
      }
    },    
  }
</script>

<style>


</style>
