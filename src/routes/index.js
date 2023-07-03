import { createRouter, createWebHistory } from "vue-router";

import LandingPage from '@/components/main/LandingPage.vue';
import ContactPage from '@/components/contact/ContactPage.vue';

const routes = [
    {path : '/', redirect : '/main'},
    {path : '/main', name : 'LandingPage', component : LandingPage},

    {path : '/contact', name : 'ContactPage', component : ContactPage}
]

const router = createRouter({
    history : createWebHistory(),
    routes  : routes,
});

export default router;