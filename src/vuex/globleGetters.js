// 当启用vuex热重载的时候 使用import getters from path.由于这种书处对象的方法在开启热重载的时候有坑所以推荐第二种
// import * as getters from path

// 第一种
// const getters={
//   isOdd:state=>{
//     return state.myNum%2===0?"是偶数" :"是奇数"
//   },
//   globleMixinModuleA:(state,getters)=>{
//     //全局getters内访问局部命名空间getters
//     // return getters['moduleA/isOdd']
//     //全局getters内访问局部命名空间state
//     return (state.myNum+state.moduleA.myNum)%2===0?"/全局/和局部A混合后计算结果是偶数":"全局和局部A混合后计算结果是奇数"
//   }
// }
// export default getters  
  
  
  
  // 第二种
  export const isOdd=state=>{
    return state.myNum%2===0?"是偶数" :"是奇数"
  };
  export const globleMixinModuleA=(state,getters)=>{
    //全局getters内访问局部命名空间getters
    // return getters['moduleA/isOdd']
    //全局getters内访问局部命名空间state
    return (state.myNum+state.moduleA.myNum)%2===0?"/全局/和局部A混合后计算结果是偶数":"全局和局部A混合后计算结果是奇数"
  }


