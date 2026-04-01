<template>
  <n-layout class="h-screen w-screen overflow-hidden flex flex-col">
    <!-- 头部横跨整个页面顶端 -->
    <n-layout-header class="h-16 px-6 flex items-center shrink-0 z-10" bordered>
      <Navbar />
    </n-layout-header>

    <!-- 下方区域剥离为带侧边栏的内容区 -->
    <n-layout has-sider class="flex-1 relative overflow-hidden" style="height: calc(100vh - 4rem);">
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="sidebarCollapsed"
        show-trigger
        @collapse="toggleSidebar"
        @expand="toggleSidebar"
        class="transition-all duration-300 h-full"
      >
        <Sidebar :collapsed="sidebarCollapsed" />
      </n-layout-sider>
      
      <!-- 主内容承载器：通过深背景色衬托卡片“浮起”感 -->
      <n-layout-content 
        class="flex-1 p-6 bg-[#f0f2f5] dark:bg-[#000000] transition-colors duration-300 h-full overflow-y-auto"
      >
        <Breadcrumb />
        <AppMain />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '@/store/modules/app'
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
import Breadcrumb from './Breadcrumb.vue'
import AppMain from './AppMain.vue'

const appStore = useAppStore()
const sidebarCollapsed = computed(() => appStore.sidebarCollapsed)
const toggleSidebar = () => appStore.toggleSidebar()
</script>

<style scoped>
/* 可选动画特效 */
</style>