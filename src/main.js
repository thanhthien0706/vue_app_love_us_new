import "bootstrap/dist/css/bootstrap.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { authService } from "@/services/authService";
import i18n from "@/plugins/i18n/i18n";

/**
 * COMPONENTs
 */
import NotifiView from "@/components/base/NotifiView.vue";

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
axios.defaults.baseURL = "https://api-love-us.herokuapp.com/api";
authService.initAuthHeader();

createApp(App)
  .component("fa", FontAwesomeIcon)
  .component("NotifiView", NotifiView)
  .use(store)
  .use(i18n)
  .use(router)
  .mount("#app");

import "bootstrap/dist/js/bootstrap.js";
