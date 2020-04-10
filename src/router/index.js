import Vue from "vue";
import VueRouter from "vue-router";
//English
const Care = () => import("../views/en/care");
const Home = () => import("../views/en/home");
const Protection = () => import("../views/en/protection");
const Sick = () => import("../views/en/sick");
const What = () => import("../views/en/what");
const NotFound = () => import("../views/en/not-found");
const Resources = () => import("../views/en/resources");
//Amharic
const Home_am = () => import("../views/am/home_am");
const Care_am = () => import("../views/am/care_am");
const Protection_am = () => import("../views/am/protection_am");
const Sick_am = () => import("../views/am/sick_am");
const What_am = () => import("../views/am/what_am");
const NotFound_am = () => import("../views/am/not-found_am");
const Resources_am = () => import("../views/am/resources_am");
//import i18n from "../plugins/i18n";
//import en from "../locales/en";
Vue.use(VueRouter);

export const HOME_ROUTE_NAME = "Home";

const routes = [
  {
    path: "/",
    beforeEnter(to, from, next) {
      //const lang = to.params.lang;
      //if (!["am", "en"].includes(lang)) return next("en");
      //if (i18n.locale !== lang) {
      //i18n.locale = lang;
      //}
      return next("/en");
    }
  },
  {
    path: "/en",
    component: Home,
    name: "home",
    children: [
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
        path: "*",
        name: "NotFound",
        component: NotFound
      }
    ]
  },
  {
    path: "/am",
    component: Home_am,
    name: "home_am",
    children: [
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
        path: "/am/resources",
        component: Resources_am,
        name: "resources_am",
        props: true
      },
      {
        path: "*",
        name: "NotFound_am",
        component: NotFound_am
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
