import { defineStore } from 'pinia'
import { storage } from '@/utils/storage'

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
      // 模拟模拟后端返回的真实 Token 与用户信息
      const role: Role = username === 'admin' ? 'admin' : 'user'
      const name = username === 'admin' ? 'Administrator' : 'General User'
      const avatar = 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      const token = `fake-jwt-token-${Math.random().toString(36).substring(7)}`

      this.role = role
      this.username = name
      this.avatar = avatar
      this.token = token

      storage.set('user_role', role)
      storage.set('user_name', name)
      storage.set('user_avatar', avatar)
      storage.set('user_token', token)
    },
    logout() {
      this.$reset()
      storage.remove('user_role')
      storage.remove('user_name')
      storage.remove('user_avatar')
      storage.remove('user_token')
      location.href = '/login'
    }
  }
})
