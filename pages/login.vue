<template>
  <section class="login-info">
   
  <form class="login">  
    <h2 >會員登入</h2>
    <div class="form-control">
      <div class="form-input">      
        <div class="icon">
          <i class="material-icons"> person</i>
        </div>
        <input type="text" v-model="from.login.email" v-validate="'required|email'"  name="u-email" value="" placeholder="電子信箱/手機號碼">
      </div>
      <div class="form-input">
        <div class="icon" for="passwd">
          <i class="material-icons">vpn_key</i>
        </div >
        <input type="password" v-model="from.login.paw" v-validate="'required|min_value:8'" name="passwd" value="" placeholder="請輸入使用者密碼">
      </div>
      <div class="remember">
          <input nmae="re" class="remember-check" type="checkbox">
          <label for="re">記住我</label>
      </div>     
    </div> 
   
    <a class="login-btn"  href="" @click.prevent="singin" @keypress.enter.prevent="singin">登入帳號</a>  
  </form>
  <div class="Community">
      <h2 >會員登入</h2>
    <h3>
        —— 連結社群帳號 ——
    </h3>
    <div class="community-group">
      <div class="community-link">
        <img  src="~static/image/ic-facebook-logotype.svg" alt="">
      </div>
      <div class="community-link">
        <img src="~static/image/ic-google.svg" alt="">
      </div>
      <div class="community-link">
        <img src="~static/image/ic-yahoo.svg" alt="">
      </div>
    </div> 
  </div>
</section>
</template>
<script>
export default {
  data(){
    return{
      from:{
        login:{

        }
      }
    }
  },
  methods:{
    singin(){
       this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
        console.log('result',result);
         this.$toast.success('登入成功!!', { 
              position: "top-center", 
              theme: "outline",   
              duration : 3000,
               icon : {
                name : 'check',
                after : false // this will append the icon to the end of content
               }
            });
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
  }
}
</script>
