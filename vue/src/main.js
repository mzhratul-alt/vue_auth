
import('./assets/css/ruang-admin.min.css')
import('./assets/vendor/bootstrap/css/bootstrap.min.css')
import('./assets/vendor/fontawesome-free/css/all.min.css')
import('./assets/vendor/jquery/jquery.min.js')
import('./assets/vendor/bootstrap/js/bootstrap.bundle.min.js')
import('./assets/js/ruang-admin.min.js')


import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

createApp(App)
   .use(router)
   .use(store)
   .mount('#app')
