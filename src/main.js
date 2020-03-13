import Vue from 'vue'
import App from './App.vue'
import routes from './js/router'
import VueRouter from "vue-router";
import axios from 'axios'
Vue.config.productionTip = false
//导入router
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

//导入axios网络请求框架
Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
