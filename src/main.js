import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import FontAwesomeIcon from "./components/FontAwesomeIcon.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashAlt,
  faEdit,
  faTimesCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faTrashAlt, faEdit, faTimesCircle);

createApp(App)
  .use(router)
  .use(store)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
