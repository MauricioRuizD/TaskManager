import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from "axios"
import { BASE_URL_MANAGER } from "@/config";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

require('./assets/styles/main.css');

Vue.config.productionTip = false;
Axios.defaults.baseURL = `${BASE_URL_MANAGER}/api`;
Vue.prototype.$http = Axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
