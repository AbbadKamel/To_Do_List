import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import store from "../store/index";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.state.account.token) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/About",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/Register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },

  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      if (store.state.account.token) {
        next("/");
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
