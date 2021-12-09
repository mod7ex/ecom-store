const DEFAULT_TITLE = "Adnovado";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
      {
            path: "/",
            name: "home",
            component: () => import("../views/Home.vue"),
            meta: {
                  // requiresAuth: false,
                  title: "Home",
            },
      },

      {
            path: "/search",
            name: "search",
            component: () => import("../views/Search.vue"),
            meta: {
                  // requiresAuth: false,
                  title: "Search a product",
            },
      },

      {
            path: "/cart",
            name: "cart",
            component: () => import("../views/Cart.vue"),
            meta: {
                  title: "Cart items",
            },
      },

      {
            path: "/login",
            name: "login",
            component: () => import("../views/auth/Login.vue"),
            meta: {
                  title: "Login",
            },
      },

      {
            path: "/logout",
            name: "logout",
            component: () => import("../views/auth/Logout.vue"),
      },

      {
            path: "/register",
            name: "register",
            component: () => import("../views/auth/Register.vue"),

            meta: {
                  title: "Register",
            },
      },

      {
            path: "/profile",
            name: "profile",
            component: () => import("../views/auth/Profile.vue"),
            meta: {
                  title: "Profile",
            },
      },

      {
            path: "/singleproduct",
            name: "singleproduct",
            component: () => import("../views/SingleProduct.vue"),
            meta: {
                  title: "Single Product",
            },
      },

      {
            path: "/about",
            name: "about",
            component: () => import("../views/About.vue"),
            meta: {
                  title: "About",
            },
      },
];

const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
});

router.beforeEach((to, from, next) => {
      next();
      document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
