import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
import home from '@/view/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login
    },
    {
      path: '/index',
      name: 'Index',
      component: home
    }
  ]
})
