import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  /**
   * ==============================================================
   * PAGE AUTHEN
   * ==============================================================
   */

  {
    path: "/login",
    name: "login",
    meta: {
      title: "Đăng nhập",
    },
    component: () => import("@/views/auth/login"),
  },
  {
    path: "/register",
    name: "register",
    meta: {
      title: "Đăng kí",
    },
    component: () => import("@/views/auth/register"),
  },

  /**
   * ==============================================================
   * PAGE FRONTEND
   * ==============================================================
   */

  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
