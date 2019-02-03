/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDark: false,
    orgs: [],

  },
  mutations: {
    DARK_MODE: (state) => {
      state.isDark = !state.isDark;
    },

  },
  actions: {
    DARK_MODE: (context) => {
      context.commit('DARK_MODE');
    },
  },
});
