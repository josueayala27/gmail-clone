import { createApp } from 'vue'
import App from './layouts/default.vue'
import './index.css'
import router from './router.js'

createApp(App).use(router).mount('#app')
