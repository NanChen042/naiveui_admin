import { h, type Component, computed } from 'vue'
import { useRouter, type RouteRecordRaw } from 'vue-router'
import { NIcon, type MenuOption } from 'naive-ui'
import {
  BookOutline,
  PersonOutline,
  WineOutline,
  AppsOutline,
  GridOutline,
  ListOutline
} from '@vicons/ionicons5'

  // 统一图标映射
  export const iconMap: Record<string, Component> = {
    'Dashboard': BookOutline,
    'User': PersonOutline,
    'Demo': AppsOutline,
    'DemoMeat': PersonOutline,
    'DemoSeafood': WineOutline,
    'DemoBeverage': WineOutline,
    'DemoWhisky': WineOutline,
    'DemoJuice': WineOutline,
    'DataDisplay': GridOutline,
    'DataTable': GridOutline,
    'DataForm': ListOutline
  }

import { useUserStore } from '@/store/modules/user'

export function useMenu() {
  const router = useRouter()
  const userStore = useUserStore()

  const renderIcon = (icon: Component) => {
    return () => h(NIcon, null, { default: () => h(icon) })
  }

  const menuOptions = computed<MenuOption[]>(() => {
    const rootRoute = router.getRoutes().find((r) => r.name === 'Root')
    const businessRoutes = rootRoute?.children || []

    const mapRouteToMenu = (routes: RouteRecordRaw[], parentPath = ''): MenuOption[] => {
      return routes
        .filter((r) => {
          if (r.meta?.hidden) return false
          // 角色过滤逻辑
          const routeRoles = r.meta?.roles as string[] | undefined
          if (routeRoles && !routeRoles.includes(userStore.role)) {
            return false
          }
          return true
        })
        .map((r) => {
          const fullPath = r.path.startsWith('/')
            ? r.path
            : `${parentPath}/${r.path}`.replace(/\/+/g, '/')

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

  return {
    menuOptions
  }
}
