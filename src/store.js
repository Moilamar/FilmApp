import Vue from 'vue';
import Vuex from 'vuex';

// Pages
import MainPage from './components/MainPage';
import MoviePage from './components/MoviePage';
import WatchedMoviesPage from './components/WatchedMoviesPage';
import SearchPage from './components/SearchPage';
import SettingsPage from './components/SettingsPage';
import ToWatchPage from './components/ToWatchPage';
import CurrentMoviesPage from './components/CurrentMoviesPage';
import InTheatersPage from './components/InTheatersPage';
import AdvancedSearchPage from './components/AdvancedSearchPage';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // Initial state-
  state: {
    pageStack: [MainPage],
    openSide: false,
    crntPage: 20,
    searchParam: '',
    movieList: [],
    movie: null,
    cast: null,
    apiKey: 'd10678700962ddf56a9a3ef14b38f1df',
    settings: { // User settings
      adultFilter: false,
      resultsPerPage: 10,
      language: ['English', 'en-US'],
      region: ['Worldwide', null],
    },
    pages: [  // Page array for navigation
      SearchPage,
      MoviePage,
      SettingsPage,
      WatchedMoviesPage,
      ToWatchPage,
      CurrentMoviesPage,
      InTheatersPage,
      AdvancedSearchPage,
    ],
    genres: {
      28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy',
      80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family',
      14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music',
      9648: 'Mystery', 10749: 'Romance', 878: 'Science Fiction',
      10770: 'TV Movie', 53: 'Thriller', 10752: 'War', 37: 'Western',
    }
  },
  getters: {
    getDecodedUrl: state => {
      return decodeURIComponent(state.searchParam.replace(/\+/g, ' '));
    },
    getCrntPage: state => {
      return state.pageStack[state.pageStack.length - 1];
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
      state.crntPage = pageIndex;
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
    setMovie(state, movie) {
      state.movie = movie;
    },
    applySettings(state, newSettings) {
      state.settings = newSettings;
    },
    setCast(state, cast) {
      state.cast = cast;
    },
    setMedia() {

    },
    setReviews() {

    },
  }
});