import Vue from 'vue';
import Vuex from 'vuex';

// Pages
import mainPage from './components/MainPage';
import infoPage from './components/InfoPage';
import listMoviesPage from './components/ListMoviesPage';
import searchPage from './components/SearchPage';
import settingsPage from './components/SettingsPage';
import toWatchPage from './components/ToWatchPage';
import favoritesPage from './components/FavoritesPage';
import recommendationsPage from './components/RecommendationsPage';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // Initial state
  state: {
    pageStack: [mainPage],
    openSide: false,
    searchParam: "",
    isSearching: false,
    movieList: [],
    movie: "test",
    settings: { // User settings
      adultFilter: false,
      allowNotifications: true,
      allowSocialMedia: true,
      resultsPerPage: 10,
      muteSounds: true,
      language: "english",
      region: "worldwide"
    },
    pages: [  // Page array for navigation
      searchPage,
      infoPage,
      settingsPage
    ],
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
    pushPageStack(state, pageIndex) {
      state.pageStack.push(state.pages[pageIndex]);
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