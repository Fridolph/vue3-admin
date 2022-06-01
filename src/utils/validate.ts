/**
 * 判断是
 * @param {String} 路径
 */
export function isExternalIcon(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path)
}
