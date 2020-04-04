import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./app.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/index";
import i18n from "./plugins/i18n";

Vue.config.productionTip = false;
Vue.filter("uppercase", value => {
  return value.toUpperCase();
});
new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
