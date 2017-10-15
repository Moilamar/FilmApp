import Vue from 'vue';
import Vuex from 'vuex';

import mainPage from './components/MainPage';
import infoPage from './components/InfoPage';
import listMoviesPage from './components/ListMoviesPage';
import searchPage from './components/SearchPage';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    pageStack: [mainPage],
    openSide: false,
    searchParam: "",
    isSearching: false,
    movieList: [],
    movie: "test"
  },
  getters: {
    getDecodedUrl: state => {
      console.log("Getting url: " + state.searchParam);
      return decodeURIComponent(state.searchParam.replace(/\+/g, ' '));
    }
  },
  mutations: {
    setPageStack(state, pageStack) {
      state.pageStack = pageStack;
    },
    popPageStack(state) {
      state.pageStack.pop();
    },
    pushPageStack(state, page, movieList) {
      switch(page) {
          case 1: state.pageStack.push(mainPage); break;
          case 2: state.pageStack.push(infoPage); break;
          case 3: state.pageStack.push(listMoviesPage); break;
          case 4: state.pageStack.push(searchPage); break;
          case 5: state.pageStack.push("recommendations"); break;
          case 6: state.pageStack.push("favorites"); break;
          case 7: state.pageStack.push("hot"); break;
          default: console.log("Error: Cannot find page."); break;
      }
      state.isSearching = false;
    },
    setMovieList(state, movieList) {
      state.movieList = movieList;
    },
    toggleSideSplitter(state) {
      state.openSide = !state.openSide;
    },
    setSearchParam(state, searchParam) {
      searchParam = encodeURI(searchParam);
      state.searchParam = searchParam;
    },
    startSearch(state) {
      state.isSearching = true;
    },
    setMovie(state, movie) {
      state.movie = movie;
    }
  }
});