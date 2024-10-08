import { createWebHistory, createRouter } from "vue-router"

import HomeView from "./views/HomeView.vue"
import AboutView from "./views/AboutView.vue"
import ContactView from "./views/ContactView.vue"

//路由設定
//URL <---> Path => 載入 Component
const routes = [
    {
        //http://localhost:5173/
        path: '/',
        component: HomeView,
        name: 'home'
    },
    {
        //http://localhost:5173/about
        path: '/aboutus',
        component: AboutView,
        name: 'about'
    },

    {
        //http://localhost:5173/contact
        path: '/contactus',
        component: ContactView,
        name: 'contact'
    }
]

const router = createRouter({
    history: createWebHistory(), //使用 HTML5 History API
    //routes: routes
    routes
})

export default router