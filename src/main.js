//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(VueRouter)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
