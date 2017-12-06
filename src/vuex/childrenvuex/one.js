const state = {
  add: [1,2,3]
};
const getters = {
  checklen: state => state.add.length
};
const mutations = {
  pushArr(state,) { state.add.push('one')}
};
const actions = {

  
  pushArraction({state,commit,rootState }) {
  return   new Promise((resolve, reject) => {
      setTimeout(() => {
      commit('pushArr')
        resolve()
      }, 1000)
    })
  }
};

export default{
    // namespaced: true,//true为局部状态actions,getters，mtation都会变为局部。
    state,
    getters,
    mutations,
    actions
}
