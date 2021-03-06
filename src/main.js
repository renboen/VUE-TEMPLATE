// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VConsole from './plugin/Console'
import Vue from 'vue'
import App from './App'
import router from './router'
import ('./plugin/Bus')
import i18n from './lang/Langplugin'
import LazyImg from '@/plugin/Lazy'
import store from './vuex' 
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import http from "./axio/axioGlobelConfigPlugin"
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(LazyImg)
console.log(i18n)


new Vue({
  el: '#app',
  router,
  i18n,
  store,
  template: '<App/>',
  components: {
    App
  }
})
