import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import { ThemeProvider } from "vue-styled-components";

import "./plugins/bootstrap-vue";
import App from "./app.vue";
import "./registerServiceWorker";
import router from "./router/index";
import i18n from "./plugins/i18n";
import "./assets/css/main.css";

Vue.config.productionTip = false;
Vue.filter("uppercase", value => {
  return value.toUpperCase();
});
Vue.component("theme-provider", ThemeProvider);
new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");
