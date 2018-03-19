import Vue from 'vue'
import Router from 'vue-router'
import MLogin from '@/components/m-login/m-login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: MLogin
    }
  ]
})
