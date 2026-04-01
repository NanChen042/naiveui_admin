import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { constantRoutes, RootRoute } from './routes'
import UserRoutes from './modules/user'
import DemoRoutes from './modules/demo'

// 组装业务路由集
const asyncRoutes: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    meta: { title: '业务大盘', canClickBack: true }
  },
  UserRoutes,
  DemoRoutes
]

// 将业务路由注入 Root Layout
RootRoute.children = asyncRoutes

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [RootRoute, ...constantRoutes]
})

// 路由拦截器：控制顶部加载进度条
router.beforeEach((to) => {
  window.$loadingBar?.start?.()
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
