import Vue from 'vue'
import App from '/src/App.vue'
import VueRouter from 'vue-router'
import { router } from '/src/Router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
})
