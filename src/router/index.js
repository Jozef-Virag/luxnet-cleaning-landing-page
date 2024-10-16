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
    {
        path: "/firemne-upratovanie",
        component: CompanyCleaning,
    },
    {
        path: "/postavebne-upratovanie",
        component: ConstructionCleaning,
    },
    {
        path: "/strojove-cistenie",
        component: ScrubberCleaning,
    },
    {
        path: "/tepovanie",
        component: SpottingCleaning,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
