import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  fallbackLocale: "en",
  messages: {
    am: require("../locales/am.json"),
    en: require("../locales/en.json")
  }
});

export default i18n;
