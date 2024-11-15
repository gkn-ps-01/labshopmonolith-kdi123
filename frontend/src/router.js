
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import MonolithOrderManager from "./components/listers/MonolithOrderCards"
import MonolithOrderDetail from "./components/listers/MonolithOrderDetail"
import MonolithInventoryManager from "./components/listers/MonolithInventoryCards"
import MonolithInventoryDetail from "./components/listers/MonolithInventoryDetail"

import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/monoliths/orders',
                name: 'MonolithOrderManager',
                component: MonolithOrderManager
            },
            {
                path: '/monoliths/orders/:id',
                name: 'MonolithOrderDetail',
                component: MonolithOrderDetail
            },
            {
                path: '/monoliths/inventories',
                name: 'MonolithInventoryManager',
                component: MonolithInventoryManager
            },
            {
                path: '/monoliths/inventories/:id',
                name: 'MonolithInventoryDetail',
                component: MonolithInventoryDetail
            },

            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },



    ]
})
