import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {},
    token: '',
    activities: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    logoutUser(state) {
      state.user = {}
      state.token = ''
      state.activities = []
    },
    setAllActivities(state, activities) {
      state.activities = activities;
    }
  },
  actions: {
    setUser({ commit }, payload) {
      commit('setUser', payload)
    },

    setToken({ commit }, payload) {
      commit('setToken', payload)
    },

    logoutUser({ commit }) {
      commit('logoutUser');
    },

    fetchAllActivities({ commit, state }) {
      axios.get('/api/activity', {
          headers: {
            Authorization: `Bearer ${state.token}`
          }
        })
        .then(response => {
          commit('setAllActivities', response.data);
        })
        .catch(err => {
          console.log(err.response.data);
        })
    }
  },
  getters: {},
  plugins: [new VuexPersistence().plugin],
})

export default store;