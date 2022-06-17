import { createStore } from "vuex";

const store = createStore({
    state: {
        user: {
            data: {
                name: "Md. Zahid Hossain",
                email: "mzh.cit.bd@gmail.com",
            },
            token: 123,
        },
    },
    getters: {},
    mutations: {
       logout(state) {
          state.user.data = {};
          state.user.token = null;
       }
    },
    actions: {},
    modules: {},
});

export default store;
