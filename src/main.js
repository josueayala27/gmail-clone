import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './layouts/default.vue'
import './index.css'

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

createApp(App).use(router).mount('#app')
