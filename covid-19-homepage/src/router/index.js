import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/home";
import Details from "../components/details";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:'details',
    name: 'Details',
    component: Details
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
