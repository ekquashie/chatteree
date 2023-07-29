import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoArrowLeft } from 'oh-vue-icons/icons'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App);
const pinia = createPinia()

// Adding necessary icons to reduce bundle size
addIcons(CoArrowLeft);
app.component("v-icon", OhVueIcon)

app.use(pinia)
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_CLIENT_ID
})

app.mount('#app')
