import { NO } from "@vue/shared";
import axios from "axios";
import { Notice } from "view-ui-plus";
import { createStore } from "vuex";
import router from "../router/router";

const store = createStore({
    state: {
        token: localStorage.getItem('token'),
        userName: "",
        userEmail: "",
        userId: "",
        refreshToken: "",
        expiresIn: "",
        url: "http://127.0.0.1:8000/api/",
    },
    getters: {},
    actions: {
        login(context, data) {
            axios
                .post(this.state.url + "auth/login", data)
                .then((res) => {
                    context.commit("storeUserData", res.data);
                    localStorage.setItem('token', res.data.access_token)
                })
                .catch((err) => {
                    Notice.error({
                        title: "Invalid Credintials",
                    });
                });
        },
    },
    mutations: {
        logout(state) {
            state.user = {};
            state.token = null;
            localStorage.removeItem("token");
        },
        objReset(state, obj) {
            for (var property in obj) {
                obj[property] = "";
            }
        },
        storeUserData(state, data) {
            state.token = data.access_token;
            state.userName = data.user.name;
            state.userEmail = data.user.email;
            state.userId = data.user.id;
            state.expiresIn = data.expires_in;

            router.push({ name: "dashboard" });
            Notice.success({
                title: 'Loged In Successfully'
            })
        },
    },
});

export default store;
