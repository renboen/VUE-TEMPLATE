//兄弟组件通信在没使用vuex的情况下使用该插件
//第一种
// const eventBus=function(Vue){
//     let bus=new Vue()
//     //需要调用Vue.use()
//     // Vue.set(Vue.prototype,"$bus",bus)
//     Vue.prototype.$bus=bus
// }
// export default  eventBus


//第二种
// import Vue from 'vue'
// Vue.prototype.$bus=new Vue()
// Vue.set(Vue.prototype,"$bus",new Vue())
// //直接引入文件不调用use()


//第三种
import Vue from 'vue'
const eventBus=function(Vue){
    let bus=new Vue()
    //需要调用Vue.use()
    // Vue.set(Vue.prototype,"$bus",bus)
    Vue.prototype.$bus=bus
}
//不输出任何值
//直接import(path)即可使用
Vue.use(eventBus)


