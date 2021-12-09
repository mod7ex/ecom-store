import { createStore } from "vuex";

import * as features from "./modules/features";

export default createStore({
      // strict: process.env.NODE_ENV !== "production",
      strict: true,

      state: {},

      getters: {},

      mutations: {},

      actions: {},

      modules: { features },
});
