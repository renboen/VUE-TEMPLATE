// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import messages from './lang/Langplugin'
import LazyImg from '@/plugin/Lazy'
import store from './vuex' 
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueI18n)
Vue.use(LazyImg)
const i18n = new VueI18n({
  locale: 'cn', // 语言标识
  messages
});

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
