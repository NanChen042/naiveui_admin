/**
 * 环境变量配置
 */
export const isDev = import.meta.env.DEV
export const isProd = import.meta.env.PROD

export const baseURL = import.meta.env.VITE_APP_BASE_API || '/'
