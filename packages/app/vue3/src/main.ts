import router from '@/router'
import { createApp } from 'vue'
import App from './App.vue'
import '@lon/styles'
import '@/assets/index.css'

createApp(App).use(router).mount('#app')
