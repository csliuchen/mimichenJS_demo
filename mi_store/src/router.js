import Vue from 'vue'
import Router from 'vue-router'


import Home from './pages/home'
import Index from './pages/index'
Product
Detail
Cart
Order
OrderList
OrderConfirm
OrderPay


Vue.use(Router);

export default new Router({
    routers: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: Product,
                },
                {

                }
            ]
        }

    ]
})

