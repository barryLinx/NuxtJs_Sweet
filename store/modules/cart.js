
// initial state
// shape: [{ id, quantity }]
const state = {
  vxCart:[],
  Alldata:[
    { id: 1, title: '頻果派', price: 450, imgname: 'prod1', tag: 'Today' },
        {
          id: 2,
          title: '藍梅派',
          price: 950,
          imgname: 'prod2',
          tag: 'recommend'
        },
        {
          id: 3,
          title: '焦糖馬卡籠',
          price: 650,
          imgname: 'prod3',
          tag: 'newProduct'
        },
        { id: 4, title: '水果優格', price: 800, imgname: 'prod4', tag: 'recommend' },
        { id: 5, title: '葡萄蛋糕', price: 700, imgname: 'prod5', tag: '' },
        { id: 6, title: '頻果派', price: 450, imgname: 'prod1', tag: 'Today' },
        {
          id: 7,
          title: '藍梅派',
          price: 950,
          imgname: 'prod2',
          tag: 'recommend'
        },
        {
          id: 8,
          title: '焦糖馬卡籠',
          price: 650,
          imgname: 'prod3',
          tag: 'newProduct'
        },
        { id: 9, title: '水果優格', price: 800, imgname: 'prod4', tag: '' },
        { id: 10, title: '葡萄蛋糕', price: 700, imgname: 'prod5', tag: '' },
        { id: 11, title: '頻果派', price: 450, imgname: 'prod2', tag: 'Today' },
        {
          id: 12,
          title: '藍梅派',
          price: 950,
          imgname: 'prod2',
          tag: 'recommend'
        },
        {
          id: 13,
          title: '焦糖馬卡籠',
          price: 650,
          imgname: 'prod3',
          tag: 'newProduct'
        },
        { id: 14, title: '水果優格', price: 800, imgname: 'prod2', tag: 'recommend' },
        { id: 15, title: '葡萄蛋糕', price: 700, imgname: 'prod5', tag: '' },
        { id: 16, title: '頻果派', price: 450, imgname: 'prod5', tag: 'Today' },
        {
          id: 17,
          title: '藍梅派',
          price: 950,
          imgname: 'prod5',
          tag: 'recommend'
        },
        {
          id: 18,
          title: '焦糖馬卡籠',
          price: 650,
          imgname: 'prod5',
          tag: 'newProduct'
        },
        { id: 19, title: '水果優格', price: 800, imgname: 'prod5', tag: '' },
        { id: 20, title: '葡萄蛋糕', price: 700, imgname: 'prod5', tag: '' }
  ],
}

// actions
const actions = {
  getclientcart(context,status){
    context.commit('InitClientCart',status);
  },
  AddCartAction(context,status){
    context.commit('AddClientCart',status);
  }, 
  removeCartAction(context,status){
    context.commit('RemoveClientCart',status);
  },
  allremoveCartItemAction(context,status){
    console.log('status',status);
    context.commit('AllRemoveCartItem',status);
  }
}
// mutations
const mutations = {
  InitClientCart(state,payload){
    state.vxCart = payload;
  },
  AddClientCart(state,payload){
    state.vxCart.push(payload);
  },
  RemoveClientCart(state,payload){
    state.vxCart.splice(payload,1);
  },
  AllRemoveCartItem(state,payload){
    console.log('payload',payload);
    for (let index = 0; index < payload.len; index++) {
      let del = state.vxCart.findIndex(e => {
        return e.id  == payload.id;
      });
      state.vxCart.splice(del,1);
      console.log('state_vxCart',state.vxCart.length);      
    };
  },

}

// getters
const getters = {
  CalcCart(state){
    return state.vxCart;
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}



// export default ({
//   namespaced:true,
//   state:{
//     clientCart:[],
//   },
//   actions:{
//     getclientcart(context,status){
//       context.commit('ClientCart',status);
//     },
//     AddCartAction(context,status){
//       context.commit('ClientCart');
//     }    
//   },
//   mutations:{
//     ClientCart(state,payload){
//       state.clientCart.push(payload);
//     }
//   },
//   getters:{
//     CalcCart(state){
//       return state.clientCart;
//     }
//   },
// })