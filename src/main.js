import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./app.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;
Vue.filter('uppercase', (value) => {
      return value.toUpperCase();
  }
)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
