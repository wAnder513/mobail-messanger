import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'contacts',
    component: () => import('../components/UserContacts.vue')
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('../components/UserMessages.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../components/UserSettings.vue')
  },
  {
    path: '/call',
    name: 'call',
    component: () => import('../components/UserCall.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/UserHome.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../components/UserContactsItemProfile.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
