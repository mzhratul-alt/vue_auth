import axios from "axios";
import { createStore } from "vuex";
import router from "../router/router";

const store = createStore({
    state: {
        user: {},
        token: localStorage.getItem("token") || null,
        url: "http://127.0.0.1:8000/api/",
    },
    getters: {},
    actions: {},
    mutations: {
        logout(state) {
            state.user = {};
            state.token = null;
        },
        objReset(state, obj) {
            for (var property in obj) {
                obj[property] = "";
            }
        },
        storeUser(state, resData) {
            state.user = resData.data.user;
            state.token = resData.data.access_token;
            localStorage.setItem("token", resData.data.access_token);
        },
        checkAuth(state) {
            if (state.token !== "") {
                if (state.token !== localStorage.getItem("token")) {
                    router.push({ name: "login" });
                }
            } else {
                router.push({ name: "login" });
            }
        },
    },
    modules: {},
});

export default store;
