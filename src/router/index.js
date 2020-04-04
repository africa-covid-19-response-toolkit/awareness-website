import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home";
import Care from "../views/care";
import Protection from "../views/protection";
import Sick from "../views/sick";
import What from "../views/what";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/care",
    name: "care",
    component: Care,
    props: true
  },
  {
    path: "/protection",
    name: "protection",
    component: Protection,
    props: true
  },
  {
    path: "/sick",
    name: "sick",
    component: Sick,
    props: true
  },
  {
    path: "/what",
    name: "what",
    component: What,
    props: true
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
