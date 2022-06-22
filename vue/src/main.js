import { createApp } from "vue";
import ViewUIPlus from "view-ui-plus";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";

import("./assets/css/ruang-admin.min.css");
import("./assets/vendor/bootstrap/css/bootstrap.min.css");
import("./assets/vendor/fontawesome-free/css/all.min.css");
import("./assets/vendor/jquery/jquery.min.js");
import("./assets/vendor/bootstrap/js/bootstrap.bundle.min.js");
import("./assets/js/ruang-admin.min.js");
import "view-ui-plus/dist/styles/viewuiplus.css";

createApp(App)
   .use(store)
   .use(router)
   .use(ViewUIPlus)
   .mount("#app");
