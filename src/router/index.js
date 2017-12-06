import Vue from 'vue'
import Router from 'vue-router'
// import Father from '@/components/Father'
let h='@/components/Father';
const Father = () => import('@/components/Father')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/father',
      component: Father
    },
    {
      path: '/father',
      name: 'Father',
      component: Father
    },
 
  ]
})
