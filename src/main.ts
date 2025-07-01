import { createApp } from "vue"
import vueRouter from  "./router"
import pinia  from "./store"
import App from "./App.vue"

const app = createApp(App)

app
  .use(vueRouter)
  .use(pinia)
  .mount('#app')