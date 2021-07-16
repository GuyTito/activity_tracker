require('./bootstrap');
import Vue from 'vue';
import Vuex from "vuex";
import VueRouter from 'vue-router';

import router from './router';
import store from './store';
import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueRouter);


const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
})