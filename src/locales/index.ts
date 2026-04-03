import { createI18n } from 'vue-i18n'
import { storage } from '@/utils/storage'
import zhCN from './zh-CN.json'
import enUS from './en-US.json'

const i18n = createI18n({
  legacy: false, // 使用 Composition API
  locale: storage.get('language') || 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

export default i18n
