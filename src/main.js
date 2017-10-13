// Vue imports
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import Vuetify from 'vuetify';

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

// Root Vue instance
new Vue({
  el: '#app',
  template: '<app></app>',
  store: store,
  components:{App}
});
