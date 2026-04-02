import type { App, DirectiveBinding } from 'vue'
import { useUserStore } from '@/store/modules/user'

/**
 * 权限指令
 * 使用示例：
 * <n-button v-permission="['admin']">仅管理员可见</n-button>
 * <div v-permission="['admin', 'user']">管理员和普通用户均可见</div>
 */
export const permissionDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding
    const userStore = useUserStore()

    if (value && Array.isArray(value) && value.length > 0) {
      const hasPermission = value.includes(userStore.role)

      if (!hasPermission) {
        // 如果没有权限，直接从 DOM 中移除元素
        el.parentNode?.removeChild(el)
      }
    } else {
      throw new Error("v-permission 指令必须接收一个数组角色限制，例如 v-permission=\"['admin']\"")
    }
  }
}

export function setupPermissionDirective(app: App) {
  app.directive('permission', permissionDirective)
}
