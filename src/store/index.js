import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {},
    contacts: [],
    currentContactProfile: {},
    currentUserDialog: {},
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
    },
    getCurrentUserDialog(state) {
      return state.currentUserDialog
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_CONTACTS(state, contacts) {
      contacts.sort((a, b) => {
        if (
          new Date(
            `${b.chatContact[b.chatContact.length - 1].sendDate} 
             ${b.chatContact[b.chatContact.length - 1].sendTime}` ) >
          new Date(
            `${a.chatContact[a.chatContact.length - 1].sendDate} 
             ${a.chatContact[a.chatContact.length - 1].sendTime}`)) {
          return 1
        } else if (
          new Date(
            `${a.chatContact[a.chatContact.length - 1].sendDate} 
             ${a.chatContact[a.chatContact.length - 1].sendTime}`) >
          new Date(
            `${b.chatContact[b.chatContact.length - 1].sendDate} 
             ${b.chatContact[b.chatContact.length - 1].sendTime}`)) {
          return -1
        }
        return 0
      })

      state.contacts = contacts
    },
    SET_CURRENT_CONTACT(state, contactProfile) {
      state.currentContactProfile = contactProfile
    },
    SET_CURRENT_USER_DIALOG(state, currentUserDialog) {
      state.currentUserDialog = currentUserDialog
    },
  },
  actions: {
    getContacts({ commit }) {
      axios
        .get('http://localhost:3000/contacts/')
        .catch((err) => console.log(err))
        .then((res) => commit('SET_CONTACTS', res.data))
    },
    getUser({ commit }) {
      axios
        .get('http://localhost:3000/user')
        .catch((err) => console.log(err))
        .then((res) => commit('SET_USER', res.data))
    },
    getCurrentContactsProfile({ commit }, contactProfile) {
      commit('SET_CURRENT_CONTACT', contactProfile)
    },
    getCurrentUserDialog({commit}, currentDialog) {
      commit('SET_CURRENT_USER_DIALOG', currentDialog)
    }
  },
  modules: {},
})
