<template>
  <div class="flex justify-between items-center h-full w-full">
    <!-- 左侧区域：系统标识 Logo -->
    <div class="flex items-center gap-3 cursor-pointer">
      <div class="w-8 h-8 bg-[#1890ff] rounded-md flex items-center justify-center text-white font-bold text-lg shadow-sm">
        {{ config.logo }}
      </div>
      <span class="text-xl font-semibold tracking-wide dark:text-white/90">{{ config.title }}</span>
    </div>

    <!-- 右侧区域：控制台与用户信息 -->
    <div class="flex items-center gap-5">
      <!-- 主题切换 -->
      <n-icon size="20" @click="toggleTheme" class="hover:text-[#1890ff] cursor-pointer text-gray-500 transition-colors">
        <MoonOutline v-if="!isDark" />
        <SunnyOutline v-else />
      </n-icon>

      <n-badge dot type="error">
        <n-icon size="20" class="hover:text-[#1890ff] cursor-pointer text-gray-500 transition-colors">
          <NotificationsOutline />
        </n-icon>
      </n-badge>

      <n-dropdown :options="userOptions" @select="handleSelect" placement="bottom-end">
        <div class="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1 rounded-md transition-colors">
          <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
          <span class="text-sm font-medium text-gray-600 dark:text-gray-300">Administrator</span>
        </div>
      </n-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, type Component } from 'vue'
import { useRouter } from 'vue-router'
import { NIcon, type DropdownOption } from 'naive-ui'
import {
  NotificationsOutline,
  PersonCircleOutline,
  LogOutOutline,
  MoonOutline,
  SunnyOutline
} from '@vicons/ionicons5'
import { useTheme } from '@/hooks/useTheme'
import { config } from '@/config'

const router = useRouter()
const { isDark, toggleTheme } = useTheme()

const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const userOptions: DropdownOption[] = [
  { label: '个人中心', key: 'profile', icon: renderIcon(PersonCircleOutline) },
  { type: 'divider', key: 'divider-1' },
  { label: '退出系统', key: 'logout', icon: renderIcon(LogOutOutline) }
]

const handleSelect = (key: string) => {
  if (key === 'logout') {
    router.push('/login')
  }
}
</script>