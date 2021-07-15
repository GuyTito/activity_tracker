require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from "vuex";

import routes from './routes';
import store from './store';
import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueRouter);
const app = new Vue({
  el: '#app',
  router: new VueRouter(routes),
  store,
  components: { App },
})