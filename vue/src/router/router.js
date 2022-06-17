import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Users from "../views/User.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import store from "../store/store";

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
        component: DefaultLayout,
        meta: {
            requireAuth:true,
        },
        children: [
            { path: "/dashboard", name: "dashboard", component: Dashboard },
            { path: "/users", name: "users", component: Users },
        ],
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth && !store.state.user.token) {
        next({ name: 'login' })
    } else if (store.state.user.token && to.name === 'login' || to.name === 'register') {
        next('dashboard')
    }
     else {
        next()
    }
})



export default router;
