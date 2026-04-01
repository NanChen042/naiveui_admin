<script setup lang="ts">
import { NConfigProvider, NMessageProvider, NLoadingBarProvider, NGlobalStyle, useMessage, useLoadingBar } from 'naive-ui'
import { useTheme } from '@/hooks/useTheme'
import { themeOverrides } from '@/config/theme'
import { defineComponent } from 'vue'

const { activeTheme } = useTheme()

declare global {
  interface Window {
    $message: any
    $loadingBar: any
  }
}

// 代理 API：通过在 setup 中读取后挂载到 window，解决了 Router 和 Axios 无法弹窗和顶部加载条的报错
const GlobalProviderApi = defineComponent({
  setup() {
    window.$message = useMessage()
    window.$loadingBar = useLoadingBar()
    return () => null
  }
})
</script>

<template>
  <n-config-provider :theme="activeTheme" :theme-overrides="themeOverrides" class="h-full w-full">
    <n-global-style />
    <n-loading-bar-provider>
      <n-message-provider>
        <GlobalProviderApi />
        <RouterView />
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
