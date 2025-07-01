import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

let routes: Array<RouteRecordRaw> = [
    { 
        path: '/',
        redirect: '/home'
    }
]

const modules: Record<string, any> = import.meta.glob('./modules/*.ts', { eager: true })

for(let key in modules) {
    let module = modules[key].default
    routes.push(module)
}

const router = createRouter({
    routes,
    history: createWebHistory()
})



export default router