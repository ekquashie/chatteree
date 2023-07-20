import { defineStore } from 'pinia'

interface State {
  otp: string
  user: UserInfo,
}

export const useAuthStore = defineStore('store', {
  state: (): State => ({
    otp: '012345',
    user: {
      email: '',
      chattereeId: '',
      name: '',
      profilePicture: null
    }
  }),

  getters: {
    getProfilePicture: (state) => URL.createObjectURL(state.user.profilePicture)
  },

  actions: {
    updateEmail(payload: string) {
      this.user.email = payload
    },
    updateChattereeId(payload: string) {
      this.user.email = payload
    },
    updateName(payload: string) {
      this.user.name
    },
    updateProfilePicture(payload: Blob | MediaSource) {
      this.user.profilePicture = payload
    }
  }
})

interface UserInfo {
  email: string
  chattereeId: string
  name: string
  profilePicture: Blob | MediaSource | any
}