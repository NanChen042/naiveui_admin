import { computed } from 'vue'
import { useAppStore } from '@/store/modules/app'

export function useTheme() {
  const appStore = useAppStore()
  
  const isDark = computed(() => appStore.isDark)
  const activeTheme = computed(() => appStore.activeTheme)
  
  const toggleTheme = () => {
    appStore.toggleTheme()
  }

  return {
    isDark,
    activeTheme,
    toggleTheme
  }
}
