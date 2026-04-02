<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { SettingsOutline, LogOutOutline, PersonCircleOutline } from '@vicons/ionicons5'
import { config } from '@/config'
import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { useMenu } from '@/hooks/useMenu'
import { NIcon, NAvatar, NDropdown, NMenu } from 'naive-ui'
import { h } from 'vue'

const props = defineProps<{ collapsed: boolean }>()

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()
const userStore = useUserStore()
const { menuOptions } = useMenu()

const activeKey = ref<string | null>(route.path)
watch(() => route.path, (p) => { activeKey.value = p })

const renderIcon = (icon: any) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const userOptions = [
  { label: '个人中心', key: 'profile', icon: renderIcon(PersonCircleOutline) },
  { label: '退出登录', key: 'logout', icon: renderIcon(LogOutOutline) }
]

const handleMenuClick = (key: string) => {
  router.push(key)
}

const handleLogoClick = () => {
  router.push('/')
}

const handleUserSelect = (key: string) => {
  if (key === 'logout') {
    userStore.logout()
  }
}
</script>

<template>
  <div class="flex flex-col h-full">
    <!-- 顶部 Logo 区域 (受 showLogo 控制) -->
    <div 
      v-if="appStore.showLogo"
      class="h-16 flex items-center gap-3 px-4 border-b border-gray-100 dark:border-gray-800 shrink-0 cursor-pointer overflow-hidden transition-all duration-300"
      :class="collapsed ? 'justify-center px-0' : 'px-6'"
      @click="handleLogoClick"
    >
      <div 
        class="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-lg shadow-sm shrink-0"
        :style="{ backgroundColor: appStore.themeColor }"
      >
        {{ config.logo }}
      </div>
      <span 
        v-if="!collapsed" 
        class="text-xl font-semibold tracking-wide dark:text-white/90 truncate"
      >
        {{ config.title }}
      </span>
    </div>

    <!-- 中间 菜单 区域 -->
    <div class="flex-1 overflow-y-auto py-2 custom-scrollbar">
      <n-menu
        v-model:value="activeKey"
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        @update:value="handleMenuClick"
      />
    </div>

    <!-- 底部 用户 区域 (下拉菜单) -->
    <n-dropdown 
      v-if="!collapsed" 
      trigger="click" 
      :options="userOptions" 
      @select="handleUserSelect"
    >
      <div 
        class="p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20 m-3 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
      >
        <div class="flex items-center gap-3 overflow-hidden">
          <n-avatar round size="small" :src="userStore.avatar" class="shrink-0" />
          <div class="flex flex-col overflow-hidden">
            <span class="text-xs font-bold truncate">{{ userStore.username }}</span>
            <span class="text-[10px] text-gray-400 truncate uppercase">{{ userStore.role }}</span>
          </div>
        </div>
        <n-icon 
          size="16" 
          class="text-gray-400 group-hover:text-primary transition-colors" 
          :style="{ color: appStore.themeColor }"
        >
          <SettingsOutline />
        </n-icon>
      </div>
    </n-dropdown>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 10px;
}
.group:hover .custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}
.dark .group:hover .custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
}
</style>