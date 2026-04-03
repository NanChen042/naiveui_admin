import type { MockMethod } from 'vite-plugin-mock'
import { resultSuccess, resultError } from './_utils'

export default [
  // 登录接口
  {
    url: '/api/auth/login',
    method: 'post',
    response: ({ body }: { body: any }) => {
      const { username, password } = body
      if (password !== '123456') {
        return resultError('密码错误 (初始密码: 123456)')
      }
      return resultSuccess({
        token: `fake-jwt-token-${username}-${Math.random().toString(36).substring(7)}`,
        role: username === 'admin' ? 'admin' : 'user',
        username: username === 'admin' ? 'Administrator' : 'General User',
        avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      })
    }
  },
  // 获取用户信息
  {
    url: '/api/auth/user-info',
    method: 'get',
    response: () => {
      return resultSuccess({
        role: 'admin',
        username: 'Administrator',
        avatar: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      })
    }
  },
  // 登出
  {
    url: '/api/auth/logout',
    method: 'post',
    response: () => {
      return resultSuccess(true)
    }
  }
] as MockMethod[]
