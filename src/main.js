// Vue imports
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import Vuetify from 'vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed';
import VueLocalStorage from 'vue-localstorage';
import VueBus from 'vue-bus';

// Onsen imports
import 'onsenui';

// App imports
import App from './App';
import { store } from './store';

require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');
require('./style.scss');

Vue.use(VueOnsen);
Vue.use(Vuetify);
Vue.use(VueYouTubeEmbed);
Vue.use(VueLocalStorage);
Vue.use(VueBus);

// Root Vue instance
new Vue({
  el: '#app',
  template: '<app></app>',
  store: store, // Vuex store
  localStorage: { // Vue localStorage saving data
    settings: {
      type: Object,
      default: {
        adultFilter: false,
        allowNotifications: true,
        allowSocialMedia: true,
        resultsPerPage: 10,
        sounds: false,
        language: ['English', 'en-US'],
        region: ['Worldwide', null],
      }
    },
    watchedMovies: {
      type: Array,
      default: [],
    },
    toWatchMovies: {
      type: Array,
      default: [],
    }
  },
  components:{App},
  beforeCreate: function() { // Initialize user settings from localStorage
    this.$store.commit('applySettings', this.$localStorage.get('settings'));
  },
});
