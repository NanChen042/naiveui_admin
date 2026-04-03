/**
 * 统一 Mock 响应工具
 */
export function resultSuccess<T = any>(data: T, { message = 'ok' } = {}) {
  return {
    code: 200,
    data,
    message,
    type: 'success'
  }
}

export function resultError(message = 'Request failed', { code = 500, data = null } = {}) {
  return {
    code,
    data,
    message,
    type: 'error'
  }
}

export function getRequestParams(url: string) {
  const urlSearchParams = new URLSearchParams(url.split('?')[1])
  const params = Object.fromEntries(urlSearchParams.entries())
  return params
}
