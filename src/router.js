import { createWebHistory, createRouter } from "vue-router"

import HomeView from "./views/HomeView.vue"
import AboutView from "./views/AboutView.vue"
import ContactView from "./views/ContactView.vue"
import Team1View from "./views/Team1View.vue"
import Team2View from "./views/Team2View.vue"
import MemberCenter from "./views/MemberCenter.vue"
import NotFound from "./views/NotFound.vue"
import DirectivesView from "./views/DirectivesView.vue"
import TodosView from "./views/TodosView.vue"
import RegisterView from "./views/RegisterView.vue"
import LoginView from "./views/LoginView.vue"
import TabsView from "./views/TabsView.vue"

//路由設定
//URL <---> Path => 載入 Component
const routes = [
    {
        //http://localhost:5173/
        path: '/',
        component: HomeView,
        name: 'home',
        alias: '/index'    //http://localhost:5173/index
    },
    {
        //http://localhost:5173/aboutus
        path: '/aboutus',
        component: AboutView,
        redirect: '/aboutus/team1', // 新增這一行
        name: 'about',
        children: [
            // http://localhost:5173/aboutus/
            {
                path: '/',
                redirect: '/aboutus/team1'
            },
            //http://localhost:5173/aboutus/team1
            {
                path: 'team1',
                component: Team1View,
                name: 'team1'
            },
            //http://localhost:5173/aboutus/team2
            {
                path: 'team2',
                component: Team2View,
                name: 'team2'
            }

        ]
    },

    {
        //http://localhost:5173/contact
        path: '/contactus',
        component: ContactView,
        name: 'contact'
    },
    {
        //http://localhost:5173/directives
        path: '/directives',
        component: DirectivesView,
        name: 'directives'
    },
    {
        //http://localhost:5173/todos
        path: '/todos',
        component: TodosView,
        name: 'todos'
    },
    {
        //http://localhost:5173/register
        path: '/register',
        component: RegisterView,
        name: 'register'
    },
    {
        //http://localhost:5173/login
        path: '/login',
        component: LoginView,
        name: 'login'
    },
    {
        //http://localhost:5173/login
        path: '/tabs',
        component: TabsView,
        name: 'tabs'
    },
    {
        //路由參數
        //http://localhost:5173/member/12
        path: '/member/:id',
        component: MemberCenter,
        name: 'member',
        props: true
    },
    {
        //http://localhost:5173/contact'
        path: '/contact',
        redirect: '/contactus'    //http://localhost:5173/contactus
    },
    {
        //404
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(), //使用 HTML5 History API
    //routes: routes
    routes
})

export default router