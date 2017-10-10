import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

import mainPage from './components/MainPage';
import infoPage from './components/InfoPage';
import listMoviesPage from './components/ListMoviesPage';
import searchPage from './components/SearchPage';

export const store = new Vuex.Store({
  state: {
    pageStack: [mainPage],
    openSide: false,
    searchParam: ""
  },
  mutations: {
    setPageStack(state, pageStack) {
      state.pageStack = pageStack;
    },
    popPageStack(state) {
      state.pageStack.pop();
    },
    pushPageStack(state, page) {
      switch(page){
          case 1: state.pageStack.push(mainPage); break;
          case 2: state.pageStack.push(infoPage); break;
          case 3: state.pageStack.push(listMoviesPage); break;
          case 4: state.pageStack.push(searchPage); break;
          default: console.log("Error: Cannot find page."); break;
      }
    },
    toggleSideSplitter(state) {
      state.openSide = !state.openSide;
    },
    setSearchParam(state, searchParam) {
      searchParam = encodeURI(searchParam);
      state.searchParam = searchParam;
    }
  }
});