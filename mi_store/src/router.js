import Vue from 'vue'
import Router from 'vue-router'


import Home from './pages/home'
import Index from './pages/index'
import Detail from './pages/detail'
import Product from './pages/product'
import Order from './pages/order'
import Cart from './pages/cart'
import OrderList from './pages/orderList'
import OrderConfirm from './pages/orderConfirm'
import OrderPay from './pages/orderPay'
import Alipay from './pages/alipay'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail,
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: Product,
                },
                {
                    path: '/cart/:id',
                    name: 'cart',
                    component: Cart,
                },
                {
                    path: '/Order',
                    name: 'order',
                    component: Order,
                    children: [
                        {
                            path: 'orderList',
                            name: 'order-list',
                            component: OrderList,
                        },
                        {
                            path: 'orderComfirm',
                            name: 'order-comfirm',
                            component: OrderConfirm,
                        },
                        {
                            path: 'orderPay',
                            name: 'order-pay',
                            component: OrderPay,
                        },
                        {
                            path: 'alipay',
                            name: 'alipay',
                            component: Alipay,
                        },
                    ],
                },



            ]
        }

    ]
})


