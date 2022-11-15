import Vue from 'vue'
import App from './App.vue'
// 引入字体样式
import '@/assets/iconfont.css'
// 引入vue-router
import router from '@/router'
// 引入vuex
import store from '@/store/index'
// 引入mockjs
import '@/mock/mockServe'
Vue.config.productionTip = false
// 按需引入element-ui
import {Pagination} from 'element-ui'
Vue.component(Pagination.name, Pagination);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
