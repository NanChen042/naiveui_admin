<template>
  <div class="h-screen w-screen overflow-hidden relative">
    <!-- 调回之前的 component :is 写法，这种结构最稳，且不需要复制 layout 代码 -->
    <component 
      :is="appStore.showWatermark ? NWatermark : 'div'"
      class="h-full w-full"
      v-bind="watermarkProps"
    >
      <n-layout class="h-screen w-screen shrink-0" :has-sider="appStore.navMode === 'sider'">
        <!-- 侧边菜单栏 -->
        <n-layout-sider 
          v-if="appStore.navMode === 'sider'" 
          bordered 
          collapse-mode="width" 
          :collapsed-width="64" 
          :width="appStore.sidebarWidth" 
          :collapsed="appStore.sidebarCollapsed" 
          @update:collapsed="appStore.toggleSidebar()" 
          show-trigger="bar" 
          class="z-30 transition-all duration-300"
        >
          <Sidebar :collapsed="appStore.sidebarCollapsed" />
        </n-layout-sider>

        <!-- 右侧内容列 -->
        <n-layout class="transition-all duration-300 relative bg-[#f5f7f9] dark:bg-black w-full h-full">
          <div class="flex flex-col w-full h-full absolute inset-0">
            <!-- 顶部 Header -->
            <n-layout-header class="h-16 flex items-center shrink-0 z-20" bordered>
              <Navbar />
            </n-layout-header>

            <!-- 标签页 -->
            <div v-if="appStore.showTabs" class="shrink-0 relative z-10 w-full border-b border-gray-100 dark:border-gray-800">
              <TagsView />
            </div>

            <!-- 内部滚动区域 -->
            <n-layout 
              class="flex-1 bg-transparent" 
              content-style="display: flex; flex-direction: column; min-height: 100%;" 
              :native-scrollbar="false"
            >
              <div class="flex-1 p-4">
                <AppMain />
              </div>
            </n-layout>

            <!-- Footer -->
            <n-layout-footer v-if="appStore.showFooter" class="shrink-0 h-12" bordered>
              <div class="h-full flex items-center justify-center text-gray-400 text-xs text-center w-full">
                Copyright © 2026 {{ config.title }}. All Rights Reserved.
              </div>
            </n-layout-footer>
          </div>
        </n-layout>
      </n-layout>

      <!-- 配置抽屉 -->
      <SettingDrawer />
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { 
  NWatermark, 
  NLayout, 
  NLayoutSider, 
  NLayoutHeader, 
  NLayoutFooter 
} from 'naive-ui'
import { useAppStore } from '@/store/modules/app'
import { config } from '@/config'
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
import TagsView from './TagsView.vue'
import AppMain from './AppMain.vue'
import SettingDrawer from './SettingDrawer.vue'

const appStore = useAppStore()

// 动态计算水印属性
const watermarkProps = computed(() => {
  if (!appStore.showWatermark) return {}
  const { watermarkConfig } = appStore
  return {
    content: watermarkConfig.content,
    fontSize: watermarkConfig.fontSize,
    fontColor: watermarkConfig.color,
    fontStyle: watermarkConfig.fontStyle as any,
    fontWeight: watermarkConfig.fontWeight,
    lineHeight: watermarkConfig.lineHeight,
    width: watermarkConfig.width,
    height: watermarkConfig.height,
    xOffset: watermarkConfig.xOffset,
    yOffset: watermarkConfig.yOffset,
    // 叠加旋转逻辑：rotate = 用户设定的基本旋转 + 整体旋转
    rotate: (watermarkConfig.rotate || 0) + (watermarkConfig.overallRotation || 0),
    cross: watermarkConfig.cross,
    image: watermarkConfig.image,
    imageWidth: watermarkConfig.imageWidth,
    imageHeight: watermarkConfig.imageHeight,
    imageOpacity: watermarkConfig.imageOpacity,
    zIndex: 10
  }
})
</script>