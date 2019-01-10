
// initial state
// shape: [{ id, quantity }]
const state = {
  vxCart:[],//1筆1筆的資料(obj)
  vxOrderSummary:{},
  vxCartList:[],// 有計算過後
  temporaryCartData:[] ,
  
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
  },
  setvxOrderSummary(context,status){
    context.commit('SetvxOrderSummary',status);
  },
  setvxCartList(context,status){
    context.commit('SetvxCartList',status);
  }
}
// mutationsb
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
     // console.log('state_vxCart',state.vxCart.length);      
    };
  },
  SetvxCartList(state,payload){
    console.log('SetvxCartList',payload);
    state.vxCartList = payload;
  },
  SetvxOrderSummary(state,payload){
    //console.log('vxOrderSummary',payload);
    state.vxOrderSummary = payload;
    console.log('state_vxOrderSummary', state.vxOrderSummary);
  }
  
}

// getters
const getters = {  
  CalcCartItem(state){
    let newData = []; 
    //groupby objects in an array
    let data = state.vxCart.reduce(function (acc, obj) {
      let key = obj['id'];
      //console.log('key',key);
       if (!acc[key]) {        
          acc[key] = [];
        }
        acc[key].push( obj);
        return acc;
     }, {});
   // 加入 數量len
   Object.keys(data).forEach(function(key) {
       let newObj =  Object.assign({}, data[key][0]); // Do not mutate vuex store state outside mutation handlers 避免參考錯誤
        newObj['len'] = data[key].length;
        newObj['subtotal'] =  newObj['len'] *  newObj['price']; //小計
      //  console.log('newObj' ,newObj);
        newData.push(newObj);
     }); 
       //this.cartData = newData;
    return newData;
  },
  Calctotalsubtotal(state,getters ){
    const TolSub = getters.CalcCartItem.reduce((acc,cuu, currentIndex, array)=>{    
        return  cuu.subtotal + acc;
     },0);
     let buy = {};
     buy.subtotal = TolSub;
     buy.tran = 300;
     buy.Total =   buy.subtotal + buy.tran;
    return buy;
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