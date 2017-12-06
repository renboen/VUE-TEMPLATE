import Vue from 'vue'
import Vuex from 'vuex'
import onevuexmoudle from './childrenvuex/one'
// const onevuexmoudle =()=>import( './childrenvuex/one')
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      count: 0,
      // ...onevuexmoudle.state
    },
    getters:{
      // ...onevuexmoudle.getters,
      addcount:state=>{
        return state.count<100
      }
    },
    mutations: {
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
    modules:{
        onevuexmoudle
    }
  })
  export default store
