import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import cartModules from './modules/cart.js';


const store = () => new Vuex.Store({
 
  strict:true,
  modules:{
   cartModules
  },
})

export default store

// export default new Vuex.Store({
//  // strict:true,
//   modules:{
//     cartModules
//   },
  
// })