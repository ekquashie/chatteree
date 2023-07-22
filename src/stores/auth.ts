import { defineStore } from 'pinia'

interface State {
  otp: string
  user: UserInfo,
}

export const useAuthStore = defineStore('auth-store', {
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
    getProfilePicture: (state): string => URL.createObjectURL(state.user.profilePicture)
  },

  actions: {
    updateEmail(payload: string): void {
      this.user.email = payload
    },
    updateChattereeId(payload: string): void {
      this.user.email = payload
    },
    updateName(payload: string): void {
      this.user.name = payload
    },
    updateProfilePicture(payload: Blob | MediaSource): void {
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