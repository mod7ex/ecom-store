import { set_cookie, get_cookie } from "@/helpers/helper_functions";

export const namespaced = true;

export const state = {
      display_mode: false,
};

export const mutations = {
      CHANGE_DISPLAY_MODE: (state, mode) => {
            state.display_mode = mode;
      },
};

export const actions = {
      prepare_display_mode({ commit }) {
            let mode = get_cookie("display_mode");

            commit("CHANGE_DISPLAY_MODE", mode === "true");
      },

      change_display_mode({ commit }, mode = true) {
            commit("CHANGE_DISPLAY_MODE", mode);
            set_cookie("display_mode", mode);
      },
};

export const getters = {
      display_mode: (state) => {
            return state.display_mode;
      },
};
