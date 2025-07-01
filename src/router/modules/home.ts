import type { RouteRecordRaw } from "vue-router"

let route: RouteRecordRaw = {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {}
}

export default route