import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { constantRoutes, RootRoute } from './routes'
import UserRoutes from './modules/user'
import DemoRoutes from './modules/demo'
import DataRoutes from './modules/data'
import { useUserStore } from '@/store/modules/user'

// 组装业务路由集
const asyncRoutes: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    meta: { title: '业务大盘', canClickBack: true }
  },
  UserRoutes,
  DemoRoutes,
  DataRoutes
]

// 将业务路由注入 Root Layout
RootRoute.children = asyncRoutes

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [RootRoute, ...constantRoutes]
})

// 路由拦截器：控制进度条与权限检查
router.beforeEach((to, from, next) => {
  window.$loadingBar?.start?.()
  
  const userStore = useUserStore()
  const { roles } = to.meta

  // 1. 判断是否已登录
  const hasToken = userStore.token

  if (!hasToken) {
    // 未登录：如果是去登录页，放行；否则重定向到登录页
    if (to.path === '/login') {
      return next()
    }
    return next({ path: '/login', query: { redirect: to.fullPath } })
  }

  // 2. 已登录：如果去登录页，重定向到首页
  if (to.path === '/login') {
    return next({ path: '/' })
  }

  // 3. 角色权限检查
  if (roles && Array.isArray(roles)) {
    if (!roles.includes(userStore.role)) {
      // 无权限时跳转到首页或 403 页面
      window.$message?.error('抱歉，您没有访问该页面的权限')
      return next({ name: 'Dashboard' })
    }
  }

  next()
})

router.afterEach((to) => {
  window.$loadingBar?.finish?.()
  // 动态修改页面标题
  const title = to.meta?.title as string
  if (title) {
    document.title = `${title} | Admin Pro`
  }
})

export default router
