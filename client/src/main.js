// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import service from './service/service'
import iView from 'iview'
import store from './store'
import 'iview/dist/styles/iview.css'
import './assets/css/_main.less'
Vue.config.productionTip = false
Vue.use(iView)
Vue.prototype.service = service
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
