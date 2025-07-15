import type { RouteRecordRaw } from "vue-router"

let route: RouteRecordRaw = {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {}
}

export default route  
