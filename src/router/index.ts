import { createRouter, createWebHistory} from 'vue-router'
// Import Views
import SignIn from "../views/SignIn.vue"
import Otp from "../views/Otp.vue"
import ChattereeId from "../views/ChattereeId.vue"
import Profile from "../views/Profile.vue"
import Chat from "../views/Chat.vue"

// Define routes
const routes = [
  { path: '/', component: SignIn },
  { path: '/otp', component: Otp },
  { path: '/chatteree-id', component: ChattereeId },
  { path: '/profile', component: Profile },
  { path: '/chat', component: Chat },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router