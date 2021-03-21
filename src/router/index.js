import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import store from "../store/index";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    
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
    
  },
];


export default router;
