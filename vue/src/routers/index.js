import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import TheCreate from "@/components/TheCreateGrid.vue";


const routes =[
    {
        path: '/',
        name: 'HomeView',
        component : HomeView,
    },
    {
        path: '/create',
        name: 'TheCreate',
        component : TheCreate
    },
]


const router = createRouter({
    history:createWebHistory(),
    routes
})


export{router}