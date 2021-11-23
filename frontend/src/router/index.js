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
      },

      {
            path: "/search",
            name: "search",
            component: Search,
      },

      {
            path: "/cart",
            name: "cart",
            component: Cart,
      },

      {
            path: "/login",
            name: "login",
            component: Login,
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
      },

      {
            path: "/profile",
            name: "profile",
            component: Profile,
      },

      {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                  import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
];

const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
});

export default router;
