import Vue from 'vue';
import Vuex from 'vuex';

// Pages
import mainPage from './components/MainPage';
import moviePage from './components/MoviePage';
import watchedMoviesPage from './components/WatchedMoviesPage';
import searchPage from './components/SearchPage';
import settingsPage from './components/SettingsPage';
import toWatchPage from './components/ToWatchPage';
import favoritesPage from './components/FavoritesPage';
import recommendedPage from './components/RecommendedPage';
import currentMoviesPage from './components/CurrentMoviesPage';
import inTheatersPage from './components/InTheatersPage';
import advancedSearchPage from './components/AdvancedSearchPage';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // Initial state-
  state: {
    pageStack: [mainPage],
    openSide: false,
    crntPage: 20,
    searchParam: "",
    movieList: [],
    movie: null,
    cast: null,
    apiKey: "d10678700962ddf56a9a3ef14b38f1df",
    settings: { // User settings
      adultFilter: false,
      allowNotifications: true,
      allowSocialMedia: true,
      resultsPerPage: 10,
      sounds: false,
      language: ["English", "en-US"],
      region: "Worldwide"
    },
    pages: [  // Page array for navigation
      searchPage,
      moviePage,
      settingsPage,
      watchedMoviesPage,
      toWatchPage,
      recommendedPage,
      favoritesPage,
      currentMoviesPage,
      inTheatersPage,
      advancedSearchPage
    ],
    genres: {
      28:"Action",12:"Adventure",16:"Animation",35:"Comedy",
      80:"Crime",99:"Documentary",18:"Drama",10751:"Family",
      14:"Fantasy",36:"History",27:"Horror",10402:"Music",
      9648:"Mystery",10749:"Romance",878:"Science Fiction",
      10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"
    }
  },
  getters: {
    getDecodedUrl: state => {
      return decodeURIComponent(state.searchParam.replace(/\+/g, ' '));
    },
    getCrntPage: state => {
      return state.pageStack[state.pageStack.length -1];
    }
  },
  mutations: {
    setPageStack(state, pageStack) {
      state.pageStack = pageStack;
    },
    popPageStack(state) {
      state.pageStack.pop();
      console.log(state.pageStack);
      state.pageStack.forEach(function(page) {
        console.log(page);
      });
    },
    pushPageStack(state, pageIndex) {
      state.pageStack.push(state.pages[pageIndex]);
      state.crntPage = pageIndex;
      state.pageStack.forEach(function(page) {
        console.log(page);
      });
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

    }
  }
});