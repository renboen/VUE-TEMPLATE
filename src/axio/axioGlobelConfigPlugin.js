import Vue from "vue"
import axios from "axios"
import utils from "axios/lib/utils"
import store from '../vuex' 
import router from '../router'
console.log(store.state)
console.log(router)
//参考网址： https://www.kancloud.cn/yunye/axios/234845
//https://github.com/superman66/vue-axios-github/blob/master/src/router.js

//全局配置请求config
console.log("axio")
axios.defaults.baseURL = 'http://10.6.102.30:3000';
axios.defaults.headers.common['Authorization'] = "AUTH_TOKEN";
// ["application/json", 'application/x-www-form-urlencoded',"multipart/form-data"]等
axios.defaults.headers.post['Content-Type'] ="application/json" ;
// axios.defaults.timeout=1000;





//全局拦截器,一般为了安全设置token,请求之前判断token有效性,结合状态管理实现登录验证拦截
let myInterceptor =axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("在发送请求之前做些什么")
    if(store.state.token){//判断token是否存在，存在则以后的所有请求都添加token认证
      // router.replace(path)
      console.log(config.data)
      config.headers.Authorization = store.state.token
    }
    console.log(config.data)
    return config;
  }, function (err) {
    // 对请求错误做些什么
    console.log(`错误发生在${err.config.url}错误为${err}`)
    return Promise.reject(err);
  });

// // 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (err) {
    if("token过期"){//如果token存在但是
      store.commit("loginout");
      router.replace("/login")
    }
    console.log(`错误发生在${err.config.url}错误为${err}`)
    return Promise.reject(err);
  });

Vue.prototype.$http=axios;
export default axios
    