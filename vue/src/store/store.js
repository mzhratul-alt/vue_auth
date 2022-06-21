import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
    state: {
        user: {
            data: {},
            token: localStorage.getItem("token"),
        },
        url: "http://127.0.0.1:8000/api/",
    },
    getters: {},
    actions: {
        register({ commit }, user) {
            axios.post(this.state.url+'register', user)
                .then((res) => {
                    commit('setUser',res)
                })
                .catch((err) => {
                    console.log(err.data)
                })
        },
    },
    mutations: {
        logout(state) {
            state.user.data = {};
            state.user.token = null;
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            localStorage.setItem('token',userData.token)
        },
    },
    modules: {},
});

export default store;
