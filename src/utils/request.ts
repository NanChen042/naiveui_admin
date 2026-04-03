import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useMessage } from 'naive-ui'
import { getToken } from './auth'

// 注意：由于 useMessage 必须在 setup 内部调用，
// 我们可以在 App.vue 中将 message 挂载到 window，以便在拦截器中使用
declare global {
  interface Window {
    $message: any
  }
}

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API || '/',
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    // 这里可以根据后端约定的状态码进行统一处理
    if (res.code !== undefined && res.code !== 200) {
      window.$message?.error(res.message || 'Error')
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res.data
  },
  (error) => {
    window.$message?.error(error.message || '网络错误')
    return Promise.reject(error)
  }
)

export default service
