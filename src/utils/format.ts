/**
 * 格式化时间
 */
export function formatDateTime(date: Date | string | number, format = 'YYYY-MM-DD HH:mm:ss') {
  const d = new Date(date)
  const opt: { [key: string]: string } = {
    'Y+': d.getFullYear().toString(),
    'M+': (d.getMonth() + 1).toString(),
    'D+': d.getDate().toString(),
    'H+': d.getHours().toString(),
    'm+': d.getMinutes().toString(),
    's+': d.getSeconds().toString()
  }
  for (const k in opt) {
    const ret = new RegExp('(' + k + ')').exec(format)
    if (ret && ret[1]) {
      const val = opt[k] as string
      format = format.replace(ret[1], ret[1].length === 1 ? val : val.padStart(ret[1].length, '0'))
    }
  }
  return format
}

/**
 * 格式化金额
 */
export function formatMoney(amount: number | string) {
  return Number(amount).toLocaleString('zh-CN', {
    style: 'currency',
    currency: 'CNY'
  })
}
