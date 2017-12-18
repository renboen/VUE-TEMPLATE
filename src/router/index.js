import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex' 
console.log(store)
const Login = () => import('@/components/Login')
const Father = () => import('@/components/Father')

Vue.use(Router)
const routes= [
  {
    path: '/',
    redirect: '/login',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/father',
    name: 'Father',
    component: Father,
    meta:{
      needToken:true
    }
  },

];
const router= new Router({
  routes
});

//防止页面刷新导致token失效而重定向到登录
if (window.localStorage.getItem('token')) {
  store.commit('changetoken', window.localStorage.getItem('token'))
  console.log("klkklklklk")
  // router.push(JSON.parse(localStorage.getItem("currentRoute")))
}



//路由权限管理
router.beforeEach((to,from,next)=>{
console.log("router//////")
console.log(to)
// console.log(router.currentRoute)
//利用缓存保存路由信息防止页面刷新出错
// localStorage.setItem("currentRoute",JSON.stringify( to))

if(to.meta.needToken){
  //如果需要验证者进行验证，否则不验证
  if(store.state.token){//如果存在token且不过期则跳转
    console.log(store.state.token)
    next()
  }else{
    //不存在或过期，在跳转之前清除token相关信息，并跳转到登录
    store.commit('loginout')
    next({path:"/login"})
  }

}else{
  next()
}

})
export default router