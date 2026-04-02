import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui'
import { storage } from '@/utils/storage'

export type NavMode = 'sider' | 'top'
export type ThemeMode = 'light' | 'dark' | 'auto'
export type TransitionType = 'fade' | 'fade-slide' | 'zoom-fade' | 'fade-left' | 'fade-right'

export const useAppStore = defineStore('app', {
  state: () => ({
    // 基础布局状态
    sidebarCollapsed: storage.get('sidebar_collapsed') === true,
    themeMode: (storage.get('theme_mode') || 'auto') as ThemeMode,
    systemDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
    isRouterAlive: true,
    
    // 导航模式配置
    navMode: (storage.get('nav_mode') || 'sider') as NavMode,
    
    // 主题色配置
    themeColor: storage.get('theme_color') || '#1890ff',
    
    // 界面组件显隐控制
    showTabs: storage.get('show_tabs') !== false,
    showBreadcrumb: storage.get('show_breadcrumb') !== false,
    showLogo: storage.get('show_logo') !== false,
    showLoadingBar: storage.get('show_loadingbar') !== false,
    showNavButtons: storage.get('show_nav_buttons') !== false,
    showFooter: storage.get('show_footer') === true,
    showWatermark: storage.get('show_watermark') === true,
    enableTransition: storage.get('enable_transition') !== false,
    transitionType: (storage.get('transition_type') || 'fade-left') as TransitionType,
    
    // UI 控制状态
    showSettingDrawer: false,
    showThemeEditor: false,
    isFullScreen: false
  }),
  getters: {
    // 最终计算出的暗色状态
    isDark(): boolean {
      if (this.themeMode === 'auto') return this.systemDark
      return this.themeMode === 'dark'
    },
    activeTheme(): any {
      return this.isDark ? darkTheme : null
    }
  },
  actions: {
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed
      storage.set('sidebar_collapsed', this.sidebarCollapsed)
    },
    setThemeMode(mode: ThemeMode) {
      this.themeMode = mode
      storage.set('theme_mode', mode)
    },
    // 监听系统主题变化
    initThemeListener() {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = (event: MediaQueryListEvent) => {
        this.systemDark = event.matches
      }
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    },
    async reloadPage() {
      this.isRouterAlive = false
      await import('vue').then(({ nextTick }) => nextTick())
      this.isRouterAlive = true
    },
    setNavMode(mode: NavMode) {
      this.navMode = mode
      storage.set('nav_mode', mode)
    },
    setThemeColor(color: string) {
      this.themeColor = color
      storage.set('theme_color', color)
    },
    setUI(storageKey: string, value: any) {
      const stateKey = storageKey.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
      if (Object.prototype.hasOwnProperty.call(this, stateKey)) {
        ;(this as any)[stateKey] = value
        storage.set(storageKey, value)
      } else if (Object.prototype.hasOwnProperty.call(this, storageKey)) {
        ;(this as any)[storageKey] = value
      }
    },
    toggleSettingDrawer() {
      this.showSettingDrawer = !this.showSettingDrawer
    },
    toggleThemeEditor() {
      this.showThemeEditor = !this.showThemeEditor
    },
    updateFullScreenStatus() {
      this.isFullScreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      )
    }
  }
})
