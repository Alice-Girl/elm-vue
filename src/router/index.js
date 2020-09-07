import Vue from 'vue'
import VueRouter from 'vue-router'
import Seller from '../view/Seller/index.vue'
import Goods from '../view/Goods/index.vue'
import Ratings from '../view/Ratings/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/seller'
    },
    {
        path: '/seller',
        name: 'Seller',
        component: Seller
    },
    {
        path: '/goods',
        name: 'Goods',
        component: Goods
    },
    {
        path: '/ratings',
        name: 'Ratings',
        component: Ratings
    }
]

const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
})

export default router
