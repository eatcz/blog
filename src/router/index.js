// 引入Vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入Home
import Home from '@/pages/Home'

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/home',
            component:Home
        },
        // 重定向
        {
            path:'*',
            redirect:'/home'
        }
    ]
})