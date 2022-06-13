import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: {},
    contacts: [],
    currentContactProfile: {},
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getContacts(state) {
      return state.contacts
    },
    getCurrentContactProfile(state) {
      return state.currentContactProfile
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_CONTACTS(state, contacts) {
      contacts.sort((a, b) => {
        if (
          new Date(`${b.lastMessage.sendDate} ${b.lastMessage.sendTime}`) >
          new Date(`${a.lastMessage.sendDate} ${a.lastMessage.sendtime}`)
        ) {
          return 1;
        } else if (
          new Date(`${a.lastMessage.sendDate} ${a.lastMessage.sendTime}`) >
          new Date(`${b.lastMessage.sendDate} ${b.lastMessage.sendTime}`)
        ) {
          return -1;
        }
        return 0;
      });

      state.contacts = contacts
    },
    SET_CURRENT_CONTACT(state, contactProfile) {
      state.currentContactProfile = contactProfile
    }
  },
  actions: {
    getContacts({commit}) {
      
      axios
        .get('http://localhost:3000/contacts')
        .catch(err => console.log(err))
        .then(res => commit('SET_CONTACTS', res.data))
    },
    getUser({commit}) {
      axios
        .get('http://localhost:3000/user')
        .catch(err => console.log(err))
        .then(res => commit('SET_USER', res.data))
    },
    getCurrentContactsProfile({commit}, contactProfile) {
      commit('SET_CURRENT_CONTACT', contactProfile)
    }
  },
  modules: {
  }
})
