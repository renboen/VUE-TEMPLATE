import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import state from './globleState'
import * as getters from './globleGetters'
import * as actions from './globleActions'
import * as mutations from './globleMutations'



// import onevuexmoudle from './modules/one'
// const onevuexmoudle =()=>import( './modules/one')这样为什么么会出现问题
// const globleVuex =()=>import( './modules/globlevuex')这样为什么么会出现问题
Vue.use(Vuex)
const store = new Vuex.Store({
  state() {
    return state
  },
  getters,
  mutations,
  actions,
  modules: {
    namespaced: true,
    moduleA
  }
})

console.log(store.state)
if (module.hot) {
  console.log("热重载12")
  module.hot.accept([
    './globleGetters',
    './globleMutations',
    './globleActions',
    "./modules/moduleA"
  ], () => {
  console.log("热重载23")
    store.hotUpdate({
      getters: require('./globleGetters'),
      actions: require('./globleActions'),
      mutations: require('./globleMutations'),
      modules: {moduleA:require("./modules/moduleA").default}
    })
  })
}

export default store

// const store = new Vuex.Store({
//     state: {
//       count: 0,
//       token:'',
//       clearLoginMsg:'',
//     },
//     getters:{
//       addcount:state=>{
//         return state.count<100
//       }
//     },
//     mutations: {
//       changetoken(state,token){
//       state.token=token;
//       localStorage.setItem("token",state.token)
//       return state.token
//       },
//       loginout(state){
//         return state.clearLoginMsg=''
//       },
//       increment (state,boolen) {

//         if(boolen){
//         alert(boolen)

//           return state.count=0
//         };
//         var p=`${state.count}ppppp`;
//         console.log(this)
//        return state.count++
//       }
//     },

//     modules:{
//         onevuexmoudle,globleVuex
//     }
//   })
