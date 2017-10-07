import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    test: 0
  },
  mutations: {
    increment (state) {
      state.test++
    }
  }
});