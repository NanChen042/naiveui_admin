<template>
  <div class="h-screen w-screen overflow-hidden relative">
    <component 
      :is="appStore.showWatermark ? NWatermark : 'div'"
      class="h-full w-full"
      v-bind="appStore.showWatermark ? { content: 'Admin Pro', cross: true, fontSize: 16, lineHeight: 16, width: 192, height: 128, xOffset: 12, yOffset: 28, rotate: -15 } : {}"
    >
      <n-layout class="h-screen w-screen" :has-sider="appStore.navMode === 'sider'">
        <!-- 侧边菜单栏 (独占左侧贯通上下) -->
        <n-layout-sider v-if="appStore.navMode === 'sider'" bordered collapse-mode="width" :collapsed-width="64" :width="240" :collapsed="appStore.sidebarCollapsed" @update:collapsed="appStore.toggleSidebar()" show-trigger="bar" class="z-30 transition-all duration-300">
          <Sidebar :collapsed="appStore.sidebarCollapsed" />
        </n-layout-sider>

        <!-- 右侧内容列 (包含顶栏、标签、滚动区、尾部) -->
        <n-layout class="transition-all duration-300 relative bg-[#f5f7f9] dark:bg-black w-full h-full">
          <div class="flex flex-col w-full h-full absolute inset-0">
            <!-- 顶部 Header -->
            <n-layout-header class="h-16 flex items-center shrink-0 z-20" bordered>
              <Navbar />
            </n-layout-header>

            <!-- 标签页 (脱离滚动流，固定于顶部) -->
            <div v-if="appStore.showTabs" class="shrink-0 bg-white dark:bg-[#18181c] z-10 w-full relative border-b border-gray-100 dark:border-gray-800">
              <TagsView />
            </div>

            <!-- 独立的内部滚动区域 -->
            <n-layout 
              class="flex-1 bg-transparent" 
              content-style="display: flex; flex-direction: column; min-height: 100%;" 
              :native-scrollbar="false"
            >
              <div class="flex-1 p-4">
                <AppMain />
              </div>
            </n-layout>

            <!-- 固定的底部 Footer -->
            <n-layout-footer v-if="appStore.showFooter" class="shrink-0 h-12" bordered>
              <div class="h-full flex items-center justify-center text-gray-400 text-xs text-center w-full">
                Copyright © 2026 {{ config.title }}. All Rights Reserved.
              </div>
            </n-layout-footer>
          </div>
        </n-layout>
      </n-layout>
    </component>

    <!-- 全局配置抽屉 -->
    <SettingDrawer />
  </div>
</template>

<script setup lang="ts">
import { NWatermark } from 'naive-ui'
import { useAppStore } from '@/store/modules/app'
import { config } from '@/config'
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
import TagsView from './TagsView.vue'
import AppMain from './AppMain.vue'
import SettingDrawer from './SettingDrawer.vue'

const appStore = useAppStore()
</script>