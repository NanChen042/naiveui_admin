import request from '@/utils/request'

/**
 * 获取系统配置
 */
export function getSystemConfig() {
  return request.get('/system/config')
}

/**
 * 获取菜单列表
 */
export function getMenuList() {
  return request.get('/system/menu')
}
