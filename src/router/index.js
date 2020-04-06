import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/index.vue'
import store from '../views/productCenter/store/index.vue'
import cloudCode from '../views/productCenter/cloudCode/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
    },
    {
        name: 'store',
        component: store,
        path: '/store',
    },
    {
        name: 'cloudCode',
        path: '/cloudCode',
        component: cloudCode,
    },
]

const router = new VueRouter({
    routes,
})

export default router
