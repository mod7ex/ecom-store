export const namespaced = true;

export const state = {
      display_mode: true,
};

export const mutations = {
      CHANGE_DISPLAY_MODE: (state, mode) => {
            state.display_mode = mode;
      },
};

export const actions = {
      change_display_mode({ commit }, mode = true) {
            commit("CHANGE_DISPLAY_MODE", mode);
      },
};

export const getters = {
      display_mode: (state) => {
            return state.display_mode;
      },
};
