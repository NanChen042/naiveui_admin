import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui'
import { storage } from '@/utils/storage'

export const useAppStore = defineStore('app', {
  state: () => ({
    // 侧边栏折叠状态
    sidebarCollapsed: storage.get('sidebar_collapsed') === true,
    // 主题模式
    isDark: storage.get('pro_theme') === 'dark'
  }),
  getters: {
    activeTheme: (state) => (state.isDark ? darkTheme : null)
  },
  actions: {
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed
      storage.set('sidebar_collapsed', this.sidebarCollapsed)
    },
    toggleTheme() {
      this.isDark = !this.isDark
      storage.set('pro_theme', this.isDark ? 'dark' : 'light')
    }
  }
})
