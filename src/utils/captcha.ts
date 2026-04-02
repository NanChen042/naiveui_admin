/**
 * 极简图形验证码工具 (SVG 实现)
 */
export interface CaptchaResult {
  code: string // 验证码文本
  svg: string  // SVG 图片字符串
}

export function generateCaptcha(width = 120, height = 40): CaptchaResult {
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnpqrstwxyz2345678'
  let code = ''
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  // 绘制 SVG 文本与随机干扰线
  const lines = Array.from({ length: 4 }).map(() => {
    const x1 = Math.random() * width
    const y1 = Math.random() * height
    const x2 = Math.random() * width
    const y2 = Math.random() * height
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(0,0,0,0.1)" stroke-width="1"/>`
  }).join('')

  const textElements = code.split('').map((char, i) => {
    const x = 15 + i * 25
    const y = 28 + (Math.random() * 6 - 3)
    const rotate = Math.random() * 30 - 15
    return `<text x="${x}" y="${y}" transform="rotate(${rotate}, ${x}, ${y})" fill="#1890ff" font-size="24" font-weight="bold" font-family="Arial">${char}</text>`
  }).join('')

  const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="background: #f9f9f9; border-radius: 4px; cursor: pointer;">
    ${lines}
    ${textElements}
  </svg>`

  return { code, svg }
}
