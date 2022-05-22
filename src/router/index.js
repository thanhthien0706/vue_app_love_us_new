import { createRouter, createWebHistory } from "vue-router";
import checkBeginStart from "@/middleware/checkBeginStart";

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
    name: "convey",
    meta: {
      title: "Thông điệp",
    },
    component: () => import("@/views/frontend/BeginStartView"),
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "Trang chủ",
      middleware: [checkBeginStart],
    },
    component: () => import("@/views/frontend/HomeView"),
  },
  {
    path: "/actives",
    name: "actives",
    meta: {
      title: "Hoạt động",
      middleware: [checkBeginStart],
    },
    component: () => import("@/views/frontend/ActivityView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];

  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.afterEach((from) => {
  document.title = from.meta.title || "Us love";
});

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };

    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
