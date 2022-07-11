//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

Vue.use(VueRouter)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
