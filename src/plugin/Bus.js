//兄弟组件通信在没使用vuex的情况下使用该插件
var install=function(Vue){
    let bus=new Vue()
    Vue.prototype.bus=bus
}
export default  install

