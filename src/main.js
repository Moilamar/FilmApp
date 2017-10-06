// Vue-related imports
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import Vuex from 'vuex'

// Onsen imports
import 'onsenui';
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import App from './App';
require('./style.scss');

Vue.use(VueOnsen);
Vue.use(Vuex)

// Root Vue instance
new Vue({
  el: '#app',
  template: '<app></app>',
  components:{App}
});
