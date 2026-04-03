import { defineStore } from 'pinia'
import { darkTheme, zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui'
import { storage } from '@/utils/storage'
import i18n from '@/locales'

export type NavMode = 'sider' | 'top'
export type ThemeMode = 'light' | 'dark' | 'auto'
export type TransitionType = 'fade' | 'fade-slide' | 'zoom-fade' | 'fade-left' | 'fade-right'
export type TabBorderPosition = 'top' | 'bottom' | 'left' | 'right'
export type Language = 'zh-CN' | 'en-US'

export interface WatermarkConfig {
  content: string
  fontSize: number
  color: string
  fontStyle: string
  fontWeight: number
  lineHeight: number
  width: number
  height: number
  xOffset: number
  yOffset: number
  rotate: number
  overallRotation: number
  cross: boolean
  image: string
  imageWidth: number
  imageHeight: number
  imageOpacity: number
}

const defaultWatermark: WatermarkConfig = {
  content: 'Admin Pro',
  fontSize: 16,
  color: 'rgba(128, 128, 128, 0.2)',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 16,
  width: 384,
  height: 384,
  xOffset: 12,
  yOffset: 60,
  rotate: -15,
  overallRotation: 0,
  cross: true,
  image: '',
  imageWidth: 64,
  imageHeight: 64,
  imageOpacity: 0.1
}

export const useAppStore = defineStore('app', {
  state: () => ({
    // 基础布局状态
    sidebarCollapsed: storage.get('sidebar_collapsed') === true,
    sidebarWidth: storage.get('sidebar_width') || 268,
    sidebarMaxWidth: storage.get('sidebar_max_width') || 456,
    themeMode: (storage.get('theme_mode') || 'auto') as ThemeMode,
    systemDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
    isRouterAlive: true,
    
    // 导航模式配置
    navMode: (storage.get('nav_mode') || 'sider') as NavMode,
    
    // 主题色配置
    themeColor: storage.get('theme_color') || '#1890ff',
    
    // 界面组件显隐控制
    showTabs: storage.get('show_tabs') !== false,
    showTabClose: storage.get('show_tab_close') !== false,
    tabBorderPosition: (storage.get('tab_border_position') || 'top') as TabBorderPosition,
    showBreadcrumb: storage.get('show_breadcrumb') !== false,
    showLogo: storage.get('show_logo') !== false,
    showLoadingBar: storage.get('show_loading_bar') !== false,
    showNavButtons: storage.get('show_nav_buttons') !== false,
    showFooter: storage.get('show_footer') === true,
    showWatermark: storage.get('show_watermark') === true,
    enableTransition: storage.get('enable_transition') !== false,
    transitionType: (storage.get('transition_type') || 'fade-left') as TransitionType,
    
    // 语言配置
    language: (storage.get('language') || 'zh-CN') as Language,
    
    // 水印高级配置
    watermarkConfig: (storage.get('watermark_config') || { ...defaultWatermark }) as WatermarkConfig,
    
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
    },
    // 当前侧边栏宽度
    currentSidebarWidth(): number {
      return this.sidebarCollapsed ? 64 : this.sidebarWidth
    },
    // Naive UI 语言包
    locale(): any {
      return this.language === 'zh-CN' ? zhCN : enUS
    },
    dateLocale(): any {
      return this.language === 'zh-CN' ? dateZhCN : dateEnUS
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
      // 改进属性映射逻辑，直接支持驼峰或下划线转驼峰
      let stateKey = storageKey
      if (storageKey.includes('_')) {
        stateKey = storageKey.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
      }
      
      if (Object.prototype.hasOwnProperty.call(this, stateKey)) {
        ;(this as any)[stateKey] = value
        storage.set(storageKey, value)
      } else if (Object.prototype.hasOwnProperty.call(this, storageKey)) {
        ;(this as any)[storageKey] = value
      }
    },
    setWatermarkConfig(config: Partial<WatermarkConfig>) {
      this.watermarkConfig = { ...this.watermarkConfig, ...config }
      storage.set('watermark_config', this.watermarkConfig)
    },
    resetWatermarkConfig() {
      this.watermarkConfig = { ...defaultWatermark }
      storage.set('watermark_config', this.watermarkConfig)
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
    },
    setLanguage(lang: Language) {
      this.language = lang
      storage.set('language', lang)
      i18n.global.locale.value = lang
    }
  }
})
