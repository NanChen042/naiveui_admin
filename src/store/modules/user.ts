import { defineStore } from 'pinia'
import { storage } from '@/utils/storage'
import { login as loginApi, logout as logoutApi } from '@/api/auth'

export type Role = 'admin' | 'user'

interface UserState {
  role: Role
  username: string
  avatar: string
  token: string
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    role: (storage.get('user_role') || '') as Role,
    username: storage.get('user_name') || '',
    avatar: storage.get('user_avatar') || '',
    token: storage.get('user_token') || ''
  }),
  getters: {
    isLoggedIn: (state) => !!state.token
  },
  actions: {
    async login(username: string) {
      try {
        const data = await loginApi({ username, password: '123456' })
        const { role, token, avatar, username: name } = data

        this.role = role as Role
        this.username = name
        this.avatar = avatar
        this.token = token

        storage.set('user_role', role)
        storage.set('user_name', name)
        storage.set('user_avatar', avatar)
        storage.set('user_token', token)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async logout() {
      try {
        await logoutApi()
      } finally {
        this.$reset()
        storage.remove('user_role')
        storage.remove('user_name')
        storage.remove('user_avatar')
        storage.remove('user_token')
        location.href = '/login'
      }
    }
  }
})
