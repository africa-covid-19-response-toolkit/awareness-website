import Vue from "vue";
import VueRouter from "vue-router";
//Shared
const NotFound = () => import("../views/shared/not-found");
const Resources = () => import("../views/shared/resources");
//English
const Care = () => import("../views/en/care");
const Home = () => import("../views/en/home");
const Protection = () => import("../views/en/protection");
const Sick = () => import("../views/en/sick");
const What = () => import("../views/en/what");

//Amharic
const Home_am = () => import("../views/am/home_am");
const Care_am = () => import("../views/am/care_am");
const Protection_am = () => import("../views/am/protection_am");
const Sick_am = () => import("../views/am/sick_am");
const What_am = () => import("../views/am/what_am");
//const NotFound_am = () => import("../views/am/not-found_am");
//const Resources_am = () => import("../views/am/resources_am");
import i18n from "../plugins/i18n";
//import en from "../locales/en";
Vue.use(VueRouter);

export const HOME_ROUTE_NAME = "Home";

const routes = [
  {
    path: "/",
    beforeEnter(to, from, next) {
      return next("/en");
    }
  },
  {
    path: "/en",
    component: {
      template: "<router-view></router-view>"
    },
    children: [
      {
        path: "",
        component: Home,
        name: "home",
        props: true
      },
      {
        path: "care",
        component: Care,
        name: "care",
        props: true
      },
      {
        path: "protection",
        component: Protection,
        name: "protection",
        props: true
      },
      {
        path: "sick",
        component: Sick,
        name: "sick",
        props: true
      },
      {
        path: "what",
        component: What,
        name: "what",
        props: true
      },
      {
        path: "resources",
        component: Resources,
        name: "resources",
        props: true
      },
      {
        path: "not-found",
        name: "NotFound",
        component: NotFound
      }
    ]
  },
  {
    path: "/am",
    component: {
      template: "<router-view></router-view>"
    },
    children: [
      {
        path: "",
        component: Home_am,
        name: "home_am",
        props: true
      },
      {
        path: "care",
        component: Care_am,
        name: "care_am",
        props: true
      },
      {
        path: "protection",
        component: Protection_am,
        name: "protection_am",
        props: true
      },
      {
        path: "sick",
        component: Sick_am,
        name: "sick_am",
        props: true
      },
      {
        path: "what",
        component: What_am,
        name: "what_am",
        props: true
      },
      {
        path: "resources",
        component: Resources,
        name: "resources_am",
        props: true
      },
      {
        path: "not-found",
        name: "NotFound_am",
        component: NotFound
      }
    ]
  },
  {
    path: "*",
    beforeEnter(to, from, next) {
      const lang = i18n.locale;
      if (!["am", "en"].includes(lang)) return next("/en/not-found");
      return next(`/${lang}/not-found`);
    }
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
