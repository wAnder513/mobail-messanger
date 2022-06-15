import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'contacts',
    component: () => import('../components/Contacts/UserContacts.vue'),
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('../components/Messages/UserMessages.vue'),
  },
  {
    path: '/message',
    name: 'message',
    component: () =>
      import('../components/Messages/UserMessagesDialogCurrent.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../components/UserSettings.vue'),
  },
  {
    path: '/call',
    name: 'call',
    component: () => import('../components/UserCall.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/UserHome.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () =>
      import('../components/Contacts/UserContactsItemProfile.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
