// Vue imports
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import Vuetify from 'vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed';
import VueLocalStorage from 'vue-localstorage';

// Onsen imports
import 'onsenui';
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

// App imports

import App from './App';
require('./style.scss');
import { store } from './store';

Vue.use(VueOnsen);
Vue.use(Vuetify);
Vue.use(VueYouTubeEmbed);
Vue.use(VueLocalStorage);

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
        sounds: true,
        language: ["English", "en-US"],
        region: "Worldwide"
      }
    }
  },
  components:{App},
  beforeCreate: function() { // Initialize user settings from localStorage
    this.$store.commit('applySettings', this.$localStorage.get('settings'));
  }
});
