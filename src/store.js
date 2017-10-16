import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import mainPage from './components/MainPage';

export const store = new Vuex.Store({
  // Initial state
  state: {
    pageStack: [mainPage],
    openSide: false,
    searchParam: "",
    isSearching: false,
    movieList: [],
    movie: "test",
    settings: {
      adultFilter: false,
      allowNotifications: true,
      allowSocialMedia: true,
      resultsPerPage: 10,
      muteSounds: true,
      language: "english",
      region: "worldwide"
    }
  },
  getters: {
    getDecodedUrl: state => {
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
    pushPageStack(state, page) {
      state.pageStack.push(page);
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