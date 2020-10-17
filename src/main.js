import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  BootstrapVue,
  BIcon,
  BIconArrowBarLeft,
  BIconArrowBarRight,
} from "bootstrap-vue";

Vue.use(BootstrapVue);

// enabling Bootstrap Icons
Vue.component("BIcon", BIcon);
Vue.component("BIconArrowBarLeft", BIconArrowBarLeft);
Vue.component("BIconArrowBarRight", BIconArrowBarRight);

// enabling Font Awesome Icons
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
