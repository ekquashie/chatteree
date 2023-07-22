import { createRouter, createWebHistory} from 'vue-router'
// Import Views
import SignIn from "../views/SignIn.vue"
import Otp from "../views/Otp.vue"
import ChattereeId from "../views/ChattereeId.vue"
import Profile from "../views/Profile.vue"
import Chat from "../views/Chat.vue"
import { URLS } from '../constants/routes'

// Define routes
const routes = [
  { path: URLS.signIn, component: SignIn },
  { path: URLS.otp, component: Otp },
  { path: URLS.chattereeId, component: ChattereeId },
  { path: URLS.profile, component: Profile },
  { path: URLS.chat, component: Chat },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router