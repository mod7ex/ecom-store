const DEFAULT_TITLE = "Adnovado";

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import Cart from "../views/Cart.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import Profile from "../views/auth/Profile.vue";
import Logout from "../views/auth/Logout.vue";

const routes = [
      {
            path: "/",
            name: "home",
            component: Home,
            meta: {
                  // requiresAuth: false,
                  title: "Home",
            },
      },

      {
            path: "/search",
            name: "search",
            component: Search,
            meta: {
                  // requiresAuth: false,
                  title: "Search a product",
            },
      },

      {
            path: "/cart",
            name: "cart",
            component: Cart,
            meta: {
                  title: "Cart items",
            },
      },

      {
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                  title: "Login",
            },
      },

      {
            path: "/logout",
            name: "logout",
            component: Logout,
      },

      {
            path: "/register",
            name: "register",
            component: Register,
            meta: {
                  title: "Register",
            },
      },

      {
            path: "/profile",
            name: "profile",
            component: Profile,
            meta: {
                  title: "Profile",
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
