<script setup lang="ts">
import { computed, watchEffect, onMounted, onUnmounted, h, defineComponent, type Component } from 'vue'
import { 
  NConfigProvider, 
  NMessageProvider, 
  NLoadingBarProvider, 
  NDialogProvider, 
  NGlobalStyle, 
  NThemeEditor,
  zhCN,
  dateZhCN,
  useMessage, 
  useLoadingBar, 
  useDialog 
} from 'naive-ui'
import { useAppStore } from '@/store/modules/app'
import { RouterView } from 'vue-router'

const appStore = useAppStore()

// 动态主题色彩深度覆盖
const themeOverrides = computed(() => {
  const primary = appStore.themeColor
  return {
    common: {
      primaryColor: primary,
      primaryColorHover: primary,
      primaryColorPressed: primary,
      primaryColorSuppl: primary,
      ...(appStore.isDark ? {
        borderColor: 'rgba(255, 255, 255, 0.05)',
        dividerColor: 'rgba(255, 255, 255, 0.05)'
      } : {})
    },
    LoadingBar: {
      colorLoading: primary
    },
    Tabs: {
      tabTextColorActiveCard: primary,
      tabTextColorHoverCard: primary,
      barColor: primary
    },
    Menu: {
      itemTextColorActive: primary,
      itemIconColorActive: primary,
      itemTextColorActiveHover: primary,
      itemIconColorActiveHover: primary,
      itemTextColorHover: primary,
      itemIconColorHover: primary
    },
    Switch: {
      railColorActive: primary
    },
    Button: {
      colorPrimary: primary,
      colorHoverPrimary: primary,
      colorPressedPrimary: primary,
      colorFocusPrimary: primary,
      textColorPrimary: '#fff'
    },
    Checkbox: {
      colorChecked: primary,
      borderChecked: `1px solid ${primary}`
    },
    Radio: {
      buttonTextColorActive: primary,
      buttonBorderColorActive: primary,
      dotColorActive: primary
    },
    Popover: {
      fontSize: '13px',
      borderRadius: '8px',
      padding: '8px 12px'
    },
    Dropdown: {
      fontSize: '13px',
      borderRadius: '8px'
    }
  }
})

// 同步暗色模式类到 html 根元素 (供 Tailwind 使用)
watchEffect(() => {
  if (appStore.isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

// 初始化主题监听器
let cleanup: () => void
onMounted(() => {
  cleanup = appStore.initThemeListener()
})
onUnmounted(() => {
  cleanup?.()
})

declare global {
  interface Window {
    $message: any
    $loadingBar: any
    $dialog: any
  }
}

const GlobalProviderApi = defineComponent({
  setup() {
    window.$message = useMessage()
    window.$loadingBar = useLoadingBar()
    window.$dialog = useDialog()
    return () => null
  }
})

</script>

<template>
  <n-config-provider 
    :theme="appStore.activeTheme" 
    :theme-overrides="themeOverrides" 
    :locale="zhCN"
    :date-locale="dateZhCN"
    class="h-full w-full"
  >
    <n-global-style />
    
    <!-- 主题编辑器仅在开发/调试模式下通过 store 开启 -->
    <n-theme-editor v-if="appStore.showThemeEditor">
      <div class="h-full w-full">
        <n-loading-bar-provider v-if="appStore.showLoadingBar">
          <n-dialog-provider>
            <n-message-provider>
              <GlobalProviderApi />
              <RouterView />
            </n-message-provider>
          </n-dialog-provider>
        </n-loading-bar-provider>
        <n-dialog-provider v-else>
          <n-message-provider>
            <GlobalProviderApi />
            <RouterView />
          </n-message-provider>
        </n-dialog-provider>
      </div>
    </n-theme-editor>

    <!-- 常规渲染逻辑 -->
    <template v-else>
      <n-loading-bar-provider v-if="appStore.showLoadingBar">
        <n-dialog-provider>
          <n-message-provider>
            <GlobalProviderApi />
            <RouterView />
          </n-message-provider>
        </n-dialog-provider>
      </n-loading-bar-provider>
      <n-dialog-provider v-else>
        <n-message-provider>
          <GlobalProviderApi />
          <RouterView />
        </n-message-provider>
      </n-dialog-provider>
    </template>
  </n-config-provider>
</template>

<style>
.select-none {
  user-select: none !important;
  -webkit-user-select: none !important;
}
</style>
