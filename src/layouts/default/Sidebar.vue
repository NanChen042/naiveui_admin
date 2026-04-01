<template>
  <n-menu
    v-model:value="activeKey"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="menuOptions"
    @update:value="handleMenuClick"
  />
</template>

<script setup lang="ts">
import { h, ref, watch, type Component, computed } from 'vue'
import { useRouter, useRoute, type RouteRecordRaw } from 'vue-router'
import { NIcon, type MenuOption } from 'naive-ui'
import {
  BookOutline,
  PersonOutline,
  WineOutline,
  AppsOutline
} from '@vicons/ionicons5'

defineProps<{ collapsed: boolean }>()

const router = useRouter()
const route = useRoute()
const activeKey = ref<string | null>(route.path)

watch(() => route.path, (p) => { activeKey.value = p })

const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

// 自动映射图标
const iconMap: Record<string, Component> = {
  'Dashboard': BookOutline,
  'User': PersonOutline,
  'Demo': AppsOutline,
  'DemoMeat': PersonOutline,
  'DemoSeafood': WineOutline,
  'DemoBeverage': WineOutline,
  'DemoWhisky': WineOutline,
  'DemoJuice': WineOutline
}

const menuOptions = computed<MenuOption[]>(() => {
  const rootRoute = router.getRoutes().find(r => r.name === 'Root')
  const businessRoutes = rootRoute?.children || []
  
  const mapRouteToMenu = (routes: RouteRecordRaw[], parentPath = ''): MenuOption[] => {
    return routes
      .filter(r => !r.meta?.hidden)
      .map(r => {
        const fullPath = r.path.startsWith('/') ? r.path : `${parentPath}/${r.path}`.replace(/\/+/g, '/')
        
        const option: MenuOption = {
          label: (r.meta?.title as string) || (r.name as string),
          key: fullPath,
          icon: renderIcon(iconMap[r.name as string] || AppsOutline)
        }
        
        if (r.children && r.children.length > 0) {
          option.children = mapRouteToMenu(r.children, fullPath)
        }
        
        return option
      })
  }
  
  return mapRouteToMenu(businessRoutes)
})

const handleMenuClick = (key: string) => {
  router.push(key)
}
</script>