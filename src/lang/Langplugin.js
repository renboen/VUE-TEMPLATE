// 使用vueil18n插jian
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import msgEn from './en'
import msgCn from './cn'
Vue.use(VueI18n)
const messages = {
  en: {
    message:msgEn,
  },
  cn:{
    message:msgCn
  }
}
const i18n = new VueI18n({
  locale: 'cn', // 语言标识
  messages
});
export default i18n






// //自己扩展多语言
// import Vue from 'vue'
// import msgEn from './en'
// import msgCn from './cn'
// const i18n = {
//   locale: 'cn', // 语言标识
//   messages:msgCn,
//   setlang(lang){
//     this.locale=lang;
//     this.messages=lang=="cn"?msgCn:msgEn
//   }
// };
// //调用set方法可以扩展可被检测变化的属性，直接Vue.key或者Vue.prototype.key是检测不到变化的。详情看官网set全局Api
// Vue.set(Vue.prototype,"$i18n",i18n)
// export default i18n
