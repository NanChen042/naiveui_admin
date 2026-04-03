import request from '@/utils/request'

/**
 * 登录
 */
export function login(data: any) {
  return request.post('/api/auth/login', data) as any
}

/**
 * 登出
 */
export function logout() {
  return request.post('/api/auth/logout') as any
}

/**
 * 获取用户信息
 */
export function getUserInfo() {
  return request.get('/api/auth/user-info') as any
}
