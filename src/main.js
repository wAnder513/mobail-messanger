import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from 'dayjs'
import 'material-icons/iconfont/material-icons.css';

createApp(App).use(store).use(router).provide(dayjs).mount('#app')
