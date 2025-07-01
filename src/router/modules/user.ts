import type { RouteRecordRaw } from "vue-router"

let route: RouteRecordRaw = {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user/index.vue'),
    meta: {}
}

export default route  