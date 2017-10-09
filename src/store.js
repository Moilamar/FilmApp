import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

import mainPage from './components/MainPage';

export const store = new Vuex.Store({
  state: {
    pageStack: [mainPage],
    openSide: false
  },
  mutations: {
    setPageStack(state, pageStack) {
      state.pageStack = pageStack;
    },
    toggleSideSplitter(state) {
      state.openSide = !state.openSide;
    }
  }
});