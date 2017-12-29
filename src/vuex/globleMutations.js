// import * as types from "./multationtype"
// 当启用vuex热重载的时候 使用import getters from path.由于这种书处对象的方法在开启热重载的时候有坑所以推荐第二种
// import * as getters from path

//第一种
// const mutations = {
//     [types.ADD_NUM](state,v=0) {
//         state.myNum+=v
//         //会污染局部空间状态应该在组件内显示的去提交对局部state改变的mutations  state.moduleA.myNum++
//     },
//     [types.DECREASE_NUM](state) {
//         state.myNum--
//     }
// }
// export default mutations



// 第二种
export const ADD_NUM=(state,v=0)=>{
    state.myNum+=v
};
export const DECREASE_NUM=(state,v=0)=>{
        state.myNum--
};