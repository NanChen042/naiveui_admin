import request from '@/utils/request'

/**
 * 获取用户列表
 */
export function getUserList(params: { page: number, pageSize: number }) {
  return request.get('/api/user/list', { params }) as any
}
