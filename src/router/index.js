import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/HomeView.vue';
import Services from '../views/ServicesView.vue';
import Cleaning from '../views/CleaningView.vue';
import WindowCleaning from "../views/WindowCleaning.vue";
const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/cennik",
        component: Services,
    },
    {
        path: "/cistenie",
        component: Cleaning,
    },
    {
        path: "/umyvanie-okien",
        component: WindowCleaning,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
