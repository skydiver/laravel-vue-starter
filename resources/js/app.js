import Vue from 'vue';
import Vuex from 'vuex';

import router from './router';
import App from './components/App';

require('./bootstrap');

// Vuex setup
Vue.use(Vuex);
import storeData from './store/index';
const store = new Vuex.Store(storeData);

const app = new Vue({
  el: '#app',
  components: {
    App
  },
  router,
  store
});
