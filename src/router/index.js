import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/HomeView.vue';
import Services from '../views/ServicesView.vue';
import Cleaning from '../views/CleaningView.vue';
import WindowCleaning from "../views/WindowCleaning.vue";
import CompanyCleaning from "../views/CompanyCleaning.vue";
import ConstructionCleaning from "../views/ConstructionCleaning.vue";
import ScrubberCleaning from "../views/ScrubberCleaning.vue";
import SpottingCleaning from "../views/SpottingCleaning.vue";
const routes = [
    {
        path: "/",
        component: Home,
        meta: {
            title: 'LuxNet Cleaning - Domov',
        },
    },
    {
        path: "/cennik",
        component: Services,
        meta: {
            title: 'LuxNet Cleaning - Cenník',
        },
    },
    {
        path: "/cistenie",
        component: Cleaning,
        meta: {
            title: 'LuxNet Cleaning - Čistenie',
        },
    },
    {
        path: "/umyvanie-okien",
        component: WindowCleaning,
        meta: {
            title: 'LuxNet Cleaning - Umývanie okien',
        },
    },
    {
        path: "/firemne-upratovanie",
        component: CompanyCleaning,
        meta: {
            title: 'LuxNet Cleaning - Firemné upratovanie',
        },
    },
    {
        path: "/postavebne-upratovanie",
        component: ConstructionCleaning,
        meta: {
            title: 'LuxNet Cleaning - Postavebné upratovanie',
        },
    },
    {
        path: "/strojove-cistenie",
        component: ScrubberCleaning,
        meta: {
            title: 'LuxNet Cleaning - Strojové čistenie',
        },
    },
    {
        path: "/tepovanie",
        component: SpottingCleaning,
        meta: {
            title: 'LuxNet Cleaning - Tepovanie',
        },
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'LuxNet - Cleaning';
    next();
});

export default router;
