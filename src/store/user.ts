// initial state

import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "notLogin",
    },
  }),

  actions: {
    // todo 改为从远程获取登录信息
    getLoginUser({ commit, state }, payload) {
      commit("updateUser", { userName: "小王" });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
