import "bootstrap/dist/css/bootstrap.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { authService } from "@/services/authService";
import i18n from "@/plugins/i18n/i18n";

/**
 * CUSTOM
 */
/* 
FORTAWEASOME CUSTOM
*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(far);
library.add(fab);

/**
 * CSS APP
 */

import "animate.css";

/**
 * CUSTOM AXIOS
 */
axios.defaults.baseURL = "http://localhost:3000/api";
authService.initAuthHeader();

createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(store)
  .use(i18n)
  .use(router)
  .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
