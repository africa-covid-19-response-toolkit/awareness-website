import Vue from "vue";
import VueI18n from "vue-i18n";

import am from "../locales/am";
import en from "../locales/en";

Vue.use(VueI18n);

const i18n = new VueI18n({
  fallbackLocale: "en",
  locale: "en",
  messages: {
    am,
    en
  }
});

export default i18n;
