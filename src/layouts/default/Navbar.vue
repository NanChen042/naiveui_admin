<template>
  <div class="flex justify-between items-center h-full w-full px-4 select-none">
    <!-- 左侧区域：Logo (仅在顶部模式显示) + 面包屑 -->
    <div class="flex items-center gap-4 flex-nowrap shrink-0 h-full">
      <div v-if="appStore.navMode === 'top' && appStore.showLogo" class="flex items-center gap-2 mr-4 cursor-pointer" @click="handleLogoClick">
        <div class="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-lg shadow-sm" :style="{ backgroundColor: appStore.themeColor }">
          {{ config.logo }}
        </div>
        <span class="text-lg font-bold truncate max-w-[120px]">{{ config.title }}</span>
      </div>

      <Breadcrumb v-if="appStore.showBreadcrumb" />
    </div>

    <!-- 中间区域：水平菜单 -->
    <div v-if="appStore.navMode === 'top'" class="flex-1 mx-4 overflow-hidden h-full flex items-center">
      <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" @update:value="handleMenuClick" class="nav-horizontal-menu" />
    </div>

    <!-- 右侧区域：工具栏 -->
    <div v-if="appStore.showNavButtons" class="flex items-center gap-4 shrink-0">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-icon size="20" class="tool-icon" :style="iconStyle">
            <SearchOutline />
          </n-icon>
        </template>
        搜索
      </n-tooltip>

      <n-tooltip trigger="hover">
        <template #trigger>
          <n-icon size="20" class="tool-icon" :style="iconStyle" @click="handleToggleFullScreen">
            <template v-if="!appStore.isFullScreen">
              <ExpandOutline />
            </template>
            <template v-else>
              <ContractOutline />
            </template>
          </n-icon>
        </template>
        {{ appStore.isFullScreen ? '退出全屏' : '全屏' }}
      </n-tooltip>

      <!-- 主题切换：三态下拉菜单 -->
      <n-dropdown :options="themeOptions" @select="handleThemeChange" placement="bottom-end" trigger="hover">
        <div class="flex items-center justify-center tool-icon" :style="iconStyle">
          <n-icon size="20">
            <component :is="activeThemeIcon" />
          </n-icon>
        </div>
      </n-dropdown>

      <n-badge dot type="error">
        <n-icon size="20" class="tool-icon" :style="iconStyle">
          <NotificationsOutline />
        </n-icon>
      </n-badge>

      <n-icon size="20" @click="appStore.toggleSettingDrawer" class="tool-icon" :style="{ color: appStore.themeColor }">
        <SettingsOutline />
      </n-icon>

      <!-- 退出登录按钮 (二次确认) -->
      <n-tooltip trigger="hover">
        <template #trigger>
          <div class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors group" @click="handleLogoutConfirm">
            <n-icon size="22" class="text-gray-500 group-hover:text-red-500 transition-colors">
              <LogOutOutline />
            </n-icon>
          </div>
        </template>
        退出登录
      </n-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, ref, watch, onMounted, onUnmounted, computed, type Component } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { NIcon, type DropdownOption } from 'naive-ui'
import {
  NotificationsOutline,
  LogOutOutline,
  MoonOutline,
  SunnyOutline,
  SearchOutline,
  ExpandOutline,
  ContractOutline,
  SettingsOutline,
  DesktopOutline,
  CheckmarkOutline
} from '@vicons/ionicons5'
import { useAppStore, type ThemeMode } from '@/store/modules/app'
import { useMenu } from '@/hooks/useMenu'
import { config } from '@/config'
import Breadcrumb from './Breadcrumb.vue'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()
const { menuOptions } = useMenu()

const activeKey = ref<string | null>(route.path)
watch(() => route.path, (p) => { activeKey.value = p })

const iconStyle = computed(() => ({
  '--n-color-hover': appStore.themeColor
}))

// 渲染图标辅助函数
const renderIcon = (icon: Component, color?: string) => {
  return () => h(NIcon, { color }, { default: () => h(icon) })
}

// 主题切换选项 (响应式计算，包含状态勾选)
const themeOptions = computed<DropdownOption[]>(() => [
  {
    label: '浅色模式',
    key: 'light',
    icon: renderIcon(SunnyOutline),
    extra: appStore.themeMode === 'light' ? () => h(NIcon, { color: appStore.themeColor }, { default: () => h(CheckmarkOutline) }) : undefined
  },
  {
    label: '深色模式',
    key: 'dark',
    icon: renderIcon(MoonOutline),
    extra: appStore.themeMode === 'dark' ? () => h(NIcon, { color: appStore.themeColor }, { default: () => h(CheckmarkOutline) }) : undefined
  },
  {
    label: '跟随系统',
    key: 'auto',
    icon: renderIcon(DesktopOutline),
    extra: appStore.themeMode === 'auto' ? () => h(NIcon, { color: appStore.themeColor }, { default: () => h(CheckmarkOutline) }) : undefined
  }
])

const activeThemeIcon = computed(() => {
  if (appStore.themeMode === 'light') return SunnyOutline
  if (appStore.themeMode === 'dark') return MoonOutline
  return DesktopOutline
})

const handleThemeChange = (key: string) => {
  appStore.setThemeMode(key as ThemeMode)
}

const handleMenuClick = (key: string) => {
  router.push(key)
}

// 退出登录二次确认
const handleLogoutConfirm = () => {
  window.$dialog?.warning({
    title: '提示',
    content: '您确定要退出登录吗？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      router.push('/login')
    }
  })
}

const handleLogoClick = () => {
  router.push('/')
}

const handleToggleFullScreen = () => {
  const element = document.documentElement as any
  const requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen

  if (!document.fullscreenElement && !(document as any).webkitFullscreenElement && !(document as any).mozFullScreenElement && !(document as any).msFullscreenElement) {
    if (requestMethod) {
      requestMethod.call(element)
    }
  } else {
    const exitMethod = document.exitFullscreen || (document as any).webkitExitFullscreen || (document as any).mozCancelFullScreen || (document as any).msExitFullscreen
    if (exitMethod) {
      exitMethod.call(document)
    }
  }
}

const onFullScreenChange = () => {
  appStore.updateFullScreenStatus()
}

onMounted(() => {
  document.addEventListener('fullscreenchange', onFullScreenChange)
  document.addEventListener('webkitfullscreenchange', onFullScreenChange)
  document.addEventListener('mozfullscreenchange', onFullScreenChange)
  document.addEventListener('MSFullscreenChange', onFullScreenChange)
})

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', onFullScreenChange)
  document.removeEventListener('webkitfullscreenchange', onFullScreenChange)
  document.removeEventListener('mozfullscreenchange', onFullScreenChange)
  document.removeEventListener('MSFullscreenChange', onFullScreenChange)
})

</script>

<style scoped>
@reference "../../assets/main.css";

.tool-icon {
  @apply cursor-pointer text-gray-500 transition-colors h-full flex items-center;
}

.tool-icon:hover {
  color: var(--n-color-hover) !important;
}

.nav-horizontal-menu :deep(.n-menu-item-content) {
  padding: 0 20px !important;
}

:deep(.n-breadcrumb) {
  margin-bottom: 0 !important;
}
</style>