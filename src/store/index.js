import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    locale: "en"
  },
  getters: {
    getLocale: state => {
      return state.locale;
    }
  },
  mutations: {
    setLocale: (state, locale) => {
      state.locale = locale;
    }
  }
});

export default store;
