import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { createPinia } from 'pinia'
import router from './router'
import { CoArrowLeft } from 'oh-vue-icons/icons'

// Adding necessary icons to reduce bundle size
addIcons(CoArrowLeft);

const pinia = createPinia()
const app = createApp(App);
app.use(pinia)
app.use(router)
app.component("v-icon", OhVueIcon)
app.mount('#app')
