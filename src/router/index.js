import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home";
import Care from "../views/care";
import Protection from "../views/protection";
import Sick from "../views/sick";
import What from "../views/what";
import NotFound from "../views/not-found";
import Resources from "../views/resources";

Vue.use(VueRouter);

export const HOME_ROUTE_NAME = "Home";

const routes = [
  {
    path: "/",
    name: HOME_ROUTE_NAME,
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
  },
  {
    path: "/resources",
    name: "resources",
    component: Resources,
    props: true
  },
  {
    path: "*",
    name: "Not Found",
    component: NotFound
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
