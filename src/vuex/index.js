import Vue from 'vue'
import Vuex from 'vuex'
import onevuexmoudle from './childrenvuex/one'
// const onevuexmoudle =()=>import( './childrenvuex/one')
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      count: 0,
      token:'',
      clearLoginMsg:'',
      // ...onevuexmoudle.state
    },
    getters:{
      // ...onevuexmoudle.getters,
      addcount:state=>{
        return state.count<100
      }
    },
    mutations: {
      changetoken(state,token){
      state.token=token;
      localStorage.setItem("token",state.token)
      return state.token
      },
      loginout(state){
        
        return state.clearLoginMsg=''
      },
      // ...onevuexmoudle.mutations,
      increment (state,boolen) {
        
        if(boolen){
        alert(boolen)
        
          return state.count=0
        };
        var p=`${state.count}ppppp`;
        console.log(this)
       return state.count++
      }
    },
//     actions:{
// token({state,commit,rootstate}){
//   commit(changetoken)
// }
//     },
    modules:{
        onevuexmoudle
    }
  })
  export default store
