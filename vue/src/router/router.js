import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Users from "../views/User.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import store from "../store/store";
import axios from "axios";

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
        component: DefaultLayout,
        meta: {
            authenticated: true,
        },
        children: [
            { path: "/dashboard", name: "dashboard", component: Dashboard },
            { path: "/users", name: "users", component: Users },
        ],
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    if (to.meta.authenticated && !store.state.token) {
        return { name: "login" };
    } else if (store.state.token && to.name == 'login' || to.name == 'register') {
        return { name: 'dashboard' }
    }
});

export default router;
