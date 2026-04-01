import type { RouteRecordRaw } from 'vue-router'

/**
 * 基础路由，无需权限即可访问
 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录', hideBreadcrumb: true }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue'),
    meta: { title: '页面不存在', hideBreadcrumb: true }
  }
]

/**
 * 根路由配置，通常是一个 Layout 布局架子
 */
export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  component: () => import('@/layouts/default/index.vue'),
  redirect: '/dashboard',
  meta: { title: '工作区', hideBreadcrumb: true },
  children: []
}
