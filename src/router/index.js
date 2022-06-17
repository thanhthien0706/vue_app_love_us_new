import { createRouter, createWebHistory } from "vue-router";
import checkBeginStart from "@/middleware/checkBeginStart";
import checkRole from "@/middleware/checkRole";

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
   * PAGE GAME
   * ==============================================================
   */

  {
    path: "/flip-card",
    name: "game_flip_card",
    meta: {
      title: "Flip card game",
    },
    component: () => import("@/views/frontend/game/FlipCardView"),
  },

  /**
   * ==============================================================
   * PAGE ADMIN
   * ==============================================================
   */
  //  admin/blogs
  {
    path: "/admin/blogs/:idAuthor",
    name: "admin_blogs",
    meta: {
      title: "Blogs",
      middleware: [checkRole.isAdmin],
    },
    component: () => import("@/views/admin/Adminblogs"),
  },

  /**
   * ==============================================================
   * PAGE ME
   * ==============================================================
   */

  {
    path: "/me/:idUser",
    name: "person",
    meta: {
      middleware: [checkRole.isLogin],
    },
    component: () => import("@/views/frontend/me/MeMain"),
  },

  /**
   * ==============================================================
   * PAGE FRONTEND
   * ==============================================================
   */
  // @/views/frontend/BeginStartView
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

  {
    path: "/blog",
    name: "blog",
    meta: {
      title: "Bài viết",
      middleware: [checkBeginStart],
    },
    component: () => import("@/views/frontend/BlogView.vue"),
  },
  {
    path: "/events",
    name: "events",
    meta: {
      title: "Sự kiện",
      middleware: [checkBeginStart],
    },
    component: () => import("@/views/frontend/EventView.vue"),
  },
  {
    path: "/blog/:slugBlog",
    name: "detail_blog",
    meta: {
      title: "blog_detail",
    },
    component: () => import("@/views/frontend/DetailBlog"),
  },

  {
    path: "/report",
    name: "report",
    meta: {
      title: "Báo cáo",
      middleware: [checkBeginStart],
    },
    component: () => import("@/views/frontend/ReportView.vue"),
  },

  {
    path: "/",
    name: "convey",
    meta: {
      title: "Thông điệp",
    },
    component: () => import("@/views/frontend/BeginStartView"),
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

router.afterEach((to) => {
  document.title = to.meta.title || "Us love";
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
