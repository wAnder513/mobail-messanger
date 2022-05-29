import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users: [],
    currentContactProfile: {},
  },
  getters: {
    getUsers(state) {
      return state.users
    },
    getCurrentContactProfile(state) {
      return state.currentContactProfile
    }
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users
    },
    SET_CURRENT_CONTACT(state, contactProfile) {
      state.currentContactProfile = contactProfile
    }
  },
  actions: {
    getUsers({commit}) {
      
      axios
        .get('http://localhost:3000/users')
        .catch(err => console.log(err))
        .then(res => commit('SET_USERS', res.data))
    },
    getCurrentContactsProfile({commit}, contactProfile) {
      commit('SET_CURRENT_CONTACT', contactProfile)
    }
  },
  modules: {
  }
})
