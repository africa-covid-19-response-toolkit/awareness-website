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
    path:'/care',
    name: 'Care',
    component: Care
  },
  {
    path:'/protection',
    name: 'Protection',
    component: Protection
  },
  {
    path:'/sick',
    name: 'Sick',
    component: Sick
  },
  {
    path:'/what',
    name: 'What',
    component: What
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
